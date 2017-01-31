'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Counter from '../data/Counter';
import Command from '../data/Command';
import ActionTypes from '../MudConstants';
import MudDispatcher from '../MudDispatcher';

class CommandStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SEND_COMMAND:
        // Don't send empty commands
        if (!action.command) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Command({
          id,
          command: action.command,
        }));

      default:
        return state;
    }
  }
}

export default new CommandStore();
