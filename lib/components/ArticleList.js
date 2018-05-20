import React from 'react';
import { object } from 'prop-types';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map((article) => (
        <Article
          key={article.id}
          article={article}
          store={props.store}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: object.isRequired,
  store: object.isRequired,
};

export default ArticleList;
