!function(){"use strict";var r,t,s=function(t,i,n){for(var s in"string"==typeof t&&(t=document.getElementById("element")),i)n||(o=i[h=s],e=t,-1<r.indexOf(h)&&(e.style["webkit"+(h=h).charAt(0).toUpperCase(e","transformOrigin","trspective","animation"]),t=navigator.userAgent||navigator.vendor||window.opera,n=!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))||n;function d(t){return"string"==typeof t}function h(t,i){return void 0===i&&(i=""),""===(t="string"==typeof(t=void 0===t?"":t)?t:String(t))?i:t+(/^[0-9]+$/.test(t)?"px":"")}function o(t){var i=(t=void 0===t?{}:t).container;void 0===i&&(i=null);var n=t.addToDOM;void 0===n&&(n=!1),void 0===(t=t.isFiF)&&(t=!1),this.iframe=document.createElement("iframe"),this.win=null,this.body=null,this.container=i,this.sizes={width:"0",height:"0"},this.isFiF=t,n&&this.container&&this.addToDOM()}o.prototype.getNode=function(){return this.iframe},o.prototype.setContainer=function(t){return this.container=t,this},o.prototype.setType=function(t){switch(t){case this.constructor.HIDDEN:this.t();break;case this.constructor.VISIBLE:this.i()}return this},o.prototype.addToDOM=function(t){return void 0===t&&(t=""),this.container.appendChild(this.iframe),this.writeSync(t),this},o.prototype.setSizes=function(t,i){var n=this.sizes;return n.width=h(t),n.height=h(i),this.iframe.style.width=n.width,this.iframe.style.height=n.height,this},o.prototype.appendScript=function(t){return this.body.appendChild(t),this},o.prototype.writeSync=function(t){void 0===t&&(t="");var i=this.isFiF?"\n    <script>\n        var inDapIF = true;\n    <\/script>":"",n=this.iframe.contentWindow.document;return n.open(),n.write('\n<!DOCTYPE html>\n<html>\n<head>\n    %s\n    <style>\n        html, body, #ao-ad-container {\n            width: 100%;\n            height: 100%;\n            padding: 0;\n            border: none;\n            margin: 0;\n        }\n    </style>\n</head>\n<body><div id="ao-ad-container">%b</div></body>\n</html>'.replace("%s",i).replace("%b",t)),n.close(),this.win=this.iframe.contentWindow,this.body=this.win.document.body,this},o.prototype.t=function(){s(this.iframe,{display:"block",width:"0",height:"0",border:"none",margin:"0 auto"})},o.prototype.i=function(){this.iframe.scrolling="no",this.iframe.setAttribute("marginwidth","0"),this.iframe.setAttribute("marginheight","0"),s(this.iframe,{display:"block",width:this.sizes.width,height:this.sizes.height,border:"none",margin:"0 auto"})},o.HIDDEN=1,o.VISIBLE=2;function e(t,i){return"number"==typeof(t=(i=void 0===i?!1:i)?parseFloat(t):t)&&!isNaN(t)}var i=window["AdOceanRTBAuctionAdServerBids"]||(window["AdOceanRTBAuctionAdServerBids"]={}),a="__$isCustomDeal",n=function(t){this.config=t,this.container=null,this.pbjs=null,this.auctionState=null,this.adArea=null};n.prototype.n=function(t){var i=this.s();this.h(t,i),this.auctionState.aoWin?this.o(i):this.e(t)},n.prototype.o=function(t){},n.prototype.e=function(t){this.r.apply(this,t.size.split("x")),this.pbjs.renderAd(this.adArea.win.document,t.adId),this.a()?((t=this.config.emissionHits.slice()).push([this.config.statsHitUrl+this.u(this.c())]),this.config.sendHitFunc(t)):(this.d(this.config.emissionHitUrl),this.d(this.config.statsHitUrl+this.u(this.c()))),this.l()},n.prototype.l=function(){"object"==typeof gao&&"function"==typeof gao.inscreenRegisterElement&&void 0!==gao.aoInscreenHit&&void 0!==gao.aoInscreenHit[this.config.unique]&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[this.config.unique],this.adArea.iframe]))},n.prototype.a=function(){return this.config.sendHitFunc&&this.config.emissionHits},n.prototype.r=function(t,i){this.f(this.container),this.adArea=new o({container:this.container,addToDOM:!0,isFiF:!1}),this.adArea.setType(o.VISIBLE),this.adArea.setSizes(t,i)},n.prototype.f=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},n.prototype.s=function(){var t=this.config.secondPhaseFnct;return 0<t.length&&"function"==typeof window[t]&&window[t](),i[this.config.emitterOfferID]||{ecpm:NaN,creative:function(){}}},n.prototype.d=function(t,i){t=t.replace("[TIMESTAMP]",Date.now()),i&&(t+="&extra="+encodeURIComponent(i.join("|"))),window.navigator.sendBeacon&&window.navigator.sendBeacon(t)||((new Image).src=t)},n.prototype.u=function(t){return"&extra="+encodeURIComponent(t.join("|"))},n.prototype.h=function(t,i){var n,s=this.auctionState={},h=i.ecpm,o=!1;t?(n=t.currency.toUpperCase(),o=!!t[a],"number"==typeof this.config.currencyExchangeRates[n]?(t.cpm=this.config.currencyExchangeRates[n]*t.cpm,s.sspCpm=t.cpm):o?s.sspCpm=0:s.noBid=!0):s.noBid=!0,e(h,!0)&&(s.aoCpm=parseFloat(h)),!o&&(s.noBid||""===h||t.cpm<=1e-5||parseFloat(h)>=t.cpm)?(s.aoWin=!0,i.isDefault?s.aoState=1:""===h?s.aoState=2:e(h,!0)?s.aoState=0:s.aoState=4):s.aoWin=!1},n.prototype.c=function(){var t=[],i=this.auctionState;return t.push("rtb_state=0"),t.push("rtb_win=1"),t.push("rtb_ssp_state="+(i.noBid?"3":"0")),i.aoWin?(t.push("rtb_ao_win=1"),t.push("rtb_ao_state="+i.aoState),e(i.aoCpm)&&t.push("rtb_ao_sp="+this.p(i.aoCpm))):(t.push("rtb_ssp_win=1"),t.push("rtb_ssp10_win=1"),t.push("rtb_ssp_sp="+this.p(i.sspCpm)),t.push("rtb_ssp10_sp="+this.p(i.sspCpm))),e(i.sspCpm)&&t.push("rtb_ssp10_p="+this.p(i.sspCpm)),e(i.aoCpm)&&t.push("rtb_ao_p="+this.p(i.aoCpm)),t},n.prototype.p=function(t){return t};function u(t){this.container=t,this.callback=null}u.prototype.render=function(t){this.callback=t,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this.w.bind(this)):this.w()},u.prototype.w=function(){ado.busy||"undefined"!=typeof gao&&gao.busy?ado.queue.unshift(this.b.bind(this)):this.b()},u.prototype.b=function(){var t=new AdoElement({id:this.container.id,orgId:this.container.id,clearId:this.container.id,_isBuffer:!0});window.AdoElems=window.AdoElems||[],window.AdoElems.push(t),t.getDOMElement(),t.initBuffor(),this.callback(t),t.rewriteBuffor(),t.dispatch()};function c(t){if(this.constructor===c)throw new Error("VisibilityMonitor is abstract. Use VisibilityMonitor.getInstance() instead.");this.v=t,this.m=this.v.document,this.g=null,this.y=.5,this.k=0,this._=null,this.O=null,this.x=null,this.j=null,this.M=null,this.N=null,this.S=null}c.getInstance=function(t){return new("IntersectionObserver"in(t=void 0===t?window:t)?l:f)(t)},c.prototype.setMeasuredElement=function(t,i,n){void 0===i&&(i=50),void 0===n&&(n=0),this.g=t,this.y=Math.min(Math.max(i,1),100)/100||.5,this.k=n},c.prototype.activate=function(){this.S||this.I()},c.prototype.deactivate=function(){this.S&&this.C()},c.prototype.isVisible=function(){return"loading"!==this.m.readyState&&!this.m.hidden&&this.N},c.prototype.onVisible=function(t){this._="function"==typeof t?t:null},c.prototype.onHidden=function(t){this.O="function"==typeof t?t:null},c.prototype.onViewportEnter=function(t){this.x="function"==typeof t?t:null},c.prototype.onViewportLeave=function(t){this.j="function"==typeof t?t:null},c.prototype.clearCallbacks=function(){this._=null,this.O=null,this.x=null,this.j=null},c.prototype.z=function(){this.isVisible()?!0!==this.M&&(this.M=!0,this._&&this._()):!1!==this.M&&(this.M=!1,this.O&&this.O())};var l=function(t){function i(){t.apply(this,arguments)}return t&&(i.__proto__=t),((i.prototype=Object.create(t&&t.prototype)).constructor=i).prototype.I=function(){this.S=this.z.bind(this),this.m.addEventListener("visibilitychange",this.S),this.m.addEventListener("DOMContentLoaded",this.S),this.A||(this.A=new IntersectionObserver(this.D.bind(this),{threshold:[this.y],rootMargin:this.k+"px 0px"})),this.A.observe(this.g)},i.prototype.C=function(){this.M=null,this.N=null,this.m.removeEventListener("visibilitychange",this.S),this.m.removeEventListener("DOMContentLoaded",this.S),this.S=null,this.A.unobserve(this.g)},i.prototype.D=function(t){t=t.pop().isIntersecting;t&&!1===this.N?this.x&&this.x():t||!0!==this.N||this.j&&this.j(),this.N=t,this.z()},i}(c),f=function(i){function t(t){i.call(this,t),this.T=null,this.J=this.B.bind(this)}return i&&(t.__proto__=i),((t.prototype=Object.create(i&&i.prototype)).constructor=t).prototype.I=function(){this.S=this.z.bind(this),this.m.addEventListener("visibilitychange",this.J),this.m.addEventListener("DOMContentLoaded",this.J),this.v.addEventListener("scroll",this.J),this.v.addEventListener("resize",this.J),this.B()},t.prototype.C=function(){this.M=null,this.N=null,this.m.removeEventListener("visibilitychange",this.J),this.m.removeEventListener("DOMContentLoaded",this.J),this.v.removeEventListener("scroll",this.J),this.v.removeEventListener("resize",this.J),this.S=null},t.prototype.B=function(){this.T||(this.T=window.requestAnimationFrame(this.S))},t.prototype.z=function(){this.T=null,this.P(),i.prototype.z.call(this)},t.prototype.P=function(){var t=this.g.getBoundingClientRect(),i=t.width+this.k,n=t.height+this.k,s=t.top-this.k/2,h=t.right+this.k/2,o=t.bottom+this.k/2,e=t.left-this.k/2,r=this.v.innerWidth,t=this.v.innerHeight,s=Math.min(Math.max(s,0),t),s=Math.max(Math.min(o,t),0)-s,e=Math.min(Math.max(e,0),r),r=Math.min(Math.max(h,0),r),n=i*n,n=(0<n?(r-e)*s/n:0)>=this.y;n&&!1===this.N?this.x&&this.x():n||!0!==this.N||this.j&&this.j(),this.N=n},t}(c),p=function(){function i(t){this.config=this.F(t||{}),this.target=null,this.U=0,this.L=function(){},this.R=c.getInstance(),this.q=null}return i.prototype.enable=function(){!this.target||this.config.limit&&this.U>=this.config.limit||(this.config.limit&&++this.U,this.config.event===i.TIMEOUT?this.V():this.config.event===i.VISIBLE_TIMEOUT?this.H():this.config.event===i.VIEWPORT_LEAVE&&this.$())},i.prototype.disable=function(){this.q&&(clearTimeout(this.q),this.q=null),this.R.deactivate()},i.prototype.setTarget=function(t){this.target=t,this.R.setMeasuredElement(this.target,50,50)},i.prototype.setAuctionCaller=function(t){this.L=t},i.prototype.shouldDisplayEmitterCreative=function(t){return null===t||(this.config.onEmitterWin===i.ALWAYS_REFRESH||this.config.onEmitterWin===i.ON_NO_BID_REFRESH_IF_NO_EMITTER&&!t)},i.prototype.V=function(){var t=this;this.q&&clearTimeout(this.q),this.q=setTimeout(function(){t.q=null,t.L()},this.config.timeout)},i.prototype.H=function(){var t=this;this.R.onVisible(function(){t.q||(t.q=setTimeout(function(){t.q=null,t.R.deactivate(),t.R.clearCallbacks(),t.L()},t.config.timeout))}),this.R.onHidden(function(){t.q&&(clearTimeout(t.q),t.q=null)}),this.R.activate()},i.prototype.$=function(){var t=this;this.R.onViewportLeave(function(){t.q||(t.q=setTimeout(function(){t.q=null,t.R.deactivate(),t.R.clearCallbacks(),t.L()},t.config.timeout))}),this.R.onViewportEnter(function(){t.q&&(clearTimeout(t.q),t.q=null)}),this.R.activate()},i.prototype.F=function(t){switch(t.event){case"1":t.event=i.TIMEOUT;break;case"2":t.event=i.VISIBLE_TIMEOUT;break;default:t.event=i.VIEWPORT_LEAVE}switch(t.event===i.TIMEOUT&&t.timeout<30&&(t.timeout=30),t.event===i.VISIBLE_TIMEOUT&&t.timeout<10&&(t.timeout=10),t.event===i.VIEWPORT_LEAVE&&t.timeout<5&&(t.timeout=5),t.timeout=Math.round(1e3*t.timeout),t.limit=parseInt(t.limit,10),(isNaN(t.limit)||t.limit<0)&&(t.limit=4),t.onEmitterWin){case"1":t.onEmitterWin=i.ALWAYS_REFRESH;break;case"2":t.onEmitterWin=i.ON_NO_BID_REFRESH_IF_NO_EMITTER;break;default:t.onEmitterWin=i.ON_NO_BID_KEEP_PREVIOUS}return t},i}();p.TIMEOUT=1,p.VISIBLE_TIMEOUT=2,p.VIEWPORT_LEAVE=3,p.ALWAYS_REFRESH=4,p.ON_NO_BID_REFRESH_IF_NO_EMITTER=5,p.ON_NO_BID_KEEP_PREVIOUS=6;function w(){this.enabled=this.Q(4)}w.prototype.log=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];this.enabled&&console.log.apply(console,["%cAO-PREBID","background:#ff6600; padding:2px; display:inline-block; border-radius:5px; color:white; font-size:x-small; font-weight:bold;"].concat(t))},w.prototype.Q=function(t){if("undefined"==typeof URLSearchParams)return!1;var i=new URLSearchParams(document.location.search.substring(1)),i=parseInt(i.get("ao_prebid_debug"),10);return!isNaN(i)&&t<=i};function b(){this.queue=null}var v="_analytics_module_",m="_user_id_module_",g=function(t){function i(){t.apply(this,arguments)}return t&&(i.__proto__=t),(i.prototype=Object.create(t&&t.prototype)).constructor=i}(Error),y=function(i){function n(t){if(i.call(this,t),this.container=document.getElementById(this.config.targetID),"yes"===this.container.dataset.aoPrebidConnected)throw new g("Aborted, already initialized");this.container.dataset.aoPrebidConnected="yes",this.serverRequestSended=!1,this.refresher=null,this.Y=null,this.G=new w,this.K=!1,this.W(),this.X()}return i&&(n.__proto__=i),((n.prototype=Object.create(i&&i.prototype)).constructor=n).create=function(t){try{new n(t).start()}catch(t){if(!(t instanceof g))throw t}},n.prototype.start=function(){if(this.K)throw new Error("Already started");this.K=!0,this.sandbox=new o,this.sandbox.setType(o.HIDDEN),this.container.parentNode.insertBefore(this.sandbox.getNode(),this.container.nextSibling),this.sandbox.writeSync(),"initializer"in this.config?this.config.initializer(this.sandbox.win,this.Z.bind(this),this.config.prebidConfig):this.tt(),this.pbjs=this.sandbox.win.pbjs,this.appendPrebidScript()},n.prototype.appendPrebidScript=function(){var t=this.sandbox.win.document.createElement("script");t.src=this.config.prebidScriptUrl,this.sandbox.appendScript(t)},n.prototype.W=function(){if(this.config.analyticalModules=[],this.config.userIdSubmodules=[],this.config.bidderSettings={},this.config.modules){for(var t=[],i=[],n=[],s=0,h=this.config.modules;s<h.length;s+=1){var o=h[s];o.bidder.startsWith(v)?i.push(o):o.bidder.startsWith(m)?n.push(o):(this.it(o),t.push(o))}this.config.bids=t,this.config.analyticalModules=i,this.config.userIdSubmodules=n}this.nt(),this.st(),this.ht(),this.ot()},n.prototype.nt=function(){if(this.config.extraBiddersConfiguration){var t,i="Configuration provided in extraBiddersConfiguration is invalid: ";try{t=JSON.parse(this.config.extraBiddersConfiguration)}catch(t){throw new Error(i+t.message)}if(!Array.isArray(t))throw new Error(i+"not array");for(var n=0,s=t;n<s.length;n+=1){var h=s[n],o=this.et(h);if(o)throw new Error("Invalid bidder provided: "+o);this.config.bids.push(h)}}},n.prototype.et=function(i){return i&&"object"==typeof i?"bidder"in i?this.config.bids.find(function(t){return t.bidder===i.bidder})?null:i.bidder+' wasn\'t selected in "Selected adapters" field of template':"no bidder field in config: "+JSON.stringify(i,null,4):"bad type: "+JSON.stringify(i,null,4)},n.prototype.st=function(){var t;"auctionID"in this.config||(this.config.usePredictableIDs?(t="ao-"+this.config.creativeID,this.container.setAttribute("id",t),this.config.auctionID=t):this.config.auctionID="ao-"+this.config.unique)},n.prototype.ht=function(){if(this.config.userIdSubmodules.length){for(var t=[],i=0,n=this.config.userIdSubmodules;i<n.length;i+=1){var s=n[i],h=s.params.options;if(!h||"object"!=typeof h)throw new Error("Unexpected options for userId submodule "+o.name+", expected object, "+typeof h+" received instead.");var o=Object.assign({},{name:s.bidder.replace(m,"")},h);t.push(o)}this.config.prebidConfig.userSync||(this.config.prebidConfig.userSync={}),this.config.prebidConfig.userSync.userIds=t}},n.prototype.ot=function(){var t=(this.config.schain||"").trim();if(t){var i,n="Invalid supply chain object: ";try{i=JSON.parse(t)}catch(t){throw new Error(n+t.toString())}if(!i||"object"!=typeof i)throw new Error(n+"not object");if(0!==Object.keys(i).length){if(!("config"in i))throw new Error(n+"no config field");if(!("nodes"in i.config))throw new Error(n+"no nodes in config field");this.config.prebidConfig.schain=i}}},n.prototype.it=function(n){var s=this;if(n.params&&n.params["_ao_bidCpmAdjustment"]){var h=parseFloat(n.params["_ao_bidCpmAdjustment"]);if(delete n.params["_ao_bidCpmAdjustment"],!(0<=h))throw new Error("Bad bidCpmAdjustment value for "+n.bidder+': "'+h+'" (expected positive, real value)');this.config.bidderSettings[n.bidder]={bidCpmAdjustment:function(t){var i=t*h;return s.G.log("CPM Adjustment for: "+n.bidder+", from: ",t,", to: ",i),i}}}},n.prototype.tt=function(){var t=this,i=[{code:this.config.auctionID,mediaTypes:{banner:{sizes:this.rt()}},bids:this.config.bids}],n=this.sandbox.win.pbjs||(this.sandbox.win.pbjs={});n.que=n.que||[];var s=this.Z.bind(this);n.que.push(function(){t.G.log("Setting prebid config: "+JSON.stringify(t.config.prebidConfig,null,4)),n.setConfig(t.config.prebidConfig),t.at(n),Object.keys(t.config.bidderSettings).length&&(n.bidderSettings=t.config.bidderSettings),t.G.log("Setting adUnits: "+JSON.stringify(i,null,4)),n.addAdUnits(i),n.requestBids({bidsBackHandler:s})}),setTimeout(function(){s()},2e3)},n.prototype.at=function(t){if(this.config.analyticalModules.length)for(var i=0,n=this.config.analyticalModules;i<n.length;i+=1){var s=n[i],h={provider:s.bidder.replace(v,"")},s=s.params.options;s&&"object"==typeof s&&Object.keys(s).length&&(h.options=s),this.G.log("Enable analytics with config: "+JSON.stringify(h,null,4)),t.enableAnalytics(h)}},n.prototype.rt=function(){for(var t=[[parseInt(this.config.width,10),parseInt(this.config.height,10)]],i=0,n=this.config.extraSizes.split(",");i<n.length;i+=1){var s=n[i];-1!==s.indexOf("x")&&((s=s.split("x").map(function(t){return parseInt(t,10)})).some(function(t){return isNaN(t)||t<0})||t.push([].concat(s)))}return t},n.prototype.Z=function(t){if(!this.serverRequestSended){if(this.serverRequestSended=!0,!document.body.contains(this.container))throw new Error("Auction not attached to DOM, skipping.");t=this.ut(t);this.n(t)}},n.prototype.ut=function(t){if(this.G.log("Parsing results of new auctions."),!t||!t[this.config.auctionID]||!t[this.config.auctionID].bids)return this.G.log("No bids, ending."),null;var i=t[this.config.auctionID].bids,t=this.ct(i);return t||(this.G.log("No bid with deal found, resuming standard auction."),(i=i.filter(function(t){return 0<t.cpm})).sort(function(t,i){return i.cpm-t.cpm}),0<i.length?i[0]:null)},n.prototype.ct=function(t){var i=this.dt();if(this.G.log("Configured deals: ",JSON.stringify(i)),!i)return null;var n=t.filter(function(t){return d(t.dealId)&&t.dealId.length||"number"==typeof t.dealId});if(this.G.log("All bids: ",t," Bids with deal: ",n),!n.length)return null;for(var s=0,h=i;s<h.length;s+=1){var o=h[s],e=-3===o,r=!e&&-3===o.bidderCode;this.G.log("Parsing deal: ",JSON.stringify(o),"acceptAnyDeal="+e,"acceptAnyBidder="+r);for(var a=0,u=n;a<u.length;a+=1){var c=u[a];if(e||o.id===String(c.dealId)&&(r||o.bidderCode===c.bidderCode))return this.G.log("Searching for "+JSON.stringify(o)," in bid: ",c," bid.dealId="+c.dealId," Result true"),this.G.log("Bid found",c),this.lt(c),c;this.G.log("Searching for "+JSON.stringify(o)," in bid: ",c," bid.dealId="+c.dealId," Result false")}}return this.G.log("No bid with deal found"),null},n.prototype.lt=function(t){Object.defineProperty(t,a,{value:!0,enumerable:!1})},n.prototype.dt=function(){var t=this.config.dealsData;if(!d(t)||!t.length)return null;for(var i=[],n=0,s=(t=t.trim()).split(",");n<s.length;n+=1){var h=s[n];if("any"===(h=h.trim()).toLowerCase()){i.push(-3);break}-1<h.indexOf(":")?(h=h.split(":"))[0].length&&h[1].length&&i.push({bidderCode:h[0],id:h[1]}):h.length&&i.push({bidderCode:-3,id:h})}return i.length?i:null},n.prototype.o=function(t){var i,n=this;this.refresher&&!this.refresher.shouldDisplayEmitterCreative(this.Y)||(this.f(this.container),this.adArea=null,"undefined"!=typeof ado&&((i=document.createElement("div")).id=this.container.id+"_inside",this.container.appendChild(i),ado.features&&ado.features.passback?(this.d(this.config.statsHitUrl,this.c()),ado.executePassback(this.config.emitterOfferID,i.id)):new u(i).render(function(){t.creative(),n.d(n.config.statsHitUrl,n.c())}),this.Y=!0))},n.prototype.p=function(t){return Math.round(1e6*t)},n.prototype.n=function(t){i.prototype.n.call(this,t),this.refresher&&this.refresher.enable()},n.prototype.e=function(t){i.prototype.e.call(this,t),this.config.adText&&this.ft(),this.Y=!1},n.prototype.X=function(){var t=this,i=this.config.refresh;i&&(i.timeout=parseFloat(i.timeout),i.timeout&&(this.refresher=new p(i),this.refresher.setAuctionCaller(function(){return t.pt()}),this.refresher.setTarget(this.container)))},n.prototype.pt=function(){var t=this;document.body.contains(this.container)?this.pbjs.que.push(function(){t.serverRequestSended=!1,t.pbjs.requestBids({adUnitCodes:[t.config.auctionID],bidsBackHandler:t.Z.bind(t)})}):this.refresher&&(this.refresher.disable(),this.refresher=null)},n.prototype.ft=function(){var t=document.createElement("div");t.innerHTML=this.config.adText;var i=t.textContent,t=document.createElement("span");s(t,{display:"block",width:"100%",margin:"0 auto 1px auto",padding:"0",textAlign:"center",fontSize:"12px",color:"gray"}),t.textContent=i,this.config.adTextClass&&(t.className=this.config.adTextClass),this.container.insertBefore(t,this.container.firstChild)},n}(n),k="adoPrebidQueue_1_0";b.init=function(){void 0===window[k]&&(window[k]=[]),Array.isArray(window[k])&&(new b).init()},b.prototype.init=function(){var i=this;this.queue=window[k],window[k]={push:function(t){return i.wt(t)}},this.bt()},b.prototype.wt=function(t){function n(t,i){void 0===i&&(i=0),document.getElementById(t.targetID)?y.create(t):i<500&&setTimeout(n,50,t,++i)}n(t)},b.prototype.bt=function(){var i=this;this.queue.forEach(function(t){return i.wt(t)}),this.queue=null},b.init()}();refix="FX" data-ticker="2X0.TG"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/reszveny/2X0.TG" style="gap:4px"><span class="name">CORTEVA INC.      DL -,01</span><span class="price">49.5 EUR</span><span class="change">-0.25</span><span class="change-arrow"></span></a></div><div class="change-down" data-prefix="FX" data-ticker="EURHUF"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/deviza/EURHUF" style="gap:4px"><span class="name">EUR</span><span class="price">387.97 HUF</span><span class="change">-0.71</span><span class="change-arrow"></span></a></div><div class="change-down" data-prefix="FX" data-ticker="USDHUF"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/deviza/USDHUF" style="gap:4px"><span class="name">USD</span><span class="price">359.43 HUF</span><span class="change">-1.19</span><span class="change-arrow"></span></a></div><div class="change-up" data-prefix="FX" data-ticker="EURUSD"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/deviza/EURUSD" style="gap:4px"><span class="name">EUR/USD</span><span class="price">1.08 USD</span><span class="change">0</span><span class="change-arrow"></span></a></div><div class="change-up" data-prefix="FX" data-ticker="BTCUSD"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/deviza/BTCUSD" style="gap:4px"><span class="name">Bitcoin</span><span class="price">47593.09 USD</span><span class="change">2282.41</span><span class="change-arrow"></span></a></div><div class="change-up" data-prefix="FX" data-ticker="RBOB"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/index/RBOB" style="gap:4px"><span class="name">Benzin</span><span class="price">2.34 HUF</span><span class="change">0.02</span><span class="change-arrow"></span></a></div><div class="change-down" data-prefix="FX" data-ticker="BRENT"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/index/BRENT" style="gap:4px"><span class="name">Brent</span><span class="price">81.56 HUF</span><span class="change">-0.05</span><span class="change-arrow"></span></a></div><div class="change-up" data-prefix="FX" data-ticker="GOLD"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/index/GOLD" style="gap:4px"><span class="name">Arany</span><span class="price">1971.09 HUF</span><span class="change">11.42</span><span class="change-arrow"></span></a></div><div class="change-up" data-prefix="FX" data-ticker="WTI"><a class="d-flex align-items-center" href="https://www.agrarszektor.hu/arfolyam/index/WTI" style="gap:4px"><span class="name">Wti</span><span class="price">77.74 HUF</span><span class="change">0.42</span><span class="change-arrow"></span></a></div>
			
		</div>
	</div>
</div>        <div class="row">
            <div class="col-12">
                <div class="header-top">
                    
                    <div class="hamb flex-1">
                        <div class="hamburger-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" iewBox="0 0 26 18" xml:space="preserve"><path d="M25 18H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zM25 10H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zM25 2H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1z"/></svg>
</div>
                    </div>
                    <div class="logo flex-2 text-center"><a href="/"><img src="https://cdn.agrarszektor.hu/assets/images/logo2022.svg" class="mainlogo"></a></div>
                    <div class="fb flex-1 text-right">
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%agrarszektor.hu&width=100&layout=button_count&action=like&size=small&share=false&height=21&locale=hu_HU&appId=176984199384044" width="100" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="header-bottom">
                    <div class="date-weather align-items-center pxl-14 d-none d-md-flex">
                        <div class="date pr-3">2024. február 9. péntek <b>Abigél, Alex</b></div>
                        <div class="weather pl-2"><a href="https://www.agrarszektor.hu/idojaras"><!-- 3.svg --><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 54"><defs><style>.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><path class="cls-1" d="M17.6,29.49a7.27,7.27,0,0,0-6-2.59l-.41,0a8.35,8.35,0,0,0-7.74,8.3v.32c0,4.33,3.4,8.29,7.6,8.29l21.91,0a8.35,8.35,0,0,0,8.32-8.32v-.32A8.34,8.34,0,0,0,33,26.9H30.89v-.65A8.48,8.48,0,0,0,14.23,24"/><line class="cls-1" x1="43.57" y1="18.97" x2="46.5" y2="18.63"/><line class="cls-1" x1="41.67" y1="25.55" x2="43.98" y2="27.39"/><line class="cls-1" x1="25.36" y1="12.55" x2="27.67" y2="14.39"/><line class="cls-1" x1="33.34" y1="8.14" x2="33.67" y2="11.07"/><line class="cls-1" x1="42.09" y1="10.66" x2="40.25" y2="12.97"/><path class="cls-1" d="M30,17.12a5.46,5.46,0,1,1,7.62,7.43"/></svg>&nbsp;&nbsp;<b>4°C</b> Budapest</a></div>
                    </div>
                    <div class="tags d-flex justify-content-center justify-content-md-end flex-1">
                                                
                        <div class="bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/cimke/gazdatüntetés">Gazdatüntetés</a>
                        </div>
                                                
                        <div class="bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/cimke/támogatás">Támogatás</a>
                        </div>
                                                
                        <div class="bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/allat">Állat</a>
                        </div>
                                                
                        <div class="bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/elelmiszer">Élelmiszer</a>
                        </div>
                                                
                        <div class="bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/arfolyam">Árfolyam</a>
                        </div>
                                            </div>
                </div>
            </div>
        </div>
    </div>
</header>
<section class="scrolled px-2">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="header-scrolled justify-content-center justify-content-sm-between w-100">
                    <div class="hamb-logo align-items-center d-flex w-100 xd-none xd-sm-flex ">
                        <div class="hamb pr-2">
                            <div class="hamburger-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" iewBox="0 0 26 18" xml:space="preserve"><path d="M25 18H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zM25 10H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zM25 2H1c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1z"/></svg>
</div>
                        </div>
                        <div class="logo pl-3 w-100 text-center text-sm-left pr-5 pr-sm-0">
                            <a href="/"><img src="https://cdn.agrarszektor.hu/assets/images/logo2022.svg" class="mainlogo-small"></a>
                        </div>
                    </div>
                    <div class="tags justify-content-end flex-1 d-none d-sm-flex">
                                                <div class="d-none d-lg-block bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/cimke/gazdatüntetés">Gazdatüntetés</a>
                        </div>
                                                <div class="d-none d-lg-block bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/cimke/támogatás">Támogatás</a>
                        </div>
                                                <div class="d-none d-lg-block bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/allat">Állat</a>
                        </div>
                                                <div class="d-none d-lg-block bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/elelmiszer">Élelmiszer</a>
                        </div>
                                                <div class="d-none d-lg-block bg-anim-h lightgreen">
                            <a class="text-dark text-uppercase pxl-14 weight-600" href="/arfolyam">Árfolyam</a>
                        </div>
                                            </div>
                </div>
            </div>
        </div>
    </div>
</section><div class="container pt-5 mt-4 pt-sm-0 mt-sm-0 narrow-padding">
	<div class="row mb-3">
		<div class="col-12">
			<!-- slave:agrarszektor.desktop.elelmiszer.super_leaderboard_1 --><div id="y-adoceanindexhuujgocklsfi" class="adoceanzone h-super_leaderboard_1 z-adoceanindexhuujgocklsfi"><div id="adoceanindexhuujgocklsfi"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.elelmiszer.super_leaderboard_1 */
			ado.slave("adoceanindexhuujgocklsfi", {myMaster: "EdJQmO945wtqAMKcsv1Ut_DLI.J34_LUKPczaNBBxyr.x7", onServerEmission: function(){document.getElementById("y-adoceanindexhuujgocklsfi").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div>		</div>
	</div>
	<div class="row">
		<div class="col-md-8">
			<div class="mb-3">
	<div class="article-image position-relative asp16-9">
		<img src="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707470386-eLGU9ziDZ_md.jpg" class="img-fluid d-block" alt="Ez az élelmiszer sehol máshol sem kapható világon: csak a magyarok veszik">
		
	</div>
</div>

	<div class="mb-3">
		<div class="category-badge d-inline-block"><a href="https://www.agrarszektor.hu/elelmiszer">Élelmiszer</a></div>
		<div class="sponsor-badge d-inline-block"><!-- slave:agrarszektor.desktop.elelmiszer.szponzor_szoveg --><div id="adoceanindexhuoleljuoljc"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.elelmiszer.szponzor_szoveg */
			ado.slave("adoceanindexhuoleljuoljc", {myMaster: "EdJQmO945wtqAMKcsv1Ut_DLI.J34_LUKPczaNBBxyr.x7"});
			</script></div>
	</div>

<h1 class="article-title">Ez az élelmiszer sehol máshol sem kapható világon: csak a magyarok veszik</h1>

<div class="author-line my-4">
	<div class="author-left">
				<div class="d-flex flex-column flex-lg-row">
			<div class="author-name mr-3">
								agrarszektor.hu
							</div>
			<div class="author-date">
				2024. február 9. 12:12
			</div>
		</div>
		<div class="author-fb">
			<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.agrarszektor.hu%2Felelmiszer%2F20240209%2Fez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286&width=110&layout=button_count&action=like&size=small&share=false&height=21&locale=hu_HU&appId=" width="110" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
		</div>
	</div>
	<div class="author-right">
		<div class="share justify-content-end d-flex position-relative mt-3 mt-md-0 flex-1">
	<div class="mr-2 pointer" title="Küldés email-ben"><a href="mailto:?subject=Ez az élelmiszer sehol máshol sem kapható világon: csak a magyarok veszik&body=https%3A%2F%2Fwww.agrarszektor.hu%2Felelmiszer%2F20240209%2Fez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-email.svg"></a></div>
	<div class="mr-2 pointer" title="Megosztás Facebook-on"><span onclick="return popupwindow('https:\/\/www.facebook.com/share.php?u=https%3A%2F%2Fwww.agrarszektor.hu%2Felelmiszer%2F20240209%2Fez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286', 600, 600)"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-facebook.svg"></span></div>
	<div class="mr-2 pointer" title="Megosztás Twitter-en"><span onclick="return popupwindow('https:\/\/twitter.com/intent/tweet?lang=hu&text=Ez+az+%C3%A9lelmiszer+sehol+m%C3%A1shol+sem+kaphat%C3%B3+vil%C3%A1gon%3A+csak+a+magyarok+veszik&url=https%3A%2F%2Fwww.agrarszektor.hu%2Felelmiszer%2F20240209%2Fez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286', 600, 600)"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-twitter.svg"></span></div>
	<div class="mr-2 pointer" title="Megosztás Tumblr-on"><span onclick="return popupwindow('http:\/\/www.tumblr.com/share/link?url=https%3A%2F%2Fwww.agrarszektor.hu%2Felelmiszer%2F20240209%2Fez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286&name=Ez+az+%C3%A9lelmiszer+sehol+m%C3%A1shol+sem+kaphat%C3%B3+vil%C3%A1gon%3A+csak+a+magyarok+veszik&description=', 600, 600)"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-tumblr.svg"></span></div>
	<div class="mr-2 pointer" title="Link másolása"><span data-copyurl="https://www.agrarszektor.hu/elelmiszer/20240209/ez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286"><img class="it="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1700399735-TwDFvLpCa_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1700399735-TwDFvLpCa_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1700399735-TwDFvLpCa_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1700399735-TwDFvLpCa_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1700399735-TwDFvLpCa_sm.jpg" class="img-fluid" loading="lazy" alt="Változott a szabályozás: mostantól csak így lehet földet venni Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. december 15. 09:43</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20231215/valtozott-a-szabalyozas-mostantol-csak-igy-lehet-foldet-venni-magyarorszagon-46553">
						Változott a szabályozás: mostantól csak így lehet földet venni Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Vége a készpénzes földvásárlásoknak, jövőre megszűnik ez a lehetőség az országban.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20231201/oriasi-valtozasok-varhatok-a-foldpiacon-jon-az-uj-szabalyozas-46336" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/11/1701383023-pWXD0cqdF_sm.jpg" class="img-fluid" loading="lazy" alt="Óriási változások várhatók a földpiacon: jön az új szabályozás?" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. december 1. 06:01</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20231201/oriasi-valtozasok-varhatok-a-foldpiacon-jon-az-uj-szabalyozas-46336">
						Óriási változások várhatók a földpiacon: jön az új szabályozás?
					</a></h2>
				<p class="pxl-17 adelle lines-2">Már a parlament előtt van a földforgalom és a földhasználat egyes kérdéseit módosító jogszabálytervezet.</p>
		
	</div>
</article>
		<div class="mb-4">
		<!-- slave:agrarszektor.desktop.fold.roadblock_1 --><div id="y-adoceanindexhuxonjcwgkoh" class="adoceanzone h-roadblock_1 z-adoceanindexhuxonjcwgkoh"><div id="adoceanindexhuxonjcwgkoh"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.roadblock_1 */
			ado.slave("adoceanindexhuxonjcwgkoh", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhuxonjcwgkoh").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div>	</div>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20231030/kisajatitjak-a-gyar-utjaban-levo-termofoldeket-szegeden-45829" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/10/1698651814-UOsrtjrf6_sm.jpg" class="img-fluid" loading="lazy" alt="Kisajátítják a gyár útjában lévő termőföldeket Szegeden" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. október 30. 09:03</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20231030/kisajatitjak-a-gyar-utjaban-levo-termofoldeket-szegeden-45829">
						Kisajátítják a gyár útjában lévő termőföldeket Szegeden
					</a></h2>
				<p class="pxl-17 adelle lines-2">A gazdák szerint a felajánlott összeg nem elég arra, hogy új gazdálkodásba kezdjenek máshol.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230929/durva-kijelentest-tett-nagy-istvan-a-magyar-termofoldekrol-45375" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695971423-jZ8KvmL1f_sm.jpg" class="img-fluid" loading="lazy" alt="Durva kijelentést tett Nagy István a magyar termőföldekről" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">MTI</span>
								&nbsp; | &nbsp; <span>2023. szeptember 29. 12:16</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230929/durva-kijelentest-tett-nagy-istvan-a-magyar-termofoldekrol-45375">
						Durva kijelentést tett Nagy István a magyar termőföldekről
					</a></h2>
				<p class="pxl-17 adelle lines-2">A termőföldet, a vizet és az ökológiai sokféleséget meg kell őrizni a jövő generációinak.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230925/gyuricza-csaba-be-kellene-tiltani-a-szantast-magyarorszagon-45299" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695642264-2oBtNSgib_sm.jpg" class="img-fluid" loading="lazy" alt="Gyuricza Csaba: be kellene tiltani a szántást Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. szeptember 25. 16:02</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230925/gyuricza-csaba-be-kellene-tiltani-a-szantast-magyarorszagon-45299">
						Gyuricza Csaba: be kellene tiltani a szántást Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Alkalmazkodunk a megváltozott feltételekhez, más növényfajtákat kell termelni, más technológiákat, másfajta talajművelést kell alkalmazni, különben nagy baj lehet.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230918/igy-juthatnak-most-foldhoz-az-elelmes-magyarok-csak-ennyit-kell-tenni-hozza-45199" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1695020975-E72V9Ft7l_sm.jpg" class="img-fluid" loading="lazy" alt="Így juthatnak most földhöz az élelmes magyarok: csak ennyit kell tenni hozzá" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. szeptember 18. 09:44</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230918/igy-juthatnak-most-foldhoz-az-elelmes-magyarok-csak-ennyit-kell-tenni-hozza-45199">
						Így juthatnak most földhöz az élelmes magyarok: csak ennyit kell tenni hozzá
					</a></h2>
				<p class="pxl-17 adelle lines-2">Tovább folytatódik az árverés útján történő földértékesítés, újabb 10 hektárt meghaladó földrészletek kerülhetnek a gazdákhoz.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230904/igy-turbozzak-fel-a-talajt-a-profik-ez-tenyleg-mukodhet-45005" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/09/1693818069-Ruppb2JmC_sm.jpg" class="img-fluid" loading="lazy" alt="Így turbózzák fel a talajt a profik: ez tényleg működhet" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. szeptember 4. 16:31</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230904/igy-turbozzak-fel-a-talajt-a-profik-ez-tenyleg-mukodhet-45005">
						Így turbózzák fel a talajt a profik: ez tényleg működhet
					</a></h2>
				<p class="pxl-17 adelle lines-2">A tudomány, számtalan ellenőrzött kísérlet, illetve a termelői nagyüzemi eredmények igazolták már a talajoltó baktériumok és más mikrobák hasznos tulajdonságait.</p>
		
	</div>
</article>
			<div class="mb-4">
		<!-- slave:agrarszektor.desktop.fold.roadblock_2 --><div id="y-adoceanindexhuramgjqktex" class="adoceanzone h-roadblock_2 z-adoceanindexhuramgjqktex"><div id="adoceanindexhuramgjqktex"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.roadblock_2 */
			ado.slave("adoceanindexhuramgjqktex", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhuramgjqktex").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div>	</div>
			<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230822/foldet-berelnel-magyarorszagon-akkor-ezzel-jo-ha-tisztaban-vagy-44845" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/08/1692706849-rmuNJyOA3_sm.jpg" class="img-fluid" loading="lazy" alt="Földet bérelnél Magyarországon? Akkor ezzel jó, ha tisztában vagy" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. augusztus 22. 18:28</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230822/foldet-berelnel-magyarorszagon-akkor-ezzel-jo-ha-tisztaban-vagy-44845">
						Földet bérelnél Magyarországon? Akkor ezzel jó, ha tisztában vagy
					</a></h2>
				<p class="pxl-17 adelle lines-2">A Nemzeti Parktól bérelt földekkel kapcsolatban 2023-tól egy új jogintézményt vezettek be a jogszabályban.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230731/hihetetlen-de-igaz-ennyibe-kerul-most-egy-hektar-fold-hollandiaban-44554" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690783814-XcwZfarxa_sm.jpg" class="img-fluid" loading="lazy" alt="Hihetetlen, de igaz: ennyibe kerül most egy hektár föld Hollandiában" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. július 31. 09:03</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230731/hihetetlen-de-igaz-ennyibe-kerul-most-egy-hektar-fold-hollandiaban-44554">
						Hihetetlen, de igaz: ennyibe kerül most egy hektár föld Hollandiában
					</a></h2>
				<p class="pxl-17 adelle lines-2">Hollandiában átlagosan 8%-kal, 84900 euró/ha-ra (32,4 millió Ft/ha) csökkent a termőföld ára.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230728/fontos-reszletek-derultek-ki-az-osztatlan-kozos-tulajdonnal-kapcsolatban-44534" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1690539332-7CrJ1Us9g_sm.jpg" class="img-fluid" loading="lazy" alt="Fontos részletek derültek ki az osztatlan közös tulajdonnal kapcsolatban" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. július 28. 13:04</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230728/fontos-reszletek-derultek-ki-az-osztatlan-kozos-tulajdonnal-kapcsolatban-44534">
						Fontos részletek derültek ki az osztatlan közös tulajdonnal kapcsolatban
					</a></h2>
				<p class="pxl-17 adelle lines-2">Az Agrárminisztérium egyik fő célja továbbra is az osztatlan közös földtulajdon felszámolása.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230720/hihetetlen-de-igaz-mar-ennyibe-kerul-egy-hektar-fold-magyarorszagon-44421" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689845030-oYFIx53nc_sm.jpg" class="img-fluid" loading="lazy" alt="Hihetetlen, de igaz: már ennyibe kerül egy hektár föld Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. július 20. 12:13</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230720/hihetetlen-de-igaz-mar-ennyibe-kerul-egy-hektar-fold-magyarorszagon-44421">
						Hihetetlen, de igaz: már ennyibe kerül egy hektár föld Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Csaknem 10 százalékkal emelkedett a termőföldek ára tavaly Magyarországon, a gyümölcsösök és a szőlők hektáronkénti átlagára volt a legmagasabb.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230715/dontott-a-kormany-vissza-kell-fizetnie-a-telepuleseknek-az-idei-foldadot-44350" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/07/1689411840-rUD5uxzwe_sm.jpg" class="img-fluid" loading="lazy" alt="Döntött a kormány: vissza kell fizetnie a településeknek az idei földadót" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. július 15. 12:05</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230715/dontott-a-kormany-vissza-kell-fizetnie-a-telepuleseknek-az-idei-foldadot-44350">
						Döntött a kormány: vissza kell fizetnie a településeknek az idei földadót
					</a></h2>
				<p class="pxl-17 adelle lines-2">Megjelent a Magyar Közlönyben pénteken a kormány rendelete a 2023. évi települési földadó visszatérítéséről.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230623/sokan-nem-ismerik-a-szabalyokat-csak-igy-lehet-foldet-berelni-magyarorszagon-44051" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687530923-4N1mnhnir_sm.jpg" class="img-fluid" loading="lazy" alt="Sokan nem ismerik a szabályokat: csak így lehet földet bérelni Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. június 23. 17:14</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230623/sokan-nem-ismerik-a-szabalyokat-csak-igy-lehet-foldet-berelni-magyarorszagon-44051">
						Sokan nem ismerik a szabályokat: csak így lehet földet bérelni Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Júliustól megváltoznak a földhasználatra és a haszonbérletre vonatkozó szabályok.</p>
		
	</div>
</article>
				<div class="mb-4">
			</div>
	<div class="mb-3"></div>
		<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230620/ijeszto-ami-a-magyar-foldeken-zajlik-mar-ennyibe-kerul-egy-hektar-43994" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1687249095-nhofSjllP_sm.jpg" class="img-fluid" loading="lazy" alt="Ijesztő, ami a magyar földeken zajlik: már ennyibe kerül egy hektár" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. június 20. 11:32</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230620/ijeszto-ami-a-magyar-foldeken-zajlik-mar-ennyibe-kerul-egy-hektar-43994">
						Ijesztő, ami a magyar földeken zajlik: már ennyibe kerül egy hektár
					</a></h2>
				<p class="pxl-17 adelle lines-2">Szűkült tavaly a termőföld-piac, de az árnövekedés trendje töretlen Magyarországon.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230614/itt-az-uj-szabalyozas-nagy-valtozas-jon-a-foldforgalomban-magyarorszagon-43915" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1685440433-L3WLfgXBq_sm.jpg" class="img-fluid" loading="lazy" alt="Itt az új szabályozás: nagy változás jön a földforgalomban Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. június 14. 15:03</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230614/itt-az-uj-szabalyozas-nagy-valtozas-jon-a-foldforgalomban-magyarorszagon-43915">
						Itt az új szabályozás: nagy változás jön a földforgalomban Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Változások történtek a termőföld forgalmi szabályokban, a most elfogadott módosítások 2023. július 1-én lépnek hatályba.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230614/hatalmas-foldaukciot-hirdet-az-agrarminiszterium-most-barki-licitalhat-43912" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686733494-TcBI0CJWs_sm.jpg" class="img-fluid" loading="lazy" alt="Hatalmas földaukciót hirdet az Agrárminisztérium: most bárki licitálhat" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. június 14. 13:42</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230614/hatalmas-foldaukciot-hirdet-az-agrarminiszterium-most-barki-licitalhat-43912">
						Hatalmas földaukciót hirdet az Agrárminisztérium: most bárki licitálhat
					</a></h2>
				<p class="pxl-17 adelle lines-2">Tovább folytatódik a földértékesítési program, folytatódik a 10 hektárnál kisebb területű állami földek értékesítése is.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230606/itt-a-bejelentes-ertekes-foldterulet-besorolasat-modositja-az-agrarminiszter-43786" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/06/1686032252-kjG60JLSl_sm.jpg" class="img-fluid" loading="lazy" alt="Itt a bejelentés: értékes földterület besorolását módosítja az agrárminiszter" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. június 6. 11:31</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230606/itt-a-bejelentes-ertekes-foldterulet-besorolasat-modositja-az-agrarminiszter-43786">
						Itt a bejelentés: értékes földterület besorolását módosítja az agrárminiszter
					</a></h2>
				<p class="pxl-17 adelle lines-2">A védetté nyilvánítás célja a Duna-Tisza közén az Illancs jellegzetes, természeteshez közeli állapotban fennmaradt tájrészletének.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230519/indulnak-az-allami-foldarveresek-kiderult-milyen-teruletek-kerulnek-kalapacs-ala-43569" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1684486221-jZmMjERKH_sm.jpg" class="img-fluid" loading="lazy" alt="Indulnak az állami földárverések: kiderült, milyen területek kerülnek kalapács alá" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. május 19. 12:27</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230519/indulnak-az-allami-foldarveresek-kiderult-milyen-teruletek-kerulnek-kalapacs-ala-43569">
						Indulnak az állami földárverések: kiderült, milyen területek kerülnek kalapács alá
					</a></h2>
				<p class="pxl-17 adelle lines-2">Újabb állami földterületek, ezúttal a 10 hektár térmértéket meghaladó földrészletek kerülhetnek a gazdálkodókhoz.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230502/modosult-a-torveny-hatalmas-valtozasok-johetnek-a-magyar-foldpiacon-43353" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1676968393-ZY2ynQkqT_sm.jpg" class="img-fluid" loading="lazy" alt="Módosult a törvény: hatalmas változások jöhetnek a magyar földpiacon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. május 2. 13:33</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230502/modosult-a-torveny-hatalmas-valtozasok-johetnek-a-magyar-foldpiacon-43353">
						Módosult a törvény: hatalmas változások jöhetnek a magyar földpiacon
					</a></h2>
				<p class="pxl-17 adelle lines-2">A Nemzeti Agrárgazdasági Kamara honlapján elérhetők a helyben szokásos értékesítési árak.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230502/legyen-ott-az-orszag-legnagyobb-szantofoldi-rendezvenyen-43351" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/05/1683017214-sMMRaf1rM_sm.jpg" class="img-fluid" loading="lazy" alt="Legyen ott az ország legnagyobb szántóföldi rendezvényén!" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. május 2. 11:35</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230502/legyen-ott-az-orszag-legnagyobb-szantofoldi-rendezvenyen-43351">
						Legyen ott az ország legnagyobb szántóföldi rendezvényén! (x)
					</a></h2>
				<p class="pxl-17 adelle lines-2">Május 8-ig kedvezményes áron jelentkezhet kiállítónak a NAK Szántóföldi Napok és AgrárgépShow eseményre.</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230429/itt-az-uj-torveny-nagy-valtozas-jon-a-foldforgalomban-magyarorszagon-43334" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/02/1675256147-CMvdIrIIa_sm.jpg" class="img-fluid" loading="lazy" alt="Itt az új törvény: nagy változás jön a földforgalomban Magyarországon" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. április 29. 13:28</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230429/itt-az-uj-torveny-nagy-valtozas-jon-a-foldforgalomban-magyarorszagon-43334">
						Itt az új törvény: nagy változás jön a földforgalomban Magyarországon
					</a></h2>
				<p class="pxl-17 adelle lines-2">Mire kell figyelni 2023. május 1-től a földforgalmi szerződések kapcsán? Mutatjuk!</p>
		
	</div>
</article>
				<article class="article-item d-flex mb-4 mb-sm-3 align-items-start flex-1 gap-1"><!-- article-item-square-horizontal -->
	<div class="square-horizontal">
		<a href="/fold/20230426/sulyos-bajban-az-ukran-mezogazdasag-aggaszto-hirek-jottek-a-foldekrol-43281" class="article-block img-square-small">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_sm.webp" media="(min-width: 768px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_sm.jpg" media="(min-width: 768px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2023/04/1682488805-rt6NQbwl2_sm.jpg" class="img-fluid" loading="lazy" alt="Súlyos bajban az ukrán mezőgazdaság: aggasztó hírek jöttek a földekről" /></picture>
		</a>
	</div>
	<div class="flex-1 pt-0 pt-sm-2">
									<div class="article-badge-v3">
								<span class="text-green weight-600">agrarszektor.hu</span>
								&nbsp; | &nbsp; <span>2023. április 26. 09:32</span></div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/fold/20230426/sulyos-bajban-az-ukran-mezogazdasag-aggaszto-hirek-jottek-a-foldekrol-43281">
						Súlyos bajban az ukrán mezőgazdaság: aggasztó hírek jöttek a földekről
					</a></h2>
				<p class="pxl-17 adelle lines-2">Veszélyesek és sarasak a földek Ukrajnában, nehéz helyzetbe kerültek a termelők.</p>
		
	</div>
</article>
<div class="nav-center d-flex d-sm-none">
	<nav>
<ul class="paginator">
		<li class="paginator-item"><span>1 / 47</span></li>
			<li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=2"><div class="svg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"><path d="M5 12h13M12 5l7 7-7 7"/></svg></div></a></li>
	</ul>
</nav>

</div>
<div class="nav-center d-none d-sm-flex">
	<nav>
        <ul class="paginator">
            
                            
            
            
                            
                
                
                                                                                        <li class="paginator-item active" aria-current="page"><span class="paginator-link">1</span></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=2">2</a></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=3">3</a></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=4">4</a></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=5">5</a></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=6">6</a></li>
                                                                                        
                                    <li class="paginator-item disabled" aria-disabled="true"><span class="paginator-link">...</span></li>
                
                
                                            
                
                
                                                                                        <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=46">46</a></li>
                                                                                                <li class="paginator-item"><a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=47">47</a></li>
                                                                        
            
                            <li class="paginator-item">
                    <a class="paginator-link" href="https://www.agrarszektor.hu/fold?page=2" rel="next" aria-label="Next &raquo;"><div class="svg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"><path d="M5 12h13M12 5l7 7-7 7"/></svg></div></a>
                </li>
                    </ul>
    </nav>

</div>		</div>
		<div class="col-md-4">
			<!-- slave:agrarszektor.desktop.fold.szponzor_box --><div id="y-adoceanindexhulcktpkomir" class="adoceanzone h-szponzor_box z-adoceanindexhulcktpkomir"><div id="adoceanindexhulcktpkomir"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.szponzor_box */
			ado.slave("adoceanindexhulcktpkomir", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhulcktpkomir").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div><div class="my-5">
<div class="box-title-wrapper">
	<h5 class="box-title">FRISS HÍREK</h5>
	<div class="bg-anim-h lightgreen"><a class="more-link" href="https://www.agrarszektor.hu/frisshirek">Tovább</a></div>
</div>
		<div class="fresh-news-item">
		
			<div class="fresh-article">
				<div class="time pt-3">
					<div class="weight-600 py-2">14:41</div>
				</div>
				<a class="fresh-title text-dark weight-600 px-3 py-3" href="/agrarpenzek/20240209/megszalltak-a-hataratkeloket-a-lengyel-gazdak-megbenitottak-az-utakat-47291">
					<div class="py-2">Megszállták a határátkelőket a lengyel gazdák: megbénították az utakat</div>
				</a>
			</div>
		
	</div>
			<div class="fresh-news-item">
		
			<div class="fresh-article">
				<div class="time pt-3">
					<div class="weight-600 py-2">13:31</div>
				</div>
				<a class="fresh-title text-dark weight-600 px-3 py-3" href="/allat/20240209/invazio-johet-idegesito-apro-rovarok-lephetik-el-a-magyar-otthonokat-47216">
					<div class="py-2">Invázió jöhet: idegesítő, apró rovarok lephetik el a magyar otthonokat</div>
				</a>
			</div>
		
	</div>
			<div class="fresh-news-item">
		
			<div class="fresh-article">
				<div class="time pt-3">
					<div class="weight-600 py-2">12:12</div>
				</div>
				<a class="fresh-title text-dark weight-600 px-3 py-3" href="/elelmiszer/20240209/ez-az-elelmiszer-sehol-mashol-sem-kaphato-vilagon-csak-a-magyarok-veszik-47286">
					<div class="py-2">Ez az élelmiszer sehol máshol sem kapható világon: csak a magyarok veszik</div>
				</a>
			</div>
		
	</div>
			<div class="fresh-news-item">
		
			<div class="fresh-article">
				<div class="time pt-3">
					<div class="weight-600 py-2">11:04</div>
				</div>
				<a class="fresh-title text-dark weight-600 px-3 py-3" href="/noveny/20240209/durva-hany-millio-hektaron-termesztenek-genetikailag-modositott-novenyeket-47277">
					<div class="py-2">Durva, hány millió hektáron termesztenek genetikailag módosított növényeket</div>
				</a>
			</div>
		
	</div>
			<div class="fresh-news-item">
		
			<div class="fresh-article">
				<div class="time pt-3">
					<div class="weight-600 py-2">09:46</div>
				</div>
				<a class="fresh-title text-dark weight-600 px-3 py-3" href="/noveny/20240209/akkora-eso-johet-amilyen-reg-volt-magyarorszagon-mutatjuk-hol-mi-varhato-47285">
					<div class="py-2">Akkora eső jöhet, amilyen rég volt Magyarországon: mutatjuk, hol, mi várható</div>
				</a>
			</div>
		
	</div>
	</div><!-- slave:agrarszektor.desktop.fold.medium_rectangle_1 --><div id="y-adoceanindexhuqmigiojmas" class="adoceanzone h-medium_rectangle_1 z-adoceanindexhuqmigiojmas"><div id="adoceanindexhuqmigiojmas"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.medium_rectangle_1 */
			ado.slave("adoceanindexhuqmigiojmas", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhuqmigiojmas").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div><div class="my-5">
    <div class="box-title">CÍMLAPRÓL AJÁNLJUK</div>
                    <article class="article-item mb-4"><!-- article-item-title-lead -->
			<a href="/gepek/20240209/egyre-tobb-magyar-mond-le-errol-a-traktorrol-pedig-regen-kapkodtak-erte-47225" class="article-block mb-2 asp16-9">
			<picture><source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_sm.webp" media="(min-width: 1200px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_sm.jpg" media="(min-width: 1200px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_md.webp" media="(min-width: 405px)" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_md.jpg" media="(min-width: 405px)" type="image/jpeg"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_sm.webp" type="image/webp"/>
<source srcset="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_sm.jpg" type="image/jpeg"/>
<img src="https://cdn.agrarszektor.hu/images/articles/lead/2024/02/1707397031-m2OrmMKTx_sm.jpg" class="img-fluid" alt="Egyre több magyar mond le erről a traktorról: pedig régen kapkodtak érte" /></picture>
		</a>
							<div class="article-badge-v2" data-categoryurl="gepek">Gépek</div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/gepek/20240209/egyre-tobb-magyar-mond-le-errol-a-traktorrol-pedig-regen-kapkodtak-erte-47225">Egyre több magyar mond le erről a traktorról: pedig régen kapkodtak érte</a></h2>
		<p class="pxl-17 adelle lines-2">2024 januárjában a magyar gazdák 46 százalékkal kevesebb traktort vettek, mint egy évvel korábban.</p>
	</article>
                            <article class="article-item mb-4"><!-- article-item-title-lead -->
							<div class="article-badge-v2" data-categoryurl="allat">Állattenyésztés</div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/allat/20240209/invazio-johet-idegesito-apro-rovarok-lephetik-el-a-magyar-otthonokat-47216">Invázió jöhet: idegesítő, apró rovarok lephetik el a magyar otthonokat</a></h2>
		<p class="pxl-17 adelle lines-2">Az egészségügyi kártevők mellett sok ízeltlábú elszaporodhat az épületekben, ráadásul nem mindig egyszerű a védekezés ellenük.</p>
	</article>
                            <article class="article-item mb-4"><!-- article-item-title-lead -->
							<div class="article-badge-v2" data-categoryurl="noveny">Növény</div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/noveny/20240208/hiaba-olcsobb-megse-veszik-a-mutragyat-a-magyar-gazdak-mi-tortenik-itt-47256">Hiába olcsóbb, mégse veszik a műtrágyát a magyar gazdák: mi történik itt?</a></h2>
		<p class="pxl-17 adelle lines-2">Év végére gyakorlatilag leállt a műtrágyapiac Magyarországon, a növényvédő szerek értékesítése azonban felfutott.</p>
	</article>
                            <article class="article-item mb-4"><!-- article-item-title-lead -->
							<div class="article-badge-v2" data-categoryurl="noveny">Növény</div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/noveny/20240209/durva-hany-millio-hektaron-termesztenek-genetikailag-modositott-novenyeket-47277">Durva, hány millió hektáron termesztenek genetikailag módosított növényeket</a></h2>
		<p class="pxl-17 adelle lines-2">A világon összesen 27 országban termesztenek GM-növényeket, az Amerikai Egyesült Államokban a legnagyobb a vetésterület.</p>
	</article>
                            <article class="article-item mb-4"><!-- article-item-title-lead -->
							<div class="article-badge-v2" data-categoryurl="allat">Állattenyésztés</div>
				<h2 class="pxl-20 weight-700"><a class="d-block" href="/allat/20240208/jo-biznisz-a-sertestartas-de-tenyleg-csak-a-nagyok-kaszalhatnak-vele-itthon-47235">Jó biznisz a sertéstartás, de tényleg csak a nagyok kaszálhatnak vele itthon?</a></h2>
		<p class="pxl-17 adelle lines-2">2023 sokkal pozitívabban zárult a magyarországi sertéstartók számára, de sok termelő jövedelmezősége most is veszélyben van.</p>
	</article>
            </div><div class="my-5">
    <div class="box-title">NÉPSZERŰ CIKKEK</div>
    <div class="popular-list">
            <div class="popular">
            <div class="popular-head d-flex align-items-center">
                <div class="popular-seq">1</div>
                <div class="popular-category"><a href="https://www.agrarszektor.hu/fold">Föld</a></div>
                <div class="popular-time">1 hónapja</div>
            </div>
            <div class="popular-article pxl-20 weight-700">
                <a href="/fold/20240109/itt-az-igazsag-ennyiert-aruljak-most-a-termofoldeket-magyarorszagon-46813">Itt az igazság: ennyiért árulják most a termőföldeket Magyarországon</a>
            </div>
        </div>
            <div class="popular">
            <div class="popular-head d-flex align-items-center">
                <div class="popular-seq">2</div>
                <div class="popular-category"><a href="https://www.agrarszektor.hu/fold">Föld</a></div>
                <div class="popular-time">2 hónapja</div>
            </div>
            <div class="popular-article pxl-20 weight-700">
                <a href="/fold/20231201/oriasi-valtozasok-varhatok-a-foldpiacon-jon-az-uj-szabalyozas-46336">Óriási változások várhatók a földpiacon: jön az új szabályozás?</a>
            </div>
        </div>
            <div class="popular">
            <div class="popular-head d-flex align-items-center">
                <div class="popular-seq">3</div>
                <div class="popular-category"><a href="https://www.agrarszektor.hu/fold">Föld</a></div>
                <div class="popular-time">1 hete</div>
            </div>
            <div class="popular-article pxl-20 weight-700">
                <a href="/fold/20240130/hihetetlen-de-igaz-ennyibe-kerul-most-egy-hektar-fold-itthon-es-az-eu-ban-47088">Hihetetlen, de igaz: ennyibe kerül most egy hektár föld itthon és az EU-ban</a>
            </div>
        </div>
            <div class="popular">
            <div class="popular-head d-flex align-items-center">
                <div class="popular-seq">4</div>
                <div class="popular-category"><a href="https://www.agrarszektor.hu/fold">Föld</a></div>
                <div class="popular-time">2 hónapja</div>
            </div>
            <div class="popular-article pxl-20 weight-700">
                <a href="/fold/20231215/valtozott-a-szabalyozas-mostantol-csak-igy-lehet-foldet-venni-magyarorszagon-46553">Változott a szabályozás: mostantól csak így lehet földet venni Magyarországon</a>
            </div>
        </div>
            <div class="popular">
            <div class="popular-head d-flex align-items-center">
                <div class="popular-seq">5</div>
                <div class="popular-category"><a href="https://www.agrarszektor.hu/fold">Föld</a></div>
                <div class="popular-time">2 hete</div>
            </div>
            <div class="popular-article pxl-20 weight-700">
                <a href="/fold/20240128/ezt-sokan-elrontjak-foldvasarlaskor-ezek-lehetnek-a-legnagyobb-buktatok-47047">Ezt sokan elrontják földvásárláskor: ezek lehetnek a legnagyobb buktatók</a>
            </div>
        </div>
        </div>
</div>
<div class="my-5">
	<div class="d-flex justify-content-center" data-box="facebook"></div>
	<script>
	var elem = $('[data-box="facebook"]');var w = elem.width();if(w > 500) {w = 500;}if(w < 180) {w = 180;}
	elem.html('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fagrarszektor.hu&tabs&width='+w+'&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=472673083113152" width="'+w+'" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>');
	</script>
</div>
<div class="my-5">
    <div class="box-title-wrapper">
        <h5 class="box-title">FOGALOMTÁR</h5>
        <div class="bg-anim-h lightgreen"><a class="more-link" href="https://www.agrarszektor.hu/fogalomtar">Tovább</a></div>
    </div>
    <a href="https://www.agrarszektor.hu/fogalomtar/szurke-farkas" class="box-glossary">
        <div class="glossary-title">Szürke farkas</div>
        <span class="adelle pxl-17">A szürke farkas a kutyafélék családjába tartozó ragadozó faj, a ma ismert házi kutya őse. A farkas falkában él és vadászik.
A szürke farkas vagy csak egyszerűen farkas (Canis lupus) az emlősök osztályának ragadozók rendjébe, ezen belül a kutyafélék családjába...</span>
        <div class="glossary-more adelle">Tovább a szócikkhez</div>
    </a>
</div>
<!-- slave:agrarszektor.desktop.fold.medium_rectangle_2 --><div id="y-adoceanindexhunnpmlldrkn" class="adoceanzone h-medium_rectangle_2 z-adoceanindexhunnpmlldrkn"><div id="adoceanindexhunnpmlldrkn"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.medium_rectangle_2 */
			ado.slave("adoceanindexhunnpmlldrkn", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhunnpmlldrkn").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div><div class="my-5">
	<div class="box-title-wrapper">
		<h5 class="box-title">KONFERENCIA</h5>
		<div class="bg-anim-h lightgreen"><a class="more-link" href="https://www.portfolio.hu/rendezvenyek" target="_blank">Tovább</a></div>
	</div>
	<div>
				<div class="mb-3">
			<a href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrofuture-2024/1639/attekintes" target="_blank"><img src="https://www.portfolio.hu/public/portfolio/conferences/agrofuture_2024_768x259-hu-1639.jpg" class="img-fluid" loading="lazy"></a>
		</div>
		<div class="mb-3">
			<h5 class="pxl-20 rustica weight-700 mb-0"><a class="text-dark" href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrofuture-2024/1639/attekintes" target="_blank">AgroFuture 2024</a></h5>
			<div class="adelle lines-2 pxl-17">Még a legjobb áron!</div>
		</div>
				<div class="mb-3">
			<a href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrofood-2024/1641/attekintes" target="_blank"><img src="https://www.portfolio.hu/public/portfolio/conferences/portfolio_agrofood_2024_768x259-hu-1641.jpg" class="img-fluid" loading="lazy"></a>
		</div>
		<div class="mb-3">
			<h5 class="pxl-20 rustica weight-700 mb-0"><a class="text-dark" href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrofood-2024/1641/attekintes" target="_blank">AgroFood 2024</a></h5>
			<div class="adelle lines-2 pxl-17">Még a legjobb áron!</div>
		</div>
				<div class="mb-3">
			<a href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrarium-2024/1625/attekintes" target="_blank"><img src="https://www.portfolio.hu/public/portfolio/conferences/agrarium_2024_768x259-hu-1625.jpg" class="img-fluid" loading="lazy"></a>
		</div>
		<div class="mb-3">
			<h5 class="pxl-20 rustica weight-700 mb-0"><a class="text-dark" href="https://www.portfolio.hu/rendezvenyek/konferencia-agrar/agrarium-2024/1625/attekintes" target="_blank">Agrárium 2024</a></h5>
			<div class="adelle lines-2 pxl-17">Még early bird kedvezménnyel!</div>
		</div>
			</div>
</div>
<!-- slave:agrarszektor.desktop.fold.medium_rectangle_3 --><div id="y-adoceanindexhukogtoinfem" class="adoceanzone h-medium_rectangle_3 z-adoceanindexhukogtoinfem"><div id="adoceanindexhukogtoinfem"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.medium_rectangle_3 */
			ado.slave("adoceanindexhukogtoinfem", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7", onServerEmission: function(){document.getElementById("y-adoceanindexhukogtoinfem").classList.add("zonewrapper");}, onServerEmissionEmpty: function(){}});
			</script></div><div class="my-5">
    <article class="article-item mb-4"><!-- article-item-title-lead -->
				<div class="article-badge-v3 text-green nolink">Támogatott tartalom</div>
		<h2 class="pxl-20 weight-700"><a class="d-block" href="/agrofokusz/20240207/12-feletti-lejtokon-torteno-gazdalkodas-technologiai-megoldasai-47234">12% feletti lejtőkön történő gazdálkodás technológiai megoldásai (x)</a></h2>
		<p class="pxl-17 adelle lines-2">Magyarország 32%-a 200 méternél magasabban fekvő dombság.</p>
	</article>
    <article class="article-item mb-4"><!-- article-item-title-lead -->
				<div class="article-badge-v3 text-green nolink">Támogatott tartalom</div>
		<h2 class="pxl-20 weight-700"><a class="d-block" href="/agrofokusz/20240207/tudomanyos-informacioatadas-hiteles-forrasbol-agrarszakembereknek-47254">Tudományos információátadás hiteles forrásból agrárszakembereknek (x)</a></h2>
		<p class="pxl-17 adelle lines-2">2024. március 6-án AGRÁRTRENDEK 2024 KONFERENCIA címen szakmai napot szervez a Szegedi Tudományegyetem Mezőgazdasági Kara és a Hód-Mezőgazda Zrt.</p>
	</article>
    <article class="article-item mb-4"><!-- article-item-title-lead -->
				<div class="article-badge-v3 text-green nolink">Támogatott tartalom</div>
		<h2 class="pxl-20 weight-700"><a class="d-block" href="/agrofokusz/20240206/lg-napraforgok-a-stabilitas-jegyeben-47202">LG napraforgók a stabilitás jegyében (x)</a></h2>
		<p class="pxl-17 adelle lines-2">Az aszálytól sújtott területeken jobb alternatívának bizonyult a napraforgó, mint a kukorica és tavaly sem hagyta cserben a termelőket.</p>
	</article>
</div>
		</div>
	</div>
</div>

<footer class="pt-3 mb-0">
	<section class="footer-up">
		<div class="container">
			<div class="row py-4 px-4">
				<div class="col text-center">
					<div class="d-flex flex-column flex-sm-row justify-content-center align-items-center" style="gap:0">
						<div class="px-4 py-4 footer-icons">
                            <a href="mailto:agrarszektor@agrarszektor.hu"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-email.svg"></a>
                            <a href="https://www.facebook.com/agrarszektor.hu"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-facebook.svg"></a>
                            <a href="https://www.youtube.com/channel/UCImgiGC_5tbC82_F9qHQNKQ"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-youtube.svg"></a>
                            <a href="https://www.instagram.com/agrarszektor.hu/"><img class="icon-hover" src="https://cdn.agrarszektor.hu/assets/images/social-instagram.svg"></a>
						</div>
						<div class="d-flex justify-content-center align-items-center pr-4">
							<div class="px-4 text-left pxl-14">
								Szeretnél jól értesült lenni?<br>
								<a class="text-green" href="https://www.agrarszektor.hu/hirlevel">Iratkozz fel hírlevelünkre</a>
							</div>
							<div class="px-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" width="62" height="62" xml:space="preserve"><path fill="none" stroke="#000" stroke-width="3.104" stroke-miterlimit="10" d="M49.1 3.2c0 5.1 4.2 9.3 9.3 9.3"/><path d="M42.4 9c0 1 .8 1.8 1.8 1.8S46 10 46 9s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8"/><path fill="none" stroke="#000" stroke-width="4.138" stroke-miterlimit="10" d="M47.1 2.1h12.4v12.4c0 6.9-5.6 12.4-12.4 12.4s-12.4-5.6-12.4-12.4S40.2 2.1 47.1 2.1z"/><path fill="none" stroke="#000" stroke-width="3.104" stroke-miterlimit="10" d="M19.1 3.6v15.5H3.6"/><path fill="none" stroke="#000" stroke-width="3.104" stroke-miterlimit="10" d="M13 3.6V13H3.6M2 2l21.2 21.2"/><path fill="none" stroke="#000" stroke-width="4.138" stroke-miterlimit="10" d="M14.5 2.1H2.1v12.4c0 6.9 5.6 12.4 12.4 12.4s12.4-5.6 12.4-12.4S21.3 2.1 14.5 2.1zM14.5 59.5H2.1V47.1c0-6.9 5.6-12.4 12.4-12.4s12.4 5.6 12.4 12.4-5.6 12.4-12.4 12.4z"/><path d="M6 49.1c.2.8.5 1.5.9 2.2.9-.7 2.2-.5 2.9.4.5.7.5 1.7 0 2.5.7.4 1.4.7 2.2.9.1-1.1 1.2-1.9 2.3-1.8.9.1 1.7.9 1.8 1.8.8-.2 1.5-.5 2.2-.9-.7-.9-.6-2.2.3-2.9.8-.6 1.8-.6 2.6 0 .4-.7.7-1.4.9-2.2-1.1-.1-2-1.1-1.9-2.2.1-1 .9-1.8 1.9-1.9-.2-.8-.5-1.5-.9-2.2-.9.7-2.2.6-2.9-.3-.6-.8-.6-1.9 0-2.6-.7-.4-1.4-.7-2.2-.9-.1 1.1-1.2 1.9-2.3 1.8-.9-.1-1.7-.8-1.8-1.8-.8.2-1.5.5-2.2.9.7.9.5 2.2-.4 2.9-.7.6-1.7.6-2.5 0-.4.8-.7 1.5-.9 2.2 1.1.2 1.9 1.2 1.7 2.3-.1 1-.8 1.7-1.7 1.8m8-5.6c2 0 3.6 1.6 3.6 3.6S16 50.7 14 50.7s-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6"/><path fill="none" stroke="#000" stroke-width="4.138" stroke-miterlimit="10" d="M44.5 44.5h14.7c-1.4-6.7-8-11-14.7-9.6-6.7 1.4-11 8-9.6 14.7 1 4.8 4.8 8.5 9.6 9.6V44.5z"/><path fill="none" stroke="#000" stroke-width="3.104" stroke-miterlimit="10" d="M51.2 59.5v-8.3h8.3c0 4.6-3.7 8.3-8.3 8.3z"/></svg></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="footer-down">
		<div class="container">
			<div class="row py-5 px-4">
				<div class="col text-center">
					<ul class="list-unstyled flex-wrap d-flex justify-content-center m-0 p-0 pxl-14 weight-600">
						<li><span class="text-green">© 2022 Agrárszektor</span></li>
						<li><a href="https://www.agrarszektor.hu/info/impresszum">impresszum</a></li>
						<li><a href="javascript:window.__tcfapi('displayConsentUi', 2, function() {} );">süti beállítások</a></li>
						<li><a href="https://www.agrarszektor.hu/info/jogi-nyilatkozat">jogi nyilatkozat</a></li>
						<li><a href="https://www.agrarszektor.hu/info/kapcsolat">kapcsolat</a></li>
						<li><a href="https://cdn.portfolio.hu/files/a/adatkezelesi-tajekoztato-honlap-net-media-agrarszektor-20201119.pdf" target="_blank">adatvédelem</a></li>
						<li><a href="https://portfoliocsoport.hu/mediaajanlat#agrarszektor" target="_blank">médiaajánlat</a></li>
						<li><a href="https://portfoliocsoport.hu/karrier" target="_blank">karrier</a></li>
						<li><a href="https://cdn.portfolio.hu/files/a/agrarszektor-felhasznalasi-feltetelekk.pdf" target="_blank">ÁSZF</a></li>
						<li><a href="/rss" target="_blank">RSS</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</footer>
<!-- slave:agrarszektor.desktop.fold.extra_1 --><div id="adoceanindexhuwkkjbuftly"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.extra_1 */
			ado.slave("adoceanindexhuwkkjbuftly", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7"});
			</script><!-- slave:agrarszektor.desktop.fold.extra_2 --><div id="adoceanindexhutlrperphux"></div>
			<script type="text/javascript">
			/* (c)AdOcean 2003-2022, agrarszektor.desktop.fold.extra_2 */
			ado.slave("adoceanindexhutlrperphux", {myMaster: "HKOgM3AIl4_FfTyPJ9zA1jmgHT7QL0dsmG44ACCaDyT.V7"});
			</script><!-- (C)2000-2014 Gemius SA - gemiusAudience / agrarszektor.hu / Fooldal -->
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var pp_gemius_identifier = '.KtFZ..dmcaougw05hR9Ibb.roc8IBsqzHo9IR0NU_n.47';
var pp_gemius_use_cmp = true;
var pp_gemius_cmp_timeout = Infinity;
// lines below shouldn't be edited
function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
gt.setAttribute('defer','defer'); gt.src=l+'://gahu.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
//--><!]]>
</script>

</body>
</html>ulBQotAPH.d7"});
			</script><!-- (C)2000-2014 Gemius SA - gemiusAudience / agrarszektor.hu / Fooldal -->
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var pp_gemius_identifier = '.KtFZ..dmcaougw05hR9Ibb.roc8IBsqzHo9IR0NU_n.47';
var pp_gemius_use_cmp = true;
var pp_gemius_cmp_timeout = Infinity;
// lines below shouldn't be edited
function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
gt.setAttribute('defer','defer'); gt.src=l+'://gahu.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
//--><!]]>
</script>

</body>
</html>