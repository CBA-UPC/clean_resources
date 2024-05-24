(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1683],{55773:function(e,t,i){"use strict";var n=i(26265),o=i(94184),l=i.n(o),r=i(41664),a=i(67294),s=i(25362),c=i.n(s),u=a.createElement,d=function(e){var t,i=e.children,o=e.className,a=e.disabled,s=e.onClick,d=e.icon,p=void 0===d?null:d,v=e.prefix,f=void 0===v?null:v,m=e.suffix,b=void 0===m?null:m,y=e.type,_=e.shape,h=e.theme,w=e.htmlType,g=e.active,k=e.href,x=l()(c().button,(t={},(0,n.Z)(t,"".concat(c()[y]),y),(0,n.Z)(t,"".concat(c()[_]),_),(0,n.Z)(t,"".concat(c()[h]),h),(0,n.Z)(t,c().icon,!i&&0!==i&&p),(0,n.Z)(t,c().active,g),t),o);return"link"===y?u(r.default,{prefetch:!1,href:k},u("a",{className:x},p?u("span",{className:c().iconNode},p):null,u("span",null,i))):u("button",{type:w,className:x,disabled:a,onClick:function(e){s&&s(e)}},f?u("span",{className:c().prefix},f):null,p?u("span",{className:c().iconNode},p):null,i?u("span",null,i):null,b?u("span",{className:c().suffix},b):null)};d.defaultProps={disabled:!1,className:null,onClick:null,prefix:null,suffix:null,theme:"light",type:"primary",htmlType:"button",active:!1,href:""},d.displayName="Button",t.Z=d},27607:function(e,t,i){"use strict";var n=i(91229),o=i(67294),l=i(30033),r=o.createElement;t.Z=function(e){var t=e.posts,i=e.postProps,o=void 0===i?{}:i;return t.map((function(e){return e?r(l.Z,(0,n.Z)({key:null===e||void 0===e?void 0:e._id},o,e)):null}))}},98777:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(94184),o=i.n(n),l=i(67294),r=i(53122),a=i(37221),s=i.n(a),c=l.createElement,u=function(e){var t=e.children,i=e.titles,n=e.className,a=e.activeTitleColor,u=e.inactiveTitleColor,d=(0,l.useState)(0),p=d[0],v=d[1],f=(0,l.useState)(0),m=f[0],b=f[1],y=Array.isArray(t)?t:[t],_=l.Children.toArray(i.map((function(e,t){var i=t===p;return c("button",{type:"button",onClick:function(){return function(e){v((function(t){return b((e-t)%10),Number(e)}))}(t)},className:o()(s().button,i&&s().active)},c(r.Z,{color:i?a:u,fontWeight:"bold",textTransform:"uppercase"},e))})));return c("div",{className:s()[n]},c("div",{className:s().titles,style:{"--to":m>0?"right":"left","--from":m<0?"right":"left",maxWidth:1===y.length?"50%":"100%"}},_),y[p])};u.defaultProps={titles:[""],className:"",activeTitleColor:"white",inactiveTitleColor:"dusty-gray"};var d=u},58557:function(e,t,i){"use strict";var n=i(74047),o=i(52700),l=i(8127),r=i(44102),a=i(20775),s=i(94184),c=i.n(s),u=i(67294),d=i(6594),p=i.n(d),v=u.createElement;function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return(0,r.Z)(this,i)}}var m=function(e){(0,l.Z)(i,e);var t=f(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.title,i=e.blockReverse,n=e.children,o=e.noPromoTablet,l=e.rightContent;return v("div",{className:p().root},t&&v("div",{className:p().header},t),v("div",{className:c()(p().wrapper,i&&p().blockReverse)},v("div",{className:c()(p().cont,"col-3","col-tablet-2","col-verticalTablet-2","col-mobile")},n),!o&&v("div",{className:c()(p().rightColumn,"col-1","col-mobile")},l)))}}]),i}(u.PureComponent);t.Z=m},95297:function(e,t,i){"use strict";i.d(t,{T:function(){return o}});var n=i(6188),o=(i(3335),function(e){var t;return e?null!==e&&void 0!==e&&null!==(t=e.videoFile)&&void 0!==t&&t.url?e.videoFile.url:null!==e&&void 0!==e&&e.embedLink?e.embedLink:"string"===typeof e?"".concat(n.lC,"/streams/").concat(e,"/index.m3u8"):e.streamId?"".concat(n.lC,"/streams/").concat(e.streamId,"/index.m3u8"):"":""})},57:function(e,t,i){"use strict";i.d(t,{Z:function(){return te}});var n=i(26265),o=i(91229),l=i(28140),r=i(94184),a=i.n(r),s=i(5152),c=i(11163),u=i(67294),d=i(24234),p=i(32292),v=i(70131),f=i(32196),m=u.createElement,b=function(e){var t=e.children,i=e.onLoadMore,n=(0,v.YD)(),o=(0,p.Z)(n,2),l=o[0],r=o[1];return(0,u.useEffect)((function(){r&&i()}),[r]),m("div",{style:{position:"relative"}},t,m("div",{ref:l,style:{width:1,height:f.TH,position:"absolute"}}))};b.defaultProps={onLoadMore:function(){}};var y=b,_=i(15045),h=i(27607),w=i(98777),g=i(17563),k=i(55773),x=i(53122),C=i(2403),Z=i(83333),P=i.n(Z),O=u.createElement;function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var j=function(e){return O("svg",e,O("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 16.2c-1.62 0-3.15-.54-4.41-1.53L14.67 4.59A7.093 7.093 0 0 1 16.2 9c0 3.96-3.24 7.2-7.2 7.2zM1.8 9c0-3.96 3.24-7.2 7.2-7.2 1.62 0 3.15.54 4.41 1.53L3.33 13.41A7.093 7.093 0 0 1 1.8 9zm14.13-5.67l-.63-.63-.63-.63C13.14.72 11.16 0 9 0 4.05 0 0 4.05 0 9c0 2.16.72 4.14 2.07 5.67l.63.63.63.63C4.86 17.28 6.84 18 9 18c4.95 0 9-4.05 9-9 0-2.16-.72-4.14-2.07-5.67z"}))};j.defaultProps={width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"};var L=(0,s.default)((function(){return Promise.all([i.e(6310),i.e(9354)]).then(i.bind(i,19354))}),{loadableGenerated:{webpack:function(){return[19354]},modules:["../../components/VideoPlayer"]}}),M=function(e){var t=e.id,i=e.isMobile,n=void 0!==i&&i,l=e.title,r=void 0===l?"":l,a=e.description,s=void 0===a?"":a,c=e.type,d=e.video,p=e.stream,v=e.isMain,f=e.embedLink,m=e.tag,b=e.caption,y=e.coverTitle,_=c===C.v.EMBED,h=(0,g.parseUrl)(f),w=h.url,Z=h.query,N=(0,u.useMemo)((function(){return{size:n?"medium":"big-s",fontWeight:"bold",className:P().headline,color:"white"}}),[n]),M=(0,u.useCallback)((function(){var e=p||d&&d.url;return _?f?O("iframe",{className:P().player,src:"".concat(w,"?").concat((0,g.stringify)(T(T({},Z),{},{autoplay:1,muted:1,mute:1,enablejsapi:1}))),allow:"accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0,muted:!0,autoPlay:!0}):null:e&&O(L,{stream:v,className:P().player,title:r,autoplay:!0,src:e,index:t})}),[]);return O("div",{className:P().root},O("div",{className:P().media},O(M,null)),(y||b)&&O("div",{className:P().subtitles_wrap},O("div",{dangerouslySetInnerHTML:{__html:null!==y&&void 0!==y?y:""}}),O("div",{dangerouslySetInnerHTML:{__html:null!==b&&void 0!==b?b:""}})),O(x.Z,(0,o.Z)({},N,{tag:m}),r),O(x.Z,{color:"dusty-gray",size:"normal"},s),O(k.Z,{icon:O(j,null),type:"link",href:"/feedback"},"\u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))};M.defaultProps={type:C.v.VIDEO,video:{url:""},stream:"",title:"",embedLink:"",description:"",tag:"h3",isMain:!1,isMobile:!1};var B=M,R=i(58557),S=i(47054),D=i(34484),E=i(45697),I=i.n(E),V=i(5773),z=(I().bool,I().bool,I().bool,function(e){var t=e.children,i=void 0===t?null:t,n=e.fallbacks,o=(null===n||void 0===n?void 0:n.tablet)||null,l=(null===n||void 0===n?void 0:n.vtablet)||null,r=(null===n||void 0===n?void 0:n.mobile)||null,a=(0,V.q7)().state,s=a.isMobile,c=a.isVerticalTablet,u=a.isTablet;return s?r:c?l:u?o:i});z.propTypes={children:I().node,fallbacks:I().shape({tablet:I().node,vtablet:I().node,mobile:I().node})};var A=z,F=i(95297),U=i(98953),q=i(11674),J=i(56326),K=i(88909),H=i.n(K),W=u.createElement;function Y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function G(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Q={size:"s",isBlack:!0,previewType:"video"},X={type:["lentainform","smi2"],rate:{lentainform:4,smi2:16}},$=(0,s.default)((function(){return i.e(7885).then(i.bind(i,47885))}),{loadableGenerated:{webpack:function(){return[47885]},modules:["../../components/RedLineTitle"]}}),ee=function(e){var t,i,n,r,s=e.playlist,p=e.headline,v=e.infinityVideos,f=e.videoData,m=e.latestVideo,b=e.popularVideo,g=e.playlistLastId,k=e.videosLastId,x=(0,c.useRouter)(),Z=(0,J.Ac)(x.asPath),P=(0,V.MS)().state.isBlackTheme,O=(0,V.q7)().state,N=O.isMobile,T=O.isDesktop,j=Boolean(p),L=(0,u.useState)(null!==(t=null===s||void 0===s?void 0:s.videos)&&void 0!==t?t:[]),M=L[0],E=L[1],I=(0,u.useState)(g),z=I[0],K=I[1],Y=(0,u.useState)(v||[]),ee=Y[0],te=Y[1],ie=(0,u.useState)(k),ne=ie[0],oe=ie[1],le=(0,u.useCallback)((function(){z&&U.Z.loadVideosByPlaylist(s._id,z).then((function(e){var t=e.videos,i=e.last;E([].concat((0,l.Z)(M),(0,l.Z)(t))),K(i||!1)})).catch((function(){K(!1)}))}),[z]),re=(0,u.useCallback)((function(){ne&&q.Z.loadLentaPosts(ne).then((function(e){var t=e.lenta,i=e.last;te([].concat((0,l.Z)(ee),(0,l.Z)(t))),oe(i||!1)})).catch((function(){oe(!1)}))}),[ne]),ae={canonical:Z,title:null===f||void 0===f?void 0:f.title,clickbait:null===f||void 0===f?void 0:f.clickbait,description:null===f||void 0===f?void 0:f.description,cover:null!==(i=null===f||void 0===f?void 0:f.cover)&&void 0!==i?i:{url:""},publicationDate:null===f||void 0===f?void 0:f.publicationDate,video:(null===f||void 0===f?void 0:f.embedLink)||(null!==(n=null===f||void 0===f||null===(r=f.videoFile)||void 0===r?void 0:r.url)&&void 0!==n?n:"")},se=(0,u.useCallback)((function(e){var t,i=e.isMobile,n=e.isPlaylist,l={isMain:null===(t=f.flags)||void 0===t?void 0:t.isMain,title:f.title,date:f.publicationDate,description:f.description,caption:f.type===C.v.VIDEO?null===f||void 0===f?void 0:f.videoFileTitle:"",type:f.type,embedLink:f.embedLink,cover:f.cover,coverTitle:f.coverTitle,video:f.videoFile,id:"v-".concat(f.index),stream:(0,F.T)(f)};return W(B,(0,o.Z)({},l,{isMobile:i,tag:n?"h2":"h1"}))}),[f]);return f?W(u.Fragment,null,W(D.Z,(0,o.Z)({isVideo:!0},ae)),W("div",{className:"container__life_global"},W(S.Z,{backgroundColor:P?"#222222":"#1f232d",className:H().wrapper},j?W($,{title:p,isBlack:!0,withoutMarginTop:!0,isSubTitle:N,withoutLine:N,tag:"h1"}):null,W("div",{className:"row"},W("div",{className:"col-3 col-verticalTablet-4"},W(se,{isMobile:N,isPlaylist:j})),W(A,null,W("div",{className:"col-1"},W(w.Z,{titles:["\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e","\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435"]},W(h.Z,{posts:b,postProps:G(G({},Q),{},{playListUrl:null===s||void 0===s?void 0:s.index,previewType:j&&null!==s&&void 0!==s&&s.index?"playList":"video"})}),W(h.Z,{posts:m,postProps:Q}))))),W(A,{fallbacks:{mobile:W(_.ZP,{isMobile:!0,type:_.CV.slider,isBlackTheme:!0,postLayoutProps:G(G({},Q),{},{isBorderDisable:!0,lineClamp:3}),posts:b,layoutProps:{postsToShow:2.5}})}})),W("div",{className:"row"},W("div",{className:"col-3"},W(R.Z,{rightContent:T&&W("div",{className:a()(H().rightCont)},W(d.Z,X))},W(y,{onLoadMore:le},W(_.ZP,{type:_.CV.grid,title:p?"":null===s||void 0===s?void 0:s.title,isSubTitle:!0,withoutMarginTop:!0,posts:M,postLayoutProps:G(G({},Q),{},{isBlack:null})}))),W(y,{onLoadMore:re},W(_.ZP,{type:_.CV.grid,title:"\u0412\u0441\u0435 \u0432\u0438\u0434\u0435\u043e",isSubTitle:!0,withoutMarginTop:!0,posts:ee,postLayoutProps:G(G({},Q),{},{isBlack:null})})))))):null};ee.defaultProps={isBlackTheme:!1,router:{},headline:""};var te=ee},25362:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",button:"styles_button__2Znya",iconNode:"styles_iconNode__3KYWf",icon:"styles_icon__3Cr1A",prefix:"styles_prefix__YSTyZ",suffix:"styles_suffix__2EX4B",primary:"styles_primary__3fgu_",text:"styles_text__1g3pH",link:"styles_link__3I-tc",active:"styles_active__26K-b",bordered:"styles_bordered__3k0RJ",leftborder:"styles_leftborder__99Ibq",nonbrand:"styles_nonbrand__Q4iuV",dark:"styles_dark__gPRn7"}},37221:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",authorization:"styles_authorization__16J6x",titles:"styles_titles__1dzw1",button:"styles_button___F4gN",active:"styles_active__3u2Ol"}},6594:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",root:"ContentBlock_root__3-jig",header:"ContentBlock_header__2JSUz",wrapper:"ContentBlock_wrapper__3m1bm",cont:"ContentBlock_cont__3sqQd",blockReverse:"ContentBlock_blockReverse__1cwJu",rightColumn:"ContentBlock_rightColumn__3b0PB"}},83333:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",root:"styles_root__2KUjz",subtitles_wrap:"styles_subtitles_wrap__1YyBF",media:"styles_media__3cx5Z",headline:"styles_headline__LOod3",player:"styles_player__2xJIG"}},88909:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",wrapper:"Video_wrapper__h8F2m",rightCont:"Video_rightCont__1At5y"}},62587:function(e){"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,i,n,o){i=i||"&",n=n||"=";var l={};if("string"!==typeof e||0===e.length)return l;var r=/\+/g;e=e.split(i);var a=1e3;o&&"number"===typeof o.maxKeys&&(a=o.maxKeys);var s=e.length;a>0&&s>a&&(s=a);for(var c=0;c<s;++c){var u,d,p,v,f=e[c].replace(r,"%20"),m=f.indexOf(n);m>=0?(u=f.substr(0,m),d=f.substr(m+1)):(u=f,d=""),p=decodeURIComponent(u),v=decodeURIComponent(d),t(l,p)?Array.isArray(l[p])?l[p].push(v):l[p]=[l[p],v]:l[p]=v}return l}},12361:function(e){"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,i,n,o){return i=i||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?Object.keys(e).map((function(o){var l=encodeURIComponent(t(o))+n;return Array.isArray(e[o])?e[o].map((function(e){return l+encodeURIComponent(t(e))})).join(i):l+encodeURIComponent(t(e[o]))})).filter(Boolean).join(i):o?encodeURIComponent(t(o))+n+encodeURIComponent(t(e)):""}},17673:function(e,t,i){"use strict";i(62587),t.stringify=i(12361)}}]);ormat('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfABc4EsA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1XNpLOSK.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1XppLOSK.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1XJpLOSK.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1X1pLOSK.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1XFpLOSK.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1XBpLOSK.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK1X5pLA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1XNpLOSK.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1XppLOSK.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1XJpLOSK.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1X1pLOSK.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1XFpLOSK.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1XBpLOSK.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N1X5pLA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBD5XxxKA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBK5XxxKA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBC5XxxKA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBN5XxxKA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBB5XxxKA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBA5XxxKA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyosBO5Xw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBD5XxxKA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBK5XxxKA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBC5XxxKA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBN5XxxKA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBB5XxxKA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBA5XxxKA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpcBO5Xw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2K4Uc9ec.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2IoUc9ec.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2JYUc9ec.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2KYUc9ec.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2KIUc9ec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoflex/v9/NaN4epOXO_NexZs0b5QrzlOHb8wCikXpYqmZsWI-__OGfttPZktqc2VdZ80KvCLZaPcSBZtOx2MifRuWR28sPJtUMbsFEK6cRrleUx9Xgbm3WLHa_F4Ep4Fm0PN19Ik5Dntczx0wZGzhPlL1YNMYKbv9_1IQXOw7AiUJVXpRJ6cXW4O8TNGoXjC79QRyaLshNDUf3e0O-gn5rrZCu20YNYG0EACUTNK-QKavMlx2JoUc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
