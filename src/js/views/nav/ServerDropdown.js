'use strict';

import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import ServerMenuItem from './ServerMenuItem';
import ServerItem from './ServerItem';
import ThumbnailCaptionLabel from '../common/ThumbnailCaptionLabel';

class ServerDropdown extends React.Component {
  render() {
    if (this.props.app.get('connected') || this.props.app.get('connecting')) {
      let server = this.props.servers.get(this.props.app.get('url'));
      return (
        <div>
          <NavDropdown id="servers" title={
            <ServerItem label={server.get('label')} 
                        thumbnail={server.get('thumbnail')} 
                        url={server.get('url')} />
          }>
            <MenuItem title="Disconnect" onSelect={this.props.onDisconnect}>
              <ThumbnailCaptionLabel noReplace
                                     label="Disconnect" />
            </MenuItem>
          </NavDropdown>
        </div>
      );
    } else {
      return (
        <div>
          <NavDropdown id="servers" title={
            <ThumbnailCaptionLabel noReplace label="Not Connected" />
          }>
            { this.props.servers.valueSeq().map(server => (
              <ServerMenuItem key={server.get('url')} 
                              label={server.get('label')} 
                              thumbnail={server.get('thumbnail')} 
                              url={server.get('url')} 
                              onSelect={() => {
                                this.props.onConnect(server)
                              }} />
            ))}
            <MenuItem key={0} title="Manage Servers...">
              <ServerItem label="Manage Servers..."/>
            </MenuItem>
          </NavDropdown>
        </div>
      );
    }
  }
}

export default ServerDropdown;
