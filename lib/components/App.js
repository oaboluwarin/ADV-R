import React, { Component } from 'react';
import pickBy from 'lodash.pickby';
import { AppProvider } from '../context';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = {
    apiData: this.appState(),
    store: this.props.store,
  }

  onStoreChange = () => {
    this.setState(() => ({
      apiData: this.appState(),
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
    const searchRE = new RegExp(searchTerm, 'i');

    if(searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }

    return (
      <AppProvider value={{...this.state}}>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </AppProvider>
    );
  }
}

export default App;
