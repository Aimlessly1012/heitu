import React, { useLayoutEffect, useRef } from 'react';
import Charts from './chartBase/chart';

const LineChart = ({ options }) => {
  const container = useRef<HTMLElement | null>(null);
  const chartRef = useRef<Charts>(null);
  chartRef.current = new Charts({
    container: container.current,
    autoFit: true,
  });
  // chartRef.current.data(data).encode('x', 'month').encode('y', 'temperature');

  useLayoutEffect(() => {
    chartRef.current = new Charts({
      container: container.current,
      autoFit: true,
    });
    chartRef.current?.render();
    return () => chartRef.current?.destroy();
  }, []);
  return <div ref={container as React.RefObject<HTMLDivElement>}></div>;
};

export default LineChart;
