import { EventParameter } from '../constant';
import { drawStageShapes, initStage } from './api';

interface IOption {
  container: HTMLElement;
}
export class Stage {
  canvasElement: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  constructor() {
    this.canvasElement = null;
    this.ctx = null;
  }
  // 初始化 canvas
  mount(option: IOption) {
    const { container } = option;

    const stage = initStage(container);
    this.ctx = stage?.ctx as CanvasRenderingContext2D;
    this.canvasElement = stage.canvasElement;
    // 绘制 canvas 内部数据
    this.renderStage();
    // 添加事件监听
    // this.addStageEventListener();
  }
  renderStage() {
    requestAnimationFrame(() => {
      drawStageShapes(this);
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
    // // 拖拽
    // this.canvasElement.addEventListener('mousedown', (evt) => {
    //   const eventParameter: EventParameter = {
    //     target: 'Circle',
    //     x: evt.offsetX,
    //     y: evt.offsetY,
    //     nativeEvent: evt,
    //   };
    //   console.log(eventParameter, 'mousedown eventParameter');
    // });
  }
}
