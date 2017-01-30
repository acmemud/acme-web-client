'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Message from './Message';
import MudActionTypes from './MudActionTypes';
import MudDispatcher from './MudDispatcher';

class MessageStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case MudActionTypes.RECEIVE_MESSAGE:
        // Don't receive empty messages
        if (!action.message) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Message({
          id,
          message: action.message,
        }));

      default:
        return state;
    }
  }
}

export default new MessageStore();
