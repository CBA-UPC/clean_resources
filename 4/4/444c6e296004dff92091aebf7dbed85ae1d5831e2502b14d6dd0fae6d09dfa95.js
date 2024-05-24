window.BEIXF=[function(e,t,n){"use strict";(function(e){var t=n(1),r=n(14),o=n(15),a=n(0),i=n(4);ar l={};window.jsElementReady=(0,r.observeComponent)(window.BEJSSDKObserver=window.BEJSSDKObserver||{}),(0,o.linkBlockGeneratorComponent)(window.BELinkBlockGenerator||{}),function(r){r.ENVIRONMENT_PRODUCTION;var o=null,u=null,c=null,d=null,h=null,f=null,p=!0,g=!1,m=null,_=!1,v=[],E=[];ule=null,r.startTime=0,r.connectTime=0,r.PRODUCT_NAME="be_ixf",r.CLIENT_NAME="js_sdk",r.CLIENT_VERSION="1.5.9",r.API_VERSION="1.0.0",r.ENVIRONMENT_CONFIG="sdk.environment",r.CHARSET_CONFIG="sdk.charset",r.API_ENDPOINT_CONFIG="api.endpoint",r.ACCOUNT_ID_CONFIG="sdk.account",r.CONNECT_TIMEOUT_CONFIG="sdk.connectTimeout",r.SOCKET_TIMEOUT_CONFIG="sdk.socketTimeout",r.CRAWLER_CONNECT_TIMEOUT_CONFIG="sdk.crawlerConnectTimeout",r.CRAWLER_SOCKET_TIMEOUT_CONFIG="sdk.crawlerSocketTimeout",r.LOG_LEVEL_CONFIG="loglevel",r.WHITELIST_PARAMETER_LIST_CONFIG="whitelist.parameter.list",r.FDAPI_PARAMETER_LIST_CONFIG="forcedirectapi.parameter.list",r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG="requestparameters.caseinsensitive",r.CRAWLER_USER_AGENTS_CONFIG="crawler.useragents",r.CANONICAL_PROTOCOL_CONFIG="canonical.protocol",r.CANONICAL_HOST_CONFIG="canonical.host",r.CANONICAL_PAGE_CONFIG="canonical.page",r.ENVIRONMENT_PRODUCTION="production",r.ENVIRONMENT_STAGING="staging",r.ENVIRONMENT_TESTING="testing",r.DEFAULT_CHARSET="UTF-8",r.DEFAULT_DIRECT_API_ENDPOINT="https://ixfd2-api.bc0a.com",r.DEFAULT_API_ENDPOINT="https://ixfd2-api.bc0a.com",r.DEFAULT_ACCOUNT_ID="0",r.DEFAULT_CONNECT_TIMEOUT="1000",r.DEFAULT_SOCKET_TIMEOUT="1000",r.DEFAULT_CRAWLER_CONNECT_TIMEOUT="2000",r.DEFAULT_CRAWLER_SOCKET_TIMEOUT="2000",r.DEFAULT_WHITELIST_PARAMETER_LIST="",r.DEFAULT_FD_PARAMETER_LIST="ixf-api|ixf",r.DEFAULT_CRAWLER_USER_AGENTS="google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|brightedge",r.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE=!1,r.construct=function(o){var a;r.startTime=(new Date).getTime(),s(a={},r.ENVIRONMENT_CONFIG,r.ENVIRONMENT_PRODUCTION),s(a,r.API_ENDPOINT_CONFIG,r.DEFAULT_API_ENDPOINT),s(a,r.CHARSET_CONFIG,r.DEFAULT_CHARSET),s(a,r.ACCOUNT_ID_CONFIG,r.DEFAULT_ACCOUNT_ID),s(a,r.CONNECT_TIMEOUT_CONFIG,r.DEFAULT_CONNECT_TIMEOUT),s(a,r.SOCKET_TIMEOUT_CONFIG,r.DEFAULT_SOCKET_TIMEOUT),s(a,r.CRAWLER_CONNECT_TIMEOUT_CONFIG,r.DEFAULT_CRAWLER_CONNECT_TIMEOUT),s(a,r.CRAWLER_SOCKET_TIMEOUT_CONFIG,r.DEFAULT_CRAWLER_SOCKET_TIMEOUT),s(a,r.CRAWLER_USER_AGENTS_CONFIG,r.DEFAULT_CRAWLER_USER_AGENTS),s(a,r.WHITELIST_PARAMETER_LIST_CONFIG,r.DEFAULT_WHITELIST_PARAMETER_LIST),s(a,r.FDAPI_PARAMETER_LIST_CONFIG,r.DEFAULT_FD_PARAMETER_LIST),s(a,r.LOG_LEVEL_CONFIG,i.logLevelConstants.WARNING),s(a,r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG,r.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE),u=a,u=t.SDKUtils.simpleAssign(u,o),i.Logger.initLogger(parseInt(u[r.LOG_LEVEL_CONFIG]));var l=n(16).enableMarvel,v={};if(v=JSON.parse('{"data-customerid":"f00000000290274"}'),document.currentScript)for(var E=document.currentScript.attributes,b=["src","async","defer","type"],T=0;T<E.length;T++){var N=E[T];if(-1===b.indexOf(N.nodeName)){var C=N.nodeValue;"true"!==C&&"false"!==C||(C="true"===C),v[N.nodeName]=C}}l(v),c=document.location.href,g=u[r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG];var A=t.SDKUtils.getParameterDictionaryFromUrl(c);null!=A["ixf-endpoint"]&&(p=!1,(A["ixf-endpoint"].endsWith("api.bc0a.com")||A["ixf-endpoint"].endsWith("brightedge.com"))&&(u[r.API_ENDPOINT_CONFIG]=A["ixf-endpoint"])),i.Logger.debug("SDK config:",u),u[r.ENVIRONMENT_CONFIG],i.Logger.debug("force direct api list parameter="+u[r.FDAPI_PARAMETER_LIST_CONFIG]);var I=u[r.WHITELIST_PARAMETER_LIST_CONFIG];i.Logger.debug("white list parameter="+I);var O=I.split("|"),L=u[r.CONNECT_TIMEOUT_CONFIG];t.SDKUtils.userAgentMatchesRegex(navigator.userAgent,u[r.CRAWLER_USER_AGENTS_CONFIG])&&(L=u[r.CRAWLER_CONNECT_TIMEOUT_CONFIG],i.Logger.debug("Detected browser using timeout="+L)),d=t.SDKUtils.normalizeUrl(c,O,g),u[r.CANONICAL_PAGE_CONFIG]?d=u[r.CANONICAL_PAGE_CONFIG]:u[r.CANONICAL_HOST_CONFIG]&&(i.Logger.debug("Got in canonical host"),d=t.SDKUtils.overrideHostInURL(d,u[r.CANONICAL_HOST_CONFIG])),u[r.CANONICAL_PROTOCOL_CONFIG]&&(d=t.SDKUtils.overrideProtocolInURL(d,u[r.CANONICAL_PROTOCOL_CONFIG]));var y=t.SDKUtils.getPageHash(d);if(p){var S=u[r.FDAPI_PARAMETER_LIST_CONFIG].split("|");for(var R in A)if(-1!==S.indexOf(R)){u[r.API_ENDPOINT_CONFIG]=r.DEFAULT_DIRECT_API_ENDPOINT,i.Logger.debug("Using overridden api endpoint");break}}var M=u[r.API_ENDPOINT_CONFIG],D=u[r.ACCOUNT_ID_CONFIG],U="/api/ixf/"+r.API_VERSION+"/get_capsule/"+D+"/"+y;if(h=M+U+"?client="+encodeURIComponent(r.CLIENT_NAME)+"&client_version="+encodeURIComponent(r.CLIENT_VERSION)+"&orig_url="+encodeURIComponent(c)+"&base_url="+encodeURIComponent(d)+"&user_agent="+encodeURIComponent(navigator.userAgent),i.Logger.debug("Page_hash normalized_url="+d+", page_hash="+y+", api_url="+h),f=M+U,e.env.DEV&&(h=e.env.DEV_DOMAIN+y,f=h),_=t.SDKUtils.isLegacy()){var x=document.location.protocol.substring(0,document.location.protocol.length-1);h=t.SDKUtils.overrideProtocolInURL(h,x),m=new window.XDomainRequest}else m=new XMLHttpRequest;r.IS_SPA?(m.onerror=r.xhrErrorHandler,m.open("GET",h,!1),m.send(null),r.processCapsule(m.responseText)):(m.onload=r.xhrHandler,m.onerror=r.xhrErrorHandler,m.open("GET",h,!0),m.timeout=L,m.send(null))},r.xhrHandler=r.xhrErrorHandler=r.processCapsule=r.getNodes=r.getPageGroupNodes=r.setPageGroupNodes=r.getPageGroupNodesConfig=l[r.ACCOUNT_ID_CONFIG]="f00000000290274",l[r.WHITELIST_PARAMETER_LIST_CONFIG]="ixf",l[r.LOG_LEVEL_CONFIG]=2,window.BEJSSDK.construct(l)}(window.BEJSSDK=window.BEJSSDK||{})}).call(this,n(7))},);
//# sourceMappingURL=autopilot_sdk.js.map