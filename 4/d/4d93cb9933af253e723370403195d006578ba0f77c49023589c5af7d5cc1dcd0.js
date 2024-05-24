"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[327,9285,3515],{1689:function(t,e,n){function r(t){return"number"==typeof t}function i(t){return"string"==typeof t}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function a(t){return o(t)||function(t){return Array.isArray(t)}(t)}function u(t){return Math.abs(t)}function s(t){return t?t/u(t):0}function c(t,e){return u(t-e)}function l(t){return p(t).map(Number)}function d(t){return t[f(t)]}function f(t){return Math.max(0,t.length-1)}function p(t){return Object.keys(t)}function v(t,e){return[t,e].reduce((function(t,e){return p(e).forEach((function(n){var r=t[n],i=e[n],a=o(r)&&o(i);t[n]=a?v(r,i):i})),t}),{})}function m(t,e){var n=p(t),r=p(e);return n.length===r.length&&n.every((function(n){var r=t[n],i=e[n];return"function"==typeof r?"".concat(r)==="".concat(i):a(r)&&a(i)?m(r,i):r===i}))}function h(t,e){var n={start:function(){return 0},center:function(t){return i(t)/2},end:i};function i(t){return e-t}return{measure:function(i){return r(t)?e*Number(t):n[t](i)}}}function g(t,e){var n=u(t-e);function r(e){return e<t}function i(t){return t>e}function o(t){return r(t)||i(t)}return{length:n,max:e,min:t,constrain:function(n){return o(n)?r(n)?t:e:n},reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function y(t,e,n){var r=g(0,t),i=r.min,o=r.constrain,a=t+1,s=c(e);function c(t){return n?u((a+t)%a):o(t)}function l(){return s}function d(t){return s=c(t),f}var f={add:function(t){return d(l()+t)},clone:function(){return y(t,l(),n)},get:l,set:d,min:i,max:t};return f}function x(){var t=[];var e={add:function(n,r,i,o){return void 0===o&&(o={passive:!0}),n.addEventListener(r,i,o),t.push((function(){return n.removeEventListener(r,i,o)})),e},removeAll:function(){return t=t.filter((function(t){return t()})),e}};return e}function b(t){var e=t;function n(t){return e/=t,o}function i(t){return r(t)?t:t.get()}var o={add:function(t){return e+=i(t),o},divide:n,get:function(){return e},multiply:function(t){return e*=t,o},normalize:function(){return 0!==e&&n(e),o},set:function(t){return e=i(t),o},subtract:function(t){return e-=i(t),o}};return o}function w(t,e,n,r,i,o,a,l,d,f,p,v,m,h,g,y){var w=t.cross,k=["INPUT","SELECT","TEXTAREA"],S={passive:!1},C=b(0),_=x(),T=x(),O=m.measure(20),P={mouse:300,touch:400},A={mouse:500,touch:600},E=g?5:16,j=1,z=0,I=0,D=!1,M=!1,L=!1,B=!1;function q(t){if(!((B=!i.isTouchEvent(t))&&0!==t.button||(e=t.target,a=e.nodeName||"",k.indexOf(a)>-1))){var e,a,u=c(r.get(),o.get())>=2,s=B||!u;D=!0,i.pointerDown(t),C.set(r),r.set(o),d.useBaseMass().useSpeed(80),function(){var t=B?document:n;T.add(t,"touchmove",N,S).add(t,"touchend",V).add(t,"mousemove",N,S).add(t,"mouseup",V)}(),z=i.readPoint(t),I=i.readPoint(t,w),v.emit("pointerDown"),s&&(L=!1)}}function N(t){if(!M&&!B){if(!t.cancelable)return V(t);var n=i.readPoint(t),o=i.readPoint(t,w),u=c(n,z),s=c(o,I);if(!(M=u>s)&&!L)return V(t)}var l=i.pointerMove(t);!L&&l&&(L=!0),a.start(),r.add(e.apply(l)),t.preventDefault()}function V(t){var n=f.byDistance(0,!1).index!==p.get(),o=i.pointerUp(t)*(g?A:P)[B?"mouse":"touch"],a=function(t,e){var n=p.clone().add(-1*s(t)),r=n.get()===p.min||n.get()===p.max,i=f.byDistance(t,!g).distance;return g||u(t)<O?i:!h&&r?.4*i:y&&e?.5*i:f.byIndex(n.get(),0).distance}(e.apply(o),n),m=function(t,e){if(0===t||0===e)return 0;if(u(t)<=u(e))return 0;var n=c(u(t),u(e));return u(n/t)}(o,a),x=c(r.get(),C.get())>=.5,b=n&&m>.75,w=u(o)<O,k=b?10:E,S=b?j+2.5*m:j;x&&!B&&(L=!0),M=!1,D=!1,T.removeAll(),d.useSpeed(w?9:k).useMass(S),l.distance(a,!g),B=!1,v.emit("pointerUp")}function U(t){L&&(t.stopPropagation(),t.preventDefault())}return{addActivationEvents:function(){var t=n;_.add(t,"dragstart",(function(t){return t.preventDefault()}),S).add(t,"touchmove",(function(){}),S).add(t,"touchend",(function(){})).add(t,"touchstart",q).add(t,"mousedown",q).add(t,"touchcancel",V).add(t,"contextmenu",V).add(t,"click",U,!0)},clickAllowed:function(){return!L},pointerDown:function(){return D},removeAllEvents:function(){_.removeAll(),T.removeAll()}}}function k(t,e,n){var r,i,o=(r=2,i=Math.pow(10,r),function(t){return Math.round(t*i)/i}),a=b(0),u=b(0),c=b(0),l=0,d=e,f=n;function p(t){return d=t,m}function v(t){return f=t,m}var m={direction:function(){return l},seek:function(e){c.set(e).subtract(t);var n,r,i,o,p=(n=c.get(),(i=0)+(n-(r=0))/(100-r)*(d-i));return l=s(c.get()),c.normalize().multiply(p).subtract(a),(o=c).divide(f),u.add(o),m},settle:function(e){var n=e.get()-t.get(),r=!o(n);return r&&t.set(e),r},update:function(){a.add(u),t.add(a),u.multiply(0)},useBaseMass:function(){return v(n)},useBaseSpeed:function(){return p(e)},useMass:v,useSpeed:p};return m}function S(t,e,n,r,i){var o=i.measure(10),a=i.measure(50),s=!1;return{constrain:function(i){if(!s&&t.reachedAny(n.get())&&t.reachedAny(e.get())){var c=t.reachedMin(e.get())?"min":"max",l=u(t[c]-e.get()),d=n.get()-e.get(),f=Math.min(l/a,.85);n.subtract(d*f),!i&&u(d)<o&&(n.set(t.constrain(n.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(t){s=!t}}}function C(t,e,n,r){var i=g(-e+t,n[0]),o=n.map(i.constrain);return{snapsContained:function(){if(e<=t)return[i.max];if("keepSnaps"===r)return o;var n=function(){var t=o[0],e=d(o),n=o.lastIndexOf(t),r=o.indexOf(e)+1;return g(n,r)}(),a=n.min,u=n.max;return o.slice(a,u)}()}}function _(t,e,n,r){var i=g(e.min+.1,e.max+.1),o=i.reachedMin,a=i.reachedMax;return{loop:function(e){if(function(t){return 1===t?a(n.get()):-1===t&&o(n.get())}(e)){var i=t*(-1*e);r.forEach((function(t){return t.add(i)}))}}}}function T(t){var e=t.max,n=t.length;return{get:function(t){return(t-e)/-n}}}function O(t,e,n,r,i){var o=r.reachedAny,a=r.removeOffset,c=r.constrain;function l(t){return t.concat().sort((function(t,e){return u(t)-u(e)}))[0]}function d(e,r){var i=[e,e+n,e-n];return t?l(r?i.filter((function(t){return s(t)===r})):i):i[0]}return{byDistance:function(n,r){var s=i.get()+n,l=function(n){var r=t?a(n):c(n);return{index:e.map((function(t){return t-r})).map((function(t){return d(t,0)})).map((function(t,e){return{diff:t,index:e}})).sort((function(t,e){return u(t.diff)-u(e.diff)}))[0].index,distance:r}}(s),f=l.index,p=l.distance,v=!t&&o(s);return!r||v?{index:f,distance:n}:{index:f,distance:n+d(e[f]-p,0)}},byIndex:function(t,n){return{index:t,distance:d(e[t]-i.get(),n)}},shortcut:d}}function P(t,e,n){var r="x"===t.scroll?function(t){return"translate3d(".concat(t,"px,0px,0px)")}:function(t){return"translate3d(0px,".concat(t,"px,0px)")},i=n.style,o=!1;return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(t){o||(i.transform=r(e.apply(t.get())))},toggleActive:function(t){o=!t}}}function A(t,e,n,r,i,o,a,u,s){var c,d=l(i),f=l(i).reverse(),p=(c=o[0]-1,h(m(f,c),"end")).concat(function(){var t=n-o[0]-1,e=m(d,t);return h(e,"start")}());function v(t,e){return t.reduce((function(t,e){return t-i[e]}),e)}function m(t,e){return t.reduce((function(t,n){return v(t,e)>0?t.concat([n]):t}),[])}function h(n,i){var o="start"===i,c=o?-r:r,l=a.findSlideBounds([c]);return n.map((function(n){var i=o?0:-r,a=o?r:0,c=l.filter((function(t){return t.index===n}))[0][o?"end":"start"],d=b(-1),f=b(-1),p=P(t,e,s[n]);return{index:n,location:f,translate:p,target:function(){return d.set(u.get()>c?i:a)}}}))}return{canLoop:function(){return p.every((function(t){var e=t.index;return v(d.filter((function(t){return t!==e})),n)<=.1}))},clear:function(){p.forEach((function(t){return t.translate.clear()}))},loop:function(){p.forEach((function(t){var e=t.target,n=t.translate,r=t.location,i=e();i.get()!==r.get()&&(0===i.get()?n.clear():n.to(i),r.set(i))}))},loopPoints:p}}function E(t,e,n,r,i,o,a){var u=i.removeOffset,s=i.constrain,c=.5,l=o?[0,e,-e]:[0],d=f(l,a);function f(e,i){var o=e||l,a=function(t){var e=t||0;return n.map((function(t){return g(c,t-c).constrain(t*e)}))}(i);return o.reduce((function(e,i){var o=r.map((function(e,r){return{start:e-n[r]+a[r]+i,end:e+t-a[r]+i,index:r}}));return e.concat(o)}),[])}return{check:function(t,e){var n=o?u(t):s(t);return(e||d).reduce((function(t,e){var r=e.index,i=e.start,o=e.end;return!(-1!==t.indexOf(r))&&(i<n&&o>n)?t.concat([r]):t}),[])},findSlideBounds:f}}function j(t,e,n){var i=r(n);return{groupSlides:function(r){return i?function(t,e){return l(t).filter((function(t){return t%e==0})).map((function(n){return t.slice(n,n+e)}))}(r,n):function(n){return l(n).reduce((function(n,r){var i=e.slice(d(n),r+1).reduce((function(t,e){return t+e}),0);return!r||i>t?n.concat(r):n}),[]).map((function(t,e,r){return n.slice(t,r[e+1])}))}(r)}}}function z(t,e,n,r,i){var o=r.align,a=r.axis,s=r.direction,c=r.startIndex,p=r.inViewThreshold,v=r.loop,m=r.speed,z=r.dragFree,I=r.slidesToScroll,D=r.skipSnaps,M=r.containScroll,L=e.getBoundingClientRect(),B=n.map((function(t){return t.getBoundingClientRect()})),q=function(t){var e="rtl"===t?-1:1;return{apply:function(t){return t*e}}}(s),N=function(t,e){var n="y"===t?"y":"x";return{scroll:n,cross:"y"===t?"x":"y",startEdge:"y"===n?"top":"rtl"===e?"right":"left",endEdge:"y"===n?"bottom":"rtl"===e?"left":"right",measureSize:function(t){var e=t.width,r=t.height;return"x"===n?e:r}}}(a,s),V=N.measureSize(L),U=function(t){return{measure:function(e){return t*(e/100)}}}(V),Z=h(o,V),$=!v&&""!==M,H=function(t,e,n,r,i){var o=t.measureSize,a=t.startEdge,s=t.endEdge,c=n[0]&&i,l=function(){if(!c)return 0;var t=n[0];return u(e[a]-t[a])}(),p=function(){if(!c)return 0;var t=window.getComputedStyle(d(r));return parseFloat(t.getPropertyValue("margin-".concat(s)))}(),v=n.map(o),m=n.map((function(t,e,n){var r=!e,i=e===f(n);return r?v[e]+l:i?v[e]+p:n[e+1][a]-t[a]})).map(u);return{slideSizes:v,slideSizesWithGaps:m}}(N,L,B,n,v||""!==M),R=H.slideSizes,F=H.slideSizesWithGaps,K=j(V,F,I),W=function(t,e,n,r,i,o,a){var s,c=t.startEdge,l=t.endEdge,p=o.groupSlides,v=p(r).map((function(t){return d(t)[l]-t[0][c]})).map(u).map(e.measure),m=r.map((function(t){return n[c]-t[c]})).map((function(t){return-u(t)})),h=(s=d(m)-d(i),p(m).map((function(t){return t[0]})).map((function(t,e,n){var r=!e,i=e===f(n);return a&&r?0:a&&i?s:t+v[e]})));return{snaps:m,snapsAligned:h}}(N,Z,L,B,F,K,$),G=W.snaps,J=W.snapsAligned,X=-d(G)+d(F),Y=C(V,X,J,M).snapsContained,Q=$?Y:J,tt=function(t,e,n){var r,i;return{limit:(r=e[0],i=d(e),g(n?r-t:i,r))}}(X,Q,v).limit,et=y(f(Q),c,v),nt=et.clone(),rt=l(n),it=function(t){var e=0;function n(t,n){return function(){t===!!e&&n()}}function r(){e=window.requestAnimationFrame(t)}return{proceed:n(!0,r),start:n(!1,r),stop:n(!0,(function(){window.cancelAnimationFrame(e),e=0}))}}((function(){v||pt.scrollBounds.constrain(pt.dragHandler.pointerDown()),pt.scrollBody.seek(ut).update();var t=pt.scrollBody.settle(ut);t&&!pt.dragHandler.pointerDown()&&(pt.animation.stop(),i.emit("settle")),t||i.emit("scroll"),v&&(pt.scrollLooper.loop(pt.scrollBody.direction()),pt.slideLooper.loop()),pt.translate.to(at),pt.animation.proceed()})),ot=Q[et.get()],at=b(ot),ut=b(ot),st=k(at,m,1),ct=O(v,Q,X,tt,ut),lt=function(t,e,n,r,i,o){function a(r){var a=r.distance,u=r.index!==e.get();a&&(t.start(),i.add(a)),u&&(n.set(e.get()),e.set(r.index),o.emit("select"))}return{distance:function(t,e){a(r.byDistance(t,e))},index:function(t,n){var i=e.clone().set(t);a(r.byIndex(i.get(),n))}}}(it,et,nt,ct,ut,i),dt=E(V,X,R,G,tt,v,p),ft=w(N,q,t,ut,function(t){var e,n;function r(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function i(t){return t.timeStamp}function o(e,n){var i=n||t.scroll,o="client".concat("x"===i?"X":"Y");return(r(e)?e.touches[0]:e)[o]}return{isTouchEvent:r,pointerDown:function(t){return e=t,n=t,o(t)},pointerMove:function(t){var r=o(t)-o(n),a=i(t)-i(e)>170;return n=t,a&&(e=t),r},pointerUp:function(t){if(!e||!n)return 0;var r=o(n)-o(e),a=i(t)-i(e),s=i(t)-i(n)>170,c=r/a;return a&&!s&&u(c)>.1?c:0},readPoint:o}}(N),at,it,lt,st,ct,et,i,U,v,z,D),pt={containerRect:L,slideRects:B,animation:it,axis:N,direction:q,dragHandler:ft,eventStore:x(),percentOfView:U,index:et,indexPrevious:nt,limit:tt,location:at,options:r,scrollBody:st,scrollBounds:S(tt,at,ut,st,U),scrollLooper:_(X,tt,at,[at,ut]),scrollProgress:T(tt),scrollSnaps:Q,scrollTarget:ct,scrollTo:lt,slideLooper:A(N,q,V,X,F,Q,dt,at,n),slidesToScroll:K,slidesInView:dt,slideIndexes:rt,target:ut,translate:P(N,q,e)};return pt}n.d(e,{Z:function(){return M}});var I={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function D(){function t(t,e){return v(t,e||{})}return{merge:t,areEqual:function(t,e){return JSON.stringify(p(t.breakpoints||{}))===JSON.stringify(p(e.breakpoints||{}))&&m(t,e)},atMedia:function(e){var n=e.breakpoints||{},r=p(n).filter((function(t){return window.matchMedia(t).matches})).map((function(t){return n[t]})).reduce((function(e,n){return t(e,n)}),{});return t(e,r)}}}function M(t,e,n){var r,o,a,u,s=x(),c=D(),l=function(){var t=D(),e=t.atMedia,n=t.areEqual,r=[],i=[];function o(t){var r=e(t.options);return function(){return!n(r,e(t.options))}}var a={init:function(t,n){return i=t.map(o),(r=t.filter((function(t){return e(t.options).active}))).forEach((function(t){return t.init(n)})),t.reduce((function(t,e){var n;return Object.assign(t,((n={})[e.name]=e,n))}),{})},destroy:function(){r=r.filter((function(t){return t.destroy()}))},haveChanged:function(){return i.some((function(t){return t()}))}};return a}(),d=function(){var t={};function e(e){return t[e]||[]}var n={emit:function(t){return e(t).forEach((function(e){return e(t)})),n},off:function(r,i){return t[r]=e(r).filter((function(t){return t!==i})),n},on:function(r,i){return t[r]=e(r).concat([i]),n}};return n}(),f=d.on,p=d.off,v=k,m=!1,h=c.merge(I,M.globalOptions),g=c.merge(h),y=[],b=0;function w(e,n){if(!m){if(h=c.merge(h,e),g=c.atMedia(h),function(){var e=g.container,n=g.slides,r=i(e)?t.querySelector(e):e;a=r||t.children[0];var o=i(n)?a.querySelectorAll(n):n;u=[].slice.call(o||a.children)}(),r=z(t,a,u,g,d),b=r.axis.measureSize(t.getBoundingClientRect()),!g.active)return S();if(r.translate.to(r.location),y=n||y,o=l.init(y,O),g.loop){if(!r.slideLooper.canLoop())return S(),w({loop:!1},n),void(h=c.merge(h,{loop:!0}));r.slideLooper.loop()}g.draggable&&a.offsetParent&&u.length&&r.dragHandler.addActivationEvents()}}function k(t,e){var n=T();S(),w(c.merge({startIndex:n},t),e),d.emit("reInit")}function S(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),l.destroy()}function C(t){var e=r[t?"target":"location"].get(),n=g.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[n](e))}function _(t,e,n){g.active&&!m&&(r.scrollBody.useBaseMass().useSpeed(e?100:g.speed),r.scrollTo.index(t,n||0))}function T(){return r.index.get()}var O={canScrollNext:function(){return r.index.clone().add(1).get()!==T()},canScrollPrev:function(){return r.index.clone().add(-1).get()!==T()},clickAllowed:function(){return r.dragHandler.clickAllowed()},containerNode:function(){return a},internalEngine:function(){return r},destroy:function(){m||(m=!0,s.removeAll(),S(),d.emit("destroy"))},off:p,on:f,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:v,rootNode:function(){return t},scrollNext:function(t){_(r.index.clone().add(1).get(),!0===t,-1)},scrollPrev:function(t){_(r.index.clone().add(-1).get(),!0===t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnaps.map(r.scrollProgress.get)},scrollTo:_,selectedScrollSnap:T,slideNodes:function(){return u},slidesInView:C,slidesNotInView:function(t){var e=C(t);return r.slideIndexes.filter((function(t){return-1===e.indexOf(t)}))}};return w(e,n),s.add(window,"resize",(function(){var e=c.atMedia(h),n=!c.areEqual(e,g),i=r.axis.measureSize(t.getBoundingClientRect()),o=b!==i,a=l.haveChanged();(o||n||a)&&k(),d.emit("resize")})),setTimeout((function(){return d.emit("init")}),0),O}M.globalOptions=void 0,M.optionsHandler=D},9285:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r={name:"AvatarsSlide",props:{creators:{type:Array,required:!0}},methods:{register(){posthog.capture("video-landing.discover-more.cta.click"),this.$inertia.visit(this.route("register"))},avatarClick(t){posthog.capture("video-landing.discover-more.avatar.click",{counterparty:{id:t.id,nickname:t.nickname}}),this.$inertia.visit(t.profileUrl)}}},i=(0,n(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"embla__slide relative flex h-full w-full min-w-0 shrink-0 grow-0 basis-full flex-col items-center justify-center overflow-hidden"},[e("div",{staticClass:"z-100 grid grid-cols-2 items-center justify-center gap-4 p-4 text-white"},t._l(t.creators,(function(n){return e("div",{key:`creator-${n.id}`},[e("v-avatar",{staticClass:"aspect-thumbnail max-h-[280px] w-full",attrs:{lazyload:!1,url:n.thumbnail,classes:"rounded-xl border border-success shadow-[0_0_12px] shadow-success","online-classes":"bottom-2 right-2","is-online":!0},on:{click:function(e){return t.avatarClick(n)}}}),t._v(" "),e("v-text",{staticClass:"notranslate ml-2 mt-2 min-w-0 truncate text-base font-semibold"},[t._v("\n        "+t._s(n.nickname)+"\n      ")])],1)})),0),t._v(" "),e("v-button",{staticClass:"min-w-[80%] justify-center whitespace-nowrap",attrs:{size:"large"},on:{click:t.register}},[t._v("\n    "+t._s(t.__("layout.discover_more_creators"))+"\n  ")])],1)}),[],!1,null,null,null).exports},3515:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(5121),i=n(83),o=n(4487),a={name:"VideoSlide",components:{Link:n(6454).rU},mixins:[i.Z],props:{creator:{type:Object,required:!0},content:{type:Object,required:!0},mainCtaText:{type:String,required:!1,default:null},profileCtaText:{type:String,required:!1,default:null},active:{type:Boolean,required:!0},muted:{type:Boolean,required:!0}},data(){return{brokenLink:!1,isPlaying:!1,timeout:null}},computed:{brokenImage(){return this.processImage({url:"/img/thumbnail/broken-video-link.png",width:480,height:270,format:"auto"})},src(){return this.processImage({url:this.content.filename,width:{mobile:1024,desktop:1920}})},profileUrl(){return route("users.show",{nickname:this.creator.nickname})},playerOptions(){return{playsinline:!0,suppressNotSupportedError:!0,errorDisplay:!1,preload:"metadata",poster:this.content.thumbnail,html5:{nativeTextTracks:!0},controls:!1,loop:!0,autoplay:!0,muted:this.muted,sources:[{src:this.content.filename??this.content.clip,type:"video/mp4"}],controlBar:{fullscreenToggle:!1,pictureInPictureToggle:!1,remainingTimeDisplay:!1,currentTimeDisplay:!0,timeDivider:!0,durationDisplay:!0}}}},watch:{active:{handler(t){t?this.timeout=setTimeout((()=>{r.Z.post(this.route("videos.view",{id:this.content.id}))}),5e3):clearTimeout(this.timeout),t?this.$nextTick((()=>{this.initialize()})):setTimeout((()=>{this.player?.pause()}),1)},immediate:!0},muted:{handler(t){this.player?.muted(t)}}},beforeDestroy(){clearTimeout(this.timeout)},methods:{initialize(){this.initializePlayer(this.playerOptions,this.events).then((()=>{this.play(),this.player&&this.player.children()[0].classList.add("object-fill")}))},events(){this.player.on("play",(()=>{this.isPlaying=!0})),this.player.on("pause",(()=>{this.isPlaying=!1})),this.player.on("stop",(()=>{this.isPlaying=!1}))},play(){this.player&&this.player.play().catch((t=>{o.Tb(t)}))},setBrokenLink(){this.$shared.isCrawler||(this.player.pause(),this.player.poster(this.brokenImage),this.brokenLink=!0)},toggleSound(){this.$emit("toggle-sound")},register(){posthog.capture("video-landing.overlay-register-click",{counterparty:{id:this.creator.id,nickname:this.creator.nickname}}),this.$inertia.visit(this.route("register",{creatorId:this.creator.id}))}}},u=(0,n(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"embla__slide relative h-full w-full min-w-0 shrink-0 grow-0 basis-full"},[e("div",{staticClass:"absolute left-4 top-4 z-2000 flex items-center justify-center gap-4 p-4 text-white"},[e("v-avatar",{staticClass:"h-16 w-16 shrink-0",attrs:{lazyload:!1,url:t.creator.avatar_circle,"full-rounded":"",href:t.profileUrl}}),t._v(" "),e("div",{staticClass:"flex flex-col gap-2"},[e("Link",{attrs:{href:t.profileUrl}},[e("v-text",{attrs:{tag:"h4"}},[t._v(t._s(t.creator.nickname))])],1),t._v(" "),e("v-button",{staticClass:"h-auto w-fit p-2 dark:!bg-gray-primary/50",attrs:{variant:"bordered",href:t.profileUrl}},[e("v-text",[t._v(t._s(t.profileCtaText?t.profileCtaText:t.__("layout.view_profile")))])],1)],1)],1),t._v(" "),e("button",{staticClass:"absolute right-4 top-4 z-2000 flex items-center justify-center p-4 text-white",attrs:{"aria-label":"Toggle sound"},on:{click:function(e){return e.stopPropagation(),t.toggleSound.apply(null,arguments)}}},[e("v-icon",{staticClass:"h-8 w-8 cursor-pointer text-white shadow-black drop-shadow-sm",attrs:{name:t.muted?"volume-off":"volume-on"}})],1),t._v(" "),t.isPlaying||t.brokenLink?t._e():e("div",{staticClass:"absolute left-1/2 top-1/2 z-10 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center",on:{click:t.initialize}},[e("button",{staticClass:"flex h-16 w-16 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 text-white transition hover:scale-105"},[e("v-icon",{staticClass:"is-icon h-7 w-7 text-white shadow-black drop-shadow",attrs:{name:"play-alt"}})],1)]),t._v(" "),e("div",{staticClass:"absolute z-0 flex h-full w-full items-center justify-center overflow-hidden"},[e("video",{ref:"videoPlayer",staticClass:"video-js-overlay hidden",attrs:{preload:"none"},on:{error:t.setBrokenLink}}),t._v(" "),e("img",{staticClass:"absolute inset-0 -z-1 h-full w-full scale-110 object-cover blur-lg",attrs:{draggable:"false",src:t.content.thumbnail,alt:t.creator.nickname}})]),t._v(" "),e("v-button",{staticClass:"absolute bottom-0 left-1/2 z-100 flex min-w-[80%] -translate-x-1/2 -translate-y-1/2 justify-center whitespace-nowrap",attrs:{size:"large"},on:{click:t.register}},[t._v("\n    "+t._s(t.mainCtaText?t.mainCtaText:t.__("layout.message_me"))+"\n  ")])],1)}),[],!1,null,null,null),s=u.exports},327:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(6190),i=n(1689),o=n(629),a=n(8070),u=n(8838),s=n(3515),c=n(3885);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){var r;return(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={name:"VideoSlider",components:{AvatarsSlide:n(9285).default,VText:u.Z,VIcon:a.Z,VideoSlide:s.default},mixins:[r.o4],props:{slots:{type:Array,required:!0},topCreators:{type:Array,required:!0},mainCtaText:{type:String,required:!1,default:null},profileCtaText:{type:String,required:!1,default:null}},data(){return{swipeTimeout:null,slider:null,showInfo:!0}},computed:d({},(0,o.Se)("videoOverlay",["muted"])),mounted(){document.body.style.setProperty("overflow","hidden"),document.addEventListener("keydown",this.handleKeydown),this.slider=(0,i.Z)(this.$refs.slider,{loop:!0,align:"center",startIndex:this.value,axis:"y"}),this.slider.on("select",this.slideChange)},beforeDestroy(){document.body.style.removeProperty("overflow"),document.removeEventListener("keydown",this.handleKeydown),clearTimeout(this.swipeTimeout),this.slider.off("select",this.slideChange),this.slider.destroy()},methods:d(d({},(0,o.nv)("videoOverlay",["toggleMuted"])),{},{slideChange(){this.showInfo=!1,this.model=this.slider.selectedScrollSnap(),posthog.capture("video-landing.overlay-slide-change",{counterparty:{id:this.slots[0].user.id,nickname:this.slots[0].user.nickname}})},handleKeydown(t){this.swipeTimeout||(clearTimeout(this.swipeTimeout),this.swipeTimeout=setTimeout((()=>{this.swipeTimeout=null}),500),t.keyCode===c.Z.UP?this.next():t.keyCode===c.Z.DOWN&&this.previous())},toggleSound(){this.toggleMuted()},next(){this.slider.scrollNext()},previous(){this.slider.scrollPrev()}})},v=(0,n(1900).Z)(p,(function(){var t=this,e=t._self._c;return e("div",{ref:"content",staticClass:"fixed inset-0 z-[9999] h-full w-screen",on:{contextmenu:function(t){t.preventDefault()}}},[e("div",{staticClass:"relative mx-auto h-full max-h-screen w-full flex-col items-center"},[t.showInfo?e("div",{staticClass:"absolute bottom-20 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-2"},[e("v-icon",{staticClass:"mx-auto h-12 w-12 animate-bounce text-white",attrs:{name:"chevron-up"}}),t._v(" "),e("v-text",{staticClass:"animate-pulse",attrs:{tag:"h4"}},[t._v(t._s(t.__("layout.swipe_up")))])],1):t._e(),t._v(" "),e("div",{ref:"slider",staticClass:"embla h-full min-h-full w-full overflow-hidden"},[e("div",{staticClass:"embla__container h-full w-full flex-col"},[t._l(t.slots,(function(n,r){return e("VideoSlide",{key:`video-slide-${r}`,attrs:{"profile-cta-text":t.profileCtaText,"main-cta-text":t.mainCtaText,active:t.value===r,creator:n.user,content:n,muted:t.muted},on:{"toggle-sound":t.toggleSound}})})),t._v(" "),t._l(t.topCreators,(function(t,n){return e("AvatarsSlide",{key:`avatars-slide-${n}`,attrs:{creators:t}})}))],2)])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=327.js.map?id=881cb7027d303510ay:flex;align-items:center;justify-content:center;flex-wrap:nowrap;width:100%;color:#fff;font-size:14px;padding:15px 0}.mobile-small-nav li a .text{line-height:1}.mobile-small-nav li a svg{margin:0 5px 0 0;font-size:20px;fill:#276fdb}.mobile-small-nav li:last-child{border:none}.mobile-small-nav li:last-child a{color:#45b004}.mobile-small-nav li:last-child a svg{fill:#45b004}.main_nav{background-color:#151515;position:absolute;z-index:999;top:68px;width:100%;display:none}.open-menu .main_nav{display:block}.main_nav .fist-nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;box-shadow:0 -4px 13px rgba(0,0,0,.58);border:2px solid #1b1b1b;border-right:none;border-left:none;background-color:#151515;padding:0 16px}.fist-nav a{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff;font-size:12px;padding:6px 0}.fist-nav a svg{fill:#276fdb;font-size:20px;margin:0 0 10px;width:30px}.second-nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:10px 5px}.second-nav li{width:50%;padding:0 5px 10px}.second-nav li a{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;position:relative;color:#fff;font-size:14px;border-radius:20px;padding:12px 0;background-color:#212121}.second-nav li a svg{fill:#276fdb;left:15px;top:50%;transform:translateY(-50%);font-size:20px;position:absolute}.second-nav li.selected a{color:#fff;background:#276fdb}.second-nav li.selected a svg{fill:#fff}.second-nav li:last-child{width:100%}.second-nav li:last-child a{color:#45b004}.second-nav li:last-child a svg{fill:#45b004}.header_new .third-nav .user_menu{display:flex;padding:0}.third-nav{padding:10px 5px 30px}.third-nav .user-links{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;width:100%}.third-nav .user-links li{width:50%;padding:0 5px}.third-nav .user-links li a{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;position:relative;color:#fff;font-size:14px;padding:12px 0;border-radius:20px;background-color:#276fdb}.third-nav .user-links li a svg{left:15px;top:50%;transform:translateY(-50%);font-size:20px;position:absolute}.third-nav .user-links li:first-child a{color:#151515;background:#fff}.third-nav .user-links li:first-child a svg{fill:#276fdb}.main_nav.footer_mobile{display:block;position:fixed;bottom:0;top:auto}.main_nav_footer{border-top:1px solid #1b1b1b;display:none}.open-menu-footer .main_nav_footer{display:block}}.list-categories .img{padding-bottom:55.44%}</style>
<link rel="icon" href="https://4kporn.xxx/favicon.ico?v=1" type="image/x-icon">
<link rel="shortcut icon" href="https://4kporn.xxx/favicon.ico?v=1" type="image/x-icon">
<link href="https://4kporn.xxx/static/styles/all-responsive-metal.css?v=8.4" rel="preload" as="style" />
<link href="https://4kporn.xxx/static/styles/jquery.fancybox-metal.css?v=8.4" rel="preload" as="style" />
<link href="https://4kporn.xxx/static/styles/custom.css?v=8.5" rel="preload" as="style" />
<link href="https://4kporn.xxx/static/styles/all-responsive-metal.css?v=8.4" rel="stylesheet" type="text/css" />
<link href="https://4kporn.xxx/static/styles/jquery.fancybox-metal.css?v=8.4" rel="stylesheet" type="text/css" />
<link href="https://4kporn.xxx/static/styles/custom.css?v=8.5" rel="stylesheet" type="text/css" />
<script>
		var pageContext = {
															loginUrl: 'https://4kporn.xxx/login-required/',
			animation: '200'
		};
	</script>
