/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if(typeof JSON2!=="object"&&typeof window.JSON==="object"&&window.JSON.stringify&&window.JSON.parse){JSON2=window.JSON}else{(function(){var a={};
/*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){var c=typeof define==="function"&&define.amd;var e={"function":true,object:true};var h=e[typeof a]&&a&&!a.nodeType&&a;var i=e[typeof window]&&window||this,b=h&&e[typeof module]&&module&&!module.nodeType&&typeof global=="object"&&global;if(b&&(b.global===b||b.window===b||b.self===b)){i=b}function j(ab,V){ab||(ab=i.Object());V||(V=i.Object());var K=ab.Number||i.Number,R=ab.String||i.String,x=ab.Object||i.Object,S=ab.Date||i.Date,T=ab.SyntaxError||i.SyntaxError,aa=ab.TypeError||i.TypeError,J=ab.Math||i.Math,Y=ab.JSON||i.JSON;
if(typeof Y=="object"&&Y){V.stringify=Y.stringify;V.parse=Y.parse}var n=x.prototype,u=n.toString,r,m,L;var B=new S(-3509827334573292);try{B=B.getUTCFullYear()==-109252&&B.getUTCMonth()===0&&B.getUTCDate()===1&&B.getUTCHours()==10&&B.getUTCMinutes()==37&&B.getUTCSeconds()==6&&B.getUTCMilliseconds()==708}catch(v){}function o(ac){if(o[ac]!==L){return o[ac]}var ad;if(ac=="bug-string-char-index"){ad="a"[0]!="a"}else{if(ac=="json"){ad=o("json-stringify")&&o("json-parse")}else{var ak,ah='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(ac=="json-stringify"){var ai=V.stringify,aj=typeof ai=="function"&&B;if(aj){(ak=function(){return 1}).toJSON=ak;try{aj=ai(0)==="0"&&ai(new K())==="0"&&ai(new R())=='""'&&ai(u)===L&&ai(L)===L&&ai()===L&&ai(ak)==="1"&&ai([ak])=="[1]"&&ai([L])=="[null]"&&ai(null)=="null"&&ai([L,u,null])=="[null,null,null]"&&ai({a:[ak,true,false,null,"\x00\b\n\f\r\t"]})==ah&&ai(null,ak)==="1"&&ai([1,2],null,1)=="[\n 1,\n 2\n]"&&ai(new S(-8640000000000000))=='"-271821-04-20T00:00:00.000Z"'&&ai(new S(8640000000000000))=='"+275760-09-13T00:00:00.000Z"'&&ai(new S(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&ai(new S(-1))=='"1969-12-31T23:59:59.999Z"'
}catch(ae){aj=false}}ad=aj}if(ac=="json-parse"){var ag=V.parse;if(typeof ag=="function"){try{if(ag("0")===0&&!ag(false)){ak=ag(ah);var af=ak.a.length==5&&ak.a[0]===1;if(af){try{af=!ag('"\t"')}catch(ae){}if(af){try{af=ag("01")!==1}catch(ae){}}if(af){try{af=ag("1.")!==1}catch(ae){}}}}}catch(ae){af=false}}ad=af}}}return o[ac]=!!ad}if(!o("json")){var U="[object Function]",Q="[object Date]",N="[object Number]",O="[object String]",E="[object Array]",A="[object Boolean]";var F=o("bug-string-char-index");if(!B){var s=J.floor;var Z=[0,31,59,90,120,151,181,212,243,273,304,334];var D=function(ac,ad){return Z[ad]+365*(ac-1970)+s((ac-1969+(ad=+(ad>1)))/4)-s((ac-1901+ad)/100)+s((ac-1601+ad)/400)}}if(!(r=n.hasOwnProperty)){r=function(ae){var ac={},ad;if((ac.__proto__=null,ac.__proto__={toString:1},ac).toString!=u){r=function(ah){var ag=this.__proto__,af=ah in (this.__proto__=null,this);this.__proto__=ag;return af}}else{ad=ac.constructor;r=function(ag){var af=(this.constructor||ad).prototype;return ag in this&&!(ag in af&&this[ag]===af[ag])
}}ac=null;return r.call(this,ae)}}m=function(ae,ah){var af=0,ac,ad,ag;(ac=function(){this.valueOf=0}).prototype.valueOf=0;ad=new ac();for(ag in ad){if(r.call(ad,ag)){af++}}ac=ad=null;if(!af){ad=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];m=function(aj,an){var am=u.call(aj)==U,al,ak;var ai=!am&&typeof aj.constructor!="function"&&e[typeof aj.hasOwnProperty]&&aj.hasOwnProperty||r;for(al in aj){if(!(am&&al=="prototype")&&ai.call(aj,al)){an(al)}}for(ak=ad.length;al=ad[--ak];ai.call(aj,al)&&an(al)){}}}else{if(af==2){m=function(aj,am){var ai={},al=u.call(aj)==U,ak;for(ak in aj){if(!(al&&ak=="prototype")&&!r.call(ai,ak)&&(ai[ak]=1)&&r.call(aj,ak)){am(ak)}}}}else{m=function(aj,am){var al=u.call(aj)==U,ak,ai;for(ak in aj){if(!(al&&ak=="prototype")&&r.call(aj,ak)&&!(ai=ak==="constructor")){am(ak)}}if(ai||r.call(aj,(ak="constructor"))){am(ak)}}}}return m(ae,ah)};if(!o("json-stringify")){var q={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};
var I="000000";var t=function(ac,ad){return(I+(ad||0)).slice(-ac)};var z="\\u00";var C=function(ai){var ad='"',ag=0,ah=ai.length,ac=!F||ah>10;var af=ac&&(F?ai.split(""):ai);for(;ag<ah;ag++){var ae=ai.charCodeAt(ag);switch(ae){case 8:case 9:case 10:case 12:case 13:case 34:case 92:ad+=q[ae];break;default:if(ae<32){ad+=z+t(2,ae.toString(16));break}ad+=ac?af[ag]:ai.charAt(ag)}}return ad+'"'};var p=function(ai,aA,ag,al,ax,ac,aj){var at,ae,ap,az,ay,ak,aw,au,aq,an,ar,ad,ah,af,av,ao;try{at=aA[ai]}catch(am){}if(typeof at=="object"&&at){ae=u.call(at);if(ae==Q&&!r.call(at,"toJSON")){if(at>-1/0&&at<1/0){if(D){ay=s(at/86400000);for(ap=s(ay/365.2425)+1970-1;D(ap+1,0)<=ay;ap++){}for(az=s((ay-D(ap,0))/30.42);D(ap,az+1)<=ay;az++){}ay=1+ay-D(ap,az);ak=(at%86400000+86400000)%86400000;aw=s(ak/3600000)%24;au=s(ak/60000)%60;aq=s(ak/1000)%60;an=ak%1000}else{ap=at.getUTCFullYear();az=at.getUTCMonth();ay=at.getUTCDate();aw=at.getUTCHours();au=at.getUTCMinutes();aq=at.getUTCSeconds();an=at.getUTCMilliseconds()}at=(ap<=0||ap>=10000?(ap<0?"-":"+")+t(6,ap<0?-ap:ap):t(4,ap))+"-"+t(2,az+1)+"-"+t(2,ay)+"T"+t(2,aw)+":"+t(2,au)+":"+t(2,aq)+"."+t(3,an)+"Z"
}else{at=null}}else{if(typeof at.toJSON=="function"&&((ae!=N&&ae!=O&&ae!=E)||r.call(at,"toJSON"))){at=at.toJSON(ai)}}}if(ag){at=ag.call(aA,ai,at)}if(at===null){return"null"}ae=u.call(at);if(ae==A){return""+at}else{if(ae==N){return at>-1/0&&at<1/0?""+at:"null"}else{if(ae==O){return C(""+at)}}}if(typeof at=="object"){for(af=aj.length;af--;){if(aj[af]===at){throw aa()}}aj.push(at);ar=[];av=ac;ac+=ax;if(ae==E){for(ah=0,af=at.length;ah<af;ah++){ad=p(ah,at,ag,al,ax,ac,aj);ar.push(ad===L?"null":ad)}ao=ar.length?(ax?"[\n"+ac+ar.join(",\n"+ac)+"\n"+av+"]":("["+ar.join(",")+"]")):"[]"}else{m(al||at,function(aC){var aB=p(aC,at,ag,al,ax,ac,aj);if(aB!==L){ar.push(C(aC)+":"+(ax?" ":"")+aB)}});ao=ar.length?(ax?"{\n"+ac+ar.join(",\n"+ac)+"\n"+av+"}":("{"+ar.join(",")+"}")):"{}"}aj.pop();return ao}};V.stringify=function(ac,ae,af){var ad,al,aj,ai;if(e[typeof ae]&&ae){if((ai=u.call(ae))==U){al=ae}else{if(ai==E){aj={};for(var ah=0,ag=ae.length,ak;ah<ag;ak=ae[ah++],((ai=u.call(ak)),ai==O||ai==N)&&(aj[ak]=1)){}}}}if(af){if((ai=u.call(af))==N){if((af-=af%1)>0){for(ad="",af>10&&(af=10);
ad.length<af;ad+=" "){}}}else{if(ai==O){ad=af.length<=10?af:af.slice(0,10)}}}return p("",(ak={},ak[""]=ac,ak),al,aj,ad,"",[])}}if(!o("json-parse")){var M=R.fromCharCode;var l={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};var G,X;var H=function(){G=X=null;throw T()};var y=function(){var ah=X,af=ah.length,ag,ae,ac,ai,ad;while(G<af){ad=ah.charCodeAt(G);switch(ad){case 9:case 10:case 13:case 32:G++;break;case 123:case 125:case 91:case 93:case 58:case 44:ag=F?ah.charAt(G):ah[G];G++;return ag;case 34:for(ag="@",G++;G<af;){ad=ah.charCodeAt(G);if(ad<32){H()}else{if(ad==92){ad=ah.charCodeAt(++G);switch(ad){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:ag+=l[ad];G++;break;case 117:ae=++G;for(ac=G+4;G<ac;G++){ad=ah.charCodeAt(G);if(!(ad>=48&&ad<=57||ad>=97&&ad<=102||ad>=65&&ad<=70)){H()}}ag+=M("0x"+ah.slice(ae,G));break;default:H()}}else{if(ad==34){break}ad=ah.charCodeAt(G);ae=G;while(ad>=32&&ad!=92&&ad!=34){ad=ah.charCodeAt(++G)}ag+=ah.slice(ae,G)}}}if(ah.charCodeAt(G)==34){G++;
return ag}H();default:ae=G;if(ad==45){ai=true;ad=ah.charCodeAt(++G)}if(ad>=48&&ad<=57){if(ad==48&&((ad=ah.charCodeAt(G+1)),ad>=48&&ad<=57)){H()}ai=false;for(;G<af&&((ad=ah.charCodeAt(G)),ad>=48&&ad<=57);G++){}if(ah.charCodeAt(G)==46){ac=++G;for(;ac<af&&((ad=ah.charCodeAt(ac)),ad>=48&&ad<=57);ac++){}if(ac==G){H()}G=ac}ad=ah.charCodeAt(G);if(ad==101||ad==69){ad=ah.charCodeAt(++G);if(ad==43||ad==45){G++}for(ac=G;ac<af&&((ad=ah.charCodeAt(ac)),ad>=48&&ad<=57);ac++){}if(ac==G){H()}G=ac}return +ah.slice(ae,G)}if(ai){H()}if(ah.slice(G,G+4)=="true"){G+=4;return true}else{if(ah.slice(G,G+5)=="false"){G+=5;return false}else{if(ah.slice(G,G+4)=="null"){G+=4;return null}}}H()}}return"$"};var W=function(ad){var ac,ae;if(ad=="$"){H()}if(typeof ad=="string"){if((F?ad.charAt(0):ad[0])=="@"){return ad.slice(1)}if(ad=="["){ac=[];for(;;ae||(ae=true)){ad=y();if(ad=="]"){break}if(ae){if(ad==","){ad=y();if(ad=="]"){H()}}else{H()}}if(ad==","){H()}ac.push(W(ad))}return ac}else{if(ad=="{"){ac={};for(;;ae||(ae=true)){ad=y();
if(ad=="}"){break}if(ae){if(ad==","){ad=y();if(ad=="}"){H()}}else{H()}}if(ad==","||typeof ad!="string"||(F?ad.charAt(0):ad[0])!="@"||y()!=":"){H()}ac[ad.slice(1)]=W(y())}return ac}}H()}return ad};var P=function(ae,ad,af){var ac=w(ae,ad,af);if(ac===L){delete ae[ad]}else{ae[ad]=ac}};var w=function(af,ae,ag){var ad=af[ae],ac;if(typeof ad=="object"&&ad){if(u.call(ad)==E){for(ac=ad.length;ac--;){P(ad,ac,ag)}}else{m(ad,function(ah){P(ad,ah,ag)})}}return ag.call(af,ae,ad)};V.parse=function(ae,af){var ac,ad;G=0;X=""+ae;ac=W(y());if(y()!="$"){H()}G=X=null;return af&&u.call(af)==U?w((ad={},ad[""]=ac,ad),"",af):ac}}}V.runInContext=j;return V}if(h&&!c){j(i,h)}else{var f=i.JSON,k=i.JSON3,d=false;var g=j(i,(i.JSON3={noConflict:function(){if(!d){d=true;i.JSON=f;i.JSON3=k;f=k=null}return g}}));i.JSON={parse:g.parse,stringify:g.stringify}}if(c){define(function(){return g})}}).call(this);JSON2=a})()}if(typeof _paq!=="object"){_paq=[]}if(typeof window.Piwik!=="object"){window.Piwik=(function(){var l,a={},x=document,f=navigator,N=screen,J=window,g=J.performance||J.mozPerformance||J.msPerformance||J.webkitPerformance,n=J.encodeURIComponent,I=J.decodeURIComponent,i=unescape,O,w,d;
function k(Y){try{return I(Y)}catch(Z){return unescape(Y)}}function z(Z){var Y=typeof Z;return Y!=="undefined"}function s(Y){return typeof Y==="function"}function M(Y){return typeof Y==="object"}function q(Y){return typeof Y==="string"||Y instanceof String}function t(Z){if(!Z){return true}var Y;var aa=true;for(Y in Z){if(Object.prototype.hasOwnProperty.call(Z,Y)){aa=false}}return aa}function T(){var Y,aa,Z;for(Y=0;Y<arguments.length;Y+=1){Z=arguments[Y];aa=Z.shift();if(q(aa)){O[aa].apply(O,Z)}else{aa.apply(O,Z)}}}function W(ab,aa,Z,Y){if(ab.addEventListener){ab.addEventListener(aa,Z,Y);return true}if(ab.attachEvent){return ab.attachEvent("on"+aa,Z)}ab["on"+aa]=Z}function R(Z,ac){var Y="",ab,aa;for(ab in a){if(Object.prototype.hasOwnProperty.call(a,ab)){aa=a[ab][Z];if(s(aa)){Y+=aa(ac)}}}return Y}function U(){var Y;R("unload");if(l){do{Y=new Date()}while(Y.getTimeAlias()<l)}}function j(aa,Z){var Y=x.createElement("script");Y.type="text/javascript";Y.src=aa;if(Y.readyState){Y.onreadystatechange=function(){var ab=this.readyState;
if(ab==="loaded"||ab==="complete"){Y.onreadystatechange=null;Z()}}}else{Y.onload=Z}x.getElementsByTagName("head")[0].appendChild(Y)}function A(){var Y="";try{Y=J.top.document.referrer}catch(aa){if(J.parent){try{Y=J.parent.document.referrer}catch(Z){Y=""}}}if(Y===""){Y=x.referrer}return Y}function m(Y){var aa=new RegExp("^([a-z]+):"),Z=aa.exec(Y);return Z?Z[1]:null}function c(Y){var aa=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),Z=aa.exec(Y);return Z?Z[1]:Y}function L(aa,Z){var Y="[\\?&#]"+Z+"=([^&#]*)";var ac=new RegExp(Y);var ab=ac.exec(aa);return ab?I(ab[1]):""}function v(Y){return unescape(n(Y))}function V(an){var aa=function(au,at){return(au<<at)|(au>>>(32-at))},ao=function(aw){var au="",av,at;for(av=7;av>=0;av--){at=(aw>>>(av*4))&15;au+=at.toString(16)}return au},ad,aq,ap,Z=[],ah=1732584193,af=4023233417,ae=2562383102,ac=271733878,ab=3285377520,am,al,ak,aj,ai,ar,Y,ag=[];an=v(an);Y=an.length;for(aq=0;aq<Y-3;aq+=4){ap=an.charCodeAt(aq)<<24|an.charCodeAt(aq+1)<<16|an.charCodeAt(aq+2)<<8|an.charCodeAt(aq+3);
ag.push(ap)}switch(Y&3){case 0:aq=2147483648;break;case 1:aq=an.charCodeAt(Y-1)<<24|8388608;break;case 2:aq=an.charCodeAt(Y-2)<<24|an.charCodeAt(Y-1)<<16|32768;break;case 3:aq=an.charCodeAt(Y-3)<<24|an.charCodeAt(Y-2)<<16|an.charCodeAt(Y-1)<<8|128;break}ag.push(aq);while((ag.length&15)!==14){ag.push(0)}ag.push(Y>>>29);ag.push((Y<<3)&4294967295);for(ad=0;ad<ag.length;ad+=16){for(aq=0;aq<16;aq++){Z[aq]=ag[ad+aq]}for(aq=16;aq<=79;aq++){Z[aq]=aa(Z[aq-3]^Z[aq-8]^Z[aq-14]^Z[aq-16],1)}am=ah;al=af;ak=ae;aj=ac;ai=ab;for(aq=0;aq<=19;aq++){ar=(aa(am,5)+((al&ak)|(~al&aj))+ai+Z[aq]+1518500249)&4294967295;ai=aj;aj=ak;ak=aa(al,30);al=am;am=ar}for(aq=20;aq<=39;aq++){ar=(aa(am,5)+(al^ak^aj)+ai+Z[aq]+1859775393)&4294967295;ai=aj;aj=ak;ak=aa(al,30);al=am;am=ar}for(aq=40;aq<=59;aq++){ar=(aa(am,5)+((al&ak)|(al&aj)|(ak&aj))+ai+Z[aq]+2400959708)&4294967295;ai=aj;aj=ak;ak=aa(al,30);al=am;am=ar}for(aq=60;aq<=79;aq++){ar=(aa(am,5)+(al^ak^aj)+ai+Z[aq]+3395469782)&4294967295;ai=aj;aj=ak;ak=aa(al,30);al=am;am=ar}ah=(ah+am)&4294967295;
af=(af+al)&4294967295;ae=(ae+ak)&4294967295;ac=(ac+aj)&4294967295;ab=(ab+ai)&4294967295}ar=ao(ah)+ao(af)+ao(ae)+ao(ac)+ao(ab);return ar.toLowerCase()}function Q(aa,Y,Z){if(!aa){aa=""}if(!Y){Y=""}if(aa==="translate.googleusercontent.com"){if(Z===""){Z=Y}Y=L(Y,"u");aa=c(Y)}else{if(aa==="cc.bingj.com"||aa==="webcache.googleusercontent.com"||aa.slice(0,5)==="74.6."){Y=x.links[0].href;aa=c(Y)}}return[aa,Y,Z]}function B(Z){var Y=Z.length;if(Z.charAt(--Y)==="."){Z=Z.slice(0,Y)}if(Z.slice(0,2)==="*."){Z=Z.slice(1)}if(Z.indexOf("/")!==-1){Z=Z.substr(0,Z.indexOf("/"))}return Z}function X(Z){Z=Z&&Z.text?Z.text:Z;if(!q(Z)){var Y=x.getElementsByTagName("title");if(Y&&z(Y[0])){Z=Y[0].text}}return Z}function F(Y){if(!Y){return[]}if(!z(Y.children)&&z(Y.childNodes)){return Y.children}if(z(Y.children)){return Y.children}return[]}function K(Z,Y){if(!Z||!Y){return false}if(Z.contains){return Z.contains(Y)}if(Z===Y){return true}if(Z.compareDocumentPosition){return !!(Z.compareDocumentPosition(Y)&16)}return false
}function C(aa,ab){if(aa&&aa.indexOf){return aa.indexOf(ab)}if(!z(aa)||aa===null){return -1}if(!aa.length){return -1}var Y=aa.length;if(Y===0){return -1}var Z=0;while(Z<Y){if(aa[Z]===ab){return Z}Z++}return -1}function H(Z,Y){Z=String(Z);return Z.indexOf(Y,Z.length-Y.length)!==-1}function r(Z,Y){Z=String(Z);return Z.indexOf(Y)!==-1}function e(Z,Y){Z=String(Z);return Z.substr(0,Z.length-Y)}function h(aa){if(!aa){return false}function Y(ac,ad){if(J.getComputedStyle){return x.defaultView.getComputedStyle(ac,null)[ad]}if(ac.currentStyle){return ac.currentStyle[ad]}}function ab(ac){ac=ac.parentNode;while(ac){if(ac===x){return true}ac=ac.parentNode}return false}function Z(ae,ak,ac,ah,af,ai,ag){var ad=ae.parentNode,aj=1;if(!ab(ae)){return false}if(9===ad.nodeType){return true}if("0"===Y(ae,"opacity")||"none"===Y(ae,"display")||"hidden"===Y(ae,"visibility")){return false}if(!z(ak)||!z(ac)||!z(ah)||!z(af)||!z(ai)||!z(ag)){ak=ae.offsetTop;af=ae.offsetLeft;ah=ak+ae.offsetHeight;ac=af+ae.offsetWidth;
ai=ae.offsetWidth;ag=ae.offsetHeight}if(aa===ae&&(0===ag||0===ai)&&"hidden"===Y(ae,"overflow")){return false}if(ad){if(("hidden"===Y(ad,"overflow")||"scroll"===Y(ad,"overflow"))){if(af+aj>ad.offsetWidth+ad.scrollLeft||af+ai-aj<ad.scrollLeft||ak+aj>ad.offsetHeight+ad.scrollTop||ak+ag-aj<ad.scrollTop){return false}}if(ae.offsetParent===ad){af+=ad.offsetLeft;ak+=ad.offsetTop}return Z(ad,ak,ac,ah,af,ai,ag)}return true}return Z(aa)}var S={htmlCollectionToArray:function(aa){var Y=[],Z;if(!aa||!aa.length){return Y}for(Z=0;Z<aa.length;Z++){Y.push(aa[Z])}return Y},find:function(Y){if(!document.querySelectorAll||!Y){return[]}var Z=document.querySelectorAll(Y);return this.htmlCollectionToArray(Z)},findMultiple:function(aa){if(!aa||!aa.length){return[]}var Z,ab;var Y=[];for(Z=0;Z<aa.length;Z++){ab=this.find(aa[Z]);Y=Y.concat(ab)}Y=this.makeNodesUnique(Y);return Y},findNodesByTagName:function(Z,Y){if(!Z||!Y||!Z.getElementsByTagName){return[]}var aa=Z.getElementsByTagName(Y);return this.htmlCollectionToArray(aa)
},makeNodesUnique:function(Y){var ad=[].concat(Y);Y.sort(function(af,ae){if(af===ae){return 0}var ah=C(ad,af);var ag=C(ad,ae);if(ah===ag){return 0}return ah>ag?-1:1});if(Y.length<=1){return Y}var Z=0;var ab=0;var ac=[];var aa;aa=Y[Z++];while(aa){if(aa===Y[Z]){ab=ac.push(Z)}aa=Y[Z++]||null}while(ab--){Y.splice(ac[ab],1)}return Y},getAttributeValueFromNode:function(ac,aa){if(!this.hasNodeAttribute(ac,aa)){return}if(ac&&ac.getAttribute){return ac.getAttribute(aa)}if(!ac||!ac.attributes){return}var ab=(typeof ac.attributes[aa]);if("undefined"===ab){return}if(ac.attributes[aa].value){return ac.attributes[aa].value}if(ac.attributes[aa].nodeValue){return ac.attributes[aa].nodeValue}var Z;var Y=ac.attributes;if(!Y){return}for(Z=0;Z<Y.length;Z++){if(Y[Z].nodeName===aa){return Y[Z].nodeValue}}return null},hasNodeAttributeWithValue:function(Z,Y){var aa=this.getAttributeValueFromNode(Z,Y);return !!aa},hasNodeAttribute:function(aa,Y){if(aa&&aa.hasAttribute){return aa.hasAttribute(Y)}if(aa&&aa.attributes){var Z=(typeof aa.attributes[Y]);
return"undefined"!==Z}return false},hasNodeCssClass:function(aa,Y){if(aa&&Y&&aa.className){var Z=typeof aa.className==="string"?aa.className.split(" "):[];if(-1!==C(Z,Y)){return true}}return false},findNodesHavingAttribute:function(ac,aa,Y){if(!Y){Y=[]}if(!ac||!aa){return Y}var ab=F(ac);if(!ab||!ab.length){return Y}var Z,ad;for(Z=0;Z<ab.length;Z++){ad=ab[Z];if(this.hasNodeAttribute(ad,aa)){Y.push(ad)}Y=this.findNodesHavingAttribute(ad,aa,Y)}return Y},findFirstNodeHavingAttribute:function(aa,Z){if(!aa||!Z){return}if(this.hasNodeAttribute(aa,Z)){return aa}var Y=this.findNodesHavingAttribute(aa,Z);if(Y&&Y.length){return Y[0]}},findFirstNodeHavingAttributeWithValue:function(ab,aa){if(!ab||!aa){return}if(this.hasNodeAttributeWithValue(ab,aa)){return ab}var Y=this.findNodesHavingAttribute(ab,aa);if(!Y||!Y.length){return}var Z;for(Z=0;Z<Y.length;Z++){if(this.getAttributeValueFromNode(Y[Z],aa)){return Y[Z]}}},findNodesHavingCssClass:function(ac,ab,Y){if(!Y){Y=[]}if(!ac||!ab){return Y}if(ac.getElementsByClassName){var ad=ac.getElementsByClassName(ab);
return this.htmlCollectionToArray(ad)}var aa=F(ac);if(!aa||!aa.length){return[]}var Z,ae;for(Z=0;Z<aa.length;Z++){ae=aa[Z];if(this.hasNodeCssClass(ae,ab)){Y.push(ae)}Y=this.findNodesHavingCssClass(ae,ab,Y)}return Y},findFirstNodeHavingClass:function(aa,Z){if(!aa||!Z){return}if(this.hasNodeCssClass(aa,Z)){return aa}var Y=this.findNodesHavingCssClass(aa,Z);if(Y&&Y.length){return Y[0]}},isLinkElement:function(Z){if(!Z){return false}var Y=String(Z.nodeName).toLowerCase();var ab=["a","area"];var aa=C(ab,Y);return aa!==-1},setAnyAttribute:function(Z,Y,aa){if(!Z||!Y){return}if(Z.setAttribute){Z.setAttribute(Y,aa)}else{Z[Y]=aa}}};var p={CONTENT_ATTR:"data-track-content",CONTENT_CLASS:"piwikTrackContent",CONTENT_NAME_ATTR:"data-content-name",CONTENT_PIECE_ATTR:"data-content-piece",CONTENT_PIECE_CLASS:"piwikContentPiece",CONTENT_TARGET_ATTR:"data-content-target",CONTENT_TARGET_CLASS:"piwikContentTarget",CONTENT_IGNOREINTERACTION_ATTR:"data-content-ignoreinteraction",CONTENT_IGNOREINTERACTION_CLASS:"piwikContentIgnoreInteraction",location:undefined,findContentNodes:function(){var Z="."+this.CONTENT_CLASS;
var Y="["+this.CONTENT_ATTR+"]";var aa=S.findMultiple([Z,Y]);return aa},findContentNodesWithinNode:function(ab){if(!ab){return[]}var Z=S.findNodesHavingCssClass(ab,this.CONTENT_CLASS);var Y=S.findNodesHavingAttribute(ab,this.CONTENT_ATTR);if(Y&&Y.length){var aa;for(aa=0;aa<Y.length;aa++){Z.push(Y[aa])}}if(S.hasNodeAttribute(ab,this.CONTENT_ATTR)){Z.push(ab)}else{if(S.hasNodeCssClass(ab,this.CONTENT_CLASS)){Z.push(ab)}}Z=S.makeNodesUnique(Z);return Z},findParentContentNode:function(Z){if(!Z){return}var aa=Z;var Y=0;while(aa&&aa!==x&&aa.parentNode){if(S.hasNodeAttribute(aa,this.CONTENT_ATTR)){return aa}if(S.hasNodeCssClass(aa,this.CONTENT_CLASS)){return aa}aa=aa.parentNode;if(Y>1000){break}Y++}},findPieceNode:function(Z){var Y;Y=S.findFirstNodeHavingAttribute(Z,this.CONTENT_PIECE_ATTR);if(!Y){Y=S.findFirstNodeHavingClass(Z,this.CONTENT_PIECE_CLASS)}if(Y){return Y}return Z},findTargetNodeNoDefault:function(Y){if(!Y){return}var Z=S.findFirstNodeHavingAttributeWithValue(Y,this.CONTENT_TARGET_ATTR);
if(Z){return Z}Z=S.findFirstNodeHavingAttribute(Y,this.CONTENT_TARGET_ATTR);if(Z){return Z}Z=S.findFirstNodeHavingClass(Y,this.CONTENT_TARGET_CLASS);if(Z){return Z}},findTargetNode:function(Y){var Z=this.findTargetNodeNoDefault(Y);if(Z){return Z}return Y},findContentName:function(Z){if(!Z){return}var ac=S.findFirstNodeHavingAttributeWithValue(Z,this.CONTENT_NAME_ATTR);if(ac){return S.getAttributeValueFromNode(ac,this.CONTENT_NAME_ATTR)}var Y=this.findContentPiece(Z);if(Y){return this.removeDomainIfIsInLink(Y)}if(S.hasNodeAttributeWithValue(Z,"title")){return S.getAttributeValueFromNode(Z,"title")}var aa=this.findPieceNode(Z);if(S.hasNodeAttributeWithValue(aa,"title")){return S.getAttributeValueFromNode(aa,"title")}var ab=this.findTargetNode(Z);if(S.hasNodeAttributeWithValue(ab,"title")){return S.getAttributeValueFromNode(ab,"title")}},findContentPiece:function(Z){if(!Z){return}var ab=S.findFirstNodeHavingAttributeWithValue(Z,this.CONTENT_PIECE_ATTR);if(ab){return S.getAttributeValueFromNode(ab,this.CONTENT_PIECE_ATTR)
}var Y=this.findPieceNode(Z);var aa=this.findMediaUrlInNode(Y);if(aa){return this.toAbsoluteUrl(aa)}},findContentTarget:function(aa){if(!aa){return}var ab=this.findTargetNode(aa);if(S.hasNodeAttributeWithValue(ab,this.CONTENT_TARGET_ATTR)){return S.getAttributeValueFromNode(ab,this.CONTENT_TARGET_ATTR)}var Z;if(S.hasNodeAttributeWithValue(ab,"href")){Z=S.getAttributeValueFromNode(ab,"href");return this.toAbsoluteUrl(Z)}var Y=this.findPieceNode(aa);if(S.hasNodeAttributeWithValue(Y,"href")){Z=S.getAttributeValueFromNode(Y,"href");return this.toAbsoluteUrl(Z)}},isSameDomain:function(Y){if(!Y||!Y.indexOf){return false}if(0===Y.indexOf(this.getLocation().origin)){return true}var Z=Y.indexOf(this.getLocation().host);if(8>=Z&&0<=Z){return true}return false},removeDomainIfIsInLink:function(aa){var Z="^https?://[^/]+";var Y="^.*//[^/]+";if(aa&&aa.search&&-1!==aa.search(new RegExp(Z))&&this.isSameDomain(aa)){aa=aa.replace(new RegExp(Y),"");if(!aa){aa="/"}}return aa},findMediaUrlInNode:function(ac){if(!ac){return
}var aa=["img","embed","video","audio"];var Y=ac.nodeName.toLowerCase();if(-1!==C(aa,Y)&&S.findFirstNodeHavingAttributeWithValue(ac,"src")){var ab=S.findFirstNodeHavingAttributeWithValue(ac,"src");return S.getAttributeValueFromNode(ab,"src")}if(Y==="object"&&S.hasNodeAttributeWithValue(ac,"data")){return S.getAttributeValueFromNode(ac,"data")}if(Y==="object"){var ad=S.findNodesByTagName(ac,"param");if(ad&&ad.length){var Z;for(Z=0;Z<ad.length;Z++){if("movie"===S.getAttributeValueFromNode(ad[Z],"name")&&S.hasNodeAttributeWithValue(ad[Z],"value")){return S.getAttributeValueFromNode(ad[Z],"value")}}}var ae=S.findNodesByTagName(ac,"embed");if(ae&&ae.length){return this.findMediaUrlInNode(ae[0])}}},trim:function(Y){if(Y&&String(Y)===Y){return Y.replace(/^\s+|\s+$/g,"")}return Y},isOrWasNodeInViewport:function(ad){if(!ad||!ad.getBoundingClientRect||ad.nodeType!==1){return true}var ac=ad.getBoundingClientRect();var ab=x.documentElement||{};var aa=ac.top<0;if(aa&&ad.offsetTop){aa=(ad.offsetTop+ac.height)>0
}var Z=ab.clientWidth;if(J.innerWidth&&Z>J.innerWidth){Z=J.innerWidth}var Y=ab.clientHeight;if(J.innerHeight&&Y>J.innerHeight){Y=J.innerHeight}return((ac.bottom>0||aa)&&ac.right>0&&ac.left<Z&&((ac.top<Y)||aa))},isNodeVisible:function(Z){var Y=h(Z);var aa=this.isOrWasNodeInViewport(Z);return Y&&aa},buildInteractionRequestParams:function(Y,Z,aa,ab){var ac="";if(Y){ac+="c_i="+n(Y)}if(Z){if(ac){ac+="&"}ac+="c_n="+n(Z)}if(aa){if(ac){ac+="&"}ac+="c_p="+n(aa)}if(ab){if(ac){ac+="&"}ac+="c_t="+n(ab)}return ac},buildImpressionRequestParams:function(Y,Z,aa){var ab="c_n="+n(Y)+"&c_p="+n(Z);if(aa){ab+="&c_t="+n(aa)}return ab},buildContentBlock:function(aa){if(!aa){return}var Y=this.findContentName(aa);var Z=this.findContentPiece(aa);var ab=this.findContentTarget(aa);Y=this.trim(Y);Z=this.trim(Z);ab=this.trim(ab);return{name:Y||"Unknown",piece:Z||"Unknown",target:ab||""}},collectContent:function(ab){if(!ab||!ab.length){return[]}var aa=[];var Y,Z;for(Y=0;Y<ab.length;Y++){Z=this.buildContentBlock(ab[Y]);
if(z(Z)){aa.push(Z)}}return aa},setLocation:function(Y){this.location=Y},getLocation:function(){var Y=this.location||J.location;if(!Y.origin){Y.origin=Y.protocol+"//"+Y.hostname+(Y.port?":"+Y.port:"")}return Y},toAbsoluteUrl:function(Z){if((!Z||String(Z)!==Z)&&Z!==""){return Z}if(""===Z){return this.getLocation().href}if(Z.search(/^\/\//)!==-1){return this.getLocation().protocol+Z}if(Z.search(/:\/\//)!==-1){return Z}if(0===Z.indexOf("#")){return this.getLocation().origin+this.getLocation().pathname+Z}if(0===Z.indexOf("?")){return this.getLocation().origin+this.getLocation().pathname+Z}if(0===Z.search("^[a-zA-Z]{2,11}:")){return Z}if(Z.search(/^\//)!==-1){return this.getLocation().origin+Z}var Y="(.*/)";var aa=this.getLocation().origin+this.getLocation().pathname.match(new RegExp(Y))[0];return aa+Z},isUrlToCurrentDomain:function(Z){var aa=this.toAbsoluteUrl(Z);if(!aa){return false}var Y=this.getLocation().origin;if(Y===aa){return true}if(0===String(aa).indexOf(Y)){if(":"===String(aa).substr(Y.length,1)){return false
}return true}return false},setHrefAttribute:function(Z,Y){if(!Z||!Y){return}S.setAnyAttribute(Z,"href",Y)},shouldIgnoreInteraction:function(aa){var Z=S.hasNodeAttribute(aa,this.CONTENT_IGNOREINTERACTION_ATTR);var Y=S.hasNodeCssClass(aa,this.CONTENT_IGNOREINTERACTION_CLASS);return Z||Y}};function E(Z,ac){if(ac){return ac}if(r(Z,"?")){var ab=Z.indexOf("?");Z=Z.slice(0,ab)}if(H(Z,"piwik.php")){Z=e(Z,"piwik.php".length)}else{if(H(Z,".php")){var Y=Z.lastIndexOf("/");var aa=1;Z=Z.slice(0,Y+aa)}}if(H(Z,"/js/")){Z=e(Z,"js/".length)}return Z}function D(ae){var ag="Piwik_Overlay";var Z=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");var aa=Z.exec(x.referrer);if(aa){var ac=aa[1];if(ac!==String(ae)){return false}var ad=aa[2],Y=aa[3],ab=aa[4];if(!ab){ab=""}else{if(ab.indexOf("&segment=")===0){ab=ab.substr("&segment=".length)}}J.name=ag+"###"+ad+"###"+Y+"###"+ab}var af=J.name.split("###");return af.length===4&&af[0]===ag
}function P(Z,af,ab){var ae=J.name.split("###"),ad=ae[1],Y=ae[2],ac=ae[3],aa=E(Z,af);j(aa+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(aa,ab,ad,Y,ac)})}function o(){if(z(J.frameElement)){return(J.frameElement&&String(J.frameElement.nodeName).toLowerCase()==="iframe")}try{return J.self!==J.top}catch(Y){return true}}function G(bG,bA){var bw=Q(x.domain,J.location.href,A()),ce=B(bw[0]),bg=k(bw[1]),aV=k(bw[2]),cc=false,bK="GET",cq=bK,am="application/x-www-form-urlencoded; charset=UTF-8",bW=am,ai=bG||"",bb="",ci="",by=bA||"",a4="",bh="",aG,aR=x.title,cn=["7z","aac","apk","arc","arj","asf","asx","avi","azw3","bin","csv","deb","dmg","doc","docx","epub","exe","flv","gif","gz","gzip","hqx","ibooks","jar","jpg","jpeg","js","mobi","mp2","mp3","mp4","mpg","mpeg","mov","movie","msi","msp","odb","odf","odg","ods","odt","ogg","ogv","pdf","phps","png","ppt","pptx","qt","qtm","ra","ram","rar","rpm","sea","sit","tar","tbz","tbz2","bz","bz2","tgz","torrent","txt","wav","wma","wmv","wpd","xls","xlsx","xml","z","zip"],ae=[ce],a5=[],be=[],aJ=[],bc=500,b5,aH,bk,bi,Y,bS=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ba=["pk_kwd","piwik_kwd","utm_term"],aS="_pk_",cg,aX,aT=false,ca,aP,a1,b6=33955200000,bQ=1800000,cm=15768000000,aE=true,bO=0,bj=false,at=false,bD,bo={},bN={},aU={},a0=200,cj={},co={},bC=[],bH=false,bZ=false,Z=false,cp=false,aq=false,aO=o(),ch=null,bE,au,a6,bz=V,aW;
function ct(cD,cA,cz,cC,cy,cB){if(aT){return}var cx;if(cz){cx=new Date();cx.setTime(cx.getTime()+cz)}x.cookie=cD+"="+n(cA)+(cz?";expires="+cx.toGMTString():"")+";path="+(cC||"/")+(cy?";domain="+cy:"")+(cB?";secure":"")}function ah(cz){if(aT){return 0}var cx=new RegExp("(^|;)[ ]*"+cz+"=([^;]*)"),cy=cx.exec(x.cookie);return cy?I(cy[2]):0}function bu(cx){var cy;if(bi){cy=new RegExp("#.*");return cx.replace(cy,"")}return cx}function bn(cz,cx){var cA=m(cx),cy;if(cA){return cx}if(cx.slice(0,1)==="/"){return m(cz)+"://"+c(cz)+cx}cz=bu(cz);cy=cz.indexOf("?");if(cy>=0){cz=cz.slice(0,cy)}cy=cz.lastIndexOf("/");if(cy!==cz.length-1){cz=cz.slice(0,cy+1)}return cz+cx}function b3(cz,cx){var cy;cz=String(cz).toLowerCase();cx=String(cx).toLowerCase();if(cz===cx){return true}if(cx.slice(0,1)==="."){if(cz===cx.slice(1)){return true}cy=cz.length-cx.length;if((cy>0)&&(cz.slice(cy)===cx)){return true}}return false}function bM(cx){var cy=document.createElement("a");if(cx.indexOf("//")!==0&&cx.indexOf("http")!==0){cx="http://"+cx
}cy.href=p.toAbsoluteUrl(cx);if(cy.pathname){return cy.pathname}return""}function aF(cy,cx){var cz=(!cx||cx==="/"||cx==="/*");if(cz){return true}if(cy===cx){return true}if(!cy){return false}cx=String(cx).toLowerCase();cy=String(cy).toLowerCase();if(H(cx,"*")){cx=cx.slice(0,-1);cz=(!cx||cx==="/");if(cz){return true}if(cy===cx){return true}return cy.indexOf(cx)===0}if(!H(cy,"/")){cy+="/"}if(!H(cx,"/")){cx+="/"}return cy.indexOf(cx)===0}function ab(cB,cD){var cy,cx,cz,cA,cC;for(cy=0;cy<ae.length;cy++){cA=B(ae[cy]);cC=bM(ae[cy]);if(b3(cB,cA)&&aF(cD,cC)){return true}}return false}function ay(cA){var cy,cx,cz;for(cy=0;cy<ae.length;cy++){cx=B(ae[cy].toLowerCase());if(cA===cx){return true}if(cx.slice(0,1)==="."){if(cA===cx.slice(1)){return true}cz=cA.length-cx.length;if((cz>0)&&(cA.slice(cz)===cx)){return true}}}return false}function bR(cx,cz){var cy=new Image(1,1);cy.onload=function(){w=0;if(typeof cz==="function"){cz()}};cy.src=ai+(ai.indexOf("?")<0?"?":"&")+cx}function cl(cy,cB,cx){if(!z(cx)||null===cx){cx=true
}try{var cA=J.XMLHttpRequest?new J.XMLHttpRequest():J.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;cA.open("POST",ai,true);cA.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)&&cx){bR(cy,cB)}else{if(typeof cB==="function"){cB()}}};cA.setRequestHeader("Content-Type",bW);cA.send(cy)}catch(cz){if(cx){bR(cy,cB)}}}function bI(cy){var cx=new Date();var cz=cx.getTime()+cy;if(!l||cz>l){l=cz}}function bP(cx){if(bE||!aH){return}bE=setTimeout(function cy(){bE=null;if(!aO){aO=(!x.hasFocus||x.hasFocus())}if(!aO){bP(aH);return}if(bk()){return}var cz=new Date(),cA=aH-(cz.getTime()-ch);cA=Math.min(aH,cA);bP(cA)},cx||aH)}function bd(){if(!bE){return}clearTimeout(bE);bE=null}function aL(){aO=true;if(bk()){return}bP()}function af(){bd()}function cv(){if(aq||!aH){return}aq=true;W(J,"focus",aL);W(J,"blur",af);bP()}function b0(cB){var cy=new Date();var cx=cy.getTime();ch=cx;if(bZ&&cx<bZ){var cz=bZ-cx;setTimeout(cB,cz);bI(cz+50);bZ+=50;return}if(bZ===false){var cA=800;
bZ=cx+cA}cB()}function a9(cy,cx,cz){if(!ca&&cy){b0(function(){if(cq==="POST"){cl(cy,cz)}else{bR(cy,cz)}bI(cx)})}if(!aq){cv()}else{bP()}}function bL(cx){if(ca){return false}return(cx&&cx.length)}function cu(cz,cx){if(!bL(cz)){return}var cy='{"requests":["?'+cz.join('","?')+'"]}';b0(function(){cl(cy,null,false);bI(cx)})}function aw(cx){return aS+cx+"."+by+"."+aW}function bx(){if(aT){return"0"}if(!z(f.cookieEnabled)){var cx=aw("testcookie");ct(cx,"1");return ah(cx)==="1"?"1":"0"}return f.cookieEnabled?"1":"0"}function aQ(){aW=bz((cg||ce)+(aX||"/")).slice(0,4)}function bp(){var cy=aw("cvar"),cx=ah(cy);if(cx.length){cx=JSON2.parse(cx);if(M(cx)){return cx}}return{}}function b1(){if(at===false){at=bp()}}function cb(){return bz((f.userAgent||"")+(f.platform||"")+JSON2.stringify(co)+(new Date()).getTime()+Math.random()).slice(0,16)}function b8(){var cz=new Date(),cx=Math.round(cz.getTime()/1000),cy=aw("id"),cC=ah(cy),cB,cA;if(cC){cB=cC.split(".");cB.unshift("0");if(bh.length){cB[1]=bh}return cB}if(bh.length){cA=bh
}else{if("0"===bx()){cA=""}else{cA=cb()}}cB=["1",cA,cx,0,cx,"",""];return cB}function aA(){var cE=b8(),cA=cE[0],cB=cE[1],cy=cE[2],cx=cE[3],cC=cE[4],cz=cE[5];if(!z(cE[6])){cE[6]=""}var cD=cE[6];return{newVisitor:cA,uuid:cB,createTs:cy,visitCount:cx,currentVisitTs:cC,lastVisitTs:cz,lastEcommerceOrderTs:cD}}function al(){var cA=new Date(),cy=cA.getTime(),cB=aA().createTs;var cx=parseInt(cB,10);var cz=(cx*1000)+b6-cy;return cz}function ao(cx){if(!by){return}var cz=new Date(),cy=Math.round(cz.getTime()/1000);if(!z(cx)){cx=aA()}var cA=cx.uuid+"."+cx.createTs+"."+cx.visitCount+"."+cy+"."+cx.lastVisitTs+"."+cx.lastEcommerceOrderTs;ct(aw("id"),cA,al(),aX,cg)}function bf(){var cx=ah(aw("ref"));if(cx.length){try{cx=JSON2.parse(cx);if(M(cx)){return cx}}catch(cy){}}return["","",0,""]}function bq(cz,cy,cx){ct(cz,"",-86400,cy,cx)}function a2(cy){var cx="testvalue";ct("test",cx,10000,null,cy);if(ah("test")===cx){bq("test",null,cy);return true}return false}function aj(){var cz=aT;aT=false;var cx=["id","ses","cvar","ref"];
var cy,cA;for(cy=0;cy<cx.length;cy++){cA=aw(cx[cy]);if(0!==ah(cA)){bq(cA,aX,cg)}}aT=cz}function bv(cx){by=cx;ao()}function cw(cB){if(!cB||!M(cB)){return}var cA=[];var cz;for(cz in cB){if(Object.prototype.hasOwnProperty.call(cB,cz)){cA.push(cz)}}var cC={};cA.sort();var cx=cA.length;var cy;for(cy=0;cy<cx;cy++){cC[cA[cy]]=cB[cA[cy]]}return cC}function bF(){ct(aw("ses"),"*",bQ,aX,cg)}function bT(cz,cU,cV,cA){var cT,cy=new Date(),cH=Math.round(cy.getTime()/1000),cE,cS,cB=1024,c0,cI,cQ=at,cC=aw("ses"),cO=aw("ref"),cL=aw("cvar"),cM=ah(cC),cR=bf(),cX=aG||bg,cF,cx;if(aT){aj()}if(ca){return""}var cN=aA();if(!z(cA)){cA=""}var cK=x.characterSet||x.charset;if(!cK||cK.toLowerCase()==="utf-8"){cK=null}cF=cR[0];cx=cR[1];cE=cR[2];cS=cR[3];if(!cM){var cW=bQ/1000;if(!cN.lastVisitTs||(cH-cN.lastVisitTs)>cW){cN.visitCount++;cN.lastVisitTs=cN.currentVisitTs}if(!a1||!cF.length){for(cT in bS){if(Object.prototype.hasOwnProperty.call(bS,cT)){cF=L(cX,bS[cT]);if(cF.length){break}}}for(cT in ba){if(Object.prototype.hasOwnProperty.call(ba,cT)){cx=L(cX,ba[cT]);
if(cx.length){break}}}}c0=c(aV);cI=cS.length?c(cS):"";if(c0.length&&!ay(c0)&&(!a1||!cI.length||ay(cI))){cS=aV}if(cS.length||cF.length){cE=cH;cR=[cF,cx,cE,bu(cS.slice(0,cB))];ct(cO,JSON2.stringify(cR),cm,aX,cg)}}cz+="&idsite="+by+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+cy.getHours()+"&m="+cy.getMinutes()+"&s="+cy.getSeconds()+"&url="+n(bu(cX))+(aV.length?"&urlref="+n(bu(aV)):"")+((a4&&a4.length)?"&uid="+n(a4):"")+"&_id="+cN.uuid+"&_idts="+cN.createTs+"&_idvc="+cN.visitCount+"&_idn="+cN.newVisitor+(cF.length?"&_rcn="+n(cF):"")+(cx.length?"&_rck="+n(cx):"")+"&_refts="+cE+"&_viewts="+cN.lastVisitTs+(String(cN.lastEcommerceOrderTs).length?"&_ects="+cN.lastEcommerceOrderTs:"")+(String(cS).length?"&_ref="+n(bu(cS.slice(0,cB))):"")+(cK?"&cs="+n(cK):"")+"&send_image=0";for(cT in co){if(Object.prototype.hasOwnProperty.call(co,cT)){cz+="&"+cT+"="+co[cT]}}var cZ=[];if(cU){for(cT in cU){if(Object.prototype.hasOwnProperty.call(cU,cT)&&/^dimension\d+$/.test(cT)){var cD=cT.replace("dimension","");
cZ.push(parseInt(cD,10));cZ.push(String(cD));cz+="&"+cT+"="+cU[cT];delete cU[cT]}}}if(cU&&t(cU)){cU=null}for(cT in aU){if(Object.prototype.hasOwnProperty.call(aU,cT)){var cJ=(-1===cZ.indexOf(cT));if(cJ){cz+="&dimension"+cT+"="+aU[cT]}}}if(cU){cz+="&data="+n(JSON2.stringify(cU))}else{if(Y){cz+="&data="+n(JSON2.stringify(Y))}}function cG(c1,c2){var c3=JSON2.stringify(c1);if(c3.length>2){return"&"+c2+"="+n(c3)}return""}var cY=cw(bo);var cP=cw(bN);cz+=cG(cY,"cvar");cz+=cG(cP,"e_cvar");if(at){cz+=cG(at,"_cvar");for(cT in cQ){if(Object.prototype.hasOwnProperty.call(cQ,cT)){if(at[cT][0]===""||at[cT][1]===""){delete at[cT]}}}if(bj){ct(cL,JSON2.stringify(at),bQ,aX,cg)}}if(aE){if(bO){cz+="&gt_ms="+bO}else{if(g&&g.timing&&g.timing.requestStart&&g.timing.responseEnd){cz+="&gt_ms="+(g.timing.responseEnd-g.timing.requestStart)}}}cN.lastEcommerceOrderTs=z(cA)&&String(cA).length?cA:cN.lastEcommerceOrderTs;ao(cN);bF();cz+=R(cV);if(ci.length){cz+="&"+ci}if(s(bD)){cz=bD(cz)}return cz}bk=function aI(){var cx=new Date();
if(ch+aH<=cx.getTime()){var cy=bT("ping=1",null,"ping");a9(cy,bc);return true}return false};function aY(cA,cz,cE,cB,cx,cH){var cC="idgoal=0",cD,cy=new Date(),cF=[],cG;if(String(cA).length){cC+="&ec_id="+n(cA);cD=Math.round(cy.getTime()/1000)}cC+="&revenue="+cz;if(String(cE).length){cC+="&ec_st="+cE}if(String(cB).length){cC+="&ec_tx="+cB}if(String(cx).length){cC+="&ec_sh="+cx}if(String(cH).length){cC+="&ec_dt="+cH}if(cj){for(cG in cj){if(Object.prototype.hasOwnProperty.call(cj,cG)){if(!z(cj[cG][1])){cj[cG][1]=""}if(!z(cj[cG][2])){cj[cG][2]=""}if(!z(cj[cG][3])||String(cj[cG][3]).length===0){cj[cG][3]=0}if(!z(cj[cG][4])||String(cj[cG][4]).length===0){cj[cG][4]=1}cF.push(cj[cG])}}cC+="&ec_items="+n(JSON2.stringify(cF))}cC=bT(cC,Y,"ecommerce",cD);a9(cC,bc)}function br(cx,cB,cA,cz,cy,cC){if(String(cx).length&&z(cB)){aY(cx,cB,cA,cz,cy,cC)}}function aZ(cx){if(z(cx)){aY("",cx,"","","","")}}function bs(cy,cz){var cx=bT("action_name="+n(X(cy||aR)),cz,"log");a9(cx,bc)}function aC(cz,cy){var cA,cx="(^| )(piwik[_-]"+cy;
if(cz){for(cA=0;cA<cz.length;cA++){cx+="|"+cz[cA]}}cx+=")( |$)";return new RegExp(cx)}function ax(cx){return(ai&&cx&&0===String(cx).indexOf(ai))}function bU(cB,cx,cC,cy){if(ax(cx)){return 0}var cA=aC(be,"download"),cz=aC(aJ,"link"),cD=new RegExp("\\.("+cn.join("|")+")([?&#]|$)","i");if(cz.test(cB)){return"link"}if(cy||cA.test(cB)||cD.test(cx)){return"download"}if(cC){return 0}return"link"}function ac(cy){var cx;cx=cy.parentNode;while(cx!==null&&z(cx)){if(S.isLinkElement(cy)){break}cy=cx;cx=cy.parentNode}return cy}function cr(cC){cC=ac(cC);if(!S.hasNodeAttribute(cC,"href")){return}if(!z(cC.href)){return}var cB=S.getAttributeValueFromNode(cC,"href");if(ax(cB)){return}var cy=cC.pathname||bM(cC.href);var cD=cC.hostname||c(cC.href);var cE=cD.toLowerCase();var cz=cC.href.replace(cD,cE);var cA=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):","i");if(!cA.test(cz)){var cx=bU(cC.className,cz,ab(cE,cy),S.hasNodeAttribute(cC,"download"));if(cx){return{type:cx,href:cz}
}}}function ar(cx,cy,cz,cA){var cB=p.buildInteractionRequestParams(cx,cy,cz,cA);if(!cB){return}return bT(cB,null,"contentInteraction")}function b7(cz,cA,cE,cx,cy){if(!z(cz)){return}if(ax(cz)){return cz}var cC=p.toAbsoluteUrl(cz);var cB="redirecturl="+n(cC)+"&";cB+=ar(cA,cE,cx,(cy||cz));var cD="&";if(ai.indexOf("?")<0){cD="?"}return ai+cD+cB}function aM(cx,cy){if(!cx||!cy){return false}var cz=p.findTargetNode(cx);if(p.shouldIgnoreInteraction(cz)){return false}cz=p.findTargetNodeNoDefault(cx);if(cz&&!K(cz,cy)){return false}return true}function bV(cz,cy,cB){if(!cz){return}var cx=p.findParentContentNode(cz);if(!cx){return}if(!aM(cx,cz)){return}var cA=p.buildContentBlock(cx);if(!cA){return}if(!cA.target&&cB){cA.target=cB}return p.buildInteractionRequestParams(cy,cA.name,cA.piece,cA.target)}function az(cy){if(!bC||!bC.length){return false}var cx,cz;for(cx=0;cx<bC.length;cx++){cz=bC[cx];if(cz&&cz.name===cy.name&&cz.piece===cy.piece&&cz.target===cy.target){return true}}return false}function a8(cA){if(!cA){return false
}var cD=p.findTargetNode(cA);if(!cD||p.shouldIgnoreInteraction(cD)){return false}var cE=cr(cD);if(cp&&cE&&cE.type){return false}if(S.isLinkElement(cD)&&S.hasNodeAttributeWithValue(cD,"href")){var cx=String(S.getAttributeValueFromNode(cD,"href"));if(0===cx.indexOf("#")){return false}if(ax(cx)){return true}if(!p.isUrlToCurrentDomain(cx)){return false}var cB=p.buildContentBlock(cA);if(!cB){return}var cz=cB.name;var cF=cB.piece;var cC=cB.target;if(!S.hasNodeAttributeWithValue(cD,p.CONTENT_TARGET_ATTR)||cD.wasContentTargetAttrReplaced){cD.wasContentTargetAttrReplaced=true;cC=p.toAbsoluteUrl(cx);S.setAnyAttribute(cD,p.CONTENT_TARGET_ATTR,cC)}var cy=b7(cx,"click",cz,cF,cC);p.setHrefAttribute(cD,cy);return true}return false}function ap(cy){if(!cy||!cy.length){return}var cx;for(cx=0;cx<cy.length;cx++){a8(cy[cx])}}function aB(cx){return function(cy){if(!cx){return}var cB=p.findParentContentNode(cx);var cC;if(cy){cC=cy.target||cy.srcElement}if(!cC){cC=cx}if(!aM(cB,cC)){return}bI(bc);if(S.isLinkElement(cx)&&S.hasNodeAttributeWithValue(cx,"href")&&S.hasNodeAttributeWithValue(cx,p.CONTENT_TARGET_ATTR)){var cz=S.getAttributeValueFromNode(cx,"href");
if(!ax(cz)&&cx.wasContentTargetAttrReplaced){S.setAnyAttribute(cx,p.CONTENT_TARGET_ATTR,"")}}var cG=cr(cx);if(Z&&cG&&cG.type){return cG.type}if(a8(cB)){return"href"}var cD=p.buildContentBlock(cB);if(!cD){return}var cA=cD.name;var cH=cD.piece;var cF=cD.target;var cE=ar("click",cA,cH,cF);a9(cE,bc);return cE}}function bt(cz){if(!cz||!cz.length){return}var cx,cy;for(cx=0;cx<cz.length;cx++){cy=p.findTargetNode(cz[cx]);if(cy&&!cy.contentInteractionTrackingSetupDone){cy.contentInteractionTrackingSetupDone=true;W(cy,"click",aB(cy))}}}function a3(cz,cA){if(!cz||!cz.length){return[]}var cx,cy;for(cx=0;cx<cz.length;cx++){if(az(cz[cx])){cz.splice(cx,1);cx--}else{bC.push(cz[cx])}}if(!cz||!cz.length){return[]}ap(cA);bt(cA);var cB=[];for(cx=0;cx<cz.length;cx++){cy=bT(p.buildImpressionRequestParams(cz[cx].name,cz[cx].piece,cz[cx].target),undefined,"contentImpressions");if(cy){cB.push(cy)}}return cB}function bY(cy){var cx=p.collectContent(cy);return a3(cx,cy)}function aK(cy){if(!cy||!cy.length){return[]
}var cx;for(cx=0;cx<cy.length;cx++){if(!p.isNodeVisible(cy[cx])){cy.splice(cx,1);cx--}}if(!cy||!cy.length){return[]}return bY(cy)}function ak(cz,cx,cy){var cA=p.buildImpressionRequestParams(cz,cx,cy);return bT(cA,null,"contentImpression")}function cs(cA,cy){if(!cA){return}var cx=p.findParentContentNode(cA);var cz=p.buildContentBlock(cx);if(!cz){return}if(!cy){cy="Unknown"}return ar(cy,cz.name,cz.piece,cz.target)}function b9(cy,cA,cx,cz){return"e_c="+n(cy)+"&e_a="+n(cA)+(z(cx)?"&e_n="+n(cx):"")+(z(cz)?"&e_v="+n(cz):"")}function ad(cz,cB,cx,cA,cC){if(String(cz).length===0||String(cB).length===0){return false}var cy=bT(b9(cz,cB,cx,cA),cC,"event");a9(cy,bc)}function bB(cx,cA,cy,cB){var cz=bT("search="+n(cx)+(cA?"&search_cat="+n(cA):"")+(z(cy)?"&search_count="+cy:""),cB,"sitesearch");a9(cz,bc)}function cd(cx,cA,cz){var cy=bT("idgoal="+cx+(cA?"&revenue="+cA:""),cz,"goal");a9(cy,bc)}function ck(cA,cx,cE,cD,cz){var cC=cx+"="+n(bu(cA));var cy=bV(cz,"click",cA);if(cy){cC+="&"+cy}var cB=bT(cC,cE,"link");
a9(cB,(cD?0:bc),cD)}function bl(cy,cx){if(cy!==""){return cy+cx.charAt(0).toUpperCase()+cx.slice(1)}return cx}function bJ(cC){var cB,cx,cA=["","webkit","ms","moz"],cz;if(!aP){for(cx=0;cx<cA.length;cx++){cz=cA[cx];if(Object.prototype.hasOwnProperty.call(x,bl(cz,"hidden"))){if(x[bl(cz,"visibilityState")]==="prerender"){cB=true}break}}}if(cB){W(x,cz+"visibilitychange",function cy(){x.removeEventListener(cz+"visibilitychange",cy,false);cC()});return}cC()}function an(cx){if(x.readyState==="complete"){cx()}else{if(J.addEventListener){J.addEventListener("load",cx)}else{if(J.attachEvent){J.attachEvent("onload",cx)}}}}function aN(cA){var cx=false;if(x.attachEvent){cx=x.readyState==="complete"}else{cx=x.readyState!=="loading"}if(cx){cA();return}var cz;if(x.addEventListener){W(x,"DOMContentLoaded",function cy(){x.removeEventListener("DOMContentLoaded",cy,false);if(!cx){cx=true;cA()}})}else{if(x.attachEvent){x.attachEvent("onreadystatechange",function cy(){if(x.readyState==="complete"){x.detachEvent("onreadystatechange",cy);
if(!cx){cx=true;cA()}}});if(x.documentElement.doScroll&&J===J.top){(function cy(){if(!cx){try{x.documentElement.doScroll("left")}catch(cB){setTimeout(cy,0);return}cx=true;cA()}}())}}}W(J,"load",function(){if(!cx){cx=true;cA()}},false)}function b4(cx){var cy=cr(cx);if(cy&&cy.type){cy.href=k(cy.href);ck(cy.href,cy.type,undefined,null,cx)}}function bX(){return x.all&&!x.addEventListener}function cf(cx){var cz=cx.which;var cy=(typeof cx.button);if(!cz&&cy!=="undefined"){if(bX()){if(cx.button&1){cz=1}else{if(cx.button&2){cz=3}else{if(cx.button&4){cz=2}}}}else{if(cx.button===0||cx.button==="0"){cz=1}else{if(cx.button&1){cz=2}else{if(cx.button&2){cz=3}}}}}return cz}function bm(cx){switch(cf(cx)){case 1:return"left";case 2:return"middle";case 3:return"right"}}function aD(cx){return cx.target||cx.srcElement}function ag(cx){return function(cA){cA=cA||J.event;var cz=bm(cA);var cB=aD(cA);if(cA.type==="click"){var cy=false;if(cx&&cz==="middle"){cy=true}if(cB&&!cy){b4(cB)}}else{if(cA.type==="mousedown"){if(cz==="middle"&&cB){au=cz;
a6=cB}else{au=a6=null}}else{if(cA.type==="mouseup"){if(cz===au&&cB===a6){b4(cB)}au=a6=null}else{if(cA.type==="contextmenu"){b4(cB)}}}}}}function aa(cy,cx){W(cy,"click",ag(cx),false);if(cx){W(cy,"mouseup",ag(cx),false);W(cy,"mousedown",ag(cx),false);W(cy,"contextmenu",ag(cx),false)}}function a7(cy){if(!Z){Z=true;var cz,cx=aC(a5,"ignore"),cA=x.links;if(cA){for(cz=0;cz<cA.length;cz++){if(!cx.test(cA[cz].className)){aa(cA[cz],cy)}}}}}function av(cz,cB,cC){if(bH){return true}bH=true;var cD=false;var cA,cy;function cx(){cD=true}an(function(){function cE(cG){setTimeout(function(){if(!bH){return}cD=false;cC.trackVisibleContentImpressions();cE(cG)},cG)}function cF(cG){setTimeout(function(){if(!bH){return}if(cD){cD=false;cC.trackVisibleContentImpressions()}cF(cG)},cG)}if(cz){cA=["scroll","resize"];for(cy=0;cy<cA.length;cy++){if(x.addEventListener){x.addEventListener(cA[cy],cx)}else{J.attachEvent("on"+cA[cy],cx)}}cF(100)}if(cB&&cB>0){cB=parseInt(cB,10);cE(cB)}})}function b2(){var cz,cB,cC={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},cy=J.devicePixelRatio||1;
if(!((new RegExp("MSIE")).test(f.userAgent))){if(f.mimeTypes&&f.mimeTypes.length){for(cz in cC){if(Object.prototype.hasOwnProperty.call(cC,cz)){cB=f.mimeTypes[cC[cz]];co[cz]=(cB&&cB.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&z(f.javaEnabled)&&f.javaEnabled()){co.java="1"}if(s(J.GearsFactory)){co.gears="1"}co.cookie=bx()}var cA=parseInt(N.width,10)*cy;var cx=parseInt(N.height,10)*cy;co.res=parseInt(cA,10)+"x"+parseInt(cx,10)}b2();aQ();ao();return{getVisitorId:function(){return aA().uuid},getVisitorInfo:function(){return b8()},getAttributionInfo:function(){return bf()},getAttributionCampaignName:function(){return bf()[0]},getAttributionCampaignKeyword:function(){return bf()[1]},getAttributionReferrerTimestamp:function(){return bf()[2]},getAttributionReferrerUrl:function(){return bf()[3]},setTrackerUrl:function(cx){ai=cx},getTrackerUrl:function(){return ai},getSiteId:function(){return by},setSiteId:function(cx){bv(cx)},setUserId:function(cx){if(!z(cx)||!cx.length){return
}a4=cx;bh=bz(a4).substr(0,16)},getUserId:function(){return a4},setCustomData:function(cx,cy){if(M(cx)){Y=cx}else{if(!Y){Y={}}Y[cx]=cy}},getCustomData:function(){return Y},setCustomRequestProcessing:function(cx){bD=cx},appendToTrackingUrl:function(cx){ci=cx},getRequest:function(cx){return bT(cx)},addPlugin:function(cx,cy){a[cx]=cy},setCustomDimension:function(cx,cy){cx=parseInt(cx,10);if(cx>0){if(!z(cy)){cy=""}if(!q(cy)){cy=String(cy)}aU[cx]=cy}},getCustomDimension:function(cx){cx=parseInt(cx,10);if(cx>0&&Object.prototype.hasOwnProperty.call(aU,cx)){return aU[cx]}},deleteCustomDimension:function(cx){cx=parseInt(cx,10);if(cx>0){delete aU[cx]}},setCustomVariable:function(cy,cx,cB,cz){var cA;if(!z(cz)){cz="visit"}if(!z(cx)){return}if(!z(cB)){cB=""}if(cy>0){cx=!q(cx)?String(cx):cx;cB=!q(cB)?String(cB):cB;cA=[cx.slice(0,a0),cB.slice(0,a0)];if(cz==="visit"||cz===2){b1();at[cy]=cA}else{if(cz==="page"||cz===3){bo[cy]=cA}else{if(cz==="event"){bN[cy]=cA}}}}},getCustomVariable:function(cy,cz){var cx;
if(!z(cz)){cz="visit"}if(cz==="page"||cz===3){cx=bo[cy]}else{if(cz==="event"){cx=bN[cy]}else{if(cz==="visit"||cz===2){b1();cx=at[cy]}}}if(!z(cx)||(cx&&cx[0]==="")){return false}return cx},deleteCustomVariable:function(cx,cy){if(this.getCustomVariable(cx,cy)){this.setCustomVariable(cx,"","",cy)}},storeCustomVariablesInCookie:function(){bj=true},setLinkTrackingTimer:function(cx){bc=cx},setDownloadExtensions:function(cx){if(q(cx)){cx=cx.split("|")}cn=cx},addDownloadExtensions:function(cy){var cx;if(q(cy)){cy=cy.split("|")}for(cx=0;cx<cy.length;cx++){cn.push(cy[cx])}},removeDownloadExtensions:function(cz){var cy,cx=[];if(q(cz)){cz=cz.split("|")}for(cy=0;cy<cn.length;cy++){if(C(cz,cn[cy])===-1){cx.push(cn[cy])}}cn=cx},setDomains:function(cx){ae=q(cx)?[cx]:cx;var cz=false,cy;for(cy in ae){if(Object.prototype.hasOwnProperty.call(ae,cy)&&b3(ce,B(String(ae[cy])))){cz=true}}if(!cz){ae.push(ce)}},setIgnoreClasses:function(cx){a5=q(cx)?[cx]:cx},setRequestMethod:function(cx){cq=cx||bK},setRequestContentType:function(cx){bW=cx||am
},setReferrerUrl:function(cx){aV=cx},setCustomUrl:function(cx){aG=bn(bg,cx)},setDocumentTitle:function(cx){aR=cx},setAPIUrl:function(cx){bb=cx},setDownloadClasses:function(cx){be=q(cx)?[cx]:cx},setLinkClasses:function(cx){aJ=q(cx)?[cx]:cx},setCampaignNameKey:function(cx){bS=q(cx)?[cx]:cx},setCampaignKeywordKey:function(cx){ba=q(cx)?[cx]:cx},discardHashTag:function(cx){bi=cx},setCookieNamePrefix:function(cx){aS=cx;at=bp()},setCookieDomain:function(cx){var cy=B(cx);if(a2(cy)){cg=cy;aQ()}},setCookiePath:function(cx){aX=cx;aQ()},setVisitorCookieTimeout:function(cx){b6=cx*1000},setSessionCookieTimeout:function(cx){bQ=cx*1000},setReferralCookieTimeout:function(cx){cm=cx*1000},setConversionAttributionFirstReferrer:function(cx){a1=cx},disableCookies:function(){aT=true;co.cookie="0";if(by){aj()}},deleteCookies:function(){aj()},setDoNotTrack:function(cy){var cx=f.doNotTrack||f.msDoNotTrack;ca=cy&&(cx==="yes"||cx==="1");if(ca){this.disableCookies()}},addListener:function(cy,cx){aa(cy,cx)},enableLinkTracking:function(cx){cp=true;
bJ(function(){aN(function(){a7(cx)})})},enableJSErrorTracking:function(){if(cc){return}cc=true;var cx=J.onerror;J.onerror=function(cC,cA,cz,cB,cy){bJ(function(){var cD="JavaScript Errors";var cE=cA+":"+cz;if(cB){cE+=":"+cB}ad(cD,cE,cC)});if(cx){return cx(cC,cA,cz,cB,cy)}return false}},disablePerformanceTracking:function(){aE=false},setGenerationTimeMs:function(cx){bO=parseInt(cx,10)},enableHeartBeatTimer:function(cx){cx=Math.max(cx,1);aH=(cx||15)*1000;if(ch!==null){cv()}},killFrame:function(){if(J.location!==J.top.location){J.top.location=J.location}},redirectFile:function(cx){if(J.location.protocol==="file:"){J.location=cx}},setCountPreRendered:function(cx){aP=cx},trackGoal:function(cx,cz,cy){bJ(function(){cd(cx,cz,cy)})},trackLink:function(cy,cx,cA,cz){bJ(function(){ck(cy,cx,cA,cz)})},trackPageView:function(cx,cy){bC=[];if(D(by)){bJ(function(){P(ai,bb,by)})}else{bJ(function(){bs(cx,cy)})}},trackAllContentImpressions:function(){if(D(by)){return}bJ(function(){aN(function(){var cx=p.findContentNodes();
var cy=bY(cx);cu(cy,bc)})})},trackVisibleContentImpressions:function(cx,cy){if(D(by)){return}if(!z(cx)){cx=true}if(!z(cy)){cy=750}av(cx,cy,this);bJ(function(){an(function(){var cz=p.findContentNodes();var cA=aK(cz);cu(cA,bc)})})},trackContentImpression:function(cz,cx,cy){if(D(by)){return}if(!cz){return}cx=cx||"Unknown";bJ(function(){var cA=ak(cz,cx,cy);a9(cA,bc)})},trackContentImpressionsWithinNode:function(cx){if(D(by)||!cx){return}bJ(function(){if(bH){an(function(){var cy=p.findContentNodesWithinNode(cx);var cz=aK(cy);cu(cz,bc)})}else{aN(function(){var cy=p.findContentNodesWithinNode(cx);var cz=bY(cy);cu(cz,bc)})}})},trackContentInteraction:function(cz,cA,cx,cy){if(D(by)){return}if(!cz||!cA){return}cx=cx||"Unknown";bJ(function(){var cB=ar(cz,cA,cx,cy);a9(cB,bc)})},trackContentInteractionNode:function(cy,cx){if(D(by)||!cy){return}bJ(function(){var cz=cs(cy,cx);a9(cz,bc)})},logAllContentBlocksOnPage:function(){var cy=p.findContentNodes();var cx=p.collectContent(cy);if(console!==undefined&&console&&console.log){console.log(cx)
}},trackEvent:function(cy,cA,cx,cz,cB){bJ(function(){ad(cy,cA,cx,cz,cB)})},trackSiteSearch:function(cx,cz,cy,cA){bJ(function(){bB(cx,cz,cy,cA)})},setEcommerceView:function(cA,cx,cz,cy){if(!z(cz)||!cz.length){cz=""}else{if(cz instanceof Array){cz=JSON2.stringify(cz)}}bo[5]=["_pkc",cz];if(z(cy)&&String(cy).length){bo[2]=["_pkp",cy]}if((!z(cA)||!cA.length)&&(!z(cx)||!cx.length)){return}if(z(cA)&&cA.length){bo[3]=["_pks",cA]}if(!z(cx)||!cx.length){cx=""}bo[4]=["_pkn",cx]},addEcommerceItem:function(cB,cx,cz,cy,cA){if(cB.length){cj[cB]=[cB,cx,cz,cy,cA]}},trackEcommerceOrder:function(cx,cB,cA,cz,cy,cC){br(cx,cB,cA,cz,cy,cC)},trackEcommerceCartUpdate:function(cx){aZ(cx)}}}function y(){return{push:T}}function b(ad,ac){var ae={};var aa,ab;for(aa=0;aa<ac.length;aa++){var Y=ac[aa];ae[Y]=1;for(ab=0;ab<ad.length;ab++){if(ad[ab]&&ad[ab][0]){var Z=ad[ab][0];if(Y===Z){T(ad[ab]);delete ad[ab];if(ae[Z]>1){if(console!==undefined&&console&&console.error){console.error("The method "+Z+' is registered more than once in "paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
}}ae[Z]++}}}}return ad}W(J,"beforeunload",U,false);Date.prototype.getTimeAlias=Date.prototype.getTime;O=new G();var u=["disableCookies","setTrackerUrl","setAPIUrl","setCookiePath","setCookieDomain","setDomains","setUserId","setSiteId","enableLinkTracking"];_paq=b(_paq,u);for(w=0;w<_paq.length;w++){if(_paq[w]){T(_paq[w])}}_paq=new y();d={addPlugin:function(Y,Z){a[Y]=Z},getTracker:function(Y,Z){if(!z(Z)){Z=this.getAsyncTracker().getSiteId()}if(!z(Y)){Y=this.getAsyncTracker().getTrackerUrl()}return new G(Y,Z)},getAsyncTracker:function(){return O}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return d})}return d}())}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()}(function(){var a=(typeof AnalyticsTracker);if(a==="undefined"){AnalyticsTracker=window.Piwik}}());if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{if(window["piwik_"+h]){return window["piwik_"+h]}}catch(i){}return}var c,e=window.Piwik.getTracker(d,f);e.setDocumentTitle(b);
e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
/*!! @license-end */
};</strong><br><a href="https://my.weezevent.com/c-7?_gl=1*1tikm2b*_gcl_au*ODc5Mzg0OTQ0LjE3MDY3ODM1ODY.*_ga*MTgzNjQ1MDIyOC4xNjg2NTc5NzIw*_ga_39H9VBFX7G*MTcwNjc4MzU4Ni4xLjEuMTcwNjc4NDg4My4xMi4wLjA." target="_blank" rel="noopener" title="Ouverture dans un nouvel onglet">&gt; inscrivez-vous au meet-up !</a></div>
  </li>
  <li data-controller="list">
    <div data-target="list.liContainer">Date limite de candidature : <strong>12 mai 2024</strong></div>
  </li>
