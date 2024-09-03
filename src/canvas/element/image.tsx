import { useLayoutEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { Store } from '../store';
import { defaultRectdata, IRect } from './rect';

const UrlImage = (props: IRect) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const ref = useRef<string>(v4());
  useLayoutEffect(() => {
    if (!props.url) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = props.url;
    appendChild(
      'Rect',
      {
        ...defaultRectdata,
        ...props,
        img,
      },
      ref.current,
    );
  }, [props]);

  return null;
};

export default UrlImage;
