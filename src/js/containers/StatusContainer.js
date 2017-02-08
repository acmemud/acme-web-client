'use strict';

import StatusBar from '../views/StatusBar';
import React from 'react';
import {Container} from 'flux/utils';
import MudActions from '../actions/MudActions';
import AppStore from '../stores/AppStore';

class StatusContainer extends React.Component {
  static getStores() {
    return [
      AppStore
    ];
  }

  static calculateState(prevState) {  
    return {
      app: AppStore.getState()
    };
  }

  render() {
    return (
      <StatusBar app={this.state.app} />
    );
  }
}

export default Container.create(StatusContainer);
