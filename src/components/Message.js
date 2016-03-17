import React, {PropTypes} from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

export class Message extends React.Component {

  static propTypes = {
    message: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListItem leftAvatar={<Avatar src={this.props.message.profilePic} />}>
      {this.props.message.message}
      </ListItem>
    );
  }
};

export default Message;
