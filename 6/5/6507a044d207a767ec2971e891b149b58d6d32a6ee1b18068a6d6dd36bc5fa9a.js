/*! Analytics - Mon, 18 Sep 2023 16:46:04 GMT */
"use strict";(self.webpackChunkom_api_js=self.webpackChunkom_api_js||[]).push([[1],{5624:function(t,i,e){e.r(i),e.d(i,{default:function(){return m}});var s={};e.r(s),e.d(s,{GoogleAnalytics:function(){return u},GoogleAnalytics4:function(){return y},Native:function(){return l}});var n=e(2843),a=e(9213),r=e(2888);function o(t,i,e){return(i=function(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class l{constructor(t){o(this,"track",(()=>{(0,r.trigger)(document,"Native.track",{Native:this,Campaign:this.C}),this.enabled&&this.run()})),o(this,"run",(()=>{(0,r.trigger)(document,"Native.track",{Native:this,Campaign:this.C});let t="impression"===this.analytics.type?(0,r.getUrl)(this.C.defaults,"impressions"):(0,r.getUrl)(this.C.defaults,"conversions"),i={aid:this.C.defaults.user,cid:this.C.id,sid:this.C.Sites.current().id||0,rt:(0,r.visitorReturning)(),dv:n.Z.get(),cty:this.C.type,url:(0,r.urlPath)(),v:5};this.request(t,i),(0,r.trigger)(document,"Native."+this.analytics.type,{Native:this,Campaign:this.C,data:i})})),o(this,"request",((t,i)=>{(new a.Z).get(t,i).setCache(!1).setTimeout(5e3).send().then((()=>{})).catch((()=>{}))})),this.type="native",this.analytics=t,this.C=t.C,this.enabled=!0,this.init()}init(){(0,r.trigger)(document,"Native.init",{Native:this,Campaign:this.C})}}var c=e(7075),h=e(7624);function d(t,i,e){return(i=function(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class u{constructor(t,i){d(this,"track",(()=>{(0,r.trigger)(document,"GoogleAnalytics.track",{GoogleAnalytics:this,Campaign:this.C,version:3}),window["ga-disable-"+this.settings.ua_id]||this.enabled&&(this.ready||this.C.Timeouts.set((()=>{this.track()}),500),this.object&&(0,r.hasProp)(this.object,"getAll")&&((0,r.each)(this.object.getAll(),((t,i)=>{i.get("trackingId")===this.settings.ua_id&&(this.tracker=i)})),this.tracker||(this.object("create",this.settings.ua_id,"auto","omTracker"+this.C.id),(0,r.hasProp)(this.object,"getByName")&&(this.tracker=this.object.getByName("omTracker"+this.C.id))),this.tracker?(this.tracker.send("event",this.C.name,this.analytics.type,this.C.id,{nonInteraction:!0,_r:0}),(0,r.trigger)(document,"GoogleAnalytics."+this.analytics.type,{GoogleAnalytics:this,Campaign:this.C,version:3})):this.warned||(c.Z.debug('A Google Analytics tracker could not be created or retrieved for the "'+this.C.name+'" campaign. Contact support for more details.'),this.warned=!0)))})),this.analytics=t,this.C=t.C,this.id=i.id,this.type=i.type,this.settings=i.settings,this.object=null,this.tracker=null,this.ready=!1,this.enabled=!0,this.warned=!1,this.tries=0,void 0===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics&&(window[h.GLOBAL_OM].scripts.analytics.googleAnalytics={data:{},error:"",object:null,status:"ready"}),this.init()}init(){if((0,r.trigger)(document,"GoogleAnalytics.init",{GoogleAnalytics:this,Campaign:this.C,version:3}),"failed"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status)return;if("loading"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status)return void this.C.Timeouts.set((()=>{this.init()}),500);if(8<++this.tries)return void c.Z.debug("Google Analytics could not be initialized for the "+this.C.name+" ("+this.C.id+") campaign because the analytics object is invalid.");if(!this.settings.ua_id)return void(this.enabled=!1);void 0!==window.__gtagTracker?this.object=window.__gtagTracker:void 0!==window.__gaTracker?this.object=window.__gaTracker:void 0!==window.gaTracker?this.object=window.gaTracker:void 0!==window.__omGaTracker?this.object=window.__omGaTracker:void 0!==window.ga?this.object=window.ga:(0,r.hasProp)(window,"GoogleAnalyticsObject")&&void 0!==window[window.GoogleAnalyticsObject]&&(this.object=window[window.GoogleAnalyticsObject]);let t=Promise.resolve();this.object&&(0,r.hasProp)(this.object,"loaded")&&!0===this.object.loaded||(t=new Promise((t=>{if("loaded"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status)return t();window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status="loading",(0,r.addScript)(this.settings.url,!0,(()=>{window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status="loaded",this.object=window.ga,t()}),(()=>{window[h.GLOBAL_OM].scripts.analytics.googleAnalytics.status="failed",c.Z.debug("Google Analytics could not be initialized for the "+this.C.name+" ("+this.C.id+") campaign because the script failed to load.")}))}))),t.then((()=>{this.ready=!0,this.object&&(0,r.hasProp)(this.object,"getAll")||(void 0!==window.ga&&(0,r.hasProp)(window.ga,"getAll")?this.object=window.ga:(this.object=null,this.C.Timeouts.set((()=>{this.init()}),500)))}))}}function g(t,i,e){return(i=function(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class y{constructor(t,i){g(this,"track",(()=>{if((0,r.trigger)(document,"GoogleAnalytics.track",{GoogleAnalytics:this,Campaign:this.C,version:4}),window["ga-disable-"+this.settings.ua_id])return;if(!this.enabled)return;if(!this.ready)return void this.C.Timeouts.set((()=>{this.track()}),500);if(!this.object)return;if(this.tracker=this.object,!this.tracker)return void(this.warned||(c.Z.debug('A Google Analytics tracker could not be created or retrieved for the "'+this.C.name+'" campaign. Contact support for more details.'),this.warned=!0));let t={name:`optinmonster_${this.analytics.type}`,params:{om_campaign_name:this.C.name,om_campaign_id:this.C.id,send_to:this.settings.ua_id}};(0,r.trigger)(document,"GoogleAnalytics.pre"+(0,r.toUpperCaseFirst)(this.analytics.type)+"Event",{GoogleAnalytics:this,Campaign:this.C,gaEvent:t}),this.tracker("event",t.name,t.params),(0,r.trigger)(document,"GoogleAnalytics."+this.analytics.type,{GoogleAnalytics:this,Campaign:this.C,version:4})})),this.analytics=t,this.C=t.C,this.id=i.id,this.type=i.type,this.settings=i.settings,this.object=null,this.tracker=null,this.ready=!1,this.enabled=!0,this.warned=!1,this.tries=0,this.dataLayerProp="dataLayer",void 0===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4&&(window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4={data:{},error:"",object:null,status:"ready"}),this.init()}init(){if((0,r.trigger)(document,"GoogleAnalytics.init",{GoogleAnalytics:this,Campaign:this.C,version:4}),"failed"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status)return;if("loading"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status)return void this.C.Timeouts.set((()=>{this.init()}),500);if(8<++this.tries)return void c.Z.debug("Google Analytics could not be initialized for the "+this.C.name+" ("+this.C.id+") campaign because the analytics object is invalid.");if(!this.settings.ua_id)return void(this.enabled=!1);if(this.object||(void 0!==window.__gtagTracker&&(this.object=window.__gtagTracker),void 0!==window.gtag&&(this.object=window.gtag)),this.object)return void(this.ready=!0);let t=Promise.resolve();this.object||(0,r.getDOMElement)(`script[src^="${this.settings.url}"]`)||(t=new Promise((t=>{if("loaded"===window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status)return t();window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status="loading",(0,r.addScript)(this.settings.url,!0,(()=>{function i(){window.dataLayer.push(arguments)}window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status="loaded",window.dataLayer=window.dataLayer||[],i("js",new Date),i("config",this.settings.ua_id),this.object=i,t()}),(()=>{window[h.GLOBAL_OM].scripts.analytics.googleAnalytics4.status="failed",c.Z.debug("Google Analytics could not be initialized for the "+this.C.name+" ("+this.C.id+") campaign because the script failed to load.")}))}))),t.then((()=>{this.ready=!0,this.object||(void 0!==window[this.dataLayerProp]?this.object=function(){window[this.dataLayerProp].push(arguments)}:(this.object=null,this.C.Timeouts.set((()=>{this.init()}),500)))}))}}function p(t,i,e){return(i=function(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class m{constructor(t){p(this,"track",(()=>{this.C.preview||this.C.override||this.C.ruleTest||(0,r.disableTrackingEnabled)()||"production"!==this.C.defaults.env||(0,r.inArray)(this.type,this.tracked)||((0,r.trigger)(document,`Analytics.${this.type}`,{Analytics:this,Campaign:this.C}),(0,r.trigger)(document,"Analytics.track",{Analytics:this,Campaign:this.C}),(0,r.each)(this.analytics,((t,i)=>{i.track()})),this.tracked.push(this.type))})),p(this,"impression",(()=>{if(!this.C.Types.isInline()||this.visible())return this.type="impression",this.track();this.scrollOn()})),p(this,"scrollOn",(()=>{(0,r.trigger)(document,"Analytics.init.scrollListener",{Analytics:this,Campaign:this.C}),this.scrollElement=this.scrollElement||this.C.getCustomScrollElement(window),(0,r.on)(this.scrollElement,"scroll.omAnalytics."+this.C.id,this.hasScrolled)})),p(this,"hasScrolled",(()=>{this.C.Types.isInline()?this.visible()&&(this.type="impression",this.track(),this.scrollOff()):this.scrollOff()})),p(this,"visible",(()=>49<this.C.Types.visible().percent)),p(this,"scrollOff",(()=>{this.scrollElement=this.scrollElement||this.C.getCustomScrollElement(window),(0,r.off)(this.scrollElement,"scroll.omAnalytics."+this.C.id)})),p(this,"conversion",(()=>{this.type="conversion",this.track()})),this.C=t,this.type="impression",this.tracked=[],this.analytics=[new l(this)],this.scrollElement=null,(0,r.each)(t.analytics,((t,i)=>{this.analytics.push(new(s[(0,r.convertClassName)(i.type)])(this,i))})),this.init()}init(){(0,r.trigger)(document,"Analytics.init",{Analytics:this,Campaign:this.C})}}}}]);ct.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(u&&u(r);l.length;)l.shift()();return n.push.apply(n,b||[]),a()}function a(){for(var e,r=0;r<n.length;r++){for(var a=n[r],t=!0,c=1;c<a.length;c++){var d=a[c];0!==f[d]&&(t=!1)}t&&(n.splice(r--,1),e=o(o.s=a[0]))}return e}var t={},f={0:0},n=[];function o(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var r=[],a=f[e];if(0!==a)if(a)r.push(a[2]);else{var t=new Promise((function(r,t){a=f[e]=[r,t]}));r.push(a[2]=t);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+e+"."+{1:"475c1a16b0b216dd72ba",2:"2291543b7da7977317da",3:"5b65ff0882083e3a5c9b",4:"3e05b46a0a127a2ddce6",5:"e0c898019300f51df039",6:"22faaeb4965e84d9bff9",7:"660dbbcd34da0c9ed97a",8:"dc7333db1bb4495b9ee7",72:"32bf8556bfeafb109d78",73:"177e6472f3535f71cbfa",74:"45205f15f098bb3bb448",75:"a628cf9929af1e73df5b",76:"2c0f596be3cb352dc1c7",77:"bbdbb18b6d6cc4d6b40f",78:"37cbb9a24f955c3a07e6",79:"9f1dbbc91e6dbfefda58",80:"b79fa066eaadf93a8d69",81:"fada19f588e7491736fd",82:"6982988a5b2f1df21e10",83:"35bc0f5460d605ffe48b",84:"ff74f86c5f50e52799d6",85:"5f7e779b7fe3edc94e39",86:"ace21e468b642bf97a8f",87:"addf1117a3aba0adf6aa",88:"e0f895867dcbc3abaabf",89:"7bc3ef6221ff06b06db5",90:"86848e0ec9f5f5d44de1",91:"39a9e758d69a193c639c",92:"5aec81f19c35b4dc479e",93:"493a50c74f2025247c22",94:"ae6da0b80ee4ad49782a",95:"b72f8d2291f25f863f5b",96:"1c69b12e589a3faa2729",97:"ada8054f38aa83584322",98:"ee1dfb7615cbec5ae1ee",99:"2218b146f623d5fa7133",100:"d5deb2e2cbd52526e959"}[e]+".chunk.js"}(e);var d=new Error;n=function(r){c.onerror=c.onload=null,clearTimeout(b);var a=f[e];if(0!==a){if(a){var t=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+n+")",d.name="ChunkLoadError",d.type=t,d.request=n,a[1](d)}f[e]=void 0}};var b=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(r)},o.m=e,o.c=t,o.d=function(e,r,a){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(a,t,function(r){return e[r]}.bind(null,t));return a},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/dist/bundles/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=r,c=c.slice();for(var b=0;b<c.length;b++)r(c[b]);var u=d;a()}([]);
</script>
<script type="text/javascript" src="https://bundles.npr.org/dist/bundles/32.c498168fb4dc9f6bae44.chunk.js">
   </script>
<link rel="stylesheet" data-persist="true" media="screen, print" href="https://bundles.npr.org/dist/bundles/persistent-css-27f661d314201221e3f0.css" /><link rel="stylesheet" data-persist="true" media="screen and (min-width: 768px)" href="https://bundles.npr.org/dist/bundles/persistent_medium-css-27f661d314201221e3f0.css" /><link rel="stylesheet" data-persist="true" media="screen and (min-width: 1025px)" href="https://bundles.npr.org/dist/bundles/persistent_large-css-27f661d314201221e3f0.css" /><link rel="preload" data-persist="true" media="screen, print" href="https://bundles.npr.org/dist/bundles/fonts-css-27f661d314201221e3f0.css" as="style" onload="this.onload=null;this.rel='stylesheet'"  /><link rel="stylesheet" media="screen, print" href="https://bundles.npr.org/dist/bundles/newsStory-css-27f661d314201221e3f0.css" /><link rel="stylesheet" media="screen" href="https://static-assets.npr.org/branding/sections/health-shots/branding.css" /><script type="application/ld+json">
   {"@type":"NewsArticle","publisher":{"@type":"Organization","name":"KFF Health News","logo":{"@type":"ImageObject","url":"https:\/\/media.npr.org\/chrome\/npr-logo.jpg"}},"headline":"What would a second Trump presidency look like for health care?","mainEntityOfPage":{"@type":"WebPage","@id":"https:\/\/www.npr.org\/sections\/health-shots\/2024\/01\/16\/1224938442\/what-would-a-second-trump-presidency-look-like-for-health-care"},"datePublished":"2024-01-16T12:15:45-05:00","dateModified":"2024-01-16T12:15:45-05:00","author":{"@type":"Person","name":["Julie Rovner"]},"description":"The former president is reviving campaign promises to undo Obamacare, an idea that fizzled during his first time in office. Based on his record, here's what else he might do in health policy.","image":{"@type":"ImageObject","url":"https:\/\/media.npr.org\/assets\/img\/2024\/01\/16\/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd.jpg"},"@context":"http:\/\/schema.org"}
</script>
<script type="text/javascript">
   document.domain="www.npr.org";
</script>
<script id="piano-aid" type="text/javascript" data-piano-aid="9ENxKQ58pu">
    (function(src) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })("//cdn.piano.io/api/tinypass.min.js");

    window.pdl = window.pdl || {};
    window.pdl.requireConsent = true;

    tp = window.tp || [];

    tp.push(["init", function() {
        tp.enableGACrossDomainLinking();
    }]);
</script>
                              <script>!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="MBVDT-3L9KY-36ZMJ-SPSAR-JR833",function(){function e(){if(!o){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,i.parentNode.appendChild(e),o=!0}}function t(e){o=!0;var n,t,a,r,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(i.parentNode,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",r=(a.frameElement||a).style,r.width=0,r.height=0,r.border=0,r.display="none",i.parentNode.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void(0);",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=12,window.BOOMR.url=n+"MBVDT-3L9KY-36ZMJ-SPSAR-JR833";var i=document.currentScript||document.getElementsByTagName("script")[0],o=!1,r=document.createElement("link");if(r.relList&&"function"==typeof r.relList.supports&&r.relList.supports("preload")&&"as"in r)window.BOOMR.snippetMethod="p",r.href=window.BOOMR.url,r.rel="preload",r.as="script",r.addEventListener("load",e),r.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!o)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),i.parentNode.appendChild(r);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="snjyeg2y3xkswznhcdza-f-fcd060331-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"36","ak.cp":"55818","ak.ai":parseInt("290690",10),"ak.ol":"0","ak.cr":6,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"5be77e2","ak.r":30832,"ak.a2":n,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"147.83.130.0","ak.cport":43488,"ak.gh":"88.221.213.39","ak.quicv":"","ak.tlsv":"tls1.2","ak.0rtt":"","ak.csrc":"-","ak.acc":"reno","ak.t":"1705447666","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==iX01TUr+9HKh6b3Ry7Bcmgmak9I936syIrwsJcgO1UnE+aN3EoRySpnGwho6w9J6+BOiuhz07I0QaSvjkKJGbUSKLCEezRrYfGe3a70l6WV8qT5JYLvXVIzkjWhYHZJNbZC/zOg3X0eFU2D7/+Sgs2M3Joh2cDrjsg+RrkyXC7haUu4UV9fsZ+/PYlI7r2EDhWAt5bw/6yW5JtUtK5gYGWKb/gO/YR4/t3V8tVSzYy/FT5IkFOLbGAw2lEkX9GWuOYBafJFptjRTk4qGDrkEeYC6FNlmg26cbWdqKnLdT3x+chEI4zbHCI082jrdTjmhkt6NEhHbWH/PweUlV+OAxEcxPoRkGZSgx7+LQsj2W3kj+Junx1d74iMQxpBEJ0Si9r1af6viVuLlBCJKSZpo733W4nAF7JlccCfzfv3FcLo=","ak.pv":"81","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head><body id="news" class="news tmplBlogNewsStory  story-layout is-buildout no-transcript   blog catId133188445 id1224938442  " data-pjax-modules="util/env images/lazy-load data-consent data-management-platform header-bidding metrics nielsen nielsenDCR copyright auto-refresh navigation/global-navigation fitvids googletag dfp globalfooter persistent-audio player/more-options player/audio-module-clickable what-input metrics/doubleclickFloodlight callout/on-page-callouts global-alerts we-are-hiring piano rum ecommerce recommendations/end-of-story-recommendations-callout jw social/share slideshow images/enlargement contentfooter story/date-tooltip social/sharepop podcast-cards search/faceting-param local/newsletter/callout social/recaptcha">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVD397M" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="skip-links">
      <span>Accessibility links</span>   <ul>
            <li><a href="#mainContent" class="skiplink">Skip to main content</a></li>
      <li><a href="https://help.npr.org/contact/s/article?name=what-are-the-keyboard-shortcuts-for-using-the-npr-org-audio-player" class="skiplink">Keyboard shortcuts for audio player</a></li>
   </ul>
</div>
<header class="npr-header" id="globalheader" aria-label="NPR header">
<nav class="navigation">
    <div class="navigation__top-level-wrap" data-metrics-all data-metrics-category="global navigation" data-metrics-category-ga4="recirculation">
        <ul class="navigation__top-level">
            <li class="navigation__toggle-wrap">
                <button id="navigation__toggle--open" class="navigation__toggle navigation__toggle--open" aria-haspopup="true" aria-expanded="false" data-metrics-action="open navigation menu" data-metrics-ga4='{"action":"global_navigation_click","clickName":"open navigation menu","clickType":"global navigation"}'>
                    Open Navigation Menu
                </button>
            </li>

            <li class="navigation__home">
                <a href="/" data-metrics-action="click npr logo" data-metrics-ga4='{"action":"global_navigation_click","clickName":"npr logo","clickType":"global navigation","clickUrl":"\/"}'>
                    <img src="https://media.npr.org/chrome_svg/npr-logo.svg" alt="NPR logo"/>
                </a>
            </li>

            <li id="navigation__station-mount"></li>

            <li class="navigation__newsletters">
                <div class="navigation__newsletters-inner">
                    <a href="/newsletters/" data-metrics-action="click newsletters" data-metrics-ga4='{"action":"global_navigation_click","clickName":"newsletters","clickType":"global navigation","clickUrl":"/newsletters/"}' target='_blank'>Newsletters</a>
                </div>
            </li>

            <li id="user-account-dropdown-mount" class="navigation__account"></li>

            <li class="navigation__shop">
                <a href="https://shopnpr.org" data-metrics-action="click npr shop" data-metrics-ga4='{"action":"global_navigation_click","clickName":"npr shop","clickType":"global navigation","clickUrl":"https://shopnpr.org"}'>NPR Shop</a>
            </li>

            <li id="navigation__station-donate-mount"></li>
        </ul>
    </div>
    <section id="main-menu" class="menu menu--main" data-metrics-all data-metrics-category="global navigation" data-metrics-category-ga4="recirculation">
        <div class="menu__inner">
            <header class="menu__header">
                <button id="navigation__toggle--close" class="navigation__toggle navigation__toggle--close" aria-haspopup="true" aria-expanded="true" data-metrics-action="close navigation menu" data-metrics-ga4='{"action":"global_navigation_click","clickName":"close navigation menu","clickType":"global navigation"}'>
                    Close <span>Navigation Menu</span>
                </button>
            </header>
            <ul class="menu__list">
                <li class="menu__item menu__item--home">
                    <div class="menu__item-inner"><a href="/" data-metrics-action="click npr logo" data-metrics-ga4='{"action":"global_navigation_click","clickName":"npr logo","clickType":"global navigation","clickUrl":"\/"}'>Home</a></div>
                </li>
                <li class="menu__item menu__item--news menu__item--has-submenu">
                    <div class="menu__item-inner">
                        <a href="/sections/news/" data-metrics-action="click news" data-metrics-ga4='{"action":"global_navigation_click","clickName":"news","clickType":"global navigation","clickUrl":"/sections/news/"}'>News</a>
                        <button class="menu__toggle-submenu" data-metrics-action="toggle news drawer" data-metrics-ga4='{"action":"global_navigation_click","clickName":"toggle news drawer","clickType":"global navigation"}'>Expand/collapse submenu for News</button>
                    </div>

                    <ul class="submenu submenu--news">
                        <li class="submenu__item"><a href="/sections/national/" data-metrics-action="click national" data-metrics-ga4='{"action":"global_navigation_click","clickName":"national","clickType":"global navigation","clickUrl":"/sections/national/"}'>National</a></li>
                        <li class="submenu__item"><a href="/sections/world/" data-metrics-action="click world" data-metrics-ga4='{"action":"global_navigation_click","clickName":"world","clickType":"global navigation","clickUrl":"/sections/world/"}'>World</a></li>
                        <li class="submenu__item"><a href="/sections/politics/" data-metrics-action="click politics" data-metrics-ga4='{"action":"global_navigation_click","clickName":"politics","clickType":"global navigation","clickUrl":"/sections/politics/"}'>Politics</a></li>
                        <li class="submenu__item"><a href="/sections/business/" data-metrics-action="click business" data-metrics-ga4='{"action":"global_navigation_click","clickName":"business","clickType":"global navigation","clickUrl":"/sections/business/"}'>Business</a></li>
                        <li class="submenu__item"><a href="/sections/health/" data-metrics-action="click health" data-metrics-ga4='{"action":"global_navigation_click","clickName":"health","clickType":"global navigation","clickUrl":"/sections/health/"}'>Health</a></li>
                        <li class="submenu__item"><a href="/sections/science/" data-metrics-action="click science" data-metrics-ga4='{"action":"global_navigation_click","clickName":"science","clickType":"global navigation","clickUrl":"/sections/science/"}'>Science</a></li>
                        <li class="submenu__item"><a href="/sections/climate/" data-metrics-action="click climate" data-metrics-ga4='{"action":"global_navigation_click","clickName":"climate","clickType":"global navigation","clickUrl":"/sections/climate/"}'>Climate</a></li>
                        <li class="submenu__item"><a href="/sections/codeswitch/" data-metrics-action="click race" data-metrics-ga4='{"action":"global_navigation_click","clickName":"race","clickType":"global navigation","clickUrl":"/sections/codeswitch/"}'>Race</a></li>
                    </ul>
                </li>
                <li class="menu__item menu__item--culture menu__item--has-submenu">
                    <div class="menu__item-inner">
                        <a href="/sections/culture/" data-metrics-action="click culture" data-metrics-ga4='{"action":"global_navigation_click","clickName":"culture","clickType":"global navigation","clickUrl":"/sections/culture/"}'>Culture</a>
                        <button class="menu__toggle-submenu" data-metrics-action="toggle culture drawer" data-metrics-ga4='{"action":"global_navigation_click","clickName":"toggle culture drawer","clickType":"global navigation"}'>Expand/collapse submenu for Culture</button>
                    </div>

                    <ul class="submenu submenu--culture">
                        <li class="submenu__item"><a href="/books/" data-metrics-action="click books" data-metrics-ga4='{"action":"global_navigation_click","clickName":"books","clickType":"global navigation","clickUrl":"/books/"}'>Books</a></li>
                        <li class="submenu__item"><a href="/sections/movies/" data-metrics-action="click movies" data-metrics-ga4='{"action":"global_navigation_click","clickName":"movies","clickType":"global navigation","clickUrl":"/sections/movies/"}'>Movies</a></li>
                        <li class="submenu__item"><a href="/sections/television/" data-metrics-action="click television" data-metrics-ga4='{"action":"global_navigation_click","clickName":"television","clickType":"global navigation","clickUrl":"/sections/television/"}'>Television</a></li>
                        <li class="submenu__item"><a href="/sections/pop-culture/" data-metrics-action="click pop culture" data-metrics-ga4='{"action":"global_navigation_click","clickName":"pop culture","clickType":"global navigation","clickUrl":"/sections/pop-culture/"}'>Pop Culture</a></li>
                        <li class="submenu__item"><a href="/sections/food/" data-metrics-action="click food" data-metrics-ga4='{"action":"global_navigation_click","clickName":"food","clickType":"global navigation","clickUrl":"/sections/food/"}'>Food</a></li>
                        <li class="submenu__item"><a href="/sections/art-design/" data-metrics-action="click art & design" data-metrics-ga4='{"action":"global_navigation_click","clickName":"art & design","clickType":"global navigation","clickUrl":"/sections/art-design/"}'>Art &amp; Design</a> </li>
                        <li class="submenu__item"><a href="/sections/performing-arts/" data-metrics-action="click performing arts" data-metrics-ga4='{"action":"global_navigation_click","clickName":"performing arts","clickType":"global navigation","clickUrl":"/sections/performing-arts/"}'>Performing Arts</a></li>
                        <li class="submenu__item"><a href="/lifekit/" data-metrics-action="click life kit" data-metrics-ga4='{"action":"global_navigation_click","clickName":"life kit","clickType":"global navigation","clickUrl":"/lifekit/"}'>Life Kit</a></li>
                        <li class="submenu__item"><a href="/sections/gaming/" data-metrics-action="click gaming" data-metrics-ga4='{"action":"global_navigation_click","clickName":"gaming","clickType":"global navigation","clickUrl":"/sections/gaming/"}'>Gaming</a></li>
                    </ul>
                </li>
                <li class="menu__item menu__item--music menu__item--has-submenu">
                    <div class="menu__item-inner">
                        <a href="/music/" data-metrics-action="click music" data-metrics-ga4='{"action":"global_navigation_click","clickName":"music","clickType":"global navigation","clickUrl":"/music/"}'>Music</a>
                        <button class="menu__toggle-submenu" data-metrics-action="toggle music drawer" data-metrics-ga4='{"action":"global_navigation_click","clickName":"toggle music drawer","clickType":"global navigation"}'>Expand/collapse submenu for Music</button>
                    </div>

                    <ul class="submenu submenu--music"><li class="submenu__item">
    <a href="https://www.npr.org/series/1216055039/best-music-of-2023" data-metrics-action="click best music of 2023"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"best music of 2023","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/1216055039\/best-music-of-2023"}' >
        Best Music Of 2023
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/series/tiny-desk-concerts/" data-metrics-action="click tiny desk"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"tiny desk","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/tiny-desk-concerts\/"}' >
        Tiny Desk
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/series/1191556125/hip-hop-50" data-metrics-action="click hip-hop 50"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"hip-hop 50","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/1191556125\/hip-hop-50"}' >
        Hip-Hop 50
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/sections/allsongs/" data-metrics-action="click all songs considered"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"all songs considered","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/sections\/allsongs\/"}' >
        All Songs Considered
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/sections/music-features" data-metrics-action="click music features"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"music features","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/sections\/music-features"}' >
        Music Features
    </a>
</li></ul>

                </li>
                <li class="menu__item menu__item--shows-podcasts menu__item--has-submenu">
                    <div class="menu__item-inner">
                        <a href="/podcasts-and-shows/" data-metrics-action="click podcasts & shows" data-metrics-ga4='{"action":"global_navigation_click","clickName":"podcasts & shows","clickType":"global navigation","clickUrl":"/podcasts-and-shows/"}'>Podcasts &amp; Shows</a>
                        <button class="menu__toggle-submenu" data-metrics-action="toggle podcasts &amp; shows drawer" data-metrics-ga4='{"action":"global_navigation_click","clickName":"toggle podcasts &amp; shows drawer","clickType":"global navigation"}'>Expand/collapse submenu for Podcasts &amp; Shows</button>
                    </div>

                    <div class="submenu submenu--shows-podcasts">
                        <span class="submenu__category submenu__category--daily">Daily</span>
                        <ul class="submenu__list submenu__list--daily">
                            <li class="submenu__item submenu__item--timed submenu__item--weekday hidden">
                                <a href="/programs/morning-edition/" data-metrics-action="click morning edition" data-metrics-ga4='{"action":"global_navigation_click","clickName":"morning edition","clickType":"global navigation","clickUrl":"/programs/morning-edition/"}'>
                                    <img src="https://media.npr.org/chrome/programs/logos/morning-edition.jpg" loading="lazy" alt="" />
                                    Morning Edition
                                </a>
                            </li>
                            <li class="submenu__item submenu__item--timed submenu__item--saturday hidden" >
                                <a href="/programs/weekend-edition-saturday/" data-metrics-action="click weekend edition saturday" data-metrics-ga4='{"action":"global_navigation_click","clickName":"weekend edition saturday","clickType":"global navigation","clickUrl":"/programs/weekend-edition-saturday/"}'>
                                    <img src="https://media.npr.org/assets/img/2019/02/26/we_otherentitiestemplatesat_sq-cbde87a2fa31b01047441e6f34d2769b0287bcd4-s100-c85.png" loading="lazy" alt="" />
                                    Weekend Edition Saturday
                                </a>
                            </li>
                            <li class="submenu__item submenu__item--timed submenu__item--sunday hidden">
                                <a href="/programs/weekend-edition-sunday/" data-metrics-action="click weekend edition sunday" data-metrics-ga4='{"action":"global_navigation_click","clickName":"weekend edition sunday","clickType":"global navigation","clickUrl":"/programs/weekend-edition-sunday/"}'>
                                    <img src="https://media.npr.org/assets/img/2019/02/26/we_otherentitiestemplatesun_sq-4a03b35e7e5adfa446aec374523a578d54dc9bf5-s100-c85.png" loading="lazy" alt="" />
                                    Weekend Edition Sunday
                                </a>
                            </li>
                            <li class="submenu__item">
                                <a href="/programs/all-things-considered/" data-metrics-action="click all things considered" data-metrics-ga4='{"action":"global_navigation_click","clickName":"all things considered","clickType":"global navigation","clickUrl":"/programs/all-things-considered/"}'>
                                    <img src="https://media.npr.org/chrome/programs/logos/all-things-considered.png" loading="lazy" alt="" />
                                    All Things Considered
                                </a>
                            </li>
                            <li class="submenu__item">
                                <a href="/programs/fresh-air/" data-metrics-action="click fresh air" data-metrics-ga4='{"action":"global_navigation_click","clickName":"fresh air","clickType":"global navigation","clickUrl":"/programs/fresh-air/"}'>
                                    <img src="https://media.npr.org/chrome/programs/logos/fresh-air.png" loading="lazy" alt="" />
                                    Fresh Air
                                </a>
                            </li>
                            <li class="submenu__item">
                                <a href="/podcasts/510318/up-first/" data-metrics-action="click up first" data-metrics-ga4='{"action":"global_navigation_click","clickName":"up first","clickType":"global navigation","clickUrl":"/podcasts/510318/up-first/"}'>
                                    <img src="https://media.npr.org/chrome/programs/logos/up-first.jpg?version=2" loading="lazy" alt="" />
                                    Up First
                                </a>
                            </li>
                        </ul>
                        <span class="submenu__category submenu__category--featured">Featured</span>

                        <ul class="submenu__list submenu__list--featured"><li class="submenu__item">
    <a href="https://www.npr.org/podcasts/510374/trumps-trials" data-metrics-action="click trump's trials"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"trump&#39;s trials","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/podcasts\/510374\/trumps-trials"}' >
        <img src="https://media.npr.org/assets/img/2023/11/10/trumps-trial_tile-art_small_sq-71cfb7f3a96f3029db4ca7230c5704c61a351b81-s100-c100.jpg" data-original="https://media.npr.org/assets/img/2023/11/10/trumps-trial_tile-art_small_sq-71cfb7f3a96f3029db4ca7230c5704c61a351b81-s100.jpg"   class=" lazy" alt="" loading="lazy" />
        Trump's Trials
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/podcasts/510366/state-of-the-world" data-metrics-action="click state of the world from npr"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"state of the world from npr","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/podcasts\/510366\/state-of-the-world"}' >
        <img src="https://media.npr.org/assets/img/2023/10/11/stateofworld_sq-75fa8776ed49f02437f7283e25e054b9cc4db31c-s100-c100.jpg" data-original="https://media.npr.org/assets/img/2023/10/11/stateofworld_sq-75fa8776ed49f02437f7283e25e054b9cc4db31c-s100.jpg"   class=" lazy" alt="" loading="lazy" />
        State of the World from NPR
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/podcasts/510282/pop-culture-happy-hour" data-metrics-action="click pop culture happy hour"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"pop culture happy hour","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/podcasts\/510282\/pop-culture-happy-hour"}' >
        <img src="https://media.npr.org/assets/img/2022/09/23/popculture-happyhour_tile_npr-network-01_sq-a6085eb399896271a87a1983ae3c6c702f69dcd9-s100-c100.jpg" data-original="https://media.npr.org/assets/img/2022/09/23/popculture-happyhour_tile_npr-network-01_sq-a6085eb399896271a87a1983ae3c6c702f69dcd9-s100.jpg"   class=" lazy" alt="" loading="lazy" />
        Pop Culture Happy Hour
    </a>
</li><li class="submenu__item">
    <a href="https://www.npr.org/podcasts/510311/embedded" data-metrics-action="click embedded"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"embedded","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/podcasts\/510311\/embedded"}' >
        <img src="https://media.npr.org/assets/img/2023/12/04/embedded_the-kill-list-large-47-_sq-7f81546a354a9a94af010503f39fbab9f62bb15c-s100-c100.jpg" data-original="https://media.npr.org/assets/img/2023/12/04/embedded_the-kill-list-large-47-_sq-7f81546a354a9a94af010503f39fbab9f62bb15c-s100.jpg"   class=" lazy" alt="" loading="lazy" />
        Embedded
    </a>
</li></ul>

                        <ul class="submenu__list submenu__list--directories">
                            <li class="submenu__item"><a href="/podcasts-and-shows/" data-metrics-action="click podcasts & shows" data-metrics-ga4='{"action":"global_navigation_click","clickName":"podcasts & shows","clickType":"global navigation","clickUrl":"/podcasts-and-shows/"}'>More Podcasts &amp; Shows</a></li>
                        </ul>
                    </div>
                </li>
                <li class="menu__item menu__item--search">
                    <div class="menu__item-inner">
                        <a href="/search/" id="navigation_dropdown-search" data-metrics-action="click search" data-metrics-ga4='{"action":"global_navigation_click","clickName":"search","clickType":"global navigation","clickUrl":"/search/"}'>Search</a>
                    </div>
                </li>
                <li class="menu__item menu__item--newsletters">
                    <div class="menu__item-inner">
                        <a href="/newsletters/" data-metrics-action="click newsletters" data-metrics-ga4='{"action":"global_navigation_click","clickName":"newsletters","clickType":"global navigation","clickUrl":"/newsletters/"}' target='_blank'>Newsletters</a>
                    </div>
                </li>
                <li id="user-account-dropdown-mount-two" class="menu__item menu__item--account"></li>
                <li class="menu__item menu__item--shop">
                    <div class="menu__item-inner">
                        <a href="https://shopnpr.org" data-metrics-action="click npr shop" data-metrics-ga4='{"action":"global_navigation_click","clickName":"npr shop","clickType":"global navigation","clickUrl":"https://shopnpr.org"}'>NPR Shop</a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="menu menu--music" data-metrics-all data-metrics-category="music ecosystem navigation" data-metrics-category-ga4="recirculation">
        <div class="menu__list-wrap">
            <ul class="menu__list menu__list--ecosystem menu__list--music">
                <li class="menu__item menu__item--music-home">
                    <a href="/music/" data-metrics-action="click npr music logo" data-metrics-ga4='{"action":"global_navigation_click","clickName":"npr music logo","clickType":"global navigation","clickUrl":"/music/"}'>
                        <img src="https://media.npr.org/chrome_svg/music-logo-dark.svg" class="music-logo" alt="NPR Music" />
                        <img src="https://media.npr.org/chrome_svg/music-logo-light.svg" class="music-logo-alt" alt="NPR Music" />
                    </a>
                </li>

                <li class="menu__item">
    <a href="https://www.npr.org/series/1216055039/best-music-of-2023" data-metrics-action="click best music of 2023"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"best music of 2023","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/1216055039\/best-music-of-2023"}' >
        Best Music Of 2023
    </a>
</li><li class="menu__item">
    <a href="https://www.npr.org/series/tiny-desk-concerts/" data-metrics-action="click tiny desk"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"tiny desk","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/tiny-desk-concerts\/"}' >
        Tiny Desk
    </a>
</li><li class="menu__item">
    <a href="https://www.npr.org/series/1191556125/hip-hop-50" data-metrics-action="click hip-hop 50"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"hip-hop 50","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/series\/1191556125\/hip-hop-50"}' >
        Hip-Hop 50
    </a>
</li><li class="menu__item">
    <a href="https://www.npr.org/sections/allsongs/" data-metrics-action="click all songs considered"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"all songs considered","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/sections\/allsongs\/"}' >
        All Songs Considered
    </a>
</li><li class="menu__item">
    <a href="https://www.npr.org/sections/music-features" data-metrics-action="click music features"  data-metrics-ga4='{"category":"recirculation","action":"global_navigation_click","clickName":"music features","clickType":"music ecosystem navigation","clickUrl":"https:\/\/www.npr.org\/sections\/music-features"}' >
        Music Features
    </a>
</li>
            </ul>
        </div>
    </section>
    <section class="menu menu--about" data-metrics-all data-metrics-category="about ecosystem navigation" data-metrics-category-ga4="recirculation">
        <div class="menu__list-wrap">
            <ul class="menu__list menu__list--ecosystem menu__list--about">
                <li class="menu__item menu__item--about-home"><a href="/about/" data-metrics-action="click about npr" data-metrics-ga4='{"action":"global_navigation_click","clickName":"about npr","clickType":"about ecosystem navigation","clickUrl":"/about/"}'>About NPR</a></li>
                <li class="menu__item menu__item--about-diversity"><a href="/diversity/" data-metrics-action="click diversity" data-metrics-ga4='{"action":"global_navigation_click","clickName":"diversity","clickType":"about ecosystem navigation","clickUrl":"/diversity/"}'>Diversity</a></li>
                <li class="menu__item menu__item--about-organization"><a href="/organization/" data-metrics-action="click organization" data-metrics-ga4='{"action":"global_navigation_click","clickName":"organization","clickType":"about ecosystem navigation","clickUrl":"/organization/"}'>Organization</a></li>
                <li class="menu__item menu__item--about-network"><a href="/network/" data-metrics-action="click network" data-metrics-ga4='{"action":"global_navigation_click","clickName":"organization","clickType":"about ecosystem navigation","clickUrl":"/network/"}' target='_blank'>NPR Network</a></li>
                <li class="menu__item menu__item--about-support"><a href="/support/" data-metrics-action="click support" data-metrics-ga4='{"action":"global_navigation_click","clickName":"support","clickType":"about ecosystem navigation","clickUrl":"/support/"}'>Support</a></li>
                <li class="menu__item menu__item--about-careers"><a href="/careers/" data-metrics-action="click careers" data-metrics-ga4='{"action":"global_navigation_click","clickName":"careers","clickType":"about ecosystem navigation","clickUrl":"/careers/"}'>Careers</a></li>
                <li class="menu__item menu__item--about-connect"><a href="/connect/" data-metrics-action="click connect" data-metrics-ga4='{"action":"global_navigation_click","clickName":"connect","clickType":"about ecosystem navigation","clickUrl":"/connect/"}'>Connect</a></li>
                <li class="menu__item menu__item--about-press"><a href="/press/" data-metrics-action="click press" data-metrics-ga4='{"action":"global_navigation_click","clickName":"press","clickType":"about ecosystem navigation","clickUrl":"/press/"}'>Press</a></li>
                <li class="menu__item menu__item--about-ethics"><a href="/ethics/" data-metrics-action="click ethics" data-metrics-ga4='{"action":"global_navigation_click","clickName":"ethics","clickType":"about ecosystem navigation","clickUrl":"/ethics/"}'>Ethics</a></li>
            </ul>
        </div>
    </section>
</nav>
</header><main aria-label="main content"><div class="speakable">
      <b data-is-speakable>How Trump might change health policy in the U.S. if he wins again : Shots - Health News</b>   <b data-is-speakable>The former president is reviving campaign promises to undo Obamacare, an idea that fizzled during his first time in office. Based on his record, here's what else he might do in health policy.</b>
</div>
<div id="wrapper">
      <header class="contentheader contentheader--one" data-metrics='{"category":"Shots - Health News"}' ><div class="branding branding--custom">
      <a href="https://www.npr.org/sections/health-shots/" data-metrics='{"action":"click branding"}' ><picture><source srcset="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.webp"  type="image/webp"  data-format="webp" /><source srcset="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.png"  type="image/png" /><img src="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.png" class="branding__image-icon" alt="Shots - Health News" /></picture><div class="branding__inner">
      <h2 class="branding__title branding__title--custom-text"><b>Shots</b></h2>
   <b class="branding__mini-teaser">Health News From NPR</b>
</div>

<!-- END CLASS="BRANDING__INNER" -->
</a>
</div>

<!-- END CLASS="BRANDING BRANDING--CUSTOM" -->
<div class="subnav-tools-wrap">
      <div id="subNavigation" class="agglocation linkLocation" role="navigation" aria-label="sub-navigation">
            <div id="res341873289" class="bucketwrap statichtml">
                  <div class="subtopics">  <ul class="animated fadeInRight">    <li><a href="/sections/health/126567525/your-health">Your Health</a></li>    <li><a href="/sections/health/133188451/treatments-tests">Treatments & Tests</a></li>    <li><a href="/sections/health/133188447/health-inc">Health Inc.</a></li>    <li><a href="/sections/health/133188445/policy-ish">Policy-ish</a></li>    <li><a href="/sections/health/133188449/public-health">Public Health</a></li>  </ul></div><div class="roller-overlay"></div><ul class="subscribe">  <li class="twitter"><a href="https://twitter.com/nprhealth" data-metrics='{"action":"Click Twitter"}'>Twitter</a></li></ul>
      </div>
      
<!-- END ID="RES341873289" CLASS="BUCKETWRAP STATICHTML" -->
   </div>
</div>
</header>   <section id="main-section"><article class="story story-blogpost"><a id="mainContent"></a><div class="slug-wrap">

    <h3 class="slug">
        <a href="https://www.npr.org/sections/health-shots/133188445/policy-ish">Policy-ish</a>
    </h3>
</div>
<div class="storytitle">
      <h1>What would a second Trump presidency look like for health care?</h1>
   <input type="hidden" id="title1224938442" value="What would a second Trump presidency look like for health care?" />
   <input type="hidden" id="shortTitle1224938442" value="What would a second Trump presidency look like for health care?" />
   <input type="hidden" id="modelFullUrl1224938442" value="https://www.npr.org/sections/health-shots/2024/01/16/1224938442/what-would-a-second-trump-presidency-look-like-for-health-care" />
</div>

<!-- END CLASS="STORYTITLE" -->
<div id="story-meta" class="story-meta has-byline has-org">
      <div class="story-meta__one">
            <div class="story-meta__one-inner">
                  <div class="dateblock">
    <time datetime="2024-01-16T12:15:45-05:00">
            <span class="date">January 16, 2024</span><span class="time">12:15 PM ET</span>
    </time>
</div>
      </div>
      
<!-- END CLASS="STORY-META__ONE-INNER" -->
      <div class="partner">
                  <p><b>From </b><a href="http://www.kaiserhealthnews.org/"  data-metrics='{"action":"Click Org Association","category":"Story Metadata"}' ><img src="https://media.npr.org/chrome/ext_provider_105043435.gif" alt="KFF Health News" /></a></p>
      </div>
   </div>
   
<!-- END CLASS="STORY-META__ONE" -->
   <div class="story-meta__two">
            <div id="storybyline" class="storybyline-wrap linkLocation">
                  <div class="bucketwrap byline">
                        <div class="byline-container--block">
                              <p class="byline__name--block">By&nbsp;</p>               <div class="byline byline--block byline--has-link" aria-label="Byline">
  <p class="byline__name byline__name--block">
      <a href="https://www.npr.org/people/2101102/julie-rovner" rel="author"  data-metrics='{"action":"Click Byline","category":"Story Metadata"}' >
      Julie Rovner
    </a>
  </p>
</div>
            </div>
         </div>
         
<!-- END CLASS="BUCKETWRAP BYLINE" -->
      </div>
   </div>
   
<!-- END CLASS="STORY-META__TWO" -->
</div>

<!-- END ID="STORY-META" CLASS="STORY-META HAS-BYLINE HAS-ORG" -->
<div id="storytext" class="storytext storylocation linkLocation">
      <div id="res1224945771" class="bucketwrap image large">
            <div
    class="imagewrap has-source-dimensions"
    data-crop-type=""
    style="
        --source-width: 1024;
        --source-height: 682;
    "
>
        <picture>
            <source srcset="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s400-c85.webp 400w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s600-c85.webp 600w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s800-c85.webp 800w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s900-c85.webp 900w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200-c85.webp 1200w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1600-c85.webp 1600w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1800-c85.webp 1800w"  sizes="(min-width: 1300px) 763px, (min-width: 1025px) calc(100vw - 496px), (min-width: 768px) calc(100vw - 171px), calc(100vw - 30px)" class="img" type="image/webp" />
            <source srcset="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s400-c85.jpg 400w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s600-c85.jpg 600w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s800-c85.jpg 800w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s900-c85.jpg 900w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200-c85.jpg 1200w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1600-c85.jpg 1600w,
https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1800-c85.jpg 1800w"  sizes="(min-width: 1300px) 763px, (min-width: 1025px) calc(100vw - 496px), (min-width: 768px) calc(100vw - 171px), calc(100vw - 30px)" class="img" type="image/jpeg" />
            <img src="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1100-c50.jpg"  class="img" alt="" loading="lazy" />
        </picture>
        <div class="enlarge-options">
            <a class="enlargelink" href="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200.jpg">Enlarge this image</a>
        </div>
</div>
<div class="credit-caption">
    <div class="caption-wrap">
        <div class="caption" aria-label="Image caption">
            <p>
                Former U.S.President Donald Trump speaks during the 2024 Iowa Republican caucuses at Horizon Events Center in West Des Moines, Iowa.
                <b class="credit" aria-label="Image credit">
                    
                    Nathan Howard/Bloomberg via Getty Images
                    
                </b>
                <b class="hide-caption"><b>hide caption</b></b>
            </p>
        </div>


            <b class="toggle-caption"><b>toggle caption</b></b>
    </div>

    <span class="credit" aria-label="Image credit">
        
        Nathan Howard/Bloomberg via Getty Images
        
    </span>
</div>
<div class="enlarge_measure">
    <div class="img_wrap">
        <picture>
            <source data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200.webp" type="image/webp">
            <source data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200.jpg" type="image/jpeg">
            <img data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1928397499_slide-04bae38f934b508b16303a080262c2ae14c571cd-s1200.jpg" alt="" />
        </picture>
    </div>
</div>
<div class="enlarge_html">
    <div class="image_data">
        <p class="caption">Former U.S.President Donald Trump speaks during the 2024 Iowa Republican caucuses at Horizon Events Center in West Des Moines, Iowa.</p>
        <span class="credit" aria-label="Image credit">
            
            Nathan Howard/Bloomberg via Getty Images
            
        </span>
    </div>
</div>
   </div>
   <p>On the presidential campaign trail, former President Donald Trump is, once again, promising to repeal and replace the Affordable Care Act — a nebulous goal that became one of his administration's splashiest policy failures.</p>   <p>"We're going to fight for much better health care than Obamacare. Obamacare is a catastrophe," Trump <a href="https://youtu.be/DxTdbVGUz14?si=nIVDAlVjOqKeuQLW&t=6202">said at a campaign stop</a> in Iowa on Jan. 6.</p>   <p>The perplexing revival of one of Trump's <a href="https://kffhealthnews.org/news/back-to-the-future-trumps-history-of-promising-a-health-plan-that-never-comes/">most politically damaging</a> crusades comes at a time when the Obama-era health law is even <a href="https://www.kff.org/interactive/kff-health-tracking-poll-the-publics-views-on-the-aca/#?response=Favorable--Unfavorable&aRange=twoYear&total">more popular</a> and <a href="https://www.cms.gov/newsroom/press-releases/under-biden-harris-administration-over-20-million-selected-affordable-health-coverage-aca">widely</a> <a href="https://www.aha.org/news/headline/2023-12-01-north-carolina-becomes-40th-state-expand-medicaid-under-aca">used</a> than it was in 2017, when Trump and congressional Republicans proved unable to pass their own plan to replace it. That failed effort was a big part of why Republicans lost control of the House of Representatives in the 2018 midterms.</p>   <aside id="ad-backstage-wrap" aria-label="advertisement">
    

    <div id="ad-backstage-News_Health" class="ad-config ad-backstage has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"n6735.NPR","mobile":"n6735.NPRMOBILE"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"backstage","deferred":false,"isBetweenContent":true,"borderClass":"","overflowCount":null,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":true}'></div>

</aside>
   <p>Despite repeated promises, Trump never presented his own Obamacare replacement. And much of what Trump's administration actually accomplished in health care has <a href="https://kffhealthnews.org/news/article/trump-health-orders-undone/">been reversed</a> by the Biden administration.</p>   <p>Still, Trump secured some significant policy changes that remain in place today, including efforts to bring <a href="https://www.cms.gov/newsroom/press-releases/trump-administration-announces-historic-price-transparency-requirements-increase-competition-and">more transparency to prices</a> charged by hospitals and paid by health insurers.</p>   <p>Trying to predict Trump's priorities in a second term is even more difficult given that he frequently changes his positions on issues, sometimes multiple times.</p>   <p>The Trump campaign did not respond to a request for comment.</p>   <div id="res1224947788" class="bucketwrap internallink insettwocolumn inset2col ">
            <div class="bucket img">
                  <a id="featuredStackSquareImage1224874558" href="https://www.npr.org/2024/01/16/1224874558/takeaways-iowa-republican-caucus-2024"  data-metrics='{"category":"Story to Story","action":"Click Internal Link","label":"https:\/\/www.npr.org\/2024\/01\/16\/1224874558\/takeaways-iowa-republican-caucus-2024"}'   data-metrics-ga4='{"category":"recirculation","action":"story_recirculation_click","clickType":"inset box","clickUrl":"https:\/\/www.npr.org\/2024\/01\/16\/1224874558\/takeaways-iowa-republican-caucus-2024"}' ><picture><source srcset="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100-c15.webp" data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100.webp"  data-format="webp" class="img lazyOnLoad" type="image/webp" /><source srcset="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100-c15.jpg" data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100.jpg"  data-format="jpg" class="img lazyOnLoad" type="image/jpeg" /><img src="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100-c15.jpg" data-original="https://media.npr.org/assets/img/2024/01/16/gettyimages-1936507604_sq-30f876a4c888671d88e77091f421adce628ef7e3-s100.jpg"  data-format="jpg" class="img lazyOnLoad" alt="5 takeaways from the Iowa Republican caucuses" loading="lazy" /></picture></a>         <div class="bucketblock">
                        <h3 class="slug"><a href="https://www.npr.org/sections/politics/">Politics </a></h3>
            <h3><a href="https://www.npr.org/2024/01/16/1224874558/takeaways-iowa-republican-caucus-2024"  data-metrics='{"category":"Story to Story","action":"Click Internal Link","label":"https:\/\/www.npr.org\/2024\/01\/16\/1224874558\/takeaways-iowa-republican-caucus-2024"}'   data-metrics-ga4='{"category":"recirculation","action":"story_recirculation_click","clickType":"inset box","clickUrl":"https:\/\/www.npr.org\/2024\/01\/16\/1224874558\/takeaways-iowa-republican-caucus-2024"}' >5 takeaways from the Iowa Republican caucuses</a></h3>
         </div>
         
<!-- END CLASS="BUCKETBLOCK" -->
      </div>
      
<!-- END CLASS="BUCKET IMG" -->
   </div>
   
<!-- END ID="RES1224947788" CLASS="BUCKETWRAP INTERNALLINK INSETTWOCOLUMN INSET2COL " -->
   <p>Perhaps Trump's biggest achievement is something he rarely talks about on the campaign trail. His administration's "<a href="https://fas.org/publication/how-to-operation-warp-speed/">Operation Warp Speed</a>" managed to create, test, and bring to market a COVID-19 vaccine in less than a year, far faster than even the most optimistic predictions.</p>   <p>Many of Trump's supporters, though, don't support — and some even vehemently oppose — COVID vaccines.</p>   <p>Here is a recap of Trump's health care record:</p>   <h3 class="edTag">Public health</h3>   <p>Trump's pandemic response dominates his overall record on health care.</p>   <p>More than 400,000 Americans died from COVID over Trump's last year in office. His travel bans and other efforts to prevent the global spread of the virus were ineffective, his administration was slower than other countries' governments to develop a diagnostic test, and he publicly clashed with his own government's health officials over the response.</p>   <aside id="ad-secondary-wrap" aria-label="advertisement">
    

    <div id="ad-secondary-News_Health" class="ad-config ad-secondary has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"NPRSecondary","mobile":"NPRMobileSecondary"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"secondary","deferred":false,"isBetweenContent":true,"borderClass":"","overflowCount":null,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":false}'></div>

</aside>
   <p>Ahead of the 2020 election, Trump resumed large rallies and other public campaign events that many public health experts regarded as reckless in the face of a highly contagious, deadly virus. He <a href="https://www.cnn.com/2020/10/05/politics/donald-trump-covid-condition-walter-reed/index.html">personally flouted public health guidance</a> after contracting COVID himself and ending up hospitalized.</p>   <p>At the same time, despite what many saw as <a href="https://www.washingtonpost.com/health/2022/10/17/trump-cdc-pressure-covid-pandemic-house-report/">a politicization</a> <a href="https://www.nature.com/articles/d41586-020-03035-4">of public health</a> by the White House, Trump signed a massive COVID<a href="https://www.npr.org/2020/12/27/950133658/trump-signs-covid-19-relief-package-after-threatening-to-derail-it"> relief bill</a> (after first threatening to veto it). He also presided over some of the <a href="https://sgp.fas.org/crs/misc/R43341.pdf">largest boosts</a> for the National Institutes of Health's budget since the turn of the century. </p>   <p>And the mRNA-based vaccines Operation Warp Speed helped develop were an astounding scientific breakthrough credited with <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9537923/">helping save millions of lives</a> while laying the groundwork for future shots to fight other diseases <a href="https://www.nih.gov/news-events/nih-research-matters/mrna-vaccine-treat-pancreatic-cancer">including cancer</a>.</p>   <h3 class="edTag">Abortion</h3>   <p>Trump's biggest contribution to abortion policy was indirect: He appointed three Supreme Court justices, who were instrumental in overturning the constitutional right to an abortion.</p>   <p>During his 2024 campaign, Trump has been <a href="https://www.washingtonpost.com/politics/2024/01/05/trump-abortion/">all over the place</a> on the red-hot issue. Since the Supreme Court overturned <em>Roe v. Wade</em> in 2022, Trump has bemoaned the issue as politically bad for Republicans; criticized one of his rivals, Florida Gov. Ron DeSantis, for signing a six-week abortion ban; and <a href="https://www.nbcnews.com/politics/donald-trump/trump-bring-country-together-abortion-meet-the-press-rcna105311">vowed to broker a compromise</a> with "both sides" on abortion, promising that "for the first time in 52 years, you'll have an issue that we can put behind us."</p>   <p>He has so far avoided spelling out how he'd do that, or whether he'd support a national abortion ban after any number of weeks.</p>   <p>More recently, however, Trump appears to have <a href="https://www.washingtonpost.com/politics/2024/01/05/trump-abortion/">mended fences</a> over his criticism of Florida's six-week ban and more with key abortion opponents, whose support helped him get elected in 2016 — and whom he repaid with a long list of policy changes during his presidency.</p>   <aside id="ad-third-wrap" aria-label="advertisement">
    

    <div id="ad-third-News_Health" class="ad-config ad-third has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"NPRThird","mobile":"NPRMobileThird"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"third","deferred":false,"isBetweenContent":true,"borderClass":"","overflowCount":null,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":false}'></div>

