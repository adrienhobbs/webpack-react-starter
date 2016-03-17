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

  login (args) {
    return (dispatch) => {
      let firebaseRef = new Firebase('https://hobbs-react-stack.firebaseio.com');
      firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) {
          return;
        }
        dispatch(user);
      }, {remember: 'sessionOnly', scope: 'email'});
    };
  }

}

export default alt.createActions(Actions);
