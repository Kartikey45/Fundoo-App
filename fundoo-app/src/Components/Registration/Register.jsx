import React, { Component } from "react";
import "./Register.scss";
import Button from "react-bootstrap/Button";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";

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
    };
  }

  onValueChange = (e) => {
    let nameValidation = /^[A-Z][a-zA-Z]*$/;
    let emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      [e.target.name]: e.target.value,
    });
    // nameValidation.test(e.target.value)
    // console.log(nameValidation.test(e.target.value));

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
    UserService.register(userData).then((data) => {
      console.log(data);
    });
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
                {/* <h7>You can use letters , numbers and periods</h7> */}
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
                    // ref="password"
                    // hintText="Password"
                    // floatingLabelText="Password"
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
                    // ref="password"
                    // hintText="Password"
                    // floatingLabelText="Password"
                    type="password"
                    required
                    onChange={this.onValueChange}
                  />
                </div>
              </div>
              <div className="flex">
                {/* <h7>
                  Use 8 or more characters mix with letters, numbers & symbols
                </h7> */}
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
      </div>
    );
  }
}
