import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { isEmpty } from 'lodash';

export default (Component, store) => {
  const link = ApolloLink.from([
    new HttpLink({
      uri: '/graphql',
      credentials: 'same-origin',
      fetch: (uri, options) => fetch(uri, options)
    })
  ]);

  return (
    <ApolloProvider
      client={
        new ApolloClient({
          link,
          cache: new InMemoryCache()
        })
      }
    >
      {isEmpty(store) ? <Provider store={store}>{Component}</Provider> : Component}
    </ApolloProvider>
  );
};
