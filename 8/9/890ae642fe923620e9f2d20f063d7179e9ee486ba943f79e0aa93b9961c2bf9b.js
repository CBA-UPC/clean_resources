"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6085],{6085:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var n={};!function t(e,a,n,r){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o="function"==typeof Path2D&&"function"==typeof DOMMatrix,s=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),a=t.getContext("2d");a.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{a.createPattern(n,"no-repeat")}catch(t){return!1}return!0}();function l(){}function c(t){var n=a.exports.Promise,r=void 0!==n?n:e.Promise;return"function"==typeof r?new r(t):(t(l,l),null)}var u,h,f,d,m,p,b,g,v,y,w,M=(u=s,h=new Map,{transform:function(t){if(u)return t;if(h.has(t))return h.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),h.set(t,e),e},clear:function(){h.clear()}}),x=(m=Math.floor(1e3/60),p={},b=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(f=function(t){var e=Math.random();return p[e]=requestAnimationFrame((function a(n){b===n||b+m-1<n?(b=n,delete p[e],t()):p[e]=requestAnimationFrame(a)})),e},d=function(t){p[t]&&cancelAnimationFrame(p[t])}):(f=function(t){return setTimeout(t,m)},d=function(t){return clearTimeout(t)}),{frame:f,cancel:d}),_=(y={},function(){if(g)return g;if(!n&&i){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{g=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(a,n,r){if(v)return e(a,null),v;var i=Math.random().toString(36).slice(2);return v=c((function(n){function o(e){e.data.callback===i&&(delete y[i],t.removeEventListener("message",o),v=null,M.clear(),r(),n())}t.addEventListener("message",o),e(a,i),y[i]=o.bind(null,{data:{callback:i}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),y)y[e](),delete y[e]}}(g)}return g}),C={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function O(t,e,a){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:C[e],a)}function k(t){return t<0?0:Math.floor(t)}function I(t){return parseInt(t,16)}function P(t){return t.map(S)}function S(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function T(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function E(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function j(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",t.beginPath(),o&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,a,n,r,i,o){var s=new Path2D(t),l=new Path2D;l.addPath(s,new DOMMatrix(e));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(o)*r,Math.sin(o)*r,-Math.sin(o)*i,Math.cos(o)*i,a,n])),c}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(i-n),.1*Math.abs(s-r),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var l=Math.PI/10*e.wobble,c=.1*Math.abs(i-n),u=.1*Math.abs(s-r),h=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,d=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*u,Math.cos(l)*u,e.x,e.y]);d.multiplySelf(new DOMMatrix(e.shape.matrix));var m=t.createPattern(M.transform(e.shape.bitmap),"no-repeat");m.setTransform(d),t.globalAlpha=1-a,t.fillStyle=m,t.fillRect(e.x-h/2,e.y-f/2,h,f),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(s-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,a,n,r,i,o,s,l){t.save(),t.translate(e,a),t.rotate(i),t.scale(n,r),t.arc(0,0,1,o,s,l),t.restore()}(t,e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(s-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var p=Math.PI/2*3,b=4*e.scalar,g=8*e.scalar,v=e.x,y=e.y,w=5,x=Math.PI/w;w--;)v=e.x+Math.cos(p)*g,y=e.y+Math.sin(p)*g,t.lineTo(v,y),p+=x,v=e.x+Math.cos(p)*b,y=e.y+Math.sin(p)*b,t.lineTo(v,y),p+=x;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(i),Math.floor(s)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function B(t,a){var o,s=!t,l=!!O(a||{},"resize"),u=!1,h=O(a,"disableForReducedMotion",Boolean),f=i&&!!O(a||{},"useWorker")?_():null,d=s?T:E,m=!(!t||!f)&&!!t.__confetti_initialized,p="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function b(e,a,i){for(var s,l,u,h,f,m=O(e,"particleCount",k),p=O(e,"angle",Number),b=O(e,"spread",Number),g=O(e,"startVelocity",Number),v=O(e,"decay",Number),y=O(e,"gravity",Number),w=O(e,"drift",Number),_=O(e,"colors",P),C=O(e,"ticks",Number),I=O(e,"shapes"),S=O(e,"scalar"),T=!!O(e,"flat"),E=function(t){var e=O(t,"origin",Object);return e.x=O(e,"x",Number),e.y=O(e,"y",Number),e}(e),B=m,D=[],z=t.width*E.x,F=t.height*E.y;B--;)D.push((s={x:z,y:F,angle:p,spread:b,startVelocity:g,color:_[B%_.length],shape:I[(h=0,f=I.length,Math.floor(Math.random()*(f-h))+h)],ticks:C,decay:v,gravity:y,drift:w,scalar:S,flat:T},l=void 0,u=void 0,l=s.angle*(Math.PI/180),u=s.spread*(Math.PI/180),{x:s.x,y:s.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*s.startVelocity+Math.random()*s.startVelocity,angle2D:-l+(.5*u-Math.random()*u),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:s.color,shape:s.shape,tick:0,totalTicks:s.ticks,decay:s.decay,drift:s.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*s.gravity,ovalScalar:.6,scalar:s.scalar,flat:s.flat}));return o?o.addFettis(D):(o=function(t,e,a,i,o){var s,l,u=e.slice(),h=t.getContext("2d"),f=c((function(e){function c(){s=l=null,h.clearRect(0,0,i.width,i.height),M.clear(),o(),e()}s=x.frame((function e(){!n||i.width===r.width&&i.height===r.height||(i.width=t.width=r.width,i.height=t.height=r.height),i.width||i.height||(a(t),i.width=t.width,i.height=t.height),h.clearRect(0,0,i.width,i.height),(u=u.filter((function(t){return j(h,t)}))).length?s=x.frame(e):c()})),l=c}));return{addFettis:function(t){return u=u.concat(t),f},canvas:t,promise:f,reset:function(){s&&x.cancel(s),l&&l()}}}(t,D,d,a,i),o.promise)}function g(a){var n=h||O(a,"disableForReducedMotion",Boolean),r=O(a,"zIndex",Number);if(n&&p)return c((function(t){t()}));s&&o?t=o.canvas:s&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(r),document.body.appendChild(t)),l&&!m&&d(t);var i={width:t.width,height:t.height};function g(){if(f){var e={getBoundingClientRect:function(){if(!s)return t.getBoundingClientRect()}};return d(e),void f.postMessage({resize:{width:e.width,height:e.height}})}i.width=i.height=null}function v(){o=null,l&&(u=!1,e.removeEventListener("resize",g)),s&&t&&(document.body.removeChild(t),t=null,m=!1)}return f&&!m&&f.init(t),m=!0,f&&(t.__confetti_initialized=!0),l&&!u&&(u=!0,e.addEventListener("resize",g,!1)),f?f.fire(a,i,v):b(a,i,v)}return g.reset=function(){f&&f.reset(),o&&o.reset()},g}function D(){return w||(w=B(null,{useWorker:!0,resize:!0})),w}a.exports=function(){return D().apply(this,arguments)},a.exports.reset=function(){D().reset()},a.exports.create=B,a.exports.shapeFromPath=function(t){if(!o)throw new Error("path confetti are not supported in this browser");var e,a;"string"==typeof t?e=t:(e=t.path,a=t.matrix);var n=new Path2D(e),r=document.createElement("canvas").getContext("2d");if(!a){for(var i,s,l=1e3,c=l,u=l,h=0,f=0,d=0;d<l;d+=2)for(var m=0;m<l;m+=2)r.isPointInPath(n,d,m,"nonzero")&&(c=Math.min(c,d),u=Math.min(u,m),h=Math.max(h,d),f=Math.max(f,m));i=h-c,s=f-u;var p=Math.min(10/i,10/s);a=[p,0,0,p,-Math.round(i/2+c)*p,-Math.round(s/2+u)*p]}return{type:"path",path:e,matrix:a}},a.exports.shapeFromText=function(t){var e,a=1,n="#000000",r='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,a="scalar"in t?t.scalar:a,r="fontFamily"in t?t.fontFamily:r,n="color"in t?t.color:n);var i=10*a,o=i+"px "+r,s=new OffscreenCanvas(i,i),l=s.getContext("2d");l.font=o;var c=l.measureText(e),u=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),f=c.actualBoundingBoxLeft+2,d=c.actualBoundingBoxAscent+2;u+=4,h+=4,(l=(s=new OffscreenCanvas(u,h)).getContext("2d")).font=o,l.fillStyle=n,l.fillText(e,f,d);var m=1/a;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[m,0,0,m,-u*m/2,-h*m/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),n,!1);var r=n.exports,i=(n.exports.create,a(7347));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){var n;return(e="symbol"==typeof(n=function(t,e){if("object"!=typeof t||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?n:String(n))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={name:"SubscriptionBoughtModal",data(){return{creator:null,confettiInstance:null,interval:null,timeout:null,end:null}},computed:s(s({},(0,a(629).Se)("modal",["activeModal","modalOptions"])),{},{visible(){return this.activeModal===i.Z.SUBSCRIPTION_BOUGHT}}),watch:{visible:{immediate:!0,handler(t){t&&this.open(this.modalOptions)}},creator(){this.creator&&(this.timeout=setTimeout((()=>{this.confettiInstance=r.create(this.$refs.canvas,{resize:!0,useWorker:!0}),this.end=Date.now()+2500,this.fire()}),500))}},created(){this.$shared.modal?.name===i.Z.SUBSCRIPTION_BOUGHT&&this.$shared.modal?.options&&this.open({invoker:"by-configuration",creator:this.$shared.modal.options})},beforeDestroy(){clearTimeout(this.timeout),this.confettiInstance?.reset()},methods:{open(t){this.creator=t.creator,posthog.capture("subscription-bought-modal.open",{invoker:t?.invoker})},chat(){window.location.href=this.route("chat.messages",{chat:this.creator.id}),this.close()},content(){window.location.href=`${this.route("users.show",{nickname:this.creator.nickname})}#content`,this.close()},close(){this.creator=null},fire(){this.confettiInstance({particleCount:4,angle:60,spread:55,origin:{x:0,y:.55}}),this.confettiInstance({particleCount:4,angle:120,spread:55,origin:{x:1,y:.55}}),Date.now()<this.end&&requestAnimationFrame(this.fire)}}},u=(0,a(1900).Z)(c,(function(){var t=this,e=t._self._c;return t.visible&&t.creator?e("v-modal",{attrs:{id:"subscription-bought-modal",value:!0,size:"large",dismissible:!1}},[e("div",{staticClass:"relative flex min-h-full w-full flex-col items-center bg-white p-4 dark:bg-gray-primary md:p-8"},[e("canvas",{ref:"canvas",staticClass:"pointer-events-none !absolute inset-0 z-[9999] h-full w-full"}),t._v(" "),e("div",{staticClass:"mb-4 flex w-full shrink-0 flex-col gap-3 md:mb-6"},[e("v-text",{staticClass:"text-center font-semibold capitalize",attrs:{tag:"h2"}},[t._v("\n        "+t._s(t.__("modal.subscription_bought.title",{nickname:t.creator.nickname}))+"\n      ")]),t._v(" "),e("v-text",{staticClass:"text-center",attrs:{color:"body"}},[t._v("\n        "+t._s(t.__("modal.subscription_bought.subtitle"))+"\n      ")])],1),t._v(" "),e("div",{staticClass:"grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-8"},[e("div",{staticClass:"flex w-full flex-col gap-4"},[e("div",{staticClass:"flex items-center gap-4"},[e("div",{staticClass:"center rounded-full bg-primary-100 p-3 dark:bg-gray-tertiary"},[e("v-icon",{staticClass:"h-5 w-5 text-primary-400",attrs:{name:"chat"}})],1),t._v(" "),e("v-text",{attrs:{styling:"h3"}},[t._v("\n            "+t._s(t.__("modal.subscription_bought.chat.title"))+"\n          ")])],1),t._v(" "),e("v-text",{attrs:{color:"body"}},[t._v("\n          "+t._s(t.__("modal.subscription_bought.chat.subtitle"))+"\n        ")]),t._v(" "),e("img",{staticClass:"my-2 hidden w-full rounded-md md:block",attrs:{draggable:"false",src:"/img/subscriptions/chat.jpg",alt:"Chat"}}),t._v(" "),e("v-button",{attrs:{size:"large"},on:{click:t.chat}},[t._v("\n          "+t._s(t.__("modal.subscription_bought.chat.button"))+"\n        ")])],1),t._v(" "),e("img",{staticClass:"mx-auto w-full max-w-[12rem] rounded-md md:hidden",attrs:{draggable:"false",src:"/img/subscriptions/content-library-chat.png",alt:"Content Library & Chat"}}),t._v(" "),e("div",{staticClass:"flex w-full flex-col gap-4"},[e("div",{staticClass:"flex items-center gap-4"},[e("div",{staticClass:"center rounded-full bg-primary-100 p-3 dark:bg-gray-tertiary"},[e("v-icon",{staticClass:"h-5 w-5 text-primary-400",attrs:{name:"photo-video"}})],1),t._v(" "),e("v-text",{attrs:{styling:"h3"}},[t._v("\n            "+t._s(t.__("modal.subscription_bought.content_library.title"))+"\n          ")])],1),t._v(" "),e("v-text",{attrs:{color:"body"}},[t._v("\n          "+t._s(t.__("modal.subscription_bought.content_library.subtitle"))+"\n        ")]),t._v(" "),e("img",{staticClass:"my-2 hidden w-full rounded-md md:block",attrs:{draggable:"false",src:"/img/subscriptions/content-library.jpg",alt:"Content Library"}}),t._v(" "),e("v-button",{attrs:{size:"large"},on:{click:t.content}},[t._v("\n          "+t._s(t.__("modal.subscription_bought.content_library.button"))+"\n        ")])],1)])])]):t._e()}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=6085.js.map?id=0df395c827b21129debar .list li,.sidebar .filter li {width: 33.33%;}.sidebar .comments,.sidebar .list,.sidebar .filter {padding: 0;}.list-members .item {width: calc(33.33% - 10px);}.member-menu .block-main {-webkit-box-flex: 0;-ms-flex: 0 1 53%;flex: 0 1 53%;}.member-menu .block-additional {-webkit-box-flex: 1;-ms-flex: 1 1;flex: 1 1;}.profile-list .column {width: 50%;}.block-video .playlist .item {width: calc(33.33% - 10px);}}@media screen and (max-width: 785px) {.box {padding: 1.5rem 0 0;}.list-channels .item,.list-models .item,.list-sponsors .item,.list-categories .item {width: calc(33.33% - 10px);}.headline {-ms-flex-wrap: wrap;flex-wrap: wrap;padding: 2rem 0 0;}.headline h1,h2 {width: 100%;-webkit-box-flex: 1;-ms-flex: 1 1 100%;flex: 1 1 100%;margin: 2px 0;}.sort {margin: 10px 10px 0 0;}.sort:last-child {margin: 10px 0 0;}.pagination a,.pagination span {font-size: 13px;padding: 8px 12px;}.pagination li {min-width: 43px;}.tags-cloud .all {font-size: 13px;padding: 10px 20px;}.footer .nav a {font-size: 13px;}.sidebar form .row {width: 50%;}.block-details .item span {margin: 0 1.5rem 0.5rem 0;}.block-details .item {margin: 0 10px 1rem 0;}.tab-content {padding: 0 1rem 1rem;}.list-sort {margin: 0 0 1rem;}.list-sort li {margin-right: 1rem;}.block-model .model-list li {width: 100%;padding: 0;}.block-video .playlist .item {width: calc(50% - 10px);}}@media screen and (max-width: 650px) {.bottom-adv .spot:nth-child(2) {}html {font-size: 47.5%;}.list-members .item {width: calc(50% - 10px);}.member-menu .block-main {-webkit-box-flex: 1;-ms-flex: 1 1 100%;flex: 1 1 100%;margin: 0;}.user-menu {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;}.user-menu li {width: 100%;padding: 0 0.8rem;}.member-menu .block-additional {padding: 10px 0 0;border-top: 0;border-left: 0;-webkit-box-flex: 1;-ms-flex: 1 1 100%;flex: 1 1 100%;}.list-tags .margin-fix .item {-webkit-box-flex: 1;-ms-flex: 1 1 50%;flex: 1 1 50%;}}@media screen and (max-width: 640px) {.logo {margin: 0 0 10px;}.search {padding: 0;}.header-inner {-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}.sidebar + .main-container .list-albums .place ~ .item:nth-of-type(-n + 7),.list-albums .item,.member-menu + .main-container-user .list-albums .item,.member-menu + .main-container-user .list-channels .item,.member-menu + .main-container-user .list-members .item,.sidebar + .main-container .list-videos .item,.sidebar + .main-container .place ~ .item:nth-of-type(-n + 7),.place ~ .item:nth-of-type(-n + 7),.list-playlists .item,.list-videos .item {width: calc(50% - 10px);}.list-playlists .item,.list-videos .item {margin: 5px 0 0 5px;}.margin-fix {margin: -5px 0 0 -5px;}.empty-content {padding: 0 0 0 5px;}.member-menu + .main-container-user .item {margin: 5px 0 0 5px;width: calc((100% - 10px) / 2);}.list-channels .item,.list-models .item,.list-sponsors .item,.list-categories .item {width: calc(50% - 5px);margin: 5px 0 0 5px;}.sidebar .comments li {width: 100%;margin: 0 0 2rem;}.sidebar .list li,.sidebar .filter li {width: 50%;}.btn-favourites ul {left: inherit;right: 0;border-radius: 20px 0 20px 20px;}form [data-name="code"],form .row {margin: 0 0 1rem;}.block-video {margin: 0 0 1.5rem;}.list-comments .comment-info {-webkit-box-flex: 1;-ms-flex: 1 1 100%;flex: 1 1 100%;margin: 0 0 5px;}.box {margin: 0 0 1.5rem;}}@media screen and (max-width: 560px) {.box {padding: 1rem 0 0;}.popup-holder {min-width: 380px;padding: 10px;}.popup-title {padding: 1.5rem 3.5rem 1.5rem 1.5rem;}.fancybox-close {top: 0.8rem !important;}form .section-title {margin: 0 0 1.5rem;}.sidebar form .row {width: 100%;}form .button-group .row:first-child {margin: 0 0 2rem;}.block-screenshots span.item,.block-screenshots a.item {width: calc(50% - 5px);padding-bottom: 27.54%;}.block-new-comment .bottom .submit {margin: 0;}.block-comments form .textfield {width: 100%;}.member-menu .block-main {-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;margin: 0;}.member-menu .block-main .avatar {margin: 0 0 1rem;}.block-main .user-menu {-webkit-box-flex: 1;-ms-flex: 1 1 100%;flex: 1 1 100%;}.user-menu li {display: inline-block;width: auto;}.member-menu .user-menu em {padding: 0 0 0 10px;}.profile-list .column {width: 100%;}/* .block-album .images span.item,.block-album .images a.item {width: calc(50% - 2rem);padding-bottom: 62.1%;} */.block-album .images {padding: 0 1rem;}.block-channel .img {width: 100%;padding: 0;margin: 0 0 1rem;}.block-channel .img .channel-user {right: 5px;}.block-channel .channel-rating strong {font-size: 6.5rem;padding: 2rem 1rem;border-radius: 1rem;}.block-model .img {float: none;display: block;margin: 0 auto 1rem;}.member-menu + .main-container-user .item,.member-menu + .main-container-user .list-videos-screenshots .item,.member-menu + .main-container-user .list-albums-images .item {width: calc((100% - 20px) / 2);}.block-album .images .message,.block-video .no-player .message {font-size: 1.6rem;line-height: 1.8rem;}.block-album form .submit,.block-video .no-player form .submit {font-size: 12px;}}@media screen and (max-width: 420px) {form .captcha-control .image {margin: 0 0 1.5rem;}form .captcha-control .image img {float: inherit;}form .captcha-control .image .textfield {width: 100%;}form .list-selector-popup .button-group .item {width: 45%;}.sidebar + .main-container .list-videos .item,.sidebar + .main-container .place ~ .item:nth-of-type(-n+7),.place ~ .item:nth-of-type(-n+7),.member-menu + .main-container-user .list-videos .item,.member-menu + .main-container-user .list-playlists .item,.list-playlists .item,.list-videos .item {width: calc(100% - 5px);margin: 5px 0 0 5px;}.list-albums .item,.sidebar + .main-container .list-albums .place ~ .item:nth-of-type(-n + 7) {width: calc(50% - 5px);margin: 5px 0 0 5px;}.member-menu + .main-container-user .list-albums .item .title,.main-container .list-albums .item .title {font-size: 12px;}.member-menu + .main-container-user .list-albums .item .wrap,.main-container .list-albums .item .wrap {font-size: 11px;}.member-menu + .main-container-user .list-albums .item .wrap div:before,.main-container .list-albums .item .wrap div:before {font-size: 13px;}.member-menu + .main-container-user .list-albums .item .wrap .photos,.main-container .list-albums .item .wrap .photos {padding-left: 21px;}.member-menu + .main-container-user .list-albums .item .wrap .views,.main-container .list-albums .item .wrap .views {padding-left: 23px;}.item-control {padding: 4px 7px;}.member-menu + .main-container-user .list-albums .item .wrap div,.main-container .list-albums .item .wrap div {padding-left: 18px;}.popup-holder {min-width: 280px;}.navigation .primary {max-width: 100%;}.sidebar .comments li,.sidebar .list li,.sidebar .filter li {width: 100%;}.block-channel .channel-rating strong {font-size: 5.5rem;padding: 1rem 1rem;}.block-model .img {width: 100%;height: auto;padding-bottom: 64.2%;}.block-video .playlist .item {width: calc(100% - 10px);}}.list-categories .img .thumb {position: absolute;width: 100%;left: 0;right: 0;top: 0;}@supports (-webkit-overflow-scrolling: touch) {.sort,.content {cursor: pointer;}}.svg-icon{display:inline-block;width:1em;height:1em;fill:currentColor}svg:not(:root){overflow:hidden}.header_new .user_menu{order:4;padding:0 0 0 20px}.header_new .user-links{display:flex;align-items:center;justify-content:flex-end;flex-wrap:nowrap}.header_new .user-links a{color:#fff;font-size:14px;text-transform:uppercase;line-height:1.2;border-radius:20px;background-color:#276fdb;padding:12px 28px;margin:0 0 0 2px;transition:background .3s}.header_new .user-links #login{background:0 0}@media screen and (min-width:1024px){.header_new .user-links a:hover{background-color:#333}.header_new .user-links #login:hover{background:#276fdb}}.header_new #item1{font-size:20px}.header_new #item1::after{display:none}.header_new .navigation .primary a{display:flex;align-items:center;flex-wrap:nowrap;justify-content:center}.header_new .navigation .primary a .svg-icon{fill:#276fdb;font-size:20px}.header_new .navigation .primary #item4 a .svg-icon{width:30px}.header_new .navigation .primary a.live_sex{color:#45b004}.header_new .navigation .primary a.live_sex svg{fill:#45b004;transition:fill .3s}.header_new .navigation .primary a.live_sex:hover svg{fill:#276fdb}.header_new .navigation .primary a .text{padding:0 0 0 5px}.burger-btn,.search-btn{display:none;font-size:30px;line-height:0;position:relative;margin:0 0 10px}.burger-btn .svg-icon:nth-child(2),.search-btn .svg-icon:nth-child(2){position:absolute;top:0;left:0;opacity:0}.mobile_nav{display:none}@media screen and (max-width:1150px){.logo{margin:0 0 10px}.logo a{max-width:152px}.logo a img{width:100%;height:auto}.header_new{position:relative}.header_new .user_menu{display:none}.header{padding-right:0;padding-left:0}.header+nav{display:none}.header-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.burger-btn,.search-btn{display:inline-block}.open-menu .burger-btn svg{opacity:0}.open-menu .burger-btn svg:last-child{opacity:1}.open-search .search-btn svg{opacity:0}.open-search .search-btn svg:last-child{opacity:1}.search-btn{order:5}.mobile_nav,.mobile_nav .search{display:block}.search{display:none;order:7;width:calc(100% + 20px);margin:0 -10px;padding:0}.open-search .search{display:block}.search form{padding:0}.search .search-text input{border-radius:0;color:#000;font-size:13px;text-align:left;padding:17px 10px}.search .search-button{width:30px;right:8px;background:0 0;text-indent:0;cursor:pointer;border-radius:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.search .search-button svg{width:20px;height:20px;fill:#276fdb}.mobile-small-nav{order:6;width:calc(100% + 20px);margin:0 -10px;display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;border:1px solid #2c2d32;border-left:none;border-right:none;background-color:#000}.mobile-small-nav li{width:50%;border-right:1px solid #2c2d32}.mobile-small-nav li a{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;width:100%;color:#fff;font-size:14px;padding:15px 0}.mobile-small-nav li a .text{line-height:1}.mobile-small-nav li a svg{margin:0 5px 0 0;font-size:20px;fill:#276fdb}.mobile-small-nav li:last-child{border:none}.mobile-small-nav li:last-child a{color:#45b004}.mobile-small-nav li:last-child a svg{fill:#45b004}.main_nav{background-color:#151515;position:absolute;z-index:999;top:68px;width:100%;display:none}.open-menu .main_nav{display:block}.main_nav .fist-nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;box-shadow:0 -4px 13px rgba(0,0,0,.58);border:2px solid #1b1b1b;border-right:none;border-left:none;background-color:#151515;padding:0 16px}.fist-nav a{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff;font-size:12px;padding:6px 0}.fist-nav a svg{fill:#276fdb;font-size:20px;margin:0 0 10px;width:30px}.second-nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:10px 5px}.second-nav li{width:50%;padding:0 5px 10px}.second-nav li a{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;position:relative;color:#fff;font-size:14px;border-radius:20px;padding:12px 0;background-color:#212121}.second-nav li a svg{fill:#276fdb;left:15px;top:50%;transform:translateY(-50%);font-size:20px;position:absolute}.second-nav li.selected a{color:#fff;background:#276fdb}.second-nav li.selected a svg{fill:#fff}.second-nav li:last-child{width:100%}.second-nav li:last-child a{color:#45b004}.second-nav li:last-child a svg{fill:#45b004}.header_new .third-nav .user_menu{display:flex;padding:0}.third-nav{padding:10px 5px 30px}.third-nav .user-links{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;width:100%}.third-nav .user-links li{width:50%;padding:0 5px}.third-nav .user-links li a{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;position:relative;color:#fff;font-size:14px;padding:12px 0;border-radius:20px;background-color:#276fdb}.third-nav .user-links li a svg{left:15px;top:50%;transform:translateY(-50%);font-size:20px;position:absolute}.third-nav .user-links li:first-child a{color:#151515;background:#fff}.third-nav .user-links li:first-child a svg{fill:#276fdb}.main_nav.footer_mobile{display:block;position:fixed;bottom:0;top:auto}.main_nav_footer{border-top:1px solid #1b1b1b;display:none}.open-menu-footer .main_nav_footer{display:block}}.list-categories .img{padding-bottom:55.44%}</style>
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
<link href="https://4kporn.xxx/rss/tags/milf/" rel="alternate" type="application/rss+xml" />
<link href="https://4kporn.xxx/tags/milf/" rel="canonical" />
<style>
.asg-label-container{
display: none;
}
</style>
<script type="text/javascript">
let myurl = new URL(window.location.href); 
let utmSource1 = myurl.searchParams.get('utm_source'); 
let utmMedium1 = myurl.searchParams.get('utm_medium');
var mykeywords="4k, 4kporn, porn, sex videos, full hd porn";
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
<a href="https://4kporn.xxx/search/ebony-milf-milf/" style="font-weight: bold; font-size: 19px;">ebony milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/freeuse-milf-milf.com/" style="font-weight: bold; font-size: 19px;">freeuse milf milf.com</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-blonde-hotel-milf-dp/" style="font-weight: bold; font-size: 19px;">milf blonde hotel milf dp</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-pussyfisting-milf/" style="font-weight: bold; font-size: 19px;">milf pussyfisting milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-cuckold-milf/" style="font-weight: bold; font-size: 18px;">milf cuckold milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/bbc-milf-tit-anal-milf/" style="font-weight: bold; font-size: 18px;">bbc milf tit anal milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-anal-milf-lesbian/" style="font-weight: bold; font-size: 18px;">milf anal milf lesbian</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/strapon-milf-fuck-milf/" style="font-weight: bold; font-size: 18px;">strapon milf fuck milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-milf-hairy/" style="font-weight: bold; font-size: 17px;">milf milf hairy</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-busty-milf-money/" style="font-weight: bold; font-size: 17px;">mom milf busty milf money</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf/" style="font-weight: bold; font-size: 17px;">mom milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/ass-milf-open-milf-story/" style="font-weight: bold; font-size: 17px;">ass milf open milf story</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-milf-analbbw/" style="font-weight: bold; font-size: 16px;">milf milf analbbw</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-japan/" style="font-weight: bold; font-size: 16px;">mom milf milf japan</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/sonmom-milf-milf/" style="font-weight: bold; font-size: 16px;">sonmom milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/son-mom-milf-milf/" style="font-size: 15px;">son mom milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/karina-the-milf-milf/" style="font-size: 15px;">karina the milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-bath/" style="font-size: 15px;">mom milf milf bath</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/son--mom-milf-milf/" style="font-size: 15px;">son-mom milf milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/nina-kayy-milf-milf-anal/" style="font-size: 14px;">nina kayy milf milf anal</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-busty-milf/" style="font-size: 14px;">mom milf busty milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-fisting-milf/" style="font-size: 14px;">milf fisting milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-anal-milf/" style="font-size: 14px;">milf anal milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-solo/" style="font-size: 13px;">mom milf milf solo</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-milf-anal-madrastras/" style="font-size: 13px;">milf milf anal madrastras</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-bbc/" style="font-size: 13px;">mom milf milf bbc</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-pissing/" style="font-size: 13px;">mom milf milf pissing</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/milf-dpgerman-milf/" style="font-size: 12px;">milf dpgerman milf</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-curvy/" style="font-size: 12px;">mom milf milf curvy</a>
&nbsp;&nbsp;&nbsp;
<a href="https://4kporn.xxx/search/mom-milf-milf-german-anal/" style="font-size: 12px;">mom milf milf german anal</a>
&nbsp;&nbsp;&nbsp;
</div>
<div class="main-content">
<div class="main-container">
<div id="list_videos_common_videos_list">
<div class="headline">
<h1> Trending milf Porn </h1>
<div class="sort">
<span class="icon type-sort"></span>
<strong>Trending HD Porn Videos</strong>
<ul id="list_videos_common_videos_list_sort_list">
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:post_date">Newest 4K Porn Videos</a>
</li>
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:video_viewed">Most Viewed 4K Porn Clips</a>
</li>
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:rating">4K Porn Rating Of All Time</a>
</li>
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:duration">Longest 4K Porn Clips</a>
</li>
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:most_commented">Most Commented 4K Porn Clips</a>
</li>
<li>
<a data-action="ajax" data-container-id="list_videos_common_videos_list_sort_list" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:most_favourited">Most Favorited 4K Porn Clips</a>
</li>
</ul>
</div>
</div>
<div class="box">
<div class="list-videos">
<div class="margin-fix" id="list_videos_common_videos_list_items">
<div class="item private ">
<a class="nlink" href="https://4kporn.xxx/videos/1058358/moving-day-milf/" title="Moving Day MILF" data-rt="1:2c8d63ec93028cf593fa06c9ab7db742:0:1058358:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/1058000/1058358/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/1058000/1058358/336x189/1.jpg" alt="Moving Day MILF" width="336" height="189" />
<span class="line-private"><span class="ico-private">Private</span></span>
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="1058358" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="1058358" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Moving Day MILF
</strong>
<div class="wrap">
<div class="duration">31:22</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>3 months ago</em></div>
<div class="views">1.9K</div>
</div>
</a>
</div>
<div class="item private ">
<a class="nlink" href="https://4kporn.xxx/videos/1044095/helicopter-milf/" title="Helicopter MILF" data-rt="2:2c8d63ec93028cf593fa06c9ab7db742:0:1044095:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/1044000/1044095/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/1044000/1044095/336x189/1.jpg" alt="Helicopter MILF" width="336" height="189" />
<span class="line-private"><span class="ico-private">Private</span></span>
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="1044095" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="1044095" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Helicopter MILF
</strong>
<div class="wrap">
<div class="duration">29:57</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>4 months ago</em></div>
<div class="views">430</div>
</div>
</a>
</div>
<div class="item">
<div class="noopenlink ads"><div class="adswarning">Advertising</div>
<script DEFER type="text/javascript" src="/ai/s/s/js/m/om.js?v=2307310003" data-ss="FK-OutStreamListing"></script>
</div></div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/225098/ayal-edited/" title="Ayal edited" data-rt="3:2c8d63ec93028cf593fa06c9ab7db742:0:225098:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/225000/225098/336x189/2.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/225000/225098/336x189/2.jpg" alt="Ayal edited" data-preview="https://4kporn.xxx/get_file/3/3e3c8e3cbbe80d4aa6e0116df7fe16bf677e907aa7/225000/225098/225098_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="225098" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="225098" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Ayal edited
</strong>
<div class="wrap">
<div class="duration">9:13</div>
<div class="rating positive">
80%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">3.0M</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/86861/milf-pounded-when-daughter-not-at-home/" title="Milf pounded when daughter not at home" data-rt="4:2c8d63ec93028cf593fa06c9ab7db742:0:86861:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/86000/86861/336x189/10.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/86000/86861/336x189/10.jpg" alt="Milf pounded when daughter not at home" data-preview="https://4kporn.xxx/get_file/3/db4951b3f119d3fd46f3ca6b08a3af9dae88abeba6/86000/86861/86861_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="86861" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="86861" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Milf pounded when daughter not at home
</strong>
<div class="wrap">
<div class="duration">18:56</div>
<div class="rating positive">
79%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">752K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/792506/punjab-deshi-women-gotten-nailed/" title="Punjab deshi women gotten nailed" data-rt="5:2c8d63ec93028cf593fa06c9ab7db742:0:792506:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/792000/792506/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/792000/792506/336x189/1.jpg" alt="Punjab deshi women gotten nailed" data-preview="https://4kporn.xxx/get_file/3/099a24779259d00418034543ca5d5bb95ac7947a08/792000/792506/792506_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="792506" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="792506" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Punjab deshi women gotten nailed
</strong>
<div class="wrap">
<div class="duration">17:40</div>
<div class="rating positive">
81%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">1.8M</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/642063/iranian-vulgar-stepmom-having-sex-with-her-stepson-part-one/" title="Iranian-Vulgar Stepmom Having Sex With Her Stepson(Part-one)ایرانی-سکس نامادری با پسرش" data-rt="6:2c8d63ec93028cf593fa06c9ab7db742:0:642063:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/642000/642063/336x189/6.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/642000/642063/336x189/6.jpg" alt="Iranian-Vulgar Stepmom Having Sex With Her Stepson(Part-one)ایرانی-سکس نامادری با پسرش" data-preview="https://4kporn.xxx/get_file/3/951f40871d0ff45b0e921ad567676a7473aff53752/642000/642063/642063_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="642063" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="642063" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Iranian-Vulgar Stepmom Having Sex With Her Stepson(Part-one)ایرانی-سکس نامادری با ...
</strong>
<div class="wrap">
<div class="duration">10:05</div>
<div class="rating positive">
68%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">107K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/1104727/artist-with-talent/" title="Artist With Talent" data-rt="7:2c8d63ec93028cf593fa06c9ab7db742:3:1104727:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/1104000/1104727/336x189/3.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/1104000/1104727/336x189/3.jpg" alt="Artist With Talent" data-preview="https://4kporn.xxx/get_file/5/b47b9e3d674d6ed62e73fd7da29368999e56f7a339/1104000/1104727/1104727_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="1104727" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="1104727" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Artist With Talent
</strong>
<div class="wrap">
<div class="duration">20:47</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 weeks ago</em></div>
<div class="views">487</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/85047/milf-sex-with-daughter-s-friend/" title="Milf sex with daughter's friend" data-rt="8:2c8d63ec93028cf593fa06c9ab7db742:0:85047:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/85000/85047/336x189/16.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/85000/85047/336x189/16.jpg" alt="Milf sex with daughter's friend" data-preview="https://4kporn.xxx/get_file/3/b8c80a95d62ab1965d23fe61758451e4f68b30b94c/85000/85047/85047_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="85047" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="85047" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Milf sex with daughter's friend
</strong>
<div class="wrap">
<div class="duration">23:46</div>
<div class="rating positive">
79%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">248K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/612120/alice-falls-trailer/" title="Alice Falls - Trailer" data-rt="9:2c8d63ec93028cf593fa06c9ab7db742:7:612120:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/612000/612120/336x189/7.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/612000/612120/336x189/7.jpg" alt="Alice Falls - Trailer" data-preview="https://4kporn.xxx/get_file/3/aafcdc26f2ec4a20b7bbefb46b413d056e5a66f11a/612000/612120/612120_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="612120" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="612120" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Alice Falls - Trailer
</strong>
<div class="wrap">
<div class="duration">1:15</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">1.4K</div>
</div>
</a>
</div>
<div class="item private ">
<a class="nlink" href="https://4kporn.xxx/videos/1053015/angela-sommers-mindi-mink/" title="Angela Sommers & Mindi Mink" data-rt="10:2c8d63ec93028cf593fa06c9ab7db742:0:1053015:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/1053000/1053015/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/1053000/1053015/336x189/1.jpg" alt="Angela Sommers & Mindi Mink" width="336" height="189" />
<span class="line-private"><span class="ico-private">Private</span></span>
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="1053015" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="1053015" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Angela Sommers & Mindi Mink
</strong>
<div class="wrap">
<div class="duration">1:07:07</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>3 months ago</em></div>
<div class="views">1.2K</div>
</div>
</a>
</div>
<div class="item private ">
<a class="nlink" href="https://4kporn.xxx/videos/1051902/aiden-ashley-julia-ann/" title="Aiden Ashley & Julia Ann" data-rt="11:2c8d63ec93028cf593fa06c9ab7db742:0:1051902:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/1051000/1051902/336x189/2.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/1051000/1051902/336x189/2.jpg" alt="Aiden Ashley & Julia Ann" width="336" height="189" />
<span class="line-private"><span class="ico-private">Private</span></span>
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="1051902" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="1051902" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Aiden Ashley & Julia Ann
</strong>
<div class="wrap">
<div class="duration">26:22</div>
<div class="rating positive">
0%
</div>
</div>
<div class="wrap">
<div class="added"><em>3 months ago</em></div>
<div class="views">580</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/484960/desi-bro-fucks-gigantic-titties-mom-milf-and-she-squirts/" title="desi bro fucks gigantic titties mom Milf and she squirts" data-rt="12:2c8d63ec93028cf593fa06c9ab7db742:0:484960:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/484000/484960/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/484000/484960/336x189/1.jpg" alt="desi bro fucks gigantic titties mom Milf and she squirts" data-preview="https://4kporn.xxx/get_file/3/239bf792440767a1def308377fbb885127301f8b81/484000/484960/484960_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="484960" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="484960" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
desi bro fucks gigantic titties mom Milf and she squirts
</strong>
<div class="wrap">
<div class="duration">35:25</div>
<div class="rating positive">
85%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">221K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/718734/huge-breasts-indian-milf-sister-blows-step-brother-s-penis-and/" title="Huge Breasts indian milf sister blows step brother's penis and" data-rt="13:2c8d63ec93028cf593fa06c9ab7db742:0:718734:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/718000/718734/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/718000/718734/336x189/1.jpg" alt="Huge Breasts indian milf sister blows step brother's penis and" data-preview="https://4kporn.xxx/get_file/3/f5534266aa4708e1e5bec1142d49f9cc33fb0366f9/718000/718734/718734_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="718734" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="718734" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Huge Breasts indian milf sister blows step brother's penis and
</strong>
<div class="wrap">
<div class="duration">7:25</div>
<div class="rating positive">
76%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">842K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/867874/punjab-hot-stepmom-gotten-frustrated-with-stepdad/" title="punjab Hot StepMom gotten frustrated with stepdad" data-rt="14:2c8d63ec93028cf593fa06c9ab7db742:0:867874:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/867000/867874/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/867000/867874/336x189/1.jpg" alt="punjab Hot StepMom gotten frustrated with stepdad" data-preview="https://4kporn.xxx/get_file/5/762599f2027352d16e14d77a121c367ec7365ec27e/867000/867874/867874_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="867874" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="867874" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
punjab Hot StepMom gotten frustrated with stepdad
</strong>
<div class="wrap">
<div class="duration">22:35</div>
<div class="rating positive">
81%
</div>
</div>
<div class="wrap">
<div class="added"><em>11 months ago</em></div>
<div class="views">736K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/749442/penetrating-my-cervix-with-several-screwdrivers-maya-simons/" title="Penetrating my cervix with several screwdrivers! - Maya Simons" data-rt="15:2c8d63ec93028cf593fa06c9ab7db742:0:749442:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/749000/749442/336x189/8.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/749000/749442/336x189/8.jpg" alt="Penetrating my cervix with several screwdrivers! - Maya Simons" data-preview="https://4kporn.xxx/get_file/3/f0edd1f8fabd466fb1e2315c73af375176e07a899b/749000/749442/749442_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="749442" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="749442" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Penetrating my cervix with several screwdrivers! - Maya Simons
</strong>
<div class="wrap">
<div class="duration">2:15</div>
<div class="rating positive">
100%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">4.0K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/701948/curvy-cougar-rosie-step-sun-picks-out-panties-for-milfy-then-fucks-her/" title="Curvy cougar Rosie: Step-Sun Picks Out Panties For MILFY Then Fucks Her" data-rt="16:2c8d63ec93028cf593fa06c9ab7db742:0:701948:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/701000/701948/336x189/5.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/701000/701948/336x189/5.jpg" alt="Curvy cougar Rosie: Step-Sun Picks Out Panties For MILFY Then Fucks Her" data-preview="https://4kporn.xxx/get_file/3/78650f2c0bf6557dc7d7fad33b58fe9036f02cd8b3/701000/701948/701948_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="701948" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="701948" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Curvy cougar Rosie: Step-Sun Picks Out Panties For MILFY Then Fucks Her
</strong>
<div class="wrap">
<div class="duration">24:45</div>
<div class="rating positive">
90%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">41K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/643526/mum-hand-job/" title="Mum Hand Job" data-rt="17:2c8d63ec93028cf593fa06c9ab7db742:0:643526:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/643000/643526/336x189/7.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/643000/643526/336x189/7.jpg" alt="Mum Hand Job" data-preview="https://4kporn.xxx/get_file/3/cfe9d8d7a08c0dfdcf33a9c8fd805464c485fa3050/643000/643526/643526_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="643526" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="643526" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Mum Hand Job
</strong>
<div class="wrap">
<div class="duration">12:55</div>
<div class="rating positive">
74%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">231K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/588246/rent-episode-desi-punjab-hot-bhabi-having-sex-view-full-scene-on-xvideos-red/" title="Rent episode desi Punjab Hot bhabi having sex view full scene on Xvideos RED" data-rt="18:2c8d63ec93028cf593fa06c9ab7db742:0:588246:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/588000/588246/336x189/5.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/588000/588246/336x189/5.jpg" alt="Rent episode desi Punjab Hot bhabi having sex view full scene on Xvideos RED" data-preview="https://4kporn.xxx/get_file/3/733e7d43867812ee10ea8ad451ec28fbf2218d7ae3/588000/588246/588246_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="588246" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="588246" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Rent episode desi Punjab Hot bhabi having sex view full scene on Xvideos RED
</strong>
<div class="wrap">
<div class="duration">10:15</div>
<div class="rating positive">
70%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">191K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/566380/hottie-mom-tears-her-pantyhose/" title="HOTTIE mom TEARS HER PANTYHOSE" data-rt="19:2c8d63ec93028cf593fa06c9ab7db742:0:566380:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/566000/566380/336x189/9.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/566000/566380/336x189/9.jpg" alt="HOTTIE mom TEARS HER PANTYHOSE" data-preview="https://4kporn.xxx/get_file/3/baa807026f4794f5016537403b82c60dfcc9eb9aa6/566000/566380/566380_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="566380" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="566380" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
HOTTIE mom TEARS HER PANTYHOSE
</strong>
<div class="wrap">
<div class="duration">3:45</div>
<div class="rating positive">
92%
</div>
</div>
<div class="wrap">
<div class="added"><em>1 year ago</em></div>
<div class="views">46K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/523223/thick-white-wifey-fucks-bbc/" title="Thick White Wifey Fucks bbc" data-rt="20:2c8d63ec93028cf593fa06c9ab7db742:0:523223:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/523000/523223/336x189/10.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/523000/523223/336x189/10.jpg" alt="Thick White Wifey Fucks bbc" data-preview="https://4kporn.xxx/get_file/3/5d1ad56283d8135ae8b6e45a76cac2e3e50bab9a01/523000/523223/523223_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="523223" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="523223" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Thick White Wifey Fucks bbc
</strong>
<div class="wrap">
<div class="duration">11:55</div>
<div class="rating positive">
79%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">1.0M</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/481362/3d-tranny-compilation-mom-mommy-fucks-sissy-bro-inside-butt-and-mouth/" title="3D Tranny Compilation - mom Mommy fucks Sissy Bro inside Butt and Mouth" data-rt="21:2c8d63ec93028cf593fa06c9ab7db742:0:481362:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/481000/481362/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/481000/481362/336x189/1.jpg" alt="3D Tranny Compilation - mom Mommy fucks Sissy Bro inside Butt and Mouth" data-preview="https://4kporn.xxx/get_file/3/a1891f4a3c556f5bc005122f4928301772a3c487e2/481000/481362/481362_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="481362" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="481362" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
3D Tranny Compilation - mom Mommy fucks Sissy Bro inside Butt and Mouth
</strong>
<div class="wrap">
<div class="duration">21:25</div>
<div class="rating positive">
83%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">347K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/320998/fucking-my-best-friend-s-cougar-she-makes-me-cum-into-her-vagina/" title="Fucking my best Friend's Cougar (She makes me Cum into her Vagina) با مادر دوستم" data-rt="22:2c8d63ec93028cf593fa06c9ab7db742:0:320998:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/320000/320998/336x189/3.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/320000/320998/336x189/3.jpg" alt="Fucking my best Friend's Cougar (She makes me Cum into her Vagina) با مادر دوستم" data-preview="https://4kporn.xxx/get_file/3/77131cc0f3d89922aeb73326dcdc69a1587ce5518c/320000/320998/320998_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="320998" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="320998" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Fucking my best Friend's Cougar (She makes me Cum into her Vagina) با مادر دوستم
</strong>
<div class="wrap">
<div class="duration">2:35</div>
<div class="rating positive">
76%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">25K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/315091/7283cb78a1f9ac5c2a93606df704f93a/" title="اول مره يشوف لحمه وهي كرباج بتموووت جسمها نااااااااار وكسها ابيض وبزازها كبيره" data-rt="23:2c8d63ec93028cf593fa06c9ab7db742:0:315091:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/315000/315091/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/315000/315091/336x189/1.jpg" alt="اول مره يشوف لحمه وهي كرباج بتموووت جسمها نااااااااار وكسها ابيض وبزازها كبيره" data-preview="https://4kporn.xxx/get_file/3/264f4a0442af4765175d9628a78e0e4b366574c2a8/315000/315091/315091_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="315091" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="315091" data-fav-type="1"></span>
</div>
<strong class="title">
اول مره يشوف لحمه وهي كرباج بتموووت جسمها نااااااااار وكسها ابيض وبزازها كبيره
</strong>
<div class="wrap">
<div class="duration">3:50</div>
<div class="rating positive">
72%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">247K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/290903/teresa-ferrer-immoral-family-part-three-mother-into-law/" title="TERESA FERRER - IMMORAL FAMILY - PART three - MOTHER INTO LAW" data-rt="24:2c8d63ec93028cf593fa06c9ab7db742:0:290903:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/290000/290903/336x189/18.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/290000/290903/336x189/18.jpg" alt="TERESA FERRER - IMMORAL FAMILY - PART three - MOTHER INTO LAW" data-preview="https://4kporn.xxx/get_file/3/f2c20d7aa8b73c2e41bc558f4dbc7002da46a0d2e2/290000/290903/290903_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="290903" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="290903" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
TERESA FERRER - IMMORAL FAMILY - PART three - MOTHER INTO LAW
</strong>
<div class="wrap">
<div class="duration">10:00</div>
<div class="rating positive">
84%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">664K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/287131/amateur-goddess-wifey-jasmine-valdez-ride-her-bike-with-a-monstrous-sex-toy/" title="Amateur Goddess wifey Jasmine Valdez ride her bike with a monstrous sex toy" data-rt="25:2c8d63ec93028cf593fa06c9ab7db742:0:287131:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/287000/287131/336x189/9.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/287000/287131/336x189/9.jpg" alt="Amateur Goddess wifey Jasmine Valdez ride her bike with a monstrous sex toy" data-preview="https://4kporn.xxx/get_file/3/99d7b1482d86fedd4ff22b88ac2acc874d220fc3c1/287000/287131/287131_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="287131" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="287131" data-fav-type="1"></span>
</div>
<strong class="title">
Amateur Goddess wifey Jasmine Valdez ride her bike with a monstrous sex toy
</strong>
<div class="wrap">
<div class="duration">5:40</div>
<div class="rating positive">
90%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">414K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/280712/mature-milf-can-still-seduce-a-bro/" title="MATURE milf CAN STILL SEDUCE a BRO" data-rt="26:2c8d63ec93028cf593fa06c9ab7db742:0:280712:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/280000/280712/336x189/3.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/280000/280712/336x189/3.jpg" alt="MATURE milf CAN STILL SEDUCE a BRO" data-preview="https://4kporn.xxx/get_file/3/637afc3262878c0192286dd87632f37375eb491910/280000/280712/280712_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="280712" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="280712" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
MATURE milf CAN STILL SEDUCE a BRO
</strong>
<div class="wrap">
<div class="duration">23:25</div>
<div class="rating positive">
85%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">427K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/262456/f126118770434039f82e593cb6a33de7/" title="مصري جديد فرس مصر ملبن مصر عود مظبوط" data-rt="27:2c8d63ec93028cf593fa06c9ab7db742:0:262456:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/262000/262456/336x189/6.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/262000/262456/336x189/6.jpg" alt="مصري جديد فرس مصر ملبن مصر عود مظبوط" data-preview="https://4kporn.xxx/get_file/3/a296f55522c1c357419b728f920da96b8b20f63208/262000/262456/262456_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="262456" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="262456" data-fav-type="1"></span>
</div>
<strong class="title">
مصري جديد فرس مصر ملبن مصر عود مظبوط
</strong>
<div class="wrap">
<div class="duration">9:24</div>
<div class="rating positive">
76%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">180K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/245792/vulgar-stepmom-fucks-with-barely-legal-stepson/" title="Vulgar Stepmom Fucks with Barely Legal Stepson" data-rt="28:2c8d63ec93028cf593fa06c9ab7db742:0:245792:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/245000/245792/336x189/5.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/245000/245792/336x189/5.jpg" alt="Vulgar Stepmom Fucks with Barely Legal Stepson" data-preview="https://4kporn.xxx/get_file/3/00e3a6f6a39aa4a6380fce78112a9728e387b7977c/245000/245792/245792_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="245792" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="245792" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Vulgar Stepmom Fucks with Barely Legal Stepson
</strong>
<div class="wrap">
<div class="duration">18:49</div>
<div class="rating positive">
80%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">2.1M</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/235141/my-milf-bt7b-tsor-gsmha/" title="My milf bt7b tsor gsmha" data-rt="29:2c8d63ec93028cf593fa06c9ab7db742:0:235141:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/235000/235141/336x189/6.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/235000/235141/336x189/6.jpg" alt="My milf bt7b tsor gsmha" data-preview="https://4kporn.xxx/get_file/3/b775b03d085a494f474977b5c3cdcbe7e73d173b57/235000/235141/235141_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="235141" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="235141" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
My milf bt7b tsor gsmha
</strong>
<div class="wrap">
<div class="duration">1:48</div>
<div class="rating positive">
65%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">685K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/207099/sneaky-big-black-dick-kitchen-fucked-cuckold-cleanup/" title="Sneaky big black dick Kitchen Fucked Cuckold Cleanup" data-rt="30:2c8d63ec93028cf593fa06c9ab7db742:0:207099:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/207000/207099/336x189/8.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/207000/207099/336x189/8.jpg" alt="Sneaky big black dick Kitchen Fucked Cuckold Cleanup" data-preview="https://4kporn.xxx/get_file/3/828f0cba143a91cd92afeb5d0971a9e2aceeaac007/207000/207099/207099_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="207099" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="207099" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Sneaky big black dick Kitchen Fucked Cuckold Cleanup
</strong>
<div class="wrap">
<div class="duration">5:42</div>
<div class="rating positive">
92%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">137K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/153870/curvy-butt-milf-anal-fetish-plowed/" title="Curvy butt milf anal fetish plowed" data-rt="31:2c8d63ec93028cf593fa06c9ab7db742:0:153870:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/153000/153870/336x189/1.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/153000/153870/336x189/1.jpg" alt="Curvy butt milf anal fetish plowed" data-preview="https://4kporn.xxx/get_file/3/02a3ff036f3c85cdf68ed9fcc2d4ab0531d054d9c8/153000/153870/153870_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="153870" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="153870" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Curvy butt milf anal fetish plowed
</strong>
<div class="wrap">
<div class="duration">5:07</div>
<div class="rating positive">
72%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">8.3K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/139767/dude-drops-a-big-load-on-mariana-cordobas-titties-and-dick/" title="Dude Drops A Big Load On Mariana Cordobas Titties and dick" data-rt="32:2c8d63ec93028cf593fa06c9ab7db742:0:139767:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/139000/139767/336x189/2.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/139000/139767/336x189/2.jpg" alt="Dude Drops A Big Load On Mariana Cordobas Titties and dick" data-preview="https://4kporn.xxx/get_file/3/6a5c73487759499f5cacb0be1be77c601cf2a3e782/139000/139767/139767_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="139767" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="139767" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Dude Drops A Big Load On Mariana Cordobas Titties and dick
</strong>
<div class="wrap">
<div class="duration">5:22</div>
<div class="rating positive">
91%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">38K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/116255/beauty-milf-francys-belle-lets-curious-stepson-taste-her-breast-milk/" title="beauty Milf Francys Belle Lets Curious Stepson Taste Her Breast Milk" data-rt="33:2c8d63ec93028cf593fa06c9ab7db742:0:116255:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/116000/116255/336x189/4.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/116000/116255/336x189/4.jpg" alt="beauty Milf Francys Belle Lets Curious Stepson Taste Her Breast Milk" data-preview="https://4kporn.xxx/get_file/3/4598a839cce49b402427d405abc8212a826b767709/116000/116255/116255_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="116255" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="116255" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
beauty Milf Francys Belle Lets Curious Stepson Taste Her Breast Milk
</strong>
<div class="wrap">
<div class="duration">12:25</div>
<div class="rating positive">
100%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">12K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/93207/step-cougar-s-large-squirting-pumped-snatch-fucked-jizzed-enormous-cummed/" title="Step Cougar's LARGE Squirting Pumped Snatch | Fucked, Jizzed & Enormous Cummed" data-rt="34:2c8d63ec93028cf593fa06c9ab7db742:0:93207:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/93000/93207/336x189/6.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/93000/93207/336x189/6.jpg" alt="Step Cougar's LARGE Squirting Pumped Snatch | Fucked, Jizzed & Enormous Cummed" data-preview="https://4kporn.xxx/get_file/3/9efb9edc833189d441b808c981c5efd5342aff6b87/93000/93207/93207_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="93207" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="93207" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Step Cougar's LARGE Squirting Pumped Snatch | Fucked, Jizzed & Enormous Cummed
</strong>
<div class="wrap">
<div class="duration">19:33</div>
<div class="rating positive">
93%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">49K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/75392/banged-my-pumped-twat-long-teenagers-dick-puts-between-my-hugest-close/" title="Banged my Pumped Twat. Long Teenagers Dick Puts between my HUGEST Close" data-rt="35:2c8d63ec93028cf593fa06c9ab7db742:0:75392:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/75000/75392/336x189/8.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/75000/75392/336x189/8.jpg" alt="Banged my Pumped Twat. Long Teenagers Dick Puts between my HUGEST Close" data-preview="https://4kporn.xxx/get_file/3/31f69135edf02a9622f928c3d137b05158e10258fa/75000/75392/75392_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="75392" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="75392" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Banged my Pumped Twat. Long Teenagers Dick Puts between my HUGEST Close
</strong>
<div class="wrap">
<div class="duration">13:51</div>
<div class="rating positive">
84%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">623K</div>
</div>
</a>
</div>
<div class="item  ">
<a class="nlink" href="https://4kporn.xxx/videos/71016/turned-on-milf-talks-college-stud-inside-sex/" title="Turned On milf Talks College Stud Inside Sex" data-rt="36:2c8d63ec93028cf593fa06c9ab7db742:0:71016:1:tag1224">
<div class="img">
<img class="thumb lazy-load" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="https://st.4kporn.xxx/contents/videos_screenshots/71000/71016/336x189/12.jpg" data-webp="https://st.4kporn.xxx/contents/videos_screenshots/71000/71016/336x189/12.jpg" alt="Turned On milf Talks College Stud Inside Sex" data-preview="https://4kporn.xxx/get_file/3/ded0ed91ae54e34299fd6cc1b54c82561388e85974/71000/71016/71016_preview.mp4/" width="336" height="189" />
<span class="ico-fav-0 " title="Add to Favorites" data-fav-video-id="71016" data-fav-type="0"></span>
<span class="ico-fav-1 " title="Watch Later" data-fav-video-id="71016" data-fav-type="1"></span>
<span class="is-hd">HD</span> </div>
<strong class="title">
Turned On milf Talks College Stud Inside Sex
</strong>
<div class="wrap">
<div class="duration">23:18</div>
<div class="rating positive">
81%
</div>
</div>
<div class="wrap">
<div class="added"><em>2 years ago</em></div>
<div class="views">56K</div>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="pagination" id="list_videos_common_videos_list_pagination">
<div class="pagination-holder">
<ul>
<li class="prev"><span>Back</span></li>
<li class="first"><span>First</span></li>
<li class="page-current"><span>1</span></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:2">2</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:3">3</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:4">4</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:5">5</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:6">6</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:7">7</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:8">8</a></li>
<li class="page"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:9">9</a></li>
<li class="jump"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:10">...</a></li>
<li class="last"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:3205">Last</a></li>
<li class="next"><a href="#videos" data-action="ajax" data-container-id="list_videos_common_videos_list_pagination" data-block-id="list_videos_common_videos_list" data-parameters="sort_by:ctr;from:2">Next</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="box tags-cloud">
<a class="tlink" href="https://4kporn.xxx/tags/hot/" style="font-size: 14px;">hot</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/pussy/" style="font-size: 14px;">pussy</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big-boobs/" style="font-weight: bold; font-size: 17px;">big boobs</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/cumshot/" style="font-size: 15px;">cumshot</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/18-teen3/" style="font-weight: bold; font-size: 16px;">18+ teen</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/cum/" style="font-weight: bold; font-size: 17px;">cum</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/sexy/" style="font-size: 14px;">sexy</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/butt/" style="font-size: 15px;">butt</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/babe/" style="font-size: 13px;">babe</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big-ass/" style="font-size: 15px;">big ass</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/blonde/" style="font-weight: bold; font-size: 17px;">blonde</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/dick/" style="font-size: 14px;">dick</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/blowjob/" style="font-weight: bold; font-size: 18px;">blowjob</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/milf/" style="font-weight: bold; font-size: 18px;">milf</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/anal/" style="font-weight: bold; font-size: 18px;">anal</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/amateur/" style="font-weight: bold; font-size: 18px;">amateur</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big-cock/" style="font-weight: bold; font-size: 16px;">big cock</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/mom/" style="font-size: 12px;">mom</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big-dick/" style="font-size: 13px;">big dick</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/cock/" style="font-size: 15px;">cock</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/hardcore/" style="font-weight: bold; font-size: 17px;">hardcore</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/masturbation/" style="font-size: 12px;">masturbation</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/doggystyle/" style="font-weight: bold; font-size: 16px;">doggystyle</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/huge/" style="font-size: 12px;">huge</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big-tits/" style="font-size: 15px;">big tits</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/big/" style="font-weight: bold; font-size: 16px;">big</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/ass/" style="font-size: 12px;">ass</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/brunette/" style="font-size: 13px;">brunette</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/rough/" style="font-size: 13px;">rough</a>
&nbsp;&nbsp;
<a class="tlink" href="https://4kporn.xxx/tags/fucking/" style="font-weight: bold; font-size: 18px;">fucking</a>
&nbsp;&nbsp;
<a href="https://4kporn.xxx/tags/" class="all">Show All Tags</a>
</div>
<p class="text">
HD Porn Videos matching <strong>milf</strong>. Pick from all the new videos.
</p>
</div>
<div class="footer-margin">
<div class="content">
<div class="noopenlink ads">
<div class="adswarning">Advertising</div>
<span id="FK-Footer-Spot"></span><script type="text/javascript">var r=Math.random();var IFRAME=document.createElement("IFRAME");IFRAME.setAttribute("id", "inp_iframe-fk-footer-spot");IFRAME.setAttribute("width", "1200");IFRAME.setAttribute("height", "250");IFRAME.setAttribute("frameborder", "0");IFRAME.setAttribute("scrolling", "no");IFRAME.setAttribute("src", "/ai/s/s/su.php?t=i&ss=FK-Footer-Spot&r="+r+"&referrer_url="+encodeURIComponent(window.location.href)+"&referrer_site="+encodeURIComponent(document.referrer));IFRAME.setAttribute("sandbox", "allow-scripts allow-popups-to-escape-sandbox allow-forms allow-popups");document.getElementById("FK-Footer-Spot").appendChild(IFRAME);</script>
</div>
</div>
</div>
</div>
<div class="mobile_nav main_nav footer_mobile">
<div class="main_nav_footer">
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
<li style="width: 100%;">
<div class="ads">
<span id="FK-Dating-Tab-2" class="shift-load"></span>
</div>
</li>
<li style="width: 100%;">
<div class="ads"><span id="FK-LST-2" class="shift-load"></span></div>
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
<a class="noopenlink" href="#" class="js-open-menu-footer">
<svg class="svg-icon">
<use xlink:href="#icon-more"></use>
</svg>
<span class="text">More</span>
</a>
</li>
</ul>
</div>
<div class="footer">
<div class="footer-wrap">
<ul class="nav">
<li><a class="noopenlink" href="https://4kporn.xxx/">Home</a></li>
<li><a class="noopenlink" data-href="https://4kporn.xxx/signup/" data-fancybox="ajax">Sign up</a></li>
<li><a class="noopenlink" data-href="https://4kporn.xxx/login/" data-fancybox="ajax">Log in</a></li>
<li><a class="noopenlink" href="/partners.php">Content Partners</a></li>
<li><a class="noopenlink" data-href="https://4kporn.xxx/feedback/" data-fancybox="ajax">Support</a></li>
<li><a class="noopenlink" href="https://4kporn.xxx/terms/">Terms</a></li>
<li><a class="noopenlink" href="/privacy.php">Privacy</a></li>
<li><a class="noopenlink" href="https://4kporn.xxx/dmca/">DMCA</a></li>
<li><a class="noopenlink" href="https://4kporn.xxx/2257/">18 U.S.C. 2257</a></li>
</ul>
<div class="copyright">
2021-2024 <a href="https://4kporn.xxx/">4K Porn XXX</a><br/>
All rights reserved.
</div>
<div class="txt">
Enjoy our free videos. Create an account for viewing less ads.
</div>
</div>
<script DEFER src="https://4kporn.xxx/static/js/main.deps.js?v=8.70"></script>
<script DEFER src="https://4kporn.xxx/static/js/main.js?v=8.70"></script>
<script DEFER src="https://4kporn.xxx/static/js/custom.js?v=8.70"></script>
<script>
    // This function will hold your script that needs to be run after page load
    function executeAfterLoad() {
        $.blockUI.defaults.overlayCSS = {cursor: 'wait'};

            }

    // This will ensure your function is called once the page is fully loaded
    window.onload = executeAfterLoad;
</script>
<script DEFER type="text/javascript" src="/ai/s/s/js/m/im.js?v=2311060002" ss="FK-Video-Slider"></script>
<script DEFER type="text/javascript" src="/ai/s/s/sum.php?i=default-desk&v=23303.074321"></script>
<div id="result" style="display: none;">
<script>
// Global variable
let fingerprint;

// Function to generate canvas fingerprint
function generateCanvasFingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 800; // Adjust canvas width
    canvas.height = 100; // Adjust canvas height

    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var language = navigator.language;
    var screenResolution = window.screen.width + 'x' + window.screen.height;
    var deviceType = (/Mobi|Android/i.test(navigator.userAgent)) ? 'Mobile' : 'Desktop';
    
    var txt1 = 'Timezone: ' + timezone + ', Language: ' + language;
    var txt2 = 'Screen Resolution: ' + screenResolution + ', Device Type: ' + deviceType;
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "tencent";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt1, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt1, 4, 17);
    
    ctx.fillStyle = "#069";
    ctx.fillText(txt2, 2, 35);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt2, 4, 37);

    var dataURL = canvas.toDataURL();
    var encodedDataURL = btoa(dataURL);

    var fingerprintComponents = {
        canvasFingerprint: encodedDataURL,
        userAgent: navigator.userAgent,
        timezone: timezone,
        language: language,
        screenResolution: screenResolution,
        deviceType: deviceType
    }

    return fingerprintComponents;
}

