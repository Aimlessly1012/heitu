import { EventParameter } from '../constant';
import { drawStageShapes, initStage, mountStage } from './api/api';
import { resetSchedulerCount } from './api/scheduler';

interface IOption {
  container: HTMLElement;
}
export class Stage {
  canvasElement: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  // todo Ts
  children: any[] = [];
  private isAsyncRenderTask = false;

  constructor() {
    this.canvasElement = null;
    this.ctx = null;
  }
  // 初始化 canvas
  mount(option: IOption) {
    const { container } = option;

    const stage = initStage(container);
    // 画布的 context 用于绘制等
    this.ctx = stage?.ctx as CanvasRenderingContext2D;
    // 画布元素 用于操作 dom
    this.canvasElement = stage?.canvasElement;
    // 绘制 canvas 内部数据
    this.renderStage();
    // 添加事件监听
    // this.addStageEventListener();
  }
  // 添加子元素
  appendChild(...args: any[]) {
    const elements = args.flat(1);
    this.children = this.children.concat(elements);
    this.children = this.children.map((item) =>
      Object.assign(item, { parent: this }),
    );
    mountStage(this.children, this);
  }
  renderStage() {
    if (this.isAsyncRenderTask) {
      return;
    }

    this.isAsyncRenderTask = true;

    requestAnimationFrame(() => {
      resetSchedulerCount();

      drawStageShapes(this);

      this.isAsyncRenderTask = false;
    });
  }
  // canvas 添加时间监听
  private addStageEventListener() {
    if (!this.canvasElement) return;
    // 鼠标移动
    this.canvasElement.onmousemove = (evt) => {
      {
        // 触发舞台(canvas Element)的事件
        const eventParameter: EventParameter = {
          target: null,
          x: evt.offsetX,
          y: evt.offsetY,
          nativeEvent: evt,
        };
        console.log(eventParameter, 'onmousemove_eventParameter');
      }
    };
  }
}
