import { useContext, useLayoutEffect, useRef } from 'react';
import { Text as _Text } from '../instance/text';
import { Context } from '../store';
import { usePropertyChange } from '../utils/hooks/usePropertyChange';

const defaultProps: _Text['data'] = {
  x: 0,
  y: 0,
  content: 'hello world',
  fillStyle: 'black',
  fontSize: 14,
};
const Text = (props: _Text['data']) => {
  const mergeProps = { ...defaultProps, ...props };
  const parent = useContext(Context);

  const text = new _Text(mergeProps);
  const textRef = useRef(text);

  usePropertyChange(mergeProps, 'x', textRef.current);
  usePropertyChange(mergeProps, 'y', textRef.current);
  usePropertyChange(mergeProps, 'content', textRef.current);
  usePropertyChange(mergeProps, 'fillStyle', textRef.current);
  usePropertyChange(mergeProps, 'fontSize', textRef.current);

  useLayoutEffect(() => {
    parent.appendChild(textRef.current);

    return () => {
      // rectRef.current.remove();
    };
  }, []);
  return null;
};

export default Text;
