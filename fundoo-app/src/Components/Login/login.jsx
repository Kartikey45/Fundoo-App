import React, { Component } from "react";
import "./login.scss";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

export default class login extends React.Component {
  constructor() {
    super();
  }

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
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              ref="password"
              hintText="Password"
              floatingLabelText="Password"
              type="password"
            />
          </div>
          <br />
          <div className="forgetText"><Link to = "/forgetPass"><h6>Forget password ?</h6></Link></div>
          <div className="buttonForLogin">
            <Link to="/signup">
              <h6>Create account</h6>
            </Link>
            <Button variant="primary">Login</Button>
          </div>
        </div>
      </div>
    );
  }
}
