// import { Line, Text } from 'heitu/canvas';
// import Node from 'heitu/canvas/core/shapes/node';

class Coordinate {
  // xAxis: {
  //   data: string[];
  //   boundaryGap: boolean;
  // };
  // series: { data: number[] }[];
  // xLine: Line | null;
  // yLine: Line | null;
  // xText: Text[] | [];
  // yText: Text[] | [];
  // yScale: Line[] | [];
  // xScale: Line[] | [];
  // xScaleLine: Line[] | [];
  // yScaleLine: Line[] | [];
  // constructor(options: any) {
  //   super();
  //   this.series = options.series;
  //   this.xAxis = options.xAxis;
  //   this.xLine = null;
  //   this.yLine = null;
  //   this.xText = [];
  //   this.yText = [];
  //   this.yScale = [];
  //   this.xScale = [];
  //   this.xScaleLine = [];
  //   this.yScaleLine = [];
  // }
  // 4. 动态计算刻度数量
  // calculateTickCount(range: number) {
  //   if (range <= 100) return 4; // 小范围，4个刻度
  //   if (range <= 1000) return 5; // 中等范围，5个刻度
  //   if (range <= 5000) return 6; // 较大范围，6个刻度
  //   return 8; // 更大范围，8个刻度
  // }
  // draw(ctx: CanvasRenderingContext2D) {
  // const padding = 50;
  // if (!this.parent?.canvas) return;
  // const stageWidth = this.parent.canvas.canvas.offsetWidth;
  // const stageHeight = this.parent.canvas.canvas.offsetHeight;
  // this.yLine = new Line({
  //   start: { x: padding, y: padding },
  //   end: { x: padding, y: stageHeight - padding },
  //   strokeStyle: '#b5b5b5',
  //   lineWidth: 1,
  // });
  // // X 轴 横线
  // this.xLine = new Line({
  //   start: { x: padding, y: stageHeight - padding },
  //   end: { x: stageWidth - padding, y: stageHeight - padding },
  //   strokeStyle: '#f4f4f4',
  //   lineWidth: 1,
  //   lineDash: [5, 5],
  // });
  // const text = new Text({
  //   content: `0`,
  //   x: 10,
  //   y: stageHeight - padding - 4,
  //   fontSize: 8,
  //   // textAlign: 'center',
  //   // textBaseline: 'middle',
  // });
  // text.draw(ctx);
  // // this.xAxis.data.length
  // const width = stageWidth - padding * 2;
  // const height = stageHeight - padding * 2;
  // // 绘制X轴
  // this.xAxis.data.forEach((gapX, index) => {
  //   const gapXWidth = ((width - 40) / this.xAxis.data.length) * (index + 1);
  //   if (this.xAxis.boundaryGap) {
  //     const gapXLine = new Line({
  //       start: { x: gapXWidth + padding, y: stageHeight - padding },
  //       end: { x: gapXWidth + padding, y: stageHeight - padding + 3 },
  //       strokeStyle: '#b5b5b5',
  //       lineWidth: 1,
  //     });
  //     this.xScale.push(gapXLine);
  //     gapXLine.draw(ctx);
  //   }
  //   const line1 = new Line({
  //     start: { x: gapXWidth + padding, y: padding },
  //     end: { x: gapXWidth + padding, y: stageHeight - padding },
  //     strokeStyle: '#b5b5b5',
  //     lineWidth: 1,
  //   });
  //   this.xScaleLine.push(line1);
  //   const gapXName = new Text({
  //     content: gapX,
  //     x: gapXWidth + padding - 4,
  //     y: stageHeight - padding + 4,
  //     fontSize: 8,
  //     // textAlign: 'center',
  //     // textBaseline: 'middle',
  //   });
  //   this.xText.push(gapXName);
  //   // line1.draw(ctx);
  //   gapXName.draw(ctx);
  // });
  // // Y轴的刻度范围
  // // 1.聚合所有数据
  // let allData: number[] = [];
  // this.series.forEach((series) => {
  //   allData = [...allData, ...series.data];
  // });
  // // 排序所有数据
  // allData.sort((a, b) => a - b);
  // // 找到最大值
  // const maxValue = Math.max(...allData);
  // // 找到最小值
  // // const minValue = Math.min(...allData);
  // // const tempGap = (maxValue - minValue) / allData.length;
  // const roundedUpToHundred = Math.ceil(maxValue / 100) * 100;
  // const tickCount = this.calculateTickCount(roundedUpToHundred);
  // for (let i = 0; i <= tickCount; i++) {
  //   const line = new Line({
  //     start: { x: padding, y: ((stageHeight - padding * 2) / 6) * i },
  //     end: {
  //       x: stageWidth - padding,
  //       y: (height / 6) * i,
  //     },
  //     strokeStyle: '#b5b5b5',
  //     lineWidth: 1,
  //     lineDash: [5, 5],
  //   });
  //   this.yScale.push(line);
  //   if (i > 0) {
  //     console.log(roundedUpToHundred, 'roundedUpToHundred');
  //     const text = new Text({
  //       content: `${roundedUpToHundred / i}`,
  //       x: 10,
  //       y: (height / 6) * i - 4,
  //       fontSize: 8,
  //       // textAlign: 'center',
  //       // textBaseline: 'middle',
  //     });
  //     this.yText.push(text);
  //     text.draw(ctx);
  //   }
  //   line.draw(ctx);
  // }
  // this.xLine.draw(ctx);
  // console.log(this, 'this.parent');
  // // this.yLine.draw(ctx);
  // }
}
export default Coordinate;
