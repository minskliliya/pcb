import React from 'react';
import MenuList from '../page/MenuList';
import Content from '../page/Content';
import Row  from 'react-bootstrap/lib/Row';
import { Link } from "react-router";
import Header from '../page/Header';
import Footer from '../page/Footer'

export default class PageWrapper extends React.Component {
  render() {
    let menuLists = [
      {
        id: 1,
        menu: "CAR",
        submenu: [
          {
            id: 1,
            name: "CAR-A"
            },
          {
            id: 2,
            name: "CAR-D",
          }
        ]
      },
      {
        id: 2,
        menu: "SESDR",
        submenu: [
          {
            id: 1,
            name: "SESDR-A"
            },
          {
            id: 2,
            name: "SESDR-D",
          }
        ]
      },
    ];
    const { location } = this.props;

    console.log("PageWrapper");
    return (
      <div className="container-fluid" style={{background: 'white', minHeight: 'calc(100vh - 60px)'}}>
        <Row>
          <Header/>
        </Row>
        <Row >
          <MenuList location={location} menuLists={menuLists}/>
          <Content show={this.props.children} />
        </Row>
        <Row>
          <Footer/>
        </Row>
      </div>
    );
  }
}
