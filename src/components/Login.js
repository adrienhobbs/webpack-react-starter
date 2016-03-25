import React, {PropTypes} from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
  Card,
  CardText,
  RaisedButton
} = mui;

export class Login extends React.Component {
  static propTypes = {

  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  onClick () {
    console.log(this);
    Actions.login(this.context.router);
  }

  render () {
    return (
      <Card style={{'maxWidth': '800px', 'margin': '30px auto', 'padding': '50px'}} >
        <CardText style={{'textAlign': 'center'}}>
          <RaisedButton style={{'display': 'block'}} onClick={this.onClick.bind(this)} label='Log in with Google' />
        </CardText>
      </Card>
    );
  }
};

export default Login;
