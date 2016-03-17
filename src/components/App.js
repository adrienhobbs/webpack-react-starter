import React, {PropTypes} from 'react';
import MessageList from './MessageList.js';
import ChannelList from './ChannelList.js';
import MessageBox from './MessageBox.js';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';
import Login from './Login.js';
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
@connectToStores
export class App extends React.Component {

  static propTypes = {
    user: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores () {
    return ChatStore.getState();
  }

  render () {
    var view = <Login />;
    if (this.props.user) {
      view = <div style={{width: '96%', margin: 'auto'}}>
        <div style={{display: 'flex', flexFlow: 'row wrap', maxWidth: 1200, width: '100%', margin: '30px auto'}}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>;
    }
    return (
      <div>
        <AppBar title='Awesome Chat App' />
        {view}
      </div>
    );
  }
};

export default App;

