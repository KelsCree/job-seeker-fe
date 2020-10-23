import React, { Component, useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export default function LogIn({ login, alerts, history, logout, user }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = ({target}) => {
    return target.name == "email" ? setEmail(target.value) : setPassword(target.value)
  }

  useEffect(() => {
    logout()
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      email,
      password
    }

    login(user)
      .then(() => history.push('/'))
  }

  const goToSignUp = () => history.push("/signup")

  const showAlerts = () => alerts.map(alert => <p>{alert}</p>)

  return(
    <div id='form-container'>
      <form id='log-in-form' onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <label>Email Address:</label>
        <input name="email" value={email} onChange={handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange}/>
        <input className='rec-button' type="submit"/>
        {alerts ? showAlerts() : null}
        <p>Not registered?</p>
        <button className='rec-button' onClick={goToSignUp}>Create an Account</button>
        </form>
    </div>

  )
}