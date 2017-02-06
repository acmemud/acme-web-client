'use strict';

import React from 'react';
import Caption from './Caption';
import Label from './Label';
import '../../../sass/acme.scss';

class CaptionLabel extends React.Component {
  render() {
    return (
      <span className="mud-caption-label">
        <Label label={this.props.label} />
        <Caption caption={this.props.caption} />
      </span>
    );
  }
}

export default CaptionLabel;
