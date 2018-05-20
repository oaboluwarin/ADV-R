import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from 'state-api';
import App from 'components/App';
import { config } from '..';

const { host, port } = config;

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData}/>
  );

  return {
    initialMarkup,
    initialData,
  };
};

export default serverRender;
