import { useContext, useLayoutEffect, useRef } from 'react';
import { Trapezoid as _Trapezoid } from '../instance/trapezoid';
import { Context } from '../store';
import { usePropertyChange } from '../utils/hooks/usePropertyChange';

export interface RectProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  fillStyle?: string;
  cornerRadius?: number;
}
const defaultProps: RectProps = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fillStyle: 'black',
};

const Trapezoid = (props: RectProps) => {
  const mergeProps = { ...defaultProps, ...props };
  const parent = useContext(Context);
  const trapezoid = new _Trapezoid(mergeProps);
  const trapezoidRef = useRef(trapezoid);
  console.log(mergeProps.fillStyle);

  usePropertyChange(mergeProps, 'width', trapezoidRef.current);
  usePropertyChange(mergeProps, 'height', trapezoidRef.current);
  usePropertyChange(mergeProps, 'x', trapezoidRef.current);
  usePropertyChange(mergeProps, 'y', trapezoidRef.current);
  usePropertyChange(mergeProps, 'fillStyle', trapezoidRef.current);
  usePropertyChange(mergeProps, 'shortLength', trapezoidRef.current);

  useLayoutEffect(() => {
    parent.appendChild(trapezoidRef.current);

    return () => {
      // trapezoidRef.current.remove();
    };
  }, []);
  return null;
};

export default Trapezoid;
