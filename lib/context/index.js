import { createContext } from 'react';

const AppContext = createContext({
  allStateData: {
    articles: {},
    author: {}
  },
  store: {
    lookUpAuthor: () => null
  }
});

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
