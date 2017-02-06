'use strict';

import React from 'react';

class StatusBar extends React.Component {
  render() {
    if (this.props.app.get('connecting')) {
      return (
        <footer>Connecting to {this.props.app.get('url')}...</footer>
      );
    } else if (this.props.app.get('disconnecting')) {
      return (
        <footer>Disconnecting...</footer>
      );
    } else {
      return (<footer></footer>);
    }
  }
}

export default StatusBar;
