import { Image, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [lineWidth, setLineWidth] = useState(5);
  const [strokeStyle, setStrokeStyle] = useState('blue');
  return (
    <div>
      <div>
        <label> strokeColor: </label>
        <input
          type="color"
          onChange={(evt) => setStrokeStyle(evt.target.value)}
        />
      </div>
      <div>
        <label> lineWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={0}
          max={10}
          onChange={(evt) => setLineWidth(Number(evt.target.value))}
        />
      </div>
      <div>
        <label> x: </label>
        <input
          type="range"
          value={x}
          min={100}
          max={200}
          onChange={(evt) => setX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> y: </label>
        <input
          type="range"
          value={y}
          min={10}
          max={100}
          onChange={(evt) => setY(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Image
          x={x}
          y={y}
          width={200}
          height={300}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={0}
          url={
            'https://img1.baidu.com/it/u=1158124566,3648041587&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=809'
          }
        />
      </Stage>
    </div>
  );
};

export default Index;
