import React, { Component, useState } from 'react'

export default function SignUpForm({ signUp, alerts, history }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleChange = ({target}) => {
    return target.name == "email" ? setEmail(target.value) : setPassword(target.value)
   }

  const handleNameChange = ({target}) => setName(target.value)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      name,
      email,
      password
    }
    signUp(user)
      .then(() => history.push('/home'))
  }

  const showAlerts = () => alerts.map(alert => <p>{alert}</p>)

  return(
    <div>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <h2>Create An Account</h2>
        <label>Name:</label>
        <input name="name" value={name} onChange={handleNameChange}/>
        <label>Email Address:</label>
        <input name="email" value={email} onChange={handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange}/>
        <input className='rec-button' type="submit"/>
        <p>Already a member?</p>
        <button className='rec-button'>Log In</button>
        {alerts ? showAlerts() : null}
      </form>
    </div>

  )
}