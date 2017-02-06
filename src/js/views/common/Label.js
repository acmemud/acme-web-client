'use strict';

import React from 'react';
import '../../../sass/acme.scss';

class Label extends React.Component {
  render() {
    return (
      <span className="mud-label">{this.props.label}</span>
    );
  }
}

export default Label;
