!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"heitu","b":"webpack","f":[["docs__hooks__useImageLoad.md.4f3612e3.async.js",6],["docs__canvas__circle.md.2e122a94.async.js",8],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.b1b4c091.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.497b8a5d.async.js",65],["docs__hooks__useCookie.md.0142f8ab.async.js",143],["docs__canvas__event.md.fb5e06cd.async.js",217],["docs__canvas__index.md.004c212e.async.js",265],["docs__hooks__useInfiniteScroll.md.bdc01ad8.async.js",266],["docs__hooks__usePrevious.md.7fbf9f69.async.js",283],["docs__hooks__useOnceRequest.md.5dd30d39.async.js",299],["docs__hooks__useCancelAsyncFn.md.c1c9c34b.async.js",330],["docs__canvas__text.md.f9f20e9d.async.js",333],["docs__hooks__useWindowSize.md.cd5c40f9.async.js",354],["docs__hooks__useInView.md.4d3f6f00.async.js",361],["docs__hooks__useElementSize.md.440c5bc1.async.js",432],["docs__hooks__useLocal.md.f1c548c8.async.js",446],["nm__dumi__theme-default__layouts__DocLayout__index.d5d4f9ef.async.js",519],["docs__hooks__useSession.md.57ed20d3.async.js",572],["docs__hooks__useCountDown.md.31dfc169.async.js",580],["docs__canvas__eventBubble.md.ebfc06bc.async.js",592],["docs__canvas__image.md.09be1143.async.js",667],["docs__canvas__line.md.16b1a9bd.async.js",701],["docs__hooks__useGetComponentRenderTime.md.ec69fba1.async.js",725],["776.e8c51481.chunk.css",776],["776.db046e68.async.js",776],["docs__guide__index.md.fdeed1fc.async.js",825],["docs__canvas__rect.md.39d4df8b.async.js",826],["docs__tools__index.md.704f596f.async.js",907],["dumi__tmp-production__dumi__theme__ContextWrapper.f19965d9.async.js",923],["docs__index.md.116bc4e0.async.js",935],["docs__hooks__useResizeObserver.md.39eff0f5.async.js",956],["docs__hooks__useHtAxios.md.411d8dd8.async.js",972],["docs__hooks__index.md.7f19cb2d.async.js",973]],"r":{"/*":[4,5,18,25,26,30],"/":[31,18,25,26,30],"/canvas":[8,18,25,26,30],"/guide":[27,18,25,26,30],"/hooks":[34,18,25,26,30],"/tools":[29,18,25,26,30],"/~demos/:id":[2,3,30],"/hooks/use-get-component-render-time":[24,18,25,26,30],"/hooks/use-infinite-scroll":[9,18,25,26,30],"/hooks/use-resize-observer":[32,18,25,26,30],"/hooks/use-cancel-async-fn":[12,18,25,26,30],"/hooks/use-element-size":[16,18,25,26,30],"/hooks/use-once-request":[11,18,25,26,30],"/hooks/use-window-size":[14,18,25,26,30],"/canvas/event-bubble":[21,18,25,26,30],"/hooks/use-count-down":[20,18,25,26,30],"/hooks/use-image-load":[0,18,25,26,30],"/hooks/use-previous":[10,18,25,26,30],"/hooks/use-ht-axios":[33,18,25,26,30],"/hooks/use-session":[19,18,25,26,30],"/hooks/use-cookie":[6,18,25,26,30],"/hooks/use-in-view":[15,18,25,26,30],"/hooks/use-local":[17,18,25,26,30],"/canvas/circle":[1,18,25,26,30],"/canvas/event":[7,18,25,26,30],"/canvas/image":[22,18,25,26,30],"/canvas/line":[23,18,25,26,30],"/canvas/rect":[28,18,25,26,30],"/canvas/text":[13,18,25,26,30]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();