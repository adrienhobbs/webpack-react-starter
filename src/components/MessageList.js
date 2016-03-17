import React, {PropTypes} from 'react';
import Message from './Message.js';
import mui from 'material-ui';
import _ from 'lodash';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';

var {Card, List, CircularProgress} = mui;

@connectToStores
export class MessageList extends React.Component {

  static propTypes = {
    messages: PropTypes.object,
    messagesLoading: PropTypes.bool
  }
  constructor (props) {
    super(props);
  }

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores () {
    // don't return entire state to a single component
    return ChatStore.getState();
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object
  };

  render () {
    let messageNodes = null;
    if (!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages).map((message, i) => {
        return (
          <Message message={message} key={i} />
        );
      });
    } else {
      messageNodes = <CircularProgress mode='indeterminate'
        style={{paddingTop: 20, paddingBottom: 20, margin: '0 auto', display: 'block', width: '60px'}}
      />;
    }

    return (
      <Card style={{flexGrow: 2, marginLeft: 30}}>
        <List>{messageNodes}</List>
      </Card>
    );
  }
};

export default MessageList;