</aside>
   <p>Among the anti-abortion actions taken by the Trump administration were a reinstatement of the "<a href="https://trumpwhitehouse.archives.gov/presidential-actions/presidential-memorandum-regarding-mexico-city-policy/">Mexico City Policy</a>" that bars giving federal funds to international organizations that support abortion rights; a regulation to <a href="https://www.federalregister.gov/documents/2019/03/04/2019-03461/compliance-with-statutory-program-integrity-requirements">bar Planned Parenthood</a> and other organizations that provide abortions from the federal family planning program, Title X; regulatory changes designed to make it easier for <a href="https://www.hhs.gov/guidance/document/hhs-announces-final-conscience-rule-protecting-health-care-entities-and-individuals">health care providers</a> and employers to decline to participate in activities that violate their religious and moral beliefs; and other changes that made it harder for NIH scientists to conduct <a href="https://grants.nih.gov/grants/guide/notice-files/NOT-OD-19-128.html">research using fetal tissue</a> from elective abortions.</p>   <p>All of those policies have since been overturned by the Biden administration.</p>   <h3 class="edTag">Health insurance</h3>   <p>Unlike Trump's policies on reproductive health, many of his administration's moves related to health insurance still stand.</p>   <p>For example, in 2020, Trump signed into law <a href="https://www.npr.org/sections/health-shots/2021/10/14/1045828215/ban-on-surprise-medical-bills">the No Surprises Act,</a> a bipartisan measure aimed at protecting patients from unexpected medical bills stemming from payment disputes between health care providers and insurers. The bill was included in the $900 billion COVID relief package he opposed before signing, though Trump had expressed support for ending surprise medical bills.</p>   <p>His administration also pushed — over the vehement objections of health industry officials — <a href="https://www.federalregister.gov/documents/2020/11/12/2020-24591/transparency-in-coverage">price transparency regulations</a> that require hospitals to post prices and insurers to provide estimated costs for procedures. <a href="https://www.cnn.com/2021/01/04/politics/hospital-price-transparency-trump-rule/index.html">Those requirements</a> also remain in place, although hospitals in particular have been slow to comply.</p>   <h3 class="edTag">Medicaid</h3>   <p>While first-time candidate Trump <a href="https://www.youtube.com/watch?app=desktop&v=uFl0K0DxZFU">vowed not to cut</a> popular entitlement programs like Medicare, Medicaid, and Social Security, his administration did not stick to that promise. The Affordable Care Act repeal legislation Trump supported in 2017 would have <a href="https://www.cbo.gov/publication/52859">imposed major cuts to Medicaid</a>, and his Department of Health and Human Services later encouraged states to require Medicaid recipients <a href="https://thehill.com/policy/healthcare/408724-trump-administration-defends-medicaid-work-requirements-after-coverage/">to prove they work</a> in order to receive health insurance.</p>   <h3 class="edTag">Drug prices</h3>   <p>One of the issues the Trump administration was most active on was reducing the price of prescription drugs for consumers — a top priority for both Democratic and Republican voters. But many of those proposals <a href="https://www.kff.org/medicare/issue-brief/a-status-report-on-prescription-drug-policies-and-proposals-at-the-start-of-the-biden-administration/">were blocked</a> by the courts.</p>   <aside id="ad-overflow-3-wrap" aria-label="advertisement">
    

    <div id="ad-overflow-3-News_Health" class="ad-config ad-overflow-3 has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"NPROverflow","mobile":"NPRMobileOverflow"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"overflow","deferred":false,"isBetweenContent":true,"borderClass":"","overflowCount":3,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":false}'></div>

