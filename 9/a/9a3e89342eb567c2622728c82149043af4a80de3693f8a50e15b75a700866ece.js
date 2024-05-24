/*   OnlineOpinion v5.10.4 Released: 3/30/2020. Compiled 04/23/2021 02:54:26 PM -0400 Branch: 5.10.4 4fc68e960aa79de5cdea896ed090d42ea8961e3b Components: Full UMD: disabled The following code is Copyright 1998-2021 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com    */(function(a,b){if(('disabled'==='enabled')&&(typeof define==='function')&&define.amd){define([],b)}else{a.OOo=b()}}(this,function(){window.OOo={__detectBrowser:function(b){var c=Object.prototype.toString.call(window.opera)==='[object Opera]',f=b.indexOf('MSIE ')>-1||b.indexOf('Trident/')>-1,d={IE:!!f,MSEdge:b.indexOf('Edge/')>-1,Opera:c,WebKit:b.indexOf('AppleWebKit/')>-1,Chrome:b.indexOf('Chrome')>-1&&b.indexOf('Edge/')===-1,Gecko:b.indexOf('Gecko')>-1&&b.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(b),iOs:b.indexOf('iPad')>-1||b.indexOf('iPhone')>-1||b.indexOf('iPod')>-1,iOS67:b.search(/OS 6(.*)|7(.*) like Mac OS/i)>-1,BlackBerry:b.indexOf('BlackBerry')>-1,Fennec:b.indexOf('Fennec')>-1,Safari:/constructor/i.test(window.HTMLElement)||(function(a){return a.toString()==="[object SafariRemoteNotification]"})(!window.safari||safari.pushNotification),IEMobile:b.indexOf('IEMobile')>-1,WindowsPhone:b.toLowerCase().indexOf('windows phone')>-1,WindowsTablet:b.toLowerCase().indexOf('windows nt')>-1&&b.toLowerCase().indexOf('touch')>-1,OperaMobile:b.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:b.search(/[ ](Kindle|Silk)/)>-1,isChromeIOS:/crios/i.test(b),ua:b,Android:/Android/.test(b),facebookWebview:/FBAV/.test(b),googleWebview:/GSA/.test(b),AndroidChromiumWebview:/Chrome\/.* Mobile/.test(b),iOsWebview:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/.test(b)},g=false;d.isMobile=(d.MobileSafari||d.BlackBerry||d.Fennec||d.IEMobile||d.OperaMobile||d.Kindle||d.iOs||d.Android||d.WindowsPhone||d.WindowsTablet||d.AndroidChromiumWebview||d.iOsWebview||d.facebookWebview||d.googleWebview);d.isDesktop=!d.isMobile;d.isMobileNonIOS=(d.isMobile&&!d.iOs);d.isSafariDesktop=(d.Safari)&&(!d.isMobile);return d}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};OOo.version='5.10.4';OOo.restoreArray=[];OOo.fcp=true;OOo.spa=true;OOo.useBrowserStorage=false;var bk=bk||OOo;(function(){function bl(a){return document.querySelector(a)}function bm(a){return document.querySelectorAll(a)}function Y(a,b){var c;for(c in b){if(b.hasOwnProperty(c)){a[c]=b[c]}}return a}function bn(a,b,c,f){if(a.addEventListener){a.addEventListener(b,c,f)}else if(a.attachEvent){a.attachEvent('on'+b,c)}}function bo(a,b,c,f){if(a.removeEventListener){a.removeEventListener(b,c,f)}else if(a.detachEvent){a.detachEvent('on'+b,c)}}function Z(){if(typeof Object.assign!=='function'){Object.defineProperty(Object,"assign",{value:function k(a,b){'use strict';if(a===null||a===undefined){throw new TypeError('Cannot convert undefined or null to object');}var c=Object(a);for(var f=1;f<arguments.length;f++){var d=arguments[f];if(d!==null&&d!==undefined){for(var g in d){if(Object.prototype.hasOwnProperty.call(d,g)){c[g]=d[g]}}}}return c},writable:true,configurable:true})}}function bp(a){var b=document.querySelector("script[data-vendor='fs'][data-role='gateway']");if(!b){return false}else{var c;if(b.hasAttribute('data-isselfhosted')&&b.getAttribute('data-isselfhosted')){c=true}var f=b.src?b.src:null;if(!f){return false}else{var d=/gateway\.foresee\.com/g,g=/\/\/[A-Z]{1,3}|[a-z]{1,3}-/g,k;OOo.fcpEnvironment;if(d.test(f)){if(g.test(f)){k=OOo.fcpEnvironment=f.slice(f.search(g),f.search(d))}else{k=OOo.fcpEnvironment=''}if(a&&a==='sites'){var h=/sites\/(.*)\//g;var o=f.split(h)[1];var m=o.split('/');return[m,k]}else if(a&&a==='code'){return[OOo?OOo.version?OOo.version+'-oo':'5.10.3-oo':'',k]}else if(a&&a==='self-hosted'){return c}}else{return false}}}}function L(a,b){var c='./onlineopinionV5/',f;if(a){if(b=='custom'){var d=OOo.checkGateway('sites');if(d){var g=d[0][0],k=d[0][1];f=d[1]?d[1]:'';c='https://'+f+'gateway.foresee.com/sites/'+g+'/'+k+'/opinionlab/'}}else if(b=='static'){var h=OOo.checkGateway('code');if(h){codeVersion=h[0];f=h[1];c='https://'+f+'gateway.foresee.com/code/'+codeVersion+'/'}}}return c}function N(a){var b=[],c;for(c in a){if(a.hasOwnProperty(c)){b.push(c+'='+(encodeURIComponent(a[c])||''))}}return b.join('&')}function O(c){if(c){OOo.observer.disconnect()}else{var f=document.body,d={subtree:false,childList:true},g=function(a,b){if(a&&a[0].addedNodes&&a[0].addedNodes.length>0){G(a[0].addedNodes)}};if(OOo.observer==undefined){OOo.observer=new MutationObserver(g);OOo.observer.observe(f,d)}else{OOo.observer.observe(f,d)}}}function F(){return document?document.body?document.body.children:'':''}function G(a){P(a,'hide');O()}function P(a,b){if(a.length===0){return}if(b==='show'){for(var c=0;c<a.length;c++){a[c].removeAttribute('aria-hidden')}for(var f=0;f<OOo.restoreArray.length;f++){OOo.restoreArray[f].el.setAttribute('aria-hidden',OOo.restoreArray[f].ariahidden)}}else if(b==='hide'){for(var c=0;c<a.length;c++){if(a[c].nodeName==='SCRIPT'||a[c].nodeName==='STYLE'){continue}if(a[c].getAttribute&&a[c].getAttribute('aria-hidden')){OOo.restoreArray.push({el:a[c],ariahidden:a[c].getAttribute('aria-hidden')=='true'?'true':'false'})}if(a[c].getAttribute&&(a[c].getAttribute('id')=='oo_waypoint_container'||a[c].getAttribute('id')=='oo_invitation_prompt'||a[c].getAttribute('id')=='oo_container'||a[c].getAttribute('id')=='oo_entry_prompt'||a[c].getAttribute('class')&&a[c].getAttribute('class').search('oo_cc_wrapper')>-1)){continue}else{a[c].setAttribute('aria-hidden','true')}}}}function Q(a){P(a,'show');O(true);OOo.restoreArray=[]}function ba(a){var b=/[\(\)']+/g;newFnArgs=a[0].replace(b,'');return newFnArgs}function bb(a,b){var c=/\(.*?\)/;var f=c.exec(b[0]);f=ba(f);f=bc(f);var d=b[0].replace(c,'');return bd(a,d,f)}function bc(a){if(Array.isArray(a)){var b=a[0]}else{var b=a}var c=b.split(',');for(var f=0;f<c.length;f++){c[f]=c[f].replace(/[\(\)']+/g,'');if(c[f]==='true'){c[f]=true}else if(c[f]==='false'){c[f]=false}else if(c[f]==parseInt(c[f])){c[f]=parseInt(c[f],10)}else if(c[f]===''){c.pop(f)}}return c}function bd(d,g,k){var h;function o(a){return l(a)||n(a)||q(a)||m()}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function q(a,b){if(!a)return;if(typeof a==="string")return p(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor)c=a.constructor.name;if(c==="Map"||c==="Set")return Array.from(c);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return p(a,b)}function n(a){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(a))return Array.from(a)}function l(a){if(Array.isArray(a))return p(a)}function p(a,b){if(b==null||b>a.length)b=a.length;for(var c=0,f=new Array(b);c<b;c++){f[c]=a[c]}return f}return(h=d)[g].apply(h,o(k))}function M(a,b){if(b.length!==0&&b[0].search(/\(.*?\)/)>=0){var c=bb(a,b);return M(c,b.slice(1))}else{return b.length?M(a[b[0]],b.slice(1)):a}}function R(a){if(typeof a=='object'){return a}else if(typeof a=='function'){a=a();return a}}function S(a){var b;if(a){b=Object.keys(a)}return b}function T(b){var c;if(b){c=Object.keys(b).map(function(a){return b[a]})}return c}function be(a){try{var b=M(window,a);return typeof b!=='undefined'?b:''}catch(e){return''}}function bq(a){if(!a.customVariables&&!a.efm&&!a.digitalBehaviorAnalytics){return null}else if(a.customVariables||a.efm||a.digitalBehaviorAnalytics){var b={},c={},f,d=a.customVariables?R(a.customVariables):{};for(key in d){if(d.hasOwnProperty(key)){var g=a.customVariables.nestedVariables||(typeof a.customVariables==="function"&&a.customVariables().nestedVariables)?R(a.customVariables).nestedVariables:undefined}}if(a.digitalBehaviorAnalytics){if(window.Mpathy&&typeof window.Mpathy.getIntegrationData==="function"){if(typeof window.Mpathy.getIntegrationData()==="object"){f=Mpathy.getIntegrationData();d.digitalBehaviorAnalyticsSite=f.idsite;d.digitalBehaviorAnalyticsPage=f.idpage;d.digitalBehaviorAnalyticsInsightUrl=f.insightUrl;d.digitalBehaviorAnalyticsReplayUrl=f.replayUrl}}}if(a.efm){d.EFMSurvey=true}if(a.efmWindowSize){d.EFMWidth=a.efmWindowSize[0];d.EFMHeight=a.efmWindowSize[1]}if(g){delete d.nestedVariables}var k=d?S(d):undefined;var h=d?T(d):undefined;var o=g?S(g):undefined;var m=g?T(g):undefined;var q=m?br(m,window):undefined;b=k&&h?bf(k,h,b):undefined;c=o&&q?bf(o,q,c):undefined;Z();c?Object.assign(b,c):undefined;return b}}function br(a,b){for(var c=0;c<a.length;c++){if(Array.isArray(a[c])){a[c]=E(be(a[c],b))}}return a}function bf(a,b,c){for(var f=0;f<a.length;f++){c[a[f]]=E(b[f])}return c}function U(a,b){var c="";for(var f=0;f<b.length;f++){var d=false;for(var g=0;g<a.length;g++){if(b[f].indexOf(a[g])>-1){d=true;break}}if(!d){c+=b[f];if(f!==b.length-1){c+="&"}}}return c}function V(a){if(typeof a==="number"){var b=new Date(a);var c=b.getHours(),f=b.getMinutes();var d=b.toString().split(" ")[1]+" "+b.getDate()+", "+b.getFullYear();var g="AM";if(c>=12){g="PM"}if(c===0){c=12}else if(c>12){c=c-12}f=f<10?"0"+f:f;var k=c+":"+f+" "+g;return d+" "+k}else{return a}}function bg(a,b){var c=N(b);var f=c.split("&");c=U(["width","height"],f);f=c.split("&");c=U(["time1","time2"],f);c+='&timeOnPage='+encodeURIComponent(b.time2-b.time1)+'&resolution='+encodeURIComponent(b.width+" \u00D7 "+b.height)+"&time1="+encodeURIComponent(V(b.time1))+"&time2="+encodeURIComponent(V(b.time2));if(typeof a.customVariables!=='undefined'||a.digitalBehaviorAnalytics){var d=OOo.evalCustomVars(a);for(var g in d){if(g=='EFMSurvey'||g=='EFMWidth'||g=='EFMHeight'){continue}c+="&"+g+"="+encodeURIComponent(OOo.serialize(d[g]))}}return c}function W(a){var b,c,f,d,g,k;if(a.efm){b=bg(a,a.metrics)}else{b=N(a.metrics);c=typeof a.tealeafId!=='undefined'?E(a.tealeafId):undefined;f=typeof a.clickTalePID!=='undefined'?E(a.clickTalePID):undefined;d=typeof a.clickTaleUID!=='undefined'?E(a.clickTaleUID):undefined;g=typeof a.clickTaleSID!=='undefined'?E(a.clickTaleSID):undefined;k=a.legacyVariables;var h=c+'|'+f+'/'+d+'/'+g;b+='&custom_var='+OOo.createLegacyVars(k,h);if(a.metrics.type==='OnPage'){b+='|iframe'}if(a.asm){b+='&asm=2'}b+="&_"+'rev=2';if(a.customVariables||a.digitalBehaviorAnalytics){customVars=OOo.evalCustomVars(a);b+='&customVars='+encodeURIComponent(OOo.serialize(customVars))}}return b}function bs(a,b){var c=a.referrerRewrite;a.metrics.referer=location.href;a.metrics.prev=encodeURIComponent(document.referrer);if(c){a.metrics.referer=OOo.referrerRewrite(c)}if(a.constructCommentCardUrl){var f='https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(a.commentCardUrl){f=a.commentCardUrl}f+=('?'+W(a));return f}else{var d=document,g=d.createElement('form'),k=d.createElement('input');g.style.display='none';g.method='post';g.target=b||'OnlineOpinion';g.action='https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(a.commentCardUrl){g.action=a.commentCardUrl}k.name='params';k.value=W(a);g.appendChild(k);d.body.appendChild(g);return g}}function bt(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.10.4'}}function bu(a){var b='';if(a&&a.search('://')>-1){var c=a.split('/');for(var f=3;f<c.length;f++){b+="/";b+=c[f]}}return b}function E(a){if(typeof a==='object'&&a!=null){for(var b=0;b<a.length;b++){a[b]=typeof a[b]==="string"?a[b].replace(/[,<>"']/g,''):a[b]}return a}else if(typeof a==='string'){a=a.replace(/[,<>"']/g,'');return a}else{return a}}function bv(a,b){a=a||{};if(typeof a==='string'){return b+'|'+E(a)}return a.override?E(a.vars):b+(a.vars?'|'+E(a.vars):'')}function bw(a,b){if(!b){b=location}if(typeof a==="string")return a;return a.searchPattern?b.href.replace(a.searchPattern,a.replacePattern):a.replacePattern}var bx=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}var a=document.body,b,c;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('iframe');b.setAttribute('sandbox','allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox'),c=false;b.setAttribute('name','oo_test');b.style.display='none';a.appendChild(b);c=!!!document.getElementsByName('oo_test')[0];a.removeChild(b);return c}else{return null}}());function by(a,b){if(typeof a!=='undefined'&&a.length>0){for(var c=0;c<a.length;c++){if(document.querySelector(a[c])){return document.querySelector(a[c])}}}return b}function bz(a,b){var c=a||window.event,f=OOo.$('#oo_waypoint_content'),d=OOo.$('#oo_waypoint_company_logo'),g=c.target;if(c.srcElement&&!c.target){g=c.srcElement}if(c.preventDefault&&c.stopPropagation){c.preventDefault();c.stopPropagation()}else{c.returnValue=false}if((g!==f&&!f.contains(g))&&(g!==d&&!d.contains(g))||(g.className==='waypoint_icon'||g.className==='waypoint_icon last')){var k=OOo.$('#oo_waypoint_container'),h=k.parentNode;Q(F());h.removeChild(k);if(b){b.focus()}}}function bA(){var a=this.options;var b="<div id='oo_waypoint_prompt' role='dialog' aria-modal='true' aria-describedby='oo_waypoint_message'></div>";if(typeof a.wpmarkup!=='undefined'){b=a.wpmarkup}var c=OOo.$('#oo_waypoint_prompt');if(c){var f=OOo.$('#oo_waypoint_container');G(F());this.showWaypoint(f);return}G(F());this.showWaypoint(b)}function bB(f){var d=document,g=0,k=typeof f==='string'?d.createElement('div'):f,h=d.createElement('div'),o,m,q,n=this.options,l=OOo?OOo.fcp?OOo.fcp:false:false,p=n?n.assetType?n.assetType:'custom':'',u,r,t=n.categories,x,v,s=d.activeElement,A=n.screenReader?n.screenReader:'This will open a new window',B,u=n.pathToAssets?n.pathToAssets:L(l,p);h.id='oo_waypoint_overlay';k.id='oo_waypoint_container';k.style.visibility='hidden';if(typeof f==='string'){k.innerHTML=f;d.body.appendChild(k)}k.appendChild(h);if(n.companyLogo&&n.companySlogan){var z=n.companyLogo.split('/');var C=z[z.length-1];o=new Image();o.onerror=function(){this.parentNode.removeChild(this)};o.src=u+C;o.alt=n.companySlogan;OOo.$('#oo_waypoint_company_logo').appendChild(o)}n.companySlogan?OOo.$('#oo_waypoint_prompt').setAttribute('aria-label',n.companySlogan):'We value your opinion!';footerBranding=document.createElement('p');footerBranding.innerText='Powered by Verint Experience Cloud';r=OOo.$('#ol_waypoint_brand_logo');r.appendChild(footerBranding);x=OOo.$('#oo_waypoint_close_prompt');B=x.children[0];B.innerHTML=n.screenReaderClose?n.screenReaderClose:'Close Dialog';for(var w in t){if(t.hasOwnProperty(w)){var y=document.createElement('button'),D=n.categories[w].icon,H=n.categories[w].buttonText,I;y.className='waypoint_icon';y.setAttribute('tabindex','0');y.innerHTML='<span id="icon_text">'+H+'</span><span class="screen_reader">'+A+'</span>';if(D&&d.addEventListener){I=document.createElement("IMG");I.setAttribute('class','waypoint_link_icon');I.onerror=function(){this.parentNode.removeChild(this)};u=t[w].assetType?L(l,t[w].assetType):u;I.setAttribute('src',u+D);y.appendChild(I)}if(typeof n.categories[w].oCode==='string'){OOo.addEventListener(y,'click',(function(c){return function(a){var b=a||window.event;window.open(n.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(b,s)}})(w),false);OOo.addEventListener(y,'keydown',(function(c){return function(a){var b=a||window.event;if(b.keyCode!==13){return}window.open(n.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(b,s)}})(w),false)}else{OOo.addEventListener(y,'click',(function(c){return function(a){var b=a||window.event;OOo.Waypoint[c].show(b);OOo.hideWaypoint(b,s)}})(w),false);OOo.addEventListener(y,'keydown',(function(c){return function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.Waypoint[c].show(b);OOo.hideWaypoint(b,s)}})(w),false)}g++;OOo.$('#waypoint_icons').appendChild(y)}}OOo.addEventListener(k,'click',function(a){var b=a||window.event;a.target!=prompt?OOo.hideWaypoint(b,s):null},false);q=OOo.$('#waypoint_icons').children;v=q[0];OOo.ooTrapFocus(OOo.$('#oo_waypoint_prompt'));OOo.addEventListener(x,'keydown',function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.hideWaypoint(b,s)},false);OOo.addEventListener(k,'keydown',function(a){var b=a||window.event;if(b.key==="Escape"||b.key==="Esc"){OOo.hideWaypoint(b,s)}else{return}},false);q[g-1].className='waypoint_icon last';k.style.visibility='visible';k.style.display='block';h.className='no_loading';bh(n,v)}function bh(a,b){if(a.linkFocus===true){b.focus()}}function bi(){var a=OOo.$('#oo_container');if(!!a){document.body.removeChild(a)}}function bC(a,b){b===undefined?b=true:b=b;if(typeof window.OOCustomEvent==='undefined'){try{(function(){OOo.OOCustomEvent.prototype=window.Event.prototype;window.OOCustomEvent=OOo.OOCustomEvent})()}catch(e){}}if(b){window.dispatchEvent(new J(a))}}function bj(a){if(a){a()}}function bD(a,b,c){var f=a||window.event;if(f.preventDefault&&f.stopPropagation){f.preventDefault();f.stopPropagation()}else{f.returnValue=false}Q(F());bi();bj(c);if(b){b.focus()}}function bE(a,b){var c=b.options;if(c.pagesHit&&(a<c.pagesHit)){return false}OOo.eraseCookieOrStorage(c,c.tunnelCookie);if(OOo.readCookieOrStorage(c,c.percentageCookie)==='1'&&!b.queued){b.queued=true;OOo.setRepromptAndLaunch(b);return true}}function bF(a){var b=a.options;window.setTimeout(function(){OOo.createCookieOrStorage(b,b.repromptCookie,1,b.repromptTime,b.cookieDomain);OOo.eraseCookieOrStorage(b,b.pagesHitCookie);b.beforePrompt();a.getPrompt()}.bind(a),b.promptDelay*1000)}function bG(a,b){var c=(b+=1);OOo.createCookieOrStorage(a,a.pagesHitCookie,c,'',a.cookieDomain);return c}function bH(){var a="<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'></div>";var b=this.options;if(typeof b.inviteMarkup!=='undefined'){a=b.inviteMarkup}var c=OOo.$('#oo_invitation_prompt');if(c){var f=OOo.$('#oo_container');G(F());this.queued=false;this.showPrompt(f);return}G(F());this.queued=false;this.showPrompt(a)}function bI(c,f){var d=document,g=typeof c==='string'?d.createElement('div'):c,k=d.createElement('div'),h,o,m=this.options,q,n,l,p=OOo?OOo.fcp?OOo.fcp:false:false,u=m?m.assetType?m.assetType:'custom':'',r,t=d.activeElement,x,v,s,A,B=m.pathToAssets?m.pathToAssets:L(p,u);x=m.screenReaderYes?m.screenReaderYes:'This will open a new window';v=m.screenReaderNo?m.screenReaderNo:'Close dialog';s=m.screenReaderClose?m.screenReaderClose:'Close dialog';k.id='oo_invitation_overlay';g.id='oo_container';g.style.visibility='hidden';if(typeof c==='string'){g.innerHTML=c;d.body.appendChild(g)}g.appendChild(k);q=OOo.$('#oo_launch_prompt');n=OOo.$('#oo_no_thanks');l=OOo.$('#oo_close_prompt');r=OOo.$('#oo_invitation_company_logo');if(!OOo.$('#oo_no_thanks > span.screen_reader')){var z=document.createElement("SPAN");z.setAttribute("class","screen_reader");n.appendChild(z)}else{var z=OOo.$('#oo_no_thanks > span.screen_reader')}var C=OOo.$('#oo_launch_prompt > span.screen_reader');var w=OOo.$('#oo_close_prompt > div.screen_reader');if(m.companyLogo&&m.companySlogan){var y=m.companyLogo.split('/');var D=y[y.length-1];h=new Image();h.onerror=function(){this.parentNode.removeChild(this)};h.src=B+D;h.alt=m.companySlogan;r.appendChild(h)}m.companySlogan?OOo.$('#oo_invitation_prompt').setAttribute('aria-label',m.companySlogan):'We value your opinion!';footerBranding=document.createElement('p');footerBranding.innerText='Powered by Verint Experience Cloud';OOo.$('#ol_invitation_brand_logo').appendChild(footerBranding);C.innerHTML=x;z.innerHTML=v;w.innerHTML=s;l.setAttribute('aria-label',s);if(m.callBacks){if(typeof m.callBacks.prompt==='function'){m.callBacks.prompt()}if(typeof m.callBacks.yesClick==='function'){OOo.addEventListener(q,'click',function(){m.callBacks.yesClick()},false)}if(typeof m.callBacks.noClick==='function'){OOo.addEventListener(n,'click',function(){m.callBacks.noClick()},false)}if(typeof m.callBacks.closeClick==='function'){OOo.addEventListener(l,'click',function(){m.callBacks.closeClick()},false)}}OOo.addEventListener(q,'click',f.bind(this),false);OOo.addEventListener(n,'click',function(a){var b=a||window.event;OOo.hidePrompt(b,t)},false);OOo.addEventListener(l,'click',function(a){var b=a||window.event;OOo.hidePrompt(b,t)},false);OOo.ooTrapFocus(OOo.$('#oo_invitation_prompt'));OOo.addEventListener(q,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}f.bind(this)}.bind(this),false);OOo.addEventListener(n,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.hidePrompt(b,t)},false);OOo.addEventListener(l,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.hidePrompt(b,t)},false);OOo.addEventListener(g,'keyup',function(a){var b=a||window.event;if(b.key==="Escape"||b.key==="Esc"){OOo.hidePrompt(b,t)}else{return}},false);g.style.visibility='visible';g.style.display='block';k.className='no_loading';t.blur();q.focus()}function bJ(){var a="<div id='oo_entry_prompt' role='dialog' aria-modal='true' aria-describedby='oo_entry_message'><div id='oo_entry_company_logo'></div><div id='oo_entry_content'><p id='oo_entry_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='entry_prompt_button'><button tabindex='0' id='oo_launch_entry_prompt'>Yes<span class='screen_reader'>This will open a new window</span></button></p><p class='entry_prompt_button'><button tabindex='0' id='oo_entry_no_thanks'>No Thanks</button></p><p id='ol_entry_brand_logo'></div><button id='oo_entry_close_prompt' tabindex='0' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></button></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_entry_prompt #oo_entry_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";var b=this.options;if(b.events.prompt.promptMarkup){a=b.events.prompt.promptMarkup}var c=OOo.$('#oo_entry_prompt');if(c){var f=OOo.$('#oo_container');G(F());this.showEntryPrompt(f);return}G(F());this.showEntryPrompt(a)}function bK(d,g){for(var k=0;k<d.length;k++){thisCb=g[k];(function(c,f){OOo.addEventListener(d[k],'click',function(a){var b=a||window.event;f(b)},false)})(k,thisCb)}}function bL(c,f){var d=document,g=typeof c==='string'?d.createElement('div'):c,k=d.createElement('div'),h=this.options,o,m,q,n,l,p=OOo?OOo.fcp?OOo.fcp:false:false,u=h?h.events.prompt.assetType?h.events.prompt.assetType:'custom':'',r,t=d.activeElement,x,v,s,A,B=h.events.prompt.pathToAssets?h.events.prompt.pathToAssets:L(p,u);x=h.screenReaderYes?h.screenReaderYes:'This will open a new window';v=h.screenReaderNo?h.screenReaderNo:'Close dialog';s=h.screenReaderClose?h.screenReaderClose:'Close dialog';k.id='oo_entry_overlay';g.id='oo_container';g.style.visibility='hidden';if(typeof c==='string'){g.innerHTML=c;d.body.appendChild(g)}g.appendChild(k);q=OOo.$('#oo_launch_entry_prompt');n=OOo.$('#oo_entry_no_thanks');l=OOo.$('#oo_entry_close_prompt');r=OOo.$('#oo_entry_company_logo');if(!OOo.$('#oo_entry_no_thanks > span.screen_reader')){var z=document.createElement("SPAN");z.setAttribute("class","screen_reader");n.appendChild(z)}else{var z=OOo.$('#oo_entry_no_thanks > span.screen_reader')}var C=OOo.$('#oo_launch_entry_prompt > span.screen_reader');var w=OOo.$('#oo_entry_close_prompt > div.screen_reader');if(h.events.prompt.companyLogo&&h.events.prompt.companySlogan){var y=h.events.prompt.companyLogo.split('/');var D=y[y.length-1];o=new Image();o.onerror=function(){this.parentNode.removeChild(this)};o.src=B+D;o.alt=h.events.prompt.companySlogan;r.appendChild(o)}h.events.prompt.companySlogan?OOo.$('#oo_entry_prompt').setAttribute('aria-label',h.events.prompt.companySlogan):'We value your opinion!';footerBranding=document.createElement('p');footerBranding.innerText='Powered by Verint Experience Cloud';OOo.$('#ol_entry_brand_logo').appendChild(footerBranding);C.innerHTML=x;z.innerHTML=v;w.innerHTML=s;l.setAttribute('aria-label',s);var H=OOo.hidePrompt.bind(this,Event,t,(this.options.callBacks&&this.options.callBacks.noClick)?this.options.callBacks.noClick:null);var I=OOo.hidePrompt.bind(this,Event,t,(this.options.callBacks&&this.options.callBacks.closeClick)?this.options.callBacks.closeClick:null);var K=[f.bind(this),H,I];var bM=[q,n,l];OOo.attachEventToPromptButtons(bM,K);OOo.ooTrapFocus(OOo.$('#oo_entry_prompt'));OOo.addEventListener(q,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}f.bind(this)}.bind(this),false);OOo.addEventListener(n,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.hidePrompt(b,t)},false);OOo.addEventListener(l,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}OOo.hidePrompt(b,t)},false);OOo.addEventListener(g,'keyup',function(a){var b=a||window.event;if(b.key==="Escape"||b.key==="Esc"){OOo.hidePrompt(b,t)}else{return}},false);if(this.options&&this.options.callBacks&&this.options.callBacks.prompt){this.options.callBacks.prompt()}g.style.visibility='visible';g.style.display='block';k.className='no_loading';t.blur();q.focus()}var bN=function(a,b,c,f){var d="width="+c;var g="height="+f;var k=window.open(a,b,d,g);var h=window.setInterval(function(){if(k.closed!==false){window.clearInterval(h);OOo.oo_feedback.launchOOPopup()}},200)};var bO=function(){return/MSIE\s/.test(navigator.userAgent)&&parseFloat(navigator.appVersion.split("MSIE")[1])<10};var bP=function(c,f){if(OOo.Browser.isMobile){if('ontouchstart'in window){c.ontouchstart=function(a){var b=a||window.event;if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation()}else{b.returnValue=false}this.options.touches++}.bind(this);c.ontouchend=function(a){var b=a||window.event;if(this.options.touches>=this.options.mobileTouches){this.show(b);this.options.touches=0}}.bind(this)}else{c.onclick=function(a){var b=a||window.event;this.show(b)}.bind(this);X(f,c,this)}}else{c.onclick=function(a){var b=a||window.event;this.show(b)}.bind(this);X(f,c,this)}};function X(b,c,f){if(b){OOo.addEventListener(c,'keyup',function(a){evt=a||window.event;if(evt.keyCode!==13){return}f.show(evt)}.bind(f),false)}else{return}}function J(a,b){b=b||{bubbles:false,cancelable:false,detail:undefined};var c=document.createEvent('CustomEvent');c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail);return c}var bQ=function(){if(typeof window.OOCustomEvent==='undefined'){try{(function(){J.prototype=window.Event.prototype;window.OOCustomEvent=J})();history.pushState=function(b){return function c(){var a=b.apply(this,arguments);window.dispatchEvent(new J('oospachange'));return a}}(history.pushState);history.replaceState=function(b){return function c(){var a=b.apply(this,arguments);window.dispatchEvent(new J('oospachange'));return a}}(history.replaceState);window.addEventListener('popstate',function(){window.dispatchEvent(new J('oospachange'))})}catch(e){}}};function bR(h){var o=h.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');var m=Array.prototype.slice.call(o);var q=o[0];var n=o[o.length-1];var l=9;var p=0;OOo.addEventListener(h,'keydown',function(a){var b=m.indexOf(document.activeElement);var c=a||window.event;var f=(c.key==="Up"||c.key==="ArrowUp"||c.keyCode===38);var d=(c.key==="Down"||c.key==="ArrowDown"||c.keyCode===40);var g=(c.key==='Tab'||c.keyCode===l);var k=(d||f);if(!g&&!k){return}if(c.shiftKey){if(g){if(document.activeElement===q){n.focus();if(c.preventDefault){c.preventDefault()}else{c.returnValue=false}}}}else{if(k){if(f){c.preventDefault();p=b>0?b-1:m.length-1;o[p].focus()}else if(d){c.preventDefault();p=b+1<m.length?b+1:0;o[p].focus()}}else if(g){if(document.activeElement===n){q.focus();if(c.preventDefault){c.preventDefault()}else{c.returnValue=false}}}}})}Y(OOo,{extend:Y,toQueryString:N,addEventListener:bn,$:bl,$$:bm,appendOOForm:bs,removeEventListener:bo,createMetrics:bt,truncateMetric:bu,createLegacyVars:bv,DYNAMIC_FRAME_NAME_IS_BUGGY:bx,getFormParams:W,referrerRewrite:bw,hidePrompt:bD,getPrompt:bH,showPrompt:bI,hideWaypoint:bz,getWaypoint:bA,showWaypoint:bB,getEntryPrompt:bJ,showEntryPrompt:bL,exitChat:bN,checkIfIE9orBelow:bO,removeCharacters:E,addCustomSpaEvent:bQ,getValFromPath:M,attachEventToWrapper:bP,convertFunctionToObject:R,collectKeyNames:S,collectValueNames:T,checkPrimitiveType:bc,prepareCVFunctionValue:bb,removeParens:ba,assignKeyValue:be,evalCustomVars:bq,runFnWithArgs:bd,OOCustomEvent:J,keyPressLaunchCard:X,attachEventToPromptButtons:bK,removeContainerFromDom:bi,invokeCallback:bj,callYesCallback:bS,convertToEFMParams:bg,dispatchOOEvent:bC,assessPagesHit:bE,incrementPagesHit:bG,setRepromptAndLaunch:bF,removeMetrics:U,assign:Z,createFriendlyDateTime:V,ooTrapFocus:bR,ariaHide:G,ariaShow:Q,ariaProcessEls:P,DOMWatcher:O,getDOMElems:F,getFirstExistingElement:by,checkGateway:bp,getPathToAssets:L,determineIconFileNameAndLocation:bT,focusWaypointLink:bh})}());(function(){function g(a){if(!a){return null}switch(typeof a){case'number':case'boolean':case'function':return a;case'string':return'\"'+a+'\"';case'object':var b,c,f,d;if(a.constructor===Array||typeof a.callee!=='undefined'){b='[';f=a.length;for(c=0;c<f-1;c+=1){b+=g(a[c])+','}b+=g(a[c])+']'}else{b='{';for(d in a){if(a.hasOwnProperty(d)){b+=d+':'+g(a[d])+','}}b=b.replace(/\,$/,'')+'}'}return b;default:return null}}OOo.extend(OOo,{serialize:g})}());(function(){function d(a,b,c){var f;if(a.search(b[0])!==-1){OOo.createCookieOrStorage(this.options,c,0);return false}else if(OOo.readCookieOrStorage(this.storage,c)){f=parseInt(OOo.readCookieOrStorage(this.options,c),10);if((a.search(b[f+1])!==-1)&&(f+1!==b.length-1)){OOo.createCookieOrStorage(this.options,c,f+1);return false}else if(a.search(b[f])!==-1){return false}else if(f+1===b.length-1&&a.search(b.pop())!==-1){OOo.eraseCookieOrStorage(this.options,c);return true}else{OOo.eraseCookieOrStorage(this.options,c);return false}}else{return false}}OOo.extend(OOo,{checkTunnel:d})}());(function(){function h(a,b){if(!b){b=location}var c=a.cookieName||'oo_abandon',f=OOo.readCookieOrStorage(this.options,c),d=a.startPage,g=a.endPage,k=a.middle;if(!f){if(b.pathname.indexOf(d)!==-1){OOo.createCookieOrStorage(this.options,c)}return false}else if(b.pathname.indexOf(g)!==-1){OOo.eraseCookieOrStorage(this.options,c);return false}else if(b.pathname.search(k)!==-1){return false}else{OOo.eraseCookieOrStorage(this.options,c);return true}}OOo.extend(OOo,{checkAbandonment:h})}());(function(){function f(a){var b,c;for(b=a.length-1;b>=0;b-=1){if(a[b].read){c=OOo.readCookieOrStorage(this.options,a[b].name);if(!!c&&c===a[b].value){return true}else if(typeof a[b].value==='undefined'&&!!OOo.readCookieOrStorage(this.options,a[b].name)){return true}}}return false}function d(a){var b;for(b=a.length-1;b>=0;b-=1){if(a[b].set){OOo.createCookieOrStorage(this.options,a[b].name,a[b].value,a[b].expiration)}}}OOo.extend(OOo,{checkThirdPartyCookies:f,setThirdPartyCookies:d})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}var d=Array.prototype.slice;function g(a,b){var c=a.length,f=b.length;while(f){f-=1;a[c+f]=b[f]}return a}function k(a,b){a=d.call(a,0);return g(a,b)}function h(b){if(arguments.length<2&&typeof b==="undefined"){return this}var c=this,f=d.call(arguments,1);return function(){var a=k(f,arguments);return c.apply(b,a)}}return{bind:h}}()));(function(){function k(){var a=location;var b;if(a.host.search(/\.[a-z]+/)!==-1){b=a.host.split('.').reverse();if(b.length>3){return a.host}b='.'+b[1]+'.'+b[0]}else{b=a.host}return b}function h(a,b,c,f){var d='',g='';if(c){d=new Date();d.setTime(d.getTime()+(c*1000));g="; expires="+d.toGMTString()}a=OOo.removeCharacters(a);b=OOo.removeCharacters(b);g=OOo.removeCharacters(g);if(f){f=OOo.removeCharacters(f);document.cookie=a+"="+b+g+"; path=/; domain="+f+";"}else if(location.host!==k()){document.cookie=a+"="+b+g+"; path=/; domain="+k()+";"}else{document.cookie=a+"="+b+g+"; path=/;"}}function o(a){var b=a+"=",c=document.cookie.split(';'),f,d;for(d=0;d<c.length;d+=1){f=c[d];while(f.charAt(0)===' '){f=f.substring(1,f.length)}if(f.indexOf(b)===0){return f.substring(b.length,f.length)}}return null}function m(a){h(a,"",-1)}function q(a,b,c,f,d){var b=b||'',c=c||'',f=f||0;a.useBrowserStorage?(OOo.createBrowserStorageItem(b,c,f)):(OOo.createCookie(b,c,f,d))}function n(a,b){return a.useBrowserStorage?(OOo.readBrowserStorageItem(b)):(OOo.readCookie(b))}function l(a,b){a.useBrowserStorage?(OOo.eraseLocalStorageItem(b)):(OOo.eraseCookie(b))}function p(){var a="oo_test";try{localStorage.setItem(a,a);localStorage.removeItem(a);return true}catch(e){return false}}function u(){var a="oo_test";try{sessionStorage.setItem(a,a);sessionStorage.removeItem(a);return true}catch(e){return false}}function r(a,b,c){var f=(new Date()).getTime(),c=c||0;if(u&&(typeof c==="undefined"||c===0)){sessionStorage.setItem(a,JSON.stringify({oo_val:b,dateSet:f}));return}else{if(p){localStorage.setItem(a,JSON.stringify({oo_val:b,dateSet:f,dateExpire:(c*1000)}))}}}function t(a){var b=JSON.parse(sessionStorage.getItem(a)),c=JSON.parse(localStorage.getItem(a));if(b&&b.oo_val){return b.oo_val}else if(c&&((new Date()).getTime()>=(c.dateSet+c.dateExpire))){localStorage.removeItem(a);return null}else{if(c&&c.oo_val){return c.oo_val}else{return null}}}function x(a){if(p){if(localStorage.getItem(a)){localStorage.removeItem(a)}}}OOo.extend(OOo,{getCookieDomain:k,createCookie:h,readCookie:o,eraseCookie:m,createBrowserStorageItem:r,readBrowserStorageItem:t,eraseLocalStorageItem:x,createCookieOrStorage:q,readCookieOrStorage:n,eraseCookieOrStorage:l})}());OOo.Ocode=function(b){var c=OOo.Browser,f,d;var g=this;if(b.disableMobile&&c.isMobile){return}if(b.disableDesktop&&c.isDesktop){return}if(b.disableNoniOS&&c.isMobileNonIOS){return}OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,b);f=this.options;if(f.spa||OOo.spa){OOo.addCustomSpaEvent()}f.metrics=OOo.createMetrics();this.frameName=encodeURIComponent(f.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion');if(f.cookie&&OOo.Ocode.matchUrl.call(this,f.cookie,location)){if((f.spa||OOo.spa)&&f.events){OOo.addEventListener(window,'oospachange',function k(){if(f.cookie&&OOo.Ocode.matchUrl.call(g,f.cookie,location)){return}g.setUpAndDisableEventsElements(f,g)})}return}if(f.thirdPartyCookies&&OOo.checkThirdPartyCookies(f.thirdPartyCookies)){return}if(f.abandonment&&!OOo.checkAbandonment(f.abandonment)){return}if(f.tunnel&&!OOo.checkTunnel(location.pathname,f.tunnel.path,f.tunnel.cookieName)){return}if(f.events&&f.events.onSingleClick){this.singProbability=Math.random()<1-f.events.onSingleClick/100}else if(f.events&&!f.events.onSingleClick&&f.events.onSingleClick<1){this.singProbability=true}f.tealeafId=OOo.readCookieOrStorage(f,f.tealeafCookieName)||OOo.readCookieOrStorage(f,f.sessionCookieName);if(f.events){if((f.spa||OOo.spa)&&f.events.onEntry){OOo.addEventListener(window,'oospachange',function k(){if(f.cookie&&OOo.Ocode.matchUrl.call(g,f.cookie,location)){return}g.setUpAndDisableEventsElements(f,g)})}this.setUpAndDisableEventsElements(f,g);if((f.spa||OOo.spa)&&f.events.onExit){OOo.addEventListener(window,'oospachange',function h(a){OOo.removeEventListener(window,'oospachange',h);if(OOo.Browser.Opera){OOo.removeEventListener(window,'beforeunload',a.boundShow)}else if(OOo.Browser.iOs){OOo.removeEventListener(window,'pagehide',a.boundShow)}else{OOo.removeEventListener(window,'beforeunload',a.boundShow)}OOo.removeEventListener(document.body,'mousedown',a.boundDisable);OOo.removeEventListener(document.body,'keydown',a.boundDisable)})}}if(f.floating){this.floating()}else if(f.bar){this.bar()}else if(f.tab){this.tab()}};function bU(a,b){b.setupEvents();if(a.events.disableLinks||a.events.disableFormElements||a.events.disableSelectors){b.setupDisableElements()}}function bS(a){if(a.callBacks&&a.callBacks.yesClick){a.callBacks.yesClick()}}function bT(a,b,c,f){var d,g,k=a?a.search(/\//)>-1:false,h=a?a.search(/^.*\.(jpg|gif|png|svg|jpeg|tiff)$/gi)>-1:false;if(a&&k&&h){return a}else if(a&&!k&&h){d=a;return OOo.getPathToAssets(b,'custom')+d}else if(!a||(a&&!k&&!h)){g=c?c=='custom'?'custom':f:f;d='oo_icon_'+g+'.gif';return OOo.getPathToAssets(b,c)+d}else{return}}OOo.Ocode.prototype={show:function(d,g){var k=d||window.event;if(g!=='exit'&&g!=='entry'&&g!=='onSingleClick'){if(k.preventDefault&&k.stopPropagation){k.preventDefault();k.stopPropagation()}else{k.returnValue=false}}if(this.onPageCardVisible){return}var h=this.options,o;if(h.events&&h.events.prompt){if(h.cookie)OOo.eraseCookieOrStorage(h,h.cookie.name||'oo_r');OOo.callYesCallback(h);OOo.hidePrompt(k)}if(this.interruptShow){return}if(!this.floatingLogo&&h.cookie&&OOo.Ocode.matchUrl.call(this,h.cookie)){return}if(!h.floating&&h.events&&this.singProbability){return}if(h.events&&h.events.onSingleClick){this.singProbability=true}if(h.cookie){OOo.Ocode.tagUrl.call(this,h.cookie)}if(h.thirdPartyCookies){if(OOo.checkThirdPartyCookies(h.thirdPartyCookies)){return}OOo.setThirdPartyCookies(h.thirdPartyCookies)}if(this.floatingLogo){this.floatingLogo.children[0].blur()}if(this.floatingLogo&&h.disappearOnClick){this.floatingLogo.style.display='none'}if(typeof window.ClickTale==='function'){if(!h.clickTalePID){h.clickTalePID=window.ClickTaleGetPID()||null}h.clickTaleUID=window.ClickTaleGetUID()||null;h.clickTaleSID=window.ClickTaleGetSID()||null;var m=function(a){if(a.origin==='https://secure.opinionlab.com'){if(typeof window.ClickTaleEvent==='function'&&a.data!==''){var b=JSON.parse(a.data),c=window.ClickTaleEvent;for(var f in b){c(f+':'+b[f])}}}};OOo.addEventListener(window,'message',m,false)}OOo.dispatchOOEvent('OL_CC_Launch');if(h.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}if(typeof h.onClickCallback==='function'){h.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(a,b){if(!b){b=location}var c=a.name||'oo_r',f=a.type==='page'?b.href:b.hostname,d=OOo.readCookieOrStorage(this.options,c)||'';if(OOo.Ocode.matchUrl.call(this,a,b)){return}OOo.createCookieOrStorage(this.options,c,d+f,a.expiration,a.domain)},matchUrl:function(a,b){if(!b){b=location}var c=OOo.readCookieOrStorage(this.options,a.name||'oo_r'),f;if(!c){return false}f=a.type==='page'?b.href:b.hostname;return c.search(f)!==-1}});(function(){var o=0;function m(){var a=this.options,b=a.newWindowSize||[545,325],c=[parseInt((a.metrics.height-b[1])/2,10),parseInt((a.metrics.width-b[0])/2,10)],f,d,g='resizable=yes,location=no,status=no,scrollbars=1,width='+b[0]+',height='+b[1]+',top='+c[0]+',left='+c[1],k='OnlineOpinion',h;if(a.newWindow){k=k+(o++)}a.metrics.time2=(new Date()).getTime();a.metrics.type='Popup';a.metrics.currentURL=location.href;if(OOo.Browser.isChromeIOS){k='_0'}if(OOo.Browser.isSafariDesktop){a.constructCommentCardUrl=true}if(a.constructCommentCardUrl){h=OOo.appendOOForm(a,k);d=window.open(h,k,g)}else{f=OOo.appendOOForm(a,k);var h='https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+f.children[0].value;if(a.commentCardUrl){h=a.commentCardUrl+'?'+f.children[0].value}if((OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1)||!OOo.Browser.isMobile){d=window.open(h,k,g);f.submit()}else{d=window.open('',k,g);if(d.location.href==='about:blank'){d.location.href=h}else{d.close();d=window.open(h,k,g)}if(d&&!OOo.Browser.isChromeIOS){f.submit()}}}}OOo.extend(OOo.Ocode.prototype,{launchOOPopup:m})}());(function(){function q(){var c=this.options.events,f=[false,false],d=['onExit','onEntry'],g='beforeunload',k,h,o,m;if(OOo.Browser.Opera){g='unload'}if(OOo.Browser.iOs){g='pagehide'}if(c.prompt){OOo.extend(this.options,{promptMarkup:c.prompt.promptMarkup,neverShowAgainButton:false,pathToAssets:c.prompt.pathToAssets})}for(h=d.length-1;h>=0;h-=1){k=d[h];if(c[k]instanceof Array){o=c[k];m=o.length;while(m&&!f[h]){m-=1;if(window.location.href.search(o[m].url)!==-1&&Math.random()>=1-o[m].p/100){f[h]=true;this.qualified=true}else{this.qualified=false;n(this)}}}else if(c[k]){if(Math.random()>=1-c[k]/100){f[h]=true;this.qualified=true}else{this.qualified=false;n(this)}}}if(f[0]){this.showOnUnload=function(a){var b=a||window.event;this.show(b,'exit')}.bind(this);this.boundShow=this.showOnUnload.bind(this);OOo.addEventListener(window,g,this.boundShow,false)}if(f[1]){if(c.delayEntry){n(this)}else{if(c.prompt){this.getEntryPrompt()}else{(function(a){var b=a||window.event;this.show(b,'entry')}).bind(this)()}}}}function n(a){var b=a.options.events;if(b.terminateOnSpaChange&&(typeof b.terminateOnSpaChange==='object'||typeof b.terminateOnSpaChange==='string')){var c=a.handleTimer('terminate',a)}if(c){return}if(b.enableOnSpaChange||b.enableOnSpaChange===false){if(typeof b.enableOnSpaChange!=='boolean'){a.handleTimer('enable',a)}else if(b.enableOnSpaChange===false){if(typeof b.cancelOnSpaChange==='undefined'){a.options.events.cancelOnSpaChange=true}a.handleTimer('cancel',a)}else if(b.enableOnSpaChange===true){a.handleTimer('enable',a)}}else if(b.cancelOnSpaChange||b.cancelOnSpaChange===false){if(b.cancelOnSpaChange!==false){a.handleTimer('cancel',a)}}else{a.options.events.cancelOnSpaChange=true;a.handleTimer('cancel',a)}}function l(d){this.delayRunning=true;d.entryDelayTimer=window.setTimeout(function(c){if(d.options.cookie&&OOo.Ocode.matchUrl.call(d,d.options.cookie,location)){return}var f=c||window.event;if(this.options.events.prompt){this.getEntryPrompt()}else{(function(a){var b=a||window.event;this.show(b,'entry')}).bind(this)()}this.delayRunning=false}.bind(d),d.options.events.delayEntry*1000)}function p(a,b){var c=b.options.events;var f;switch(a){case'enable':f=c.enableOnSpaChange;state=false;break;case'cancel':f=c.cancelOnSpaChange;state=true;break;case'terminate':f=c.terminateOnSpaChange?c.terminateOnSpaChange:c.cancelOnSpaChange;state=true;break;default:state=false}if(Array.isArray(f)){for(matcher in f){if(window.location.href.search(f[matcher])>=0){return{keepTimer:!state,terminate:a==='terminate'?true:false}}}}else if(typeof f==='boolean'){return{keepTimer:!state,terminate:a==='terminate'?true:false}}else if(window.location.href.search(f)>=0){return{keepTimer:!state,terminate:a==='terminate'?true:false}}return{keepTimer:state,terminate:a==='terminate'?true:false}}function u(a,b){if(b.options.cookie&&OOo.Ocode.matchUrl.call(b,b.options.cookie,location)){return}var c=p(a,b);if(!c.keepTimer){if(b.delayRunning&&c.terminate){b.qualified=false};clearTimeout(b.entryDelayTimer);b.delayRunning=false;if(b.qualified===false&&c.terminate){return"terminate"}else if(b.qualified){b.entryTimeout(b)}}else if(b.qualified&&!b.delayRunning&&!c.terminate){b.entryTimeout(b)}}function r(a){var b=a||window.event,c=a.target||a.srcElement,f=this.options.events,d=c.parentNode,g=5,k=0;while(d&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&k!==g){if(d.nodeName==='A'){c=d}d=d.parentNode;k+=1}if(f.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}if(f.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(f.disableLinks)!==-1){this.interruptShow=true}}function t(a){this.interruptShow=true}function x(a){this.getDOMElemsBySelector(this.makeArrOfSelectors(this))}function v(a){var b=a.options.events.disableSelectors;return b}function s(a){if(typeof a==='object'&&a.length!==0){var b;for(i=0;i<a.length;i++){b=document.querySelectorAll(a[i]);this.addEventListenerToDOMEls(b)}}}function A(a){if(!!a){for(j=0;j<a.length;j++){OOo.addEventListener(a[j],'mousedown',t.bind(this));OOo.addEventListener(a[j],'keydown',t.bind(this))}}}function B(){this.boundDisable=r.bind(this);OOo.addEventListener(document.body,'mousedown',this.boundDisable);OOo.addEventListener(document.body,'keydown',this.boundDisable);if(this.options.events.disableSelectors){x.call(this)}if(!this.options.events.disableFormElements){return}var a=document.getElementsByTagName('form'),b;for(b=a.length-1;b>=0;b-=1){OOo.addEventListener(a[b],'submit',t.bind(this))}}OOo.extend(OOo.Ocode.prototype,{setupEvents:q,setupDisableElements:B,setUpAndDisableEventsElements:bU,disableSelectors:x,makeArrOfSelectors:v,getDOMElemsBySelector:s,addEventListenerToDOMEls:A,disableSurvey:t,checkForURLMatch:p,handleTimer:u,entryTimeout:l,getEntryPrompt:function(){OOo.getEntryPrompt.call(this)},showEntryPrompt:function(a){if(this.options.cookie){OOo.Ocode.tagUrl.call(this,this.options.cookie)}OOo.showEntryPrompt.call(this,a,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var f=document,d=this.floatingLogo=document.createElement('div'),g=f.createElement('div'),k=f.createElement('img'),h=f.createElement('span'),o=f.createElement('div'),m=f.createElement('button'),q=f.createElement('span'),n=this.options,l=n.floating,p=OOo.$('#'+n.contentId),u='10px',r=l.id,t=f.createElement('span'),x,v,s,A,B,z=this.options.mobileTouches||2,C=OOo.getFirstExistingElement(this.options.altParents,f.body);fcp=OOo?OOo.fcp?OOo.fcp:false:false;l.iconColor=l?l.iconColor?l.iconColor:'black':'',l.assetType=l?l.assetType?l.assetType:'static':'',floatIconPath=OOo.determineIconFileNameAndLocation(l.iconPath,fcp,l.assetType,l.iconColor);this.options.mobileTouches=this.options.mobileTouches||2;this.options.touches=0;l.icon=l.icon===undefined?true:l.icon;k.onerror=function(){this.parentNode.removeChild(this);h.className+=' no_image'};function w(a){return a.offsetLeft+a.offsetWidth}function y(a){v.style.left=w(p)+'px'}t.innerHTML=l.screenReader?l.screenReader:'This will open a new window';t.className="screen_reader";if(r){d.id=r}d.className='oo_feedback_float';o.className='oo_transparent';g.className='olUp';m.className='olOver';k.setAttribute('src',floatIconPath);k.className='float_icon';h.className='float_text';d.tabIndex=0;h.innerHTML=l.caption||'Feedback';if(l.icon){g.appendChild(k)}else{h.className+=' no_image'}g.appendChild(h);d.appendChild(t);d.appendChild(g);q.innerHTML=l.hoverCaption||'Click here to<br>rate this page';m.appendChild(q);d.appendChild(m);d.appendChild(o);if(l.position&&l.position.search(/Content/)&&p){v=this.spacer=f.createElement('div');s=OOo.Browser.WebKit?f.body:f.documentElement;v.id='oo_feedback_fl_spacer';v.style.left=w(p)+'px';C.appendChild(v);switch(l.position){case'rightOfContent':A=function(a){d.style.left=(w(p)-s.scrollLeft)+'px'};break;case'fixedPreserveContent':A=function(a){var b=OOo.Browser.IE?f.body.clientWidth:window.innerWidth,c=s.scrollLeft;if(b<=w(p)+d.offsetWidth+parseInt(u,10)){d.style.left=(w(p)-c)+'px'}else{d.style.left='';d.style.right=u}};break;case'fixedContentMax':A=function(a){var b=OOo.Browser.IE?f.body.clientWidth:window.innerWidth;if(b<=w(p)+d.offsetWidth+parseInt(u,10)){d.style.left='';d.style.right=u}else{d.style.left=(w(p)-s.scrollLeft)+'px';d.style.right=''}};break}window.setTimeout(A,0);OOo.addEventListener(window,'scroll',A,false);OOo.addEventListener(window,'resize',A,false);OOo.addEventListener(window,'resize',y,false)}else{d.style.right=u}if(!this.options.disableShow){OOo.attachEventToWrapper.call(this,d,true)}C.appendChild(d)}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var a=document,b=this.floatingLogo=a.createElement('button'),c=a.createElement('span'),f=this.options,d=f?f.bar?f.bar:undefined:undefined,g=a.createElement('img'),k=a.createElement('span'),h=OOo.getFirstExistingElement(this.options.altParents,a.body);fcp=OOo?OOo.fcp?OOo.fcp:false:false;d.assetType=d?d.assetType?d.assetType:'static':'',d.iconColor=d?d.iconColor?d.iconColor:'white':'',barIconPath=OOo.determineIconFileNameAndLocation(d.iconPath,fcp,d.assetType,d.iconColor);f.mobileTouches=f.mobileTouches||2;f.touches=0;d.icon=d.icon===undefined?true:d.icon;c.innerHTML=d.screenReader?d.screenReader:'This will open a new window';c.className='screen_reader';g.className='bar_icon';g.onerror=function(){this.parentNode.removeChild(this)};g.setAttribute('src',barIconPath);k.className='bar_text';this.reflowBar=OOo.K;b.id='oo_bar';b.setAttribute('tabindex','0');b.setAttribute('role','link');k.innerHTML=d.caption||'Feedback';b.appendChild(k);b.appendChild(c);if(d.icon){b.appendChild(g)}if(!f.disableShow){OOo.attachEventToWrapper.call(this,b)}h.appendChild(b)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var a=document,b=this.floatingLogo=a.createElement('button'),c=a.createElement('span'),f=this.options,d=f.tab,g='Feedback',k=d.tabType,h='right',o=false,m=OOo.readCookieOrStorage(f,'oo_tab_extend'),q=2592000,n=OOo.getFirstExistingElement(this.options.altParents,a.body);tabImg=document.createElement('img'),fcp=OOo?OOo.fcp?OOo.fcp:false:false;d.assetType=d?d.assetType?d.assetType:'static':'',d.iconColor=d?d.iconColor?d.iconColor:'white':'',tabIconPath=OOo.determineIconFileNameAndLocation(d.iconPath,fcp,d.assetType,d.iconColor);this.options.mobileTouches=this.options.mobileTouches||2;this.options.touches=0;f.icon=f.icon==undefined?true:f.icon;switch(k){case 1:b=this.floatingLogo=a.createElement('button');c=a.createElement('span');b.setAttribute('tabindex','0');b.setAttribute('role','link');b.id='oo_tab_'+k;if(d.position){h=d.position}if(d.extendEveryPage){o=d.extendEveryPage}if(d.extendExpiration){q=d.extendExpiration}b.className=tabClass='oo_tab_'+h+'_'+k;c.className='screen_reader';tabImg.className='tab_icon';if(typeof d.tabIndex==='number'){b.tabIndex=d.tabIndex}else{b.tabIndex=0}if(d.verbiage){g=d.verbiage}b.innerHTML=g;c.innerHTML=d.screenReader?d.screenReader:'This will open a new window';b.appendChild(c);if(o){setTimeout(function(){b.className+=' small'},2500)}else{if(m==='prevent'){b.className+=' small'}else{var l;if(f.cookie&&f.cookie.domain){l=f.cookie.domain}else{l=OOo.getCookieDomain()}OOo.createCookieOrStorage(f,'oo_tab_extend','prevent',q,l);setTimeout(function(){b.className+=' small'},2500)}}break;default:b=this.floatingLogo=a.createElement('button');b.id='oo_tab';b.className='oo_tab_'+(d.position||h);b.setAttribute('tabindex','0');b.setAttribute('role','link');if(!document.addEventListener||OOo.checkIfIE9orBelow()){b.className+=' oo_legacy'}if(d.wcagBasePath){b.className+=' wcag'}if(d.verbiage){g=d.verbiage}var p=document.createElement("textarea");p.innerHTML=g;g=p.value;var u=document.createTextNode(g);b.appendChild(u);if(c){c.className='screen_reader';c.innerHTML=d.screenReader?d.screenReader:'This will open a new window';b.appendChild(c)}}d.icon=d.icon===undefined?true:d.icon;if(d.icon){tabImg.setAttribute('src',tabIconPath);tabImg.setAttribute('alt',d.logoAltText||'OpinionLab Logo');b.appendChild(tabImg);tabImg.onerror=function(){this.parentNode.removeChild(this)}}if(!this.options.disableShow){OOo.attachEventToWrapper.call(this,b)}n.appendChild(b)}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var d=document,g=OOo.Cache.overlay||d.createElement('div'),k=this.wrapper=d.createElement('div'),h=d.createElement('a'),o=OOo.Cache.loadingImg||d.createElement('img');OOo.Cache.overlay=g;OOo.Cache.loadingImg=o;g.id='oo_overlay';o.id='loading_icon';var m=OOo?OOo.fcp?OOo.fcp:false:false,q=d.createElement('div'),n=d.createElement('span'),l=encodeURIComponent(this.frameName),p=d.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+l+'">':'iframe'),u=d.createDocumentFragment(),r=this.options,t=r.onPageCard,x=r.onPageCardHeight,v,s='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',A,B,z=false,C=this,w,y,D,H=d.createElement('span');p.setAttribute('sandbox','allow-forms allow-scripts allow-same-origin allow-popups-to-escape-sandbox allow-popups');var t=r.onPageCard;if(r.events){if(r.events.prompt){v=r.events}else{v=undefined}}else if(r.bar){v=r.bar}else if(r.tab){v=r.tab}else if(r.floating){v=r.floating}else{v=undefined}var I=v?v.assetType?v.assetType:'static':'';o.setAttribute('src',OOo.getPathToAssets(m,'static')+'oo_loading.gif');function K(a){OOo.ariaShow(OOo.getDOMElems());if(a&&a.preventDefault){a.preventDefault()}document.body.focus();p.tabIndex=-1;p.title="empty";p['aria-hidden']='true';g.style.display='none';g.className='';d.body.removeChild(k);if(window.postMessage){OOo.removeEventListener(window,'message',w)}else{window.clearInterval(B)}z=false;C.onPageCardVisible=false;return false}w=OOo.Ocode.postMessageHandler(function(a){var b=typeof a==='object'?parseInt(a[1],10):parseInt(a,10),c,f;if(b>0){if(z&&(typeof a!=='object'||a[0]!=='frameHeightOverride')){return}z=true;c=window.innerHeight||d.documentElement.clientHeight||d.body.clientHeight;f=b;D=k.offsetTop;if(f+D>c){f=c-40-D}f=x?x:f;p.style.width='555px';q.style.width='555px';p.style.height=f+'px';k.style.top=(c-f-40)/2+'px';k.style.visibility='visible';if(n.clientHeight<20){n.style.height=k.offsetHeight+'px'}g.className="no_loading";C.onPageCardVisible=true;(typeof document.forms[0]!=='undefined')&&d.body.removeChild(A)}else if(a==='submitted'){K()}if(OOo.Browser.IE&&d.compatMode==="BackCompat"){window.scrollTo(0,0)}},C.options.commentCardUrl);r.metrics.type='OnPage';OOo.Cache.overlay=g;g.id='oo_overlay';g.style.display='block';g.className='';q.className='iwrapper';k.className='oo_cc_wrapper';o.className='loading_icon';k.setAttribute('role','alert');k.setAttribute('aria-describedby','comment_card_description');H.className='screen_reader';H.id='comment_card_description';H.innerHTML='Please leave your feedback in the comment card you just activated';k.appendChild(H);h.className='oo_cc_close';h.innerHTML='<span class="screen_reader">Close dialog</span><span aria-hidden="true">&#10006;</span>';h.title=r.closeTitle?r.closeTitle:'Close dialog';if(!d.addEventListener){q.style.outline='1px solid #cdcdcd'}k.style.visibility='hidden';h.tabIndex=0;OOo.addEventListener(h,'keyup',function(a){var b=a||window.event;if(b.keyCode!==13){return}K()},false);if(OOo.Browser.IE){p.frameBorder='0';if(!window.XMLHttpRequest||d.compatMode==="BackCompat"){y=Math.max(d.documentElement.clientWidth,d.body.offsetWidth);g.style.position='absolute';g.style.width=d.compatMode==="BackCompat"?(y-21)+'px':y+'px';g.style.height=Math.max(d.documentElement.clientHeight,d.body.offsetHeight)+'px';k.style.position='absolute';OOo.addEventListener(window,'scroll',function(){g.style.top=(d.body.scrollTop+document.body.clientHeight-g.clientHeight)+'px';k.style.top=(d.body.scrollTop+D+25)+'px'})}}OOo.addEventListener(h,'click',K);if(t.closeWithOverlay&&!OOo.Browser.isMobile){k.appendChild(n);n.onclick=K;g.onclick=K}p.src=' ';p.name=l;p.title='Comment Card';OOo.ariaHide(OOo.getDOMElems());q.appendChild(h);q.appendChild(p);k.appendChild(q);u.appendChild(k);g.appendChild(o);u.appendChild(g);d.body.appendChild(u);if(window.postMessage){OOo.addEventListener(window,"message",w)}else{B=setInterval(w,500)}r.metrics.time2=(new Date()).getTime();r.metrics.currentURL=location.href;if(r.constructCommentCardUrl){p.setAttribute('src',OOo.appendOOForm(r,l))}else{A=OOo.appendOOForm(r,l);A.submit()}}});OOo.extend(OOo.Ocode,{postMessageHandler:function(f,d,g){return function(a){var b='https://secure.opinionlab.com',c;if(!g){g=location}if((a&&!(a.origin===b||a.origin.indexOf(d)!==0))||(!a&&g.hash.search('OL=')===-1)){return false}c=a?a.data:g.hash.split('=').pop();if(!a&&location.hash){location.hash=''}f(c);return c}}});OOo.Invitation=function(c){var f=OOo.Browser;this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,useBrowserStorage:false,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',cookieDomain:'',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitor:{monitorWindow:'oo_inv_monitor.html'},companySlogan:'We value your opinion',beforePrompt:OOo.K,callBacks:{prompt:'',yesClick:'',noClick:'',closeClick:''},inviteMarkup:"<div id='oo_invitation_prompt' aria-modal='true' role='dialog' aria-describedby='oo_invite_message'><div id='oo_invitation_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><button type='button' tabindex='0' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></button></p><p class='prompt_button'><button type='button' tabindex='0' id='oo_no_thanks'>No Thanks<span class='screen_reader'>Close dialog</span></button></p><p id='ol_invitation_brand_logo'></p></div><button type='button' id='oo_close_prompt' tabindex='0' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></button></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->"};if(c.spa||OOo.spa){OOo.addCustomSpaEvent()}if(c.disableMobile&&f.isMobile){return}if(c.disableDesktop&&f.isDesktop){return}if(c.disableNoniOS&&f.isMobileNonIOS){return}this.popupShown=false;OOo.extend(this.options,c);var d=this.options,g=parseInt(OOo.readCookieOrStorage(d,d.pagesHitCookie),10)||0,k=OOo.removeCharacters(window.location.href),h=OOo.checkGateway('self-hosted'),o=OOo.removeCharacters(window.document.referrer),m,q=OOo.fcpEnvironment,n=OOo?OOo.fcp?OOo.fcp:false:false,l=OOo.createMetrics(),p=OOo.serialize(OOo.evalCustomVars(d)),u=false,r;OOo.Invitation.friendlyDomains=d.friendlyDomains||null;OOo.Invitation.instance=this;r=d.screenReaderMonitor?d.screenReaderMonitor:'This button will redirect this window to a comment card';var t={weight:Number(OOo.readCookieOrStorage(d,'oo_OODynamicRewrite_weight')),searchPattern:OOo.readCookieOrStorage(d,'oo_OODynamicRewrite_searchPattern'),replacePattern:OOo.readCookieOrStorage(d,'oo_OODynamicRewrite_replacePattern')};OOo.eraseCookieOrStorage(d,'oo_OODynamicRewrite_weight');OOo.eraseCookieOrStorage(d,'oo_OODynamicRewrite_searchPattern');OOo.eraseCookieOrStorage(d,'oo_OODynamicRewrite_replacePattern');if(!window.OOoDynamicRewrite||window.OOoDynamicRewrite.weight<t.weight){window.OOoDynamicRewrite=t}if(window.OOoDynamicRewrite&&('number'===typeof window.OOoDynamicRewrite.weight)&&!isNaN(window.OOoDynamicRewrite.weight)){OOo.createCookieOrStorage(d,'oo_OODynamicRewrite_weight',window.OOoDynamicRewrite.weight,'',d.cookieDomain);if(window.OOoDynamicRewrite.searchPattern){OOo.createCookieOrStorage(d,'oo_OODynamicRewrite_searchPattern',window.OOoDynamicRewrite.searchPattern,'',d.cookieDomain)}if(window.OOoDynamicRewrite.replacePattern){OOo.createCookieOrStorage(d,'oo_OODynamicRewrite_replacePattern',window.OOoDynamicRewrite.replacePattern,'',d.cookieDomain)}}if(location.search.search('evs')!==-1||OOo.readCookieOrStorage(d,'oo_evs_friendly')==='yes'){OOo.eraseCookieOrStorage(d,'oo_evs_friendly');d.loadPopupInBackground=true;this.launchPopup();OOo.createCookieOrStorage(d,d.repromptCookie,1,d.repromptTime===-1?0:d.repromptTime,d.cookieDomain)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(d.area&&location.href.search(d.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(d.goal&&location.href.search(d.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(d.thirdPartyCookies&&OOo.checkThirdPartyCookies(d.thirdPartyCookies)){return}if(!OOo.readCookieOrStorage(d,d.percentageCookie)){OOo.createCookieOrStorage(d,d.percentageCookie,(Math.random()>1-(d.responseRate/100))?"1":"0",'',d.cookieDomain)}if(typeof d.promptTrigger!=='undefined'){if(d.promptTrigger instanceof RegExp){if(!window.location.href.match(d.promptTrigger)){return}}else if(d.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,d.promptTrigger,d.tunnelCookie)){return}}}if(d.spa||OOo.spa){var x=this;x.queued=false;if(!OOo.readCookieOrStorage(d,d.repromptCookie)){g=OOo.incrementPagesHit(d,g);OOo.assessPagesHit(g,x);var v=true;setTimeout(function(){v=false},500)}OOo.addEventListener(window,'oospachange',function(){l.currentURL=location.href;if(x.options.truncatePrevCurrentMetrics){l.prev=OOo.truncateMetric(l.prev);l.currentURL=OOo.truncateMetric(l.currentURL)}if(x.options.disablePrevCurrentMetrics){l.prev='';l.currentURL=''}if(!!window.oo_inv_monitor){k=OOo.removeCharacters(window.location.href);o=OOo.removeCharacters(window.document.referrer);if(OOo.Invitation.friendlyDomains){OOo.addEventListener(document,'click',function(a){OOo.Invitation.monitorLinks(a)})}window.oo_inv_monitor.postMessage([[r,s.options.spa,s.options.referrerRewrite],l,[k,o],p,f,OOo.Invitation.friendlyDomains,window.innerHeight,window.OOoDynamicRewrite,u],m)}if(OOo.readCookieOrStorage(d,d.repromptCookie)){return}if(!v){g=parseInt(OOo.readCookieOrStorage(d,d.pagesHitCookie),10)||0;g=OOo.incrementPagesHit(d,g)}if(location.search.search('evs')!==-1||OOo.readCookieOrStorage(d,'oo_evs_friendly')==='yes'){OOo.eraseCookieOrStorage(d,'oo_evs_friendly');d.loadPopupInBackground=true;this.launchPopup();OOo.createCookieOrStorage(d,d.repromptCookie,1,d.repromptTime===-1?0:d.repromptTime,d.cookieDomain)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(d.area&&location.href.search(d.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(d.goal&&location.href.search(d.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(OOo.readCookieOrStorage(d,d.repromptCookie)){return}if(d.thirdPartyCookies&&OOo.checkThirdPartyCookies(d.thirdPartyCookies)){return}if(!OOo.readCookieOrStorage(d,d.percentageCookie)){OOo.createCookieOrStorage(d,d.percentageCookie,(Math.random()>1-(d.responseRate/100))?"1":"0",'',d.cookieDomain)}if(typeof d.promptTrigger!=='undefined'){if(d.promptTrigger instanceof RegExp){if(!window.location.href.match(d.promptTrigger)){return}}else if(d.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,d.promptTrigger,d.tunnelCookie)){return}}}if(x.queued){return}OOo.assessPagesHit(g,x)})}else{if(!OOo.readCookieOrStorage(d,d.repromptCookie)){g=OOo.incrementPagesHit(d,g);OOo.assessPagesHit(g,this)}}origin=document.location;if(n){if(h){m=origin.protocol+'//'+origin.host+(origin.port?origin.port:'')}else{m='https://'+q+'gateway.foresee.com'}}else{m=origin.protocol+'//'+origin.host+(origin.port?origin.port:'')}var s=this;OOo.addEventListener(window,'message',function(b){l.currentURL=location.href;if(s.options.referrerRewrite){l.referer=OOo.referrerRewrite(s.options.referrerRewrite)}if(s.options.commentCardUrl){l.referer=OOo.referrerRewrite(s.options.commentCardUrl)}if(s.options.truncatePrevCurrentMetrics){l.prev=OOo.truncateMetric(l.prev);l.currentURL=OOo.truncateMetric(l.currentURL)}if(s.options.disablePrevCurrentMetrics){l.prev='';l.currentURL=''}if(b.origin===m){if(b.data==='reconnect'){window.oo_inv_monitor=b.source;window.oo_inv_monitor.postMessage("connection forged",m);if(OOo.Invitation.friendlyDomains){OOo.addEventListener(document,'click',function(a){OOo.Invitation.monitorLinks(a)})}}if(b.data==='ready for data'){window.oo_inv_monitor.postMessage([[r,s.options.spa,s.options.referrerRewrite],l,[k,o],p,f,OOo.Invitation.friendlyDomains,window.innerHeight,window.OOoDynamicRewrite,u,'connect'],m)}if(b.data==='focus'){window.blur()}if(b.data==='monitor unload'){window.oo_inv_monitor=null}if(b.data==='heart'){if(!window.oo_inv_monitor){window.oo_inv_monitor=b.source}window.oo_inv_monitor.postMessage('beat',m)}}},false);OOo.addEventListener(window,'unload',function(){if(window.oo_inv_monitor){window.oo_inv_monitor.postMessage([[r,s.options.spa,s.options.referrerRewrite],l,[k,o],p,f,OOo.Invitation.friendlyDomains,window.innerHeight,window.OOoDynamicRewrite,u,'disconnect'],m);window.oo_inv_monitor.postMessage('parent going AWOL',m)}})};OOo.Invitation.monitorLinks=function(a){var b=a||window.event,c=a.target||a.srcElement,f;if(c.nodeName!='A'||c.href.match(location.protocol+'//'+location.hostname)||c.href.substr(0,4)!='http')return;f=friendlyDomains.length;while(f--){if(c.href.search(friendlyDomains[f])!=-1){friendlyActive=true;f=0}}if(!friendlyActive)return;if(a.preventDefault)a.preventDefault();OOo.Invitation.navigateToFriendlyDomain(c.href.search(/\?/)==-1?c.href+'?evs':c.href+'evs')};OOo.Invitation.notifyFriendlyLocationChange=function(a){if(window.oo_inv_monitor){OOo.createCookieOrStorage(opt,'oo_evs_friendly','yes','',opt.cookieDomain)}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){OOo.showPrompt.call(this,a,this.launchPopup)},launchPopup:function(a){if(this.popupShown){return}this.popupShown=true;var b=a||window.event;if(typeof b!=='undefined'){if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation()}else{b.returnValue=false}}var c=this.options,f=OOo?OOo.fcp?OOo.fcp:false:false,d=c.monitor.assetType?c.monitor.assetType:'static',g=c.monitor.pathToAssets?c.monitor.pathToAssets:OOo.getPathToAssets(f,d),k=window.location.href,h=c.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':g+c.monitor.monitorWindow+'?',o=[],m=c.asm?[555,500]:(OOo.Browser.Chrome?[400,400]:[400,350]),q,n,l=OOo.createMetrics(),p=OOo.readCookieOrStorage(c,c.tealeafCookieName),u;if(c.commentCardUrl){h=c.popupType==='popup'?c.commentCardUrl+'?':g+c.monitor.monitorWindow+'?'}else{h=c.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':g+c.monitor.monitorWindow+'?'}if(c.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID||window.ClickTaleGetPID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){p+='|'+[c.clickTalePID||window.ClickTaleGetPID(),window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}else{p+='|undefined/undefined/undefined'}m=c.newWindowSize||m;u='scrollbars=1,resizable=1,location=no,status=no,width='+m[0]+',height='+m[1];if(c.referrerRewrite){l.referer=OOo.referrerRewrite(c.referrerRewrite)}if(c.commentCardUrl){l.referer=OOo.referrerRewrite(c.commentCardUrl)}l.currentURL=location.href;if(c.truncatePrevCurrentMetrics){l.prev=OOo.truncateMetric(l.prev);l.currentURL=OOo.truncateMetric(l.currentURL)}if(c.disablePrevCurrentMetrics){l.prev='';l.currentURL=''}if(c.thirdPartyCookies){OOo.setThirdPartyCookies(c.thirdPartyCookies)}h+=this.buildInviteUrlParam(c,l,p);if(h.match(/\?/g).length===2)h=h.replace(/\?([^?]*)$/,'&$1');OOo.dispatchOOEvent('OL_CC_Launch');this.popup=q=window.open(h,'OnlineOpinionInvitation',u);if(!c.loadPopupInBackground&&OOo.$('#oo_container')){OOo.hidePrompt(b)}},killPrompt:function(a){var b=a||window.event;if(this.options.callBacks&&typeof this.options.callBacks.noClick==='function'){this.options.callBacks.noClick()}OOo.createCookieOrStorage(this.options,this.options.repromptCookie,1,157680000,opt.cookieDomain);OOo.hidePrompt(b)},buildInviteUrlParam:function(a,b,c){var f,d;if(a.efm&&a.popupType=='popup'){f=OOo.convertToEFMParams(a,b)+'&type=Invitation'}else{f=OOo.toQueryString(b)+'&type=Invitation';if(a.customVariables||a.efm||a.digitalBehaviorAnalytics){f+='&customVars='+encodeURIComponent(OOo.serialize(OOo.evalCustomVars(a)))}d=a.legacyVariables;f+='&custom_var='+OOo.createLegacyVars(d,c);if(a.asm){f+='&asm=2'}}return f}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(a){if(a&&a.indexOf('evs')>-1){location.href=encodeURIComponent(a)}}});OOo.Waypoint=function(a){var b=OOo.Browser;if(a.disableMobile&&b.isMobile){return}if(a.disableDesktop&&b.isDesktop){return}if(a.disableNoniOS&&b.isMobileNonIOS){return}this.options={waypointMarkup:'oo_waypoint.html',companySlogan:'Give us feedback',companyLogo:'waypoint_logo.png',linkFocus:true,categories:{website:{tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Website'},store:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://store.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Store'},product:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://product.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Product'},other:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://other.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Other'}},wpmarkup:"<div id='oo_waypoint_prompt' aria-modal='true' role='dialog' aria-describedby='oo_waypoint_message'><div id='oo_waypoint_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_waypoint_brand_logo'></p></div><button id='oo_waypoint_close_prompt' tabindex='0' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></button></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->"};OOo.extend(this.options,a);var c=this.options,f=c.categories;if(c.spa||OOo.spa){OOo.addCustomSpaEvent()}for(var d in f){if(f.hasOwnProperty(d)){if(typeof c.categories[d].oCode==='object'){var g={};g[d]=new OOo.Ocode(f[d].oCode);OOo.extend(OOo.Waypoint,g)}}}OOo.extend(OOo.Waypoint,{getWaypoint:function(){this.getWaypoint()}.bind(this)})};OOo.Waypoint.prototype={getWaypoint:function(){OOo.getWaypoint.call(this)},showWaypoint:function(a){OOo.showWaypoint.call(this,a)},killWaypoint:function(a){var b=a||window.event;OOo.hideWaypoint(b)}};OOo.extend(OOo,{appendWaypoint:function(c){var f=OOo.$('#'+c);if(!!f){if(!OOo.Browser.isMobile){OOo.addEventListener(f,'click',function(a){var b=a||window.event;if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation()}else{b.returnValue=false}OOo.Waypoint.getWaypoint()},false);OOo.addEventListener(f,'keydown',function(a){var b=a||window.event;if(b.keyCode!==13){return}if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation()}else{b.returnValue=false}OOo.Waypoint.getWaypoint()},false)}}}});OOo.extend(OOo,{appendWaypointMobile:function(c,f){var d=0;var g=f||2;if(typeof c==="string")var c=OOo.$('#'+c);if(!!c){if(OOo.Browser.isMobile){if("ontouchstart"in window&&"ontouchend"in window&&"ontouchmove"in window){OOo.addEventListener(c,"touchstart",function(a){d++},false);OOo.addEventListener(c,"touchend",function(a){var b=a||window.event;if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation();if(d>=g){OOo.Waypoint.getWaypoint();d=0}}else{b.returnValue=false}},false);OOo.addEventListener(c,"touchmove",function(a){d=0},false)}else{OOo.addEventListener(c,"click",function(a){var b=a||window.event;if(b.preventDefault&&b.stopPropagation){b.preventDefault();b.stopPropagation()}else{b.returnValue=false}OOo.Waypoint.getWaypoint()},false)}}}}});return OOo}));-bottom:70px}.subnav-levels .subnav-default__list{position:relative}.subnav-levels .subnav-default__item{font-family:"Android Euclid","Roboto","Helvetica","Arial",sans-serif;position:relative}.subnav-levels .subnav-default__item a{margin:0}.subnav-levels .subnav-default__item a .subnav-default__icon-round,.subnav-levels .subnav-default__item a .subnav-default__icon-large{margin-left:12px}.subnav-levels .subnav-default__item .subnav-default__title,.subnav-levels .subnav-default__item .subnav-default__item-title{display:inline-block;margin:0;padding:12px 0;will-change:opacity, transform}.subnav-levels .subnav-default__item .subnav-default__item-title--second-level,.subnav-levels .subnav-default__item .subnav-default__item-title--third-level{color:#000;line-height:1.25rem}.subnav-levels .subnav-default__item .subnav-default__item-title--second-level{font-size:1.125rem;font-weight:700;margin-left:16px}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level{font-size:1rem;font-weight:500;margin-left:38px;max-width:210px}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level svg{bottom:6px;padding:0;transform:translate3d(0, 0, 0) rotateZ(270deg);transition:transform 300ms ease-in-out;width:10px}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level:focus svg,.subnav-levels .subnav-default__item .subnav-default__item-title--third-level:hover svg{transform:translate3d(5px, 0, 0) rotateZ(270deg)}.subnav-levels .subnav-default__item .subnav-default__title,.subnav-levels .subnav-default__item .subnav-default__itemt-title--first-level{color:#073042;font-size:1.25rem;font-weight:600;letter-spacing:inherit;line-height:1.5rem}.subnav-levels .subnav-default__item .subnav-default__title .subnav-default__icon-large,.subnav-levels .subnav-default__item .subnav-default__itemt-title--first-level .subnav-default__icon-large{bottom:9px;height:30px;transform:rotateZ(0deg);width:28px}.subnav-levels .subnav-default__group-item .subnav-default__icon-round{bottom:9px;height:30px;padding:8px;transform:rotateZ(180deg);width:30px}.subnav-levels.subnav-default--scroll-position .subnav-default__navigation-wrapper{padding-bottom:0}.subnav-levels.subnav-default--no-animation .subnav-default__group{transition:none}.subnav-levels#subnav-android-12 .subnav-default__group-item>.subnav-default__item,.subnav-levels#subnav-android-13 .subnav-default__group-item>.subnav-default__item{display:none}.subnav-levels#subnav-android-12 .subnav-default__item>.subnav-default__item-title--first-level,.subnav-levels#subnav-android-13 .subnav-default__item>.subnav-default__item-title--first-level{color:#000;font-size:1.125rem;font-weight:700;line-height:1.25rem;margin-left:16px}.search-default{align-items:center;display:flex;grid-row:1;height:100%;margin:0;overflow:visible;width:30px}[dir='ltr'] .search-default{right:30px}[dir='rtl'] .search-default{left:30px}.search-default--open{grid-column:1/6;overflow:initial;padding-top:2px;position:absolute;width:100%}[dir='ltr'] .search-default--open{right:0}[dir='rtl'] .search-default--open{left:0}.search-default__label{display:none}.search-default__icon{color:var(--color-is-1);height:24px;transition:color .3s ease-in;width:24px}.search-default__open,.search-default__close{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;cursor:pointer;position:relative;right:0;transition:color .3s linear;width:34px}.search-default__open>*,.search-default__close>*{pointer-events:none}.search-default__open::after,.search-default__close::after{content:'';height:40px;left:-8px;position:absolute;top:-8px;width:40px}.search-default__open:hover,.search-default__open:focus,.search-default__close:hover,.search-default__close:focus{opacity:.7}.search-default__input,.search-default__close{opacity:0;transition:opacity .3s ease-in;visibility:hidden}.search-default--open .search-default__input,.search-default--open .search-default__close{opacity:1;visibility:visible}.search-default--open .search-default__input:hover,.search-default--open .search-default__input:focus,.search-default--open .search-default__close:hover,.search-default--open .search-default__close:focus{opacity:.7}.search-default__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;border-bottom:1px solid var(--color-is-1);border-radius:0;color:var(--color-is-1);font-family:var(--font-family-headings);height:24px;margin:0 13px;outline:none;padding:5px;width:100%}.search-default__input::-webkit-search-decoration,.search-default__input::-webkit-search-cancel-button,.search-default__input::-webkit-search-results-button,.search-default__input::-webkit-search-results-decoration{display:none}.search-default__open:hover>.search-default__icon,.search-default__open:focus>.search-default__icon{color:var(--color-is-1)}.scrollto-button{bottom:0;margin:0 16px 16px;opacity:0;padding:0;position:fixed;right:0;visibility:hidden;will-change:opacity;z-index:40}.scrollto-button--visible{opacity:1;visibility:visible}.scrollto-button--transition{transition:opacity .3s, visibility .3s}.glue-cookie-notification-bar{align-content:center;background-color:#fff;bottom:0;box-shadow:0 -1px 3px 0 rgba(0,0,0,0.1);display:flex;flex-flow:row wrap;font-family:Google Sans, Roboto, Helvetica, Arial, sans-serif;font-size:1rem;margin:0;padding:24px 24px 24px 16px;position:fixed;transform:translateY(0);transition:transform 500ms ease-in;width:100%;z-index:40}.glue-cookie-notification-bar[aria-hidden=true]{transform:translateY(99.9%)}.glue-cookie-notification-bar .glue-cookie-notification-bar__text{flex:0 0 100%;line-height:1.5rem;margin-bottom:24px}.glue-cookie-notification-bar .glue-cookie-notification-bar__text a{color:#073042}.glue-cookie-notification-bar button{align-self:flex-start;flex:0 0 100%}.glue-cookie-notification-bar button:last-child{margin-top:5px}.glue-cookie-notification-bar__accept,.glue-cookie-notification-bar__reject{--primary-color-1: #fff;--primary-color-2: #34a853;--primary-color-3: #202124;--neutral-color-1: #5f6368;--neutral-color-4: #dadce0;--neutral-color-5: #f1f3f4;--a23-cta-padding-x: 24px;--a23-cta-padding-y: 12px;--a23-cta-letter-spacing: .3px;--a23-cta-line-height: 24px;--a23-cta-border-width: 1px;--a23-cta-border-radius: 30px;--primary-bg-color: var(--primary-color-3);--primary-hover-bg-color: var(--neutral-color-5);--primary-active-bg-color: var(--neutral-color-1);--primary-font-color: var(--primary-color-1);--primary-hover-hover-color: var(--primary-color-3);--primary-active-active-color: var(--primary-color-1);--tertiary-bg-color: transparent;--tertiary-hover-bg-color: var(--neutral-color-4);--tertiary-active-bg-color: var(--neutral-color-1);--tertiary-font-color: var(--primary-color-3);--tertiary-hover-font-color: var(--primary-color-3);--tertiary-active-font-color: var(--primary-color-1);background-color:var(--primary-bg-color);border:var(--a23-cta-border-width) solid var(--primary-color-3);border-radius:var(--a23-cta-border-radius);color:var(--primary-font-color);cursor:pointer;display:inline-block;font-weight:700;isolation:isolate;letter-spacing:var(--a23-cta-letter-spacing);line-height:var(--a23-cta-line-height);min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;overflow:hidden;padding:var(--a23-cta-padding-y) var(--a23-cta-padding-x);position:relative;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:-webkit-max-content;width:-moz-max-content;width:max-content}.glue-cookie-notification-bar__accept::before,.glue-cookie-notification-bar__reject::before{background-color:var(--primary-hover-bg-color);border-radius:var(--a23-cta-border-radius);content:'';height:100%;pointer-events:none;position:absolute;right:0;top:0;transform:translateX(calc(-100% - var(--a23-cta-border-width)));transition:transform .3s ease-in-out, background-color .3s linear;width:100%;z-index:-1}.glue-cookie-notification-bar__accept:hover,.glue-cookie-notification-bar__reject:hover{border-color:var(--primary-color-3);color:var(--primary-hover-font-color)}.glue-cookie-notification-bar__accept:hover::before,.glue-cookie-notification-bar__reject:hover::before{transform:translateX(0)}.glue-cookie-notification-bar__accept:active,.glue-cookie-notification-bar__reject:active{background-color:var(--primary-active-bg-color);color:var(--primary-active-font-color)}.glue-cookie-notification-bar__accept:active::before,.glue-cookie-notification-bar__reject:active::before{background-color:var(--primary-active-bg-color)}button.glue-cookie-notification-bar-control{border-style:none;border-width:0}button.glue-cookie-notification-bar-control[aria-hidden=true]{display:none}main,footer{opacity:0;transition:opacity .5s ease .1s}cloud-image{display:block;min-height:10px}cloud-image img{height:auto;width:100%}cloud-image.is-loaded{min-height:auto}@media only screen and (min-width: 320px){.header-mega__primary-item{margin-bottom:52px;margin-left:-32px;padding-left:32px}}@media only screen and (min-width: 600px){:root{--font-size-heading-1: 3.5rem;--font-size-heading-2: 3.25rem;--font-size-heading-3: 2.75rem;--font-size-heading-4: 2.25rem;--font-size-heading-5: 2rem;--font-size-heading-6: 1.5rem;--font-size-heading-7: 1rem;--eyebrow: 1rem;--copy-input-1: 1rem;--anchors-cards: 1.25rem}[lang='da'],[lang='de'],[lang='es'],[lang='fr'],[lang='id'],[lang='it'],[lang='nb'],[lang='pt'],[lang='ru'],[lang='sv']{--font-size-heading-1: 4.5rem;--font-size-heading-2: 3.5rem;--font-size-heading-3: 3rem;--font-size-heading-4: 2.5rem;--font-size-heading-5: 2rem;--font-size-heading-6: 1.5rem;--font-size-heading-7: 1.25rem}.theme--compact{--font-size-heading-1: 4.5rem;--font-size-heading-2: 3.5rem;--font-size-heading-3: 3rem;--font-size-heading-4: 2rem;--font-size-heading-6: 1.125rem;--copy-size-l: 1.25rem;--copy-size-m: 1rem;--copy-size-s: .8125rem}:root{--line-height-heading-1: 60px;--line-height-heading-2: 56px;--line-height-heading-3: 48px;--line-height-heading-4: 40px;--line-height-heading-5: 36px;--line-height-heading-6: 28px}.is-1,.is-2,.is-3,.is-4,.is-5,.is-6{margin-bottom:48px}.is-copy,.is-copy-m,.is-copy-l{margin-bottom:32px}.is-heading{margin-bottom:48px}.is-masthead .is-heading,.is-wide-masthead .is-heading{margin-bottom:48px}.is-base-heading .is-heading{margin-bottom:0}.is-subheading{margin-bottom:24px}.is-7,.is-8{margin-bottom:24px}.is-body-wrapper .cta:not(:last-child){margin-bottom:32px}.is-copy-m{letter-spacing:var(--letter-spacing-5)}.is-eyebrow{margin-bottom:24px}.is-icon svg{margin-bottom:24px}.is-masthead{grid-column:3/11}.is-centered{grid-template-columns:repeat(12, minmax(0, 1fr));grid-column-gap:2.27%}.is-wide-masthead{grid-column:1/9}.theme--compact .is-3{line-height:4.25rem}.theme--compact .is-4{line-height:3rem}.theme--compact .is-6{line-height:1.625rem}.theme--compact .is-7{letter-spacing:var(--letter-spacing-4)}.theme--compact .is-copy-l{line-height:2.5rem}.theme--compact .is-copy-m{line-height:2rem}.theme--compact .is-copy-s{line-height:1.5rem}p{margin:0 0 32px}.grid,.container{margin:0 32px}.grid{grid-template-columns:repeat(12, minmax(0, 1fr));grid-column-gap:2.27%}body::after{content:'medium'}.is-video-frame{width:280px}.background-shapes__wave{top:-85px}.grid-space-wrap{padding:80px 0}.articles .cta--is-2,.articles .cta--is-5,.articles .cta--is-6{padding:0 6px}.header-default .cta--is-3{font-size:2rem;line-height:2.25rem}.enterprise .cta{text-align:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.header-default .search-default{max-width:none;position:relative}[dir='ltr'] .header-default .search-default{margin-left:-20px}[dir='rtl'] .header-default .search-default{margin-right:-20px}.header-default__hamburger{grid-column-end:-1}.header-default--search-open .header-default__logo{opacity:1;visibility:visible}.header-default__primary-item{margin-bottom:52px;margin-left:-32px;padding-left:32px}.header-mega--transparent .header-mega__skip-content{left:80px}.header-mega__skip{align-items:center;background:rgba(64,64,64,0.75);border-bottom:1px solid transparent;display:flex;height:0;left:0;opacity:0;position:fixed;top:0;width:100%;z-index:1}.header-mega__skip:focus-within{height:88px;opacity:1}.header-mega__skip-content{left:30%;position:relative}.header-mega--search-open .header-mega__logo{opacity:1;visibility:visible}.header-mega--search-open .header-mega__bar{display:none;transition:opacity .2s linear, visibility .2s linear;visibility:hidden}.header-mega__primary{display:flex;height:100%;padding:0;width:100%}.header-mega__primary-item{align-items:center;height:100%;margin:0 8px 0 0;overflow:visible;padding:0}.header-mega__primary-item::before{background-color:#3ddc84;bottom:15%;content:'';height:2px;left:0;position:absolute;transform:scaleX(0);transform-origin:bottom left;transition:transform 300ms ease-out;width:100%;will-change:transform}[dir='rtl'] .header-mega__primary-item:first-child,[dir='ltr'] .header-mega__primary-item:last-child{margin:0}.header-mega__primary-item>.cta--is-3{align-items:center;border:none;display:block;font-size:1rem;padding:6px;position:inherit;width:auto}.header-mega__primary-arrow{height:10px;margin-left:4px;padding:0;transition:300ms ease-in-out;width:10px}.header-mega__primary .header-mega__item--active{box-shadow:none}.subnav-spy__wrapper{border-top:1px solid #c6c6c6}.subnav-spy__title{align-self:center;display:flex;grid-column:1/7}.subnav-spy__button-toggle{border-top:0;grid-column:7/13;justify-content:flex-end}.subnav-spy__current-section{margin-right:14px}.subnav-spy__navigation-wrapper{padding:0 32px}.subnav-spy__item::before{left:-32px}.subnav-spy__items-wrapper>.subnav-spy__item:first-child{display:none}.subnav-default__wrapper{border-top:1px solid #c6c6c6}.subnav-default__title{align-self:center;display:flex;grid-column:1/7}.subnav-default__button-toggle{border-top:0;grid-column:7/13;justify-content:flex-end}.subnav-default__current-section{margin-right:14px}.subnav-default__navigation-wrapper{padding:0 32px}.subnav-default__item::before{left:-32px}.subnav-default__items-wrapper>.subnav-default__item:first-child{display:none}.header-mega__subnav.subnav-default--visible,.header-mega__subnav.subnav-default--visible.subnav-default--scroll-position,.header-mega__subnav.subnav-levels.subnav-default--visible{transform:translateY(88px)}.subnav-levels .subnav-default__navigation-wrapper{height:auto;padding-bottom:0}.subnav-levels .subnav-default__item:first-child{display:flex}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level{max-width:inherit}.subnav-levels .subnav-default__items-wrapper>.subnav-default__item:first-child{display:none}.subnav-levels .subnav-default--back svg{display:none}.search-default{grid-column-end:12;grid-column-start:12;justify-self:start;position:relative}[dir='ltr'] .search-default{margin-left:auto;right:0}[dir='rtl'] .search-default{left:0;margin-right:auto}.search-default--open{grid-column:7/-1;margin-left:0;margin-left:auto;max-width:265px}.scrollto-button{margin:0 32px 32px 0}.glue-cookie-notification-bar{max-width:100%}.glue-cookie-notification-bar .glue-cookie-notification-bar__text{margin-bottom:24px}.glue-cookie-notification-bar button{flex:0 0 auto}.glue-cookie-notification-bar button:last-child{margin-left:15px;margin-top:0}}@media only screen and (min-width: 600px) and (max-width: 1024px) and (orientation: landscape){.subnav-levels .subnav-default__navigation-wrapper{height:calc(100vh - 60px);overflow:auto;padding-bottom:70px}}@media only screen and (min-width: 1024px){:root{--font-size-heading-1: 4.25rem;--font-size-heading-2: 3.75rem;--font-size-heading-3: 3.25rem;--font-size-heading-4: 2.75rem;--font-size-heading-5: 2.5rem;--font-size-heading-6: 2rem;--copy-size-l: 2rem;--copy-size-m: 1.25rem;--copy-input-1: 1.125rem}:root{--new-font-size-heading-1: 4.5rem;--new-font-size-heading-2: 3.5rem;--new-font-size-heading-3: 3rem;--new-font-size-heading-4: 2rem;--new-font-size-heading-5: 1.5rem}[lang='da'],[lang='de'],[lang='es'],[lang='fr'],[lang='id'],[lang='it'],[lang='nb'],[lang='pt'],[lang='ru'],[lang='sv']{--font-size-heading-1: 5.5rem;--font-size-heading-2: 4.5rem;--font-size-heading-3: 3.5rem;--font-size-heading-4: 2.5rem}.theme--compact{--font-size-heading-1: 5.5rem;--font-size-heading-2: 4.5rem;--font-size-heading-3: 3.5rem;--font-size-heading-4: 2.5rem;--font-size-heading-5: 2rem;--font-size-heading-6: 1.5rem;--font-size-heading-7: 1.0625rem;--copy-size-s: .875rem;--copy-size-xs: .75rem;--eyebrow-m: 1rem;--eyebrow-s: .75rem}:root{--new-line-height-heading-1: 80px;--new-line-height-heading-2: 60px;--new-line-height-heading-3: 56px;--new-line-height-heading-4: 38px;--new-line-height-heading-5: 30px}:root{--line-height-heading-1: 76px;--line-height-heading-2: 68px;--line-height-heading-3: 56px;--line-height-heading-4: 48px;--line-height-heading-5: 44px;--line-height-heading-6: 36px;--line-height-copy-l: 56px;--line-height-copy-m: 32px}:root{--new-letter-spacing-1: -.25rem;--new-letter-spacing-2: -.125rem;--new-letter-spacing-3: -.125rem;--new-letter-spacing-4: -.0625rem}.is-1,.is-2,.is-3,.is-4,.is-5,.is-6{margin-bottom:48px}.is-copy,.is-copy-m,.is-copy-l{margin-bottom:32px}.is-heading{margin-bottom:48px}.is-masthead .is-heading,.is-wide-masthead .is-heading{margin-bottom:0}.is-base-heading .is-heading{margin-bottom:0}.is-subheading{margin-bottom:24px}.is-2{letter-spacing:var(--letter-spacing-2)}.is-7,.is-8{margin-bottom:24px}.is-body-wrapper .cta:not(:last-child){margin-bottom:32px}.is-eyebrow{margin-bottom:24px}.is-link{font-size:1rem;line-height:1.625rem}.is-icon svg{margin-bottom:24px}.is-masthead{grid-column:2/9}.is-masthead:not(.is-masthead--vertical){display:grid;grid-column:-1 / 1;grid-column-gap:2.19%;grid-template-columns:repeat(12, 1fr)}.is-masthead:not(.is-masthead--vertical) .is-eyebrow,.is-masthead:not(.is-masthead--vertical) .is-heading{grid-column:2 / 7}.is-masthead:not(.is-masthead--vertical) .is-body-wrapper{grid-column:8 / 12}.is-centered{grid-template-columns:repeat(12, minmax(0, 1fr));grid-column-gap:2.19%}.is-wide-masthead{grid-column:2/9}.is-wide-masthead:not(.is-wide-masthead--vertical){display:grid;grid-column:-1 / 1;grid-column-gap:2.19%;grid-template-columns:repeat(12, 1fr);margin:0}.is-wide-masthead:not(.is-wide-masthead--vertical) .is-eyebrow,.is-wide-masthead:not(.is-wide-masthead--vertical) .is-icon,.is-wide-masthead:not(.is-wide-masthead--vertical) .is-heading{grid-column:1 / 7}.is-wide-masthead:not(.is-wide-masthead--vertical) .is-body-wrapper{grid-column:8 / -1}.theme--compact .is-5,.theme--compact .is-6,.theme--compact .is-7{font-weight:700}.theme--compact .is-1{letter-spacing:var(--letter-spacing-1)}.theme--compact .is-2{letter-spacing:var(--letter-spacing-2)}.theme--compact .is-3{line-height:4.5rem}.theme--compact .is-4{letter-spacing:var(--letter-spacing-2);line-height:4rem}.theme--compact .is-5{letter-spacing:var(--letter-spacing-3);line-height:3rem}.theme--compact .is-6{line-height:2.5rem}.theme--compact .is-7{line-height:1.625rem}.theme--compact .is-copy-s{line-height:1.75rem}.theme--compact .is-copy-xs{line-height:1.375rem}.theme--compact .is-eyebrow-m{letter-spacing:var(--letter-spacing-7);line-height:1.5rem}.theme--compact .is-eyebrow-s{line-height:1rem}p{line-height:1.625rem}.grid,.container{margin:0 80px}.grid{grid-template-columns:repeat(12, minmax(0, 1fr));grid-column-gap:2.19%}body{font-size:1rem}body::after{content:'large'}.background-shapes__wave{align-self:flex-start;-webkit-animation:pulse-blur-desktop 5s infinite ease-in-out;animation:pulse-blur-desktop 5s infinite ease-in-out;height:var(--size);justify-self:center;transform:translate(0, -50%)}@supports (-ms-ime-align: auto){.background-shapes__wave{transform-origin:top}}.theme--disable-animations .background-shapes__wave{-webkit-animation:none;animation:none}.grid-space-wrap{padding:112px 0}.cta--is-3>.cta__icon{display:none}.header-default .cta--is-3{font-size:1rem;font-weight:500;letter-spacing:0;line-height:1.5rem}.header-default__skip{align-items:center;background:rgba(64,64,64,0.75);border-bottom:1px solid transparent;display:flex;height:0;left:0;opacity:0;position:fixed;top:0;width:100%;z-index:1}.header-default__skip:focus-within{height:72px;opacity:1}.header-default__skip-content{left:30%;position:relative}.header-default__drawer{display:none}.header-default__button{display:none}.header-default__bar{display:block;height:100%;position:absolute;width:auto}[dir='ltr'] .header-default__bar{right:70px}[dir='rtl'] .header-default__bar{left:70px}.header-default--search-open .header-default__bar{display:none;transition:opacity .2s linear, visibility .2s linear;visibility:hidden}.header-default__primary{display:flex;height:100%;padding:0;width:100%}.header-default__primary-item{align-items:center;height:100%;margin:0 40px 0 0;overflow:visible;padding:0}.header-default__primary-item::before{background-color:#3ddc84;bottom:15%;content:'';height:2px;left:0;position:absolute;transform:scaleX(0);transform-origin:bottom left;transition:transform 300ms ease-out;width:100%;will-change:transform}[dir='rtl'] .header-default__primary-item:first-child,[dir='ltr'] .header-default__primary-item:last-child{margin:0}.header-default__primary-item>.cta--is-3{align-items:center;position:inherit}.header-default__primary .header-default__item--active{box-shadow:none}.header-default--transparent .header-default__primary-item,.header-default--transparent .search-default{opacity:0;transform:translate3d(0, -100%, 0);transition:transform 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time)),opacity 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time))}.header-default--transparent .header-default__item--active{transition:color 0.3s ease-in,transform 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time)),opacity 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time))}.header-default--transparent .header-default__item--download_guide_cta{margin:10px 0}.header-mega{border-radius:0 0 24px 24px}.header-mega--transparent .header-mega__skip-content{left:calc((100vw - 1280px) / 2)}.header-mega--nav-open .header-mega__wrapper,.header-mega--search-open .header-mega__wrapper{border-radius:0 0 24px 24px}.header-mega__primary-item{margin:0 4px 0 0}.header-mega__primary-dropdown{border-radius:0 0 24px 24px}.header-mega--transparent .header-mega__primary-item,.header-mega--transparent .search-default{opacity:0;transform:translate3d(0, -100%, 0);transition:transform 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time)),opacity 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time))}.header-mega--transparent .header-mega__item--active{transition:color 0.3s ease-in,transform 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time)),opacity 1s ease calc((var(--item-order) * var(--animation-delay-multiplier)) + var(--animation-waiting-time))}.header-mega--transparent .header-mega__item--download_guide_cta{margin:10px 0}.header-mega .search-default__close-icon{height:24px;width:24px}.header-mega--enterprise .header-mega__bar{display:flex;margin:0;width:auto}.header-mega--enterprise .search--enterprise{margin:0 16px;margin-right:210px;position:relative}.header-mega--enterprise .search-default--open{margin:0 auto}.header-mega--enterprise .header-mega__primary-item .cta{display:flex}.subnav-spy__title,.subnav-spy__button-toggle{display:none}.subnav-spy__navigation-wrapper{padding:0;position:relative;top:0;transform:inherit;z-index:30}.subnav-spy__items-wrapper{box-shadow:inherit;display:flex;height:100%;justify-content:space-between;margin:0;padding:0}.subnav-spy__item{align-items:center;display:flex}.subnav-spy__item::before{height:4px;left:0;width:100%}.subnav-spy__item>a{margin:0;padding:0}.subnav-spy--short-list .subnav-spy__items-wrapper{justify-content:flex-end}.subnav-spy--short-list .subnav-spy__item{margin:0 22px}.subnav-spy--short-list .subnav-spy__item:last-child{margin-right:0}.subnav-default__title,.subnav-default__button-toggle{display:none}.subnav-default__navigation-wrapper{padding:0;position:relative;top:0;transform:inherit;z-index:30}.subnav-default__navigation-wrapper .subnav-default__title{display:none}.subnav-default__items-wrapper{box-shadow:inherit;display:flex;height:100%;justify-content:space-between;margin:0;padding:0}.subnav-default__items-wrapper>.subnav-default__item:first-child{display:flex;margin-left:0;margin-right:auto}[dir='rtl'] .subnav-default__items-wrapper>.subnav-default__item:first-child{margin-left:auto;margin-right:0}.subnav-default__items-wrapper>.subnav-default__list:nth-child(2) .subnav-default__item{margin-left:0}[dir='rtl'] .subnav-default__items-wrapper>.subnav-default__list:nth-child(2) .subnav-default__item{margin-left:22px}.subnav-default__items-wrapper>.subnav-default__list:last-child .subnav-default__item{margin-right:0}[dir='rtl'] .subnav-default__items-wrapper>.subnav-default__list:last-child .subnav-default__item{margin-left:0}.subnav-default__item{align-items:center;display:flex;height:100%;margin:0 22px}.subnav-default__item::before{height:4px;left:0;width:100%}.subnav-default__item .subnav-default__icon-round{display:none}.subnav-default__item-title{margin:0;padding:0}.subnav-default--short-list .subnav-default__navigation-wrapper .subnav-default__title{display:inline-block}.subnav-default--short-list .subnav-default__items-wrapper{justify-content:flex-end}.subnav-default#subnav-els .subnav-default__items-wrapper>.subnav-default__item:first-child{display:flex}[lang='ja'] .subnav-default#subnav-android-11 .subnav-default__title,[lang='vi'] .subnav-default#subnav-android-11 .subnav-default__title,[lang='ja'] .subnav-default#subnav-android-11 .subnav-default__item-title--first-level,[lang='vi'] .subnav-default#subnav-android-11 .subnav-default__item-title--first-level{font-size:0.75rem}.subnav-default--phones-tablets .subnav-default__items-wrapper>.subnav-default__item:first-child{display:none}.subnav-default--phones-tablets .subnav-default__list:nth-child(n+2) svg{display:none}.subnav-default--phones-tablets .subnav-default__list:nth-child(n+2) a{font-size:0.875rem;font-weight:500;line-height:1.5rem;padding:0}.header-mega__subnav.subnav-default::after{height:calc(100% + 88px)}.subnav-levels .subnav-default__navigation-wrapper{height:auto;overflow:inherit;padding:0}.subnav-levels .subnav-default__navigation-wrapper .subnav-default--back{align-items:center;display:inline-flex}.subnav-levels .subnav-default__navigation-wrapper .subnav-default--back svg{display:block;position:initial}.subnav-levels .subnav-default__group{background:#fff;box-shadow:-8px 8px 16px rgba(0,0,0,0.1);display:flex;opacity:0;padding:32px;position:absolute;right:-70%;transition:opacity 300ms ease-in-out, visibility 300ms ease-in-out;visibility:hidden;will-change:opacity}.subnav-levels .subnav-default__group ul{border-right:1px solid #c6c6c6}.subnav-levels .subnav-default__group ul:last-child{border:none}.subnav-levels .subnav-default__group .subnav-default__list{max-width:250px;min-width:250px}.subnav-levels .subnav-default__group .subnav-default__item::before{height:100%;left:-22px;width:4px}html[data-lang='fr_ca'] .subnav-levels .subnav-default__group{right:-48%}.subnav-levels .subnav-default__group-item>.subnav-default__item .subnav-default__item-title--first-level{align-items:center;display:inline-flex}.subnav-levels .subnav-default__group-item>.subnav-default__item .subnav-default__item-title--first-level svg{bottom:inherit}.subnav-levels .subnav-default__group-item .subnav-default__icon-round{display:initial;margin-left:0;position:relative;transform:rotateZ(0deg);transition:transform 300ms ease-in-out}.subnav-levels .subnav-default__group-item--visible>.subnav-default__item .subnav-default__item-title--first-level svg{transform:rotateZ(-180deg)}.subnav-levels .subnav-default__group-item--visible .subnav-default__group{opacity:1;visibility:visible}.subnav-levels .subnav-default__items-wrapper>.subnav-default__item:first-child{display:flex;margin-left:0;margin-right:auto}[dir='rtl'] .subnav-levels .subnav-default__items-wrapper>.subnav-default__item:first-child{margin-left:auto;margin-right:0}.subnav-levels .subnav-default__items-wrapper>.subnav-default__item:first-child .subnav-default__icon-large{margin-left:6px;transform:rotateZ(-90deg);width:20px}.subnav-levels .subnav-default__items-wrapper>.subnav-default__list:nth-child(n+2)>.subnav-default__item .subnav-default__icon-large{margin-left:6px;width:20px}.subnav-levels .subnav-default__items-wrapper>.subnav-default__list:last-child .subnav-default__icon-large{display:none}.subnav-levels .subnav-default__item{height:100%;margin:0 22px}.subnav-levels .subnav-default__item .subnav-default__item-title--first-level{cursor:pointer;font-size:0.875rem;font-weight:500;line-height:1.5rem;padding:0}.subnav-levels .subnav-default__item .subnav-default__item-title--second-level,.subnav-levels .subnav-default__item .subnav-default__item-title--third-level{margin:0}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level{display:inline-block;max-width:190px;padding-right:14px;position:relative}.subnav-levels .subnav-default__item .subnav-default__item-title--third-level svg{bottom:6px;padding:0;position:absolute;width:10px}.subnav-levels#subnav-android-12 .subnav-default__navigation-wrapper .subnav-default__title,.subnav-levels#subnav-android-13 .subnav-default__navigation-wrapper .subnav-default__title{display:none}.subnav-levels#subnav-android-12 .subnav-default__group-item>.subnav-default__item,.subnav-levels#subnav-android-13 .subnav-default__group-item>.subnav-default__item{display:flex}.subnav-levels#subnav-android-12 .subnav-default__item>.subnav-default__item-title--first-level,.subnav-levels#subnav-android-13 .subnav-default__item>.subnav-default__item-title--first-level{font-size:0.875rem;font-weight:500;line-height:1.5rem;padding:0}.search-default{grid-column-end:-1;grid-column-start:12;justify-self:end;margin-left:0}.search-default--open{grid-column:7/-1;max-width:625px;position:relative;width:100%}.search-default__open,.search-default__close{background:transparent}.scrollto-button{margin:0 40px 40px 0}.glue-cookie-notification-bar{justify-content:space-between;padding:24px 80px}.glue-cookie-notification-bar .glue-cookie-notification-bar__text{flex:0 0 60%;margin:0}.glue-cookie-notification-bar button{align-self:center;flex:0 0 17.5%}}@media only screen and (min-width: 1024px) and (max-width: 1279px){[dir='ltr'] .header-default__fsi-nav{right:-52px}[dir='ltr'] .header-mega__fsi-nav{right:-52px}[dir='ltr'] .header-mega--enterprise .header-mega__flexible{margin:0 32px}[dir='ltr'] .header-mega--enterprise .header-mega__bar{right:254px}[dir='ltr'] .header-mega--enterprise .header-mega__wrapper .search--enterprise{margin-right:0}[dir='ltr'] .header-mega--enterprise .header-mega__primary-item:last-child{min-width:120px}[dir='ltr'] .header-mega--enterprise .header-mega__buttons-desktop{align-items:center;display:flex;gap:1rem;height:100%;justify-content:flex-end;min-width:215px}[dir='ltr'] .header-mega--enterprise .header-mega__buttons-desktop button{display:none}[dir='ltr'] .header-mega--enterprise .header-mega__hamburger{display:none}}@media only screen and (min-width: 1160px){.enterprise.en_us #main>section:first-of-type,.enterprise.en_us #main>article:first-of-type{margin-top:88px}.header-mega::before{-webkit-backdrop-filter:initial;backdrop-filter:initial;background:#fff;border-radius:0 0 24px 24px}.header-mega{height:88px}.header-mega--search-open::after{-webkit-backdrop-filter:initial;backdrop-filter:initial}.header-mega__buttons-desktop{align-items:center;display:flex;justify-content:center}.header-mega__drawer{display:none}.header-mega__button{display:none}.header-mega__logo-container{width:110px}.header-mega__bar{display:block}.header-mega .search-default{margin-right:30px}.header-mega__spacing{margin-top:88px}}@media only screen and (min-width: 1280px){.header-mega__primary-item{margin:0 32px 0 0}.header-mega__primary-dropdown{top:88px}.header-mega--enterprise .header-mega__bar{right:434px}.header-mega--enterprise .header-mega__primary-item:last-child{display:none}.header-mega--enterprise .header-mega__primary-item:nth-child(4){margin-right:0}.header-mega--enterprise .header-mega__buttons-desktop{display:flex;gap:1rem}.header-mega--enterprise .header-mega__buttons-desktop>div{position:relative}.header-mega--enterprise .header-mega__buttons-desktop>div button{border:2px solid #202124;padding:12px 24px}.header-mega--enterprise .header-mega__buttons-desktop>div button+.js-header-dropdown{top:100%;transform:translateX(16px)}.header-mega--enterprise .header-mega__buttons-desktop>div button+.js-header-dropdown.active{min-width:100%;transform:translateX(-8px)}.subnav-spy__title{display:none}.subnav-spy__items-wrapper{justify-content:flex-end}.subnav-spy__items-wrapper>.subnav-spy__item:first-child{display:flex;margin-left:0;margin-right:auto}.subnav-spy__item{margin:0 22px}.subnav-spy__item:last-child{margin-right:0}.subnav-default__title{display:none}.subnav-default__items-wrapper{justify-content:flex-end}.subnav-default__items-wrapper .subnav-default__title{display:inline-block}.subnav-levels .subnav-default__group{right:0}}@media only screen and (min-width: 1440px){.grid,.container{margin:0 auto;max-width:1280px}body::after{content:'extra-large'}.header-mega .search-default__icon{height:32px;width:32px}.glue-cookie-notification-bar{padding:24px calc((100vw - 1280px) / 2)}}@media only screen and (max-width: 1023px) and (orientation: landscape){.subnav-spy__navigation-wrapper{height:calc(100vh - 60px);overflow:auto}.subnav-default__navigation-wrapper{height:calc(100vh - 60px);overflow:auto}}@media (prefers-reduced-motion: reduce){.background-shapes--parallax{transform:none}.background-shapes__wave{-webkit-animation-duration:.001s;animation-duration:.001s;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-duration:.001s}.header-default__drawer{transition:none}.header-default--transparent .header-default__logo-icon,.header-default--transparent .header-default__primary-item,.header-default--transparent .search-default{transition:none}.header-mega__drawer{transition:none}.header-mega__primary-arrow{transition:none}.header-mega__primary-dropdown.active{transition:none}.header-mega--transparent .header-mega__logo-icon,.header-mega--transparent .header-mega__primary-item,.header-mega--transparent .search-default{transition:none}}@media screen and (inverted-colors: inverted){img,video{-webkit-filter:invert(1);filter:invert(1)}}@media screen and (orientation: portrait){body::before{content:'portrait';display:none}}      </style>

      <style>
.background--aqua{background-color:#d7effe}.background--alabaster{background-color:#fafafa}.background--blue-sky{background-color:#d7effe}.background--bluse-sky{background-color:#b9dafc}.background--burning-orange{background-color:#f86734}.background--burning-orange-light{background-color:#ffe9e1}.background--champagne{background-color:#ffe9e1}.background--green-tea{background-color:#eff7cf}.background--moonlight{background-color:#f5e4fa}.background--sand{background-color:#e7eccb}.background--tiber{background-color:#073042}.background--tidal{background-color:#efffa4}.background--tusk{background-color:#eff7cf}.background--white{background-color:#fff}.background--athens-gray{background-color:#f8f9fa}.background--aero-blue{background-color:#c9f5dd}.background--honeydew{background-color:#ecfbf3}.background--bridesmaid{background-color:#fef0eb}.background--smoke-gray{background-color:#f1f3f4}.background--aqua-spring{background-color:#e8f5e9}.background--light-solitude{background-color:#e8f0fe}.background--lavender-mist{background-color:#d1daf4}.background--white-violet{background-color:#e5dbf6}.background--cornflower-blue{background-color:#4285f4}.background-gradient--samsung-winter-gradient{background:linear-gradient(138.11deg, #e3eeff 13.09%, #abc3ff 71.92%)}.header-default--enterprise{--color-is-1: #000;--color-is-6: #000;background-color:#fff}.header-default--enterprise.header-default--fixed,.header-default--enterprise.header-default--search-open,.header-default--enterprise.header-default--nav-open{--color-is-1: #000;--color-is-6: #073042}.header-default--enterprise.header-default--solutions-finder{background-color:transparent;--color-is-1: #fff;--color-is-6: #073042;left:0;position:absolute;top:0}.header-default--enterprise.header-default--solutions-finder .header-default__wrapper{background-color:transparent}.header-default--enterprise.header-default--solutions-finder .header-default__wrapper::before{background-color:transparent}.header-default--enterprise.header-default--solutions-finder-google,.header-default--enterprise.header-default--solutions-finder-microsoft,.header-default--enterprise.header-default--solutions-finder-other{background-color:transparent;left:0;position:absolute;top:0;--color-is-1: #000}.header-default--enterprise.header-default--solutions-finder-google .header-default__wrapper,.header-default--enterprise.header-default--solutions-finder-microsoft .header-default__wrapper,.header-default--enterprise.header-default--solutions-finder-other .header-default__wrapper{background-color:transparent}.header-default--enterprise.header-default--solutions-finder-google .header-default__wrapper::before,.header-default--enterprise.header-default--solutions-finder-microsoft .header-default__wrapper::before,.header-default--enterprise.header-default--solutions-finder-other .header-default__wrapper::before{background-color:transparent}.header-default--enterprise.header-default--solutions-finder-google .header-default__grid,.header-default--enterprise.header-default--solutions-finder-microsoft .header-default__grid,.header-default--enterprise.header-default--solutions-finder-other .header-default__grid{grid-template-columns:repeat(4, minmax(0, 1fr)) [last-col]}.header-default--enterprise.header-default--solutions-finder-google+main,.header-default--enterprise.header-default--solutions-finder-microsoft+main,.header-default--enterprise.header-default--solutions-finder-other+main{padding:0}.header-default--enterprise .header-default__wrapper{background-color:#fff}.header-default--enterprise .header-default__grid{box-shadow:inset 0 -1px 0 transparent;transition:box-shadow .3s ease 1s}.header-default--enterprise .header-default__modal-button{align-self:center;background:#073042;border-radius:32px;color:#fff;font-family:"Android Euclid","Roboto","Helvetica","Arial",sans-serif;font-size:0.75rem;font-weight:500;grid-column:last-col;height:48px;padding:0 10px 0 10px;text-transform:uppercase;width:152px}.header-subnav{background:#fff;left:0;overflow-x:scroll;position:absolute;top:0;transform:translate3d(0, -100vh, 0);transition:transform .3s ease;visibility:hidden;width:100%}.header-default--subnav-open .header-subnav{transform:translate3d(0, 0, 0);visibility:visible}.header-subnav__wrapper{box-shadow:inset 0 1px 0 transparent;height:100vh;transition:box-shadow .3s ease}.header-default--hidden .header-subnav__wrapper{box-shadow:inset 0 1px 0 transparent !important}.header-subnav__items{display:flex;flex-direction:column;grid-column:1 / -1;padding:200px 0 150px;width:100%}.header-subnav__dropdown{margin:32px 0 0 14px}.header-subnav__toggle{background:#fff;position:relative;z-index:1}.header-subnav__toggle-wrapper{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;box-shadow:inset 0 1px 0 transparent;cursor:pointer;display:flex;grid-column:1/-1;height:70px;text-align:left;transition:box-shadow .3s ease;width:100%}.header-default--hidden:not(.header-default--subnav-open) .header-subnav__toggle-wrapper{box-shadow:inset 0 1px 0 transparent !important}.header-subnav__toggle-title{font-size:1rem;grid-column:1/4;margin-bottom:0;pointer-events:none}.header-subnav__toggle-icon{height:10px;margin-left:auto;pointer-events:none;width:10px}.header-default--subnav-open .header-subnav__toggle-icon{transform:rotate(180deg)}.header-subnav .header-default__primary-item{position:relative}.header-subnav .header-default__secondary-item{margin-right:0;padding:7px 26px;position:relative}.header-subnav .header-default__secondary-item.header-default__item--active{box-shadow:inset 4px 0 0 0;left:-30px;padding-left:54px}.header-subnav .header-default__secondary-item .icon--svg{bottom:8px;height:16px;width:16px}.header-subnav .header-default__secondary-item>.cta{letter-spacing:0;line-height:1rem}.header-subnav .header-default__secondary-item:last-child{margin-bottom:0}.header-default--enterprise+main{padding-top:70px}.header-default--solutions-finder+main{padding-top:0}@media only screen and (min-width: 600px){.header-default--enterprise.header-default--solutions-finder-google .header-default__grid,.header-default--enterprise.header-default--solutions-finder-microsoft .header-default__grid,.header-default--enterprise.header-default--solutions-finder-other .header-default__grid{grid-template-columns:repeat(12, minmax(0, 1fr)) [last-col]}.header-subnav__toggle-title{grid-column:1/12}.header-subnav .header-default__secondary-item.header-default__item--active{left:-46px;padding-left:70px}}@media only screen and (min-width: 1024px){.header-default--enterprise .header-default__grid{box-shadow:inset 0 -1px 0 transparent}.header-subnav{overflow-x:visible;position:static;transform:translate3d(0, -100%, 0);transition:transform .5s ease 1.2s;visibility:visible}.header-subnav__wrapper{height:70px}.header-subnav__items{flex-direction:row;justify-content:flex-end;padding:0}.header-subnav__dropdown{background:#fff;box-shadow:-8px 8px 16px rgba(0,0,0,0.1);left:-26px;margin:0;min-width:140px;opacity:0;padding:20px 0;position:absolute;top:69px;transform:translateY(0);transition:all .2s ease;visibility:hidden}.header-subnav__dropdown--open{opacity:1;transform:translateY(-5px);visibility:visible}.header-subnav__toggle{display:none}.header-subnav .header-default__primary-item{align-items:center;display:flex}.header-subnav .header-default__primary-item .cta--is-1,.header-subnav .header-default__primary-item .cta--is-3{line-height:1rem}.header-subnav .header-default__secondary-item{margin-bottom:0}.header-subnav .header-default__secondary-item.header-default__item--active{box-shadow:none;left:0;padding-left:26px}}@media only screen and (min-width: 1024px) and (max-width: 1279px){.header-subnav .subnav-link-center{justify-content:center}}@media only screen and (max-width: 1023px){.header-subnav__toggle{transform:translate3d(0, -100%, 0);transition:transform .4s ease-in 1s}.header-subnav .header-default__primary-item.header-subnav__dropdown-wrapper{box-shadow:none}.header-subnav .header-default__primary-item.header-subnav__dropdown-wrapper:hover>.cta,.header-subnav .header-default__primary-item.header-subnav__dropdown-wrapper:focus>.cta{opacity:1}.header-default--subnav-open{transform:translate3d(0, 0, 0) !important}}      </style>
      <link rel="preload" href="/static/css/enterprise_resources/v2/main.min.css" as="style">
      <link rel="stylesheet" href="/static/css/enterprise_resources/v2/main.min.css" media="print" onload="this.media='all'">
      <noscript><link rel="stylesheet" href="/static/css/enterprise_resources/v2/main.min.css"></noscript>
      <style>
              </style>

<link rel="preconnect" href="https://lh3.googleusercontent.com/" crossorigin>
<link rel="preconnect" href="https://ssl.gstatic.com/" crossorigin>
<link rel="preconnect" href="https://www.googletagmanager.com/" crossorigin>
<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>

  <link rel="preconnect" href="https://kstatic.googleusercontent.com/" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/static/fonts/roboto-v20-latin-300.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/static/fonts/roboto-v20-latin-regular.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/static/fonts/roboto-v20-latin-500.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/static/fonts/roboto-v20-latin-700.woff2" crossorigin>



<meta name="title" content="Recursos de Android Enterprise | Android">
<meta name="description" content="Toda la información que necesitas sobre la plataforma de Android Enterprise en el mismo sitio. Desde páginas informativas sobre los dispositivos hasta vídeos sobre seguridad y mucho más.">

<script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Website",
      "url": "https://www.android.com/",
      "publisher": {
        "@type": "Organization",
        "name": "Android",
        "logo": {
          "@type": "ImageObject",
          "url": "/static/images/logos/andy-peace.png",
          "height": 103,
          "width": 100
        },
        "parentOrganization": "Google LLC"
      },
      "name": "Recursos de Android Enterprise | Android",
      "description": "Toda la información que necesitas sobre la plataforma de Android Enterprise en el mismo sitio. Desde páginas informativas sobre los dispositivos hasta vídeos sobre seguridad y mucho más.",
      "sameAs": [
        "https://www.instagram.com/android/",
        "https://www.youtube.com/user/GoogleMobile",
        "https://www.facebook.com/AndroidOfficial",
        "https://www.twitter.com/android",
        "https://officialandroid.blogspot.com/"
      ]
    }
</script>
    <style data-c-focus-control></style>
    <script>
      document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'has-js ';
    </script>
  </head>  <body ><style>.async-hide { opacity: 0 !important }</style>
<script src="/static/js/tracking.min.js"
        data-gtm-id="GTM-KZDPH9F"
        data-optimize-enabled=""
        data-optimize-id="OPT-NXRMXWL"
        data-optimize-delay="4000"
        data-optimize-allowlist="{}"></script>
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZDPH9F" height="0" width="0" style="display:none; visibility:hidden"></iframe>
</noscript><script src="/static/js/cookie-banner.min.js"></script>
<script src="https://www.gstatic.com/glue/cookienotificationbar/cookienotificationbar.min.js"
        data-glue-cookie-notification-bar-category="2A"
        data-glue-cookie-notification-bar-language="es"
        data-glue-cookie-notification-bar-site-id="Android.com"></script>


<header
  data-android-component="header"
  data-android-component-config="{'isSticky': 1}"
  class="header-default header-default--transparent header-default--enterprise">
      <div class="header-default__wrapper">
    <div class="header-default__grid grid">
      <div class="header-default__logo-container">
<div class="header-default__skip">
            <a
              href="#main"
              class="cta cta--is-6 header-default__skip-content"
              data-android-component="anchor-scroll"
              data-android-component-config="{'scrollTo': '#main', 'scrollDuration': 1500}">
              Skip to Content
            </a>
          </div>
        <a
          class="header-default__logo js-logo"
          href="/intl/es_es/"
          data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '', 'title': 'logo', 'linkUrl': '/intl/es_es/'}">
          <span class="visually-hidden"> Android </span>
                <svg class="icon--svg header-default__logo-icon" aria-hidden="true">    <use xlink:href="#android-logo"></use>
  </svg>

        </a>
      </div>
      <nav class="header-default__bar">
        <ul class="header-default__primary"><li class="header-default__primary-item" style="--item-order: 1">


    <a
        href="/intl/es_es/what-is-android/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'qué es android', 'title': 'menu item', 'linkUrl': '/intl/es_es/what-is-android/'}"><span>Qué es Android</span></a>


        </li><li class="header-default__primary-item" style="--item-order: 2">


    <a
        href="/intl/es_es/android-13/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'android\xa013', 'title': 'menu item', 'linkUrl': '/intl/es_es/android-13/'}"><span>Android 13</span></a>


        </li><li class="header-default__primary-item" style="--item-order: 3">


    <a
        href="/intl/es_es/phones-tablets/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'teléfonos y tablets', 'title': 'menu item', 'linkUrl': '/intl/es_es/phones-tablets/'}"><span>Teléfonos y tablets</span></a>


        </li><li class="header-default__primary-item header-default__item--active" style="--item-order: 4">


    <a
        href="/intl/es_es/enterprise/"
    class="cta cta--is-3"aria-current="page"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'enterprise', 'title': 'menu item', 'linkUrl': '/intl/es_es/enterprise/'}"><span>Empresa</span></a>


        </li></ul>

      </nav>
          <form
    class="search-default js-search search--enterprise"
    data-android-component="search"
    data-action="https://www.android.com/intl/es_es/results/"
    id="search-default"
    method="get"
    style="--item-order: 5">
    <label class="search-default__label" for="q">Buscar</label>
    <button
      type="button"
      class="search-default__open js-open"
      aria-label="Buscar"
        data-g-config="{&#34;eventCategory&#34;: &#34;search&#34;, &#34;moduleName&#34;: &#34;navigation&#34;, &#34;eventLabel&#34;: &#34;open&#34;, &#34;eventAction&#34;: &#34;search module click&#34;, &#34;useAbsoluteUrl&#34;: true}"
>
            <svg class="icon--svg search-default__icon" aria-hidden="true">    <use xlink:href="#ico-search"></use>
  </svg>

    </button>
    <input class="search-default__input js-input"
      autocomplete="off"
      id="q"
      name="q"
      placeholder="Buscar"
      type="search">
    <button
      class="search-default__close js-close-search"
      aria-label="close navigation"
      type="button"
        data-g-config="{&#34;eventCategory&#34;: &#34;search&#34;, &#34;moduleName&#34;: &#34;navigation&#34;, &#34;eventLabel&#34;: &#34;close&#34;, &#34;eventAction&#34;: &#34;search module click&#34;, &#34;useAbsoluteUrl&#34;: true}"
>
            <svg class="icon--svg search-default__icon search-default__close-icon" aria-hidden="true">    <use xlink:href="#ico-close"></use>
  </svg>

    </button>
  </form>

      <button
        class="header-default__button header-default__hamburger js-hamburger"
        aria-label="show navigation"
        type="button"
        data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'open', 'title': 'nav burger'}">
              <svg class="icon--svg header-default__button-icon" aria-hidden="true">    <use xlink:href="#ico-hamburger"></use>
  </svg>

      </button>
      <button
        class="header-default__drawer-close js-close"
        aria-label="close navigation"
        type="button"
        data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'close', 'title': 'nav burger'}">
              <svg class="icon--svg header-default__drawer-close-icon" aria-hidden="true">    <use xlink:href="#ico-close"></use>
  </svg>

      </button>
    </div>
  </div>

  <nav class="header-default__drawer">
    <div class="header-default__drawer-container grid">
      <ul class="header-default__primary"><li class="header-default__primary-item" style="--item-order: 1">


    <a
        href="/intl/es_es/what-is-android/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'qué es android', 'title': 'menu item', 'linkUrl': '/intl/es_es/what-is-android/'}"><span>Qué es Android</span></a>


        </li><li class="header-default__primary-item" style="--item-order: 2">


    <a
        href="/intl/es_es/android-13/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'android\xa013', 'title': 'menu item', 'linkUrl': '/intl/es_es/android-13/'}"><span>Android 13</span></a>


        </li><li class="header-default__primary-item" style="--item-order: 3">


    <a
        href="/intl/es_es/phones-tablets/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'teléfonos y tablets', 'title': 'menu item', 'linkUrl': '/intl/es_es/phones-tablets/'}"><span>Teléfonos y tablets</span></a>


        </li><li class="header-default__primary-item header-default__item--active" style="--item-order: 4">


    <a
        href="/intl/es_es/enterprise/"
    class="cta cta--is-3"aria-current="page"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'enterprise', 'title': 'menu item', 'linkUrl': '/intl/es_es/enterprise/'}"><span>Empresa</span></a>


        </li></ul>

      <ul class="header-default__secondary"><li class="header-default__secondary-item">



    <a
        href="https://developer.android.com/"
    class="cta cta--is-3"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'android para desarrolladores', 'title': 'menu item', 'linkUrl': 'https://developer.android.com/'}"><span>Android para desarrolladores</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>


          </li></ul>
      <div class="header-default__language">

  <form class="language-selector" autocomplete="off" data-android-component="language-selector">      <svg class="icon--svg language-selector__globe" aria-hidden="true">    <use xlink:href="#ico-globe"></use>
  </svg>
<label class="visually-hidden" for="language-selector-resources">Idiomas</label>
    <select id="language-selector-resources" class="language-selector__select js-language-selector"
      aria-label="Pick a language"
        data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'open', 'title': 'country dropdown'}"
>
        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'danmark', 'title': 'country dropdown'}"
          value="/intl/da_dk/enterprise/resources/"
          lang="da">Dansk</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'deutschland', 'title': 'country dropdown'}"
          value="/intl/de_de/enterprise/resources/"
          lang="de">Deutsch</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'australia', 'title': 'country dropdown'}"
          value="/intl/en_au/enterprise/resources/"
          lang="en">English (Australia)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'canada', 'title': 'country dropdown'}"
          value="/intl/en_ca/enterprise/resources/"
          lang="en">English (Canada)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'hong kong sar china', 'title': 'country dropdown'}"
          value="/intl/en_hk/enterprise/resources/"
          lang="en">English (Hong Kong)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'ireland', 'title': 'country dropdown'}"
          value="/intl/en_ie/enterprise/resources/"
          lang="en">English (Ireland)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'india', 'title': 'country dropdown'}"
          value="/intl/en_in/enterprise/resources/"
          lang="en">English (India)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'new zealand', 'title': 'country dropdown'}"
          value="/intl/en_nz/enterprise/resources/"
          lang="en">English (New Zealand)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': Markup(' (united kingdom)'), 'title': 'country dropdown'}"
          value="/intl/en_uk/enterprise/resources/"
          lang="en">English (United Kingdom)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'united states', 'title': 'country dropdown'}"
          value="/enterprise/resources/"
          lang="en">English</option>

        <option
          class="language-selector__option"
          selected             data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'españa', 'title': 'country dropdown'}"
          value="/intl/es_es/enterprise/resources/"
          lang="es">Español</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'méxico', 'title': 'country dropdown'}"
          value="/intl/es-419_mx/enterprise/resources/"
          lang="es">Español (México)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'canada', 'title': 'country dropdown'}"
          value="/intl/fr_ca/enterprise/resources/"
          lang="fr">Français (Canada)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'france', 'title': 'country dropdown'}"
          value="/intl/fr_fr/enterprise/resources/"
          lang="fr">Français</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'indonesia', 'title': 'country dropdown'}"
          value="/intl/id_id/enterprise/resources/"
          lang="id">Indonesia</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'italia', 'title': 'country dropdown'}"
          value="/intl/it_it/enterprise/resources/"
          lang="it">Italiano</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'nederland', 'title': 'country dropdown'}"
          value="/intl/nl_nl/enterprise/resources/"
          lang="nl">Nederlands</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'norge', 'title': 'country dropdown'}"
          value="/intl/no_no/enterprise/resources/"
          lang="nb">Norsk bokmål</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'polska', 'title': 'country dropdown'}"
          value="/intl/pl_pl/enterprise/resources/"
          lang="pl">Polski</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'brasil', 'title': 'country dropdown'}"
          value="/intl/pt_br/enterprise/resources/"
          lang="pt">Português (Brasil)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'sverige', 'title': 'country dropdown'}"
          value="/intl/sv_se/enterprise/resources/"
          lang="sv">Svenska</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'türkiye', 'title': 'country dropdown'}"
          value="/intl/tr_tr/enterprise/resources/"
          lang="tr">Türkçe</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'россия', 'title': 'country dropdown'}"
          value="/intl/ru_ru/enterprise/resources/"
          lang="ru">Русский</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'भारत', 'title': 'country dropdown'}"
          value="/intl/hi_in/enterprise/resources/"
          lang="hi">हिन्दी</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '中国', 'title': 'country dropdown'}"
          value="/intl/zh-CN_cn/enterprise/resources/"
          lang="zh">中文 (简体)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '中國香港特別行政區', 'title': 'country dropdown'}"
          value="/intl/zh-HK_hk/enterprise/resources/"
          lang="zh">中文 (香港)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '台灣', 'title': 'country dropdown'}"
          value="/intl/zh-TW_tw/enterprise/resources/"
          lang="zh">中文 (台灣)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '日本', 'title': 'country dropdown'}"
          value="/intl/ja_jp/enterprise/resources/"
          lang="ja">日本語</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': '대한민국', 'title': 'country dropdown'}"
          value="/intl/ko_kr/enterprise/resources/"
          lang="ko">한국어</option>

    </select>
          <svg class="icon--svg language-selector__icon" aria-hidden="true">    <use xlink:href="#ico-arrow-round"></use>
  </svg>

  </form>
      </div>
    </div>
  </nav>

    <div
      class="subnav-fixed-default"
      data-android-component="subnav">
      <div class="header-subnav__toggle">
        <div class="grid">
          <button
            class="header-subnav__toggle-wrapper js-header-subnav-toggle"
            data-g-config="{}">
            <span class="header-subnav__toggle-title is-7">Empresas</span>
                  <svg class="icon--svg header-subnav__toggle-icon" aria-hidden="true">    <use xlink:href="#ico-arrow-round"></use>
  </svg>

          </button>
        </div>
      </div>

      <nav class="header-subnav">
        <div class="header-subnav__wrapper grid">
          <ul class="header-subnav__items subnav-link-center"><li class="header-default__primary-item  " style="--item-order: 5">


    <a
        href="/intl/es_es/enterprise/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'descripción general', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/'}"><span>Descripción general</span></a>

