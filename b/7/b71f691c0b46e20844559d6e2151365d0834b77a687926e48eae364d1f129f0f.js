/**
 * Swiper 8.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2022
 */

@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}ndow.webLog),window.webLog=window.webLog||{},window.webLog.dom={},function(e){e.harvest=function(e,o,n){var t=document.querySelectorAll(e);if(!t.length)return null;var r={};return o.forEach(function(e){r[e]=[]}),t.forEach(function(t){o.forEach(function(e){t.hasAttribute(e)?r[e].push(t.getAttribute(e)):n&&r[e].push(null)})}),r},e.scrolledTo=function(e){var t=window.$;if(t){var o=t(window).scrollTop(),n=o+t(window).height();try{var r=t(e).offset().top,i=r+t(e).height()}catch(e){return}return i<=n&&o<=r&&r}}}(window.webLog.dom),window.webLog=window.webLog||{},window.webLog.http={},function(e){e.postJson=function(e,t,o){var n=new XMLHttpRequest;n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.timeout=3e3,n.onreadystatechange=function(){4===n.readyState&&"function"==typeof o&&o(n.status,n.responseText)},n.send(JSON.stringify(t))}}(window.webLog.http),window.webLog=window.webLog||{},function(r){r.inspectlet=function(o,e){var t=Math.round(e/30),n=r.store.getItem("__insp");(n||(n=Math.floor(Math.random()*t+1).toString(),r.store.setItem("__insp",n)))&&"456"===n&&(window.__insp=window.__insp||[],window.__insp.push(["wid",o]),window.__insp.push(["identify",localStorage.getItem('uuid')||r.services.default.getId()]),setTimeout(function(){var e,t;void 0===window.__inspld&&(window.__inspld=1,(e=document.createElement("script")).type="text/javascript",e.async=!0,e.id="inspsync",e.src=("https:"===document.location.protocol?"https":"http")+"://cdn.inspectlet.com/inspectlet.js?wid="+o+"&r="+Math.floor((new Date).getTime()/36e5),(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t))},0))}}(window.webLog),window.webLog=window.webLog||{},window.webLog.store={},function(e){e.method="cookie",e.getItem=function(e){var t=window.Cookies,o="."+window.COOKIE_DOMAIN;try{var n=window.localStorage.getItem(e)||t.get(e)||void 0}catch(e){}return n&&t.set(e,n,{domain:o}),n},e.setItem=function(e,t){var o=window.Cookies,n="."+window.COOKIE_DOMAIN;try{return o.set(e,t,{domain:n})}catch(e){return}},e.session={getItem:function(e){try{return window.sessionStorage.getItem(e)}catch(e){return}},setItem:function(e,t){try{return window.sessionStorage.setItem(e,t),e}catch(e){return}}}}(window.webLog.store),window.webLog=window.webLog||{},function(i){var a="//rec.donglogs.com/heatmap",t=[];function o(e){var t,o,n;null==(e=e||window.event).pageX&&null!=e.clientX&&(o=(t=e.target&&e.target.ownerDocument||document).documentElement,n=t.body,e.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0))}function n(e,t,o,n){var r={event:e,moment:(new Date).toISOString(),url:document.location.href,uuid:localStorage.getItem('uuid')||i.services.default.getId(),width:window.innerWidth,height:window.innerHeight,page_y:Math.floor(window.pageYOffset),click_x:t,click_y:o,move_coords:n,abtest:i._abtest||null};i.http.postJson(a,r)}window.TRACK_HEAT&&(document.onmousemove=function(e){o(e),t.push([e.pageX,e.pageY]),9<t.length&&(n("Move",null,null,JSON.stringify(t)),t=[])},document.onclick=function(e){o(e),n("Click",e.pageX,e.pageY,null)})}(window.webLog),window.webLog=window.webLog||{},window.webLog.services=window.webLog.services||{},function(e){var t,o,n="default",r="__wuid",i="__wssid",a=e.store,s=e.http,w=e.client;function c(e,t){var o,n=typeof e;if(null==e||"string"==n)o=e;else if("object"==n)o=t?e:e instanceof Array?JSON.stringify(e.map(function(e){return c(e,1)})):JSON.stringify(e);else try{o=e.toString()}catch(e){o=void 0}return o}function d(){return o||((o=a.session.getItem(i))||(o=w.newId(6),a.session.setItem(i,o)),o)}function u(e){if(!e)return{};var t=document.createElement("a");return t.href=e,t}function f(){return t||((t=a.getItem(r))||(e=(window.location.hash||"").toLowerCase(),(t=w.validId(e)?e:null)&&void 0!==a.method&&a.setItem(r,t),t&&void 0===a.method&&window.WEBLOG_ALLOW_URL_HASH_WUID),t||(t=w.newId(),void 0!==a.method?a.setItem(r,t):window.WEBLOG_ALLOW_URL_HASH_WUID,t));var e}e.services[n]={enabled:!0,loaded:function(){return"string"==typeof window.WEBLOG_API_DEFAULT&&"object"==typeof e.store&&window.WEBLOG_API_DEFAULT.length},getId:f,getSessionId:d,identify:function(e,t,o){return"to-do"},track:function(e,t,o,n){var r=function(e,t){var o={};o.event=e,o.moment=(new Date).toISOString(),o.platform=window.WEBLOG_PLATFORM,o.log_ver=window.WEBLOG_VERSION,o.uuid=localStorage.getItem('uuid')||f(),o.session_id=d(),o.user_agent=w.userAgent,o.browser=w.browser,o.storage=a.method,o.protocol=window.location.protocol,o.host=window.location.host,o.pathname=window.location.pathname,o.search=window.location.search,o.hash=window.location.hash,o.referrer=document.referrer.substr(0,250),o.ref_host=u(o.referrer).host,function(e){var t=a.session.getItem("_sessionRef"),o=a.session.getItem("_sessionRefHost");t||(t=document.referrer.substr(0,250),o=u(t).host,t||(o=t="Direct"),a.session.setItem("_sessionRef",t),a.session.setItem("_sessionRefHost",o));e.session_referrer=t,e.session_ref_host=o}(o);var n,r=a.getItem("fcm_token");r&&(o.fcm_token=r);if("object"==typeof window.wDataLayer)for(n in window.wDataLayer)o[n]=c(window.wDataLayer[n]);if(t&&"object"==typeof t)for(n in t)o[n]=c(t[n]);else o.label=c(t);return o}(e,t);return o="function"==typeof o?(n=o,window.WEBLOG_API_DEFAULT):o||window.WEBLOG_API_DEFAULT,s.postJson(o,r,n),r},trackJSErr:function(e,t,o,n,r){var i={event:"JSErr"};i.moment=(new Date).toISOString(),i.uuid=localStorage.getItem('uuid')||f(),i.session_id=d(),i.user_agent=w.userAgent,i.browser=w.browser,i.storage=a.method,i.protocol=window.location.protocol,i.host=window.location.host,i.pathname=window.location.pathname,i.search=window.location.search,i.hash=window.location.hash,i.referrer=document.referrer.substr(0,250),i.message=e||null,i.source=t||null,i.lineno=od270c04a21572bbba5.woff) format("woff");font-weight:700;font-style:italic;font-display:swap}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:;--tw-gradient-via-position:;--tw-gradient-to-position:;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:;--tw-gradient-via-position:;--tw-gradient-to-position:;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.dt-pointer-events-none{pointer-events:none}.dt-visible{visibility:visible}.dt-invisible{visibility:hidden}.dt-fixed{position:fixed}.dt-absolute{position:absolute}.dt-relative{position:relative}.dt-sticky{position:sticky}.dt-inset-x-2{left:0.5rem;right:0.5rem}.-dt-bottom-10{bottom:-2.5rem}.-dt-bottom-12{bottom:-3rem}.-dt-bottom-16{bottom:-4rem}.-dt-bottom-2{bottom:-0.5rem}.-dt-bottom-20{bottom:-5rem}.-dt-bottom-3{bottom:-0.75rem}.-dt-bottom-5{bottom:-1.25rem}.-dt-bottom-6{bottom:-1.5rem}.-dt-bottom-8{bottom:-2rem}.-dt-bottom-\[63px\]{bottom:-63px}.-dt-left-6{left:-1.5rem}.-dt-left-7{left:-1.75rem}.-dt-right-1{right:-0.25rem}.-dt-right-10{right:-2.5rem}.-dt-right-16{right:-4rem}.-dt-right-9{right:-2.25rem}.-dt-right-\[1px\]{right:-1px}.-dt-right-\[21px\]{right:-21px}.-dt-right-\[calc\(50\%-8px\)\]{right:calc(calc(50% - 8px) * -1)}.-dt-right-full{right:-100%}.-dt-top-0{top:-0px}.-dt-top-0\.5{top:-0.125rem}.-dt-top-10{top:-2.5rem}.-dt-top-12{top:-3rem}.-dt-top-14{top:-3.5rem}.-dt-top-16{top:-4rem}.-dt-top-2{top:-0.5rem}.-dt-top-4{top:-1rem}.-dt-top-6{top:-1.5rem}.-dt-top-7{top:-1.75rem}.-dt-top-8{top:-2rem}.-dt-top-\[22px\]{top:-22px}.-dt-top-\[30px\]{top:-30px}.-dt-top-\[33px\]{top:-33px}.-dt-top-\[58px\]{top:-58px}.dt-bottom-0{bottom:0}.dt-bottom-1\/2{bottom:50%}.dt-bottom-10{bottom:2.5rem}.dt-bottom-3{bottom:0.75rem}.dt-bottom-4{bottom:1rem}.dt-bottom-5{bottom:1.25rem}.dt-bottom-6{bottom:1.5rem}.dt-bottom-\[72px\]{bottom:72px}.dt-left-0{left:0}.dt-left-1{left:0.25rem}.dt-left-1\/2{left:50%}.dt-left-10{left:2.5rem}.dt-left-12{left:3rem}.dt-left-16{left:4rem}.dt-left-2{left:0.5rem}.dt-left-24{left:6rem}.dt-left-3{left:0.75rem}.dt-left-3\/4{left:75%}.dt-left-6{left:1.5rem}.dt-left-8{left:2rem}.dt-left-\[38\%\]{left:38%}.dt-left-\[calc\(50\%\+80px\)\]{left:calc(50% + 80px)}.dt-left-\[calc\(50\%\+96px\)\]{left:calc(50% + 96px)}.dt-right-0{right:0}.dt-right-12{right:3rem}.dt-right-14{right:3.5rem}.dt-right-16{right:4rem}.dt-right-2{right:0.5rem}.dt-right-24{right:6rem}.dt-right-3{right:0.75rem}.dt-right-4{right:1rem}.dt-right-6{right:1.5rem}.dt-right-7{right:1.75rem}.dt-right-\[calc\(\(100vw-1056px\)\/2-72px\)\]{right:calc((100vw - 1056px) / 2 - 72px)}.dt-right-\[calc\(50\%\+80px\)\]{right:calc(50% + 80px)}.dt-top-0{top:0}.dt-top-1{top:0.25rem}.dt-top-1\/2{top:50%}.dt-top-1\/4{top:25%}.dt-top-10{top:2.5rem}.dt-top-16{top:4rem}.dt-top-2{top:0.5rem}.dt-top-20{top:5rem}.dt-top-3{top:0.75rem}.dt-top-7{top:1.75rem}.dt-top-\[217px\]{top:217px}.dt-top-\[22px\]{top:22px}.dt-top-\[46px\]{top:46px}.dt-top-\[50px\]{top:50px}.dt-top-\[53px\]{top:53px}.dt-top-\[55px\]{top:55px}.dt-top-\[61px\]{top:61px}.dt-top-\[72px\]{top:72px}.dt-top-\[82px\]{top:82px}.dt-top-\[83px\]{top:83px}.dt-top-\[85px\]{top:85px}.dt-top-\[88px\]{top:88px}.dt-top-\[93px\]{top:93px}.dt-top-full{top:100%}.dt-top-px{top:1px}.-dt-z-10{z-index:-10}.-dt-z-50{z-index:-50}.-dt-z-\[1\]{z-index:-1}.-dt-z-\[50\]{z-index:-50}.dt-z-0{z-index:0}.dt-z-10{z-index:10}.dt-z-20{z-index:20}.dt-z-30{z-index:30}.dt-z-40{z-index:40}.dt-z-50{z-index:50}.dt-z-\[101\]{z-index:101}.dt-z-\[10\]{z-index:10}.dt-z-\[1\]{z-index:1}.dt-z-\[2\]{z-index:2}.dt-z-\[3\]{z-index:3}.dt-z-\[51\]{z-index:51}.dt-z-\[5\]{z-index:5}.dt-z-\[6\]{z-index:6}.dt-z-\[7\]{z-index:7}.dt-z-\[8\]{z-index:8}.dt-z-\[90\]{z-index:90}.dt-z-\[99\]{z-index:99}.dt-order-1{order:1}.dt-order-2{order:2}.dt-order-3{order:3}.dt-order-\[0\]{order:0}.dt-col-span-1{grid-column:span 1 / span 1}.dt-col-span-2{grid-column:span 2 / span 2}.dt-col-start-2{grid-column-start:2}.dt-row-span-1{grid-row:span 1 / span 1}.dt-row-start-2{grid-row-start:2}.dt-m-0{margin:0}.-dt-mx-6{margin-left:-1.5rem;margin-right:-1.5rem}.dt--mx-4{margin-left:-1rem;margin-right:-1rem}.dt-mx-10{margin-left:2.5rem;margin-right:2.5rem}.dt-mx-4{margin-left:1rem;margin-right:1rem}.dt-mx-6{margin-left:1.5rem;margin-right:1.5rem}.dt-mx-8{margin-left:2rem;margin-right:2rem}.dt-mx-auto{margin-left:auto;margin-right:auto}.dt-my-10{margin-top:2.5rem;margin-bottom:2.5rem}.dt-my-2{margin-top:0.5rem;margin-bottom:0.5rem}.dt-my-3{margin-top:0.75rem;margin-bottom:0.75rem}.dt-my-4{margin-top:1rem;margin-bottom:1rem}.dt-my-8{margin-top:2rem;margin-bottom:2rem}.-dt-mb-2{margin-bottom:-0.5rem}.-dt-mt-1{margin-top:-0.25rem}.-dt-mt-10{margin-top:-2.5rem}.-dt-mt-12{margin-top:-3rem}.-dt-mt-3{margin-top:-0.75rem}.-dt-mt-4{margin-top:-1rem}.-dt-mt-6{margin-top:-1.5rem}.-dt-mt-px{margin-top:-1px}.dt-mb-1{margin-bottom:0.25rem}.dt-mb-10{margin-bottom:2.5rem}.dt-mb-12{margin-bottom:3rem}.dt-mb-2{margin-bottom:0.5rem}.dt-mb-3{margin-bottom:0.75rem}.dt-mb-3\.5{margin-bottom:0.875rem}.dt-mb-4{margin-bottom:1rem}.dt-mb-5{margin-bottom:1.25rem}.dt-mb-6{margin-bottom:1.5rem}.dt-mb-7{margin-bottom:1.75rem}.dt-mb-8{margin-bottom:2rem}.dt-mb-\[30px\]{margin-bottom:30px}.dt-mb-\[46px\]{margin-bottom:46px}.dt-ml-0{margin-left:0}.dt-ml-1{margin-left:0.25rem}.dt-ml-10{margin-left:2.5rem}.dt-ml-12{margin-left:3rem}.dt-ml-4{margin-left:1rem}.dt-ml-6{margin-left:1.5rem}.dt-ml-\[60px\]{margin-left:60px}.dt-ml-auto{margin-left:auto}.dt-mr-auto{margin-right:auto}.dt-mt-0{margin-top:0}.dt-mt-0\.5{margin-top:0.125rem}.dt-mt-1{margin-top:0.25rem}.dt-mt-1\.5{margin-top:0.375rem}.dt-mt-10{margin-top:2.5rem}.dt-mt-11{margin-top:44px}.dt-mt-11\.5{margin-top:46px}.dt-mt-12{margin-top:3rem}.dt-mt-14{margin-top:3.5rem}.dt-mt-16{margin-top:4rem}.dt-mt-2{margin-top:0.5rem}.dt-mt-28{margin-top:7rem}.dt-mt-3{margin-top:0.75rem}.dt-mt-4{margin-top:1rem}.dt-mt-5{margin-top:1.25rem}.dt-mt-6{margin-top:1.5rem}.dt-mt-7{margin-top:1.75rem}.dt-mt-8{margin-top:2rem}.dt-mt-9{margin-top:2.25rem}.dt-mt-\[-23px\]{margin-top:-23px}.dt-mt-\[-4px\]{margin-top:-4px}.dt-mt-\[13px\]{margin-top:13px}.dt-mt-\[16px\]{margin-top:16px}.dt-mt-\[17px\]{margin-top:17px}.dt-mt-\[24px\]{margin-top:24px}.dt-mt-\[34px\]{margin-top:34px}.dt-mt-\[43px\]{margin-top:43px}.dt-line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.dt-line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.dt-block{display:block}.dt-inline-block{display:inline-block}.dt-inline{display:inline}.dt-flex{display:flex}.dt-inline-flex{display:inline-flex}.dt-table-cell{display:table-cell}.dt-grid{display:grid}.dt-hidden{display:none}.dt-aspect-3\/2{aspect-ratio:3 / 2}.dt-aspect-square{aspect-ratio:1 / 1}.dt-aspect-video{aspect-ratio:16 / 9}.dt-h-0{height:0}.dt-h-10{height:2.5rem}.dt-h-11{height:2.75rem}.dt-h-12{height:3rem}.dt-h-14{height:3.5rem}.dt-h-16{height:4rem}.dt-h-20{height:5rem}.dt-h-24{height:6rem}.dt-h-3{height:0.75rem}.dt-h-3\.5{height:14px}.dt-h-4{height:1rem}.dt-h-40{height:10rem}.dt-h-48{height:12rem}.dt-h-5{height:1.25rem}.dt-h-6{height:1.5rem}.dt-h-64{height:16rem}.dt-h-7{height:1.75rem}.dt-h-8{height:2rem}.dt-h-9{height:2.25rem}.dt-h-\[100vh\]{height:100vh}.dt-h-\[15px\]{height:15px}.dt-h-\[167px\]{height:167px}.dt-h-\[235px\]{height:235px}.dt-h-\[26px\]{height:26px}.dt-h-\[31px\]{height:31px}.dt-h-\[34px\]{height:34px}.dt-h-\[389px\]{height:389px}.dt-h-\[395px\]{height:395px}.dt-h-\[39px\]{height:39px}.dt-h-\[400px\]{height:400px}.dt-h-\[43px\]{height:43px}.dt-h-\[46px\]{height:46px}.dt-h-\[47px\]{height:47px}.dt-h-\[51px\]{height:51px}.dt-h-\[52px\]{height:52px}.dt-h-\[53px\]{height:53px}.dt-h-\[57px\]{height:57px}.dt-h-\[59px\]{height:59px}.dt-h-\[600px\]{height:600px}.dt-h-\[60px\]{height:60px}.dt-h-\[62px\]{height:62px}.dt-h-\[635px\]{height:635px}.dt-h-\[63px\]{height:63px}.dt-h-\[66px\]{height:66px}.dt-h-\[68px\]{height:68px}.dt-h-\[74px\]{height:74px}.dt-h-\[80vh\]{height:80vh}.dt-h-\[90px\]{height:90px}.dt-h-\[calc\(100\%\+72px\)\]{height:calc(100% + 72px)}.dt-h-\[calc\(100\%\+96px\)\]{height:calc(100% + 96px)}.dt-h-\[calc\(50\%\+58px\)\]{height:calc(50% + 58px)}.dt-h-\[calc\(50\%-112px\)\]{height:calc(50% - 112px)}.dt-h-auto{height:auto}.dt-h-fit{height:-moz-fit-content;height:fit-content}.dt-h-full{height:100%}.dt-h-px{height:1px}.dt-h-screen{height:100vh}.dt-max-h-\[368px\]{max-height:368px}.dt-max-h-\[46px\]{max-height:46px}.dt-max-h-\[600px\]{max-height:600px}.dt-max-h-\[620px\]{max-height:620px}.dt-max-h-\[635px\]{max-height:635px}.dt-max-h-\[calc\(100vh-50px\)\]{max-height:calc(100vh - 50px)}.dt-max-h-\[calc\(100vh_-_24px\)\]{max-height:calc(100vh - 24px)}.dt-min-h-\[150px\]{min-height:150px}.dt-min-h-\[164px\]{min-height:164px}.dt-min-h-\[167px\]{min-height:167px}.dt-min-h-\[180px\]{min-height:180px}.dt-min-h-\[250px\]{min-height:250px}.dt-min-h-\[260px\]{min-height:260px}.dt-min-h-\[262px\]{min-height:262px}.dt-min-h-\[267px\]{min-height:267px}.dt-min-h-\[28px\]{min-height:28px}.dt-min-h-\[290px\]{min-height:290px}.dt-min-h-\[300px\]{min-height:300px}.dt-min-h-\[330px\]{min-height:330px}.dt-min-h-\[348px\]{min-height:348px}.dt-min-h-\[368px\]{min-height:368px}.dt-min-h-\[44px\]{min-height:44px}.dt-min-h-\[540px\]{min-height:540px}.dt-min-h-\[550px\]{min-height:550px}.dt-min-h-\[56px\]{min-height:56px}.dt-min-h-\[600px\]{min-height:600px}.dt-min-h-\[60px\]{min-height:60px}.dt-min-h-\[635px\]{min-height:635px}.dt-min-h-\[calc\(100vh_-_24px\)\]{min-height:calc(100vh - 24px)}.dt-w-0{width:0}.dt-w-1\/2{width:50%}.dt-w-1\/4{width:25%}.dt-w-10{width:2.5rem}.dt-w-12{width:3rem}.dt-w-14{width:3.5rem}.dt-w-16{width:4rem}.dt-w-20{width:5rem}.dt-w-24{width:6rem}.dt-w-255px{width:255px}.dt-w-28{width:7rem}.dt-w-29{width:116px}.dt-w-3{width:0.75rem}.dt-w-32{width:8rem}.dt-w-36{width:9rem}.dt-w-4{width:1rem}.dt-w-4\/5{width:80%}.dt-w-40{width:10rem}.dt-w-44{width:11rem}.dt-w-48{width:12rem}.dt-w-5{width:1.25rem}.dt-w-56{width:14rem}.dt-w-6{width:1.5rem}.dt-w-600px{width:600px}.dt-w-64{width:16rem}.dt-w-7{width:1.75rem}.dt-w-72{width:18rem}.dt-w-8{width:2rem}.dt-w-80{width:20rem}.dt-w-96{width:24rem}.dt-w-\[100px\]{width:100px}.dt-w-\[100vw\]{width:100vw}.dt-w-\[111px\]{width:111px}.dt-w-\[114px\]{width:114px}.dt-w-\[120px\]{width:120px}.dt-w-\[121px\]{width:121px}.dt-w-\[127px\]{width:127px}.dt-w-\[138px\]{width:138px}.dt-w-\[14\%\]{width:14%}.dt-w-\[141px\]{width:141px}.dt-w-\[144px\]{width:144px}.dt-w-\[149px\]{width:149px}.dt-w-\[151px\]{width:151px}.dt-w-\[152px\]{width:152px}.dt-w-\[171px\]{width:171px}.dt-w-\[173px\]{width:173px}.dt-w-\[184px\]{width:184px}.dt-w-\[192px\]{width:192px}.dt-w-\[200px\]{width:200px}.dt-w-\[232px\]{width:232px}.dt-w-\[236px\]{width:236px}.dt-w-\[250px\]{width:250px}.dt-w-\[252px\]{width:252px}.dt-w-\[264px\]{width:264px}.dt-w-\[26px\]{width:26px}.dt-w-\[288px\]{width:288px}.dt-w-\[29px\]{width:29px}.dt-w-\[300px\]{width:300px}.dt-w-\[317px\]{width:317px}.dt-w-\[320px\]{width:320px}.dt-w-\[322px\]{width:322px}.dt-w-\[32px\]{width:32px}.dt-w-\[34px\]{width:34px}.dt-w-\[356px\]{width:356px}.dt-w-\[400px\]{width:400px}.dt-w-\[417px\]{width:417px}.dt-w-\[435px\]{width:435px}.dt-w-\[438px\]{width:438px}.dt-w-\[455px\]{width:455px}.dt-w-\[456px\]{width:456px}.dt-w-\[48px\]{width:48px}.dt-w-\[58px\]{width:58px}.dt-w-\[592px\]{width:592px}.dt-w-\[61px\]{width:61px}.dt-w-\[64px\]{width:64px}.dt-w-\[66px\]{width:66px}.dt-w-\[680px\]{width:680px}.dt-w-\[71px\]{width:71px}.dt-w-\[750px\]{width:750px}.dt-w-\[76px\]{width:76px}.dt-w-\[80\%\]{width:80%}.dt-w-\[88px\]{width:88px}.dt-w-\[90px\]{width:90px}.dt-w-\[937px\]{width:937px}.dt-w-\[96px\]{width:96px}.dt-w-\[calc\(100\%-64px\)\]{width:calc(100% - 64px)}.dt-w-\[calc\(27\.333333\%-8px\)\]{width:calc(27.333333% - 8px)}.dt-w-\[calc\(30\.333333\%-8px\)\]{width:calc(30.333333% - 8px)}.dt-w-\[calc\(33\.333333\%-8px\)\]{width:calc(33.333333% - 8px)}.dt-w-\[calc\(50\%\+17px\)\]{width:calc(50% + 17px)}.dt-w-\[calc\(50\%\+36px\)\]{width:calc(50% + 36px)}.dt-w-\[calc\(50\%\+48px\)\]{width:calc(50% + 48px)}.dt-w-\[calc\(50\%-16px\)\]{width:calc(50% - 16px)}.dt-w-\[calc\(50\%-56px\)\]{width:calc(50% - 56px)}.dt-w-auto{width:auto}.dt-w-fit{width:-moz-fit-content;width:fit-content}.dt-w-full{width:100%}.dt-w-screen{width:100vw}.dt-min-w-\[1158px\]{min-width:1158px}.dt-min-w-\[1260px\]{min-width:1260px}.dt-min-w-\[129px\]{min-width:129px}.dt-min-w-\[160px\]{min-width:160px}.dt-min-w-\[202px\]{min-width:202px}.dt-min-w-\[226px\]{min-width:226px}.dt-min-w-\[24px\]{min-width:24px}.dt-min-w-\[250px\]{min-width:250px}.dt-min-w-\[300px\]{min-width:300px}.dt-min-w-\[592px\]{min-width:592px}.dt-min-w-\[75\%\]{min-width:75%}.dt-min-w-\[970px\]{min-width:970px}.dt-min-w-full{min-width:100%}.dt-max-w-2xl{max-width:42rem}.dt-max-w-3xl{max-width:48rem}.dt-max-w-4xl{max-width:56rem}.dt-max-w-\[1056px\]{max-width:1056px}.dt-max-w-\[150px\]{max-width:150px}.dt-max-w-\[236px\]{max-width:236px}.dt-max-w-\[264px\]{max-width:264px}.dt-max-w-\[278px\]{max-width:278px}.dt-max-w-\[288px\]{max-width:288px}.dt-max-w-\[307px\]{max-width:307px}.dt-max-w-\[345px\]{max-width:345px}.dt-max-w-\[360px\]{max-width:360px}.dt-max-w-\[369px\]{max-width:369px}.dt-max-w-\[460px\]{max-width:460px}.dt-max-w-\[680px\]{max-width:680px}.dt-max-w-\[696px\]{max-width:696px}.dt-max-w-\[750px\]{max-width:750px}.dt-max-w-\[770px\]{max-width:770px}.dt-max-w-full{max-width:100%}.dt-max-w-lg{max-width:32rem}.dt-max-w-md{max-width:28rem}.dt-max-w-none{max-width:none}.dt-max-w-sm{max-width:24rem}.dt-max-w-xl{max-width:36rem}.dt-max-w-xs{max-width:20rem}.dt-flex-1{flex:1 1 0}.dt-shrink-0{flex-shrink:0}.dt-flex-grow{flex-grow:1}.dt-table-auto{table-layout:auto}.dt-border-collapse{border-collapse:collapse}.-dt-translate-x-1\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-dt-translate-x-full{--tw-translate-x:-100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-dt-translate-y-1\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-dt-translate-y-\[60\%\]{--tw-translate-y:-60%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes dt-pulse{50%{opacity:.5}}.dt-animate-pulse{animation:dt-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}.dt-cursor-pointer{cursor:pointer}.dt-list-disc{list-style-type:disc}.dt-list-none{list-style-type:none}.dt-appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.dt-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.dt-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.dt-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.dt-grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.dt-grid-cols-\[1fr_112px\]{grid-template-columns:1fr 112px}.dt-grid-cols-\[1fr_288px\]{grid-template-columns:1fr 288px}.dt-grid-cols-\[1fr_407px\]{grid-template-columns:1fr 407px}.dt-grid-cols-\[1fr_936px\]{grid-template-columns:1fr 936px}.dt-grid-cols-\[288px_1fr\]{grid-template-columns:288px 1fr}.dt-grid-cols-\[312px_240px_1fr\]{grid-template-columns:312px 240px 1fr}.dt-grid-cols-\[600px_1fr\]{grid-template-columns:600px 1fr}.dt-grid-cols-\[912px_1fr\]{grid-template-columns:912px 1fr}.dt-grid-cols-\[minmax\(0\,_1fr\)_28px_minmax\(0\,_1fr\)\]{grid-template-columns:minmax(0,1fr) 28px minmax(0,1fr)}.dt-grid-cols-\[minmax\(0\,_1fr\)_328px\]{grid-template-columns:minmax(0,1fr) 328px}.dt-grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.dt-grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.dt-grid-rows-\[12px_1fr\]{grid-template-rows:12px 1fr}.dt-flex-row{flex-direction:row}.dt-flex-col{flex-direction:column}.dt-flex-wrap{flex-wrap:wrap}.dt-flex-nowrap{flex-wrap:nowrap}.dt-items-start{align-items:flex-start}.dt-items-end{align-items:flex-end}.dt-items-center{align-items:center}.dt-justify-start{justify-content:flex-start}.dt-justify-end{justify-content:flex-end}.dt-justify-center{justify-content:center}.dt-justify-between{justify-content:space-between}.dt-justify-items-center{justify-items:center}.dt-gap-0{gap:0}.dt-gap-0\.5{gap:0.125rem}.dt-gap-1{gap:0.25rem}.dt-gap-1\.5{gap:0.375rem}.dt-gap-10{gap:2.5rem}.dt-gap-11{gap:2.75rem}.dt-gap-12{gap:3rem}.dt-gap-14{gap:3.5rem}.dt-gap-16{gap:4rem}.dt-gap-2{gap:0.5rem}.dt-gap-2\.5{gap:0.625rem}.dt-gap-20{gap:5rem}.dt-gap-3{gap:0.75rem}.dt-gap-4{gap:1rem}.dt-gap-5{gap:1.25rem}.dt-gap-6{gap:1.5rem}.dt-gap-7{gap:1.75rem}.dt-gap-8{gap:2rem}.dt-gap-9{gap:2.25rem}.dt-gap-\[10px\]{gap:10px}.dt-gap-\[13px\]{gap:13px}.dt-gap-\[22px\]{gap:22px}.dt-gap-\[23px\]{gap:23px}.dt-gap-\[32px\]{gap:32px}.dt-gap-\[3px\]{gap:3px}.dt-gap-\[60px\]{gap:60px}.dt-gap-\[72px\]{gap:72px}.dt-gap-\[78px\]{gap:78px}.dt-gap-\[7px\]{gap:7px}.dt-gap-x-16{-moz-column-gap:4rem;column-gap:4rem}.dt-gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.dt-gap-x-20{-moz-column-gap:5rem;column-gap:5rem}.dt-gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.dt-gap-x-8{-moz-column-gap:2rem;column-gap:2rem}.dt-gap-y-11{row-gap:2.75rem}.dt-gap-y-12{row-gap:3rem}.dt-gap-y-2{row-gap:0.5rem}.dt-gap-y-4{row-gap:1rem}.dt-self-start{align-self:flex-start}.dt-self-end{align-self:flex-end}.dt-justify-self-end{justify-self:end}.dt-overflow-hidden{overflow:hidden}.dt-overflow-x-auto{overflow-x:auto}.dt-overflow-y-auto{overflow-y:auto}.dt-overflow-x-hidden{overflow-x:hidden}.dt-overflow-y-scroll{overflow-y:scroll}.dt-text-ellipsis{text-overflow:ellipsis}.dt-whitespace-nowrap{white-space:nowrap}.dt-break-all{word-break:break-all}.dt-rounded{border-radius:0.25rem}.dt-rounded-2xl{border-radius:1rem}.dt-rounded-3xl{border-radius:1.5rem}.dt-rounded-\[4px\]{border-radius:4px}.dt-rounded-\[8px\]{border-radius:8px}.dt-rounded-full{border-radius:9999px}.dt-rounded-lg{border-radius:0.5rem}.dt-rounded-none{border-radius:0}.dt-rounded-xl{border-radius:0.75rem}.dt-rounded-b-2xl{border-bottom-right-radius:1rem;border-bottom-left-radius:1rem}.dt-rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.dt-rounded-t-\[16px\]{border-top-left-radius:16px;border-top-right-radius:16px}.dt-rounded-bl-\[20px\]{border-bottom-left-radius:20px}.dt-rounded-br-\[20px\]{border-bottom-right-radius:20px}.dt-rounded-tl-\[20px\]{border-top-left-radius:20px}.dt-rounded-tr-\[20px\]{border-top-right-radius:20px}.dt-border{border-width:1px}.dt-border-2{border-width:2px}.dt-border-4{border-width:4px}.dt-border-\[1px\]{border-width:1px}.dt-border-b{border-bottom-width:1px}.dt-border-b-0{border-bottom-width:0}.dt-border-b-2{border-bottom-width:2px}.dt-border-b-8{border-bottom-width:8px}.dt-border-l{border-left-width:1px}.dt-border-l-0{border-left-width:0}.dt-border-l-2{border-left-width:2px}.dt-border-l-\[16px\]{border-left-width:16px}.dt-border-l-\[2px\]{border-left-width:2px}.dt-border-r{border-right-width:1px}.dt-border-r-0{border-right-width:0}.dt-border-r-2{border-right-width:2px}.dt-border-t{border-top-width:1px}.dt-border-t-2{border-top-width:2px}.dt-border-t-8{border-top-width:8px}.dt-border-solid{border-style:solid}.dt-border-dashed{border-style:dashed}.dt-border-none{border-style:none}.dt-border-AthensGray{--tw-border-opacity:1;border-color:rgb(227 229 232 / var(--tw-border-opacity))}.dt-border-GalleryGray{--tw-border-opacity:1;border-color:rgb(238 238 238 / var(--tw-border-opacity))}.dt-border-PersianRed{--tw-border-opacity:1;border-color:rgb(205 48 56 / var(--tw-border-opacity))}.dt-border-\[\#000\]{--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.dt-border-\[\#292D32\]{--tw-border-opacity:1;border-color:rgb(41 45 50 / var(--tw-border-opacity))}.dt-border-\[\#2D8988\]{--tw-border-opacity:1;border-color:rgb(45 137 136 / var(--tw-border-opacity))}.dt-border-\[\#3ecf8e\]{--tw-border-opacity:1;border-color:rgb(62 207 142 / var(--tw-border-opacity))}.dt-border-\[\#43CDDF\]{--tw-border-opacity:1;border-color:rgb(67 205 223 / var(--tw-border-opacity))}.dt-border-\[\#888\]{--tw-border-opacity:1;border-color:rgb(136 136 136 / var(--tw-border-opacity))}.dt-border-\[\#CD3038\]{--tw-border-opacity:1;border-color:rgb(205 48 56 / var(--tw-border-opacity))}.dt-border-\[\#D9D9D9\]{--tw-border-opacity:1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.dt-border-\[\#DDDDDD\]{--tw-border-opacity:1;border-color:rgb(221 221 221 / var(--tw-border-opacity))}.dt-border-\[\#DDD\]{--tw-border-opacity:1;border-color:rgb(221 221 221 / var(--tw-border-opacity))}.dt-border-\[\#E7F0EB\]{--tw-border-opacity:1;border-color:rgb(231 240 235 / var(--tw-border-opacity))}.dt-border-\[\#F3C276\]{--tw-border-opacity:1;border-color:rgb(243 194 118 / var(--tw-border-opacity))}.dt-border-\[\#F7F7F7\]{--tw-border-opacity:1;border-color:rgb(247 247 247 / var(--tw-border-opacity))}.dt-border-\[\#FBCD62\]{--tw-border-opacity:1;border-color:rgb(251 205 98 / var(--tw-border-opacity))}.dt-border-\[\#a3a0a033\]{border-color:#a3a0a033}.dt-border-\[\#d9d9d9\]{--tw-border-opacity:1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.dt-border-black{--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.dt-border-black-mine{--tw-border-opacity:1;border-color:rgb(34 34 34 / var(--tw-border-opacity))}.dt-border-ccd3038{border-color:rgba(205,48,56,1)}.dt-border-ceee{border-color:rgba(238,238,238,1)}.dt-border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.dt-border-b-transparent{border-bottom-color:transparent}.dt-border-l-\[\#FBCD62\]{--tw-border-opacity:1;border-left-color:rgb(251 205 98 / var(--tw-border-opacity))}.dt-border-t-transparent{border-top-color:transparent}.dt-bg-AthensGray{--tw-bg-opacity:1;background-color:rgb(227 229 232 / var(--tw-bg-opacity))}.dt-bg-GalleryGray{--tw-bg-opacity:1;background-color:rgb(238 238 238 / var(--tw-bg-opacity))}.dt-bg-Gin{--tw-bg-opacity:1;background-color:rgb(231 240 235 / var(--tw-bg-opacity))}.dt-bg-\[\#000\]{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dt-bg-\[\#002E51\]{--tw-bg-opacity:1;background-color:rgb(0 46 81 / var(--tw-bg-opacity))}.dt-bg-\[\#00335A\]{--tw-bg-opacity:1;background-color:rgb(0 51 90 / var(--tw-bg-opacity))}.dt-bg-\[\#292d32\]{--tw-bg-opacity:1;background-color:rgb(41 45 50 / var(--tw-bg-opacity))}.dt-bg-\[\#AD002B\]{--tw-bg-opacity:1;background-color:rgb(173 0 43 / var(--tw-bg-opacity))}.dt-bg-\[\#CD3038\]{--tw-bg-opacity:1;background-color:rgb(205 48 56 / var(--tw-bg-opacity))}.dt-bg-\[\#D9D9D9\]{--tw-bg-opacity:1;background-color:rgb(217 217 217 / var(--tw-bg-opacity))}.dt-bg-\[\#E6E6E6\]{--tw-bg-opacity:1;background-color:rgb(230 230 230 / var(--tw-bg-opacity))}.dt-bg-\[\#E7F0EB\]{--tw-bg-opacity:1;background-color:rgb(231 240 235 / var(--tw-bg-opacity))}.dt-bg-\[\#EAF9F1\]{--tw-bg-opacity:1;background-color:rgb(234 249 241 / var(--tw-bg-opacity))}.dt-bg-\[\#F3F3F3\]{--tw-bg-opacity:1;background-color:rgb(243 243 243 / var(--tw-bg-opacity))}.dt-bg-\[\#F7F7F7\]{--tw-bg-opacity:1;background-color:rgb(247 247 247 / var(--tw-bg-opacity))}.dt-bg-\[\#FBCD62\]{--tw-bg-opacity:1;background-color:rgb(251 205 98 / var(--tw-bg-opacity))}.dt-bg-\[\#FFEFD7\]{--tw-bg-opacity:1;background-color:rgb(255 239 215 / var(--tw-bg-opacity))}.dt-bg-\[\#FFF8EE\]{--tw-bg-opacity:1;background-color:rgb(255 248 238 / var(--tw-bg-opacity))}.dt-bg-\[\#FFFDF1\]{--tw-bg-opacity:1;background-color:rgb(255 253 241 / var(--tw-bg-opacity))}.dt-bg-\[\#FFF\]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.dt-bg-\[\#e2e2e2\]{--tw-bg-opacity:1;background-color:rgb(226 226 226 / var(--tw-bg-opacity))}.dt-bg-\[\#e6ecf0\]{--tw-bg-opacity:1;background-color:rgb(230 236 240 / var(--tw-bg-opacity))}.dt-bg-\[\#eaf9f1\]{--tw-bg-opacity:1;background-color:rgb(234 249 241 / var(--tw-bg-opacity))}.dt-bg-\[\#f1f5f9\]{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.dt-bg-\[\#fff\]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.dt-bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dt-bg-c1a7900{background-color:rgba(26,121,0,1)}.dt-bg-ce2e8f0{background-color:rgba(226,232,240,1)}.dt-bg-ceee{background-color:rgba(238,238,238,1)}.dt-bg-down-river{--tw-bg-opacity:1;background-color:rgb(9 10 86 / var(--tw-bg-opacity))}.dt-bg-green-haze{--tw-bg-opacity:1;background-color:rgb(0 166 81 / var(--tw-bg-opacity))}.dt-bg-green-off{--tw-bg-opacity:1;background-color:rgb(234 249 241 / var(--tw-bg-opacity))}.dt-bg-red-400{--tw-bg-opacity:1;background-color:rgb(248 113 113 / var(--tw-bg-opacity))}.dt-bg-tara{--tw-bg-opacity:1;background-color:rgb(211 241 225 / var(--tw-bg-opacity))}.dt-bg-transparent{background-color:transparent}.dt-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.dt-bg-opacity-50{--tw-bg-opacity:0.5}.dt-bg-video-sport{background-image:linear-gradient(180deg,rgba(0,0,0,0.00) 0,rgba(0,0,0,0.66) 43.93%,#000 90.79%)}.dt-object-contain{-o-object-fit:contain;object-fit:contain}.dt-object-cover{-o-object-fit:cover;object-fit:cover}.dt-object-center{-o-object-position:center;object-position:center}.dt-p-0{padding:0}.dt-p-1{padding:0.25rem}.dt-p-1\.5{padding:0.375rem}.dt-p-12{padding:3rem}.dt-p-2{padding:0.5rem}.dt-p-2\.5{padding:0.625rem}.dt-p-3{padding:0.75rem}.dt-p-4{padding:1rem}.dt-p-6{padding:1.5rem}.dt-p-\[10px\]{padding:10px}.dt-p-\[22px\]{padding:22px}.dt-p-\[7px\]{padding:7px}.dt-px-0{padding-left:0;padding-right:0}.dt-px-1{padding-left:0.25rem;padding-right:0.25rem}.dt-px-10{padding-left:2.5rem;padding-right:2.5rem}.dt-px-12{padding-left:3rem;padding-right:3rem}.dt-px-14{padding-left:3.5rem;padding-right:3.5rem}.dt-px-16{padding-left:4rem;padding-right:4rem}.dt-px-2{padding-left:0.5rem;padding-right:0.5rem}.dt-px-2\.5{padding-left:0.625rem;padding-right:0.625rem}.dt-px-3{padding-left:0.75rem;padding-right:0.75rem}.dt-px-3\.5{padding-left:0.875rem;padding-right:0.875rem}.dt-px-4{padding-left:1rem;padding-right:1rem}.dt-px-5{padding-left:1.25rem;padding-right:1.25rem}.dt-px-6{padding-left:1.5rem;padding-right:1.5rem}.dt-px-8{padding-left:2rem;padding-right:2rem}.dt-px-\[15px\]{padding-left:15px;padding-right:15px}.dt-px-\[16px\]{padding-left:16px;padding-right:16px}.dt-px-\[22px\]{padding-left:22px;padding-right:22px}.dt-px-\[23px\]{padding-left:23px;padding-right:23px}.dt-py-0{padding-top:0;padding-bottom:0}.dt-py-0\.5{padding-top:0.125rem;padding-bottom:0.125rem}.dt-py-1{padding-top:0.25rem;padding-bottom:0.25rem}.dt-py-1\.5{padding-top:0.375rem;padding-bottom:0.375rem}.dt-py-10{padding-top:2.5rem;padding-bottom:2.5rem}.dt-py-2{padding-top:0.5rem;padding-bottom:0.5rem}.dt-py-2\.5{padding-top:0.625rem;padding-bottom:0.625rem}.dt-py-3{padding-top:0.75rem;padding-bottom:0.75rem}.dt-py-4{padding-top:1rem;padding-bottom:1rem}.dt-py-40{padding-top:10rem;padding-bottom:10rem}.dt-py-5{padding-top:1.25rem;padding-bottom:1.25rem}.dt-py-6{padding-top:1.5rem;padding-bottom:1.5rem}.dt-py-7{padding-top:1.75rem;padding-bottom:1.75rem}.dt-py-8{padding-top:2rem;padding-bottom:2rem}.dt-py-\[13px\]{padding-top:13px;padding-bottom:13px}.dt-py-\[29px\]{padding-top:29px;padding-bottom:29px}.dt-py-\[70px\]{padding-top:70px;padding-bottom:70px}.\!dt-pl-0{padding-left:0 !important}.dt-pb-0{padding-bottom:0}.dt-pb-12{padding-bottom:3rem}.dt-pb-16{padding-bottom:4rem}.dt-pb-2{padding-bottom:0.5rem}.dt-pb-3{padding-bottom:0.75rem}.dt-pb-4{padding-bottom:1rem}.dt-pb-5{padding-bottom:1.25rem}.dt-pb-6{padding-bottom:1.5rem}.dt-pb-7{padding-bottom:1.75rem}.dt-pb-8{padding-bottom:2rem}.dt-pb-\[345px\]{padding-bottom:345px}.dt-pb-\[380px\]{padding-bottom:380px}.dt-pb-\[60px\]{padding-bottom:60px}.dt-pl-1{padding-left:0.25rem}.dt-pl-10{padding-left:2.5rem}.dt-pl-2{padding-left:0.5rem}.dt-pl-2\.5{padding-left:0.625rem}.dt-pl-20{padding-left:5rem}.dt-pl-3{padding-left:0.75rem}.dt-pl-4{padding-left:1rem}.dt-pl-5{padding-left:1.25rem}.dt-pl-6{padding-left:1.5rem}.dt-pl-8{padding-left:2rem}.dt-pl-\[26px\]{padding-left:26px}.dt-pl-\[52px\]{padding-left:52px}.dt-pr-10{padding-right:2.5rem}.dt-pr-11{padding-right:2.75rem}.dt-pr-12{padding-right:3rem}.dt-pr-2{padding-right:0.5rem}.dt-pr-20{padding-right:5rem}.dt-pr-4{padding-right:1rem}.dt-pr-6{padding-right:1.5rem}.dt-pt-0{padding-top:0}.dt-pt-10{padding-top:2.5rem}.dt-pt-12{padding-top:3rem}.dt-pt-2{padding-top:0.5rem}.dt-pt-3{padding-top:0.75rem}.dt-pt-4{padding-top:1rem}.dt-pt-5{padding-top:1.25rem}.dt-pt-6{padding-top:1.5rem}.dt-pt-7{padding-top:1.75rem}.dt-pt-8{padding-top:2rem}.dt-pt-9{padding-top:2.25rem}.dt-pt-\[16px\]{padding-top:16px}.dt-pt-\[30px\]{padding-top:30px}.dt-text-left{text-align:left}.dt-text-center{text-align:center}.dt-text-right{text-align:right}.dt-align-middle{vertical-align:middle}.dt-font-DFVN-Caligna{font-family:DFVN Caligna,sans-serif}.dt-font-FTV-Hirosaki{font-family:FTV-Hirosaki,sans-serif}.dt-font-Fraunces{font-family:Fraunces,serif}.dt-font-IBM{font-family:IBM Plex Serif,serif}.dt-font-Inter{font-family:Inter,sans-serif}.dt-font-Montserrat{font-family:Montserrat,serif}.dt-font-Noto{font-family:Noto Serif,serif}.dt-font-Poppins{font-family:SVN Poppins,serif}.dt-font-Roboto{font-family:Roboto,sans-serif}.dt-font-SF-UI-Display{font-family:SF UI Display,serif}.dt-font-SVN-Georgia{font-family:SVN Georgia,serif}.dt-font-UTMOngDoGia{font-family:UTMOngDoGia,sans-serif}.dt-font-iCielBCCubano{font-family:iCielBCCubano,sans-serif}.dt-font-inter{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif}.dt-text-19px{font-size:19px}.dt-text-22px{font-size:22px}.dt-text-28px{font-size:1.75rem;line-height:2.25rem}.dt-text-2xl{font-size:1.5rem;line-height:2rem}.dt-text-32px{font-size:32px}.dt-text-36px{font-size:36px}.dt-text-3xl{font-size:1.875rem;line-height:2.25rem}.dt-text-40px{font-size:40px}.dt-text-4xl{font-size:2.25rem;line-height:2.5rem}.dt-text-5xl{font-size:3rem;line-height:1}.dt-text-6xl{font-size:3.75rem;line-height:1}.dt-text-\[10px\]{font-size:10px}.dt-text-\[113px\]{font-size:113px}.dt-text-\[11px\]{font-size:11px}.dt-text-\[12px\]{font-size:12px}.dt-text-\[130px\]{font-size:130px}.dt-text-\[13px\]{font-size:13px}.dt-text-\[14px\]{font-size:14px}.dt-text-\[15px\]{font-size:15px}.dt-text-\[16px\]{font-size:16px}.dt-text-\[18px\]{font-size:18px}.dt-text-\[20px\]{font-size:20px}.dt-text-\[22px\]{font-size:22px}.dt-text-\[23px\]{font-size:23px}.dt-text-\[24px\]{font-size:24px}.dt-text-\[25px\]{font-size:25px}.dt-text-\[28px\]{font-size:28px}.dt-text-\[30px\]{font-size:30px}.dt-text-\[32px\]{font-size:32px}.dt-text-\[40px\]{font-size:40px}.dt-text-\[45px\]{font-size:45px}.dt-text-\[50px\]{font-size:50px}.dt-text-\[54px\]{font-size:54px}.dt-text-\[64px\]{font-size:64px}.dt-text-\[70px\]{font-size:70px}.dt-text-\[74px\]{font-size:74px}.dt-text-base{font-size:1rem;line-height:1.5rem}.dt-text-lg{font-size:1.125rem;line-height:1.75rem}.dt-text-sm{font-size:0.875rem;line-height:1.25rem}.dt-text-xl{font-size:1.25rem;line-height:1.75rem}.dt-text-xs{font-size:0.75rem;line-height:1rem}.dt-font-\[11px\]{font-weight:11px}.dt-font-bold{font-weight:700}.dt-font-extrabold{font-weight:800}.dt-font-medium{font-weight:500}.dt-font-normal{font-weight:400}.dt-font-semibold{font-weight:600}.dt-uppercase{text-transform:uppercase}.dt-lowercase{text-transform:lowercase}.dt-normal-case{text-transform:none}.dt-italic{font-style:italic}.dt-not-italic{font-style:normal}.dt-leading-10{line-height:2.5rem}.dt-leading-19px{line-height:19px}.dt-leading-29px{line-height:29px}.dt-leading-4{line-height:1rem}.dt-leading-5{line-height:1.25rem}.dt-leading-6{line-height:1.5rem}.dt-leading-7{line-height:1.75rem}.dt-leading-8{line-height:2rem}.dt-leading-\[0px\]{line-height:0}.dt-leading-\[108px\]{line-height:108px}.dt-leading-\[124px\]{line-height:124px}.dt-leading-\[14px\]{line-height:14px}.dt-leading-\[15px\]{line-height:15px}.dt-leading-\[16px\]{line-height:16px}.dt-leading-\[17px\]{line-height:17px}.dt-leading-\[18px\]{line-height:18px}.dt-leading-\[19px\]{line-height:19px}.dt-leading-\[20px\]{line-height:20px}.dt-leading-\[21px\]{line-height:21px}.dt-leading-\[22px\]{line-height:22px}.dt-leading-\[24px\]{line-height:24px}.dt-leading-\[25px\]{line-height:25px}.dt-leading-\[26px\]{line-height:26px}.dt-leading-\[29px\]{line-height:29px}.dt-leading-\[30px\]{line-height:30px}.dt-leading-\[33px\]{line-height:33px}.dt-leading-\[34px\]{line-height:34px}.dt-leading-\[36px\]{line-height:36px}.dt-leading-\[38px\]{line-height:38px}.dt-leading-\[40px\]{line-height:40px}.dt-leading-\[47px\]{line-height:47px}.dt-leading-\[50px\]{line-height:50px}.dt-leading-\[56px\]{line-height:56px}.dt-leading-\[60px\]{line-height:60px}.dt-leading-\[70px\]{line-height:70px}.dt-leading-normal{line-height:1.5}.dt-leading-snug{line-height:1.375}.dt-leading-tight{line-height:1.25}.dt-text-Gray200{--tw-text-opacity:1;color:rgb(160 164 168 / var(--tw-text-opacity))}.dt-text-Gray666{--tw-text-opacity:1;color:rgb(102 102 102 / var(--tw-text-opacity))}.dt-text-Gray8080{--tw-text-opacity:1;color:rgb(128 128 128 / var(--tw-text-opacity))}.dt-text-PersianRed{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.dt-text-Shark{--tw-text-opacity:1;color:rgb(37 40 43 / var(--tw-text-opacity))}.dt-text-\[\#000\]{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.dt-text-\[\#003F73\]{--tw-text-opacity:1;color:rgb(0 63 115 / var(--tw-text-opacity))}.dt-text-\[\#00a651\]{--tw-text-opacity:1;color:rgb(0 166 81 / var(--tw-text-opacity))}.dt-text-\[\#0F6C32\]{--tw-text-opacity:1;color:rgb(15 108 50 / var(--tw-text-opacity))}.dt-text-\[\#14407E\]{--tw-text-opacity:1;color:rgb(20 64 126 / var(--tw-text-opacity))}.dt-text-\[\#158E42\]{--tw-text-opacity:1;color:rgb(21 142 66 / var(--tw-text-opacity))}.dt-text-\[\#16289E\]{--tw-text-opacity:1;color:rgb(22 40 158 / var(--tw-text-opacity))}.dt-text-\[\#1A7900\]{--tw-text-opacity:1;color:rgb(26 121 0 / var(--tw-text-opacity))}.dt-text-\[\#222\]{--tw-text-opacity:1;color:rgb(34 34 34 / var(--tw-text-opacity))}.dt-text-\[\#292D32\]{--tw-text-opacity:1;color:rgb(41 45 50 / var(--tw-text-opacity))}.dt-text-\[\#292c31\]{--tw-text-opacity:1;color:rgb(41 44 49 / var(--tw-text-opacity))}.dt-text-\[\#292d32\]{--tw-text-opacity:1;color:rgb(41 45 50 / var(--tw-text-opacity))}.dt-text-\[\#29D32\]{color:#29D32}.dt-text-\[\#2D8988\]{--tw-text-opacity:1;color:rgb(45 137 136 / var(--tw-text-opacity))}.dt-text-\[\#333333\]{--tw-text-opacity:1;color:rgb(51 51 51 / var(--tw-text-opacity))}.dt-text-\[\#333\]{--tw-text-opacity:1;color:rgb(51 51 51 / var(--tw-text-opacity))}.dt-text-\[\#494949\]{--tw-text-opacity:1;color:rgb(73 73 73 / var(--tw-text-opacity))}.dt-text-\[\#6D6D6D\]{--tw-text-opacity:1;color:rgb(109 109 109 / var(--tw-text-opacity))}.dt-text-\[\#808080\]{--tw-text-opacity:1;color:rgb(128 128 128 / var(--tw-text-opacity))}.dt-text-\[\#888\]{--tw-text-opacity:1;color:rgb(136 136 136 / var(--tw-text-opacity))}.dt-text-\[\#999999\]{--tw-text-opacity:1;color:rgb(153 153 153 / var(--tw-text-opacity))}.dt-text-\[\#A60520\]{--tw-text-opacity:1;color:rgb(166 5 32 / var(--tw-text-opacity))}.dt-text-\[\#CD3038\]{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.dt-text-\[\#D64000\]{--tw-text-opacity:1;color:rgb(214 64 0 / var(--tw-text-opacity))}.dt-text-\[\#D69800\]{--tw-text-opacity:1;color:rgb(214 152 0 / var(--tw-text-opacity))}.dt-text-\[\#D9D9D9\]{--tw-text-opacity:1;color:rgb(217 217 217 / var(--tw-text-opacity))}.dt-text-\[\#F3FAF7\]{--tw-text-opacity:1;color:rgb(243 250 247 / var(--tw-text-opacity))}.dt-text-\[\#FBCD62\]{--tw-text-opacity:1;color:rgb(251 205 98 / var(--tw-text-opacity))}.dt-text-\[\#FFF\]{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dt-text-\[\#d6d6d6\]{--tw-text-opacity:1;color:rgb(214 214 214 / var(--tw-text-opacity))}.dt-text-\[\#e93737\]{--tw-text-opacity:1;color:rgb(233 55 55 / var(--tw-text-opacity))}.dt-text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.dt-text-black-mine{--tw-text-opacity:1;color:rgb(34 34 34 / var(--tw-text-opacity))}.dt-text-c-CD3038{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.dt-text-c1a7900{color:rgba(26,121,0,1)}.dt-text-c222{color:rgba(34,34,34,1)}.dt-text-c808080{color:rgba(128,128,128,1)}.dt-text-ccd3038{color:rgba(205,48,56,1)}.dt-text-green-haze{--tw-text-opacity:1;color:rgb(0 166 81 / var(--tw-text-opacity))}.dt-text-green-jewel{--tw-text-opacity:1;color:rgb(15 108 50 / var(--tw-text-opacity))}.dt-text-green-jewel-2{--tw-text-opacity:1;color:rgb(21 142 66 / var(--tw-text-opacity))}.dt-text-primary{--tw-text-opacity:1;color:rgb(41 45 50 / var(--tw-text-opacity))}.dt-text-red-600{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.dt-text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dt-underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.dt-decoration-solid{-webkit-text-decoration-style:solid;text-decoration-style:solid}.dt-opacity-0{opacity:0}.dt-opacity-100{opacity:1}.dt-opacity-50{opacity:0.5}.dt-opacity-60{opacity:0.6}.dt-opacity-80{opacity:0.8}.dt-opacity-\[1\]{opacity:1}.dt-shadow-\[0_0_3px_3px_rgb\(0\,0\,0\,\.05\)\]{--tw-shadow:0 0 3px 3px rgb(0,0,0,.05);--tw-shadow-colored:0 0 3px 3px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dt-shadow-\[0px_2px_8\.6px_0px_rgba\(0\,0\,0\,0\.12\)\]{--tw-shadow:0 2px 8.6px 0 rgba(0,0,0,0.12);--tw-shadow-colored:0 2px 8.6px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dt-shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dt-shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1),0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dt-outline-none{outline:2px solid transparent;outline-offset:2px}.dt-outline{outline-style:solid}.dt-drop-shadow-2xl{--tw-drop-shadow:drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dt-drop-shadow-md{--tw-drop-shadow:drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dt-backdrop-blur-\[50px\]{--tw-backdrop-blur:blur(50px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.dt-backdrop-opacity-100{--tw-backdrop-opacity:opacity(1);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.dt-transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.avatar-default{width:32px;height:32px;display:block;background:transparent url(https://cdnweb.dantri.com.vn/dist/b474c6ca2d1abee5b89b.png) no-repeat center/100% 100%;border-radius:50%;overflow:hidden}.avatar-default.size-40{width:40px;height:40px}.avatar-default.size-60{width:60px;height:60px}.auth-wrap{position:fixed;top:0;right:0;width:100vw;height:100vh;color:#4d4d4d;z-index:99999;display:flex;align-items:center;justify-content:center;visibility:hidden;opacity:0;transition:all .3s}.auth-wrap.active{visibility:visible;opacity:1}.auth-wrap .logo{display:none}.auth-overlay{position:fixed;top:0;left:0;bottom:0;width:100%;height:100%;background:rgba(0,0,0,.6) none;z-index:-1}.auth-container{padding:0 40px 30px;background:#fff none;width:100%;max-width:460px;position:relative;border-radius:3px;overflow-y:auto;max-height:100vh}.auth-container.pt-30{padding-top:30px}.auth-close{display:none}.auth-nav{margin:0 -40px;display:flex;flex-wrap:wrap}.auth-nav button{flex:0 0 auto;max-width:100%;width:50%;display:flex;align-items:center;justify-content:center;height:56px;font-size:18px;line-height:24px;font-weight:600;color:#999;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;border:0;padding:0;border-radius:0;background:#eee none}.auth-nav button.active{background:#fff none;color:#333}.auth-desc{display:flex;justify-content:center;margin:16px 0 0;color:#1a1a1a}.auth-desc.mt-24{margin-top:24px}.auth-desc.line{position:relative;z-index:0}.auth-desc.line span{display:block;padding:0 20px;background:#fff none}.auth-desc.line span::before{content:"";position:absolute;top:50%;left:0;width:100%;height:0;border-top:1px solid #eee;transform:translateY(-50%);z-index:-1}.auth-social{margin:16px 0 0;display:flex;flex-wrap:wrap;justify-content:space-between}.auth-social button{flex:0 0 auto;max-width:100%;width:calc(50% - 10px);border:0;background:#e2e8f0 none;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;line-height:22px;color:#333;height:45px;padding:0}.auth-social button::before{content:"";position:relative;display:block;width:35px;height:35px;background:transparent none no-repeat center/100% 100%;margin:0 5px 0 0}.auth-social button.google::before{background-image:url(https://cdnweb.dantri.com.vn/dist/7d0beed56ca1d379fbc0.svg)}.auth-social button.facebook::before{width:30px;height:30px;margin-right:8px;background-image:url(https://cdnweb.dantri.com.vn/dist/f5ae7e06d5a6fc5ebaff.svg)}.auth-form{display:block}.auth-message{margin:8px 0 0}.auth-message.mt-16{margin-top:16px}.auth-message.success{color:#4f8a10}.auth-message.error{color:#ef4444;font-style:italic}.auth-control{margin:16px 0 0}.auth-control.action{display:flex;align-items:center;justify-content:flex-end}.auth-control.term{color:#666}.auth-control.term a{color:#2361ff;font-weight:500}.auth-control .auth-submit{display:flex;align-items:center;justify-content:center;width:100%;height:44px;font-size:16px;line-height:20px;font-weight:600;color:#f8fafc;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;border:0;padding:0;border-radius:5px;background:#1a7900 none}.auth-label{color:#1a1a1a;font-weight:500;margin:0 0 2px;display:block}.auth-row.password{position:relative}.auth-row.password .auth-input{padding-right:44px}.auth-input,.auth-textarea{width:100%;height:44px;border:1px solid #ccc;border-radius:4px;padding:12px 16px 10px;font-size:14px;line-height:22px;color:#333;outline:0}.auth-input.error,.auth-textarea.error{border:1px solid #ef4444}.auth-input.readonly,.auth-textarea.readonly{cursor:not-allowed;background:#eee;border:none;height:100%}.auth-textarea{height:100%}.auth-view{position:absolute;top:0;right:0;width:44px;height:44px;display:block;border:0;border-radius:0;padding:0;background:transparent none;font-size:24px;color:gray}.auth-remember{display:flex;align-items:center}.auth-remember input{margin:0 5px 0 0}.auth-forgot{font-size:14px;line-height:22px;color:gray;font-style:italic;padding:0;background:transparent none;border:0;border-radius:0}.auth-subtitle{font-size:20px;line-height:26px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;color:#333;font-weight:600;text-align:center}.auth-note{margin:16px 0 0;color:gray;font-size:14px;line-height:22px;font-style:italic}.auth-note b{font-weight:500}.auth-back{color:gray;font-size:14px;line-height:22px;display:flex;align-items:center;justify-content:center;padding:0;border:0;background:transparent none}.auth-back i{font-size:24px;margin:0 5px 0 0;position:relative;top:-1px}.auth-back span{color:#06c;margin:0 4px;font-weight:600}.auth-description{margin:30px 0 0}.ads-sticky{position:sticky;top:50px}.before\:dt-absolute::before{content:var(--tw-content);position:absolute}.before\:-dt-bottom-6::before{content:var(--tw-content);bottom:-1.5rem}.before\:-dt-bottom-8::before{content:var(--tw-content);bottom:-2rem}.before\:-dt-bottom-\[27px\]::before{content:var(--tw-content);bottom:-27px}.before\:-dt-bottom-\[3px\]::before{content:var(--tw-content);bottom:-3px}.before\:-dt-bottom-\[72px\]::before{content:var(--tw-content);bottom:-72px}.before\:-dt-left-1::before{content:var(--tw-content);left:-0.25rem}.before\:-dt-left-6::before{content:var(--tw-content);left:-1.5rem}.before\:-dt-left-7::before{content:var(--tw-content);left:-1.75rem}.before\:-dt-left-\[3px\]::before{content:var(--tw-content);left:-3px}.before\:-dt-left-\[5px\]::before{content:var(--tw-content);left:-5px}.before\:-dt-left-\[65px\]::before{content:var(--tw-content);left:-65px}.before\:-dt-right-4::before{content:var(--tw-content);right:-1rem}.before\:-dt-right-5::before{content:var(--tw-content);right:-1.25rem}.before\:-dt-right-6::before{content:var(--tw-content);right:-1.5rem}.before\:-dt-right-9::before{content:var(--tw-content);right:-2.25rem}.before\:-dt-right-\[1px\]::before{content:var(--tw-content);right:-1px}.before\:-dt-right-\[79px\]::before{content:var(--tw-content);right:-79px}.before\:-dt-top-12::before{content:var(--tw-content);top:-3rem}.before\:-dt-top-3::before{content:var(--tw-content);top:-0.75rem}.before\:-dt-top-4::before{content:var(--tw-content);top:-1rem}.before\:-dt-top-7::before{content:var(--tw-content);top:-1.75rem}.before\:-dt-top-px::before{content:var(--tw-content);top:-1px}.before\:dt-bottom-0::before{content:var(--tw-content);bottom:0}.before\:dt-bottom-px::before{content:var(--tw-content);bottom:1px}.before\:dt-left-0::before{content:var(--tw-content);left:0}.before\:dt-left-1\/2::before{content:var(--tw-content);left:50%}.before\:dt-left-32::before{content:var(--tw-content);left:8rem}.before\:dt-left-5::before{content:var(--tw-content);left:1.25rem}.before\:dt-left-\[280px\]::before{content:var(--tw-content);left:280px}.before\:dt-left-\[296px\]::before{content:var(--tw-content);left:296px}.before\:dt-left-\[308px\]::before{content:var(--tw-content);left:308px}.before\:dt-right-0::before{content:var(--tw-content);right:0}.before\:dt-top-0::before{content:var(--tw-content);top:0}.before\:dt-top-1\/2::before{content:var(--tw-content);top:50%}.before\:dt-top-5::before{content:var(--tw-content);top:1.25rem}.before\:dt-top-\[23px\]::before{content:var(--tw-content);top:23px}.before\:dt-top-\[280px\]::before{content:var(--tw-content);top:280px}.before\:dt-top-\[33px\]::before{content:var(--tw-content);top:33px}.before\:dt-top-\[55px\]::before{content:var(--tw-content);top:55px}.before\:dt-top-\[calc\(50\%\+24px\)\]::before{content:var(--tw-content);top:calc(50% + 24px)}.before\:-dt-z-10::before{content:var(--tw-content);z-index:-10}.before\:dt-mx-auto::before{content:var(--tw-content);margin-left:auto;margin-right:auto}.before\:dt-block::before{content:var(--tw-content);display:block}.before\:dt-flex::before{content:var(--tw-content);display:flex}.before\:dt-aspect-square::before{content:var(--tw-content);aspect-ratio:1 / 1}.before\:dt-h-0::before{content:var(--tw-content);height:0}.before\:dt-h-1::before{content:var(--tw-content);height:0.25rem}.before\:dt-h-1\.5::before{content:var(--tw-content);height:0.375rem}.before\:dt-h-1\/2::before{content:var(--tw-content);height:50%}.before\:dt-h-16::before{content:var(--tw-content);height:4rem}.before\:dt-h-20::before{content:var(--tw-content);height:5rem}.before\:dt-h-4::before{content:var(--tw-content);height:1rem}.before\:dt-h-5::before{content:var(--tw-content);height:1.25rem}.before\:dt-h-6::before{content:var(--tw-content);height:1.5rem}.before\:dt-h-7::before{content:var(--tw-content);height:1.75rem}.before\:dt-h-8::before{content:var(--tw-content);height:2rem}.before\:dt-h-\[5px\]::before{content:var(--tw-content);height:5px}.before\:dt-h-\[72px\]::before{content:var(--tw-content);height:72px}.before\:dt-h-full::before{content:var(--tw-content);height:100%}.before\:dt-w-0::before{content:var(--tw-content);width:0}.before\:dt-w-1::before{content:var(--tw-content);width:0.25rem}.before\:dt-w-1\.5::before{content:var(--tw-content);width:0.375rem}.before\:dt-w-1\/4::before{content:var(--tw-content);width:25%}.before\:dt-w-16::before{content:var(--tw-content);width:4rem}.before\:dt-w-4::before{content:var(--tw-content);width:1rem}.before\:dt-w-52::before{content:var(--tw-content);width:13rem}.before\:dt-w-56::before{content:var(--tw-content);width:14rem}.before\:dt-w-6::before{content:var(--tw-content);width:1.5rem}.before\:dt-w-7::before{content:var(--tw-content);width:1.75rem}.before\:dt-w-72::before{content:var(--tw-content);width:18rem}.before\:dt-w-96::before{content:var(--tw-content);width:24rem}.before\:dt-w-\[5px\]::before{content:var(--tw-content);width:5px}.before\:dt-w-\[calc\(100\%\+2px\)\]::before{content:var(--tw-content);width:calc(100% + 2px)}.before\:dt-w-\[calc\(100\%-20px\)\]::before{content:var(--tw-content);width:calc(100% - 20px)}.before\:dt-w-\[calc\(100\%-446px\)\]::before{content:var(--tw-content);width:calc(100% - 446px)}.before\:dt-w-\[calc\(12\.5\%-4px\)\]::before{content:var(--tw-content);width:calc(12.5% - 4px)}.before\:dt-w-\[calc\(50\%-215px\)\]::before{content:var(--tw-content);width:calc(50% - 215px)}.before\:dt-w-full::before{content:var(--tw-content);width:100%}.before\:-dt-translate-x-1\/2::before{content:var(--tw-content);--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.before\:-dt-translate-y-1\/2::before{content:var(--tw-content);--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.before\:dt-items-center::before{content:var(--tw-content);align-items:center}.before\:dt-whitespace-nowrap::before{content:var(--tw-content);white-space:nowrap}.before\:dt-rounded-full::before{content:var(--tw-content);border-radius:9999px}.before\:dt-rounded-r::before{content:var(--tw-content);border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem}.before\:dt-rounded-bl-\[20px\]::before{content:var(--tw-content);border-bottom-left-radius:20px}.before\:dt-rounded-br-\[20px\]::before{content:var(--tw-content);border-bottom-right-radius:20px}.before\:dt-rounded-tl-\[20px\]::before{content:var(--tw-content);border-top-left-radius:20px}.before\:dt-rounded-tr-\[20px\]::before{content:var(--tw-content);border-top-right-radius:20px}.before\:dt-border-b::before{content:var(--tw-content);border-bottom-width:1px}.before\:dt-border-b-4::before{content:var(--tw-content);border-bottom-width:4px}.before\:dt-border-b-\[5px\]::before{content:var(--tw-content);border-bottom-width:5px}.before\:dt-border-l::before{content:var(--tw-content);border-left-width:1px}.before\:dt-border-l-4::before{content:var(--tw-content);border-left-width:4px}.before\:dt-border-l-8::before{content:var(--tw-content);border-left-width:8px}.before\:dt-border-r::before{content:var(--tw-content);border-right-width:1px}.before\:dt-border-r-4::before{content:var(--tw-content);border-right-width:4px}.before\:dt-border-r-8::before{content:var(--tw-content);border-right-width:8px}.before\:dt-border-t::before{content:var(--tw-content);border-top-width:1px}.before\:dt-border-t-4::before{content:var(--tw-content);border-top-width:4px}.before\:dt-border-t-8::before{content:var(--tw-content);border-top-width:8px}.before\:dt-border-t-\[5px\]::before{content:var(--tw-content);border-top-width:5px}.before\:dt-border-dashed::before{content:var(--tw-content);border-style:dashed}.before\:dt-border-\[\#000\]::before{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.before\:dt-border-\[\#003F73\]::before{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(0 63 115 / var(--tw-border-opacity))}.before\:dt-border-\[\#D9D9D9\]::before{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.before\:dt-border-\[\#FBCD62\]::before{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(251 205 98 / var(--tw-border-opacity))}.before\:dt-border-b-transparent::before{content:var(--tw-content);border-bottom-color:transparent}.before\:dt-border-l-\[\#FBCD62\]::before{content:var(--tw-content);--tw-border-opacity:1;border-left-color:rgb(251 205 98 / var(--tw-border-opacity))}.before\:dt-border-l-transparent::before{content:var(--tw-content);border-left-color:transparent}.before\:dt-border-r-\[\#FBCD62\]::before{content:var(--tw-content);--tw-border-opacity:1;border-right-color:rgb(251 205 98 / var(--tw-border-opacity))}.before\:dt-border-r-transparent::before{content:var(--tw-content);border-right-color:transparent}.before\:dt-border-t-\[\#FBCD62\]::before{content:var(--tw-content);--tw-border-opacity:1;border-top-color:rgb(251 205 98 / var(--tw-border-opacity))}.before\:dt-border-t-transparent::before{content:var(--tw-content);border-top-color:transparent}.before\:dt-bg-\[\#002E51\]::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 46 81 / var(--tw-bg-opacity))}.before\:dt-bg-\[\#00335A\]::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 51 90 / var(--tw-bg-opacity))}.before\:dt-bg-\[\#292d32\]::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(41 45 50 / var(--tw-bg-opacity))}.before\:dt-bg-\[\#FBCD62\]::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(251 205 98 / var(--tw-bg-opacity))}.before\:dt-pl-2::before{content:var(--tw-content);padding-left:0.5rem}.before\:dt-pr-1::before{content:var(--tw-content);padding-right:0.25rem}.before\:dt-text-xs::before{content:var(--tw-content);font-size:0.75rem;line-height:1rem}.before\:dt-text-white::before{content:var(--tw-content);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.before\:dt-transition::before{content:var(--tw-content);transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.before\:dt-content-\[attr\(before\)\]::before{--tw-content:attr(before);content:var(--tw-content)}.after\:dt-absolute::after{content:var(--tw-content);position:absolute}.after\:dt-relative::after{content:var(--tw-content);position:relative}.after\:-dt-bottom-\[27px\]::after{content:var(--tw-content);bottom:-27px}.after\:-dt-left-6::after{content:var(--tw-content);left:-1.5rem}.after\:-dt-left-\[26px\]::after{content:var(--tw-content);left:-26px}.after\:-dt-right-10::after{content:var(--tw-content);right:-2.5rem}.after\:-dt-right-6::after{content:var(--tw-content);right:-1.5rem}.after\:-dt-right-7::after{content:var(--tw-content);right:-1.75rem}.after\:-dt-right-9::after{content:var(--tw-content);right:-2.25rem}.after\:-dt-right-\[26px\]::after{content:var(--tw-content);right:-26px}.after\:-dt-top-7::after{content:var(--tw-content);top:-1.75rem}.after\:-dt-top-px::after{content:var(--tw-content);top:-1px}.after\:dt-bottom-0::after{content:var(--tw-content);bottom:0}.after\:dt-bottom-1::after{content:var(--tw-content);bottom:0.25rem}.after\:dt-bottom-px::after{content:var(--tw-content);bottom:1px}.after\:dt-left-0::after{content:var(--tw-content);left:0}.after\:dt-left-24::after{content:var(--tw-content);left:6rem}.after\:dt-left-40::after{content:var(--tw-content);left:10rem}.after\:dt-left-5::after{content:var(--tw-content);left:1.25rem}.after\:dt-left-\[172px\]::after{content:var(--tw-content);left:172px}.after\:dt-right-0::after{content:var(--tw-content);right:0}.after\:dt-right-32::after{content:var(--tw-content);right:8rem}.after\:dt-top-0::after{content:var(--tw-content);top:0}.after\:dt-top-1\/2::after{content:var(--tw-content);top:50%}.after\:dt-top-5::after{content:var(--tw-content);top:1.25rem}.after\:dt-top-\[150px\]::after{content:var(--tw-content);top:150px}.after\:dt-top-\[17px\]::after{content:var(--tw-content);top:17px}.after\:dt-top-\[34px\]::after{content:var(--tw-content);top:34px}.after\:dt-top-\[55px\]::after{content:var(--tw-content);top:55px}.after\:dt-top-\[calc\(50\%\+12px\)\]::after{content:var(--tw-content);top:calc(50% + 12px)}.after\:-dt-z-10::after{content:var(--tw-content);z-index:-10}.after\:dt-z-\[-1\]::after{content:var(--tw-content);z-index:-1}.after\:dt-mx-auto::after{content:var(--tw-content);margin-left:auto;margin-right:auto}.after\:dt-block::after{content:var(--tw-content);display:block}.after\:dt-aspect-square::after{content:var(--tw-content);aspect-ratio:1 / 1}.after\:dt-h-0::after{content:var(--tw-content);height:0}.after\:dt-h-32::after{content:var(--tw-content);height:8rem}.after\:dt-h-7::after{content:var(--tw-content);height:1.75rem}.after\:dt-h-\[1px\]::after{content:var(--tw-content);height:1px}.after\:dt-h-\[5px\]::after{content:var(--tw-content);height:5px}.after\:dt-h-\[calc\(100\%-22px\)\]::after{content:var(--tw-content);height:calc(100% - 22px)}.after\:dt-h-full::after{content:var(--tw-content);height:100%}.after\:dt-w-0::after{content:var(--tw-content);width:0}.after\:dt-w-6::after{content:var(--tw-content);width:1.5rem}.after\:dt-w-7::after{content:var(--tw-content);width:1.75rem}.after\:dt-w-\[34px\]::after{content:var(--tw-content);width:34px}.after\:dt-w-\[5px\]::after{content:var(--tw-content);width:5px}.after\:dt-w-\[78\%\]::after{content:var(--tw-content);width:78%}.after\:dt-w-\[calc\(100\%-350px\)\]::after{content:var(--tw-content);width:calc(100% - 350px)}.after\:dt-w-\[calc\(12\.5\%-4px\)\]::after{content:var(--tw-content);width:calc(12.5% - 4px)}.after\:dt-w-\[calc\(50\%-215px\)\]::after{content:var(--tw-content);width:calc(50% - 215px)}.after\:dt-w-full::after{content:var(--tw-content);width:100%}.after\:-dt-translate-y-1\/2::after{content:var(--tw-content);--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\:dt-translate-y-1\/2::after{content:var(--tw-content);--tw-translate-y:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\:dt-rounded-full::after{content:var(--tw-content);border-radius:9999px}.after\:dt-rounded-bl-\[20px\]::after{content:var(--tw-content);border-bottom-left-radius:20px}.after\:dt-rounded-br-\[20px\]::after{content:var(--tw-content);border-bottom-right-radius:20px}.after\:dt-rounded-tl-\[20px\]::after{content:var(--tw-content);border-top-left-radius:20px}.after\:dt-rounded-tr-\[20px\]::after{content:var(--tw-content);border-top-right-radius:20px}.after\:dt-border-b::after{content:var(--tw-content);border-bottom-width:1px}.after\:dt-border-b-8::after{content:var(--tw-content);border-bottom-width:8px}.after\:dt-border-b-\[10px\]::after{content:var(--tw-content);border-bottom-width:10px}.after\:dt-border-b-\[5px\]::after{content:var(--tw-content);border-bottom-width:5px}.after\:dt-border-l::after{content:var(--tw-content);border-left-width:1px}.after\:dt-border-l-2::after{content:var(--tw-content);border-left-width:2px}.after\:dt-border-l-\[16px\]::after{content:var(--tw-content);border-left-width:16px}.after\:dt-border-l-\[5px\]::after{content:var(--tw-content);border-left-width:5px}.after\:dt-border-r::after{content:var(--tw-content);border-right-width:1px}.after\:dt-border-r-8::after{content:var(--tw-content);border-right-width:8px}.after\:dt-border-r-\[16px\]::after{content:var(--tw-content);border-right-width:16px}.after\:dt-border-r-\[20px\]::after{content:var(--tw-content);border-right-width:20px}.after\:dt-border-r-\[5px\]::after{content:var(--tw-content);border-right-width:5px}.after\:dt-border-t::after{content:var(--tw-content);border-top-width:1px}.after\:dt-border-t-2::after{content:var(--tw-content);border-top-width:2px}.after\:dt-border-t-8::after{content:var(--tw-content);border-top-width:8px}.after\:dt-border-t-\[10px\]::after{content:var(--tw-content);border-top-width:10px}.after\:dt-border-t-\[5px\]::after{content:var(--tw-content);border-top-width:5px}.after\:dt-border-solid::after{content:var(--tw-content);border-style:solid}.after\:dt-border-dashed::after{content:var(--tw-content);border-style:dashed}.after\:dt-border-\[\#000\]::after{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.after\:dt-border-\[\#003F73\]::after{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(0 63 115 / var(--tw-border-opacity))}.after\:dt-border-\[\#FBCD62\]::after{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(251 205 98 / var(--tw-border-opacity))}.after\:dt-border-ceee::after{content:var(--tw-content);border-color:rgba(238,238,238,1)}.after\:dt-border-transparent::after{content:var(--tw-content);border-color:transparent}.after\:dt-border-b-transparent::after{content:var(--tw-content);border-bottom-color:transparent}.after\:dt-border-l-\[\#FBCD62\]::after{content:var(--tw-content);--tw-border-opacity:1;border-left-color:rgb(251 205 98 / var(--tw-border-opacity))}.after\:dt-border-l-transparent::after{content:var(--tw-content);border-left-color:transparent}.after\:dt-border-r-\[\#292d32\]::after{content:var(--tw-content);--tw-border-opacity:1;border-right-color:rgb(41 45 50 / var(--tw-border-opacity))}.after\:dt-border-r-\[\#FBCD62\]::after{content:var(--tw-content);--tw-border-opacity:1;border-right-color:rgb(251 205 98 / var(--tw-border-opacity))}.after\:dt-border-r-transparent::after{content:var(--tw-content);border-right-color:transparent}.after\:dt-border-t-\[\#FBCD62\]::after{content:var(--tw-content);--tw-border-opacity:1;border-top-color:rgb(251 205 98 / var(--tw-border-opacity))}.after\:dt-border-t-transparent::after{content:var(--tw-content);border-top-color:transparent}.after\:dt-bg-\[\#F3C276\]::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(243 194 118 / var(--tw-bg-opacity))}.after\:dt-bg-\[\#FBCD62\]::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(251 205 98 / var(--tw-bg-opacity))}.after\:dt-bg-video-sport::after{content:var(--tw-content);background-image:linear-gradient(180deg,rgba(0,0,0,0.00) 0,rgba(0,0,0,0.66) 43.93%,#000 90.79%)}.after\:dt-text-center::after{content:var(--tw-content);text-align:center}.after\:dt-font-SF-UI-Display::after{content:var(--tw-content);font-family:SF UI Display,serif}.after\:dt-text-xs::after{content:var(--tw-content);font-size:0.75rem;line-height:1rem}.after\:dt-underline::after{content:var(--tw-content);-webkit-text-decoration-line:underline;text-decoration-line:underline}.after\:dt-transition::after{content:var(--tw-content);transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.after\:dt-content-\[attr\(before\)\]::after{--tw-content:attr(before);content:var(--tw-content)}.visited\:dt-text-\[\#F3FAF7\]:visited{color:rgb(243 250 247 )}.hover\:dt-scale-\[1\.1\]:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\:dt-cursor-pointer:hover{cursor:pointer}.hover\:dt-rounded-lg:hover{border-radius:0.5rem}.hover\:dt-border-4:hover{border-width:4px}.hover\:dt-bg-\[\#f0f0f0\]:hover{--tw-bg-opacity:1;background-color:rgb(240 240 240 / var(--tw-bg-opacity))}.hover\:dt-font-bold:hover{font-weight:700}.hover\:dt-text-PersianRed:hover{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.hover\:dt-text-\[\#222222\]:hover{--tw-text-opacity:1;color:rgb(34 34 34 / var(--tw-text-opacity))}.hover\:dt-text-\[\#CD3038\]:hover{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.hover\:dt-text-\[\#F3FAF7\]:hover{--tw-text-opacity:1;color:rgb(243 250 247 / var(--tw-text-opacity))}.hover\:dt-text-\[\#FBCD62\]:hover{--tw-text-opacity:1;color:rgb(251 205 98 / var(--tw-text-opacity))}.hover\:dt-text-\[\#FFF\]:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\:dt-text-black-mine:hover{--tw-text-opacity:1;color:rgb(34 34 34 / var(--tw-text-opacity))}.hover\:dt-text-c-CD3038:hover{--tw-text-opacity:1;color:rgb(205 48 56 / var(--tw-text-opacity))}.hover\:dt-text-green-haze:hover{--tw-text-opacity:1;color:rgb(0 166 81 / var(--tw-text-opacity))}.hover\:dt-text-green-jewel:hover{--tw-text-opacity:1;color:rgb(15 108 50 / var(--tw-text-opacity))}.hover\:dt-text-primary:hover{--tw-text-opacity:1;color:rgb(41 45 50 / var(--tw-text-opacity))}.hover\:dt-text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\:dt-opacity-\[0\.8\]:hover{opacity:0.8}.focus\:dt-border-green-jewel:focus{--tw-border-opacity:1;border-color:rgb(15 108 50 / var(--tw-border-opacity))}@media (min-width:1024px){.lg\:dt-flex-row{flex-direction:row}.lg\:dt-justify-between{justify-content:space-between}.lg\:dt-gap-6{gap:1.5rem}.lg\:dt-gap-\[59px\]{gap:59px}.lg\:dt-text-base{font-size:1rem;line-height:1.5rem}.lg\:dt-text-sm{font-size:0.875rem;line-height:1.25rem}}.dt-fe{margin-top:20px}.cdn-cls table{width:100%}.cdn-cls table th,.cdn-cls table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6;text-align:center}.cdn-cls .dt-tcdt__form{display:flex;justify-content:center}.cdn-cls .dt-tcdt__form .form-control{padding:12px;line-height:24px;font-size:16px;height:auto;min-width:250px;display:block;background-color:transparent;background-image:none;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-width:1px 0;border-color:transparent transparent #ddd;border-radius:0;box-shadow:none;color:#373c56}.cdn-cls .dt-tcdt__form .form-group{margin-bottom:0;padding:0 8px}.cdn-cls .dt-tcdt__form .btn{padding:12px 32px;font-size:16px;color:#fff;background-color:#1a7900;outline:none;display:inline-block;margin-bottom:0;font-weight:600;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.3846154;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s ease-in-out}.cdn-cls .dt-tcdt{background-color:rgba(26,121,0,.15);padding:4rem 0}.cdn-cls .dt-tcdt__title{color:#1a7900;text-transform:uppercase;font-size:32px;margin-bottom:32px}.cdn-cls .page-tcdt .dt-main{padding-top:0}.cdn-cls .tcdt-block{margin:2rem 0}.cdn-cls .tcdt-table-wrapper thead{background-color:#fff}.cdn-cls .tcdt-tab{padding:24px 0;display:flex;list-style:none;justify-content:center}.cdn-cls .tcdt-tab>li{padding:0 4px}.cdn-cls .tcdt-tab>li>a{padding:8px 24px;border:1px solid #eee;border-radius:24px;font-size:16px;font-weight:500}.cdn-cls .tcdt-tab>li>a:hover{color:#1a7900}.cdn-cls .tcdt-tab>li.active>a{background-color:#1a7900;color:#fff;border-color:#1a7900}.cdn-cls .tcdt-count{width:40px}.cdn-cls .tcdt-sbd{width:100px}.cdn-cls .tcdt-toan{width:52px}.cdn-cls .tcdt-van{width:80px}.cdn-cls .tcdt-ngoaingu{width:80px}.cdn-cls .tcdt-vatly{width:60px}.cdn-cls .tcdt-hoahoc{width:70px}.cdn-cls .tcdt-sinhhoc{width:70px}.cdn-cls .tcdt-tb-tn{width:100px}.cdn-cls .tcdt-lichsu{width:70px}.cdn-cls .tcdt-dialy{width:60px}.cdn-cls .tcdt-gdcd{width:70px}.cdn-cls .tcdt-tb-xh{width:100px}.cdn-cls .tcdt-filter{display:grid;grid-template-columns:70px minmax(0,1fr);align-items:center;gap:16px;margin-bottom:16px;font-size:16px}.cdn-cls .tcdt-filter:last-child{margin-bottom:0}.cdn-cls .tcdt-filter__label{font-weight:700}.cdn-cls .tcdt-filter__select{padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.cdn-cls .tcdt-filter__list{padding:0;display:flex;list-style:none}.cdn-cls .tcdt-filter__list>li{float:left}.cdn-cls .tcdt-filter__list>li:not(:last-child)::after{content:"|";padding:0 8px;color:#ccc}.cdn-cls .tcdt-filter__list>li.active>a{font-weight:700;color:#1a7900}.cdn-cls .tcdt-filter__list>li>a{color:#616161}.cdn-cls .tcdt-filter__list>li>a:hover{color:#1a7900}</style><style>*,::after,::before{box-sizing:border-box}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}body{margin:0;padding:0;font-family:"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-size:14px;line-height:1.4;font-weight:400;overflow-x:hidden;color:#4d4d4d;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body.no-scroll{overflow:hidden}@media only screen and (max-width:1199px){body.no-scroll{overflow-x:auto}body{overflow:visible}}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}a{color:#222;text-decoration:none}a:focus,a:hover,a:active{outline:0;color:#06c}img{max-width:100%;height:auto}.container{width:1158px;padding:0 15px;margin:0 auto}.author-info_right{text-align:right;width:100%;display:flex;margin-bottom:10px;margin-top:0;justify-content:flex-end;color:#333;font-size:18px;line-height:30px}.author-info_right a{color:#333}.author-info_right a:hover{outline:0;color:#06c}.bg-wrap{position:relative;z-index:0}.bg-wrap::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);width:100vw;height:100%;min-width:1158px;display:block;z-index:-1}.flex-jcb{display:flex;align-items:center;justify-content:space-between}.flex-jcc{display:flex;align-items:center;justify-content:center}.header{padding-top:16px;padding-bottom:13px;z-index:10}.header::before{background:#fff none}.header-logo{margin:0;line-height:0}.header-logo a{line-height:0;display:inline-block}.header-logo a svg,.header-logo a img{width:auto;height:39px}.header-logo a svg.config,.header-logo a svg.noel,.header-logo a img.config,.header-logo a img.noel{height:46px;position:relative;top:-2px;-o-object-fit:contain;object-fit:contain}.header-logo.dtnewyear a{max-height:20px}.header-logo.dtnewyear svg,.header-logo.dtnewyear img{height:46px;position:relative;top:-16px;-o-object-fit:contain;object-fit:contain}.header-account{background:transparent none;border:0;padding:0;white-space:nowrap;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;outline:0;color:gray;cursor:pointer;font-size:14px;font-weight:500}.header-account svg{margin:0 0 0 9px;stroke:#4d4d4d}.newest-link{display:flex;flex-direction:row;align-items:center;padding:8px 14px;gap:8px;border:1px solid #ccc;border-radius:123px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-weight:400;font-size:12px;line-height:20px;color:#292d32;margin-right:18px}.international{height:37px;padding:4px 12px 4px 5px;border:1px solid #ccc;border-radius:18px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;margin:0 12px 0 0;font-weight:400;line-height:1}.international img{margin:0 8px 0 0;border-radius:50%;overflow:hidden;width:26px;height:26px}div[data-module=user-onboarding]{z-index:10;position:absolute;width:0;top:0;right:0}.user-popup{background:none;border:none}.user-info{color:gray;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;cursor:pointer}.user-info .user-logout{border-top-left-radius:0;border-top-right-radius:0;visibility:visible;opacity:1;top:205px;background:#eee none}.user-info .user-logout:hover{color:#2361ff}.user-info .user-logout::before{content:none}.user-info .user-infos{visibility:visible;opacity:1;top:45px;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid #d5d5d5;width:140px;justify-content:flex-start}.user-info .user-infos:hover{color:#2361ff}.user-info .user-infos::before{content:"";position:absolute;top:-8px;right:35px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:9px solid #eee}.user-info .user-comment{border-radius:0;visibility:visible;opacity:1;top:77px;border-bottom:1px solid #d5d5d5;width:140px;justify-content:flex-start}.user-info .user-comment span{white-space:nowrap}.user-info .user-comment::before{content:none}.user-info .user-comment:hover{color:#2361ff}.user-info .user-your-news{border-radius:0;visibility:visible;opacity:1;top:109px;border-bottom:1px solid #d5d5d5;width:140px;justify-content:flex-start}.user-info .user-your-news span{white-space:nowrap}.user-info .user-your-news::before{content:none}.user-info .user-your-news:hover{color:#2361ff}.user-info .user-news{border-radius:0;visibility:visible;opacity:1;top:141px;border-bottom:1px solid #d5d5d5;width:140px;justify-content:flex-start}.user-info .user-news::before{content:none}.user-info .user-news:hover{color:#2361ff}.user-info .user-saved{border-radius:0;visibility:visible;opacity:1;top:173px;border-bottom:1px solid #d5d5d5;width:140px;justify-content:flex-start}.user-info .user-saved::before{content:none}.user-info .user-saved:hover{color:#2361ff}.user-info>svg{margin:0 0 0 5px;stroke:gray}.user-name{position:relative;top:1px}.user-name b{font-weight:600}.user-avatar{position:relative;margin:0 0 0 10px}.user-avatar .avatar{width:35px;height:35px;background:#1a7900 none;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;font-weight:600;text-transform:uppercase}.user-avatar .avatar.img-check{background:none}.user-avatar svg{stroke:#4d4d4d}.user-logout{position:absolute;top:60px;right:-25px;width:140px;height:32px;display:flex;align-items:center;justify-content:space-between;padding:0 12px;background:#eee none;border-radius:5px;font-size:12px;color:#666;font-weight:600;border:0;visibility:hidden;opacity:0}.user-logout::before{content:"";position:absolute;top:-8px;right:35px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:9px solid #eee}.user-extend{position:absolute;right:-25px;width:140px;height:32px;display:flex;align-items:center;justify-content:space-between;padding:0 12px;background:#eee none;border-radius:5px;font-size:12px;color:#666;font-weight:600;border:0;visibility:hidden;opacity:0}.user-extend::before{content:"";position:absolute;top:-8px;right:35px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:9px solid #eee}.search-link{margin:0 0 0 20px;line-height:0}.search-link svg{stroke:#4d4d4d}.menu{position:sticky;top:0;z-index:9;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.menu::before{background:#fff none}.menu-wrap{margin:0 auto;padding:0;list-style:none;border-bottom:1px solid #eee;position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;font-size:12px}.menu-wrap::before{background:#fff none;top:-1px}.menu-wrap>li{position:relative}.menu-wrap>li.has-child::after{content:"";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #eee;position:absolute;bottom:-2px;left:50%;transform:translate(-50%,30px);transition:all .15s;visibility:hidden;opacity:0}.menu-wrap>li.has-child:hover::after{visibility:visible;opacity:1;transform:translate(-50%,0)}.menu-wrap>li.has-child:hover .submenu{visibility:visible;opacity:1;transform:translateY(0)}.menu-wrap>li>a{font-weight:500;color:#333;height:38px;display:flex;align-items:center;text-transform:uppercase}.menu-wrap>li:hover::before,.menu-wrap>li.active::before{content:"";width:100%;height:0;position:absolute;left:0;bottom:-2px;border-top:3px solid #1a7900}.menu-wrap>li.home svg{stroke:#333}.menu-wrap>li.home svg path:nth-child(1){fill:#333}.menu-wrap>li.menu-more{cursor:pointer;display:flex;align-items:center}.menu-wrap>li.menu-more:hover::before{display:none}.menu-wrap>li.menu-more .more{stroke:#4d4d4d}.menu-wrap>li.menu-more .more:hover{stroke:#1a7900}.menu-wrap>li.menu-more .close{stroke:#1a7900;display:none}.menu-wrap>li.menu-more.show .more{display:none}.menu-wrap>li.menu-more.show .close{display:block}.menu-wrap>li.menu-logo img{width:auto;max-height:26px;position:relative;top:-6px}.menu-second{margin:0 0 0 40px;padding:0;list-style:none;display:flex;align-items:center;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-weight:400;font-size:14px;line-height:20px}.menu-second.child{margin:12px 0 0;margin-bottom:-13px;padding-top:10px;border-top:1px solid}.menu-second.child .deactive a{color:#888}.menu-second.child li{display:block;position:relative}.menu-second.child li:not(:first-of-type){margin:0 0 0 30px}.menu-second.child li:not(:first-of-type)::before{display:none}.menu-second.child li h1{font-size:14px;line-height:20px;color:#222;margin:0;font-weight:600}.menu-second.child li a{font-size:14px;line-height:20px;color:#222;padding:0 0 4px;border-bottom:3px solid transparent}.menu-second.child li.has-child::after{content:"";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #eee;position:absolute;bottom:-13px;left:50%;transform:translate(-50%,30px);transition:all .15s;visibility:hidden;opacity:0}.menu-second.child li.has-child:hover .submenu{visibility:visible;opacity:1;transform:translateY(0)}.menu-second.child li.has-child .submenu{margin:32px 0;padding:2px 0 4px;list-style:none;position:absolute;left:0;top:0;max-width:250px;background:#fff none;border:1px solid #eee;border-radius:5px;transition:all .15s;visibility:hidden;opacity:0;transform:translateY(15px);z-index:9}.menu-second.child li.has-child .submenu>li{margin:0;border-bottom:none}.menu-second.child li.has-child .submenu>li:not(:first-of-type)::before{display:none}.menu-second.child li.has-child .submenu>li:last-of-type{border-bottom:0}.menu-second.child li.has-child .submenu>li>a{padding:6px 12px;font-size:12px;line-height:16px;font-weight:500;color:#666;display:flex;align-items:center;white-space:nowrap;transition:all .15s;border-bottom:0}.menu-second.child li.has-child .submenu>li>a:hover{color:#2361ff}.menu-second.child li.has-child .submenu>li>a::before{content:"";width:0;height:0;border-top:1px solid #2361ff;position:relative;display:block;transition:all .15s}.menu-second.child li.has-child .submenu>li>a:hover::before{width:10px;margin:0 6px 0 0}.menu-second.child li.active a{color:#222}.menu-second.subcate{margin:12px 0 0;margin-bottom:-13px;padding-top:10px;border-top:1px solid}.menu-second.subcate .deactive a{color:#888}.menu-second.subcate li{display:block;position:relative}.menu-second.subcate li:not(:first-of-type){margin:0 0 0 30px}.menu-second.subcate li:not(:first-of-type)::before{display:none}.menu-second.subcate li h1{font-size:14px;line-height:20px;color:#222;margin:0;font-weight:600}.menu-second.subcate li a{font-size:14px;line-height:20px;color:#222;padding:0 0 4px;border-bottom:3px solid transparent}.menu-second.subcate li.has-child::after{content:"›";transform:rotate(90deg);position:absolute;float:left;font-size:23px;padding:0 5px;color:#a0a4a8;top:0;right:-20px;visibility:hidden}.menu-second.subcate li.has-child:hover::after{visibility:visible}.menu-second.subcate li.has-child:hover .submenu{visibility:visible;opacity:1;transform:translateY(0)}.menu-second.subcate li.has-child .submenu{margin:32px 0;padding:2px 0 4px;list-style:none;position:absolute;left:0;top:0;max-width:250px;background:#fff none;border:1px solid #eee;border-radius:5px;transition:all .15s;visibility:hidden;opacity:0;transform:translateY(15px);z-index:9}.menu-second.subcate li.has-child .submenu>li{margin:0;border-bottom:none;list-style-type:none}.menu-second.subcate li.has-child .submenu>li:not(:first-of-type)::before{display:none}.menu-second.subcate li.has-child .submenu>li:last-of-type{border-bottom:0}.menu-second.subcate li.has-child .submenu>li>a{padding:6px 12px;font-size:14px;line-height:16px;color:#222;display:flex;align-items:center;white-space:nowrap;transition:all .15s;border-bottom:0;font-weight:400;text-transform:none}.menu-second.subcate li.has-child .submenu>li>a:hover{color:#0f6c32;list-style-type:none;background:#f4f6fa;border-radius:8px}.menu-second.subcate li.has-child .submenu>li>a::before{content:"";width:0;height:0;border-top:1px solid #2361ff;position:relative;display:block;transition:all .15s}.menu-second.subcate li.has-child .submenu>li>a:hover::before{margin:0 6px 0 0}.menu-second.subcate li.active a{color:#222}.menu-second li{display:flex;align-items:center}.menu-second li:not(:first-of-type)::before{content:"";position:relative;width:0;height:15px;border-left:1px solid #c4c4c4;margin:0 12px;display:block;top:2px}.menu-second.sub-menu{margin:0;flex-wrap:wrap;min-height:20px}.menu-second.sub-menu li:not(:first-of-type)::before{margin:0 8px}.menu-second.ml-30{margin-left:30px}.submenu{margin:0;padding:2px 0 4px;list-style:none;position:absolute;left:-5px;top:39px;min-width:140px;background:#eee none;border-radius:0 0 5px 5px;transition:all .15s;visibility:hidden;opacity:0;transform:translateY(15px)}.submenu>li{border-bottom:1px solid #d5d5d5}.submenu>li:last-of-type{border-bottom:0}.submenu>li>a{padding:8px 12px;line-height:16px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-weight:500;text-transform:uppercase;color:#666;display:flex;align-items:center;white-space:nowrap;transition:all .15s}.submenu>li>a:hover{color:#2361ff}.submenu>li>a::before{content:"";width:0;height:0;border-top:1px solid #2361ff;position:relative;display:block;transition:all .15s}.submenu>li>a:hover::before{width:10px;margin:0 6px 0 0}.nav-full{position:fixed;left:50%;width:100vw;height:100vh;z-index:9;visibility:hidden;opacity:0;padding:39px 0 0;transition:top .15s,visibility .15s,opacity .15s;transform:translateX(-50%);min-width:1158px}@media only screen and (max-width:1199px){.nav-full{left:0;transform:translateX(0)}}.nav-full.show{position:absolute;top:0;visibility:visible;opacity:1}.nav-full::before{background:#eee none}.nav-full .nf-wrap{display:grid;grid-template-columns:auto 270px;grid-gap:60px;height:100%}.nf-menu{margin:0;padding:20px 0 0;list-style:none;display:grid;grid-template-columns:repeat(6,auto);grid-row-gap:20px;grid-column-gap:30px;flex-wrap:wrap;align-content:flex-start;max-height:100%;overflow-y:auto}.nf-menu::-webkit-scrollbar{width:4px}.nf-menu::-webkit-scrollbar-thumb{background-color:#c4c4c4}.nf-menu>li>a{font-size:14px;line-height:18px;font-weight:600;text-transform:uppercase;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.nf-submenu{margin:8px 0 0;padding:0;list-style:none}.nf-submenu>li:not(:first-of-type){margin:8px 0 0}.nf-submenu>li>a{font-size:13px;line-height:15px;color:#666;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.nf-submenu>li>a:hover{color:#2361ff}.nf-sidebar{position:relative}.nf-sidebar::before{content:"";position:absolute;top:0;left:-30px;width:0;height:100%;border-left:1px solid #ccc}.nf-sidebar .social{margin-top:35px;color:#333;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;justify-content:flex-start}.nf-sidebar .item.cols-2{display:grid;grid-template-columns:repeat(2,50%)}.nf-sidebar .item.line{height:0;border-top:1px solid #ccc;margin:25px 0}.nf-sidebar .item .col{margin:0;padding:0;list-style:none}.nf-sidebar .item .col li{color:#222;font-size:14px;line-height:18px;font-weight:600}.nf-sidebar .item .col li:not(:first-of-type){margin-top:18px}.nf-sidebar .item .col li>a{font-size:14px;line-height:18px;font-weight:600;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.nf-sidebar .item .col li>a.uppercase{text-transform:uppercase}.nf-sidebar .item .col li>a.email{display:flex;align-items:center;font-weight:400}.nf-sidebar .item .col li>a.email svg{margin:0 8px 0 0;stroke:#666}.nf-sidebar .item .col li>a.headphone{display:flex;align-items:center;font-weight:400}.nf-sidebar .item .col li>a.headphone svg{margin:0 8px 0 0;stroke:#666}.social{margin:24px 0 0}.social-label{display:block;margin:0}.social-list{margin:0 0 0 20px}.social-list a{width:30px;height:30px;background:none no-repeat center/auto 30px;margin:0 16px 0 0;text-indent:-999999px;color:transparent;overflow:hidden;line-height:0}.social-list a:last-of-type{margin-right:0}.social-list a.facebook{background-image:url(https://cdnweb.dantri.com.vn/dist/f79dca0321a473942b57.svg)}.social-list a.youtube{background-image:url(https://cdnweb.dantri.com.vn/dist/add0b845165b2db1bdc0.svg)}.social-list a.tiktok{width:22px;background-image:url(https://cdnweb.dantri.com.vn/dist/e84c1388df2f58641617.svg)}.footer{padding-top:34px;padding-bottom:30px}.footer::before{background:#fff none}.footer::after{content:"";display:block;position:absolute;top:0;left:15px;width:calc(100% - 30px);height:0;border-top:4px solid #0f6c32}.footer.mt-40{margin-top:40px}.footer-logo{justify-content:flex-start}.footer-wrap{display:flex;justify-content:space-between;margin:10px 0 0;color:#000;line-height:24px}.footer-wrap a{color:#000;font-weight:400}.footer-wrap b{font-weight:400}.footer-wrap .footer-two .m-0{margin:0}.footer-wrap .footer-two a:hover{text-decoration:underline}.footer-list{margin:20px 0 0;padding:0;list-style:none}.footer-list:first-child{margin-top:0}.footer-app-label{display:block;margin:0}.footer-app-ico{margin:16px 0 0}.footer-app a{width:125px;height:38px;background:none no-repeat center/125px 38px;margin:0 20px 0 0;text-indent:-999999px;color:transparent;overflow:hidden;line-height:0}.footer-app a:last-of-type{margin-right:0}.footer-app a.ios{background-image:url(https://cdnweb.dantri.com.vn/dist/ee6bf097e303486d2a1c.png)}.footer-app a.android{background-image:url(https://cdnweb.dantri.com.vn/dist/25695d60eaeb16411962.png)}.no-gutters{margin-right:0;margin-left:0}.body{margin-top:24px;padding-bottom:24px}.title-container{display:flex;align-items:center;margin-bottom:20px}.title-breadcrumbs{display:flex;align-items:flex-end}.title-page{margin:-3px 0 -4px 0;font-size:24px;line-height:32px;font-weight:600;color:#222;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.title-page a{color:#222}.title-page.mt-30{margin-top:30px}.title-parent{margin:-3px 0;font-size:24px;line-height:34px;font-weight:400;color:#222;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.title-parent a{color:#a0a4a8}.title-parent.mt-30{margin-top:30px}.title-author::after{content:"";width:50px;height:0;display:block;left:0;bottom:-2px;border-top:5px solid #1a7900;margin:12px 0 0;border-left:0}.title-subpage{margin:0;font-size:24px;line-height:28px;font-weight:600;color:#666;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;display:flex;align-items:center}.title-subpage::before{content:"›";position:relative;margin:0 10px 0 12px;font-weight:500;color:gray}.title-subpage a{color:#222}.title-tag{font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-size:20px;font-weight:100;color:#333;margin:.67em 0}.title-tag h1{display:inline-block;font-size:20px;margin:0}.title-sub{font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;color:#1a7900;text-decoration:underline}.ads-body .body{margin-top:250px;padding-top:20px;background:#fff none}.ads-body .bg-wrap:not(.header):not(.menu):not(.menu-wrap):not(.sg-header)::before{max-width:100%}#desktop-home-top-page,#desktop-top-page{background:#f4f6fa none}.dantri-widget--vote{min-height:300px}#desktop-right-1.start{min-height:600px}#desktop-right-1.end{min-height:0}.weather-placeholder{min-width:240px}.auth-placeholder{min-width:90px}.notification-placeholder{min-width:24px;margin:0 0 0 20px}.header.minify{padding-top:0;padding-bottom:0;min-height:36px;position:relative}.header-inner{padding:6px 0;display:flex;align-items:center;justify-content:space-between;z-index:10}.header-inner::before{background:#fff none;border-bottom:1px solid #d9d9d9}.header-inner__left{display:flex;align-items:center}.header-inner__left>*:not(:first-child){margin-left:12px}.header-inner__left .logo{margin:0 0 0 12px;line-height:0}.header-inner__left .logo a{display:inline-block;line-height:0}.header-inner__left .logo a svg,.header-inner__left .logo a img{width:auto;height:26px}.header-inner__left .logo a svg.config,.header-inner__left .logo a svg.noel,.header-inner__left .logo a img.config,.header-inner__left .logo a img.noel{position:relative;top:-2px;-o-object-fit:contain;object-fit:contain}.header-inner__left .logo.dtnewyear a{max-height:20px}.header-inner__left .logo.dtnewyear svg,.header-inner__left .logo.dtnewyear img{height:46px;position:relative;top:-10px;-o-object-fit:contain;object-fit:contain}.header-inner__left .navigation{width:24px;height:24px;padding:0;border:0;background:transparent none;display:flex;align-items:center;justify-content:center}.header-inner__left .navigation svg.close{display:none}.header-inner__left .navigation.show svg.more{display:none}.header-inner__left .navigation.show svg.close{display:block}.header-inner__left .category{display:flex;align-items:center;font-size:14px;font-weight:500;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif}.header-inner__left .category:not(:nth-child(3)){margin-left:6px}.header-inner__left .category svg{position:relative;top:1px;margin-right:6px}.header-inner__right{display:flex;align-items:center}.header-inner__right>*:not(:first-child){margin-left:32px;position:relative}.header-inner__right>*:not(:first-child)::before{content:"";width:0;height:22px;position:absolute;top:50%;left:-12px;border-left:1px solid #e6e8e9;transform:translateY(-50%)}.header-inner__right .icon-notify{margin-left:10px}.header-inner__right .icon-notify::before{content:none}.header-inner__right .search-link{margin:0}.header-inner__right .user-info{font-size:12px}.header-inner__right .user-info>svg{width:24px;margin:0}.header-inner__right .user-info .user-infos{top:35px}.header-inner__right .user-info .user-comment{top:67px}.header-inner__right .user-info .user-your-news{top:99px}.header-inner__right .user-info .user-news{top:131px}.header-inner__right .user-info .user-saved{top:163px}.header-inner__right .user-info .user-logout{top:195px}.header-inner__right .user-avatar{margin:0 0 0 8px}.header-inner__right .user-avatar .avatar{width:24px;height:24px;font-size:11px}.header-inner__right .user-logout{top:50px}.header-inner__right .user-logout::before{right:28px}.header-inner__right .header-account{font-size:12px}.header-inner__right .header-account svg{width:20px;margin:0 0 0 8px}.header .nav-full{padding-top:36px}.wc-header{position:sticky;top:0;z-index:9;display:flex;align-items:center;justify-content:space-between;min-height:60px}.wc-header::before{background:#831432 url(https://cdnweb.dantri.com.vn/dist/0012af0c37b17abfb3d4.jpg) no-repeat center/cover;box-shadow:0 0 5px rgba(0,0,0,.4)}.wc-header .logo{line-height:0;margin:0}.wc-header .logo a{display:inline-block;line-height:0}.wc-navigation{margin:0;padding:0;list-style:none;display:flex;align-items:center}.wc-navigation h1,.wc-navigation h2{margin:0}.wc-navigation a{color:#fff;display:flex;align-items:center;height:60px;font-size:13px;font-weight:600;font-family:"SVN Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;text-transform:uppercase;position:relative}.wc-navigation a::after{content:"";position:absolute;left:0;bottom:4px;width:100%;height:0;border-top:2px solid transparent}.wc-navigation li:not(:first-child){margin-left:32px}.wc-navigation li.active a:after,.wc-navigation li:hover a:after{border-top-color:#31dcca}@font-face{font-family:"Fraunces";src:url(https://cdnweb.dantri.com.vn/dist/5830bb1d2aafed3df6e4.eot);src:url(https://cdnweb.dantri.com.vn/dist/5830bb1d2aafed3df6e4.eot?#iefix) format("embedded-opentype"),url(https://cdnweb.dantri.com.vn/dist/a7a17f7eaea56dfffcf0.woff2) format("woff2"),url(https://cdnweb.dantri.com.vn/dist/b73ecaafcabfd1936761.woff) format("woff");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Fraunces";src:url(https://cdnweb.dantri.com.vn/dist/c5d87a0dc4458727b6f0.eot);src:url(https://cdnweb.dantri.com.vn/dist/c5d87a0dc4458727b6f0.eot?#iefix) format("embedded-opentype"),url(https://cdnweb.dantri.com.vn/dist/e80c871396d64e4a4ad6.woff2) format("woff2"),url(https://cdnweb.dantri.com.vn/dist/390eda533f222a8ffd23.woff) format("woff");font-weight:600;font-style:italic;font-display:swap}.lunar-parent .lunar-header .logo svg path:nth-child(3),.lunar-parent .lunar-header .logo svg path:nth-child(4),.lunar-parent .lunar-header .logo svg path:nth-child(5){fill:#fff}.lunar-parent .lunar-header .lunar-navigation a{color:#fff}.lunar-child .lunar-default{margin-top:0;padding-top:0;border-top:0}.lunar-header{padding-top:40px;padding-bottom:40px;display:grid;grid-template-columns:80px calc(100% - 120px);grid-gap:40px;align-items:center;position:relative;z-index:1}.lunar-header .logo{margin:0}.lunar-navigation{margin:0;padding:0;list-style:none;justify-self:flex-end}.lunar-navigation::after{content:"";display:block;clear:both}.lunar-navigation li{float:left}.lunar-navigation li:not(:first-child){margin:0 0 0 36px}.lunar-navigation li.active a{color:#cd3038}.lunar-navigation a{font-family:"Fraunces",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",serif;font-weight:600;font-size:18px;line-height:22px;color:#292d32}.lunar-navigation a:hover{color:#cd3038}</style><style>.article-thumb a{position:relative;line-height:0;display:block;padding:0 0 66.66667%;overflow:hidden}.article-thumb img{width:100%;height:100%;position:absolute;top:0;left:0}.article-title{font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-weight:600}.article-title.text-ico a::before{content:attr(data-label);display:inline-block;color:#fff;padding:3px 4px 1px;margin:0 5px 0 0;font-weight:500;font-size:11px;line-height:15px;font-family:"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-style:normal;text-transform:uppercase;border-radius:4px;position:relative;top:-1px}.article-title.orange a::before{background:#f59e0b none}.article-title.red a::before{background:#b91c1c none}.article-excerpt{font-size:14px;line-height:22px;color:#888}.article-excerpt a{color:#888}.article-ico{position:absolute;left:6px;bottom:6px;display:flex;align-items:center;font-weight:500;font-size:12px;line-height:18px;color:#fff}.article-ico i{width:25px;height:25px;display:block;border-radius:50%;background:transparent none center/100% 100%}.article-ico i.video{background-image:url(https://cdnweb.dantri.com.vn/dist/ac210c0e1c9b4668bb35.svg);margin-right:4px}.article-ico i.photo{background-image:url(https://cdnweb.dantri.com.vn/dist/82b0481440549a44c89c.svg)}.article-ico i.album{background-image:url(https://cdnweb.dantri.com.vn/dist/d2e23de7990a9a8e2901.svg)}.video-blocked{padding:25% 10%;display:flex;align-items:center;justify-content:center;background:#222;color:#fff;text-align:center;cursor:not-allowed}.grid.list{margin:32px 0 0;display:grid;grid-template-columns:calc(100% - 380px) 300px;grid-gap:80px}.grid.list .article.list .article-item{display:grid;grid-template-columns:252px calc(100% - 272px);grid-gap:20px}.grid.list .article.list .article-item:not(:nth-child(1)){margin:27px 0 0}.grid.list .article.list .article-title{margin:0;font-size:20px;line-height:28px}.grid.list .article.list .article-excerpt{margin:6px 0 0}.grid.list .article.sidebar{padding:14px 0 0;border-top:1px solid #eee}.grid.list .article.sidebar .title{margin:0 0 24px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-size:16px;line-height:20px;font-weight:600;text-transform:uppercase;color:#222}.grid.list .article.sidebar .article-item:nth-child(2) .article-title{margin:16px 0 0;font-size:18px;line-height:25px}.grid.list .article.sidebar .article-item:not(:nth-child(2)){margin:20px 0 0;padding:20px 0 0;border-top:1px solid #eee;display:grid;grid-template-columns:calc(100% - 104px) 90px;grid-gap:14px}.grid.list .article.sidebar .article-item:not(:nth-child(2)) .article-thumb{order:2}.grid.list .article.sidebar .article-item:not(:nth-child(2)) .article-title{margin:0;font-size:14px;line-height:20px}.grid.list .article.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:22px}.grid.list .article.grid .article-item{display:block;grid-template-columns:100%;grid-gap:0}.grid.list .article.grid .article-item:not(:nth-child(1)){margin:0}.grid.list .article.grid .article-title{margin:8px 0 0;font-size:16px;line-height:22px}.grid.list .article .native-wrap{margin:27px 0 0;padding:27px 0;border-top:1px solid #eee;border-bottom:1px solid #eee}.grid.list .pagination{margin:29px 0 0;padding:21px 0 0;border-top:1px solid #eee;display:flex;align-items:center;justify-content:center}.grid.list .pagination .page-item{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border:1px solid #e6e8e9;border-radius:8px;background:#fff none;color:#25282b;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-weight:500;font-size:16px}.grid.list .pagination .page-item:not(:first-child){margin-left:8px}.grid.list .pagination .page-item.active,.grid.list .pagination .page-item:hover{background:#0f6c32 none;border:1px solid #0f6c32;color:#fff}.search-box{position:relative}.search-box-input{width:100%;height:36px;margin-bottom:10px;border:1px solid #ccc;border-radius:0;padding:9px 36px 7px 16px;outline:0}.search-box-button{position:absolute;top:0;right:0;padding:0;width:36px;height:36px;border:0;background:transparent none;border-radius:50%;cursor:pointer;overflow:hidden;color:#4d4d4d}.search-box-button i{font-size:28px}.title-search{margin:0;font-size:24px;color:#1a1a1a;font-weight:400}.title-search.mt-30{margin-top:30px}.title-tag h3{display:inline-block;font-size:20px;margin:0}.filter-row{margin-bottom:24px;display:grid;grid-gap:30px;grid-template-columns:repeat(3,1fr)}.filter-label{display:block;margin:0 0 4px;color:#666}.filter-select-item{padding:8px 36px 8px 10px;height:36px;width:100%;border:1px solid #cbd5e1;border-radius:4px;background:#fff url(https://cdnweb.dantri.com.vn/dist/42ca0795ae3f2df9651b.svg) no-repeat top 10px right 10px/16px 16px;color:gray;-webkit-appearance:none;-moz-appearance:none;outline:0}h1.title-tag{margin-bottom:24px;font-size:20px;line-height:28px;font-weight:700}h2.des-tag{color:#888;font-weight:400;font-size:17px;line-height:22px;margin-bottom:24px}.search-thumb{position:relative}.search-thumb a::before{content:"";height:100%;width:100%;display:block;background-repeat:no-repeat;position:absolute;background:linear-gradient(180deg,rgba(0,0,0,0) 52.66%,rgba(34,34,34,0.75) 100%);z-index:2}.search-ico{padding:4px 8px 4px 4px;background:rgba(0,0,0,.5);border-radius:234px;width:-moz-max-content;width:max-content;height:32px;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:15px;color:#fff;z-index:3}</style></head><body class="searchv2"><div data-module="google-one-tap"></div><div id="bannerMasthead" class="ads-masthead"><style>.mdbl_17{min-height:250px}</style><div id="desktop-top-page" class="mdbl_17"></div></div><header class="header container bg-wrap"><div class="header-top flex-jcb have-users-onboarding"><div class="header-logo flex-jcc"><a aria-label="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7" href="/"><img alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7" class="config" height="46" src="https://cdnphoto.dantri.com.vn/9O4JtWt_uDZY3w-Ubupzh57mhpw=/2023/12/27/artboard-white2x-8-1703643381239.png" width="124"></a></div><div class="cms-banner dt-w-[76px] dt-h-[26px]" data-id="1268" data-position="100"></div><div class="header-area flex-jcb"><a class="international flex-jcc" target="_blank" rel="nofollow noopener" href="https://fica.dantri.com.vn"><img alt="Fica" height="26" src="https://cdnweb.dantri.com.vn/dist/static-fica-logo.1-0-1.2435f041ebf869641575.jpg" width="26"> Fica</a> <a class="international flex-jcc" target="_blank" rel="nofollow noopener" href="https://dtinews.dantri.com.vn"><img alt="DTiNews" height="26" src="https://cdnweb.dantri.com.vn/dist/static-avatar-default.1-0-1.b474c6ca2d1abee5b89b.png" width="26"> DTiNews</a> <a class="international flex-jcc" target="_blank" rel="nofollow noopener" href="https://dansinh.dantri.com.vn"><img alt="DTiNews" height="26" src="https://cdnphoto.dantri.com.vn/gy93LBu-AUplLEx4zg1J5f7E4k0=/thumb_w/1088/2023/11/10/icon-1699586452696.png" srcset="https://cdnphoto.dantri.com.vn/pvIy1MyIlx6n0DygDfyadSu9VKo=/thumb_w/1360/2023/11/10/icon-1699586452696.png 2x, https://cdnphoto.dantri.com.vn/gy93LBu-AUplLEx4zg1J5f7E4k0=/thumb_w/1088/2023/11/10/icon-1699586452696.png 1x" width="26"> Dân sinh</a><div data-module="weather-header" data-date_time_today="Thứ 6, 19/01/2024" class="weather-placeholder"></div><div class="auth-placeholder" data-module="authen-header"></div><div data-module="account-notification"></div><div data-module="user-onboarding" data-is-have-parent="1" data-element-depend=".have-users-onboarding" data-type="normal" data-width="291" data-direction="top_52" data-side="right_366" data-cookie-name="menu_home_v3" data-is-show="1" data-direction-triangle="top_-14" data-side-triangle="left_230" data-rotate-triangle="0" data-padding="12px 10px 12px 10px" data-margin-title="24px 0" data-url="/tai-khoan.htm" data-tit="Đăng ký tài khoản" data-des="Đăng ký tài khoản để trải nghiệm tuyến nội dung dành riêng cho bạn" data-text-button="Đăng ký ngay!" data-register="true"></div><a class="search-link" href="/tim-kiem.htm"><svg aria-labelledby="svg-search-title" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="svg-search-title">Tìm kiếm</title><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21 20.9999L16.65 16.6499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a></div></div></header><nav role="navigation" aria-label="menu" class="menu container bg-wrap"><ol class="menu-wrap bg-wrap"><li class="home"><a aria-label="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7" href="/"><svg aria-labelledby="svg-home" aria-hidden="true" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="svg-home">Tìm kiếm</title><path d="M16.7334 22.6665H15.2667C14.9353 22.6665 14.6667 22.3979 14.6667 22.0665V19.2665C14.6667 18.9351 14.9353 18.6665 15.2667 18.6665H16.7334C17.0647 18.6665 17.3334 18.9351 17.3334 19.2665V22.0665C17.3334 22.3979 17.0647 22.6665 16.7334 22.6665Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 12.6665L16 5.33317L28 12.6665" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M25.3334 17.3335V26.0668C25.3334 26.3982 25.0647 26.6668 24.7334 26.6668H7.26669C6.93532 26.6668 6.66669 26.3982 6.66669 26.0668V17.3335" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a></li><li><a href="/tin-moi-nhat.htm">Mới nhất</a></li><li><a href="https://dantri.com.vn/video-page.htm">Video</a></li><li class="has-child"><a href="/xa-hoi.htm">Xã hội</a><ol class="submenu"><li><a href="/xa-hoi/chinh-tri.htm">Chính trị</a></li><li><a href="/xa-hoi/hoc-tap-bac.htm">Học tập Bác</a></li><li><a href="/collection/khat-vong-hung-cuong-4107.htm">Khát vọng hùng cường</a></li><li><a href="/xa-hoi/moi-truong.htm">Môi trường</a></li><li><a href="/xa-hoi/giao-thong.htm">Giao thông</a></li><li><a href="/xa-hoi/nong-tren-mang.htm">Nóng trên mạng</a></li><li><a href="https://sangkienatgt.dantri.com.vn/">Sáng kiến an toàn giao thông</a></li></ol></li><li class="has-child"><a href="/the-gioi.htm">Thế giới</a><ol class="submenu"><li><a href="/the-gioi/quan-su.htm">Quân sự</a></li><li><a href="/the-gioi/phan-tich-binh-luan.htm">Phân tích - Bình luận</a></li><li><a href="/the-gioi/the-gioi-do-day.htm">Thế giới đó đây</a></li><li><a href="/the-gioi/kieu-bao.htm">Kiều bào</a></li></ol></li><li class="has-child"><a href="/kinh-doanh.htm">Kinh doanh</a><ol class="submenu"><li><a href="/kinh-doanh/tai-chinh.htm">Tài chính</a></li><li><a href="/kinh-doanh/chung-khoan.htm">Chứng khoán</a></li><li><a href="/kinh-doanh/doanh-nghiep.htm">Doanh nghiệp</a></li><li><a href="/kinh-doanh/khoi-nghiep.htm">Khởi nghiệp</a></li><li><a href="/kinh-doanh/tieu-dung.htm">Tiêu dùng</a></li><li><a href="/kinh-doanh/tiet-kiem-dien.htm">Tiết kiệm điện</a></li><li><a href="/kinh-doanh/amaccao-doanh-nghiep-tien-phong.htm">Amaccao - Doanh nghiệp tiên phong</a></li><li><a href="/kinh-doanh/thanh-toan-thong-minh.htm">Thanh toán thông minh</a></li></ol></li><li class="has-child"><a href="/bat-dong-san.htm">Bất động sản</a><ol class="submenu"><li><a href="/bat-dong-san/du-an.htm">Dự án</a></li><li><a href="/bat-dong-san/thi-truong.htm">Thị trường</a></li><li><a href="/bat-dong-san/nha-dat.htm">Nhà đất</a></li><li><a href="/bat-dong-san/nhip-song-do-thi.htm">Nhịp sống đô thị</a></li><li><a href="/bat-dong-san/song-xanh.htm">Sống xanh</a></li><li><a href="/bat-dong-san/noi-that.htm">Nội thất</a></li></ol></li><li class="has-child"><a href="/the-thao.htm">Thể thao</a><ol class="submenu"><li><a href="/the-thao/bong-da-trong-nuoc.htm">Bóng đá trong nước</a></li><li><a href="/the-thao/bong-da-chau-au.htm">Bóng đá Châu Âu</a></li><li><a href="/the-thao/tennis.htm">Tennis</a></li><li><a href="/the-thao/golf.htm">Golf</a></li><li><a href="/the-thao/vo-thuat.htm">Võ thuật</a></li><li><a href="/the-thao/cac-mon-the-thao-khac.htm">Các môn Thể thao khác</a></li><li><a href="/the-thao/champions-league.htm">Champions League</a></li><li><a href="/the-thao/hau-truong.htm">Hậu trường</a></li><li><a href="/the-thao/lich-thi-dau.htm">Lịch thi đấu</a></li></ol></li><li class="has-child"><a href="/lao-dong-viec-lam.htm">Việc làm</a><ol class="submenu"><li><a href="/lao-dong-viec-lam/chinh-sach.htm">Chính sách</a></li><li><a href="/lao-dong-viec-lam/lam-giau.htm">Làm giàu</a></li><li><a href="/lao-dong-viec-lam/chuyen-nghe.htm">Chuyện nghề</a></li><li><a href="/lao-dong-viec-lam/nhan-luc-moi.htm">Nhân lực mới</a></li></ol></li><li class="has-child"><a href="/tam-long-nhan-ai.htm">Nhân ái</a><ol class="submenu"><li><a href="/tam-long-nhan-ai/danh-sach-ung-ho.htm">Danh sách ủng hộ</a></li><li><a href="/tam-long-nhan-ai/danh-sach-ket-chuyen.htm">Danh sách kết chuyển</a></li><li><a href="/tam-long-nhan-ai/hoan-canh.htm">Hoàn cảnh</a></li></ol></li><li class="has-child"><a href="/suc-khoe.htm">Sức khỏe</a><ol class="submenu"><li><a href="/suc-khoe/ung-thu.htm">Ung thư</a></li><li><a href="/suc-khoe/song-khoe.htm">Sống khỏe</a></li><li><a href="/suc-khoe/dich-vu-y-te-quoc-te.htm">Dịch vụ y tế quốc tế</a></li><li><a href="/suc-khoe/kien-thuc-gioi-tinh.htm">Kiến thức giới tính</a></li><li><a href="/suc-khoe/tu-van.htm">Tư vấn</a></li><li><a href="/suc-khoe/khoe-dep.htm">Khỏe đẹp</a></li><li><a href="/suc-khoe/suc-khoe-chu-dong.htm">Sức khỏe chủ động</a></li></ol></li><li class="has-child"><a href="/van-hoa.htm">Văn hóa</a><ol class="submenu"><li><a href="/van-hoa/sach-hay.htm">Sách hay</a></li><li><a href="/van-hoa/doi-song-van-hoa.htm">Đời sống văn hóa</a></li><li><a href="/van-hoa/dien-anh.htm">Điện ảnh</a></li><li><a href="/van-hoa/am-nhac.htm">Âm nhạc</a></li><li><a href="/tet-2024.htm">Tết 2024</a></li><li><a href="/van-hoa/hat-giong-tam-hon.htm">Hạt giống tâm hồn</a></li></ol></li><li class="has-child"><a href="/giai-tri.htm">Giải trí</a><ol class="submenu"><li><a href="/giai-tri/hau-truong.htm">Hậu trường</a></li><li><a href="/giai-tri/thoi-trang.htm">Thời trang</a></li><li><a href="/giai-tri/tvshow.htm">TVshow</a></li></ol></li><li class="has-child"><a href="/o-to-xe-may.htm">Xe &#x2B;&#x2B;</a><ol class="submenu"><li><a href="/o-to-xe-may/thi-truong-xe.htm">Thị trường xe</a></li><li><a href="/o-to-xe-may/xe-dien.htm">Xe điện</a></li><li><a href="/o-to-xe-may/danh-gia.htm">Đánh giá</a></li><li><a href="/o-to-xe-may/cong-dong-xe.htm">Cộng đồng xe</a></li><li><a href="/o-to-xe-may/kinh-nghiem-tu-van.htm">Kinh nghiệm - Tư vấn</a></li><li><a href="https://dantri.com.vn/o-to-xe-may/bang-gia-o-to.htm">Bảng giá ô tô</a></li></ol></li><li class="has-child"><a href="/suc-manh-so.htm">Sức mạnh số</a><ol class="submenu"><li><a href="/suc-manh-so/san-pham.htm">Sản phẩm</a></li><li><a href="/suc-manh-so/di-dong-vien-thong.htm">Di động - Viễn thông</a></li><li><a href="/suc-manh-so/phan-mem-bao-mat.htm">Phần mềm - Bảo mật</a></li><li><a href="/suc-manh-so/cong-dong-mang.htm">Cộng đồng mạng</a></li></ol></li><li class="has-child"><a href="/giao-duc.htm">Giáo dục</a><ol class="submenu"><li><a href="/giao-duc/goc-phu-huynh.htm">Góc phụ huynh</a></li><li><a href="/giao-duc/khuyen-hoc.htm">Khuyến học</a></li><li><a href="/giao-duc/guong-sang.htm">Gương sáng</a></li><li><a href="/giao-duc/giao-duc-nghe-nghiep.htm">Giáo dục - Nghề nghiệp</a></li><li><a href="/giao-duc/du-hoc.htm">Du học</a></li><li><a href="/giao-duc/tuyen-sinh.htm">Tuyển sinh</a></li></ol></li><li class="has-child"><a href="/an-sinh.htm">An sinh</a><ol class="submenu"><li><a href="/an-sinh/chuyen-doi.htm">Chuyện đời</a></li><li><a href="/an-sinh/dan-sinh.htm">Dân sinh</a></li><li><a href="/an-sinh/chuyen-dong.htm">Chuyển động</a></li></ol></li><li class="has-child"><a href="/phap-luat.htm">Pháp luật</a><ol class="submenu"><li><a href="/phap-luat/ho-so-vu-an.htm">Hồ sơ vụ án</a></li><li><a href="/phap-luat/phap-dinh.htm">Pháp đình</a></li></ol></li><li class="menu-more"><svg aria-hidden="true" class="more" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3333 17.3332C26.0697 17.3332 26.6667 16.7362 26.6667 15.9998C26.6667 15.2635 26.0697 14.6665 25.3333 14.6665C24.597 14.6665 24 15.2635 24 15.9998C24 16.7362 24.597 17.3332 25.3333 17.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M16 17.3332C16.7364 17.3332 17.3333 16.7362 17.3333 15.9998C17.3333 15.2635 16.7364 14.6665 16 14.6665C15.2636 14.6665 14.6667 15.2635 14.6667 15.9998C14.6667 16.7362 15.2636 17.3332 16 17.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.66667 17.3332C7.40305 17.3332 8 16.7362 8 15.9998C8 15.2635 7.40305 14.6665 6.66667 14.6665C5.93029 14.6665 5.33334 15.2635 5.33334 15.9998C5.33334 16.7362 5.93029 17.3332 6.66667 17.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg> <svg aria-hidden="true" class="close" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63621 2.6665 2.66667 8.63604 2.66667 15.9998C2.66667 23.3636 8.63621 29.3332 16 29.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M20 12L12 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12L20 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></li></ol><nav class="nav-full bg-wrap"><div class="nf-wrap container"><ol class="nf-menu"><li><a href="/xa-hoi.htm">Xã hội</a><ol class="nf-submenu"><li><a href="/xa-hoi/chinh-tri.htm">Chính trị</a></li><li><a href="/xa-hoi/hoc-tap-bac.htm">Học tập Bác</a></li><li><a href="/collection/khat-vong-hung-cuong-4107.htm">Khát vọng hùng cường</a></li><li><a href="/xa-hoi/moi-truong.htm">Môi trường</a></li><li><a href="/xa-hoi/giao-thong.htm">Giao thông</a></li><li><a href="/xa-hoi/nong-tren-mang.htm">Nóng trên mạng</a></li><li><a href="https://sangkienatgt.dantri.com.vn/">Sáng kiến an toàn giao thông</a></li></ol></li><li><a href="/the-gioi.htm">Thế giới</a><ol class="nf-submenu"><li><a href="/the-gioi/quan-su.htm">Quân sự</a></li><li><a href="/the-gioi/phan-tich-binh-luan.htm">Phân tích - Bình luận</a></li><li><a href="/the-gioi/the-gioi-do-day.htm">Thế giới đó đây</a></li><li><a href="/the-gioi/kieu-bao.htm">Kiều bào</a></li></ol></li><li><a href="/kinh-doanh.htm">Kinh doanh</a><ol class="nf-submenu"><li><a href="/kinh-doanh/tai-chinh.htm">Tài chính</a></li><li><a href="/kinh-doanh/chung-khoan.htm">Chứng khoán</a></li><li><a href="/kinh-doanh/doanh-nghiep.htm">Doanh nghiệp</a></li><li><a href="/kinh-doanh/khoi-nghiep.htm">Khởi nghiệp</a></li><li><a href="/kinh-doanh/tieu-dung.htm">Tiêu dùng</a></li><li><a href="/kinh-doanh/tiet-kiem-dien.htm">Tiết kiệm điện</a></li><li><a href="/kinh-doanh/amaccao-doanh-nghiep-tien-phong.htm">Amaccao - Doanh nghiệp tiên phong</a></li><li><a href="/kinh-doanh/thanh-toan-thong-minh.htm">Thanh toán thông minh</a></li></ol></li><li><a href="/bat-dong-san.htm">Bất động sản</a><ol class="nf-submenu"><li><a href="/bat-dong-san/du-an.htm">Dự án</a></li><li><a href="/bat-dong-san/thi-truong.htm">Thị trường</a></li><li><a href="/bat-dong-san/nha-dat.htm">Nhà đất</a></li><li><a href="/bat-dong-san/nhip-song-do-thi.htm">Nhịp sống đô thị</a></li><li><a href="/bat-dong-san/song-xanh.htm">Sống xanh</a></li><li><a href="/bat-dong-san/noi-that.htm">Nội thất</a></li></ol></li><li><a href="/the-thao.htm">Thể thao</a><ol class="nf-submenu"><li><a href="/the-thao/bong-da-trong-nuoc.htm">Bóng đá trong nước</a></li><li><a href="/the-thao/bong-da-chau-au.htm">Bóng đá Châu Âu</a></li><li><a href="/the-thao/tennis.htm">Tennis</a></li><li><a href="/the-thao/golf.htm">Golf</a></li><li><a href="/the-thao/vo-thuat.htm">Võ thuật</a></li><li><a href="/the-thao/cac-mon-the-thao-khac.htm">Các môn Thể thao khác</a></li><li><a href="/the-thao/champions-league.htm">Champions League</a></li><li><a href="/the-thao/hau-truong.htm">Hậu trường</a></li><li><a href="/the-thao/lich-thi-dau.htm">Lịch thi đấu</a></li></ol></li><li><a href="/lao-dong-viec-lam.htm">Việc làm</a><ol class="nf-submenu"><li><a href="/lao-dong-viec-lam/chinh-sach.htm">Chính sách</a></li><li><a href="/lao-dong-viec-lam/lam-giau.htm">Làm giàu</a></li><li><a href="/lao-dong-viec-lam/chuyen-nghe.htm">Chuyện nghề</a></li><li><a href="/lao-dong-viec-lam/nhan-luc-moi.htm">Nhân lực mới</a></li></ol></li><li><a href="/tam-long-nhan-ai.htm">Nhân ái</a><ol class="nf-submenu"><li><a href="/tam-long-nhan-ai/danh-sach-ung-ho.htm">Danh sách ủng hộ</a></li><li><a href="/tam-long-nhan-ai/danh-sach-ket-chuyen.htm">Danh sách kết chuyển</a></li><li><a href="/tam-long-nhan-ai/hoan-canh.htm">Hoàn cảnh</a></li></ol></li><li><a href="/suc-khoe.htm">Sức khỏe</a><ol class="nf-submenu"><li><a href="/suc-khoe/ung-thu.htm">Ung thư</a></li><li><a href="/suc-khoe/song-khoe.htm">Sống khỏe</a></li><li><a href="/suc-khoe/dich-vu-y-te-quoc-te.htm">Dịch vụ y tế quốc tế</a></li><li><a href="/suc-khoe/kien-thuc-gioi-tinh.htm">Kiến thức giới tính</a></li><li><a href="/suc-khoe/tu-van.htm">Tư vấn</a></li><li><a href="/suc-khoe/khoe-dep.htm">Khỏe đẹp</a></li><li><a href="/suc-khoe/suc-khoe-chu-dong.htm">Sức khỏe chủ động</a></li></ol></li><li><a href="/van-hoa.htm">Văn hóa</a><ol class="nf-submenu"><li><a href="/van-hoa/sach-hay.htm">Sách hay</a></li><li><a href="/van-hoa/doi-song-van-hoa.htm">Đời sống văn hóa</a></li><li><a href="/van-hoa/dien-anh.htm">Điện ảnh</a></li><li><a href="/van-hoa/am-nhac.htm">Âm nhạc</a></li><li><a href="/tet-2024.htm">Tết 2024</a></li><li><a href="/van-hoa/hat-giong-tam-hon.htm">Hạt giống tâm hồn</a></li></ol></li><li><a href="/giai-tri.htm">Giải trí</a><ol class="nf-submenu"><li><a href="/giai-tri/hau-truong.htm">Hậu trường</a></li><li><a href="/giai-tri/thoi-trang.htm">Thời trang</a></li><li><a href="/giai-tri/tvshow.htm">TVshow</a></li></ol></li><li><a href="/o-to-xe-may.htm">Xe &#x2B;&#x2B;</a><ol class="nf-submenu"><li><a href="/o-to-xe-may/thi-truong-xe.htm">Thị trường xe</a></li><li><a href="/o-to-xe-may/xe-dien.htm">Xe điện</a></li><li><a href="/o-to-xe-may/danh-gia.htm">Đánh giá</a></li><li><a href="/o-to-xe-may/cong-dong-xe.htm">Cộng đồng xe</a></li><li><a href="/o-to-xe-may/kinh-nghiem-tu-van.htm">Kinh nghiệm - Tư vấn</a></li><li><a href="https://dantri.com.vn/o-to-xe-may/bang-gia-o-to.htm">Bảng giá ô tô</a></li></ol></li><li><a href="/suc-manh-so.htm">Sức mạnh số</a><ol class="nf-submenu"><li><a href="/suc-manh-so/san-pham.htm">Sản phẩm</a></li><li><a href="/suc-manh-so/di-dong-vien-thong.htm">Di động - Viễn thông</a></li><li><a href="/suc-manh-so/phan-mem-bao-mat.htm">Phần mềm - Bảo mật</a></li><li><a href="/suc-manh-so/cong-dong-mang.htm">Cộng đồng mạng</a></li></ol></li><li><a href="/giao-duc.htm">Giáo dục</a><ol class="nf-submenu"><li><a href="/giao-duc/goc-phu-huynh.htm">Góc phụ huynh</a></li><li><a href="/giao-duc/khuyen-hoc.htm">Khuyến học</a></li><li><a href="/giao-duc/guong-sang.htm">Gương sáng</a></li><li><a href="/giao-duc/giao-duc-nghe-nghiep.htm">Giáo dục - Nghề nghiệp</a></li><li><a href="/giao-duc/du-hoc.htm">Du học</a></li><li><a href="/giao-duc/tuyen-sinh.htm">Tuyển sinh</a></li></ol></li><li><a href="/an-sinh.htm">An sinh</a><ol class="nf-submenu"><li><a href="/an-sinh/chuyen-doi.htm">Chuyện đời</a></li><li><a href="/an-sinh/dan-sinh.htm">Dân sinh</a></li><li><a href="/an-sinh/chuyen-dong.htm">Chuyển động</a></li></ol></li><li><a href="/phap-luat.htm">Pháp luật</a><ol class="nf-submenu"><li><a href="/phap-luat/ho-so-vu-an.htm">Hồ sơ vụ án</a></li><li><a href="/phap-luat/phap-dinh.htm">Pháp đình</a></li></ol></li><li><a href="/du-lich.htm">Du lịch</a><ol class="nf-submenu"><li><a href="/du-lich/tin-tuc.htm">Tin tức</a></li><li><a href="/du-lich/kham-pha.htm">Khám phá</a></li><li><a href="/du-lich/mon-ngon-diem-dep.htm">Món ngon - Điểm đẹp</a></li><li><a href="/du-lich/tour-hay-khuyen-mai.htm">Tour hay - Khuyến mại</a></li><li><a href="/du-lich/video-anh.htm">Video - Ảnh</a></li></ol></li><li><a href="/doi-song.htm">Đời sống</a><ol class="nf-submenu"><li><a href="/doi-song/cong-dong.htm">Cộng đồng</a></li><li><a href="/doi-song/nha-dep.htm">Nhà đẹp</a></li><li><a href="/doi-song/thuong-luu.htm">Thượng lưu</a></li><li><a href="/doi-song/chuyen-la.htm">Chuyện lạ</a></li><li><a href="/doi-song/cho-online.htm">Chợ online</a></li></ol></li><li><a href="/tinh-yeu-gioi-tinh.htm">Tình yêu</a><ol class="nf-submenu"><li><a href="/tinh-yeu-gioi-tinh/chuyen-cua-toi.htm">Chuyện của tôi</a></li><li><a href="/tinh-yeu-gioi-tinh/gia-dinh.htm">Gia đình</a></li><li><a href="/tinh-yeu-gioi-tinh/tinh-yeu.htm">Tình yêu</a></li></ol></li></ol><div class="nf-sidebar dt-pt-5"><div class="item cols-2"><ol class="col"><li><a href="/dmagazine.htm">Dmagazine</a></li><li><a href="/photo-story.htm">Photo Story</a></li><li><a href="/infographic.htm">Infographic</a></li><li><a href="/dnews.htm">DNews</a></li></ol><ol class="col"><li><a href="/nhip-song-tre.htm">Nhịp sống trẻ</a></li><li><a href="/khoa-hoc-cong-nghe.htm">Khoa học</a></li><li><a href="/tam-diem.htm">Tâm điểm</a></li><li><a href="/ban-doc.htm">Bạn đọc</a></li></ol></div><div class="item line"></div><div class="item cols-2"><ol class="col"><li><a class="uppercase" href="/su-kien.htm">SỰ KIỆN NỔI BẬT</a></li><li><a target="_blank" rel="nofollow noopener" class="uppercase" href="https://dantri.com.vn/video-page.htm">DÂN TRÍ TV</a></li><li><a target="_blank" rel="nofollow noopener" class="uppercase" href="https://tailieu.dantri.com.vn/catalog">MỤC LỤC</a></li></ol><ol class="col"><li><a target="_blank" rel="nofollow noopener" class="uppercase" href="https://fica.dantri.com.vn/">FICA</a></li><li><a target="_blank" rel="nofollow noopener" class="uppercase" href="https://dtinews.dantri.com.vn/en/index.html">DTINEWS</a></li><li><a target="_blank" rel="nofollow noopener" class="uppercase" href="https://dansinh.dantri.com.vn/">DÂN SINH</a></li></ol></div><div class="item line"></div><div class="item"><ol class="col"><li><a class="email" href="/lien-he.htm"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M16.5 4.5L9 9.75L1.5 4.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg> Liên hệ toà soạn</a></li><li><a class="headphone" href="tel:0945540303"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 13.5V9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9V13.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.75 14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H13.5C13.1022 15.75 12.7206 15.592 12.4393 15.3107C12.158 15.0294 12 14.6478 12 14.25V12C12 11.6022 12.158 11.2206 12.4393 10.9393C12.7206 10.658 13.1022 10.5 13.5 10.5H15.75V14.25ZM2.25 14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H4.5C4.89782 15.75 5.27936 15.592 5.56066 15.3107C5.84196 15.0294 6 14.6478 6 14.25V12C6 11.6022 5.84196 11.2206 5.56066 10.9393C5.27936 10.658 4.89782 10.5 4.5 10.5H2.25V14.25Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>0945.54.03.03</a></li></ol></div><div class="social flex-jcc"><label class="social-label">Theo dõi <b>Dân trí</b>:</label><div class="social-list flex-jcc"><a class="facebook" target="_blank" rel="nofollow" href="https://www.facebook.com/baodantridientu">Facebook</a> <a class="youtube" target="_blank" rel="nofollow" href="https://www.youtube.com/@baodantri7941">Youtube</a> <a class="tiktok" target="_blank" rel="nofollow" href="https://vt.tiktok.com/ZSeAnvhnH/">Tiktok</a></div></div></div></div></nav> </nav><main class="body container"><div class="grid list" id="bai-viet"><div class="main"><div class="search-box"><input class="search-box-input" type="text" id="s" name="s" value="" placeholder="Tìm kiếm tin tức" required> <button class="search-box-button flex-jcc" type="submit"> <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21 20.9999L16.65 16.6499" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg> </button></div><div class="title-tag">Có <strong>0</strong> tin tức, video về "<h1></h1>"</div><div class="filter-row"><div class="filter-col"><label class="filter-label">Chuyên mục</label><div class="filter-select"><select class="filter-select-item" name="cateId" id="cateId"><option value="0">Tất cả</option><option value="video">Video</option><option value="20"> Xã hội </option><option value="36"> Thế giới </option><option value="76"> Kinh doanh </option><option value="927"> Bất động sản </option><option value="26"> Thể thao </option><option value="133"> Lao động - Việc làm </option><option value="167"> Tấm lòng nhân ái </option><option value="7"> Sức khỏe </option><option value="730"> Văn hóa </option><option value="23"> Giải trí </option><option value="111"> Ô tô - Xe máy </option><option value="119"> Sức mạnh số </option><option value="25"> Giáo dục </option><option value="1001"> An sinh </option><option value="170"> Pháp luật </option><option value="835"> Du lịch </option><option value="844"> Đời sống </option><option value="130"> Tình yêu - Giới tính </option><option value="135"> Nhịp sống trẻ </option><option value="894"> Khoa học - Công nghệ </option><option value="702"> Tâm điểm </option><option value="202"> Bạn đọc </option><option value="1070"> Dmagazine </option><option value="1096"> Photo Story </option><option value="1071"> Infographic </option><option value="1262"> DNews </option></select></div></div><div class="filter-col"><label class="filter-label">Thời gian</label><div class="filter-select"><select class="filter-select-item" name="date" id="date"><option value="0">Tất cả</option><option value="1">Hôm nay</option><option value="7">1 Tuần trước</option><option value="30">1 Tháng trước</option></select></div></div></div></div><div class="sidebar"><div id="desktop-right-1" class="mdbl start"></div><div id="desktop-right-2" class="mdbl"></div></div></div><div id="desktop-footer" class="mdbl"></div></main><footer class="footer container bg-wrap"><div class="footer-logo flex-jcc"><a href="/"><img alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7" data-src="https://cdnweb.dantri.com.vn/dist/static-logo.1-0-1.742f36bc45f3443d0e59.svg" height="25" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 102 25'%3E%3Crect x='0' y='0' width='100%' height='100%' style='fill:rgb(241, 245, 249)' %2F%3E%3C%2Fsvg%3E" width="102"></a></div><div class="footer-wrap"><div class="footer-col footer-one"><ul class="footer-list"><li>Cơ quan của <b>Bộ Lao động - Thương binh và Xã hội</b></li><li>Tổng biên tập: <b>Phạm Tuấn Anh</b></li><li>Giấy phép hoạt động báo điện tử Dân trí số 411/GP - BTTTT Hà Nội, ngày 31-10-2023.</li><li>Địa chỉ tòa soạn: <b>Nhà 48, ngõ 2 Giảng Võ, Cát Linh, Đống Đa, Hà Nội</b></li><li>Văn phòng đại diện miền Nam: <b>51 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3, TPHCM</b></li><li>Điện thoại: <a href="tel:02437366491">024-3736-6491</a>. Fax: <a href="tel:02437366491">024-3736-6491</a></li><li>Hotline HN: <a href="tel:0973567567">0973-567-567</a>. Hotline TPHCM: <a href="tel:0973567567">0974-567-567</a></li><li>Email: <a href="mailto:info@dantri.com.vn">info@dantri.com.vn</a></li></ul></div><div class="footer-col footer-two"><ul class="footer-list m-0"><li><a href="/rss.htm">RSS</a></li><li><a href="/lien-he.htm">Liên hệ toà soạn</a></li></ul><ul class="footer-list m-0"><li>Liên hệ quảng cáo: <a href="tel:0945540303">0945.54.03.03</a></li><li>Email: <a href="mailto:quangcao@dantri.com.vn">quangcao@dantri.com.vn</a></li><li><a href="/suc-manh-so/privacy-policy-20190514153010649.htm">Chính sách bảo mật dữ liệu cá nhân</a></li></ul></div><div class="footer-col footer-three"><div class="footer-app"><label class="footer-app-label">Đọc báo <b>Dân trí</b> trên mobile:</label><div class="footer-app-ico flex-jcc"><a class="ios" target="_blank" rel="nofollow" href="https://apps.apple.com/vn/app/b%C3%A1o-d%C3%A2n-tr%C3%AD-dantri-com-vn/id1455334618?l=vi">IOS</a> <a class="android" target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=vn.com.dantrinews.android">Android</a></div></div><div class="social flex-jcc"><label class="social-label">Theo dõi Dân trí trên:</label><div class="social-list flex-jcc"><a class="facebook" target="_blank" rel="nofollow" href="https://www.facebook.com/baodantridientu">Facebook</a> <a class="youtube" target="_blank" rel="nofollow" href="https://www.youtube.com/@baodantri7941">Youtube</a> <a class="tiktok" target="_blank" rel="nofollow" href="https://www.tiktok.com/@dantri.com.vn">Tiktok</a></div></div></div></div><div class="copyright">© 2005-2024 Bản quyền thuộc về Báo điện tử Dân trí. Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.</div></footer><script>window.DT_GLOBAL=window.DT_GLOBAL||{};window.DT_GLOBAL.trackingNames={"BANNER":"banners-position_{0}-zone_{1}","HOME_EVENTS":"home-events","HOME_HIGHLIGHTS":"home-highlights","HOME_SPECIALS":"home-specials","HOME_CATEGORY_HIGHLIGHTS":"home-category_highlights","HOME_TOP_SPOTLIGHTS":"home-top-spotlights","HOME_CATEGORY":"home-category_{0}","HOME_SPOTLIGHTS":"home-spotlights","HOME_MEDIA":"home-media","CATEGORY_HIGHLIGHTS":"category-highlights","CATEGORY_TIMELINE":"category-timeline_page_{0}","CATEGORY_CHILDREN":"category-children","CATEGORY_MEDIA":"category-media","CATEGORY_POPULAR":"category-popular","ARTICLE_ACTIONS":"article-actions","ARTICLE_BREADCRUMB":"article-breadcrumb","ARTICLE_TAGS":"article-tags","ARTICLE_RELATED":"article-related","ARTICLE_POPULAR":"article-popular","ARTICLE_RECOMMEND":"article-recommend","ARTICLE_RECOMMEND_2":"article-recommend-2","ARTICLE_CONTENT_IMAGE":"article-content-image","ARTICLE_CONTENT_AUTOLINK":"article-content-autolink","EMBEDBOX_HOME":"embed_box-type_{0}-home","EMBEDBOX_CATEGORY":"embed_box-type_{0}-category_{1}","THREAD_EMBEDBOX_HOME":"thread-embed_box-type_{0}-home","THREAD_EMBEDBOX_CATEGORY":"thread-embed_box-type_{0}-category_{1}","ACCOUNT_YOUR_NEWS":"account-your-news"}
window.DT_GLOBAL.trackingPieces={"BANNER":"banners-banner_{0}","HOME_EVENTS":"home-events-position_{0}","HOME_HIGHLIGHTS":"home-highlights-position_{0}","HOME_SPECIALS":"home-specials-position_{0}","HOME_CATEGORY_HIGHLIGHTS":"home-category_highlights-position_{0}","HOME_TOP_SPOTLIGHTS":"home-top-spotlights-position_{0}","HOME_CATEGORY":"home-category_{0}-position_{1}","HOME_SPOTLIGHTS":"home-spotlights-position_{0}","HOME_MEDIA":"home-media-position_{0}","CATEGORY_HIGHLIGHTS":"category-highlights-position_{0}","CATEGORY_TIMELINE":"category-timeline_page_{0}-position_{1}","CATEGORY_CHILDREN":"category-children-position_{0}_{1}","CATEGORY_MEDIA":"category-media-position_{0}","CATEGORY_POPULAR":"category-popular-position_{0}","ARTICLE_CONTENT_IMAGE":"article-content-image_{0}","ARTICLE_CONTENT_AUTOLINK":"article-content-autolink_{0}","ARTICLE_ACTIONS":"article-actions-{0}","ARTICLE_BREADCRUMB":"article-breadcrumb-position_{0}","ARTICLE_TAGS":"article-tags-position_{0}","ARTICLE_RELATED":"article-related-position_{0}","ARTICLE_POPULAR":"article-popular-position_{0}","ARTICLE_RECOMMEND":"article-recommend-position_{0}","ARTICLE_RECOMMEND_2":"article-recommend-2-position_{0}","EMBEDBOX_HOME":"embed_box-type_{0}-home-article_{1}","EMBEDBOX_CATEGORY":"embed_box-type_{0}-category_{1}-article_{2}","THREAD_EMBEDBOX_HOME":"thread-embed_box-type_{0}-home-thread_{1}","THREAD_EMBEDBOX_CATEGORY":"thread-embed_box-type_{0}-category_{1}-thread_{2}","ACCOUNT_YOUR_NEWS":"account-your-news-id_{0}-position_{1}"};window.DT_GLOBAL.ForceDisableVideoAds=0;window.DT_GLOBAL.vastUrl="https://pubads.g.doubleclick.net/gampad/ads?iu=/21899300285/dtadnetwork/desktop_video&tfcd=0&npa=0&ad_type=audio_video&sz=400x300%7C640x360%7C640x480&ciu_szs=970x90%2C728x90%2C300x50%2C320x50%2C468x60&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&description_url=https://dantri.com.vn/tim-kiem.htm";window.DT_GLOBAL.wConfigCustomLazyLoad=null;</script><script defer src="https://cdnweb.dantri.com.vn/dist/common-1-0-1.53a19d610fb87575493e.js"></script><script type="application/ld+json">{"@context":"http://schema.org","@type":"NewsMediaOrganization","name":"Báo Dân Trí","url":"https://dantri.com.vn","slogan":"Tin tức Việt Nam và quốc tế nóng, nhanh, cập nhật 24h","logo":"https://cdnweb.dantri.com.vn/images/logo.svg","email":"info@dantri.com.vn","additionalType":"https://vi.wikipedia.org/wiki/B%C3%A1o_%C4%91i%E1%BB%87n_t%E1%BB%AD","sameAs":["https://www.facebook.com/baodantridientu","https://vi.wikipedia.org/wiki/D%C3%A2n_tr%C3%AD_(b%C3%A1o)"],"address":{"@type":"PostalAddress","streetAddress":"Nhà 48, ngõ 2 Giảng Võ, Cát Linh, Đống Đa","addressLocality":"Đống Đa","addressRegion":"Hà Nội","addressCountry":"VN","postalCode":"100000"},"contactPoint":[{"@type":"ContactPoint","telephone":"+842437366491","contactOption":"TollFree","contactType":"customer service","areaServed":"VN"}]}</script><script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><script async defer src="https://cdn.dtadnetwork.com/tag/55e5cc4f12e7453ee5e5d52c0bfb6da8.js"></script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM6G9ZN" height="0" width="0" style="display:none;visibility:hidden"> </iframe></noscript></body>	content: "";
	background: url(../images/nt.png) no-repeat;
	width: 103px;
	height: 97px;
	position: absolute;
	top: 10px;
	left: -10px;
}

.news-ticker .item span {
	font-size: 11px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
}

.news-ticker .item p {
	font-size: 10px;
	text-transform: uppercase;
	color: #777;
	margin: 0;
	font-weight:700;
}

.news-ticker .item h4 {
	margin: 0 0 2px !important;
}

#news-ticker .slick-prev {
	width: 20px;
	height: 20px;
	background-color: #fff;
	display: table;
	font-size: 0px;
	position: relative;
	position: absolute;
	right: 6px;
	top: 0;
	border: none;
}

#news-ticker .slick-prev:after {
	content: "\f106";
	font-family: 'FontAwesome';
	font-size: 12px;
	color: #000;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 19px;
	border: solid 1px #777;
	display: table;
	position:absolute;
	top:0;
	left:0;
	right:0;
}

#news-ticker .slick-next {
	width: 20px;
	height: 20px;
	background-color: #fff;
	display: table;
	font-size: 0px;
	position: relative;
	position: absolute;
	right: -15px;
	top: 0;
	border: none;
}

