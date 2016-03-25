import React from 'react';
import MessageList from './MessageList.js';
import ChannelList from './ChannelList.js';
import MessageBox from './MessageBox.js';

export class Chat extends React.Component {
  render () {
    return (
      <div style={{width: '96%', margin: 'auto'}}>
        <div style={{display: 'flex', flexFlow: 'row wrap', maxWidth: 1200, width: '100%', margin: '30px auto'}}>
          <ChannelList {...this.props}/>
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
};

export default Chat;

