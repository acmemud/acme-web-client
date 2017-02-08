'use strict';

import PlayerDropdown from '../views/nav/PlayerDropdown';
import React from 'react';
import {Container} from 'flux/utils';
import MudActions from '../actions/MudActions';
import PlayerStore from '../stores/PlayerStore';

class PlayerContainer extends React.Component {
  static getStores() {
    return [
      PlayerStore
    ];
  }

  static calculateState(prevState) {  
    return {
      players: PlayerStore.getState(),
    };
  }

  render() {
    return (
      <PlayerDropdown players={this.state.players} />
    );
  }
}

export default Container.create(PlayerContainer);
