import React from "react";
import CreateNote from "../../Components/CreateNote/CreateNote";
import DisplayNote from "../../Components/DisplayNotes/DisplayNote";
import noteService from "../../Services/noteService";

export default class ParentComp extends React.Component {
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
      let filterNote = data.data.data.data.filter(
        (note) => note.isDeleted === false
      );
      this.setState({
        notes: filterNote,
      });
    });
  };

  render() {
    return (
      <div>
        <CreateNote
          getNotes={() => {
            this.getNotes();
          }}
        />
        <DisplayNote
          notes={this.state.notes}
          getNotes={() => {
            this.getNotes();
          }}
        />
      </div>
    );
  }
}
