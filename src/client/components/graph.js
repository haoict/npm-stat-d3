import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import { compose, pure, setPropTypes, withHandlers } from 'recompose';
import { GraphContainer } from 'components/styledComponents';
import { isEmpty } from 'lodash';
import { noRender, removePackage } from 'utils';
import { colors, fontSizes } from 'configs/styles';
import PackageButtonList from './buttonList';

export const Graph = ({ data, packages, cleanPackage }) => (
  <Fragment>
    <PackageButtonList packages={packages} removePackage={cleanPackage} />
    <GraphContainer>
      <ResponsiveLine
        theme={{
          axis: {
            textColor: colors.lime,
            fontSize: fontSizes.size7,
            tickColor: colors.red
          },
          grid: {
            stroke: colors.gray,
            strokeWidth: 0.5
          }
        }}
        data={data}
        colorBy={d => d.color}
        margin={{
          top: 50,
          right: 25,
          bottom: 50,
          left: 100
        }}
        minY="auto"
        stacked={false}
        axisBottom={{
          orient: 'bottom',
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Date',
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
        dotSize={8}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor={colors.white}
        animate
        motionStiffness={90}
        motionDamping={15}
      />
    </GraphContainer>
  </Fragment>
);

export default compose(
  setPropTypes({
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  noRender(({ data }) => isEmpty(data)),
  withHandlers({
    cleanPackage: ({ packages, history, updatePackages }) => npmPackage => () => {
      const newPackages = removePackage(packages, npmPackage);
      history.push(`/${newPackages.join('-vs-')}`);
      updatePackages(newPackages);
    }
  }),
  pure
)(Graph);
