(self.webpackChunkbay.bandwidth&&(A=y.bandwidth()/2);var n=".igc-crosshair-circle";d.selectAll(n).remove(),(R=(R=d.selectAll(n).data([0])).merge(R.enter().append("circle").attr("class",n.slice(1)))).attr("visibility","hidden").attr("r",P).styles({stroke:"white","stroke-width":L}),R.on("mouseover.crosshair_circle",e),R.on("mouseout.crosshair_circle",s),R.on("click.crosshair_circle",t)}};var j=a().debounce(function(){E||(X=null,R&&R.attr("visibility","hidden"),B().hide())},50);return Object.assign(O,{target:function(e){return arguments.length?(f&&(f.on("mouseover.crosshair",null),f.on("mousemove.crosshair",null),f.on("mouseout.crosshair",null),f.on("click.crosshair",null)),(f=e).on("mouseover.crosshair",n),f.on("mousemove.crosshair",r),f.on("mouseout.crosshair",j),f.on("click.crosshair",t),O):f},targetParent:function(t){return arguments.length?(d=t,O):d},scaleX:function(t){return arguments.length?(y=t,O):y},scaleY:function(t){return arguments.length?(p=t,O):p},scaleY1:function(t){return arguments.length?(m=t,O):m},data:function(t){return arguments.length?(g=t,O):g},groupId:function(t){return arguments.length?(_=t,O):_},chartId:function(t){return arguments.length?(w=t,O):w},offset:function(t){return arguments.length?(k.left="number"==typeof t.left?t.left:k.left,k.top="number"==typeof t.top?t.top:k.top,O):k},strokeColor:function(t){return arguments.length?(V=t,O):V},strokeWidth:function(t){return arguments.length?(L=t,O):L},radius:function(t){return arguments.length?(P=t,O):P},bounds:function(t){return arguments.length?(b.width="number"==typeof t.width?t.width:b.width,b.height="number"==typeof t.height?t.height:b.height,O):b},svgContainer:function(t){return arguments.length?(x=t,O):x},tooltipText:function(t){return arguments.length?(T=t,O):T},tooltipValue:function(t){return arguments.length?(U=t,O):U},tooltip:function(t){return arguments.length?(B=t,O):B},pointRect:function(t){return arguments.length?(Y=t,O):Y},dispatch:function(){return C}}),O}function c(t,n){if(n.invert)return n.invert(t);var r;var e;var i=(r=n.domain(),e=n.bandwidth()/2,a().sortBy(r.map(function(r){var a=n(r)+e;return{distance:Math.abs(t-a),posValue:r,pos:a}}),function(t){return t.distance})[0]);return i&&i.posValue}function v(t){var n=t.mousePosition,r=t.y,e=t.y1,a=t.pointRect,i=t.bounds,o=t.data;var l=null;var u=null;var s=Number.MAX_VALUE;var c=o.map(function(t){var r=Math.abs(n.x-t.x);var e={d:t,distanceX:r};return r<s&&(s=r,l=e),e});return s=Number.MAX_VALUE,c.forEach(function(t){if(t.distanceX===l.distanceX){var o=r(t.d.y);"y1"===t.d.scale&&e&&(o=e(t.d.y));var c=Math.abs(n.mouseY-o);var v=o>=0&&o<=i.height;a&&(v=o>=a.y&&o<=a.height),c<=s&&null!==t.d.y&&v&&(s=c,u=t)}}),u&&u.d}},5235:(t,n,r)=>{r.d(n,{x:()=>m});var e=r(449);var a=r.n(e);var i=r(391);var o=r(3079);var l=r(944);var u=r(3074);var s=r(3072);var c=r(5236);var v=r(5242);var h=r(5240);var f=r(941);var d=r(5229);var g=r(942);var y=r(3100);var p=".igc-graph-line-path";function m(){var t=function(t){I.opacity=O,t.each(function(){if(!_.length){C.call("animationEnd");return}var t=(0,l.Z)(this);var e=this.__chart__=x.copy();var a=this.__chart__=w.copy();e.bandwidth&&(T=e.bandwidth()/2),V&&(_=_.filter(V));var i=(0,c.Z)().defined(function(t){return null!==t.y&&null!==t.x}).curve(Z).x(function(t){return e(t.x)+T}).y(function(t){return a(t.y)});var o=(0,c.Z)().defined(function(t){return null!==t.y}).curve(v.Z).x(function(t){return e(t.x)+T}).y(function(t){return a(t.y)});var s=(0,c.Z)().defined(function(t){return null!==t.y&&null!==t.x}).curve(Z).x(function(t){return e(t.x)+T}).y(function(){return a(0)});var h=t.selectAll(p).data([0]);h=h.enter().append("path").attr("class",p.slice(1)).merge(h);var f=i(_);L?h.attr("d",s(_)).styles(I).style("strokeWidth",0).transition().ease(u.gJ).attr("d",f).on("end",function(){r(h),n(t,o(_)),C.call("animationEnd")}):(h.attr("d",f).styles(I),r(h),n(t,o(_)),C.call("animationEnd")),Y&&Y.addListener({id:A,dispatch:C})})};var n=function(t,n){var r=".hover-line";var e=P.source,a=P.sameAxisGraphTypes,i=P.enabled;if(t.selectAll(r).remove(),"double"===e&&!a&&!i){var o=(0,l.Z)(P.svgContainer).select(".igc");var u=t.selectAll(r).data([0]).enter().append("path").attr("class",r.slice(1)).attr("d",n).styles({fill:"none",stroke:"transparent","stroke-width":20,"stroke-linecap":"round"});var s=".igc-crosshair-circle";o.selectAll(s).remove(),(B=(B=o.selectAll(s).data([0])).enter().append("circle").attr("class",s.slice(1)).merge(B)).attr("visibility","hidden").attr("r",5).styles({stroke:"white","stroke-width":2}),B.on("mouseover.crosshair_circle",k),B.on("mouseout.crosshair_circle",b),m(u)}};var r=function(t){C.on("highlightStart",function(n,r){E!==n&&A===r&&t.transition().duration(150).ease(s.G).style("opacity",.3*O)}),C.on("highlightEnd",function(n,r){E!==n&&A===r&&t.transition().duration(150).ease(s.G).style("opacity",O)})};var e=function(t){var n=P.y1,r=P.bounds,e=P.pointRect;return(0,d.Or)({mousePosition:t,y:n,y1:n,bounds:r,pointRect:e,data:_})};var m=function(t){var n=P.y1,r=P.svgContainer,i=P.offset;var o=(0,g.jK)(r,i);t.classed("igc-chart-link",function(t){return!!(t&&t.titleLink)}).on("mouseover",function(){j().interaction("show")}).on("mousemove",function(t){var a=o(t);var l=document.body;var u=e({x:(0,d.Jb)(a[0],x),mouseY:a[1]});if(null!==u&&u!==M){var s="y1"===(M=u).scale&&n||w;var c=x(M.x);var v=s(M.y);if(B.attr("cx",c+T).attr("cy",v).style("fill",I.stroke).attr("visibility","visible"),M){var h=r.getBoundingClientRect();var f={x:h.left+i.left+c+T+l.scrollLeft,y:h.top+i.top+v+l.scrollTop};var g=R(M);var y=X(M);B.styles({stroke:I.stroke,fill:"white"}),j().setText(g).setValue(y).setPosition(f,I.stroke)}else B.styles({stroke:"white",fill:I.stroke}),j().hide()}}).on("mouseout",a().debounce(function(){U||(M=null,B.attr("visibility","hidden"),j().hide())},50)).on("click",function(t,n){var r=n.link||n.titleLink;C.call("openUrl",null,r)})};var k=function(){U=!0};var b=function(){U=!1};var x=(0,o.Z)();var w=(0,o.Z)();var _=[];var Z=h.Z;var A;var E;var Y;var C=(0,i.Z)("highlightStart","highlightEnd","animationEnd","openUrl");var V;var L=!0;var P={enabled:!1};var R=function(t){return t.x};var X=function(t){return t.y};var T=0;var U=!1;var B=null;var M=null;var O=1;var j=f.gB;var I={fill:"none",stroke:"#000000","stroke-width":1,"stroke-dasharray":null};var S;return Object.assign(t,{scaleX:function(n){return arguments.length?(x=n,t):x},scaleY:function(n){return arguments.length?(w=n,t):w},data:function(n){return arguments.length?(_=n,t):_},interpolate:function(n){return arguments.length?(Z=n,t):Z},colors:function(n){return I.stroke=n[0],t},groupId:function(n){return arguments.length?(E=n,t):E},chartId:function(n){return arguments.length?(A=n,t):A},dispatch:function(){return C},legend:function(n){return arguments.length?(Y=n,t):Y},filterFn:function(n){return arguments.length?(V=n,t):V},animate:function(n){return arguments.length?(L=n,t):L},alpha:function(n){return arguments.length?(O=n,t):O},dataPointOptions:function(){return arguments.length?(P=arguments[0],t):P},tooltip:function(n){return arguments.length?(j=n,t):j},tooltipText:function(n){return arguments.length?(R=n,t):R},tooltipValue:function(n){return arguments.length?(X=n,t):X},strokeWidth:function(n){return I["stroke-width"]=n,I["stroke-dasharray"]=(0,y.y)(S,n),t},strokeStyle:function(n){return arguments.length?(S=n,I["stroke-dasharray"]=(0,y.y)(S,I["stroke-width"]),t):S}}),t}}}]);window.vwo_ga4_uuid=ga4_device_id.split(".").slice(-2).join(".")}},verifyData:function(data){if(typeof window.VWO._.cookies!=="undefined"){return window.VWO._.cookies.get("_ga")||""}else{return false}}})();
        (function(){var VWOOmniTemp={};window.VWOOmni=window.VWOOmni||{};for(var key in VWOOmniTemp)Object.prototype.hasOwnProperty.call(VWOOmniTemp,key)&&(window.VWOOmni[key]=VWOOmniTemp[key]);;})();(function(){window.VWO=window.VWO||[];var pollInterval=100;var _vis_data={};var intervalObj={};var analyticsTimerObj={};var experimentListObj={};window.VWO.push(["onVariationApplied",function(data){if(!data){return}var expId=data[1],variationId=data[2];if(expId&&variationId&&["VISUAL_AB","VISUAL","SPLIT_URL"].indexOf(window._vwo_exp[expId].type)>-1){}}])})();        "function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0});
    if(_vwo_exp[84]) Object.assign(_vwo_exp[84],{"GTM":1});window.VWO.data.vi = window.VWO.data.vi || {"dt":"desktop","os":"Windows","de":"Other","br":"Firefox"};
