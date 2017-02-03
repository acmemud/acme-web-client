'use strict';

import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';
import MudBackend from '../utils/MudBackend';

const ServerURI = 'ws://localhost:8081';

const Actions = {
  connect() {
    MudDispatcher.dispatch({
      type: ActionTypes.CONNECTING,
      url: ServerURI
    });
    MudBackend.connect(ServerURI);
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
    })
  },
};

export default Actions;
