(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"2P7h":function(e,t,r){"use strict";r.d(t,"b",(function(){return I})),r.d(t,"c",(function(){return w})),r.d(t,"a",(function(){return T}));var n,i,a=r("gcR/"),o=r.n(a),c=r("J4zp"),s=r.n(c),l=r("q1tI"),u=r.n(l),d=r("MShG"),p=r("5Aio"),b=r("qkuN"),m=r("kc0S"),f=r("EOa1"),y=r("+yCz"),v=r("hgSA"),g=r("DRvx"),h=r("xIq5"),S=r("dZ3W"),I=u.a.createContext({setPersistentFooter:function(e){}}),w=u.a.createContext({setUserProfile:function(e){}}),O=function(e){var t=e.pageContentMaxWidth,r=e.children,a=Object(l.useContext)(p.b),c=Object(l.useState)(null),u=s()(c,2),O=u[0],T=u[1],C=Object(l.useState)(null),N=s()(C,2),x=N[0],j=N[1];Object(l.useEffect)((function(){var e;Object(b.f)(),Object(m.c)(null!=x&&null!==(e=x.subscriptions)&&void 0!==e&&e.length?"sub":"regi","")}),[]);var P=Object(l.useMemo)((function(){return x?Object(g.a)(x):[]}),[x]),E={setPersistentFooter:function(e){T(e)}},A={setUserProfile:function(e){j(e)}},k=function(){a.closeDialog()},L={emailAddress:"",subscriptions:(null==x?void 0:x.subscriptions)||[]};return o()(I.Provider,{value:E},void 0,o()(w.Provider,{value:A},void 0,o()(f.b.Provider,{value:L},void 0,o()(d.q,{headerComponent:o()(d.l,{username:x?x.displayName:void 0,pageHeader:"",nytLogoOnClick:b.i,userProfileOnClick:x?function(){Object(b.j)();var e=(null==x?void 0:x.displayName)||"";a.displayCustomModalComponent((function(t){return o()(y.a,{rootElementRef:t,displayName:e,onClose:a.closeDialog,navigationMenu:o()(v.a,{dataTestId:"user-drop-down-nav-menu",onRouterUpdate:k,currentPath:"",navItems:P,trackingContext:{moduleName:h.b,moduleContext:h.a}})})}))}:void 0}),footerComponent:n||(n=o()(S.a,{})),messagingUnitComponent:i||(i=o()(p.c,{})),persistentFooterComponent:O,pageContentMaxWidth:t},void 0,r))))};O.displayName="FeaturePageInternalLayout";var T=function(e){var t=e.pageContentMaxWidth,r=e.children;return u.a.createElement(u.a.Fragment,null,o()(O,{pageContentMaxWidth:t},void 0,r))}},"3dlu":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("gcR/"),i=r.n(n),a=(r("q1tI"),r("MShG")),o=r("5lfh"),c=Object(o.d)("div",{target:"eebk0cd0"})("display:grid;grid-template-columns:1fr min-content;grid-gap:",a.hb[1],";padding:",a.hb[2],";"),s=function(e){return i()(c,{"data-testid":"".concat(e.dataTestId,":container")},void 0,i()(a.r,{id:"".concat(e.dataTestId,":content"),typeStyle:a.Z.body2,dataTestId:"".concat(e.dataTestId,":content")},void 0,e.children),i()("div",{},void 0,i()(a.k,{onClick:e.onClose,dataTestId:"".concat(e.dataTestId,":close-button"),ariaLabel:"Close Modal"})))};s.displayName="InformationalModal"},"4gCf":function(e,t,r){"use strict";var n,i=r("gcR/"),a=r.n(i),o=(r("q1tI"),r("MShG")),c=r("/Efl"),s=function(e){var t=e.onClick;return a()(o.x,{dataTestId:"customer-care-link",to:c.b.CONTACT_US_LINK,targetTab:o.db.newTab,onClick:t,colorVariant:o.N.text.interactiveInline},void 0,n||(n=a()(c.a,{copy:"contact Customer Care"})))};s.displayName="CustomerCareLink",t.a=s},"6Tve":function(e,t,r){"use strict";r.r(t),r.d(t,"ProductSwitch",(function(){return zi}));var n=r("gcR/"),i=r.n(n),a=r("yXPU"),o=r.n(a),c=r("lSNA"),s=r.n(c),l=r("J4zp"),u=r.n(l),d=r("o0o1"),p=r.n(d),b=r("q1tI"),m=r.n(b),f=r("QS0n"),y=r("Kxyt"),v=r("MShG"),g=r("rPmE"),h=r("2P7h"),S=r("wYF2"),I=r("TlKO"),w=r("kji5"),O=r("xEI7"),T=r("Ke7S"),C=r("u0vE"),N=r("jDSg"),x=r("4QM3"),j=function(e){var t=e.copy,r=e.dataTestId,n=i()(v.r,{typeStyle:v.Z.body3},void 0,t);return i()(v.n,{title:n,startIconName:v.cb.ui.alert,startIconColorVariant:v.N.icon.primary,dataTestId:r})};j.displayName="ProductSwitchAlert";var P=r("ZGhy"),E=r("qSds"),A=r("Ijdr"),k=r("5lfh"),L=Object(k.b)("border:1px solid #bbb;"),D=Object(k.b)("box-shadow:0px 2px 12px rgba(0,0,0,0.16);"),M=function(e){return"UPGRADE"===e.action?D:""},U=Object(k.d)("button",{target:"e1uavcuu0"})("align-items:center;background:transparent;border:none;cursor:pointer;display:flex;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),R=Object(k.d)("div",{target:"e1uavcuu1"})(L,";border-radius:",v.hb[.5],";display:grid;grid-template-columns:auto;grid-row-gap:",v.hb[1.5],";padding:",v.hb[3]," ",v.hb[2]," ",v.hb[3]," ",v.hb[2],";@media (min-width:",v.I.MEDIUM,"){grid-template-columns:auto ","160px",";grid-column-gap:",v.hb[1],";}"),H=Object(k.d)("div",{target:"e1uavcuu2"})("display:grid;row-gap:",v.hb[4],";"),_=Object(k.d)("div",{target:"e1uavcuu3"})("display:grid;row-gap:",v.hb[2],";"),F=Object(k.d)("span",{target:"e1uavcuu4"})("white-space:nowrap;"),V=Object(k.d)("div",{target:"e1uavcuu5"})(M," ",L," border-radius:",v.hb[.5],";display:grid;grid-template-columns:auto;padding:",v.hb[3]," ",v.hb[2],";grid-row-gap:",v.hb[1.5],";@media (min-width:",v.I.MEDIUM,"){grid-template-columns:auto ","160px",";grid-column-gap:",v.hb[3],";grid-row-gap:0;}"),G=Object(k.d)("div",{target:"e1uavcuu6"})("display:grid;grid-template-columns:auto;align-items:center;@media (min-width:",v.I.MEDIUM,"){grid-column-gap:0;}@media (min-width:",v.I.LARGE,"){grid-template-columns:max-content max-content;grid-column-gap:",v.hb[1],";}"),Z=Object(k.d)("div",{target:"e1uavcuu7"})("padding:3px ",v.hb[.5],";"),B=Object(k.d)("div",{target:"e1uavcuu8"})("margin-left:0;@media (min-width:",v.I.MEDIUM,"){margin-left:calc(22px + ",v.hb[1],");}"),W=Object(k.d)("div",{target:"e1uavcuu9"})("display:none;@media (min-width:",v.I.MEDIUM,"){display:block;}"),q=Object(k.d)("div",{target:"e1uavcuu10"})("display:block;@media (min-width:",v.I.MEDIUM,"){display:none;}"),Y=Object(k.d)("div",{target:"e1uavcuu11"})("margin-top:",v.hb[1.5],";@media (min-width:",v.I.MEDIUM,"){margin-left:30px;}@media (min-width:",v.I.LARGE,"){margin:0px;}"),K=Object(k.d)("div",{target:"e1uavcuu12"})("display:flex;flex-direction:row;"),z=Object(k.d)("div",{target:"e1uavcuu13"})(L,";border-radius:",v.hb[.5],";",D," display:flex;flex-direction:column;padding:",v.hb[3],";@media (min-width:",v.I.MEDIUM,"){display:flex;flex-direction:row;justify-content:space-between;}"),$=Object(k.d)("div",{target:"e1uavcuu14"})("display:flex;flex-direction:column;padding:0 ",v.hb[3]," 0 0;"),Q=Object(k.d)("div",{target:"e1uavcuu15"})("display:flex;flex-direction:column;row-gap:",v.hb[1],";align-items:start;flex-wrap:wrap;@media (min-width:",v.I.MEDIUM,"){flex-direction:row;column-gap:",v.hb[1],";align-items:center;}"),J=Object(k.d)("div",{target:"e1uavcuu16"})("display:flex;flex-direction:column;margin-top:",v.hb[1.5],";min-width:160px;@media (min-width:",v.I.MEDIUM,"){margin-top:0;width:160px;}"),X=Object(k.d)("div",{target:"e1uavcuu17"})("display:flex;flex-direction:column;"),ee=Object(k.d)("div",{target:"e1uavcuu18"})("display:flex;flex-direction:row;justify-content:space-between;width:100%;"),te=Object(k.d)("div",{target:"e1uavcuu19"})("color:white;height:0;word-break:break-word;padding:0 2px;"),re=Object(k.d)("div",{target:"e1uavcuu20"})("display:grid;grid-row-gap:",v.hb[.5],";"),ne=Object(k.d)("div",{target:"e1uavcuu21"})("line-height:0;display:grid;grid-template-columns:max-content 1fr;grid-column-gap:",v.hb[.5],";align-items:center;white-space:nowrap;"),ie=Object(k.d)("span",{target:"e1uavcuu22"})("text-decoration:line-through;"),ae=Object(k.d)("span",{target:"e1uavcuu23"})("overflow-wrap:anywhere;"),oe=Object(k.d)("div",{target:"e1uavcuu24"})(D,";",L,";border-radius:",v.hb[.5],";display:grid;grid-template-columns:auto;padding:",v.hb[3]," ",v.hb[2],";grid-row-gap:",v.hb[1.5],";@media (min-width:",v.I.MEDIUM,"){grid-row-gap:0;}"),ce=r("fTxn"),se="product-switch-options",le="product-switch-review-payment",ue="product-switch-ineligible",de=function(e,t,r){Object(ce.q)({moduleName:e,moduleLabel:t,moduleContext:r})},pe=function(e,t){var r=t.elementLabel,n=t.elementName,i=t.elementUrl,a=t.moduleContext,o=t.moduleLabel;Object(ce.r)({eventType:"click",eventTrigger:"module",elementName:n,elementLabel:r,elementUrl:i,moduleContext:a,moduleLabel:o,moduleName:e})},be=function(e,t){var r;pe(se,{elementName:"go-to-hd-lp",elementLabel:"view-delivery-options",elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href,moduleContext:JSON.stringify({component:t}),moduleLabel:"step1"})},me=function(e){var t,r;pe(ue,{elementName:"CustomerCareLink",elementLabel:(null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent)||"",elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href,moduleContext:"",moduleLabel:"step0"})},fe=function(e){var t,r;Object(ce.p)({moduleName:"product-switch-confirmation",elementName:"StartOnboardingLink",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent,elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href})},ye=function(e){var t,r;Object(ce.p)({moduleName:"product-switch-confirmation",elementName:"ReturnToEntryPointLink",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent,elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href})},ve=function(e,t){var r,n;Object(ce.p)({moduleName:"product-switch-confirmation",elementName:t,elementLabel:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.textContent,elementUrl:null==e||null===(n=e.currentTarget)||void 0===n?void 0:n.href})},ge=function(e){Object(ce.x)("ProductSwitch",ue,"InternalUserWarningBannerSlackChannelLink",e)},he=m.a.createElement(m.a.Fragment,null,"Thank you for staying with ",i()(F,{},void 0,"The Times.")),Se=m.a.createElement(m.a.Fragment,null,"You’re ready to enjoy everything ",i()(F,{},void 0,"The Times")," has"," ",i()(F,{},void 0,"to offer.")),Ie=m.a.createElement(m.a.Fragment,null,"You will soon be able to enjoy everything ",i()(F,{},void 0,"The Times")," has"," ",i()(F,{},void 0,"to offer.")),we=function(e){return e.map((function(e){return E.t[e]||""}))},Oe=function(e){return"Your subscription has been updated to ".concat(e,".")},Te=function(e){return"Because you changed your payment method, it may take a few hours to update your subscription to ".concat(e,".")},Ce=function(e){return"You now have unlimited access to ".concat(Object(E.x)(we(e)),".")},Ne=function(e){return"Starting today, you will no longer have access to ".concat(Object(E.w)(we(e)),".")},xe=function(e){return"When the update is completed, you will no longer have access to ".concat(Object(E.w)(we(e)),".")},je=function(e,t){return"You now have access to ".concat(Object(E.w)(we(e))," at a reduced rate until ").concat(t,".")},Pe=function(e,t){return"It may take a few hours to process your payment method. When the update is completed, you will have access to ".concat(Object(E.w)(we(e))," at a reduced rate until ").concat(t,".")},Ee=function(e){return"We’ve sent a confirmation email to ".concat(e,".")},Ae=function(e){return"A confirmation email will then be sent to ".concat(e,".")},ke=r("/Efl"),Le=r("iaGo"),De=r("fu10"),Me=r("2i44"),Ue=[{id:"news-entry-point",subscriptionLabel:De.f.NEWS,title:Le.f,icon:v.cb.ui.brandT,url:Object(Me.k)()},{id:"games-entry-point",subscriptionLabel:De.f.GAMES,title:Le.e,icon:v.cb.ui.brandGames,url:Object(Me.d)()},{id:"cooking-entry-point",subscriptionLabel:De.f.COOKING,title:Le.d,icon:v.cb.ui.brandCooking,url:Object(Me.b)()},{id:"wirecutter-entry-point",subscriptionLabel:De.f.WIRECUTTER,title:Le.g,icon:v.cb.ui.brandWirecutter,url:Object(Me.n)()},{id:"athletic-entry-point",subscriptionLabel:De.f.ATHLETIC,title:Le.c,icon:v.cb.ui.brandAthletic,url:Object(Me.a)()}],Re=function(e){return i()(re,{"data-testid":"product-entry-points"},void 0,Ue.map((function(t){return i()(ne,{},t.id,i()(v.s,{typeStyle:v.Z.body2},void 0,i()(v.x,{dataTestId:t.id,to:t.url,targetTab:v.db.newTab,onClick:function(r){return e(r,t.id)}},void 0,i()(ke.a,{copy:t.title}))))})))};Re.displayName="renderProductsEntryPoints";var He=r("RIqP"),_e=r.n(He),Fe=r("nJnD"),Ve=[{breadCrumbTags:["wordle"],copy:"Return to your game"},{breadCrumbTags:["vi"],copy:"Return to your article"},{breadCrumbTags:["wirecutter"],copy:"Return to your article"},{breadCrumbTags:["cooking"],copy:"Return to your recipe"},{breadCrumbTags:["account"],copy:"Return to your account"}],Ge=["wordle","vi","wirecutter","cooking","account"],Ze=function(e,t){return e.some((function(e){return[e.pageCode].concat(_e()(e.additionalTags)).some((function(e){return Ge.includes(e)}))}))?Object(Fe.a)(t||""):"/account/subscription"},Be=function(e){var t=e.entryPointBreadCrumbs,r=e.entryPointDestinationUrl;return i()(v.A,{dataTestId:"return-to-entry-point-link",href:Ze(t,r),onClick:ye,targetTab:"sameTab",type:v.eb.navigation},"return-to-entry-point-link",i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary},void 0,function(e){var t=e.map((function(e){return[e.pageCode].concat(_e()(e.additionalTags))})).flat(),r=Ve.find((function(e){return e.breadCrumbTags.every((function(e){return t.includes(e)}))}));return r?r.copy:"Go to your account"}(t)))};Be.displayName="ReturnToEntryPointLink";var We,qe,Ye=function(e){return"Get started with ".concat(e)},Ke=function(e){var t=e.productName;return i()(v.A,{listItemHeader:i()(v.s,{typeStyle:v.Z.subtitle2},void 0,Ye(t)),dataTestId:"start-all-access-onboarding-link",href:Object(Me.m)("account-product-switch"),onClick:fe,targetTab:"sameTab",type:v.eb.navigation},"start-onboarding-link",i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,"We'll help you make the most of your new subscription."))};Ke.displayName="StartOnboardingLink";var ze=function(e){var t=e.subscriptionName,r=e.entryPointBreadCrumbs,n=e.entryPointDestinationUrl,a=e.inGraceProductSwitch;return i()("div",{},void 0,!a&&i()(Ke,{productName:t}),i()(Be,{entryPointBreadCrumbs:r,entryPointDestinationUrl:n}),!a&&i()(v.A,{listItemHeader:i()(v.s,{typeStyle:v.Z.subtitle2},void 0,"Ready to dive in?"),dataTestId:"explore-products-area",type:v.eb.information},"explore-products-area",m.a.createElement(m.a.Fragment,null,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,function(e){return"Start exploring ".concat(e,".")}(t)),We||(We=i()(v.H,{space:"2"})),Re(ve),qe||(qe=i()(v.H,{space:"2"})))))};ze.displayName="AllAccessConfirmationContent";var $e=function(e){var t,r=e.newSubscriptionLabels,n=e.entryPointBreadCrumbs,a=e.entryPointDestinationUrl,o=e.inGraceProductSwitch,c=(t=r,Ue.find((function(e){return t.includes(e.subscriptionLabel)})));if(!c)return null;var s,l=c.subscriptionLabel===De.f.NEWS&&!o;return i()("div",{},void 0,l&&i()(Ke,{productName:c.title}),i()(Be,{entryPointBreadCrumbs:n,entryPointDestinationUrl:a}),!o&&i()(v.A,{listItemHeader:i()(v.s,{typeStyle:v.Z.subtitle2},void 0,"Ready to dive in?"),dataTestId:"explore-product-area",href:c.url,onClick:function(e){return ve(e,c.id)},targetTab:v.db.newTab,type:v.eb.navigation},"explore-product-area",i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,(s=c.title,"Start exploring ".concat(s," homepage.")))))};$e.displayName="SingleProductConfirmationContent";var Qe,Je,Xe,et,tt,rt,nt,it,at,ot,ct,st,lt=r("K8dI"),ut=function(e){var t=e.accountInfo,r=e.originalSubscriptions,n=e.queryParameters,a=e.productSwitchExecuteMutationResponse,o=e.selectedOffer,c=Object(T.c)();Object(b.useEffect)((function(){var e;o&&0!==r.length&&(e=o,o.subscriptionLabels.filter((function(e){return E.b.includes(e)})),de("product-switch-confirmation","step3",e.offerChainId))}),[]);var s=null==a?void 0:a.executeProductSwitch;if(!o||0===r.length||null==s||!s.success)return c.to(Object(A.e)("/product-switch",n)),null;var l,u=s.asynchronousTransaction,d=(null==s?void 0:s.concurrentThirdPartySubscriptionNames)||[],p=function(e,t,r,n){var i,a=Object(E.e)(t),o=Object(E.f)(e),c=function(e,t){return e.filter((function(e){return!t.includes(e)}))}(o,a),s=Object(E.d)(t);if(Object(E.h)(o,a)){var l=function(e,t){return e?t.maxShares?1===t.maxShares?"\n      Bonus subscriptions will be canceled and you will have only one\n      bonus subscription available with your new subscription.\n    ":"\n    Bonus subscriptions will be canceled and you will have ".concat(t.maxShares,"\n    bonus subscriptions available with your new subscription.\n  "):"\n      Bonus subscriptions will be canceled.\n    ":""}(Object(E.j)(e),t);return{header:Se,subHeaders:["".concat(Oe(t.subscriptionName)," ").concat(Ce(a)," ").concat(Ee(r)),"\n  Your full payment will be captured, and any excess payment made for your Home Delivery subscription\n  will be refunded shortly after canceling.\n","".concat("\n  It may take a few days for your Home Delivery subscription to cancel.\n  You may receive your paper during that time.\n"," ").concat(l)]}}return Object(E.g)(o,a)?n?{header:he,subHeaders:["".concat(Pe(a,s)," ").concat(Ae(r))]}:{header:he,subHeaders:["".concat(je(a,s)," ").concat(Ee(r))]}:Object(E.r)(t.bundle)?n?{header:Ie,subHeaders:["".concat(Te(t.subscriptionName)," ").concat((i=a,"When the update is completed, you will have unlimited access to ".concat(Object(E.x)(we(i)),".")),"\n        ").concat(Ae(r))]}:{header:Se,subHeaders:["".concat(Oe(t.subscriptionName)," ").concat(Ce(a)," ").concat(Ee(r))]}:n?{header:he,subHeaders:["".concat(Te(t.subscriptionName)," ").concat(xe(c),"\n        ").concat(Ae(r))]}:{header:he,subHeaders:["".concat(Oe(t.subscriptionName)," ").concat(Ne(c)," ").concat(Ee(r))]}}(r,o,t.emailAddress,u),f=p.header,y=p.subHeaders,g=0===(l=d).length?null:l.length>1?m.a.createElement(m.a.Fragment,null,"This purchase will not replace your existing subscriptions to"," ",Object(E.w)(l),". To cancel the subscriptions, you can visit the"," ",Qe||(Qe=i()(v.x,{to:x.APPLE_SUBSCRIPTIONS_LINK},void 0,P.appleAppStoreTitleCopy)),","," ",Je||(Je=i()(v.x,{to:x.GOOGLE_SUBSCRIPTIONS_LINK},void 0,P.googlePlayTitleCopy))," or"," ",Xe||(Xe=i()(v.x,{to:x.AMAZON_SUBSCRIPTIONS_LINK},void 0,P.amazonAppStoreTitleCopy,"."))):m.a.createElement(m.a.Fragment,null,"This purchase will not replace your existing subscription to"," ",Object(E.w)(l),". To cancel the subscription, you can visit the"," ",et||(et=i()(v.x,{to:x.APPLE_SUBSCRIPTIONS_LINK},void 0,P.appleAppStoreTitleCopy)),","," ",tt||(tt=i()(v.x,{to:x.GOOGLE_SUBSCRIPTIONS_LINK},void 0,P.googlePlayTitleCopy))," or"," ",rt||(rt=i()(v.x,{to:x.AMAZON_SUBSCRIPTIONS_LINK},void 0,P.amazonAppStoreTitleCopy,".")));return i()("div",{"data-testid":"ps-confirmation-page"},void 0,!!g&&m.a.createElement(m.a.Fragment,null,i()(j,{copy:g,dataTestId:"third-party-sub-alert"}),nt||(nt=i()(v.H,{space:"4"}))),i()(v.m,{typeStyle:v.Z.display2,colorVariant:v.N.text.primary},void 0,f),it||(it=i()(v.H,{space:"2"})),y.map((function(e,t){return i()(m.a.Fragment,{},"subheader-".concat(t),i()(v.r,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,i()(ae,{},void 0,e)),at||(at=i()(v.H,{space:"3"})))})),ot||(ot=i()(v.H,{space:"3"})),Object(E.s)(o.bundle)?i()($e,{newSubscriptionLabels:o.subscriptionLabels,entryPointBreadCrumbs:Object(lt.b)(n.sourceId),entryPointDestinationUrl:n.redirectUri,inGraceProductSwitch:u}):i()(ze,{subscriptionName:o.subscriptionName,entryPointBreadCrumbs:Object(lt.b)(n.sourceId),entryPointDestinationUrl:n.redirectUri,inGraceProductSwitch:u}),ct||(ct=i()(v.g,{level:"secondary"})),st||(st=i()(v.H,{space:"3"})),i()(v.r,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,"Help us improve."," ",i()(v.x,{to:"https://nyt.qualtrics.com/jfe/form/SV_5w3cwHHm36tCqRU?rid=&dev=&ten=&pbt=&nbt=",targetTab:"newTab",colorVariant:v.N.text.interactiveInline},void 0,"Tell us about this experience.")))};ut.displayName="Confirmation";var dt,pt,bt=r("caSQ"),mt=r("pJnO"),ft=function(e){return"Free"===e.tierCycleAmount},yt=function(e){return 1===e.tierCycleRecurrences},vt=function(e){return"year"===(null==e?void 0:e.tierCycleDurationStr)},gt=function(e,t){return e.tierCycleDurationStr===t.tierCycleDurationStr&&e.tierCycleAmount!==t.tierCycleAmount},ht=function(e){return Object(E.v)(e.tierWeeklyAmount)},St=function(e){return Object(E.v)(e.tierCycleAmount)},It=function(e){return e.tierCycleDurationStr.replace("one ","")},wt=function(e){return Object(mt.f)(e.tierLastDate)},Ot=function(e,t){return ft(e)?e.tierLastDate?["","Free until ".concat(wt(e))]:["","Free"]:yt(e)?t&&gt(e,t)?[St(t),"".concat(St(e)," for the first ").concat(It(e))]:["","".concat(St(e)," for the first ").concat(It(e))]:function(e,t){return!vt(e)&&!vt(t)}(e,t)?t&&gt(e,t)?[ht(t),"".concat(ht(e),"/week")]:["","".concat(ht(e),"/week")]:t&&gt(e,t)?[St(t),"".concat(St(e),"/").concat(It(e))]:["","".concat(St(e),"/").concat(It(e))]},Tt=function(e){return e.map((function(e){return"".concat(e.tierLastDate?", then ":", ").concat(St(e)," every ").concat(It(e)).concat(e.tierLastDate?" through ".concat(wt(e)):" afterwards")})).join("")},Ct=function(e){var t=e.subscriptionBillingTiers,r=function(e){return e.find((function(e){return"ACTIVE"===e.tierStatus}))}(t),n=function(e){return e.find((function(e){return"FUTURE"===e.tierStatus}))}(t),a=function(e){return e.filter((function(e){return"FUTURE"===e.tierStatus}))}(t);if(!r)return null;var o=Ot(r,n),c=u()(o,2),s=c[0],l=c[1],d=function(e,t){var r=u()(t,1)[0],n=ft(e)?"Then billed as":"Billed as";return e.tierLastDate?r?r&&yt(e)&&vt(r)?"".concat(n," ").concat(St(r)," annually after ").concat(wt(e)):r&&ft(e)?"".concat(n," ").concat(St(r)," every ").concat(It(r)," through ").concat(wt(r)).concat(Tt(t.slice(1))):r&&function(e,t){return e.tierCycleDurationStr!==t.tierCycleDurationStr}(e,r)?"".concat(n," ").concat(St(r)," every ").concat(It(r)," after ").concat(wt(e)):"".concat(n," ").concat(St(e)," every ").concat(It(e)," through ").concat(wt(e)).concat(Tt(t)):"":"".concat(n," ").concat(St(e)," every ").concat(It(e))}(r,a);return i()("div",{},void 0,i()("div",{"data-testid":"sub-price-expression-header"},void 0,s&&i()(v.s,{typeStyle:v.Z.body2,colorVariant:v.N.text.secondary},void 0,i()(ie,{},void 0,s," ")),i()(v.s,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,l)),dt||(dt=i()(v.e,{defaultSpace:"0.5",mediumScreenSpace:"1"})),i()("div",{"data-testid":"sub-price-expression-description"},void 0,i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,d)))};Ct.displayName="CurrentSubscriptionPriceExpression";var Nt,xt=function(e){var t=e.currentSubscription;return i()(R,{},void 0,i()("div",{},void 0,i()(v.C,{colorVariant:v.N.text.primary,level:"2",dataTestId:"current-sub-name"},void 0,t.subscriptionName),pt||(pt=i()(v.e,{defaultSpace:"1.5",mediumScreenSpace:"1"})),i()(v.s,{dataTestId:"current-sub-body",typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,t.subscriptionDescription)),i()("div",{},void 0,i()(Ct,{subscriptionBillingTiers:t.billingInformation.billingTiers})))};xt.displayName="CurrentSubscriptionCard";var jt,Pt,Et,At,kt=function(e){var t=e.currentSubscriptions,r=1===t.length?"Current subscription":"Current subscriptions";return i()("div",{},void 0,i()(v.s,{typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,r),t.map((function(e){return i()(m.a.Fragment,{},e.subscriptionId,Nt||(Nt=i()(v.H,{space:"1"})),i()(xt,{currentSubscription:e}))})))};kt.displayName="CurrentSubscriptionsCollection";var Lt,Dt,Mt=function(){return"If you are testing with Product Switch, you may be encountering this error because the account you are testing with is not eligible for the offer being used. Make sure to use an account that has a paid, digital subscription with the correct price to be eligible for the offer."},Ut=function(e){return"If you are testing with Product Switch, you may be encountering this error because the account you are testing with is not eligible for Product Switch. Ineligibility reason: ".concat(e.ineligibilityReason,". Make sure to use an account that has a paid, digital subscription.")},Rt=function(e){var t=e.slackGroup,r=e.slackChannel;return m.a.createElement(m.a.Fragment,null,"If you need help, message ",t," in the ",r," channel in Slack.")},Ht=Object(k.d)("div",{target:"e1q7mfsc0"})("background-color:",v.O.background.secondary,";margin-top:calc(-",v.hb[6]," - ",v.hb[.5],");margin-bottom:calc(",v.hb[6]," + ",v.hb[.5],");margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-top:",v.hb[3],";padding-bottom:",v.hb[3],";padding-left:",v.hb[4],";padding-right:",v.hb[3],";display:grid;grid-template-columns:1fr;grid-row-gap:",v.hb[2],";@media (min-width:",v.I.MEDIUM,"){margin-top:-",v.hb[8],";margin-bottom:",v.hb[8],";}"),_t=Object(k.d)("div",{target:"e1q7mfsc1"})("display:grid;grid-template-columns:1fr min-content;"),Ft=function(e){var t=Object(b.useState)(!1),r=u()(t,2),n=r[0],a=r[1];if(Object(b.useEffect)((function(){n||Object(ce.v)("ProductSwitch",ue,"InternalUserWarningBanner")}),[]),n)return null;var o="INVALID_OFFER"===e.eligibilityReason?jt||(jt=i()(ke.a,{copy:Mt})):i()(ke.a,{copy:Ut,params:{ineligibilityReason:e.eligibilityReason}});return i()(Ht,{"data-testid":"ps-internal-user-warning"},void 0,i()(_t,{},void 0,i()(v.m,{headerLevel:"2",typeStyle:v.Z.title1},void 0,Pt||(Pt=i()(ke.a,{copy:"New York Times product testing"}))),i()(v.k,{onClick:function(e){!function(e){Object(ce.u)("ProductSwitch",ue,"InternalUserWarningBannerDismissButton",e)}(e),a(!0)}})),i()(v.r,{typeStyle:v.Z.body2},void 0,o),i()(v.r,{typeStyle:v.Z.body2},void 0,i()(ke.a,{copy:Rt,params:{slackGroup:i()(v.s,{typeStyle:v.Z.subtitle2},void 0,Et||(Et=i()(ke.a,{copy:"@account-eng"}))),slackChannel:i()(v.x,{to:"https://nytimes.enterprise.slack.com/archives/C013YTMFQ5N",targetTab:v.db.newTab,onClick:ge,colorVariant:v.N.text.interactiveInline},void 0,At||(At=i()(ke.a,{copy:"#productswitch"})))}})))};Ft.displayName="InternalUserWarningBanner";var Vt=function(e){if(0===e.length)return null;var t=function(e){var t=Object(E.f)(e);return t.length>1?"You also have existing subscriptions to ".concat(Object(E.w)(Object(E.u)(t))," through third-party providers."):"You also have an existing subscription to ".concat(Object(E.w)(Object(E.u)(t))," through a third-party provider.")}(e);return i()(j,{copy:t,dataTestId:"third-party-sub-alert"})};Vt.displayName="renderThirdPartyAlert";var Gt=function(e){return"INVALID"!==e?null:Lt||(Lt=i()(j,{copy:"The offer you selected is no longer available. See current offers below.",dataTestId:"ineligible-incoming-offer-alert"}))};Gt.displayName="renderIneligibleOfferAlert";var Zt=function(e){var t=e.emailAddress,r=e.thirdPartySubscriptions,n=e.incomingOfferIdStatus,a=Vt(r),o=Gt(n),c=(a||o)&&Object(E.q)(t);return m.a.createElement(m.a.Fragment,null,c&&(Dt||(Dt=i()(Ft,{eligibilityReason:"INVALID_OFFER"}))),a,o)},Bt=function(){return i()("div",{"data-testid":"ps-inline-error"},void 0,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.negative},void 0,"There was an unexpected error. Please try again or"," ",i()(v.x,{to:ke.b.CONTACT_US_LINK,colorVariant:v.N.text.primary,targetTab:v.db.newTab},void 0,"contact customer care"),"."))};Bt.displayName="InlineError";var Wt,qt,Yt,Kt=Bt,zt=function(e){return e.inlineErrorIsDisplayed?2:1},$t=Object(k.d)("footer",{target:"e1b06cxp0"})("align-items:center;background-color:",v.O.background.primary,";bottom:0;box-shadow:0 9px ",v.hb[1.5]," rgba(0,0,0,0.14),0 3px ",v.hb[2]," rgba(0,0,0,0.12),0 5px 6px rgba(0,0,0,0.2);padding:",v.hb[2]," 0;padding-bottom:",v.hb[5],";@media (min-width:",v.I.MEDIUM,"){padding:",v.hb[2]," 0;}"),Qt=Object(k.d)("footer",{target:"e1b06cxp1"})("margin:0 auto;display:grid;grid-row-gap:",v.hb[2],";grid-column-gap:0;max-width:",v.U.STANDARD,";width:90%;grid-template-columns:auto;@media (min-width:",v.I.MEDIUM,"){grid-template-columns:auto minmax(min-content,","184px",");}"),Jt=Object(k.d)("div",{target:"e1b06cxp2"})("@media (min-width:",v.I.MEDIUM,"){grid-column-start:1;grid-column-end:3;grid-row-start:1;}"),Xt=Object(k.d)("div",{target:"e1b06cxp3"})("display:flex;flex-direction:row;align-items:center;@media (min-width:",v.I.MEDIUM,"){grid-column-start:1;grid-column-end:2;grid-row-start:",zt,";}"),er=function(e){var t=e.handleGoBack,r=e.handleGoNext,n=e.processing,a=e.showInlineError,o=e.selectedOffer,c=(null==o?void 0:o.offerShortId)===E.n;return i()($t,{},void 0,i()(Qt,{"data-testid":"ps-footer-inner-container"},void 0,a&&(Wt||(Wt=i()(Jt,{"data-testid":"ps-footer-inline-error"},void 0,i()(Kt,{})))),i()(Xt,{inlineErrorIsDisplayed:a,"data-testid":"ps-footer-button-container"},void 0,i()(v.j,{variant:"filled",heightVariant:v.K.standard,disabled:!o||n,onClick:r,processing:n,dataTestId:"review-changes-btn"},void 0,c?"View delivery options":"Review changes"),qt||(qt=i()(v.h,{space:"1"})),i()(v.j,{variant:"outline",heightVariant:v.K.standard,disabled:n,onClick:t,dataTestId:"go-back-btn"},void 0,"Go back"),Yt||(Yt=i()(v.h,{space:"1"})))))};er.displayName="DecisionFooter";var tr,rr=er,nr={COOKING:{title:Le.d,body:"Thousands of recipes, plus advice and inspiration, online and in the New York Times Cooking app."},GAMES:{title:Le.e,body:"Wordle, Spelling Bee, over 10,000 crosswords and more, online and in the New York Times Games app."},WIRECUTTER:{title:Le.g,body:"Independent reviews for thousands of products."},NEWS:{title:Le.f,body:"Investigations, culture and analysis, online and in The New York Times app."},ATHLETIC:{title:Le.c,body:"In-depth, personalized sports coverage of teams, clubs and leagues."}},ir=Object(k.d)("div",{target:"exp20090"})("max-width:648px;padding:",v.hb[3],";"),ar=Object(k.d)("div",{target:"exp20091"})("align-items:",(function(e){return e.alignitems||""}),";display:flex;flex-direction:row;line-height:21px;height:21px;justify-content:",(function(e){return e.justifycontent||""}),";"),or=function(e){var t=e.offer,r=e.closeModal,n=Object(E.e)(t).map((function(e){return nr[e]}));return i()(ir,{},void 0,i()(ar,{justifycontent:"space-between",alignitems:"center"},void 0,i()(v.s,{dataTestId:"what's-included-title-modal",typeStyle:v.Z.title3,colorVariant:v.N.text.primary},void 0,"What's included in ",t.subscriptionName),i()(v.k,{onClick:r,dataTestId:"close-offer-details-modal"})),n.map((function(e){return i()("div",{},e.title,tr||(tr=i()(v.H,{space:"2"})),i()(v.s,{dataTestId:"product-title",typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,e.title)," - ",i()(v.s,{dataTestId:"product-copy",typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,e.body))})))};or.displayName="DetailsModal";var cr,sr,lr,ur,dr,pr,br,mr,fr,yr=or,vr=Object(k.d)("div",{target:"e1hlszqk0"})("margin:0 ",v.hb[2],";"),gr=function(){return i()(vr,{},void 0,cr||(cr=i()(v.H,{space:"3"})),i()(v.m,{typeStyle:v.Z.headline1,colorVariant:v.N.text.primary},void 0,"Try again soon."),sr||(sr=i()(v.H,{space:"3"})),i()(v.r,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,"We're sorry, but we're having a technical issue right now."),lr||(lr=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,"Please return to ",ur||(ur=i()(v.F,{to:"/account/subscription"},void 0,"your subscription"))," and try again or"," ",i()("a",{href:ke.b.CONTACT_US_LINK,target:"_blank",rel:"noopener noreferrer"},void 0,"contact Customer Care")," ","for immediate assistance."),dr||(dr=i()("div",{})),pr||(pr=i()(v.H,{space:"2"})),br||(br=i()(v.g,{level:"tertiary"})),mr||(mr=i()(v.H,{space:"2"})),fr||(fr=i()(v.F,{to:"/account/subscription"},void 0,"Go to Subscription overview")))};gr.displayName="FullScreenError";var hr,Sr,Ir,wr=gr,Or=r("vkQp"),Tr=function(e){var t=e.offer;return 0===t.billingTiers.length?null:function(e){var t,r,n=null==e||null===(t=e.billingTiers)||void 0===t?void 0:t[0],a=e.billingTiers.length-1,o=null==e||null===(r=e.billingTiers)||void 0===r?void 0:r[a];if(!n||!o)return null;var c=n.tierWeeklyAmount,s=n.tierCycleAmount,l=n.tierCycleDurationStr,u=n.tierDurationStr,d=o.tierWeeklyAmount,p=o.tierCycleAmount,b=o.tierCycleDurationStr,f=Object(E.v)(c),y=Object(E.v)(s),g=function(e){return e?e.includes("one")?" for ".concat(e):" for the first ".concat(e):""}(u),h=Object(E.v)(d),S=l===b&&h!==f;return m.a.createElement(m.a.Fragment,null,i()("div",{"data-testid":"price-expression-header"},void 0,S&&i()(v.s,{typeStyle:v.Z.body2,colorVariant:v.N.text.secondary},void 0,i()(ie,{},void 0,h," ")),i()(v.s,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,f,"/week",u&&g)),hr||(hr=i()(v.e,{defaultSpace:"0.5",mediumScreenSpace:"1"})),i()("div",{"data-testid":"price-expression-copy"},void 0,i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,"Billed as ",S&&i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,i()(ie,{},void 0,p," ")),y," every ",l)))}(t)},Cr=Object(k.d)("div",{target:"e10wgfdc0"})("display:inline-block;background:",v.O.background.primary,";text-align:center;border:1px solid ",v.O.stroke.primary,";border-radius:",v.hb[5],";padding:5px ",v.hb[1.5],";box-sizing:border-box;white-space:nowrap;text-transform:uppercase;"),Nr=function(e){var t=e.dataTestId,r=e.children,n=e.ariaLabel;return i()(Cr,{"data-testid":t},void 0,i()(v.s,{typeStyle:v.Z.legal,colorVariant:v.N.text.primary,ariaLabel:n},void 0,r))};Nr.displayName="OfferStatusPill";var xr,jr,Pr,Er,Ar,kr,Lr=function(e){var t=e.action,r=e.activeAction,n=e.handleSelect,a=e.offer,o=e.openModal,c=e.selected,s=e.activeSalesInformation,l=void 0===s?[]:s,u="".concat(t,"-").concat(a.bundle),d=function(e,t){return"UPGRADE"===t?"Upgrade to ".concat(e):"SWITCH"===t?"Change to ".concat(e):"Add ".concat(e)}(a.subscriptionName,t),p=Object(E.m)(a.offerLabels,l),b=function(e,t){return t||("UPGRADE"===e?"Best value":"")}(t,p),f="UPGRADE"===t;return m.a.createElement(m.a.Fragment,null,i()(te,{"data-testid":"offer-diagnostic-element-".concat(a.offerShortId)},void 0,"[".concat(a.offerId,"][").concat(a.offerShortId,"]")),i()(V,{action:t,id:a.offerId,"data-testid":a.offerId},a.offerChainId,i()("div",{},void 0,i()(G,{"data-testid":u},void 0,i()(Z,{},void 0,i()(Or.a,{dataTestId:u,label:i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary},void 0,d),name:"offer_id",defaultChecked:(null==c?void 0:c.offerChainId)===a.offerChainId&&r===t,value:a.offerChainId,onChange:function(){return n(a,t)}})),!!b&&i()(Y,{},void 0,i()(Nr,{dataTestId:"offer-status-pill"},void 0,b))),Sr||(Sr=i()(v.e,{defaultSpace:"1.5",mediumScreenSpace:"1"})),i()(B,{},void 0,i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary,dataTestId:"".concat(u,"-desc")},void 0,a.subscriptionDescription),f&&i()(W,{},void 0,Ir||(Ir=i()(v.H,{space:"1"})),i()(v.z,{onClick:function(){return o(a)},dataTestId:"".concat(u,"-details-btn"),reducedHeight:!0},void 0,i()(v.s,{typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,"See details"))))),i()("div",{},void 0,i()(Tr,{offer:a})),f&&i()(q,{},void 0,i()(v.z,{onClick:function(){return o(a)},dataTestId:"".concat(u,"-details-btn"),reducedHeight:!0},void 0,i()(v.s,{typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,"See details")))))},Dr=function(e){var t=e.productSwitchEligibility,r=e.activeAction,n=e.currentSubscriptions,a=e.handleSelect,o=e.selected,c=e.openModal,s=n.map((function(e){return e.productCode})),l=Object(E.y)(t.offersToSwitch.filter((function(e){return!s.includes(e.bundle)&&Object(E.s)(e.bundle)})));return l.length>0?i()("div",{},void 0,xr||(xr=i()(v.r,{typeStyle:"subtitle3",colorVariant:"primary"},void 0,"Change subscription")),jr||(jr=i()(v.r,{typeStyle:"body3",colorVariant:"secondary"},void 0,"Replace your current subscription with another.")),Pr||(Pr=i()(v.H,{space:"1.5"})),i()(_,{},void 0,l.map((function(e){return i()("div",{},e.offerChainId,i()(Lr,{action:"SWITCH",activeAction:r,handleSelect:a,offer:e,openModal:c,selected:o}))})))):null},Mr={bundle:"E",subscriptionName:Le.a,offerLabels:[],offerId:"",offerShortId:E.n,offerChainId:"",subscriptionDescription:"Weekend or weekday newspaper delivery, plus unlimited digital access with a free All Access subscription.",additionalSubscriptionsIds:[],presentation:{offerType:"",offerInitialBasicRate:"",offerInitialBasicUnit:"",offerPermanentBasicRate:"",offerPermanentBasicUnit:"",offerInitialRateCharge:"",offerInitialRateDuration:"",offerInitialRateTermination:"",purchaseTerms:[],cancellationPolicy:[],offerFourWeeksPrice:""},subscriptionLabels:[],billingTiers:[]},Ur=function(e){return i()(v.F,{to:Object(x.getHomeDeliveryLpLink)("product_switch.hd_offer_card.options","8UH8U"),onClick:function(e){return be(e,"card")},dataTestId:"".concat(e,"-details-btn")},void 0,i()(v.s,{typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,"View delivery options"))};Ur.displayName="getSeeDeliveryOptionsTextLink";var Rr,Hr,_r,Fr=function(e){var t=e.selected,r=e.handleSelect,n=e.activeAction,a="".concat("UPGRADE","-").concat(Mr.bundle),o=Ur(a);return i()("div",{},void 0,i()(te,{"data-testid":"offer-diagnostic-element-".concat(Mr.offerShortId)},void 0,"[".concat(Mr.offerShortId,"]")),i()(oe,{id:Mr.offerShortId,"data-testid":Mr.offerShortId},void 0,i()("div",{},void 0,i()(G,{"data-testid":a},void 0,i()(Z,{},void 0,i()(Or.a,{dataTestId:a,label:i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary},void 0,"Upgrade to ",Mr.subscriptionName),name:"offer_id",defaultChecked:(null==t?void 0:t.offerChainId)===Mr.offerChainId&&"UPGRADE"===n,value:Mr.offerChainId,onChange:function(){return r(Mr,"UPGRADE")}})),Er||(Er=i()(Y,{},void 0,i()(Nr,{dataTestId:"offer-status-pill"},void 0,"Best value")))),Ar||(Ar=i()(v.e,{defaultSpace:"1.5",mediumScreenSpace:"1"})),i()(B,{},void 0,i()(v.s,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary,dataTestId:"".concat(a,"-desc")},void 0,Mr.subscriptionDescription),i()(W,{},void 0,kr||(kr=i()(v.H,{space:"1"})),o))),i()(q,{},void 0,o)))};Fr.displayName="HomeDeliveryOfferCard";var Vr,Gr=function(e){var t=e.productSwitchEligibility,r=e.activeAction,n=e.currentSubscriptions,a=e.handleSelect,o=e.selected,c=e.openModal,s=e.eligibleForHdOffer,l=n.map((function(e){return e.productCode})),u=Object(E.y)(t.offersToSwitch.filter((function(e){return!l.includes(e.bundle)&&!Object(E.s)(e.bundle)})));return u.length>0||s?i()("div",{},void 0,Rr||(Rr=i()(v.r,{typeStyle:"subtitle3",colorVariant:"primary"},void 0,"Upgrade subscription")),Hr||(Hr=i()(v.r,{typeStyle:"body3",colorVariant:"secondary"},void 0,"Keep your current access, and get even more from The Times.")),_r||(_r=i()(v.H,{space:"1.5"})),i()(_,{},void 0,s&&i()(Fr,{activeAction:r,handleSelect:a,selected:o}),u.map((function(e){return i()("div",{},e.offerChainId,i()(Lr,{action:"UPGRADE",activeAction:r,handleSelect:a,offer:e,openModal:c,selected:o,activeSalesInformation:t.activeSalesInformation}))})))):null},Zr=function(e,t){if(!e)return"none";if(e.networkError)return"generic_error";if(!e.graphQLErrors)return"generic_error";var r=u()(e.graphQLErrors,1)[0];switch((void 0===r?{message:"unknown_error"}:r).message){case O.g:return t(),"authentication_error";case O.h:return"payment_authorization_error";case O.d:return"dead_end_error";default:return"generic_error"}},Br=function(e){var t=e.activeAction,r=e.accountInfo,n=e.currentSubscriptions,a=e.thirdPartySubscriptions,o=e.queryParameters,c=e.handleSelect,s=e.handleTransactionPreview,l=e.processing,u=e.validateMutationError,d=e.selected,p=e.incomingOfferIdStatus,m=r.emailAddress,f=r.productSwitchEligibility,y=Object(T.c)(),g=Object(bt.a)(),S=Object(b.useContext)(ce.d),I=Object(b.useContext)(h.b),w=Zr(u,(function(){return function(e){if(e){var t=new URL(window.location.href);t.pathname="/account/product-switch/apply-offer",t.searchParams.set(A.c,e.offerId),Object(C.redirect)(Object(Me.h)({redirectUrl:Object(Fe.a)(t.href)}))}else Object(C.redirectToLogin)()}(d)}));Object(b.useEffect)((function(){["PROCESSING","ACCEPTED"].includes(p)||function(e,t,r,n,i){var a={subs:e.map((function(e){return{b:e.productCode}})),subsCurr:e.map((function(e){return{b:e.productCode}})),subs3p:t.map((function(e){return{b:e.productCode}})),ofs:r.map((function(e){return{id:e.offerId,b:e.bundle,oc:e.offerChainId}})),hdl:n,incOfSt:i};de(se,"step1",JSON.stringify(a))}(n,a,f.offersToSwitch,!0,p)}),[]);var O=function(){S.closeDialog()},N=function(e){!function(e){pe(se,{elementName:"see-details-".concat(e.bundle),elementLabel:"see-details",elementUrl:"",moduleContext:"",moduleLabel:"step1"})}(e),S.displayDialog(i()(yr,{offer:e,closeModal:O}),{maxWidth:"648px"})},x=function(){pe(se,{elementName:"go-subscription-overview",elementLabel:"go-back",elementUrl:"",moduleContext:"",moduleLabel:"step1"}),y.to("/subscription")},j=function(e){var t;null!=d&&d.offerChainId&&(t=d.offerChainId,pe(se,{elementName:"go-to-payment",elementLabel:"review-changes",elementUrl:"",moduleContext:t,moduleLabel:"step1"}),s().then((function(e){e&&y.to(Object(A.e)("/product-switch/review",o))}))),(null==d?void 0:d.offerShortId)===E.n&&(be(e,"footer"),Object(C.redirect)(ke.c.getHomeDeliveryLpLink("product_switch.hd_offer_card.submit","8UH8U")))};if(Object(b.useEffect)((function(){var e="dead_end_error"===w?null:i()(rr,{handleGoBack:x,handleGoNext:j,processing:l||"authentication_error"===w,showInlineError:"generic_error"===w,selectedOffer:d});return I.setPersistentFooter(e),function(){return I.setPersistentFooter(null)}}),[t,l,w,d]),"dead_end_error"===w)return Vr||(Vr=i()(wr,{}));var P=(g||{}).country,k="US"===(void 0===P?"":P),L=function(e,t){return!!Object(E.o)(e)&&!!t}(n,k),D=!L&&!Object(E.p)(n)&&k;return i()(H,{"data-testid":"ps-decision-page"},void 0,i()(Zt,{emailAddress:m,thirdPartySubscriptions:a,incomingOfferIdStatus:p}),i()(kt,{currentSubscriptions:n}),i()(Gr,{productSwitchEligibility:f,activeAction:t,currentSubscriptions:n,handleSelect:c,selected:d,openModal:N,eligibleForHdOffer:L}),i()(Dr,{productSwitchEligibility:f,activeAction:t,currentSubscriptions:n,handleSelect:c,selected:d,openModal:N}),D&&i()(v.r,{dataTestId:"hd-see-your-options-link",typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,"Interested in getting the newspaper delivered?"," ",i()(v.x,{to:ke.c.getHomeDeliveryLpLink("product_switch.decision_page",""),onClick:function(e){!function(e){var t;pe(se,{elementName:"go-to-hd-lp",elementLabel:"see-your-options",elementUrl:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.href,moduleContext:JSON.stringify({component:"old-link"}),moduleLabel:"step1"})}(e)},colorVariant:v.N.text.interactiveInline},void 0,"See your options")))};Br.displayName="Decision";var Wr,qr=Br,Yr=r("3dlu"),Kr=r("GzkH"),zr=function(e){var t=e.action,r=e.offer,n=e.activeSalesInformation,a="".concat(t,"-").concat(r.bundle),o=Object(E.m)(r.offerLabels,n);return i()(z,{},r.offerChainId,i()($,{},void 0,i()(Q,{},void 0,i()(v.C,{colorVariant:v.N.text.primary,level:"2",dataTestId:a},void 0,r.subscriptionName),!!o&&i()(Nr,{},void 0,o)),Wr||(Wr=i()(v.e,{defaultSpace:"1.5",mediumScreenSpace:"1",largeScreenSpace:"1"})),i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary,dataTestId:"".concat(a,"-desc")},void 0,r.subscriptionDescription)),i()(J,{},void 0,i()(Tr,{offer:r})))};zr.displayName="ReviewCard";var $r,Qr,Jr=zr,Xr=function(e){var t=e.selected.presentation,r=t.purchaseTerms,n=t.cancellationPolicy;return i()("div",{},void 0,i()(v.i,{dataTestId:"target-offer-arl",purchaseTerms:r,cancellationPolicy:n}),$r||($r=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,"Promotional pricing from your current subscription will not apply to your new subscription."),Qr||(Qr=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,"By confirming, you agree to the automatic renewal terms on this page, confirm your agreement to our"," ",i()(v.x,{colorVariant:v.N.text.interactiveInline,to:ke.b.TERMS_OF_SERVICE_LINK,targetTab:"newTab"},void 0,"Terms of Service")," ","and"," ",i()(v.x,{colorVariant:v.N.text.interactiveInline,to:ke.b.TERMS_OF_SALE_LINK,targetTab:"newTab"},void 0,"Terms of Sale")," ","and re-acknowledge our"," ",i()(v.x,{colorVariant:v.N.text.interactiveInline,to:ke.c.PRIVACY_POLICY_PAGE_LINK,targetTab:"newTab"},void 0,"Privacy Policy"),"."))};Xr.displayName="AutomaticRenewalTerms";var en,tn=Xr,rn=function(){return en||(en=i()("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},void 0,i()("circle",{cx:"10",cy:"10",r:"8",transform:"rotate(180 10 10)",stroke:"#666666"}),i()("rect",{x:"11",y:"15",width:"2",height:"6",transform:"rotate(180 11 15)",fill:"#666666"}),i()("rect",{x:"11",y:"7",width:"2",height:"2",transform:"rotate(180 11 7)",fill:"#666666"})))};rn.displayName="InfoToolTipIcon";var nn,an,on,cn,sn,ln,un,dn,pn,bn,mn,fn,yn,vn,gn,hn,Sn,In,wn,On,Tn,Cn,Nn,xn,jn,Pn,En,An,kn=rn,Ln=function(){return i()("div",{"data-testid":"ps-inline-error"},void 0,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.negative},void 0,"We're sorry, but we were unable to process your request. Please"," ",i()(v.x,{to:Object(Me.j)("product_switch.pmt_error",""),colorVariant:v.N.text.interactiveInline,targetTab:v.db.sameTab},void 0,"update your payment method")," ","in order to change your subscription."))};Ln.displayName="PaymentAuthorizationError";var Dn,Mn=function(e){var t,r,n,a,o=e.activeVerb,c=e.currentSubscriptions,s=e.accountPaymentMethod,l=e.queryParameters,d=e.processing,p=e.executeMutationError,f=e.productSwitchValidateMutationResponse,y=e.selected,g=e.submitOrder,h=e.activeSalesInformation,S=e.incomingOfferIdStatus,w=Object(b.useContext)(ce.d),O=Object(T.c)(),N=Zr(p,C.redirectToLogin);Object(b.useEffect)((function(){y?de(le,"step2",y.offerChainId):O.to(Object(A.e)("/product-switch",l))}),[]);var x=null==f||null===(t=f.validateProductSwitch)||void 0===t?void 0:t.paymentMethodUpdateRequired,k=(null==f||null===(r=f.validateProductSwitch)||void 0===r?void 0:r.concurrentThirdPartySubscriptionNames)||[],L=function(e){!function(e){var t,r;Object(ce.p)({moduleName:le,moduleContext:"PaymentInformation",elementName:"UpdateExpiredPaymentBtn",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent,elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href})}(e)};if(!y)return nn||(nn=i()(I.a,{}));if("dead_end_error"===N)return an||(an=i()(wr,{}));var D,M,R,H=Object(E.f)(c),_=Object(E.e)(y),F=Object(E.g)(H,_),V=Object(E.h)(H,_),G=(D=y.offerId,(M=new URL(window.location.href)).pathname="/account/product-switch/apply-offer",M.searchParams.set(A.c,D),Object(Fe.a)(M.href)),Z=function(e){return"INVALID"===e||"EMPTY"===e}(S),B=0===(R=k).length?"":R.length>1?"This purchase will not replace your existing subscriptions to ".concat(Object(E.w)(R),". To cancel the subscriptions, you can visit the ").concat(P.appleAppStoreTitleCopy,", ").concat(P.googlePlayTitleCopy," or ").concat(P.amazonAppStoreTitleCopy,"."):"This purchase will not replace your existing subscription to ".concat(Object(E.w)(R),". To cancel the subscription, you can visit the ").concat(P.appleAppStoreTitleCopy,", ").concat(P.googlePlayTitleCopy," or ").concat(P.amazonAppStoreTitleCopy,"."),W=function(e,t){return e?t.maxShares?1===t.maxShares?"\n      Changing your ".concat(e.subscriptionName," subscription\n      to ").concat(t.subscriptionName," will cancel any bonus subscriptions\n      and you will have only one bonus subscription available.\n  "):"\n    Changing your ".concat(e.subscriptionName," subscription\n    to ").concat(t.subscriptionName," will cancel any bonus subscriptions\n    and you will have ").concat(t.maxShares," bonus subscriptions available.\n  "):"\n      Changing your ".concat(e.subscriptionName," subscription\n      to ").concat(t.subscriptionName," will cancel any bonus subscriptions\n      you have given to friends or family.\n  "):""}(Object(E.j)(c),y),q=function(e,t){return t?["Your new subscription will start today. Your reduced rate will take effect as soon as your payment method is processed.","Your full payment will be captured, and any excess payment made for your Home Delivery subscription will be refunded shortly after canceling. It may take a few days for your Home Delivery subscription to cancel. You may receive your paper during that time."]:e?["Your reduced rate will take effect as soon as your new payment method is processed."]:["Your new subscription will start today."]}(F,V),Y=function(e,t){if(e)return e;var r=t.find((function(e){return e.paymentMethod}));return r?r.paymentMethod:{type:"Payment Method",presentation:""}}(s,c);return i()(X,{"data-testid":"ps-review-page"},void 0,!!B&&m.a.createElement(m.a.Fragment,null,i()(j,{copy:B,dataTestId:"third-party-sub-alert"}),on||(on=i()(v.H,{space:"4"}))),!!W&&m.a.createElement(m.a.Fragment,null,i()(j,{copy:W,dataTestId:"bonus-shares-alert"}),cn||(cn=i()(v.H,{space:"4"}))),i()(kt,{currentSubscriptions:c}),sn||(sn=i()(v.H,{space:"4"})),i()(v.s,{typeStyle:v.Z.subtitle3,colorVariant:v.N.text.primary},void 0,"New subscription"),i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,"This will replace your current subscription."),ln||(ln=i()(v.H,{space:"1"})),i()(Jr,{action:o,offer:y,activeSalesInformation:h}),un||(un=i()(v.H,{space:"4"})),q.map((function(e,t){return i()(m.a.Fragment,{},"explanation-".concat(t),i()(v.r,{typeStyle:v.Z.body2,colorVariant:v.N.text.primary},void 0,e),dn||(dn=i()(v.H,{space:"2"})))})),pn||(pn=i()(v.H,{space:"2"})),x?i()(Kr.b,{paymentMethod:Y,onUpdateExpiredPaymentMethodClick:L,manageBillingReturnUrl:G}):i()(Kr.a,{paymentMethod:Y,manageBillingCampaignId:"8XKYK",rileyCustomizations:{customTopSpace:"3",updateLinkTypeStyle:v.Z.subtitle2},onUpdateActivePaymentMethodClick:function(e){!function(e){var t,r;Object(ce.p)({moduleName:le,moduleContext:"PaymentInformation",elementName:"UpdateActivePaymentBtn",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent,elementUrl:null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.href})}(e)},manageBillingReturnUrl:G}),bn||(bn=i()(v.g,{level:"tertiary"})),mn||(mn=i()(v.H,{space:"3"})),i()(ee,{},void 0,i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:"primary",dataTestId:"selected-name"},void 0,y.subscriptionName," rate"),i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary,dataTestId:"selected-cycle-price"},void 0,y.presentation.offerFourWeeksPrice)),"SWITCH"===o&&(null==f||null===(n=f.validateProductSwitch)||void 0===n?void 0:n.estimatedCredit)&&m.a.createElement(m.a.Fragment,null,fn||(fn=i()(v.H,{space:"3"})),yn||(yn=i()(v.g,{level:"tertiary"})),vn||(vn=i()(v.H,{space:"3"})),i()(ee,{},void 0,i()(U,{onClick:function(e){var t=e.currentTarget.children;null!=t&&t[2]&&w.displayDialog(i()(Yr.a,{onClose:w.closeDialog,dataTestId:"credit-info-dialog"},void 0,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.primary},void 0,"The remaining time from your last"," ",c.map((function(e){return e.subscriptionName})).join(", ")," bill will be prorated and applied to your new subscription as a credit. Any remaining credit will be applied to future payments automatically.")),{maxWidth:"480px"})},type:"button"},void 0,i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary,dataTestId:"credit-label"},void 0,c.map((function(e){return e.subscriptionName})).join(", ")," ","credit"),gn||(gn=i()(v.h,{space:"1"})),hn||(hn=i()(kn,{}))),i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.positive,dataTestId:"credit"},void 0,"-",f.validateProductSwitch.estimatedCredit))),Sn||(Sn=i()(v.H,{space:"3"})),In||(In=i()(v.g,{level:"tertiary"})),wn||(wn=i()(v.H,{space:"3"})),i()(ee,{},void 0,i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:"primary"},void 0,"Total"),i()(v.s,{typeStyle:v.Z.subtitle2,colorVariant:v.N.text.primary,dataTestId:"est-charge"},void 0,null==f||null===(a=f.validateProductSwitch)||void 0===a?void 0:a.estimatedImmediateCharge)),On||(On=i()(v.H,{space:"3"})),Tn||(Tn=i()(v.H,{space:"4"})),i()(tn,{selected:y}),Cn||(Cn=i()(v.H,{space:"6"})),"payment_authorization_error"===N&&m.a.createElement(m.a.Fragment,null,Nn||(Nn=i()(Ln,{})),xn||(xn=i()(v.H,{space:"1"}))),"generic_error"===N&&m.a.createElement(m.a.Fragment,null,jn||(jn=i()(Kt,{})),Pn||(Pn=i()(v.H,{space:"1"}))),x&&m.a.createElement(m.a.Fragment,null,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.negative},void 0,"We’re unable to process the payment."," ",i()(v.x,{to:Object(Me.j)("product_switch.pmt_upd_req","8XKYK",G),onClick:L},void 0,"Please update your information"),"."),En||(En=i()(v.H,{space:"1"}))),i()(K,{},void 0,i()(v.j,{variant:v.L.filled,heightVariant:v.K.standard,onClick:function(){y?(!function(e){pe(le,{elementName:"confirm",elementLabel:"confirm",elementUrl:"",moduleContext:e.offerChainId||"",moduleLabel:"step2"})}(y),g().then((function(e){var t=u()(e,2),r=t[0],n=t[1];if(r){var i=c.map((function(e){return e.productCode}));!function(e,t,r,n,i,a,o){var c={transactionApp:"product_switch",operationType:"switch",source:e,campaignId:t,offerId:r,subscriptionId:n,bundleName:i,bundleType:a,originalSubscriptionBundles:o};Object(ce.s)(c)}(l.sourceId||"",l.originalQueryParameters[A.a]||"",y.offerId,n,y.subscriptionName,y.bundle,i),O.to(Object(A.e)("/product-switch/confirm",l))}}))):O.to(Object(A.e)("/product-switch",l))},dataTestId:"btn-submit",processing:d||"authentication_error"===N,disabled:d||x},void 0,"Confirm"),An||(An=i()(v.h,{space:"1"})),Z&&i()(v.j,{variant:v.L.outline,heightVariant:v.K.standard,onClick:function(){!function(e){pe(le,{elementName:"go-to-product-switch-options",elementLabel:"go-back",elementUrl:"",moduleContext:(null==e?void 0:e.offerChainId)||"",moduleLabel:"step2"})}(y),O.to(Object(A.e)("/product-switch",l))},dataTestId:"btn-cancel",disabled:d},void 0,"Go back")))};Mn.displayName="Review";var Un=function(e){var t=e.accountInfo,r=e.queryParameters,n=e.selectedOffer,a=e.validateMutationError,o=Object(T.c)();return Object(b.useEffect)((function(){var n,i,a=r.selectedOfferId,c=Object(E.i)(t,a);c?(e.handleSelect(c,"SWITCH"),n=a,i=JSON.stringify({offerId:n}),de("reapply-selected-offer","step1½",i)):o.to(Object(A.e)("/product-switch",r))}),[]),Object(b.useEffect)((function(){n&&e.handleTransactionPreview().then((function(e){e&&o.to(Object(A.e)("/product-switch/review",r))}))}),[n]),Object(b.useEffect)((function(){a&&o.to(Object(A.e)("/product-switch",r))}),[a]),Dn||(Dn=i()(I.a,{}))};Un.displayName="ApplySelectedOfferComponent";var Rn,Hn,_n=r("4gCf"),Fn=function(e){var t=e.dataTestId,r=void 0===t?"ps-generic-error":t,n=e.diagnosticMsg;return i()("div",{"data-testid":r},void 0,i()(v.m,{headerLevel:"1",typeStyle:v.Z.display2},void 0,"Contact customer care"),Rn||(Rn=i()(v.H,{space:"3"})),i()(v.r,{typeStyle:v.Z.body2},void 0,"We're sorry, at this time we are unable to make this change online. Please"," ",Hn||(Hn=i()(_n.a,{onClick:me})),", where we may better assist you in managing your subscription"),i()(te,{},void 0,n))};Fn.displayName="GenericError";var Vn,Gn,Zn,Bn,Wn,qn=r("4+a0"),Yn=r("aW0g"),Kn=function(e){var t=e.queryParameters,r=e.subscriptionName;return i()("div",{},void 0,i()(Be,{entryPointBreadCrumbs:Object(lt.b)(t.sourceId),entryPointDestinationUrl:t.redirectUri}),i()(v.A,{listItemHeader:i()(v.s,{typeStyle:v.Z.subtitle2},void 0,"Want to dive in?"),dataTestId:"explore-products-area",type:v.eb.information},"explore-products-area",m.a.createElement(m.a.Fragment,null,i()(v.r,{typeStyle:v.Z.body3,colorVariant:v.N.text.secondary},void 0,function(e){return"Explore ".concat(e,".")}(r)),Vn||(Vn=i()(v.H,{space:"2"})),Re(ve),Gn||(Gn=i()(v.H,{space:"2"})))))};Kn.displayName="AllAccessSubscriptionContent";var zn,$n,Qn,Jn,Xn,ei,ti,ri,ni=E.b.filter((function(e){return e!==De.f.ATHLETIC})),ii=(Zn={},s()(Zn,De.f.NEWS,{id:"digital-news",title:Le.f,description:Yn.listDescriptionBDA,buttonText:Yn.listButton,targetUrl:ke.c.getNewsLpLink("product_switch.ineligible","8XKYK")}),s()(Zn,De.f.GAMES,{id:"nyt-games",title:Le.e,description:Yn.listDescriptionGames,buttonText:Yn.listButton,targetUrl:ke.c.getGamesLpLink("product_switch.ineligible","8XKYK")}),s()(Zn,De.f.COOKING,{id:"nyt-cooking",title:Le.d,description:Yn.listDescriptionCooking,buttonText:Yn.listButton,targetUrl:ke.c.getCookingLpLink("product_switch.ineligible","8XKYK")}),s()(Zn,De.f.WIRECUTTER,{id:"wirecutter",title:Le.g,description:Yn.listDescriptionWirecutter,buttonText:Yn.listButton,targetUrl:ke.c.getWirecutterLpLink("product_switch.ineligible","8XKYK")}),Zn),ai=function(e){var t=function(e){return e.map((function(e,t){var r=e.id,n=e.title,a=e.description,o=e.buttonText,c=e.targetUrl;return i()(v.A,{dataTestId:r,listItemHeader:n,type:v.eb.action,role:"listitem",actionTitle:o,href:c,targetTab:v.db.newTab},t,a)}))}(function(e){return e.map((function(e){return ii[e]})).filter((function(e){return!!e}))}(function(e){var t=Object(E.k)(e);return ni.filter((function(e){return!t.includes(e)}))}(e.subscriptions)));return m.a.createElement(m.a.Fragment,null,i()(v.g,{level:v.V.primary}),Bn||(Bn=i()(v.H,{space:"1.5"})),i()(v.m,{headerLevel:"2",typeStyle:v.Z.headline2},void 0,"Subscribe to more"),Wn||(Wn=i()(v.H,{space:"4"})),t)},oi=function(e){return e.map((function(e){return e.subscriptionName}))},ci=function(e){var t=e.hasAllAccessSubscription,r=e.subscriptionName;return t?m.a.createElement(m.a.Fragment,null,"You already have unlimited digital access to The New York Times."):m.a.createElement(m.a.Fragment,null,"You already have access to ",r,".")},si=function(e){var t=e.hasAllAccessSubscription,r=e.originalProducts;return t?m.a.createElement(m.a.Fragment,null,"You receive complimentary access to ",Object(E.x)(Object(E.u)(r))," as a member of a group subscription. For further assistance, please"," ",zn||(zn=i()(_n.a,{onClick:me})),"."):m.a.createElement(m.a.Fragment,null,"You receive complimentary access as a member of a group subscription. To enjoy more from The Times, you can purchase additional subscriptions on your own. For further assistance, please"," ",$n||($n=i()(_n.a,{onClick:me})),".")},li=function(e){var t=e.subscriptions,r=e.queryParameters,n=Object(E.o)(t),a=Object(E.f)(t),o=oi(t).join(", ");return i()("div",{"data-testid":"b2b-not-eligible"},void 0,i()(v.m,{headerLevel:"1",typeStyle:v.Z.display2},void 0,i()(ci,{hasAllAccessSubscription:n,subscriptionName:o})),Qn||(Qn=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body2},void 0,i()(si,{hasAllAccessSubscription:n,originalProducts:a})),Jn||(Jn=i()(v.H,{space:"8"})),n?i()(Kn,{queryParameters:r,subscriptionName:o}):i()(ai,{subscriptions:t}))};li.displayName="B2bSubscriberIneligibilityMessage";var ui,di,pi,bi,mi,fi,yi=function(e){var t=e.hasAllAccessSubscription,r=e.subscriptionName;return t?m.a.createElement(m.a.Fragment,null,"You already have unlimited digital access to The New York Times."):m.a.createElement(m.a.Fragment,null,"You already have access to ",r,".")},vi=function(e){var t=e.hasAllAccessSubscription,r=e.originalProducts,n=e.subscriptionOwnerEmail;return t?m.a.createElement(m.a.Fragment,null,"You receive complimentary access to ",Object(E.x)(Object(E.u)(r))," ","from ",n,". For further assistance, please"," ",Xn||(Xn=i()(_n.a,{onClick:me})),"."):m.a.createElement(m.a.Fragment,null,"You receive complimentary access to ",Object(E.x)(Object(E.u)(r))," from"," ",n,". To enjoy more from The Times, you can purchase additional subscriptions on your own. For further assistance, please"," ",ei||(ei=i()(_n.a,{onClick:me})),".")},gi=function(e){var t=e.subscriptions,r=e.queryParameters,n=Object(E.o)(t),a=Object(E.f)(t),o=oi(t).join(", "),c=function(e){var t=e.find((function(e){return!!e.sharedBy}));return t?t.sharedBy:"the subscription owner"}(t);return i()("div",{"data-testid":"bonus-not-eligible"},void 0,i()(v.m,{headerLevel:"1",typeStyle:v.Z.display2},void 0,i()(yi,{hasAllAccessSubscription:n,subscriptionName:o})),ti||(ti=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body2},void 0,i()(vi,{subscriptionOwnerEmail:c,hasAllAccessSubscription:n,originalProducts:a})),ri||(ri=i()(v.H,{space:"8"})),n?i()(Kn,{queryParameters:r,subscriptionName:o}):i()(ai,{subscriptions:t}))};gi.displayName="BonusSubscriberIneligibilityMessage";var hi,Si,Ii=function(e){var t=e.hasAllAccessSubscription,r=e.hasHomeDeliverySubscription,n=e.currentGiftProducts;return t?m.a.createElement(m.a.Fragment,null,"You already have an ",Le.b," subscription."):r?m.a.createElement(m.a.Fragment,null,"You already have a ",Le.a," subscription."):m.a.createElement(m.a.Fragment,null,"You already have access to ",Object(E.w)(Object(E.u)(n)),".")},wi=function(e){var t=e.hasAllAccessSubscription,r=e.hasHomeDeliverySubscription,n=e.hasMultipleGifts,a=e.currentGiftProducts,o=e.giftPurchaserName,c=e.subscriptionEndDate;return t?m.a.createElement(m.a.Fragment,null,"You received your access to ",Object(E.x)(Object(E.u)(a))," as a gift from ",o,". Your access will remain valid through ",c,". For further assistance, please ",ui||(ui=i()(_n.a,{onClick:me})),"."):r?m.a.createElement(m.a.Fragment,null,"You received your weekly newspaper delivery and unlimited digital access as a gift from"," ",o,". Your access will remain valid through ",c,". For further assistance, including changing your delivery days or address, please"," ",di||(di=i()(_n.a,{onClick:me})),"."):n?m.a.createElement(m.a.Fragment,null,"Because you received your ",Object(E.w)(Object(E.u)(a))," subscriptions as gifts, you cannot make changes to them. To enjoy more from The Times, you can purchase additional subscriptions on your own. For further assistance, please"," ",pi||(pi=i()(_n.a,{onClick:me})),"."):m.a.createElement(m.a.Fragment,null,"Because you received your ",Object(E.w)(Object(E.u)(a))," subscription as a gift from ",o,", you cannot make changes to it. Your access will remain valid through ",c,". To enjoy more from The Times, you can purchase additional subscriptions on your own. For further assistance, please"," ",bi||(bi=i()(_n.a,{onClick:me})),".")},Oi=function(e){var t=e.subscriptions,r=e.queryParameters,n=Object(E.l)(t),a=Object(E.f)(n),o=Object(E.o)(n),c=Object(E.p)(n),s=n.length>1,l=u()(n,1)[0],d=Object(mt.f)((null==l?void 0:l.subscriptionEndDate)||""),p=(null==l?void 0:l.giftPurchaserName)||"",b=o?Le.b:"your unlimited digital access";return i()("div",{"data-testid":"gift-not-eligible"},void 0,i()(v.m,{dataTestId:"gift-not-eligible-heading",headerLevel:"1",typeStyle:v.Z.display2},void 0,i()(Ii,{hasAllAccessSubscription:o,hasHomeDeliverySubscription:c,currentGiftProducts:a})),mi||(mi=i()(v.H,{space:"2"})),i()(v.r,{typeStyle:v.Z.body2},void 0,i()(wi,{hasAllAccessSubscription:o,hasHomeDeliverySubscription:c,hasMultipleGifts:s,currentGiftProducts:a,giftPurchaserName:p,subscriptionEndDate:d})),fi||(fi=i()(v.H,{space:"8"})),o||c?i()(Kn,{queryParameters:r,subscriptionName:b}):i()(ai,{subscriptions:t}))};Oi.displayName="GiftSubscriberIneligibilityMessage";var Ti,Ci,Ni=function(e){return e.filter((function(e){return e.subscriptionLabels.includes(De.f.PAID_DIGI)})).map((function(e){return e.subscriptionName}))},xi=function(e){var t,r=e.subscriptions;return i()("div",{"data-testid":"payment-in-progress-not-eligible"},void 0,i()(v.m,{dataTestId:"payment-in-progress-not-eligible-heading",headerLevel:"1",typeStyle:v.Z.display2},void 0,"Please try again later."),hi||(hi=i()(v.H,{space:"2"})),i()(v.r,{dataTestId:"payment-in-progress-not-eligible-details",typeStyle:v.Z.body2},void 0,(t={inProgressSubscriptionNames:Object(E.w)(Ni(r)),ccLink:Si||(Si=i()(_n.a,{onClick:me}))},m.a.createElement(m.a.Fragment,null,"The payment for your current subscription to ",t.inProgressSubscriptionNames," is pending. We cannot proceed with any subscription changes until the payment has been completed. Please try again at a later time, or for further assistance, ",t.ccLink,"."))))};xi.displayName="PaymentInProgressIneligibilityMessage";var ji=function(e){var t,r,n,a=(null===(t=e.productSwitchEligibility)||void 0===t?void 0:t.reason)||"",o="HAS_SHARED_B2B_SUBSCRIPTIONS"===a,c="HAS_SHARED_BONUS_SUBSCRIPTIONS"===a,s="GIFT_SUBSCRIPTION"===a,l=E.c.includes(a),u="PAYMENT_IN_PROGRESS"===a,d=function(e){return E.a.includes(e)}(a),p=function(e,t,r){return e&&!t.incomingOfferId||r}(d,e.queryParameters,l),m=function(e,t){return e&&!!t.incomingOfferId}(d,e.queryParameters);return Object(b.useEffect)((function(){!function(e,t,r){var n=JSON.stringify({reason:e,incomingOfferIdStatus:"EMPTY"===t?void 0:t,incomingOfferId:r.incomingOfferId||void 0,campaignId:r.originalQueryParameters[A.a]||void 0});de(ue,"step0",n)}(a,e.incomingOfferIdStatus,e.queryParameters)}),[]),p?(Object(C.redirect)((r=window.location.search,"".concat(qn.a.WWW_HOST,"/subscription").concat(r))),Ti||(Ti=i()(I.a,{}))):m?(Object(C.redirect)((n=e.queryParameters,Object(A.e)("".concat(qn.a.MYACCOUNT_BASE_URL,"/get-started"),n))),Ci||(Ci=i()(I.a,{}))):u?i()(xi,{subscriptions:e.subscriptions}):o?i()(li,{subscriptions:e.subscriptions,queryParameters:e.queryParameters}):c?i()(gi,{subscriptions:e.subscriptions,queryParameters:e.queryParameters}):s?i()(Oi,{subscriptions:e.subscriptions,queryParameters:e.queryParameters}):i()(Fn,{dataTestId:"ps-not-eligible",diagnosticMsg:"[".concat(a,"][").concat(e.incomingOfferIdStatus,"]")})};ji.displayName="ProductSwitchEligibilityMessage";var Pi,Ei,Ai,ki,Li,Di,Mi,Ui,Ri,Hi,_i,Fi=r("VkAN"),Vi=r.n(Fi),Gi=r("eFc+"),Zi=r.n(Gi).a,Bi=Zi(Pi||(Pi=Vi()(['\n  query getProductSwitchEligibility($sourceId: String, $trackingMetadata: [TrackingMetadataEntry!]) {\n    accountInfo(surfaceCode: "product-switch-page", prepareToTransaction: false) {\n      displayName\n      emailAddress\n      productSwitchEligibility(sourceId: $sourceId, trackingMetadata: $trackingMetadata) {\n        eligible\n        reason\n        offersToSwitch {\n          bundle\n          offerId\n          offerChainId\n          offerShortId\n          subscriptionName\n          subscriptionDescription\n          subscriptionLabels\n          additionalSubscriptionsIds\n          billingTiers {\n            tierCycleAmount\n            tierCycleRecurrences\n            tierCycleDurationDays\n            tierCycleDurationStr\n            tierFirstDate\n            tierFourWeeksAmount\n            tierLastDate\n            tierWeeklyAmount\n            tierDurationStr\n          }\n          presentation {\n            cancellationPolicy\n            offerFourWeeksPrice\n            offerInitialBasicRate\n            offerInitialBasicUnit\n            offerInitialRateCharge\n            offerInitialRateDuration\n            offerInitialRateTermination\n            offerPermanentBasicRate\n            offerPermanentBasicUnit\n            offerType\n            purchaseTerms\n          }\n          offerLabels\n          maxShares\n        }\n        activeSalesInformation\n      }\n      accountPaymentMethod {\n        type\n        presentation\n      }\n      subscriptions {\n        subscriptionId\n        subscriptionName\n        productCode\n        subscriptionLabels\n        subscriptionStatus\n        subscriptionDescription\n        billingInformation {\n          billingTiers {\n            promotionalTier\n            tierCycleAmount\n            tierCycleDurationDays\n            tierCycleDurationStr\n            tierCycleRecurrences\n            tierDurationStr\n            tierLastDate\n            tierWeeklyAmount\n            tierStatus\n          }\n        }\n        subscriptionLabels\n        sharedBy\n        giftPurchaserName\n        subscriptionEndDate\n        shareInvitations {\n          status\n        }\n        paymentMethod {\n          type\n          presentation\n        }\n      }\n      hasBillingHistory\n    }\n  }\n']))),Wi=Zi(Ei||(Ei=Vi()(["\n  mutation validateProductSwitch(\n    $subscriptionIds: [ID!]!,\n    $targetOfferId: ID!,\n    $operationType: ProductSwitchOperationType!\n  ) {\n    validateProductSwitch(\n      validateProductSwitchInput: {\n        subscriptionIds: $subscriptionIds,\n        targetOfferId: $targetOfferId,\n        operationType: $operationType\n      }\n    ) {\n      success\n      estimatedCredit\n      estimatedImmediateCharge\n      paymentMethodUpdateRequired\n      concurrentThirdPartySubscriptionNames\n    }\n  }\n"]))),qi=Zi(Ai||(Ai=Vi()(["\n  mutation executeProductSwitch(\n    $subscriptionIds: [ID!]!,\n    $targetOfferId: ID!,\n    $operationType: ProductSwitchOperationType!\n  ) {\n    executeProductSwitch(\n      executeProductSwitchInput: {\n        subscriptionIds: $subscriptionIds,\n        targetOfferId: $targetOfferId,\n        operationType: $operationType\n      }\n    ) {\n      success\n      credit\n      immediateCharge\n      asynchronousTransaction\n      concurrentThirdPartySubscriptionNames\n      newSubscriptionId\n    }\n  }\n"])));function Yi(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ki(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Yi(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yi(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var zi=function(e){var t=e.accountInfo,r=e.queryParameters,n=t.emailAddress,a=t.displayName,c=t.subscriptions,s=t.hasBillingHistory,l=t.productSwitchEligibility,d=t.accountPaymentMethod,v=Object(b.useContext)(h.c),S=Object(y.useApolloClient)(),I=Object(T.c)(),w=Object(b.useState)({activeAction:"SWITCH",selected:void 0}),O=u()(w,2),x=O[0],j=O[1],P=Object(b.useState)(function(e){var t;return e.incomingOfferId?"PROCESSING":null!==(t=e.sourceId)&&void 0!==t&&t.includes("upgrade_to_aa")?"PRESELECTED":"EMPTY"}(r)),k=u()(P,2),L=k[0],D=k[1],M=Object(b.useState)(!1),U=u()(M,2),R=U[0],H=U[1],_=function(e,t){var r=t.offersToSwitch.map((function(e){return e.additionalSubscriptionsIds})).flat();return e.filter((function(e){return r.includes(e.subscriptionId)}))}(c,l),F=c.filter((function(e){var t=e.subscriptionLabels;return Object(N.r)(t)})),V=Object(y.useMutation)(Wi),G=u()(V,2),Z=G[0],B=G[1],W=B.loading,q=B.error,Y=B.data,K=Object(y.useMutation)(qi),z=u()(K,2),$=z[0],Q=z[1],J=Q.loading,X=Q.error,ee=Q.data;Object(b.useEffect)((function(){v.setUserProfile({displayName:a,subscriptions:c,hasBillingHistory:s})}),[]),Object(b.useEffect)((function(){if(l.eligible&&!["EMPTY","INVALID","ACCEPTED"].includes(L)){var e=function(e,t,r){return"PROCESSING"===r?Object(E.i)(e,t):"PRESELECTED"===r?Object(g.c)(e.productSwitchEligibility):void 0}(t,r.incomingOfferId,L);!function(e,t,r){var n={offerId:e,bnd:(null==t?void 0:t.bundle)||"",incOfSt:r};Object(ce.v)("ProductSwitch",se,"IncomingOfferProcessing",n)}((null==r?void 0:r.incomingOfferId)||"",e,L),e?Z({variables:{subscriptionIds:_.map((function(e){return e.subscriptionId})),targetOfferId:e.offerId,operationType:"SWITCH"}}).then((function(){j((function(t){return Ki(Ki({},t),{},{selected:e,activeAction:"SWITCH"})})),D("ACCEPTED"),I.to(Object(A.e)("/product-switch/review",r))})).catch((function(e){"generic_error"===Zr(e,C.redirectToLogin)&&H(!0),I.to(Object(A.e)("/product-switch",r))})):D("INVALID")}}),[L,l]);var te=function(){var e=o()(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z({variables:{subscriptionIds:_.map((function(e){return e.subscriptionId})),targetOfferId:null===(t=x.selected)||void 0===t?void 0:t.offerId,operationType:"SWITCH"}}).then((function(){return!0})).catch((function(){return!1})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!l.eligible||0===_.length)return m.a.createElement(m.a.Fragment,null,Object(E.q)(n)&&i()(Ft,{eligibilityReason:l.reason}),i()(ji,{productSwitchEligibility:l,queryParameters:r,incomingOfferIdStatus:L,subscriptions:c}));if(R)return i()(Fn,{diagnosticMsg:"[VALIDATE_MUTATION_ERROR][".concat(L,"]")});if(["PROCESSING","PRESELECTED"].includes(L))return ki||(ki=i()("div",{"data-testid":"incoming-offer-processing"}));var re=function(e,t){j((function(r){return Ki(Ki({},r),{},{selected:e,activeAction:t})}))},ne=function(){var e=o()(p.a.mark((function e(){var t,r,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$({variables:{subscriptionIds:_.map((function(e){return e.subscriptionId})),targetOfferId:null===(t=x.selected)||void 0===t?void 0:t.offerId,operationType:"SWITCH"}});case 3:return i=e.sent,S.clearStore(),e.abrupt("return",[!0,(null==i||null===(r=i.data)||void 0===r||null===(n=r.executeProductSwitch)||void 0===n?void 0:n.newSubscriptionId)||""]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[!1,""]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return i()(f.Switch,{},void 0,i()(f.Route,{path:"/product-switch/confirm"},void 0,i()(ut,{accountInfo:t,queryParameters:r,originalSubscriptions:_,productSwitchExecuteMutationResponse:ee,selectedOffer:x.selected})),i()(f.Route,{path:"/product-switch/review"},void 0,i()(Mn,{activeVerb:"SWITCH",currentSubscriptions:_,accountPaymentMethod:d,queryParameters:r,productSwitchValidateMutationResponse:Y,executeMutationError:X,processing:J,selected:x.selected,submitOrder:ne,activeSalesInformation:t.productSwitchEligibility.activeSalesInformation,incomingOfferIdStatus:L})),i()(f.Route,{path:"/product-switch/apply-offer"},void 0,i()(Un,{accountInfo:t,queryParameters:r,handleSelect:re,handleTransactionPreview:te,validateMutationError:q,selectedOffer:x.selected})),i()(f.Route,{path:"/"},void 0,i()(qr,{accountInfo:t,queryParameters:r,activeAction:x.activeAction,currentSubscriptions:_,thirdPartySubscriptions:F,handleSelect:re,handleTransactionPreview:te,processing:W,validateMutationError:q,incomingOfferIdStatus:L,selected:x.selected})))};zi.displayName="ProductSwitch";var $i=function(){var e=Object(b.useMemo)(A.f,[]),t=Object(y.useQuery)(Bi,{variables:{sourceId:e.sourceId,trackingMetadata:Object(A.g)(e)}}),r=t.loading,n=t.error,a=t.data,o=(void 0===a?{}:a).accountInfo;if(r)return Li||(Li=i()(I.a,{}));if(n){var c=u()(n.graphQLErrors,1)[0],s=(void 0===c?{message:"unknown_error"}:c).message,l={moduleName:se};return s===O.g?(Object(S.a)(l),Di||(Di=i()(I.a,{}))):(Object(S.b)(l,s),Mi||(Mi=i()(w.a,{placement:"FEATURE_PAGE"})))}return o?i()(zi,{accountInfo:o,queryParameters:e}):Ui||(Ui=i()(I.a,{}))};$i.displayName="ProductSwitchWithUserProfile";var Qi=function(){return i()(h.a,{pageContentMaxWidth:v.U.STANDARD},void 0,Ri||(Ri=i()(v.e,{defaultSpace:"0.5",mediumScreenSpace:"2"})),Hi||(Hi=i()($i,{})),_i||(_i=i()(v.e,{defaultSpace:"0.5",mediumScreenSpace:"2"})))};Qi.displayName="ProductSwitchWithPageLayout";t.default=Qi},ZGhy:function(e,t,r){"use strict";r.r(t),r.d(t,"appleAppStoreTitleCopy",(function(){return n})),r.d(t,"googlePlayTitleCopy",(function(){return i})),r.d(t,"amazonAppStoreTitleCopy",(function(){return a}));var n="App Store",i="Google Play",a="Amazon Appstore"},bn3E:function(e,t,r){"use strict";r.r(t),r.d(t,"globalTitleErrorPageTitleAll",(function(){return s})),r.d(t,"globalTitlePageNotFoundAll",(function(){return l})),r.d(t,"globalErrorNoTryAgainAll",(function(){return u})),r.d(t,"globalErrorNoHdAll",(function(){return d})),r.d(t,"connectDigitalAccountLinkLabel",(function(){return p})),r.d(t,"globalErrorNoSubAll",(function(){return b})),r.d(t,"globalErrorShadowModeAll",(function(){return m})),r.d(t,"globalErrorErrorPageAll",(function(){return f})),r.d(t,"globalErrorPageNotFoundAll",(function(){return y})),r.d(t,"globalErrorTryAgainSoonAll",(function(){return v})),r.d(t,"globalErrorAll",(function(){return g})),r.d(t,"globalErrorPhoneNumberInvalidAll",(function(){return h})),r.d(t,"globalErrorPhoneNumberLengthAll",(function(){return S})),r.d(t,"globalErrorIneligibleComplaintSubscriberAll",(function(){return I})),r.d(t,"globalErrorIneligibleSuspendSubscriberAll",(function(){return w})),r.d(t,"globalButtonGoHome",(function(){return O}));var n=r("gcR/"),i=r.n(n),a=r("q1tI"),o=r.n(a),c=r("4QM3"),s="Try again soon",l="Page not found",u=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but we’re having a technical issue right now. Please contact"," ",i()("a",{target:"_blank",href:c.CARE_PAGE_LINK,rel:"noopener"},void 0,"Customer Care")," ","for assistance.")},d=function(e){var t=e.ccLink,r=e.connectDigitalAccountLink;return o.a.createElement(o.a.Fragment,null,"It doesn’t look like you get the newspaper delivered. If this isn’t true, please ",t," or"," ",r," with your newspaper subscription.")},p="connect this digital account",b=function(){return o.a.createElement(o.a.Fragment,null,"It doesn’t look like you subscribe to The Times. If this isn’t true, please"," ",i()("a",{target:"_blank",href:c.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care")," ","or",i()("a",{href:c.LINK_HD_SUBSCRIPTION_PAGE_LINK,target:"_blank",rel:"noopener"},void 0,"connect this digital account")," ","with your newspaper subscription.")},m=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but our system is undergoing regular maintenance right now. Please"," ",i()("a",{target:"_blank",href:c.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care"),"or try again in twenty minutes.")},f="We’re sorry, but we’re having a technical issue right now.",y="We’re sorry, we seem to have lost this page, but we don’t want to lose you.",v=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"Please try again soon, or ",t," for immediate assistance.")},g=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but we’re having a technical issue right now. If you continue to have problems, please"," ",i()("a",{target:"_blank",href:c.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care"),".")},h="Please enter a valid phone number.",S="Please enter 10 digits.",I=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"We’re sorry, but you can’t use this feature with your current subscription. Please ",t," to report a missing paper.")},w=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"We’re sorry, but you can’t use this feature with your current subscription. Please ",t," to suspend delivery.")},O="Go to home page"},kji5:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var n,i,a,o,c,s,l,u,d=r("gcR/"),p=r.n(d),b=r("q1tI"),m=r.n(b),f=r("vftj"),y=r("MShG"),v=r("/Efl"),g=r("4gCf"),h=r("4+a0"),S=r("Ke7S"),I=r("HLED"),w=r("bn3E"),O=r("zGcO"),T=function(e){var t=Object(S.c)();return Object(b.useEffect)((function(){Object(I.f)({moduleName:"UnknownError"})}),[]),m.a.createElement(m.a.Fragment,null,n||(n=p()(f.Helmet,{title:w.globalTitleErrorPageTitleAll})),p()(O.b,{placement:e.placement},void 0,p()(y.m,{typeStyle:y.Z.display2,headerLevel:"2"},void 0,i||(i=p()(v.a,{copy:w.globalTitleErrorPageTitleAll}))),a||(a=p()(y.H,{space:"4"})),p()(O.a,{},void 0,p()(y.m,{typeStyle:y.Z.title1,headerLevel:"3"},void 0,o||(o=p()(v.a,{copy:w.globalErrorErrorPageAll}))),c||(c=p()(y.H,{space:"2"})),p()(y.r,{typeStyle:y.Z.body2},void 0,p()(v.a,{copy:w.globalErrorTryAgainSoonAll,params:{ccLink:s||(s=p()(g.a,{}))}}))),l||(l=p()(y.H,{space:"4"})),p()(y.F,{to:h.a.BASENAME,onClick:function(e){e.preventDefault(),t.to("/")}},void 0,u||(u=p()(v.a,{copy:w.globalButtonGoHome})))))}},vkQp:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("gcR/"),i=r.n(n),a=(r("q1tI"),r("5lfh")),o=r("MShG"),c=Object(a.d)("div",{target:"emia3cd0"})("display:grid;grid-template-columns:max-content auto;grid-column-gap:",o.hb[1],";cursor:pointer;align-items:center;"),s=Object(a.d)("label",{target:"emia3cd1"})("display:contents;cursor:pointer;"),l=Object(a.d)("input",{target:"emia3cd2"})("width:",o.hb[2],";height:",o.hb[2],";cursor:pointer;"),u=Object(a.d)("div",{target:"emia3cd3"})(o.ib.body2," color:",o.O.text.primary,";"),d=Object(a.d)("div",{target:"emia3cd4"})(o.ib.legal),p=function(e){return i()(c,{"data-testid":"".concat(e.dataTestId||"",":container")},void 0,i()(s,{"data-testid":"".concat(e.dataTestId||"",":label"),as:e.suppressLabelElement?"div":"label"},void 0,i()(l,{"data-testid":"".concat(e.dataTestId||"",":input"),type:"radio",name:e.name,onChange:e.onChange,defaultChecked:e.defaultChecked,defaultValue:e.value,tabIndex:e.tabIndex,disabled:e.disabled}),i()(u,{"data-testid":"".concat(e.dataTestId||"",":content")},void 0,e.label,e.children,e.helperText&&i()(d,{"data-testid":"".concat(e.dataTestId||"",":helper")},void 0,e.helperText))))};p.displayName="RadioButton"},zGcO:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r("5lfh"),i=r("MShG"),a=Object(n.d)("div",{target:"e4bqtox0"})("background-color:",i.O.background.secondary,";padding:",i.hb[3],";"),o=Object(n.b)("margin:",i.hb[6]," auto;max-width:calc(100% - ",i.hb[4]," - ",i.hb[4],");width:",i.U.STANDARD,";"),c=Object(n.b)("margin:0 auto;max-width:calc(100vw - ",i.hb[4]," - ",i.hb[4],");width:",i.U.STANDARD,";"),s=Object(n.d)("div",{target:"e4bqtox1"})((function(e){return"FULL_PAGE"===(t=e.placement)?o:"FEATURE_PAGE"===t?c:Object(n.b)();var t}),";")}}]);
//# sourceMappingURL=194-369015b3483d8151446e.js.map viewBox="0 0 125 60" class="main-header__branding-icon icon-logo-signature" xmlns="http://www.w3.org/2000/svg">
    <title>Council on Foreign Relations</title>
    <path d="M106.909 13.178c-.502.92-1.081 1.458-1.854 1.458-.713 0-1.01-.522-.975-1.458.062-1.772 1.163-4.833 2.824-4.833.6 0 .999.416.97 1.371-.026.912-.386 2.406-.965 3.462m-.055-5.377c-2.64 0-4.56 2.264-4.63 4.755-.04 1.428.743 2.647 2.703 2.647 3.06 0 4.676-2.7 4.73-4.714.053-1.57-.944-2.688-2.803-2.688m17.484 3.789c0-.612-.316-1.01-.782-1.01-.404 0-.679.3-.679.677 0 .483.45.613.45 1.239-.001.259-.103.519-.32.765-.31.297-.748.513-2.042.513h-3.142c-.364 0-.465-.154-.313-.587.468-1.341 1.109-2.92 1.241-3.587.176-.876-.203-1.687-1.315-1.687-1.749 0-2.89 1.524-4.426 4.42h-.089s1.115-2.606 1.115-3.464c0-.61-.367-.946-1.026-.946-1.009 0-2.041 1.05-2.486 1.63l.31.302c.203-.255.51-.557.737-.733.402-.312.808-.263.687.407-.155.866-1.328 3.959-1.961 5.535h1.827c1.875-3.756 3.251-6.174 4.345-6.174.317 0 .483.196.483.53 0 .675-.985 2.959-1.389 4.312-.238.8-.183 1.332.52 1.332h3.498c1.451 0 2.618-.677 3.122-1.04 1.003-.68 1.635-1.614 1.635-2.433M10.751 24.923v-2.138H2.058v14.48h2.448V30.94h5.657v-2.143H4.506v-3.874zm71.256-.185c-1.474-1.462-3.291-2.302-5.748-2.302-4.258 0-7.677 3.079-7.676 7.66-.001 4.576 3.074 7.48 7.453 7.48h.014c4.075 0 7.1-2.548 7.115-6.755v-.448h-7.093v2.06h4.397c-.473 2.002-2.291 2.938-4.271 2.938-3.055 0-5.025-2.035-5.028-5.347.008-3.065 2.025-5.4 4.976-5.405 2.104 0 3.426.977 4.223 1.776l1.638-1.657zM4.49 51.483v-4.486h2.005c2.614 0 2.919 1.203 2.919 2.105 0 .888-.377 2.381-2.901 2.381H4.49zm3.519 1.851s-.018-.018.112-.034c2.109-.247 3.73-1.928 3.73-4.252 0-2.538-1.893-4.18-4.818-4.18H2.058v14.535H4.49v-6.019h.592l4.895 6.02h3.09l-5.06-6.07zm9.314-8.445v14.533h9.205v-2.114h-6.68v-4.337h5.546v-2.108h-5.546v-3.866h6.21v-2.108zm13.937-.022v14.535h8.865v-2.094h-6.343v-12.44zm24.952 0v2.13h4.494v12.407h2.438V46.995h4.49v-2.13zM71.44 59.402h2.529V44.866H71.44zm35.288-5.305l-9.756-9.776v15.082h2.43v-9.167c.423.418 9.757 9.764 9.757 9.764V44.867h-2.431v9.23zm11.854-3.111c-1.794-.892-2.6-1.555-2.6-2.6 0-1.58 1.623-1.775 2.107-1.775 1.029 0 1.988.344 2.834 1.133l1.234-1.761c-1.366-1.073-2.622-1.393-4.068-1.393-2.648 0-4.5 1.61-4.5 3.924 0 2.215 1.455 3.317 3.917 4.575 1.699.867 2.557 1.632 2.557 2.654 0 1.142-.993 1.819-2.301 1.819-1.38 0-2.47-.465-3.567-1.488l-1.375 1.721c1.582 1.46 3.24 1.87 4.763 1.87 3.286 0 4.942-1.864 4.942-4.14 0-2.331-1.765-3.454-3.943-4.54M12.08 11.201c-1.172 1.342-2.672 2.016-4.33 2.016-2.959 0-5.17-2.004-5.17-5.403 0-3.105 2.076-5.258 4.862-5.258 1.55 0 2.882.51 4.066 1.695l1.618-1.64C11.686 1.083 9.828.363 7.47.363 3.244.363 0 3.586 0 7.884c0 4.511 3.088 7.523 7.433 7.523 2.561 0 4.584-.862 6.046-2.523l-1.399-1.683zm66.172.03c-1.172 1.341-2.547 1.975-4.422 1.975-3.084 0-5.17-2.004-5.17-5.402 0-3.104 2.084-5.267 4.87-5.267 1.55 0 2.883.51 4.066 1.695l1.6-1.619c-1.39-1.536-3.287-2.25-5.645-2.25-4.343 0-7.472 3.223-7.472 7.521 0 4.511 3 7.523 7.435 7.523 2.677 0 4.676-.822 6.137-2.483l-1.4-1.693zm-38.644 4.05c3.432 0 5.411-1.862 5.973-4.36.11-.496.165-1.217.165-1.834V.548H43.31v8.468c0 2.721-1.342 4.075-3.68 4.075-2.41 0-3.854-1.398-3.854-4.075V.548H33.34v8.54c0 .642.057 1.338.17 1.833.573 2.498 2.598 4.36 6.1 4.36m13.05-9.512c.425.419 9.83 9.91 9.83 9.91V.548h-2.372v9.365L50.294 0v15.082h2.366V5.769zm30.062 9.313h2.525V.548h-2.525zM90.25.548V15.08h8.942v-2.095h-6.41V.548zM22.66 2.403c-2.794 0-5.06 2.216-5.06 5.466s2.154 5.467 5.06 5.467c2.904 0 5.056-2.217 5.056-5.467 0-3.25-2.264-5.466-5.057-5.466m-7.613 5.464C15.042 3.503 18.316.25 22.66.25c4.344 0 7.614 3.254 7.613 7.618.001 4.362-3.136 7.617-7.613 7.617-4.478 0-7.617-3.255-7.613-7.617m5.94 16.692c-2.793 0-5.057 2.216-5.057 5.467 0 3.25 2.152 5.467 5.057 5.467 2.906 0 5.057-2.217 5.057-5.467 0-3.251-2.263-5.467-5.057-5.467m-7.613 5.465c-.005-4.365 3.269-7.62 7.613-7.62 4.345 0 7.616 3.255 7.614 7.62.002 4.363-3.137 7.617-7.614 7.617s-7.618-3.254-7.613-7.617m36.748.788h5.546v-2.108h-5.546v-3.866h6.208v-2.108h-8.734v14.534h9.205v-2.114h-6.679zm11.533 6.452h2.525V22.73h-2.525zm-26.489-7.92v-4.487h2.004c2.613 0 2.919 1.203 2.919 2.107 0 .887-.378 2.38-2.901 2.38h-2.022zm3.519 1.85s-.019-.017.111-.033c2.108-.247 3.73-1.928 3.73-4.252 0-2.538-1.894-4.182-4.818-4.182h-4.975v14.537h2.433v-6.018h.592l4.895 6.018h3.09l-5.058-6.07zm3.449 28.204h2.541l1.416-3.376h5.558l1.393 3.376h2.682l-6.774-15.49-6.816 15.49zm6.732-10.073l1.89 4.542h-3.789l1.9-4.542zm36.612-2.6c-2.792 0-5.056 2.216-5.056 5.466 0 3.251 2.153 5.468 5.056 5.468 2.907 0 5.06-2.217 5.06-5.468 0-3.25-2.264-5.466-5.06-5.466m-7.613 5.464c-.004-4.365 3.27-7.617 7.614-7.617 4.344 0 7.617 3.252 7.614 7.617.002 4.362-3.138 7.618-7.615 7.618s-7.617-3.256-7.613-7.618m11.558-24.238c.424.419 9.829 9.909 9.829 9.909V22.73h-2.37v9.366l-9.823-9.913v15.082h2.364v-9.313z" class="icon-fill" fill="none"/>
</svg>
  
          </a>
        </div>
                  <div class="main-header__corporate">
            <ul class="main-header__corporate-list">
                              <li class="main-header__corporate-list-item">
                  <a href="https://foreignaffairs.com" target="_blank" class="main-header__corporate-link main-header__corporate-link--fa">
                    Foreign Affairs
                  </a>
                </li>
                              <li class="main-header__corporate-list-item">
                  <a href="https://education.cfr.org/" target="_blank" class="main-header__corporate-link">
                    CFR Education
                  </a>
                </li>
                              <li class="main-header__corporate-list-item">
                  <a href="https://link.cfr.org/join/66n/signup&amp;hash=2d4c5929e9e04cc42f5cd375fb8dcfb1" target="_blank" class="main-header__corporate-link main-header__corporate-link-- js-sailthru-newsletter">
                    Newsletters
                  </a>
                </li>
                          </ul>
          </div>
                <div class="main-header__controls">
          <ul class="main-header__controls-list">
                          <li class="main-header__controls-list-item main-header__controls-list-item--initiatives">
                <div class="main-header__initiatives-dropdown">
                  <button class="main-header__initiatives-dropdown-toggle">
                          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="main-header__initiatives-grid-icon icon-grid">
  <rect x="1" y="1" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="1" y="8" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="1" y="15" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="8" y="1" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="8" y="8" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="8" y="15" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="15" y="1" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="15" y="8" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
  <rect x="15" y="15" width="4" height="4" rx="2" fill="none" class="icon-fill"/>
</svg>
  
                  </button>
                  <div class="main-header__initiatives-dropdown-menu">
                    <div class="main-header__initiatives-dropdown-menu-container">
                                              <div class="main-header__initiatives-dropdown-title">Related Sites</div>
                        <ul class="main-header__initiatives-dropdown-list">
                                                      <li class="main-header__initiatives-dropdown-list-item">
                              <a href="https://www.cfr.org/councilofcouncils" target="_blank" class="main-header__initiatives-dropdown-link">
                                                                  <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-coc-icon.png" loading="lazy" alt="Council of Councils" class="lazyload main-header__initiatives-dropdown-icon" />
                                                                Council of Councils
                              </a>
                            </li>
                                                      <li class="main-header__initiatives-dropdown-list-item">
                              <a href="https://www.thinkglobalhealth.org" target="_blank" class="main-header__initiatives-dropdown-link">
                                                                  <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-tgh-icon.png" loading="lazy" alt="Think Global Health" class="lazyload main-header__initiatives-dropdown-icon" />
                                                                Think Global Health
                              </a>
                            </li>
                                                      <li class="main-header__initiatives-dropdown-list-item">
                              <a href="https://cfrorg.store" target="_blank" class="main-header__initiatives-dropdown-link">
                                                                  <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-store.png" loading="lazy" alt="Online Store" class="lazyload main-header__initiatives-dropdown-icon" />
                                                                Online Store
                              </a>
                            </li>
                                                  </ul>
                                          </div>
                  </div>
                </div>
              </li>
                                      <li class="main-header__controls-list-item main-header__controls-list-item--user">
                <a href="/member/login" class="main-header__controls-link">
                        <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" class="main-header__controls-icon-user icon-user-circle-outlined" fill="none">
  <path class="icon-stroke" stroke="none" stroke-width="1.85" d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"/>
  <path class="icon-stroke" stroke="none" stroke-width="1.85" d="M11 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5.468 19.153v-1.6A2.553 2.553 0 018.021 15h5.958a2.553 2.553 0 012.553 2.553v1.702"/>
</svg>
  
                </a>
              </li>
                        <li class="main-header__controls-list-item main-header__controls-list-item--search-cta">
              <button type="submit" class="main-header__search-cta">
                      <svg viewBox="0 0 24 24" class="main-header__search-icon icon-search" xmlns="http://www.w3.org/2000/svg">
    <title>Search</title>
    <g class="icon-fill" fill="none" fill-rule="evenodd">
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        <path d="M14.293 15.707l7 7 1.414-1.414-7-7z"/>
    </g>
</svg>
  
              </button>
            </li>
            <li class="main-header__controls-list-item main-header__controls-list-item--menu">
              <div class="main-header__menu-hotspot">
                <div class="main-header__menu-btn">
                  <span class="main-header__menu-btn-bar"></span>
                </div>
              </div>
            </li>
            <li class="main-header__controls-list-item main-header__controls-list-item--search">
              <div class="main-header__search-inline">
                <form action="/search" autocomplete="off" class="main-header__search-inline-form">
                  <input type="search" name="keyword" placeholder="What are you searching for?" class="main-header__search-inline-input main-header__autocomplete" />
                  <button type="submit" class="main-header__search-inline-cta">
                          <svg viewBox="0 0 24 24" class="main-header__search-inline-icon icon-search" xmlns="http://www.w3.org/2000/svg">
    <title>Search</title>
    <g class="icon-fill" fill="none" fill-rule="evenodd">
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        <path d="M14.293 15.707l7 7 1.414-1.414-7-7z"/>
    </g>
</svg>
  
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-header__nav">
      <div class="main-header__nav-container">
        <ul class="main-header__nav-list main-header__nav--with-featured">
                                    <li class="main-header__nav-list-item main-header__nav-list-item--featured">
                <a href="https://www.cfr.org/israeli-palestinian-conflict" class="main-header__nav-list-item-link">Israel-Hamas</a>
              </li>
                          <li class="main-header__nav-list-item main-header__nav-list-item--featured">
                <a href="https://www.cfr.org/asia/taiwan" class="main-header__nav-list-item-link">Taiwan</a>
              </li>
                      
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/topics" class="main-header__nav-list-item-link">Topics</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/energy-and-environment/climate-change" class="card-article__topic-tag-link">
            Climate Change
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/paris-global-climate-change-agreements " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Global Climate Agreements: Successes and Failures</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2020/10/climate.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">International efforts, such as the Paris Agreement, aim to reduce greenhouse gas emissions. But experts say countries aren’t doing enough to limit dangerous global warming.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by Lindsay Maizland</span>
                    
            
                          <span class="card-article__date"> December 5, 2023</span>
            
                                                                                                                                <a href="/programs/renewing-america" class="card-article__series">
                    Renewing America
                </a>
                    </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/defense-and-security" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Defense &amp; Security</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/diplomacy-and-international-institutions" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Diplomacy &amp; International Institutions</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/economics" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Economics</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/energy-and-environment" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Energy &amp; Environment</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/health" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Health</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/human-rights" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Human Rights</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/politics-and-government" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Politics &amp; Government</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/social-issues" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Social Issues</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/regions" class="main-header__nav-list-item-link">Regions</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/asia/myanmar" class="card-article__topic-tag-link">
            Myanmar
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/myanmar-history-coup-military-rule-ethnic-conflict-rohingya " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Myanmar’s Troubled History</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2021/02/myanmarbgr.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Introduction

Throughout its decades of independence, Myanmar has struggled with military rule, civil war, poor governance, and widespread poverty. A military coup in February 2021 dashed hopes for…</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by Lindsay Maizland</span>
                    
            
                          <span class="card-article__date"> January 31, 2022</span>
            
                                                                                                                        </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/americas" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Americas</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/asia" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Asia</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/europe-and-eurasia" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Europe &amp; Eurasia</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/global-commons" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Global Commons</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/middle-east-and-north-africa" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Middle East &amp; North Africa</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/oceania" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Oceania</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/sub-saharan-africa" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Sub-Saharan Africa</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/explainers" class="main-header__nav-list-item-link">Explainers</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/health" class="card-article__topic-tag-link">
            Health
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/article/how-new-tobacco-control-laws-could-help-close-racial-gap-us-cancer " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">How Tobacco Laws Could Help Close the Racial Gap on Cancer</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2023/01/GettyImages-1409152899_Resized_0.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">During the 2020 presidential campaign, Joe Biden promised that his administration would make a “historic effort” to reduce long-running racial inequities in health. Tobacco use—the leading cause of p…</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Interactive</span>
                  
                      <span class="card-article__authors">
              by Olivia  Angelino, <a href="/expert/thomas-j-bollyky" class="card-article__authors-link">Thomas J. Bollyky</a>, Elle Ruggiero and Isabella Turilli</span>
                    
            
                          <span class="card-article__date"> February 1, 2023</span>
            
                                                                                                                                <a href="/programs/global-health-program" class="card-article__series">
                    Global Health Program
                </a>
                    </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/backgrounders" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Backgrounders</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/inbriefs" class="main-header__secondary-nav-list-item-link macro-utils__link-to">In Briefs</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/podcasts" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Podcasts</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/videos" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Videos</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/timelines" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Timelines</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/special-projects" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Special Projects</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/infoguides" class="main-header__secondary-nav-list-item-link macro-utils__link-to">InfoGuides</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/think-tank" class="main-header__nav-list-item-link">Research &amp; Analysis</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article event card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/programs/middle-east-program" class="card-article__topic-tag-link">
            Middle East Program
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/event/virtual-media-briefing-drone-strike-us-base-jordan " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Virtual Media Briefing: the Drone Strike on a U.S. Base in Jordan</p>
                                                <div class="card-article__image">

                                                                                              <span class="card-article__icon">      <svg viewBox="0 0 15 15" class="icon icon-play" xmlns="http://www.w3.org/2000/svg">
    <title>Play</title>
    <path d="M0 15V0l15 7.5z" class="icon-fill" fill="none"/>
</svg>
  </span>
                                                      
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_xl/public/image/2024/02/RTSUKESU%20copy.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Following the drone strike on a U.S. base in Jordan, panelists discuss the possibility of a U.S. military response as well as the implications of conflict spreading in the region. 

BRANNEN: Thanks…</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Virtual Event</span>
                  
                      <span class="card-article__authors">
              with <a href="https://www.cfr.org/expert/stephen-biddle" class="card-article__authors-link">Stephen Biddle</a>, <a href="https://www.cfr.org/expert/steven-cook" class="card-article__authors-link">Steven A. Cook</a> and <a href="https://www.cfr.org/expert/ray-takeyh" class="card-article__authors-link">Ray Takeyh</a></span>
                    
            
                          <span class="card-article__date"> February 1, 2024</span>
            
                                                                                                                                <a href="/conference-call-series/media-briefings" class="card-article__series">
                    Media Briefings
                </a>
                    </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/experts" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Experts</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/programs" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Centers &amp; Programs</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/publications" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Books &amp; Reports</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/blog" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Blogs</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/independent-task-force-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Independent Task Force Program</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/fellowships" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Fellowships</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/outreach" class="main-header__nav-list-item-link">Communities</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article event card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/americas/united-states" class="card-article__topic-tag-link">
            United States
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/event/academic-webinar-geopolitics-oil " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Academic Webinar: The Geopolitics of Oil</p>
                                                <div class="card-article__image">

                                                                                              <span class="card-article__icon">      <svg viewBox="0 0 15 15" class="icon icon-play" xmlns="http://www.w3.org/2000/svg">
    <title>Play</title>
    <path d="M0 15V0l15 7.5z" class="icon-fill" fill="none"/>
</svg>
  </span>
                                                      
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_xl/public/image/2023/04/cms%20Saudi%20Arabia%20oil%20refinery%20by%20Ahmed%20Jadallah%20Reuters.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                        <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Webinar</span>
                  
                      <span class="card-article__authors">
              with Carolyn Kissane</span>
                    
            
                          <span class="card-article__date"> April 12, 2023</span>
            
                                                                                                                                <a href="/webinar-series/academic-and-higher-education-webinars" class="card-article__series">
                    Academic and Higher Education Webinars
                </a>
                    </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/membership" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Members</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/media" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Media</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/congressional-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Congress</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/academic/cfr-academic" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Academics</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/state-and-local" class="main-header__secondary-nav-list-item-link macro-utils__link-to">State &amp; Local Officials</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/outreach/religion-and-foreign-policy-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Religion Leaders</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/localjournalists" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Local Journalists</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                                  <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown">
              <a href="/event" class="main-header__nav-list-item-link">Events</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu">
                  <div class="main-header__nav-dropdown-menu-container">
                                          <div class="main-header__nav-dropdown-menu-featured">
                        <div class="main-header__featured">
                          <div class="main-header__featured-title">Featured</div>
                          <div class="main-header__featured-content">
                            

  



<section class="card-article event card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/asia/china" class="card-article__topic-tag-link">
            China
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/event/future-china-and-china-us-relations-conversation-liu-jianchao " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">The Future of China and China-U.S. Relations: A Conversation With Liu Jianchao</p>
                                                <div class="card-article__image">

                                                                                              <span class="card-article__icon">      <svg viewBox="0 0 15 15" class="icon icon-play" xmlns="http://www.w3.org/2000/svg">
    <title>Play</title>
    <path d="M0 15V0l15 7.5z" class="icon-fill" fill="none"/>
</svg>
  </span>
                                                      
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_xl/public/image/2024/01/RTRDRQ9-YT.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="2">Forty-five years after the United States and China formalized relations, Minister Liu Jianchao discusses the two countries’ current relationship and the implications of the recent meeting between their respective leaders, Joe Biden and Xi Jinping, for&nbsp;global stability and cooperation.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Virtual Event</span>
                  
                      <span class="card-article__authors">
              with Liu Jianchao</span>
                    
            
                          <span class="card-article__date"> January 9, 2024</span>
            
                                                                                                                        </p>
            </div>
</section>

                          </div>
                        </div>
                      </div>
                                        <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                              <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/event-series" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Lectureship Series</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/conference-call-series" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Webinars &amp; Conference Calls</a>

                            </li>
                                                                                                        <li class="main-header__secondary-nav-list-item">
                                  
                                                
  
  
  <a href="/meeting-types/symposia" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Symposia</a>

                            </li>
                                                                                                                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
                                <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown main-header__nav-list-item--initiatives">
              <a href="#" class="main-header__nav-list-item-link">Related Sites</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu main-header__nav-dropdown-menu--without-featured">
                  <div class="main-header__nav-dropdown-menu-container">
                    <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                  <li class="main-header__secondary-nav-list-item">
                            <a href="https://www.cfr.org/councilofcouncils" target="_blank" class="main-header__secondary-nav-list-item-link">
                              <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-coc-icon.png" loading="lazy" alt="Council of Councils" class="lazyload main-header__secondary-nav-list-item-icon" />
                              Council of Councils
                            </a>
                          </li>
                                                  <li class="main-header__secondary-nav-list-item">
                            <a href="https://www.thinkglobalhealth.org" target="_blank" class="main-header__secondary-nav-list-item-link">
                              <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-tgh-icon.png" loading="lazy" alt="Think Global Health" class="lazyload main-header__secondary-nav-list-item-icon" />
                              Think Global Health
                            </a>
                          </li>
                                                  <li class="main-header__secondary-nav-list-item">
                            <a href="https://cfrorg.store" target="_blank" class="main-header__secondary-nav-list-item-link">
                              <img data-src="/themes/custom/cfr_theme/src/assets/images/cfr-store.png" loading="lazy" alt="Online Store" class="lazyload main-header__secondary-nav-list-item-icon" />
                              Online Store
                            </a>
                          </li>
                                              </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
                                <li class="main-header__nav-list-item main-header__nav-list-item--with-dropdown main-header__nav-list-item--more">
              <a href="#" class="main-header__nav-list-item-link">More</a>
              <div class="main-header__nav-dropdown">
                <button class="main-header__nav-dropdown-toggle"></button>
                <div class="main-header__nav-dropdown-menu main-header__nav-dropdown-menu--without-featured">
                  <div class="main-header__nav-dropdown-menu-container">
                    <div class="main-header__nav-dropdown-menu-list">
                      <ul class="main-header__secondary-nav-list">
                                                                          <li class="main-header__secondary-nav-list-item">
                            <a href="/think-tank" class="main-header__secondary-nav-list-item-link">
                              Research &amp; Analysis
                            </a>
                            <div class="main-header__nav-dropdown">
                              <button class="main-header__nav-dropdown-toggle"></button>
                              <div class="main-header__nav-dropdown-menu">
                                <div class="main-header__nav-dropdown-menu-container">
                                  <div class="main-header__nav-dropdown-menu-list">
                                    <ul class="main-header__secondary-nav-list">
                                                                                                                        <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/experts" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Experts</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/programs" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Centers &amp; Programs</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/publications" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Books &amp; Reports</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/blog" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Blogs</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/independent-task-force-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Independent Task Force Program</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/fellowships" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Fellowships</a>

                                          </li>
                                                                                                                                                                                                </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                                                  <li class="main-header__secondary-nav-list-item">
                            <a href="/outreach" class="main-header__secondary-nav-list-item-link">
                              Communities
                            </a>
                            <div class="main-header__nav-dropdown">
                              <button class="main-header__nav-dropdown-toggle"></button>
                              <div class="main-header__nav-dropdown-menu">
                                <div class="main-header__nav-dropdown-menu-container">
                                  <div class="main-header__nav-dropdown-menu-list">
                                    <ul class="main-header__secondary-nav-list">
                                                                                                                        <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/membership" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Members</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/media" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Media</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/congressional-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Congress</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/academic/cfr-academic" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Academics</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/state-and-local" class="main-header__secondary-nav-list-item-link macro-utils__link-to">State &amp; Local Officials</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/outreach/religion-and-foreign-policy-program" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Religion Leaders</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/localjournalists" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Local Journalists</a>

                                          </li>
                                                                                                                                                                                                </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                                                  <li class="main-header__secondary-nav-list-item">
                            <a href="/event" class="main-header__secondary-nav-list-item-link">
                              Events
                            </a>
                            <div class="main-header__nav-dropdown">
                              <button class="main-header__nav-dropdown-toggle"></button>
                              <div class="main-header__nav-dropdown-menu">
                                <div class="main-header__nav-dropdown-menu-container">
                                  <div class="main-header__nav-dropdown-menu-list">
                                    <ul class="main-header__secondary-nav-list">
                                                                                                                        <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/event-series" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Lectureship Series</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/conference-call-series" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Webinars &amp; Conference Calls</a>

                                          </li>
                                                                                                                                                                <li class="main-header__secondary-nav-list-item">
                                                
                                                
  
  
  <a href="/meeting-types/symposia" class="main-header__secondary-nav-list-item-link macro-utils__link-to">Symposia</a>

                                          </li>
                                                                                                                                                                                                </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                                              </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
                  </ul>
                  <div class="main-header__nav-corporate">
            <ul class="main-header__nav-corporate-list">
                              <li class="main-header__nav-corporate-list-item">
                  <a href="https://link.cfr.org/join/66n/signup&amp;hash=2d4c5929e9e04cc42f5cd375fb8dcfb1" target="_blank" class="main-header__nav-corporate-link main-header__nav-corporate-link-- js-sailthru-newsletter">
                    Newsletters
                  </a>
                </li>
                              <li class="main-header__nav-corporate-list-item">
                  <a href="https://education.cfr.org/" target="_blank" class="main-header__nav-corporate-link">
                    CFR Education
                  </a>
                </li>
                              <li class="main-header__nav-corporate-list-item">
                  <a href="https://foreignaffairs.com" target="_blank" class="main-header__nav-corporate-link main-header__nav-corporate-link--fa">
                    Foreign Affairs
                  </a>
                </li>
                                          <li class="main-header__controls-list-item main-header__controls-list-item--user">
                <a href="/member/login" class="main-header__controls-link">
                        <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" class="main-header__controls-icon-user icon-user-circle-outlined" fill="none">
  <path class="icon-stroke" stroke="none" stroke-width="1.85" d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"/>
  <path class="icon-stroke" stroke="none" stroke-width="1.85" d="M11 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5.468 19.153v-1.6A2.553 2.553 0 018.021 15h5.958a2.553 2.553 0 012.553 2.553v1.702"/>
</svg>
  
                </a>
              </li>
                <li class="main-header__nav-corporate-list-item main-header__nav-corporate-list-item--essay-member">
                  <a href="/member/login" class="main-header__nav-corporate-link">
                    Member Login
                  </a>
                </li>
                        
            </ul>
          </div>
              </div>
    </div>
  </div>
</header>

  </div>
<div id="block-newsalert">
  
    
      


  </div>

  </div>

  </header>

  <main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div id="block-cfr-theme-messages">
  
    
      
  </div>
                                                



<header class="header-expert header-expert--new  ">
  <div class="header-expert__content-wrapper">
        <div class="new-header__inner">
          <div class="new-header-info">
              <h2 class="new-header-expert__name">
            <div>Thomas Graham</div>
      </h2>
              <p class="new-header-expert__dek">
                Distinguished Fellow
              </p>
          </div>
                                          
                
                                        
  
  <div class="button-container buttons-container--without-breakpoints button-container--color-transparent button-container--size-regular button-container--type-single ">
        <a href="#my-work" class="button-container__btn" >Browse My Work</a>

      </div>

                
           
        </div>
    
     <div class="new-header__bottom">
              <img src="//cdn.cfr.org/sites/default/files/styles/card_expert_thumbnail_xxl/public/profile-photos/Screenshot%202024-02-05%20at%201.01.31%20PM.png" class="new-header__profile-img" alt="Profile picture" />
      
                 <div role="region" aria-label="Featured Content" class="expert-featured expert-featured--color-type-plum">
              
                                <div class="expert-featured__card active" aria-hidden="false">
                      <div class="expert-featured__info">
                          <div class="expert-featured__description">
                              <p class="expert-featured__programs"><a href="/programs/europe-program" class="expert-featured__program-type" aria-label="Europe Program">Europe Program</a> and <a href="/programs/us-foreign-policy-program" class="expert-featured__program-type" aria-label="U.S. Foreign Policy Program">U.S. Foreign Policy Program</a></p>
                              <h3 class="expert-featured__program-title"><a href="/book/getting-russia-right" aria-label="Getting Russia Right ">Getting Russia Right </a></h3>
                              <span class="expert-featured__program-date">October 3, 2023</span>
                          </div>
                      </div>
                      <a href="/book/getting-russia-right" class="expert-featured__img-wrapper" aria-label="Getting Russia Right ">
                        <img class="expert-featured__img" src="//cdn.cfr.org/sites/default/files/styles/featured_content_image/public/book_cover_image/9781509556892.jpg.webp" alt="Getting Russia Right " />
                      </a>
                                        </div>
                        </div>
              </div>

  </div>
</header>

<ul class="expert-bio-tabs">
  <li class="expert-bio-tabs__tab expert-bio-tabs__tab--about active"><button>About</button></li>
  <li class="expert-bio-tabs__tab expert-bio-tabs__tab--contact"><button>Contact</button></li>
      <li class="expert-bio-tabs__tab expert-bio-tabs__tab--areas"><button>Focus Areas</button></li>
  </ul>

<article role="article" about="/expert/thomas-graham" class="main-wrapper expert-page-article">
                      
    



  <aside class="contact-sidebar-expert contact-sidebar-expert--expanded expert-tab-content">
                <div class="contact-sidebar-expert__main-wrapper">
      <div>
                  
        
  
            
                         
      
                      <section class="contact-sidebar-expert__contact contact-sidebar-expert__section">
          <h3 class="contact-sidebar-expert__contact-title contact-sidebar-expert__section-title">
            Email
          </h3>
                  <div class="contact-sidebar-expert__contact-email contact-sidebar-expert__contact-field">
                        <div class="contact-sidebar-expert__contact-email-entries">
              <a href="/cdn-cgi/l/email-protection#9beffce9faf3faf6dbf8fde9b5f4e9fc" class="contact-sidebar-expert__contact-entry"><span class="__cf_email__" data-cfemail="ef9b889d8e878e82af8c899dc1809d88">[email&#160;protected]</span></a>
            </div>
          </div>
                  </section>
                      
  
              
                        <section class="contact-sidebar-expert__location contact-sidebar-expert__section">
        <h3 class="contact-sidebar-expert__location-title contact-sidebar-expert__section-title">Location</h3>
        <div class="contact-sidebar-expert__location-address">
                    <div class="contact-sidebar-expert__location-entry">
            New York, NY
          </div>
        </div>
      </section>
      
  

              
        <div class="contact-sidebar-expert__collapsable">
                        
            <section class="contact-sidebar-expert__media-bio contact-sidebar-expert__section">
      <h3 class="contact-sidebar-expert__media-bio-title contact-sidebar-expert__section-title">Media Bio</h3>
      <p class="contact-sidebar-expert__media-bio-text">
        For media inquiries, please contact <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bbd8d4d6d6ced5d2d8dacfd2d4d5c8fbd8ddc995d4c9dc">[email&#160;protected]</a>.
      </p>
    </section>
  
  
                        
                  <section class="contact-sidebar-expert__associates contact-sidebar-expert__section">
                  <h3 class="contact-sidebar-expert__associates-title contact-sidebar-expert__section-title">Research Associate</h3>
                          <div class="contact-sidebar-expert__associate">
            <a class="contact-sidebar-expert__associate-link" href="/staff/anya-konstantinovsky">Anya Konstantinovsky</a>
          </div>
            </section>
      
  
                  </div>
            </div>

      <div>
          
                            
  
  
      </div>
        </aside>








<div class="expert-bio">
      <aside class="expert-bio__areas expert-tab-content">
              <div class="expert-bio__areas__section">
          <h6>Expertise</h6>   
          <ul>
                          <li><a href="/europe-and-eurasia/russia">Russia</a></li>
                          <li><a href="/europe-and-eurasia">Europe and Eurasia</a></li>
                          <li><a href="/us-foreign-policy">U.S. Foreign Policy</a></li>
                          <li><a href="/europe-and-eurasia/ukraine">Ukraine</a></li>
                      </ul>
        </div>
            <div>
                  <div class="expert-bio__areas__section">
            <h6>Programs</h6>   
            <ul>
                              <li><a href="/programs/europe-program">Europe Program</a></li>
                              <li><a href="/programs/us-foreign-policy-program">U.S. Foreign Policy Program</a></li>
                          </ul>
          </div>
                
                  <div class="expert-bio__areas__section">
            <h6>Current Projects</h6> 
            <ul>
                              <li><a href="/project/getting-us-russia-policy-right">Getting U.S.-Russia Policy Right</a></li>
                          </ul>
          </div>
              </div>
    </aside>
  
  <div class="expert-bio__content-wrapper expert-tab-content active">
    <div class="expert-bio__main expert-bio__main--collapsed">
      <h2 class="expert-bio__main-title">Expert Bio</h2>
      <div class="expert-bio__main-body">
        
            <div class="body-content"><p>Thomas E. Graham is a distinguished fellow at the Council on Foreign Relations. He is a cofounder of Yale University’s Russian, East European, and Eurasian studies program and sits on its faculty steering committee. He is also a research fellow at Yale’s MacMillan Center. He has been a lecturer in global affairs and political science since 2011, teaching courses on U.S.-Russian relations and Russian foreign policy, as well as cybersecurity and counterterrorism. Graham was special assistant to the president and senior director for Russia on the National Security Council staff from 2004 to 2007, during which he managed a White House-Kremlin strategic dialogue. He was director for Russian affairs on the staff from 2002 to 2004.</p>

<p>Graham served as an advisor to Kissinger Associates from 2008 to 2021. He was a Foreign Service officer for fourteen years.  His assignments included two tours of duty at the U.S. Embassy in Moscow in the late Soviet period and in the middle of the 1990s, during which he served as head of the political internal unit and acting political counselor. Between tours in Moscow, he worked on Russian and Soviet affairs on the policy planning staff at the U.S. Department of State and as a policy assistant in the office of the undersecretary of defense for policy.</p>

<p>Graham serves on the advisory board of Russia Matters, a project of the Harvard Kennedy School’s Belfer Center for Science and International Affairs with the goal of enhancing the understanding of Russia among policymakers and the interested public. He also serves on the editorial board of the <em>U.S.-Canada Journal</em> of the Russian Academy of Sciences’ USA-Canada Institute.</p>

<p>Graham holds a BA in Russian studies from Yale University and an MA in history and a PhD in political science from Harvard University.</p>
</div>
      
      </div>
              <div class="button-container button-container--with-breakpoints button-container--color-transparent button-container--size-regular button-container--type-single btn-viewfull-toggle">
          <button class="button-container__btn" href="#">
            <span class="expert-bio__main-btn-expand-txt">Show Full Bio</span>
            <span class="expert-bio__main-btn-collapse-txt">Show Less</span>
          </button>
        </div>
          </div>

          


<div class="supplemental-content supplemental-content--expert-bio__affiliations">
  <div class="supplemental-content__hitarea">
    <h3 class="supplemental-content__title">
      <span class="supplemental-content_title-text">affiliations</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none" class="icon icon-up-arrow-expert">
<path d="M1 12L11 2L21 12" stroke="#F25D27" stroke-width="2"/>
</svg>  
          </h3>
  </div>
  <div class="supplemental-content__container supplemental-content__body-content">
          <ul><li>Harvard University, Kennedy School of Government, Belfer Center, Russia Matters, advisory board, member</li>
	<li>Supporters of Civil Society in Russia, advisory board, member</li>
	<li>TEGraham Consultants, LLC</li>
	<li>U.S.-Canada Institute, USA-Canada: Economics, Politics, Culture Journal, editorial board, member</li>
	<li>Wilson Center, Kennan Institute, Kennan council, member</li>
	<li>Yale University, Russia, East European, and Eurasian Studies program, steering committee, member</li>
	<li>Yale University, MacMillan Center, research fellow</li>
</ul>
      </div>
</div>
    
          


<div class="supplemental-content supplemental-content--expert-bio__media_bio">
  <div class="supplemental-content__hitarea">
    <h3 class="supplemental-content__title">
      <span class="supplemental-content_title-text">Media Inquiries</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none" class="icon icon-up-arrow-expert">
<path d="M1 12L11 2L21 12" stroke="#F25D27" stroke-width="2"/>
</svg>  
          </h3>
  </div>
  <div class="supplemental-content__container supplemental-content__body-content">
          <html>For media inquiries, please contact <a href="/cdn-cgi/l/email-protection#81e2eeececf4efe8e2e0f5e8eeeff2c1e2e7f3afeef3e6"><span class="__cf_email__" data-cfemail="44272b2929312a2d2725302d2b2a37042722366a2b3623">[email&#160;protected]</span></a>.<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></html>
      </div>
</div>
    
  </div>
</div>


          
    
          <div id="my-work">
        
<div class="accordion-filters__main-wrapper">
  <div class="experts-page-filter-content-header">
    <div class="clear-filters-button">Clear All</div>
  </div>
  <div class="accordion-filters">
                              <div class="views-element-container"><div class="js-view-dom-id-76aeaeae4c304e72fe35ac608d5e70965dcf4b2e36d62bb5cc290442479806ad">
  
  
  

  
  <form class="views-exposed-form" data-drupal-selector="views-exposed-form-expert-content-block-expert-content" action="/expert/thomas-graham#filter-tabs" method="get" id="views-exposed-form-expert-content-block-expert-content" accept-charset="UTF-8">
  <fieldset data-drupal-selector="edit-regions" id="edit-regions--7--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
      <legend>
    <span class="fieldset-legend">Regions</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-regions--7" class="form-checkboxes"><div class="js-form-item form-item js-form-type-checkbox form-item-regions-114 js-form-item-regions-114">
        <input data-drupal-selector="edit-regions-114" type="checkbox" id="edit-regions-114--2" name="regions[114]" value="114" class="form-checkbox" />

        <label for="edit-regions-114--2" class="option">Americas</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-regions-115 js-form-item-regions-115">
        <input data-drupal-selector="edit-regions-115" type="checkbox" id="edit-regions-115--2" name="regions[115]" value="115" class="form-checkbox" />

        <label for="edit-regions-115--2" class="option">Asia</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-regions-116 js-form-item-regions-116">
        <input data-drupal-selector="edit-regions-116" type="checkbox" id="edit-regions-116--2" name="regions[116]" value="116" class="form-checkbox" />

        <label for="edit-regions-116--2" class="option">Europe and Eurasia</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-regions-118 js-form-item-regions-118">
        <input data-drupal-selector="edit-regions-118" type="checkbox" id="edit-regions-118--2" name="regions[118]" value="118" class="form-checkbox" />

        <label for="edit-regions-118--2" class="option">Middle East and North Africa</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-regions-119 js-form-item-regions-119">
        <input data-drupal-selector="edit-regions-119" type="checkbox" id="edit-regions-119--2" name="regions[119]" value="119" class="form-checkbox" />

        <label for="edit-regions-119--2" class="option">Oceania</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-regions-121 js-form-item-regions-121">
        <input data-drupal-selector="edit-regions-121" type="checkbox" id="edit-regions-121--2" name="regions[121]" value="121" class="form-checkbox" />

        <label for="edit-regions-121--2" class="option">Sub-Saharan Africa</label>
      </div>
</div>

          </div>
</fieldset>
<fieldset data-drupal-selector="edit-topics" id="edit-topics--7--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
      <legend>
    <span class="fieldset-legend">Topics</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-topics--7" class="form-checkboxes"><div class="js-form-item form-item js-form-type-checkbox form-item-topics-338 js-form-item-topics-338">
        <input data-drupal-selector="edit-topics-338" type="checkbox" id="edit-topics-338--2" name="topics[338]" value="338" class="form-checkbox" />

        <label for="edit-topics-338--2" class="option">Defense and Security</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-339 js-form-item-topics-339">
        <input data-drupal-selector="edit-topics-339" type="checkbox" id="edit-topics-339--2" name="topics[339]" value="339" class="form-checkbox" />

        <label for="edit-topics-339--2" class="option">Diplomacy and International Institutions</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-340 js-form-item-topics-340">
        <input data-drupal-selector="edit-topics-340" type="checkbox" id="edit-topics-340--2" name="topics[340]" value="340" class="form-checkbox" />

        <label for="edit-topics-340--2" class="option">Economics</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-341 js-form-item-topics-341">
        <input data-drupal-selector="edit-topics-341" type="checkbox" id="edit-topics-341--2" name="topics[341]" value="341" class="form-checkbox" />

        <label for="edit-topics-341--2" class="option">Energy and Environment</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-342 js-form-item-topics-342">
        <input data-drupal-selector="edit-topics-342" type="checkbox" id="edit-topics-342--2" name="topics[342]" value="342" class="form-checkbox" />

        <label for="edit-topics-342--2" class="option">Health</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-343 js-form-item-topics-343">
        <input data-drupal-selector="edit-topics-343" type="checkbox" id="edit-topics-343--2" name="topics[343]" value="343" class="form-checkbox" />

        <label for="edit-topics-343--2" class="option">Human Rights</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-344 js-form-item-topics-344">
        <input data-drupal-selector="edit-topics-344" type="checkbox" id="edit-topics-344--2" name="topics[344]" value="344" class="form-checkbox" />

        <label for="edit-topics-344--2" class="option">Politics and Government</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-topics-345 js-form-item-topics-345">
        <input data-drupal-selector="edit-topics-345" type="checkbox" id="edit-topics-345--2" name="topics[345]" value="345" class="form-checkbox" />

        <label for="edit-topics-345--2" class="option">Social Issues</label>
      </div>
</div>

          </div>
</fieldset>
<fieldset class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper" data-drupal-selector="edit-type" id="edit-type--2">
      <legend>
    <span class="fieldset-legend">Type</span>
  </legend>
  <div class="fieldset-wrapper">
                <div class="js-form-item form-item js-form-type-checkbox form-item-blog js-form-item-blog">
        <input data-drupal-selector="edit-blog" type="checkbox" id="edit-blog--2" name="blog" value="1" class="form-checkbox" />

        <label for="edit-blog--2" class="option">Blog</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-event js-form-item-event">
        <input data-drupal-selector="edit-event" type="checkbox" id="edit-event--2" name="event" value="1" class="form-checkbox" />

        <label for="edit-event--2" class="option">Events</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-news js-form-item-news">
        <input data-drupal-selector="edit-news" type="checkbox" id="edit-news--2" name="news" value="1" class="form-checkbox" />

        <label for="edit-news--2" class="option">News</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-podcast js-form-item-podcast">
        <input data-drupal-selector="edit-podcast" type="checkbox" id="edit-podcast--2" name="podcast" value="1" class="form-checkbox" />

        <label for="edit-podcast--2" class="option">Podcasts</label>
      </div>
<div class="js-form-item form-item js-form-type-checkbox form-item-publication js-form-item-publication">
        <input data-drupal-selector="edit-publication" type="checkbox" id="edit-publication--2" name="publication" value="1" class="form-checkbox" />

        <label for="edit-publication--2" class="option">Publications</label>
      </div>

          </div>
</fieldset>
<input data-drupal-selector="edit-tab" type="hidden" name="tab" value="expert-content" />
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions--7"><input data-drupal-selector="edit-submit-expert-content-7" type="submit" id="edit-submit-expert-content--7" value="Apply Filters" class="button js-form-submit form-submit" />
</div>


</form>

  

  <div data-drupal-views-infinite-scroll-content-wrapper class="views-infinite-scroll-content-wrapper clearfix"><div class="landing-cards-grid landing-cards-grid--4-columns">
  
  <ul class="landing-cards-grid__list-container">

          <li class="landing-cards-grid__list-item">

  



<section class="card-article event card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/asia/china" class="card-article__topic-tag-link">
            China
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/event/academic-webinar-china-russia-relations " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Academic Webinar: China-Russia Relations</p>
                                                <div class="card-article__image">

                                                                                              <span class="card-article__icon">      <svg viewBox="0 0 15 15" class="icon icon-play" xmlns="http://www.w3.org/2000/svg">
    <title>Play</title>
    <path d="M0 15V0l15 7.5z" class="icon-fill" fill="none"/>
</svg>
  </span>
                                                      
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_xl/public/image/2024/02/cms%20Sputnik%20Photo%20AgencyReuters.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Thomas Graham, distinguished fellow at CFR, and Zongyuan Zoe Liu, Maurice R. Greenberg fellow for China studies at CFR, lead the conversation on China-Russia relations.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Virtual Event</span>
                  
                      <span class="card-article__authors">
              with <a href="https://www.cfr.org/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a> and <a href="https://www.cfr.org/expert/zongyuan-zoe-liu" class="card-article__authors-link">Zongyuan Zoe Liu</a></span>
                    
            
                          <span class="card-article__date"> January 31, 2024</span>
            
                                                                                                                                <a href="/webinar-series/academic-and-higher-education-webinars" class="card-article__series">
                    Academic and Higher Education Webinars
                </a>
                    </p>
            </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">




<section class="card-article article card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/politics-and-government/democracy" class="card-article__topic-tag-link">
            Democracy
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/article/political-hurdles-ukraines-way-eu-membership " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Political Hurdles on Ukraine’s Way to EU Membership</p>
                                              </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">After the 2013–14 Revolution of Dignity, which overthrew a deeply corrupt, Russian-backed regime, Ukraine declared its ambition to integrate into the Euro-Atlantic community of free-market democracie…</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Article</span>
                  
                      <span class="card-article__authors">
              by <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a></span>
                    
            
                          <span class="card-article__date"> January 17, 2024</span>
            
                                                                                                                                <a href="/programs/diamonstein-spielvogel-project-future-democracy" class="card-article__series">
                    Diamonstein-Spielvogel Project on the Future of Democracy
                </a>
                    </p>
            </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">




<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/teaching-notes/getting-russia-right " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Getting Russia Right</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2024/01/CFR%20Teaching%20Notes%20Page%20Image_Graham.png.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4"><em>Getting Russia Right</em> offers a practitioner’s account of why the great post-Cold War hopes for an enduring U.S.-Russian strategic partnership grounded in free markets and democratic values gave way to a bitter adversarial relationship that puts the United States and Russia on opposing sides of the critical issues in global affairs today.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Teaching Notes</span>
                  
                      <span class="card-article__authors">
              by <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a></span>
                    
            
                          <span class="card-article__date"> January 17, 2024</span>
            
                                                                                                                                <a href="/programs/europe-program" class="card-article__series">
                    Europe Program
                </a>
                    </p>
            </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://www.russiamatters.org/analysis/putin-winning-not-everything-russias-presidential-election"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              For Putin, Winning is Not Everything in Russia’s Presidential Election
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via Russia Matters</span>
                        
            
                          <span class="card-article__date"> December 20, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">




<section class="card-article article card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/politics-and-government/democracy" class="card-article__topic-tag-link">
            Democracy
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/article/what-democratic-russia-would-mean-united-states " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">What a Democratic Russia Would Mean for the United States </p>
                                              </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">When the Soviet Union collapsed more than thirty years ago, American leaders hoped that Russia would embark on a transition to free-market democracy. Shared democratic values, the thinking went, woul…</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Article</span>
                  
                      <span class="card-article__authors">
              by <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a></span>
                    
            
                          <span class="card-article__date"> December 19, 2023</span>
            
                                                                                                                                <a href="/programs/diamonstein-spielvogel-project-future-democracy" class="card-article__series">
                    Diamonstein-Spielvogel Project on the Future of Democracy
                </a>
                    </p>
            </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://themessenger.com/opinion/gaza-crisis-israel-hamas-russia-ukraine-kremlin-moscow"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              The Gaza Crisis Bears Risks for Moscow
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via The Messenger</span>
                        
            
                          <span class="card-article__date"> November 9, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://plus.econvue.com/p/getting-russia-right-thomas-graham?r=co&amp;utm_campaign=post&amp;utm_medium=web#details"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              Getting Russia Right: Thomas Graham
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via The Hale Report Podcast</span>
                        
            
                          <span class="card-article__date"> October 30, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://www.economist.com/by-invitation/2023/10/26/thomas-graham-on-how-to-rectify-mistakes-the-west-made-in-dealing-with-russia"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              Thomas Graham on how to rectify mistakes the West made in dealing with Russia
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via The Economist</span>
                        
            
                          <span class="card-article__date"> October 26, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">

  



<section class="card-article event card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/event/cfr-fellows-book-launch-series-getting-russia-right-thomas-graham " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">CFR Fellows' Book Launch Series: Getting Russia Right by Thomas Graham</p>
                                                <div class="card-article__image">

                                                                                              <span class="card-article__icon">      <svg viewBox="0 0 15 15" class="icon icon-play" xmlns="http://www.w3.org/2000/svg">
    <title>Play</title>
    <path d="M0 15V0l15 7.5z" class="icon-fill" fill="none"/>
</svg>
  </span>
                                                      
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_xl/public/image/2023/10/russia%20right.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">As U.S.-Russian relations scrape the depths of Cold War antagonism, the promise of partnership that beguiled American administrations during the first post-Soviet decades increasingly appears to have been false from the start. <em>Getting Russia Right</em> identifies the blind spots that prevented Washington from seeing Russia as it really is and crafting a policy to advance American interests without provoking an aggressive Russian response.

In <em>Getting Russia Right</em>, Thomas Graham deftly traces the evolution of opposing ideas of national purpose that created an inherent tension in relations. Distilling the Putin factor to reveal the contours of the Russia challenge facing the United States whenever he departs the scene, Graham lays out a compelling way to deal with it so that the United States can continue to advance its interests in a rapidly changing world.


The CFR Fellows’ Book Launch series highlights new books by CFR fellows.&nbsp;
&nbsp;
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Virtual Event</span>
                  
                      <span class="card-article__authors">
              with <a href="https://www.cfr.org/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a></span>
                    
            
                          <span class="card-article__date"> October 18, 2023</span>
            
                                                                                                                                <a href="/event-series/cfr-fellows-book-launch" class="card-article__series">
                    CFR Fellows&#039; Book Launch
                </a>
                    </p>
            </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://www.politico.com/news/magazine/2023/10/15/thomas-graham-russia-ukraine-00121247"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              Russia Will Survive a Defeat in Ukraine. It’s Time to Prepare for What Comes Next.
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via Politico</span>
                        
            
                          <span class="card-article__date"> October 15, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">  



<section class="card-article card-article--offsite card-article--with-no-image">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                          <a href="https://foreignaffairs.com/asia/what-russia-really-wants"  target="_blank" rel="noopener"  class="card-article__link">
        
          <div class="card-article__info">
            <p class="card-article__title clamp-js" data-clamp-lines="4">
              What Russia Really Wants
                              <span class="card-article__link-out">      <svg viewBox="0 0 18 18" class="icon icon-link-out" xmlns="http://www.w3.org/2000/svg">
    <title>Link</title>
    <path d="M9.872 1.381H1.381v15.238h15.238v-8.19m-6.095-.953l6.095-6.095m-3.809 0h3.809v3.81" class="icon-stroke" fill="none"/>
</svg>
  </span>
                          </p>
                                    </div>
          </a>
      </div>

            
      <p class="card-article__metadata">
        
                                                              <span class="card-article__authors">
                 with
                                <a href="/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a>              </span>
                                      <span class="card-article__source"> via Foreign Affairs</span>
                        
            
                          <span class="card-article__date"> October 9, 2023</span>
            
                                                                                                                        </p>
    </div>
</section>
</li>
          <li class="landing-cards-grid__list-item">

  



<section class="card-article podcast_episode card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/russia" class="card-article__topic-tag-link">
            Russia
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/podcasts/getting-russia-right-thomas-graham " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Getting Russia Right, With Thomas Graham</p>
                                                <div class="card-article__image">

                                                                        <span class="card-article__icon">      <svg viewBox="0 0 15 25" class="icon icon-podcast" xmlns="http://www.w3.org/2000/svg">
    <title>Podcast</title>
    <path d="M8.005 20.469v3.489h3.283a.523.523 0 0 1 0 1.042H3.712a.523.523 0 0 1 0-1.042h3.282v-3.49C2.954 20.183 0 16.929 0 12.76c0-.78 1.06-.78 1.06 0 0 3.646 2.88 6.64 6.44 6.64 3.56 0 6.439-2.994 6.439-6.64a.533.533 0 0 1 1.061 0c0 4.167-2.954 7.422-6.995 7.709m4.292-15.495v7.76c0 2.76-2.12 4.975-4.798 4.975-2.676 0-4.797-2.24-4.797-4.975v-7.76C2.702 2.239 4.823 0 7.499 0c2.678 0 4.798 2.239 4.798 4.974m-1.01 7.76v-1.276H9.016c-.505 0-.505-.781 0-.781h2.273V9.375H9.015c-.505 0-.505-.781 0-.781h2.273V7.29H9.015c-.505 0-.505-.78 0-.78h2.273V4.974c0-2.136-1.718-3.88-3.789-3.88-2.07 0-3.787 1.744-3.787 3.88V6.51h2.273c.505 0 .505.78 0 .78H3.712v1.303h2.273c.505 0 .505.781 0 .781H3.712v1.302h2.273c.505 0 .505.781 0 .781H3.712v1.276c0 2.135 1.717 3.88 3.787 3.88 2.071 0 3.789-1.745 3.789-3.88" class="icon-fill" fill="none"/>
</svg>
  </span>
                                  
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2023/10/231003_TPI%20pic.JPG.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="2">Thomas Graham, a distinguished fellow at CFR, sits down with James M. Lindsay to discuss how U.S.-Russia relations have evolved since the Cold War.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Podcast</span>
                  
                      <span class="card-article__authors">
              with <a href="https://www.cfr.org/expert/james-m-lindsay" class="card-article__authors-link">James M. Lindsay</a> and <a href="https://www.cfr.org/expert/thomas-graham" class="card-article__authors-link">Thomas Graham</a></span>
                    
            
                          <span class="card-article__date"> October 3, 2023</span>
            
                                                                                                                                <a href="/podcasts/presidents-inbox" class="card-article__series">
                    The President’s Inbox
                </a>
                    </p>
            </div>
</section>
</li>
    
  </ul>

</div>
</div>

    
<ul class="js-pager__items pager" data-drupal-views-infinite-scroll-pager>
  <li class="pager__item">
    <a class="button" href="?blog=All&amp;event=All&amp;news=All&amp;podcast=All&amp;publication=All&amp;tab=expert-content&amp;page=1" title="Load more items" rel="next">Load More</a>
  </li>
</ul>


  
  

  
  
</div>
</div>

                        </div>
</div>
      </div>
    
</article><div id="block-globalexploremore">
  
    
      
<div class="explore-more-promotional main-wrapper ">
  <div class="explore-more-promotional__wrapper">
           


<div class="card-group card-group--related card-group--bg-color-default">
  <div class="card-group__background"></div>
  <div class="card-group__content-wrapper">
    <h3 class="card-group__title">
              Explore More on Russia
          </h3>

    <div class="card-group__container">
    
                            

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/nato-north-atlantic-treaty-organization" class="card-article__topic-tag-link">
            NATO (North Atlantic Treaty Organization)
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/what-nato " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">What Is NATO?</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2018/07/NewNato.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="2">The alliance is bolstering its military deterrent in Europe amid Russia’s invasion of Ukraine and is expanding to include Finland and Sweden.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/jonathan-masters" class="card-article__authors-link">Jonathan Masters</a></span>
                    
            
                          <span class="card-article__date"> January 25, 2024</span>
            
                                                                                                                        </p>
            </div>
</section>

                                

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/europe-and-eurasia/ukraine" class="card-article__topic-tag-link">
            Ukraine
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/ukraine-conflict-crossroads-europe-and-russia " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Ukraine: Conflict at the Crossroads of Europe and Russia</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2020/02/Ukraine.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Ukraine’s Westward drift since independence has been countered by the sometimes violent tug of Russia, felt most recently with Putin’s 2022 invasion.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/jonathan-masters" class="card-article__authors-link">Jonathan Masters</a></span>
                    
            
                          <span class="card-article__date"> February 14, 2023</span>
            
                                                                                                                        </p>
            </div>
</section>

                                

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/oil-and-petroleum-products" class="card-article__topic-tag-link">
            Oil and Petroleum Products
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/opec-changing-world " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">OPEC in a Changing World</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2019/01/Opec.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Western leaders have long criticized OPEC’s power to raise oil prices, and the bloc continues to influence the global market even as U.S. oil production has soared and alternative energies have come to the fore.

&nbsp;
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/anshu-siripurapu" class="card-article__authors-link">Anshu Siripurapu</a> and Andrew Chatzky</span>
                    
            
                          <span class="card-article__date"> March 9, 2022</span>
            
                                                                                                                        </p>
            </div>
</section>

                      </div>
      </div>
</div>
    
        
      </div>
</div>

  </div>
<div id="block-topstories">
  
    
      
<div class="explore-more-promotional main-wrapper ">
  <div class="explore-more-promotional__wrapper">
    
        
           


<div class="card-group card-group--promotional card-group--bg-color-default">
  <div class="card-group__background"></div>
  <div class="card-group__content-wrapper">
    <h3 class="card-group__title">
              <a href="/">
          Top Stories on CFR
        </a>
          </h3>

    <div class="card-group__container">
    
                            

    


<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/americas/united-states" class="card-article__topic-tag-link">
            United States
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/blog/transatlantic-divergence-economic-outlooks-implications-central-bank-policies " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Transatlantic Divergence of Economic Outlooks – Implications for Central Bank Policies</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2024/01/Jay%20powell%202.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Germans and Americans are pessimistic about their economies. While the European Central Bank and Federal Reserve remain committed to fighting inflation, the ECB faces a much tougher task.
</div>
                  <p class="card-article__metadata">
        
                  <a href="/blog" class="card-article__publication-type">Blog Post</a>
                  
                      <span class="card-article__authors">
              by <a href="/expert/roger-w-ferguson-jr" class="card-article__authors-link">Roger W. Ferguson Jr.</a> and Jonas O. Piduhn</span>
                    
            
                          <span class="card-article__date"> February 1, 2024</span>
            
                                                                                                                                <a href="/blog/renewing-america" class="card-article__series">
                    Renewing America
                </a>
                    </p>
            </div>
</section>

                                

    


<section class="card-article podcast_episode card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/americas/united-states" class="card-article__topic-tag-link">
            United States
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/podcasts/henry-wallace-and-origins-cold-war-benn-steil " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Henry Wallace and the Origins of the Cold War, With Benn Steil</p>
                                                <div class="card-article__image">

                                                                        <span class="card-article__icon">      <svg viewBox="0 0 15 25" class="icon icon-podcast" xmlns="http://www.w3.org/2000/svg">
    <title>Podcast</title>
    <path d="M8.005 20.469v3.489h3.283a.523.523 0 0 1 0 1.042H3.712a.523.523 0 0 1 0-1.042h3.282v-3.49C2.954 20.183 0 16.929 0 12.76c0-.78 1.06-.78 1.06 0 0 3.646 2.88 6.64 6.44 6.64 3.56 0 6.439-2.994 6.439-6.64a.533.533 0 0 1 1.061 0c0 4.167-2.954 7.422-6.995 7.709m4.292-15.495v7.76c0 2.76-2.12 4.975-4.798 4.975-2.676 0-4.797-2.24-4.797-4.975v-7.76C2.702 2.239 4.823 0 7.499 0c2.678 0 4.798 2.239 4.798 4.974m-1.01 7.76v-1.276H9.016c-.505 0-.505-.781 0-.781h2.273V9.375H9.015c-.505 0-.505-.781 0-.781h2.273V7.29H9.015c-.505 0-.505-.78 0-.78h2.273V4.974c0-2.136-1.718-3.88-3.789-3.88-2.07 0-3.787 1.744-3.787 3.88V6.51h2.273c.505 0 .505.78 0 .78H3.712v1.303h2.273c.505 0 .505.781 0 .781H3.712v1.302h2.273c.505 0 .505.781 0 .781H3.712v1.276c0 2.135 1.717 3.88 3.787 3.88 2.071 0 3.789-1.745 3.789-3.88" class="icon-fill" fill="none"/>
</svg>
  </span>
                                  
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/2024-02/Wallace_HP.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Benn Steil, a senior fellow and director of international economics at CFR, sits down with James M. Lindsay to discuss how Henry Wallace might have changed history had he and not Harry Truman succeeded Franklin D. Roosevelt as president.
</div>
                  <p class="card-article__metadata">
        
                  <a href="/podcasts" class="card-article__publication-type">Podcast</a>
                  
                      <span class="card-article__authors">
              with <a href="https://www.cfr.org/expert/james-m-lindsay" class="card-article__authors-link">James M. Lindsay</a> and <a href="https://www.cfr.org/expert/benn-steil" class="card-article__authors-link">Benn Steil</a></span>
                    
            
                          <span class="card-article__date"> January 30, 2024</span>
            
                                                                                                                                <a href="/podcasts/presidents-inbox" class="card-article__series">
                    The President’s Inbox
                </a>
                    </p>
            </div>
</section>

                                

    


<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/middle-east-and-north-africa/iran" class="card-article__topic-tag-link">
            Iran
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/article/irans-regional-armed-network " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Iran’s Regional Armed Network</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/2024-02/IranProxy_HP.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Iran’s web of armed partners such as Hezbollah and the Houthis serves to strengthen its influence in the Middle East and could pose a significant threat to the United States and U.S. allies in the region, especially Israel.

&nbsp;
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Article</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/kali-robinson" class="card-article__authors-link">Kali Robinson</a> and <a href="/bio/will-merrow" class="card-article__authors-link">Will Merrow</a></span>
                    
            
                          <span class="card-article__date"> January 31, 2024</span>
            
                                                                                                                        </p>
            </div>
</section>

                      </div>
      </div>
</div>
      </div>
</div>

  </div>


    </div>
  </main>

    <div id="main-footer-anchor"></div>
<footer class="main-footer">
  <div class="main-footer__wrapper">
    

                                
<a href="/" class="main-footer__logo-btn">
        <svg viewBox="0 0 125 60" class="main-footer__logo-signature icon-logo-signature" xmlns="http://www.w3.org/2000/svg">
    <title>Council on Foreign Relations</title>
    <path d="M106.909 13.178c-.502.92-1.081 1.458-1.854 1.458-.713 0-1.01-.522-.975-1.458.062-1.772 1.163-4.833 2.824-4.833.6 0 .999.416.97 1.371-.026.912-.386 2.406-.965 3.462m-.055-5.377c-2.64 0-4.56 2.264-4.63 4.755-.04 1.428.743 2.647 2.703 2.647 3.06 0 4.676-2.7 4.73-4.714.053-1.57-.944-2.688-2.803-2.688m17.484 3.789c0-.612-.316-1.01-.782-1.01-.404 0-.679.3-.679.677 0 .483.45.613.45 1.239-.001.259-.103.519-.32.765-.31.297-.748.513-2.042.513h-3.142c-.364 0-.465-.154-.313-.587.468-1.341 1.109-2.92 1.241-3.587.176-.876-.203-1.687-1.315-1.687-1.749 0-2.89 1.524-4.426 4.42h-.089s1.115-2.606 1.115-3.464c0-.61-.367-.946-1.026-.946-1.009 0-2.041 1.05-2.486 1.63l.31.302c.203-.255.51-.557.737-.733.402-.312.808-.263.687.407-.155.866-1.328 3.959-1.961 5.535h1.827c1.875-3.756 3.251-6.174 4.345-6.174.317 0 .483.196.483.53 0 .675-.985 2.959-1.389 4.312-.238.8-.183 1.332.52 1.332h3.498c1.451 0 2.618-.677 3.122-1.04 1.003-.68 1.635-1.614 1.635-2.433M10.751 24.923v-2.138H2.058v14.48h2.448V30.94h5.657v-2.143H4.506v-3.874zm71.256-.185c-1.474-1.462-3.291-2.302-5.748-2.302-4.258 0-7.677 3.079-7.676 7.66-.001 4.576 3.074 7.48 7.453 7.48h.014c4.075 0 7.1-2.548 7.115-6.755v-.448h-7.093v2.06h4.397c-.473 2.002-2.291 2.938-4.271 2.938-3.055 0-5.025-2.035-5.028-5.347.008-3.065 2.025-5.4 4.976-5.405 2.104 0 3.426.977 4.223 1.776l1.638-1.657zM4.49 51.483v-4.486h2.005c2.614 0 2.919 1.203 2.919 2.105 0 .888-.377 2.381-2.901 2.381H4.49zm3.519 1.851s-.018-.018.112-.034c2.109-.247 3.73-1.928 3.73-4.252 0-2.538-1.893-4.18-4.818-4.18H2.058v14.535H4.49v-6.019h.592l4.895 6.02h3.09l-5.06-6.07zm9.314-8.445v14.533h9.205v-2.114h-6.68v-4.337h5.546v-2.108h-5.546v-3.866h6.21v-2.108zm13.937-.022v14.535h8.865v-2.094h-6.343v-12.44zm24.952 0v2.13h4.494v12.407h2.438V46.995h4.49v-2.13zM71.44 59.402h2.529V44.866H71.44zm35.288-5.305l-9.756-9.776v15.082h2.43v-9.167c.423.418 9.757 9.764 9.757 9.764V44.867h-2.431v9.23zm11.854-3.111c-1.794-.892-2.6-1.555-2.6-2.6 0-1.58 1.623-1.775 2.107-1.775 1.029 0 1.988.344 2.834 1.133l1.234-1.761c-1.366-1.073-2.622-1.393-4.068-1.393-2.648 0-4.5 1.61-4.5 3.924 0 2.215 1.455 3.317 3.917 4.575 1.699.867 2.557 1.632 2.557 2.654 0 1.142-.993 1.819-2.301 1.819-1.38 0-2.47-.465-3.567-1.488l-1.375 1.721c1.582 1.46 3.24 1.87 4.763 1.87 3.286 0 4.942-1.864 4.942-4.14 0-2.331-1.765-3.454-3.943-4.54M12.08 11.201c-1.172 1.342-2.672 2.016-4.33 2.016-2.959 0-5.17-2.004-5.17-5.403 0-3.105 2.076-5.258 4.862-5.258 1.55 0 2.882.51 4.066 1.695l1.618-1.64C11.686 1.083 9.828.363 7.47.363 3.244.363 0 3.586 0 7.884c0 4.511 3.088 7.523 7.433 7.523 2.561 0 4.584-.862 6.046-2.523l-1.399-1.683zm66.172.03c-1.172 1.341-2.547 1.975-4.422 1.975-3.084 0-5.17-2.004-5.17-5.402 0-3.104 2.084-5.267 4.87-5.267 1.55 0 2.883.51 4.066 1.695l1.6-1.619c-1.39-1.536-3.287-2.25-5.645-2.25-4.343 0-7.472 3.223-7.472 7.521 0 4.511 3 7.523 7.435 7.523 2.677 0 4.676-.822 6.137-2.483l-1.4-1.693zm-38.644 4.05c3.432 0 5.411-1.862 5.973-4.36.11-.496.165-1.217.165-1.834V.548H43.31v8.468c0 2.721-1.342 4.075-3.68 4.075-2.41 0-3.854-1.398-3.854-4.075V.548H33.34v8.54c0 .642.057 1.338.17 1.833.573 2.498 2.598 4.36 6.1 4.36m13.05-9.512c.425.419 9.83 9.91 9.83 9.91V.548h-2.372v9.365L50.294 0v15.082h2.366V5.769zm30.062 9.313h2.525V.548h-2.525zM90.25.548V15.08h8.942v-2.095h-6.41V.548zM22.66 2.403c-2.794 0-5.06 2.216-5.06 5.466s2.154 5.467 5.06 5.467c2.904 0 5.056-2.217 5.056-5.467 0-3.25-2.264-5.466-5.057-5.466m-7.613 5.464C15.042 3.503 18.316.25 22.66.25c4.344 0 7.614 3.254 7.613 7.618.001 4.362-3.136 7.617-7.613 7.617-4.478 0-7.617-3.255-7.613-7.617m5.94 16.692c-2.793 0-5.057 2.216-5.057 5.467 0 3.25 2.152 5.467 5.057 5.467 2.906 0 5.057-2.217 5.057-5.467 0-3.251-2.263-5.467-5.057-5.467m-7.613 5.465c-.005-4.365 3.269-7.62 7.613-7.62 4.345 0 7.616 3.255 7.614 7.62.002 4.363-3.137 7.617-7.614 7.617s-7.618-3.254-7.613-7.617m36.748.788h5.546v-2.108h-5.546v-3.866h6.208v-2.108h-8.734v14.534h9.205v-2.114h-6.679zm11.533 6.452h2.525V22.73h-2.525zm-26.489-7.92v-4.487h2.004c2.613 0 2.919 1.203 2.919 2.107 0 .887-.378 2.38-2.901 2.38h-2.022zm3.519 1.85s-.019-.017.111-.033c2.108-.247 3.73-1.928 3.73-4.252 0-2.538-1.894-4.182-4.818-4.182h-4.975v14.537h2.433v-6.018h.592l4.895 6.018h3.09l-5.058-6.07zm3.449 28.204h2.541l1.416-3.376h5.558l1.393 3.376h2.682l-6.774-15.49-6.816 15.49zm6.732-10.073l1.89 4.542h-3.789l1.9-4.542zm36.612-2.6c-2.792 0-5.056 2.216-5.056 5.466 0 3.251 2.153 5.468 5.056 5.468 2.907 0 5.06-2.217 5.06-5.468 0-3.25-2.264-5.466-5.06-5.466m-7.613 5.464c-.004-4.365 3.27-7.617 7.614-7.617 4.344 0 7.617 3.252 7.614 7.617.002 4.362-3.138 7.618-7.615 7.618s-7.617-3.256-7.613-7.618m11.558-24.238c.424.419 9.829 9.909 9.829 9.909V22.73h-2.37v9.366l-9.823-9.913v15.082h2.364v-9.313z" class="icon-fill" fill="none"/>
</svg>
  
</a>

<div class="main-footer__menu-wrapper">
  <ul class="main-footer__menu">
          <li class="main-footer__menu-item">
        <a href="/about">About</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/member-programs">Member Programs</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/contact-us">Contact</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/support-cfr">Support</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/media">For Media</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="https://link.cfr.org/join/66n/signup&amp;hash=2d4c5929e9e04cc42f5cd375fb8dcfb1" target="_blank">Newsletters</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/membership">Membership</a>
      </li>
          <li class="main-footer__menu-item">
        <a href="/career-opportunities">Careers</a>
      </li>
      </ul>
</div>


<div class="main-footer__fineprint">
  <div class="main-footer__fineprint__wrapper">
      <span class="main-footer__fineprint-line">©2024 Council on Foreign Relations.</span>
    <span class="main-footer__fineprint-line">All rights reserved.</span>
    <span class="main-footer__fineprint-line">
      <a href="/privacy-policy" class="main-footer__fineprint-link">Privacy Policy</a> and
      <a href="/terms-use" class="main-footer__fineprint-link">Terms of Use</a>.
    </span>
  </div>
  <div class="main-footer__share-kit-wrapper">
                
  
  <div class="share-kit  share-kit--icon-color-brown share-kit--bg-color-white share-kit--small share-kit--theme-none"
    data-share-anchor=""
    data-share-query=""
    data-share-name=""
    data-share-description=""
    data-share-caption=""
    data-share-picture=""
    data-share-type=""
    
  >
    <div class="share-kit__icons">
                                    <a class="share-kit__hotspot share-kit__facebook" href="https://www.facebook.com/councilonforeignrelations" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" class="icon-fill"/>
</svg>
  
            </a>
                                                      <a class="share-kit__hotspot share-kit__twitter" href="https://twitter.com/CFR_org" target="_blank">
                    <svg viewBox="0 0 1350 1377" class="icon icon-twitter" xmlns="http://www.w3.org/2000/svg">
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="none" class="icon-fill" />
</svg>
  
            </a>
                                                      <a class="share-kit__hotspot share-kit__youtube" href="https://www.youtube.com/user/cfr/featured" target="_blank">
                    <svg viewBox="0 0 16 16" class="icon icon-youtube" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="none" class="icon-fill"/>
</svg>
  
            </a>
                                                      <a class="share-kit__hotspot share-kit__instagram" href="https://www.instagram.com/cfr_org/" target="_blank">
                    <svg viewBox="0 0 16 16" class="icon icon-instagram" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="none" class="icon-fill"/>
</svg>
  
            </a>
                                                      <a class="share-kit__hotspot share-kit__linkedin" href="https://www.linkedin.com/company/council-on-foreign-relations" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" class="icon-fill"/>
</svg>
  
            </a>
                            </div>

      </div>

  </div>
</div>

  </div>
</footer>

  
</div>
  </div>

    

        <script id="share-kit--template" type="text/template">
                                    
  
  <div class="share-kit  share-kit--icon-color-white share-kit--bg-color-white  share-kit--theme-none"
    data-share-anchor=""
    data-share-query=""
    data-share-name=""
    data-share-description=""
    data-share-caption=""
    data-share-picture=""
    data-share-type=""
    
  >
    <div class="share-kit__icons">
                        <button class="share-kit__hotspot share-kit__facebook" onclick="CFR.Share.facebook(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" class="icon-fill"/>
</svg>
  
          </button>
                                <button class="share-kit__hotspot share-kit__twitter" onclick="CFR.Share.twitter(this)">
                  <svg viewBox="0 0 1350 1377" class="icon icon-twitter" xmlns="http://www.w3.org/2000/svg">
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="none" class="icon-fill" />
</svg>
  
          </button>
                                <button class="share-kit__hotspot share-kit__linkedin" onclick="CFR.Share.linkedin(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" class="icon-fill"/>
</svg>
  
          </button>
                                <button class="share-kit__hotspot share-kit__e-mail-filled" onclick="CFR.Share.email(this)">
                  <svg viewBox="0 0 23 14" class="icon icon-e-mail-filled" xmlns="http://www.w3.org/2000/svg">
    <title>Email</title>
    <path d="M.915 0l10.258 7.808L21.673 0H.915zm10.258 8.804L0 .297V14h22.615V.297L11.173 8.804z" class="icon-fill" fill="none"/>
</svg>
  
          </button>
                  </div>

      </div>

    </script>
  </div>
    <script>var sailthru_customer_id = "16a6a423ea139031de8812f22132ba91";</script>
    <script src="/sites/default/files/js/js_93mIXk0LvMK_jksLJIlyR3ZcwTiPk6d3d0Pe4fkPxyQ.js"></script>
<script src="https://unpkg.com/web-vitals@0.2.4/dist/web-vitals.es5.umd.min.js" defer></script>
<script src="/sites/default/files/js/js_a9dhV5wkapw2lqkXFNxrqaBtfZt4AFiO_ETDCtLWz74.js"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"dd28942087","applicationID":"342008597","transactionName":"Z1ZUNRNUWUACVBJeCl4cdwIVXFhdTHMUQhVRX2oPDlFSbyBYCEMXX19aBBNpeVwHUjBeAEdwWQ8VR1hfD1IUGltGWlMW","queueTime":0,"applicationTime":4245,"atts":"SxFXQ1tOSk4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
