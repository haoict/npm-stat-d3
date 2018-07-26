import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import { GraphContainer } from 'components/styledComponents';
import { compose, pure, setPropTypes } from 'recompose';
import { isEmpty } from 'lodash';
import { noRender } from 'utils';
import PackageButtonList from './buttonList';

const Graph = ({ data, packages, removePackage }) => (
  <Fragment>
    <PackageButtonList packages={packages} removePackage={removePackage} />
    <GraphContainer>
      <ResponsiveLine
        data={data}
        margin={{
          top: 50,
          right: 200,
          bottom: 50,
          left: 100
        }}
        minY="auto"
        stacked
        axisBottom={{
          orient: 'bottom',
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Package name',
          legendOffset: 40,
          legendPosition: 'center'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Downloads',
          legendOffset: -80,
          legendPosition: 'center'
        }}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: 'square'
          }
        ]}
      />
    </GraphContainer>
  </Fragment>
);

export default compose(
  setPropTypes({
    data: PropTypes.array
  }),
  noRender(({ data }) => isEmpty(data)),
  pure
)(Graph);
