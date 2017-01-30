'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Counter from '../data/Counter';
import Message from '../data/Message';
import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';

class MessageStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.RECEIVE_MESSAGE:
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
