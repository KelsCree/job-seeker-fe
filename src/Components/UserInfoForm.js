import React from 'react'


class UserInfoForm extends React.Component {

  state = {
    linkedin: "",
    resume: ""
  }

  handleLinkedinSubmit = (event) => {
    event.preventDefault()
    this.props.submitLinkedin(this.state.linkedin)
    this.setState({ linkedin: "" })

  }

  handleResumeSubmit = (event) => {
    event.preventDefault()
    this.props.submitResume(this.state.resume)
    this.setState({ resume: ""})
  }

  handleNewLinkedin = (event) => {
    this.setState({ linkedin: event.target.value })
  }

  handleNewResume = (event) => {
    this.setState({ resume: event.target.value })
  }

  linkedinLink = this.props.user.linkedin

  resumeLink = this.props.user.resume

  render() {

    return(
      <>
      {this.props.user.linkedin ? <p id='linkedin-link'>Linkedin: <a href={this.linkedinLink}>{this.props.user.linkedin}</a></p> : <form id="add-linkedin-form" onSubmit={this.handleLinkedinSubmit}>
        <label>Add Your Linkedin:</label>
        <input type='text' value={this.state.linkedin} onChange={this.handleNewLinkedin} name='linkedin'  />
        <input className="submit-form" type='submit'/>
      </form>}

      {this.props.user.resume ? <p id='resume-link'>Resume: <a href={this.resumeLink}>{this.props.user.resume}</a></p>: <form id="add-resume-form" onSubmit={this.handleResumeSubmit}>
        <label>Add Your Resume:  </label>
        <input type='text' value={this.state.resume} onChange={this.handleNewResume} name='resume'  />
        <input className="submit-form" type='submit'/>
      </form>}
    </>
  )
  }
}

export default UserInfoForm