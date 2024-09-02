import { forIn } from 'lodash-es';
import { useRef } from 'react';
import { createContainer } from 'unstated-next';
import { IShape, IShapeType } from '../type';
import { drawShape } from '../utils/drawShape';
import { createCanvas } from '../utils/stage';
import useEvent, { eventOnStageList, OnEventType } from './useEvent';
interface Child {
  id: string;
  data: IShape & { [K in OnEventType]?: () => void } & {
    isHovered?: boolean;
  };
  type: IShapeType;
  path2D?: Path2D;
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
  const eventMapRef = useRef(new Map<OnEventType, Handler[]>());

  const stageRef = useRef<StageState>({
    children: [],
    ctx: null,
    element: null,
  });
  //
  const addStageEventListener = () => {};
  // 初始化 画布
  const initStage = (canvasContainer: HTMLDivElement) => {
    const { offsetWidth, offsetHeight } = canvasContainer;
    const { canvasElement, ctx } = createCanvas(offsetWidth, offsetHeight);
    canvasContainer.append(canvasElement);
    stageRef.current.ctx = ctx;
    stageRef.current.element = canvasElement;
    addStageEventListener();
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
          return { id, data, type };
        }
        return child;
      });
    } else {
      curChildren.push({ id, data, type });
      on(data);
    }
    stageRef.current.children = curChildren;
    drawShape(stageRef.current);
  };

  const refreshDraw = () => {};
  useEvent(stageRef.current as StageState, eventMapRef.current);
  return {
    stage: {
      initStage,
      refreshDraw,
    },
    common: { appendChild },
  };
};
export const Store = createContainer(useStore);
