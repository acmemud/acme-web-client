'use strict';

import React from 'react';
import CaptionLabel from './CaptionLabel';
import Thumbnail from './Thumbnail';
import '../../../sass/acme.scss';

class ThumbnailCaptionLabel extends React.Component {
  render() {
    return (
      <span className="mud-thumbnail-caption-label">
        <Thumbnail noReplace={this.props.noReplace}
                         src={this.props.thumbnail} 
                         alt={this.props.label} />
        <CaptionLabel caption={this.props.caption} 
                            label={this.props.label} />
      </span>
    );
  }
}

export default ThumbnailCaptionLabel;
