import React, { Component, createContext } from 'react';
import ArticleList from './ArticleList';

const AppContext = createContext();
const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

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
