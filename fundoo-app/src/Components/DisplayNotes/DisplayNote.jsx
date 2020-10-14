import React, { Component } from "react";
import "./DisplayNotes.scss";
import noteService from "../../Services/noteService";
import { Card } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, Button } from "react-bootstrap";
import UpdateNote from "../../Components/UpdateNotes/UpdateNote";
import IconBar from "../../Components/IconBar/IconBar";

export default class DisplayNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow : false,
      currentNote : '',
      // notesData: [],
    }
    // noteService.displayNote().then((data) => {
    //   console.log(data.data.data.data);
    //   this.setState({ notesData: data.data.data.data });
    // });
  }

  modalOpen(object){
    //console.log(this.state.modalShow)
    this.setState({
      modalShow : true,
      currentNote : object,
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
    // console.log(this.props.notes);
    let card = this.props.notes.map((element) =>
      element.isDeleted ? (
        ""
      ) : (
        <Card className="cardiv" style ={{ backgroundColor : element.color }} >
          <div className="titleDiv" onClick= {()=>{this.modalOpen(element)}} >{element.title}</div>
          <div className="descriptiondiv">{element.description}</div>
          <div className="deleteIcon">

            <IconBar 
             onColorChange = {null}
             note = {element.id}
             getNotes = {()=>{this.props.getNotes()}}
             />

            <DeleteIcon
              type="submit"
              onClick={() => this.onDelete(element.id)}
            />
          </div>
          
        </Card>
      )
    );

    return <div className="displayNoteParent">
      {card}
      <UpdateNote 
          show={this.state.modalShow}
          note = {this.state.currentNote}
          onHide={()=>{this.setState({modalShow : false})} } 
          getNotes = {()=>{this.props.getNotes()}}
          />
    </div>;
  }
}
