"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[78],{6817:(e,t,i)=>{i.r(t),i.d(t,{Aggregate:()=>g});var r,n,s,a=i(7022),o=i(2438),h=i(4045),c=i(4051),u=i(4917),d=i(6562),v=i(5330),f=i(6486),m=i(4329),l=i(2374);class g extends v.m{constructor(e,t){var i;super(e,t,f.t),i=this,this.eventsPerMinute=240,this.harvestTimeSeconds=(0,d.Mt)(this.agentIdentifier,"page_action.harvestTimeSeconds")||(0,d.Mt)(this.agentIdentifier,"ins.harvestTimeSeconds")||30,this.eventsPerHarvest=this.eventsPerMinute*this.harvestTimeSeconds/60,this.referrerUrl,this.currentEvents,this.events=[],this.att=(0,d.C5)(this.agentIdentifier).jsAttributes,l.il&&document.referrer&&(this.referrerUrl=(0,u.f)(document.referrer)),(0,h.X)("api-addPageAction",(function(){return i.addPageAction(...arguments)}),this.featureName,this.ee);var r=new c.o("ins",{onFinished:function(){return i.onHarvestFinished(...arguments)}},this);r.harvest.on("ins",(function(){return i.onHarvestStarted(...arguments)})),this.ee.on("drain-".concat(this.featureName),(()=>{this.blocked||r.startTimer(this.harvestTimeSeconds,0)})),(0,h.X)("block-ins",(()=>{this.blocked=!0,r.stopTimer(!0)}),this.featureName,this.ee),(0,m.L)(this.agentIdentifier,this.featureName)}onHarvestStarted(e){const{userAttributes:t,atts:i}=(0,d.C5)(this.agentIdentifier);var r={qs:{ua:t,at:i},body:{ins:this.events}};return e.retry&&(this.currentEvents=this.events),this.events=[],r}onHarvestFinished(e){e&&e.sent&&e.retry&&this.currentEvents&&(this.events=this.events.concat(this.currentEvents),this.currentEvents=null)}addPageAction(e,t,i){if(!(this.events.length>=this.eventsPerHarvest||this.blocked)){var r,n,s={};l.il&&window.document.documentElement&&(r=window.document.documentElement.clientWidth,n=window.document.documentElement.clientHeight);var h={timestamp:e+(0,d.OP)(this.agentIdentifier).offset,timeSinceLoad:e/1e3,browserWidth:r,browserHeight:n,referrerUrl:this.referrerUrl,currentUrl:(0,u.f)(""+location),pageUrl:(0,u.f)((0,d.OP)(this.agentIdentifier).origin),eventType:"PageAction"};(0,a.D)(h,c),(0,a.D)((0,d.C5)(this.agentIdentifier).jsAttributes,c),i&&"object"==typeof i&&(0,a.D)(i,c),s.actionName=t||"",this.events.push(s)}function c(e,t){s[e]=t&&"object"==typeof t?(0,o.P)(t):t}}}r=g,n="featureName",s=f.t,(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s},6486:(e,t,i)=>{i.d(t,{t:()=>r});const r=i(2325).D.pageAction}}]);font-weight:700}
#__cookieWrapper .cookieModal .ccBodyFooter{padding:20px 20px 0;text-align:center;padding-bottom:50px}
#__cookieWrapper .cookieModal .ccBody{padding:20px 20px 0}
#__cookieWrapper .cookieModal .ccBody .ccApp{display:block;position:relative;line-height:20px;min-height:40px;margin-bottom:20px}
#__cookieWrapper .cookieModal .ccBody .ccApp:last-child{margin-bottom:0}
#__cookieWrapper .cookieModal .ccBody .ccApp .leftPart{width:75%;display:inline-block;margin-bottom:15px;text-decoration:none}
#__cookieWrapper .cookieModal .ccBody .ccApp .rightPart{width:25%;float:right;text-align:right;line-height:15px}
#__cookieWrapper .cookieModal .ccBody .ccApp .rightPart .ccRequired{color:#0075bb;font-weight:700}
#__cookieWrapper .cookieModal .ccBody .ccApp .switch{display:inline-block;height:25px;position:absolute;right:0;width:45px}
#__cookieWrapper .cookieModal .ccBody .ccApp .ccAppTitle{font-weight:700;font-size:1.4rem;line-height:1.6rem}
#__cookieWrapper .ccBodyTitle{padding:20px 20px 0}
#__cookieWrapper .__cookieNotice{width:100%;height:100%;position:fixed;display:flex;justify-content:center;overflow:hidden;left:0;bottom:0;z-index:1003;padding:0;margin:0;background:#fff;text-align:center;box-shadow:1px -2px 5px 4px rgba(0,0,0,.27)}
#__cookieWrapper .__cookieNotice .__cookieNoticeBody{padding:15px;background:#000;align-self:flex-end;width:100%;position:relative}
#__cookieWrapper.custom-cookie a,#__cookieWrapper.custom-cookie p{color:#fff;text-align:left}
#__cookieWrapper.custom-cookie a{text-decoration:underline}
#__cookieWrapper.custom-cookie .__cookieNotice{background:rgba(255,255,255,.5);padding:0}
#__cookieWrapper.custom-cookie .ccBtn:after{display:none}
#__cookieWrapper.custom-cookie .ccBtn,.custom-cookie-modal .modal-footer button{background:#fff;color:#000;margin:5px;padding:10px;font-weight:500;min-width:200px;border-radius:25px}
.custom-cookie-modal .modal-footer button{background:#000;color:#fff;min-width:180px;cursor:pointer}
.mb-15{margin-bottom:15px}
.cookie-btn{display:flex;flex-direction:column}
.custom-cookie-in{display:flex;align-items:center;justify-content:center}
.custom-cookie-in div{padding:0 15px}
.modal-backdrop.in{opacity:.8;z-index:999999}
.modal{z-index:9999999!important}
.close{top:15px;right:15px;opacity:1!important}
.close:hover{background:0 0}
.modal-title{color:#000!important;margin:0;font-size:16px}
.custom-cookie-modal p{padding-bottom:20px!important}
.custom-cookie-modal .modal-body,.custom-cookie-modal .modal-body h4,.custom-cookie-modal a,.custom-cookie-modal p{color:#000!important}
#__cookieWrapper.custom-cookie .ccModal.custom-cookie-in a,#__cookieWrapper.custom-cookie .ccModal.custom-cookie-in p{color:#000}
.custom-cookie .ccModal.custom-cookie-in .ccBtn{background:#000!important;color:#fff!important}
.custom-cookie .ccModal.custom-cookie-in .slider{background:#000!important}
.custom-cookie-modal a{color:#0075bb!important}
.switch{float:right;position:relative}
.switch input[type=checkbox]{position:absolute;z-index:-1;opacity:0}
.switch input[type=checkbox]+label{position:relative;min-width:calc(calc(2rem * .8) * 2);border-radius:calc(2.375rem * .8);height:calc(2.5rem * .8);line-height:calc(2.375rem * .8);display:inline-block;cursor:pointer;outline:0;-webkit-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;text-indent:calc(calc(calc(2.375rem * .8) * 2) + .5rem)}
.switch input[type=checkbox]+label::after,.switch input[type=checkbox]+label::before{content:'';position:absolute;top:0;left:0;width:calc(calc(1.8rem * .8) * 2);bottom:0;display:block}
.switch input[type=checkbox]:checked+label::before{background-color:#000}
.switch input[type=checkbox]:checked+label::after{background-color:#fff}
.switch input[type=checkbox]+label::before{right:0;background-color:#fff;border:2px solid #000;border-radius:calc(2rem * .8);transition:.2s all}
.switch input[type=checkbox]+label::after{top:4px;left:4px;width:12px;height:12px;border-radius:50%;background-color:#000;transition:all .3s ease-in 0s}
.switch input[type=checkbox]:checked+label::after{margin-left:calc(1.5rem * .8)}
.switch input[type=checkbox]:focus+label::before{outline:0;box-shadow:0 0 0 .2rem rgba(0,136,221,.25)}
.switch input[type=checkbox]:disabled+label::before{background-color:#a4a4a4;border-color:#a4a4a4}
.switch input[type=checkbox]:disabled+label::after{background-color:#fff}
#__cookieWrapper.custom-cookie .ccModal.custom-cookie-in a,#__cookieWrapper.custom-cookie .ccModal.custom-cookie-in p{color:#000}
.custom-cookie .ccModal.custom-cookie-in .slider{background:#000!important}
.__cookieNotice.has-access{height:auto!important}
.modal-title{font-weight:700}
.modal-body h4{border-bottom:1px solid #f1f1f1;margin-bottom:10px;padding-bottom:10px;font-weight:700;font-size:13px}
.gpc-box a{color:#ff7e0c!important}
.gpc-close-btn{color:#fff;position:absolute;right:0;top:0;padding:10px;cursor:pointer}
.modal{display:none;position:fixed;z-index:1;padding-top:100px!important;left:0;top:0;align-items:center;opacity:1;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.5)}
.modal-content{background-color:#fefefe;margin:auto;padding:0!important;border:1px solid #888;top:auto!important;width:80%}
.modal-header{padding:15px;position:relative;border-bottom:1px solid #ddd}
.modal-body{padding:15px}
.modal-body h4{margin-top:0}
.modal-footer{padding:15px;text-align:center;border-top:1px solid #ddd}
.close{color:#aaa;float:right;font-size:28px;font-weight:700;background:0 0;border:0;position:absolute;top:10px}
.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}
.gpc-box{text-align:center}
.gpc-box p{display:inline-block!important}