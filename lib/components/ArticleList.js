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
          author={props.authors[article.authorId]}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: object,
  authors: object,
};

export default ArticleList;
