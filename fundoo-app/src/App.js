import React from "react";
import "./App.css";
import Register from "./Components/Registration/Register";
import login from "./Components/Login/login";
import forgetPassword from "./Components/ForgetPassword/forgetPassword";
import resetPassword from "./Components/ResetPassword/resetPassword";
import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={login} />
          <Route path="/forgetPass" component={forgetPassword} />
          <Route path="/resetPass" component={resetPassword} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
