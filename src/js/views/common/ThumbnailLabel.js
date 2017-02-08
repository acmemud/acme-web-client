'use strict';

import React from 'react';
import Label from './Label';
import Thumbnail from './Thumbnail';
import '../../../sass/acme.scss';

class ThumbnailLabel extends React.Component {
  render() {
    return (
      <span className="mud-thumbnail-label">
        <Thumbnail hiddenThumb={this.props.hiddenThumb} 
                           src={this.props.thumbnail} 
                           alt={this.props.label} 
                          icon={this.props.icon} />
        <Label label={this.props.label} />
      </span>
    );
  }
}

export default ThumbnailLabel;
