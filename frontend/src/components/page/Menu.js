import React from 'react';
import Col  from 'react-bootstrap/lib/Col';
import {List, ListItem} from 'material-ui/List';
import MenuItem  from '../page/MenuItem'

export default class Menu extends React.Component {
  state = {
    collapsed: true,
  };
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  };
  render() {
    const { collapsed } = this.state;
    let menuLists = this.props.menuLists.map((menuList) => (
      <ListItem key={menuList.id} primaryText={menuList.menu}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        nestedItems={[<MenuItem submenu={menuList.submenu}/>]}
      />
    ));

    return (
      <div>
        <Col sm={3}>
          <List >
            {menuLists}
          </List>
        </Col>
      </div>
    )
  };
 }