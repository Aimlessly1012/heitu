"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(54197),l={}},98841:function(f,n,e){e.r(n),e.d(n,{demos:function(){return D}});var m=e(15009),a=e.n(m),l=e(99289),A=e.n(l),O=e(67294),R=e(89131),D={"docs-canvas-rect-demo-demo":{component:O.memo(O.lazy(function(){return e.e(433).then(e.bind(e,91518))})),asset:{type:"BLOCK",id:"docs-canvas-rect-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74534).Z},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var B=A()(a()().mark(function E(){var v,c=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,c));case 3:case"end":return i.stop()}},E)}));function g(){return B.apply(this,arguments)}return g}()}}}},67023:function(f,n,e){e.r(n),e.d(n,{demos:function(){return D}});var m=e(15009),a=e.n(m),l=e(99289),A=e.n(l),O=e(67294),R=e(18283),D={"docs-canvas-stage-demo-stagedemo":{component:O.memo(O.lazy(function(){return e.e(433).then(e.bind(e,24515))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77217).Z},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var B=A()(a()().mark(function E(){var v,c=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,c));case 3:case"end":return i.stop()}},E)}));function g(){return B.apply(this,arguments)}return g}()}}}},60342:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(28561),l={}},15266:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(8297),l={}},44401:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(26211),l={}},97086:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(29876),l={}},75326:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(72155),l={}},31701:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(64577),g={"docs-hooks-use-cookie-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,c=v.default,u.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return p=u.sent,i=p.useCookie,u.abrupt("return",{default:function(){var h={path:"/"},y="cookie-key",T=i(y,h,"default-value"),C=A()(T,3),x=C[0],S=C[1],W=C[2],V=function(){S("new-cookie-value")},F=function(){S(void 0)},Y=function(){if("cookieStore"in window){var te=window.cookieStore;te.set({name:y,value:"changed"})}else document.cookie="".concat(y,"=changed; path=/")};return c.createElement("div",null,c.createElement("p",null,"Click on the button to update or clear the cookie"),c.createElement("p",{color:"blue"},"cookie: ",x||"no value"),c.createElement("button",{onClick:V},"Update the cookie"),c.createElement("button",{onClick:F},"Clear the cookie"),c.createElement("button",{onClick:Y},"Changing the cookie through other methods"),c.createElement("button",{onClick:W},"Refresh the cookie"))}});case 9:case"end":return u.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},67731:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(28587),g={"docs-hooks-use-count-down-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i,U,u;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=h.sent,c=v.default,h.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return p=h.sent,i=p.useCountDown,h.next=10,Promise.resolve().then(e.bind(e,75427));case 10:return U=h.sent,u=U.Button,h.abrupt("return",{default:function(){var T=i(),C=A()(T,3),x=C[0],S=C[1],W=C[2];return c.createElement("div",null,x,c.createElement(u,{type:"default",onClick:function(){S(60)}},"\u5F00\u59CB"),c.createElement(u,{type:"default",onClick:function(){W()}},"\u6682\u505C"),c.createElement(u,{type:"default",onClick:function(){S()}},"\u7EE7\u7EED"))}});case 13:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"},antd:{type:"NPM",value:"5.20.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922),antd:e(75427)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},65585:function(f,n,e){e.r(n),e.d(n,{demos:function(){return D}});var m=e(15009),a=e.n(m),l=e(99289),A=e.n(l),O=e(67294),R=e(56139),D={"docs-hooks-use-element-size-demo-0":{component:O.memo(O.lazy(A()(a()().mark(function B(){var g,E,v,c,p,i;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return g=u.sent,E=g.default,v=g.useRef,c=g.useEffect,u.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return p=u.sent,i=p.useElementSize,u.abrupt("return",{default:function(){var h=v(null),y=i(h);return c(function(){console.log(h.current.mount)},[]),E.createElement("div",null,E.createElement("textarea",{ref:h,disabled:!0,style:{width:200,height:200},value:"width: ".concat(y.width,`
height: `).concat(y.height)}))}});case 11:case"end":return u.stop()}},B)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var B=A()(a()().mark(function E(){var v,c=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,c));case 3:case"end":return i.stop()}},E)}));function g(){return B.apply(this,arguments)}return g}()}}}},38477:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(22956),l={}},23897:function(f,n,e){e.r(n),e.d(n,{demos:function(){return D}});var m=e(15009),a=e.n(m),l=e(99289),A=e.n(l),O=e(67294),R=e(38668),D={"docs-hooks-use-ht-axios-demo-0":{component:O.memo(O.lazy(A()(a()().mark(function B(){var g,E,v,c;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,55922));case 2:return g=i.sent,E=g.useHtAxios,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=i.sent,c=v.default,i.abrupt("return",{default:function(){var u=E({config:{timeout:3e3},requestInterceptorsCallBack:function(y){return y},responseInterceptorsCallBack:function(y){return y.data}}),N=function(){var h=A()(a()().mark(function y(){var T;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,u.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:T=x.sent,console.log(T);case 4:case"end":return x.stop()}},y)}));return function(){return h.apply(this,arguments)}}();return c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},c.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){N()}},"123"))}});case 9:case"end":return i.stop()}},B)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(55922),react:e(67294)},renderOpts:{compile:function(){var B=A()(a()().mark(function E(){var v,c=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(19).then(e.bind(e,4019));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,c));case 3:case"end":return i.stop()}},E)}));function g(){return B.apply(this,arguments)}return g}()}}}},97716:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(81233),l={}},79817:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(35412),g={"docs-hooks-use-in-view-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=u.sent,c=v.default,u.next=6,Promise.resolve().then(e.bind(e,55922));case 6:return p=u.sent,i=p.useInView,u.abrupt("return",{default:function(){var h=i(),y=A()(h,2),T=y[0],C=y[1];return c.createElement("div",null,c.createElement("div",null,C?"active":"inactive"),c.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},c.createElement("div",{ref:T},"12312312")))}});case 9:case"end":return u.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},59842:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(1019),g={"docs-hooks-use-infinite-scroll-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i,U,u,N;return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return N=function(C){var x=C.hasMore,S=C.loadMore,W=u(),V=A()(W,2),F=V[0],Y=V[1];return p(function(){Y&&x&&(S==null||S())},[x,Y,S]),c.createElement("div",{ref:F},x?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},y.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return v=y.sent,c=v.default,p=v.useEffect,y.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return i=y.sent,U=i.useInfiniteScroll,u=i.useInView,y.abrupt("return",{default:function(){var C=new Array(100).fill(1).map(function(F,Y){return Y}),x=U({dataSource:C,pageSize:10,delay:100}),S=x.data,W=x.hasMore,V=x.loadMore;return c.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},S==null?void 0:S.map(function(F){return c.createElement("span",null,F)}),c.createElement(N,{loadMore:V,hasMore:W}))}});case 12:case"end":return y.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},10610:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(65808),l={}},13917:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(44012),l={}},37868:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(74746),g={"docs-hooks-use-previous-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i,U,u;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=h.sent,c=v.default,p=v.useState,h.next=7,Promise.resolve().then(e.bind(e,55922));case 7:return i=h.sent,U=i.usePrevious,u=function(T){var C=U(T);return console.log(C,T),c.createElement("div",null,c.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(C==null?void 0:C.aa)||0," "),c.createElement("div",null,"\u5F53\u524D\u7684aa: ",T==null?void 0:T.aa))},h.abrupt("return",{default:function(){var T=p(1),C=A()(T,2),x=C[0],S=C[1];return c.createElement("div",null,c.createElement("button",{onClick:function(){return S(x+1)}},"+1"),c.createElement(u,{aa:x}))}});case 11:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},7411:function(f,n,e){e.r(n),e.d(n,{demos:function(){return g}});var m=e(15009),a=e.n(m),l=e(5574),A=e.n(l),O=e(99289),R=e.n(O),D=e(67294),B=e(81286),g={"docs-hooks-use-resize-observer-demo-0":{component:D.memo(D.lazy(R()(a()().mark(function E(){var v,c,p,i,U,u;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=h.sent,c=v.default,p=v.useRef,i=v.useState,h.next=8,Promise.resolve().then(e.bind(e,55922));case 8:return U=h.sent,u=U.useResizeObserver,h.abrupt("return",{default:function(){var T=p(null),C=i({width:0,height:0}),x=A()(C,2),S=x[0],W=x[1];return u(T,function(V){var F=A()(V,1),Y=F[0],Q=Y.contentRect,te=Q.width,ne=Q.height;W({width:te,height:ne})}),c.createElement("div",null,c.createElement("textarea",{ref:T,disabled:!0,style:{width:200,height:200},value:"width: ".concat(S.width,`
height: `).concat(S.height)}))}});case 11:case"end":return h.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(55922)},renderOpts:{compile:function(){var E=R()(a()().mark(function c(){var p,i=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,i));case 3:case"end":return u.stop()}},c)}));function v(){return E.apply(this,arguments)}return v}()}}}},91805:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(68145),l={}},9954:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(51530),l={}},11171:function(f,n,e){e.r(n),e.d(n,{demos:function(){return l}});var m=e(67294),a=e(68537),l={}},55922:function(f,n,e){e.r(n),e.d(n,{Rect:function(){return x},Stage:function(){return Te},useCookie:function(){return be},useCountDown:function(){return $e},useElementSize:function(){return Ge},useHtAxios:function(){return dt},useInView:function(){return vt},useInfiniteScroll:function(){return mt},usePrevious:function(){return ft},useResizeObserver:function(){return _e}});var m=e(97857),a=e.n(m),l=e(67294),A=e(72004),O=e.n(A),R=e(12444),D=e.n(R),B=e(31996),g=e.n(B),E=e(26037),v=e.n(E),c=e(9783),p=e.n(c),i={lineWidth:1,opacity:1,shadowBlur:0,shadowColor:"orange",shadowOffsetX:0,shadowOffsetY:0,lineCap:"butt",lineJoin:"miter",lineDash:[],pointerEvents:"all",zIndex:0},U=function(){function r(t,o,s){D()(this,r),p()(this,"type",void 0),p()(this,"stage",void 0),this.type=t,this.data=a()(a()(a()({},s),s),o)}return O()(r,[{key:"attr",value:function(){if(this.stage){for(var o,s=arguments.length,d=new Array(s),_=0;_<s;_++)d[_]=arguments[_];switch(d.length){case 1:{var P=d[0];this.data=a()(a()({},this.data),P);break}default:console.log("\u672A\u5B9E\u73B0\u7684\u53C2\u6570\u6570\u91CF");break}(o=this.stage)===null||o===void 0||o.renderStage()}}}]),r}(),u={cornerRadius:0,lineWidth:1},N=function(r){g()(o,r);var t=v()(o);function o(s){return D()(this,o),t.call(this,"Rect",s,u)}return O()(o)}(U),h=(0,l.createContext)({}),y=function(t,o,s){(0,l.useLayoutEffect)(function(){t[o]!==void 0&&s.attr(p()({},o,t[o]))},[t[o]])},T={x:0,y:0,width:100,height:100,fillStyle:"black"},C=function(t){var o=a()(a()({},T),t),s=(0,l.useContext)(h),d=new N(o),_=(0,l.useRef)(d);return console.log(o.fillStyle),y(o,"width",_.current),y(o,"height",_.current),y(o,"x",_.current),y(o,"y",_.current),y(o,"fillStyle",_.current),(0,l.useLayoutEffect)(function(){return s.appendChild(_.current),function(){}},[]),null},x=C,S=function(t){return t.toSorted(function(o,s){var d=o.data.zIndex,_=s.data.zIndex;return d-_})},W=window.devicePixelRatio,V=null,F=e(19632),Y=e.n(F),Q=function(t,o){return t>0&&t!==1/0&&o},te=function(t,o){o.data.fillStyle&&t.fill(o.path2D),Q(o.data.lineWidth,o.data.strokeStyle)&&t.stroke(o.path2D)};function ne(r,t){var o=t.data,s=o.lineWidth,d=o.lineCap,_=o.lineJoin,P=o.strokeStyle,I=o.fillStyle,M=o.opacity,j=o.shadowBlur,L=o.shadowColor,G=o.shadowOffsetX,H=o.shadowOffsetY,z=t.transform,b=t.scale,$=t.translate;r.lineWidth=s,r.lineCap=d,r.lineJoin=_,r.strokeStyle=P,r.fillStyle=I,r.globalAlpha=M,r.shadowOffsetX=G,r.shadowOffsetY=H,r.shadowColor=L,r.shadowBlur=j,z&&r.setTransform.apply(r,Y()(z)),b&&r.scale(b.x,b.y),$&&r.translate($.x,$.y)}var Ie=function(t){var o=t.x,s=t.y,d=t.width,_=t.height,P=t.cornerRadius,I=P===void 0?0:P,M=new Path2D;return M.moveTo(o+I,s),M.lineTo(o+d-I,s),M.arc(o+d-I,s+I,I,Math.PI/2*3,0),M.lineTo(o+d,s+_-I),M.arc(o+d-I,s+_-I,I,0,Math.PI/2),M.lineTo(o+I,s+_),M.arc(o+I,s+_-I,I,Math.PI/2,Math.PI),M.lineTo(o,s+I),M.arc(o+I,s+I,I,Math.PI,Math.PI/2*3),M.closePath(),console.log(M,"path2D"),M},Ee=function(t){t.path2D=Ie(t.data)};function Pe(r,t){var o=S(t);o.forEach(function(s){switch(console.log(s,"elementItem"),r.beginPath(),ne(r,s),s.type){case"Rect":{Ee(s),console.log(s,"elementItemelementItem"),te(r,s);break}default:console.log(s.type,"\u8BE5\u56FE\u5F62 \u6682\u672A\u5B9E\u73B0");break}})}function le(r,t){r.forEach(function(o){o.stage=t,o.children&&le(o.children,t)})}function Me(r){var t,o,s=r.ctx;s.clearRect(0,0,(t=r.canvasElement)===null||t===void 0?void 0:t.width,(o=r.canvasElement)===null||o===void 0?void 0:o.height),Pe(s,r.children)}var ye=function(t,o,s){var d=o*W,_=s*W;t.width=d,t.height=_,t.style.width="100%",t.style.height="100%"},De=function(t,o,s){ye(t,o,s);var d=t.getContext("2d");return d?(d.scale(W,W),d.textBaseline="top",d.font="".concat(14,"px \u5FAE\u8F6F\u96C5\u9ED1"),d):null},ge=function(t,o){var s=document.createElement("canvas"),d=De(s,t,o);return{canvasElement:s,ctx:d}},Oe=function(t){var o=t.offsetWidth,s=t.offsetHeight,d=ge(o,s),_=d.canvasElement,P=d.ctx;return t.append(_),{canvasElement:_,ctx:P}},ie=null,Pt=null,Ce=function(){for(var t;t=ie.shift();)t.cb()},oe=!0,Mt=function(t){var o={cb:t};ie.push(o),oe&&window.queueMicrotask(Ce),oe=!1},Ae=function(){oe=!0},xe=function(){function r(){D()(this,r),p()(this,"canvasElement",void 0),p()(this,"ctx",void 0),p()(this,"children",[]),p()(this,"isAsyncRenderTask",!1),this.canvasElement=null,this.ctx=null}return O()(r,[{key:"mount",value:function(o){var s=o.container,d=Oe(s);this.ctx=d==null?void 0:d.ctx,this.canvasElement=d==null?void 0:d.canvasElement,this.renderStage()}},{key:"appendChild",value:function(){for(var o=this,s=arguments.length,d=new Array(s),_=0;_<s;_++)d[_]=arguments[_];var P=d.flat(1);this.children=this.children.concat(P),this.children=this.children.map(function(I){return Object.assign(I,{parent:o})}),le(this.children,this)}},{key:"renderStage",value:function(){var o=this;this.isAsyncRenderTask||(this.isAsyncRenderTask=!0,requestAnimationFrame(function(){Ae(),Me(o),o.isAsyncRenderTask=!1}))}},{key:"addStageEventListener",value:function(){this.canvasElement&&(this.canvasElement.onmousemove=function(o){{var s={target:null,x:o.offsetX,y:o.offsetY,nativeEvent:o};console.log(s,"onmousemove_eventParameter")}})}}]),r}(),ce=e(85893),Re={width:"100%",height:400,background:"#fff",margin:"0 auto"},Ue=function(t){var o=(0,l.useRef)(null),s=(0,l.useRef)(new xe),d=a()(a()({},Re),t);return(0,l.useLayoutEffect)(function(){s.current.mount({container:o.current})},[]),(0,ce.jsxs)(h.Provider,{value:s.current,children:[(0,ce.jsx)("div",{ref:o,style:d}),t.children]})},Te=Ue,Le=e(5574),J=e.n(Le),ae={},q,Se=Object.prototype.toString;function Be(r){return typeof r=="function"}var yt=function(t){return typeof t!="undefined"};function Dt(r){return typeof r=="undefined"}var gt=function(t){return typeof t=="boolean"},Ot=function(t){return typeof t=="number"};function We(r){return typeof r=="string"}function Ct(r){return Se.call(r)==="[object Object]"}var At=null,me=typeof window!="undefined",xt=typeof navigator!="undefined";function Rt(){}var Ut=me&&((q=window)===null||q===void 0||(q=q.navigator)===null||q===void 0?void 0:q.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),Tt=!l.useId,w=e(31955);function je(r,t){return t!==void 0?t:me?w.Z.get(r):""}var Ke=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ae,s=arguments.length>2?arguments[2]:void 0,d=(0,l.useState)(je(t,s)),_=J()(d,2),P=_[0],I=_[1];(0,l.useEffect)(function(){var L=function(){var H=w.Z.get(t);return H!=null?H:(s===void 0?w.Z.remove(t):w.Z.set(t,s,o),s)};I(L())},[s,t,JSON.stringify(o)]);var M=(0,l.useCallback)(function(L){var G=Be(L)?L(P):L;G===void 0?w.Z.remove(t):w.Z.set(t,G,o),I(G)},[t,P,JSON.stringify(o)]),j=(0,l.useCallback)(function(){var L=w.Z.get(t);We(L)&&I(L)},[t]);return[P,M,j]},be=Ke,ze=function(){var t=(0,l.useState)(0),o=J()(t,2),s=o[0],d=o[1],_,P=function(){clearTimeout(_)},I=function(j){P(),d(j||function(L){return L-1})};return(0,l.useEffect)(function(){return _=setTimeout(function(){s>0?d(function(M){return M-1}):P()},1e3),function(){return P()}},[s]),[s,I,P]},$e=ze,Ne=function(t,o){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ae;(0,l.useEffect)(function(){var d=new ResizeObserver(o);return t!=null&&t.current&&d.observe(t.current,s),function(){t!=null&&t.current&&d.unobserve(t.current),d.disconnect()}},[])},_e=Ne,Ve=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ae,s=(0,l.useState)({width:0,height:0}),d=J()(s,2),_=d[0],P=d[1];return _e(t,function(I){if(I.length!==0){var M=J()(I,1),j=M[0],L=j.contentRect,G=L.width,H=L.height;P({width:G,height:H})}},o),_},Ge=Ve,ve=e(54683),He=e(5332),Ze="application/json;charset=utf-8",Lt="application/x-www-form-urlencoded",St={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":Ze,Accept:"application/json;version=3.0;compress=false;"},Fe=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},Ye=e(54998),Xe=e.n(Ye),Je=e(49360),Qe=e(58146),we=e(73505),ke=e(27771),qe=e(77226),et=e(36378),se=function r(t){if((0,Je.Z)(t)||(0,Qe.Z)(t)||(0,we.Z)(t))return t;if((0,ke.Z)(t))return t.map(function(s){return r(s)});if((0,qe.Z)(t)){var o=Object.create(null);return Object.keys(t).forEach(function(s){o[s]=r(t[s])}),o}else return(0,et.Z)(t)?t.trim():t};function Bt(){return typeof window=="undefined"?!1:window&&window.__debug__}function Wt(r){var t=atob(r);return Uint8Array.from(t,function(o){return o.codePointAt(0)})}function jt(r){var t=Array.from(r,function(o){return String.fromCodePoint(o)}).join("");return btoa(t)}var tt=ve.Z.CancelToken.source(),nt=function(t){t.cancelToken=tt.token;var o=Xe()(t.url);if(t.url=o.query(se(o.query(!0))||{}).toString(),t.data&&(t.data=se(t.data)),t.params=se(t.params||{}),t.cache&&(t.params=t.params||{},t.params.__cache__=Math.random()),t.filter){var s=t.data,d=s===void 0?{}:s;for(var _ in d)if(d.hasOwnProperty(_)){var P=d[_];P==null&&delete d[_]}}return t.method==="get"&&t.data&&(t.params=t.data,delete t.data),t},ot=function(t,o){o&&t.interceptors.request.use(function(s){return o(s)},function(s){return Promise.reject(s)}),t.interceptors.request.use(function(s){return nt(s)},function(s){return Promise.reject(s)})},at=function(t){var o,s=t.data;try{if(s instanceof Blob){var d=t.headers["content-disposition"],_=d.split("filename=")[1];return{success:!0,data:{file:s,fileName:_}}}}catch(P){console.error(P)}return((o=t.headers)===null||o===void 0?void 0:o["content-type"].indexOf("application/json"))<0,s},st=function(t){var o="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!t.__CANCEL__){if(t){if(t.response&&t.response.data){var s=t.response.data.errors,d=s===void 0?[]:s,_=d&&d[0]||{};return Promise.reject({message:_.message||t.message||o,arguments:_.arguments||void 0,code:_.code||null})}return Promise.reject({message:t.message||o,arguments:void 0,code:null})}return Promise.reject({message:o,arguments:void 0,code:null})}},rt=function(t,o,s){o&&t.interceptors.response.use(function(d){return o(d)},function(d){return Promise.reject(d)}),o&&t.interceptors.response.use(function(d){return d},s),t.interceptors.response.use(at,st)},ut=function(t){var o=t.config,s=o===void 0?{}:o,d=t.requestInterceptorsCallback,_=t.responseInterceptorOnSuccessCallback,P=t.responseInterceptorOnErrorCallback,I=(0,He.Z)(Fe(),s),M=ve.Z.create(I);ot(M,d),rt(M,_,P);function j(z,b,$){return M.request(a()({url:z,params:b},$))}function L(z,b,$){return M.request(a()({url:z,method:"post",params:b},$))}function G(z,b,$){return M.request(a()({url:z,method:"put",params:b},$))}function H(z,b,$){return M.request(a()({url:z,method:"delete",params:b},$))}return{get:j,post:L,del:H,put:G}},dt=ut,lt=e(15009),pe=e.n(lt),it=e(99289),ct=e.n(it);function mt(r){var t=r.dataSource,o=r.delay,s=o===void 0?100:o,d=r.pageSize,_=d===void 0?10:d,P=r.fetchData,I=(0,l.useState)(!1),M=J()(I,2),j=M[0],L=M[1],G=(0,l.useState)(!0),H=J()(G,2),z=H[0],b=H[1],$=(0,l.useState)([]),fe=J()($,2),K=fe[0],re=fe[1];function ht(){return ue.apply(this,arguments)}function ue(){return ue=ct()(pe()().mark(function It(){return pe()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(!(!(t!=null&&t.length)&&!P)){Z.next=2;break}return Z.abrupt("return");case 2:if(!(!z||j)){Z.next=4;break}return Z.abrupt("return");case 4:if(L(!0),!t){Z.next=10;break}return Z.next=8,new Promise(function(X){setTimeout(function(){X(t==null?void 0:t.slice(K.length,K.length+_))},s)}).then(function(X){b((K==null?void 0:K.length)+(X==null?void 0:X.length)<(t==null?void 0:t.length)),re(function(ee){return ee==null?void 0:ee.concat(X)})});case 8:Z.next=12;break;case 10:return Z.next=12,P==null?void 0:P({pageNum:K!=null&&K.length?Math.ceil((K==null?void 0:K.length)/_)+1:1,pageSize:_}).then(function(X){var ee=X.list,k=ee===void 0?[]:ee,he=X.total,Et=he===void 0?0:he;b((K==null?void 0:K.length)+(k==null?void 0:k.length)<Et&&(k==null?void 0:k.length)>0),re(function(de){return de==null?void 0:de.concat(k)})});case 12:L(!1);case 13:case"end":return Z.stop()}},It)})),ue.apply(this,arguments)}return{data:K,setData:re,loading:j,hasMore:z,loadMore:ht}}var _t=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=(0,l.useState)(!1),d=J()(s,2),_=d[0],P=d[1],I=(0,l.useRef)(null);return(0,l.useEffect)(function(){var M=new IntersectionObserver(function(j){j.forEach(function(L){L.isIntersecting?(P(!0),o&&M.unobserve(L.target)):P(!1)})},t);return I!=null&&I.current&&M.observe(I.current),function(){I!=null&&I.current&&M.unobserve(I.current)}},[t,o]),[I,_]},vt=_t,pt=function(t){var o=(0,l.useRef)({});return(0,l.useLayoutEffect)(function(){o.current=t}),(0,l.useLayoutEffect)(function(){return function(){o.current={}}},[]),o.current},ft=pt},48977:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(54197);const a=[]},12477:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(89131);const a=[]},25924:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(18283);const a=[]},85135:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(28561);const a=[]},53568:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(8297);const a=[]},9978:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(26211);const a=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(29876);const a=[]},18632:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(72155);const a=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},30223:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(64577);const a=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},28355:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(28587);const a=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},6575:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(56139);const a=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},57529:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(22956);const a=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},51794:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(38668);const a=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(81233);const a=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},87553:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(35412);const a=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(1019);const a=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},20834:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(65808);const a=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51331:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(44012);const a=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"name",paraId:1,tocIndex:4},{value:"description",paraId:1,tocIndex:4},{value:"type",paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4}]},19905:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(74746);const a=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},49811:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(81286);const a=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},69853:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(68145);const a=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},85854:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(51530);const a=[{value:"\u83B7\u53D6window\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(f,n,e){e.r(n),e.d(n,{texts:function(){return a}});var m=e(68537);const a=[]},74534:function(f,n){n.Z=`import { Stage } from 'heitu';
import React from 'react';

const Index = () => {
  return (
    <div>
      <Stage></Stage>
    </div>
  );
};

export default Index;
`},77217:function(f,n){n.Z=`import { Rect, Stage } from 'heitu';
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
