(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[580],{VHqc:function(e,n,l){"use strict";l.r(n),l.d(n,"NewConsumerExperienceModuleNgFactory",();var t=l("keVe"),u=l("QjXU"),r=l("laSs"),i=l("lUkk"),o=l("Dn7E"),c=l("rTyw"),s=l("zvoD"),a=l("3Vsh"),m=l("A/um"),p=l("hhzZ"),d=l("7Gwk"),h=l("Z0U4"),C=l("PBJH"),b=l("dFxn"),f=function(){eturn e.ɵprov=t.kc({factory,token:e,providedIn:"root"}),e}(),v=(l("osUZ"),l("ioD/")),w=l("+YV+"),g=l("BaAg"),_=l("OWzB"),k=l("Bc8L"),S=l("4/We"),x=l("/I02"),I=function(){function e(e,n,l,t,u,i,o,c,p,d,h){var C=this;this.capabilitiesService=e,this.contextService=n,this.createDocumentService=l,this.createMenuService=t,this.domSanitizer=u,this.eventService=i,this.instrumentationService=o,this.localAppLauncherService=c,this.locService=p,this.newConsumerExperienceConfigService=d,this.officeRouteService=h,this.newConsumerTitle=this.locService.NewConsumerExperienceTitle,this.newConsumerSubtitle=this.locService.NewConsumerExperienceSubtitle,this.exploreAppsCardText=this.locService.NewUserShelfExploreApps,this.createCardText=this.locService.CreateTilesHeaderText,this.showConsumerNoContent=this.capabilitiesService.capabilities.newConsumerOverride,this.showConsumerNewUserShelf=this.capabilitiesService.capabilities.newUserShelfOverride;var b=this.newConsumerExperienceConfigService.config;this.eventService.events.withScope(0).pipe(Object(s.a)()),Object(a.a)(1)).toPromise().then((function(e){0===e.args[0]?(C.showConsumerNoContent=!0,C.showConsumerNewUserShelf=!1,C.instrumentationService.logImpressionEvent("New_Consumer_No_Content_Impression"),Object(r.a)({eventName:"New_Consumer_No_Content_Impression",area:"NewConsumerExperience"})):(C.showConsumerNoContent=!1,C.showConsumerNewUserShelf=!0)})),this.newConsumerCardCreate=b.newConsumerCardCreate,this.newConsumerCardUpload=b.newConsumerCardUpload,this.newConsumerCardApps=b.newConsumerCardApps,this.createIcon=m.a.Add,this.createChevronIcon=m.a.ChevronDown,this.appsIcon=this.domSanitizer.bypassSecurityTrustHtml(v)}return e.prototype.ngOnInit=function(){return Object(u.__awaiter)(this,void 0,void 0,(function(){var e;return Object(u.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.createMenuService.createLinksPromise];case 1:return e=n.sent(),this.createMenuModel={id:"create-menu",items:e,linkAriaLabel:this.createCardText,linkAriaDescription:this.locService.MruCreateLinkAriaLabelDescription,linkCssClass:"generic-button--fluentvnext generic-button--fluentvnext--default",hostComponentArea:p.b.FirstRun,rightAligned:!0},this.createLinks=e,[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}}))}))},e.prototype.ngOnDestroy,e.prototype.onToggleCreateMenu,e.prototype.onSelectCreateItem,e.prototype.onClickCreate=function(){this.officeRouteService.navigateTo({route:"Create"}),this.instrumentClick("create-new")},e.prototype.onClickExploreApps,e.prototype.createDocument=function(e,n){var t=this,u=g.b[e.workload.FileType].toLowerCase(),r=function(l){var r="_blank"===t.contextService.sharedContext.defaultLinkTarget;r||t.instrumentCreateMenuItemClick(e.getId(),e.workload.Referral,n.index,"Web",u),t.createDocumentService.createItem(e.creationFileType,e.url,null,(function(i){var o="Error"===i.type||"CreatePending"===i.type?"":e.workload.Referral;r&&t.instrumentCreateMenuItemClick(e.getId(),o,n.index,i.platform,u),t.instrumentCreateMenuItemClickResult(e.getId(),n.index,i,l,u)}))};if(this.capabilitiesService.capabilities.pwaEnabled&&e.workload.FileType===g.b.Excel)return this.capabilitiesService.capabilities.contentLauncherEnabled?void Promise.all([l.e(0),l.e(1),l.e(2),l.e(3),l.e(4),l.e(5)]).then(l.bind(null,"DZQ9")).then((function(l){l.launchApp({action:"OpenDocument",appName:g.b[g.b.Excel],url:""}).then((function(l){if(l.success)return t.instrumentCreateMenuItemClick(e.getId(),e.workload.Referral,n.index,"Native",u),void t.instrumentCreateMenuItemClickResult(e.getId(),n.index,{type:"GoToLanding",latency:0},2,u);r(2)}))})):void this.localAppLauncherService.launchOfficeApp(g.b[g.b.Excel],"",null,!0).then((function(l){if(l)return t.instrumentCreateMenuItemClick(e.getId(),e.workload.Referral,n.index,"Native",u),void t.instrumentCreateMenuItemClickResult(e.getId(),n.index,{type:"GoToLanding",latency:0},2,u);r(2)}));r(0)},e.prototype.instrumentClick=function(e){var n={};n.State=this.showConsumerNewUserShelf?"collapsed":"expanded",this.instrumentationService.logClickEvent("New_User_Shelf_Click",e,p.b.NewConsumerExperience,void 0,"Web",n),Object(i.a)({eventName:"New_User_Shelf_Click",id:e,area:"NewConsumerExperience",result:this.showConsumerNewUserShelf?"Close":"Expand",target:"Other"})},e.prototype.instrumentCreateMenuItemClick=function(e,n,l,t,u){var r={};r.RenderSize=this.createLinks?this.createLinks.length.toString():"0",r.Index=l.toString(),r.DocumentType=u,this.instrumentationService.logClickEvent("Create_Link_Click",e,p.b.NewConsumerExperience,n,t,r),Object(i.a)({eventName:"Create_Link_Click",id:e,area:"NewConsumerExperience",subArea:"CreateLinks",result:n?"Refer":"Navigate",target:n?Object(c.a)(n):"Other"})},e.prototype.instrumentCreateMenuItemClickResult=function(e,n,l,t,u){var r,i,c,s,a,m,d={};d.Index=n.toString(),d.ElementId=e,d.Action=l.type,d.Latency=l.latency.toString(),d.Area=p.b.NewConsumerExperience,d.DocumentType=u,d.DebugInfo=null!==(r=l.debugInfo)&&void 0!==r?r:"",d.Error=null!==(i=l.errorMsg)&&void 0!==i?i:"",d.HttpCode=null!==(c=l.httpCode)&&void 0!==c?c:"",this.instrumentationService.logGenericEvent("Create_Link_Click_Result",d,[],t),Object(o.a)({featureName:"Create",eventName:"CreateLinkClickResult",area:"NewConsumerExperience",params:{ElementId:e,Action:l.type,Latency:l.latency.toString(),DocumentType:u,Index:n.toString(),SecurityThreshold:t,DebugInfo:null!==(s=l.debugInfo)&&void 0!==s?s:"",Error:null!==(a=l.errorMsg)&&void 0!==a?a:"",HttpCode:null!==(m=l.httpCode)&&void 0!==m?m:""}})},e}(),y=I,N(),M=l("fYis"),H=l("pzhl"),U=l("PkQn"),E=l("TOqr"),T=l("tuJr"),L=l("s+Eq"),A=l("5FMq"),z=l("7IJ8"),D=l("QhWD"),F=l("cgnd"),j=l("casz"),G=l("RsrG"),O=l("6Po3"),R=l("WLAd"),W=l("y1jW"),P=t.Fb({encapsulation:2,styles:[],data:{}});function q(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,2,"ohp-icon-font",[["cssClass","menu-item__icon create-menu-item__icon--fluent"]],null,null,null,H.b,H.a)),t.Gb(1,638976,null,0,U.a,[S.a],{cssClass:[0,"cssClass"],iconFontCssClass:[1,"iconFontCssClass"],iconFontName:[2,"iconFontName"],size:[3,"size"],style:[4,"style"]},null),t.Zb(2,{color:0})],(function(e,n){var l=n.parent.context.item.workload.IconUnicodeCodepointCssClass,t=n.parent.context.item.workload.IconFont,u=e(n,2,0,n.parent.context.item.workload.Color);e(n,1,0,"menu-item__icon create-menu-item__icon--fluent",l,t,20,u)}),null)}function V(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,1,"ohp-icon-font",[["cssClass","menu-item__icon create-menu-item__icon--fluent ms-fcl-tp"]],null,null,null,H.b,H.a)),t.Gb(1,638976,null,0,U.a,[S.a],{cssClass:[0,"cssClass"],iconFontName:[1,"iconFontName"],size:[2,"size"]},null)],(function(e,n){e(n,1,0,"menu-item__icon create-menu-item__icon--fluent ms-fcl-tp",n.parent.context.item.icon,20)}),null)}function Z(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,6,null,null,null,null,null,null,null)),(e()(),t.qb(16777216,null,null,1,null,q)),t.Gb(2,16384,null,0,E.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(e()(),t.qb(16777216,null,null,1,null,V)),t.Gb(4,16384,null,0,E.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(e()(),t.Hb(5,0,null,null,1,"div",[["class","list-item__title menu-item__title ms-fcl-np"]],null,null,null,null,null)),(e()(),t.gc(6,null,["",""]))],),))}function B(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,12,"ohp-dropdown-menu",[],null,[[null,"toggleMenu"],[null,"selectItem"]],),T.b,T.a)),t.Gb(1,4440064,null,1,L.a,[t.h,A.a],{menuModel:[0,"menuModel"]},{toggleMenu:"toggleMenu",selectItem:"selectItem"}),t.cc(603979776,1,{menuItems:1}),(e()(),t.Hb(3,0,null,0,7,"div",[["ohpMenuLinkContent",""]],null,null,null,null,null)),t.Gb(4,16384,null,0,L.c,[],null,null),(e()(),t.Hb(5,0,null,null,1,"ohp-icon-font",[["cssClass","new-consumer-card__create-icon"],["size","15"]],null,null,null,H.b,H.a)),t.Gb(6,638976,null,0,U.a,[S.a],{cssClass:[0,"cssClass"],iconFontType:[1,"iconFontType"],size:[2,"size"]},null),(e()(),t.Hb(7,0,null,null,1,"span",[["class","new-consumer-card__text"]],null,null,null,null,null)),(e()(),t.gc(8,null,["",""])),(e()(),t.Hb(9,0,null,null,1,"ohp-icon-font",[["cssClass","new-consumer-card__chevron-icon"],["size","10"]],null,null,null,H.b,H.a)),t.Gb(10,638976,null,0,U.a,[S.a],{cssClass:[0,"cssClass"],iconFontType:[1,"iconFontType"],size:[2,"size"]},null),(e()(),t.qb(0,null,null,1,null,Z)),t.Gb(12,16384,[[1,4]],0,L.b,[t.S],null,null)],(function(e,n){var l=n.component;e(n,1,0,l.createMenuModel),e(n,6,0,"new-consumer-card__create-icon",l.createIcon,"15"),e(n,10,0,"new-consumer-card__chevron-icon",l.createChevronIcon,"10")}),))}function J(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,21,"div",[["class","width-restrictor width-restrictor--responsive"]],null,null,null,null,null)),(e()(),t.Hb(1,0,null,null,4,"div",[["class","new-consumer__header"]],null,null,null,null,null)),(e()(),t.Hb(2,0,null,null,1,"div",[["class","new-consumer__title"]],null,null,null,null,null)),(e()(),t.gc(3,null,["",""])),(e()(),t.Hb(4,0,null,null,1,"div",[["class","new-consumer__subtitle"]],null,null,null,null,null)),(e()(),t.gc(5,null,["",""])),(e()(),t.Hb(6,0,null,null,15,"div",[["class","new-consumer-card__container"]],null,null,null,null,null)),(e()(),t.Hb(7,0,null,null,3,"div",[["class","new-consumer-card__panel"]],null,null,null,null,null)),(e()(),t.Hb(8,0,null,null,0,"img",[["class","new-consumer-card__image"]],[[8,"src",4]],null,null,null,null)),(e()(),t.qb(16777216,null,null,1,null,B)),t.Gb(10,16384,null,0,E.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(e()(),t.Hb(11,0,null,null,4,"div",[["class","new-consumer-card__panel"]],null,null,null,null,null)),(e()(),t.Hb(12,0,null,null,0,"img",[["class","new-consumer-card__image"]],[[8,"src",4]],null,null,null,null)),(e()(),t.Hb(13,16777216,null,null,2,null,null,null,null,null,null,null)),t.Gb(14,475136,null,0,z.a,[D.a,t.W,p.a,F.b,j.a,G.a,O.a,t.F,R.a],{ngModulePath:[0,"ngModulePath"],inputs:[1,"inputs"]},null),t.Zb(15,{showAsLink:0,numDocuments:1,fluentRefresh:2}),(e()(),t.Hb(16,0,null,null,5,"div",[["class","new-consumer-card__panel"]],null,null,null,null,null)),(e()(),t.Hb(17,0,null,null,0,"img",[["class","new-consumer-card__image"]],[[8,"src",4]],null,null,null,null)),(e()(),t.Hb(18,0,null,null,3,"button",[["class","generic-button--fluentvnext generic-button--fluentvnext--default"]],null,[[null,"click"]],),null,null)),(e()(),t.Hb(19,0,null,null,0,"div",[["class","new-consumer-card__apps-icon"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),t.Hb(20,0,null,null,1,"span",[["class","new-consumer-card__text"]],null,null,null,null,null)),(e()(),t.gc(21,null,["",""]))],(function(e,n){var l=n.component;e(n,10,0,l.createLinks&&l.createLinks.length);var t=e(n,15,0,!1,0,!0);e(n,14,0,"upload-button#UploadButtonModule",t)}),(function(e,n){var l=n.component;e(n,3,0,l.newConsumerTitle),e(n,5,0,l.newConsumerSubtitle),e(n,8,0,l.newConsumerCardCreate),e(n,12,0,l.newConsumerCardUpload),e(n,17,0,l.newConsumerCardApps),e(n,19,0,l.appsIcon),e(n,21,0,l.exploreAppsCardText)}))}function Q(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,3,"div",[["class","width-restrictor--no-gutter"]],null,null,null,null,null)),(e()(),t.Hb(1,16777216,null,null,2,null,null,null,null,null,null,null)),t.Gb(2,475136,null,0,z.a,[D.a,t.W,p.a,F.b,j.a,G.a,O.a,t.F,R.a],{ngModulePath:[0,"ngModulePath"],inputs:[1,"inputs"]},null),t.Zb(3,{collapsed:0})],(function(e,n){var l=e(n,3,0,!0);e(n,2,0,"new-user-shelf#NewUserShelfModule",l)}),null)}function Y(e){return t.jc(0,[(e()(),t.qb(16777216,null,null,1,null,J)),t.Gb(1,16384,null,0,E.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(e()(),t.qb(16777216,null,null,1,null,Q)),t.Gb(3,16384,null,0,E.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(e,n){var l=n.component;e(n,1,0,l.showConsumerNoContent),e(n,3,0,l.showConsumerNewUserShelf&&!l.showConsumerNoContent)}),null)}var X=t.Db("ohp-new-consumer-experience",I,(function(e){return t.jc(0,[(e()(),t.Hb(0,0,null,null,1,"ohp-new-consumer-experience",[],null,null,null,Y,P)),t.Gb(1,245760,null,0,I,[S.a,x.a,_.a,w.a,W.b,d.a,p.a,k.a,C.a,f,h.a],null,null)],),null)}),{},{},[]),K=l("izKO"),$=l("xIlw"),ee=l("+a0u"),ne=l("lQwO"),le=l("+P5Z"),te=l("CfLe"),ue=l("ej7j"),re=l("X+PR"),ie=l("VY7U"),oe=l("CCRL"),ce=t.Eb(N,[],(function(e){return t.Tb([t.Ub(512,t.k,t.hb,[[8,[M.a,X]],[3,t.k],t.D]),t.Ub(4608,E.m,E.l,[t.z]),t.Ub(1073742336,E.c,E.c,[]),t.Ub(1073742336,K.a,K.a,[]),t.Ub(1073742336,$.a,$.a,[]),t.Ub(1073742336,ee.a,ee.a,[]),t.Ub(1073742336,ne.a,ne.a,[]),t.Ub(1073742336,le.a,le.a,[]),t.Ub(1073742336,te.a,te.a,[]),t.Ub(1073742336,ue.a,ue.a,[]),t.Ub(1073742336,re.o,re.o,[[2,re.u],[2,re.n]]),t.Ub(1073742336,ie.a,ie.a,[]),t.Ub(1073742336,N,N,[]),t.Ub(256,oe.a,y,[])])}))},"ioD/"}]);
//# sourceMappingURL=new-consumer-experience.81326873e4a15c889bb9.chunk.v7.js.map