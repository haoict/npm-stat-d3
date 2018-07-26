import GraphContainer from 'containers/graph';
import { buildContainerWrapper, mockStore } from 'helper';
import { GRAPH_DATA_QUERY } from 'graphqlData/queries';
import { countMockData } from 'mocks/data';

describe('GraphContainer', () => {
  const store = {
    root: {
      packages: [],
      months: 1
    }
  };

  const mocks = [
    {
      request: {
        query: GRAPH_DATA_QUERY,
        variables: {
          name: {
            packages: ['react'],
            month: 1
          }
        }
      },
      result: countMockData
    }
  ];
});