</li><li class="header-default__primary-item header-subnav__dropdown-wrapper " style="--item-order: 6">                    <a class="cta cta--is-3 js-subnav-dropdown"
                    href="#solutions"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'soluciones', 'title': 'sub menu item click'}"
                    >Soluciones</a>
                    <ul class="header-subnav__dropdown" role="menu"><li class="header-default__secondary-item ">
                          


    <a
        href="/intl/es_es/enterprise/management/"
    class="cta cta--is-3"role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'gestión', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/management/'}"><span>Gestión</span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="/intl/es_es/enterprise/security/"
    class="cta cta--is-3"role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'seguridad', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/security/'}"><span>Seguridad</span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="/intl/es_es/enterprise/enrollment/"
    class="cta cta--is-3"role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'registro', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/enrollment/'}"><span>Registro</span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="/intl/es_es/enterprise/employees/"
    class="cta cta--is-3"role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'empleados', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/employees/'}"><span>Empleados</span></a>


                        </li></ul>
</li><li class="header-default__primary-item  " style="--item-order: 7">


    <a
        href="/intl/es_es/enterprise/recommended/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'recomendado', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/recommended/'}"><span>Recomendado</span></a>

</li><li class="header-default__primary-item  " style="--item-order: 8">


    <a
        href="/intl/es_es/enterprise/devices/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'dispositivos', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/devices/'}"><span>Dispositivos</span></a>

