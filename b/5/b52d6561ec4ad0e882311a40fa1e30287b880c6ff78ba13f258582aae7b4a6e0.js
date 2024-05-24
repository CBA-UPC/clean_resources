var tata=[function(t,n,r){"use strict";unction o(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tr"){case"tr":return"top-right";case"tm":return"top-mid";case"tl":return"top-left";case"mr":return"mid-right";case"mm":return"mid-mid";case"ml":return"mid-left";case"br":return"bottom-right";case"bm":return"bottom-mid";case"bl":return"bottom-left";default:return"top-right"}}function a(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text"){case"text":return"chat_bubble";case"log":return"textsms";case"info":return"info";case"warn":return"info_outline";case"success":return"check";case"error":return"warning";case"ask":return"help_outline";default:return""}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-in";case"tl":case"ml":case"bl":return"slide-left-in";case"tm":return"slide-top-in";case"bm":return"slide-bottom-in"}return"fade-in"}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fade",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tr";if("slide"===t)switch(n){case"tr":case"mr":case"br":return"slide-right-out";case"tl":case"ml":case"bl":return"slide-left-out";case"tm":return"slide-top-out";case"bm":return"slide-bottom-out"}return"fade-out"}function c(t){t.target.classList.contains("tata-close")||this.opts.onClick.call(this)}function l(t){var n=t.target;if(n.classList.contains("tata-close")){var r=n.parentNode.getAttribute("id"),e=y.find(function(t){return t.id===r}),o=document.getElementById(r);o.classList.add(s(e.opts.animate,e.opts.position)),f(o),!!e.opts.onClose&&"function"==typeof e.opts.onClose&&e.opts.onClose.call(e)}}function f(t){var n=setTimeout(function(){"function"==typeof t.remove?t.remove():document.body.removeChild(t),clearTimeout(n)},800)}function u(t,n,r){var l=e(),u=a(r.type),d=o(r.position),p=i(r.animate,r.position),m={title:t,text:n,opts:r,id:l},h=y.findIndex(,g=0===h?null:y[h-1];y.push(m);var v='\n  <div class="tata '+r.type+" "+p+" "+d+'" id='+l+'>\n    <i class="tata-icon material-icons">'+u+'</i>\n    <div class="tata-body">\n      <h4 class="tata-title">'+t+'</h4>\n      <p class="tata-text">'+n+"</p>\n    </div>\n    "+(r.closeBtn||r.holding?'<button class="tata-close material-icons">clear</button>':"")+"\n    "+(!r.holding&&r.progress?'<div class="tata-progress"></div>':"")+"\n  </div>\n ";document.body.insertAdjacentHTML("beforeend",v),g&&g.opts.position===m.opts.position&&f(document.getElementById(g.id));var b=document.getElementById(l);if(!!r.onClick&&"function"==typeof r.onClick&&b.addEventListener("click",c.bind(m),{capture:!0,once:!0}),!r.holding&&r.progress){b.querySelector(".tata-progress").style.animation=r.duration/1e3+"s reduceWidth linear forwards";var x=setTimeout(function(){var t=y.findIndex(;y.splice(t,1),b.classList.add(s(m.opts.animate,m.opts.position)),f(b),clearTimeout(x),!!m.opts.onClose&&"function"==typeof m.opts.onClose&&m.opts.onClose.call(m)},r.duration)}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"text"}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"log"}))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"info"}))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"warn"}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"error"}))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ä½ å¥½",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ä»Šå¤©æ˜¯"+(new Date).toLocaleString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(t,n,Object.assign({},w,r,{type:"success"}))}function le,d,t)}function x(){y.forEach(function(t){return f(document.getElementById(t.id))}),y.length=0}Object.defineProperty(n,"__esModule",{value:!ent.createElement("link");n.rel="stylesheet",n.href=t,document.head.appendChild(n)}("https://fonts.googleapis.com/icon?family=Material+Icons"),document.addEventListener("click",l,!1);var y=[],w={type:"log",position:"tr",animatei[0]&&e[i[0]]||(his}catch(t){e=null}n[r]=e}return n[r[i];ifnct)?o:0===o.indexOf("/")?r+o:e+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}]);