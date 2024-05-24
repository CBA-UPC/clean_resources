/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof _paq!=="object"){_paq=[]}if(typeof window.Matomo!=="object"){window.Matomo=window.Piwik=())}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
(function(){var N=1;var aF=9;var o=10;var P=8;var w=3;
/*!!
     * Copyright (C) 2015 Pavel Savshenko
     * Copyright (C) 2011 Google Inc.  All rights reserved.
     * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
     * Copyright (C) 2008 Matt Lilek <webkit@mattlilek.com>
     * Copyright (C) 2009 Joseph Pecoraro
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions
     * are met:
     *
     * 1.  Redistributions of source code must retain the above copyright
     *     notice, this list of conditions and the following disclaimer.
     * 2.  Redistributions in binary form must reproduce the above copyright
     *     notice, this list of conditions and the following disclaimer in the
     *     documentation and/or other materials provided with the distribution.
     * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
     *     its contributors may be used to endorse or promote products derived
     *     from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
;
var i={};i.cssPath=i._cssPathStep=i.DOMNodePathStep=i.DOMNodePathStep.prototype={toString:;
/*!!
 * Copyright 2011 Google Inc.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;var b=var E;if(typeof WebKitMutationObserver!=="undefined"){E=WebKitMutationObserver}else{if(typeof MutationObserver!=="undefined"){E=MutationObserver}}if(typeof E!=="undefined"&&E){var J=(();var aB;
((aB||(aB={}));ar ab=(();var ao=(();var W=((J);var K=(();var ac=(();var aq=/[a-zA-Z_]+/;var aw=/[a-zA-Z0-9_\-]+/;ar ap=(();var aE=(();var m=/^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/; d=(();var y=(function(){N.prototype.disconnect=aN.prototype.rememberNode=aN.prototype.forgetNode=aN.prototype.serializeNode=function(a0,a7,aV,a6){if(a0===null){return null}var aX=this.knownNodes.get(a0);if(aX!==undefined){return{id:aX}}var a8={nodeType:a0.nodeType,id:this.rememberNode(a0)};
var aO=aL.shouldMaskElementRecursive(a0,aV,a6);aV=aO.isIgnoredField;a6=aO.isIgnoredContent;switch(a8.nodeType){case o:var aQ=a0;a8.name=aQ.name;a8.publicId=aQ.publicId;a8.systemId=aQ.systemId;break;case P:a8.textContent=" ";break;case w:a8.textContent=aL.getMaskedTextContent(a0,aV,a6);break;case N:a8.tagName=a0.tagName;a8.attributes={};if("SCRIPT"===a8.tagName||"NOSCRIPT"===a8.tagName){break}if("STYLE"===a8.tagName&&(("string"===typeof a0.innerText&&a0.innerText.trim()==="")||("string"===typeof a0.innerHTML&&a0.innerHTML.trim()===""))&&O.styleSheets&&O.styleSheets.length){var aP;for(var a2=0;a2<O.styleSheets.length;a2++){if(O.styleSheets[a2]){var aR=O.styleSheets[a2];if(aR&&aR.ownerNode&&!aR.href&&aR.ownerNode===a0&&aR.cssRules&&aR.cssRules.length){var a1="";for(var a5=0;a5<aR.cssRules.length;a5++){if(aR.cssRules[a5].cssText){a1+=aR.cssRules[a5].cssText+" "}}aP=O.createTextNode(a1);a8.childNodes=[this.serializeNode(aP,false,aV,a6)];break}}}if(aP){break}}var aW;for(var a5=0;a5<a0.attributes.length;
a5++){var aZ=a0.attributes[a5];if(aZ&&"value" in aZ){aW=aZ.value}else{aW=""}var aU=false;if(aZ.name==="value"&&a8.tagName==="INPUT"&&a0.value&&(!a0.type||String(a0.type).toLowerCase()==="text"||String(a0.type).toLowerCase()==="number")){aW=a0.value}if(aZ.name==="src"&&a8.tagName==="IMG"&&aL.shouldMaskContent(a0,false)){aW="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="}if(aZ.name==="value"&&a8.tagName==="INPUT"&&a0.value&&String(a0.type).toLowerCase()==="password"){aU=true}if("INPUT"===a8.tagName&&a0.type&&a0.type==="hidden"&&"value"===aZ.name){a8.attributes[aZ.name]=""}else{if("INPUT"===a8.tagName&&"value"===aZ.name&&(!aG||aV||aL.shouldMaskField(a0,false))){a8.attributes[aZ.name]=aL.maskFormField(aW,aU)}else{if(("title"===aZ.name||"alt"===aZ.name||"label"===aZ.name||"placeholder"===aZ.name)&&(a6||aL.shouldMaskContent(a0,false))){a8.attributes[aZ.name]=aL.maskFormField(aW)}else{a8.attributes[aZ.name]=aW}}}}if("IFRAME"===a8.tagName&&(a0.scrollWidth<=1||a0.scrollHeight<=1)){a8.attributes.src="about:blank"
}else{if("META"===a8.tagName){if(a8.attributes.property&&String(a8.attributes.property).indexOf("og:")>=0){a8.attributes={}}else{if(a8.attributes.name){var a4=String(a8.attributes.name).toLowerCase();if(a4.indexOf("twitter:")>=0||a4.indexOf("description")>=0||a4.indexOf("keywords")>=0){a8.attributes={}}}}}else{if("LINK"===a8.tagName){if(a8.attributes.rel){var aT=String(a8.attributes.rel).toLowerCase();var aY=["icon","preload","preconnect","dns-prefetch","next","prev","alternate","search"];if(aY.indexOf(aT)>=0){a8.attributes={}}}if(a8.attributes.href){var a3=String(a8.attributes.href).toLowerCase().indexOf(".scr.kaspersky-labs.com");if(a3>5&&a3<=20){a8.attributes={}}}}}}if(a7&&a0.childNodes.length){a8.childNodes=[];for(var aS=a0.firstChild;aS;aS=aS.nextSibling){a8.childNodes.push(this.serializeNode(aS,true,aV,a6))}}break}return a8};aN.prototype.serializeAddedAndMoved=aN.prototype.serializeAttributeChanges=function(aO){var aQ=this;var aP=new d.NodeMap();Object.keys(aO).forEach(function(aR){aO[aR].forEach(function(aT){var aS=aP.get(aT);if(!aS){aS=aQ.serializeNode(aT);aS.attributes={};aP.set(aT,aS)}aS.attributes[aR]=aT.getAttribute(aR)})});return aP.keys().map(function(aR){return aP.get(aR)})};aN.prototype.applyChanged=function(aR){var aU=this;var aP=aR[0];var aS=aP.removed.map(;var aQ=this.serializeAddedAndMoved(aP.added,aP.reparented,aP.reordered);
var aO=this.serializeAttributeChanges(aP.attributeChanged);var aT=aP.characterDataChanged.map(function(aW){var aX=aU.serializeNode(aW);var aV=aL.shouldMaskElementRecursive(aW,false,false);aX.textContent=aL.getMaskedTextContent(aW,aV.isIgnoredField,aV.isIgnoredContent);return aX});this.mirror.applyChanged(aS,aQ,aO,aT);aP.removed.forEach(};return aN})()}
/*!!
     * Copyright (C) InnoCraft Ltd - All rights reserved.
     *
     * All information contained herein is, and remains the property of InnoCraft Ltd.
     *
     * @link https://www.innocraft.com/
     * @license For license details see https://www.innocraft.com/license
     */
;var O=document;var I=window;var F=0;var l=false;var L=!u();var am=true;var n=null;var at=false;var ad="";var T=false;var g=15*60*1000;var aa=30*60*1000;var S=10;var av=(5*60*1000);var az=2000;var C=1000;var H=100;var Y=500;var G=false;r D=var s=1;var aH=2;var h=3;var V=4;var aI=5;var ag=6;var a=7;var k=8;var e=9;var ar=10;var p=11;var ax=12;var aC=0;var ae=1;var c=2;var aG=true;var Q=false;var an=false;var aM=true;var M=null;var A=false;var af={};
if("object"===typeof JSON){af=JSON}var aj=false;var al=[];var aJ={hasObserver:;var ai=aJ.hasObserver();var r={getScrollLeft:function(){return I.document.body.scrollLeft||I.document.documentElement.scrollLeft},getScrollTop:getDocumentHeight:function(){return au.safeMathMax([O.body.offsetHeight,O.body.scrollHeight,O.documentElement.offsetHeight,O.documentElement.clientHeight,O.documentElement.scrollHeight,1])},getDocumentWidth:getWindowSize:;var t={namespace:"hsr",set:get:getHsrConfigs:;var aL={getAttribute:hasAttribute:getTagName:getCssClasses:getHeight:function(aN){if(aN&&(aN.nodeType===9||aN.tagName==="HTML")){return r.getDocumentHeight()}if(aN===window){return O.documentElement.clientHeight}return au.safeMathMax([aN.scrollHeight,aN.offsetHeight,0])},getWidth:getOffset:getSelector:getMaskedTextContent:maskFormField:shouldMaskElementRecursive:function(aP,aQ,aN){if(!aN){aN=false}if(!aQ){aQ=false}if(!aQ&&aL.shouldMaskField(aP,false)){aQ=true}if(!aN&&aL.shouldMaskContent(aP,false)){aN=true}var aO=(aP&&aP.parentNode)?aP.parentNode:null;while(aO){if(!aQ&&aL.shouldMaskField(aO,false)){aQ=true}if(!aN&&aL.shouldMaskContent(aO,false)){aN=true}if(aQ&&aN){aO=null;break}else{aO=aO.parentNode?aO.parentNode:null}}return{isIgnoredField:aQ,isIgnoredContent:aN}
},shouldMaskField:function(aN,aW){if(!aN){return false}var aT=aL.getAttribute(aN,"type");if(!aT){aT="text"}else{aT=String(aT).toLowerCase()}var aR=aT==="radio"||aT==="checkbox"||(aN.nodeName&&aN.nodeName==="SELECT");if(!aG){if(aR){return false}return true}var aU=aL.getAttribute(aN,"name");var aP=aL.getAttribute(aN,"id");var aQ=aL.getAttribute(aN,"autocomplete");aU=au.trim(String(aU)).toLowerCase().replace(/[\s_-]+/g,"");aP=au.trim(String(aP)).toLowerCase().replace(/[\s_-]+/g,"");aQ=au.trim(String(aQ)).toLowerCase().replace(/[\s_-]+/g,"");var aS=["creditcardnumber","off","kreditkarte","debitcard","kreditkort","kredietkaart"," kartakredytowa","cvv","cc","ccc","cccsc","cccvc","ccexpiry","ccexpyear","ccexpmonth","cccvv","cctype","cvc","exp","ccname","cardnumber","ccnumber","username","creditcard","name","fullname","familyname","firstname","vorname","nachname","lastname","nickname","surname","login","formlogin","konto","user","website","domain","gender","company","firma","geschlecht","email","emailaddress","emailadresse","mail","epos","ebost","epost","eposta","authpw","token_auth","tokenauth","token","pin","ibanaccountnum","ibanaccountnumber","account","accountnum","auth","age","alter","tel","city","cell","cellphone","bic","iban","swift","kontonummer","konto","kontonr","phone","mobile","mobiili","mobilne","handynummer","téléphone","telefono","ssn","socialsecuritynumber","socialsec","socsec","address","addressline1","addressline2","billingaddress","billingaddress1","billingaddress2","shippingaddress","shippingaddress1","shippingaddress2","vat","vatnumber","gst","gstnumber","tax","taxnumber","steuernummer","adresse","indirizzo","adres","dirección","osoite","address1","address2","address3","street","strasse","rue","via","ulica","calle","sokak","zip","zipcode","plz","postleitzahl","postalcode","postcode","dateofbirth","dob","telephone","telefon","telefonnr","telefonnummer","password","passwort","kennwort","wachtwoord","contraseña","passord","hasło","heslo","wagwoord","parole","contrasenya","heslo","clientid","identifier","id","consumersecret","webhooksecret","consumerkey","keyconsumersecret","keyconsumerkey","clientsecret","secret","secretq","secretquestion","privatekey","publickey","pw","pwd","pwrd","pword","paword","pasword","paswort","pass"];
if(aT==="password"||aT==="email"||aT==="tel"||aT==="hidden"||aS.indexOf(aU)!==-1||aS.indexOf(aP)!==-1||aS.indexOf(aQ)!==-1||aL.hasAttribute(aN,"data-piwik-mask")||aL.hasAttribute(aN,"data-matomo-mask")){return true}if(!aR&&aN&&aN.value){if(!aT||aT==="text"||aT==="number"||(aN&&aN.nodeName==="TEXTAREA")){if(/^\d{7,24}$/.test(String(aN.value))){return true}if(String(aN.value).indexOf("@")!==-1&&String(aN.value).length>2){return true}}}if(aW){var aV=aN.parentNode?aN.parentNode:null;var aO=false;while(aV){if(aL.hasAttribute(aV,"data-piwik-mask")||aL.hasAttribute(aV,"data-matomo-mask")){return true}else{if(!aO&&aV&&aL.hasAttribute(aV,"data-matomo-unmask")){aO=true}aV=aV.parentNode?aV.parentNode:null}}if(aO){return false}}if(aL.hasAttribute(aN,"data-matomo-unmask")){return false}if(aR){return false}return true},shouldMaskContent:function(aP,aO){if(!aP){return false}if(aP.tagName&&aP.tagName!=="FORM"&&aL.hasAttribute(aP,"data-matomo-mask")){return true}if(aO){var aN=aP.parentNode?aP.parentNode:null;
while(aN){if(aN.tagName!=="FORM"&&aL.hasAttribute(aN,"data-matomo-mask")){return true}else{aN=aN.parentNode?aN.parentNode:null}}}return false}};var au={safeMataO)},isAer"},getCurrente()},getTimeSincePageR)-F},roundTimeToSec00)},getRandoaO)},isNuaN)}, aN},generateUniq var aA=r.getWindowSize();var z={getPiwikTracn[]},sendQueued()}},shouldEndRecorlse},sendQueuedDataRequesaT)},record))}},stopSending}})},startSending})})}var ak={moveEvents:["mousemove","touchmove"],clickEvents:["mousedown"],scrollEvents:["scroll","resize"],lastScroll:null,lastElementScroll:null,lastMove:null,lastResize:null,scrollMaxPercentage:0,lastResizeInterval:null,lastScrollInterval:null,lastMoveInterval:null,isRecording:false,isRecordingMutations:false,startRecor)})},mirror:null,initialDOM:null,startRecordingMutatN)}},onReht}},onFormChV)}},onScaY}},checkTrackersIfCondition)}}},onCS)}},on)}}},stopRecor)})},stopRecordingMutatll}}};var aK={f()}},asd()},checkAllConfigsRece)}}}};function ah(){if("object"===typeof window&&"object"===typeof I.Piwik&&"object"===typeof I.Piwik.HeatmapSessionRecording){return}if("object"===typeof window&&!I.Piwik){return}af=Piwik.JSON;Piwik.HeatmapSessionRecording={utils:au,element:aL,storage:t,dom:r,tracking:z,recording:ak,RECORD_TYPE_BOTH:aC,RECORD_TYPE_HEATMAP:ae,RECORD_TYPE_SESSION:c,configuration:aK,getIdView:function(){return ad},disableRecordMovements:function(){am=false},enableRecordMovements:function(){am=true},isRecordingMovements:function(){return am},disableAutoDetectNewPageView:function(){aM=false},enableAutoDetectNewPageView:function(){aM=true},isAutoDetectingNewPageViews:function(){return aM},matchTrackerue},setTri")}},setNewPageP)}},_resetTrac}})},_setDisalse},disa()},ena()},isEnabled:function(){return L},setMaxCapturea
}},setMaxTextInputLength:function(aO){Y=aO},disableCaptureKeystrokes:function(){aG=false},enableCaptureKeystrokes:function(){aG=true},setMatomoTrackers:function(aO){this.setPiwikTrackers(aO)},setPiwikTrackers:function(aO){if(aO===null){n=null;return}if(!au.isArray(aO)){aO=[aO]}n=aO;n.forEach(q);if(aj){aK.fetch()}},enableDebugMode:function(){l=true}};Piwik.DOM.onRe()});Piwik.addPlugin("HeatmapSessionRecording",n""},un})}}});if(I.Piwik.initialized){var aN=Piwik.getAsyncTrackers();aN.forEach(q);Piwik.on("TrackerSetup",q);Piwik.retryMissedPluginCalls();aD();aK.fetch();Piwik.on("TrackerAdded",function(){aK.fetch()})}else{Piwik.on("TrackerSetup",q);
Piwik.on("MatomoInitialized",function(){aD();if(L||A){aK.fetch()}Piwik.on("TrackerAdded",function(){if(L||A){aK.fetch()}})})}}ad=au.generateUniqueId();if("object"===typeof I.Piwik){ah()}else{if("object"!==typeof I.matomoPluginAsyncInit){I.matomoPluginAsyncInit=[]}I.matomoPluginAsyncInit.push(ah)}})();

