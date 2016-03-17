import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
  sendMessage: {
    remote (state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve();
        }
        firebaseRef.push({
          'message': state.message,
          'date': new Date().toUTCString(),
          'author': state.user.google.displayName,
          'userId': state.user.uid,
          'profilePic': state.user.google.profileImageURL
        });
        resolve();
      });
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
  getMessages: {
    remote (state) {
      console.log('get messages');
      if (firebaseRef) {
        firebaseRef.off();
      }
      return new Promise((resolve, reject) => {
        firebaseRef = new Firebase('https://hobbs-react-stack.firebaseio.com/messages/' + state.selectedChannel.key);
        firebaseRef.once('value', (dataSnapshot) => {
          var messages = dataSnapshot.val();
          resolve(messages);
          
          firebaseRef.on('child_added', (msg) => {
            console.log(msg.val());
            let msgVal = msg.val();
            msgVal.key = msg.key();
            Actions.messageReceived(msgVal);
          });
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }

};

export default MessageSource;
