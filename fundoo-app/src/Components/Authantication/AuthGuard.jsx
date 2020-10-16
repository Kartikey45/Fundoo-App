import {Route,Redirect} from 'react-router-dom';
import React from 'react';

 function  AuthGuard (props){
    
    if(!(localStorage.getItem("token") === null))
    {
        return(
            <Route  path={props.path}  exact={props.exact} component={props.component} />
       );    
    }
    else
    {
        return(<Redirect  to="/signin"  />);
    }
 } 

export  default  AuthGuard;