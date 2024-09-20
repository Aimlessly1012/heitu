import {
  Circle,
  Custom,
  Line,
  Rect,
  Stage,
  Text,
  useResizeObserver,
} from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);
  // 创建 Path2D 对象
  const heart = new Path2D();

  // 绘制爱心
  heart.moveTo(200, 240); // 起始点
  heart.bezierCurveTo(200, 200, 120, 150, 120, 200); // 左侧上半部分
  heart.bezierCurveTo(120, 280, 200, 300, 200, 340); // 左侧下半部分
  heart.bezierCurveTo(200, 300, 280, 280, 280, 200); // 右侧下半部分
  heart.bezierCurveTo(280, 150, 200, 200, 200, 240); // 右侧上半部分
  const _custom = new Custom({ path2D: heart });
  const _stage = new Stage();
  const _text = new Text({
    content: 'xixinia',
    index: 999,
    draggable: true,
    x: 250,
    y: 250,
  });
  const _rect = new Rect({
    fillStyle: '#2c7aff',
    draggable: true,
    x: 200,
    y: 200,
  });
  const _rect2 = new Rect({
    fillStyle: 'pink',
    x: 250,
    y: 250,
    width: 100,
    height: 100,
    draggable: true,
  });
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
    x: 100,
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
  _stage.add(
    _custom,
    _text,
    _rect,
    _rect2,
    _rect2,
    _line,
    _line1,
    _line2,
    _circle1,
    _circle2,
    _circle3,
  );
  const aa = (e) => {
    console.log('aa');
  };
  const bb = (e) => {
    console.log('bb');
  };
  const cc = (e) => {
    console.log('cc');
  };
  const dd = (e) => {
    console.log('dd');
  };
  const ee = (e) => {
    console.log('ee');
  };
  const ff = (e) => {
    console.log('ff');
  };
  const gg = (e) => {
    console.log('gg');
  };
  const hh = (e) => {
    console.log('hh');
  };
  // _text.on('mousedown', aa);
  // _rect.on('mousedown', aa);
  // _rect.on('mousemove', bb);
  // _rect.on('mouseleave', cc);
  // _rect.on('mouseup', dd);
  // _rect.on('mouseenter', ee);
  // _rect.on('mouseover', ff);
  // _rect.on('contextmenu', gg);
  // _rect.on('wheel', hh);

  // _text.off('mouseenter', aa);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  console.log(_stage);
  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;
