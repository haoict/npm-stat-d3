import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import waitForExpect from 'wait-for-expect';
import { buildContainerWrapper, mockStore, getProps } from 'helper';
import { GRAPH_DATA_QUERY } from 'graphqlData/queries';
import { countMockData } from 'mocks/data';
import GraphContainer from 'containers/graph';
import Graph from 'components/graph';

describe('GraphContainer', () => {
  const store = mockStore({
    root: {
      packages: ['react'],
      months: 1
    }
  });

  const mocks = [
    {
      request: {
        query: GRAPH_DATA_QUERY,
        variables: {
          packages: ['react'],
          months: 1
        }
      },
      result: countMockData
    }
  ];

  beforeEach(() => {
    store.clearActions();
  });

  test('it should render graph component without error', async () => {
    const Component = () => (
      <MockedProvider mocks={mocks}>
        <GraphContainer />
      </MockedProvider>
    );

    const wrapper = buildContainerWrapper(store, Component, {}, 'render');

    await waitForExpect(() => {
      const props = getProps(wrapper, Graph);
      console.log(props);
    });
  });
});
