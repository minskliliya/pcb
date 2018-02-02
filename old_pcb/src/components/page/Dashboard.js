import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col  from 'react-bootstrap/lib/Col';
import Row  from 'react-bootstrap/lib/Row';
import ListGroup  from 'react-bootstrap/lib/ListGroup';
import ListGroupItem  from 'react-bootstrap/lib/ListGroupItem';
import Button  from 'react-bootstrap/lib/Button';

export default class Dashboard extends React.Component {
  render() {
    console.log("Dashboard");
    return (
      <div className="Dashboard" >
        <Row>
        <Col style={{paddingTop: '20px'}}>
          <Panel id="" defaultExpanded>
          <Panel.Heading style={{background: '#4527A0'}} >
            <Panel.Title style={{fontSize: '22px'}} toggle>
              <p style={{textAlign: 'center', color: 'white'}}>CAR</p>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse  >
            <ListGroup >
              <ListGroupItem style={{paddingTop: '15px', paddingLeft: '30px', paddingBottom: '20px', background: '#F3E5F5'}}>
              <h3><i className="fa  fa fa-power-off" style={{color: 'red'}}></i> CAR-A
              <Button bsStyle="primary" className="pull-right" style={{borderColor: '#4527A0', backgroundColor: '#4527A0',  width: '90px'}}>Activate</Button></h3>
              </ListGroupItem>
              <ListGroupItem style={{paddingTop: '15px', paddingLeft: '30px', paddingBottom: '20px', background: '#F3E5F5'}}>
              <h3><i className="fa fa-check-square-o" style={{color: 'green'}}></i> CAR-D
              <Button bsStyle="primary" className="pull-right" style={{borderColor: '#4527A0', backgroundColor: '#4527A0',  width: '90px'}}>Deactivate</Button></h3>
              </ListGroupItem>
            </ListGroup>
          </Panel.Collapse>
        </Panel>
  			</Col>
        </Row> <br/>
        <Row>
        <Col >
          <Panel id="" defaultExpanded>
          <Panel.Heading style={{background: '#4527A0'}} >
            <Panel.Title style={{fontSize: '22px'}} toggle>
              <p style={{textAlign: 'center', color: 'white'}}>SESDR</p>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse >
            <ListGroup >
              <ListGroupItem style={{paddingTop: '15px', paddingLeft: '30px', paddingBottom: '20px', background: '#F3E5F5'}}>
              <h3><i className="fa  fa fa-power-off" style={{color: 'red'}}></i> SESDR-A
              <Button bsStyle="primary" className="pull-right" style={{borderColor: '#4527A0', backgroundColor: '#4527A0',  width: '90px'}}>Activate</Button></h3>
              </ListGroupItem>
              <ListGroupItem style={{paddingTop: '15px', paddingLeft: '30px', paddingBottom: '20px', background: '#F3E5F5'}}>
              <h3><i className="fa  fa fa-power-off" style={{color: 'red'}}></i> SESDR-D
              <Button bsStyle="primary" className="pull-right" style={{borderColor: '#4527A0', backgroundColor: '#4527A0',  width: '90px'}}>Deactivate</Button></h3>
              </ListGroupItem>
            </ListGroup>
          </Panel.Collapse>
        </Panel>
        </Col>
        </Row>
      </div>
    )};
 }
