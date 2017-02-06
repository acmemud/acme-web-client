'use strict';

import React from 'react';
import CaptionLabel from './CaptionLabel';
import Thumbnail from './Thumbnail';
import '../../../sass/acme.scss';

class ThumbnailCaptionLabel extends React.Component {
  render() {
    return (
      <div className="mud-thumbnail-caption-label">
        <span><Thumbnail noReplace={this.props.noReplace}
                         src={this.props.thumbnail} 
                         alt={this.props.label} /></span>
        <span><CaptionLabel caption={this.props.caption} 
                            label={this.props.label} /></span>
      </div>
    );
  }
}

export default ThumbnailCaptionLabel;
