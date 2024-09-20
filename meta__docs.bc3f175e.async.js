"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{81222:function(P,u,e){e.r(u),e.d(u,{demos:function(){return U}});var g=e(17061),l=e.n(g),D=e(17156),O=e.n(D),B=e(67294),h=e(54197),U={"docs-canvas-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var M,E,m,r,I,c,y,d;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,58708));case 2:return M=C.sent,E=M.Custom,m=M.Stage,r=M.useResizeObserver,C.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=C.sent,c=I.default,y=I.useLayoutEffect,d=I.useRef,C.abrupt("return",{default:function(){var W=d(null),L=new m,T=new Path2D;T.moveTo(200,240),T.bezierCurveTo(200,200,120,150,120,200),T.bezierCurveTo(120,280,200,300,200,340),T.bezierCurveTo(200,300,280,280,280,200),T.bezierCurveTo(280,150,200,200,200,240);var K=new E({path2D:T,fillStyle:"pink",strokeStyle:"red"});return L.add(K),y(function(){L.buildContentDOM({container:W.current,backgroundColor:"#fff"})},[]),r(W,function(){return L._resizeDOM()}),c.createElement(c.Fragment,null,c.createElement("div",{ref:W}))}});case 13:case"end":return C.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-canvas-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(58708),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}}}},67023:function(P,u,e){e.r(u),e.d(u,{demos:function(){return U}});var g=e(17061),l=e.n(g),D=e(17156),O=e.n(D),B=e(67294),h=e(18283),U={"docs-canvas-stage-demo-stagedemo1":{component:B.memo(B.lazy(function(){return e.e(433).then(e.bind(e,18039))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66969).Z},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(58708),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}},"docs-canvas-stage-demo-stagedemo":{component:B.memo(B.lazy(function(){return e.e(433).then(e.bind(e,59198))})),asset:{type:"BLOCK",id:"docs-canvas-stage-demo-stagedemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78890).Z},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(58708),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}}}},66940:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(97452),D={}},44401:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(26211),D={}},97086:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(29876),D={}},75326:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(72155),D={}},31701:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(64577),M={"docs-hooks-use-cookie-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=d.sent,r=m.default,d.next=6,Promise.resolve().then(e.bind(e,58708));case 6:return I=d.sent,c=I.useCookie,d.abrupt("return",{default:function(){var C={path:"/"},R="cookie-key",W=c(R,C,"default-value"),L=O()(W,3),T=L[0],K=L[1],H=L[2],J=function(){K("new-cookie-value")},G=function(){K(void 0)},V=function(){if("cookieStore"in window){var b=window.cookieStore;b.set({name:R,value:"changed"})}else document.cookie="".concat(R,"=changed; path=/")};return r.createElement("div",null,r.createElement("p",null,"Click on the button to update or clear the cookie"),r.createElement("p",{color:"blue"},"cookie: ",T||"no value"),r.createElement("button",{onClick:J},"Update the cookie"),r.createElement("button",{onClick:G},"Clear the cookie"),r.createElement("button",{onClick:V},"Changing the cookie through other methods"),r.createElement("button",{onClick:H},"Refresh the cookie"))}});case 9:case"end":return d.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-cookie-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},67731:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(28587),M={"docs-hooks-use-count-down-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=d.sent,r=m.default,d.next=6,Promise.resolve().then(e.bind(e,58708));case 6:return I=d.sent,c=I.useCountDown,d.abrupt("return",{default:function(){var C=c(),R=O()(C,3),W=R[0],L=R[1],T=R[2];return r.createElement("div",null,W,r.createElement("button",{onClick:function(){L(60)}},"\u5F00\u59CB"),r.createElement("button",{onClick:function(){T()}},"\u6682\u505C"),r.createElement("button",{onClick:function(){L()}},"\u7EE7\u7EED"))}});case 9:case"end":return d.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-count-down-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},65585:function(P,u,e){e.r(u),e.d(u,{demos:function(){return U}});var g=e(17061),l=e.n(g),D=e(17156),O=e.n(D),B=e(67294),h=e(56139),U={"docs-hooks-use-element-size-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var M,E,m,r,I,c;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=d.sent,E=M.default,m=M.useRef,r=M.useEffect,d.next=8,Promise.resolve().then(e.bind(e,58708));case 8:return I=d.sent,c=I.useElementSize,d.abrupt("return",{default:function(){var C=m(null),R=c(C);return r(function(){console.log(C.current.mount)},[]),E.createElement("div",null,E.createElement("textarea",{ref:C,disabled:!0,style:{width:200,height:200},value:"width: ".concat(R.width,`
height: `).concat(R.height)}))}});case 11:case"end":return d.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-element-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}}}},23897:function(P,u,e){e.r(u),e.d(u,{demos:function(){return U}});var g=e(17061),l=e.n(g),D=e(17156),O=e.n(D),B=e(67294),h=e(38668),U={"docs-hooks-use-ht-axios-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var M,E,m,r;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,58708));case 2:return M=c.sent,E=M.useHtAxios,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=c.sent,r=m.default,c.abrupt("return",{default:function(){var d=E({config:{timeout:3e3},requestInterceptorsCallBack:function(R){return R},responseInterceptorsCallBack:function(R){return R.data}}),j=function(){var C=O()(l()().mark(function R(){var W;return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,d.get("http://jsonplaceholder.typicode.com/posts",{aa:"23123"});case 2:W=T.sent,console.log(W);case 4:case"end":return T.stop()}},R)}));return function(){return C.apply(this,arguments)}}();return r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},r.createElement("button",{type:"button",style:{width:"50px"},onClick:function(){j()}},"123"))}});case 9:case"end":return c.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-ht-axios-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHtAxios } from 'heitu';
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
};`},heitu:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{heitu:e(58708),react:e(67294)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}}}},97716:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(81233),M={"docs-hooks-use-image-load-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=d.sent,r=m.default,d.next=6,Promise.resolve().then(e.bind(e,58708));case 6:return I=d.sent,c=I.useImageLoad,d.abrupt("return",{default:function(){var C=["https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png","http://www.jsti.com/uploadfile/2020/0727/20200727051250381.jpg","http://whhysz.com/upload/20210507/6094e47dce9c1.jpg"],R=c({imgList:C}),W=O()(R,3),L=W[0],T=W[1],K=W[2];return r.createElement("div",{style:{display:"flex"}},r.createElement("div",null,r.createElement("div",null,"img"),r.createElement("img",{src:L,style:{width:200}})),r.createElement("div",null,r.createElement("div",null,"ftimgList"),T==null?void 0:T.map(function(H,J){return r.createElement("img",{src:H,key:J,style:{width:200}})})),r.createElement("div",null,r.createElement("div",null,"allowImgList"),K==null?void 0:K.map(function(H,J){return r.createElement("img",{src:H,key:J,style:{width:200}})})))}});case 9:case"end":return d.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-image-load-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useImageLoad } from 'heitu';

export default () => {
  const list = [
    'https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png',
    'http://www.jsti.com/uploadfile/2020/0727/20200727051250381.jpg',
    'http://whhysz.com/upload/20210507/6094e47dce9c1.jpg',
  ];
  const [img, ftimgList, allowImgList] = useImageLoad({ imgList: list });
  return (
    <div style={{ display: 'flex' }}>
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
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},79817:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(35412),M={"docs-hooks-use-in-view-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=d.sent,r=m.default,d.next=6,Promise.resolve().then(e.bind(e,58708));case 6:return I=d.sent,c=I.useInView,d.abrupt("return",{default:function(){var C=c(),R=O()(C,2),W=R[0],L=R[1];return r.createElement("div",null,r.createElement("div",null,L?"active":"inactive"),r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},r.createElement("div",{ref:W},"12312312")))}});case 9:case"end":return d.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},59842:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(1019),M={"docs-hooks-use-infinite-scroll-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c,y,d,j;return l()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return j=function(L){var T=L.hasMore,K=L.loadMore,H=d(),J=O()(H,2),G=J[0],V=J[1];return I(function(){V&&T&&(K==null||K())},[T,V,K]),r.createElement("div",{ref:G},T?"\u52A0\u8F7D\u4E2D...":"\u6CA1\u6709\u66F4\u591A\u4E86~")},R.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return m=R.sent,r=m.default,I=m.useEffect,R.next=8,Promise.resolve().then(e.bind(e,58708));case 8:return c=R.sent,y=c.useInfiniteScroll,d=c.useInView,R.abrupt("return",{default:function(){var L=new Array(100).fill(1).map(function(G,V){return V}),T=y({dataSource:L,pageSize:10,delay:100}),K=T.data,H=T.hasMore,J=T.loadMore;return r.createElement("div",{style:{display:"flex",flexDirection:"column",height:"400px",overflowY:"auto"}},K==null?void 0:K.map(function(G){return r.createElement("span",null,G)}),r.createElement(j,{loadMore:J,hasMore:H}))}});case 12:case"end":return R.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-infinite-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},10610:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(65808),D={}},13917:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(44012),D={}},37868:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(74746),M={"docs-hooks-use-previous-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c,y,d;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=C.sent,r=m.default,I=m.useState,C.next=7,Promise.resolve().then(e.bind(e,58708));case 7:return c=C.sent,y=c.usePrevious,d=function(W){var L=y(W);return console.log(L,W),r.createElement("div",null,r.createElement("div",null,"\u524D\u4E00\u4E2Aaa: ",(L==null?void 0:L.aa)||0," "),r.createElement("div",null,"\u5F53\u524D\u7684aa: ",W==null?void 0:W.aa))},C.abrupt("return",{default:function(){var W=I(1),L=O()(W,2),T=L[0],K=L[1];return r.createElement("div",null,r.createElement("button",{onClick:function(){return K(T+1)}},"+1"),r.createElement(d,{aa:T}))}});case 11:case"end":return C.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-previous-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},7411:function(P,u,e){e.r(u),e.d(u,{demos:function(){return M}});var g=e(17061),l=e.n(g),D=e(27424),O=e.n(D),B=e(17156),h=e.n(B),U=e(67294),w=e(81286),M={"docs-hooks-use-resize-observer-demo-0":{component:U.memo(U.lazy(h()(l()().mark(function E(){var m,r,I,c,y,d;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=C.sent,r=m.default,I=m.useRef,c=m.useState,C.next=8,Promise.resolve().then(e.bind(e,58708));case 8:return y=C.sent,d=y.useResizeObserver,C.abrupt("return",{default:function(){var W=I(null),L=c({width:0,height:0}),T=O()(L,2),K=T[0],H=T[1];return d(W,function(J){var G=O()(J,1),V=G[0],oe=V.contentRect,b=oe.width,he=oe.height;H({width:b,height:he})}),r.createElement("div",null,r.createElement("textarea",{ref:W,disabled:!0,style:{width:200,height:200},value:"width: ".concat(K.width,`
height: `).concat(K.height)}))}});case 11:case"end":return C.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-hooks-use-resize-observer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect, useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(67294),heitu:e(58708)},renderOpts:{compile:function(){var E=h()(l()().mark(function r(){var I,c=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(19).then(e.bind(e,4019));case 2:return d.abrupt("return",(I=d.sent).default.apply(I,c));case 3:case"end":return d.stop()}},r)}));function m(){return E.apply(this,arguments)}return m}()}}}},91805:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(68145),D={}},9954:function(P,u,e){e.r(u),e.d(u,{demos:function(){return U}});var g=e(17061),l=e.n(g),D=e(17156),O=e.n(D),B=e(67294),h=e(51530),U={"docs-hooks-use-window-size-demo-0":{component:B.memo(B.lazy(O()(l()().mark(function w(){var M,E,m;return l()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,58708));case 2:return M=I.sent,E=M.useWindowSize,m=function(){var y=E(),d=y.width,j=y.height;return B.createElement("div",null,B.createElement("p",null,"width: ",d,", height: ",j))},I.abrupt("return",{default:m});case 6:case"end":return I.stop()}},w)})))),asset:{type:"BLOCK",id:"docs-hooks-use-window-size-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useWindowSize } from 'heitu';
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
export default Index`},heitu:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{heitu:e(58708)},renderOpts:{compile:function(){var w=O()(l()().mark(function E(){var m,r=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,r));case 3:case"end":return c.stop()}},E)}));function M(){return w.apply(this,arguments)}return M}()}}}},11171:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(68537),D={}},6202:function(P,u,e){e.r(u),e.d(u,{demos:function(){return D}});var g=e(67294),l=e(79930),D={}},58708:function(P,u,e){e.r(u),e.d(u,{Circle:function(){return De},Custom:function(){return xe},Line:function(){return Ae},LineChart:function(){return Nt},Rect:function(){return V},Stage:function(){return Ie},Text:function(){return J},useCookie:function(){return Xe},useCountDown:function(){return Ve},useElementSize:function(){return tt},useHtAxios:function(){return yt},useImageLoad:function(){return wt},useInView:function(){return Mt},useInfiniteScroll:function(){return Pt},usePrevious:function(){return Rt},useResizeObserver:function(){return Ee},useWindowSize:function(){return Lt}});var g=e(56690),l=e.n(g),D=e(89728),O=e.n(D),B=e(66115),h=e.n(B),U=e(61655),w=e.n(U),M=e(26389),E=e.n(M),m=e(38416),r=e.n(m),I=e(861),c=e.n(I),y=window.devicePixelRatio,d=function(){},j=function(a){return a.name==="Stage"},C=function(a,i){return Array.from(new Map([].concat(_toConsumableArray(a),_toConsumableArray(i)).map(function(n){return[n.name,n]})).values())},R=function(a,i,n){return n!=null&&n.x&&n!==null&&n!==void 0&&n.width&&n.y&&n!==null&&n!==void 0&&n.height?a>(n==null?void 0:n.x)*y&&a<(((n==null?void 0:n.x)||0)+((n==null?void 0:n.width)||0))*y&&i>(n==null?void 0:n.y)*y&&i<n.y*y+n.height*y:!1},W=function(a){var i=a.mouseX,n=a.mouseY,t=a.path2D,s=a.ctx;return t&&s&&(s==null?void 0:s.isPointInPath(t,i,n))},L=e(30954),T=function(){function f(){l()(this,f),r()(this,"eventListeners",{}),r()(this,"shapeEventListeners",{})}return O()(f,[{key:"on",value:function(i,n){var t=i.split(" "),s=t.length,o,v,p,A;for(o=0;o<s;o++)v=t[o],p=v.split("."),A=p[0],this.eventListeners[A]||(this.eventListeners[A]=[]),this.eventListeners[A].push({name:n.name||"",handler:n}),this!==null&&this!==void 0&&this.parent&&j(this===null||this===void 0?void 0:this.parent)&&(this!==null&&this!==void 0&&this.parent.shapeEventListeners[A]||(this.parent.shapeEventListeners[A]=[]),this.parent.shapeEventListeners[A].push({name:n.name||"",handler:n}));return this}},{key:"_off",value:function(i,n,t){var s=this.eventListeners[i],o,v,p;for(o=0;o<s.length;o++)if(v=s[o].name,p=s[o].handler,(!n||v===n)&&(!t||t===p)){if(s.splice(o,1),s.length===0){delete this.eventListeners[i];break}o--}}},{key:"off",value:function(i,n){var t=(i||"").split(" "),s=t.length,o,v,p,A,_,x;for(o=0;o<s;o++)if(p=t[o],A=p.split("."),_=A[0],x=A[1],_)this.eventListeners[_]&&this._off(_,x,n);else for(v in this.eventListeners)this._off(v,x,n);return this}},{key:"_fire",value:function(i,n,t){j(t)?this.eventListeners[i].forEach(function(s){s.handler(n)}):this.shapeEventListeners[i].forEach(function(s){s.handler(n)})}},{key:"fire",value:function(i,n){var t=n.evt,s=n.target,o=n.currentTarget;if(j(o)){(!this.eventListeners[i]||this.eventListeners[i].length<1)&&(this.eventListeners[i]=[]),this._fire(i,t,o);for(var v=s==null?void 0:s.children,p=0;p<v.length;p++){(!this.shapeEventListeners[i]||this.shapeEventListeners[i].length<1)&&(this.shapeEventListeners[i]=[]);var A=c()(this.children.filter(function($){return $.draggable}));if(i==="mousedown"){var _=A.filter(function($){var Y;return $==null?void 0:$.inScope(t,(Y=s.canvas)===null||Y===void 0?void 0:Y.context)}),x=_.sort(function($,Y){return Y.index-$.index})[0];x&&(x.dragging=!0,x.offsetX=x!=null&&x.x?t.offsetX-(x==null?void 0:x.x):t.offsetX,x.offsetY=x!=null&&x.y?t.offsetY-(x==null?void 0:x.y):t.offsetY)}this.fire(i,{evt:t,target:s,currentTarget:v[p]})}}else{var z;if(o!=null&&o.draggable&&i==="mouseup"&&(o.dragging=!1),o!=null&&o.draggable&&o.dragging&&i==="mousemove"){var N,S=(N=this.canvas)===null||N===void 0||(N=N.canvas)===null||N===void 0?void 0:N.getBoundingClientRect();if(o.name==="Text"){var F=S!=null&&S.left?t.clientX-(S==null?void 0:S.left):t.clientX,te=S!=null&&S.top?t.clientY-(S==null?void 0:S.top):t.clientY;o.x=o!=null&&o.offsetX?F-(o==null?void 0:o.offsetX):F,o.y=o!=null&&o.offsetY?te-(o==null?void 0:o.offsetY):te}else{var Q=S!=null&&S.left?t.clientX-(S==null?void 0:S.left):t.clientX,q=S!=null&&S.top?t.clientY-(S==null?void 0:S.top):t.clientY;o.x=o!=null&&o.offsetX?Q-(o==null?void 0:o.offsetX):Q,o.y=o!=null&&o.offsetY?q-(o==null?void 0:o.offsetY):q}this.batchDraw(this)}if(o!=null&&o.inScope&&(z=s.canvas)!==null&&z!==void 0&&z.context){var ne;if(o!=null&&o.inScope(t,(ne=s.canvas)===null||ne===void 0?void 0:ne.context)){var Z;i!=="mouseenter"&&i!=="mouseleave"&&i!=="mouseout"&&i!=="mouseover"&&this._fire(i,t,o),i==="mousemove"&&!o.mouseInScope&&((Z=s.shapeEventListeners.mouseenter)===null||Z===void 0?void 0:Z.length)>0&&(o.mouseInScope=!0,s._fire("mouseenter",t,o))}else if(i==="mousemove"){var X;o.mouseInScope=!1,((X=s.shapeEventListeners.mouseleave)===null||X===void 0?void 0:X.length)>0&&s._fire("mouseleave",t,o)}}}}}]),f}(),K=T,H=function(f){w()(i,f);var a=E()(i);function i(n){var t;if(l()(this,i),t=a.call(this),r()(h()(t),"name","Text"),r()(h()(t),"parent",null),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"content",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"fontFamily",void 0),r()(h()(t),"fontSize",void 0),r()(h()(t),"textAlign",void 0),r()(h()(t),"textBaseline",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"index",0),t.content="",!n.content&&!t.content)throw new Error("Text must has content");return t.fontFamily="\u5FAE\u8F6F\u96C5\u9ED1",t.fillStyle="#333",t.fontSize=14,t.textAlign="left",t.textBaseline="top",t.x=100,t.y=100,(0,L.Z)(n,function(s,o){s&&(h()(t)[o]=s)}),t}return O()(i,[{key:"draw",value:function(t){t.font="".concat(this.fontSize,"px ").concat(this.fontFamily),t.textBaseline=this.textBaseline,t.textAlign=this.textAlign,t.fillStyle=this.fillStyle,t.fillText(this.content,this.x,this.y);var s=t.measureText(this.content);return this.width=s.width,this.height=this.fontSize,this}},{key:"inScope",value:function(t){var s=t.offsetX*y,o=t.offsetY*y;return R(s,o,this)}}]),i}(K),J=H,G=function(f){w()(i,f);var a=E()(i);function i(n){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Rect"),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),t.x=100,t.y=100,t.width=100,t.height=100,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=null,t.path2D=null,t.index=0,(0,L.Z)(n,function(s,o){s&&(h()(t)[o]=s)}),t}return O()(i,[{key:"draw",value:function(t){var s=new Path2D;return s.moveTo(this.x,this.y),s.lineTo(this.x+this.width,this.y),s.lineTo(this.x+this.width,this.y+this.height),s.lineTo(this.x,this.y+this.height),s.closePath(),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(s),this.fillStyle&&t.fill(s),this.path2D=s,this}},{key:"inScope",value:function(t,s){var o=t.offsetX*y,v=t.offsetY*y;return this!==null&&this!==void 0&&this.path2D?W({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),V=G,oe=e(27424),b=e.n(oe),he=function(f){w()(i,f);var a=E()(i);function i(n){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Line"),r()(h()(t),"start",void 0),r()(h()(t),"end",void 0),r()(h()(t),"points",void 0),r()(h()(t),"smooth",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"lineCap",void 0),r()(h()(t),"lineJoin",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),t.start={x:10,y:10},t.end={x:100,y:100},t.points=[],t.strokeStyle="black",t.lineWidth=1,t.lineCap="butt",t.lineJoin="miter",t.smooth=!1,t.index=0,t.path2D=null,(0,L.Z)(n,function(s,o){s&&(h()(t)[o]=s)}),t}return O()(i,[{key:"convertToNormalPoints",value:function(t){return t.reduce(function(s,o,v){var p=Math.floor(v/2);return v%2===0?s.push([o]):s[p].push(o),s},[]).map(function(s){var o=b()(s,2),v=o[0],p=o[1];return{x:v,y:p}})}},{key:"calcSmoothPath2D",value:function(){var t,s,o,v=new Path2D;return v.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0),v.moveTo(this.start.x,(o=this.start)===null||o===void 0?void 0:o.y),this.points.length===2&&v.quadraticCurveTo(this.points[0],this.points[1],this.end.x,this.end.y),this.points.length===4&&v.bezierCurveTo(this.points[0],this.points[1],this.points[2],this.points[3],this.end.x,this.end.y),this.path2D=v,v}},{key:"calcStraightPath2D",value:function(){var t,s,o,v,p=new Path2D;p.moveTo(((t=this.start)===null||t===void 0?void 0:t.x)||0,((s=this.start)===null||s===void 0?void 0:s.y)||0);var A=this.convertToNormalPoints([].concat(c()(this.points),[(o=this.end)===null||o===void 0?void 0:o.x,(v=this.end)===null||v===void 0?void 0:v.y]));return A.forEach(function(_){var x=_.x,z=_.y;p.lineTo(x,z)}),p}},{key:"draw",value:function(t){var s=this.smooth?this.calcSmoothPath2D():this.calcStraightPath2D();return this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(s),this}},{key:"inScope",value:function(t,s){var o=t.offsetX*y,v=t.offsetY*y;return this!==null&&this!==void 0&&this.path2D?W({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),Ae=he,Ce=function(f){w()(i,f);var a=E()(i);function i(n){var t;if(l()(this,i),t=a.call(this),r()(h()(t),"name","Custom"),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"width",void 0),r()(h()(t),"height",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"parent",null),!n.path2D)throw new Error("Mast has key of path2D");return t.x=100,t.y=100,t.width=0,t.height=0,t.fillStyle=null,t.strokeStyle=null,t.lineWidth=1,t.path2D=null,t.index=0,(0,L.Z)(n,function(s,o){s&&(h()(t)[o]=s)}),t}return O()(i,[{key:"draw",value:function(t){if(this.path2D)return this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),this.lineWidth&&t.stroke(this.path2D),this.fillStyle&&t.fill(this.path2D),this}},{key:"inScope",value:function(t,s){var o=t.offsetX*y,v=t.offsetY*y;return this!==null&&this!==void 0&&this.path2D?W({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),xe=Ce,Pe=function(f){w()(i,f);var a=E()(i);function i(n){var t;return l()(this,i),t=a.call(this),r()(h()(t),"name","Circle"),r()(h()(t),"parent",null),r()(h()(t),"x",void 0),r()(h()(t),"y",void 0),r()(h()(t),"radius",void 0),r()(h()(t),"lineWidth",void 0),r()(h()(t),"fillStyle",void 0),r()(h()(t),"strokeStyle",void 0),r()(h()(t),"arc",void 0),r()(h()(t),"startAngle",void 0),r()(h()(t),"endAngle",void 0),r()(h()(t),"innerRadius",void 0),r()(h()(t),"index",void 0),r()(h()(t),"path2D",void 0),r()(h()(t),"border",void 0),t.x=10,t.y=10,t.radius=8,t.fillStyle="",t.strokeStyle="",t.lineWidth=1,t.startAngle=0,t.endAngle=360,t.border=0,t.innerRadius=0,t.arc=!1,t.index=0,t.path2D=null,(0,L.Z)(n,function(s,o){s&&(h()(t)[o]=s)}),t}return O()(i,[{key:"deg2rad",value:function(t){return t*Math.PI/180}},{key:"getPointOnArc",value:function(t,s,o,v){var p=this.deg2rad(v),A=t+o*Math.cos(p),_=s+o*Math.sin(p);return{x:A,y:_}}},{key:"calcWholeRingD",value:function(){var t=this.x-this.radius,s="M ".concat(this.x," ").concat(t),o="A ".concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-.01," ").concat(t),v=this.y-this.innerRadius,p="M ".concat(this.x," ").concat(v),A="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 1 0 ").concat(this.x+.01," ").concat(v);return"".concat(s," ").concat(o," ").concat(p," ").concat(A," Z")}},{key:"calcRingSectorD",value:function(){var t=this.getPointOnArc(this.x,this.y,this.radius,this.startAngle),s=this.getPointOnArc(this.x,this.y,this.radius,this.endAngle),o=this.endAngle-this.startAngle>=180?1:0,v="M ".concat(t.x," ").concat(t.y),p="A ".concat(this.radius," ").concat(this.radius," 0 ").concat(o," 1 ").concat(s.x," ").concat(s.y),A=this.getPointOnArc(this.x,this.y,this.innerRadius,this.startAngle),_=this.getPointOnArc(this.x,this.y,this.innerRadius,this.endAngle),x="L".concat(_.x," ").concat(_.y),z="A ".concat(this.innerRadius," ").concat(this.innerRadius," 0 ").concat(o," 0 ").concat(A.x," ").concat(A.y);return"".concat(v," ").concat(p," ").concat(x," ").concat(z," Z")}},{key:"calcRingD",value:function(t){return t?this.calcWholeRingD():this.calcRingSectorD()}},{key:"draw",value:function(t){var s=this.startAngle===0&&this.endAngle===360,o;switch(this.border){case 0:return o=new Path2D(this.calcRingD(s)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.fillStyle&&(t.strokeStyle=this.fillStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(o),t.fill(o),this.path2D=o,o;case 1:return o=new Path2D(this.calcRingD(s)),t.lineWidth=this.lineWidth,this.strokeStyle&&(t.strokeStyle=this.strokeStyle),t.stroke(o),this.path2D=o,o;case 2:return o=new Path2D(this.calcRingD(s)),this.fillStyle&&(t.fillStyle=this.fillStyle),this.strokeStyle&&(t.strokeStyle=this.strokeStyle),this.lineWidth&&(t.lineWidth=this.lineWidth),t.stroke(o),t.fill(o),this.path2D=o,o}}},{key:"inScope",value:function(t,s){var o=t.offsetX*y,v=t.offsetY*y;return this!==null&&this!==void 0&&this.path2D?W({mouseX:o,mouseY:v,path2D:this===null||this===void 0?void 0:this.path2D,ctx:s||void 0}):!1}}]),i}(K),De=Pe,de=null,Me=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame||function(f){setTimeout(f,60)},Oe=function(){var a=document.createElement("canvas");try{a.style=a.style||{}}catch(i){}return a},Yt=function(a){de.push(a),de.length===1&&Me(function(){var i=de;de=[],i.forEach(function(n){n()})})},Re=function(){function f(){l()(this,f),r()(this,"canvas",void 0),r()(this,"context",void 0),r()(this,"width",0),r()(this,"height",0),this.canvas=Oe(),this.canvas.style.padding="0",this.canvas.style.margin="0",this.canvas.style.border="0",this.canvas.style.background="transparent",this.context=this.canvas.getContext("2d")}return O()(f,[{key:"setWidth",value:function(i){this.width=this.canvas.width=i*y,this.canvas.style.width=i+"px"}},{key:"setHeight",value:function(i){this.height=this.canvas.height=i*y,this.canvas.style.height=i+"px",this.context.scale(y,y)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setBackgroundColor",value:function(i){this.canvas.style.background=i}},{key:"setSize",value:function(i,n){this.setWidth(i||0),this.setHeight(n||0)}},{key:"getContext",value:function(){return this.context}},{key:"getCanvasDom",value:function(i,n,t){return t&&this.setBackgroundColor(t),this.canvas}}]),f}(),Se=function(f){w()(i,f);var a=E()(i);function i(){var n;l()(this,i);for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return n=a.call.apply(a,[this].concat(s)),r()(h()(n),"children",[]),n}return O()(i,[{key:"getChildren",value:function(t){if(!t)return this.children||[];var s=this.children||[],o=[];return s.forEach(function(v){t(v)&&o.push(v)}),o}},{key:"hasChildren",value:function(){return this.getChildren().length>0}},{key:"removeChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.remove()}),this.children=[],this}},{key:"destroyChildren",value:function(){return this.getChildren().forEach(function(t){t.parent=null,t.index=0,t.destroy()}),this.children=[],this}},{key:"add",value:function(){if(arguments.length===0)return this;if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(t<0||arguments.length<=t?void 0:arguments[t]);return this}var s=arguments.length<=0?void 0:arguments[0];return s.index=s.index?s.index:this.getChildren().length,s.parent=this,this.getChildren().push(s),this}},{key:"sortChildren",value:function(t){return this.getChildren().sort(t)}},{key:"deduplication",value:function(){this.getChildren();var t=[];return this.getChildren().forEach(function(s){var o=t.some(function(v){return v===s});o||t.push(s)}),this.children=t,t}},{key:"batchDraw",value:function(t){var s,o,v,p,A;!((s=t.canvas)!==null&&s!==void 0&&s.context)||!((o=t.canvas)!==null&&o!==void 0&&o.canvas)||((v=t.canvas)===null||v===void 0||v.context.clearRect(0,0,(p=t.canvas)===null||p===void 0?void 0:p.canvas.offsetWidth,(A=t.canvas)===null||A===void 0?void 0:A.canvas.offsetHeight),this.sortChildren(function(_,x){return _.index-x.index}),this.deduplication(),this.getChildren().forEach(function(_){var x;if((x=t.canvas)!==null&&x!==void 0&&x.context&&_!==null&&_!==void 0&&_.draw){var z;_==null||_.draw((z=t.canvas)===null||z===void 0?void 0:z.context)}}))}}]),i}(K),Le=Se,Te="mouseenter",Be="mouseleave",we="mouseout",We="mouseover",Ue="mousedown",Ke="mousemove",ke="mouseup",ze="contextmenu",Qe="click",je="dblclick",Ne="wheel",be=[[Te,"_mouseenter"],[Ue,"_mousedown"],[Ke,"_mousemove"],[Be,"_mouseleave"],[ke,"_mouseup"],[we,"_mouseout"],[We,"_mouseover"],[ze,"_contextmenu"],[Ne,"_wheel"],[Qe,"_click"],[je,"_dblclick"]],Ye=function(f){w()(i,f);var a=E()(i);function i(){var n;return l()(this,i),n=a.call(this),r()(h()(n),"name","Stage"),r()(h()(n),"parent",null),r()(h()(n),"content",void 0),r()(h()(n),"canvas",void 0),r()(h()(n),"width",void 0),r()(h()(n),"height",void 0),r()(h()(n),"draggable",void 0),r()(h()(n),"isFirstRender",void 0),r()(h()(n),"_pointerPositions",[]),r()(h()(n),"_changedPointerPositions",[]),r()(h()(n),"pointerPos",null),n.content=null,n.canvas=null,n.width=100,n.height=500,n.isFirstRender=!0,n.draggable=!1,n}return O()(i,[{key:"buildContentDOM",value:function(t){if(!(t.container instanceof HTMLElement))throw new Error("The provided variable is not an HTMLElement.");var s=t.width?"".concat(t.width,"px"):"".concat(this.width,"%"),o=t.height?"".concat(t.height,"px"):"".concat(this.height,"px");this.content=t.container,this.content.style.position="relative",this.content.id="Heitu-Stage",this.content.className="heituStage",this.content.style.width=s,this.content.style.height=o,this.canvas=new Re,this.setContainer(this.content.offsetWidth,this.content.offsetHeight,t.backgroundColor),this._bindContentEvents()}},{key:"setContainer",value:function(t,s,o){this.content&&this.canvas&&(this.canvas.getCanvasDom(t,s,o),this.content.appendChild(this.canvas.canvas))}},{key:"destroy",value:function(){this.content=null,this.canvas=null,this.pointerPos=null,this.width=0,this.height=0,this.draggable=!1}},{key:"_resizeDOM",value:function(){if(this.content&&this.canvas){var t;this.canvas.setSize(this.content.offsetWidth,this.content.offsetHeight),(t=this.canvas)!==null&&t!==void 0&&t.context&&this.batchDraw(this)}}},{key:"setPointersPositions",value:function(t){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var s=this.content.getBoundingClientRect(),o={top:s.top,left:s.left,scaleX:s.width/this.content.clientWidth||1,scaleY:s.height/this.content.clientHeight||1},v=null,p=null;v=(t.clientX-o.left)/o.scaleX,p=(t.clientY-o.top)/o.scaleY,this.pointerPos={x:v,y:p}}},{key:"_bindContentEvents",value:function(){var t,s=this;this!==null&&this!==void 0&&(t=this.content)!==null&&t!==void 0&&t.addEventListener&&be.forEach(function(o){var v,p=b()(o,2),A=p[0],_=p[1];(v=s.content)===null||v===void 0||v.addEventListener(A,function(x){s[_](x)},{passive:!1})})}},{key:"_mouseenter",value:function(t){j(this)&&(this.setPointersPositions(t),this.fire("mouseenter",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseleave",value:function(t){j(this)&&(this.setPointersPositions(t),this.fire("mouseleave",{evt:t,target:this,currentTarget:this}))}},{key:"_mouseout",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mouseover",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_mousedown",value:function(t){this.setPointersPositions(t),this.fire("mousedown",{evt:t,target:this,currentTarget:this})}},{key:"_mousemove",value:function(t){this.setPointersPositions(t),this.fire("mousemove",{evt:t,target:this,currentTarget:this})}},{key:"_mouseup",value:function(t){this.setPointersPositions(t),this.fire("mouseup",{evt:t,target:this,currentTarget:this})}},{key:"_contextmenu",value:function(t){t.preventDefault(),this.setPointersPositions(t),this.fire("contextmenu",{evt:t,target:this,currentTarget:this})}},{key:"_wheel",value:function(t){this.setPointersPositions(t),this.fire("wheel",{evt:t,target:this,currentTarget:this})}},{key:"_click",value:function(t){this.setPointersPositions(t),this.fire("click",{evt:t,target:this,currentTarget:this})}},{key:"_dblclick",value:function(t){this.setPointersPositions(t),this.fire("dblclick",{evt:t,target:this,currentTarget:this})}}]),i}(Le),Ie=Ye,ce={},k=e(67294),ie,He=Object.prototype.toString;function Je(f){return typeof f=="function"}var Ht=function(a){return typeof a!="undefined"};function Jt(f){return typeof f=="undefined"}var Ft=function(a){return typeof a=="boolean"},$t=function(a){return typeof a=="number"};function Fe(f){return typeof f=="string"}function Zt(f){return He.call(f)==="[object Object]"}var Xt=null,pe=typeof window!="undefined",Gt=typeof navigator!="undefined";function Vt(){}var qt=pe&&((ie=window)===null||ie===void 0||(ie=ie.navigator)===null||ie===void 0?void 0:ie.userAgent)&&/iP(?:ad|hone|od)/.test(window.navigator.userAgent),en=!k.useId,re=e(31955);function $e(f,a){return a!==void 0?a:pe?re.Z.get(f):""}var Ze=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,n=arguments.length>2?arguments[2]:void 0,t=(0,k.useState)($e(a,n)),s=b()(t,2),o=s[0],v=s[1];(0,k.useEffect)(function(){var _=function(){var z=re.Z.get(a);return z!=null?z:(n===void 0?re.Z.remove(a):re.Z.set(a,n,i),n)};v(_())},[n,a,JSON.stringify(i)]);var p=(0,k.useCallback)(function(_){var x=Je(_)?_(o):_;x===void 0?re.Z.remove(a):re.Z.set(a,x,i),v(x)},[a,o,JSON.stringify(i)]),A=(0,k.useCallback)(function(){var _=re.Z.get(a);Fe(_)&&v(_)},[a]);return[o,p,A]},Xe=Ze,Ge=function(){var a=(0,k.useState)(0),i=b()(a,2),n=i[0],t=i[1],s,o=function(){clearTimeout(s)},v=function(A){o(),t(A||function(_){return _-1})};return(0,k.useEffect)(function(){return s=setTimeout(function(){n>0?t(function(p){return p-1}):o()},1e3),function(){return o()}},[n]),[n,v,o]},Ve=Ge,qe=function(a,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ce;(0,k.useEffect)(function(){var t=new ResizeObserver(i);return a!=null&&a.current&&t.observe(a.current,n),function(){a!=null&&a.current&&t.unobserve(a.current),t.disconnect()}},[])},Ee=qe,et=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce,n=(0,k.useState)({width:0,height:0}),t=b()(n,2),s=t[0],o=t[1];return Ee(a,function(v){if(v.length!==0){var p=b()(v,1),A=p[0],_=A.contentRect,x=_.width,z=_.height;o({width:x,height:z})}},i),s},tt=et,nt=e(42122),le=e.n(nt),ge=e(54683),ot=e(84305),rt="application/json;charset=utf-8",tn="application/x-www-form-urlencoded",nn={"X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache","Content-Type":rt,Accept:"application/json;version=3.0;compress=false;"},at=function(){return{method:"get",baseURL:"/",withCredentials:!0,transformMethod:!1,timeout:30*1e3,responseType:"json",maxContentLength:1024*1024*1024,filter:!1,cache:!1,overrideDefaultRequestInterceptor:!1,overrideDefaultResponseInterceptor:!1}},it=e(54998),st=e.n(it),ut=e(49360),lt=e(58146),dt=e(73505),ht=e(27771),ct=e(77226),vt=e(36378),ve=function f(a){if((0,ut.Z)(a)||(0,lt.Z)(a)||(0,dt.Z)(a))return a;if((0,ht.Z)(a))return a.map(function(n){return f(n)});if((0,ct.Z)(a)){var i=Object.create(null);return Object.keys(a).forEach(function(n){i[n]=f(a[n])}),i}else return(0,vt.Z)(a)?a.trim():a};function on(){return typeof window=="undefined"?!1:window&&window.__debug__}function rn(f){var a=atob(f);return Uint8Array.from(a,function(i){return i.codePointAt(0)})}function an(f){var a=Array.from(f,function(i){return String.fromCodePoint(i)}).join("");return btoa(a)}var ft=ge.Z.CancelToken.source(),mt=function(a){a.cancelToken=ft.token;var i=st()(a.url);if(a.url=i.query(ve(i.query(!0))||{}).toString(),a.data&&(a.data=ve(a.data)),a.params=ve(a.params||{}),a.cache&&(a.params=a.params||{},a.params.__cache__=Math.random()),a.filter){var n=a.data,t=n===void 0?{}:n;for(var s in t)if(t.hasOwnProperty(s)){var o=t[s];o==null&&delete t[s]}}return a.method==="get"&&a.data&&(a.params=a.data,delete a.data),a},It=function(a,i){i&&a.interceptors.request.use(function(n){return i(n)},function(n){return Promise.reject(n)}),a.interceptors.request.use(function(n){return mt(n)},function(n){return Promise.reject(n)})},pt=function(a){var i,n=a.data;try{if(n instanceof Blob){var t=a.headers["content-disposition"],s=t.split("filename=")[1];return{success:!0,data:{file:n,fileName:s}}}}catch(o){console.error(o)}return((i=a.headers)===null||i===void 0?void 0:i["content-type"].indexOf("application/json"))<0,n},Et=function(a){var i="\u7F51\u7EDC\u9519\u8BEF \u7A0D\u540E\u518D\u8BD5";if(!a.__CANCEL__){if(a){if(a.response&&a.response.data){var n=a.response.data.errors,t=n===void 0?[]:n,s=t&&t[0]||{};return Promise.reject({message:s.message||a.message||i,arguments:s.arguments||void 0,code:s.code||null})}return Promise.reject({message:a.message||i,arguments:void 0,code:null})}return Promise.reject({message:i,arguments:void 0,code:null})}},gt=function(a,i,n){i&&a.interceptors.response.use(function(t){return i(t)},function(t){return Promise.reject(t)}),i&&a.interceptors.response.use(function(t){return t},n),a.interceptors.response.use(pt,Et)},_t=function(a){var i=a.config,n=i===void 0?{}:i,t=a.requestInterceptorsCallback,s=a.responseInterceptorOnSuccessCallback,o=a.responseInterceptorOnErrorCallback,v=(0,ot.Z)(at(),n),p=ge.Z.create(v);It(p,t),gt(p,s,o);function A(N,S,F){return p.request(le()({url:N,params:S},F))}function _(N,S,F){return p.request(le()({url:N,method:"post",params:S},F))}function x(N,S,F){return p.request(le()({url:N,method:"put",params:S},F))}function z(N,S,F){return p.request(le()({url:N,method:"delete",params:S},F))}return{get:A,post:_,del:z,put:x}},yt=_t,At=e(17061),_e=e.n(At),Ct=e(17156),xt=e.n(Ct);function Pt(f){var a=f.dataSource,i=f.delay,n=i===void 0?100:i,t=f.pageSize,s=t===void 0?10:t,o=f.fetchData,v=(0,k.useState)(!1),p=b()(v,2),A=p[0],_=p[1],x=(0,k.useState)(!0),z=b()(x,2),N=z[0],S=z[1],F=(0,k.useState)([]),te=b()(F,2),Q=te[0],q=te[1];function ne(){return Z.apply(this,arguments)}function Z(){return Z=xt()(_e()().mark(function X(){return _e()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(!(!(a!=null&&a.length)&&!o)){Y.next=2;break}return Y.abrupt("return");case 2:if(!(!N||A)){Y.next=4;break}return Y.abrupt("return");case 4:if(_(!0),!a){Y.next=10;break}return Y.next=8,new Promise(function(ee){setTimeout(function(){ee(a==null?void 0:a.slice(Q.length,Q.length+s))},n)}).then(function(ee){S((Q==null?void 0:Q.length)+(ee==null?void 0:ee.length)<(a==null?void 0:a.length)),q(function(ue){return ue==null?void 0:ue.concat(ee)})});case 8:Y.next=12;break;case 10:return Y.next=12,o==null?void 0:o({pageNum:Q!=null&&Q.length?Math.ceil((Q==null?void 0:Q.length)/s)+1:1,pageSize:s}).then(function(ee){var ue=ee.list,ae=ue===void 0?[]:ue,ye=ee.total,bt=ye===void 0?0:ye;S((Q==null?void 0:Q.length)+(ae==null?void 0:ae.length)<bt&&(ae==null?void 0:ae.length)>0),q(function(me){return me==null?void 0:me.concat(ae)})});case 12:_(!1);case 13:case"end":return Y.stop()}},X)})),Z.apply(this,arguments)}return{data:Q,setData:q,loading:A,hasMore:N,loadMore:ne}}var Dt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(0,k.useState)(!1),t=b()(n,2),s=t[0],o=t[1],v=(0,k.useRef)(null);return(0,k.useEffect)(function(){var p=new IntersectionObserver(function(A){A.forEach(function(_){_.isIntersecting?(o(!0),i&&p.unobserve(_.target)):o(!1)})},a);return v!=null&&v.current&&p.observe(v.current),function(){v!=null&&v.current&&p.unobserve(v.current)}},[a,i]),[v,s]},Mt=Dt,Ot=function(a){var i=(0,k.useRef)({});return(0,k.useLayoutEffect)(function(){i.current=a}),(0,k.useLayoutEffect)(function(){return function(){i.current={}}},[]),i.current},Rt=Ot,St=function(){var a=(0,k.useState)({width:window.innerWidth,height:window.innerHeight}),i=b()(a,2),n=i[0],t=i[1],s=function(){t({width:window.innerWidth,height:window.innerHeight})};return(0,k.useLayoutEffect)(function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[]),{width:n.width,height:n.height}},Lt=St,Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",Bt=function(a){var i=a.imgList,n=(0,k.useState)(""),t=b()(n,2),s=t[0],o=t[1],v=(0,k.useState)([]),p=b()(v,2),A=p[0],_=p[1],x=(0,k.useState)([]),z=b()(x,2),N=z[0],S=z[1],F=function te(Q,q,ne){var Z=new Image,X=q+1;Z.src=Q,Z.onload=function(){_(function($){return[].concat(c()($),[Q])}),S(function($){return[].concat(c()($),[Q])}),ne||o(Q),q<i.length-1&&te(i[X],X,!0),console.log(ne,"isfirstisfirst")},Z.onerror=function(){_(function($){return[].concat(c()($),[Tt])}),X<i.length-1&&te(i[X],X)}};return(0,k.useEffect)(function(){(i==null?void 0:i.length)>1&&F(i==null?void 0:i[0],0)},[]),console.log(s,A,N),A.length!==i.length?[]:[s,A,N]},wt=Bt,Wt=e(88305),Ut=function(a){var i,n=(0,k.useRef)(null),t=function(v){n.current=v,console.log(n)},s=function(){};return{api:{initChart:t},assistLine:{startPoint:{x:0,y:0},endPoint:{x:0,y:(i=n.current)===null||i===void 0?void 0:i.clientHeight},points:[],ref:n}}},fe=(0,Wt.f)(Ut),se=e(85893),Kt=function(a){var i=fe.useContainer(),n=i.assistLine;return console.log(n,"assistLine"),console.log(n.ref.current,"initialState"),(0,se.jsx)("div",{})},kt=Kt,zt=function(){var a=fe.useContainer(),i=a.api.initChart,n=(0,k.useRef)(null);return(0,k.useLayoutEffect)(function(){n.current&&i(n.current)},[]),(0,se.jsx)("div",{ref:n,children:(0,se.jsx)(Ie,{children:(0,se.jsx)(kt,{})})})},Qt=zt,jt=function(a){return console.log(a,"props."),(0,se.jsx)(fe.Provider,{initialState:{option:a.option},children:(0,se.jsx)(Qt,le()({},a))})},Nt=jt},48977:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(54197);const l=[{value:"\u662F\u4E00\u4E2A HTML5 \u753B\u5E03 JavaScript \u6846\u67B6\uFF0C\u6269\u5C55 2d \u4E0A\u4E0B\u6587 \u901A\u8FC7\u4E3A\u684C\u9762\u542F\u7528\u753B\u5E03\u4EA4\u4E92\u6027\u3002",paraId:0,tocIndex:1},{value:`npm install heitu

yarn add heitu

`,paraId:1,tocIndex:2},{value:"\u539F\u751F\u4F7F\u7528",paraId:2,tocIndex:3}]},25924:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(18283);const l=[{value:"\u6839\u636E\u753B\u5E03\u91CD\u65B0\u6E32\u67D3 \u753B\u5E03\u5185\u5BB9",paraId:0,tocIndex:1},{value:"\u6F14\u793A\u63A8\u8350 \u6253\u5F00\u5DE6\u53F3\u63A7\u5236\u53F0\u62D6\u62FD",paraId:1,tocIndex:1}]},51234:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(97452);const l=[{value:`
  npm i heitu or yarn add heitu

`,paraId:0,tocIndex:0},{value:`import { Stage } from 'heitu';
export const Index = () => {
  return (
    <>
      <stage />
    </>
  );
};
`,paraId:1,tocIndex:1}]},9978:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(26211);const l=[{value:"heitu",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u524D\u7AEF\u6846\u67B6 \u63D0\u4F9B\u9AD8\u6548\u7684 ",paraId:0,tocIndex:0},{value:"hook",paraId:0,tocIndex:0},{value:" \u4EE5\u53CA\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA ",paraId:0,tocIndex:0},{value:"\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:`yarn add heitu

# or
npm i heitu
`,paraId:1,tocIndex:1}]},69236:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(29876);const l=[{value:`
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
`,paraId:1,tocIndex:1}]},18632:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(72155);const l=[{value:"\u53D6\u6D88\u524D\u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u7684hook,\u53EF\u4EE5\u7528\u4E8E\u4E0B\u641C\u7D22\u62C9\u5217\u8868",paraId:0,tocIndex:1}]},30223:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(64577);const l=[{value:"cookie \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"cookie name",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"cookie opt",paraId:1,tocIndex:3},{value:'{expires: number/Date,path?: string,domain?: string,secure?: boolean, sameSite?: "strict" / "Strict" / "lax" / "Lax" / "none" / "None}',paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"default val",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"cookieValue",paraId:2,tocIndex:4},{value:"\u5F53\u524D cookie \u7684\u503C",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"updateCookie",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"(newValue: UseCookieState/ (prevState: UseCookieState) =>UseCookieState)=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"refreshCookie",paraId:2,tocIndex:4},{value:"\u5237\u65B0 cookie",paraId:2,tocIndex:4},{value:"() => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},28355:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(28587);const l=[{value:"\u5012\u8BA1\u65F6 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"seconds",paraId:1,tocIndex:3},{value:"\u7528\u4E8E\u5C55\u793A\u7684\u5012\u8BA1\u65F6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"0",paraId:1,tocIndex:3},{value:"startCountDown",paraId:1,tocIndex:3},{value:"\u5F00\u59CB\u5012\u8BA1\u65F6,\u4F20\u53C2\u91CD\u7F6E\uFF0C\u4E0D\u4F20\u7EE7\u7EED",paraId:1,tocIndex:3},{value:"(num?:number)=>void",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},6575:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(56139);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"ref",paraId:1,tocIndex:3},{value:"\u9700\u8981\u5904\u7406\u7684 ref",paraId:1,tocIndex:3},{value:"React.RefObject",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},51794:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(38668);const l=[{value:"useHtAxios",paraId:0,tocIndex:1},{value:"\u57FA\u4E8E axios \u5C01\u88C5\u7684\u8BF7\u6C42 hook",paraId:1,tocIndex:1},{value:"\u589E\u52A0 axios \u9ED8\u8BA4\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u901A\u7528\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u652F\u6301\u989D\u5916\u914D\u7F6E axios \u62E6\u622A\u54CD\u5E94",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4}]},10309:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(81233);const l=[{value:"\u7528\u4E8E \u83B7\u53D6 img \u52A0\u8F7D\u72B6\u6001, \u652F\u6301\u4F20\u5165\u56FE\u7247\u7684\u6570\u7EC4 \u9010\u4E2A\u68C0\u67E5\u72B6\u6001\u5C55\u793A \u53EF\u52A0\u8F7D\u7684\uFF0C\u5982\u679C\u90FD\u4E0D\u6210\u529F\u8FD4\u56DE \u88C2\u56FE\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u6CE8\uFF1A\u5F02\u6B65\u7684!!!",paraId:1,tocIndex:1},{value:"name",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"imgList",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u6570\u7EC4(\u9700\u8981\u67E5\u8BE2\u662F\u5426\u53EF\u5C55\u793A\u6570\u7EC4\u5217\u8868)",paraId:2,tocIndex:3},{value:"string[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"default",paraId:3,tocIndex:4},{value:"img",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740(\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u80FD\u5C55\u73B0\u7684\u56FE\u7247)",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"ftimgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u4F1A\u5C06\u4E0D\u80FD\u5C55\u793A\u7684\u56FE\u7247\u6539\u4E3A\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u56FE\u50CF\u5360\u4F4D\u7B26\u3002\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"allowImgList",paraId:3,tocIndex:4},{value:"\u56FE\u7247\u6570\u7EC4\uFF08\u53EA\u5C06\u53EF\u4EE5\u5C55\u793A\u56FE\u7247\u8FD4\u56DE\uFF09",paraId:3,tocIndex:4},{value:"string[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},87553:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(35412);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"options",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u5143\u7D20\u7684\u57FA\u7840\u7528\u4F5C\u4F9D\u8D56",paraId:1,tocIndex:3},{value:"IntersectionObserverInit",paraId:1,tocIndex:3},{value:"{ root: null,rootMargin: '0px',threshold: 1,},",paraId:1,tocIndex:3},{value:"triggerOnce",paraId:1,tocIndex:3},{value:"\u89E6\u53D1\u4E00\u6B21",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"targetRef",paraId:2,tocIndex:4},{value:"\u7528\u4E8E\u7ED1\u5B9A\u6240\u4F5C\u7528\u5143\u7D20\u7684 ref",paraId:2,tocIndex:4},{value:"React.MutableRefObject<'HTMLElement' ,null>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"inView",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4}]},76022:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(1019);const l=[{value:"\u65E0\u7EBF\u6EDA\u52A8 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"dataSource",paraId:1,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:3},{value:"any[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"delay",paraId:1,tocIndex:3},{value:"\u5EF6\u8FDF",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"100",paraId:1,tocIndex:3},{value:"pageSize",paraId:1,tocIndex:3},{value:"\u6BCF\u9875\u7684\u4E2A\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"10",paraId:1,tocIndex:3},{value:"fetchData",paraId:1,tocIndex:3},{value:"\u8BF7\u6C42\u63A5\u53E3",paraId:1,tocIndex:3},{value:"Promise<{total?: number; list?: T[]}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"data",paraId:2,tocIndex:4},{value:"\u6570\u636E",paraId:2,tocIndex:4},{value:"any[]",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"setData",paraId:2,tocIndex:4},{value:"\u64CD\u4F5C data",paraId:2,tocIndex:4},{value:"React.Dispatch<React.SetStateAction<any[]>>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"loading",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hasMore",paraId:2,tocIndex:4},{value:"\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"true",paraId:2,tocIndex:4},{value:"loadMore",paraId:2,tocIndex:4},{value:"\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u7684\u51FD\u6570",paraId:2,tocIndex:4},{value:"Promise",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},20834:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(65808);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},51331:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(44012);const l=[{value:"\u7528\u4E8E\u5E42\u7B49\u6027\u76F8\u540C\u8BF7\u6C42\uFF0C\u591A\u6B21\u8BF7\u6C42 \u6D6A\u8D39\u8D44\u6E90\u95EE\u9898",paraId:0,tocIndex:1}]},19905:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(74746);const l=[{value:"\u7528\u4E8E\u7EC4\u4EF6\u83B7\u53D6\u524D\u4E00\u6B21\u63A5\u53D7\u7684 prop",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},49811:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(81286);const l=[{value:"\u83B7\u53D6\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u5185\u7684 hook",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},69853:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(68145);const l=[{value:"Storage \u7B80\u4FBF\u64CD\u4F5C",paraId:0,tocIndex:1}]},85854:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(51530);const l=[{value:"\u83B7\u53D6 window \u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"name",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:"name",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4}]},51446:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(68537);const l=[]},87724:function(P,u,e){e.r(u),e.d(u,{texts:function(){return l}});var g=e(79930);const l=[{value:"\u7C7B\u4F3Cnest\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u4E00\u6837 \u521B\u5EFA\u524D\u7AEF\u6A21\u5757\u6587\u4EF6",paraId:0,tocIndex:1},{value:"\u4E00\u822C\u7528\u4E8E\u7F16\u5199\u65B0\u9700\u6C42 \u5927\u91CF\u751F\u6210 \u65B0\u6587\u4EF6 \u5FEB\u901F\u5F00\u53D1",paraId:0,tocIndex:1},{value:"\u652F\u6301\u6279\u91CF\u751F\u6210 \u8F93\u5165\u6587\u4EF6\u540D\u79F0\u4EE5\u9017\u53F7\u5206\u5272",paraId:0,tocIndex:1},{value:`npx heitu

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
`,paraId:3,tocIndex:2},{value:"\u6837\u5F0F\u6A21\u677F\u652F\u6301 css / less / scss / tailwind (\u4E0D\u751F\u6210\u6837\u5F0F)",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u6A21\u677F \u5305\u542B index.tsx /interface.d.ts \u6E32\u67D3\u5C42\u6A21\u677F",paraId:3,tocIndex:2},{value:"\u5FAE\u4FE1  Im_Peco",paraId:5,tocIndex:3}]},78890:function(P,u){u.Z=`import {
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
`},66969:function(P,u){u.Z=`import { Circle, Stage, useResizeObserver } from 'heitu';
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
