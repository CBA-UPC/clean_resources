"use strict";(globalThis.webpackChunkweb=globalThis.webpackChunkweb||[]).push([[3929],{4390:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(7294);const a=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e},n.createElement("path",{d:"M28.6 18 24 22.6 19.4 18a1 1 0 0 0-1.4 1.4l4.6 4.6-4.6 4.6a1 1 0 0 0 1.4 1.4l4.6-4.6 4.6 4.6a1 1 0 0 0 1.4-1.4L25.4 24l4.6-4.6a1 1 0 0 0-1.4-1.4Z"}))},2214:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(7294),a=i(2991);const s="bukxshx",r="i1ryfa0t",o="be7kylf",l="i5i9idc";i(8635);var c=i(1082);function d({buttonsAs:e,onButtonClick:t,isFixed:i=!0,activeButton:d="",chars:g="ABCDEFGHIJKLMNOPQRSTUVWXYZ#",disabledChars:p="",ariaLabel:u="Sendungen A bis Z",href:E,buttonProps:m}){const[f,_]=(0,n.useState)(d);return(0,n.useEffect)((()=>{_(d)}),[d]),n.createElement("ul",{className:(0,c.cx)(s,i&&r),role:"tablist","aria-label":u},g.split("").map((s=>n.createElement("li",{className:(0,c.cx)(o,i&&l),key:s,role:"presentation"},n.createElement(a.z,{...m,accessibility:"tab",href:`${E||""}${"#"===s?"0-9":s}`,as:e,onClick:()=>function(e){_(e),t&&t(e)}(s),isActive:s===f,isDisabled:p.includes(s),ariaControls:s,text:s,type:"text"})))))}const g=n.memo(d)},4398:(e,t,i)=>{i.d(t,{X2:()=>l,_I:()=>g,sg:()=>d,zv:()=>p});var n=i(7294),a=i(1082),s=i(869);Object.freeze({space:[0,4,8],breakpoints:[`${s.J.xs+1}px`,`${s.J.s+1}px`,`${s.J.m+1}px`,`${s.J.l+1}px`,`${s.J.xl+1}px`]});function r(e){return 0===e?"0px":1===e?"4px":2===e?"8px":e}const o={base:"bb65sj8",outerSpace:{none:"n1mlk2ja",even:"exipzjq",wide:"wpy2n0k"}};function l({children:e,outerSpace:t,pt:i,pb:s,pl:l,pr:c,py:d,px:g,p,mt:u,mb:E,ml:m,mr:f,my:_,mx:h,margin:b,alignItems:T,justifyContent:x,flexDirection:I,className:v,htmlAttributes:R}){return i=r(i),s=r(s),l=r(l),c=r(c),g=r(g),d=r(d),p=r(p),u=r(u),E=r(E),m=r(m),f=r(f),h=r(h),_=r(_),b=r(b),n.createElement("div",{className:(0,a.cx)(o.base,o.outerSpace[t],v),style:{paddingTop:i||d||p,paddingBottom:s||d||p,paddingLeft:l||g||p,paddingRight:c||g||p,marginTop:u||_||b,marginBottom:E||_||b,marginLeft:m||h||b,marginRight:f||h||b,alignItems:T,justifyContent:x,flexDirection:I},...R},e)}const c={base:"b1y4zfs4",breakpoints:{all:{0:"_peaizy",1:"_1mi52lv",2:"_1nyyhi4",3:"_1yascpj",4:"_109tgm8",5:"_1kpp7z9",6:"_1v18xjl",7:"_192knx4",8:"_14vavae",9:"_170mzbu",10:"_1xwvcj5",11:"_oagp1p",12:"_24c1zv"},xs:{0:"_3knpih",1:"_ci6g74",2:"_moh35z",3:"_1guwd6c",4:"_sqa9cq",5:"_y0x1xj",6:"_apc9bv",7:"_p2vccy",8:"_170uysx",9:"_p2sbfr",10:"_e71twv",11:"_vxlj6g",12:"_17rz82i"},s:{0:"_7y1a3s",1:"_2wgrbj",2:"_mjt2k7",3:"_1opdci",4:"_2f829n",5:"_tfaen0",6:"_n8vevg",7:"_1jg4k8r",8:"_w790xc",9:"_1m8a0yp",10:"_wob8ba",11:"_i08bs3",12:"_4h0qu5"},m:{0:"_1kpy3xe",1:"_10mnm7p",2:"_w4nvf5",3:"_iwyrt",4:"_230rdp",5:"_1b5113v",6:"_1d6wp8n",7:"_tyodv6",8:"_1zo0qg",9:"_2qvzpx",10:"_ybbq08",11:"_n7xvbc",12:"_1drdrhp"},l:{0:"_1iy5yjy",1:"_1lsm0ed",2:"_19evger",3:"_1udfbay",4:"_3aak8y",5:"_1ik704u",6:"_5axgxz",7:"_1jm9le9",8:"_11ghksv",9:"_nxbcs1",10:"_a3heca",11:"_rl7hjd",12:"_1355m4p"},xl:{0:"_1quztox",1:"_13e27ka",2:"_wqwihg",3:"_1c0wl27",4:"_1fsif9a",5:"_tzvtj3",6:"_hep2x1",7:"_1nqcsgr",8:"_19j7w8q",9:"_1bobz9f",10:"_1jtm805",11:"_vy6vmb",12:"_k81kc2"}}};function d({children:e,all:t,xs:i,s,m:o,l,xl:d,pt:g,pb:p,pl:u,pr:E,py:m,px:f,p:_,mt:h,mb:b,ml:T,mr:x,my:I,mx:v,margin:R,className:k,htmlAttributes:A}){return g=r(g),p=r(p),u=r(u),E=r(E),f=r(f),m=r(m),_=r(_),h=r(h),b=r(b),T=r(T),x=r(x),v=r(v),I=r(I),R=r(R),n.createElement("div",{className:(0,a.cx)(c.base,(t||0===t)&&c.breakpoints.all[t],(i||0===i)&&c.breakpoints.xs[i],(s||0===s)&&c.breakpoints.s[s],(o||0===o)&&c.breakpoints.m[o],(l||0===l)&&c.breakpoints.l[l],(d||0===d)&&c.breakpoints.xl[d],k),style:{paddingTop:g||m||_,paddingBottom:p||m||_,paddingLeft:u||f||_,paddingRight:E||f||_,marginTop:h||I||R,marginBottom:b||I||R,marginLeft:T||v||R,marginRight:x||v||R},...A},e)}const g={base:"b1ftt4hl"},p={base:"b14y2nhd"};i(7787)},4262:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});i(7294);var n=i(4230),a=i(6356),s=i(7655),r=i(9655),o=i(3315),l=i(2214),c=i(2824),d=i(2355),g=i(1082),p=i(9463),u=i(4466),E=i(5893);const m=function(){const e=`${s.Z.API_HOST}/widgets/ard/editorials/${s.Z.MOST_SEARCHED_WIDGET_ID}?pageSize=40`,t=(0,p.cw)("search-001",(0,p.Jy)(c.jg.TEASER_CLICK,void 0,e)),i=(0,p.Jy)(c.jg.TEASER_IMPRESSION,void 0,e);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("section",{children:[(0,E.jsx)("h2",{className:(0,g.cx)(o.H2.base),children:"Sendungen A-Z"}),(0,E.jsx)(l.Z,{isFixed:!1,buttonsAs:r.rU,href:(0,d.kK)(c.sL.SHOWS)+"/"})]}),(0,E.jsxs)("section",{children:[(0,E.jsx)("h2",{className:(0,g.cx)(o.H2.base),children:"Häufig gesucht"}),(0,E.jsx)(n.Z,{fetchUrl:e,hasDisabledAnimations:!u.Z.index||!a.Z.animationEnabled,isLoadingEagerly:!0,onTeaserClick:t,onTeaserVisible:i})]})]})}},4230:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(7208),a=i(4398),s=i(7294),r=i(6825),o=i(9506),l=i(3272),c=i(7387),d=i(4895),g=i(2355),p=i(7615),u=i(9463),E=i(6872),m=i(6356),f=i(316),_=i(5150),h=i(7004),b=i(5893);function T({teaser:e,onTeaserClick:t,onTeaserVisible:i,index:n}){return(0,b.jsx)(a.sg,{className:"collection-teaser",all:12,xs:6,s:4,m:3,l:2,xl:2,p:2,margin:3,mx:0,mt:0,children:(0,b.jsx)(h.Z,{...e,onClick:t,onVisible:i,index:n})})}var x=i(4020);const I=(0,r.animated)(a.X2);const v=(0,f.Z)((function({fetchUrl:e,onTeaserClick:t=(()=>{}),onTeaserVisible:i=(()=>{}),hasDisabledAnimations:a=!1,isLoadingEagerly:r=!1,index:f=0}){const{data:_,error:h}=(0,c.ib)(e),v=(R=a,(0,l.Z)({from:{opacity:0},to:{opacity:1},config:{duration:200,easing:n.Vv},immediate:R}));var R;const k=function({onTeaserClick:e,onTeaserVisible:t,isLoadingEagerly:i},n){const{appState:a,buildTeaserContextLink:r}=(0,x.wg)();return(0,s.useMemo)((()=>{if(n?.length)return n.map(((e,t)=>({...(0,p.A3)(e,a),href:r((0,g.Iu)(e)),isLoadingEagerly:i,progress:(0,p.J5)(e.playtime,e.progress),image:e.images.aspect16x9&&{srcset:(0,d.n5)(e.images.aspect16x9.src,[[o.e.w272,320],[o.e.w448,480],[o.e.w320,768],[o.e.w448,960],[o.e.w384,1280],[o.e.w320,1440],[o.e.w320,1600],[o.e.w272,1920],[o.e.w384,2560]]),alt:e.images.aspect16x9.alt,title:(0,d.ZR)(e.images.aspect16x9)},hasClickEffect:m.Z.animationEnabled,index:t}))).map(((i,n)=>(0,b.jsx)(T,{teaser:i,onTeaserClick:e,onTeaserVisible:t,index:n},i.id)))}),[n])}({onTeaserClick:(0,u.UT)(f,_?.id,t),onTeaserVisible:(0,u.UT)(f,_?.id,i),isLoadingEagerly:r},_?.teasers);return!h&&k?(0,b.jsx)(s.Profiler,{id:"CollectionWidget",onRender:E._,children:(0,b.jsx)(I,{style:v,outerSpace:"none",children:k})}):null}),_.Z)},5150:(e,t,i)=>{i.d(t,{Z:()=>l});i(7294);var n=i(3315),a=i(1543),s=i(9649),r=i(1082),o=i(5893);const l=function({hasDisabledAnimations:e=!1,textPosition:t="onImage",hasVisibleTitle:i,placeholderCount:l}){return(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)("h2",{className:(0,r.cx)(n.H2.base),children:(0,o.jsx)("span",{className:(0,r.cx)(a.V.base),style:{width:"150px"}})}),(0,o.jsx)(s.Z,{hasDisabledAnimations:e,textPosition:t,placeholderCount:l})]})}},9649:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(4398),a=i(7208),s=i(7454),r=(i(7294),i(6825)),o=i(3272),l=i(5893);const c=(0,r.animated)(n.X2);const d=function({hasDisabledAnimations:e=!1,textPosition:t="onImage",placeholderCount:i=24}){const r=(d=e,(0,o.Z)({from:{opacity:0},to:{opacity:1},config:{duration:100,easing:a.Vv},delay:250,immediate:d}));var d;return(0,l.jsx)(c,{style:r,outerSpace:"none",children:Array(i).fill({}).map(((e,i)=>(0,l.jsx)(n.sg,{all:12,xs:6,s:4,m:3,l:2,xl:2,p:2,margin:3,mx:0,mt:0,children:(0,l.jsx)(s.Z,{textPosition:t})},i)))})}},7004:(e,t,i)=>{i.d(t,{Z:()=>S});i(7658);var n=i(7294),a=i(4390),s=i(2359),r=i(2442),o=i(1962),l=i(3117),c=i(7216),d=i(1732),g=i(1924),p=i(161),u=i(7781),E=i(7454),m=i(827),f=i(5480),_=i(6356),h=i(2670),b=i(2824),T=i(9655),x=i(6386),I=i(7615),v=i(9463),R=i(4020),k=i(5680),A=i(3534),y=i(5893);const S=function({teaserData:e,id:t,targetId:i,url:S,duration:C,type:O,shortTitle:J,mediumTitle:L,longTitle:Z,isExpired:w,isLoading:D,maturityRating:W,externalHref:N,availableTo:j,teaserButtons:P,hasClickEffect:V,ratio:U,href:G,isStage:M,onClick:H,onVisible:Y,onWatchlistButtonClick:z,as:B=T.rU,index:X=0,hasHiddenTitle:q,hasSubtitles:$,hasSignLanguage:F,hasAudioDescription:K,hasOriginalVersion:Q,programTime:ee,description:te,textPosition:ie,ctaLabel:ne,...ae}){const{appState:se,openPrompt:re}=(0,R.wg)(),oe=(0,f.BP)(),le=function(e){const t=(0,m.kX)(),[i,a]=(0,n.useState)(),s=t.playtime(e);return(0,n.useEffect)((()=>{e&&a(s)}),[s]),i}(i),ce=(0,h.Z)(O),de=(0,v.Y)(X,S,t,i,O,H),ge=(0,v.Y)(X,S,t,i,O,Y),pe=function(e,t,i,r,o,l,c){return(0,n.useMemo)((()=>{let n=[];return t.hasItem(r)&&e.view.loggedInUserId?n.push({text:"Aus Merkliste entfernen",iconLeft:(0,y.jsx)(a.Z,{}),type:"text",onClick:()=>t.removeItem(r)}):n.push({text:"Merken",iconLeft:(0,y.jsx)(s.Z,{}),type:"text",onClick:n=>{e.view.loggedInUserId?(t.addItem(r,o),c&&c(n)):i(b.GV.WATCHLIST_PROMO)}}),l?.length?l.concat(n):n}),[r,t.hasItem(r),o,l,e.view.loggedInUserId,c])}(se,oe,re,i,e,P,(0,v.Y)(X,S,t,i,O,z));if(M)return(0,y.jsx)(k.y,{...ae,id:t,duration:C,shortTitle:J,mediumTitle:L,longTitle:Z,progress:(0,I.J5)(le,C),href:G,teaserButtons:ce===b.Wp.MEDIA&&O!==b.Wp.EXTERNAL&&pe.length>0?pe:P,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:8,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,as:N||D?void 0:B,onClick:H&&de,ratio:U,maturityRating:A.TO[W],availableTo:j,type:O===b.Wp.LIVE?"live":O===b.Wp.EVENT?"event":void 0,programTime:ee});if(!D){if(O===b.Wp.ONDEMAND)return(0,y.jsx)(r.Z,{...ae,id:t,duration:C,shortTitle:J,mediumTitle:L,longTitle:Z,progress:(0,I.J5)(le,C),href:G,teaserButtons:ce===b.Wp.MEDIA&&pe.length>0?pe:void 0,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,hasSignLanguage:F,hasAudioDescription:K,hasOriginalVersion:Q,as:N?void 0:B,onClick:de,onVisible:ge,maturityRating:A.TO[W],availableTo:j,isExpired:w});if(O===b.Wp.LIVE)return(0,y.jsx)(o.Z,{...ae,id:t,shortTitle:J,mediumTitle:L,longTitle:Z,progress:(0,I.J5)(le,C),href:G,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,hasHiddenTitle:q,as:N?void 0:B,onClick:de,onVisible:ge,maturityRating:A.TO[W]});if(O===b.Wp.EVENT)return(0,y.jsx)(l.Z,{...ae,id:t,shortTitle:J,mediumTitle:L,longTitle:Z,href:G,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,as:N?void 0:B,onClick:de,onVisible:ge,programTime:ee,maturityRating:A.TO[W]});if(O===b.Wp.SHOW||O===b.Wp.SERIES||O===b.Wp.CLIP)return(0,y.jsx)(c.Z,{...ae,id:t,shortTitle:J,mediumTitle:L,longTitle:Z,href:G,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasHiddenTitle:q,as:N?void 0:B,onClick:de,onVisible:ge});if(O===b.Wp.POSTER)return(0,y.jsx)(d.Z,{...ae,id:t,duration:C,shortTitle:J,mediumTitle:L,longTitle:Z,progress:(0,I.J5)(le,C),href:G,teaserButtons:ce===b.Wp.MEDIA&&pe.length>0?pe:void 0,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,as:N?void 0:B,onClick:de,onVisible:ge,maturityRating:A.TO[W],availableTo:j});if(O===b.Wp.COLLECTION||O===b.Wp.COMPILATION||O===b.Wp.EDITORIAL_PAGE)return(0,y.jsx)(g.Z,{...ae,id:t,shortTitle:J,mediumTitle:L,longTitle:Z,href:G,target:N?"_blank":void 0,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasHiddenTitle:q,as:N?void 0:B,onClick:de,onVisible:ge});if(O===b.Wp.EPG||O===b.Wp.EPG_LARGE)return(0,n.createElement)(p.Z,{...ae,id:t,key:t,href:G,hasClickEffect:V,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!_.Z.animationEnabled,hasSubtitles:$,hasSignLanguage:F,hasAudioDescription:K,hasOriginalVersion:Q,maturityRating:A.TO[W],description:te,onClick:de,onVisible:ge,as:B,type:O===b.Wp.EPG_LARGE?"large":"default"});if(O===b.Wp.EXTERNAL)return(0,y.jsx)(u.Z,{...ae,id:t,shortTitle:J,title:J,description:te,ctaLabel:ne??G,href:G,hasDisabledAnimations:!_.Z.animationEnabled,onClick:de,onVisible:ge})}return D?(0,y.jsx)(E.Z,{textPosition:ie}):(console.error(`🚨 rendering unknown teaser="${O}" 🚨`),null)}},2670:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(2824);const a={[n.Wp.LIVE]:n.Wp.LIVE,[n.Wp.EVENT]:n.Wp.LIVE,[n.Wp.SHOW]:n.Wp.SHOW,[n.Wp.SERIES]:n.Wp.SHOW,[n.Wp.CLIP]:n.Wp.SHOW,[n.Wp.ONDEMAND]:n.Wp.MEDIA,[n.Wp.POSTER]:n.Wp.MEDIA,[n.Wp.COMPILATION]:n.Wp.COLLECTION,[n.Wp.EDITORIAL_PAGE]:n.Wp.COLLECTION};const s=function(e){return a[e]||n.Wp.MEDIA}},3272:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(6825),a=i(4466);const s=function(e){return a.Z.index||(e.from=e.to,e.immediate=!0),(0,n.useSpring)(e)}},9463:(e,t,i)=>{i.d(t,{Ih:()=>_,nb:()=>E,cw:()=>u,Y:()=>h,UT:()=>m,vV:()=>c,oM:()=>l,Jy:()=>g});var n=i(9250),a=i(7294),s=i(4770),r=i(2824),o=i(6356);function l(e=[],t,i){const{pathname:l,search:c}=(0,n.TH)();(0,a.useEffect)((()=>{if(o.Z.trackingEnabled&&(0===e.length||void 0!==e[0])){const e={[r.gJ.REFERER]:l+c,[r.gJ.PAGE_URL]:t,[r.gJ.ERROR_CODE]:i};(0,s.Z)(r.jg.PAGE,e)}}),[...e])}function c(e,t,i,l,c=[]){const{pathname:d,search:g}=(0,n.TH)();return(0,a.useCallback)((()=>{if(o.Z.trackingEnabled){const n={[r.gJ.REFERER]:d+g,[r.gJ.TITLE]:t,[r.gJ.CATEGORY]:i,[r.gJ.TYPE]:e,[r.gJ.PAGE_URL]:l};(0,s.Z)(r.jg.CLICK,n)}}),[...c])}var d=i(4020);const g=function(e,t,i,l=0){const{appState:c}=(0,d.wg)(),{pathname:g,search:p,hash:u}=(0,n.TH)();return(0,a.useCallback)((n=>{if(o.Z.trackingEnabled){const a={[r.gJ.REFERER]:g+p+u,[r.gJ.PAGE_URL]:t,[r.gJ.WIDGET_URL]:i,[r.gJ.WIDGET_INDEX]:n.widgetIndex??l,[r.gJ.WIDGET_ID]:n.widgetId,[r.gJ.TEASER_URL]:n.teaserUrl,[r.gJ.TEASER_INDEX]:n.teaserIndex};(0,s.Z)(e,a)}}),[e,l,c.navigation.currentRoute.channelType,t,i,g,p])};var p=i(3593);const u=function(e,t){return(0,a.useCallback)(function(e,t){return i=>{o.Z.trackingEnabled&&i.teaserType&&[r.Wp.MEDIA,r.Wp.EPG,r.Wp.EPG_LARGE].includes(i.teaserType)&&i.clipId&&e&&(0,p.f3)(i.clipId,{[r.gJ.CONTEXT_PAGE_ID]:e,[r.gJ.CONTEXT_WIDGET_ID]:i.widgetId,[r.gJ.CONTEXT_TEASER_ID]:i.teaserId}),t&&t(i)}}(e,t),[e,t])};function E(e,t,i){return n=>{i&&i({widgetIndex:e,widgetId:t,...n})}}const m=function(e,t,i){return(0,a.useCallback)(E(e,t,i),[e,t,i])};var f=i(2670);function _(e,t,i,n,a,s){return r=>{s&&s({clipId:n,teaserIndex:e,teaserUrl:t,teaserId:i,teaserType:(0,f.Z)(a),...r})}}const h=function(e,t,i,n,s,r){return(0,a.useCallback)(_(e,t,i,n,s,r),[e,t,i,n,s,r])}},3593:(e,t,i)=>{i.d(t,{Mc:()=>c,Nq:()=>d,f3:()=>l});var n=i(4770),a=i(2824),s=i(4466);const r=new Map;let o=null;const l=function(e,t){r.delete(e),r.set(e,t),r.size>100&&r.delete(r.keys().next().value)},c=function(e){r.delete(e)},d=function(e){o=e},g={getTracker(){const e=s.Z.location.pathname+s.Z.location.search,t=window.parent!==window.self?document.referrer:void 0;return{track({type:i,options:s,properties:l}){const c=r.has(o)?r.get(o):{},d={[a.gJ.SESSION_ID]:s.av_session_id,[a.gJ.AUTOPLAY]:l.av_autoplay,[a.gJ.AUDIO_DESCRIPTION]:l.av_audio_description,[a.gJ.LANGUAGE]:l.av_language,[a.gJ.MUTE]:l.av_mute,[a.gJ.ORIGINAL_VERSION]:l.av_original_version,[a.gJ.SUBTITLES]:l.av_subtitles,[a.gJ.QUALITY]:l.av_quality,[a.gJ.PREVIOUS_POSITION]:s.av_prev_position,[a.gJ.PREVIOUS_EVENT]:s.av_previous_event,[a.gJ.PLAYER_VERSION]:l.av_player_version,[a.gJ.POSITION]:s.av_position,[a.gJ.INTERACTION_SOURCE]:l.av_interaction_source,[a.gJ.JUMPMARK]:l.av_jumpmark,[a.gJ.PLAYER_MODE]:l.av_player_mode,[a.gJ.AUTO_MODE]:l.av_auto_mode,[a.gJ.LAUNCH_REASON]:l.av_launch_reason,[a.gJ.SIGN_LANGUAGE]:l.av_sign_language,[a.gJ.PARENT_URL]:t,[a.gJ.ERROR_CODE]:l.error_message?.substring(0,255),[a.gJ.REFERER]:e,...c};(0,n.Z)(i,d)}}}};window.ARDPlayerPianoDelegate=g},4770:(e,t,i)=>{i.d(t,{Z:()=>f});i(7658);var n=i(2824),a=i(7655),s=i(3416),r=i(8805),o=i(6356),l=i(4466),c=i(8137);const d="uuid";let g,p=!0;try{g=localStorage.getItem(d)}catch(e){console.error(String(e))}let u,E=[];async function m(){let e={[n.gJ.VERSION]:"2.40.4-1"};var t;let i;t=e,p&&document.referrer&&(p=!1,t[n.gJ.EXTERNAL_REFERER]=document.referrer),function(e){const t=o.Z.campaign;t&&(e[n.gJ.CAMPAIGN]=t.campaign,e[n.gJ.MEDIUM]=t.medium,e[n.gJ.ADG]=t.agd,e[n.gJ.AD]=t.ad,e[n.gJ.TERM]=t.term,e[n.gJ.TARGET]=t.target)}(e),function(e){e[n.gJ.VIEWPORT_HEIGHT]=window.innerHeight,e[n.gJ.VIEWPORT_WIDTH]=window.innerWidth}(e),1===E.length?i={...e,...E[0]}:(!function(e,t){for(const i in e[0]){const n=e[0][i];if(e.every((e=>e[i]===n))){t[i]=n;for(const t of e)delete t[i]}}}(E,e),i={[n.gJ.EVENTS]:E,...e}),E=[];try{const e=await fetch(`${a.Z.TRACKING_PROXY_HOST}/${function(){if(!g){g=(0,s.x0)();try{localStorage.setItem(d,g)}catch(e){console.error(String(e))}}return g}()}?${function(e){const t=new URLSearchParams;for(const i in e){const n=e[i];(n||"number"==typeof n||"boolean"==typeof n)&&(Array.isArray(n)?t.set(i,JSON.stringify(n)):t.set(i,String(n)))}return t}(i)}`,{keepalive:!0,credentials:"omit"});"local"===a.Z.STAGE_TYPE&&e.text()}catch(e){}}window.addEventListener("beforeunload",(()=>{E.length&&m()}));const f=async function(e,t){t[n.gJ.TRACKING_TYPE]=e,t[n.gJ.DEVICE_TIMESTAMP_UTC]=(0,c.Xx)(),function(e){r.default.isLoggedIn&&(e[n.gJ.USER_ID]=r.default.userId,e[n.gJ.USER_AGE]=r.default.ageRating,e[n.gJ.SIGN_IN_PROVIDER]=r.default.signInProvider)}(t),t[n.gJ.REFERER]||(t[n.gJ.REFERER]=l.Z.location.pathname+l.Z.location.search),E.push(t),1===E.length?u=setTimeout((()=>{m()}),5e3):E.length>=10&&(clearTimeout(u),m())}},8635:(e,t,i)=>{e.exports=i.p+"78492f0a1915464b90c8.css"},7787:(e,t,i)=>{e.exports=i.p+"78492f0a1915464b90c8.css"},3416:(e,t,i)=>{i.d(t,{x0:()=>n});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}}]);