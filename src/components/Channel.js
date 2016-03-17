import React, {PropTypes} from 'react';
import mui from 'material-ui';
import Actions from '../actions';
var {ListItem} = mui;

export class Channel extends React.Component {

  static propTypes = {
    channel: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  onClick () {
    Actions.channelOpened(this.props.channel);
  }

  render () {
    let style = {};

    if (this.props.channel.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem onClick={this.onClick.bind(this)} style={style}>{this.props.channel.name}</ListItem>
    );
  }
};

export default Channel;
