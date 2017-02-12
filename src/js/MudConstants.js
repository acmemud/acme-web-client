'use strict';

export const ActionTypes = {
  CONNECTING: 'CONNECTING',
  CONNECT: 'CONNECT',
  DISCONNECTING: 'DISCONNECTING',
  DISCONNECT: 'DISCONNECT',
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
  SEND_COMMAND: 'SEND_COMMAND',
  SAVE_SERVERS: 'SAVE_SERVERS',
};

export const ServerConstants = {
  DefaultServer: { 
    url: 'ws://localhost:8080/',
    label: "Acme MUD"
  },
  ServersLocalStoreItem: 'servers'
};

export const Schemas = {
  Servers: {
    title: "Servers",
    type: "array",
    items: {
      type: "array",
      items: [
        {
          title: "Server unique key",
          type: "string"
        },
        { 
          title: "Server",
          type: "object",
          properties: {
            url: {
              title: "Server URL",
              type: "string",
              pattern: "^wss?:\\/\\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
            },
            label: {
              title: "Server label",
              type: "string"
            },
            thumbnail: {
              title: "Server thumbnail URL",
              type: "string"
            },
            icon: {
              title: "Server icon (fontawesome)",
              type: "string"
            }
          },
          required: ["url", "label"]
        } 
      ]
    }
  },

};