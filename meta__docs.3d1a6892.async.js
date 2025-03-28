"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{94294:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(55832),C={"docs-canvas-animation-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u,z;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=A.sent,f=x.Circle,c=x.Stage,v=x.useResizeObserver,I=x.Animate,A.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return s=A.sent,g=s.default,u=s.useLayoutEffect,z=s.useRef,A.abrupt("return",{default:function(){var O=new c,L=z(null),b=new f({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2});O.add(b);var m=function(){var N=new I({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});N.start();var X=b.x,F=b.y,j=b.x,P=b.y,ne=b.radius,se=b.radius,ie=function(Pe,ae){se=(ne-se)*ae,j=(300-j)*ae,P=(400-P)*ae,b.attr({x:X+j,y:F+P,radius:ne-se})};N.pushQueue(ie)};return b.on("click",m),u(function(){O.buildContentDOM({container:L.current,backgroundColor:"#fff"});var Y=new I({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});Y.start();var N=b.radius,X=b.radius,F=function(P,ne){X=(N-X)*ne,b.attr({radius:N+X})};return Y.pushQueue(F),function(){return Y.stop()}},[]),v(L,function(){return O._resizeDOM()}),g.createElement(g.Fragment,null,g.createElement("div",{ref:L}))}});case 14:case"end":return A.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-animation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });

  _stage.add(_circle);
  const onclick = () => {
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const x = _circle.x;
    const y = _circle.y;
    let curX = _circle.x;
    let curY = _circle.y;
    const radius = _circle.radius;
    let curRadius = _circle.radius;
    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;
      curX = (300 - curX) * elapsedTimeRatio;
      curY = (400 - curY) * elapsedTimeRatio;
      _circle.attr({ x: x + curX, y: y + curY, radius: radius - curRadius });
    };
    ani.pushQueue(onUpdate);
  };
  _circle.on('click', onclick);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const radius = _circle.radius;
    let curRadius = _circle.radius;

    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;

      _circle.attr({ radius: radius + curRadius });
    };
    ani.pushQueue(onUpdate);
    return () => ani.stop();
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      <div ref={container}></div>
    </>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},28835:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(66397),C={"docs-canvas-circle-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Circle,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=new c,O=u(null),L=new f({x:100,y:150,radius:50,strokeStyle:"blue",fillStyle:"pink",lineWidth:1,border:0,startAngle:200,endAngle:270}),b=new f({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});return B.add(L,b),g(function(){B.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),v(O,function(){return B._resizeDOM()}),s.createElement("div",{ref:O})}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-circle-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _circle = new Circle({
    x: 100,
    y: 150,
    radius: 50,
    strokeStyle: 'blue',
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
    startAngle: 200,
    endAngle: 270,
  });
  const _circle1 = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    strokeStyle: 'pink',
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });
  _stage.add(_circle, _circle1);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},80148:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(23629),C={"docs-canvas-custom-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Custom,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=new c,O=u(null),L=new Path2D;L.moveTo(200,240),L.bezierCurveTo(200,200,120,150,120,200),L.bezierCurveTo(120,280,200,300,200,340),L.bezierCurveTo(200,300,280,280,280,200),L.bezierCurveTo(280,150,200,200,200,240);var b=new f({path2D:L});return B.add(b),g(function(){B.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),v(O,function(){return B._resizeDOM()}),s.createElement("div",{ref:O})}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-custom-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Custom, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  // \u521B\u5EFA Path2D \u5BF9\u8C61
  const heart = new Path2D();

  // \u7ED8\u5236\u7231\u5FC3
  heart.moveTo(200, 240); // \u8D77\u59CB\u70B9
  heart.bezierCurveTo(200, 200, 120, 150, 120, 200); // \u5DE6\u4FA7\u4E0A\u534A\u90E8\u5206
  heart.bezierCurveTo(120, 280, 200, 300, 200, 340); // \u5DE6\u4FA7\u4E0B\u534A\u90E8\u5206
  heart.bezierCurveTo(200, 300, 280, 280, 280, 200); // \u53F3\u4FA7\u4E0B\u534A\u90E8\u5206
  heart.bezierCurveTo(280, 150, 200, 200, 200, 240); // \u53F3\u4FA7\u4E0A\u534A\u90E8\u5206
  const _custom = new Custom({ path2D: heart });
  _stage.add(_custom);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},70544:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(49011),x={"docs-canvas-drag-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u,z,_,A;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=O.sent,v=c.Circle,I=c.Stage,s=c.useResizeObserver,O.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=O.sent,u=g.default,z=g.useLayoutEffect,_=g.useRef,A=g.useState,O.abrupt("return",{default:function(){var b=A({x:0,y:0}),m=D()(b,2),Y=m[0],N=m[1],X=new I,F=_(null),j=new v({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2,draggable:!0}),P=new v({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:2,border:2,draggable:function(se,ie){N({x:ie.x,y:ie.y})}});return X.add(j,P),z(function(){X.buildContentDOM({container:F.current,backgroundColor:"#fff"})},[]),s(F,function(){return X._resizeDOM()}),u.createElement(u.Fragment,null,Y.x,",",Y.y,u.createElement("div",{ref:F}))}});case 14:case"end":return O.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-canvas-drag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
    draggable: true,
  });
  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 2,
    border: 2,
    draggable: (e, node) => {
      setXY({ x: node.x, y: node.y });
    },
  });
  _stage.add(_circle, _circle1);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      {xy.x},{xy.y}
      <div ref={container}></div>
    </>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},11293:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(50138),x={"docs-canvas-event-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u,z,_,A;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=O.sent,v=c.Circle,I=c.Stage,s=c.useResizeObserver,O.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=O.sent,u=g.default,z=g.useLayoutEffect,_=g.useRef,A=g.useState,O.abrupt("return",{default:function(){var b=A(""),m=D()(b,2),Y=m[0],N=m[1],X=new I,F=_(null),j=new v({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});X.add(j);var P=function(Ee){N("click")},ne=function(Ee){N("mousedown")},se=function(Ee){N("mousemove")},ie=function(Ee){N("mouseup")},pe=function(Ee){N("mouseenter")},Pe=function(Ee){N("contextmenu")};return j.on("click",P),j.on("mousedown",ne),j.on("mousemove",se),j.on("mouseup",ie),j.on("mouseenter",pe),j.on("contextmenu",Pe),z(function(){return X.buildContentDOM({container:F.current,backgroundColor:"#fff"}),function(){j.off("click",P),j.off("mousedown",ne),j.off("mousemove",se),j.off("mouseup",ie),j.off("mouseenter",pe),j.off("contextmenu",Pe)}},[]),s(F,function(){return X._resizeDOM()}),u.createElement(u.Fragment,null,Y,u.createElement("div",{ref:F}))}});case 14:case"end":return O.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-canvas-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const [eventName, setEventName] = useState('');
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle1 = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    strokeStyle: 'pink',
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });
  _stage.add(_circle1);
  const aa = (e) => {
    setEventName('click');
  };
  const bb = (e) => {
    setEventName('mousedown');
  };
  const cc = (e) => {
    setEventName('mousemove');
  };
  const dd = (e) => {
    setEventName('mouseup');
  };
  const ee = (e) => {
    setEventName('mouseenter');
  };
  const ff = (e) => {
    setEventName('contextmenu');
  };

  _circle1.on('click', aa);
  _circle1.on('mousedown', bb);
  _circle1.on('mousemove', cc);
  _circle1.on('mouseup', dd);
  _circle1.on('mouseenter', ee);
  _circle1.on('contextmenu', ff);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
    return () => {
      _circle1.off('click', aa);
      _circle1.off('mousedown', bb);
      _circle1.off('mousemove', cc);
      _circle1.off('mouseup', dd);
      _circle1.off('mouseenter', ee);
      _circle1.off('contextmenu', ff);
    };
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      {eventName}
      <div ref={container}></div>
    </>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},90564:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(52192),C={"docs-canvas-group-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u,z,_,A;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=O.sent,f=x.Group,c=x.Text,v=x.Circle,I=x.Rect,s=x.Stage,g=x.useResizeObserver,O.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return u=O.sent,z=u.default,_=u.useLayoutEffect,A=u.useRef,O.abrupt("return",{default:function(){var b=A(null),m=new s,Y=new c({content:"title",x:110,y:260,index:999}),N=new c({content:"name: test",x:110,y:280,index:999}),X=new f({}),F=new f({draggable:!0}),j=new v({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:1,border:0}),P=new I({fillStyle:"blue",x:150,y:100,width:100,height:100}),ne=new I({fillStyle:"rgba(255, 255, 255, 1)",x:100,y:250,width:200,height:100,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,radius:4});return X.add(j,P),F.add(ne,Y,N),m.add(X,F),_(function(){m.buildContentDOM({container:b.current,backgroundColor:"#fff"})},[]),g(b,function(){return m._resizeDOM()}),z.createElement(z.Fragment,null,z.createElement("div",{ref:b}))}});case 16:case"end":return O.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const container = useRef<HTMLElement | null>(null);

  const _stage = new Stage();
  const _text = new Text({
    content: 'title',
    x: 110,
    y: 260,
    index: 999,
  });
  const _text1 = new Text({
    content: 'name: test',
    x: 110,
    y: 280,
    index: 999,
  });
  const _group = new Group({});

  const _group1 = new Group({ draggable: true });
  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
  });
  const _rect = new Rect({
    fillStyle: 'blue',
    x: 150,
    y: 100,
    width: 100,
    height: 100,
  });
  const _rect1 = new Rect({
    fillStyle: 'rgba(255, 255, 255, 1)',
    x: 100,
    y: 250,
    width: 200,
    height: 100,
    shadowColor: 'rgba(0, 0, 0, 0.3)', // \u9634\u5F71\u989C\u8272
    shadowBlur: 50, // \u9634\u5F71\u6A21\u7CCA\u5EA6
    shadowOffsetX: 10, // \u9634\u5F71\u6C34\u5E73\u504F\u79FB
    shadowOffsetY: 10, // \u9634\u5F71\u5782\u76F4\u504F\u79FB
    radius: 4,
  });
  _group.add(_circle1, _rect);
  _group1.add(_rect1, _text, _text1);
  _stage.add(_group, _group1);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());

  return (
    <>
      <div ref={container}></div>
    </>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},81222:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(54197),C={"docs-canvas-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Custom,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=u(null),O=new c,L=new Path2D;L.moveTo(200,240),L.bezierCurveTo(200,200,120,150,120,200),L.bezierCurveTo(120,280,200,300,200,340),L.bezierCurveTo(200,300,280,280,280,200),L.bezierCurveTo(280,150,200,200,200,240);var b=new f({path2D:L,fillStyle:"pink",strokeStyle:"red"});return O.add(b),g(function(){O.buildContentDOM({container:B.current,backgroundColor:"#fff"})},[]),v(B,function(){return O._resizeDOM()}),s.createElement(s.Fragment,null,s.createElement("div",{ref:B}))}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Circle,
  Custom,
  Line,
  Rect,
  Stage,
  Text,
  useResizeObserver,
} from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const container = useRef<HTMLElement | null>(null);
  const _stage = new Stage();

  const heart = new Path2D();
  heart.moveTo(200, 240);
  heart.bezierCurveTo(200, 200, 120, 150, 120, 200);
  heart.bezierCurveTo(120, 280, 200, 300, 200, 340);
  heart.bezierCurveTo(200, 300, 280, 280, 280, 200);
  heart.bezierCurveTo(280, 150, 200, 200, 200, 240);
  const _custom = new Custom({
    path2D: heart,
    fillStyle: 'pink',
    strokeStyle: 'red',
  });
  _stage.add(_custom);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      <div ref={container}></div>
    </>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},31930:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(10372),C={"docs-canvas-line-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Line,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=new c,O=u(null),L=new f,b=new f({start:{x:90,y:90},points:[70,70],end:{x:190,y:90},strokeStyle:"red",lineWidth:3,smooth:!0}),m=new f({start:{x:100,y:100},points:[70,70,50,50],end:{x:300,y:150},strokeStyle:"blue",lineWidth:2,smooth:!0}),Y=new f({start:{x:300,y:350},end:{x:100,y:350},strokeStyle:"#eee",lineWidth:1,lineDash:[5,5]});return B.add(L,b,m,Y),g(function(){B.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),v(O,function(){return B._resizeDOM()}),s.createElement("div",{ref:O})}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-line-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Line, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _line = new Line();
  const _line1 = new Line({
    start: { x: 90, y: 90 },
    points: [70, 70],
    end: { x: 190, y: 90 },
    strokeStyle: 'red',
    lineWidth: 3,
    smooth: true,
  });
  const _line2 = new Line({
    start: { x: 100, y: 100 },
    points: [70, 70, 50, 50],
    end: { x: 300, y: 150 },
    strokeStyle: 'blue',
    lineWidth: 2,
    smooth: true,
  });

  const _line3 = new Line({
    start: { x: 300, y: 350 },
    end: { x: 100, y: 350 },
    strokeStyle: '#eee',
    lineWidth: 1,
    lineDash: [5, 5],
  });

  _stage.add(_line, _line1, _line2, _line3);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},98841:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(89131),C={"docs-canvas-rect-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Rect,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=new c,O=u(null),L=new f({fillStyle:"pink",x:250,y:100,width:100,height:100}),b=new f({shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,fillStyle:"blue",x:100,y:100,width:100,height:100,radius:5});return B.add(L,b),g(function(){B.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),v(O,function(){return B._resizeDOM()}),s.createElement("div",{ref:O})}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _rect = new Rect({
    fillStyle: 'pink',
    x: 250,
    y: 100,
    width: 100,
    height: 100,
  });
  const _rect1 = new Rect({
    shadowColor: 'rgba(0, 0, 0, 0.3)', // \u9634\u5F71\u989C\u8272
    shadowBlur: 50, // \u9634\u5F71\u6A21\u7CCA\u5EA6
    shadowOffsetX: 10, // \u9634\u5F71\u6C34\u5E73\u504F\u79FB
    shadowOffsetY: 10, // \u9634\u5F71\u5782\u76F4\u504F\u79FB
    fillStyle: 'blue',
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    radius: 5,
  });

  _stage.add(_rect, _rect1);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},67023:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(18283),C={"docs-canvas-stage-demo-stagedemo":{component:R.memo(R.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},9095:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(70821),C={"docs-canvas-text-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=_.sent,f=x.Text,c=x.Stage,v=x.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=_.sent,s=I.default,g=I.useLayoutEffect,u=I.useRef,_.abrupt("return",{default:function(){var B=new c,O=u(null),L=new f({content:"xixinia",index:999,x:250,y:250});return B.add(L),g(function(){B.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),v(O,function(){return B._resizeDOM()}),s.createElement("div",{ref:O})}});case 13:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Text, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _text = new Text({
    content: 'xixinia',
    index: 999,
    x: 250,
    y: 250,
  });
  _stage.add(_text);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},44401:function(W,l,e){e.r(l),e.d(l,{demos:function(){return U}});var y=e(67294),o=e(26211),U={}},97086:function(W,l,e){e.r(l),e.d(l,{demos:function(){return U}});var y=e(67294),o=e(29876),U={}},64234:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(93139),x={"docs-hooks-use-async-fn-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=u.sent,v=c.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return I=u.sent,s=I.useAsyncFn,u.abrupt("return",{default:function(){var _=s(T()(o()().mark(function Y(){var N;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,new Promise(function(j){setTimeout(function(){j(200)},1e3)});case 2:return N=F.sent,F.abrupt("return",N);case 4:case"end":return F.stop()}},Y)})),[]),A=D()(_,2),B=A[0],O=A[1],L=B.loading,b=B.error,m=B.value;return v.createElement("div",null,v.createElement("button",{onClick:O,disabled:L},L?"\u52A0\u8F7D\u4E2D...":"\u83B7\u53D6\u6570\u636E"),b&&v.createElement("div",{style:{color:"red"}},"\u9519\u8BEF\uFF1A",b.message),m&&v.createElement("div",null,"\u7ED3\u679C\uFF1A",m))}});case 9:case"end":return u.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useAsyncFn } from 'heitu';

export default () => {
  const [state, execute] = useAsyncFn(async () => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 1000);
    });
    return res;
  }, []);

  const { loading, error, value } = state;

  return (
    <div>
      <button onClick={execute} disabled={loading}>
        {loading ? '\u52A0\u8F7D\u4E2D...' : '\u83B7\u53D6\u6570\u636E'}
      </button>
      {error && <div style={{ color: 'red' }}>\u9519\u8BEF\uFF1A{error.message}</div>}
      {value && <div>\u7ED3\u679C\uFF1A{value}</div>}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}},"docs-hooks-use-async-fn-demo-1":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=s.sent,v=c.useAsyncFn,s.abrupt("return",{default:function(){var u=v(function(){var B=T()(o()().mark(function O(L){var b;return o()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,new Promise(function(N){setTimeout(function(){N(L)},1e3)});case 2:return b=Y.sent,Y.abrupt("return",b);case 4:case"end":return Y.stop()}},O)}));return function(O){return B.apply(this,arguments)}}(),[]),z=D()(u,2),_=z[0],A=z[1];return C.createElement("div",null,C.createElement("button",{onClick:function(){return A("123")}},"\u83B7\u53D6\u7528\u6237\u4FE1\u606F"),_.loading&&C.createElement("span",null,"\u52A0\u8F7D\u4E2D..."),_.value&&C.createElement("div",null,"\u7528\u6237\u540D\uFF1A",_.value))}});case 5:case"end":return s.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useAsyncFn } from 'heitu';