<link href="https://4kporn.xxx/rss/categories/beautiful-tits/" rel="alternate" type="application/rss+xml" />
<link href="https://4kporn.xxx/categories/beautiful-tits/" rel="canonical" />
<style>
.asg-label-container{
display: none;
}
</style>
<script type="text/javascript">
let myurl = new URL(window.location.href); 
let utmSource1 = myurl.searchParams.get('utm_source'); 
let utmMedium1 = myurl.searchParams.get('utm_medium');
var mykeywords="Beautiful tits";
</script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    let scriptLoaded = false;

    // Register the service worker immediately
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('https://4kporn.xxx/static/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
    } else {
        console.log("Service Worker is not supported in this browser.");
    }
}); // This closing parenthesis and semicolon were missing
</script>
<script DEFER type="text/javascript" src="/ai/s/s/js/i-top.js?v=22928.075250"></script>
<style>
.fp-controls {
    height: 30px;
    max-width: 100%;
width: 100%
    overflow: hidden;
}
.fp-poster{
    background: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') center center no-repeat;
}
.player-holder{
    background: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') center center no-repeat;
}
.kt-player .fp-controls .fp-time-elapsed, .kt-player .fp-controls .fp-time-left {
    float: left;
    margin: 0 15px;
    margin-top: 0px;
    margin-right: 15px;
    margin-bottom: 0px;
    margin-left: 15px;
}
.kt-player .fp-controls .fp-brand {
    float: right;
    margin-right: 15px;
}
.kt-player .fp-controls .fp-brand, .kt-player .fp-controls .fp-time-elapsed, .kt-player .fp-controls .fp-time-duration, .kt-player .fp-controls .fp-time-left {
    line-height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    color: #ccc;
}
.ntv{
width: 300px; height: 255px; padding: 0px;  display: block;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
box-sizing: border-box;
}
.myadswarning{
    width: 300px;
    height: 785px;
    display: block;
    overflow: hidden;
    text-align: center;
    flex-shrink: 0;
    flex-grow: 0;
    order: 2;
    background: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') center center no-repeat;

}
.myadsheadline{
    width: 300px;
    height: 20px;
    padding: 0px;
    display: block;
    overflow: hidden;
    text-align: center;
    flex-shrink: 0;
    flex-grow: 0;
    order: 3;
}
.is-settings-open.is-mouseout.kt-player .fp-controls.move {
	height: 30px !important;
	-webkit-transition: height 0.3s;
	-moz-transition: height 0.3s;
	transition: height 0.3s;
}
.iframe-placeholder {
    width: 300px; /* Width of the iframe */
    height: 255px; /* Height of the iframe */
    position: relative;
    overflow: hidden;
    display: block; /* Ensures each iframe is on a new line */
    background: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') center center no-repeat;
}
</style>
</head>
<body>
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<symbol id="icon-burger" viewBox="0 0 32 32">
<path d="M1.621 27.766h28.757c0.896 0 1.621 0.726 1.621 1.621v0.991c0 0.896-0.725 1.621-1.621 1.621h-28.757c-0.896 0-1.621-0.725-1.621-1.621v-0.99c0-0.896 0.725-1.621 1.621-1.621zM1.621 13.867h28.757c0.896 0 1.621 0.725 1.621 1.621v1.024c0 0.896-0.725 1.621-1.621 1.621h-28.757c-0.896 0-1.621-0.725-1.621-1.621v-1.024c0-0.896 0.725-1.621 1.621-1.621zM1.636 0h28.727c0.903 0 1.636 0.733 1.636 1.636v0.994c0 0.903-0.733 1.636-1.636 1.636h-28.727c-0.904 0-1.636-0.733-1.636-1.636v0-0.994c0-0.903 0.733-1.636 1.636-1.636z"></path>
</symbol>
<symbol id="icon-camera" viewBox="0 0 26 32">
<path d="M25.6 12.8c0 7.040-5.76 12.8-12.8 12.8s-12.8-5.76-12.8-12.8 5.76-12.8 12.8-12.8 12.8 5.76 12.8 12.8zM19.2 12.8c0-3.52-2.88-6.4-6.4-6.4s-6.4 2.88-6.4 6.4 2.88 6.4 6.4 6.4 6.4-2.88 6.4-6.4zM16 12.8c0 1.76-1.44 3.2-3.2 3.2s-3.2-1.44-3.2-3.2c0-0.32 0-0.64 0.16-0.8 1.28 0.8 3.040-0.8 2.24-2.24 0.16-0.16 0.48-0.16 0.8-0.16 1.76 0 3.2 1.44 3.2 3.2zM24.16 30.88c0 0.48-0.32 1.12-0.96 1.12h-20.8c-0.64 0-0.96-0.64-0.64-1.12l2.72-4.48c2.4 1.6 5.28 2.4 8.48 2.4 3.040 0 5.92-0.8 8.48-2.4z"></path>
</symbol>
<symbol id="icon-categories" viewBox="0 0 32 32">
<path d="M14.346 1.2v11.947c0 0 0 0 0 0 0 0.662-0.536 1.199-1.198 1.2h-11.949c-0.663 0-1.2-0.537-1.2-1.2v0-11.947c0 0 0 0 0 0 0-0.663 0.537-1.2 1.2-1.2 0.001 0 0.001 0 0.002 0h11.949c0.663 0 1.2 0.537 1.2 1.2v0zM32 1.2v11.947c0 0.663-0.537 1.2-1.2 1.2v0h-11.947c-0.663 0-1.2-0.537-1.2-1.2v0-11.947c0.001-0.662 0.538-1.198 1.2-1.198 0 0 0 0 0 0h11.949c0.662 0.001 1.198 0.537 1.198 1.198v0zM14.346 18.851v11.947c0 0 0 0 0 0 0 0.662-0.536 1.199-1.198 1.2h-11.949c-0.663 0-1.2-0.537-1.2-1.2v0-11.947c0-0.663 0.537-1.2 1.2-1.2v0h11.949c0.663 0 1.2 0.537 1.2 1.2v0zM32 18.851v11.947c0 0.663-0.537 1.2-1.2 1.2v0h-11.947c-0.663 0-1.2-0.537-1.2-1.2v0-11.947c0-0.663 0.537-1.2 1.2-1.2v0h11.949c0.662 0.001 1.198 0.538 1.198 1.2 0 0 0 0 0 0v0z"></path>
</symbol>
<symbol id="icon-close" viewBox="0 0 32 32">
<path d="M18.479 15.995l13.013-13.018c0.676-0.676 0.676-1.779 0-2.49-0.674-0.711-1.777-0.676-2.489 0l-13.013 13.018-13.014-13.018c-0.676-0.676-1.778-0.676-2.49 0-0.71 0.675-0.675 1.778 0 2.49l13.014 13.018-13.013 13.018c-0.676 0.676-0.676 1.778 0 2.49 0.355 0.356 0.782 0.498 1.244 0.498s0.89-0.177 1.245-0.498l13.013-13.018 13.014 13.018c0.355 0.356 0.783 0.498 1.245 0.498s0.89-0.177 1.245-0.498c0.675-0.675 0.675-1.778 0-2.49z"></path>
</symbol>
<symbol id="icon-eye" viewBox="0 0 46 32">
<path d="M15.709 16c0-4.413 3.342-8 7.456-8 4.115 0 7.456 3.587 7.456 8 0 4.414-3.341 8-7.456 8-4.114 0-7.456-3.586-7.456-8zM18.434 15.448h2.469c0-0.992 0.771-1.821 1.696-1.821v-2.648c-2.262 0-4.112 1.986-4.165 4.469zM0.538 17.656c-0.72-0.994-0.72-2.373 0-3.312 2.518-3.363 11.52-14.344 22.627-14.344 11.109 0 20.109 10.979 22.629 14.346 0.72 0.992 0.72 2.371 0 3.31-2.52 3.365-11.522 14.344-22.629 14.344-11.109 0-20.109-10.979-22.627-14.344zM12.365 16c0 6.4 4.835 11.586 10.8 11.586 5.966 0 10.8-5.186 10.8-11.586s-4.834-11.586-10.8-11.586c-5.965 0-10.8 5.184-10.8 11.584z"></path>
</symbol>
<symbol id="icon-home" viewBox="0 0 32 32">
<path d="M19.917 28.227v-4.438c0-2.086-1.642-3.773-3.675-3.773-2.032 0-3.674 1.686-3.674 3.773v4.438c0 2.086-1.643 3.773-3.675 3.773h-1.296c-2.032 0-3.675-1.686-3.675-3.773v-10.651c0-1.288 0.605-2.442 1.643-3.152l8.646-5.904c1.21-0.843 2.81-0.843 4.064 0l8.645 5.904c0.999 0.701 1.643 1.847 1.643 3.144 0 0.003 0 0.006 0 0.009v-0 10.651c0 2.086-1.643 3.773-3.675 3.773h-1.296c-2.032 0-3.675-1.686-3.675-3.773zM23.117 3.55c-0.34-0.256-0.559-0.657-0.563-1.11v-1.021c0-0.754 0.606-1.376 1.341-1.376h0.736c0.734 0 1.339 0.622 1.339 1.376v1.598c0 1.152-1.254 1.819-2.162 1.109zM17.194 0.266l14.309 12.65c0.995 0.976 0.389 2.662-0.907 2.662-0.009 0-0.020 0-0.031 0-0.298 0-0.573-0.1-0.793-0.268l0.003 0.002-12.754-9.499c-0.22-0.166-0.498-0.266-0.8-0.266s-0.58 0.1-0.803 0.269l0.003-0.002-13.229 9.942c-0.203 0.167-0.465 0.267-0.751 0.267-0.009 0-0.018-0-0.028-0l0.001 0c-1.341 0-1.904-1.688-0.909-2.664l14.872-13.093c0.257-0.167 0.571-0.267 0.908-0.267s0.651 0.099 0.915 0.27l-0.006-0.004z"></path>
</symbol>
<symbol id="icon-key" viewBox="0 0 32 32">
<path d="M31.998 27.77l-0.107 1.589-0.131 1.472c-0.052 0.465-0.416 0.831-0.875 0.886l-0.005 0-3.090 0.28c-0.018 0.001-0.038 0.001-0.059 0.001-0.314 0-0.599-0.121-0.812-0.319l0.001 0.001-1.366-1.373c-0.066-0.064-0.395-0.17-0.723-0.152l-1.942 0.114c-0.018 0.001-0.039 0.002-0.060 0.002-0.556 0-1.012-0.431-1.052-0.977l-0-0.003-0.173-2.424c-0.033-0.237-0.209-0.425-0.436-0.476l-0.004-0.001-2.739-0.394c-0.54-0.090-0.947-0.554-0.947-1.113 0-0.018 0-0.036 0.001-0.054l-0 0.003 0.112-1.95c-0.004-0.355-0.136-0.678-0.35-0.927l0.002 0.002-1.035-1.040c-0.13-0.113-0.301-0.182-0.488-0.182-0.091 0-0.178 0.016-0.258 0.046l0.005-0.002c-0.064 0.027-1.579 0.704-2.755 0.907-0.551 0.099-1.185 0.155-1.832 0.155-3.009 0-5.732-1.222-7.701-3.197l-0-0c-4.24-4.259-4.24-11.187 0-15.445 1.954-1.976 4.666-3.2 7.663-3.2 0.008 0 0.015 0 0.023 0h-0.001c2.904 0 5.634 1.136 7.686 3.2 1.971 1.967 3.19 4.687 3.19 7.692 0 0.568-0.044 1.127-0.128 1.671l0.008-0.061c-0.174 1.2-0.821 2.76-0.848 2.826-0.026 0.074-0.040 0.16-0.040 0.249 0 0.195 0.071 0.374 0.188 0.512l-0.001-0.001 1.152 1.166 9.603 9.648c0.208 0.208 0.344 0.573 0.325 0.869zM11.694 6.704c-0.642-0.646-1.531-1.045-2.514-1.045s-1.871 0.399-2.513 1.045l-0 0c-0.643 0.648-1.041 1.541-1.041 2.526s0.398 1.878 1.041 2.527l-0-0c0.642 0.646 1.531 1.046 2.514 1.046s1.871-0.4 2.513-1.045l0-0c0.644-0.648 1.042-1.541 1.042-2.526s-0.398-1.879-1.042-2.527l0 0z"></path>
</symbol>
<symbol id="icon-like" viewBox="0 0 34 32">
<path d="M0 11.71h8.037v20.010h-8.037zM33.536 17.626c-1.258 5.107-5.731 13.744-7.811 14.374h-12.109c-2.046-0.005-3.702-1.665-3.702-3.712 0-0.003 0-0.006 0-0.008v0-13.131c0-1.322 6.339-13.325 6.339-13.325 0.502-1.083 1.58-1.82 2.83-1.82 0.457 0 0.891 0.099 1.282 0.276l-0.020-0.008 0.39 0.176c1.549 0.698 2.454 2.616 2.013 4.261l-1.802 6.72h8.886c2.046 0.005 3.702 1.665 3.702 3.712 0 0.003 0 0.006 0 0.008v-0s0.147 1.875 0 2.477z"></path>
</symbol>
<symbol id="icon-models" viewBox="0 0 32 32">
<path d="M32 28.47s-2.109-0.848-3.133-1.334c-1.451-0.693-2.408-1.832-2.872-3.4-0.75-2.547-0.262-5.051 0.208-7.557 0.267-1.424 0.59-2.829 0.366-4.304-0.712-4.68-3.472-7.858-7.382-10.131-3.68-2.139-8.435-2.336-12.243-0.445-2.384 1.184-11.862 8.554-3.672 22.352 1.29 1.874 7.371 6.981 9.45 6.853-3.077-2.827-5.331-12.638-5.331-12.638s3.146 11.115 9.544 14.136c-0.693-1.827-4.952-6.734-2.979-10.832 1.018-2.008 2.309-3.821 3.573-5.662 1.557-2.264 3.349-4.413 3.686-7.293 0.301 0.034 0.413 0.221 0.531 0.408 1.334 2.112 1.592 4.416 1.242 6.84-0.080 0.558-0.251 1.125-0.027 1.691 1.322 3.328 0.291 6.378-1.146 9.347-0.586 1.213-1.664 1.757-3.027 1.632-0.723-0.064-1.445-0.136-2.197-0.208 5.021 4.36 15.41 0.544 15.41 0.544z"></path>
</symbol>
<symbol id="icon-playlists" viewBox="0 0 32 32">
<path d="M26.013 2.629h-23.384v23.384c0 0.726-0.588 1.314-1.314 1.314s-1.314-0.588-1.314-1.314v0-24.699c0-0.725 0.589-1.314 1.312-1.314h24.699c0.726 0 1.314 0.588 1.314 1.314s-0.588 1.314-1.314 1.314v0zM32 5.987v24.699c0 0.725-0.588 1.314-1.314 1.314v0h-24.699c-0 0-0.001 0-0.002 0-0.725 0-1.314-0.588-1.314-1.314v0-24.699c0-0.726 0.589-1.315 1.315-1.315h24.699c0.725 0 1.312 0.589 1.312 1.315zM24 17.6c0-0.004 0-0.009 0-0.013 0-0.464-0.224-0.876-0.571-1.133l-0.004-0.003-7-5.016c-0.201-0.147-0.452-0.236-0.725-0.236-0.225 0-0.436 0.060-0.617 0.165l0.006-0.003c-0.416 0.248-0.69 0.694-0.69 1.206 0 0.006 0 0.012 0 0.018v-0.001 10.032c0 0.512 0.266 0.981 0.688 1.222 0.176 0.102 0.387 0.162 0.612 0.162 0.273 0 0.525-0.088 0.729-0.238l-0.003 0.002 7-5.016c0.35-0.26 0.574-0.671 0.574-1.136 0-0.005-0-0.009-0-0.014v0.001z"></path>
</symbol>
<symbol id="icon-plus" viewBox="0 0 32 32">
<path d="M16 32c-8.811 0-16-7.154-16-16s7.189-16 16-16 16 7.152 16 16-7.189 16-16 16zM21.603 14.414h-4.016v-4.018c0-0.88-0.706-1.586-1.587-1.586-0.88 0-1.586 0.704-1.586 1.584v4.021h-4.018c-0.88 0-1.586 0.704-1.586 1.586 0 0.88 0.704 1.586 1.584 1.586h4.021v3.984c0 0.88 0.704 1.584 1.586 1.584 0.88 0 1.586-0.704 1.586-1.584v-3.984h3.984c0.88 0 1.584-0.704 1.584-1.584 0-0.883-0.669-1.587-1.55-1.587z"></path>
</symbol>
<symbol id="icon-search" viewBox="0 0 32 32">
<path d="M0 13.525c0-7.468 6.060-13.525 13.536-13.525 7.475 0 13.536 6.057 13.536 13.525 0 0.002 0 0.003 0 0.005 0 2.935-0.941 5.65-2.537 7.86l0.027-0.040 6.774 6.794c0.408 0.409 0.661 0.973 0.661 1.597 0 1.248-1.011 2.259-2.259 2.259-0.624 0-1.189-0.253-1.598-0.662v0l-6.773-6.794c-2.171 1.567-4.886 2.507-7.821 2.507-0.004 0-0.007 0-0.011 0h0.001c-7.475 0-13.536-6.054-13.536-13.525zM4.512 13.525c0 4.974 4.048 9.020 9.024 9.020 0.001 0 0.002 0 0.003 0 1.956 0 3.766-0.627 5.239-1.691l-0.026 0.018 1.247-0.887 0.887-1.246c1.046-1.446 1.674-3.255 1.674-5.21 0-0.001 0-0.002 0-0.003v0c0-4.973-4.049-9.018-9.024-9.018-4.976 0-9.024 4.045-9.024 9.018zM7.292 14.543c-0.001 0-0.001 0-0.002 0-0.402 0-0.728-0.326-0.729-0.727v-0c0-3.974 3.254-7.206 7.254-7.206 0.403 0 0.731 0.324 0.731 0.725s-0.327 0.725-0.731 0.725c-3.194 0-5.792 2.583-5.792 5.756-0.001 0.402-0.327 0.727-0.729 0.727-0.001 0-0.002 0-0.003 0h0z"></path>
</symbol>
<symbol id="icon-tv" viewBox="0 0 34 32">
<path d="M30.896 0h-28.192c-1.493 0-2.704 1.242-2.704 2.768v20.933c0 1.526 1.213 2.768 2.704 2.768h10.35l-1.030 4.088h-0.864c-0.39 0.005-0.704 0.323-0.704 0.714 0 0.002 0 0.005 0 0.007v-0c0 0.4 0.315 0.723 0.704 0.723h11.28c0.39 0 0.704-0.323 0.704-0.722 0-0.002 0-0.005 0-0.008 0-0.391-0.314-0.708-0.704-0.714h-0.864l-1.029-4.086h10.352c1.49 0 2.702-1.243 2.702-2.768v-20.934c-0.002-1.526-1.213-2.768-2.706-2.768z"></path>
</symbol>
<symbol id="icon-upload" viewBox="0 0 40 32">
<path d="M15.315 5.056c1.941-3.034 5.173-5.056 8.893-5.056 6.629 0 11.64 6.741 10.186 13.482 9.054 3.538 6.467 17.355-2.91 17.355h-6.789l1.738-4.213h0.81c1.778 0 2.909-2.19 2.101-3.707l-7.397-10.11c-0.97-1.685-3.234-1.685-4.042 0l-7.237 9.942c-1.131 1.685 0 3.875 1.941 3.875h0.808l1.739 4.213h-6.63c-9.216 0-11.802-13.144-3.557-17.019-1.293-6.57 4.851-11.29 10.347-8.762zM22.914 24.603v6.048c0 0.675-0.646 1.349-1.293 1.349h-3.397c-0.646 0-1.293-0.674-1.293-1.349v-6.048h-2.586c-0.485 0-0.646-0.506-0.485-0.843l5.658-8.165c0.075-0.151 0.227-0.252 0.404-0.252s0.329 0.102 0.403 0.25l0.001 0.003 5.659 8.333c0.16 0.338-0.162 0.675-0.485 0.675z"></path>
</symbol>
<symbol id="icon-user" viewBox="0 0 26 32">
<path d="M6.229 7.824c0-4.32 0.966-7.824 6.571-7.824s6.571 3.504 6.571 7.824c0 4.323-2.942 7.826-6.571 7.826s-6.571-3.504-6.571-7.824zM25.211 27.803v0.586s-1.827 3.611-12.411 3.611-12.411-3.611-12.411-3.611v-0.79c0.002 0.069 0.006 0.038 0.018-0.56 0.141-7.331 1.205-9.445 8.795-10.789 0 0 1.080 1.35 3.6 1.35 2.517 0 3.597-1.35 3.597-1.35 7.675 1.36 8.678 3.504 8.8 11.032 0.006 0.482 0.011 0.565 0.013 0.522z"></path>
</symbol>
<symbol id="icon-users" viewBox="0 0 38 32">
<path d="M12.629 7.824c0-4.32 0.966-7.824 6.571-7.824s6.571 3.504 6.571 7.824c0 4.323-2.942 7.826-6.571 7.826s-6.571-3.504-6.571-7.824zM31.611 27.803v0.586s-1.827 3.611-12.411 3.611-12.411-3.611-12.411-3.611v-0.79c0 0.069 0.006 0.038 0.018-0.56 0.141-7.331 1.205-9.445 8.795-10.789 0 0 1.080 1.35 3.6 1.35 2.517 0 3.597-1.35 3.597-1.35 7.675 1.36 8.678 3.504 8.8 11.032 0.006 0.482 0.011 0.565 0.013 0.522zM25.883 13.552c1.064-1.648 1.64-3.64 1.64-5.728 0-1.842-0.144-4.15-1.195-6.050 0.566-0.148 1.216-0.233 1.885-0.233 0.038 0 0.075 0 0.113 0.001l-0.006-0c4.552 0 5.338 2.845 5.338 6.355s-2.39 6.355-5.338 6.355c-0.903-0.003-1.744-0.264-2.454-0.712l0.019 0.011zM38.4 24.123v0.477s-0.859 1.696-5.053 2.509c-0.072-3.994-0.418-6.71-1.923-8.734-0.87-1.17-2.053-1.968-3.352-2.544 0.080 0.003 0.163 0.006 0.248 0.006 2.045 0 2.922-1.096 2.922-1.096 6.234 1.104 7.048 2.845 7.147 8.96 0.006 0.394 0.010 0.459 0.011 0.422zM4.744 7.899c0-3.512 0.784-6.357 5.336-6.357 0.766 0 1.424 0.080 1.992 0.232-1.051 1.899-1.195 4.208-1.195 6.051 0 2.086 0.576 4.077 1.638 5.728-0.692 0.436-1.533 0.696-2.434 0.699h-0.001c-2.947 0-5.336-2.845-5.336-6.355zM6.976 18.374c-1.504 2.024-1.851 4.741-1.923 8.733-4.192-0.811-5.053-2.509-5.053-2.509v-0.475c0.008-0.092 0.013-0.198 0.013-0.306 0-0.041-0.001-0.082-0.002-0.122l0 0.006c0.099-6.115 0.912-7.856 7.147-8.96 0 0 0.877 1.096 2.922 1.096 0.085 0 0.166-0.003 0.248-0.006-1.299 0.574-2.482 1.374-3.352 2.544z"></path>
</symbol>
<symbol id="icon-more" viewBox="0 0 123 32">
<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16v0c-8.837 0-16-7.163-16-16s7.163-16 16-16v0zM61.714 0c8.837 0 16 7.163 16 16s-7.163 16-16 16v0c-8.837 0-16-7.163-16-16s7.163-16 16-16v0zM107.429 0c8.837 0 16 7.163 16 16s-7.163 16-16 16v0c-8.837 0-16-7.163-16-16s7.163-16 16-16v0z"></path>
</symbol>
<symbol id="icon-square" viewBox="0 0 32 32">
<path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z"></path>
</symbol>
<symbol id="icon-stop-square" viewBox="0 0 32 32">
<path d="M4 4h24v24h-24z"></path>
</symbol>
<symbol id="icon-chart-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M6.516 10.72v13.76h18.968v-13.76h-18.968zM16 21.383c-2.097 0.008-3.804-1.686-3.811-3.783 0-0.007 0-0.014 0-0.021h3.789v-3.762h0.022c2.090 0 3.783 1.694 3.783 3.783s-1.694 3.783-3.783 3.783v-0z"></path>
<path fill="#fff" d="M26.258 22.158v-12.212h-7.935v-4.346h-4.645v2.797h1.548v-1.249h1.548v2.797h-11.032v15.309h2.811l-2.563 3.076 1.189 0.991 3.389-4.067h3.109v4.346h4.645v-4.346h3.109l3.389 4.067 1.189-0.991-2.563-3.076h2.811v-1.548h-18.968v-12.212h17.419v10.664h1.548zM15.226 25.254h1.548v2.797h-1.548v-2.797z"></path>
<path fill="#fff" d="M15.979 13.043h-0.774v3.762h-3.015l-0.744 0.011c0.015 0.039-0.503 5.342 4.555 5.342 1.638 0.011 3.156-0.858 3.976-2.276s0.816-3.167-0.010-4.581c-0.826-1.414-2.348-2.276-3.986-2.258l-0.001 0zM16.753 14.684c1.416 0.379 2.353 1.722 2.222 3.182s-1.294 2.613-2.754 2.733c-1.461 0.12-2.796-0.827-3.165-2.246h3.697v-3.669z"></path>
</symbol>
<symbol id="icon-get-money-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M26.624 6.374v3.024c-1.66-0.010-2.998-1.364-2.988-3.024h2.988z"></path>
<path fill="#e31720" d="M5.376 6.374v3.024c1.66-0.010 2.998-1.364 2.988-3.024h-2.988z"></path>
<path fill="#e31720" d="M5.376 16.335v-3.024c1.66 0.010 2.998 1.364 2.988 3.024h-2.988z"></path>
<path fill="#e31720" d="M21.877 10.828c-0.917 0.006-1.655 0.753-1.65 1.67v3.838h-11.342v1.252l1.239 5.065v6.174h10.103v-5.342l3.3-6.027v-6.629h-1.65z"></path>
<path fill="#e31720" d="M17.957 11.355c0 1.081-0.876 1.957-1.957 1.957s-1.957-0.876-1.957-1.957c0-1.081 0.876-1.957 1.957-1.957s1.957 0.876 1.957 1.957z"></path>
<path fill="#fff" d="M4.581 5.6v11.51h3.516v0.571l1.239 5.065v6.855h1.551v-7.041l-1.239-5.064v-0.387h11.363v-4.61c-0.004-0.489 0.388-0.89 0.877-0.895h0.877v5.656l-3.306 6.027v4.767h-7.021v1.548h8.573v-5.919l3.306-6.027v-7.6h-2.428c-1.345 0.006-2.431 1.099-2.429 2.444v3.064h-10.413c-0.303-1.471-1.447-2.625-2.915-2.942v-2.529c1.468-0.317 2.611-1.471 2.915-2.942h13.907c0.303 1.471 1.446 2.625 2.915 2.942v7.019h1.551v-11.51h-22.839zM7.439 15.561h-1.308v-1.333c0.609 0.233 1.086 0.72 1.308 1.333zM6.132 8.482v-1.333h1.308c-0.222 0.613-0.699 1.1-1.308 1.333zM24.561 7.148h1.308v1.333c-0.609-0.233-1.086-0.72-1.308-1.333z"></path>
<path fill="#fff" d="M13.269 11.355c-0 1.508 1.223 2.732 2.731 2.732s2.731-1.223 2.732-2.731c0-1.509-1.223-2.731-2.731-2.731-1.508 0.002-2.73 1.223-2.731 2.731zM17.183 11.355c0 0.653-0.529 1.183-1.183 1.183s-1.183-0.529-1.183-1.183c0-0.653 0.53-1.183 1.183-1.183s1.182 0.53 1.183 1.183z"></path>
</symbol>
<symbol id="icon-gps-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M16 14.623c-0.686 0-1.366 0.135-2 0.398s-1.21 0.648-1.695 1.133c-0.485 0.485-0.87 1.062-1.132 1.696s-0.397 1.314-0.397 2c0 7.125 5.224 9.022 5.224 9.022s5.224-1.897 5.224-9.022c0-0.686-0.134-1.366-0.397-2s-0.647-1.21-1.132-1.696-1.061-0.871-1.695-1.133c-0.634-0.263-1.314-0.398-2-0.398zM16 22.1c-0.445 0-0.88-0.132-1.25-0.379s-0.658-0.599-0.829-1.010c-0.17-0.411-0.215-0.863-0.128-1.3s0.301-0.837 0.616-1.152c0.315-0.315 0.716-0.529 1.152-0.616s0.889-0.042 1.3 0.128c0.411 0.17 0.763 0.459 1.010 0.829s0.379 0.805 0.379 1.25c0 0.597-0.237 1.169-0.659 1.591s-0.994 0.659-1.591 0.659z"></path>
<path fill="#fff" d="M16 16.85c-0.593 0-1.173 0.176-1.667 0.506s-0.878 0.798-1.105 1.346c-0.227 0.548-0.286 1.151-0.171 1.733s0.401 1.117 0.821 1.536c0.42 0.419 0.954 0.705 1.536 0.821s1.185 0.056 1.733-0.171c0.548-0.227 1.017-0.612 1.346-1.105s0.506-1.073 0.506-1.667c0-0.796-0.316-1.559-0.879-2.121s-1.326-0.879-2.121-0.879zM16 21.35c-0.297 0-0.587-0.088-0.833-0.253s-0.439-0.399-0.552-0.673c-0.114-0.274-0.143-0.576-0.085-0.867s0.201-0.558 0.411-0.768c0.21-0.21 0.477-0.353 0.768-0.411s0.593-0.028 0.867 0.085c0.274 0.114 0.508 0.306 0.673 0.552s0.253 0.537 0.253 0.833c0 0.398-0.158 0.779-0.439 1.061s-0.663 0.439-1.061 0.439z"></path>
<path fill="#fff" d="M16 5.6c-2.393 0.004-4.713 0.824-6.577 2.323s-3.162 3.59-3.679 5.927h1.541c0.351-1.339 1.005-2.579 1.911-3.625s2.041-1.87 3.316-2.408c-1.211 1.766-2.010 4.455-2.137 7.553h-4.875c0 0.248-0.030 0.499-0.030 0.75 0.007 1.964 0.561 3.886 1.601 5.552s2.525 3.008 4.286 3.875c0.955 1.814 2.504 3.245 4.388 4.054h0.51c1.884-0.809 3.433-2.24 4.387-4.054 2.142-1.039 3.867-2.776 4.893-4.925s1.29-4.583 0.75-6.902c-0.54-2.319-1.852-4.386-3.72-5.861s-4.183-2.272-6.564-2.259zM10.435 23.195c-0.968-0.766-1.769-1.722-2.354-2.81s-0.941-2.283-1.047-3.513h3.375c0 0.266 0.026 0.536 0.049 0.806-0.278 0.691-0.424 1.427-0.431 2.171-0.008 1.128 0.129 2.252 0.409 3.345zM16 7.1c1.916 0 3.956 3.375 4.125 8.415-1.105-1.062-2.578-1.654-4.11-1.654s-3.005 0.593-4.11 1.654c0.139-5.040 2.179-8.415 4.095-8.415zM16 28.070c-0.979-0.472-4.474-2.572-4.474-8.22 0-1.186 0.471-2.324 1.31-3.163s1.977-1.31 3.163-1.31c1.187 0 2.324 0.471 3.163 1.31s1.31 1.977 1.31 3.163c0 5.681-3.473 7.748-4.474 8.224v-0.004zM19.48 7.82c1.515 0.64 2.826 1.681 3.793 3.011s1.552 2.899 1.693 4.537h-3.341c-0.128-3.101-0.926-5.794-2.141-7.564l-0.004 0.015zM21.561 23.195c0.281-1.093 0.419-2.217 0.413-3.345-0.001-0.743-0.141-1.479-0.413-2.171 0.023-0.27 0.038-0.54 0.049-0.806h3.356c-0.106 1.23-0.462 2.426-1.047 3.513s-1.386 2.043-2.354 2.81h-0.004z"></path>
</symbol>
<symbol id="icon-graph-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M5.125 20.319h5.25v8.156h-5.25v-8.156z"></path>
<path fill="#e31720" d="M13.375 15.788h5.25v12.687h-5.25v-12.687z"></path>
<path fill="#e31720" d="M21.625 11.256h5.25v17.219h-5.25v-17.219z"></path>
<path fill="#fff" d="M16.124 6.195c-0.141-0.141-0.331-0.22-0.53-0.22s-0.39 0.079-0.531 0.219c-0.141 0.141-0.22 0.331-0.22 0.53s0.079 0.39 0.219 0.531l1.751 1.751h-4.126c-2.204 0.002-4.317 0.879-5.875 2.437s-2.435 3.671-2.437 5.875v0.75h1.5v-0.75c0.002-1.806 0.72-3.538 1.997-4.815s3.009-1.996 4.815-1.998h4.127l-1.752 1.751c-0.141 0.141-0.22 0.331-0.22 0.53s0.079 0.39 0.22 0.53c0.141 0.141 0.331 0.22 0.53 0.22s0.39-0.079 0.53-0.22l3.032-3.030c0.070-0.070 0.125-0.152 0.163-0.243s0.057-0.189 0.057-0.287c0-0.099-0.019-0.196-0.057-0.287s-0.093-0.174-0.163-0.243l-3.031-3.032z"></path>
<path fill="#fff" d="M7.375 21.069h2.25v6.656h-3.75v-8.156h-1.5v9.656h6.75v-9.656h-3.75v1.5z"></path>
<path fill="#fff" d="M15.625 16.538h2.25v11.187h-3.75v-12.687h-1.5v14.187h6.75v-14.187h-3.75v1.5z"></path>
<path fill="#fff" d="M23.875 10.506v1.5h2.25v15.719h-3.75v-17.219h-1.5v18.719h6.75v-18.719h-3.75z"></path>
</symbol>
<symbol id="icon-bill-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M4.774 11.987v11.226h22.452v-11.226h-22.452zM16 20.874c-1.808 0-3.274-1.466-3.274-3.274s1.466-3.274 3.274-3.274c1.808 0 3.274 1.466 3.274 3.274s-1.466 3.274-3.274 3.274z"></path>
<path fill="#fff" d="M27.298 8.115l-3.353-2.515-0.922 1.26 1.674 1.256h-19.222v1.568h21.823v-1.569z"></path>
<path fill="#fff" d="M4.701 27.085l3.354 2.515 0.922-1.26-1.674-1.256h19.221v-1.568h-21.823v1.569z"></path>
<path fill="#fff" d="M16.774 11.213v1.548h6.007c0.329 1.874 1.796 3.341 3.67 3.67v2.337c-1.874 0.329-3.341 1.796-3.67 3.671h-13.562c-0.329-1.874-1.796-3.341-3.67-3.671v-2.337c1.874-0.329 3.341-1.796 3.67-3.67h6.007v-1.548h-11.226v12.774h24v-12.774h-11.226zM5.548 12.761h2.088c-0.277 1.017-1.071 1.811-2.088 2.088v-2.088zM5.548 22.439v-2.088c1.017 0.277 1.811 1.071 2.088 2.088h-2.088zM26.452 22.439h-2.088c0.277-1.017 1.071-1.811 2.088-2.088v2.088zM26.452 14.849c-1.016-0.277-1.811-1.071-2.088-2.088h2.088v2.088z"></path>
<path fill="#fff" d="M16.774 19.976v1.596c2.047-0.399 3.456-2.287 3.255-4.363s-1.944-3.659-4.030-3.659-3.829 1.584-4.030 3.659c-0.2 2.076 1.209 3.964 3.255 4.363v-1.596c-1.169-0.381-1.887-1.555-1.695-2.769s1.24-2.108 2.469-2.108 2.276 0.894 2.469 2.108c0.193 1.214-0.526 2.388-1.695 2.769z"></path>
</symbol>
<symbol id="icon-settings-1" viewBox="0 0 32 32">
<path fill="#fff" opacity="0.15" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#e31720" d="M16 19.097c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5z"></path>
<path fill="#fff" d="M16 19.847c-0.445 0-0.88-0.132-1.25-0.379s-0.658-0.599-0.829-1.010c-0.17-0.411-0.215-0.864-0.128-1.3s0.301-0.837 0.616-1.152c0.315-0.315 0.716-0.529 1.152-0.616s0.889-0.042 1.3 0.128c0.411 0.17 0.763 0.459 1.010 0.829s0.379 0.805 0.379 1.25c-0.001 0.597-0.238 1.169-0.66 1.59s-0.994 0.659-1.59 0.66zM16 16.847c-0.148 0-0.293 0.044-0.417 0.126s-0.219 0.2-0.276 0.337c-0.057 0.137-0.072 0.288-0.043 0.433s0.1 0.279 0.205 0.384c0.105 0.105 0.239 0.176 0.384 0.205s0.296 0.014 0.433-0.043c0.137-0.057 0.254-0.153 0.337-0.276s0.126-0.268 0.126-0.417c0-0.199-0.079-0.39-0.22-0.53s-0.331-0.22-0.53-0.22z"></path>
<path fill="#e31720" d="M26.538 11.836c-0.143-1.218-0.692-2.351-1.559-3.218s-2.001-1.416-3.218-1.559c-3.828-0.448-7.695-0.448-11.523 0-1.217 0.144-2.35 0.693-3.216 1.56s-1.415 2-1.558 3.217c-0.448 3.828-0.448 7.695 0 11.523 0.143 1.218 0.692 2.352 1.558 3.219s2 1.417 3.218 1.56c3.828 0.448 7.695 0.448 11.523 0 1.217-0.143 2.351-0.693 3.218-1.56s1.416-2.001 1.558-3.219c0.448-3.828 0.448-7.695 0-11.523zM23.344 20.812l-2.775-0.633c-0.275 0.484-0.625 0.921-1.037 1.295l1.237 2.568-2.703 1.302-1.238-2.568c-0.549 0.095-1.109 0.095-1.658 0l-1.238 2.568-2.703-1.302 1.238-2.568c-0.412-0.374-0.762-0.811-1.037-1.295l-2.775 0.633-0.668-2.925 2.779-0.634c0.035-0.556 0.158-1.102 0.366-1.619l-2.225-1.774 1.87-2.346 2.226 1.775c0.457-0.319 0.962-0.562 1.496-0.721v-2.845h3v2.845c0.534 0.159 1.039 0.403 1.496 0.722l2.225-1.775 1.87 2.345-2.225 1.774c0.207 0.517 0.33 1.063 0.365 1.619l2.779 0.634-0.668 2.925z"></path>
<path fill="#fff" d="M21.749 15.89l2.397-1.912-2.805-3.518-2.396 1.912c-0.224-0.127-0.456-0.239-0.694-0.335v-3.065h-1.5v4.155l0.536 0.159c0.457 0.136 0.89 0.345 1.281 0.618l0.459 0.32 2.077-1.656 0.934 1.173-2.076 1.656 0.21 0.519c0.178 0.443 0.283 0.911 0.313 1.388l0.038 0.558 2.593 0.592-0.334 1.462-2.588-0.591-0.276 0.488c-0.236 0.415-0.536 0.79-0.89 1.11l-0.413 0.375 1.153 2.396-1.35 0.651-1.154-2.396-0.552 0.088c-0.47 0.084-0.951 0.084-1.421 0l-0.552-0.088-1.156 2.394-1.35-0.651 1.154-2.396-0.412-0.375c-0.353-0.321-0.653-0.695-0.889-1.11l-0.275-0.488-2.588 0.591-0.334-1.462 2.593-0.592 0.037-0.558c0.030-0.476 0.135-0.945 0.313-1.387l0.209-0.519-2.080-1.654 0.935-1.173 2.076 1.656 0.459-0.32c0.391-0.273 0.824-0.482 1.281-0.618l0.536-0.16v-4.155h-1.5v3.064c-0.238 0.096-0.47 0.208-0.694 0.335l-2.396-1.912-2.806 3.518 2.397 1.912c-0.072 0.246-0.129 0.497-0.169 0.75l-2.991 0.683 1.001 4.388 2.99-0.682c0.147 0.21 0.307 0.41 0.48 0.6l-1.332 2.765 4.054 1.953 1.33-2.762c0.257 0.019 0.514 0.019 0.771 0l1.33 2.762 4.054-1.953-1.331-2.765c0.172-0.19 0.333-0.39 0.48-0.6l2.99 0.682 1.001-4.388-2.991-0.683c-0.040-0.254-0.097-0.504-0.169-0.75z"></path>
<path fill="#fff" d="M27.288 11.747c-0.158-1.388-0.781-2.681-1.769-3.669s-2.281-1.611-3.669-1.769c-1.195-0.139-2.396-0.231-3.6-0.284v1.502c1.145 0.053 2.288 0.14 3.425 0.273 1.052 0.12 2.032 0.592 2.78 1.341s1.221 1.729 1.34 2.78c0.439 3.772 0.439 7.582 0 11.354-0.119 1.052-0.592 2.032-1.34 2.78s-1.728 1.221-2.78 1.341c-3.771 0.439-7.58 0.439-11.351 0-1.052-0.12-2.032-0.592-2.78-1.341s-1.221-1.728-1.34-2.78c-0.439-3.772-0.439-7.582 0-11.354 0.12-1.052 0.592-2.032 1.34-2.78s1.728-1.221 2.78-1.341c1.884-0.219 3.779-0.329 5.676-0.329 0.25 0 0.5 0.007 0.75 0.011v-1.5c-2.205-0.035-4.41 0.075-6.6 0.329-1.388 0.158-2.681 0.781-3.669 1.769s-1.611 2.281-1.769 3.669c-0.453 3.887-0.453 7.813 0 11.7 0.158 1.388 0.781 2.681 1.769 3.669s2.281 1.611 3.669 1.769c3.887 0.453 7.813 0.453 11.7 0 1.388-0.158 2.681-0.781 3.669-1.769s1.611-2.281 1.769-3.669c0.453-3.887 0.453-7.814 0-11.701z"></path>
</symbol>
<symbol id="icon-flag" viewBox="0 0 23 32">
<path d="M22.759 3.867c-0.28-0.168-0.625-0.168-0.905 0-1.084 0.62-2.304 0.941-3.543 0.933-1.811 0.041-3.563-0.67-4.861-1.973-1.499-1.513-3.525-2.339-5.622-2.293-1.689-0.015-3.339 0.514-4.722 1.515v-0.448c0-0.884-0.695-1.6-1.552-1.6s-1.552 0.716-1.552 1.6v28.8c0 0.884 0.695 1.6 1.552 1.6s1.552-0.716 1.552-1.6v-13.867c0.171-0.017 0.335-0.083 0.471-0.192 1.23-0.935 2.723-1.429 4.251-1.408 1.815-0.043 3.57 0.668 4.872 1.973 1.496 1.511 3.518 2.337 5.611 2.293 1.604 0.019 3.178-0.454 4.52-1.36 0.287-0.205 0.455-0.546 0.445-0.907v-12.133c0.003-0.385-0.194-0.741-0.517-0.933z"></path>
</symbol>
<symbol id="icon-heart" viewBox="0 0 36 32">
<path d="M26.71 0c-1.973 0-3.782 0.623-5.377 1.853-1.529 1.179-2.546 2.68-3.146 3.771-0.599-1.092-1.617-2.593-3.146-3.771-1.595-1.229-3.404-1.853-5.377-1.853-5.507 0-9.659 4.49-9.659 10.443 0 6.432 5.181 10.833 13.023 17.495 1.332 1.131 2.841 2.414 4.41 3.781 0.207 0.181 0.472 0.28 0.748 0.28s0.541-0.099 0.748-0.28c1.569-1.368 3.079-2.65 4.411-3.782 7.842-6.662 13.023-11.062 13.023-17.494 0-5.954-4.153-10.443-9.659-10.443z"></path>
</symbol>
<symbol id="icon-info" viewBox="0 0 32 32">
<path d="M16 32c4.098 0.001 8.194-1.56 11.314-4.68 3.021-3.023 4.686-7.041 4.686-11.316s-1.665-8.294-4.686-11.316c-3.022-3.023-7.041-4.688-11.314-4.688s-8.291 1.665-11.314 4.688c-3.022 3.022-4.686 7.041-4.686 11.316s1.664 8.293 4.686 11.316c3.119 3.119 7.217 4.68 11.314 4.68zM17.619 13.957v10.792c0 0.895-0.726 1.621-1.62 1.621s-1.62-0.725-1.62-1.621v-10.792c0-0.895 0.725-1.62 1.62-1.62s1.62 0.725 1.62 1.62zM16.641 8.745c-0.803 0.372-1.781-0.024-2.135-0.821-0.362-0.818 0.008-1.775 0.826-2.137 0.808-0.357 1.802 0.003 2.161 0.815 0.367 0.83-0.080 1.786-0.852 2.143z"></path>
</symbol>
<symbol id="icon-minus" viewBox="0 0 32 32">
<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16c0-8.836-7.164-16-16-16zM24 17.333h-16c-0.736 0-1.333-0.596-1.333-1.333s0.597-1.333 1.333-1.333h16c0.736 0 1.333 0.596 1.333 1.333s-0.597 1.333-1.333 1.333z"></path>
</symbol>
<symbol id="icon-plust" viewBox="0 0 32 32">
<path d="M16 32c-8.811 0-16-7.154-16-16s7.189-16 16-16c8.81 0 16 7.154 16 16s-7.189 16-16 16zM21.604 14.414h-4.018v-4.017c0-0.881-0.705-1.586-1.586-1.586s-1.586 0.705-1.586 1.586v4.017h-4.018c-0.881 0-1.586 0.705-1.586 1.586s0.705 1.585 1.586 1.585h4.018v3.983c0 0.88 0.705 1.585 1.586 1.585s1.586-0.705 1.586-1.585v-3.983h3.983c0.881 0 1.586-0.705 1.586-1.585s-0.669-1.586-1.55-1.586z"></path>
</symbol>
<symbol id="icon-screenshots" viewBox="0 0 33 32">
<path d="M3.34 20.481c0-0.427-0.176-0.837-0.489-1.14s-0.738-0.472-1.181-0.472-0.868 0.17-1.181 0.472c-0.313 0.302-0.489 0.712-0.489 1.14v1.612c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472h1.67c0.443 0 0.868-0.17 1.181-0.472s0.489-0.712 0.489-1.14-0.176-0.837-0.489-1.14c-0.313-0.302-0.738-0.472-1.181-0.472v0z"></path>
<path d="M3.34 13.853v-3.313c0-0.427-0.176-0.837-0.489-1.14s-0.738-0.472-1.181-0.472c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14v3.313c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472 0.868-0.17 1.181-0.472c0.313-0.302 0.489-0.712 0.489-1.14z"></path>
<path d="M3.34 0.689h-1.67c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14v1.612c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472c0.443 0 0.868-0.17 1.181-0.472s0.489-0.712 0.489-1.14c0.443 0 0.868-0.17 1.181-0.472s0.489-0.712 0.489-1.14c0-0.427-0.176-0.837-0.489-1.14s-0.738-0.472-1.181-0.472v0z"></path>
<path d="M10.69 3.912h3.675c0.443 0 0.868-0.17 1.181-0.472s0.489-0.712 0.489-1.14-0.176-0.837-0.489-1.14c-0.313-0.302-0.738-0.472-1.181-0.472h-3.675c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472z"></path>
<path d="M21.715 3.912c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472 0.868-0.17 1.181-0.472c0.313-0.302 0.489-0.712 0.489-1.14v-1.612c0-0.212-0.043-0.421-0.127-0.617s-0.207-0.373-0.362-0.523c-0.155-0.15-0.339-0.268-0.542-0.349s-0.42-0.123-0.639-0.122h-1.67c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14 0.176 0.837 0.489 1.14c0.313 0.302 0.738 0.472 1.181 0.472v0z"></path>
<path d="M31.736 11.971h-3.978l-1.209-2.333c-0.139-0.268-0.352-0.493-0.616-0.65s-0.568-0.241-0.878-0.241c0-0.427-0.176-0.837-0.489-1.14s-0.738-0.472-1.181-0.472c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14h-3.341c-0.31-0-0.614 0.083-0.878 0.241s-0.477 0.383-0.616 0.65l-1.209 2.333h-3.978c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14v6.898c-0.443 0-0.868 0.17-1.181 0.472s-0.489 0.712-0.489 1.14 0.176 0.837 0.489 1.14c0.313 0.302 0.738 0.472 1.181 0.472v5.996c0 0.427 0.176 0.837 0.489 1.14s0.738 0.472 1.181 0.472h20.044c0.219 0 0.437-0.041 0.639-0.122s0.387-0.2 0.542-0.349c0.155-0.15 0.278-0.328 0.362-0.523s0.127-0.405 0.127-0.617v-16.117c0-0.212-0.043-0.421-0.127-0.617s-0.207-0.373-0.362-0.523c-0.155-0.15-0.339-0.268-0.542-0.349s-0.42-0.123-0.639-0.122zM21.714 26.476c-0.991 0-1.96-0.284-2.784-0.815s-1.466-1.286-1.846-2.17c-0.379-0.883-0.479-1.856-0.285-2.794s0.671-1.799 1.371-2.476c0.701-0.676 1.594-1.137 2.566-1.323s1.98-0.091 2.895 0.275c0.916 0.366 1.698 0.986 2.249 1.781s0.845 1.73 0.845 2.686c-0.002 1.282-0.53 2.511-1.469 3.418s-2.213 1.416-3.542 1.418z"></path>
</symbol>
<symbol id="icon-share" viewBox="0 0 29 32">
<path d="M23.281 20.364c-0.914 0.002-1.814 0.221-2.628 0.638s-1.517 1.021-2.053 1.762l-7.285-4.862c0.459-1.226 0.459-2.576 0-3.802l7.285-4.862c0.818 1.11 2.004 1.892 3.346 2.204s2.751 0.136 3.974-0.498c1.223-0.634 2.181-1.684 2.701-2.961s0.567-2.698 0.134-4.008c-0.433-1.309-1.318-2.421-2.496-3.136s-2.572-0.985-3.932-0.763-2.596 0.923-3.486 1.975c-0.89 1.053-1.376 2.389-1.371 3.768 0.009 0.212 0.031 0.423 0.064 0.633l-7.832 5.228c-0.835-0.753-1.869-1.248-2.979-1.425s-2.247-0.027-3.273 0.43c-1.027 0.457-1.899 1.203-2.511 2.146s-0.938 2.044-0.938 3.17c0 1.125 0.326 2.226 0.938 3.169s1.484 1.689 2.511 2.146 2.164 0.607 3.273 0.43c1.11-0.176 2.145-0.671 2.979-1.425l7.832 5.227c-0.033 0.21-0.054 0.421-0.064 0.633 0 1.151 0.341 2.276 0.979 3.232s1.546 1.703 2.608 2.143c1.062 0.44 2.23 0.556 3.357 0.331s2.163-0.779 2.975-1.592c0.813-0.814 1.366-1.85 1.59-2.979s0.109-2.298-0.331-3.361-1.185-1.972-2.14-2.611c-0.956-0.639-2.079-0.98-3.228-0.98z"></path>
</symbol>
<symbol id="icon-disable-heart" viewBox="0 0 32 32">
<path d="M1.943 7.15c0.085-0.105 0.246-0.113 0.341-0.018l18.959 18.959c0.094 0.094 0.090 0.246-0.007 0.335l-4.459 4.128c-0.219 0.202-0.497 0.304-0.776 0.304s-0.557-0.102-0.777-0.304l-12.308-11.392c-1.879-1.741-2.914-4.061-2.914-6.535 0-2.003 0.687-3.902 1.943-5.476z"></path>
<path d="M31.665 30.049c0.447 0.447 0.447 1.169 0 1.616s-1.169 0.447-1.616 0l-29.714-29.714c-0.447-0.447-0.447-1.169 0-1.616s1.169-0.447 1.616 0l3.912 3.912c3.296-1.358 7.231-0.973 10.137 1.199 3.846-2.875 9.512-2.661 13.084 0.646 1.88 1.741 2.915 4.062 2.915 6.535s-1.035 4.794-2.915 6.534l-4.314 3.993 6.895 6.896z"></path>
</symbol>
<symbol id="icon-comments" viewBox="0 0 32 32">
<path d="M7.082 24.9c-2.588-2.582-4.17-5.928-4.537-9.538-1.375 1.766-2.121 3.933-2.118 6.206 0.002 1.479 0.33 2.949 0.951 4.278l-1.28 3.785c-0.22 0.651-0.059 1.357 0.42 1.844 0.337 0.342 0.781 0.525 1.238 0.525 0.192 0 0.387-0.032 0.576-0.098l3.726-1.3c1.308 0.631 2.755 0.963 4.211 0.966 2.282 0.003 4.454-0.783 6.21-2.233-3.532-0.325-6.827-1.869-9.396-4.433z"></path>
<path d="M31.885 25.26l-1.858-5.495c0.896-1.861 1.369-3.93 1.372-6.012 0.006-3.62-1.373-7.043-3.882-9.638s-5.853-4.057-9.416-4.114c-3.694-0.059-7.166 1.368-9.777 4.020s-4.016 6.179-3.957 9.932c0.056 3.619 1.495 7.016 4.049 9.566 2.549 2.544 5.91 3.944 9.466 3.944 0.007 0 0.014 0 0.021 0 2.049-0.003 4.086-0.484 5.918-1.394l5.409 1.888c0.225 0.079 0.456 0.117 0.685 0.117 0.543 0 1.071-0.217 1.472-0.624 0.569-0.578 0.76-1.418 0.498-2.191zM19.188 18.497h-6.98c-0.526 0-0.952-0.433-0.952-0.968s0.426-0.967 0.952-0.967h6.979c0.526 0 0.952 0.433 0.952 0.967s-0.426 0.968-0.952 0.968zM23.556 14.518h-11.348c-0.526 0-0.952-0.433-0.952-0.968s0.426-0.968 0.952-0.968h11.348c0.526 0 0.952 0.433 0.952 0.968s-0.426 0.968-0.952 0.968zM23.556 10.539h-11.348c-0.526 0-0.952-0.433-0.952-0.968s0.426-0.968 0.952-0.968h11.348c0.526 0 0.952 0.433 0.952 0.968s-0.426 0.968-0.952 0.968z"></path>
</symbol>
</svg>
<div class="noopenlink top-links">
<div class="center-hold">
<div class="network">
<strong></strong>
<ul>
<li><a href="https://crazyporn.xxx/?utm_source=toplink&utm_campaign=4k" target="_blank" rel="nofollow noopener noreferrer">CrazyPorn</a></li>
<li><a href="https://love4porn.com/?utm_source=toplink&utm_campaign=4k" target="_blank" rel="nofollow noopener noreferrer">Love 4 Porn</a></li>
</ul>
</div>
</div>
</div>


