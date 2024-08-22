// 使用 Path2D 创建 rect 路径
export const createRectPath2D = (data: any) => {
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
  console.log(path2D, 'path2D');
  return path2D;
};
// 设置 rect 路径 到 elementItem
export const setRectPath2D = (elementItem: any) => {
  elementItem.path2D = createRectPath2D(elementItem.data);
};
