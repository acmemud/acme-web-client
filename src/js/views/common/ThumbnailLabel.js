'use strict';

import React from 'react';
import Label from './Label';
import Thumbnail from './Thumbnail';
import '../../../sass/acme.scss';

class ThumbnailLabel extends React.Component {
  render() {
    return (
      <span className="mud-thumbnail-label">
        <Thumbnail noReplace={this.props.noReplace} 
                         src={this.props.thumbnail} 
                         alt={this.props.label} />
        <Label label={this.props.label} />
      </span>
    );
  }
}

export default ThumbnailLabel;
