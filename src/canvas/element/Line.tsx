import { useContext, useLayoutEffect, useRef } from 'react';
import { Line as _Line } from '../instance/line';
import { Context } from '../store';
import { usePropertyChange } from '../utils/hooks/usePropertyChange';
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
  if (props.start) {
    mergeProps.points = [
      props?.start?.x || 0,
      props?.start?.y || 0,
      props?.end?.x || 0,
      props?.end?.y || 0,
    ];
  }
  const line = new _Line(mergeProps);
  const lineRef = useRef(line);

  usePropertyChange(mergeProps, 'points', lineRef.current);
  usePropertyChange(mergeProps, 'start', lineRef.current);
  usePropertyChange(mergeProps, 'end', lineRef.current);
  usePropertyChange(mergeProps, 'lineWidth', lineRef.current);
  usePropertyChange(mergeProps, 'strokeStyle', lineRef.current);


  useLayoutEffect(() => {
    parent.appendChild(lineRef.current);

    return () => {
      // rectRef.current.remove();
    };
  }, []);
  return null;
};

export default Line;
