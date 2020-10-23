import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './Components/MainContent';
import { Route, Switch, Redirect, useParams } from 'react-router-dom'
import SignUpForm from './Components/CreateUser';
import PrivateRoute from './Components/PrivateRoute'
import LogIn from './Components/LogIn'
import TopNav from './Components/TopNav'
import Profile from './Components/Profile'
import Applications from './Components/Applications'
import Interviews from './Components/Interviews'
import MainNav from './Components/MainNav'
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

    logout = () => {
      this.setState({ user: {} })
      localStorage.removeItem('token')
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

      submitResume = (resume) => {
        console.log(resume)
        fetch(`http://localhost:3000/users/${this.state.user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(
            {user: {
              resume}
            }
        )
        }).then(response => response.json())
      }

    submitLinkedin = (linkedin) => {
      console.log(linkedin)
      fetch(`http://localhost:3000/users/${this.state.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(
          {
            user: {
            linkedin
            }
          }
      )
      })
        .then(response => response.json())
    }

    submitApplication = (application) => {
      console.log(application)
      const newApplications = [...this.state.applications, application]
      fetch('http://localhost:3000/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(application)
      })
        .then(response => response.json())
        .then(this.setState({ applications: newApplications})
    )}

    deleteApplication = (application) => {
      console.log(application)
      const newApplications = this.state.applications.filter(newApplication => newApplication !== application)
      this.setState({ applications: newApplications })
      fetch(`http://localhost:3000/applications/${application.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
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
        <div id={this.state.user.name ? "loggedinapp" : "loggedoutapp"}>
        <TopNav user={this.state.user} logout={this.logout}/>
        { this.state.user.name ? <MainNav user={this.state.user} deleteApplication={this.deleteApplication} submitApplication={this.submitApplication} applications={this.state.applications} reccomendations={this.state.reccomendations} submitLinkedin={this.submitLinkedin} submitResume={this.submitResume}/> : null }
        <Switch>
          <Route exact path="/login" render={(routerProps) => <LogIn {...routerProps} login={this.login} logout={this.logout} alterts={this.state.alerts} user={this.state.user}/>}/>
          <Route exact path="/signup" render={(routerProps) => <SignUpForm {...routerProps} signUp={this.signUp} alerts={this.state.alerts}/>} />
          <PrivateRoute
            exact
            path="/home" 
            component={MainContent}
            applications={this.state.applications}
            interviews={this.state.interviews}
            reccomendations={this.state.reccomendations}
            />
            <PrivateRoute
              path="/home/profile" component={Profile} user={this.state.user} reccomendations={this.state.reccomendations} submitLinkedin={this.submitLinkedin} submitResume={this.submitResume}/>
            <PrivateRoute
              path="/home/applications" component={Applications} user={this.state.user} applications={this.state.applications}/>
            <PrivateRoute
              path="/home/interviews" component={Interviews} user={this.state.user}/>
            <Redirect to="/home"/> 
          </Switch>
          </div>
      </div>
    );
  }
}
export default App;
