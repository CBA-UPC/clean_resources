(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5124],{10176:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r=n(2265),o=n(95137),i=n(1091),a=s=n(96278),c=n(57437);unction u(e){let{children:t,disableReactTree:n=!1,mouseEvent:i="onClick",onClickAway:u,touchEvent:l="onTouchEnd"}=e,p=r.useRef(!1),d=r.useRef(null),m=r.useRef(!1),h=r.useRef(!1);r.useEffect([]);let v=(0,o.Z)(t.ref,d),y=a(,g=b={ref:v};return!1!==l&&(b[l]=g(l)),r.useEffect([y,l]),!1!==i&&(b[i]=g(i)),r.useEffect([y,i]),(0,c.jsx)(r.Fragment,{children:r.cloneElement(t,b)})}},75745:function(e,t,n){"use strict";let r;d(t,{r:function(){return eB}});var a,s,c,f,u,l=n(2265),p=n(95137),d=n(1091),m=n(96278);unction v(e){var t=h(e).Element;return e instanceof t||e instanceof Element}r b=Math.max,x=Math.min,w=Math.round;,W="right",N="left",H="auto",V=["top",B,W,N],U="start",q="viewport",F="popper",I=V.reduce([]),_=[].concat(V,[H]).reduce([]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],$={placement:"bottom",modifiers:[],strategy:"absolute"};ar Y={passive:!0};function G(e){return e.split("-")[0]} ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};ar en={left:"right",right:"left",bottom:"top",top:"bottom"};function er(e){return e.replace(/left|right|bottom|top/g,function(e){return en[e]})}var eo={start:"end",end:"start"};oid 0===(s=(a={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:effect:requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:,{name:"flip",enabled:!0,phase:"main",fn:requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:effect:requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:]}).defaultModifiers)?[]:s,u=void 0===(f=a.defaultOptions)?$:f,,ey=n(54887),eg=n(13840),eb=n(57437);let ex=l.forwardRef(,ew=eO=(r=ew,{configuregenerate:reset),eE={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};unction(e,t,n="Mui"){let r={};t.forEach(}("MuiPopper",["root"]);var ek=et eD=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"],eA=l.createContext({disableDefaultClasses:!1}),eC=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],eL=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];et eM=()=>(({root:["root"]},eP)),eZ={},eT=l.forwardRef(function(e,t){var n;let{anchorEl:r,children:a,direction:s,disablePortal:c,modifiers:f,open:u,placement:m,popperOptions:h,popperRef:v,slotProps:y={},slots:g={},TransitionProps:b}=e,x=i(e,eC),w=l.useRef(null),O=(0,p.Z)(w,t),E=l.useRef(null),j=(0,p.Z)(E,v),P=l.useRef(j);(0,d.Z)([j]),l.useImperativeHandle(v,[]);let k=m,s),[R,D]=l.useState(k),[A,C]=l.useState(eS(r));l.useEffect(,l.useEffect([r]),(0,d.Z)(()=>{if(!A||!u)return;let e=t=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:];null!=f&&(t=t.concat(f)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let n=ev(A,w.current,o({placement:k},h,{modifiers:t}));return P.current(n),,[A,c,f,u,h,k]);let L={placement:R};null!==b&&(L.TransitionProps=b);let S=eM(),M=null!=(n=g.root)?n:"div",Z=function(e){var t,n;let{elementType:r,externalSlotProps:a,ownerState:s,skipResolvingSlotProps:c=!1}=e,f=i(e,eD),u=c?{}:"function"==typeof a?a(s,void 0):a,{props:l,internalRef:d}=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){let e=ek(null==i?void 0:i.className,null==r?void 0:r.className,a,null==n?void 0:n.className),t=o({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),s=o({},n,i,r);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}let s=o({},i,r)),c=eR(r),f=eR(i),u=t(s),l=ek(null==u?void 0:u.className,null==n?void 0:n.className,a,null==i?void 0:i.className,null==r?void 0:r.className),p=o({},null==u?void 0:u.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),d=o({},u,n,f,c);return l.length>0&&(d.className=l),Object.keys(p).length>0&&(d.style=p),{props:d,internalRef:u.ref}}(o({},f,{externalSlotProps:u})),m=(0,p.Z)(d,null==u?void 0:u.ref,null==(t=e.additionalProps)?void 0:t.ref);return n=o({},l,{ref:m}),void 0===r||"string"==typeof r?n:o({},n,{ownerState:o({},n.ownerState,s)})}({elementType:M,externalSlotProps:y.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:S.root});return(0,eb.jsx)(M,o({},Z,{children:"function"==typeof a?a(L):a}))}),eB=l.forwardRef(function(e,t){let n;let{anchorEl:r,children:a,container:s,direction:c="ltr",disablePortal:f=!1,keepMounted:u=!1,modifiers:p,open:d,placement:h="bottom",popperOptions:v=eZ,popperRef:y,style:g,transition:b=!1,slotProps:x={},slots:w={}}=e,O=i(e,eL),[E,j]=l.useState(!0);if(!u&&!d&&(!b||E))return null;if(s)n=s;else if(r){let e=eS(r);n=e&&void 0!==e.nodeType?(0,m.Z)(e).body:(0,m.Z)(null).body}let P=!d&&u&&(!b||E)?"none":void 0,k=b?{in:d,onEnter:()=>{j(!1)},onExited::void 0;return(0,eb.jsx)(ex,{disablePortal:f,container:n,children:(0,eb.jsx)(eT,o({anchorEl:r,direction:c,disablePortal:f,modifiers:p,ref:t,open:b?!E:d,placement:h,popperOptions:v,popperRef:y,slotProps:x,slots:w},O,{style:o({position:"fixed",top:0,left:0,display:P},g),TransitionProps:k,children:a}))})})},96278:13840:1091:95137:16005:61396:function(e,t,n){e.exports=n(25250)},24033:55677:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(2265);function o(e,t){let n=(0,r.useContext)(e);if(void 0===n)throw Error(`must be inside a ${t} provider.`);return n}},71244:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});class r{class o extends r{constructor({type:e,pageId:t}){super({type:e}),this.page_id=t}}},11490:]);