import{ea as Kt,g as Zt,c as Yt}from"./itinerary-entities.5f897bcd.js";import{bj as Jt}from"./graphql.5cf3693b.js";function Qt(j,G){for(var w=0;w<G.length;w++){const x=G[w];if(typeof x!="string"&&!Array.isArray(x)){for(const E in x)if(E!=="default"&&!(E in j)){const y=Object.getOwnPropertyDescriptor(x,E);y&&Object.defineProperty(j,E,y.get?y:{enumerable:!0,get:()=>x[E]})}}}return Object.freeze(Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}))}var ft={exports:{}};const te=Kt(Jt);(function(j,G){(function(w,x){j.exports=x(te)})(typeof self<"u"?self:Yt,function(w){return function(){var x={388:function(f,v){var c,i,b;(function(A,P){i=[],c=P,b=typeof c=="function"?c.apply(v,i):c,b===void 0||(f.exports=b)})(typeof self<"u"&&self,function(){function A(){var P=Object.getOwnPropertyDescriptor(document,"currentScript");if(!P&&"currentScript"in document&&document.currentScript||P&&P.get!==A&&document.currentScript)return document.currentScript;try{throw new Error}catch(L){var $,F,_,q=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,C=/@([^@]*):(\d+):(\d+)\s*$/gi,B=q.exec(L.stack)||C.exec(L.stack),V=B&&B[1]||!1,X=B&&B[2]||!1,U=document.location.href.replace(document.location.hash,""),S=document.getElementsByTagName("script");V===U&&($=document.documentElement.outerHTML,F=new RegExp("(?:[^\\n]+?\\n){0,"+(X-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),_=$.replace(F,"$1").trim());for(var d=0;d<S.length;d++)if(S[d].readyState==="interactive"||S[d].src===V||V===U&&S[d].innerHTML&&S[d].innerHTML.trim()===_)return S[d];return null}}return A})},831:function(f,v){v.Z=(c,i)=>{const b=c.__vccOpts||c;for(const[A,P]of i)b[A]=P;return b}},927:function(f){f.exports=w}},E={};function y(f){var v=E[f];if(v!==void 0)return v.exports;var c=E[f]={exports:{}};return x[f].call(c.exports,c,c.exports,y),c.exports}(function(){y.d=function(f,v){for(var c in v)y.o(v,c)&&!y.o(f,c)&&Object.defineProperty(f,c,{enumerable:!0,get:v[c]})}})(),function(){y.o=function(f,v){return Object.prototype.hasOwnProperty.call(f,v)}}(),function(){y.p=""}();var H={};return function(){if(y.d(H,{default:function(){return Ut}}),typeof window<"u"){var f=window.document.currentScript,v=y(388);f=v(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:v});var c=f&&f.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(y.p=c[1])}var i=y(927);function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A={key:0,class:"vue-slider-marks"};function P(t,e,r,n,o,a){var s=(0,i.resolveComponent)("vue-slider-mark"),p=(0,i.resolveComponent)("vue-slider-dot");return(0,i.openBlock)(),(0,i.createElementBlock)("div",(0,i.mergeProps)({ref:"container",class:t.containerClasses,style:t.containerStyles,onClick:e[2]||(e[2]=function(){return t.clickHandle&&t.clickHandle.apply(t,arguments)}),onTouchstartPassive:e[3]||(e[3]=function(){return t.dragStartOnProcess&&t.dragStartOnProcess.apply(t,arguments)}),onMousedownPassive:e[4]||(e[4]=function(){return t.dragStartOnProcess&&t.dragStartOnProcess.apply(t,arguments)})},t.$attrs),[(0,i.createElementVNode)("div",{class:"vue-slider-rail",style:(0,i.normalizeStyle)(t.railStyle)},[((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(t.processArray,function(l,h){return(0,i.renderSlot)(t.$slots,"process",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)),function(){return[((0,i.openBlock)(),(0,i.createElementBlock)("div",{class:"vue-slider-process",key:"process-".concat(h),style:(0,i.normalizeStyle)(l.style)},null,4))]})}),256)),t.sliderMarks&&t.control?((0,i.openBlock)(),(0,i.createElementBlock)("div",A,[((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(t.control.markList,function(l,h){return(0,i.renderSlot)(t.$slots,"mark",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)),function(){var g;return[((0,i.openBlock)(),(0,i.createBlock)(s,{key:"mark-".concat(h),mark:l,hideLabel:t.hideLabel,style:(0,i.normalizeStyle)((g={},b(g,t.isHorizontal?"height":"width","100%"),b(g,t.isHorizontal?"width":"height",t.tailSize),b(g,t.mainDirection,"".concat(l.pos,"%")),g)),stepStyle:t.stepStyle,stepActiveStyle:t.stepActiveStyle,labelStyle:t.labelStyle,labelActiveStyle:t.labelActiveStyle,onPressLabel:e[0]||(e[0]=function(z){return t.clickable&&t.setValueByPos(z)})},{step:(0,i.withCtx)(function(){return[(0,i.renderSlot)(t.$slots,"step",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)))]}),label:(0,i.withCtx)(function(){return[(0,i.renderSlot)(t.$slots,"label",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)))]}),_:2},1032,["mark","hideLabel","style","stepStyle","stepActiveStyle","labelStyle","labelActiveStyle"]))]})}),256))])):(0,i.createCommentVNode)("",!0),((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(t.dots,function(l,h){var g;return(0,i.openBlock)(),(0,i.createBlock)(p,(0,i.mergeProps)({ref_for:!0,ref:"dot-".concat(h),key:"dot-".concat(h),value:l.value,disabled:l.disabled,focus:l.focus,"dot-style":[l.style,l.disabled?l.disabledStyle:null,l.focus?l.focusStyle:null],tooltip:l.tooltip||t.tooltip,"tooltip-style":[t.tooltipStyle,l.tooltipStyle,l.disabled?l.tooltipDisabledStyle:null,l.focus?l.tooltipFocusStyle:null],"tooltip-formatter":Array.isArray(t.sliderTooltipFormatter)?t.sliderTooltipFormatter[h]:t.sliderTooltipFormatter,"tooltip-placement":t.tooltipDirections[h],style:[t.dotBaseStyle,(g={},b(g,t.mainDirection,"".concat(l.pos,"%")),b(g,"transition","".concat(t.mainDirection," ").concat(t.animateTime,"s")),g)],onDragStart:function(){return t.dragStart(h)},role:"slider","aria-valuenow":l.value,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-orientation":t.isHorizontal?"horizontal":"vertical",tabindex:"0",onFocus:function(){return t.focus(l,h)},onBlur:e[1]||(e[1]=function(){return t.blur()})},t.dotAttrs),{dot:(0,i.withCtx)(function(){return[(0,i.renderSlot)(t.$slots,"dot",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)))]}),tooltip:(0,i.withCtx)(function(){return[(0,i.renderSlot)(t.$slots,"tooltip",(0,i.normalizeProps)((0,i.guardReactiveProps)(l)))]}),_:2},1040,["value","disabled","focus","dot-style","tooltip","tooltip-style","tooltip-formatter","tooltip-placement","style","onDragStart","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","onFocus"])}),128))],4),(0,i.renderSlot)(t.$slots,"default",{value:t.getValue()})],16)}var $=["aria-valuetext"],F={class:"vue-slider-dot-tooltip-text"};function _(t,e,r,n,o,a){var s;return(0,i.openBlock)(),(0,i.createElementBlock)("div",{ref:"dot",class:(0,i.normalizeClass)(t.dotClasses),"aria-valuetext":(s=t.tooltipValue)===null||s===void 0?void 0:s.toString(),onMousedownPassive:e[0]||(e[0]=function(){return t.dragStart&&t.dragStart.apply(t,arguments)}),onTouchstartPassive:e[1]||(e[1]=function(){return t.dragStart&&t.dragStart.apply(t,arguments)})},[(0,i.renderSlot)(t.$slots,"dot",{},function(){return[(0,i.createElementVNode)("div",{class:(0,i.normalizeClass)(t.handleClasses),style:(0,i.normalizeStyle)(t.dotStyle)},null,6)]}),t.tooltip!=="none"?((0,i.openBlock)(),(0,i.createElementBlock)("div",{key:0,class:(0,i.normalizeClass)(t.tooltipClasses)},[(0,i.renderSlot)(t.$slots,"tooltip",{},function(){return[(0,i.createElementVNode)("div",{class:(0,i.normalizeClass)(t.tooltipInnerClasses),style:(0,i.normalizeStyle)(t.tooltipStyle)},[(0,i.createElementVNode)("span",F,(0,i.toDisplayString)(t.tooltipValue),1)],6)]})],2)):(0,i.createCommentVNode)("",!0)],42,$)}var q=(0,i.defineComponent)({name:"VueSliderDot",emits:["drag-start"],props:{value:{type:[String,Number],default:0},tooltip:{type:String,required:!0},tooltipPlacement:{type:String,validator:function(t){return["top","right","bottom","left"].indexOf(t)>-1},required:!0},tooltipFormatter:{type:[String,Function]},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dotStyle:{type:Object},tooltipStyle:{type:Object}},computed:{dotClasses:function(){return["vue-slider-dot",{"vue-slider-dot-hover":this.tooltip==="hover"||this.tooltip==="active","vue-slider-dot-disabled":this.disabled,"vue-slider-dot-focus":this.focus}]},handleClasses:function(){return["vue-slider-dot-handle",{"vue-slider-dot-handle-disabled":this.disabled,"vue-slider-dot-handle-focus":this.focus}]},tooltipClasses:function(){return["vue-slider-dot-tooltip",["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-show":this.showTooltip}]},tooltipInnerClasses:function(){return["vue-slider-dot-tooltip-inner",["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-inner-disabled":this.disabled,"vue-slider-dot-tooltip-inner-focus":this.focus}]},showTooltip:function(){switch(this.tooltip){case"always":return!0;case"none":return!1;case"focus":case"active":return!!this.focus;default:return!1}},tooltipValue:function(){return this.tooltipFormatter?typeof this.tooltipFormatter=="string"?this.tooltipFormatter.replace(/\{value\}/,String(this.value)):this.tooltipFormatter(this.value):this.value}},methods:{dragStart:function(){if(this.disabled)return!1;this.$emit("drag-start")}}}),C=y(831),V=(0,C.Z)(q,[["render",_]]);function X(t,e,r,n,o,a){return(0,i.openBlock)(),(0,i.createElementBlock)("div",{class:(0,i.normalizeClass)(t.marksClasses)},[(0,i.renderSlot)(t.$slots,"step",{},function(){return[(0,i.createElementVNode)("div",{class:(0,i.normalizeClass)(t.stepClasses),style:(0,i.normalizeStyle)([t.stepStyle,t.mark.style||{},t.mark.active&&t.stepActiveStyle?t.stepActiveStyle:{},t.mark.active&&t.mark.activeStyle?t.mark.activeStyle:{}])},null,6)]}),t.hideLabel?(0,i.createCommentVNode)("",!0):(0,i.renderSlot)(t.$slots,"label",{key:0},function(){return[(0,i.createElementVNode)("div",{class:(0,i.normalizeClass)(t.labelClasses),style:(0,i.normalizeStyle)([t.labelStyle,t.mark.labelStyle||{},t.mark.active&&t.labelActiveStyle?t.labelActiveStyle:{},t.mark.active&&t.mark.labelActiveStyle?t.mark.labelActiveStyle:{}]),onClick:e[0]||(e[0]=function(){return t.labelClickHandle&&t.labelClickHandle.apply(t,arguments)})},(0,i.toDisplayString)(t.mark.label),7)]})],2)}var U=(0,i.defineComponent)({name:"VueSliderMark",emits:["press-label"],props:{mark:{type:Object,required:!0},hideLabel:{type:Boolean},stepStyle:{type:Object,default:function(){return{}}},stepActiveStyle:{type:Object,default:function(){return{}}},labelStyle:{type:Object,default:function(){return{}}},labelActiveStyle:{type:Object,default:function(){return{}}}},computed:{marksClasses:function(){return["vue-slider-mark",{"vue-slider-mark-active":this.mark.active}]},stepClasses:function(){return["vue-slider-mark-step",{"vue-slider-mark-step-active":this.mark.active}]},labelClasses:function(){return["vue-slider-mark-label",{"vue-slider-mark-label-active":this.mark.active}]}},methods:{labelClickHandle:function(t){t.stopPropagation(),this.$emit("press-label",this.mark.pos)}}});const S=(0,C.Z)(U,[["render",X]]);var d,L=S,I=function(t){return typeof t=="number"?"".concat(t,"px"):t},pt=function(t){var e=document.documentElement,r=document.body,n=t.getBoundingClientRect(),o={y:n.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||r.clientTop||0),x:n.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||r.clientLeft||0)};return o},yt=function(t,e,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o="targetTouches"in t?t.targetTouches[0]:t,a=pt(e),s={x:o.pageX-a.x,y:o.pageY-a.y};return{x:r?e.offsetWidth*n-s.x:s.x,y:r?e.offsetHeight*n-s.y:s.y}};(function(t){t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"})(d||(d={}));var vt=function(t,e){if(e.hook){var r=e.hook(t);if(typeof r=="function")return r;if(!r)return null}switch(t.keyCode){case d.UP:return function(n){return e.direction==="ttb"?n-1:n+1};case d.RIGHT:return function(n){return e.direction==="rtl"?n-1:n+1};case d.DOWN:return function(n){return e.direction==="ttb"?n+1:n-1};case d.LEFT:return function(n){return e.direction==="rtl"?n+1:n-1};case d.END:return function(){return e.max};case d.HOME:return function(){return e.min};case d.PAGE_UP:return function(n){return n+10};case d.PAGE_DOWN:return function(n){return n-10};default:return null}};function gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function bt(t,e,r){return e&&rt(t.prototype,e),r&&rt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function kt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R,k,O=function(){function t(e){gt(this,t),kt(this,"num",void 0),this.num=e}return bt(t,[{key:"decimal",value:function(e,r){var n=this.num,o=this.getDecimalLen(n),a=this.getDecimalLen(e),s=0;switch(r){case"+":s=this.getExponent(o,a),this.num=(this.safeRoundUp(n,s)+this.safeRoundUp(e,s))/s;break;case"-":s=this.getExponent(o,a),this.num=(this.safeRoundUp(n,s)-this.safeRoundUp(e,s))/s;break;case"*":this.num=this.safeRoundUp(this.safeRoundUp(n,this.getExponent(o)),this.safeRoundUp(e,this.getExponent(a)))/this.getExponent(o+a);break;case"/":s=this.getExponent(o,a),this.num=this.safeRoundUp(n,s)/this.safeRoundUp(e,s);break;case"%":s=this.getExponent(o,a),this.num=this.safeRoundUp(n,s)%this.safeRoundUp(e,s)/s;break}return this}},{key:"plus",value:function(e){return this.decimal(e,"+")}},{key:"minus",value:function(e){return this.decimal(e,"-")}},{key:"multiply",value:function(e){return this.decimal(e,"*")}},{key:"divide",value:function(e){return this.decimal(e,"/")}},{key:"remainder",value:function(e){return this.decimal(e,"%")}},{key:"toNumber",value:function(){return this.num}},{key:"getDecimalLen",value:function(e){var r="".concat(e).split("e");return("".concat(r[0]).split(".")[1]||"").length-(r[1]?+r[1]:0)}},{key:"getExponent",value:function(e,r){return Math.pow(10,r!==void 0?Math.max(e,r):e)}},{key:"safeRoundUp",value:function(e,r){return Math.round(e*r)}}]),t}();function St(t,e){return Ot(t)||Pt(t,e)||it(t,e)||xt()}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,o,a=[],s=!0,p=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!(e&&a.length===e));s=!0);}catch(l){p=!0,o=l}finally{try{s||r.return==null||r.return()}finally{if(p)throw o}}return a}}function Ot(t){if(Array.isArray(t))return t}function nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function Dt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?nt(Object(r),!0).forEach(function(n){u(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function N(t){return Rt(t)||At(t)||it(t)||Et()}function Et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(t,e){if(t){if(typeof t=="string")return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(t,e):void 0}}function At(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rt(t){if(Array.isArray(t))return K(t)}function K(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Vt(t,e,r){return e&&ot(t.prototype,e),r&&ot(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}(function(t){t[t.VALUE=1]="VALUE",t[t.INTERVAL=2]="INTERVAL",t[t.MIN=3]="MIN",t[t.MAX=4]="MAX",t[t.ORDER=5]="ORDER"})(k||(k={}));var jt=(R={},u(R,k.VALUE,'The type of the "value" is illegal'),u(R,k.INTERVAL,'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'),u(R,k.MIN,'The "value" must be greater than or equal to the "min".'),u(R,k.MAX,'The "value" must be less than or equal to the "max".'),u(R,k.ORDER,'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'),R),Ct=function(){function t(e){wt(this,t),u(this,"dotsPos",[]),u(this,"dotsValue",[]),u(this,"data",void 0),u(this,"enableCross",void 0),u(this,"fixed",void 0),u(this,"max",void 0),u(this,"min",void 0),u(this,"interval",void 0),u(this,"minRange",void 0),u(this,"maxRange",void 0),u(this,"order",void 0),u(this,"marks",void 0),u(this,"included",void 0),u(this,"process",void 0),u(this,"adsorb",void 0),u(this,"dotOptions",void 0),u(this,"onError",void 0),u(this,"cacheRangeDir",{}),this.data=e.data,this.max=e.max,this.min=e.min,this.interval=e.interval,this.order=e.order,this.marks=e.marks,this.included=e.included,this.process=e.process,this.adsorb=e.adsorb,this.dotOptions=e.dotOptions,this.onError=e.onError,this.order?(this.minRange=e.minRange||0,this.maxRange=e.maxRange||0,this.enableCross=e.enableCross,this.fixed=e.fixed):((e.minRange||e.maxRange||!e.enableCross||e.fixed)&&this.emitError(k.ORDER),this.minRange=0,this.maxRange=0,this.enableCross=!0,this.fixed=!1),this.setValue(e.value)}return Vt(t,[{key:"setValue",value:function(e){this.setDotsValue(Array.isArray(e)?N(e):[e],!0)}},{key:"setDotsValue",value:function(e,r){this.dotsValue=e,r&&this.syncDotsPos()}},{key:"setDotsPos",value:function(e){var r=this,n=this.order?N(e).sort(function(o,a){return o-a}):e;this.dotsPos=n,this.setDotsValue(n.map(function(o){return r.getValueByPos(o)}),this.adsorb)}},{key:"getValueByPos",value:function(e){var r=this.parsePos(e);if(this.included){var n=100;this.markList.forEach(function(o){var a=Math.abs(o.pos-e);a<n&&(n=a,r=o.value)})}return r}},{key:"syncDotsPos",value:function(){var e=this;this.dotsPos=this.dotsValue.map(function(r){return e.parseValue(r)})}},{key:"markList",get:function(){var e=this;if(!this.marks)return[];var r=function(n,o){var a=e.parseValue(n);return Dt({pos:a,value:n,label:n,active:e.isActiveByPos(a)},o)};return this.marks===!0?this.getValues().map(function(n){return r(n)}):Object.prototype.toString.call(this.marks)==="[object Object]"?Object.keys(this.marks).sort(function(n,o){return+n-+o}).map(function(n){var o=e.marks[n];return r(n,typeof o!="string"?o:{label:o})}):Array.isArray(this.marks)?this.marks.map(function(n){return r(n)}):typeof this.marks=="function"?this.getValues().map(function(n){return{value:n,result:e.marks(n)}}).filter(function(n){var o=n.result;return!!o}).map(function(n){var o=n.value,a=n.result;return r(o,a)}):[]}},{key:"getRecentDot",value:function(e){var r=this.dotsPos.map(function(n){return Math.abs(n-e)});return r.indexOf(Math.min.apply(Math,N(r)))}},{key:"getIndexByValue",value:function(e){return this.data?this.data.indexOf(e):new O(+e).minus(this.min).divide(this.interval).toNumber()}},{key:"getValueByIndex",value:function(e){return e<0?e=0:e>this.total&&(e=this.total),this.data?this.data[e]:new O(e).multiply(this.interval).plus(this.min).toNumber()}},{key:"setDotPos",value:function(e,r){e=this.getValidPos(e,r).pos;var n=e-this.dotsPos[r];if(n){var o=new Array(this.dotsPos.length);this.fixed?o=this.getFixedChangePosArr(n,r):this.minRange||this.maxRange?o=this.getLimitRangeChangePosArr(e,n,r):o[r]=n,this.setDotsPos(this.dotsPos.map(function(a,s){return a+(o[s]||0)}))}}},{key:"getFixedChangePosArr",value:function(e,r){var n=this;return this.dotsPos.forEach(function(o,a){if(a!==r){var s=n.getValidPos(o+e,a),p=s.pos,l=s.inRange;l||(e=Math.min(Math.abs(p-o),Math.abs(e))*(e<0?-1:1))}}),this.dotsPos.map(function(o){return e})}},{key:"getLimitRangeChangePosArr",value:function(e,r,n){var o=this,a=[{index:n,changePos:r}],s=r;return[this.minRange,this.maxRange].forEach(function(p,l){if(!p)return!1;var h=l===0,g=r>0,z=0;z=h?g?1:-1:g?-1:1;for(var Wt=function(qt,Xt){var ht=Math.abs(qt-Xt);return h?ht<o.minRangeDir:ht>o.maxRangeDir},M=n+z,T=o.dotsPos[M],ct=e;o.isPos(T)&&Wt(T,ct);){var Gt=o.getValidPos(T+s,M),dt=Gt.pos;a.push({index:M,changePos:dt-T}),M+=z,ct=dt,T=o.dotsPos[M]}}),this.dotsPos.map(function(p,l){var h=a.filter(function(g){return g.index===l});return h.length?h[0].changePos:0})}},{key:"isPos",value:function(e){return typeof e=="number"}},{key:"getValidPos",value:function(e,r){var n=this.valuePosRange[r],o=!0;return e<n[0]?(e=n[0],o=!1):e>n[1]&&(e=n[1],o=!1),{pos:e,inRange:o}}},{key:"parseValue",value:function(e){if(this.data)e=this.data.indexOf(e);else if(typeof e=="number"||typeof e=="string"){if(e=+e,e<this.min)return this.emitError(k.MIN),0;if(e>this.max)return this.emitError(k.MAX),0;if(typeof e!="number"||e!==e)return this.emitError(k.VALUE),0;e=new O(e).minus(this.min).divide(this.interval).toNumber()}var r=new O(e).multiply(this.gap).toNumber();return r<0?0:r>100?100:r}},{key:"parsePos",value:function(e){var r=Math.round(e/this.gap);return this.getValueByIndex(r)}},{key:"isActiveByPos",value:function(e){return this.processArray.some(function(r){var n=St(r,2),o=n[0],a=n[1];return e>=o&&e<=a})}},{key:"getValues",value:function(){if(this.data)return this.data;for(var e=[],r=0;r<=this.total;r++)e.push(new O(r).multiply(this.interval).plus(this.min).toNumber());return e}},{key:"getRangeDir",value:function(e){return e?new O(e).divide(new O(this.data?this.data.length-1:this.max).minus(this.data?0:this.min).toNumber()).multiply(100).toNumber():100}},{key:"emitError",value:function(e){this.onError&&this.onError(e,jt[e])}},{key:"processArray",get:function(){if(this.process){if(typeof this.process=="function")return this.process(this.dotsPos);if(this.dotsPos.length===1)return[[0,this.dotsPos[0]]];if(this.dotsPos.length>1)return[[Math.min.apply(Math,N(this.dotsPos)),Math.max.apply(Math,N(this.dotsPos))]]}return[]}},{key:"total",get:function(){var e=0;return e=this.data?this.data.length-1:new O(this.max).minus(this.min).divide(this.interval).toNumber(),e-Math.floor(e)!==0?(this.emitError(k.INTERVAL),0):e}},{key:"gap",get:function(){return 100/this.total}},{key:"minRangeDir",get:function(){return this.cacheRangeDir[this.minRange]?this.cacheRangeDir[this.minRange]:this.cacheRangeDir[this.minRange]=this.getRangeDir(this.minRange)}},{key:"maxRangeDir",get:function(){return this.cacheRangeDir[this.maxRange]?this.cacheRangeDir[this.maxRange]:this.cacheRangeDir[this.maxRange]=this.getRangeDir(this.maxRange)}},{key:"getDotRange",value:function(e,r,n){if(!this.dotOptions)return n;var o=Array.isArray(this.dotOptions)?this.dotOptions[e]:this.dotOptions;return o&&o[r]!==void 0?this.parseValue(o[r]):n}},{key:"valuePosRange",get:function(){var e=this,r=this.dotsPos,n=[];return r.forEach(function(o,a){n.push([Math.max(e.minRange?e.minRangeDir*a:0,e.enableCross?0:r[a-1]||0,e.getDotRange(a,"min",0)),Math.min(e.minRange?100-e.minRangeDir*(r.length-1-a):100,e.enableCross?100:r[a+1]||100,e.getDotRange(a,"max",100))])}),n}},{key:"dotsIndex",get:function(){var e=this;return this.dotsValue.map(function(r){return e.getIndexByValue(r)})}}]),t}();function Bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function at(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Lt(t,e,r){return e&&at(t.prototype,e),r&&at(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var It=function(){function t(e){Bt(this,t),st(this,"map",void 0),st(this,"states",0),this.map=e}return Lt(t,[{key:"add",value:function(e){this.states|=e}},{key:"delete",value:function(e){this.states&=~e}},{key:"toggle",value:function(e){this.has(e)?this.delete(e):this.add(e)}},{key:"has",value:function(e){return!!(this.states&e)}}]),t}();function Z(t){return Mt(t)||zt(t)||ut(t)||Nt()}function Nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mt(t){if(Array.isArray(t))return Q(t)}function Y(t){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(t)}function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?lt(Object(r),!0).forEach(function(n){D(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function J(t,e){return $t(t)||Ht(t,e)||ut(t,e)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(t,e){if(t){if(typeof t=="string")return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}function Q(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ht(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,o,a=[],s=!0,p=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!(e&&a.length===e));s=!0);}catch(l){p=!0,o=l}finally{try{s||r.return==null||r.return()}finally{if(p)throw o}}return a}}function $t(t){if(Array.isArray(t))return t}var m={None:0,Drag:2,Focus:4},tt=4,Ft=(0,i.defineComponent)({name:"VueSlider",components:{VueSliderDot:V,VueSliderMark:L},emits:["change","drag-start","dragging","drag-end","error","update:modelValue"],data:function(){return{control:null,states:new It(m),scale:1,focusDotIndex:0}},props:{modelValue:{type:[Number,String,Array],default:0},silent:{type:Boolean,default:!1},direction:{type:String,default:"ltr",validator:function(t){return["ltr","rtl","ttb","btt"].indexOf(t)>-1}},width:{type:[Number,String]},height:{type:[Number,String]},dotSize:{type:[Number,Array],default:14},contained:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},dragOnClick:{type:Boolean,default:!1},duration:{type:Number,default:.5},data:{type:[Object,Array]},dataValue:{type:String,default:"value"},dataLabel:{type:String,default:"label"},lazy:{type:Boolean,default:!1},tooltip:{type:String,default:"active",validator:function(t){return["none","always","focus","hover","active"].indexOf(t)>-1}},tooltipPlacement:{type:[String,Array],validator:function(t){return(Array.isArray(t)?t:[t]).every(function(e){return["top","right","bottom","left"].indexOf(e)>-1})}},tooltipFormatter:{type:[String,Array,Function]},useKeyboard:{type:Boolean,default:!0},keydownHook:{type:Function},enableCross:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},order:{type:Boolean,default:!0},minRange:{type:Number},maxRange:{type:Number},marks:{type:[Boolean,Object,Array,Function],default:!1},process:{type:[Boolean,Function],default:!0},zoom:{type:Number},included:{type:Boolean},adsorb:{type:Boolean},hideLabel:{type:Boolean},dotOptions:{type:[Object,Array]},dotAttrs:{type:Object},railStyle:{type:Object},processStyle:{type:Object},dotStyle:{type:Object},tooltipStyle:{type:Object},stepStyle:{type:Object},stepActiveStyle:{type:Object},labelStyle:{type:Object},labelActiveStyle:{type:Object}},computed:{isHorizontal:function(){return this.direction==="ltr"||this.direction==="rtl"},isReverse:function(){return this.direction==="rtl"||this.direction==="btt"},tailSize:function(){return I((this.isHorizontal?this.height:this.width)||tt)},containerClasses:function(){return["vue-slider",["vue-slider-".concat(this.direction)],{"vue-slider-disabled":this.disabled}]},containerStyles:function(){var t=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],e=J(t,2),r=e[0],n=e[1],o=this.width?I(this.width):this.isHorizontal?"auto":I(tt),a=this.height?I(this.height):this.isHorizontal?I(tt):"auto";return{padding:this.contained?"".concat(n/2,"px ").concat(r/2,"px"):this.isHorizontal?"".concat(n/2,"px 0"):"0 ".concat(r/2,"px"),width:o,height:a}},processArray:function(){var t=this;return this.control.processArray.map(function(e,r){var n,o=J(e,3),a=o[0],s=o[1],p=o[2];if(a>s){var l=[s,a];a=l[0],s=l[1]}var h=t.isHorizontal?"width":"height";return{start:a,end:s,index:r,style:W(W((n={},D(n,t.isHorizontal?"height":"width","100%"),D(n,t.isHorizontal?"top":"left",0),D(n,t.mainDirection,"".concat(a,"%")),D(n,h,"".concat(s-a,"%")),D(n,"transitionProperty","".concat(h,",").concat(t.mainDirection)),D(n,"transitionDuration","".concat(t.animateTime,"s")),n),t.processStyle),p)}})},dotBaseStyle:function(){var t,e=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],r=J(e,2),n=r[0],o=r[1];return t=this.isHorizontal?D({transform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),WebkitTransform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),top:"50%"},this.direction==="ltr"?"left":"right","0"):D({transform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),WebkitTransform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),left:"50%"},this.direction==="btt"?"bottom":"top","0"),W({width:"".concat(n,"px"),height:"".concat(o,"px")},t)},mainDirection:function(){switch(this.direction){case"ltr":return"left";case"rtl":return"right";case"btt":return"bottom";case"ttb":return"top";default:return"left"}},tooltipDirections:function(){var t=this.tooltipPlacement||(this.isHorizontal?"top":"left");return Array.isArray(t)?t:this.dots.map(function(){return t})},dots:function(){var t=this;return this.control.dotsPos.map(function(e,r){return W({pos:e,index:r,value:t.control.dotsValue[r],focus:t.states.has(m.Focus)&&t.focusDotIndex===r,disabled:t.disabled,style:t.dotStyle},(Array.isArray(t.dotOptions)?t.dotOptions[r]:t.dotOptions)||{})})},animateTime:function(){return this.states.has(m.Drag)?0:this.duration},canSort:function(){return this.order&&!this.minRange&&!this.maxRange&&!this.fixed&&this.enableCross},sliderData:function(){var t=this;return this.isObjectArrayData(this.data)?this.data.map(function(e){return e[t.dataValue]}):this.isObjectData(this.data)?Object.keys(this.data):this.data},sliderMarks:function(){var t=this;return this.marks?this.marks:this.isObjectArrayData(this.data)?function(e){var r={label:e};return t.data.some(function(n){return n[t.dataValue]===e&&(r.label=n[t.dataLabel],!0)}),r}:this.isObjectData(this.data)?this.data:void 0},sliderTooltipFormatter:function(){var t=this;if(this.tooltipFormatter)return this.tooltipFormatter;if(this.isObjectArrayData(this.data))return function(r){var n=""+r;return t.data.some(function(o){return o[t.dataValue]===r&&(n=o[t.dataLabel],!0)}),n};if(this.isObjectData(this.data)){var e=this.data;return function(r){return e[r]}}},isNotSync:function(){var t=this.control.dotsValue;return Array.isArray(this.modelValue)?this.modelValue.length!==t.length||this.modelValue.some(function(e,r){return e!==t[r]}):this.modelValue!==t[0]},dragRange:function(){var t=this.dots[this.focusDotIndex-1],e=this.dots[this.focusDotIndex+1];return[t?t.pos:-1/0,e?e.pos:1/0]}},watch:{modelValue:function(){this.control&&!this.states.has(m.Drag)&&this.isNotSync&&this.control.setValue(this.modelValue)}},methods:{isObjectData:function(t){return!!t&&Object.prototype.toString.call(t)==="[object Object]"},isObjectArrayData:function(t){return!!t&&Array.isArray(t)&&t.length>0&&Y(t[0])==="object"},bindEvent:function(){document.addEventListener("touchmove",this.dragMove,{passive:!1}),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousedown",this.blurHandle),document.addEventListener("mousemove",this.dragMove),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("mouseleave",this.dragEnd),document.addEventListener("keydown",this.keydownHandle)},unbindEvent:function(){document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousedown",this.blurHandle),document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("mouseleave",this.dragEnd),document.removeEventListener("keydown",this.keydownHandle)},setScale:function(){this.scale=new O(Math.floor(this.isHorizontal?this.$el.offsetWidth:this.$el.offsetHeight)).multiply(this.zoom||1).divide(100).toNumber()},initControl:function(){var t=this;this.control=new Ct({value:this.modelValue,data:this.sliderData,enableCross:this.enableCross,fixed:this.fixed,max:this.max,min:this.min,interval:this.interval,minRange:this.minRange,maxRange:this.maxRange,order:this.order,marks:this.sliderMarks,included:this.included,process:this.process,adsorb:this.adsorb,dotOptions:this.dotOptions,onError:this.emitError}),["data","enableCross","fixed","max","min","interval","minRange","maxRange","order","marks","process","adsorb","included","dotOptions"].forEach(function(e){t.$watch(e,function(r){if(e==="data"&&Array.isArray(t.control.data)&&Array.isArray(r)&&t.control.data.length===r.length&&r.every(function(n,o){return n===t.control.data[o]}))return!1;switch(e){case"data":case"dataLabel":case"dataValue":t.control.data=t.sliderData;break;case"mark":t.control.marks=t.sliderMarks;break;default:t.control[e]=r}["data","max","min","interval"].indexOf(e)>-1&&t.control.syncDotsPos()})})},syncValueByPos:function(){var t=this.control.dotsValue;if(this.isDiff(t,Array.isArray(this.modelValue)?this.modelValue:[this.modelValue])){var e=t.length===1?t[0]:Z(t);this.$emit("change",e,this.focusDotIndex),this.$emit("update:modelValue",e)}},isDiff:function(t,e){return t.length!==e.length||t.some(function(r,n){return r!==e[n]})},emitError:function(t,e){this.silent||console.error("[VueSlider error]: ".concat(e)),this.$emit("error",t,e)},dragStartOnProcess:function(t){if(this.dragOnClick){this.setScale();var e=this.getPosByEvent(t),r=this.control.getRecentDot(e);if(this.dots[r].disabled)return;this.dragStart(r),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos()}},dragStart:function(t){this.focusDotIndex=t,this.setScale(),this.states.add(m.Drag),this.states.add(m.Focus),this.$emit("drag-start",this.focusDotIndex)},dragMove:function(t){if(!this.states.has(m.Drag))return!1;t.preventDefault();var e=this.getPosByEvent(t);this.isCrossDot(e),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos();var r=this.control.dotsValue;this.$emit("dragging",r.length===1?r[0]:Z(r),this.focusDotIndex)},isCrossDot:function(t){if(this.canSort){var e=this.focusDotIndex,r=t;if(r>this.dragRange[1]?(r=this.dragRange[1],this.focusDotIndex++):r<this.dragRange[0]&&(r=this.dragRange[0],this.focusDotIndex--),e!==this.focusDotIndex){var n=this.$refs["dot-".concat(this.focusDotIndex)];n&&n.$el&&n.$el.focus(),this.control.setDotPos(r,e)}}},dragEnd:function(t){var e=this;if(!this.states.has(m.Drag))return!1;setTimeout(function(){e.lazy&&e.syncValueByPos(),e.included&&e.isNotSync?e.control.setValue(e.modelValue):e.control.syncDotsPos(),e.states.delete(m.Drag),e.useKeyboard&&!("targetTouches"in t)||e.states.delete(m.Focus),e.$emit("drag-end",e.focusDotIndex)})},blurHandle:function(t){if(!this.states.has(m.Focus)||!this.$refs.container||this.$refs.container.contains(t.target))return!1;this.states.delete(m.Focus)},clickHandle:function(t){if(!this.clickable||this.disabled)return!1;if(!this.states.has(m.Drag)){this.setScale();var e=this.getPosByEvent(t);this.setValueByPos(e)}},focus:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;t.disabled||(this.states.add(m.Focus),this.focusDotIndex=e)},blur:function(){this.states.delete(m.Focus)},getValue:function(){var t=this.control.dotsValue;return t.length===1?t[0]:t},getIndex:function(){var t=this.control.dotsIndex;return t.length===1?t[0]:t},setValue:function(t){this.control.setValue(Array.isArray(t)?Z(t):[t]),this.syncValueByPos()},setIndex:function(t){var e=this,r=Array.isArray(t)?t.map(function(n){return e.control.getValueByIndex(n)}):this.control.getValueByIndex(t);this.setValue(r)},setValueByPos:function(t){var e=this,r=this.control.getRecentDot(t);if(this.disabled||this.dots[r].disabled)return!1;this.focusDotIndex=r,this.control.setDotPos(t,r),this.syncValueByPos(),this.useKeyboard&&this.states.add(m.Focus),setTimeout(function(){e.included&&e.isNotSync?e.control.setValue(e.modelValue):e.control.syncDotsPos()})},keydownHandle:function(t){var e=this;if(!this.useKeyboard||!this.states.has(m.Focus))return!1;var r=this.included&&this.marks,n=vt(t,{direction:this.direction,max:r?this.control.markList.length-1:this.control.total,min:0,hook:this.keydownHook});if(n){t.preventDefault();var o=-1,a=0;r?(this.control.markList.some(function(s,p){return s.value===e.control.dotsValue[e.focusDotIndex]&&(o=n(p),!0)}),o<0?o=0:o>this.control.markList.length-1&&(o=this.control.markList.length-1),a=this.control.markList[o].pos):(o=n(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])),a=this.control.parseValue(this.control.getValueByIndex(o))),this.isCrossDot(a),this.control.setDotPos(a,this.focusDotIndex),this.syncValueByPos()}},getPosByEvent:function(t){return yt(t,this.$el,this.isReverse,this.zoom)[this.isHorizontal?"x":"y"]/this.scale},renderSlot:function(t,e,r){var n=this.$slots[t];return n?n(e):r}},created:function(){this.initControl()},mounted:function(){this.bindEvent()},beforeUnmount:function(){this.unbindEvent()}}),et=(0,C.Z)(Ft,[["render",P]]);et.VueSliderMark=L,et.VueSliderDot=V;var _t=et,Ut=_t}(),H=H.default,H}()})})(ft);var mt=ft.exports;const ee=Zt(mt),oe=Qt({__proto__:null,default:ee},[mt]);export{oe as v};
�هنگ و اندیشه</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-art">هنر</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-science">دانش و فناوری</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-health">سلامت</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-Religion-Thought">دین و آیین</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-society">جامعه</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-economic">اقتصاد</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-sport">ورزش</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-Politic">سیاست</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-international">بین الملل</a>
                            </li>
                            <li class="">
                                <a href="/service/video/film-provinces">استان ها</a>
                            </li>
                    </ul>
                </li>
                    <li class=" has-child">
                    <a href="/service/magazine">مجله مهر</a>
                    <ul class="submenu">
                            <li class="">
                                <a href="/archive?tp=384">عناوین اخبار</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine">مجله مهر</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/infographic">اینفو مهر</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/NewspaperKiosks">دکه روزنامه</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/OtherMagazine">دیگر رسانه‌ها</a>
                            </li>
                    </ul>
                </li>
                    <li class="">
                    <a href="/archive">عناوین اخبار</a>
                    <ul class="submenu">
                    </ul>
                </li>
        </ul>
    </nav>
    </div>
