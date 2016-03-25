import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../components/App.js';
import Chat from '../components/Chat.js';
import Login from '../components/Login.js';
import {Route, DefaultRoute} from 'react-router';

const routes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={Chat} />
    <Route path='chat' handler={Chat}/>
    <Route path='login' handler={Login}/>
  </Route>
);

export default routes;
