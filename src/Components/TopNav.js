import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';

export default function TopNav({ user }) {

  return (
    <Navbar>
      <Navbar.Brand href="#home">SeekSmart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {user.name ? <>Signed in as <a href="#profile">{user.name}</a> <a href="/login">Logout</a></> :
          <>Log in to get started.</>  }
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )

}