</aside>
   <p>One Trump-era plan that never took effect would have pegged the price of some expensive drugs covered by Medicare to prices in other countries. Another would have required drug companies to <a href="https://www.marketplace.org/2019/07/09/a-last-minute-ruling-means-tv-ads-wont-list-drug-prices-as-planned/">include prices</a> in their television advertisements.</p>   <p>A regulation allowing states to import cheaper drugs from Canada <a href="https://www.federalregister.gov/documents/2020/10/01/2020-21522/importation-of-prescription-drugs">did take effect</a>, in November 2020. However, it took until January 2024 for the FDA, under Trump's successor, to approve the <a href="https://www.fda.gov/news-events/press-announcements/fda-authorizes-floridas-drug-importation-program">first importation plan</a>, from Florida. Canada has said it won't allow exports that risk causing drug shortages in that country, leaving unclear whether the policy is workable.</p>   <p>Trump also signed into law measures <a href="https://www.nbcnews.com/health/health-news/trump-set-sign-bills-lifting-pharmacist-gag-orders-drug-prices-n918361">allowing pharmacists</a> to disclose to patients when the cash price of a drug is lower than the cost using their insurance. Previously pharmacists could be barred from doing so under their contracts with insurers and pharmacy benefit managers.</p>   <h3 class="edTag">Veterans' health</h3>   <p>Trump is credited by some advocates for overhauling Department of Veterans Affairs health care. However, while he did sign a major bill allowing veterans to obtain care outside VA facilities, White House officials also <a href="https://www.washingtonpost.com/business/economy/trump-to-sign-veterans-heath-bill-as-white-house-works-against-plan-to-fund-it/2018/06/06/1763ac70-68d9-11e8-bf8c-f9ed2e672adf_story.html">tried to scuttle passage</a> of the spending needed to pay for the initiative.</p>   <h3 class="edTag">Medical freedom</h3>   <p>Trump scored a big win for the libertarian wing of the Republican Party when he signed into law the <a href="https://www.npr.org/sections/health-shots/2018/05/22/613106777/house-passes-right-to-try-bill-for-experimental-drugs">Right to Try Act,</a> intended to make it easier for patients with terminal diseases to access drugs or treatments not yet approved by the FDA.</p>   <p>But <a href="https://www.healio.com/news/hematology-oncology/20200303/right-to-try-a-wellintentioned-but-misguided-law">it is not clear</a> how many patients have managed to obtain treatment using the law because it is aimed at the FDA, which has traditionally granted requests for "compassionate use" of not-yet-approved drugs anyway. The stumbling block, which the law does not address, is getting drug companies to release doses of medicines that are still being tested and may be in short supply.</p>   <p>Trump said in a Jan. 10 Fox News town hall that the law had "saved thousands and thousands" of lives. There's no evidence for the claim.</p>   <aside id="ad-overflow-4-wrap" aria-label="advertisement">
    

    <div id="ad-overflow-4-News_Health" class="ad-config ad-overflow-4 has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"NPROverflow","mobile":"NPRMobileOverflow"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"overflow","deferred":false,"isBetweenContent":true,"borderClass":"","overflowCount":4,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":false}'></div>

