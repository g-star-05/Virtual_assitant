"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16251],{720687:(e,t,n)=>{n.d(t,{default:()=>o});var a=n(934980);let i=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,o={css:(0,a.Ll)([i]),animation:"pulsing 2s infinite"}},934980:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>r,XF:()=>o});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),o=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(667294),i=n(883119),o=n(573706),r=n(986782);function l(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},m=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class u{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=m(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=m(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=m(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function p(e,t){return"number"==typeof e?e:"_lg1"===t?e[t]??e.lg??1:e[t]??1}var d=n(587435),c=n(39260),h=n(876594),g=n(720687),y=n(512541),_=n(785893);let{css:f,animation:x}=g.default,b={backgroundColor:h._VP,animation:x,borderRadius:h.Ev2};function w({data:e}){let{height:t}=e;return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(y.Z,{unsafeCSS:f}),(0,_.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:b},"data-test-id":"skeleton-pin",children:(0,_.jsx)(i.xu,{height:t})})]})}var v=n(679482),M=n(297728),C=n(730212),k=n(410150),$=n(415787),S=n(855746);function E(e){let t;let{align:n,cacheKey:l,id:m,isFetching:h,isGridCentered:g=!0,items:f,layout:x,loadItems:b,masonryRef:E,optOutFluidGridExperiment:j=!1,renderItem:A,scrollContainerRef:R,virtualize:W=!0,_getColumnSpanConfig:I,_getResponsiveModuleConfigForSecondItem:G,_dynamicHeights:P,useLoadingState:B,initialLoadingStatePinCount:F,isLoadingAccessibilityLabel:O,isLoadedAccessibilityLabel:L}=e,N=(0,k.ZP)(),{isAuthenticated:V,isRTL:z}=(0,C.B)(),{logContextEvent:X}=(0,o.v)(),D=(0,M.F)(),H="desktop"===N,T=(0,S.MM)(),Z=((0,a.useRef)(f.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),H&&!j),{experimentalColumnWidth:Q,experimentalGutter:q}=(0,d.Z)(Z),K=e.serverRender??!!H,U="flexible"===x||"uniformRowFlexible"===x||"desktop"!==N||Z,J=(U&&x?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(K?"serverRenderedFlexible":"flexible"),Y=e.columnWidth??Q??v.yF;U&&(Y=Math.floor(Y));let ee=e.gutterWidth??q??(H?v.oX:1),et=e.minCols??v.yc,en=((0,a.useRef)(0),Y+ee),ea=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new u),t.measurementCache}(l),ei=(0,a.useCallback)(()=>R?.current||window,[R]),eo=(0,a.useRef)(!0),{anyEnabled:er}=P?D.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},{anyEnabled:el}=D.checkExperiment("web_masonry_enable_dynamic_heights_for_all"),{anyEnabled:es}=D.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:em,group:eu}=D.checkExperiment("web_masonry_multicolumn_position_algo_v2"),{anyEnabled:ep,group:ed}=D.checkExperiment("web_masonry_dynamic_batches");ep&&(t=(e,t)=>{let n={itemsBatchSize:0,whitespaceThreshold:0,iterationsLimit:15e3};return t>3&&(n.whitespaceThreshold=ee*t),("enabled_small_batch"===ed||"employees"===ed)&&(e>=7?n.itemsBatchSize=7:n.itemsBatchSize=5),"enabled_large_batch"===ed&&(e>=7?n.itemsBatchSize=9:n.itemsBatchSize=5),n});let ec=g&&eo.current?"centered":"",{className:eh,styles:eg}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:o,maxColumns:r,minColumns:l,items:s,_getColumnSpanConfig:m,_getResponsiveModuleConfigForSecondItem:u}=e,d=m?s.map((e,t)=>({index:t,columnSpanConfig:m(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=o+a,h=Array.from({length:r+1-l},(e,t)=>t+l).map(e=>{let h,g;let y=e===l?0:e*c,_=e===r?null:(e+1)*c-.01;m&&u&&s.length>1&&(h=m(s[0]),g=u(s[1]));let{styles:f,numberOfVisibleItems:x}=d.reduce((i,r)=>{let{columnSpanConfig:l}=r,m=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:a,secondItemResponsiveModuleConfig:i}){let o=e<=2?"sm":e<=4?"md":e<=6?"_lg1":e<=8?"lg":"xl",r=p(t,o);if(a){let t=p(n,o);r="number"==typeof i?i:i?Math.max(i.min,Math.min(i.max,e-t)):1}return r}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!g&&r===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:g??1}),e),u=null!=r.index&&i.numberOfVisibleItems>=m+r.index,d=n?100/e*m:o*m+a*(m-1),{numberOfVisibleItems:c}=i;return u?c-=m-1:r.index<c&&(c+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:o}){let r="number"==typeof n?n:btoa(JSON.stringify(n));return o?`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:r.index,columnSpanConfig:l,visible:u,width:d,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),b=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${o}px !important;
      }
    `;return{minWidth:y,maxWidth:_,styles:`
      .${t} .static:nth-child(-n+${x}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${b}

      ${f}
    `}}),g=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=`
    ${g.join("")}
    @supports not (container-type: inline-size) {
      ${y.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${_}
  `}}({gutterWidth:ee,flexible:U,items:f,isRTL:z,itemWidth:Y,maxColumns:e.maxColumns??Math.max(f.length,v.g5),minColumns:et,_getColumnSpanConfig:I,_getResponsiveModuleConfigForSecondItem:G}),ey=`${ec} ${eh}`.trim(),{anyEnabled:e_,expName:ef,group:ex,isMeasureAllEnabled:eb}=(0,c.Z)(),ew=((0,a.useRef)(),(0,a.useRef)(f.length)),ev=(0,a.useRef)(0),eM=(0,a.useRef)(null);(0,a.useEffect)(()=>{ew.current=f.length,ev.current+=1},[f]),(0,a.useEffect)(()=>{eo.current&&(eo.current=!1)},[]),(0,a.useEffect)(()=>()=>{},[]);let eC=(0,a.useCallback)((e,t,n)=>{let a=e.reduce((e,t)=>e+t),i=a/e.length;(0,$.S0)("webapp.masonry.multiColumnWhitespace.average",i,{sampleRate:1,tags:{experimentalMasonryGroup:ex||"unknown",multicolumnLayoutAlgoV2Group:eu||"unknown",dynamicBatchesExperimentGroup:ed||"unknown",handlerId:T,isAuthenticated:V,multiColumnItemSpan:e.length}}),(0,$.S0)("webapp.masonry.twoColWhitespace",i,{sampleRate:1,tags:{columnWidth:Y,minCols:et}}),ed&&(0,$.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,experimentGroup:ed}}),X({event_type:15878,component:14468,aux_data:{total_whitespace_px:a}}),X({event_type:16062,component:14468,aux_data:{average_whitespace_px:i}}),X({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{experimentalMasonryGroup:ex||"unknown",multicolumnLayoutAlgoV2Group:eu||"unknown",dynamicBatchesExperimentGroup:ed||"unknown",handlerId:T,isAuthenticated:V,multiColumnItemSpan:e.length}}),X({event_type:16261,component:14468})),t>=100&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{experimentalMasonryGroup:ex||"unknown",multicolumnLayoutAlgoV2Group:eu||"unknown",dynamicBatchesExperimentGroup:ed||"unknown",handlerId:T,isAuthenticated:V,multiColumnItemSpan:e.length}}),X({event_type:16262,component:14468}))}),(0,$.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{experimentalMasonryGroup:ex||"unknown",multicolumnLayoutAlgoV2Group:eu||"unknown",dynamicBatchesExperimentGroup:ed||"unknown",handlerId:T,isAuthenticated:V,multiColumnItemSpan:e.length}})},[Y,X,et,V,T,ex,eu,ed]),{_items:ek,_renderItem:e$}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:o,useLoadingState:r}){let l=i.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0,s=r&&n&&0===i.length,m=r&&n&&l&&1===i.length,u=r&&n&&i.length>(l?1:0),p=(0,a.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,a.useMemo)(()=>m||u?[...i,...p]:s?p:i,[s,u,m,i,p]),_renderItem:(0,a.useMemo)(()=>r?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,_.jsx)(w,{data:n},n.key):o(e)}:o,[r,o,i.length])}}({useLoadingState:B,items:f,renderItem:(0,a.useCallback)(e=>(0,_.jsx)(r.Z,{name:"MasonryItem",children:A(e)}),[A]),isFetching:h,initialLoadingStatePinCount:F}),eS=B&&h;return(0,a.useEffect)(()=>{es&&requestAnimationFrame(()=>{let e=Array.from(eM.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===e.length)return;let t=e.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),n=0,a=0,i=0,o=0,r=0,l=0;for(let e=0;e<t.length;e+=1){let s=t[e]?.rect;for(let m=e+1;m<t.length;m+=1){let e=t[m]?.rect;if(s&&e&&s.right>=e.left&&s.left<=e.right&&s.bottom>=e.top&&s.top<=e.bottom&&s.height>0&&e.height>0){n+=1;let t=Math.max(0,Math.min(s.right,e.right)-Math.max(s.left,e.left))*Math.max(0,Math.min(s.bottom,e.bottom)-Math.max(s.top,e.top));t>8e4?l+=1:t>4e4?r+=1:t>1e4?o+=1:t>5e3?i+=1:t>2500&&(a+=1)}}}n>0&&(0,$.QX)("webapp.masonry.pinOverlapHits",n,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}}),a>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over2500",a,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}}),i>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over5000",i,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}}),o>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over10000",o,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}}),r>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over40000",r,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}}),l>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over80000",l,{tags:{isAuthenticated:V,isDesktop:H,experimentalMasonryGroup:ex||"unknown"}})})},[Y,ex,V,H,es,f]),(0,_.jsxs)(a.Fragment,{children:[B&&!eo.current&&(0,_.jsx)(i.xu,{"aria-live":"polite",display:"visuallyHidden",children:eS?O:L}),(0,_.jsx)("div",{ref:eM,"aria-busy":B?!!eS:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:m,style:Z?{padding:`0 ${ee/2}px`}:void 0,children:(0,_.jsxs)("div",{className:ey,children:[K&&eo.current?(0,_.jsx)(y.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:eg}):null,(0,_.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?en*e.maxColumns:void 0,children:e_?(0,_.jsx)(i.GX,{ref:e=>{E&&(E.current=e)},_dynamicHeights:el||P,_dynamicHeightsV2Experiment:er,_getColumnSpanConfig:I,_getModulePositioningConfig:t,_getResponsiveModuleConfigForSecondItem:G,_logTwoColWhitespace:eC,_measureAll:eb,_multiColPositionAlgoV2:em,align:n,columnWidth:Y,gutterWidth:ee,items:ek,layout:U?J:x??"basic",loadItems:b,measurementStore:ea,minCols:et,renderItem:e$,scrollContainer:ei,virtualBufferFactor:.3,virtualize:W}):(0,_.jsx)(i.Rk,{ref:e=>{E&&(E.current=e)},_dynamicHeights:el||P,_dynamicHeightsV2Experiment:er,_getColumnSpanConfig:I,_getModulePositioningConfig:t,_getResponsiveModuleConfigForSecondItem:G,_logTwoColWhitespace:eC,_multiColPositionAlgoV2:em,align:n,columnWidth:Y,gutterWidth:ee,items:ek,layout:U?J:x??"basic",loadItems:b,measurementStore:ea,minCols:et,renderItem:e$,scrollContainer:ei,virtualBufferFactor:.3,virtualize:W})})]})})]})}},587435:(e,t,n)=>{n.d(t,{Z:()=>a});function a(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},39260:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(297728),i=n(730212),o=n(855746);function r(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:r,group:l}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,o=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return o.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...o}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,o.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:r,group:l,isMeasureAllEnabled:"enabled_measure_all"===l||"enabled_measure_all_impression_fix"===l,isImpressionFixEnabled:"control_impression_fix"===l||"enabled_impression_fix"===l||"enabled_measure_all_impression_fix"===l}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16251-462e898b5b8afdea.mjs.map