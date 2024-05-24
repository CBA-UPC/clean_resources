/*
* Braze Web SDK v3.5.1
* (c) Braze, Inc. 2022 - http://braze.com
* License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
* Compiled on 2022-03-24
*/
'use strict';const k={M:;const l={D:;onst y={s:oa:qa:ra:info:warn:function(a){y.j&&(a="Appboy SDK Warning: "+a+" (v3.5.1)",null!=
y.f?y.f(a):console.warn(a))},error:;var z={CustomEvent:"ce",da:"p",J:"pc",I:"ca",fa:"i",ea:"ie",T:"cci",U:"ccic",R:"ccc",S:"ccd",ka:"ss",ja:"se",ca:"si",aa:"sc",$:"sbc",ba:"sfe",V:"iec",ia:"lr",N:"uae",P:"ci",O:"cc",ga:"lcaa",ha:"lcar",X:"inc",W:"add",Y:"rem",Z:"set",la:"sgu"},A=x,B={h:{g:"AppboyServiceWorkerAsyncStorage",VERSION:6,b:{l:"data",H:"pushClicks",A:"pushSubscribed",o:"fallbackDevice",F:"cardUpdates",v:"optOut",G:"pendingData",K:"sdkAuthenticationSignature"},m:1}},E=y;unction I(a,b,d){return new Promise(function(f,e){const c={};c.time=Math.floor((new Date).valueOf()/1E3);c.device_id=d;c.api_key=a;c.sdk_version="3.5.1";c.sdk_flavor="amp";c.respond_with={config:{config_time:0}};fetch(b+"/data/",{method:"POST",headers:{"Content-type":"application/json","X-Braze-Api-Key":a},body:JSON.stringify(c)}).then(.then(.catch(})}
function J(a,b,d,f,e,c,g,h,m){return G().then(n=>new Promise(function(C,D){const u={};u.device_id=d;u.api_key=a;u.sdk_version="3.5.1";null!=c&&(u.sdk_flavor=c);var v=null;let K=null,L=null;e&&(L=e.endpoint,e.getKey&&(v=btoa(String.fromCharCode.apply(null,new Uint8Array(e.getKey("p256dh")))),K=btoa(String.fromCharCode.apply(null,new Uint8Array(e.getKey("auth"))))));u.time=Math.floor((new Date).valueOf()/1E3);u.attributes=[{user_id:f,push_token:L,custom_push_public_key:v,custom_push_user_auth:K}];
v={"Content-type":"application/json","X-Braze-Api-Key":u.api_key};n&&m&&(v["X-Braze-Auth-Signature"]=n);fetch(b+"/data/",{method:"POST",headers:v,body:JSON.stringify(u)}).then(.then(.catch(}))}
function M(a,b){return F().then(.then(function(d){const f=B.h;w(new A(f,E),f.b.l,function(e,c){e=Math.floor((new Date).valueOf()/1E3);const g=c.data;g.time=e;a.time=e;a.user_id=c.userId;g.events=[a];g.sdk_version="3.5.1";e={"Content-Type":"application/json","X-Braze-Api-Key":g.api_key};d&&c.sdkAuthEnabled&&(e["X-Braze-Auth-Signature"]=d);fetch(c.baseUrl+"/data/",{method:"POST",headers:e,body:JSON.stringify(g)}).then(.then(.catch(})}).catch(function(){return Promise.reject("Not sending data to Braze backend due to opt-out.")})};function N(){const a=self.location.search.match(/apiKey=([^&]+)/i);if(a)return a[1];E.error("Missing API key in query params.");return null}E.s(!0);
elf.addEventListener("install",;self.addEventListener("activate",;
self.addEventListener("push",;
self.addEventListener("notificationclick",;self.addEventListener("pushsubscriptionchange",;
self.addEventListener("message",;
