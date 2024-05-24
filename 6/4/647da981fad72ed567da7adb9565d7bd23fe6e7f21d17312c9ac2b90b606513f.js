(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{"2P7h":function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return O}));var a,i,r=n("gcR/"),o=n.n(r),u=n("J4zp"),l=n.n(u),c=n("q1tI"),s=n.n(c),d=n("MShG"),b=n("5Aio"),p=n("qkuN"),f=n("kc0S"),g=n("EOa1"),v=n("+yCz"),m=n("hgSA"),y=n("DRvx"),h=n("xIq5"),w=n("dZ3W"),E=s.a.createContext({setPersistentFooter:function(e){}}),x=s.a.createContext({setUserProfile:function(e){}}),I=function(e){var t=e.pageContentMaxWidth,n=e.children,r=Object(c.useContext)(b.b),u=Object(c.useState)(null),s=l()(u,2),I=s[0],O=s[1],D=Object(c.useState)(null),C=l()(D,2),P=C[0],j=C[1];Object(c.useEffect)((function(){var e;Object(p.f)(),Object(f.c)(null!=P&&null!==(e=P.subscriptions)&&void 0!==e&&e.length?"sub":"regi","")}),[]);var k=Object(c.useMemo)((function(){return P?Object(y.a)(P):[]}),[P]),N={setPersistentFooter:function(e){O(e)}},A={setUserProfile:function(e){j(e)}},S=function(){r.closeDialog()},T={emailAddress:"",subscriptions:(null==P?void 0:P.subscriptions)||[]};return o()(E.Provider,{value:N},void 0,o()(x.Provider,{value:A},void 0,o()(g.b.Provider,{value:T},void 0,o()(d.q,{headerComponent:o()(d.l,{username:P?P.displayName:void 0,pageHeader:"",nytLogoOnClick:p.i,userProfileOnClick:P?function(){Object(p.j)();var e=(null==P?void 0:P.displayName)||"";r.displayCustomModalComponent((function(t){return o()(v.a,{rootElementRef:t,displayName:e,onClose:r.closeDialog,navigationMenu:o()(m.a,{dataTestId:"user-drop-down-nav-menu",onRouterUpdate:S,currentPath:"",navItems:k,trackingContext:{moduleName:h.b,moduleContext:h.a}})})}))}:void 0}),footerComponent:a||(a=o()(w.a,{})),messagingUnitComponent:i||(i=o()(b.c,{})),persistentFooterComponent:I,pageContentMaxWidth:t},void 0,n))))};I.displayName="FeaturePageInternalLayout";var O=function(e){var t=e.pageContentMaxWidth,n=e.children;return s.a.createElement(s.a.Fragment,null,o()(I,{pageContentMaxWidth:t},void 0,n))}},"4gCf":function(e,t,n){"use strict";var a,i=n("gcR/"),r=n.n(i),o=(n("q1tI"),n("MShG")),u=n("/Efl"),l=function(e){var t=e.onClick;return r()(o.x,{dataTestId:"customer-care-link",to:u.b.CONTACT_US_LINK,targetTab:o.db.newTab,onClick:t,colorVariant:o.N.text.interactiveInline},void 0,a||(a=r()(u.a,{copy:"contact Customer Care"})))};l.displayName="CustomerCareLink",t.a=l},S7D9:function(e,t,n){"use strict";n.r(t);var a,i,r=n("gcR/"),o=n.n(r),u=n("q1tI"),l=n.n(u),c=n("MShG"),s=n("2P7h"),d=n("J4zp"),b=n.n(d),p=n("nwbv"),f=n("wYF2"),g=n("Ke7S"),v=n("VkAN"),m=n.n(v),y=n("eFc+"),h=n.n(y).a,w=h(a||(a=m()(["\nquery getDigitalSubscriptionPauseEligibility($surfaceCode: String) {\n  accountInfo(surfaceCode: $surfaceCode) {\n    emailAddress\n    displayName\n    subscriptions {\n      subscriptionId\n      subscriptionName\n      subscriptionLabels\n      subscriptionDigitalPauseEligibility {\n        eligible\n        reason\n        availablePauseDurations {\n          durationDays\n          resumeDate\n          nextBillingDate\n        }\n      }\n    }\n    hasBillingHistory\n  }\n}\n"]))),E=h(i||(i=m()(["\n  mutation pauseDigitalSubscription($subscriptionId: ID!, $pauseDurationDays: Int!) {\n    pauseDigitalSubscription(\n      pauseDigitalSubscriptionInput: {\n        subscriptionId: $subscriptionId,\n        pauseDurationDays: $pauseDurationDays\n      }\n    ) {\n      success\n    }\n  }\n"]))),x=n("5lfh"),I="#ccc",O="415px",D="640px",C=Object(x.d)("span",{target:"e1ixaak90"})("white-space:nowrap;"),P=Object(x.d)("div",{target:"e1ixaak91"})("display:flex;flex-flow:column nowrap;max-width:432px;@media screen and (min-width:",D,"){margin:12px auto auto auto;max-width:640px;}"),j=Object(x.d)("div",{target:"e1ixaak92"})("button{float:right;}"),k=n("pJnO"),N=function(e){if(e%7)return"".concat(e," days");var t=e/7;return"".concat(t," ").concat(1===t?"week":"weeks")},A=Object(x.d)("button",{target:"ecwezb0"})("background:",c.O.background.primary,";border:1px solid ",(function(e){return e.active?c.O.stroke.secondary:I}),";box-sizing:border-box;border-radius:",c.hb[.5],";cursor:pointer;display:flex;align-items:center;padding:",c.hb[1.5],";margin-top:",c.hb[1],";text-align:left;width:100%;@media only screen and (min-width:",D,"){flex:50%;margin:0 ",c.hb[.5],";}"),S=Object(x.d)("div",{target:"ecwezb1"})("display:inline-block;width:",c.hb[2],";height:",c.hb[2],";border-radius:",c.hb[1],";border:1px solid;position:relative;border-color:",(function(e){return e.active?c.O.stroke.primary:c.O.stroke.secondary}),";top:-6px;"),T=Object(x.d)("div",{target:"ecwezb2"})("margin:2px;width:10px;height:10px;border-radius:5px;background-color:",(function(e){return e.active?c.O.background.primaryInverse:c.O.background.primary}),";"),L=Object(x.d)("div",{target:"ecwezb3"})("padding-left:",c.hb[1.5],";display:flex;flex-direction:column;"),R=(c.Q.weight.light,c.hb[1.5],Object(x.d)("div",{target:"ecwezb5"})("padding-bottom:",c.hb[1.5],";@media only screen and (min-width:",D,"){display:flex;margin:0 -6px;}")),F=Object(x.d)(j,{target:"ecwezb6"})("padding-top:",c.hb[2],";@media only screen and (min-width:",O,"){padding-top:28px;}"),_=function(e){var t=e.durationDays,n=e.active,a=e.onClick,i=N(t),r=Object(k.b)().add(t,"days").formatDefaultDate();return o()(A,{"aria-label":n?"selected ".concat(i):i,active:n,onClick:a,tabIndex:0},void 0,o()(S,{active:n,"data-testid":"radio-".concat(t)},void 0,o()(T,{active:n})),o()(L,{},void 0,o()(c.D,{colorVariant:c.N.text.primary,dataTestId:"duration-period",level:"2"},void 0,i),o()(c.b,{colorVariant:c.N.text.secondary,dataTestId:"resume-date-".concat(t),level:"2"},void 0,"Ends on ",r)))};_.displayName="DurationOption";var V,M,G,U=_,W=n("fTxn"),q="DigitalPause",z=function(e){var t=e.chooseDuration,n=e.subscription;Object(u.useEffect)((function(){var e,t;e=n.subscriptionId,t={subId:e},Object(W.w)(q,"PauseDurationView",t)}),[]);var a=n.subscriptionDigitalPauseEligibility.availablePauseDurations,i=void 0===a?[]:a,r=Object(u.useState)(null),l=b()(r,2),s=l[0],d=l[1],p=i.filter((function(e){return[28,56].includes(e.durationDays)})),f=function(e,t){var a;!function(e,t,n){var a={subId:t,days:n};Object(W.u)(q,"PauseDurationView","PauseDurationOption",e,a)}(e,n.subscriptionId,(null===(a=p[t])||void 0===a?void 0:a.durationDays)||-1),d(t)};return o()(P,{},void 0,o()(c.d,{colorVariant:c.N.text.primary,dataTestId:"duration-headline",level:"3"},void 0,"Choose the duration of ",V||(V=o()(C,{},void 0,"your pause"))),M||(M=o()(c.e,{defaultSpace:"3"})),o()(c.b,{colorVariant:c.N.text.primary,dataTestId:"credit-message",level:"2"},void 0,"You’ll receive a credit for the days remaining in your current service period. You can resume your subscription at any time before your pause ends."),G||(G=o()(c.e,{defaultSpace:"2"})),o()(R,{},void 0,p.slice().sort((function(e,t){return e.durationDays-t.durationDays})).map((function(e,t){return o()(U,{durationDays:e.durationDays,onClick:function(e){return f(e,t)},active:t===s},t)}))),o()(F,{},void 0,o()(c.j,{dataTestId:"continue-btn",disabled:null===s,onClick:function(e){if(null!==s){var a=(p[s]||{}).durationDays,i=void 0===a?0:a;!function(e,t,n){var a={subId:t,days:n};Object(W.u)(q,"PauseDurationView","SelectPauseDurationBtn",e,a)}(e,n.subscriptionId,i),t(i)}},variant:c.L.filled,heightVariant:c.K.standard,widthVariant:{small:c.M.flex,medium:c.M.content}},void 0,"Continue")))};z.displayName="DurationChoice";var H,K,B,Y,J,$,Q,Z,X=z,ee=n("Kxyt"),te=n("/Efl"),ne=n("xEI7"),ae=n("u0vE"),ie=(c.hb[2],c.hb[2.5],c.hb[2],c.hb[3],Object(x.d)("div",{target:"e1e51ky41"})("display:flex;justify-content:space-between;")),re=Object(x.d)(j,{target:"e1e51ky42"})("width:100%;"),oe=Object(x.d)("p",{target:"e1e51ky43"})("color:",c.O.text.negative,";",c.ib.legal),ue=function(e){var t=e.subscriptionName,n=e.emailAddress;return l.a.createElement(l.a.Fragment,null,"You've paused your ",t," subscription. We've sent an email confirmation to ",o()("span",{"data-testid":"paused-email-address"},void 0,n),".")},le=function(e){var t=e.label,n=e.value,a=e.testid;return l.a.createElement(l.a.Fragment,null,o()(ie,{"data-testid":a},void 0,o()(c.D,{colorVariant:c.N.text.primary,dataTestId:"".concat(a,"-label"),level:"2"},void 0,t),o()(c.b,{colorVariant:c.N.text.primary,dataTestId:"".concat(a,"-value"),level:"2"},void 0,n)),H||(H=o()(c.e,{defaultSpace:"1.5"})))},ce=function(e){var t=e.emailAddress,n=e.subscription,a=e.durationDays,i=n.subscriptionId,r=n.subscriptionName,l=Object(ee.useApolloClient)(),s=Object(g.c)(),d=Object(u.useContext)(W.d),p=function(){!function(e,t){var n={subId:e,days:t};Object(W.z)(q,"PauseReviewView","PauseDigitalSubscription",n)}(i,a),l.clearStore().then((function(){d.displayNotification(o()(te.a,{copy:ue,params:{subscriptionName:r,emailAddress:t}}),{dataTestId:"paused-confirmation",startIconName:"success",startIconColorVariant:c.N.icon.positive}),s.to("/subscription")})).catch((function(){}))},f=Object(ee.useMutation)(E,{onCompleted:function(){return p()}}),v=b()(f,2),m=v[0],y=v[1],h=y.loading,w=y.error,x=N(a),I=Object(k.b)(),O=I.formatDefaultDate(),D=I.add(a,"days").formatDefaultDate();if(w){var j=b()(w.graphQLErrors,1)[0],A=(void 0===j?{message:"unknown_error"}:j).message;!function(e,t){var n={subId:e,errorType:t};Object(W.y)(q,"PauseReviewView","PauseDigitalSubscription",n)}(i,A),A===ne.g&&Object(ae.redirectToLogin)()}Object(u.useEffect)((function(){!function(e,t){var n={subId:e,days:t};Object(W.w)(q,"PauseReviewView",n)}(i,a)}),[]);return o()(P,{},void 0,o()(c.d,{colorVariant:c.N.text.primary,dataTestId:"confirm-headline",level:"3"},void 0,"Review and confirm ",K||(K=o()(C,{},void 0,"your pause"))),B||(B=o()(c.e,{defaultSpace:"3"})),o()(le,{testid:"subscription-name",label:"Subscription",value:n.subscriptionName}),o()(le,{testid:"start-date",label:"Start Date",value:O}),o()(le,{testid:"duration",label:"Duration",value:x}),o()(le,{testid:"end-date",label:"End Date",value:D}),Y||(Y=o()(c.e,{defaultSpace:"1.5"})),o()(c.D,{colorVariant:c.N.text.primary,dataTestId:"billing-information",level:"3"},void 0,"Billing Information"),J||(J=o()(c.e,{defaultSpace:"0.5"})),o()(c.b,{colorVariant:c.N.text.primary,dataTestId:"billing-info-one",level:"3"},void 0,"Your credit will appear on your next bill. If you manually restart your subscription, your credit will be adjusted."),$||($=o()(c.e,{defaultSpace:"0.5"})),o()(c.b,{colorVariant:c.N.text.primary,dataTestId:"billing-info-two",level:"3"},void 0,"Your next bill will be paid automatically 3 days before your next service period and may take a few days to appear in your account."),w&&(Q||(Q=o()(oe,{},void 0,"We’re sorry, but there was a technical issue. Please try again."))),Z||(Z=o()(c.e,{defaultSpace:"3"})),o()(re,{},void 0,o()(c.j,{dataTestId:"confirm-btn",onClick:function(e){!function(e,t,n){var a={subId:t,days:n};Object(W.u)(q,"PauseReviewView","ConfirmPauseBtn",e,a)}(e,i,a),m({variables:{subscriptionId:i,pauseDurationDays:a}}).catch((function(){}))},processing:h,variant:c.L.filled,heightVariant:c.K.standard,widthVariant:{small:c.M.flex,medium:c.M.content}},void 0,"Confirm")))};ce.displayName="ConfirmPause";var se,de=ce,be=function(e){var t=e.accountInfo,n=Object(u.useContext)(s.c),a=Object(g.a)(),i=Object(g.c)(),r=Object(u.useState)("pause_duration"),l=b()(r,2),c=l[0],d=l[1],f=Object(u.useState)(0),v=b()(f,2),m=v[0],y=v[1],h=t.emailAddress||"",w=t.subscriptions||[];Object(u.useEffect)((function(){n.setUserProfile({displayName:t.displayName,subscriptions:w,hasBillingHistory:t.hasBillingHistory})}),[]);var E=function(){var e,t,n=null==a||null===(e=a.location)||void 0===e?void 0:e.state,i=(null==n||null===(t=n.digitalPause)||void 0===t?void 0:t.subscriptionId)||"";if(i){var r=w.find((function(e){return e.subscriptionId===i}));return r&&r.subscriptionDigitalPauseEligibility.eligible?r:void 0}var o=w.filter((function(e){var t;return null===(t=e.subscriptionDigitalPauseEligibility)||void 0===t?void 0:t.eligible}));if(1===o.length)return o[0]}();return Object(u.useEffect)((function(){var e,t;t={eligible:!!(e=E),subId:(null==e?void 0:e.subscriptionId)||""},Object(W.t)(q,t)}),[]),E?"confirmation"===c?o()(de,{emailAddress:h,subscription:E,durationDays:m}):o()(X,{chooseDuration:function(e){y(e),d("confirmation")},subscription:E}):(i.to("/subscription"),se||(se=o()(p.a,{})))};be.displayName="DigitalPause";var pe,fe=Object(f.c)(w,{variables:{surfaceCode:"digital-pause"}},be,"FEATURE_PAGE");t.default=function(){return o()(s.a,{pageContentMaxWidth:c.U.STANDARD},void 0,pe||(pe=o()(fe,{})))}},bn3E:function(e,t,n){"use strict";n.r(t),n.d(t,"globalTitleErrorPageTitleAll",(function(){return l})),n.d(t,"globalTitlePageNotFoundAll",(function(){return c})),n.d(t,"globalErrorNoTryAgainAll",(function(){return s})),n.d(t,"globalErrorNoHdAll",(function(){return d})),n.d(t,"connectDigitalAccountLinkLabel",(function(){return b})),n.d(t,"globalErrorNoSubAll",(function(){return p})),n.d(t,"globalErrorShadowModeAll",(function(){return f})),n.d(t,"globalErrorErrorPageAll",(function(){return g})),n.d(t,"globalErrorPageNotFoundAll",(function(){return v})),n.d(t,"globalErrorTryAgainSoonAll",(function(){return m})),n.d(t,"globalErrorAll",(function(){return y})),n.d(t,"globalErrorPhoneNumberInvalidAll",(function(){return h})),n.d(t,"globalErrorPhoneNumberLengthAll",(function(){return w})),n.d(t,"globalErrorIneligibleComplaintSubscriberAll",(function(){return E})),n.d(t,"globalErrorIneligibleSuspendSubscriberAll",(function(){return x})),n.d(t,"globalButtonGoHome",(function(){return I}));var a=n("gcR/"),i=n.n(a),r=n("q1tI"),o=n.n(r),u=n("4QM3"),l="Try again soon",c="Page not found",s=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but we’re having a technical issue right now. Please contact"," ",i()("a",{target:"_blank",href:u.CARE_PAGE_LINK,rel:"noopener"},void 0,"Customer Care")," ","for assistance.")},d=function(e){var t=e.ccLink,n=e.connectDigitalAccountLink;return o.a.createElement(o.a.Fragment,null,"It doesn’t look like you get the newspaper delivered. If this isn’t true, please ",t," or"," ",n," with your newspaper subscription.")},b="connect this digital account",p=function(){return o.a.createElement(o.a.Fragment,null,"It doesn’t look like you subscribe to The Times. If this isn’t true, please"," ",i()("a",{target:"_blank",href:u.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care")," ","or",i()("a",{href:u.LINK_HD_SUBSCRIPTION_PAGE_LINK,target:"_blank",rel:"noopener"},void 0,"connect this digital account")," ","with your newspaper subscription.")},f=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but our system is undergoing regular maintenance right now. Please"," ",i()("a",{target:"_blank",href:u.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care"),"or try again in twenty minutes.")},g="We’re sorry, but we’re having a technical issue right now.",v="We’re sorry, we seem to have lost this page, but we don’t want to lose you.",m=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"Please try again soon, or ",t," for immediate assistance.")},y=function(){return o.a.createElement(o.a.Fragment,null,"We’re sorry, but we’re having a technical issue right now. If you continue to have problems, please"," ",i()("a",{target:"_blank",href:u.CARE_PAGE_LINK,rel:"noopener"},void 0,"contact Customer Care"),".")},h="Please enter a valid phone number.",w="Please enter 10 digits.",E=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"We’re sorry, but you can’t use this feature with your current subscription. Please ",t," to report a missing paper.")},x=function(e){var t=e.ccLink;return o.a.createElement(o.a.Fragment,null,"We’re sorry, but you can’t use this feature with your current subscription. Please ",t," to suspend delivery.")},I="Go to home page"},kji5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a,i,r,o,u,l,c,s,d=n("gcR/"),b=n.n(d),p=n("q1tI"),f=n.n(p),g=n("vftj"),v=n("MShG"),m=n("/Efl"),y=n("4gCf"),h=n("4+a0"),w=n("Ke7S"),E=n("HLED"),x=n("bn3E"),I=n("zGcO"),O=function(e){var t=Object(w.c)();return Object(p.useEffect)((function(){Object(E.f)({moduleName:"UnknownError"})}),[]),f.a.createElement(f.a.Fragment,null,a||(a=b()(g.Helmet,{title:x.globalTitleErrorPageTitleAll})),b()(I.b,{placement:e.placement},void 0,b()(v.m,{typeStyle:v.Z.display2,headerLevel:"2"},void 0,i||(i=b()(m.a,{copy:x.globalTitleErrorPageTitleAll}))),r||(r=b()(v.H,{space:"4"})),b()(I.a,{},void 0,b()(v.m,{typeStyle:v.Z.title1,headerLevel:"3"},void 0,o||(o=b()(m.a,{copy:x.globalErrorErrorPageAll}))),u||(u=b()(v.H,{space:"2"})),b()(v.r,{typeStyle:v.Z.body2},void 0,b()(m.a,{copy:x.globalErrorTryAgainSoonAll,params:{ccLink:l||(l=b()(y.a,{}))}}))),c||(c=b()(v.H,{space:"4"})),b()(v.F,{to:h.a.BASENAME,onClick:function(e){e.preventDefault(),t.to("/")}},void 0,s||(s=b()(m.a,{copy:x.globalButtonGoHome})))))}},wYF2:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return E}));var a,i,r=n("pVnL"),o=n.n(r),u=n("J4zp"),l=n.n(u),c=n("gcR/"),s=n.n(c),d=n("q1tI"),b=n.n(d),p=n("Kxyt"),f=n("xEI7"),g=n("u0vE"),v=n("kji5"),m=n("TlKO"),y=n("HLED"),h=function(e){var t=e.moduleName,n=void 0===t?"UserProfile":t,a=e.moduleRegion,i=void 0===a?"ReloginRequired":a,r=e.moduleContext,o=void 0===r?"ReloginRequired":r;Object(y.g)({moduleName:n,moduleRegion:i,moduleContext:o},g.redirectToLogin,2e3)},w=function(e,t){var n=e.moduleName,a=void 0===n?"UserProfile":n,i=e.moduleRegion,r=void 0===i?"PageLoadError":i,o=e.moduleContext,u=void 0===o?"ErrorMsg":o;Object(y.f)({moduleName:a,moduleLabel:t,moduleRegion:r,moduleContext:u,elementLabel:t})};function E(e,t,n,r){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return function(d){var g=Object(p.useQuery)(e,t),y=g.loading,E=g.error,x=g.data,I=(void 0===x?{}:x).accountInfo,O=g.refetch,D=n;if(y)return a||(a=s()(m.a,{}));if(E){var C=l()(E.graphQLErrors,1)[0],P=(void 0===C?{message:"unknown_error"}:C).message;return P===f.g?(h(c),null):(w(c,P),u||(u=s()(v.a,{placement:r||"FULL_PAGE"})))}return I?b.a.createElement(D,o()({accountInfo:I,refetch:O},d)):i||(i=s()(m.a,{}))}}},zGcO:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var a=n("5lfh"),i=n("MShG"),r=Object(a.d)("div",{target:"e4bqtox0"})("background-color:",i.O.background.secondary,";padding:",i.hb[3],";"),o=Object(a.b)("margin:",i.hb[6]," auto;max-width:calc(100% - ",i.hb[4]," - ",i.hb[4],");width:",i.U.STANDARD,";"),u=Object(a.b)("margin:0 auto;max-width:calc(100vw - ",i.hb[4]," - ",i.hb[4],");width:",i.U.STANDARD,";"),l=Object(a.d)("div",{target:"e4bqtox1"})((function(e){return"FULL_PAGE"===(t=e.placement)?o:"FEATURE_PAGE"===t?u:Object(a.b)();var t}),";")}}]);
//# sourceMappingURL=196-929e99ff0c15d3c95903.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.recordReplay=function(){(0,o.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,o.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},h.pauseReplay=function(){(0,o.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,o.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},h.interaction=function(){return(new y).get()};var A=y.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,o.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((a?"":"no-")+"fn-start",[(0,s.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function w(e,t,r,i){return function(){return(0,o.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,o.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function x(){r.e(111).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{A[e]=w(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,o.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,o.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>x()),!0):x(),h}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=_),v=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({111:"nr-spa",164:"nr-spa-compressor",433:"nr-spa-recorder"}[e]+"-1.251.1.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.251.1.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={111:"sha512-lCY4+B0gOT0jVtMbaDU0ri7coukTGr4YSIrFnYCbNcvlKoBWZ5lEMC3pnQbfFRHmqU9ClOHO1zeM7zl3Bpi8lg==",433:"sha512-uSk6ex6Q5btbEC3Fd9ucXsXT/MfYs9nSwrApEySzfsKG5WHfu74lzjBZOw2ou+AfTHUFLXX7zUhG8T18KvZDQQ==",164:"sha512-69slZTW/5YZ/pY5zE0I3TCiV/tXwxGlT/pOzl7BgweR1maJ+C+doWoTbPHgKP1SrTS/0sZHb5fgMScLDwVDkqw=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={801:0,92:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.251.1.PROD"]=self["webpackChunk:NRBA-1.251.1.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e("recordReplay")}pauseReplay(){return this.#e("pauseReplay")}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}}var r=i(3325),n=i(234);const o=Object.values(r.D);function a(e){const t={};return o.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let o;this.onAggregateImported=new Promise((e=>{o=e}));const a=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(111).then(i.bind(i,1656));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void o(!1);const{lazyFeatureLoader:e}=await i.e(111).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),o(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),o(!1)}};l.il?(0,d.b2)((()=>a()),!0):a()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=b(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=A(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function A(e){return"object"!=typeof e?[]:(0,m.D)(e,w)}function w(e,t){return t}var x=i(8632),E=i(4402),_=i(4351);var T=i(5546),S=i(7956),R=i(3239),D=i(7894),N=i(9251);class O extends f{static featureName=N.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,N.t,r),l.il&&((0,S.N)((()=>(0,T.p)("docHidden",[(0,D.z)()],void 0,N.t,this.ee)),!0),(0,R.bP)("pagehide",(()=>(0,T.p)("winPagehide",[(0,D.z)()],void 0,N.t,this.ee))),this.importAggregator())}}var I=i(3081);class j extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}var P=i(6660);class C{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class k extends f{static featureName=P.t;#t=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,P.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#t.has(n)&&(this.#t.add(n),(0,T.p)("err",[this.#r(n),(0,D.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,T.p)("ierr",[this.#r(e),(0,D.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,T.p)("err",[this.#n(e),(0,D.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,R.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#t.has(e.error)?this.#t.delete(e.error):(0,T.p)("err",[this.#i(e),(0,D.z)()],void 0,r.D.jserrors,this.ee))}),(0,R.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.#t.clear(),this.abortHandler=void 0}#r(e){return e instanceof Error?e:void 0!==e?.message?new C(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new C("string"==typeof e?e:(0,_.P)(e))}#n(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new C(t);const r=this.#r(e.reason);return r.message=t+r.message,r}#i(e){return e.error instanceof Error?e.error:new C(e.message,e.filename,e.lineno,e.colno)}}var M=i(2210);let H=1;const L="nr@id";function z(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,M.X)(e,L,(function(){return H++}))}function F(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,_.P)(e).length}catch(e){return}}}var B=i(1214),U=i(7243);class V{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!r||!i)return null;var a=(0,E.M)(),s=(0,E.Ht)(),c=Date.now(),u={spanId:a,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,s),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,c,r,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,s,c,r,i,o)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof l._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,_.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var o=(0,U.e)(r.allowed_origins[i]);if(e.hostname===o.hostname&&e.protocol===o.protocol&&e.port===o.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var q=i(7825),G=["load","error","abort","timeout"],Z=G.length,W=n.Yu.REQ,X=n.Yu.XHR;class K extends f{static featureName=q.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,q.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new V(e),this.handler=(e,t,r,n)=>(0,T.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};Y(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,B.u5)(this.ee),(0,B.Kf)(this.ee),function(e,t,i,o){function a(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=x,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){E(t,e)}),(0,R.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,R.m$)(!1))}function s(e){this.params={method:e[0]},Y(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var a=o.generateTracePayload(this.parsedOrigin);if(a){var s=!1;a.newrelicHeader&&(r.setRequestHeader("newrelic",a.newrelicHeader),s=!0),a.traceContextParentHeader&&(r.setRequestHeader("traceparent",a.traceContextParentHeader),a.traceContextStateHeader&&r.setRequestHeader("tracestate",a.traceContextStateHeader),s=!0),s&&(this.dt=a)}}function u(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=F(i);a&&(n.txSize=a)}this.startTime=(0,D.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<Z;s++)r.addEventListener(G[s],this.listener,(0,R.m$)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+z(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+z(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,D.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,D.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,D.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,U.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=o.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function A(e,t){this.params={},this.metrics={},this.startTime=(0,D.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),Y(this,r);var o=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=F(n.body)||0}function w(e,t){var n;this.endTime=(0,D.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var o={txSize:this.txSize,rxSize:n,duration:(0,D.z)()-this.startTime};i("xhr",[this.params,o,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function x(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o=0;o<Z;o++)e.removeEventListener(G[o],this.listener,!1);t.aborted||(n.duration=(0,D.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):E(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function E(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?F(e.response):"text"===r||""===r||void 0===r?F(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",a),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",u),t.on("xhr-cb-time",d),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",A),t.on("fn-start",v),t.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function Y(e,t){var r=(0,U.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var J=i(3614);const{BST_RESOURCE:Q,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:oe,PUSH_STATE:ae}=J;var se=i(7056),ce=i(7144);class ue extends f{static featureName=ce.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ce.t9,r);try{const e=JSON.parse(localStorage.getItem("NRBA_SESSION"));e.sessionReplayMode!==se.IK.OFF?this.#a(e.sessionReplayMode):this.importAggregator({})}catch(e){this.importAggregator({})}}async#a(e){const{Recorder:t}=await Promise.all([i.e(111),i.e(433)]).then(i.bind(i,4136));this.recorder=new t({mode:e,agentIdentifier:this.agentIdentifier}),this.recorder.startRecording(),this.importAggregator({recorder:this.recorder})}}var de=i(7836);const{FEATURE_NAME:le,START:fe,END:he,BODY:pe,CB_END:ge,JS_TIME:me,FETCH:ve,FN_START:be,CB_START:ye,FN_END:Ae}=de;var we=i(4649);class xe extends f{static featureName=we.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,we.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,E.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},(0,x.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=a(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,_.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,x.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}}({features:[K,p,O,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,B.QU)(n),this.eventsEE=(0,B.em)(n),this.eventsEE.on(oe,(function(e,t){this.bstStart=(0,D.z)()})),this.eventsEE.on(ie,(function(e,t){(0,T.p)("bst",[e[0],t,this.bstStart,(0,D.z)()],void 0,r.D.sessionTrace,n)})),n.on(ae+te,(function(e){this.time=(0,D.z)(),this.startPath=location.pathname+location.hash})),n.on(ae+re,(function(e){(0,T.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,T.p)(Q,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ue,j,xe,k,class extends f{static featureName=le;constructor(e,t){if(super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;if(!(0,n.OP)(e).xhrWrappable)return;try{this.removeOnAbort=new AbortController}catch(e){}let r,i=0;const o=this.ee.get("tracer"),a=(0,B._L)(this.ee),s=(0,B.Lg)(this.ee),c=(0,B.BV)(this.ee),u=(0,B.Kf)(this.ee),d=this.ee.get("events"),f=(0,B.u5)(this.ee),h=(0,B.QU)(this.ee),p=(0,B.Gm)(this.ee);function g(e,t){h.emit("newURL",[""+window.location,t])}function m(){i++,r=window.location.hash,this[be]=(0,D.z)()}function v(){i--,window.location.hash!==r&&g(0,!0);var e=(0,D.z)();this[me]=~~this[me]+e-this[be],this[Ae]=e}function b(e,t){e.on(t,(function(){this[t]=(0,D.z)()}))}this.ee.on(be,m),s.on(ye,m),a.on(ye,m),this.ee.on(Ae,v),s.on(ge,v),a.on(ge,v),this.ee.buffer([be,Ae,"xhr-resolved"],this.featureName),d.buffer([be],this.featureName),c.buffer(["setTimeout"+he,"clearTimeout"+fe,be],this.featureName),u.buffer([be,"new-xhr","send-xhr"+fe],this.featureName),f.buffer([ve+fe,ve+"-done",ve+pe+fe,ve+pe+he],this.featureName),h.buffer(["newURL"],this.featureName),p.buffer([be],this.featureName),s.buffer(["propagate",ye,ge,"executor-err","resolve"+fe],this.featureName),o.buffer([be,"no-"+be],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),b(f,ve+fe),b(f,ve+"-done"),b(a,"new-jsonp"),b(a,"jsonp-end"),b(a,"cb-start"),h.on("pushState-end",g),h.on("replaceState-end",g),window.addEventListener("hashchange",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){g(0,i>1)}),(0,R.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})()})();</script>
<meta property="sailthru.tags" content="tag-china, tag-united-states, tag-joe-biden, tag-xi-jinping" />
<script>var dataLayer = [{"program name":"Renewing America","programName":"Renewing America","keywords":["Joe Biden","Xi Jinping"],"region":["China","United States"],"nodeid_dl":"250609"}];</script>
<style>/* @see https://github.com/aFarkas/lazysizes#broken-image-symbol */.js img.lazyload:not([src]) { visibility: hidden; }/* @see https://github.com/aFarkas/lazysizes#automatically-setting-the-sizes-attribute */.js img.lazyloaded[data-sizes=auto] { display: block; width: 100%; }</style>
<link rel="canonical" href="https://www.cfr.org/event/future-us-china-relations-0" />
<meta name="news_keywords" content="China, United States, Joe Biden, Xi Jinping" />
<link rel="image_src" href="The Future of U.S.-China Relations" />
<meta name="description" content="National Security Advisor Jake Sullivan discusses U.S.-China relations and the Biden administration’s policy priorities for the relationship going forward.This event is co-organized by the 21st Centu…" />
<meta name="keywords" content="China, United States, Joe Biden, Xi Jinping" />
<meta property="og:site_name" content="Council on Foreign Relations" />
<meta property="og:type" content="event" />
<meta property="og:title" content="The Future of U.S.-China Relations" />
<meta property="og:image" content="https://www.cfr.org/sites/default/files/image/2024/01/_KSZ1402-YT.jpg" />
<meta property="og:street_address" content="58 East 68th Street" />
<meta property="og:locality" content="New York" />
<meta property="og:region" content="NY" />
<meta property="og:postal_code" content="10065" />
<meta property="og:country_name" content="USA" />
<meta property="og:phone_number" content="1.212.434.9400" />
<meta property="og:fax_number" content="1.212.434.9800" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@CFR_org" />
<meta name="twitter:image" content="https://www.cfr.org/sites/default/files/image/2024/01/_KSZ1402-YT.jpg" />
<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
<style>div#sliding-popup, div#sliding-popup .eu-cookie-withdraw-banner, .eu-cookie-withdraw-tab {background: #0779bf} div#sliding-popup.eu-cookie-withdraw-wrapper { background: transparent; } #sliding-popup h1, #sliding-popup h2, #sliding-popup h3, #sliding-popup p, #sliding-popup label, #sliding-popup div, .eu-cookie-compliance-more-button, .eu-cookie-compliance-secondary-button, .eu-cookie-withdraw-tab { color: #ffffff;} .eu-cookie-withdraw-tab { border-color: #ffffff;}</style>
<script type="application/ld+json">{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "NewsArticle",
            "headline": "The Future of U.S.-China Relations",
            "name": "The Future of U.S.-China Relations",
            "about": "\u003Ca href=\u0022/asia/china\u0022 hreflang=\u0022en\u0022\u003EChina\u003C/a\u003E, \u003Ca href=\u0022/americas/united-states\u0022 hreflang=\u0022en\u0022\u003EUnited States\u003C/a\u003E, \u003Ca href=\u0022/joe-biden\u0022 hreflang=\u0022en\u0022\u003EJoe Biden\u003C/a\u003E, \u003Ca href=\u0022/xi-jinping\u0022 hreflang=\u0022en\u0022\u003EXi Jinping\u003C/a\u003E",
            "description": "\u003Cp\u003ENational Security Advisor Jake Sullivan discusses U.S.-China relations and the Biden administration’s policy priorities for the relationship going forward.\u003Cbr /\u003E\r\n\u003Cbr /\u003E\r\n\u003Cem\u003EThis event is co-organized by the 21st Century China Center at UC San Diego’s School of Global Policy and Strategy, as part of its annual China Forum.\u003C/em\u003E\u003C/p\u003E",
            "image": {
                "@type": "ImageObject",
                "representativeOfPage": "True",
                "url": "//cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2024/01/_KSZ1402-YT.jpg"
            },
            "datePublished": "2024-01-22T16:26:20-0500",
            "dateModified": "2024-01-22T16:26:20-0500",
            "publisher": {
                "@type": "Organization",
                "name": "Council on Foreign Relations",
                "url": "https://www.cfr.org/",
                "sameAs": [
                    "https://www.facebook.com/councilonforeignrelations",
                    "https://twitter.com/CFR_org",
                    "https://www.youtube.com/user/cfr",
                    "https://www.instagram.com/cfr_org/",
                    "https://www.linkedin.com/company/council-on-foreign-relations"
                ],
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.cfr.org/themes/custom/cfr_theme/src/assets/images/cfr-logo-og.png"
                }
            },
            "mainEntityOfPage": "https://www.cfr.org/event/future-us-china-relations-0",
            "author": {
                "@type": "Person",
                "name": "CFR Editors"
            }
        }
    ]
}</script>
<meta property="og:url" content="https://www.cfr.org/event/future-us-china-relations-0" />
<meta property="og:description" content="National Security Advisor Jake Sullivan discusses U.S.-China relations and the Biden administration’s policy priorities for the relationship going forward.This event is co-organized by the 21st Centu…" />
<meta name="twitter:title" content="The Future of U.S.-China Relations" />
<meta name="twitter:description" content="National Security Advisor Jake Sullivan discusses U.S.-China relations and the Biden administration’s policy priorities for the relationship going forward.This event is co-organized by the 21st Centu…" />
<link rel="icon" href="//cdn.cfr.org/themes/custom/cfr_theme/favicon.ico" type="image/vnd.microsoft.icon" />
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&l='+l:'';j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'';j.async=true;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KFS3NQ');</script>

    <link rel="stylesheet" media="all" href="/sites/default/files/css/css_b2HrcUy4slSDibQ7nVLYfHcMd-NHwgZiL5R6B_qlYe4.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_xJv6l-iIdXj6DqvqRCcYHRrdAKvWsyyxnB58En-Bv8s.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_QtFxAE08-bj-ijGpfVr5V-vyTT2YGXmj9dZ8gPReU-8.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_6_9KuCAhcbKMADJKY4oqbYY_vv9JS-PamLvHF1AnfGQ.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_fOkzb-FNMgdInduBjp_AJOb7RC1UdX8PU6313sbOYOQ.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_Oh4-bgpF2S8v2ZFKGeouO54K1Fxd4gmKypuAHh7HiU0.css" />

    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/250609","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"ajaxPageState":{"libraries":"cfr_chartbeat\/cfr-chartbeat,cfr_homepage_sections\/advanced_autocomplete,cfr_sailthru\/javascript_api_library,cfr_the_heaviest\/datalayerItems,cfr_theme\/alert,cfr_theme\/bg-image-switch,cfr_theme\/card-group,cfr_theme\/global-legacy,cfr_theme\/header,core\/drupal.autocomplete,datalayer\/behaviors,datalayer\/helper,dd_datalayer_tools\/amplitude,dd_datalayer_tools\/createdTime,dd_datalayer_tools\/customDimensionContentType,dd_datalayer_tools\/customDimensionUserCategory,dd_datalayer_tools\/datalayerItems,dd_datalayer_tools\/podcastFinish,dd_datalayer_tools\/podcastStart,dd_datalayer_tools\/postDateRevision,dd_datalayer_tools\/videoFinish,dd_datalayer_tools\/videoStart,eu_cookie_compliance\/eu_cookie_compliance_default,lazy\/lazy,search_autocomplete\/theme.minimal.css,system\/base","theme":"cfr_theme","theme_token":null},"ajaxTrustedUrl":[],"dataLayer":{"defaultLang":"en","languages":{"en":{"id":"en","name":"English","direction":"ltr","weight":0}}},"lazy":{"lazysizes":{"lazyClass":"lazyload","loadedClass":"lazyloaded","loadingClass":"lazyloading","preloadClass":"lazypreload","errorClass":"lazyerror","autosizesClass":"lazyautosizes","srcAttr":"data-src","srcsetAttr":"data-srcset","sizesAttr":"data-sizes","minSize":40,"customMedia":[],"init":true,"expFactor":1.5,"hFac":0.8,"loadMode":2,"loadHidden":true,"ricTimeout":0,"throttleDelay":125,"plugins":[]},"placeholderSrc":"","preferNative":false,"minified":true,"libraryPath":"\/libraries\/lazysizes"},"search_autocomplete":{"header_search":{"source":"\/callback\/search_autocomplete","selector":".main-header__autocomplete","minChars":3,"maxSuggestions":10,"autoSubmit":true,"autoRedirect":true,"theme":"minimal","filters":["keyword"],"noResult":{"group":{"group_id":"no_results"},"label":"Search CFR.org for \u003Cstrong\u003E[search-phrase]\u003C\/strong\u003E.","value":"[search-phrase]","link":""},"moreResults":{"group":{"group_id":"more_results"},"label":"View all results for \u003Cstrong\u003E[search-phrase]\u003C\/strong\u003E.","value":"[search-phrase]","link":""}},"keyword_search":{"source":"\/callback\/search_autocomplete","selector":"#views-exposed-form-site-search-page-1 input.form-text","minChars":3,"maxSuggestions":10,"autoSubmit":true,"autoRedirect":true,"theme":"minimal","filters":["keyword"],"noResult":{"group":{"group_id":"no_results"},"label":"Search CFR.org for \u003Cstrong\u003E[search-phrase]\u003C\/strong\u003E.","value":"[search-phrase]","link":""},"moreResults":{"group":{"group_id":"more_results"},"label":"View all results for \u003Cstrong\u003E[search-phrase]\u003C\/strong\u003E.","value":"[search-phrase]","link":""}}},"eu_cookie_compliance":{"cookie_policy_version":"1.0.0","popup_enabled":true,"popup_agreed_enabled":false,"popup_hide_agreed":false,"popup_clicking_confirmation":false,"popup_scrolling_confirmation":false,"popup_html_info":"\u003Cdiv class=\u0022eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n    \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022\u003E\n      \u003Cp\u003EThis site uses cookies to improve your user experience. By continuing to browse this site you accept the use of cookies as explained in our \u003Ca href=\u0022\/privacy-policy#cookies\u0022\u003EPrivacy Policy\u003C\/a\u003E.\u003C\/p\u003E\n          \u003C\/div\u003E\n\n    \n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n      \u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-secondary-button button-container__btn\u0022 onclick=\u0022dataLayer.push({\u0027event\u0027: \u0027gdpr_accept_cfr\u0027});\u0022\u003EAccept\u003C\/button\u003E\n              \u003Cbutton type=\u0022button\u0022 class=\u0022decline-button eu-cookie-compliance-default-button button-container__btn\u0022 onclick=\u0022dataLayer.push({\u0027event\u0027: \u0027gdpr_decline_cfr\u0027});\u0022\u003EDecline\u003C\/button\u003E\n          \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","use_mobile_message":false,"mobile_popup_html_info":"\u003Cdiv class=\u0022eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n    \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022\u003E\n      \n          \u003C\/div\u003E\n\n    \n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n      \u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-secondary-button button-container__btn\u0022 onclick=\u0022dataLayer.push({\u0027event\u0027: \u0027gdpr_accept_cfr\u0027});\u0022\u003EAccept\u003C\/button\u003E\n              \u003Cbutton type=\u0022button\u0022 class=\u0022decline-button eu-cookie-compliance-default-button button-container__btn\u0022 onclick=\u0022dataLayer.push({\u0027event\u0027: \u0027gdpr_decline_cfr\u0027});\u0022\u003EDecline\u003C\/button\u003E\n          \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","mobile_breakpoint":768,"popup_html_agreed":false,"popup_use_bare_css":false,"popup_height":"auto","popup_width":"100%","popup_delay":1000,"popup_link":"\/report\/protecting-data-privacy-user-friendly-software","popup_link_new_window":true,"popup_position":false,"fixed_top_position":true,"popup_language":"en","store_consent":false,"better_support_for_screen_readers":false,"cookie_name":"cookie-agreed","reload_page":false,"domain":"","domain_all_sites":false,"popup_eu_only_js":true,"cookie_lifetime":100,"cookie_session":0,"set_cookie_session_zero_on_disagree":0,"disagree_do_not_show_popup":false,"method":"opt_in","automatic_cookies_removal":false,"allowed_cookies":"","withdraw_markup":"\u003Cbutton type=\u0022button\u0022 class=\u0022eu-cookie-withdraw-tab\u0022\u003EPrivacy settings\u003C\/button\u003E\n\u003Cdiv role=\u0022alertdialog\u0022 aria-labelledby=\u0022popup-text\u0022 class=\u0022eu-cookie-withdraw-banner\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n    \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022\u003E\n      \u003Ch2\u003EWe use cookies on this site to enhance your user experience\u003C\/h2\u003E\u003Cp\u003EYou have given your consent for us to set cookies.\u003C\/p\u003E\n    \u003C\/div\u003E\n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n      \u003Cbutton type=\u0022button\u0022 class=\u0022eu-cookie-withdraw-button\u0022\u003EWithdraw consent\u003C\/button\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","withdraw_enabled":false,"reload_options":null,"reload_routes_list":"","withdraw_button_on_info_popup":false,"cookie_categories":[],"cookie_categories_details":[],"enable_save_preferences_button":false,"cookie_value_disagreed":"0","cookie_value_agreed_show_thank_you":"1","cookie_value_agreed":"2","containing_element":"body","settings_tab_enabled":false,"open_by_default":true},"dd_datalayer_tools":{"data_layers":{"0":{"type":"bypass"},"Head":[{"type":"open_text","id":"246330","value":"\/\/ Content Text Copied\r\nfunction getSelectionText() {\r\n  var text = \u0027\u0027;\r\n  if (window.getSelection) {\r\n    text = window.getSelection().toString();\r\n  } else if (document.selection \u0026\u0026 document.selection.type != \u0027Control\u0027) {\r\n    text = document.selection.createRange().text;\r\n  }\r\n  \/\/ console.log(text);\r\n  return text;\r\n}\r\ndocument.addEventListener(\u0027copy\u0027, function(e){\r\n  dataLayer.push({\r\n    \u0027event\u0027: \u0027Content Text Copied\u0027,\r\n    \u0027target\u0027: getSelectionText(),\r\n    \u0027nonInteraction\u0027: \u0027False\u0027,\r\n    \u0027contentTextCopiedMetric\u0027: \u00271\u0027\r\n  });\r\n  \/\/ console.log(\u0027Content Text Copied\u0027, dataLayer);\r\n});"},{"type":"open_text","id":"246327","value":"$( document ).ajaxComplete(function( event, request, settings ) {\r\nvar eventLabel = $(document).find(\u0027head title\u0027).text();\r\nvar responseUrl = settings.url;\r\nif((responseUrl.indexOf(\u0022view_name=topic_filters_cards\u0026view_display_id=filters_block\u0022) != -1) ) {\r\n \r\n\tdataLayer.push({\r\n\t\u0027event\u0027 : \u0027Infinate Scroll Article\u0027,\r\n\t\u0027nonInteraction\u0027 : \u0027False\u0027,\r\n\t\u0027infiniteScrollMetric\u0027 : \u00271\u0027\r\n\t});\r\n\r\n}\r\n});"},{"type":"open_text","id":"246326","value":"var currentUrl = location.href;\r\nvar contentRecirculationCount = 1;\r\n$( document ).ajaxComplete(function( event, request, settings ) {\r\n\r\nvar responseText = request.responseText;\r\nif((responseText.indexOf(\u0022cfr-transported-content\u0022) != -1) \u0026\u0026 (responseText.indexOf(\u0022article--blog-post\u0022) != -1)){\r\n    var myStr = request.responseText;\r\n    var strArray = myStr.split(\u0027about=\u0022\u0027);\r\n    var strArray = strArray[1].split(\u0027\u0022 \u0027);\r\n    var newUrl = window.location.protocol + \u0022\/\/\u0022 + location.host + strArray[0];\r\n    var eventLabel = currentUrl + \u0022 to \u0022 + newUrl + \u0022 : \u0022 + contentRecirculationCount + \u0022-\u0022 + (contentRecirculationCount+1); \r\n\tdataLayer.push({\r\n\t\u0027event\u0027 : \u0027GAEvent\u0027,  \u0027Infinite Scroll Next Article\u0027,\r\n\t\u0027nonInteraction\u0027 : \u0027False\u0027,\r\n\t\u0027infiniteScrollMetric\u0027 : \u00271\u0027\r\n\t});\r\n\r\n\tcontentRecirculationCount = contentRecirculationCount + 1;\r\n\tcurrentUrl = newUrl;\r\n}\r\n});"},{"type":"open_text","id":"246325","value":"var scroll_name_array=[];\r\n$(window).bind(\u0027scroll\u0027, function() {\r\n    if($(window).scrollTop() \u003E= $(\u0027.body-content\u0027).offset().top + $(\u0027.body-content\u0027).outerHeight() - window.innerHeight) {\r\n                if(!scroll_name_array.includes(\u0027scroll\u0027)) {\r\n                 scroll_name_array.push(\u0027scroll\u0027);\r\n                    dataLayer.push({\r\n                      \u0027event\u0027 : \u0027Content Bottom Reached\u0027,\r\n                      \u0027source\u0027:  ,\r\n                      \u0027nonInteraction\u0027 : \u0027False\u0027,\r\n                      \u0027contentBottomReachedMetric\u0027 : \u00271\u0027\r\n                    });\r\n                }\r\n    }\r\n});"},{"type":"open_text","id":"231361","value":"function getQueryParams(qs) {\r\nqs = qs.split(\u0022+\u0022).join(\u0022 \u0022);\r\nvar params = {}, tokens, re = \/[?\u0026]?([^=]+)=([^\u0026]*)\/g;\r\nwhile (tokens = re.exec(qs)) {\r\nparams[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);\r\n}\r\nreturn params;\r\n}\r\nvar query_params = getQueryParams(document.location.search);\r\ndataLayer.push(query_params);"},{"type":"open_text","id":"228503","value":"dataLayer.push({\u0027contentGroup2\u0027: \u0027Editorial Text\u0027});"},{"event":"Social Share Click","source":null,"target":null,"custom_values":{"source":null,"target":null},"label":"Social Share Click","type":"Dynamic","id":"246351","domSpecificClassId":".share-kit__icons button.share-kit__hotspot","domSelectElement":"","nonInteraction":"False","triggerElementType":"ajax","eventHandlerType":"click","elementWithClassID":".share-kit__icons button.share-kit__hotspot"},{"event":"Order Print Copy Click","target":null,"source":null,"custom_values":{"target":null,"source":null},"label":"Order Print Copy Click","type":"Dynamic","id":"246350","domSpecificClassId":".article-header__section-bottom a.button-container__btn:contains(Order Print Copy)","domSelectElement":"section","nonInteraction":"False","triggerElementType":"ajax","eventHandlerType":"click","elementWithClassID":"section.article-header__section-bottom a.button-container__btn:contains(Order Print Copy)"},{"event":"Order Paperback Click","source":null,"target":null,"custom_values":{"source":null,"target":null},"label":"Order Paperback Click","type":"Dynamic","id":"246349","domSpecificClassId":".article-header__section-bottom a.button-container__btn:contains(Order Paperback)","domSelectElement":"section","nonInteraction":"False","triggerElementType":"ajax","eventHandlerType":"click","elementWithClassID":"section.article-header__section-bottom a.button-container__btn:contains(Order Paperback)"},{"event":"order e-book click","source":null,"target":null,"custom_values":{"source":null,"target":null},"label":"order e-book click","type":"Dynamic","id":"246348","domSpecificClassId":".article-header__section-bottom button.button-container__btn:contains(Order E-Book)","domSelectElement":"section","nonInteraction":"False","triggerElementType":"ajax","eventHandlerType":"click","elementWithClassID":"section.article-header__section-bottom button.button-container__btn:contains(Order E-Book)"},{"event":"Footer Logo Click","author":"Clarence Thomas","source":null,"target":null,"custom_values":{"author":{"elementWithClassID":".o-article-body .o-article-meta span.f-ui-1 a"},"source":null,"target":null},"label":"Footer Logo Click","type":"Dynamic","id":"246322","domSpecificClassId":" a.main-footer__logo-btn","domSelectElement":"footer","nonInteraction":"False","triggerElementType":"ajax","eventHandlerType":"click","elementWithClassID":"footer a.main-footer__logo-btn"}],"1":{"type":"bypass"}},"custom_variables":[],"cfr_custom_variables":[{"contentType":"Event"},{"eventStartDate":"2024-01-30T23:30:00"},{"eventEndDate":"2024-01-31T01:15:00"}]},"postDateRevision":[{"changedTime":"2024-01-31"}],"customDimensionUserCategory":[{"role":["anonymous"]}],"customDimensionContentType":[{"contentType":"event"}],"createdTime":[{"createdTime":"2024-01-22"}],"bitly":{"username":"cfr1","api_key":"R_4ff4fbef37f644478423e0ab7fe6b9b9","bearer_token":"ba2e7dcca04cb3a5dc9f8112fa2955baba2a4d01","group_guid":"Bacgk5YcLqm","api_url":"https:\/\/api-ssl.bitly.com\/v4\/shorten"},"user":{"uid":0,"permissionsHash":"d73e0f646af72a7d5bb64fe3de46339fae1bfa5dc0530beb76b921973fc32fe5"}}</script>
