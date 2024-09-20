export type AnimateCartoonConfig = {
  duration?: number; // 毫秒
  delay?: number;
  during?: (percent: number, newState: Record<string, string | number>) => void;
  done?: Function;
  aborted?: Function;
  scope?: string;
  force?: boolean;
  additive?: boolean;
  setToFinal?: boolean;
  easing?: Easing;
  iterationCount?: number; // Infinity
};
abstract class Animate {
  rafTimer: number | null = null;
  // 开始
  start() {}
  // 检查边缘
  checkEdge() {}
  // 更新
  onUpdate(currentProp, elapsedTimeRatio: number) {}
  // 停止
  stop() {
    cancelAnimationFrame(this.rafTimer);
  }
}
export default Animate;
