"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{94294:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(55832),M={"docs-canvas-animation-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d,k;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=D.sent,I=E.Circle,v=E.Stage,h=E.useResizeObserver,f=E.Animate,D.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return u=D.sent,y=u.default,d=u.useLayoutEffect,k=u.useRef,D.abrupt("return",{default:function(){var O=new v,L=k(null),z=new I({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2});O.add(z);var m=function(){var $=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});$.start();var G=z.x,F=z.y,Y=z.x,K=z.y,V=z.radius,oe=z.radius,ae=function(he,ie){oe=(V-oe)*ie,Y=(300-Y)*ie,K=(400-K)*ie,z.attr({x:G+Y,y:F+K,radius:V-oe})};$.pushQueue(ae)};return z.on("click",m),d(function(){O.buildContentDOM({container:L.current,backgroundColor:"#fff"});var X=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});X.start();var $=z.radius,G=z.radius,F=function(K,V){G=($-G)*V,z.attr({radius:$+G})};return X.pushQueue(F),function(){return X.stop()}},[]),h(L,function(){return O._resizeDOM()}),y.createElement(y.Fragment,null,y.createElement("div",{ref:L}))}});case 14:case"end":return D.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-animation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},28835:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(66397),M={"docs-canvas-circle-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Circle,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=new v,O=d(null),L=new I({x:100,y:150,radius:50,strokeStyle:"blue",fillStyle:"pink",lineWidth:1,border:0,startAngle:200,endAngle:270}),z=new I({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});return W.add(L,z),y(function(){W.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),h(O,function(){return W._resizeDOM()}),u.createElement("div",{ref:O})}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-circle-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},80148:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(23629),M={"docs-canvas-custom-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Custom,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=new v,O=d(null),L=new Path2D;L.moveTo(200,240),L.bezierCurveTo(200,200,120,150,120,200),L.bezierCurveTo(120,280,200,300,200,340),L.bezierCurveTo(200,300,280,280,280,200),L.bezierCurveTo(280,150,200,200,200,240);var z=new I({path2D:L});return W.add(z),y(function(){W.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),h(O,function(){return W._resizeDOM()}),u.createElement("div",{ref:O})}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-custom-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Custom, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},70544:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(49011),E={"docs-canvas-drag-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d,k,x,D;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return v=O.sent,h=v.Circle,f=v.Stage,u=v.useResizeObserver,O.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return y=O.sent,d=y.default,k=y.useLayoutEffect,x=y.useRef,D=y.useState,O.abrupt("return",{default:function(){var z=D({x:0,y:0}),m=P()(z,2),X=m[0],$=m[1],G=new f,F=x(null),Y=new h({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2,draggable:!0}),K=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:2,border:2,draggable:function(oe,ae){$({x:ae.x,y:ae.y})}});return G.add(Y,K),k(function(){G.buildContentDOM({container:F.current,backgroundColor:"#fff"})},[]),u(F,function(){return G._resizeDOM()}),d.createElement(d.Fragment,null,X.x,",",X.y,d.createElement("div",{ref:F}))}});case 14:case"end":return O.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-canvas-drag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},11293:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(50138),E={"docs-canvas-event-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d,k,x,D;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return v=O.sent,h=v.Circle,f=v.Stage,u=v.useResizeObserver,O.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return y=O.sent,d=y.default,k=y.useLayoutEffect,x=y.useRef,D=y.useState,O.abrupt("return",{default:function(){var z=D(""),m=P()(z,2),X=m[0],$=m[1],G=new f,F=x(null),Y=new h({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});G.add(Y);var K=function(ce){$("click")},V=function(ce){$("mousedown")},oe=function(ce){$("mousemove")},ae=function(ce){$("mouseup")},pe=function(ce){$("mouseenter")},he=function(ce){$("contextmenu")};return Y.on("click",K),Y.on("mousedown",V),Y.on("mousemove",oe),Y.on("mouseup",ae),Y.on("mouseenter",pe),Y.on("contextmenu",he),k(function(){return G.buildContentDOM({container:F.current,backgroundColor:"#fff"}),function(){Y.off("click",K),Y.off("mousedown",V),Y.off("mousemove",oe),Y.off("mouseup",ae),Y.off("mouseenter",pe),Y.off("contextmenu",he)}},[]),u(F,function(){return G._resizeDOM()}),d.createElement(d.Fragment,null,X,d.createElement("div",{ref:F}))}});case 14:case"end":return O.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-canvas-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},90564:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(52192),M={"docs-canvas-group-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d,k,x,D;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=O.sent,I=E.Group,v=E.Text,h=E.Circle,f=E.Rect,u=E.Stage,y=E.useResizeObserver,O.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return d=O.sent,k=d.default,x=d.useLayoutEffect,D=d.useRef,O.abrupt("return",{default:function(){var z=D(null),m=new u,X=new v({content:"title",x:110,y:260,index:999}),$=new v({content:"name: test",x:110,y:280,index:999}),G=new I({}),F=new I({draggable:!0}),Y=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:1,border:0}),K=new f({fillStyle:"blue",x:150,y:100,width:100,height:100}),V=new f({fillStyle:"rgba(255, 255, 255, 1)",x:100,y:250,width:200,height:100,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,radius:4});return G.add(Y,K),F.add(V,X,$),m.add(G,F),x(function(){m.buildContentDOM({container:z.current,backgroundColor:"#fff"})},[]),y(z,function(){return m._resizeDOM()}),k.createElement(k.Fragment,null,k.createElement("div",{ref:z}))}});case 16:case"end":return O.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},81222:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(54197),M={"docs-canvas-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Custom,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=d(null),O=new v,L=new Path2D;L.moveTo(200,240),L.bezierCurveTo(200,200,120,150,120,200),L.bezierCurveTo(120,280,200,300,200,340),L.bezierCurveTo(200,300,280,280,280,200),L.bezierCurveTo(280,150,200,200,200,240);var z=new I({path2D:L,fillStyle:"pink",strokeStyle:"red"});return O.add(z),y(function(){O.buildContentDOM({container:W.current,backgroundColor:"#fff"})},[]),h(W,function(){return O._resizeDOM()}),u.createElement(u.Fragment,null,u.createElement("div",{ref:W}))}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},31930:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(10372),M={"docs-canvas-line-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Line,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=new v,O=d(null),L=new I,z=new I({start:{x:90,y:90},points:[70,70],end:{x:190,y:90},strokeStyle:"red",lineWidth:3,smooth:!0}),m=new I({start:{x:100,y:100},points:[70,70,50,50],end:{x:300,y:150},strokeStyle:"blue",lineWidth:2,smooth:!0}),X=new I({start:{x:300,y:350},end:{x:100,y:350},strokeStyle:"#eee",lineWidth:1,lineDash:[5,5]});return W.add(L,z,m,X),y(function(){W.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),h(O,function(){return W._resizeDOM()}),u.createElement("div",{ref:O})}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-line-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Line, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},98841:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(89131),M={"docs-canvas-rect-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Rect,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=new v,O=d(null),L=new I({fillStyle:"pink",x:250,y:100,width:100,height:100}),z=new I({shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,fillStyle:"blue",x:100,y:100,width:100,height:100,radius:5});return W.add(L,z),y(function(){W.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),h(O,function(){return W._resizeDOM()}),u.createElement("div",{ref:O})}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},67023:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(18283),M={"docs-canvas-stage-demo-stagedemo":{component:A.memo(A.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},9095:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(70821),M={"docs-canvas-text-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=x.sent,I=E.Text,v=E.Stage,h=E.useResizeObserver,x.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=x.sent,u=f.default,y=f.useLayoutEffect,d=f.useRef,x.abrupt("return",{default:function(){var W=new v,O=d(null),L=new I({content:"xixinia",index:999,x:250,y:250});return W.add(L),y(function(){W.buildContentDOM({container:O.current,backgroundColor:"#fff"})},[]),h(O,function(){return W._resizeDOM()}),u.createElement("div",{ref:O})}});case 13:case"end":return x.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-canvas-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Text, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},21755:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(34392),M={"docs-chart-line-chart-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=u.sent,I=E.LineChart,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=u.sent,h=v.default,u.abrupt("return",{default:function(){return h.createElement(I,null)}});case 9:case"end":return u.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-chart-line-chart-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  return <LineChart></LineChart>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},81866:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(18163),M={"docs-chart-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=h.sent,I=E.default,h.abrupt("return",{default:function(){return I.createElement(I.Fragment,null)}});case 5:case"end":return h.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-chart-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
  return <></>;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},44401:function(T,l,e){e.r(l),e.d(l,{demos:function(){return S}});var g=e(67294),o=e(26211),S={}},97086:function(T,l,e){e.r(l),e.d(l,{demos:function(){return S}});var g=e(67294),o=e(29876),S={}},64234:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(93139),E={"docs-hooks-use-async-fn-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=d.sent,h=v.default,d.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return f=d.sent,u=f.useAsyncFn,d.abrupt("return",{default:function(){var x=u(R()(o()().mark(function m(){var X;return o()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,new Promise(function(F){setTimeout(function(){F(200)},5e3)});case 2:return X=G.sent,G.abrupt("return",X);case 4:case"end":return G.stop()}},m)})),[]),D=P()(x,2),W=D[0],O=W.loading,L=W.value,z=D[1];return console.log(O,L),h.createElement("div",null,h.createElement("button",{onClick:function(){z()}},"get"),O&&"loading"," ",h.createElement("br",null),"data: ".concat(L||""))}});case 9:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
import { useAsyncFn } from 'heitu';

export default () => {
  const [{ loading, value }, fn] = useAsyncFn(async () => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 5000);
    });
    return res;
  }, []);
  console.log(loading, value);
  return (
    <div>
      <button
        onClick={() => {
          fn();
        }}
      >
        get
      </button>
      {loading && 'loading'} <br />
      {\`data: \${value ? value : ''}\`}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},75326:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(72155),E={"docs-hooks-use-cancel-async-fn-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=x.sent,h=v.default,f=v.useRef,x.next=7,Promise.resolve().then(e.bind(e,14980));case 7:return u=x.sent,y=u.useCancelAsyncFn,d=u.useHtAxios,x.abrupt("return",{default:function(){var W=f(),O=d({config:{timeout:1e4},requestInterceptorsCallBack:function(Y){return Y},responseInterceptorsCallBack:function(Y){return Y.data}}),L=y(function(){var F=R()(o()().mark(function Y(K){var V;return o()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return V=K.cancelInterceptor,ae.abrupt("return",function(){var pe=R()(o()().mark(function he(ie){var ce;return o()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,O.get("http://jsonplaceholder.typicode.com/posts").catch(function(Re){console.log(Re)});case 2:return ce=fe.sent,V(),fe.abrupt("return",ce);case 5:case"end":return fe.stop()}},he)}));return function(he){return pe.apply(this,arguments)}}());case 2:case"end":return ae.stop()}},Y)}));return function(Y){return F.apply(this,arguments)}}(),[]),z=P()(L,2),m=z[0],X=m.value,$=m.loading,G=z[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){var F=R()(o()().mark(function K(){return o()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:G();case 1:case"end":return oe.stop()}},K)}));function Y(){return F.apply(this,arguments)}return Y}()},"12312"))}});case 11:case"end":return x.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
  const [{ value, loading }, fn] = useCancelAsyncFn(
    async ({ cancelInterceptor }) => {
      return async (query: string) => {
        const res = await htAxios
          .get(\`http://jsonplaceholder.typicode.com/posts\`)
          .catch((err) => {
            console.log(err);
          });
        cancelInterceptor();
        return res;
      };
    },
    [],
  );

  return (
    <div>
      <button
        onClick={async () => {
          fn();
        }}
      >
        12312
      </button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},31701:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(64577),E={"docs-hooks-use-cookie-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=d.sent,h=v.default,d.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return f=d.sent,u=f.useCookie,d.abrupt("return",{default:function(){var x={path:"/"},D="cookie-key",W=u(D,x,"default-value"),O=P()(W,3),L=O[0],z=O[1],m=O[2],X=function(){z("new-cookie-value")},$=function(){z(void 0)},G=function(){if("cookieStore"in window){var Y=window.cookieStore;Y.set({name:D,value:"changed"})}else document.cookie="".concat(D,"=changed; path=/")};return h.createElement("div",null,h.createElement("p",null,"Click on the button to update or clear the cookie"),h.createElement("p",{color:"blue"},"cookie: ",L||"no value"),h.createElement("button",{onClick:X},"Update the cookie"),h.createElement("button",{onClick:$},"Clear the cookie"),h.createElement("button",{onClick:G},"Changing the cookie through other methods"),h.createElement("button",{onClick:m},"Refresh the cookie"))}});case 9:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
      <p>Click on the button to update or clear the cookie</p>
      <p color="blue">cookie: {cookieValue || 'no value'}</p>
      <button onClick={updateButtonClick}>Update the cookie</button>
      <button onClick={deleteButtonClick}>Clear the cookie</button>
      <button onClick={change}>
        Changing the cookie through other methods
      </button>
      <button onClick={refreshCookie}>Refresh the cookie</button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},67731:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(28587),E={"docs-hooks-use-count-down-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=d.sent,h=v.default,d.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return f=d.sent,u=f.useCountDown,d.abrupt("return",{default:function(){var x=u(),D=P()(x,3),W=D[0],O=D[1],L=D[2];return h.createElement("div",null,W,h.createElement("button",{onClick:function(){O(60)}},"\u5F00\u59CB"),h.createElement("button",{onClick:function(){L()}},"\u6682\u505C"),h.createElement("button",{onClick:function(){O()}},"\u7EE7\u7EED"))}});case 9:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},66609:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(59301),E={"docs-hooks-use-deep-compare-effect-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d,k;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=D.sent,h=v.default,f=v.useState,u=v.useEffect,y=v.useRef,D.next=9,Promise.resolve().then(e.bind(e,14980));case 9:return d=D.sent,k=d.useDeepCompareEffect,D.abrupt("return",{default:function(){var O=f(0),L=P()(O,2),z=L[0],m=L[1],X=y(0),$=y(0);return u(function(){X.current+=1},[{}]),k(function(){return $.current+=1,function(){}},[{}]),h.createElement("div",null,h.createElement("p",null,"effectCount: ",X.current),h.createElement("p",null,"deepCompareCount: ",$.current),h.createElement("p",null,h.createElement("button",{type:"button",onClick:function(){return m(function(F){return F+1})}},"reRender")))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},5958:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(48035),M={"docs-hooks-use-device-pixel-ratio-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=u.sent,I=E.default,u.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return v=u.sent,h=v.useDevicePixelRatio,u.abrupt("return",{default:function(){var d=h(),k=d.pixelRatio;return I.createElement("p",null,"Device pixel ratio: ",k)}});case 9:case"end":return u.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},65585:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(56139),M={"docs-hooks-use-element-size-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=d.sent,I=E.default,v=E.useRef,h=E.useEffect,d.next=8,Promise.resolve().then(e.bind(e,14980));case 8:return f=d.sent,u=f.useElementSize,d.abrupt("return",{default:function(){var x=v(null),D=u(x);return h(function(){console.log(x.current.mount)},[]),I.createElement("div",null,I.createElement("textarea",{ref:x,disabled:!0,style:{width:200,height:200},value:"width: ".concat(D.width,`
height: `).concat(D.height)}))}});case 11:case"end":return d.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},23897:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(38668),M={"docs-hooks-use-ht-axios-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v,h;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=u.sent,I=E.useHtAxios,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=u.sent,h=v.default,u.abrupt("return",{default:function(){var d=I({config:{timeout:3e3},requestInterceptorsCallBack:function(D){return D},responseInterceptorsCallBack:function(D){return D.data}}),k=function(){var x=P()(o()().mark(function D(){var W;return o()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,d.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:W=L.sent,console.log(W);case 4:case"end":return L.stop()}},D)}));return function(){return x.apply(this,arguments)}}();return h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},h.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){k()}},"123"))}});case 9:case"end":return u.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
import React from 'react';
export default () => {
  const htAxios = useHtAxios({
    config: { timeout: 3000 },
    requestInterceptorsCallBack: (config) => {
      return config;
    },
    responseInterceptorsCallBack: (response) => {
      return response.data;
    },
  });

  const getInfo = async () => {
    const res = await htAxios.get('http://jsonplaceholder.typicode.com/posts', {
      aa: '23123',
    });
    console.log(res);
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
        123
      </button>
    </div>
  );
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(14980),react:e(67294)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},97716:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(81233),E={"docs-hooks-use-image-load-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=d.sent,h=v.default,d.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return f=d.sent,u=f.useImageLoad,d.abrupt("return",{default:function(){var x=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],D=u({imgList:x}),W=P()(D,4),O=W[0],L=W[1],z=W[2],m=W[3];return h.createElement("div",{style:{display:"flex"}},m?"loading":h.createElement(h.Fragment,null,h.createElement("div",null,h.createElement("div",null,"img"),h.createElement("img",{src:O,style:{width:200}})),h.createElement("div",null,h.createElement("div",null,"ftimgList"),L==null?void 0:L.map(function(X,$){return h.createElement("img",{src:X,key:$,style:{width:200}})})),h.createElement("div",null,h.createElement("div",null,"allowImgList"),z==null?void 0:z.map(function(X,$){return h.createElement("img",{src:X,key:$,style:{width:200}})}))))}});case 9:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},79817:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(35412),E={"docs-hooks-use-in-view-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=d.sent,h=v.default,d.next=6,Promise.resolve().then(e.bind(e,14980));case 6:return f=d.sent,u=f.useInView,d.abrupt("return",{default:function(){var x=u(),D=P()(x,2),W=D[0],O=D[1];return h.createElement("div",null,h.createElement("div",null,O?"active":"inactive"),h.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},h.createElement("div",{ref:W},"12312312")))}});case 9:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},59842:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(1019),E={"docs-hooks-use-infinite-scroll-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d,k;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return k=function(O){var L=O.hasMore,z=O.loadMore,m=d(),X=P()(m,2),$=X[0],G=X[1];return f(function(){G&&L&&(z==null||z())},[L,G,z]),h.createElement("div",{ref:$},L?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},D.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return v=D.sent,h=v.default,f=v.useEffect,D.next=8,Promise.resolve().then(e.bind(e,14980));case 8:return u=D.sent,y=u.useInfiniteScroll,d=u.useInView,D.abrupt("return",{default:function(){var O=new Array(100).fill(1).map(function($,G){return G}),L=y({dataSource:O,pageSize:10,delay:100}),z=L.data,m=L.hasMore,X=L.loadMore;return h.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},z==null?void 0:z.map(function($){return h.createElement("span",null,$)}),h.createElement(k,{loadMore:X,hasMore:m}))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},96122:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(40801),E={"docs-hooks-use-local-storage-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return v=y.sent,h=v.useLocalStorage,f=function(){var k=h("my-key","foo"),x=P()(k,3),D=x[0],W=x[1],O=x[2];return M.createElement("div",null,M.createElement("div",null,"Value: ",D),M.createElement("button",{onClick:function(){return W("bar")}},"bar"),M.createElement("button",{onClick:function(){return W("baz")}},"baz"),M.createElement("button",{onClick:function(){return O()}},"Remove"))},y.abrupt("return",{default:f});case 6:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},13917:function(T,l,e){e.r(l),e.d(l,{demos:function(){return S}});var g=e(67294),o=e(44012),S={}},37868:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(74746),E={"docs-hooks-use-previous-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=x.sent,h=v.default,f=v.useState,x.next=7,Promise.resolve().then(e.bind(e,14980));case 7:return u=x.sent,y=u.usePrevious,d=function(W){var O=y(W);return console.log(O,W),h.createElement("div",null,h.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(O==null?void 0:O.aa)||0," "),h.createElement("div",null,"\u5F53\u524D\u7684aa: ",W==null?void 0:W.aa))},x.abrupt("return",{default:function(){var W=f(1),O=P()(W,2),L=O[0],z=O[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){return z(L+1)}},"+1"),h.createElement(d,{aa:L}))}});case 11:case"end":return x.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},7411:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(81286),E={"docs-hooks-use-resize-observer-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f,u,y,d;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=x.sent,h=v.default,f=v.useRef,u=v.useState,x.next=8,Promise.resolve().then(e.bind(e,14980));case 8:return y=x.sent,d=y.useResizeObserver,x.abrupt("return",{default:function(){var W=f(null),O=u({width:0,height:0}),L=P()(O,2),z=L[0],m=L[1];return d(W,function(X){var $=P()(X,1),G=$[0],F=G.contentRect,Y=F.width,K=F.height;m({width:Y,height:K})}),h.createElement("div",null,h.createElement("textarea",{ref:W,disabled:!0,style:{width:200,height:200},value:"width: ".concat(z.width,`
height: `).concat(z.height)}))}});case 11:case"end":return x.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
import { useResizeObserver } from 'heitu';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useResizeObserver(ref, (entries) => {
    const [entry] = entries;
    const { width, height } = entry.contentRect;
    setSize({width, height});
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},12830:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var g=e(17061),o=e.n(g),S=e(27424),P=e.n(S),A=e(17156),R=e.n(A),M=e(67294),c=e(5480),E={"docs-hooks-use-session-storage-demo-0":{component:M.memo(M.lazy(R()(o()().mark(function I(){var v,h,f;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return v=y.sent,h=v.useSessionStorage,f=function(){var k=h("my-key","foo"),x=P()(k,3),D=x[0],W=x[1],O=x[2];return M.createElement("div",null,M.createElement("div",null,"Value: ",D),M.createElement("button",{onClick:function(){return W("bar")}},"bar"),M.createElement("button",{onClick:function(){return W("baz")}},"baz"),M.createElement("button",{onClick:function(){return O()}},"Remove"))},y.abrupt("return",{default:f});case 6:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(14980)},renderOpts:{compile:function(){var I=R()(o()().mark(function h(){var f,u=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,u));case 3:case"end":return d.stop()}},h)}));function v(){return I.apply(this,arguments)}return v}()}}}},9954:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var g=e(17061),o=e.n(g),S=e(17156),P=e.n(S),A=e(67294),R=e(51530),M={"docs-hooks-use-window-size-demo-0":{component:A.memo(A.lazy(P()(o()().mark(function c(){var E,I,v;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,14980));case 2:return E=f.sent,I=E.useWindowSize,v=function(){var y=I(),d=y.width,k=y.height;return A.createElement("div",null,A.createElement("p",null,"width: ",d,", height: ",k))},f.abrupt("return",{default:v});case 6:case"end":return f.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(14980)},renderOpts:{compile:function(){var c=P()(o()().mark(function I(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},I)}));function E(){return c.apply(this,arguments)}return E}()}}}},11171:function(T,l,e){e.r(l),e.d(l,{demos:function(){return S}});var g=e(67294),o=e(68537),S={}},6202:function(T,l,e){e.r(l),e.d(l,{demos:function(){return S}});var g=e(67294),o=e(79930),S={}},14980:function(T,l,e){e.r(l),e.d(l,{Animate:function(){return L},Circle:function(){return ze},Custom:function(){return ke},Group:function(){return $e},Line:function(){return _e},LineChart:function(){return mt},Rect:function(){return Xe},Stage:function(){return Se},Text:function(){return Oe},useAsyncFn:function(){return We},useCancelAsyncFn:function(){return lt},useCookie:function(){return En},useCountDown:function(){return gn},useDeepCompareEffect:function(){return Pn},useDevicePixelRatio:function(){return Dn},useElementSize:function(){return Ln},useHtAxios:function(){return Hn},useImageLoad:function(){return Vn},useInView:function(){return at},useInfiniteScroll:function(){return nt},useLocalStorage:function(){return fn},usePrevious:function(){return ot},useResizeObserver:function(){return Pe},useSessionStorage:function(){return In},useWindowSize:function(){return st}});var g=e(42122),o=e.n(g),S=e(56690),P=e.n(S),A=e(89728),R=e.n(A),M=e(38416),c=e.n(M),E=e(861),I=e.n(E),v=window.devicePixelRatio,h=function(){},f=function(a){return a.name==="Stage"},u=function(a,t){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(t)).map(function(r){return[r.name,r]})).values())},y=function(a,t,r){return r!=null&&r.x&&r!==null&&r!==void 0&&r.width&&r.y&&r!==null&&r!==void 0&&r.height?a>(r==null?void 0:r.x)*v&&a<(((r==null?void 0:r.x)||0)+((r==null?void 0:r.width)||0))*v&&t>(r==null?void 0:r.y)*v&&t<r.y*v+r.height*v:!1},d=function(a){var t=a.mouseX,r=a.mouseY,n=a.path2D,i=a.ctx;return n&&i&&(i==null?void 0:i.isPointInPath(n,t,r))},k={linear:function(a){return a},quadraticIn:function(a){return a*a},quadraticOut:function(a){return a*(2-a)},quadraticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(a){var t=a;return t*t*t},cubicOut:function(a){var t=a;return--t*t*t+1},cubicInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(a){var t=a;return t*t*t*t},quarticOut:function(a){var t=a;return 1- --t*t*t*t},quarticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(a){return a*a*a*a*a},quinticOut:function(a){var t=a;return--t*t*t*t*t+1},quinticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(a){return 1-Math.cos(a*Math.PI/2)},sinusoidalOut:function(a){return Math.sin(a*Math.PI/2)},sinusoidalInOut:function(a){return .5*(1-Math.cos(Math.PI*a))},exponentialIn:function(a){return a===0?0:Math.pow(1024,a-1)},exponentialOut:function(a){return a===1?1:1-Math.pow(2,-10*a)},exponentialInOut:function(a){var t=a;return a===0?0:a===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(a){return 1-Math.sqrt(1-a*a)},circularOut:function(a){var t=a;return Math.sqrt(1- --t*t)},circularInOut:function(a){var t=a;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return-(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n))},elasticOut:function(a){var t,r=.1,n=.4;return a===0?0:a===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*a)*Math.sin((a-t)*(2*Math.PI)/n)+1)},elasticInOut:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return(i*=2)<1?-.5*(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)*.5+1},backIn:function(a){var t=1.70158;return a*a*((t+1)*a-t)},backOut:function(a){var t=a,r=1.70158;return--t*t*((r+1)*t+r)+1},backInOut:function(a){var t=a,r=1.70158*1.525;return(t*=2)<1?.5*(t*t*((r+1)*t-r)):.5*((t-=2)*t*((r+1)*t+r)+2)},bounceIn:function(a){return 1-k.bounceOut(1-a)},bounceOut:function(a){var t=a;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(a){return a<.5?k.bounceIn(a*2)*.5:k.bounceOut(a*2-1)*.5+.5}};function x(_,a,t){var r=a-_,n=t*r,i=_+n,s=_<a?_:a,p=_>a?_:a;return i=Math.max(i,s),i=Math.min(i,p),i}var D=function(a,t,r){if(typeof a=="number"&&typeof t=="number")return x(a,t,r);if(Array.isArray(a)&&Array.isArray(t))return a.map(function(n,i){return x(n,t[i],r)})},W={duration:1e3,easing:"linear",iterationCount:1},O=function(){function _(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};P()(this,_),c()(this,"rafTimer",null),c()(this,"startTime",null),c()(this,"startProp",void 0),c()(this,"targetProp",void 0),c()(this,"cfg",void 0),c()(this,"forward",!0),c()(this,"queue",[]),this.startProp=a,this.targetProp=t,this.cfg=o()(o()({},W),r)}return R()(_,[{key:"start",value:function(){var t=this,r=this.cfg,n=r.duration,i=r.easing,s=r.during,p=r.iterationCount,C=Object.keys(this.targetProp),B=function U(Q){t.startTime||(t.startTime=Q);var N=k[i](Math.min((Q-t.startTime)/n,1));t.forward===!1&&(N=1-N);var j={};C.forEach(function(w){var J=D(t.startProp[w],t.targetProp[w],N);j[w]=J}),s&&s(N,j);var H=t.forward?N<1:0<N;H?t.rafTimer=requestAnimationFrame(U):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(w){w(j,N)});var Z=t.forward?N===1:N===0;Z&&p===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(B)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),_}(),L=O,z=e(66115),m=e.n(z),X=e(61655),$=e.n(X),G=e(26389),F=e.n(G),Y=e(30954),K=e(67294),V,oe=Object.prototype.toString;function ae(_){return typeof _=="function"}var pe=function(a){return typeof a!="undefined"};function he(_){return typeof _=="undefined"}var ie=function(a){return typeof a=="boolean"},ce=function(a){return typeof a=="number"};function Ae(_){return typeof _=="string"}function fe(_){return oe.call(_)==="[object Object]"}var Re=null,Ee=typeof window!="undefined",It=typeof navigator!="undefined";function Le(){}var pt=Ee&&((V=window)===null||V===void 0||(V=V.navigator)===null||V===void 0?void 0:V.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),_t=!K.useId,be=e(79697),Ke=function(){function _(){P()(this,_),c()(this,"eventListeners",{})}return R()(_,[{key:"on",value:function(t,r){var n=t.split(" "),i=n.length,s,p,C,B;for(s=0;s<i;s++)p=n[s],C=p.split("."),B=C[0],this.eventListeners[B]||(this.eventListeners[B]=[]),this.eventListeners[B].push({name:(r==null?void 0:r.name)||"",handler:r});return this}},{key:"_off",value:function(t,r,n){var i=this.eventListeners[t],s,p,C;for(s=0;s<i.length;s++)if(p=i[s].name,C=i[s].handler,(!r||p===r)&&(!n||n===C)){if(i.splice(s,1),i.length===0){delete this.eventListeners[t];break}s--}}},{key:"off",value:function(t,r){var n=(t||"").split(" "),i=n.length,s,p,C,B,U,Q;for(s=0;s<i;s++)if(C=n[s],B=C.split("."),U=B[0],Q=B[1],U)this.eventListeners[U]&&this._off(U,Q,r);else for(p in this.eventListeners)this._off(p,Q,r);return this}},{key:"_fire",value:function(t,r,n){if(f(n))this.eventListeners[t].forEach(function(p){p.handler(r)});else{var i;if((n==null||(i=n.eventListeners)===null||i===void 0||(i=i[t])===null||i===void 0?void 0:i.length)>0&&n.eventListeners[t].forEach(function(p){p.handler(r,n)}),n!=null&&n.draggable){var s;ae(n==null?void 0:n.draggable)&&n.dragging&&(n==null||n.draggable(r,n)),(s=n.eventListeners)===null||s===void 0||(s=s[t])===null||s===void 0||s.forEach(function(p){p.handler(r,n)})}}}},{key:"fire",value:function(t,r){var n=r.evt,i=r.target,s=r.currentTarget;if(f(s)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,s);for(var p=i==null?void 0:i.children,C=0;C<p.length;C++){var B,U,Q=I()(p.filter(function(b){return b.draggable}));if(t==="mousedown"){var N=Q.filter(function(b){var le;return b==null?void 0:b.inScope(n,(le=i.canvas)===null||le===void 0?void 0:le.context)}),j=N.sort(function(b,le){return le.index-b.index})[0];j&&(j.name==="Group"?(j.dragging=!0,j.children.forEach(function(b){b.offsetX=b!=null&&b.x?n.offsetX-(b==null?void 0:b.x):n.offsetX,b.offsetY=b!=null&&b.y?n.offsetY-(b==null?void 0:b.y):n.offsetY})):(j.dragging=!0,j.offsetX=j!=null&&j.x?n.offsetX-(j==null?void 0:j.x):n.offsetX,j.offsetY=j!=null&&j.y?n.offsetY-(j==null?void 0:j.y):n.offsetY))}(!(0,be.Z)((B=p[C])===null||B===void 0?void 0:B.eventListeners)||(U=p[C])!==null&&U!==void 0&&U.draggable)&&this.fire(t,{evt:n,target:i,currentTarget:p[C]})}}else{var H;if(s!=null&&s.draggable&&t==="mouseup"&&(s.dragging=!1),s!=null&&s.draggable&&s.dragging&&t==="mousemove"){var Z,w=(Z=this.canvas)===null||Z===void 0||(Z=Z.canvas)===null||Z===void 0?void 0:Z.getBoundingClientRect();if(s.name==="Text"){var J=w!=null&&w.left?n.clientX-(w==null?void 0:w.left):n.clientX,de=w!=null&&w.top?n.clientY-(w==null?void 0:w.top):n.clientY;s.x=s!=null&&s.offsetX?J-(s==null?void 0:s.offsetX):J,s.y=s!=null&&s.offsetY?de-(s==null?void 0:s.offsetY):de}else if(s.name==="Group"){var se=w!=null&&w.left?n.clientX-(w==null?void 0:w.left):n.clientX,ue=w!=null&&w.top?n.clientY-(w==null?void 0:w.top):n.clientY;s.children.forEach(function(b){if(b.name==="Text"){var le=w!=null&&w.left?n.clientX-(w==null?void 0:w.left):n.clientX,ye=w!=null&&w.top?n.clientY-(w==null?void 0:w.top):n.clientY;b.x=b!=null&&b.offsetX?le-(b==null?void 0:b.offsetX):le,b.y=b!=null&&b.offsetY?ye-(b==null?void 0:b.offsetY):ye}else b.x=b!=null&&b.offsetX?se-(b==null?void 0:b.offsetX):se,b.y=b!=null&&b.offsetY?ue-(b==null?void 0:b.offsetY):ue})}else{var re=w!=null&&w.left?n.clientX-(w==null?void 0:w.left):n.clientX,ve=w!=null&&w.top?n.clientY-(w==null?void 0:w.top):n.clientY;s.x=s!=null&&s.offsetX?re-(s==null?void 0:s.offsetX):re,s.y=s!=null&&s.offsetY?ve-(s==null?void 0:s.offsetY):ve}this.batchDraw(this)}if(s!=null&&s.inScope&&(H=i.canvas)!==null&&H!==void 0&&H.context){var ne;if(s!=null&&s.inScope(n,(ne=i.canvas)===null||ne===void 0?void 0:ne.context)){var q;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,s),t==="mousemove"&&!s.mouseInScope&&((q=s.eventListeners.mouseenter)===null||q===void 0?void 0:q.length)>0&&(s.mouseInScope=!0,i._fire("mouseenter",n,s))}else if(t==="mousemove"){var te;s.mouseInScope=!1,((te=i.eventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&i._fire("mouseleave",n,s)}}}}},{key:"attr",value:function(t){var r=this,n;this.parent&&((0,Y.Z)(t,function(i,s){i&&(r[s]=i)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),_}(),me=Ke,Ue=function(_){$()(t,_);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),c()(m()(n),"name","Circle"),c()(m()(n),"parent",null),c()(m()(n),"x",void 0),c()(m()(n),"y",void 0),c()(m()(n),"radius",void 0),c()(m()(n),"lineWidth",void 0),c()(m()(n),"fillStyle",void 0),c()(m()(n),"strokeStyle",void 0),c()(m()(n),"arc",void 0),c()(m()(n),"startAngle",void 0),c()(m()(n),"endAngle",void 0),c()(m()(n),"innerRadius",void 0),c()(m()(n),"index",void 0),c()(m()(n),"path2D",void 0),c()(m()(n),"border",void 0),c()(m()(n),"shadowColor",void 0),c()(m()(n),"shadowBlur",0),c()(m()(n),"shadowOffsetY",0),c()(m()(n),"shadowOffsetX",0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,i,s,p){var C=this.deg2rad(p),B=n+s*Math.cos(C),U=i+s*Math.sin(C);return{x:B,y:U}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,i="M ".concat(this.x," ").concat(n),s="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),p=this.y-this.innerRadius,C="M ".concat(this.x," ").concat(p),B="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(p);return"".concat(i," ").concat(s," ").concat(C," ").concat(B," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),i=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),s=this.endAngle-this.startAngle>=180?1:0,p="M ".concat(n.x," ").concat(n.y),C="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(s," 1 ").concat(i.x," ").concat(i.y),B=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),U=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),Q="L".concat(U.x," ").concat(U.y),N="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(s," 0 ").concat(B.x," ").concat(B.y);return"".concat(p," ").concat(C," ").concat(Q," ").concat(N," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var i=this.startAngle===0&&this.endAngle===360,s;switch(this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.border){case 0:return s=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(s),n.fill(s),this.path2D=s,s;case 1:return s=new Path2D(this.calcRingD(i)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(s),this.path2D=s,s;case 2:return s=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(s),n.fill(s),this.path2D=s,s}}},{key:"inScope",value:function(n,i){var s=n.offsetX*v,p=n.offsetY*v;return this!==null&&this!==void 0&&this.path2D?d({mouseX:s,mouseY:p,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(me),ze=Ue,je=function(_){$()(t,_);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),c()(m()(n),"name","Custom"),c()(m()(n),"x",void 0),c()(m()(n),"y",void 0),c()(m()(n),"width",void 0),c()(m()(n),"height",void 0),c()(m()(n),"fillStyle",void 0),c()(m()(n),"strokeStyle",void 0),c()(m()(n),"lineWidth",void 0),c()(m()(n),"index",void 0),c()(m()(n),"path2D",void 0),c()(m()(n),"parent",null),c()(m()(n),"shadowColor",void 0),c()(m()(n),"shadowBlur",0),c()(m()(n),"shadowOffsetY",0),c()(m()(n),"shadowOffsetX",0),!r.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,n.shadowColor="transparent",(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n,i){var s=n.offsetX*v,p=n.offsetY*v;return this!==null&&this!==void 0&&this.path2D?d({mouseX:s,mouseY:p,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(me),ke=je,Ne=function(_){$()(t,_);var a=F()(t);function t(){var r;P()(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=a.call.apply(a,[this].concat(i)),c()(m()(r),"children",[]),r}return R()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var i=this.children||[],s=[];return i.forEach(function(p){n(p)&&s.push(p)}),s}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var i=arguments.length<=0?void 0:arguments[0];return i.index=i.index?i.index:this.getChildren().length,i.parent=this,this.getChildren().push(i),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(i){var s=n.some(function(p){return p===i});s||n.push(i)}),this.children=n,n}},{key:"batchDraw",value:function(n){var i,s,p,C,B;!((i=n.canvas)!==null&&i!==void 0&&i.context)||!((s=n.canvas)!==null&&s!==void 0&&s.canvas)||((p=n.canvas)===null||p===void 0||p.context.clearRect(0,0,(C=n.canvas)===null||C===void 0?void 0:C.canvas.offsetWidth,(B=n.canvas)===null||B===void 0?void 0:B.canvas.offsetHeight),this.sortChildren(function(U,Q){return U.index-Q.index}),this.deduplication(),this.getChildren().forEach(function(U){var Q;if((Q=n.canvas)!==null&&Q!==void 0&&Q.context&&U!==null&&U!==void 0&&U.draw){var N;U==null||U.draw((N=n.canvas)===null||N===void 0?void 0:N.context)}}))}}]),t}(me),Te=Ne,Qe=function(_){$()(t,_);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),c()(m()(n),"parent",void 0),c()(m()(n),"name","Group"),c()(m()(n),"draggable",!1),n.parent=null,(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"draw",value:function(n){if(n)return this.sortChildren(function(i,s){return i.index-s.index}),this.deduplication(),this.getChildren().forEach(function(i){n&&i!==null&&i!==void 0&&i.draw&&(i==null||i.draw(n))}),this}},{key:"inScope",value:function(n,i){return this.getChildren().some(function(s){return"inScope"in s&&typeof s.inScope=="function"?s.inScope(n,i):!1})}}]),t}(Te),$e=Qe,Ye=e(27424),ee=e.n(Ye),Fe=function(_){$()(t,_);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),c()(m()(n),"name","Line"),c()(m()(n),"start",void 0),c()(m()(n),"end",void 0),c()(m()(n),"points",void 0),c()(m()(n),"smooth",void 0),c()(m()(n),"strokeStyle",void 0),c()(m()(n),"lineWidth",void 0),c()(m()(n),"lineCap",void 0),c()(m()(n),"lineJoin",void 0),c()(m()(n),"index",void 0),c()(m()(n),"path2D",void 0),c()(m()(n),"parent",null),c()(m()(n),"shadowColor",void 0),c()(m()(n),"shadowBlur",0),c()(m()(n),"shadowOffsetY",0),c()(m()(n),"shadowOffsetX",0),c()(m()(n),"lineDash",[]),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(i,s,p){var C=Math.floor(p/2);return p%2===0?i.push([s]):i[C].push(s),i},[]).map(function(i){var s=ee()(i,2),p=s[0],C=s[1];return{x:p,y:C}})}},{key:"calcSmoothPath2D",value:function(){var n,i,s,p=new Path2D;return p.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0),p.moveTo(this.start.x,(s=this.start)===null||s===void 0?void 0:s.y),this.points.length===2&&p.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&p.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=p,p}},{key:"calcStraightPath2D",value:function(){var n,i,s,p,C=new Path2D;C.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0);var B=this.convertToNormalPoints([].concat(I()(this.points),[(s=this.end)===null||s===void 0?void 0:s.x,(p=this.end)===null||p===void 0?void 0:p.y]));return B.forEach(function(U){var Q=U.x,N=U.y;C.lineTo(Q,N)}),C}},{key:"draw",value:function(n){var i=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.lineDash.length<=0?n.setLineDash([]):n.setLineDash(this.lineDash),n.stroke(i),this}},{key:"inScope",value:function(n,i){var s=n.offsetX*v,p=n.offsetY*v;return this!==null&&this!==void 0&&this.path2D?d({mouseX:s,mouseY:p,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(me),_e=Fe,Ge=function(_){$()(t,_);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),c()(m()(n),"name","Rect"),c()(m()(n),"x",void 0),c()(m()(n),"y",void 0),c()(m()(n),"width",void 0),c()(m()(n),"height",void 0),c()(m()(n),"fillStyle",void 0),c()(m()(n),"strokeStyle",void 0),c()(m()(n),"lineWidth",void 0),c()(m()(n),"index",void 0),c()(m()(n),"path2D",void 0),c()(m()(n),"parent",null),c()(m()(n),"shadowColor",void 0),c()(m()(n),"shadowBlur",0),c()(m()(n),"shadowOffsetY",0),c()(m()(n),"shadowOffsetX",0),c()(m()(n),"radius",0),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.shadowColor="transparent",n.index=0,n.radius=0,(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"draw",value:function(n){var i=new Path2D;this.radius?(i.moveTo(this.x+this.radius,this.y),i.lineTo(this.x+this.width-this.radius,this.y),i.arcTo(this.x+this.width,this.y,this.x+this.width,this.y+this.radius,this.radius),i.lineTo(this.x+this.width,this.y+this.height-this.radius),i.arcTo(this.x+this.width,this.y+this.height,this.x+this.width-this.radius,this.y+this.height,this.radius),i.lineTo(this.x+this.radius,this.y+this.height),i.arcTo(this.x,this.y+this.height,this.x,this.y+this.height-this.radius,this.radius),i.lineTo(this.x,this.y+this.radius),i.arcTo(this.x,this.y,this.x+this.radius,this.y,this.radius)):(i.moveTo(this.x,this.y),i.lineTo(this.x+this.width,this.y),i.lineTo(this.x+this.width,this.y+this.height),i.lineTo(this.x,this.y+this.height)),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",i.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(i),this.fillStyle&&n.fill(i),this.path2D=i}},{key:"inScope",value:function(n,i){var s=n.offsetX*v,p=n.offsetY*v;return this!==null&&this!==void 0&&this.path2D?d({mouseX:s,mouseY:p,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(me),Xe=Ge,He=function(_){$()(t,_);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),c()(m()(n),"name","Text"),c()(m()(n),"parent",null),c()(m()(n),"x",void 0),c()(m()(n),"y",void 0),c()(m()(n),"content",void 0),c()(m()(n),"fillStyle",void 0),c()(m()(n),"fontFamily",void 0),c()(m()(n),"fontSize",void 0),c()(m()(n),"textAlign",void 0),c()(m()(n),"textBaseline",void 0),c()(m()(n),"width",void 0),c()(m()(n),"height",void 0),c()(m()(n),"index",0),c()(m()(n),"shadowColor",void 0),c()(m()(n),"shadowBlur",0),c()(m()(n),"shadowOffsetY",0),c()(m()(n),"shadowOffsetX",0),n.content="",!r.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,n.shadowColor="transparent",(0,Y.Z)(r,function(i,s){i&&(m()(n)[s]=i)}),n}return R()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var i=n.measureText(this.content);return this.width=i.width,this.height=this.fontSize,this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n){var i=n.offsetX*v,s=n.offsetY*v;return y(i,s,this)}}]),t}(me),Oe=He,xe=null,Je=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(_){setTimeout(_,60)},Ze=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(t){}return a},Et=function(a){xe.push(a),xe.length===1&&Je(function(){var t=xe;xe=[],t.forEach(function(r){r()})})},Ve=function(){function _(){P()(this,_),c()(this,"canvas",void 0),c()(this,"context",void 0),c()(this,"width",0),c()(this,"height",0),this.canvas=Ze(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return R()(_,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*v,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*v,this.canvas.style.height=t+"px",this.context.scale(v,v)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,r){this.setWidth(t||0),this.setHeight(r||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,r,n){return n&&this.setBackgroundColor(n),this.canvas}}]),_}(),qe="mouseenter",en="mouseleave",nn="mouseout",tn="mouseover",an="mousedown",rn="mousemove",on="mouseup",un="contextmenu",sn="click",dn="dblclick",ln="wheel",cn=[[qe,"_mouseenter"],[an,"_mousedown"],[rn,"_mousemove"],[en,"_mouseleave"],[on,"_mouseup"],[nn,"_mouseout"],[tn,"_mouseover"],[un,"_contextmenu"],[ln,"_wheel"],[sn,"_click"],[dn,"_dblclick"]],vn=function(_){$()(t,_);var a=F()(t);function t(){var r;return P()(this,t),r=a.call(this),c()(m()(r),"name","Stage"),c()(m()(r),"parent",null),c()(m()(r),"content",void 0),c()(m()(r),"canvas",void 0),c()(m()(r),"width",void 0),c()(m()(r),"height",void 0),c()(m()(r),"draggable",void 0),c()(m()(r),"isFirstRender",void 0),c()(m()(r),"_pointerPositions",[]),c()(m()(r),"_changedPointerPositions",[]),c()(m()(r),"pointerPos",null),r.content=null,r.canvas=null,r.width=100,r.height=500,r.isFirstRender=!0,r.draggable=!1,r}return R()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var i=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),s=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=i,this.content.style.height=s,this.canvas=new Ve,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,i,s){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,i,s),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.width=this.content.offsetWidth,this.height=this.content.offsetHeight,this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var i=this.content.getBoundingClientRect(),s={top:i.top,left:i.left,scaleX:i.width/this.content.clientWidth||1,scaleY:i.height/this.content.clientHeight||1},p=null,C=null;p=(n.clientX-s.left)/s.scaleX,C=(n.clientY-s.top)/s.scaleY,this.pointerPos={x:p,y:C}}},{key:"_bindContentEvents",value:function(){var n,i=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&cn.forEach(function(s){var p,C=ee()(s,2),B=C[0],U=C[1];(p=i.content)===null||p===void 0||p.addEventListener(B,function(Q){i[U](Q)},{passive:!1})})}},{key:"_mouseenter",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(Te),Se=vn,hn=function(a,t,r){if(!Ee)return[t,Le,Le];if(!a)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(N){return N}:r.deserializer:JSON.parse,i=(0,K.useRef)(function(N){try{var j=r?r.raw?String:r.serializer:JSON.stringify,H=localStorage.getItem(N);return H!==null?n(H):(t&&localStorage.setItem(N,j(t)),t)}catch(Z){return t}}),s=(0,K.useState)(function(){return i.current(a)}),p=ee()(s,2),C=p[0],B=p[1];(0,K.useLayoutEffect)(function(){return B(i.current(a))},[a]);var U=(0,K.useCallback)(function(N){try{var j=typeof N=="function"?N(C):N;if(typeof j=="undefined")return;var H;r?r.raw?typeof j=="string"?H=j:H=JSON.stringify(j):r.serializer?H=r.serializer(j):H=JSON.stringify(j):H=JSON.stringify(j),localStorage.setItem(a,H),B(n(H))}catch(Z){}},[a,B]),Q=(0,K.useCallback)(function(){try{localStorage.removeItem(a),B(void 0)}catch(N){}},[a,B]);return[C,U,Q]},fn=hn,mn=function(a,t,r){if(!Ee)return[t,function(){}];var n=(0,K.useState)(function(){try{var C=sessionStorage.getItem(a);return typeof C!="string"?(sessionStorage.setItem(a,r?String(t):JSON.stringify(t)),t):r?C:JSON.parse(C||"null")}catch(B){return t}}),i=ee()(n,2),s=i[0],p=i[1];return(0,K.useEffect)(function(){try{var C=r?String(s):JSON.stringify(s);sessionStorage.setItem(a,C)}catch(B){}}),[s,p]},In=mn,Ce={};function xt(_){console.error(_)}var Ie=e(31955);function pn(_,a){return a!==void 0?a:Ee?Ie.Z.get(_):""}var _n=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ce,r=arguments.length>2?arguments[2]:void 0,n=(0,K.useState)(pn(a,r)),i=ee()(n,2),s=i[0],p=i[1];(0,K.useEffect)(function(){var U=function(){var N=Ie.Z.get(a);return N!=null?N:(r===void 0?Ie.Z.remove(a):Ie.Z.set(a,r,t),r)};p(U())},[r,a,JSON.stringify(t)]);var C=(0,K.useCallback)(function(U){var Q=ae(U)?U(s):U;Q===void 0?Ie.Z.remove(a):Ie.Z.set(a,Q,t),p(Q)},[a,s,JSON.stringify(t)]),B=(0,K.useCallback)(function(){var U=Ie.Z.get(a);Ae(U)&&p(U)},[a]);return[s,C,B]},En=_n,xn=function(){var a=(0,K.useState)(0),t=ee()(a,2),r=t[0],n=t[1],i,s=function(){clearTimeout(i)},p=function(B){s(),n(B||function(U){return U-1})};return(0,K.useEffect)(function(){return i=setTimeout(function(){r>0?n(function(C){return C-1}):s()},1e3),function(){return s()}},[r]),[r,p,s]},gn=xn,yn=e(72249),On=function(a,t,r){var n=(0,K.useRef)(void 0);(!n.current||!r(t,n.current))&&(n.current=t),(0,K.useEffect)(a,n.current)},Cn=function(a,t){On(a,t,yn.Z)},Pn=Cn,Mn=function(){var a=(0,K.useState)(1),t=ee()(a,2),r=t[0],n=t[1],i=(0,K.useCallback)(function(){if(window){n(window.devicePixelRatio);var s=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),p=function(){i()};return s.addEventListener("change",p,{once:!0}),function(){s.removeEventListener("change",p)}}},[]);return(0,K.useEffect)(function(){var s=i();return s},[i]),{pixelRatio:r}},Dn=Mn,An=function(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ce;(0,K.useEffect)(function(){var n=new ResizeObserver(t);return a!=null&&a.current&&n.observe(a.current,r),function(){a!=null&&a.current&&n.unobserve(a.current),n.disconnect()}},[])},Pe=An,Rn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ce,r=(0,K.useState)({width:0,height:0}),n=ee()(r,2),i=n[0],s=n[1];return Pe(a,function(p){if(p.length!==0){var C=ee()(p,1),B=C[0],U=B.contentRect,Q=U.width,N=U.height;s({width:Q,height:N})}},t),i},Ln=Rn,Be=e(54683),Tn=e(33293),Sn="application/json;charset=utf-8",gt="application/x-www-form-urlencoded",yt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":Sn,Accept:"application/json;version=3.0;compress=false;"},Bn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},wn=e(54998),Wn=e.n(wn),bn=e(49360),Kn=e(58146),Un=e(73505),zn=e(27771),jn=e(77226),kn=e(36378),Me=function _(a){if((0,bn.Z)(a)||(0,Kn.Z)(a)||(0,Un.Z)(a))return a;if((0,zn.Z)(a))return a.map(function(r){return _(r)});if((0,jn.Z)(a)){var t=Object.create(null);return Object.keys(a).forEach(function(r){t[r]=_(a[r])}),t}else return(0,kn.Z)(a)?a.trim():a};function Ot(){return typeof window=="undefined"?!1:window&&window.__debug__}function Ct(_){var a=atob(_);return Uint8Array.from(a,function(t){return t.codePointAt(0)})}function Pt(_){var a=Array.from(_,function(t){return String.fromCodePoint(t)}).join("");return btoa(a)}var Nn=Be.Z.CancelToken.source(),Qn=function(a){a.cancelToken=Nn.token;var t=Wn()(a.url);if(a.url=t.query(Me(t.query(!0))||{}).toString(),a.data&&(a.data=Me(a.data)),a.params=Me(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var r=a.data,n=r===void 0?{}:r;for(var i in n)if(n.hasOwnProperty(i)){var s=n[i];s==null&&delete n[i]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},$n=function(a,t){t&&a.interceptors.request.use(function(r){return t(r)},function(r){return Promise.reject(r)}),a.interceptors.request.use(function(r){return Qn(r)},function(r){return Promise.reject(r)})},Yn=function(a){var t,r=a.data;try{if(r instanceof Blob){var n=a.headers["content-disposition"],i=n.split("filename=")[1];return{success:!0,data:{file:r,fileName:i}}}}catch(s){console.error(s)}return((t=a.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,r},Fn=function(a){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var r=a.response.data.errors,n=r===void 0?[]:r,i=n&&n[0]||{};return Promise.reject({message:i.message||a.message||t,arguments:i.arguments||void 0,code:i.code||null})}return Promise.reject({message:a.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},Gn=function(a,t,r){t&&a.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&a.interceptors.response.use(function(n){return n},r),a.interceptors.response.use(Yn,Fn)},Xn=function(a){var t=a.config,r=t===void 0?{}:t,n=a.requestInterceptorsCallback,i=a.responseInterceptorOnSuccessCallback,s=a.responseInterceptorOnErrorCallback,p=(0,Tn.Z)(Bn(),r),C=Be.Z.create(p);$n(C,n),Gn(C,i,s);function B(j,H,Z){return C.request(o()({url:j,params:H},Z))}function U(j,H,Z){return C.request(o()({url:j,method:"post",params:H},Z))}function Q(j,H,Z){return C.request(o()({url:j,method:"put",params:H},Z))}function N(j,H,Z){return C.request(o()({url:j,method:"delete",params:H},Z))}return{get:B,post:U,del:N,put:Q}},Hn=Xn,Jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Zn=function(a){var t=a.imgList,r=(0,K.useState)(!1),n=ee()(r,2),i=n[0],s=n[1],p=(0,K.useState)(""),C=ee()(p,2),B=C[0],U=C[1],Q=(0,K.useState)([]),N=ee()(Q,2),j=N[0],H=N[1],Z=(0,K.useState)([]),w=ee()(Z,2),J=w[0],de=w[1],se=function ue(re,ve,ne){var q=new Image,te=ve+1;q.src=re,q.onload=function(){H(function(b){return[].concat(I()(b),[re])}),de(function(b){return[].concat(I()(b),[re])}),ne||U(re),ve<t.length-1?ue(t[te],te,!0):s(!1)},q.onerror=function(){H(function(b){return[].concat(I()(b),[Jn])}),te<t.length-1?ue(t[te],te):s(!1)}};return(0,K.useEffect)(function(){(t==null?void 0:t.length)>1&&(s(!0),se(t==null?void 0:t[0],0))},[]),console.log([B,j,J,i]),j.length!==t.length?["",[],[],!0]:[B,j,J,i]},Vn=Zn,qn=e(17061),ge=e.n(qn),et=e(17156),we=e.n(et);function nt(_){var a=_.dataSource,t=_.delay,r=t===void 0?100:t,n=_.pageSize,i=n===void 0?10:n,s=_.fetchData,p=(0,K.useState)(!1),C=ee()(p,2),B=C[0],U=C[1],Q=(0,K.useState)(!0),N=ee()(Q,2),j=N[0],H=N[1],Z=(0,K.useState)([]),w=ee()(Z,2),J=w[0],de=w[1];function se(){return ue.apply(this,arguments)}function ue(){return ue=we()(ge()().mark(function re(){return ge()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:if(!(!(a!=null&&a.length)&&!s)){ne.next=2;break}return ne.abrupt("return");case 2:if(!(!j||B)){ne.next=4;break}return ne.abrupt("return");case 4:if(U(!0),!a){ne.next=10;break}return ne.next=8,new Promise(function(q){setTimeout(function(){q(a==null?void 0:a.slice(J.length,J.length+i))},r)}).then(function(q){H((J==null?void 0:J.length)+(q==null?void 0:q.length)<(a==null?void 0:a.length)),de(function(te){return te==null?void 0:te.concat(q)})});case 8:ne.next=12;break;case 10:return ne.next=12,s==null?void 0:s({pageNum:J!=null&&J.length?Math.ceil((J==null?void 0:J.length)/i)+1:1,pageSize:i}).then(function(q){var te=q.list,b=te===void 0?[]:te,le=q.total,ye=le===void 0?0:le;H((J==null?void 0:J.length)+(b==null?void 0:b.length)<ye&&(b==null?void 0:b.length)>0),de(function(De){return De==null?void 0:De.concat(b)})});case 12:U(!1);case 13:case"end":return ne.stop()}},re)})),ue.apply(this,arguments)}return{data:J,setData:de,loading:B,hasMore:j,loadMore:se}}var tt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(0,K.useState)(!1),n=ee()(r,2),i=n[0],s=n[1],p=(0,K.useRef)(null);return(0,K.useEffect)(function(){var C=new IntersectionObserver(function(B){B.forEach(function(U){U.isIntersecting?(s(!0),t&&C.unobserve(U.target)):s(!1)})},a);return p!=null&&p.current&&C.observe(p.current),function(){p!=null&&p.current&&C.unobserve(p.current)}},[a,t]),[p,i]},at=tt,rt=function(a){var t=(0,K.useRef)({});return(0,K.useLayoutEffect)(function(){t.current=a}),(0,K.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},ot=rt,ut=function(){var a=(0,K.useState)({width:window.innerWidth,height:window.innerHeight}),t=ee()(a,2),r=t[0],n=t[1],i=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,K.useLayoutEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),{width:r.width,height:r.height}},st=ut;function it(){var _=(0,K.useRef)(!1),a=(0,K.useCallback)(function(){return _.current},[]);return(0,K.useEffect)(function(){return _.current=!0,function(){_.current=!1}},[]),a}function We(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},r=(0,K.useRef)(0),n=it(),i=(0,K.useState)(t),s=ee()(i,2),p=s[0],C=s[1],B=(0,K.useCallback)(function(){var U=++r.current;return p.loading||C(function(Q){return o()(o()({},Q),{},{loading:!0})}),_.apply(void 0,arguments).then(function(Q){return n()&&U===r.current&&C({value:Q,loading:!1}),Q},function(Q){return n()&&U===r.current&&C({error:Q,loading:!1}),Q})},a);return[p,B]}var dt=function(a,t){var r=(0,K.useRef)(),n=function(){if(r.current)throw r.current.abort(),new Error(" Canceled .")};K.useEffect(function(){return function(){r.current&&r.current.abort()}},[]);var i=We(we()(ge()().mark(function s(){var p,C,B,U,Q=arguments;return ge()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return r.current&&r.current.abort(),r.current=new AbortController,p=r.current.signal,C={cancelInterceptor:n},j.next=6,a(C);case 6:return B=j.sent,j.next=9,B.apply(void 0,Q);case 9:return U=j.sent,j.abrupt("return",U);case 11:case"end":return j.stop()}},s)})),t);return i},lt=dt,ct=function(_){$()(t,_);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),c()(m()(n),"xAxis",void 0),c()(m()(n),"series",void 0),c()(m()(n),"xLine",void 0),c()(m()(n),"yLine",void 0),c()(m()(n),"xText",void 0),c()(m()(n),"yText",void 0),c()(m()(n),"yScale",void 0),c()(m()(n),"xScale",void 0),c()(m()(n),"xScaleLine",void 0),n.series=r.series,n.xAxis=r.xAxis,n.xLine=null,n.yLine=null,n.xText=[],n.yText=[],n.yScale=[],n.xScale=[],n.xScaleLine=[],n}return R()(t,[{key:"calculateTickCount",value:function(n){return n<=100?4:n<=1e3?5:n<=5e3?6:8}},{key:"draw",value:function(n){var i,s=this,p=50;if((i=this.parent)!==null&&i!==void 0&&i.canvas){var C=this.parent.canvas.canvas.offsetWidth,B=this.parent.canvas.canvas.offsetHeight;this.yLine=new _e({start:{x:p,y:p},end:{x:p,y:B-p},strokeStyle:"#b5b5b5",lineWidth:1}),this.xLine=new _e({start:{x:p,y:B-p},end:{x:C-p,y:B-p},strokeStyle:"#f4f4f4",lineWidth:1,lineDash:[5,5]});var U=C-p*2,Q=B-p*2;this.xAxis.data.forEach(function(se,ue){var re=(U-40)/s.xAxis.data.length*(ue+1);if(s.xAxis.boundaryGap){var ve=new _e({start:{x:re+p,y:B-p},end:{x:re+p,y:B-p+3},strokeStyle:"#b5b5b5",lineWidth:1});s.xScale.push(ve),ve.draw(n)}var ne=new _e({start:{x:re+p,y:p},end:{x:re+p,y:B-p},strokeStyle:"#b5b5b5",lineWidth:1});s.xScaleLine.push(ne);var q=new Oe({content:se,x:re+p-4,y:B-p+4,fontSize:8});s.xText.push(q),q.draw(n)});var N=[];this.series.forEach(function(se){N=[].concat(I()(N),I()(se.data))}),N.sort(function(se,ue){return se-ue});for(var j=Math.max.apply(Math,I()(N)),H=Math.ceil(j/100)*100,Z=this.calculateTickCount(H),w=0;w<=Z;w++){var J=new _e({start:{x:p,y:(B-p*2)/6*w},end:{x:C-p,y:Q/6*w},strokeStyle:"#b5b5b5",lineWidth:1,lineDash:[5,5]});if(this.yScale.push(J),w>0){var de=new Oe({content:"".concat(H/w),x:10,y:Q/6*w-4,fontSize:8});this.yText.push(de),de.draw(n)}J.draw(n)}this.xLine.draw(n),console.log(this,"this.parent")}}}]),t}(me),vt=ct,ht=e(85893),ft=function(){var a={xAxis:{data:["a","b","c","d","e","f"],boundaryGap:!0},series:[{data:[620,932,901,934,800,1001]},{data:[300,400,100,343,343,2341]}]},t=(0,K.useRef)(null),r=new Se,n=new vt(a);return r.add(n),(0,K.useLayoutEffect)(function(){return t!=null&&t.current&&r.buildContentDOM({container:t.current,backgroundColor:"#fff"}),function(){return r.destroy()}},[]),Pe(t,function(){return r._resizeDOM()}),(0,ht.jsx)("div",{ref:t})},mt=ft},69111:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(55832);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u6DFB\u52A0\u52A8\u753B",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"on",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"off",paraId:1,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},58025:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(66397);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},81253:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(23629);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"path2D",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u56FE\u5F62\u7684 Path2D",paraId:1,tocIndex:3},{value:"Path2D",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},4053:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(49011);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u62D6\u62FD\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u7ED9\u5143\u7D20\u6DFB\u52A0 draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8FD9\u662F boolean \u503C\u6216\u8005 \u51FD\u6570\u63A5\u6536 \u9F20\u6807\u4E8B\u4EF6\u53C2\u6570",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},76631:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(50138);const o=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 on \u65B9\u6CD5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F7F\u7528 off \u65B9\u6CD5\u89E3\u7ED1\u4E8B\u4EF6\u3002",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},96627:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(52192);const o=[{value:"\u5C06\u591A\u4E2A\u56FE\u5F62\u7F16\u7EC4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},48977:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(54197);const o=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},13155:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(10372);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u76F4\u7EBF\u3001\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3001\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"start",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"end",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"points",paraId:1,tocIndex:3},{value:"\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"array",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3},{value:"smooth",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5E73\u6ED1",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"lineCap",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u7AEF\u70B9\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"butt",paraId:1,tocIndex:3},{value:"lineJoin",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u8FDE\u63A5\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"miter",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"lineDash",paraId:1,tocIndex:3},{value:"\u865A\u7EBF\u6837\u5F0F",paraId:1,tocIndex:3},{value:"[]number",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3}]},12477:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(89131);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u77E9\u5F62",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"height",paraId:1,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u5706\u89D2",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},25924:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(18283);const o=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"container",paraId:0,tocIndex:3},{value:"\u5BB9\u5668 dom",paraId:0,tocIndex:3},{value:"HTMLElement",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"width",paraId:0,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"height",paraId:0,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"backgroundColor",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u8272",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"#fff",paraId:0,tocIndex:3}]},27837:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(70821);const o=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u6587\u5B57",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"content",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u5BB9",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"fontSize",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"16",paraId:1,tocIndex:3},{value:"textAlign",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u5BF9\u9F50",paraId:1,tocIndex:3},{value:"CanvasTextAlign",paraId:1,tocIndex:3},{value:"textBaseline",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u57FA\u51C6\u7EBF",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"CanvasTextBaseline",paraId:1,tocIndex:3},{value:"direction",paraId:1,tocIndex:3},{value:"\u6587\u672C\u65B9\u5411",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"fontStyle",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#333",paraId:1,tocIndex:3},{value:"fontVariant",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u53D8\u4F53",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"textDecoration",paraId:1,tocIndex:3},{value:"\u6587\u672C\u4FEE\u9970",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"align",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"verticalAlign",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"padding",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u8FB9\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"lineHeight",paraId:1,tocIndex:3},{value:"\u884C\u9AD8",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"letterSpacing",paraId:1,tocIndex:3},{value:"\u5B57\u7B26\u95F4\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},65179:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(34392);const o=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3}]},92916:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(18163);const o=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587,G2 \u7684\u56FE\u6807\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},9978:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(26211);const o=[{value:"\u4E3A\u5565\u53EB ",paraId:0,tocIndex:0},{value:"heitu",paraId:0,tocIndex:0},{value:`
\u672C\u4EBA\u73A9 LOL \u7684\u7B2C\u4E00\u4E2A\u82F1\u96C4\u662F `,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:`,\u83B7\u5F97\u7684\u7B2C\u4E00\u4E2A\u76AE\u80A4\u662F\u9ED1\u8272\u7684\u90A3\u6B3E\uFF0C\u6240\u4EE5\u8D77\u540D\u5C31\u53EB\u4E86\u9ED1\u5154
\u559C\u6B22`,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:" \u7684\u5927\u62DB\u7ED9\u4E00\u4E2A\u5BF9\u65B9\u89D2\u8272\uFF0C\u522B\u7684\u89D2\u8272\u4E0D\u4F1A\u5BF9\u5979\u9020\u6210\u4F24\u5BB3\uFF0C\u5E0C\u671B\u6211\u7684\u5E93\u4E5F\u80FD\u50CF\u5979\u7684\u5927\u62DB\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"heitu",paraId:1,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:1,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:2,tocIndex:1}]},69236:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(29876);const o=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(93139);const o=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(72155);const o=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(64577);const o=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(28587);const o=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(59301);const o=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(48035);const o=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(56139);const o=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(38668);const o=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(81233);const o=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(35412);const o=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(1019);const o=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(40801);const o=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(44012);const o=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(74746);const o=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(81286);const o=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(5480);const o=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(51530);const o=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(68537);const o=[]},87724:function(T,l,e){e.r(l),e.d(l,{texts:function(){return o}});var g=e(79930);const o=[{value:"\u7C7B\u4F3C nest \u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1 Im_Peco",paraId:5,tocIndex:3}]},78890:function(T,l){l.Z=`import { Stage, useResizeObserver } from 'heitu';
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
