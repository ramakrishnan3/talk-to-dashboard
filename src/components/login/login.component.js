import React from 'react';
import './login.component.css';
import {inject, observer} from "mobx-react";
import userDetails from '../../store/userDetails';

class Login extends React.Component {

  render() {
    return (
        <div className="login-container">
            <input type="button" value="Login" onClick={e => userDetails.setIsLoggedIn(true)} />            
        </div>
    )
  }
}

export default inject('userDetails')(observer(Login));

