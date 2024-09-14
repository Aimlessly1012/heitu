import Stage from '../stage';

export type ICoord = { x: number; y: number };
type NodeEventMap = GlobalEventHandlersEventMap & {
  [index: string]: any;
};

export type EventListener<This, EventType> = (
  this: This,
  ev: EventObject<EventType, This>,
) => void;

export interface EventObject<EventType, This = Node> {
  type: string;
  target: Stage;
  evt: EventType;
  pointerId: number;
  currentTarget: This;
  cancelBubble: boolean;
  child?: Node;
}

abstract class Node {
  eventListeners: {
    [index: string]: Array<{ name: string; handler: any }>;
  } = {};
  on<K extends keyof NodeEventMap>(
    evtStr: K,
    handler: EventListener<this, NodeEventMap[K]>,
  ) {
    let events = (evtStr as string).split(' '),
      len = events.length,
      n,
      event,
      parts,
      baseEvent,
      name;

    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1] || '';

      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }

      this.eventListeners[baseEvent].push({
        name: name,
        handler: handler,
      });
    }
    console.log(this.eventListeners, 'allEventListenersallEventListeners');
    return this;
  }
  _off(type, name?, callback?) {
    let evtListeners = this.eventListeners[type],
      i,
      evtName,
      handler;

    for (i = 0; i < evtListeners.length; i++) {
      evtName = evtListeners[i].name;
      handler = evtListeners[i].handler;

      // the following two conditions must be true in order to remove a handler:
      // 1) the current event name cannot be konva unless the event name is konva
      //    this enables developers to force remove a konva specific listener for whatever reason
      // 2) an event name is not specified, or if one is specified, it matches the current event name
      if (
        (evtName !== 'konva' || name === 'konva') &&
        (!name || evtName === name) &&
        (!callback || callback === handler)
      ) {
        evtListeners.splice(i, 1);
        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }
        i--;
      }
    }
  }
  off(evtStr?: string, callback?: Function) {
    let events = (evtStr || '').split(' '),
      len = events.length,
      n,
      t,
      event,
      parts,
      baseEvent,
      name;
    // console.log(evtStr, 'evtStr');
    // if (!evtStr) {
    //   // remove all events
    //   for (t in this.eventListeners) {
    //     console.log(t);
    //     // this._off(t);
    //   }
    // }
    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1];

      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          // this._off(baseEvent, name, callback);
        }
      } else {
        for (t in this.eventListeners) {
          // this._off(t, name, callback);
        }
      }
    }
    return this;
  }
}
console.log(123123123);
export default Node;
