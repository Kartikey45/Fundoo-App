import React, { Component } from "react";
import "./forgetPassword.scss";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
//import { Link } from "react-router-dom";

export default class forgetPassword extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="fpOuterdiv">
        <div className="fpInnerdiv">
          <div className="fpFundooAlign">
            <div className="Fcolor">F</div>
            <div className="Fcolor">u</div>
            <div className="Fcolor">n</div>
            <div className="Fcolor">d</div>
            <div className="Fcolor">o</div>
            <div className="Fcolor">o</div>
          </div>
          <div className="font1">
            <h5>Find your Email</h5>
          </div>
          <div className="fptextmargin">
            <h6>Enter your phone number or recovery email</h6>
          </div>
          <div className="fpinput">
            <TextField
              id="outlined-basic"
              label="Phone number or email"
              variant="outlined"
              required
            />
          </div>
          <div className="fpbutton">
            <Button variant="primary">Next</Button>
          </div>
        </div>
      </div>
    );
  }
}
