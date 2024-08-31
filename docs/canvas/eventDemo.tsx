import { Circle, Rect, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [log, setLog] = useState('');
  return (
    <>
      <Stage>
        <Circle
          x={400}
          y={200}
          radius={100}
          fillStyle={'blue'}
          border={1}
          onclick={() => {
            setLog('click');
          }}
          // onmouseenter={() => {
          //   setLog('mouseenter');
          // }}
          // onmouseleave={() => {
          //   setLog('mouseleave');
          // }}
          // onmousedown={() => {
          //   setLog('mousedown');
          // }}
        />
         <Circle
          x={50}
          y={50}
          radius={10}
          fillStyle={'blue'}
          border={1}
          onclick={() => {
            setLog('click');
          }}
          // onmouseenter={() => {
          //   setLog('mouseenter');
          // }}
          // onmouseleave={() => {
          //   setLog('mouseleave');
          // }}
          // onmousedown={() => {
          //   setLog('mousedown');
          // }}
        />
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fillStyle={'pink'}
          border={0}
          onclick={() => {
            setLog('click');
          }}
          // onmouseenter={() => {
          //   setLog('mouseenter');
          // }}
          // onmouseleave={() => {
          //   setLog('mouseleave');
          // }}
          // onmousedown={() => {
          //   setLog('mousedown');
          // }}
        />
      </Stage>
    </>
  );
};

export default Index;

// import React, { useEffect, useRef, useState } from 'react';

// function DraggableCanvasWithPath2D() {
//   const canvasRef = useRef(null);
//   const [shapes, setShapes] = useState([
//     {
//       path: new Path2D(),
//       x: 100,
//       y: 100,
//       radius: 50,
//       type: 'circle',
//       color: 'red',
//     },
//     {
//       path: new Path2D(),
//       x: 250,
//       y: 100,
//       width: 100,
//       height: 60,
//       type: 'rect',
//       color: 'blue',
//     },
//   ]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // 初始化图形的 Path2D
//     const initializePaths = () => {
//       shapes.forEach((shape) => {
//         const { path, x, y, radius, width, height, type } = shape;
//         // path.reset(); // 清除路径
//         if (type === 'circle') {
//           path.arc(x, y, radius, 0, Math.PI * 2);
//         } else if (type === 'rect') {
//           path.rect(x, y, width, height);
//         }
//       });
//     };

//     initializePaths();

//     // 绘制所有图形
//     const drawShapes = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       shapes.forEach((shape) => {
//         ctx.fillStyle = shape.color;
//         ctx.fill(shape.path);
//       });
//     };

//     drawShapes();

//     const handleMouseDown = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = event.clientX - rect.left;
//       const mouseY = event.clientY - rect.top;

//       // 检查是否点击到某个图形
//       for (let i = 0; i < shapes.length; i++) {
//         const shape = shapes[i];
//         if (ctx.isPointInPath(shape.path, mouseX, mouseY)) {
//           console.log(123123);
//           return;
//         }
//       }
//     };

//     // 添加事件监听器
//     canvas.addEventListener('click', handleMouseDown);

//     // 清除事件监听器
//     return () => {
//       canvas.removeEventListener('click', handleMouseDown);
//     };
//   }, [shapes]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={500}
//       height={300}
//       style={{ border: '1px solid black' }}
//     />
//   );
// }

// export default DraggableCanvasWithPath2D;