#news-ticker .slick-next:after {
	content: "\f107";
	font-family: 'FontAwesome';
	font-size: 12px;
	color: #000;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 19px;
	border: solid 1px #777;
	display: table;
	position:absolute;
	top:0;
	left:0;
	right:0;
}

#news-ticker .slick-prev:hover:after ,
#news-ticker .slick-next:hover:after {
	color: #e00000;
	border-color: #e00000;
}

/* 5. Homepage Styles */

.b1-aside h5 {
	background: url(../images/sep.png) repeat-x center;
	margin: 0 0 30px;
}

.b1-aside h5 span {
	background: #333333;
	height: 38px;
	line-height: 38px;
	padding: 0;
	width: 130px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 0 auto;
}

.thumb {
	position: relative;
}

.thumb-cat {
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	position: absolute;
	top: 13px;
	left: 0;
	right: 0;
	text-align: center;
}

.bla-content p {
	font-size: 10px;
	text-transform: uppercase;
	color: #777;
	margin: 0;
	padding: 10px 0 5px;
	text-align: center;
	font-weight:700;
	font-weight:700;
}

.bla-content h4 {
	text-align: center;
	margin: 0px;
	/*font-size: 16px;*/
    font-size: 14px;
    line-height: 20px;
	margin: 0;
}

