var _mpevt=_mpevt||[];(function(w,d,u){if(typeof EtappTracker!="undefined"&&EtappTracker){}else{_mpevt=w._mpevt||[];var t=666,_i={},_useTimer,_self=this,_e=encodeURIComponent||escape,_OBU,_async,_asyncTimer;function _rdate(c){var b=new Date;b.setTime(b.getTime()+c*864e5);return b.toGMTString()}function _gCookie(c,ctx){if(c.substring(0,3)=="mp_"){}else{if(ctx!=undefined){c="mp_"+ctx+"_"+c}else{c="mp_"+c}}var b=document.cookie,a=0;if(b){for(b=b.split("; ");a<b.length;a++){b[a]=b[a].split("=",2);if(unescape(b[a][0])==c){return unescape(b[a][1])}}}return null}function _sCookie(c,b,a){var g,d=["expires","path","domain","secure"],e=d.length,f;a=typeof a=="object"&&a!=null?a:{};g=escape(c)+"="+escape(b);if(typeof a.domain=="undefined"){a.domain="."+location.hostname.match(/([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)[:0-9]*$/)[1]}if(typeof a.path=="undefined"){a.path="/"}if(a){for(;--e;){if(typeof(f=a[d[e]])!="undefined"){g+="; "+(d[e]=="secure"?d[e]:d[e]=="expires"?isNaN(f)?f:_rdate(f):d[e]+"="+f)}}}document.cookie=g;return _gCookie(c)==b}function _rCookie(c){return!_sCookie(c,"",{domain:null,path:null,expires:-1})}unction _run(again){var fn=_mpevt.shift();if(typeof fn=="function"){if(_mpevt.length&&(typeof again!="boolean"||!again)){_async(_run,0)}fn()}else if(fn){function reverseString(str){return str.split("").reverse("").join("")}ar fa=fn.shift(),reversedFa=reverseString(fa),dot=reversedFa.indexOf("."),prefix=dot>-1?unReverseString(reversedFa.substring(dot+1)):"",postfix=dot>-1?unReverseString(reversedFa.substring(0,dot)):"",a=_i[prefix];a=a?a.methods:{};try{(a.methods||mpAnalytics(prefix))[postfix].apply(_self,fn)}catch(e){}if(_mpevt.length&&(typeof again!="boolean"||!again)){_async(_run,0)}}}function EtappEvent(action,type,cookiename,id,maxcookiecount,context,o){"use strict";this.action=action;this.type=type;this.cookiename=cookiename;this.maxcookiecount=maxcookiecount;this.id=id;this.context=context}EtappEvent.prototype={constructor:EtappEvent,rdata:function(){"use strict";var p="";if(this.action){p+="&action="+this.action}if(this.type){p+="&type="+this.type}if(this.id){p+="&id="+this.id}if(this.context){if(this.context!=""){p+="&context="+this.context}}if(this.cookiename){p+="&cookiename="+this.cookiename}if(this.maxcookiecount){p+="&maxcookiecount="+this.maxcookiecount}if(this.data){p+="&data="+this.data}if(p.charAt(0)==="&"){return p.slice(1)}return p}};if(w.addEventListener){_OBU=function(){while(_mpevt.length){_run()}removeEventListener("beforeunload",_OBU,false);removeEventListener("message",_run,false)};addEventListener("beforeunload",_OBU,false);addEventListener("message",_run,false)}else if(w.attachEvent){_OBU=function(){while(_mpevt.length){_run()}detachEvent("onbeforeunload",_OBU);detachEvent("onmessage",_run,false)};attachEvent("onbeforeunload",_OBU);attachEvent("onmessage",_run,false)}else{_useTimer=true}if(!_useTimer&&w.postMessage&&(!w.VBArray||d.querySelector||d.dMode)){_async=else{_useTimer=true}if(_mpevt.push.toString&&_mpevt.push.toString().indexOf("_mpevt")==-1){_mpevt._mpevtpush=_mpevt.push;_mpevt.push=function(){_mpevt._mpevtpush.apply(_mpevt,arguments);_async(_run,0)}}if(!_async||_useTimer||(!_mpevt.push.toString||_mpevt.push.toString().indexOf("_mpevt")==-1)){_useTimer=true;_async=setTimeout;_asyncTimer=function(){if(_mpevt.length){_run(true)}setTimeout(_asyncTimer,_mpevt.length?10:150)}}mpAnalytics=function(_ID){var noIDs=0;if(!_ID){_ID="";noIDs=1}if(!_i[_ID]){var _SITE_ID=0,_SUID=0,_UID=0,_TenantID=0,_ContextID="",_noIDs=noIDs,_URL="https://ads.trafficjunky.net/rt";var methods={myhttpReqCreate:function(w){var req=w.XDomainRequest?new XDomainRequest:xhr();function xhr(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}return req},_http_send_request:function(method,url,data,fcallback,headers,async){"use strict";if(method==="GET"){if(fcallback&&typeof fcallback!=="function"){throw"callback shall be a function"}var newUrl=url;newUrl+="?";newUrl+=data;var img1;(img1=new Image(1,1)).src=newUrl;if(fcallback){fcallback()}}else{var i,req;if(async==="undefined"||async===null||typeof async!=="boolean"){async=true}req=myhttpReqCreate(window);if(typeof method!=="string"&&(method!=="POST"||method!=="GET")){throw"method request shall be 'POST' or 'GET'"}if(fcallback&&typeof fcallback!=="function"){throw"callback shall be a function"}if(fcallback){req.onreadystatechange=fcallback}if(method==="GET"){url+="?";url+=data;data=null}req.open(method,url,async);if(req.setRequestHeader!=undefined){if(headers){for(i=0;i<headers.length;i++){req.setRequestHeader(headers[i].name,headers[i].value)}}}req.send(data)}},_getURL:function(){return _URL},_setURL:function(url){_URL=url},_getSiteID:function(){return _SITE_ID},_setSiteID:function(id){_SITE_ID=id},_setContext:function(id){_CONTEXT_ID=id},_getContext:_setUID:function(id){_UID=id},_setSUID:function(id){_SUID=id},_seTenantID:_setAppProductID:_eventSetIfLower:function(){var cValue=_gCookie(arguments[0],_ID);var mustCreate=true;if(cValue==undefined||cValue=="undefined"||cValue==null){mustCreate=true;cValue=arguments[1]}else{try{var iValue=parseInt(cValue);var nValue=parseInt(arguments[1]);if(nValue>iValue){cValue=arguments[1];mustCreate=true}else{mustCreate=false}}catch(e){mustCreate=true}}if(mustCreate){var twoyears=3600*1e3*24*365*2;var thirtyday=3600*1e3*24*30;var defUserCookie=methods._setCookie(arguments[0],cValue,{duration:twoyears},_ID);methods._sendevent("list","add",arguments[0],cValue)}},_event:function(){var cValue=arguments[1];if(arguments[2]==null){methods._sendevent("list","add",arguments[0],cValue,10)}else{methods._sendevent("list","add",arguments[0],cValue,arguments[2])}},_sendevent:function(){try{var dta,reqtype;var headers=[{name:"Content-Type",value:"application/x-www-form-urlencoded"}];if(_noIDs){dta=new EtappEvent(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],null,1,{}).rdata()}else{dta=new EtappEvent(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],_ID,1,{}).rdata()}reqtype=dta.length<512?"GET":"POST";methods._http_send_request(reqtype,_URL,dta,null,headers,false)}catch(e){}},_eventSample:function(percent){if(percent&&Math.random()*100<=percent){return _i[_ID].methods._event.apply(this,[].splice.call(arguments,1))}},_setCookie:function(name,value,options,ctx,cookie_setters){if(ctx!=undefined){name="mp_"+ctx+"_"+name}else{name="mp_"+name}if(options!=undefined){if(options.duration!=undefined){if(options.expires==undefined){options.expires=new Date((new Date).getTime()+parseInt(options.duration))}}}var r=_sCookie(name,value,typeof options=="object"&&options?options:{});if(cookie_setters){if(typeof cookie_setters!="object"){cookie_setters=[cookie_setters]}}return r},_startGoal:function(goal,action,duration,label,cookie_setters,data){if(!duration){duration=1}var v=_gCookie(goal);if(!v){_i[_ID].methods._setCookie(goal,action,{duration:duration},cookie_setters);if(label){return _i[_ID].methods._event(goal,action,label,1,null,null,arguments.length>5?data:null)}}else{action=v}},_trackGoal:function(goal,label,value,once,validator,data){var action=_gCookie(goal);if(typeof once=="object"&&once){if(_gCookie(goal+"_"+label+"_once"+(once.uid?"_"+_UID:""))){return}_sCookie(goal+"_"+label+"_once"+(once.uid?"_"+_UID:""),1,{duration:isNaN(once.duration)?0:once.duration})}if(typeof validator=="function"&&validator(goal,action)||typeof validator!="function"&&action){return _i[_ID].methods._event(goal,action,label,typeof arguments[2]!="object"||arguments[2]!==null?value:1,null,null,arguments.length>5?data:null)}},_setGoalAction:function(goal,action,duration,cookie_setters){if(!duration){duration=1}var v=_gCookie(goal);if(v&&action!=v){_i[_ID].methods._setCookie(goal,action,{duration:duration},cookie_setters)}else{action=v}},_getOrTrackUser:function(){var dhash=_murmurhash3_32_gc(""+document.domain);var seconds=parseInt((new Date).getTime()/1e3);var v=_gCookie("u");var c="";var mustcreate=true;if(v){var cInfo=v.split(".");mustcreate=false;try{var cInfo=v.split(".");if(!(cInfo.length<7)){var dhash=cInfo[0];var visitorId=cInfo[1];var initialTS=cInfo[2];var lastSession=cInfo[3];var currSession=cInfo[4];var currSessionLastActive=cInfo[5];var sessionCount=cInfo[6];c=v;if(visitorId==undefined||visitorId=="undefined"||visitorId==null||visitorId==0){throw new Error("Undefined visitorID")}if(seconds-currSessionLastActive>30*60){c=dhash+"."+visitorId+"."+initialTS+"."+currSession+"."+seconds+"."+seconds+"."+(sessionCount+1);lastSession=currSession;currSession=seconds;sessionCount++}else{c=dhash+"."+visitorId+"."+initialTS+"."+lastSession+"."+currSession+"."+seconds+"."+sessionCount}}}catch(e){}}if(mustcreate){var visitorId=_murmurhash3_32_gc(""+Math.random());c=dhash+"."+visitorId+"."+seconds+"."+seconds+"."+seconds+"."+seconds+"."+1;currSession=seconds}var twoyears=3600*1e3*24*365*2;var defUserCookie=_i[_ID].methods._setCookie("u",c,{duration:twoyears});_i[_ID].methods._setSUID(currSession)}};_i[_ID]={methods:methods};_i[_ID].methods._getOrTrackUser()}return _i[_ID].methods};EtappTracker=mpAnalytics;w.mpAnalytics=mpAnalytics;_async(_asyncTimer||_run,0)}})(window,document);