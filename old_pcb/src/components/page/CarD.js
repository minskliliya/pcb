
import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col  from 'react-bootstrap/lib/Col';
import Button  from 'react-bootstrap/lib/Button';

export default class CarD extends React.Component {
	render() {
		return (
			<Col style={{paddingTop: '40px', paddingLeft: '40px'}}>
				<Panel id="" defaultExpanded>
					<Panel.Heading style={{background: '#4527A0'}} >
						<Panel.Title toggle>
							<p style={{textAlign: 'center', color: 'white'}}>CAR-D</p>
						</Panel.Title>
					</Panel.Heading>
					<Panel.Collapse>
						<Panel.Body style={{padding: '60px'}}>
							Here will be configuration of CAR-D
						</Panel.Body>
					</Panel.Collapse>
				</Panel>
				</Col>
    );
  }
}
