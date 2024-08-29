import { useLayoutEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { Store } from '../store';

export interface ILine {
  // id?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
  fillStyle?: string;
  lineWidth?: number;
  strokeStyle?: string;
  border: 0 | 1 | 2;
  shortLength?: number;
}
const defaultLinedata = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fillStyle: 'black',
  strokeStyle: 'black',
  cornerRadius: 0,
  lineWidth: 1,
  border: 0,
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
        shortLength: props.shortLength ? props.shortLength : props.width,
      },
      ref.current,
    );
  }, [props]);

  return null;
};

export default Line;