</li><li class="header-default__primary-item  " style="--item-order: 10">


    <a
        href="/intl/es_es/enterprise/demo/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'demostración', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/demo/'}"><span>Demostración</span></a>

</li><li class="header-default__primary-item header-subnav__dropdown-wrapper header-default__item--active" style="--item-order: 11">                    <a class="cta cta--is-3 js-subnav-dropdown"
                    href="#support"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'ayuda', 'title': 'sub menu item click'}"
                    >Ayuda</a>
                    <ul class="header-subnav__dropdown" role="menu"><li class="header-default__secondary-item header-default__item--active">
                          


    <a
        href="/intl/es_es/enterprise/resources/"
    class="cta cta--is-3"role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'recursos', 'title': 'sub menu item click', 'linkUrl': '/intl/es_es/enterprise/resources/'}"><span>Recursos</span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="https://support.google.com/work/android/?hl=es#topic=6151012"
    class="cta cta--is-3"      target="_blank"
      rel="noopener"
role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'centro de ayuda', 'title': 'sub menu item click', 'linkUrl': 'https://support.google.com/work/android/?hl=es#topic=6151012'}"><span>Centro de Ayuda</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="https://androidenterprisepartners.withgoogle.com"
    class="cta cta--is-3"      target="_blank"
      rel="noopener"
