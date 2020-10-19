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
import Archieve from "./Components/Archieve/Archieve"
import Auth from "./Components/Authantication/AuthGuard"
import SearchDisplayNote from "./Components/Search/SearchDisplayNote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={login} />
        <Route path="/forgetPass" component={forgetPassword} />
        <Route path="/resetpassword/:token" component={resetPassword} />
        <Auth path="/dashboard" component={Dashboard} />
        <Auth path="/dashboard/note" component={Note} />
        <Auth path="/dashboard/trash" component={Trash} />
        <Auth path="/dashboard/archieve" component={Archieve} />
        <Auth path="/dashboard/search" component={SearchDisplayNote} />
      </div>
    </BrowserRouter>
  );
}

export default App;
