"use strict";(self.webpackChunkheitu=self.webpackChunkheitu||[]).push([[904],{78636:function(d,n,e){e.r(n),e.d(n,{demos:function(){return u}});var r=e(67294),t=e(44866),u={}},97086:function(d,n,e){e.r(n),e.d(n,{demos:function(){return u}});var r=e(67294),t=e(29876),u={}},89342:function(d,n,e){e.r(n),e.d(n,{demos:function(){return E}});var r=e(17061),t=e.n(r),u=e(27424),m=e.n(u),h=e(17156),v=e.n(h),l=e(67294),f=e(57491),E={"docs-hooks-use-in-view-demo-0":{component:l.memo(l.lazy(v()(t()().mark(function i(){var c,a,s,_;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return c=o.sent,a=c.default,o.next=6,Promise.resolve().then(e.bind(e,44606));case 6:return s=o.sent,_=s.useInView,o.abrupt("return",{default:function(){var D=_(),P=m()(D,2),p=P[0],I=P[1];return a.createElement("div",null,a.createElement("div",null,I?"active":"inactive"),a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"900px"}},a.createElement("div",{ref:p},"12312312")))}});case 9:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-hooks-use-in-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { LegacyRef, useEffect } from 'react';
import { useInView } from 'heitu-hook';

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
};`},react:{type:"NPM",value:"18.3.1"},heitu:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),"heitu-hook":e(44606)},renderOpts:{compile:function(){var i=v()(t()().mark(function a(){var s,_=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,_));case 3:case"end":return o.stop()}},a)}));function c(){return i.apply(this,arguments)}return c}()}}}},11171:function(d,n,e){e.r(n),e.d(n,{demos:function(){return u}});var r=e(67294),t=e(68537),u={}},73661:function(d,n,e){e.r(n),e.d(n,{demos:function(){return u}});var r=e(67294),t=e(12395),u={}},44606:function(d,n,e){e.r(n),e.d(n,{useInView:function(){return h}});var r=e(27424),t=e.n(r),u=e(67294),m=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{root:null,rootMargin:"0px",threshold:1},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,E=(0,u.useState)(!1),i=t()(E,2),c=i[0],a=i[1],s=(0,u.useRef)(null);return(0,u.useEffect)(function(){var _=new IntersectionObserver(function(M){M.forEach(function(o){o.isIntersecting?(a(!0),f&&_.unobserve(o.target)):a(!1)})});return s!=null&&s.current&&_.observe(s.current),function(){s!=null&&s.current&&_.unobserve(s.current)}},[l,f]),[s,c]},h=m},44289:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(44866);const t=[{value:"This is a guide example.",paraId:0}]},69236:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(29876);const t=[{value:"This is a hooks example.",paraId:0}]},81856:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(57491);const t=[{value:"name",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"type",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3}]},51446:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(68537);const t=[]},55900:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(12395);const t=[]}}]);