</ul>
      <h2 class="title in-toc is-level-2" id="comment-s-organise-la-selection-des-candidats" tabindex="-1">  
  Comment s’organise la sélection des candidats ?  
</h2>
      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      L’action présentée par le candidat
doit avoir été exécutée en 2023. Il peut s’agir d’une action ponctuelle ou
récurrente avec des répercussions sur le territoire parisien. <br>Sera éligible l’employeur ayant
présenté dans son dossier de candidature une action :
    </div>

</div>

      <ul class="list">
  <li data-controller="list">
    <div data-target="list.liContainer">inclusive ou innovante en matière d’emploi et
d’insertion professionnelle et sociale</div>
  </li>
  <li data-controller="list">
    <div data-target="list.liContainer">bienveillante en matière de politique de ressources
humaines</div>
  </li>
  <li data-controller="list">
    <div data-target="list.liContainer">en tant qu’acteur local.</div>
  </li>
</ul>
      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      Pour en savoir plus sur les types
d’actions éligibles, veuillez consulter <a href="https://cdn.paris.fr/paris/2024/02/05/reglement-prix-2024-des-employeurs-engages-urvH.pdf" target="_blank" rel="noopener" title="Ouverture dans un nouvel onglet">le règlement Prix des Employeurs Engagés
à Paris</a>.
    </div>

