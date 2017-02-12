'use strict';

import React from 'react';
import {MenuItem} from 'react-bootstrap';
import ServerItem from './ServerItem';

class ServerMenuItem extends React.Component {
  render() {
    let server = this.props.server;
    return (
      <MenuItem title={server.get('label')} 
                onSelect={this.props.onSelect} >
        <ServerItem label={server.label}
                    thumbnail={server.thumbnail}
                    icon={server.icon}
                    url={server.url} />
      </MenuItem>
    );
  }
}

export default ServerMenuItem;