</header>
    <main class="mainbody">
            <div class="container">
                <div class="row">
    <div class="col-12 col-lg-9 main-content">
        <div class="row">
            <div class="col-12 col-sm-8">
    <article id="item" class="box item full-img">
        <div class="print-header" style="display: none;">
            <div class="logo">
                <img src="/resources/theme/mehrnews/img/logo_invert.png" alt="خبرگزاری مهر | اخبار ایران و جهان | Mehr News Agency" />
            </div>
            <div class="meta">
                <div class="barcode">
                    <img src="/barcode?text=https%3A%2F%2Fmehrnews.com%2Fx349jN&amp;c=c824b5afb72576c484216b5a750ce60e236afcf72196fe2fc587b75234fcb07ad5495cdb4d4c1a345133744568312b30" alt="https://mehrnews.com/x349jN" />
                    <ul>
                        <li class="url">https://mehrnews.com/x349jN</li>
                        
                        <li class="date">۱۹ بهمن ۱۴۰۲، ۹:۳۰</li>
                        <li class="id">کد خبر <span>6017630</span></li>
                        <li>
                            <ol class="breadcrumb">
                                <li><a target="_blank" rel="index" href="/service/HiTech">دانش و فناوری</a></li>
                                    <li><a href="/service/HiTech/NewTechnologies" rel="index" target="_blank">فناوری های نوین</a>
                                    </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="item-header">
                <div class="item-nav row">
                    <div class="col-6 col-sm-4">
                        <ol class="breadcrumb">
                            <li><a target="_blank" rel="index" href="/service/HiTech">دانش و فناوری</a></li>
                                <li><a href="/service/HiTech/NewTechnologies" rel="index" target="_blank">فناوری های نوین</a>
                                </li>
                        </ol>
                    </div>
                    <div class="col-6 col-sm-4 item-date">
                        <span>۱۹ بهمن ۱۴۰۲، ۹:۳۰</span>
                        
                    </div>
                    <div class="d-none d-sm-block col-4">
                        <ul class="header-sharing">
                            <li><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-facebook"></i></a></li>
                            <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-twitter"></i></a></li>
                            <li><a href="tg://msg_url?url=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-telegram"></i></a></li>
                            <li class="wa"><a href="whatsapp://send?text=https%3A%2F%2Fmehrnews.com%2Fx349jN" target="_blank"><i class="icon-whatsapp"></i></a></li>
                            
                            <li class="">
                                <a href="#" onclick="window.print(); return false;"><i class="icon-print"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="item-title">
                
                <h4 class="subtitle kicker">مرکز پژوهش های مجلس بررسی کرد؛</h4>
                
                <h1 class="title">پیش‌بینی روندهای آینده فناوری تا ۲۰ سال آینده</h1>
            </div>
        </div><div class="item-summary">
                <figure class="item-img">
                    <img src="https://media.mehrnews.com/d/2023/10/05/3/4686446.jpg?ts=1696493500588" alt="پیش‌بینی روندهای آینده فناوری تا ۲۰ سال آینده" itemprop="image" class="" title="پیش‌بینی روندهای آینده فناوری تا ۲۰ سال آینده" width="100%" height="400" />
                </figure>
            <p class="summary introtext" itemprop="description">براساس پیش بینی موسسات معتبر بین‌المللی، فناوری های دیجیتالی، فناوری های زیستی و فناوری های مرتبط با انرژی و حمل و نقل هوشمند مهمترین روندهای آینده فناوری تا ۲۰ سال آینده هستند.</p></div>
        <div class="item-body">
            <div itemprop="articleBody" class="item-text"><p>به گزارش<a class="saba-backlink" href="https://www.mehrnews.com"> خبرنگار مهر</a>، مرکز پژوهش‌های مجلس شورای اسلامی در گزارشی رصد تحولات فناوری در آینده از نگاه مؤسسات بین المللی (مکنزی، گارتنر، امپریال کالج لندن و مجمع جهانی اقتصاد) را بررسی و در آن به روندهای آتی فناوری و دسته بندی کلان روندهای فناوری برگرفته از پیش بینی‌های مؤسسات معتبر بین المللی در بیست سال آینده اشاره کرده است.</p> 