</div>

      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      Après instruction des
candidatures, un comité se réunira pour désigner les lauréats 2024. Une
cérémonie de remise des prix aura lieu <strong>le 11 octobre 2024 à l’Hôtel de Ville de
Paris</strong>, en présence du créateur et entrepreneur social Mossi Traoré, parrain de
cette édition.
    </div>

</div>

      <figure class="image">
  <div class="image-img">
      <img src="https://cdn.paris.fr/paris/2024/02/05/original-d98902c4438d6ce7acb025ebebf01e4c.jpg" alt="Portrait d&#39;un candiddat Mossi." loading="lazy">
  </div>

    <footer class="image-footer">        <div class="image-caption">Mossi Traoré, parrain du Prix 2024 des Employeurs Engagés</div>

        <div class="image-credit">
          <span class="image-credit-label">Crédit photo :</span>
          <span class="image-credit-text">DR</span>
        </div>
</footer></figure>

      <h2 class="title in-toc is-level-2" id="en-quoi-consiste-le-prix" tabindex="-1">  
  En quoi consiste le prix ?  
</h2>
      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      La vocation de ce Prix est la
mise en lumière, auprès de la communauté des employeurs et des Parisiennes et
des Parisiens, de(s) action(s) innovante(s) ou inclusive(s), bienveillante(s)
ou de développement local qui auront été sélectionnées par le comité de
sélection. En devenant lauréats du Prix 2024 des Employeurs Engagés à Paris,
ces derniers pourront bénéficier d’une visibilité renforcée de celle(s)-ci et
partager leur expérience.
    </div>

