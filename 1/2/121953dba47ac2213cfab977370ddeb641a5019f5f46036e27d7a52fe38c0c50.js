import{a6 as ht,X as bt,a as ae,N as Be,j as tt,k as ne,w as se,a7 as qe,y as ke,D as rt,B as Ye,M as Ue,a2 as gt,C as yt,A as wt,R as xt,L as Q,F as Ot,I as Et,z as Pt,E as kt,S as Ct,T as St,a8 as Bt,a9 as De,r as Dt,n as $t,i as At}from"./vue-662d3fdf.js";e.debounce=Ce;var Ee=Ce;function Tt(t,e,r){At(t)?se(t,(o,n)=>{n==null||n.removeEventListener(e,r),o==null||o.addEventListener(e,r)}):Be(,De(()=>{var o;(o=Q(t))===null||o===void 0||o.removeEventListener(e,r)})}function jt(t,e){const r="pointerdown";return typeof window>"u"||!window?void 0:Tt(window,r,}function Lt(t,e,r){let o=null;const n=ae(!1);Be(()=>{(t.content!==void 0||r.value)&&(n.value=!0),o=new MutationObserver(a),o.observe(e.value,{childList:!0,subtree:!0})}),De(,se(r,;const a=return{hasContent:n}}ction pe(t){var e=I(t).Element;return t instanceof e||t instanceof Element}om",N="right",R="left",Le="auto",ue=[L,M,N,R],te="start",le="end",zt="clippingParents",at="viewport",oe="popper",Ft="reference",Ge=ue.reduce([]),it=[].concat(ue,[Le]).reduce([]),Vt="beforeRead",Xt="read",qt="afterRead",Yt="beforeMain",Ut="main",Kt="afterMain",Gt="beforeWrite",Jt="write",Qt="afterWrite",Zt=[Vt,Xt,qt,Yt,Ut,Kt,Gt,Jt,Qt];ction H(t){return t.split("-")[0]}r K=Math.max,fe=Math.min,he=Math.round;ent:"bottom",modifiers:[],strategy:"absolute"};r be={passive:!0};ar fr={name:"eventListeners",enabled:!0,phase:"write",fn:effect:lr,data:{}};ar ur={name:"popperOffsets",enabled:!0,phase:"read",fn:cr,data:{}},dr={top:"auto",right:"auto",bottom:"auto",left:"auto"}; hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mr,data:{}};r yr={name:"applyStyles",enabled:!0,phase:"write",fn:br,effect:gr,requires:["computeStyles"]},wr=[fr,ur,hr,yr],xr=pr({defaultModifiers:wr}); Pr={name:"preventOverflow",enabled:!0,phase:"main",fn:Er,requiresIfExists:["offset"]},kr={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(t){return t.replace(/left|right|bottom|top/g,function(e){return kr[e]})}var Cr={start:"end",end:"start"};$r={name:"flip",enabled:!0,phase:"main",fn:Dr,requiresIfExists:["offset"],data:{_skip:!1}};r jr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Tr},Lr=r Nr={name:"arrow",enabled:!0,phase:"main",fn:Rr,effect:Mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};const Pe=function Ir({arrowPadding:t,emit:e,locked:r,offsetDistance:o,offsetSkid:n,placement:a,popperNode:s,triggerNode:i}){const p=Dt({isOpen:!1,popperInstance:null}),f=u=>{var v;(v=p.popperInstance)===null||v===void 0||v.setOptions(},l=()=>f(!0),b=O=d=se([a],async([u])=>{u?(await m(),l()):b()});const m=async()=>{await $t(),p.popperInstance=xr(i.value,s.value,{placement:a.value,modifiers:[Pr,$r,{name:"flip",enabled:!r.value},Nr,{name:"arrow",options:{padding:Pe(t.value)}},jr,{name:"offset",options:{offset:[Pe(n.value),Pe(o.value)]}}]}),p.popperInstance.update()};return De(,{...tt(p),open:d,close:O}}const Wr={id:"arrow","data-popper-arrow":""};r zr=`
#arrow[data-v-20b7fd4a],
  #arrow[data-v-20b7fd4a]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-20b7fd4a] {
    visibility: hidden;
}
#arrow[data-v-20b7fd4a]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-20b7fd4a] {
    left: -5px;
}
`;ut(zr);const Ne={};Ne.render=Hr;Ne.__scopeId="data-v-20b7fd4a";var Fr=Ne;const Vr=["onKeyup"];var dt={props:{placement:{type:String,default:"bottom",validator:,disableClickAway:{type:Boolean,default:!1},offsetSkid:{type:String,default:"0"},offsetDistance:{type:String,default:"12"},hover:{type:Boolean,default:!1},show:{type:Boolean,default:null},disabled:{type:Boolean,default:!1},openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0},zIndex:{type:[Number,String],default:9999},arrow:{type:Boolean,default:!1},arrowPadding:{type:String,default:"0"},interactive:{type:Boolean,default:!0},locked:{type:Boolean,default:!1},content:{type:String,default:null}},emits:["open:popper","close:popper"],setup(t,{emit:e}){const r=t;ht(;const o=bt(),n=ae(null),a=ae(null),s=ae(null),i=ae(!1);Be(;const{arrowPadding:p,closeDelay:f,content:l,disableClickAway:b,disabled:O,interactive:d,locked:m,offsetDistance:u,offsetSkid:v,openDelay:g,placement:y,show:w}=tt(r),{isOpen:c,open:E,close:h}=Ir({arrowPadding:p,emit:e,locked:m,offsetDistance:u,offsetSkid:v,placement:y,popperNode:a,triggerNode:s}),{hasContent:x}=Lt(o,a,l),k=ne(,P=ne(,$=ne(,A=ne(,F=ne(,C=Ee.debounce(E,g.value),V=Ee.debounce(h,f.value),X=T=q=return se([x,O],([B,D])=>{c.value&&(!B||D)&&h()}),se(c,,qe(,qe(,(B,D)=>(ke(),rt("div",{class:"inline-block",style:Bt(Q(F)),onMouseleave:D[2]||(D[2]=S=>t.hover&&T()),ref:(S,Y)=>{Y.popperContainerNode=S,n.value=S}},[Ye("div",{ref:(S,Y)=>{Y.triggerNode=S,s.value=S},onMouseover:D[0]||(D[0]=,onClick:q,onFocus:X,onKeyup:gt(T,["esc"])},[Ue(B.$slots,"default")],40,Vr),yt(St,{name:"fade"},{default:wt(()=>[xt(Ye("div",{onClick:D[1]||(D[1]=S=>!Q(d)&&T()),class:"popper",ref:,[Ue(B.$slots,"content",{close:Q(h),isOpen:i.value},,t.arrow?(ke(),Pt(Fr,{key:0})):kt("",!0)],512),[[Ct,Q($)]])]),_:3})],36))}},Xr=`
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.popper[data-v-5784ed69] {
    transition: background 250ms ease-in-out;
    background: var(--popper-theme-background-color);
    padding: var(--popper-theme-padding);
    color: var(--popper-theme-text-color);
    border-radius: var(--popper-theme-border-radius);
    border-width: var(--popper-theme-border-width);
    border-style: var(--popper-theme-border-style);
    border-color: var(--popper-theme-border-color);
    box-shadow: var(--popper-theme-box-shadow);
    z-index: var(--c81fc0a4);
}
.popper[data-v-5784ed69]:hover,
  .popper:hover > #arrow[data-v-5784ed69]::before {
    background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.fade-enter-active[data-v-5784ed69],
  .fade-leave-active[data-v-5784ed69] {
    transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-5784ed69],
  .fade-leave-to[data-v-5784ed69] {
    opacity: 0;
}
`;ut(Xr);dt.__scopeId="data-v-5784ed69";var Yr=(();export{Yr as e};
//# sourceMappingURL=popper.esm-43ac2115.js.map
