import React, { useState, useEffect } from "react";
import DisplayNote from "../DisplayNotes/DisplayNote";
import noteService from "../../Services/noteService";

export default function Archieve(props){
      const [notes, setNotes] =  useState([]);

      useEffect(() => {
        getNotes();
      }, []);

      const getNotes = () => {
        noteService.displayNote().then((data) => {
          console.log(data.data.data.data);
          let filterNote = data.data.data.data.filter((note) => note.isArchived);
          setNotes(filterNote);
        });
      };
    

    return(
        <DisplayNote
        notes={notes}
        getNotes={() => {
          this.getNotes();
        }}
      />
    );
}