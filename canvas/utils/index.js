export var sortChildren = function sortChildren(children) {
  return children.toSorted(function (a, b) {
    var a_zIndex = a.data.zIndex;
    var b_zIndex = b.data.zIndex;
    return a_zIndex - b_zIndex;
  });
};