export default () => {
  const [state, fetchUser] = useAsyncFn(async (userId: string) => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(userId);
      }, 1000);
    });
    return res;
  }, []);

  return (
    <div>
      <button onClick={() => fetchUser('123')}>\u83B7\u53D6\u7528\u6237\u4FE1\u606F</button>
      {state.loading && <span>\u52A0\u8F7D\u4E2D...</span>}
      {state.value && <div>\u7528\u6237\u540D\uFF1A{state.value}</div>}
    </div>
  );
};`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},75326:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(72155),x={"docs-hooks-use-cancel-async-fn-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,v=c.default,I=c.useRef,_.next=7,Promise.resolve().then(e.bind(e,55819));case 7:return s=_.sent,g=s.useCancelAsyncFn,u=s.useHtAxios,_.abrupt("return",{default:function(){var B=I(),O=u({config:{timeout:1e4},requestInterceptorsCallBack:function(j){return j},responseInterceptorsCallBack:function(j){return j.data}}),L=g(function(){var F=T()(o()().mark(function j(P){var ne,se,ie,pe;return o()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ne=P.signal,se=P.cancelInterceptor,ae.next=3,O.get("http://jsonplaceholder.typicode.com/posts",{aa:1},{signal:ne});case 3:return ae.next=5,ae.sent;case 5:return ie=ae.sent,pe=ie,ae.abrupt("return",pe);case 8:case"end":return ae.stop()}},j)}));return function(j){return F.apply(this,arguments)}}(),[]),b=D()(L,2),m=b[0],Y=m.loading,N=m.value,X=b[1];return v.createElement("div",null,v.createElement("button",{onClick:function(){var F=T()(o()().mark(function P(){return o()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:X();case 1:case"end":return se.stop()}},P)}));function j(){return F.apply(this,arguments)}return j}()},"\u83B7\u53D6\u5217\u8868"))}});case 11:case"end":return _.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
import { useCancelAsyncFn, useHtAxios } from 'heitu';

export default () => {
  // 1. \u521B\u5EFA AbortController \u5B9E\u4F8B
  const controller = useRef<AbortController>();
  const htAxios = useHtAxios({
    config: { timeout: 10000 },
    requestInterceptorsCallBack: (config) => {
      return config;
    },
    responseInterceptorsCallBack: (response) => {
      return response.data;
    },
  });
  const [{ loading, value }, fetch] = useCancelAsyncFn(
    async ({ signal, cancelInterceptor }) => {
      const response = await await htAxios.get(
        'http://jsonplaceholder.typicode.com/posts',
        { aa: 1 },
        { signal },
      );
      const data = response;
      return data;
    },
    [],
  );

  return (
    <div>
      <button
        onClick={async () => {
          fetch();
        }}
      >
        \u83B7\u53D6\u5217\u8868
      </button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},51134:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(6118),C={"docs-hooks-use-container-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return c=function(z){var _=z.isGreen?"green":"light";return{theme:_}},g.next=3,Promise.resolve().then(e.bind(e,55819));case 3:return x=g.sent,f=x.createContainer,v=f(c),I=function(){var z=v.useContainer(),_=z.theme;return console.log(_,"theme"),R.createElement("div",{style:{background:_,height:"20px",width:"20px"}})},g.abrupt("return",{default:function(){return R.createElement(v.Provider,{isGreen:!0},R.createElement(I,null))}});case 8:case"end":return g.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-container-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createContainer } from 'heitu';

function useTheme(props: { isGreen: boolean }) {
  const theme = props.isGreen ? 'green' : 'light';
  return { theme };
}

const Theme = createContainer(useTheme);
const ThemedComponent = () => {
  const { theme } = Theme.useContainer();
  console.log(theme, 'theme');
  return (
    <div style={{ background: theme, height: '20px', width: '20px' }}></div>
  );
};
export default () => {
  return (
    <Theme.Provider isGreen={true}>
      <ThemedComponent />
    </Theme.Provider>
  );
};`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(55819)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},31701:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(64577),x={"docs-hooks-use-cookie-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=u.sent,v=c.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return I=u.sent,s=I.useCookie,u.abrupt("return",{default:function(){var _={path:"/"},A="cookie-key",B=s(A,_,"default-value"),O=D()(B,3),L=O[0],b=O[1],m=O[2],Y=function(){b("new-cookie-value")},N=function(){b(void 0)},X=function(){if("cookieStore"in window){var j=window.cookieStore;j.set({name:A,value:"changed"})}else document.cookie="".concat(A,"=changed; path=/")};return v.createElement("div",null,v.createElement("p",null,"\u70B9\u51FB\u6309\u94AE\u66F4\u65B0\u6216\u6E05\u9664cookie"),v.createElement("p",{color:"blue"},"cookie: ",L||"no value"),v.createElement("button",{onClick:Y},"\u66F4\u65B0 cookie"),v.createElement("button",{onClick:N},"\u6E05\u9664 cookie"),v.createElement("button",{onClick:X},"\u901A\u8FC7\u522B\u7684\u65B9\u5F0F\u4FEE\u6539cookie"),v.createElement("button",{onClick:m},"\u5237\u65B0 cookie"))}});case 9:case"end":return u.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useCookie } from 'heitu';

export default () => {
  const defaultOption = {
    path: '/',
  };
  const cookieName = 'cookie-key';
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    'default-value',
  );

  const updateButtonClick = () => {
    updateCookie('new-cookie-value');
  };

  const deleteButtonClick = () => {
    updateCookie(undefined);
  };

  const change = () => {
    if ('cookieStore' in window) {
      const store = window.cookieStore as any;
      store.set({ name: cookieName, value: 'changed' });
    } else {
      document.cookie = \`\${cookieName}=changed; path=/\`;
    }
  };

  return (
    <div>
      <p>\u70B9\u51FB\u6309\u94AE\u66F4\u65B0\u6216\u6E05\u9664cookie</p>
      <p color="blue">cookie: {cookieValue || 'no value'}</p>
      <button onClick={updateButtonClick}>\u66F4\u65B0 cookie</button>
      <button onClick={deleteButtonClick}>\u6E05\u9664 cookie</button>
      <button onClick={change}>\u901A\u8FC7\u522B\u7684\u65B9\u5F0F\u4FEE\u6539cookie</button>
      <button onClick={refreshCookie}>\u5237\u65B0 cookie</button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},67731:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(28587),x={"docs-hooks-use-count-down-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=u.sent,v=c.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return I=u.sent,s=I.useCountDown,u.abrupt("return",{default:function(){var _=s(),A=D()(_,3),B=A[0],O=A[1],L=A[2];return v.createElement("div",null,B,v.createElement("button",{onClick:function(){O(60)}},"\u5F00\u59CB"),v.createElement("button",{onClick:function(){L()}},"\u6682\u505C"),v.createElement("button",{onClick:function(){O()}},"\u7EE7\u7EED"))}});case 9:case"end":return u.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useCountDown } from 'heitu';

export default () => {
  const [seconds, startCountDown, stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <button
        onClick={() => {
          startCountDown(60);
        }}
      >
        \u5F00\u59CB
      </button>
      <button
        onClick={() => {
          stopCountDown();
        }}
      >
        \u6682\u505C
      </button>
      <button
        onClick={() => {
          startCountDown();
        }}
      >
        \u7EE7\u7EED
      </button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},66609:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(59301),x={"docs-hooks-use-deep-compare-effect-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u,z;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=A.sent,v=c.default,I=c.useState,s=c.useEffect,g=c.useRef,A.next=9,Promise.resolve().then(e.bind(e,55819));case 9:return u=A.sent,z=u.useDeepCompareEffect,A.abrupt("return",{default:function(){var O=I(0),L=D()(O,2),b=L[0],m=L[1],Y=g(0),N=g(0);return s(function(){Y.current+=1},[{}]),z(function(){return N.current+=1,function(){}},[{}]),v.createElement("div",null,v.createElement("p",null,"effectCount: ",Y.current),v.createElement("p",null,"deepCompareCount: ",N.current),v.createElement("p",null,v.createElement("button",{type:"button",onClick:function(){return m(function(F){return F+1})}},"reRender")))}});case 12:case"end":return A.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from 'heitu';

export default () => {
  const [count, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);

  useEffect(() => {
    effectCountRef.current += 1;
  }, [{}]);

  useDeepCompareEffect(() => {
    deepCompareCountRef.current += 1;
    return () => {
      // do something
    };
  }, [{}]);

  return (
    <div>
      <p>effectCount: {effectCountRef.current}</p>
      <p>deepCompareCount: {deepCompareCountRef.current}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},5958:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(48035),C={"docs-hooks-use-device-pixel-ratio-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return x=s.sent,f=x.default,s.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return c=s.sent,v=c.useDevicePixelRatio,s.abrupt("return",{default:function(){var u=v(),z=u.pixelRatio;return f.createElement("div",null,f.createElement("p",null,"\u5F53\u524D\u8BBE\u5907\u50CF\u7D20\u6BD4: ",z),f.createElement("p",null,"\u8BF4\u660E\uFF1A\u5728\u652F\u6301\u7F29\u653E\u7684\u8BBE\u5907\u4E0A\u6539\u53D8\u7F29\u653E\u6BD4\u4F8B\uFF0C\u6570\u503C\u4F1A\u5B9E\u65F6\u66F4\u65B0"))}});case 9:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return (
    <div>
      <p>\u5F53\u524D\u8BBE\u5907\u50CF\u7D20\u6BD4: {pixelRatio}</p>
      <p>\u8BF4\u660E\uFF1A\u5728\u652F\u6301\u7F29\u653E\u7684\u8BBE\u5907\u4E0A\u6539\u53D8\u7F29\u653E\u6BD4\u4F8B\uFF0C\u6570\u503C\u4F1A\u5B9E\u65F6\u66F4\u65B0</p>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},65585:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(56139),C={"docs-hooks-use-element-size-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return x=u.sent,f=x.default,c=x.useRef,v=x.useEffect,u.next=8,Promise.resolve().then(e.bind(e,55819));case 8:return I=u.sent,s=I.useElementSize,u.abrupt("return",{default:function(){var _=c(null),A=s(_);return v(function(){console.log(_.current.mount)},[]),f.createElement("div",null,f.createElement("textarea",{ref:_,disabled:!0,style:{width:200,height:200},value:"width: ".concat(A.width,`
height: `).concat(A.height)}))}});case 11:case"end":return u.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
import { useElementSize } from 'heitu';

export default () => {
  const ref = useRef(null);
  const size = useElementSize(ref);
  useEffect(() => {
    console.log(ref.current.mount);
  }, []);
  return (
    <div>
      <textarea
        ref={ref}
        disabled
        style={{ width: 200, height: 200 }}
        value={\`width: \${size.width}\\nheight: \${size.height}\`}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},23897:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(38668),C={"docs-hooks-use-ht-axios-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=s.sent,f=x.useHtAxios,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return c=s.sent,v=c.default,s.abrupt("return",{default:function(){var u=f({config:{timeout:3e3},requestInterceptorsCallBack:function(A){return A},responseInterceptorsCallBack:function(A){return A.data}}),z=function(){var _=D()(o()().mark(function A(){var B;return o()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,u.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:B=L.sent,alert(JSON.stringify(B));case 4:case"end":return L.stop()}},A)}));return function(){return _.apply(this,arguments)}}();return v.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},v.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){z()}},"\u8BF7\u6C42"))}});case 9:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
import React from 'react';
export default () => {
  const htAxios = useHtAxios({
    // \u81EA\u5B9A\u4E49\u914D\u7F6E
    config: {
      timeout: 3000,
    },
    // \u8BF7\u6C42\u62E6\u622A\u5668
    requestInterceptorsCallBack: (config) => {
      // \u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u5904\u7406\u8BF7\u6C42\u5934\u3001\u8BA4\u8BC1\u4FE1\u606F\u7B49
      return config;
    },
    // \u54CD\u5E94\u62E6\u622A\u5668
    responseInterceptorsCallBack: (response) => {
      // \u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u5904\u7406\u54CD\u5E94\u6570\u636E
      return response.data;
    },
  });

  const getInfo = async () => {
    const res = await htAxios.get('http://jsonplaceholder.typicode.com/posts', {
      aa: '23123',
    });
    alert(JSON.stringify(res));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button
        type="button"
        style={{ width: '50px' }}
        onClick={() => {
          getInfo();
        }}
      >
        \u8BF7\u6C42
      </button>
    </div>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},97716:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(81233),x={"docs-hooks-use-image-load-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=u.sent,v=c.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return I=u.sent,s=I.useImageLoad,u.abrupt("return",{default:function(){var _=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],A=s({imgList:_}),B=D()(A,4),O=B[0],L=B[1],b=B[2],m=B[3];return v.createElement("div",{style:{display:"flex"}},m?"loading":v.createElement(v.Fragment,null,v.createElement("div",null,v.createElement("div",null,"img"),v.createElement("img",{src:O,style:{width:200}})),v.createElement("div",null,v.createElement("div",null,"ftimgList"),L==null?void 0:L.map(function(Y,N){return v.createElement("img",{src:Y,key:N,style:{width:200}})})),v.createElement("div",null,v.createElement("div",null,"allowImgList"),b==null?void 0:b.map(function(Y,N){return v.createElement("img",{src:Y,key:N,style:{width:200}})}))))}});case 9:case"end":return u.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useImageLoad } from 'heitu';

export default () => {
  const list = [
    'https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png',
    'https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg',
    'http://whhysz.com/upload/20210507/6094e47dce9c1.jpg',
  ];
  const [img, ftimgList, allowImgList, loading] = useImageLoad({
    imgList: list,
  });
  return (
    <div style={{ display: 'flex' }}>
      {loading ? (
        'loading'
      ) : (
        <>
          <div>
            <div>img</div>
            <img src={img} style={{ width: 200 }} />
          </div>
          <div>
            <div>ftimgList</div>
            {ftimgList?.map((item, index) => (
              <img src={item} key={index} style={{ width: 200 }} />
            ))}
          </div>
          <div>
            <div>allowImgList</div>
            {allowImgList?.map((item, index) => (
              <img src={item} key={index} style={{ width: 200 }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},79817:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(35412),x={"docs-hooks-use-in-view-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=u.sent,v=c.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return I=u.sent,s=I.useInView,u.abrupt("return",{default:function(){var _=s(),A=D()(_,2),B=A[0],O=A[1];return v.createElement("div",null,v.createElement("div",null,O?"active":"inactive"),v.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},v.createElement("div",{ref:B},"12312312")))}});case 9:case"end":return u.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useInView } from 'heitu';

export default () => {
  const [targetRef, inView] = useInView();
  return (
    <div>
      <div>{inView ? 'active' : 'inactive'}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '900px',
        }}
      >
        <div ref={targetRef as LegacyRef<HTMLDivElement>}>12312312</div>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},59842:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(1019),x={"docs-hooks-use-infinite-scroll-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u,z;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return z=function(O){var L=O.hasMore,b=O.loadMore,m=u(),Y=D()(m,2),N=Y[0],X=Y[1];return I(function(){X&&L&&(b==null||b())},[L,X,b]),v.createElement("div",{ref:N},L?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},A.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return c=A.sent,v=c.default,I=c.useEffect,A.next=8,Promise.resolve().then(e.bind(e,55819));case 8:return s=A.sent,g=s.useInfiniteScroll,u=s.useInView,A.abrupt("return",{default:function(){var O=new Array(100).fill(1).map(function(N,X){return X}),L=g({dataSource:O,pageSize:10,delay:100}),b=L.data,m=L.hasMore,Y=L.loadMore;return v.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},b==null?void 0:b.map(function(N){return v.createElement("span",null,N)}),v.createElement(z,{loadMore:Y,hasMore:m}))}});case 12:case"end":return A.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useInfiniteScroll, useInView } from 'heitu';

function InfiniteScrollTrigger({ hasMore, loadMore }) {
  const [targetRef, inView] = useInView();
  useEffect(() => {
    if (inView && hasMore) loadMore?.();
  }, [hasMore, inView, loadMore]);
  return <div ref={targetRef}>{hasMore ? '\u52A0\u8F7D\u4E2D...' : '\u6CA1\u6709\u66F4\u591A\u4E86~'}</div>;
}

export default () => {
  // mock\u63A5\u53E3\u83B7\u53D6\u7684\u6570\u636E
  const dataSource = new Array(100).fill(1).map((item, index) => index);
  const { data, hasMore, loadMore } = useInfiniteScroll({
    dataSource, // \u6240\u6709\u6570\u636E\u6E90
    pageSize: 10, // \u4E00\u6B21\u6027\u52A0\u8F7D10\u6761
    delay: 100, // 100ms\u5EF6\u65F6
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        overflowY: 'auto',
      }}
    >
      {data?.map((item) => {
        return <span>{item}</span>;
      })}
      <InfiniteScrollTrigger loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},96122:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(40801),x={"docs-hooks-use-local-storage-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=g.sent,v=c.useLocalStorage,I=function(){var z=v("my-key","foo"),_=D()(z,3),A=_[0],B=_[1],O=_[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",A),C.createElement("button",{onClick:function(){return B("bar")}},"bar"),C.createElement("button",{onClick:function(){return B("baz")}},"baz"),C.createElement("button",{onClick:function(){return O()}},"Remove"))},g.abrupt("return",{default:I});case 6:case"end":return g.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import heitu, { useLocalStorage } from 'heitu';

const Index = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},39460:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(74719),C={"docs-hooks-use-polling-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c,v,I,s;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return x=u.sent,f=x.default,u.next=6,Promise.resolve().then(e.bind(e,55819));case 6:return c=u.sent,v=c.usePolling,u.next=10,Promise.resolve().then(e.t.bind(e,15623,23));case 10:return I=u.sent,s=I.default,u.abrupt("return",{default:function(){var _=function(){return console.log("polling getUsername"),new Promise(function(X){setTimeout(function(){X(s.mock("@name"))},1e3)})},A=v(D()(o()().mark(function N(){var X;return o()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,_();case 2:return X=j.sent,j.abrupt("return",X);case 4:case"end":return j.stop()}},N)})),{interval:5e3,onSuccess:function(X){console.log("\u8F6E\u8BE2\u6210\u529F:",X)},onError:function(X){console.log("\u8F6E\u8BE2\u5931\u8D25:",X)}}),B=A.data,O=A.loading,L=A.error,b=A.start,m=A.stop,Y=A.state;return console.log(Y,"state"),f.createElement("div",null,Y===1&&f.createElement("span",null,"\u8F6E\u8BE2\u4E2D..."),O&&f.createElement("span",null,"\u52A0\u8F7D\u4E2D..."),L&&f.createElement("span",null,"\u9519\u8BEF: ",L.message),f.createElement("div",null,"\u6570\u636E: ",JSON.stringify(B)),f.createElement("button",{onClick:b},"\u5F00\u59CB\u8F6E\u8BE2"),f.createElement("button",{onClick:m},"\u505C\u6B62\u8F6E\u8BE2"))}});case 13:case"end":return u.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-polling-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { usePolling } from 'heitu';
import Mock from 'mockjs';

export default () => {
  const getUsername = () => {
    console.log('polling getUsername');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  };
  const { data, loading, error, start, stop, state } = usePolling(
    async () => {
      const res = await getUsername();
      return res;
    },
    {
      interval: 5000, // \u6BCF5\u79D2\u8F6E\u8BE2\u4E00\u6B21
      onSuccess: (data) => {
        console.log('\u8F6E\u8BE2\u6210\u529F:', data);
      },
      onError: (error) => {
        console.log('\u8F6E\u8BE2\u5931\u8D25:', error);
      },
    },
  );
  console.log(state, 'state');
  return (
    <div>
      {state === 1 && <span>\u8F6E\u8BE2\u4E2D...</span>}
      {loading && <span>\u52A0\u8F7D\u4E2D...</span>}
      {error && <span>\u9519\u8BEF: {error.message}</span>}
      <div>\u6570\u636E: {JSON.stringify(data)}</div>
      <button onClick={start}>\u5F00\u59CB\u8F6E\u8BE2</button>
      <button onClick={stop}>\u505C\u6B62\u8F6E\u8BE2</button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"},mockjs:{type:"NPM",value:"1.1.0"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819),mockjs:e(15623)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},37868:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(74746),x={"docs-hooks-use-previous-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,v=c.default,I=c.useState,_.next=7,Promise.resolve().then(e.bind(e,55819));case 7:return s=_.sent,g=s.usePrevious,u=function(B){var O=g(B);return console.log(O,B),v.createElement("div",null,v.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(O==null?void 0:O.aa)||0," "),v.createElement("div",null,"\u5F53\u524D\u7684aa: ",B==null?void 0:B.aa))},_.abrupt("return",{default:function(){var B=I(1),O=D()(B,2),L=O[0],b=O[1];return v.createElement("div",null,v.createElement("button",{onClick:function(){return b(L+1)}},"+1"),v.createElement(u,{aa:L}))}});case 11:case"end":return _.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { usePrevious } from 'heitu';

const Child = (props) => {
  const prev = usePrevious(props);

  console.log(prev, props);
  return (
    <div>
      <div>\u524D\u4E00\u4E2Aaa: {prev?.aa || 0} </div>
      <div>\u5F53\u524D\u7684aa: {props?.aa}</div>
    </div>
  );
};

export default () => {
  const [aa, sa] = useState(1);

  return (
    <div>
      <button onClick={() => sa(aa + 1)}>+1</button>
      <Child aa={aa} />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},7411:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(81286),x={"docs-hooks-use-resize-observer-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g,u;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,v=c.default,I=c.useRef,s=c.useState,_.next=8,Promise.resolve().then(e.bind(e,55819));case 8:return g=_.sent,u=g.useResizeObserver,_.abrupt("return",{default:function(){var B=I(null),O=s({width:0,height:0}),L=D()(O,2),b=L[0],m=L[1];return u(B,function(Y){var N=D()(Y,1),X=N[0],F=X.contentRect,j=F.width,P=F.height;m({width:j,height:P})}),v.createElement("div",null,v.createElement("textarea",{ref:B,disabled:!0,style:{width:200,height:200},value:"width: ".concat(b.width,`
height: `).concat(b.height)}))}});case 11:case"end":return _.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
import { useResizeObserver } from 'heitu';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useResizeObserver(ref, (entries) => {
    const [entry] = entries;
    const { width, height } = entry.contentRect;
    setSize({ width, height });
  });
  return (
    <div>
      <textarea
        ref={ref}
        disabled
        style={{ width: 200, height: 200 }}
        value={\`width: \${size.width}\\nheight: \${size.height}\`}
      />
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},12830:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(5480),x={"docs-hooks-use-session-storage-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=g.sent,v=c.useSessionStorage,I=function(){var z=v("my-key","foo"),_=D()(z,3),A=_[0],B=_[1],O=_[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",A),C.createElement("button",{onClick:function(){return B("bar")}},"bar"),C.createElement("button",{onClick:function(){return B("baz")}},"baz"),C.createElement("button",{onClick:function(){return O()}},"Remove"))},g.abrupt("return",{default:I});case 6:case"end":return g.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

const Index = () => {
  const [value, setValue, remove] = useSessionStorage('my-key', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(55819)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},94902:function(W,l,e){e.r(l),e.d(l,{demos:function(){return x}});var y=e(17061),o=e.n(y),U=e(27424),D=e.n(U),R=e(17156),T=e.n(R),C=e(67294),h=e(24393),x={"docs-hooks-use-web-socket-demo-0":{component:C.memo(C.lazy(T()(o()().mark(function f(){var c,v,I,s,g;return o()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return c=z.sent,v=c.useWebSocket,z.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return I=z.sent,s=I.useState,g=function(){var A=s(""),B=D()(A,2),O=B[0],L=B[1],b=v("wss://ws.postman-echo.com/raw",{onOpen:function(P){console.log("\u8FDE\u63A5\u6210\u529F")},onMessage:function(P){console.log("\u6536\u5230\u6D88\u606F:",P)},onError:function(P){console.log("\u8FDE\u63A5\u9519\u8BEF")},onClose:function(P){console.log("\u8FDE\u63A5\u5173\u95ED")},json:!0}),m=b.readyState,Y=b.sendMessage,N=b.connect,X=b.disconnect,F=b.latestMessage;return console.log(m,"readyState"),C.createElement("div",null,C.createElement("p",null,"\u8FDE\u63A5\u72B6\u6001:",m===WebSocket.CONNECTING&&"\u6B63\u5728\u8FDE\u63A5\u4E2D",m===WebSocket.OPEN&&"\u8FDE\u63A5\u5DF2\u5EFA\u7ACB",m===WebSocket.CLOSING&&"\u8FDE\u63A5\u6B63\u5728\u5173\u95ED",m===WebSocket.CLOSED&&"\u8FDE\u63A5\u5DF2\u5173\u95ED"),C.createElement("button",{onClick:function(){return Y({text:"hello",date:"".concat(Date.now())})},disabled:m!==WebSocket.OPEN},"\u53D1\u9001\u6D88\u606F"),C.createElement("p",null,"\u6700\u65B0\u6D88\u606F: ",F?JSON.stringify(F):"\u6682\u65E0\u6D88\u606F"),m===WebSocket.OPEN&&C.createElement("button",{onClick:X},"\u65AD\u5F00\u8FDE\u63A5"),(m===WebSocket.CONNECTING||m===WebSocket.CLOSED)&&C.createElement("button",{onClick:N},"\u8FDE\u63A5"))},z.abrupt("return",{default:g});case 10:case"end":return z.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-hooks-use-web-socket-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWebSocket } from 'heitu';
import { useState } from 'react';

const Index = () => {
  const [message, setMessage] = useState('');

  const { readyState, sendMessage, connect, disconnect, latestMessage } =
    useWebSocket('wss://ws.postman-echo.com/raw', {
      onOpen: (event) => {
        console.log('\u8FDE\u63A5\u6210\u529F');
      },
      onMessage: (message) => {
        console.log('\u6536\u5230\u6D88\u606F:', message);
      },
      onError: (event) => {
        console.log('\u8FDE\u63A5\u9519\u8BEF');
      },
      onClose: (event) => {
        console.log('\u8FDE\u63A5\u5173\u95ED');
      },
      json: true,
    });
  console.log(readyState, 'readyState');
  return (
    <div>
      <p>
        \u8FDE\u63A5\u72B6\u6001:
        {readyState === WebSocket.CONNECTING && '\u6B63\u5728\u8FDE\u63A5\u4E2D'}
        {readyState === WebSocket.OPEN && '\u8FDE\u63A5\u5DF2\u5EFA\u7ACB'}
        {readyState === WebSocket.CLOSING && '\u8FDE\u63A5\u6B63\u5728\u5173\u95ED'}
        {readyState === WebSocket.CLOSED && '\u8FDE\u63A5\u5DF2\u5173\u95ED'}
      </p>
      <button
        onClick={() => sendMessage({ text: 'hello', date: \`\${Date.now()}\` })}
        disabled={readyState !== WebSocket.OPEN}
      >
        \u53D1\u9001\u6D88\u606F
      </button>
      <p>
        \u6700\u65B0\u6D88\u606F: {latestMessage ? JSON.stringify(latestMessage) : '\u6682\u65E0\u6D88\u606F'}
      </p>
      {readyState === WebSocket.OPEN && (
        <button onClick={disconnect}>\u65AD\u5F00\u8FDE\u63A5</button>
      )}
      {(readyState === WebSocket.CONNECTING ||
        readyState === WebSocket.CLOSED) && (
        <button onClick={connect}>\u8FDE\u63A5</button>
      )}
    </div>
  );
};
export default Index;`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55819),react:e(67294)},renderOpts:{compile:function(){var f=T()(o()().mark(function v(){var I,s=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(I=u.sent).default.apply(I,s));case 3:case"end":return u.stop()}},v)}));function c(){return f.apply(this,arguments)}return c}()}}}},9954:function(W,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),o=e.n(y),U=e(17156),D=e.n(U),R=e(67294),T=e(51530),C={"docs-hooks-use-window-size-demo-0":{component:R.memo(R.lazy(D()(o()().mark(function h(){var x,f,c;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,55819));case 2:return x=I.sent,f=x.useWindowSize,c=function(){var g=f(),u=g.width,z=g.height;return R.createElement("div",null,R.createElement("p",null,"width: ",u,", height: ",z))},I.abrupt("return",{default:c});case 6:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
const Index =()=>{
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        width: {width}, height: {height}
      </p>
    </div>
  );
}
export default Index`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(55819)},renderOpts:{compile:function(){var h=D()(o()().mark(function f(){var c,v=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,v));case 3:case"end":return s.stop()}},f)}));function x(){return h.apply(this,arguments)}return x}()}}}},11171:function(W,l,e){e.r(l),e.d(l,{demos:function(){return U}});var y=e(67294),o=e(68537),U={}},6202:function(W,l,e){e.r(l),e.d(l,{demos:function(){return U}});var y=e(67294),o=e(79930),U={}},55819:function(W,l,e){e.r(l),e.d(l,{Animate:function(){return L},Circle:function(){return Ye},Custom:function(){return He},Group:function(){return Ze},Line:function(){return nn},LineChart:function(){return Lt},Rect:function(){return an},Stage:function(){return Ue},Text:function(){return on},createContainer:function(){return Ln},useAsyncFn:function(){return Ke},useCancelAsyncFn:function(){return Dn},useCookie:function(){return wn},useCountDown:function(){return Un},useDeepCompareEffect:function(){return jn},useDevicePixelRatio:function(){return $n},useElementSize:function(){return Fn},useHtAxios:function(){return ct},useImageLoad:function(){return It},useInView:function(){return pt},useInfiniteScroll:function(){return ft},useLocalStorage:function(){return xt},usePolling:function(){return gt},usePrevious:function(){return Ot},useResizeObserver:function(){return ze},useSessionStorage:function(){return Pt},useWebSocket:function(){return Dt},useWindowSize:function(){return Rt}});var y=e(42122),o=e.n(y),U=e(56690),D=e.n(U),R=e(89728),T=e.n(R),C=e(38416),h=e.n(C),x=e(861),f=e.n(x),c=window.devicePixelRatio,v=function(){},I=function(a){return a.name==="Stage"},s=function(a,t){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(t)).map(function(r){return[r.name,r]})).values())},g=function(a,t,r){return r!=null&&r.x&&r!==null&&r!==void 0&&r.width&&r.y&&r!==null&&r!==void 0&&r.height?a>(r==null?void 0:r.x)*c&&a<(((r==null?void 0:r.x)||0)+((r==null?void 0:r.width)||0))*c&&t>(r==null?void 0:r.y)*c&&t<r.y*c+r.height*c:!1},u=function(a){var t=a.mouseX,r=a.mouseY,n=a.path2D,i=a.ctx;return n&&i&&(i==null?void 0:i.isPointInPath(n,t,r))},z={linear:function(a){return a},quadraticIn:function(a){return a*a},quadraticOut:function(a){return a*(2-a)},quadraticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(a){var t=a;return t*t*t},cubicOut:function(a){var t=a;return--t*t*t+1},cubicInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(a){var t=a;return t*t*t*t},quarticOut:function(a){var t=a;return 1- --t*t*t*t},quarticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(a){return a*a*a*a*a},quinticOut:function(a){var t=a;return--t*t*t*t*t+1},quinticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(a){return 1-Math.cos(a*Math.PI/2)},sinusoidalOut:function(a){return Math.sin(a*Math.PI/2)},sinusoidalInOut:function(a){return .5*(1-Math.cos(Math.PI*a))},exponentialIn:function(a){return a===0?0:Math.pow(1024,a-1)},exponentialOut:function(a){return a===1?1:1-Math.pow(2,-10*a)},exponentialInOut:function(a){var t=a;return a===0?0:a===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(a){return 1-Math.sqrt(1-a*a)},circularOut:function(a){var t=a;return Math.sqrt(1- --t*t)},circularInOut:function(a){var t=a;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return-(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n))},elasticOut:function(a){var t,r=.1,n=.4;return a===0?0:a===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*a)*Math.sin((a-t)*(2*Math.PI)/n)+1)},elasticInOut:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return(i*=2)<1?-.5*(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)*.5+1},backIn:function(a){var t=1.70158;return a*a*((t+1)*a-t)},backOut:function(a){var t=a,r=1.70158;return--t*t*((r+1)*t+r)+1},backInOut:function(a){var t=a,r=1.70158*1.525;return(t*=2)<1?.5*(t*t*((r+1)*t-r)):.5*((t-=2)*t*((r+1)*t+r)+2)},bounceIn:function(a){return 1-z.bounceOut(1-a)},bounceOut:function(a){var t=a;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(a){return a<.5?z.bounceIn(a*2)*.5:z.bounceOut(a*2-1)*.5+.5}};function _(p,a,t){var r=a-p,n=t*r,i=p+n,d=p<a?p:a,E=p>a?p:a;return i=Math.max(i,d),i=Math.min(i,E),i}var A=function(a,t,r){if(typeof a=="number"&&typeof t=="number")return _(a,t,r);if(Array.isArray(a)&&Array.isArray(t))return a.map(function(n,i){return _(n,t[i],r)})},B={duration:1e3,easing:"linear",iterationCount:1},O=function(){function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};D()(this,p),h()(this,"rafTimer",null),h()(this,"startTime",null),h()(this,"startProp",void 0),h()(this,"targetProp",void 0),h()(this,"cfg",void 0),h()(this,"forward",!0),h()(this,"queue",[]),this.startProp=a,this.targetProp=t,this.cfg=o()(o()({},B),r)}return T()(p,[{key:"start",value:function(){var t=this,r=this.cfg,n=r.duration,i=r.easing,d=r.during,E=r.iterationCount,M=Object.keys(this.targetProp),S=function K($){t.startTime||(t.startTime=$);var G=z[i](Math.min(($-t.startTime)/n,1));t.forward===!1&&(G=1-G);var Q={};M.forEach(function(k){var J=A(t.startProp[k],t.targetProp[k],G);Q[k]=J}),d&&d(G,Q);var H=t.forward?G<1:0<G;H?t.rafTimer=requestAnimationFrame(K):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(k){k(Q,G)});var V=t.forward?G===1:G===0;V&&E===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(S)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),p}(),L=O,b=e(66115),m=e.n(b),Y=e(61655),N=e.n(Y),X=e(26389),F=e.n(X),j=e(30954),P=e(67294),ne,se=Object.prototype.toString;function ie(p){return typeof p=="function"}var pe=function(a){return typeof a!="undefined"};function Pe(p){return typeof p=="undefined"}var ae=function(a){return typeof a=="boolean"},Ee=function(a){return typeof a=="number"};function $e(p){return typeof p=="string"}function Bt(p){return se.call(p)==="[object Object]"}var bt=null,De=typeof window!="undefined",wt=typeof navigator!="undefined";function we(){}var Wt=De&&((ne=window)===null||ne===void 0||(ne=ne.navigator)===null||ne===void 0?void 0:ne.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Ut=!P.useId,Qe=e(79697),Ge=function(){function p(){D()(this,p),h()(this,"eventListeners",{})}return T()(p,[{key:"on",value:function(t,r){var n=t.split(" "),i=n.length,d,E,M,S;for(d=0;d<i;d++)E=n[d],M=E.split("."),S=M[0],this.eventListeners[S]||(this.eventListeners[S]=[]),this.eventListeners[S].push({name:(r==null?void 0:r.name)||"",handler:r});return this}},{key:"_off",value:function(t,r,n){var i=this.eventListeners[t],d,E,M;for(d=0;d<i.length;d++)if(E=i[d].name,M=i[d].handler,(!r||E===r)&&(!n||n===M)){if(i.splice(d,1),i.length===0){delete this.eventListeners[t];break}d--}}},{key:"off",value:function(t,r){var n=(t||"").split(" "),i=n.length,d,E,M,S,K,$;for(d=0;d<i;d++)if(M=n[d],S=M.split("."),K=S[0],$=S[1],K)this.eventListeners[K]&&this._off(K,$,r);else for(E in this.eventListeners)this._off(E,$,r);return this}},{key:"_fire",value:function(t,r,n){if(I(n))this.eventListeners[t].forEach(function(E){E.handler(r)});else{var i;if((n==null||(i=n.eventListeners)===null||i===void 0||(i=i[t])===null||i===void 0?void 0:i.length)>0&&n.eventListeners[t].forEach(function(E){E.handler(r,n)}),n!=null&&n.draggable){var d;ie(n==null?void 0:n.draggable)&&n.dragging&&(n==null||n.draggable(r,n)),(d=n.eventListeners)===null||d===void 0||(d=d[t])===null||d===void 0||d.forEach(function(E){E.handler(r,n)})}}}},{key:"fire",value:function(t,r){var n=r.evt,i=r.target,d=r.currentTarget;if(I(d)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,d);for(var E=i==null?void 0:i.children,M=0;M<E.length;M++){var S,K,$=f()(E.filter(function(w){return w.draggable}));if(t==="mousedown"){var G=$.filter(function(w){var oe;return w==null?void 0:w.inScope(n,(oe=i.canvas)===null||oe===void 0?void 0:oe.context)}),Q=G.sort(function(w,oe){return oe.index-w.index})[0];Q&&(Q.name==="Group"?(Q.dragging=!0,Q.children.forEach(function(w){w.offsetX=w!=null&&w.x?n.offsetX-(w==null?void 0:w.x):n.offsetX,w.offsetY=w!=null&&w.y?n.offsetY-(w==null?void 0:w.y):n.offsetY})):(Q.dragging=!0,Q.offsetX=Q!=null&&Q.x?n.offsetX-(Q==null?void 0:Q.x):n.offsetX,Q.offsetY=Q!=null&&Q.y?n.offsetY-(Q==null?void 0:Q.y):n.offsetY))}(!(0,Qe.Z)((S=E[M])===null||S===void 0?void 0:S.eventListeners)||(K=E[M])!==null&&K!==void 0&&K.draggable)&&this.fire(t,{evt:n,target:i,currentTarget:E[M]})}}else{var H;if(d!=null&&d.draggable&&t==="mouseup"&&(d.dragging=!1),d!=null&&d.draggable&&d.dragging&&t==="mousemove"){var V,k=(V=this.canvas)===null||V===void 0||(V=V.canvas)===null||V===void 0?void 0:V.getBoundingClientRect();if(d.name==="Text"){var J=k!=null&&k.left?n.clientX-(k==null?void 0:k.left):n.clientX,ce=k!=null&&k.top?n.clientY-(k==null?void 0:k.top):n.clientY;d.x=d!=null&&d.offsetX?J-(d==null?void 0:d.offsetX):J,d.y=d!=null&&d.offsetY?ce-(d==null?void 0:d.offsetY):ce}else if(d.name==="Group"){var ve=k!=null&&k.left?n.clientX-(k==null?void 0:k.left):n.clientX,le=k!=null&&k.top?n.clientY-(k==null?void 0:k.top):n.clientY;d.children.forEach(function(w){if(w.name==="Text"){var oe=k!=null&&k.left?n.clientX-(k==null?void 0:k.left):n.clientX,Ie=k!=null&&k.top?n.clientY-(k==null?void 0:k.top):n.clientY;w.x=w!=null&&w.offsetX?oe-(w==null?void 0:w.offsetX):oe,w.y=w!=null&&w.offsetY?Ie-(w==null?void 0:w.offsetY):Ie}else w.x=w!=null&&w.offsetX?ve-(w==null?void 0:w.offsetX):ve,w.y=w!=null&&w.offsetY?le-(w==null?void 0:w.offsetY):le})}else{var de=k!=null&&k.left?n.clientX-(k==null?void 0:k.left):n.clientX,he=k!=null&&k.top?n.clientY-(k==null?void 0:k.top):n.clientY;d.x=d!=null&&d.offsetX?de-(d==null?void 0:d.offsetX):de,d.y=d!=null&&d.offsetY?he-(d==null?void 0:d.offsetY):he}this.batchDraw(this)}if(d!=null&&d.inScope&&(H=i.canvas)!==null&&H!==void 0&&H.context){var Z;if(d!=null&&d.inScope(n,(Z=i.canvas)===null||Z===void 0?void 0:Z.context)){var ee;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,d),t==="mousemove"&&!d.mouseInScope&&((ee=d.eventListeners.mouseenter)===null||ee===void 0?void 0:ee.length)>0&&(d.mouseInScope=!0,i._fire("mouseenter",n,d))}else if(t==="mousemove"){var te;d.mouseInScope=!1,((te=i.eventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&i._fire("mouseleave",n,d)}}}}},{key:"attr",value:function(t){var r=this,n;this.parent&&((0,j.Z)(t,function(i,d){i&&(r[d]=i)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),p}(),ge=Ge,Fe=function(p){N()(t,p);var a=F()(t);function t(r){var n;return D()(this,t),n=a.call(this),h()(m()(n),"name","Circle"),h()(m()(n),"parent",null),h()(m()(n),"x",void 0),h()(m()(n),"y",void 0),h()(m()(n),"radius",void 0),h()(m()(n),"lineWidth",void 0),h()(m()(n),"fillStyle",void 0),h()(m()(n),"strokeStyle",void 0),h()(m()(n),"arc",void 0),h()(m()(n),"startAngle",void 0),h()(m()(n),"endAngle",void 0),h()(m()(n),"innerRadius",void 0),h()(m()(n),"index",void 0),h()(m()(n),"path2D",void 0),h()(m()(n),"border",void 0),h()(m()(n),"shadowColor",void 0),h()(m()(n),"shadowBlur",0),h()(m()(n),"shadowOffsetY",0),h()(m()(n),"shadowOffsetX",0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,i,d,E){var M=this.deg2rad(E),S=n+d*Math.cos(M),K=i+d*Math.sin(M);return{x:S,y:K}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,i="M ".concat(this.x," ").concat(n),d="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),E=this.y-this.innerRadius,M="M ".concat(this.x," ").concat(E),S="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(E);return"".concat(i," ").concat(d," ").concat(M," ").concat(S," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),i=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),d=this.endAngle-this.startAngle>=180?1:0,E="M ".concat(n.x," ").concat(n.y),M="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(d," 1 ").concat(i.x," ").concat(i.y),S=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),K=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),$="L".concat(K.x," ").concat(K.y),G="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(d," 0 ").concat(S.x," ").concat(S.y);return"".concat(E," ").concat(M," ").concat($," ").concat(G," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var i=this.startAngle===0&&this.endAngle===360,d;switch(this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.border){case 0:return d=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(d),n.fill(d),this.path2D=d,d;case 1:return d=new Path2D(this.calcRingD(i)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(d),this.path2D=d,d;case 2:return d=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(d),n.fill(d),this.path2D=d,d}}},{key:"inScope",value:function(n,i){var d=n.offsetX*c,E=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?u({mouseX:d,mouseY:E,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(ge),Ye=Fe,Xe=function(p){N()(t,p);var a=F()(t);function t(r){var n;if(D()(this,t),n=a.call(this),h()(m()(n),"name","Custom"),h()(m()(n),"x",void 0),h()(m()(n),"y",void 0),h()(m()(n),"width",void 0),h()(m()(n),"height",void 0),h()(m()(n),"fillStyle",void 0),h()(m()(n),"strokeStyle",void 0),h()(m()(n),"lineWidth",void 0),h()(m()(n),"index",void 0),h()(m()(n),"path2D",void 0),h()(m()(n),"parent",null),h()(m()(n),"shadowColor",void 0),h()(m()(n),"shadowBlur",0),h()(m()(n),"shadowOffsetY",0),h()(m()(n),"shadowOffsetX",0),!r.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,n.shadowColor="transparent",(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n,i){var d=n.offsetX*c,E=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?u({mouseX:d,mouseY:E,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(ge),He=Xe,Je=function(p){N()(t,p);var a=F()(t);function t(){var r;D()(this,t);for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d];return r=a.call.apply(a,[this].concat(i)),h()(m()(r),"children",[]),r}return T()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var i=this.children||[],d=[];return i.forEach(function(E){n(E)&&d.push(E)}),d}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var i=arguments.length<=0?void 0:arguments[0];return i.index=i.index?i.index:this.getChildren().length,i.parent=this,this.getChildren().push(i),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(i){var d=n.some(function(E){return E===i});d||n.push(i)}),this.children=n,n}},{key:"batchDraw",value:function(n){var i,d,E,M,S;!((i=n.canvas)!==null&&i!==void 0&&i.context)||!((d=n.canvas)!==null&&d!==void 0&&d.canvas)||((E=n.canvas)===null||E===void 0||E.context.clearRect(0,0,(M=n.canvas)===null||M===void 0?void 0:M.canvas.offsetWidth,(S=n.canvas)===null||S===void 0?void 0:S.canvas.offsetHeight),this.sortChildren(function(K,$){return K.index-$.index}),this.deduplication(),this.getChildren().forEach(function(K){var $;if(($=n.canvas)!==null&&$!==void 0&&$.context&&K!==null&&K!==void 0&&K.draw){var G;K==null||K.draw((G=n.canvas)===null||G===void 0?void 0:G.context)}}))}}]),t}(ge),We=Je,Ve=function(p){N()(t,p);var a=F()(t);function t(r){var n;return D()(this,t),n=a.call(this),h()(m()(n),"parent",void 0),h()(m()(n),"name","Group"),h()(m()(n),"draggable",!1),n.parent=null,(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"draw",value:function(n){if(n)return this.sortChildren(function(i,d){return i.index-d.index}),this.deduplication(),this.getChildren().forEach(function(i){n&&i!==null&&i!==void 0&&i.draw&&(i==null||i.draw(n))}),this}},{key:"inScope",value:function(n,i){return this.getChildren().some(function(d){return"inScope"in d&&typeof d.inScope=="function"?d.inScope(n,i):!1})}}]),t}(We),Ze=Ve,qe=e(27424),q=e.n(qe),en=function(p){N()(t,p);var a=F()(t);function t(r){var n;return D()(this,t),n=a.call(this),h()(m()(n),"name","Line"),h()(m()(n),"start",void 0),h()(m()(n),"end",void 0),h()(m()(n),"points",void 0),h()(m()(n),"smooth",void 0),h()(m()(n),"strokeStyle",void 0),h()(m()(n),"lineWidth",void 0),h()(m()(n),"lineCap",void 0),h()(m()(n),"lineJoin",void 0),h()(m()(n),"index",void 0),h()(m()(n),"path2D",void 0),h()(m()(n),"parent",null),h()(m()(n),"shadowColor",void 0),h()(m()(n),"shadowBlur",0),h()(m()(n),"shadowOffsetY",0),h()(m()(n),"shadowOffsetX",0),h()(m()(n),"lineDash",[]),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(i,d,E){var M=Math.floor(E/2);return E%2===0?i.push([d]):i[M].push(d),i},[]).map(function(i){var d=q()(i,2),E=d[0],M=d[1];return{x:E,y:M}})}},{key:"calcSmoothPath2D",value:function(){var n,i,d,E=new Path2D;return E.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0),E.moveTo(this.start.x,(d=this.start)===null||d===void 0?void 0:d.y),this.points.length===2&&E.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&E.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=E,E}},{key:"calcStraightPath2D",value:function(){var n,i,d,E,M=new Path2D;M.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0);var S=this.convertToNormalPoints([].concat(f()(this.points),[(d=this.end)===null||d===void 0?void 0:d.x,(E=this.end)===null||E===void 0?void 0:E.y]));return S.forEach(function(K){var $=K.x,G=K.y;M.lineTo($,G)}),M}},{key:"draw",value:function(n){var i=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.lineDash.length<=0?n.setLineDash([]):n.setLineDash(this.lineDash),n.stroke(i),this}},{key:"inScope",value:function(n,i){var d=n.offsetX*c,E=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?u({mouseX:d,mouseY:E,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(ge),nn=en,tn=function(p){N()(t,p);var a=F()(t);function t(r){var n;return D()(this,t),n=a.call(this),h()(m()(n),"name","Rect"),h()(m()(n),"x",void 0),h()(m()(n),"y",void 0),h()(m()(n),"width",void 0),h()(m()(n),"height",void 0),h()(m()(n),"fillStyle",void 0),h()(m()(n),"strokeStyle",void 0),h()(m()(n),"lineWidth",void 0),h()(m()(n),"index",void 0),h()(m()(n),"path2D",void 0),h()(m()(n),"parent",null),h()(m()(n),"shadowColor",void 0),h()(m()(n),"shadowBlur",0),h()(m()(n),"shadowOffsetY",0),h()(m()(n),"shadowOffsetX",0),h()(m()(n),"radius",0),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.shadowColor="transparent",n.index=0,n.radius=0,(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"draw",value:function(n){var i=new Path2D;this.radius?(i.moveTo(this.x+this.radius,this.y),i.lineTo(this.x+this.width-this.radius,this.y),i.arcTo(this.x+this.width,this.y,this.x+this.width,this.y+this.radius,this.radius),i.lineTo(this.x+this.width,this.y+this.height-this.radius),i.arcTo(this.x+this.width,this.y+this.height,this.x+this.width-this.radius,this.y+this.height,this.radius),i.lineTo(this.x+this.radius,this.y+this.height),i.arcTo(this.x,this.y+this.height,this.x,this.y+this.height-this.radius,this.radius),i.lineTo(this.x,this.y+this.radius),i.arcTo(this.x,this.y,this.x+this.radius,this.y,this.radius)):(i.moveTo(this.x,this.y),i.lineTo(this.x+this.width,this.y),i.lineTo(this.x+this.width,this.y+this.height),i.lineTo(this.x,this.y+this.height)),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",i.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(i),this.fillStyle&&n.fill(i),this.path2D=i}},{key:"inScope",value:function(n,i){var d=n.offsetX*c,E=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?u({mouseX:d,mouseY:E,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(ge),an=tn,rn=function(p){N()(t,p);var a=F()(t);function t(r){var n;if(D()(this,t),n=a.call(this),h()(m()(n),"name","Text"),h()(m()(n),"parent",null),h()(m()(n),"x",void 0),h()(m()(n),"y",void 0),h()(m()(n),"content",void 0),h()(m()(n),"fillStyle",void 0),h()(m()(n),"fontFamily",void 0),h()(m()(n),"fontSize",void 0),h()(m()(n),"textAlign",void 0),h()(m()(n),"textBaseline",void 0),h()(m()(n),"width",void 0),h()(m()(n),"height",void 0),h()(m()(n),"index",0),h()(m()(n),"shadowColor",void 0),h()(m()(n),"shadowBlur",0),h()(m()(n),"shadowOffsetY",0),h()(m()(n),"shadowOffsetX",0),n.content="",!r.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,n.shadowColor="transparent",(0,j.Z)(r,function(i,d){i&&(m()(n)[d]=i)}),n}return T()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var i=n.measureText(this.content);return this.width=i.width,this.height=this.fontSize,this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n){var i=n.offsetX*c,d=n.offsetY*c;return g(i,d,this)}}]),t}(ge),on=rn,Ae=null,un=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(p){setTimeout(p,60)},sn=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(t){}return a},Kt=function(a){Ae.push(a),Ae.length===1&&un(function(){var t=Ae;Ae=[],t.forEach(function(r){r()})})},dn=function(){function p(){D()(this,p),h()(this,"canvas",void 0),h()(this,"context",void 0),h()(this,"width",0),h()(this,"height",0),this.canvas=sn(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return T()(p,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*c,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*c,this.canvas.style.height=t+"px",this.context.scale(c,c)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,r){this.setWidth(t||0),this.setHeight(r||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,r,n){return n&&this.setBackgroundColor(n),this.canvas}}]),p}(),ln="mouseenter",cn="mouseleave",vn="mouseout",hn="mouseover",In="mousedown",fn="mousemove",mn="mouseup",pn="contextmenu",_n="click",xn="dblclick",En="wheel",gn=[[ln,"_mouseenter"],[In,"_mousedown"],[fn,"_mousemove"],[cn,"_mouseleave"],[mn,"_mouseup"],[vn,"_mouseout"],[hn,"_mouseover"],[pn,"_contextmenu"],[En,"_wheel"],[_n,"_click"],[xn,"_dblclick"]],yn=function(p){N()(t,p);var a=F()(t);function t(){var r;return D()(this,t),r=a.call(this),h()(m()(r),"name","Stage"),h()(m()(r),"parent",null),h()(m()(r),"content",void 0),h()(m()(r),"canvas",void 0),h()(m()(r),"width",void 0),h()(m()(r),"height",void 0),h()(m()(r),"draggable",void 0),h()(m()(r),"isFirstRender",void 0),h()(m()(r),"_pointerPositions",[]),h()(m()(r),"_changedPointerPositions",[]),h()(m()(r),"pointerPos",null),r.content=null,r.canvas=null,r.width=100,r.height=500,r.isFirstRender=!0,r.draggable=!1,r}return T()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var i=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),d=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=i,this.content.style.height=d,this.canvas=new dn,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,i,d){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,i,d),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.width=this.content.offsetWidth,this.height=this.content.offsetHeight,this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var i=this.content.getBoundingClientRect(),d={top:i.top,left:i.left,scaleX:i.width/this.content.clientWidth||1,scaleY:i.height/this.content.clientHeight||1},E=null,M=null;E=(n.clientX-d.left)/d.scaleX,M=(n.clientY-d.top)/d.scaleY,this.pointerPos={x:E,y:M}}},{key:"_bindContentEvents",value:function(){var n,i=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&gn.forEach(function(d){var E,M=q()(d,2),S=M[0],K=M[1];(E=i.content)===null||E===void 0||E.addEventListener(S,function($){i[K]($)},{passive:!1})})}},{key:"_mouseenter",value:function(n){I(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){I(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(We),Ue=yn;function On(){var p=(0,P.useRef)(!1),a=(0,P.useCallback)(function(){return p.current},[]);return(0,P.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),a}function Ke(p){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},r=(0,P.useRef)(0),n=On(),i=(0,P.useState)(t),d=q()(i,2),E=d[0],M=d[1],S=(0,P.useCallback)(function(){var K=++r.current;return E.loading||M(function($){return o()(o()({},$),{},{loading:!0})}),p.apply(void 0,arguments).then(function($){return n()&&K===r.current&&M({value:$,loading:!1}),$},function($){return n()&&K===r.current&&M({error:$,loading:!1}),$})},a);return[E,S]}var Cn=e(17061),ye=e.n(Cn),Pn=e(17156),Se=e.n(Pn),Mn=function(a,t){var r=(0,P.useRef)(),n=function(){r.current&&r.current.abort()};(0,P.useEffect)(function(){return n},[]);var i=Ke(Se()(ye()().mark(function d(){var E;return ye()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return n(),r.current=new AbortController,S.prev=2,E={signal:r.current.signal,cancelInterceptor:n},S.next=6,a(E);case 6:return S.abrupt("return",S.sent);case 9:if(S.prev=9,S.t0=S.catch(2),!(S.t0 instanceof Error&&S.t0.name==="AbortError")){S.next=13;break}return S.abrupt("return");case 13:throw S.t0;case 14:case"end":return S.stop()}},d,null,[[2,9]])})),t);return i},Dn=Mn,An=e(70215),Rn=e.n(An),Te=e(85893),Sn=["initialState","children"];function Tn(p){var a=(0,P.createContext)(null);function t(i){var d=i.initialState,E=i.children,M=Rn()(i,Sn),S=p(M),K=o()(o()({},S),d),$=(0,P.useRef)(K);return Object.assign($.current,K),(0,Te.jsx)(a.Provider,{value:$.current,children:E})}function r(){var i=(0,P.useContext)(a);if(i===null)throw new Error("Component must be wrapped with <Provider>");return i}function n(i){return function(E){var M=r();return(0,Te.jsx)(i,o()(o()({},E),{},{container:M}))}}return{Provider:t,useContainer:r,withContainer:n,Context:a}}var Ln=Tn,Le={};function zt(p){console.error(p)}var _e=e(31955);function Bn(p,a){return a!==void 0?a:De?_e.Z.get(p):""}var bn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Le,r=arguments.length>2?arguments[2]:void 0,n=(0,P.useState)(Bn(a,r)),i=q()(n,2),d=i[0],E=i[1];(0,P.useEffect)(function(){var K=function(){var G=_e.Z.get(a);return G!=null?G:(r===void 0?_e.Z.remove(a):_e.Z.set(a,r,t),r)};E(K())},[r,a,JSON.stringify(t)]);var M=(0,P.useCallback)(function(K){var $=ie(K)?K(d):K;$===void 0?_e.Z.remove(a):_e.Z.set(a,$,t),E($)},[a,d,JSON.stringify(t)]),S=(0,P.useCallback)(function(){var K=_e.Z.get(a);$e(K)&&E(K)},[a]);return[d,M,S]},wn=bn,Wn=function(){var a=(0,P.useState)(0),t=q()(a,2),r=t[0],n=t[1],i,d=function(){clearTimeout(i)},E=function(S){d(),n(S||function(K){return K-1})};return(0,P.useEffect)(function(){return i=setTimeout(function(){r>0?n(function(M){return M-1}):d()},1e3),function(){return d()}},[r]),[r,E,d]},Un=Wn,Kn=e(72249),zn=function(a,t,r){var n=(0,P.useRef)(void 0);(!n.current||!r(t,n.current))&&(n.current=t),(0,P.useEffect)(a,n.current)},kn=function(a,t){zn(a,t,Kn.Z)},jn=kn,Nn=function(){var a=(0,P.useState)(1),t=q()(a,2),r=t[0],n=t[1],i=(0,P.useCallback)(function(){if(window){n(window.devicePixelRatio);var d=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),E=function(){i()};return d.addEventListener("change",E,{once:!0}),function(){d.removeEventListener("change",E)}}},[]);return(0,P.useEffect)(function(){var d=i();return d},[i]),{pixelRatio:r}},$n=Nn,Qn=function(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Le;(0,P.useEffect)(function(){var n=new ResizeObserver(t);return a!=null&&a.current&&n.observe(a.current,r),function(){a!=null&&a.current&&n.unobserve(a.current),n.disconnect()}},[])},ze=Qn,Gn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Le,r=(0,P.useState)({width:0,height:0}),n=q()(r,2),i=n[0],d=n[1];return ze(a,function(E){if(E.length!==0){var M=q()(E,1),S=M[0],K=S.contentRect,$=K.width,G=K.height;d({width:$,height:G})}},t),i},Fn=Gn,ke=e(54683),Yn=e(33293),Xn="application/json;charset=utf-8",kt="application/x-www-form-urlencoded",jt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":Xn,Accept:"application/json;version=3.0;compress=false;"},Hn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Jn=e(54998),Vn=e.n(Jn),Zn=e(49360),qn=e(58146),et=e(73505),nt=e(27771),tt=e(77226),at=e(36378),Be=function p(a){if((0,Zn.Z)(a)||(0,qn.Z)(a)||(0,et.Z)(a))return a;if((0,nt.Z)(a))return a.map(function(r){return p(r)});if((0,tt.Z)(a)){var t=Object.create(null);return Object.keys(a).forEach(function(r){t[r]=p(a[r])}),t}else return(0,at.Z)(a)?a.trim():a};function Nt(){return typeof window=="undefined"?!1:window&&window.__debug__}function $t(p){var a=atob(p);return Uint8Array.from(a,function(t){return t.codePointAt(0)})}function Qt(p){var a=Array.from(p,function(t){return String.fromCodePoint(t)}).join("");return btoa(a)}var rt=ke.Z.CancelToken.source(),ot=function(a){a.cancelToken=rt.token;var t=Vn()(a.url);if(a.url=t.query(Be(t.query(!0))||{}).toString(),a.data&&(a.data=Be(a.data)),a.params=Be(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var r=a.data,n=r===void 0?{}:r;for(var i in n)if(n.hasOwnProperty(i)){var d=n[i];d==null&&delete n[i]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},ut=function(a,t){t&&a.interceptors.request.use(function(r){return t(r)},function(r){return Promise.reject(r)}),a.interceptors.request.use(function(r){return ot(r)},function(r){return Promise.reject(r)})},st=function(a){var t,r=a.data;try{if(r instanceof Blob){var n=a.headers["content-disposition"],i=n.split("filename=")[1];return{success:!0,data:{file:r,fileName:i}}}}catch(d){console.error(d)}return((t=a.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,r},dt=function(a){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var r=a.response.data.errors,n=r===void 0?[]:r,i=n&&n[0]||{};return Promise.reject({message:i.message||a.message||t,arguments:i.arguments||void 0,code:i.code||null})}return Promise.reject({message:a.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},it=function(a,t,r){t&&a.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&a.interceptors.response.use(function(n){return n},r),a.interceptors.response.use(st,dt)},lt=function(a){var t=a.config,r=t===void 0?{}:t,n=a.requestInterceptorsCallback,i=a.responseInterceptorOnSuccessCallback,d=a.responseInterceptorOnErrorCallback,E=(0,Yn.Z)(Hn(),r),M=ke.Z.create(E);ut(M,n),it(M,i,d);function S(Q,H,V){return M.request(o()({url:Q,params:H},V))}function K(Q,H,V){return M.request(o()({url:Q,method:"post",params:H},V))}function $(Q,H,V){return M.request(o()({url:Q,method:"put",params:H},V))}function G(Q,H,V){return M.request(o()({url:Q,method:"delete",params:H},V))}return{get:S,post:K,del:G,put:$}},ct=lt,vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",ht=function(a){var t=a.imgList,r=(0,P.useState)(!1),n=q()(r,2),i=n[0],d=n[1],E=(0,P.useState)(""),M=q()(E,2),S=M[0],K=M[1],$=(0,P.useState)([]),G=q()($,2),Q=G[0],H=G[1],V=(0,P.useState)([]),k=q()(V,2),J=k[0],ce=k[1],ve=function le(de,he,Z){var ee=new Image,te=he+1;ee.src=de,ee.onload=function(){H(function(w){return[].concat(f()(w),[de])}),ce(function(w){return[].concat(f()(w),[de])}),Z||K(de),he<t.length-1?le(t[te],te,!0):d(!1)},ee.onerror=function(){H(function(w){return[].concat(f()(w),[vt])}),te<t.length-1?le(t[te],te):d(!1)}};return(0,P.useEffect)(function(){(t==null?void 0:t.length)>1&&(d(!0),ve(t==null?void 0:t[0],0))},[]),console.log([S,Q,J,i]),Q.length!==t.length?["",[],[],!0]:[S,Q,J,i]},It=ht;function ft(p){var a=p.dataSource,t=p.delay,r=t===void 0?100:t,n=p.pageSize,i=n===void 0?10:n,d=p.fetchData,E=(0,P.useState)(!1),M=q()(E,2),S=M[0],K=M[1],$=(0,P.useState)(!0),G=q()($,2),Q=G[0],H=G[1],V=(0,P.useState)([]),k=q()(V,2),J=k[0],ce=k[1];function ve(){return le.apply(this,arguments)}function le(){return le=Se()(ye()().mark(function de(){return ye()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(!(!(a!=null&&a.length)&&!d)){Z.next=2;break}return Z.abrupt("return");case 2:if(!(!Q||S)){Z.next=4;break}return Z.abrupt("return");case 4:if(K(!0),!a){Z.next=10;break}return Z.next=8,new Promise(function(ee){setTimeout(function(){ee(a==null?void 0:a.slice(J.length,J.length+i))},r)}).then(function(ee){H((J==null?void 0:J.length)+(ee==null?void 0:ee.length)<(a==null?void 0:a.length)),ce(function(te){return te==null?void 0:te.concat(ee)})});case 8:Z.next=12;break;case 10:return Z.next=12,d==null?void 0:d({pageNum:J!=null&&J.length?Math.ceil((J==null?void 0:J.length)/i)+1:1,pageSize:i}).then(function(ee){var te=ee.list,w=te===void 0?[]:te,oe=ee.total,Ie=oe===void 0?0:oe;H((J==null?void 0:J.length)+(w==null?void 0:w.length)<Ie&&(w==null?void 0:w.length)>0),ce(function(fe){return fe==null?void 0:fe.concat(w)})});case 12:K(!1);case 13:case"end":return Z.stop()}},de)})),le.apply(this,arguments)}return{data:J,setData:ce,loading:S,hasMore:Q,loadMore:ve}}var mt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(0,P.useState)(!1),n=q()(r,2),i=n[0],d=n[1],E=(0,P.useRef)(null);return(0,P.useEffect)(function(){var M=new IntersectionObserver(function(S){S.forEach(function(K){K.isIntersecting?(d(!0),t&&M.unobserve(K.target)):d(!1)})},a);return E!=null&&E.current&&M.observe(E.current),function(){E!=null&&E.current&&M.unobserve(E.current)}},[a,t]),[E,i]},pt=mt,_t=function(a,t,r){if(!De)return[t,we,we];if(!a)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(G){return G}:r.deserializer:JSON.parse,i=(0,P.useRef)(function(G){try{var Q=r?r.raw?String:r.serializer:JSON.stringify,H=localStorage.getItem(G);return H!==null?n(H):(t&&localStorage.setItem(G,Q(t)),t)}catch(V){return t}}),d=(0,P.useState)(function(){return i.current(a)}),E=q()(d,2),M=E[0],S=E[1];(0,P.useLayoutEffect)(function(){return S(i.current(a))},[a]);var K=(0,P.useCallback)(function(G){try{var Q=typeof G=="function"?G(M):G;if(typeof Q=="undefined")return;var H;r?r.raw?typeof Q=="string"?H=Q:H=JSON.stringify(Q):r.serializer?H=r.serializer(Q):H=JSON.stringify(Q):H=JSON.stringify(Q),localStorage.setItem(a,H),S(n(H))}catch(V){}},[a,S]),$=(0,P.useCallback)(function(){try{localStorage.removeItem(a),S(void 0)}catch(G){}},[a,S]);return[M,K,$]},xt=_t,Re=function(p){return p[p.CLOSED=0]="CLOSED",p[p.POLLING=1]="POLLING",p}(Re||{});function Et(p){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.interval,r=t===void 0?3e3:t,n=a.manual,i=n===void 0?!1:n,d=a.retryTimes,E=d===void 0?0:d,M=a.retryInterval,S=M===void 0?1e3:M,K=a.onSuccess,$=a.onError,G=(0,P.useState)(Re.CLOSED),Q=q()(G,2),H=Q[0],V=Q[1],k=(0,P.useState)(!1),J=q()(k,2),ce=J[0],ve=J[1],le=(0,P.useState)(),de=q()(le,2),he=de[0],Z=de[1],ee=(0,P.useState)(),te=q()(ee,2),w=te[0],oe=te[1],Ie=(0,P.useRef)(),fe=(0,P.useRef)(0),Oe=(0,P.useRef)(!1),xe=(0,P.useCallback)(function(){Oe.current=!1,clearTimeout(Ie.current),V(Re.CLOSED)},[]),Ce=function(){if(!Oe.current){Oe.current=!0,V(Re.POLLING),fe.current=0;var me=function(){var Me=Se()(ye()().mark(function Ne(){var be;return ye()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(Oe.current){re.next=2;break}return re.abrupt("return");case 2:return re.prev=2,ve(!0),re.next=6,p();case 6:be=re.sent,Z(be),oe(void 0),fe.current=0,K==null||K(be),Ie.current=setTimeout(me,r),re.next=21;break;case 14:if(re.prev=14,re.t0=re.catch(2),oe(re.t0),$==null||$(re.t0),E!==0){re.next=20;break}return re.abrupt("return",xe());case 20:fe.current<E?(fe.current++,Ie.current=setTimeout(me,S)):xe();case 21:return re.prev=21,ve(!1),re.finish(21);case 24:case"end":return re.stop()}},Ne,null,[[2,14,21,24]])}));return function(){return Me.apply(this,arguments)}}();me()}};return(0,P.useEffect)(function(){return i||Ce(),function(){xe()}},[i]),{data:he,loading:ce,error:w,start:Ce,stop:xe,state:H}}var gt=Et,yt=function(a){var t=(0,P.useRef)({});return(0,P.useLayoutEffect)(function(){t.current=a}),(0,P.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},Ot=yt,Ct=function(a,t,r){if(!De)return[t,function(){}];var n=(0,P.useState)(function(){try{var M=sessionStorage.getItem(a);return typeof M!="string"?(sessionStorage.setItem(a,r?String(t):JSON.stringify(t)),t):r?M:JSON.parse(M||"null")}catch(S){return t}}),i=q()(n,2),d=i[0],E=i[1];return(0,P.useEffect)(function(){try{var M=r?String(d):JSON.stringify(d);sessionStorage.setItem(a,M)}catch(S){}}),[d,E]},Pt=Ct,Mt=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.reconnectLimit,n=r===void 0?3:r,i=t.reconnectInterval,d=i===void 0?3e3:i,E=t.manual,M=E===void 0?!1:E,S=t.onOpen,K=t.onClose,$=t.onMessage,G=t.onError,Q=t.protocols,H=(0,P.useState)(WebSocket.CONNECTING),V=q()(H,2),k=V[0],J=V[1],ce=(0,P.useState)(null),ve=q()(ce,2),le=ve[0],de=ve[1],he=(0,P.useRef)(0),Z=(0,P.useRef)(),ee=(0,P.useRef)(),te=(0,P.useState)(!1),w=q()(te,2),oe=w[0],Ie=w[1],fe=function Ce(){a&&(Ie(!1),Z.current=new WebSocket(a,Q),Z.current.onopen=function(ue){J(WebSocket.OPEN),S==null||S(ue),he.current=0},Z.current.onclose=function(ue){J(WebSocket.CLOSED),K==null||K(ue),!oe&&he.current<n&&(ee.current=setTimeout(function(){he.current+=1,Ce()},d))},Z.current.onmessage=function(ue){var me=ue;if(t.json)try{me=JSON.parse(ue.data)}catch(Me){console.error("JSON \u89E3\u6790\u5931\u8D25:",Me)}de(me),$==null||$(me)},Z.current.onerror=function(ue){G==null||G(ue)})},Oe=function(ue){if(k===WebSocket.OPEN){var me,Me=t.json?JSON.stringify(ue):ue;(me=Z.current)===null||me===void 0||me.send(Me)}},xe=function(){var ue;Ie(!0),(ue=Z.current)===null||ue===void 0||ue.close(),clearTimeout(ee.current)};return(0,P.useEffect)(function(){return M||fe(),function(){xe()}},[a,M]),{readyState:k,sendMessage:Oe,connect:fe,disconnect:xe,webSocketIns:Z.current,latestMessage:le}},Dt=Mt,At=function(){var a=(0,P.useState)({width:window.innerWidth,height:window.innerHeight}),t=q()(a,2),r=t[0],n=t[1],i=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,P.useLayoutEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),{width:r.width,height:r.height}},Rt=At,St=function(){function p(a){D()(this,p),h()(this,"stage",void 0),h()(this,"ctx",void 0),h()(this,"autoFit",void 0),h()(this,"resizeObserver",null),this.stage=new Ue,this.ctx=a.container,this.autoFit=a.autoFit}return T()(p,[{key:"contentEvents",value:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){t.stage&&t.stage._resizeDOM()}),this.ctx&&this.resizeObserver.observe(this.ctx)}},{key:"data",value:function(){}},{key:"encode",value:function(){}},{key:"render",value:function(){this.stage&&this.ctx&&(this.stage.buildContentDOM({container:this.ctx,backgroundColor:"#fff"}),this.autoFit&&this.contentEvents())}},{key:"destroy",value:function(){this.ctx&&this.resizeObserver&&this.resizeObserver.unobserve(this.ctx)}}]),p}(),je=St,Tt=function(a){var t=a.options,r=(0,P.useRef)(null),n=(0,P.useRef)(null);return n.current=new je({container:r.current,autoFit:!0}),(0,P.useLayoutEffect)(function(){var i;return n.current=new je({container:r.current,autoFit:!0}),(i=n.current)===null||i===void 0||i.render(),function(){var d;return(d=n.current)===null||d===void 0?void 0:d.destroy()}},[]),(0,Te.jsx)("div",{ref:r})},Lt=Tt},69111:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(55832);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u6DFB\u52A0\u52A8\u753B",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"on",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"off",paraId:1,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},58025:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(66397);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},81253:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(23629);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"path2D",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u56FE\u5F62\u7684 Path2D",paraId:1,tocIndex:3},{value:"Path2D",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},4053:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(49011);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u62D6\u62FD\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u7ED9\u5143\u7D20\u6DFB\u52A0 draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8FD9\u662F boolean \u503C\u6216\u8005 \u51FD\u6570\u63A5\u6536 \u9F20\u6807\u4E8B\u4EF6\u53C2\u6570",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},76631:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(50138);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 on \u65B9\u6CD5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F7F\u7528 off \u65B9\u6CD5\u89E3\u7ED1\u4E8B\u4EF6\u3002",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},96627:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(52192);const o=[{value:"\u5C06\u591A\u4E2A\u56FE\u5F62\u7F16\u7EC4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},48977:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(54197);const o=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},13155:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(10372);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u76F4\u7EBF\u3001\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3001\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"start",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"end",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"points",paraId:1,tocIndex:3},{value:"\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"array",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3},{value:"smooth",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5E73\u6ED1",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"lineCap",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u7AEF\u70B9\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"butt",paraId:1,tocIndex:3},{value:"lineJoin",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u8FDE\u63A5\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"miter",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"lineDash",paraId:1,tocIndex:3},{value:"\u865A\u7EBF\u6837\u5F0F",paraId:1,tocIndex:3},{value:"[]number",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3}]},12477:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(89131);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u77E9\u5F62",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"height",paraId:1,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u5706\u89D2",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},25924:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(18283);const o=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"container",paraId:0,tocIndex:3},{value:"\u5BB9\u5668 dom",paraId:0,tocIndex:3},{value:"HTMLElement",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"width",paraId:0,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"height",paraId:0,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"backgroundColor",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u8272",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"#fff",paraId:0,tocIndex:3}]},27837:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(70821);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u6587\u5B57",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"content",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u5BB9",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"fontSize",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"16",paraId:1,tocIndex:3},{value:"textAlign",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u5BF9\u9F50",paraId:1,tocIndex:3},{value:"CanvasTextAlign",paraId:1,tocIndex:3},{value:"textBaseline",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u57FA\u51C6\u7EBF",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"CanvasTextBaseline",paraId:1,tocIndex:3},{value:"direction",paraId:1,tocIndex:3},{value:"\u6587\u672C\u65B9\u5411",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"fontStyle",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#333",paraId:1,tocIndex:3},{value:"fontVariant",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u53D8\u4F53",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"textDecoration",paraId:1,tocIndex:3},{value:"\u6587\u672C\u4FEE\u9970",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"align",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"verticalAlign",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"padding",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u8FB9\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"lineHeight",paraId:1,tocIndex:3},{value:"\u884C\u9AD8",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"letterSpacing",paraId:1,tocIndex:3},{value:"\u5B57\u7B26\u95F4\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},9978:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(26211);const o=[{value:"\u4E3A\u5565\u53EB ",paraId:0,tocIndex:0},{value:"heitu",paraId:0,tocIndex:0},{value:`
\u672C\u4EBA\u73A9 LOL \u7684\u7B2C\u4E00\u4E2A\u82F1\u96C4\u662F `,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:`,\u83B7\u5F97\u7684\u7B2C\u4E00\u4E2A\u76AE\u80A4\u662F\u9ED1\u8272\u7684\u90A3\u6B3E\uFF0C\u6240\u4EE5\u8D77\u540D\u5C31\u53EB\u4E86\u9ED1\u5154
\u559C\u6B22`,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:" \u7684\u5927\u62DB\u7ED9\u4E00\u4E2A\u5BF9\u65B9\u89D2\u8272\uFF0C\u522B\u7684\u89D2\u8272\u4E0D\u4F1A\u5BF9\u5979\u9020\u6210\u4F24\u5BB3\uFF0C\u5E0C\u671B\u6211\u7684\u5E93\u4E5F\u80FD\u50CF\u5979\u7684\u5927\u62DB\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"heitu",paraId:1,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:1,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:2,tocIndex:1}]},69236:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(29876);const o=[{value:`
  npm i heitu or yarn add heitu

`,paraId:0,tocIndex:0},{value:`import { useCookie } from 'heitu';
export const Index = () => {
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    'default-value',
  );
  return <></>;
};
`,paraId:1,tocIndex:1}]},58903:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(93139);const o=[{value:"\u7528\u4E8E\u5904\u7406\u5F02\u6B65\u51FD\u6570\u7684 Hook\uFF0C\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:0,tocIndex:1},{value:"\u81EA\u52A8\u5904\u7406\u5F02\u6B65\u72B6\u6001\uFF08loading\u3001error\u3001value\uFF09",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u8FDB\u884C\u4F9D\u8D56\u9879\u6BD4\u8F83",paraId:1,tocIndex:1},{value:"\u652F\u6301\u53D6\u6D88\u548C\u91CD\u8BD5\u673A\u5236",paraId:1,tocIndex:1},{value:"\u81EA\u52A8\u5904\u7406\u7ADE\u6001\u6761\u4EF6",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"fn",paraId:2,tocIndex:6},{value:"\u8981\u6267\u884C\u7684\u5F02\u6B65\u51FD\u6570",paraId:2,tocIndex:6},{value:"(...args: any[]) => Promise<any>",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"deps",paraId:2,tocIndex:6},{value:"\u4F9D\u8D56\u6570\u7EC4\uFF08\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\uFF09",paraId:2,tocIndex:6},{value:"any[]",paraId:2,tocIndex:6},{value:"[]",paraId:2,tocIndex:6},{value:"initialState",paraId:2,tocIndex:6},{value:"\u521D\u59CB\u72B6\u6001",paraId:2,tocIndex:6},{value:"{ loading?: boolean; error?: Error; value?: any }",paraId:2,tocIndex:6},{value:"{ loading: false }",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"state",paraId:3,tocIndex:7},{value:"\u5F02\u6B65\u64CD\u4F5C\u7684\u72B6\u6001",paraId:3,tocIndex:7},{value:"{ loading: boolean; error?: Error; value?: any }",paraId:3,tocIndex:7},{value:"execute",paraId:3,tocIndex:7},{value:"\u6267\u884C\u5F02\u6B65\u51FD\u6570\u7684\u89E6\u53D1\u5668",paraId:3,tocIndex:7},{value:"(...args: Parameters<typeof fn>) => Promise<any>",paraId:3,tocIndex:7},{value:"\u5B57\u6BB5",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"loading",paraId:4,tocIndex:8},{value:"\u662F\u5426\u6B63\u5728\u52A0\u8F7D",paraId:4,tocIndex:8},{value:"boolean",paraId:4,tocIndex:8},{value:"error",paraId:4,tocIndex:8},{value:"\u9519\u8BEF\u4FE1\u606F",paraId:4,tocIndex:8},{value:"Error | undefined",paraId:4,tocIndex:8},{value:"value",paraId:4,tocIndex:8},{value:"\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C",paraId:4,tocIndex:8},{value:"any",paraId:4,tocIndex:8}]},18632:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(72155);const o=[{value:"\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406\u53EF\u53D6\u6D88\u5F02\u6B65\u8BF7\u6C42\u7684 Hook\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u641C\u7D22\u3001\u5217\u8868\u52A0\u8F7D\u7B49\u9700\u8981\u53D6\u6D88\u524D\u4E00\u4E2A\u8BF7\u6C42\u7684\u573A\u666F\u3002",paraId:0,tocIndex:1},{value:"\u8C03\u8BD5\u8BF7\u5C06 network \u6539\u4E3A slow 4G",paraId:1,tocIndex:1},{value:"\u81EA\u52A8\u53D6\u6D88\u524D\u4E00\u4E2A\u672A\u5B8C\u6210\u7684\u8BF7\u6C42",paraId:2,tocIndex:2},{value:"\u652F\u6301 AbortController \u53D6\u6D88\u673A\u5236",paraId:2,tocIndex:2},{value:"\u9002\u914D axios \u8BF7\u6C42",paraId:2,tocIndex:2},{value:"\u9632\u6B62\u7ADE\u6001\u6761\u4EF6",paraId:2,tocIndex:2},{value:"\u81EA\u52A8\u7BA1\u7406\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"fn",paraId:3,tocIndex:5},{value:"\u5F02\u6B65\u51FD\u6570\uFF0C\u63A5\u6536 cancelInterceptor \u7528\u4E8E\u53D6\u6D88\u8BF7\u6C42",paraId:3,tocIndex:5},{value:"(context: { cancelInterceptor: () => void }) => Promise<T>",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"deps",paraId:3,tocIndex:5},{value:"\u4F9D\u8D56\u6570\u7EC4",paraId:3,tocIndex:5},{value:"any[]",paraId:3,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"initialState",paraId:3,tocIndex:5},{value:"\u521D\u59CB\u72B6\u6001",paraId:3,tocIndex:5},{value:"{ loading?: boolean; error?: Error; value?: T }",paraId:3,tocIndex:5},{value:"{ loading: false }",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"state",paraId:4,tocIndex:6},{value:"\u5F02\u6B65\u64CD\u4F5C\u72B6\u6001",paraId:4,tocIndex:6},{value:"{ loading: boolean; error?: Error; value?: T }",paraId:4,tocIndex:6},{value:"execute",paraId:4,tocIndex:6},{value:"\u6267\u884C\u5F02\u6B65\u51FD\u6570",paraId:4,tocIndex:6},{value:"() => Promise<T>",paraId:4,tocIndex:6},{value:"\u5B57\u6BB5",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"loading",paraId:5,tocIndex:7},{value:"\u662F\u5426\u6B63\u5728\u52A0\u8F7D",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"error",paraId:5,tocIndex:7},{value:"\u9519\u8BEF\u4FE1\u606F",paraId:5,tocIndex:7},{value:"Error | undefined",paraId:5,tocIndex:7},{value:"value",paraId:5,tocIndex:7},{value:"\u8BF7\u6C42\u7ED3\u679C",paraId:5,tocIndex:7},{value:"T | undefined",paraId:5,tocIndex:7}]},98285:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(6118);const o=[{value:"\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0C\u57FA\u4E8E React Context \u548C Hooks\uFF0C\u7528\u4E8E\u8DE8\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001\u548C\u903B\u8F91\u3002",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E React Hooks",paraId:1,tocIndex:2},{value:"\u652F\u6301 TypeScript",paraId:1,tocIndex:2},{value:"\u652F\u6301\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"\u652F\u6301\u521D\u59CB\u72B6\u6001\u6CE8\u5165",paraId:1,tocIndex:2},{value:"\u72B6\u6001\u5F15\u7528\u7A33\u5B9A",paraId:1,tocIndex:2},{value:"\u7B80\u5355\u6613\u7528",paraId:1,tocIndex:2},{value:`function createContainer<Value, Props = void>(
  useHook: (props: Props) => Value,
): {
  Provider: React.ComponentType<
    {
      initialState?: Partial<Value>;
      children: React.ReactNode;
    } & Props
  >;
  useContainer: () => Value;
  withContainer: <P extends object>(
    WrappedComponent: React.ComponentType<P & { container: Value }>,
  ) => React.ComponentType<P>;
  Context: React.Context<Value | null>;
};
`,paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"initialState",paraId:3,tocIndex:6},{value:"\u521D\u59CB\u72B6\u6001",paraId:3,tocIndex:6},{value:"Partial<Value>",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u5B50\u7EC4\u4EF6",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"...props",paraId:3,tocIndex:6},{value:"\u4F20\u9012\u7ED9 useHook \u7684\u53C2\u6570",paraId:3,tocIndex:6},{value:"Props",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6}]},30223:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(64577);const o=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"Cookie \u7684\u540D\u79F0",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"options",paraId:1,tocIndex:4},{value:"Cookie \u914D\u7F6E\u9879",paraId:1,tocIndex:4},{value:"CookieOptions",paraId:1,tocIndex:4},{value:"{ path: '/' }",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"undefined",paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"path",paraId:2,tocIndex:5},{value:"Cookie \u8DEF\u5F84",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"'/'",paraId:2,tocIndex:5},{value:"domain",paraId:2,tocIndex:5},{value:"Cookie \u57DF\u540D",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"maxAge",paraId:2,tocIndex:5},{value:"\u8FC7\u671F\u65F6\u95F4\uFF08\u79D2\uFF09",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"expires",paraId:2,tocIndex:5},{value:"\u8FC7\u671F\u65E5\u671F",paraId:2,tocIndex:5},{value:"Date",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"secure",paraId:2,tocIndex:5},{value:"\u662F\u5426\u53EA\u901A\u8FC7 HTTPS \u4F20\u8F93",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"sameSite",paraId:2,tocIndex:5},{value:"\u8DE8\u7AD9\u70B9\u8BF7\u6C42\u8BBE\u7F6E",paraId:2,tocIndex:5},{value:"'strict' | 'lax' | 'none'",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"cookieValue",paraId:3,tocIndex:6},{value:"\u5F53\u524D Cookie \u503C",paraId:3,tocIndex:6},{value:"T | undefined",paraId:3,tocIndex:6},{value:"updateCookie",paraId:3,tocIndex:6},{value:"\u66F4\u65B0 Cookie \u7684\u51FD\u6570",paraId:3,tocIndex:6},{value:"(newValue: T | ((prevValue: T) => T)) => void",paraId:3,tocIndex:6},{value:"refreshCookie",paraId:3,tocIndex:6},{value:"\u5237\u65B0 Cookie \u7684\u51FD\u6570",paraId:3,tocIndex:6},{value:"() => void",paraId:3,tocIndex:6}]},28355:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(28587);const o=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"seconds",paraId:1,tocIndex:4},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:4},{value:"number",paraId:1,tocIndex:4},{value:"0",paraId:1,tocIndex:4},{value:"startCountDown",paraId:1,tocIndex:4},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:4},{value:"(num?:number)=>void",paraId:1,tocIndex:4},{value:"false",paraId:1,tocIndex:4}]},96442:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(59301);const o=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"effect",paraId:1,tocIndex:4},{value:"\u526F\u4F5C\u7528\u51FD\u6570",paraId:1,tocIndex:4},{value:"() => void | (() => void | undefined)",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"deps",paraId:1,tocIndex:4},{value:"\u4F9D\u8D56\u6570\u7EC4",paraId:1,tocIndex:4},{value:"any[]",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4}]},94457:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(48035);const o=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"pixelRatio",paraId:1,tocIndex:3},{value:"\u5F53\u524D\u8BBE\u5907\u7684\u50CF\u7D20\u6BD4",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},6575:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(56139);const o=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(38668);const o=[{value:"useHtAxios \u662F\u4E00\u4E2A\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 Hook\uFF0C\u63D0\u4F9B\u4E86\u66F4\u4FBF\u6377\u7684\u8BF7\u6C42\u65B9\u5F0F\u548C\u66F4\u7075\u6D3B\u7684\u914D\u7F6E\u9009\u9879\u3002",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"config",paraId:2,tocIndex:3},{value:"axios \u5168\u5C40\u914D\u7F6E\u9879",paraId:2,tocIndex:3},{value:"AxiosRequestConfig",paraId:2,tocIndex:3},{value:"{}",paraId:2,tocIndex:3},{value:"requestInterceptorsCallback",paraId:2,tocIndex:3},{value:"\u8BF7\u6C42\u62E6\u622A\u5668\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:3},{value:"(config: AxiosRequestConfig) => AxiosRequestConfig",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"responseInterceptorOnSuccessCallback",paraId:2,tocIndex:3},{value:"\u54CD\u5E94\u6210\u529F\u62E6\u622A\u5668\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:3},{value:"(response: AxiosResponse) => AxiosResponse",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"responseInterceptorOnErrorCallback",paraId:2,tocIndex:3},{value:"\u54CD\u5E94\u9519\u8BEF\u62E6\u622A\u5668\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:3},{value:"(error: any) => any",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u540D\u79F0",paraId:3,tocIndex:4},{value:"\u63CF\u8FF0",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"get",paraId:3,tocIndex:4},{value:"GET \u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"<T, R>(url: string, data: T, config?: AxiosRequestConfig) => AxiosPromise<R>",paraId:3,tocIndex:4},{value:"post",paraId:3,tocIndex:4},{value:"POST \u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"<T, R>(url: string, data?: T, config?: AxiosRequestConfig) => AxiosPromise<R>",paraId:3,tocIndex:4},{value:"put",paraId:3,tocIndex:4},{value:"PUT \u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"<T, R>(url: string, data?: T, config?: AxiosRequestConfig) => AxiosPromise<R>",paraId:3,tocIndex:4},{value:"del",paraId:3,tocIndex:4},{value:"DELETE \u8BF7\u6C42\u65B9\u6CD5",paraId:3,tocIndex:4},{value:"<T, R>(url: string, data: T, config?: AxiosRequestConfig) => AxiosPromise<R>",paraId:3,tocIndex:4}]},10309:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(81233);const o=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(35412);const o=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(1019);const o=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(40801);const o=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setValue",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:4},{value:"(value: any) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"remove",paraId:2,tocIndex:4},{value:"\u6E05\u7A7A",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},38676:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(74719);const o=[{value:"\u4E00\u4E2A\u7528\u4E8E\u5904\u7406\u8F6E\u8BE2\u8BF7\u6C42\u7684 Hook\uFF0C\u652F\u6301\u5B9A\u65F6\u8F6E\u8BE2\u3001\u9519\u8BEF\u91CD\u8BD5\u3001\u624B\u52A8\u63A7\u5236\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:1},{value:"\u652F\u6301\u81EA\u52A8/\u624B\u52A8\u63A7\u5236\u8F6E\u8BE2",paraId:1,tocIndex:2},{value:"\u53EF\u914D\u7F6E\u8F6E\u8BE2\u95F4\u9694\u65F6\u95F4",paraId:1,tocIndex:2},{value:"\u5185\u7F6E\u9519\u8BEF\u91CD\u8BD5\u673A\u5236",paraId:1,tocIndex:2},{value:"\u63D0\u4F9B\u5B8C\u6574\u7684\u72B6\u6001\u7BA1\u7406",paraId:1,tocIndex:2},{value:"\u652F\u6301\u6210\u529F/\u5931\u8D25\u56DE\u8C03",paraId:1,tocIndex:2},{value:"\u81EA\u52A8\u6E05\u7406\u8D44\u6E90",paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"interval",paraId:2,tocIndex:6},{value:"\u8F6E\u8BE2\u95F4\u9694\u65F6\u95F4(ms)",paraId:2,tocIndex:6},{value:"number",paraId:2,tocIndex:6},{value:"3000",paraId:2,tocIndex:6},{value:"manual",paraId:2,tocIndex:6},{value:"\u662F\u5426\u624B\u52A8\u63A7\u5236\u8F6E\u8BE2",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"retryTimes",paraId:2,tocIndex:6},{value:"\u5931\u8D25\u91CD\u8BD5\u6B21\u6570",paraId:2,tocIndex:6},{value:"number",paraId:2,tocIndex:6},{value:"3",paraId:2,tocIndex:6},{value:"retryInterval",paraId:2,tocIndex:6},{value:"\u91CD\u8BD5\u95F4\u9694\u65F6\u95F4(ms)",paraId:2,tocIndex:6},{value:"number",paraId:2,tocIndex:6},{value:"1000",paraId:2,tocIndex:6},{value:"onSuccess",paraId:2,tocIndex:6},{value:"\u6210\u529F\u56DE\u8C03",paraId:2,tocIndex:6},{value:"(data: T) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"onError",paraId:2,tocIndex:6},{value:"\u5931\u8D25\u56DE\u8C03",paraId:2,tocIndex:6},{value:"(error: Error) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"data",paraId:3,tocIndex:7},{value:"\u8F6E\u8BE2\u8FD4\u56DE\u7684\u6570\u636E",paraId:3,tocIndex:7},{value:"T | undefined",paraId:3,tocIndex:7},{value:"loading",paraId:3,tocIndex:7},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"error",paraId:3,tocIndex:7},{value:"\u9519\u8BEF\u4FE1\u606F",paraId:3,tocIndex:7},{value:"Error | undefined",paraId:3,tocIndex:7},{value:"start",paraId:3,tocIndex:7},{value:"\u5F00\u59CB\u8F6E\u8BE2",paraId:3,tocIndex:7},{value:"() => void",paraId:3,tocIndex:7},{value:"stop",paraId:3,tocIndex:7},{value:"\u505C\u6B62\u8F6E\u8BE2",paraId:3,tocIndex:7},{value:"() => void",paraId:3,tocIndex:7}]},19905:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(74746);const o=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(81286);const o=[{value:"\u7528\u4E8E\u76D1\u542C DOM \u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u7684 Hook\u3002\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684 ResizeObserver API\uFF0C\u5F53\u76EE\u6807\u5143\u7D20\u7684\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"target",paraId:1,tocIndex:3},{value:"\u9700\u8981\u76D1\u542C\u5C3A\u5BF8\u53D8\u5316\u7684\u5143\u7D20\u5F15\u7528",paraId:1,tocIndex:3},{value:"RefObject<Element> | Element",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"callback",paraId:1,tocIndex:3},{value:"\u5C3A\u5BF8\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:3},{value:"(entries: ResizeObserverEntry[], observer: ResizeObserver) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"ResizeObserver \u7684\u914D\u7F6E\u9009\u9879",paraId:1,tocIndex:3},{value:"ResizeObserverOptions",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(5480);const o=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},82748:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(24393);const o=[{value:"useWebSocket",paraId:0,tocIndex:1},{value:"\u7528\u4E8E\u67D0\u4E9B\u9879\u76EE\u524D\u7AEF\u591A\u6B21\u8BF7\u6C42\u76F8\u540C\u6D6A\u8D39\u8D44\u6E90\u8BF7\u6C42\u65F6\u95F4\u7684\u95EE\u9898",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u8981\u6C42:",paraId:2,tocIndex:1},{value:"\u8BF7\u6C42\u53C2\u6570\u76F8\u540C",paraId:3,tocIndex:1},{value:"\u63A5\u53E3\u8FD4\u56DE\u4E5F\u76F8\u540C",paraId:3,tocIndex:1},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"onOpen",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u5EFA\u7ACB\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['open']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onClose",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u5173\u95ED\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['close']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onMessage",paraId:4,tocIndex:4},{value:"\u6536\u5230\u6D88\u606F\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(message: WebSocketEventMap['message']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onError",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u9519\u8BEF\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['error']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"protocols",paraId:4,tocIndex:4},{value:"WebSocket \u5B50\u534F\u8BAE",paraId:4,tocIndex:4},{value:"string | string[]",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"reconnectLimit",paraId:4,tocIndex:4},{value:"\u91CD\u8FDE\u6B21\u6570\u9650\u5236",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"3",paraId:4,tocIndex:4},{value:"reconnectInterval",paraId:4,tocIndex:4},{value:"\u91CD\u8FDE\u95F4\u9694\u65F6\u95F4(ms)",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"3000",paraId:4,tocIndex:4},{value:"manual",paraId:4,tocIndex:4},{value:"\u662F\u5426\u624B\u52A8\u63A7\u5236\u8FDE\u63A5",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"json",paraId:4,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u5E8F\u5217\u5316 JSON",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"readyState",paraId:5,tocIndex:5},{value:"WebSocket \u8FDE\u63A5\u72B6\u6001",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"sendMessage",paraId:5,tocIndex:5},{value:"\u53D1\u9001\u6D88\u606F\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"(message: string | ArrayBufferLike | Blob | ArrayBufferView) => void",paraId:5,tocIndex:5},{value:"connect",paraId:5,tocIndex:5},{value:"\u624B\u52A8\u8FDE\u63A5\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"disconnect",paraId:5,tocIndex:5},{value:"\u65AD\u5F00\u8FDE\u63A5\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"\u503C",paraId:6,tocIndex:6},{value:"\u72B6\u6001",paraId:6,tocIndex:6},{value:"\u63CF\u8FF0",paraId:6,tocIndex:6},{value:"0",paraId:6,tocIndex:6},{value:"CONNECTING",paraId:6,tocIndex:6},{value:"\u6B63\u5728\u8FDE\u63A5\u4E2D",paraId:6,tocIndex:6},{value:"1",paraId:6,tocIndex:6},{value:"OPEN",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u5DF2\u5EFA\u7ACB",paraId:6,tocIndex:6},{value:"2",paraId:6,tocIndex:6},{value:"CLOSING",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u6B63\u5728\u5173\u95ED",paraId:6,tocIndex:6},{value:"3",paraId:6,tocIndex:6},{value:"CLOSED",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u5DF2\u5173\u95ED",paraId:6,tocIndex:6}]},85854:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(51530);const o=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(68537);const o=[]},87724:function(W,l,e){e.r(l),e.d(l,{texts:function(){return o}});var y=e(79930);const o=[{value:"\u7C7B\u4F3C nest \u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

? \u8BF7\u8F93\u5165\u60A8\u7684\u6587\u4EF6\u540D\u4EE5\u9017\u53F7\u5206\u9694: home,login,register


? \u8BF7\u9009\u62E9\u4E00\u4E2A\u6A21\u5757\u5B8C\u6210\u751F\u6210: (Use arrow keys)
\u276F renderModule
  hook
  quit
  <!-- \u9009\u62E9 hook \u76F4\u63A5\u751F\u6210\uFF0C\u9009\u62E9 renderModule\u8FDB\u5165\u6837\u5F0F\u9009\u62E9 -->

? \u8BF7\u9009\u62E9\u4E00\u4E2A\u6A21\u5757\u5B8C\u6210\u751F\u6210: (Use arrow keys)
\u276F css
  scss
  less
  tailwind
  quit
 <!-- \u9009\u62E9 \u540E \u76F4\u63A5\u751F\u6210 -->
`,paraId:1,tocIndex:2},{value:`\u53EF\u4EE5\u9009\u62E9 \u6E32\u67D3\u6A21\u677F \u548C hook \u6A21\u677F
`,paraId:2,tocIndex:2},{value:`\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /style /interface.ts \u6E32\u67D3\u5C42\u6A21\u677F
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1 Im_Peco",paraId:5,tocIndex:3}]},78890:function(W,l){l.Z=`import { Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);
  const _stage = new Stage();

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  // console.log(_stage);
  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;
`}}]);