</div>

      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      Une communication selon
différents formats sera menée par la Ville de Paris pour valoriser l’engagement
en matière d’emploi des acteurs récompensés lors de la cérémonie.
    </div>

</div>

      <div class="text" data-controller="text">

    <div data-target="text.textContainer">
      Les lauréats du Prix ne percevront
aucune dotation ou valorisation financière.
    </div>

</div>

      <ul class="links">
  <li class="links-item" data-controller="links">
    <a class="links-item-link" data-target="links.url" href="https://www.paris.fr/appels-a-projets">
      <div class="links-item-link-content">
        <span class="links-item-link-text">Consultez les appels à projets</span>
      </div>



      <span class="links-item-link-icon">
        <svg class="paris-icon paris-icon-external" role="img"><use xlink:href="#paris-icon-external"></use></svg>
      </span>
</a>  </li>
</ul>

</div>

        <!-- comments -->
          <div class="feedback"
        data-controller="feedback"
        data-feedback-confirmation="Votre commentaire a bien été envoyé."
        data-feedback-comment-route="/comments/post"
        data-feedback-feedback-route="/feedbacks/post">
    <div class="feedback-icon" aria-hidden="true">?</div>
      <div class="feedback-title">Votre avis nous intéresse !</div> 
      <div class="feedback-subtitle">
        Ces informations vous ont-elles été utiles ?
      </div>
          <button type="button" class="paris-button is-outline has-red-text" data-action="feedback#submitFeedback" data-target="feedback.button feedback.yesBtn" data-value="yes" data-comment-title="Merci d'avoir donné votre avis, ravis qu'elles vous aient été utiles !">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Oui
      </span>