.cat-default {
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
	text-align: center;
	display: table;
	width: 100%;
}

.sep {
	height: 3px;
	background: none repeat scroll 0% 0% #000;
	width: 130px;
	margin: 20px auto;
	border-top: 1px solid #eeeeee;
	border-bottom: 1px solid #eeeeee;
}

.nicescroll-rails {
	position: fixed;
	top: 0px!important;
	right: 0px!important;
	z-index: 999;
	background: rgba(0,0,0,0) !important;
	padding: 0px;
}

.nicescroll-rails div {
	background: rgba(0,0,0,0.4) !important;
}

.nicescroll-rails:before {
	content: "";
	width: 12px;
	background: rgba(255,255,255,0.1) !important;
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
}

.btn1 {
	background: #000000;
	display: table;
	margin: 0 auto;
	height: 26px;
	padding: 0 20px;
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	line-height: 26px;
}

.bla-content.banner {
	margin-top: 33px;
	margin-bottom: 40px;
}

.bla-content.banner img {
	border: 10px solid #e5e5e5;
}

.bl-featured-big {
	position: relative;
	margin-bottom: 30px;
}

.bl-featured-big img {
	width: 100%;
}

.bl-meta {
	position: absolute;
	top: 30px;
	left: 30px;
	color: #fff;
	font-family: Oswald;
	text-transform: uppercase;
}

