import { Trapezoid } from 'heitu/canvas/instance/trapezoid';

export function setTrapezoidPath2D(elementItem: Trapezoid) {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    shortLength = 0,
  } = elementItem.data;

  const path2D = new Path2D();

  let _shortLength: number = 0;

  if (typeof shortLength === 'number') {
    _shortLength = shortLength;
  } else if (typeof shortLength === 'string') {
    _shortLength = (parseFloat(shortLength) / 100) * width;
  }

  path2D.moveTo(x + (width / 2 - _shortLength / 2), y);
  path2D.lineTo(x + (width / 2 - _shortLength / 2) + _shortLength, y);
  path2D.lineTo(x + width, y + height);
  path2D.lineTo(x, y + height);

  path2D.closePath();

  elementItem.path2D = path2D;
}
