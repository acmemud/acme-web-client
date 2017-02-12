'use strict';

import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';
import MudBackend from '../utils/MudBackend';

const Actions = {
  connect(server) {
    MudDispatcher.dispatch({
      type: ActionTypes.CONNECTING,
      server: server
    });
    MudBackend.connect(server.get('url'));
  },

  connected(url) {
    MudDispatcher.dispatch({
      type: ActionTypes.CONNECT,
      url
    });
  },

  disconnect() {
    MudDispatcher.dispatch({
      type: ActionTypes.DISCONNECTING
    });
    MudBackend.disconnect();
  },

  disconnected() {
    MudDispatcher.dispatch({
      type: ActionTypes.DISCONNECT
    });
  },

  receiveMessage(message) {
    MudDispatcher.dispatch({
      type: ActionTypes.RECEIVE_MESSAGE,
      message
    });
  },

  sendCommand(command) {
    MudDispatcher.dispatch({
      type: ActionTypes.SEND_COMMAND,
      command
    });
  },

  saveServers(servers) {
    MudDispatcher.dispatch({
      type: ActionTypes.SAVE_SERVERS,
      servers
    });
  },
  
};

export default Actions;
