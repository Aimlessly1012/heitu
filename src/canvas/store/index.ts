import { forIn, isNumber } from 'lodash-es';
import { useEffect, useRef } from 'react';
import { createContainer } from 'unstated-next';
import { IShape, IShapeType } from '../type';
import { drawShape } from '../utils/drawShape';
import { createCanvas, updateCanvas } from '../utils/stage';
import useEvent, { eventOnStageList, OnEventType } from './useEvent';
export type ChildData = IShape & { [K in OnEventType]?: () => void };
interface Child {
  id: string;
  data: ChildData;
  type: IShapeType;
}
export interface StageState {
  ctx: CanvasRenderingContext2D | null;
  children: Child[] | [];
  element: HTMLCanvasElement | null;
}
export type EventParameter = {
  target: IShape;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  nativeEvent?: MouseEvent;
};
// parameter: EventParameter
export type Handler = () => void;

const useStore = () => {
  const firstRenderRef = useRef(false);
  const eventMapRef = useRef(new Map<OnEventType, Handler[]>());

  const stageRef = useRef<StageState>({
    children: [],
    ctx: null,
    element: null,
  });

  // 初始化 画布
  const initStage = (canvasContainer: HTMLDivElement) => {
    const { offsetWidth, offsetHeight } = canvasContainer;
    const { canvasElement, ctx } = createCanvas(offsetWidth, offsetHeight);
    canvasContainer.append(canvasElement);
    stageRef.current.ctx = ctx;
    stageRef.current.element = canvasElement;
  };
  const off = (data: IShape) => {
    forIn(data, (val, key) => {
      if (eventOnStageList.includes(key as any)) {
        const handlers = eventMapRef.current.get(key as any);

        if (!handlers || handlers.length === 0) {
          return;
        }

        eventMapRef.current.set(
          key as any,
          handlers.filter((item) => item !== val),
        );
      }
    });
  };

  const on = (data: IShape) => {
    forIn(data, (val, key) => {
      if (eventOnStageList.includes(key as any)) {
        let handlers = eventMapRef.current.get(key as OnEventType);
        if (!handlers) {
          handlers = [];
          eventMapRef.current.set(key as OnEventType, handlers);
        }

        handlers.push(val);
      }
    });
  };

  // 添加子集
  const appendChild = (type: IShapeType, data: IShape, id: string) => {
    if (!stageRef.current.ctx || !stageRef.current.element) return;
    const { children } = stageRef.current;

    let curChildren = [...children];
    if (children.some((child: any) => child.id === id)) {
      off(data);
      curChildren = children.map((child: any) => {
        if (child.id === id) {
          return {
            id,
            data: { ...data, zIndex: isNumber(data.zIndex) ? data.zIndex : 1 },
            type,
          };
        }
        return child;
      });
    } else {
      curChildren.push({
        id,
        data: { ...data, zIndex: isNumber(data.zIndex) ? data.zIndex : 1 },
        type,
      });
      on(data);
    }
    stageRef.current.children = curChildren;

    drawShape(stageRef.current);
  };
  // 重新刷新画布
  const refreshDraw = () => {
    if (!firstRenderRef?.current) {
      firstRenderRef.current = true;
      return;
    }
    const ctx = updateCanvas(
      stageRef.current.element as HTMLCanvasElement,
      stageRef?.current?.element?.offsetWidth as number,
      stageRef?.current?.element?.offsetHeight as number,
    );
    stageRef.current.ctx = ctx;

    drawShape(stageRef.current);
  };
  // 画布尺寸
  const canvasSize = () => {
    return {
      width: stageRef.current.element?.offsetWidth,
      height: stageRef.current.element?.offsetHeight,
    };
  };

  const destroyCanvas = () => {
    if (stageRef.current.ctx && stageRef.current.element) {
      stageRef?.current?.ctx.clearRect(
        0,
        0,
        stageRef.current.element.offsetWidth,
        stageRef.current.element.offsetHeight,
      );
      stageRef.current.ctx = null;
      stageRef.current.element = null;
    }
    if (stageRef.current.children?.length) {
      stageRef.current.children = [];
    }
    firstRenderRef.current = false;
  };

  useEvent(stageRef.current as StageState, eventMapRef.current, drawShape);

  useEffect(() => {
    return () => destroyCanvas();
  }, []);
  return {
    stage: {
      initStage,
      refreshDraw,
      canvasSize,
    },
    common: { appendChild },
  };
};
export const Store = createContainer(useStore);
