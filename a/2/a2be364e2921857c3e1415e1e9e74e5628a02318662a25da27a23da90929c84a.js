window.blue={},window.blue.isMobileDetected=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},window.blue.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,window.console||(console={log:function(){}}),function(e,t){e=e||"docReady",t=t||window;var n=[],o=!1,r=!1;function u(){if(!o){o=!0;for(var e=0;e<n.length;e++)n[e].fn.call(window,n[e].ctx);n=[]}}function a(){("complete"===document.readyState||"interactive"===document.readyState)&&u()}t[e]=function(e,t){if("function"!=typeof e)throw TypeError("callback for docReady(fn) must be a function");if(o){setTimeout(function(){e(t)},1);return}n.push({fn:e,ctx:t}),"complete"===document.readyState||"interactive"===document.readyState?setTimeout(u,1):r||(document.addEventListener?(document.addEventListener("DOMContentLoaded",u,!1),window.addEventListener("load",u,!1)):(document.attachEvent("onreadystatechange",a),window.attachEvent("onload",u)),r=!0)}}("documentReady",window),documentReady(function(){if(blue_obj[instId]=new blue_obj,window.blue_v="29092023-1023",window.bluecpy_id=generateUid(),window.blue_ulc="",setLastClickBlue(),!0===isCookieEnabled()){var e=getCookieBlue("blueID");""!=e&&"null"!==e&&null!==e?window.bluecpy_id=e:setCookieBlue("blueID",window.bluecpy_id,365)}if(!0===isSessionStorageEnabled()){var e=getSessionStorage("blueID");null!==e&&"null"!==e?window.bluecpy_id=e:setSessionStorage("blueID",window.bluecpy_id)}if(!0===isLocalStorageEnabled()){var e=getLocalStorage("blueID");null!==e&&"null"!==e?window.bluecpy_id=e:setLocalStorage("blueID",window.bluecpy_id)}if(!("bluecpy_id"in window)||!window.bluecpy_id.length||""==window.bluecpy_id||null==window.bluecpy_id||"null"==window.bluecpy_id){window.bluecpy_id=generateUid();try{setCookieBlue("blueID",window.bluecpy_id,365)}catch(t){}try{setSessionStorage("blueID",window.bluecpy_id)}catch(n){}try{setLocalStorage("blueID",window.bluecpy_id)}catch(o){}}executeFlow(instId)}),executeFlow=function(e){var t=window.blue_q||[];for(i=0;i<t.length;i++)loadFunction(t[i].event,t[i].value);var n=blue_obj[e].getAttributes(),o=n.campaignId.split(","),r=n.pageType.split(",");for(idxCampaignId=0;idxCampaignId<o.length;idxCampaignId++)for(idxPageType=0;idxPageType<r.length;idxPageType++)executeRequests(o[idxCampaignId],r[idxPageType])};var instId=new Date().getTime(),campaignId="",pageType="",blueProductId="",transactionTotal="",transactionId="",p1="",p2="",p3="",pixelMode=0,fingerprint="";function setLocalStorage(e,t){try{return localStorage.setItem(e,t),!0}catch(n){return!1}}function getLocalStorage(e){try{if(window.localStorage)return localStorage.getItem(e)||"";return""}catch(t){return""}}function setSessionStorage(e,t){try{return window.sessionStorage.setItem(e,t),!0}catch(n){return!1}}function getSessionStorage(e){try{if(window.sessionStorage)return window.sessionStorage.getItem(e)||"";return""}catch(t){return""}}function setCookieBlue(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n);var r="expires="+o.toUTCString();document.cookie=e+"="+t+";domain=."+getDomainBlue(window.location.protocol+"//"+window.location.hostname)+";"+r+";path=/"}function getCookieBlue(e){var t=e+"=";try{for(var n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}catch(u){return getLocalStorage(e)}}function generateUid(){var e=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}function setLastClickBlue(){var e=window.location.search,t=new URLSearchParams(e).get("utm_source")||"";t.length?(window.blue_ulc=t,!0===isCookieEnabled()&&setCookieBlue("blueULC",t,30),!0===isSessionStorageEnabled()&&setSessionStorage("blueULC",t),!0===isLocalStorageEnabled()&&setLocalStorage("blueULC",t)):(!0===isCookieEnabled()&&getCookieBlue("blueULC").length&&(window.blue_ulc=getCookieBlue("blueULC")),!0===isSessionStorageEnabled()&&getSessionStorage("blueULC").length&&(window.blue_ulc=getSessionStorage("blueULC")),!0===isLocalStorageEnabled()&&getLocalStorage("blueULC").length&&(window.blue_ulc=getLocalStorage("blueULC")))}function expireULCBlue(){document.cookie="blueULC=;domain=."+getDomainBlue(window.location.protocol+"//"+window.location.hostname)+";expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",setSessionStorage("blueULC",""),setLocalStorage("blueULC","")}function getDomainBlue(e){if(3==e.split(".").length)var t=/(?:www\.)?((?:[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9\-]{0,61}[a-z0-9])/i;else var t=/(?:www\.)?(?:.+?\.)?([a-z0-9\-]+\.(?:[a-z\.]{2,6})$)/i;let n=t.exec(e);return n?n[1]:null}loadFunction=function(exec,val){eval("blue_obj["+instId+"]."+exec+"('"+val+"')")},executeRequests=function(e,t){var n=blue_obj[instId].getAttributes().pixelMode,o=[];if(n){var r=blue_obj[instId].mountSourcePixel(e,t),u=createImgElement(r);o.push(u)}else{var a=blue_obj[instId].mountSource(e,t),c=createIframeElement(a);o.push(c);var l=blue_obj[instId].getSslWidget(e,t),s=createScriptElement(l);o.push(s)}createDivElement(function(e){for(var t=0;t<o.length;t++)document.getElementById(e).appendChild(o[t])})},(blue_obj=function(){}).prototype.getSrc=function(){return("https:"==document.location.protocol?"https://":"http://")+"event.getblue.io/p/"},blue_obj.prototype.getSrcPixel=function(){return("https:"==document.location.protocol?"https://":"http://")+"event.getblue.io/p/"},blue_obj.prototype.mountSource=function(e,t){var n=blue_obj[instId].getAttributes(),o=1e13*(Math.random()+"");return n.source+"?cId="+e+"&tName="+t+"&pId="+n.blueProductId+"&revenue="+n.transactionTotal+"&orderId="+n.transactionId+"&p1="+n.p1+"&p2="+n.p2+"&p3="+n.p3+"&fp="+n.fingerprint+"&blueID="+window.bluecpy_id+"&ulc="+window.blue_ulc+"&v="+window.blue_v+"&nocache="+o},blue_obj.prototype.getSslWidget=function(e,t){var n=blue_obj[instId].getAttributes(),o=1e13*(Math.random()+""),r=0;return top!==self&&(r=1),"https://widget.getblue.io/event/?cId="+e+"&tName="+t+"&pId="+n.blueProductId+"&revenue="+n.transactionTotal+"&orderId="+n.transactionId+"&p1=&p2=e%3Dvp&p3=e%3Ddis&adce=1&dtycbr=87954&fp="+n.fingerprint+"&blueID="+window.bluecpy_id+"&ulc="+window.blue_ulc+"&v="+window.blue_v+"&if="+r+"&nocache="+o},blue_obj.prototype.mountSourcePixel=function(e,t){var n=blue_obj[instId].getAttributes(),o=1e13*(Math.random()+"");return n.sourcePixel+"?cId="+e+"&tName="+t+"&pId="+n.blueProductId+"&revenue="+n.transactionTotal+"&orderId="+n.transactionId+"&p1="+n.p1+"&p2="+n.p2+"&p3="+n.p3+"&pixelMode="+n.pixelMode+"&fp="+n.fingerprint+"&blueID="+window.bluecpy_id+"&ulc="+window.blue_ulc+"&v="+window.blue_v+"&nocache="+o},blue_obj.prototype.setFingerprint=function(e){this.fingerprint=e},blue_obj.prototype.setCampaignId=function(e){this.campaignId=e},blue_obj.prototype.setPageType=function(e){this.pageType=e},blue_obj.prototype.setProductId=function(e){this.blueProductId=e},blue_obj.prototype.setTransactionTotal=function(e){this.transactionTotal=e},blue_obj.prototype.setTransactionId=function(e){this.transactionId=e},blue_obj.prototype.setP1=function(e){this.p1=e},blue_obj.prototype.setP2=function(e){this.p2=e},blue_obj.prototype.setP3=function(e){this.p3=e},blue_obj.prototype.setPixelMode=function(e){this.pixelMode=e},blue_obj.prototype.getAttributes=function(){var e={};return e.campaignId=this.campaignId||"",e.pageType=this.pageType||"",e.blueProductId=this.blueProductId||"",e.transactionTotal=this.transactionTotal||"",e.transactionId=this.transactionId||"",e.p1=this.p1||"",e.p2=this.p2||"",e.p3=this.p3||"",e.pixelMode=this.pixelMode||0,e.fingerprint=this.fingerprint||"",e.source=blue_obj[instId].getSrc(),e.sourcePixel=blue_obj[instId].getSrcPixel(),e},createDivElement=function(e){var t="blue-tags-div";if(!document.getElementById(t)){var n=document.createElement("div");n.setAttribute("id",t),n.setAttribute("style","display:none;"),document.body.appendChild(n)}e(t)},createIframeElement=function(e){var t=document.createElement("iframe");return t.src=e,t.width=1,t.height=1,t.frameBorder=0,t.setAttribute("style","border-width:0px; margin:0px;"),t},createScriptElement=function(e){var t=document.createElement("script");return t.setAttribute("async","true"),t.setAttribute("type","text/javascript"),t.setAttribute("src",e),t},createImgElement=function(e){var t=document.createElement("img");return t.src=e,t.width=1,t.height=1,t.setAttribute("style","border-width:0px; margin:0px; width:1px;"),t},isSessionStorageEnabled=function(){return!!window.sessionStorage},isLocalStorageEnabled=function(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}},isCookieEnabled=function(){var e=navigator.cookieEnabled;return e||(document.cookie="testcookie",e=-1!=document.cookie.indexOf("testcookie")),!!e};param {any?} params Parâmetros de execução do método no front
     * @param {Function?} callback
     */
    function send(method, params, callback) {
        var id;
        if (callback) {
            rpc[id = uiid()] = callback;
        }
        window.parent.postMessage({jsonrpc: '2.0', method: method, params: params, id: id}, '*');
    }

    // recebe mensagens do script front via postMessage
    window.addEventListener('message', function (event) {
        var req = event.data;
        if (rpc.hasOwnProperty(req.method)) {
            var res = rpc[req.method].apply(null, req.params);
            if (req.id) {
                send(req.id, [res]);
            }
        }
    });

    /**
     * Obtém o timestamp da data e hora atual sem microsegundos
     * @return {number}
     */
    function timestamp() {
        return +new Date()/1000|0;
    }

    function uuid() {
        var ret = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 12; i--; ret += chars[rand(0, chars.length - 1)]);
        return ret;
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //
    // Inicialização
    //

    // carrega as informaçẽs do storage
    load();

    // ao terminar de carregar, notifica o script front
    // que o script back está pronto
    send('backendReady');

})();

</script>
</body>
</html>===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&O.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),A.apply(void 0,arguments)},w});
//# sourceMappingURL=firebase-app.js.map
