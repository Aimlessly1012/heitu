let animQueue: Array<() => void> = [];

const req =
  (typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame) ||
  function (f) {
    setTimeout(f, 60);
  };
export const createCanvasElement = () => {
  let canvas = document.createElement('canvas');
  // on some environments canvas.style is readonly
  try {
    (<any>canvas).style = canvas.style || {};
  } catch (e) {}
  return canvas;
};

export const requestAnimFrame = (callback: () => void) => {
  animQueue.push(callback);
  if (animQueue.length === 1) {
    req(function () {
      const queue = animQueue;
      animQueue = [];
      queue.forEach(function (cb) {
        cb();
      });
    });
  }
};
