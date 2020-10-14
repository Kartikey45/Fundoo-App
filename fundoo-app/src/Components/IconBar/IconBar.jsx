import React, { useState, useEffect } from "react";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import "./IconBar.scss";
import { Dropdown } from "react-bootstrap";
import { ReactComponent as Archieve } from "../../Images&logos/Archies.svg";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import noteService from "../../Services/noteService";

export default function IconBar(props) {
  //const [noteColor, setNoteColor] =  useState("");

  const changeColor = (color) => {
    console.log(props.notes);
    if(props.onColorChange !== null ){
      props.onColorChange(color)
    }
    let Data = {
      color: color,
      noteIdList: [props.note],
    };

    noteService
      .updateColor(Data)
      .then((response) => {
        console.log(response);
        props.getNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={props.className}
      style={{ display: "flex", justifyContent: "space-between", width: "80%" }}
    >
      <AddAlertIcon />
      <PersonAddIcon  />
      <Dropdown>
        <Dropdown.Toggle
          style={{
            padding: "0px",
            border: "none",
            backgroundColor: "transparent",
            paddingBottom: "4px",
          }}
          variant="light"
          id="dropdown-basic"
        >
          <ColorLensIcon  />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100px",
                height: "100px",
              }}
            >
              <div
                style={{ height: "25px", width: "25px" }}
                onClick={() => {
                  changeColor("#ff8080"); 
                }}
                style={{
                  border: "1px solid red",
                  backgroundColor: "#ff8080",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
               
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#ff80ff");
                }}
                style={{
                  border: "1px solid purple",
                  backgroundColor: "#ff80ff",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
                
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#ffff80"); 
                }}
                style={{
                  border: "1px solid yellow",
                  backgroundColor: "#ffff80",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
              
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#8080ff");
                }}
                style={{
                  border: "1px solid blue",
                  backgroundColor: "#8080ff",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
              
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#80ff80"); 
                }}
                style={{
                  border: "1px solid green",
                  backgroundColor: "#80ff80",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
               
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#ccccb3"); 
                }}
                style={{
                  border: "1px solid silver",
                  backgroundColor: "#ccccb3",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
              
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#FFFFFF"); 
                }}
                style={{
                  border: "1px solid whitesmoke",
                  backgroundColor: "whitesmoke",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
             
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#df9f9f"); 
                }}
                style={{
                  border: "1px solid maroon",
                  backgroundColor: "#df9f9f",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
              
              ></div>
              <div
                style={{ height: "25px" }}
                onClick={() => {
                  changeColor("#80ffbf"); 
                }}
                style={{
                  border: "1px solid lightblue",
                  backgroundColor: "#80ffbf",
                  width: "25px",
                  height: "25px",
                  margin: "4px",
                }}
              
              ></div>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <CropOriginalIcon />
      <Archieve style={{ fill: "black" }} />
    </div>
  );
}
