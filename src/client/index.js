import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import createProvider from 'utils/provider';
import { injectGlobal } from 'styled-components';
import { globalStyles } from 'configs/styles';
import createStore from './store';

// Inject global styles
injectGlobal`${globalStyles}`;

// Create store
const store = createStore();

ReactDOM.render(createProvider(<App />, store), document.getElementById('app'));
