'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Command from './Command';
import MudActionTypes from './MudActionTypes';
import MudDispatcher from './MudDispatcher';

class CommandStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case MudActionTypes.SEND_COMMAND:
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
