(self.webpackChunkbaply(this,arguments);var o;return(o=r)&&("object"==(o&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)||"function"==typeof o)?o:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function n(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),r.apply(this,arguments)}var o,v;return v=[{key:"getClassName",value:function(){return"AxisChart"}}],o=[{key:"titleLayout",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["x","y"];var e=this.runtime,r=this.options;var n=e.sheet;var o=e.layout.marginTitle;t.forEach(function(t){var e=a().get(f,t);var i=a().get(n,e.valuePath);i&&(o[e.orient]=(0,c.Zw)(i,a().get(r,e.stylePath)).height+10)})}},{key:"titleComponents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["x","y"];var e=this.options,r=this.runtime;var n=r.sheet,o=r.components;t.forEach(function(t){var r=a().get(f,t);o[r.name]=(0,i._)().text(a().get(n,r.valuePath)).style(a().get(e,r.stylePath)).orient(r.orient)})}}],u(n.prototype,o),v&&u(n,v),n}(o.k)},5220:(t,e,r)=>{r.d(e,{s:()=>g});var n=r(449);var a=r.n(n);var o=r(3109);var i=r(3101);var c=r(3079);var u=r(5214);var s=r(5219);var l=r(942);var f=r(5222);var v=r(5221);var h=r(5218);function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(n,t);var r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=y(n),r;if(e){var a=y(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);var o;return(o=r)&&("object"==(o&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)||"function"==typeof o)?o:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function n(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),r.apply(this,arguments)}var u,g;return g=[{key:"getClassName",value:function(){return"BarClass"}}],u=[{key:"getDomain",value:function(t){var e=[(0,o.Z)(t,function(t){return(0,o.Z)(t.data,function(t){return t.x})}),(0,i.Z)(t,function(t){return(0,i.Z)(t.data,function(t){return t.x})})];return(0,s.dC)(e),(0,s.Qu)(e),(0,c.Z)().domain(e).nice(10).domain()}},{key:"sheetsNotFound",value:function(t){var e=!t||t&&0===t.length;return e&&(this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement()),e}},{key:"getCategoryData",value:function(t){return this.runtime.sheet.categories.data.filter(function(e,r){var n=t.find(function(t){return r===t.categoryIdx});return n&&n.data.length>0})}},{key:"gridSetupVertical",value:function(){var t=this.runtime.sheet;if(!t.grid.vertical){var e=this.runtime,r=e.xDomain,n=e.components;var o=(0,s.gU)(r);var i=[];var c=a().get(t,"grid.verticalZero",!1);o&&c&&i.push(0),n.xGridLines.tickValues(i)}}},{key:"xTicksSetup",value:function(){var t;var e=this.options,r=this.runtime;var n=r.xScale,o=r.components,i=r.layout,c=r.xDomain,u=r.sheet,s=r.xTickInterval,p=r.formatter,y=r.percent;var d=o.xAxisBottomText,g=o.xGridLines;var m=i.leftLabelPadding,b=i.igc;var x=c[0]<0;var k=[];var P=[];var O=[];var w=[];var _=(0,h.hv)(n,s);var E=u.axis[0];var R;var j;_.forEach(function(t){0===t?(k.push(t),P.push(n(t)),O.push(t),w.push(n(t))):t<0?(k.push(t),P.push(n(t))):(O.push(t),w.push(n(t)))});var T=a().union(k,O);if(y)j=(0,v.s5)(p.axis.x),R=(0,l.Zw)(T.map(j),e.style.axis.x.tick);else{var C=p.axis.x.createTickFormatter(T,E);R=(0,l.Zw)(T.map(function(t){return C(t)}),e.style.axis.x.tick)}var S=(0,f.fJ)(P,R.width+5);var Z=(0,f.fJ)(w,R.width+5);var B=(0,f.RH)(P,k,S,-1);var L=(0,f.RH)(w,O,Z,1);var I=a().union(B.domain,L.domain);x||I[0]===c[0]||I.unshift(c[0]),d.tickValues(I),g.tickValues(I),!(g.tickValues().length>0)||0!==n(g.tickValues()[0])||u.grid.vertical||a().get(u,"grid.verticalZero",!1)||g.hideLinesByIndex([0]);var V=[];var A=y?j:p.axis.x.createTickFormatter(I,E);d.tickFormat(A),(null==u?void 0:null===(t=u.grid)||void 0===t?void 0:t.symmetrical)&&d.tickFormat(function(t){return A(t<0?-t:t)});var D=(0,l.w7)(I.map(A),e.style.axis.x.tick);var F=d.textOffset();var N=r.metrics.leftCategoryWidth+i.leftLabelPadding.right;I.forEach(function(t,e){var r=n(t);var a=r-D.collection[e].width+F;x&&(a+=m.right);var o=a>0;!(0===e&&0===r&&b.x-Math.abs(F)<N)&&(o||V.push(e))}),d.hideTicksByIndex(V),this.runtime.sheet.axis[0].ticks||d.tickValues([])}},{key:"createBorderLineFunc",value:function(t,e){return function(){var r=e.bounds();var n=e.style();var a=e.offset();t.attr("transform","translate(".concat(a.left,", ").concat(a.top,")"));var o=t.selectAll(".igc-y-axis-border").data([0]);o.exit().remove(),(o=o.enter().append("rect").attr("class","igc-y-axis-border").merge(o)).attr("x",r.width-1).attr("y",0).attr("height",r.height).attr("width",2).styles({fill:n.color,stroke:"none","stroke-width":0})}}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach(function(e,r){var n=t[r+1]||t[0];n.categories&&a().merge(e.categories,n.categories),n.grid&&a().merge(e.grid,n.grid),a().merge(e.graphOptions,n.graphOptions),n.legend&&a().merge(e.legend,n.legend),n.tooltip&&(e.tooltip=e.tooltip||{},a().merge(e.tooltip,n.tooltip)),n.labels&&(e.labels=e.labels||{},a().merge(e.labels,n.labels)),e.axis.forEach(function(t,e){var r=n.axis&&n.axis[e];r&&a().merge(t,r)})})}}],p(n.prototype,u),g&&p(n,g),n}(u.D)},5221:(t,e,r)=>{r.d(e,{$g:()=>l,bh:()=>s,kL:()=>u,s5:()=>c});var n=r(449);var a=r.n(n);var o=r(942);var i=r(5216).PC.format;function c(t){var e=a().get(t,"config.prefix","");var r=a().get(t,"config.suffix","");return function(t){return"".concat(e).concat(i(".0%")(t)).concat(r)}}function u(t){var e=t.series;return e&&e.percent}function s(t,e){var r=t.map(function(t){return t.data.reduce(function(t,r){var n=(0,o.IP)(r[e],0);return n>0?t.positive+=n:t.negative+=Math.abs(n),t},{positive:0,negative:0})});t.forEach(function(t,n){var a=r[n];t.data.forEach(function(t){var r=(0,o.IP)(t[e],0);t[e]=0===r?r:r/(r>0?a.positive:a.negative)})})}function l(t){var e=t.sheet,r=t.formatter,n=t.props;var o;if(a().get(e,"tooltip.showPercent",!1)){var c=i(".2%");o=function(t){return"".concat(t[n[0]],": ").concat(r.tooltip.y.format(t[n[1]])," (").concat(c(t[n[2]]),")")}}else o=function(t){return"".concat(t[n[0]],": ").concat(r.tooltip.y.format(t[n[1]]))};return o}},5246:(t,e,r)=>{r.d(e,{I:()=>n});function n(t,e,r,n){var a=t.selectAll(".".concat(r)).data([0]);if(e){var o=a.enter().append(n).attr("class",r);(a=a.merge(o)).call(e)}}}}]); rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;header&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;bootstrap-ext&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;footer&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;modal&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;modules&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;bootstrap&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;utils&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;typography&#x2F;index.css&#x3F;v&#x3D;9.3.35" rel="preload" as="style">
<link href="&#x2F;manifest.json" rel="manifest">
<link href="&#x2F;favicon.ico" rel="shortcut&#x20;icon" type="image&#x2F;vnd.microsoft.icon">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="152x152">
<link href="&#x2F;ico&#x2F;apple&#x2F;apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;global&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;header&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;bootstrap-ext&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;footer&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;modal&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;bootstrap&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;modules&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;utils&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;css&#x2F;standard&#x2F;typography&#x2F;index.css&#x3F;v&#x3D;9.3.35" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;pro.fontawesome.com&#x2F;releases&#x2F;v5.15.3&#x2F;css&#x2F;svg-with-js.css" media="all" rel="stylesheet" type="text&#x2F;css" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Medium.woff2" rel="preload" crossorigin="anonymous" as="font">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Bold.woff2" rel="preload" crossorigin="anonymous" as="font">
<link href="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;fonts&#x2F;poppins&#x2F;Poppins-Regular.woff2" rel="preload" crossorigin="anonymous" as="font"><style type="text/css" media="screen" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
.privacy-table,.privacy-table tr,.privacy-table th,.privacy-table td{border:1px solid #000;border-collapse:collapse}.privacy-table th{border-bottom:2px solid #000}.privacy-table th,.privacy-table td{padding:1rem}</style> 
<meta name="hb-feature" content="feature=injectSDCC"></head>
<body class="mnav__privacy">

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
<svg class="logo " aria-labelledby="logoTitle893511 logoDesc7207514" role="img" height="36" width="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 21">
<title id="logoTitle893511">Link to iSpot.tv Homepage</title>
<desc id="logoDesc7207514">Displays the iSpot.tv logo and links to Link to the homepage</desc>
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
<main><section class="jumbotron">
<div class="container">
<div class="text-center">
<h1 class="text-gradient">ISPOT.TV, INC PRIVACY POLICY</h1>
</div>
</div>
</section>
<div class="container  privacy-policy">
<p><em>Dated: July 1, 2023</em></p>
<h2>1. YOUR RIGHTS AS A CONSUMER</h2>
<p>At iSpot.tv, Inc. (the "Company") we respect your privacy rights as a consumer ("Consumer") under the data privacy and security laws including, but not limited to, the California Consumer Privacy Act of 2018, as revised by the California Privacy Rights Act of 2020, and the associated regulations effective March 29, 2023, (the "CCPA/CPRA"). We are committed to protecting your rights to:</p>
<ol>
<li><p>Delete personal information collected from or about you ("Right to Delete").</p></li>
<li><p>Correct inaccurate Personal Information collected and maintained about you ("Right to Correct").</p></li>
<li><p>Know what personal information is being collected about them, to access that personal information, and to know what personal information about you is being sold or shared and to whom (together called the "Right to Know").</p></li>
<li><p>Depending on your jurisdiction, Opt-out of the Sale or Sharing or Targeted Advertising of your personal information ("Right to Opt-out of Sale/Sharing/Targeting").</p></li>
<li><p>Limit use and disclosure of sensitive personal information to what is necessary to perform the services or provide the goods reasonably expected by an average Consumer who requests such goods or services ("Right to Limit").</p></li>
<li><p>Not be discriminated against for exercising your rights ("Right to No Discrimination").</p></li>
</ol><br/>
<p>This document provides you with a description of our business practices, both online and offline, regarding the collection use, disclosure, and sale of personal information and of the rights of Consumers regarding their own personal information.</p>
<p>The terms used in this policy have the meanings used in the CCPA/CPRA.</p>
<hr/>
<h2>2. PERSONAL INFORMATION WE COLLECT, SELL, SHARE, AND OTHERWISE DISCLOSE</h2>
<p>The CCPA/CPRA defines personal information as "information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household."</p>
<p>See the chart below for the categories of personal information we have collected over the preceding 12 months, the retention period for each category, and the categories of sources of the information.</p>
<table class="privacy-table">
<tr>
<th>Personal Information We Collect - By Category</th>
<th>Retention Period or Criteria to Delete</th>
<th>Categories of Sources of Personal Information Collection</th>
</tr>
<tr>
<td><strong>Identifiers</strong><br/>Name, alias, address, online identifier, Internet Protocol address, email address, account name</td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
<td rowspan="7">
<ul>
<li>From the consumer directly</li>
<li>Advertising networks</li>
<li>Internet service providers</li>
<li>Data analytics providers
</li>
</ul>
</td>
</tr>
<tr>
<td><strong>Customer records (defined by the CA Customer Records Law, Cal. Civ. Code Section 1798.80)</strong><br/>Name, signature, Social Security number, physical characteristics or description, address, telephone number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, any other financial information, medical information, health insurance information</td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations</td>
</tr>
<tr>
<td><strong>Internet or other network activity information</strong><br/>Browsing history, search history, information regarding a consumer's interaction with an internet website application, or advertisement, or other similar information</td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
</tr>
<tr>
<td><strong>Geolocation data</strong><br/>Any data that is derived from a device and that is used or intended to be used to locate a Consumer within a geographic area</td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
</tr>
<tr>
<td><strong>Professional or employment-related information</strong></td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
</tr>
<tr>
<td><strong>Inferences from any of the above</strong></td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
</tr>
<tr>
<td><strong>Sensitive Personal Information:</strong><br/>Account log-in, financial account, debit card, or credit card number in combination with any required security or access code, password, or credentials allowing access to an account</td>
<td>We retain this category of information for as long as reasonably necessary to provide you with the goods or services or to meet our legal obligations.</td>
</tr>
</table>
<br/><br/>
<h3>Business or Commercial Purpose(s) for Collecting personal information.</h3>
<p>We collect the categories of personal information described above for the following business or commercial purposes:</p>
<ul>
<li>providing our products and services</li>
<li>personalizing customer experience</li>
<li>business operations</li>
<li>maintaining and servicing accounts</li>
<li>providing customer service</li>
<li>processing and fulfilling orders</li>
<li>processing payments</li>
<li>advertising and marketing</li>
<li>recognizing customers across multiple touchpoints</li>
<li>processing employment applications</li>
<li>detecting security incidents and protecting against malicious, deceptive, fraudulent, or illegal activity</li>
<li>troubleshooting, improving service, analyzing performance, fixing errors, and improving the usability and effectiveness of services</li>
<li>quality control and monitoring</li>
<li>internal technological research and development</li>
<li>identity verification</li>
<li>other similar purposes:</li>
<li>collection of employment-related information including for administering employment benefits</li>
</ul><br/>
<table class="privacy-table">
<tr>
<td>Personal Information We Sold or Shared</td>
<th>Categories of Third Parties to Whom Information is Sold or Shared - By Category</th>
<th>Business or Commercial purpose for Selling or Sharing Personal Information</th>
</tr>
<tr>
<td><strong>Identifiers</strong><br/>Online identifier, Internet Protocol address</td>
<td>
<ul>
<li>advertising networks</li>
<li>internet service providers</li>
<li>data analytics providers</li>
<li>government entities</li>
<li>operating systems and platforms</li>
<li>social networks</li>
<li>data brokers</li>
<li>affiliated entities</li>
<li>service providers</li>
<li>connected third-party services</li>
<li>marketing, advertising partners</li>
<li>website analytics vendors</li>
<li>payment processors</li>
<li>order fulfillment, shipping services</li>
<li>security, fraud prevention services</li>
<li>survey, sweepstakes, contest providers</li>
</ul>
</td>
<td rowspan="3">
<ul>
<li>providing our products and services</li>
<li>personalizing customer experience</li>
<li>business operations</li>
<li>maintaining and servicing accounts</li>
<li>providing customer service</li>
<li>processing and fulfilling orders</li>
<li>processing payments</li>
<li>communicating with our customers</li>
<li>advertising and marketing</li>
<li>recognizing customers across multiple touchpoints</li>
<li>processing employment applications</li>
<li>detecting security incidents and protecting against malicious, deceptive, fraudulent, or illegal activity</li>
<li>troubleshooting, improving service, analyzing performance, fixing errors, and improving the usability and effectiveness of services</li>
<li>quality control and monitoring</li>
<li>internal technological research and development</li>
<li>identity verification</li>
<li>other similar purposes:</li>
<li>collection of employment-related information (including for administering employment benefits)</li>
</ul>
</td>
</tr>
<tr>
<td><strong>Internet or other network activity information</strong><br/>Browsing history, search history, information regarding a consumer's interaction with an internet website application, or advertisement, or other similar information</td>
<td>
<ul>
<li>advertising networks</li>
<li>internet service providers</li>
<li>data analytics providers</li>
<li>government entities</li>
<li>operating systems and platforms</li>
<li>social networks</li>
<li>data brokers</li>
<li>affiliated entities</li>
<li>service providers</li>
<li>connected third-party services</li>
<li>marketing, advertising partners</li>
<li>website analytics vendors</li>
<li>payment processors</li>
<li>order fulfillment, shipping services</li>
<li>security, fraud prevention services</li>
<li>survey, sweepstakes, contest providers</li>
</ul>
</td>
</tr>
<tr>
<td><strong>Geolocation data</strong><br/>Any data that is derived from a device and that is used or intended to be used to locate a Consumer within a geographic area</td>
<td>
<ul>
<li>advertising networks</li>
<li>internet service providers</li>
<li>data analytics providers</li>
<li>government entities</li>
<li>operating systems and platforms</li>
<li>social networks</li>
<li>data brokers</li>
<li>affiliated entities</li>
<li>service providers</li>
<li>connected third-party services</li>
<li>marketing, advertising partners</li>
<li>website analytics vendors</li>
<li>payment processors</li>
<li>order fulfillment, shipping services</li>
<li>security, fraud prevention services</li>
<li>survey, sweepstakes, contest providers</li>
</ul>
</td>
</tr>
<tr>
<td><strong>Inferences from any of the above</strong></td>
<td>
<ul>
<li>advertising networks</li>
<li>internet service providers</li>
<li>data analytics providers</li>
<li>government entities</li>
<li>operating systems and platforms</li>
<li>social networks</li>
<li>data brokers</li>
<li>affiliated entities</li>
<li>service providers</li>
<li>connected third-party services</li>
<li>marketing, advertising partners</li>
<li>website analytics vendors</li>
<li>payment processors</li>
<li>order fulfillment, shipping services</li>
<li>security, fraud prevention services</li>
<li>survey, sweepstakes, contest providers</li>
</ul>
</td>
<td>&nbsp;</td>
</tr>
</table>
<br/><br/>
<p>We may also disclose personal information in the following situations:</p>
<ul>
<li><strong>Business transfers as part of a merger, acquisition, bankruptcy, or other transaction:</strong> The Company may transfer to a third party personal information as an asset that is part of a merger, acquisition, bankruptcy, or other transaction in which the third party assumes control of all or part of the Company.</li>
<li><strong>Legal compliance and law enforcement:</strong> We may be required to disclose personal information in limited circumstances, for example, to respond to a subpoena or similar judicial process, to comply with state, federal or local laws, to exercise or defend legal claims or, to the extent required by law, to provide information to law enforcement agencies.</li>
</ul><br/>
<h2>3. HOW TO EXERCISE YOUR RIGHTS TO DELETE, CORRECT, AND KNOW</h2>
<ol type="a">
<li>
<strong>Submitting Requests</strong>
<p>Your Right to Delete, Right to Correct, and Right to Know can be exercised by submitting a request to us by:</p>
<ul>
<li>sending an email to <a href="mailto:privacy+ispot@ispot.tv">privacy+ispot@ispot.tv</a>.</li>
<li>calling the following number 1-855-316-2377</li>
</ul><br/>
<p>Our Company uses a two-step process to complete any online Right to Delete request (but not for any other type of verifiable request). If you submit an online Right to Delete request, we will contact you to confirm that you would like your personal information deleted.</p>
</li>
<li>
Requests to Know
<p>You have the right to request, up to two times per year, that we disclose the following information to you about our collection and use of your personal information:</p>
<ul>
<li>the specific pieces of personal information we have collected about you. You may also request a copy of specific pieces of personal information that we have collected about you. Please note that "specific pieces of information" do not include data generated to help ensure security and integrity or as prescribed by regulation.</li>
</ul><br/>
</li>
<li>
Verifying Requests to Delete, Correct, or Know
<p>We may not grant your request if we cannot verify your identity or authority to make the request and confirm that the personal information relates to you. We will attempt to verify your request with the information you provide and the information that we already have about you. For this reason, your request must both:</p>
<ul>
<li>provide sufficient information that allows us to reasonably verify you are the consumer about whom we collected personal information or an authorized representative; and</li>
<li>describe your request with sufficient detail to allow us to properly understand, evaluate, and respond to it.</li>
</ul><br/>
<p>If you have a password-protected account with our Company, we may require you to verify your identity through our existing authentication practices for the account. As an additional security measure, we shall also require you to re-authenticate yourself before deleting, correcting, or disclosing your personal information.</p>
<p>We will only use personal information provided in a verifiable request to verify the requestor's identity or authority to make the request. Only you, or your properly authorized agent, may make a request related to your personal information. To be certain that anyone claiming to make a request on your behalf has been properly authorized by you, we may require additional information, including:</p>
<ul>
<li>proof that you gave the agent the signed authorization to submit the request </li>
<li>require you to verify your own identity directly with us.</li>
<li>otherwise directly confirm with us that you have provided your authorized agent permission to submit the request.</li>
</ul>
</li>
</ol><br/>
<h2>4. RIGHT TO OPT-OUT OF SALE OR SHARING OF PERSONAL INFORMATION</h2>
<p>Company name sells or shares personal information to third parties. You have the right at any time to direct us not to sell or share your personal information to third parties (this right is referred to as the "Right to Opt‐out."). In addition to using the "Do Not Sell My Personal Information," link on our website or here in our privacy policy link to "Do Not Sell" form, you may submit a request to exercise your Right to Opt-out as follows:</p>
<ul>
<li>call us toll-free at 1-855-316-2377</li>
<li>by email at <a href="mailto:privacy+ispot@ispot.tv">privacy+ispot@ispot.tv</a></li>
<li>in person at our place of business at 15831 Ne 8th St. Bellevue, WA 98008</li>
<li>by mail at 15831 Ne 8th St. Bellevue, WA 98008</li>
</ul><br/>
<p>Only you, or your properly authorized agent, may make a Right to Opt-out request using the method(s) provided above. If you change your mind after making an opt-out, you may contact us at any time by the method(s) listed above or by our contact information below to request to allow us to sell and share your personal information (this is known as requesting to "opt-in"). We are required by the CCPA/CPRA to use a two-step opt-in process, so that if you submit a request to opt-in, we will contact you separately to request additional confirmation of your request.</p>
<h2>5. ADDITIONAL INFORMATION REGARDING CHILDREN UNDER 16 YEARS OF AGE</h2>
<p><strong>Exercising Consumer Rights:</strong> A parent or guardian may make a Consumer Rights request on behalf of their child under the age of 16. In the case of a request to exercise the Right to Delete or the Right to Know on behalf of a child under the age of 13, we provide additional safeguards to confirm that you are the parent or guardian of that child. If you are making a request for a child under 13, please indicate this in the submission of your request or contact us using our contact information provided below so that we can provide you with further instructions on how to comply with data privacy requirements.</p>
<p><strong>Sale or sharing of children's personal information:</strong> iSpot.tv does not knowingly sell or share the personal information of children under 16 years of age.</p>
<h2>6. NON-DISCRIMINATION</h2>
<p>We will not discriminate against you for exercising any of your data privacy rights. We will not unlawfully:</p>
<ul>
<li>Deny you goods or services.</li>
<li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
<li>Provide you a different level or quality of goods or services.</li>
<li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
<li>Retaliate against an employee, applicant for employment, or independent contractor for exercising their rights under this title.</li>
</ul><br/>
<h2>7. CALIFORNIA "SHINE THE LIGHT" LAW</h2>
<p>California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please follow the instructions found at <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.83.&lawCode=CIV" target="_blank">https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.83.&lawCode=CIV</a>.</p>
<h2>8. CHANGES TO OUR PRIVACY NOTICE</h2>
<p>We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on our website and update the notice's effective date. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.</p>
<h2>9. CONTACT INFORMATION</h2>
<p>If you have any questions or concerns about our privacy policies and practices, please do not hesitate to contact us as follows:</p>
<ul>
<li>by email at <a href="mailto:privacy+ispot@ispot.tv">privacy+ispot@ispot.tv</a></li>
<li>in person at our place of business.</li>
<li>by mail at 15831 Ne 8th St. Bellevue, WA 98008.</li>
</ul><br/>
</div>
</main>
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
<script type="text&#x2F;javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548" src="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;js&#x2F;global&#x2F;index.js&#x3F;v&#x3D;9.3.35"></script>
<script type="text&#x2F;javascript" crossorigin="anonymous" data-auto-add-css="false" integrity="sha384-OF9QwbqmlzSPpIxe2GYS8lkGFyaFfrgUPD2J3qj8zGVps17Y&#x2F;x8EK2U8PEl6UrpH" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548" src="https&#x3A;&#x2F;&#x2F;pro.fontawesome.com&#x2F;releases&#x2F;v5.15.3&#x2F;js&#x2F;all.js"></script>
<script type="text&#x2F;javascript" integrity="sha256-9&#x2F;aliU8dGd2tb6OSsuzixeV4y&#x2F;faTqgFtohetphbbj0&#x3D;" crossorigin="anonymous" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548" src="https&#x3A;&#x2F;&#x2F;code.jquery.com&#x2F;jquery-3.5.1.min.js"></script>
<script type="text&#x2F;javascript" integrity="sha384-ho&#x2B;j7jyWK8fNQe&#x2B;A12Hb8AhRq26LrZ&#x2F;JpcUGGOn&#x2B;Y7RsweNrtN&#x2F;tE3MoK7ZeZDyx" crossorigin="anonymous" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548" src="https&#x3A;&#x2F;&#x2F;cdn.jsdelivr.net&#x2F;npm&#x2F;bootstrap&#x40;4.5.3&#x2F;dist&#x2F;js&#x2F;bootstrap.bundle.min.js"></script>
<script type="text&#x2F;javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548" src="https&#x3A;&#x2F;&#x2F;d3ds6z1w6yhmzj.cloudfront.net&#x2F;dist&#x2F;js&#x2F;www&#x2F;index.js&#x3F;v&#x3D;9.3.35"></script>
<script type="text&#x2F;javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
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
<script type="text&#x2F;javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
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
<script type="text&#x2F;javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
    //<!--
         document.addEventListener("DOMContentLoaded", function() {
        $('[data-toggle=tooltip]').tooltip();
     });
    //-->
</script>
<script type="text/javascript" nonce="aedea5b09cbcf66a03624e2a8cdbbbac6e62030e495dea1414cc32a5e8062548">
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
