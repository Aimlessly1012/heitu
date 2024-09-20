import { isStage } from 'heitu/canvas/utils';
import Stage from '../stage';

export type ICoord = { x: number; y: number };
type NodeEventMap = GlobalEventHandlersEventMap & {
  [index: string]: any;
};

export type EventListener<This, EventType> = (
  this: This,
  ev: EventObject<EventType, This>,
) => void;

export interface EventObject<EventType, This = Node> {
  type: string;
  target: Stage;
  evt: EventType;
  pointerId: number;
  currentTarget: This;
  cancelBubble: boolean;
  child?: Node;
}

abstract class Node {
  eventListeners: {
    [index: string]: Array<{ name: string; handler: any }>;
  } = {};
  shapeEventListeners: {
    [index: string]: Array<{ name: string; handler: any }>;
  } = {};
  abstract parent?: Stage | null;
  on<K extends keyof NodeEventMap>(
    evtStr: K,
    handler: EventListener<this, NodeEventMap[K]>,
  ) {
    let events = (evtStr as string).split(' '),
      len = events.length,
      n,
      event,
      parts,
      baseEvent;

    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];

      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }

      this.eventListeners[baseEvent].push({
        name: handler.name || '',
        handler: handler,
      });
      if (this?.parent && isStage(this?.parent)) {
        if (!this?.parent.shapeEventListeners[baseEvent]) {
          this.parent.shapeEventListeners[baseEvent] = [];
        }

        this.parent.shapeEventListeners[baseEvent].push({
          name: handler.name || '',
          handler: handler,
        });
      }
    }
    return this;
  }
  _off(type: string, name?: string, callback?: (params: any) => void) {
    let evtListeners = this.eventListeners[type],
      i,
      evtName,
      handler;

    for (i = 0; i < evtListeners.length; i++) {
      evtName = evtListeners[i].name;
      handler = evtListeners[i].handler;

      if ((!name || evtName === name) && (!callback || callback === handler)) {
        evtListeners.splice(i, 1);
        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }
        i--;
      }
    }
  }
  off(evtStr?: string, callback?: (params: any) => void) {
    let events = (evtStr || '').split(' '),
      len = events.length,
      n,
      t,
      event,
      parts,
      baseEvent,
      name;
    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1];
      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          this._off(baseEvent, name, callback);
        }
      } else {
        // eslint-disable-next-line guard-for-in
        for (t in this.eventListeners) {
          this._off(t, name, callback);
        }
      }
    }
    return this;
  }

  _fire(eventType: string, evt: MouseEvent, currentTarget: any) {
    if (isStage(currentTarget)) {
      this.eventListeners[eventType].forEach((item) => {
        item.handler(evt);
      });
    } else {
      this.shapeEventListeners[eventType].forEach((item) => {
        item.handler(evt);
      });
    }
  }

  fire(
    eventType: string,
    {
      evt,
      target,
      currentTarget,
    }: { evt: MouseEvent; target: Stage; currentTarget: any },
  ) {
    if (isStage(currentTarget)) {
      if (
        !this.eventListeners[eventType] ||
        this.eventListeners[eventType].length < 1
      ) {
        this.eventListeners[eventType] = [];
      }
      this._fire(eventType, evt, currentTarget);
      // 将时间推送到最顶层中
      const children = (target as Stage)?.children;
      for (let i = 0; i < children.length; i++) {
        if (
          !this.shapeEventListeners[eventType] ||
          this.shapeEventListeners[eventType].length < 1
        ) {
          this.shapeEventListeners[eventType] = [];
        }
        // @ts-ignore
        const dragShapes = [...this.children.filter((item) => item.draggable)];
        // 拖拽 按下
        if (eventType === 'mousedown') {
          const inScopeDragShape = dragShapes.filter((item) => {
            return item?.inScope(evt, target.canvas?.context);
          });
          const topInScopeDragShape = inScopeDragShape.sort(
            (a, b) => b.index - a.index,
          )[0];
          if (topInScopeDragShape) {
            topInScopeDragShape.dragging = true;
            topInScopeDragShape.offsetX = topInScopeDragShape?.x
              ? evt.offsetX - topInScopeDragShape?.x
              : evt.offsetX;
            topInScopeDragShape.offsetY = topInScopeDragShape?.y
              ? evt.offsetY - topInScopeDragShape?.y
              : evt.offsetY;
          }
        }
        this.fire(eventType, {
          evt,
          target: target,
          currentTarget: children[i],
        });
      }
    } else {
      // 处理拖拽 松开
      if (currentTarget?.draggable && eventType === 'mouseup') {
        currentTarget.dragging = false;
      }
      // 处理拖拽 移动
      if (
        currentTarget?.draggable &&
        currentTarget.dragging &&
        eventType === 'mousemove'
      ) {
        // @ts-ignore
        const rect = this.canvas?.canvas?.getBoundingClientRect();
        if (currentTarget.name === 'Text') {
          // @ts-ignore
          const x = rect?.left ? evt.clientX - rect?.left : evt.clientX;
          const y = rect?.top ? evt.clientY - rect?.top : evt.clientY;
          currentTarget.x = currentTarget?.offsetX
            ? x - currentTarget?.offsetX
            : x;
          currentTarget.y = currentTarget?.offsetY
            ? y - currentTarget?.offsetY
            : y;
        } else {
          const x = rect?.left ? evt.clientX - rect?.left : evt.clientX;
          const y = rect?.top ? evt.clientY - rect?.top : evt.clientY;
          currentTarget.x = currentTarget?.offsetX
            ? x - currentTarget?.offsetX
            : x;
          currentTarget.y = currentTarget?.offsetY
            ? y - currentTarget?.offsetY
            : y;
        }

        // @ts-ignore
        this.batchDraw(this);
      }
      // 处理 除了移入 鼠标事件
      if (currentTarget?.inScope && target.canvas?.context) {
        if (currentTarget?.inScope(evt, target.canvas?.context)) {
          if (
            eventType !== 'mouseenter' &&
            eventType !== 'mouseleave' &&
            eventType !== 'mouseout' &&
            eventType !== 'mouseover'
          ) {
            this._fire(eventType, evt, currentTarget);
          }
          // 首先判断 stage 是否是 move 事件中 处理图形的 mouseenter mouseleave
          if (
            eventType === 'mousemove' &&
            !currentTarget.mouseInScope &&
            target.shapeEventListeners.mouseenter?.length > 0
          ) {
            currentTarget.mouseInScope = true;
            target._fire('mouseenter', evt, currentTarget);
          }
        } else {
          // 处理 除了移出 鼠标事件
          if (eventType === 'mousemove') {
            currentTarget.mouseInScope = false;
            if (target.shapeEventListeners['mouseleave']?.length > 0) {
              target._fire('mouseleave', evt, currentTarget);
            }
          }
        }
      }
    }
  }
}
export default Node;
