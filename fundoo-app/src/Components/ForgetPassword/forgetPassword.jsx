import React, { Component } from "react";
import "./forgetPassword.scss";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
//import { Link } from "react-router-dom";

export default class forgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : null,

      formErrors: {
        errorEmail : "",
      },
    };
  }

  onValueChange = (e) => {
    let emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    this.setState({
      [e.target.name]: e.target.value,
    });
    // nameValidation.test(e.target.value)
    // console.log(nameValidation.test(e.target.value));

    let inputs = this.state.formErrors;
    inputs.errorEmail =
        emailValidation.test(e.target.value) === true
            ? ""
            : "Enter valid email";
  };

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
            <div className="fpEmail">
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              required
              fullWidth
              onChange={this.onValueChange}
            />
            <span className="errorMessage">{this.state.formErrors.errorEmail}</span>
            </div>
            
          </div>
          <div className="fpbutton">
            <Button variant="primary">Next</Button>
          </div>
        </div>
      </div>
    );
  }
}
