import { Circle } from 'heitu/canvas/instance/circle';
import { sortChildren } from 'heitu/canvas/utils';
import {
  fillOrStroke,
  setCtxStyleProp,
} from 'heitu/canvas/utils/renderShape/common';
import { setRectPath2D } from 'heitu/canvas/utils/renderShape/renderRect';
import { setCirclePath2D } from './renderCircle';
import { Trapezoid } from 'heitu/canvas/instance/trapezoid';
import { setTrapezoidPath2D } from './renderTrapezoid';

// 根据不同的 类型绘制
export function drawShapes(ctx: CanvasRenderingContext2D, list: any[]) {
  const curlist = sortChildren(list);

  curlist.forEach((elementItem: any) => {
    console.log(elementItem, 'elementItem');
    // const { data } = elementItem;

    ctx.beginPath();

    setCtxStyleProp(ctx, elementItem);

    switch (elementItem.type) {
      case 'Trapezoid': {
        setTrapezoidPath2D(elementItem as Trapezoid);
        fillOrStroke(ctx, elementItem);
        break;
      }
      case 'Rect': {
        setRectPath2D(elementItem);
        fillOrStroke(ctx, elementItem);

        break;
      }
      case 'Line': {
        console.log(elementItem, 'elementItem');
        // const { closed, path2D } = data as Line['data'];

        break;
      }
      case 'Circle': {
        setCirclePath2D(elementItem as Circle);
        fillOrStroke(ctx, elementItem);
        break;
      }
      default:
        console.log(elementItem.type, '该图形 暂未实现');
        break;
    }
  });
}
