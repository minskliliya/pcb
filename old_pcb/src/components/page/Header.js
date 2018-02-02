import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import Button  from 'react-bootstrap/lib/Button';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect >
          <Navbar.Header >
            <Navbar.Brand >
              <a style={{color: 'white'}} href="#brand">PCB</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav pullRight>
              <NavDropdown  eventKey={1} title="Administrator" id="">
                <MenuItem  eventKey={1.1}><i className="fa fa-sign-out"></i> Logout </MenuItem>
                <MenuItem eventKey={1.2}><i className="fa fa fa-user"></i> Your account </MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
        				<i className="fa fa-lg fa-info-circle" style={{color: 'white'}}></i>
        			</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
