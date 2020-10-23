import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Reccomendations(props){

  const reclist = () => props.reccomendations.map(rec => {
    const recid = rec.id
    return (
      <Card className='rec-card' key={rec.id}>
        <Card.Header className='rec-header'>
          <Accordion.Toggle as={Button} variant="link" eventKey={recid}>
          {rec.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={recid}>
          <Card.Body>
            <p>{rec.email}</p>
            <p>{rec.number}</p>
            <p>{rec.relationship}</p>
            <button>Delete</button>
            <button>Edit</button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  )})

  return(
    <Accordion>
      {reclist()}
    </Accordion>

  )
}