<script src="/sites/default/files/js/js_Z1IUtc-64rQBZkG1IiMlZ6ecmW__mYXNckDKdBSzgjc.js"></script>

    
    <!-- ChartBeat Analytics -->
    <script type='text/javascript'>var _sf_startpt=(new Date()).getTime()</script>
    <!-- End ChartBeat Analytics -->
  </head>
  <body class="toolbar-themes toolbar-no-tabs toolbar-no-icons toolbar-themes-admin-theme--cfr-admin node-event page--type--event published">
  <div class="body-clip-overflow">

        <a href="#main-content" class="visually-hidden focusable">
      Skip to main content
    </a>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFS3NQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
    

<div class="layout-container">

  <header role="banner">
      <div>
    <div id="block-topicnavigationblock">
  
    
      
                                                                                                                                                                                                                                                                                                                                                                                                            
<header class="main-header main-header--without-msp">
  <div class="main-header__container">
        <div class="main-header__search">
      <div class="main-header__search-container">
        <form action="/search" autocomplete="off" class="main-header__search-form">
          <input type="search" name="keyword" placeholder="What are you searching for?" class="main-header__search-input main-header__autocomplete" />
          <button type="button" class="main-header__search-cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
    <div class="main-header__belt">
      <div class="main-header__belt-container">
        <div class="main-header__branding">
          <a href="/" class="main-header__branding-link">
                  <svg viewBox="0 0 125 60" class="main-header__branding-icon icon-logo-signature" xmlns="http://www.w3.org/2000/svg">
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


