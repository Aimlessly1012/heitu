import { useResizeObserver } from 'heitu/hooks';
import React, { useLayoutEffect, useRef } from 'react';
import { StageProps } from '.';
import { Store } from '../../store';

const defaultProps: StageProps = {
  width: '100%',
  height: 400,
  background: '#fff',
  margin: '0 auto',
};

const Stage = (props: StageProps) => {
  const store = Store.useContainer();
  const ref = useRef<HTMLDivElement>(null);
  const mergeProps = { ...defaultProps, ...props };
  const {
    stage: { initStage, refreshDraw },
  } = store;
  useLayoutEffect(() => {
    if (ref.current) initStage(ref.current);
  }, []);
  useResizeObserver(ref, () => refreshDraw());
  return (
    <>
      <div ref={ref} style={mergeProps} />
    </>
  );
};

export default Stage;
