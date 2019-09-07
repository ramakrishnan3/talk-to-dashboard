import React from 'react';
import './toDo.component.css';
import {inject, observer} from "mobx-react";

class ToDo extends React.Component {

  render() {
    return (
        <div className="toDo-container">
            
        </div>
    )
  }
}
export default inject('userDetails')(observer(ToDo));

