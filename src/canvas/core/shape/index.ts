import { CSSProperties } from 'react';

class Stage {
  width: number;
  height: number;
  style: CSSProperties;
  constructor() {
    this.width = 0;
    this.height = 0;
    this.style = {};
  }
}
export default Stage;