</button>
          <button type="button" class="paris-button is-outline has-red-text" data-action="feedback#submitFeedback" data-target="feedback.button feedback.noBtn" data-value="no" data-comment-title="Merci d’avoir donné votre avis. Que pourrions-nous améliorer ?">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Non
      </span>
</button>
          <button type="button" class="paris-button is-outline has-red-text" data-action="feedback#submitFeedback" data-target="feedback.button feedback.commentBtn" data-value="comment" data-comment-title="Afin d'améliorer l'information sur Paris.fr, nous vous invitons à nous faire part de vos remarques.">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Laisser un commentaire
      </span>
</button>
    <div class="feedback-comment">
      <div class="feedback-subtitle" data-target="feedback.commentTitle"></div>
      <div class="feedback-text">
        <strong>Attention</strong> : nous ne <strong>pouvons pas vous répondre</strong> par ce biais (n’incluez pas d’information personnelle).
          Si vous avez une question, souhaitez un suivi ou avez besoin d’assistance : <a target="_blank" rel="noopener" href="https://sollicitations.paris.fr/ticketing/jsp/site/Portal.jsp?page=mylutece&amp;action=login&amp;form=1">contactez la ville ici</a>.
      </div>

      <p class="feedback-comment-errors is-hidden" data-target="feedback.commentErrors"></p>

      <form class="feedback-comment-form" data-type="html" data-url="/comments/post" data-action="ajax:beforeSend-&gt;feedback#onPostSubmit" data-target="feedback.commentForm" action="/pages/appel-a-candidatures-du-prix-des-employeurs-engages-a-paris-26200" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="authenticity_token" value="F8eUI6tU3SBWjb+s7r6ILlqQsLS6+8dKTTzPbyxxl6sKH2FG+zgHvkqapSY8sDnnNx/2uK4zeZ4G9OURee0rTA==" autocomplete="off" />        <input value="https%3A%2F%2Fwww.paris.fr%2Fpages%2Fappel-a-candidatures-du-prix-des-employeurs-engages-a-paris-26200" autocomplete="off" type="hidden" name="current_url" id="current_url" />
        <textarea placeholder="Votre commentaire
