"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[1151],{21151:function(e,t,r){r.r(t),r.d(t,{default:);var n=r(4942),o=r(94476),a=r(423),c=r(90336),s=r(85956),u=r(89602),i=r(3892);r d=window.location.href.indexOf("kdocs")>-1?a.Q7:a.UX,m={computed:{url:function(){return"".concat(d,"/workspace/?company_id=").concat(this.$route.params.cid,"&utm_source=docsWeb&from=").concat(this.$route.query.from||"normal")}},mounted:function(){var e=this;window.addEventListener("message",this.messageHandler),this.$eventBus.on(c.mU,()},methods:{postMessage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=document.querySelector(".companyHelp").contentWindow;e&&r.postMessage(JSON.stringify(l({eventName:e},t)),d)},messageHandler:function(e){var t,r,n=this,a=null===(t=this.$refs)||void 0===t||null===(r=t.iframe)||void 0===r?void 0:r.contentWindow,p=e.source;if(!a||p!==a)return!1;var l=JSON.parse((null==e?void 0:e.data)||"{}").eventName,d=new Map([["toTeamPage",function(){var t=JSON.parse((null==e?void 0:e.data)||"{}"),r=t.tempId,o=t.companyid;n.groupID=r,n.companyId=o,n.$store.state.ui.useNewLayout&&n.$eventBus.emit(c.aW,"MyGroup"),n.$ua.wpsDocumentEmbed&&(0,s.Q7)(),n.$router.push({name:"Enterprise",params:{tid:n.groupID,cid:n.companyId}})}],["openUrl",function(){var t=JSON.parse((null==e?void 0:e.data)||"{}").url;window.open(t)}],["updateNavText",function(){n.$store.commit(u.xqO,{path:[{key:"EntHelper",name:"EntHelper",text:o.Ph}]})}],["toSpaceAndImport",function(){var e=n.$store.state.team.myCloud.id;n.$router.push({name:"EntSpace",params:{cid:n.$store.state.company.current.id,tid:e}}),i.Z.$emit("toSpaceAndImport")}],["default",]);return(d.get(l)||d.get("default"))(),l}}},f=m,v=(0,r(51900).Z)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{ref:"iframe",staticClass:"companyHelp",attrs:{src:e.url,allowfullscreen:"",allow:"autoplay; fullscreen",frameborder:"0"}})}),[],!1,null,"6d56cdd6",null).exports}}]);