.bl-meta span i {
	font-size: 18px;
	margin-right: 7px;
}

.bl-meta span {
	margin-bottom: -12px;
	display: table;
}

.bl-info {
	position: absolute;
	bottom: 30px;
	left: 30px;
	color: #fff;
	z-index: 777;
	width: 100%;
	padding-right: 30px;
}

.bl-info span {
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
}

.bl-info h3 {
	margin: 5px 0 15px;
	color: #fff;
	/*font-size: 30px;
	line-height: 30px;*/
    font-size: 24px;
	line-height: 28px;
}

.bl-info h3 a {
	color: #fff;
}

.block-right {
	padding-right: 0;
}

.rmore {
	color: #fff;
	font-family: Playfair Display;
	text-align: right;
	font-size: 12px;
	display: table;
	float: right;
	font-style: italic;
	padding-right: 30px;
}

.rmore i {
	margin-left: 10px;
}

.featured-news .banner {
    clear: both;
    margin-bottom: 20px;
}

.featured-news h5, .cat-blocks h4, .featured-news2 h5 {
	background: url(../images/sep.png) repeat-x center;
	/*margin: 0 0 30px;*/
    margin: 0 0 20px;
}

.cat-blocks h4 {
	background: url(../images/sep.png) repeat-x center;
	margin: 0 0 24px;
}

