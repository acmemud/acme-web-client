'use strict';

import React from 'react';
import ThumbnailCaptionLabel from '../common/ThumbnailCaptionLabel';
import ThumbnailLabel from '../common/ThumbnailLabel';
import Label from '../common/Label';

class ServerItem extends React.Component {
  render() {
    if (this.props.url) {
      return (
        <ThumbnailCaptionLabel label={this.props.label}
                               thumbnail={this.props.thumbnail}
                               caption={this.props.url} 
                               icon={this.props.icon} />
      );
    } else {
      if (this.props.thumbnail || this.props.icon) {
        return (
          <ThumbnailLabel label={this.props.label}
                          thumbnail={this.props.thumbnail}
                          icon={this.props.icon} />
        );
      } else {
        return (
          <ThumbnailLabel hiddenThumb={true} 
                          label={this.props.label}
                          icon={this.props.icon} />
        );
      }
    }
  }
}

export default ServerItem;
