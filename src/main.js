/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {browserHistory} from 'react-router';
import Root from './components/Root.js';
require('./main.scss');

ReactDOM.render((
  <Root />
), document.getElementById('container'));

