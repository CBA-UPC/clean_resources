!function(){"use strict";var r=window.location,i=window.document,o=i.currentScript,p=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function l(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return l("localhost",t);if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return l(null,t);try{if("true"===window.localStorage.plausible_ignore)return l("localStorage flag",t)}catch(e){}var a={},n=(a.n=e,a.u=r.href,a.d=o.getAttribute("data-domain"),a.r=i.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),new XMLHttpRequest);n.open("POST",p,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function s(){a!==r.pathname&&(a=r.pathname,e("pageview"))}var u,c=window.history;.pushState&&(u=c.pushState,c.pushState=window.addEventListener("popstate",s)),"prerender"===i.visibilityState?i.addEventListener("visibilitychange",:s();var d=1;function v(e){var t,a,n,r;if("auxclick"!==e.type||e.button===d)return t=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],!function e(t,a){if(!t||y<a)return!1;if(L(t))return!0;return e(t.parentNode,a+1)}(t,0)&&(n=a)&&(r=n.split(".").pop(),b.some()?m(e,t,{name:"File Download",props:{url:a}}):void 0}function m(e,t,a){var n,r=!1;function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?(n={props:a.props},plausible(a.name,n)):(n={props:a.props,callback:i},plausible(a.name,n),setTimeout(i,5e3),e.preventDefault())}i.addEventListener("click",v),i.addEventListener("auxclick",v);var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=o.getAttribute("file-types"),g=o.getAttribute("add-file-types"),b=w&&w.split(",")||g&&g.split(",").concat(c)||c;function h(e){var e=L(e)?e:e&&e.parentNode,t={name:null,props:{}},a=e&&e.classList;if(a)for(var n=0;n<a.length;n++){var r,i=a.item(n).match(/plausible-event-(.+)(=|--)(.+)/);i&&(r=i[1],i=i[3].replace(/\+/g," "),"name"==r.toLowerCase()?t.name=i:t.props[r]=i)}return t}var y=3;function k(e){if("auxclick"!==e.type||e.button===d){for(var t,a,n,r,i=e.target,o=0;o<=y&&i;o++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;f(i)&&(t=i),L(i)&&(a=i),i=i.parentNode}a&&(r=h(a),t?(r.props.url=t.href,m(e,t,r)):((e={}).props=r.props,plausible(r.name,e)))}}function L(e){var t=e&&e.classList;if(t)for(var a=0;a<t.length;a++)if(t.item(a).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}i.addEventListener("submit",function(e){var t,a=e.target,n=h(a);.name&&(e.preventDefault(),t=!1,setTimeout(r,5e3),e={props:n.props,callback:r},plausible(n.name,e))}),i.addEventListener("click",k),i.addEventListener("auxclick",k)}();