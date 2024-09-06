import { CSSProperties } from 'react';

class Stage {
  width: number;
  height: number;
  style: CSSProperties;
  content: HTMLDivElement;
  constructor() {}
  getContent() {
    return this.content;
  }
}
export default Stage;
