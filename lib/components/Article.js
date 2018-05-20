import React from 'react';
import { object } from 'prop-types';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: object.isRequired,
  author: object.isRequired,
};

export default Article;
