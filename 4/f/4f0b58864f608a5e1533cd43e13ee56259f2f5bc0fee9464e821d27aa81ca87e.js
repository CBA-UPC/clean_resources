/*! For license information please see install.837fa8c06156b0d4ceb4.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[565],{"0Pjc":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var l=t("elnK"),i=t.n(l)()((function(e,n){return{elementMap:new Map,activeSequence:void 0,disabled:!1,updateTuiTargetElementData:function(t,l){n().disabled||e((function(e){return{elementMap:new Map(e.elementMap).set(t,l)}}))},setActiveTeachingSequence:function(n,t,l,i){void 0===l&&(l=0),void 0===i&&(i=!1),e(()},clearActiveTeachingSequence:setDisabled:function(){return e({disabled:!0,activeSequence:void 0,elementMap:new Map})}}}))},"9Yx+":T4V2:function(e,n,t){"use strict";t.r(n),t.d(n,"InstallModuleNgFactory",(function(){return Se}));var l=t("keVe"),i=t("QjXU"),a=t("eC4l"),r=t("laSs"),o=t("CMIS"),s=t("lUkk"),u=t("Dn7E"),c=t("zvoD"),f=t("Q6ee"),p=t("lrJm"),d=t("hhzZ"),h=t("6nG3"),m=t("W3Zz"),b=t("hZW2"),g=t("7Gwk"),v=t("Z0U4"),I=t("Uqr9"),S=t("TIi1"),k=t("4/We"),C=t("cgnd"),w=t("LQqy"),y=t("/I02"),D=t("PBJH"),x=t("Hp80"),O=t("vSs+"),A=t("y3b+"),L=t("3Vsh"),T=t("R7NL"),E=t("H90i"),P=t("kpuN"),M=t("wwmn"),H=t("casz"),U=t("BMb5"),_=t("pOWU"),R=t("oAX+"),G=t("TOqr"),B=function(e){function n(n,t,l,i,a,r,o,s,u,c,f,p,d,h,m){var b=e.call(this,n,t,l,"Portal",i,a,s,m)||this;b.locService=r,b.installConfigService=o,b.globalErrorHandler=u,b.windowService=c,b.consumerInstallConfigService=p,b.capabilitiesService=d,b.consumerPublicDataService=h,b.installApiRoot=b.installConfigService.config.installApiRoot,b.productsSite="https://products.office.com",b.bitness="x86",b.bitnessDef="Def",b.installConfig=b.installConfigService.config,b.resources=b.installConfig.resources;var g=f.config;return b.config={headers:new Map([["x-assistant-client-type",E.a],["x-assistant-client-version","v1"],["x-assistant-flights",g.sharedClientStartupContext.flights]])},b.installConfig.sendRequestId&&b.config.headers.set("client-request-id",g.sharedClientStartupContext.correlationId),b.inMockMode&&(b.installApiRoot=i.sharedContext.officeHomeApiRoot),b.deferredResponses=new Map,b}return Object(i.__extends)(n,e),n.prototype.getGenericInstaller=function(e,n,t,l){var a=this;if(this.deferredResponses.has(l))return this.deferredResponses.get(l).then(();var r=new Promise((function(r,o){if(a.resources){var s=e.toLowerCase(),u=n.platform.platformType;if(u!==m.e.Linux)if(u!==m.e.Chromebook)if(u!==m.e.Other)if(u!==m.e.PC&&u!==m.e.Mac)if(t===C.a.OrgId){if(!a.installApiRoot)return void o("Failed to get installable software. Install API root is not defined");var c=a.getInstallableSoftwareStream(m.e[m.e.PC].toLowerCase(),s,l,a.bitness,null);c.results.pipe(Object(L.a)(1)).toPromise().then((function(e){if(e&&e.software){var t=e.software;r(2===t.Status||1===t.Status?{text:"",ariaLabel:"",url:"",scenario:"Hide"}:a.getMobileInstallerInfo(u,a.productsSite+"/"+s+"/mobile/office-"+n.platform.pageName.toLowerCase()))}else o("No data returned due to failure in both cache and network requests.")})),c.initialCompletion.then((function(e){e&&(e.cacheError&&e.networkError?o(e):a.globalErrorHandler.handleCacheObservableError(e,"FMgqz","ZXObm"))}))}else r(a.getMobileInstallerInfo(u,a.productsSite+"/"+s+"/mobile/office-"+n.platform.pageName.toLowerCase()));else{if(n.browser.browserType===m.a.Edge&&a.windowService.nativeWindow.external&&"getHostEnvironmentValue"in a.windowService.nativeWindow.external){var f=["178","179"],p=a.windowService.nativeWindow.external.getHostEnvironmentValue("os-sku");if(p&&(-1!==p.indexOf(f[0])||-1!==p.indexOf(f[1])))return void r(a.getUnsupportedInstallInfo("Install is not supported on Windows CloudOS"))}if(t===C.a.MSA)a.capabilitiesService.capabilities.workloadPublicDataEnabled?Promise.all([a.consumerPublicDataService.getConfig(),a.consumerInstallConfigService.getConfig()]).then((function(e){var n=Object(i.__read)(e,2),t=a.getGenericInstallForConsumer(u,l,n[1],n[0].hasBusinessLicense);r(t)})).catch(():a.consumerInstallConfigService.getConfig().then(().catch(();else{if(!a.installApiRoot)return void o("Failed to get installable software. Install API root is not defined");var d=u===m.e.PC?a.bitness:null,h=u===m.e.Mac?n.platformVersion.toString():null,b=a.getInstallableSoftwareStream(m.e[u].toLowerCase(),s,l,d,h);b.results.pipe(Object(L.a)(1)).toPromise().then((function(e){if(e&&e.software){var n=e.software;if(0!==n.Status)1!==n.Status?2!==n.Status?o(n.Status):r({text:"",ariaLabel:"",url:"",scenario:"Hide"}):r(a.getInstallSoftwareInfo());else{if(!n.Apps||!n.Apps.length)return void o("No apps returned");var t=a.getDirectInstallerInfo(n.Apps[0]);r(t)}}else o("No data returned due to failure in both cache and network requests.")})),b.initialCompletion.then((function(e){e&&(e.cacheError&&e.networkError?o(e):a.globalErrorHandler.handleCacheObservableError(e,"J7V3F","eHDPU"))}))}}else r(a.getUnsupportedInstallInfo("Install is not supported on Unknown platform"));else r(a.getUnsupportedInstallInfo("Install is not supported on Chromebooks"));else r(a.getUnsupportedInstallInfo("Install is not supported on Linux"))}else r(a.getUnsupportedInstallInfo("installConfigService.config.resources is null"))}));return this.deferredResponses.set(l,r),this.deferredResponses.get(l)},n.prototype.getCustomInstaller=function(e,n){var t=this;if(this.customInstallerPromise||(this.customInstallerPromise=new Map),this.customInstallerPromise.has(e))return this.customInstallerPromise.get(e);var l=new Promise((function(l,i){var a=t.getCustomInstallerStream(e,n);a.results.pipe(Object(L.a)(1)).toPromise().then((),a.initialCompletion.then((function(e){e&&(e.cacheError&&e.networkError?i(e):t.globalErrorHandler.handleCacheObservableError(e,"YnO0h","ZGgqE"))}))}));return this.customInstallerPromise.set(e,l),l},n.prototype.handleQueryParam=function(e,n){"mockinstall"===e&&this.mockRequestHeader&&this.config.headers.set(this.mockRequestHeader,n)},n.prototype.getCustomInstallerStream=function(e,n){var t=this;if(this.customInstallerStreamMap||(this.customInstallerStreamMap=new Map),this.customInstallerStreamMap.has(e))return this.customInstallerStreamMap.get(e);var l=n.toLowerCase(),i=this.installApiRoot?this.installApiRoot+"/apps/"+e+"/downloadurl/"+l+"/"+this.bitnessDef:"",a=this.fetchCustomInstaller(i,"cache-only"),r=this.fetchCustomInstaller(i,"network-first"),o=R.a.createResultsWithCacheObservable(a,r,null,();return this.customInstallerStreamMap.set(e,o),o},n.prototype.getInstallSoftwareInfo=function(){return{text:this.resources&&this.resources.InstallSoftwareButtonText,ariaLabel:this.resources&&this.resources.InstallAdditionalLinkAriaLabel,url:this.installConfig.commercialMySoftwarePageUrl,scenario:"RedirectToMyAccountPage"}},n.prototype.getConsumerInstallerInfo=function(e){return void 0===e&&(e=!1),{text:this.resources?this.locService.format(this.resources.InstallOfficeButtonText,this.resources.OfficeBrandShort):"",ariaLabel:this.resources&&this.resources.InstallConsumerMyAccountLinkAriaLabel,url:e?this.installConfig.consumerSSUInstallLink:this.installConfig.consumerInstallLink,scenario:e?"SetupOffice":"RedirectToMyAccountPage"}},n.prototype.getGenericInstallForConsumer=function(e,n,t,l){void 0===l&&(l=!1);var i=t&&t.currentSkuInfo?t.currentSkuInfo.skuType:h.b.NotDetected;return e!==m.e.Mac||i!==h.b.O365Home&&i!==h.b.O365Personal&&i!==h.b.O365Solo&&!l||"Office"!==n?this.getConsumerInstallerInfo(l):this.getConsumerDirectInstallerInfo(n)},n.prototype.getConsumerDirectInstallerInfo=function(e){return{text:this.resources?this.locService.format(this.resources.InstallOfficeButtonText,this.resources.OfficeBrandShort):"",ariaLabel:this.resources?this.locService.format(this.resources.InstallOfficeButtonAriaLabel,this.resources.OfficeBrandShort):"",url:this.installConfig.consumerDirectInstallUrl,scenario:"DirectInstall",appId:e}},n.prototype.getDirectInstallerInfo=function(e){return{text:this.resources&&this.resources.InstallOfficeLinkText,ariaLabel:this.resources?this.locService.format(this.resources.InstallOfficeButtonAriaLabel,this.resources.InstallOfficeLinkText,this.resources.InstallOfficeDescription):"",url:e.StaticDownloadUrl,scenario:"DirectInstall",appId:e.Id}},n.prototype.getMobileInstallerInfo=function(e,n){var t;switch(e){case m.e.iPad:t=this.resources&&this.resources.GetOfficeAppsButtonAriaLabelIpad;break;case m.e.iPhone:t=this.resources&&this.resources.GetOfficeAppsButtonAriaLabelIphone;break;case m.e.AndroidPhone:case m.e.AndroidTablet:t=this.resources&&this.resources.GetOfficeAppsButtonAriaLabelAndroid;break;default:return this.getUnsupportedInstallInfo("Hidden for Windows Phone and unsupported mobile devices")}return{text:this.resources&&this.resources.GetOfficeAppsButtonText,ariaLabel:t,url:n,scenario:"GetMobileApps"}},n.prototype.getUnsupportedInstallInfo=n.prototype.fetchInstallableSoftware=function(e,n){var t=this;return new Promise((function(l,i){e||i(new _.b(null,"Failed to get installable software. Service url is not defined")),t.sendRequest("Installable_Apps_Request","Installable_Apps",e,(function(e){e.instrument((function(e,n){e.ok&&e.data&&(n.ActualSize=e.data.Apps?e.data.Apps.length.toString():"0")})).then((function(e){e.ok&&e.data?l({software:e.data,fromCache:e.fromCache}):i(new _.b(e,"No data returned"))})).catch((function(e){t.globalErrorHandler.handleError(e,"GwqkI")}))}),i,n)}))},n.prototype.fetchCustomInstaller=function(e,n){var t=this;return new Promise((function(l,i){e?t.sendRequest("Installer_Request","Installer",e,(function(e){e.then((function(e){e.ok&&e.data?e.data.Status>=1?i(e.data.Error):l({installerUrl:e.data.Url,fromCache:e.fromCache}):i(new _.b(e,"No data returned"))})).catch(()}),i,n):i(new _.b(null,"Failed to get custom installer. Service url is not defined"))}))},n.prototype.getInstallableSoftwareStream=function(e,n,t,l,i){var a=this;if(this.installableSoftwareStreamMap||(this.installableSoftwareStreamMap=new Map),this.installableSoftwareStreamMap.has(t))return this.installableSoftwareStreamMap.get(t);var r=encodeURI(this.installApiRoot+"/apps/"+n+"/"+e+"/"+(l?l+"/":"")+(i?i+"/":"")+"?$filter=(type eq '"+t+"')"),o=this.fetchInstallableSoftware(r,"cache-only"),s=this.fetchInstallableSoftware(r,"network-first"),u=R.a.createResultsWithCacheObservable(o,s,null,();return this.installableSoftwareStreamMap.set(t,u),u},n.prototype.sendRequest=function(n,t,l,i,a,r){if("cache-only"===r)return this.installConfig.installApiSWEnabled?void e.prototype.get.call(this,n,t,l,i,a,this.config,r):void a(new _.b(null,"SW is not enabled for install apis."));e.prototype.get.call(this,n,t,l,i,a,this.config,r=this.installConfig.installApiSWEnabled?r:"network-only")},n.ɵprov=l.kc({factory:function(){return new n(l.lc(P.b),l.lc(d.a),l.lc(T.a),l.lc(y.a),l.lc(M.a),l.lc(D.a),l.lc(A.a),l.lc(G.q),l.lc(p.b),l.lc(U.b),l.lc(C.b),l.lc(w.a),l.lc(k.a),l.lc(x.a),l.lc(H.a))},token:n,providedIn:"root"}),n}(_.a),j=(t("kTSd"),function(){function e(e,n,t,l,i,a,r,o,s,u,c,f,p,d,h,m,b,g){this.capabilitiesService=e,this.consumerInstallConfigService=n,this.contextService=t,this.deviceDetector=l,this.documentService=i,this.eventService=a,this.globalErrorHandler=r,this.installConfigService=o,this.installDataService=s,this.instrumentationService=u,this.locService=c,this.officeRouteService=f,this.performanceService=p,this.renderer=d,this.startupConfigService=h,this.upsellDataService=m,this.urlLauncherService=b,this.consumerPublicDataService=g,this.showInstallSymbol=!1,this.isMobile=!1,this.showConsumerUpsell=!1,this.temporaryHideInstall=!0,this.expandConsumerInstallDropdown=!1,this.consumerInstallButtonRenderAllowed=!0,this.additionalLinkId="install-additional-link",this.installLinks=new Array,this.rightAligned=!0,this.softwarePanelQueryParam="&SoftwareManageLayout="}return e.prototype.ngOnInit=function(){var e=this;if(!this.appFilter)throw new Error("No appFilter provided.");if("Office"===this.appFilter||"Project"===this.appFilter||"Visio"===this.appFilter){if(this.authType=this.startupConfigService.config.authType,this.isConsumer=this.authType===C.a.MSA,this.showCommercialButton=this.authType===C.a.OrgId,this.deviceInfo=this.deviceDetector.getDeviceInfo(),this.installConfig=this.installConfigService.config,this.temporaryHideInstall=!1,this.fluentRefresh=this.capabilitiesService.capabilities.fluentRefresh,this.isConsumer){this.temporaryHideInstall=!0;var n=function(n,t){void 0===t&&(t=!1);var l=n&&n.currentSkuInfo?n.currentSkuInfo.skuType:h.b.NotDetected,i=e.startupConfigService.config.isPipl,a=(l===h.b.NotSubscribed||l===h.b.NonActive)&&!t;if(e.consumerInstallButtonRenderAllowed=!(a&&i),e.showConsumerUpsell=a&&!i,e.temporaryHideInstall=!1,e.showConsumerUpsell){e.installConfigService.config.dimeEnabled&&(e.upsellDataService.warmupDime("buybutton"),e.upsellDataService.warmupDime("installbutton"),e.eventService.whenEventFired("convertedToPaid",1).then()));var o=e.installConfig.resources;e.goPremiumBtnText=o&&o.GoPremiumBtnText,e.goPremiumDescription=o&&e.capabilitiesService.capabilities.altaBrandingChangesEnabled?o.GoPremiumDescription.replace(/<c0>/g,'<span class="alta-highlighted-text">').replace(/<\/c0>/g,"</span>"):o.GoPremiumDescription.replace(/<c0>/g,'<span class="highlighted-text">').replace(/<\/c0>/g,"</span>"),e.haveOfficeProductKeyLnkText=o&&o.HaveOfficeProductKeyLnkText,e.needHelpInstallingOfficeLnkText=o&&o.NeedHelpInstallingOfficeLnkText,e.haveOfficeProductKeyUrl=e.installConfig.haveOfficeProductKeyUrl,e.needHelpInstallingOfficeUrl=e.installConfig.needHelpInstallingOfficeUrl,e.buyMicrosoft365BtnText=null==o?void 0:o.BuyMicrosoft365BtnText;var s=e.upsellDataService.getUpsellTrackingParam();e.buyOffice365Url=e.installConfig.buyOffice365Url.replace("{OEM}",s),e.buyOffice365DimeExperience="buybutton",e.goPremiumUrl=e.installConfig.goPremiumUrl.replace("{OEM}",s),e.goPremiumDimeExperience="installbutton";var u=function(n){e.expandConsumerInstallDropdown&&e.consumerInstallContainer&&!e.consumerInstallContainer.nativeElement.contains(n.target)&&e.onToggleConsumerDropdown(!0)};e.outsideClickListener=e.renderer.listen(e.documentService.nativeDocument,"click",u),e.outsideTouchListener=e.renderer.listen(e.documentService.nativeDocument,"touchend",u);var c={};c.SkuType=h.b[l],e.instrumentationService.logImpressionEvent("ConsumerUpsell_InstallImpression",c),Object(r.a)({eventName:"ConsumerUpsell_InstallImpression",area:"Hero",subArea:"Install",distribution:h.b[l]})}};this.capabilitiesService.capabilities.workloadPublicDataEnabled?Promise.all([this.consumerPublicDataService.getConfig(),this.consumerInstallConfigService.getConfig()]).then((function(e){var t=Object(i.__read)(e,2);n(t[1],t[0].hasBusinessLicense)})).catch(n):this.consumerInstallConfigService.getConfig().then(n)}var t=function(n){setTimeout((function(){return e.eventService.broadcastEvent({name:"installButtonResponse",args:[n?n.text:""]})}),0)};this.installDataService.getGenericInstaller(this.contextService.sharedContext.officeMarket,this.deviceInfo,this.authType,this.appFilter).then((function(n){if(!n||"Hide"===n.scenario)return t(n),void e.logScenario("Hide");t(n),e.renderButton(n),setTimeout(),0),e.resizeSubscription=e.eventService.events.withScope(1).pipe(Object(c.a)()),Object(f.a)(10)).subscribe()),n.cached||e.performanceService.mark("Install_Button_Ready_"+e.appFilter),"DirectInstall"===n.scenario&&n.appId&&e.authType===C.a.OrgId&&e.installDataService.getCustomInstaller(n.appId,e.contextService.sharedContext.officeMarket).then((function(n){n&&(e.navigateToUrl=n,e.installLinks[0].url=n)})).catch((function(t){var l={};"string"==typeof t&&(l.Error=t),e.instrumentationService.logGenericEvent("Install_Custom_Error",l),Object(o.a)({eventName:"Install_Custom_Error",errorType:"Install_Error",message:"Failed to getCustomInstaller for app "+e.appFilter+", "+n.appId+" ",debugInfo:"string"==typeof t?t:""}),e.globalErrorHandler.handleError(t,"DPcFB")}))})).catch((function(n){e.globalErrorHandler.handleError(n,"mnAIg"),t(null),e.logScenario("Hide");var l={};"string"==typeof n&&(l.Error=n),e.instrumentationService.logGenericEvent("Install_Generic_Error",l),Object(o.a)({eventName:"Install_Generic_Error",errorType:"Install_Error",message:"Failed to getCustomInstaller for app "+e.appFilter+" ",debugInfo:"string"==typeof n?n:""})}))}},e.prototype.ngOnDestroy=function(){this.outsideClickListener&&this.outsideClickListener(),this.outsideTouchListener&&this.outsideTouchListener(),this.resizeSubscription&&this.resizeSubscription.unsubscribe(),Object(a.a)("Install_AppsButton",null)},e.prototype.action=function(e){var n=this;null==e||e.preventDefault(),this.showWizard?(this.downloadIframeRef.nativeElement.setAttribute("src",this.navigateToUrl),this.officeRouteService.navigateToAuxilaryRoute("install-wizard","open")):this.capabilitiesService.capabilities.contentLauncherEnabled?Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4),t.e(5)]).then(t.bind(null,"DZQ9")).then((function(e){e.launchUrl(n.navigateToUrl,{action:"Install"})})):this.urlLauncherService.openUrl(this.navigateToUrl,"Install")},e.prototype.onSelectItem=function(e){var n=e.item;n.getId()===this.additionalLinkId?(this.logClickData(this.clickData),this.capabilitiesService.capabilities.contentLauncherEnabled?Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4),t.e(5)]).then(t.bind(null,"DZQ9")).then()):this.urlLauncherService.openUrl(n.url,"InstallAdditional")):(this.logClickData(this.clickData),this.action())},e.prototype.onToggleMenu=function(e){if(e){var n="Install-dropdown-expand";this.instrumentationService.logClickEvent("Install_Click",n,this.componentArea),Object(s.a)({type:"Click",id:n,area:"Hero",subArea:"Install",result:"Expand",target:"InstallDropdown",eventName:"Install_Click"})}},e.prototype.onToggleConsumerDropdown=function(e){if(void 0===e&&(e=!1),!this.showConsumerUpsell||this.isMobile)return this.logClickData(this.clickData),void this.action();if(!this.expandConsumerInstallDropdown){var n="Consumer-Install-dropdown-expand";this.instrumentationService.logClickEvent("Install_Click",n,this.componentArea),Object(s.a)({type:"Click",id:n,area:"Hero",subArea:"Install",result:"Expand",target:"InstallDropdown",eventName:"Install_Click"})}this.expandConsumerInstallDropdown=!e&&!this.expandConsumerInstallDropdown},e.prototype.launchDime=function(e,n,t){"installbutton"===n&&this.onToggleConsumerDropdown(),this.installConfigService.config.dimeEnabled&&(e.preventDefault(),this.upsellDataService.launchDime(n,t))},e.prototype.positionMenu=function(){var e;if(null===(e=this.installContainer)||void 0===e?void 0:e.nativeElement){var n=this.contextService.isRtl,t=this.installContainer.nativeElement.offsetLeft,l=!n&&0!==t||n&&0===t;l!==this.rightAligned&&(this.rightAligned=l,this.menuModel.rightAligned=this.rightAligned),Object(a.a)("Install_AppsButton",{element:this.installContainer.nativeElement})}},e.prototype.renderButton=function(e){var n=this;if("Hide"!==e.scenario){this.showInstallSymbol="DirectInstall"===e.scenario||"RedirectToMyAccountPage"===e.scenario,this.ariaLabel=e.ariaLabel,this.id="installbutton-"+C.a[this.authType]+"-"+e.scenario,this.navigateToUrl=e.url,this.isMobile="GetMobileApps"===e.scenario;var t=this.installConfigService.config.resources;if("Office"!==this.appFilter?(this.text=!this.isMobile&&t?this.locService.format(t.DesktopApp,this.appFilter):"",this.installOfficeAppsButtonText=t&&t.InstallText,this.installOfficeDescription=t?this.locService.format(t.InstallIndividualAppText,this.appFilter):""):(this.text=this.capabilitiesService.capabilities.isPwaInUwp&&this.installConfig.pwaInstallMoveEnabled?t&&t.InstallDesktopAppsBtnText:e.text,this.installOfficeAppsButtonText=this.capabilitiesService.capabilities.isPwaInUwp&&this.installConfig.pwaInstallMoveEnabled?t&&t.InstallDesktopAppsBtnText:t&&t.InstallOfficeAppsButtonText,this.installOfficeDescription=t&&t.InstallOfficeDescription),this.installConfig.ecsInstallNoLicenseOptionsEnabled&&"RedirectToMyAccountPage"===e.scenario||this.installLinks.push({title:this.text,iconName:"Download",url:this.navigateToUrl,description:this.installOfficeDescription,ariaLabel:this.ariaLabel,ariaDescribedBy:"install-aria-desc-Download",cssClass:"install-menu-item",getId:function(){return n.id}}),"DirectInstall"===e.scenario||this.installConfig.ecsInstallNoLicenseOptionsEnabled&&"RedirectToMyAccountPage"===e.scenario){var l=this.deviceInfo.platform.platformType;if(this.showWizard=l===m.e.PC||l===m.e.Mac,this.authType===C.a.OrgId){switch(this.additionalLink=this.installConfig.commercialMySoftwarePageUrl,this.additionalLinkAriaLabel=t&&t.InstallAdditionalLinkAriaLabel,this.additionalLinkText=t&&t.InstallAdditionalLinkText,this.additionalLinkDescription=t&&t.InstallAdditionalLinkDescription,this.appFilter){case"Office":this.additionalLink+=this.softwarePanelQueryParam+"Panel_MicrosoftOffice_ClientDownload";break;case"Project":this.additionalLink+=this.softwarePanelQueryParam+"Panel_Project_ClientDownload";break;case"Visio":this.additionalLink+=this.softwarePanelQueryParam+"Panel_Visio_ClientDownload"}this.installLinks.push({title:this.additionalLinkText,iconName:"ArrowRight",url:this.additionalLink,description:this.additionalLinkDescription,ariaLabel:this.additionalLinkText,ariaDescribedBy:"install-aria-desc-additionalInstall",cssClass:"install-menu-item",getId:function(){return n.additionalLinkId}}),this.text=t&&t.InstallOfficeAppsButtonText}}this.menuModel={id:"install",items:this.installLinks,linkAriaLabel:this.installOfficeAppsButtonText,linkCssClass:"install-button "+(this.fluentRefresh?"generic-button--fluentvnext generic-button--fluentvnext--default":"generic-button generic-button--fluent install-button--fluent generic-button--fluent--secondary ms-bgc-w ms-bgc-tp-h ms-bgc-tp-a ms-fcl-tp ms-fcl-w-h ms-fcl-w-a"),linkTooltip:this.installOfficeAppsButtonText,rightAligned:this.rightAligned,cssClass:"install-dropdown-container--fluent",hostComponentArea:this.componentArea},this.logScenario(e.scenario,e.url),this.clickData=this.getClickData(e.scenario)}},e.prototype.getClickData=function(e){var n={};return n.Area=this.componentArea,void 0!==e?(n.ElementId=e.toString(),n.InstallableApp=this.appFilter,"DirectInstall"===e&&this.navigateToUrl.indexOf("token=")>0&&(n.OLSToken="true")):n.ElementId=this.additionalLinkId,{eventName:"Install_Click",params:n,metrics:[]}},e.prototype.logClickData=function(e){var n=e.params.ElementId;this.instrumentationService.logClickEvent(e.eventName,n,e.params.Area,null,null,e.params,e.metrics),Object(s.a)({type:"Click",id:n,area:"Hero",subArea:"Install",result:"Open",target:"InstallDropdown",eventName:e.eventName})},e.prototype.logScenario=function(e,n){var t={};t.ElementId=e.toString(),t.InstallableApp=this.appFilter,"DirectInstall"===e&&void 0!==n&&n&&(t.InstallerType=n.indexOf("token=")>0?"OLSInstaller":"Generic Installer"),this.instrumentationService.logGenericEvent("Install_Scenario",t),Object(u.a)({featureName:"Install",eventName:"Install_Scenario",area:"Hero",params:{ElementId:e.toString(),InstallableApp:this.appFilter}})},e}()),N=j,F(),q=t("fYis"),W=t("pzhl"),Z=t("PkQn"),z=t("tuJr"),K=t("s+Eq"),V=t("5FMq"),Q=t("vvW8"),X=t("R0N1"),Y=l.Fb({encapsulation:2,styles:[],data:{}});function J(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,1,"ohp-icon-font",[["class","install-link__install-symbol--fluent ms-fcl-np"]],null,null,null,W.b,W.a)),l.Gb(1,638976,null,0,Z.a,[k.a],{iconFontName:[0,"iconFontName"]},null)],),null)}function $(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,9,"div",[["class","install-link--fluent"]],null,null,null,null,null)),l.Gb(1,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Zb(2,{"install-link-testhook":0}),(e()(),l.qb(16777216,null,null,1,null,J)),l.Gb(4,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.Hb(5,0,null,null,4,"div",[["class","install-link__text-container--fluent"]],null,null,null,null,null)),(e()(),l.Hb(6,0,null,null,1,"div",[["class","install-link__text-medium--fluent ms-fcl-np"]],null,null,null,null,null)),(e()(),l.gc(7,null,["",""])),(e()(),l.Hb(8,0,null,null,1,"div",[["class","install-link__text-small--fluent ms-fcl-np"]],[[8,"id",0]],null,null,null,null)),(e()(),l.gc(9,null,["",""]))],(function(e,n){var t=n.component,l=e(n,2,0,n.context.item.getId()!==t.additionalLinkId);e(n,1,0,"install-link--fluent",l),e(n,4,0,t.showInstallSymbol)}),(function(e,n){e(n,7,0,n.context.item.title),e(n,8,0,l.Ob(1,"",n.context.item.ariaDescribedBy,"")),e(n,9,0,n.context.item.description)}))}function ee(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,14,"ohp-dropdown-menu",[],null,[[null,"toggleMenu"],[null,"selectItem"]],),z.b,z.a)),l.Gb(1,4440064,null,1,K.a,[l.h,V.a],{menuModel:[0,"menuModel"]},{toggleMenu:"toggleMenu",selectItem:"selectItem"}),l.cc(603979776,4,{menuItems:1}),(e()(),l.Hb(3,0,null,0,9,"div",[["ohpMenuLinkContent",""]],null,null,null,null,null)),l.Gb(4,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{ngClass:[0,"ngClass"]},null),l.Zb(5,{"install-button-text--nooutline":0}),l.Gb(6,16384,null,0,K.c,[],null,null),(e()(),l.Hb(7,0,null,null,3,"span",[],null,null,null,null,null)),l.Gb(8,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{ngClass:[0,"ngClass"]},null),l.Zb(9,{"generic-button__text":0}),(e()(),l.gc(10,null,["",""])),(e()(),l.Hb(11,0,null,null,1,"ohp-icon-font",[["iconFontName","ChevronDown"]],null,null,null,W.b,W.a)),l.Gb(12,638976,null,0,Z.a,[k.a],{cssClass:[0,"cssClass"],iconFontName:[1,"iconFontName"],size:[2,"size"]},null),(e()(),l.qb(0,null,null,1,null,$)),l.Gb(14,16384,[[4,4]],0,K.b,[l.S],null,null)],(function(e,n){var t=n.component;e(n,1,0,t.menuModel);var l=e(n,5,0,!t.fluentRefresh);e(n,4,0,l);var i=e(n,9,0,!t.fluentRefresh);e(n,8,0,i),e(n,12,0,t.fluentRefresh?"install-button-icon--fluent":"install-button-icon","ChevronDown",10)}),(function(e,n){e(n,10,0,n.component.installOfficeAppsButtonText)}))}function ne(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,3,"ohp-icon-font",[["class","install-link__install-symbol--fluent"],["iconFontName","Download"]],null,null,null,W.b,W.a)),l.Gb(1,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Zb(2,{"ms-fcl-np":0}),l.Gb(3,638976,null,0,Z.a,[k.a],{iconFontName:[0,"iconFontName"]},null)],(function(e,n){var t=e(n,2,0,!n.component.fluentRefresh);e(n,1,0,"install-link__install-symbol--fluent",t),e(n,3,0,"Download")}),null)}function te(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,8,"div",[],null,null,null,null,null)),(e()(),l.Hb(1,0,null,null,7,"a",[["class","install-button"],["href","#"]],[[8,"id",0],[1,"aria-label",0]],[[null,"click"]],),null,null)),l.Gb(2,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Zb(3,{"generic-button generic-button--fluent install-button--fluent generic-button--fluent--secondary ms-bgc-tp-h ms-bgc-tp-a ms-fcl-tp ms-fcl-w-h ms-fcl-w-a":0,"generic-button--fluentvnext generic-button--fluentvnext--default":1}),l.Gb(4,81920,null,0,Q.a,[d.a,l.o],{clickData:[0,"clickData"]},null),(e()(),l.qb(16777216,null,null,1,null,ne)),l.Gb(6,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.Hb(7,0,null,null,1,"b",[],null,null,null,null,null)),(e()(),l.gc(8,null,["",""]))],(function(e,n){var t=n.component,l=e(n,3,0,!t.fluentRefresh,t.fluentRefresh);e(n,2,0,"install-button",l),e(n,4,0,t.clickData),e(n,6,0,t.showInstallSymbol)}),(function(e,n){var t=n.component;e(n,1,0,l.Ob(1,"",t.id,""),t.ariaLabel),e(n,8,0,t.installOfficeAppsButtonText)}))}function le(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,3,"ohp-icon-font",[["class","install-button__install-symbol-container--fluent"],["cssClass","install-button__install-symbol--fluent"],["iconFontName","Download"]],null,null,null,W.b,W.a)),l.Gb(1,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Zb(2,{"ms-fcl-w-h":0}),l.Gb(3,638976,null,0,Z.a,[k.a],{cssClass:[0,"cssClass"],iconFontName:[1,"iconFontName"]},null)],(function(e,n){var t=e(n,2,0,!n.component.fluentRefresh);e(n,1,0,"install-button__install-symbol-container--fluent",t),e(n,3,0,"install-button__install-symbol--fluent","Download")}),null)}function ie(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,13,"div",[["class","consumer-install-dropdown"],["id","consumer-install-dropdown"]],null,null,null,null,null)),(e()(),l.Hb(1,0,null,null,0,"div",[["class","go-premium-description"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),l.Hb(2,0,null,null,3,"div",[["class","go-premium-link-container"]],null,null,null,null,null)),(e()(),l.Hb(3,0,null,null,2,"a",[["class","go-premium-link"],["id","go-premium-link"],["ohpDefaultLinkTarget",""]],[[8,"href",4],[1,"data-area",0],[8,"target",0]],[[null,"click"]],(function(e,n,t){var l=!0,i=e.component;return"click"===n&&(l=!1!==i.launchDime(t,i.goPremiumDimeExperience,i.goPremiumUrl)&&l),l}),null,null)),l.Gb(4,81920,null,0,X.a,[y.a],null,null),(e()(),l.gc(5,null,[" "," "])),(e()(),l.Hb(6,0,null,null,3,"div",[["class","have-product-key-link"]],null,null,null,null,null)),(e()(),l.Hb(7,0,null,null,2,"a",[["id","have-product-key-link"],["ohpDefaultLinkTarget",""]],[[8,"href",4],[1,"data-area",0],[8,"target",0]],[[null,"click"]],(function(e,n,t){var l=!0;return"click"===n&&(l=!1!==e.component.onToggleConsumerDropdown()&&l),l}),null,null)),l.Gb(8,81920,null,0,X.a,[y.a],null,null),(e()(),l.gc(9,null,[" "," "])),(e()(),l.Hb(10,0,null,null,3,"div",[["class","need-help-link"]],null,null,null,null,null)),(e()(),l.Hb(11,0,null,null,2,"a",[["id","need-help-link"],["ohpDefaultLinkTarget",""]],[[8,"href",4],[1,"data-area",0],[8,"target",0]],[[null,"click"]],(function(e,n,t){var l=!0;return"click"===n&&(l=!1!==e.component.onToggleConsumerDropdown()&&l),l}),null,null)),l.Gb(12,81920,null,0,X.a,[y.a],null,null),(e()(),l.gc(13,null,[" "," "]))],),(function(e,n){var t=n.component;e(n,1,0,t.goPremiumDescription),e(n,3,0,l.Ob(1,"",t.goPremiumUrl,""),t.componentArea,l.Wb(n,4).target),e(n,5,0,t.goPremiumBtnText),e(n,7,0,l.Ob(1,"",t.haveOfficeProductKeyUrl,""),t.componentArea,l.Wb(n,8).target),e(n,9,0,t.haveOfficeProductKeyLnkText),e(n,11,0,l.Ob(1,"",t.needHelpInstallingOfficeUrl,""),t.componentArea,l.Wb(n,12).target),e(n,13,0,t.needHelpInstallingOfficeLnkText)}))}function ae(e){return l.jc(0,[(e()(),l.Hb(0,0,[[3,0],["consumerInstallContainer",1]],null,9,"div",[],null,null,null,null,null)),(e()(),l.Hb(1,0,null,null,6,"button",[["class","install-button"],["data-clicklog","custom"]],[[8,"id",0],[1,"aria-description",0],[1,"aria-label",0]],[[null,"click"]],),null,null)),l.Gb(2,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Zb(3,{"generic-button generic-button--fluent install-button--fluent generic-button--fluent--secondary ms-bgc-tp-h ms-bgc-tp-a ms-fcl-tp ms-fcl-w-h ms-fcl-w-a":0,"generic-button--fluentvnext generic-button--fluentvnext--default":1}),(e()(),l.qb(16777216,null,null,1,null,le)),l.Gb(5,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.Hb(6,0,null,null,1,"b",[],null,null,null,null,null)),(e()(),l.gc(7,null,["",""])),(e()(),l.qb(16777216,null,null,1,null,ie)),l.Gb(9,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null)],(function(e,n){var t=n.component,l=e(n,3,0,!t.fluentRefresh,t.fluentRefresh);e(n,2,0,"install-button",l),e(n,5,0,t.showInstallSymbol),e(n,9,0,t.expandConsumerInstallDropdown&&t.showConsumerUpsell)}),(function(e,n){var t=n.component;e(n,1,0,l.Ob(1,"",t.id,""),t.ariaLabel,t.text),e(n,7,0,t.text)}))}function re(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,6,"div",[],null,null,null,null,null)),(e()(),l.Hb(1,0,null,null,5,"a",[["id","consumer-buy-button"],["ohpDefaultLinkTarget",""]],[[8,"href",4],[1,"data-area",0],[8,"target",0]],[[null,"click"]],(function(e,n,t){var l=!0,i=e.component;return"click"===n&&(l=!1!==i.launchDime(t,i.buyOffice365DimeExperience,i.buyOffice365Url)&&l),l}),null,null)),l.Gb(2,278528,null,0,G.i,[l.x,l.y,l.o,l.K],{ngClass:[0,"ngClass"]},null),l.Zb(3,{"consumer-buy-office-link--fluent generic-button generic-button--fluent generic-button--fluent--primary ms-bgc-tp ms-fcl-w ms-bgc-w-h ms-bgc-w-a ms-fcl-tp-h ms-fcl-tp-a ms-fcl-w-f":0,"generic-button--fluentvnext generic-button--fluentvnext--primary":1}),l.Gb(4,81920,null,0,X.a,[y.a],null,null),(e()(),l.Hb(5,0,null,null,1,"b",[],null,null,null,null,null)),(e()(),l.gc(6,null,["",""]))],(function(e,n){var t=n.component,l=e(n,3,0,!t.fluentRefresh,t.fluentRefresh);e(n,2,0,l),e(n,4,0)}),(function(e,n){var t=n.component;e(n,1,0,l.Ob(1,"",t.buyOffice365Url,""),t.componentArea,l.Wb(n,4).target),e(n,6,0,t.buyMicrosoft365BtnText)}))}function oe(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,5,"div",[],null,null,null,null,null)),(e()(),l.Hb(1,0,null,null,4,"div",[["class","section__buttons-container install__buttons-container"]],null,null,null,null,null)),(e()(),l.qb(16777216,null,null,1,null,ae)),l.Gb(3,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.qb(16777216,null,null,1,null,re)),l.Gb(5,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null)],(function(e,n){var t=n.component;e(n,3,0,t.showInstallButton&&t.consumerInstallButtonRenderAllowed),e(n,5,0,t.showConsumerUpsell)}),null)}function se(e){return l.jc(0,[(e()(),l.Hb(0,0,[[2,0],["installContainer",1]],null,7,"div",[["id","install-container--fluent"]],null,null,null,null,null)),(e()(),l.qb(16777216,null,null,1,null,ee)),l.Gb(2,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.qb(16777216,null,null,1,null,te)),l.Gb(4,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.qb(16777216,null,null,1,null,oe)),l.Gb(6,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null),(e()(),l.Hb(7,0,[[1,0],["installerBinaryDownload",1]],null,0,"iframe",[["style","display: none"]],null,null,null,null,null))],(function(e,n){var t=n.component;e(n,2,0,!t.isConsumer&&!t.isMobile&&t.showInstallButton),e(n,4,0,!t.isConsumer&&t.isMobile),e(n,6,0,t.isConsumer&&!t.temporaryHideInstall)}),null)}function ue(e){return l.jc(0,[l.cc(671088640,1,{downloadIframeRef:0}),l.cc(671088640,2,{installContainer:0}),l.cc(671088640,3,{consumerInstallContainer:0}),(e()(),l.qb(16777216,null,null,1,null,se)),l.Gb(4,16384,null,0,G.k,[l.W,l.S],{ngIf:[0,"ngIf"]},null)],),null)}var ce=l.Db("ohp-install",j,(function(e){return l.jc(0,[(e()(),l.Hb(0,0,null,null,1,"ohp-install",[],null,null,null,ue,Y)),l.Gb(1,245760,null,0,j,[k.a,w.a,y.a,m.c,b.a,g.a,p.b,A.a,B,d.a,D.a,v.a,I.b,l.K,C.b,O.a,S.a,x.a],null,null)],),null)}),{appFilter:"appFilter",componentArea:"componentArea",showInstallButton:"showInstallButton"},{},[]),fe=t("xIlw"),pe=t("+a0u"),de=t("lQwO"),he=t("+P5Z"),me=t("X+PR"),be=t("CfLe"),ge=t("ej7j"),ve=t("VY7U"),Ie=t("CCRL"),Se=l.Eb(F,[],(function(e){return l.Tb([l.Ub(512,l.k,l.hb,[[8,[q.a,ce]],[3,l.k],l.D]),l.Ub(4608,G.m,G.l,[l.z]),l.Ub(1073742336,G.c,G.c,[]),l.Ub(1073742336,fe.a,fe.a,[]),l.Ub(1073742336,pe.a,pe.a,[]),l.Ub(1073742336,de.a,de.a,[]),l.Ub(1073742336,he.a,he.a,[]),l.Ub(1073742336,me.o,me.o,[[2,me.u],[2,me.n]]),l.Ub(1073742336,be.a,be.a,[]),l.Ub(1073742336,ge.a,ge.a,[]),l.Ub(1073742336,ve.a,ve.a,[]),l.Ub(1073742336,F,F,[]),l.Ub(256,Ie.a,N,[])])}))},eC4l:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var l=t("0Pjc"),i},elnK:function(e,n,t){"use strict";var l=t("niq1"),i=t("mXGw"),a=t("sYGy").useSyncExternalStoreWithSelectorvar o=function(e){var n="function"==typeof e?l.createStore(e):e,t;return Object.assign(t,n),t},s=function(e){return e?o(e):o};n.create=s,n.default=function(e){return s(e)},n.useStore=r,Object.keys(l).forEach()),e.exports=n&&n.default||{},Object.assign(e.exports,n)},huqQ:function(e,n,t){"use strict";e.exports=t("y8H0")},niq1:function(e,n,t){"use strict";var l=function(e){var n,t=new Set,l,i=function(){return n},a={setState:l,getState:i,subscribe,destroy};return n=e(l,i,a),a},i;n.createStore=i,n.default,e.exports=n&&n.default||{},Object.assign(e.exports,n)},sYGy,vvW8:function(e,n,t){"use strict";t.d(n,"a",));var l=t("HQCr"),i=(t("hhzZ"),function()return e.prototype.onClick=function(e){if(!e.defaultPrevented&&this.clickData){var n=this.clickData.params.ElementId||"Unknown",t=this.clickData.params.Referral,i=this.clickData.params.Area;this.instrumentationService.logClickEvent(this.clickData.eventName,n,i,t,"Web",this.clickData.params,this.clickData.metrics),Object(l.a)(n,i||"Other",t,"Other","Click",this.clickData.eventName)}},e.prototype.ngOnInit,e}())},y8H0}]);
//# sourceMappingURL=install.837fa8c06156b0d4ceb4.chunk.v7.js.map