import React, { Component } from "react";
import "./login.scss";
import Button from "react-bootstrap/Button";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";

const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,

      formErrors: {
        errorEmail: "",
        errorPassword: "",
      },
    };
  }

  onValueChange = (e) => {
    // let emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      [e.target.name]: e.target.value,
    });
    // nameValidation.test(e.target.value)
    // console.log(nameValidation.test(e.target.value));

    let inputs = this.state.formErrors;

    switch (e.target.name) {
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

      default:
        break;
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password,
      cartId: "",
    };
    UserService.login(userData).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="outerCard">
        <div className="loginCard">
          <div className="fundooAlign">
            <div className="Fcolor">F</div>
            <div className="Fcolor">u</div>
            <div className="Fcolor">n</div>
            <div className="Fcolor">d</div>
            <div className="Fcolor">o</div>
            <div className="Fcolor">o</div>
          </div>
          <div className="font1">
            <h5>Sign In</h5>
          </div>
          <div className="input1">
            <div className="inputEmail">
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                required
                fullWidth
                name="email"
                onChange={this.onValueChange}
              />
              <span className="errorMessage">
                {this.state.formErrors.errorEmail}
              </span>
            </div>

            <div className="inputEmail">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                ref="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                required
                fullWidth
                name="password"
                onChange={this.onValueChange}
              />
              <span className="errorMessage">
                {this.state.formErrors.errorPassword}
              </span>
            </div>
          </div>
          <br />
          <div className="forgetText">
            <Link to="/forgetPass">
              <h6>Forget password ?</h6>
            </Link>
          </div>
          <div className="buttonForLogin">
            <Link to="/signup">
              <h6>Create account</h6>
            </Link>
            <Button type="submit" onClick={this.onSubmit} variant="primary">
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
