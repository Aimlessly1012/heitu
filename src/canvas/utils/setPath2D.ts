import { Rect, Trapezoid } from '../../shape';

export function setTrapezoidPath2D(elementItem: Trapezoid) {
  const { x, y, width, height, shortLength } = elementItem.data;

  const path2D = new Path2D();

  let _shortLength: number;

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

export function createRectPath2D(data) {
  const { x, y, width, height, cornerRadius = 0 } = data;

  const path2D = new Path2D();
  path2D.moveTo(x + cornerRadius, y);
  path2D.lineTo(x + width - cornerRadius, y);
  path2D.arc(
    x + width - cornerRadius,
    y + cornerRadius,
    cornerRadius,
    (Math.PI / 2) * 3,
    0,
  );
  path2D.lineTo(x + width, y + height - cornerRadius);
  path2D.arc(
    x + width - cornerRadius,
    y + height - cornerRadius,
    cornerRadius,
    0,
    Math.PI / 2,
  );
  path2D.lineTo(x + cornerRadius, y + height);
  path2D.arc(
    x + cornerRadius,
    y + height - cornerRadius,
    cornerRadius,
    Math.PI / 2,
    Math.PI,
  );
  path2D.lineTo(x, y + cornerRadius);
  path2D.arc(
    x + cornerRadius,
    y + cornerRadius,
    cornerRadius,
    Math.PI,
    (Math.PI / 2) * 3,
  );
  path2D.closePath();

  return path2D;
}

export function setRectPath2D(elementItem: Rect) {
  elementItem.path2D = createRectPath2D(elementItem.data);
}
