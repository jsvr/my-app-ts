import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import DataInfo from './page/home/scroll';

function App() {
  return (
    <div className="App">
      <Home />
      <DataInfo />
    </div>
  );
}

export default App;