role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'directorio android enterprise solutions', 'title': 'sub menu item click', 'linkUrl': 'https://androidenterprisepartners.withgoogle.com'}"><span>Directorio Android Enterprise Solutions</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>


                        </li><li class="header-default__secondary-item ">
                          


    <a
        href="https://www.androidenterprise.community/"
    class="cta cta--is-3"      target="_blank"
      rel="noopener"
role="menuitem"
data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'comunidad de clientes', 'title': 'sub menu item click', 'linkUrl': 'https://www.androidenterprise.community/'}"><span>Comunidad de clientes</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>


                        </li></ul>
</li><li class="header-default__primary-item  " style="--item-order: 12">


    <a
        href="/enterprise/partners/"
    class="cta cta--is-3"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'para partners', 'title': 'sub menu item click', 'linkUrl': '/enterprise/partners/'}"><span>Para partners</span></a>

</li><li class="header-default__primary-item  " style="--item-order: 14">

    <a
        href="/intl/es_es/enterprise/solutions-finder/"
    class="cta cta--is-1"data-g-config="{'eventCategory': 'navigation', 'moduleName': 'header', 'eventLabel': 'encontrar soluciones', 'title': 'sub menu cta click', 'linkUrl': '/intl/es_es/enterprise/solutions-finder/'}"><span>Encontrar soluciones</span></a>

