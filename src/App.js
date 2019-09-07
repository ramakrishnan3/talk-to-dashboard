import React from 'react';
import Assessment from './components/assessment/assessment.component';
import NavBar from './components/navBar/navBar.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <NavBar />
      </div>
      <div class="workspace">
        <Assessment />
      </div>
      
    </div>
  );
}

export default App;
