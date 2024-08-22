export const sortChildren = (children: any) => {
  return children.toSorted((a: any, b: any) => {
    const a_zIndex = a.data.zIndex;
    const b_zIndex = b.data.zIndex;

    return a_zIndex - b_zIndex;
  });
};
