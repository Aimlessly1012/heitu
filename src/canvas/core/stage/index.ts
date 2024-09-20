import { isStage } from 'heitu/canvas/utils';
import { Vector2d } from '../type';
import { Canvas } from './canvas';
import Container from './container';

interface IOption {
  container: HTMLElement;
  width: number;
  height: number;
  backgroundColor?: string;
}
const MOUSEENTER = 'mouseenter',
  MOUSELEAVE = 'mouseleave',
  MOUSEOUT = 'mouseout',
  MOUSEOVER = 'mouseover',
  MOUSEDOWN = 'mousedown',
  MOUSEMOVE = 'mousemove',
  MOUSEUP = 'mouseup',
  CONTEXTMENU = 'contextmenu',
  CLICK = 'click',
  DBCLICK = 'dblclick',
  WHEEL = 'wheel',
  EVENTS = [
    [MOUSEENTER, '_mouseenter'],
    [MOUSEDOWN, '_mousedown'],
    [MOUSEMOVE, '_mousemove'],
    [MOUSELEAVE, '_mouseleave'],
    [MOUSEUP, '_mouseup'],
    [MOUSEOUT, '_mouseout'],
    [MOUSEOVER, '_mouseover'],
    [CONTEXTMENU, '_contextmenu'],
    [WHEEL, '_wheel'],
    [CLICK, '_click'],
    [DBCLICK, '_dblclick'],
  ];
class Stage extends Container {
  name = 'Stage';
  parent = null;
  content: HTMLElement | null;
  canvas: Canvas | null;
  width: number;
  height: number;
  draggable: boolean;
  isFirstRender: boolean;
  _pointerPositions: (Vector2d & { id?: number })[] = [];
  _changedPointerPositions: (Vector2d & { id: number })[] = [];
  pointerPos: Vector2d | null = null;
  constructor() {
    super();
    this.content = null;
    this.canvas = null;
    this.width = 100;
    this.height = 500;
    this.isFirstRender = true;
    this.draggable = false;
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
    this._bindContentEvents();
  }
  // 将画布添加到 DOM 中
  setContainer(width: number, height: number, backgroundColor?: string) {
    if (this.content && this.canvas) {
      this.canvas.getCanvasDom(width, height, backgroundColor);
      this.content.appendChild(this.canvas.canvas);
    }
  }
  // 销毁画布
  destroy() {
    this.content = null;
    this.canvas = null;
    this.pointerPos = null;
    this.width = 0;
    this.height = 0;
    this.draggable = false;
  }
  // 监听窗口大小变化
  _resizeDOM() {
    if (this.content && this.canvas) {
      this.canvas.setSize(this.content.offsetWidth, this.content.offsetHeight);
      if (this.canvas?.context) this.batchDraw(this);
    }
  }
  setPointersPositions(evt: MouseEvent) {
    if (!this.content || !this.content.getBoundingClientRect) {
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1,
      };
    }

    let rect = this.content.getBoundingClientRect();

    let contentPosition = {
        top: rect.top,
        left: rect.left,
        scaleX: rect.width / this.content.clientWidth || 1,
        scaleY: rect.height / this.content.clientHeight || 1,
      },
      x: number | null = null,
      y: number | null = null;
    // mouse events
    x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
    y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
    this.pointerPos = {
      x: x,
      y: y,
    };
  }
  // 绑定监听
  _bindContentEvents() {
    if (!this?.content?.addEventListener) return;
    EVENTS.forEach(([event, methodName]) => {
      this.content?.addEventListener(
        event,
        (evt) => {
          // @ts-ignore
          this[methodName](evt);
        },
        { passive: false },
      );
    });
  }
  // 鼠标进入
  _mouseenter(evt: MouseEvent) {
    if (!isStage(this)) return;
    this.setPointersPositions(evt);
    this.fire('mouseenter', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 鼠标离开
  _mouseleave(evt: MouseEvent) {
    if (!isStage(this)) return;
    this.setPointersPositions(evt);
    this.fire('mouseleave', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 鼠标进入（事件冒泡）
  _mouseout(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('mouseup', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 鼠标离开（事件冒泡）
  _mouseover(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('mouseup', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 当用户按下鼠标按钮时触发。
  _mousedown(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('mousedown', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 当鼠标在元素上移动时触发。
  _mousemove(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('mousemove', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  // 当用户松开鼠标按钮时触发。
  _mouseup(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('mouseup', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }

  // 当用户右键点击时触发
  _contextmenu(evt: MouseEvent) {
    evt.preventDefault();
    this.setPointersPositions(evt);
    this.fire('contextmenu', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  _wheel(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('wheel', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  _click(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('click', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
  _dblclick(evt: MouseEvent) {
    this.setPointersPositions(evt);
    this.fire('dblclick', {
      evt: evt,
      target: this,
      currentTarget: this,
    });
  }
}
export default Stage;
