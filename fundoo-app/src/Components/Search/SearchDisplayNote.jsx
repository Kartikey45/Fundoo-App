import React from "react";
import DisplayNote from "../DisplayNotes/DisplayNote";
import Dashboard from "../DashboardElements/Dashboard";
import noteService from "../../Services/noteService";
import dataServices from "../../Services/dataServices";

export default class SearchDisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      inputResult: [],
    };
    this.findNotes();
  }

  componentDidMount() {
    dataServices.Share.subscribe((inputValue) => {
      console.log("input value");
        this.setState({
          searchInput : inputValue
        }, () => {
          console.log("search", this.state.searchInput , "hello") 
        });
        //console.log("search", this.state.searchInput , "hello") 
      });
  }

  findNotes = () => {
    noteService.displayNote().then((data) => {
      console.log(data.data.data.data);
      let Data = data.data.data.data;
      let filterNote = Data.filter((note) =>
        note.title.includes(this.state.searchInput) && note.isArchived === false && note.isDeleted === false
      );
      this.setState({
        inputResult: filterNote,
      });
    });
  };

  render() {
    return (
      <DisplayNote
        notes={this.state.inputResult}
        // getNotes={() => {
        //   this.findNotes();
        // }}
      />
    );
  }
}
