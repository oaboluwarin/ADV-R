import React from 'react';
import { mount, shallow, render } from 'enzyme';

beforeEach(() => {
  jest.resetModules();
});

const contextData = {
  allStateData: {
    articles : {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    authors: {}
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

const getArticleWithContext = (context = contextData) => {
  jest.doMock('../../context', () => {
    return {
      AppContext: {
        AppConsumer: (props) => props.children(context)
      }
    };
  });

  return require('../Article');
};

describe('<Article />', () => {
  // const testProps = {
  //   article: {
  //     title: 'Winds of winter',
  //     date: 'Sun Mar 18 2018 00:00:00 GMT+0000 (UTC)',
  //     body: 'The night king embarks on a quest to wipe out all of humanity'
  //   },
  // };

  it('should return render the article Component correctly', () => {
    const Article = getArticleWithContext();
    console.log(Article.default);
    // const wrapper = mount(<Article />);
    // console.log(wrapper);
    // expect(typeof(Article.default.propTypes)).toBe('object');
    // expect(typeof(Article.default.contextTypes)).toBe('object');

    // const tree = renderer.create(
    //   <Article
    //     {...testProps}
    //   />
    // ).toJSON();

    // expect(tree).toMatchSnapshot();
  });
});
