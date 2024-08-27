import { useContext, useLayoutEffect, useRef } from 'react';
import { Line as _Line } from '../instance/line';
import { Context } from '../store';
// import { usePropertyChange } from '../utils/hooks/usePropertyChange';

const defaultProps: LineProps = {
  // @ts-ignore
  points: [10, 10, 100, 100],
  strokeStyle: 'black',
  start: { x: 0, y: 0 },
  end: { x: 100, y: 100 },
};

export type LineProps = _Line['data'] & {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

const Line = (props: LineProps) => {
  const mergeProps = { ...defaultProps, ...props };
  const parent = useContext(Context);
  const line = new _Line(mergeProps);
  const lineRef = useRef(line);


  // usePropertyChange(mergeProps, 'width', rectRef.current);
  // usePropertyChange(mergeProps, 'height', rectRef.current);
  // usePropertyChange(mergeProps, 'x', rectRef.current);
  // usePropertyChange(mergeProps, 'y', rectRef.current);
  // usePropertyChange(mergeProps, 'fillStyle', rectRef.current);

  useLayoutEffect(() => {
    parent.appendChild(lineRef.current);

    return () => {
      // rectRef.current.remove();
    };
  }, []);
  return null;
};

export default Line;
