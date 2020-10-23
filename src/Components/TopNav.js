import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export default function TopNav({ user, logout }) {


  return (
    <Navbar>
      <Navbar.Brand id='nav-title' href="/home">SeekSmart <hr id='line'></hr> </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text id='nav-text'>
          {user.name ? <>Signed in as <Link to="/home">{user.name}</Link> <button id='logout' onClick={logout}>Logout</button></> :
          <>Log in to get started.</>  }
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )

}