<p>نتایج بررسی کلان روندهای آتی فناوری پیش بینی شده توسط چهار مؤسسه معتبر بین المللی مکنزی، گارتنر، امپریال کالج لندن و مجمع جهانی اقتصاد نشان می‌دهد فناوری‌های دیجیتالی با تمرکز بر هوش مصنوعی و فناوری‌های کوانتومی، فناوری‌های زیستی و فناوری‌های مرتبط با انرژی و حمل و نقل هوشمند، تحول قابل توجهی در حوزه‌های مربوطه ایجاد خواهد کرد.</p> 
<p><span style="color:#000080"><strong>فناوری‌های پیش بینی شده توسط شرکت مکنزی</strong></span></p> 
<p>این شرکت از طریق بررسی اختراعات، پژوهش‌ها، اخبار، جست وجوهای پتنت در گوگل، رصد میزان سرمایه گذاری ها و استعدادهای مورد نیاز هر حوزه، کلان روند حوزه فناوری را در گزارش اخیر خود شناسایی کرده که در چهار دسته؛ فناوری‌های دیجیتال، فناوری‌های زیستی، فناوری‌های هوشمندسازی صنایع (با تمرکز بر حمل و نقل) و فناوری‌های مرتبط با انرژی قابل دسته بندی هستند.</p> 
<p><span style="color:#000080"><strong>فناوری‌های مصداقی هر دسته براساس پیش بینی مکنزی به شرح زیر است:</strong></span></p> 
<table border="1" cellpadding="1" cellspacing="1"> 
 <tbody> 
  <tr> 
   <td><strong>دسته اصلی فناوری</strong></td> 
   <td><strong>زیردسته فناوری</strong></td> 
   <td><strong>کلان روندها</strong></td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="3">انواع فناوری‌های دیجیتالی</td> 
   <td colspan="1" rowspan="3">فناوری‌های ارتباطات و فناوری اطلاعات</td> 
   <td>اتصال پیشرفته (رایانش ابری- اینترنت اشیا- نسل پنجم ارتباطات)</td> 
  </tr> 
  <tr> 
   <td>هوش مصنوعی کاربردی</td> 
  </tr> 
  <tr> 
   <td>ابر و محاسبات لبه</td> 
  </tr> 
  <tr> 
   <td>فناوری‌های زیستی</td> 
   <td>فناوری‌های زیستی</td> 
   <td>آینده مهندسی زیستی (کشاورزی و غذا - سلامت و پزشکی)</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="3">انواع فناوری‌های دیجیتالی</td> 
   <td colspan="1" rowspan="3">فناوری‌های دیجیتالی</td> 
   <td>معماری‌ها و هویت دیجیتالی قابل اعتماد</td> 
  </tr> 
  <tr> 
   <td>توسعه نسل جدید نرم افزار</td> 
  </tr> 
  <tr> 
   <td>صنعتی سازی یادگیری ماشینی</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="2">فناوری‌های هوشمندسازی صنایع</td> 
   <td>فناوری‌های فضا</td> 
   <td>آینده فناوری‌های فضا</td> 
  </tr> 
  <tr> 
   <td>فناوری‌های حمل و نقل</td> 
   <td>جابه‌جایی (خودروهای خودران، خودروهای برقی)</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="3">فناوری‌های مرتبط با انرژی</td> 
   <td>فناوری‌های انرژی</td> 
   <td>برقی سازی و تجدیدپذیرها</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="2">فناوری‌های نوپدید<br> انرژی</td> 
   <td>فناوری‌های مرتبط با تغییرات جوی و آب و هوا</td> 
  </tr> 
  <tr> 
   <td>فراتر از برقی سازی و تجدیدپذیر</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="4">انواع فناوری‌های دیجیتالی</td> 
   <td colspan="1" rowspan="4">فناوری‌های نوپدید دیجیتالی</td> 
   <td>هوش مصنوعی مولد</td> 
  </tr> 
  <tr> 
   <td>وب ۳</td> 
  </tr> 
  <tr> 
   <td>فناوری‌های واقعیت فراگیر</td> 
  </tr> 
  <tr> 
   <td>فناوری‌های کوانتومی</td> 
  </tr> 
 </tbody> 
