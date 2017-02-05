'use strict';

import ServerDropdown from '../views/nav/ServerDropdown';
import React from 'react';
import {Container} from 'flux/utils';
import MudActions from '../actions/MudActions';
import AppStore from '../stores/AppStore';
import ServerStore from '../stores/ServerStore';

class ServerContainer extends React.Component {
  static getStores() {
    return [
      AppStore,
      ServerStore
    ];
  }

  static calculateState(prevState) {  
    return {
      app: AppStore.getState(),
      servers: ServerStore.getState(),

      onConnect: MudActions.connect,
      onDisconnect: MudActions.disconnect,
      onAddServer: MudActions.addServer,
      onRemoveServer: MudActions.removeServer
    };
  }

  render() {
    return (
      <ServerDropdown app={this.state.app}
                      servers={this.state.servers}
                      onConnect={this.state.onConnect.bind(this)}
                      onDisconnect={this.state.onDisconnect.bind(this)}
                      onAddServer={this.state.onAddServer.bind(this)}
                      onRemoveServer={this.state.onRemoveServer.bind(this)} />
    );
  }
}

export default Container.create(ServerContainer);
