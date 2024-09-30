import { Stage } from 'heitu/canvas';
import { IOption } from 'heitu/canvas/core/stage';

interface IChartOption extends IOption {
  autoFit: boolean;
}
class Charts {
  stage: Stage | null;
  ctx: HTMLElement | null;
  autoFit: boolean;
  resizeObserver: ResizeObserver | null = null;
  constructor(options: IChartOption) {
    this.stage = new Stage();
    this.ctx = options.container;
    this.autoFit = options.autoFit;
  }
  contentEvents() {
    this.resizeObserver = new ResizeObserver(() => {
      if (this.stage) this.stage._resizeDOM();
    });
    // 开始监听
    if (this.ctx) {
      this.resizeObserver.observe(this.ctx);
    }
  }
  data() {}
  encode() {}
  render() {
    if (this.stage && this.ctx) {
      this.stage.buildContentDOM({
        container: this.ctx,
        backgroundColor: '#fff',
      });
      if (this.autoFit) {
        this.contentEvents();
      }
    }
  }
  destroy() {
    if (this.ctx && this.resizeObserver) {
      this.resizeObserver.unobserve(this.ctx);
    }
  }
}
export default Charts;
