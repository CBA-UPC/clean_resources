(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';ar l="function"==typeof Object.defineProperties?Object.defineProperty:
ar p=ba(this);q("Symbol",;
q("Symbol.iterator",;q("Symbol.asyncIterator",;
r da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?null}var t=da;q("Promise",;
q("WeakMap",;
q("Map",;("Array.prototype.find",function(a){return a?a:function(b,c){return ja(this,b,c).S}});
("String.prototype.endsWith",;
q("String.prototype.startsWith",;q("Number.isFinite",;
q("String.prototype.repeat",;q("String.prototype.trimLeft",function(a){function b(){return this.replace(/^[\s\xa0]+/,"")}return a||b});q("String.prototype.trimStart",function(a){return a||String.prototype.trimLeft});q("Object.setPrototypeOf",function(a){return a||t});
var ma="function"==typeof Object.assign?Object.assign:q("Object.assign",function(a){return a||ma});q("Math.trunc",;q("Array.prototype.at",function(a){return a?a:na});
q("Array.prototype.copyWithin",;
("Array.prototype.entries",;
q("Array.prototype.fill",;q("Array.prototype.findIndex",;
q("Array.prototype.flat",;q("Array.prototype.flatMap",;
q("Array.from",;q("Object.is",;
q("Array.prototype.includes",;q("Array.prototype.keys",;q("Array.of",;q("Array.prototype.values",;
q("globalThis",function(a){return a||p});q("Math.acosh",;q("Math.asinh",;q("Math.log1p",;
q("Math.atanh",;q("Math.cbrt",;q("Math.clz32",;
q("Math.cosh",;q("Math.expm1",;q("Math.fround",;
q("Math.hypot",;
q("Math.imul",;q("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});q("Math.log2",;q("Math.sign",;
q("Math.sinh",;q("Math.tanh",;q("Number.EPSILON",;q("Number.MAX_SAFE_INTEGER",;q("Number.MIN_SAFE_INTEGER",;
q("Number.isInteger",;q("Number.isNaN",;q("Number.isSafeInteger",;q("Number.parseFloat",function(a){return a||parseFloat});q("Number.parseInt",;
q("Object.entries",;q("Object.fromEntries",;q("Reflect",;
q("Object.getOwnPropertySymbols",;q("Reflect.ownKeys",;q("Object.getOwnPropertyDescriptors",;
q("Object.values",;q("Object.hasOwn",;q("Promise.allSettled",;
q("Promise.prototype.finally",;var pa="function"==typeof Object.create?Object.create:
("AggregateError",;
q("Promise.any",;q("Reflect.apply",;
var ra=);q("Reflect.construct",function(){return ra});
q("Reflect.defineProperty",;q("Reflect.deleteProperty",;
q("Reflect.getOwnPropertyDescriptor",function(a){return a||Object.getOwnPropertyDescriptor});q("Reflect.getPrototypeOf",;("Reflect.get",;q("Reflect.has",;
q("Reflect.isExtensible",;q("Reflect.preventExtensions",;
q("Reflect.set",;q("Reflect.setPrototypeOf",;
q("Set",;q("String.prototype.at",;q("String.prototype.codePointAt",;
q("String.fromCodePoint",;q("String.prototype.includes",;
q("String.prototype.matchAll",;
("String.prototype.padEnd",;q("String.prototype.padStart",;
q("String.raw",;
q("String.prototype.replaceAll",;q("String.prototype.trimRight",;
q("String.prototype.trimEnd",;("Int8Array.prototype.at",x);q("Uint8Array.prototype.at",x);q("Uint8ClampedArray.prototype.at",x);q("Int16Array.prototype.at",x);q("Uint16Array.prototype.at",x);q("Int32Array.prototype.at",x);q("Uint32Array.prototype.at",x);q("Float32Array.prototype.at",x);q("Float64Array.prototype.at",x);function z(a){return a?a:Array.prototype.copyWithin}q("Int8Array.prototype.copyWithin",z);
q("Uint8Array.prototype.copyWithin",z);q("Uint8ClampedArray.prototype.copyWithin",z);q("Int16Array.prototype.copyWithin",z);q("Uint16Array.prototype.copyWithin",z);q("Int32Array.prototype.copyWithin",z);q("Uint32Array.prototype.copyWithin",z);q("Float32Array.prototype.copyWithin",z);q("Float64Array.prototype.copyWithin",z);("Int8Array.prototype.fill",A);q("Uint8Array.prototype.fill",A);q("Uint8ClampedArray.prototype.fill",A);
q("Int16Array.prototype.fill",A);q("Uint16Array.prototype.fill",A);q("Int32Array.prototype.fill",A);q("Uint32Array.prototype.fill",A);q("Float32Array.prototype.fill",A);q("Float64Array.prototype.fill",A);
q("WeakSet",;
var B=this||self;rror);F.prototype.name="CustomError";.prototype.L=!0;H.prototype.J=r za={},ya={};var Ba={"gstatic.com":{loader:I("https://www.gstatic.com/charts/%{version}/loader.js"),debug:I("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),debug_i18n:I("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:I("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:I("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
css:I("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),css2:I("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:I("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"),third_party2:I("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:I("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}")},"gstatic.cn":{loader:I("https://www.gstatic.cn/charts/%{version}/loader.js"),
debug:I("https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),debug_i18n:I("https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:I("https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:I("https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),css:I("https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"),
css2:I("https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:I("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"),third_party2:I("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:I("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}")}},Ca=["default"],Da={"default":[],graphics:["default"],ui:["graphics"],ui_base:["graphics"],flashui:["ui"],fw:["ui"],geo:["ui"],
annotatedtimeline:["annotationchart"],annotationchart:["ui","controls","corechart","table"],areachart:"browserchart",bar:["fw","webfontloader"],barchart:"browserchart",browserchart:["ui"],bubbles:["fw","d3"],calendar:["fw"],charteditor:"ui corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table".split(" "),charteditor_base:"ui_base corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table_base".split(" "),circles:["fw","d3"],clusterchart:["corechart",
"d3"],columnchart:"browserchart",controls:["ui"],controls_base:["ui_base"],corechart:["ui"],gantt:["fw"],gauge:["ui"],geochart:["geo"],geomap:["flashui","geo"],geomap_base:["ui_base"],helloworld:["fw"],imagechart:["ui"],imageareachart:"imagechart",imagebarchart:"imagechart",imagelinechart:"imagechart",imagepiechart:"imagechart",imagesparkline:"imagechart",line:["fw","webfontloader"],linechart:"browserchart",map:["geo"],matrix:["vegachart"],motionchart:["flashui"],orgchart:["ui"],overtimecharts:["ui",
"corechart"],piechart:"browserchart",sankey:["fw","d3","d3.sankey"],scatter:["fw","webfontloader"],scatterchart:"browserchart",sunburst:["fw","d3"],streamgraph:["fw","d3"],table:["ui"],table_base:["ui_base"],timeline:["fw","ui"],treemap:["ui"],vegachart:["graphics"],wordtree:["ui"]},Ea={d3:{subdir1:"d3",subdir2:"v5",filename:"d3.js"},"d3.sankey":{subdir1:"d3_sankey",subdir2:"v4",filename:"d3.sankey.js"},webfontloader:{subdir:"webfontloader",filename:"webfont.js"}},Fa={},Ga={"default":[{subdir:"core",
filename:"tooltip.css"}],annotationchart:[{subdir:"annotationchart",filename:"annotationchart.css"}],charteditor:[{subdir:"charteditor",filename:"charteditor.css"}],charteditor_base:[{subdir:"charteditor_base",filename:"charteditor_base.css"}],controls:[{subdir:"controls",filename:"controls.css"}],imagesparkline:[{subdir:"imagechart",filename:"imagesparkline.css"}],orgchart:[{subdir:"orgchart",filename:"orgchart.css"}],table:[{subdir:"table",filename:"table.css"},{subdir:"util",filename:"format.css"}],
table_base:[{subdir:"util",filename:"format.css"},{subdir:"table",filename:"table_base.css"}],ui:[{subdir:"util",filename:"util.css"}],ui_base:[{subdir:"util",filename:"util_base.css"}]};var Ha=Array.prototype.some?function Ka(){};var J;.prototype.toString=K.prototype.L=!0;K.prototype.J=var Oa=/%{(\w+)}/g,Na=RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)","i"),Qa=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,La={};var Sa,M;a:{for(var Ta=["CLOSURE_FLAGS"],N=B,Ua=0;Ua<Ta.length;Ua++)if(N=N[Ta[Ua]],null==N){M=null;break a}M=N}var Va=M&&M[610401301];Sa=null!=Va?Va:!1;var Wa=String.prototype.trim?function(a){return a.trim()}:ar Ya,Za=B.navigator;Ya=Za?Za.userAgentData||null:null;*

 Copyright 2021 Google LLC
 This code is released under the MIT license.
 SPDX-License-Identifier: MIT
*/
var db=$a()?!1:P("Opera"),eb=ab(),fb=P("Edge"),gb=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),hb=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"),ib;
a:{var jb="",kb=);kb&&(jb=kb?kb[1]:"");if(eb){var lb,mb=B.document;lb=mb?mb.documentMode:void 0;if(null!=lb&&lb>parseFloat(jb)){ib=String(lb);break a}}ib=jb}var nb=ib,cb={};
ar qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");ar tb=/^[\w+/_-]+[=]{0,2}$/;var vb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};.prototype.get=var Bb;
b.prototype.add=ar Fb=new zb(function(){return new Ib},;b.prototype.set=Ib.prototype.reset=var Jb,Kb=!1,Hb=new Eb;rototype.reset=var Qb=new zb(;Q.prototype.then=Q.prototype.$goog_Thenable=!0;Q.prototype.cancel=prototype.A=function(a){this.g=0;R(this,2,a)};Q.prototype.B=
rototype.v=
 ac=Db;(S,F);S.prototype.name="cancel";/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
(T,yb);T.prototype.cancel=T.prototype.B=prototype.then=T.prototype.$goog_Thenable=!0;ar ec={};
nction cc(){F.call(this)}E(cc,F);cc.prototype.message="Deferred has already fired";cc.prototype.name="AlreadyCalledError";(U,F);U.prototype.message="Deferred was canceled";U.prototype.name="CanceledError";c.prototype.i=var gc={};var jc,kc=[];function lc(a,b){function c(){var e=a.shift();e=mc(e,b);a.length&&dc(e,c,c);return e}if(!a.length)return ic();var d=kc.length;Ja(kc,a);if(d)return jc;a=kc;return jc=c()}
function mc(a,b){var c=b||{};b=c.document||document;var d=L(a).toString(),e=wb((new xb(b)).g,"SCRIPT"),g={O:e,P:void 0},f=new T(nc,g),h=null,k=null!=c.timeout?c.timeout:5E3;0<k&&(h=window.setTimeout(k),g.P=h);e.onload=e.onreadystatechange=e.onerror=g=c.attributes||{};rb(g,{type:"text/javascript",charset:"UTF-8"});ub(e,g);sb(e,a);qc(b).appendChild(e);return f}c,F);function rc(a){var b=a.M||{};a=Ma(a.format,a.H);a=Qa.exec(L(a).toString());var c=a[3]||"";return Pa(a[1]+Ra("?",a[2]||"",b)+Ra("#",c))}var sc=mc;function tc(a){var b=a.map(rc);if(0===b.length)return Promise.resolve();a={timeout:3E4,attributes:{async:!1,defer:!1}};var c=[];if(!eb||ob()){b=r(b);for(var d=b.next();!d.done;d=b.next())c.push(sc(d.value,a))}else c.push(lc(b,a));return Promise.all(c.map(function(e){return new Promise(}))};/*

 Copyright 2021 Google LLC
 This code is released under the MIT license.
 SPDX-License-Identifier: MIT

*/
ar X={};var wc=0;
function yc(a,b){return Promise.all(a.map()};var Y="",zc="",Ac=!1,Bc=!1,Z;unction Dc(a){var b=[],c=[];a.forEach(;return{N:b,R:c}}
function Ec(a){a=Dc(Cc(a));var b=a.N,c=a.R,d=c.map(.filter(,e=Promise.all(b).then(.then(function(){c.forEach(function(g){vc(g)})});c.forEach(function(g){X[g]={promise:e,
loaded:!1}});return e}
function Fc(a,b){a=Cc(a);var c=[];a.forEach(function(k){(Ga[k]||[]).forEach(});if(0===c.length)return Promise.resolve();var d={};a=c.map(;a=Dc(a);var e=a.N,g=a.R,f=g.map(,h=Promise.all(e).then(.then(;
g.forEach(;return h}var Hc=null;function Ic(a,b){c(a,b);a=b.packages;Array.isArray(a)&&0!==a.length||(a=Ca);var d=c(b.element||document);return Hc=Promise.all([Fc(a,d),Ec(a),b.ignoreWindowOnLoad?Promise.resolve():uc()]).then(}
D("google.charts.loader.versionSpecific.load",function(){var a=ia.apply(0,arguments),b=0;"visualization"===a[b]&&b++;var c="current";"string"===typeof a[b]&&(c=a[b],b++);var d={};ua(a[b])&&(d=a[b]);Z||(Z=Ba[d.domain||"gstatic.com"]);return Ic(c,d)});D("google.charts.loader.versionSpecific.setOnLoadCallback",;}).call(this);
