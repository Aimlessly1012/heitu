// 任务批处理

export const tasks: { cb: () => void }[] = []; // 马上立即执行
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const timer = [];

export const workLoop = () => {
  let job;
  while ((job = tasks.shift())) {
    job.cb();
  }
};

let schedulerCount = true;

export const schedulerTask = (cb: () => void) => {
  const task = { cb };
  tasks.push(task);

  if (schedulerCount) {
    window.queueMicrotask(workLoop);
  }

  schedulerCount = false;
};

export const resetSchedulerCount = () => {
  schedulerCount = true;
};