</aside>
   <p><a href="https://kffhealthnews.org/about-us"><em>KFF Health News</em></a><em> is a national newsroom that produces in-depth journalism about health issues and is one of the core operating programs at KFF—an independent source of health policy research, polling, and journalism. Learn more about </em><a href="https://www.kff.org/about-us"><em>KFF</em></a><em>.</em></p>
</div>
<div class="tags">
      <ul>
            <li><a class="tag tag--story" data-metrics='{"category":"story actions","action":"click tag"}' href="https://www.npr.org/tags/1224944772/abortion-policy">Abortion policy</a></li>
      <li><a class="tag tag--story" data-metrics='{"category":"story actions","action":"click tag"}' href="https://www.npr.org/tags/511343536/president-trump">President Trump</a></li>
      <li><a class="tag tag--story" data-metrics='{"category":"story actions","action":"click tag"}' href="https://www.npr.org/tags/482783306/trump-campaign">trump campaign</a></li>
      <li><a class="tag tag--story" data-metrics='{"category":"story actions","action":"click tag"}' href="https://www.npr.org/tags/212226977/obamacare">Obamacare</a></li>
      <li><a class="tag tag--story" data-metrics='{"category":"story actions","action":"click tag"}' href="https://www.npr.org/tags/132027047/health-care">Health Care</a></li>
   </ul>
