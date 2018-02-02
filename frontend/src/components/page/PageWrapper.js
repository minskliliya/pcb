import React from 'react';
import Menu from '../page/Menu';


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
    console.log({menuLists});
    return (
      <div>
        <Menu menuLists={menuLists} />
      </div>    
    );
  }
}





