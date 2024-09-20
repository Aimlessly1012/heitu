import Stage from '.';
import Node from '../shapes/node';
import { Node as INode } from '../type';

interface ChildType extends Node {
  parent: Stage | null;
  index: number;
  remove: () => void;
  destroy: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  draggable?: (evt: MouseEvent) => void | boolean;
  dragging: boolean;
  mouseInScope: boolean;
}

abstract class Container extends Node {
  children: Array<ChildType> = [];
  // 获取 子元素
  getChildren(filterFunc?: (item: INode) => boolean) {
    if (!filterFunc) {
      return this.children || [];
    }

    const children = this.children || [];
    let results: Array<ChildType> = [];
    children.forEach(function (child) {
      if (filterFunc(child)) {
        results.push(child);
      }
    });
    return results;
  }
  // 判断是否有子元素
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    this.getChildren().forEach((child) => {
      // reset parent to prevent many _setChildrenIndices calls
      child.parent = null;
      child.index = 0;
      child.remove();
    });
    this.children = [];
    // this._requestDraw();
    return this;
  }
  destroyChildren() {
    this.getChildren().forEach((child) => {
      child.parent = null;
      child.index = 0;
      child.destroy();
    });
    this.children = [];
    // this._requestDraw();
    return this;
  }
  add(...children: ChildType[]) {
    if (children.length === 0) {
      return this;
    }

    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        this.add(children[i]);
      }
      return this;
    }
    const child = children[0];

    child.index = child.index ? child.index : this.getChildren().length;
    child.parent = this as any;
    this.getChildren().push(child);

    return this;
  }
  // 排序
  sortChildren(sortFunc: (a: INode, b: INode) => number) {
    return this.getChildren().sort(sortFunc);
  }

  deduplication() {
    this.getChildren();
    const currentChildren = [] as Array<ChildType>;
    this.getChildren().forEach((child) => {
      const isExist = currentChildren.some((item) => {
        return item === child;
      });
      if (!isExist) {
        currentChildren.push(child);
      }
    });

    this.children = currentChildren;
    return currentChildren;
  }
  batchDraw(stage: Stage) {
    if (!stage.canvas?.context || !stage.canvas?.canvas) return;
    stage.canvas?.context.clearRect(
      0,
      0,
      stage.canvas?.canvas.offsetWidth,
      stage.canvas?.canvas.offsetHeight,
    );
    // 排序
    this.sortChildren((a, b) => a.index - b.index);
    // 去重 （后面覆盖前面的）
    this.deduplication();
    // 绘制
    this.getChildren().forEach((child) => {
      if (stage.canvas?.context && child?.draw) {
        child?.draw(stage.canvas?.context);
      }
    });
  }
}
export default Container;
