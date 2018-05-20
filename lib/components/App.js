import React, { Component } from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  }

  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
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
