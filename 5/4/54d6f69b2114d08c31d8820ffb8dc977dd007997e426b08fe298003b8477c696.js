/*! main.42f54e1e Mon Jan 29 2024 16:20:52 GMT+0000 (Coordinated Universal Time) */(arguments.length>1){if("number"==typeof(r=e({path:"/"},a.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}r.expires=r.expires?r.expires.toUTCString():"";try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var l="";for(var c in r)r[c]&&(l+="; "+c,!0!==r[c]&&(l+="="+r[c]));return document.cookie=t+"="+i+l}t||(o={});for(var u=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var p=u[m].split("="),f=p.slice(1).join("=");this.json||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var h=p[0].replace(d,decodeURIComponent);if(f=n.read?n.read(f,h):n(f,h)||f.replace(d,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(t===h){o=f;break}t||(o[h]=f)}catch(e){}}return o}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}((function(){}))}))},"./src/responsive/js/lib/labelclick.js":function(e,t,n){var a,i;a=[n("./node_modules/fastdom/fastdom.js")],void 0===(i=function(e){e.measure((function(){var t=document.getElementsByTagName("label");Array.prototype.slice.call(t).forEach((function(t){t.childNodes.length&&e.mutate((function(){t.onclick=function(e){void 0!==e&&"forwardedTouchEvent"in e&&e.forwardedTouchEvent&&"LABEL"!==e.target.nodeName&&function(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),e.dispatchEvent(t)}(this)}}))}))}))}.apply(t,a))||(e.exports=i)}});
//# sourceMappingURL=main.3a469ef87e0b82df9962.bundle.js.map