window.VWO.push(['enableSPA']);
VWO.load_co=function(a){var b=document.createElement('script');b.src=a;b.crossOrigin='anonymous';b.fetchPriority='high';b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code && _vwo_code.finish();};document.getElementsByTagName('head')[0].appendChild(b);}
var _vwo_cookieDomain = 'ispot.tv', _vwo_uuid = 'DE451DF84427B724B94C62F6B253E946A';window.VWO.data.as = "r3.visualwebsiteoptimizer.com";var _vwo_library_timer = setTimeout(function () { var vwoCode = window._vwo_code; vwoCode.removeLoaderAndOverlay && vwoCode.removeLoaderAndOverlay(); vwoCode.finish()}, vwoCode.library_tolerance && typeof vwoCode.library_tolerance() !== 'undefined' ? vwoCode.library_tolerance() : 2500);var _vis_opt_file = 'web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ==/tag-0a20c548b42589af47d37a6d4f0ece25.js',_vis_opt_lib = (typeof _vis_opt_lib=='undefined')?'https://dev.visualwebsiteoptimizer.com/'+_vis_opt_file:_vis_opt_lib;VWO.load_co(_vis_opt_lib);;window.VWO=window.VWO||[];window.VWO._=window.VWO._||{};VWO._.ac=VWO._.ac||{};; 
window.VWO = window.VWO || [];
window.VWO.data = window.VWO.data || {};
VWO.data.content={"fns":{"list":{"vn":1,"args":{"1":{}}}}};;window.VWO = window.VWO||[];window.VWO._=window.VWO._||{};VWO._.ac=VWO._.ac||{};VWO._.ac.dNdOfst=1000;;window.VWO.data.SCC='{"cache":0}';}}catch(e){_vwo_code.finish(); _vwo_code.removeLoaderAndOverlay && _vwo_code.removeLoaderAndOverlay(); var vwo_e=new Image;vwo_e.src="https://dev.visualwebsiteoptimizer.com/e.gif?a=639935&s=j.php&e="+encodeURIComponent(e && e.message && e.message.substring(0,1000))+"&url"+encodeURIComponent(window.location.href)}737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;bootstrap-ext&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;footer&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;modal&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;bootstrap&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;modules&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;utils&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;typography&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;pro.fontawesome.com&#x2F;releases&#x2F;v5.15.3&#x2F;css&#x2F;svg-with-js.css" media="all" rel="stylesheet" type="text&#x2F;css" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Medium.woff2" rel="preload" crossorigin="anonymous" as="font">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Bold.woff2" rel="preload" crossorigin="anonymous" as="font">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Regular.woff2" rel="preload" crossorigin="anonymous" as="font"><style type="text/css" media="screen" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f"></style> 
<meta name="hb-feature" content="feature=injectSDCC"></head>
<body class="mnav__agreements">

<noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWQKWB5" height="0" width="0" class="gtm-noscript"></iframe>
    </noscript>
<div class="notification">
<div class="notification__container">Learn the secrets to maximizing Super Bowl Ad impact. <a href="https://on.ispot.tv/3SutKGC" data-qa="notification_link">Register Now></a></div>
</div>
<div class="wrapper">
<header class="hdr">
<nav class="hdr__nav">
<ul class="hdr__ul hdr__main">
<li class="hdr__li hdr__logo">
<a href="/">
<span class="sr-only">iSpot.tv Logo</span>
<svg class="logo " aria-labelledby="logoTitle8637294 logoDesc2024749" role="img" height="36" width="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 21">
<title id="logoTitle8637294">Link to iSpot.tv Homepage</title>
<desc id="logoDesc2024749">Displays the iSpot.tv logo and links to Link to the homepage</desc>
<path class="logo__text" fill="#000" d="M1 2.9c-.4-.3-.5-.7-.5-1.1 0-.4.1-.8.5-1.1.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.4.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.1.5c-.4 0-.8-.1-1.1-.5zm2.4 14.6h-2.6v-12.1h2.6v12.1zm7.4-13.9c-.8 0-1.4.2-1.9.5s-.8.8-.8 1.5c0 .6.3 1.1.8 1.5.5.3 1.6.7 3.2 1.1 1.6.4 2.9.9 3.7 1.7.8.7 1.2 1.8 1.2 3.2s-.5 2.5-1.6 3.4c-1 .9-2.4 1.3-4.1 1.3-2.5 0-4.7-.9-6.6-2.6l1.7-2c1.6 1.4 3.3 2.1 5 2.1.9 0 1.6-.2 2.1-.6.5-.4.8-.9.8-1.5s-.2-1.1-.7-1.4c-.6-.5-1.4-.8-2.6-1.1-1.1-.2-2-.5-2.6-.7-.6-.3-1.2-.6-1.7-1-.9-.7-1.4-1.8-1.4-3.2 0-1.5.5-2.6 1.6-3.4 1.1-.8 2.4-1.2 4-1.2 1 0 2 .2 3 .5s1.9.8 2.6 1.4l-1.4 2c-.5-.4-1.1-.8-1.9-1-.8-.3-1.6-.5-2.4-.5zm14.2 1.6c1.6 0 3 .6 4.2 1.7 1.2 1.1 1.7 2.6 1.7 4.5s-.6 3.4-1.7 4.6c-1.1 1.2-2.5 1.8-4 1.8s-2.9-.7-4.1-2v5.3h-2.6v-15.7h2.6v2.1c1-1.6 2.3-2.3 3.9-2.3zm-3.9 6.2c0 1.2.3 2.1 1 2.8.7.7 1.5 1.1 2.6 1.1 1 0 1.9-.4 2.6-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.2-.4-2.1-1.1-2.9-.7-.8-1.6-1.2-2.6-1.2s-1.9.4-2.6 1.2c-.7.8-1 1.8-1 2.9zm27.2-4v6.1c0 .6.2 1 .5 1.4.3.3.7.5 1.3.5.5 0 1.1-.3 1.6-.8l1 1.8c-.9.8-1.9 1.2-3 1.2s-2-.4-2.8-1.1c-.8-.8-1.2-1.8-1.2-3v-11.9h2.6v3.8h3.2v2h-3.2zm6.5 9.8c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.7.5 1.2s-.2.9-.5 1.2c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5zm19.3-11.8l-3.7 9.2-3.7-9.2h-5v-3.8h-2.6v11.9c0 1.3.4 2.3 1.2 3 .8.8 1.7 1.1 2.8 1.1 1.1 0 2.1-.4 3-1.2l-1-1.8c-.5.5-1 .8-1.6.8-.5 0-1-.2-1.3-.5-.3-.3-.5-.8-.5-1.4v-6.1h3.2l4 10.1h2.9l4.9-12.1h-2.6z"></path>
<path class="logo__mark-bg" fill="transparent" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2z"></path>
<path class="logo__mark" fill="#77bd22" d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm-.8 9.4l-1.1.7c-.3.2-.6 0-.6-.4v-7c0-.3.3-.6.6-.4.1 0 .5.3 1.1.7v6.4zm2.4-1.5c-.6.4-1.2.7-1.7 1.1v-5.6c.5.3 1.2.7 1.7 1.1v3.4zm2.2-1.3l-1.5.9v-2.6l1.5.9c.3.2.3.6 0 .8z"></path>
</svg>
</a>
</li>
<li class="hdr__li hdr__search">
<a href="/search" data-qa="nav_search_icon">
<span class="sr-only">Search iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
<path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__login">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics_icon">
<span class="sr-only">Login to iSpot.tv</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
</svg> </a>
</li>
<li class="hdr__li hdr__cta">
<a class="hdr__btn btn btn-outline-primary" href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__toggle hdr__mobile-only">
<a id="m-nav-open" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Open Navigation">
<span class="sr-only">Open Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
</svg> </a>
<a id="m-nav-close" class="js-nav-toggle" href="#" data-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Close Navigation">
<span class="sr-only">Close Navigation</span>
<svg class="hdr__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
</svg> </a>
</li>
<li class="hdr__li hdr__primary">
<div class="sr-only">Navigation</div>
<ul class="hdr__ul">
<li id="nav-solutions" class="hdr__li">
<a href="#" id="navbarSolutions" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_solutions">
Solutions
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSolutions">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Solutions</span></div>
<a class="hdr__dt-action" href="/solutions" data-qa="nav_solutions_solutions_overview">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/solutions" data-qa="nav_solutions_solutions_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/brands" data-qa="nav_solutions_brands">Brands</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/networks" data-qa="nav_solutions_networks">Networks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/solutions/agencies" data-qa="nav_solutions_agencies">Agencies</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-products" class="hdr__li">
<a href="#" id="navProducts" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_products">
Products
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navProducts">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Products</span></div>
<a class="hdr__dt-action" href="/products">
Overview <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/products" data-qa="nav_products_products_overview">Overview</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/creative-testing" data-qa="nav_products_creative_assessment">Creative Assessment</a>
<ul>
<li><a class="hdr__sub-item" href="/products/creative-testing/pre-market" data-qa="nav_products_pre_market_ad_testing">Pre-Market Ad Testing</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/in-market" data-qa="nav_products_in_market_benchmarking">In-Market Benchmarking</a></li>
<li><a class="hdr__sub-item" href="/products/creative-testing/hispanic" data-qa="nav_products_hispanic_ad_testing">Hispanic Ad Testing</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/measurement" data-qa="nav_products_measurement">Measurement</a>
<ul>
<li><a class="hdr__sub-item" href="/products/measurement/media" data-qa="nav_products_media_measurement">Media Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/competitive" data-qa="nav_products_competitive_intelligence">Competitive Intelligence</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/attention" data-qa="nav_products_attention_analytics">Attention Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/unified" data-qa="nav_products_unified_measurement">Unified Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/streaming-measurement" data-qa="nav_products_streaming_measurement">Streaming Measurement</a></li>
<li><a class="hdr__sub-item" href="/products/measurement/out-of-home" data-qa="nav_products_out_of_home_tv_measurement">Out of Home</a></li>
<li><a class="hdr__sub-item" href="/products/measurement#brand-guidelines" data-qa="nav_products_brand_guidelines">Brand Guidelines</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/attribution" data-qa="nav_products_attribution">Attribution</a>
<ul>
<li><a class="hdr__sub-item" href="/products/attribution/conversions" data-qa="nav_products_tv_conversions">TV Conversions</a></li>
<li><a class="hdr__sub-item" href="/products/attribution/lift" data-qa="nav_products_incremental_lift">Incremental Lift</a></li>
<li><a class="hdr__sub-item" href="/products/attribution#unified-measurement" data-qa="nav_products_cross_channel_attribution">Cross-Channel Attribution</a></li>
</ul>
</li>
<li class="hdr__li">
<a class="hdr__sub-title hdr__sub-item" href="/products/analytics" data-qa="nav_products_advanced_analytics">Advanced Analytics</a>
<ul>
<li><a class="hdr__sub-item" href="/products/analytics/segments" data-qa="nav_products_segment_analytics">Segment Analytics</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/exposure" data-qa="nav_products_exposure_level_ad_data">Exposure Level Ad Data</a></li>
<li><a class="hdr__sub-item" href="/products/analytics/custom" data-qa="nav_products_custom_analytics">Custom Analytics</a></li>
</ul>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-ad-center" class="hdr__li">
<a href="#" id="navbarAdCenter" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_ad_center">
Ad Center
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAdCenter">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Ad Center</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-commercials" data-qa="nav_ad_center_top_ads">Top Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/ad/top-spenders" data-qa="nav_ad_center_top_spenders">Top Spenders</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/browse" data-qa="nav_ad_center_browse_tv_ads">Browse TV Ads</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_super_bowl">Super Bowl 2024</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/fifa-world-cup/2022" data-qa="nav_qatar_2022">Qatar 2022 FIFA World Cup</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="nav_ad_center_2023_24_nfl_season">2023-24 NFL Season</a>
</li>
<li class="hdr__li ">
<a class="hdr__sub-item" href="/olympics/2022-beijing-winter-olympics" data-qa="nav_ad_center_beijing_2022_olympics">Beijing 2022 Olympics</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-resources" class="hdr__li">
<a href="#" id="navbarResources" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_resources">
Resources
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarResources">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Resources</span></div>
<a class="hdr__dt-action" href="/hub/resources/" data-qa="nav_resources_all">
See All <svg width="17px" height="11px" viewBox="0 0 17 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Arrow</title>
<g id="Stylesheet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
<g id="Demo-CTA-Copy-2" transform="translate(-93.000000, -39.000000)" stroke="#6EC122" stroke-width="2">
<g id="Group-2" transform="translate(94.000000, 40.000000)">
<polyline id="Path-3" points="8.38935361 0 15 4.99498416 8 9"></polyline>
<line x1="13.8598407" y1="4.75" x2="0" y2="4.5" id="Line"></line>
</g>
</g>
</g>
</svg> </a>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li hide-desktop">
<a class="hdr__sub-item" href="/hub/resources/" data-qa="nav_resources_all">See All</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/tv-data-hub" data-qa="nav_tv_data_hub">TV Data Hub</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/" data-qa="nav_resources_reports">Reports</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/case-studies/" data-qa="nav_resources_case_studies">Case Studies</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/" data-qa="nav_resources_blog">Blog</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/events/" data-qa="nav_resources_events">Events</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/playbooks/" data-qa="nav_resources_playbooks">Playbooks</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="https://www.tvdisrupt.com/2023" data-qa="nav_resources_tv_disrupt">TV Disrupt 2023</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-about-us" class="hdr__li">
<a href="#" id="navbarAbout" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_about_us">
About
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarAbout">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">About</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li"><a class="hdr__sub-item" href="/about" data-qa="nav_about_us_about_ispot">About iSpot</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/leadership" data-qa="nav_about_us_leadership">Leadership</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/customers" data-qa="nav_about_us_customers">Customers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/partners" data-qa="nav_about_us_partners">Partners</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/about/careers" data-qa="nav_about_us_careers">Careers</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/hub/press/" data-qa="nav_press_center">Press Center</a></li>
<li class="hdr__li"><a class="hdr__sub-item" href="/contact-us" data-qa="nav_about_us_contact_us">Contact Us</a></li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li id="nav-super-bowl" class="hdr__li">
<a href="#" id="navbarSuperBowl" data-ispot="accordian" role="button" aria-haspopup="true" aria-expanded="false" data-qa="nav_sb">
Super Bowl
</a>
<div class="hdr__billboard">
<dl aria-labelledby="navbarSuperBowl">
<dt>
<div class="hdr__menu-title"><span class="text-gradient">Super Bowl</span></div>
</dt>
<dd>
<ul class="hdr__ul hdr__ul-grid">
<li class="hdr__li">
<a class="hdr__sub-item" href="https://on.ispot.tv/website-banner-ad-age-webinar" data-qa="nav_sb_post_game">Post-Game Webinar</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/events/super-bowl-commercials" data-qa="nav_sb_ad_center">Super Bowl Ad Center</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/2022-nfl-regular-season-report/" data-qa="nav_nfl_reg_season_report">NFL Regular Season TV Ad Report</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/2023-nfl-playoffs-tv-ad-report/" data-qa="nav_nfl_playoff_ad_report">NFL Playoff TV Ad Report</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/super-bowl-final-report" data-qa="nav_sb_ad_report">Super Bowl TV Ad Report</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/super-bowl-vip" data-qa="nav_sb_vip_center">Super Bowl VIP Ad Center</a>
</li>
<li class="hdr__li">
<a class="hdr__sub-item" href="/hub/resources/free-reports/super-bowl-lvii-creative-analysis/" data-qa="nav_sb_creative_analysis_report">Super Bowl Creative Analysis Report</a>
</li>
</ul>
</dd>
</dl>
</div>
<div class="hdr__billboard-background"></div>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="/demo" data-qa="nav_demo_button">Get A Demo</a>
</li>
<li class="hdr__li hdr__mobile-only">
<a href="https://analytics.ispot.tv/dashboard" data-qa="nav_analytics_icon">Login</a>
</li>
</ul> </li>
</ul>
</nav>
</header>
<main><div class="page--copyright">
<section class="jumbotron">
<div class="container">
<div class="text-center">
<h1 class="text-gradient">Copyright Policy</h1>
</div>
</div>
</section>
<div class="container ">
<p><em>Last Modified: November 19, 2012</em></p>
<p>This constitutes the policy of iSpot.tv, Inc. (“iSpot”) with respect to complaints of copyright, trademark, or other intellectual property infringements.</p>
<p>iSpot.tv is an informational and research website that indexes and tags information found in promotional television content,including TV commercials, show promotions, movie trailers, infomercials and public service announcements(collectivelyPromotional Content). We provide this service at no cost to the brands and advertisers that produce and air thisPromotional Content.</p>
<p>We help consumers to easily find Promotional Content they see on TV by comprehensively tagging information about thePromotional Content, thereby increasing the reach and engagement with Promotional Content. Some of the information we tag includes brands, products, promotions and offers, URLs, phone numbers, social links, celebrities, scenes, characters and other pertinent identifying data. In addition to making it easy for consumers to find Promotional Content they see on TV,we also enable consumers to interact with the brands and products found in such content by providing links to discover more information, including links to the advertiser web site and social pages.</p>
<p>We respect the rights of copyright holders and in an effort to properly credit the copyright holders of each commercial,iSpot.tv clearly indicates the advertising company in a prominent location on the page any given Promotional Content is shown.Whenever this information is not available, the company whose products and/or services are being represented in thePromotional Content is the company holding the copyrights of such commercial.Additionally, the title, description, product names, slogans and other data elements, in part, or in whole, may be trademarked by the same identified copyright holder.</p>
<p>Notwithstanding the above, should Your company, or the company You are representing, want their current and futurePromotional Content removed from iSpot.tv, please provide us with a DMCA takedown notice comprised of the following:</p>
<ol>
<li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive copyright that is allegedly infringed;</li>
<li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
<li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material. Providing URLs in the body of an email is the best way to help us locate content quickly;</li>
<li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number and, if available, an electronic mail address at which the complaining party may be contacted;</li>
<li>A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law;</li>
<li>A statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</li>
</ol>
<p>All removal requests and DMCA notices should be sent to the following location:</p>
<p>iSpot.tv, Inc.<br/>Attn: Copyright Agent<br/>15831 NE 8th St #100<br/>Bellevue, WA 98008<br/><a href="mailto:copyright@ispot.tv">copyright@ispot.tv</a></p>
<p>Any person who knowingly materially misrepresents that material or activity is infringing or includes false information in a notice may be subject to liability.</p>
<p>Once a take down request is received and validated, iSpot will do its best to process such notices promptly.</p> </div>
</div></main>
<footer class="ftr">
<nav class="ftr__contact">
<div class="ftr__contact-copy">
<div class="ftr__contact-title"><span class="text-gradient">Contact Sales</span></div>
<div>Choose A Better Way To Measure TV ROAS</div>
</div>
<div class="ftr__contact-form">
<form name="getADemoForm" class="get-a-demo  js-getADemoForm" action="/ajax/users/clearbitrisk" method="post">
<input type="hidden" id="csrfToken" class="csrfToken" name="csrfToken" />
<input name="email" type="email" placeholder="Enter Your Email" class="js-getADemoEmail" required>
<button name="contact_submit" class="btn btn-primary js-getADemoSubmitBtn">Get A Demo</button>
<span class="hidden error-text js-getADemoError"></span>
</form></div>
</nav>
<nav class="ftr__links">
<dl>
<dt>Solutions</dt>
<dd>
<ul>
<li><a href="/solutions" data-qa="footer_nav_solutions_overview">Overview</a></li>
<li><a href="/solutions/brands" data-qa="footer_nav_solutions_brands">Brands</a></li>
<li><a href="/solutions/networks" data-qa="footer_nav_solutions_networks">Networks</a></li>
<li><a href="/solutions/agencies" data-qa="footer_nav_solutions_agency">Agency</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Products</dt>
<dd>
<ul>
<li><a href="/products" data-qa="footer_nav_product_overview">Overview</a></li>
<li><a href="/products/creative-testing" data-qa="footer_nav_creative_assessment">Creative Assessment</a></li>
<li><a href="/products/measurement" data-qa="footer_nav_measurement">Measurement</a></li>
<li><a href="/products/attribution" data-qa="footer_nav_attribution">Attribution</a></li>
<li><a href="/products/analytics" data-qa="footer_nav_analytics">Advanced Analytics</a></li>

