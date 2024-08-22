"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(54197),i={}},98841:function(I,t,e){e.r(t),e.d(t,{demos:function(){return M}});var h=e(17061),r=e.n(h),i=e(17156),x=e.n(i),D=e(67294),T=e(89131),M={"docs-canvas-rect-demo-rectdemo":{component:D.memo(D.lazy(function(){return e.e(433).then(e.bind(e,3815))})),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-rectdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70922).Z},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var U=x()(r()().mark(function E(){var m,c=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(m=l.sent).default.apply(m,c));case 3:case"end":return l.stop()}},E)}));function y(){return U.apply(this,arguments)}return y}()}}}},67023:function(I,t,e){e.r(t),e.d(t,{demos:function(){return M}});var h=e(17061),r=e.n(h),i=e(17156),x=e.n(i),D=e(67294),T=e(18283),M={"docs-canvas-stage-demo-demo":{component:D.memo(D.lazy(function(){return e.e(433).then(e.bind(e,91518))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74534).Z},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var U=x()(r()().mark(function E(){var m,c=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(m=l.sent).default.apply(m,c));case 3:case"end":return l.stop()}},E)}));function y(){return U.apply(this,arguments)}return y}()}}}},60342:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(28561),i={}},15266:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(8297),i={}},44401:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(26211),i={}},97086:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(29876),i={}},75326:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(72155),i={}},31701:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(64577),y={"docs-hooks-use-cookie-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=s.sent,c=m.default,s.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return f=s.sent,l=f.useCookie,s.abrupt("return",{default:function(){var p={path:"/"},O="cookie-key",L=l(O,p,"default-value"),C=x()(L,3),R=C[0],B=C[1],W=C[2],V=function(){B("new-cookie-value")},Z=function(){B(void 0)},F=function(){if("cookieStore"in window){var ne=window.cookieStore;ne.set({name:O,value:"changed"})}else document.cookie="".concat(O,"=changed; path=/")};return c.createElement("div",null,c.createElement("p",null,"Click on the button to update or clear the cookie"),c.createElement("p",{color:"blue"},"cookie: ",R||"no value"),c.createElement("button",{onClick:V},"Update the cookie"),c.createElement("button",{onClick:Z},"Clear the cookie"),c.createElement("button",{onClick:F},"Changing the cookie through other methods"),c.createElement("button",{onClick:W},"Refresh the cookie"))}});case 9:case"end":return s.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},67731:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(28587),y={"docs-hooks-use-count-down-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l,A,s;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=p.sent,c=m.default,p.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return f=p.sent,l=f.useCountDown,p.next=10,Promise.resolve().then(e.bind(e,51450));case 10:return A=p.sent,s=A.Button,p.abrupt("return",{default:function(){var L=l(),C=x()(L,3),R=C[0],B=C[1],W=C[2];return c.createElement("div",null,R,c.createElement(s,{type:"default",onClick:function(){B(60)}},"\u5F00\u59CB"),c.createElement(s,{type:"default",onClick:function(){W()}},"\u6682\u505C"),c.createElement(s,{type:"default",onClick:function(){B()}},"\u7EE7\u7EED"))}});case 13:case"end":return p.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useCountDown } from 'heitu';
import { Button } from 'antd';

export default () => {
  const [seconds,startCountDown,stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <Button
        type="default"
        onClick={() => {
          startCountDown(60)
        }}
      >
        \u5F00\u59CB
      </Button>
      <Button
        type="default"
        onClick={() => {
          stopCountDown();
        }}
      >
        \u6682\u505C
      </Button>
      <Button
        type="default"
        onClick={() => {
         startCountDown()
        }}
      >
        \u7EE7\u7EED
      </Button>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"},antd:{type:"NPM",value:"5.20.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922),antd:e(51450)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},65585:function(I,t,e){e.r(t),e.d(t,{demos:function(){return M}});var h=e(17061),r=e.n(h),i=e(17156),x=e.n(i),D=e(67294),T=e(56139),M={"docs-hooks-use-element-size-demo-0":{component:D.memo(D.lazy(x()(r()().mark(function U(){var y,E,m,c,f,l;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return y=s.sent,E=y.default,m=y.useRef,c=y.useEffect,s.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return f=s.sent,l=f.useElementSize,s.abrupt("return",{default:function(){var p=m(null),O=l(p);return c(function(){console.log(p.current.mount)},[]),E.createElement("div",null,E.createElement("textarea",{ref:p,disabled:!0,style:{width:200,height:200},value:"width: ".concat(O.width,`
height: `).concat(O.height)}))}});case 11:case"end":return s.stop()}},U)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
import { useElementSize } from 'heitu';
import { Input } from 'antd';

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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var U=x()(r()().mark(function E(){var m,c=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(m=l.sent).default.apply(m,c));case 3:case"end":return l.stop()}},E)}));function y(){return U.apply(this,arguments)}return y}()}}}},38477:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(22956),i={}},23897:function(I,t,e){e.r(t),e.d(t,{demos:function(){return M}});var h=e(17061),r=e.n(h),i=e(17156),x=e.n(i),D=e(67294),T=e(38668),M={"docs-hooks-use-ht-axios-demo-0":{component:D.memo(D.lazy(x()(r()().mark(function U(){var y,E,m,c;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,55922));case 2:return y=l.sent,E=y.useHtAxios,l.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=l.sent,c=m.default,l.abrupt("return",{default:function(){var s=E({config:{timeout:3e3},requestInterceptorsCallBack:function(O){return O},responseInterceptorsCallBack:function(O){return O.data}}),N=function(){var p=x()(r()().mark(function O(){var L;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,s.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:L=R.sent,console.log(L);case 4:case"end":return R.stop()}},O)}));return function(){return p.apply(this,arguments)}}();return c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},c.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){N()}},"123"))}});case 9:case"end":return l.stop()}},U)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var U=x()(r()().mark(function E(){var m,c=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(m=l.sent).default.apply(m,c));case 3:case"end":return l.stop()}},E)}));function y(){return U.apply(this,arguments)}return y}()}}}},97716:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(81233),i={}},79817:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(35412),y={"docs-hooks-use-in-view-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=s.sent,c=m.default,s.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return f=s.sent,l=f.useInView,s.abrupt("return",{default:function(){var p=l(),O=x()(p,2),L=O[0],C=O[1];return c.createElement("div",null,c.createElement("div",null,C?"active":"inactive"),c.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},c.createElement("div",{ref:L},"12312312")))}});case 9:case"end":return s.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},59842:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(1019),y={"docs-hooks-use-infinite-scroll-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l,A,s,N;return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return N=function(C){var R=C.hasMore,B=C.loadMore,W=s(),V=x()(W,2),Z=V[0],F=V[1];return f(function(){F&&R&&(B==null||B())},[R,F,B]),c.createElement("div",{ref:Z},R?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},O.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return m=O.sent,c=m.default,f=m.useEffect,O.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return l=O.sent,A=l.useInfiniteScroll,s=l.useInView,O.abrupt("return",{default:function(){var C=new Array(100).fill(1).map(function(Z,F){return F}),R=A({dataSource:C,pageSize:10,delay:100}),B=R.data,W=R.hasMore,V=R.loadMore;return c.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},B==null?void 0:B.map(function(Z){return c.createElement("span",null,Z)}),c.createElement(N,{loadMore:V,hasMore:W}))}});case 12:case"end":return O.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},10610:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(65808),i={}},13917:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(44012),i={}},37868:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(74746),y={"docs-hooks-use-previous-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l,A,s;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=p.sent,c=m.default,f=m.useState,p.next=7,Promise.resolve().then(e.bind(e,55922));case 7:return l=p.sent,A=l.usePrevious,s=function(L){var C=A(L);return console.log(C,L),c.createElement("div",null,c.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(C==null?void 0:C.aa)||0," "),c.createElement("div",null,"\u5F53\u524D\u7684aa: ",L==null?void 0:L.aa))},p.abrupt("return",{default:function(){var L=f(1),C=x()(L,2),R=C[0],B=C[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){return B(R+1)}},"+1"),c.createElement(s,{aa:R}))}});case 11:case"end":return p.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},7411:function(I,t,e){e.r(t),e.d(t,{demos:function(){return y}});var h=e(17061),r=e.n(h),i=e(27424),x=e.n(i),D=e(17156),T=e.n(D),M=e(67294),U=e(81286),y={"docs-hooks-use-resize-observer-demo-0":{component:M.memo(M.lazy(T()(r()().mark(function E(){var m,c,f,l,A,s;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=p.sent,c=m.default,f=m.useRef,l=m.useState,p.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return A=p.sent,s=A.useResizeObserver,p.abrupt("return",{default:function(){var L=f(null),C=l({width:0,height:0}),R=x()(C,2),B=R[0],W=R[1];return s(L,function(V){var Z=x()(V,1),F=Z[0],J=F.contentRect,ne=J.width,te=J.height;W({width:ne,height:te})}),c.createElement("div",null,c.createElement("textarea",{ref:L,disabled:!0,style:{width:200,height:200},value:"width: ".concat(B.width,`
height: `).concat(B.height)}))}});case 11:case"end":return p.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
import { useResizeObserver } from 'heitu';
import { Input } from 'antd';

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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=T()(r()().mark(function c(){var f,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(19).then(e.bind(e,4019));case 2:return s.abrupt("return",(f=s.sent).default.apply(f,l));case 3:case"end":return s.stop()}},c)}));function m(){return E.apply(this,arguments)}return m}()}}}},91805:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(68145),i={}},9954:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(51530),i={}},11171:function(I,t,e){e.r(t),e.d(t,{demos:function(){return i}});var h=e(67294),r=e(68537),i={}},55922:function(I,t,e){e.r(t),e.d(t,{Rect:function(){return R},Stage:function(){return Le},useCookie:function(){return je},useCountDown:function(){return $e},useElementSize:function(){return Ge},useHtAxios:function(){return dn},useInView:function(){return fn},useInfiniteScroll:function(){return vn},usePrevious:function(){return pn},useResizeObserver:function(){return ve}});var h=e(42122),r=e.n(h),i=e(67294),x=e(89728),D=e.n(x),T=e(56690),M=e.n(T),U=e(61655),y=e.n(U),E=e(26389),m=e.n(E),c=e(38416),f=e.n(c),l={lineWidth:1,opacity:1,shadowBlur:0,shadowColor:"orange",shadowOffsetX:0,shadowOffsetY:0,lineCap:"butt",lineJoin:"miter",lineDash:[],pointerEvents:"all",zIndex:0},A=function(){function u(n,a,o){M()(this,u),f()(this,"type",void 0),f()(this,"stage",void 0),this.type=n,this.data=r()(r()(r()({},o),o),a)}return D()(u,[{key:"attr",value:function(){if(this.stage){for(var a,o=arguments.length,d=new Array(o),v=0;v<o;v++)d[v]=arguments[v];switch(d.length){case 1:{var P=d[0];this.data=r()(r()({},this.data),P);break}default:console.log("\u672A\u5B9E\u73B0\u7684\u53C2\u6570\u6570\u91CF");break}(a=this.stage)===null||a===void 0||a.renderStage()}}}]),u}(),s={cornerRadius:0,lineWidth:1},N=function(u){y()(a,u);var n=m()(a);function a(o){return M()(this,a),n.call(this,"Rect",o,s)}return D()(a)}(A),p=(0,i.createContext)({}),O=function(n,a,o){(0,i.useLayoutEffect)(function(){n[a]!==void 0&&o.attr(f()({},a,n[a]))},[n[a]])},L={x:0,y:0,width:100,height:100,fillStyle:"black"},C=function(n){var a=r()(r()({},L),n),o=(0,i.useContext)(p),d=new N(a),v=(0,i.useRef)(d);return console.log(a.fillStyle),O(a,"width",v.current),O(a,"height",v.current),O(a,"x",v.current),O(a,"y",v.current),O(a,"fillStyle",v.current),(0,i.useLayoutEffect)(function(){return o.appendChild(v.current),function(){}},[]),null},R=C,B=function(n){return n.toSorted(function(a,o){var d=a.data.zIndex,v=o.data.zIndex;return d-v})},W=window.devicePixelRatio,V=null,Z=e(861),F=e.n(Z),J=function(n,a){return n>0&&n!==1/0&&a},ne=function(n,a){a.data.fillStyle&&n.fill(a.path2D),J(a.data.lineWidth,a.data.strokeStyle)&&n.stroke(a.path2D)};function te(u,n){var a=n.data,o=a.lineWidth,d=a.lineCap,v=a.lineJoin,P=a.strokeStyle,_=a.fillStyle,g=a.opacity,K=a.shadowBlur,S=a.shadowColor,G=a.shadowOffsetX,k=a.shadowOffsetY,z=n.transform,j=n.scale,$=n.translate;u.lineWidth=o,u.lineCap=d,u.lineJoin=v,u.strokeStyle=P,u.fillStyle=_,u.globalAlpha=g,u.shadowOffsetX=G,u.shadowOffsetY=k,u.shadowColor=S,u.shadowBlur=K,z&&u.setTransform.apply(u,F()(z)),j&&u.scale(j.x,j.y),$&&u.translate($.x,$.y)}var _e=function(n){var a=n.x,o=n.y,d=n.width,v=n.height,P=n.cornerRadius,_=P===void 0?0:P,g=new Path2D;return g.moveTo(a+_,o),g.lineTo(a+d-_,o),g.arc(a+d-_,o+_,_,Math.PI/2*3,0),g.lineTo(a+d,o+v-_),g.arc(a+d-_,o+v-_,_,0,Math.PI/2),g.lineTo(a+_,o+v),g.arc(a+_,o+v-_,_,Math.PI/2,Math.PI),g.lineTo(a,o+_),g.arc(a+_,o+_,_,Math.PI,Math.PI/2*3),g.closePath(),console.log(g,"path2D"),g},Ee=function(n){n.path2D=_e(n.data)};function Pe(u,n){var a=B(n);a.forEach(function(o){switch(console.log(o,"elementItem"),u.beginPath(),te(u,o),o.type){case"Rect":{Ee(o),console.log(o,"elementItemelementItem"),ne(u,o);break}default:console.log(o.type,"\u8BE5\u56FE\u5F62 \u6682\u672A\u5B9E\u73B0");break}})}function ie(u,n){u.forEach(function(a){a.stage=n,a.children&&ie(a.children,n)})}function ge(u){var n,a,o=u.ctx;o.clearRect(0,0,(n=u.canvasElement)===null||n===void 0?void 0:n.width,(a=u.canvasElement)===null||a===void 0?void 0:a.height),Pe(o,u.children)}var Oe=function(n,a,o){var d=a*W,v=o*W;n.width=d,n.height=v,n.style.width="100%",n.style.height="100%"},Me=function(n,a,o){Oe(n,a,o);var d=n.getContext("2d");return d?(d.scale(W,W),d.textBaseline="top",d.font="".concat(14,"px \u5FAE\u8F6F\u96C5\u9ED1"),d):null},ye=function(n,a){var o=document.createElement("canvas"),d=Me(o,n,a);return{canvasElement:o,ctx:d}},De=function(n){var a=n.offsetWidth,o=n.offsetHeight,d=ye(a,o),v=d.canvasElement,P=d.ctx;return n.append(v),{canvasElement:v,ctx:P}},le=null,gn=null,Ce=function(){for(var n;n=le.shift();)n.cb()},ae=!0,On=function(n){var a={cb:n};le.push(a),ae&&window.queueMicrotask(Ce),ae=!1},xe=function(){ae=!0},Re=function(){function u(){M()(this,u),f()(this,"canvasElement",void 0),f()(this,"ctx",void 0),f()(this,"children",[]),f()(this,"isAsyncRenderTask",!1),this.canvasElement=null,this.ctx=null}return D()(u,[{key:"mount",value:function(a){var o=a.container,d=De(o);this.ctx=d==null?void 0:d.ctx,this.canvasElement=d==null?void 0:d.canvasElement,this.renderStage()}},{key:"appendChild",value:function(){for(var a=this,o=arguments.length,d=new Array(o),v=0;v<o;v++)d[v]=arguments[v];var P=d.flat(1);this.children=this.children.concat(P),this.children=this.children.map(function(_){return Object.assign(_,{parent:a})}),ie(this.children,this)}},{key:"renderStage",value:function(){var a=this;this.isAsyncRenderTask||(this.isAsyncRenderTask=!0,requestAnimationFrame(function(){xe(),ge(a),a.isAsyncRenderTask=!1}))}},{key:"addStageEventListener",value:function(){this.canvasElement&&(this.canvasElement.onmousemove=function(a){{var o={target:null,x:a.offsetX,y:a.offsetY,nativeEvent:a};console.log(o,"onmousemove_eventParameter")}})}}]),u}(),ce=e(85893),Te={width:"100%",height:400,background:"#fff",margin:"0 auto"},Ae=function(n){var a=(0,i.useRef)(null),o=(0,i.useRef)(new Re),d=r()(r()({},Te),n);return(0,i.useLayoutEffect)(function(){o.current.mount({container:a.current})},[]),(0,ce.jsxs)(p.Provider,{value:o.current,children:[(0,ce.jsx)("div",{ref:a,style:d}),n.children]})},Le=Ae,Se=e(27424),X=e.n(Se),re={},q,Be=Object.prototype.toString;function Ue(u){return typeof u=="function"}var Mn=function(n){return typeof n!="undefined"};function yn(u){return typeof u=="undefined"}var Dn=function(n){return typeof n=="boolean"},Cn=function(n){return typeof n=="number"};function We(u){return typeof u=="string"}function xn(u){return Be.call(u)==="[object Object]"}var Rn=null,he=typeof window!="undefined",Tn=typeof navigator!="undefined";function An(){}var Ln=he&&((q=window)===null||q===void 0||(q=q.navigator)===null||q===void 0?void 0:q.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Sn=!i.useId,Q=e(31955);function Ke(u,n){return n!==void 0?n:he?Q.Z.get(u):""}var we=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:re,o=arguments.length>2?arguments[2]:void 0,d=(0,i.useState)(Ke(n,o)),v=X()(d,2),P=v[0],_=v[1];(0,i.useEffect)(function(){var S=function(){var k=Q.Z.get(n);return k!=null?k:(o===void 0?Q.Z.remove(n):Q.Z.set(n,o,a),o)};_(S())},[o,n,JSON.stringify(a)]);var g=(0,i.useCallback)(function(S){var G=Ue(S)?S(P):S;G===void 0?Q.Z.remove(n):Q.Z.set(n,G,a),_(G)},[n,P,JSON.stringify(a)]),K=(0,i.useCallback)(function(){var S=Q.Z.get(n);We(S)&&_(S)},[n]);return[P,g,K]},je=we,ze=function(){var n=(0,i.useState)(0),a=X()(n,2),o=a[0],d=a[1],v,P=function(){clearTimeout(v)},_=function(K){P(),d(K||function(S){return S-1})};return(0,i.useEffect)(function(){return v=setTimeout(function(){o>0?d(function(g){return g-1}):P()},1e3),function(){return P()}},[o]),[o,_,P]},$e=ze,Ne=function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:re;(0,i.useEffect)(function(){var d=new ResizeObserver(a);return n!=null&&n.current&&d.observe(n.current,o),function(){n!=null&&n.current&&d.unobserve(n.current),d.disconnect()}},[])},ve=Ne,Ve=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:re,o=(0,i.useState)({width:0,height:0}),d=X()(o,2),v=d[0],P=d[1];return ve(n,function(_){if(_.length!==0){var g=X()(_,1),K=g[0],S=K.contentRect,G=S.width,k=S.height;P({width:G,height:k})}},a),v},Ge=Ve,me=e(54683),ke=e(5332),He="application/json;charset=utf-8",Bn="application/x-www-form-urlencoded",Un={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":He,Accept:"application/json;version=3.0;compress=false;"},Ze=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Fe=e(54998),Ye=e.n(Fe),Xe=e(49360),Je=e(58146),Qe=e(73505),be=e(27771),qe=e(77226),en=e(36378),oe=function u(n){if((0,Xe.Z)(n)||(0,Je.Z)(n)||(0,Qe.Z)(n))return n;if((0,be.Z)(n))return n.map(function(o){return u(o)});if((0,qe.Z)(n)){var a=Object.create(null);return Object.keys(n).forEach(function(o){a[o]=u(n[o])}),a}else return(0,en.Z)(n)?n.trim():n};function Wn(){return typeof window=="undefined"?!1:window&&window.__debug__}function Kn(u){var n=atob(u);return Uint8Array.from(n,function(a){return a.codePointAt(0)})}function wn(u){var n=Array.from(u,function(a){return String.fromCodePoint(a)}).join("");return btoa(n)}var nn=me.Z.CancelToken.source(),tn=function(n){n.cancelToken=nn.token;var a=Ye()(n.url);if(n.url=a.query(oe(a.query(!0))||{}).toString(),n.data&&(n.data=oe(n.data)),n.params=oe(n.params||{}),n.cache&&(n.params=n.params||{},n.params.__cache__=Math.random()),n.filter){var o=n.data,d=o===void 0?{}:o;for(var v in d)if(d.hasOwnProperty(v)){var P=d[v];P==null&&delete d[v]}}return n.method==="get"&&n.data&&(n.params=n.data,delete n.data),n},an=function(n,a){a&&n.interceptors.request.use(function(o){return a(o)},function(o){return Promise.reject(o)}),n.interceptors.request.use(function(o){return tn(o)},function(o){return Promise.reject(o)})},rn=function(n){var a,o=n.data;try{if(o instanceof Blob){var d=n.headers["content-disposition"],v=d.split("filename=")[1];return{success:!0,data:{file:o,fileName:v}}}}catch(P){console.error(P)}return((a=n.headers)===null||a===void 0?void 0:a["content-type"].indexOf("application/json"))<0,o},on=function(n){var a="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!n.__CANCEL__){if(n){if(n.response&&n.response.data){var o=n.response.data.errors,d=o===void 0?[]:o,v=d&&d[0]||{};return Promise.reject({message:v.message||n.message||a,arguments:v.arguments||void 0,code:v.code||null})}return Promise.reject({message:n.message||a,arguments:void 0,code:null})}return Promise.reject({message:a,arguments:void 0,code:null})}},un=function(n,a,o){a&&n.interceptors.response.use(function(d){return a(d)},function(d){return Promise.reject(d)}),a&&n.interceptors.response.use(function(d){return d},o),n.interceptors.response.use(rn,on)},sn=function(n){var a=n.config,o=a===void 0?{}:a,d=n.requestInterceptorsCallback,v=n.responseInterceptorOnSuccessCallback,P=n.responseInterceptorOnErrorCallback,_=(0,ke.Z)(Ze(),o),g=me.Z.create(_);an(g,d),un(g,v,P);function K(z,j,$){return g.request(r()({url:z,params:j},$))}function S(z,j,$){return g.request(r()({url:z,method:"post",params:j},$))}function G(z,j,$){return g.request(r()({url:z,method:"put",params:j},$))}function k(z,j,$){return g.request(r()({url:z,method:"delete",params:j},$))}return{get:K,post:S,del:k,put:G}},dn=sn,ln=e(17061),fe=e.n(ln),cn=e(17156),hn=e.n(cn);function vn(u){var n=u.dataSource,a=u.delay,o=a===void 0?100:a,d=u.pageSize,v=d===void 0?10:d,P=u.fetchData,_=(0,i.useState)(!1),g=X()(_,2),K=g[0],S=g[1],G=(0,i.useState)(!0),k=X()(G,2),z=k[0],j=k[1],$=(0,i.useState)([]),Ie=X()($,2),w=Ie[0],ue=Ie[1];function _n(){return se.apply(this,arguments)}function se(){return se=hn()(fe()().mark(function En(){return fe()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(!(!(n!=null&&n.length)&&!P)){H.next=2;break}return H.abrupt("return");case 2:if(!(!z||K)){H.next=4;break}return H.abrupt("return");case 4:if(S(!0),!n){H.next=10;break}return H.next=8,new Promise(function(Y){setTimeout(function(){Y(n==null?void 0:n.slice(w.length,w.length+v))},o)}).then(function(Y){j((w==null?void 0:w.length)+(Y==null?void 0:Y.length)<(n==null?void 0:n.length)),ue(function(ee){return ee==null?void 0:ee.concat(Y)})});case 8:H.next=12;break;case 10:return H.next=12,P==null?void 0:P({pageNum:w!=null&&w.length?Math.ceil((w==null?void 0:w.length)/v)+1:1,pageSize:v}).then(function(Y){var ee=Y.list,b=ee===void 0?[]:ee,pe=Y.total,Pn=pe===void 0?0:pe;j((w==null?void 0:w.length)+(b==null?void 0:b.length)<Pn&&(b==null?void 0:b.length)>0),ue(function(de){return de==null?void 0:de.concat(b)})});case 12:S(!1);case 13:case"end":return H.stop()}},En)})),se.apply(this,arguments)}return{data:w,setData:ue,loading:K,hasMore:z,loadMore:_n}}var mn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=(0,i.useState)(!1),d=X()(o,2),v=d[0],P=d[1],_=(0,i.useRef)(null);return(0,i.useEffect)(function(){var g=new IntersectionObserver(function(K){K.forEach(function(S){S.isIntersecting?(P(!0),a&&g.unobserve(S.target)):P(!1)})},n);return _!=null&&_.current&&g.observe(_.current),function(){_!=null&&_.current&&g.unobserve(_.current)}},[n,a]),[_,v]},fn=mn,In=function(n){var a=(0,i.useRef)({});return(0,i.useLayoutEffect)(function(){a.current=n}),(0,i.useLayoutEffect)(function(){return function(){a.current={}}},[]),a.current},pn=In},48977:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(54197);const r=[]},12477:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(89131);const r=[]},25924:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(18283);const r=[]},85135:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(28561);const r=[]},53568:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(8297);const r=[]},9978:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(26211);const r=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(29876);const r=[]},18632:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(72155);const r=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},30223:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(64577);const r=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},28355:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(28587);const r=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},6575:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(56139);const r=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},57529:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(22956);const r=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},51794:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(38668);const r=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(81233);const r=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},87553:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(35412);const r=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(1019);const r=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},20834:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(65808);const r=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51331:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(44012);const r=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},19905:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(74746);const r=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},49811:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(81286);const r=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},69853:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(68145);const r=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},85854:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(51530);const r=[{value:"\u83B7\u53D6window\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(I,t,e){e.r(t),e.d(t,{texts:function(){return r}});var h=e(68537);const r=[]},74534:function(I,t){t.Z=`import { Stage } from 'heitu';
import React from 'react';

const Index = () => {
  return (
    <div>
      <Stage></Stage>
    </div>
  );
};

export default Index;
`},70922:function(I,t){t.Z=`import { Rect, Stage } from 'heitu';
import React, { useState } from 'react';

const Index = () => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const [fillStyle, setFillStyle] = useState('red');
  return (
    <div>
      <div style={{ marginTop: '30px' }}>
        <label> fillColor: </label>
        <input
          type="color"
          onChange={(evt) => setFillStyle(evt.target.value)}
        />
      </div>

      <div>
        <label> x: </label>
        <input
          type="range"
          value={x}
          min={100}
          max={200}
          onChange={(evt) => setX(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> y: </label>
        <input
          type="range"
          value={y}
          min={10}
          max={100}
          onChange={(evt) => setY(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> width: </label>
        <input
          type="range"
          value={width}
          min={100}
          max={300}
          onChange={(evt) => setWidth(Number(evt.target.value))}
        />
      </div>

      <div>
        <label> height: </label>
        <input
          type="range"
          value={height}
          min={100}
          max={300}
          onChange={(evt) => setHeight(Number(evt.target.value))}
        />
      </div>
      <Stage>
        <Rect x={x} y={y} width={width} height={height} fillStyle={fillStyle} />
      </Stage>
    </div>
  );
};

export default Index;
`}}]);
