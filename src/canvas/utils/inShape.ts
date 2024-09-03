import { ChildData } from '../store';
import { dpr } from './constant';

export const isInShape = ({
  mouseX,
  mouseY,
  path2D,
  ctx,
}: {
  mouseX: number;
  mouseY: number;
  path2D?: Path2D;
  ctx?: CanvasRenderingContext2D;
}) => {
  return path2D && ctx && ctx?.isPointInPath(path2D, mouseX, mouseY);
};

export const isInTextShape = (
  mouseX: number,
  mouseY: number,
  data: ChildData,
) => {
  // @ts-ignore
  if (data?.x && data?.width && data.y && data?.height) {
    return (
      mouseX > data?.x * dpr &&
      mouseX < ((data?.x || 0) + (data?.width || 0)) * dpr &&
      mouseY > data?.y * dpr &&
      mouseY < data.y * dpr + data.height * dpr
    );
  }
  return false;
};
