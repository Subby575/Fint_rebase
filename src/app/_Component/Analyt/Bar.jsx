import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Modules Completed',
    },
  ],
  width: 500,
  height: 300,
};
const dataset = [
  {
    london: 3,
    paris: 3,
    newYork: 6,
    seoul: 1,
    month: 'Sun',
  },
  {
    london: 0,
    paris: 2,
    newYork: 3,
    seoul: 3,
    month: 'Mon',
  },
  {
    london: 3,
    paris: 3,
    newYork: 6,
    seoul: 4,
    month: 'Tues',
  },
  {
    london: 5,
    paris: 5,
    newYork: 3,
    seoul: 3,
    month: 'Wed',
  },
  {
    london: 5,
    paris: 6,
    newYork: 3,
    seoul: 3,
    month: 'Thurs',
  },
  {
    london: 6,
    paris: 3,
    newYork: 3,
    seoul: 4,
    month: 'Fri',
  },
  {
    london: 5,
    paris: 6,
    newYork: 5,
    seoul: 1,
    month: 'Sat',
  },

];

const valueFormatter = (value) => `${value}`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Modules completed', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}