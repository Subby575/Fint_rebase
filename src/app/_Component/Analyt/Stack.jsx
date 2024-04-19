"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Fixed Deposit',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Savings',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Liquid Funds',
};
const seriesD = {
  data: [3, 2, 4, 5, 1],
  label: 'Mutual Funds',
};
const seriesE = {
  data: [3, 2, 4, 5, 1],
  label: 'Stock Market',
};
export default function BasicStacking() {
  return (
    <BarChart
      width={600}
      height={300}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
        { ...seriesD, stack: 'total' },
        { ...seriesE, stack: 'total' },
      ]}
    />
  );
}
