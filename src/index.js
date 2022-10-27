import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import '../src/styles/common.scss';
import '../src/styles/reset.scss';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore()}>
    <Router />
  </Provider>
);
