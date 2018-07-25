import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ChartContainer } from 'components/styledComponents';

const Chart = ({ data }) => (
  <ChartContainer>
    <ResponsiveLine
      data={data}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
      }}
      minY="auto"
      stacked
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country code',
        legendOffset: 36,
        legendPosition: 'center'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'center'
      }}
      dotSize={10}
      dotColor="inherit:darker(0.3)"
      dotBorderWidth={2}
      dotBorderColor="#ffffff"
      enableDotLabel
      dotLabel="y"
      dotLabelYOffset={-12}
      animate
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 12,
          symbolShape: 'circle'
        }
      ]}
    />
  </ChartContainer>
);

export default Chart;
