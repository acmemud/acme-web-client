'use strict';

import React from 'react';
import GlobalNav from './nav/GlobalNav';
import ViewPane from './ViewPane';
import StatusContainer from '../containers/StatusContainer';

class AppView extends React.Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <ViewPane />
        <StatusContainer />
      </div>
    );
  }
}

export default AppView;
