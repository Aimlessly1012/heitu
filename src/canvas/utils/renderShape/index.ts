import { Circle } from 'heitu/canvas/instance/circle';
import { Line } from 'heitu/canvas/instance/line';
import { Text } from 'heitu/canvas/instance/text';
import { Trapezoid } from 'heitu/canvas/instance/trapezoid';
import { sortChildren } from 'heitu/canvas/utils';
import {
  fillOrStroke,
  hasStroke,
  setCtxFontSize,
  setCtxStyleProp,
} from 'heitu/canvas/utils/renderShape/common';
import { setRectPath2D } from 'heitu/canvas/utils/renderShape/renderRect';
import { setCirclePath2D } from './renderCircle';
import { createLinePath2D } from './renderLine';
import { setTrapezoidPath2D } from './renderTrapezoid';

// 根据不同的 类型绘制
export function drawShapes(ctx: CanvasRenderingContext2D, list: any[]) {
  const curlist = sortChildren(list);

  curlist.forEach((elementItem: any) => {
    const { data } = elementItem;

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
        const { closed, path2D } = elementItem as Line['data'];
        // 调用 attr() 方法后,  需重新计算 path2D, 且一定会有 bug, 需要优化
        elementItem.path2D = path2D ? path2D : createLinePath2D(data);
        if (hasStroke(data.lineWidth, data.strokeStyle)) {
          ctx.stroke(elementItem.path2D);
        }
        if (closed) {
          ctx.fill(elementItem.path2D);
        }
        break;
      }
      case 'Circle': {
        setCirclePath2D(elementItem as Circle);
        fillOrStroke(ctx, elementItem);
        break;
      }
      case 'Text': {
        const {
          x,
          y,
          content,
          fontSize,
          textAlign = 'left',
          textBaseline,
        } = data as Text['data'];

        setCtxFontSize(ctx, fontSize);

        ctx.textBaseline = textBaseline as CanvasTextBaseline;
        ctx.textAlign = textAlign;
        ctx.fillText(content as string, x || 0, y || 0);
        break;
      }
      default:
        console.log(elementItem.type, '该图形 暂未实现');
        break;
    }
  });
}
