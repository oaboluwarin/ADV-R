import React, { Component } from 'react';
import pickBy from 'lodash.pickby';
import { AppProvider } from '../context';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
  state = {
    apiData: this.props.store.getState(),
    store: this.props.store
  }

  onStoreChange = () => {
    this.setState(() => ({
      apiData: this.props.store.getState(),
      store: this.props.store,
    }));
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state.apiData;

    if(searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }

    return (
      <AppProvider value={{...this.state}}>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </AppProvider>
    );
  }
}

export default App;
