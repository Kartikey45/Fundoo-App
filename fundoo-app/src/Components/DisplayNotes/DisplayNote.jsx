import React, { Component } from "react";
import "./DisplayNotes.scss";
import noteService from "../../Services/noteService";
import { Card } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";

export default class DisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // notesData: [],
    };
    // noteService.displayNote().then((data) => {
    //   console.log(data.data.data.data);
    //   this.setState({ notesData: data.data.data.data });
    // });
  }

  onDelete(element) {
    console.log("Deleted...!");
    let noteData = {
      noteIdList : [element] , 
      isDeleted : true
    }
    noteService.trashNote(noteData).then((data) => {
      this.props.getNotes();
    });
  }

  render() {
    console.log(this.props.notes);
    let card = this.props.notes.map((element) =>
      element.isDeleted ? (
        ""
      ) : (
        <Card className="cardiv">
          <div className="titleDiv">{element.title}</div>
          <div className="descriptiondiv">{element.description}</div>
          <div className="deleteIcon">
            <DeleteIcon type="submit" onClick ={()=>this.onDelete(element.id)} />
          </div>
        </Card>
      )
    );

    return <div className="displayNoteParent">{card}</div>;
  }
}