.cat-blocks h4 span:after {
	content: "";
	width: 8px;
	height: 13px;
	background: url(../images/cb-ribbon.png) no-repeat;
	position: absolute;
	right: -7px;
	top: 0;
}

.featured-news h5 span, .cat-blocks h4 span, .featured-news2 h5 span {
	background: #333333;
	height: 40px;
	line-height: 40px;
	padding: 0 30px;
	text-align: center;
	font-size: 15px;
	font-weight: bold;
	color: #fff;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 0 auto;
	position: relative;
}

.cat-blocks h4 span {
	background: #e00000;
	margin: 0;
	font-size: 16px;
	padding: 0 24px;
}

.fn-thumb {
	position: relative;
}

.fn-thumb img {
	width: 100%;
}

.fn-inner h4 {
	color: #333333;
	/*font-size: 22px;
	line-height: 26px;*/
    font-size: 16px;
	line-height: 24px;
	margin: 15px 0 5px;
}

.fn-inner h4 a {
	color: #333333;
}

.fn-inner h4 a:hover {
	color: #e00000;
}

.fn-inner em {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #999999;
	font-style: normal;
	display: table;
	margin-bottom: 10px;
}

.fn-inner p {
	font-size: 14px;
	font-family: Arial;
	color: #333333;
	line-height: 20px;
	/*margin-bottom: 35px;*/
    margin-bottom: 10px;
}

