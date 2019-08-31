import React from 'react';
import Chat from './components/chat/chat.component';
import Dashboard from './components/dashboard/dashboard.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <Header />
      </div>
      <div class="workspace">
        <Dashboard />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
