import React, { Component } from 'react';
import { AppProvider } from '../context';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    allStateData: this.props.store.getState(),
    store: this.props.store
  }

  render() {
    const {
      state,
      props: { store }
    } = this;

    return (
      <AppProvider value={{...state}}>
        <ArticleList
          articles={state.allStateData.articles}
          store={store}
        />
      </AppProvider>
    );
  }
}

export default App;
