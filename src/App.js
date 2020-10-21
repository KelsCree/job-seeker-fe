import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch } from 'react-router-dom'

class App extends Component {

    state = {
        isLoggedIn: false,
        applications: [],
        interviews: [],
        reccomendations: []
    }

    componentDidMount() {
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then()
    }

    render() {
    return (
      <div className="App">
        <MainContent/>
      </div>
    );
  }
}
export default App;
