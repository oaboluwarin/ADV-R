import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import App from 'components/App';
import { config } from '..';

const { host, port } = config;

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(resp.data);

  const initialMarkup = ReactDOMServer.renderToString(
    <App store={store} />
  );

  return {
    initialMarkup,
    initialData: resp.data,
  };
};

export default serverRender;
