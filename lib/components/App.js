import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = this.props.store.getState();

  render() {
    const {
      state: { articles },
      props: { store }
    } = this;

    return (
      <ArticleList
        articles={articles}
        store={store}
      />
    );
  }
}

export default App;
