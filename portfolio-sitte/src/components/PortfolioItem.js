import React from 'react';
import {NavLink } from 'react-router-dom'

const PortfolioItem = (props) => (
  <div> 
    <h1>A thing i've done</h1>
    <p>this is for {props.match.params.id}</p>
  </div>   
);

export default PortfolioItem;
