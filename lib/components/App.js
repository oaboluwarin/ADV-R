import React, { Component } from 'react';
import { DataApi, data } from '..';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  }

  asyncFunc = () => {
    return Promise.resolve('async response');
  }

  async componentDidMount() {
    console.log(this.state.articles);
    this.setState({
      test: await this.asyncFunc(),
    });
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
