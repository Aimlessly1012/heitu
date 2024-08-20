import { useLayoutEffect } from "react";

export const usePropertyChange = (props, property, shape) => {
  useLayoutEffect(() => {
    if (props.animation?.duration > 16.7) {
      shape
        .animateCartoon({ [property]: props[property] }, { ...props.animation })
        .then(() => {
          props.animation.animationEnd?.();
        });
    } else {
      if (props[property] !== undefined) {
        shape.attr({ [property]: props[property] });
      }
    }
  }, [props[property]]);
};

export const useBindEvent = (props, shapeInstance) => {
  useLayoutEffect(() => {
    for (const key in props) {
      if (key.startsWith('on')) {
        shapeInstance[key] = props[key];
      }
    }
  });
};
