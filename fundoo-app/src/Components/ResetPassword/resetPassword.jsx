import React, { Component } from "react";
import "./resetPassword.scss";
import Button from "react-bootstrap/Button";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import { Link } from "react-router-dom";

export default class resetPassword extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="rpouterCard">
        <div className="rploginCard">
          <div className="rpfundooAlign">
            <div className="Fcolor">F</div>
            <div className="Fcolor">u</div>
            <div className="Fcolor">n</div>
            <div className="Fcolor">d</div>
            <div className="Fcolor">o</div>
            <div className="Fcolor">o</div>
          </div>
          <div className="rpfont1">
            <h5>Account recovery</h5>
          </div>
          <div className="rptext">
            <h6>Enter new password</h6>
          </div>
          <div className="rpinput1">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              ref="password"
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              required
            />
          </div>
          <div className="rpinput2">
            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              ref="password"
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              required
            />
          </div>
          <div className="rpbutton">
            <Button variant="primary">Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}
