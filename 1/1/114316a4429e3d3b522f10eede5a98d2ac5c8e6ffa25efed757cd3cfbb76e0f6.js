!function(){function q(a){var c=[],b=[],e=function(f){for(var g={},h=0;h<u.length;h++){var d=u[h];if(d.Tag===f){g=d;break}var l=void 0,k=d.Tag;var C=(k=-1!==k.indexOf("http:")?k.replace("http:",""):k.replace("https:",""),-1!==(l=k.indexOf("?"))?k.replace(k.substring(l),""):k);if(f&&(-1!==f.indexOf(C)||-1!==d.Tag.indexOf(f))){g=d;break}}return g}(a);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(b=e.Vendor.split(":")),!e.Tag&&D&&(b=c=function(f){var g=[],h=function(d){var l=document.createElement("a");
return l.href=d,-1!==(d=l.hostname.split(".")).indexOf("www")||2<d.length?d.slice(1).join("."):l.hostname}(f);v.some(function(d){return d===h})&&(g=["C0004"]);return g}(a)),{categoryIds:c,vsCatIds:b}}function w(a){return!a||!a.length||(a&&window.OptanonActiveGroups?a.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(a,c){void 0===c&&(c=null);var b=window,e=b.OneTrust&&b.OneTrust.IsVendorServiceEnabled;b=e&&b.OneTrust.IsVendorServiceEnabled();return"Categories"===
r||"All"===r&&e&&!b?w(a):("Vendors"===r||"All"===r&&e&&b)&&w(c)}function n(a){a=a.getAttribute("class")||"";return-1!==a.indexOf("optanon-category")||-1!==a.indexOf("ot-vscat")}function p(a){return a.hasAttribute("data-ot-ignore")}function x(a,c,b){void 0===b&&(b=null);var e=a.join("-"),f=b&&b.join("-"),g=c.getAttribute("class")||"",h="",d=!1;a&&a.length&&-1===g.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),d=!0);b&&b.length&&-1===g.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),d=!0);d&&c.setAttribute("class",h+" "+g)}function y(a,c,b){void 0===b&&(b=null);var e;a=a.join("-");b=b&&b.join("-");return-1===c.indexOf("optanon-category-"+a)&&(e=("optanon-category-"+a).trim()),-1===c.indexOf("ot-vscat-"+b)&&(e+=" "+("ot-vscat-"+b).trim()),e+" "+c}function z(a){var c,b=q(a.src||"");(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.type="text/plain"),a.addEventListener("beforescriptexecute",c=function(e){"text/plain"===
a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",c)}))}function A(a){var c=a.src||"",b=q(c);(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}var u=JSON.parse('[{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://snap.licdn.com/li.lms-analytics/insight.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.linkedin.com/embed/feed/update/urn:li:share:7006651622051201024","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/969484996/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/493111734196375","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/embed/feed/update/urn:li:share:6983141545491234816","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/2331427383662669","CategoryId":["C0004"],"Vendor":null}]'),
D=JSON.parse("true"),r=JSON.parse('"Categories"'),v=(v="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" ")).filter(function(a){if("null"!==a&&a.trim().length)return a}),t=
["embed","iframe","img","script"],B=((new MutationObserver(function(a){Array.prototype.forEach.call(a,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1!==e.nodeType||-1===t.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?z:A)(e)});var b=c.target;!c.attributeName||n(b)&&p(b)||("script"===b.nodeName.toLowerCase()?z(b):-1!==t.indexOf(c.target.nodeName.toLowerCase())&&A(b))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,
attributeFilter:["src"]}),document.createElement);document.createElement=function(){for(var a,c,b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];return"script"===b[0].toLowerCase()||-1!==t.indexOf(b[0].toLowerCase())?(a=B.bind(document).apply(void 0,b),c=a.setAttribute.bind(a),Object.defineProperties(a,{src:{get:function(){try{return a.cloneNode().src}catch(f){return a.getAttribute("src")||""}},set:function(f){var g=b[0],h,d,l,k="";k=q(k="string"==typeof f||f instanceof Object?f.toString():k);return d=
g,l=a,!(h=k).categoryIds.length&&!h.vsCatIds.length||"script"!==d.toLowerCase()||n(l)||m(h.categoryIds,h.vsCatIds)||p(l)?(d=g,h=a,!(l=k).categoryIds.length||-1===t.indexOf(d.toLowerCase())||n(h)||m(l.categoryIds,l.vsCatIds)||p(h)?c("src",f):(a.removeAttribute("src"),c("data-src",f),(g=a.getAttribute("class"))||c("class",y(k.categoryIds,g||"",k.vsCatIds)))):(c("type","text/plain"),c("src",f)),!0}},type:{get:function(){return a.getAttribute("type")||""},set:function(f){return h=c,d=q((g=a).src||""),
h("type",!d.categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?f:"text/plain"),!0;var g,h,d}},class:{set:function(f){return h=c,!(d=q((g=a).src)).categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?h("class",f):h("class",y(d.categoryIds,f,d.vsCatIds)),!0;var g,h,d}}}),a.setAttribute=function(f,g,h){"type"!==f&&"src"!==f||h?c(f,g):a[f]=g},a):B.bind(document).apply(void 0,b)}}();tent","data-testid":w,className:a(r,l)}),i().createElement("div",{"data-mesh-id":n+"inlineContent-gridContainer","data-testid":h},v),f)};var g={root:"header"};const x="Reverse",C="up",E="down";var T=e=>{const{id:r,skin:o,children:s,animations:d,meshProps:c,className:l,customClassNames:u=[]}=e,[p,m]=(0,n.useState)(""),[v,h]=(0,n.useState)(!1),w=e=>{m(e),h(!1)};(0,n.useEffect)((()=>{window.TransitionEvent||setTimeout((()=>h(!0)),200)}),[p]);const y=p&&!(e=>e.endsWith(x))(p),T=()=>{const e=(e=>""+e+x)(p);w(e)},O={onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onDoubleClick:e.onDblClick,onFocus:y?T:void 0,onTransitionEnd:()=>h(!0)};let k=E,H=0;f((e=>{var t,n;let{currPos:r,prevPos:o}=e;const i=r.y&&-1*r.y,s=o.y&&-1*o.y,a=d[d.length-1],c=null==(t=a.params)||null==(t=t.animations)?void 0:t[a.params.animations.length-1];if(!c)return;const l="mobile"===(null==(n=a.viewMode)?void 0:n.toLowerCase())?1:(e=>{switch(e){case"HeaderFadeOut":return 200;case"HeaderHideToTop":return 400;default:return null}})(c.name);l&&(((e,t)=>{k===E&&e<t?(H=t,k=C):k===C&&e>t&&e>=0&&t>=0&&(H=t,k=E)})(i,s),y?(k===C&&i+l<H||0===r.y)&&T():k===E&&i-H>=l&&w(c.name))}),[p,d],{disabled:!d||!d.length});const P=a(l,((...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" "))(g.root,...u));return i().createElement(o,{wrapperProps:{id:r,eventHandlers:O,className:P,transition:p,transitionEnded:v,tabIndex:"-1"},"data-block-level-container":"HeaderContainer"},i().createElement(b,t()({id:r},c,{children:s})))};const O=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`));var k;const H={HeaderContainer_AfterScroll:{component:e=>i().createElement(T,t()({},e,{skin:v})),controller:(k=e=>{let{mapperProps:t,controllerUtils:r}=e;const{updateStyles:o}=r,{compId:i,marginTop:s,isMobileView:a,isFixed:d,...c}=t;var l;return l=()=>{var e;const t=((null==(e=window.document.getElementById(i))?void 0:e.clientHeight)||0)>=window.document.body.clientHeight/2;a&&d&&t&&o({position:"relative !important",marginTop:s,top:0})},(0,n.useEffect)(l,[]),c},{useComponentProps:(e,t,n)=>{const r=(e=>({...e,updateStyles:t=>{const n=Object.entries(t).reduce(((e,[t,n])=>{return{...e,[(r=t,r.startsWith("--")?t:O(t))]:void 0===n?null:n};var r}),{});e.updateStyles(n)}}))(n);return k({mapperProps:e,stateValues:t,controllerUtils:r})}})}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[HeaderContainer_AfterScroll].344db69a.bundle.min.js.map