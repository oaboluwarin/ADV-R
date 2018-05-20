import React, { Component } from 'react';
import DataApi from 'state-api';
import { data } from '..';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  }

  articleActions = {
    lookUpAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    const {
      state: { articles },
      articleActions
    } = this;

    return (
      <ArticleList
        articles={articles}
        articleActions={articleActions}
      />
    );
  }
}

export default App;
