import React from 'react'


class ApplicationForm extends React.Component {

  state = {
    company: "",
    position: "",
    status: "",
    url: "",
    description: ""
  }

  handleApplicationSubmit = (event) => {
    event.preventDefault()
    const newApplication = {
      user_id: this.props.user.id,
      company: this.state.company,
      position: this.state.position,
      status: this.state.status,
      url: this.state.url,
      description: this.state.description
    }
    this.props.submitApplication(newApplication)
    this.setState({ company: "", position: "", status: "", url: "", description: ""})

  }

  handlePositionChange = (event) => {
    this.setState({ position: event.target.value })
  }

  handleCompanyChange = (event) => {
    this.setState({ company: event.target.value })
  }

  handleUrlChange = (event) => {
    this.setState({ url: event.target.value })
  }

  handleStatusChange = (event) => {
    this.setState({ status: event.target.value })
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }
  

  render() {

    return(
      <>
      <form id="add-application-form" onSubmit={this.handleApplicationSubmit}>
        <label>Position</label>
        <input type='text' value={this.state.position} onChange={this.handlePositionChange} name='position'  />
        <label>Company</label>
        <input type='text' value={this.state.company} onChange={this.handleCompanyChange} name='company'  />
        <label>URL</label>
        <input type='text' value={this.state.url} onChange={this.handleUrlChange} name='url'  />
        <label>Status</label>
        <input type='text' value={this.state.status} onChange={this.handleStatusChange} name='status'  />
        <label>Description</label>
        <input type='text' value={this.state.description} onChange={this.handleDescriptionChange} name='description'  />
        <input id='app-submit' type='submit'/>
      </form>

    </>
    )
  }
}

export default ApplicationForm