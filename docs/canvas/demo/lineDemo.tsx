import { Line, Stage, Text } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [startX, setStartX] = useState(100);
  const [startY, setStartY] = useState(100);

  const [endX, setEndX] = useState(300);
  const [endY, setEndY] = useState(150);
  return (
    <div>
      <div>
        <label> startX: </label>
        <input
          type="range"
          value={startX}
          min={100}
          max={150}
          onChange={(evt) => setStartX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> startY: </label>
        <input
          type="range"
          value={startY}
          min={100}
          max={350}
          onChange={(evt) => setStartY(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> endX: </label>
        <input
          type="range"
          value={endX}
          min={300}
          max={450}
          onChange={(evt) => setEndX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> endY: </label>
        <input
          type="range"
          value={endY}
          min={150}
          max={350}
          onChange={(evt) => setEndY(Number(evt.target.value))}
        />
      </div>
      <Stage>
        <Text content={'折线'} x={10} y={10} />
        <Line
          start={{ x: 0, y: 0 }}
          end={{ x: 340, y: 330 }}
          points={[100, 120, 150, 130, 225, 235]}
        />
        <Text content={'二次贝塞尔曲线'} x={90} y={90} fillStyle={'red'} />
        <Line
          start={{ x: 90, y: 90 }}
          points={[70, 70]}
          end={{ x: 190, y: 90 }}
          strokeStyle={'red'}
          lineWidth={3}
          smooth
        />
        <Text content={'三次贝塞尔曲线'} x={200} y={200} fillStyle={'blue'} />
        <Line
          start={{ x: startX, y: startY }}
          points={[70, 70, 50, 50]}
          end={{ x: endX, y: endY }}
          strokeStyle={'blue'}
          lineWidth={3}
          smooth
        />
      </Stage>
    </div>
  );
};

export default Index;