</li></ul>
        </div>
      </nav>
    </div>

</header><main id="main">

  

  


  

  

<article>

  

  
  <section
      id="resources-hero"
      class="scrollable-hero scrollable-eyebrow">

    

<div
      class="scrollable-hero__scrollable-eyebrow scrollable-eyebrow scrollable-eyebrow--secondary scrollable-eyebrow--light-solitude">

      <div class="scrollable-eyebrow__wrapper grid">
        <div
            data-android-component="parallaxable"
            data-android-component-config="{'small': {'rate': -0.4}, 'large': {'rate': -0.8}}"
            data-css-eyebrow="Recursos" aria-hidden="true" role="presentation"></div>
        <div class="scrollable-eyebrow__wrapper-heading">
            <h1 class="scrollable-eyebrow__heading-eyebrow is-7">Recursos</h1>
            <h2 class="scrollable-eyebrow__heading is-2">Toda la información que necesitas en un único lugar.</h2>
        </div>          <div class="scrollable-eyebrow__body">              <p class="scrollable-eyebrow__copy is-copy-m">Profundiza en Android Enterprise y descubre los recursos que necesites, ya sean hojas de datos sobre dispositivos o vídeos sobre seguridad.</p>
</div>
</div>
    </div>
  </section>

  

      <section
      id="resources-popular-topics"
      class="content-twoup content-twoup--primary content-twoup--with-masthead">
      <div
        class="content-twoup__content-wrapper grid">
            <div class="content-twoup__masthead is-wide-masthead ">
    
    <h2 class="content-twoup__heading is-3 is-heading">Temas populares</h2>

  </div>



          <article
            class="content-twoup__offering">
                    <cloud-image
    src="https://lh3.googleusercontent.com/9cWKV_a4u-TW-yT9DlgFM7BroEj11XDw3VLJBTswxfgXxxs8NnlBmmAzrpL4EwaTfpRH5Zgu3OTnBxPipi00PCHxrpfmaX9-M6CORw"
    alt=""
class="content-twoup__offering-image cloud-image--landscape "      width="368"
      md="369"
      lg="384"
      xl="407"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/9cWKV_a4u-TW-yT9DlgFM7BroEj11XDw3VLJBTswxfgXxxs8NnlBmmAzrpL4EwaTfpRH5Zgu3OTnBxPipi00PCHxrpfmaX9-M6CORw=w368-v3-e365"
      srcset="https://lh3.googleusercontent.com/9cWKV_a4u-TW-yT9DlgFM7BroEj11XDw3VLJBTswxfgXxxs8NnlBmmAzrpL4EwaTfpRH5Zgu3OTnBxPipi00PCHxrpfmaX9-M6CORw=w407-v3-e365 407w,https://lh3.googleusercontent.com/9cWKV_a4u-TW-yT9DlgFM7BroEj11XDw3VLJBTswxfgXxxs8NnlBmmAzrpL4EwaTfpRH5Zgu3OTnBxPipi00PCHxrpfmaX9-M6CORw=w384-v3-e365 384w,https://lh3.googleusercontent.com/9cWKV_a4u-TW-yT9DlgFM7BroEj11XDw3VLJBTswxfgXxxs8NnlBmmAzrpL4EwaTfpRH5Zgu3OTnBxPipi00PCHxrpfmaX9-M6CORw=w369-v3-e365 369w,"
      sizes="(min-width: 1440px) 407px,(min-width: 1000px) 384px,(min-width: 600px) 369px,"
      alt=""
    >
      </noscript>
  </cloud-image>


              <h3 class="content-twoup__offering-heading is-4">Hoja de datos de la seguridad de Android</h3>

              <p class="content-twoup__offering-body is-copy-m">Descubre cómo mejoramos cada día la seguridad de los dispositivos, las aplicaciones y nuestra plataforma móvil.</p>
              <div class="content-twoup__cta">



    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-two-up', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>
          </article>

          <article
            class="content-twoup__offering">
                    <cloud-image
    src="https://lh3.googleusercontent.com/ljIQ5CCWjapyOW8yxRGDvg5efiWMVfJL5XJ5KrYmsQmeASR5nqnttnvH7sV_XAosZIdHokDpiTp6dY9TDUFO2db92WsBxPl7GKX7XQ"
    alt="Enfoque único BYOD"
class="content-twoup__offering-image cloud-image--landscape "      width="368"
      md="369"
      lg="384"
      xl="407"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/ljIQ5CCWjapyOW8yxRGDvg5efiWMVfJL5XJ5KrYmsQmeASR5nqnttnvH7sV_XAosZIdHokDpiTp6dY9TDUFO2db92WsBxPl7GKX7XQ=w368-v3-e365"
      srcset="https://lh3.googleusercontent.com/ljIQ5CCWjapyOW8yxRGDvg5efiWMVfJL5XJ5KrYmsQmeASR5nqnttnvH7sV_XAosZIdHokDpiTp6dY9TDUFO2db92WsBxPl7GKX7XQ=w407-v3-e365 407w,https://lh3.googleusercontent.com/ljIQ5CCWjapyOW8yxRGDvg5efiWMVfJL5XJ5KrYmsQmeASR5nqnttnvH7sV_XAosZIdHokDpiTp6dY9TDUFO2db92WsBxPl7GKX7XQ=w384-v3-e365 384w,https://lh3.googleusercontent.com/ljIQ5CCWjapyOW8yxRGDvg5efiWMVfJL5XJ5KrYmsQmeASR5nqnttnvH7sV_XAosZIdHokDpiTp6dY9TDUFO2db92WsBxPl7GKX7XQ=w369-v3-e365 369w,"
      sizes="(min-width: 1440px) 407px,(min-width: 1000px) 384px,(min-width: 600px) 369px,"
      alt="Enfoque único BYOD"
    >
      </noscript>
  </cloud-image>


              <h3 class="content-twoup__offering-heading is-4">Un enfoque único del BYOD</h3>

              <p class="content-twoup__offering-body is-copy-m">Los perfiles de trabajo mantienen la seguridad de los datos empresariales de los empleados y la privacidad de sus datos personales.</p>
              <div class="content-twoup__cta">



    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-two-up', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>
          </article>
</div>
    </section>


  

  

  

  





  

  



<section
      id="resources-filterable-content"
      data-android-component="filterable-collection--default"
      data-android-component-config="{&#39;blockClass&#39;: &#39;filterable-collection&#39;, &#39;firstItemsToDisplay&#39;: 5, &#39;itemsToDisplay&#39;: 4, &#39;filtersId&#39;: &#39;71d5b6ebdb1efd41c17e21d0cb58c1fe&#39;, &#39;hasFilters&#39;: True, &#39;isFirstFullBleed&#39;: True, &#39;filterNames&#39;: [&#39;topics&#39;, &#39;content-types&#39;]}"
      class="filterable-collection filterable-collection--with-heading filterable-collection--with-load-more">
      <div class="filterable-collection__wrapper grid">

          <div class="filterable-collection__masthead">
            <h2 class="filterable-collection__heading is-3 is-heading">
              Encuentra más opciones de lo que buscas.
            </h2>
          </div>


          
  <div
    data-android-component="filters"
    data-android-component-config="{&#34;defaultValues&#34;: {&#34;topics&#34;: &#34;all&#34;, &#34;content-types&#34;: &#34;all&#34;}, &#34;filtersId&#34;: &#34;71d5b6ebdb1efd41c17e21d0cb58c1fe&#34;, &#34;blockCssClass&#34;: &#34;filters&#34;, &#34;context&#34;: {&#34;moduleName&#34;: &#34;filterable-collection_resources-filterable-content&#34;}}"
    class="filters__wrapper filterable-collection__filters-wrapper">

  <nav class="filters__filter-wrapper--pills">
      <button
        class="filters__filter--pill is-active cta cta--is-2"
        data-filter-name="topics"
        data-filter-option="all"
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'todos los temas', 'title': 'topics'}">
        <span>Todos los temas</span>
      </button>
      <button
        class="filters__filter--pill cta cta--is-2"
        data-filter-name="topics"
        data-filter-option="management"
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'gestión', 'title': 'topics'}">
        <span>Gestión</span>
      </button>
      <button
        class="filters__filter--pill cta cta--is-2"
        data-filter-name="topics"
        data-filter-option="security"
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'seguridad', 'title': 'topics'}">
        <span>Seguridad</span>
      </button>
      <button
        class="filters__filter--pill cta cta--is-2"
        data-filter-name="topics"
        data-filter-option="devices"
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'dispositivos', 'title': 'topics'}">
        <span>Dispositivos</span>
      </button>
      <button
        class="filters__filter--pill cta cta--is-2"
        data-filter-name="topics"
        data-filter-option="employees"
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'empleados', 'title': 'topics'}">
        <span>Empleados</span>
      </button>
  </nav>
  <div class="filters__filter-wrapper--selectbox cta--is-2" tabindex="0">
    <select
data-filter-name="topics"      class="filters__filter--selectbox cta"
      tabindex="-1"
      data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'open', 'title': 'topics dropdown'}">
        <option
          value="all"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'todos los temas', 'title': 'topics'}">
          Todos los temas
        </option>
        <option
          value="management"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'gestión', 'title': 'topics'}">
          Gestión
        </option>
        <option
          value="security"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'seguridad', 'title': 'topics'}">
          Seguridad
        </option>
        <option
          value="devices"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'dispositivos', 'title': 'topics'}">
          Dispositivos
        </option>
        <option
          value="employees"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'empleados', 'title': 'topics'}">
          Empleados
        </option>
    </select>  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-arrow-round"></use>
  </svg></div>
  <div class="filters__filter-wrapper--selectbox cta--is-2" tabindex="0">
    <select
data-filter-name="content-types"      class="filters__filter--selectbox cta"
      tabindex="-1"
      data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'open', 'title': 'content types dropdown'}">
        <option
          value="all"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'tipos de contenido', 'title': 'content types'}">
          Tipos de contenido
        </option>
        <option
          value="video"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'vídeo', 'title': 'content types'}">
          Vídeo
        </option>
        <option
          value="datasheet"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'hoja de datos', 'title': 'content types'}">
          Hoja de datos
        </option>
        <option
          value="report-pdf"
          data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filters', 'eventLabel': 'informe/pdf', 'title': 'content types'}">
          Informe/PDF
        </option>
    </select>  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-arrow-round"></use>
  </svg></div>
  </div>


          <div class="filterable-collection__items-wrapper   ">
                  <article
                    data-topics="management"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;f48a27586c9ca802d1ffe6ba2cd1afa5&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Vídeo de resumen sobre la activación automática"
        aria-describedby="video-de-resumen-sobre-la-activacion-automatica"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/ZgOIXiiWcK4OYZqQ452wR5Hsxag20ze7o4y0z0PF0wVrswt-IWF4xi_QrXzWnYbvPAXh1MqmbysQhXAY55kO1hTMWl2ahnjHIrOI=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Vídeo de resumen sobre la activación automática</h3>
<p id="video-de-resumen-sobre-la-activacion-automatica" class="filterable-collection__item-body is-copy-m">Descubre cómo la activación automática hace que la implementación sea sencilla y segura.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;f48a27586c9ca802d1ffe6ba2cd1afa5&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/ebuJW1M1DfXoUDuTGzpZ1BUkRdLWzGAS2CHRS3cWuL7qzl4IV1g1FPoGVZYLArnVtxuBn47iB-riKnPEDVdyfgLPGCFUzMkr0XzpMw=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de activación automática</h3>
<p id="hoja-de-datos-de-activacion-automatica" class="filterable-collection__item-body is-copy-m">Consulta información general sobre cómo funciona la activación automática de Android.</p>




    <a
        href="https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Zero-touch-data-sheet-2020.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Zero-touch-data-sheet-2020.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/98sjeM746jxyRu-KwmLRd6_9gVo7Wq7fiRK14kve9oZh7umrOl0fXrsk_WU-pjV3smdHUkqPlg6sJaDbvU6AFoJb33c9vUTVZI4vKg=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Kit para nuevos usuarios</h3>
<p id="kit-para-nuevos-usuarios" class="filterable-collection__item-body is-copy-m">Esta guía tiene como objetivo ayudar a que tu equipo de TI explique las funciones y ventajas de Android Enterprise a los nuevos usuarios de la organización. Los contenidos del kit te ayudarán a agilizar la implementación, aumentar la satisfacción de los usuarios y mejorar tu plan de comunicación.</p>




    <a
        href="https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android_Enterprise_User_Adoption_Overview%20(Digital).pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'más información', 'title': 'cta', 'linkUrl': 'https://storage.googleapis.com/android-com/resources/enterprise/pdfs/Android_Enterprise_User_Adoption_Overview%20(Digital).pdf'}"><span>Más información</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="devices"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;00be6494c37bb8928e0cef16ff148d1d&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Android Enterprise: flexibilidad y elección"
        aria-describedby="android-enterprise-flexibilidad-y-eleccion"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/1kPVxOm_SFErwPOOWto1B9WCpxiyL8-Re3ll_BdsOFnNXMpT7PyrFUH5_Fe-m535PQ-VuC2yrMTDjPw0YJDXNFqJCXnUMsmYEj8VYA=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Dispositivos&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Android Enterprise: flexibilidad y elección</h3>
<p id="android-enterprise-flexibilidad-y-eleccion" class="filterable-collection__item-body is-copy-m">Android proporciona más flexibilidad, seguridad y facilidad para gestionar dispositivos que ningún otro sistema.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;00be6494c37bb8928e0cef16ff148d1d&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;541ebecfc2e4d964b73072312b0b77f3&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Android Enterprise: resumen sobre la gestión"
        aria-describedby="android-enterprise-resumen-sobre-la-gestion"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/jkyDSN6_J8Z_7wo9RcI6CFkjgizSPVPNO4wcbHZ_2Sp-323xkVDfCqYFIci0iSkMeMo01bgwgwC4nJFe0lpJ3IdA3JBWlnpSIa_-U_g=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Android Enterprise: resumen sobre la gestión</h3>