<div class="container">
<div class="noopenlink header_new">
<div class="header">
<div class="header-inner">
<div class="burger-btn js-open-menu">
<svg class="svg-icon">
<use xlink:href="#icon-burger"></use>
</svg>
<svg class="svg-icon">
<use xlink:href="#icon-close"></use>
</svg>
</div>
<div class="logo">
<a class="noopenlink" href="https://4kporn.xxx/">
<img src="https://st.4kporn.xxx/static/images/logo.svg?v=1" style="height: 63px; width: 201px;" alt="4K Porn XXX">
</a>
</div>
<ul class="mobile_nav mobile-small-nav">
<li>
<div class="ads"><a rel="noopener nofollow" href="https://theporndude.com/" target="_blank">
<img src="https://st.4kporn.xxx/static/images/theporndude24.png" style="height:20px;width:20px;border:0px" ALT="ThePornDude">
<span class="text">ThePornDude</span>
</a></div>
</li>
<li>
<div class="ads"><span id="FK-Dating-Tab" class="shift-load"></span></div>
</li>
<li>
<div class="ads"><span id="FK-LST" class="shift-load"></span></div>
</li>
</ul>
<div class="search">
<form id="search_form" action="https://4kporn.xxx/search/" method="get" data-url="https://4kporn.xxx/search/%QUERY%/">
<span class="search-button">
<span class="mobile_nav">
<svg class="svg-icon">
<use xlink:href="#icon-search"></use>
</svg>
</span>
</span>
<div class="search-text"><input type="text" name="q" placeholder="Search" value /></div>
</form>
</div>
<div class="user_menu">
<ul class="user-links">
<li><a class="noopenlink" data-href="https://4kporn.xxx/login/" data-fancybox="ajax" id="login">Log in</a></li>
<li><a class="noopenlink" data-href="https://4kporn.xxx/signup/" data-fancybox="ajax">Sign up</a></li>
</ul>
</div>
<div class="search-btn js-open-search">
<svg class="svg-icon">
<use xlink:href="#icon-search"></use>
</svg>
<svg class="svg-icon">
<use xlink:href="#icon-close"></use>
</svg>
</div>
</div>
</div>
<nav>
<div class="navigation">
<button class="button">
<span class="icon">
<span class="ico-bar"></span>
<span class="ico-bar"></span>
<span class="ico-bar"></span>
</span>
</button>
<ul class="primary">
<li>
<a class="noopenlink" href="https://4kporn.xxx/" id="item1">
<svg class="svg-icon">
<use xlink:href="#icon-home"></use>
</svg>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/latest-updates/" id="item2">
<svg class="svg-icon">
<use xlink:href="#icon-plus"></use>
</svg>
<span class="text">Newest</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/top-rated/" id="item3">
<svg class="svg-icon">
<use xlink:href="#icon-like"></use>
</svg>
<span class="text">Top Rated</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/most-popular/" id="item4">
<svg class="svg-icon">
<use xlink:href="#icon-eye"></use>
</svg>
<span class="text">Most Views</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/categories/" id="item6">
<svg class="svg-icon">
<use xlink:href="#icon-categories"></use>
</svg>
<span class="text">Categories</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/sites/" id="item7">
<svg class="svg-icon">
<use xlink:href="#icon-tv"></use>
</svg>
<span class="text">Channels</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/models/" id="item8">
<svg class="svg-icon">
<use xlink:href="#icon-models"></use>
</svg>
<span class="text">Pornstars</span>
</a>
</li>


