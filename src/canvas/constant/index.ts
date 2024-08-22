// import { IShape } from '../type';
export type EventType = 'mouseleave' | 'mouseenter' | 'mousemove' | 'mousedown' | 'mouseup' | 'click'
export type OnEventType = `on${EventType}`

export const dpr = window.devicePixelRatio;
export type EventParameter = {
  target: any;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  nativeEvent?: MouseEvent;
};
export const eventStageList: OnEventType[] = [
  'onmouseleave',
  'onmouseenter',
  'onmousemove',
  'onmousedown',
  'onmouseup',
  'onclick',
];
