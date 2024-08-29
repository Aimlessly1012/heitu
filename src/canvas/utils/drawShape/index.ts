import { ICircle } from 'heitu/canvas/element/circle';
import { IRect } from 'heitu/canvas/element/rect';
import { StageState } from 'heitu/canvas/store';

import { IText } from 'heitu/canvas/element/text';
import { drawCircle } from './circle';
import { drawRectCommon } from './rect';
import { drawText } from './text';

export const drawShape = (stageState: StageState) => {
  const { ctx, element, children } = stageState;
  if (!ctx || !element) return;
  ctx.clearRect(0, 0, element.width, element.height);
  children?.forEach((item) => {
    const { data, type } = item;
    switch (type) {
      case 'Rect':
        drawRectCommon(ctx, data as IRect);
        break;
      case 'Circle':
        drawCircle(ctx, data as ICircle);
        break;
      case 'Text':
        drawText(ctx, data as IText);
        break;
      default:
        console.log(type, '该图形 暂未实现');
        break;
    }
  });
};
