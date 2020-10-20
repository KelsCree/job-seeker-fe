import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MainContent/>
    </div>
  );
}

export default App;
