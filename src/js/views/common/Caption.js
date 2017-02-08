'use strict';

import React from 'react';
import '../../../sass/acme.scss';

class Caption extends React.Component {
  render() {
    return (
      <span className="mud-caption">{this.props.caption}</span>
    );
  }
}

export default Caption;
