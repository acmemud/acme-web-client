'use strict';

import AppView from '../views/AppView';
import React from 'react';
import {Container} from 'flux/utils';
import MudActions from '../actions/MudActions';
import AppStore from '../stores/AppStore'

class AppContainer extends React.Component {
  static getStores() {
    return [
      AppStore
    ];
  }

  static calculateState(prevState) {  
    return {
      app: AppStore.getState(),

      onLogin: MudActions.connect,
      onLogout: MudActions.disconnect,
    };
  }

  render() {
    return (
      <AppView app={this.state.app}
               onLogin={this.state.onLogin.bind(this)}
               onLogout={this.state.onLogout.bind(this)} />
    );
  }
}

export default Container.create(AppContainer);