<article role="article" about="/event/future-us-china-relations-0" class="msp-event msp-event--past">
  
<header class="msp-event-header-past">
  <div class="msp-event-header-past__container">
    <div class="msp-event-header-past__content">
      <div class="msp-event-header-past__type">
                            Meeting              </div>
      <h1 class="msp-event-header-past__title">The Future of U.S.-China Relations</h1>
              <div class="msp-event-header-past__date">
                      <span class="msp-event-header-past__date-day-of-the-week">Tuesday,</span>
                                <span class="msp-event-header-past__date-format">January 30, 2024</span>
                  </div>
          </div>
      </div>
</header>

  <div class="msp-event-body msp-event-body--theme-grey msp-event-body--main-content">
    <div class="msp-event-body__container">
      <div class="msp-event-body__content">
                  <div class="msp-event-video">
            

 

<div class="video-player  video-player--without-share video-player--without-paused-state video-player--is-youtube video-player--with-poster-image" >
  <video class="video-js vjs-default-skin video-player__video"
     controls              poster="//cdn.cfr.org/sites/default/files/styles/large_xl/public/image/2024/01/_KSZ1402-YT.jpg.webp"         data-setup= '{ "techOrder": ["youtube"],
      "sources": [
        { "type": "video/youtube", "src": "https://www.youtube.com/watch?v=Dy-d2s3JDno"}
      ]
    }'
      >
  
    
    <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>

  

    <button type="button" name="button" class="video-btn" data-parent="video-player">
        <svg viewBox="0 0 25 18" class="icon icon-play icon-video" xmlns="http://www.w3.org/2000/svg">
    <title>Video</title>    
    <g fill="none" fill-rule="evenodd">
        <path class="icon-stroke icon-bg" d="M0 18h25V0H0z"/>
        <path class="icon-fill" d="M9 12.923V6l6.923 3.462z"/>
    </g>
