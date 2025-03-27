"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{94294:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(55832),C={"docs-canvas-animation-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s,j;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=D.sent,p=E.Circle,c=E.Stage,h=E.useResizeObserver,f=E.Animate,D.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return d=D.sent,g=d.default,s=d.useLayoutEffect,j=d.useRef,D.abrupt("return",{default:function(){var y=new c,S=j(null),w=new p({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2});y.add(w);var I=function(){var Y=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});Y.start();var G=w.x,F=w.y,Q=w.x,A=w.y,ee=w.radius,oe=w.radius,ae=function(fe,se){oe=(ee-oe)*se,Q=(300-Q)*se,A=(400-A)*se,w.attr({x:G+Q,y:F+A,radius:ee-oe})};Y.pushQueue(ae)};return w.on("click",I),s(function(){y.buildContentDOM({container:S.current,backgroundColor:"#fff"});var X=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});X.start();var Y=w.radius,G=w.radius,F=function(A,ee){G=(Y-G)*ee,w.attr({radius:Y+G})};return X.pushQueue(F),function(){return X.stop()}},[]),h(S,function(){return y._resizeDOM()}),g.createElement(g.Fragment,null,g.createElement("div",{ref:S}))}});case 14:case"end":return D.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-animation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},28835:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(66397),C={"docs-canvas-circle-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Circle,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=s(null),S=new p({x:100,y:150,radius:50,strokeStyle:"blue",fillStyle:"pink",lineWidth:1,border:0,startAngle:200,endAngle:270}),w=new p({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});return T.add(S,w),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-circle-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},80148:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(23629),C={"docs-canvas-custom-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Custom,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=s(null),S=new Path2D;S.moveTo(200,240),S.bezierCurveTo(200,200,120,150,120,200),S.bezierCurveTo(120,280,200,300,200,340),S.bezierCurveTo(200,300,280,280,280,200),S.bezierCurveTo(280,150,200,200,200,240);var w=new p({path2D:S});return T.add(w),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-custom-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Custom, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},70544:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(49011),E={"docs-canvas-drag-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s,j,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return c=y.sent,h=c.Circle,f=c.Stage,d=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,s=g.default,j=g.useLayoutEffect,_=g.useRef,D=g.useState,y.abrupt("return",{default:function(){var w=D({x:0,y:0}),I=P()(w,2),X=I[0],Y=I[1],G=new f,F=_(null),Q=new h({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2,draggable:!0}),A=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:2,border:2,draggable:function(oe,ae){Y({x:ae.x,y:ae.y})}});return G.add(Q,A),j(function(){G.buildContentDOM({container:F.current,backgroundColor:"#fff"})},[]),d(F,function(){return G._resizeDOM()}),s.createElement(s.Fragment,null,X.x,",",X.y,s.createElement("div",{ref:F}))}});case 14:case"end":return y.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-canvas-drag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},11293:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(50138),E={"docs-canvas-event-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s,j,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return c=y.sent,h=c.Circle,f=c.Stage,d=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,s=g.default,j=g.useLayoutEffect,_=g.useRef,D=g.useState,y.abrupt("return",{default:function(){var w=D(""),I=P()(w,2),X=I[0],Y=I[1],G=new f,F=_(null),Q=new h({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});G.add(Q);var A=function(ve){Y("click")},ee=function(ve){Y("mousedown")},oe=function(ve){Y("mousemove")},ae=function(ve){Y("mouseup")},Ee=function(ve){Y("mouseenter")},fe=function(ve){Y("contextmenu")};return Q.on("click",A),Q.on("mousedown",ee),Q.on("mousemove",oe),Q.on("mouseup",ae),Q.on("mouseenter",Ee),Q.on("contextmenu",fe),j(function(){return G.buildContentDOM({container:F.current,backgroundColor:"#fff"}),function(){Q.off("click",A),Q.off("mousedown",ee),Q.off("mousemove",oe),Q.off("mouseup",ae),Q.off("mouseenter",Ee),Q.off("contextmenu",fe)}},[]),d(F,function(){return G._resizeDOM()}),s.createElement(s.Fragment,null,X,s.createElement("div",{ref:F}))}});case 14:case"end":return y.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-canvas-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},90564:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(52192),C={"docs-canvas-group-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s,j,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=y.sent,p=E.Group,c=E.Text,h=E.Circle,f=E.Rect,d=E.Stage,g=E.useResizeObserver,y.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=y.sent,j=s.default,_=s.useLayoutEffect,D=s.useRef,y.abrupt("return",{default:function(){var w=D(null),I=new d,X=new c({content:"title",x:110,y:260,index:999}),Y=new c({content:"name: test",x:110,y:280,index:999}),G=new p({}),F=new p({draggable:!0}),Q=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:1,border:0}),A=new f({fillStyle:"blue",x:150,y:100,width:100,height:100}),ee=new f({fillStyle:"rgba(255, 255, 255, 1)",x:100,y:250,width:200,height:100,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,radius:4});return G.add(Q,A),F.add(ee,X,Y),I.add(G,F),_(function(){I.buildContentDOM({container:w.current,backgroundColor:"#fff"})},[]),g(w,function(){return I._resizeDOM()}),j.createElement(j.Fragment,null,j.createElement("div",{ref:w}))}});case 16:case"end":return y.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},81222:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(54197),C={"docs-canvas-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Custom,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=s(null),y=new c,S=new Path2D;S.moveTo(200,240),S.bezierCurveTo(200,200,120,150,120,200),S.bezierCurveTo(120,280,200,300,200,340),S.bezierCurveTo(200,300,280,280,280,200),S.bezierCurveTo(280,150,200,200,200,240);var w=new p({path2D:S,fillStyle:"pink",strokeStyle:"red"});return y.add(w),g(function(){y.buildContentDOM({container:T.current,backgroundColor:"#fff"})},[]),h(T,function(){return y._resizeDOM()}),d.createElement(d.Fragment,null,d.createElement("div",{ref:T}))}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},31930:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(10372),C={"docs-canvas-line-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Line,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=s(null),S=new p,w=new p({start:{x:90,y:90},points:[70,70],end:{x:190,y:90},strokeStyle:"red",lineWidth:3,smooth:!0}),I=new p({start:{x:100,y:100},points:[70,70,50,50],end:{x:300,y:150},strokeStyle:"blue",lineWidth:2,smooth:!0}),X=new p({start:{x:300,y:350},end:{x:100,y:350},strokeStyle:"#eee",lineWidth:1,lineDash:[5,5]});return T.add(S,w,I,X),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-line-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Line, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},98841:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(89131),C={"docs-canvas-rect-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Rect,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=s(null),S=new p({fillStyle:"pink",x:250,y:100,width:100,height:100}),w=new p({shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,fillStyle:"blue",x:100,y:100,width:100,height:100,radius:5});return T.add(S,w),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},67023:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(18283),C={"docs-canvas-stage-demo-stagedemo":{component:L.memo(L.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},9095:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(70821),C={"docs-canvas-text-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=_.sent,p=E.Text,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,s=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=s(null),S=new p({content:"xixinia",index:999,x:250,y:250});return T.add(S),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Text, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},44401:function(b,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(26211),W={}},97086:function(b,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(29876),W={}},64234:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(93139),E={"docs-hooks-use-async-fn-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,h=c.default,s.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return f=s.sent,d=f.useAsyncFn,s.abrupt("return",{default:function(){var _=d(R()(u()().mark(function I(){var X;return u()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,new Promise(function(F){setTimeout(function(){F(200)},5e3)});case 2:return X=G.sent,G.abrupt("return",X);case 4:case"end":return G.stop()}},I)})),[]),D=P()(_,2),T=D[0],y=T.loading,S=T.value,w=D[1];return console.log(y,S),h.createElement("div",null,h.createElement("button",{onClick:function(){w()}},"get"),y&&"loading"," ",h.createElement("br",null),"data: ".concat(S||""))}});case 9:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},75326:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(72155),E={"docs-hooks-use-cancel-async-fn-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useRef,_.next=7,Promise.resolve().then(e.bind(e,44997));case 7:return d=_.sent,g=d.useCancelAsyncFn,s=d.useHtAxios,_.abrupt("return",{default:function(){var T=f(),y=s({config:{timeout:1e4},requestInterceptorsCallBack:function(Q){return Q},responseInterceptorsCallBack:function(Q){return Q.data}}),S=g(function(){var F=R()(u()().mark(function Q(A){var ee;return u()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ee=A.cancelInterceptor,ae.abrupt("return",function(){var Ee=R()(u()().mark(function fe(se){var ve;return u()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,y.get("http://jsonplaceholder.typicode.com/posts").catch(function(Se){console.log(Se)});case 2:return ve=Ie.sent,ee(),Ie.abrupt("return",ve);case 5:case"end":return Ie.stop()}},fe)}));return function(fe){return Ee.apply(this,arguments)}}());case 2:case"end":return ae.stop()}},Q)}));return function(Q){return F.apply(this,arguments)}}(),[]),w=P()(S,2),I=w[0],X=I.value,Y=I.loading,G=w[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){var F=R()(u()().mark(function A(){return u()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:G();case 1:case"end":return oe.stop()}},A)}));function Q(){return F.apply(this,arguments)}return Q}()},"12312"))}});case 11:case"end":return _.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},31701:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(64577),E={"docs-hooks-use-cookie-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,h=c.default,s.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return f=s.sent,d=f.useCookie,s.abrupt("return",{default:function(){var _={path:"/"},D="cookie-key",T=d(D,_,"default-value"),y=P()(T,3),S=y[0],w=y[1],I=y[2],X=function(){w("new-cookie-value")},Y=function(){w(void 0)},G=function(){if("cookieStore"in window){var Q=window.cookieStore;Q.set({name:D,value:"changed"})}else document.cookie="".concat(D,"=changed; path=/")};return h.createElement("div",null,h.createElement("p",null,"Click on the button to update or clear the cookie"),h.createElement("p",{color:"blue"},"cookie: ",S||"no value"),h.createElement("button",{onClick:X},"Update the cookie"),h.createElement("button",{onClick:Y},"Clear the cookie"),h.createElement("button",{onClick:G},"Changing the cookie through other methods"),h.createElement("button",{onClick:I},"Refresh the cookie"))}});case 9:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},67731:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(28587),E={"docs-hooks-use-count-down-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,h=c.default,s.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return f=s.sent,d=f.useCountDown,s.abrupt("return",{default:function(){var _=d(),D=P()(_,3),T=D[0],y=D[1],S=D[2];return h.createElement("div",null,T,h.createElement("button",{onClick:function(){y(60)}},"\u5F00\u59CB"),h.createElement("button",{onClick:function(){S()}},"\u6682\u505C"),h.createElement("button",{onClick:function(){y()}},"\u7EE7\u7EED"))}});case 9:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},66609:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(59301),E={"docs-hooks-use-deep-compare-effect-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s,j;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=D.sent,h=c.default,f=c.useState,d=c.useEffect,g=c.useRef,D.next=9,Promise.resolve().then(e.bind(e,44997));case 9:return s=D.sent,j=s.useDeepCompareEffect,D.abrupt("return",{default:function(){var y=f(0),S=P()(y,2),w=S[0],I=S[1],X=g(0),Y=g(0);return d(function(){X.current+=1},[{}]),j(function(){return Y.current+=1,function(){}},[{}]),h.createElement("div",null,h.createElement("p",null,"effectCount: ",X.current),h.createElement("p",null,"deepCompareCount: ",Y.current),h.createElement("p",null,h.createElement("button",{type:"button",onClick:function(){return I(function(F){return F+1})}},"reRender")))}});case 12:case"end":return D.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},5958:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(48035),C={"docs-hooks-use-device-pixel-ratio-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=d.sent,p=E.default,d.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return c=d.sent,h=c.useDevicePixelRatio,d.abrupt("return",{default:function(){var s=h(),j=s.pixelRatio;return p.createElement("p",null,"Device pixel ratio: ",j)}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},65585:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(56139),C={"docs-hooks-use-element-size-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=s.sent,p=E.default,c=E.useRef,h=E.useEffect,s.next=8,Promise.resolve().then(e.bind(e,44997));case 8:return f=s.sent,d=f.useElementSize,s.abrupt("return",{default:function(){var _=c(null),D=d(_);return h(function(){console.log(_.current.mount)},[]),p.createElement("div",null,p.createElement("textarea",{ref:_,disabled:!0,style:{width:200,height:200},value:"width: ".concat(D.width,`
height: `).concat(D.height)}))}});case 11:case"end":return s.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},23897:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(38668),C={"docs-hooks-use-ht-axios-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c,h;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=d.sent,p=E.useHtAxios,d.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return c=d.sent,h=c.default,d.abrupt("return",{default:function(){var s=p({config:{timeout:3e3},requestInterceptorsCallBack:function(D){return D},responseInterceptorsCallBack:function(D){return D.data}}),j=function(){var _=P()(u()().mark(function D(){var T;return u()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,s.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:T=S.sent,alert(JSON.stringify(T));case 4:case"end":return S.stop()}},D)}));return function(){return _.apply(this,arguments)}}();return h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},h.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){j()}},"\u8BF7\u6C42"))}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},97716:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(81233),E={"docs-hooks-use-image-load-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,h=c.default,s.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return f=s.sent,d=f.useImageLoad,s.abrupt("return",{default:function(){var _=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],D=d({imgList:_}),T=P()(D,4),y=T[0],S=T[1],w=T[2],I=T[3];return h.createElement("div",{style:{display:"flex"}},I?"loading":h.createElement(h.Fragment,null,h.createElement("div",null,h.createElement("div",null,"img"),h.createElement("img",{src:y,style:{width:200}})),h.createElement("div",null,h.createElement("div",null,"ftimgList"),S==null?void 0:S.map(function(X,Y){return h.createElement("img",{src:X,key:Y,style:{width:200}})})),h.createElement("div",null,h.createElement("div",null,"allowImgList"),w==null?void 0:w.map(function(X,Y){return h.createElement("img",{src:X,key:Y,style:{width:200}})}))))}});case 9:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},79817:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(35412),E={"docs-hooks-use-in-view-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,h=c.default,s.next=6,Promise.resolve().then(e.bind(e,44997));case 6:return f=s.sent,d=f.useInView,s.abrupt("return",{default:function(){var _=d(),D=P()(_,2),T=D[0],y=D[1];return h.createElement("div",null,h.createElement("div",null,y?"active":"inactive"),h.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},h.createElement("div",{ref:T},"12312312")))}});case 9:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},59842:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(1019),E={"docs-hooks-use-infinite-scroll-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s,j;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return j=function(y){var S=y.hasMore,w=y.loadMore,I=s(),X=P()(I,2),Y=X[0],G=X[1];return f(function(){G&&S&&(w==null||w())},[S,G,w]),h.createElement("div",{ref:Y},S?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},D.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return c=D.sent,h=c.default,f=c.useEffect,D.next=8,Promise.resolve().then(e.bind(e,44997));case 8:return d=D.sent,g=d.useInfiniteScroll,s=d.useInView,D.abrupt("return",{default:function(){var y=new Array(100).fill(1).map(function(Y,G){return G}),S=g({dataSource:y,pageSize:10,delay:100}),w=S.data,I=S.hasMore,X=S.loadMore;return h.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},w==null?void 0:w.map(function(Y){return h.createElement("span",null,Y)}),h.createElement(j,{loadMore:X,hasMore:I}))}});case 12:case"end":return D.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},96122:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(40801),E={"docs-hooks-use-local-storage-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return c=g.sent,h=c.useLocalStorage,f=function(){var j=h("my-key","foo"),_=P()(j,3),D=_[0],T=_[1],y=_[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",D),C.createElement("button",{onClick:function(){return T("bar")}},"bar"),C.createElement("button",{onClick:function(){return T("baz")}},"baz"),C.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import heitu, { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},37868:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(74746),E={"docs-hooks-use-previous-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useState,_.next=7,Promise.resolve().then(e.bind(e,44997));case 7:return d=_.sent,g=d.usePrevious,s=function(T){var y=g(T);return console.log(y,T),h.createElement("div",null,h.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(y==null?void 0:y.aa)||0," "),h.createElement("div",null,"\u5F53\u524D\u7684aa: ",T==null?void 0:T.aa))},_.abrupt("return",{default:function(){var T=f(1),y=P()(T,2),S=y[0],w=y[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){return w(S+1)}},"+1"),h.createElement(s,{aa:S}))}});case 11:case"end":return _.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},7411:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(81286),E={"docs-hooks-use-resize-observer-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g,s;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useRef,d=c.useState,_.next=8,Promise.resolve().then(e.bind(e,44997));case 8:return g=_.sent,s=g.useResizeObserver,_.abrupt("return",{default:function(){var T=f(null),y=d({width:0,height:0}),S=P()(y,2),w=S[0],I=S[1];return s(T,function(X){var Y=P()(X,1),G=Y[0],F=G.contentRect,Q=F.width,A=F.height;I({width:Q,height:A})}),h.createElement("div",null,h.createElement("textarea",{ref:T,disabled:!0,style:{width:200,height:200},value:"width: ".concat(w.width,`
height: `).concat(w.height)}))}});case 11:case"end":return _.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},12830:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(5480),E={"docs-hooks-use-session-storage-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return c=g.sent,h=c.useSessionStorage,f=function(){var j=h("my-key","foo"),_=P()(j,3),D=_[0],T=_[1],y=_[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",D),C.createElement("button",{onClick:function(){return T("bar")}},"bar"),C.createElement("button",{onClick:function(){return T("baz")}},"baz"),C.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(44997)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},94902:function(b,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),P=e.n(W),L=e(17156),R=e.n(L),C=e(67294),v=e(24393),E={"docs-hooks-use-web-socket-demo-0":{component:C.memo(C.lazy(R()(u()().mark(function p(){var c,h,f,d,g;return u()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return c=j.sent,h=c.useWebSocket,j.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return f=j.sent,d=f.useState,g=function(){var D=d(""),T=P()(D,2),y=T[0],S=T[1],w=h("wss://ws.postman-echo.com/raw",{onOpen:function(A){console.log("\u8FDE\u63A5\u6210\u529F")},onMessage:function(A){console.log("\u6536\u5230\u6D88\u606F:",A)},onError:function(A){console.log("\u8FDE\u63A5\u9519\u8BEF")},onClose:function(A){console.log("\u8FDE\u63A5\u5173\u95ED")},json:!0}),I=w.readyState,X=w.sendMessage,Y=w.connect,G=w.disconnect,F=w.latestMessage;return console.log(I,"readyState"),C.createElement("div",null,C.createElement("p",null,"\u8FDE\u63A5\u72B6\u6001:",I===WebSocket.CONNECTING&&"\u6B63\u5728\u8FDE\u63A5\u4E2D",I===WebSocket.OPEN&&"\u8FDE\u63A5\u5DF2\u5EFA\u7ACB",I===WebSocket.CLOSING&&"\u8FDE\u63A5\u6B63\u5728\u5173\u95ED",I===WebSocket.CLOSED&&"\u8FDE\u63A5\u5DF2\u5173\u95ED"),C.createElement("button",{onClick:function(){return X({text:"hello",date:"".concat(Date.now())})},disabled:I!==WebSocket.OPEN},"\u53D1\u9001\u6D88\u606F"),C.createElement("p",null,"\u6700\u65B0\u6D88\u606F: ",F?JSON.stringify(F):"\u6682\u65E0\u6D88\u606F"),I===WebSocket.OPEN&&C.createElement("button",{onClick:G},"\u65AD\u5F00\u8FDE\u63A5"),(I===WebSocket.CONNECTING||I===WebSocket.CLOSED)&&C.createElement("button",{onClick:Y},"\u8FDE\u63A5"))},j.abrupt("return",{default:g});case 10:case"end":return j.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-hooks-use-web-socket-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWebSocket } from 'heitu';
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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(44997),react:e(67294)},renderOpts:{compile:function(){var p=R()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,d));case 3:case"end":return s.stop()}},h)}));function c(){return p.apply(this,arguments)}return c}()}}}},9954:function(b,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),P=e.n(W),L=e(67294),R=e(51530),C={"docs-hooks-use-window-size-demo-0":{component:L.memo(L.lazy(P()(u()().mark(function v(){var E,p,c;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,44997));case 2:return E=f.sent,p=E.useWindowSize,c=function(){var g=p(),s=g.width,j=g.height;return L.createElement("div",null,L.createElement("p",null,"width: ",s,", height: ",j))},f.abrupt("return",{default:c});case 6:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(44997)},renderOpts:{compile:function(){var v=P()(u()().mark(function p(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},11171:function(b,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(68537),W={}},6202:function(b,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(79930),W={}},44997:function(b,l,e){e.r(l),e.d(l,{Animate:function(){return S},Circle:function(){return Qe},Custom:function(){return Ye},Group:function(){return Xe},Line:function(){return Ze},LineChart:function(){return yt},Rect:function(){return qe},Stage:function(){return Be},Text:function(){return nn},useAsyncFn:function(){return we},useCancelAsyncFn:function(){return On},useCookie:function(){return Pn},useCountDown:function(){return An},useDeepCompareEffect:function(){return Tn},useDevicePixelRatio:function(){return wn},useElementSize:function(){return Kn},useHtAxios:function(){return tt},useImageLoad:function(){return ot},useInView:function(){return it},useInfiniteScroll:function(){return ut},useLocalStorage:function(){return lt},usePrevious:function(){return vt},useResizeObserver:function(){return We},useSessionStorage:function(){return ft},useWebSocket:function(){return mt},useWindowSize:function(){return _t}});var O=e(42122),u=e.n(O),W=e(56690),P=e.n(W),L=e(89728),R=e.n(L),C=e(38416),v=e.n(C),E=e(861),p=e.n(E),c=window.devicePixelRatio,h=function(){},f=function(a){return a.name==="Stage"},d=function(a,t){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(t)).map(function(r){return[r.name,r]})).values())},g=function(a,t,r){return r!=null&&r.x&&r!==null&&r!==void 0&&r.width&&r.y&&r!==null&&r!==void 0&&r.height?a>(r==null?void 0:r.x)*c&&a<(((r==null?void 0:r.x)||0)+((r==null?void 0:r.width)||0))*c&&t>(r==null?void 0:r.y)*c&&t<r.y*c+r.height*c:!1},s=function(a){var t=a.mouseX,r=a.mouseY,n=a.path2D,i=a.ctx;return n&&i&&(i==null?void 0:i.isPointInPath(n,t,r))},j={linear:function(a){return a},quadraticIn:function(a){return a*a},quadraticOut:function(a){return a*(2-a)},quadraticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(a){var t=a;return t*t*t},cubicOut:function(a){var t=a;return--t*t*t+1},cubicInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(a){var t=a;return t*t*t*t},quarticOut:function(a){var t=a;return 1- --t*t*t*t},quarticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(a){return a*a*a*a*a},quinticOut:function(a){var t=a;return--t*t*t*t*t+1},quinticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(a){return 1-Math.cos(a*Math.PI/2)},sinusoidalOut:function(a){return Math.sin(a*Math.PI/2)},sinusoidalInOut:function(a){return .5*(1-Math.cos(Math.PI*a))},exponentialIn:function(a){return a===0?0:Math.pow(1024,a-1)},exponentialOut:function(a){return a===1?1:1-Math.pow(2,-10*a)},exponentialInOut:function(a){var t=a;return a===0?0:a===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(a){return 1-Math.sqrt(1-a*a)},circularOut:function(a){var t=a;return Math.sqrt(1- --t*t)},circularInOut:function(a){var t=a;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return-(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n))},elasticOut:function(a){var t,r=.1,n=.4;return a===0?0:a===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*a)*Math.sin((a-t)*(2*Math.PI)/n)+1)},elasticInOut:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var i=a;return(i*=2)<1?-.5*(r*Math.pow(2,10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(i-=1))*Math.sin((i-t)*(2*Math.PI)/n)*.5+1},backIn:function(a){var t=1.70158;return a*a*((t+1)*a-t)},backOut:function(a){var t=a,r=1.70158;return--t*t*((r+1)*t+r)+1},backInOut:function(a){var t=a,r=1.70158*1.525;return(t*=2)<1?.5*(t*t*((r+1)*t-r)):.5*((t-=2)*t*((r+1)*t+r)+2)},bounceIn:function(a){return 1-j.bounceOut(1-a)},bounceOut:function(a){var t=a;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(a){return a<.5?j.bounceIn(a*2)*.5:j.bounceOut(a*2-1)*.5+.5}};function _(m,a,t){var r=a-m,n=t*r,i=m+n,o=m<a?m:a,x=m>a?m:a;return i=Math.max(i,o),i=Math.min(i,x),i}var D=function(a,t,r){if(typeof a=="number"&&typeof t=="number")return _(a,t,r);if(Array.isArray(a)&&Array.isArray(t))return a.map(function(n,i){return _(n,t[i],r)})},T={duration:1e3,easing:"linear",iterationCount:1},y=function(){function m(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};P()(this,m),v()(this,"rafTimer",null),v()(this,"startTime",null),v()(this,"startProp",void 0),v()(this,"targetProp",void 0),v()(this,"cfg",void 0),v()(this,"forward",!0),v()(this,"queue",[]),this.startProp=a,this.targetProp=t,this.cfg=u()(u()({},T),r)}return R()(m,[{key:"start",value:function(){var t=this,r=this.cfg,n=r.duration,i=r.easing,o=r.during,x=r.iterationCount,M=Object.keys(this.targetProp),U=function K(N){t.startTime||(t.startTime=N);var $=j[i](Math.min((N-t.startTime)/n,1));t.forward===!1&&($=1-$);var k={};M.forEach(function(z){var H=D(t.startProp[z],t.targetProp[z],$);k[z]=H}),o&&o($,k);var J=t.forward?$<1:0<$;J?t.rafTimer=requestAnimationFrame(K):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(z){z(k,$)});var V=t.forward?$===1:$===0;V&&x===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(U)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),m}(),S=y,w=e(66115),I=e.n(w),X=e(61655),Y=e.n(X),G=e(26389),F=e.n(G),Q=e(30954),A=e(67294),ee,oe=Object.prototype.toString;function ae(m){return typeof m=="function"}var Ee=function(a){return typeof a!="undefined"};function fe(m){return typeof m=="undefined"}var se=function(a){return typeof a=="boolean"},ve=function(a){return typeof a=="number"};function Re(m){return typeof m=="string"}function Ie(m){return oe.call(m)==="[object Object]"}var Se=null,ye=typeof window!="undefined",Ct=typeof navigator!="undefined";function Le(){}var Mt=ye&&((ee=window)===null||ee===void 0||(ee=ee.navigator)===null||ee===void 0?void 0:ee.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Pt=!A.useId,ke=e(79697),je=function(){function m(){P()(this,m),v()(this,"eventListeners",{})}return R()(m,[{key:"on",value:function(t,r){var n=t.split(" "),i=n.length,o,x,M,U;for(o=0;o<i;o++)x=n[o],M=x.split("."),U=M[0],this.eventListeners[U]||(this.eventListeners[U]=[]),this.eventListeners[U].push({name:(r==null?void 0:r.name)||"",handler:r});return this}},{key:"_off",value:function(t,r,n){var i=this.eventListeners[t],o,x,M;for(o=0;o<i.length;o++)if(x=i[o].name,M=i[o].handler,(!r||x===r)&&(!n||n===M)){if(i.splice(o,1),i.length===0){delete this.eventListeners[t];break}o--}}},{key:"off",value:function(t,r){var n=(t||"").split(" "),i=n.length,o,x,M,U,K,N;for(o=0;o<i;o++)if(M=n[o],U=M.split("."),K=U[0],N=U[1],K)this.eventListeners[K]&&this._off(K,N,r);else for(x in this.eventListeners)this._off(x,N,r);return this}},{key:"_fire",value:function(t,r,n){if(f(n))this.eventListeners[t].forEach(function(x){x.handler(r)});else{var i;if((n==null||(i=n.eventListeners)===null||i===void 0||(i=i[t])===null||i===void 0?void 0:i.length)>0&&n.eventListeners[t].forEach(function(x){x.handler(r,n)}),n!=null&&n.draggable){var o;ae(n==null?void 0:n.draggable)&&n.dragging&&(n==null||n.draggable(r,n)),(o=n.eventListeners)===null||o===void 0||(o=o[t])===null||o===void 0||o.forEach(function(x){x.handler(r,n)})}}}},{key:"fire",value:function(t,r){var n=r.evt,i=r.target,o=r.currentTarget;if(f(o)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,o);for(var x=i==null?void 0:i.children,M=0;M<x.length;M++){var U,K,N=p()(x.filter(function(B){return B.draggable}));if(t==="mousedown"){var $=N.filter(function(B){var ue;return B==null?void 0:B.inScope(n,(ue=i.canvas)===null||ue===void 0?void 0:ue.context)}),k=$.sort(function(B,ue){return ue.index-B.index})[0];k&&(k.name==="Group"?(k.dragging=!0,k.children.forEach(function(B){B.offsetX=B!=null&&B.x?n.offsetX-(B==null?void 0:B.x):n.offsetX,B.offsetY=B!=null&&B.y?n.offsetY-(B==null?void 0:B.y):n.offsetY})):(k.dragging=!0,k.offsetX=k!=null&&k.x?n.offsetX-(k==null?void 0:k.x):n.offsetX,k.offsetY=k!=null&&k.y?n.offsetY-(k==null?void 0:k.y):n.offsetY))}(!(0,ke.Z)((U=x[M])===null||U===void 0?void 0:U.eventListeners)||(K=x[M])!==null&&K!==void 0&&K.draggable)&&this.fire(t,{evt:n,target:i,currentTarget:x[M]})}}else{var J;if(o!=null&&o.draggable&&t==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&t==="mousemove"){var V,z=(V=this.canvas)===null||V===void 0||(V=V.canvas)===null||V===void 0?void 0:V.getBoundingClientRect();if(o.name==="Text"){var H=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,le=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?H-(o==null?void 0:o.offsetX):H,o.y=o!=null&&o.offsetY?le-(o==null?void 0:o.offsetY):le}else if(o.name==="Group"){var he=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,ie=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.children.forEach(function(B){if(B.name==="Text"){var ue=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,pe=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;B.x=B!=null&&B.offsetX?ue-(B==null?void 0:B.offsetX):ue,B.y=B!=null&&B.offsetY?pe-(B==null?void 0:B.offsetY):pe}else B.x=B!=null&&B.offsetX?he-(B==null?void 0:B.offsetX):he,B.y=B!=null&&B.offsetY?ie-(B==null?void 0:B.offsetY):ie})}else{var de=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,ce=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?de-(o==null?void 0:o.offsetX):de,o.y=o!=null&&o.offsetY?ce-(o==null?void 0:o.offsetY):ce}this.batchDraw(this)}if(o!=null&&o.inScope&&(J=i.canvas)!==null&&J!==void 0&&J.context){var Z;if(o!=null&&o.inScope(n,(Z=i.canvas)===null||Z===void 0?void 0:Z.context)){var ne;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,o),t==="mousemove"&&!o.mouseInScope&&((ne=o.eventListeners.mouseenter)===null||ne===void 0?void 0:ne.length)>0&&(o.mouseInScope=!0,i._fire("mouseenter",n,o))}else if(t==="mousemove"){var te;o.mouseInScope=!1,((te=i.eventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&i._fire("mouseleave",n,o)}}}}},{key:"attr",value:function(t){var r=this,n;this.parent&&((0,Q.Z)(t,function(i,o){i&&(r[o]=i)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),m}(),xe=je,Ne=function(m){Y()(t,m);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(I()(n),"name","Circle"),v()(I()(n),"parent",null),v()(I()(n),"x",void 0),v()(I()(n),"y",void 0),v()(I()(n),"radius",void 0),v()(I()(n),"lineWidth",void 0),v()(I()(n),"fillStyle",void 0),v()(I()(n),"strokeStyle",void 0),v()(I()(n),"arc",void 0),v()(I()(n),"startAngle",void 0),v()(I()(n),"endAngle",void 0),v()(I()(n),"innerRadius",void 0),v()(I()(n),"index",void 0),v()(I()(n),"path2D",void 0),v()(I()(n),"border",void 0),v()(I()(n),"shadowColor",void 0),v()(I()(n),"shadowBlur",0),v()(I()(n),"shadowOffsetY",0),v()(I()(n),"shadowOffsetX",0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,i,o,x){var M=this.deg2rad(x),U=n+o*Math.cos(M),K=i+o*Math.sin(M);return{x:U,y:K}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,i="M ".concat(this.x," ").concat(n),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),x=this.y-this.innerRadius,M="M ".concat(this.x," ").concat(x),U="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(x);return"".concat(i," ").concat(o," ").concat(M," ").concat(U," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),i=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,x="M ".concat(n.x," ").concat(n.y),M="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(i.x," ").concat(i.y),U=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),K=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),N="L".concat(K.x," ").concat(K.y),$="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(U.x," ").concat(U.y);return"".concat(x," ").concat(M," ").concat(N," ").concat($," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var i=this.startAngle===0&&this.endAngle===360,o;switch(this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.border){case 0:return o=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(i)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(i)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(n,i){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(xe),Qe=Ne,$e=function(m){Y()(t,m);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),v()(I()(n),"name","Custom"),v()(I()(n),"x",void 0),v()(I()(n),"y",void 0),v()(I()(n),"width",void 0),v()(I()(n),"height",void 0),v()(I()(n),"fillStyle",void 0),v()(I()(n),"strokeStyle",void 0),v()(I()(n),"lineWidth",void 0),v()(I()(n),"index",void 0),v()(I()(n),"path2D",void 0),v()(I()(n),"parent",null),v()(I()(n),"shadowColor",void 0),v()(I()(n),"shadowBlur",0),v()(I()(n),"shadowOffsetY",0),v()(I()(n),"shadowOffsetX",0),!r.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,n.shadowColor="transparent",(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n,i){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(xe),Ye=$e,Fe=function(m){Y()(t,m);var a=F()(t);function t(){var r;P()(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=a.call.apply(a,[this].concat(i)),v()(I()(r),"children",[]),r}return R()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var i=this.children||[],o=[];return i.forEach(function(x){n(x)&&o.push(x)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var i=arguments.length<=0?void 0:arguments[0];return i.index=i.index?i.index:this.getChildren().length,i.parent=this,this.getChildren().push(i),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(i){var o=n.some(function(x){return x===i});o||n.push(i)}),this.children=n,n}},{key:"batchDraw",value:function(n){var i,o,x,M,U;!((i=n.canvas)!==null&&i!==void 0&&i.context)||!((o=n.canvas)!==null&&o!==void 0&&o.canvas)||((x=n.canvas)===null||x===void 0||x.context.clearRect(0,0,(M=n.canvas)===null||M===void 0?void 0:M.canvas.offsetWidth,(U=n.canvas)===null||U===void 0?void 0:U.canvas.offsetHeight),this.sortChildren(function(K,N){return K.index-N.index}),this.deduplication(),this.getChildren().forEach(function(K){var N;if((N=n.canvas)!==null&&N!==void 0&&N.context&&K!==null&&K!==void 0&&K.draw){var $;K==null||K.draw(($=n.canvas)===null||$===void 0?void 0:$.context)}}))}}]),t}(xe),Te=Fe,Ge=function(m){Y()(t,m);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(I()(n),"parent",void 0),v()(I()(n),"name","Group"),v()(I()(n),"draggable",!1),n.parent=null,(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"draw",value:function(n){if(n)return this.sortChildren(function(i,o){return i.index-o.index}),this.deduplication(),this.getChildren().forEach(function(i){n&&i!==null&&i!==void 0&&i.draw&&(i==null||i.draw(n))}),this}},{key:"inScope",value:function(n,i){return this.getChildren().some(function(o){return"inScope"in o&&typeof o.inScope=="function"?o.inScope(n,i):!1})}}]),t}(Te),Xe=Ge,Je=e(27424),q=e.n(Je),He=function(m){Y()(t,m);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(I()(n),"name","Line"),v()(I()(n),"start",void 0),v()(I()(n),"end",void 0),v()(I()(n),"points",void 0),v()(I()(n),"smooth",void 0),v()(I()(n),"strokeStyle",void 0),v()(I()(n),"lineWidth",void 0),v()(I()(n),"lineCap",void 0),v()(I()(n),"lineJoin",void 0),v()(I()(n),"index",void 0),v()(I()(n),"path2D",void 0),v()(I()(n),"parent",null),v()(I()(n),"shadowColor",void 0),v()(I()(n),"shadowBlur",0),v()(I()(n),"shadowOffsetY",0),v()(I()(n),"shadowOffsetX",0),v()(I()(n),"lineDash",[]),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(i,o,x){var M=Math.floor(x/2);return x%2===0?i.push([o]):i[M].push(o),i},[]).map(function(i){var o=q()(i,2),x=o[0],M=o[1];return{x,y:M}})}},{key:"calcSmoothPath2D",value:function(){var n,i,o,x=new Path2D;return x.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0),x.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&x.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&x.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=x,x}},{key:"calcStraightPath2D",value:function(){var n,i,o,x,M=new Path2D;M.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0);var U=this.convertToNormalPoints([].concat(p()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(x=this.end)===null||x===void 0?void 0:x.y]));return U.forEach(function(K){var N=K.x,$=K.y;M.lineTo(N,$)}),M}},{key:"draw",value:function(n){var i=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.lineDash.length<=0?n.setLineDash([]):n.setLineDash(this.lineDash),n.stroke(i),this}},{key:"inScope",value:function(n,i){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(xe),Ze=He,Ve=function(m){Y()(t,m);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(I()(n),"name","Rect"),v()(I()(n),"x",void 0),v()(I()(n),"y",void 0),v()(I()(n),"width",void 0),v()(I()(n),"height",void 0),v()(I()(n),"fillStyle",void 0),v()(I()(n),"strokeStyle",void 0),v()(I()(n),"lineWidth",void 0),v()(I()(n),"index",void 0),v()(I()(n),"path2D",void 0),v()(I()(n),"parent",null),v()(I()(n),"shadowColor",void 0),v()(I()(n),"shadowBlur",0),v()(I()(n),"shadowOffsetY",0),v()(I()(n),"shadowOffsetX",0),v()(I()(n),"radius",0),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.shadowColor="transparent",n.index=0,n.radius=0,(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"draw",value:function(n){var i=new Path2D;this.radius?(i.moveTo(this.x+this.radius,this.y),i.lineTo(this.x+this.width-this.radius,this.y),i.arcTo(this.x+this.width,this.y,this.x+this.width,this.y+this.radius,this.radius),i.lineTo(this.x+this.width,this.y+this.height-this.radius),i.arcTo(this.x+this.width,this.y+this.height,this.x+this.width-this.radius,this.y+this.height,this.radius),i.lineTo(this.x+this.radius,this.y+this.height),i.arcTo(this.x,this.y+this.height,this.x,this.y+this.height-this.radius,this.radius),i.lineTo(this.x,this.y+this.radius),i.arcTo(this.x,this.y,this.x+this.radius,this.y,this.radius)):(i.moveTo(this.x,this.y),i.lineTo(this.x+this.width,this.y),i.lineTo(this.x+this.width,this.y+this.height),i.lineTo(this.x,this.y+this.height)),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",i.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(i),this.fillStyle&&n.fill(i),this.path2D=i}},{key:"inScope",value:function(n,i){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),t}(xe),qe=Ve,en=function(m){Y()(t,m);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),v()(I()(n),"name","Text"),v()(I()(n),"parent",null),v()(I()(n),"x",void 0),v()(I()(n),"y",void 0),v()(I()(n),"content",void 0),v()(I()(n),"fillStyle",void 0),v()(I()(n),"fontFamily",void 0),v()(I()(n),"fontSize",void 0),v()(I()(n),"textAlign",void 0),v()(I()(n),"textBaseline",void 0),v()(I()(n),"width",void 0),v()(I()(n),"height",void 0),v()(I()(n),"index",0),v()(I()(n),"shadowColor",void 0),v()(I()(n),"shadowBlur",0),v()(I()(n),"shadowOffsetY",0),v()(I()(n),"shadowOffsetX",0),n.content="",!r.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,n.shadowColor="transparent",(0,Q.Z)(r,function(i,o){i&&(I()(n)[o]=i)}),n}return R()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var i=n.measureText(this.content);return this.width=i.width,this.height=this.fontSize,this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n){var i=n.offsetX*c,o=n.offsetY*c;return g(i,o,this)}}]),t}(xe),nn=en,Oe=null,tn=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(m){setTimeout(m,60)},an=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(t){}return a},Dt=function(a){Oe.push(a),Oe.length===1&&tn(function(){var t=Oe;Oe=[],t.forEach(function(r){r()})})},rn=function(){function m(){P()(this,m),v()(this,"canvas",void 0),v()(this,"context",void 0),v()(this,"width",0),v()(this,"height",0),this.canvas=an(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return R()(m,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*c,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*c,this.canvas.style.height=t+"px",this.context.scale(c,c)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,r){this.setWidth(t||0),this.setHeight(r||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,r,n){return n&&this.setBackgroundColor(n),this.canvas}}]),m}(),on="mouseenter",un="mouseleave",sn="mouseout",dn="mouseover",ln="mousedown",cn="mousemove",vn="mouseup",hn="contextmenu",fn="click",In="dblclick",mn="wheel",pn=[[on,"_mouseenter"],[ln,"_mousedown"],[cn,"_mousemove"],[un,"_mouseleave"],[vn,"_mouseup"],[sn,"_mouseout"],[dn,"_mouseover"],[hn,"_contextmenu"],[mn,"_wheel"],[fn,"_click"],[In,"_dblclick"]],_n=function(m){Y()(t,m);var a=F()(t);function t(){var r;return P()(this,t),r=a.call(this),v()(I()(r),"name","Stage"),v()(I()(r),"parent",null),v()(I()(r),"content",void 0),v()(I()(r),"canvas",void 0),v()(I()(r),"width",void 0),v()(I()(r),"height",void 0),v()(I()(r),"draggable",void 0),v()(I()(r),"isFirstRender",void 0),v()(I()(r),"_pointerPositions",[]),v()(I()(r),"_changedPointerPositions",[]),v()(I()(r),"pointerPos",null),r.content=null,r.canvas=null,r.width=100,r.height=500,r.isFirstRender=!0,r.draggable=!1,r}return R()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var i=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),o=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=i,this.content.style.height=o,this.canvas=new rn,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,i,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,i,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.width=this.content.offsetWidth,this.height=this.content.offsetHeight,this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var i=this.content.getBoundingClientRect(),o={top:i.top,left:i.left,scaleX:i.width/this.content.clientWidth||1,scaleY:i.height/this.content.clientHeight||1},x=null,M=null;x=(n.clientX-o.left)/o.scaleX,M=(n.clientY-o.top)/o.scaleY,this.pointerPos={x,y:M}}},{key:"_bindContentEvents",value:function(){var n,i=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&pn.forEach(function(o){var x,M=q()(o,2),U=M[0],K=M[1];(x=i.content)===null||x===void 0||x.addEventListener(U,function(N){i[K](N)},{passive:!1})})}},{key:"_mouseenter",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(Te),Be=_n;function En(){var m=(0,A.useRef)(!1),a=(0,A.useCallback)(function(){return m.current},[]);return(0,A.useEffect)(function(){return m.current=!0,function(){m.current=!1}},[]),a}function we(m){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},r=(0,A.useRef)(0),n=En(),i=(0,A.useState)(t),o=q()(i,2),x=o[0],M=o[1],U=(0,A.useCallback)(function(){var K=++r.current;return x.loading||M(function(N){return u()(u()({},N),{},{loading:!0})}),m.apply(void 0,arguments).then(function(N){return n()&&K===r.current&&M({value:N,loading:!1}),N},function(N){return n()&&K===r.current&&M({error:N,loading:!1}),N})},a);return[x,U]}var xn=e(17061),Ce=e.n(xn),gn=e(17156),be=e.n(gn),yn=function(a,t){var r=(0,A.useRef)(),n=function(){if(r.current)throw r.current.abort(),new Error(" Canceled .")};A.useEffect(function(){return function(){r.current&&r.current.abort()}},[]);var i=we(be()(Ce()().mark(function o(){var x,M,U,K,N=arguments;return Ce()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return r.current&&r.current.abort(),r.current=new AbortController,x=r.current.signal,M={cancelInterceptor:n},k.next=6,a(M);case 6:return U=k.sent,k.next=9,U.apply(void 0,N);case 9:return K=k.sent,k.abrupt("return",K);case 11:case"end":return k.stop()}},o)})),t);return i},On=yn,Me={};function At(m){console.error(m)}var me=e(31955);function Cn(m,a){return a!==void 0?a:ye?me.Z.get(m):""}var Mn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Me,r=arguments.length>2?arguments[2]:void 0,n=(0,A.useState)(Cn(a,r)),i=q()(n,2),o=i[0],x=i[1];(0,A.useEffect)(function(){var K=function(){var $=me.Z.get(a);return $!=null?$:(r===void 0?me.Z.remove(a):me.Z.set(a,r,t),r)};x(K())},[r,a,JSON.stringify(t)]);var M=(0,A.useCallback)(function(K){var N=ae(K)?K(o):K;N===void 0?me.Z.remove(a):me.Z.set(a,N,t),x(N)},[a,o,JSON.stringify(t)]),U=(0,A.useCallback)(function(){var K=me.Z.get(a);Re(K)&&x(K)},[a]);return[o,M,U]},Pn=Mn,Dn=function(){var a=(0,A.useState)(0),t=q()(a,2),r=t[0],n=t[1],i,o=function(){clearTimeout(i)},x=function(U){o(),n(U||function(K){return K-1})};return(0,A.useEffect)(function(){return i=setTimeout(function(){r>0?n(function(M){return M-1}):o()},1e3),function(){return o()}},[r]),[r,x,o]},An=Dn,Rn=e(72249),Sn=function(a,t,r){var n=(0,A.useRef)(void 0);(!n.current||!r(t,n.current))&&(n.current=t),(0,A.useEffect)(a,n.current)},Ln=function(a,t){Sn(a,t,Rn.Z)},Tn=Ln,Bn=function(){var a=(0,A.useState)(1),t=q()(a,2),r=t[0],n=t[1],i=(0,A.useCallback)(function(){if(window){n(window.devicePixelRatio);var o=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),x=function(){i()};return o.addEventListener("change",x,{once:!0}),function(){o.removeEventListener("change",x)}}},[]);return(0,A.useEffect)(function(){var o=i();return o},[i]),{pixelRatio:r}},wn=Bn,bn=function(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Me;(0,A.useEffect)(function(){var n=new ResizeObserver(t);return a!=null&&a.current&&n.observe(a.current,r),function(){a!=null&&a.current&&n.unobserve(a.current),n.disconnect()}},[])},We=bn,Wn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Me,r=(0,A.useState)({width:0,height:0}),n=q()(r,2),i=n[0],o=n[1];return We(a,function(x){if(x.length!==0){var M=q()(x,1),U=M[0],K=U.contentRect,N=K.width,$=K.height;o({width:N,height:$})}},t),i},Kn=Wn,Ke=e(54683),Un=e(33293),zn="application/json;charset=utf-8",Rt="application/x-www-form-urlencoded",St={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":zn,Accept:"application/json;version=3.0;compress=false;"},kn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},jn=e(54998),Nn=e.n(jn),Qn=e(49360),$n=e(58146),Yn=e(73505),Fn=e(27771),Gn=e(77226),Xn=e(36378),Pe=function m(a){if((0,Qn.Z)(a)||(0,$n.Z)(a)||(0,Yn.Z)(a))return a;if((0,Fn.Z)(a))return a.map(function(r){return m(r)});if((0,Gn.Z)(a)){var t=Object.create(null);return Object.keys(a).forEach(function(r){t[r]=m(a[r])}),t}else return(0,Xn.Z)(a)?a.trim():a};function Lt(){return typeof window=="undefined"?!1:window&&window.__debug__}function Tt(m){var a=atob(m);return Uint8Array.from(a,function(t){return t.codePointAt(0)})}function Bt(m){var a=Array.from(m,function(t){return String.fromCodePoint(t)}).join("");return btoa(a)}var Jn=Ke.Z.CancelToken.source(),Hn=function(a){a.cancelToken=Jn.token;var t=Nn()(a.url);if(a.url=t.query(Pe(t.query(!0))||{}).toString(),a.data&&(a.data=Pe(a.data)),a.params=Pe(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var r=a.data,n=r===void 0?{}:r;for(var i in n)if(n.hasOwnProperty(i)){var o=n[i];o==null&&delete n[i]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},Zn=function(a,t){t&&a.interceptors.request.use(function(r){return t(r)},function(r){return Promise.reject(r)}),a.interceptors.request.use(function(r){return Hn(r)},function(r){return Promise.reject(r)})},Vn=function(a){var t,r=a.data;try{if(r instanceof Blob){var n=a.headers["content-disposition"],i=n.split("filename=")[1];return{success:!0,data:{file:r,fileName:i}}}}catch(o){console.error(o)}return((t=a.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,r},qn=function(a){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var r=a.response.data.errors,n=r===void 0?[]:r,i=n&&n[0]||{};return Promise.reject({message:i.message||a.message||t,arguments:i.arguments||void 0,code:i.code||null})}return Promise.reject({message:a.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},et=function(a,t,r){t&&a.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&a.interceptors.response.use(function(n){return n},r),a.interceptors.response.use(Vn,qn)},nt=function(a){var t=a.config,r=t===void 0?{}:t,n=a.requestInterceptorsCallback,i=a.responseInterceptorOnSuccessCallback,o=a.responseInterceptorOnErrorCallback,x=(0,Un.Z)(kn(),r),M=Ke.Z.create(x);Zn(M,n),et(M,i,o);function U(k,J,V){return M.request(u()({url:k,params:J},V))}function K(k,J,V){return M.request(u()({url:k,method:"post",params:J},V))}function N(k,J,V){return M.request(u()({url:k,method:"put",params:J},V))}function $(k,J,V){return M.request(u()({url:k,method:"delete",params:J},V))}return{get:U,post:K,del:$,put:N}},tt=nt,at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",rt=function(a){var t=a.imgList,r=(0,A.useState)(!1),n=q()(r,2),i=n[0],o=n[1],x=(0,A.useState)(""),M=q()(x,2),U=M[0],K=M[1],N=(0,A.useState)([]),$=q()(N,2),k=$[0],J=$[1],V=(0,A.useState)([]),z=q()(V,2),H=z[0],le=z[1],he=function ie(de,ce,Z){var ne=new Image,te=ce+1;ne.src=de,ne.onload=function(){J(function(B){return[].concat(p()(B),[de])}),le(function(B){return[].concat(p()(B),[de])}),Z||K(de),ce<t.length-1?ie(t[te],te,!0):o(!1)},ne.onerror=function(){J(function(B){return[].concat(p()(B),[at])}),te<t.length-1?ie(t[te],te):o(!1)}};return(0,A.useEffect)(function(){(t==null?void 0:t.length)>1&&(o(!0),he(t==null?void 0:t[0],0))},[]),console.log([U,k,H,i]),k.length!==t.length?["",[],[],!0]:[U,k,H,i]},ot=rt;function ut(m){var a=m.dataSource,t=m.delay,r=t===void 0?100:t,n=m.pageSize,i=n===void 0?10:n,o=m.fetchData,x=(0,A.useState)(!1),M=q()(x,2),U=M[0],K=M[1],N=(0,A.useState)(!0),$=q()(N,2),k=$[0],J=$[1],V=(0,A.useState)([]),z=q()(V,2),H=z[0],le=z[1];function he(){return ie.apply(this,arguments)}function ie(){return ie=be()(Ce()().mark(function de(){return Ce()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(!(!(a!=null&&a.length)&&!o)){Z.next=2;break}return Z.abrupt("return");case 2:if(!(!k||U)){Z.next=4;break}return Z.abrupt("return");case 4:if(K(!0),!a){Z.next=10;break}return Z.next=8,new Promise(function(ne){setTimeout(function(){ne(a==null?void 0:a.slice(H.length,H.length+i))},r)}).then(function(ne){J((H==null?void 0:H.length)+(ne==null?void 0:ne.length)<(a==null?void 0:a.length)),le(function(te){return te==null?void 0:te.concat(ne)})});case 8:Z.next=12;break;case 10:return Z.next=12,o==null?void 0:o({pageNum:H!=null&&H.length?Math.ceil((H==null?void 0:H.length)/i)+1:1,pageSize:i}).then(function(ne){var te=ne.list,B=te===void 0?[]:te,ue=ne.total,pe=ue===void 0?0:ue;J((H==null?void 0:H.length)+(B==null?void 0:B.length)<pe&&(B==null?void 0:B.length)>0),le(function(ge){return ge==null?void 0:ge.concat(B)})});case 12:K(!1);case 13:case"end":return Z.stop()}},de)})),ie.apply(this,arguments)}return{data:H,setData:le,loading:U,hasMore:k,loadMore:he}}var st=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(0,A.useState)(!1),n=q()(r,2),i=n[0],o=n[1],x=(0,A.useRef)(null);return(0,A.useEffect)(function(){var M=new IntersectionObserver(function(U){U.forEach(function(K){K.isIntersecting?(o(!0),t&&M.unobserve(K.target)):o(!1)})},a);return x!=null&&x.current&&M.observe(x.current),function(){x!=null&&x.current&&M.unobserve(x.current)}},[a,t]),[x,i]},it=st,dt=function(a,t,r){if(!ye)return[t,Le,Le];if(!a)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function($){return $}:r.deserializer:JSON.parse,i=(0,A.useRef)(function($){try{var k=r?r.raw?String:r.serializer:JSON.stringify,J=localStorage.getItem($);return J!==null?n(J):(t&&localStorage.setItem($,k(t)),t)}catch(V){return t}}),o=(0,A.useState)(function(){return i.current(a)}),x=q()(o,2),M=x[0],U=x[1];(0,A.useLayoutEffect)(function(){return U(i.current(a))},[a]);var K=(0,A.useCallback)(function($){try{var k=typeof $=="function"?$(M):$;if(typeof k=="undefined")return;var J;r?r.raw?typeof k=="string"?J=k:J=JSON.stringify(k):r.serializer?J=r.serializer(k):J=JSON.stringify(k):J=JSON.stringify(k),localStorage.setItem(a,J),U(n(J))}catch(V){}},[a,U]),N=(0,A.useCallback)(function(){try{localStorage.removeItem(a),U(void 0)}catch($){}},[a,U]);return[M,K,N]},lt=dt,ct=function(a){var t=(0,A.useRef)({});return(0,A.useLayoutEffect)(function(){t.current=a}),(0,A.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},vt=ct,ht=function(a,t,r){if(!ye)return[t,function(){}];var n=(0,A.useState)(function(){try{var M=sessionStorage.getItem(a);return typeof M!="string"?(sessionStorage.setItem(a,r?String(t):JSON.stringify(t)),t):r?M:JSON.parse(M||"null")}catch(U){return t}}),i=q()(n,2),o=i[0],x=i[1];return(0,A.useEffect)(function(){try{var M=r?String(o):JSON.stringify(o);sessionStorage.setItem(a,M)}catch(U){}}),[o,x]},ft=ht,It=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.reconnectLimit,n=r===void 0?3:r,i=t.reconnectInterval,o=i===void 0?3e3:i,x=t.manual,M=x===void 0?!1:x,U=t.onOpen,K=t.onClose,N=t.onMessage,$=t.onError,k=t.protocols,J=(0,A.useState)(WebSocket.CONNECTING),V=q()(J,2),z=V[0],H=V[1],le=(0,A.useState)(null),he=q()(le,2),ie=he[0],de=he[1],ce=(0,A.useRef)(0),Z=(0,A.useRef)(),ne=(0,A.useRef)(),te=(0,A.useState)(!1),B=q()(te,2),ue=B[0],pe=B[1],ge=function De(){a&&(pe(!1),Z.current=new WebSocket(a,k),Z.current.onopen=function(re){H(WebSocket.OPEN),U==null||U(re),ce.current=0},Z.current.onclose=function(re){H(WebSocket.CLOSED),K==null||K(re),!ue&&ce.current<n&&(ne.current=setTimeout(function(){ce.current+=1,De()},o))},Z.current.onmessage=function(re){var _e=re;if(t.json)try{_e=JSON.parse(re.data)}catch(Ae){console.error("JSON \u89E3\u6790\u5931\u8D25:",Ae)}de(_e),N==null||N(_e)},Z.current.onerror=function(re){$==null||$(re)})},Ot=function(re){if(z===WebSocket.OPEN){var _e,Ae=t.json?JSON.stringify(re):re;(_e=Z.current)===null||_e===void 0||_e.send(Ae)}},ze=function(){var re;pe(!0),(re=Z.current)===null||re===void 0||re.close(),clearTimeout(ne.current)};return(0,A.useEffect)(function(){return M||ge(),function(){ze()}},[a,M]),{readyState:z,sendMessage:Ot,connect:ge,disconnect:ze,webSocketIns:Z.current,latestMessage:ie}},mt=It,pt=function(){var a=(0,A.useState)({width:window.innerWidth,height:window.innerHeight}),t=q()(a,2),r=t[0],n=t[1],i=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,A.useLayoutEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),{width:r.width,height:r.height}},_t=pt,Et=function(){function m(a){P()(this,m),v()(this,"stage",void 0),v()(this,"ctx",void 0),v()(this,"autoFit",void 0),v()(this,"resizeObserver",null),this.stage=new Be,this.ctx=a.container,this.autoFit=a.autoFit}return R()(m,[{key:"contentEvents",value:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){t.stage&&t.stage._resizeDOM()}),this.ctx&&this.resizeObserver.observe(this.ctx)}},{key:"data",value:function(){}},{key:"encode",value:function(){}},{key:"render",value:function(){this.stage&&this.ctx&&(this.stage.buildContentDOM({container:this.ctx,backgroundColor:"#fff"}),this.autoFit&&this.contentEvents())}},{key:"destroy",value:function(){this.ctx&&this.resizeObserver&&this.resizeObserver.unobserve(this.ctx)}}]),m}(),Ue=Et,xt=e(85893),gt=function(a){var t=a.options,r=(0,A.useRef)(null),n=(0,A.useRef)(null);return n.current=new Ue({container:r.current,autoFit:!0}),(0,A.useLayoutEffect)(function(){var i;return n.current=new Ue({container:r.current,autoFit:!0}),(i=n.current)===null||i===void 0||i.render(),function(){var o;return(o=n.current)===null||o===void 0?void 0:o.destroy()}},[]),(0,xt.jsx)("div",{ref:r})},yt=gt},69111:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(55832);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u6DFB\u52A0\u52A8\u753B",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"on",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"off",paraId:1,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},58025:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(66397);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},81253:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(23629);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"path2D",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u56FE\u5F62\u7684 Path2D",paraId:1,tocIndex:3},{value:"Path2D",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},4053:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(49011);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u62D6\u62FD\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u7ED9\u5143\u7D20\u6DFB\u52A0 draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8FD9\u662F boolean \u503C\u6216\u8005 \u51FD\u6570\u63A5\u6536 \u9F20\u6807\u4E8B\u4EF6\u53C2\u6570",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},76631:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(50138);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 on \u65B9\u6CD5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F7F\u7528 off \u65B9\u6CD5\u89E3\u7ED1\u4E8B\u4EF6\u3002",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},96627:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(52192);const u=[{value:"\u5C06\u591A\u4E2A\u56FE\u5F62\u7F16\u7EC4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},48977:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(54197);const u=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},13155:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(10372);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u76F4\u7EBF\u3001\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3001\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"start",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"end",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"points",paraId:1,tocIndex:3},{value:"\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"array",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3},{value:"smooth",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5E73\u6ED1",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"lineCap",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u7AEF\u70B9\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"butt",paraId:1,tocIndex:3},{value:"lineJoin",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u8FDE\u63A5\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"miter",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"lineDash",paraId:1,tocIndex:3},{value:"\u865A\u7EBF\u6837\u5F0F",paraId:1,tocIndex:3},{value:"[]number",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3}]},12477:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(89131);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u77E9\u5F62",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"height",paraId:1,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u5706\u89D2",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},25924:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(18283);const u=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"container",paraId:0,tocIndex:3},{value:"\u5BB9\u5668 dom",paraId:0,tocIndex:3},{value:"HTMLElement",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"width",paraId:0,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"height",paraId:0,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"backgroundColor",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u8272",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"#fff",paraId:0,tocIndex:3}]},27837:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(70821);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u6587\u5B57",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"content",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u5BB9",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"fontSize",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"16",paraId:1,tocIndex:3},{value:"textAlign",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u5BF9\u9F50",paraId:1,tocIndex:3},{value:"CanvasTextAlign",paraId:1,tocIndex:3},{value:"textBaseline",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u57FA\u51C6\u7EBF",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"CanvasTextBaseline",paraId:1,tocIndex:3},{value:"direction",paraId:1,tocIndex:3},{value:"\u6587\u672C\u65B9\u5411",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"fontStyle",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#333",paraId:1,tocIndex:3},{value:"fontVariant",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u53D8\u4F53",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"textDecoration",paraId:1,tocIndex:3},{value:"\u6587\u672C\u4FEE\u9970",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"align",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"verticalAlign",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"padding",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u8FB9\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"lineHeight",paraId:1,tocIndex:3},{value:"\u884C\u9AD8",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"letterSpacing",paraId:1,tocIndex:3},{value:"\u5B57\u7B26\u95F4\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},9978:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(26211);const u=[{value:"\u4E3A\u5565\u53EB ",paraId:0,tocIndex:0},{value:"heitu",paraId:0,tocIndex:0},{value:`
\u672C\u4EBA\u73A9 LOL \u7684\u7B2C\u4E00\u4E2A\u82F1\u96C4\u662F `,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:`,\u83B7\u5F97\u7684\u7B2C\u4E00\u4E2A\u76AE\u80A4\u662F\u9ED1\u8272\u7684\u90A3\u6B3E\uFF0C\u6240\u4EE5\u8D77\u540D\u5C31\u53EB\u4E86\u9ED1\u5154
\u559C\u6B22`,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:" \u7684\u5927\u62DB\u7ED9\u4E00\u4E2A\u5BF9\u65B9\u89D2\u8272\uFF0C\u522B\u7684\u89D2\u8272\u4E0D\u4F1A\u5BF9\u5979\u9020\u6210\u4F24\u5BB3\uFF0C\u5E0C\u671B\u6211\u7684\u5E93\u4E5F\u80FD\u50CF\u5979\u7684\u5927\u62DB\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"heitu",paraId:1,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:1,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:2,tocIndex:1}]},69236:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(29876);const u=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(93139);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(72155);const u=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(64577);const u=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(28587);const u=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(59301);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(48035);const u=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(56139);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(38668);const u=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81233);const u=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(35412);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(1019);const u=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(40801);const u=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setValue",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:4},{value:"(value: any) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"remove",paraId:2,tocIndex:4},{value:"\u6E05\u7A7A",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},19905:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(74746);const u=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81286);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(5480);const u=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},82748:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(24393);const u=[{value:"useWebSocket",paraId:0,tocIndex:1},{value:"\u7528\u4E8E\u67D0\u4E9B\u9879\u76EE\u524D\u7AEF\u591A\u6B21\u8BF7\u6C42\u76F8\u540C\u6D6A\u8D39\u8D44\u6E90\u8BF7\u6C42\u65F6\u95F4\u7684\u95EE\u9898",paraId:1,tocIndex:1},{value:"\u4F7F\u7528\u8981\u6C42:",paraId:2,tocIndex:1},{value:"\u8BF7\u6C42\u53C2\u6570\u76F8\u540C",paraId:3,tocIndex:1},{value:"\u63A5\u53E3\u8FD4\u56DE\u4E5F\u76F8\u540C",paraId:3,tocIndex:1},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"onOpen",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u5EFA\u7ACB\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['open']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onClose",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u5173\u95ED\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['close']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onMessage",paraId:4,tocIndex:4},{value:"\u6536\u5230\u6D88\u606F\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(message: WebSocketEventMap['message']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onError",paraId:4,tocIndex:4},{value:"\u8FDE\u63A5\u9519\u8BEF\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:4},{value:"(event: WebSocketEventMap['error']) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"protocols",paraId:4,tocIndex:4},{value:"WebSocket \u5B50\u534F\u8BAE",paraId:4,tocIndex:4},{value:"string | string[]",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"reconnectLimit",paraId:4,tocIndex:4},{value:"\u91CD\u8FDE\u6B21\u6570\u9650\u5236",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"3",paraId:4,tocIndex:4},{value:"reconnectInterval",paraId:4,tocIndex:4},{value:"\u91CD\u8FDE\u95F4\u9694\u65F6\u95F4(ms)",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"3000",paraId:4,tocIndex:4},{value:"manual",paraId:4,tocIndex:4},{value:"\u662F\u5426\u624B\u52A8\u63A7\u5236\u8FDE\u63A5",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"json",paraId:4,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u5E8F\u5217\u5316 JSON",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"readyState",paraId:5,tocIndex:5},{value:"WebSocket \u8FDE\u63A5\u72B6\u6001",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"sendMessage",paraId:5,tocIndex:5},{value:"\u53D1\u9001\u6D88\u606F\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"(message: string | ArrayBufferLike | Blob | ArrayBufferView) => void",paraId:5,tocIndex:5},{value:"connect",paraId:5,tocIndex:5},{value:"\u624B\u52A8\u8FDE\u63A5\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"disconnect",paraId:5,tocIndex:5},{value:"\u65AD\u5F00\u8FDE\u63A5\u65B9\u6CD5",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"\u503C",paraId:6,tocIndex:6},{value:"\u72B6\u6001",paraId:6,tocIndex:6},{value:"\u63CF\u8FF0",paraId:6,tocIndex:6},{value:"0",paraId:6,tocIndex:6},{value:"CONNECTING",paraId:6,tocIndex:6},{value:"\u6B63\u5728\u8FDE\u63A5\u4E2D",paraId:6,tocIndex:6},{value:"1",paraId:6,tocIndex:6},{value:"OPEN",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u5DF2\u5EFA\u7ACB",paraId:6,tocIndex:6},{value:"2",paraId:6,tocIndex:6},{value:"CLOSING",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u6B63\u5728\u5173\u95ED",paraId:6,tocIndex:6},{value:"3",paraId:6,tocIndex:6},{value:"CLOSED",paraId:6,tocIndex:6},{value:"\u8FDE\u63A5\u5DF2\u5173\u95ED",paraId:6,tocIndex:6}]},85854:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(51530);const u=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(68537);const u=[]},87724:function(b,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(79930);const u=[{value:"\u7C7B\u4F3C nest \u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1 Im_Peco",paraId:5,tocIndex:3}]},78890:function(b,l){l.Z=`import { Stage, useResizeObserver } from 'heitu';
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
