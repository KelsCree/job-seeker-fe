import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Reccomendations(props){

  const reclist = () => props.reccomendations.map(rec => {
    const recid = rec.id
    return (
      <Card key={rec.id}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={recid}>
          {rec.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={recid}>
          <Card.Body>
            <p>{rec.email}</p>
            <p>{rec.number}</p>
            <p>{rec.relationship}</p>
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