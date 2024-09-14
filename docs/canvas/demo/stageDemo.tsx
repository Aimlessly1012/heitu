import { Circle, Line, Rect, Stage, Text, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);
  const _stage = new Stage();
  const _text = new Text({ content: 'xixinia ', index: 999 });
  const _rect = new Rect({ fillStyle: '#2c7aff' });
  const _line = new Line();
  const _line1 = new Line({
    start: { x: 90, y: 90 },
    points: [70, 70],
    end: { x: 190, y: 90 },
    strokeStyle: 'red',
    lineWidth: 3,
    smooth: true,
  });
  const _line2 = new Line({
    start: { x: 100, y: 100 },
    points: [70, 70, 50, 50],
    end: { x: 300, y: 150 },
    strokeStyle: 'blue',
    lineWidth: 2,
    smooth: true,
  });
  const _rect2 = new Rect({
    fillStyle: 'pink',
    x: 300,
    y: 300,
    width: 100,
    height: 100,
  });
  const _circle1 = new Circle({
    x: 100,
    y: 150,
    radius: 50,
    strokeStyle: 'blue',
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
    startAngle: 200,
    endAngle: 270,
  });
  const _circle2 = new Circle({
    x: 200,
    y: 200,
    radius: 50,
    strokeStyle: 'blue',
    lineWidth: 3,
    border: 1,
    innerRadius: 0,
    startAngle: 0,
    endAngle: 90,
  });
  const _circle3 = new Circle({
    x: 300,
    y: 300,
    radius: 50,
    strokeStyle: 'blue',
    // fillStyle: 'orange',
    lineWidth: 2,
    border: 2,
    innerRadius: 0,
    startAngle: 0,
    endAngle: 60,
  });
  _text.on('click', (e) => {
    console.log(123123);
  });
  _text.off('click', (e) => {
    console.log(123123);
  });
  _stage.add(
    _text,
    _rect,
    _rect2,
    // _rect2,
    // _line,
    // _line1,
    // _line2,
    // _circle1,
    // _circle2,
    // _circle3,
  );

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  console.log(_stage);
  return <div ref={container}></div>;
};

export default StageDemo;
