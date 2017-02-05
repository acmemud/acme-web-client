'use strict';

import React from 'react';
import GlobalNav from './nav/GlobalNav';
import ViewPane from './ViewPane';
import StatusBar from './StatusBar';

class AppView extends React.Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <ViewPane />
        <StatusBar />
      </div>
    );
  }
}

export default AppView;