</svg>
  
        <svg viewBox="0 0 25 18" class="icon icon-pause icon-pause" xmlns="http://www.w3.org/2000/svg">
    <title>Pause</title>  
    <g fill="none" fill-rule="evenodd">
        <path class="icon-stroke icon-bg" d="M0 18h25V0H0z"/>
        <path d="M16 6v7h-2V6h2m-4 0v7h-2V6h2" class="icon-fill"/>
    </g>
</svg>
  
</button>
</div>
                          <div class="msp-event-video__caption">
                
                                  <span class="msp-event-video__caption-credit">Kaveh Sardari/CFR</span>
                              </div>
                      </div>
        
                  <div class="msp-event-participants-group-with-cta-buttons ">
  <div class="participants-group">
          <div class="msp-event-participants-group">
        <div class="msp-event-participants-group__title">Speaker</div>
                  <div class="msp-event-participants-group__participant">
            <div class="card-participant ">
  <div class="card-participant__title">
          <a href="https://www.cfr.org/sites/default/files/pdf/Jake%20Sullivan.pdf" target="_blank" class="card-participant__title-link">Jake Sullivan</a>
      </div>
  <div class="card-participant__description"><p><em>Assistant to the President for National Security Affairs</em></p>
</div>
</div>
          </div>
              </div>
          <div class="msp-event-participants-group">
        <div class="msp-event-participants-group__title">Presider</div>
                  <div class="msp-event-participants-group__participant">
            <div class="card-participant ">
  <div class="card-participant__title">
          <a href="https://www.cfr.org/bio/stephen-j-hadley" target="_blank" class="card-participant__title-link">Stephen J. Hadley</a>
      </div>
  <div class="card-participant__description"><p><em>Principal, Rice, Hadley, Gates &amp; Manuel LLC;&nbsp;Former Assistant to the President for National Security Affairs&nbsp;(2005–2009);&nbsp;Member, Board of Directors, Council on Foreign Relations;&nbsp;Co-Chair, China Forum, UC San Diego</em></p>