<p id="android-enterprise-resumen-sobre-la-gestion" class="filterable-collection__item-body is-copy-m">Android ofrece opciones de gestión para cualquier tipo de implementación, desde dispositivos con una política de bloqueo estricta hasta aquellos en los que se permite su uso personal fuera del trabajo o que están pensados para un solo uso.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;541ebecfc2e4d964b73072312b0b77f3&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de gestión de Android Enterprise</h3>
<p id="hoja-de-datos-de-gestion-de-android-enterprise" class="filterable-collection__item-body is-copy-m">Con Android, es fácil hacerle frente a cualquier posible situación en los dispositivos para empresas.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_One_pager-Management.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/CEha25RPOVbRah1ssMoXPB5qQ2b-Ym1C_E2DTpRrwGK5MGQovvH32TTjjjEYlm_odTNawGsWHTDKdhGXIYXkrgpXrlXxHo49cO6i=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de dispositivos que pertenecen a empresas</h3>
<p id="hoja-de-datos-de-dispositivos-que-pertenecen-a-empresas" class="filterable-collection__item-body is-copy-m">Descubre cómo Android ofrece opciones de gestión flexibles y seguras para los dispositivos de las empresas.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Company_owned_devices_datasheet_new_design.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;e187ab4837f492f0fcf24844e4d4acdc&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Android Enterprise: resumen sobre la seguridad"
        aria-describedby="android-enterprise-resumen-sobre-la-seguridad"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/r7Tip12TI2h806TMLgLg6rV3qF5tAO8ChzWEATt-MAY6qkWH4vBvd1XWcTrvfUuuGF4ZfDnRSSd33D0t1d7z0qxIUhCehDFmpoil6w=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Android Enterprise: resumen sobre la seguridad</h3>
<p id="android-enterprise-resumen-sobre-la-seguridad" class="filterable-collection__item-body is-copy-m">Con Android Enterprise, proteger los datos de la empresa y la privacidad de los datos personales incluidos en todos los dispositivos móviles es posible gracias a las múltiples capas de protección integradas.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;e187ab4837f492f0fcf24844e4d4acdc&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="report-pdf"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/SV7uTs4B_97WUofS3lYhSNjlz0KwtoEYwhbig4MDo-GCTgn_r-JO8XRThWH8gIVTdBUp17ZHFKKwscuBvFT3xyMMvH306cOJteVy5TTbT2pg3AleTQ"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/SV7uTs4B_97WUofS3lYhSNjlz0KwtoEYwhbig4MDo-GCTgn_r-JO8XRThWH8gIVTdBUp17ZHFKKwscuBvFT3xyMMvH306cOJteVy5TTbT2pg3AleTQ=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/SV7uTs4B_97WUofS3lYhSNjlz0KwtoEYwhbig4MDo-GCTgn_r-JO8XRThWH8gIVTdBUp17ZHFKKwscuBvFT3xyMMvH306cOJteVy5TTbT2pg3AleTQ=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/SV7uTs4B_97WUofS3lYhSNjlz0KwtoEYwhbig4MDo-GCTgn_r-JO8XRThWH8gIVTdBUp17ZHFKKwscuBvFT3xyMMvH306cOJteVy5TTbT2pg3AleTQ=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Informe/PDF</h4>


                      <h3 class="filterable-collection__item-heading is-5">Informe de seguridad de Android</h3>
<p id="informe-de-seguridad-de-android" class="filterable-collection__item-body is-copy-m">Descubre cómo protegemos la seguridad de todo tipo de organizaciones con las prácticas más eficaces del sector.</p>




    <a
        href="https://services.google.com/fh/files/misc/android-enterprise-security-paper-2023.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-report/pdf', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://services.google.com/fh/files/misc/android-enterprise-security-paper-2023.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/T8vwVyY1PDWDxyxuhuXd0WfhmmV6kIw3osBKUb5VZH5kspTTKD7DAefDRWp9DpsHndrIxrgTyVTiymy33G-3wL34g61KtaXHUkn4Cg"
    alt="Página de seguridad de Android"
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/T8vwVyY1PDWDxyxuhuXd0WfhmmV6kIw3osBKUb5VZH5kspTTKD7DAefDRWp9DpsHndrIxrgTyVTiymy33G-3wL34g61KtaXHUkn4Cg=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/T8vwVyY1PDWDxyxuhuXd0WfhmmV6kIw3osBKUb5VZH5kspTTKD7DAefDRWp9DpsHndrIxrgTyVTiymy33G-3wL34g61KtaXHUkn4Cg=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/T8vwVyY1PDWDxyxuhuXd0WfhmmV6kIw3osBKUb5VZH5kspTTKD7DAefDRWp9DpsHndrIxrgTyVTiymy33G-3wL34g61KtaXHUkn4Cg=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt="Página de seguridad de Android"
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de la seguridad de Android</h3>
<p id="hoja-de-datos-de-la-seguridad-de-android" class="filterable-collection__item-body is-copy-m">Descubre cómo Recomendado por Android Enterprise hace que seleccionar, implementar y gestionar dispositivos Android sea más sencillo para las empresas.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Security_Data_Sheet.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="report-pdf"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/vEdyigIBs0ZETY2I4YId1cyEO_llMs-jVgGzi1ZwPrcagy35142QFf18fTUukLeVaxhkrKczIVdGrUwojBHjaC04cmcYH2VAKsoOiA=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Informe/PDF</h4>


                      <h3 class="filterable-collection__item-heading is-5">Análisis anual del 2018 sobre la seguridad de Android</h3>
<p id="analisis-anual-del-2018-sobre-la-seguridad-de-android" class="filterable-collection__item-body is-copy-m">Consulta información general sobre nuestras medidas de seguridad y descubre cómo los servicios de Google protegen el ecosistema de Android.</p>




    <a
        href="https://source.android.com/security/reports/Google_Android_Security_2018_Report_Final.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-report/pdf', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://source.android.com/security/reports/Google_Android_Security_2018_Report_Final.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;2ae0fe6c6735f392461fcdd2504dd3b9&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Resumen del análisis del año 2018 sobre la seguridad y la privacidad de Android"
        aria-describedby="resumen-del-analisis-del-ano-2018-sobre-la-seguridad-y-la-privacidad-de-android"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/e1fuVmrmMOHH5Ss3KbdMcWh8nOcS54eai9O1YFCNmOucyqZw9HdVgxdJJ4eFcS85rB6jBgRQhToUonGpdpOXsv33PAvxbscLdwcRHQ"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/e1fuVmrmMOHH5Ss3KbdMcWh8nOcS54eai9O1YFCNmOucyqZw9HdVgxdJJ4eFcS85rB6jBgRQhToUonGpdpOXsv33PAvxbscLdwcRHQ=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/e1fuVmrmMOHH5Ss3KbdMcWh8nOcS54eai9O1YFCNmOucyqZw9HdVgxdJJ4eFcS85rB6jBgRQhToUonGpdpOXsv33PAvxbscLdwcRHQ=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/e1fuVmrmMOHH5Ss3KbdMcWh8nOcS54eai9O1YFCNmOucyqZw9HdVgxdJJ4eFcS85rB6jBgRQhToUonGpdpOXsv33PAvxbscLdwcRHQ=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Resumen del análisis del año 2018 sobre la seguridad y la privacidad de Android</h3>
<p id="resumen-del-analisis-del-ano-2018-sobre-la-seguridad-y-la-privacidad-de-android" class="filterable-collection__item-body is-copy-m">Dave Kleidermacher, vicepresidente de Seguridad y Privacidad de Android, habla sobre los aspectos más destacados en el análisis del año 2018 sobre la seguridad y la privacidad de Android.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;2ae0fe6c6735f392461fcdd2504dd3b9&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="security"
                    data-content-types="report-pdf"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/Oybjx-i0c2EPhovmWD1TptQTQ9A1wbk3CkfXunJStBV3alGiNcIsCNumQAs87BA3Sxwi7-5GME5QMJQezJCQQE3BKSw5FH7fhgT2Uw=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Seguridad&nbsp;&middot;&nbsp;Informe/PDF</h4>


                      <h3 class="filterable-collection__item-heading is-5">Análisis anual del 2017 sobre la seguridad de Android</h3>
<p id="analisis-anual-del-2017-sobre-la-seguridad-de-android" class="filterable-collection__item-body is-copy-m">Consulta información general sobre nuestras medidas de seguridad y descubre cómo los servicios de Google protegen el ecosistema de Android.</p>




    <a
        href="https://source.android.com/security/reports/Google_Android_Security_2017_Report_Final.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-report/pdf', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://source.android.com/security/reports/Google_Android_Security_2017_Report_Final.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="devices"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/OujyUr91hauu5O8I7TiQLapfhTsLQw57Di_lL4vFv1ZuX-aNJwfFeGk3K0QViBG6QTeSIxIlOtKJI-6lD5G3Vtz-QSzA8NkXtWFC8g=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Dispositivos&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos sobre la elección de dispositivos Android</h3>
<p id="hoja-de-datos-sobre-la-eleccion-de-dispositivos-android" class="filterable-collection__item-body is-copy-m">Android ofrece el ecosistema de hardware de movilidad con más posibilidades del mundo.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Choice_datasheet_new_design.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Choice_datasheet_new_design.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="devices"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/ZZqJCbVU0cwtNFJq5zys-AUzHxcxl3rVVwfQuMIW1G2nlAwzhNZOFIDtd0dhhC9HOv03VTir2R7phHAqROqtsi-hBjVAdSw-03h0fg=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Dispositivos&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Recomendado por Android Enterprise (dispositivos robustos)</h3>
<p id="recomendado-por-android-enterprise-dispositivos-robustos" class="filterable-collection__item-body is-copy-m">Hace que sea más fácil identificar y seleccionar dispositivos robustos validados.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_RUGGED_One_Pager.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_RUGGED_One_Pager.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/efRVRp4kI_GAhNYuJuImLeZxbNNKoFCJVveXx_kqXekXZNCZTbs8-sl5-6-jXNedWmD1UG5XwMwMJ6oTlHfztSRIGWqADUOHmcChIw=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de desactivación de Device Admin</h3>
<p id="hoja-de-datos-de-desactivacion-de-device-admin" class="filterable-collection__item-body is-copy-m">Descubre cómo migrar de Device Admin al sistema de gestión moderno Android Enterprise.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Device_Admin_Deprecation_Data_Sheet.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Device_Admin_Deprecation_Data_Sheet.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;c963079f51a56f02e3d1b156e2bb2905&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Comparativa de Android Enterprise y Device Admin"
        aria-describedby="comparativa-de-android-enterprise-y-device-admin"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/Ny6p8G7ACzo6UcP4ZLwfK2oxScTIh2LStCXl1BAv2asI-sC4PMsncnpbMQXuSCK7woky4uZAhy15SX3zR5p-lGiUmKirIU1zCYLqYg"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/Ny6p8G7ACzo6UcP4ZLwfK2oxScTIh2LStCXl1BAv2asI-sC4PMsncnpbMQXuSCK7woky4uZAhy15SX3zR5p-lGiUmKirIU1zCYLqYg=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/Ny6p8G7ACzo6UcP4ZLwfK2oxScTIh2LStCXl1BAv2asI-sC4PMsncnpbMQXuSCK7woky4uZAhy15SX3zR5p-lGiUmKirIU1zCYLqYg=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/Ny6p8G7ACzo6UcP4ZLwfK2oxScTIh2LStCXl1BAv2asI-sC4PMsncnpbMQXuSCK7woky4uZAhy15SX3zR5p-lGiUmKirIU1zCYLqYg=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Comparativa de Android Enterprise y Device Admin</h3>
<p id="comparativa-de-android-enterprise-y-device-admin" class="filterable-collection__item-body is-copy-m">Por qué deberías migrar de Device Admin a Android Enterprise.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;c963079f51a56f02e3d1b156e2bb2905&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="employees"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/oQpGs99ipcf6v-LDVURnaEPK62rx__m_7Nzl698yHlMqTpPxKjIzO277ybeCBWnKeRIxFCZQ0N-N4UvI_ZbwZSo9GtaGPb0rcXEbaw=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Empleados&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de BYOD</h3>
<p id="hoja-de-datos-de-byod" class="filterable-collection__item-body is-copy-m">Descubre cómo Android protege la privacidad y productividad de los dispositivos de los empleados que usan perfiles de trabajo.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/BYOD_datasheet_new_design.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;3d68d50a81d9ade07f9b6e90e5f981ae&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Vídeo sobre cómo configurar la activación automática"
        aria-describedby="video-sobre-como-configurar-la-activacion-automatica"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/W-skYa0pw-cEa394kaTCHWARDDyeQtSC8YJv-HQLlA29OuE31BL4EmQC1VEH0-MQg1KRPEoomDbR516Btax7n6X2dRVCx6qMChxeKQ"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/W-skYa0pw-cEa394kaTCHWARDDyeQtSC8YJv-HQLlA29OuE31BL4EmQC1VEH0-MQg1KRPEoomDbR516Btax7n6X2dRVCx6qMChxeKQ=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/W-skYa0pw-cEa394kaTCHWARDDyeQtSC8YJv-HQLlA29OuE31BL4EmQC1VEH0-MQg1KRPEoomDbR516Btax7n6X2dRVCx6qMChxeKQ=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/W-skYa0pw-cEa394kaTCHWARDDyeQtSC8YJv-HQLlA29OuE31BL4EmQC1VEH0-MQg1KRPEoomDbR516Btax7n6X2dRVCx6qMChxeKQ=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Vídeo sobre cómo configurar la activación automática</h3>
<p id="video-sobre-como-configurar-la-activacion-automatica" class="filterable-collection__item-body is-copy-m">Descubre lo fácil que es configurar la activación automática en tu organización.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;3d68d50a81d9ade07f9b6e90e5f981ae&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="management"
                    data-content-types="video"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                          
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;33a4493179af43ba4e32680d6e432478&#39;}"
      class="modal-opener filterable-collection__modal-button"aria-label="Abrir vídeo: Android Enterprise: plan de migración"
        aria-describedby="android-enterprise-plan-de-migracion"
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/iMKmMH4b0cR0NrhPoxAYzm-1AFas_tBNVPwWxvDix6zxpD9XYqFSpryyO_Ui7M_fRYRm_WscuWvW9OQ4bbxGHxQGE6JgyAfx80gnbQ"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/iMKmMH4b0cR0NrhPoxAYzm-1AFas_tBNVPwWxvDix6zxpD9XYqFSpryyO_Ui7M_fRYRm_WscuWvW9OQ4bbxGHxQGE6JgyAfx80gnbQ=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/iMKmMH4b0cR0NrhPoxAYzm-1AFas_tBNVPwWxvDix6zxpD9XYqFSpryyO_Ui7M_fRYRm_WscuWvW9OQ4bbxGHxQGE6JgyAfx80gnbQ=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/iMKmMH4b0cR0NrhPoxAYzm-1AFas_tBNVPwWxvDix6zxpD9XYqFSpryyO_Ui7M_fRYRm_WscuWvW9OQ4bbxGHxQGE6JgyAfx80gnbQ=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>


                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Gestión&nbsp;&middot;&nbsp;Vídeo</h4>


                      <h3 class="filterable-collection__item-heading is-5">Android Enterprise: plan de migración</h3>
<p id="android-enterprise-plan-de-migracion" class="filterable-collection__item-body is-copy-m">Prácticas recomendadas para pasar de Device Admin a Android Enterprise.</p>




    
  <button
    data-android-component="modal-opener"
    data-android-component-config="{&#39;contentId&#39;: &#39;33a4493179af43ba4e32680d6e432478&#39;}"
    class="cta cta--is-2 cta--is-video modal-opener "
    aria-label="Open video"        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-video', 'eventLabel': 'ver el vídeo', 'title': ''}">
    <span>Ver el vídeo</span></button>

                    </div>
                  </article>
                  <article
                    data-topics="devices"
                    data-content-types="datasheet"
                    class="filterable-collection__item">
                    <div class="filterable-collection__item-media-wrapper
                      ">
                                <cloud-image
    src="https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q"
    alt=""
class="filterable-collection__image cloud-image--landscape "      width="392"
      lg="717"
      xl="1062"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q=w392-v3-e365"
      srcset="https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q=w1062-v3-e365 1062w,https://lh3.googleusercontent.com/ht5LoSoOXfj37mcU5eZyeOVLJ-RrdFOzfGr8B0C2dPcP-h7Sk4z6Ah9vXReNn6faBKJ3JnQXC0k5LMZZrbvdeuLqHuvz7vH4tcvS_Q=w717-v3-e365 717w,"
      sizes="(min-width: 1440px) 1062px,(min-width: 1000px) 717px,"
      alt=""
    >
      </noscript>
  </cloud-image>



                    </div>
                    <div class="filterable-collection__item-content-wrapper">
                        <h4 class="filterable-collection__item-metadata is-7">Dispositivos&nbsp;&middot;&nbsp;Hoja de datos</h4>


                      <h3 class="filterable-collection__item-heading is-5">Hoja de datos de Recomendado por Android Enterprise</h3>
<p id="hoja-de-datos-de-recomendado-por-android-enterprise" class="filterable-collection__item-body is-copy-m">Dispositivos y servicios de empresa verificados por Google.</p>




    <a
        href="https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_Datasheet_w_o_carrier.pdf"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection-datasheet', 'eventLabel': 'ver más', 'title': 'cta', 'linkUrl': 'https://static.googleusercontent.com/media/www.android.com/en//static/2016/pdfs/enterprise/Android_Enterprise_Recommended_Datasheet_w_o_carrier.pdf'}"><span>Ver más</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

                    </div>
                  </article>
          </div>

<div class="filterable-collection__loadmore-wrapper">
            <button aria-label="Ver más" class="cta cta--is-2"
              data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'filterable-collection_resources-filterable-content', 'eventLabel': 'ver más', 'title': 'cta'}">
              <span>Ver más</span>
            </button>
          </div>

          <div id="filterable-collection__noresult"
            class="filterable-collection__noresult-wrapper">
            <h3 class="filterable-collection__noresult-title is-2">No hay ningún resultado.</h3>
            <p class="filterable-collection__noresult-body is-copy-m">Tus criterios de búsqueda no han devuelto ningún resultado.</p>
          </div>
      </div>
    </section>


  

      <section
      id="resources-android-guides-for-devs"
      class="content-twoup content-twoup--primary content-twoup--with-masthead">
      <div
        class="content-twoup__content-wrapper grid">
            <div class="content-twoup__masthead is-wide-masthead ">
    
    <h2 class="content-twoup__heading  is-2 is-heading">Guías de Android para desarrolladores.</h2>

  </div>



          <article
            class="content-twoup__offering">
                    <cloud-image
    src="https://lh3.googleusercontent.com/Y4SJ6d5RZLbbH-zAetzrLAxM8--YdRdGib5Mt3vffup4UYCX0lC9ulxAYPL62iKYyrYEQ05KVi9uOpvtd4VTuruw62PhncdyivBi"
    alt="Desarrolladores de aplicaciones"
class="content-twoup__offering-image cloud-image--landscape "      width="368"
      md="369"
      lg="384"
      xl="407"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/Y4SJ6d5RZLbbH-zAetzrLAxM8--YdRdGib5Mt3vffup4UYCX0lC9ulxAYPL62iKYyrYEQ05KVi9uOpvtd4VTuruw62PhncdyivBi=w368-v3-e365"
      srcset="https://lh3.googleusercontent.com/Y4SJ6d5RZLbbH-zAetzrLAxM8--YdRdGib5Mt3vffup4UYCX0lC9ulxAYPL62iKYyrYEQ05KVi9uOpvtd4VTuruw62PhncdyivBi=w407-v3-e365 407w,https://lh3.googleusercontent.com/Y4SJ6d5RZLbbH-zAetzrLAxM8--YdRdGib5Mt3vffup4UYCX0lC9ulxAYPL62iKYyrYEQ05KVi9uOpvtd4VTuruw62PhncdyivBi=w384-v3-e365 384w,https://lh3.googleusercontent.com/Y4SJ6d5RZLbbH-zAetzrLAxM8--YdRdGib5Mt3vffup4UYCX0lC9ulxAYPL62iKYyrYEQ05KVi9uOpvtd4VTuruw62PhncdyivBi=w369-v3-e365 369w,"
      sizes="(min-width: 1440px) 407px,(min-width: 1000px) 384px,(min-width: 600px) 369px,"
      alt="Desarrolladores de aplicaciones"
    >
      </noscript>
  </cloud-image>


              <h3 class="content-twoup__offering-heading is-4">Desarrolladores de aplicaciones</h3>

              <p class="content-twoup__offering-body is-copy-m">Nuestras guías para desarrolladores te mostrarán cómo crear aplicaciones en la plataforma Android o diseños adaptables, entre otras cosas.</p>
              <div class="content-twoup__cta">



    <a
        href="https://developer.android.com/guide/index.html"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-two-up', 'eventLabel': 'ir a la guía', 'title': 'cta', 'linkUrl': 'https://developer.android.com/guide/index.html'}"><span>Ir a la guía</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>
          </article>

          <article
            class="content-twoup__offering">
                    <cloud-image
    src="https://lh3.googleusercontent.com/7GBhr5HIdySgHOUJs4tl7YEBRPpt5P0tv8AT6l5ZYBvtcqWRNh5_j1Xo68lwrJt-ODUq87OQkiLt2uU0Dl12UL3mRXnn6SH5-8NYMDkxAp13mcnhN1wS"
    alt="Desarrolladores de EMM"
class="content-twoup__offering-image cloud-image--landscape "      width="368"
      md="369"
      lg="384"
      xl="407"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/7GBhr5HIdySgHOUJs4tl7YEBRPpt5P0tv8AT6l5ZYBvtcqWRNh5_j1Xo68lwrJt-ODUq87OQkiLt2uU0Dl12UL3mRXnn6SH5-8NYMDkxAp13mcnhN1wS=w368-v3-e365"
      srcset="https://lh3.googleusercontent.com/7GBhr5HIdySgHOUJs4tl7YEBRPpt5P0tv8AT6l5ZYBvtcqWRNh5_j1Xo68lwrJt-ODUq87OQkiLt2uU0Dl12UL3mRXnn6SH5-8NYMDkxAp13mcnhN1wS=w407-v3-e365 407w,https://lh3.googleusercontent.com/7GBhr5HIdySgHOUJs4tl7YEBRPpt5P0tv8AT6l5ZYBvtcqWRNh5_j1Xo68lwrJt-ODUq87OQkiLt2uU0Dl12UL3mRXnn6SH5-8NYMDkxAp13mcnhN1wS=w384-v3-e365 384w,https://lh3.googleusercontent.com/7GBhr5HIdySgHOUJs4tl7YEBRPpt5P0tv8AT6l5ZYBvtcqWRNh5_j1Xo68lwrJt-ODUq87OQkiLt2uU0Dl12UL3mRXnn6SH5-8NYMDkxAp13mcnhN1wS=w369-v3-e365 369w,"
      sizes="(min-width: 1440px) 407px,(min-width: 1000px) 384px,(min-width: 600px) 369px,"
      alt="Desarrolladores de EMM"
    >
      </noscript>
  </cloud-image>


              <h3 class="content-twoup__offering-heading is-4">Desarrolladores de EMM</h3>

              <p class="content-twoup__offering-body is-copy-m">Descubre cómo crear soluciones de gestión de la movilidad empresarial para sacar el máximo partido a nuestras funciones.</p>
              <div class="content-twoup__cta">



    <a
        href="https://developers.google.com/android/work/"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-two-up', 'eventLabel': 'ir a la guía', 'title': 'cta', 'linkUrl': 'https://developers.google.com/android/work/'}"><span>Ir a la guía</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>
          </article>
</div>
    </section>


  

  
    <section
      id="resources-help-center"
      class="content-links content-links--primary">
      <div class="content-links__wrapper grid">
        <div class="content-links__copy-wrapper">
          
    <h2 class="content-links__heading is-3 is-heading">¿Necesitas ayuda? Estamos a tu disposición.</h2>
    <div class="content-links__body is-body-wrapper">




    <a
        href="https://support.google.com/work/android/?hl=es#topic=6151012"
    class="cta cta--is-1"aria-label="Visita nuestro Centro de Ayuda: ¿Necesitas ayuda? Estamos a tu disposición."      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-links', 'eventLabel': 'visita nuestro centro de ayuda', 'title': 'cta', 'linkUrl': 'https://support.google.com/work/android/?hl=es#topic=6151012'}"><span>Visita nuestro Centro de Ayuda</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>

        </div>
            <div class="content-links__links-wrapper">
              
    <h2 class="content-links__heading is-6 is-heading">Temas habituales</h2>
    <div class="content-links__body is-body-wrapper">




    <a
        href="https://support.google.com/work/android/answer/6191949?hl=es&amp;ref_topic=6151012"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-links', 'eventLabel': 'perfiles de trabajo', 'title': 'cta', 'linkUrl': 'https://support.google.com/work/android/answer/6191949?hl=es&ref_topic=6151012'}"><span>Perfiles de trabajo</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>



    <a
        href="https://support.google.com/work/android/answer/7218437?hl=es&amp;ref_topic=6151012"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-links', 'eventLabel': 'android&rsquo;s enterprise terminology', 'title': 'cta', 'linkUrl': 'https://support.google.com/work/android/answer/7218437?hl=es&ref_topic=6151012'}"><span>Android&rsquo;s enterprise terminology</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>



    <a
        href="https://support.google.com/work/android/answer/9213914?hl=es"
    class="cta cta--is-2"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-links', 'eventLabel': 'configurar redes vpn en dispositivos android', 'title': 'cta', 'linkUrl': 'https://support.google.com/work/android/answer/9213914?hl=es'}"><span>Configurar redes VPN en dispositivos Android</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</div>

            </div>
      </div>
    </section>


  

      <section
        id="resources-customer-stories"
        class="content-slideshow-full"
        data-android-component-animation="resources-customer-stories">
      <div class="content-slideshow-full__copy grid">  <div class="content-slideshow-full__masthead is-wide-masthead ">
    
    <h2 class="content-slideshow-full__heading is-2 is-heading">Las mejores historias se deben compartir.</h2>
    <div class="content-slideshow-full__body is-body-wrapper">
      <p class="content-slideshow-full__copy is-copy-m">Descubre cómo negocios como el tuyo impulsan su empresa mediante Android.</p>




    <a
        href="/enterprise/customers/"
    class="cta cta--is-1"aria-label="All stories: Las mejores historias se deben compartir."data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-slideshow-full', 'eventLabel': 'all stories', 'title': 'las mejores historias se deben compartir ', 'linkUrl': '/enterprise/customers/'}"><span>All stories</span></a>

</div>

  </div>

      </div>

