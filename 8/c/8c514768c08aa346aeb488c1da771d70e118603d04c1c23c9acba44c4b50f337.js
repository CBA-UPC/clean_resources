!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __assign=this&&this.__assign||__awaiter=this&&this.__awaiter||__generator=this&&this.__generator||__rest=this&&this.__rest||__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!),);var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(){function e(e,t,r){return r.reset?UserWayWidgetApp.ContextHolder.remediationResources?(UserWayWidgetApp.ContextHolder.remediationResources.Forms.forEach(function(e){c[e.xpath]=e}),e()):void(a.enabled?e():t()):e()}unction r(e){if(a.enabled){Array.from(document.querySelectorAll("form")).filter(function(e){return t(e)&&Array.from(e.querySelectorAll("input, textarea, select")).length}).forEach(function(t){e&&n(t);var r=t.querySelector('button[type="submit"], input[type="submit"]');r&&!r.hasAttribute(l)&&(r.addEventListener("click",,r.setAttribute(l,"submit"))})}}function n(e){function r(t){for(var r=[],n=t.parentElement;n&&n!==e;)r.push(n),n=n.parentElement;return{element:t,parents:r}}var n=Array.from(e.querySelectorAll('[class*="error" i], [class*="message" i]')).filter(function(e){if(-1!==["DIV","SPAN","UL","LI","LABEL"].indexOf(e.nodeName)&&!e.querySelector(u.focusableElementsSelector)&&t(e)&&e.textContent)return!0});if(n.length){var i=Array.from(e.querySelectorAll("input, textarea, select")).filter(function(e){return t(e)}),o=[];i.forEach(,n.forEach(function(e){var t,n,i,a,u=r(e).parents,c=null,s=u.length;try{for(var d=__values(o),f=d.next();!f.done;f=d.next())for(var p=f.value,m=p.element,h=p.parents,g=0;g<u.length;g++){var y=u[g];try{for(var b=(i=void 0,__values(h)),v=b.next();!v.done;v=b.next()){var A=v.value;y===A&&g<s&&(s=g,c=m)}}catch(e){i={error:e}}finally{try{v&&!v.done&&(a=b.return)&&a.call(b)}finally{if(i)throw i.error}}}}catch(e){t={error:e}}finally{try{f&&!f.done&&(n=d.return)&&n.call(d)}finally{if(t)throw t.error}}if(c&&!c.hasAttribute("aria-describedby")){var _=e.id;_||(_="uwRmForms_"+(new Date).getTime(),e.id=_,e.setAttribute(l,"in-validation")),c.setAttribute("aria-describedby",""+_)}})}}var i=UserWayWidgetApp.addLib("REMEDIATION_FORM_LABEL"),o=UserWayWidgetApp.getLib("remediationConfig"),a=o.forms||{},u=UserWayWidgetApp.getLib("remediation_util"),l="data-uw-rm-form",c={};i.awaitForResources=function(t,r){return new Promise(function(t,n){e(t,n,r)})},i.doRemediation=function(e,t,n){
return new Promise(function(e,t){try{r(n.reset),e()}catch(e){t()}})}}();var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!),);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!),);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!),);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!),);var __read=this&&this.__read||__values=this&&this.__values||__spreadArray=this&&this.__spreadArray||!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!);var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!);var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!);var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!);var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__assign.apply(this,arguments)},__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!}();var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__assign.apply(this,arguments)},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}}(}();var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}}(}();var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__assign.apply(this,arguments)}}(}(}(}();var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}}();var __read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};!function(){function e(e){P&&P.time(efunction n(e){return e?__spreadArray([q,j,B],__read(G.map(function(e){return[e]})),!1):__spreadArray([["REMEDIATION_FORM_LABEL","REMEDIATION_KEYBOARD_NAVIGATION"]],__read(G.ma})),!1tion s(){p("remediation-count",R.getHelpersOutcomeCounters()ar m,h,g,y,b=UserWayWidgetApp.addLib("remediation_manager"),v=UserWayWidgetApp.getLib("event_emitter"),A=UserWayWidgetApp.getLib("dom_observer"),_=UserWayWidgetApp.getLib("remediation_utils"),E=UserWayWidgetApp.getLib("util"),w=UserWayWidgetApp.getLib("remediation_processor"),S=UserWayWidgetApp.getLib("cer_observer"),x=UserWayWidgetApp.getLib("cpr_patterns_observer"),I=UserWayWidgetApp.getLib("remediationConfig"),O=UserWayWidgetApp.ContextHolder.config,R=UserWayWidgetApp.getLib("remediation_results_holder").instance,W=UserWayWidgetApp.getLib("performance_logger");b.ResultsHolder=R;var N=A.DOM_OBSERVER_DOM_CHANGED_EVENT,L=(null===(m=null===O||void 0===O?void 0:O.tunings)||void 0===m?void 0:m.tech_rem_in_throttle_ms)?Number(null===(h=null===O||void 0===O?void 0:O.tunings)||void 0===h?void 0:h.tech_rem_in_throttle_ms):1e3,C=null===(g=null===O||void 0===O?void 0:O.tunings)||void 0===g?void 0:g.tech_rem_dom,T=null===(y=null===O||void 0===O?void 0:O.tunings)||void 0===y?void 0:y.tech_rem_on_tab,k=document.querySelector("html"),U=E.isMobile(),P=W.getInstance?W.getInstance("Remediation"):null,},H=!!O.remediation&&!D(),M=!1;try{UserWayWidgetApp.setDebugMod},M=window.localStorage.getItem("userway-rm-debug")}catch(e){}var F={iterationInProgress:!1,locationChanged:!0,domChangesEnqueued:[],completedEventFired:!1,debugMode:M},q=H?["REMEDIATION_AUTO_PLAY_VIDEO","REMEDIATION_FORM_LABEL","REMEDIATION_SITE_LANGUAGE","REMEDIATION_MARQUEE","REMEDIATION_SCREEN_READER_BASIC","REMEDIATION_SKIP_NAVIGATION_LINK","REMEDIATION_META_VIEWPORT"]:[],j=H?["REMEDIATION_EXTERNAL_LINK_TARGETS}("REMEDIATION_KEYBOARD_NAVIGATION"),"REMEDIATION_VAGUE_LINK","REMEDIATION_IFRAME_TITLE","REMEDIATION_PDF_DOCUMENTS"].filter(Boolean):[],B=H?["REMEDIATION_HEADING"]:[],G=["REMEDIATION_COLOR_CONTRAST"],V=H?["REMEDIATION_FOCUS_STYLE","REMEDIATION_PER_SITE","REMEDIATION_POPUP"]:[]})()&&B.push("REMEDIATION_SOCIAL_SENSITIVITY");var K=[].concat(q,j,B,G),}();b.HelperCallbackAggregator=new Y,(!T}()||UserWayWidgetApp.ContextHolder.config.isMobile)&&u();var X={"get-site-info":f,"remediation-count":s,"all-data":d,"element-is-visible},"element-highlight},"app-key-nav-enabled":function(e){c(e)},remediatio},"remediation-check},"add-dynamically":l},Q=UserWayWidgetApp.getLib("REMEDIATION_FOCUS_STYLE"),z={"custom-focus-get":function(e){p("custom-focus-get",Q.getFocusStyle())},"custom-focus-update}},J=UserWayWidgetApp.getLib("REMEDIATION_SKIP_NAVIGATION_LINK"),$={"skip-links-get},"skip-links-update":function(e){}},Z=UserWayWidgetApp.getLib("REMEDIATION_COLOR_CONTRAST"),ee={"enable-color-contrast},"fix-color-contrast},"fix-all-color-contrast":function(){Z.autofixAllIssues(),o()},"reset-all":function(){Z.resetIssuesFixes(),o()},"reset-autofixed}},te=UserWayWidgetApp.getLib("REMEDIATION_VAGUE_LINK"),re={"vague-link-update}},ne=Object.assign({},X,z,$,ee,re),i};E.registerPostMessageListener(ie)}();