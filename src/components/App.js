import React from 'react';

export class App extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: [
        'hello there',
        'wassup'
      ]
    };
  }

  render () {
    var messageNodes = this.state.messages.map((message, i) => {
      return (
        <div style={{color: 'blue'}} key={i}>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
};

export default App;
