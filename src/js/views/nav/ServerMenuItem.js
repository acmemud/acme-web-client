'use strict';

import React from 'react';
import {MenuItem} from 'react-bootstrap';
import ServerItem from './ServerItem';

class ServerMenuItem extends React.Component {
  render() {
    return (
      <MenuItem title={this.props.label} onSelect={this.props.onSelect} >
        <ServerItem label={this.props.label}
                    thumbnail={this.props.thumbnail}
                    url={this.props.url} />
      </MenuItem>
    );
  }
}

export default ServerMenuItem;
