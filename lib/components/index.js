import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  state = {
    test: 'answer'
  }

  render() {
    return (
      <div>
        {this.state.test}
      </div>
    );
  }
}


render(
  <App />,
  document.getElementById('root')
);