</table> 
<p>ارزش اقتصادی قابلیت‌های هوش مصنوعی کاربردی در پژوهش‌های مکنزی، بین ۱۷-۲۶ تریلیون دلار تخمین زده شده و سهم شرکت‌هایی که به دنبال این ارزش اقتصادی هستند، رو به افزایش است.</p> 
<p>در بررسی سالیانه مکنزی متمرکز بر هوش مصنوعی نشان داده شده که سهم سازمان‌هایی که هوش مصنوعی را پیاده سازی کرده‌اند در سال ۲۰۱۷ معادل ۲۰ درصد بود، اما این میزان در سال ۲۰۲۲ به بیش از دو برابر، به ۵۰ درصد رسیده است.</p> 
<p>ازاین رو بالاترین نرخ پذیرش طبق بررسی‌های مکنزی در زمینه هوش مصنوعی کاربردی بوده (امتیاز ۴ از ۵) و از سال ۲۰۱۸ تا ۲۰۲۲ هوش مصنوعی کاربردی در گزارش روندهای فناوری توسط این مؤسسه، بالاترین امتیاز نوآوری را در میان تمام رشته‌های مورد مطالعه از آن خود کرده است.</p> 
<p>براساس گزارش‌های مکنزی، قابلیت رسوخ فناوری‌های هوش مصنوعی در همه حوزه‌ها از قبیل هوافضا و صنایع دفاعی، کشاورزی، خودروسازی و مونتاژ، هواپیمایی، سفر و تدارکات، مواد شیمیایی، ساخت و ساز و مصالح ساختمانی، بسته بندی کالاهای مصرفی، آموزش، برق و قدرت، گاز طبیعی و تجهیزات آن، خدمات مالی، سیستم‌های خدمات بهداشت و درمان، فناوری اطلاعات و الکترونیک، رسانه و سرگرمی، فلزات و معدن، نفت و گاز، داروسازی و محصولات پزشکی، بخشهای عمومی و اجتماعی، باعث بالا رفتن امتیاز نرخ پذیرش آن شده است.</p> 
<p>فناوری‌های زیستی، فضا، حمل و نقل و انرژی نیز در کنار فناوری‌های دیجیتالی جزء روندهای آتی ساز شناسایی شده‌اند.</p> 
<p><span style="color:#000080"><strong>امپریال کالج لندن</strong></span></p> 
<p>مؤسسه امپریال کالج لندن در رصد و پیش بینی کلان روندهای حوزه فناوری‌های نو قدمت طولانی دارد. امپریال کالج یک بازه زمانی بیست ساله را برای روندهای فناورانه در نظر گرفته و برای این بازه زمانی، مبتنی بر ترکیب دو مؤلفه اصلی و پیشران شامل نقش الگوهای محاسباتی و انرژی بر آینده فناوری‌ها و فناوری‌های مرتبط با انرژی، سناریوهایی را در نظر می‌گیرد و براساس آن روند فناوری‌های آتی را پیش بینی می‌کند.</p> 
<p><span style="color:#000080"><strong>پیش بینی‌های امپریال کالج درخصوص روندهای فناوری تا سال ۲۰۴۱</strong></span></p> 
<table border="1" cellpadding="1" cellspacing="1"> 
 <tbody> 
  <tr> 
   <td colspan="1" rowspan="3"><strong>دسته فناوری / سناریو</strong></td> 
   <td>همگرایی</td> 
   <td>خودگردانی</td> 
   <td>کوانتوم</td> 
   <td>ناشناختگی</td> 
  </tr> 
  <tr> 
   <td colspan="2" rowspan="1">محاسبات کلاسیک ابر و هوش مصنوعی</td> 
   <td colspan="2" rowspan="1">محاسبات جدید مبتنی بر فناوری‌های کوانتومی و همگرایی با فناوری‌های هوش مصنوعی</td> 
  </tr> 
  <tr> 
   <td>انرژی‌های مرسوم</td> 
   <td>انرژی‌های نوین</td> 
   <td>انرژی‌های مرسوم</td> 
   <td>انرژی‌های نوین</td> 
  </tr> 
  <tr> 
   <td><strong>فناوری‌های دیجیتالی</strong></td> 
   <td colspan="2" rowspan="1">ارتباطات فراتر از نسل پنجم، معماری‌های نوین الکترونیکی، لبه فراگیر هوش مصنوعی، اینترنت داده‌های کوچک، هوش ازدحام، شبکه‌های خودنگهدارنده (SSN)</td> 
   <td colspan="2" rowspan="1">ارتباطات غیرقابل هک، شبیهسازی بازار مالی، رمزنگاری کوانتومی، رایانه‌های کوانتومی، اطلاعات کوانتومی، ابر کوانتومی، سیستم‌های جدید جی پی اس، شبکه‌های موبایلی کوانتومی، محاسبات توزیع کوانتومی، اینترنت کوانتومی، رایانه‌های کوانتومی، دوقلوهای دیجیتالی زمین، سنجش سیاره‌ای، مدلسازی شبکه هوشمند زمین</td> 
  </tr> 
  <tr> 
   <td><strong>فناوری‌های زیستی</strong></td> 
   <td colspan="2" rowspan="1">درمان بدون دارو، اینترنت بیونانو اشیا، سیستم‌های بی سی آی و پزشکی بیوالکترونیک، الکترونیک بدون سم، محیط اتری، محیط‌های شناختی و سطوح، واکنش‌های شیمیایی جدید و بهینه، کشف مواد شیمیایی جدید کشاورزی، طراحی آزمایشات فراتر از توان بشر، روش دایال-آپ مولکولی در ساخت داروها (سنتز داروها با فرایندهای جدید،) علم برتر، بارگذاری شناختی آزمون و خطاهای تجربی، ماشین‌های بیولوژیکی برتر</td> 
   <td colspan="2" rowspan="1"> <p>توسعه دارویی، کود پاک، توزیع منابع در مقیاس سیاره‌ای، زمین به عنوان یک ابرساختار به هم‌پیوسته زنده و حسگر</p> </td> 
  </tr> 
  <tr> 
   <td><strong>فناوری‌های هوشمندسازی صنایع</strong></td> 
   <td colspan="2" rowspan="1">دستگاه‌های بدون باتری، بدون سیم و بدون نیاز به نگهداری، زنجیره تأمین کاملاً خودکار نسل پنجم صنعتی، نسل پنج صنعتی، کاهش مقیاس زمانی اکتشاف و حقیقی سازی مواد جدید</td> 
   <td colspan="2" rowspan="1">پهپاد کوانتومی، کشف مواد الکترونیکی جدید، طراحی باتری‌های برتر، کنترل ترافیک</td> 
  </tr> 
  <tr> 
   <td><strong>فناوری‌های مرتبط با انرژی</strong></td> 
   <td colspan="2" rowspan="1">انتقال برق بی‌سیم، انتقال و تقسیم انرژی میان اشیا، ادغام شبکه‌های انرژی با شبکه‌های مخابراتی (تلکام،) همگرایی محاسباتی، حس گری، بومی سازی و انتقال انرژی، کوچکسازی (هایپر مینیاتوری) دستگاه‌های برقی براساس قانون مور، شیمی و علم بهینه مواد، پایدار و کارآمدی انرژی</td> 
   <td colspan="2" rowspan="1">بهینه سازی شبکه‌های بزرگ مقیاس انرژی، انرژی همجوشی، انرژی‌های پایدار و پاک برای محاسبات جدید</td> 
  </tr> 
 </tbody> 
</table> 
<p>به این ترتیب براساس سناریوهای امپریال کالج چنین پیش بینی می‌شود که در حوزه انرژی، اشتراک گذاری بی حد و مرز انرژی تا سال ۲۰۴۱ رخ خواهد داد.</p> 
<p>انرژی در شبکه‌های هوشمند به هم پیوسته در سطح جهان توزیع می‌شود. سیم‌های بلند برق برای اتصال کشورها به یک شبکه برق مشترک ساخته می‌شود. شبکه‌های انرژی بازطراحی می‌شوند و از توزیع یک طرفه به مدل بهینه‌تر جریان انرژی دوطرفه (ورودی و خروجی) مبدل خواهد شد. این تغییر شبکه، تقاضای برق در زمان پیک و کمبود برق را تأمین می‌کند.</p> 
<p>در حوزه محاسباتی نیز محاسبات یکبار مصرف و انرژی زیادی توسط فناوری به جهان تحمیل می‌شود. در بیست سال آتی محاسبات به بلوغ خود می‌رسد و محاسبات کوانتومی به پیشرفت‌های زیادی نائل آمده و رآکتورهای همجوشی پایداری بیشتری برای تأمین انرژی خواهند داشت.</p> 
<p>در واقع، فشارهای ناشی از تغییرات آب و هوا باعث ایجاد محرکی می‌شود تا شرکت‌های خصوصی برای توسعه انرژی همجوشی سرمایه گذاری کرده و شرایطی را ایجاد کنند تا این انرژی در سراسر جهان تجاری شود. در این زمان است که فناوری آن ارزان و قابل رقابت با فناوری‌های انرژی‌های تجدیدپذیر می‌شود. در این دوران انرژی نامحدود و ایمن برای کل جهان مهیاست، اما آلایندگی ناشی از تولید انرژی از گذشته باقی مانده است.</p> 
<p>در کنار توسعه روش‌های محاسباتی کلاسیک و جدید و همگرایی فناوری‌های مرتبط، قدرت هوش مصنوعی نیز به شدت افزایش خواهد یافت.</p> 
<p><span style="color:#000080"><strong>فناوری‌های نوپدید از دیدگاه مجمع جهانی اقتصاد (WEF)</strong></span></p> 
<p>مجمع جهانی اقتصاد برای گزینش ۱۰ فناوری نوپدید از میان ۹۵ فناوری معتبر شناسایی شده و برگزاری جلسات تخصصی هر حوزه از ژانویه تا فوریه ۲۰۲۳ به دسته بندی و رتبه بندی فناوری‌ها پرداختند. در این گزارش از یافته‌های پژوهشی ۹۰ متخصص از ۲۰ کشور جهان بهره گرفته شده است.</p> 
<p><span style="color:#000080"><strong>دسته بندی کلان روندهای مجمع جهانی اقتصاد</strong></span></p> 
<table border="1" cellpadding="1" cellspacing="1"> 
 <tbody> 
  <tr> 
   <td><strong>دسته فناوری در کلان روندها</strong></td> 
   <td><strong>مصادیق فناوری</strong></td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="3">فناوری‌های دیجیتالی</td> 
   <td>هوش مصنوعی</td> 
  </tr> 
  <tr> 
   <td>هوش مصنوعی مولد</td> 
  </tr> 
  <tr> 
   <td>محاسبات پایدار</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="7">فناوری‌های زیستی (پزشکی-سلامت-کشاورزی)</td> 
   <td>باتری‌های انعطاف پذیر و تاشو</td> 
  </tr> 
  <tr> 
   <td>فاژهای طراح</td> 
  </tr> 
  <tr> 
   <td>متاورس ویژه سلامت روان</td> 
  </tr> 
  <tr> 
   <td>حسگرهای پوشش گیاهی</td> 
  </tr> 
  <tr> 
   <td>اومیکس فضایی</td> 
  </tr> 
  <tr> 
   <td>مراقبت‌های بهداشتی و درمانی مبتنی بر هوش مصنوعی</td> 
  </tr> 
  <tr> 
   <td>الکترونیک شبکه عصبی منعطف</td> 
  </tr> 
  <tr> 
   <td>فناوری‌های هوشمندسازی صنایع</td> 
   <td>سوخت پایدار هوانوردی</td> 
  </tr> 
  <tr> 
   <td colspan="1" rowspan="2">فناوری‌های مرتبط با انرژی</td> 
   <td>محاسبات پایدار</td> 
  </tr> 
  <tr> 
   <td>سوخت پایدار هوانوردی</td> 
  </tr> 
 </tbody> 
