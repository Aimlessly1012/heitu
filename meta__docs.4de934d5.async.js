"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(54197),x={"docs-canvas-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var A,I,v,r,m,c,E,i;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,26968));case 2:return A=y.sent,I=A.Custom,v=A.Stage,r=A.useResizeObserver,y.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return m=y.sent,c=m.default,E=m.useLayoutEffect,i=m.useRef,y.abrupt("return",{default:function(){var K=i(null),W=new v,R=new Path2D;R.moveTo(200,240),R.bezierCurveTo(200,200,120,150,120,200),R.bezierCurveTo(120,280,200,300,200,340),R.bezierCurveTo(200,300,280,280,280,200),R.bezierCurveTo(280,150,200,200,200,240);var z=new I({path2D:R,fillStyle:"pink",strokeStyle:"red"});return W.add(z),E(function(){W.buildContentDOM({container:K.current,backgroundColor:"#fff"})},[]),r(K,function(){return W._resizeDOM()}),c.createElement(c.Fragment,null,c.createElement("div",{ref:K}))}});case 13:case"end":return y.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26968),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},67023:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(18283),x={"docs-canvas-stage-demo-stagedemo1":{component:B.memo(B.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26968),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}},"docs-canvas-stage-demo-stagedemo":{component:B.memo(B.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26968),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},66940:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(97452),L={}},44401:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(26211),L={}},97086:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(29876),L={}},64234:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(93139),A={"docs-hooks-use-async-fn-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,r=v.default,i.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return m=i.sent,c=m.useAsyncFn,i.abrupt("return",{default:function(){var y=c(h()(l()().mark(function F(){var N;return l()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,new Promise(function(G){setTimeout(function(){G(200)},5e3)});case 2:return N=J.sent,J.abrupt("return",N);case 4:case"end":return J.stop()}},F)})),[]),M=O()(y,2),K=M[0],W=K.loading,R=K.value,z=M[1];return console.log(W,R),r.createElement("div",null,r.createElement("button",{onClick:function(){z()}},"get"),W&&"loading"," ",r.createElement("br",null),"data: ".concat(R||""))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},75326:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(72155),A={"docs-hooks-use-cancel-async-fn-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c,E,i;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,r=v.default,m=v.useRef,y.next=7,Promise.resolve().then(e.bind(e,26968));case 7:return c=y.sent,E=c.useCancelAsyncFn,i=c.useHtAxios,y.abrupt("return",{default:function(){var K=m(),W=i({config:{timeout:1e4},requestInterceptorsCallBack:function(b){return b},responseInterceptorsCallBack:function(b){return b.data}}),R=E(function(){var G=h()(l()().mark(function b(oe){var ve;return l()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return ve=oe.cancelInterceptor,de.abrupt("return",function(){var Ee=h()(l()().mark(function fe(me){var Ie;return l()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,W.get("http://jsonplaceholder.typicode.com/posts").catch(function(ge){console.log(ge)});case 2:return Ie=ue.sent,ve(),ue.abrupt("return",Ie);case 5:case"end":return ue.stop()}},fe)}));return function(fe){return Ee.apply(this,arguments)}}());case 2:case"end":return de.stop()}},b)}));return function(b){return G.apply(this,arguments)}}(),[]),z=O()(R,2),F=z[0],N=F.value,H=F.loading,J=z[1];return r.createElement("div",null,r.createElement("button",{onClick:function(){var G=h()(l()().mark(function oe(){return l()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:J();case 1:case"end":return le.stop()}},oe)}));function b(){return G.apply(this,arguments)}return b}()},"12312"))}});case 11:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cancel-async-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},31701:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(64577),A={"docs-hooks-use-cookie-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,r=v.default,i.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return m=i.sent,c=m.useCookie,i.abrupt("return",{default:function(){var y={path:"/"},M="cookie-key",K=c(M,y,"default-value"),W=O()(K,3),R=W[0],z=W[1],F=W[2],N=function(){z("new-cookie-value")},H=function(){z(void 0)},J=function(){if("cookieStore"in window){var b=window.cookieStore;b.set({name:M,value:"changed"})}else document.cookie="".concat(M,"=changed; path=/")};return r.createElement("div",null,r.createElement("p",null,"Click on the button to update or clear the cookie"),r.createElement("p",{color:"blue"},"cookie: ",R||"no value"),r.createElement("button",{onClick:N},"Update the cookie"),r.createElement("button",{onClick:H},"Clear the cookie"),r.createElement("button",{onClick:J},"Changing the cookie through other methods"),r.createElement("button",{onClick:F},"Refresh the cookie"))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},67731:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(28587),A={"docs-hooks-use-count-down-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,r=v.default,i.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return m=i.sent,c=m.useCountDown,i.abrupt("return",{default:function(){var y=c(),M=O()(y,3),K=M[0],W=M[1],R=M[2];return r.createElement("div",null,K,r.createElement("button",{onClick:function(){W(60)}},"\u5F00\u59CB"),r.createElement("button",{onClick:function(){R()}},"\u6682\u505C"),r.createElement("button",{onClick:function(){W()}},"\u7EE7\u7EED"))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},66609:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(59301),A={"docs-hooks-use-deep-compare-effect-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c,E,i,Q;return l()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=M.sent,r=v.default,m=v.useState,c=v.useEffect,E=v.useRef,M.next=9,Promise.resolve().then(e.bind(e,26968));case 9:return i=M.sent,Q=i.useDeepCompareEffect,M.abrupt("return",{default:function(){var W=m(0),R=O()(W,2),z=R[0],F=R[1],N=E(0),H=E(0);return c(function(){N.current+=1},[{}]),Q(function(){return H.current+=1,function(){}},[{}]),r.createElement("div",null,r.createElement("p",null,"effectCount: ",N.current),r.createElement("p",null,"deepCompareCount: ",H.current),r.createElement("p",null,r.createElement("button",{type:"button",onClick:function(){return F(function(G){return G+1})}},"reRender")))}});case 12:case"end":return M.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-deep-compare-effect-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect, useRef } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},5958:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(48035),x={"docs-hooks-use-device-pixel-ratio-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var A,I,v,r;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return A=c.sent,I=A.default,c.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return v=c.sent,r=v.useDevicePixelRatio,c.abrupt("return",{default:function(){var i=r(),Q=i.pixelRatio;return I.createElement("p",null,"Device pixel ratio: ",Q)}});case 9:case"end":return c.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-device-pixel-ratio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},65585:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(56139),x={"docs-hooks-use-element-size-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var A,I,v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return A=i.sent,I=A.default,v=A.useRef,r=A.useEffect,i.next=8,Promise.resolve().then(e.bind(e,26968));case 8:return m=i.sent,c=m.useElementSize,i.abrupt("return",{default:function(){var y=v(null),M=c(y);return r(function(){console.log(y.current.mount)},[]),I.createElement("div",null,I.createElement("textarea",{ref:y,disabled:!0,style:{width:200,height:200},value:"width: ".concat(M.width,`
height: `).concat(M.height)}))}});case 11:case"end":return i.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},23897:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(38668),x={"docs-hooks-use-ht-axios-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var A,I,v,r;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,26968));case 2:return A=c.sent,I=A.useHtAxios,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=c.sent,r=v.default,c.abrupt("return",{default:function(){var i=I({config:{timeout:3e3},requestInterceptorsCallBack:function(M){return M},responseInterceptorsCallBack:function(M){return M.data}}),Q=function(){var y=O()(l()().mark(function M(){var K;return l()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,i.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:K=R.sent,console.log(K);case 4:case"end":return R.stop()}},M)}));return function(){return y.apply(this,arguments)}}();return r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},r.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){Q()}},"123"))}});case 9:case"end":return c.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.6"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(26968),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},97716:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(81233),A={"docs-hooks-use-image-load-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,r=v.default,i.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return m=i.sent,c=m.useImageLoad,i.abrupt("return",{default:function(){var y=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],M=c({imgList:y}),K=O()(M,4),W=K[0],R=K[1],z=K[2],F=K[3];return r.createElement("div",{style:{display:"flex"}},F?"loading":r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("div",null,"img"),r.createElement("img",{src:W,style:{width:200}})),r.createElement("div",null,r.createElement("div",null,"ftimgList"),R==null?void 0:R.map(function(N,H){return r.createElement("img",{src:N,key:H,style:{width:200}})})),r.createElement("div",null,r.createElement("div",null,"allowImgList"),z==null?void 0:z.map(function(N,H){return r.createElement("img",{src:N,key:H,style:{width:200}})}))))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},79817:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(35412),A={"docs-hooks-use-in-view-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,r=v.default,i.next=6,Promise.resolve().then(e.bind(e,26968));case 6:return m=i.sent,c=m.useInView,i.abrupt("return",{default:function(){var y=c(),M=O()(y,2),K=M[0],W=M[1];return r.createElement("div",null,r.createElement("div",null,W?"active":"inactive"),r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},r.createElement("div",{ref:K},"12312312")))}});case 9:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},59842:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(1019),A={"docs-hooks-use-infinite-scroll-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c,E,i,Q;return l()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return Q=function(W){var R=W.hasMore,z=W.loadMore,F=i(),N=O()(F,2),H=N[0],J=N[1];return m(function(){J&&R&&(z==null||z())},[R,J,z]),r.createElement("div",{ref:H},R?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},M.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return v=M.sent,r=v.default,m=v.useEffect,M.next=8,Promise.resolve().then(e.bind(e,26968));case 8:return c=M.sent,E=c.useInfiniteScroll,i=c.useInView,M.abrupt("return",{default:function(){var W=new Array(100).fill(1).map(function(H,J){return J}),R=E({dataSource:W,pageSize:10,delay:100}),z=R.data,F=R.hasMore,N=R.loadMore;return r.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},z==null?void 0:z.map(function(H){return r.createElement("span",null,H)}),r.createElement(Q,{loadMore:N,hasMore:F}))}});case 12:case"end":return M.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},96122:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(40801),A={"docs-hooks-use-local-storage-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,26968));case 2:return v=E.sent,r=v.useLocalStorage,m=function(){var Q=r("my-key","foo"),y=O()(Q,3),M=y[0],K=y[1],W=y[2];return x.createElement("div",null,x.createElement("div",null,"Value: ",M),x.createElement("button",{onClick:function(){return K("bar")}},"bar"),x.createElement("button",{onClick:function(){return K("baz")}},"baz"),x.createElement("button",{onClick:function(){return W()}},"Remove"))},E.abrupt("return",{default:m});case 6:case"end":return E.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-local-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useLocalStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},13917:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(44012),L={}},37868:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(74746),A={"docs-hooks-use-previous-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c,E,i;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,r=v.default,m=v.useState,y.next=7,Promise.resolve().then(e.bind(e,26968));case 7:return c=y.sent,E=c.usePrevious,i=function(K){var W=E(K);return console.log(W,K),r.createElement("div",null,r.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(W==null?void 0:W.aa)||0," "),r.createElement("div",null,"\u5F53\u524D\u7684aa: ",K==null?void 0:K.aa))},y.abrupt("return",{default:function(){var K=m(1),W=O()(K,2),R=W[0],z=W[1];return r.createElement("div",null,r.createElement("button",{onClick:function(){return z(R+1)}},"+1"),r.createElement(i,{aa:R}))}});case 11:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},7411:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(81286),A={"docs-hooks-use-resize-observer-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m,c,E,i;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,r=v.default,m=v.useRef,c=v.useState,y.next=8,Promise.resolve().then(e.bind(e,26968));case 8:return E=y.sent,i=E.useResizeObserver,y.abrupt("return",{default:function(){var K=m(null),W=c({width:0,height:0}),R=O()(W,2),z=R[0],F=R[1];return i(K,function(N){var H=O()(N,1),J=H[0],G=J.contentRect,b=G.width,oe=G.height;F({width:b,height:oe})}),r.createElement("div",null,r.createElement("textarea",{ref:K,disabled:!0,style:{width:200,height:200},value:"width: ".concat(z.width,`
height: `).concat(z.height)}))}});case 11:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},12830:function(S,d,e){e.r(d),e.d(d,{demos:function(){return A}});var g=e(17061),l=e.n(g),L=e(27424),O=e.n(L),B=e(17156),h=e.n(B),x=e(67294),w=e(5480),A={"docs-hooks-use-session-storage-demo-0":{component:x.memo(x.lazy(h()(l()().mark(function I(){var v,r,m;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,26968));case 2:return v=E.sent,r=v.useSessionStorage,m=function(){var Q=r("my-key","foo"),y=O()(Q,3),M=y[0],K=y[1],W=y[2];return x.createElement("div",null,x.createElement("div",null,"Value: ",M),x.createElement("button",{onClick:function(){return K("bar")}},"bar"),x.createElement("button",{onClick:function(){return K("baz")}},"baz"),x.createElement("button",{onClick:function(){return W()}},"Remove"))},E.abrupt("return",{default:m});case 6:case"end":return E.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-hooks-use-session-storage-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useSessionStorage } from 'heitu';

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
export default Index;`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(26968)},renderOpts:{compile:function(){var I=h()(l()().mark(function r(){var m,c=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(m=i.sent).default.apply(m,c));case 3:case"end":return i.stop()}},r)}));function v(){return I.apply(this,arguments)}return v}()}}}},9954:function(S,d,e){e.r(d),e.d(d,{demos:function(){return x}});var g=e(17061),l=e.n(g),L=e(17156),O=e.n(L),B=e(67294),h=e(51530),x={"docs-hooks-use-window-size-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var A,I,v;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,26968));case 2:return A=m.sent,I=A.useWindowSize,v=function(){var E=I(),i=E.width,Q=E.height;return B.createElement("div",null,B.createElement("p",null,"width: ",i,", height: ",Q))},m.abrupt("return",{default:v});case 6:case"end":return m.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.6"}},entry:"index.tsx"},context:{heitu:e(26968)},renderOpts:{compile:function(){var w=O()(l()().mark(function I(){var v,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,r));case 3:case"end":return c.stop()}},I)}));function A(){return w.apply(this,arguments)}return A}()}}}},11171:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(68537),L={}},6202:function(S,d,e){e.r(d),e.d(d,{demos:function(){return L}});var g=e(67294),l=e(79930),L={}},26968:function(S,d,e){e.r(d),e.d(d,{Circle:function(){return fe},Custom:function(){return de},Line:function(){return ve},Rect:function(){return J},Stage:function(){return Je},Text:function(){return N},useAsyncFn:function(){return Re},useCancelAsyncFn:function(){return Gn},useCookie:function(){return tn},useCountDown:function(){return an},useDeepCompareEffect:function(){return ln},useDevicePixelRatio:function(){return cn},useElementSize:function(){return mn},useHtAxios:function(){return Wn},useImageLoad:function(){return wn},useInView:function(){return Qn},useInfiniteScroll:function(){return jn},useLocalStorage:function(){return Ze},usePrevious:function(){return $n},useResizeObserver:function(){return De},useSessionStorage:function(){return qe},useWindowSize:function(){return Jn}});var g=e(56690),l=e.n(g),L=e(89728),O=e.n(L),B=e(66115),h=e.n(B),x=e(61655),w=e.n(x),A=e(26389),I=e.n(A),v=e(38416),r=e.n(v),m=e(861),c=e.n(m),E=window.devicePixelRatio,i=function(){},Q=function(o){return o.name==="Stage"},y=function(o,u){return Array.from(new Map([].concat(_toConsumableArray(o),_toConsumableArray(u)).map(function(t){return[t.name,t]})).values())},M=function(o,u,t){return t!=null&&t.x&&t!==null&&t!==void 0&&t.width&&t.y&&t!==null&&t!==void 0&&t.height?o>(t==null?void 0:t.x)*E&&o<(((t==null?void 0:t.x)||0)+((t==null?void 0:t.width)||0))*E&&u>(t==null?void 0:t.y)*E&&u<t.y*E+t.height*E:!1},K=function(o){var u=o.mouseX,t=o.mouseY,n=o.path2D,s=o.ctx;return n&&s&&(s==null?void 0:s.isPointInPath(n,u,t))},W=e(30954),R=function(){function p(){l()(this,p),r()(this,"eventListeners",{}),r()(this,"shapeEventListeners",{})}return O()(p,[{key:"on",value:function(u,t){var n=u.split(" "),s=n.length,a,f,_,C;for(a=0;a<s;a++)f=n[a],_=f.split("."),C=_[0],this.eventListeners[C]||(this.eventListeners[C]=[]),this.eventListeners[C].push({name:t.name||"",handler:t}),this!==null&&this!==void 0&&this.parent&&Q(this===null||this===void 0?void 0:this.parent)&&(this!==null&&this!==void 0&&this.parent.shapeEventListeners[C]||(this.parent.shapeEventListeners[C]=[]),this.parent.shapeEventListeners[C].push({name:t.name||"",handler:t}));return this}},{key:"_off",value:function(u,t,n){var s=this.eventListeners[u],a,f,_;for(a=0;a<s.length;a++)if(f=s[a].name,_=s[a].handler,(!t||f===t)&&(!n||n===_)){if(s.splice(a,1),s.length===0){delete this.eventListeners[u];break}a--}}},{key:"off",value:function(u,t){var n=(u||"").split(" "),s=n.length,a,f,_,C,P,D;for(a=0;a<s;a++)if(_=n[a],C=_.split("."),P=C[0],D=C[1],P)this.eventListeners[P]&&this._off(P,D,t);else for(f in this.eventListeners)this._off(f,D,t);return this}},{key:"_fire",value:function(u,t,n){Q(n)?this.eventListeners[u].forEach(function(s){s.handler(t)}):this.shapeEventListeners[u].forEach(function(s){s.handler(t)})}},{key:"fire",value:function(u,t){var n=t.evt,s=t.target,a=t.currentTarget;if(Q(a)){(!this.eventListeners[u]||this.eventListeners[u].length<1)&&(this.eventListeners[u]=[]),this._fire(u,n,a);for(var f=s==null?void 0:s.children,_=0;_<f.length;_++){(!this.shapeEventListeners[u]||this.shapeEventListeners[u].length<1)&&(this.shapeEventListeners[u]=[]);var C=c()(this.children.filter(function(ee){return ee.draggable}));if(u==="mousedown"){var P=C.filter(function(ee){var Y;return ee==null?void 0:ee.inScope(n,(Y=s.canvas)===null||Y===void 0?void 0:Y.context)}),D=P.sort(function(ee,Y){return Y.index-ee.index})[0];D&&(D.dragging=!0,D.offsetX=D!=null&&D.x?n.offsetX-(D==null?void 0:D.x):n.offsetX,D.offsetY=D!=null&&D.y?n.offsetY-(D==null?void 0:D.y):n.offsetY)}this.fire(u,{evt:n,target:s,currentTarget:f[_]})}}else{var j;if(a!=null&&a.draggable&&u==="mouseup"&&(a.dragging=!1),a!=null&&a.draggable&&a.dragging&&u==="mousemove"){var k,T=(k=this.canvas)===null||k===void 0||(k=k.canvas)===null||k===void 0?void 0:k.getBoundingClientRect();if(a.name==="Text"){var V=T!=null&&T.left?n.clientX-(T==null?void 0:T.left):n.clientX,re=T!=null&&T.top?n.clientY-(T==null?void 0:T.top):n.clientY;a.x=a!=null&&a.offsetX?V-(a==null?void 0:a.offsetX):V,a.y=a!=null&&a.offsetY?re-(a==null?void 0:a.offsetY):re}else{var $=T!=null&&T.left?n.clientX-(T==null?void 0:T.left):n.clientX,ae=T!=null&&T.top?n.clientY-(T==null?void 0:T.top):n.clientY;a.x=a!=null&&a.offsetX?$-(a==null?void 0:a.offsetX):$,a.y=a!=null&&a.offsetY?ae-(a==null?void 0:a.offsetY):ae}this.batchDraw(this)}if(a!=null&&a.inScope&&(j=s.canvas)!==null&&j!==void 0&&j.context){var ie;if(a!=null&&a.inScope(n,(ie=s.canvas)===null||ie===void 0?void 0:ie.context)){var ne;u!=="mouseenter"&&u!=="mouseleave"&&u!=="mouseout"&&u!=="mouseover"&&this._fire(u,n,a),u==="mousemove"&&!a.mouseInScope&&((ne=s.shapeEventListeners.mouseenter)===null||ne===void 0?void 0:ne.length)>0&&(a.mouseInScope=!0,s._fire("mouseenter",n,a))}else if(u==="mousemove"){var te;a.mouseInScope=!1,((te=s.shapeEventListeners.mouseleave)===null||te===void 0?void 0:te.length)>0&&s._fire("mouseleave",n,a)}}}}}]),p}(),z=R,F=function(p){w()(u,p);var o=I()(u);function u(t){var n;if(l()(this,u),n=o.call(this),r()(h()(n),"name","Text"),r()(h()(n),"parent",null),r()(h()(n),"x",void 0),r()(h()(n),"y",void 0),r()(h()(n),"content",void 0),r()(h()(n),"fillStyle",void 0),r()(h()(n),"fontFamily",void 0),r()(h()(n),"fontSize",void 0),r()(h()(n),"textAlign",void 0),r()(h()(n),"textBaseline",void 0),r()(h()(n),"width",void 0),r()(h()(n),"height",void 0),r()(h()(n),"index",0),n.content="",!t.content&&!n.content)throw new Error("Text must has content");return n.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",n.fillStyle="#333",n.fontSize=14,n.textAlign="left",n.textBaseline="top",n.x=100,n.y=100,(0,W.Z)(t,function(s,a){s&&(h()(n)[a]=s)}),n}return O()(u,[{key:"draw",value:function(n){n.font="".concat(this.fontSize,"px ").concat(this.fontFamily),n.textBaseline=this.textBaseline,n.textAlign=this.textAlign,n.fillStyle=this.fillStyle,n.fillText(this.content,this.x,this.y);var s=n.measureText(this.content);return this.width=s.width,this.height=this.fontSize,this}},{key:"inScope",value:function(n){var s=n.offsetX*E,a=n.offsetY*E;return M(s,a,this)}}]),u}(z),N=F,H=function(p){w()(u,p);var o=I()(u);function u(t){var n;return l()(this,u),n=o.call(this),r()(h()(n),"name","Rect"),r()(h()(n),"x",void 0),r()(h()(n),"y",void 0),r()(h()(n),"width",void 0),r()(h()(n),"height",void 0),r()(h()(n),"fillStyle",void 0),r()(h()(n),"strokeStyle",void 0),r()(h()(n),"lineWidth",void 0),r()(h()(n),"index",void 0),r()(h()(n),"path2D",void 0),r()(h()(n),"parent",null),n.x=100,n.y=100,n.width=100,n.height=100,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=null,n.path2D=null,n.index=0,(0,W.Z)(t,function(s,a){s&&(h()(n)[a]=s)}),n}return O()(u,[{key:"draw",value:function(n){var s=new Path2D;return s.moveTo(this.x,this.y),s.lineTo(this.x+this.width,this.y),s.lineTo(this.x+this.width,this.y+this.height),s.lineTo(this.x,this.y+this.height),s.closePath(),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(s),this.fillStyle&&n.fill(s),this.path2D=s,this}},{key:"inScope",value:function(n,s){var a=n.offsetX*E,f=n.offsetY*E;return this!==null&&this!==void 0&&this.path2D?K({mouseX:a,mouseY:f,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),u}(z),J=H,G=e(27424),b=e.n(G),oe=function(p){w()(u,p);var o=I()(u);function u(t){var n;return l()(this,u),n=o.call(this),r()(h()(n),"name","Line"),r()(h()(n),"start",void 0),r()(h()(n),"end",void 0),r()(h()(n),"points",void 0),r()(h()(n),"smooth",void 0),r()(h()(n),"strokeStyle",void 0),r()(h()(n),"lineWidth",void 0),r()(h()(n),"lineCap",void 0),r()(h()(n),"lineJoin",void 0),r()(h()(n),"index",void 0),r()(h()(n),"path2D",void 0),r()(h()(n),"parent",null),n.start={x:10,y:10},n.end={x:100,y:100},n.points=[],n.strokeStyle="black",n.lineWidth=1,n.lineCap="butt",n.lineJoin="miter",n.smooth=!1,n.index=0,n.path2D=null,(0,W.Z)(t,function(s,a){s&&(h()(n)[a]=s)}),n}return O()(u,[{key:"convertToNormalPoints",value:function(n){return n.reduce(function(s,a,f){var _=Math.floor(f/2);return f%2===0?s.push([a]):s[_].push(a),s},[]).map(function(s){var a=b()(s,2),f=a[0],_=a[1];return{x:f,y:_}})}},{key:"calcSmoothPath2D",value:function(){var n,s,a,f=new Path2D;return f.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0),f.moveTo(this.start.x,(a=this.start)===null||a===void 0?void 0:a.y),this.points.length===2&&f.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&f.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=f,f}},{key:"calcStraightPath2D",value:function(){var n,s,a,f,_=new Path2D;_.moveTo(((n=this.start)===null||n===void 0?void 0:n.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0);var C=this.convertToNormalPoints([].concat(c()(this.points),[(a=this.end)===null||a===void 0?void 0:a.x,(f=this.end)===null||f===void 0?void 0:f.y]));return C.forEach(function(P){var D=P.x,j=P.y;_.lineTo(D,j)}),_}},{key:"draw",value:function(n){var s=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(s),this}},{key:"inScope",value:function(n,s){var a=n.offsetX*E,f=n.offsetY*E;return this!==null&&this!==void 0&&this.path2D?K({mouseX:a,mouseY:f,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),u}(z),ve=oe,le=function(p){w()(u,p);var o=I()(u);function u(t){var n;if(l()(this,u),n=o.call(this),r()(h()(n),"name","Custom"),r()(h()(n),"x",void 0),r()(h()(n),"y",void 0),r()(h()(n),"width",void 0),r()(h()(n),"height",void 0),r()(h()(n),"fillStyle",void 0),r()(h()(n),"strokeStyle",void 0),r()(h()(n),"lineWidth",void 0),r()(h()(n),"index",void 0),r()(h()(n),"path2D",void 0),r()(h()(n),"parent",null),!t.path2D)throw new Error("Mast has key of path2D");return n.x=100,n.y=100,n.width=0,n.height=0,n.fillStyle=null,n.strokeStyle=null,n.lineWidth=1,n.path2D=null,n.index=0,(0,W.Z)(t,function(s,a){s&&(h()(n)[a]=s)}),n}return O()(u,[{key:"draw",value:function(n){if(this.path2D)return this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),this.lineWidth&&n.stroke(this.path2D),this.fillStyle&&n.fill(this.path2D),this}},{key:"inScope",value:function(n,s){var a=n.offsetX*E,f=n.offsetY*E;return this!==null&&this!==void 0&&this.path2D?K({mouseX:a,mouseY:f,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),u}(z),de=le,Ee=function(p){w()(u,p);var o=I()(u);function u(t){var n;return l()(this,u),n=o.call(this),r()(h()(n),"name","Circle"),r()(h()(n),"parent",null),r()(h()(n),"x",void 0),r()(h()(n),"y",void 0),r()(h()(n),"radius",void 0),r()(h()(n),"lineWidth",void 0),r()(h()(n),"fillStyle",void 0),r()(h()(n),"strokeStyle",void 0),r()(h()(n),"arc",void 0),r()(h()(n),"startAngle",void 0),r()(h()(n),"endAngle",void 0),r()(h()(n),"innerRadius",void 0),r()(h()(n),"index",void 0),r()(h()(n),"path2D",void 0),r()(h()(n),"border",void 0),n.x=10,n.y=10,n.radius=8,n.fillStyle="",n.strokeStyle="",n.lineWidth=1,n.startAngle=0,n.endAngle=360,n.border=0,n.innerRadius=0,n.arc=!1,n.index=0,n.path2D=null,(0,W.Z)(t,function(s,a){s&&(h()(n)[a]=s)}),n}return O()(u,[{key:"deg2rad",value:function(n){return n*Math.PI/180}},{key:"getPointOnArc",value:function(n,s,a,f){var _=this.deg2rad(f),C=n+a*Math.cos(_),P=s+a*Math.sin(_);return{x:C,y:P}}},{key:"calcWholeRingD",value:function(){var n=this.x-this.radius,s="M ".concat(this.x," ").concat(n),a="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(n),f=this.y-this.innerRadius,_="M ".concat(this.x," ").concat(f),C="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(f);return"".concat(s," ").concat(a," ").concat(_," ").concat(C," Z")}},{key:"calcRingSectorD",value:function(){var n=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),s=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),a=this.endAngle-this.startAngle>=180?1:0,f="M ".concat(n.x," ").concat(n.y),_="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(a," 1 ").concat(s.x," ").concat(s.y),C=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),P=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),D="L".concat(P.x," ").concat(P.y),j="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(a," 0 ").concat(C.x," ").concat(C.y);return"".concat(f," ").concat(_," ").concat(D," ").concat(j," Z")}},{key:"calcRingD",value:function(n){return n?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(n){var s=this.startAngle===0&&this.endAngle===360,a;switch(this.border){case 0:return a=new Path2D(this.calcRingD(s)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.fillStyle&&(n.strokeStyle=this.fillStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(a),n.fill(a),this.path2D=a,a;case 1:return a=new Path2D(this.calcRingD(s)),n.lineWidth=this.lineWidth,this.strokeStyle&&(n.strokeStyle=this.strokeStyle),n.stroke(a),this.path2D=a,a;case 2:return a=new Path2D(this.calcRingD(s)),this.fillStyle&&(n.fillStyle=this.fillStyle),this.strokeStyle&&(n.strokeStyle=this.strokeStyle),this.lineWidth&&(n.lineWidth=this.lineWidth),n.stroke(a),n.fill(a),this.path2D=a,a}}},{key:"inScope",value:function(n,s){var a=n.offsetX*E,f=n.offsetY*E;return this!==null&&this!==void 0&&this.path2D?K({mouseX:a,mouseY:f,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),u}(z),fe=Ee,me=null,Ie=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(p){setTimeout(p,60)},Ce=function(){var o=document.createElement("canvas");try{o.style=o.style||{}}catch(u){}return o},ue=function(o){me.push(o),me.length===1&&Ie(function(){var u=me;me=[],u.forEach(function(t){t()})})},ge=function(){function p(){l()(this,p),r()(this,"canvas",void 0),r()(this,"context",void 0),r()(this,"width",0),r()(this,"height",0),this.canvas=Ce(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return O()(p,[{key:"setWidth",value:function(u){this.width=this.canvas.width=u*E,this.canvas.style.width=u+"px"}},{key:"setHeight",value:function(u){this.height=this.canvas.height=u*E,this.canvas.style.height=u+"px",this.context.scale(E,E)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(u){this.canvas.style.background=u}},{key:"setSize",value:function(u,t){this.setWidth(u||0),this.setHeight(t||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(u,t,n){return n&&this.setBackgroundColor(n),this.canvas}}]),p}(),Le=function(p){w()(u,p);var o=I()(u);function u(){var t;l()(this,u);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return t=o.call.apply(o,[this].concat(s)),r()(h()(t),"children",[]),t}return O()(u,[{key:"getChildren",value:function(n){if(!n)return this.children||[];var s=this.children||[],a=[];return s.forEach(function(f){n(f)&&a.push(f)}),a}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(n){n.parent=null,n.index=0,n.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var n=0;n<arguments.length;n++)this.add(n<0||arguments.length<=n?void 0:arguments[n]);return this}var s=arguments.length<=0?void 0:arguments[0];return s.index=s.index?s.index:this.getChildren().length,s.parent=this,this.getChildren().push(s),this}},{key:"sortChildren",value:function(n){return this.getChildren().sort(n)}},{key:"deduplication",value:function(){this.getChildren();var n=[];return this.getChildren().forEach(function(s){var a=n.some(function(f){return f===s});a||n.push(s)}),this.children=n,n}},{key:"batchDraw",value:function(n){var s,a,f,_,C;!((s=n.canvas)!==null&&s!==void 0&&s.context)||!((a=n.canvas)!==null&&a!==void 0&&a.canvas)||((f=n.canvas)===null||f===void 0||f.context.clearRect(0,0,(_=n.canvas)===null||_===void 0?void 0:_.canvas.offsetWidth,(C=n.canvas)===null||C===void 0?void 0:C.canvas.offsetHeight),this.sortChildren(function(P,D){return P.index-D.index}),this.deduplication(),this.getChildren().forEach(function(P){var D;if((D=n.canvas)!==null&&D!==void 0&&D.context&&P!==null&&P!==void 0&&P.draw){var j;P==null||P.draw((j=n.canvas)===null||j===void 0?void 0:j.context)}}))}}]),u}(z),Te=Le,Be="mouseenter",We="mouseleave",Ke="mouseout",Ue="mouseover",we="mousedown",ke="mousemove",ze="mouseup",je="contextmenu",be="click",Qe="dblclick",Ne="wheel",$e=[[Be,"_mouseenter"],[we,"_mousedown"],[ke,"_mousemove"],[We,"_mouseleave"],[ze,"_mouseup"],[Ke,"_mouseout"],[Ue,"_mouseover"],[je,"_contextmenu"],[Ne,"_wheel"],[be,"_click"],[Qe,"_dblclick"]],Fe=function(p){w()(u,p);var o=I()(u);function u(){var t;return l()(this,u),t=o.call(this),r()(h()(t),"name","Stage"),r()(h()(t),"parent",null),r()(h()(t),"content",void 0),r()(h()(t),"canvas",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"draggable",void 0),r()(h()(t),"isFirstRender",void 0),r()(h()(t),"_pointerPositions",[]),r()(h()(t),"_changedPointerPositions",[]),r()(h()(t),"pointerPos",null),t.content=null,t.canvas=null,t.width=100,t.height=500,t.isFirstRender=!0,t.draggable=!1,t}return O()(u,[{key:"buildContentDOM",value:function(n){if(!(n.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var s=n.width?"".concat(n.width,"px"):"".concat(this.width,"%"),a=n.height?"".concat(n.height,"px"):"".concat(this.height,"px");this.content=n.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=s,this.content.style.height=a,this.canvas=new ge,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,n.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(n,s,a){this.content&&this.canvas&&(this.canvas.getCanvasDom(n,s,a),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var n;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(n=this.canvas)!==null&&n!==void 0&&n.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(n){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var s=this.content.getBoundingClientRect(),a={top:s.top,left:s.left,scaleX:s.width/this.content.clientWidth||1,scaleY:s.height/this.content.clientHeight||1},f=null,_=null;f=(n.clientX-a.left)/a.scaleX,_=(n.clientY-a.top)/a.scaleY,this.pointerPos={x:f,y:_}}},{key:"_bindContentEvents",value:function(){var n,s=this;this!==null&&this!==void 0&&(n=this.content)!==null&&n!==void 0&&n.addEventListener&&$e.forEach(function(a){var f,_=b()(a,2),C=_[0],P=_[1];(f=s.content)===null||f===void 0||f.addEventListener(C,function(D){s[P](D)},{passive:!1})})}},{key:"_mouseenter",value:function(n){Q(this)&&(this.setPointersPositions(n),this.fire("mouseenter",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(n){Q(this)&&(this.setPointersPositions(n),this.fire("mouseleave",{evt:n,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mouseover",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_mousedown",value:function(n){this.setPointersPositions(n),this.fire("mousedown",{evt:n,target:this,currentTarget:this})}},{key:"_mousemove",value:function(n){this.setPointersPositions(n),this.fire("mousemove",{evt:n,target:this,currentTarget:this})}},{key:"_mouseup",value:function(n){this.setPointersPositions(n),this.fire("mouseup",{evt:n,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(n){n.preventDefault(),this.setPointersPositions(n),this.fire("contextmenu",{evt:n,target:this,currentTarget:this})}},{key:"_wheel",value:function(n){this.setPointersPositions(n),this.fire("wheel",{evt:n,target:this,currentTarget:this})}},{key:"_click",value:function(n){this.setPointersPositions(n),this.fire("click",{evt:n,target:this,currentTarget:this})}},{key:"_dblclick",value:function(n){this.setPointersPositions(n),this.fire("dblclick",{evt:n,target:this,currentTarget:this})}}]),u}(Te),Je=Fe,U=e(67294),ce,He=Object.prototype.toString;function Ye(p){return typeof p=="function"}var Zn=function(o){return typeof o!="undefined"};function Xn(p){return typeof p=="undefined"}var qn=function(o){return typeof o=="boolean"},et=function(o){return typeof o=="number"};function Ge(p){return typeof p=="string"}function nt(p){return He.call(p)==="[object Object]"}var tt=null,pe=typeof window!="undefined",rt=typeof navigator!="undefined";function Pe(){}var at=pe&&((ce=window)===null||ce===void 0||(ce=ce.navigator)===null||ce===void 0?void 0:ce.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),ot=!U.useId,Ve=function(o,u,t){if(!pe)return[u,Pe,Pe];if(!o)throw new Error("useLocalStorage key may not be falsy");var n=t?t.raw?function(j){return j}:t.deserializer:JSON.parse,s=(0,U.useRef)(function(j){try{var k=t?t.raw?String:t.serializer:JSON.stringify,T=localStorage.getItem(j);return T!==null?n(T):(u&&localStorage.setItem(j,k(u)),u)}catch(V){return u}}),a=(0,U.useState)(function(){return s.current(o)}),f=b()(a,2),_=f[0],C=f[1];(0,U.useLayoutEffect)(function(){return C(s.current(o))},[o]);var P=(0,U.useCallback)(function(j){try{var k=typeof j=="function"?j(_):j;if(typeof k=="undefined")return;var T;t?t.raw?typeof k=="string"?T=k:T=JSON.stringify(k):t.serializer?T=t.serializer(k):T=JSON.stringify(k):T=JSON.stringify(k),localStorage.setItem(o,T),C(n(T))}catch(V){}},[o,C]),D=(0,U.useCallback)(function(){try{localStorage.removeItem(o),C(void 0)}catch(j){}},[o,C]);return[_,P,D]},Ze=Ve,Xe=function(o,u,t){if(!pe)return[u,function(){}];var n=(0,U.useState)(function(){try{var _=sessionStorage.getItem(o);return typeof _!="string"?(sessionStorage.setItem(o,t?String(u):JSON.stringify(u)),u):t?_:JSON.parse(_||"null")}catch(C){return u}}),s=b()(n,2),a=s[0],f=s[1];return(0,U.useEffect)(function(){try{var _=t?String(a):JSON.stringify(a);sessionStorage.setItem(o,_)}catch(C){}}),[a,f]},qe=Xe,ye={};function ut(p){console.error(p)}var se=e(31955);function en(p,o){return o!==void 0?o:pe?se.Z.get(p):""}var nn=function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,t=arguments.length>2?arguments[2]:void 0,n=(0,U.useState)(en(o,t)),s=b()(n,2),a=s[0],f=s[1];(0,U.useEffect)(function(){var P=function(){var j=se.Z.get(o);return j!=null?j:(t===void 0?se.Z.remove(o):se.Z.set(o,t,u),t)};f(P())},[t,o,JSON.stringify(u)]);var _=(0,U.useCallback)(function(P){var D=Ye(P)?P(a):P;D===void 0?se.Z.remove(o):se.Z.set(o,D,u),f(D)},[o,a,JSON.stringify(u)]),C=(0,U.useCallback)(function(){var P=se.Z.get(o);Ge(P)&&f(P)},[o]);return[a,_,C]},tn=nn,rn=function(){var o=(0,U.useState)(0),u=b()(o,2),t=u[0],n=u[1],s,a=function(){clearTimeout(s)},f=function(C){a(),n(C||function(P){return P-1})};return(0,U.useEffect)(function(){return s=setTimeout(function(){t>0?n(function(_){return _-1}):a()},1e3),function(){return a()}},[t]),[t,f,a]},an=rn,on=e(68580),un=function(o,u,t){var n=(0,U.useRef)(void 0);(!n.current||!t(u,n.current))&&(n.current=u),(0,U.useEffect)(o,n.current)},sn=function(o,u){un(o,u,on.Z)},ln=sn,dn=function(){var o=(0,U.useState)(1),u=b()(o,2),t=u[0],n=u[1],s=(0,U.useCallback)(function(){if(window){n(window.devicePixelRatio);var a=window.matchMedia("(resolution: ".concat(window.devicePixelRatio,"dppx)")),f=function(){s()};return a.addEventListener("change",f,{once:!0}),function(){a.removeEventListener("change",f)}}},[]);return(0,U.useEffect)(function(){var a=s();return a},[s]),{pixelRatio:t}},cn=dn,hn=function(o,u){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye;(0,U.useEffect)(function(){var n=new ResizeObserver(u);return o!=null&&o.current&&n.observe(o.current,t),function(){o!=null&&o.current&&n.unobserve(o.current),n.disconnect()}},[])},De=hn,vn=function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ye,t=(0,U.useState)({width:0,height:0}),n=b()(t,2),s=n[0],a=n[1];return De(o,function(f){if(f.length!==0){var _=b()(f,1),C=_[0],P=C.contentRect,D=P.width,j=P.height;a({width:D,height:j})}},u),s},mn=vn,fn=e(42122),he=e.n(fn),Me=e(54683),In=e(33293),pn="application/json;charset=utf-8",st="application/x-www-form-urlencoded",it={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":pn,Accept:"application/json;version=3.0;compress=false;"},_n=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},En=e(54998),gn=e.n(En),yn=e(49360),xn=e(58146),An=e(73505),Cn=e(27771),Pn=e(77226),Dn=e(36378),xe=function p(o){if((0,yn.Z)(o)||(0,xn.Z)(o)||(0,An.Z)(o))return o;if((0,Cn.Z)(o))return o.map(function(t){return p(t)});if((0,Pn.Z)(o)){var u=Object.create(null);return Object.keys(o).forEach(function(t){u[t]=p(o[t])}),u}else return(0,Dn.Z)(o)?o.trim():o};function lt(){return typeof window=="undefined"?!1:window&&window.__debug__}function dt(p){var o=atob(p);return Uint8Array.from(o,function(u){return u.codePointAt(0)})}function ct(p){var o=Array.from(p,function(u){return String.fromCodePoint(u)}).join("");return btoa(o)}var Mn=Me.Z.CancelToken.source(),On=function(o){o.cancelToken=Mn.token;var u=gn()(o.url);if(o.url=u.query(xe(u.query(!0))||{}).toString(),o.data&&(o.data=xe(o.data)),o.params=xe(o.params||{}),o.cache&&(o.params=o.params||{},o.params.__cache__=Math.random()),o.filter){var t=o.data,n=t===void 0?{}:t;for(var s in n)if(n.hasOwnProperty(s)){var a=n[s];a==null&&delete n[s]}}return o.method==="get"&&o.data&&(o.params=o.data,delete o.data),o},Rn=function(o,u){u&&o.interceptors.request.use(function(t){return u(t)},function(t){return Promise.reject(t)}),o.interceptors.request.use(function(t){return On(t)},function(t){return Promise.reject(t)})},Sn=function(o){var u,t=o.data;try{if(t instanceof Blob){var n=o.headers["content-disposition"],s=n.split("filename=")[1];return{success:!0,data:{file:t,fileName:s}}}}catch(a){console.error(a)}return((u=o.headers)===null||u===void 0?void 0:u["content-type"].indexOf("application/json"))<0,t},Ln=function(o){var u="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!o.__CANCEL__){if(o){if(o.response&&o.response.data){var t=o.response.data.errors,n=t===void 0?[]:t,s=n&&n[0]||{};return Promise.reject({message:s.message||o.message||u,arguments:s.arguments||void 0,code:s.code||null})}return Promise.reject({message:o.message||u,arguments:void 0,code:null})}return Promise.reject({message:u,arguments:void 0,code:null})}},Tn=function(o,u,t){u&&o.interceptors.response.use(function(n){return u(n)},function(n){return Promise.reject(n)}),u&&o.interceptors.response.use(function(n){return n},t),o.interceptors.response.use(Sn,Ln)},Bn=function(o){var u=o.config,t=u===void 0?{}:u,n=o.requestInterceptorsCallback,s=o.responseInterceptorOnSuccessCallback,a=o.responseInterceptorOnErrorCallback,f=(0,In.Z)(_n(),t),_=Me.Z.create(f);Rn(_,n),Tn(_,s,a);function C(k,T,V){return _.request(he()({url:k,params:T},V))}function P(k,T,V){return _.request(he()({url:k,method:"post",params:T},V))}function D(k,T,V){return _.request(he()({url:k,method:"put",params:T},V))}function j(k,T,V){return _.request(he()({url:k,method:"delete",params:T},V))}return{get:C,post:P,del:j,put:D}},Wn=Bn,Kn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Un=function(o){var u=o.imgList,t=(0,U.useState)(!1),n=b()(t,2),s=n[0],a=n[1],f=(0,U.useState)(""),_=b()(f,2),C=_[0],P=_[1],D=(0,U.useState)([]),j=b()(D,2),k=j[0],T=j[1],V=(0,U.useState)([]),re=b()(V,2),$=re[0],ae=re[1],ie=function ne(te,ee,Y){var Z=new Image,q=ee+1;Z.src=te,Z.onload=function(){T(function(X){return[].concat(c()(X),[te])}),ae(function(X){return[].concat(c()(X),[te])}),Y||P(te),ee<u.length-1?ne(u[q],q,!0):a(!1)},Z.onerror=function(){T(function(X){return[].concat(c()(X),[Kn])}),q<u.length-1?ne(u[q],q):a(!1)}};return(0,U.useEffect)(function(){(u==null?void 0:u.length)>1&&(a(!0),ie(u==null?void 0:u[0],0))},[]),console.log([C,k,$,s]),k.length!==u.length?["",[],[],!0]:[C,k,$,s]},wn=Un,kn=e(17061),_e=e.n(kn),zn=e(17156),Oe=e.n(zn);function jn(p){var o=p.dataSource,u=p.delay,t=u===void 0?100:u,n=p.pageSize,s=n===void 0?10:n,a=p.fetchData,f=(0,U.useState)(!1),_=b()(f,2),C=_[0],P=_[1],D=(0,U.useState)(!0),j=b()(D,2),k=j[0],T=j[1],V=(0,U.useState)([]),re=b()(V,2),$=re[0],ae=re[1];function ie(){return ne.apply(this,arguments)}function ne(){return ne=Oe()(_e()().mark(function te(){return _e()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(!(!(o!=null&&o.length)&&!a)){Y.next=2;break}return Y.abrupt("return");case 2:if(!(!k||C)){Y.next=4;break}return Y.abrupt("return");case 4:if(P(!0),!o){Y.next=10;break}return Y.next=8,new Promise(function(Z){setTimeout(function(){Z(o==null?void 0:o.slice($.length,$.length+s))},t)}).then(function(Z){T(($==null?void 0:$.length)+(Z==null?void 0:Z.length)<(o==null?void 0:o.length)),ae(function(q){return q==null?void 0:q.concat(Z)})});case 8:Y.next=12;break;case 10:return Y.next=12,a==null?void 0:a({pageNum:$!=null&&$.length?Math.ceil(($==null?void 0:$.length)/s)+1:1,pageSize:s}).then(function(Z){var q=Z.list,X=q===void 0?[]:q,Se=Z.total,Vn=Se===void 0?0:Se;T(($==null?void 0:$.length)+(X==null?void 0:X.length)<Vn&&(X==null?void 0:X.length)>0),ae(function(Ae){return Ae==null?void 0:Ae.concat(X)})});case 12:P(!1);case 13:case"end":return Y.stop()}},te)})),ne.apply(this,arguments)}return{data:$,setData:ae,loading:C,hasMore:k,loadMore:ie}}var bn=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=(0,U.useState)(!1),n=b()(t,2),s=n[0],a=n[1],f=(0,U.useRef)(null);return(0,U.useEffect)(function(){var _=new IntersectionObserver(function(C){C.forEach(function(P){P.isIntersecting?(a(!0),u&&_.unobserve(P.target)):a(!1)})},o);return f!=null&&f.current&&_.observe(f.current),function(){f!=null&&f.current&&_.unobserve(f.current)}},[o,u]),[f,s]},Qn=bn,Nn=function(o){var u=(0,U.useRef)({});return(0,U.useLayoutEffect)(function(){u.current=o}),(0,U.useLayoutEffect)(function(){return function(){u.current={}}},[]),u.current},$n=Nn,Fn=function(){var o=(0,U.useState)({width:window.innerWidth,height:window.innerHeight}),u=b()(o,2),t=u[0],n=u[1],s=function(){n({width:window.innerWidth,height:window.innerHeight})};return(0,U.useLayoutEffect)(function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[]),{width:t.width,height:t.height}},Jn=Fn;function Hn(){var p=(0,U.useRef)(!1),o=(0,U.useCallback)(function(){return p.current},[]);return(0,U.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),o}function Re(p){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{loading:!1},t=(0,U.useRef)(0),n=Hn(),s=(0,U.useState)(u),a=b()(s,2),f=a[0],_=a[1],C=(0,U.useCallback)(function(){var P=++t.current;return f.loading||_(function(D){return he()(he()({},D),{},{loading:!0})}),p.apply(void 0,arguments).then(function(D){return n()&&P===t.current&&_({value:D,loading:!1}),D},function(D){return n()&&P===t.current&&_({error:D,loading:!1}),D})},o);return[f,C]}var Yn=function(o,u){var t=(0,U.useRef)(),n=function(){if(t.current)throw t.current.abort(),new Error(" Canceled .")};U.useEffect(function(){return function(){t.current&&t.current.abort()}},[]);var s=Re(Oe()(_e()().mark(function a(){var f,_,C,P,D=arguments;return _e()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return t.current&&t.current.abort(),t.current=new AbortController,f=t.current.signal,_={cancelInterceptor:n},k.next=6,o(_);case 6:return C=k.sent,k.next=9,C.apply(void 0,D);case 9:return P=k.sent,k.abrupt("return",P);case 11:case"end":return k.stop()}},a)})),u);return s},Gn=Yn},48977:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(54197);const l=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(18283);const l=[{value:"\u6839\u636E\u753B\u5E03\u91CD\u65B0\u6E32\u67D3 \u753B\u5E03\u5185\u5BB9",paraId:0,tocIndex:1},{value:"\u6F14\u793A\u63A8\u8350 \u6253\u5F00\u5DE6\u53F3\u63A7\u5236\u53F0\u62D6\u62FD",paraId:1,tocIndex:1}]},51234:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(97452);const l=[{value:`
  npm i heitu or yarn add heitu

`,paraId:0,tocIndex:0},{value:`import { Stage } from 'heitu';
export const Index = () => {
  return (
    <>
      <stage />
    </>
  );
};
`,paraId:1,tocIndex:1}]},9978:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(26211);const l=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(29876);const l=[{value:`
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
`,paraId:1,tocIndex:1}]},58903:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(93139);const l=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},18632:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(72155);const l=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684 hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"initialState",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"state",paraId:2,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:4},{value:"{error,loading,value}",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"fn",paraId:2,tocIndex:4},{value:"\u6267\u884C\u51FD\u6570",paraId:2,tocIndex:4},{value:"\uFF08any\uFF09=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},30223:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(64577);const l=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(28587);const l=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},96442:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(59301);const l=[{value:"\u4F9D\u8D56\u9879\u4F7F\u7528\u6DF1\u5EA6\u6BD4\u8F83\u800C\u4E0D\u662F\u5F15\u7528\u76F8\u7B49",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"fn",paraId:1,tocIndex:3},{value:"\u6267\u884C\u7684\u51FD\u6570",paraId:1,tocIndex:3},{value:"(...args: any[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"deps",paraId:1,tocIndex:3},{value:"\u4F9D\u8D56\u9879",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},94457:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(48035);const l=[{value:"\u7528\u4E8E\u83B7\u53D6\u5C4F\u5E55\u7684\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"pixelRatio",paraId:2,tocIndex:4},{value:"\u8BBE\u5907\u50CF\u7D20\u6BD4",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},6575:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(56139);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684\u5143\u7D20 ref",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(38668);const l=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(81233);const l=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(35412);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(1019);const l=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},53626:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(40801);const l=[{value:"LocalStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},51331:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(44012);const l=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(74746);const l=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"props",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5B58\u50A8\u7684 props",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"prev",paraId:2,tocIndex:4},{value:"\u4E0A\u4E00\u4E2A props",paraId:2,tocIndex:4},{value:"any",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},49811:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(81286);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},52601:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(5480);const l=[{value:"SessionStorage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"key",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"defaultValue",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"any",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"name",paraId:2,tocIndex:5},{value:"description",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"default",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"any",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"setValue",paraId:2,tocIndex:5},{value:"\u8BBE\u7F6E\u503C",paraId:2,tocIndex:5},{value:"(value: any) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"remove",paraId:2,tocIndex:5},{value:"\u6E05\u7A7A",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},85854:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(51530);const l=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(68537);const l=[]},87724:function(S,d,e){e.r(d),e.d(d,{texts:function(){return l}});var g=e(79930);const l=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(S,d){d.Z=`import {
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
`},66969:function(S,d){d.Z=`import { Circle, Stage, useResizeObserver } from 'heitu';
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
