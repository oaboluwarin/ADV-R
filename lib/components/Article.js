import React from 'react';
import { object, shape, string } from 'prop-types';
import { styles } from '..';
import { withStore } from './withStore';

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, store } = props;
  const author = store.lookUpAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
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
  article: shape({
    date: string.isRequired,
    title: string.isRequired,
    body: string.isRequired,
  }),
  store: object
};

export default withStore(Article);
