'use strict';

import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import ServerMenuItem from './ServerMenuItem';
import ServerItem from './ServerItem';
import ManageServersModal from './ManageServersModal';
import ThumbnailCaptionLabel from '../common/ThumbnailCaptionLabel';
import ThumbnailLabel from '../common/ThumbnailLabel';
import '../../../sass/acme.scss';

class ServerDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showManageServers: false
    };
  }

  showManageServers() {
    this.setState({ showManageServers: true });
  }

  hideManageServers() {
    this.setState({ showManageServers: false });
  }

  render() {
    if (this.props.app.get('connected') || this.props.app.get('connecting')) {
      let server = this.props.app.get('server');
      return (
        <NavDropdown id="servers" title={
          <ServerItem label={server.get('label')} 
                      thumbnail={server.get('thumbnail')} 
                      url={server.get('url')}
                      icon={server.get('icon')} />
        }>
          <MenuItem title="Disconnect" onSelect={this.props.onDisconnect}>
            <ThumbnailLabel label="Disconnect" icon="plug" />
          </MenuItem>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown id="servers" title={
          <ThumbnailLabel label="Not Connected" icon="plug" />
        }>
          { this.props.servers.valueSeq().map(server => (
            <ServerMenuItem key={server.get('key')} 
                            server={server} 
                            onSelect={() => {
                              this.props.onConnect(server)
                            }} />
          ))}
          <MenuItem key={0} title="Manage Servers..." onSelect={this.showManageServers.bind(this)}>
            <ServerItem label="Manage Servers..." />
              <ManageServersModal show={this.state.showManageServers} 
                                  servers={this.props.servers} 
                                  onHide={this.hideManageServers.bind(this)} />
          </MenuItem>
        </NavDropdown>
      );
    }
  }
}

export default ServerDropdown;
