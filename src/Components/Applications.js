import React, { Component } from 'react';
import ApplicationForm from './ApplicationForm'

class Applications extends Component{

  state = {
    showForm: false
  }

  handleDelete = (application) => this.props.deleteApplication(application)

  applicationList = () => this.props.applications.map(application => {
    return (
      <div key={application.id} className="application-card">
        <h5>Position: {application.position}</h5>
        <h6>Company: {application.company}</h6>
        <p>Status: {application.status}</p>
        <p>URL: {application.url}</p>
        <p>Description: {application.description}</p>
        <button>Edit</button>
        <button onClick={() => this.handleDelete(application)}>Delete</button>
      </div>
    )
  })

  handleForm = () => this.setState({ showForm: !this.state.showForm })
  

  render() {
    return(
      <div>
      <h1>Applications</h1>
      <button onClick={this.handleForm}>Add a New Application</button>
      {this.state.showForm == true ? <ApplicationForm user={this.props.user} submitApplication={this.props.submitApplication}/> : null }
      {this.applicationList()}
      </div>
    )
  }
}

export default Applications
