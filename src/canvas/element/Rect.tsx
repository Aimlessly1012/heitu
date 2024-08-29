import { v4 } from 'uuid';
import { Store } from '../store';

export interface IRect {
  // id?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
}
const defaultRectdata = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fillStyle: 'black',
  cornerRadius: 0,
  lineWidth: 1,
};

const Rect = (props: IRect) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const currentRectId = v4();
  appendChild('Rect', { ...defaultRectdata, ...props }, currentRectId);

  return null;
};

export default Rect;