.fn-meta {
	position: absolute;
	top: 0;
	color: #fff;
	left: 0;
	right: 0;
	padding: 15px;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: bold;
}

.fn-meta span {
	float: right;
}

.fn-meta span i {
	font-size: 14px;
}

.cb-big {
	position: relative;
	overflow: hidden;
	cursor: pointer;
}

.cb-big h3 {
	font-size: 22px;
}

.cb-big p {
	font-size: 10px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
	margin: -5px 0 0;
}

.cb-big:after {
	content: "";
	background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.80) 100%);
 /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.80)));
 /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* IE10+ */
	background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
 /* IE6-9 */
	position: absolute;
	bottom: -45%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	transition: .4s;
}

.cb-big:hover:after {
	position: absolute;
	bottom: -30%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 11;
	transition: .4s;
}

.cb-big .bl-meta ,
.cb-big .bl-info {
	z-index: 111;
}

.cb-info .cat {
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
	margin-bottom: -5px;
	display: table;
}

.cb-info h5 {
	font-size: 22px;
	line-height: 26px;
}

.cb-info h5 a {
	color: #333;
}

.cb-info h5 a:hover {
	color: #e00000;
}

.cb-info .date {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #999999;
	font-style: normal;
	display: table;
	margin-bottom: 10px;
}

.cb-info p {
	font-size: 14px;
	color: #333;
	font-family: Arial;
	line-height: 20px;
}

.cb-info ul {
	margin-top: 30px;
}

.cb-info ul li {
	float: none;
	width: 100%;
	margin-bottom: 0;
	position: relative;
	padding-left: 20px;
	border-top: 1px dotted #3f3f3f;
	padding: 9px 0 12px 20px;
}

.cb-info ul li:first-child {
	border-top: 1px dotted #3f3f3f;
}

.cb-info ul li:before {
	content: "";
	background: #e00000;
	width: 7px;
	height: 7px;
	position: absolute;
	top: 19px;
	left: 0;
}

.cb-info ul li a {
	color: #000000;
	background: transparent !important;
	font-size: 16px;
	font-family: Playfair Display;
	font-weight: bold;
	line-height: 20px;
}

