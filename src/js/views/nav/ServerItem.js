'use strict';

import React from 'react';
import {MenuItem} from 'react-bootstrap';

class ServerItem extends React.Component {
  render() {
    return (
      <MenuItem title={this.props.label}>
        <div>{this.props.label}</div>
        <div>{this.props.url}</div>
      </MenuItem>
    );
  }
}

export default ServerItem;
