import { ICircle } from 'heitu/canvas/element/circle';
import { IRect } from 'heitu/canvas/element/rect';
import { StageState } from 'heitu/canvas/store';

import { ILine } from 'heitu/canvas/element/line';
import { IText } from 'heitu/canvas/element/text';
import { drawCircle } from './circle';
import { drawLine } from './line';
import { drawRectCommon } from './rect';
import { drawText } from './text';

export const drawShape = (stageState: StageState) => {
  const { ctx, element, children } = stageState;
  if (!ctx || !element) return;
  ctx.clearRect(0, 0, element.offsetWidth, element.offsetHeight);
  children?.forEach((item) => {
    const { data, type } = item;
    switch (type) {
      case 'Rect':
        item.path2D = drawRectCommon(ctx, data as IRect);
        break;
      case 'Circle':
        item.path2D = drawCircle(ctx, data as ICircle);
        break;
      case 'Text':
        // eslint-disable-next-line no-case-declarations
        const { width, height } = drawText(ctx, data as IText);
        // @ts-ignore
        item.data.width = width as number;
        // @ts-ignore
        item.data.height = height;

        break;
      case 'Line':
        item.path2D = drawLine(ctx, data as ILine);
        break;
      default:
        console.log(type, '该图形 暂未实现');
        break;
    }
  });
};
