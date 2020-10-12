import React from "react";
import "./App.css";
import Register from "./Components/Registration/Register";
import login from "./Components/Login/login";
import forgetPassword from "./Components/ForgetPassword/forgetPassword";
import resetPassword from "./Components/ResetPassword/resetPassword";
import Dashboard from "./Components/DashboardElements/Dashboard";
//import UpdateNote from "./Components/UpdateNotes/UpdateNote";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={login} />
          <Route path="/forgetPass" component={forgetPassword} />
          <Route path="/resetpassword/:token" component={resetPassword} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/updateNote" component={UpdateNote} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
