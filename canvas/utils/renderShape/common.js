function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
export var hasStroke = function hasStroke(lineWidth, strokeStyle) {
  return lineWidth > 0 && lineWidth !== Infinity && strokeStyle;
};
export var fillOrStroke = function fillOrStroke(ctx, elementItem) {
  if (elementItem.data.fillStyle) {
    ctx.fill(elementItem.path2D);
  }
  if (hasStroke(elementItem.data.lineWidth, elementItem.data.strokeStyle)) {
    ctx.stroke(elementItem.path2D);
  }
};
export function setCtxStyleProp(ctx, elementItem) {
  var data = elementItem.data;
  var lineWidth = data.lineWidth,
    lineCap = data.lineCap,
    lineJoin = data.lineJoin,
    strokeStyle = data.strokeStyle,
    fillStyle = data.fillStyle,
    opacity = data.opacity;
  var shadowBlur = data.shadowBlur,
    shadowColor = data.shadowColor,
    shadowOffsetX = data.shadowOffsetX,
    shadowOffsetY = data.shadowOffsetY;
  var transform = elementItem.transform,
    scale = elementItem.scale,
    translate = elementItem.translate;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;
  ctx.lineJoin = lineJoin;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;

  // ctx.setLineDash(lineDash);

  ctx.globalAlpha = opacity;
  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;
  if (transform) {
    ctx.setTransform.apply(ctx, _toConsumableArray(transform));
  }
  if (scale) {
    ctx.scale(scale.x, scale.y);
  }
  if (translate) {
    ctx.translate(translate.x, translate.y);
  }
}