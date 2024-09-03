import { Rect, Stage, Text } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [log, setLog] = useState('');
  return (
    <>
      {log}
      <Stage>
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fillStyle={'pink'}
          border={0}
          draggable
        />
        <Rect
          x={300}
          y={100}
          width={100}
          height={100}
          fillStyle={'pink'}
          border={0}
          draggable
        />
        <Text
          x={10}
          y={10}
          fontSize={20}
          content={"王明 是神"}
          fillStyle={'black'}
          draggable
        />
      </Stage>
    </>
  );
};

export default Index;
