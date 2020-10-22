import React, { Component, useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export default function LogIn({ login, alerts, history }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = ({target}) => {
    return target.name == "email" ? setEmail(target.value) : setPassword(target.value)
  }

  useEffect(() => {
    localStorage.removeItem('token')
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
    <div>
      <h2>Log In</h2>
      <form className='log-in-form' onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input name="email" value={email} onChange={handleChange}/>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange}/>
        <input type="submit"/>
        {alerts ? showAlerts() : null}
        <p>Not registered?</p>
        <button onClick={goToSignUp}>Create an Account</button>
      </form>
    </div>

  )
}