</table> 
<p><strong>باتری‌های منعطف با قابلیت تاشوندگی:</strong> پیش بینی شده با توسعه این فناوری بین سالهای ۲۰۲۲-۲۰۲۷ رشد بازار آن به بیش از ۲۴۰.۴۷ میلیون دلار خواهد رسید.</p> 
<p><strong>هوش مصنوعی مولد:</strong> نمونه کنونی توسعه جی پی تی خودکار از این نوع فناوری است. با نظارت و مهار درست و به جای این فناوری، شرایط برای ظهور خلاقیت، فراهم می‌شود و می‌تواند<br> با گسترش و گذر از مرزهای دانش، به عنوان رقیبی چالش برانگیز نسبت به روش‌های رایج تفکر مطرح باشد.</p> 
<p><strong>فناوری سوخت پایدار هوانوردی:</strong> میزان تقاضا برای فناوری سوخت پایدار هوانوردی در صورت توسعه آن تا سال ۲۰۴۰ به ۱۳-۱۵ درصد خواهد شد و این در صورتی امکان پذیر خواهد بود که راهبردهای کاهش انتشار دی اکسید کربن تا سال ۲۰۵۰ با شدت و اهمیت ویژه ای دنبال شود.</p> 
<p><strong>فناوری فاژهای طراح:</strong> این فناوری‌ها نیز به تحولات نوین حوزه‌های زیستی مربوط می‌شوند. پیشرفت‌های اخیر حوزه میکروبیوم با هدف افزایش بهره وری کشاورزی و بهبود و رفاه انسان در حال وقوع است. تاکنون سه فاز، به عنوان خوراک طراحی شده و از آن در تولید مکمل‌های تقویت رشد دام و درمان برخی بیماری‌های گیاهی به منظور از بین بردن باکتری‌های مضر زنجیره تأمین موادغذایی در راستای راهبرد «یکپارچگی سلامت» سازمان بهداشت جهانی استفاده می‌شود.</p> 
<p><strong>فناوری متاورس ویژه سلامت روان:</strong> توسعه این فناوری نه تنها برای بیماران مناسب است، بلکه با توسعه آن می‌توان به برنامه‌های کاربردی و ضروری در فضای متحول مجازی دست یافت.</p> 
<p><strong>حسگرهای پوشش گیاهی:</strong> فناوری حسگرهای پوشش گیاهی، انقلابی را در حوزه تولید و مدیریت حوزه کشاورزی ایجاد خواهد کرد تا با بهینه‌تر شدن فرایند تولید، ضایعات و اثرات زیست محیطی کشاورزی به حداقل برسد تا در تأمین امنیت غذایی جمعیت روبه رشد جهان کمک کننده باشد.</p> 
<p><strong>فناوری اومیکس فضایی:</strong> انواع بیماری‌های عفونی با فناوری اومیکس فضایی قابل بررسی و درمان می‌شود. ارزش این فناوری در بازار طی سال ۲۰۲۱ معادل ۲۳۲ میلیون دلار بود که پیش بینی می‌شود تا سال ۲۰۳۰ به ۵۸۷ میلیون دلار افزایش یابد.</p> 
<p><strong>الکترونیک شبکه عصبی منعطف:</strong> با توسعه این فناوری رابطه واقعی مغز با هوش مصنوعی توسعه می‌یابد؛ گرچه با ظهور اینگونه فناوری‌ها ملاحظات مرتبط با مسائل اخلاقی آن باید در نظر گرفته شود.</p> 
<p><strong>محاسبات پایدار:</strong> توسعه این فناوری‌ها در مقایسه با سایر فناوری‌های شناسایی شده توسط مجمع جهانی اقتصاد، بیشترین تأثیر را در سلامت، رفاه، تساوی حقوق، حفظ محیط زیست و توسعه صنعتی نشان داده است.</p> 
<p><strong>مراقبت‌های بهداشتی و درمانی مبتنی بر هوش مصنوعی:</strong> گسترش برنامه‌ها و نرم افزارهای مبتنی بر هوش مصنوعی برای ارتقای سلامت در جهان با شدت بیشتری پیش می‌رود و انتظار می‌رود در سه تا پنج سال آینده هم شرکتها و صنایع فعال در این حوزه و هم مردم از این فناوری منتفع شوند.</p> 
<p><span style="color:#000080"><strong>شرکت گارتنر</strong></span></p> 
<p>شرکت گارتنر، شرکتی پژوهشی- مشاوره‌ای است که با بودجه‌ای به ارزش ۵ میلیارد دلار با بیش از ۲۵۰۰ پژوهشگر و مشاور متخصص به ارائه خدمات مشاوره‌ای و محصولات پژوهشی می‌پردازد. عمده فعالیت‌های این شرکت در سه بخش الف) تحقیق و پژوهش، ب) کنفرانس‌ها و ج) مشاوره‌ها طبقه بندی می‌شود.</p> 
<p><span style="color:#000080"><strong>کلان روند پیش بینی شده گارتنر ۲۰۲۴ درخصوص فناورهای راهبردی</strong></span></p> 
<p>۱. هوش مصنوعی به عنوان شریک تجاری: اعتماد به هوش مصنوعی، مدیریت ریسک و ایمنی</p> 
<p>۲. پدافند: مدیریت مستمر مواجهه با تهدید</p> 
<p>۳. حمایت از آینده: فناوری پایدار</p> 
<p>۴. توسعه دهنده محورهای خویش یار: پلتفرم (بن سازه) مهندسی</p> 
<p>۵. تسریع در ایجاد: توسعه بیشتر هوش مصنوعی</p> 
<p>۶. ویژه سازی کار ویژه سازی شده: بسترهای ابری صنعتی</p> 
<p>۷. تصمیم گیری بهینه: برنامه‌های هوشمند</p> 
<p>۸. قدرت و مسؤولیت: هوش مصنوعی مولد دمکراتیک شده</p> 
<p>۹. فشار بر پیشگامان: افزایش نیروی کار مجهز به پیشرفته‌ترین فناوری‌های ارتباطی و تولیدی</p> 
<p>۱۰. خریداران رمزارزی: خریداران ماشینی</p> 
<p>همانطور که در کلان روندهای فوق مشهود است نقش هوش مصنوعی بسیار پررنگ و با جامعیت بیشتر در نظر گرفته شده است و دسترسی شرکت‌ها به اهداف خود در حوزه‌های مختلف با ورود هوش مصنوعی و بهره گیری از فناوری‌های آن افزایش خواهد یافت.</p> 
<p>مرکز پژوهش‌های مجلس شورای اسلامی در نتیجه گیری از روندهای آینده فناوری یادآور شده است امروزه شرکت‌ها و مؤسسات بزرگ جهان به منظور هدایت تصمیم گیران حوزه فناوری، با استفاده از ابزارهای مختلف به ارزیابی، تجزیه و تحلیل فناوری‌های پژوهشی می‌پردازند و نتایج آن هرساله در معرفی کلان روندهای حوزه فناوری ارائه می‌شود.</p> 
<p>مطالعه کلان روندهای پیش بینی شده توسط این چهار نهاد نشان می‌دهد هرچند شیوه‌های شناسایی و دسته بندی فناوری‌ها براساس مؤلفه‌های لزوماً یکسان یا مشابهی انجام نمی‌شود، اما مبتنی بر چند فرض اصلی است که عبارتند از:</p> 
<p><span style="color:#000080"><strong>پیشران‌های اصلی در شکل گیری روندها و تحولات آتی فناوری‌ها</strong></span></p> 
<p><strong>* توسعه پایدار (با تمرکز بر انرژی):</strong> موضوع انرژی به لحاظ افزایش روزافزون نیاز به انرژی و ضرورت تأمین آن از طریق منابع جدید، جدی شدن چالش تغییرات آب و هوایی، لزوم بهینه سازی مصرف و حرکت به سمت کم مصرف شدن انرژی توسط صنایع یکی از مسائل کلیدی آینده است.</p> 
<p>در این مسیر معمولاً بر توسعه فناوری‌هایی تمرکز می‌شود که با هدف پایداری و کاهش اثرات جبران ناپذیر زیست محیطی به کار می‌رود. فناوری‌های مرتبط با انرژی‌های تجدیدپذیر، مدیریت پسماندها و رفع چالش‌های مرتبط با حمل و نقل و سازگاری آن با محیط زیست در اولویت قرار می‌گیرد.</p> 
<p><strong>* تحول دیجیتال:</strong> در این فرضیه، جهان آینده به شدت تحت تأثیر تحولات دیجیتالی و محاسباتی خواهد بود. از این رو فناوری‌های منتسب به آن از قبیل محاسبات ابر و لبه، هوش مصنوعی به ویژه هوش مصنوعی مولد، اینترنت اشیا و تجزیه و تحلیل داده‌های عظیم، رباتیک، گسترش اتوماسیون در بخش‌های مختلف و فناوری‌های کوانتوم از جمله آنهاست.</p> 
<p><strong>* انقلاب در مراقبت‌های بهداشتی و سلامت:</strong> در این رویکرد به توسعه فناوری‌های مرتبط با سیستم‌های مراقبت‌های بهداشتی تأکید می‌شود و دسترسی سراسر جهان به نظام کارآمد بهداشت و سلامت را هدف قرار می‌دهد. پیشرفت‌های علمی و فناوری در مورد پزشکی از راه دور، پزشک خصوصی، پزشکی رباتیک و نظارت از راه دور بیماران، مهندسی ژنتیک نوین و سایر فناوری‌های زیستی با تمرکز بر تأمین غذا و حفظ تنوع زیستی در زمره این فناوری‌ها و نوآوری‌ها به شمار می‌رود.</p> 
<p><strong>* هوشمندسازی (با تمرکز بر صنایع):</strong> در این رویکرد توسعه فناوری‌ها مبتنی بر هوشمندسازی صنایع و ایجاد تحولات جدی در عملکرد آن صنایع است که بیشترین اثرگذاری را بر جامعه و حاکمیت داشته باشند.</p> 
<p>بر اساس این پیشران‌ها، تحولات فناوری در چهار حوزه دیجیتال، زیستی، هوشمندسازی صنایع و انرژی قابل رصد خواهند بود. در واقع رصد روندهای فناوری حاکی از اهمیت آن در ایجاد تحول در حوزه‌های سلامت و بهداشت، انرژی، صنعت و حمل و نقل هوشمند است که فناوری‌های دیجیتالی با تمرکز بر هوش مصنوعی نقش پررنگی ایفا می‌کند.</p>
            </div><div class="item-code">
                کد خبر <span>6017630</span></div>
        </div>
        <div class="item-footer row">
            <div class="col-12 col-sm-5">
                <div class="item-sharing">
                    <ul>
                        <li class="fb"><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-facebook"></i></a></li>
                        <li class="tw"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-twitter"></i></a></li>
                        
                        <li class="tg"><a href="tg://msg_url?url=https%3A%2F%2Fmehrnews.com%2Fx349jN"><i class="icon-telegram"></i></a></li>
                        <li class="wa"><a href="whatsapp://send?text=https%3A%2F%2Fmehrnews.com%2Fx349jN" target="_blank"><i class="icon-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-4">
                
            </div>
            <div class="col-12 col-sm-3">
                <div class="short-link-container">
                    <div class="form-group">
                        <i class="icon-link"></i>
                        <input type="text" class="clean" value="mehrnews.com/x349jN" readonly="readonly" />
                    </div>
                </div>
                <div class="col-12">
                    <div id="tooltip-link">
                        <p class="short-link-tooltip">کپی شد</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-boxes2">
            <section id="box519" class="box related-items list list-bullets hidden-time" style="" data-conf="{&quot;id&quot;:519}">
                <header>
                    <h2 style=""><span>مطالب مرتبط</span>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/5215544/%DA%AF%D9%88%DA%AF%D9%84-%D8%AA%D8%A7-%DB%B2%DB%B0%DB%B2%DB%B9-%D8%B1%D8%A7%DB%8C%D8%A7%D9%86%D9%87-%DA%A9%D9%88%D8%A7%D9%86%D8%AA%D9%88%D9%85%DB%8C-%D8%AA%D8%AC%D8%A7%D8%B1%DB%8C-%D9%85%DB%8C-%D8%B3%D8%A7%D8%B2%D8%AF" target="_blank" title="قدیمی‌تر از یکسال">گوگل تا ۲۰۲۹ رایانه کوانتومی تجاری می‌سازد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/5332119/%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D9%86%D9%88%DB%8C%D9%86-%D8%AF%D8%B1-%D8%AD%D9%88%D8%B2%D9%87-%D9%87%D8%A7%DB%8C-%D8%AA%D8%AD%D9%88%D9%84%DB%8C" target="_blank" title="قدیمی‌تر از یکسال">کاربرد فناوری‌های نوین در حوزه‌های تحولی/ بلاکچین و بیگ دیتا چگونه به کمک کشاورزی دیجیتال می آیند</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/5304891/%DB%B3-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84-%D8%AF%D8%B1-%D8%B3%D9%84%D8%A7%D9%85%D8%AA" target="_blank" title="قدیمی‌تر از یکسال">۳ کاربرد فناوری‌های دیجیتال در سلامت/ محاسبات مولکولی آینده پزشکی را می‌سازد</a>
        
    </h3>
