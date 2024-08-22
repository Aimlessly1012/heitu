import React, { CSSProperties, useLayoutEffect, useRef } from 'react';
import { Stage as _Stage } from '../instance/stage';
import { Context } from '../store';

interface StageProps extends CSSProperties {
  children?: any;
  width?: number | string;
  height?: number;
  border?: string;
  background?: string;
  margin?: string | number;
}

const defaultProps: StageProps = {
  width: '100%',
  height: 400,
  background: '#fff',
  margin: '0 auto',
};

const Stage = (props: StageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<_Stage>(new _Stage());
  const mergeProps = { ...defaultProps, ...props };

  useLayoutEffect(() => {
    stageRef.current.mount({
      container: containerRef.current as HTMLDivElement,
    });
  }, []);
  // 递归 遍历子元素 获取 tag name
  // React.Children.forEach(props.children, (child) => {
  //   if (React.isValidElement(child)) {
  //     const tagName =
  //       typeof child.type === 'string' ? child.type : child.type.name;
  //     console.log('Child tag name:', tagName);
  //   }
  // });
  return (
    <Context.Provider value={stageRef.current}>
      <div ref={containerRef} style={mergeProps}></div>
      {props.children}
    </Context.Provider>
  );
};

export default Stage;
