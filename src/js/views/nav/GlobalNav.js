'use strict';

import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import ServerContainer from '../../containers/ServerContainer';
import PlayerContainer from '../../containers/PlayerContainer';

class GlobalNav extends React.Component {
  render() {
    return (
      <Navbar fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <ServerContainer />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <PlayerContainer />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default GlobalNav;
