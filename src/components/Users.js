import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Media, Button } from 'react-bootstrap';
import User from './User';

const Users = props => {

  return <div>{props.users.map(user => <User {... user}/>)}</div>  
  
  
}

export default Users;