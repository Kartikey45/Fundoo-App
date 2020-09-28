import React, { Component } from "react";
import "./Register.scss";
import Button from "react-bootstrap/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Manipulation">
        <div className="RegistrationBody">
          <div>
            <div className="jhdf">
              <h3 className="FontSerif">Fundoo</h3>
              <div className = "hfgt">
              <br></br><br></br><TextField id="outlined-basic" label="First Name" variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