</div>

<!-- END CLASS="TAGS" -->
<div class="share-tools share-tools--secondary" aria-label="Share tools">
      <ul>
            <li class="share-tools__service share-tools__service--facebook"><button class="fbStory1224938442" data-share-facebook='{"storyId": 1224938442 }'  data-metrics='{"action":"Click Facebook","category":"Share Tools","label":"https:\/\/www.npr.org\/sections\/health-shots\/2024\/01\/16\/1224938442\/what-would-a-second-trump-presidency-look-like-for-health-care"}'   data-metrics-ga4='{"category":"share","action":"share","clickName":"facebook"}' ><b class="share-tools__service-name">Facebook</b></button></li>
      <li class="share-tools__service share-tools__service--flipboard"><button class="story1224938442" data-share-flipboard='{"storyId": 1224938442 }'  data-metrics='{"action":"Click Flipboard","category":"Share Tools","label":"https:\/\/www.npr.org\/sections\/health-shots\/2024\/01\/16\/1224938442\/what-would-a-second-trump-presidency-look-like-for-health-care"}'   data-metrics-ga4='{"category":"share","action":"share","clickName":"flipboard"}' ><b class="share-tools__service-name">Flipboard</b></button></li>
      <li class="share-tools__service share-tools__service--email"><button class='share-tools__email-link' data-story-id='1224938442'  data-metrics='{"action":"Click Email a Friend","category":"Share Tools","label":"https:\/\/www.npr.org\/sections\/health-shots\/2024\/01\/16\/1224938442\/what-would-a-second-trump-presidency-look-like-for-health-care"}'   data-metrics-ga4='{"category":"share","action":"share","clickName":"email"}' ><b class="share-tools__service-name">Email</b></button></li>
   </ul>
