'use strict';

import React from 'react';
import Label from './Label';
import Thumbnail from './Thumbnail';
import '../../../sass/acme.scss';

class ThumbnailLabel extends React.Component {
  render() {
    return (
      <div className="mud-thumbnail-label">
        <span><Thumbnail noReplace={this.props.noReplace} 
                         src={this.props.thumbnail} 
                         alt={this.props.label} /></span>
        <span><Label label={this.props.label} /></span>
      </div>
    );
  }
}

export default ThumbnailLabel;