// Function to generate SHA-256 hash of a string
//async function generateSHA256(input) {
//    const msgUint8 = new TextEncoder().encode(input);
//    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
//    const hashArray = Array.from(new Uint8Array(hashBuffer));
//    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//    return hashHex;
//}


//new function 
async function generateSHA256(input) {
    const msgUint8 = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}


// Function to detect the device type and brand
function getDeviceInfo() {
    var userAgent = navigator.userAgent;

    if (/mobile/i.test(userAgent)) {
        if (/like Mac OS X/i.test(userAgent)) {
            return { deviceType: "Mobile", brand: "Apple" };
        } else if (/Android/i.test(userAgent)) {
            return { deviceType: "Mobile", brand: "Android" };
        } else {
            return { deviceType: "Mobile", brand: "Unknown" };
        }
    } else {
        return { deviceType: "Desktop", brand: "Unknown" };
    }
}

// Function to get the cookie value by name
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to generate the final fingerprint
//async function generateFingerprint() {
//  var components = generateCanvasFingerprint();
//  components.canvasFingerprint = await generateSHA256(components.canvasFingerprint); // hash canvasFingerprint
//  var hash = await generateSHA256(JSON.stringify(components));
//  components.fingerprintHash = hash;
//  return hash;
//}

// Function to generate the final fingerprint
async function generateFingerprint() {
  var components = generateCanvasFingerprint();
  components.canvasFingerprint = await generateSHA256(components.canvasFingerprint); // hash canvasFingerprint
  var hash = await generateSHA256(JSON.stringify(components));
  components.fingerprintHash = hash;

  // Convert hash to a numeric fingerprint using BigInt
  var numericFingerprint = BigInt('0x' + hash).toString();

  return numericFingerprint;
}



