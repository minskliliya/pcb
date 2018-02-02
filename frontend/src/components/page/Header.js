import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import Button  from 'react-bootstrap/lib/Button';
import { IndexLink, Link } from "react-router";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect >
          <Navbar.Header >
            <Navbar.Brand >
              <a href="#brand">PCB</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav pullRight>
              <NavDropdown  eventKey={1} title="Administrator" id="">
                <MenuItem  eventKey={1.1}><FontAwesomeIcon icon="fa-sign-out"/> Logout </MenuItem>
                <MenuItem eventKey={1.2}><FontAwesomeIcon icon="user"/> Your account </MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                <FontAwesomeIcon icon="info-circle"/>
        			</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