</div>

<!-- END CLASS="SHARE-TOOLS SHARE-TOOLS--SECONDARY" ARIA-LABEL="SHARE TOOLS" -->
<div id="newsletter-acquisition-callout-data" data-newsletter="{&quot;newsletterId&quot;:&quot;health&quot;,&quot;title&quot;:&quot;Health&quot;,&quot;marketingHeader&quot;:&quot;Sign Up For The Health Newsletter&quot;,&quot;frequency&quot;:&quot;every week&quot;,&quot;shortDescription&quot;:&quot;Get the latest stories on the science of healthy living.&quot;,&quot;stickyDescription&quot;:&quot;Sign up for the NPR Health newsletter for the latest stories on the science of healthy living.&quot;,&quot;contentImage&quot;:&quot;https:\/\/media.npr.org\/assets\/img\/2020\/02\/04\/shots.png&quot;,&quot;staticMarkupDir&quot;:&quot;\/buckets\/blogs\/health\/subnav.html&quot;,&quot;brandingDir&quot;:&quot;\/branding\/sections\/health\/&quot;,&quot;brandingLink&quot;:&quot;https:\/\/www.npr.org\/sections\/health\/&quot;,&quot;recaptchaSiteKey&quot;:&quot;6LfD6CYUAAAAAIBeUekwZ9KCjF4UyLFtu7NWNaEK&quot;}">
   </div>

