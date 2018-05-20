import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../Article';

describe('Article', () => {

  const testProps = {
    article: {
      title: 'Winds of winter',
      date: 'Sun Mar 18 2018 00:00:00 GMT+0000 (UTC)',
      body: 'The night king embarks on a quest to wipe out all of humanity'
    },
    store: {
      lookUpAuthor: jest.fn(() => ({
        author: {
          website: 'http://wordifice.wordpress.com',
          firstName: 'oreoluwa',
          lastName: 'aboluwarin'
        }
      })),
    }
  };

  it('renders the Article component correctly', () => {
    const tree = renderer.create(
      <Article
        {...testProps}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
