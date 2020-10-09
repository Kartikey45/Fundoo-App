import React, { Component } from "react";
import "./CreateNote.scss";
import TextField from "@material-ui/core/TextField";
import UserService from "../../Services/UserService";

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      title: "",
      description: "",
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

  onSubmit = (event) => {
    event.preventDefault();
    let note = {
      title: this.state.title,
      description: this.state.description,
    };

    UserService.addNote(note).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="parent">
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
              style={{ height: "80px" }}
              id="standard-textarea"
              placeholder="Description"
              name="description"
              required
              multiline
              onChange={this.onValueChange}
            />

            <div className="submitNote">
              <span onClick={this.handleChange}>Close</span>
              <span onClick={this.onSubmit}>Submit</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
