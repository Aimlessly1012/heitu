// import { Circle, Group, Rect, Stage } from 'heitu';
// import React from 'react';

// const Index = () => {
//   return (
//     <>
//       <Stage>
//         <Group>
//           <Circle
//             x={50}
//             y={50}
//             radius={10}
//             fillStyle={'blue'}
//             border={1}
//             cursor={'e-resize'}
//           />
//           <Rect
//             x={100}
//             y={100}
//             width={100}
//             height={100}
//             fillStyle={'pink'}
//             border={0}
//           />
//         </Group>
//       </Stage>
//     </>
//   );
// };

// export default Index;

import React, { useEffect, useRef, useState } from 'react';

const CanvasWithGroupedShapes = () => {
  const canvasRef = useRef(null);
  const [groups, setGroups] = useState([
    {
      id: 1,
      shapes: [
        { id: 1, x: 50, y: 50, width: 100, height: 100, color: 'red' },
        { id: 2, x: 160, y: 50, width: 100, height: 100, color: 'blue' },
      ],
    },
  ]);
  const [dragging, setDragging] = useState(false);
  const [draggedGroup, setDraggedGroup] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dpr = window.devicePixelRatio || 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    drawGroups(ctx, groups);
  }, [groups, dpr]);

  const drawGroups = (ctx, groups) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    groups.forEach((group) => {
      group.shapes.forEach((shape) => {
        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
      });
    });
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * dpr;
    const mouseY = (e.clientY - rect.top) * dpr;

    const group = groups.find((g) =>
      g.shapes.some(
        (shape) =>
          mouseX > shape.x &&
          mouseX < shape.x + shape.width &&
          mouseY > shape.y &&
          mouseY < shape.y + shape.height,
      ),
    );

    if (group) {
      setDragging(true);
      setDraggedGroup(group);
      const firstShape = group.shapes[0];
      setOffset({ x: mouseX - firstShape.x, y: mouseY - firstShape.y });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging && draggedGroup) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) * dpr;
      const mouseY = (e.clientY - rect.top) * dpr;

      const updatedGroups = groups.map((group) =>
        group.id === draggedGroup.id
          ? {
              ...group,
              shapes: group.shapes.map((shape) => ({
                ...shape,
                x: mouseX - offset.x + (shape.x - draggedGroup.shapes[0].x),
                y: mouseY - offset.y + (shape.y - draggedGroup.shapes[0].y),
              })),
            }
          : group,
      );
      setGroups(updatedGroups);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDraggedGroup(null);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ border: '1px solid black', width: '800px', height: '600px' }}
    />
  );
};

export default CanvasWithGroupedShapes;
