!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,;
!window,;
!window,;
!window,;
!window,;
!window,;
!window,;
!"undefined"!=typeof window?window:this,;
!function(){window.FizzyDocs={},window.filterBind=function(n,t,i,e){n.addEventListener(t,}}();
FizzyDocs["commercial-license-agreement"]=function(e){"use strict";function t(e){var t=o.querySelector(".is-selected");t&&t.classList.remove("is-selected"),e.classList.add("is-selected");var i=e.getAttribute("data-license-option"),n=r[i];l.forEach(function(e){e.element.textContent=n[e.property]})}var r={developer:{title:"Developer","for-official":"one (1) Licensed Developer","for-plain":"one individual Developer"},team:{title:"Team","for-official":"up to eight (8) Licensed Developer(s)","for-plain":"up to 8 Developers"},organization:{title:"Organization","for-official":"an unlimited number of Licensed Developer(s)","for-plain":"an unlimited number of Developers"}},o=e.querySelector(".button-group"),i=e.querySelector("h2"),n=i.cloneNode(!0);n.style.borderTop="none",n.style.marginTop=0,n.id="",n.innerHTML=n.innerHTML.replace("Commercial License",'Commercial <span data-license-property="title"></span> License'),i.textContent="",o.parentNode.insertBefore(n,o.nextSibling);for(var l=[],a=e.querySelectorAll("[data-license-property]"),c=0,s=a.length;c<s;c++){var p=a[c],u={property:p.getAttribute("data-license-property"),element:p};l.push(u)}t(o.querySelector(".button--developer")),filterBind(o,"click",".button",};
!function(){var t=0;FizzyDocs["gh-button"]=function(n){ar a=n.href.split("/"),r=a[3],c=a[4],o=n.querySelector(".gh-button__stat__text");t++;var u="ghButtonCallback"+t;window[u]=function(t){var n=e(t.data.stargazers_count);o.textContent=n};var i=document.createElement("script");i.src="https://api.github.com/repos/"+r+"/"+c+"?callback="+u,document.head.appendChild(i)}}();
FizzyDocs["shirt-promo"]=function(e){var t=new Date(2017,9,6),o=Math.round((t-new Date)/864e5),r=e.querySelector(".shirt-promo__title");r.textContent+=". Only on sale for "+o+" more days."};
!function(t){"use strict";function e(){var t=new Date,e=t.getMinutes();e=e<10?"0"+e:e;var n=t.getSeconds();return n=n<10?"0"+n:n,[t.getHours(),e,n].join(":")}function n(){c?(o.style[c]="opacity 1.0s",o.style.opacity="0"):o.style.display="none"}var i=t.MasonryDocs={};t.filterBindEvent=function(t,e,n,i){t.addEventListener(e,function(t){matchesSelector(t.target,n)&&i.call(t.target,t)})};var o;document.addEventListener("DOMContentLoaded",function(){o=document.querySelector("#notification");for(var t=document.querySelectorAll("[data-js]"),e=0;e<t.length;e++){var n=t[e],r=n.getAttribute("data-js"),a=i[r]||FizzyDocs[r];a&&a(n)}}),i.getItemElement=function(){var t=document.createElement("div"),e=Math.random(),n=Math.random(),i=e>.8?"grid-item--width3":e>.6?"grid-item--width2":"",o=n>.8?"grid-item--height3":n>.5?"grid-item--height2":"";return t.className="grid-item "+i+" "+o,t};var r,a=document.documentElement,c="string"==typeof a.style.transition?"transition":"WebkitTransition",s=c?1e3:1500;i.notify=function(t){o.textContent=t+" at "+e(),o.style[c]="none",o.style.display="block",o.style.opacity="1",clearTimeout(r),r=setTimeout(n,s)}}(window);
MasonryDocs["animate-item-size"]=function(e){"use strict";var t=e.querySelector(".grid"),i=new Masonry(t,{columnWidth:60});filterBindEvent(t,"click",".animate-item-size-item__content",function(e){e.target.parentNode.classList.toggle("is-expanded"),i.layout()})};
MasonryDocs["animate-item-size-responsive"]=function(t){"use strict";function e(t){var e=getSize(t);t.style[o]="none",t.style.width=e.width+"px",t.style.height=e.height+"px"}function i(t){var e=function(){t.style.width="",t.style.height="",t.removeEventListener(r,e,!1)};t.addEventListener(r,e,!1)}function n(t,e){var i=getSize(e);t.style.width=i.width+"px",t.style.height=i.height+"px"}var s=document.documentElement,o="string"==typeof s.style.transition?"transition":"WebkitTransition",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],a=t.querySelector(".grid"),d=new Masonry(a,{itemSelector:".animate-item-size-item",columnWidth:".grid-sizer",percentPosition:!0});filterBindEvent(a,"click",".animate-item-size-item__content",function(){var t=this;e(t);var s=t.parentNode;s.classList.toggle("is-expanded");t.offsetWidth;t.style[o]="",i(t),n(t,s),d.layout()})};
MasonryDocs["appended-demo"]=function(e){"use strict";var n=e.querySelector(".grid"),t=new Masonry(n,{columnWidth:80}),d=e.querySelector(".append-button");d.addEventListener("click",function(){var e=[MasonryDocs.getItemElement(),MasonryDocs.getItemElement(),MasonryDocs.getItemElement()],d=document.createDocumentFragment();d.appendChild(e[0]),d.appendChild(e[1]),d.appendChild(e[2]),n.appendChild(d),t.appended(e)})};
MasonryDocs["destroy-demo"]=function(e){"use strict";var o=e.querySelector(".grid"),t={columnWidth:80},n=new Masonry(o,t),r=!0,c=e.querySelector(".toggle-button");c.addEventListener("click",function(){r?n.destroy():n=new Masonry(o,t),r=!r})};
MasonryDocs["imagesloaded-callback"]=function(e){"use strict";imagesLoaded(e,function(){new Masonry(e,{itemSelector:".grid-image-item",columnWidth:".grid-sizer",percentPosition:!0})})};
MasonryDocs["imagesloaded-progress"]=function(e){"use strict";var o=new Masonry(e,{itemSelector:".grid-image-item",columnWidth:".grid-sizer",percentPosition:!0}),i=imagesLoaded(e);i.on("progress",};
MasonryDocs["layout-complete-demo"]=function(t){"use strict";var o=t.querySelector(".grid"),e=new Masonry(o,{columnWidth:80});e.on("layoutComplete",function(t){MasonryDocs.notify("Masonry layout completed on "+t.length+" items")}),filterBindEvent(o,"click",".grid-item",function(t){t.target.classList.toggle("grid-item--gigante"),e.layout()})};
MasonryDocs["layout-demo"]=function(t){"use strict";var i=t.querySelector(".grid"),e=new Masonry(i,{columnWidth:80});filterBindEvent(i,"click",".grid-item",function(t){t.target.classList.toggle("grid-item--gigante"),e.layout()})};
MasonryDocs["prepended-demo"]=function(e){"use strict";var n=e.querySelector(".grid"),t=new Masonry(n,{columnWidth:80}),r=e.querySelector(".prepend-button");r.addEventListener("click",function(){var e=[MasonryDocs.getItemElement(),MasonryDocs.getItemElement(),MasonryDocs.getItemElement()],r=document.createDocumentFragment();r.appendChild(e[0]),r.appendChild(e[1]),r.appendChild(e[2]),n.insertBefore(r,n.firstChild),t.prepended(e)})};
MasonryDocs["remove-complete-demo"]=function(e){"use strict";var o=e.querySelector(".grid"),t=new Masonry(o,{columnWidth:80});t.on("removeComplete",,filterBindEvent(o,"click",".grid-item",function(e){t.remove(e.target),t.layout()})};
MasonryDocs["remove-demo"]=function(e){"use strict";var r=e.querySelector(".grid"),t=new Masonry(r,{columnWidth:80});filterBindEvent(r,"click",".grid-item",};
MasonryDocs.stagger=function(t){"use strict";var e=t.querySelector(".grid"),i=new Masonry(e,{columnWidth:80,stagger:30});filterBindEvent(e,"click",".grid-item",};
MasonryDocs["stamp-methods-demo"]=function(t){"use strict";var e=t.querySelector(".grid"),o=new Masonry(e,{itemSelector:".grid-item",columnWidth:80}),r=e.querySelector(".stamp"),n=!1,s=t.querySelector(".stamp-button");s.addEventListener("click",function(){n?o.unstamp(r):o.stamp(r),o.layout(),n=!n})};
MasonryDocs.hero=function(e){"use strict";function t(e){var t=document.createElement("div");t.className="hero-grid__item";var i=document.createElement("a");i.className="hero__example-link",i.href=e.url;var r=document.createElement("img");r.className="hero__example-link__img",r.src=e.image;var m=document.createElement("p");return m.className="hero__example-link__title",m.textContent=e.title,i.appendChild(r),i.appendChild(m),t.appendChild(i),t}for(var i=e.querySelector(".hero-grid"),r=new Masonry(i,{itemSelector:".hero-grid__item",columnWidth:".hero-grid__grid-sizer",percentPosition:!0}),m=[{title:"Erik Johansson",url:"http://erikjohanssonphoto.com/work/imagecats/personal/",image:"https://i.imgur.com/6Lo8oun.jpg"},{title:"Beyoncé | I Am",url:"http://iam.beyonce.com/",image:"https://i.imgur.com/HDSAMFl.jpg"},{title:"Webster Hall Timeline",url:"http://www.websterhall.com/timeline/",image:"https://i.imgur.com/VWfCPYx.jpg"},{title:"Halcyon theme",url:"http://halcyon-theme.tumblr.com/",image:"https://i.imgur.com/A1RSOhg.jpg"},{title:"RESIZE.THATSH.IT",url:"http://resize.thatsh.it/",image:"https://i.imgur.com/00xWxLG.png"},{title:"Tumblr Staff: Archive",url:"http://staff.tumblr.com/archive",image:"https://i.imgur.com/igjvRa3.jpg"},{title:"Kristian Hammerstad",url:"http://www.kristianhammerstad.com/",image:"https://i.imgur.com/Zwd7Sch.jpg"},{title:"Loading Effects for Grid Items | Demo 2",url:"http://tympanus.net/Development/GridLoadingEffects/index2.html",image:"https://i.imgur.com/iFBSB1t.jpg"}],a=[],o=document.createDocumentFragment(),n=0,l=m.length;n<l;n++){var c=t(m[n]);a.push(c),o.appendChild(c)}imagesLoaded(o).on("progress",function(e,t){var m=t.img.parentNode.parentNode;i.appendChild(m),r.appended(m)})};