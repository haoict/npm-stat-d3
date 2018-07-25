import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers';
import thunk from 'redux-thunk'

export default initialState => {
  const middleware = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middleware.push(logger);
  }

  const store = createStore(reducer, initialState, applyMiddleware(...middleware));

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
