import { useRef } from 'react';
import { createContainer } from 'unstated-next';

const useStore = (initialState: any) => {
  const chartRef = useRef(null);
  const initChart = (ref: HTMLDivElement) => {
    chartRef.current = ref;
    console.log(chartRef)
  };

  const initAssistLine = () => {};

  return {
    api: { initChart },
    assistLine: {
      startPoint: { x: 0, y: 0 },
      endPoint: { x: 0, y: chartRef.current?.clientHeight },
      points: [],
      ref: chartRef,
    },
  };
};
export const Store = createContainer(useStore);
