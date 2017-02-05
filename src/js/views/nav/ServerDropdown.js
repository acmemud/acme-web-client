'use strict';

import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import ServerItem from './ServerItem';

class ServerDropdown extends React.Component {
  render() {
    if (this.props.app.get('connected')) {
      let server = this.props.servers.get(this.props.app.get('url'));
      return (
        <div>
          <ServerItem label={server.get('label')} 
                      image={server.get('image')} 
                      url={server.get('url')} />
          <NavDropdown id="servers" title="Servers">
            <ServerItem label="Disconnect" onClick={this.props.onDisconnect} />
          </NavDropdown>
        </div>
      );
    } else {
      return (
        <div>
          <ServerItem label="Not Connected" />
          <NavDropdown id="servers" title="Servers">
            { this.props.servers.valueSeq(server => (
              <ServerItem key={server.get('url')} 
                          label={server.get('label')} 
                          image={server.get('image')} 
                          url={server.get('url')} 
                          onClick={this.props.onConnect} />
            ))}
            <MenuItem title="Manage Servers...">Manage Servers...</MenuItem>
          </NavDropdown>
        </div>
      );
    }
  }
}

export default ServerDropdown;
