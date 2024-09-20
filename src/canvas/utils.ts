import { dpr } from './core/constant';

export const isStage = (obj: any) => {
  return obj.name === 'Stage';
  // return obj instanceof Stage.c;
};

// 合并数组并使用 filter 和 some 去重
export const mergedArray = (array1: any[], array2: any[]): any[] => {
  return Array.from(
    new Map([...array1, ...array2].map((item) => [item.name, item])).values(),
  );
};

export const isInTextShape = (mouseX: number, mouseY: number, data: any) => {
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
