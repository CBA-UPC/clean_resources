var SourcePoint;(()=>{var e={406:e=>{e.exports=function(){for(var e,n="__tcfapiLocator",t=[],o=window;o;){try{if(o.frames[n]){e=o;break}}catch(e){}if(o===window.top)break;o=o.parent}e||(function e(){var t=o.document,r=!!o.frames[n];if(!r)if(t.body){var s=t.createElement("iframe");s.style.cssText="display:none",s.name=n,t.body.appendChild(s)}else setTimeout(e,5);return!r}(),o.__tcfapi=function(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];if(!o.length)return t;if("setGdprApplies"===o[0])o.length>3&&2===parseInt(o[1],10)&&"boolean"==typeof o[3]&&(e=o[3],"function"==typeof o[2]&&o[2]("set",!0));else if("ping"===o[0]){var s={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof o[2]&&o[2](s)}else t.push(o)},o.addEventListener("message",(function(e){var n="string"==typeof e.data,t={};try{t=n?JSON.parse(e.data):e.data}catch(e){}var o=t.__tcfapiCall;o&&window.__tcfapi(o.command,o.version,(function(t,r){var s={__tcfapiReturn:{returnValue:t,success:r,callId:o.callId}};n&&(s=JSON.stringify(s)),e.source.postMessage(s,"*")}),o.parameter)}),!1))}},838:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),s=t(645),a=t.n(s)()(r());a.push([e.id,"#modal-already-shared{z-index:10001;position:fixed;bottom:0px;background-color:#fff;border:1px solid #000}#modal-already-shared .message{padding:10px 20px;position:relative}#modal-already-shared .message a{text-decoration:underline}#modal-already-shared .text{font-size:14px;text-align:center}#modal-already-shared button.message-button{background-color:#fff;cursor:pointer;position:absolute;top:0;right:0;width:25px;height:25px}",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);o&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],p=o.base?c[0]+o.base:c[0],u=s[p]||0,d="".concat(p," ").concat(u);s[p]=u+1;var l=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=t(s[a]);n[i].references--}for(var c=o(e,r),p=0;p<s.length;p++){var u=t(s[p]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}s=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={id:o,exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";t.r(o),t.d(o,{Api:()=>q,handleConsentRejection:()=>U});var e={};t.r(e),t.d(e,{consentAccountIds:()=>n,consentDomains:()=>s,consentGroupIds:()=>r});const n={prisma:314,prismashop:314,"prismashop-preprod":314,libe:384,liberation:384,arcpublishing:384},r={prisma:165027,libe:454785,liberation:454785,arcpublishing:454785,prismamedia:492941,prismamediasolutions:781859,prismashop:165027,"prismashop-preprod":165027,"pms-ops":520234,seeandso:562950,infonity:736548},s={cuisineactuelle:"https://consent.cuisineactuelle.fr",caminteresse:"https://consent.caminteresse.fr",capital:"https://consent.capital.fr",cesoirtv:"https://consent.cesoirtv.com",femmeactuelle:"https://consent.femmeactuelle.fr",gala:"https://consent.gala.fr",geo:"https://consent.geo.fr",hbrfrance:"https://consent.hbrfrance.fr",neonmag:"https://consent.neonmag.fr",programme:"https://consent.programme.tv","programme-tv":"https://consent.programme-tv.net",voici:"https://consent.voici.fr",prismashop:"https://consent.prismashop.fr","prismashop-preprod":"https://consent.prismashop.fr",prismaconnect:"https://consent.prismaconnect.fr",ohmymag:"https://ohmymag-fr-v3.ohmymag.com",gentside:"https://gentside-fr-v3.gentside.com",prismamedia:"https://consent.prismamedia.com",prismamediasolutions:"https://consent.prismamediasolutions.com",liberation:"https://consent.liberation.fr",libe:"https://consent.liberation.fr",arcpublishing:"https://consent.liberation.fr",maecia:"https://consent.prismamedia.fr","pms-ops":"https://consent.pms-ops.com",seeandso:"https://consent.seeandso.com",harpersbazaar:"https://consent.harpersbazaar.fr",infonity:"https://consent.infonity.me"};function a(e){const n=e.split(".").reverse(),t="uk"===n[0]?2:1,o=t+1;return{domain:n[t]||null,subDomain:n[o]||null}}function i(e,n=0){setTimeout((()=>{window.location.assign(e)}),n)}function c(e,n){const{domain:t,subDomain:o}=e;return["prismamedia","maecia"].includes(t)&&o.endsWith("consents")?n.prismamedia:n[t]||n.prisma}function p(e,n){const{domain:t}=e;return n[t]||"https://cdn.privacy-mgmt.com"}function u(e,n){const{domain:t}=e;return n[t]||n.prisma}function d(e){const{subDomain:n}=e;return["rec2","rec3"].includes(n)?n:["rec","recette","preprod","rec-actu","rec2-photo","rec2-communaute","rec3-communaute","integration","rec3-quiz"].includes(n)?"rec2":null}function l(){const n=a(window.location.hostname),{consentGroupIds:t,consentDomains:o,consentAccountIds:r}=e;return{domain:n.domain,subDomain:n.subDomain,environment:d(n),consentDomain:p(n,o),consentGroupId:c(n,t),consentAccountId:u(n,r)}}function m(e){const n=document.cookie.split(";").find((n=>n.trim().startsWith(e+"=")));if(!n)return null;const[,t]=n.split("=");return t||null}function f(e,n,t,o){const r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3);const s=r.toUTCString(),a=o||location.host;document.cookie=`${e}=${n};expires=${s};domain=${a};path=/`}function h(e){const{environment:n}=e,t=m((n?`${n}-`:"")+"pmc-premium");try{var o;const e=JSON.parse(t);return["succeeded","success"].includes(null==e||null===(o=e.paymentStatus)||void 0===o?void 0:o.toLowerCase())}catch{return!1}}let v=null;function g(){clearTimeout(v),v=setTimeout((()=>{const e=l();window.pageYOffset>10&&!e.domain.includes("hbrfrance")&&(window.removeEventListener("scroll",g),document.querySelector('iframe[id^="sp_message_iframe"]').contentWindow.postMessage({name:"sp.choiceAction",type:11},"*"))}),200)}const y=11,b=13,w=15;function _(e){var n,t,o,r;null===(n=window)||void 0===n||null===(t=n.performance)||void 0===t||t.mark(e),null===(o=window)||void 0===o||null===(r=o.DD_RUM)||void 0===r||r.onReady((()=>window.DD_RUM.addTiming(e)))}var x=t(379),I=t.n(x),M=t(795),S=t.n(M),C=t(569),T=t.n(C),E=t(565),P=t.n(E),D=t(216),A=t.n(D),k=t(589),L=t.n(k),j=t(838),O={};O.styleTagTransform=L(),O.setAttributes=P(),O.insert=T().bind(null,"head"),O.domAPI=S(),O.insertStyleElement=A(),I()(j.Z,O),j.Z&&j.Z.locals&&j.Z.locals;var R=t(406),N=t.n(R);function $(e,n){if(!n)return null;var t;if("cmpuishown"!==e.eventStatus&&("useractioncomplete"===e.eventStatus&&_("sourcepoint_userActionComplete"),null!=e&&null!==(t=e.purpose)&&void 0!==t&&t.consents[1])){if(!m("cmp_firstid_consented")){const e=location.host.split(".");f("cmp_firstid_consented","1",180,e.length>2?e.slice(Math.max(e.length-2,1)).join("."):e.join("."))}m("shown-privacy-manager-message")||(f("shown-privacy-manager-message",!0,180),document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",'<div id="modal-already-shared"> <div class="message"> <div class="message-column"> <p class="text"> Vous avez déjà accepté les cookies sur les sites Prisma Media. <a class="link" tabindex="0" href="https://www.prismamedia.com/consentement-partage/" target="_blank" aria-label="En savoir plus">En savoir plus</a>. </p> </div> <div class="message-column"> <button onClick="SourcePoint.Api.hideModal()" title="J\\\'ai compris" class="message-button">x</button> </div> </div> </div>'))}}let G=!1;function U(e){const{domain:n,subDomain:t}=e;return["hbrfrance","prismaconnect","prismashop"].includes(n)||t.includes("boutique")||e.consentGroupId!==r.prisma?null:void(h(e)?null===e.pmcConfirmationId||G||(window._sp_.gdpr.loadPrivacyManagerModal(e.pmcConfirmationId),G=!0):window.pmcstarter?window.pmcstarter("getPremiumOrderLink",(n=>{n?i(`${n}&_sp_targeting_params=paymenttunnel:true`,1e3):null===e.pmcConfirmationId||G||(window._sp_.gdpr.loadPrivacyManagerModal(e.pmcConfirmationId),G=!0)})):i(`${function(e){var n;const t=function(e){if("prismamedia"===e.domain){const e=new URLSearchParams(window.location.search).get("redirectTo");if(!e)return"prismaconnect.fr";const{domain:n}=a(new URL(e).hostname);return n}return e.domain}(e);return"https://"+(null!==(n=e.subDomain)&&void 0!==n&&n.startsWith("rec")?`${e.subDomain}-`:"")+"connect."+t+"/checkout"}(e)}&_sp_targeting_params=paymenttunnel:true`,1e3))}(async function(){N()();const e=l();e.domain.includes("hbrfrance")&&function(){const e=["https://consent.hbrfrance.fr/consent/tcfv2/consent","https://consent.hbrfrance.fr/mms/choice_action_response"];new PerformanceObserver((n=>{for(const t of n.getEntries())["fetch","xmlhttprequest"].includes(t.initiatorType)&&e.some((e=>t.name.includes(e)))&&window.location.reload()})).observe({entryTypes:["resource"]})}(),window._sp_queue=[],window._sp_=function(e){const n=!!m("bea_pws_user_data");return{config:{baseEndpoint:e.consentDomain,accountId:e.consentAccountId,groupPmId:e.consentGroupId,gdpr:{groupPmId:e.consentGroupId,targetingParams:{isPremiumCookie:h(e)?"1":"0",isHBRPremiumCookie:n?"1":"0"}},events:{onMessageReady:e=>{window.addEventListener("scroll",g)},onMessageChoiceSelect:(n,t,o)=>{if(_("sourcepoint_onMessageChoiceSelect"),![b,w].includes(o)){const e=location.host.split(".");f("cmp_firstid_consented","1",180,e.length>2?e.slice(Math.max(e.length-2,1)).join("."):e.join("."))}[y,b,w].includes(o)&&window.removeEventListener("scroll",g),o===y?f("shown-privacy-manager-message","true",180):o===w&&U(e)},onMessageChoiceError:e=>{window.removeEventListener("scroll",g)},onPrivacyManagerAction:(n,t)=>{if("object"!=typeof t)return null;"none"===t.purposeConsent&&"none"===t.vendorConsent&&U(e)}}}}}(e),await function({src:e,elementId:n}){return new Promise(((t,o)=>{if(document.getElementById(n))return o("script already loaded");const r=document.createElement("script");r.onload=()=>t(),r.onerror=()=>o(),r.src=e,r.id=n;const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s)}))}({src:`${e.consentDomain}/unified/wrapperMessagingWithoutDetection.js`,elementId:"consentmanager"}),window.__tcfapi("addEventListener",2,$)})().then(console.log).catch(console.error);const q={hideModal:()=>{document.getElementById("modal-already-shared").style.display="none"}}})(),SourcePoint=o})();          abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowe