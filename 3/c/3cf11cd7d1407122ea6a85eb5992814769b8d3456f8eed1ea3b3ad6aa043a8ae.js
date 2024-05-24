/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,r,Va){'use strict';on Na(a,b,c){s(b,function(b){a.addClass(b,c)})}tion Aa(a,b){b.from&&(a.css(b.from),b.from=null)}=r.copy,Ca=r.extend,I=r.element,s=r.forEach,ba=r.isArray,R=r.isString,ra=r.isObject,P=r.isUndefined,Z=r.isDefined,Ia=r.isFunction,sa=r.isElement,S,ta,Y,ua;P(D.ontransitionend)&&
Z(D.onwebkittransitionend)?(S="WebkitTransition",ta="webkitTransitionEnd transitionend"):(S="transition",ta="transitionend");P(D.onanimationend)&&Z(D.onwebkitanimationend)?(Y="WebkitAnimation",ua="webkitAnimationEnd animationend"):(Y="animation",ua="animationend");var ma=Y+"Delay",va=Y+"Duration",ia=S+"Delay";D=S+"Duration";var Ka=r.$$minErr("ng"),Sa={transitionDuration:D,transitionDelay:ia,transitionProperty:S+"Property",animationDuration:va,animationDelay:ma,animationIterationCount:Y+"IterationCount"},
Ta={transitionDuration:D,transitionDelay:ia,animationDuration:va,animationDelay:ma};r.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",).directive("ngAnimateChildren",["$interpolate",).factory("$$rAFScheduler",["$$rAF",).provider("$$animateQueue",
["$animateProvider",function(a){g=this.rules={skip:[],cancel:[],join:[]};g.join.push(;g.skip.push(;g.skip.push(;g.skip.push(;g.cancel.push(;g.cancel.push(;g.cancel.push(function(a,b,d){a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return P(a)&&P(b)||P(e)&&P(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document",
"$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,m,M,r,u,na,v,z){nction h(a,f,h){r n=Ha(h),z,y;if(a=Ma(a))z=G(a),y=a.parent();var n=ka(n),k=new u,g=K();ba(n.addClass)&&(n.addClass=n.addClass.join(" "));n.addClass&&!R(n.addClass)&&(n.addClass=null);ba(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!R(n.removeClass)&&(n.removeClass=
null);n.from&&!ra(n.from)&&(n.from=null);n.to&&!ra(n.to)&&(n.to=null);if(!z)return x(),k;h=[z.className,n.addClass,n.removeClass].join(" ");if(!Ua(h))return x(),k;var C=0<=["enter","move","leave"].indexOf(f),w=!L||m[0].hidden||E.get(z);h=!w&&B.get(z)||{};var v=!!h.state;w||v&&1==h.state||(w=!q(a,y,f));if(w)return x(),k;C&&xa(a);w={structural:C,element:a,event:f,addClass:n.addClass,removeClass:n.removeClass,close:x,options:n,runner:k};if(v){if(d("skip",a,w,h)){if(2===h.state)return x(),k;V(a,h,w);
return h.runner}if(d("cancel",a,w,h))if(2===h.state)h.runner.end();else if(h.structural)h.close();else return V(a,h,w),h.runner;else if(d("join",a,w,h))if(2===h.state)V(a,w,{});else return Qa(a,C?f:null,n),f=w.event=h.event,n=V(a,h,w),h.runner}else V(a,w,{});(v=w.structural)||(v="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!v)return x(),N(a),k;var M=(h.counter||0)+1;w.counter=M;t(a,1,w);c.$$postDigest(function(){var b=B.get(z),c=!b,b=b||{},d=0<(a.parent()||[]).length&&("animate"===
b.event||b.structural||e(b));if(c||b.counter!==M||!d){c&&(Ja(a,n),fa(a,n));if(c||C&&b.event!==f)n.domOperation(),k.end();d||N(a)}else f=!b.structural&&e(b,!0)?"setClass":b.event,t(a,2),b=r(a,f,b.options),b.done(,k.setHost(b),l(k,f,"start",{})});return k}ction q(a,b,c){c=I(m[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,l,e=E.get(G(a));for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){d||(d=k(b,g));var x=b[0];if(1!==x.nodeType)break;a=B.get(x)||{};if(!h){x=E.get(x);if(!0===x&&!1!==e){e=!0;break}else!1===x&&(e=!1);h=a.structural}if(P(l)||!0===l)a=b.data("$$ngAnimateChildren"),Z(a)&&(l=a);if(h&&!1===l)break;
f||(f=k(b,c));if(f&&d)break;if(!d&&(a=b.data("$ngAnimatePin"))){b=a;continue}b=b.parent()}return(!h||l)&&!0!==e&&d&&f}ar B=new M,E=new M,L=null,f=c.$watch(,x={},l=a.classNameFilter(),Ua=l?Ja=U(v),
y=Node.prototype.contains||return{on:off:pin:push:enabled:}]}]).provider("$$animation",["$animateProvider",function(a){ar c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,e,g,H,A,C){ar M=[],r=U(a);return function(u,A,v){;var q=0<=["enter","move","leave"].indexOf(A),t=new H({end:function(){k()},cancel:function(){k(!0)}});if(!c.length)return k(),t;u.data("$$animationRunner",t);var B=za(u.attr("class"),za(v.addClass,v.removeClass)),E=v.tempClasses;E&&(B+=" "+E,v.tempClasses=null);var L;q&&(L="ng-"+A+"-prepare",a.addClass(u,L));M.push({element:u,
classes:B,event:A,structural:q,options:v,beforeStart:close:k});u.on("$destroy",N);if(1<M.length)return t;e.$$postDigest(;return t}}]}]).provider("$animateCss",["$animateProvider",).provider("$$animateCssDriver",["$$animationProvider",).provider("$$animateJs",["$animateProvider",).provider("$$animateJsDriver",["$$animationProvider",)})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map