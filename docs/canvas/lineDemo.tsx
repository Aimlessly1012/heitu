import { Line, Stage, Text } from 'heitu';
import React from 'react';

const Index = () => {
  return (
    <div>
      <Stage>
        <Text content={'折线'} x={10} y={10} />
        <Line
          start={{ x: 0, y: 0 }}
          end={{ x: 340, y: 330 }}
          points={[100, 120, 150, 130, 225, 235]}
        />
        <Text content={'二次贝塞尔曲线'} x={90} y={90}  fillStyle={'red'}/>
        <Line
          start={{ x: 90, y: 90 }}
          points={[70, 70]}
          end={{ x: 190, y: 90 }}
          strokeStyle={'red'}
          lineWidth={3}
          smooth
        />
        <Text content={'三次贝塞尔曲线'} x={200} y={200}  fillStyle={'blue'}/>
        <Line
          start={{ x: 200, y: 200 }}
          points={[70, 70, 50, 50]}
          end={{ x: 450, y: 300 }}
          strokeStyle={'blue'}
          lineWidth={3}
          smooth
        />
      </Stage>
    </div>
  );
};

export default Index;
