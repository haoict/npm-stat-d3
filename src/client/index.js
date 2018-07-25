import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import createStore from './store';
import createProvider from 'utils/provider';

const store = createStore();

ReactDOM.render(createProvider(<App />, store), document.getElementById('app'));
