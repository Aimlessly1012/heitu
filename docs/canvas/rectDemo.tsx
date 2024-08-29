import { Rect, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const [fillStyle, setFillStyle] = useState('red');
  return (
    <div>
      <div style={{ marginTop: '30px' }}>
        <label> fillColor: </label>
        <input
          type="color"
          onChange={(evt) => setFillStyle(evt.target.value)}
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

      <div>
        <label> width: </label>
        <input
          type="range"
          value={width}
          min={100}
          max={300}
          onChange={(evt) => setWidth(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> height: </label>
        <input
          type="range"
          value={height}
          min={100}
          max={300}
          onChange={(evt) => setHeight(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Rect x={x} y={y} width={width} height={height} fillStyle={fillStyle} />
      </Stage>
    </div>
  );
};

export default Index;
