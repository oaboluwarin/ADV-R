import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  state = {
    test: 'answer'
  }

  asyncFunc = () => {
    return Promise.resolve('async response');
  }

  async componentDidMount() {
    this.setState({
      test: await this.asyncFunc(),
    });
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
