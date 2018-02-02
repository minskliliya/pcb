import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class MenuItem extends React.Component {
  render() {
    let submenus = this.props.submenu.map((submenu) => (
      <ListItem
        key={submenu.id}
        primaryText={submenu.name}
       />
    ));

    return (
      <div className="MenuItem">
      <List >
        {submenus}
      </List>
      </div>
    )};
 }
