import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./Components/Registration/Register";
import login from "./Components/Login/login";
import forgetPassword from "./Components/ForgetPassword/forgetPassword";
import resetPassword from "./Components/ResetPassword/resetPassword";
import Dashboard from "./Components/DashboardElements/Dashboard";
import Note from "./Components/Note/Note";
import Trash from "./Components/Trash/Trash";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={login} />
        <Route path="/forgetPass" component={forgetPassword} />
        <Route path="/resetpassword/:token" component={resetPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/note" component={Note} />
        <Route path="/dashboard/trash" component={Trash} />
      </div>
    </BrowserRouter>
  );
}

export default App;
