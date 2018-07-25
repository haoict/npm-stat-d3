import React from 'react';
import { Section } from 'components/styledComponents';
import SearchForm from 'containers/searchForm';
import Graph from './graph';

const testData = [
  {
    id: 'react-id-swiper',
    data: [
      {
        x: '2018-05-03',
        y: 1312
      },
      {
        x: '2018-05-04',
        y: 1797
      },
      {
        x: '2018-05-05',
        y: 269
      },
      {
        x: '2018-05-06',
        y: 359
      },
      {
        x: '2018-05-07',
        y: 1392
      }
    ]
  },
  {
    id: 'react',
    data: [
      {
        x: '2018-05-03',
        y: 13332
      },
      {
        x: '2018-05-04',
        y: 17974
      },
      {
        x: '2018-05-05',
        y: 269333
      },
      {
        x: '2018-05-06',
        y: 3593
      },
      {
        x: '2018-05-07',
        y: 13923
      }
    ]
  }
];

export default () => (
  <Section>
    <SearchForm />
    <Graph data={testData} />
  </Section>
);
