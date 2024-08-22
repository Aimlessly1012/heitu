import { useLayoutEffect } from 'react';

export const usePropertyChange = (props: any, property: any, shape: any) => {
  useLayoutEffect(() => {
    // if (props.animation?.duration > 16.7) {
    //   shape
    //     .animateCartoon({ [property]: props[property] }, { ...props.animation })
    //     .then(() => {
    //       props.animation.animationEnd?.();
    //     });
    // } else {
    //   if (props[property] !== undefined) {
    //     shape.attr({ [property]: props[property] });
    //   }
    // }
    if (props[property] !== undefined) {
      shape.attr({ [property]: props[property] });
    }
  }, [props[property]]);
};
