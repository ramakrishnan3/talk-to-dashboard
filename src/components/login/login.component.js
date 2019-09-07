import React from 'react';
import './login.component.css';
import {inject, observer} from "mobx-react";
import userDetails from '../../store/userDetails';
import {AsyncStorage} from 'AsyncStorage';

class Login extends React.Component {

  setLogin() {
    AsyncStorage.setItem('isLoggedIn', true).then( () =>{
      userDetails.setIsLoggedIn(true)      
    });
  }

  render() {
    return (
        <div className="login-container">
            <input type="button" value="Login" onClick={e => this.setLogin()} />            
        </div>
    )
  }
}

export default inject('userDetails')(observer(Login));

