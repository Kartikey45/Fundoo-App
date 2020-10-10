import React, { Component } from "react";
import "./DisplayNotes.scss";
import noteService from "../../Services/noteService";
import { Card } from "react-bootstrap";

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

  render() {

    let card = this.props.notes.map((element) => element.isDeleted ? "" : 
    <card className="cardiv">
        <div>{element.title}</div>
        <div className= "descriptiondiv" >{element.description}</div>
    </card> );

    return (
      <div className = "displayNoteParent">
        {card}
      </div>
    );
  }
}
