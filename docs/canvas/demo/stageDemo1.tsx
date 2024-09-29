import { Animate, Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);

  const _stage = new Stage();

  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
  });
  const _circle2 = new Circle({
    x: 200,
    y: 50,
    radius: 20,
    strokeStyle: 'blue',
    fillStyle: 'orange',
    lineWidth: 1,
    border: 0,
  });

  _stage.add(_circle1, _circle2);

 
  const onclick = () => {
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const x = _circle1.x;
    const y = _circle1.y;
    let curX = _circle1.x;
    let curY = _circle1.y;
    const onUpdate = (_, elapsedTimeRatio) => {
      curX = (300 - curX) * elapsedTimeRatio;
      curY = (400 - curY) * elapsedTimeRatio;
      _circle1.attr({ x: x + curX, y: y + curY });
    };
    ani.pushQueue(onUpdate);
  };

  _circle1.on('click', onclick);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
    const ani = new Animate(
      { value: 0 },
      { value: 3 },
      { duration: 10000, easing: 'quadraticInOut' },
    );
    ani.start();
    const radius = _circle2.radius;
    let curRadius = _circle2.radius;

    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;

      _circle2.attr({ radius: radius + curRadius });
    };
    ani.pushQueue(onUpdate);
    return () => ani.stop();
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());

  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;

// import React, { useEffect, useRef, useState } from 'react';

// const CanvasAnimation = () => {
//   const canvasRef = useRef(null);
//   const [position, setPosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     let animationFrameId;

//     const draw = () => {
//       // 清除画布
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // 绘制一个简单的圆
//       context.beginPath();
//       context.arc(position.x, position.y, 20, 0, 2 * Math.PI);
//       context.fillStyle = 'blue';
//       context.fill();
//       context.closePath();

//       // 更新位置
//       setPosition((prev) => ({
//         x: prev.x + 2,
//         y: prev.y + 2,
//       }));

//       // 递归调用以更新下一帧
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     // 启动动画
//     animationFrameId = requestAnimationFrame(draw);

//     // 在组件卸载时取消动画
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [position]);

//   return <canvas ref={canvasRef} width={400} height={400} />;
// };

// export default CanvasAnimation;
