import { LineChart } from 'heitu';
import React from 'react';

const Index = () => {
  const chartData = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 1001],
      },
      {
        data: [620, 932, 901, 934, 800, 100],
      },
    ],
  };
  return (
    <LineChart
      option={chartData}
      containerStyle={{ border: '1px solid #eee' }}
    />
  );
};

export default Index;
