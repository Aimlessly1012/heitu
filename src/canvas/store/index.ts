import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { IShape, IShapeType } from '../type';
import { drawRect } from '../utils/rect';
import useStage from './useStage';
interface Child {
  id: string;
  data: IShape;
  type: IShapeType;
}
const useStore = () => {
  const { canvaseCtx, stageElement, initStage, clearStage } = useStage();
  const [children, setChildren] = useState<Child[] | []>([]);

  const appendChild = (type: IShapeType, data: IShape, id: string) => {
    if (!canvaseCtx || !stageElement) return;
    canvaseCtx.clearRect(0, 0, stageElement.width, stageElement.height);
    switch (type) {
      case 'Rect':
        drawRect(canvaseCtx, data);
        break;
      default:
        console.log(type, '该图形 暂未实现');
        break;
    }
    setChildren((prev) => [...prev, { id, data, type }]);
  };

  const refreshDraw = () => {};
  return {
    stage: {
      canvaseCtx,
      stageElement,
      initStage,
      clearStage,
      refreshDraw,
    },
    common: { appendChild },
  };
};
export const Store = createContainer(useStore);
