import React, { Component } from "react";
import "./resetPassword.scss";
import Button from "react-bootstrap/Button";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import { Link, Route, Params } from "react-router-dom";

const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default class resetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      confirmPassword: null,

      formErrors: {
        errorPassword: "",
        errorConfirmPassword: "",
      },
    };
  }

  onValueChange = (e) => {
   
    this.setState({
      [e.target.name]: e.target.value,
    });
    

    let inputs = this.state.formErrors;

    switch (e.target.name) {
      case "password":
        inputs.errorPassword =
        passwordValidation.test(e.target.value) === true
            ? ""
            : "Enter valid password";
        break;
      case "confirmPassword":
        inputs.errorConfirmPassword =
          passwordValidation.test(e.target.value) === true
            ? ""
            : "Enter valid password";
        break;

      default:
        break;
    }
  };

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
              name = "password"
              fullWidth
              required
              onChange={this.onValueChange}
            />
            <span className="errorMessage">{this.state.formErrors.errorPassword}</span>
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
              name="confirmPassword"
              fullWidth
              required
              onChange={this.onValueChange}
            />
            <span className="errorMessage">{this.state.formErrors.errorConfirmPassword}</span>
          </div>
          <div className="rpbutton">
            <Button variant="primary">Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}
