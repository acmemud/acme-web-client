'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import '../../../sass/acme.scss';

class Thumbnail extends React.Component {
  render() {
    if (this.props.src) {
      return (
        <Image className="mud-thumbnail" src={this.props.src} alt={this.props.alt} rounded />
      );
    } else {
      if (this.props.hiddenThumb) {
        return (
          <div className="mud-thumbnail mud-thumbnail-hidden"></div>
        );
      } else {
        return (
          <Label className="mud-thumbnail">{this.props.alt.charAt(0)}</Label>
        );
      }
    }
  }
}

export default Thumbnail;