// 使用 Path2D 创建 rect 路径
export var createRectPath2D = function createRectPath2D(data) {
  var x = data.x,
    y = data.y,
    width = data.width,
    height = data.height,
    _data$cornerRadius = data.cornerRadius,
    cornerRadius = _data$cornerRadius === void 0 ? 0 : _data$cornerRadius;
  var path2D = new Path2D();
  path2D.moveTo(x + cornerRadius, y);
  path2D.lineTo(x + width - cornerRadius, y);
  path2D.arc(x + width - cornerRadius, y + cornerRadius, cornerRadius, Math.PI / 2 * 3, 0);
  path2D.lineTo(x + width, y + height - cornerRadius);
  path2D.arc(x + width - cornerRadius, y + height - cornerRadius, cornerRadius, 0, Math.PI / 2);
  path2D.lineTo(x + cornerRadius, y + height);
  path2D.arc(x + cornerRadius, y + height - cornerRadius, cornerRadius, Math.PI / 2, Math.PI);
  path2D.lineTo(x, y + cornerRadius);
  path2D.arc(x + cornerRadius, y + cornerRadius, cornerRadius, Math.PI, Math.PI / 2 * 3);
  path2D.closePath();
  console.log(path2D, 'path2D');
  return path2D;
};
// 设置 rect 路径 到 elementItem
export var setRectPath2D = function setRectPath2D(elementItem) {
  elementItem.path2D = createRectPath2D(elementItem.data);
};