"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{94294:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(55832),C={"docs-canvas-animation-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s,k;return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=A.sent,m=E.Circle,c=E.Stage,v=E.useResizeObserver,f=E.Animate,A.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return i=A.sent,g=i.default,s=i.useLayoutEffect,k=i.useRef,A.abrupt("return",{default:function(){var y=new c,D=k(null),K=new m({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2});y.add(K);var _=function(){var $=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});$.start();var Y=K.x,G=K.y,F=K.x,U=K.y,V=K.radius,re=K.radius,ae=function(ce,oe){re=(V-re)*oe,F=(300-F)*oe,U=(400-U)*oe,K.attr({x:Y+F,y:G+U,radius:V-re})};$.pushQueue(ae)};return K.on("click",_),s(function(){y.buildContentDOM({container:D.current,backgroundColor:"#fff"});var H=new f({value:0},{value:360},{duration:1e3,easing:"quadraticInOut"});H.start();var $=K.radius,Y=K.radius,G=function(U,V){Y=($-Y)*V,K.attr({radius:$+Y})};return H.pushQueue(G),function(){return H.stop()}},[]),v(D,function(){return y._resizeDOM()}),g.createElement(g.Fragment,null,g.createElement("div",{ref:D}))}});case 14:case"end":return A.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-animation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},28835:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(66397),C={"docs-canvas-circle-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Circle,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=new c,y=s(null),D=new m({x:100,y:150,radius:50,strokeStyle:"blue",fillStyle:"pink",lineWidth:1,border:0,startAngle:200,endAngle:270}),K=new m({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});return S.add(D,K),g(function(){S.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),v(y,function(){return S._resizeDOM()}),i.createElement("div",{ref:y})}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-circle-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},80148:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(23629),C={"docs-canvas-custom-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Custom,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=new c,y=s(null),D=new Path2D;D.moveTo(200,240),D.bezierCurveTo(200,200,120,150,120,200),D.bezierCurveTo(120,280,200,300,200,340),D.bezierCurveTo(200,300,280,280,280,200),D.bezierCurveTo(280,150,200,200,200,240);var K=new m({path2D:D});return S.add(K),g(function(){S.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),v(y,function(){return S._resizeDOM()}),i.createElement("div",{ref:y})}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-custom-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Custom, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},70544:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(49011),E={"docs-canvas-drag-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s,k,p,A;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=y.sent,v=c.Circle,f=c.Stage,i=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,s=g.default,k=g.useLayoutEffect,p=g.useRef,A=g.useState,y.abrupt("return",{default:function(){var K=A({x:0,y:0}),_=M()(K,2),H=_[0],$=_[1],Y=new f,G=p(null),F=new v({x:200,y:150,radius:50,fillStyle:"blue",lineWidth:2,border:2,draggable:!0}),U=new v({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:2,border:2,draggable:function(re,ae){$({x:ae.x,y:ae.y})}});return Y.add(F,U),k(function(){Y.buildContentDOM({container:G.current,backgroundColor:"#fff"})},[]),i(G,function(){return Y._resizeDOM()}),s.createElement(s.Fragment,null,H.x,",",H.y,s.createElement("div",{ref:G}))}});case 14:case"end":return y.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-canvas-drag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},11293:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(50138),E={"docs-canvas-event-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s,k,p,A;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=y.sent,v=c.Circle,f=c.Stage,i=c.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return g=y.sent,s=g.default,k=g.useLayoutEffect,p=g.useRef,A=g.useState,y.abrupt("return",{default:function(){var K=A(""),_=M()(K,2),H=_[0],$=_[1],Y=new f,G=p(null),F=new v({x:200,y:150,radius:50,strokeStyle:"pink",fillStyle:"blue",lineWidth:2,border:2});Y.add(F);var U=function(ie){$("click")},V=function(ie){$("mousedown")},re=function(ie){$("mousemove")},ae=function(ie){$("mouseup")},fe=function(ie){$("mouseenter")},ce=function(ie){$("contextmenu")};return F.on("click",U),F.on("mousedown",V),F.on("mousemove",re),F.on("mouseup",ae),F.on("mouseenter",fe),F.on("contextmenu",ce),k(function(){return Y.buildContentDOM({container:G.current,backgroundColor:"#fff"}),function(){F.off("click",U),F.off("mousedown",V),F.off("mousemove",re),F.off("mouseup",ae),F.off("mouseenter",fe),F.off("contextmenu",ce)}},[]),i(G,function(){return Y._resizeDOM()}),s.createElement(s.Fragment,null,H,s.createElement("div",{ref:G}))}});case 14:case"end":return y.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-canvas-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},90564:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(52192),C={"docs-canvas-group-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s,k,p,A;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=y.sent,m=E.Group,c=E.Text,v=E.Circle,f=E.Rect,i=E.Stage,g=E.useResizeObserver,y.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return s=y.sent,k=s.default,p=s.useLayoutEffect,A=s.useRef,y.abrupt("return",{default:function(){var K=A(null),_=new i,H=new c({content:"title",x:110,y:260,index:999}),$=new c({content:"name: test",x:110,y:280,index:999}),Y=new m({}),G=new m({draggable:!0}),F=new v({x:100,y:100,radius:50,fillStyle:"pink",lineWidth:1,border:0}),U=new f({fillStyle:"blue",x:150,y:100,width:100,height:100}),V=new f({fillStyle:"#eee",x:100,y:250,width:200,height:100});return Y.add(F,U),G.add(V,H,$),_.add(Y,G),p(function(){_.buildContentDOM({container:K.current,backgroundColor:"#fff"})},[]),g(K,function(){return _._resizeDOM()}),k.createElement(k.Fragment,null,k.createElement("div",{ref:K}))}});case 16:case"end":return y.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
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
    fillStyle: '#eee',
    x: 100,
    y: 250,
    width: 200,
    height: 100,
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},81222:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(54197),C={"docs-canvas-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Custom,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=s(null),y=new c,D=new Path2D;D.moveTo(200,240),D.bezierCurveTo(200,200,120,150,120,200),D.bezierCurveTo(120,280,200,300,200,340),D.bezierCurveTo(200,300,280,280,280,200),D.bezierCurveTo(280,150,200,200,200,240);var K=new m({path2D:D,fillStyle:"pink",strokeStyle:"red"});return y.add(K),g(function(){y.buildContentDOM({container:S.current,backgroundColor:"#fff"})},[]),v(S,function(){return y._resizeDOM()}),i.createElement(i.Fragment,null,i.createElement("div",{ref:S}))}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},31930:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(10372),C={"docs-canvas-line-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Line,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=new c,y=s(null),D=new m,K=new m({start:{x:90,y:90},points:[70,70],end:{x:190,y:90},strokeStyle:"red",lineWidth:3,smooth:!0}),_=new m({start:{x:100,y:100},points:[70,70,50,50],end:{x:300,y:150},strokeStyle:"blue",lineWidth:2,smooth:!0});return S.add(D,K,_),g(function(){S.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),v(y,function(){return S._resizeDOM()}),i.createElement("div",{ref:y})}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-line-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Line, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},98841:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(89131),C={"docs-canvas-rect-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Rect,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=new c,y=s(null),D=new m({fillStyle:"pink",x:250,y:250,width:100,height:100});return S.add(D),g(function(){S.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),v(y,function(){return S._resizeDOM()}),i.createElement("div",{ref:y})}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _rect = new Rect({
    fillStyle: 'pink',
    x: 250,
    y: 250,
    width: 100,
    height: 100,
  });

  _stage.add(_rect);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},67023:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(18283),C={"docs-canvas-stage-demo-stagedemo1":{component:R.memo(R.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}},"docs-canvas-stage-demo-stagedemo":{component:R.memo(R.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},9095:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(70821),C={"docs-canvas-text-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=p.sent,m=E.Text,c=E.Stage,v=E.useResizeObserver,p.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return f=p.sent,i=f.default,g=f.useLayoutEffect,s=f.useRef,p.abrupt("return",{default:function(){var S=new c,y=s(null),D=new m({content:"xixinia",index:999,x:250,y:250});return S.add(D),g(function(){S.buildContentDOM({container:y.current,backgroundColor:"#fff"})},[]),v(y,function(){return S._resizeDOM()}),i.createElement("div",{ref:y})}});case 13:case"end":return p.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-canvas-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Text, Stage, useResizeObserver } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},44401:function(T,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(26211),W={}},97086:function(T,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(29876),W={}},64234:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(93139),E={"docs-hooks-use-async-fn-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,v=c.default,s.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=s.sent,i=f.useAsyncFn,s.abrupt("return",{default:function(){var p=i(L()(u()().mark(function _(){var H;return u()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,new Promise(function(G){setTimeout(function(){G(200)},5e3)});case 2:return H=Y.sent,Y.abrupt("return",H);case 4:case"end":return Y.stop()}},_)})),[]),A=M()(p,2),S=A[0],y=S.loading,D=S.value,K=A[1];return console.log(y,D),v.createElement("div",null,v.createElement("button",{onClick:function(){K()}},"get"),y&&"loading"," ",v.createElement("br",null),"data: ".concat(D||""))}});case 9:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},75326:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(72155),E={"docs-hooks-use-cancel-async-fn-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=p.sent,v=c.default,f=c.useRef,p.next=7,Promise.resolve().then(e.bind(e,76727));case 7:return i=p.sent,g=i.useCancelAsyncFn,s=i.useHtAxios,p.abrupt("return",{default:function(){var S=f(),y=s({config:{timeout:1e4},requestInterceptorsCallBack:function(F){return F},responseInterceptorsCallBack:function(F){return F.data}}),D=g(function(){var G=L()(u()().mark(function F(U){var V;return u()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return V=U.cancelInterceptor,ae.abrupt("return",function(){var fe=L()(u()().mark(function ce(oe){var ie;return u()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,y.get("http://jsonplaceholder.typicode.com/posts").catch(function(Ce){console.log(Ce)});case 2:return ie=ve.sent,V(),ve.abrupt("return",ie);case 5:case"end":return ve.stop()}},ce)}));return function(ce){return fe.apply(this,arguments)}}());case 2:case"end":return ae.stop()}},F)}));return function(F){return G.apply(this,arguments)}}(),[]),K=M()(D,2),_=K[0],H=_.value,$=_.loading,Y=K[1];return v.createElement("div",null,v.createElement("button",{onClick:function(){var G=L()(u()().mark(function U(){return u()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:Y();case 1:case"end":return re.stop()}},U)}));function F(){return G.apply(this,arguments)}return F}()},"12312"))}});case 11:case"end":return p.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},31701:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(64577),E={"docs-hooks-use-cookie-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,v=c.default,s.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=s.sent,i=f.useCookie,s.abrupt("return",{default:function(){var p={path:"/"},A="cookie-key",S=i(A,p,"default-value"),y=M()(S,3),D=y[0],K=y[1],_=y[2],H=function(){K("new-cookie-value")},$=function(){K(void 0)},Y=function(){if("cookieStore"in window){var F=window.cookieStore;F.set({name:A,value:"changed"})}else document.cookie="".concat(A,"=changed; path=/")};return v.createElement("div",null,v.createElement("p",null,"Click on the button to update or clear the cookie"),v.createElement("p",{color:"blue"},"cookie: ",D||"no value"),v.createElement("button",{onClick:H},"Update the cookie"),v.createElement("button",{onClick:$},"Clear the cookie"),v.createElement("button",{onClick:Y},"Changing the cookie through other methods"),v.createElement("button",{onClick:_},"Refresh the cookie"))}});case 9:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},67731:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(28587),E={"docs-hooks-use-count-down-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,v=c.default,s.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=s.sent,i=f.useCountDown,s.abrupt("return",{default:function(){var p=i(),A=M()(p,3),S=A[0],y=A[1],D=A[2];return v.createElement("div",null,S,v.createElement("button",{onClick:function(){y(60)}},"\u5F00\u59CB"),v.createElement("button",{onClick:function(){D()}},"\u6682\u505C"),v.createElement("button",{onClick:function(){y()}},"\u7EE7\u7EED"))}});case 9:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},66609:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(59301),E={"docs-hooks-use-deep-compare-effect-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s,k;return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=A.sent,v=c.default,f=c.useState,i=c.useEffect,g=c.useRef,A.next=9,Promise.resolve().then(e.bind(e,76727));case 9:return s=A.sent,k=s.useDeepCompareEffect,A.abrupt("return",{default:function(){var y=f(0),D=M()(y,2),K=D[0],_=D[1],H=g(0),$=g(0);return i(function(){H.current+=1},[{}]),k(function(){return $.current+=1,function(){}},[{}]),v.createElement("div",null,v.createElement("p",null,"effectCount: ",H.current),v.createElement("p",null,"deepCompareCount: ",$.current),v.createElement("p",null,v.createElement("button",{type:"button",onClick:function(){return _(function(G){return G+1})}},"reRender")))}});case 12:case"end":return A.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},5958:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(48035),C={"docs-hooks-use-device-pixel-ratio-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=i.sent,m=E.default,i.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return c=i.sent,v=c.useDevicePixelRatio,i.abrupt("return",{default:function(){var s=v(),k=s.pixelRatio;return m.createElement("p",null,"Device pixel ratio: ",k)}});case 9:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},65585:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(56139),C={"docs-hooks-use-element-size-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return E=s.sent,m=E.default,c=E.useRef,v=E.useEffect,s.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return f=s.sent,i=f.useElementSize,s.abrupt("return",{default:function(){var p=c(null),A=i(p);return v(function(){console.log(p.current.mount)},[]),m.createElement("div",null,m.createElement("textarea",{ref:p,disabled:!0,style:{width:200,height:200},value:"width: ".concat(A.width,`
height: `).concat(A.height)}))}});case 11:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},23897:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(38668),C={"docs-hooks-use-ht-axios-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c,v;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=i.sent,m=E.useHtAxios,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return c=i.sent,v=c.default,i.abrupt("return",{default:function(){var s=m({config:{timeout:3e3},requestInterceptorsCallBack:function(A){return A},responseInterceptorsCallBack:function(A){return A.data}}),k=function(){var p=M()(u()().mark(function A(){var S;return u()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,s.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:S=D.sent,console.log(S);case 4:case"end":return D.stop()}},A)}));return function(){return p.apply(this,arguments)}}();return v.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},v.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){k()}},"123"))}});case 9:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(76727),react:e(67294)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},97716:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(81233),E={"docs-hooks-use-image-load-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,v=c.default,s.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=s.sent,i=f.useImageLoad,s.abrupt("return",{default:function(){var p=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],A=i({imgList:p}),S=M()(A,4),y=S[0],D=S[1],K=S[2],_=S[3];return v.createElement("div",{style:{display:"flex"}},_?"loading":v.createElement(v.Fragment,null,v.createElement("div",null,v.createElement("div",null,"img"),v.createElement("img",{src:y,style:{width:200}})),v.createElement("div",null,v.createElement("div",null,"ftimgList"),D==null?void 0:D.map(function(H,$){return v.createElement("img",{src:H,key:$,style:{width:200}})})),v.createElement("div",null,v.createElement("div",null,"allowImgList"),K==null?void 0:K.map(function(H,$){return v.createElement("img",{src:H,key:$,style:{width:200}})}))))}});case 9:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},79817:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(35412),E={"docs-hooks-use-in-view-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=s.sent,v=c.default,s.next=6,Promise.resolve().then(e.bind(e,76727));case 6:return f=s.sent,i=f.useInView,s.abrupt("return",{default:function(){var p=i(),A=M()(p,2),S=A[0],y=A[1];return v.createElement("div",null,v.createElement("div",null,y?"active":"inactive"),v.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},v.createElement("div",{ref:S},"12312312")))}});case 9:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},59842:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(1019),E={"docs-hooks-use-infinite-scroll-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s,k;return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return k=function(y){var D=y.hasMore,K=y.loadMore,_=s(),H=M()(_,2),$=H[0],Y=H[1];return f(function(){Y&&D&&(K==null||K())},[D,Y,K]),v.createElement("div",{ref:$},D?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},A.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return c=A.sent,v=c.default,f=c.useEffect,A.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return i=A.sent,g=i.useInfiniteScroll,s=i.useInView,A.abrupt("return",{default:function(){var y=new Array(100).fill(1).map(function($,Y){return Y}),D=g({dataSource:y,pageSize:10,delay:100}),K=D.data,_=D.hasMore,H=D.loadMore;return v.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},K==null?void 0:K.map(function($){return v.createElement("span",null,$)}),v.createElement(k,{loadMore:H,hasMore:_}))}});case 12:case"end":return A.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},96122:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(40801),E={"docs-hooks-use-local-storage-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=g.sent,v=c.useLocalStorage,f=function(){var k=v("my-key","foo"),p=M()(k,3),A=p[0],S=p[1],y=p[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",A),C.createElement("button",{onClick:function(){return S("bar")}},"bar"),C.createElement("button",{onClick:function(){return S("baz")}},"baz"),C.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},13917:function(T,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(44012),W={}},37868:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(74746),E={"docs-hooks-use-previous-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=p.sent,v=c.default,f=c.useState,p.next=7,Promise.resolve().then(e.bind(e,76727));case 7:return i=p.sent,g=i.usePrevious,s=function(S){var y=g(S);return console.log(y,S),v.createElement("div",null,v.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(y==null?void 0:y.aa)||0," "),v.createElement("div",null,"\u5F53\u524D\u7684aa: ",S==null?void 0:S.aa))},p.abrupt("return",{default:function(){var S=f(1),y=M()(S,2),D=y[0],K=y[1];return v.createElement("div",null,v.createElement("button",{onClick:function(){return K(D+1)}},"+1"),v.createElement(s,{aa:D}))}});case 11:case"end":return p.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},7411:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(81286),E={"docs-hooks-use-resize-observer-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f,i,g,s;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=p.sent,v=c.default,f=c.useRef,i=c.useState,p.next=8,Promise.resolve().then(e.bind(e,76727));case 8:return g=p.sent,s=g.useResizeObserver,p.abrupt("return",{default:function(){var S=f(null),y=i({width:0,height:0}),D=M()(y,2),K=D[0],_=D[1];return s(S,function(H){var $=M()(H,1),Y=$[0],G=Y.contentRect,F=G.width,U=G.height;_({width:F,height:U})}),v.createElement("div",null,v.createElement("textarea",{ref:S,disabled:!0,style:{width:200,height:200},value:"width: ".concat(K.width,`
height: `).concat(K.height)}))}});case 11:case"end":return p.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},12830:function(T,l,e){e.r(l),e.d(l,{demos:function(){return E}});var O=e(17061),u=e.n(O),W=e(27424),M=e.n(W),R=e(17156),L=e.n(R),C=e(67294),h=e(5480),E={"docs-hooks-use-session-storage-demo-0":{component:C.memo(C.lazy(L()(u()().mark(function m(){var c,v,f;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return c=g.sent,v=c.useSessionStorage,f=function(){var k=v("my-key","foo"),p=M()(k,3),A=p[0],S=p[1],y=p[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",A),C.createElement("button",{onClick:function(){return S("bar")}},"bar"),C.createElement("button",{onClick:function(){return S("baz")}},"baz"),C.createElement("button",{onClick:function(){return y()}},"Remove"))},g.abrupt("return",{default:f});case 6:case"end":return g.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var m=L()(u()().mark(function v(){var f,i=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,i));case 3:case"end":return s.stop()}},v)}));function c(){return m.apply(this,arguments)}return c}()}}}},9954:function(T,l,e){e.r(l),e.d(l,{demos:function(){return C}});var O=e(17061),u=e.n(O),W=e(17156),M=e.n(W),R=e(67294),L=e(51530),C={"docs-hooks-use-window-size-demo-0":{component:R.memo(R.lazy(M()(u()().mark(function h(){var E,m,c;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,76727));case 2:return E=f.sent,m=E.useWindowSize,c=function(){var g=m(),s=g.width,k=g.height;return R.createElement("div",null,R.createElement("p",null,"width: ",s,", height: ",k))},f.abrupt("return",{default:c});case 6:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{heitu:e(76727)},renderOpts:{compile:function(){var h=M()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,v));case 3:case"end":return i.stop()}},m)}));function E(){return h.apply(this,arguments)}return E}()}}}},11171:function(T,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(68537),W={}},6202:function(T,l,e){e.r(l),e.d(l,{demos:function(){return W}});var O=e(67294),u=e(79930),W={}},76727:function(T,l,e){e.r(l),e.d(l,{Animate:function(){return D},Circle:function(){return be},Custom:function(){return we},Group:function(){return ke},Line:function(){return $e},Rect:function(){return Ge},Stage:function(){return vn},Text:function(){return He},useAsyncFn:function(){return Te},useCancelAsyncFn:function(){return lt},useCookie:function(){return En},useCountDown:function(){return gn},useDeepCompareEffect:function(){return Mn},useDevicePixelRatio:function(){return An},useElementSize:function(){return Ln},useHtAxios:function(){return Xn},useImageLoad:function(){return Vn},useInView:function(){return at},useInfiniteScroll:function(){return nt},useLocalStorage:function(){return fn},usePrevious:function(){return ot},useResizeObserver:function(){return Re},useSessionStorage:function(){return In},useWindowSize:function(){return it}});var O=e(42122),u=e.n(O),W=e(56690),M=e.n(W),R=e(89728),L=e.n(R),C=e(38416),h=e.n(C),E=e(861),m=e.n(E),c=window.devicePixelRatio,v=function(){},f=function(a){return a.name==="Stage"},i=function(a,t){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(t)).map(function(r){return[r.name,r]})).values())},g=function(a,t,r){return r!=null&&r.x&&r!==null&&r!==void 0&&r.width&&r.y&&r!==null&&r!==void 0&&r.height?a>(r==null?void 0:r.x)*c&&a<(((r==null?void 0:r.x)||0)+((r==null?void 0:r.width)||0))*c&&t>(r==null?void 0:r.y)*c&&t<r.y*c+r.height*c:!1},s=function(a){var t=a.mouseX,r=a.mouseY,n=a.path2D,d=a.ctx;return n&&d&&(d==null?void 0:d.isPointInPath(n,t,r))},k={linear:function(a){return a},quadraticIn:function(a){return a*a},quadraticOut:function(a){return a*(2-a)},quadraticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(a){var t=a;return t*t*t},cubicOut:function(a){var t=a;return--t*t*t+1},cubicInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(a){var t=a;return t*t*t*t},quarticOut:function(a){var t=a;return 1- --t*t*t*t},quarticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(a){return a*a*a*a*a},quinticOut:function(a){var t=a;return--t*t*t*t*t+1},quinticInOut:function(a){var t=a;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(a){return 1-Math.cos(a*Math.PI/2)},sinusoidalOut:function(a){return Math.sin(a*Math.PI/2)},sinusoidalInOut:function(a){return .5*(1-Math.cos(Math.PI*a))},exponentialIn:function(a){return a===0?0:Math.pow(1024,a-1)},exponentialOut:function(a){return a===1?1:1-Math.pow(2,-10*a)},exponentialInOut:function(a){var t=a;return a===0?0:a===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(a){return 1-Math.sqrt(1-a*a)},circularOut:function(a){var t=a;return Math.sqrt(1- --t*t)},circularInOut:function(a){var t=a;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var d=a;return-(r*Math.pow(2,10*(d-=1))*Math.sin((d-t)*(2*Math.PI)/n))},elasticOut:function(a){var t,r=.1,n=.4;return a===0?0:a===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*a)*Math.sin((a-t)*(2*Math.PI)/n)+1)},elasticInOut:function(a){var t,r=.1,n=.4;if(a===0)return 0;if(a===1)return 1;!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI);var d=a;return(d*=2)<1?-.5*(r*Math.pow(2,10*(d-=1))*Math.sin((d-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(d-=1))*Math.sin((d-t)*(2*Math.PI)/n)*.5+1},backIn:function(a){var t=1.70158;return a*a*((t+1)*a-t)},backOut:function(a){var t=a,r=1.70158;return--t*t*((r+1)*t+r)+1},backInOut:function(a){var t=a,r=1.70158*1.525;return(t*=2)<1?.5*(t*t*((r+1)*t-r)):.5*((t-=2)*t*((r+1)*t+r)+2)},bounceIn:function(a){return 1-k.bounceOut(1-a)},bounceOut:function(a){var t=a;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(a){return a<.5?k.bounceIn(a*2)*.5:k.bounceOut(a*2-1)*.5+.5}};function p(I,a,t){var r=a-I,n=t*r,d=I+n,o=I<a?I:a,x=I>a?I:a;return d=Math.max(d,o),d=Math.min(d,x),d}var A=function(a,t,r){if(typeof a=="number"&&typeof t=="number")return p(a,t,r);if(Array.isArray(a)&&Array.isArray(t))return a.map(function(n,d){return p(n,t[d],r)})},S={duration:1e3,easing:"linear",iterationCount:1},y=function(){function I(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};M()(this,I),h()(this,"rafTimer",null),h()(this,"startTime",null),h()(this,"startProp",void 0),h()(this,"targetProp",void 0),h()(this,"cfg",void 0),h()(this,"forward",!0),h()(this,"queue",[]),this.startProp=a,this.targetProp=t,this.cfg=u()(u()({},S),r)}return L()(I,[{key:"start",value:function(){var t=this,r=this.cfg,n=r.duration,d=r.easing,o=r.during,x=r.iterationCount,P=Object.keys(this.targetProp),w=function b(N){t.startTime||(t.startTime=N);var Q=k[d](Math.min((N-t.startTime)/n,1));t.forward===!1&&(Q=1-Q);var j={};P.forEach(function(z){var J=A(t.startProp[z],t.targetProp[z],Q);j[z]=J}),o&&o(Q,j);var X=t.forward?Q<1:0<Q;X?t.rafTimer=requestAnimationFrame(b):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(z){z(j,Q)});var Z=t.forward?Q===1:Q===0;Z&&x===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(w)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),I}(),D=y,K=e(66115),_=e.n(K),H=e(61655),$=e.n(H),Y=e(26389),G=e.n(Y),F=e(30954),U=e(67294),V,re=Object.prototype.toString;function ae(I){return typeof I=="function"}var fe=function(a){return typeof a!="undefined"};function ce(I){return typeof I=="undefined"}var oe=function(a){return typeof a=="boolean"},ie=function(a){return typeof a=="number"};function Me(I){return typeof I=="string"}function ve(I){return re.call(I)==="[object Object]"}var Ce=null,_e=typeof window!="undefined",ct=typeof navigator!="undefined";function Ae(){}var vt=_e&&((V=window)===null||V===void 0||(V=V.navigator)===null||V===void 0?void 0:V.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),ht=!U.useId,Be=e(79697),We=function(){function I(){M()(this,I),h()(this,"eventListeners",{})}return L()(I,[{key:"on",value:function(t,r){var n=t.split(" "),d=n.length,o,x,P,w;for(o=0;o<d;o++)x=n[o],P=x.split("."),w=P[0],this.eventListeners[w]||(this.eventListeners[w]=[]),console.log(this.eventListeners[w]),this.eventListeners[w].push({name:(r==null?void 0:r.name)||"",handler:r});return this}},{key:"_off",value:function(t,r,n){var d=this.eventListeners[t],o,x,P;for(o=0;o<d.length;o++)if(x=d[o].name,P=d[o].handler,(!r||x===r)&&(!n||n===P)){if(d.splice(o,1),d.length===0){delete this.eventListeners[t];break}o--}}},{key:"off",value:function(t,r){var n=(t||"").split(" "),d=n.length,o,x,P,w,b,N;for(o=0;o<d;o++)if(P=n[o],w=P.split("."),b=w[0],N=w[1],b)this.eventListeners[b]&&this._off(b,N,r);else for(x in this.eventListeners)this._off(x,N,r);return this}},{key:"_fire",value:function(t,r,n){if(f(n))this.eventListeners[t].forEach(function(x){x.handler(r)});else{var d;if((n==null||(d=n.eventListeners)===null||d===void 0||(d=d[t])===null||d===void 0?void 0:d.length)>0&&n.eventListeners[t].forEach(function(x){x.handler(r,n)}),n!=null&&n.draggable){var o;ae(n==null?void 0:n.draggable)&&n.dragging&&(n==null||n.draggable(r,n)),(o=n.eventListeners)===null||o===void 0||(o=o[t])===null||o===void 0||o.forEach(function(x){x.handler(r,n)})}}}},{key:"fire",value:function(t,r){var n=r.evt,d=r.target,o=r.currentTarget;if(f(o)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,o);for(var x=d==null?void 0:d.children,P=0;P<x.length;P++){var w,b,N=m()(x.filter(function(B){return B.draggable}));if(t==="mousedown"){var Q=N.filter(function(B){var ue;return B==null?void 0:B.inScope(n,(ue=d.canvas)===null||ue===void 0?void 0:ue.context)}),j=Q.sort(function(B,ue){return ue.index-B.index})[0];j&&(j.name==="Group"?(j.dragging=!0,j.children.forEach(function(B){B.offsetX=B!=null&&B.x?n.offsetX-(B==null?void 0:B.x):n.offsetX,B.offsetY=B!=null&&B.y?n.offsetY-(B==null?void 0:B.y):n.offsetY})):(j.dragging=!0,j.offsetX=j!=null&&j.x?n.offsetX-(j==null?void 0:j.x):n.offsetX,j.offsetY=j!=null&&j.y?n.offsetY-(j==null?void 0:j.y):n.offsetY))}(!(0,Be.Z)((w=x[P])===null||w===void 0?void 0:w.eventListeners)||(b=x[P])!==null&&b!==void 0&&b.draggable)&&this.fire(t,{evt:n,target:d,currentTarget:x[P]})}}else{var X;if(o!=null&&o.draggable&&t==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&t==="mousemove"){var Z,z=(Z=this.canvas)===null||Z===void 0||(Z=Z.canvas)===null||Z===void 0?void 0:Z.getBoundingClientRect();if(o.name==="Text"){var J=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,le=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?J-(o==null?void 0:o.offsetX):J,o.y=o!=null&&o.offsetY?le-(o==null?void 0:o.offsetY):le}else if(o.name==="Group"){var Ie=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,se=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.children.forEach(function(B){if(B.name==="Text"){var ue=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,ge=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;B.x=B!=null&&B.offsetX?ue-(B==null?void 0:B.offsetX):ue,B.y=B!=null&&B.offsetY?ge-(B==null?void 0:B.offsetY):ge}else B.x=B!=null&&B.offsetX?Ie-(B==null?void 0:B.offsetX):Ie,B.y=B!=null&&B.offsetY?se-(B==null?void 0:B.offsetY):se})}else{var de=z!=null&&z.left?n.clientX-(z==null?void 0:z.left):n.clientX,pe=z!=null&&z.top?n.clientY-(z==null?void 0:z.top):n.clientY;o.x=o!=null&&o.offsetX?de-(o==null?void 0:o.offsetX):de,o.y=o!=null&&o.offsetY?pe-(o==null?void 0:o.offsetY):pe}this.batchDraw(this)}if(o!=null&&o.inScope&&(X=d.canvas)!==null&&X!==void 0&&X.context){var ee;if(o!=null&&o.inScope(n,(ee=d.canvas)===null||ee===void 0?void 0:ee.context)){var ne;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,o),t==="mousemove"&&!o.mouseInScope&&((ne=o.eventListeners.mouseenter)===null||ne===void 0?void 0:ne.length)>0&&(o.mouseInScope=!0,d._fire("mouseenter",n,o))}else if(t==="mousemove"){var te;o.mouseInScope=!1,((te=d.eventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&d._fire("mouseleave",n,o)}}}}},{key:"attr",value:function(t){var r=this,n;this.parent&&((0,F.Z)(t,function(d,o){d&&(r[o]=d)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),I}(),me=We,Ue=function(I){$()(t,I);var a=G()(t);function t(r){var n;return M()(this,t),n=a.call(this),h()(_()(n),"name","Circle"),h()(_()(n),"parent",null),h()(_()(n),"x",void 0),h()(_()(n),"y",void 0),h()(_()(n),"radius",void 0),h()(_()(n),"lineWidth",void 0),h()(_()(n),"fillStyle",void 0),h()(_()(n),"strokeStyle",void 0),h()(_()(n),"arc",void 0),h()(_()(n),"startAngle",void 0),h()(_()(n),"endAngle",void 0),h()(_()(n),"innerRadius",void 0),h()(_()(n),"index",void 0),h()(_()(n),"path2D",void 0),h()(_()(n),"border",void 0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,d,o,x){var P=this.deg2rad(x),w=n+o*Math.cos(P),b=d+o*Math.sin(P);return{x:w,y:b}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,d="M ".concat(this.x," ").concat(n),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),x=this.y-this.innerRadius,P="M ".concat(this.x," ").concat(x),w="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(x);return"".concat(d," ").concat(o," ").concat(P," ").concat(w," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),d=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,x="M ".concat(n.x," ").concat(n.y),P="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(d.x," ").concat(d.y),w=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),b=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),N="L".concat(b.x," ").concat(b.y),Q="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(w.x," ").concat(w.y);return"".concat(x," ").concat(P," ").concat(N," ").concat(Q," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var d=this.startAngle===0&&this.endAngle===360,o;switch(this.border){case 0:return o=new Path2D(this.calcRingD(d)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(d)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(d)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(n,d){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:d||void 0}):!1}}]),t}(me),be=Ue,Ke=function(I){$()(t,I);var a=G()(t);function t(r){var n;if(M()(this,t),n=a.call(this),h()(_()(n),"name","Custom"),h()(_()(n),"x",void 0),h()(_()(n),"y",void 0),h()(_()(n),"width",void 0),h()(_()(n),"height",void 0),h()(_()(n),"fillStyle",void 0),h()(_()(n),"strokeStyle",void 0),h()(_()(n),"lineWidth",void 0),h()(_()(n),"index",void 0),h()(_()(n),"path2D",void 0),h()(_()(n),"parent",null),!r.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this}},{key:"inScope",value:function(n,d){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:d||void 0}):!1}}]),t}(me),we=Ke,ze=function(I){$()(t,I);var a=G()(t);function t(){var r;M()(this,t);for(var n=arguments.length,d=new Array(n),o=0;o<n;o++)d[o]=arguments[o];return r=a.call.apply(a,[this].concat(d)),h()(_()(r),"children",[]),r}return L()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var d=this.children||[],o=[];return d.forEach(function(x){n(x)&&o.push(x)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var d=arguments.length<=0?void 0:arguments[0];return d.index=d.index?d.index:this.getChildren().length,d.parent=this,this.getChildren().push(d),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(d){var o=n.some(function(x){return x===d});o||n.push(d)}),this.children=n,n}},{key:"batchDraw",value:function(n){var d,o,x,P,w;!((d=n.canvas)!==null&&d!==void 0&&d.context)||!((o=n.canvas)!==null&&o!==void 0&&o.canvas)||((x=n.canvas)===null||x===void 0||x.context.clearRect(0,0,(P=n.canvas)===null||P===void 0?void 0:P.canvas.offsetWidth,(w=n.canvas)===null||w===void 0?void 0:w.canvas.offsetHeight),this.sortChildren(function(b,N){return b.index-N.index}),this.deduplication(),this.getChildren().forEach(function(b){var N;if((N=n.canvas)!==null&&N!==void 0&&N.context&&b!==null&&b!==void 0&&b.draw){var Q;b==null||b.draw((Q=n.canvas)===null||Q===void 0?void 0:Q.context)}}))}}]),t}(me),De=ze,je=function(I){$()(t,I);var a=G()(t);function t(r){var n;return M()(this,t),n=a.call(this),h()(_()(n),"parent",void 0),h()(_()(n),"name","Group"),h()(_()(n),"draggable",!1),n.parent=null,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"draw",value:function(n){if(n)return this.sortChildren(function(d,o){return d.index-o.index}),this.deduplication(),this.getChildren().forEach(function(d){n&&d!==null&&d!==void 0&&d.draw&&(d==null||d.draw(n))}),this}},{key:"inScope",value:function(n,d){return this.getChildren().some(function(o){return o!=null&&o.inScope?o==null?void 0:o.inScope(n,d):!1})}}]),t}(De),ke=je,Ne=e(27424),q=e.n(Ne),Qe=function(I){$()(t,I);var a=G()(t);function t(r){var n;return M()(this,t),n=a.call(this),h()(_()(n),"name","Line"),h()(_()(n),"start",void 0),h()(_()(n),"end",void 0),h()(_()(n),"points",void 0),h()(_()(n),"smooth",void 0),h()(_()(n),"strokeStyle",void 0),h()(_()(n),"lineWidth",void 0),h()(_()(n),"lineCap",void 0),h()(_()(n),"lineJoin",void 0),h()(_()(n),"index",void 0),h()(_()(n),"path2D",void 0),h()(_()(n),"parent",null),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(d,o,x){var P=Math.floor(x/2);return x%2===0?d.push([o]):d[P].push(o),d},[]).map(function(d){var o=q()(d,2),x=o[0],P=o[1];return{x,y:P}})}},{key:"calcSmoothPath2D",value:function(){var n,d,o,x=new Path2D;return x.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((d=this.start)===null||d===void 0?void 0:d.y)||0),x.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&x.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&x.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=x,x}},{key:"calcStraightPath2D",value:function(){var n,d,o,x,P=new Path2D;P.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((d=this.start)===null||d===void 0?void 0:d.y)||0);var w=this.convertToNormalPoints([].concat(m()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(x=this.end)===null||x===void 0?void 0:x.y]));return w.forEach(function(b){var N=b.x,Q=b.y;P.lineTo(N,Q)}),P}},{key:"draw",value:function(n){var d=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(d),this}},{key:"inScope",value:function(n,d){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:d||void 0}):!1}}]),t}(me),$e=Qe,Fe=function(I){$()(t,I);var a=G()(t);function t(r){var n;return M()(this,t),n=a.call(this),h()(_()(n),"name","Rect"),h()(_()(n),"x",void 0),h()(_()(n),"y",void 0),h()(_()(n),"width",void 0),h()(_()(n),"height",void 0),h()(_()(n),"fillStyle",void 0),h()(_()(n),"strokeStyle",void 0),h()(_()(n),"lineWidth",void 0),h()(_()(n),"index",void 0),h()(_()(n),"path2D",void 0),h()(_()(n),"parent",null),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.index=0,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"draw",value:function(n){var d=new Path2D;return d.moveTo(this.x,this.y),d.lineTo(this.x+this.width,this.y),d.lineTo(this.x+this.width,this.y+this.height),d.lineTo(this.x,this.y+this.height),d.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(d),this.fillStyle&&n.fill(d),this.path2D=d,this}},{key:"inScope",value:function(n,d){var o=n.offsetX*c,x=n.offsetY*c;return this!==null&&this!==void 0&&this.path2D?s({mouseX:o,mouseY:x,path2D:this===null||this===void 0?void 0:this.path2D,ctx:d||void 0}):!1}}]),t}(me),Ge=Fe,Ye=function(I){$()(t,I);var a=G()(t);function t(r){var n;if(M()(this,t),n=a.call(this),h()(_()(n),"name","Text"),h()(_()(n),"parent",null),h()(_()(n),"x",void 0),h()(_()(n),"y",void 0),h()(_()(n),"content",void 0),h()(_()(n),"fillStyle",void 0),h()(_()(n),"fontFamily",void 0),h()(_()(n),"fontSize",void 0),h()(_()(n),"textAlign",void 0),h()(_()(n),"textBaseline",void 0),h()(_()(n),"width",void 0),h()(_()(n),"height",void 0),h()(_()(n),"index",0),n.content="",!r.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,(0,F.Z)(r,function(d,o){d&&(_()(n)[o]=d)}),n}return L()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var d=n.measureText(this.content);return this.width=d.width,this.height=this.fontSize,this}},{key:"inScope",value:function(n){var d=n.offsetX*c,o=n.offsetY*c;return g(d,o,this)}}]),t}(me),He=Ye,Ee=null,Xe=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(I){setTimeout(I,60)},Je=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(t){}return a},ft=function(a){Ee.push(a),Ee.length===1&&Xe(function(){var t=Ee;Ee=[],t.forEach(function(r){r()})})},Ze=function(){function I(){M()(this,I),h()(this,"canvas",void 0),h()(this,"context",void 0),h()(this,"width",0),h()(this,"height",0),this.canvas=Je(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return L()(I,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*c,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*c,this.canvas.style.height=t+"px",this.context.scale(c,c)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,r){this.setWidth(t||0),this.setHeight(r||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,r,n){return n&&this.setBackgroundColor(n),this.canvas}}]),I}(),Ve="mouseenter",qe="mouseleave",en="mouseout",nn="mouseover",tn="mousedown",an="mousemove",rn="mouseup",on="contextmenu",un="click",sn="dblclick",dn="wheel",ln=[[Ve,"_mouseenter"],[tn,"_mousedown"],[an,"_mousemove"],[qe,"_mouseleave"],[rn,"_mouseup"],[en,"_mouseout"],[nn,"_mouseover"],[on,"_contextmenu"],[dn,"_wheel"],[un,"_click"],[sn,"_dblclick"]],cn=function(I){$()(t,I);var a=G()(t);function t(){var r;return M()(this,t),r=a.call(this),h()(_()(r),"name","Stage"),h()(_()(r),"parent",null),h()(_()(r),"content",void 0),h()(_()(r),"canvas",void 0),h()(_()(r),"width",void 0),h()(_()(r),"height",void 0),h()(_()(r),"draggable",void 0),h()(_()(r),"isFirstRender",void 0),h()(_()(r),"_pointerPositions",[]),h()(_()(r),"_changedPointerPositions",[]),h()(_()(r),"pointerPos",null),r.content=null,r.canvas=null,r.width=100,r.height=500,r.isFirstRender=!0,r.draggable=!1,r}return L()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var d=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),o=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=d,this.content.style.height=o,this.canvas=new Ze,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,d,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,d,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var d=this.content.getBoundingClientRect(),o={top:d.top,left:d.left,scaleX:d.width/this.content.clientWidth||1,scaleY:d.height/this.content.clientHeight||1},x=null,P=null;x=(n.clientX-o.left)/o.scaleX,P=(n.clientY-o.top)/o.scaleY,this.pointerPos={x,y:P}}},{key:"_bindContentEvents",value:function(){var n,d=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&ln.forEach(function(o){var x,P=q()(o,2),w=P[0],b=P[1];(x=d.content)===null||x===void 0||x.addEventListener(w,function(N){d[b](N)},{passive:!1})})}},{key:"_mouseenter",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){f(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(De),vn=cn,hn=function(a,t,r){if(!_e)return[t,Ae,Ae];if(!a)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(Q){return Q}:r.deserializer:JSON.parse,d=(0,U.useRef)(function(Q){try{var j=r?r.raw?String:r.serializer:JSON.stringify,X=localStorage.getItem(Q);return X!==null?n(X):(t&&localStorage.setItem(Q,j(t)),t)}catch(Z){return t}}),o=(0,U.useState)(function(){return d.current(a)}),x=q()(o,2),P=x[0],w=x[1];(0,U.useLayoutEffect)(function(){return w(d.current(a))},[a]);var b=(0,U.useCallback)(function(Q){try{var j=typeof Q=="function"?Q(P):Q;if(typeof j=="undefined")return;var X;r?r.raw?typeof j=="string"?X=j:X=JSON.stringify(j):r.serializer?X=r.serializer(j):X=JSON.stringify(j):X=JSON.stringify(j),localStorage.setItem(a,X),w(n(X))}catch(Z){}},[a,w]),N=(0,U.useCallback)(function(){try{localStorage.removeItem(a),w(void 0)}catch(Q){}},[a,w]);return[P,b,N]},fn=hn,mn=function(a,t,r){if(!_e)return[t,function(){}];var n=(0,U.useState)(function(){try{var P=sessionStorage.getItem(a);return typeof P!="string"?(sessionStorage.setItem(a,r?String(t):JSON.stringify(t)),t):r?P:JSON.parse(P||"null")}catch(w){return t}}),d=q()(n,2),o=d[0],x=d[1];return(0,U.useEffect)(function(){try{var P=r?String(o):JSON.stringify(o);sessionStorage.setItem(a,P)}catch(w){}}),[o,x]},In=mn,ye={};function mt(I){console.error(I)}var he=e(31955);function pn(I,a){return a!==void 0?a:_e?he.Z.get(I):""}var _n=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,r=arguments.length>2?arguments[2]:void 0,n=(0,U.useState)(pn(a,r)),d=q()(n,2),o=d[0],x=d[1];(0,U.useEffect)(function(){var b=function(){var Q=he.Z.get(a);return Q!=null?Q:(r===void 0?he.Z.remove(a):he.Z.set(a,r,t),r)};x(b())},[r,a,JSON.stringify(t)]);var P=(0,U.useCallback)(function(b){var N=ae(b)?b(o):b;N===void 0?he.Z.remove(a):he.Z.set(a,N,t),x(N)},[a,o,JSON.stringify(t)]),w=(0,U.useCallback)(function(){var b=he.Z.get(a);Me(b)&&x(b)},[a]);return[o,P,w]},En=_n,xn=function(){var a=(0,U.useState)(0),t=q()(a,2),r=t[0],n=t[1],d,o=function(){clearTimeout(d)},x=function(w){o(),n(w||function(b){return b-1})};return(0,U.useEffect)(function(){return d=setTimeout(function(){r>0?n(function(P){return P-1}):o()},1e3),function(){return o()}},[r]),[r,x,o]},gn=xn,yn=e(72249),On=function(a,t,r){var n=(0,U.useRef)(void 0);(!n.current||!r(t,n.current))&&(n.current=t),(0,U.useEffect)(a,n.current)},Pn=function(a,t){On(a,t,yn.Z)},Mn=Pn,Cn=function(){var a=(0,U.useState)(1),t=q()(a,2),r=t[0],n=t[1],d=(0,U.useCallback)(function(){if(window){n(window.devicePixelRatio);var o=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),x=function(){d()};return o.addEventListener("change",x,{once:!0}),function(){o.removeEventListener("change",x)}}},[]);return(0,U.useEffect)(function(){var o=d();return o},[d]),{pixelRatio:r}},An=Cn,Dn=function(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye;(0,U.useEffect)(function(){var n=new ResizeObserver(t);return a!=null&&a.current&&n.observe(a.current,r),function(){a!=null&&a.current&&n.unobserve(a.current),n.disconnect()}},[])},Re=Dn,Rn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,r=(0,U.useState)({width:0,height:0}),n=q()(r,2),d=n[0],o=n[1];return Re(a,function(x){if(x.length!==0){var P=q()(x,1),w=P[0],b=w.contentRect,N=b.width,Q=b.height;o({width:N,height:Q})}},t),d},Ln=Rn,Le=e(54683),Sn=e(33293),Tn="application/json;charset=utf-8",It="application/x-www-form-urlencoded",pt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":Tn,Accept:"application/json;version=3.0;compress=false;"},Bn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Wn=e(54998),Un=e.n(Wn),bn=e(49360),Kn=e(58146),wn=e(73505),zn=e(27771),jn=e(77226),kn=e(36378),Oe=function I(a){if((0,bn.Z)(a)||(0,Kn.Z)(a)||(0,wn.Z)(a))return a;if((0,zn.Z)(a))return a.map(function(r){return I(r)});if((0,jn.Z)(a)){var t=Object.create(null);return Object.keys(a).forEach(function(r){t[r]=I(a[r])}),t}else return(0,kn.Z)(a)?a.trim():a};function _t(){return typeof window=="undefined"?!1:window&&window.__debug__}function Et(I){var a=atob(I);return Uint8Array.from(a,function(t){return t.codePointAt(0)})}function xt(I){var a=Array.from(I,function(t){return String.fromCodePoint(t)}).join("");return btoa(a)}var Nn=Le.Z.CancelToken.source(),Qn=function(a){a.cancelToken=Nn.token;var t=Un()(a.url);if(a.url=t.query(Oe(t.query(!0))||{}).toString(),a.data&&(a.data=Oe(a.data)),a.params=Oe(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var r=a.data,n=r===void 0?{}:r;for(var d in n)if(n.hasOwnProperty(d)){var o=n[d];o==null&&delete n[d]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},$n=function(a,t){t&&a.interceptors.request.use(function(r){return t(r)},function(r){return Promise.reject(r)}),a.interceptors.request.use(function(r){return Qn(r)},function(r){return Promise.reject(r)})},Fn=function(a){var t,r=a.data;try{if(r instanceof Blob){var n=a.headers["content-disposition"],d=n.split("filename=")[1];return{success:!0,data:{file:r,fileName:d}}}}catch(o){console.error(o)}return((t=a.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,r},Gn=function(a){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var r=a.response.data.errors,n=r===void 0?[]:r,d=n&&n[0]||{};return Promise.reject({message:d.message||a.message||t,arguments:d.arguments||void 0,code:d.code||null})}return Promise.reject({message:a.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},Yn=function(a,t,r){t&&a.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&a.interceptors.response.use(function(n){return n},r),a.interceptors.response.use(Fn,Gn)},Hn=function(a){var t=a.config,r=t===void 0?{}:t,n=a.requestInterceptorsCallback,d=a.responseInterceptorOnSuccessCallback,o=a.responseInterceptorOnErrorCallback,x=(0,Sn.Z)(Bn(),r),P=Le.Z.create(x);$n(P,n),Yn(P,d,o);function w(j,X,Z){return P.request(u()({url:j,params:X},Z))}function b(j,X,Z){return P.request(u()({url:j,method:"post",params:X},Z))}function N(j,X,Z){return P.request(u()({url:j,method:"put",params:X},Z))}function Q(j,X,Z){return P.request(u()({url:j,method:"delete",params:X},Z))}return{get:w,post:b,del:Q,put:N}},Xn=Hn,Jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Zn=function(a){var t=a.imgList,r=(0,U.useState)(!1),n=q()(r,2),d=n[0],o=n[1],x=(0,U.useState)(""),P=q()(x,2),w=P[0],b=P[1],N=(0,U.useState)([]),Q=q()(N,2),j=Q[0],X=Q[1],Z=(0,U.useState)([]),z=q()(Z,2),J=z[0],le=z[1],Ie=function se(de,pe,ee){var ne=new Image,te=pe+1;ne.src=de,ne.onload=function(){X(function(B){return[].concat(m()(B),[de])}),le(function(B){return[].concat(m()(B),[de])}),ee||b(de),pe<t.length-1?se(t[te],te,!0):o(!1)},ne.onerror=function(){X(function(B){return[].concat(m()(B),[Jn])}),te<t.length-1?se(t[te],te):o(!1)}};return(0,U.useEffect)(function(){(t==null?void 0:t.length)>1&&(o(!0),Ie(t==null?void 0:t[0],0))},[]),console.log([w,j,J,d]),j.length!==t.length?["",[],[],!0]:[w,j,J,d]},Vn=Zn,qn=e(17061),xe=e.n(qn),et=e(17156),Se=e.n(et);function nt(I){var a=I.dataSource,t=I.delay,r=t===void 0?100:t,n=I.pageSize,d=n===void 0?10:n,o=I.fetchData,x=(0,U.useState)(!1),P=q()(x,2),w=P[0],b=P[1],N=(0,U.useState)(!0),Q=q()(N,2),j=Q[0],X=Q[1],Z=(0,U.useState)([]),z=q()(Z,2),J=z[0],le=z[1];function Ie(){return se.apply(this,arguments)}function se(){return se=Se()(xe()().mark(function de(){return xe()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(!(!(a!=null&&a.length)&&!o)){ee.next=2;break}return ee.abrupt("return");case 2:if(!(!j||w)){ee.next=4;break}return ee.abrupt("return");case 4:if(b(!0),!a){ee.next=10;break}return ee.next=8,new Promise(function(ne){setTimeout(function(){ne(a==null?void 0:a.slice(J.length,J.length+d))},r)}).then(function(ne){X((J==null?void 0:J.length)+(ne==null?void 0:ne.length)<(a==null?void 0:a.length)),le(function(te){return te==null?void 0:te.concat(ne)})});case 8:ee.next=12;break;case 10:return ee.next=12,o==null?void 0:o({pageNum:J!=null&&J.length?Math.ceil((J==null?void 0:J.length)/d)+1:1,pageSize:d}).then(function(ne){var te=ne.list,B=te===void 0?[]:te,ue=ne.total,ge=ue===void 0?0:ue;X((J==null?void 0:J.length)+(B==null?void 0:B.length)<ge&&(B==null?void 0:B.length)>0),le(function(Pe){return Pe==null?void 0:Pe.concat(B)})});case 12:b(!1);case 13:case"end":return ee.stop()}},de)})),se.apply(this,arguments)}return{data:J,setData:le,loading:w,hasMore:j,loadMore:Ie}}var tt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(0,U.useState)(!1),n=q()(r,2),d=n[0],o=n[1],x=(0,U.useRef)(null);return(0,U.useEffect)(function(){var P=new IntersectionObserver(function(w){w.forEach(function(b){b.isIntersecting?(o(!0),t&&P.unobserve(b.target)):o(!1)})},a);return x!=null&&x.current&&P.observe(x.current),function(){x!=null&&x.current&&P.unobserve(x.current)}},[a,t]),[x,d]},at=tt,rt=function(a){var t=(0,U.useRef)({});return(0,U.useLayoutEffect)(function(){t.current=a}),(0,U.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},ot=rt,ut=function(){var a=(0,U.useState)({width:window.innerWidth,height:window.innerHeight}),t=q()(a,2),r=t[0],n=t[1],d=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,U.useLayoutEffect)(function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}},[]),{width:r.width,height:r.height}},it=ut;function st(){var I=(0,U.useRef)(!1),a=(0,U.useCallback)(function(){return I.current},[]);return(0,U.useEffect)(function(){return I.current=!0,function(){I.current=!1}},[]),a}function Te(I){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},r=(0,U.useRef)(0),n=st(),d=(0,U.useState)(t),o=q()(d,2),x=o[0],P=o[1],w=(0,U.useCallback)(function(){var b=++r.current;return x.loading||P(function(N){return u()(u()({},N),{},{loading:!0})}),I.apply(void 0,arguments).then(function(N){return n()&&b===r.current&&P({value:N,loading:!1}),N},function(N){return n()&&b===r.current&&P({error:N,loading:!1}),N})},a);return[x,w]}var dt=function(a,t){var r=(0,U.useRef)(),n=function(){if(r.current)throw r.current.abort(),new Error(" Canceled .")};U.useEffect(function(){return function(){r.current&&r.current.abort()}},[]);var d=Te(Se()(xe()().mark(function o(){var x,P,w,b,N=arguments;return xe()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return r.current&&r.current.abort(),r.current=new AbortController,x=r.current.signal,P={cancelInterceptor:n},j.next=6,a(P);case 6:return w=j.sent,j.next=9,w.apply(void 0,N);case 9:return b=j.sent,j.abrupt("return",b);case 11:case"end":return j.stop()}},o)})),t);return d},lt=dt},69111:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(55832);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u6DFB\u52A0\u52A8\u753B",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"on",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"off",paraId:1,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:1,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},58025:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(66397);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},81253:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(23629);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u5706\u5F62\u5706\u5F27",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"path2D",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u56FE\u5F62\u7684 Path2D",paraId:1,tocIndex:3},{value:"Path2D",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},4053:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(49011);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u62D6\u62FD\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u7ED9\u5143\u7D20\u6DFB\u52A0 draggable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8FD9\u662F boolean \u503C\u6216\u8005 \u51FD\u6570\u63A5\u6536 \u9F20\u6807\u4E8B\u4EF6\u53C2\u6570",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},76631:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(50138);const u=[{value:"\u57FA\u4E8E canvas \u4E2D\u56FE\u5F62\u7684\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 on \u65B9\u6CD5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F7F\u7528 off \u65B9\u6CD5\u89E3\u7ED1\u4E8B\u4EF6\u3002",paraId:1,tocIndex:2},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"on",paraId:2,tocIndex:3},{value:"\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"off",paraId:2,tocIndex:3},{value:"\u89E3\u7ED1\u5B9A\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"(event: string, callback: (e: MouseEvent) => void,node:\u539F\u751F\u539F\u578B) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},96627:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(52192);const u=[{value:"\u5C06\u591A\u4E2A\u56FE\u5F62\u7F16\u7EC4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"radius",paraId:1,tocIndex:3},{value:"\u534A\u5F84",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startAngle",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"endAngle",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"border",paraId:1,tocIndex:3},{value:"\u8FB9\u6846 // 0 \u586B\u5145 1 \u53EA\u6709\u8FB9\u6846 2 \u8FB9\u6846\u548C\u586B\u5145",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},48977:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(54197);const u=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},13155:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(10372);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u76F4\u7EBF\u3001\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u3001\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"start",paraId:1,tocIndex:3},{value:"\u8D77\u59CB\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"end",paraId:1,tocIndex:3},{value:"\u7ED3\u675F\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"object",paraId:1,tocIndex:3},{value:"{}",paraId:1,tocIndex:3},{value:"points",paraId:1,tocIndex:3},{value:"\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u70B9\u5750\u6807",paraId:1,tocIndex:3},{value:"array",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3},{value:"smooth",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5E73\u6ED1",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"lineCap",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u7AEF\u70B9\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"butt",paraId:1,tocIndex:3},{value:"lineJoin",paraId:1,tocIndex:3},{value:"\u7EBF\u6761\u8FDE\u63A5\u7C7B\u578B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"miter",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},12477:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(89131);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u77E9\u5F62",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"height",paraId:1,tocIndex:3},{value:"\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"fillStyle",paraId:1,tocIndex:3},{value:"\u586B\u5145\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"strokeStyle",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#000",paraId:1,tocIndex:3},{value:"lineWidth",paraId:1,tocIndex:3},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"draggable",paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u62D6\u52A8",paraId:1,tocIndex:3},{value:"(evt: MouseEvent) => void / boolean;",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3}]},25924:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(18283);const u=[{value:"name",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"default",paraId:0,tocIndex:4},{value:"container",paraId:0,tocIndex:4},{value:"\u5BB9\u5668 dom",paraId:0,tocIndex:4},{value:"HTMLElement",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"width",paraId:0,tocIndex:4},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"height",paraId:0,tocIndex:4},{value:"\u9AD8\u5EA6",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"backgroundColor",paraId:0,tocIndex:4},{value:"\u80CC\u666F\u8272",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"#fff",paraId:0,tocIndex:4}]},27837:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(70821);const u=[{value:"\u57FA\u4E8E canvas \u7ED8\u5236\u7684\u6587\u5B57",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"x",paraId:1,tocIndex:3},{value:"x \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"y",paraId:1,tocIndex:3},{value:"y \u5750\u6807",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"content",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u5BB9",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"fontSize",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"16",paraId:1,tocIndex:3},{value:"textAlign",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u5BF9\u9F50",paraId:1,tocIndex:3},{value:"CanvasTextAlign",paraId:1,tocIndex:3},{value:"textBaseline",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u57FA\u51C6\u7EBF",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"CanvasTextBaseline",paraId:1,tocIndex:3},{value:"direction",paraId:1,tocIndex:3},{value:"\u6587\u672C\u65B9\u5411",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"fontStyle",paraId:1,tocIndex:3},{value:"\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"#333",paraId:1,tocIndex:3},{value:"fontVariant",paraId:1,tocIndex:3},{value:"\u5B57\u4F53\u53D8\u4F53",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"textDecoration",paraId:1,tocIndex:3},{value:"\u6587\u672C\u4FEE\u9970",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"align",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"verticalAlign",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"padding",paraId:1,tocIndex:3},{value:"\u6587\u672C\u5185\u8FB9\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"lineHeight",paraId:1,tocIndex:3},{value:"\u884C\u9AD8",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"1",paraId:1,tocIndex:3},{value:"letterSpacing",paraId:1,tocIndex:3},{value:"\u5B57\u7B26\u95F4\u8DDD",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"index",paraId:1,tocIndex:3},{value:"\u5C42\u7EA7",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},9978:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(26211);const u=[{value:"\u4E3A\u5565\u53EB ",paraId:0,tocIndex:0},{value:"heitu",paraId:0,tocIndex:0},{value:`
\u672C\u4EBA\u73A9 LOL \u7684\u7B2C\u4E00\u4E2A\u82F1\u96C4\u662F `,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:`,\u83B7\u5F97\u7684\u7B2C\u4E00\u4E2A\u76AE\u80A4\u662F\u9ED1\u8272\u7684\u90A3\u6B3E\uFF0C\u6240\u4EE5\u8D77\u540D\u5C31\u53EB\u4E86\u9ED1\u5154
\u559C\u6B22`,paraId:0,tocIndex:0},{value:"\u6CE2\u6BD4",paraId:0,tocIndex:0},{value:" \u7684\u5927\u62DB\u7ED9\u4E00\u4E2A\u5BF9\u65B9\u89D2\u8272\uFF0C\u522B\u7684\u89D2\u8272\u4E0D\u4F1A\u5BF9\u5979\u9020\u6210\u4F24\u5BB3\uFF0C\u5E0C\u671B\u6211\u7684\u5E93\u4E5F\u80FD\u50CF\u5979\u7684\u5927\u62DB\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"heitu",paraId:1,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:1,tocIndex:0},{value:"hook",paraId:1,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:1,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:2,tocIndex:1}]},69236:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(29876);const u=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(93139);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(72155);const u=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(64577);const u=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(28587);const u=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(59301);const u=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(48035);const u=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(56139);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(38668);const u=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81233);const u=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(35412);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(1019);const u=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(40801);const u=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(44012);const u=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(74746);const u=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(81286);const u=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(5480);const u=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(51530);const u=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(68537);const u=[]},87724:function(T,l,e){e.r(l),e.d(l,{texts:function(){return u}});var O=e(79930);const u=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(T,l){l.Z=`import { Stage, useResizeObserver } from 'heitu';
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
`},66969:function(T,l){l.Z=`import { Animate, Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);

  const _stage = new Stage();

  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
  });
  const _circle2 = new Circle({
    x: 200,
    y: 50,
    radius: 20,
    strokeStyle: 'blue',
    fillStyle: 'orange',
    lineWidth: 1,
    border: 0,
  });

  _stage.add(_circle1, _circle2);

 
  const onclick = () => {
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const x = _circle1.x;
    const y = _circle1.y;
    let curX = _circle1.x;
    let curY = _circle1.y;
    const onUpdate = (_, elapsedTimeRatio) => {
      curX = (300 - curX) * elapsedTimeRatio;
      curY = (400 - curY) * elapsedTimeRatio;
      _circle1.attr({ x: x + curX, y: y + curY });
    };
    ani.pushQueue(onUpdate);
  };

  _circle1.on('click', onclick);

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
    const radius = _circle2.radius;
    let curRadius = _circle2.radius;

    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;

      _circle2.attr({ radius: radius + curRadius });
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
};

export default StageDemo;

// import React, { useEffect, useRef, useState } from 'react';

// const CanvasAnimation = () => {
//   const canvasRef = useRef(null);
//   const [position, setPosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     let animationFrameId;

//     const draw = () => {
//       // \u6E05\u9664\u753B\u5E03
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // \u7ED8\u5236\u4E00\u4E2A\u7B80\u5355\u7684\u5706
//       context.beginPath();
//       context.arc(position.x, position.y, 20, 0, 2 * Math.PI);
//       context.fillStyle = 'blue';
//       context.fill();
//       context.closePath();

//       // \u66F4\u65B0\u4F4D\u7F6E
//       setPosition((prev) => ({
//         x: prev.x + 2,
//         y: prev.y + 2,
//       }));

//       // \u9012\u5F52\u8C03\u7528\u4EE5\u66F4\u65B0\u4E0B\u4E00\u5E27
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     // \u542F\u52A8\u52A8\u753B
//     animationFrameId = requestAnimationFrame(draw);

//     // \u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u53D6\u6D88\u52A8\u753B
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [position]);

//   return <canvas ref={canvasRef} width={400} height={400} />;
// };

// export default CanvasAnimation;
`}}]);