.cb-info ul li a:hover {
	color: #e00000;
}

.opt-inner {
	background: #00aced;
	padding: 28px 30px 20px;
	-webkit-box-shadow: 3px 4px #f4f4f4;
	-moz-box-shadow: 3px 4px #f4f4f4;
	box-shadow: 3px 4px #f4f4f4;
	position: relative;
}

.opt-inner p {
	font-family: Playfair Display;
	font-size: 18px;
	font-weight: bold;
	font-style: italic;
	color: #fff;
	line-height: 24px;
	letter-spacing: -0.2px;
	position: relative;
}

.opt-inner:after {
	content: "";
	background: url("../images/opt.png") no-repeat;
	width: 30px;
	height: 22px;
	position: absolute;
	bottom: -22px;
	left: 70px;
}

.opt-inner p a {
	color: #aafcff;
}

.opt-inner em {
	color: #ffffff;
	font-family: Arial;
	font-style: normal;
	font-size: 12px;
}

.opt-inner em a {
	color: #fff;
}

.opi-inner {
	background-color: #fff;
	-webkit-box-shadow: 3px 4px #f4f4f4;
	-moz-box-shadow: 3px 4px #f4f4f4;
	box-shadow: 3px 4px #f4f4f4;
	border: solid 1px #ddd;
	padding: 30px 30px 20px;
	position: relative;
}

.opi-inner:after {
	content: "";
	background: url("../images/opi.png") no-repeat;
	width: 29px;
	height: 23px;
	position: absolute;
	bottom: -22px;
	left: 70px;
}

.opi-inner em {
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: #333;
	font-style: normal;
}

.opi-inner em span {
	font-style: italic;
	color: #656565;
	text-transform: none;
}

.opi-inner p {
	font-family: Playfair Display;
	font-size: 18px;
	font-weight: bold;
	font-style: italic;
	color: #333333;
	line-height: 24px;
	padding: 10px 0 10px;
}

.ico {
	width: 60px;
	height: 60px;
	border: 5px solid #dddddd;
	border-radius: 50%;
	margin: 20px 0 0 10px;
	display: table;
	color: #00aced;
	line-height: 50px;
	font-size: 30px;
	text-align: center;
	background: #fff;
}

.all-cat {
	display: table;
	width: 100%;
}

.all-cat h5 {
	background: url(../images/sep.png) repeat-x center;
	margin: 0 0 33px;
}

.p-news-big h5 {
	background: url(../images/sep1.png) repeat-x center;
	margin: 0 0 33px;
}

.all-cat h5 span, .p-news-big h5 span {
	background: #333;
	height: 41px;
	line-height: 41px;
	padding: 0 20px;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 0 auto;
	position: relative;
	z-index: 888;
}

.p-news-big h5 span {
	background: #e00000;
}

.allcat-feed {
	position: relative;
	overflow: hidden;
}

.allcat-feed:after {
	content: "";
	background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.80) 100%);
 /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.80)));
 /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* IE10+ */
	background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
 /* IE6-9 */
	position: absolute;
	bottom: -45%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 11;
	transition: .4s;
}

.allcat-feed h4 {
	font-size: 18px;
	font-weight: bold;
	color: #f8f8f8;
	position: absolute;
	left: 20px;
	bottom: 10px;
	text-transform: none;
	z-index: 77;
}

.allcat-feed h4 a {
	color: #fff;
}

.allcat-feed p {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #f8f8f8;
	position: absolute;
	left: 20px;
	bottom: 65px;
	margin: 0;
	font-family: 'Josefin Sans', 'Times New Roman', serif;
	z-index: 77;
}

.allcat-feed:hover:after {
	position: absolute;
	bottom: -30%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 11;
	transition: .4s;
}

.ac-inner {
	padding-bottom: 50px;
	background: url(../images/pat1.png);
	padding-top: 45px;
	margin-top: -46px;
	position: relative;
	z-index: 0;
	display: table;
	width: 100%;
}

.fn2-inner {
	border-bottom: 1px dotted #7f7f7f;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.fn2-thumb {
	width: 270px;
	float: left;
}

.fn2-info {
	margin-left: 290px;
}

.fn2-meta {
	color: #e00000;
	padding: 0px;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: bold;
}

.fn2-meta span {
	float: right;
}

.fn2-meta span i {
	font-size: 14px;
}

.fn2-info h4 {
	color: #333333;
	font-size: 22px;
	line-height: 26px;
	margin: 5px 0 10px;
}

.fn2-info h4 a {
	color: #333333;
}

.fn2-info h4 a:hover {
	color: #e00000;
}

.fn2-info em {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #999999;
	font-style: normal;
	display: table;
	margin-bottom: 10px;
}

.fn2-info p {
	font-size: 14px;
	font-family: Arial;
	color: #333333;
	line-height: 20px;
	margin-bottom: 0px;
}

.featured-main {
	margin-top: -32px;
}

.psi-thumb {
	position: relative;
}

.p-news-big {
	background: #232323;
	margin-top: -30px;
	padding: 30px 0 60px;
	display: block;
	width: 100%;
	margin-bottom: 33px;
}

.ps-info {
	padding: 0 15px;
}

.ps-info h4 {
	text-align: center;
	font-family: Playfair Display;
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	line-height: 22px;
	padding: 0 30px;
	margin: 15px 0;
}

.ps-info h4 a {
	color: #fff;
}

.ps-info h4 a:hover {
	color: #e00000;
}

.ps-info span {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	font-family: 'Josefin Sans', 'Times New Roman', serif;
	z-index: 77;
	text-align: center;
	display: table;
	width: 100%;
	margin: 0 0 15px;
}

.ps-info p {
	color: #dddddd;
	font-family: Arial;
	font-size: 14px;
	line-height: 22px;
	text-align: center;
	padding: 0 20px;
}

.psi-more {
	font-family: Arial;
	font-size: 11px;
	font-weight: bold;
	color: #f8a631;
	text-align: center;
	display: table;
	width: 100%;
}

.cat-tag {
	height: 23px;
	background: rgba(0,0,0,0.7);
	padding: 0 15px;
	line-height: 23px;
	text-transform: uppercase;
	color: #fff;
	font-size: 11px;
	font-weight: bold;
	position: absolute;
	top: 10px;
	left: 10px;
}

#pnews-slider .slick-next {
	position: absolute;
	top: -72px;
	right: 15px;
	width: 37px;
	height: 36px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	background-color: #fff;
	font-size: 0px;
}

#pnews-slider .slick-prev {
	position: absolute;
	top: -72px;
	right: 52px;
	width: 37px;
	height: 36px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	background-color: #fff;
	font-size: 0px;
}

#pnews-slider .slick-prev:after {
	content: "\f053";
	font-family: 'FontAwesome';
	font-size: 15px;
	color: #000;
	width: 39px;
	height: 38px;
	padding: 6px 10px;
	text-align: center;
	display: table;
	border: 3px solid #232323;
	border-radius: 50%;
	position: absolute;
	top: -3px;
	left: -3px;
	right: 0px;
}

#pnews-slider .slick-next:after {
	content: "\f054";
	font-family: 'FontAwesome';
	font-size: 15px;
	color: #000;
	width: 39px;
	height: 38px;
	padding: 6px 0 6px 3px;
	text-align: center;
	display: table;
	border: 3px solid #232323;
	border-radius: 50%;
	position: absolute;
	top: -3px;
	left: -3px;
	right: 0px;
}

#pnews-slider .slick-prev:hover:after ,
#pnews-slider .slick-next:hover:after {
	color: #e00000;
}

/* 6. Sidebar Styles */

aside {
	padding-left: 30px !important;
}

.side-widget {
	margin-bottom: 33px;
}

.side-widget h5, .sw-twitter h5 {
	background: url(../images/sep.png) repeat-x center;
	margin: 0 0 33px;
}

.side-widget h5 span, .sw-twitter h5 span {
	background: #e00000;
	height: 38px;
	line-height: 38px;
	padding: 0 20px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 0 auto;
}



.sw-inner {
	padding: 25px 0px 30px 30px;
	border-left: 1px solid #dddddd;
	border-bottom: 1px solid #dddddd;
	margin-top: -45px;
}
.p-news .sw-inner {
	padding-top:20px!important;
}
.p-news ul {
}

.p-news ul li {
	margin: 0;
	padding: 20px 0;
	border-bottom: 1px dotted #7f7f7f;
	display: table;
	width: 100%;
}

.p-news ul li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.p-news ul li img {
	width: 110px;
	float: left;
}

.pn-info {
	margin-left: 120px;
}

.pn-info span {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
	margin: 0;
	font-family: 'Josefin Sans', 'Times New Roman', serif;
}

.pn-info h4 {
	font-size: 15px;
	margin: 0px;
	line-height: 20px;
}

.pn-info h4 a {
	color: #000;
}

.pn-info h4 a:hover {
	color: #e00000;
}

.sw-banner img {
	background: #e5e5e5;
	padding: 20px;
}

.sw-twitter ul li {
	margin: 0;
	padding: 20px 0;
	border-bottom: 1px dotted #7f7f7f;
	display: table;
	width: 100%;
}

.sw-twitter ul li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.sw-twitter ul li img {
	/*width: 75px;
	float: left;*/
    float: left;
    padding-right: 10px;
}

.swt-inner {
	margin-left: 85px;
}

.swt-inner span {
    font-family: PlayfairDisplay;
	/*font-size: 16px;*/
    font-size: 14px;
	font-weight: bold;
	color: #333;
	margin-top: -5px;
	display: table;
}

.swt-inner h4 {
	margin: 5px 0;
	font-family: Arial;
	font-weight: normal;
	color: #333333;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.05px;
}

.swt-inner p {
	margin: 0 0 -7px;
	font-family: Arial;
	font-weight: normal;
	color: #000000;
	/*font-size: 10px;*/
    font-size: 12px;
	text-transform: uppercase;
}

.swt-inner h4 a {
	color: #428bca;
}

.swt-inner h4 a:hover {
	color: #000;
}

.sw-video h5 span {
	/*background: #333333;*/
    background: #e00000;
}

.sw-video ul li {
	margin: 0;
	padding: 15px 0px 20px 30px;
	border-bottom: 1px dotted #7f7f7f;
	display: table;
	width: 100%;
	position: relative;
}

.sw-video ul li:first-child {
	padding-left: 0;
	display: block;
}

.sw-video ul li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.sw-video ul li img {
	margin-bottom: 10px;
}

.sw-video ul li span {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
	margin: 0;
	font-family: 'Josefin Sans', 'Times New Roman', serif;
}

.sw-video ul li h4 {
	color: #000000;
	font-size: 15px;
	font-weight: bold;
	line-height: 20px;
	margin: 0;
}

.sw-video ul li i {
	color: #f50044;
	font-size: 16px;
	position: absolute;
	left: 0;
	top: 38px;
}

.swv-thumb {
	position: relative;
}

.swv-thumb:before {
	content: "";
	background: url(../images/aside/play.png) no-repeat;
	width: 38px;
	height: 37px;
	position: absolute;
	right: 20px;
	bottom: 18px;
}

input[type=radio].css-checkbox {
	position: absolute;
	z-index: -1000;
	left: -1000px;
	overflow: hidden;
	clip: rect(0 0 0 0);
	height: 1px;
	width: 1px;
	margin: -1px;
	padding: 0;
	border: 0;
}

input[type=radio].css-checkbox + label.css-label {
	padding-left: 30px;
	height: 15px;
	display: inline-block;
	line-height: 15px;
	background-repeat: no-repeat;
	background-position: 0 0;
	font-size: 14px;
	font-family: Arial;
	color: #333333;
	font-weight: normal;
	vertical-align: middle;
	cursor: pointer;
}

input[type=radio].css-checkbox:checked + label.css-label {
	background-position: 0 -15px;
}

label.css-label {
	background-image: url(../images/cbox.png);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.sw-poll h4 {
	font-size: 24px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	line-height: 30px;
	margin: 0 0 23px;
}

.sw-poll h5 span {
	background: #333;
}

.sw-poll li {
	padding-bottom: 8px;
}

.dual-btns {
	margin-top: 20px;
}

.dual-btns a {
	height: 40px;
	padding: 0 30px;
	line-height: 40px;
	display: inline-block;
	margin-right: 10px;
	background: #2980b9;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
}

.dual-btns a:nth-child(2) {
	background: #2c3e50;
}

.dual-btns a:hover !important {
	background: #000;
}

.sw-contributors .sw-inner, .sw-subscribe .sw-inner {
	padding-top:40px;
}
.sw-contributors h5 span {
	background: #333;
}

.sw-contributors ul {
	margin-left: 0px;
	display: table;
	width: 100%;
	margin-bottom: -7px;
}

.sw-contributors ul li {
	width: 25%;
	padding-left: 7px;
	margin-bottom: 7px;
	float: left;
}

.sw-subscribe h5 span {
	background: #333;
}

.newsletter {
	background: #f4f4f4;
	border: 1px solid #ddd;
	padding: 20px;
	position: relative;
	z-index: 888;
}

#newsletter {
	position: relative;
	margin-right: 30px;
}

#newsletter:before {
	background: #FFF;
	border: 1px solid #ddd;
	content: "";
	position: absolute;
	top: 3px;
	left: 3px;
	width: 100%;
	height: 100%;
	z-index: 99;
}

#newsletter:after {
	background: #FFF;
	border: 1px solid #ddd;
	content: "";
	position: absolute;
	top: 6px;
	left: 6px;
	width: 100%;
	height: 100%;
	z-index: 77;
}

.newsletter input {
	height: 49px;
	background-color: #fff;
	border: solid 1px #ddd;
	padding: 5px 10px;
	font-size: 14px;
	font-family: Arial;
	color: #333;
	width: 100%;
}

.sws-inner {
	display: table;
	width: 100%;
}

.sws-inner img {
	float: left;
	padding: 6px 6px 0;
	width: 120px;
	background: #333333;
	margin: 0 20px;
}

.sws-inner p {
	font-family: PlayfairDisplay;
	font-size: 14px;
	font-style: italic;
	color: #333;
	padding: 15px 0 0;
}

/* 7. Banner Styles */

.big-banner {
	background: #fff;
	padding: 20px;
	border-bottom: 3px solid #f4f4f4;
	border-top: 1px solid #DDD;
}

.big-banner a {
	display: table;
	margin: 0 auto;
}

/* 8. Footer Styles */

footer {
	border-top: 1px solid #ddd;
	padding: 0 !important;
}

.footer-widget {
	padding: 30px;
	border-right: 1px solid #ddd;
	min-height: 457px;
}

.footer-logo img {
    width: 150px;
}

.footer-logo h3 {
	font-family: Josefin Sans;
	font-size: 36px;
	font-weight: bold;
	color: #333;
	text-shadow: 3px 4px #f4f4f4;
	text-transform: uppercase;
	margin: 5px 0 0;
	display: table;
}

.footer-logo p {
	font-family: Arial;
	color: #333333;
	line-height: 22px;
	font-size: 14px;
	margin: 0 0 65px;
	position: relative;
}

.footer-logo p b {
	text-transform: uppercase;
}

.footer-logo p:after {
	content: "";
	background: #000;
	width: 48px;
	height: 1px;
	position: absolute;
	bottom: -40px;
	left: 0;
}

.copy {
	font-family: Arial;
	color: #333333;
	line-height: 22px;
	font-size: 14px;
}

.copy a {
	color: #333333;
}

.copy a:hover {
	color: #e00000;
}

.f-gallery ul {
	margin-top: 30px;
}

.f-gallery ul li {
	float: left;
	width: 33.333%;
	padding: 0 20px 20px 0;
}

.footer-widget h5 {
	font-family: Josefin Sans;
	font-size: 14px;
	font-weight: bold;
	color: #333;
	text-transform: uppercase;
	margin-top: 0;
} 

/* 9. Subpage Styles */

.bs-meta {
	border-bottom: 1px solid #414141;
	display: table;
	width: 100%;
}

.bs-cat {
	background: #333;
	height: 38px;
	line-height: 38px;
	float: left;
	padding: 0 25px;
	color: #fff;
	text-transform: uppercase;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
}

.bs-comments {
	font-family: Oswald;
	font-size: 12px;
	text-transform: uppercase;
	color: #333;
	margin-top: 10px;
	display: table;
	float: right;
}

.bs-comments em {
	width: 3px;
	height: 3px;
	background: #333;
	margin: 0 12px;
	display: inline-block;
	position: relative;
	top: -4px;
}

.bs-comments i {
	font-size: 15px;
	margin-right: 5px;
}

.blog-single h3 {
	font-family: Playfair Display;
	font-size: 36px;
	font-weight: bold;
	color: #000;
	/*line-height: 36px;*/
    line-height: 46px;
	margin: 15px 0 25px;
}

.blog-single p {
	font-family: Arial;
	font-size: 14px;
	line-height: 22px;
	color: #333333;
}

.blog-single p a {
	color: #e00000;
	border-bottom: 1px solid #dddddd;
}

.img-w-caption {
	display: block;
	margin: 13px 0 15px;
	position: relative;
}

.img-w-caption span {
	background: rgba(224,0,0,0.9);
	padding: 10px;
	font-size: 14px;
	color: #fff;
	font-family: Playfair Display;
	position: absolute;
	left: 0;
	bottom: 20px;
}

.quote {
	font-family: Playfair Display !important;
	font-size: 28px !important;
	font-weight: bold;
	font-style: italic;
	color: #333;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	padding: 10px 25px 15px;
	line-height: 35px !important;
	letter-spacing: -0.2px;
	text-align: center;
	margin-top: 25px;
	position: relative;
	margin-bottom: 15px;
}

.quote-fullwidth {
	padding: 10px 0px 15px;
}

.quote:before {
	content: "";
	height: 5px;
	width: 100%;
	background: #333333;
	position: absolute;
	top: -9px;
	left: 0;
	right: 0;
}

.blog-single h5 {
	font-size: 30px;
	color: #333333;
	font-family: Arial;
}

.list {
	font-family: Arial;
	color: #333;
	font-size: 14px;
	margin: 10px 0 15px;
}

.list li {
	padding-left: 27px;
	padding-top: 5px;
	padding-bottom: 2px;
	position: relative;
}

.list li:before {
	content: "";
	width: 5px;
	height: 5px;
	background: #333333;
	position: absolute;
	left: 13px;
	top: 12px;
}

.blog-single h4 {
	font-size: 18px;
	color: #333333;
	font-family: Arial;
	margin: 25px 0 15px;
	text-transform: uppercase;
}

.bs-table {
	display: table;
	width: 100%;
	margin-bottom: 15px;
}

.bs-table thead {
	border-top: 1px solid #999999;
	border-bottom: 2px solid #999999;
	color: #333333;
	font-family: Arial;
	font-weight: bold;
	line-height: 40px;
	text-transform: uppercase;
	font-size: 13px;
}

.bs-table thead tr th {
	padding: 0 25px;
}

.bs-table tbody tr {
	border-bottom: 1px solid #fff;
	background: #f6f6f6;
	color: #333333;
	line-height: 40px;
}

.bs-table tbody tr td {
	font-family: Arial;
	font-weight: normal;
	font-size: 14px;
	color: #333;
	padding: 0 25px;
}

.bs-tags {
	padding: 5px 0;
}

.bs-tags span {
	font-size: 14px;
	font-family: Arial;
	color: #333;
	display: block;
	margin-bottom: 2px;
	font-style: italic;
}

.bs-tags span a {
	color: #e00000;
}

.bg-share {
	padding: 10px 0px 30px;
	border-bottom: 1px solid #dddddd;
	margin-bottom: 2px;
}

.bg-share span {
	font-size: 11px;
	color: #999;
	text-transform: uppercase;
	font-family: Arial;
	line-height: 34px;
}

.bg-share a {
	background: #e00000;
	height: 34px;
	line-height: 35px;
	padding: 0 15px;
	color: #fff;
	float: right;
	font-family: Arial;
	font-size: 11px;
	text-transform: uppercase;
	font-weight: bold;
}

.bg-share a:hover {
	color: #fff;
	background: #000;
}

.bg-share a i {
	margin-right: 5px;
}

.post-nav a {
	font-family: Josefin Sans;
	font-size: 12px;
	font-weight: bold;
	color: #e00000;
	text-transform: uppercase;
}

.post-nav a:hover {
	color: #e00000;
}

.pn-prev em {
	font-size: 14px;
	position: relative;
	top: -2px;
	margin-right: 3px;
}

.pn-next em {
	font-size: 14px;
	position: relative;
	top: -2px;
	margin-left: 3px;
}

.post-nav {
	border-top: 1px solid #333333;
	border-bottom: 1px solid #333333;
}

.post-nav h4 {
	font-family: Playfair Display;
	font-size: 18px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	line-height: 22px;
}

.post-nav h4 a {
	text-transform: none;
	color: #333333;
	font-family: Playfair Display;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 0;
}

.pn-prev {
	border-right: 1px solid #333;
	padding: 15px 20px 10px 15px;
}

.pn-next {
	padding: 15px 15px 10px 20px;
}

.author-info {
	border-bottom: 1px solid #333;
	border-top: 1px solid #ddd;
	margin-top: 2px;
	padding: 20px 0 15px;
}

.author-info img {
	float: left;
    border-radius: 50%;
}

.ai-info {
	margin-left: 92px;
}

.ai-info h6 {
	font-family: Playfair Display;
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	margin-top: 5px;
}

.related-posts h5, .related-posts-video h5, .related-posts-video2 h6 {
	font-family: Josefin Sans;
	font-size: 14px;
	font-weight: bold;
	color: #333;
	text-transform: uppercase;
	margin: 27px 0 15px;
}

.related-posts-video h5, .related-posts-video2 h6 {
	padding-bottom: 18px;
	border-bottom: 1px solid #ddd;
	margin: 27px 0 0px !important;
}

.rp-date {
	font-family: Playfair Display;
	font-style: italic;
	color: #999;
	text-align: center;
	font-size: 60px;
	line-height: 24px;
	padding-top: 10px;
}

.rp-date span {
	font-size: 18px;
	display: block;
    padding-bottom: 8px;
}

.rp-date span:nth-child(2) {
	margin-top: 30px;
}

.rp-date em {
	font-size: 30px;
}

.related-posts li {
	padding: 30px 0px;
	border-top: 1px solid #ddd;
	display: table;
	width: 100%;
}

.related-posts li:last-child {
	padding-bottom: 60px;
}

.related-posts li img {
	width: 270px;
	float: left;
}

.rp-inner {
	margin-left: 290px;
}

.rp-inner h4 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	color: #333;
	margin: 10px 0 41px;
	text-transform: none;
	line-height: 30px;
	position: relative;
}

.rp-inner h4 a {
	color: #333;
}

.rp-inner h4 a:hover {
	color: #e00000;
}

.rp-inner h4:before {
	content: "";
	width: 30px;
	height: 1px;
	position: absolute;
	bottom: -27px;
	left: 0;
	background: #000;
}

.rp-more {
	font-family: Josefin Sans;
	font-size: 12px;
	font-weight: bold;
	color: #e00000;
	text-transform: uppercase;
}

.rp-more em {
	margin-left: 2px;
	font-size: 13px;
	position: relative;
	top: -2px;
}

#tabwrap {
	background: #fff;
	overflow: hidden;
	width: 100%;
	min-height: 300px;
	margin: 60px auto;
	border: 1px solid #ddd;
}

#tabs {
	overflow: hidden;
	border-bottom: 1px solid #ddd;
}

#tabs li {
	list-style: none;
}

#tabs li a {
	float: left;
	display: block;
	padding: 10px;
	color: #999999;
	padding: 25px 30px;
	text-decoration: none;
	text-align: center;
	border-left: 1px solid #ddd;
	font-family: Josefin Sans;
	font-size: 14px;
	font-weight: bold;
	font-size: 15px;
	text-transform: uppercase;
}

#tabs li:first-child a {
	border-left: none;
}

#tabs li.current a {
	color: #e00000;
}

#content > div {
	clear: both;
	padding: 0px;
	display: none;
}

#content .current {
	display: block;
}

#content #home.first {
	display: block;
}

#content p {
	margin: 0 0 20px 0;
}

.comments {
	margin-bottom: 3px;
}

.comments li {
	border-bottom: 1px solid #ddd;
	padding: 30px;
	overflow: hidden;
}

.comments li .c-img {
	width: 80px;
	float: left;
	position: relative;
	z-index: 222;
}

.c-img:before {
	content: "";
	background: #ddd;
	position: absolute;
	left: 50%;
	margin-left: -1px;
	height: 600px;
	width: 1px;
	top: 0;
	z-index: -1;
}

.comment-inner {
	margin-left: 110px;
}

.comment-inner h6 {
	margin: 0 0 5px;
}

.comment-inner h6 span {
	text-transform: uppercase;
	color: #333;
	font-size: 13px;
	padding-right: 25px;
	position: relative;
}

.comment-inner h6 span:before {
	content: "";
	width: 3px;
	height: 3px;
	background: #000;
	position: absolute;
	right: 7px;
	top: 8px;
}

.comment-inner h6 a {
	color: #e00000;
	font-style: italic;
}

.c-date {
	margin: 0 0 5px;
	display: table;
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #999999;
}

.comment-inner p {
	margin: 0 !important;
}

.sub-comment .c-img {
	float: right !important;
}

.sub-comment .comment-inner {
	margin-right: 110px;
}

.sub-comment .comment-inner h6 {
	text-align: right;
}

.sub-comment .comment-inner .c-date {
	text-align: right;
	width: 100%;
}

.sub-comment {
	position: relative;
}

.sub-comment:before {
	content: "";
	width: 34px;
	height: 94px;
	background: url(../images/arrow.png) no-repeat;
	position: absolute;
	top: 0;
	left: 69px;
}

.bs-aside img {
	display: table;
	margin: 0px auto;
	border-radius: 50%;
}

.bs-aside h6 {
	font-family: Playfair Display;
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	color: #060607;
	text-align: center;
}

.bs-aside .share-count {
	display: table;
	width: 100%;
	text-align: center;
	font-family: Playfair Display;
	font-size: 12px;
	font-style: italic;
	color: #060607;
}

.bsa-social {
	display: table;
	margin: 20px auto 0;
}

.bsa-social a {
	width: 40px;
	height: 40px;
	margin-right: 1px;
	background: #3b5998;
	color: #fff;
	line-height: 40px;
	text-align: center;
	display: inline-block;
	margin-right: -2px;
}

.bsa-social a:nth-child(2) {
	background: #00aced;
	margin-left: 0px;
}

.bsa-social a:nth-child(3) {
	background: #999999;
}

.bsa-social a:hover {
	background: #000 !important;
}

.sep1 {
	width: 37px;
	height: 1px;
	background: #000;
	margin: 15px auto 7px;
	display: table;
}

.post-more {
	color: #e00000;
	font-family: Playfair Display;
	font-size: 14px;
	display: table;
	font-style: italic;
	padding-right: 30px;
	margin: 16px 0 0;
}

.post-more em {
	font-size: 13px;
	margin-left: 5px;
	position: relative;
	top: -2px;
}

.related-posts-cat h5 {
	border-top: 3px double #ddd;
	padding-top: 17px;
	padding-bottom: 7px;
	position: relative;
}

.related-posts-cat h5 span {
	color: #e00000;
}

.related-posts-cat h5 span i {
	margin-left: 5px;
	font-size: 12px;
}

.related-posts-cat h5:before {
	content: "";
	width: 100%;
	background: #ddd;
	height: 1px;
	position: absolute;
	top: -5px;
}

.rp-cat {
	font-family: Josefin Sans;
	font-size: 12px;
	font-weight: bold;
	color: #999;
	text-transform: uppercase;
	margin-bottom: -3px;
	display: table;
}

.page-nav {
	display: table;
	margin: 0 auto 60px;
	width: 550px;
}

.page-nav li {
	float: left;
	margin: 0 5px;
}

