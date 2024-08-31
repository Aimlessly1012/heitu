import { useRef } from 'react';
import { createContainer } from 'unstated-next';
import { IShape, IShapeType } from '../type';
import { drawShape } from '../utils/drawShape';
import { createCanvas } from '../utils/stage';
import useEvent from './useEvent';
interface Child {
  id: string;
  data: IShape;
  type: IShapeType;
  path2D?: Path2D;
}
export interface StageState {
  ctx: CanvasRenderingContext2D | null;
  children: Child[] | [];
  element: HTMLCanvasElement | null;
}

const useStore = () => {
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
  // 在当前
  const appendChild = (type: IShapeType, data: IShape, id: string) => {
    if (!stageRef.current.ctx || !stageRef.current.element) return;
    const { children } = stageRef.current;

    let curChildren = [...children];
    if (children.some((child: any) => child.id === id)) {
      curChildren = children.map((child: any) => {
        if (child.id === id) {
          return { id, data, type };
        }
        return child;
      });
    } else {
      curChildren.push({ id, data, type });
    }
    stageRef.current.children = curChildren;
    drawShape(stageRef.current);
    console.log(stageRef.current.children);
  };

  const refreshDraw = () => {};
  useEvent(stageRef.current as StageState);
  return {
    stage: {
      initStage,
      refreshDraw,
    },
    common: { appendChild },
  };
};
export const Store = createContainer(useStore);
