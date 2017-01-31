'use strict';

import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';

const Actions = {
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
