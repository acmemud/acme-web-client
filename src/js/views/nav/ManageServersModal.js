'use strict';

import React from 'react';
import {Modal, Button, 
        ListGroup, ListGroupItem,
        Popover, OverlayTrigger} from 'react-bootstrap';
import Label from '../common/Label';
import Paragraph from '../common/Paragraph';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/json';
import 'brace/theme/github';
import Ajv from 'ajv';
import ServerItem from './ServerItem';
import MudActions from '../../actions/MudActions';
import {ServerStore} from '../../stores/ServerStore';
import {Schemas} from '../../MudConstants';
import '../../../sass/acme.scss';

class ManageServersModal extends React.Component {
  constructor(props) {
    super(props);
    this._validateJson = new Ajv().compile(Schemas.Servers);
    this.state = {
      servers: props.servers
    };
    Object.assign(this.state, this.restoreState(props.servers));
  }

  restoreState(servers) {
    let json = ServerStore.serversToJson(servers, '\t');
    return {
      value: json,
      errors: this.validateJson(servers.entrySeq().toJSON())
    };
  }

  validateJson(json) {
    var valid = this._validateJson(json);
    if (!valid) {
      return this._validateJson.errors.map(error => {
        return error.message;
      });
    } else {
      return [];
    }
  }

  onChange(value) {
    try {
      var json = JSON.parse(value);
      var errors = this.validateJson(json);
    } catch (ex) {
      var valid = false;
      var errors = [ ex.message ];
    }
    this.setState({
      value: value,
      errors: errors,
    });
    if (errors.length == 0) {
      this.setState({
        servers: ServerStore.jsonToServers(json)
      });
    }
  }

  onSave() {
    MudActions.saveServers(this.state.servers);
    this.props.onHide();
  }

  onCancel() {
    this.setState(this.restoreState(this.state.servers));
    this.props.onHide();
  }

  render() {
    let schemaPopover = (
      <Popover id="servers-schema" 
               className="servers-schema" 
               title="servers schema">
        <AceEditor mode="json" 
                   theme="github" 
                   width="300px"
                   height="250px"
                   tabSize={2}
                   readOnly={true}
                   name="serversSchema"
                   value={JSON.stringify(Schemas.Servers, null, '\t')}
                   editorProps={{}} />
      </Popover>
    );
    return (
      <Modal className="manage-servers"
             show={this.props.show} 
             backdrop="static"
             onHide={this.onCancel.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Servers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="description">
            <Paragraph>
              Configure your server list by editing the JSON below. 
              View the schema&nbsp;
              <OverlayTrigger trigger="click" 
                              rootClose 
                              placement="right" 
                              overlay={schemaPopover}>
                <a href="#">here</a>
              </OverlayTrigger>.
           </Paragraph>
           <ul className="errors"
               hidden={this.state.errors.length ? '' : 'hidden'}>
           { this.state.errors.map((error, index) => (
             <li key={index}>{error}</li>
           )) }
           </ul>
          </div>
          <div className="servers">
            <span className="serverList">
              <ListGroup>
                <ListGroupItem key={0} className="servers-header">
                  <Label label="Servers"/>
                </ListGroupItem>
                { this.state.servers.valueSeq().map(server => (
                  <ListGroupItem key={server.get('url')}>
                    <ServerItem label={server.get('label')} 
                                thumbnail={server.get('thumbnail')} 
                                icon={server.get('icon')}
                                url={server.get('url')} />
                  </ListGroupItem>
                )) }
                <ListGroupItem key={1}>
                  <Button disabled={this.state.errors.length ? true : false} 
                          onClick={this.onSave.bind(this)}>
                    Save
                  </Button>
                  <Button onClick={this.onCancel.bind(this)}>
                    Cancel
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </span>
            <span className="serverEditor">
              <AceEditor mode="json" 
                         theme="github" 
                         width="400px"
                         height="100%"
                         tabSize={2}
                         onChange={this.onChange.bind(this)}
                         name="serversEditor"
                         value={this.state.value}
                         editorProps={{}} />
            </span>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ManageServersModal;
