/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.2 - 2021-04-26
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(u){var f,l,a,x,M,I,k,r,m,F,t,g,z;unction O(e,n,t){e.addEventListener(n,t,!1)}unction o(e){return M+"["+(e="Host page: "+(n=e),e=window.top!==window.self?window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n:e)+"]";var n}unction T(e,n){s("log",e,n,i(e))}ction e(n){unction e(){var e=b.substr(I).split(":"),n=e[1]?parseInt(e[1],10):0,t=F[e[0]]&&F[e[0]].iframe,i=getComputedStyle(t);return{iframe:t,id:e[0],height:n+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.paddingTop?parseInt(e.paddingTop,10):0,e=e.paddingBottom?parseInt(e.paddingBottom,10):0;return n+e}(i)+i),width:e[2],type:e[3]}}unction o(){function e(){return i.constructor===Array?):(e=F[v]&&F[v].remoteHost,T(v,"Checking connection is from: "+e),t===e);var e}var t=n.origin,i=F[v]&&F[v].checkOrigin;if(i&&""+t!="null"&&!e())throw new Error("Unexpected message received from: "+t+" for "+y.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return 1}ion u(e){var n,t=e.split("#")[1]||"",e=decodeURIComponent(t),i=document.getElementById(e)||document.getElementsByName(e)[0];i?(n=r(i),T(v,"Moving to in page link (#"+t+") at x: "+n.x+" y: "+n.y),k={x:n.x,y:n.y},c(),T(v,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):T(v,"In page link #"+t+" not found and window.parentIFrame not found"):T(v,"In page link #"+t+" not found")}function f(e){var n,t={};t=0===Number(y.width)&&0===Number(y.height)?{x:(n=a(9).split(":"))[1],y:n[0]}:{x:y.width,y:y.height},l(e,{iframe:y.iframe,screenX:Number(t.x),screenY:Number(t.y),type:y.type})}unction m(){switch(F[v]&&F[v].firstRun&&F[v]&&(F[v].firstRun=!1),y.type){case"close":C(y.iframe);break;case"message":n=a(6),T(v,"onMessage passed: {iframe: "+y.iframe.id+", message: "+n+"}"),l("onMessage",{iframe:y.iframe,message:JSON.parse(n)}),T(v,"--");break;case"mouseenter":f("onMouseEnter");break;case"mouseleave":f("onMouseLeave");break;case"autoResize":F[v].autoResize=JSON.parse(a(9));break;case"scrollTo":d(!1);break;case"scrollToOffset":d(!0);break;case"pageInfo":s(F[v]&&F[v].iframe,v),r=v,e("Add ",O),F[r]&&(F[r].stopPageInfo=o);break;case"pageInfoStop":F[v]&&F[v].stopPageInfo&&(F[v].stopPageInfo(),delete F[v].stopPageInfo);break;case"inPageLink":u(a(9));break;case"reset":P(y);break;case"init":t(),l("onInit",y.iframe);break;default:0===Number(y.width)&&0===Number(y.height)?N("Unsupported message received ("+y.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):t()}r r,n}var g,h,p,w,b=n.data,y={},v=null;"[iFrameResizerChild]Ready"===b?):M===(""+b).substr(0,I)&&b.substr(I).split(":")[0]in F?(y=e(),v=y.id,F[v]&&(F[v].loaded=!0),(w=y.type in{true:1,false:1,undefined:1})&&T(v,"Ignoring init message from meta parent page"),!w&&(p=!0,F[h=v]||(p=!1,N(y.type+" No settings for "+h+". Message was: "+b)),p)&&(T(v,"Received: "+b),g=!0,null===y.iframe&&(N(v,"IFrame ("+y.id+") not found"),g=!1),g&&o()&&m())):E(v,"Ignored: "+b)}unction p(e){e=e.id;delete F[e]}ion A(o){function t(e){r i;a||"0"!==o[e]||(a=!0,T(r,"Hidden iFrame detected, creating visibility listener"),(i=h())&&))}function e(e){var n;n=e,o.id?(o.iframe.style[n]=o[n]+"px",T(o.id,"IFrame ("+r+") "+n+" set to "+o[n]+"px")):T("undefined","messageData id not set"),t(e)}var r=o.iframe.id;F[r]&&(F[r].sizeHeight&&e("height"),F[r].sizeWidth&&e("width"))}unction B(n,t,i,o,e){function r(){var e;i&&"contentWindow"in i&&null!==i.contentWindow?(e=F[o]&&F[o].targetOrigin,T(o,"["+n+"] Sending msg to iframe["+o+"] ("+t+") targetOrigin: "+e),i.contentWindow.postMessage(M+t,e)):N(o,"["+n+"] IFrame("+o+") not found")}function a(){e&&F[o]&&F[o].warningTimeout&&(F[o].msgTimeout=setTimeout(F[o].warningTimeout))}var s=!1;o=o||i.id,F[o]&&(r(),a())}unction d(i,e){function n(t){var e,n=h();n&&(e=n,i.parentNode&&new e(.observe(i.parentNode,{childList:!0})),O(i,"load",,B("init",t,i,u,!0)}unction o(e){e=e||{},F[s]={firstRun:!0,iframe:i,remoteHost:i.src&&i.src.split("/").slice(0,3).join("/")},e),Object.keys(e).forEach(t,e),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(F[s][n]=(Object.prototype.hasOwnProperty.call(e,n)?e:g)[n])}(e),F[s]&&(F[s].targetOrigin=!0===F[s].checkOrigin?""===(e=F[s].remoteHost)||null!==e.match(/^(about:blank|javascript:|file:\/\/)/)?"*":e:"*")}var r,a,s=(""===(r=i.id)&&(i.id=(a=e&&e.id||g.id+f++,null!==document.getElementById(a)&&(a+=f++),r=a),l=(e||{}).log,T(r,"Added missing iframe ID: "+r+" ("+i.src+")")),r);in F&&"iFrameResizer"in i?N(s,"Ignored iFrame, already setup."):(o(e),),c("Height"),c("Width"),d("maxHeight"),d("minHeight"),d("maxWidth"),d("minWidth"),"number"!=typeof(F[s]&&F[s].bodyMargin)&&"0"!==(F[s]&&F[s].bodyMargin)||(F[s].bodyMarginV1=F[s].bodyMargin,F[s].bodyMargin=F[s].bodyMargin+"px"),n(q(s)),F[s]&&(F[s].iframe.iFrameResizer={close:C.bind(null,F[s].iframe),removeListeners:p.bind(null,F[s].iframe),resize:B.bind(null,"Window resize","resize",F[s].iframe),moveToAnchor:sendMessage:))}tion y(){ar o;return function(){for(var e=["moz","webkit","o","ms"],n=0;n<e.length&&!r;n+=1)r=window[e[n]+"RequestAnimationFrame"];r?r=r.bind(window):T("setup","RequestAnimationFrame not supported")}(),b(),function v(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=:E("","Unable to bind to jQuery, it is not fully loaded.")}"undefined"!=typeof window&&(x="message".length,I=(M="[iFrameSizer]").length,r=window.requestAnimationFrame,g={autoResize:!(t=k=null),bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!(a=l=!1),inPageLinks:!(F={}),enablePublicMethods:!(f=0),heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!(m={max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:onMouseEnter:function(){},onMouseLeave:function(){},onResized:onScroll:,z={},window.jQuery&&v(window.jQuery),"function"==typeof define&&define.amd?define([],y):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=y()),window.iFrameResize=window.iFrameResize||y())}();
//# sourceMappingURL=iframeResizer.map