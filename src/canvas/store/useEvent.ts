import { useEffect } from 'react';
import { Handler, StageState } from '.';
import { dpr } from '../utils/constant';

export type EventType =
  | 'mouseleave'
  | 'mouseenter'
  | 'mousemove'
  | 'mousedown'
  | 'mouseup'
  | 'click';

export type OnEventType =
  | 'onMouseLeave'
  | 'onMouseEnter'
  | 'onMouseMove'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onClick';
export const eventOnStageList: OnEventType[] = [
  'onMouseLeave',
  'onMouseEnter',
  'onMouseMove',
  'onMouseDown',
  'onMouseUp',
  'onClick',
];

export enum eventStageEnum {
  'onMouseLeave' = 'mouseleave',
  'onMouseEnter' = 'mouseenter',
  'onMouseMove' = 'mousemove',
  'onMouseDown' = 'mousedown',
  'onMouseUp' = 'mouseup',
  'onClick' = 'click',
}

const useEvent = (stage: StageState, eventMap: Map<OnEventType, Handler[]>) => {
  // 检查是否点击到某个图形
  // const handleInShape = (childrenShape: Child) => {};

  useEffect(() => {
    if (!stage.element || !stage.children) return;

    const handleAction = (
      evt: HTMLElementEventMap[EventType],
      eventName: OnEventType,
    ) => {
      if (eventMap.has(eventName)) {
        const mouseX = evt.offsetX * dpr;
        const mouseY = evt.offsetY * dpr;
        stage.children.forEach((child) => {
          // @ts-ignore
          if (stage?.ctx?.isPointInPath(child?.path2D, mouseX, mouseY)) {
            if (child.data[eventName]) child.data[eventName]();
          }
        });
      }
    };
    const handleActionMove = (evt: HTMLElementEventMap[EventType]) => {
      const mouseX = evt.offsetX * dpr;
      const mouseY = evt.offsetY * dpr;
      stage.children.forEach((child) => {
        const inShape = stage?.ctx?.isPointInPath(
          // @ts-ignore
          child?.path2D,
          mouseX,
          mouseY,
        );

        if (child.data['onMouseEnter'] && inShape) {
          stage?.element?.style.setProperty(
            'cursor',
            child.data?.cursor || 'auto',
          );
          child.data['onMouseEnter']();

          child.data.isHovered = true;
        }
        if (child.data['onMouseLeave'] && !inShape && child.data.isHovered) {
          stage?.element?.style.setProperty('cursor', 'auto');
          child.data['onMouseLeave']();
          child.data.isHovered = true;
        }
      });
    };

    stage.element?.addEventListener('mousemove', (e) => handleActionMove(e));
    eventOnStageList
      .filter((n) => !['onMouseMove', 'onMouseLeave'].includes(n))
      .forEach((eventName) => {
        stage.element?.addEventListener(eventStageEnum[eventName], (e) =>
          handleAction(e, eventName),
        );
      });
    // 清除事件监听器
    return () => {
      if (stage.element) {
        eventOnStageList.forEach((eventName) => {
          stage.element?.removeEventListener(eventStageEnum[eventName], (e) =>
            handleAction(e, eventName),
          );
        });
      }
    };
  }, []);
};

export default useEvent;
