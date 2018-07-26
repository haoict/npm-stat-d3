import { compose, pure, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';
import { updateMonths, updatePackage } from 'actions';
import { selectPackages, selectMonths } from 'selectors';
import Graph from 'components/graph';
import { GRAPH_DATA_QUERY } from 'graphqlData/queries';

export default compose(
  connect(
    createSelector(selectPackages(), selectMonths(), (packages, months) => ({ packages, months })),
    { updateMonths, updatePackage }
  ),
  graphql(GRAPH_DATA_QUERY, {
    skip: ({ packages }) => isEmpty(packages),
    options: ({ packages, months }) => ({
      variables: { packages, months }
    }),
    props: ({ data: { count = {}, loading, error } }) => ({
      data: count,
      loading,
      error
    })
  }),
  withHandlers({
    removePackage: props => packageName => () => {
      props.updatePackage(packageName);
    }
  }),
  pure
)(Graph);
