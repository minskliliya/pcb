import React from 'react';
import Col  from 'react-bootstrap/lib/Col';
import {List, ListItem} from 'material-ui/List';
import MenuItem  from '../page/MenuItem'
import { IndexLink, Link } from "react-router";
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class MenuList extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const dashboardClass = location.pathname.match(/^\/dashboard/) ? "active" : "";
    const classCardA = location.pathname.match(/^\/carA/) ? "active" : "";
    const classCardD = location.pathname.match(/^\/carD/) ? "active" : "";
    const classSesdrA = location.pathname.match(/^\/sesdrA/) ? "active" : "";
    const classSesdrD = location.pathname.match(/^\/sesdrD/) ? "active" : "";

    return (
      <div>
        <Col sm={3}>
          <List>
            <Link className="dashboardClass" to="dashboard" onClick={this.toggleCollapse.bind(this)}><ListItem primaryText="Dashboard"/></Link>
            <ListItem
                primaryText="CAR"
                leftIcon={<ContentInbox />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <div style={{paddingLeft: '20px'}}>
                  <Link className="classCardA"  to="carA" onClick={this.toggleCollapse.bind(this)}>
                    <ListItem
                      key={1}
                      primaryText="CAR-A"
                      leftIcon={<ActionGrade />}
                    />
                  </Link>
                  <Link className="classCardD"  to="carD" onClick={this.toggleCollapse.bind(this)}><ListItem
                    key={2}
                    primaryText="CAR-D"
                    leftIcon={<ContentSend />}
                  /></Link></div>
                ]}
              />
            <ListItem
              primaryText="SESDR"
              leftIcon={<ContentInbox />}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <div style={{paddingLeft: '20px'}}>
                <Link className="classSesdrA"  to="sesdrA" onClick={this.toggleCollapse.bind(this)}>
                  <ListItem
                    key={1}
                    primaryText="SESDR-A"
                    leftIcon={<ActionGrade />}
                  />
                </Link>
                <Link className="classSesdrD"  to="sesdrD" onClick={this.toggleCollapse.bind(this)}><ListItem
                  key={2}
                  primaryText="SESDR-D"
                  leftIcon={<ContentSend />}
                /></Link></div>
              ]}
            />
          </List>
        </Col>
      </div>
    );
  }
 }

 //
 //
 // </Link>
