import React from 'react';
import Login from './components/login/login.component';
import Main from './components/main/main.component';
import './App.css';
import {inject, observer} from "mobx-react";
import {AsyncStorage} from 'AsyncStorage';
import userDetails from './store/userDetails';

class App extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('IsLoggedIn').then((isLoggedIn)=>{
      if(isLoggedIn) {
        userDetails.setIsLoggedIn(false);
      } else {
        userDetails.setIsLoggedIn(true);        
      }
    });
  }

  getComponent() {
    if (userDetails.isLoggedIn) {
      return <Main />;
    } else {
      return <Login />
    }
  }

  render() {
    return (
      this.getComponent()
    );
  }
  
}

export default inject('userDetails')(observer(App));

