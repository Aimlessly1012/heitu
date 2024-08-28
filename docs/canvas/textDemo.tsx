import { Stage, Text } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [fillStyle, setFillStyle] = useState('black');
  const [fontSize, setFontSize] = useState(14);
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  return (
    <div>
      <div>
        <label> fillColor: </label>
        <input
          type="color"
          onChange={(evt) => setFillStyle(evt.target.value)}
        />
      </div>
      <div>
        <label> fontSize: </label>
        <input
          type="range"
          value={fontSize}
          min={10}
          max={30}
          onChange={(evt) => setFontSize(Number(evt.target.value))}
        />
      </div>
      <div>
        <label> x: </label>
        <input
          type="range"
          value={x}
          min={100}
          max={400}
          onChange={(evt) => setX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> y: </label>
        <input
          type="range"
          value={y}
          min={100}
          max={200}
          onChange={(evt) => setY(Number(evt.target.value))}
        />
      </div>
      <Stage>
        <Text
          x={x}
          y={y}
          fontSize={fontSize}
          content="heitu.g"
          fillStyle={fillStyle}
        />
      </Stage>
    </div>
  );
};

export default Index;
