'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';

class AppStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  getInitialState() {
    return Immutable.Map({
      connected: false,
      connecting: false,
      disconnecting: false
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.CONNECTING:
        return state.merge(Immutable.Map({
          connecting: true,
          server: action.server
        }));

      case ActionTypes.CONNECT:
        if (state.get('server').get('url') != action.url) {
          console.warn("server url doesn't match connection url", 
                       state.get('server').get('url'), action.url);
        }
        return state.merge(Immutable.Map({
          connected: true,
          connecting: false,
        }));

      case ActionTypes.DISCONNECTING:
        return state.merge(Immutable.Map({
          connecting: false,
          disconnecting: true
        }));

      case ActionTypes.DISCONNECT:
        return state.merge(Immutable.Map({
          connected: false,
          disconnecting: false
        }));

      default:
        return state;
    }
  }
}

export default new AppStore();
