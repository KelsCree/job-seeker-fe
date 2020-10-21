import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNav from './MainNav';
import TopNav from './TopNav';


export default function MainContent(props) {


  return(
    <Container>
      <Row>
        <Col>
          <TopNav/>
        </Col>
      </Row>
      <Row>
        <Col>
          <MainNav/>
        </Col>
      </Row>
    </Container>
  )


}