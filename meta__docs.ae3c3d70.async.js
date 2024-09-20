"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(y,u,e){e.r(u),e.d(u,{demos:function(){return U}});var I=e(17061),l=e.n(I),P=e(17156),R=e.n(P),w=e(67294),d=e(54197),U={"docs-canvas-demo-0":{component:w.memo(w.lazy(R()(l()().mark(function W(){var O,E,m,a,p,c,C,h;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,64306));case 2:return O=D.sent,E=O.Custom,m=O.Stage,a=O.useResizeObserver,D.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return p=D.sent,c=p.default,C=p.useLayoutEffect,h=p.useRef,D.abrupt("return",{default:function(){var B=h(null),L=new m,S=new Path2D;S.moveTo(200,240),S.bezierCurveTo(200,200,120,150,120,200),S.bezierCurveTo(120,280,200,300,200,340),S.bezierCurveTo(200,300,280,280,280,200),S.bezierCurveTo(280,150,200,200,200,240);var K=new E({path2D:S,fillStyle:"pink",strokeStyle:"red"});return L.add(K),C(function(){L.buildContentDOM({container:B.current,backgroundColor:"#fff"})},[]),a(B,function(){return L._resizeDOM()}),c.createElement(c.Fragment,null,c.createElement("div",{ref:B}))}});case 13:case"end":return D.stop()}},W)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(64306),react:e(67294)},renderOpts:{compile:function(){var W=R()(l()().mark(function E(){var m,a=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,a));case 3:case"end":return c.stop()}},E)}));function O(){return W.apply(this,arguments)}return O}()}}}},67023:function(y,u,e){e.r(u),e.d(u,{demos:function(){return U}});var I=e(17061),l=e.n(I),P=e(17156),R=e.n(P),w=e(67294),d=e(18283),U={"docs-canvas-stage-demo-stagedemo":{component:w.memo(w.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(64306),react:e(67294)},renderOpts:{compile:function(){var W=R()(l()().mark(function E(){var m,a=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,a));case 3:case"end":return c.stop()}},E)}));function O(){return W.apply(this,arguments)}return O}()}}}},66940:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(97452),P={}},44401:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(26211),P={}},97086:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(29876),P={}},75326:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(72155),P={}},31701:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(64577),O={"docs-hooks-use-cookie-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=h.sent,a=m.default,h.next=6,Promise.resolve().then(e.bind(e,64306));case 6:return p=h.sent,c=p.useCookie,h.abrupt("return",{default:function(){var D={path:"/"},T="cookie-key",B=c(T,D,"default-value"),L=R()(B,3),S=L[0],K=L[1],X=L[2],Y=function(){K("new-cookie-value")},G=function(){K(void 0)},Z=function(){if("cookieStore"in window){var V=window.cookieStore;V.set({name:T,value:"changed"})}else document.cookie="".concat(T,"=changed; path=/")};return a.createElement("div",null,a.createElement("p",null,"Click on the button to update or clear the cookie"),a.createElement("p",{color:"blue"},"cookie: ",S||"no value"),a.createElement("button",{onClick:Y},"Update the cookie"),a.createElement("button",{onClick:G},"Clear the cookie"),a.createElement("button",{onClick:Z},"Changing the cookie through other methods"),a.createElement("button",{onClick:X},"Refresh the cookie"))}});case 9:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useCookie } from 'heitu';

