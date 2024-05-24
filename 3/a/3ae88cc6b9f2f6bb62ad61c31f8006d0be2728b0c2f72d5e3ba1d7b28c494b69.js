var afblpcv=function(t){'use strict';function e(t){if(!t||t.length<1)throw new Error('storage array is required');var e=t;return this.getItem=function(t){return n(e,t)},this.getItemsAndTypes=this.setItem=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i(e,t,r,n)},this.info=function(){return"multi"},this.infos=function(){return a(e)},this.length=e.length,this.getDefaultStorage=this.getAllStorages=this}function r(t){var e=t.multiStorage,r=t.P,n=t.T,o=r.siteId,i=r.promoObjKey,a=I({functions:n,defaults:E});this.getItemsAndTypes=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return C({multiStorage:e,key:t,T:a})},this.getDefaultStorage=this.setItem=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return K({multiStorage:e,key:t,value:r,optsObj:n,T:a})},a.tlog('💡 item in MRM',A({multiStorage:e,key:o,T:a}));var c=C({multiStorage:e,key:o,T:a});this.makePromotionParamJson=function(t){return L({fullDataMulti:c,pids:t,promoObjKey:i,T:a})},this.updatePromoReco)}}var)},o=function(t,e){return t.m}})},i=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.forEa)})})},c={setIt)},getItem:function(t){var e=window.localStorage.getItem(t);return e||"{}"},info:function(){return'localStorage'}},u={setItem:function(t,e,r){var n=r.domain,o=r.path,i=void 0===o?"/":o,a=r.secure,c="; expires=Tue, 19 Jan 2038 03:14:07 GMT";c+=n?'; domain='+n:"",c+='; path='+i,c+=a?'; secure':"",document.cookie=t+'='+e+c},getItem:function(t){var e=document.cookie.indexOf(t+'=');if(void 0===e||-1===e)return"{}";for(var r=document.cookie.replace(/\s+/g,"").split(";"),n=r.length,o=0;o<n;o+=1){var i=r[o];-1===i.indexOf("=")&&console.info("Perhaps someone set invalid cookie in the past");var a=i.split("=");if(a&&a[0]===t)return a[1]}return"{}"},in'}},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"head",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=document.querySelector(e),o=document.createElement("script");o.setAttribute("src",t),r&&o.setAttribute("async","async"),n.appendChild(o)},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iteratt},}}t}))},d=function(t){return t?function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=[].concat(e).map(function(t){return"object"===(void 0===t?"undefined":m(t))?""+JSON.stringify(t):""+t});console.info(n.join(" "){}},p=["ac.jp","ad.jp","co.jp","ne.jp","or.jp","jp.com","jp.net","jp.org","jpn.com","jpn.org","com.cn","com.hn","net.hn","org.hn","com.sg","net.sg","org.sg","com.tw","net.tw","org.tw"],v=["localhost","localhost.localdomain"],g=function(){var t=(""+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.hostname)).replace(/:[0-9]+/,'');if(v.some(function(e){return e===t}))return t;var e=-1===t.indexOf("//")?t.split("."):t.split("/")[2].split(".");if(e.every(function(t){return/^[0-9]+$/.test(t)}))return e.join(".");var r=e.slice(-2).join(".");return p.sor})?e.slice(-3).join("."):e.slice(-2).join(".")},y=function(t){if(!t)return"";return"?"+Object.keys(t).map(function(e){var r={};return r[e]=t[e],function(t){var e=Object.keys(t)[0],r=t[e]?t[e]:"";return encodeURIComponent(e)+"="+encodeURIComponent(r)}(r)}).join("&")},h=function(t){var e=t;return[{'%5C':''},{'¥':''},{'\\\\':''},{'%22%5B':'%5B'},{'%5D%22':'%5D'}].forEach(function(t){var r=Object.keys(t)[0],n=t[r],o=new RegExp(r,'g');e=e.replace(o,n)}),e},k=function(t){switch(t){case!0:return'true';case!1:return'false';case null:return'null';case void 0:return'undefined';default:return t.toString()}},w=function(t,e){var r=e.fuzzy;return void 0!==r&&r?function(e){return t.()}).indexOf(k(e).toLowerCase())>=0}},b=function(t){return h(t)},T=w(['hex','16'],{fuzzy:!0}),S=w(['dec','10'],{fuzzy:!0}),O=function t(e){var r=e.encodedJson,n=e.numRef,o=void 0===n?'none':n,i=e.retry,a=void 0===i?0:i,c=e.shouldReplace,u=void 0!==c&&c,l=u?b(r):r,m=function(t){return T(t)?function(t){return JSON.parse(t.replace(/&#x([0-9a-f]+);e)}))}:S(t)?function(t){return JSON.parse(t.replace(/&#(\d+);e)}))}:function(t){return JSON.parse(t)}}(o);try{return m(decodeURIComponent(l))}catch(e){try{if(a!==Number(a)||a<=0)throw console.error('serializer - decode Error',a,l),new Error;return t({encodedJson:decodeURIComponent(l).split('&')[0],retry:a-1,shouldReplace:u,numRef:o})}catch(t){throw t}}},j={enc))},decode:O,decodeNumRefText:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;O({encodedJson:t,numRef:e,retry:r,shouldReplace:!0})},decodeEscapedText:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return O({encodedJson:t,retry:e,shouldReplace:!0})},replaceInvalidEscape:b},I=function(t,e){var r=t.functions,n=void 0===r?{}:r,o=t.defaults,i=void 0===o?{}:o,a=e&&e.tlog||d(!1),c=n;return Object.keys(i).forEach(function(t){-1===Object.keys(n).indexOf(t)&&(a("Auto Import: "+t),c[t]=i[t])}),c},P=function(t){var e=function t(e){var r=e.uri,n=e.paramKey,o=e.limit,i=void 0===o?1:o;if(!n)return console.error('️️❗ no paramKey. return raw uri'),r;return new RegExp('(\\?|\\&)'+n+'=').test(r)||-1===r.indexOf(n)||-1===r.indexOf('%')?r:i<=0?(console.info('💡 lpcv-main:: give up "decodeExcessEncodeUri()"'),r):t({paramKey:n,uri:decodeURIComponent(r),limit:i-1})}({paramKey:t,uri:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location).toString().replace(/&amp;/g,'&'),limit:10}).replace(/%26/g,'&'),r=new RegExp('[&\\?]?'+t+'=([\\w-%{}:,."\\[\\]]+)').exec(e);if(r&&r.length>0){return r[0].split("=")[1].replace(/[()]|%28|%29/g,"")}return""},D={tlog:d(!1)},x=function(t){var e=t.fullData,r=t.pids,n=t.key,o=t.T,i=I({functions:o,defaults:D},o).tlog,a={};return r.forEach(function(t){if(t in e[n]){i("ℹ️ lpcv-cv-func:: found data '"+t+"' in storage\n "+JSON.stringify(e[n][t]));var r=e[n][t];a[t]=Array.isArray(r)?r:[r]}}),a},R={getPromotionData:x,makePromotionParamJson:function(t){var e=t.fullData,r=t.pids,n=t.promoObjKey,o=t.T;if(!e||0===Object.keys(e).length)return{};var i={};return n.forEach(function(t){t in e&&(i[t]=x({fullData:e,pids:r,key:t,T:o}))}),i},updatePromoRecord:function(t){var e=t.P,r=t.currentTrackingData,n=t.receivedTrackingData,o={tlog:(e.tool||{}).tlog||d(!1)},i=e.promoRecordConf||e.promoObjKey,a={AllPromoRecordConf:i,prHistoryLimit:e.promoHistoryLimit||10,promoObjKey:i.map(function(t){return t.name})},c=r||{},u=n||{};if(0===Object.keys(u).length)return o.tlog("lpcv-writer: no data received"),c;0===Object.keys(c).length&&(a.protion(t){c[t]={}}),c.history={});var l=Object.keys(u)[0],m=Object.keys(u[l])[0],f=u[l][m];if(-1===a.promoObjKey.indexOf(l))return o.tlog("lpcv-writer: \""+l+"\" is unknown key"),c;var p=function(t){var e=t.promoRecordConf,r=t.currentTrackingData,n=t.prKey,o=t.pid,i=t.limit,a=void 0===i?10:i;if(!e)return console.error("💡 No promoRecordConf"),[];if(!e.some(function(t){return t.name===n}))return console.error("❗ unknown prKey"(t){rion(t){return t.name}).indexOf(n))return new Array(""+o);var c=(r.htion(t){return t!==o});return c.push(o),c.slice(-1*a)}({currentTrackingData:r,prKey:l,pid:m,promoRecordConf:a.AllPromoRecordConf,limit:a.prHistoryLimit});if(p.length>0&&(c.history[l]=p),0===Object.keys(c[l]).length)return c[l]=s({},m,new Array(f))turn t.clk===e.clk})})(0,f)||v.push(f);var g=a.AllPromoRecordConf.filter(function(t){return t.name===l})[0].limit;return c[l][m]=v.slice(-1*g),c}},E={tlog:d(!1),recordManager:R,serializer:j},A=function(t){var e=t.multiStorage,r=t.key,n=t.T;return e.getItem(r).map(function(t){return t&&'object'!==(void 0===t?"undefined":m(t))?n.serializer.decodeEscapedText(t,10):{}})},C=function(t){var e=t.multiStorage,r=t.key,n=t.T,o=A({multiStorage:e,key:r,T:n}),i=e:t,storageType:i[e]}})},L=function(t){var e=t.fullDataMulti,r=t.pids,n=t.promoObjKey,o=t.T;return function(t){if(!t||0===Object.keys(t).length)return{storageType:'',data:{}};return t}(e.map(function(t){var e=t.data,i=t.storageType,a=R.makePromotionParamJson({fullData:e,pids:r,promoObjKey:n,T:o});return!!function(t){retur.keys(t[e]).length>0})}(a)&&{storageType:i,data:a}}).filter(function(t){return t})[0])},K=function(t){var e=t.multiStorage,r=t.key,n=t.value,o=t.optsObj,i=t.T.serializer.encode(n);e.setItem(r,i,o)},M=function(t){var e=t.multiStorage,r=t.receivedTrackingData,n=t.P,o=t.T;e.getAllStorages().forEach(function(t,e){o.tlog("MULTI STORAGE #"+e);var i=n.siteId,a=o.serializer.decodeEscapedText(t.getItem(i));o.tlog('💡 receivedTrackingData',r),o.tlog('💡 currentTrackingData',a);var c=o.recordManager.updatePromoRecord({P:n,currentTrackingData:a,receivedTrackingData:r});o.tlog('💡 mergedTrackingData',c);var u={domain:n.domain||function(){var t=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).getTopDomain||g)();return'localhost'===t||/^[0-9.]+$/.test(t)?t:"."+t}(o)};t.setItem(i,o.serializer.encode(c),u)})},J={getTopDomain:g,serializer:j,multiRecordManager:r,tlog:d(!1)},z={getParamValue:P,getParamValueRaw:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location,r=new RegExp('[&\\?]?'+t+'=([\\w-%{}:,."\\[\\]]+)').exec(e.toString());return r&&r.length>0?r[0].split("=")[1]:""}},N={getSuitableParamValue:function(t){var e=t.key,r=t.uriQuery,n=t.numRef;return n&&Object.keys(n)[0]?z.getParamValueRaw(e,r):z.getParamValue(e,r)},setHexNumRefMode:function(t){var e=t.key,r=t.uriQuery;return["[?&;]"+e+"={&#x22;","{return new RegExp(t).test(r)})?'hex':''},setCookieDataMulti:function(t,e){var r=I({functions:t.tool,defaults:J},t.tool);r.tlog("ℹ️ lpcv-lp-func-multi:: update tracking data",e),r.multiRecordManager.updatePromoRecord(e)}},U=(d(!1),{getParamValue:P}),_={getParallelTrackingParams:function(t,e){for(var r=0;r<t.length;r++){var n=U.getParamValue(t[r].clickId,e),o=U.getParamValue(t[r].suffix,e);if(""!=n&&""!=o)return{clk:n,pid:o}}return{}},createFilJson:function(t){if(0!==Object.keys(t).length){var e=new Date,r=e.getFullYear(),n=('00'+(e.getMonth()+1)).slice(-2),o={pr:s({},t.pid,{clk:t.clk,ym:""+r+n})};return JSON.stringify(o)}},pushWindowAfblpcvLpConf:function(t,e){if(t){window.afblpcvLpConf||(window.afblpcvLpConf=[],window.afblpcvLpConf.push({siteId:e}));for(var r=0;r<window.afblpcvLpConf.length;r++)window.afblpcvLpConf[r].trackingJson=t}}},V=function(t){return!(!t&&n/^[\w.\-_=$*{}[\];:|]+$/.test(t)},F=function(t){var e=''+t,r=[e];return['.','/'].some(function(t){var n=e.match(new RegExp('\\'+t,'g'));return!(!n||2!==n.length)&&(r=e.split(t),!0)}),r},H=function(t){return function(t){var e={amount:999,price:9999999};if(!t)return[];return t.split(':').map(function(t){var r=F(t);if(1===r.length){var n=r[0];return V(n)?'':'not number price . price: ['+n+' . '+n+']'}if(3!==r.length)return'invalid amount chunk: ['+t+']';var o=r[0],i=r[1],a=r[2];return o&&i&&a?V(i)&&V(a)?i>e.amount?'too large amount: ['+i+']':a>e.price?'too large price: ['+a+']':-1!==o.indexOf(' ')?'found space: ['+o+']':'':'not number price . amount: ['+i+' . '+a+']t).every(function(t){return''===t})},q=function(t){var e=t.pid,r=t.amount,n=t.mid,o=t.u,i=[];return['pid','u'].forEach(function(e){t[e]||i.push("️️❗ missing [commitData."+e+']')}),i.push('[object Object]'===Object.prototype.toString.call(t)?'':"️️❗ invalid [commitData] -> "+t),i.push(/^\w{6}/.test(e)?'':"️️❗ invalid [commitData.pid] -> "+e),i.push(H(r)?'':"️️❗ invalid [commitData.amount] -> "��️❗ invalid [u] -> "+o),i.push(!n||function(t){return $(t)}(n)?'':"️️❗ invalid [mid] -> "+n),i.filter(function(t){return t})},Q={isValidAmountData:H,replaceInvalidUriEncode:h,serializer:j,tlog:d(!1)},B=function(t,e){if(!t||!/\//.test(t))return t;e.tlog("ℹ️ lpcv-cv-func(t){return t.split(':').every(function(t){return e.isValidAmountData(t)})}(r)?r:t},G=function(t){var e=t.commitData;return Object.keys(e)n"&"+t+"="+(e[t]?e[t].toString().trim():"")}).filter(function(t){return t}).join("")},X=function(t){var e=I({functions:t.tool,defaults:Q},t.tool),r=t.pids,n=t.commitData,o=t.uriParamKey;try{var i=e.multiRecordManager.makePromotionParamJson(r).data;e.tlog("ℹ️ lpcv-cv-func:: basic commit param M >",i),n.amount&&(n.amount=B(n.amount,e));var a=G({commitData:n});e.tlog("ℹ️ lpcv-cv-func:: additional commit param M >",a);var c="?"+o+"="+e.replaceInvalidUriEncode(e.serializer.encode(i))+a;return c.length>2e3&&e.tlog("️️❗ lpcv-cv-func:: too long URI Parameter over 2,000"),c}catch(t){throw t}},W={fixAmountData:B,makeAdditionalParam:G},Y=Object.freeze({default:X,makeUriParamsMulti:X,privateFunc:W}),Z=function(t){var e=t.param,r=t.element,n=t.];if(i){if([].concat(f(r.querySelectorAll('input'))).some(function(t){return t.name===o}))n.tlog("️️❗ lpcv-modifyExLink:: exists <input> name = "+o);else{var a=do,i.split("&")[0]],['type','hidden'],['name',o]].forEach(function(t){a.setAttribute(t[0],t[1])}),r.appendChild(a),n.tlog("✅ lpcv-modifyExLink:: add <input name=\""+o+"\" value=\""+e+"\"> to <form name=\""+r.name+"\"")}}else n.tlog("️️❗ lpcv-modifyExLink:: param value is EMPTY")},tt=function(t){var e=t.hostname,r=t.param,n=t.paramkey,o=t.element,i=t.T,a=o.getAttribute("href");a&&function(t){var e=t.currentLink,r=t.hostname,n=t.paramkey;if(!e.match(/^https?:\/\/|^\/\/[\w]+/))return!1;if(-1!==e.split("?")[0].indexOf(r))return!1;return!new RegExp("[?&]"+n+"=").test(e)}({currentLink:a,hostname:e,paramkey:n})&&(o.setAttribute("href",function(t){var e=t.currentLink,r=t.param;if(!r)return e;return e+(e.match(/\?/)?"&":"?")+r}({currentLink:a,param:r})),i.tlog("✅ lpcv-modifyExLink:: add param to <a href=\""+a+"\">"))},et=function(t){var e=t.pid,r=t.pids,n=t.promoObjKey,o=t.fullData.history||{pr:[],mgr:[],sm:[]},i={};return n.forEach(function(t){var n=o[t];i[t]=function(t){var e=t.pid,r=void 0===e?'':e,n=if(!i||0===i.length||!1===Array.isArray(i))return r;return i.filter(function(t){return-1!==n.indexOf(t)}).pop()||r}({pid:e,pids:r,history:n})}),i},rt=function(t){var e=t.pids,r=t.promoObjKey,n=t.siteId,o=t.uriParamKey,i=t.T,a=t.param,c=void 0===a?'':a,u=t.pid,l=void 0===u?'':u,f=t.isTest,d=void 0!==f&&f;if(c)return i.tlog("ℹ️ lpcv-modifyExLink:: use URI Param to modify external link"),c.replace(/^&amp;|^[?&]+/,"");var p=i.serializer.decode({encodedJson:i.storage.getItem(n),retry:10});if(!(p&&0!==Object.keys(p).length||c))return i.tlog("ℹ️ lpcv-modifyExLink:: no data stored"),'';var v=i.recordManager.makePromotionParamJson({fullData:p,pids:e,promoObjKey:r,T:i});i.tlog("ℹ️ lpcv-modlink:: raw data stored :",v);var g=et({pid:l,pids:e,promoObjKey:r,fullData:p});return r.forEach(function(t){var e=g[t],r=v[t][e];r?v[t]=s({},e,r.pop()):delete v[t]}),i.tlog("ℹ️ lpcv-modlink:: raw fil-value :",v),"object"===(void 0===v?"undefined":m(v))&&0===Object.keys(v).length?'':v?o+"="+i.serializer.encode(v)+(d?'&afblpcvtest=true':''):""},nt=function(t){var e=t.targetMode,r=t.param,n=t.pid,o=t.pids,i=t.promoObjKey,a=t.siteId,c=t.targetAttr,u=t.isTest,l=t.attrName,m=void 0===l?'afblpcv':l,s=t.uriParamKey,d=void 0===s?'fil':s,p=t.hostname,v=void 0===p?window.parent.location.hostname.toString()||window.location.hostname.toString():p,g=t.T,y=void 0===g?{tlog:function(){}}:g,h=function(t){if(!t)return"partial:["partial","part","only"]};return Object.keys(e).filter(function(r){return e[r].some(function(e){return e===t})})[0]||""}(e);if(""!==h){if("none"!==h){y.tlog("ℹ️ lpcv-modifyExLink:: mode = \""+h+"\"");var k=rt({pid:n,pids:o,param:r,promoObjKey:i,siteId:a,uriParamKey:d,isTest:u,T:y});if(k){y.tlog("ℹ️ lpcv-modifyExLink:: param: "+k);var w={a:tt,area:tt,form:Z},b="partial"===h?t+b);e&&0!==e.length&&[].concat(f(e)).forEach(function(e){return w[t]({T:y,hostname:v,element:e,attrName:m,paramkey:d,param:k})})})}else y.tlog("ℹ️ lpcv-modifyExLink:: no param to add")}}else console.error("❗ lpcv-modifyExLink:: unknown modifyLink value: \""+e+"\"")},ot={commitScript:"https://t.afi-b.com/commit/commit.js",errorScript:"https://t.afi-b.com/jslib/error.js",siteId:"",pids:JSON.parse('["L11336a","q6260C","q6260C"]'),promoRecordConf:[{name:"pr",limit:3},{name:"mgr",limit:1},{name:"sm",limit:1}],promoHistoryLimit:10,uriParamKey:"fil",parallelTrackingUriParamKeys:[{clickId:"gclid",suffix:"afbpid"}],targetAttr:"data-add-afb-param",testParam:"afblpcvtest",domObserveInterval:1e3,additionalScriptsUrl:JSON.parse('[]')},it=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.toString()).match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1]},at={getTestFlag:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.toString(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ot.testParam,n=function(){try{var t=window.parent.location.toString();return t?P(r,t):P(r,e)}catch(t){return console.info("💡 lpcv-main:: maybe cross-origin frame. cannot set test-flag"),!1}}();if("true"===n)return t.setItem(r,"true",{domain:g(it(e))}),!0;if("false"===n)return t.setItem(r,"false",{domain:g(it(e))}),!1;var o=t.getItem(r);return!!o&&"true"===o.toLowerCase()},getUri:function(){try{return window.parent.location.toString()||window.location.toString()}catch(t){return console.info("💡 lpcv-main:: maybe cross-origin frame. return `window.location` instead of `window.parent.location`"),window.location.toString()}},setOrExec:function(t){var e=t.func,r=t.args,n=t.tlog,o=t.name,i=void 0===o?"do something":o;"complete"===document.readyState||"State?(n("💡 lpcv-main:: EXECUTE \""+i+"\""),e(r)):(n("💡 lpcv-main:: set event to "+i),window.addEventListener("load",function(){return e(r)},!1))}},ct={isTest:at.getTestFlag(u,window.location.toString())},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ot.pids;return e&&0!==e.length&&e[0]?e:[t]},lt=d(ct.isTest),mt=function(t){var n=t.P,o=t.T;return new r({multiStorage:function(t){if(t)return new e(Array.isArray(t)?t:[t]);var r=[];return window.document&&r.push(u),window.localStorage&&r.push(c),new e(r)}(),P:n,T:o})},st=function(t){var e=t.hostname,r=t.siteId,n=t.param,o=t.pid,i=t.targetMode,a=t.targetAttr,c=void 0===a?ot.targetAttr:a,l=t.uriParamKey,m=void 0===l?ot.uriParamKey:l,s=t.pids,f=void 0===s?ut(o):s,d=t.promoObjKey,p=void 0===d?ot.promoRecordConf.map(function(t){return t.name}):d,v=t.isTest,g=void 0===v?ct.isTest:v;lt("💡 lpcv-main:: trying to modify external link");return nt({siteId:r,param:n,pid:o,targetMode:i,targetAttr:c,uriParamKey:m,hostname:e,pids:f,promoObjKey:p,isTest:g,T:{recordManager:R,serializer:j,storage:u,tlog:lt}})},ft=function(t){var e=t;e.siteId=t.siteId||ot.siteId,e.promoObjKey=ot.promoRecordConf,e.errorScript=ot.errorScript+"?type=lp&err=",e.uriParamKey=ot.uriParamKey,e.domain=t.domain?t.domain:"",e.isTest=ct.isTest,e.func=N,e.tool={addScriptTag:l,getTopDomain:g,modifyExLink:nt,recordManager:R,serializer:j,storage:u,tlog:lt},e.tool.multiRecordManager=mt({P:e,T:e.tool}),e.tool.tlog("🚩 lpcv-main:: afb-lpcv.js LP test mode on"),e.tool.tlog("ℹ️ lpcv-main:: uri\n   "+window.location);var r=at.getUri();t.numRef&&t.numRef!=={}||(e.tool.tlog("💡 lpcv-main:: auto numRef mode"),e.numRef=N.setHexNumRefMode({uriQuery:r,key:e.uriParamKey}));var n=e.trackingJson?e.trackingJson:N.getSuitableParamValue({uriQuery:r,key:e.uriParamKey,numRef:e.numRef});if(e.trackingJson&&e.tool.tlog("💡 lpcv-main:: trackingJson using "+e.trackingJson),t.modifyLink){e.tool.tlog("💡 lpcv-main:: found config to modify external link");var o={param:n?e.uriParamKey+"="+n:'',targetMode:t.modifyLink.mode,targetAttr:t.targetAttr,pid:t.modifyLink.pid,siteId:e.siteId};at.setOrExec({tlog:lt,func:st,args:o,name:"modify external link"})}if(n){try{var i=e.tool.serializer.decode({encodedJson:n,retry:10,numRef:e.numRef||'none'});e.tool.tlog("✅ lpcv-main:: decoded tracking param\n",i),e.func.setCookieDataMulti(e,i);var a=e.tool.storage.getItem(e.siteId);if(!a||"{}"===a)throw console.error("️️❗ lpcv-main:: FAILED to save cookie : ",JSON.stringify(i)),new Error("FAILED to save cookie")}catch(t){var c=t.stack||t.message,m={siteId:e.siteId,param:n,error:{file:t.fileName,name:t.name,message:c}};console.error(c),e.tool.addScriptTag(""+e.errorScript+e.tool.serializer.encode(m))}e.callback&&e.callback()}else e.tool.tlog("ℹ️ lpcv-main:: no url param for tracking")},dt=function(t){var e=t;if(e.pids=ut(t.commitData.pid),e.pid=t.commitData.pid,e.siteId=t.siteId||ot.siteId,e.promoObjKey=ot.promoRecordConf.map(function(t){return t.name}),e.commitScript=ot.commitScript,e.errorScript=ot.errorScript+"?type=cv&err=",e.uriParamKey="fic",e.isTest=ct.isTest,e.func=Y,e.tool={addScriptTag:l,divideAmountChunk:F,isValidAmountData:H,replaceInvalidUriEncode:h,recordManager:R,serializer:j,storage:u,tlog:lt},e.tool.multiRecordManager=mt({P:e,T:e.tool}),e.tool.tlog("🚩 lpcv-main:: afb-lpcv.js CV test mode on"),ct.isTest)try{e.tool.tlog(function(){var t=["://track.affiliate-b.com/commit","://t.afi-b.com/commit"];return[{tag:"img",attr:"src"}].some(function(e){var r=document.querySelectorAll(e.tag);return!!r&&[].concat(f(r)).some(function(r){return t.some(function(t){try{return-1!==r.getAttribute(e.attr).indexOf(t)}catch(t){return!1}})})})}()?"️️❗ lpcv-main:: *** FOUND OLD CV TAG ***":"✅ catch(t){e.tool.tlog("❗ lpcv-main:: found something wrong),console.error(t)}var r={};Object.keys(e.commitData).forEach(function(t){r[t]=e.commitData[t]});var n=ot.additionalScriptsUrl?ot.additionalScriptsUrl.map(function(t){return{url:t,params:r}}):[];try{if(e.tool.tlog("ℹ️ lpcv-main:: uri\n",window.location.href),!e.commitData.pid){var o="❗ no pid in this 'afblpcvCvConf' item. so skip cv()";throw console.error(o),new Error(o)}if(-1===e.pids.indexOf(e.commitData.pid))return lt("ℹ️ lpcv-main:: pids in this script = "+e.pids+". pid on this page = "+e.commitData.pid),lt("💡 lpcv-main:: NO MATCH! so skip cv()"),!1;if(e.tool.tlog("ℹ️ lpcv-main:: properties\n","siteId = "+e.siteId+", pid = "+t.commitData.pid+" | "+ut(t.pid)+", pid(s) = "+e.pids+", cookie length = "+e.tool.storage.getItem(e.siteId).length),e.tool.tlog("ℹ️ lpcv-main:: commit data received\n",e.commitData),ct.isTest){var i=q(e.commitData),a=0===i.length?'☑️ valid':i;lt("ℹ️ lpcv-main:: validate commitData:",a)}var c=e.func.makeUriParamsMulti(e);l(""+e.commitScript+c),e.tool.tlog("✅ lpcv-main:: set script tag to call 'commit.js'\n",c)}catch(t){var m=t.stack||t.message,s={siteId:e.siteId,pid:e.commitData.pid,error:{file:t.fileName,name:t.name,message:m}};return console.error(m),e.tool.addScriptTag(""+e.errorScript+e.tool.serializer.encode(s)),!0}return n.map(function(t){return function(t){return t.params&&0!==Object.keys(t.params).length?""+t.url+y(t.params):""+t.url}(t)}).forEach(function(t){return l(t)}),e.tool.tlog("✅ lpcv-main:: set additional script"),!0};try{!function(){var t=_.getParallelTrackingParams(ot.parallelTrackingUriParamKeys,window.location.href),e=_.createFilJson(t);_.pushWindowAfblpcvLpConf(e,ot.siteId);var r=function(t){return!(!t||0===t.length||t.length>20&&(lt("️️❗ lpcv-main:: too many 'window.afblpcvXXConf'"),1))};if(lt("📣 ::lpcv-main:: 📣 "+new Date+" @ "+window.location.href),r(window.afblpcvLpConf)){for(lt("💡 lpcv-main:: START loop lp()");window.afblpcvLpConf.length>0;)ft(window.afblpcvLpConf.shift());lt("💡 lpcv-main:: END loop lp()")}if(window.afblpcvLinkConf){var n=window.afblpcvLinkConf;lt("💡 lpcv-main:: START getLpParam()",n),lt("💡 lpcv-main:: LOOP watch link to modify..."),function t(){!function(t){var e=t.pid,r=t.mode,argetAttr,i=t.isTest;if(n){if(r){var a={isTest:i,pid:e,siteId:n,targetAttr:o,param:'',targetMode:r};lt("💡 lpcv-main:: ADD_FIL_PARAM"),lpcv-main:: invalid 'afblpcvLinkConf' : no \"siteId\"")}(n),window.setTimeout(function(){t()},ot.domObserveInterval)}()}r(window.afblpcvCvConf)&&(lt("💡 lpcv-main:: START loop cv()"),window.afblpcvCvConf=window.afblpcvCvConf.filter(function(t){return!dt(t)}),lt("💡 lpcv-main:: END loop cv()"))}()}catch(t){var pt=t.stack||t.message,vt={siteId:"unsettled",pid:"unsettled",error:{file:t.fileName,name:t.name,message:pt}};console.error(pt),l(""+ot.errorScript+j.encode(vt))}return t.lp=ft,t.cv=dt,t.getLpParam=function(t){var e=t.pid,r=t.siteId,n=t.pids,o=void 0===n?ut(e):n,i=t.promoObjKey,a=void 0===i?ot.promoRecordConf.map(function(t){return t.name}):i,c=t.uriParamKey,l=void 0===c?ot.uriParamKey:c;return rt({pid:e,pids:o,promoObjKey:a,siteId:r,uriParamKey:l,T:{cvFunc:Y,serializer:j,storage:u,tlog:lt}})},t}({});