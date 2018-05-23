import React, { PureComponent } from 'react'
import { object } from 'prop-types';
import Article from './Article';

class ArticleList extends PureComponent {
  static propTypes = {
    articles: object.isRequired,
  }

  render() {
    return (
      <div>
        {Object.values(this.props.articles).map((article) => (
          <Article
            key={article.id}
            article={article}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
