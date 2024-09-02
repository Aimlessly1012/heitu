import { Circle, Rect, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [log, setLog] = useState('');
  return (
    <>
      {log}
      <Stage>
        <Circle
          x={400}
          y={200}
          radius={100}
          fillStyle={'blue'}
          border={0}
          cursor={'pointer'}
          onClick={() => {
            setLog('blue Circle click');
          }}
          onMouseEnter={() => {
            setLog('blue Circle mouseenter');
          }}
          onMouseLeave={() => {
            setLog('blue Circle mouseleave');
          }}
          onMouseDown={() => {
            setLog('blue Circle mousedown');
          }}
        />
        <Circle
          x={50}
          y={50}
          radius={10}
          fillStyle={'blue'}
          border={1}
          cursor={'e-resize'}
          onClick={() => {
            setLog('border Circle click');
          }}
          onMouseEnter={() => {
            setLog('border Circle mouseenter');
          }}
          onMouseLeave={() => {
            setLog('border Circle mouseleave');
          }}
          onMouseDown={() => {
            setLog('border Circle mousedown');
          }}
        />
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fillStyle={'pink'}
          border={0}
          onClick={() => {
            setLog('pink Rect click');
          }}
          onMouseEnter={() => {
            setLog('pink Rect mouseenter');
          }}
          onMouseLeave={() => {
            setLog('pink Rect mouseleave');
          }}
          onMouseDown={() => {
            setLog('pink Rect mousedown');
          }}
        />
      </Stage>
    </>
  );
};

export default Index;