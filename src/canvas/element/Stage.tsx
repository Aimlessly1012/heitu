import React, { CSSProperties, useLayoutEffect, useRef } from 'react';
import { Stage as _Stage } from '../instance/stage';
import { Context } from '../store';

interface StageProps extends CSSProperties {
  children?: any;
  width?: number | string;
  height?: number;
  border?: string;
  background?: string;
  margin?: string | number;
}

const defaultProps: StageProps = {
  width: '100%',
  height: 400,
  background: '#fff',
  margin: '0 auto',
};

const Stage = (props: StageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<_Stage>(new _Stage());
  const mergeProps = { ...defaultProps, ...props };
  useLayoutEffect(() => {
    stageRef.current.mount({
      container: containerRef.current as HTMLDivElement,
    });
  }, []);
  return (
    <Context.Provider value={stageRef.current}>
      <div ref={containerRef} style={mergeProps}></div>
      {props.children}
    </Context.Provider>
  );
};

export default Stage;
