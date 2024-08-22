export type EventType = 'mouseleave' | 'mouseenter' | 'mousemove' | 'mousedown' | 'mouseup' | 'click';
export type OnEventType = `on${EventType}`;
export declare const dpr: number;
export type EventParameter = {
    target: any;
    x: number;
    y: number;
    dx?: number;
    dy?: number;
    nativeEvent?: MouseEvent;
};
export declare const eventStageList: OnEventType[];
