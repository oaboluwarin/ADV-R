import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../Article';

beforeEach(() => {
  jest.resetModules();
});

jest.mock('../../context', () => {
  const contextData = {
    allStateData: {
      articles : {
        a: { id: 'a' },
        b: { id: 'b' },
      },
      authors: {}
    },
    store: {
      lookUpAuthor: jest.fn(() => {
        return {
          author: {
            website: 'http://wordifice.wordpress.com',
            firstName: 'oreoluwa',
            lastName: 'aboluwarin'
          }
        };
      }),
    }
  };
  return {
    AppConsumer: (props) => {
      return props.children(contextData);
    }
  };
});

describe('<Article />', () => {
  const testProps = {
    article: {
      title: 'Winds of winter',
      date: 'Sun Mar 18 2018 00:00:00 GMT+0000 (UTC)',
      body: 'The night king embarks on a quest to wipe out all of humanity'
    },
  };

  it('should return render the article Component correctly', () => {
    const tree = renderer.create(
      <Article
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
