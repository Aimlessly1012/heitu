import { Rect, Stage } from 'heitu';
import React from 'react';

const Index = () => {
  return (
    <>
      <Stage>
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fillStyle={'pink'}
          border={0}
        />
      </Stage>
    </>
  );
};

export default Index;
