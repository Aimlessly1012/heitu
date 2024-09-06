import React, { useEffect, useRef } from 'react';

const LineChartWithAxesAndTicks = () => {
  const data = [0.1, 0.5, 0.8, 0.4, 0.7, 0.2, 0.9]; // 数据值在 [0, 1] 范围内

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 设置背景
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 500, 500);

    // 设置坐标轴
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(30, 10);
    ctx.lineTo(30, 460);
    ctx.lineTo(490, 460);
    ctx.stroke();

    // 设置 y 轴标签
    ctx.fillStyle = 'black';
    for (var i = 0; i < 5; i++) {
      ctx.fillText((4 - i) * 20 + '', 4, i * 100 + 60);
      ctx.beginPath();
      ctx.moveTo(25, i * 100 + 60);
      ctx.lineTo(30, i * 100 + 60);
      ctx.stroke();
    }

    // 设置 x 轴标签
    for (var i = 0; i < 5; i++) {
      ctx.fillText(data[i], 60 + i * 100, 475);
    }

    ctx.font = 'bold 30px serif';
    ctx.fillText('柱状图', 200, 30);
  }, [data]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ background: '#fff' }}
    />
  );
};

export default LineChartWithAxesAndTicks;
