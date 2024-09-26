"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(54197),P={"docs-canvas-demo-0":{component:w.memo(w.lazy(R()(s()().mark(function v(){var M,_,f,c,I,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=g.sent,_=M.Custom,f=M.Stage,c=M.useResizeObserver,g.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=g.sent,d=I.default,O=I.useLayoutEffect,i=I.useRef,g.abrupt("return",{default:function(){var K=i(null),k=new f,L=new Path2D;L.moveTo(200,240),L.bezierCurveTo(200,200,120,150,120,200),L.bezierCurveTo(120,280,200,300,200,340),L.bezierCurveTo(200,300,280,280,280,200),L.bezierCurveTo(280,150,200,200,200,240);var z=new _({path2D:L,fillStyle:"pink",strokeStyle:"red"});return k.add(z),O(function(){k.buildContentDOM({container:K.current,backgroundColor:"#fff"})},[]),c(K,function(){return k._resizeDOM()}),d.createElement(d.Fragment,null,d.createElement("div",{ref:K}))}});case 13:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},67023:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(18283),P={"docs-canvas-stage-demo-stagedemo1":{component:w.memo(w.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}},"docs-canvas-stage-demo-stagedemo":{component:w.memo(w.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},44401:function(T,l,e){e.r(l),e.d(l,{demos:function(){return B}});var y=e(67294),s=e(26211),B={}},97086:function(T,l,e){e.r(l),e.d(l,{demos:function(){return B}});var y=e(67294),s=e(29876),B={}},64234:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(93139),M={"docs-hooks-use-async-fn-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return I=i.sent,d=I.useAsyncFn,i.abrupt("return",{default:function(){var g=d(D()(s()().mark(function p(){var H;return s()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,new Promise(function(Y){setTimeout(function(){Y(200)},5e3)});case 2:return H=X.sent,X.abrupt("return",H);case 4:case"end":return X.stop()}},p)})),[]),S=R()(g,2),K=S[0],k=K.loading,L=K.value,z=S[1];return console.log(k,L),c.createElement("div",null,c.createElement("button",{onClick:function(){z()}},"get"),k&&"loading"," ",c.createElement("br",null),"data: ".concat(L||""))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},75326:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(72155),M={"docs-hooks-use-cancel-async-fn-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,I=f.useRef,g.next=7,Promise.resolve().then(e.bind(e,55511));case 7:return d=g.sent,O=d.useCancelAsyncFn,i=d.useHtAxios,g.abrupt("return",{default:function(){var K=I(),k=i({config:{timeout:1e4},requestInterceptorsCallBack:function(V){return V},responseInterceptorsCallBack:function(V){return V.data}}),L=O(function(){var Y=D()(s()().mark(function V(ie){var ve;return s()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return ve=ie.cancelInterceptor,de.abrupt("return",function(){var Ee=D()(s()().mark(function fe(Ce){var me;return s()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,k.get("http://jsonplaceholder.typicode.com/posts").catch(function(ge){console.log(ge)});case 2:return me=ue.sent,ve(),ue.abrupt("return",me);case 5:case"end":return ue.stop()}},fe)}));return function(fe){return Ee.apply(this,arguments)}}());case 2:case"end":return de.stop()}},V)}));return function(V){return Y.apply(this,arguments)}}(),[]),z=R()(L,2),p=z[0],H=p.value,$=p.loading,X=z[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){var Y=D()(s()().mark(function ie(){return s()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:X();case 1:case"end":return te.stop()}},ie)}));function V(){return Y.apply(this,arguments)}return V}()},"12312"))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},31701:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(64577),M={"docs-hooks-use-cookie-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return I=i.sent,d=I.useCookie,i.abrupt("return",{default:function(){var g={path:"/"},S="cookie-key",K=d(S,g,"default-value"),k=R()(K,3),L=k[0],z=k[1],p=k[2],H=function(){z("new-cookie-value")},$=function(){z(void 0)},X=function(){if("cookieStore"in window){var V=window.cookieStore;V.set({name:S,value:"changed"})}else document.cookie="".concat(S,"=changed; path=/")};return c.createElement("div",null,c.createElement("p",null,"Click on the button to update or clear the cookie"),c.createElement("p",{color:"blue"},"cookie: ",L||"no value"),c.createElement("button",{onClick:H},"Update the cookie"),c.createElement("button",{onClick:$},"Clear the cookie"),c.createElement("button",{onClick:X},"Changing the cookie through other methods"),c.createElement("button",{onClick:p},"Refresh the cookie"))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},67731:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(28587),M={"docs-hooks-use-count-down-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return I=i.sent,d=I.useCountDown,i.abrupt("return",{default:function(){var g=d(),S=R()(g,3),K=S[0],k=S[1],L=S[2];return c.createElement("div",null,K,c.createElement("button",{onClick:function(){k(60)}},"\u5F00\u59CB"),c.createElement("button",{onClick:function(){L()}},"\u6682\u505C"),c.createElement("button",{onClick:function(){k()}},"\u7EE7\u7EED"))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},66609:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(59301),M={"docs-hooks-use-deep-compare-effect-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d,O,i,N;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=S.sent,c=f.default,I=f.useState,d=f.useEffect,O=f.useRef,S.next=9,Promise.resolve().then(e.bind(e,55511));case 9:return i=S.sent,N=i.useDeepCompareEffect,S.abrupt("return",{default:function(){var k=I(0),L=R()(k,2),z=L[0],p=L[1],H=O(0),$=O(0);return d(function(){H.current+=1},[{}]),N(function(){return $.current+=1,function(){}},[{}]),c.createElement("div",null,c.createElement("p",null,"effectCount: ",H.current),c.createElement("p",null,"deepCompareCount: ",$.current),c.createElement("p",null,c.createElement("button",{type:"button",onClick:function(){return p(function(Y){return Y+1})}},"reRender")))}});case 12:case"end":return S.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},5958:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(48035),P={"docs-hooks-use-device-pixel-ratio-demo-0":{component:w.memo(w.lazy(R()(s()().mark(function v(){var M,_,f,c;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=d.sent,_=M.default,d.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return f=d.sent,c=f.useDevicePixelRatio,d.abrupt("return",{default:function(){var i=c(),N=i.pixelRatio;return _.createElement("p",null,"Device pixel ratio: ",N)}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},65585:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(56139),P={"docs-hooks-use-element-size-demo-0":{component:w.memo(w.lazy(R()(s()().mark(function v(){var M,_,f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=i.sent,_=M.default,f=M.useRef,c=M.useEffect,i.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return I=i.sent,d=I.useElementSize,i.abrupt("return",{default:function(){var g=f(null),S=d(g);return c(function(){console.log(g.current.mount)},[]),_.createElement("div",null,_.createElement("textarea",{ref:g,disabled:!0,style:{width:200,height:200},value:"width: ".concat(S.width,`
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},23897:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(38668),P={"docs-hooks-use-ht-axios-demo-0":{component:w.memo(w.lazy(R()(s()().mark(function v(){var M,_,f,c;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=d.sent,_=M.useHtAxios,d.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return f=d.sent,c=f.default,d.abrupt("return",{default:function(){var i=_({config:{timeout:3e3},requestInterceptorsCallBack:function(S){return S},responseInterceptorsCallBack:function(S){return S.data}}),N=function(){var g=R()(s()().mark(function S(){var K;return s()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,i.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:K=L.sent,console.log(K);case 4:case"end":return L.stop()}},S)}));return function(){return g.apply(this,arguments)}}();return c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},c.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){N()}},"123"))}});case 9:case"end":return d.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55511),react:e(67294)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},97716:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(81233),M={"docs-hooks-use-image-load-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return I=i.sent,d=I.useImageLoad,i.abrupt("return",{default:function(){var g=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],S=d({imgList:g}),K=R()(S,4),k=K[0],L=K[1],z=K[2],p=K[3];return c.createElement("div",{style:{display:"flex"}},p?"loading":c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("div",null,"img"),c.createElement("img",{src:k,style:{width:200}})),c.createElement("div",null,c.createElement("div",null,"ftimgList"),L==null?void 0:L.map(function(H,$){return c.createElement("img",{src:H,key:$,style:{width:200}})})),c.createElement("div",null,c.createElement("div",null,"allowImgList"),z==null?void 0:z.map(function(H,$){return c.createElement("img",{src:H,key:$,style:{width:200}})}))))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},79817:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(35412),M={"docs-hooks-use-in-view-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=i.sent,c=f.default,i.next=6,Promise.resolve().then(e.bind(e,55511));case 6:return I=i.sent,d=I.useInView,i.abrupt("return",{default:function(){var g=d(),S=R()(g,2),K=S[0],k=S[1];return c.createElement("div",null,c.createElement("div",null,k?"active":"inactive"),c.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},c.createElement("div",{ref:K},"12312312")))}});case 9:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},59842:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(1019),M={"docs-hooks-use-infinite-scroll-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d,O,i,N;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return N=function(k){var L=k.hasMore,z=k.loadMore,p=i(),H=R()(p,2),$=H[0],X=H[1];return I(function(){X&&L&&(z==null||z())},[L,X,z]),c.createElement("div",{ref:$},L?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},S.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return f=S.sent,c=f.default,I=f.useEffect,S.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return d=S.sent,O=d.useInfiniteScroll,i=d.useInView,S.abrupt("return",{default:function(){var k=new Array(100).fill(1).map(function($,X){return X}),L=O({dataSource:k,pageSize:10,delay:100}),z=L.data,p=L.hasMore,H=L.loadMore;return c.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},z==null?void 0:z.map(function($){return c.createElement("span",null,$)}),c.createElement(N,{loadMore:H,hasMore:p}))}});case 12:case"end":return S.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},96122:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(40801),M={"docs-hooks-use-local-storage-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I;return s()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return f=O.sent,c=f.useLocalStorage,I=function(){var N=c("my-key","foo"),g=R()(N,3),S=g[0],K=g[1],k=g[2];return P.createElement("div",null,P.createElement("div",null,"Value: ",S),P.createElement("button",{onClick:function(){return K("bar")}},"bar"),P.createElement("button",{onClick:function(){return K("baz")}},"baz"),P.createElement("button",{onClick:function(){return k()}},"Remove"))},O.abrupt("return",{default:I});case 6:case"end":return O.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},13917:function(T,l,e){e.r(l),e.d(l,{demos:function(){return B}});var y=e(67294),s=e(44012),B={}},37868:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(74746),M={"docs-hooks-use-previous-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,I=f.useState,g.next=7,Promise.resolve().then(e.bind(e,55511));case 7:return d=g.sent,O=d.usePrevious,i=function(K){var k=O(K);return console.log(k,K),c.createElement("div",null,c.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(k==null?void 0:k.aa)||0," "),c.createElement("div",null,"\u5F53\u524D\u7684aa: ",K==null?void 0:K.aa))},g.abrupt("return",{default:function(){var K=I(1),k=R()(K,2),L=k[0],z=k[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){return z(L+1)}},"+1"),c.createElement(i,{aa:L}))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},7411:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(81286),M={"docs-hooks-use-resize-observer-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I,d,O,i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return f=g.sent,c=f.default,I=f.useRef,d=f.useState,g.next=8,Promise.resolve().then(e.bind(e,55511));case 8:return O=g.sent,i=O.useResizeObserver,g.abrupt("return",{default:function(){var K=I(null),k=d({width:0,height:0}),L=R()(k,2),z=L[0],p=L[1];return i(K,function(H){var $=R()(H,1),X=$[0],Y=X.contentRect,V=Y.width,ie=Y.height;p({width:V,height:ie})}),c.createElement("div",null,c.createElement("textarea",{ref:K,disabled:!0,style:{width:200,height:200},value:"width: ".concat(z.width,`
height: `).concat(z.height)}))}});case 11:case"end":return g.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},12830:function(T,l,e){e.r(l),e.d(l,{demos:function(){return M}});var y=e(17061),s=e.n(y),B=e(27424),R=e.n(B),w=e(17156),D=e.n(w),P=e(67294),v=e(5480),M={"docs-hooks-use-session-storage-demo-0":{component:P.memo(P.lazy(D()(s()().mark(function _(){var f,c,I;return s()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return f=O.sent,c=f.useSessionStorage,I=function(){var N=c("my-key","foo"),g=R()(N,3),S=g[0],K=g[1],k=g[2];return P.createElement("div",null,P.createElement("div",null,"Value: ",S),P.createElement("button",{onClick:function(){return K("bar")}},"bar"),P.createElement("button",{onClick:function(){return K("baz")}},"baz"),P.createElement("button",{onClick:function(){return k()}},"Remove"))},O.abrupt("return",{default:I});case 6:case"end":return O.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var _=D()(s()().mark(function c(){var I,d=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(I=i.sent).default.apply(I,d));case 3:case"end":return i.stop()}},c)}));function f(){return _.apply(this,arguments)}return f}()}}}},9954:function(T,l,e){e.r(l),e.d(l,{demos:function(){return P}});var y=e(17061),s=e.n(y),B=e(17156),R=e.n(B),w=e(67294),D=e(51530),P={"docs-hooks-use-window-size-demo-0":{component:w.memo(w.lazy(R()(s()().mark(function v(){var M,_,f;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,55511));case 2:return M=I.sent,_=M.useWindowSize,f=function(){var O=_(),i=O.width,N=O.height;return w.createElement("div",null,w.createElement("p",null,"width: ",i,", height: ",N))},I.abrupt("return",{default:f});case 6:case"end":return I.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(55511)},renderOpts:{compile:function(){var v=R()(s()().mark(function _(){var f,c=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,c));case 3:case"end":return d.stop()}},_)}));function M(){return v.apply(this,arguments)}return M}()}}}},11171:function(T,l,e){e.r(l),e.d(l,{demos:function(){return B}});var y=e(67294),s=e(68537),B={}},6202:function(T,l,e){e.r(l),e.d(l,{demos:function(){return B}});var y=e(67294),s=e(79930),B={}},55511:function(T,l,e){e.r(l),e.d(l,{Animate:function(){return L},Circle:function(){return Ee},Custom:function(){return Ce},Line:function(){return ge},Rect:function(){return Te},Stage:function(){return qe},Text:function(){return we},useAsyncFn:function(){return Re},useCancelAsyncFn:function(){return nt},useCookie:function(){return dn},useCountDown:function(){return hn},useDeepCompareEffect:function(){return In},useDevicePixelRatio:function(){return _n},useElementSize:function(){return yn},useHtAxios:function(){return zn},useImageLoad:function(){return Nn},useInView:function(){return Hn},useInfiniteScroll:function(){return Yn},useLocalStorage:function(){return an},usePrevious:function(){return Xn},useResizeObserver:function(){return Me},useSessionStorage:function(){return un},useWindowSize:function(){return Vn}});var y=e(42122),s=e.n(y),B=e(56690),R=e.n(B),w=e(89728),D=e.n(w),P=e(38416),v=e.n(P),M=e(861),_=e.n(M),f=window.devicePixelRatio,c=function(){},I=function(r){return r.name==="Stage"},d=function(r,t){return Array.from(new Map([].concat(_toConsumableArray(r),_toConsumableArray(t)).map(function(a){return[a.name,a]})).values())},O=function(r,t,a){return a!=null&&a.x&&a!==null&&a!==void 0&&a.width&&a.y&&a!==null&&a!==void 0&&a.height?r>(a==null?void 0:a.x)*f&&r<(((a==null?void 0:a.x)||0)+((a==null?void 0:a.width)||0))*f&&t>(a==null?void 0:a.y)*f&&t<a.y*f+a.height*f:!1},i=function(r){var t=r.mouseX,a=r.mouseY,n=r.path2D,u=r.ctx;return n&&u&&(u==null?void 0:u.isPointInPath(n,t,a))},N={linear:function(r){return r},quadraticIn:function(r){return r*r},quadraticOut:function(r){return r*(2-r)},quadraticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(r){var t=r;return t*t*t},cubicOut:function(r){var t=r;return--t*t*t+1},cubicInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(r){var t=r;return t*t*t*t},quarticOut:function(r){var t=r;return 1- --t*t*t*t},quarticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(r){return r*r*r*r*r},quinticOut:function(r){var t=r;return--t*t*t*t*t+1},quinticInOut:function(r){var t=r;return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(r){return 1-Math.cos(r*Math.PI/2)},sinusoidalOut:function(r){return Math.sin(r*Math.PI/2)},sinusoidalInOut:function(r){return .5*(1-Math.cos(Math.PI*r))},exponentialIn:function(r){return r===0?0:Math.pow(1024,r-1)},exponentialOut:function(r){return r===1?1:1-Math.pow(2,-10*r)},exponentialInOut:function(r){var t=r;return r===0?0:r===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(r){return 1-Math.sqrt(1-r*r)},circularOut:function(r){var t=r;return Math.sqrt(1- --t*t)},circularInOut:function(r){var t=r;return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(r){var t,a=.1,n=.4;if(r===0)return 0;if(r===1)return 1;!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI);var u=r;return-(a*Math.pow(2,10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n))},elasticOut:function(r){var t,a=.1,n=.4;return r===0?0:r===1?1:(!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*r)*Math.sin((r-t)*(2*Math.PI)/n)+1)},elasticInOut:function(r){var t,a=.1,n=.4;if(r===0)return 0;if(r===1)return 1;!a||a<1?(a=1,t=n/4):t=n*Math.asin(1/a)/(2*Math.PI);var u=r;return(u*=2)<1?-.5*(a*Math.pow(2,10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n)):a*Math.pow(2,-10*(u-=1))*Math.sin((u-t)*(2*Math.PI)/n)*.5+1},backIn:function(r){var t=1.70158;return r*r*((t+1)*r-t)},backOut:function(r){var t=r,a=1.70158;return--t*t*((a+1)*t+a)+1},backInOut:function(r){var t=r,a=1.70158*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},bounceIn:function(r){return 1-N.bounceOut(1-r)},bounceOut:function(r){var t=r;return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(r){return r<.5?N.bounceIn(r*2)*.5:N.bounceOut(r*2-1)*.5+.5}};function g(h,r,t){var a=r-h,n=t*a,u=h+n,o=h<r?h:r,m=h>r?h:r;return u=Math.max(u,o),u=Math.min(u,m),u}var S=function(r,t,a){if(typeof r=="number"&&typeof t=="number")return g(r,t,a);if(Array.isArray(r)&&Array.isArray(t))return r.map(function(n,u){return g(n,t[u],a)})},K={duration:1e3,easing:"linear",iterationCount:1},k=function(){function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};R()(this,h),v()(this,"rafTimer",null),v()(this,"startTime",null),v()(this,"startProp",void 0),v()(this,"targetProp",void 0),v()(this,"cfg",void 0),v()(this,"forward",!0),v()(this,"queue",[]),this.startProp=r,this.targetProp=t,this.cfg=s()(s()({},K),a)}return D()(h,[{key:"start",value:function(){var t=this,a=this.cfg,n=a.duration,u=a.easing,o=a.during,m=a.iterationCount,E=Object.keys(this.targetProp),A=1,x=function U(b){console.log(A),A++,t.startTime||(t.startTime=b);var C=N[u](Math.min((b-t.startTime)/n,1));t.forward===!1&&(C=1-C);var j={};E.forEach(function(F){var re=S(t.startProp[F],t.targetProp[F],C);j[F]=re}),o&&o(C,j);var J=t.forward?C<1:0<C;J?t.rafTimer=requestAnimationFrame(U):(t.queue=[],t.stop()),t.queue.length>0&&t.queue.forEach(function(F){F(j,C)});var Q=t.forward?C===1:C===0;Q&&m===1/0&&(t.forward=!t.forward,t.startTime=null,t.start())};this.rafTimer=requestAnimationFrame(x)}},{key:"checkEdge",value:function(){}},{key:"stop",value:function(){this.rafTimer&&cancelAnimationFrame(this.rafTimer)}},{key:"pushQueue",value:function(t){this.queue.push(t)}}]),h}(),L=k,z=e(66115),p=e.n(z),H=e(61655),$=e.n(H),X=e(26389),Y=e.n(X),V=e(30954),ie=e(79697),ve=function(){function h(){R()(this,h),v()(this,"eventListeners",{}),v()(this,"shapeEventListeners",{})}return D()(h,[{key:"on",value:function(t,a){var n=t.split(" "),u=n.length,o,m,E,A;for(o=0;o<u;o++)m=n[o],E=m.split("."),A=E[0],this.eventListeners[A]||(this.eventListeners[A]=[]),this.eventListeners[A].push({name:a.name||"",handler:a});return this}},{key:"_off",value:function(t,a,n){var u=this.eventListeners[t],o,m,E;for(o=0;o<u.length;o++)if(m=u[o].name,E=u[o].handler,(!a||m===a)&&(!n||n===E)){if(u.splice(o,1),u.length===0){delete this.eventListeners[t];break}o--}}},{key:"off",value:function(t,a){var n=(t||"").split(" "),u=n.length,o,m,E,A,x,U;for(o=0;o<u;o++)if(E=n[o],A=E.split("."),x=A[0],U=A[1],x)this.eventListeners[x]&&this._off(x,U,a);else for(m in this.eventListeners)this._off(m,U,a);return this}},{key:"_fire",value:function(t,a,n){if(I(n))this.eventListeners[t].forEach(function(m){m.handler(a)});else{var u;if((n==null||(u=n.eventListeners)===null||u===void 0||(u=u[t])===null||u===void 0?void 0:u.length)>0&&n.eventListeners[t].forEach(function(m){m.handler(a)}),n!=null&&n.draggable){var o;(o=n.eventListeners)===null||o===void 0||(o=o[t])===null||o===void 0||o.forEach(function(m){m==null||m.handler(a)})}}}},{key:"fire",value:function(t,a){var n=a.evt,u=a.target,o=a.currentTarget;if(I(o)){(!this.eventListeners[t]||this.eventListeners[t].length<1)&&(this.eventListeners[t]=[]),this._fire(t,n,o);for(var m=u==null?void 0:u.children,E=0;E<m.length;E++){var A,x,U=_()(this.children.filter(function(G){return G.draggable}));if(t==="mousedown"){var b=U.filter(function(G){var q;return G==null?void 0:G.inScope(n,(q=u.canvas)===null||q===void 0?void 0:q.context)}),C=b.sort(function(G,q){return q.index-G.index})[0];C&&(C.dragging=!0,C.offsetX=C!=null&&C.x?n.offsetX-(C==null?void 0:C.x):n.offsetX,C.offsetY=C!=null&&C.y?n.offsetY-(C==null?void 0:C.y):n.offsetY)}(!(0,ie.Z)((A=m[E])===null||A===void 0?void 0:A.eventListeners)||(x=m[E])!==null&&x!==void 0&&x.draggable)&&this.fire(t,{evt:n,target:u,currentTarget:m[E]})}}else{var j;if(o!=null&&o.draggable&&t==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&t==="mousemove"){var J,Q=(J=this.canvas)===null||J===void 0||(J=J.canvas)===null||J===void 0?void 0:J.getBoundingClientRect();if(o.name==="Text"){var F=Q!=null&&Q.left?n.clientX-(Q==null?void 0:Q.left):n.clientX,re=Q!=null&&Q.top?n.clientY-(Q==null?void 0:Q.top):n.clientY;o.x=o!=null&&o.offsetX?F-(o==null?void 0:o.offsetX):F,o.y=o!=null&&o.offsetY?re-(o==null?void 0:o.offsetY):re}else{var he=Q!=null&&Q.left?n.clientX-(Q==null?void 0:Q.left):n.clientX,oe=Q!=null&&Q.top?n.clientY-(Q==null?void 0:Q.top):n.clientY;o.x=o!=null&&o.offsetX?he-(o==null?void 0:o.offsetX):he,o.y=o!=null&&o.offsetY?oe-(o==null?void 0:o.offsetY):oe}this.batchDraw(this)}if(o!=null&&o.inScope&&(j=u.canvas)!==null&&j!==void 0&&j.context){var ae;if(o!=null&&o.inScope(n,(ae=u.canvas)===null||ae===void 0?void 0:ae.context)){var le;t!=="mouseenter"&&t!=="mouseleave"&&t!=="mouseout"&&t!=="mouseover"&&this._fire(t,n,o),t==="mousemove"&&!o.mouseInScope&&((le=o.eventListeners.mouseenter)===null||le===void 0?void 0:le.length)>0&&(o.mouseInScope=!0,u._fire("mouseenter",n,o))}else if(t==="mousemove"){var ee;o.mouseInScope=!1,((ee=u.eventListeners.mouseleave)===null||ee===void 0?void 0:ee.length)>0&&u._fire("mouseleave",n,o)}}}}},{key:"attr",value:function(t){var a=this,n;this.parent&&((0,V.Z)(t,function(u,o){u&&(a[o]=u)}),(n=this.parent)===null||n===void 0||n.batchDraw(this.parent))}}]),h}(),te=ve,de=function(h){$()(t,h);var r=Y()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Circle"),v()(p()(n),"parent",null),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"radius",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"arc",void 0),v()(p()(n),"startAngle",void 0),v()(p()(n),"endAngle",void 0),v()(p()(n),"innerRadius",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"border",void 0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,(0,V.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,u,o,m){var E=this.deg2rad(m),A=n+o*Math.cos(E),x=u+o*Math.sin(E);return{x:A,y:x}}},{key:"calcWholeRingD",value:function(){var n=this.y-this.radius,u="M ".concat(this.x," ").concat(n),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),m=this.y-this.innerRadius,E="M ".concat(this.x," ").concat(m),A="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(m);return"".concat(u," ").concat(o," ").concat(E," ").concat(A," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),u=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,m="M ".concat(n.x," ").concat(n.y),E="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(u.x," ").concat(u.y),A=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),x=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),U="L".concat(x.x," ").concat(x.y),b="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(A.x," ").concat(A.y);return"".concat(m," ").concat(E," ").concat(U," ").concat(b," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var u=this.startAngle===0&&this.endAngle===360,o;switch(this.border){case 0:return o=new Path2D(this.calcRingD(u)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(u)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(u)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(o),n.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,m=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:m,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(te),Ee=de,fe=function(h){$()(t,h);var r=Y()(t);function t(a){var n;if(R()(this,t),n=r.call(this),v()(p()(n),"name","Custom"),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),!a.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,(0,V.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,m=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:m,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(te),Ce=fe,me=e(27424),Z=e.n(me),ue=function(h){$()(t,h);var r=Y()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Line"),v()(p()(n),"start",void 0),v()(p()(n),"end",void 0),v()(p()(n),"points",void 0),v()(p()(n),"smooth",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"lineCap",void 0),v()(p()(n),"lineJoin",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,(0,V.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(u,o,m){var E=Math.floor(m/2);return m%2===0?u.push([o]):u[E].push(o),u},[]).map(function(u){var o=Z()(u,2),m=o[0],E=o[1];return{x:m,y:E}})}},{key:"calcSmoothPath2D",value:function(){var n,u,o,m=new Path2D;return m.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((u=this.start)===null||u===void 0?void 0:u.y)||0),m.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&m.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&m.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=m,m}},{key:"calcStraightPath2D",value:function(){var n,u,o,m,E=new Path2D;E.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((u=this.start)===null||u===void 0?void 0:u.y)||0);var A=this.convertToNormalPoints([].concat(_()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(m=this.end)===null||m===void 0?void 0:m.y]));return A.forEach(function(x){var U=x.x,b=x.y;E.lineTo(U,b)}),E}},{key:"draw",value:function(n){var u=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(u),this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,m=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:m,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(te),ge=ue,Le=function(h){$()(t,h);var r=Y()(t);function t(a){var n;return R()(this,t),n=r.call(this),v()(p()(n),"name","Rect"),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"strokeStyle",void 0),v()(p()(n),"lineWidth",void 0),v()(p()(n),"index",void 0),v()(p()(n),"path2D",void 0),v()(p()(n),"parent",null),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.index=0,(0,V.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){var u=new Path2D;return u.moveTo(this.x,this.y),u.lineTo(this.x+this.width,this.y),u.lineTo(this.x+this.width,this.y+this.height),u.lineTo(this.x,this.y+this.height),u.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(u),this.fillStyle&&n.fill(u),this.path2D=u,this}},{key:"inScope",value:function(n,u){var o=n.offsetX*f,m=n.offsetY*f;return this!==null&&this!==void 0&&this.path2D?i({mouseX:o,mouseY:m,path2D:this===null||this===void 0?void 0:this.path2D,ctx:u||void 0}):!1}}]),t}(te),Te=Le,Be=function(h){$()(t,h);var r=Y()(t);function t(a){var n;if(R()(this,t),n=r.call(this),v()(p()(n),"name","Text"),v()(p()(n),"parent",null),v()(p()(n),"x",void 0),v()(p()(n),"y",void 0),v()(p()(n),"content",void 0),v()(p()(n),"fillStyle",void 0),v()(p()(n),"fontFamily",void 0),v()(p()(n),"fontSize",void 0),v()(p()(n),"textAlign",void 0),v()(p()(n),"textBaseline",void 0),v()(p()(n),"width",void 0),v()(p()(n),"height",void 0),v()(p()(n),"index",0),n.content="",!a.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,(0,V.Z)(a,function(u,o){u&&(p()(n)[o]=u)}),n}return D()(t,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var u=n.measureText(this.content);return this.width=u.width,this.height=this.fontSize,this}},{key:"inScope",value:function(n){var u=n.offsetX*f,o=n.offsetY*f;return O(u,o,this)}}]),t}(te),we=Be,Ie=null,We=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(h){setTimeout(h,60)},Ue=function(){var r=document.createElement("canvas");try{r.style=r.style||{}}catch(t){}return r},rt=function(r){Ie.push(r),Ie.length===1&&We(function(){var t=Ie;Ie=[],t.forEach(function(a){a()})})},Ke=function(){function h(){R()(this,h),v()(this,"canvas",void 0),v()(this,"context",void 0),v()(this,"width",0),v()(this,"height",0),this.canvas=Ue(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return D()(h,[{key:"setWidth",value:function(t){this.width=this.canvas.width=t*f,this.canvas.style.width=t+"px"}},{key:"setHeight",value:function(t){this.height=this.canvas.height=t*f,this.canvas.style.height=t+"px",this.context.scale(f,f)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(t){this.canvas.style.background=t}},{key:"setSize",value:function(t,a){this.setWidth(t||0),this.setHeight(a||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(t,a,n){return n&&this.setBackgroundColor(n),this.canvas}}]),h}(),ke=function(h){$()(t,h);var r=Y()(t);function t(){var a;R()(this,t);for(var n=arguments.length,u=new Array(n),o=0;o<n;o++)u[o]=arguments[o];return a=r.call.apply(r,[this].concat(u)),v()(p()(a),"children",[]),a}return D()(t,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var u=this.children||[],o=[];return u.forEach(function(m){n(m)&&o.push(m)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var u=arguments.length<=0?void 0:arguments[0];return u.index=u.index?u.index:this.getChildren().length,u.parent=this,this.getChildren().push(u),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(u){var o=n.some(function(m){return m===u});o||n.push(u)}),this.children=n,n}},{key:"batchDraw",value:function(n){var u,o,m,E,A;!((u=n.canvas)!==null&&u!==void 0&&u.context)||!((o=n.canvas)!==null&&o!==void 0&&o.canvas)||((m=n.canvas)===null||m===void 0||m.context.clearRect(0,0,(E=n.canvas)===null||E===void 0?void 0:E.canvas.offsetWidth,(A=n.canvas)===null||A===void 0?void 0:A.canvas.offsetHeight),this.sortChildren(function(x,U){return x.index-U.index}),this.deduplication(),this.getChildren().forEach(function(x){var U;if((U=n.canvas)!==null&&U!==void 0&&U.context&&x!==null&&x!==void 0&&x.draw){var b;x==null||x.draw((b=n.canvas)===null||b===void 0?void 0:b.context)}}))}}]),t}(te),be=ke,ze="mouseenter",je="mouseleave",Qe="mouseout",Ne="mouseover",Fe="mousedown",$e="mousemove",Ye="mouseup",Je="contextmenu",He="click",Ge="dblclick",Xe="wheel",Ze=[[ze,"_mouseenter"],[Fe,"_mousedown"],[$e,"_mousemove"],[je,"_mouseleave"],[Ye,"_mouseup"],[Qe,"_mouseout"],[Ne,"_mouseover"],[Je,"_contextmenu"],[Xe,"_wheel"],[He,"_click"],[Ge,"_dblclick"]],Ve=function(h){$()(t,h);var r=Y()(t);function t(){var a;return R()(this,t),a=r.call(this),v()(p()(a),"name","Stage"),v()(p()(a),"parent",null),v()(p()(a),"content",void 0),v()(p()(a),"canvas",void 0),v()(p()(a),"width",void 0),v()(p()(a),"height",void 0),v()(p()(a),"draggable",void 0),v()(p()(a),"isFirstRender",void 0),v()(p()(a),"_pointerPositions",[]),v()(p()(a),"_changedPointerPositions",[]),v()(p()(a),"pointerPos",null),a.content=null,a.canvas=null,a.width=100,a.height=500,a.isFirstRender=!0,a.draggable=!1,a}return D()(t,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var u=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),o=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=u,this.content.style.height=o,this.canvas=new Ke,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,u,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,u,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var u=this.content.getBoundingClientRect(),o={top:u.top,left:u.left,scaleX:u.width/this.content.clientWidth||1,scaleY:u.height/this.content.clientHeight||1},m=null,E=null;m=(n.clientX-o.left)/o.scaleX,E=(n.clientY-o.top)/o.scaleY,this.pointerPos={x:m,y:E}}},{key:"_bindContentEvents",value:function(){var n,u=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&Ze.forEach(function(o){var m,E=Z()(o,2),A=E[0],x=E[1];(m=u.content)===null||m===void 0||m.addEventListener(A,function(U){u[x](U)},{passive:!1})})}},{key:"_mouseenter",value:function(n){I(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){I(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),t}(be),qe=Ve,W=e(67294),ce,en=Object.prototype.toString;function nn(h){return typeof h=="function"}var at=function(r){return typeof r!="undefined"};function ot(h){return typeof h=="undefined"}var ut=function(r){return typeof r=="boolean"},it=function(r){return typeof r=="number"};function tn(h){return typeof h=="string"}function st(h){return en.call(h)==="[object Object]"}var lt=null,pe=typeof window!="undefined",dt=typeof navigator!="undefined";function Pe(){}var ct=pe&&((ce=window)===null||ce===void 0||(ce=ce.navigator)===null||ce===void 0?void 0:ce.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),ht=!W.useId,rn=function(r,t,a){if(!pe)return[t,Pe,Pe];if(!r)throw new Error("useLocalStorage key may not be falsy");var n=a?a.raw?function(b){return b}:a.deserializer:JSON.parse,u=(0,W.useRef)(function(b){try{var C=a?a.raw?String:a.serializer:JSON.stringify,j=localStorage.getItem(b);return j!==null?n(j):(t&&localStorage.setItem(b,C(t)),t)}catch(J){return t}}),o=(0,W.useState)(function(){return u.current(r)}),m=Z()(o,2),E=m[0],A=m[1];(0,W.useLayoutEffect)(function(){return A(u.current(r))},[r]);var x=(0,W.useCallback)(function(b){try{var C=typeof b=="function"?b(E):b;if(typeof C=="undefined")return;var j;a?a.raw?typeof C=="string"?j=C:j=JSON.stringify(C):a.serializer?j=a.serializer(C):j=JSON.stringify(C):j=JSON.stringify(C),localStorage.setItem(r,j),A(n(j))}catch(J){}},[r,A]),U=(0,W.useCallback)(function(){try{localStorage.removeItem(r),A(void 0)}catch(b){}},[r,A]);return[E,x,U]},an=rn,on=function(r,t,a){if(!pe)return[t,function(){}];var n=(0,W.useState)(function(){try{var E=sessionStorage.getItem(r);return typeof E!="string"?(sessionStorage.setItem(r,a?String(t):JSON.stringify(t)),t):a?E:JSON.parse(E||"null")}catch(A){return t}}),u=Z()(n,2),o=u[0],m=u[1];return(0,W.useEffect)(function(){try{var E=a?String(o):JSON.stringify(o);sessionStorage.setItem(r,E)}catch(A){}}),[o,m]},un=on,ye={};function vt(h){console.error(h)}var se=e(31955);function sn(h,r){return r!==void 0?r:pe?se.Z.get(h):""}var ln=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,a=arguments.length>2?arguments[2]:void 0,n=(0,W.useState)(sn(r,a)),u=Z()(n,2),o=u[0],m=u[1];(0,W.useEffect)(function(){var x=function(){var b=se.Z.get(r);return b!=null?b:(a===void 0?se.Z.remove(r):se.Z.set(r,a,t),a)};m(x())},[a,r,JSON.stringify(t)]);var E=(0,W.useCallback)(function(x){var U=nn(x)?x(o):x;U===void 0?se.Z.remove(r):se.Z.set(r,U,t),m(U)},[r,o,JSON.stringify(t)]),A=(0,W.useCallback)(function(){var x=se.Z.get(r);tn(x)&&m(x)},[r]);return[o,E,A]},dn=ln,cn=function(){var r=(0,W.useState)(0),t=Z()(r,2),a=t[0],n=t[1],u,o=function(){clearTimeout(u)},m=function(A){o(),n(A||function(x){return x-1})};return(0,W.useEffect)(function(){return u=setTimeout(function(){a>0?n(function(E){return E-1}):o()},1e3),function(){return o()}},[a]),[a,m,o]},hn=cn,vn=e(72249),fn=function(r,t,a){var n=(0,W.useRef)(void 0);(!n.current||!a(t,n.current))&&(n.current=t),(0,W.useEffect)(r,n.current)},mn=function(r,t){fn(r,t,vn.Z)},In=mn,pn=function(){var r=(0,W.useState)(1),t=Z()(r,2),a=t[0],n=t[1],u=(0,W.useCallback)(function(){if(window){n(window.devicePixelRatio);var o=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),m=function(){u()};return o.addEventListener("change",m,{once:!0}),function(){o.removeEventListener("change",m)}}},[]);return(0,W.useEffect)(function(){var o=u();return o},[u]),{pixelRatio:a}},_n=pn,En=function(r,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye;(0,W.useEffect)(function(){var n=new ResizeObserver(t);return r!=null&&r.current&&n.observe(r.current,a),function(){r!=null&&r.current&&n.unobserve(r.current),n.disconnect()}},[])},Me=En,gn=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,a=(0,W.useState)({width:0,height:0}),n=Z()(a,2),u=n[0],o=n[1];return Me(r,function(m){if(m.length!==0){var E=Z()(m,1),A=E[0],x=A.contentRect,U=x.width,b=x.height;o({width:U,height:b})}},t),u},yn=gn,Oe=e(54683),xn=e(33293),An="application/json;charset=utf-8",ft="application/x-www-form-urlencoded",mt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":An,Accept:"application/json;version=3.0;compress=false;"},Cn=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Pn=e(54998),Mn=e.n(Pn),On=e(49360),Dn=e(58146),Rn=e(73505),Sn=e(27771),Ln=e(77226),Tn=e(36378),xe=function h(r){if((0,On.Z)(r)||(0,Dn.Z)(r)||(0,Rn.Z)(r))return r;if((0,Sn.Z)(r))return r.map(function(a){return h(a)});if((0,Ln.Z)(r)){var t=Object.create(null);return Object.keys(r).forEach(function(a){t[a]=h(r[a])}),t}else return(0,Tn.Z)(r)?r.trim():r};function It(){return typeof window=="undefined"?!1:window&&window.__debug__}function pt(h){var r=atob(h);return Uint8Array.from(r,function(t){return t.codePointAt(0)})}function _t(h){var r=Array.from(h,function(t){return String.fromCodePoint(t)}).join("");return btoa(r)}var Bn=Oe.Z.CancelToken.source(),wn=function(r){r.cancelToken=Bn.token;var t=Mn()(r.url);if(r.url=t.query(xe(t.query(!0))||{}).toString(),r.data&&(r.data=xe(r.data)),r.params=xe(r.params||{}),r.cache&&(r.params=r.params||{},r.params.__cache__=Math.random()),r.filter){var a=r.data,n=a===void 0?{}:a;for(var u in n)if(n.hasOwnProperty(u)){var o=n[u];o==null&&delete n[u]}}return r.method==="get"&&r.data&&(r.params=r.data,delete r.data),r},Wn=function(r,t){t&&r.interceptors.request.use(function(a){return t(a)},function(a){return Promise.reject(a)}),r.interceptors.request.use(function(a){return wn(a)},function(a){return Promise.reject(a)})},Un=function(r){var t,a=r.data;try{if(a instanceof Blob){var n=r.headers["content-disposition"],u=n.split("filename=")[1];return{success:!0,data:{file:a,fileName:u}}}}catch(o){console.error(o)}return((t=r.headers)===null||t===void 0?void 0:t["content-type"].indexOf("application/json"))<0,a},Kn=function(r){var t="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!r.__CANCEL__){if(r){if(r.response&&r.response.data){var a=r.response.data.errors,n=a===void 0?[]:a,u=n&&n[0]||{};return Promise.reject({message:u.message||r.message||t,arguments:u.arguments||void 0,code:u.code||null})}return Promise.reject({message:r.message||t,arguments:void 0,code:null})}return Promise.reject({message:t,arguments:void 0,code:null})}},kn=function(r,t,a){t&&r.interceptors.response.use(function(n){return t(n)},function(n){return Promise.reject(n)}),t&&r.interceptors.response.use(function(n){return n},a),r.interceptors.response.use(Un,Kn)},bn=function(r){var t=r.config,a=t===void 0?{}:t,n=r.requestInterceptorsCallback,u=r.responseInterceptorOnSuccessCallback,o=r.responseInterceptorOnErrorCallback,m=(0,xn.Z)(Cn(),a),E=Oe.Z.create(m);Wn(E,n),kn(E,u,o);function A(C,j,J){return E.request(s()({url:C,params:j},J))}function x(C,j,J){return E.request(s()({url:C,method:"post",params:j},J))}function U(C,j,J){return E.request(s()({url:C,method:"put",params:j},J))}function b(C,j,J){return E.request(s()({url:C,method:"delete",params:j},J))}return{get:A,post:x,del:b,put:U}},zn=bn,jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Qn=function(r){var t=r.imgList,a=(0,W.useState)(!1),n=Z()(a,2),u=n[0],o=n[1],m=(0,W.useState)(""),E=Z()(m,2),A=E[0],x=E[1],U=(0,W.useState)([]),b=Z()(U,2),C=b[0],j=b[1],J=(0,W.useState)([]),Q=Z()(J,2),F=Q[0],re=Q[1],he=function oe(ae,le,ee){var G=new Image,q=le+1;G.src=ae,G.onload=function(){j(function(ne){return[].concat(_()(ne),[ae])}),re(function(ne){return[].concat(_()(ne),[ae])}),ee||x(ae),le<t.length-1?oe(t[q],q,!0):o(!1)},G.onerror=function(){j(function(ne){return[].concat(_()(ne),[jn])}),q<t.length-1?oe(t[q],q):o(!1)}};return(0,W.useEffect)(function(){(t==null?void 0:t.length)>1&&(o(!0),he(t==null?void 0:t[0],0))},[]),console.log([A,C,F,u]),C.length!==t.length?["",[],[],!0]:[A,C,F,u]},Nn=Qn,Fn=e(17061),_e=e.n(Fn),$n=e(17156),De=e.n($n);function Yn(h){var r=h.dataSource,t=h.delay,a=t===void 0?100:t,n=h.pageSize,u=n===void 0?10:n,o=h.fetchData,m=(0,W.useState)(!1),E=Z()(m,2),A=E[0],x=E[1],U=(0,W.useState)(!0),b=Z()(U,2),C=b[0],j=b[1],J=(0,W.useState)([]),Q=Z()(J,2),F=Q[0],re=Q[1];function he(){return oe.apply(this,arguments)}function oe(){return oe=De()(_e()().mark(function ae(){return _e()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(!(!(r!=null&&r.length)&&!o)){ee.next=2;break}return ee.abrupt("return");case 2:if(!(!C||A)){ee.next=4;break}return ee.abrupt("return");case 4:if(x(!0),!r){ee.next=10;break}return ee.next=8,new Promise(function(G){setTimeout(function(){G(r==null?void 0:r.slice(F.length,F.length+u))},a)}).then(function(G){j((F==null?void 0:F.length)+(G==null?void 0:G.length)<(r==null?void 0:r.length)),re(function(q){return q==null?void 0:q.concat(G)})});case 8:ee.next=12;break;case 10:return ee.next=12,o==null?void 0:o({pageNum:F!=null&&F.length?Math.ceil((F==null?void 0:F.length)/u)+1:1,pageSize:u}).then(function(G){var q=G.list,ne=q===void 0?[]:q,Se=G.total,tt=Se===void 0?0:Se;j((F==null?void 0:F.length)+(ne==null?void 0:ne.length)<tt&&(ne==null?void 0:ne.length)>0),re(function(Ae){return Ae==null?void 0:Ae.concat(ne)})});case 12:x(!1);case 13:case"end":return ee.stop()}},ae)})),oe.apply(this,arguments)}return{data:F,setData:re,loading:A,hasMore:C,loadMore:he}}var Jn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=(0,W.useState)(!1),n=Z()(a,2),u=n[0],o=n[1],m=(0,W.useRef)(null);return(0,W.useEffect)(function(){var E=new IntersectionObserver(function(A){A.forEach(function(x){x.isIntersecting?(o(!0),t&&E.unobserve(x.target)):o(!1)})},r);return m!=null&&m.current&&E.observe(m.current),function(){m!=null&&m.current&&E.unobserve(m.current)}},[r,t]),[m,u]},Hn=Jn,Gn=function(r){var t=(0,W.useRef)({});return(0,W.useLayoutEffect)(function(){t.current=r}),(0,W.useLayoutEffect)(function(){return function(){t.current={}}},[]),t.current},Xn=Gn,Zn=function(){var r=(0,W.useState)({width:window.innerWidth,height:window.innerHeight}),t=Z()(r,2),a=t[0],n=t[1],u=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,W.useLayoutEffect)(function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}},[]),{width:a.width,height:a.height}},Vn=Zn;function qn(){var h=(0,W.useRef)(!1),r=(0,W.useCallback)(function(){return h.current},[]);return(0,W.useEffect)(function(){return h.current=!0,function(){h.current=!1}},[]),r}function Re(h){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},a=(0,W.useRef)(0),n=qn(),u=(0,W.useState)(t),o=Z()(u,2),m=o[0],E=o[1],A=(0,W.useCallback)(function(){var x=++a.current;return m.loading||E(function(U){return s()(s()({},U),{},{loading:!0})}),h.apply(void 0,arguments).then(function(U){return n()&&x===a.current&&E({value:U,loading:!1}),U},function(U){return n()&&x===a.current&&E({error:U,loading:!1}),U})},r);return[m,A]}var et=function(r,t){var a=(0,W.useRef)(),n=function(){if(a.current)throw a.current.abort(),new Error(" Canceled .")};W.useEffect(function(){return function(){a.current&&a.current.abort()}},[]);var u=Re(De()(_e()().mark(function o(){var m,E,A,x,U=arguments;return _e()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a.current&&a.current.abort(),a.current=new AbortController,m=a.current.signal,E={cancelInterceptor:n},C.next=6,r(E);case 6:return A=C.sent,C.next=9,A.apply(void 0,U);case 9:return x=C.sent,C.abrupt("return",x);case 11:case"end":return C.stop()}},o)})),t);return u},nt=et},48977:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(54197);const s=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(18283);const s=[]},9978:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(26211);const s=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(29876);const s=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(93139);const s=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(72155);const s=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(64577);const s=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(28587);const s=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(59301);const s=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(48035);const s=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(56139);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(38668);const s=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(81233);const s=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(35412);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(1019);const s=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(40801);const s=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(44012);const s=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(74746);const s=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(81286);const s=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(5480);const s=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(51530);const s=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(68537);const s=[]},87724:function(T,l,e){e.r(l),e.d(l,{texts:function(){return s}});var y=e(79930);const s=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(T,l){l.Z=`import {
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