<ul
        data-g-config="{'eventCategory': 'module interactions', 'moduleName': 'content-slideshow-full', 'eventLabel': '', 'title': 'las mejores historias se deben compartir carousel click'}"
        data-android-component="slideshow"
        data-android-component-config="{'blockCssClass': 'content-slideshow-full' }"
        id="resources-customer-stories-cards"
        class="content-slideshow-full__wrapper">
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;1335d91b938f2aba5240cfc03315f1b8&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Descubre por qué VaxCare recurrió a Android Enterprise para optimizar la distribución de vacunas."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/FX5P8qOI0ixHBK-pYYezk-fTOYJvmjfjlZrpOZw9dCco8j3eb2PaeL24Vf8TUV-I8jFZmcP2BatPKCeOE0hL-bzZ2Mq9m6SZDPMvPrdEC4cTzo4jPDA"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/FX5P8qOI0ixHBK-pYYezk-fTOYJvmjfjlZrpOZw9dCco8j3eb2PaeL24Vf8TUV-I8jFZmcP2BatPKCeOE0hL-bzZ2Mq9m6SZDPMvPrdEC4cTzo4jPDA=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/FX5P8qOI0ixHBK-pYYezk-fTOYJvmjfjlZrpOZw9dCco8j3eb2PaeL24Vf8TUV-I8jFZmcP2BatPKCeOE0hL-bzZ2Mq9m6SZDPMvPrdEC4cTzo4jPDA=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/nZsLhztkto-q6lzKI7aIi2My-LdSzSBCjQvu01eogFjBsomRbTfUgoE5YcCDTu5-ssfZ-ejO1f3TTlJbSPAuP8ve76Xy8Hqa_cixO0_X_w1eQ2FUMg"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/nZsLhztkto-q6lzKI7aIi2My-LdSzSBCjQvu01eogFjBsomRbTfUgoE5YcCDTu5-ssfZ-ejO1f3TTlJbSPAuP8ve76Xy8Hqa_cixO0_X_w1eQ2FUMg=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Descubre por qué VaxCare recurrió a Android Enterprise para optimizar la distribución de vacunas.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Al aprovechar todas las posibilidades que ofrece Android Enterprise, podemos ofrecer a nuestro partner la gestión del inventario en tiempo real, facturación inmediata y acceso al instante a registros de vacunas con la seguridad y los controles que necesitamos".</blockquote>
                  <p class="content-slideshow-full__card-attr">Evan Landis, jefe de Producto de VaxCare</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;20af43c54450249e4294978646b478c1&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Walmart empezó a utilizar Android para obtener datos más precisos y mejorar su productividad."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/VHjg6U7-fROdjZS9rl8w4tGSf0DnYm9gkKlLISG5I6ZFnQGvI_KoXDi4zPVOTDnZQWgZ11TBHLqwvllqmt6i5QuxiW1NkJKXOg8zTOVQ3yBZRM3qag"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/VHjg6U7-fROdjZS9rl8w4tGSf0DnYm9gkKlLISG5I6ZFnQGvI_KoXDi4zPVOTDnZQWgZ11TBHLqwvllqmt6i5QuxiW1NkJKXOg8zTOVQ3yBZRM3qag=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/VHjg6U7-fROdjZS9rl8w4tGSf0DnYm9gkKlLISG5I6ZFnQGvI_KoXDi4zPVOTDnZQWgZ11TBHLqwvllqmt6i5QuxiW1NkJKXOg8zTOVQ3yBZRM3qag=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/-A3PyTqcdPy-VJKiNvRo32b4I3idWx-w81gt5VUGR762ZhtBZodrt7JHgBYwBBvRy_TqV5lnt3zQLGeLhmxUTJ2RXeQ11j4RiKy93A"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/-A3PyTqcdPy-VJKiNvRo32b4I3idWx-w81gt5VUGR762ZhtBZodrt7JHgBYwBBvRy_TqV5lnt3zQLGeLhmxUTJ2RXeQ11j4RiKy93A=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Walmart empezó a utilizar Android para obtener datos más precisos y mejorar su productividad.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Esta plataforma tenía tantos marcos para los desarrolladores que nos resultó muy fácil escogerla".</blockquote>
                  <p class="content-slideshow-full__card-attr">Travis Folck, director de Sistemas de Diseño de Walmart</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;a36d56d4fc608b9426ad48b7ab2fe735&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: SNCF se ha asociado con Android para mejorar su agilidad en dispositivos móviles."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/wG6RDbaTyA3xEjk07zXQwa_4C71JeXBhODw_GjwRJO-lC61_RwT9BCY5s0A1a8MLMIFp-4J-64NXhHECCMmpq8V_8ABw4j7idy4Pciw5l7Kb2MGCCpI"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/wG6RDbaTyA3xEjk07zXQwa_4C71JeXBhODw_GjwRJO-lC61_RwT9BCY5s0A1a8MLMIFp-4J-64NXhHECCMmpq8V_8ABw4j7idy4Pciw5l7Kb2MGCCpI=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/wG6RDbaTyA3xEjk07zXQwa_4C71JeXBhODw_GjwRJO-lC61_RwT9BCY5s0A1a8MLMIFp-4J-64NXhHECCMmpq8V_8ABw4j7idy4Pciw5l7Kb2MGCCpI=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/UBr4WXTZtrnsKLFBuWsO6MD8R5tKWfbdAijP6MVxrUti4QVUABZfFJ26ugdsGPPCrd2PGMNPbHGezJLvfU1VlIccHBR62rGZxplJDg"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/UBr4WXTZtrnsKLFBuWsO6MD8R5tKWfbdAijP6MVxrUti4QVUABZfFJ26ugdsGPPCrd2PGMNPbHGezJLvfU1VlIccHBR62rGZxplJDg=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">SNCF se ha asociado con Android para mejorar su agilidad en dispositivos móviles.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"El director de sistemas de información de la empresa opina que Android Enterprise aporta mucha agilidad y muchas más oportunidades en la gestión de infraestructuras de movilidad".</blockquote>
                  <p class="content-slideshow-full__card-attr">Antoine Houllgatte, gerente de Implementación del Proyecto de Trabajo Digital de SNCF</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;49741f4d870e5a20e520f780723e8c53&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Impulsando la innovación de productos en Pitney Bowes."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/HLBq3FpNmWmflBRCABQt-PL0-1q9qvmhNqYwfnyKQgF8JK2v5cYltlL-fHhxIayY1penlKOE9ns-KGw5tg519uMW60eqw5yeBzYrM3Zdu6rjNr0PMjc"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/HLBq3FpNmWmflBRCABQt-PL0-1q9qvmhNqYwfnyKQgF8JK2v5cYltlL-fHhxIayY1penlKOE9ns-KGw5tg519uMW60eqw5yeBzYrM3Zdu6rjNr0PMjc=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/HLBq3FpNmWmflBRCABQt-PL0-1q9qvmhNqYwfnyKQgF8JK2v5cYltlL-fHhxIayY1penlKOE9ns-KGw5tg519uMW60eqw5yeBzYrM3Zdu6rjNr0PMjc=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/LXYCimidv7prkjdDyB4gwvJjfRJJFI22-HMI2ZUUOcP0ehYiWmAn816Zl-bGMOrY8vE73aL7b63W532bQivoRpOqsyiM8fKziEh0kg"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/LXYCimidv7prkjdDyB4gwvJjfRJJFI22-HMI2ZUUOcP0ehYiWmAn816Zl-bGMOrY8vE73aL7b63W532bQivoRpOqsyiM8fKziEh0kg=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Impulsando la innovación de productos en Pitney Bowes.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"La plataforma Android es probablemente una de las cosas más emocionantes que hemos añadido a nuestros productos en mucho tiempo, porque las posibilidades que nos da son ilimitadas".</blockquote>
                  <p class="content-slideshow-full__card-attr">Chris Giles, vicepresidente de Gestión de Producto Global de Pitney Bowes</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;c67ead62220045a4cae90e808eae7432&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Safelite AutoGlass anima a los técnicos de su campo a trabajar de forma más inteligente y eficiente."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/QJsITTCJzDg54EOtbwRCRwAcAAnzkGFJMl9Prnk6Ev9UFAX-I3WmRygI47VajFEFMPXnmKfiMryqkoEhdn6vnkDwoy4D9a-JyCWMR9ZIpUEw3jwCZA"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/QJsITTCJzDg54EOtbwRCRwAcAAnzkGFJMl9Prnk6Ev9UFAX-I3WmRygI47VajFEFMPXnmKfiMryqkoEhdn6vnkDwoy4D9a-JyCWMR9ZIpUEw3jwCZA=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/QJsITTCJzDg54EOtbwRCRwAcAAnzkGFJMl9Prnk6Ev9UFAX-I3WmRygI47VajFEFMPXnmKfiMryqkoEhdn6vnkDwoy4D9a-JyCWMR9ZIpUEw3jwCZA=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/UJRRgPZXZ9RQ9jkZs3l9qpAyezkNNpzXs2OInc7qiKp6gTllippJOPTCuAZyhJ0z0WYbpexIu6xa6sG5ZmJq9DKjYcEKhVHJnulBlA"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/UJRRgPZXZ9RQ9jkZs3l9qpAyezkNNpzXs2OInc7qiKp6gTllippJOPTCuAZyhJ0z0WYbpexIu6xa6sG5ZmJq9DKjYcEKhVHJnulBlA=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Safelite AutoGlass anima a los técnicos de su campo a trabajar de forma más inteligente y eficiente.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Cualquier modificación que pudiéramos implementar en esta función para que a los técnicos les resultara más fácil usarla ya iba a ser importante, pero el marco tan flexible que Android nos proporcionó nos permitió hacerlo con un solo clic".</blockquote>
                  <p class="content-slideshow-full__card-attr">Nate Beckman, analista de Negocios y Sistemas de Safelite AutoGlass</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;21d1191d7503d0f814dce3762b72adaf&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Marks &amp; Spencer utilizó la plataforma Android para superar importantes desafíos para sus tiendas."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/JmbgL-h1Cy9676DDCF9zhbIotm1teEonL3aiFau0lSMZcoR4BiAUH5Ed5wSs_sdgnXyILH_8lgInC5ZyHxGUNU1kDl6yBQuaxP7uFaCrZEAo8_vb7iCA"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/JmbgL-h1Cy9676DDCF9zhbIotm1teEonL3aiFau0lSMZcoR4BiAUH5Ed5wSs_sdgnXyILH_8lgInC5ZyHxGUNU1kDl6yBQuaxP7uFaCrZEAo8_vb7iCA=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/JmbgL-h1Cy9676DDCF9zhbIotm1teEonL3aiFau0lSMZcoR4BiAUH5Ed5wSs_sdgnXyILH_8lgInC5ZyHxGUNU1kDl6yBQuaxP7uFaCrZEAo8_vb7iCA=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/775oFkHCS4Eay_jq9IHQvhhwC-mGBziPVnf4pmV2SXckJ4p-bsHTNQj5gZB9il3Bsj89cRR49upnw6-erGVbep-Um3ME8GwQ7IH1"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/775oFkHCS4Eay_jq9IHQvhhwC-mGBziPVnf4pmV2SXckJ4p-bsHTNQj5gZB9il3Bsj89cRR49upnw6-erGVbep-Um3ME8GwQ7IH1=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Marks &amp; Spencer utilizó la plataforma Android para superar importantes desafíos para sus tiendas.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"La implementación fue muy sencilla. Mucha gente se sorprendió de que llegara a 9000 dispositivos en seis meses".</blockquote>
                  <p class="content-slideshow-full__card-attr">Andrew Bull, director de Soluciones de Negocio de TI de Marks & Spencer</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;9c60462476756eabf44921a82dcd5154&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Con Android, Guardian Life mejora su productividad."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/bAXyKxp_qj8SKJ0ofpG8KqJX5-mjnsOYIy45_WGkthP2aFb5vDefLun3T2ReW-9w1Gyuil8F16Ru5TSTmoiNMUajBBihnZF9NJYlYrYq3oYtvtB7hLo"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/bAXyKxp_qj8SKJ0ofpG8KqJX5-mjnsOYIy45_WGkthP2aFb5vDefLun3T2ReW-9w1Gyuil8F16Ru5TSTmoiNMUajBBihnZF9NJYlYrYq3oYtvtB7hLo=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/bAXyKxp_qj8SKJ0ofpG8KqJX5-mjnsOYIy45_WGkthP2aFb5vDefLun3T2ReW-9w1Gyuil8F16Ru5TSTmoiNMUajBBihnZF9NJYlYrYq3oYtvtB7hLo=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/hQqWNokqANpQAHU5CGjrwZIyaEhdSe8xyo9gq2s3TnHTUjQsdpvKiTY32IcK0sThRjl5Ncm2-nLLOLmAH1jY1eDwqnI7f6KL_CD15Q"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/hQqWNokqANpQAHU5CGjrwZIyaEhdSe8xyo9gq2s3TnHTUjQsdpvKiTY32IcK0sThRjl5Ncm2-nLLOLmAH1jY1eDwqnI7f6KL_CD15Q=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Con Android, Guardian Life mejora su productividad.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"La plataforma Android crea muchas oportunidades en el campo de las herramientas de productividad y, además, nos ofrece la posibilidad de implementar aplicaciones".</blockquote>
                  <p class="content-slideshow-full__card-attr">Daniel Johnson, director de Tecnología de Guardian Life Insurance</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;9d6ddd1b4310fc43ad0f2d84d1fb51f0&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Transformar la experiencia de los huéspedes en The Peninsula Hotels."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/KGwjTxyX2e5X-08uuUzSiDb7LnLpS2lQzPkoFydVR1RXPxvEOcpEH_iIWbqa7wUuLcul5eeoEIIk_BuJKdzm9HaPGcEOqX0dRJ7QJ4I0dRjs96S-IQ"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/KGwjTxyX2e5X-08uuUzSiDb7LnLpS2lQzPkoFydVR1RXPxvEOcpEH_iIWbqa7wUuLcul5eeoEIIk_BuJKdzm9HaPGcEOqX0dRJ7QJ4I0dRjs96S-IQ=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/KGwjTxyX2e5X-08uuUzSiDb7LnLpS2lQzPkoFydVR1RXPxvEOcpEH_iIWbqa7wUuLcul5eeoEIIk_BuJKdzm9HaPGcEOqX0dRJ7QJ4I0dRjs96S-IQ=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/8mQI5sbTTLtIcbnTpAzoTdYBRT1D690wDJW3Ma3vF-0qoJC23g5K27W3KwIDTfj3BN-4Op4rXIs4w8Qg6WGzZBNyMsE62-TKhm5e"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/8mQI5sbTTLtIcbnTpAzoTdYBRT1D690wDJW3Ma3vF-0qoJC23g5K27W3KwIDTfj3BN-4Op4rXIs4w8Qg6WGzZBNyMsE62-TKhm5e=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Transformar la experiencia de los huéspedes en The Peninsula Hotels.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Android es una herramienta flexible que nos permite rebasar claramente lo que nos exigen nuestros huéspedes, así como nuestros objetivos en materia de tecnología y dispositivos".</blockquote>
                  <p class="content-slideshow-full__card-attr">Christopher Chan, director senior de I+D de The Hongkong and Shanghai Hotels, Limited</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;ad7a9369706305199041049cd5846bb2&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Android ayuda a MiCab a gestionar dispositivos y a proteger los datos."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/gnFDjWCV4r1nDRFxlu9F0RPzbYNLPEl0xJJcYCndOmkunzQW4U76IlFRhlHgHjkpUReLPPLs_HxgZWDMX9ZzLr96fOW0sz9x2xn6JXovXieriEjjIebN"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/gnFDjWCV4r1nDRFxlu9F0RPzbYNLPEl0xJJcYCndOmkunzQW4U76IlFRhlHgHjkpUReLPPLs_HxgZWDMX9ZzLr96fOW0sz9x2xn6JXovXieriEjjIebN=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/gnFDjWCV4r1nDRFxlu9F0RPzbYNLPEl0xJJcYCndOmkunzQW4U76IlFRhlHgHjkpUReLPPLs_HxgZWDMX9ZzLr96fOW0sz9x2xn6JXovXieriEjjIebN=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/CyPZu-kgdzq7yP_mYluNDQYfiibwglK3D1rOWhbvBw6g_CNXa4MCKI5vkCbOgso7ok80oA41SUA-q79UwOQlh7naBznx0qs_9wS1FA"
    alt=""
class="content-slideshow-full__card-logo cloud-image--portrait "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/CyPZu-kgdzq7yP_mYluNDQYfiibwglK3D1rOWhbvBw6g_CNXa4MCKI5vkCbOgso7ok80oA41SUA-q79UwOQlh7naBznx0qs_9wS1FA=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Android ayuda a MiCab a gestionar dispositivos y a proteger los datos.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Gestionamos todos los dispositivos a través de la nube, de forma remota, en vez de tener que gestionarlos uno por uno".</blockquote>
                  <p class="content-slideshow-full__card-attr">Eddie Ybañez, cofundador de MiCab</p>                </div>
              </div>
            </li>
            <li
              class="content-slideshow-full__slide">
              <div class="content-slideshow-full__slide-wrapper grid">
                  
  <button
      data-android-component="modal-opener"
      data-android-component-config="{&#39;contentId&#39;: &#39;f767407cce2c93d15404e6e6aadc99f6&#39;}"
      class="modal-opener content-slideshow-full__modal-button"aria-label="Abrir vídeo: Entregas a tiempo y clientes satisfechos en Chronopost."
>
        <svg class="modal-opener__play-icon"  width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#FFF" fill-opacity=".7" fill="#FFF" cx="47" cy="47" r="47"/><path class="play-icon" d="M44 42.8v10.4c0 .8.9 1.3 1.5.8l8.1-5.2c.6-.4.6-1.3 0-1.7L45.5 42c-.6-.4-1.5 0-1.5.8z" fill="#073042" fill-rule="nonzero"/></g></svg>

            <cloud-image
    src="https://lh3.googleusercontent.com/T-JbldjEBMskKzqf1W0A9X2KjWCuAoeBjLRZhO3MGBLXOoNiV1GrAG_MPcyqHu78kVbt2jRhUTyULQUUV7WTxpxz26kT5FcGBMg4Kwj4BnVuiEFbCLL5"
    alt=""
class="content-slideshow-full__image cloud-image--landscape "      width="550"
      md="700"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/T-JbldjEBMskKzqf1W0A9X2KjWCuAoeBjLRZhO3MGBLXOoNiV1GrAG_MPcyqHu78kVbt2jRhUTyULQUUV7WTxpxz26kT5FcGBMg4Kwj4BnVuiEFbCLL5=w550-v3-e365"
      srcset="https://lh3.googleusercontent.com/T-JbldjEBMskKzqf1W0A9X2KjWCuAoeBjLRZhO3MGBLXOoNiV1GrAG_MPcyqHu78kVbt2jRhUTyULQUUV7WTxpxz26kT5FcGBMg4Kwj4BnVuiEFbCLL5=w700-v3-e365 700w,"
      sizes="(min-width: 600px) 700px,"
      alt=""
    >
      </noscript>
  </cloud-image>


  </button>

                <div class="content-slideshow-full__card">                          <cloud-image
    src="https://lh3.googleusercontent.com/RyCdOpLuIRf8lN0f3nxmU94ScnwS1QuZC_mCCRu5FB70KWjbsyS_PV_0xqaYOoxNcwZd4ANIwztp1M9pZKJHAyJqu5YdYQ8DzVqx1w"
    alt=""
class="content-slideshow-full__card-logo cloud-image--landscape "      width="150"
    cache-ttl="e365"
  >
      <noscript>
        <img
      src="https://lh3.googleusercontent.com/RyCdOpLuIRf8lN0f3nxmU94ScnwS1QuZC_mCCRu5FB70KWjbsyS_PV_0xqaYOoxNcwZd4ANIwztp1M9pZKJHAyJqu5YdYQ8DzVqx1w=w150-v3-e365"
      srcset=""
      sizes=""
      alt=""
    >
      </noscript>
  </cloud-image>


<h3 class="is-6">Entregas a tiempo y clientes satisfechos en Chronopost.</h3>
                  <blockquote class="content-slideshow-full__card-quote">"Chronopost se decidió por Android Enterprise para aprovechar lo que ofrece esta solución en lo relativo a la seguridad de datos, a la supervisión de los dispositivos móviles y a la gestión de aplicaciones a través de Google Play".</blockquote>
                  <p class="content-slideshow-full__card-attr">Chams Fathallah, director de Sistemas de TI para el Transporte de Chronopost</p>                </div>
              </div>
            </li>
      </ul>
      
<div
    data-android-component="progress-bar"
    data-android-component-config="{&#34;small&#34;: {&#34;scrollBy&#34;: 1, &#34;showArrows&#34;: false}, &#34;medium&#34;: {&#34;scrollBy&#34;: 1, &#34;showArrows&#34;: false}, &#34;large&#34;: {&#34;scrollBy&#34;: 1, &#34;animationDuration&#34;: 600, &#34;showArrows&#34;: true}, &#34;extra-large&#34;: {&#34;scrollBy&#34;: 1, &#34;animationDuration&#34;: 600, &#34;showArrows&#34;: true}, &#34;id&#34;: &#34;resources-customer-stories-cards&#34;}"
    data-android-component-force-import
    class="carousel-progress content-slideshow-full__progress-bar">
    <progress
      aria-hidden="true"
      class="carousel-progress__bar"
      max="100"
      value="0">
    </progress>
    <button class="carousel-progress__back"
      aria-label="Ir a la diapositiva anterior" type="button"
>
            <svg class="icon--svg carousel-progress__back-icon" aria-hidden="true">    <use xlink:href="#ico-arrow-external"></use>
  </svg>

    </button>
    <button class="carousel-progress__next"
      aria-label="Ir a la diapositiva siguiente" type="button"
>
            <svg class="icon--svg carousel-progress__next-icon" aria-hidden="true">    <use xlink:href="#ico-arrow-external"></use>
  </svg>

    </button>
  </div>

    </section>

              </article>    </main>




<footer data-android-component="footer" class="footer-default" role="contentinfo" aria-label="Menú secundario">
  <div class="grid">
    <ul class="footer-default__nav">            <li class="footer-default__item">
      <h3 class="footer-default__title js-nav-item"
        aria-expanded="false"
        aria-controls="para-desarrolladores-section"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'para desarrolladores', 'title': 'para desarrolladores accordion'}"
        >
        <button
        class="footer-default__button"
        id="para-desarrolladores-btn">
          Para desarrolladores
                <svg class="icon--svg footer-default__cross" aria-hidden="true">    <use xlink:href="#ico-cross"></use>
  </svg>

        </button>
      </h3>
      <ul id="para-desarrolladores-section"
          class="footer-default__nav-subitem js-subitem-container"
          aria-labelledby="para-desarrolladores-btn">
          <li class="footer-default__nav-list">



    <a
        href="https://developer.android.com/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'recursos para desarrolladores', 'title': 'para desarrolladores', 'linkUrl': 'https://developer.android.com/'}"><span>Recursos para desarrolladores</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://developer.android.com/studio/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'android studio y sdk para android', 'title': 'para desarrolladores', 'linkUrl': 'https://developer.android.com/studio/'}"><span>Android Studio y SDK para Android</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://source.android.com/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'proyecto de software libre de android', 'title': 'para desarrolladores', 'linkUrl': 'https://source.android.com/'}"><span>Proyecto de Software Libre de Android</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
      </ul>
    </li>
            <li class="footer-default__item">
      <h3 class="footer-default__title js-nav-item"
        aria-expanded="false"
        aria-controls="para-empresas-section"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'para empresas', 'title': 'para empresas accordion'}"
        >
        <button
        class="footer-default__button"
        id="para-empresas-btn">
          Para empresas
                <svg class="icon--svg footer-default__cross" aria-hidden="true">    <use xlink:href="#ico-cross"></use>
  </svg>

        </button>
      </h3>
      <ul id="para-empresas-section"
          class="footer-default__nav-subitem js-subitem-container"
          aria-labelledby="para-empresas-btn">
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'descripción general', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/'}"><span>Descripción general</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/management/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'gestión', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/management/'}"><span>Gestión</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/security/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'seguridad', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/security/'}"><span>Seguridad</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/enrollment/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'registro', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/enrollment/'}"><span>Registro</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/employees/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'empleados', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/employees/'}"><span>Empleados</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/recommended/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'recomendado', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/recommended/'}"><span>Recomendado</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/devices/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'dispositivos empresariales', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/devices/'}"><span>Dispositivos empresariales</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/resources/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'recursos', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/resources/'}"><span>Recursos</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/enterprise/partners/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'para partners', 'title': 'para empresas', 'linkUrl': '/enterprise/partners/'}"><span>Para partners</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/enterprise/solutions-finder/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'directorio android enterprise solutions', 'title': 'para empresas', 'linkUrl': '/intl/es_es/enterprise/solutions-finder/'}"><span>Directorio Android Enterprise Solutions</span></a>

</li>
      </ul>
    </li>
            <li class="footer-default__item">
      <h3 class="footer-default__title js-nav-item"
        aria-expanded="false"
        aria-controls="para-la-prensa-section"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'para la prensa', 'title': 'para la prensa accordion'}"
        >
        <button
        class="footer-default__button"
        id="para-la-prensa-btn">
          Para la prensa
                <svg class="icon--svg footer-default__cross" aria-hidden="true">    <use xlink:href="#ico-cross"></use>
  </svg>

        </button>
      </h3>
      <ul id="para-la-prensa-section"
          class="footer-default__nav-subitem js-subitem-container"
          aria-labelledby="para-la-prensa-btn">
          <li class="footer-default__nav-list">



    <a
        href="https://blog.google/products/android/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'blog de android', 'title': 'para la prensa', 'linkUrl': 'https://blog.google/products/android/'}"><span>Blog de Android</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://www.blog.google/products/android-enterprise/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'blog de android enterprise', 'title': 'para la prensa', 'linkUrl': 'https://www.blog.google/products/android-enterprise/'}"><span>Blog de Android Enterprise</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://www.blog.google/press/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'área de prensa', 'title': 'para la prensa', 'linkUrl': 'https://www.blog.google/press/'}"><span>Área de prensa</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/everyone/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'android es para todos', 'title': 'para la prensa', 'linkUrl': '/intl/es_es/everyone/'}"><span>Android es para todos</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://www.blog.google/press/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'contactar con el equipo de prensa', 'title': 'para la prensa', 'linkUrl': 'https://www.blog.google/press/'}"><span>Contactar con el equipo de prensa</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://play.google.com/intl/es_es/about/howplayworks/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'cómo funciona google play', 'title': 'para la prensa', 'linkUrl': 'https://play.google.com/intl/es_es/about/howplayworks/'}"><span>Cómo funciona Google Play</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
      </ul>
    </li>
            <li class="footer-default__item">
      <h3 class="footer-default__title js-nav-item"
        aria-expanded="false"
        aria-controls="el-ecosistema-section"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'el ecosistema', 'title': 'el ecosistema accordion'}"
        >
        <button
        class="footer-default__button"
        id="el-ecosistema-btn">
          El ecosistema
                <svg class="icon--svg footer-default__cross" aria-hidden="true">    <use xlink:href="#ico-cross"></use>
  </svg>

        </button>
      </h3>
      <ul id="el-ecosistema-section"
          class="footer-default__nav-subitem js-subitem-container"
          aria-labelledby="el-ecosistema-btn">
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/auto/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'android\xa0auto', 'title': 'el ecosistema', 'linkUrl': '/intl/es_es/auto/'}"><span>Android Auto</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/tv/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'android\xa0tv', 'title': 'el ecosistema', 'linkUrl': '/intl/es_es/tv/'}"><span>Android TV</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://chromeenterprise.google/intl/es_es/os/?utm_source=android_enterprise_web&amp;utm_medium=referral&amp;utm_campaign=ce_footer"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'chromeos', 'title': 'el ecosistema', 'linkUrl': 'https://chromeenterprise.google/intl/es_es/os/?utm_source=android_enterprise_web&utm_medium=referral&utm_campaign=ce_footer'}"><span>ChromeOS</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://wearos.google.com/intl/es_es/"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'wear\xa0os by google', 'title': 'el ecosistema', 'linkUrl': 'https://wearos.google.com/intl/es_es/'}"><span>Wear OS by Google</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
      </ul>
    </li>
            <li class="footer-default__item">
      <h3 class="footer-default__title js-nav-item"
        aria-expanded="false"
        aria-controls="asistencia-section"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'asistencia', 'title': 'asistencia accordion'}"
        >
        <button
        class="footer-default__button"
        id="asistencia-btn">
          Asistencia
                <svg class="icon--svg footer-default__cross" aria-hidden="true">    <use xlink:href="#ico-cross"></use>
  </svg>

        </button>
      </h3>
      <ul id="asistencia-section"
          class="footer-default__nav-subitem js-subitem-container"
          aria-labelledby="asistencia-btn">
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/switch-to-android/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'cambiar desde ios', 'title': 'asistencia', 'linkUrl': '/intl/es_es/switch-to-android/'}"><span>Cambiar desde iOS</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://support.google.com/android/?hl=es#topic=7313011"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'centro de ayuda de android', 'title': 'asistencia', 'linkUrl': 'https://support.google.com/android/?hl=es#topic=7313011'}"><span>Centro de Ayuda de Android</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="/intl/es_es/filetransfer/"
    class="cta cta--is-4"data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'android file transfer', 'title': 'asistencia', 'linkUrl': '/intl/es_es/filetransfer/'}"><span>Android File Transfer</span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://www.google.com/android/find?u=0"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'encontrar mi dispositivo', 'title': 'asistencia', 'linkUrl': 'https://www.google.com/android/find?u=0'}"><span>Encontrar mi dispositivo</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
          <li class="footer-default__nav-list">



    <a
        href="https://userresearch.google.com/?l=9&amp;reserved=0&amp;pType=0&amp;productTag=andr&amp;campaignType=ghc&amp;campaignDate=jul16&amp;labelTag=0&amp;referral_code=androiddotcom"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'participar en estudios de experiencia de usuario', 'title': 'asistencia', 'linkUrl': 'https://userresearch.google.com/?l=9&reserved=0&pType=0&productTag=andr&campaignType=ghc&campaignDate=jul16&labelTag=0&referral_code=androiddotcom'}"><span>Participar en estudios de experiencia de usuario</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

</li>
      </ul>
    </li>
</ul>
  </div>
  <div class="footer-default__colophon">
    <div class="footer-default__links">
      <div class="footer-default__policy">


    <a
        href="https://policies.google.com/?hl=es"
    class="cta cta--is-4"      target="_blank"
      rel="noopener"
data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'política de privacidad', 'title': 'política de privacidad', 'linkUrl': 'https://policies.google.com/?hl=es'}"><span>Política de Privacidad</span>





  <span class="cta__icon--external">  <svg class="icon--svg " aria-hidden="true">    <use xlink:href="#ico-cta-external"></use>
  </svg></span></a>

        <button aria-hidden="true" class="cta cta--is-4 glue-cookie-notification-bar-control">
          Cookies management controls
        </button>

        

  <form class="language-selector" autocomplete="off" data-android-component="language-selector">      <svg class="icon--svg language-selector__globe" aria-hidden="true">    <use xlink:href="#ico-globe"></use>
  </svg>
<label class="visually-hidden" for="language-selector-resources-footer">Idiomas</label>
    <select id="language-selector-resources-footer" class="language-selector__select js-language-selector"
      aria-label="Pick a language"
        data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'open', 'title': 'country dropdown'}"
>
        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'danmark', 'title': 'country dropdown'}"
          value="/intl/da_dk/enterprise/resources/"
          lang="da">Dansk</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'deutschland', 'title': 'country dropdown'}"
          value="/intl/de_de/enterprise/resources/"
          lang="de">Deutsch</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'australia', 'title': 'country dropdown'}"
          value="/intl/en_au/enterprise/resources/"
          lang="en">English (Australia)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'canada', 'title': 'country dropdown'}"
          value="/intl/en_ca/enterprise/resources/"
          lang="en">English (Canada)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'hong kong sar china', 'title': 'country dropdown'}"
          value="/intl/en_hk/enterprise/resources/"
          lang="en">English (Hong Kong)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'ireland', 'title': 'country dropdown'}"
          value="/intl/en_ie/enterprise/resources/"
          lang="en">English (Ireland)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'india', 'title': 'country dropdown'}"
          value="/intl/en_in/enterprise/resources/"
          lang="en">English (India)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'new zealand', 'title': 'country dropdown'}"
          value="/intl/en_nz/enterprise/resources/"
          lang="en">English (New Zealand)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': Markup(' (united kingdom)'), 'title': 'country dropdown'}"
          value="/intl/en_uk/enterprise/resources/"
          lang="en">English (United Kingdom)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'united states', 'title': 'country dropdown'}"
          value="/enterprise/resources/"
          lang="en">English</option>

        <option
          class="language-selector__option"
          selected             data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'españa', 'title': 'country dropdown'}"
          value="/intl/es_es/enterprise/resources/"
          lang="es">Español</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'méxico', 'title': 'country dropdown'}"
          value="/intl/es-419_mx/enterprise/resources/"
          lang="es">Español (México)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'canada', 'title': 'country dropdown'}"
          value="/intl/fr_ca/enterprise/resources/"
          lang="fr">Français (Canada)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'france', 'title': 'country dropdown'}"
          value="/intl/fr_fr/enterprise/resources/"
          lang="fr">Français</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'indonesia', 'title': 'country dropdown'}"
          value="/intl/id_id/enterprise/resources/"
          lang="id">Indonesia</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'italia', 'title': 'country dropdown'}"
          value="/intl/it_it/enterprise/resources/"
          lang="it">Italiano</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'nederland', 'title': 'country dropdown'}"
          value="/intl/nl_nl/enterprise/resources/"
          lang="nl">Nederlands</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'norge', 'title': 'country dropdown'}"
          value="/intl/no_no/enterprise/resources/"
          lang="nb">Norsk bokmål</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'polska', 'title': 'country dropdown'}"
          value="/intl/pl_pl/enterprise/resources/"
          lang="pl">Polski</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'brasil', 'title': 'country dropdown'}"
          value="/intl/pt_br/enterprise/resources/"
          lang="pt">Português (Brasil)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'sverige', 'title': 'country dropdown'}"
          value="/intl/sv_se/enterprise/resources/"
          lang="sv">Svenska</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'türkiye', 'title': 'country dropdown'}"
          value="/intl/tr_tr/enterprise/resources/"
          lang="tr">Türkçe</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'россия', 'title': 'country dropdown'}"
          value="/intl/ru_ru/enterprise/resources/"
          lang="ru">Русский</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': 'भारत', 'title': 'country dropdown'}"
          value="/intl/hi_in/enterprise/resources/"
          lang="hi">हिन्दी</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': '中国', 'title': 'country dropdown'}"
          value="/intl/zh-CN_cn/enterprise/resources/"
          lang="zh">中文 (简体)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': '中國香港特別行政區', 'title': 'country dropdown'}"
          value="/intl/zh-HK_hk/enterprise/resources/"
          lang="zh">中文 (香港)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': '台灣', 'title': 'country dropdown'}"
          value="/intl/zh-TW_tw/enterprise/resources/"
          lang="zh">中文 (台灣)</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': '日本', 'title': 'country dropdown'}"
          value="/intl/ja_jp/enterprise/resources/"
          lang="ja">日本語</option>

        <option
          class="language-selector__option"
                      data-g-config="{'eventCategory': 'footer', 'moduleName': 'footer', 'eventLabel': '대한민국', 'title': 'country dropdown'}"
          value="/intl/ko_kr/enterprise/resources/"
          lang="ko">한국어</option>

    </select>
          <svg class="icon--svg language-selector__icon" aria-hidden="true">    <use xlink:href="#ico-arrow-round"></use>
  </svg>

  </form><div class="footer-default__footnote">
