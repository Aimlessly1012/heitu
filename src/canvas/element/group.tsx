import { useLayoutEffect, useMemo, useRef } from 'react';
import { v4 } from 'uuid';
import { ChildData, Store } from '../store';
import { CommonShape } from '../type';

// export type IGroup = CommonShape;
export interface IGroup extends CommonShape {
  children: ChildData[];
}

const Group = (props: React.PropsWithChildren<IGroup>) => {
  const {
    common: { appendChild },
  } = Store.useContainer();
  const ref = useRef<string>(v4());

  const children = useMemo(() => {
    return props.children.map((item) => {
      const parentZIndex = props.zIndex || 1;
      const itemZIndex = item?.props?.zIndex || 1;
      return {
        ...item,
        props: {
          ...item?.props,
          zIndex: parentZIndex - itemZIndex,
          parent: {
            id: ref.current,
            type: 'Group',
            zIndex: parentZIndex,
            children: props.children,
          },
        },
      };
    });
  }, [props.children]);

  useLayoutEffect(() => {
    appendChild(
      'Group',
      { children: children.map((child) => child.props) },
      ref.current,
    );
  }, [props]);

  return children;
};

export default Group;