.page-nav li a {
	width: 45px;
	height: 45px;
	-webkit-border-radius: 23px 22px 22px 23px/22px 22px 23px 23px;
	-moz-border-radius: 23px 22px 22px 23px/22px 22px 23px 23px;
	border-radius: 23px 22px 22px 23px/22px 22px 23px 23px;
	background-color: #fff;
	border: solid 1px #ccc;
	display: table;
	font-family: Playfair Display;
	font-size: 24px;
	font-style: italic;
	color: #333;
	line-height: 36px;
	text-align: center;
}

.page-nav li:last-child a {
	font-size: 14px;
	line-height: 40px;
}

.page-nav span {
	font-family: Playfair Display;
	font-size: 24px;
	font-style: italic;
	color: #000;
	float: left;
	margin-right: 15px;
	line-height: 45px;
}

.page-nav li.active a ,
.page-nav li a:hover, .page-nav li a.active {
	background: #e00000;
	color: #fff;
	border-color: #970f0f;
}

.i-gallery {
	margin: 30px -19px;
}

.i-gallery li {
	width: 50%;
	float: left;
	padding: 0 19px;
	margin-bottom: 35px;
}

.ig-wrap {
	position: relative;
	overflow: hidden;
}

.ig-wrap h4 {
	font-family: Playfair Display;
	font-size: 30px;
	font-weight: bold;
	font-style: italic;
	color: #fff;
	position: absolute;
	bottom: 30px;
	left: 30px;
	padding-right: 30px;
	text-transform: none;
	margin: 0;
	z-index: 77779;
}

.ig-wrap a {
	display: table;
	width: 100%;
	position: relative;
	overflow: hidden;
}

.ig-main {
	position: relative;
}

.ig-main:before {
	content: "";
	position: absolute;
	top: 3px;
	right: -3px;
	width: 100%;
	height: 100%;
	border-right: 1px solid #333;
	border-bottom: 1px solid #333;
}

.ig-main:after {
	content: "";
	position: absolute;
	top: 6px;
	right: -6px;
	width: 100%;
	height: 100%;
	border-right: 1px solid #333;
	border-bottom: 1px solid #333;
}

.ig-wrap:after {
	content: "";
	background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.80) 100%);
 /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.80)));
 /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* IE10+ */
	background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
 /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
 /* IE6-9 */
	position: absolute;
	bottom: -45%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 77777;
	transition: .4s;
}

.ig-wrap:hover:after {
	position: absolute;
	bottom: -30%;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 77777;
	transition: .4s;
}

.ig-wrap img {
	width: 100%;
}

.blog-single-gal .bg-share {
	border-bottom: none;
}

.blog-single-gal .author-info {
	border-top-color: #333;
}

.comments-wrap {
	display: table;
	width: 100%;
}

#gal-slider {
	background: #232323;
	padding: 20px;
	position: relative;
}

.gal-nav {
	background: #000000;
	padding: 20px 55px;
	margin-bottom: 30px;
	display: table;
	width: 100%;
}

.gal-nav li {
	float: left;
	width: 25%;
	padding: 0 10px;
	cursor: pointer;
}

.gal-nav li.flex-active img {
	background: #e00000;
	padding: 2px;
}

.flex-prev {
	color: #999;
	font-size: 30px;
	position: absolute;
	bottom: -95px;
	z-index: 99999;
	left: 20px;
}

.flex-prev:hover ,
.flex-next:hover {
	color: #fff;
}

.flex-next {
	color: #999;
	font-size: 30px;
	position: absolute;
	right: 20px;
	bottom: -95px;
	z-index: 99999;
}

.blog-video-big {
	margin-top: 30px;
}

.bvb-thumb {
	position: relative;
}

.play-btn-big {
	background: url(../images/play-big.png) no-repeat;
	width: 94px;
	height: 93px;
	display: table-cell;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}

.bb-meta {
	text-transform: uppercase;
	color: #777;
	font-family: Oswald;
	margin-top: -10px;
	border-bottom: 1px dotted #7f7f7f;
	padding-bottom: 27px;
}

.bb-meta span {
	margin-right: 25px;
}

.bb-meta span i {
	margin-right: 5px;
	font-weight: normal;
	font-size: 17px;
}

.i-video {
	margin-top: 35px;
	margin-right: -15px;
	margin-left: -15px;
}

.i-video li {
	width: 50%;
	padding: 0 15px;
	float: left;
	margin-bottom: 30px;
}

.iv-cat {
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #e00000;
	margin: 12px 0 0;
	display: table;
}

.iv-inner h5 {
	font-size: 16px;
	font-family: Playfair Display;
	font-weight: bold;
	line-height: 20px;
	margin: 5px 0 20px;
	text-transform: none !important;
}

.iv-inner .bb-meta {
	font-size: 12px;
	padding-bottom: 15px;
}

.iv-main {
	position: relative;
}

.iv-main:before {
	content: "";
	background: url(../images/play-small.png) no-repeat;
	width: 38px;
	height: 37px;
	position: absolute;
	right: 20px;
	bottom: 18px;
}

.iv-inner .bb-meta i {
	font-size: 14px !important;
}

.iv-inner .bb-meta span {
	margin-right: 20px;
}

.contributor-info {
	padding: 30px;
	background: #f4f4f4;
	margin-top: 30px;
}

.contributor-info img {
	display: table;
	margin: 0 auto;
	width: 90px;
	height: 90px;
	border-radius:50%;
}

.contributor-info h6 {
	font-family: Playfair Display;
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	color: #060607;
	text-align: center;
}

.contributor-info .share-count {
	display: table;
	width: 100%;
	text-align: center;
	font-family: Playfair Display;
	font-size: 12px;
	font-style: italic;
	color: #060607;
}

.contributor-info .bsa-social {
	display: table;
	margin: 20px auto 0;
}

.contributor-info .bsa-social a {
	width: 40px;
	height: 40px;
	margin-right: 1px;
	background: #3b5998;
	color: #fff;
	line-height: 40px;
	text-align: center;
	display: inline-block;
	margin-right: -2px;
	font-size: 16px;
}

.contributor-info .bsa-social a:nth-child(2) {
	background: #00aced;
}

.contributor-info .bsa-social a:nth-child(3) {
	background: #cb2027;
}

.contributor-info .bsa-social a:nth-child(4) {
	background: #dd4b39;
}

.contributor-info .bsa-social a:nth-child(5) {
	background: #007bb6;
}

.contributor-info .bsa-social a:nth-child(6) {
	background: #bb0000;
}

.sep1 {
	width: 37px;
	height: 1px;
	background: #000;
	margin: 15px auto 7px;
	display: table;
}

.contributor-info p {
	text-align: center;
	padding-top: 5px;
}

/* 10. Team Styles */

.team-content li {
	padding: 20px 0;
	border-bottom: 1px solid #ddd;
}

.team-content h3, .archives-content h3 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	margin: 25px 0 35px;
	position: relative;
}

.team-content h3:before, .archives-content h3:before {
	content: "";
	width: 30px;
	height: 1px;
	background: #000;
	bottom: -17px;
	left: 0;
	position: absolute;
}

.team-content li img {
	width: 160px;
	float: left;
}

.tc-inner {
	margin-left: 180px;
}

.tc-inner h4 {
	font-family: Playfair Display;
	font-size: 18px;
	font-weight: bold;
	color: #333;
	margin: 13px 0 10px;
	text-transform: none;
}

.tc-inner span {
	font-size: 13px;
	font-weight: bold;
	color: #999;
	text-transform: uppercase;
	margin: -5px 0 10px;
	display: table;
}

.archives-content li {
	border-top: none;
	border-bottom: 1px solid #ddd;
}

.archives-content .rp-date {
	padding-top: 0px;
}

.archives-content li h4 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	color: #333;
	margin: 13px 0 0;
	text-transform: none;
}

.archives-content li h4 a {
	color: #333;
}

.archives-content li h4 a:hover {
	color: #e00000;
}

.archives-content li:last-child {
	padding-bottom: 30px;
}

.archives-filter {
	margin-top: 35px;
}

.archives-filter h5 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	position: relative;
	margin-bottom: 35px;
}

.archives-filter h5:before {
	content: "";
	width: 30px;
	height: 1px;
	background: #000;
	bottom: -17px;
	left: 0;
	position: absolute;
}

.archives-filter span {
	display: table;
	width: 100%;
	padding-bottom: 12px;
	margin-bottom: 12px;
	border-bottom: 1px solid #ddd;
	font-family: Playfair Display;
	font-size: 18px;
	font-style: italic;
	color: #333;
}

/* 11. Contact */

.gmap {
	padding: 0px;
	height: 405px;
}

.gmap div {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
}

#map {
	display: block;
	width: 100%;
	height: 405px;
	margin: 0 auto;
}

#map.large {
	height: 405px;
}

#map img {
	max-width: none;
	height: auto;
}

.c-info {
	padding-left: 200px;
	background: url(../images/contact.png) no-repeat;
	background-position: 40px 8px;
}

.c-info h6 {
	text-transform: uppercase;
	font-family: Arial;
	color: #333;
	font-size: 13px;
}

.c-info p {
	display: table;
	width: 100%;
	margin: 0;
}

.c-info p span {
	width: 40%;
	float: left;
}

.c-info p em {
	font-style: normal;
	width: 60%;
	float: right;
}

.c-form {
	padding: 30px;
}

.c-form p span {
	color: #e00000;
}

.c-form label {
	font-family: Arial;
	color: #333;
	font-size: 14px;
	font-weight: normal;
	display: block;
}

.c-form label span {
	color: #e00000;
}

.c-form input {
	width: 286px;
	height: 35px;
	background-color: #fff;
	-webkit-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	-moz-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	border: solid 1px #ddd;
	margin-bottom: 4px;
	font-family: Arial;
	padding: 5px 15px;
}

.c-form textarea {
	width: 446px;
	height: 207px;
	background-color: #fff;
	-webkit-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	-moz-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	border: solid 1px #ddd;
	margin-bottom: 10px;
	font-family: Arial;
	padding: 5px 15px;
}

.c-form button {
	background: #E00000;
	height: 38px;
	line-height: 38px;
	padding: 0px 25px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #FFF;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 0px;
	border: none;
	transition:.4s;
}

.c-form button:hover {
	background: #000;
	transition:.4s;
}

.c-tabs #tabs li a {
	border-right: 1px solid #ddd !important;
}

.statusMessage,.successmessage,.errormessage {
	display: none;
	margin: auto;
	width: 100%;
	height: auto;
	background: rgba(255,255,255,0.1);
	margin: 0 auto 15px;
	padding: 20px;
	border-radius: 5px;
}

.statusMessage p {
	margin: 0;
	color: #888;
}

.successmessage p {
	margin: 0;
	color: #888;
}

.success-ico {
	background: url(../images/success.png);
	width: 30px;
	height: 30px;
	float: left;
	margin-right: 15px;
	position: relative;
	top: -3px;
}

.error-ico {
	background: url(../images/error.png);
	width: 30px;
	height: 30px;
	float: left;
	margin-right: 15px;
	position: relative;
	top: -3px;
}

.errormessage p {
	margin: 0;
	color: #888;
}

/* 12. Login / Register */

.login-content {
	width: 100%;
	border: 1px solid #dddddd;
	background: #fff;
	padding: 55px;
}

.register-content {
	width: 100%;
	border: 1px solid #dddddd;
	background: #f4f4f4;
	padding: 55px;
	height: 376px;
}

.logreg-content {
	padding-bottom: 70px;
	font-family: Arial;
	color: #333;
	font-size: 14px;
}

.logreg-content h6 {
	color: #333;
	text-transform: uppercase;
	font-family: Playfair Display;
	font-size: 18px;
	margin: 0 0 22px;
	font-weight: bold;
}

.logreg-content label {
	font-family: Arial;
	color: #333;
	font-size: 14px;
	font-weight: normal;
	display: block;
}

.logreg-content label span {
	color: #e00000;
}

.logreg-content input {
	width: 100%;
	height: 35px;
	background-color: #fff;
	-webkit-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	-moz-box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	box-shadow: inset 3px 4px 5px rgba(0,0,0,.03);
	border: solid 1px #ddd;
	margin-bottom: 4px;
	font-family: Arial;
	padding: 5px 15px;
}

.logreg-content button {
	background: #E00000;
	height: 38px;
	line-height: 38px;
	padding: 0px 20px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #FFF;
	font-family: Josefin Sans;
	text-transform: uppercase;
	display: table;
	margin: 15px 0 0;
	border: none;
	float: left;
	transition:.4s;
}

.logreg-content button:hover {
	background: #000;
	transition:.4s;
}

.logreg-content input[type=checkbox] {
	width: 22px;
	position: relative;
	top: 13px;
	padding: 0;
	margin-left: 15px;
	margin-right:11px;
}

.logreg-content a {
	display: table;
	color: #E00000;
	margin-top: 30px;
}

/* 13. Search Page */

.search-results h4 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	color: #333;
	margin: 7px 0 10px;
	text-transform: none;
}

.search-results .fn2-inner {
	padding-bottom: 40px;
}

.fn2-inner-sub {
	padding: 10px 0px 27px !important;
}

.fn2-inner-sub .fn2-info {
	margin-left: 0;
}

.search-results h3 {
	font-family: Playfair Display;
	font-size: 24px;
	font-weight: bold;
	font-style: italic;
	color: #333;
	position: relative;
	margin-bottom: 45px;
	margin-top: 0;
}

.search-results h3 span {
	color: #e00000;
}

.search-results h3:before {
	content: "";
	width: 30px;
	height: 1px;
	background: #000;
	bottom: -17px;
	left: 0;
	position: absolute;
}

/* 14. Footer / Fixed */

.footer-fixed {
	height: 38px;
	background: #232323;
	border-top: 3px solid #F00;
	position: relative;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	max-width: 1230px;
	width:100%;
	margin: 0 auto;
	z-index: 99999999999;
}

.footer-fixed:after {
	content: "";
	background: url(../images/fn-right.png) no-repeat;
	width: 25px;
	height: 48px;
	position: absolute;
	right: -25px;
	top: -13px;
}

.footer-fixed:before {
	content: "";
	background: url(../images/fn-left.png) no-repeat;
	width: 25px;
	height: 48px;
	position: absolute;
	left: -25px;
	top: -13px;
}

.footer-nav {
	border-right: 1px solid #333;
	border-left: 1px solid #000000;
	display: table;
}

.footer-nav li {
	float: left;
	font-family: Josefin Sans;
	font-size: 12px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
	border-right: 1px solid #000000;
	border-left: 1px solid #333333;
}

.footer-nav li a {
	color: #fff;
	padding: 9px 20px;
	display: table;
}

.footer-nav li a:hover {
	color: #e00000;
}

.copy1 {
	font-family: Josefin Sans;
	font-size: 12px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
	text-align: right;
	margin-top: 7px;
	padding-right: 10px;
}

.copy1 a {
	width: 21px;
	height: 20px;
	-webkit-border-radius: 11px 10px 10px 11px/10px;
	-moz-border-radius: 11px 10px 10px 11px/10px;
	border-radius: 11px 10px 10px 11px/10px;
	background-color: #000;
	-webkit-box-shadow: 0 1px rgba(255,255,255,.2);
	-moz-box-shadow: 0 1px rgba(255,255,255,.2);
	box-shadow: 0 1px rgba(255,255,255,.2);
	position: relative;
	top: -1px;
	margin-left: 7px;
	color: #fff;
	text-align: center;
	padding-top: 4px;
}

.copy1 a:hover {
	color: #e00000;
}

.menu-trigger {
	display: none;
}

/* 15. Extras */

.space10 {
	margin-bottom: 10px;
}

.space20 {
	margin-bottom: 20px;
}

.space30 {
	margin-bottom: 30px;
}

.space40 {
	margin-bottom: 40px;
}

.space50 {
	margin-bottom: 50px;
}

.space60 {
	margin-bottom: 60px;
}

.space70 {
	margin-bottom: 70px;
}

.space80 {
	margin-bottom: 80px;
}

.space90 {
	margin-bottom: 90px;
}

/* 16. Responsive Styles */

@media (min-width: 1250px) {

#clone {
    display: none;    
}

.footer-fixed {
	max-width: 1230px !important;
}

}

@media (min-width: 1200px) {

#clone {
    display: none;    
}
.footer-fixed {
	max-width: 1150px;
}

}

@media only screen and (min-width: 996px) and (max-width: 1250px)   {

#clone {
    display: none;    
}

.allcat-feed h4 {
	font-size: 14px;
	padding-right: 15px;
}

}

@media only screen and (min-width: 600px) and (max-width: 1100px)   {

#clone {
    display: none;    
}
header nav ul li a {
    padding: 15px 12px;
}

}

@media only screen and (max-width: 995px)  {

#clone {
    display: none;    
}

.sub-comment .comment-inner {
	margin-right: 10px;
	padding-top: 105px;
}

.gal-nav li img {
	width: 100%;
}

header nav {
    display: block;
    height: 64vh;
    overflow: scroll;
}

.flex-next ,
.flex-prev {
	bottom: -55px;
}

.i-gallery li {
	width: 100%;
	padding: 0px 0px;
}

.i-gallery {
	margin: 30px 0px;
	display: table;
	width: 100%;
}

.bs-table thead tr th {
	padding: 9px 15px;
	line-height: 20px;
}

.bs-table tbody tr td {
	padding: 10px 25px;
	line-height: 20px;
}

.pn-prev {
	border-right: none;
	padding: 15px 20px 10px 15px;
}

.rp-date {
	padding-bottom: 40px;
}

.related-posts .col-md-9 {
	padding: 0;
}

.related-posts li img {
	width: 100%;
	float: none;
}

.rp-inner {
	margin-left: 0;
	padding-top: 20px;
}

.page-nav ul li:nth-child(3),
.page-nav ul li:nth-child(4),
.page-nav ul li:nth-child(6) {
	display: none;
}

.c-info {
	padding-left: 0px;
	background-position: 0px 8px;
	padding-top: 124px;
}

.c-info .col-md-6 {
	margin-bottom: 30px;
}

.c-form input, .c-form textarea {
	width: 100%;
}

.bs-aside {
	margin-bottom: 30px;
}

.blog-single h3 {
	font-size: 27px;
	line-height: 31px;
}

.bs-cat {
	padding: 0px 18px;
	font-size: 12px;
}

.tb-left {
	display: none;
}

.tb-right {
	display: table;
	float: none;
	margin: 0 auto;
}

.tb-right li {
	margin: 0 17px;
}

.top-bar {
	padding: 10px 15px;
}

.tbr-social {
	float: left;
}

.tbr-login {
	display: table;
	float: right !important;
}

.tbr-login a {
	text-align: right;
}

.tbr-social span a {
	color: #FFF;
	font-size: 14px;
	margin-left: 0px;
	margin-right: 10px;
}

header {
	width:100%!important;
}

header nav ul li {
	float: left;
	font-family: Oswald;
	font-size: 14px;
	color: #000;
	text-transform: uppercase;
	width: 100%;
}

.mega-menu {
	position: relative;
	display:none;
}

header nav ul li:hover .mega-menu ,
header nav ul li:focus .mega-menu ,
header nav ul li:active .mega-menu {
	display:block;
}

.mega-menu li {
	width: 100%;
	float: left;
	position: relative;
	border-bottom: none !important;
}

header nav ul li a {
	width: 100%;
}

header nav ul li {
	float: left;
	font-family: Oswald;
	font-size: 14px;
	color: #000;
	text-transform: uppercase;
	width: 100%;
	border-bottom: 1px solid #ddd;
}

header nav ul {
	border: 1px solid #ddd;
	display: table;
	background: #fff;
	z-index: 999999;
	position: relative;
	padding: 0;
}

header nav {
	margin-top: 2px;
	display: none;
}

.sub-menu ul {
	padding: 0px;
	border: none;
	background: none;
}

.news-feed img {
	width: 100%;
}

.mega-menu {
	position: relative;
	border: none;
}

.menu-trigger {
	padding: 12px 15px;
	font-family: Oswald;
	text-transform: uppercase;
	font-size: 16px;
	cursor: pointer;
	display: block;
}

.menu-trigger i {
	margin-right: 6px;
	font-size: 19px;
}

.menu-trigger:hover {
	color: #e00000;
}

.search-trigger {
	position: absolute;
	top: 0;
	right: 15px;
}

.search {
	top: 0;
}

.search form input {
	padding: 5px 70px 5px 5px;
	font-size: 14px;
}

.search form input:focus {
	outline:none;
	border:none;
	box-shadow:none;
}

.logo h1 {
	font-size: 47px;
	text-align: center;
	padding-bottom: 17px;
}

.news-ticker:after {
	display:none;
}

.news-ticker {
	padding: 20px 0px 25px 0px;
	border-left: none;
}

.img-responsive {
	width: 100%;
}

.bl-info h3 {
	margin: 5px 0px 15px;
	color: #FFF;
	font-size: 13px;
	line-height: 15px;
}

.cb-big h3 {
	font-size: 19px;
	line-height: 22px;
}

.cb-info {
	padding-top: 30px;
}

.op-twitter {
	margin-bottom: 40px;
}

aside {
	padding-left: 15px !important;
}

.p-news ul li img {
	width: 94px;
	float: left;
}

.pn-info {
	margin-left: 110px;
}

.pn-info h4 {
	font-size: 11px;
	margin: 0px;
	line-height: 17px;
}

.sw-poll li {
	padding-bottom: 16px;
	line-height: 24px;
}

.dual-btns a {
	height: 40px;
	padding: 0px 18px;
}

.sws-inner img {
	width: 95px;
}

.sws-inner p {
	font-size: 11px;
	padding: 5px 0px 0px;
	line-height: 15px;
}

.bl-meta span {
	margin-bottom: -18px;
	display: table;
	font-size: 11px;
}

.bl-info {
	position: absolute;
	bottom: 10px;
	left: 15px;
	color: #FFF;
	z-index: 777;
	width: 100%;
	padding-right: 17px;
}

.bl-meta {
	position: absolute;
	top: 15px;
	left: 15px;
}

.rmore {
	padding-right: 15px;
}

.footer-widget {
	padding: 30px;
	border-right: none;
	min-height: auto;
	border-bottom: 1px solid #ddd;
}

.footer-nav {
	border-right: 1px solid #333;
	border-left: 1px solid #000;
	display: none;
}

.copy1 {
	font-family: Josefin Sans;
	font-size: 9px;
	font-weight: bold;
	color: #FFF;
	text-transform: uppercase;
	text-align: left;
	margin-top: 7px;
	padding-right: 10px;
	padding-left: 10px;
	text-align: center;
}

.copy1 a {
	padding-top: 5px;
}

.container {
	max-width: 605px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
}

.footer-fixed {
	max-width: 604px;
}

.fn2-thumb {
	width: 100%;
	float: none;
}

.fn2-info {
	margin-left: 0;
	padding-top: 20px;
}

.fn2-inner {
	padding-right: 15px;
}

.cat-blocks h4 {
	margin: 30px 0px 24px;
}

.team-content li img {
	width: 115px;
	float: left;
}

.tc-inner {
	margin-left: 130px;
}

.login-content {
	margin-bottom: 30px;
}

.register-content {
	height: auto;
}

.fn2-inner-sub {
	padding: 0px 0px 27px !important;
}

.i-video li {
	width: 100%;
	float: left;
}

.i-video {
	margin-top: 35px;
	margin-right: -0px;
	margin-left: -0px;
	display: table;
	width: 100%;
}

.i-video li {
	padding: 0px 0px;
}

.register-content input[type="checkbox"] {
	width: 22px;
	position: relative;
	top: 13px;
	padding: 0px;
	margin-left: 0;
	display: table;
	margin-top: 59px;
}
}

@media only screen and (min-width: 100px) and (max-width: 479px)   {

#clone {
    display: block;
}

#connerView-numberOfTheWeek {
    display: none
}

#connerView-numberOfTheWeek .side-widget h5 span, .sw-twitter h5 span {
    padding: 0;
}

.login-content {
	padding: 25px;
	margin-bottom: 30px;
}

.logreg-content {
	font-size: 13px;
}

.register-content {
	width: 100%;
	border: 1px solid #DDD;
	background: none repeat scroll 0% 0% #F4F4F4;
	padding: 25px;
	height: auto;
}

.register-content input[type="checkbox"] {
	width: 22px;
	position: relative;
	top: 13px;
	padding: 0px;
	margin-left: 0;
	display: table;
	margin-top: 59px;
}
}

@media only screen and (min-width: 451px) and (max-width: 995px)   {

.copy1 {
	font-size: 12px;
}

.copy1 a {
	padding-top: 4px;
}

}
/* Content Detail */
#contentDetail img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    display: block;
    margin: auto;
}

#contentDetail .VCSortableInPreviewMode {
    text-align: center;
}

#contentDetail .PhotoCMS_Caption {
    padding: 10px;
    text-align: center;
    font-style: italic;
    font-weight: bold;
}

/* Breaking News */
#news-ticker h4 a {
    font-size: 16px;
    line-height: 20px;
}

/* Number */
#number h4 a {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 30px;
}

/* Conner View */
#corner-view ul li {
    float: none;
    width: 100%;
    margin-bottom: 0;
    position: relative;
    padding: 14px 0 12px 0;
}

#corner-view ul li:nth-child(n+2) {
    padding-left: 14px
}

#corner-view ul li:nth-child(n+2):before {
    content: "";
    background: #e00000;
    width: 7px;
    height: 7px;
    position: absolute;
    top: 19px;
    left: 0;
}

.sw-inner .radius {
    border-radius: 50%;
}

.sw-inner .sapo {
    padding-top: 10px;
}

.i-gallery .ig-wrap {
    cursor: pointer;
}

.ml-0 {
    margin-left: 0!important;
}

/* Color Category*/
.iv-cat a, 
.fn2-meta a, .block-1 .cat-default a,
.p-news .pn-info span a, 
.blog-single .related-posts .rp-cat a, 
.cat-blocks .cat a, 
.sw-video .sw-inner span a, 
.bl-featured-big .bl-info span a, 
.news-ticker span a,
.allcat-feed p a,
.block-1 .thumb-cat a, .featured-news .fn-meta a {
    color: #e00000!important;
}

.cat-blocks h4 span a  {
    color: #fff!important;
}

/* Sub categories*/
.sub-categories {
    position: absolute;
    top: 30px;
}

.sub-categories ul {
    margin: 0;
    padding: 0;
}

.sub-categories ul li {
    float: left;
    margin-right: 10px;
}

.sub-categories ul li a {
    color: #333;
}

.sub-categories ul li a:hover {
    color: #e00000;
}

/* Visible banner on mobile */
@media (max-width: 992px) {
    .b1-aside .sw-banner, .featured-news .banner, .cat-blocks .sub-categories {
        display: none
    }
}

/* Custom gallery and Flex-slider plugin */
#slider {
    background: #232323;
    padding: 20px 20px 10px 20px;
    position: relative;
    margin: 0;
}

#carousel .flex-viewport {
    overflow: hidden;
    position: relative;
    background: #000000;
    padding: 20px 20px;
    display: table;
    width: 100%;
}

.flex-caption {
    width: 100%;
    padding: 2%;
    left: 0;
    bottom: 0;
    color: #fff!important;
    text-shadow: 0 -1px 0 rgba(0,0,0,.3);
    font-size: 14px;
    line-height: 18px;
}

.loader {
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #555; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.btnReadMore button {
    margin: 0 auto;
    background: #E00000;
    height: 38px;
    line-height: 38px;
    padding: 0px 25px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    font-family: Josefin Sans;
    text-transform: uppercase;
    display: table;
    margin: 0px;
    border: none;
    transition: .4s;
}

/* Box-content */
.box-content {
    padding: 20px;
    border: solid 1px #999;
    background: #E6E6FA;
    float: none;
    /*width: 90%;*/
    margin: 0 auto;
}
    
/* List Banner */
.lst-banner {
    margin: 0; 
    padding: 0;
	overflow: hidden;
}

    .lst-banner li {
        float: left;
        width: 48%;
        border: solid 1px #ccc;
        list-style-type: none;
        margin: 2% 2% 0 0;
        overflow: hidden;
    }

    .lst-banner .img-wrap {
        position: relative;
        width: 100%;
        height: 75px;        
    }

        .lst-banner li img {
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: auto;
            height: auto;            
        }