/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function(){var l=false;var q=true;var p=null;var k=false;var j="FIELD_CHECKABLE";var x="FIELD_SELECTABLE";var h="FIELD_TEXT";var n=["password","text","url","tel","email","search","",null];var a=["color","date","datetime","datetime-local","month","number","range","time","week"];var b=["radio","checkbox"];var o=["button","submit","hidden","reset"];var t=30000;var s)}}var c={getAttribute:function(A,z){if(A&&A.getAttribute&&z){return A.getAttribute(z)}return null},hasC>-1},hasNodeAttribute:function(A,z){if(A&&A.hasAttribute){return A.hasAttribute(z)
}if(A&&A.attributes){var B=(typeof A.attributes[z]);return B!=="undefined"}return false},isIgnlse},getTagName:function(z){if(z&&z.tagName){return(""+z.tagName).toLowerCase()}return null},findAllFormElements:function(z){if(z&&z.querySelectorAll){return z.querySelectorAll("form, [data-piwik-form], [data-matomo-form]")}return[]},findAllFieldElemn[]},findFormTrackerInstz)}}};var u={isArray:function(z){return typeof z==="object"&&z!==null&&typeof z.length==="number"},indexOfA -1},getCurrentTime:function(){return new Date().getTime()},isNumber:function(z){return !isNaN(z)},generateUniqueId:function(){var C="";var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var B=A.length;for(var z=0;z<6;z++){C+=A.charAt(Math.floor(Math.random()*B))}return C},paramsToQueryStn A}};var g={getPiwikTracn[]},trackParams:function(E,D){if(!q){return}var B=u.paramsToQueryString(E);if(B){if(B.substr(-1)!=="&"){B+="&"}B+="ca=1"}if(!B||B===""){return}var z=this.getPiwikTrackers();if(z&&z.length){var A=0,C;for(A;A<z.length;A++){C=z[A];if(D&&500===C.getLinkTrackingTimer()&&C.setLinkTrackingTimer){C.setLinkTrackingTimer(650)
}if(C&&(!C.FormAnalytics||C.FormAnalytics.isEnabled())){C.queueRequest(B)}}}if(l){e("trackProgress: "+Piwik.JSON.stringify(E)))}s.prototype.r)}}};s.prototype.trackFormSut()};s.prototype.trackFormConver})}};s.prototype.shouldBeTragth};s.prototype.trackInitialForm})}};s.prototype.setEngagedWithte}};s.prototype.trackFieldUpe()};s.prototype.scheduleSendUp,t)};s.prototype.sendUp,E)};s.prototype.scanForFi)}}};s.prototype.addFormF()}}v.prototype.add))}};v.prototype.resetOnFormSulse};v.prototype.isAutoFuto};v.prototype.getTrackingPa()}};v.prototype.isB==0};v.prototype.getField-1}};v.prototype.getTimeScus};v.prototype.getHesitationus)};v.prototype.onF()}};v.prototype.onull};v.prototype.onCh}function r(){if("object"===typeof window&&"object"===typeof window.Piwik&&"object"===typeof window.Piwik.FormAnalytics){return}if("object"===typeof window&&!window.Piwik){return}Piwik.FormAnalytics={element:c,utils:u,tracking:g,FormField:v,FormTracker:s,disableFormAnalytics:function(){q=false
},enableFormAnalytics:function(){q=true},isFormAnalyticsEnabled:function(){return q},setMatomoTrac(z)},setPiwikTrac()}},setTrackingT10)},enableDebugMode:function(){l=true},scanForForms:d,trackFormSu()}},trackFormConver()}},trackue)}};Piwik.addPlugin("FormAnalytics",n""},un)}}}});if(window.Piwik.initialized){Piwik.on("TrackerSetup",m);Piwik.retryMissedPluginCalls();f();i();Piwik.on("TrackerAdded",i)}else{Piwik.on("TrackerSetup",m);Piwik.on("MatomoInitiali,i)})}}if("object"===typeof window.Piwik){r()}else{if("object"!==typeof window.matomoPluginAsyncInit){window.matomoPluginAsyncInit=[]}window.matomoPluginAsyncInit.push(r)}})();

/* END GENERATED: tracker.min.js ue
}mo}}());if(typeof window.piwik_log!=="function"){window.piwik()}}}
/*!! @license-end */;