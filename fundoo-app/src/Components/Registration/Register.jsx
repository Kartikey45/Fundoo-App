import React, { Component } from "react";
import "./Register.scss";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Manipulation">
        <div className="RegistrationBody">
          <div className="inputPanelBody">
            <div className="fundooTextAlign">
              <div className="Fcolor">F</div>
              <div className="Fcolor">u</div>
              <div className="Fcolor">n</div>
              <div className="Fcolor">d</div>
              <div className="Fcolor">o</div>
              <div className="Fcolor">o</div>
            </div>
            <div className="font">
              <h5>Create your Fundoo Account</h5>
            </div>

            <div className="InputPanel">
              <TextField
                className="textSize"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
              />
              <TextField
                className="textSize"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="InputPanel1">
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                fullWidth
                size="small"
              />
            </div>
            <div className="flex">
              <h7>You can use letters , numbers and periods</h7>
            </div>
            <div className="Passwordfield">
              <TextField
                className="textSize"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                ref="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
              />

              <TextField
                className="textSize"
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                size="small"
                ref="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
              />
            </div>
            <div className="flex">
              <h7>
                Use 8 or more characters mix with letters, numbers & symbols
              </h7>
            </div>
            <div className="buttons">
            <Link  to ="/signin">
              <Button variant="primary">Login</Button>
              </Link>
              <Button variant="primary">Submit</Button>
            </div>
          </div>
          <div className="image">
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
              width="244"
              height="244"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
