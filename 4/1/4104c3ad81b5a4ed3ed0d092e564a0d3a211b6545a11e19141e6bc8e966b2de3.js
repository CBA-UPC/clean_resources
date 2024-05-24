!function(e,t){var n=t();"function"==typeof define&&define.amd?define([],n.Routing):"object"==typeof module&&module.exports?module.exports=n.Routing:(e.Routing=n.Routing,e.fos={Router:n.Router})}(this,function(){"use strict";ar t=Object.assign||n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?o=),r=function(){function r(t,n){e(this,r),this.context_=t||{base_url:"",prefix:"",host:"",port:"",scheme:"",locale:""},this.setRoutes(n||{})}return o(r,[{key:"setRoutingData",value:,{key:"setRoutes",value:,{key:"getRoutes",value:,{key:"setBaseUrl",value:function(e){this.context_.base_url=e}},{key:"getBaseUrl",value:function(){return this.context_.base_url}},{key:"setPrefix",value:function(e){this.context_.prefix=e}},{key:"setScheme",value:function(e){this.context_.scheme=e}},{key:"getScheme",value:function(){return this.context_.scheme}},{key:"setHost",value:function(e){this.context_.host=e}},{key:"getHost",value:function(){return this.context_.host}},{key:"setPort",value:function(e){this.context_.port=e}},{key:"getPort",value:function(){return this.context_.port}},{key:"setLocale",value:,{key:"getLocale",value:,{key:"buildQueryParams",value:function(e,t,o){var r=this,i=void 0,u=new RegExp(/\[\]$/);if(t instanceof Array)t.forEach(function(t,i){u.test(e)?o(e,t):r.buildQueryParams(e+"["+("object"===("undefined"==typeof t?"undefined":n(t))?i:"")+"]",t,o)});else if("object"===("undefined"==typeof t?"undefined":n(t)))for(i in t)this.buildQueryParams(e+"["+i+"]",t[i],o);else o(e,t)}},{key:"getRoute",value:function(e){var t=this.context_.prefix+e,n=e+"."+this.context_.locale,o=this.context_.prefix+e+"."+this.context_.locale,r=[t,n,o,e];for(var i in r)if(r[i]in this.routes_)return this.routes_[r[i]];throw new Error('The route "'+e+'" does not exist.')}},{key:"generate",value:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.getRoute(e),u=n||{},s=t({},u),c="",a=!0,l="",f="undefined"==typeof this.getPort()||null===this.getPort()?"":this.getPort();if(i.tokens.forEach(function(t){if("text"===t[0])return c=r.encodePathComponent(t[1])+c,void(a=!1);{if("variable"!==t[0])throw new Error('The token type "'+t[0]+'" is not supported.');var n=i.defaults&&t[3]in i.defaults;if(!1===a||!n||t[3]in u&&u[t[3]]!=i.defaults[t[3]]){var o=void 0;if(t[3]in u)o=u[t[3]],delete s[t[3]];else{if(!n){if(a)return;throw new Error('The route "'+e+'" requires the parameter "'+t[3]+'".')}o=i.defaults[t[3]]}var l=!0===o||!1===o||""===o;if(!l||!a){var f=r.encodePathComponent(o);"null"===f&&null===o&&(f=""),c=t[1]+f+c}a=!1}else n&&t[3]in s&&delete s[t[3]]}}),""===c&&(c="/"),i.hosttokens.forEach(function(e){var t=void 0;return"text"===e[0]?void(l=e[1]+l):void("variable"===e[0]&&(e[3]in u?(t=u[e[3]],delete s[e[3]]):i.defaults&&e[3]in i.defaults&&(t=i.defaults[e[3]]),l=e[1]+t+l))}),c=this.context_.base_url+c,i.requirements&&"_scheme"in i.requirements&&this.getScheme()!=i.requirements._scheme){var h=l||this.getHost();c=i.requirements._scheme+"://"+h+(h.indexOf(":"+f)>-1||""===f?"":":"+f)+c}else if("undefined"!=typeof i.schemes&&"undefined"!=typeof i.schemes[0]&&this.getScheme()!==i.schemes[0]){var p=l||this.getHost();c=i.schemes[0]+"://"+p+(p.indexOf(":"+f)>-1||""===f?"":":"+f)+c}else l&&this.getHost()!==l+(l.indexOf(":"+f)>-1||""===f?"":":"+f)?c=this.getScheme()+"://"+l+(l.indexOf(":"+f)>-1||""===f?"":":"+f)+c:o===!0&&(c=this.getScheme()+"://"+this.getHost()+(this.getHost().indexOf(":"+f)>-1||""===f?"":":"+f)+c);if(Object.keys(s).length>0){var d=void 0,y=[],v=function(e,t){t="function"==typeof t?t():t,t=null===t?"":t,y.push(r.encodeQueryComponent(e)+"="+r.encodeQueryComponent(t))};for(d in s)this.buildQueryParams(d,s[d],v);c=c+"?"+y.join("&")}return c}}],[{key:"getInstance",value:,{key:"setData",value:,{key:"customEncodeURIComponent",value:,{key:"encodePathComponent",value:,{key:"encodeQueryComponent",value:]),r}();r.Route,r.Context;var i=new r;return{Router:r,Routing:i}});