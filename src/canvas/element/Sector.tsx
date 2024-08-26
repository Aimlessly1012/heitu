import { useContext, useLayoutEffect, useRef } from 'react';
import { Circle as _Circle } from '../instance/circle';
import { Context } from '../store';
import { usePropertyChange } from '../utils/hooks/usePropertyChange';
// import { usePropertyChange } from '../utils/hooks/usePropertyChange';

const defaultProps: _Circle['data'] = {
  x: 10,
  y: 10,
  radius: 8,
  fillStyle: 'black',
  startAngle: 30,
  endAngle: 90,
};

const Sector = (props: any) => {
  const mergeProps = { ...defaultProps, ...props };
  const parent = useContext(Context);
  console.log(mergeProps, 'mergeProps');
  const circle = new _Circle(mergeProps);
  const circleRef = useRef(circle);

  usePropertyChange(mergeProps, 'radius', circleRef.current);
  usePropertyChange(mergeProps, 'x', circleRef.current);
  usePropertyChange(mergeProps, 'y', circleRef.current);
  usePropertyChange(mergeProps, 'fillStyle', circleRef.current);
  usePropertyChange(mergeProps, 'startAngle', circleRef.current);
  usePropertyChange(mergeProps, 'endAngle', circleRef.current);

  useLayoutEffect(() => {
    parent.appendChild(circleRef.current);

    return () => {
      // rectRef.current.remove();
    };
  }, []);
  return null;
};

export default Sector;
