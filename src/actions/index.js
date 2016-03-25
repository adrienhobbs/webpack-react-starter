import alt from '../alt';
import Firebase from 'firebase';

class Actions {

  constructor () {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  isLoggedIn (router, location) {
    return (dispatch) => {
      let firebaseRef = new Firebase('https://hobbs-react-stack.firebaseio.com');
      let user        = firebaseRef.getAuth();

      if (user) {
        dispatch(user);
        if (location.pathname === '/login') {
          router.push('/chat');
        }
        if (location.pathname === '/') {
          router.push('/chat');
        }
      }
    };
  }
  login (router) {
    return (dispatch) => {
      let firebaseRef = new Firebase('https://hobbs-react-stack.firebaseio.com');

      firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) {
          return;
        }
        dispatch(user);
        router.push('/chat');
      }, {scope: 'email'});
    };
  }

}

export default alt.createActions(Actions);
