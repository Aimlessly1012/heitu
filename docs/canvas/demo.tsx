import { useResizeObserver } from 'heitu-hook';
import React, { useLayoutEffect, useRef } from 'react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(null);
  useLayoutEffect(() => {
    // stageRef.current.mount(
    //   { container: containerRef.current as HTMLDivElement },
    //   true,
    // );
  }, []);

  // useResizeObserver(containerRef, () => stageRef.current.refreshDraw());
  return <div>123</div>;
};

export default Index;
