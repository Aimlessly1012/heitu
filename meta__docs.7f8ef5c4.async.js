"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{94294:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(55832),M={"docs-canvas-animation-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i,k;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=D.sent,I=E.Circle,c=E.Stage,h=E.useResizeObserver,f=E.Animate,D.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return d=D.sent,g=d.default,i=d.useLayoutEffect,k=d.useRef,D.abrupt("return",{default:function(){var y=new c,A=k(null),W=new I({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2});y.add(W);var m=function(){var $=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});$.start();var X=W.x,F=W.y,Y=W.x,b=W.y,V=W.radius,re=W.radius,ae=function(ce,oe){re=(V-re)*oe,Y=(300-Y)*oe,b=(400-b)*oe,W.attr({x:X+Y,y:F+b,radius:V-re})};$.pushQueue(ae)};return W.on("click",m),i(function(){y.buildContentDOM({container:A.current,backgroundColor:"#fff"});var G=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});G.start();var $=W.radius,X=W.radius,F=function(b,V){X=($-X)*V,W.attr({radius:$+X})};return G.pushQueue(F),function(){return G.stop()}},[]),h(A,function(){return y._resizeDOM()}),g.createElement(g.Fragment,null,g.createElement("div",{ref:A}))}});case 14:case"end":return D.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-animation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},28835:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(66397),M={"docs-canvas-circle-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Circle,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=i(null),A=new I({x:100,y:150,radius:50,strokeStyle:"blue",fillStyle:"pink",lineWidth:1,border:0,startAngle:200,endAngle:270}),W=new I({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});return T.add(A,W),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-circle-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},80148:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(23629),M={"docs-canvas-custom-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Custom,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=i(null),A=new Path2D;A.moveTo(200,240),A.bezierCurveTo(200,200,120,150,120,200),A.bezierCurveTo(120,280,200,300,200,340),A.bezierCurveTo(200,300,280,280,280,200),A.bezierCurveTo(280,150,200,200,200,240);var W=new I({path2D:A});return T.add(W),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-custom-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Custom, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},70544:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(49011),E={"docs-canvas-drag-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i,k,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=y.sent,h=c.Circle,f=c.Stage,d=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,i=g.default,k=g.useLayoutEffect,_=g.useRef,D=g.useState,y.abrupt("return",{default:function(){var W=D({x:0,y:0}),m=P()(W,2),G=m[0],$=m[1],X=new f,F=_(null),Y=new h({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2,draggable:!0}),b=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:2,border:2,draggable:function(re,ae){$({x:ae.x,y:ae.y})}});return X.add(Y,b),k(function(){X.buildContentDOM({container:F.current,backgroundColor:"#fff"})},[]),d(F,function(){return X._resizeDOM()}),i.createElement(i.Fragment,null,G.x,",",G.y,i.createElement("div",{ref:F}))}});case 14:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-canvas-drag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},11293:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(50138),E={"docs-canvas-event-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i,k,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=y.sent,h=c.Circle,f=c.Stage,d=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,i=g.default,k=g.useLayoutEffect,_=g.useRef,D=g.useState,y.abrupt("return",{default:function(){var W=D(""),m=P()(W,2),G=m[0],$=m[1],X=new f,F=_(null),Y=new h({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});X.add(Y);var b=function(se){$("click")},V=function(se){$("mousedown")},re=function(se){$("mousemove")},ae=function(se){$("mouseup")},fe=function(se){$("mouseenter")},ce=function(se){$("contextmenu")};return Y.on("click",b),Y.on("mousedown",V),Y.on("mousemove",re),Y.on("mouseup",ae),Y.on("mouseenter",fe),Y.on("contextmenu",ce),k(function(){return X.buildContentDOM({container:F.current,backgroundColor:"#fff"}),function(){Y.off("click",b),Y.off("mousedown",V),Y.off("mousemove",re),Y.off("mouseup",ae),Y.off("mouseenter",fe),Y.off("contextmenu",ce)}},[]),d(F,function(){return X._resizeDOM()}),i.createElement(i.Fragment,null,G,i.createElement("div",{ref:F}))}});case 14:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-canvas-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},90564:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(52192),M={"docs-canvas-group-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i,k,_,D;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=y.sent,I=E.Group,c=E.Text,h=E.Circle,f=E.Rect,d=E.Stage,g=E.useResizeObserver,y.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return i=y.sent,k=i.default,_=i.useLayoutEffect,D=i.useRef,y.abrupt("return",{default:function(){var W=D(null),m=new d,G=new c({content:"title",x:110,y:260,index:999}),$=new c({content:"name: test",x:110,y:280,index:999}),X=new I({}),F=new I({draggable:!0}),Y=new h({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:1,border:0}),b=new f({fillStyle:"blue",x:150,y:100,width:100,height:100}),V=new f({fillStyle:"rgba(255, 255, 255, 1)",x:100,y:250,width:200,height:100,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,radius:4});return X.add(Y,b),F.add(V,G,$),m.add(X,F),_(function(){m.buildContentDOM({container:W.current,backgroundColor:"#fff"})},[]),g(W,function(){return m._resizeDOM()}),k.createElement(k.Fragment,null,k.createElement("div",{ref:W}))}});case 16:case"end":return y.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},81222:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(54197),M={"docs-canvas-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Custom,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=i(null),y=new c,A=new Path2D;A.moveTo(200,240),A.bezierCurveTo(200,200,120,150,120,200),A.bezierCurveTo(120,280,200,300,200,340),A.bezierCurveTo(200,300,280,280,280,200),A.bezierCurveTo(280,150,200,200,200,240);var W=new I({path2D:A,fillStyle:"pink",strokeStyle:"red"});return y.add(W),g(function(){y.buildContentDOM({container:T.current,backgroundColor:"#fff"})},[]),h(T,function(){return y._resizeDOM()}),d.createElement(d.Fragment,null,d.createElement("div",{ref:T}))}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},31930:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(10372),M={"docs-canvas-line-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Line,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=i(null),A=new I,W=new I({start:{x:90,y:90},points:[70,70],end:{x:190,y:90},strokeStyle:"red",lineWidth:3,smooth:!0}),m=new I({start:{x:100,y:100},points:[70,70,50,50],end:{x:300,y:150},strokeStyle:"blue",lineWidth:2,smooth:!0});return T.add(A,W,m),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-line-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Line, Stage, useResizeObserver } from 'heitu';
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

  _stage.add(_line, _line1, _line2);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},98841:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(89131),M={"docs-canvas-rect-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Rect,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=i(null),A=new I({fillStyle:"pink",x:250,y:100,width:100,height:100}),W=new I({shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:50,shadowOffsetX:10,shadowOffsetY:10,fillStyle:"blue",x:100,y:100,width:100,height:100,radius:5});return T.add(A,W),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},67023:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(18283),M={"docs-canvas-stage-demo-stagedemo":{component:R.memo(R.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},9095:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(70821),M={"docs-canvas-text-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=_.sent,I=E.Text,c=E.Stage,h=E.useResizeObserver,_.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=_.sent,d=f.default,g=f.useLayoutEffect,i=f.useRef,_.abrupt("return",{default:function(){var T=new c,y=i(null),A=new I({content:"xixinia",index:999,x:250,y:250});return T.add(A),g(function(){T.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),h(y,function(){return T._resizeDOM()}),d.createElement("div",{ref:y})}});case 13:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Text, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},44401:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var O=e(67294),u=e(26211),w={}},97086:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var O=e(67294),u=e(29876),w={}},64234:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(93139),E={"docs-hooks-use-async-fn-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=i.sent,h=c.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=i.sent,d=f.useAsyncFn,i.abrupt("return",{default:function(){var _=d(L()(u()().mark(function m(){var G;return u()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,new Promise(function(F){setTimeout(function(){F(200)},5e3)});case 2:return G=X.sent,X.abrupt("return",G);case 4:case"end":return X.stop()}},m)})),[]),D=P()(_,2),T=D[0],y=T.loading,A=T.value,W=D[1];return console.log(y,A),h.createElement("div",null,h.createElement("button",{onClick:function(){W()}},"get"),y&&"loading"," ",h.createElement("br",null),"data: ".concat(A||""))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},75326:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(72155),E={"docs-hooks-use-cancel-async-fn-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useRef,_.next=7,Promise.resolve().then(e.bind(e,76727));case 7:return d=_.sent,g=d.useCancelAsyncFn,i=d.useHtAxios,_.abrupt("return",{default:function(){var T=f(),y=i({config:{timeout:1e4},requestInterceptorsCallBack:function(Y){return Y},responseInterceptorsCallBack:function(Y){return Y.data}}),A=g(function(){var F=L()(u()().mark(function Y(b){var V;return u()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return V=b.cancelInterceptor,ae.abrupt("return",function(){var fe=L()(u()().mark(function ce(oe){var se;return u()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,y.get("http://jsonplaceholder.typicode.com/posts").catch(function(Me){console.log(Me)});case 2:return se=ve.sent,V(),ve.abrupt("return",se);case 5:case"end":return ve.stop()}},ce)}));return function(ce){return fe.apply(this,arguments)}}());case 2:case"end":return ae.stop()}},Y)}));return function(Y){return F.apply(this,arguments)}}(),[]),W=P()(A,2),m=W[0],G=m.value,$=m.loading,X=W[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){var F=L()(u()().mark(function b(){return u()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:X();case 1:case"end":return re.stop()}},b)}));function Y(){return F.apply(this,arguments)}return Y}()},"12312"))}});case 11:case"end":return _.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},31701:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(64577),E={"docs-hooks-use-cookie-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=i.sent,h=c.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=i.sent,d=f.useCookie,i.abrupt("return",{default:function(){var _={path:"/"},D="cookie-key",T=d(D,_,"default-value"),y=P()(T,3),A=y[0],W=y[1],m=y[2],G=function(){W("new-cookie-value")},$=function(){W(void 0)},X=function(){if("cookieStore"in window){var Y=window.cookieStore;Y.set({name:D,value:"changed"})}else document.cookie="".concat(D,"=changed; path=/")};return h.createElement("div",null,h.createElement("p",null,"Click on the button to update or clear the cookie"),h.createElement("p",{color:"blue"},"cookie: ",A||"no value"),h.createElement("button",{onClick:G},"Update the cookie"),h.createElement("button",{onClick:$},"Clear the cookie"),h.createElement("button",{onClick:X},"Changing the cookie through other methods"),h.createElement("button",{onClick:m},"Refresh the cookie"))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},67731:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(28587),E={"docs-hooks-use-count-down-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=i.sent,h=c.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=i.sent,d=f.useCountDown,i.abrupt("return",{default:function(){var _=d(),D=P()(_,3),T=D[0],y=D[1],A=D[2];return h.createElement("div",null,T,h.createElement("button",{onClick:function(){y(60)}},"\u5F00\u59CB"),h.createElement("button",{onClick:function(){A()}},"\u6682\u505C"),h.createElement("button",{onClick:function(){y()}},"\u7EE7\u7EED"))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},66609:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(59301),E={"docs-hooks-use-deep-compare-effect-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i,k;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=D.sent,h=c.default,f=c.useState,d=c.useEffect,g=c.useRef,D.next=9,Promise.resolve().then(e.bind(e,76727));case 9:return i=D.sent,k=i.useDeepCompareEffect,D.abrupt("return",{default:function(){var y=f(0),A=P()(y,2),W=A[0],m=A[1],G=g(0),$=g(0);return d(function(){G.current+=1},[{}]),k(function(){return $.current+=1,function(){}},[{}]),h.createElement("div",null,h.createElement("p",null,"effectCount: ",G.current),h.createElement("p",null,"deepCompareCount: ",$.current),h.createElement("p",null,h.createElement("button",{type:"button",onClick:function(){return m(function(F){return F+1})}},"reRender")))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},5958:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(48035),M={"docs-hooks-use-device-pixel-ratio-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=d.sent,I=E.default,d.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return c=d.sent,h=c.useDevicePixelRatio,d.abrupt("return",{default:function(){var i=h(),k=i.pixelRatio;return I.createElement("p",null,"Device pixel ratio: ",k)}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},65585:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(56139),M={"docs-hooks-use-element-size-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=i.sent,I=E.default,c=E.useRef,h=E.useEffect,i.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return f=i.sent,d=f.useElementSize,i.abrupt("return",{default:function(){var _=c(null),D=d(_);return h(function(){console.log(_.current.mount)},[]),I.createElement("div",null,I.createElement("textarea",{ref:_,disabled:!0,style:{width:200,height:200},value:"width: ".concat(D.width,`
height: `).concat(D.height)}))}});case 11:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},23897:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(38668),M={"docs-hooks-use-ht-axios-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c,h;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=d.sent,I=E.useHtAxios,d.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return c=d.sent,h=c.default,d.abrupt("return",{default:function(){var i=I({config:{timeout:3e3},requestInterceptorsCallBack:function(D){return D},responseInterceptorsCallBack:function(D){return D.data}}),k=function(){var _=P()(u()().mark(function D(){var T;return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:T=A.sent,console.log(T);case 4:case"end":return A.stop()}},D)}));return function(){return _.apply(this,arguments)}}();return h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},h.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){k()}},"123"))}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},97716:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(81233),E={"docs-hooks-use-image-load-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=i.sent,h=c.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=i.sent,d=f.useImageLoad,i.abrupt("return",{default:function(){var _=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],D=d({imgList:_}),T=P()(D,4),y=T[0],A=T[1],W=T[2],m=T[3];return h.createElement("div",{style:{display:"flex"}},m?"loading":h.createElement(h.Fragment,null,h.createElement("div",null,h.createElement("div",null,"img"),h.createElement("img",{src:y,style:{width:200}})),h.createElement("div",null,h.createElement("div",null,"ftimgList"),A==null?void 0:A.map(function(G,$){return h.createElement("img",{src:G,key:$,style:{width:200}})})),h.createElement("div",null,h.createElement("div",null,"allowImgList"),W==null?void 0:W.map(function(G,$){return h.createElement("img",{src:G,key:$,style:{width:200}})}))))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},79817:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(35412),E={"docs-hooks-use-in-view-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=i.sent,h=c.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=i.sent,d=f.useInView,i.abrupt("return",{default:function(){var _=d(),D=P()(_,2),T=D[0],y=D[1];return h.createElement("div",null,h.createElement("div",null,y?"active":"inactive"),h.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},h.createElement("div",{ref:T},"12312312")))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},59842:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(1019),E={"docs-hooks-use-infinite-scroll-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i,k;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return k=function(y){var A=y.hasMore,W=y.loadMore,m=i(),G=P()(m,2),$=G[0],X=G[1];return f(function(){X&&A&&(W==null||W())},[A,X,W]),h.createElement("div",{ref:$},A?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},D.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return c=D.sent,h=c.default,f=c.useEffect,D.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return d=D.sent,g=d.useInfiniteScroll,i=d.useInView,D.abrupt("return",{default:function(){var y=new Array(100).fill(1).map(function($,X){return X}),A=g({dataSource:y,pageSize:10,delay:100}),W=A.data,m=A.hasMore,G=A.loadMore;return h.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},W==null?void 0:W.map(function($){return h.createElement("span",null,$)}),h.createElement(k,{loadMore:G,hasMore:m}))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},96122:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(40801),E={"docs-hooks-use-local-storage-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=g.sent,h=c.useLocalStorage,f=function(){var k=h("my-key","foo"),_=P()(k,3),D=_[0],T=_[1],y=_[2];return M.createElement("div",null,M.createElement("div",null,"Value: ",D),M.createElement("button",{onClick:function(){return T("bar")}},"bar"),M.createElement("button",{onClick:function(){return T("baz")}},"baz"),M.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},13917:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var O=e(67294),u=e(44012),w={}},37868:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(74746),E={"docs-hooks-use-previous-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useState,_.next=7,Promise.resolve().then(e.bind(e,76727));case 7:return d=_.sent,g=d.usePrevious,i=function(T){var y=g(T);return console.log(y,T),h.createElement("div",null,h.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(y==null?void 0:y.aa)||0," "),h.createElement("div",null,"\u5F53\u524D\u7684aa: ",T==null?void 0:T.aa))},_.abrupt("return",{default:function(){var T=f(1),y=P()(T,2),A=y[0],W=y[1];return h.createElement("div",null,h.createElement("button",{onClick:function(){return W(A+1)}},"+1"),h.createElement(i,{aa:A}))}});case 11:case"end":return _.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},7411:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(81286),E={"docs-hooks-use-resize-observer-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f,d,g,i;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=_.sent,h=c.default,f=c.useRef,d=c.useState,_.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return g=_.sent,i=g.useResizeObserver,_.abrupt("return",{default:function(){var T=f(null),y=d({width:0,height:0}),A=P()(y,2),W=A[0],m=A[1];return i(T,function(G){var $=P()(G,1),X=$[0],F=X.contentRect,Y=F.width,b=F.height;m({width:Y,height:b})}),h.createElement("div",null,h.createElement("textarea",{ref:T,disabled:!0,style:{width:200,height:200},value:"width: ".concat(W.width,`
height: `).concat(W.height)}))}});case 11:case"end":return _.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},12830:function(B,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),w=e(27424),P=e.n(w),R=e(17156),L=e.n(R),M=e(67294),v=e(5480),E={"docs-hooks-use-session-storage-demo-0":{component:M.memo(M.lazy(L()(u()().mark(function I(){var c,h,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=g.sent,h=c.useSessionStorage,f=function(){var k=h("my-key","foo"),_=P()(k,3),D=_[0],T=_[1],y=_[2];return M.createElement("div",null,M.createElement("div",null,"Value: ",D),M.createElement("button",{onClick:function(){return T("bar")}},"bar"),M.createElement("button",{onClick:function(){return T("baz")}},"baz"),M.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var I=L()(u()().mark(function h(){var f,d=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,d));case 3:case"end":return i.stop()}},h)}));function c(){return I.apply(this,arguments)}return c}()}}}},9954:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var O=e(17061),u=e.n(O),w=e(17156),P=e.n(w),R=e(67294),L=e(51530),M={"docs-hooks-use-window-size-demo-0":{component:R.memo(R.lazy(P()(u()().mark(function v(){var E,I,c;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=f.sent,I=E.useWindowSize,c=function(){var g=I(),i=g.width,k=g.height;return R.createElement("div",null,R.createElement("p",null,"width: ",i,", height: ",k))},f.abrupt("return",{default:c});case 6:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var v=P()(u()().mark(function I(){var c,h=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,h));case 3:case"end":return d.stop()}},I)}));function E(){return v.apply(this,arguments)}return E}()}}}},11171:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var O=e(67294),u=e(68537),w={}},6202:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var O=e(67294),u=e(79930),w={}},76727:function(B,l,e){e.r(l),e.d(l,{Animate:function(){return A},Circle:function(){return We},Custom:function(){return Ue},Group:function(){return ke},Line:function(){return $e},Rect:function(){return Fe},Stage:function(){return vn},Text:function(){return Ge},useAsyncFn:function(){return Se},useCancelAsyncFn:function(){return lt},useCookie:function(){return En},useCountDown:function(){return gn},useDeepCompareEffect:function(){return Pn},useDevicePixelRatio:function(){return Dn},useElementSize:function(){return Ln},useHtAxios:function(){return Hn},useImageLoad:function(){return Vn},useInView:function(){return at},useInfiniteScroll:function(){return nt},useLocalStorage:function(){return fn},usePrevious:function(){return ot},useResizeObserver:function(){return Re},useSessionStorage:function(){return In},useWindowSize:function(){return st}});var O=e(42122),u=e.n(O),w=e(56690),P=e.n(w),R=e(89728),L=e.n(R),M=e(38416),v=e.n(M),E=e(861),I=e.n(E),c=window.devicePixelRatio,h=function(){},f=function(a){return a.name==="Stage"},d=function(a,t){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(t)).map(function(r){return[r.name,r]})).values())},g=function(a,t,r){return r!=null&&r.x&&r!==null&&r!==void 0&&r.width&&r.y&&r!==null&&r!==void 0&&r.height?a>(r==null?void 0:r.x)*c&&a<(((r==null?void 0:r.x)||0)+((r==null?void 0:r.width)||0))*c&&t>(r==null?void 0:r.y)*c&&t<r.y*c+r.height*c:!1},i=function(a){var t=a.mouseX,r=a.mouseY,n=a.path2D,s=a.ctx;return n&&s&&(s==null?void 0:s.isPointInPath(n,t,r))},k={linear:function(a){return a},quadraticIn:function(a){return a*a},quadraticOut:function(a){return a*(2-a)},quadraticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(a){var t=a;return t*t*t},cubicOut:function(a){var t=a;return--t*t*t+1},cubicInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(a){var t=a;return t*t*t*t},quarticOut:function(a){var t=a;return 1- --t*t*t*t},quarticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(a){return a*a*a*a*a},quinticOut:function(a){var t=a;return--t*t*t*t*t+1},quinticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(a){return 1-Math.cos(a*Math.PI/2)},sinusoidalOut:function(a){return Math.sin(a*Math.PI/2)},sinusoidalInOut:function(a){return .5*(1-Math.cos(Math.PI*a))},exponentialIn:function(a){return a===0?0:Math.pow(1024,a-1)},exponentialOut:function(a){return a===1?1:1-Math.pow(2,-10*a)},exponentialInOut:function(a){var t=a;return a===0?0:a===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(a){return 1-Math.sqrt(1-a*a)},circularOut:function(a){var t=a;return Math.sqrt(1- --t*t)},circularInOut:function(a){var t=a;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var s=a;return-(r*Math.pow(2,10*(s-=1))*Math.sin((s-t)*(2*Math.PI)/n))},elasticOut:function(a){var t,r=.1,n=.4;return a===0?0:a===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*a)*Math.sin((a-t)*(2*Math.PI)/n)+1)},elasticInOut:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var s=a;return(s*=2)<1?-.5*(r*Math.pow(2,10*(s-=1))*Math.sin((s-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(s-=1))*Math.sin((s-t)*(2*Math.PI)/n)*.5+1},backIn:function(a){var t=1.70158;return a*a*((t+1)*a-t)},backOut:function(a){var t=a,r=1.70158;return--t*t*((r+1)*t+r)+1},backInOut:function(a){var t=a,r=1.70158*1.525;return(t*=2)<1?.5*(t*t*((r+1)*t-r)):.5*((t-=2)*t*((r+1)*t+r)+2)},bounceIn:function(a){return 1-k.bounceOut(1-a)},bounceOut:function(a){var t=a;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(a){return a<.5?k.bounceIn(a*2)*.5:k.bounceOut(a*2-1)*.5+.5}};function _(p,a,t){var r=a-p,n=t*r,s=p+n,o=p<a?p:a,x=p>a?p:a;return s=Math.max(s,o),s=Math.min(s,x),s}var D=function(a,t,r){if(typeof a=="number"&&typeof t=="number")return _(a,t,r);if(Array.isArray(a)&&Array.isArray(t))return a.map(function(n,s){return _(n,t[s],r)})},T={duration:1e3,easing:"linear",iterationCount:1},y=function(){function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};P()(this,p),v()(this,"rafTimer",null),v()(this,"startTime",null),v()(this,"startProp",void 0),v()(this,"targetProp",void 0),v()(this,"cfg",void 0),v()(this,"forward",!0),v()(this,"queue",[]),this.startProp=a,this.targetProp=t,this.cfg=u()(u()({},T),r)}return L()(p,[{key:"start",value:function(){var t=this,r=this.cfg,n=r.duration,s=r.easing,o=r.during,x=r.iterationCount,C=Object.keys(this.targetProp),U=function K(N){t.startTime||(t.startTime=N);var Q=k[s](Math.min((N-t.startTime)/n,1));t.forward===!1&&(Q=1-Q);var j={};C.forEach(function(z){var J=D(t.startProp[z],t.targetProp[z],Q);j[z]=J}),o&&o(Q,j);var H=t.forward?Q<1:0<Q;H?t.rafTimer=requestAnimationFrame(K):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(z){z(j,Q)});var Z=t.forward?Q===1:Q===0;Z&&x===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(U)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),p}(),A=y,W=e(66115),m=e.n(W),G=e(61655),$=e.n(G),X=e(26389),F=e.n(X),Y=e(30954),b=e(67294),V,re=Object.prototype.toString;function ae(p){return typeof p=="function"}var fe=function(a){return typeof a!="undefined"};function ce(p){return typeof p=="undefined"}var oe=function(a){return typeof a=="boolean"},se=function(a){return typeof a=="number"};function Pe(p){return typeof p=="string"}function ve(p){return re.call(p)==="[object Object]"}var Me=null,_e=typeof window!="undefined",ct=typeof navigator!="undefined";function De(){}var vt=_e&&((V=window)===null||V===void 0||(V=V.navigator)===null||V===void 0?void 0:V.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),ht=!b.useId,Be=e(79697),we=function(){function p(){P()(this,p),v()(this,"eventListeners",{})}return L()(p,[{key:"on",value:function(t,r){var n=t.split(" "),s=n.length,o,x,C,U;for(o=0;o<s;o++)x=n[o],C=x.split("."),U=C[0],this.eventListeners[U]||(this.eventListeners[U]=[]),console.log(this.eventListeners[U]),this.eventListeners[U].push({name:(r==null?void 0:r.name)||"",handler:r});return this}},{key:"_off",value:function(t,r,n){var s=this.eventListeners[t],o,x,C;for(o=0;o<s.length;o++)if(x=s[o].name,C=s[o].handler,(!r||x===r)&&(!n||n===C)){if(s.splice(o,1),s.length===0){delete this.eventListeners[t];break}o--}}},{key:"off",value:function(t,r){var n=(t||"").split(" "),s=n.length,o,x,C,U,K,N;for(o=0;o<s;o++)if(C=n[o],U=C.split("."),K=U[0],N=U[1],K)this.eventListeners[K]&&this._off(K,N,r);else for(x in this.eventListeners)this._off(x,N,r);return this}},{key:"_fire",value:function(t,r,n){if(f(n))this.eventListeners[t].forEach(function(x){x.handler(r)});else{var s;if((n==null||(s=n.eventListeners)===null||s===void 0||(s=s[t])===null||s===void 0?void 0:s.length)>0&&n.eventListeners[t].forEach(function(x){x.handler(r,n)}),n!=null&&n.draggable){var o;ae(n==null?void 0:n.draggable)&&n.dragging&&(n==null||n.draggable(r,n)),(o=n.eventListeners)===null||o===void 0||(o=o[t])===null||o===void 0||o.forEach(function(x){x.handler(r,n)})}}}},{key:"fire",value:function(t,r){var n=r.evt,s=r.target,o=r.currentTarget;if(f(o)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,o);for(var x=s==null?void 0:s.children,C=0;C<x.length;C++){var U,K,N=I()(x.filter(function(S){return S.draggable}));if(t==="mousedown"){var Q=N.filter(function(S){var ue;return S==null?void 0:S.inScope(n,(ue=s.canvas)===null||ue===void 0?void 0:ue.context)}),j=Q.sort(function(S,ue){return ue.index-S.index})[0];j&&(j.name==="Group"?(j.dragging=!0,j.children.forEach(function(S){S.offsetX=S!=null&&S.x?n.offsetX-(S==null?void 0:S.x):n.offsetX,S.offsetY=S!=null&&S.y?n.offsetY-(S==null?void 0:S.y):n.offsetY})):(j.dragging=!0,j.offsetX=j!=null&&j.x?n.offsetX-(j==null?void 0:j.x):n.offsetX,j.offsetY=j!=null&&j.y?n.offsetY-(j==null?void 0:j.y):n.offsetY))}(!(0,Be.Z)((U=x[C])===null||U===void 0?void 0:U.eventListeners)||(K=x[C])!==null&&K!==void 0&&K.draggable)&&this.fire(t,{evt:n,target:s,currentTarget:x[C]})}}else{var H;if(o!=null&&o.draggable&&t==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&t==="mousemove"){var Z,z=(Z=this.canvas)===null||Z===void 0||(Z=Z.canvas)===null||Z===void 0?void 0:Z.getBoundingClientRect();if(o.name==="Text"){var J=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,le=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?J-(o==null?void 0:o.offsetX):J,o.y=o!=null&&o.offsetY?le-(o==null?void 0:o.offsetY):le}else if(o.name==="Group"){var Ie=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,ie=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.children.forEach(function(S){if(S.name==="Text"){var ue=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,ge=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;S.x=S!=null&&S.offsetX?ue-(S==null?void 0:S.offsetX):ue,S.y=S!=null&&S.offsetY?ge-(S==null?void 0:S.offsetY):ge}else S.x=S!=null&&S.offsetX?Ie-(S==null?void 0:S.offsetX):Ie,S.y=S!=null&&S.offsetY?ie-(S==null?void 0:S.offsetY):ie})}else{var de=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,pe=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?de-(o==null?void 0:o.offsetX):de,o.y=o!=null&&o.offsetY?pe-(o==null?void 0:o.offsetY):pe}this.batchDraw(this)}if(o!=null&&o.inScope&&(H=s.canvas)!==null&&H!==void 0&&H.context){var ee;if(o!=null&&o.inScope(n,(ee=s.canvas)===null||ee===void 0?void 0:ee.context)){var ne;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,o),t==="mousemove"&&!o.mouseInScope&&((ne=o.eventListeners.mouseenter)===null||ne===void 0?void 0:ne.length)>0&&(o.mouseInScope=!0,s._fire("mouseenter",n,o))}else if(t==="mousemove"){var te;o.mouseInScope=!1,((te=s.eventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&s._fire("mouseleave",n,o)}}}}},{key:"attr",value:function(t){var r=this,n;this.parent&&((0,Y.Z)(t,function(s,o){s&&(r[o]=s)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),p}(),me=we,be=function(p){$()(t,p);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(m()(n),"name","Circle"),v()(m()(n),"parent",null),v()(m()(n),"x",void 0),v()(m()(n),"y",void 0),v()(m()(n),"radius",void 0),v()(m()(n),"lineWidth",void 0),v()(m()(n),"fillStyle",void 0),v()(m()(n),"strokeStyle",void 0),v()(m()(n),"arc",void 0),v()(m()(n),"startAngle",void 0),v()(m()(n),"endAngle",void 0),v()(m()(n),"innerRadius",void 0),v()(m()(n),"index",void 0),v()(m()(n),"path2D",void 0),v()(m()(n),"border",void 0),v()(m()(n),"shadowColor",void 0),v()(m()(n),"shadowBlur",0),v()(m()(n),"shadowOffsetY",0),v()(m()(n),"shadowOffsetX",0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,s,o,x){var C=this.deg2rad(x),U=n+o*Math.cos(C),K=s+o*Math.sin(C);return{x:U,y:K}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,s="M ".concat(this.x," ").concat(n),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),x=this.y-this.innerRadius,C="M ".concat(this.x," ").concat(x),U="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(x);return"".concat(s," ").concat(o," ").concat(C," ").concat(U," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),s=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,x="M ".concat(n.x," ").concat(n.y),C="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(s.x," ").concat(s.y),U=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),K=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),N="L".concat(K.x," ").concat(K.y),Q="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(U.x," ").concat(U.y);return"".concat(x," ").concat(C," ").concat(N," ").concat(Q," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var s=this.startAngle===0&&this.endAngle===360,o;switch(this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this.border){case 0:return o=new Path2D(this.calcRingD(s)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(s)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(s)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(n,s){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),t}(me),We=be,Ke=function(p){$()(t,p);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),v()(m()(n),"name","Custom"),v()(m()(n),"x",void 0),v()(m()(n),"y",void 0),v()(m()(n),"width",void 0),v()(m()(n),"height",void 0),v()(m()(n),"fillStyle",void 0),v()(m()(n),"strokeStyle",void 0),v()(m()(n),"lineWidth",void 0),v()(m()(n),"index",void 0),v()(m()(n),"path2D",void 0),v()(m()(n),"parent",null),v()(m()(n),"shadowColor",void 0),v()(m()(n),"shadowBlur",0),v()(m()(n),"shadowOffsetY",0),v()(m()(n),"shadowOffsetX",0),!r.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,n.shadowColor="transparent",(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n,s){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),t}(me),Ue=Ke,ze=function(p){$()(t,p);var a=F()(t);function t(){var r;P()(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=a.call.apply(a,[this].concat(s)),v()(m()(r),"children",[]),r}return L()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var s=this.children||[],o=[];return s.forEach(function(x){n(x)&&o.push(x)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var s=arguments.length<=0?void 0:arguments[0];return s.index=s.index?s.index:this.getChildren().length,s.parent=this,this.getChildren().push(s),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(s){var o=n.some(function(x){return x===s});o||n.push(s)}),this.children=n,n}},{key:"batchDraw",value:function(n){var s,o,x,C,U;!((s=n.canvas)!==null&&s!==void 0&&s.context)||!((o=n.canvas)!==null&&o!==void 0&&o.canvas)||((x=n.canvas)===null||x===void 0||x.context.clearRect(0,0,(C=n.canvas)===null||C===void 0?void 0:C.canvas.offsetWidth,(U=n.canvas)===null||U===void 0?void 0:U.canvas.offsetHeight),this.sortChildren(function(K,N){return K.index-N.index}),this.deduplication(),this.getChildren().forEach(function(K){var N;if((N=n.canvas)!==null&&N!==void 0&&N.context&&K!==null&&K!==void 0&&K.draw){var Q;K==null||K.draw((Q=n.canvas)===null||Q===void 0?void 0:Q.context)}}))}}]),t}(me),Ae=ze,je=function(p){$()(t,p);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(m()(n),"parent",void 0),v()(m()(n),"name","Group"),v()(m()(n),"draggable",!1),n.parent=null,(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"draw",value:function(n){if(n)return this.sortChildren(function(s,o){return s.index-o.index}),this.deduplication(),this.getChildren().forEach(function(s){n&&s!==null&&s!==void 0&&s.draw&&(s==null||s.draw(n))}),this}},{key:"inScope",value:function(n,s){return this.getChildren().some(function(o){return o!=null&&o.inScope?o==null?void 0:o.inScope(n,s):!1})}}]),t}(Ae),ke=je,Ne=e(27424),q=e.n(Ne),Qe=function(p){$()(t,p);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(m()(n),"name","Line"),v()(m()(n),"start",void 0),v()(m()(n),"end",void 0),v()(m()(n),"points",void 0),v()(m()(n),"smooth",void 0),v()(m()(n),"strokeStyle",void 0),v()(m()(n),"lineWidth",void 0),v()(m()(n),"lineCap",void 0),v()(m()(n),"lineJoin",void 0),v()(m()(n),"index",void 0),v()(m()(n),"path2D",void 0),v()(m()(n),"parent",null),v()(m()(n),"shadowColor",void 0),v()(m()(n),"shadowBlur",0),v()(m()(n),"shadowOffsetY",0),v()(m()(n),"shadowOffsetX",0),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,n.shadowColor="transparent",(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(s,o,x){var C=Math.floor(x/2);return x%2===0?s.push([o]):s[C].push(o),s},[]).map(function(s){var o=q()(s,2),x=o[0],C=o[1];return{x,y:C}})}},{key:"calcSmoothPath2D",value:function(){var n,s,o,x=new Path2D;return x.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0),x.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&x.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&x.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=x,x}},{key:"calcStraightPath2D",value:function(){var n,s,o,x,C=new Path2D;C.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0);var U=this.convertToNormalPoints([].concat(I()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(x=this.end)===null||x===void 0?void 0:x.y]));return U.forEach(function(K){var N=K.x,Q=K.y;C.lineTo(N,Q)}),C}},{key:"draw",value:function(n){var s=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",n.stroke(s),this}},{key:"inScope",value:function(n,s){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),t}(me),$e=Qe,Ye=function(p){$()(t,p);var a=F()(t);function t(r){var n;return P()(this,t),n=a.call(this),v()(m()(n),"name","Rect"),v()(m()(n),"x",void 0),v()(m()(n),"y",void 0),v()(m()(n),"width",void 0),v()(m()(n),"height",void 0),v()(m()(n),"fillStyle",void 0),v()(m()(n),"strokeStyle",void 0),v()(m()(n),"lineWidth",void 0),v()(m()(n),"index",void 0),v()(m()(n),"path2D",void 0),v()(m()(n),"parent",null),v()(m()(n),"shadowColor",void 0),v()(m()(n),"shadowBlur",0),v()(m()(n),"shadowOffsetY",0),v()(m()(n),"shadowOffsetX",0),v()(m()(n),"radius",0),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.shadowColor="transparent",n.index=0,n.radius=0,(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"draw",value:function(n){var s=new Path2D;this.radius?(s.moveTo(this.x+this.radius,this.y),s.lineTo(this.x+this.width-this.radius,this.y),s.arcTo(this.x+this.width,this.y,this.x+this.width,this.y+this.radius,this.radius),s.lineTo(this.x+this.width,this.y+this.height-this.radius),s.arcTo(this.x+this.width,this.y+this.height,this.x+this.width-this.radius,this.y+this.height,this.radius),s.lineTo(this.x+this.radius,this.y+this.height),s.arcTo(this.x,this.y+this.height,this.x,this.y+this.height-this.radius,this.radius),s.lineTo(this.x,this.y+this.radius),s.arcTo(this.x,this.y,this.x+this.radius,this.y,this.radius)):(s.moveTo(this.x,this.y),s.lineTo(this.x+this.width,this.y),s.lineTo(this.x+this.width,this.y+this.height),s.lineTo(this.x,this.y+this.height)),this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",s.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(s),this.fillStyle&&n.fill(s),this.path2D=s}},{key:"inScope",value:function(n,s){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),t}(me),Fe=Ye,Xe=function(p){$()(t,p);var a=F()(t);function t(r){var n;if(P()(this,t),n=a.call(this),v()(m()(n),"name","Text"),v()(m()(n),"parent",null),v()(m()(n),"x",void 0),v()(m()(n),"y",void 0),v()(m()(n),"content",void 0),v()(m()(n),"fillStyle",void 0),v()(m()(n),"fontFamily",void 0),v()(m()(n),"fontSize",void 0),v()(m()(n),"textAlign",void 0),v()(m()(n),"textBaseline",void 0),v()(m()(n),"width",void 0),v()(m()(n),"height",void 0),v()(m()(n),"index",0),v()(m()(n),"shadowColor",void 0),v()(m()(n),"shadowBlur",0),v()(m()(n),"shadowOffsetY",0),v()(m()(n),"shadowOffsetX",0),n.content="",!r.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,n.shadowColor="transparent",(0,Y.Z)(r,function(s,o){s&&(m()(n)[o]=s)}),n}return L()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var s=n.measureText(this.content);return this.width=s.width,this.height=this.fontSize,this.shadowColor?(n.shadowColor=this.shadowColor,n.shadowBlur=this.shadowBlur,n.shadowOffsetX=this.shadowOffsetX,n.shadowOffsetY=this.shadowOffsetY):n.shadowColor="transparent",this}},{key:"inScope",value:function(n){var s=n.offsetX*c,o=n.offsetY*c;return g(s,o,this)}}]),t}(me),Ge=Xe,Ee=null,He=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(p){setTimeout(p,60)},Je=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(t){}return a},ft=function(a){Ee.push(a),Ee.length===1&&He(function(){var t=Ee;Ee=[],t.forEach(function(r){r()})})},Ze=function(){function p(){P()(this,p),v()(this,"canvas",void 0),v()(this,"context",void 0),v()(this,"width",0),v()(this,"height",0),this.canvas=Je(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return L()(p,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*c,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*c,this.canvas.style.height=t+"px",this.context.scale(c,c)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,r){this.setWidth(t||0),this.setHeight(r||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,r,n){return n&&this.setBackgroundColor(n),this.canvas}}]),p}(),Ve="mouseenter",qe="mouseleave",en="mouseout",nn="mouseover",tn="mousedown",an="mousemove",rn="mouseup",on="contextmenu",un="click",sn="dblclick",dn="wheel",ln=[[Ve,"_mouseenter"],[tn,"_mousedown"],[an,"_mousemove"],[qe,"_mouseleave"],[rn,"_mouseup"],[en,"_mouseout"],[nn,"_mouseover"],[on,"_contextmenu"],[dn,"_wheel"],[un,"_click"],[sn,"_dblclick"]],cn=function(p){$()(t,p);var a=F()(t);function t(){var r;return P()(this,t),r=a.call(this),v()(m()(r),"name","Stage"),v()(m()(r),"parent",null),v()(m()(r),"content",void 0),v()(m()(r),"canvas",void 0),v()(m()(r),"width",void 0),v()(m()(r),"height",void 0),v()(m()(r),"draggable",void 0),v()(m()(r),"isFirstRender",void 0),v()(m()(r),"_pointerPositions",[]),v()(m()(r),"_changedPointerPositions",[]),v()(m()(r),"pointerPos",null),r.content=null,r.canvas=null,r.width=100,r.height=500,r.isFirstRender=!0,r.draggable=!1,r}return L()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var s=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),o=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=s,this.content.style.height=o,this.canvas=new Ze,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,s,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,s,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var s=this.content.getBoundingClientRect(),o={top:s.top,left:s.left,scaleX:s.width/this.content.clientWidth||1,scaleY:s.height/this.content.clientHeight||1},x=null,C=null;x=(n.clientX-o.left)/o.scaleX,C=(n.clientY-o.top)/o.scaleY,this.pointerPos={x,y:C}}},{key:"_bindContentEvents",value:function(){var n,s=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&ln.forEach(function(o){var x,C=q()(o,2),U=C[0],K=C[1];(x=s.content)===null||x===void 0||x.addEventListener(U,function(N){s[K](N)},{passive:!1})})}},{key:"_mouseenter",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(Ae),vn=cn,hn=function(a,t,r){if(!_e)return[t,De,De];if(!a)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(Q){return Q}:r.deserializer:JSON.parse,s=(0,b.useRef)(function(Q){try{var j=r?r.raw?String:r.serializer:JSON.stringify,H=localStorage.getItem(Q);return H!==null?n(H):(t&&localStorage.setItem(Q,j(t)),t)}catch(Z){return t}}),o=(0,b.useState)(function(){return s.current(a)}),x=q()(o,2),C=x[0],U=x[1];(0,b.useLayoutEffect)(function(){return U(s.current(a))},[a]);var K=(0,b.useCallback)(function(Q){try{var j=typeof Q=="function"?Q(C):Q;if(typeof j=="undefined")return;var H;r?r.raw?typeof j=="string"?H=j:H=JSON.stringify(j):r.serializer?H=r.serializer(j):H=JSON.stringify(j):H=JSON.stringify(j),localStorage.setItem(a,H),U(n(H))}catch(Z){}},[a,U]),N=(0,b.useCallback)(function(){try{localStorage.removeItem(a),U(void 0)}catch(Q){}},[a,U]);return[C,K,N]},fn=hn,mn=function(a,t,r){if(!_e)return[t,function(){}];var n=(0,b.useState)(function(){try{var C=sessionStorage.getItem(a);return typeof C!="string"?(sessionStorage.setItem(a,r?String(t):JSON.stringify(t)),t):r?C:JSON.parse(C||"null")}catch(U){return t}}),s=q()(n,2),o=s[0],x=s[1];return(0,b.useEffect)(function(){try{var C=r?String(o):JSON.stringify(o);sessionStorage.setItem(a,C)}catch(U){}}),[o,x]},In=mn,ye={};function mt(p){console.error(p)}var he=e(31955);function pn(p,a){return a!==void 0?a:_e?he.Z.get(p):""}var _n=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,r=arguments.length>2?arguments[2]:void 0,n=(0,b.useState)(pn(a,r)),s=q()(n,2),o=s[0],x=s[1];(0,b.useEffect)(function(){var K=function(){var Q=he.Z.get(a);return Q!=null?Q:(r===void 0?he.Z.remove(a):he.Z.set(a,r,t),r)};x(K())},[r,a,JSON.stringify(t)]);var C=(0,b.useCallback)(function(K){var N=ae(K)?K(o):K;N===void 0?he.Z.remove(a):he.Z.set(a,N,t),x(N)},[a,o,JSON.stringify(t)]),U=(0,b.useCallback)(function(){var K=he.Z.get(a);Pe(K)&&x(K)},[a]);return[o,C,U]},En=_n,xn=function(){var a=(0,b.useState)(0),t=q()(a,2),r=t[0],n=t[1],s,o=function(){clearTimeout(s)},x=function(U){o(),n(U||function(K){return K-1})};return(0,b.useEffect)(function(){return s=setTimeout(function(){r>0?n(function(C){return C-1}):o()},1e3),function(){return o()}},[r]),[r,x,o]},gn=xn,yn=e(72249),On=function(a,t,r){var n=(0,b.useRef)(void 0);(!n.current||!r(t,n.current))&&(n.current=t),(0,b.useEffect)(a,n.current)},Cn=function(a,t){On(a,t,yn.Z)},Pn=Cn,Mn=function(){var a=(0,b.useState)(1),t=q()(a,2),r=t[0],n=t[1],s=(0,b.useCallback)(function(){if(window){n(window.devicePixelRatio);var o=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),x=function(){s()};return o.addEventListener("change",x,{once:!0}),function(){o.removeEventListener("change",x)}}},[]);return(0,b.useEffect)(function(){var o=s();return o},[s]),{pixelRatio:r}},Dn=Mn,An=function(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye;(0,b.useEffect)(function(){var n=new ResizeObserver(t);return a!=null&&a.current&&n.observe(a.current,r),function(){a!=null&&a.current&&n.unobserve(a.current),n.disconnect()}},[])},Re=An,Rn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,r=(0,b.useState)({width:0,height:0}),n=q()(r,2),s=n[0],o=n[1];return Re(a,function(x){if(x.length!==0){var C=q()(x,1),U=C[0],K=U.contentRect,N=K.width,Q=K.height;o({width:N,height:Q})}},t),s},Ln=Rn,Le=e(54683),Tn=e(33293),Sn="application/json;charset=utf-8",It="application/x-www-form-urlencoded",pt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":Sn,Accept:"application/json;version=3.0;compress=false;"},Bn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},wn=e(54998),bn=e.n(wn),Wn=e(49360),Kn=e(58146),Un=e(73505),zn=e(27771),jn=e(77226),kn=e(36378),Oe=function p(a){if((0,Wn.Z)(a)||(0,Kn.Z)(a)||(0,Un.Z)(a))return a;if((0,zn.Z)(a))return a.map(function(r){return p(r)});if((0,jn.Z)(a)){var t=Object.create(null);return Object.keys(a).forEach(function(r){t[r]=p(a[r])}),t}else return(0,kn.Z)(a)?a.trim():a};function _t(){return typeof window=="undefined"?!1:window&&window.__debug__}function Et(p){var a=atob(p);return Uint8Array.from(a,function(t){return t.codePointAt(0)})}function xt(p){var a=Array.from(p,function(t){return String.fromCodePoint(t)}).join("");return btoa(a)}var Nn=Le.Z.CancelToken.source(),Qn=function(a){a.cancelToken=Nn.token;var t=bn()(a.url);if(a.url=t.query(Oe(t.query(!0))||{}).toString(),a.data&&(a.data=Oe(a.data)),a.params=Oe(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var r=a.data,n=r===void 0?{}:r;for(var s in n)if(n.hasOwnProperty(s)){var o=n[s];o==null&&delete n[s]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},$n=function(a,t){t&&a.interceptors.request.use(function(r){return t(r)},function(r){return Promise.reject(r)}),a.interceptors.request.use(function(r){return Qn(r)},function(r){return Promise.reject(r)})},Yn=function(a){var t,r=a.data;try{if(r instanceof Blob){var n=a.headers["content-disposition"],s=n.split("filename=")[1];return{success:!0,data:{file:r,fileName:s}}}}catch(o){console.error(o)}return((t=a.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,r},Fn=function(a){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var r=a.response.data.errors,n=r===void 0?[]:r,s=n&&n[0]||{};return Promise.reject({message:s.message||a.message||t,arguments:s.arguments||void 0,code:s.code||null})}return Promise.reject({message:a.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},Xn=function(a,t,r){t&&a.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&a.interceptors.response.use(function(n){return n},r),a.interceptors.response.use(Yn,Fn)},Gn=function(a){var t=a.config,r=t===void 0?{}:t,n=a.requestInterceptorsCallback,s=a.responseInterceptorOnSuccessCallback,o=a.responseInterceptorOnErrorCallback,x=(0,Tn.Z)(Bn(),r),C=Le.Z.create(x);$n(C,n),Xn(C,s,o);function U(j,H,Z){return C.request(u()({url:j,params:H},Z))}function K(j,H,Z){return C.request(u()({url:j,method:"post",params:H},Z))}function N(j,H,Z){return C.request(u()({url:j,method:"put",params:H},Z))}function Q(j,H,Z){return C.request(u()({url:j,method:"delete",params:H},Z))}return{get:U,post:K,del:Q,put:N}},Hn=Gn,Jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Zn=function(a){var t=a.imgList,r=(0,b.useState)(!1),n=q()(r,2),s=n[0],o=n[1],x=(0,b.useState)(""),C=q()(x,2),U=C[0],K=C[1],N=(0,b.useState)([]),Q=q()(N,2),j=Q[0],H=Q[1],Z=(0,b.useState)([]),z=q()(Z,2),J=z[0],le=z[1],Ie=function ie(de,pe,ee){var ne=new Image,te=pe+1;ne.src=de,ne.onload=function(){H(function(S){return[].concat(I()(S),[de])}),le(function(S){return[].concat(I()(S),[de])}),ee||K(de),pe<t.length-1?ie(t[te],te,!0):o(!1)},ne.onerror=function(){H(function(S){return[].concat(I()(S),[Jn])}),te<t.length-1?ie(t[te],te):o(!1)}};return(0,b.useEffect)(function(){(t==null?void 0:t.length)>1&&(o(!0),Ie(t==null?void 0:t[0],0))},[]),console.log([U,j,J,s]),j.length!==t.length?["",[],[],!0]:[U,j,J,s]},Vn=Zn,qn=e(17061),xe=e.n(qn),et=e(17156),Te=e.n(et);function nt(p){var a=p.dataSource,t=p.delay,r=t===void 0?100:t,n=p.pageSize,s=n===void 0?10:n,o=p.fetchData,x=(0,b.useState)(!1),C=q()(x,2),U=C[0],K=C[1],N=(0,b.useState)(!0),Q=q()(N,2),j=Q[0],H=Q[1],Z=(0,b.useState)([]),z=q()(Z,2),J=z[0],le=z[1];function Ie(){return ie.apply(this,arguments)}function ie(){return ie=Te()(xe()().mark(function de(){return xe()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(!(!(a!=null&&a.length)&&!o)){ee.next=2;break}return ee.abrupt("return");case 2:if(!(!j||U)){ee.next=4;break}return ee.abrupt("return");case 4:if(K(!0),!a){ee.next=10;break}return ee.next=8,new Promise(function(ne){setTimeout(function(){ne(a==null?void 0:a.slice(J.length,J.length+s))},r)}).then(function(ne){H((J==null?void 0:J.length)+(ne==null?void 0:ne.length)<(a==null?void 0:a.length)),le(function(te){return te==null?void 0:te.concat(ne)})});case 8:ee.next=12;break;case 10:return ee.next=12,o==null?void 0:o({pageNum:J!=null&&J.length?Math.ceil((J==null?void 0:J.length)/s)+1:1,pageSize:s}).then(function(ne){var te=ne.list,S=te===void 0?[]:te,ue=ne.total,ge=ue===void 0?0:ue;H((J==null?void 0:J.length)+(S==null?void 0:S.length)<ge&&(S==null?void 0:S.length)>0),le(function(Ce){return Ce==null?void 0:Ce.concat(S)})});case 12:K(!1);case 13:case"end":return ee.stop()}},de)})),ie.apply(this,arguments)}return{data:J,setData:le,loading:U,hasMore:j,loadMore:Ie}}var tt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(0,b.useState)(!1),n=q()(r,2),s=n[0],o=n[1],x=(0,b.useRef)(null);return(0,b.useEffect)(function(){var C=new IntersectionObserver(function(U){U.forEach(function(K){K.isIntersecting?(o(!0),t&&C.unobserve(K.target)):o(!1)})},a);return x!=null&&x.current&&C.observe(x.current),function(){x!=null&&x.current&&C.unobserve(x.current)}},[a,t]),[x,s]},at=tt,rt=function(a){var t=(0,b.useRef)({});return(0,b.useLayoutEffect)(function(){t.current=a}),(0,b.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},ot=rt,ut=function(){var a=(0,b.useState)({width:window.innerWidth,height:window.innerHeight}),t=q()(a,2),r=t[0],n=t[1],s=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,b.useLayoutEffect)(function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[]),{width:r.width,height:r.height}},st=ut;function it(){var p=(0,b.useRef)(!1),a=(0,b.useCallback)(function(){return p.current},[]);return(0,b.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),a}function Se(p){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},r=(0,b.useRef)(0),n=it(),s=(0,b.useState)(t),o=q()(s,2),x=o[0],C=o[1],U=(0,b.useCallback)(function(){var K=++r.current;return x.loading||C(function(N){return u()(u()({},N),{},{loading:!0})}),p.apply(void 0,arguments).then(function(N){return n()&&K===r.current&&C({value:N,loading:!1}),N},function(N){return n()&&K===r.current&&C({error:N,loading:!1}),N})},a);return[x,U]}var dt=function(a,t){var r=(0,b.useRef)(),n=function(){if(r.current)throw r.current.abort(),new Error(" Canceled .")};b.useEffect(function(){return function(){r.current&&r.current.abort()}},[]);var s=Se(Te()(xe()().mark(function o(){var x,C,U,K,N=arguments;return xe()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return r.current&&r.current.abort(),r.current=new AbortController,x=r.current.signal,C={cancelInterceptor:n},j.next=6,a(C);case 6:return U=j.sent,j.next=9,U.apply(void 0,N);case 9:return K=j.sent,j.abrupt("return",K);case 11:case"end":return j.stop()}},o)})),t);return s},lt=dt},69111:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(55832);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u6DFB\u52A0\u52A8\u753B",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"on",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"off",paraId:1,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},58025:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(66397);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},81253:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(23629);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"path2D",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u56FE\u5F62\u7684 Path2D",paraId:1,tocIndex:3},{value:"Path2D",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},4053:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(49011);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u62D6\u62FD\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u7ED9\u5143\u7D20\u6DFB\u52A0 draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8FD9\u662F boolean \u503C\u6216\u8005 \u51FD\u6570\u63A5\u6536 \u9F20\u6807\u4E8B\u4EF6\u53C2\u6570",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},76631:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(50138);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 on \u65B9\u6CD5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F7F\u7528 off \u65B9\u6CD5\u89E3\u7ED1\u4E8B\u4EF6\u3002",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},96627:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(52192);const u=[{value:"\u5C06\u591A\u4E2A\u56FE\u5F62\u7F16\u7EC4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},48977:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(54197);const u=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},13155:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(10372);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u76F4\u7EBF\u3001\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3001\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"start",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"end",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"points",paraId:1,tocIndex:3},{value:"\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"array",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3},{value:"smooth",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5E73\u6ED1",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"lineCap",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u7AEF\u70B9\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"butt",paraId:1,tocIndex:3},{value:"lineJoin",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u8FDE\u63A5\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"miter",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},12477:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(89131);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u77E9\u5F62",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"height",paraId:1,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u5706\u89D2",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},25924:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(18283);const u=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"container",paraId:0,tocIndex:3},{value:"\u5BB9\u5668 dom",paraId:0,tocIndex:3},{value:"HTMLElement",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"width",paraId:0,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"height",paraId:0,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"backgroundColor",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u8272",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"#fff",paraId:0,tocIndex:3}]},27837:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(70821);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u6587\u5B57",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"content",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u5BB9",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"fontSize",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"16",paraId:1,tocIndex:3},{value:"textAlign",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u5BF9\u9F50",paraId:1,tocIndex:3},{value:"CanvasTextAlign",paraId:1,tocIndex:3},{value:"textBaseline",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u57FA\u51C6\u7EBF",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"CanvasTextBaseline",paraId:1,tocIndex:3},{value:"direction",paraId:1,tocIndex:3},{value:"\u6587\u672C\u65B9\u5411",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"fontStyle",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#333",paraId:1,tocIndex:3},{value:"fontVariant",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u53D8\u4F53",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"textDecoration",paraId:1,tocIndex:3},{value:"\u6587\u672C\u4FEE\u9970",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"align",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"verticalAlign",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"padding",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u8FB9\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"lineHeight",paraId:1,tocIndex:3},{value:"\u884C\u9AD8",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"letterSpacing",paraId:1,tocIndex:3},{value:"\u5B57\u7B26\u95F4\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowColor",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowBlur",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6A21\u7CCA\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetX",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u6C34\u5E73\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"shadowOffsetY",paraId:1,tocIndex:3},{value:"\u9634\u5F71\u5782\u76F4\u504F\u79FB",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},9978:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(26211);const u=[{value:"\u4E3A\u5565\u53EB ",paraId:0,tocIndex:0},{value:"heitu",paraId:0,tocIndex:0},{value:`
\u672C\u4EBA\u73A9 LOL \u7684\u7B2C\u4E00\u4E2A\u82F1\u96C4\u662F `,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:`,\u83B7\u5F97\u7684\u7B2C\u4E00\u4E2A\u76AE\u80A4\u662F\u9ED1\u8272\u7684\u90A3\u6B3E\uFF0C\u6240\u4EE5\u8D77\u540D\u5C31\u53EB\u4E86\u9ED1\u5154
\u559C\u6B22`,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:" \u7684\u5927\u62DB\u7ED9\u4E00\u4E2A\u5BF9\u65B9\u89D2\u8272\uFF0C\u522B\u7684\u89D2\u8272\u4E0D\u4F1A\u5BF9\u5979\u9020\u6210\u4F24\u5BB3\uFF0C\u5E0C\u671B\u6211\u7684\u5E93\u4E5F\u80FD\u50CF\u5979\u7684\u5927\u62DB\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"heitu",paraId:1,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:1,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:2,tocIndex:1}]},69236:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(29876);const u=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(93139);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(72155);const u=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(64577);const u=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(28587);const u=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(59301);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(48035);const u=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(56139);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(38668);const u=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81233);const u=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(35412);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(1019);const u=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(40801);const u=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(44012);const u=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(74746);const u=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81286);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(5480);const u=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(51530);const u=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(68537);const u=[]},87724:function(B,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(79930);const u=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:1,tocIndex:2},{value:`\u53EF\u4EE5\u9009\u62E9 \u6E32\u67D3\u6A21\u677F \u548C hook\u6A21\u677F
`,paraId:2,tocIndex:2},{value:`\u6E32\u67D3\u6A21\u677F \u5305\u542Bindex.tsx /style /interface.ts \u6E32\u67D3\u5C42\u6A21\u677F
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(B,l){l.Z=`import { Stage, useResizeObserver } from 'heitu';
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
