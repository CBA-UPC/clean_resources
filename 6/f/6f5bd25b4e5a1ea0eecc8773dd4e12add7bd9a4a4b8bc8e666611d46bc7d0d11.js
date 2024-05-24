;
(self.AMP=self.AMP||[]).push({m:1,v:"2312191621000",n:"amp-user-notification",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;ar n={isArray:e}=Array,{hasOwnProperty:o,toString:r}=Object.prototype;ction l(t){const i=u.apply(null,arguments);setTimeout((()=>{throw c(i),i}))}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var a=self.__AMP_LOG;on P(t,i){return function(t,i){const s=I(t,i);if(s)return s;const e=E(t);return e[i]=function(){const t=new n,{promise:i,reject:s,resolve:e}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:e,reject:s,context:null,ctor:null}}(),e[i].promise}(b(t),i)}=M="notificationUIManager";ar V="amp-user-notification",O="userNotificationManager",U=class extends t.BaseElement{constructor(t){super(t),this.tvt=null,this.ivt=null;const i=new n;this.svt=i.promise,this.nvt=i.resolve,this.evt=null,this.ovt=!1,this.rvt=null,this.hvt=null,this.uvt=null,this.cvt=null,this.Eot="",this.bot=null,this.Iy=null}uildCallback(){const t=this.getAmpDoc();this.Iy=function(t,i){const s=b(A(t));return y(s,i)?g(s,i):null}(this.element,"url-replace"),this.bot=P(this.element,"storage"),this.ivt=v(this.element.id,"amp-user-notification should have an id."),this.Eot="amp-user-notification:"+this.ivt,this.rvt=this.element.getAttribute("data-show-if-geo"),this.hvt=this.element.getAttribute("data-show-if-not-geo"),this.cvt=this.element.getAttribute("data-show-if-href"),this.cvt&&C(this.cvt,this.element),v(!!this.cvt+!!this.rvt+!!this.hvt<=1,'Only one "data-show-if-*" attribute allowed'),this.rvt&&(this.uvt=this.lvt(this.rvt,!0)),this.hvt&&(this.uvt=this.lvt(this.hvt,!1)),this.evt=this.element.getAttribute("data-dismiss-href"),this.evt&&C(this.evt,this.element),this.element.getAttribute("role")||this.element.setAttribute("role","alert");const i=this.element.getAttribute("data-persist-dismissal");this.ovt="false"!=i&&"no"!=i,this.registerDefaultAction((()=>this.dismiss(!1)),"dismiss"),this.registerAction("optoutOfCid",(),P(t,O).then((t=>{t.registerUserNotification(this.ivt,this)}))}lvt(t,i){return(s=this.element,s,"geo","amp-geo")).then((s=>{v(s,"requires <amp-geo> to use promptIfUnknownForGeoGroup");const n=t.split(/,\s*/).filter((t=>2==s.isInCountryGroup(t)));return!!(i?n.length:!n.length)}));var s}fvt(t){const i=this.cvt;return this.Iy.expandUrlAsync(i).then((i=>i,{"elementId":this.ivt,"ampUserId":t}))))}dvt(t){return this.tvt=t,this.fvt(t).then((t=>T(this.win).fetchJson(t,{credentials:"include"}).then((t=>t.json()))))}mvt(){const t=this.element.getAttribute("enctype")||"application/json;charset=utf-8";return T(this.win).fetchJson(this.evt,this.pvt(t,this.ivt,this.tvt))}pvt(t,i,s){return{method:"POST",credentials:"include",body:{"elementId":i,"ampUserId":s},headers:{"Content-Type":t}}}vvt(t){return v("boolean"==typeof t.showNotification,'`showNotification` should be a boolean. Got "%s" which is of type %s.',t.showNotification,typeof t.showNotification),t.showNotification||this.nvt(),Promise.resolve(t.showNotification)}avt(){return this._vt().then(().then((,(t=>{m().error(V,"Failed to opt out of Cid",t),this.dismiss(!0)}))}Pvt(){return this._vt().then((t=>t.get({scope:V,createCookieIfNotPresent:!0},s(),this.svt)))}houldShow(){return this.isDismissed().then((t=>!t&&(this.cvt?this.wvt():!this.uvt||this.uvt)))}wvthow(){var t,i;return t=this.element,void 0===(i=!0)&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden",""),this.element.classList.add("amp-active"),this.getViewport().addToFixedLayer(this.element),this.svt}isDismissed(){return this.ovt?this.bot.then(().then((,(t=>(m().error(V,"Failed to read storage",t),!1))):Promise.resolve(!1)}dismiss(t){this.element.classList.remove("amp-active"),this.element.classList.add("amp-hidden"),this.nvt(),this.getViewport().removeFromFixedLayer(this.element),this.ovt&&!t&&this.bot.then((t=>{t.set(this.Eot,!0)})),this.evt&&this.mvt()}};t.registerServiceForDoc(O,class{constructor(t){this.ampdoc=t,this.Avt=Object.create(null),this.bvt=Object.create(null),this.gvt=this.ampdoc.whenReady(),this.Ivt=Promise.all([this.ampdoc.whenFirstVisible(),this.gvt]),this.Evt=P(this.ampdoc,M)}get(t){return this.Ivt.then((),this.yvt(t).promise}getNotification(t){return this.gvt.then(()}registerUserNotification(t,i){this.Avt[t]=i;const s=this.yvt(t);return this.Ivt.then(().then((t=>{if(t)return this.Evt.then(()})).then(s.resolve.bind(this,i)).catch(l.bind(null,"Notification service failed amp-user-notification",t))}yvt(t){if(this.bvt[t])return this.bvt[t];const i=new n,{promise:s,resolve:e}=i;return this.bvt[t]={promise:s,resolve:e}}}),t.registerServiceForDoc(M,class{constructor(){this.uot=0,this.lot=s(),this.pot=()=>{},this.dot=onQueueEmptynQueueNotEmptyegisterUI(t){0==this.uot&&this.dot(),this.uot++;const i=this.lot.then((()=>t().then((()=>{this.uot--,0==this.uot&&this.pot()}))));return this.lot=i,i}}),t.registerElement(V,U,"amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-user-notification-0.1.mjs.map