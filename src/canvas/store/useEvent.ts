import { forIn } from 'lodash-es';
import { useEffect, useRef } from 'react';
import { StageState } from '.';

export type EventType =
  | 'mouseleave'
  | 'mouseenter'
  | 'mousemove'
  | 'mousedown'
  | 'mouseup'
  | 'click';

export type OnEventType = `on${EventType}`;
export const eventOnStageList: OnEventType[] = [
  'onmouseleave',
  'onmouseenter',
  'onmousemove',
  'onmousedown',
  'onmouseup',
  'onclick',
];
export const eventStageList: EventType[] = [
  'mouseleave',
  'mouseenter',
  'mousemove',
  'mousedown',
  'mouseup',
  'click',
];

const useEvent = (stage: StageState) => {
  const eventRef = useRef([]);
  // // 检查是否点击到某个图形
  // const handleInShape = (childrenShape: Child) => {};

  useEffect(() => {
    if (!stage.element || !stage.children) return;

    const handleAction = (
      evt: HTMLElementEventMap[EventType],
      eventName: EventType,
    ) => {
      const rect = stage.element.getBoundingClientRect();
      const mouseX = evt.clientX - rect.left;
      const mouseY = evt.clientY - rect.top;
      stage.children.forEach((item) => {
        // console.log(item.path2D, item.type, 'item.path2D');
        if (stage.ctx.isPointInPath(item.path2D, mouseX, mouseY)) {
          console.log(item.type, 'itemitem');
          return 
        }
      });
    };

    stage?.children?.forEach((child) => {
      forIn(child.data, (val, key) => {
        if (
          !eventRef.current.includes(key.replace(/^on/, '')) &&
          eventOnStageList.includes(key)
        ) {
          eventRef.current.push(key.replace(/^on/, ''));
        }
      });
    });
    console.log(eventRef.current, 'eventRef.current');
    eventRef.current.forEach((eventName) => {
      stage.element?.addEventListener(eventName, (e) =>
        handleAction(e, eventName),
      );
    });
    //   // 清除事件监听器
    return () => {
      if (stage.element) {
        eventRef.current.forEach((eventName) => {
          stage.element?.removeEventListener(eventName, (e) =>
            handleAction(e, eventName),
          );
        });
      }
    };
  }, []);
};

export default useEvent;
