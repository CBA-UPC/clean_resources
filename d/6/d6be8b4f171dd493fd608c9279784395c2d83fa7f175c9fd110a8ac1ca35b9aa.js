!function(e){"use strict";function n(e,n,i){"addEventListener"in window?e.addEventListener(n,i,!1):"attachEvent"in window&&e.attachEvent("on"+n,i)}ion c(e,n){f("log",e,n,a(e))}ction d(e){ll;"[iFrameResizerChild]Ready"===J?V():f()?(Q=o(),X=U=Q.id,B[X].loaded=!0,!d()&&q(X)&&(c(X,"Received: "+J),C()&&a()&&L())):u(X,"Ignored: "+J)}eof window){var T=0,N=!1,W=!1,P="message",H=P.length,S="[iFrameSizer]",A=S.length,j=null,L=window.requestAnimationFrame,q={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},B={},V=null,U="Host Page",D={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:resizedCallback:scrollCallback:;window.jQuery&&O(window.jQuery),"function"==typeof define&&define.amd?define([],C):"object"==typeof module&&"object"==typeof module.exports?module.exports=C():window.iFrameResize=window.iFrameResize||C()}}();