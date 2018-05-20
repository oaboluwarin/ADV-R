import React from 'react';
import { object } from 'prop-types';
import { styles } from '..';

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.data}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: object.isRequired,
  author: object.isRequired,
};

export default Article;