</div>
</div>
          </div>
              </div>
          <div class="msp-event-participants-group">
        <div class="msp-event-participants-group__title">Introductory Remarks</div>
                  <div class="msp-event-participants-group__participant">
            <div class="card-participant ">
  <div class="card-participant__title">
          <a href="/expert/michael-froman" target="_blank" class="card-participant__title-link">Michael Froman</a>
      </div>
  <div class="card-participant__description"><p><em>President, Council on Foreign Relations</em></p>
</div>
</div>
          </div>
              </div>
      </div>
  </div>
        
                          
            <div class="body-content"><p>National Security Advisor Jake Sullivan discusses U.S.-China relations and the Biden administration’s policy priorities for the relationship going forward.<br /><br /><em>This event is co-organized by the 21st Century China Center at UC San Diego’s School of Global Policy and Strategy, as part of its annual China Forum.</em></p>

<p>FROMAN: Good evening. My name is Mike Froman. I’m president of the Council on Foreign Relations. And it is a distinct honor to welcome you here tonight for the opening of a very important two-day meeting on U.S.-China relations organized by the UC San Diego Forum on U.S.-China Relations, which has become no doubt the premier forum of experts from around the country on China and its relationship with the United States. And thanks for the foresight and the leadership of Susan Shirk—who, by the way, last night in New York was awarded the Arthur Ross Medal for her book—Kurt Campbell, Steve Hadley, Charlene Barshefsky, the forum has really become the go-to event for experts on China.</p>

<p>We’re delighted to cosponsor tonight’s event. And we’re delighted in particular to welcome back to the Council National Security Advisor Jake Sullivan. Jake joins us tonight after twelve hours of back-to-back negotiations with Wang Yi at Central Foreign Affairs Commission in Bangkok this past weekend. These are the first high-level talks since the Biden-Xi summit in November and perhaps some of the most important conversations that have been had around some of the biggest issues, including defusing tension around Taiwan. And this is on top of managing U.S. policy toward two wars and the strike on U.S. soldiers in Jordan—or, in other words, just another weekend for Jake. (Laughter.)</p>

<p>To what can we attribute Jake’s work ethic, his unflappable nature, his remarkable record of success? Clearly, it must have been his internship at the Council on Foreign Relations—(laughter)—where he worked at the right hand of one of my predecessors, Les Gelb. We’re proud to call him a part of the CFR family, even when he calls for an end to seventy-five years of U.S. international economic policy that has been the hallmark of the Council. (Laughter.)</p>

<p>Back in 2019, Jake wrote a piece with Kurt Campbell for a little magazine called <em>Foreign Affairs</em>. He warned against trying to transform China, and instead called for the U.S. to establish, quote, “favorable terms of coexistence” with Beijing across military, economic, and political issues. And we see those ideas enshrined in U.S. policy—cooperating where we can, managing conflict where we must, and competing where we should. And that approach has paid dividends: mil-to-mil communications have resumed, cooperation on fentanyl, progress on climate, momentum for COP-28, and discussions of artificial intelligence.</p>

<p>Jake, Kurt, and their teams have done a remarkable job of consolidating the U.S. approach to China under a clear, united, and intellectually rigorous framework, and now that bilateral relations have stabilized there’s an opportunity to step back and ask some tough questions.</p>

<p>For starters, there’s a feverish consensus of—on the nature of the China challenge but less clarity on where we’re heading with the relationship. As Jake warned in that 2019 article, a failure to connect competitive means to clear ends will allow U.S. policy to drift towards competition for competition’s sake and then fall into a dangerous cycle of confrontation.</p>

<p>Jake, clearly, should be careful what he writes for <em>Foreign Affairs</em>. (Laughter.) What are the clear ends that we’re trying to achieve? To what degree does China now buy into our cooperation-conflict management-competition paradigm and what is the new equilibrium we seek to establish with China?</p>

<p>These are some of the big questions that are being looked at including here at the Council and we welcome all of your participation in that work, going forward, that is, if Jake doesn’t provide the definitive answers tonight.</p>

<p>And who better to elicit those answers than Steve Hadley, one of the leaders of the U.S.-China Forum, a member of CFR’s board of directors, and one of Jake’s predecessors as national security adviser who has spent much of his life wrestling with these and other difficult questions?</p>

<p>I very much look forward to the conversation. But, first, let me invite Jake Sullivan to the podium to share his thoughts. (Applause.)</p>

<p>SULLIVAN: At least I had the bravery to give that speech at Brookings rather than at CFR. (Laughter.)</p>

<p>So, Mike, I want to say thank you for having me back at CFR, and to Susan and Kurt and Charlene and Steve, thank you for having me back at the UCSD China Forum which I’ve had the privilege of actually attending since its inauguration. I would say San Diego in January is a little nicer than D.C. in January but we’ll make do here.</p>

<p>My aim today is not to try to unveil a new China strategy but something more straightforward, to share with you behind the curtain how we’ve tried to implement our strategy over the last three years and then what we might expect here in 2024, and in the course of that without directly answering the questions Mike has posed perhaps provide a little grist for the mill that can help over the next couple of days as you grapple with these very difficult questions.</p>

<p>I want to start by taking a step back. Before serving in the Biden administration many of us who are now in government, including myself and Kurt and others, we’re revisiting the assumptions behind our long-standing China policy in writing and in conferences like this one, and once in government we immersed ourselves in the latest intelligence, expertise, and analysis.</p>

<p>We determined that the PRC was the only state with both the intent to reshape the international order and the economic, diplomatic, military, and technological power to do it. We saw that the PRC sought to, quote, “catch up and surpass” the United States in high technology, that it was pursuing the largest peacetime military buildup in history, and that it was more repressive at home and more assertive abroad including in the South and East China Seas as well as the Taiwan Strait.</p>

<p>We saw the PRC working to make the world more dependent on China while reducing its own dependence on the world and we saw it taking steps to adapt the international system to accommodate its own system and preferences.</p>

<p>We also saw something that really stood out, which is that the PRC believed the United States was in terminal decline, that our industrial base had been hollowed out, that our commitment to our allies and partners had been undercut, that the United States was struggling to manage a once in a century pandemic, and that many in Beijing were openly proclaiming that, quote, “the East was rising and the West was falling.”</p>

<p>When we came into office we inherited an approach from the previous administration that had updated the diagnosis of the scope and nature of the China challenge but did not adequately develop the strategy and tools to address it.</p>

<p>That approach was at times more confrontational than competitive and too often undervalued the allies and partners critical to sustaining an effective China strategy. Well, we did not want to return to an earlier approach with the PRC, one based on more optimistic assumptions about its trajectory and that sometimes prioritized avoiding friction over pursuing the American national interest. So we’ve developed our own approach, which Secretary Blinken laid out in a speech a couple of years ago—invest, align, compete—that sought to strengthen our competitive position and secure our interests and values, while carefully managing this vital relationship.</p>

<p>And over the past three years, we’ve implemented that approach. We’ve made far-reaching investments in the Foundation of American Strength at Home, with historic legislation on infrastructure, chips and science, and clean energy, all while addressing the PRC’s non-market practices, and taking steps to ensure that the United States would lead in the sources of technological and economic growth.</p>

<p>We believe our approach has generated results. Large-scale investments in semiconductor and clean energy production in the United States are up twenty-fold since 2019. Construction spending on new manufacturing projects has already doubled. And looking out over the next decade, we’re estimating $3.5 trillion in new public and private investment, unlocked by the investments made in the—in the historic legislation I just referenced.</p>

<p>Abroad, we’ve tried to strengthen our ties with Indo-Pacific allies and partners in ways that would have been unlikely, even inconceivable, a few years ago. We launched AUKUS. We elevated the Quad. We upgrade our relationship with Vietnam and the Philippines, India, Indonesia, and others. We launched a historic trilateral with Japan and the Republic of Korea, that culminated in a historic summit that President Biden hosted at Camp David. We held summits, multiple summits, with the leaders of the Pacific Islands, as well as with ASEAN.</p>

<p>Our regional allies and partners, for their part, are betting on American economic vitality. They’ve announced almost $200 billion of investments into the United States since the start of the administration.</p>

<p>We’ve also worked to connect our European and Indo-Pacific alliances, and together with our G-7 partners, we’ve aligned on collective steps to de-risk our economies, and diversify away from strategic dependencies, rather than decoupling. And alongside our allies and partners, we’ve stressed the importance of maintaining peace and stability across the Taiwan Strait.</p>

<p>We’ve also worked hard to ensure that advanced and sensitive technologies our companies are developing do not become a source of vulnerability. We implemented carefully tailored export restrictions on key technologies, focused on advanced semiconductor manufacturing tools—a topic, by the way, that was central to one of the earlier UCSD forums, when I first really got immersed in this question of semiconductor manufacturing equipment—supercomputing capabilities, and the most advanced chips, critical to military modernization.</p>

