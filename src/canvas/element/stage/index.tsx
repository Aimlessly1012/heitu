import { Store } from 'heitu/canvas/store';
import React, { CSSProperties, useEffect } from 'react';
import Stage from './stage';

export interface StageProps extends CSSProperties {
  children?: any;
  width?: number | string;
  height?: number;
  border?: string;
  background?: string;
  margin?: string | number;
}

const ContextStage = (props: StageProps) => {
  useEffect(() => {}, []);
  return (
    <Store.Provider>
      <Stage {...props} />
      {props.children}
    </Store.Provider>
  );
};

export default ContextStage;