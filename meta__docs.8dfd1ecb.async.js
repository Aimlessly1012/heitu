"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(54197),W={"docs-canvas-demo-0":{component:L.memo(L.lazy(M()(l()().mark(function S(){var y,I,m,r,p,d,g,c;return l()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,26113));case 2:return y=P.sent,I=y.Custom,m=y.Stage,r=y.useResizeObserver,P.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return p=P.sent,d=p.default,g=p.useLayoutEffect,c=p.useRef,P.abrupt("return",{default:function(){var U=c(null),B=new m,T=new Path2D;T.moveTo(200,240),T.bezierCurveTo(200,200,120,150,120,200),T.bezierCurveTo(120,280,200,300,200,340),T.bezierCurveTo(200,300,280,280,280,200),T.bezierCurveTo(280,150,200,200,200,240);var K=new I({path2D:T,fillStyle:"pink",strokeStyle:"red"});return B.add(K),g(function(){B.buildContentDOM({container:U.current,backgroundColor:"#fff"})},[]),r(U,function(){return B._resizeDOM()}),d.createElement(d.Fragment,null,d.createElement("div",{ref:U}))}});case 13:case"end":return P.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26113),react:e(67294)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},67023:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(18283),W={"docs-canvas-stage-demo-stagedemo1":{component:L.memo(L.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26113),react:e(67294)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}},"docs-canvas-stage-demo-stagedemo":{component:L.memo(L.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26113),react:e(67294)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},66940:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(97452),C={}},44401:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(26211),C={}},97086:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(29876),C={}},75326:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(72155),C={}},31701:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(64577),y={"docs-hooks-use-cookie-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,r=m.default,c.next=6,Promise.resolve().then(e.bind(e,26113));case 6:return p=c.sent,d=p.useCookie,c.abrupt("return",{default:function(){var P={path:"/"},D="cookie-key",U=d(D,P,"default-value"),B=M()(U,3),T=B[0],K=B[1],$=B[2],H=function(){K("new-cookie-value")},J=function(){K(void 0)},V=function(){if("cookieStore"in window){var b=window.cookieStore;b.set({name:D,value:"changed"})}else document.cookie="".concat(D,"=changed; path=/")};return r.createElement("div",null,r.createElement("p",null,"Click on the button to update or clear the cookie"),r.createElement("p",{color:"blue"},"cookie: ",T||"no value"),r.createElement("button",{onClick:H},"Update the cookie"),r.createElement("button",{onClick:J},"Clear the cookie"),r.createElement("button",{onClick:V},"Changing the cookie through other methods"),r.createElement("button",{onClick:$},"Refresh the cookie"))}});case 9:case"end":return c.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},67731:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(28587),y={"docs-hooks-use-count-down-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,r=m.default,c.next=6,Promise.resolve().then(e.bind(e,26113));case 6:return p=c.sent,d=p.useCountDown,c.abrupt("return",{default:function(){var P=d(),D=M()(P,3),U=D[0],B=D[1],T=D[2];return r.createElement("div",null,U,r.createElement("button",{onClick:function(){B(60)}},"\u5F00\u59CB"),r.createElement("button",{onClick:function(){T()}},"\u6682\u505C"),r.createElement("button",{onClick:function(){B()}},"\u7EE7\u7EED"))}});case 9:case"end":return c.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},66609:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(59301),y={"docs-hooks-use-deep-compare-effect-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d,g,c,z;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=D.sent,r=m.default,p=m.useState,d=m.useEffect,g=m.useRef,D.next=9,Promise.resolve().then(e.bind(e,26113));case 9:return c=D.sent,z=c.useDeepCompareEffect,D.abrupt("return",{default:function(){var B=p(0),T=M()(B,2),K=T[0],$=T[1],H=g(0),J=g(0);return d(function(){H.current+=1},[{}]),z(function(){return J.current+=1,function(){}},[{}]),r.createElement("div",null,r.createElement("p",null,"effectCount: ",H.current),r.createElement("p",null,"deepCompareCount: ",J.current),r.createElement("p",null,r.createElement("button",{type:"button",onClick:function(){return $(function(ne){return ne+1})}},"reRender")))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},5958:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(48035),W={"docs-hooks-use-device-pixel-ratio-demo-0":{component:L.memo(L.lazy(M()(l()().mark(function S(){var y,I,m,r;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return y=d.sent,I=y.default,d.next=6,Promise.resolve().then(e.bind(e,26113));case 6:return m=d.sent,r=m.useDevicePixelRatio,d.abrupt("return",{default:function(){var c=r(),z=c.pixelRatio;return I.createElement("p",null,"Device pixel ratio: ",z)}});case 9:case"end":return d.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},65585:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(56139),W={"docs-hooks-use-element-size-demo-0":{component:L.memo(L.lazy(M()(l()().mark(function S(){var y,I,m,r,p,d;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return y=c.sent,I=y.default,m=y.useRef,r=y.useEffect,c.next=8,Promise.resolve().then(e.bind(e,26113));case 8:return p=c.sent,d=p.useElementSize,c.abrupt("return",{default:function(){var P=m(null),D=d(P);return r(function(){console.log(P.current.mount)},[]),I.createElement("div",null,I.createElement("textarea",{ref:P,disabled:!0,style:{width:200,height:200},value:"width: ".concat(D.width,`
height: `).concat(D.height)}))}});case 11:case"end":return c.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},23897:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(38668),W={"docs-hooks-use-ht-axios-demo-0":{component:L.memo(L.lazy(M()(l()().mark(function S(){var y,I,m,r;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,26113));case 2:return y=d.sent,I=y.useHtAxios,d.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=d.sent,r=m.default,d.abrupt("return",{default:function(){var c=I({config:{timeout:3e3},requestInterceptorsCallBack:function(D){return D},responseInterceptorsCallBack:function(D){return D.data}}),z=function(){var P=M()(l()().mark(function D(){var U;return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,c.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:U=T.sent,console.log(U);case 4:case"end":return T.stop()}},D)}));return function(){return P.apply(this,arguments)}}();return r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},r.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){z()}},"123"))}});case 9:case"end":return d.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26113),react:e(67294)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},97716:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(81233),y={"docs-hooks-use-image-load-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,r=m.default,c.next=6,Promise.resolve().then(e.bind(e,26113));case 6:return p=c.sent,d=p.useImageLoad,c.abrupt("return",{default:function(){var P=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],D=d({imgList:P}),U=M()(D,4),B=U[0],T=U[1],K=U[2],$=U[3];return r.createElement("div",{style:{display:"flex"}},$?"loading":r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("div",null,"img"),r.createElement("img",{src:B,style:{width:200}})),r.createElement("div",null,r.createElement("div",null,"ftimgList"),T==null?void 0:T.map(function(H,J){return r.createElement("img",{src:H,key:J,style:{width:200}})})),r.createElement("div",null,r.createElement("div",null,"allowImgList"),K==null?void 0:K.map(function(H,J){return r.createElement("img",{src:H,key:J,style:{width:200}})}))))}});case 9:case"end":return c.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},79817:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(35412),y={"docs-hooks-use-in-view-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,r=m.default,c.next=6,Promise.resolve().then(e.bind(e,26113));case 6:return p=c.sent,d=p.useInView,c.abrupt("return",{default:function(){var P=d(),D=M()(P,2),U=D[0],B=D[1];return r.createElement("div",null,r.createElement("div",null,B?"active":"inactive"),r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},r.createElement("div",{ref:U},"12312312")))}});case 9:case"end":return c.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},59842:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(1019),y={"docs-hooks-use-infinite-scroll-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d,g,c,z;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return z=function(B){var T=B.hasMore,K=B.loadMore,$=c(),H=M()($,2),J=H[0],V=H[1];return p(function(){V&&T&&(K==null||K())},[T,V,K]),r.createElement("div",{ref:J},T?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},D.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return m=D.sent,r=m.default,p=m.useEffect,D.next=8,Promise.resolve().then(e.bind(e,26113));case 8:return d=D.sent,g=d.useInfiniteScroll,c=d.useInView,D.abrupt("return",{default:function(){var B=new Array(100).fill(1).map(function(J,V){return V}),T=g({dataSource:B,pageSize:10,delay:100}),K=T.data,$=T.hasMore,H=T.loadMore;return r.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},K==null?void 0:K.map(function(J){return r.createElement("span",null,J)}),r.createElement(z,{loadMore:H,hasMore:$}))}});case 12:case"end":return D.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},10610:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(65808),C={}},13917:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(44012),C={}},37868:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(74746),y={"docs-hooks-use-previous-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d,g,c;return l()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=P.sent,r=m.default,p=m.useState,P.next=7,Promise.resolve().then(e.bind(e,26113));case 7:return d=P.sent,g=d.usePrevious,c=function(U){var B=g(U);return console.log(B,U),r.createElement("div",null,r.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(B==null?void 0:B.aa)||0," "),r.createElement("div",null,"\u5F53\u524D\u7684aa: ",U==null?void 0:U.aa))},P.abrupt("return",{default:function(){var U=p(1),B=M()(U,2),T=B[0],K=B[1];return r.createElement("div",null,r.createElement("button",{onClick:function(){return K(T+1)}},"+1"),r.createElement(c,{aa:T}))}});case 11:case"end":return P.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},7411:function(x,u,e){e.r(u),e.d(u,{demos:function(){return y}});var _=e(17061),l=e.n(_),C=e(27424),M=e.n(C),L=e(17156),h=e.n(L),W=e(67294),S=e(81286),y={"docs-hooks-use-resize-observer-demo-0":{component:W.memo(W.lazy(h()(l()().mark(function I(){var m,r,p,d,g,c;return l()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=P.sent,r=m.default,p=m.useRef,d=m.useState,P.next=8,Promise.resolve().then(e.bind(e,26113));case 8:return g=P.sent,c=g.useResizeObserver,P.abrupt("return",{default:function(){var U=p(null),B=d({width:0,height:0}),T=M()(B,2),K=T[0],$=T[1];return c(U,function(H){var J=M()(H,1),V=J[0],ne=V.contentRect,b=ne.width,de=ne.height;$({width:b,height:de})}),r.createElement("div",null,r.createElement("textarea",{ref:U,disabled:!0,style:{width:200,height:200},value:"width: ".concat(K.width,`
height: `).concat(K.height)}))}});case 11:case"end":return P.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26113)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var p,d=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,d));case 3:case"end":return c.stop()}},r)}));function m(){return I.apply(this,arguments)}return m}()}}}},91805:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(68145),C={}},9954:function(x,u,e){e.r(u),e.d(u,{demos:function(){return W}});var _=e(17061),l=e.n(_),C=e(17156),M=e.n(C),L=e(67294),h=e(51530),W={"docs-hooks-use-window-size-demo-0":{component:L.memo(L.lazy(M()(l()().mark(function S(){var y,I,m;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,26113));case 2:return y=p.sent,I=y.useWindowSize,m=function(){var g=I(),c=g.width,z=g.height;return L.createElement("div",null,L.createElement("p",null,"width: ",c,", height: ",z))},p.abrupt("return",{default:m});case 6:case"end":return p.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(26113)},renderOpts:{compile:function(){var S=M()(l()().mark(function I(){var m,r=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},11171:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(68537),C={}},6202:function(x,u,e){e.r(u),e.d(u,{demos:function(){return C}});var _=e(67294),l=e(79930),C={}},26113:function(x,u,e){e.r(u),e.d(u,{Circle:function(){return xe},Custom:function(){return ye},Line:function(){return _e},Rect:function(){return V},Stage:function(){return Ne},Text:function(){return H},useCookie:function(){return Fe},useCountDown:function(){return Ze},useDeepCompareEffect:function(){return et},useDevicePixelRatio:function(){return nt},useElementSize:function(){return at},useHtAxios:function(){return Pt},useImageLoad:function(){return Ot},useInView:function(){return wt},useInfiniteScroll:function(){return Tt},usePrevious:function(){return Ut},useResizeObserver:function(){return fe},useWindowSize:function(){return kt}});var _=e(56690),l=e.n(_),C=e(89728),M=e.n(C),L=e(66115),h=e.n(L),W=e(61655),S=e.n(W),y=e(26389),I=e.n(y),m=e(38416),r=e.n(m),p=e(861),d=e.n(p),g=window.devicePixelRatio,c=function(){},z=function(a){return a.name==="Stage"},P=function(a,i){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(i)).map(function(o){return[o.name,o]})).values())},D=function(a,i,o){return o!=null&&o.x&&o!==null&&o!==void 0&&o.width&&o.y&&o!==null&&o!==void 0&&o.height?a>(o==null?void 0:o.x)*g&&a<(((o==null?void 0:o.x)||0)+((o==null?void 0:o.width)||0))*g&&i>(o==null?void 0:o.y)*g&&i<o.y*g+o.height*g:!1},U=function(a){var i=a.mouseX,o=a.mouseY,t=a.path2D,s=a.ctx;return t&&s&&(s==null?void 0:s.isPointInPath(t,i,o))},B=e(30954),T=function(){function f(){l()(this,f),r()(this,"eventListeners",{}),r()(this,"shapeEventListeners",{})}return M()(f,[{key:"on",value:function(i,o){var t=i.split(" "),s=t.length,n,v,E,O;for(n=0;n<s;n++)v=t[n],E=v.split("."),O=E[0],this.eventListeners[O]||(this.eventListeners[O]=[]),this.eventListeners[O].push({name:o.name||"",handler:o}),this!==null&&this!==void 0&&this.parent&&z(this===null||this===void 0?void 0:this.parent)&&(this!==null&&this!==void 0&&this.parent.shapeEventListeners[O]||(this.parent.shapeEventListeners[O]=[]),this.parent.shapeEventListeners[O].push({name:o.name||"",handler:o}));return this}},{key:"_off",value:function(i,o,t){var s=this.eventListeners[i],n,v,E;for(n=0;n<s.length;n++)if(v=s[n].name,E=s[n].handler,(!o||v===o)&&(!t||t===E)){if(s.splice(n,1),s.length===0){delete this.eventListeners[i];break}n--}}},{key:"off",value:function(i,o){var t=(i||"").split(" "),s=t.length,n,v,E,O,A,R;for(n=0;n<s;n++)if(E=t[n],O=E.split("."),A=O[0],R=O[1],A)this.eventListeners[A]&&this._off(A,R,o);else for(v in this.eventListeners)this._off(v,R,o);return this}},{key:"_fire",value:function(i,o,t){z(t)?this.eventListeners[i].forEach(function(s){s.handler(o)}):this.shapeEventListeners[i].forEach(function(s){s.handler(o)})}},{key:"fire",value:function(i,o){var t=o.evt,s=o.target,n=o.currentTarget;if(z(n)){(!this.eventListeners[i]||this.eventListeners[i].length<1)&&(this.eventListeners[i]=[]),this._fire(i,t,n);for(var v=s==null?void 0:s.children,E=0;E<v.length;E++){(!this.shapeEventListeners[i]||this.shapeEventListeners[i].length<1)&&(this.shapeEventListeners[i]=[]);var O=d()(this.children.filter(function(q){return q.draggable}));if(i==="mousedown"){var A=O.filter(function(q){var Y;return q==null?void 0:q.inScope(t,(Y=s.canvas)===null||Y===void 0?void 0:Y.context)}),R=A.sort(function(q,Y){return Y.index-q.index})[0];R&&(R.dragging=!0,R.offsetX=R!=null&&R.x?t.offsetX-(R==null?void 0:R.x):t.offsetX,R.offsetY=R!=null&&R.y?t.offsetY-(R==null?void 0:R.y):t.offsetY)}this.fire(i,{evt:t,target:s,currentTarget:v[E]})}}else{var Q;if(n!=null&&n.draggable&&i==="mouseup"&&(n.dragging=!1),n!=null&&n.draggable&&n.dragging&&i==="mousemove"){var j,w=(j=this.canvas)===null||j===void 0||(j=j.canvas)===null||j===void 0?void 0:j.getBoundingClientRect();if(n.name==="Text"){var F=w!=null&&w.left?t.clientX-(w==null?void 0:w.left):t.clientX,oe=w!=null&&w.top?t.clientY-(w==null?void 0:w.top):t.clientY;n.x=n!=null&&n.offsetX?F-(n==null?void 0:n.offsetX):F,n.y=n!=null&&n.offsetY?oe-(n==null?void 0:n.offsetY):oe}else{var N=w!=null&&w.left?t.clientX-(w==null?void 0:w.left):t.clientX,re=w!=null&&w.top?t.clientY-(w==null?void 0:w.top):t.clientY;n.x=n!=null&&n.offsetX?N-(n==null?void 0:n.offsetX):N,n.y=n!=null&&n.offsetY?re-(n==null?void 0:n.offsetY):re}this.batchDraw(this)}if(n!=null&&n.inScope&&(Q=s.canvas)!==null&&Q!==void 0&&Q.context){var ie;if(n!=null&&n.inScope(t,(ie=s.canvas)===null||ie===void 0?void 0:ie.context)){var ee;i!=="mouseenter"&&i!=="mouseleave"&&i!=="mouseout"&&i!=="mouseover"&&this._fire(i,t,n),i==="mousemove"&&!n.mouseInScope&&((ee=s.shapeEventListeners.mouseenter)===null||ee===void 0?void 0:ee.length)>0&&(n.mouseInScope=!0,s._fire("mouseenter",t,n))}else if(i==="mousemove"){var te;n.mouseInScope=!1,((te=s.shapeEventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&s._fire("mouseleave",t,n)}}}}}]),f}(),K=T,$=function(f){S()(i,f);var a=I()(i);function i(o){var t;if(l()(this,i),t=a.call(this),r()(h()(t),"name","Text"),r()(h()(t),"parent",null),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"content",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"fontFamily",void 0),r()(h()(t),"fontSize",void 0),r()(h()(t),"textAlign",void 0),r()(h()(t),"textBaseline",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"index",0),t.content="",!o.content&&!t.content)throw new Error("Text must has content");return t.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",t.fillStyle="#333",t.fontSize=14,t.textAlign="left",t.textBaseline="top",t.x=100,t.y=100,(0,B.Z)(o,function(s,n){s&&(h()(t)[n]=s)}),t}return M()(i,[{key:"draw",value:function(t){t.font="".concat(this.fontSize,"px ").concat(this.fontFamily),t.textBaseline=this.textBaseline,t.textAlign=this.textAlign,t.fillStyle=this.fillStyle,t.fillText(this.content,this.x,this.y);var s=t.measureText(this.content);return this.width=s.width,this.height=this.fontSize,this}},{key:"inScope",value:function(t){var s=t.offsetX*g,n=t.offsetY*g;return D(s,n,this)}}]),i}(K),H=$,J=function(f){S()(i,f);var a=I()(i);function i(o){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Rect"),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),t.x=100,t.y=100,t.width=100,t.height=100,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=null,t.path2D=null,t.index=0,(0,B.Z)(o,function(s,n){s&&(h()(t)[n]=s)}),t}return M()(i,[{key:"draw",value:function(t){var s=new Path2D;return s.moveTo(this.x,this.y),s.lineTo(this.x+this.width,this.y),s.lineTo(this.x+this.width,this.y+this.height),s.lineTo(this.x,this.y+this.height),s.closePath(),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(s),this.fillStyle&&t.fill(s),this.path2D=s,this}},{key:"inScope",value:function(t,s){var n=t.offsetX*g,v=t.offsetY*g;return this!==null&&this!==void 0&&this.path2D?U({mouseX:n,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),V=J,ne=e(27424),b=e.n(ne),de=function(f){S()(i,f);var a=I()(i);function i(o){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Line"),r()(h()(t),"start",void 0),r()(h()(t),"end",void 0),r()(h()(t),"points",void 0),r()(h()(t),"smooth",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"lineCap",void 0),r()(h()(t),"lineJoin",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),t.start={x:10,y:10},t.end={x:100,y:100},t.points=[],t.strokeStyle="black",t.lineWidth=1,t.lineCap="butt",t.lineJoin="miter",t.smooth=!1,t.index=0,t.path2D=null,(0,B.Z)(o,function(s,n){s&&(h()(t)[n]=s)}),t}return M()(i,[{key:"convertToNormalPoints",value:function(t){return t.reduce(function(s,n,v){var E=Math.floor(v/2);return v%2===0?s.push([n]):s[E].push(n),s},[]).map(function(s){var n=b()(s,2),v=n[0],E=n[1];return{x:v,y:E}})}},{key:"calcSmoothPath2D",value:function(){var t,s,n,v=new Path2D;return v.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0),v.moveTo(this.start.x,(n=this.start)===null||n===void 0?void 0:n.y),this.points.length===2&&v.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&v.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=v,v}},{key:"calcStraightPath2D",value:function(){var t,s,n,v,E=new Path2D;E.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0);var O=this.convertToNormalPoints([].concat(d()(this.points),[(n=this.end)===null||n===void 0?void 0:n.x,(v=this.end)===null||v===void 0?void 0:v.y]));return O.forEach(function(A){var R=A.x,Q=A.y;E.lineTo(R,Q)}),E}},{key:"draw",value:function(t){var s=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(s),this}},{key:"inScope",value:function(t,s){var n=t.offsetX*g,v=t.offsetY*g;return this!==null&&this!==void 0&&this.path2D?U({mouseX:n,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),_e=de,ge=function(f){S()(i,f);var a=I()(i);function i(o){var t;if(l()(this,i),t=a.call(this),r()(h()(t),"name","Custom"),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),!o.path2D)throw new Error("Mast has key of path2D");return t.x=100,t.y=100,t.width=0,t.height=0,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=1,t.path2D=null,t.index=0,(0,B.Z)(o,function(s,n){s&&(h()(t)[n]=s)}),t}return M()(i,[{key:"draw",value:function(t){if(this.path2D)return this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(this.path2D),this.fillStyle&&t.fill(this.path2D),this}},{key:"inScope",value:function(t,s){var n=t.offsetX*g,v=t.offsetY*g;return this!==null&&this!==void 0&&this.path2D?U({mouseX:n,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),ye=ge,Ae=function(f){S()(i,f);var a=I()(i);function i(o){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Circle"),r()(h()(t),"parent",null),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"radius",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"arc",void 0),r()(h()(t),"startAngle",void 0),r()(h()(t),"endAngle",void 0),r()(h()(t),"innerRadius",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"border",void 0),t.x=10,t.y=10,t.radius=8,t.fillStyle="",t.strokeStyle="",t.lineWidth=1,t.startAngle=0,t.endAngle=360,t.border=0,t.innerRadius=0,t.arc=!1,t.index=0,t.path2D=null,(0,B.Z)(o,function(s,n){s&&(h()(t)[n]=s)}),t}return M()(i,[{key:"deg2rad",value:function(t){return t*Math.PI/180}},{key:"getPointOnArc",value:function(t,s,n,v){var E=this.deg2rad(v),O=t+n*Math.cos(E),A=s+n*Math.sin(E);return{x:O,y:A}}},{key:"calcWholeRingD",value:function(){var t=this.x-this.radius,s="M ".concat(this.x," ").concat(t),n="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(t),v=this.y-this.innerRadius,E="M ".concat(this.x," ").concat(v),O="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(v);return"".concat(s," ").concat(n," ").concat(E," ").concat(O," Z")}},{key:"calcRingSectorD",value:function(){var t=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),s=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),n=this.endAngle-this.startAngle>=180?1:0,v="M ".concat(t.x," ").concat(t.y),E="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(n," 1 ").concat(s.x," ").concat(s.y),O=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),A=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),R="L".concat(A.x," ").concat(A.y),Q="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(n," 0 ").concat(O.x," ").concat(O.y);return"".concat(v," ").concat(E," ").concat(R," ").concat(Q," Z")}},{key:"calcRingD",value:function(t){return t?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(t){var s=this.startAngle===0&&this.endAngle===360,n;switch(this.border){case 0:return n=new Path2D(this.calcRingD(s)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.fillStyle&&(t.strokeStyle=this.fillStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(n),t.fill(n),this.path2D=n,n;case 1:return n=new Path2D(this.calcRingD(s)),t.lineWidth=this.lineWidth,this.strokeStyle&&(t.strokeStyle=this.strokeStyle),t.stroke(n),this.path2D=n,n;case 2:return n=new Path2D(this.calcRingD(s)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(n),t.fill(n),this.path2D=n,n}}},{key:"inScope",value:function(t,s){var n=t.offsetX*g,v=t.offsetY*g;return this!==null&&this!==void 0&&this.path2D?U({mouseX:n,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),xe=Ae,ue=null,Ce=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(f){setTimeout(f,60)},Pe=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(i){}return a},Qt=function(a){ue.push(a),ue.length===1&&Ce(function(){var i=ue;ue=[],i.forEach(function(o){o()})})},De=function(){function f(){l()(this,f),r()(this,"canvas",void 0),r()(this,"context",void 0),r()(this,"width",0),r()(this,"height",0),this.canvas=Pe(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return M()(f,[{key:"setWidth",value:function(i){this.width=this.canvas.width=i*g,this.canvas.style.width=i+"px"}},{key:"setHeight",value:function(i){this.height=this.canvas.height=i*g,this.canvas.style.height=i+"px",this.context.scale(g,g)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(i){this.canvas.style.background=i}},{key:"setSize",value:function(i,o){this.setWidth(i||0),this.setHeight(o||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(i,o,t){return t&&this.setBackgroundColor(t),this.canvas}}]),f}(),Me=function(f){S()(i,f);var a=I()(i);function i(){var o;l()(this,i);for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return o=a.call.apply(a,[this].concat(s)),r()(h()(o),"children",[]),o}return M()(i,[{key:"getChildren",value:function(t){if(!t)return this.children||[];var s=this.children||[],n=[];return s.forEach(function(v){t(v)&&n.push(v)}),n}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(t<0||arguments.length<=t?void 0:arguments[t]);return this}var s=arguments.length<=0?void 0:arguments[0];return s.index=s.index?s.index:this.getChildren().length,s.parent=this,this.getChildren().push(s),this}},{key:"sortChildren",value:function(t){return this.getChildren().sort(t)}},{key:"deduplication",value:function(){this.getChildren();var t=[];return this.getChildren().forEach(function(s){var n=t.some(function(v){return v===s});n||t.push(s)}),this.children=t,t}},{key:"batchDraw",value:function(t){var s,n,v,E,O;!((s=t.canvas)!==null&&s!==void 0&&s.context)||!((n=t.canvas)!==null&&n!==void 0&&n.canvas)||((v=t.canvas)===null||v===void 0||v.context.clearRect(0,0,(E=t.canvas)===null||E===void 0?void 0:E.canvas.offsetWidth,(O=t.canvas)===null||O===void 0?void 0:O.canvas.offsetHeight),this.sortChildren(function(A,R){return A.index-R.index}),this.deduplication(),this.getChildren().forEach(function(A){var R;if((R=t.canvas)!==null&&R!==void 0&&R.context&&A!==null&&A!==void 0&&A.draw){var Q;A==null||A.draw((Q=t.canvas)===null||Q===void 0?void 0:Q.context)}}))}}]),i}(K),Oe=Me,Re="mouseenter",Le="mouseleave",Se="mouseout",Te="mouseover",Be="mousedown",we="mousemove",We="mouseup",Ue="contextmenu",Ke="click",ke="dblclick",ze="wheel",Qe=[[Re,"_mouseenter"],[Be,"_mousedown"],[we,"_mousemove"],[Le,"_mouseleave"],[We,"_mouseup"],[Se,"_mouseout"],[Te,"_mouseover"],[Ue,"_contextmenu"],[ze,"_wheel"],[Ke,"_click"],[ke,"_dblclick"]],je=function(f){S()(i,f);var a=I()(i);function i(){var o;return l()(this,i),o=a.call(this),r()(h()(o),"name","Stage"),r()(h()(o),"parent",null),r()(h()(o),"content",void 0),r()(h()(o),"canvas",void 0),r()(h()(o),"width",void 0),r()(h()(o),"height",void 0),r()(h()(o),"draggable",void 0),r()(h()(o),"isFirstRender",void 0),r()(h()(o),"_pointerPositions",[]),r()(h()(o),"_changedPointerPositions",[]),r()(h()(o),"pointerPos",null),o.content=null,o.canvas=null,o.width=100,o.height=500,o.isFirstRender=!0,o.draggable=!1,o}return M()(i,[{key:"buildContentDOM",value:function(t){if(!(t.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var s=t.width?"".concat(t.width,"px"):"".concat(this.width,"%"),n=t.height?"".concat(t.height,"px"):"".concat(this.height,"px");this.content=t.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=s,this.content.style.height=n,this.canvas=new De,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,t.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(t,s,n){this.content&&this.canvas&&(this.canvas.getCanvasDom(t,s,n),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var t;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(t=this.canvas)!==null&&t!==void 0&&t.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(t){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var s=this.content.getBoundingClientRect(),n={top:s.top,left:s.left,scaleX:s.width/this.content.clientWidth||1,scaleY:s.height/this.content.clientHeight||1},v=null,E=null;v=(t.clientX-n.left)/n.scaleX,E=(t.clientY-n.top)/n.scaleY,this.pointerPos={x:v,y:E}}},{key:"_bindContentEvents",value:function(){var t,s=this;this!==null&&this!==void 0&&(t=this.content)!==null&&t!==void 0&&t.addEventListener&&Qe.forEach(function(n){var v,E=b()(n,2),O=E[0],A=E[1];(v=s.content)===null||v===void 0||v.addEventListener(O,function(R){s[A](R)},{passive:!1})})}},{key:"_mouseenter",value:function(t){z(this)&&(this.setPointersPositions(t),this.fire("mouseenter",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(t){z(this)&&(this.setPointersPositions(t),this.fire("mouseleave",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mouseover",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mousedown",value:function(t){this.setPointersPositions(t),this.fire("mousedown",{evt:t,target:this,currentTarget:this})}},{key:"_mousemove",value:function(t){this.setPointersPositions(t),this.fire("mousemove",{evt:t,target:this,currentTarget:this})}},{key:"_mouseup",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(t){t.preventDefault(),this.setPointersPositions(t),this.fire("contextmenu",{evt:t,target:this,currentTarget:this})}},{key:"_wheel",value:function(t){this.setPointersPositions(t),this.fire("wheel",{evt:t,target:this,currentTarget:this})}},{key:"_click",value:function(t){this.setPointersPositions(t),this.fire("click",{evt:t,target:this,currentTarget:this})}},{key:"_dblclick",value:function(t){this.setPointersPositions(t),this.fire("dblclick",{evt:t,target:this,currentTarget:this})}}]),i}(Oe),Ne=je,ce={};function jt(f){console.error(f)}var k=e(67294),se,be=Object.prototype.toString;function Ye(f){return typeof f=="function"}var Nt=function(a){return typeof a!="undefined"};function bt(f){return typeof f=="undefined"}var Yt=function(a){return typeof a=="boolean"},Ht=function(a){return typeof a=="number"};function He(f){return typeof f=="string"}function Jt(f){return be.call(f)==="[object Object]"}var $t=null,me=typeof window!="undefined",Ft=typeof navigator!="undefined";function Gt(){}var Zt=me&&((se=window)===null||se===void 0||(se=se.navigator)===null||se===void 0?void 0:se.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Xt=!k.useId,ae=e(31955);function Je(f,a){return a!==void 0?a:me?ae.Z.get(f):""}var $e=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,o=arguments.length>2?arguments[2]:void 0,t=(0,k.useState)(Je(a,o)),s=b()(t,2),n=s[0],v=s[1];(0,k.useEffect)(function(){var A=function(){var Q=ae.Z.get(a);return Q!=null?Q:(o===void 0?ae.Z.remove(a):ae.Z.set(a,o,i),o)};v(A())},[o,a,JSON.stringify(i)]);var E=(0,k.useCallback)(function(A){var R=Ye(A)?A(n):A;R===void 0?ae.Z.remove(a):ae.Z.set(a,R,i),v(R)},[a,n,JSON.stringify(i)]),O=(0,k.useCallback)(function(){var A=ae.Z.get(a);He(A)&&v(A)},[a]);return[n,E,O]},Fe=$e,Ge=function(){var a=(0,k.useState)(0),i=b()(a,2),o=i[0],t=i[1],s,n=function(){clearTimeout(s)},v=function(O){n(),t(O||function(A){return A-1})};return(0,k.useEffect)(function(){return s=setTimeout(function(){o>0?t(function(E){return E-1}):n()},1e3),function(){return n()}},[o]),[o,v,n]},Ze=Ge,Xe=e(68580),Ve=function(a,i,o){var t=(0,k.useRef)(void 0);(!t.current||!o(i,t.current))&&(t.current=i),(0,k.useEffect)(a,t.current)},qe=function(a,i){Ve(a,i,Xe.Z)},et=qe,tt=function(){var a=(0,k.useState)(1),i=b()(a,2),o=i[0],t=i[1],s=(0,k.useCallback)(function(){if(window){t(window.devicePixelRatio);var n=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),v=function(){s()};return n.addEventListener("change",v,{once:!0}),function(){n.removeEventListener("change",v)}}},[]);return(0,k.useEffect)(function(){var n=s();return n},[s]),{pixelRatio:o}},nt=tt,ot=function(a,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ce;(0,k.useEffect)(function(){var t=new ResizeObserver(i);return a!=null&&a.current&&t.observe(a.current,o),function(){a!=null&&a.current&&t.unobserve(a.current),t.disconnect()}},[])},fe=ot,rt=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,o=(0,k.useState)({width:0,height:0}),t=b()(o,2),s=t[0],n=t[1];return fe(a,function(v){if(v.length!==0){var E=b()(v,1),O=E[0],A=O.contentRect,R=A.width,Q=A.height;n({width:R,height:Q})}},i),s},at=rt,it=e(42122),le=e.n(it),pe=e(54683),st=e(33293),ut="application/json;charset=utf-8",Vt="application/x-www-form-urlencoded",qt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":ut,Accept:"application/json;version=3.0;compress=false;"},lt=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},dt=e(54998),ct=e.n(dt),ht=e(49360),vt=e(58146),mt=e(73505),ft=e(27771),pt=e(77226),It=e(36378),he=function f(a){if((0,ht.Z)(a)||(0,vt.Z)(a)||(0,mt.Z)(a))return a;if((0,ft.Z)(a))return a.map(function(o){return f(o)});if((0,pt.Z)(a)){var i=Object.create(null);return Object.keys(a).forEach(function(o){i[o]=f(a[o])}),i}else return(0,It.Z)(a)?a.trim():a};function en(){return typeof window=="undefined"?!1:window&&window.__debug__}function tn(f){var a=atob(f);return Uint8Array.from(a,function(i){return i.codePointAt(0)})}function nn(f){var a=Array.from(f,function(i){return String.fromCodePoint(i)}).join("");return btoa(a)}var Et=pe.Z.CancelToken.source(),_t=function(a){a.cancelToken=Et.token;var i=ct()(a.url);if(a.url=i.query(he(i.query(!0))||{}).toString(),a.data&&(a.data=he(a.data)),a.params=he(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var o=a.data,t=o===void 0?{}:o;for(var s in t)if(t.hasOwnProperty(s)){var n=t[s];n==null&&delete t[s]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},gt=function(a,i){i&&a.interceptors.request.use(function(o){return i(o)},function(o){return Promise.reject(o)}),a.interceptors.request.use(function(o){return _t(o)},function(o){return Promise.reject(o)})},yt=function(a){var i,o=a.data;try{if(o instanceof Blob){var t=a.headers["content-disposition"],s=t.split("filename=")[1];return{success:!0,data:{file:o,fileName:s}}}}catch(n){console.error(n)}return((i=a.headers)===null||i===void 0?void 0:i["content-type"].indexOf("application/json"))<0,o},At=function(a){var i="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var o=a.response.data.errors,t=o===void 0?[]:o,s=t&&t[0]||{};return Promise.reject({message:s.message||a.message||i,arguments:s.arguments||void 0,code:s.code||null})}return Promise.reject({message:a.message||i,arguments:void 0,code:null})}return Promise.reject({message:i,arguments:void 0,code:null})}},xt=function(a,i,o){i&&a.interceptors.response.use(function(t){return i(t)},function(t){return Promise.reject(t)}),i&&a.interceptors.response.use(function(t){return t},o),a.interceptors.response.use(yt,At)},Ct=function(a){var i=a.config,o=i===void 0?{}:i,t=a.requestInterceptorsCallback,s=a.responseInterceptorOnSuccessCallback,n=a.responseInterceptorOnErrorCallback,v=(0,st.Z)(lt(),o),E=pe.Z.create(v);gt(E,t),xt(E,s,n);function O(j,w,F){return E.request(le()({url:j,params:w},F))}function A(j,w,F){return E.request(le()({url:j,method:"post",params:w},F))}function R(j,w,F){return E.request(le()({url:j,method:"put",params:w},F))}function Q(j,w,F){return E.request(le()({url:j,method:"delete",params:w},F))}return{get:O,post:A,del:Q,put:R}},Pt=Ct,Dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Mt=function(a){var i=a.imgList,o=(0,k.useState)(!1),t=b()(o,2),s=t[0],n=t[1],v=(0,k.useState)(""),E=b()(v,2),O=E[0],A=E[1],R=(0,k.useState)([]),Q=b()(R,2),j=Q[0],w=Q[1],F=(0,k.useState)([]),oe=b()(F,2),N=oe[0],re=oe[1],ie=function ee(te,q,Y){var G=new Image,X=q+1;G.src=te,G.onload=function(){w(function(Z){return[].concat(d()(Z),[te])}),re(function(Z){return[].concat(d()(Z),[te])}),Y||A(te),q<i.length-1?ee(i[X],X,!0):n(!1)},G.onerror=function(){w(function(Z){return[].concat(d()(Z),[Dt])}),X<i.length-1?ee(i[X],X):n(!1)}};return(0,k.useEffect)(function(){(i==null?void 0:i.length)>1&&(n(!0),ie(i==null?void 0:i[0],0))},[]),console.log([O,j,N,s]),j.length!==i.length?["",[],[],!0]:[O,j,N,s]},Ot=Mt,Rt=e(17061),Ie=e.n(Rt),Lt=e(17156),St=e.n(Lt);function Tt(f){var a=f.dataSource,i=f.delay,o=i===void 0?100:i,t=f.pageSize,s=t===void 0?10:t,n=f.fetchData,v=(0,k.useState)(!1),E=b()(v,2),O=E[0],A=E[1],R=(0,k.useState)(!0),Q=b()(R,2),j=Q[0],w=Q[1],F=(0,k.useState)([]),oe=b()(F,2),N=oe[0],re=oe[1];function ie(){return ee.apply(this,arguments)}function ee(){return ee=St()(Ie()().mark(function te(){return Ie()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(!(!(a!=null&&a.length)&&!n)){Y.next=2;break}return Y.abrupt("return");case 2:if(!(!j||O)){Y.next=4;break}return Y.abrupt("return");case 4:if(A(!0),!a){Y.next=10;break}return Y.next=8,new Promise(function(G){setTimeout(function(){G(a==null?void 0:a.slice(N.length,N.length+s))},o)}).then(function(G){w((N==null?void 0:N.length)+(G==null?void 0:G.length)<(a==null?void 0:a.length)),re(function(X){return X==null?void 0:X.concat(G)})});case 8:Y.next=12;break;case 10:return Y.next=12,n==null?void 0:n({pageNum:N!=null&&N.length?Math.ceil((N==null?void 0:N.length)/s)+1:1,pageSize:s}).then(function(G){var X=G.list,Z=X===void 0?[]:X,Ee=G.total,zt=Ee===void 0?0:Ee;w((N==null?void 0:N.length)+(Z==null?void 0:Z.length)<zt&&(Z==null?void 0:Z.length)>0),re(function(ve){return ve==null?void 0:ve.concat(Z)})});case 12:A(!1);case 13:case"end":return Y.stop()}},te)})),ee.apply(this,arguments)}return{data:N,setData:re,loading:O,hasMore:j,loadMore:ie}}var Bt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=(0,k.useState)(!1),t=b()(o,2),s=t[0],n=t[1],v=(0,k.useRef)(null);return(0,k.useEffect)(function(){var E=new IntersectionObserver(function(O){O.forEach(function(A){A.isIntersecting?(n(!0),i&&E.unobserve(A.target)):n(!1)})},a);return v!=null&&v.current&&E.observe(v.current),function(){v!=null&&v.current&&E.unobserve(v.current)}},[a,i]),[v,s]},wt=Bt,Wt=function(a){var i=(0,k.useRef)({});return(0,k.useLayoutEffect)(function(){i.current=a}),(0,k.useLayoutEffect)(function(){return function(){i.current={}}},[]),i.current},Ut=Wt,Kt=function(){var a=(0,k.useState)({width:window.innerWidth,height:window.innerHeight}),i=b()(a,2),o=i[0],t=i[1],s=function(){t({width:window.innerWidth,height:window.innerHeight})};return(0,k.useLayoutEffect)(function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[]),{width:o.width,height:o.height}},kt=Kt},48977:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(54197);const l=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(18283);const l=[{value:"\u6839\u636E\u753B\u5E03\u91CD\u65B0\u6E32\u67D3 \u753B\u5E03\u5185\u5BB9",paraId:0,tocIndex:1},{value:"\u6F14\u793A\u63A8\u8350 \u6253\u5F00\u5DE6\u53F3\u63A7\u5236\u53F0\u62D6\u62FD",paraId:1,tocIndex:1}]},51234:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(97452);const l=[{value:`
  npm i heitu or yarn add heitu

