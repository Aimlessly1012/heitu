import { Canvas } from './canvas';
import Container from './container';

interface IOption {
  container: HTMLElement;
  width: number;
  height: number;
  backgroundColor?: string;
}

class Stage extends Container {
  content: HTMLElement | null;
  canvas: Canvas | null;
  width: number;
  height: number;
  isFirstRender: boolean;
  constructor() {
    super();
    this.content = null;
    this.canvas = null;
    this.width = 100;
    this.height = 500;
    this.isFirstRender = true;
  }
  // 构建画布 layout
  buildContentDOM(config: IOption) {
    // 检查 config.container 是否是 HTMLElement
    if (!(config.container instanceof HTMLElement)) {
      throw new Error('The provided variable is not an HTMLElement.');
    }
    const width = config.width ? `${config.width}px` : `${this.width}%`;
    const height = config.height ? `${config.height}px` : `${this.height}px`;
    this.content = config.container;
    this.content.style.position = 'relative';
    this.content.id = 'Heitu-Stage';
    this.content.className = 'heituStage';
    this.content.style.width = width;
    this.content.style.height = height;

    this.canvas = new Canvas();
    this.setContainer(
      this.content.offsetWidth,
      this.content.offsetHeight,
      config.backgroundColor,
    );
  }
  // 将画布添加到 DOM 中
  setContainer(width: number, height: number, backgroundColor?: string) {
    if (this.content && this.canvas) {
      this.canvas.getCanvasDom(width, height, backgroundColor);
      this.content.appendChild(this.canvas.canvas);
    }
  }
  // 销毁画布
  destroy() {}
  // 监听窗口大小变化
  _resizeDOM() {
    if (this.content && this.canvas) {
      this.canvas.setSize(this.content.offsetWidth, this.content.offsetHeight);
      if (this.canvas?.context) this.batchDraw(this.canvas?.context);
    }
  }
}
export default Stage;
