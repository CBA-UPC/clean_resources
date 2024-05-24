!this,function(){return [function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AWTPropertyType||(t.AWTPropertyType={})),t.AWTPiiKind||(t.AWTPiiKind={})),function(e){e[e.NotSet=0]="NotSet",e[e.GenericContent=1]="GenericContent"}(t.AWTCustomerContentKind||(t.AWTCustomerContentKind={})),t.AWTEventPriority||(t.AWTEventPriority={})),function(e){e[e.NonRetryableStatus=1]="NonRetryableStatus",e[e.QueueFull=3]="QueueFull"}(t.AWTEventsDroppedReason||(t.AWTEventsDroppedReason={})),t.AWTEventsRejectedReason||(t.AWTEventsRejectedReason={}))},function(e,t,i){"use strict";unction r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(I,}function o(e){return"string"==typeof e}function s(e){return"number"==typeof e}ction c(){return null===R&&(R="undefined"!=typeof navigator&&Boolean(navigator.sendBeacon)),R}function p(){return null===C&&(C="undefined"!=typeof Uint8Array&&!w()&&!v()),C}function f(e){return!(!s(e)||!(e>=1&&e<=3||5===e))}function l(e,i){if(!t.PropertyNameRegex.test(e)||void 0===i||null===i||""===i)return null;if(o(i)||s(i)||a(i))i={value:i,type:W.AWTPropertyType.Unspecified};else if(void 0===i.value||null===i.value||""===i.value||!o(i.value)&&!s(i.value)&&!a(i.value))return null;return i.type=m(i.value,i.type),i.type?i.pii>0&&i.cc>0?null:i.pii?S(i.pii)?i:null:i.cc?E(i.cc)?i:null:i:null}function d(e){return e.getUTCFullYear()+"-"+y(e.getUTCMonth()+1)+"-"+y(e.getUTCDate())+"T"+y(e.getUTCHours())+":"+y(e.getUTCMinutes())+":"+y(e.getUTCSeconds())+"."+T(e.getUTCMilliseconds())+"Z"}function g(){if(null===b){var e=new XMLHttpRequest;b=void 0===e.withCredentials&&"undefined"!=typeof XDomainRequest}return b}ction m(e,t){return P(t)&&t!==W.AWTPropertyType.Unspecified?t===W.AWTPropertyType.String&&"string"==typeof e?t:t!==W.AWTPropertyType.Double&&t!==W.AWTPropertyType.Int64||"number"!=typeof e?t===W.AWTPropertyType.Boolean&&"boolean"==typeof e?t:void 0:t===W.AWTPropertyType.Int64&&e%1!=0?null:t:A(e)}function A(e){switch(typeof e){case"string":return W.AWTPropertyType.String;case"boolean":return W.AWTPropertyType.Boolean;case"number":return W.AWTPropertyType.Double}return W.AWTPropertyType.Unspecified}function S(e){return!!(s(e)&&e>=0&&e<=13)}function E(e){return!!(s(e)&&e>=0&&e<=1)}function P(e){return!!(s(e)&&e>=0&&e<=4)}function w(){if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.toLowerCase();if((e.indexOf("safari")>=0||e.indexOf("firefox")>=0)&&e.indexOf("chrome")<0)return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0});var L=i(4),W=i(0),I=/[xy]/g,_=621355968e5,O=1e4;t.EventNameAndTypeRegex=/^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,t.EventNameDotRegex=/\./g,t.PropertyNameRegex=/^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,t.StatsApiKey="a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";var R=null,C=null,b=null;t.numberToBondInt64=n,t.newGuid=r,t.isString=o,t.isNumber=s,t.isBoolean=a,t.msToTicks=u,t.getTenantId=h,t.isBeaconsSupported=c,t.isUint8ArrayAvailable=p,t.isPriority=f,t.sanitizeProperty=l,t.getISOString=d,t.useXDomainRequest=g,t.isReactNative=v},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.addNotificationListener=e.removeNotificationListener=e.eventsSent=function(e){for(var t=this,i=this,n=0;n<this.listeners.length;++n)!function(n){i.listeners[n].eventsSent&&setTimeout(function(){return t.listeners[n].eventsSent(e)},0)}(n)},e.eventsDropped=function(e,t){for(var i=this,n=this,r=0;r<this.listeners.length;++r)!function(r){n.listeners[r].eventsDropped&&setTimeout(function(){return i.listeners[r].eventsDropped(e,t)},0)}(r)},e.eventsRetrying=function(e){for(var t=this,i=this,n=0;n<this.listeners.length;++n)!n)},e.eventsRejected=function(e,t){for(var i=this,n=this,r=0;r<this.listeners.length;++r)!r)},e.listeners=[],e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(14),r=i(0),o=i(28),s=i(10),a=i(5),u=i(11),h=i(1),c=function(){function e(){}return e.setEventsHandler=function(e){this.t=e},e.getEventsHandler=function(){return this.t},e.scheduleTimer=e.initialize=function(e){var t=this;this.y=!0,this.T=e,this.t=new o.default(e.collectorUri,e.cacheMemorySizeLimitInNumberOfEvents,e.httpXHROverride),this.g(),s.default.initialize(function(e,i){if(t.T.canSendStatEvent("awt_stats")){var n=new a.default("awt_stats");n.setEventPriority(r.AWTEventPriority.High),n.setProperty("TenantId",i);for(var o in e)e.hasOwnProperty(o)&&n.setProperty(o,e[o].toString());u.default.getLogger(h.StatsApiKey).logEvent(n)}})},e.setTransmitProfile=e.loadTransmitProfiles=function(e){this.S();for(var t in e)if(e.hasOwnProperty(t)){if(3!==e[t].length)continue;for(var i=2;i>=0;--i)if(e[t][i]<0){for(var n=i;n>=0;--n)e[t][n]=-1;break}for(var i=2;i>0;--i)if(e[t][i]>0&&e[t][i-1]>0){var r=e[t][i-1]/e[t][i];e[t][i-1]=Math.ceil(r)*e[t][i]}this.r[t]=e[t]}},e.sendEvent=e.flush=e.pauseTransmission=e.resumeTransmision=e.flushAndTeardown=e.backOffTransmission=e.clearBackOff=e.S=e.clearTimeout=e.h=e.g=e.y=!1,e.a=n.AWT_REAL_TIME,e.u=-1,e.f=0,e._=!1,e.v=0,e.A=0,e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){eturn e.prototype.setName=function(e){this.C.name=e},e.prototype.getName=function(){return this.C.name},e.prototype.setType=function(e){this.C.type=e},e.prototype.getType=function(){return this.C.type},e.prototype.setTimestamp=function(e){this.C.timestamp=e},e.prototype.getTimestamp=function(){return this.C.timestamp},e.prototype.setEventPriority=e.prototype.getEventPriority=function(){return this.C.priority},e.prototype.setProperty=function(e,t,i){void 0===i&&(i=r.AWTPropertyType.Unspecified);var o={value:t,type:i,pii:r.AWTPiiKind.NotSet,cc:r.AWTCustomerContentKind.NotSet};if(null===(o=n.sanitizeProperty(e,o)))return void delete this.C.properties[e];this.C.properties[e]=o},e.prototype.setPropertyWithPii=function(e,t,i,o){void 0===o&&(o=r.AWTPropertyType.Unspecified);var s={value:t,type:o,pii:i,cc:r.AWTCustomerContentKind.NotSet};if(null===(s=n.sanitizeProperty(e,s)))return void delete this.C.properties[e];this.C.properties[e]=s},e.prototype.setPropertyWithCustomerContent=function(e,t,i,o){void 0===o&&(o=r.AWTPropertyType.Unspecified);var s={value:t,type:o,pii:r.AWTPiiKind.NotSet,cc:i};if(null===(s=n.sanitizeProperty(e,s)))return void delete this.C.properties[e];this.C.properties[e]=s},e.prototype.getPropertyMap=e.prototype.getEvent=function(){return this.C},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r="MicrosoftApplicationsTelemetryDeviceId",o="MicrosoftApplicationsTelemetryFirstLaunchTime",s={MSIE:"MSIE",CHROME:"Chrome",FIREFOX:"Firefox",SAFARI:"Safari",EDGE:"Edge",ELECTRON:"Electron",SKYPE_SHELL:"SkypeShell",PHANTOMJS:"PhantomJS",OPERA:"Opera"},a={WINDOWS:"Windows",MACOSX:"Mac OS X",WINDOWS_PHONE:"Windows Phone",WINDOWS_RT:"Windows RT",IOS:"iOS",ANDROID:"Android",LINUX:"Linux",UNKNOWN:"Unknown"},u={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i},h={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},c=function(){function e(){}return e.addPropertyStorageOverride=e.autoCollect=e.checkAndSaveDeviceId=function(e){e&&(this.x(r)!==e&&(this.L(r,e),this.L(o,n.getISOString(new Date))),this.F(this.x(o)))},e.k=function(){var e=this.x(r);e?this.F(this.x(o)):(e=n.newGuid(),this.checkAndSaveDeviceId(e)),this.O.setDeviceId(e)},e.D=e.N=e.q=function(e){return this.j("OPR/",e)?s.OPERA:this.j(s.PHANTOMJS,e)?s.PHANTOMJS:this.j(s.EDGE,e)?s.EDGE:this.j(s.ELECTRON,e)?s.ELECTRON:this.j(s.CHROME,e)?s.CHROME:this.j("Trident",e)?s.MSIE:this.j(s.FIREFOX,e)?s.FIREFOX:this.j(s.SAFARI,e)?s.SAFARI:this.j(s.SKYPE_SHELL,e)?s.SKYPE_SHELL:"Unknown"},e.F=e.j=e.H=function(e,t){return t===s.MSIE?this.K(e):this.G(t,e)},e.K=function(e){var t=e.match(new RegExp(s.MSIE+" ([\\d,.]+)"));if(t)return t[1];var i=e.match(new RegExp("rv:([\\d,.]+)"));return i?i[1]:void 0},e.G=function(e,t){e===s.SAFARI&&(e="Version");var i=t.match(new RegExp(e+"/([\\d,.]+)"));return i?i[1]:"Unknown"},e.Q=function(e){return e.match(u.WINPHONE)?a.WINDOWS_PHONE:e.match(u.WINRT)?a.WINDOWS_RT:e.match(u.IOS)?a.IOS:e.match(u.ANDROID)?a.ANDROID:e.match(u.LINUX)?a.LINUX:e.match(u.OSX)?a.MACOSX:e.match(u.WIN)?a.WINDOWS:"Unknown"},e.z=function(e,t){return t===a.WINDOWS?this.V(e,"Windows NT"):t===a.ANDROID?this.V(e,t):t===a.MACOSX?this.X(e):"Unknown"},e.V=e.X=function(e){var t=e.match(new RegExp(a.MACOSX+" ([\\d,_,.]+)"));if(t){var i=t[1].replace(/_/g,".");if(i){var n=this.Z(i);return n?i.split(n)[0]:i}}return"Unknown"},e.Z=e.L=e.x=function(e){if(this.b)return this.b.getProperty(e)||"";if(this.U){e+="=";for(var t=document.cookie.split(";"),i=0;i<t.length;i++){for(var n=t[i],r=0;" "===n.charAt(r);)r++;if(n=n.substring(r),0===n.indexOf(e))return n.substring(e.length,n.length)}}return""},e.M=e.R=!1,e.U="undefined"!=typeof document&&void 0!==document.cookie,e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(21),r=i(0),o=i(2),s=i(1),a=function(){function e(){}return e.getPayloadBlob=function(e,t){var i,a=new n.IO.MemoryStream,u=new n.CompactBinaryProtocolWriter(a);u.te(n.ne.ie,3,null),u.re(t,n.ne.oe,n.ne.se);for(var h in e)if(e.hasOwnProperty(h)){u.ae(h);var c=e[h];u.ue(1,n.ne.de),u.te(n.ne.oe,2,null),u.ae("act_default_source"),u.te(n.ne.oe,5,null),u.ae(s.newGuid()),u.te(n.ne._e,6,null),u.le(s.numberToBondInt64(Date.now())),u.te(n.ne.se,8,null);var p=a.ce().length+1;u.ue(e[h].length,n.ne.de);for(var f=a.ce().length-p,l=0;l<c.length;++l){var d=a.ce().length;if(this.writeEvent(c[l],u),a.ce().length-d>2936012)o.default.eventsRejected([c[l]],r.AWTEventsRejectedReason.SizeLimitExceeded),c.splice(l--,1),a.ce().splice(d),this.pe(c.length,a,f,p);else if(a.ce().length>2936012){a.ce().splice(d),i||(i={}),e[h]=c.splice(0,l),i[h]=c,this.pe(e[h].length,a,f,p);break}}u.fe(!1)}return u.fe(!1),{payloadBlob:a.ce(),remainingRequest:i}},e.pe=e.writeEvent=function(e,t){t.te(n.ne.oe,1,null),t.ae(e.id),t.te(n.ne._e,3,null),t.le(s.numberToBondInt64(e.timestamp)),t.te(n.ne.oe,5,null),t.ae(e.type),t.te(n.ne.oe,6,null),t.ae(e.name);var i={},o=0,a={},u=0,h={},c=0,p={},f=0,l={},d=0,g={},v=0;for(var y in e.properties)if(e.properties.hasOwnProperty(y)){var T=e.properties[y];if(T.cc>0)g[y]=T,v++;else if(T.pii>0)l[y]=T,d++;else switch(T.type){case r.AWTPropertyType.String:i[y]=T.value,o++;break;case r.AWTPropertyType.Int64:a[y]=T.value,u++;break;case r.AWTPropertyType.Double:h[y]=T.value,c++;break;case r.AWTPropertyType.Boolean:p[y]=T.value,f++}}if(o){t.te(n.ne.ie,13,null),t.re(o,n.ne.oe,n.ne.oe);for(var y in i)if(i.hasOwnProperty(y)){var m=i[y];t.ae(y),t.ae(m.toString())}}if(d){t.te(n.ne.ie,30,null),t.re(d,n.ne.oe,n.ne.de);for(var y in l)if(l.hasOwnProperty(y)){var T=l[y];t.ae(y),t.te(n.ne.ye,1,null),t.Te(1),t.te(n.ne.ye,2,null),t.Te(T.pii),t.te(n.ne.oe,3,null),t.ae(T.value.toString()),t.fe(!1)}}if(f){t.te(n.ne.ie,31,null),t.re(f,n.ne.oe,n.ne.ge);for(var y in p)if(p.hasOwnProperty(y)){var m=p[y];t.ae(y),t.me(m)}}if(u){t.te(n.ne.ie,33,null),t.re(u,n.ne.oe,n.ne._e);for(var y in a)if(a.hasOwnProperty(y)){var m=a[y];t.ae(y),t.le(s.numberToBondInt64(m))}}if(c){t.te(n.ne.ie,34,null),t.re(c,n.ne.oe,n.ne.Se);for(var y in h)if(h.hasOwnProperty(y)){var m=h[y];t.ae(y),t.Ae(m)}}if(v){t.te(n.ne.ie,36,null),t.re(v,n.ne.oe,n.ne.de);for(var y in g)if(g.hasOwnProperty(y)){var T=g[y];t.ae(y),t.te(n.ne.ye,1,null),t.Te(T.cc),t.te(n.ne.oe,2,null),t.ae(T.value.toString()),t.fe(!1)}}t.fe(!1)},e.base64Encode=function(e){return n.ve.Ie(e)},e}();t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(6),o=i(12),s=i(13),a=i(3),u=i(2),h=i(7),c=function(){function e(){}return e.initialize=e.getSemanticContext=e.flush=function(e){this.we&&!this.be&&a.default.flush(e)},e.flushAndTeardown=e.pauseTransmission=function(){this.we&&!this.be&&a.default.pauseTransmission()},e.resumeTransmision=e.setTransmitProfile=function(e){this.we&&!this.be&&a.default.setTransmitProfile(e)},e.loadTransmitProfiles=e.setContext=e.setContextWithPii=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),o.default.logManagerContext.setPropertyWithPii(e,t,i,r)},e.setContextWithCustomerContent=e.getLogger=e.addNotificationListener=function(e){u.default.addNotificationListener(e)},e.removeNotificationListener=function(e){u.default.removeNotificationListener(e)},e.Ce=function(e){e.collectorUri&&(this.T.collectorUri=e.collectorUri),e.cacheMemorySizeLimitInNumberOfEvents>0&&(this.T.cacheMemorySizeLimitInNumberOfEvents=e.cacheMemorySizeLimitInNumberOfEvents),e.httpXHROverride&&e.httpXHROverride.sendPOST&&(this.T.httpXHROverride=e.httpXHROverride),e.propertyStorageOverride&&e.propertyStorageOverride.getProperty&&e.propertyStorageOverride.setProperty&&(this.T.propertyStorageOverride=e.propertyStorageOverride),e.userAgent&&(this.T.userAgent=e.userAgent),e.disableCookiesUsage&&(this.T.disableCookiesUsage=e.disableCookiesUsage),e.canSendStatEvent&&(this.T.canSendStatEvent=e.canSendStatEvent),e.enableAutoUserSession&&"undefined"!=typeof window&&window.addEventListener&&(this.T.enableAutoUserSession=e.enableAutoUserSession)},e.Oe={},e.we=!1,e.be=!1,e.T={collectorUri:"https://browser.pipe.aria.microsoft.com/Collector/3.0/",cacheMemorySizeLimitInNumberOfEvents:1e4,disableCookiesUsage:!1,canSendStatEvent:,e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(6),o=i(5),s=i(1),a=i(10),u=i(2),h=i(3),c=i(12),p=i(15),f=i(8),l=i(7),d=function(){eturn e.prototype.setContext=e.prototype.setContextWithPii=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),this.De.setPropertyWithPii(e,t,i,r)},e.prototype.setContextWithCustomerContent=e.prototype.getSemanticContext=function(){return this.O},e.prototype.logEvent=e.prototype.logSession=e.prototype.getSessionId=function(){return this.Le},e.prototype.logFailure=e.prototype.logPageView=e.prototype.Me=e.xe=function(e,t){if(t){t instanceof o.default&&(t=t.getEvent()),t.name&&(e.name=t.name),t.priority&&(e.priority=t.priority);for(var i in t.properties)t.properties.hasOwnProperty(i)&&(e.properties[i]=t.properties[i])}},e.Fe=e.Ue=function(e,t){return e.name&&s.isString(e.name)?(e.name=e.name.toLowerCase(),e.name=e.name.replace(s.EventNameDotRegex,"_"),e.type&&s.isString(e.type)?e.type=e.type.toLowerCase():e.type="custom",s.EventNameAndTypeRegex.test(e.name)&&s.EventNameAndTypeRegex.test(e.type)?((!s.isNumber(e.timestamp)||e.timestamp<0)&&(e.timestamp=(new Date).getTime()),e.properties||(e.properties={}),this.He(e,t.getPropertyMap()),this.He(e,c.default.logManagerContext.getPropertyMap()),this.Qe(e,"EventInfo.InitId",this.ze(e.apiKey)),this.Qe(e,"EventInfo.Sequence",this.je(e.apiKey)),this.Qe(e,"EventInfo.SdkVersion",p.FullVersionString),this.Qe(e,"EventInfo.Name",e.name),this.Qe(e,"EventInfo.Time",new Date(e.timestamp).toISOString()),s.isPriority(e.priority)||(e.priority=n.AWTEventPriority.Normal),void this.Ke(e)):void u.default.eventsRejected([e],n.AWTEventsRejectedReason.InvalidEvent)):void u.default.eventsRejected([e],n.AWTEventsRejectedReason.InvalidEvent)},e.He=e.Qe=e.Ke=function(e){h.default.sendEvent(e)},e.ke=function(e,t,i){var n=e;if(n.id=s.newGuid(),n.apiKey=t,n.properties=n.properties||{},i)for(var r in n.properties)n.properties.hasOwnProperty(r)&&(n.properties[r]=s.sanitizeProperty(r,n.properties[r]),null===n.properties[r]&&delete n.properties[r]);return n},e.ze=e.je=e.Ge={},e.qe={},e}();t.default=d},function(e,t,i){"use strict";function n(e){for(var t=[],i=0;i<e.length;++i){var n=e.charCodeAt(i);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}function r(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[],n=e.length%3,r=0,o=e.length-n;r<o;r+=3){var s=(e[r]<<16)+(e[r+1]<<8)+e[r+2];i.push(s))}switch(n){case 1:var s=e[e.length-1];i.push(t.charAt(s>>2)),i.push(t.charAt(s<<4&63)),i.push("==");break;case 2:var a=(e[e.length-2]<<8)+e[e.length-1];i.push(t.charAt(a>>10)),i.push(t.charAt(a>>4&63)),i.push(t.charAt(a<<2&63)),i.push("=")}return i.join("")}function o(e){for(var t=[];4294967168&e;)t.push(127&e|128),e>>>=7;return t.push(127&e),t}function s(e){for(var t=e.low,i=e.high,n=[];i||4294967168&t;)n.push(127&t|128),t=(127&i)<<25|t>>>7,i>>>=7;return n.push(127&t),n}function a(e){if(f.BrowserChecker.Ze()){var t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e,!0);for(var i=[],n=0;n<8;++n)i.push(t.getUint8(n));return i}return p.FloatUtils.Je(e,!0)}function u(e){return(e=c.Number.B(e))<<1^e>>31}function h(e){var t=e.low,i=e.high,n=i<<1|t>>>31,r=t<<1;2147483648&i&&(n=~n,r=~r);var o=new c.UInt64("0");return o.low=r,o.high=n,o}Object.defineProperty(t,"__esModule",{value:!0});var c=i(4),p=i(19),f=i(22);t.Ye=n,t.Ie=r,t.he=o,t.$e=s,t.et=a,t.tt=u,t.it=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.Je=function(e,t){if(!e)return t?this.nt:this.rt;var i=t?11:8,n=t?52:23,r=(1<<i-1)-1,o=1-r,s=r,a=e<0?1:0;e=Math.abs(e);for(var u=Math.floor(e),h=e-u,c=2*(r+2)+n,p=new Array(c),f=0;f<c;)p[f++]=0;for(f=r+2;f&&u;)p[--f]=u%2,u=Math.floor(u/2);for(f=r+1;f<c-1&&h>0;)h*=2,h>=1?(p[++f]=1,--h):p[++f]=0;for(var l=0;l<c&&!p[l];)l++;var d=r+1-l,g=l+n;if(p[g+1]){for(f=g;f>l&&(p[f]=1-p[f],!p);--f);f===l&&++d}if(d>s||u)return a?t?this.ot:this.st:t?this.at:this.ut;if(d<o)return t?this.nt:this.rt;if(t){var v=0;for(f=0;f<20;++f)v=v<<1|p[++l];for(var y=0;f<52;++f)y=y<<1|p[++l];v|=d+r<<20,v=a<<31|2147483647&v;var T=[255&y,y>>8&255,y>>16&255,y>>>24,255&v,v>>8&255,v>>16&255,v>>>24];return T}var m=0;for(f=0;f<23;++f)m=m<<1|p[++l];m|=d+r<<23,m=a<<31|2147483647&m;var T=[255&m,m>>8&255,m>>16&255,m>>>24];return T},e.rt=[0,0,0,0],e.nt=[0,0,0,0,0,0,0,0],e.ut=[0,0,128,127],e.st=[0,0,128,255],e.at=[0,0,0,0,0,0,240,127],e.ot=[0,0,0,0,0,0,240,255],e}();t.FloatUtils=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.yt=!0,this.Tt=!0,this.gt=!0,this.mt="use-collector-delta",this.St=!1}return e.prototype.allowRequestSending=e.prototype.shouldAddClockSkewHeaders=function(){return this.Tt},e.prototype.getClockSkewHeaderValue=e.prototype.setClockSkew=e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.shouldRetryForStatus=e.getMillisToBackoffForRetry=function(e){var t=0,i=Math.floor(1200*Math.random())+2400;return t=Math.pow(4,e)*i,Math.min(t,12e4)},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(9),o=i(26),s=i(24),a=i(23),u=i(15),h=i(1),c=i(2),p=i(3),f="POST",l=function(){function e(e,t,i,n){var r=this;this.Bt=e,this.wt=i,this.Ct=n,this.bt="?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version="+u.FullVersionString,this.Ot=new s.default,this._=!1,this.Rt=new a.default,this.Dt=!1,this.Nt=0,h.isUint8ArrayAvailable()||(this.bt+="&content-encoding=base64"),this.bt=t+this.bt,this.Ct||(this.Dt=!h.isReactNative(),this.Ct={sendPOST:function(e,t,i,n,o,s){if(h.useXDomainRequest()){var a=new XDomainRequest;a.open(f,e),a.onload=function(){o(200,null)},a.onerror=function(){n(400,null)},a.ontimeout=a.send(t)}else if(h.isReactNative())fetch(e,{body:t,method:f}).then(.catch(;else{var u=new XMLHttpRequest;u.open(f,e,!s),u.onload=function(){o(u.status,r.Mt(u.getAllResponseHeaders()))},u.onerror=function(){n(u.status,r.Mt(u.getAllResponseHeaders()))},u.ontimeout=u.send(t)}}})}return e.prototype.hasIdleConnection=e.prototype.sendQueuedRequests=e.prototype.isCompletelyIdle=e.prototype.teardown=e.prototype.pause=e.prototype.resume=e.prototype.removeQueuedRequests=e.prototype.sendSynchronousRequest=e.prototype.Ut=function(e,t,i,o){var s=this;if(void 0===o&&(o=!1),this._)return this.Nt--,void this.wt.addBackRequest(e);var a=0,u="";for(var p in e)e.hasOwnProperty(p)&&(this.Ot.isTenantKilled(p)?(c.default.eventsRejected(e[p],n.AWTEventsRejectedReason.KillSwitch),delete e[p]):(u.length>0&&(u+=","),u+=p,a++));if(a>0){var f=r.default.getPayloadBlob(e,a);f.remainingRequest&&this.Bt.push(f.remainingRequest);var l=this.bt+"&x-apikey="+u+"&client-time-epoch-millis="+Date.now().toString();this.Rt.shouldAddClockSkewHeaders()&&(l=l+"&time-delta-to-apply-millis="+this.Rt.getClockSkewHeaderValue());var d=void 0;d=h.isUint8ArrayAvailable()?new Uint8Array(f.payloadBlob):r.default.base64Encode(f.payloadBlob);for(var p in e)if(e.hasOwnProperty(p))for(var g=0;g<e[p].length;++g)e[p][g].sendAttempt>0?e[p][g].sendAttempt++:e[p][g].sendAttempt=1;if(this.Dt&&i&&h.isBeaconsSupported()&&navigator.sendBeacon(l,d))return;this.Ct.sendPOST(l,d,function(n,r){s.kt(n,r,e,a,u,t,i,o)},function(n,r){s.kt(n,r,e,a,u,t,i,o)},i||o)}else i||this.xt(null,{},i,o)},e.prototype.kt=e.prototype.xt=function(e,t,i,r){e&&p.default.clearBackOff();for(var o in t)t.hasOwnProperty(o)&&(e?c.default.eventsSent(t[o]):c.default.eventsDropped(t[o],n.AWTEventsDroppedReason.NonRetryableStatus));this.Nt--,r||i||this.sendQueuedRequests()},e.prototype.Mt=e}();t.default=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(27),o=i(3),s=i(25),a=i(2),u=500,h=function(){function e(e,t,i){this.Lt=t,this.Ft=!1,this.qt=[],this.Ht=!1,this._=!1,this.Qt=0,this.It=[],this.zt={},this.zt[n.AWTEventPriority.High]=[],this.zt[n.AWTEventPriority.Normal]=[],this.zt[n.AWTEventPriority.Low]=[],this.jt(),this.Kt=new s.default(this.It,u),this.Gt=new r.default(this.It,e,this,i)}return e.prototype.addEvent=function(e){e.priority===n.AWTEventPriority.Immediate_sync?this.Gt.sendSynchronousRequest(this.Kt.addEventToBatch(e),e.apiKey):this.Qt<this.Lt?this.Vt(e):this.Xt(e.priority)?this.Vt(e):a.default.eventsDropped([e],n.AWTEventsDroppedReason.QueueFull)},e.prototype.sendEventsForPriorityAndAbove=e.prototype.hasEvents=e.prototype.addBackRequest=e.prototype.teardown=e.prototype.uploadNow=e.prototype.pauseTransmission=e.prototype.resumeTransmission=e.prototype.shouldDropEventsOnPause=e.prototype.Yt=e.prototype.jt=e.prototype.Vt=e.prototype.Xt=e.prototype.Zt=e.prototype.Jt=e.prototype.$t=e}();t.default=h},)});var StandaloneAriaLogger;!function(e){var t=function(){eturn t.Initialize=function(t,i){if(!e.Logger.ariaLogger&&t.ariaTenant&&t.ariaCollectorUrl){var n={setProperty:getProperty:,r={enableAutoUserSession:!1,collectorUri:t.ariaCollectorUrl,propertyStorageOverride:t.cookieConsentRequired?n:null,disableCookiesUsage:t.cookieConsentRequired};if(t.cookieConsentRequired&&document&&document.cookie&&e.Logger.ariaCookies.forEach(function(t){document.cookie=t+e.Logger.removeCookieString}),e.Logger.ariaLogger=AWTLogManager.initialize(t.ariaTenant,r),e.Logger.ariaLogger){if(e.Logger.ariaLogger.setContext("CorpNet",t.corpNet),e.Logger.ariaLogger.setContext("CorrelationId",t.correlationId),e.Logger.ariaLogger.setContext("DevEnvironment",t.devEnvironment),e.Logger.ariaLogger.setContext("DeploymentEnvironment",t.deploymentEnvironment),e.Logger.ariaLogger.setContext("Geo",t.geoName),e.Logger.ariaLogger.setContext("RequestOrigin",t.requestOrigin),e.Logger.ariaLogger.setContext("SessionId",t.sessionId),e.Logger.ariaLogger.setContext("TestTraffic",t.testTraffic),e.Logger.ariaLogger.setContext("ServerBuildDate",t.serverBuildDate),e.Logger.ariaLogger.setContext("ServerBuildId",t.serverBuildId),e.Logger.ariaLogger.setContext("Workload",t.workload),e.Logger.ariaLogger.setContext("DomainOrigin",t.domainOrigin),t.features&&t.features.length>0?t.flights&&t.flights.length>0?e.Logger.ariaLogger.setContext("Flights",t.flights+","+t.features):e.Logger.ariaLogger.setContext("Flights",t.features):e.Logger.ariaLogger.setContext("Flights",t.flights),t.authTypeString&&t.tenantId){e.Logger.ariaLogger.setContext("AuthType",t.authTypeString),e.Logger.ariaLogger.setContext("AuthVer",t.authVersion);var o=t.puid,s=AWTUserIdType.Unknown;o?"OrgId"===t.authTypeString?s=AWTUserIdType.OrgIdPUID:"MSA"===t.authTypeString&&(s=AWTUserIdType.MSAPUID):o="Unknown",e.Logger.ariaLogger.setContext("EcsRing",t.ecsRing),e.Logger.ariaLogger.getSemanticContext().setUserId(o,AWTPiiKind.NotSet,s),e.Logger.ariaLogger.setContext("UserInfo.OMSTenantId",t.tenantId)}t.wrapperVersion&&e.Logger.ariaLogger.setContext("WrapperVersion",t.wrapperVersion),t.appWorkloadType&&e.Logger.ariaLogger.setContext("AppWorkloadType",t.appWorkloadType),t.browserName&&t.browserVersion&&(AWTLogManager.getSemanticContext().setDeviceBrowserName(t.browserName),AWTLogManager.getSemanticContext().setDeviceBrowserVersion(t.browserVersion)),window.channel&&e.Logger.ariaLogger.setContext("Channel",window.channel),window.ringId&&e.Logger.ariaLogger.setContext("Ring",window.ringId),window.hostSessionId&&e.Logger.ariaLogger.setContext("HostSessionId",window.hostSessionId),e.Logger.StartSession(),e.Logger.EndSessionOnUnload(i),e.Logger.FlushQueuedEvents()}}},t.EndSession=function(t,i){if(e.Logger.ariaLogger&&e.Logger.sessionActive){if(e.Logger.sessionActive=!1,!window.disableLogs){var n=e.Logger.GetSessionProperties();e.Logger.ariaLogger.logSession(AWTSessionState.Ended,n)}i?AWTLogManager.flushAndTeardown():t&&AWTLogManager.flush(null)}},t.LogEvent=function(t,i,n,r){if(void 0===r&&(r=0),e.Logger.ariaLogger)e.Logger.sessionActive||e.Logger.StartSession(),e.Logger.LogAriaEvent(t,i,r,n);else{var o={streamName:t,eventName:i,eventParams:n||{},metrics:[],securityThreshold:r};window.queuedEvents||(window.queuedEvents=[]),window.queuedEvents.push(o)}},t.LogUnauthClick=function(t,i){var n={ViewType:t,ElementId:i||"Unknown"};e.Logger.LogEvent("unauth_click",null,n)},t.LogUnauthPageView=function(t){var i={ViewType:t};e.Logger.LogEvent("unauth_page_view",null,i)},t.LogBootError=function(t,i,n){var r={};n&&(r.resourceUrl=n),i&&(r.details=i.replace(this.emailRegex,"email_removed").replace(this.localFileRegex,"file_removed").replace(this.searchQueryRegex,"$1query_removed")),e.Logger.LogEvent("App_Error",t,r)},t.LogAppBundleError=function(t){var i=e.Logger.GetCDNResourceDetails(t);e.Logger.LogBootError("App_Bundle_Parsing_Error",JSON.stringify(i))},t.EndSessionOnUnload=function(t){var i=window.addEventListener("beforeunload",i),window.addEventListener("pagehide",i)},t.StartSession=function(){if(!window.disableLogs){var t=e.Logger.GetSessionProperties();e.Logger.ariaLogger.logSession(AWTSessionState.Started,t)}e.Logger.sessionActive=!0},t.GetSessionProperties=function(){var e=new AWTEventProperties;return window.prelaunchMode&&e.setProperty("PrelaunchMode","true"),e.setProperty("LoggerId","Standalone"),e},t.LogAriaEvent=function(t,i,n,r){var o=e.Logger.GetAppSecurityLevel(),s=n||0,a=i&&i.indexOf("Error")>-1||r&&r.Error&&"OK"!==r.Error;if(!(s>o||window.disableLogs&&!a)){var u=e.Logger.SetAriaProps(r||{});u.setName(t),i&&u.setProperty(e.Logger.eventNameProperty,i),u.setProperty("AppSecurityLevel",o),window.prelaunchMode&&u.setProperty("PrelaunchMode","true"),"Performance_Dump"===t&&void 0!==window.startedFromServiceWorker&&u.setProperty("CachedPage",window.startedFromServiceWorker.toString()),e.Logger.ariaLogger.logEvent(u)}},t.GetCDNResourceDetails=function(e){var t=[];if(performance&&performance.getEntriesByType){var i=performance.getEntriesByType("resource");if(i)for(var n=0;n<i.length;n++){var r=i[n];if(("link"===r.initiatorType||"script"===r.initiatorType)&&void 0!==r.transferSize&&void 0!==r.decodedBodySize&&r.name&&r.name.indexOf(e)>=0){var o=r.name.split("/"),s=o.length>0?o[o.length-1]:"",a=r.transferSize,u=r.decodedBodySize;t.push({name:s,tSize:a,dSize:u})}}}return t},t.FlushQueuedEvents=function(){if(window.queuedEvents){for(var t=0;t<window.queuedEvents.length;t++){var i=window.queuedEvents[t];e.Logger.LogAriaEvent(i.streamName,i.eventName,i.securityThreshold,i.eventParams)}window.queuedEvents=[]}},t.SetAriaProps=function(e){var t=new AWTEventProperties;if(e)for(var i in e)e.hasOwnProperty(i)&&t.setProperty(i,e[i]);return t},t.GetAppSecurityLevel=t.setProperty=t.getProperty=t.emailRegex=new RegExp("[a-zA-Z0-9_\\-\\.]+(@|%40|%2540)[a-zA-Z0-9_\\-\\.]+\\.[a-zA-Z]{2,63}","gm"),t.localFileRegex=new RegExp("file(:|%3A|%253A).*","gim"),t.searchQueryRegex=new RegExp("([&?]q=)(.+?)(?=[&].*| |, |$)","gmi"),t.eventNameProperty="EventName",t.propertyMap=new Map,t.ariaCookies=["MicrosoftApplicationsTelemetryDeviceId","MicrosoftApplicationsTelemetryFirstLaunchTime"],t.removeCookieString="=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.sessionActive=!1,t}();e.Logger=t}(StandaloneAriaLogger||(StandaloneAriaLogger={}));