Attention : pas d’information personnelle ici !" maxlength="5000" required="required" id="text_area" data-action="input-&gt;feedback#checkEmailOrPhonePresence" data-target="feedback.commentTextarea" name="content">
</textarea>
        <div class="feedback-comment-warning">
          Attention : vous semblez avoir indiqué une information personnelle dans votre commentaire, mais nous ne pouvons pas traiter les demandes individuelles par ce biais.
            Pour poser une question ou avoir un suivi, vous pouvez <a target="_blank" rel="noopener" href="https://sollicitations.paris.fr/ticketing/jsp/site/Portal.jsp?page=mylutece&amp;action=login&amp;form=1">faire une demande de contact ici</a>.
        </div>

            <button type="submit" class="paris-button is-red feedback-comment-submit-button" data-target="feedback.commentSubmit" data-disabled-with="&lt;span class=&quot;paris-button-text&quot;&gt;Envoi en cours...&lt;/span&gt;">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Envoyer
      </span>
</button>
            <button type="button" class="paris-button has-red-text is-transparent" data-action="feedback#cancelComment" data-target="feedback.commentCancel">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Ne pas ajouter de commentaire
      </span>
</button>
</form>    </div>
    <div class="feedback-ask">
  <div class="feedback-subtitle">Vous avez une question à nous poser ?</div>
      <a title="Ouverture dans un nouvel onglet" class="paris-button is-outline has-red-text" target="_blank" rel="noopener" href="https://sollicitations.paris.fr/ticketing/jsp/site/Portal.jsp?page=mylutece&amp;action=login&amp;form=1">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Contacter un service de la Ville
      </span>