<p>We also took steps to regulate outbound investments of concern in technology, and to strengthen CFIUS’ focus on critical technologies, to make sure inbound investment actually addresses evolving national security challenges—the screening regime for inbound investment. These steps are not about protectionism, and they’re not about holding anybody back. They are critical for our national security over the long run.</p>

<p>Now, the backdrop to these actions was the strongest post-pandemic recovery, and among the lowest inflation of any leading economy in the world. For years, economists were predicting that the PRC would overtake the United States in GDP either in this decade, or the next. Now, those projections are moving further and further out. And with the PRC facing its own set of challenges, some say that moment may never come. And this brings me to a critical point: America, in this moment, is once more showing its capacity for resilience and reinvention.</p>

<p>But this is not the whole story, and that's what’s really critical about the remarks I want to give today. As we took these steps to improve our competitive position, we aim to do so in a way that builds stability into one of the world’s most consequential relationships, perhaps the world’s most consequential relationship. And in fact, we believe our investments at home, and our work to deepen ties with allies and partners abroad, actually created the conditions for more effective diplomacy with the PRC.</p>

<p>A sustainable China policy is about holding in one’s head multiple truths at the same time, and working iteratively to reconcile them. We are clear-eyed about the competitive structural dynamics in our relationship with the PRC. But we are also keenly aware that the United States and the PRC are economically interdependent, and share interests in addressing transnational problems, and reducing the risk of conflict.</p>

<p>We realize that efforts—implied or explicit—to shape or change the PRC over several decades did not succeed. We expect that the PRC will be a major player on the world stage for the foreseeable future. That means that even as we compete, we have to find ways to live alongside one another.</p>

<p>Competition with the PRC does not have to lead to conflict, confrontation, or a new Cold War. The United States can take steps to advance its interests and values and those of its allies and partners, on the one hand, while responsibly managing competition on the other. Being able to do both of those things is at the heart of our approach. And, in fact, the United States has decades of experience talking to and even working with our competitors when our interests call for it.</p>

<p>Over the last year, we’ve called on that experience. And while, quote, managing competition can feel like an abstract slogan, the best way to understand how it translates into action is to zoom in on 2023.</p>

<p>The year began with the relationship at a historic low point. A year ago this week, a Chinese spy balloon traveled across the United States. We were and remain deeply concerned about the PRC providing Russia with lethal aid in its invasion of Ukraine. And after historic and unprecedented—and not historic in a positive sense—PRC military exercises in August of 2022, it seemed a series of cross-strait crises loomed over the horizon.</p>

<p>All of this set back the progress from the Bali summit between President Biden and President Xi. High-level communication halted, to say nothing of military-to-military ties or cooperation on counternarcotics or climate, all of which the PRC had frozen.</p>

<p>We set out to stabilize the relationship without sacrificing our capacity to strengthen our alliances, compete vigorously, and defend our interests. Beginning in May of last year, we launched a period of intensive diplomacy. It was an all-hands-on-deck effort across the Cabinet, spanning the full range of our relationship with the PRC.</p>

<p>The goal was not to paper over our differences. Our aim instead was to address misperceptions and miscommunication, to avoid major surprises, to reopen defunct channels, and to more clearly signal to each other about our respective positions and interests. And we sought to increase not just the quantity but the quality of our communication.</p>

<p>In May I spent two days with Director Wang Yi in Vienna to help restore some normalcy to the relationship. In Vienna we reached consensus on a rough roadmap for high-level engagement to carry out the agenda that President Biden and President Xi had set forward in Bali, one both sides hoped at that time would ultimately culminate in a leader-level meeting in San Francisco at APEC later in the year.</p>

<p>In the months that followed, we held a series of critical meetings. In June, Secretary Blinken traveled to Beijing and met with President Xi and senior foreign-policy officials, working to stabilize after a period of tension. In July, Secretary Yellen traveled to Beijing to build relationships with the PRC’s new economic leadership.</p>

<p>In that same month, Special Envoy for Climate John Kerry traveled to reopen climate channels that had stalled for months. Then in August, Secretary Raimondo visited the PRC to advance our commercial ties and underscore our commitment to protect critical technologies with national-security implications without severing the economic relationship between the U.S. and China.</p>

<p>Critics said at the time that this travel was one-sided. But our strategy was to use those meetings to open up a two-way flow of exchanges, and that’s exactly what happened. This intensive diplomacy was about managing tough issues rather than patching up the relationship. We were direct about our differences, including PRC’s support for Russia’s war against Ukraine and cross-strait issues.</p>

<p>We did not pull back from national-security-focused measures like restrictions on outbound investment and updates to our export controls. Instead we used these meetings as opportunities to explain what these measures were, but, almost as importantly, what they were not, which was, you know, an attempt to undermine the PRC’s prosperity and development. That is not what those measures were, and we explained that clearly to our counterparts in these sessions.</p>

<p>We also used these meetings to find space to coordinate on issues where our interests overlapped. In September, Director Wang Yi and I met in Malta for another round of meetings. We charted the course for a leader meeting in San Francisco and laid out what we hope to accomplish on issues like counternarcotics and mil-mil channels.</p>

<p>Over the following weeks, Majority Leader Schumer led a bipartisan delegation to the PRC, and the PRC sent a stream of officials to the United States, including the vice president, the vice premier, and Director Wang Yi, who came for two days of meetings with Secretary Blinken and myself. And all of this culminated, as you heard from Mike, in the meeting, the summit between President Biden and President Xi in Woodside, California, which saw progress on three major issues.</p>

<p>First, President Biden and President Xi restarted counternarcotics cooperation. Since then we’ve seen Beijing take initial steps to stem the flow of precursor chemicals used to make fentanyl, progress that we hope and need to see continue. The first Interagency Counternarcotics Working Group between the U.S. and the PRC met today in Beijing, and our aim is to open up law-enforcement cooperation on fighting this terrible drug.</p>

<p>Second, President Biden and President Xi announced the resumption of military-to-military communication that had been frozen for more than a year. The chairman of our Joint Chiefs of Staff has now spoken with his counterpart, and we’ve restored a number of critical operator-level mechanisms.</p>

<p>The question now is whether that will continue even in the face of future turbulence. We, for our part, will continue to make the case that military-to-military communication is critical at all times, but especially in times of tension.</p>

<p>And third, the Woodside summit saw our leaders announce a new dialogue aimed at managing the risks of artificial intelligence, which will start in the spring. As Mike mentioned, this past weekend I met with Director Wang Yi in Bangkok to follow up on the Woodside summit and to advance efforts in each of these three areas.</p>

<p>Detailed, dogged diplomacy is necessary to manage the friction that is endemic to a strategic competition between two major powers. Some risks to that effort may be unforeseeable; maybe surprises. Other risks are more recognizable, including friction in the South and East China Sea and economic and technology moves and countermoves.</p>

<p>The most significant risk would be a crisis in the Taiwan Strait, especially given Beijing’s increased miliary activity in and around its air and waters. Here, too, intensive diplomacy matters. Just a few weeks ago, Taiwan held historic elections without any major cross-strait incident, in part because all sides—Washington, Beijing, and Taipei—worked to reduce miscommunication and misperception about their respective intentions.</p>

<p>That is an outcome that few may have foreseen in August of 2022, when most expected the cross-strait situation to grow more tense, not less. But it’s no guarantee of future trends, and the risk remains real. So we have to keep working at this by intensifying both diplomacy and deterrence.</p>

<p>Over the next year, as we have for the last three, we’ll continue to take action on human-rights abuses, forced labor, and nonproliferation. We’ll be vigilant about the PRC’s support for Russia’s war against Ukraine and its efforts to help Russia reconstitute its defense-industrial base. And we’ll take necessary measures to respond. If PRC provocations continue in the South and East China Seas and the Taiwan Strait, we’ll work closely with allies and partners to push back and speak out about the risks to peace and stability in the world’s most important waterways.</p>

<p>We’ll continue to uphold freedom of navigation in the region by flying, sailing, and operating wherever international law allows. And we’ll continue to pursue tailored national-security measures designed to protect our national security. And even as we do so, we’ll aim to continue the pace of intensive interaction with the PRC that has helped both sides manage areas of difference and unlock cooperation on areas where our interests align.</p>

<p>We’re not planning to recreate the now-outdated structures and mechanisms from an earlier period in the bilateral relationship. And we’re definitely not interested in dialogue just for dialogue’s sake. But we do see value in launching and shepherding a select number of working-level consultations in discrete, carefully chosen areas to advance our interests and achieve results. That’s the approach we use today on counternarcotics, an approach rooted in the here and now rather than in the nostalgia of the past.</p>

<p>In the period ahead, we hope we can work with the PRC to deepen crisis-communication mechanisms to reduce the risk of conflict. We’re ready to coordinate on climate, health security, global macroeconomic stability, and new challenges like the risks posed by artificial intelligence.</p>

<p>We’ll also talk to Beijing about challenging regional and global issues from the Red Sea to the Korean Peninsula. And we’ll work to advance progress on a range of bilateral issues too, including people-to-people ties.</p>

<p>Let me conclude by noting that none of this will be easy, and there will be times of tension. That’s inevitable in a competition like this that is simply not going to resolve in a neat and decisive end state. And as I noted, one thing is certain. There will be surprises along the way.</p>

<p>We’ll keep working to manage the competition, as we have over the last year. We’ll continue to invest in our strength at home and to deepen our global networks of alliances and partnerships abroad.</p>

<p>The approach I’m describing to you is not some big strategic shift. It’s an effort we began building from the day we came into office. It’s also not something new to American statecraft; far from it. It’s an approach that is itself uniquely American and rooted in decades of history, diplomacy, and hard-won experience. It’s also rooted in bipartisanship, because when the United States deals in a strategic competition from a position of strong bipartisan support, of all pulling together in service of the country, we always come out stronger for it.</p>

<p>So we intend to stick with this strategy. We intend to do what we need to do to protect our interests and defend our allies, while at the same time effectively managing competition with China to the good not just of the United States, but to the good of global stability as well. That is our commitment. That’s what we’ve tried to do. And today my goal was simply to walk you through how we’ve tried to execute that in practice so we can get beyond the—you know, the kind of broad slogans and down to the actual day-to-day hard work that an incredible team of people across the entire U.S. government, both career and appointed, have been working. And we’ve done so, I must say looking around this room, with the support and advice of a huge number of people here from both parties, from the private sector and the public sector, and across a range of walks of life. And that is the only way we’re going to continue to succeed in this effort as we go forward.</p>

<p>So thank you for giving me the opportunity to speak today, and I look forward to the conversation. (Applause.)</p>

<p>HADLEY: So, Jake, thank you for being with us. Thank you for your remarks. I think we’re all much better informed about what you’ve been building in terms of China policy and the successes that you’ve had.</p>

<p>What we’re going to do is I’m going to ask three or four questions to Jake up here, and then we’re going to turn to the audience to take questions from you. This is all on the record and we will try to end promptly at 7:45, and then we’ll proceed with the rest of the activities of the evening.</p>

<p>Let me begin by asking you if—what, if anything, you would feel comfortable telling us about your recent meeting with Chinese Foreign Minister Wang Yi in Thailand. Any great breakthroughs to report here tonight? Any news you want to make before the assembled multitude?</p>

<p>SULLIVAN: Well, first, we had a very nice meal, so that was good. (Laughter.)</p>

<p>You know, this is my third extended round of conversations with Wang Yi—the first in Vienna, the second in Malta, and then—and then this on in Bangkok. And with each successive round, I think we have increasingly gotten to the point of setting aside the talking points and really having strategic conversations.</p>

<p>In terms of next steps, the main things coming out of the meeting were actually to, you know, kind of fix the launch of this AI dialogue where the U.S. and China will work together to manage risk, and that will get going this spring. So we talked through what the elements of that would look like.</p>

<p>Second, we had the opportunity to go deep on cross-strait issues and to share our respective positions. And I’ll be cautious; as you know very well, this is littered with landmines to speak about publicly, and also I want to respect the discretion of the channel. But I think it was a very useful, direct, and candid set of conversations on that topic.</p>

<p>And then we, obviously, also had the opportunity to talk about current events—current events in the Red Sea, current events on the Korean Peninsula, concerns that we have about instability in both places. And I would say the quality and character of those conversations, and a rather direct and in some ways intensive conversation about the war in Ukraine, I think helped both of us leave feeling that we didn’t agree or see eye to eye on everything, but that there was a lot of work to carry forward.</p>

<p>Last point I would make. We agreed that President Biden and President Xi should speak, and should speak by telephone relatively soon. And I think the acknowledgement coming out of Woodside that there really is no substitute for leader-to-leader conversation, I mean, it became so apparent over the course of that meeting at Woodside how central that ingredient has to be to an effective stewardship of U.S.-China policy. And so both of us agreed that we would report back to our leaders and we would get them on the phone sooner rather than later.</p>

<p>HADLEY: Great. Let me ask you, on the Taiwan question they’ve recently, of course, had elections in Taiwan. A lot of commentary by some of the people in this room about the significance of those elections. How do you see them and what impact do you think the results might have on our ability to manage the cross-strait relations?</p>

<p>SULLIVAN: Well, you know, we were explicit and direct publicly and privately with all stakeholders that we were not taking a position in those elections. We remained studiously neutral throughout. We congratulated the winner. We congratulated Tsai Ing-wen on, you know, an effective democratic election and now, you know, we’ve made clear we would like to see a smooth transition.</p>

<p>And otherwise, from the United States’ perspective Taiwan exhibiting this vibrant democratic character is a positive thing and our policy remains constant through it. As it was before it will be going forward—the “One China” policy, the Taiwan Relations Act, the Six Assurances, and all of the issues the people in this room know so well.</p>

