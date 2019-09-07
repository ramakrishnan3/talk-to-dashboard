import React from 'react';
import './navBar.component.css';
import userDetails from '../../store/userDetails';
import {inject, observer} from "mobx-react";

class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.changeComponent=this.changeComponent.bind(this);
  }
 
  changeComponent(comp) {
    userDetails.setCurrentComponent(comp);
  }
  
  render() {
    return (
        <div className="navBar-container">
            <input type="button" value="Assessment" onClick={e => this.changeComponent('assessment')} />
            <input type="button" value="To Do" onClick={e => this.changeComponent('toDo')} />
            <input type="button" value="My Rating" onClick={e => this.changeComponent('myRating')} />
        </div>
    )
  }
}
export default inject('userDetails')(observer(NavBar));
