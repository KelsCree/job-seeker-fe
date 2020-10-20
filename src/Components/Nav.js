import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import Sonnet from 'react-bootstrap/Sonnet';



export default function Nav() {

  return(
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="applications" title="Applications">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="interviews" title="Interviews" >
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
)
}