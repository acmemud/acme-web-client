'use strict';

import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import ServerMenuItem from './ServerMenuItem';
import ServerItem from './ServerItem';
import ThumbnailCaptionLabel from '../common/ThumbnailCaptionLabel';
import ThumbnailLabel from '../common/ThumbnailLabel';
import '../../../sass/acme.scss';

class ServerDropdown extends React.Component {
  render() {
    if (this.props.app.get('connected') || this.props.app.get('connecting')) {
      let server = this.props.servers.get(this.props.app.get('url'));
      return (
        <NavDropdown id="servers" title={
          <ServerItem label={server.get('label')} 
                      thumbnail={server.get('thumbnail')} 
                      url={server.get('url')} />
        }>
          <MenuItem title="Disconnect" onSelect={this.props.onDisconnect}>
            <ThumbnailLabel hiddenThumb
                            label="Disconnect" />
          </MenuItem>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown id="servers" title={
          <ThumbnailLabel hiddenThumb label="Not Connected" />
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
      );
    }
  }
}

export default ServerDropdown;
