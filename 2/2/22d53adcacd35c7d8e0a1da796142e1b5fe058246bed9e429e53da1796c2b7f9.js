"use strict";(self.webpackChunkclubcast=self.webpackChunkclubcast||[]).push([[46124],{39026:function(e,t,r){r(86544),r(752),r(73964),r(76265),r(47522),r(99474);var n=r(42455),a=r(21838),i=r.n(a),s=r(65311),l=r.n(s),o=r(70211),d=r(55760),u=r(90964),c=r(74379),m=r(36277),y=r(47746),b=r(33756),p=r(84217),v=r(55709),h=r(31762),g=r(3018),f=r(40486),P=r(29219),k=r(71213),w=r(70540),E=r(87655),_=r(82369),I=r(58337);r(6071);st M="js--video-streamamg-loading",R="js--video-streamamg-error";t.Z=new class{constructor(){this.settings=i().clubcastStreamamg.clubcastPlayer,this.bundleObservable={},this.sessionState=null}embedPlayer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=D({},t),a=l()(e),i=a.attr("id"),s={drm:t.drm,entryid:t.entryid,ks:t.ks,skipks:t.skipks,entitlements:t.entitlements,is_live:t.is_live};const c=(0,_.lm)();if(this.settings.usePlaykit&&(r.playkit=!0),c._forcePlaykit?r.playkit=!0:c._forceIframe&&(r.playkit=!1),t.drm&&(r.playkit=!1),!i){let e=Math.random().toString(36).substr(2,8);i=`streamamg-video-${Number(Date.now())}-${e}`,a.attr("id",i)}let f=`${i}-player`,P=l()("<div></div>").attr("id",f);a.empty().append(P),this._showLoader(a),this._getPlayerJs(f,r,s);let k=new o.xQ,w=new o.xQ,E=w.pipe((0,m.P)((,{leading:!0,trailing:!0}),(0,y.zg)((),(0,y.zg)((e=>e instanceof Error?(0,d.D)([e]):this._getPlayerJs(f,r,e).pipe((0,b.j)((0,n.ZP)("CookieConsent",()),(0,p.q)(1),(0,y.zg)((t=>{let{hasConsent:n}=t;return this._observeEmbed(a,f,r,e,n("functional"),n("analytics"))}))))),(0,v.U)((e=>(u.z.schedule((),e))),(0,h._)(1),(0,g.x)());let I=E.subscribe();return I.add(this._trackPlayerEvents(E)),I.add(E.subscribe(()),I.add(this._sendIzSession(E,a)),w.next(s),{subscribechangeMedia(e,t,r,n){console.log("[Player] Change media request",e,t,r,n),w.next({entryid:e,entitlements:t,skipks:r,ks:n})},destroy}_observeKs(e){const t=D({},e);if(t.skipks)return(0,d.D)([t]);let r;return r=t.ks?(0,d.D)([t.ks]):this._getKsObservable(e),r.pipe((0,v.U)((),(0,f.K)((r=>(r instanceof E.r&&(r.embedResultData={requestedMedia:e,currentEntryId:null,currentMedia:null,currentMediaFinished:!1}),console.warn("[Player] KS request error",r,t),(0,d.D)([r])))))}_observeEmbed(e,t,r,n,a,i){return r.playkit?this._observePlaykitEmbed(e,t,r,n):this._observeIframeEmbed(e,t,r,n,a,i)}_observePlaykitEmbed(e,t,r,n){return new c.y((a=>{if(!e.kalturaPlayer){let a=this._createPlaykitEmbedOptions(t,r);const i=window.KalturaPlayer.setup(a);e.kalturaPlayer=i,console.log("[Player:Playkit] PlayKit embed",D(D({},a),{},{media:D({},n)}))}const i=e.kalturaPlayer;i.addEventListener(i.Event.Core.PLAYBACK_ENDED,(()=>{u.z.schedule((()=>{a.next(this._generatePlaykitEmbedResultData(e,n,{currentMediaFinished:!0}))}))})),i.addEventListener(i.Event.Core.MEDIA_LOADED,(()=>{const t=this._generatePlaykitEmbedResultData(e,n);a.next(t)})),i.addEventListener(i.Event.Core.ERROR,(r=>{console.warn("[Player:Iframe] Detected a player alert",r,t,n);const i=this._generatePlaykitEmbedResultData(e,n);a.next(new E.r(r,i))})),i.loadMedia({entryId:n.entryid,ks:n.ks})}))}_generatePlaykitEmbedResultData(e,t){var r,n,a;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=e.kalturaPlayer.getMediaConfig().sources;return D({requestedMedia:t,currentEntryId:s.id,currentMedia:{name:null===(r=s.metadata)||void 0===r?void 0:r.name,createdAt:null===(n=s.metadata)||void 0===n?void 0:n.createdAt,description:null===(a=s.metadata)||void 0===a?void 0:a.description},currentMediaFinished:!1},i)}_observeIframeEmbed(e,t,r,n,a,i){return new c.y((s=>{if(e.kalturaPlayer&&Boolean(e.isDRMPlayer)!=Boolean(n.drm)&&window.kWidget.destroy(t),e.kalturaPlayer){const t=e.kalturaPlayer;0,t.kUnbind("onChangeMedia.clubcast"),t.kBind("onChangeMedia.clubcast",(()=>{t.kUnbind("onChangeMedia.clubcast"),t.setKDPAttribute("servicesProxy.kalturaClient","ks",n.ks||""),s.next(this._generateIframeEmbedResultData(e,n))})),t.sendNotification("changeMedia",{entryId:n.entryid})}else{e.isDRMPlayer=n.drm;let l=this._createIframeEmbedOptions(t,r,n,a,i);l.readyCallback=()=>{const r=e.find(`#${t}`).get(0);e.kalturaPlayer=r,r.kBind("playerError.clubcast",(r=>{var a;if(null!==(a=r.samg)&&void 0!==a&&a.isRecovering)return void console.info("[Player:Iframe] Ingoring a StreamAMG recovering player alert",r,t,n);console.warn("[Player:Iframe] Detected a player alert",r,t,n);const i=this._generateIframeEmbedResultData(e,n);s.next(new E.r(r,i))}));const a=if(r.kBind("mediaReady.clubcast",a),r.kBind("playerPlayEnd.clubcast",(()=>{window.setTimeout((()=>{s.next(this._generateIframeEmbedResultData(e,n,{currentMediaFinished:!0}))}),200)})),!window.kWidget.isUiConfIdHTML5(l.uiconf_id))return console.log("[Player:Iframe] Determined that the flash player is preferred, and will end loading state immediately to allow a user action to unblock the component if necessary",t,n),void a()},console.log("[Player:Iframe] kWidget embed",D(D({},l),{},{flashvars:D({},l.flashvars)})),window.kWidget.embed(l)}return))}_generateIframeEmbedResultData(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=e.kalturaPlayer.evaluate("{mediaProxy.entry}");return D({requestedMedia:t,currentEntryId:n.id,currentMedia:{name:n.name,createdAt:n.createdAt,description:n.description},currentMediaFinished:!1},r)}_updatePlayerState(e,t){if(t instanceof Error){let r,n;return console.warn("[Player] Player state has received an error",t),t instanceof E.r?(r=t.type,n=`${R}-${r}`):(r="error",n=R),void e.addClass(n).removeClass(M)}e.addClass("js--video-streamamg-ready").removeClass(M)}_showLoadersendIzSession(e,t){let r=null;const n=e.subscribe((e=>{e instanceof Error||(r&&r.unsubscribe(),r=k.ZP.getSessionState().pipe((0,v.U)((e=>{let t=null;return e.data&&e.data.CurrentCustomerSession&&(t=e.data.CurrentCustomerSession.CustomerId),t}))).subscribe((e=>{t.kalturaPlayer.sendNotification?(t.kalturaPlayer.sendNotification("izsession",e),console.log("[Player:IzSession] Sent izsession",e)):console.warn("[Player:IzSession] IzSession not yet supported",e)})))}));return n.add((),n}_getPlayerJs(e,t,a){let i,s;return t.playkit?(i="playkit",s=r.e(73471).then(r.t.bind(r,40751,23))):(i=this._createIframeEmbedOptions(e,t,a).uiconf_id,s=(0,P.Z)(`https://open.http.mp.streamamg.com/p/${this.settings.partnerId}/sp/${this.settings.partnerId}00/embedIframeJs/uiconf_id/${i}/partner_id/${this.settings.partnerId}`)),this.bundleObservable[i]||(this.bundleObservable[i]=s.pipe((0,v.U)((()=>{t.playkit&&(0,n.z2)("PlayKit",window.KalturaPlayer)})),(0,h._)(1)),this.bundleObservable[i].connect()),this.bundleObservable[i].pipe((0,p.q)(1))}_createPlaykitEmbedOptions(e,t){let r={targetId:e,provider:{partnerId:this.settings.partnerId,env:{cdnUrl:"https://open.http.mp.streamamg.com/",serviceUrl:"https://open.http.mp.streamamg.com/api_v3"}},playback:{autoplay:!t.hasOwnProperty("autoplay")||t.autoplay},ui:{components:{seekbar:{thumbsWidth:100,thumbsHeight:56}},uiComponents:[]}};return"audio"===t.type&&(r.ui.hoverTimeout=0,r.ui.uiComponents.push({label:"MessagingComponent",presets:["Playback","Live"],container:"InteractiveArea",get:()=>(0,window.KalturaPlayer.ui.h)((0,n.ad)("KalturaPlayerUIAudioCover"))})),r}_createIframeEmbedOptions(e,t,r,n,a){let i={targetId:e,wid:`_${this.settings.partnerId}`,entry_id:r.entryid,flashvars:{ks:r.ks,streamerType:"auto",autoPlay:!t.hasOwnProperty("autoplay")||t.autoplay}};return r.drm?i.uiconf_id=this.settings.drmUiConfPlayerId:!0===r.is_live?i.uiconf_id=this.settings.liveUiConfPlayerId?this.settings.liveUiConfPlayerId:this.settings.uiConfPlayerId:i.uiconf_id=this.settings.uiConfPlayerId,n||(i.flashvars["volumeControl.useCookie"]=!1),a||(i.flashvars["googleAnalytics.plugin"]=!1),i}_getKsObservable(e){let t,r=!1;return e.entitlements?this.settings.userRoleBasedEntitlements&&e.entitlements.find((e=>this.settings.userRoleBasedEntitlements.includes(e)))&&(r=!0):r=!0,r&&(t=w.h.getJSON(`/api/v2/streamamg/session/${e.entryid}`).pipe((0,y.zg)((e=>{if(e.ks)return(0,d.D)([e.ks]);throw new Error("RBAC did not authorize the request")})),(0,f.K)((t=>(console.warn("[Player] RBAC entitlement check failure",t),k.ZP.getKSession(e.entryid)))))),t||(t=k.ZP.getKSession(e.entryid)),e.entitlements&&this.settings.roleBasedEntitlements&&e.entitlements.find(()&&(t=t.pipe((0,f.K)((e=>{throw e instanceof E.r&&e.type!==E.r.ERROR_LOGINREQUIRED&&(e=new E.r("missingrole")),e})))),t=t.pipe((0,h._)(1)),t.connect(),t}_trackPlayerEvents(e){let t=null,r=null,n=!1;function a(){var e;"hidden"===window.document.visibilityState&&r&&!n&&(n=!0,(0,I.Z)("video","play_incomplete",(null===(e=t.currentMedia)||void 0===e?void 0:e.name)||"",null,{id1:t.currentEntryId,duration:Math.round((Number(new Date)-r)/1e3)}))}window.document.addEventListener("visibilitychange",a);const i=e.subscribe((e=>{let a;if(a=e instanceof Error?e.embedResultData:e,t){if(a.currentEntryId===t.currentEntryId){var i;if(a.currentMediaFinished&&!n)n=!0,(0,I.Z)("video","play",(null===(i=t.currentMedia)||void 0===i?void 0:i.name)||"",null,{id1:t.currentEntryId,duration:Math.round((Number(new Date)-r)/1e3)});return}var s;n||(n=!0,(0,I.Z)("video","play_incomplete",(null===(s=t.currentMedia)||void 0===s?void 0:s.name)||"",null,{id1:t.currentEntryId,duration:Math.round((Number(new Date)-r)/1e3)}))}if(e instanceof Error){var l,o,d;if(e instanceof E.r)(0,I.Z)("video",`error_${e.type}`,(null===(l=e.embedResultData)||void 0===l||null===(l=l.currentMedia)||void 0===l?void 0:l.name)||"",null,{id1:null===(o=e.embedResultData)||void 0===o||null===(o=o.requestedMedia)||void 0===o?void 0:o.entryid});else(0,I.Z)("video","error",e.message,null,{id1:null===(d=t)||void 0===d?void 0:d.currentEntryId});return t=null,r=null,void(n=!1)}t=a,r=Number(new Date),n=!1}));return i.add((),i}}}}]);
//# sourceMappingURL=player.c5642dc3f8d3ebb98a2c.js.maption isValue(e){return e!==null&&e!==undefined}function _value(e){for(var t=2,n=e.length;t<n;t++)if(isValue(e[t]))return e[t];return null}function value(e,t){return isValue(e)?e:isValue(t)?t:_value(arguments)}function extendType(e,t){for(var n in t)startsWith(n,"$get_")?createPropertyGet(e,n.slice(5),t[n]):startsWith(n,"$set_")?createPropertySet(e,n.slice(5),t[n]):e[n]=t[n];return e}function parseBoolean(e){return e.toLowerCase()=="true"}function parseRegExp(e){if(e[0]=="/"){var t=e.lastIndexOf("/");if(t>1){var n=e.substring(1,t),r=e.substr(t+1);return new RegExp(n,r)}}return null}function parseNumber(e){return!e||!e.length?0:e.indexOf(".")>=0||e.indexOf("e")>=0||endsWith(e,"f")||endsWith(e,"F")?parseFloat(e):parseInt(e,10)}function parseDate(e){var t=Date.parse(e);return isNaN(t)?undefined:new Date(t)}function truncate(e){return e>=0?Math.floor(e):Math.ceil(e)}function now(){return new Date}function today(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function compareDates(e,t){return e===t?!0:isValue(e)&&isValue(t)?e.getTime()==t.getTime():!1}function _popStackFrame(e){if(!isValue(e.stack)||!isValue(e.fileName)||!isValue(e.lineNumber))return;var t=e.stack.split("\n"),n=t[0],r=e.fileName+":"+e.lineNumber;while(isValue(n)&&n.indexOf(r)===-1)t.shift(),n=t[0];var i=t[1];if(!isValue(i))return;var s=i.match(/@(.*):(\d+)$/);if(!isValue(s))return;t.shift(),e.stack=t.join("\n"),e.fileName=s[1],e.lineNumber=parseInt(s[2],10)}function error(e,t,n){var r=new Error(e);if(t)for(var i in t)r[i]=t[i];return n&&Object.defineProperty(r,"innerException",{value:n}),_popStackFrame(r),r}function fail(message){console.assert(!1,message),self.navigator&&eval("debugger;")}function paramsGenerator(e,t){return function(){var r=Array.prototype.slice,i=r.call(arguments,0,e);while(i.length<e)i.push(null);if(arguments.length==e+1&&Array.isArray(arguments[e]))i.push(arguments[e]);else{var s=r.call(arguments,e);i.push(s)}return t.apply(this,i)}}function namedFunction(e,t){return(new Function("fn","return function "+e+"(){ return fn.apply(this, arguments)}"))(t)}function Nullable(e){this.value=e}function createReadonlyProperty(e,t,n){return Object.defineProperty(e,t,{get:function(){return n},enumerable:!0}),n}function createPropertyGet(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:n})}function createPropertySet(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,set:n})}function defineProperty(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:n})}function initializeObject(e,t){if(!isValue(e)||!isValue(t))return e;for(var n in t)e[n]=t[n];return e}function string(e,t){return typeof t=="number"?t>1?(new Array(t+1)).join(e):e:Array.prototype.join.call(arguments,"")}function emptyString(e){return!e||!e.length}function whitespace(e){return emptyString(e)||!e.replace(/^\s*/,"").length}function compareStrings(e,t,n){return e=e||"",t=t||"",n?(e=e.toUpperCase(),t=t.toUpperCase()):0,e===t?0:e<t?-1:1}function trim(e,t){if(t||!String.prototype.trim){t=t?t.join(""):null;var n=t?new RegExp("^["+t+"]+|["+t+"]+$","g"):/^\s+|\s+$/g;return e.replace(n,"")}return e.trim()}function trimStart(e,t){var n=t?new RegExp("^["+t.join("")+"]+"):/^\s+/;return e.replace(n,"")}function trimEnd(e,t){var n=t?new RegExp("["+t.join("")+"]+$"):/\s+$/;return e.replace(n,"")}function startsWith(e,t){return emptyString(t)?!0:emptyString(e)||t.length>e.length?!1:e.substr(0,t.length)==t}function endsWith(e,t){return emptyString(t)?!0:emptyString(e)||t.length>e.length?!1:e.substr(-t.length)==t}function padLeft(e,t,n){return e.length<t?string(n||" ",t-e.length)+e:e}function padRight(e,t,n){return e.length<t?e+string(n||" ",t-e.length):e}function removeString(e,t,n){return!n||t+n>e.length?e.substr(0,t):e.substr(0,t)+e.substr(t+n)}function insertString(e,t,n){return n?t?e.substr(0,t)+n+e.substr(t):n+e:e}function replaceString(e,t,n){return e.split(t).join(n||"")}function StringBuilder(e){this._parts=isValue(e)&&e!==""?[e]:[],this.isEmpty=this._parts.length==0}typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(t,n){if(t===null||t===undefined)throw new TypeError("Cannot convert undefined or null to object");var r=Object(t);for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s!==null&&s!==undefined)for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=s[o])}return r},writable:!0,configurable:!0});var _modules={},_meta=[],_genericConstructorCache={},_classMarker="class",_interfaceMarker="interface",_typeNames=[Number,"Number",String,"String",Boolean,"Boolean",Array,"Array",Date,"Date",RegExp,"RegExp",Function,"Function"],removeAt=createFallbackFunction("removeAt",function(e,t){return t>=0?(e.splice(t,1),!0):!1}),removeItem=createFallbackFunction("remove",function(e,t){var n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}),contains=createFallbackFunction("contains",function(e,t){return e.indexOf(t)>=0}),insert=createFallbackFunction("insert",function(e,t,n){e.splice(t,0,n)}),clear=createFallbackFunction("clear",function(e){e.length=0}),addRange=createFallbackFunction("addRange",function(e,t){if(Array.isArray(t)){for(var n=0;n<t.length;++n)e.push(t[n]);return}while(t.moveNext())e.push(t.current)}),getItem=createFallbackFunction("get_item",function(e,t){return e[t]}),setItem=createFallbackFunction("set_item",function(e,t,n){return e[t]=n}),_nopEnumerator={current:null,moveNext:function(){return!1},reset:_nop},Queue$={clear:function(){this._items.length=0,this._offset=0,this.count=0},contains:function(e){for(var t=this._offset,n=this._items.length;t<=n;t++)if(this._items[t]===e)return!0;return!1},dequeue:function(){if(this.count){var e=this._items[this._offset];return++this._offset*2>=this._items.length&&_cleanQueue(this),this.count--,e}return undefined},enqueue:function(e){this._items.push(e),this.count++},getEnumerator:function(){return this._offset!=0&&_cleanQueue(this),new Enumerator(this._items)},peek:function(){return this._items.length?this._items[this._offset]:undefined}},Stack$={clear:function(){this._items.length=0,this.count=0},contains:function(e){for(var t=this.count-1;t>=0;t--)if(this._items[t]===e)return!0;return!1},getEnumerator:function(){return new Enumerator(this._items.reverse())},peek:function(){return this._items[this.count-1]},push:function(e){this._items.push(e),this.count++},pop:function(){return this.count?(this.count--,this._items.pop()):undefined}};createPropertyGet(DateTime,"Now",function(){return new Date}),createPropertyGet(DateTime,"Today",function(){var e=DateTime.Now;return e.setHours(0,0,0,0),e}),DateTime.Equals=function(e,t){var n=DateTime._parseIfString(e),r=DateTime._parseIfString(t);return n==null||r==null?compareDates(n,r):n.getTime()===r.getTime()},Date.prototype.equals=function(e){return DateTime.Equals(this,e)},DateTime.CompareTo=function(e,t){var n=DateTime._parseIfString(e),r=DateTime._parseIfString(t);if(n==null||r==null)throw new Error("Cannot compare null Dates");var i=n.getTime(),s=r.getTime();return i===s?0:i<s?-1:1},Date.prototype.compareTo=function(e){return DateTime.CompareTo(this,e)},createPropertyGet(Date.prototype,"Year",function(){return DateTime.GetYear(this)}),DateTime.GetYear=function(e){return e=DateTime._parseIfString(e),e.getFullYear()},createPropertyGet(Date.prototype,"Month",function(){return DateTime.GetMonth(this)}),DateTime.GetMonth=function(e){return e=DateTime._parseIfString(e),e.getMonth()+1},createPropertyGet(Date.prototype,"Day",function(){return DateTime.GetDay(this)}),DateTime.GetDay=function(e){return e=DateTime._parseIfString(e),e.getDate()},createPropertyGet(Date.prototype,"DayOfWeek",function(){return DateTime.GetDayOfWeek(this)}),DateTime.GetDayOfWeek=function(e){return e=DateTime._parseIfString(e),e.getDay()},createPropertyGet(Date.prototype,"Hour",function(){return DateTime.GetHours(this)}),DateTime.GetHours=function(e){return e=DateTime._parseIfString(e),e.getHours()},createPropertyGet(Date.prototype,"Minute",function(){return DateTime.GetMinutes(this)}),DateTime.GetMinutes=function(e){return e=DateTime._parseIfString(e),e.getMinutes()},createPropertyGet(Date.prototype,"Second",function(){return DateTime.GetSeconds(this)}),DateTime.GetSeconds=function(e){return e=DateTime._parseIfString(e),e.getSeconds()},createPropertyGet(Date.prototype,"Millisecond",function(){return DateTime.GetMilliseconds(this)}),DateTime.GetMilliseconds=function(e){return e=DateTime._parseIfString(e),e.getMilliseconds()},DateTime.AddMilliseconds=function(e,t){var n=DateTime._parseIfString(e);return n==null?new Date:new Date(t+n.getTime())},DateTime.AddSeconds=function(e,t){return DateTime.AddMilliseconds(e,t*1e3)},DateTime.AddMinutes=function(e,t){return DateTime.AddMilliseconds(e,t*6e4)},DateTime.AddHours=function(e,t){return DateTime.AddMilliseconds(e,t*36e5)},DateTime.AddDays=function(e,t){return DateTime.AddMilliseconds(e,t*864e5)},DateTime.ToLongDateString=function(e){return DateTime.ToStringFormatted(e,DateTime._getFormatter(culture.current.dtf.ld))},DateTime.ToLongTimeString=function(e){return DateTime.ToStringFormatted(e,DateTime._getFormatter(culture.current.dtf.lt))},DateTime.ToShortDateString=function(e){return DateTime.ToStringFormatted(e,DateTime._getFormatter(culture.current.dtf.sd))},DateTime.ToShortTimeString=function(e){return DateTime.ToStringFormatted(e,DateTime._getFormatter(culture.current.dtf.st))},DateTime.ToStringFormatted=function(e,t){return arguments.length===1?DateTime.ToString(e):(e=DateTime._parseIfString(e),format(culture.current,t,e))},DateTime.ToString=function(e){return e==null?"":DateTime._parseIfString(e).toString()},DateTime.Parse=function(e){return e==null?null:DateTime._parseIfString(e)},DateTime._getFormatter=function(e){return"{0:"+e+"}"},DateTime._parseIfString=function(e){if(typeOf(e)===Date)return e;if(typeOf(e)===String){var t=e;!endsWith(t,"z")&&!endsWith(t,"Z")&&(t+="Z");var n=new Date(t);return isNaN(n)&&(n=DateTime._manuallyParseDateFromJsonString(e)),n}return null},DateTime._manuallyParseDateFromJsonString=function(e){var t=e.split(new RegExp("\\D")),n=new Array(7);for(var r=0;r<7;++r)n[r]=t[r]==null?0:parseInt(t[r]);return new Date(Date.UTC(n[0],n[1]-1,n[2],n[3],n[4],n[5]))},Enum.prototype.toString=function(){return this._name},Enum.prototype.valueOf=function(){return this._name},Enum.map={},Enum.getValues=function(e){var t=Enum.map[e._name];return t&&Object.values(t.Keys)},Enum.getNames=function(e){var t=Enum.map[e._name];return t&&Object.keys(t.Keys)},Enum.getName=function(e,t){var n=Enum.map[e._name];return n&&n.Values[t]},Enum.hasFlag=function(e,t){return(e|t)===e},Enum.isDefined=function(e,t){var n=Enum.map[e._name];return isValue(n.Values[t])||isValue(n.Keys[t])},Enum.parse=function(e,t,n){var r=Enum.map[e._name];if(r&&n)for(var i in r.Keys)if(i.toLowerCase()==t.toLowerCase())return r.Keys[i];return r&&r.Keys[t]},EventArgs.Empty=new EventArgs;var _dateFormatRE=/'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g,_formatPlaceHolderRE=/(\{[^\}^\{]+\})/g,_formatters={};_formatters.Number=function(e,t,n){var r=n.nf,i="",s=-1;t.length>1&&(s=parseInt(t.substr(1)));var o=t.charAt(0);switch(o){case"d":case"D":i=parseInt(String(Math.abs(e))).toString(),s!=-1&&(i=padLeft(i,s,"0")),e<0&&(i="-"+i);break;case"x":case"X":i=parseInt(String(Math.abs(e))).toString(16),o=="X"&&(i=i.toUpperCase()),s!=-1&&(i=padLeft(i,s,"0"));break;case"e":case"E":s==-1?i=e.toExponential():i=e.toExponential(s),o=="E"&&(i=i.toUpperCase());break;case"f":case"F":case"n":case"N":s==-1&&(s=r.dd),i=e.toFixed(s).toString();if(s&&r.ds!="."){var u=i.indexOf(".");i=i.substr(0,u)+r.ds+i.substr(u+1)}if(o=="n"||o=="N")i=commaFormatNumber(i,r.gw,r.ds,r.gs);break;case"c":case"C":s==-1&&(s=r.curDD),i=Math.abs(e).toFixed(s).toString();if(s&&r.curDS!="."){var u=i.indexOf(".");i=i.substr(0,u)+r.curDS+i.substr(u+1)}i=commaFormatNumber(i,r.curGW,r.curDS,r.curGS),e<0?i=t(n,r.curNP,i):i=t(n,r.curPP,i);break;case"p":case"P":s==-1&&(s=r.perDD),i=(Math.abs(e)*100).toFixed(s).toString();if(s&&r.perDS!="."){var u=i.indexOf(".");i=i.substr(0,u)+r.perDS+i.substr(u+1)}i=commaFormatNumber(i,r.perGW,r.perDS,r.perGS),e<0?i=t(n,r.perNP,i):i=t(n,r.perPP,i)}return i},_formatters.Date=function(e,t,n){if(t=="iso")return e.toISOString();if(t.charAt(0)=="i"){var r="String";switch(t){case"id":r="DateString";break;case"it":r="TimeString"}return n==neutralCulture?e["to"+r]():e["toLocale"+r]()}var i=n.dtf;if(t.length==1)switch(t){case"f":t=i.ld+" "+i.st;break;case"F":t=i.dt;break;case"d":t=i.sd;break;case"D":t=i.ld;break;case"t":t=i.st;break;case"T":t=i.lt;break;case"g":t=i.sd+" "+i.st;break;case"G":t=i.sd+" "+i.lt;break;case"R":case"r":i=neutralCulture.dtf,t=i.gmt;break;case"u":t=i.uni;break;case"U":t=i.dt,e=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());break;case"s":t=i.sort}t.charAt(0)=="%"&&(t=t.substr(1));var s=new StringBuilder;_dateFormatRE.lastIndex=0;for(;;){var o=_dateFormatRE.lastIndex,u=_dateFormatRE.exec(t);s.append(t.slice(o,u?u.index:t.length));if(!u)break;var a=u[0],f=a;switch(a){case"dddd":f=i.day[e.getDay()];break;case"ddd":f=i.sday[e.getDay()];break;case"dd":f=padLeft(e.getDate().toString(),2,"0");break;case"d":f=e.getDate();break;case"MMMM":f=i.mon[e.getMonth()];break;case"MMM":f=i.smon[e.getMonth()];break;case"MM":f=padLeft((e.getMonth()+1).toString(),2,"0");break;case"M":f=e.getMonth()+1;break;case"yyyy":f=e.getFullYear();break;case"yy":f=padLeft((e.getFullYear()%100).toString(),2,"0");break;case"y":f=(e.getFullYear()%100).toString();break;case"h":case"hh":f=(e.getHours()%12).toString(),f?a=="hh"&&(f=padLeft(f.toString(),2,"0")):f="12";break;case"HH":f=padLeft(e.getHours().toString(),2,"0");break;case"H":f=e.getHours();break;case"mm":f=padLeft(e.getMinutes().toString(),2,"0");break;case"m":f=e.getMinutes();break;case"ss":f=padLeft(e.getSeconds().toString(),2,"0");break;case"s":f=e.getSeconds();break;case"t":case"tt":f=e.getHours()<12?i.am:i.pm,a=="t"&&(f=f.charAt(0));break;case"fff":f=padLeft(e.getMilliseconds().toString(),3,"0");break;case"ff":f=padLeft(e.getMilliseconds().toString(),3).substr(0,2);break;case"f":f=padLeft(e.getMilliseconds().toString(),3).charAt(0);break;case"z":var l=e.getTimezoneOffset()/60;f=(l>=0?"-":"+")+Math.floor(Math.abs(l));break;case"zz":case"zzz":var l=e.getTimezoneOffset()/60;f=(l>=0?"-":"+")+padLeft(Math.floor(Math.abs(l)).toString(),2,"0"),a=="zzz"&&(f+=i.ts+padLeft(Math.abs(e.getTimezoneOffset()%60).toString(),2,"0"));break;default:f.charAt(0)=="'"&&(f=f.substr(1,f.length-2).replace(/\\'/g,"'"))}s.append(f)}return s.toString()};var makeGenericType=paramsGenerator(1,function(e,t){return!isValue(e)||!e.IsGenericTypeDefinition?null:e.makeGenericType(t)}),neutralCulture={name:"",nf:{nan:"NaN",neg:"-",pos:"+",negInf:"-Infinity",posInf:"Infinity",gw:[3],dd:2,ds:".",gs:",",per:"%",perGW:[3],perDD:2,perDS:".",perGS:",",perPP:"{0} %",perNP:"-{0} %",cur:"$",curGW:[3],curDD:2,curDS:".",curGS:",",curNP:"(${0})",curPP:"${0}"},dtf:{am:"AM",pm:"PM",ds:"/",ts:":",gmt:"ddd, dd MMM yyyy HH:mm:ss 'GMT'",uni:"yyyy-MM-dd HH:mm:ssZ",sort:"yyyy-MM-ddTHH:mm:ss",dt:"dddd, MMMM dd, yyyy h:mm:ss tt",ld:"dddd, MMMM dd, yyyy",sd:"M/d/yyyy",lt:"h:mm:ss tt",st:"h:mm tt",day0:0,day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],sday:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],mday:["Su","Mo","Tu","We","Th","Fr","Sa"],mon:["January","February","March","April","May","June","July","August","September","October","November","December",""],smon:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]}},currentCulture={name:"en-us",dtf:neutralCulture.dtf,nf:neutralCulture.nf},culture={neutral:neutralCulture,current:currentCulture};Guid.NewGuid=function(){var e=_guidGetRand(),t=_guidGetRand(),n=_guidGetRand(),r=_guidGetRand(),i=_guidHexMap[e&255]+_guidHexMap[e>>8&255]+_guidHexMap[e>>16&255]+_guidHexMap[e>>24&255]+"-"+_guidHexMap[t&255]+_guidHexMap[t>>8&255]+"-"+_guidHexMap[t>>16&15|64]+_guidHexMap[t>>24&255]+"-"+_guidHexMap[n&63|128]+_guidHexMap[n>>8&255]+"-"+_guidHexMap[n>>16&255]+_guidHexMap[n>>24&255]+_guidHexMap[r&255]+_guidHexMap[r>>8&255]+_guidHexMap[r>>16&255]+_guidHexMap[r>>24&255];return i};var Guid$={},_guidHexMap=new Array(256);for(var i=0;i<256;++i)_guidHexMap[i]=(i<16?"0":"")+i.toString(16);var Lazy$={$get_IsValueCreated:function(){return this.isValueCreated},$get_Value:function(){return this.isValueCreated||(this.value=this.factory(),this.isValueCreated=!0),this.value}},extend=Object.assign;Nullable.prototype.valueOf=function(){return this.value},Nullable.prototype.toString=function(){return this.value};var Nullable$={getValueOrDefault:function(e){return this.value||e},$get_Value:function(){return this.value},$get_HasValue:function(){return this.value!==undefined}},StringBuilder$={append:function(e){return isValue(e)&&e!==""&&(this._parts.push(e),this.isEmpty=!1),this},appendLine:function(e){return this.append(e),this.append("\r\n"),this.isEmpty=!1,this},clear:function(){this._parts=[],this.isEmpty=!0},toString:function(e){return this._parts.join(e||"")}},$module=module("ss",null,{Attribute:defineClass(function(){},{},[],null,[]),IServiceProvider:defineInterface(IServiceProvider),IDisposable:defineInterface(IDisposable),IEnumerable:defineInterface(IEnumerable),IEquatable_$1:defineInterface(IEquatable_$1),IComparable_$1:defineInterface(IComparable_$1),ICloneable:defineInterface(ICloneable),IEnumerable_$1:defineInterface(IEnumerable_$1,[IEnumerable]),IEnumerator:defineInterface(IEnumerator),IEnumerator_$1:defineInterface(IEnumerator_$1,[IEnumerator]),ICollection:defineInterface(ICollection,[IEnumerable]),ICollection_$1:defineInterface(ICollection_$1,[IEnumerable_$1,IEnumerable]),IReadOnlyCollection_$1:defineInterface(IReadOnlyCollection_$1,[IEnumerable_$1,IEnumerable]),IComparer:defineInterface(IComparer),IComparer_$1:defineInterface(IComparer_$1),IEqualityComparer:defineInterface(IEqualityComparer),IEqualityComparer_$1:defineInterface(IEqualityComparer_$1),Dictionary_$2:defineClass(Dictionary_$2,{},[],null,[IDictionary,IDictionary_$2,IReadOnlyDictionary_$2]),IDictionary:defineInterface(IDictionary,[IEnumerable]),IDictionary_$2:defineInterface(IDictionary_$2,[IEnumerable_$1,IEnumerable]),IReadOnlyDictionary_$2:defineInterface(IReadOnlyDictionary_$2,[IEnumerable_$1,IEnumerable]),List_$1:defineClass(List_$1,Array,[],null,[IList,IList_$1,IReadOnlyList_$1]),IList:defineInterface(IList,[ICollection]),IList_$1:defineInterface(IList_$1,[ICollection_$1]),IReadOnlyList_$1:defineInterface(IReadOnlyList_$1,[IReadOnlyCollection_$1]),EventArgs:defineClass(EventArgs,{},[],null),CancelEventArgs:defineClass(CancelEventArgs,{},[],null),StringBuilder:defineClass(StringBuilder,StringBuilder$,[],null),Stack:defineClass(Stack,Stack$,[],null),Queue:defineClass(Queue,Queue$,[],null),Guid:defineClass(Guid,Guid$,[],null),DateTime:defineClass(DateTime,{},[],null,[IEquatable_$1,IComparable_$1]),Lazy:defineClass(Lazy,Lazy$,[],null),Nullable:defineClass(Nullable,Nullable$,[],null),Enum:defineClass(Enum,{},[],null),MemberType:new Enum("MemberType",{all:191,constructor:1,custom:64,event:2,field:4,method:8,nestedType:128,property:16,typeInfo:32})});return extend($module.api,{version:"1.15.1",isValue:isValue,value:value,extend:extend,keys:keys,values:values,keyCount:keyCount,keyExists:keyExists,clearKeys:clearKeys,enumerate:enumerate,array:toArray,toArray:toArray,remove:removeItem,"boolean":parseBoolean,regexp:parseRegExp,number:parseNumber,date:parseDate,truncate:truncate,now:now,today:today,compareDates:compareDates,error:error,string:string,emptyString:emptyString,whitespace:whitespace,format:format,setFormatter:setFormatter,commaFormatNumber:commaFormatNumber,compareStrings:compareStrings,startsWith:startsWith,endsWith:endsWith,padLeft:padLeft,padRight:padRight,trim:trim,trimStart:trimStart,trimEnd:trimEnd,insertString:insertString,removeString:removeString,replaceString:replaceString,bind:bind,baseBind:baseBind,bindAdd:bindAdd,bindSub:bindSub,bindExport:bindExport,paramsGenerator:paramsGenerator,namedFunction:namedFunction,createPropertyGet:createPropertyGet,createPropertySet:createPropertySet,createReadonlyProperty:createReadonlyProperty,defineProperty:defineProperty,copyArray:copyArray,module:module,modules:_modules,dependency:dependency,registerMetadataImporter:registerMetadataImporter,importMetadata:importMetadata,isClass:isClass,isInterface:isInterface,typeOf:typeOf,type:type,typeName:typeName,canCast:canCast,safeCast:safeCast,canAssign:canAssign,instanceOf:instanceOf,baseProperty:baseProperty,defineClass:defineClass,defineInterface:defineInterface,getConstructorParams:getConstructorParams,createInstance:paramsGenerator(1,createInstance),getMembers:getMembers,getGenericTemplate:getGenericTemplate,makeGenericType:makeGenericType,culture:culture,fail:fail,contains:contains,insert:insert,clear:clear,addRange:addRange,getItem:getItem,setItem:setItem,removeAt:removeAt,removeItem:removeItem,addKeyValue:addKeyValue,createGenericType:createGenericType,getGenericConstructor:getGenericConstructor,getTypeArgument:getTypeArgument,makeMappedGenericTemplate:makeMappedGenericTemplate,initializeObject:initializeObject})}function _export(){var e=_ss();typeof exports=="object"?e.extend(exports,e):global.ss=e}global.define?global.define("ss",[],_ss):_export()})(this)
;

