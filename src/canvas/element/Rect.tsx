import { useContext, useLayoutEffect, useRef } from 'react';
import { Rect as _Rect } from '../instance/rect';
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

const Rect = (props: RectProps) => {
  const mergeProps = { ...defaultProps, ...props };
  const parent = useContext(Context);
  const rect = new _Rect(mergeProps);
  const rectRef = useRef(rect);


  usePropertyChange(mergeProps, 'width', rectRef.current);
  usePropertyChange(mergeProps, 'height', rectRef.current);
  usePropertyChange(mergeProps, 'x', rectRef.current);
  usePropertyChange(mergeProps, 'y', rectRef.current);
  usePropertyChange(mergeProps, 'fillColor', rectRef.current);

  useLayoutEffect(() => {
    parent.appendChild(rectRef.current);

    return () => {
      // rectRef.current.remove();
    };
  }, []);
  return null;
};

export default Rect;