</ul>
</dd>
</dl> <dl>
<dt>Ad Center</dt>
<dd>
<ul>
<li><a href="/ad/top-commercials" data-qa="footer_nav_top_ads">Top Ads</a></li>
<li><a href="/ad/top-spenders" data-qa="footer_nav_top_spenders">Top Spenders</a></li>
<li><a href="/browse" data-qa="footer_nav_commercial_catalog">Browse TV Ads</a></li>
<li><a href="/events/super-bowl-commercials" data-qa="footer_nav_super_bowl">Super Bowl 2024</a></li>
<li><a href="/fifa-world-cup/2022" data-qa="footer_nav_qatar_2022">Qatar 2022 FIFA World Cup</a></li>
<li><a href="https://www2.ispot.tv/2023-NFL-TV-Ad-Insights-Center" data-qa="footer_nav_2023_24_nfl_season">2023-24 NFL Season</a></li>
<li><a href="/olympics/2022-beijing-winter-olympics" data-qa="footer_nav_beijing_2022_olympics">Beijing 2022 Olympics</a></li>
</ul>
</dd>
</dl> <dl>
<dt>Resources</dt>
<dd>
<ul>
<li><a href="/hub/resources/" data-qa="footer_nav_resources">All</a></li>
<li><a href="/tv-data-hub" data-qa="footer_nav_tv_data_hub">TV Data Hub</a></li>
<li><a href="/hub/resources/free-reports/" data-qa="footer_nav_reports">Reports</a></li>
<li><a href="/hub/resources/case-studies/" data-qa="footer_nav_case_studies">Case Studies</a></li>
<li><a href="/hub/" data-qa="footer_nav_blog">Blog</a></li>
<li><a href="/hub/events/" data-qa="footer_nav_events">Events</a></li>
<li><a href="/hub/resources/playbooks/" data-qa="footer_nav_playbooks">Playbooks</a></li>
<li><a href="/hub/tv-currency-measurement/" data-qa="footer_nav_tv_currency">TV Currency</a></li>
<li><a href="/hub/tv-advertising/" data-qa="footer_nav_tv_advertising">TV Advertising</a></li>
</ul>
</dd>
</dl> <dl>
<dt>About Us</dt>
<dd>
<ul>
<li><a href="/about" data-qa="footer_nav_about_us">About iSpot</a></li>
<li><a href="/about/customers" data-qa="footer_nav_customers">Customers</a></li>
<li><a href="/about/careers" data-qa="footer_nav_careers">Careers</a></li>
<li><a href="/hub/press/" data-qa="footer_nav_press_center">Press Center</a></li>
<li><a href="/contact-us" data-qa="footer_nav_contact_us">Contact Us</a></li>
<li><a href="/about/partners" data-qa="footer_nav_partners">Partners</a></li>
<li><a href="/demo" data-qa="footer_nav_demo">Get a Demo </a></li>
<li><a href="/pricing" data-qa="footer_nav_pricing">Get Pricing </a></li>
</ul>
</dd>
</dl>
<dl class="ftr__social">
<dt>Follow Us</dt>
<dd>
<ul>
<li>
<a href="https://www.facebook.com/ispottv" target="_blank" rel="noreferrer" data-qa="facebook_icon" aria-label="Facebook Profile">
<svg alt="Facebook Profile" aria-labelledby="facebookTitle facebookDesc" aria-hidden="true" focusable="false" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="facebookTitle">Link to iSpot.tv Facebook Page</title>
<desc id="facebookDesc">Displays the Facebook logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
</svg>
Facebook
</a>
</li>
<li>
<a href="https://twitter.com/ispottv" target="_blank" rel="noreferrer" data-qa="twitter_icon" aria-label="Twitter Profile">
<svg alt="Twitter Profile" aria-labelledby="twitterTitle twitterDesc" aria-hidden="true" focusable="false" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title id="twitterTitle">Link to iSpot.tv Twitter Page</title>
<desc id="twitterDesc">Displays the Twitter logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
</svg>
Twitter
</a>
</li>
<li>
<a href="https://www.youtube.com/channel/UCeMuA4L9qnyKOsoFqkEDNJA" target="_blank" rel="noreferrer" data-qa="youtube_icon" aria-label="YouTube Profile">
<svg alt="YouTube Profile" aria-labelledby="youTubeTitle youTubeDesc" aria-hidden="true" focusable="false" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
<title id="youTubeTitle">Link to iSpot.tv YouTube Page</title>
<desc id="youTubeDesc">Displays the YouTube logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
</svg>
YouTube
</a>
</li>
<li>
<a href="https://www.linkedin.com/company/ispottv/" target="_blank" rel="noreferrer" data-qa="linkedin_icon" aria-label="LinkedIn Profile">
<svg alt="LinkedIn Profile" aria-labelledby="linkedInTitle linkedInDesc" focusable="false" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<title id="linkedInTitle">Link to iSpot.tv LinkedIn Page</title>
<desc id="linkedInDesc">Displays the LinkedIn logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
</svg>
LinkedIn
</a>
</li>
<li>
<a href="https://www.instagram.com/ispottv/" target="_blank" rel="noreferrer" data-qa="instagram_icon" aria-label="Instagram Profile">
<svg alt="Instagram Profile" aria-labelledby="instagramTitle instagramDesc" focusable="false" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<title id="instagramTitle">Link to iSpot.tv Instagram Page</title>
<desc id="instagramDesc">Displays the Instagram logo and links to the iSpot.tv page</desc>
<path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
Instagram
</a>
</li>
</ul>
</dd>
</dl>
</nav>
<nav class="ftr__ccpa">
<div>
<strong>California Residents</strong>
exercise your rights under the California Consumer Privacy Act <a href="/privacy">here.</a>
</div>
<ul>
<li><a href="/privacy/opt-out">Do Not Sell My Personal Information</a></li>
</ul> </nav>
<nav class="ftr__terms">
<div>
<a href="/agreements/copyright" rel="nofollow" data-qa="footer_nav_copyright">© 2024 iSpot.tv, Inc.</a>
<a href="/agreements" rel="nofollow" data-qa="footer_nav_terms_and_privacy">Terms &amp; Privacy</a>
</div> </nav>
</footer> </div>
<div id="cookie-consent">
<span>This site uses cookies to provide you with a great user experience.
By using iSpot.tv, you accept our <a href="/agreements/cookie">use of cookies</a>.</span>
<a id="cookie-consent-close-btn" href="#" rel="noreferrer">ACCEPT</a>
</div>
<div id="imgModal" class="image--modal modal js-image--modal fade" tabindex="-1" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div class="modal-body p-0">
<img class="imgModalFrame js-image-modal--frame" loading="lazy" width="768px" height="486px">
</div>
</div>
</div>
</div>
<script type="text&#x2F;javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f" src="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;js&#x2F;global&#x2F;index.js&#x3F;v&#x3D;9.3.35"></script>
<script type="text&#x2F;javascript" crossorigin="anonymous" data-auto-add-css="false" integrity="sha384-OF9QwbqmlzSPpIxe2GYS8lkGFyaFfrgUPD2J3qj8zGVps17Y&#x2F;x8EK2U8PEl6UrpH" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f" src="https&#x3A;&#x2F;&#x2F;pro.fontawesome.com&#x2F;releases&#x2F;v5.15.3&#x2F;js&#x2F;all.js"></script>
<script type="text&#x2F;javascript" integrity="sha256-9&#x2F;aliU8dGd2tb6OSsuzixeV4y&#x2F;faTqgFtohetphbbj0&#x3D;" crossorigin="anonymous" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f" src="https&#x3A;&#x2F;&#x2F;code.jquery.com&#x2F;jquery-3.5.1.min.js"></script>
<script type="text&#x2F;javascript" integrity="sha384-ho&#x2B;j7jyWK8fNQe&#x2B;A12Hb8AhRq26LrZ&#x2F;JpcUGGOn&#x2B;Y7RsweNrtN&#x2F;tE3MoK7ZeZDyx" crossorigin="anonymous" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f" src="https&#x3A;&#x2F;&#x2F;cdn.jsdelivr.net&#x2F;npm&#x2F;bootstrap&#x40;4.5.3&#x2F;dist&#x2F;js&#x2F;bootstrap.bundle.min.js"></script>
<script type="text&#x2F;javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f" src="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;js&#x2F;www&#x2F;index.js&#x3F;v&#x3D;9.3.35"></script>
<script type="text&#x2F;javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
    //<!--
        document.addEventListener("DOMContentLoaded", function(event) {

        // TODO: This belongs in a utils library.
        const createCookie = function (cname, cvalue, exdays) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = 'expires=' + d.toUTCString();
            let host = window.location.hostname;
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;domain=.' + host + ';';
        };

        const cookieConsentAlert = document.getElementById("cookie-consent");

        // document.getElementById("cookie-consent-close-ico").addEventListener("click", function(e) {
        //     e.preventDefault(); 
        //     createCookie('cookieconsent_status', 'dismiss', 365);
        //     cookieConsentAlert.classList.add('hidden');
        //     return;
        // });

        document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
            e.preventDefault(); 
            createCookie('cookieconsent_status', 'dismiss', 365);
            cookieConsentAlert.classList.add('hidden');
            return;
        });

        document.getElementById("cookie-consent-close-btn").addEventListener("click", function(e) {
            e.preventDefault(); 
            createCookie('cookieconsent_status', 'dismiss', 365);
            cookieConsentAlert.classList.add('hidden');
            return;
        });

    });

    //-->
