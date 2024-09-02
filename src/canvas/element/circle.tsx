import { useLayoutEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { Store } from '../store';
import { CommonShape } from '../type';

export interface ICircle extends CommonShape {
  x?: number;
  y?: number;
  radius?: number;
  lineWidth?: number;
  fillStyle?: string;
  strokeStyle?: string;
  arc?: boolean;
  startAngle?: number; // 圆弧 饼图 角度 60 180 360
  endAngle?: number; // 圆弧 饼图
  innerRadius?: number;
  border: 0 | 1 | 2;
}
const defaultCircledata = {
  x: 10,
  y: 10,
  radius: 8,
  fillStyle: 'black',
  strokeStyle: '',
  lineWidth: 1,
  startAngle: 0,
  endAngle: 360,
  border: 0,
  innerRadius: 0,
};

const Circle = (props: ICircle) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const ref = useRef<string>(v4());

  useLayoutEffect(() => {
    appendChild('Circle', { ...defaultCircledata, ...props }, ref.current);
  }, [props]);

  return null;
};

export default Circle;
