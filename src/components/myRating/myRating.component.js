import React from 'react';
import './myRating.component.css';
import {inject, observer} from "mobx-react";

class MyRating extends React.Component {

  render() {
    return (
        <div className="myRating-container">
            
        </div>
    )
  }
}

export default inject('userDetails')(observer(MyRating));

