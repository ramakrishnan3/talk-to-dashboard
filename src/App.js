import React from 'react';
import Chat from './components/chat/chat.component';
import Dashboard from './components/dashboard/dashboard.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Chat />
    </div>
  );
}

export default App;
