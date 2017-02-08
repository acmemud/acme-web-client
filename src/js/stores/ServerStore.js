'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {ActionTypes} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';
import Server from '../data/Server';

const AcmeUrl = 'ws://localhost:8080';
const ServersItem = 'servers';

class ServerStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  restoreState() {
    let servers = JSON.parse(localStorage.getItem(ServersItem));
    let persist = false;
    if (!servers) {
      servers = [ 
        [ AcmeUrl, { 
          url: AcmeUrl,
          label: "Acme MUD", 
          thumbnail: 'http://mud.panterasbox.com/bigroom.png'
        } ] 
      ];
      persist = true;
    }
    servers.map((e) => { e[1] = new Server(e[1]); });
    let state = Immutable.OrderedMap(servers);
    if (persist) {
      this.persistState(state);
    }
    return state;
  }

  persistState(state) {
    localStorage.setItem(ServersItem, JSON.stringify(state.entrySeq().toJSON()));
  }

  getInitialState() {
    return this.restoreState();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_SERVER:
        state = state.set(action.url, new Server({
          url: action.url,
          label: action.label,
          icon: action.icon
        }));
        this.persistState(state);
        return state;

      case ActionTypes.REMOVE_SERVER:
        state = state.delete(action.url);
        this.persistState(state);
        return state;

      default:
        return state;
    }
  }
}

export default new ServerStore();
