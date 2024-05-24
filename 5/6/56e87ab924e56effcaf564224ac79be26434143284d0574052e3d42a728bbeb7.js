/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
 Sizzle CSS Selector Engine
  Copyright 2011, The Dojo Foundation
  Released under the MIT, BSD, and GPL Licenses.
  More information: http://sizzlejs.com/
*/
(function(K){var r=window.AmazonUIPageJS||window.P,m=r._namespace||r.attributeErrors,F=m?m("AmazonUIjQuery","AmazonUI"):r;F.guardFatal?F.guardFatal(K)(F,window):F.execute(function(){K(F,window)})})(function(K,r,m){r.navigator&&r.navigator.userAgent&&K.declare("jQuery",());K.when("p-detect","jQuery").execute("rtl-jquery-plugin",function(r,y)function I(m){return}function L(m,r,w,y){return function(u){var z="number"===typeof u?u:u.replace(/^\s+|\s+$/gm,"").split(/\s+/);return 4===z.length?[z[m],z[r],z[w],z[y]].join(" "):u}}function K(m){return D(F(m)).replace(/(margin|padding|border)-(left|right)/,
function(m,r,z){return r+"-"+D(z)}).replace(/border-(top|bottom)-(left|right)/,function(m,r,z){return"border-"+r+"-"+D(z)})}function qa(m){var r={};y.each(m,function(u){r[D(F(u)).replace(/(margin|padding|border)-(left|right)/,function(m,r,u){return r+"-"+D(u)}).replace(/border-(top|bottom)-(left|right)/,function(m,r,u){return"border-"+r+"-"+D(u)})]=m[u]});return r}var J=r.capabilities.rtl,O=!1,D=I({left:"right",right:"left"});r=I({ltr:"rtl",rtl:"ltr"});var P=L(0,3,2,1),ea=L(1,0,3,2),fa={direction:r,
"float":D,clear:D,textAlign:D,margin:P,padding:P,borderStyle:P,borderColor:P,borderWidth:P,borderRadius:ea};y.withoutRtl=function(m){J=!1;m.apply(this);J=!0};var S=y.style;y.style=function(r,u,w,D){var z=u,F=w;J&&(z=K(u),w!==m&&(F=(u=fa[y.camelCase(z)])?u(w):w));return S.call(this,r,z,F,D)};var aa=y.css;y.css=function(m,r,w){return O?(O=!1,aa.call(this,m,r,w)):aa.call(this,m,J?K(r):r,w)};var ha=y.fn.animate;y.fn.animate=function(m,r,w,y){O=!0;return ha.call(this,J?qa(m):m,r,w,y)};var sa=y.fn.offset;
y.fn.offset=function(m){var r=sa.call(this,m);if(m||!r)return r;if(J){var w=this[0];m=w.ownerDocument.body;w=w.getBoundingClientRect();r.left=m.clientWidth-r.left-(w.right-w.left)}return r}})});
/* ******** */
(function(f){var g=window.AmazonUIPageJS||window.P,l=g._namespace||g.attributeErrors,e=l?l("AmazonUIPromise","AmazonUI"):g;e.guardFatal?e.guardFatal(f)(e,window):e.execute(function(){f(e,window)})}));
/* ******** */
(function(n){var m=window.AmazonUIPageJS||window.P,q=m._namespace||m.attributeErrors,b=q?q("AmazonUIBaseJS@base","AmazonUI"):m;b.guardFatal?b.guardFatal(n)(b,window):b.execute(function(){n(b,window)})}));
/* ******** */
(function(g){var c=window.AmazonUIPageJS||window.P,n=c._namespace||c.attributeErrors,e=n?n("AmazonUIBaseJS@declarative","AmazonUI"):c;e.guardFatal?e.guardFatal(g)(e,window):e.execute(function(){g(e,window)})}));
/* ******** */
(function(f){var e=window.AmazonUIPageJS||window.P,n=e._namespace||e.attributeErrors,a=n?n("AmazonUIBaseJS@preload","AmazonUI"):e;a.guardFatal?a.guardFatal(f)(a,window):a.execute(function(){f(a,window)})}));
/* ******** */
(function(c){var b=window.AmazonUIPageJS||window.P,d=b._namespace||b.attributeErrors,a=d?d("AmazonUIBaseJS@touch","AmazonUI"):b;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,b,d){});
/* ******** */
(function(a){var c=window.AmazonUIPageJS||window.P,d=c._namespace||c.attributeErrors,b=d?d("AmazonUIBaseJS@A","AmazonUI"):c;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})}));
/* ******** */
(function(c){var f=window.AmazonUIPageJS||window.P,g=f._namespace||f.attributeErrors,d=g?g("AmazonUIButton@buttonJS","AmazonUI"):f;d.guardFatal?d.guardFatal(c)(d,window):d.execute(function(){c(d,window)})}));
/* ******** */
(function(c){var e=window.AmazonUIPageJS||window.P,f=e._namespace||e.attributeErrors,a=f?f("AmazonUIMeter@control","AmazonUI"):e;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})}));
/* ******** */
(function(d){var g=window.AmazonUIPageJS||window.P,f=g._namespace||g.attributeErrors,a=f?f("AmazonUIFont","AmazonUI"):g;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})}));
/* ******** */
(function(n){var E=window.AmazonUIPageJS||window.P,z=E._namespace||E.attributeErrors,e=z?z("AmazonUICarousel@control","AmazonUI"):E;e.guardFatal?e.guardFatal(n)(e,window):e.execute(function(){n(e,window)})}));
/* ******** */
(function(d){var k=window.AmazonUIPageJS||window.P,l=k._namespace||k.attributeErrors,b=l?l("AmazonUIComponents","AmazonUI"):k;b.guardFatal?b.guardFatal(d)(b,window):b.execute(function(){d(b,window)})}));
/* ******** */
(function(f){var d=window.AmazonUIPageJS||window.P,g=d._namespace||d.attributeErrors,c=g?g("AmazonUITabs@TabsJS","AmazonUI"):d;c.guardFatal?c.guardFatal(f)(c,window):c.execute(function(){f(c,window)})}));
/* ******** */
(function(d){var h=window.AmazonUIPageJS||window.P,g=h._namespace||h.attributeErrors,a=g?g("AmazonUIAccordion@jsAssets","AmazonUI"):h;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})}));
/* ******** */
(function(g){var c=window.AmazonUIPageJS||window.P,n=c._namespace||c.attributeErrors,a=n?n("AmazonUIExpander@js","AmazonUI"):c;a.guardFatal?a.guardFatal(g)(a,window):a.execute(function(){g(a,window)})}));
/* ******** */
(function(e){var p=window.AmazonUIPageJS||window.P,l=p._namespace||p.attributeErrors,d=l?l("AmazonUISwitch","AmazonUI"):p;d.guardFatal?d.guardFatal(e)(d,window):d.execute(function(){e(d,window)})}));
/* ******** */
(function(a){var f=window.AmazonUIPageJS||window.P,l=f._namespace||f.attributeErrors,b=l?l("AmazonUIProgressBar@control","AmazonUI"):f;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})}));
/* ******** */
(function(n){var u=window.AmazonUIPageJS||window.P,z=u._namespace||u.attributeErrors,c=z?z("AmazonUIPopover@base","AmazonUI"):u;c.guardFatal?c.guardFatal(n)(c,window):c.execute(function(){n(c,window)})}));
/* ******** */
(function(d){var f=window.AmazonUIPageJS||window.P,c=f._namespace||f.attributeErrors,e=c?c("AmazonUIPopover@modal","AmazonUI"):f;e.guardFatal?e.guardFatal(d)(e,window):e.execute)}));
/* ******** */
));
/* ******** */
(function(c){var b=window.AmazonUIPageJS||window.P,d=b._namespace||b.attributeErrors,a=d?d("AmazonUIBottomSheet","AmazonUI"):b;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,b,d){});
/* ******** */
(function(e){var k=window.AmazonUIPageJS||window.P,g=k._namespace||k.attributeErrors,c=g?g("AmazonUITruncate","AmazonUI"):k;c.guardFatal?c.guardFatal(e)(c,window):c.execute(function(){e(c,window)})}));
/* ******** */
(function(l){var m=window.AmazonUIPageJS||window.P,n=m._namespace||m.attributeErrors,b=n?n("AmazonUICardUI","AmazonUI"):m;b.guardFatal?b.guardFatal(l)(b,window):b.execute(function(){l(b,window)})}));
/* ******** */
(function(c){var b=window.AmazonUIPageJS||window.P,d=b._namespace||b.attributeErrors,a=d?d("AmazonUICompatJS","AmazonUI"):b;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})}));
/* ******** */
(function(c){var a=window.AmazonUIPageJS||window.P,d=a._namespace||a.attributeErrors,b=d?d("AmazonUI","AmazonUI"):a;b.guardFatal?b.guardFatal(c)(b,window):b.execute(function(){c(b,window)})}));
/* ******** */
