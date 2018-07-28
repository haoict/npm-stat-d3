import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { createSelector } from 'reselect';
import { updatePackages } from 'actions';
import { selectPackages } from 'selectors';
import SearchForm from 'components/searchForm';

export default compose(
  connect(createSelector(selectPackages(), packages => ({ packages })), { updatePackages }),
  pure
)(SearchForm);