<li class="highlight ">
<a class="noopenlink" data-href="https://4kporn.xxx/login-required/" data-fancybox="ajax">
<svg class="svg-icon">
<use xlink:href="#icon-upload"></use>
</svg>
<span class="text">Upload</span>
</a>
</li>
<li>
<div class="ads"><a rel="noopener nofollow" href="https://theporndude.com/" target="_blank">
<img src="https://st.4kporn.xxx/static/images/theporndude24.png" style="height:20px;width:20px;border:0px" ALT="ThePornDude">
<span class="text">ThePornDude</span>
</a></div>
</li>
<li>
<div class="ads"><span id="FK-LST-2" class="shift-load"></span></div>
</li>
<li>
<div class="ads"><span id="FK-Dating-Tab-2" class="shift-load"></span></div>
</li>
</ul>
</div>
</nav>
<div class="mobile_nav main_nav">
<ul class="fist-nav">
<li>
<a class="noopenlink" href="https://4kporn.xxx/latest-updates/">
<svg class="svg-icon">
<use xlink:href="#icon-plus"></use>
</svg>
<span class="text">Newest</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/top-rated/">
<svg class="svg-icon">
<use xlink:href="#icon-like"></use>
</svg>
<span class="text">Top Rated</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/most-popular/">
<svg class="svg-icon">
<use xlink:href="#icon-eye"></use>
</svg>
<span class="text">Most Views</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/categories/">
<svg class="svg-icon">
<use xlink:href="#icon-categories"></use>
</svg>
<span class="text">Categories</span>
</a>
</li>
<li>
<a class="noopenlink" href="#" class="js-open-menu">
<svg class="svg-icon">
<use xlink:href="#icon-close"></use>
</svg>
<span class="text">Close</span>
</a>
</li>
</ul>
<ul class="second-nav">
<li>
<a class="noopenlink" href="https://4kporn.xxx/">
<svg class="svg-icon">
<use xlink:href="#icon-home"></use>
</svg>
<span class="text">Home</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/sites/" id="item7">
<svg class="svg-icon">
<use xlink:href="#icon-tv"></use>
</svg>
<span class="text">Channels</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/models/">
<svg class="svg-icon">
<use xlink:href="#icon-models"></use>
</svg>
<span class="text">Pornstars</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/playlists/">
<svg class="svg-icon">
<use xlink:href="#icon-playlists"></use>
</svg>
<span class="text">Playlists</span>
</a>
</li>
<li>
<a class="noopenlink" href="https://4kporn.xxx/members/">
<svg class="svg-icon">
<use xlink:href="#icon-users"></use>
</svg>
<span class="text">Community</span>
</a>
</li>
<li class="highlight ">
<a class="noopenlink" data-href="https://4kporn.xxx/login-required/" data-fancybox="ajax">
<svg class="svg-icon">
<use xlink:href="#icon-upload"></use>
</svg>
<span class="text">Upload</span>
</a>
</li>
</ul>
<ul class="third-nav">
<div class="user_menu">
<ul class="user-links">
<li>
<a class="noopenlink" data-href="https://4kporn.xxx/login/" data-fancybox="ajax">
<svg class="svg-icon">
<use xlink:href="#icon-user"></use>
</svg>
<span class="text">Log in</span>
</a>
</li>
<li>
<a class="noopenlink" data-href="https://4kporn.xxx/signup/" data-fancybox="ajax">
<svg class="svg-icon">
<use xlink:href="#icon-key"></use>
</svg>
<span class="text">Sign up</span>
</a>
</li>
</ul>
</div>
</ul>
</div>
</div>
<div class="content">
<div class="box search-cloud">
<a href="https://4kporn.xxx/search/beautiful-small-tits/" style="font-size: 12px;">beautiful small tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/natural-beautiful-tits/" style="font-weight: bold; font-size: 17px;">natural beautiful tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-tits-slapping/" style="font-size: 13px;">beautiful tits slapping</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/up-ass-tits-beautiful/" style="font-weight: bold; font-size: 17px;">up ass tits beautiful</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/big-tits-beautiful/" style="font-weight: bold; font-size: 17px;">big tits beautiful</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-nature-tits/" style="font-weight: bold; font-size: 16px;">beautiful nature tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/most-beautiful-tits/" style="font-weight: bold; font-size: 16px;">most beautiful tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-nice-tits/" style="font-weight: bold; font-size: 18px;">beautiful nice tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-natural-tits/" style="font-weight: bold; font-size: 16px;">beautiful natural tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-girl-big-tits/" style="font-size: 15px;">beautiful girl big tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/tits-beautiful-lesbian/" style="font-size: 12px;">tits beautiful lesbian</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-tits-slap/" style="font-size: 13px;">beautiful tits slap</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-wife-big-tits/" style="font-size: 15px;">beautiful wife big tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-fake-tits/" style="font-weight: bold; font-size: 18px;">beautiful fake tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/fake-big-tits-beautiful/" style="font-size: 13px;">fake big tits beautiful</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-tits-asian/" style="font-weight: bold; font-size: 18px;">beautiful tits asian</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-big-saggy-tits/" style="font-size: 13px;">beautiful big saggy tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/tits-beautiful/" style="font-weight: bold; font-size: 17px;">tits beautiful</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-black-tits/" style="font-size: 15px;">beautiful black tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-small-tits-teen/" style="font-weight: bold; font-size: 19px;">beautiful small tits teen</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-mature-big-tits/" style="font-size: 15px;">beautiful mature big tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/ebony-beautiful-big-tits/" style="font-size: 12px;">ebony beautiful big tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/indian-beautiful-tits/" style="font-weight: bold; font-size: 18px;">indian beautiful tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/big-tits-n-beautiful/" style="font-weight: bold; font-size: 19px;">big tits n beautiful</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-face-big-tits/" style="font-size: 14px;">beautiful face big tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/indian-big-beautiful-tits/" style="font-weight: bold; font-size: 19px;">indian big beautiful tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/beautiful-tits-teen/" style="font-size: 14px;">beautiful tits teen</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/big-tits-beautiful-girl/" style="font-size: 14px;">big tits beautiful girl</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/stepsister-beautiful-tits/" style="font-weight: bold; font-size: 19px;">stepsister beautiful tits</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/small-tits-beautiful/" style="font-size: 14px;">small tits beautiful</a>
&nbsp;&nbsp;&nbsp;
</div>
<div class="main-content">
<div class="main-container">
<div id="list_videos_common_videos_list">
<div class="headline">
<h1> Trending Beautiful tits Porn Niche </h1>
<div class="sort">
<span class="icon type-sort"></span>
<strong>Trending HD Porn Videos</strong>
<ul id="list_videos_common_videos_list_sort_list">
<li>