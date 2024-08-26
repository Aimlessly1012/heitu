import { Stage, Trapezoid } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(250);
  const [y, setY] = useState(50);

  const [shortLength, setShortLength] = useState(100);

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
        <label> x: </label>
        <input
          type="range"
          value={x}
          min={250}
          max={450}
          onChange={(evt) => setX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> y: </label>
        <input
          type="range"
          value={y}
          min={50}
          max={180}
          onChange={(evt) => setY(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> shortLength: </label>
        <input
          type="range"
          value={shortLength}
          min={100}
          max={150}
          onChange={(evt) => setShortLength(Number(evt.target.value))}
        />
      </div>
      <Stage>
        <Trapezoid
          x={x}
          y={y}
          width={200}
          height={400}
          shortLength={shortLength}
          fillStyle={fillStyle}
        />
      </Stage>
    </div>
  );
};

export default Index;
