import React, { Component } from "react";
import "./DisplayNotes.scss";
import noteService from "../../Services/noteService";
import { Card } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, Button } from "react-bootstrap";
import UpdateNote from "../../Components/UpdateNotes/UpdateNote";

export default class DisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow : false,
      // notesData: [],
    }
    // noteService.displayNote().then((data) => {
    //   console.log(data.data.data.data);
    //   this.setState({ notesData: data.data.data.data });
    // });
  }

  modalOpen(){
    console.log(this.state.modalShow)
    this.setState({
      modalShow : !this.state.modalShow,
    });
  }

  onDelete(element) {
    console.log("Deleted...!");
    let noteData = {
      noteIdList: [element],
      isDeleted: true,
    };
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
        <Card className="cardiv" >
          <div className="titleDiv" onClick= {()=>{this.modalOpen()}} >{element.title}</div>
          <div className="descriptiondiv">{element.description}</div>
          <div className="deleteIcon">
            <DeleteIcon
              type="submit"
              onClick={() => this.onDelete(element.id)}
            />
          </div>
          <UpdateNote 
          show={this.state.modalShow}
          onHide={()=>{this.modalOpen()}} />
        </Card>
      )
    );

    return <div className="displayNoteParent">{card}</div>;
  }
}
