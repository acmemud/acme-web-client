'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import '../../sass/acme.scss';

class AppView extends React.Component {
  render() {
    console.log(this.props);
    var onClick, disabled, label;
    if (this.props.app.get('connected')) {
      if (this.props.app.get('disconnecting')) {
        disabled = true;
        label = `Disconnecting`;
      } else {
        onClick = this.props.onLogout;
        disabled = false;
        label = `Logout`;
      }
    } else {
      if (this.props.app.get('connecting')) {
        disabled = true;
        label = `Connecting to ${this.props.app.get('url')}`;
      } else {
        onClick = this.props.onLogin;
        disabled = false;
        label = `Login`;
      }
    }
    return <Button bsClass="btn-login" onClick={onClick} disabled={disabled}>{label}</Button>;
  }
}

export default AppView;
