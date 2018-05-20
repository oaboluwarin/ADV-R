import React, { Component } from 'react';
import { DataApi, data } from '..';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  }

  async componentDidMount() {
    console.log(this.state.articles);
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <ArticleList
        articles={articles}
        authors={authors}
      />
    );
  }
}

export default App;
