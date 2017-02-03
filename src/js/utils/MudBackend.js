'use strict';

import {ActionTypes} from '../MudConstants';
import MudActions from '../actions/MudActions';

class MudBackend {
  onSocketOpen(serverUrl) {
    console.log("connection established");
    MudActions.connected(serverUrl);
  }

  onSocketClose() {
    console.log("connection closed");
    MudActions.disconnected();
  }

  onSocketData(message) {
    let data = JSON.parse(message.data);
    MudActions.receiveMessage(data);
  }

  onSocketError(error) {
    console.log("connection error", error);
  }

  connect(serverUrl) {
    try {
      this.socket = new WebSocket(serverUrl);
      this.socket.onopen = () => this.onSocketOpen(this.socket.url);
      this.socket.onclose = () => this.onSocketClose();
      this.socket.onmessage = (message) => this.onSocketData(message);
      this.socket.onerror = (error) => this.onSocketError(error);
      return 1;
    } catch(e) {
      console.log("connection refused");
      return 0;
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close(1000, "connection closed by client");
      return 1;
    }
    return 0;
  }

  send(data) {
    if (this.socket) {
      this.socket.send(data);
      return 1;
    }
    return 0;
  }
}

let backend = new MudBackend();
export default backend;
