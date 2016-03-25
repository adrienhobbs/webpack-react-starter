import React, {PropTypes} from 'react';
// import {RouteHandler} from 'react-router';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import Actions from '../actions';
var Colors = mui.Styles.Colors;

const MyRawTheme = {
  palette: {
    primary1Color: Colors.indigo500,
    primary2Color: Colors.indigo100,
    primary3Color: Colors.indigo500,
    accent1Color: Colors.indigo700
  }
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export class App extends React.Component {

  static propTypes = {
    user: PropTypes.object,
    children: PropTypes.object,
    location: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount () {
    Actions.isLoggedIn(this.context.router, this.props.location);
  }

  render () {
    return (
      <div>
        <AppBar title='Awesome Chat App' />
        {this.props.children}
      </div>
    );
  }
};

export default App;

