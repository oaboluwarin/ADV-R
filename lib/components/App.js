import React, { Component } from 'react';
import pickBy from 'lodash.pickby';
import { AppProvider } from '../context';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    apiData: this.props.store.getState(),
    store: this.props.store
  }

  setSearchTerm = (searchTerm) => {
    this.setState(() => ({ searchTerm }));
  }

  render() {
    let { articles } = this.state.apiData;

    if(this.state.searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(this.state.searchTerm) || value.body.match(this.state.searchTerm);
      });
    }

    return (
      <AppProvider value={{...this.state}}>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </AppProvider>
    );
  }
}

export default App;
