import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div> 
    <h1>My work</h1>
    <Link to="/portfolio/1" activeClassName="is-active">Item 1</Link>
    <Link to="/portfolio/2" activeClassName="is-active">Item 2</Link>
  </div>   
);

export default Portfolio;
