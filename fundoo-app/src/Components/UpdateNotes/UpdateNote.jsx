import React, { useState, useEffect } from "react";
import "./UpdateNote.scss";
import { Modal, Button } from "react-bootstrap";
import noteService from "../../Services/noteService";
import TextField from "@material-ui/core/TextField";
import IconBar from "../../Components/IconBar/IconBar";

export default function UpdateNote(props) {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  const updateNotes = () => {
    let noteData = {
      noteId: props.note.id,
      title: updateTitle,
      description: updateDescription,
    };

    noteService.updateNote(noteData).then((data) => {
      //   console.log(data.data.data.data);
      //   setNotes(  data.data.data.data );
      props.getNotes();
    });
    props.onHide();
  };

  useEffect(() => {
    setUpdateTitle(props.note.title);
    setUpdateDescription(props.note.description);
    console.log(props.note.title + "hello");
  }, [props.note.title, props.note.description]);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <TextField
            fullWidth
            id="standard-basic"
            placeholder="Title"
            name="title"
            value={updateTitle}
            onChange={(event) => setUpdateTitle(event.target.value)}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField
          fullWidth
          id="standard-textarea"
          placeholder="Description"
          name="description"
          value={updateDescription}
          multiline
          onChange={(event) => setUpdateDescription(event.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        {/* <IconBar className = "updateIconBar" /> */}
        <div style = {{width : "50%" , marginRight: "33%"}}><IconBar/></div>
        
        <Button onClick={updateNotes}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

