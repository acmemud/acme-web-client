'use strict';

import MudActionTypes from './MudActionTypes';
import MudDispatcher from './MudDispatcher';

const Actions = {
  receiveMessage(message) {
    MudDispatcher.dispatch({
      type: MudActionTypes.RECEIVE_MESSAGE,
      message
    });
  },

  sendCommand(command) {
    MudDispatcher.dispatch({
      type: MudActionTypes.SEND_COMMAND,
      command
    })
  },
};

export default Actions;
