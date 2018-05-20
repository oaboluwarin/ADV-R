import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import StateApi from 'state-api';
import App from 'components/App';

const store = new StateApi(window.initialData);

hydrate(
  <App store={store} />,
  document.getElementById('root')
);
