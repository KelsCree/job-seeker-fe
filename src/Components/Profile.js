import React, { Component } from 'react';
import Reccomendations from './Reccomendations';
import UserInfoForm from './UserInfoForm'

export default function Profile({ user, reccomendations, submitLinkedin, submitResume }){

  return(
    <>
    <div id='user-card'>
      <h1 id='name'>{user.name}</h1>
      <UserInfoForm user={user} submitLinkedin={submitLinkedin} submitResume={submitResume}/>
    </div>
    <h3 id='ref-title'>Your References</h3>
    <Reccomendations reccomendations={reccomendations}/>
    </>
  )
}