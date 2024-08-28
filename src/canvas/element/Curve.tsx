import { useContext, useLayoutEffect, useRef } from 'react';
import { Line as _Line } from '../instance/line';
import { Context } from '../store';
import { LineProps } from './Line';
import { usePropertyChange } from '../utils/hooks/usePropertyChange';

const Curve = (props: LineProps) => {
  const mergeProps = { ...props, smooth: true };
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

export default Curve;
