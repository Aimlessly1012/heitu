import { useState } from 'react';
import { createCanvas } from '../utils/stage';
export interface StageState {
  ctx: CanvasRenderingContext2D | null;
  children: any[];
  element: HTMLCanvasElement | null;
}
const useStage = () => {
  const [canvaseCtx, setCanvaseCtx] = useState<CanvasRenderingContext2D | null>(
    null,
  );
  const [stageElement, setStageElement] = useState<HTMLCanvasElement | null>(
    null,
  );

  const initStage = (canvasContainer: HTMLDivElement) => {
    const { offsetWidth, offsetHeight } = canvasContainer;
    const { canvasElement, ctx } = createCanvas(offsetWidth, offsetHeight);
    canvasContainer.append(canvasElement);

    setCanvaseCtx(ctx);
    setStageElement(canvasElement);
  };

  const clearStage = () => {};

  return {
    initStage,
    clearStage,
    canvaseCtx,
    stageElement,
  };
};

export default useStage;
