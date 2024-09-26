import { calcTargetValue, easingFuncs } from 'heitu/canvas/utils';

export type AnimateCartoonConfig = {
  duration: number; // 毫秒
  delay?: number;
  during?: (percent: number, newState: Record<string, string | number>) => void;
  done?: () => void;
  aborted?: () => void;
  scope?: string;
  force?: boolean;
  additive?: boolean;
  setToFinal?: boolean;
  easing?: any;
  iterationCount?: number; // Infinity
};
const defaultCfg: AnimateCartoonConfig = {
  duration: 1000,
  easing: 'linear',
  iterationCount: 1,
};

class Animate {
  rafTimer: number | null = null;
  startTime: number | null = null;
  startProp;
  targetProp: Record<string, any>;
  cfg: AnimateCartoonConfig;
  constructor(
    startProp: Record<string, any> = {},
    targetProp: Record<string, any> = {},
    cfg: Partial<AnimateCartoonConfig> = {},
  ) {
    this.startProp = startProp;
    this.targetProp = targetProp;

    this.cfg = { ...defaultCfg, ...cfg } as AnimateCartoonConfig;
  }
  forward = true; // 正向动画
  queue: any = [];
  // 开始
  start() {
    const { duration, easing, during, iterationCount } = this.cfg;
    const keys = Object.keys(this.targetProp);

    const rafCb = (timestamp: number) => {
      if (!this.startTime) {
        this.startTime = timestamp;
      }
      let elapsedTimeRatio = easingFuncs[easing as keyof typeof easingFuncs](
        Math.min((timestamp - this.startTime) / duration, 1),
      );
      if (this.forward === false) {
        elapsedTimeRatio = 1 - elapsedTimeRatio;
      }
      const currentProp = {};
      keys.forEach((propKey) => {
        const targetValue = calcTargetValue(
          this.startProp[propKey as keyof typeof this.startProp],
          this.targetProp[propKey as keyof typeof this.targetProp],
          elapsedTimeRatio,
        );
        (currentProp as Record<string, any>)[propKey] = targetValue;
      });
      if (during) {
        during(elapsedTimeRatio, currentProp);
      }
      const nextCondition = this.forward
        ? elapsedTimeRatio < 1
        : 0 < elapsedTimeRatio;
      if (nextCondition) {
        this.rafTimer = requestAnimationFrame(rafCb);
      } else {
        this.queue = [];
        this.stop();
      }

      if (this.queue.length > 0) {
        this.queue.forEach((item: any) => {
          item(currentProp, elapsedTimeRatio);
        });
      }

      const endCondition = this.forward
        ? elapsedTimeRatio === 1
        : elapsedTimeRatio === 0;

      if (endCondition) {
        if (iterationCount === Infinity) {
          this.forward = !this.forward;
          this.startTime = null;
          this.start();
        }
      }
    };
    this.rafTimer = requestAnimationFrame(rafCb);
  }
  // 检查边缘
  checkEdge() {}
  // 更新
  // @ts-ignore
  // onUpdate(currentProp, elapsedTimeRatio: number) {}
  // 停止
  stop() {
    if (this.rafTimer) cancelAnimationFrame(this.rafTimer);
  }
  pushQueue(callback: any) {
    this.queue.push(callback);
  }
}
export default Animate;
