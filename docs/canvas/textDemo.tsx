import { Stage, Text } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [content, setContent] = useState('heitu');

  const [lineWidth, setLineWidth] = useState(1);

  const [fontSize, setFontSize] = useState(14);
  const [fillStyle, setFillStyle] = useState('red');

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
        <label> fontSize: </label>
        <input
          type="range"
          value={fontSize}
          min={14}
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

      <div>
        <label> Content: </label>
        <input
          type="text"
          value={content}
          min={1}
          max={10}
          onChange={(evt) => setContent(evt.target.value)}
        />
      </div>

      <Stage>
        <Text
          x={x}
          y={y}
          fontSize={fontSize}
          content={content}
          fillStyle={fillStyle}
        />
        <Text
          x={10}
          y={10}
          fontSize={fontSize}
          content={content}
          fillStyle={"black"}
        />
        <Text
          x={60}
          y={60}
          fontSize={30}
          content={content}
          fillStyle={'blue'}
        />
      </Stage>
    </>
  );
};

export default Index;
