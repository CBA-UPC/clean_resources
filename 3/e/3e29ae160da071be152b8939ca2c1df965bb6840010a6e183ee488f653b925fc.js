(function(){
  var getCookie = function ( name )
  {
    var result = null;

    var cookieName = name + '=';
    var allcookies = document.cookie;

    var position = allcookies.indexOf( cookieName );
    if( position != -1 )
    {
        var startIndex = position + cookieName.length;

        var endIndex = allcookies.indexOf( ';', startIndex );
        if( endIndex == -1 )
        {
            endIndex = allcookies.length;
        }

        result = decodeURIComponent(
            allcookies.substring( startIndex, endIndex ) );
    }

    return result;
  }

  if(typeof stmt_params == 'undefined')
  {
      stmt_params = {};
  }

  stmt_params.vos30 = getCookie('stmt_vos30');
})();
vigator.appVersion.toLowerCase();e=-1!=r.indexOf(\"msie 6.\")?\"IE6\":-1!=r.indexOf(\"msie 7.\")?\"IE7\":-1!=r.indexOf(\"msie 8.\")?\"IE8\":-1!=r.indexOf(\"msie 9.\")?\"IE9\":-1!=r.indexOf(\"msie 10.\")?\"IE10\":\"IExx\"}else e=-1!==i.indexOf(\"trident\")?\"IE11\":-1!==i.indexOf(\"edge\")?\"Edge\":-1!==i.indexOf(\"chrome\")?\"Chrome\":-1!==i.indexOf(\"safari\")?\"Safari\":-1!==i.indexOf(\"firefox\")?\"FireFox\":-1!==i.indexOf(\"opera\")?\"Opera\":i;return e},_getDevice:function(){return window.navigator.userAgent.toLowerCase().match(/(android|iphone|ipod|mobile\\ssafari|iemobile|opera\\smini)/i)?\"SP\":\"PC\"},_createErrorMsg:function(e){return\"Error => [\"+e+\"]\\nUrl => [\"+(\"undefined\"!=typeof trace_p?trace_p:location.href)+\"]\\nDevice => [\"+_hacciErrorHandler._getDevice()+\"]\\nBrowser => [\"+_hacciErrorHandler._getBrowser()+\"]\\nUserAgent => [\"+window.navigator.userAgent.toLowerCase()+\"]\"},_outputError:function(e){var i=\"www.r-staffing.co.jp\"===location.host,r={api:\"undefined\"!=typeof apiDomain?apiDomain:i?\"api.r-staffing.co.jp\":\"api-stg.r-staffing.co.jp\",myapi:\"undefined\"!=typeof _myApiDomain?_myApiDomain:i?\"myapi.r-staffing.co.jp\":\"myapi-stg.r-staffing.co.jp\"},n=\"https://\"+r.api+\"/v1\",o=\"https://\"+r.myapi+\"/v1/proxyclient\",a={contentType:\"application/json; charset=utf-8\",dataType:\"json\",type:\"POST\",crossDomain:!0,data:JSON.stringify({message:_hacciErrorHandler._createErrorMsg(e.stack||e.toString()).replace(/(\\r\\n|\\n|\\r)/g,\"\\\\n\"),errorType:\"01\",location:\"01\"}),cache:!1};_fsnIsLogin||_fsnIsNinteimaeLogin?(a.url=o+\"/log\",a.xhrFields={withCredentials:!0}):a.url=n+\"/log\",$.ajax(a)}},_hacciCallFunc=function(e){var i,r;!function(e,i,r,n,o,a,t){e.HacciObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,a=i.createElement(r),t=i.getElementsByTagName(r)[0],a.async=1,a.src=n,t.parentNode.insertBefore(a,t)}(window,document,\"script\",\"https://storage.googleapis.com/rtc-hacci-loghub-prd-sdk/js/2.3.0/index.js\",\"hacci\"),hacci(\"init\",{endpoint:\"https://prd.t.hacci.live\",sendCookies:!1}),i=this,r=function(){\"use strict\";var e=/[cv]\\d{1,3}/,i=[\"pageName\",\"mid\",\"server\",\"aamb\"];return function(r){var n,o,a,t=function(n){var o,a,t={};try{var c=(o={},a={},n.split(\"?\")[1].split(\"&\").map((function(e){return e.split(\"=\")})).forEach((function(r){var n=r[0],t=r[1];-1!==i.indexOf(n)||e.test(n)?o[n]=decodeURIComponent(t):a[n]=decodeURIComponent(t)})),o.raw=a,o);c.version=r.scode.version,t.adobe=c}catch(n){t.adobe={version:r.scode.version},t.error=n.message,t.kb=r.scode.kb}finally{window.hacci(\"send\",r.key,t)}};r.scode.kb&&t(r.scode.kb),n=r.scode,o=t,a=n.kb,Object.defineProperty(n,\"kb\",{get:function(){return a},set:function(e){a!=(a=e)&&e&&o(e)},configurable:!0})}},\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=r():\"function\"==typeof define&&define.amd?define(r):(i=i||self).hacciAdobe=r(),hacciAdobe({key:\"ByBUUFjvnKjf\",scode:e})},_hacciLoopExceedMsg=\"Loop exceeds limit\",_hacciRepeat=0,_hacciTimer=setInterval((function(){try{if(_hacciRepeat>30)throw clearInterval(_hacciTimer),new Error(_hacciLoopExceedMsg);var e=rs.s;if(!e)return console.log(\"loop\"),_hacciRepeat+=1,0;if(\"dummy\"===e.pageName)return clearInterval(_hacciTimer),0;clearInterval(_hacciTimer),-1!==e.events.indexOf(\"event17\")&&(new Date).getTime()<new Date(\"2021-07-02\").getTime()&&_hacciErrorHandler._outputError(\"hacci-send: event17\",\"WARN\"),_hacciCallFunc(e)}catch(e){console.log(\"send error.:\",e);var i=\"\";if(e.message===_hacciLoopExceedMsg)i=_hacciLoopExceedMsg;else i=function(){return rs?rs.s?rs.s.kb?rs.s.kb:\"rs.s.kb is \"+(void 0===typeof rs.s.kb?\"undefined\":\"null\"):\"rs.s is \"+(void 0===typeof rs.s?\"undefined\":\"null\"):\"rs is \"+(void 0===typeof rs?\"undefined\":\"null\")}();_hacciErrorHandler._outputError(\"hacci-error:\"+i,\"WARN\")}}),300);");