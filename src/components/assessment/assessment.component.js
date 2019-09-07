import React from 'react';
import './assessment.component.css';
import {inject, observer} from "mobx-react";

class Assessment extends React.Component {

  render() {
    return (
        <div className="assessment-container">
            
        </div>
    )
  }
}

export default inject('userDetails')(observer(Assessment));
