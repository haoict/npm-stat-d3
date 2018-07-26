import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { createSelectors } from 'reselect';
import { updateMonths } from 'actions';
import { selectPackages, selectMonths } from 'selectors';
import Graph from 'components/graph';
import { GRAPH_DATA_QUERY } from 'graphqlData/queries';

export default compose(
  connect(
    createSelectors(selectPackages(), selectMonths(), (packages, months) => ({ packages, months })),
    { updateMonths }
  ),
  graphql(GRAPH_DATA_QUERY, {
    options: {}
  }),
  pure
)(Graph);
