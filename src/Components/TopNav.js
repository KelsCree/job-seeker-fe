import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export default function TopNav({ user, logout }) {


  return (
    <Navbar>
      <Navbar.Brand href="/home">SeekSmart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text >
          {user.name ? <>Signed in as <Link to="/home/profile">{user.name}</Link> <button onClick={logout}>Logout</button></> :
          <>Log in to get started.</>  }
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )

}