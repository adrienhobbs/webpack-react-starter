import React, {PropTypes} from 'react';
import Channel from './Channel.js';
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';

var {Card, List, CircularProgress} = mui;

@connectToStores
export class ChannelList extends React.Component {

  static propTypes = {
    channels: PropTypes.object
  }

  constructor (props) {
    super(props);
    ChatStore.getChannels();
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object
  };

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores () {
    return ChatStore.getState();
  }

  createCircularProgress () {
    return (
      <Card style={{flexGrow: 1}}>
        <CircularProgress mode='indeterminate' style={{paddingTop: '20px', paddingBottom: '20px', margin: '0 auto', display: 'block', width: '60px'}} />
      </Card>
    );
  }

  render () {
    if (!this.props.channels) {
      return this.createCircularProgress();
    }

    var channelNodes = _(this.props.channels)
    .keys()
    .map((k, i) => {
      let channel = this.props.channels[k];
      return (
        <Channel channel={channel} key={i} />
      );
    })
    .value();

    return (
      <Card>
        <List>{channelNodes}</List>
      </Card>
    );
  }
};

export default ChannelList;
