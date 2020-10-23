import React, { useState, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Profile from './Profile'
import Applications from './Applications'
import Interviews from './Interviews'



export default function MainNav(props) {
  const [key, setKey] = useState('profile');

  return (
    <Tab.Container defaultActiveKey="profile">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Tab eventKey="profile" title="Profile">
        <Profile user={props.user} reccomendations={props.reccomendations} applications={props.applications} submitLinkedin={props.submitLinkedin} submitResume={props.submitResume}/>
      </Tab>
      <Tab eventKey="applications" title="Applications">
        <Applications user={props.user} deleteApplication={props.deleteApplication} applications={props.applications} submitApplication={props.submitApplication}/>
      </Tab>
      <Tab eventKey="interviews" title="Interviews" >
        <Interviews />
      </Tab>
    </Tabs>
    </Tab.Container>
  );
}

// render(<ControlledTabs />);


  // return(
    // <Nav variant="tabs" defaultActiveKey="/home/profile">
    // <Nav.Item>
    //   <Nav.Link href="/home/profile">Profile</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link href="/home/applications">Applications</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link href="/home/interviews">Interviews
    //   </Nav.Link>
    // </Nav.Item>
    // </Nav>
// )
// }

