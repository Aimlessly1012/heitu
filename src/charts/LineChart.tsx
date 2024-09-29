import { Stage } from 'heitu/canvas';
import { useResizeObserver } from 'heitu/hooks';
import React, { useLayoutEffect, useRef } from 'react';
import Coordinate from './chartBase/coordinate';

const LineChart = () => {
  const lineData = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      boundaryGap: true,
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 1001],
      },
      {
        data: [300, 400, 100, 343, 343, 2341],
      },
      // {
      //   data: [320, 500, 200, 33, 3423, 241],
      // },
    ],
  };
  const container = useRef<HTMLElement | null>(null);
  const _stage = new Stage();
  const coordinate = new Coordinate(lineData);
  _stage.add(coordinate);
  useLayoutEffect(() => {
    if (container?.current) {
      _stage.buildContentDOM({
        container: container.current,
        backgroundColor: '#fff',
      });
    }
    return () => _stage.destroy();
  }, []);
  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container as React.RefObject<HTMLDivElement>}></div>;
};

export default LineChart;