</div>
                                </li>
                                <li class="report" data-conf="{}">
<div class="desc">
    <h3><a href="/news/4286024/%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C%DB%8C-%DA%A9%D9%87-%D8%A7%D9%85%D8%B3%D8%A7%D9%84-%D8%AF%D9%86%DB%8C%D8%A7-%D8%B1%D8%A7-%D8%AA%DA%A9%D8%A7%D9%86-%D9%85%DB%8C-%D8%AF%D9%87%D9%86%D8%AF-%D9%85%D8%B1%D8%A7%D9%82%D8%A8-%D9%87%D9%88%D8%B4-%D9%85%D8%B2%D8%A7%D8%AD%D9%85-%D8%A8%D8%A7%D8%B4%DB%8C%D8%AF" target="_blank" title="قدیمی‌تر از یکسال">فناوری‌هایی که امسال دنیا را تکان می‌دهند/ مراقب هوش مزاحم باشید</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
        </div>
            <section class="box tags">
                <header>
                    <h2>برچسب‌ها</h2>
                </header>
                <div>
                    <ul>
                                <li><a href="/tag/%D8%A2%DB%8C%D9%86%D8%AF%D9%87+%D9%BE%DA%98%D9%88%D9%87%DB%8C" rel="tag">آینده پژوهی</a></li>
                                <li><a href="/tag/%D9%85%D8%AC%D9%85%D8%B9+%D8%AC%D9%87%D8%A7%D9%86%DB%8C+%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF" rel="tag">مجمع جهانی اقتصاد</a></li>
                                <li><a href="/tag/%D9%85%D8%B1%DA%A9%D8%B2+%D9%BE%DA%98%D9%88%D9%87%D8%B4%D9%87%D8%A7%DB%8C+%D9%85%D8%AC%D9%84%D8%B3" rel="tag">مرکز پژوهشهای مجلس</a></li>
                                <li><a href="/tag/%D8%B2%DB%8C%D8%B3%D8%AA+%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C" rel="tag">زیست فناوری</a></li>
                                <li><a href="/tag/%D9%87%D9%88%D8%B4+%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C" rel="tag">هوش مصنوعی</a></li>
                                <li><a href="/tag/%DA%A9%D8%B3%D8%A8%E2%80%8C%D9%88%DA%A9%D8%A7%D8%B1%D9%87%D8%A7%DB%8C+%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84" rel="tag">کسب‌وکارهای دیجیتال</a></li>
                    </ul>
                </div>
            </section>
        <div class="item-boxes">
            <section id="box508" class="box ads" style="" data-conf="{&quot;id&quot;:508}">
                <div><script>
!function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/laLlBUlh/article.v1/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
</script>
                </div>
                
            </section>
            <section id="box712" class="box " style="" data-conf="{&quot;id&quot;:712}">
                <div><meta name="sabavision_zone" content="3907-Z395" />
                </div>
                
            </section>
            <section id="box752" class="box " style="" data-conf="{&quot;id&quot;:752}">
                <div><div id="yektanet_news_ads"></div>
                </div>
                
            </section>
        </div>
    </article>
            <section id="box373" class="box ads" data-conf="{}">
                <div style="">
                    <ul>
                        <li data-conf="{}" id="ad373_2701">
                                <figure><a href="/redirect/ads/2701" rel="nofollow" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2024/02/04/0/4843376.gif?ts=1706992551674" alt="همراه اول" loading="lazy" title="" /></a></figure>
                            
                        </li>
                        <li data-conf="{}" id="ad373_1925">
                                <figure><a href="/redirect/ads/1925" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2016/12/28/0/2320578.gif?ts=1486462047399" alt="تلگرام خبرگزاری زیر خبر" loading="lazy" title="" /></a></figure>
                            
                        </li>
                    </ul>
                </div>
            </section>
        <section id="news-comment"></section>
        <section class="box header-outside comment-form">
            <header><h2>نظر شما</h2></header>
            <div>
                <form enctype="application/x-www-form-urlencoded" data-url="/rest/postcomment" role="form" data-toggle="validator" method="post" name="frmNewsComment" id="frmNewsComment" data-success="نظر شما با موفقیت ارسال شد." class="form-comment" data-error="اشکالی در ارسال نظر شما رخ داده‌است!" data-captcha-error="کد امنیتی اشتباه وارد شده است">
                     <div class="comment-info">
                        <div class="alert alert-info">شما در حال پاسخ به نظر «<span></span>» هستید.
                            <button type="button" class="close">× <span>لغو پاسخ</span></button>
                            <blockquote></blockquote>
                        </div>
                        <div class="comment-policies"><li><span>نظرات حاوی توهین و هرگونه نسبت ناروا به اشخاص حقیقی و حقوقی منتشر نمی‌شود.</span></li><li><span>نظراتی که غیر از زبان فارسی یا غیر مرتبط با خبر باشد منتشر نمی‌شود.</span></li>
                        </div>
                    </div> 
                    <input type="hidden" value="frmNewsComment" name="frmNewsComment" />
                    <input type="hidden" value="6017630" name="newsId" id="newsId" />
                    <input type="hidden" value="0" name="reply" />
                    <input type="hidden" value="" name="parentId" />
                    <fieldset>
                        <div class="form-group name-group">
                            <label for="userName">نام</label>
                            <input type="text" id="userName" name="userName" placeholder="نام" maxlength="50" class="form-control" data-minlength="3" data-required-msg="لطفا نام خود را وارد کنید." />
                        </div>
                        <div class="form-group email-group">
                            <label for="userEmail">ایمیل</label>
                            <input type="email" placeholder="ایمیل" class="form-control ltr" id="userEmail" name="userEmail" maxlength="80" />
                        </div>
                        <div class="form-group text-group">
                            <label for="body">نظر شما *</label>
                            <textarea maxlength="300" placeholder="نظر شما" data-required-msg="لطفاً نظر خود را وارد کنید." class="form-control" required="true" id="body" name="body" rows="5"></textarea>
                        </div><div class="form-group captcha-group">
                            <div class="captcha">
                                <input id="captchaKey" name="captchaKey" value="d6f00d8aeff05e26fdb04fe9140be4fb25cf5925e63079d16f106fca94e6a648a4eabed6034b8ab23670358381b868a7ea0bfac14e8460146285af684b6fb526caf18725be36061060a1da77dc0ec8a4696f8cc5508265415cba5b5d9be570ae" type="hidden" />
                                <div class="captcha-image">
                                    <img id="captchaImg" src="/sncaptcha.jpg?key=d6f00d8aeff05e26fdb04fe9140be4fb25cf5925e63079d16f106fca94e6a648a4eabed6034b8ab23670358381b868a7ea0bfac14e8460146285af684b6fb526caf18725be36061060a1da77dc0ec8a4696f8cc5508265415cba5b5d9be570ae" alt="captcha" />
                                </div>
                                <label for="captchaText"><i class="req">*</i> لطفا عدد مقابل را در جعبه متن وارد کنید</label>
                                <div class="captcha-input">
                                    <input type="number" name="captchaText" id="captchaText" required="required" data-required-msg="حاصل عبارت را وارد کنید." />
                                </div>
                            </div></div>
                        <div class="form-group submit-group">
                            <button class="btn btn-default" id="btnSave">ارسال</button>
                            <div class="msg"></div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
            </div>
            <div class="col-12 col-sm-4 sidebar">
            <section id="box97" class="box ads " data-conf="{}">
                <div style="">
                    <ul>
                        <li data-conf="{}" id="ad97_2670">
                                <figure><a href="/redirect/ads/2670" rel="nofollow" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2024/02/04/0/4843375.gif?ts=1706992452659" alt="همراه اول" loading="lazy" title="" /></a></figure>
                            
                        </li>
                    </ul>
                </div>
            </section>
            <section id="box9" class="box list headlines list-bullets list-bordered bg-graylight header-sm hidden-img title-only
_types
" style="" data-conf="{&quot;id&quot;:9}">
                <header>
                    <h2 style=""><a href="/archive/pl/9/%DB%B1%DB%B0-%D8%AE%D8%A8%D8%B1-%D8%A7%D9%88%D9%84" target="_blank" title="آرشیو ۱۰ خبر اول">۱۰ خبر اول</a>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="photo" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/photo/6018504/حال-و-هوای-حرم-امام-رضا-ع-در-روز-عید-مبعث" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/08/1/4850062.jpg" alt="حال و هوای حرم امام رضا (ع) در روز عید مبعث" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/photo/6018504/%D8%AD%D8%A7%D9%84-%D9%88-%D9%87%D9%88%D8%A7%DB%8C-%D8%AD%D8%B1%D9%85-%D8%A7%D9%85%D8%A7%D9%85-%D8%B1%D8%B6%D8%A7-%D8%B9-%D8%AF%D8%B1-%D8%B1%D9%88%D8%B2-%D8%B9%DB%8C%D8%AF-%D9%85%D8%A8%D8%B9%D8%AB" target="_blank">حال و هوای حرم امام رضا (ع) در روز عید مبعث</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018496/امیرعبداللهیان-فردا-عازم-بیروت-می-شود" title="">
                                                <img src="https://media.mehrnews.com/d/2023/12/15/1/4776008.jpg" alt="امیرعبداللهیان فردا عازم بیروت می‌شود" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018496/%D8%A7%D9%85%DB%8C%D8%B1%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%DB%8C%D8%A7%D9%86-%D9%81%D8%B1%D8%AF%D8%A7-%D8%B9%D8%A7%D8%B2%D9%85-%D8%A8%DB%8C%D8%B1%D9%88%D8%AA-%D9%85%DB%8C-%D8%B4%D9%88%D8%AF" target="_blank">امیرعبداللهیان فردا عازم بیروت می‌شود</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018474/بررسی-فروش-اینترنتی-دارو-در-کمیسیون-بهداشت" title="">
                                                <img src="https://media.mehrnews.com/d/2022/12/03/1/4348984.jpg" alt="بررسی فروش اینترنتی دارو در کمیسیون بهداشت" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018474/%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C-%D9%81%D8%B1%D9%88%D8%B4-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C-%D8%AF%D8%A7%D8%B1%D9%88-%D8%AF%D8%B1-%DA%A9%D9%85%DB%8C%D8%B3%DB%8C%D9%88%D9%86-%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA" target="_blank">بررسی فروش اینترنتی دارو در کمیسیون بهداشت</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018467/چرا-دندان-های-افراد-دیابتی-خراب-می-شود" title="">
                                                <img src="https://media.mehrnews.com/d/2023/06/29/1/4576208.jpg" alt="چرا دندان های افراد دیابتی خراب می شود" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018467/%DA%86%D8%B1%D8%A7-%D8%AF%D9%86%D8%AF%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%A7%D9%81%D8%B1%D8%A7%D8%AF-%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA%DB%8C-%D8%AE%D8%B1%D8%A7%D8%A8-%D9%85%DB%8C-%D8%B4%D9%88%D8%AF" target="_blank">چرا دندان های افراد دیابتی خراب می شود</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018415/رهبر-انقلاب-دعوت-بعثت-همچنان-ادامه-دارد" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/08/1/4849965.jpg" alt="رهبر انقلاب: دعوت بعثت همچنان ادامه دارد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018415/%D8%B1%D9%87%D8%A8%D8%B1-%D8%A7%D9%86%D9%82%D9%84%D8%A7%D8%A8-%D8%AF%D8%B9%D9%88%D8%AA-%D8%A8%D8%B9%D8%AB%D8%AA-%D9%87%D9%85%DA%86%D9%86%D8%A7%D9%86-%D8%A7%D8%AF%D8%A7%D9%85%D9%87-%D8%AF%D8%A7%D8%B1%D8%AF" target="_blank">رهبر انقلاب: دعوت بعثت همچنان ادامه دارد</a>
        
    </h3>
