import React, { Component } from "react";
import "./forgetPassword.scss";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
//import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";
import CustomToast from "../CustomToast";

const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default class forgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,

      formErrors: {
        errorEmail: "",
      },

      Open: false,
      Message: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    let inputs = this.state.formErrors;
    inputs.errorEmail =
      emailValidation.test(e.target.value) === true ? "" : "Enter valid email";
  };

  onSubmit = (event) => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
    };

    if (this.state.email === null) {
      console.log("Some input fields are not filled");
      this.setState({
        Open: true,
        Message: "Some input fields are not filled",
      });
    } else if (this.state.formErrors.errorEmail !== "") {
      console.log("Input Fields are not correctly filled");
      this.setState({
        Open: true,
        Message: "Input Fields are not correctly filled",
      });
    } else {
      UserService.forgetPass(userData)
        .then((data) => {
          console.log("Reset password link sent to your Email address", data);
          this.setState({
            Open: true,
            Message: "Reset password link sent to your Email address",
          });
        })
        .catch((error) => {
          console.log("Invalid Email ", error);
          this.setState({
            Open: true,
            Message: "Invalid Email",
          });
        });
    }
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
              <span className="errorMessage">
                {this.state.formErrors.errorEmail}
              </span>
            </div>
          </div>
          <div className="fpbutton">
            <Button type="submit" onClick={this.onSubmit} variant="primary">
              Next
            </Button>
          </div>
        </div>
        <CustomToast
          display={this.state.Open}
          Message={this.state.Message}
          onClose={() => {
            this.setState({ Open: false });
          }}
        />
      </div>
    );
  }
}
