import { Sector, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(200);
  const [y, setY] = useState(100);
  const [startAngle, setStartAngle] = useState(30);
  const [endAngle, setEndAngle] = useState(90);

  const [radius, setRadius] = useState(100);

  const [fillStyle, setFillStyle] = useState('red');
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
        <label>startAngle: </label>
        <input
          type="range"
          value={startAngle}
          min={0}
          max={360}
          onChange={(evt) => {
            setStartAngle(Number(evt.target.value))
          }}
        />
      </div>
      <div>
        <label>endAngle: </label>
        <input
          type="range"
          value={endAngle}
          min={0}
          max={360}
          onChange={(evt) => {
              setEndAngle(Number(evt.target.value));
          }}
        />
      </div>

      <div>
        <label> x: </label>
        <input
          type="range"
          value={x}
          min={200}
          max={250}
          onChange={(evt) => setX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> y: </label>
        <input
          type="range"
          value={y}
          min={100}
          max={150}
          onChange={(evt) => setY(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> radius: </label>
        <input
          type="range"
          value={radius}
          min={100}
          max={150}
          onChange={(evt) => setRadius(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Sector
          x={x}
          y={y}
          radius={radius}
          fillStyle={fillStyle}
          startAngle={startAngle}
          endAngle={endAngle}
        />
      </Stage>
    </div>
  );
};

export default Index;
