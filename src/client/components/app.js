import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setPropTypes } from 'recompose';
import { Section } from 'components/styledComponents';
import SearchForm from 'containers/searchForm';
import Graph from 'containers/graph';

const App = ({ match, history }) => (
  <Section>
    <SearchForm match={match} history={history} />
    <Graph match={match} history={history} />
  </Section>
);

export default compose(
  setPropTypes({
    match: PropTypes.object,
    history: PropTypes.object
  }),
  pure
)(App);
