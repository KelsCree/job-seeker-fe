import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './Components/CreateUser';

class App extends Component {

    state = {
        user: {},
        applications: [],
        interviews: [],
        reccomendations: [],
        alerts: []
    }

    signUp = (user) => {
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
      })
      .then(response => response.json())
      .then(response => {
        if(response.errors) {
          this.setState({ alerts: response.errors })
        } else {
          localStorage.setItem('token', response.token)
          this.setState({ user: response.user, alerts: ["User successfully created"] })
        }
      })
    }

    render() {
    return (
      <div className="App">
        <SignUpForm signUp={this.signUp} alerts={this.state.alerts}/>
        <MainContent/>
      </div>
    );
  }
}
export default App;
