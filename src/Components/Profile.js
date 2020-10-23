import React, { Component } from 'react';
import Reccomendations from './Reccomendations';
import UserInfoForm from './UserInfoForm'

export default function Profile({ user, reccomendations, submitLinkedin, submitResume }){

  return(
    <>
    <div id='user-card'>
      <h2>{user.name}</h2>
      <UserInfoForm user={user} submitLinkedin={submitLinkedin} submitResume={submitResume}/>
    </div>
    <h3>Your References</h3>
    <Reccomendations reccomendations={reccomendations}/>
    </>
  )
}