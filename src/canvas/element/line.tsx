import { useLayoutEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { Store } from '../store';
import { CommonShape } from '../type';

export interface ILine extends CommonShape {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  points?: number[];
  smooth?: boolean;
  strokeStyle?: string;
  lineWidth?: number;
  lineCap?: 'butt' | 'round' | 'square';
  lineJoin?: 'miter' | 'round' | 'miter';
  // percent?: number; // 0 - 1
  // closed?: boolean;
}
const defaultLinedata = {
  start: { x: 10, y: 10 },
  end: { x: 100, y: 100 },
  points: [],
  strokeStyle: 'black',
  lineWidth: 1,
  lineCap: 'butt',
  lineJoin: 'miter',
  // percent: 1,
};

const Line = (props: ILine) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const ref = useRef<string>(v4());

  useLayoutEffect(() => {
    appendChild(
      'Line',
      {
        ...defaultLinedata,
        ...props,
      },
      ref.current,
    );
  }, [props]);

  return null;
};

export default Line;
