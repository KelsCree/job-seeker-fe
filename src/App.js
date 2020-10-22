import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch, Redirect } from 'react-router-dom'
import SignUpForm from './Components/CreateUser';
import PrivateRoute from './Components/PrivateRoute'
import LogIn from './Components/LogIn'
import TopNav from './Components/TopNav'

class App extends Component {

    state = {
        user: {},
        applications: [],
        interviews: [],
        reccomendations: [],
        alerts: []
    }

    componentDidMount(){
      this.authorize_user()
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

    authorize_user = () => {
      fetch("http://localhost:3000/profile", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(response => {
          this.setState({
            user: response.user,
            applications: response.applications,
            reccomendations: response.reccomendations
          })
        })
    }

    login = ({email, password}) => {
      return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(response => {
          if(response.errors) {
            this.setState({ alerts: response.errors })
          } else {
            localStorage.setItem('token', response.token)
            this.setState({ user: response.user, 
            alerts: ["Successful login."],
            applications: response.applications,
            reccomendations: response.reccomendations
          })
          }
        })
    }

    render() {
    return (
      <div className="App">
        <TopNav user={this.state.user}/>
        <Switch>
          <Route exact path="/login" render={(routerProps) => <LogIn {...routerProps} login={this.login} alterts={this.state.alerts}/>}/>
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
