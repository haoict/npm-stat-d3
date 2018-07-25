import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createProvider from 'utils/provider';
import { injectGlobal } from 'styled-components';
import { globalStyles } from 'configs/styles';
import createStore from './store';
import routes from './routes';

// Inject global styles
injectGlobal`${globalStyles}`;

// Create store
const store = createStore();

ReactDOM.render(
  createProvider(<BrowserRouter>{routes}</BrowserRouter>, store),
  document.getElementById('app')
);
