'use strict';

import React from 'react';

class StatusBar extends React.Component {
  render() {
    let app = this.props.app;
    if (app.get('connecting')) {
      return (
        <footer>Connecting to {app.get('server').get('url')}...</footer>
      );
    } else if (app.get('disconnecting')) {
      return (
        <footer>Disconnecting...</footer>
      );
    } else {
      return (<footer></footer>);
    }
  }
}

export default StatusBar;
