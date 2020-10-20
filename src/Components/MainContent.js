import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Nav';
import TopNav from './TopNav';


export default function MainContent() {


  return(
    <Container>
      <Row>
        <Col>
          <TopNav/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav/>
        </Col>
      </Row>
    </Container>
  )


}