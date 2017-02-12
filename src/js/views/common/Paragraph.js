'use strict';

import React from 'react';
import '../../../sass/acme.scss';

class Paragraph extends React.Component {
  render() {
    return (
      <p className="mud-paragraph">{this.props.children}</p>
    );
  }
}

export default Paragraph;
