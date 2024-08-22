// 任务批处理

export var tasks = []; // 马上立即执行
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var timer = [];
export var workLoop = function workLoop() {
  var job;
  while (job = tasks.shift()) {
    job.cb();
  }
};
var schedulerCount = true;
export var schedulerTask = function schedulerTask(cb) {
  var task = {
    cb: cb
  };
  tasks.push(task);
  if (schedulerCount) {
    window.queueMicrotask(workLoop);
  }
  schedulerCount = false;
};
export var resetSchedulerCount = function resetSchedulerCount() {
  schedulerCount = true;
};