import { Stage } from 'heitu/canvas';
import AssistLine from 'heitu/charts/components/assistLine';
import { Store } from 'heitu/charts/store';
import React, { useLayoutEffect, useRef } from 'react';

const LineChart = () => {
  const store = Store.useContainer();
  const {
    api: { initChart },
  } = store;
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) initChart(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <Stage>
        <AssistLine />
      </Stage>
    </div>
  );
};

export default LineChart;
