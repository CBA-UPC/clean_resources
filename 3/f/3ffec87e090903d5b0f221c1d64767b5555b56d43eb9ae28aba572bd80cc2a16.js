(()=>{"use strict";var e,t,n={},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+"/3afb34170d18de455d37.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Destination:",i.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={412:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)c(i)}for(t&&t(n);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkDestination=self.webpackChunkDestination||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o={};i.d(o,{default:()=>l});const a="analytics_snap_capi_click_id",s="analytics_snap_capi_scid_cookie",c={get:e=>window.localStorage.getItem(e),set:(e,t)=>window.localStorage.setItem(e,t)},l=function(e){const t=async t=>(await i.e(845).then(i.bind(i,3962))).generatePlugins(e,t,t.subscriptions||[]);return t.pluginName=e.name,t}({name:"Snap Browser Plugins",mode:"device",initialize:async({analytics:e})=>{const t=e.storage??c,n=(e=>{const t=e+"=",n=decodeURIComponent(document.cookie).split("; ");for(const e of n)if(e.startsWith(t))return e.substring(t.length);return null})("_scid");n&&t.set(s,n);const r=new URLSearchParams(window.location.search).get("ScCid")||null;return r&&t.set(a,r),{}},settings:{},actions:{snapPlugin:{title:"Snap Browser Plugin",description:"Enriches all Segment payloads with Snap click_id Querystring and _scid Cookie values",platform:"web",hidden:!1,defaultSubscription:'type = "track" or type = "identify" or type = "page" or type = "group" or type = "alias"',fields:{},lifecycleHook:"enrichment",perform:(e,{context:t,analytics:n})=>{const r=n.storage??c,i=r.get(s),o=r.get(a);if(i||o){const e={};o&&(e.click_id=o),i&&(e.uuid_c1=i),(!1!==t.event.integrations?.All||t.event.integrations["Snap Conversions Api"])&&t.updateEvent("integrations.Snap Conversions Api",e)}}}}});window["snap-pluginsDestination"]=o.default})();
//# sourceMappingURL=f66f430f048c0ca40804.js.mapw)(_.dateSent),1)]),(0,a._)("p",null,[l,(0,a._)("span",null,(0,a.zw)(n.message.participant_from.display_name),1),(0,a.Uk)(" <"+(0,a.zw)(n.message.participant_from.email)+"> ",1),n.message.participants_to.length>0?((0,a.wg)(),(0,a.iD)("span",r,[d,c,(0,a.Wm)(E,{items:n.message.participants_to},{listItem:(0,a.w5)((e=>[(0,a.Wm)(C,{match:e.item.person_match_result,url:e.item.person_url,name:e.item.display_name,email:e.item.email,inbound:e.item.is_inbound_email,target:"_blank"},null,8,["match","url","name","email","inbound"])])),_:1},8,["items"])])):(0,a.kq)("v-if",!0),n.message.participants_cc.length>0?((0,a.wg)(),(0,a.iD)("span",m,[u,h,(0,a.Wm)(E,{items:n.message.participants_cc},{listItem:(0,a.w5)((e=>[(0,a.Wm)(C,{match:e.item.person_match_result,url:e.item.person_url,name:e.item.display_name,email:e.item.email,inbound:e.item.is_inbound_email,target:"_blank"},null,8,["match","url","name","email","inbound"])])),_:1},8,["items"])])):(0,a.kq)("v-if",!0)]),n.message.participants_body.length>0?((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",null,[(0,a._)("span",g,[(0,a.Uk)(" Other email addresses found"),(0,a.Wm)(S,{title:"Any email address included in this email thread.\n                                Email logs are automatically created for any email addresses\n                                found on a Muck Rack profile or your organization’s Custom Contacts."})])]),(0,a.Wm)(E,{items:n.message.participants_body},{listItem:(0,a.w5)((e=>[(0,a.Wm)(C,{match:e.item.person_match_result,url:e.item.person_url,name:e.item.display_name,email:e.item.email,inbound:e.item.is_inbound_email,target:"_blank"},null,8,["match","url","name","email","inbound"])])),_:1},8,["items"])])):(0,a.kq)("v-if",!0),f,(0,a.Wm)(D,{html:_.messageBody,styled:""},null,8,["html"]),n.message.attachments.length>0?((0,a.wg)(),(0,a.iD)("div",b,[y,(0,a._)("div",null,[(0,a._)("h5",null,[(0,a.Uk)(" Attachments"),(0,a.Wm)(S,{title:"Email attachments are not visible in Muck Rack.\n                                Find this email in your email client to view attachments included."})])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.message.attachments,((e,t)=>((0,a.wg)(),(0,a.iD)("span",{key:t,class:"badge badge-light"},[w,(0,a.Uk)((0,a.zw)(e.name),1)])))),128))])):(0,a.kq)("v-if",!0)],2)}]]),T=(0,a._)("i",{class:"icon-left text-muted fa fa-envelope"},null,-1),W={key:1,class:"endless_loading",title:"Loading"},O={key:0,class:"mr-email-logging-footer-content"},Z=["href"];const N={components:{Modal:n(49141).Z,EmailLoggingContent:U},props:{message:{type:Object,default:()=>({})},messageUrl:{type:String,default:""}},data:()=>({isVisible:!1}),mounted(){this.$refs.configModal.show(),this.$root.$el.parentElement.classList.remove("d-none")},methods:{handleShown(){this.isVisible=!0}}},R=(0,D.Z)(N,[["render",function(e,t,n,s,i,o){const l=(0,a.up)("EmailLoggingContent"),r=(0,a.up)("Modal");return(0,a.wg)(),(0,a.j4)(r,{ref:"configModal","done-label":"Close","done-classes":"btn-gray-200","modal-size":"modal-lg",onShown:o.handleShown},{heading:(0,a.w5)((()=>[T,(0,a.Uk)(" Email log details ")])),content:(0,a.w5)((()=>[i.isVisible?((0,a.wg)(),(0,a.j4)(l,{key:0,message:n.message},null,8,["message"])):((0,a.wg)(),(0,a.iD)("div",W))])),"footer-content":(0,a.w5)((()=>[n.messageUrl?((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("a",{href:n.messageUrl,class:"mr-email-logging-link text-muted",target:"_blank"},"Create Custom Contacts for unmatched participants",8,Z)])):(0,a.kq)("v-if",!0)])),_:1},8,["onShown"])}]]);var F=n(83232),K=n.n(F);function P(e){return new Promise(((t,n)=>{K().ajax({url:"/emails/incoming/api/messages/"+e,method:"get",headers:{"content-type":"application/json"},success:function(e){t(e)},error:function(e){n(e)}})}))}function Y({component:e,props:t}){return(0,a.ri)(e,t).mount(".js-email-logging")}function V(e,t,n=null){return t[e]?Y({component:R,props:{message:t[e],messageUrl:n}}):P(e).then((a=>(t[e]=a,Y({component:R,props:{message:t[e],messageUrl:n}})))).catch((()=>{}))}function X(){const e={},t=document.querySelector(".js-mr-activity-feed-list"),n=document.querySelector(".js-tableview-tabulator"),a=document.querySelector(".js-profile-activity-detail"),s=".js-activity-view-email-btn";if(n)n.addEventListener("click",(t=>{if(!t.target.matches(`${s}, ${s} *`))return!1;const n=t.target.dataset.messageUrl;V(t.target.dataset.id,e,n)}));else if(t)t.addEventListener("click",(t=>{if(!t.target.matches(`${s}, ${s} *`))return!1;const n=t.target.dataset.messageUrl;V(t.target.dataset.id,e,n)}));else if(a){const t=document.querySelector(".mr-content"),n=document.querySelector(".js-email-logging"),a=n.dataset.id;a&&(n.classList.remove("d-none"),n.parentElement.removeChild(n),t.appendChild(n),P(a).then((t=>(e[a]=t,Y({component:U,props:{message:e[a]}})))).catch((()=>{})))}else{document.querySelectorAll(s).forEach((t=>{t.addEventListener("click",(t=>{V(t.currentTarget.dataset.id,e)}))}))}}},25398:(e,t,n)=>{function a(e){const t=(new DOMParser).parseFromString(e,"text/html"),n=t.querySelector("head"),a=t.createElement("link");a.rel="stylesheet",a.href="https://use.typekit.net/skb3equ.css",a.type="text/css";const s=t.createElement("style");return s.innerHTML='\n        html {\n            overflow: hidden;\n        }\n        body {\n            font-family: "canada-type-gibson", "Helvetica Neue", Helvetica, sans-serif;\n            font-size: 14px;\n            line-height: 1.428571429;\n            color: #333333;\n            margin: 0;\n        }\n        a {\n            color: #337ab7;\n            text-decoration: none;\n        }\n        a:hover,\n        a:focus {\n            color: #23527c;\n            text-decoration: underline;\n        }\n        p {\n            margin: 10px 0;\n        }\n    ',n.appendChild(a),n.appendChild(s),(new XMLSerializer).serializeToString(t)}function s(e,t=!0){return e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),t&&(e=e.replace(/"/g,"&quot;").replace(/'/g,"&#x27;")),e}function i({el:e,eventName:t,data:n,bubbles:a=!1}){let s;window.CustomEvent&&"function"==typeof window.CustomEvent?s=new CustomEvent(t,{detail:n,bubbles:a}):(s=document.createEvent("CustomEvent"),s.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(s)}function o(e,t=null){const n=t||`${e.id}-vue-mount`,a=document.createElement("div");return a.setAttribute("id",n),e.insertAdjacentElement("afterend",a),a}function l(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.children}n.d(t,{HC:()=>o,LQ:()=>i,R3:()=>l,bt:()=>a,r:()=>s})},58750:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(27856),s=n.n(a);function i(e){return function(t,n){!function(e){if(e)for(const[t,n]of e)s().addHook(t,n)}(e);try{return s().sanitize(t,n)}finally{!function(e){if(e)for(const[t]of e)s().removeHook(t)}(e)}}}},80556:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(70942);const s={class:"CommaSeparatedList"},i=["href","title","target","rel"],o=["title"],l={key:2};const r={props:{items:{type:Array,default:()=>[]},target:{type:String,default:null},rel:{type:String,default:null},itemClass:{type:String,default:null}},methods:{isObject:e=>"object"==typeof e}};const d=(0,n(83744).Z)(r,[["render",function(e,t,n,r,d,c){return(0,a.wg)(),(0,a.iD)("span",s,[(0,a.kq)(" note: formatting of this template is in order to preserve spacing! "),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,((t,s)=>((0,a.wg)(),(0,a.iD)("span",{key:s},[s>0?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)(", ")],64)):(0,a.kq)("v-if",!0),(0,a.WI)(e.$slots,"listItem",{item:t,index:s},(()=>[t.url?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.url,title:t.name,target:n.target,rel:n.rel,class:(0,a.C_)(n.itemClass)},(0,a.zw)(t.name),11,i)):c.isObject(t)?((0,a.wg)(),(0,a.iD)("span",{key:1,title:t.title},(0,a.zw)(t.name),9,o)):((0,a.wg)(),(0,a.iD)("span",l,(0,a.zw)(t),1))]))])))),128))])}]])},49141:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(70942);const s={ref:"modal",class:"modal fade","data-bs-backdrop":"static","aria-modal":"true",role:"dialog",tabindex:"-1"},i={class:"modal-header"},o={class:"modal-title fs-7 mt-0 mb-0"},l={class:"modal-body"};var r=n(36468);const d={props:{modalSize:{type:String,default:""},cancelLabel:{type:String,default:"Cancel"},doneLabel:{type:String,default:"Done"},doneClasses:{type:String,default:"btn-primary"},footerClasses:{type:String,default:""},showClose:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!1},showModalFooter:{type:Boolean,default:!0},backdropCancels:{type:Boolean,default:!0},backdropStatic:{type:Boolean,default:!1},escapeCancels:{type:Boolean,default:!0},enterAccepts:{type:Boolean,default:!0},autohide:{type:Boolean,default:!0}},emits:["cancel","done","hidden","shown"],data:function(){return{active:!1,ignoreBackdropClick:!1}},created:function(){this._keyhandler=e=>{if("TEXTAREA"===e.target.nodeName||"SELECT"===e.target.nodeName)return e.stopPropagation(),!1;switch(e.which){case 27:this.handleEscape();break;case 13:this.handleEnter()}}},mounted(){r.u_.getOrCreateInstance(this.$refs.modal),this.$refs.modal.addEventListener("shown.bs.modal",this.shown),this.$refs.modal.addEventListener("hidden.bs.modal",this.hidden),this.$refs.modal.addEventListener("hidePrevented.bs.modal",this.handleBackdropClick)},beforeUnmount:function(){this.dropKeyHandler(),removeEventListener("shown.bs.modal",this.shown),removeEventListener("hidden.bs.modal",this.hidden),removeEventListener("hidePrevented.bs.modal",this.handleBackdropClick),r.u_.getOrCreateInstance(this.$refs.modal).dispose()},methods:{shown(){this.escapeCancels&&this.addKeyHandler(),this.$emit("shown")},hidden(){this.dropKeyHandler(),this.$emit("hidden")},show(){this.active=!0,r.u_.getOrCreateInstance(this.$refs.modal).show()},hide(){this.active=!1,r.u_.getOrCreateInstance(this.$refs.modal).hide()},handleBackdropClick(){if(!this.backdropStatic){if(!this.ignoreBackdropClick)return this.backdropCancels?this.handleCancel():this.hide();this.ignoreBackdropClick=!1}},handleEscape(){this.escapeCancels&&this.active&&this.handleCancel()},handleEnter(){this.enterAccepts&&this.active&&this.handleDone()},handleCancel(){this.hide(),this.$emit("cancel")},handleDone(){this.autohide&&this.hide(),this.$emit("done")},onDialogMousedown(){const e=this.$refs.modal,t=n=>{e.removeEventListener("mouseup",t),n.target===e&&(this.ignoreBackdropClick=!0)};e.addEventListener("mouseup",t)},addKeyHandler(){document.body.addEventListener("keydown",this._keyhandler)},dropKeyHandler(){document.body.removeEventListener("keydown",this._keyhandler)}}};const c=(0,n(83744).Z)(d,[["render",function(e,t,n,r,d,c){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",{class:(0,a.C_)(["modal-dialog",n.modalSize])},[(0,a._)("div",{class:"modal-content",onMousedown:t[3]||(t[3]=(...e)=>c.onDialogMousedown&&c.onDialogMousedown(...e))},[(0,a._)("div",i,[(0,a._)("h4",o,[(0,a.WI)(e.$slots,"heading")]),n.showClose?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-hidden":"true","aria-label":"Close",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>c.handleCancel&&c.handleCancel(...e)),["stop","prevent"]))})):(0,a.kq)("v-if",!0)]),(0,a._)("div",l,[(0,a.WI)(e.$slots,"content")]),n.showModalFooter?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,a.C_)(["modal-footer",n.footerClasses])},[(0,a.WI)(e.$slots,"footer-content"),(0,a.WI)(e.$slots,"actions",{modal:this},(()=>[n.showCancel?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn btn-link",onClick:t[1]||(t[1]=(0,a.iM)(((...e)=>c.handleCancel&&c.handleCancel(...e)),["stop","prevent"]))},(0,a.zw)(n.cancelLabel),1)):(0,a.kq)("v-if",!0),(0,a._)("button",{class:(0,a.C_)(["btn",n.doneClasses]),onClick:t[2]||(t[2]=(0,a.iM)(((...e)=>c.handleDone&&c.handleDone(...e)),["stop","prevent"]))},(0,a.zw)(n.doneLabel),3)]))],2)):(0,a.kq)("v-if",!0)],32)],2)],512)}]])},50042:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(36468);const s={compatConfig:{RENDER_FUNCTION:!1},props:{content:{type:String,required:!0},placement:{type:String,default:"top"}},mounted(){new a.u(this.$el)},beforeUnmount(){a.u.getInstance(this.$el).dispose()},methods:{getFirstElement(){const e=this.$slots.default();if(!Array.isArray(e))return null;let t=null;for(let n=0;n<e.length;n++)e[n]&&e[n].tag&&(t=e[n]);return t}},render(){const e=this.getFirstElement();return e?(e.data["data-bs-toggle"]="tooltip",e.data["data-bs-placement"]=this.placement,e.data.title=this.content,e):null}}},24667:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(70942);const s={components:{Tooltip:n(50042).Z},props:{title:{type:String,required:!0},size:{type:String,required:!1,default:null},color:{type:String,default:""},icon:{type:String,default:"circle-info"}},computed:{iconClassObject(){const e={"fs-3":"small"===this.size,"fs-4":"medium"===this.size,"fs-6":"large"===this.size};return this.color&&(e[`text-${this.color}`]=!0),e[`fa-${this.icon}`]=!0,e}}};const i=(0,n(83744).Z)(s,[["render",function(e,t,n,s,i,o){const l=(0,a.up)("Tooltip");return(0,a.wg)(),(0,a.j4)(l,{content:n.title},{default:(0,a.w5)((()=>[(0,a._)("i",{class:(0,a.C_)(["fa icon-right",o.iconClassObject])},null,2)]),void 0,!0),_:1},8,["content"])}]])}}]);
//# sourceMappingURL=8463.7434cf5cfd20abef0470.bundle.js.map
//# debugId=a38cc982-21d0-573c-9c73-95ad84cfbfa4