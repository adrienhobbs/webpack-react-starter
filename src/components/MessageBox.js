import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Actions from '../actions';
var {Card} = mui;
// import Firebase from 'firebase';
export class MessageBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange (evt) {
    this.setState({message: evt.target.value});
  }

  onKeyUp (evt) {
    if (evt.keyCode === 13 && trim(evt.target.value) !== '') {
      evt.preventDefault();
      Actions.sendMessage(this.state.message);
      this.setState({message: ' '});

      console.log('Sent a new message: ', evt.target.value);
    }
  }

  // componentDidMount () {
  //   let firebaseRef = new Firebase('https://hobbs-react-stack.firebaseio.com');
  //   // let pad = this.refs.pad;
  //   // setTimeout(function () {
  //   // var codeMirror = CodeMirror(pad, { lineWrapping: true });
  //   // var firepad = Firepad.fromCodeMirror(firebaseRef, codeMirror, { richTextShortcuts: true, richTextToolbar: true, defaultText: 'Hello, World!' });
  //   // }, 2000);
  // }

  render () {
    return (
      <Card style={{maxWidth: 1200, margin: '30px auto', padding: 30}}>
        <textarea
          value={this.state.message}
          onKeyUp={this.onKeyUp.bind(this)}
          onChange={this.onChange.bind(this)}
          style={{width: '100%', borderColor: '#D0D0D0', resize: 'none', borderRadius: 3, minHeight: 50, color: '#555', fontSize: 14, outline: 'auto 0px'}}/>
      </Card>
    );
  }
};

export default MessageBox;

//
        // <div ref='pad' id='pad'></div>
