import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ChartContainer } from 'components/styledComponents';

const Chart = ({ data }) => (
  <ChartContainer>
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
        legendOffset: 50,
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
  </ChartContainer>
);

export default Chart;