`,paraId:0,tocIndex:0},{value:`import { Stage } from 'heitu';
export const Index = () => {
  return (
    <>
      <stage />
    </>
  );
};
`,paraId:1,tocIndex:1}]},9978:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(26211);const l=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(29876);const l=[{value:`
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
`,paraId:1,tocIndex:1}]},18632:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(72155);const l=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1}]},30223:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(64577);const l=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(28587);const l=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(59301);const l=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(48035);const l=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(56139);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(38668);const l=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(81233);const l=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(35412);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(1019);const l=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},20834:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(65808);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},51331:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(44012);const l=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(74746);const l=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(81286);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},69853:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(68145);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},85854:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(51530);const l=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(68537);const l=[]},87724:function(x,u,e){e.r(u),e.d(u,{texts:function(){return l}});var _=e(79930);const l=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(x,u){u.Z=`import {
  Circle,
  Custom,
  Line,
  Rect,
  Stage,
  Text,
  useResizeObserver,
} from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
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
  const _stage = new Stage();
  const _text = new Text({
    content: 'xixinia',
    index: 999,
    draggable: true,
    x: 250,
    y: 250,
  });
  const _rect = new Rect({
    fillStyle: '#2c7aff',
    draggable: true,
    x: 200,
    y: 200,
  });
  const _rect2 = new Rect({
    fillStyle: 'pink',
    x: 250,
    y: 250,
    width: 100,
    height: 100,
    draggable: true,
  });
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

  const _circle1 = new Circle({
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
  const _circle2 = new Circle({
    x: 200,
    y: 200,
    radius: 50,
    strokeStyle: 'blue',
    lineWidth: 3,
    border: 1,
    innerRadius: 0,
    startAngle: 0,
    endAngle: 90,
  });
  const _circle3 = new Circle({
    x: 100,
    y: 300,
    radius: 50,
    strokeStyle: 'blue',
    // fillStyle: 'orange',
    lineWidth: 2,
    border: 2,
    innerRadius: 0,
    startAngle: 0,
    endAngle: 60,
  });
  _stage.add(
    _custom,
    _text,
    _rect,
    _rect2,
    _rect2,
    _line,
    _line1,
    _line2,
    _circle1,
    _circle2,
    _circle3,
  );
  const aa = (e) => {
    console.log('aa');
  };
  const bb = (e) => {
    console.log('bb');
  };
  const cc = (e) => {
    console.log('cc');
  };
  const dd = (e) => {
    console.log('dd');
  };
  const ee = (e) => {
    console.log('ee');
  };
  const ff = (e) => {
    console.log('ff');
  };
  const gg = (e) => {
    console.log('gg');
  };
  const hh = (e) => {
    console.log('hh');
  };
  // _text.on('mousedown', aa);
  // _rect.on('mousedown', aa);
  // _rect.on('mousemove', bb);
  // _rect.on('mouseleave', cc);
  // _rect.on('mouseup', dd);
  // _rect.on('mouseenter', ee);
  // _rect.on('mouseover', ff);
  // _rect.on('contextmenu', gg);
  // _rect.on('wheel', hh);

  // _text.off('mouseenter', aa);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  console.log(_stage);
  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;
`},66969:function(x,u){u.Z=`import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';
const StageDemo = () => {
  const container = useRef<HTMLElement | null>(null);

  const _stage = new Stage();

  const _circle1 = new Circle({
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

  _stage.add(_circle1);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  console.log(_stage);
  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;
`}}]);