</a>
</div>

  </div>


</div>
      </div>

  
</div>


</article>

    <aside data-controller="related" class="related">
      <div class="related-title">
        À lire aussi
      </div>

      <div class="related-cards" data-target="related.cards">

          
  <div>
    <a id="page_24205" class="paris-card " data-cs-override-id="page_24205" href="/pages/appel-a-projets-immobiliers-dans-le-19e-des-locaux-pour-des-activites-circulaires-de-l-economie-sociale-et-solidaire-24205">
        <div class="paris-card-content">
      <div class="paris-card-title">Appel à projets immobiliers pour des activités circulaires de l’économie sociale et solidaire</div>

      <div class="paris-card-formats">

            <div class="tag paris-card-format">
    Appel à projets
  </div>
      </div>

      <div class="paris-card-text">Du 01/02/2024 au 28/06/2024</div>
  </div>


    <div class="paris-card-image image-landscape ">
      <div class="paris-card-image-mask">
        <img src="https://cdn.paris.fr/paris/2023/04/21/medium-19687f05e23733e21be684f18222a1d6.jpg" alt="" loading="lazy">
      </div>
    </div>

</a>  </div>


          
  <div>
    <a id="page_18501" class="paris-card " data-cs-override-id="page_18501" href="/pages/appel-a-projets-relatif-a-l-occupation-du-domaine-public-de-l-orangerie-du-parc-de-bagatelle-paris-16e-pour-l-organisation-d-un-festival-de-musique-acoustique-18501">
        <div class="paris-card-content">
      <div class="paris-card-title">Appel à projets : organisation d’un festival de musique acoustique au Parc de Bagatelle (16e)</div>

      <div class="paris-card-formats">

            <div class="tag paris-card-format">
    Appel à projets
  </div>
      </div>

      <div class="paris-card-text">Du 05/02/2024 au 03/03/2024</div>
  </div>


    <div class="paris-card-image image-landscape ">
      <div class="paris-card-image-mask">
        <img src="https://cdn.paris.fr/paris/2021/09/08/medium-ecabb81542bafa9679ee99a36a0f7d83.jpg" alt="" loading="lazy">
      </div>
    </div>

</a>  </div>


          
  <div>
    <a id="page_5412" class="paris-card " data-cs-override-id="page_5412" href="/pages/repondre-a-un-appel-a-projets-5412">
        <div class="paris-card-content">
      <div class="paris-card-title">Les appels à projets de la Ville de Paris</div>

      <div class="paris-card-formats">

            <div class="tag paris-card-format">
    Service
  </div>
      </div>

  </div>


    <div class="paris-card-image image-landscape ">
      <div class="paris-card-image-mask">
        <img src="https://cdn.paris.fr/paris/2022/05/16/medium-4e9d2b137b8302a9b57011083cb7fada.jpg" alt="" loading="lazy">
      </div>
    </div>

</a>  </div>

      </div>
  </aside>


      </main>
      <footer class="paris-footer" data-controller="footer">

  <div class="paris-footer-extra">
    <div class="paris-footer-extra-list">

        <div class="paris-footer-extra-list-container">
          <div class="profile">
  <div class="title is-level-4">  
  Vous êtes...  
</div>

  <div class="profile-text">Accédez à des actualités et informations pratiques par profil</div>

  <div class="profile-items">
      <a class="profile-item" id="profile_pro" href="/professionnels">
            <span class="paris-button is-small is-transparent has-blue-text has-uppercase-text has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Professionnel
      </span>
</span>
</a>      <a class="profile-item" id="profile_associations" href="/associations">
            <span class="paris-button is-small is-transparent has-blue-text has-uppercase-text has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Association
      </span>
</span>
</a>      <a class="profile-item" id="profile_jeunes" href="/jeunes">
            <span class="paris-button is-small is-transparent has-blue-text has-uppercase-text has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Jeune
      </span>
</span>
</a>  </div>
</div>

        </div>

      <div class="paris-footer-extra-list-container">
        <div class="paris-footer-newsletter">
          <div class="title is-level-4">  
  Les newsletters de Paris  
</div>

          <div class="paris-footer-newsletter-text">
            Recevez directement par email l’actualité de vos centres d’intérêts
          </div>

          <a class="paris-footer-newsletter-link" href="https://f.infos.paris.fr/f/lp/new-inscription-paris-fr-footer-paris/959x5ekk">                <span class="paris-button is-small is-transparent has-uppercase-text has-blue-text is-on-dark has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        S&#39;inscrire
      </span>
</span>
</a>        </div>
      </div>

      <div class="paris-footer-extra-list-container">
          <div class="social is-white is-in-footer">
      <div class="social-title paris-footer-social-title title is-level-4">
        Sur les réseaux
      </div>

    <ul class="social-links">
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://www.instagram.com/paris_maville/">          <svg class="paris-icon paris-icon-instagram" role="img" aria-labelledby="paris-icon-title-4ook57howj" focusable="false"><title id="paris-icon-title-4ook57howj">Instagram</title><use xlink:href="#paris-icon-instagram"></use></svg>
</a>      </li>
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://www.linkedin.com/company/villedeparis/">          <svg class="paris-icon paris-icon-linkedin" role="img" aria-labelledby="paris-icon-title-gs6gd1shju" focusable="false"><title id="paris-icon-title-gs6gd1shju">Linkedin</title><use xlink:href="#paris-icon-linkedin"></use></svg>
</a>      </li>
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://twitter.com/paris">          <svg class="paris-icon paris-icon-twitter" role="img" aria-labelledby="paris-icon-title-3oj2ojslk3" focusable="false"><title id="paris-icon-title-3oj2ojslk3">Twitter</title><use xlink:href="#paris-icon-twitter"></use></svg>
</a>      </li>
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://www.youtube.com/channel/UC4e6cfcOXGycjRLZbbSwwoA">          <svg class="paris-icon paris-icon-youtube" role="img" aria-labelledby="paris-icon-title-4vc89uj6j" focusable="false"><title id="paris-icon-title-4vc89uj6j">Youtube</title><use xlink:href="#paris-icon-youtube"></use></svg>
</a>      </li>
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://www.tiktok.com/@villedeparis">          <svg class="paris-icon paris-icon-tiktok" role="img" aria-labelledby="paris-icon-title-ztuz8j1r8q" focusable="false"><title id="paris-icon-title-ztuz8j1r8q">Tiktok</title><use xlink:href="#paris-icon-tiktok"></use></svg>
</a>      </li>
      <li class="social-item">
        <a class="social-link has-icon" target="_blank" href="https://www.facebook.com/paris">          <svg class="paris-icon paris-icon-facebook" role="img" aria-labelledby="paris-icon-title-hsi7s3b7fu" focusable="false"><title id="paris-icon-title-hsi7s3b7fu">Facebook</title><use xlink:href="#paris-icon-facebook"></use></svg>
</a>      </li>
    </ul>
  </div>

      </div>

      <div class="paris-footer-extra-list-container">
        <div class="title is-level-4">  
  Une question ?  
</div>

        <div class="paris-footer-contact-links">

          <a class="paris-footer-social-mail-link" href="/pages/contact-232">                <span class="paris-button is-small is-transparent has-uppercase-text has-blue-text is-on-dark has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Contactez-nous
      </span>
</span>
</a>
          <a class="paris-footer-social-twitter-link" href="https://twitter.com/Parisjecoute">                <span class="paris-button is-small is-transparent has-uppercase-text has-blue-text is-on-dark has-spaced-text">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        @parisjecoute sur Twitter
      </span>
</span>
</a>        </div>
      </div>

    </div>
  </div>


    <div class="paris-footer-mairie-selector">
      <div class="paris-footer-select">

        <div class="paris-footer-select-title">
          Retrouvez les actualités de votre arrondissement
        </div>

        <div class="paris-footer-select-form">
          <select class="paris-footer-select-object"
                  data-action="footer#onChange"
                  data-target="footer.mairies">
            <option value="">Sélectionnez votre mairie</option>
              <option value="https://mairiepariscentre.paris.fr/">
                Mairie de Paris Centre
              </option>
              <option value="https://mairie05.paris.fr/">
                Mairie du 5ᵉ arrondissement
              </option>
              <option value="https://mairie06.paris.fr/">
                Mairie du 6ᵉ arrondissement
              </option>
              <option value="https://mairie07.paris.fr/">
                Mairie du 7ᵉ arrondissement
              </option>
              <option value="https://mairie08.paris.fr/">
                Mairie du 8ᵉ arrondissement
              </option>
              <option value="https://mairie09.paris.fr/">
                Mairie du 9ᵉ arrondissement
              </option>
              <option value="https://mairie10.paris.fr/">
                Mairie du 10ᵉ arrondissement
              </option>
              <option value="https://mairie11.paris.fr/">
                Mairie du 11ᵉ arrondissement
              </option>
              <option value="https://mairie12.paris.fr/">
                Mairie du 12ᵉ arrondissement
              </option>
              <option value="https://mairie13.paris.fr/">
                Mairie du 13ᵉ arrondissement
              </option>
              <option value="https://mairie14.paris.fr/">
                Mairie du 14ᵉ arrondissement
              </option>
              <option value="https://mairie15.paris.fr/">
                Mairie du 15ᵉ arrondissement
              </option>
              <option value="https://mairie16.paris.fr/">
                Mairie du 16ᵉ arrondissement
              </option>
              <option value="https://mairie17.paris.fr/">
                Mairie du 17ᵉ arrondissement
              </option>
              <option value="https://mairie18.paris.fr/">
                Mairie du 18ᵉ arrondissement
              </option>
              <option value="https://mairie19.paris.fr/">
                Mairie du 19ᵉ arrondissement
              </option>
              <option value="https://mairie20.paris.fr/">
                Mairie du 20ᵉ arrondissement
              </option>
          </select>
          <svg class="paris-icon paris-icon-arrow-bottom" role="img"><use xlink:href="#paris-icon-arrow-bottom"></use></svg>
        </div>
      </div>
    </div>

  <nav class="paris-footer-nav">
    <ul class="paris-footer-nav-list">
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="/pages/mentions-legales-235">Mentions légales</a>
        </li>
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="/pages/accessibilite-233">Accessibilité</a>
        </li>
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="https://presse.paris.fr/">Presse</a>
        </li>
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="https://opendata.paris.fr/">Open Data</a>
        </li>
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="/pages/cookies-234">Politique de cookies</a>
        </li>
        <li class="paris-footer-nav-item">
          <a class="paris-footer-nav-link" href="/pages/plan-du-site-7215">Plan du site</a>
        </li>
    </ul>
  </nav>
</footer>

      <div class="paris-cookies-banner" data-target="cookies.banner">
  <p class="paris-cookies-banner-text">
    Paris.fr ne fait <strong>aucun suivi publicitaire</strong> et ne collecte <strong>aucune donnée personnelle</strong>. Des cookies sont utilisés à des fins statistiques ou de fonctionnement, ainsi que d'analyse (que vous pouvez refuser ici), nous permettant d'améliorer le site en continu.
  </p>

  <div class="paris-cookies-banner-buttons">
        <button type="button" class="paris-button is-blue" data-action="cookies#accept">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Autoriser et fermer
      </span>
</button>
        <button type="button" class="paris-button is-outline has-blue-text" data-action="cookies#reject">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Refuser
      </span>
</button>

          <a class="paris-button is-transparent has-blue-text" href="/pages/cookies-234">            <span data-controller="button" data-target="button.textContainer" class="paris-button-text">
        Plus d&#39;informations
      </span>
</a>
  </div>