</script>
<script type="text&#x2F;javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
    //<!--
        // Global Util: Modal Behavior
     document.addEventListener("DOMContentLoaded", function() {

        const modalClosed = function() {
            if ("createEvent" in document) {
                const event = new CustomEvent("modal-closed");
                document.dispatchEvent(event);
            }
        };

        // Move all modals to just inside the body tag
        const modals = document.querySelectorAll(".modal");
        for (item of modals) {
            document.querySelector("body").appendChild(item);
        }

        // Open modal based on href target
        const modal = document.querySelectorAll("[data-ispot=modal]");
        for (item of modal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                document.getElementById(e.currentTarget.hash.substring(1)).classList.add("show");
            });
        }

        // Close on click of modal dismiss button
        const dismissModal = document.querySelectorAll("[data-dismiss=modal]");
        for (item of dismissModal) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                const closestModal = e.currentTarget.closest('.modal.show');
                if (closestModal !== null) {
                    closestModal.classList.remove('show');
                }
                modalClosed();
            });
            item.addEventListener("modal-closed", function(e) {
                console.log('OOF2');
            });
        }

        // Close on click of modal background
        const openModal = document.querySelectorAll(".modal");
        for (item of openModal) {
            item.addEventListener("click", function(e) {
                if (e.target.classList.contains("show")) {
                    e.target.classList.remove("show");
                    modalClosed();
                }
            });

        }

     });
    //-->
</script>
<script type="text&#x2F;javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
    //<!--
         document.addEventListener("DOMContentLoaded", function() {
        $('[data-toggle=tooltip]').tooltip();
     });
    //-->
</script>
<script type="text/javascript" nonce="4d6e8fff7ad3cf73d555737d04e1573a91555d01e6599aa15b3519e926b5403f">
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {

        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {

            // navigator.serviceWorker.getRegistrations().then(function(registrations) {
            //     for(let registration of registrations) {
            //         registration.unregister()
            //     } 
            // });

            navigator.serviceWorker.register('/sw.js');
            
        });
    }
</script>
</body>
</html>
