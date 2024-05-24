/*! lozad.js - v1.15.0 - 2020-05-23
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var u="undefined"!=typeof document&&document.documentMode,c={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");u&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,i=0;i<=r.length-1;i++)(a=r[i].getAttribute("data-src"))&&(r[i].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var n=t.getAttribute("data-background-image-set").split(o),d=n[0].substr(0,n[0].indexOf(" "))||n[0];// Substring before ... 1x
d=-1===d.indexOf("url(")?"url("+d+")":d,1===n.length?t.style.backgroundImage=d:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+d+"; background-image: -webkit-image-set("+n+"); background-image: image-set("+n+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:;ar b=return );