</div>
                                </li>
                                <li class="photo" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/photo/6018371/مجاهدان-راه-حق" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/08/1/4849864.jpg" alt="مجاهدان راه حق" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/photo/6018371/%D9%85%D8%AC%D8%A7%D9%87%D8%AF%D8%A7%D9%86-%D8%B1%D8%A7%D9%87-%D8%AD%D9%82" target="_blank">مجاهدان راه حق</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018374/تظاهرات-خیابانی-مردم-اسپانیا-در-دفاع-از-غزه-فیلم" title="">
                                                <img src="https://media.mehrnews.com/d/2024/01/21/1/4824513.jpg" alt="تظاهرات خیابانی مردم اسپانیا در دفاع از غزه+ فیلم" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018374/%D8%AA%D8%B8%D8%A7%D9%87%D8%B1%D8%A7%D8%AA-%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%DB%8C-%D9%85%D8%B1%D8%AF%D9%85-%D8%A7%D8%B3%D9%BE%D8%A7%D9%86%DB%8C%D8%A7-%D8%AF%D8%B1-%D8%AF%D9%81%D8%A7%D8%B9-%D8%A7%D8%B2-%D8%BA%D8%B2%D9%87-%D9%81%DB%8C%D9%84%D9%85" target="_blank">تظاهرات خیابانی مردم اسپانیا در دفاع از غزه+ فیلم</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018327/هفته-آینده-در-اغلب-نقاط-کشور-باران-می-بارد" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/08/1/4849827.jpg" alt="هفته آینده در اغلب نقاط کشور باران می‌بارد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018327/%D9%87%D9%81%D8%AA%D9%87-%D8%A2%DB%8C%D9%86%D8%AF%D9%87-%D8%AF%D8%B1-%D8%A7%D8%BA%D9%84%D8%A8-%D9%86%D9%82%D8%A7%D8%B7-%DA%A9%D8%B4%D9%88%D8%B1-%D8%A8%D8%A7%D8%B1%D8%A7%D9%86-%D9%85%DB%8C-%D8%A8%D8%A7%D8%B1%D8%AF" target="_blank">هفته آینده در اغلب نقاط کشور باران می‌بارد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018283/تورم-در-اقتصاد-سلامت-کشور-بالای-۷۰-درصد-است" title="">
                                                <img src="https://media.mehrnews.com/d/2022/04/17/1/4120172.jpg" alt="تورم در اقتصاد سلامت کشور بالای ۷۰ درصد است" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018283/%D8%AA%D9%88%D8%B1%D9%85-%D8%AF%D8%B1-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF-%D8%B3%D9%84%D8%A7%D9%85%D8%AA-%DA%A9%D8%B4%D9%88%D8%B1-%D8%A8%D8%A7%D9%84%D8%A7%DB%8C-%DB%B7%DB%B0-%D8%AF%D8%B1%D8%B5%D8%AF-%D8%A7%D8%B3%D8%AA" target="_blank">تورم در اقتصاد سلامت کشور بالای ۷۰ درصد است</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018316/بازگشت-هوای-آلوده-به-پایتخت" title="">
                                                <img src="https://media.mehrnews.com/d/2023/12/26/1/4792812.jpg" alt="بازگشت هوای آلوده به پایتخت" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018316/%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA-%D9%87%D9%88%D8%A7%DB%8C-%D8%A2%D9%84%D9%88%D8%AF%D9%87-%D8%A8%D9%87-%D9%BE%D8%A7%DB%8C%D8%AA%D8%AE%D8%AA" target="_blank">بازگشت هوای آلوده به پایتخت</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
            <section id="box90" class="box list list-bullets list-bordered title-only" style="" data-conf="{&quot;id&quot;:90}">
                <header>
                    <h2 style=""><a href="https://www.mehrnews.com/archive?all=1" target="_blank" title="آرشیو تازه‌ترین اخبار">تازه‌ترین اخبار</a>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="video" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018497/%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD-%D8%A8%D8%B1%D9%82-%D8%B1%D8%B3%D8%A7%D9%86%DB%8C-%D8%A8%D9%87-%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%DB%8C-%D8%AD%D8%B3%DB%8C%D9%86-%D8%A2%D8%A8%D8%A7%D8%AF-%D8%A2%D8%B2%D8%A7%D8%AF-%D8%B4%D9%87%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%DA%AF%D9%86%D8%A7%D8%A8%D8%A7%D8%AF" target="_blank">افتتاح برق رسانی به روستای حسین‌آباد آزاد شهرستان گناباد</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018494/%D9%87%D9%85%D8%A7%DB%8C%D8%B4-%D9%BE%DB%8C%D8%A7%D8%AF%D9%87-%D8%B1%D9%88%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%DA%AF%DB%8C-%D8%AF%D8%B1-%DA%AF%D9%86%D8%A7%D8%A8%D8%A7%D8%AF" target="_blank">همایش پیاده‌روی خانوادگی در گناباد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018526/%D8%AF%D9%85%D8%A7%DB%8C-%D9%87%D9%88%D8%A7%DB%8C-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86-%DB%B2-%D8%AF%D8%B1%D8%AC%D9%87-%D8%A7%D9%81%D8%B2%D8%A7%DB%8C%D8%B4-%D9%85%DB%8C-%DB%8C%D8%A7%D8%A8%D8%AF-%D8%AC%D9%88%D9%BE%D8%A7%DB%8C%D8%AF%D8%A7%D8%B1-%D8%A7%D8%B3%D8%AA" target="_blank">دمای هوای اصفهان ۲ درجه افزایش می‌یابد / جوپایدار است</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018512/%D8%AC%D8%B4%D9%86-%D8%B2%DB%8C%D8%A8%D8%A7%DB%8C-%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%DB%8C%DB%8C%D8%A7%D9%86-%D9%88-%D8%B9%D8%B4%D8%A7%DB%8C%D8%B1-%D8%A7%DB%8C%D9%84%D8%A7%D9%85" target="_blank">جشن زیبای روستاییان و عشایر ایلام</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018524/%D9%85%D8%B1%D8%A7%D8%B3%D9%85-%D8%B9%D9%85%D8%A7%D9%85%D9%87-%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C-%D8%AC%D9%85%D8%B9%DB%8C-%D8%A7%D8%B2-%D8%B7%D9%84%D8%A7%D8%A8-%D8%AF%D8%B1-%D9%82%D9%85-%D8%A8%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1-%D8%B4%D8%AF" target="_blank">مراسم عمامه گذاری جمعی از طلاب در قم برگزار شد</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018482/%D8%AA%D8%B4%DB%8C%DB%8C%D8%B9-%D9%BE%DB%8C%DA%A9%D8%B1-%D8%AC%D8%A7%D9%86%D8%A8%D8%A7%D8%B2-%DB%B7%DB%B0-%D8%AF%D8%B1%D8%B5%D8%AF-%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%AF%D9%81%D8%A7%D8%B9-%D9%85%D9%82%D8%AF%D8%B3-%D8%AF%D8%B1-%D8%B1%D9%88%D8%AF%D8%B3%D8%B1" target="_blank">تشییع پیکر جانباز ۷۰ درصد دوران دفاع مقدس در رودسر</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018500/%D8%B9%DB%8C%D8%AF-%D9%85%D8%A8%D8%B9%D8%AB-%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86-%D9%88-%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D8%B1%D9%88%D8%B2-%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE-%D8%A8%D8%B4%D8%B1%DB%8C%D8%AA-%D8%A7%D8%B3%D8%AA" target="_blank">عید مبعث بزرگترین و مهمترین روز تاریخ بشریت است</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018509/%D8%A7%D8%B1%D8%B3%D8%A7%D9%84-%DB%B7%DB%B0-%D9%85%D9%82%D8%A7%D9%84%D9%87-%D8%A8%D9%87-%D8%AF%D9%88%D8%A7%D8%B2%D8%AF%D9%87%D9%85%DB%8C%D9%86-%DA%A9%D9%86%D9%81%D8%B1%D8%A7%D9%86%D8%B3-%D9%86%D8%B8%D8%B1%DB%8C%D9%87-%DA%AF%D8%B1%D8%A7%D9%81-%D9%88-%D8%AA%D8%B1%DA%A9%DB%8C%D8%A8%DB%8C%D8%A7%D8%AA-%D8%AC%D8%A8%D8%B1%DB%8C" target="_blank">ارسال ۷۰ مقاله به دوازدهمین کنفرانس نظریه‌ گراف و ترکیبیات جبری</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018515/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D9%88%D8%A7%D9%86%D8%A8%D8%AE%D8%B4%DB%8C-%D9%85%D8%B9%D9%84%D9%88%D9%84%D8%A7%D9%86-%D8%AF%D8%B1-%D8%A8%D9%87%D8%A7%D8%A8%D8%A7%D8%AF-%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD-%D8%B4%D8%AF" target="_blank">مرکز توانبخشی معلولان در بهاباد افتتاح شد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018514/%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%DB%B1%DB%B2-%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D8%B4%DB%8C%D9%84%D8%A7%D8%AA%DB%8C-%D8%A8%D8%A7-%D8%A7%D8%B9%D8%AA%D8%A8%D8%A7%D8%B1-%DB%B5%DB%B5-%D9%85%DB%8C%D9%84%DB%8C%D8%A7%D8%B1%D8%AF-%D8%AA%D9%88%D9%85%D8%A7%D9%86-%D8%AF%D8%B1-%DA%AF%DB%8C%D9%84%D8%A7%D9%86" target="_blank">اجرای ۱۲ پروژه شیلاتی با اعتبار ۵۵ میلیارد تومان در گیلان</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
            <section id="box11" class="box list list-bullets list-bordered hidden-img " style="" data-conf="{&quot;id&quot;:11}">
                <header>
                    <h2 style=""><span>پربازدیدترین ها</span>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018307/%D8%A2%D8%BA%D8%A7%D8%B2-%D9%85%D9%88%D8%AC-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B1%D8%B4-%D9%87%D8%A7-%D8%A7%D8%B2-%D8%B4%D9%86%D8%A8%D9%87-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86" target="_blank">آغاز موج جدید بارش ها از شنبه در ایران</a>
        
    </h3>
</div>
                                </li>
                                <li class="report" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018240/%D8%A7%D8%B4%DA%A9-%D9%87%D8%A7%DB%8C-%D8%AA%D9%85%D8%A7%D8%B4%D8%A7%DA%AF%D8%B1%D8%A7%D9%86-%DA%AF%DB%8C%D9%84%D8%A7%D9%86%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A7%D8%AD%D9%85%D8%AF-%D8%A7%DA%A9%D8%B1%D8%A7%D9%86-%DB%B6-%D9%81%DB%8C%D9%84%D9%85-%D8%AF%D8%B1-%D8%B1%D8%B4%D8%AA" target="_blank">اشک های تماشاگران گیلانی برای «احمد»/ اکران ۶ فیلم در رشت</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018264/%D9%88%D8%A7%DA%A9%D9%86%D8%B4-%DA%AF%D8%B1%D8%AF%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%AD%D8%B2%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D8%B9%D8%B1%D8%A7%D9%82-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%AD%D9%85%D9%84%D9%87-%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D8%AA%DB%8C-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D8%AF%D8%B1%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF" target="_blank">واکنش گردان‌های حزب‌الله عراق درباره حمله تروریستی آمریکا دربغداد</a>
        
    </h3>
</div>
                                </li>
                                <li class="report" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018160/%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%A8%D8%A7-%DA%A9%D8%AF%D8%A7%D9%85-%D9%85%D8%B1%D8%A8%DB%8C%D8%A7%D9%86-%DB%B4%DB%B8-%D8%B3%D8%A7%D9%84-%D8%A8%D9%87-%D9%81%DB%8C%D9%86%D8%A7%D9%84-%D8%AC%D8%A7%D9%85-%D9%85%D9%84%D8%AA-%D9%87%D8%A7-%D9%86%D8%B1%D8%B3%DB%8C%D8%AF" target="_blank">فوتبال ایران با کدام مربیان ۴۸ سال به فینال جام ملت‌های آسیا نرسید؟</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018251/%DA%86%D9%88%DA%A9%D8%A7-%D8%A7%D9%86%D8%B5%D8%B1%D8%A7%D9%81-%D8%AF%D8%A7%D8%AF-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA%D9%88%D8%B1-%D8%A8%D9%87-%DB%8C%DA%A9-%D9%87%D8%B4%D8%AA%D9%85-%D9%86%D9%87%D8%A7%DB%8C%DB%8C-%D8%AC%D8%A7%D9%85-%D8%AD%D8%B0%D9%81%DB%8C-%D8%B1%D8%B3%DB%8C%D8%AF" target="_blank">چوکا انصراف داد؛ تراکتور به یک هشتم نهایی جام حذفی رسید</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018356/%D8%AF%D8%A7%D8%AF%D8%B3%D8%AA%D8%A7%D9%86%DB%8C-%D8%AA%D9%87%D8%B1%D8%A7%D9%86-%D8%B9%D9%84%DB%8C%D9%87-%D8%AF%DB%8C%D8%AC%DB%8C-%DA%A9%D8%A7%D9%84%D8%A7-%D8%A7%D8%B9%D9%84%D8%A7%D9%85-%D8%AC%D8%B1%D9%85-%DA%A9%D8%B1%D8%AF" target="_blank">دادستانی تهران علیه «دیجی کالا» اعلام جرم کرد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018292/%D8%AA%D9%88%D9%82%D8%B9-%D9%86%D8%AF%D8%A7%D8%B4%D8%AA%D9%85-%D8%A8%D9%87-%D9%82%D8%B7%D8%B1-%D8%A8%D8%A8%D8%A7%D8%B2%DB%8C%D9%85-%D9%81%D9%82%D8%B7-%DB%8C%DA%A9-%D9%86%DB%8C%D9%85%D9%87-%D8%A8%D8%B1%D8%A7%D8%A8%D8%B1-%DA%98%D8%A7%D9%BE%D9%86-%D8%AE%D9%88%D8%A8-%D8%A8%D9%88%D8%AF%DB%8C%D9%85" target="_blank">توقع نداشتم به قطر ببازیم/ فقط یک نیمه برابر ژاپن خوب بودیم</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018344/%D8%A8%D8%A7%D8%B2%D8%AA%D8%A7%D8%A8-%D8%B4%DA%A9%D8%B3%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%AF%D8%B1-%D8%B1%D8%B3%D8%A7%D9%86%D9%87-%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D8%B1%D8%AC%DB%8C-%D9%82%D8%B7%D8%B1-%D8%AF%DB%8C%D9%88%D8%A7%D9%86%D9%87-%D9%88%D8%A7%D8%B1-%D9%BE%DB%8C%D8%B1%D9%88%D8%B2-%D8%B4%D8%AF" target="_blank">بازتاب شکست ایران در رسانه‌های خارجی/ قطر دیوانه‌وار پیروز شد</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018282/%D8%AF%D9%88%D9%85%DB%8C%D9%86-%D9%86%D8%A7%DA%A9%D8%A7%D9%85%DB%8C-%D9%85%D9%84%DB%8C-%D9%82%D9%84%D8%B9%D9%87-%D9%86%D9%88%DB%8C%DB%8C-%D8%AF%D8%B1-%D8%A2%D8%B3%DB%8C%D8%A7-%D9%85%D8%B1%D8%A8%DB%8C-%D8%B4%DA%A9%D8%B3%D8%AA-%D8%AE%D9%88%D8%B1%D8%AF%D9%87-%D9%85%DB%8C-%D9%85%D8%A7%D9%86%D8%AF" target="_blank">دومین ناکامی «ملی» قلعه‌نویی در آسیا/ مربی شکست خورده می‌ماند؟</a>
        
    </h3>
</div>
                                </li>
                                <li class="news" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018337/%D9%85%D8%B5%DB%8C%D8%A8%D8%AA-%D8%BA%D8%B2%D9%87-%D9%85%D8%B5%DB%8C%D8%A8%D8%AA-%D8%A8%D8%B4%D8%B1%DB%8C%D8%AA-%D8%A7%D8%B3%D8%AA-%D9%88%D8%B8%DB%8C%D9%81%D9%87-%D8%AF%D9%88%D9%84%D8%AA-%D9%87%D8%A7-%D9%82%D8%B7%D8%B9-%DA%A9%D9%85%DA%A9-%D8%A8%D9%87-%D8%A7%D8%B3%D8%B1%D8%A7%DB%8C%DB%8C%D9%84" target="_blank">مصیبت غزه، مصیبت بشریت است/ وظیفه دولت‌ها، قطع کمک‌ به رژیم صهیونیستی است</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
            <section id="carousel77" class="box snip title-only has-carousel" style="" data-conf="{&quot;id&quot;:77,&quot;items&quot;:1,&quot;auto&quot;:7000,&quot;fx&quot;:false,&quot;autoHeight&quot;:false,&quot;controls&quot;:false,&quot;paging&quot;:false,&quot;pagingHeader&quot;:false}">
                <header>
                    <h2 style=""><a href="https://www.mehrnews.com/service/magazine/NewspaperKiosks" target="_blank" title="آرشیو صفحه اول روزنامه‌ها">صفحه اول روزنامه‌ها</a>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="photo" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/photo/6016675/روزنامه-های-صبح-چهارشنبه-١٨-بهمن-١۴٠٢" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/2/4848257.jpg" alt="روزنامه‌های صبح چهارشنبه ١٨ بهمن ١۴٠٢" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/photo/6016675/%D8%B1%D9%88%D8%B2%D9%86%D8%A7%D9%85%D9%87-%D9%87%D8%A7%DB%8C-%D8%B5%D8%A8%D8%AD-%DA%86%D9%87%D8%A7%D8%B1%D8%B4%D9%86%D8%A8%D9%87-%D9%A1%D9%A8-%D8%A8%D9%87%D9%85%D9%86-%D9%A1%DB%B4%D9%A0%D9%A2" target="_blank">روزنامه‌های صبح چهارشنبه ١٨ بهمن ١۴٠٢</a>
        
    </h3>
