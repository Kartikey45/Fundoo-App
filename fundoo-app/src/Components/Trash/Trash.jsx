import React from "react";
import DisplayNote from "../DisplayNotes/DisplayNote";
import noteService from "../../Services/noteService";

export default class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    noteService.displayNote().then((data) => {
      console.log(data.data.data.data);
      let filterNote = data.data.data.data.filter((note) => note.isDeleted);
      this.setState({
        notes: filterNote,
      });
    });
  };

  render() {
    return (
      <DisplayNote
        notes={this.state.notes}
        // getNotes={() => {
        //   this.getNotes();
        // }}
      />
    );
  }
}
