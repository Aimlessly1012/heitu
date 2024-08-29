import { useLayoutEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { Store } from '../store';

export interface IText {
  x?: number;
  y?: number;
  content?: string;
  fillStyle?: string;
  fontSize?: number;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}
const defaultTextdata = {
  fillStyle: '#333',
  fontSize: 14,
  textAlign: 'left' as CanvasTextAlign,
  textBaseline: 'top' as CanvasTextBaseline,
};

const Text = (props: IText) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const ref = useRef<string>(v4());

  useLayoutEffect(() => {
    appendChild('Text', { ...defaultTextdata, ...props }, ref.current);
  }, [props]);

  return null;
};

export default Text;
