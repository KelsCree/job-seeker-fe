import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch, Redirect } from 'react-router-dom'
import SignUpForm from './Components/CreateUser';
import PrivateRoute from './Components/PrivateRoute'

class App extends Component {

    state = {
        user: {},
        applications: [],
        interviews: [],
        reccomendations: [],
        alerts: []
    }

    signUp = (user) => {
      return fetch('http://localhost:3000/users', {
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
        <Switch>
          <Route exact path="/signup" render={(routerProps) => <SignUpForm {...routerProps} signUp={this.signUp} alerts={this.state.alerts}/>} />
          <PrivateRoute
            exact
            path="/" 
            component={MainContent}
            applications={this.state.applications}
            interviews={this.state.interviews}
            reccomendations={this.state.reccomendations}
            />
            <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}
export default App;
