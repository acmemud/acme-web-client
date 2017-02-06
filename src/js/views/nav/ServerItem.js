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
                               caption={this.props.url} />
      );
    } else {
      if (this.props.thumbnail) {
        return (
          <ThumbnailLabel label={this.props.label}
                          thumbnail={this.props.thumbnail} />
        );
      } else {
        return (
          <ThumbnailLabel noReplace={true} label={this.props.label} />
        );
      }
    }
  }
}

export default ServerItem;