<p>Puede que algunos dispositivos y funciones no estén disponibles en todos los países. Sujetos a disponibilidad.</p><p>Algunas funciones y su disponibilidad varían en función del fabricante del dispositivo.</p></div></div>
          <ul class="social-network">
      <li class="social-network__item">
        <a href="https://twitter.com/android/"
          target="_blank"
          rel="noopener"
          class="social-network__link"
                  data-g-event="site-footer-social"
    data-g-action="clicked"
    data-g-label="twitter"

              data-g-config="{'eventCategory': 'social icons', 'moduleName': 'footer', 'eventLabel': 'social-twitter', 'title': 'cta', 'linkUrl': 'https://twitter.com/android/'}"
>
            <span class="visually-hidden"> Busca Android en Twitter </span>
                  <svg class="icon--svg social-network__icon" aria-hidden="true">    <use xlink:href="#social-twitter"></use>
  </svg>

        </a>
      </li>
      <li class="social-network__item">
        <a href="https://www.instagram.com/android/"
          target="_blank"
          rel="noopener"
          class="social-network__link"
                  data-g-event="site-footer-social"
    data-g-action="clicked"
    data-g-label="instagram"

              data-g-config="{'eventCategory': 'social icons', 'moduleName': 'footer', 'eventLabel': 'social-instagram', 'title': 'cta', 'linkUrl': 'https://www.instagram.com/android/'}"
>
            <span class="visually-hidden"> Busca Android en Instagram </span>
                  <svg class="icon--svg social-network__icon" aria-hidden="true">    <use xlink:href="#social-instagram"></use>
  </svg>

        </a>
      </li>
      <li class="social-network__item">
        <a href="https://www.youtube.com/user/GoogleMobile/"
          target="_blank"
          rel="noopener"
          class="social-network__link"
                  data-g-event="site-footer-social"
    data-g-action="clicked"
    data-g-label="youtube"

              data-g-config="{'eventCategory': 'social icons', 'moduleName': 'footer', 'eventLabel': 'social-youtube', 'title': 'cta', 'linkUrl': 'https://www.youtube.com/user/GoogleMobile/'}"
>
            <span class="visually-hidden"> Busca Android en YouTube </span>
                  <svg class="icon--svg social-network__icon" aria-hidden="true">    <use xlink:href="#social-youtube"></use>
  </svg>

        </a>
      </li>
      <li class="social-network__item">
        <a href="https://www.facebook.com/AndroidOfficial/"
          target="_blank"
          rel="noopener"
          class="social-network__link"
                  data-g-event="site-footer-social"
    data-g-action="clicked"
    data-g-label="facebook"

              data-g-config="{'eventCategory': 'social icons', 'moduleName': 'footer', 'eventLabel': 'social-facebook', 'title': 'cta', 'linkUrl': 'https://www.facebook.com/AndroidOfficial/'}"
>
            <span class="visually-hidden"> Busca Android en Facebook </span>
                  <svg class="icon--svg social-network__icon" aria-hidden="true">    <use xlink:href="#social-facebook"></use>
  </svg>

        </a>
      </li>
      <li class="social-network__item">
        <a href="https://www.linkedin.com/showcase/android_by_google/"
          target="_blank"
          rel="noopener"
          class="social-network__link"
                  data-g-event="site-footer-social"
    data-g-action="clicked"
    data-g-label="linkedin"

              data-g-config="{'eventCategory': 'social icons', 'moduleName': 'footer', 'eventLabel': 'social-linkedin', 'title': 'cta', 'linkUrl': 'https://www.linkedin.com/showcase/android_by_google/'}"
>
            <span class="visually-hidden"> Find Android on LinkedIn </span>
                  <svg class="icon--svg social-network__icon" aria-hidden="true">    <use xlink:href="#social-linkedin"></use>
  </svg>

        </a>
      </li>
  </ul>

    </div>
  </div>
</footer>


<svg class="svg-icons" xmlns="http://www.w3.org/2000/svg">
<symbol id="andy-logo" viewBox="0 0 642 362">
  <path d="M478.33 109.291l53.428-92.607c3.06-5.321 1.241-12.12-4.07-15.196-5.31-3.066-12.11-1.242-15.184 4.073l-54.095 93.78c-41.372-18.895-87.833-29.42-137.41-29.42-49.575 0-96.04 10.525-137.408 29.42L129.496 5.56c-3.073-5.315-9.876-7.139-15.187-4.073-5.308 3.076-7.14 9.875-4.067 15.196l53.429 92.607C71.927 159.23 9.178 252.183 0 362h642c-9.187-109.817-71.937-202.77-163.67-252.709M468.497 217C483.113 217 495 229.109 495 243.994 495 258.882 483.113 271 468.498 271 453.887 271 442 258.882 442 243.994 442 229.109 453.887 217 468.498 217zM173.5 217c14.611 0 26.5 12.109 26.5 26.994C200 258.882 188.111 271 173.5 271c-14.614 0-26.5-12.118-26.5-27.006C147 229.109 158.886 217 173.5 217z" fill="#3DDC84" fill-rule="evenodd"/>
</symbol><symbol id="android-logo" class="logo-android__logo-icon" viewBox="0 0 898 160">
  <path fill="none" d="M2130-164h540v486h-540z"/>
  <path d="M2224.2 210.9c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-8h13.2v59.9h-10.1c-1.7 0-3-1.4-3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2M2269.2 200.2h13.2v8.1c3.6-6 10.4-9.3 18.2-9.3 13.9 0 22.9 9.8 22.9 25v36.1h-10.1c-1.7 0-3-1.4-3-3v-30.9c0-9.5-4.8-15.2-12.5-15.2-8.7 0-15.5 6.8-15.5 19.6v29.5h-10.1c-1.7 0-3-1.4-3-3v-56.9zM2365.1 210.9c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9H2385c-1.7 0-3-1.4-3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2M2410.1 200.2h13.2v10.7c2.3-6.8 9-11.3 15.8-11.3 1.7 0 3.4.1 5.1.5v13.5c-2.3-.7-4.2-1.1-6.6-1.1-7.5 0-14.4 6.4-14.4 18.3V260h-10.1c-1.7 0-3-1.4-3-3v-56.8zM2479.7 249c10.5 0 18-8.3 18-18.9 0-10.7-7.4-18.9-18-18.9-10.7 0-18.1 8.3-18.1 18.9.1 10.7 7.5 18.9 18.1 18.9m0 12.3c-17.7 0-31.4-13.8-31.4-31.1 0-17.4 13.7-31.2 31.4-31.2s31.4 13.8 31.4 31.2c0 17.3-13.6 31.1-31.4 31.1M2521.8 200.2h13.2v59.9h-10.1c-1.7 0-3-1.4-3-3v-56.9zm6.6-13.1c-4.8 0-8.9-4-8.9-8.9 0-4.8 4.1-8.7 8.9-8.7 4.9 0 8.7 4 8.7 8.7 0 4.9-3.8 8.9-8.7 8.9M2577.1 210.9c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2c-.1-10.8-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9H2597c-1.7 0-3-1.4-3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2"/>
  <path d="M2501.5-30.8l34.5-59.7c2-3.4.8-7.8-2.6-9.8s-7.8-.8-9.8 2.6l-34.9 60.4c-26.7-12.2-56.7-19-88.6-19-32 0-61.9 6.8-88.6 19l-34.9-60.4c-2-3.4-6.4-4.6-9.8-2.6s-4.6 6.4-2.6 9.8l34.5 59.7C2239.3 1.4 2198.9 61.3 2193 132h414c-5.9-70.7-46.4-130.6-105.5-162.8zM2304.7 73c-9.5 0-17.2-7.7-17.2-17.2s7.7-17.2 17.2-17.2 17.2 7.7 17.2 17.2-7.7 17.2-17.2 17.2zm190.6 0c-9.5 0-17.2-7.7-17.2-17.2s7.7-17.2 17.2-17.2 17.2 7.7 17.2 17.2-7.7 17.2-17.2 17.2z"/>
  <path fill="none" d="M-72-75H974v309H-72z"/>
  <path d="M59.3 56.4c12.4 0 22.7 6.4 27.6 13.3V58.1h18.9v86.1H92.2c-3 0-5.4-2.4-5.4-5.4v-6.2c-4.8 7-15.1 13.4-27.5 13.4-23.6 0-41.5-20.2-41.5-44.8s17.9-44.8 41.5-44.8m3.4 17.2C47.4 73.6 37 85.7 37 101.2s10.3 27.6 25.7 27.6c15.3 0 25.7-12.1 25.7-27.6S78.1 73.6 62.7 73.6M127.3 58.1h19v11.7c5.2-8.6 15-13.4 26.2-13.4 20 0 32.9 14.1 32.9 36v51.8h-13.6c-3 0-5.4-2.4-5.4-5.4V95.5c0-13.6-6.9-21.9-17.9-21.9-12.6 0-22.2 9.8-22.2 28.2v42.4h-13.6c-3 0-5.4-2.4-5.4-5.4V58.1zM261.9 56.4c12.4 0 22.7 6.4 27.6 13.3V15.1h18.9v129.2h-13.6c-3 0-5.4-2.4-5.4-5.4v-6.2c-4.8 6.9-15.2 13.3-27.6 13.3-23.6 0-41.5-20.2-41.5-44.8.1-24.6 18-44.8 41.6-44.8m3.4 17.2c-15.3 0-25.7 12.1-25.7 27.6s10.3 27.6 25.7 27.6c15.3 0 25.7-12.1 25.7-27.6s-10.4-27.6-25.7-27.6M329.9 58.1h18.9v15.3c3.3-9.8 12.9-16.2 22.7-16.2 2.4 0 4.8.2 7.4.7v19.5c-3.3-1-6-1.6-9.5-1.6-10.9 0-20.7 9.1-20.7 26.4v42h-13.6c-3 0-5.4-2.4-5.4-5.4V58.1zM430.1 146c-25.5 0-45.1-19.8-45.1-44.8s19.6-44.8 45.1-44.8 45.1 19.8 45.1 44.8-19.6 44.8-45.1 44.8m0-17.6c15.2 0 25.8-11.9 25.8-27.2S445.2 74 430.1 74c-15.3 0-26 11.9-26 27.2s10.7 27.2 26 27.2M500 39.3c-6.9 0-12.7-5.7-12.7-12.7 0-6.9 5.9-12.6 12.7-12.6 7.1 0 12.6 5.7 12.6 12.6 0 7.1-5.5 12.7-12.6 12.7m-9.4 18.8h18.9v86.1H496c-3 0-5.4-2.4-5.4-5.4V58.1zM566.6 56.4c12.4 0 22.7 6.4 27.6 13.3V15.1h18.9v129.2h-13.6c-3 0-5.4-2.4-5.4-5.4v-6.2c-4.8 6.9-15.2 13.3-27.6 13.3-23.6 0-41.5-20.2-41.5-44.8.1-24.6 18-44.8 41.6-44.8m3.5 17.2c-15.3 0-25.7 12.1-25.7 27.6s10.3 27.6 25.7 27.6c15.3 0 25.7-12.1 25.7-27.6s-10.4-27.6-25.7-27.6"/>
  <path class="logo-android__andy-icon" d="m822.2 111.7c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6m-105.7 0c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6m109.1-57.6l19.2-33.1c1.1-1.9 0.4-4.3-1.5-5.4s-4.3-0.4-5.4 1.5l-19.4 33.5c-14.8-6.8-31.4-10.6-49.1-10.6s-34.4 3.8-49.2 10.5l-19.4-33.5c-1.1-1.9-3.5-2.6-5.4-1.5s-2.6 3.5-1.5 5.4l19.1 33.1c-32.8 17.9-55.3 51.1-58.6 90.4h229.7c-3.2-39.2-25.6-72.4-58.5-90.3"/>
</symbol><symbol viewBox="0 0 18 17" id="arrow-right-icon">
  <path d="M.738 9.502V8.026l13.924-.007-6.326-6.326 1.06-1.06 8.132 8.131-8.132 8.132-1.06-1.06 6.325-6.327L.739 9.502Z"/>
</symbol><symbol id="ico-cta-external" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path class="ast0" d="M30.9 18.5l-1.4-1.4 9.6-9.6h-8.6v-2h12v12h-2V8.9l-9.6 9.6zm-24 24l-1.4-1.4 9.6-9.6H6.5v-2h12v12h-2v-8.6l-9.6 9.6z" fill="currentColor"/></symbol> <symbol id="ico-cta-download" fill="none" viewBox="0 0 16 16" id=".8801007556978109" xmlns="http://www.w3.org/2000/svg"><path d="M2 16c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 0 14v-3h2v3h12v-3h2v3a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 14 16H2zm6-4L3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7l-5 5z" fill="currentColor"/></symbol><symbol id="ico-arrow-external" viewBox="0 0 13 13">
  <path d="M.8 7.4h9.3L6 11.6c-.3.3-.3.9 0 1.2.3.3.9.3 1.2 0l5.5-5.6c.3-.3.3-.9 0-1.2L7.3.3C7 0 6.4 0 6.1.3s-.3.9 0 1.2l4.1 4.2H.8c-.4-.1-.8.3-.8.8s.4.9.8.9z" fill="currentColor"/>
</symbol><symbol id="ico-arrow-round" viewBox="0 0 11 7">
 <path d="M9.576 1.333L5.333 5.576 1.091 1.333" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</symbol><symbol id="ico-arrow-large" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor"/>
  </g>
</symbol><symbol id="ico-close" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h24v24H0z"/>
    <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" fill="currentColor"/>
  </g>
</symbol><symbol id="ico-cross" viewBox="0 0 63 63">
  <path d="M63 26.2H36.8V0H26.2v26.2H0v10.6h26.2V63h10.6V36.8H63z"/>
</symbol><symbol viewBox="0 0 29 29" id="ico-exclamation">
  <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd">
    <path fill="currentColor" d="M12 15h3V6h-3zm0 6h3v-3h-3z"/>
    <circle stroke="currentColor" stroke-width="2" cx="13.5" cy="13.5" r="13.5"/>
  </g>
</symbol><symbol id="ico-globe" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h24v24H0z"/>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z" fill="currentColor"/>
  </g>
</symbol><symbol id="ico-hamburger" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h24v24H0z"/>
    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" fill="currentColor"/>
  </g>
</symbol><symbol id="ico-search" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h24v24H0z"/>
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
  </g>
</symbol><symbol id="ico-skip" viewBox="0 0 24 24">
  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</symbol><symbol id="ico-stop" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 6h12v12H6z"/>
</symbol><symbol id="social-blogger" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="15%" fill="currentColor"/>
  <path fill="#f3f3f3" d="M95 184c0-51 41-93 93-93h86c64 0 103 61 85 126 0 0 61-3 66 58v53c0 46-34 93-93 93H183c-49 0-88-39-88-88z"/>
  <path stroke="currentColor" stroke-width="55" d="M199 188h68m-74 129h133"/>
</symbol><symbol id="social-email" fill="none" viewBox="0 0 20 16" fill-rule="evenodd"><path d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H2V4l8 5 8-5v10zm-8-7L2 2h16l-8 5z" fill="currentColor"/></symbol><symbol id="social-facebook" viewBox="0 0 20 20">
  <g fill="none" fill-rule="evenodd">
    <path d="M-2-2h24v24H-2z"/>
    <path d="M20 10.1c0-5.5-4.5-10-10-10S0 4.5 0 10.1c0 5 3.7 9.1 8.4 9.9v-7H5.9v-2.9h2.5V7.9C8.4 5.4 9.9 4 12.2 4c1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.8h-2.3v7c4.7-.8 8.4-4.9 8.4-9.9z" fill="currentColor"/>
  </g>
</symbol><symbol id="social-instagram" viewBox="0 0 48 48">
  <path d="M23.9,7.1c5.5,0,6.1,0,8.3,0.1c2,0.1,3.1,0.4,3.8,0.7c0.9,0.3,1.7,0.9,2.4,1.5c0.7,0.7,1.2,1.5,1.5,2.4 c0.3,0.7,0.6,1.8,0.7,3.8c0.1,2.2,0.1,2.8,0.1,8.3s0,6.1-0.1,8.3c-0.1,2-0.4,3.1-0.7,3.8c-0.7,1.8-2.1,3.2-3.9,3.9 c-0.7,0.3-1.8,0.6-3.8,0.7c-2.2,0.1-2.8,0.1-8.3,0.1s-6.1,0-8.3-0.1c-2-0.1-3.1-0.4-3.8-0.7c-0.9-0.3-1.7-0.9-2.4-1.5 c-0.7-0.7-1.2-1.5-1.5-2.4c-0.3-0.7-0.6-1.8-0.7-3.8c-0.1-2.2-0.1-2.8-0.1-8.3s0-6.1,0.1-8.3c0.1-2,0.4-3.1,0.7-3.8 c0.3-0.9,0.9-1.7,1.5-2.4c0.7-0.7,1.5-1.2,2.4-1.5c0.7-0.3,1.8-0.6,3.8-0.7C17.8,7.1,18.5,7.1,23.9,7.1 M23.9,3.4 c-5.6,0-6.3,0-8.5,0.1c-2.2,0.1-3.7,0.4-5,1C9.1,5,7.9,5.8,6.9,6.8c-1,1-1.9,2.3-2.4,3.6c-0.5,1.3-0.9,2.8-1,5 c-0.1,2.2-0.1,2.9-0.1,8.5s0,6.3,0.1,8.5c0.1,2.2,0.4,3.7,1,5C5,38.7,5.8,40,6.9,41c1,1,2.3,1.9,3.6,2.4c1.3,0.5,2.8,0.9,5,1 c2.2,0.1,2.9,0.1,8.5,0.1s6.3,0,8.5-0.1c2.2-0.1,3.7-0.4,5-1c2.8-1.1,4.9-3.2,6-6c0.5-1.3,0.9-2.8,1-5c0.1-2.2,0.1-2.9,0.1-8.5 s0-6.3-0.1-8.5c-0.1-2.2-0.4-3.7-1-5c-0.5-1.4-1.3-2.6-2.4-3.6c-1-1-2.3-1.9-3.6-2.4c-1.3-0.5-2.8-0.9-5-1 C30.2,3.4,29.5,3.4,23.9,3.4L23.9,3.4L23.9,3.4z"></path>
  <path d="M23.9,13.4c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5l0,0C34.5,18.1,29.8,13.4,23.9,13.4z M23.9,30.8c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8c3.8,0,6.8,3.1,6.8,6.8C30.8,27.7,27.7,30.8,23.9,30.8z"></path>
  <circle cx="34.9" cy="13" r="2.5"></circle>
</symbol><symbol id="social-link" fill="none" viewBox="0 0 22 10" fill-rule="evenodd"><path d="M6.208 4h9.584v2H6.208V4z" fill="currentColor"/><path d="M16.75 0h-3.833v2h3.833c1.588 0 2.875 1.343 2.875 3s-1.287 3-2.875 3h-3.833v2h3.833c2.646 0 4.792-2.239 4.792-5s-2.146-5-4.792-5zM5.25 10h3.833V8H5.25C3.662 8 2.375 6.657 2.375 5S3.662 2 5.25 2h3.833V0H5.25C2.604 0 .458 2.239.458 5s2.146 5 4.792 5z" fill="currentColor"/></symbol><symbol id="social-twitter" viewBox="0 0 48 48">
  <path d="M40.9331436,11.1940288 C42.810084,10.0689342 44.2513785,8.28745345 44.9301304,6.16481389 C43.1737706,7.20644208 41.2282743,7.96298797 39.1576594,8.37075777 C37.4993523,6.6040254 35.1368481,5.5 32.5223241,5.5 C27.501861,5.5 23.4316182,9.57008073 23.4316182,14.5902197 C23.4316182,15.3026824 23.5121673,15.9965069 23.6671068,16.661807 C16.1120205,16.2827237 9.4138018,12.6636857 4.93027879,7.16397957 C4.1478016,8.50657299 3.69951412,10.0681239 3.69951412,11.7340483 C3.69951412,14.8877815 5.30449997,17.6702107 7.74366355,19.3003175 C6.25342374,19.253155 4.85183659,18.8442507 3.62609611,18.1633918 C3.62544783,18.2013163 3.62544783,18.2394029 3.62544783,18.2776516 C3.62544783,22.6820841 6.75892216,26.3562262 10.9174935,27.1912143 C10.1546268,27.3989889 9.35156666,27.5100073 8.52241311,27.5100073 C7.93668971,27.5100073 7.36717338,27.4531205 6.81224341,27.3469642 C7.96894178,30.958547 11.3260736,33.586685 15.3039361,33.660103 C12.1928276,36.0981321 8.27314842,37.5514198 4.01425536,37.5514198 C3.28056144,37.5514198 2.5569159,37.5084711 1.8457498,37.4245184 C5.86866797,40.0037111 10.6469975,41.5085373 15.780586,41.5085373 C32.5010928,41.5085373 41.6444717,27.6568433 41.6444717,15.6443274 C41.6444717,15.2501715 41.6357199,14.8581225 41.6182163,14.4683426 C43.3941867,13.1866877 44.9354788,11.5855916 46.1542502,9.76262068 C44.5239813,10.4856179 42.7719974,10.974261 40.9331436,11.1940288 Z"></path>
</symbol><symbol id="social-youtube" viewBox="0 0 48 48">
  <path d="M47.48 13.21s-.46-3.3-1.9-4.74c-1.82-1.92-3.86-1.92-4.8-2.04C34.08 5.94 24 6 24 6s-10.04-.06-16.74.42c-.92.12-2.96.12-4.78 2.04C1.04 9.9.56 13.2.56 13.2S.08 17.09 0 20.96v4.05c.08 3.88.56 7.75.56 7.75s.48 3.3 1.92 4.76c1.82 1.9 4.2 1.84 5.28 2.04 3.76.36 15.82.44 16.24.44 0 0 10.1.02 16.8-.46.92-.12 2.96-.12 4.78-2.04 1.44-1.44 1.92-4.74 1.92-4.74s.48-3.88.5-7.75v-4.05c-.04-3.87-.52-7.75-.52-7.75zM19.14 30V15.98L32 23.26 19.14 30z"></path>
  <path fill="none" d="M0 0h47.99v48H0z"></path>
</symbol><symbol id="social-linkedin" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
   <path d="M0 0h24v24H0z"/>
   <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zM6.5 8.31c-1 0-1.81-.81-1.81-1.81S5.5 4.69 6.5 4.69s1.81.81 1.81 1.81S7.5 8.31 6.5 8.31zM19 19h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V19h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5V19z" fill="currentColor"/>
  </g>
</symbol><symbol fill="none" viewBox="0 0 28 28" id="ico-play" xmlns="http://www.w3.org/2000/svg">
<path d="M10.666 20 20 14l-9.334-6v12ZM14 27.333c-1.845 0-3.578-.35-5.2-1.05a13.465 13.465 0 0 1-4.234-2.85c-1.2-1.2-2.15-2.61-2.85-4.233-.7-1.622-1.05-3.355-1.05-5.2 0-1.844.35-3.578 1.05-5.2.7-1.622 1.65-3.033 2.85-4.233 1.2-1.2 2.612-2.15 4.234-2.85 1.622-.7 3.355-1.05 5.2-1.05 1.844 0 3.578.35 5.2 1.05 1.622.7 3.033 1.65 4.233 2.85 1.2 1.2 2.15 2.61 2.85 4.233.7 1.622 1.05 3.356 1.05 5.2 0 1.845-.35 3.578-1.05 5.2a13.465 13.465 0 0 1-2.85 4.233c-1.2 1.2-2.61 2.15-4.233 2.85-1.622.7-3.356 1.05-5.2 1.05Zm0-2.666c2.978 0 5.5-1.034 7.567-3.1 2.066-2.067 3.1-4.59 3.1-7.567 0-2.978-1.034-5.5-3.1-7.567-2.067-2.066-4.59-3.1-7.567-3.1-2.978 0-5.5 1.034-7.567 3.1-2.066 2.067-3.1 4.59-3.1 7.567 0 2.978 1.034 5.5 3.1 7.567 2.067 2.066 4.59 3.1 7.567 3.1Z" fill="#073042"/>
</symbol><symbol id="ico-external" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.4 20 4 18.6 15.6 7H9V5h10v10h-2V8.4Z"/></symbol><symbol fill="none" width="22" height="22" viewBox="0 0 18 18" id="ico-arrrow-large-external" xmlns="http://www.w3.org/2000/svg">
<path d="M2.533 18 .667 16.133l12.8-12.8H2V.667h16v16h-2.667V5.2L2.533 18Z" fill="#073042"/>
</symbol><symbol fill="none" viewBox="0 0 22 22" id="ico-arrow-large-io" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21.667 9.1 19.8l7.467-7.467H.333V9.667h16.234L9.1 2.2 11 .333 21.667 11 11 21.667Z" fill="#073042"/>
</symbol></svg>


    <script defer src="/static/js/general/main.min.js"></script>
        <div
      data-android-component="modal"
      data-android-component-config="{'blockCssClass': 'modal', 'type': 'video' }"
      data-android-component-force-import
      class="modal"
      aria-modal="true"
      role="dialog">
    <div class="modal__inner">


          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'db1f4ed85fc13bc53be36cb3eeadb66a', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;db1f4ed85fc13bc53be36cb3eeadb66a&#39;, &#39;youtube&#39;: &#39;slOLAH7BlVI&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="slOLAH7BlVI">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'd8b4771adf17687e819125906c86c39f', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;d8b4771adf17687e819125906c86c39f&#39;, &#39;youtube&#39;: &#39;tRdxqQD3Opk&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="tRdxqQD3Opk">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '9c60462476756eabf44921a82dcd5154', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;9c60462476756eabf44921a82dcd5154&#39;, &#39;youtube&#39;: &#39;gHDP4CTfFP8&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="gHDP4CTfFP8">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '1335d91b938f2aba5240cfc03315f1b8', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;1335d91b938f2aba5240cfc03315f1b8&#39;, &#39;youtube&#39;: &#39;dYx6_Xbv8A4&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="dYx6_Xbv8A4">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '2ae0fe6c6735f392461fcdd2504dd3b9', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;2ae0fe6c6735f392461fcdd2504dd3b9&#39;, &#39;youtube&#39;: &#39;6Ct1RBFjwI0&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="6Ct1RBFjwI0">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '3d68d50a81d9ade07f9b6e90e5f981ae', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;3d68d50a81d9ade07f9b6e90e5f981ae&#39;, &#39;youtube&#39;: &#39;CMzpljLcwFk&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="CMzpljLcwFk">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'c67ead62220045a4cae90e808eae7432', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;c67ead62220045a4cae90e808eae7432&#39;, &#39;youtube&#39;: &#39;KdkBcq0o6Ic&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="KdkBcq0o6Ic">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '89508959ef0c524cbe2f77dc358937ff', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;89508959ef0c524cbe2f77dc358937ff&#39;, &#39;youtube&#39;: &#39;lqwoXmaxs3M&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="lqwoXmaxs3M">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '20af43c54450249e4294978646b478c1', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;20af43c54450249e4294978646b478c1&#39;, &#39;youtube&#39;: &#39;OIvnz7fb0p0&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="OIvnz7fb0p0">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'a36d56d4fc608b9426ad48b7ab2fe735', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;a36d56d4fc608b9426ad48b7ab2fe735&#39;, &#39;youtube&#39;: &#39;oCw3zhHGU5I&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="oCw3zhHGU5I">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'c963079f51a56f02e3d1b156e2bb2905', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;c963079f51a56f02e3d1b156e2bb2905&#39;, &#39;youtube&#39;: &#39;Y5sDMOb6Nzc&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="Y5sDMOb6Nzc">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '00be6494c37bb8928e0cef16ff148d1d', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;00be6494c37bb8928e0cef16ff148d1d&#39;, &#39;youtube&#39;: &#39;EDsQHDSw2Go&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="EDsQHDSw2Go">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'ad7a9369706305199041049cd5846bb2', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;ad7a9369706305199041049cd5846bb2&#39;, &#39;youtube&#39;: &#39;oHMLI_CALLk&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="oHMLI_CALLk">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '33a4493179af43ba4e32680d6e432478', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;33a4493179af43ba4e32680d6e432478&#39;, &#39;youtube&#39;: &#39;SIf7WnOBbuc&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="SIf7WnOBbuc">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'dc602871775067b5513418b464a4b30d', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;dc602871775067b5513418b464a4b30d&#39;, &#39;youtube&#39;: &#39;7BURjgClVCw&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="7BURjgClVCw">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '9d6ddd1b4310fc43ad0f2d84d1fb51f0', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;9d6ddd1b4310fc43ad0f2d84d1fb51f0&#39;, &#39;youtube&#39;: &#39;GWmz4QiZeQs&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="GWmz4QiZeQs">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '05c346d778ab9c09c30aac0f13f9bddf', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;05c346d778ab9c09c30aac0f13f9bddf&#39;, &#39;youtube&#39;: &#39;u05cMfcNSWg&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="u05cMfcNSWg">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '882476e16541bf8d534f9e6309cb2e45', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;882476e16541bf8d534f9e6309cb2e45&#39;, &#39;youtube&#39;: &#39;JAg5QzF3Kjs&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="JAg5QzF3Kjs">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'f767407cce2c93d15404e6e6aadc99f6', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;f767407cce2c93d15404e6e6aadc99f6&#39;, &#39;youtube&#39;: &#39;2kuGv9GNbTQ&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="2kuGv9GNbTQ">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '99b338c0b846b0c9fedbfcc8fc6c849e', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;99b338c0b846b0c9fedbfcc8fc6c849e&#39;, &#39;youtube&#39;: &#39;1DXpuIbHmRk&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="1DXpuIbHmRk">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'f48a27586c9ca802d1ffe6ba2cd1afa5', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;f48a27586c9ca802d1ffe6ba2cd1afa5&#39;, &#39;youtube&#39;: &#39;VfpJ-m0u4h4&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="VfpJ-m0u4h4">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '0f49ad7f5927511f1798e54ec7916faf', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;0f49ad7f5927511f1798e54ec7916faf&#39;, &#39;youtube&#39;: &#39;nV3Kln7sgG4&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="nV3Kln7sgG4">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '21d1191d7503d0f814dce3762b72adaf', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;21d1191d7503d0f814dce3762b72adaf&#39;, &#39;youtube&#39;: &#39;UAhH21YfLP4&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="UAhH21YfLP4">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '541ebecfc2e4d964b73072312b0b77f3', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;541ebecfc2e4d964b73072312b0b77f3&#39;, &#39;youtube&#39;: &#39;Vd2iUYm8PuY&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="Vd2iUYm8PuY">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': 'e187ab4837f492f0fcf24844e4d4acdc', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;e187ab4837f492f0fcf24844e4d4acdc&#39;, &#39;youtube&#39;: &#39;Cb3yx070mRc&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="Cb3yx070mRc">
  </div>


          </div>
          <div class="modal__content"
              data-android-component="modal-content"
              data-android-component-config="{'contentId': '49741f4d870e5a20e520f780723e8c53', 'blockCssClass': 'modal__content'}"
              aria-hidden="true"
              data-android-component-force-import>
                
    <div
    data-android-component="you-tube-video"
    data-android-component-force-import
    data-android-component-config="{&#39;contentId&#39;: &#39;49741f4d870e5a20e520f780723e8c53&#39;, &#39;youtube&#39;: &#39;LNEYdxi9ygM&#39;, &#39;startSeconds&#39;: 0, &#39;pageName&#39;: &#39;resources&#39;, &#39;trackingIntervals&#39;: 25}"
    class="you-tube-video "
    youtube-id="LNEYdxi9ygM">
  </div>


          </div>    </div>
    <button class="modal__close-cta js-cta-close" type="button"><span class="visually-hidden">Close</span></button>
    <div class="modal__backdrop"></div>
  </div>

  </body>
</html>