export default () => {
  const defaultOption = {
    path: "/",
  };
  const cookieName = "cookie-key";
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    "default-value",
  );

  const updateButtonClick = () => {
    updateCookie("new-cookie-value");
  };

  const deleteButtonClick = () => {
    updateCookie(undefined);
  };

  const change = () => {
    if ("cookieStore" in window) {
      const store = window.cookieStore as any;
      store.set({ name: cookieName, value: "changed" });
    }
    else {
      document.cookie = \`\${cookieName}=changed; path=/\`;
    }
  };

  return (
    <div>
      <p>Click on the button to update or clear the cookie</p>
      <p color="blue">cookie: {cookieValue || "no value"}</p>
      <button onClick={updateButtonClick}>Update the cookie</button>
      <button onClick={deleteButtonClick}>Clear the cookie</button>
      <button onClick={change}>
        Changing the cookie through other methods
      </button>
      <button onClick={refreshCookie}>Refresh the cookie</button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},67731:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(28587),O={"docs-hooks-use-count-down-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=h.sent,a=m.default,h.next=6,Promise.resolve().then(e.bind(e,64306));case 6:return p=h.sent,c=p.useCountDown,h.abrupt("return",{default:function(){var D=c(),T=R()(D,3),B=T[0],L=T[1],S=T[2];return a.createElement("div",null,B,a.createElement("button",{onClick:function(){L(60)}},"\u5F00\u59CB"),a.createElement("button",{onClick:function(){S()}},"\u6682\u505C"),a.createElement("button",{onClick:function(){L()}},"\u7EE7\u7EED"))}});case 9:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},65585:function(y,u,e){e.r(u),e.d(u,{demos:function(){return U}});var I=e(17061),l=e.n(I),P=e(17156),R=e.n(P),w=e(67294),d=e(56139),U={"docs-hooks-use-element-size-demo-0":{component:w.memo(w.lazy(R()(l()().mark(function W(){var O,E,m,a,p,c;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return O=h.sent,E=O.default,m=O.useRef,a=O.useEffect,h.next=8,Promise.resolve().then(e.bind(e,64306));case 8:return p=h.sent,c=p.useElementSize,h.abrupt("return",{default:function(){var D=m(null),T=c(D);return a(function(){console.log(D.current.mount)},[]),E.createElement("div",null,E.createElement("textarea",{ref:D,disabled:!0,style:{width:200,height:200},value:"width: ".concat(T.width,`
height: `).concat(T.height)}))}});case 11:case"end":return h.stop()}},W)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
import { useElementSize } from 'heitu';


export default () => {
  const ref = useRef(null);
  const size = useElementSize(ref);
useEffect(() => {console.log(ref.current.mount)},[])
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var W=R()(l()().mark(function E(){var m,a=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,a));case 3:case"end":return c.stop()}},E)}));function O(){return W.apply(this,arguments)}return O}()}}}},38477:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(22956),P={}},23897:function(y,u,e){e.r(u),e.d(u,{demos:function(){return U}});var I=e(17061),l=e.n(I),P=e(17156),R=e.n(P),w=e(67294),d=e(38668),U={"docs-hooks-use-ht-axios-demo-0":{component:w.memo(w.lazy(R()(l()().mark(function W(){var O,E,m,a;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,64306));case 2:return O=c.sent,E=O.useHtAxios,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=c.sent,a=m.default,c.abrupt("return",{default:function(){var h=E({config:{timeout:3e3},requestInterceptorsCallBack:function(T){return T},responseInterceptorsCallBack:function(T){return T.data}}),j=function(){var D=R()(l()().mark(function T(){var B;return l()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,h.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:B=S.sent,console.log(B);case 4:case"end":return S.stop()}},T)}));return function(){return D.apply(this,arguments)}}();return a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},a.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){j()}},"123"))}});case 9:case"end":return c.stop()}},W)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(64306),react:e(67294)},renderOpts:{compile:function(){var W=R()(l()().mark(function E(){var m,a=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,a));case 3:case"end":return c.stop()}},E)}));function O(){return W.apply(this,arguments)}return O}()}}}},97716:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(81233),P={}},79817:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(35412),O={"docs-hooks-use-in-view-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=h.sent,a=m.default,h.next=6,Promise.resolve().then(e.bind(e,64306));case 6:return p=h.sent,c=p.useInView,h.abrupt("return",{default:function(){var D=c(),T=R()(D,2),B=T[0],L=T[1];return a.createElement("div",null,a.createElement("div",null,L?"active":"inactive"),a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},a.createElement("div",{ref:B},"12312312")))}});case 9:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},59842:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(1019),O={"docs-hooks-use-infinite-scroll-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c,C,h,j;return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return j=function(L){var S=L.hasMore,K=L.loadMore,X=h(),Y=R()(X,2),G=Y[0],Z=Y[1];return p(function(){Z&&S&&(K==null||K())},[S,Z,K]),a.createElement("div",{ref:G},S?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},T.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return m=T.sent,a=m.default,p=m.useEffect,T.next=8,Promise.resolve().then(e.bind(e,64306));case 8:return c=T.sent,C=c.useInfiniteScroll,h=c.useInView,T.abrupt("return",{default:function(){var L=new Array(100).fill(1).map(function(G,Z){return Z}),S=C({dataSource:L,pageSize:10,delay:100}),K=S.data,X=S.hasMore,Y=S.loadMore;return a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},K==null?void 0:K.map(function(G){return a.createElement("span",null,G)}),a.createElement(j,{loadMore:Y,hasMore:X}))}});case 12:case"end":return T.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},10610:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(65808),P={}},13917:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(44012),P={}},37868:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(74746),O={"docs-hooks-use-previous-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c,C,h;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=D.sent,a=m.default,p=m.useState,D.next=7,Promise.resolve().then(e.bind(e,64306));case 7:return c=D.sent,C=c.usePrevious,h=function(B){var L=C(B);return console.log(L,B),a.createElement("div",null,a.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(L==null?void 0:L.aa)||0," "),a.createElement("div",null,"\u5F53\u524D\u7684aa: ",B==null?void 0:B.aa))},D.abrupt("return",{default:function(){var B=p(1),L=R()(B,2),S=L[0],K=L[1];return a.createElement("div",null,a.createElement("button",{onClick:function(){return K(S+1)}},"+1"),a.createElement(h,{aa:S}))}});case 11:case"end":return D.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},7411:function(y,u,e){e.r(u),e.d(u,{demos:function(){return O}});var I=e(17061),l=e.n(I),P=e(27424),R=e.n(P),w=e(17156),d=e.n(w),U=e(67294),W=e(81286),O={"docs-hooks-use-resize-observer-demo-0":{component:U.memo(U.lazy(d()(l()().mark(function E(){var m,a,p,c,C,h;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=D.sent,a=m.default,p=m.useRef,c=m.useState,D.next=8,Promise.resolve().then(e.bind(e,64306));case 8:return C=D.sent,h=C.useResizeObserver,D.abrupt("return",{default:function(){var B=p(null),L=c({width:0,height:0}),S=R()(L,2),K=S[0],X=S[1];return h(B,function(Y){var G=R()(Y,1),Z=G[0],Q=Z.contentRect,V=Q.width,he=Q.height;X({width:V,height:he})}),a.createElement("div",null,a.createElement("textarea",{ref:B,disabled:!0,style:{width:200,height:200},value:"width: ".concat(K.width,`
height: `).concat(K.height)}))}});case 11:case"end":return D.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(64306)},renderOpts:{compile:function(){var E=d()(l()().mark(function a(){var p,c=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(19).then(e.bind(e,4019));case 2:return h.abrupt("return",(p=h.sent).default.apply(p,c));case 3:case"end":return h.stop()}},a)}));function m(){return E.apply(this,arguments)}return m}()}}}},91805:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(68145),P={}},9954:function(y,u,e){e.r(u),e.d(u,{demos:function(){return U}});var I=e(17061),l=e.n(I),P=e(17156),R=e.n(P),w=e(67294),d=e(51530),U={"docs-hooks-use-window-size-demo-0":{component:w.memo(w.lazy(R()(l()().mark(function W(){var O,E,m;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,64306));case 2:return O=p.sent,E=O.useWindowSize,m=function(){var C=E(),h=C.width,j=C.height;return w.createElement("div",null,w.createElement("p",null,"width: ",h,", height: ",j))},p.abrupt("return",{default:m});case 6:case"end":return p.stop()}},W)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{heitu:e(64306)},renderOpts:{compile:function(){var W=R()(l()().mark(function E(){var m,a=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,a));case 3:case"end":return c.stop()}},E)}));function O(){return W.apply(this,arguments)}return O}()}}}},11171:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(68537),P={}},6202:function(y,u,e){e.r(u),e.d(u,{demos:function(){return P}});var I=e(67294),l=e(79930),P={}},64306:function(y,u,e){e.r(u),e.d(u,{Circle:function(){return Me},Custom:function(){return De},Line:function(){return Pe},LineChart:function(){return zt},Rect:function(){return Z},Stage:function(){return _e},Text:function(){return Y},useCookie:function(){return Fe},useCountDown:function(){return Qe},useElementSize:function(){return tt},useHtAxios:function(){return yt},useInView:function(){return Ot},useInfiniteScroll:function(){return xt},usePrevious:function(){return Tt},useResizeObserver:function(){return Ie},useWindowSize:function(){return Lt}});var I=e(56690),l=e.n(I),P=e(89728),R=e.n(P),w=e(66115),d=e.n(w),U=e(61655),W=e.n(U),O=e(26389),E=e.n(O),m=e(38416),a=e.n(m),p=e(861),c=e.n(p),C=window.devicePixelRatio,h=function(){},j=function(r){return r.name==="Stage"},D=function(r,s){return Array.from(new Map([].concat(_toConsumableArray(r),_toConsumableArray(s)).map(function(n){return[n.name,n]})).values())},T=function(r,s,n){return n!=null&&n.x&&n!==null&&n!==void 0&&n.width&&n.y&&n!==null&&n!==void 0&&n.height?r>(n==null?void 0:n.x)*C&&r<(((n==null?void 0:n.x)||0)+((n==null?void 0:n.width)||0))*C&&s>(n==null?void 0:n.y)*C&&s<n.y*C+n.height*C:!1},B=function(r){var s=r.mouseX,n=r.mouseY,t=r.path2D,i=r.ctx;return t&&i&&(i==null?void 0:i.isPointInPath(t,s,n))},L=e(30954),S=function(){function f(){l()(this,f),a()(this,"eventListeners",{}),a()(this,"shapeEventListeners",{})}return R()(f,[{key:"on",value:function(s,n){var t=s.split(" "),i=t.length,o,v,_,M;for(o=0;o<i;o++)v=t[o],_=v.split("."),M=_[0],this.eventListeners[M]||(this.eventListeners[M]=[]),this.eventListeners[M].push({name:n.name||"",handler:n}),this!==null&&this!==void 0&&this.parent&&j(this===null||this===void 0?void 0:this.parent)&&(this!==null&&this!==void 0&&this.parent.shapeEventListeners[M]||(this.parent.shapeEventListeners[M]=[]),this.parent.shapeEventListeners[M].push({name:n.name||"",handler:n}));return this}},{key:"_off",value:function(s,n,t){var i=this.eventListeners[s],o,v,_;for(o=0;o<i.length;o++)if(v=i[o].name,_=i[o].handler,(!n||v===n)&&(!t||t===_)){if(i.splice(o,1),i.length===0){delete this.eventListeners[s];break}o--}}},{key:"off",value:function(s,n){var t=(s||"").split(" "),i=t.length,o,v,_,M,g,x;for(o=0;o<i;o++)if(_=t[o],M=_.split("."),g=M[0],x=M[1],g)this.eventListeners[g]&&this._off(g,x,n);else for(v in this.eventListeners)this._off(v,x,n);return this}},{key:"_fire",value:function(s,n,t){j(t)?this.eventListeners[s].forEach(function(i){i.handler(n)}):this.shapeEventListeners[s].forEach(function(i){i.handler(n)})}},{key:"fire",value:function(s,n){var t=n.evt,i=n.target,o=n.currentTarget;if(j(o)){(!this.eventListeners[s]||this.eventListeners[s].length<1)&&(this.eventListeners[s]=[]),this._fire(s,t,o);for(var v=i==null?void 0:i.children,_=0;_<v.length;_++){(!this.shapeEventListeners[s]||this.shapeEventListeners[s].length<1)&&(this.shapeEventListeners[s]=[]);var M=c()(this.children.filter(function(J){return J.draggable}));if(s==="mousedown"){var g=M.filter(function(J){var b;return J==null?void 0:J.inScope(t,(b=i.canvas)===null||b===void 0?void 0:b.context)}),x=g.sort(function(J,b){return b.index-J.index})[0];x&&(x.dragging=!0,x.offsetX=x!=null&&x.x?t.offsetX-(x==null?void 0:x.x):t.offsetX,x.offsetY=x!=null&&x.y?t.offsetY-(x==null?void 0:x.y):t.offsetY)}this.fire(s,{evt:t,target:i,currentTarget:v[_]})}}else{var z;if(o!=null&&o.draggable&&s==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&s==="mousemove"){var N,A=(N=this.canvas)===null||N===void 0||(N=N.canvas)===null||N===void 0?void 0:N.getBoundingClientRect();if(o.name==="Text"){var H=A!=null&&A.left?t.clientX-(A==null?void 0:A.left):t.clientX,se=A!=null&&A.top?t.clientY-(A==null?void 0:A.top):t.clientY;o.x=o!=null&&o.offsetX?H-(o==null?void 0:o.offsetX):H,o.y=o!=null&&o.offsetY?se-(o==null?void 0:o.offsetY):se}else{var $=A!=null&&A.left?t.clientX-(A==null?void 0:A.left):t.clientX,re=A!=null&&A.top?t.clientY-(A==null?void 0:A.top):t.clientY;o.x=o!=null&&o.offsetX?$-(o==null?void 0:o.offsetX):$,o.y=o!=null&&o.offsetY?re-(o==null?void 0:o.offsetY):re}this.batchDraw(this)}if(o!=null&&o.inScope&&(z=i.canvas)!==null&&z!==void 0&&z.context){var ue;if(o!=null&&o.inScope(t,(ue=i.canvas)===null||ue===void 0?void 0:ue.context)){var ee;s!=="mouseenter"&&s!=="mouseleave"&&s!=="mouseout"&&s!=="mouseover"&&this._fire(s,t,o),s==="mousemove"&&!o.mouseInScope&&((ee=i.shapeEventListeners.mouseenter)===null||ee===void 0?void 0:ee.length)>0&&(o.mouseInScope=!0,i._fire("mouseenter",t,o))}else if(s==="mousemove"){var le;o.mouseInScope=!1,((le=i.shapeEventListeners.mouseleave)===null||le===void 0?void 0:le.length)>0&&i._fire("mouseleave",t,o)}}}}}]),f}(),K=S,X=function(f){W()(s,f);var r=E()(s);function s(n){var t;if(l()(this,s),t=r.call(this),a()(d()(t),"name","Text"),a()(d()(t),"parent",null),a()(d()(t),"x",void 0),a()(d()(t),"y",void 0),a()(d()(t),"content",void 0),a()(d()(t),"fillStyle",void 0),a()(d()(t),"fontFamily",void 0),a()(d()(t),"fontSize",void 0),a()(d()(t),"textAlign",void 0),a()(d()(t),"textBaseline",void 0),a()(d()(t),"width",void 0),a()(d()(t),"height",void 0),a()(d()(t),"index",0),t.content="",!n.content&&!t.content)throw new Error("Text must has content");return t.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",t.fillStyle="#333",t.fontSize=14,t.textAlign="left",t.textBaseline="top",t.x=100,t.y=100,(0,L.Z)(n,function(i,o){i&&(d()(t)[o]=i)}),t}return R()(s,[{key:"draw",value:function(t){t.font="".concat(this.fontSize,"px ").concat(this.fontFamily),t.textBaseline=this.textBaseline,t.textAlign=this.textAlign,t.fillStyle=this.fillStyle,t.fillText(this.content,this.x,this.y);var i=t.measureText(this.content);return this.width=i.width,this.height=this.fontSize,this}},{key:"inScope",value:function(t){var i=t.offsetX*C,o=t.offsetY*C;return T(i,o,this)}}]),s}(K),Y=X,G=function(f){W()(s,f);var r=E()(s);function s(n){var t;return l()(this,s),t=r.call(this),a()(d()(t),"name","Rect"),a()(d()(t),"x",void 0),a()(d()(t),"y",void 0),a()(d()(t),"width",void 0),a()(d()(t),"height",void 0),a()(d()(t),"fillStyle",void 0),a()(d()(t),"strokeStyle",void 0),a()(d()(t),"lineWidth",void 0),a()(d()(t),"index",void 0),a()(d()(t),"path2D",void 0),a()(d()(t),"parent",null),t.x=100,t.y=100,t.width=100,t.height=100,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=null,t.path2D=null,t.index=0,(0,L.Z)(n,function(i,o){i&&(d()(t)[o]=i)}),t}return R()(s,[{key:"draw",value:function(t){var i=new Path2D;return i.moveTo(this.x,this.y),i.lineTo(this.x+this.width,this.y),i.lineTo(this.x+this.width,this.y+this.height),i.lineTo(this.x,this.y+this.height),i.closePath(),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(i),this.fillStyle&&t.fill(i),this.path2D=i,this}},{key:"inScope",value:function(t,i){var o=t.offsetX*C,v=t.offsetY*C;return this!==null&&this!==void 0&&this.path2D?B({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),s}(K),Z=G,Q=e(27424),V=e.n(Q),he=function(f){W()(s,f);var r=E()(s);function s(n){var t;return l()(this,s),t=r.call(this),a()(d()(t),"name","Line"),a()(d()(t),"start",void 0),a()(d()(t),"end",void 0),a()(d()(t),"points",void 0),a()(d()(t),"smooth",void 0),a()(d()(t),"strokeStyle",void 0),a()(d()(t),"lineWidth",void 0),a()(d()(t),"lineCap",void 0),a()(d()(t),"lineJoin",void 0),a()(d()(t),"index",void 0),a()(d()(t),"path2D",void 0),a()(d()(t),"parent",null),t.start={x:10,y:10},t.end={x:100,y:100},t.points=[],t.strokeStyle="black",t.lineWidth=1,t.lineCap="butt",t.lineJoin="miter",t.smooth=!1,t.index=0,t.path2D=null,(0,L.Z)(n,function(i,o){i&&(d()(t)[o]=i)}),t}return R()(s,[{key:"convertToNormalPoints",value:function(t){return t.reduce(function(i,o,v){var _=Math.floor(v/2);return v%2===0?i.push([o]):i[_].push(o),i},[]).map(function(i){var o=V()(i,2),v=o[0],_=o[1];return{x:v,y:_}})}},{key:"calcSmoothPath2D",value:function(){var t,i,o,v=new Path2D;return v.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0),v.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&v.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&v.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=v,v}},{key:"calcStraightPath2D",value:function(){var t,i,o,v,_=new Path2D;_.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((i=this.start)===null||i===void 0?void 0:i.y)||0);var M=this.convertToNormalPoints([].concat(c()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(v=this.end)===null||v===void 0?void 0:v.y]));return M.forEach(function(g){var x=g.x,z=g.y;_.lineTo(x,z)}),_}},{key:"draw",value:function(t){var i=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(i),this}},{key:"inScope",value:function(t,i){var o=t.offsetX*C,v=t.offsetY*C;return this!==null&&this!==void 0&&this.path2D?B({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),s}(K),Pe=he,Ce=function(f){W()(s,f);var r=E()(s);function s(n){var t;if(l()(this,s),t=r.call(this),a()(d()(t),"name","Custom"),a()(d()(t),"x",void 0),a()(d()(t),"y",void 0),a()(d()(t),"width",void 0),a()(d()(t),"height",void 0),a()(d()(t),"fillStyle",void 0),a()(d()(t),"strokeStyle",void 0),a()(d()(t),"lineWidth",void 0),a()(d()(t),"index",void 0),a()(d()(t),"path2D",void 0),a()(d()(t),"parent",null),!n.path2D)throw new Error("Mast has key of path2D");return t.x=100,t.y=100,t.width=0,t.height=0,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=1,t.path2D=null,t.index=0,(0,L.Z)(n,function(i,o){i&&(d()(t)[o]=i)}),t}return R()(s,[{key:"draw",value:function(t){if(this.path2D)return this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(this.path2D),this.fillStyle&&t.fill(this.path2D),this}},{key:"inScope",value:function(t,i){var o=t.offsetX*C,v=t.offsetY*C;return this!==null&&this!==void 0&&this.path2D?B({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),s}(K),De=Ce,xe=function(f){W()(s,f);var r=E()(s);function s(n){var t;return l()(this,s),t=r.call(this),a()(d()(t),"name","Circle"),a()(d()(t),"parent",null),a()(d()(t),"x",void 0),a()(d()(t),"y",void 0),a()(d()(t),"radius",void 0),a()(d()(t),"lineWidth",void 0),a()(d()(t),"fillStyle",void 0),a()(d()(t),"strokeStyle",void 0),a()(d()(t),"arc",void 0),a()(d()(t),"startAngle",void 0),a()(d()(t),"endAngle",void 0),a()(d()(t),"innerRadius",void 0),a()(d()(t),"index",void 0),a()(d()(t),"path2D",void 0),a()(d()(t),"border",void 0),t.x=10,t.y=10,t.radius=8,t.fillStyle="",t.strokeStyle="",t.lineWidth=1,t.startAngle=0,t.endAngle=360,t.border=0,t.innerRadius=0,t.arc=!1,t.index=0,t.path2D=null,(0,L.Z)(n,function(i,o){i&&(d()(t)[o]=i)}),t}return R()(s,[{key:"deg2rad",value:function(t){return t*Math.PI/180}},{key:"getPointOnArc",value:function(t,i,o,v){var _=this.deg2rad(v),M=t+o*Math.cos(_),g=i+o*Math.sin(_);return{x:M,y:g}}},{key:"calcWholeRingD",value:function(){var t=this.x-this.radius,i="M ".concat(this.x," ").concat(t),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(t),v=this.y-this.innerRadius,_="M ".concat(this.x," ").concat(v),M="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(v);return"".concat(i," ").concat(o," ").concat(_," ").concat(M," Z")}},{key:"calcRingSectorD",value:function(){var t=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),i=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,v="M ".concat(t.x," ").concat(t.y),_="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(i.x," ").concat(i.y),M=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),g=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),x="L".concat(g.x," ").concat(g.y),z="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(M.x," ").concat(M.y);return"".concat(v," ").concat(_," ").concat(x," ").concat(z," Z")}},{key:"calcRingD",value:function(t){return t?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(t){var i=this.startAngle===0&&this.endAngle===360,o;switch(this.border){case 0:return o=new Path2D(this.calcRingD(i)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.fillStyle&&(t.strokeStyle=this.fillStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(o),t.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(i)),t.lineWidth=this.lineWidth,this.strokeStyle&&(t.strokeStyle=this.strokeStyle),t.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(i)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(o),t.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(t,i){var o=t.offsetX*C,v=t.offsetY*C;return this!==null&&this!==void 0&&this.path2D?B({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:i||void 0}):!1}}]),s}(K),Me=xe,de=null,Oe=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(f){setTimeout(f,60)},Re=function(){var r=document.createElement("canvas");try{r.style=r.style||{}}catch(s){}return r},$t=function(r){de.push(r),de.length===1&&Oe(function(){var s=de;de=[],s.forEach(function(n){n()})})},Te=function(){function f(){l()(this,f),a()(this,"canvas",void 0),a()(this,"context",void 0),a()(this,"width",0),a()(this,"height",0),this.canvas=Re(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return R()(f,[{key:"setWidth",value:function(s){this.width=this.canvas.width=s*C,this.canvas.style.width=s+"px"}},{key:"setHeight",value:function(s){this.height=this.canvas.height=s*C,this.canvas.style.height=s+"px",this.context.scale(C,C)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(s){this.canvas.style.background=s}},{key:"setSize",value:function(s,n){this.setWidth(s||0),this.setHeight(n||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(s,n,t){return t&&this.setBackgroundColor(t),this.canvas}}]),f}(),Ae=function(f){W()(s,f);var r=E()(s);function s(){var n;l()(this,s);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return n=r.call.apply(r,[this].concat(i)),a()(d()(n),"children",[]),n}return R()(s,[{key:"getChildren",value:function(t){if(!t)return this.children||[];var i=this.children||[],o=[];return i.forEach(function(v){t(v)&&o.push(v)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(t<0||arguments.length<=t?void 0:arguments[t]);return this}var i=arguments.length<=0?void 0:arguments[0];return i.index=i.index?i.index:this.getChildren().length,i.parent=this,this.getChildren().push(i),this}},{key:"sortChildren",value:function(t){return this.getChildren().sort(t)}},{key:"deduplication",value:function(){this.getChildren();var t=[];return this.getChildren().forEach(function(i){var o=t.some(function(v){return v===i});o||t.push(i)}),this.children=t,t}},{key:"batchDraw",value:function(t){var i,o,v,_,M;!((i=t.canvas)!==null&&i!==void 0&&i.context)||!((o=t.canvas)!==null&&o!==void 0&&o.canvas)||((v=t.canvas)===null||v===void 0||v.context.clearRect(0,0,(_=t.canvas)===null||_===void 0?void 0:_.canvas.offsetWidth,(M=t.canvas)===null||M===void 0?void 0:M.canvas.offsetHeight),this.sortChildren(function(g,x){return g.index-x.index}),this.deduplication(),this.getChildren().forEach(function(g){var x;if((x=t.canvas)!==null&&x!==void 0&&x.context&&g!==null&&g!==void 0&&g.draw){var z;g==null||g.draw((z=t.canvas)===null||z===void 0?void 0:z.context)}}))}}]),s}(K),Le=Ae,Se="mouseenter",We="mouseleave",we="mouseout",Be="mouseover",Ue="mousedown",Ke="mousemove",ke="mouseup",ze="contextmenu",je="click",$e="dblclick",Ne="wheel",be=[[Se,"_mouseenter"],[Ue,"_mousedown"],[Ke,"_mousemove"],[We,"_mouseleave"],[ke,"_mouseup"],[we,"_mouseout"],[Be,"_mouseover"],[ze,"_contextmenu"],[Ne,"_wheel"],[je,"_click"],[$e,"_dblclick"]],Ve=function(f){W()(s,f);var r=E()(s);function s(){var n;return l()(this,s),n=r.call(this),a()(d()(n),"name","Stage"),a()(d()(n),"parent",null),a()(d()(n),"content",void 0),a()(d()(n),"canvas",void 0),a()(d()(n),"width",void 0),a()(d()(n),"height",void 0),a()(d()(n),"draggable",void 0),a()(d()(n),"isFirstRender",void 0),a()(d()(n),"_pointerPositions",[]),a()(d()(n),"_changedPointerPositions",[]),a()(d()(n),"pointerPos",null),n.content=null,n.canvas=null,n.width=100,n.height=500,n.isFirstRender=!0,n.draggable=!1,n}return R()(s,[{key:"buildContentDOM",value:function(t){if(!(t.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var i=t.width?"".concat(t.width,"px"):"".concat(this.width,"%"),o=t.height?"".concat(t.height,"px"):"".concat(this.height,"px");this.content=t.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=i,this.content.style.height=o,this.canvas=new Te,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,t.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(t,i,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(t,i,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var t;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(t=this.canvas)!==null&&t!==void 0&&t.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(t){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var i=this.content.getBoundingClientRect(),o={top:i.top,left:i.left,scaleX:i.width/this.content.clientWidth||1,scaleY:i.height/this.content.clientHeight||1},v=null,_=null;v=(t.clientX-o.left)/o.scaleX,_=(t.clientY-o.top)/o.scaleY,this.pointerPos={x:v,y:_}}},{key:"_bindContentEvents",value:function(){var t,i=this;this!==null&&this!==void 0&&(t=this.content)!==null&&t!==void 0&&t.addEventListener&&be.forEach(function(o){var v,_=V()(o,2),M=_[0],g=_[1];(v=i.content)===null||v===void 0||v.addEventListener(M,function(x){i[g](x)},{passive:!1})})}},{key:"_mouseenter",value:function(t){j(this)&&(this.setPointersPositions(t),this.fire("mouseenter",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(t){j(this)&&(this.setPointersPositions(t),this.fire("mouseleave",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mouseover",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mousedown",value:function(t){this.setPointersPositions(t),this.fire("mousedown",{evt:t,target:this,currentTarget:this})}},{key:"_mousemove",value:function(t){this.setPointersPositions(t),this.fire("mousemove",{evt:t,target:this,currentTarget:this})}},{key:"_mouseup",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(t){t.preventDefault(),this.setPointersPositions(t),this.fire("contextmenu",{evt:t,target:this,currentTarget:this})}},{key:"_wheel",value:function(t){this.setPointersPositions(t),this.fire("wheel",{evt:t,target:this,currentTarget:this})}},{key:"_click",value:function(t){this.setPointersPositions(t),this.fire("click",{evt:t,target:this,currentTarget:this})}},{key:"_dblclick",value:function(t){this.setPointersPositions(t),this.fire("dblclick",{evt:t,target:this,currentTarget:this})}}]),s}(Le),_e=Ve,ce={},k=e(67294),ne,He=Object.prototype.toString;function Xe(f){return typeof f=="function"}var Nt=function(r){return typeof r!="undefined"};function bt(f){return typeof f=="undefined"}var Vt=function(r){return typeof r=="boolean"},Ht=function(r){return typeof r=="number"};function Ye(f){return typeof f=="string"}function Xt(f){return He.call(f)==="[object Object]"}var Yt=null,pe=typeof window!="undefined",Gt=typeof navigator!="undefined";function Zt(){}var Ft=pe&&((ne=window)===null||ne===void 0||(ne=ne.navigator)===null||ne===void 0?void 0:ne.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Jt=!k.useId,q=e(31955);function Ge(f,r){return r!==void 0?r:pe?q.Z.get(f):""}var Ze=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,n=arguments.length>2?arguments[2]:void 0,t=(0,k.useState)(Ge(r,n)),i=V()(t,2),o=i[0],v=i[1];(0,k.useEffect)(function(){var g=function(){var z=q.Z.get(r);return z!=null?z:(n===void 0?q.Z.remove(r):q.Z.set(r,n,s),n)};v(g())},[n,r,JSON.stringify(s)]);var _=(0,k.useCallback)(function(g){var x=Xe(g)?g(o):g;x===void 0?q.Z.remove(r):q.Z.set(r,x,s),v(x)},[r,o,JSON.stringify(s)]),M=(0,k.useCallback)(function(){var g=q.Z.get(r);Ye(g)&&v(g)},[r]);return[o,_,M]},Fe=Ze,Je=function(){var r=(0,k.useState)(0),s=V()(r,2),n=s[0],t=s[1],i,o=function(){clearTimeout(i)},v=function(M){o(),t(M||function(g){return g-1})};return(0,k.useEffect)(function(){return i=setTimeout(function(){n>0?t(function(_){return _-1}):o()},1e3),function(){return o()}},[n]),[n,v,o]},Qe=Je,qe=function(r,s){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ce;(0,k.useEffect)(function(){var t=new ResizeObserver(s);return r!=null&&r.current&&t.observe(r.current,n),function(){r!=null&&r.current&&t.unobserve(r.current),t.disconnect()}},[])},Ie=qe,et=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,n=(0,k.useState)({width:0,height:0}),t=V()(n,2),i=t[0],o=t[1];return Ie(r,function(v){if(v.length!==0){var _=V()(v,1),M=_[0],g=M.contentRect,x=g.width,z=g.height;o({width:x,height:z})}},s),i},tt=et,nt=e(42122),ae=e.n(nt),Ee=e(54683),ot=e(84305),rt="application/json;charset=utf-8",Qt="application/x-www-form-urlencoded",qt={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":rt,Accept:"application/json;version=3.0;compress=false;"},it=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},at=e(54998),st=e.n(at),ut=e(49360),lt=e(58146),dt=e(73505),ht=e(27771),ct=e(77226),vt=e(36378),ve=function f(r){if((0,ut.Z)(r)||(0,lt.Z)(r)||(0,dt.Z)(r))return r;if((0,ht.Z)(r))return r.map(function(n){return f(n)});if((0,ct.Z)(r)){var s=Object.create(null);return Object.keys(r).forEach(function(n){s[n]=f(r[n])}),s}else return(0,vt.Z)(r)?r.trim():r};function en(){return typeof window=="undefined"?!1:window&&window.__debug__}function tn(f){var r=atob(f);return Uint8Array.from(r,function(s){return s.codePointAt(0)})}function nn(f){var r=Array.from(f,function(s){return String.fromCodePoint(s)}).join("");return btoa(r)}var ft=Ee.Z.CancelToken.source(),mt=function(r){r.cancelToken=ft.token;var s=st()(r.url);if(r.url=s.query(ve(s.query(!0))||{}).toString(),r.data&&(r.data=ve(r.data)),r.params=ve(r.params||{}),r.cache&&(r.params=r.params||{},r.params.__cache__=Math.random()),r.filter){var n=r.data,t=n===void 0?{}:n;for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];o==null&&delete t[i]}}return r.method==="get"&&r.data&&(r.params=r.data,delete r.data),r},_t=function(r,s){s&&r.interceptors.request.use(function(n){return s(n)},function(n){return Promise.reject(n)}),r.interceptors.request.use(function(n){return mt(n)},function(n){return Promise.reject(n)})},pt=function(r){var s,n=r.data;try{if(n instanceof Blob){var t=r.headers["content-disposition"],i=t.split("filename=")[1];return{success:!0,data:{file:n,fileName:i}}}}catch(o){console.error(o)}return((s=r.headers)===null||s===void 0?void 0:s["content-type"].indexOf("application/json"))<0,n},It=function(r){var s="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!r.__CANCEL__){if(r){if(r.response&&r.response.data){var n=r.response.data.errors,t=n===void 0?[]:n,i=t&&t[0]||{};return Promise.reject({message:i.message||r.message||s,arguments:i.arguments||void 0,code:i.code||null})}return Promise.reject({message:r.message||s,arguments:void 0,code:null})}return Promise.reject({message:s,arguments:void 0,code:null})}},Et=function(r,s,n){s&&r.interceptors.response.use(function(t){return s(t)},function(t){return Promise.reject(t)}),s&&r.interceptors.response.use(function(t){return t},n),r.interceptors.response.use(pt,It)},gt=function(r){var s=r.config,n=s===void 0?{}:s,t=r.requestInterceptorsCallback,i=r.responseInterceptorOnSuccessCallback,o=r.responseInterceptorOnErrorCallback,v=(0,ot.Z)(it(),n),_=Ee.Z.create(v);_t(_,t),Et(_,i,o);function M(N,A,H){return _.request(ae()({url:N,params:A},H))}function g(N,A,H){return _.request(ae()({url:N,method:"post",params:A},H))}function x(N,A,H){return _.request(ae()({url:N,method:"put",params:A},H))}function z(N,A,H){return _.request(ae()({url:N,method:"delete",params:A},H))}return{get:M,post:g,del:z,put:x}},yt=gt,Pt=e(17061),ge=e.n(Pt),Ct=e(17156),Dt=e.n(Ct);function xt(f){var r=f.dataSource,s=f.delay,n=s===void 0?100:s,t=f.pageSize,i=t===void 0?10:t,o=f.fetchData,v=(0,k.useState)(!1),_=V()(v,2),M=_[0],g=_[1],x=(0,k.useState)(!0),z=V()(x,2),N=z[0],A=z[1],H=(0,k.useState)([]),se=V()(H,2),$=se[0],re=se[1];function ue(){return ee.apply(this,arguments)}function ee(){return ee=Dt()(ge()().mark(function le(){return ge()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!(!(r!=null&&r.length)&&!o)){b.next=2;break}return b.abrupt("return");case 2:if(!(!N||M)){b.next=4;break}return b.abrupt("return");case 4:if(g(!0),!r){b.next=10;break}return b.next=8,new Promise(function(F){setTimeout(function(){F(r==null?void 0:r.slice($.length,$.length+i))},n)}).then(function(F){A(($==null?void 0:$.length)+(F==null?void 0:F.length)<(r==null?void 0:r.length)),re(function(ie){return ie==null?void 0:ie.concat(F)})});case 8:b.next=12;break;case 10:return b.next=12,o==null?void 0:o({pageNum:$!=null&&$.length?Math.ceil(($==null?void 0:$.length)/i)+1:1,pageSize:i}).then(function(F){var ie=F.list,te=ie===void 0?[]:ie,ye=F.total,jt=ye===void 0?0:ye;A(($==null?void 0:$.length)+(te==null?void 0:te.length)<jt&&(te==null?void 0:te.length)>0),re(function(me){return me==null?void 0:me.concat(te)})});case 12:g(!1);case 13:case"end":return b.stop()}},le)})),ee.apply(this,arguments)}return{data:$,setData:re,loading:M,hasMore:N,loadMore:ue}}var Mt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(0,k.useState)(!1),t=V()(n,2),i=t[0],o=t[1],v=(0,k.useRef)(null);return(0,k.useEffect)(function(){var _=new IntersectionObserver(function(M){M.forEach(function(g){g.isIntersecting?(o(!0),s&&_.unobserve(g.target)):o(!1)})},r);return v!=null&&v.current&&_.observe(v.current),function(){v!=null&&v.current&&_.unobserve(v.current)}},[r,s]),[v,i]},Ot=Mt,Rt=function(r){var s=(0,k.useRef)({});return(0,k.useLayoutEffect)(function(){s.current=r}),(0,k.useLayoutEffect)(function(){return function(){s.current={}}},[]),s.current},Tt=Rt,At=function(){var r=(0,k.useState)({width:window.innerWidth,height:window.innerHeight}),s=V()(r,2),n=s[0],t=s[1],i=function(){t({width:window.innerWidth,height:window.innerHeight})};return(0,k.useLayoutEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),{width:n.width,height:n.height}},Lt=At,St=e(88305),Wt=function(r){var s,n=(0,k.useRef)(null),t=function(v){n.current=v,console.log(n)},i=function(){};return{api:{initChart:t},assistLine:{startPoint:{x:0,y:0},endPoint:{x:0,y:(s=n.current)===null||s===void 0?void 0:s.clientHeight},points:[],ref:n}}},fe=(0,St.f)(Wt),oe=e(85893),wt=function(r){var s=fe.useContainer(),n=s.assistLine;return console.log(n,"assistLine"),console.log(n.ref.current,"initialState"),(0,oe.jsx)("div",{})},Bt=wt,Ut=function(){var r=fe.useContainer(),s=r.api.initChart,n=(0,k.useRef)(null);return(0,k.useLayoutEffect)(function(){n.current&&s(n.current)},[]),(0,oe.jsx)("div",{ref:n,children:(0,oe.jsx)(_e,{children:(0,oe.jsx)(Bt,{})})})},Kt=Ut,kt=function(r){return console.log(r,"props."),(0,oe.jsx)(fe.Provider,{initialState:{option:r.option},children:(0,oe.jsx)(Kt,ae()({},r))})},zt=kt},48977:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(54197);const l=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(18283);const l=[{value:"\u6839\u636E\u753B\u5E03\u91CD\u65B0\u6E32\u67D3 \u753B\u5E03\u5185\u5BB9",paraId:0,tocIndex:1},{value:"\u6F14\u793A\u63A8\u8350 \u6253\u5F00\u5DE6\u53F3\u63A7\u5236\u53F0\u62D6\u62FD",paraId:1,tocIndex:1}]},51234:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(97452);const l=[{value:`
  npm i heitu or yarn add heitu

`,paraId:0,tocIndex:0},{value:`import { Stage } from 'heitu';
export const Index = () => {
  return (
    <>
      <stage />
    </>
  );
};
`,paraId:1,tocIndex:1}]},9978:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(26211);const l=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(29876);const l=[{value:`
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
`,paraId:1,tocIndex:1}]},18632:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(72155);const l=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1}]},30223:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(64577);const l=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},28355:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(28587);const l=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},6575:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(56139);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},57529:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(22956);const l=[{value:"\u83B7\u53D6\u7EC4\u4EF6\u6E32\u67D3\u65F6\u95F4\uFF0C\u652F\u6301\u6279\u91CF\u83B7\u53D6\u591A\u4E2A\u7EC4\u4EF6 \u548C\u5355\u4E2A\u7EC4\u4EF6",paraId:0,tocIndex:1}]},51794:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(38668);const l=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(81233);const l=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1}]},87553:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(35412);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(1019);const l=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},20834:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(65808);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},51331:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(44012);const l=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(74746);const l=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},49811:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(81286);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},69853:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(68145);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},85854:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(51530);const l=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(68537);const l=[]},87724:function(y,u,e){e.r(u),e.d(u,{texts:function(){return l}});var I=e(79930);const l=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(y,u){u.Z=`import {
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
`}}]);