<!-- END ID="NEWSLETTER-ACQUISITION-CALLOUT-DATA" DATA-NEWSLETTER="{&QUOT;NEWSLETTERID&QUOT;:&QUOT;HEALTH&QUOT;,&QUOT;TITLE&QUOT;:&QUOT;HEALTH&QUOT;,&QUOT;MARKETINGHEADER&QUOT;:&QUOT;SIGN UP FOR THE HEALTH NEWSLETTER&QUOT;,&QUOT;FREQUENCY&QUOT;:&QUOT;EVERY WEEK&QUOT;,&QUOT;SHORTDESCRIPTION&QUOT;:&QUOT;GET THE LATEST STORIES ON THE SCIENCE OF HEALTHY LIVING.&QUOT;,&QUOT;STICKYDESCRIPTION&QUOT;:&QUOT;SIGN UP FOR THE NPR HEALTH NEWSLETTER FOR THE LATEST STORIES ON THE SCIENCE OF HEALTHY LIVING.&QUOT;,&QUOT;CONTENTIMAGE&QUOT;:&QUOT;HTTPS:\/\/MEDIA.NPR.ORG\/ASSETS\/IMG\/2020\/02\/04\/SHOTS.PNG&QUOT;,&QUOT;STATICMARKUPDIR&QUOT;:&QUOT;\/BUCKETS\/BLOGS\/HEALTH\/SUBNAV.HTML&QUOT;,&QUOT;BRANDINGDIR&QUOT;:&QUOT;\/BRANDING\/SECTIONS\/HEALTH\/&QUOT;,&QUOT;BRANDINGLINK&QUOT;:&QUOT;HTTPS:\/\/WWW.NPR.ORG\/SECTIONS\/HEALTH\/&QUOT;,&QUOT;RECAPTCHASITEKEY&QUOT;:&QUOT;6LFD6CYUAAAAAIBEUEKWZ9KCJF4UYLFTU7NWNAEK&QUOT;}" -->
<div id="callout-end-of-story-mount">
   </div>