<p>And President Biden has been clear that, you know, we’ve remained committed to the “One China” policy and I was clear on that with Wang Yi as well.</p>

<p>It was also clear that we continue to have concerns about elevated levels of aggressive military activity around the strait. We don’t regard that as conducive to peace and stability and we generally want to see, as I think the rest of the world does, peace and stability across the Taiwan Strait and we are committed to doing everything we can to support that.</p>

<p>HADLEY: Thank you.</p>

<p>I want to ask a little bit about the Chinese economy. There’s a lot that has been written about the structural problems of the economy, a lot of speculation that the administration in Beijing has neither the ability nor the willingness to address those underlying structural problems, and a fairly gloomy view about the prospects for the Chinese economy.</p>

<p>And I wonder whether that negative—whether that narrative is too negative and I’d ask you how you see the prospects of the economy and the ability and willingness of Xi and his team to address some of the structural problems that we all know about in terms of the real estate sector indebtedness and all the rest.</p>

<p>SULLIVAN: You know, in the last couple of times I’ve went to the UCSD China Forum—it was before I came into government—I made a habit of going up to the smartest people I know on China and on economics and buttonholing them and saying, tell me about the economy in China, and I would hear a kind of general answer from one and I would think, OK, that’s the answer. And then I would talk to someone else and they would have quite a different answer.</p>

<p>And the spectrum of opinion on whether China’s economy among incredibly informed, like, right-thinking people is quite broad and so I’m humble enough to not really be able to characterize the likely future trajectory of that economy because I think if you had asked people that question two years ago they might have a different answer than they have today.</p>

<p>Frankly, if you ask people about the U.S. economy one year ago versus where they are today people would have a different answer. So what we’re focused on fundamentally is thinking about what we can do to invest in the sources of our own strength here in the United States, and I talked about that some in my speech.</p>

<p>And we kind of reject the—what I believe was a kind of common view that somehow, you know, it was a story of inexorable rise on the one side and inexorable decline on the other side. Choices matter in both Beijing and Washington. We’re trying to make the right choices and, of course, it’s up to Beijing how they choose to make choices on their side.</p>

<p>How’s that for not really answering your question? (Laughter.)</p>

<p>HADLEY: It’s good. You know—</p>

<p>SULLIVAN: I’m learning from Tony Blinken how to hit diplomat. (Laughter.)</p>

<p>HADLEY: I’m going to go off script for a minute and ask one question about how you frame the policy because you make clear that our goal is not to hold back or undermine the Chinese economy. That’s not the objective of what we’re doing. We’re doing things to protect our own national security interests.</p>

<p>But don’t we have to be candid with China that some of the things we are doing to protect our own national security interests are actually having an adverse and will have an adverse effect on the Chinese economy, will have an adverse effect on our economy in terms of economic growth and the like?</p>

<p>Have we been candid enough with the Chinese about what it is we’re doing, why we’re doing it, and what impact it’s going to have on China?</p>

<p>SULLIVAN: I mean, one thing that we really tried to embark on, and I alluded to this in my speech a year ago, was to be much more direct and transparent about what the nature of the measures we were undertaking both were and would be because we were telegraphing to them as well this is where we are going on outbound investment or on updates to semiconductor export controls.</p>

<p>This is why we’re doing it, this is how we’ve tailored it, this is the rigorous process we put in place, and this is the rationale and then heard their response to that, and Wang Yi and I had an opportunity in Bangkok to talk about how each of us, China and the United States, see the boundary between economics and national security.</p>

<p>And, obviously, we don’t have completely converging perspectives on that question but I think it’s really important to recognize that for a very long time the PRC has taken measures on explicit grounds of national security that have had an adverse impact on American workers, American businesses, the American economy.</p>

<p>And so this cannot be a one-way street of a conversation. You know, China will come to the table with its concerns about what the United States is doing and the United States has an obligation on behalf of its citizens to come to the table with our concerns about what China has been doing for quite a long time, and I certainly came to the table prepared to do that when we were in Bangkok.</p>

<p>HADLEY: I’m going to give you one more chance to make some news. (Laughter.) Should we—on this issue of technology in particular should we expect further steps by the Biden administration to de-risk the U.S. economy from its over dependence on China and in what areas are we like to see further action?</p>

<p>SULLIVAN: So, first, to answer your question, I probably won’t make news. I just want to take a minute on what we mean by de-risking and in fact I’ve said this directly to my Chinese counterparts. It basically has three elements.</p>

<p>First, investing in America’s industrial and innovation capacity. A big way to de-risk is to have more capacity ourselves to be able to, you know, operate at the technological innovation edge.</p>

<p>The second is to diversify supply chains so that we’re not dependent on any single point of failure. And that’s not all about China. That’s a lesson we learned from COVID. But the PRC is a part of that.</p>

<p>And the third is to have a series of tailored measures so that American technology cannot be used to undermine the security of the United States and our allies and in this category we have been transparent, that we’ve taken a series of steps already and we will take further steps as we go forward, all according to the basic principle that we are going to tailor them and target them in a way that they really are aimed at our national security concerns and not at a broader effort to decouple our technological ecosystems or our economies. But I will leave for a later day what exactly the nature and timetable of additional measures will be.</p>

<p>One more thing I will say is in October of 2022 we did a first round of export controls on advanced semiconductors and semiconductor manufacturing equipment. In October of 2023 we updated them.</p>

<p>I think the world can expect that will be part of the process, going forward, because as the technology evolves our controls have to evolve. It doesn’t mean the standards underlying our controls evolve. Those remain constant.</p>

<p>But they have to be applied to technology as it advances and that will require updates to existing controls even as we add, you know, targeted tailored controls in other areas as well.</p>

<p>HADLEY: If I were a man from Mars coming down I would say listening to you and observing the relationship that these two countries are trying to maintain some stability in the relationship and have made some tactical shifts.</p>

<p>But strategically China is continuing with a series of policies they’ve been pursuing for some time; and the Biden administration is going to continue, as you just suggested, with the policies done. There seem to be a lot of centrifugal forces pulling at this relationship, and that’s before you get to the United States Congress. Can you really keep it kluged together? What’s the way to keep it kluged together—</p>

<p>SULLIVAN: Look, it’s a fair question. And, obviously, we’ve gone through periods of considerable tension even during President Biden’s tenure.</p>

<p>But he is determined to hold these two things in his head at the same time, as I said before, that yes, there are structural competitive dynamics in the relationship and we should be clear eyed about that and we should look at that—stare at that square in the face.</p>

<p>And on the other hand we have an obligation for our own national interest to ensure that that competition does not veer into conflict, that we manage it to a point of stability, and that we also find areas where we can work together where our interests align.</p>

<p>Now, that recipe is, I think, relatively easily distilled in words. It is harder to put into action and it requires a level of intense diplomacy of the kind I really tried to walk through in my speech and care—you know—you know, basically constant gardening. And even then, whether foreseen or unforeseen, risks and tensions could boil over. We cannot—we cannot deny that. But it is—you know, we don’t have to be fatalistic about it, either. Our job is to try to understand, in a clear-eyed way, what those risks and inherent tensions are, and do our very best to manage them, without compromising on our fundamental values, and without walking away from the defense of the American national interests, and the interests of our allies and partners.</p>

<p>And part of the reason that I tried to give these remarks in more of a way of, like, let’s actually just talk about 2023, and what we did through the year, is it’s—there’s a lot of aphorisms in the U.S.-China relationship. Manage competition, and you know, invest, align, compete. At the end of the day, it really comes down to a set of actions that we take—here, domestically—a set of investments we make in our allies and partners, and then just direct, dogged diplomacy with China, built on the proposition that, yes, we’re going to compete, but we also are going to inhabit the same planet. And we have to work together to ensure that we don’t end up tipping over into conflict.</p>

<p>That’s what this is about. It doesn’t really reduce to a bumper sticker. But I think it’s a kind of common-sense strategy that can secure bipartisan support, and that people—if you kind of look at American attitudes on the PRC, I think that’s basically where the American people are. They want us to be tough, and stand up for our interests, and push back against aggression or actions that harm Americans. But they also are not looking for war. And so that’s what we’re trying to work towards.</p>

<p>HADLEY: Last quick question from me.</p>

<p>We have a session tomorrow on the China Forum about internal political situation in China, both its resilience and its fragility in its political system. Anything you want to say about that, in terms of how you—</p>

<p>SULLIVAN: No. (Laughter.) I will refer you to—you know, to Beijing to comment on its political—</p>

<p>HADLEY: So we’ll all have to tune into the session tomorrow—(laughter)—I think, as Jake is deferring to that.</p>

<p>Let’s go to the audience, if we can. I want to remind everybody this is an on-the-record session, and I’d like to invite folks from the audience to engage in this—in this conversation. So please raise your hand and I will call on you. Let’s start with this gentleman here.</p>

<p>Q: Thank you very much. My name is Marc Rotenberg. I’m with the Center for AI and Digital Policy.</p>

<p>And you talked about artificial intelligence in your remarks. I wanted to begin by saying, I think it was very good that China participated in the U.K. AI summit. That was not originally anticipated. But clearly, as you said, it’s important to maintain a discussion about the risk of AI in warfare.</p>

<p>But at the same time, there are also clearly two different forms of government, and AI can support an open and pluralist government, or AI can support a more closed, constrained form of government. And it seems to me that there is a policy debate playing out right now, regarding the governance of AI, and frankly, some concerns about the U.S. position.</p>

<p>So, presently at the Council of Europe, a treaty on AI is being negotiated. The mandate of the Council of Europe is to promote fundamental rights, democratic institutions, and the rule of law. And many of our democratic allies are looking for a robust treaty that safeguards fundamental rights in the sphere of AI. Concerns have been expressed about the U.S. position, and my question is, will the U.S. government support a robust treaty on AI that safeguards fundamental rights?</p>

<p>SULLIVAN: So, we have been very actively engaged in the negotiations over the treaty at the Council of Europe, because our basic vision for the governance of AI is rooted in the idea of the protection of fundamental rights, and the empowerment of people, lifting them up, rather than holding them down. And we do have a very different vision of AI governments than the PRC does, which is why our dialogue with them will really vector in on our kind of responsibility, as significant countries and major AI players, to manage the risks of AI as we go forward.</p>

<p>And we’ve put forward voluntary standards, that we’ve gotten some of the biggest AI players in the world to sign up to. We’ve issued an executive order that reflects many of the core values and principles that are at the heart of your question. Where things ultimately land on the treaty in the Council of Europe is not going to be whether the U.S. is for or against a treaty that is strong on fundamental rights; it’ll be on more specific provisions that may cut across particular interests we have.</p>

<p>So, I can’t predict how that treaty negotiation will turn out. But I can tell you that however it turns out, it will—the United States’ basic commitment to this broader vision—which we have articulated ourselves, and have now begun infusing in international institutions, including an effort at the U.N. General Assembly, to have a resolution on AI—that work will be active. And the United States will play a leadership role in it.</p>

<p>Q: Thank you.</p>

<p>HADLEY: Yes, ma’am.</p>

<p>Q: Hi, thank you so much for being with us—with us today. I am Wafa Ben Hassine. I am at the Omidyar Network. I am also a UC San Diego alum, political science, so thank you to the CFR for bringing San Diego to us, even if we couldn’t be there.</p>

<p>My question actually takes us to a different geography, in Africa. We see China—moving beyond the Belt and Road Initiative and the Digital Silk Road, we see them have relatively nuanced interventions in how they attempt to influence policy, such as by—by way of example—supplying Huawei phones to all sorts of nonprofits and independent media groups and outlets. I’m curious if you could illuminate a little bit about the U.S.’s positioning in Africa, and how we would potentially like to secure our national security, and also promote human rights in Africa, in response to these types of interventions. Thank you.</p>

<p>SULLIVAN: So, first, my sister is actually a UCSD alum as well. She went to UCSD Medical School. So I got to hang out there with her. It’s a beautiful campus, a wonderful place to go to school.</p>

<p>One thing that Kurt and I wrote in our <em>Foreign Affairs</em> piece in 2019, that I have felt, like, really important to keep us disciplined in this, is that we cannot treat the rest of the world as proxy battlegrounds, the way that, I think, the U.S. and the Soviet Union too often did during the Cold War. So, looking at Africa, our question should not be, how do we gain relative advantage over China in this country, because that becomes a warping and distorting factor, that frankly, in a way, can also undermine our overall position.</p>

<p>So, the question we pose instead is, how do we offer a better value proposition? And I would say, one of the areas that, frankly, is a gap that we are trying to fill now, quite actively, is mobilization of capital for investment in the things that African countries are looking for, for their development, in infrastructure, in clean energy, in digital.</p>

<p>And that’s about money. And it’s about public sector money, leveraging private sector dollars, by buying down political risk, currency risk. And we have worked very closely with the new head of the World Bank—who President Biden, you know, played an active role in helping get into the job, Ajay Banga—in trying to expand the World Bank’s capacity to do this. We’ve worked with the G-7 through PGI, the Project on Global Infrastructure Investment, to do this. And we’re increasingly looking to work on a bipartisan basis with the Congress, to try to have the resources necessary to unlock these kinds of investments.</p>

<p>Because you can’t beat something with nothing. China is coming with a substantial amount of capital, and also, as you said, other tools to be able to bring to bear. And for the United States, our view should not be—you know, in any given country, you know, which is the way we get a one-up. It should be, how do we actually show up, and offer something that will respond to the legitimate development needs of that country?</p>

<p>And I think I would grade us as incomplete on this. It’s work that we have begun to do quite actively in this administration, and we have a lot more work to do. That’s going to require Congress working with us to unlock some of these resources that in turn, can unlock a much larger share of resources from the private sector to deliver the value proposition we want to deliver.</p>

<p>HADLEY: Dan Rosen.</p>

