'use strict';

import React from 'react';
import Caption from './Caption';
import Label from './Label';
import '../../../sass/acme.scss';

class CaptionLabel extends React.Component {
  render() {
    return (
      <span className="mud-caption-label">
        <div><Label label={this.props.label} /></div>
        <div><Caption caption={this.props.caption} /></div>
      </span>
    );
  }
}

export default CaptionLabel;
