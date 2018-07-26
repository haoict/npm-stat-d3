import React from 'react';
import { Section } from 'components/styledComponents';
import SearchForm from 'containers/searchForm';
import Graph from 'containers/graph';

export default () => (
  <Section>
    <SearchForm />
    <Graph />
  </Section>
);
