---
group:
  title: Canvas-Element
  order: 1

toc: content
order: 5
---


# line



## 描述
## 演示
  ```tsx
  import React, { useRef, useEffect } from 'react';

function BezierCurve({ width = 500, height = 300 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 清除画布
    ctx.clearRect(0, 0, width, height);

    // 创建 Path2D 对象
    const path = new Path2D();

    // 定义贝塞尔曲线的起点、控制点和终点
    const startX = 50;
    const startY = 250;
    const controlX1 = 150;
    const controlY1 = 50;  // 控制点1 (用于二次贝塞尔曲线)
    const controlX2 = 350;
    const controlY2 = 50;  // 控制点2 (用于三次贝塞尔曲线)
    const endX = 450;
    const endY = 250;

    // 绘制三次贝塞尔曲线
    path.moveTo(startX, startY);
    path.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);

    // 设置样式并绘制路径
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.stroke(path);

    // 绘制控制点和线
    ctx.fillStyle = 'red';
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;

    // 起点
    ctx.beginPath();
    ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
    ctx.fill();

    // 控制点1
    ctx.beginPath();
    ctx.arc(controlX1, controlY1, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(startX, startY);
    ctx.lineTo(controlX1, controlY1);
    ctx.stroke();

    // 控制点2
    ctx.beginPath();
    ctx.arc(controlX2, controlY2, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(endX, endY);
    ctx.lineTo(controlX2, controlY2);
    ctx.stroke();

    // 终点
    ctx.beginPath();
    ctx.arc(endX, endY, 5, 0, 2 * Math.PI);
    ctx.fill();
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default BezierCurve;
  ```

## API