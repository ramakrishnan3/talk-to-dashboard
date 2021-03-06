import React from 'react';
import './navBar.component.css';
import userDetails from '../../store/userDetails';
import { inject, observer } from "mobx-react";
import { AsyncStorage } from 'AsyncStorage';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(comp) {
    userDetails.setCurrentComponent(comp);
  }

  login(flag) {
    AsyncStorage.setItem('isLoggedIn', flag).then(() => { 
      userDetails.setIsLoggedIn(flag); 
    });
  }

  render() {
    return (
        <div className = "navBar-container">
          <div className = "inner-navBar-container">
            <div className = "logo-container">
            <img src={require('./logo.png')}></img>
            <h1>GROOT</h1>
            </div>
            <ul className = "navigation">
              <a  onClick={e => this.changeComponent('assessment')}><li>Assessment</li></a>
              <a onClick={e => this.changeComponent('toDo')}><li>To-Do</li></a>
              <a onClick={e => this.changeComponent('myRating')}><li>My Rating</li></a>
              
              
            </ul>
          </div>
        </div>
    )
  }
}
export default inject('userDetails')(observer(NavBar));
