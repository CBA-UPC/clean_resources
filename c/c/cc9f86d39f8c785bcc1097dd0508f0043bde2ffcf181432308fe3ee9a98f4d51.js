![function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,s,o=i(2),l=i.n(o);n=jQuery,r={common:{init:function(){window.onscroll=var e=document.querySelector(".navbar"),t=e.offsetTop;var i=document.querySelector(".slider"),n=document.querySelector(".slider-half"),r=document.querySelector(".testimonials-slider");if(i){var s=new l.a({selector:i,duration:300,easing:"ease-out",perPage:{1:2,480:3,768:4,992:5},startIndex:0,draggable:!0,multipleDrag:!1,threshold:20,loop:!0,rtl:!1});setInterval(function(){return s.next()},2e3)}if(n){var o=new l.a({selector:n,duration:300,easing:"ease-out",perPage:{1:2,480:3,768:2,992:3},startIndex:0,draggable:!0,multipleDrag:!1,threshold:20,loop:!0,rtl:!1});setInterval(function(){return o.next()},2e3)}if(r){var a,h=document.querySelector("#prev"),c=document.querySelector("#next"),u=new l.a({selector:r,duration:300,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!1,threshold:20,loop:!0,rtl:!1,onInit:);a=setInterval(5e3),r.addEventListener("click",function(){return clearInterval(a)}),r.addEventListener("touchmove",,h.addEventListener("click",function(){clearInterval(a),u.prev()}),c.addEventListener("click",}},finalize:function(){}},home:{init:function(){},finalize:function(){}},about_us:{init:function(){}},technology:{init:function(){var e=document.querySelectorAll(".solution__item"),t=document.querySelectorAll(".delta-puffs__puff"),i=void 0;for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){n(this,this.querySelector(".solution__expand"))});for(i=0;i<t.length;i++)t[i].addEventListener("click",;}},s={fire:loadEvents:,n(document).ready(s.loadEvents),jQuery(".hamburger").click(function(){var e=jQuery(".hamburger"),t=e.data("target");e.toggleClass("is-active"),jQuery(t).toggleClass("is-active")}),jQuery("#vfbp-form-1").submit(function(){return _d7.push({action:"order",orderId:"",totalPrice:"",currency:"",items:[],pageId:"$SEND"}),!0}),jQuery("#mc4wp-form-1").submit(function(){return _d7.push({action:"order",orderId:"",totalPrice:"",currency:"",items:[],pageId:"$SUBSCRIBE"}),!0})},function(e,t,i){var n;"undefined"!=typeof self&&self,n=function(){return [function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?r=),s=function(){)}return r(e,[{key:"attachEvents",val)}},{key:"detachEvents",val)}},{key:"init",val)}},{key:"buildSliderFrame",val)}},{key:"buildSliderFrameItem",valt}},{key:"resolveSlidesNumber",val)}},{key:"prev",val}}},{key:"next",val}}},{key:"disableTransition",valg}},{key:"enableTransition",valg}},{key:"goTo",val}}},{key:"slideToCurrent",val"}},{key:"updateAfterDrag",val)}},{key:"resizeHandler",val)}},{key:"clearDrag",val}}},{key:"touchstartHandler",val)}},{key:"touchendHandler",val)}},{key:"touchmoveHandler",val}}},{key:"mousedownHandler",val)}},{key:"mouseupHandler",val)}},{key:"mousemoveHandler",val}}},{key:"mouseleaveHandler",val)}},{key:"clickHandler",val1}},{key:"remove",valhis)}},{key:"insert",call(this)}},{key:"precall(this)}},{key:"apcall(this)}},{key:"descall(this)}}],[{key:"mergeSett];return t}},{key:"webkitOTransform"}}]),e}();t.default=s,e.exports=t.default}])},e.exports=n()},function(e,t){}]);
//# sourceMappingURL=main.js.map