// Function to post messages
function postMessage(topic, message) {
  if (typeof message === 'string') {
    message = { text: message };
  }
  fetch('/static/analytics/kafka.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, ...message }),
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
}
 
// Main function
//async function main() {
//  fingerprint = await generateFingerprint();
//  localStorage.setItem('fingerprint', fingerprint); // Set the fingerprint in local storage
//  var expires = new Date();
//  expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set the cookie to expire in 365 days
//  document.cookie = 'contentprint=' + fingerprint + ';expires=' + expires.toUTCString() + ';path=/';

// Main function
async function dofnprtfm() {
//  fingerprint = await generateFingerprint();
//  localStorage.setItem('fingerprint', fingerprint); // Set the fingerprint in local storage
//  var expires = new Date();
//  expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set the cookie to expire in 365 days
//  document.cookie = 'contentprint=' + fingerprint + ';expires=' + expires.toUTCString() + ';path=/';
  if(!getCookie('contentprint')) {
    fingerprint = await generateFingerprint();
    localStorage.setItem('fingerprint', fingerprint); // Set the fingerprint in local storage
    var expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set the cookie to expire in 365 days
    document.cookie = 'contentprint=' + fingerprint + ';expires=' + expires.toUTCString() + ';path=/';
  } else {
    fingerprint = getCookie('contentprint');
  }



  // Your postMessage usage
  let startViewTime = Date.now();
  let cururl = window.location.href;
  let userAgent = navigator.userAgent;
  let acceptLanguage = navigator.language || navigator.userLanguage;
  let kt_referer = getCookie('kt_referer');
  let kt_qp = getCookie('kt_qparams');
  let pageViews = localStorage.getItem('pageViews') || 0;
  pageViews++;
  localStorage.setItem('pageViews', pageViews);
  let referrer = document.referrer;

  let data = {
    fingerprint,
    userAgent,
    acceptLanguage,
    cururl,
    kt_referer,
    kt_qp,
    referrer,
    pageViews
  };

  postMessage('page_analytics_4k', data); // Send the page analytics right after page load

  window.onerror = function(message, source, lineno, colno, error) {
    var deviceInfo = getDeviceInfo();
    var data = {
      error: message,
      source: source,
      lineno: lineno,
      colno: colno,
      stack: error ? error.stack : '',  // includes the stack trace
      userAgent: navigator.userAgent,
      acceptLanguage: navigator.language || navigator.userLanguage,
      deviceType: deviceInfo.deviceType,
      brand: deviceInfo.brand
    };

    postMessage('errors_4k', data);
  };
   window.onbeforeunload = function() {
    let stayTime = Date.now() - startViewTime;
    data.stayTime = stayTime;
    postMessage('stay_analytics_4k', data);
  };
}

// Execute main function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  dofnprtfm();
});
</script>
</div>
</div>

<script defer src="https://www.googletagmanager.com/gtag/js?id=G-56T04X6LBQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-56T04X6LBQ');
</script>
</body>
</html>