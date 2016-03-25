import React from 'react';
import {Route, browserHistory, Router} from 'react-router';
import App from './App.js';
import Chat from './Chat.js';
import Login from './Login.js';
import ChatStore from '../stores/ChatStore.js';

function isAuthorized (nextState, replace) {
  if (!ChatStore.getState().user) {
    replace({
      pathname: '/login'
    });
  }
}
export class Root extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='chat' component={Chat} onEnter={isAuthorized}/>
          <Route path='chat/:channel' component={Chat} />
          <Route path='login' component={Login}/>
        </Route>
      </Router>
    );
  }
};

export default Root;
