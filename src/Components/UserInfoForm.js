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

  render() {

    return(
      <>
      <form id="add-linkedin-form" onSubmit={this.handleLinkedinSubmit}>
        <label>Add Your Linkedin: </label>
        <input type='text' value={this.state.linkedin} onChange={this.handleNewLinkedin} name='linkedin'  />
        <input type='submit'/>
      </form>

      <form id="add-resume-form" onSubmit={this.handleResumeSubmit}>
        <label>Add Your Resume Link: </label>
        <input type='text' value={this.state.resume} onChange={this.handleNewResume} name='resume'  />
        <input type='submit'/>
      </form>

    </>
  )
  }
}

export default UserInfoForm