</div>
                                </li>
                                <li class="photo" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/photo/6017186/روزنامه-های-اقتصادی-چهارشنبه-١٨-بهمن-١۴٠٢" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/2/4848292.jpg" alt="روزنامه‌های اقتصادی چهارشنبه ١٨ بهمن ١۴٠٢" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/photo/6017186/%D8%B1%D9%88%D8%B2%D9%86%D8%A7%D9%85%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C-%DA%86%D9%87%D8%A7%D8%B1%D8%B4%D9%86%D8%A8%D9%87-%D9%A1%D9%A8-%D8%A8%D9%87%D9%85%D9%86-%D9%A1%DB%B4%D9%A0%D9%A2" target="_blank">روزنامه‌های اقتصادی چهارشنبه ١٨ بهمن ١۴٠٢</a>
        
    </h3>
</div>
                                </li>
                                <li class="photo" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/photo/6017192/روزنامه-های-ورزشی-چهارشنبه-١٨-بهمن-١۴٠٢" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/2/4848308.jpg" alt="روزنامه‌های ورزشی چهارشنبه ١٨ بهمن ١۴٠٢" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/photo/6017192/%D8%B1%D9%88%D8%B2%D9%86%D8%A7%D9%85%D9%87-%D9%87%D8%A7%DB%8C-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C-%DA%86%D9%87%D8%A7%D8%B1%D8%B4%D9%86%D8%A8%D9%87-%D9%A1%D9%A8-%D8%A8%D9%87%D9%85%D9%86-%D9%A1%DB%B4%D9%A0%D9%A2" target="_blank">روزنامه‌های ورزشی چهارشنبه ١٨ بهمن ١۴٠٢</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
            <section id="box526" class="box " style="" data-conf="{&quot;id&quot;:526}">
                <div><table style="width:100%">
<tr>
<td style="width:50%">
<a target="_blank"  href="https://ble.ir/Mehrnews"  > 
<img width="100%" src="https://media.mehrnews.com/d/2018/07/01/4/2821628.jpg" tag="" />
</a>
</td>
<td  style="width:50%">
<a target="_blank"  href="https://twitter.com/mehrnews_ir"  > 
 <img  width="100%" src="https://media.mehrnews.com/d/2020/05/11/4/3448346.jpg" tag="" />
</a>
</td>
</tr>
<tr>
<td style="width:50%">
<a target="_blank"  href="https://rubika.ir/mehrnews"  > 
<img width="100%" src="https://media.mehrnews.com/d/2018/11/17/4/2958126.jpg" tag="" />
</a>
</td>
<td  style="width:50%">
<a target="_blank"  href="https://www.mehrnews.com/"  > 
 <img  width="100%" src="https://media.mehrnews.com/d/2018/07/01/4/2821629.jpg" tag="" />
</a>
</td>
</tr>
</table>
                </div>
                
            </section>
            </div>

        </div>
    </div>
    <aside id="ads-container" class="col-lg-3 col-md-6">
            <section id="box370" class="box ads" data-conf="{}">
                <div style="">
                    <ul>
                        <li data-conf="{}" id="ad370_2364">
                                <figure><a href="/redirect/ads/2364" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2022/11/15/0/4332355.gif?ts=1668491022999" alt="شرکت داده پردازی رسپینا" loading="lazy" title="" /></a></figure>
                            
                        </li>
                    </ul>
                </div>
            </section>
            <section id="box57" class="box ads" data-conf="{}">
                <div style="">
                    <ul>
                        <li data-conf="{}" id="ad57_3042">
                                <figure><a href="https://www.eghamat24.com" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2024/01/20/0/4823531.gif?ts=1705735178455" alt="رزرو هتل" loading="lazy" title="رزرو هتل از اقامت 24" /></a></figure>
                            
                        </li>
                        <li data-conf="{}" id="ad57_2953">
                                <figure><a href="/redirect/ads/2953" rel="nofollow" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2022/09/13/0/4279127.gif?ts=1663053157672" alt="بیمه سینا" loading="lazy" title="" /></a></figure>
                            
                        </li>
                        <li data-conf="{}" id="ad57_2643">
                                <figure><a href="/redirect/ads/2643" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2023/12/23/0/4787659.gif?ts=1703315647786" alt="آسیاتک" loading="lazy" title="" /></a></figure>
                            
                        </li>
                        <li data-conf="{}" id="ad57_3074">
                                <figure><a href="/redirect/ads/3074" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2024/02/04/0/4843836.gif?ts=1707036988716" alt="رایتل" loading="lazy" title="" /></a></figure>
                            
                        </li>
                        <li data-conf="{}" id="ad57_2790">
                                <figure><a href="/redirect/ads/2790" rel="nofollow" target="_blank">
                                        <img src="https://media.mehrnews.com/d/2023/08/14/0/4628581.png?ts=1692018971161" alt="ابر آروان" loading="lazy" title="" /></a></figure>
                            
                        </li>
                        <li data-conf="{&quot;type&quot;:&quot;video&quot;,&quot;src&quot;:&quot;https://media.mehrnews.com/d/2023/06/13/0/4559333.mp4?ts=1686633146262&quot;,&quot;href&quot;:&quot;https://afranet.ir/fa/services/cloud-server?utm_source=mehrnews&amp;utm_medium=Banner&amp;utm_campaign=Cloudserver02&quot;,&quot;duration&quot;:0,&quot;title&quot;:&quot;&quot;}" id="ad57_3027"><a href="/redirect/ads/3027" rel="nofollow" target="_blank" class="vadlink">
                                <video autoplay="autoplay" loop="loop" playsinline="playsinline" muted="muted" style="width: 100%">
                                    <source src="https://media.mehrnews.com/d/2023/06/13/0/4559333.mp4?ts=1686633146262"></source>
                                </video></a>
                            
                        </li>
                    </ul>
                </div>
            </section>
            <section id="box851" class="box ads" style="" data-conf="{&quot;id&quot;:851}">
                <div><div id="tavoos_video_native-5107"></div>
                </div>
                
            </section>
    </aside>
                </div>
            </div>
        
    </main>
    <footer id="footer">
        <div class="container">
            <div id="footer-items" class="row justify-content-between">
                <div class="col-12 col-sm-7">
    <div class="box chart-box trending-tags">
        <header class="box-title">
            <h2>
                <a>موضوعات داغ: دانش و فناوری</a>
            </h2>
        </header>
        <section class="box-content">
            <ul>
                    <li>
                        <h3 class="tcItem tcItem10">
                            <a href="/tag/%D9%87%D9%88%D8%B4+%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C" title="18 مطلب جدید">هوش مصنوعی</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem10">
                            <a href="/tag/%D9%85%D8%B9%D8%A7%D9%88%D9%86%D8%AA+%D8%B9%D9%84%D9%85%DB%8C+%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C+%D9%88+%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF+%D8%AF%D8%A7%D9%86%D8%B4+%D8%A8%D9%86%DB%8C%D8%A7%D9%86+%D8%B1%DB%8C%D8%A7%D8%B3%D8%AA+%D8%AC%D9%85%D9%87%D9%88%D8%B1%DB%8C" title="16 مطلب جدید">معاونت علمی فناوری و اقتصاد دانش بنیان ریاست جمهوری</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem9">
                            <a href="/tag/%D8%AA%D8%AD%D9%82%DB%8C%D9%82%D8%A7%D8%AA+%D8%B9%D9%84%D9%85%DB%8C" title="13 مطلب جدید">تحقیقات علمی</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem8">
                            <a href="/tag/%D8%B9%DB%8C%D8%B3%DB%8C+%D8%B2%D8%A7%D8%B1%D8%B9%E2%80%8C%D9%BE%D9%88%D8%B1" title="10 مطلب جدید">عیسی زارع‌پور</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem7">
                            <a href="/tag/%D8%B4%D8%B1%DA%A9%D8%AA+%D8%AF%D8%A7%D9%86%D8%B4+%D8%A8%D9%86%DB%8C%D8%A7%D9%86" title="8 مطلب جدید">شرکت دانش بنیان</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem7">
                            <a href="/tag/%DA%AF%D9%88%DA%AF%D9%84" title="7 مطلب جدید">گوگل</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem7">
                            <a href="/tag/%D9%81%DB%8C%D8%A8%D8%B1+%D9%86%D9%88%D8%B1%DB%8C" title="7 مطلب جدید">فیبر نوری</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem7">
                            <a href="/tag/%D8%AD%D8%A7%DA%A9%D9%85%DB%8C%D8%AA+%D8%B3%D8%A7%DB%8C%D8%A8%D8%B1%DB%8C" title="7 مطلب جدید">حاکمیت سایبری</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D9%88%D8%B2%D8%A7%D8%B1%D8%AA+%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7%D8%A7%D8%AA+%D9%88+%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C+%D8%A7%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA" title="6 مطلب جدید">وزارت ارتباطات و فناوری اطلاعات</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D8%B3%D9%84" title="6 مطلب جدید">ایرانسل</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D9%86%D9%88%D8%A2%D9%88%D8%B1%DB%8C" title="5 مطلب جدید">نوآوری</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D9%86%D8%AE%D8%A8%DA%AF%D8%A7%D9%86" title="5 مطلب جدید">نخبگان</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D8%A8%D9%86%DB%8C%D8%A7%D8%AF+%D9%85%D9%84%DB%8C+%D9%86%D8%AE%D8%A8%DA%AF%D8%A7%D9%86" title="5 مطلب جدید">بنیاد ملی نخبگان</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D8%A8%D9%88%D9%85%DB%8C+%D8%B3%D8%A7%D8%B2%DB%8C" title="5 مطلب جدید">بومی سازی</a>
                        </h3>
                    </li>
            </ul>
            <div class="clearfix"></div>
        </section>
    </div>
                </div>
                <div class="col-12 col-sm-5 col-lg-3">
                    <div class="footer-icons">
                        <ul>
                            <li>
                                <a title="تلگرام" target="_blank" href="https://t.me/mehrnews"><i class="icon-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a title="بله" target="_blank" href="https://ble.ir/mehrnews"><i class="icon-bale"></i>
                                </a>
                            </li>
                            <li>
                                <a title="اینستاگرام" target="_blank" href="https://www.instagram.com/mehr_agency/"><i class="icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a title="توییتر" target="_blank" href="https://twitter.com/mehrnews_ir"><i class="icon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a title="روبیکا" target="_blank" href="http://rubika.ir/mehrnews"><i class="icon-rubika6"></i>
                                </a>
                            </li>
                            <li>
                                <a title="فید RSS" target="_blank" href="/rss-help"><i class="icon-rss"></i>
                                </a>
                            </li>
                            <li>
                                <a title="آرشیو اخبار" target="_blank" href="/archive"><i class="icon-list"></i>
                                </a>
                            </li>
                            <li>
                                <a title="ایتا" target="_blank" href="http://eitaa.com/mehrnews"><i class="icon-eitaa"></i>
                                </a>
                            </li>
                        </ul>

                            
                        <div class="clearfix"></div>
                    </div>
                    <div class="search">
                        <form role="form" action="/search" method="get">
                            <div class="input-group">
                                <input type="text" name="q" value="" placeholder="جستجو..." />
                                <button type="submit"><i class="icon-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="responsive-tools row">
                <div class="col-12">
                    <div class="toggle-versions">
                        <a id="desktop-version" href="#" class="btn btn-info d-inline-block d-md-none">نسخه دسکتاپ</a>
                        <a id="mobile-version" href="#" class="btn btn-info d-none d-md-inline-block">نسخه موبایل</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div id="footer-logo">
                            <a href="/">
                                <img src="/resources/theme/mehrnews/img/footer-logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div id="footer-menu">
                        <ul>
                                <li><a target="_blank" href="/news/2408725/">درباره ما</a></li>
                                <li><a target="_blank" href="/news/2408727/">تماس با ما</a></li>
                                <li><a target="_blank" href="/news/2409272/">بازرگانی</a></li>
                            
                        </ul>
                        </div>
                        
                        <p class="copyright-text">All Content by Mehr News Agency is licensed under a Creative Commons Attribution 4.0 International License.</p>
                    </div>
                </div>
                <div id="mastfoot">
                    <div class="poweredby">
                        <a title="Nastooh Saba Newsroom" target="_blank" href="http://www.nastooh.ir">
                            <img src="/resources/theme/mehrnews/img/nastooh-logo.png" width="36" height="18" alt="Nastooh Saba Newsroom" />طراحی و تولید: نستوه
                        </a>
                        <a title="Pixel Studio" target="_blank" href="http://www.pixelstudio.ir">
                            <img src="/resources/theme/mehrnews/img/pixelstudio-logo.png" width="18" height="18" alt="Pixel Studio" />گرافیک: استودیو پیکسل
                        </a>
                    </div>
                    <div class="url-holder"></div>
                </div>
            </div>
        </div>
    </footer>
    <script src="/resources/theme/global/js/vendor/owl.carousel/2.3.1-modified/owl.carousel.js"></script>
    <script src="/resources/theme/global/js/global-2.1.min.js?_=20240206"></script>
    <script src="/resources/theme/mehrnews/js/main.min.js?_=20240205"></script><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E32N3ZY0X8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E32N3ZY0X8');
</script>

<!--<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "9qr99kb52k");
</script>-->
<script type="text/javascript">
(function () {
var now = new Date();
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.async = true;
var script_address = 'https://player.tavoos.net/jwplayer-nastooh.js';
script.charset = "utf-8";
script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() ;
script.id = "jwplayer_player_js";
script.setAttribute("meta-vast", "nastooh:vasturl");
head.appendChild(script);
})();
</script>
<script type="text/javascript">
    (function(){
        var now = new Date();
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async=true;
        script.setAttribute('TavoosToken','b3shPsUX-kUEf-WTTX-kX7G-gUstZHCwoGlY');
        script.id = 'tavoos_native_video_script';
        var script_address = 'https://cdn.tavoos.net/services/smoothie/loader.js';
        script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
        head.appendChild(script);
    })();
</script>
    </body>
</html>