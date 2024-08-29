import React, { useLayoutEffect, useRef } from 'react';
import { StageProps } from '.';
import { Store } from '../../store';

// import { Stage as _Stage } from '../instance/stage';
// import { Store } from '../store';

const defaultProps: StageProps = {
  width: '100%',
  height: 400,
  background: '#fff',
  margin: '0 auto',
};

const Stage = (props: StageProps) => {
  const store = Store.useContainer();
  const canvasRef = useRef<HTMLDivElement>(null);
  const mergeProps = { ...defaultProps, ...props };
  const {
    stage: { canvaseCtx, stageElement, initStage },
  } = store;
  useLayoutEffect(() => {
    if (canvasRef.current) initStage(canvasRef.current);
  }, []);
  return <div ref={canvasRef} style={mergeProps} />;
};

export default Stage;
