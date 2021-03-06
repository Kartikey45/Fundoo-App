import React, { Component } from "react";
import "./Register.scss";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";
import CustomToast from "../CustomToast";

const nameValidation = /^[A-Z][a-zA-Z]*$/;
const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      formErrors: {
        errorFirstName: "",
        errorLastName: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: "",
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

    switch (e.target.name) {
      case "firstName":
        inputs.errorFirstName =
          nameValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid first name";

        break;
      case "lastName":
        inputs.errorLastName =
          nameValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid last name";
        break;
      case "email":
        inputs.errorEmail =
          emailValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid email";
        break;
      case "password":
        inputs.errorPassword =
          passwordValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid password";
        break;
      case "confirmPassword":
        inputs.errorConfirmPassword =
          passwordValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid password";
        break;
      default:
        break;
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    let userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      service: "advance",
    };

    if (
      this.state.firstName === null ||
      this.state.lastName === null ||
      this.state.email === null ||
      this.state.password === null ||
      this.state.confirmPassword === null
    ) {
      console.log("Some input fields are not filled");
      this.setState({
        Open: true,
        Message: "Some input fields are not filled",
      });
    } else if (
      this.state.formErrors.errorFirstName !== "" ||
      this.state.formErrors.errorLastName !== "" ||
      this.state.formErrors.errorEmail !== "" ||
      this.state.formErrors.errorPassword !== "" ||
      this.state.formErrors.errorConfirmPassword !== ""
    ) {
      console.log("Input Fields are not properly filled");
      this.setState({
        Open: true,
        Message: "Input Fields are not properly filled",
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      console.log("Password not match");
      this.setState({
        Open: true,
        Message: "Password not match",
      });
    } else {
      UserService.register(userData)
        .then((data) => {
          console.log(data.data.data.message);
          this.setState({ Open: true, Message: "Registered Successfully" });
        })
        .catch((error) => {
          console.log(error.message);
          this.setState({
            Open: true,
            Message: "Email already exists",
          });
        });
    }
  };

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
            <form>
              <div className="InputPanel">
                <div className="textSize">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    size="small"
                    name="firstName"
                    fullWidth
                    required
                    onChange={this.onValueChange}
                  />
                  <span className="errorMessage">
                    {this.state.formErrors.errorFirstName}
                  </span>
                </div>
                <div className="textSize">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    name="lastName"
                    fullWidth
                    required
                    onChange={this.onValueChange}
                  />
                  <span className="errorMessage">
                    {this.state.formErrors.errorLastName}
                  </span>
                </div>
              </div>
              <div className="InputPanel1">
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  name="email"
                  size="small"
                  required
                  onChange={this.onValueChange}
                />
              </div>

              <div className="flex1">
                <h7>You can use letters , numbers and periods</h7>
                <span className="errorMessage">
                  {this.state.formErrors.errorEmail}
                </span>
              </div>

              <div className="Passwordfield">
                <div>
                  <TextField
                    className="textSize"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="small"
                    name="password"
                    type="password"
                    required
                    onChange={this.onValueChange}
                  />
                </div>
                <div className="reg-conf-pass">
                  <TextField
                    className="textSize"
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                    name="confirmPassword"
                    type="password"
                    required
                    onChange={this.onValueChange}
                  />
                </div>
              </div>
              <div className="flex">
                <h7>
                  Use 8 or more characters mix with letters, numbers & symbols
                </h7>
                <span className="errorMessage">
                  {this.state.formErrors.errorPassword}
                </span>
              </div>

              <div className="buttons">
                <Link to="/signin">
                  <h6>Sign in instead</h6>
                </Link>
                <Button type="submit" onClick={this.onSubmit} variant="primary">
                  Create account
                </Button>
              </div>
            </form>
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
