import React from 'react';
import Assessment from '../assessment/assessment.component';
import MyRating from '../myRating/myRating.component';
import ToDo from '../toDo/toDo.component';
import NavBar from '../navBar/navBar.component';
import './main.component.css';
import userDetails from '../../store/userDetails';
import {inject, observer} from "mobx-react";


class Main extends React.Component {

  renderComponent(comp) {
    switch(comp){
      case 'assessment':
        return <Assessment />;
      case 'myRating':
        return <MyRating />;
      case 'toDo':
        return <ToDo />;
      default:
        return <MyRating />;
    }
      
  }
  render() {
    return (
      <div className="main-container">
        <div className="header">
          <NavBar />
        </div>
        <div className="workspace">
          {
            this.renderComponent(userDetails.currentComponent)
          }
        </div>
      </div>
    )
  }
}


export default inject('userDetails')(observer(Main));
