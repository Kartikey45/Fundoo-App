import React, { Component } from "react";
import "./CreateNote.scss";
import TextField from "@material-ui/core/TextField";
import noteService from "../../Services/noteService";
import IconBar from "../../Components/IconBar/IconBar";

export default class CreateNote extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      title: "",
      description: "",
      color : ""
    };
  }

  handleChange = () => {
    this.setState({
      show: !this.state.show,
    });
  }; 

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onColorChange = (newColor) => {
    console.log("color" + newColor);
    this.setState({
       color : newColor
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.handleChange();
    let note = {
      title: this.state.title,
      description: this.state.description,
      color: this.state.color,
    };

    noteService.addNote(note).then((data) => {
      console.log(data);
      this.props.getNotes();
    });

    this.setState({
      title: "",
      description: "",
      color: "",
    })
  };

  render() {
    return (
      <div className="parent" style = {{ backgroundColor : this.state.color }}>
        {this.state.show ? (
          <div className="showNote" type="submit" onClick={this.handleChange}>
            Take a note...
          </div>
        ) : (
          <div
            className="NoteWithDescriptionANdTitle"
            //  onClick={this.handleChange}
          >
            <TextField
              id="standard-basic"
              placeholder="Title"
              name="title"
              required
              onChange={this.onValueChange}
            />
            <TextField
              id="standard-textarea"
              placeholder="Description"
              name="description"
              required
              multiline
              onChange={this.onValueChange}
            />

            <div className="submitNote">
              {/* <span onClick={this.handleChange}>Close</span> */}
              <IconBar className = "displayIconBar" onColorChange = {(newColor) => {this.onColorChange(newColor)}} />
              <span onClick={this.onSubmit}>Close</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
