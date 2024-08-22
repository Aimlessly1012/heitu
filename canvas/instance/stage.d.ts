interface IOption {
    container: HTMLElement;
}
export declare class Stage {
    canvasElement: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    children: any[];
    private isAsyncRenderTask;
    constructor();
    mount(option: IOption): void;
    appendChild(...args: any[]): void;
    renderStage(): void;
    private addStageEventListener;
}
export {};
