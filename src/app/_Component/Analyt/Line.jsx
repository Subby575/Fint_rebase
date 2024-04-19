"use client"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5,6,7] }]}
      series={[
        {
          data: [5, 3, 8, 2, 9, 5,6],
        },
      ]}
      width={500}
      height={300}
    />
  );
}