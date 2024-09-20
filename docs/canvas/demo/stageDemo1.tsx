import React, { useEffect, useRef } from 'react';

const MovingCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let x = 50;
    let y = 100;
    let dx = 2;
    let dy = 2;
    const radius = 30;

    const draw = () => {
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 画圆
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();

      // 更新圆的位置
      x += dx;
      y += dy;

      // 碰撞检测
      if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
      }
      if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
      }

      // 调用下一帧动画
      requestAnimationFrame(draw);
    };

    // 启动动画
    draw();

    // 清理动画，组件卸载时停止
    return () => cancelAnimationFrame(draw);

  }, []);

  return <canvas ref={canvasRef} width={500} height={500} style={{ backgroundColor: '#f0f0f0' }} />;
};

export default MovingCircle;