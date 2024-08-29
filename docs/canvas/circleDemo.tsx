import { Circle, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(400);
  const [y, setY] = useState(100);
  const [radius, setRadius] = useState(50);
  const [innerRadius, setInnerRadius] = useState(0);

  const [lineWidth, setLineWidth] = useState(1);

  const [fillStyle, setFillStyle] = useState('red');
  const [strokeStyle, setStrokeStyle] = useState('blue');
  return (
    <>
      <div>
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

      <div>
        <label> radius: </label>
        <input
          type="range"
          value={radius}
          min={50}
          max={100}
          onChange={(evt) => setRadius(Number(evt.target.value))}
        />
      </div>
      <div>
        <label> innerRadius: </label>
        <input
          type="range"
          value={innerRadius}
          min={0}
          max={100}
          onChange={(evt) => setInnerRadius(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={(evt) => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Circle
          x={x}
          y={y}
          radius={radius}
          fillStyle={fillStyle}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={0}
        />
        <Circle
          x={100}
          y={100}
          radius={100}
          fillStyle={fillStyle}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={1}
          innerRadius={innerRadius}
        />
        <Circle
          x={300}
          y={300}
          radius={100}
          fillStyle={fillStyle}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={2}
        />
        <Circle
          x={200}
          y={100}
          radius={100}
          fillStyle={fillStyle}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          startAngle={0}
          endAngle={60}
          border={2}
          innerRadius={innerRadius}
        />

        <Circle
          x={400}
          y={300}
          radius={50}
          fillStyle={'black'}
          strokeStyle={strokeStyle}
          lineWidth={lineWidth}
          border={1}
          startAngle={0}
          endAngle={60}
          innerRadius={innerRadius}
        />
      </Stage>
    </>
  );
};

export default Index;
