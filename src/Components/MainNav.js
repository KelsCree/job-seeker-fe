import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'



export default function MainNav() {

  return(
    <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/applications">Applications</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/interview">Interviews
      </Nav.Link>
    </Nav.Item>
  </Nav>
)

}