<!-- END ID="CALLOUT-END-OF-STORY-MOUNT" -->
<div id="callout-end-of-story-mount-piano-wrap" class="callout-end-of-story-mount-piano-wrap">
      <div id="callout-end-of-story-mount-piano" class="callout-end-of-story-mount-piano">
         </div>
   
<!-- END ID="CALLOUT-END-OF-STORY-MOUNT-PIANO" CLASS="CALLOUT-END-OF-STORY-MOUNT-PIANO" -->
</div>

<!-- END ID="CALLOUT-END-OF-STORY-MOUNT-PIANO-WRAP" CLASS="CALLOUT-END-OF-STORY-MOUNT-PIANO-WRAP" -->
<aside id="end-of-story-recommendations-mount" class="recommended-stories" aria-label="recommended stories"></aside>
<!-- END ID="END-OF-STORY-RECOMMENDATIONS-MOUNT" CLASS="RECOMMENDED-STORIES" ARIA-LABEL="RECOMMENDED STORIES" -->
</article><header class="contentheader contentheader--two" data-metrics='{"category":"Shots - Health News"}' ><div class="branding branding--custom">
      <a href="https://www.npr.org/sections/health-shots/" data-metrics='{"action":"click branding"}' ><picture><source srcset="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.webp"  type="image/webp"  data-format="webp" /><source srcset="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.png"  type="image/png" /><img src="https://media.npr.org/branding/sections/health-shots/branding_icon-9d5c5798fbff8351e5c796ffe65e5e8246c166fb-s1000-c100.png" class="branding__image-icon" alt="Shots - Health News" /></picture><div class="branding__inner">
      <h2 class="branding__title branding__title--custom-text"><b>Shots</b></h2>
   <b class="branding__mini-teaser">Health News From NPR</b>
</div>

<!-- END CLASS="BRANDING__INNER" -->
</a>
</div>

<!-- END CLASS="BRANDING BRANDING--CUSTOM" -->
</header><footer id="npr-footer" class="npr-footer" role="contentinfo" aria-label="NPR footer"><div class="npr-footer__content" data-metrics-category="Global Footer" data-metrics-label="Footer">
    <div class="npr-footer__module-group">
        <div class="npr-footer__module">
            <h6 class="npr-footer__header">Read &amp; Listen</h6>

            <ul>
                <li class="npr-footer__item"><a href="/" data-metrics-action="Click Homepage">Home</a></li>
                <li class="npr-footer__item"><a href="/sections/news/" data-metrics-action="Click News">News</a></li>
                <li class="npr-footer__item"><a href="/sections/culture/" data-metrics-action="Click Culture">Culture</a></li>
                <li class="npr-footer__item"><a href="/music/" data-metrics-action="Click Music">Music</a></li>
                <li class="npr-footer__item"><a href="/podcasts-and-shows" data-metrics-action="click podcasts & shows">Podcasts &amp; Shows</a></li>
            </ul>
        </div>

        <div class="npr-footer__module">
            <h6 class="npr-footer__header">Connect</h6>

            <ul>
                <li class="npr-footer__item"><a href="/newsletters/" data-metrics-action="Click Newsletters" target='_blank'>Newsletters</a></li>
                <li class="npr-footer__item"><a href="https://www.facebook.com/NPR/" data-metrics-action="Click Facebook">Facebook</a></li>
                <li class="npr-footer__item"><a href="https://www.instagram.com/npr/" data-metrics-action="Click Instagram">Instagram</a></li>
                <li class="npr-footer__item"><a href="/press/" data-metrics-action="Click Press">Press</a></li>
                <li class="npr-footer__item"><a href="/sections/publiceditor/" data-metrics-action="Click Public Editor">Public Editor</a></li>
                <li class="npr-footer__item"><a href="/corrections/" data-metrics-action="Click Corrections">Corrections</a></li>
                <li class="npr-footer__item"><a href="https://help.npr.org/contact/s/" data-metrics-action="Click Contact & Help">Contact & Help</a></li>
            </ul>
        </div>

        <div class="npr-footer__module">
            <h6 class="npr-footer__header">About NPR</h6>

            <ul>
                <li class="npr-footer__item"><a href="/about/" data-metrics-action="Click Overview">Overview</a></li>
                <li class="npr-footer__item"><a href="/diversity/" data-metrics-action="Click Diversity">Diversity</a></li>
                <li class="npr-footer__item"><a href="/network/" data-metrics-action="Click Network" target="_blank">NPR Network</a></li>
                <li class="npr-footer__item"><a href="/about-npr/1136563345/accessibility" data-metrics-action="Click Accessibility">Accessibility</a></li>
                <li class="npr-footer__item"><a href="/ethics/" data-metrics-action="Click Ethics">Ethics</a></li>
                <li class="npr-footer__item"><a href="/about-npr/178660742/public-radio-finances" data-metrics-action="Click Finances">Finances</a></li>
            </ul>
        </div>

        <div class="npr-footer__module">
            <h6 class="npr-footer__header">Get Involved</h6>

            <ul>
                <li class="npr-footer__item"><a href="/support/" data-metrics-action="Click Support Public Radio">Support Public Radio</a></li>
                <li class="npr-footer__item"><a href="/about-npr/186948703/corporate-sponsorship" data-metrics-action="Click Sponsor NPR">Sponsor NPR</a></li>
                <li class="npr-footer__item"><a href="/careers/" data-metrics-action="Click NPR Careers">NPR Careers</a></li>
                <li class="npr-footer__item"><a href="https://shopnpr.org/" data-metrics-action="Click NPR Shop">NPR Shop</a></li>
                <li class="npr-footer__item"><a href="https://www.nprpresents.org" data-metrics-action="Click NPR Events">NPR Events</a></li>
                <li class="npr-footer__item"><a href="/sections/npr-extra/" data-metrics-action="Click NPR Extra">NPR Extra</a></li>
            </ul>
        </div>
    </div>

    <div class="npr-footer__module npr-footer__module--secondary">
        <ul>
            <li class="npr-footer__item"><a href="/about-npr/179876898/terms-of-use" data-metrics-action="Click Terms of Use">Terms of Use</a></li>
            <li class="npr-footer__item"><a href="/about-npr/179878450/privacy-policy" data-metrics-action="Click Privacy">Privacy</a></li>
            <li class="npr-footer__item"><a href="/about-npr/179878450/privacy-policy#yourchoices" data-metrics-action="Click Your Privacy Choices">Your Privacy Choices</a></li>
            <li class="npr-footer__item"><a href="https://text.npr.org/" data-metrics-action="Click Text Only">Text Only</a></li>
            <li class="npr-footer__item"><span class="copy-year"></span></li>
        </ul>
    </div>
</div>
</footer><div id="global-stickybar-mount" class="global-stickybar-mount">
   </div>
<div id="global-stickybar-mount-piano-wrap" class="global-stickybar">
      <div id="global-stickybar-mount-piano" class="global-stickybar-mount-piano">
         </div>
</div>
</section>   <div id="main-sidebar">
            <aside id="ad-standard-wrap" aria-label="advertisement">
    

    <div id="ad-standard-News_Health" class="ad-config ad-standard has-refresh-enabled" data-ad-config='{"network":"\/6735\/","site":{"desktop":"n6735.NPR","mobile":"n6735.NPRMOBILE"},"zone":"News_Health","targets":{"testserver":"false","isPodcastEpisode":"false","storyId":"1224938442","agg":["1088064845","434975886","103537970"],"blog":"103537970"},"location":"standard","deferred":false,"isBetweenContent":false,"borderClass":"","overflowCount":null,"hasRefreshEnabled":true,"isOutstreamVideoEnabled":false}'></div>
    <p class="left">Sponsor Message</p><p class="right"><a href="/about-npr/186948703/corporate-sponsorship">Become an NPR sponsor</a></p>

</aside>
   </div>
   
<!-- END ID="MAIN-SIDEBAR" -->
</div>

<!-- END ID="WRAPPER" -->
<section id="global-modal-mount"></section>
<!-- END ID="GLOBAL-MODAL-MOUNT" -->
<script type="text/javascript">
   (function () {
    var loadPageJs = function () { (window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1123:function(e,n,c){e.exports=c(319)},319:function(e,n,c){"use strict";c.p=NPR.serverVars.webpackPublicPath,Promise.all([c.e(1),c.e(2),c.e(3),c.e(93),c.e(72)]).then(function(e){c(3),c(1095),c(54),c(90),c(36),c(182),c(137),c(72),c(74),c(1096),c(99),c(1097),c(312),c(1098),c(89)}.bind(null,c)).catch(c.oe)}},[[1123,0]]]); };
    if (document.readyState === 'complete') {
        loadPageJs();
    } else {
        window.addEventListener('load', function load() {
            window.removeEventListener('load', load, false);
            loadPageJs();
        });
    }
})();
</script>
</main></body></html><!-- CACHED 1705447032 -->