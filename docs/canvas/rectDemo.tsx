import { Rect, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [lineWidth, setLineWidth] = useState(5);

  const [fillStyle, setFillStyle] = useState('red');
  const [strokeStyle, setStrokeStyle] = useState('blue');
  const [shortLength, setShortLength] = useState(20);
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
      <div>
        <label> setShortLength: </label>
        <input
          type="range"
          value={shortLength}
          min={10}
          max={20}
          onChange={(evt) => setShortLength(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Rect
          x={x}
          y={y}
          width={width}
          height={height}
          fillStyle={fillStyle}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={0}
        />
        <Rect
          x={100}
          y={100}
          width={50}
          height={50}
          fillStyle={'blue'}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={1}
        />
        <Rect
          x={200}
          y={200}
          width={50}
          height={50}
          fillStyle={'black'}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={2}
          shortLength={shortLength}
        />
      </Stage>
    </div>
  );
};

export default Index;
