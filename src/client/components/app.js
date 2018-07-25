import React from 'react';
import { Section } from 'components/styledComponents';
import SearchForm from 'containers/searchForm';
import Graph from './graph';

const testData = [
  {
    id: 'whisky',
    color: 'hsl(130, 70%, 50%)',
    data: [
      {
        color: 'hsl(263, 70%, 50%)',
        x: 'BQ',
        y: 17
      },
      {
        color: 'hsl(107, 70%, 50%)',
        x: 'GY',
        y: 50
      },
      {
        color: 'hsl(223, 70%, 50%)',
        x: 'MN',
        y: 31
      },
      {
        color: 'hsl(147, 70%, 50%)',
        x: 'AU',
        y: 12
      },
      {
        color: 'hsl(167, 70%, 50%)',
        x: 'KR',
        y: 31
      },
      {
        color: 'hsl(288, 70%, 50%)',
        x: 'RS',
        y: 19
      },
      {
        color: 'hsl(168, 70%, 50%)',
        x: 'ZA',
        y: 53
      },
      {
        color: 'hsl(191, 70%, 50%)',
        x: 'LU',
        y: 33
      },
      {
        color: 'hsl(294, 70%, 50%)',
        x: 'BT',
        y: 28
      }
    ]
  },
  {
    id: 'rhum',
    color: 'hsl(331, 70%, 50%)',
    data: [
      {
        color: 'hsl(7, 70%, 50%)',
        x: 'BQ',
        y: 6
      },
      {
        color: 'hsl(70, 70%, 50%)',
        x: 'GY',
        y: 40
      },
      {
        color: 'hsl(188, 70%, 50%)',
        x: 'MN',
        y: 16
      },
      {
        color: 'hsl(295, 70%, 50%)',
        x: 'AU',
        y: 5
      },
      {
        color: 'hsl(134, 70%, 50%)',
        x: 'KR',
        y: 57
      },
      {
        color: 'hsl(313, 70%, 50%)',
        x: 'RS',
        y: 49
      },
      {
        color: 'hsl(303, 70%, 50%)',
        x: 'ZA',
        y: 4
      },
      {
        color: 'hsl(338, 70%, 50%)',
        x: 'LU',
        y: 26
      },
      {
        color: 'hsl(212, 70%, 50%)',
        x: 'BT',
        y: 8
      }
    ]
  },
  {
    id: 'gin',
    color: 'hsl(1, 70%, 50%)',
    data: [
      {
        color: 'hsl(240, 70%, 50%)',
        x: 'BQ',
        y: 22
      },
      {
        color: 'hsl(286, 70%, 50%)',
        x: 'GY',
        y: 58
      },
      {
        color: 'hsl(192, 70%, 50%)',
        x: 'MN',
        y: 32
      },
      {
        color: 'hsl(217, 70%, 50%)',
        x: 'AU',
        y: 52
      },
      {
        color: 'hsl(87, 70%, 50%)',
        x: 'KR',
        y: 9
      },
      {
        color: 'hsl(129, 70%, 50%)',
        x: 'RS',
        y: 7
      },
      {
        color: 'hsl(274, 70%, 50%)',
        x: 'ZA',
        y: 19
      },
      {
        color: 'hsl(86, 70%, 50%)',
        x: 'LU',
        y: 29
      },
      {
        color: 'hsl(93, 70%, 50%)',
        x: 'BT',
        y: 7
      }
    ]
  },
  {
    id: 'vodka',
    color: 'hsl(44, 70%, 50%)',
    data: [
      {
        color: 'hsl(40, 70%, 50%)',
        x: 'BQ',
        y: 25
      },
      {
        color: 'hsl(34, 70%, 50%)',
        x: 'GY',
        y: 56
      },
      {
        color: 'hsl(271, 70%, 50%)',
        x: 'MN',
        y: 25
      },
      {
        color: 'hsl(294, 70%, 50%)',
        x: 'AU',
        y: 56
      },
      {
        color: 'hsl(304, 70%, 50%)',
        x: 'KR',
        y: 57
      },
      {
        color: 'hsl(60, 70%, 50%)',
        x: 'RS',
        y: 56
      },
      {
        color: 'hsl(41, 70%, 50%)',
        x: 'ZA',
        y: 1
      },
      {
        color: 'hsl(271, 70%, 50%)',
        x: 'LU',
        y: 9
      },
      {
        color: 'hsl(75, 70%, 50%)',
        x: 'BT',
        y: 3
      }
    ]
  },
  {
    id: 'cognac',
    color: 'hsl(85, 70%, 50%)',
    data: [
      {
        color: 'hsl(257, 70%, 50%)',
        x: 'BQ',
        y: 55
      },
      {
        color: 'hsl(328, 70%, 50%)',
        x: 'GY',
        y: 43
      },
      {
        color: 'hsl(20, 70%, 50%)',
        x: 'MN',
        y: 22
      },
      {
        color: 'hsl(185, 70%, 50%)',
        x: 'AU',
        y: 54
      },
      {
        color: 'hsl(297, 70%, 50%)',
        x: 'KR',
        y: 32
      },
      {
        color: 'hsl(196, 70%, 50%)',
        x: 'RS',
        y: 15
      },
      {
        color: 'hsl(222, 70%, 50%)',
        x: 'ZA',
        y: 50
      },
      {
        color: 'hsl(346, 70%, 50%)',
        x: 'LU',
        y: 48
      },
      {
        color: 'hsl(253, 70%, 50%)',
        x: 'BT',
        y: 24
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