<p>SULLIVAN: Dan can talk about the Chinese economy. (Laughter.)</p>

<p>Q: But people have heard enough of me talk about it, Jake.</p>

<p>So, that’s where I want to circle back to. So, you come to the conference, and one economist thinks one thing; another, another. But isn’t that true of political scientists and security experts out here too, that you’re going to have a whole spectrum? And to fight a—to wage a systemic competition, don’t you have to come down to a sort of point of view about how their economic system is doing in order to figure out how well we’re performing in that competition? And while there’s probably diversity here in the audience, I hope within USG you guys manage to come to a net assessment about how that Chinese economic system is performing.</p>

<p>SULLIVAN: So, first, you’ve just completely exploded my artful job of Steve’s question—(laughter)—so I appreciate that.</p>

<p>Second, in fact, Dan—</p>

<p>HADLEY: (Inaudible.)</p>

<p>SULLIVAN: In fact, as Dan knows, we brought in a group of experts who have immersed themselves in the Chinese economy to the White House maybe it was a year ago or so, and there was a diversity of opinions among that group, you know, with quite, quite sharp disagreements.</p>

<p>First, I would say there is a bit of a difference. I don’t find the diversity of opinion on just basic underlying strategic diagnosis. There’s a lot of debate about what we should do about it on the political and security side, less spectrum on kind of what are we dealing with, what are we looking at, though there is some.</p>

<p>Secondly, yes, we do need to have an operating assumption. But I think the point I’d like to make is that operating assumption has to be humble because—and it—and it has to be adaptable to the reality of what we see as new economic data comes out or as various trends that we’ve all been watching manifest themselves.</p>

<p>So we are operating according to a certain set of assumptions. I will now, for the second time, try and dodge laying out exactly what they are, because I just don’t see a huge amount of upside in the U.S. national security advisor kind of holding forth as an armchair analyst on China’s economy. But—(laughter)—but I would say that we also need a multidirectional strategy that can apply if our assumptions turn out to be wrong. And I would also say that this has been a uniquely difficult time to be quite precise on this because of COVID-19, the pandemic, how all the pieces fit into place.</p>

<p>But broadly speaking, what I said in my remarks and what I said in answer to Steve’s question I would just reinforce, which is we came into office not accepting what I think was a kind of broad-based conventional wisdom about relative trajectories of the U.S. and the PRC. The president didn’t accept that. I didn’t accept that. Our team did not. And we continue to push back against this idea about inexorable rise/terminal decline as being central—a central characteristic of the relationship.</p>

<p>And I guess I should stop talking now because otherwise I’ll get myself into trouble, so that’s what I’ll do. (Laughter.)</p>

<p>HADLEY: Yes, ma’am. Please.</p>

<p>Q: Hi, Jake. Kim Dozier, CNN analyst and CFR member.</p>

<p>I wanted to ask what your message was regarding China’s continuing support for U.S. adversaries, specifically Russia, including Beijing helping Moscow avoid some of the technology sanctions and providing, while not weapons, but basic equipment like heavy-duty trucks for Russia’s war on Ukraine; and China’s support for Iran with rising petroleum purchases, whereas you’ve recently blamed Iran for supporting the deadly attacks that cost the lives of U.S. troops this past weekend. Thanks.</p>

<p>SULLIVAN: So, as I referred to in my speech, the war in Ukraine has been a through line in my conversations with my Chinese counterparts going back to before Wang Yi, with Yang Jiechi, in the early months, you know, where we sent a clear message about our concern that China might provide lethal aid for use against civilians in Ukraine. We have not seen the provision of lethal aid, but as I said in my remarks and as you noted in your question, we have seen support from Chinese companies to help Russia reconstitute its defense industrial base. And we have been clear and direct about our concerns.</p>

<p>And I noted in my remarks that as we watch this happen we’re prepared to take steps to respond to that kind of activity, because we believe that Russia’s defense industrial base is basically building up to continue to support an imperial war of conquest in Europe, and that’s a fundamental national security interest of the United States. And I made no bones about that in my conversation with my counterpart. And the president has recently signed an executive order that gives him additional tools and authorities to deal with this challenge. It’s not directed at the PRC; it is general to countries that are supporting Russia’s defense industrial base, but it gives us tools it this regard.</p>

<p>With respect to Iran, one of the areas of substantial focus in the discussion was about the continuing Houthi attacks in the Red Sea and the disruption of a vital artery of maritime commerce, undermining of supply chain security in the global economy, and, frankly, disruption to China-Europe trade, which the Red Sea is, obviously, you know, critical to; and made the case that, you know, China, as a responsible player, as a U.N. Security Council member, has an obligation to use the influence it has in Tehran to get those in Tehran to use the influence they have with the Houthis to push back against this kind of behavior. And I won’t, you know, characterize the response because I’ll leave that to Wang Yi to do for himself, but I will just say that was a detailed and substantive conversation because it is a matter where we believe that countries, particularly permanent members of the U.N. Security Council, have unique responsibilities and should step up to those responsibilities.</p>

<p>HADLEY: Take one or two more questions. This gentleman here and then this woman back there. Sir.</p>

<p>Q: Thank you, Jake. Art Collins with theGROUP.</p>

<p>Talk to us a little bit about the trilateral relationship with South Korea and Japan. As we know—you mentioned it earlier—the prime minister of Japan will be here in the spring for a state visit. Japan is, obviously, increasing—in fact, maybe doubling—its military budget. But what else do we expect from our partners in that regard in both South Korea and Japan? And what are we prepared to do beyond what we’ve already done with that critical relationship?</p>

<p>SULLIVAN: Well, you know, first, I think it’s important to recognize that the security dimension of that trilateral relationship is critical. It has been a source of propulsion for pulling the three countries together. And it manifests in closer intelligence coordination, closer defense cooperation, exercises, joint deterrence, particularly when it comes to the Korean Peninsula. And we’d like to see that continue to evolve.</p>

<p>But I would also point out that the trilateral partnership expands well beyond that. First, it expands beyond the region. If you look at support for Ukraine, Japan and Korea have both stepped up in significant ways to stand with a fellow democracy in Europe. And the Japanese prime minister has been particularly articulate in explaining that what happens in Ukraine matters in the Indo-Pacific, and President Yoon has reinforced that.</p>

<p>And then, finally, the relationship extends to economic coercion, the intersection of technology and national security, innovation, economic investment and vitality, all areas where the three countries have a huge amount of complementary capacity to support and lift one another up. When you put all that together, that is a formidable partnership of three countries with shared values; huge capacities across economics, technology, national security, and global reach.</p>

<p>And so, you know, we’re very proud of the work that we’ve done so far, but it is very much a work in progress and has to be built on from strength to strength as we go forward. I was just recently in Seoul for a trilateral meeting of national security advisors to convert this into the details of how we work together on things like early warning for missile defense, and also to think about areas where we can work together, for example, to answer the question that was posed earlier: How do we collectively have a value proposition in the developing world with three large ODA budgets from our three countries?</p>

<p>So, you know, that is not—that trilateral partnership is not about any country. It’s not about China. It’s not about North Korea. It’s about being for something, a vision for the world—for the region but for the world writ large. And we feel that it has helped create a huge amount of momentum behind shared priorities, and we want to continue to develop that.</p>

<p>HADLEY: Last question, and I apologize to those who I did not get to. Ma’am, back here? Right here. Yes. Can you pass her the mic? Thank you so much.</p>

<p>Q: Hi. Maggie Dougherty with the Senate Foreign Relations Committee.</p>

<p>You briefly mentioned human rights, so I would like to hear your strategy towards Chinese abuse of human rights—Uyghurs, Tibetans, Christian minorities. How are we going to face that challenge?</p>

<p>SULLIVAN: So, first, the president, as he has said publicly, has been very clear and direct in his conversations in the two summits that he’s had about the kind of fundamental responsibility and obligation of an American president to speak out on these issues because it’s core to who we are. That’s not about trying to weaponize the issue; it’s about living out our values. And that’s the ethos that he has tried to inculcate across the U.S. government as we deal with this issue.</p>

<p>And so that means not just that we speak out on these issues, but that we take actions. And we have taken a series of actions over the course of the past three years in each of the areas you mentioned. And to a considerable extent, we have done that in partnership with the Congress on a bipartisan basis, including laws that have been passed under our administration that we are now implementing on issues like forced labor, the Uyghur Forced Labor Protection Act.</p>

<p>So this is something that will remain a critical priority and feature of the U.S.-China relationship, as it has through multiple administrations. And for our—from our perspective, having direct diplomacy and intensive management of the relationship is not inconsistent with standing up for speaking out on and taking material action on issues relating to the protection of human rights.</p>

<p>HADLEY: So we’re at the end of our time. Let me tell you where we’re going to proceed from here, if I can. I want to thank you all for joining this hybrid meeting. Jake, thank you for being with us.</p>

<p>I want to note that the video and transcript of today’s meeting will be posted on the CFR’s website. I want to thank CFR and the China Forum for organizing this event.</p>

<p>Now, for those of you who are here in Washington, not attending virtually, the China Forum will now hold a brief memorial and tribute to Jeffrey Bader. So, please, those who want to attend that, please remain in your seat to stay for this tribute. Otherwise, you feel free to go into the next room and have some dinner and drinks. But for those who want to participate and attend the Jeffrey Bader tribute, please stay here.</p>

<p>I just want to say a final final word. I would say that no national security advisor has ever faced the kind of challenging international environment that you face every day. And we all know what it is, all its various components, but it’s really an overwhelming challenge. And I can’t think of anybody I would rather have in the national security advisor job to deal with that problem, and I think you’ve shown tonight how uniquely capable you are in dealing with that. So I want to thank you for what you do every day to advance the interests, principles, and values of our country in facing these huge challenges. And thank you for being with us tonight.</p>

<p>SULLIVAN: Thank you, Steve. (Applause.)</p>

<p>(END)</p>
</div>
      
        
              </div>
    </div>
  </div>
</article>


<div id="block-globalexploremore">
  
    
      
<div class="explore-more-promotional main-wrapper ">
  <div class="explore-more-promotional__wrapper">
           


<div class="card-group card-group--related card-group--bg-color-default">
  <div class="card-group__background"></div>
  <div class="card-group__content-wrapper">
    <h3 class="card-group__title">
              Explore More on China
          </h3>

    <div class="card-group__container">
    
                            

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/diplomacy-and-international-institutions/international-organizations" class="card-article__topic-tag-link">
            International Organizations
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/world-bank-groups-role-global-development " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">The World Bank Group’s Role in Global Development</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2023/08/WorldBank_BG%20%281%29.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Since its founding in 1944, the World Bank has evolved from a lender focused on European reconstruction to the preeminent international institution for economic development and poverty reduction.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/jonathan-masters" class="card-article__authors-link">Jonathan Masters</a>, <a href="/bio/noah-berman" class="card-article__authors-link">Noah Berman</a> and Andrew Chatzky</span>
                    
            
                          <span class="card-article__date"> October 12, 2023</span>
            
                                                                                                                        </p>
            </div>
</section>

                                

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/asia/taiwan" class="card-article__topic-tag-link">
            Taiwan
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/china-taiwan-relations-tension-us-policy-biden " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Why China-Taiwan Relations Are So Tense</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2023/03/TaiwanChina_BG.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">Differences over Taiwan’s status have fueled rising tensions between the island and the mainland. Taiwan has the potential to be a flash point in U.S.-China relations.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by Lindsay Maizland</span>
                    
            
                          <span class="card-article__date"> April 18, 2023</span>
            
                                                                                                                        </p>
            </div>
</section>

                                

  



<section class="card-article article card-article--with-thumbnail">
    <div class="card-article__container">
      
              <p class="card-article__topic-tag">
                    <a href="/asia/china" class="card-article__topic-tag-link">
            China
          </a>
                  </p>
      
      
      <div class="card-article__link-outer-wrapper">
                
        
                                      <a href="/backgrounder/chinas-huawei-threat-us-national-security " class="card-article__link">
                  
        
          <div class="card-article__info">
                      <p class="card-article__title clamp-js" data-clamp-lines="4">Is China’s Huawei a Threat to U.S. National Security?</p>
                                                <div class="card-article__image">

                
                                                    <div class="card-article__image-cover bg-image-switch" data-bg-image=//cdn.cfr.org/sites/default/files/styles/card_landscape_m_380x253/public/image/2019/06/HuaweiNew.jpg.webp></div>
                              </div>
                          </div>
          </a>
      </div>

                    <div class="card-description card-article__dek clamp-js" data-clamp-lines="4">The Chinese telecommunications company faces accusations that Beijing could use its 5G infrastructure for espionage. The outcome of the struggle could shape the world’s tech landscape for years to come.
</div>
                  <p class="card-article__metadata">
        
                  <span class="card-article__publication-type">Backgrounder</span>
                  
                      <span class="card-article__authors">
              by <a href="/bio/noah-berman" class="card-article__authors-link">Noah Berman</a>, Lindsay Maizland and Andrew Chatzky</span>
                    
            
                          <span class="card-article__date"> February 8, 2023</span>
            
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
  
    
      
<div class="explore-more-promotional main-wrapper explore-more-promotional--bg-color-white">
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
<script src="/sites/default/files/js/js_ZCoL_91e6kCJJyIpW8m0gTDdFUQhzU9eOdh1SeI6lLo.js"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"dd28942087","applicationID":"342008597","transactionName":"Z1ZUNRNUWUACVBJeCl4cdwIVXFhdTHMUQhVRX2oPDlFSbyBYCEMXX19aBBNpeVwHUjBeAEdwWQ8VR1hfD1IUGltGWlMW","queueTime":0,"applicationTime":1478,"atts":"SxFXQ1tOSk4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
