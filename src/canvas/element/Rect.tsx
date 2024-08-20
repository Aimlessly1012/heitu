import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import { useBindEvent, usePropertyChange } from './_hooks';
// import { Rect as _Rect } from './render';
// import { AnimationConfig } from './type';

const defaultProps: _Rect['data'] = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fillStyle: 'black',
};

export const Rect = forwardRef<_Rect, _Rect['data'] & AnimationConfig>(
  (props, ref) => {
    const mergeProps = { ...defaultProps, ...props };

    const rectRef = useRef(new _Rect(mergeProps));

    useImperativeHandle(ref, () => rectRef.current);

    usePropertyChange(mergeProps, 'width', rectRef.current);
    usePropertyChange(mergeProps, 'height', rectRef.current);
    usePropertyChange(mergeProps, 'cornerRadius', rectRef.current);

    usePropertyChange(mergeProps, 'name', rectRef.current);
    usePropertyChange(mergeProps, 'x', rectRef.current);
    usePropertyChange(mergeProps, 'y', rectRef.current);
    usePropertyChange(mergeProps, 'shadowColor', rectRef.current);
    usePropertyChange(mergeProps, 'shadowBlur', rectRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetX', rectRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetY', rectRef.current);
    usePropertyChange(mergeProps, 'lineWidth', rectRef.current);
    usePropertyChange(mergeProps, 'opacity', rectRef.current);
    usePropertyChange(mergeProps, 'zIndex', rectRef.current);
    usePropertyChange(mergeProps, 'fillStyle', rectRef.current);
    usePropertyChange(mergeProps, 'strokeStyle', rectRef.current);
    usePropertyChange(mergeProps, 'lineCap', rectRef.current);
    usePropertyChange(mergeProps, 'lineJoin', rectRef.current);
    usePropertyChange(mergeProps, 'lineDash', rectRef.current);
    usePropertyChange(mergeProps, 'draggable', rectRef.current);
    usePropertyChange(mergeProps, 'cursor', rectRef.current);
    usePropertyChange(mergeProps, 'pointerEvents', rectRef.current);
    usePropertyChange(mergeProps, 'transform', rectRef.current);
    usePropertyChange(mergeProps, 'onclick', rectRef.current);
    usePropertyChange(mergeProps, 'onmouseenter', rectRef.current);
    usePropertyChange(mergeProps, 'onmousemove', rectRef.current);
    usePropertyChange(mergeProps, 'onmouseleave', rectRef.current);
    usePropertyChange(mergeProps, 'onmousedown', rectRef.current);
    usePropertyChange(mergeProps, 'onmouseup', rectRef.current);
    usePropertyChange(mergeProps, 'ondragstart', rectRef.current);
    usePropertyChange(mergeProps, 'ondrag', rectRef.current);
    usePropertyChange(mergeProps, 'ondragend', rectRef.current);

    useBindEvent(mergeProps, rectRef.current);

    const parent = useContext(Context);

    useLayoutEffect(() => {
      parent.append(rectRef.current);

      return () => {
        rectRef.current.remove();
      };
    }, []);

    return null;
  },
);
