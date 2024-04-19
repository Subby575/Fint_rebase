"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Savings' },
            { id: 1, value: 35, label: 'Liquid Funds' },
            { id: 2, value: 20, label: 'Mutual Funds' },
            { id: 3, value: 20, label: 'Stock Market' },
            { id: 4, value: 20, label: 'Fixed Deposit' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
