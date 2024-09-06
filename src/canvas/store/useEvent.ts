import { useEffect } from 'react';
import { Handler, StageState } from '.';
import { dpr } from '../utils/constant';
import { isInShape, isInTextShape } from '../utils/inShape';

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

const useEvent = (
  stage: StageState,
  eventMap: Map<OnEventType, Handler[]>,
  drawShape: (stageState: StageState) => void,
) => {
  useEffect(() => {
    if (!stage.element || !stage.children) return;
    // 除去 onMouseMove onMouseEnter 事件 因为 两个事件是 canvas 单独自己的 不能对元素生效
    // 要根据每个图形的位置 去做
    const handleAction = (
      evt: HTMLElementEventMap[EventType],
      eventName: OnEventType,
    ) => {
      const mouseX = evt.offsetX * dpr;
      const mouseY = evt.offsetY * dpr;
      if (eventMap.has(eventName)) {
        stage?.children?.forEach((child) => {
          // 因为text 没有path2d 所以要根据位置确定
          if (
            !child.data.path2D &&
            child.type === 'Text' &&
            isInTextShape(mouseX, mouseY, child.data)
          ) {
            if (child.data?.[eventName]) child.data[eventName]();
          }
          if (
            isInShape({
              mouseX,
              mouseY,
              path2D: child.data.path2D,
              ctx: stage?.ctx || undefined,
            })
          ) {
            if (child.data?.[eventName]) child.data[eventName]();
          }
        });
      }
      // 拖拽
      stage?.children?.forEach((child) => {
        // 初始化
        child.data.dragging = false;
        child.data.offsetX = 0;
        child.data.offsetY = 0;
        // 改变位置
        if (
          child.data.draggable &&
          eventName === 'onMouseDown' &&
          (isInShape({
            mouseX,
            mouseY,
            path2D: child.data?.path2D,
            ctx: stage?.ctx || undefined,
          }) ||
            isInTextShape(mouseX, mouseY, child.data))
        ) {
          child.data.dragging = true;

          child.data.offsetX = child?.data?.x
            ? evt.offsetX - child?.data?.x
            : evt.offsetX;
          child.data.offsetY = child?.data?.y
            ? evt.offsetY - child?.data?.y
            : evt.offsetY;
        }
        if (child.data.draggable && eventName === 'onMouseUp') {
          child.data.dragging = false;
        }
      });
    };
    // onMouseMove onMouseEnter 事件
    // 要根据每个图形的位置 去做
    const handleActionMove = (evt: HTMLElementEventMap[EventType]) => {
      const mouseX = evt.offsetX * dpr;
      const mouseY = evt.offsetY * dpr;
      stage?.children?.forEach((child) => {
        const inShape = isInShape({
          mouseX,
          mouseY,
          path2D: child.data.path2D,
          ctx: stage?.ctx || undefined,
        });
        // 因为text 没有path2d 所以要根据位置确定
        if (!child.data.path2D && child.type === 'Text') {
          if (
            child.data?.['onMouseEnter'] &&
            // @ts-ignore
            isInTextShape(mouseX, mouseY, child.data)
          ) {
            child.data?.['onMouseEnter']();
          }
          if (
            child.data?.['onMouseLeave'] &&
            !isInTextShape(mouseX, mouseY, child.data)
          ) {
            child.data?.['onMouseLeave']();
          }
        }

        if (child.data?.['onMouseEnter'] && inShape) {
          stage?.element?.style.setProperty(
            'cursor',
            child.data?.cursor || 'auto',
          );

          child.data['onMouseEnter']();

          child.data.isHovered = true;
        }
        if (child.data?.['onMouseLeave'] && !inShape && child.data.isHovered) {
          stage?.element?.style.setProperty('cursor', 'auto');
          child.data['onMouseLeave']();
          child.data.isHovered = true;
        }

        // 拖拽 api
        if (child.data.draggable && inShape && child.data.dragging) {
          const rect = stage.element?.getBoundingClientRect();
          const x = rect?.left ? evt.clientX - rect?.left : evt.clientX;
          const y = rect?.top ? evt.clientY - rect?.top : evt.clientY;
          child.data.x = child.data.offsetX ? x - child.data.offsetX : x;
          child.data.y = child.data.offsetY ? y - child.data.offsetY : y;
          drawShape(stage);
        }

        if (
          child.data.draggable &&
          isInTextShape(mouseX, mouseY, child.data) &&
          child.data.dragging
        ) {
          console.log(isInTextShape(mouseX, mouseY, child.data));
          const rect = stage.element?.getBoundingClientRect();
          const x = rect?.left ? evt.clientX - rect?.left : evt.clientX;
          const y = rect?.top ? evt.clientY - rect?.top : evt.clientY;
          child.data.x = child.data.offsetX ? x - child.data.offsetX : x;
          child.data.y = child.data.offsetY ? y - child.data.offsetY : y;
          drawShape(stage);
        }
      });
    };
    // 监听鼠标移动事件
    stage.element?.addEventListener('mousemove', (e) => handleActionMove(e));
    // 监听其他事件
    eventOnStageList
      .filter(
        (n) => !['onMouseMove', 'onMouseLeave', 'onMouseEnter'].includes(n),
      )
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
