'use strict';

import AppView from '../views/AppView';
import React from 'react';
import {Container} from 'flux/utils';
import MudActions from '../actions/MudActions';
import MessageStore from '../stores/MessageStore';
import CommandStore from '../stores/CommandStore';

class AppContainer extends React.Component {
  static getStores() {
    return [
      MessageStore,
      CommandStore,
    ];
  }

  static calculateState(prevState) {
    return {
      messages: MessageStore.getState(),
      commands: CommandStore.getState(),

      onMessage: MudActions.receiveMessage,
      onCommand: MudActions.sendCommand,
    };
  }

  render() {
    return <AppView messages={this.state.messages} commands={this.state.commands} />;
  }
}

export default Container.create(AppContainer);