</div>

    </div>
    <svg class="paris-icon-sprite" style="display: none"><defs><symbol id="paris-icon-clock" viewBox="0 0 32 32"><path d="M16 9c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 12.444A5.45 5.45 0 0 0 21.444 16 5.45 5.45 0 0 0 16 10.556 5.45 5.45 0 0 0 10.556 16 5.45 5.45 0 0 0 16 21.444zm.778-9.333v3.473l1.987 1.324-.863 1.295-2.68-1.787v-4.305h1.556z" /></symbol><symbol id="paris-icon-share" viewBox="0 0 32 32"><path d="M22,18 C20.8,18 19.734,18.541 19,19.381 L13.908,16.836 C13.967,16.567 14,16.288 14,16 C14,15.712 13.967,15.434 13.908,15.163 L19,12.618 C19.734,13.458 20.8,14 22,14 C24.205,14 26,12.205 26,10 C26,7.794 24.205,6 22,6 C19.795,6 18,7.794 18,10 C18,10.287 18.033,10.566 18.092,10.836 L13,13.381 C12.266,12.542 11.2,12 10,12 C7.795,12 6,13.794 6,16 C6,18.205 7.795,20 10,20 C11.2,20 12.266,19.457 13,18.617 L18.092,21.163 C18.033,21.434 18,21.713 18,22 C18,24.205 19.795,26 22,26 C24.205,26 26,24.205 26,22 C26,19.794 24.205,18 22,18 Z M22,8 C23.104,8 24,8.895 24,10 C24,11.104 23.104,12 22,12 C20.896,12 20,11.104 20,10 C20,8.895 20.896,8 22,8 Z M10,18 C8.896,18 8,17.104 8,16 C8,14.895 8.896,14 10,14 C11.104,14 12,14.895 12,16 C12,17.104 11.104,18 10,18 Z M22,24 C20.896,24 20,23.104 20,22 C20,20.895 20.896,20 22,20 C23.104,20 24,20.895 24,22 C24,23.104 23.104,24 22,24 Z"></path></symbol><symbol id="paris-icon-facebook" viewBox="0 0 32 32"><path d="M16.546 24H8.883A.883.883 0 0 1 8 23.117V8.883C8 8.395 8.395 8 8.883 8h14.234c.488 0 .883.395.883.883v14.234a.883.883 0 0 1-.883.883H19.04v-6.196h2.08l.31-2.415h-2.39v-1.541c0-.7.194-1.176 1.196-1.176h1.28v-2.16c-.222-.03-.981-.095-1.864-.095-1.844 0-3.106 1.125-3.106 3.191v1.781h-2.085v2.415h2.085V24z"/></symbol><symbol id="paris-icon-twitter" viewBox="0 0 32 32"><path d="M25 10.776a7.213 7.213 0 0 1-2.12.596 3.778 3.778 0 0 0 1.623-2.095 7.273 7.273 0 0 1-2.346.918A3.642 3.642 0 0 0 19.462 9c-2.038 0-3.692 1.696-3.692 3.787 0 .296.032.585.095.862-3.069-.158-5.79-1.664-7.612-3.958a3.856 3.856 0 0 0-.5 1.906c0 1.313.652 2.472 1.643 3.152a3.626 3.626 0 0 1-1.673-.473v.047c0 1.835 1.273 3.366 2.963 3.713-.31.089-.636.133-.973.133-.238 0-.47-.023-.695-.067.47 1.504 1.833 2.599 3.45 2.628A7.292 7.292 0 0 1 7 22.3a10.282 10.282 0 0 0 5.66 1.7c6.794 0 10.508-5.77 10.508-10.774 0-.164-.003-.329-.01-.49A7.58 7.58 0 0 0 25 10.776"/></symbol><symbol id="paris-icon-mail" viewBox="0 0 32 32"><path d="M8,12.0175112 L8,21 L24,21 L24,12.079919 L15.9965153,17.3969692 L8,12.0175112 Z M22.0112562,11 L10.0705809,11 L16.0034847,14.9912143 L22.0112562,11 L22.0112562,11 Z M6,9 L26,9 L26,23 L6,23 L6,9 Z"></path></symbol><symbol id="paris-icon-arrow-bottom" viewBox="0 0 32 32"><path d="M16 16.172l4.586-4.586 2.828 2.828L16 21.828l-7.414-7.414 2.828-2.828z"/></symbol><symbol id="paris-icon-file-pdf" viewBox="0 0 32 32"><path d="M9 7v5H7V7c0-1.102.897-2 2-2h11.414L25 9.586V12h-2v-1h-4V7H9zm14 18v-1h2v1c0 1.103-.897 2-2 2H9c-1.103 0-2-.897-2-2v-1h2v1h14zM13 14h2c2.206 0 4 1.794 4 4s-1.794 4-4 4h-2v-8zm4 4c0-1.102-.897-2-2-2v4c1.103 0 2-.897 2-2zm9-2h-4v1h3v2h-3v3h-2v-6c0-1.102.897-2 2-2h4v2zM8 20v2H6v-8h3c1.654 0 3 1.346 3 3s-1.346 3-3 3H8zm0-4v2h1a1.001 1.001 0 0 0 0-2H8z" /></symbol><symbol id="paris-icon-download" viewBox="0 0 32 32"><path d="M17.004 17.662l3.067-3.067 1.414 1.415-5.475 5.475-5.476-5.475 1.414-1.415 3.056 3.057V8.027h2v9.635zM11 23h10v2H11v-2z" /></symbol><symbol id="paris-icon-external" viewBox="0 0 32 32"><path d="M22.224 22.224H9.776V9.776h4.376V8H9.776A1.768 1.768 0 008 9.776v12.448A1.768 1.768 0 009.776 24h12.448A1.784 1.784 0 0024 22.224v-4.376h-1.776zM17.776 8v1.776h3.2l-5.04 5.04 1.256 1.256 5.04-5.04v3.2H24V8z"/></symbol><symbol id="paris-icon-arrow-right-3" viewBox="0 0 14 11"><path d="M7.82336 0.897181L12.8774 5.04151C13.1807 5.24368 13.2312 5.69854 12.9785 5.95125L12.8774 6.05233L7.82336 10.1967C7.57066 10.4494 7.11579 10.3988 6.81255 10.0956C6.55984 9.84287 6.61038 9.38801 6.91363 9.08476L10.4515 6.15341L0.949832 6.15341C0.545507 6.15341 0.292804 5.79962 0.292804 5.3953C0.343345 5.04151 0.646589 4.73827 0.949832 4.73827L10.4515 4.73827L6.91363 1.80691C6.66092 1.55421 6.55984 1.14988 6.86309 0.846641L6.91363 0.7961C7.11579 0.695019 7.52011 0.695018 7.82336 0.897181Z" /></symbol><symbol id="paris-icon-close" viewBox="0 0 32 32"><path d="M16 13.379l6.718-6.718 2.12 2.121-6.717 6.718 6.718 6.718-2.121 2.12L16 17.622 9.282 24.34l-2.12-2.121 6.717-6.718L7.16 8.782l2.121-2.12z"/></symbol><symbol id="paris-icon-chevron-right" viewBox="0 0 320 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></symbol><symbol id="paris-icon-arrow-left" viewBox="0 0 32 32"><path d="M16.536 15.707l4.585 4.586-2.828 2.828-7.414-7.414 7.414-7.414 2.828 2.828z"/></symbol><symbol id="paris-icon-search" viewBox="0 0 32 32"><path d="M20.2517783,18.9919966 L25.0362131,24.0664448 L22.8534353,26.1244732 L17.9712161,20.9463133 C16.8010506,21.6167419 15.4452827,22 14,22 C9.581722,22 6,18.418278 6,14 C6,9.581722 9.581722,6 14,6 C18.418278,6 22,9.581722 22,14 C22,15.8882102 21.3458363,17.6236322 20.2517783,18.9919966 L20.2517783,18.9919966 Z M14,19 C16.7614237,19 19,16.7614237 19,14 C19,11.2385763 16.7614237,9 14,9 C11.2385763,9 9,11.2385763 9,14 C9,16.7614237 11.2385763,19 14,19 Z"></path></symbol><symbol id="paris-icon-arrow-up" viewBox="0 0 15 19"><path d="M1.16371 8.56043L6.80865 1.36636C7.08231 0.936113 7.71704 0.851739 8.07811 1.19761L8.22254 1.33596L14.1715 8.28076C14.5325 8.62663 14.4755 9.2644 14.0605 9.69769C13.7146 10.0588 13.0768 10.0017 12.6436 9.5867L8.43689 4.72625L8.72263 18.0168C8.73479 18.5823 8.24753 18.9465 7.68198 18.9586C7.1856 18.8986 6.75231 18.4835 6.74319 18.0593L6.45744 4.76881L2.46357 9.80557C2.1177 10.1666 1.55518 10.3202 1.12189 9.90514L1.04968 9.83597C0.902213 9.55623 0.890053 8.99067 1.16371 8.56043Z"/></symbol><symbol id="paris-icon-place" viewBox="0 0 40 35"><path d="m20 34a1.1 1.1 0 0 0 .9-.5c1.1-1.6 10.1-15.9 10.1-21.5a11 11 0 0 0 -22 0c0 5.6 9 19.9 10.1 21.5a1.1 1.1 0 0 0 .9.5zm0-30.8a8.7 8.7 0 0 1 8.8 8.8c0 3.8-5.7 13.8-8.8 18.8-3.1-5-8.8-15-8.8-18.8a8.7 8.7 0 0 1 8.8-8.8z"/><path d="m24.4 10.9a4.4 4.4 0 1 0 -4.4 4.4 4.4 4.4 0 0 0 4.4-4.4zm-6.6 0a2.2 2.2 0 1 1 2.2 2.2 2.2 2.2 0 0 1 -2.2-2.2z"/></symbol><symbol id="paris-icon-clock2" viewBox="0 0 16 16"><path d="M8.8,7.6l2,1.3-.9,1.3L7.2,8.4V4.1H8.8ZM15,8a7,7,0,0,1-7,7A7,7,0,0,1,1,8,7,7,0,0,1,8,1,7,7,0,0,1,15,8ZM13.4,8A5.4,5.4,0,1,0,8,13.4,5.4,5.4,0,0,0,13.4,8Z"/></symbol><symbol id="paris-icon-arrow-left-up" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16" xml:space="preserve"><path d="m2.215 11.619-.9-9.1c-.1-.5.3-1 .8-1h.2l9.1.9c.5 0 .9.5.9 1.1 0 .5-.5.9-1.1.9l-6.4-.6 9.4 9.4c.4.4.3 1-.1 1.4-.4.3-1 .3-1.3 0l-9.4-9.4.6 6.4c0 .5-.3 1-.9 1h-.1c-.3-.1-.7-.5-.8-1z"/></symbol><symbol id="paris-icon-search--calendar" viewBox="0 0 13.761 13.878"><path d="M11.175 1.11H10.3V.57A.57.57 0 0 0 9.73 0a.561.561 0 0 0-.57.57v.54H4.6V.57A.57.57 0 0 0 4.03 0a.561.561 0 0 0-.57.57v.54h-.874A2.581 2.581 0 0 0 0 3.7v7.6a2.59 2.59 0 0 0 2.586 2.586h8.59a2.581 2.581 0 0 0 2.586-2.586V3.7a2.59 2.59 0 0 0-2.587-2.59zM2.586 2.235h.876v.541a.57.57 0 0 0 .57.57.561.561 0 0 0 .57-.57v-.541H9.16v.541a.57.57 0 0 0 .57.57.561.561 0 0 0 .57-.57v-.541h.876A1.453 1.453 0 0 1 12.622 3.7v.745H1.139V3.7a1.453 1.453 0 0 1 1.447-1.465zm8.59 10.5h-8.59a1.465 1.465 0 0 1-1.461-1.461V5.566h11.5v5.712a1.443 1.443 0 0 1-1.45 1.46z"/></symbol><symbol id="paris-icon-search--minimarker" viewBox="0 0 12.237 14.608"><path d="M6.12 0A5.914 5.914 0 0 0 0 5.682c0 4.419 6.12 8.925 6.12 8.925s6.118-4.506 6.118-8.925A5.914 5.914 0 0 0 6.12 0zm.042 3.621a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5z"/></symbol><symbol id="paris-icon-search--audience" viewBox="0 0 13.273 14.634"><path d="M6.637 0a4.576 4.576 0 1 0 4.576 4.576A4.565 4.565 0 0 0 6.637 0zm0 7.77a3.195 3.195 0 1 1 3.195-3.195A3.184 3.184 0 0 1 6.637 7.77z"/><path d="M6.637 7.997A6.632 6.632 0 0 0 0 14.634h1.175a5.462 5.462 0 1 1 10.924 0h1.175a6.632 6.632 0 0 0-6.637-6.637z"/></symbol><symbol id="paris-icon-times" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></symbol><symbol id="paris-icon-instagram" viewBox="0 0 32 32"><path d="M16 7c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.411 4.411 0 0 0 8.51 8.51c-.5.5-.809 1.002-1.038 1.594-.223.572-.375 1.226-.419 2.184C7.01 13.25 7 13.556 7 16s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.23.592.537 1.094 1.038 1.594.5.5 1.002.809 1.594 1.039.572.222 1.226.374 2.184.418.96.044 1.267.054 3.711.054s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 0 0 1.594-1.039c.5-.5.809-1.002 1.039-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185a4.412 4.412 0 0 0-1.039-1.594c-.5-.5-1.002-.809-1.594-1.038-.572-.223-1.226-.375-2.184-.419C18.75 7.01 18.444 7 16 7zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 0 1-1.036-.673 2.789 2.789 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zm0 2.756a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244zM16 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.884-7.804a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z"/></symbol><symbol id="paris-icon-linkedin" viewBox="0 0 32 32"><path d="M26 23h-3.757v-5.273c0-1.38-.588-2.323-1.88-2.323-.989 0-1.539.636-1.795 1.25-.095.219-.08.525-.08.832V23h-3.723s.048-9.34 0-10.19h3.723v1.6c.22-.7 1.409-1.698 3.307-1.698 2.355 0 4.205 1.466 4.205 4.622V23zM11.001 11.536h-.024c-1.2 0-1.977-.78-1.977-1.767C9 8.763 9.8 8 11.024 8c1.222 0 1.974.76 1.998 1.766 0 .988-.776 1.77-2.02 1.77zM9.43 12.81h3.313V23H9.43V12.81z"/></symbol><symbol id="paris-icon-youtube" viewBox="-21 -117 682.67 682"><path d="M626.81 64.04a80.18 80.18 0 00-56.4-56.42c-50.09-13.7-250.42-13.7-250.42-13.7S119.67-6.08 69.6 7.1c-26.9 7.38-49.04 29.52-56.41 56.94C0 114.1 0 217.97 0 217.97S0 322.35 13.18 371.9a80.2 80.2 0 0056.41 56.41C120.19 442.02 320 442.02 320 442.02s200.32 0 250.4-13.18a80.18 80.18 0 0056.42-56.41C640 322.35 640 218.5 640 218.5s.52-104.39-13.19-154.46zM256.21 313.9V122.02l166.59 95.95zm0 0"/></symbol><symbol id="paris-icon-tiktok" viewBox="0 0 40 40"><path d="M30 17.1088C29.8109 17.1266 29.6194 17.1384 29.4253 17.1384C27.2407 17.1384 25.3209 15.9969 24.204 14.2714C24.204 18.7979 24.204 23.948 24.204 24.0343C24.204 28.0191 21.024 31.25 17.102 31.25C13.1799 31.25 10 28.0191 10 24.0343C10 20.0494 13.1799 16.8186 17.102 16.8186C17.2502 16.8186 17.3952 16.8321 17.5409 16.8414V20.3972C17.3952 20.3795 17.2519 20.3524 17.102 20.3524C15.0997 20.3524 13.4773 22.0008 13.4773 24.0351C13.4773 26.0694 15.0997 27.7179 17.102 27.7179C19.1042 27.7179 20.8724 26.1151 20.8724 24.0808C20.8724 24.0004 20.9074 7.5 20.9074 7.5H24.2523C24.5671 10.5388 26.9816 12.937 30 13.157V17.1088Z"/></symbol></defs></svg>
    <div class="nef"></div>

      <!-- Matomo -->
  <script type="text/javascript">
    var _paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//matomo.apps.paris.fr/matomo/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '10']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  </script>

    <script type="text/javascript">
      var _mtm = _mtm || [];
      _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript';
      g.async=true;
      g.defer=true;
      g.src='https://matomo.apps.paris.fr/matomo/js/container_wFBJcohT.js';
      s.parentNode.insertBefore(g,s);
    </script>
  <!-- End Matomo Code -->


    <script src="/packs/js/application-398496c53253dbecee0c.js" data-turbolinks-track="reload"></script>
  </body>
</html>
