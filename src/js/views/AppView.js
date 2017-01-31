'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import '../../sass/acme.scss';

class AppView extends React.Component {
  render() {
    return (
      <Button bsClass="btn-login">Login</Button>
    );
  }
}

export default AppView;
