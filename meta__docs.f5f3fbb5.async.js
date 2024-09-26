"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(54197),C={"docs-canvas-demo-0":{component:W.memo(W.lazy(R()(s()().mark(function v(){var M,_,f,c,m,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=g.sent,_=M.Custom,f=M.Stage,c=M.useResizeObserver,g.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return m=g.sent,d=m.default,O=m.useLayoutEffect,i=m.useRef,g.abrupt("return",{default:function(){var b=i(null),z=new f,T=new Path2D;T.moveTo(200,240),T.bezierCurveTo(200,200,120,150,120,200),T.bezierCurveTo(120,280,200,300,200,340),T.bezierCurveTo(200,300,280,280,280,200),T.bezierCurveTo(280,150,200,200,200,240);var j=new _({path2D:T,fillStyle:"pink",strokeStyle:"red"});return z.add(j),O(function(){z.buildContentDOM({container:b.current,backgroundColor:"#fff"})},[]),c(b,function(){return z._resizeDOM()}),d.createElement(d.Fragment,null,d.createElement("div",{ref:b}))}});case 13:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},67023:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(18283),C={"docs-canvas-stage-demo-stagedemo1":{component:W.memo(W.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}},"docs-canvas-stage-demo-stagedemo":{component:W.memo(W.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},44401:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var y=e(67294),s=e(26211),w={}},97086:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var y=e(67294),s=e(29876),w={}},64234:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(93139),M={"docs-hooks-use-async-fn-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return m=i.sent,d=m.useAsyncFn,i.abrupt("return",{default:function(){var g=d(D()(s()().mark(function p(){var J;return s()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,new Promise(function(F){setTimeout(function(){F(200)},5e3)});case 2:return J=H.sent,H.abrupt("return",J);case 4:case"end":return H.stop()}},p)})),[]),S=R()(g,2),b=S[0],z=b.loading,T=b.value,j=S[1];return console.log(z,T),c.createElement("div",null,c.createElement("button",{onClick:function(){j()}},"get"),z&&"loading"," ",c.createElement("br",null),"data: ".concat(T||""))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},75326:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(72155),M={"docs-hooks-use-cancel-async-fn-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,m=f.useRef,g.next=7,Promise.resolve().then(e.bind(e,55511));case 7:return d=g.sent,O=d.useCancelAsyncFn,i=d.useHtAxios,g.abrupt("return",{default:function(){var b=m(),z=i({config:{timeout:1e4},requestInterceptorsCallBack:function(G){return G},responseInterceptorsCallBack:function(G){return G.data}}),T=O(function(){var F=D()(s()().mark(function G(se){var re;return s()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return re=se.cancelInterceptor,he.abrupt("return",function(){var _e=D()(s()().mark(function fe(Ae){var Y;return s()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,z.get("http://jsonplaceholder.typicode.com/posts").catch(function(Ee){console.log(Ee)});case 2:return Y=ue.sent,re(),ue.abrupt("return",Y);case 5:case"end":return ue.stop()}},fe)}));return function(fe){return _e.apply(this,arguments)}}());case 2:case"end":return he.stop()}},G)}));return function(G){return F.apply(this,arguments)}}(),[]),j=R()(T,2),p=j[0],J=p.value,N=p.loading,H=j[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){var F=D()(s()().mark(function se(){return s()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:H();case 1:case"end":return ce.stop()}},se)}));function G(){return F.apply(this,arguments)}return G}()},"12312"))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},31701:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(64577),M={"docs-hooks-use-cookie-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return m=i.sent,d=m.useCookie,i.abrupt("return",{default:function(){var g={path:"/"},S="cookie-key",b=d(S,g,"default-value"),z=R()(b,3),T=z[0],j=z[1],p=z[2],J=function(){j("new-cookie-value")},N=function(){j(void 0)},H=function(){if("cookieStore"in window){var G=window.cookieStore;G.set({name:S,value:"changed"})}else document.cookie="".concat(S,"=changed; path=/")};return c.createElement("div",null,c.createElement("p",null,"Click on the button to update or clear the cookie"),c.createElement("p",{color:"blue"},"cookie: ",T||"no value"),c.createElement("button",{onClick:J},"Update the cookie"),c.createElement("button",{onClick:N},"Clear the cookie"),c.createElement("button",{onClick:H},"Changing the cookie through other methods"),c.createElement("button",{onClick:p},"Refresh the cookie"))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},67731:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(28587),M={"docs-hooks-use-count-down-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return m=i.sent,d=m.useCountDown,i.abrupt("return",{default:function(){var g=d(),S=R()(g,3),b=S[0],z=S[1],T=S[2];return c.createElement("div",null,b,c.createElement("button",{onClick:function(){z(60)}},"\u5F00\u59CB"),c.createElement("button",{onClick:function(){T()}},"\u6682\u505C"),c.createElement("button",{onClick:function(){z()}},"\u7EE7\u7EED"))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},66609:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(59301),M={"docs-hooks-use-deep-compare-effect-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d,O,i,Q;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=S.sent,c=f.default,m=f.useState,d=f.useEffect,O=f.useRef,S.next=9,Promise.resolve().then(e.bind(e,55511));case 9:return i=S.sent,Q=i.useDeepCompareEffect,S.abrupt("return",{default:function(){var z=m(0),T=R()(z,2),j=T[0],p=T[1],J=O(0),N=O(0);return d(function(){J.current+=1},[{}]),Q(function(){return N.current+=1,function(){}},[{}]),c.createElement("div",null,c.createElement("p",null,"effectCount: ",J.current),c.createElement("p",null,"deepCompareCount: ",N.current),c.createElement("p",null,c.createElement("button",{type:"button",onClick:function(){return p(function(F){return F+1})}},"reRender")))}});case 12:case"end":return S.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},5958:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(48035),C={"docs-hooks-use-device-pixel-ratio-demo-0":{component:W.memo(W.lazy(R()(s()().mark(function v(){var M,_,f,c;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=d.sent,_=M.default,d.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return f=d.sent,c=f.useDevicePixelRatio,d.abrupt("return",{default:function(){var i=c(),Q=i.pixelRatio;return _.createElement("p",null,"Device pixel ratio: ",Q)}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},65585:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(56139),C={"docs-hooks-use-element-size-demo-0":{component:W.memo(W.lazy(R()(s()().mark(function v(){var M,_,f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=i.sent,_=M.default,f=M.useRef,c=M.useEffect,i.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return m=i.sent,d=m.useElementSize,i.abrupt("return",{default:function(){var g=f(null),S=d(g);return c(function(){console.log(g.current.mount)},[]),_.createElement("div",null,_.createElement("textarea",{ref:g,disabled:!0,style:{width:200,height:200},value:"width: ".concat(S.width,`
height: `).concat(S.height)}))}});case 11:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},23897:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(38668),C={"docs-hooks-use-ht-axios-demo-0":{component:W.memo(W.lazy(R()(s()().mark(function v(){var M,_,f,c;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=d.sent,_=M.useHtAxios,d.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return f=d.sent,c=f.default,d.abrupt("return",{default:function(){var i=_({config:{timeout:3e3},requestInterceptorsCallBack:function(S){return S},responseInterceptorsCallBack:function(S){return S.data}}),Q=function(){var g=R()(s()().mark(function S(){var b;return s()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,i.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:b=T.sent,console.log(b);case 4:case"end":return T.stop()}},S)}));return function(){return g.apply(this,arguments)}}();return c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},c.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){Q()}},"123"))}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},97716:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(81233),M={"docs-hooks-use-image-load-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return m=i.sent,d=m.useImageLoad,i.abrupt("return",{default:function(){var g=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],S=d({imgList:g}),b=R()(S,4),z=b[0],T=b[1],j=b[2],p=b[3];return c.createElement("div",{style:{display:"flex"}},p?"loading":c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("div",null,"img"),c.createElement("img",{src:z,style:{width:200}})),c.createElement("div",null,c.createElement("div",null,"ftimgList"),T==null?void 0:T.map(function(J,N){return c.createElement("img",{src:J,key:N,style:{width:200}})})),c.createElement("div",null,c.createElement("div",null,"allowImgList"),j==null?void 0:j.map(function(J,N){return c.createElement("img",{src:J,key:N,style:{width:200}})}))))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},79817:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(35412),M={"docs-hooks-use-in-view-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return m=i.sent,d=m.useInView,i.abrupt("return",{default:function(){var g=d(),S=R()(g,2),b=S[0],z=S[1];return c.createElement("div",null,c.createElement("div",null,z?"active":"inactive"),c.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},c.createElement("div",{ref:b},"12312312")))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},59842:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(1019),M={"docs-hooks-use-infinite-scroll-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d,O,i,Q;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return Q=function(z){var T=z.hasMore,j=z.loadMore,p=i(),J=R()(p,2),N=J[0],H=J[1];return m(function(){H&&T&&(j==null||j())},[T,H,j]),c.createElement("div",{ref:N},T?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},S.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return f=S.sent,c=f.default,m=f.useEffect,S.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return d=S.sent,O=d.useInfiniteScroll,i=d.useInView,S.abrupt("return",{default:function(){var z=new Array(100).fill(1).map(function(N,H){return H}),T=O({dataSource:z,pageSize:10,delay:100}),j=T.data,p=T.hasMore,J=T.loadMore;return c.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},j==null?void 0:j.map(function(N){return c.createElement("span",null,N)}),c.createElement(Q,{loadMore:J,hasMore:p}))}});case 12:case"end":return S.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},96122:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(40801),M={"docs-hooks-use-local-storage-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m;return s()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return f=O.sent,c=f.useLocalStorage,m=function(){var Q=c("my-key","foo"),g=R()(Q,3),S=g[0],b=g[1],z=g[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",S),C.createElement("button",{onClick:function(){return b("bar")}},"bar"),C.createElement("button",{onClick:function(){return b("baz")}},"baz"),C.createElement("button",{onClick:function(){return z()}},"Remove"))},O.abrupt("return",{default:m});case 6:case"end":return O.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},13917:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var y=e(67294),s=e(44012),w={}},37868:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(74746),M={"docs-hooks-use-previous-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,m=f.useState,g.next=7,Promise.resolve().then(e.bind(e,55511));case 7:return d=g.sent,O=d.usePrevious,i=function(b){var z=O(b);return console.log(z,b),c.createElement("div",null,c.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(z==null?void 0:z.aa)||0," "),c.createElement("div",null,"\u5F53\u524D\u7684aa: ",b==null?void 0:b.aa))},g.abrupt("return",{default:function(){var b=m(1),z=R()(b,2),T=z[0],j=z[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){return j(T+1)}},"+1"),c.createElement(i,{aa:T}))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},7411:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(81286),M={"docs-hooks-use-resize-observer-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,m=f.useRef,d=f.useState,g.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return O=g.sent,i=O.useResizeObserver,g.abrupt("return",{default:function(){var b=m(null),z=d({width:0,height:0}),T=R()(z,2),j=T[0],p=T[1];return i(b,function(J){var N=R()(J,1),H=N[0],F=H.contentRect,G=F.width,se=F.height;p({width:G,height:se})}),c.createElement("div",null,c.createElement("textarea",{ref:b,disabled:!0,style:{width:200,height:200},value:"width: ".concat(j.width,`
height: `).concat(j.height)}))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},12830:function(B,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),w=e(27424),R=e.n(w),W=e(17156),D=e.n(W),C=e(67294),v=e(5480),M={"docs-hooks-use-session-storage-demo-0":{component:C.memo(C.lazy(D()(s()().mark(function _(){var f,c,m;return s()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return f=O.sent,c=f.useSessionStorage,m=function(){var Q=c("my-key","foo"),g=R()(Q,3),S=g[0],b=g[1],z=g[2];return C.createElement("div",null,C.createElement("div",null,"Value: ",S),C.createElement("button",{onClick:function(){return b("bar")}},"bar"),C.createElement("button",{onClick:function(){return b("baz")}},"baz"),C.createElement("button",{onClick:function(){return z()}},"Remove"))},O.abrupt("return",{default:m});case 6:case"end":return O.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var m,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},9954:function(B,l,e){e.r(l),e.d(l,{demos:function(){return C}});var y=e(17061),s=e.n(y),w=e(17156),R=e.n(w),W=e(67294),D=e(51530),C={"docs-hooks-use-window-size-demo-0":{component:W.memo(W.lazy(R()(s()().mark(function v(){var M,_,f;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=m.sent,_=M.useWindowSize,f=function(){var O=_(),i=O.width,Q=O.height;return W.createElement("div",null,W.createElement("p",null,"width: ",i,", height: ",Q))},m.abrupt("return",{default:f});case 6:case"end":return m.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},11171:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var y=e(67294),s=e(68537),w={}},6202:function(B,l,e){e.r(l),e.d(l,{demos:function(){return w}});var y=e(67294),s=e(79930),w={}},55511:function(B,l,e){e.r(l),e.d(l,{Animate:function(){return T},Circle:function(){return he},Custom:function(){return fe},Line:function(){return ue},Rect:function(){return Te},Stage:function(){return Ve},Text:function(){return Be},useAsyncFn:function(){return Re},useCancelAsyncFn:function(){return et},useCookie:function(){return ln},useCountDown:function(){return cn},useDeepCompareEffect:function(){return mn},useDevicePixelRatio:function(){return pn},useElementSize:function(){return gn},useHtAxios:function(){return bn},useImageLoad:function(){return Qn},useInView:function(){return Jn},useInfiniteScroll:function(){return $n},useLocalStorage:function(){return rn},usePrevious:function(){return Gn},useResizeObserver:function(){return Me},useSessionStorage:function(){return on},useWindowSize:function(){return Zn}});var y=e(42122),s=e.n(y),w=e(56690),R=e.n(w),W=e(89728),D=e.n(W),C=e(38416),v=e.n(C),M=e(861),_=e.n(M),f=window.devicePixelRatio,c=function(){},m=function(r){return r.name==="Stage"},d=function(r,t){return Array.from(new Map([].concat(_toConsumableArray(r),_toConsumableArray(t)).map(function(a){return[a.name,a]})).values())},O=function(r,t,a){return a!=null&&a.x&&a!==null&&a!==void 0&&a.width&&a.y&&a!==null&&a!==void 0&&a.height?r>(a==null?void 0:a.x)*f&&r<(((a==null?void 0:a.x)||0)+((a==null?void 0:a.width)||0))*f&&t>(a==null?void 0:a.y)*f&&t<a.y*f+a.height*f:!1},i=function(r){var t=r.mouseX,a=r.mouseY,n=r.path2D,u=r.ctx;return n&&u&&(u==null?void 0:u.isPointInPath(n,t,a))},Q={linear:function(r){return r},quadraticIn:function(r){return r*r},quadraticOut:function(r){return r*(2-r)},quadraticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(r){var t=r;return t*t*t},cubicOut:function(r){var t=r;return--t*t*t+1},cubicInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(r){var t=r;return t*t*t*t},quarticOut:function(r){var t=r;return 1- --t*t*t*t},quarticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(r){return r*r*r*r*r},quinticOut:function(r){var t=r;return--t*t*t*t*t+1},quinticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(r){return 1-Math.cos(r*Math.PI/2)},sinusoidalOut:function(r){return Math.sin(r*Math.PI/2)},sinusoidalInOut:function(r){return .5*(1-Math.cos(Math.PI*r))},exponentialIn:function(r){return r===0?0:Math.pow(1024,r-1)},exponentialOut:function(r){return r===1?1:1-Math.pow(2,-10*r)},exponentialInOut:function(r){var t=r;return r===0?0:r===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(r){return 1-Math.sqrt(1-r*r)},circularOut:function(r){var t=r;return Math.sqrt(1- --t*t)},circularInOut:function(r){var t=r;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(r){var t,a=.1,n=.4;if(r===0)return 0;if(r===1)return 1;!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI);var u=r;return-(a*Math.pow(2,10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n))},elasticOut:function(r){var t,a=.1,n=.4;return r===0?0:r===1?1:(!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*r)*Math.sin((r-t)*(2*Math.PI)/n)+1)},elasticInOut:function(r){var t,a=.1,n=.4;if(r===0)return 0;if(r===1)return 1;!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI);var u=r;return(u*=2)<1?-.5*(a*Math.pow(2,10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n)):a*Math.pow(2,-10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n)*.5+1},backIn:function(r){var t=1.70158;return r*r*((t+1)*r-t)},backOut:function(r){var t=r,a=1.70158;return--t*t*((a+1)*t+a)+1},backInOut:function(r){var t=r,a=1.70158*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},bounceIn:function(r){return 1-Q.bounceOut(1-r)},bounceOut:function(r){var t=r;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(r){return r<.5?Q.bounceIn(r*2)*.5:Q.bounceOut(r*2-1)*.5+.5}};function g(h,r,t){var a=r-h,n=t*a,u=h+n,o=h<r?h:r,I=h>r?h:r;return u=Math.max(u,o),u=Math.min(u,I),u}var S=function(r,t,a){if(typeof r=="number"&&typeof t=="number")return g(r,t,a);if(Array.isArray(r)&&Array.isArray(t))return r.map(function(n,u){return g(n,t[u],a)})},b={duration:1e3,easing:"linear",iterationCount:1},z=function(){function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};R()(this,h),v()(this,"rafTimer",null),v()(this,"startTime",null),v()(this,"startProp",void 0),v()(this,"targetProp",void 0),v()(this,"cfg",void 0),v()(this,"forward",!0),v()(this,"queue",[]),this.startProp=r,this.targetProp=t,this.cfg=s()(s()({},b),a)}return D()(h,[{key:"start",value:function(){var t=this,a=this.cfg,n=a.duration,u=a.easing,o=a.during,I=a.iterationCount,E=Object.keys(this.targetProp),x=function P(A){t.startTime||(t.startTime=A);var K=Q[u](Math.min((A-t.startTime)/n,1)),k={};E.forEach(function(V){var $=S(t.startProp[V],t.targetProp[V],K);k[V]=$}),o&&o(K,k);var L=t.forward?K<1:0<K;L?t.rafTimer=requestAnimationFrame(P):t.queue=[],t.queue.length>0&&t.queue.forEach(function(V){V(k,K)});var Z=t.forward?K===1:K===0;Z&&I===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(x)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),h}(),T=z,j=e(66115),p=e.n(j),J=e(61655),N=e.n(J),H=e(26389),F=e.n(H),G=e(30954),se=function(){function h(){R()(this,h),v()(this,"eventListeners",{}),v()(this,"shapeEventListeners",{})}return D()(h,[{key:"on",value:function(t,a){var n=t.split(" "),u=n.length,o,I,E,x;for(o=0;o<u;o++)I=n[o],E=I.split("."),x=E[0],this.eventListeners[x]||(this.eventListeners[x]=[]),this.eventListeners[x].push({name:a.name||"",handler:a}),this!==null&&this!==void 0&&this.parent&&m(this===null||this===void 0?void 0:this.parent)&&(this!==null&&this!==void 0&&this.parent.shapeEventListeners[x]||(this.parent.shapeEventListeners[x]=[]),this.parent.shapeEventListeners[x].push({name:a.name||"",handler:a}));return this}},{key:"_off",value:function(t,a,n){var u=this.eventListeners[t],o,I,E;for(o=0;o<u.length;o++)if(I=u[o].name,E=u[o].handler,(!a||I===a)&&(!n||n===E)){if(u.splice(o,1),u.length===0){delete this.eventListeners[t];break}o--}}},{key:"off",value:function(t,a){var n=(t||"").split(" "),u=n.length,o,I,E,x,P,A;for(o=0;o<u;o++)if(E=n[o],x=E.split("."),P=x[0],A=x[1],P)this.eventListeners[P]&&this._off(P,A,a);else for(I in this.eventListeners)this._off(I,A,a);return this}},{key:"_fire",value:function(t,a,n){m(n)?this.eventListeners[t].forEach(function(u){u.handler(a)}):this.shapeEventListeners[t].forEach(function(u){u.handler(a)})}},{key:"fire",value:function(t,a){var n=a.evt,u=a.target,o=a.currentTarget;if(m(o)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,o);for(var I=u==null?void 0:u.children,E=0;E<I.length;E++){(!this.shapeEventListeners[t]||this.shapeEventListeners[t].length<1)&&(this.shapeEventListeners[t]=[]);var x=_()(this.children.filter(function(te){return te.draggable}));if(t==="mousedown"){var P=x.filter(function(te){var X;return te==null?void 0:te.inScope(n,(X=u.canvas)===null||X===void 0?void 0:X.context)}),A=P.sort(function(te,X){return X.index-te.index})[0];A&&(A.dragging=!0,A.offsetX=A!=null&&A.x?n.offsetX-(A==null?void 0:A.x):n.offsetX,A.offsetY=A!=null&&A.y?n.offsetY-(A==null?void 0:A.y):n.offsetY)}this.fire(t,{evt:n,target:u,currentTarget:I[E]})}}else{var K;if(o!=null&&o.draggable&&t==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&t==="mousemove"){var k,L=(k=this.canvas)===null||k===void 0||(k=k.canvas)===null||k===void 0?void 0:k.getBoundingClientRect();if(o.name==="Text"){var Z=L!=null&&L.left?n.clientX-(L==null?void 0:L.left):n.clientX,V=L!=null&&L.top?n.clientY-(L==null?void 0:L.top):n.clientY;o.x=o!=null&&o.offsetX?Z-(o==null?void 0:o.offsetX):Z,o.y=o!=null&&o.offsetY?V-(o==null?void 0:o.offsetY):V}else{var $=L!=null&&L.left?n.clientX-(L==null?void 0:L.left):n.clientX,ie=L!=null&&L.top?n.clientY-(L==null?void 0:L.top):n.clientY;o.x=o!=null&&o.offsetX?$-(o==null?void 0:o.offsetX):$,o.y=o!=null&&o.offsetY?ie-(o==null?void 0:o.offsetY):ie}this.batchDraw(this)}if(o!=null&&o.inScope&&(K=u.canvas)!==null&&K!==void 0&&K.context){var de;if(o!=null&&o.inScope(n,(de=u.canvas)===null||de===void 0?void 0:de.context)){var ae;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,o),t==="mousemove"&&!o.mouseInScope&&((ae=u.shapeEventListeners.mouseenter)===null||ae===void 0?void 0:ae.length)>0&&(o.mouseInScope=!0,u._fire("mouseenter",n,o))}else if(t==="mousemove"){var oe;o.mouseInScope=!1,((oe=u.shapeEventListeners.mouseleave)===null||oe===void 0?void 0:oe.length)>0&&u._fire("mouseleave",n,o)}}}}},{key:"attr",value:function(t){var a=this,n;this.parent&&((0,G.Z)(t,function(u,o){u&&(a[o]=u)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),h}(),re=se,ce=function(h){N()(t,h);var r=F()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Circle"),v()(p()(n),"parent",null),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"radius",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"arc",void 0),v()(p()(n),"startAngle",void 0),v()(p()(n),"endAngle",void 0),v()(p()(n),"innerRadius",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"border",void 0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,(0,G.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,u,o,I){var E=this.deg2rad(I),x=n+o*Math.cos(E),P=u+o*Math.sin(E);return{x,y:P}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,u="M ".concat(this.x," ").concat(n),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),I=this.y-this.innerRadius,E="M ".concat(this.x," ").concat(I),x="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(I);return"".concat(u," ").concat(o," ").concat(E," ").concat(x," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),u=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,I="M ".concat(n.x," ").concat(n.y),E="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(u.x," ").concat(u.y),x=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),P=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),A="L".concat(P.x," ").concat(P.y),K="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(x.x," ").concat(x.y);return"".concat(I," ").concat(E," ").concat(A," ").concat(K," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var u=this.startAngle===0&&this.endAngle===360,o;switch(this.border){case 0:return o=new Path2D(this.calcRingD(u)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(u)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(u)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,I=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:I,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(re),he=ce,_e=function(h){N()(t,h);var r=F()(t);function t(a){var n;if(R()(this,t),n=r.call(this),v()(p()(n),"name","Custom"),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),!a.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,(0,G.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,I=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:I,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(re),fe=_e,Ae=e(27424),Y=e.n(Ae),Ce=function(h){N()(t,h);var r=F()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Line"),v()(p()(n),"start",void 0),v()(p()(n),"end",void 0),v()(p()(n),"points",void 0),v()(p()(n),"smooth",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"lineCap",void 0),v()(p()(n),"lineJoin",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,(0,G.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(u,o,I){var E=Math.floor(I/2);return I%2===0?u.push([o]):u[E].push(o),u},[]).map(function(u){var o=Y()(u,2),I=o[0],E=o[1];return{x:I,y:E}})}},{key:"calcSmoothPath2D",value:function(){var n,u,o,I=new Path2D;return I.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((u=this.start)===null||u===void 0?void 0:u.y)||0),I.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&I.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&I.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=I,I}},{key:"calcStraightPath2D",value:function(){var n,u,o,I,E=new Path2D;E.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((u=this.start)===null||u===void 0?void 0:u.y)||0);var x=this.convertToNormalPoints([].concat(_()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(I=this.end)===null||I===void 0?void 0:I.y]));return x.forEach(function(P){var A=P.x,K=P.y;E.lineTo(A,K)}),E}},{key:"draw",value:function(n){var u=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(u),this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,I=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:I,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(re),ue=Ce,Ee=function(h){N()(t,h);var r=F()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Rect"),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.index=0,(0,G.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){var u=new Path2D;return u.moveTo(this.x,this.y),u.lineTo(this.x+this.width,this.y),u.lineTo(this.x+this.width,this.y+this.height),u.lineTo(this.x,this.y+this.height),u.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(u),this.fillStyle&&n.fill(u),this.path2D=u,this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,I=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:I,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(re),Te=Ee,Le=function(h){N()(t,h);var r=F()(t);function t(a){var n;if(R()(this,t),n=r.call(this),v()(p()(n),"name","Text"),v()(p()(n),"parent",null),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"content",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"fontFamily",void 0),v()(p()(n),"fontSize",void 0),v()(p()(n),"textAlign",void 0),v()(p()(n),"textBaseline",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"index",0),n.content="",!a.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,(0,G.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var u=n.measureText(this.content);return this.width=u.width,this.height=this.fontSize,this}},{key:"inScope",value:function(n){var u=n.offsetX*f,o=n.offsetY*f;return O(u,o,this)}}]),t}(re),Be=Le,me=null,we=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(h){setTimeout(h,60)},We=function(){var r=document.createElement("canvas");try{r.style=r.style||{}}catch(t){}return r},tt=function(r){me.push(r),me.length===1&&we(function(){var t=me;me=[],t.forEach(function(a){a()})})},Ue=function(){function h(){R()(this,h),v()(this,"canvas",void 0),v()(this,"context",void 0),v()(this,"width",0),v()(this,"height",0),this.canvas=We(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return D()(h,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*f,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*f,this.canvas.style.height=t+"px",this.context.scale(f,f)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,a){this.setWidth(t||0),this.setHeight(a||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,a,n){return n&&this.setBackgroundColor(n),this.canvas}}]),h}(),Ke=function(h){N()(t,h);var r=F()(t);function t(){var a;R()(this,t);for(var n=arguments.length,u=new Array(n),o=0;o<n;o++)u[o]=arguments[o];return a=r.call.apply(r,[this].concat(u)),v()(p()(a),"children",[]),a}return D()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var u=this.children||[],o=[];return u.forEach(function(I){n(I)&&o.push(I)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var u=arguments.length<=0?void 0:arguments[0];return u.index=u.index?u.index:this.getChildren().length,u.parent=this,this.getChildren().push(u),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(u){var o=n.some(function(I){return I===u});o||n.push(u)}),this.children=n,n}},{key:"batchDraw",value:function(n){var u,o,I,E,x;!((u=n.canvas)!==null&&u!==void 0&&u.context)||!((o=n.canvas)!==null&&o!==void 0&&o.canvas)||((I=n.canvas)===null||I===void 0||I.context.clearRect(0,0,(E=n.canvas)===null||E===void 0?void 0:E.canvas.offsetWidth,(x=n.canvas)===null||x===void 0?void 0:x.canvas.offsetHeight),this.sortChildren(function(P,A){return P.index-A.index}),this.deduplication(),this.getChildren().forEach(function(P){var A;if((A=n.canvas)!==null&&A!==void 0&&A.context&&P!==null&&P!==void 0&&P.draw){var K;P==null||P.draw((K=n.canvas)===null||K===void 0?void 0:K.context)}}))}}]),t}(re),ke=Ke,be="mouseenter",ze="mouseleave",je="mouseout",Qe="mouseover",Ne="mousedown",Fe="mousemove",$e="mouseup",Ye="contextmenu",Je="click",He="dblclick",Ge="wheel",Xe=[[be,"_mouseenter"],[Ne,"_mousedown"],[Fe,"_mousemove"],[ze,"_mouseleave"],[$e,"_mouseup"],[je,"_mouseout"],[Qe,"_mouseover"],[Ye,"_contextmenu"],[Ge,"_wheel"],[Je,"_click"],[He,"_dblclick"]],Ze=function(h){N()(t,h);var r=F()(t);function t(){var a;return R()(this,t),a=r.call(this),v()(p()(a),"name","Stage"),v()(p()(a),"parent",null),v()(p()(a),"content",void 0),v()(p()(a),"canvas",void 0),v()(p()(a),"width",void 0),v()(p()(a),"height",void 0),v()(p()(a),"draggable",void 0),v()(p()(a),"isFirstRender",void 0),v()(p()(a),"_pointerPositions",[]),v()(p()(a),"_changedPointerPositions",[]),v()(p()(a),"pointerPos",null),a.content=null,a.canvas=null,a.width=100,a.height=500,a.isFirstRender=!0,a.draggable=!1,a}return D()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var u=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),o=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=u,this.content.style.height=o,this.canvas=new Ue,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,u,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,u,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var u=this.content.getBoundingClientRect(),o={top:u.top,left:u.left,scaleX:u.width/this.content.clientWidth||1,scaleY:u.height/this.content.clientHeight||1},I=null,E=null;I=(n.clientX-o.left)/o.scaleX,E=(n.clientY-o.top)/o.scaleY,this.pointerPos={x:I,y:E}}},{key:"_bindContentEvents",value:function(){var n,u=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&Xe.forEach(function(o){var I,E=Y()(o,2),x=E[0],P=E[1];(I=u.content)===null||I===void 0||I.addEventListener(x,function(A){u[P](A)},{passive:!1})})}},{key:"_mouseenter",value:function(n){m(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){m(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(ke),Ve=Ze,U=e(67294),ve,qe=Object.prototype.toString;function en(h){return typeof h=="function"}var rt=function(r){return typeof r!="undefined"};function at(h){return typeof h=="undefined"}var ot=function(r){return typeof r=="boolean"},ut=function(r){return typeof r=="number"};function nn(h){return typeof h=="string"}function it(h){return qe.call(h)==="[object Object]"}var st=null,Ie=typeof window!="undefined",lt=typeof navigator!="undefined";function Pe(){}var dt=Ie&&((ve=window)===null||ve===void 0||(ve=ve.navigator)===null||ve===void 0?void 0:ve.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),ct=!U.useId,tn=function(r,t,a){if(!Ie)return[t,Pe,Pe];if(!r)throw new Error("useLocalStorage key may not be falsy");var n=a?a.raw?function(K){return K}:a.deserializer:JSON.parse,u=(0,U.useRef)(function(K){try{var k=a?a.raw?String:a.serializer:JSON.stringify,L=localStorage.getItem(K);return L!==null?n(L):(t&&localStorage.setItem(K,k(t)),t)}catch(Z){return t}}),o=(0,U.useState)(function(){return u.current(r)}),I=Y()(o,2),E=I[0],x=I[1];(0,U.useLayoutEffect)(function(){return x(u.current(r))},[r]);var P=(0,U.useCallback)(function(K){try{var k=typeof K=="function"?K(E):K;if(typeof k=="undefined")return;var L;a?a.raw?typeof k=="string"?L=k:L=JSON.stringify(k):a.serializer?L=a.serializer(k):L=JSON.stringify(k):L=JSON.stringify(k),localStorage.setItem(r,L),x(n(L))}catch(Z){}},[r,x]),A=(0,U.useCallback)(function(){try{localStorage.removeItem(r),x(void 0)}catch(K){}},[r,x]);return[E,P,A]},rn=tn,an=function(r,t,a){if(!Ie)return[t,function(){}];var n=(0,U.useState)(function(){try{var E=sessionStorage.getItem(r);return typeof E!="string"?(sessionStorage.setItem(r,a?String(t):JSON.stringify(t)),t):a?E:JSON.parse(E||"null")}catch(x){return t}}),u=Y()(n,2),o=u[0],I=u[1];return(0,U.useEffect)(function(){try{var E=a?String(o):JSON.stringify(o);sessionStorage.setItem(r,E)}catch(x){}}),[o,I]},on=an,ge={};function ht(h){console.error(h)}var le=e(31955);function un(h,r){return r!==void 0?r:Ie?le.Z.get(h):""}var sn=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ge,a=arguments.length>2?arguments[2]:void 0,n=(0,U.useState)(un(r,a)),u=Y()(n,2),o=u[0],I=u[1];(0,U.useEffect)(function(){var P=function(){var K=le.Z.get(r);return K!=null?K:(a===void 0?le.Z.remove(r):le.Z.set(r,a,t),a)};I(P())},[a,r,JSON.stringify(t)]);var E=(0,U.useCallback)(function(P){var A=en(P)?P(o):P;A===void 0?le.Z.remove(r):le.Z.set(r,A,t),I(A)},[r,o,JSON.stringify(t)]),x=(0,U.useCallback)(function(){var P=le.Z.get(r);nn(P)&&I(P)},[r]);return[o,E,x]},ln=sn,dn=function(){var r=(0,U.useState)(0),t=Y()(r,2),a=t[0],n=t[1],u,o=function(){clearTimeout(u)},I=function(x){o(),n(x||function(P){return P-1})};return(0,U.useEffect)(function(){return u=setTimeout(function(){a>0?n(function(E){return E-1}):o()},1e3),function(){return o()}},[a]),[a,I,o]},cn=dn,hn=e(68580),vn=function(r,t,a){var n=(0,U.useRef)(void 0);(!n.current||!a(t,n.current))&&(n.current=t),(0,U.useEffect)(r,n.current)},fn=function(r,t){vn(r,t,hn.Z)},mn=fn,In=function(){var r=(0,U.useState)(1),t=Y()(r,2),a=t[0],n=t[1],u=(0,U.useCallback)(function(){if(window){n(window.devicePixelRatio);var o=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),I=function(){u()};return o.addEventListener("change",I,{once:!0}),function(){o.removeEventListener("change",I)}}},[]);return(0,U.useEffect)(function(){var o=u();return o},[u]),{pixelRatio:a}},pn=In,_n=function(r,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ge;(0,U.useEffect)(function(){var n=new ResizeObserver(t);return r!=null&&r.current&&n.observe(r.current,a),function(){r!=null&&r.current&&n.unobserve(r.current),n.disconnect()}},[])},Me=_n,En=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ge,a=(0,U.useState)({width:0,height:0}),n=Y()(a,2),u=n[0],o=n[1];return Me(r,function(I){if(I.length!==0){var E=Y()(I,1),x=E[0],P=x.contentRect,A=P.width,K=P.height;o({width:A,height:K})}},t),u},gn=En,Oe=e(54683),yn=e(33293),xn="application/json;charset=utf-8",vt="application/x-www-form-urlencoded",ft={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":xn,Accept:"application/json;version=3.0;compress=false;"},An=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Cn=e(54998),Pn=e.n(Cn),Mn=e(49360),On=e(58146),Dn=e(73505),Rn=e(27771),Sn=e(77226),Tn=e(36378),ye=function h(r){if((0,Mn.Z)(r)||(0,On.Z)(r)||(0,Dn.Z)(r))return r;if((0,Rn.Z)(r))return r.map(function(a){return h(a)});if((0,Sn.Z)(r)){var t=Object.create(null);return Object.keys(r).forEach(function(a){t[a]=h(r[a])}),t}else return(0,Tn.Z)(r)?r.trim():r};function mt(){return typeof window=="undefined"?!1:window&&window.__debug__}function It(h){var r=atob(h);return Uint8Array.from(r,function(t){return t.codePointAt(0)})}function pt(h){var r=Array.from(h,function(t){return String.fromCodePoint(t)}).join("");return btoa(r)}var Ln=Oe.Z.CancelToken.source(),Bn=function(r){r.cancelToken=Ln.token;var t=Pn()(r.url);if(r.url=t.query(ye(t.query(!0))||{}).toString(),r.data&&(r.data=ye(r.data)),r.params=ye(r.params||{}),r.cache&&(r.params=r.params||{},r.params.__cache__=Math.random()),r.filter){var a=r.data,n=a===void 0?{}:a;for(var u in n)if(n.hasOwnProperty(u)){var o=n[u];o==null&&delete n[u]}}return r.method==="get"&&r.data&&(r.params=r.data,delete r.data),r},wn=function(r,t){t&&r.interceptors.request.use(function(a){return t(a)},function(a){return Promise.reject(a)}),r.interceptors.request.use(function(a){return Bn(a)},function(a){return Promise.reject(a)})},Wn=function(r){var t,a=r.data;try{if(a instanceof Blob){var n=r.headers["content-disposition"],u=n.split("filename=")[1];return{success:!0,data:{file:a,fileName:u}}}}catch(o){console.error(o)}return((t=r.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,a},Un=function(r){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!r.__CANCEL__){if(r){if(r.response&&r.response.data){var a=r.response.data.errors,n=a===void 0?[]:a,u=n&&n[0]||{};return Promise.reject({message:u.message||r.message||t,arguments:u.arguments||void 0,code:u.code||null})}return Promise.reject({message:r.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},Kn=function(r,t,a){t&&r.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&r.interceptors.response.use(function(n){return n},a),r.interceptors.response.use(Wn,Un)},kn=function(r){var t=r.config,a=t===void 0?{}:t,n=r.requestInterceptorsCallback,u=r.responseInterceptorOnSuccessCallback,o=r.responseInterceptorOnErrorCallback,I=(0,yn.Z)(An(),a),E=Oe.Z.create(I);wn(E,n),Kn(E,u,o);function x(k,L,Z){return E.request(s()({url:k,params:L},Z))}function P(k,L,Z){return E.request(s()({url:k,method:"post",params:L},Z))}function A(k,L,Z){return E.request(s()({url:k,method:"put",params:L},Z))}function K(k,L,Z){return E.request(s()({url:k,method:"delete",params:L},Z))}return{get:x,post:P,del:K,put:A}},bn=kn,zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",jn=function(r){var t=r.imgList,a=(0,U.useState)(!1),n=Y()(a,2),u=n[0],o=n[1],I=(0,U.useState)(""),E=Y()(I,2),x=E[0],P=E[1],A=(0,U.useState)([]),K=Y()(A,2),k=K[0],L=K[1],Z=(0,U.useState)([]),V=Y()(Z,2),$=V[0],ie=V[1],de=function ae(oe,te,X){var q=new Image,ne=te+1;q.src=oe,q.onload=function(){L(function(ee){return[].concat(_()(ee),[oe])}),ie(function(ee){return[].concat(_()(ee),[oe])}),X||P(oe),te<t.length-1?ae(t[ne],ne,!0):o(!1)},q.onerror=function(){L(function(ee){return[].concat(_()(ee),[zn])}),ne<t.length-1?ae(t[ne],ne):o(!1)}};return(0,U.useEffect)(function(){(t==null?void 0:t.length)>1&&(o(!0),de(t==null?void 0:t[0],0))},[]),console.log([x,k,$,u]),k.length!==t.length?["",[],[],!0]:[x,k,$,u]},Qn=jn,Nn=e(17061),pe=e.n(Nn),Fn=e(17156),De=e.n(Fn);function $n(h){var r=h.dataSource,t=h.delay,a=t===void 0?100:t,n=h.pageSize,u=n===void 0?10:n,o=h.fetchData,I=(0,U.useState)(!1),E=Y()(I,2),x=E[0],P=E[1],A=(0,U.useState)(!0),K=Y()(A,2),k=K[0],L=K[1],Z=(0,U.useState)([]),V=Y()(Z,2),$=V[0],ie=V[1];function de(){return ae.apply(this,arguments)}function ae(){return ae=De()(pe()().mark(function oe(){return pe()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(!(!(r!=null&&r.length)&&!o)){X.next=2;break}return X.abrupt("return");case 2:if(!(!k||x)){X.next=4;break}return X.abrupt("return");case 4:if(P(!0),!r){X.next=10;break}return X.next=8,new Promise(function(q){setTimeout(function(){q(r==null?void 0:r.slice($.length,$.length+u))},a)}).then(function(q){L(($==null?void 0:$.length)+(q==null?void 0:q.length)<(r==null?void 0:r.length)),ie(function(ne){return ne==null?void 0:ne.concat(q)})});case 8:X.next=12;break;case 10:return X.next=12,o==null?void 0:o({pageNum:$!=null&&$.length?Math.ceil(($==null?void 0:$.length)/u)+1:1,pageSize:u}).then(function(q){var ne=q.list,ee=ne===void 0?[]:ne,Se=q.total,nt=Se===void 0?0:Se;L(($==null?void 0:$.length)+(ee==null?void 0:ee.length)<nt&&(ee==null?void 0:ee.length)>0),ie(function(xe){return xe==null?void 0:xe.concat(ee)})});case 12:P(!1);case 13:case"end":return X.stop()}},oe)})),ae.apply(this,arguments)}return{data:$,setData:ie,loading:x,hasMore:k,loadMore:de}}var Yn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=(0,U.useState)(!1),n=Y()(a,2),u=n[0],o=n[1],I=(0,U.useRef)(null);return(0,U.useEffect)(function(){var E=new IntersectionObserver(function(x){x.forEach(function(P){P.isIntersecting?(o(!0),t&&E.unobserve(P.target)):o(!1)})},r);return I!=null&&I.current&&E.observe(I.current),function(){I!=null&&I.current&&E.unobserve(I.current)}},[r,t]),[I,u]},Jn=Yn,Hn=function(r){var t=(0,U.useRef)({});return(0,U.useLayoutEffect)(function(){t.current=r}),(0,U.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},Gn=Hn,Xn=function(){var r=(0,U.useState)({width:window.innerWidth,height:window.innerHeight}),t=Y()(r,2),a=t[0],n=t[1],u=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,U.useLayoutEffect)(function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}},[]),{width:a.width,height:a.height}},Zn=Xn;function Vn(){var h=(0,U.useRef)(!1),r=(0,U.useCallback)(function(){return h.current},[]);return(0,U.useEffect)(function(){return h.current=!0,function(){h.current=!1}},[]),r}function Re(h){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},a=(0,U.useRef)(0),n=Vn(),u=(0,U.useState)(t),o=Y()(u,2),I=o[0],E=o[1],x=(0,U.useCallback)(function(){var P=++a.current;return I.loading||E(function(A){return s()(s()({},A),{},{loading:!0})}),h.apply(void 0,arguments).then(function(A){return n()&&P===a.current&&E({value:A,loading:!1}),A},function(A){return n()&&P===a.current&&E({error:A,loading:!1}),A})},r);return[I,x]}var qn=function(r,t){var a=(0,U.useRef)(),n=function(){if(a.current)throw a.current.abort(),new Error(" Canceled .")};U.useEffect(function(){return function(){a.current&&a.current.abort()}},[]);var u=Re(De()(pe()().mark(function o(){var I,E,x,P,A=arguments;return pe()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return a.current&&a.current.abort(),a.current=new AbortController,I=a.current.signal,E={cancelInterceptor:n},k.next=6,r(E);case 6:return x=k.sent,k.next=9,x.apply(void 0,A);case 9:return P=k.sent,k.abrupt("return",P);case 11:case"end":return k.stop()}},o)})),t);return u},et=qn},48977:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(54197);const s=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(18283);const s=[]},9978:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(26211);const s=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(29876);const s=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(93139);const s=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(72155);const s=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(64577);const s=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(28587);const s=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(59301);const s=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(48035);const s=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(56139);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(38668);const s=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(81233);const s=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(35412);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(1019);const s=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(40801);const s=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(44012);const s=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(74746);const s=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(81286);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(5480);const s=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(51530);const s=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(68537);const s=[]},87724:function(B,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(79930);const s=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(B,l){l.Z=`import {
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
  // console.log(_stage);
  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default StageDemo;
`},66969:function(B,l){l.Z=`import { Animate, Circle, Stage, useResizeObserver } from 'heitu';
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

  const ani = new Animate(
    { value: 0 },
    { value: 360 },
    { duration: 1000, easing: 'quadraticInOut' },
  );
  const onclick = () => {
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
    ani.start();
    const radius = _circle2.radius;
    let curRadius = _circle2.radius;

    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;

      _circle2.attr({ radius: radius + curRadius });
    };
    ani.pushQueue(onUpdate);
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
