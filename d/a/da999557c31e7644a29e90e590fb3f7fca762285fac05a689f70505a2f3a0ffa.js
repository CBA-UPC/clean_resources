(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"+g8y":"1q7V":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c}));var i="ap-gift-article",a="#".concat(i),r="ap-gift-article-tooltip",o="#".concat(r),l="ap-share-article",c="#".concat(l)},"2PZ4":"510Z":"5dFD":"5pww":HChe:J2sf:KG2r:function(e,t,n){"use strict";n.d(t,"c",(function(){return T})),n.d(t,"a",();var i,a,r,o,l,c,s=n("VkAN"),d=n.n(s),u=n("gcR/"),p=n.n(u),f=n("lSNA"),m=n.n(f),g=n("J4zp"),b=n.n(g),h=n("q1tI"),v=n.n(h),x=n("17x9"),w=n.n(x),y=n("eFc+"),k=n.n(y),O=n("Jqp9"),j=n("X6oL"),C=n("ErmU"),N=n("2PZ4"),S=n("1q7V"),L=n("PgO9"),M=n("HUmG"),z=n("J2sf");ar A=z.a,T={nyt:"The New York Times",nytdotcom:"NYTimes.com",from:"From",shareArticle:"Share Article",share:"Share options",facebook:"Facebook",telegram:"Telegram",twitter:"Twitter",email:"Email",linkedin:"LinkedIn",whatsapp:"WhatsApp",reddit:"Reddit",copy:"Copy link",copied:"Link Copied",gift:"Share full article",permalink:"Permalink"},E={copy:"Copy Link",email:"Email this article",facebook:"Share on Facebook",twitter:"Share on Twitter",telegram:"Share on Telegram",whatsapp:"Share on Whatsapp",linkedin:"Share on LinkedIn",reddit:"Share on Reddit"},R=(w.a.shape({default:w.a.string.isRequired}),w.a.shape({status:w.a.string.isRequired}),w.a.string,w.a.string.isRequired,w.a.string,function(e){var t,n=e.share,c=e.pageType,s=e.smidParams,d=e.toggleGiftArticleMenu,u={event:"moduleInteraction",eventData:{pagetype:c,trigger:"module",type:"click"},module:{name:"share-tools",region:e.trackingRegion||"default",element:{}}};"sectionfront"===c&&(u.module.element.url=n.url),"Homepage"===c&&n.url&&(u.module.element.url=n.url);var f=Object(L.a)().user,g=Object(M.f)(f)&&Object(M.d)(f),x=Object(j.useTracking)(u).trackEvent,w=Object(h.useRef)(null),y=Object(h.useState)(!1),k=b()(y,2),R=k[0],I=k[1];Object(h.useEffect)(();var _=n.headline,B=n.summary,H=n.url,W=(_||{}).default,V=Object(h.useRef)(),D={twitter:"tw-share",facebook:"fb-share",linkedin:"li-share",email:"em-share",wa:"wa-share",reddit:"re-share",link:"url-share",default:"share",telegram:"tel-share"},s),q="".concat(H,"?smid=").concat(D.link),G=Object(h.useCallback)((,[x]),F=encodeURIComponent(W),U=encodeURIComponent("https://www.facebook.com/"),Z=null===(t=Object(C.getEmailUrl)(H))||void 0===t?void 0:t.replace("smid=em-share","smid=".concat(D.email)),J={subject:encodeURIComponent("".concat(T.nytdotcom,": ").concat(W)),body:encodeURIComponent("".concat(n.text?"".concat(n.text,"\n\n"):"").concat(T.from," ").concat(T.nyt,":\n\n").concat(W,"\n\n").concat(B,"\n\n").concat(Z))};return p()("div",{className:Object(O.cx)(z.j,g?z.k:null),id:S.c},void 0,p()("div",{className:z.m},void 0,T.share),p()("div",{className:z.l},void 0,"Share a link that only New York Times subscribers can access."),p()("ul",{className:z.n},void 0,p()("li",{className:z.f},void 0,v.a.createElement("button",{ref:w,type:"button","aria-label":E.copy,id:"copyUrlId","data-testid":"shareCopyUrlId",onClick:className:z.h},p()(N.c,{className:Object(O.cx)(z.e,z.b)}),p()("div",{className:Object(O.cx)(z.i,m()({},z.c,R)),"aria-live":"polite"},void 0,R?T.copied:T.copy))),p()("li",{className:z.f},void 0,p()("a",{href:"mailto:?subject=".concat(J.subject,"&body=").concat(J.body),target:"_blank","aria-label":E.email,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-email",label:T.email}}})}},void 0,p()(N.f,{className:Object(O.cx)(z.e,z.b)}),p()("div",{className:z.i},void 0,T.email))),p()("li",{className:z.f},void 0,p()("a",{href:"https://www.facebook.com/dialog/feed?app_id=9869919170&link=".concat(Object(C.encodeUrlWithSMID)(H,D.facebook),"&name=").concat(F,"&redirect_uri=").concat(U).concat(n.text?"&quote=".concat(n.text):""),target:"_blank","aria-label":E.facebook,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-facebook",label:T.facebook}}})}},void 0,p()(N.d,{className:Object(O.cx)(z.e,z.b)}),p()("div",{className:z.i},void 0,T.facebook))),p()("li",{className:z.f},void 0,p()("a",{href:"https://twitter.com/intent/tweet?url=".concat(Object(C.encodeUrlWithSMID)(H,D.twitter),"&text=").concat(n.text?n.text:F),target:"_blank","aria-label":E.twitter,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-twitter",label:T.twitter}}})}},void 0,p()(N.g,{className:Object(O.cx)(z.e,z.b)}),p()("div",{className:z.i},void 0,T.twitter))),p()("li",{className:z.f},void 0,p()("a",{href:"https://t.me/share/url?url=".concat(Object(C.encodeUrlWithSMID)(H,D.telegram),"&text=").concat(n.text?n.text:F," via @nytimes"),target:"_blank","aria-label":E.telegram,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-telegram",label:T.telegram}}})}},void 0,i||(i=p()(A,{telegram:!0})),p()("div",{className:z.i},void 0,T.telegram))),p()("li",{className:z.f},void 0,p()("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(Object(C.encodeUrlWithSMID)(H,D.linkedin),"&title=").concat(F),target:"_blank","aria-label":E.linkedin,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-linkedin",label:T.linkedin}}})}},void 0,a||(a=p()(A,{linkedin:!0})),p()("div",{className:z.i},void 0,T.linkedin))),p()("li",{className:z.f},void 0,p()("a",{href:"https://api.whatsapp.com/send?text=".concat(n.text?n.text:F,"%20").concat(Object(C.encodeUrlWithSMID)(H,D.wa)),target:"_blank","aria-label":E.whatsapp,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-whatsapp",label:T.whatsapp}}})}},void 0,r||(r=p()(A,{whatsapp:!0})),p()("div",{className:z.i},void 0,T.whatsapp))),p()("li",{className:z.f},void 0,p()("a",{href:"http://www.reddit.com/submit?url=".concat(Object(C.encodeUrlWithSMID)(H,D.reddit),"&title=").concat(F),target:"_blank","aria-label":E.reddit,rel:"noopener noreferrer",onClick:function(){x({module:{element:{name:"share-reddit",label:T.reddit}}})}},void 0,o||(o=p()(A,{reddit:!0})),p()("div",{className:z.i},void 0,T.reddit))),g&&p()("li",{className:Object(O.cx)(z.f,z.o,z.g)},void 0,p()("button",{type:"button",onClick:,void 0,p()("span",{className:z.q},void 0,p()(N.e,{className:z.e})),p()("div",{className:Object(O.cx)(z.p,m()({},z.d,!g))},void 0,p()("p",{},void 0,T.gift),g&&(l||(l=p()("p",{},void 0,"Give paywall-free access to this article."))))))))});R.displayName="ShareMenu",R.defaultProps={pageType:void 0,smidParams:{},toggleGiftArticleMenu:function(){},trackingRegion:"default"},R.fragments={share:k()(c||(c=d()(["\n    fragment ShareMenu_share on CreativeWork {\n      headline {\n        default\n      }\n      summary\n      ... on Published {\n        url\n      }\n    }\n  "])))},t.b=R},KQYy:MISA:NQ6n:NVP0:Ncw1:OLAn:"Rb+W":TvfT:UeuO:XMA8:YhMm:function(e,t,n){"use strict";var i,a,r=n("lSNA"),o=n.n(r),l=n("gcR/"),c=n.n(l),s=n("J4zp"),d=n.n(s),u=n("q1tI"),p=n.n(u),f=n("Jqp9"),m=n("NQ6n"),g=n("JwCr"),b=n.n(g),h=n("X6oL"),v=n("iEJF"),x=n("J2sf"),w=n("1q7V"),y=n("MLAy"),k=n("sQQE"),O=n("PgO9"),j=n("HUmG"),C=n("u1H9"),N=n("+4HN"),S=n("wXC7"),L=n.n(S),M=n("3sMT"),z="@media (max-width: ".concat(L.a.breakpoint.maxMobileContentWidth,"px)"),P=Object(f.css)("&",w.f,"{display:none;width:215px;position:absolute;text-align:left;background-color:",M.color.overlay.black,";border:1px solid ",M.color.stroke.primary,";box-shadow:0 1px 3px rgba(0,0,0,0.15);border-radius:4px;font-family:",L.a.font.franklinBase,";font-size:",L.a.font.size(12),";line-height:",L.a.font.size(16),";color:",M.color.content.quintary,";box-sizing:border-box;top:38px;left:2px;z-index:199;button{width:10px;position:absolute;right:9px;top:9px;background:transparent;}svg{stroke:",M.color.stroke.quaternary,";}",z,"{left:-9px;}}"),A=Object(f.css)(w.b," &{text-align:left;margin-top:7px;border-top:1px solid ",M.color.stroke.tertiary,";padding:7px 0 5px;font-size:",L.a.font.size(12),";a{border-bottom:solid 1px ",M.color.stroke.tertiary,";text-decoration:none;}li{display:inline;font-weight:700;padding:0 5px;border-right:solid 0.8px black;}li:first-child{padding-left:0;}li:last-child{border-right:none;}}"),T=(w.b,Object(f.css)("&",w.f,"{display:inline-block;}")),E=Object(f.css)(w.f," &{border:9px inset transparent;display:inline-block;height:0;position:absolute;width:0;border-bottom:12px solid ",M.color.stroke.primary,";left:4%;top:-21px;",z,"{left:8%;}}"),R=(w.b,M.color.stroke.quaternary,L.a.breakpoint.large,M.color.stroke.quaternary,Object(f.css)(w.f," &{border:10px inset transparent;display:inline-block;height:0;position:absolute;width:0;border-bottom:14px solid ",M.color.stroke.primary,";bottom:-15px;left:-10px;",L.a.breakpoint.large,"{border-bottom:14px solid ",M.color.stroke.primary,";}}")),I=Object(f.css)(w.b," &,",w.f," &{font-size:",L.a.font.size(12),";line-height:",L.a.font.size(17),";strong{font-weight:",L.a.font.weight.bold,";}}"),_=Object(f.css)(w.b," &,",w.f," &{font-size:",L.a.font.size(14),";margin-bottom:4px;}"),B=Object(f.css)("right:-37px;left:auto;"),H=Object(f.css)("left:auto;right:20%;"),W=Object(f.css)(w.f," &{padding:13px 15px 12px 15px;color:",L.a.color.white,";}"),V=Object(f.css)("&",w.b,"{padding:13px 15px 12px 15px;color:",L.a.color.black,";}"),D=(w.b,Object(f.css)("height:auto;width:auto;border-radius:30px;&:focus{outline:none;box-shadow:0 0 4px 1px rgb(0 95 204);}@supports selector(:focus-visible){&:focus{box-shadow:none;}&:focus-visible{box-shadow:0 0 4px 1px rgb(0 95 204);}}")),q=Object(f.css)(z,"{padding:6px 7px 5px;}border-radius:30px;padding:6px 10px 6px;font-size:",L.a.font.size(12),";font-family:",L.a.font.franklinBase,";line-height:",L.a.font.size(15),";text-align:right;font-weight:500;svg{margin-right:5px;vertical-align:-6px;height:20px;}"),G=Object(f.css)("direction:ltr;display:inline-block;vertical-align:middle;&:hover{.gift-count{background-color:#fafafa;}}"),F="https://help.nytimes.com/hc/en-us/articles/360060848652";}U.displayName="NonSubMenu";var Z,J=U,X=n("yXPU"),Y=n.n(X),Q=n("VkAN"),K=n.n(Q),$=n("o0o1"),ee=n.n($),te=n("eFc+"),ne=n.n(te),ie=n("ErmU"),ae=n("Kxyt"),re=n("KG2r"),oe=n("2PZ4"),le=n("taqW"),ce=n("UeuO"),sn null};se.defaultProps={giftArticleLinksRemainingCount:null,url:null,hideShareOptions:!1};var de,ue,pe,fe,mred"))};ge.defaultProps={giftArticleLinksRemainingCount:null,url:null};var be,he,ve,xe,we,ye,ke,Oe,je=ge;function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se,Le=x.a,Me=Ne(Ne(Ne({},re.c),re.a),{},{email:"Email",facebook:"Facebook",twitter:"Twitter",telegram:"Telegram",whatsapp:"WhatsApp",reddit:"Reddit",intro:"Explore this gift article from The New York Times. You can read it for free without a subscription.",shareGift:"Send this article"}),ze=ne()(be||(be=K()(["\n  query getShareLink($url: NonEmptyString!) {\n    user {\n      shareCode(url: $url) {\n        __typename\n        ... on ShareCodeData {\n          remaining\n          url\n        }\n        ... on ShareCodeError {\n          code\n        }\n      }\n    }\n  }\n"]))),Pe=ne()(he||(he=K()(["\n  mutation createShareLink($url: NonEmptyString!, $pageId: ShareCodeOptions) {\n    createShareCode(url: $url, options: $pageId) {\n      __typename\n      ... on ShareCodeData {\n        remaining\n        url\n      }\n      ... on ShareCodeError {\n        code\n      }\n    }\n  }\n"]))),Ae=function(e){var t,n,i,a,r=e.share,l=e.pageType,s=e.trackingRegion,m=e.clickFn,g={event:"moduleInteraction",eventData:{pagetype:l,trigger:"module",type:"click"},module:{name:"share-tools",context:"unlocked-article-menu",region:s||"default",element:{url:r.url,uri:r.uri}}},b=Object(u.useRef)(null),v=Object(h.useTracking)(g).trackEvent;Object(u.useEffect)((function(){b&&b.current&&b.current.focus()}));var y=Object(u.useReding,e}),{email:!1}),k=d()(y,2),O=k[0],j=k[1],C=r.headline,N=r.summary,S=r.url,L=(C||{}).default,M=Object(u.useState)(!1),z=d()(M,2),P=z[0],A=z[1],T=encodeURIComponent(L),E=encodeURIComponent("https://www.facebook.com/"),R=Object(u.useRef)(),I=Object(ae.useQuery)(ze,{variables:{url:S},ssr:!1,context:{queryDeduplication:!1},fetchPolicy:"cache-first"}),_=I.loading,B=I.data,H=I.error,W=Object(ae.useMutation)(Pe,ta:i})}}),V=d()(W,1)[0],D=function(){v({module:{element:{name:"share-url",label:Me.permalink}}})},q=null==B||null===(t=B.user)||void 0===t||null===(n=t.shareCode)||void 0===n?void 0:n.url,G=null==B||null===(i=B.user)||void 0===i||null===(a=i.shareCode)||void 0===a?void 0:a.remaining,F=function(e){var t=-1===(null==e?void 0:e.indexOf("?"))?"?":"&";return"".concat(e).concat(t,"smid=url-share")},U=function(){var e=Y()(ee.a.mark((function e(){var t,n,i;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!q){e.next=3;break}return m(),e.abrupt("return",Promise.resolve(q));case 3:return n=window&&(null===(t=window.nyt_et)||void 0===t?void 0:t.get_pageview_id()),i={variables:{url:r.url,pageId:{pageViewId:n}}},e.abrupt("return",V(i):null}))e),m()})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,argumentsentsents)}}(),X=!q&&0===G,Q=!q&&!1})))};return _||H||!B?xe||(xe=c()(le.a,{fixed:!1})):c()("div",{className:x.j,id:w.c},void 0,c()("div",{className:Object(f.cx)(x.m,ce.h)},void 0,c()(je,{giftArticleLinksRemainingCount:G,url:q}),!Q&&c()("span",{className:Object(f.cx)(ce.g,ce.c)},void 0,G,"/10")),c()("div",{className:ce.f},void 0,c()(me,{giftArticleLinksRemainingCount:G,url:q,hideShareOptions:X}),!Q&&c()("span",{className:Object(f.cx)(ce.g,ce.b),"data-testid":"remainingCount"},void 0,G,"/10")),!X&&c()("ul",{className:x.n},void 0,c()("li",{className:x.f},void 0,p.a.createElement("button",{ref:b,type:"button","aria-label":re.a.copy,onClick:Z,id:"giftcopyUrlId","data-testid":"giftcopyUrlId",className:x.h},c()(oe.c,{className:Object(f.cx)(x.e,x.b)}),c()("div",{className:Object(f.cx)(x.i,o()({},x.c,P)),"aria-live":"polite"},void 0,P?Me.copied:Me.copy,O.copy&&K()))),c()("li",{className:x.f},void 0,c()("a",{role:"button",href:"mailto:",target:"_blank",rel:"noopener noreferrer","aria-label":re.a.email,ents)}}()},void 0,c()(oe.f,{className:Object(f.cx)(x.e,x.b)}),c()("div",{className:x.i},void 0,Me.email),O.email&&K())),c()("li",{className:x.f},void 0,c()("button",{className:ce.e,type:"button","aria-label":re.a.facebook,target:"_blank",rel:"noopener noreferrer",onClick:Y()(ee.}}),e)})))},void 0,c()(oe.d,{className:Object(f.cx)(x.e,x.b)}),c()("div",{className:x.i},void 0,Me.facebook),O.facebook&&K())),c()("li",{className:x.f},void 0,c()("button",{className:ce.e,type:"button","aria-label":re.a.twitter,"data-testid":"giftTwitter",target:"_blank",rel:"noopener noreferrer",onClick:Y()(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Se=window.open("","shareWinTW"),e.next=3,U();case 3:if(t=e.sent,j({type:"twitter",loading:!1}),t){e.next=7;break}return e.abrupt("return");case 7:Se.location.assign("https://twitter.com/intent/tweet?url=".concat(Object(ie.encodeUrlWithSMID)(t,"tw-share"),"&text=").concat(Me.intro)),v({module:{element:{name:"share-twitter",label:Me.twitter}}});case 9:case"end":return e.stop()}}),e)})))},void 0,c()(oe.g,{className:Object(f.cx)(x.e,x.b)}),c()("div",{className:x.i},void 0,Me.twitter),O.twitter&&K())),c()("li",{className:x.f},void 0,c()("button",{className:ce.e,type:"button","aria-label":re.a.telegram,"data-testid":"giftTelegram",target:"_blank",rel:"noopener noreferrer",onClick:Y()(ee.}}),e)})))},void 0,we||(we=c()(Le,{telegram:!0})),c()("div",{className:x.i},void 0,Me.telegram),O.telegram&&K())),c()("li",{className:x.f},void 0,c()("button",{className:ce.e,type:"button","aria-label":re.a.whatsapp,"data-testid":"giftWhatsapp",target:"_blank",rel:"noopener noreferrer",onClick:Y()(ee.}}),e)})))},void 0,ye||(ye=c()(Le,{whatsapp:!0})),c()("div",{className:x.i},void 0,Me.whatsapp),O.whatsapp&&K())),c()("li",{className:x.f},void 0,c()("button",{className:ce.e,type:"button","aria-label":re.a.reddit,"data-testid":"giftReddit",target:"_blank",rel:"noopener noreferrer",onClick:Y()(ee.}}),e)})))},void 0,ke||(ke=c()(Le,{reddit:!0})),c()("div",{className:x.i},void 0,Me.reddit),O.reddit&&K()))))};Ae.displayName="GiftArticleMenu",Ae.defaultProps={pageType:void 0,trackingRegion:void 0,clickFn:function(){}},Ae.fragments={share:ne()(Oe||(Oe=K()(["\n    fragment ShareLinkMenu_share on CreativeWork {\n      headline {\n        default\n      }\n      summary\n      ... on Published {\n        url\n      }\n    }\n  "])))};var Te,Ee,Re,Ie,_e,Be=Ae,He=function(e){var t,n=e.pageType,i=e.share,a=e.className,r=e.tooltipAlign,l=e.forceOpen,s=e.toggleGiftArticleMenu,g=e.suppressGiftArticleTooltip,C=e.trackingRegion,N=e.menuClickFn,S=Object(h.useTracking)(),L=Object(u.useState)(!1),M=d()(L,2),z=M[0],A=M[1],V=Object(u.useState)(!1),F=d()(V,2),U=F[0],Z=F[1],X=Object(u.useState)(!1),Y=d()(X,2),Q=Y[0],K=Y[1],$=Object(u.useState)(!1),ee=d()($,2),te=ee[0],ne=ee[1],ie=Object(O.a)().user,ae=Object(j.f)(ie)&&Object(j.d)(ie),re=Object(y.e)({scope:"stickyGiftTestWeb",limit:3,frequency:y,A(!1)};Object(u.useEp"}}))}),[S,g,re,z,U,ae]),Object(u.useEs(!1))}),[l,s]),K(!0)};return p.a.createElement(p.a.Fragment,null,!g&&z&&c()("div",{role:"tooltip",className:Object(f.cx)(P,T,o()({},B,"right"===r)),"aria-hidden":!z,"aria-labelledby":"dialogMessage",onClick:le,onKeyPress:le,tabIndex:"0",id:w.e},void 0,c()("div",{className:Object(f.cx)(x.j,W)},void 0,c()("p",{className:Object(f.cx)(I,_)},void 0,Ee||(Ee=c()("strong",{},void 0,"Send any friend a story"))),c()("p",{className:I,id:"dialogMessage"},void 0,"As a subscriber, you have ",Re||(Re=c()(b.a,{},void 0,"10 gift articles"))," to give each month. Anyone can read what you share.")),c()("button",{type:"button",onClick:oe,"aria-label":"close sharing tooltip"},void 0,Ie||(Ie=c()(v.a,{strokeWidth:"1.5"}))),c()("div",{className:Object(f.cx)(E,o()({},H,"right"===r))},void 0,c()("div",{className:R}))),c()(m.b,{isGiftArticle:!0,dataTestid:"gift-article-button",buttonContent:c()("span",{className:Object(f.cx)(G,q,a)},void 0,_e||(_e=c()(k.a,{ariaHidden:!0})),"Share full article"),className:Object(f.cx)(D,"actionbar-button"),setAriaLabel:!1,pageType:n,share:i,arrowPosition:"top",forceOpen:Q,han:ne(e)},theme:{alignment:"RIGHT",isLoggedIn:!0},modalContent:ae?t||(t=c()(Be,{share:i,pageType:n,trackingRegion:C,clickFn:N})):Te||(Te=c()(J,{}))}))};He.defaultProps={className:void 0,tooltipAlign:"left",toggleGiftArticleMenu:function(){return null},forceOpen:!1,suppressGiftArticleTooltip:!1,trackingRegion:"default",menuClickFn:function(){}};t.a=H,t.a=l},oEA4:function(e,t,n){"use strict";var i=n("pVnL"),a=n.n(i),r=n("QILm"),o=n.n(r),l=n("q1tI"),c=n.n(l),s=["children","onClickOutside"];function d(e){var t=e.children,n=e.onClickOutside,i=o()(e,s),r=Object(l.useRef)(!1),d=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e=function(e){"touchend"===e.type&&(r.current=!0),"click"===e.type&&r.current||d.current.contains(e.target)||n(e)};return document.addEventListener("touchend",e,!0),document.addEventListener("click,e,!0)}}),[n]),c.a.createElement("div",a()({},i,{ref:d}),t)}d.displayName="ClickOutside",d.defaultProps={children:null},t.a=dium"ne;}"1e3)),t.a=emo(jnone;}")}}]);
//# sourceMappingURL=giftArticles-2ba3c0bb3db795d66aad.js.map