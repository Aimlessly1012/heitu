import { Node } from '../type';
interface ChildType extends Node {
  parent: Node;
}

class Container {
  children: Array<ChildType> = [];
  // 获取 子元素
  getChildren(filterFunc?: (item: Node) => boolean) {
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
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    // this._validateAdd(child);
    child.index = this.getChildren().length;
    child.parent = this;
    child._clearCaches();
    this.getChildren().push(child);
    // this._fire('add', {
    //   child: child,
    // });
    // this._requestDraw();
    // chainable
    return this;
  }
}
export default Container;
