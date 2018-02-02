
import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col  from 'react-bootstrap/lib/Col';

export default class CarA extends React.Component {
	render() {
		return (
			<Col style={{paddingTop: '40px', paddingLeft: '40px'}}>
        <Panel id="" defaultExpanded>
  				<Panel.Heading style={{background: '#4527A0'}} >
  					<Panel.Title toggle>
  						<p style={{textAlign: 'center', color: 'white'}}>CAR-A</p>
  					</Panel.Title>
  				</Panel.Heading>
  				<Panel.Collapse>
  					<Panel.Body style={{padding: '60px'}}>
  						Here will be configuration of CAR-A
  					</Panel.Body>
  				</Panel.Collapse>
  			</Panel>
				</Col>
    );
  }
}
