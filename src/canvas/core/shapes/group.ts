import { forIn } from 'lodash-es';
import Container from '../stage/container';

class Group extends Container {
  parent: any;
  name = 'Group';
  draggable = false;
  constructor(config: { draggable: boolean }) {
    super();
    this.parent = null;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  draw(ctx: CanvasRenderingContext2D) {
    if (!ctx) return;
    // 排序
    this.sortChildren((a, b) => a.index - b.index);
    // 去重 （后面覆盖前面的）
    this.deduplication();
    // 绘制
    this.getChildren().forEach((child) => {
      if (ctx && child?.draw) {
        child?.draw(ctx);
      }
    });

    return this;
  }
  inScope(evt: MouseEvent, ctx: CanvasRenderingContext2D) {
    // 绘制
    return this.getChildren().some((child) => {
      if (child?.inScope) {
        return child?.inScope(evt, ctx);
      }
      return false;
    });
  }
}
export default Group;
