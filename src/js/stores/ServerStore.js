'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {ActionTypes, ServerConstants} from '../MudConstants';
import MudDispatcher from '../MudDispatcher';
import Server from '../data/Server';

export class ServerStore extends ReduceStore {
  constructor() {
    super(MudDispatcher);
  }

  static serversToJson(servers, indent) {
    return JSON.stringify(servers.entrySeq().toJSON(), null, indent);
  }

  static jsonToServers(json) {
    json.map((e) => { 
      e[1].key = e[0];
      e[1] = new Server(e[1]); 
    });
    return Immutable.OrderedMap(json);
  }

  static restoreState() {
    let servers = JSON.parse(
      localStorage.getItem(ServerConstants.ServersLocalStoreItem)
    );
    let persist = false;
    if (!servers) {
      servers = [ 
        [ ServerConstants.DefaultServer['url'],
          ServerConstants.DefaultServer 
        ] 
      ];
      persist = true;
    }
    let state = ServerStore.jsonToServers(servers);
    if (persist) {
      ServerStore.persistState(state);
    }
    return state;
  }

  static persistState(state) {
    localStorage.setItem(ServerConstants.ServersLocalStoreItem, 
                         ServerStore.serversToJson(state));
  }

  getInitialState() {
    return ServerStore.restoreState();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SAVE_SERVERS:
        ServerStore.persistState(action.servers);
        return action.servers;

      default:
        return state;
    }
  }
}

export default new ServerStore();
