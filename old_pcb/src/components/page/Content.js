import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col  from 'react-bootstrap/lib/Col';

export default class Content extends React.Component {
	render() {
		let show = this.props.show;
    console.log("Content");
		return (
			<Col sm={6}>
				{show}
			</Col>
    );
  }
}
