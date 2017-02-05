'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';

class PlayerStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.Map();
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default new PlayerStore();
