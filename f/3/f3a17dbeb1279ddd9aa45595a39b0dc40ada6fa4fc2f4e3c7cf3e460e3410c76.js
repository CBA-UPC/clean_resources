/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.5 - 2023-03-08
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2023 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */
!function(d){var c,u,a,v,x,I,M,r,f,k,i,l,z;unction F(e,n,i){e.addEventListener(n,i,!1)}unction p(e){return x+"["+(n="Host page: "+(e=e),n=window.top!==window.self?window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e:n)+"]";var n}unction O(e,n){o("log",e,n,t(e))}ction w(e){unction n(){var e=p.slice(I).split(":"),n=e[1]?parseInt(e[1],10):0,i=k[e[0]]&&k[e[0]].iframe,t=getComputedStyle(i);return{iframe:i,id:e[0],height:n+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.paddingTop?parseInt(e.paddingTop,10):0,e=e.paddingBottom?parseInt(e.paddingBottom,10):0;return n+e}(t)+t),width:e[2],type:e[3]}}unction o(){var t=e.origin,o=k[b]&&k[b].checkOrigin;if(o&&""+t!="null"&&!))throw new Error("Unexpected message received from: "+t+" for "+w.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return 1}ion u(e){var e=e.split("#")[1]||"",n=decodeURIComponent(e),n=document.getElementById(n)||document.getElementsByName(n)[0];n?(n=r(n),O(b,"Moving to in page link (#"+e+") at x: "+n.x+" y: "+n.y),M={x:n.x,y:n.y},c(),O(b,"--")):window.top===window.self?O(b,"In page link #"+e+" not found"):window.parentIFrame?window.parentIFrame.moveToAnchor(e):O(b,"In page link #"+e+" not found and window.parentIFrame not found")}function f(e){var n,i={};i=0===Number(w.width)&&0===Number(w.height)?{x:(n=a(9).split(":"))[1],y:n[0]}:{x:w.width,y:w.height},l(e,{iframe:w.iframe,screenX:Number(i.x),screenY:Number(i.y),type:w.type})}unction m(){switch(k[b]&&k[b].firstRun&&k[b]&&(k[b].firstRun=!1),w.type){case"close":N(w.iframe);break;case"message":n=a(6),O(b,"onMessage passed: {iframe: "+w.iframe.id+", message: "+n+"}"),l("onMessage",{iframe:w.iframe,message:JSON.parse(n)}),O(b,"--");break;case"mouseenter":f("onMouseEnter");break;case"mouseleave":f("onMouseLeave");break;case"autoResize":k[b].autoResize=JSON.parse(a(9));break;case"scrollTo":d(!1);break;case"scrollToOffset":d(!0);break;case"pageInfo":s(k[b]&&k[b].iframe,b),r=b,e("Add ",F),k[r]&&(k[r].stopPageInfo=o);break;case"pageInfoStop":k[b]&&k[b].stopPageInfo&&(k[b].stopPageInfo(),delete k[b].stopPageInfo);break;case"inPageLink":u(a(9));break;case"reset":j(w);break;case"init":i(),l("onInit",w.iframe);break;default:0===Number(w.width)&&0===Number(w.height)?R("Unsupported message received ("+w.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):i()}r r,n}var g,h,p=e.data,w={},b=null;if("[iFrameResizerChild]Ready"===p)for(var y in k)A("iFrame requested init",L(y),k[y].iframe,y);else x===(""+p).slice(0,I)&&p.slice(I).split(":")[0]in k?(w=n(),b=w.id,k[b]&&(k[b].loaded=!0),(h=w.type in{true:1,false:1,undefined:1})&&O(b,"Ignoring init message from meta parent page"),!h&&(h=!0,k[g=b]||(h=!1,R(w.type+" No settings for "+g+". Message was: "+p)),h)&&(O(b,"Received: "+p),g=!0,null===w.iframe&&(R(b,"IFrame ("+w.id+") not found"),g=!1),g&&o()&&m())):E(b,"Ignored: "+p)}unction g(e){e=e.id;delete k[e]}ion H(o){function i(e){var n;&&"0"===o[e]&&(a=!0,O(r,"Hidden iFrame detected, creating visibility listener"),e=m())&&(n=document.querySelector("body"),new e(t).observe(n,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}function e(e){var n;n=e,o.id?(o.iframe.style[n]=o[n]+"px",O(o.id,"IFrame ("+r+") "+n+" set to "+o[n]+"px")):O("undefined","messageData id not set"),i(e)}var r=o.iframe.id;k[r]&&(k[r].sizeHeight&&e("height"),k[r].sizeWidth)&&e("width")}unction A(n,i,t,o,e){function r(){var e;t&&"contentWindow"in t&&null!==t.contentWindow?(e=k[o]&&k[o].targetOrigin,O(o,"["+n+"] Sending msg to iframe["+o+"] ("+i+") targetOrigin: "+e),t.contentWindow.postMessage(x+i,e)):R(o,"["+n+"] IFrame("+o+") not found")}function a(){e&&k[o]&&k[o].warningTimeout&&(k[o].msgTimeout=setTimeout(k[o].warningTimeout))}var s=!1;o=o||t.id,k[o]&&(r(),a())}unction s(t,i){function e(i){var e=m();e&&(e=e,t.parentNode)&&new e(.observe(t.parentNode,{childList:!0}),F(t,"load",,A("init",i,t,d,!0)}unction n(e){if(e=e||{},k[r]=Object.create(null),k[r].iframe=t,k[r].firstRun=!0,k[r].remoteHost=t.src&&t.src.split("/").slice(0,3).join("/"),"object"!=typeof e)throw new TypeError("Options is not an object");Object.keys(e).forEach(o,e);var n,i=e;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(k[r][n]=(Object.prototype.hasOwnProperty.call(i,n)?i:l)[n]);k[r]&&(k[r].targetOrigin=!0!==k[r].checkOrigin||""===(e=k[r].remoteHost)||null!==e.match(/^(about:blank|javascript:|file:\/\/)/)?"*":e)}var r=t.id);if(r in k&&"iFrameResizer"in t)R(r,"Ignored iFrame, already setup.");else{switch(n(i),O(r,"IFrame scrolling "+(k[r]&&k[r].scrolling?"enabled":"disabled")+" for "+r),t.style.overflow=!1===(k[r]&&k[r].scrolling)?"hidden":"auto",k[r]&&k[r].scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=k[r]?k[r].scrolling:"no"}s("Height"),s("Width"),a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth"),"number"!=typeof(k[r]&&k[r].bodyMargin)&&"0"!==(k[r]&&k[r].bodyMargin)||(k[r].bodyMarginV1=k[r].bodyMargin,k[r].bodyMargin=k[r].bodyMargin+"px"),e(L(r)),k[r]&&(k[r].iframe.iFrameResizer={close:N.bind(null,k[r].iframe),removeListeners:g.bind(null,k[r].iframe),resize:A.bind(null,"Window resize","resize",k[r].iframe),moveToAnchor:sendMessage:)}on q(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=:E("","Unable to bind to jQuery, it is not fully loaded.")}"undefined"!=typeof window&&(c=0,a=u=!1,v="message".length,I=(x="[iFrameSizer]").length,M=null,r=window.requestAnimationFrame,f=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),k={},i=null,l=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:onMouseEnter:function(){},onMouseLeave:function(){},onResized:onScroll:),z={},window.jQuery!==d&&q(window.jQuery),"function"==typeof define&&define.amd?define([],n):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=n()),window.iFrameResize=window.iFrameResize||n())}();
//# sourceMappingURL=iframeResizer.map