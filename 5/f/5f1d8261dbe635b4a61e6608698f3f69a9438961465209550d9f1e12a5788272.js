"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[741],{67097:(o,e,n)=>{n.d(e,{k:()=>v});var s=n(57013);const r=(()=>{try{return/\b(Chrome|Chromium)\//.test(null===navigator||void 0===navigator?void 0:navigator.userAgent)}catch(o){console.log("Server Side")}return!0})(),t=o=>o<10?`0${o}`:`${o}`,a=()=>({toString:()=>{const o=new Date,e=o.getFullYear(),n=o.getMonth()+1,s=o.getDate(),r=o.getHours(),a=o.getMinutes(),i=o.getSeconds(),c=o.getMilliseconds();return`${e}-${t(n)}-${t(s)} ${t(r)}:${t(a)}:${t(i)}.${c}`}}),i={log:(r?"%c":"%s")+"☕[%s][Log]",error:(r?"%c":"%s")+"❗[%s][Error]",warn:(r?"%c":"%s")+"⚠️[%s][Warn]",info:(r?"%c":"%s")+"💬[%s][Info]",debug:(r?"%c":"%s")+"⛏[%s][Debug]"},c=o=>(...e)=>{var n;const s="undefined"!=typeof window;if(!s||s&&(null===(n=null===window||void 0===window?void 0:window.map)||void 0===n?void 0:n.log))return console[o].apply(console,[i[o],r?"color: PowderBlue;":"",a(),...e])},l=o=>o?c("log"):console.log.bind(console,i.log,r?"color: PowderBlue;":"",a()),p=o=>o?c("error"):console.error.bind(console,i.error,r?"color: Red;":"",a()),d=o=>o?c("warn"):console.warn.bind(console,i.warn,r?"color: Orange;":"",a()),g=o=>o?c("info"):console.info.bind(console,i.info,r?"color: Green;":"",a()),u=o=>o?c("debug"):console.debug.bind(console,i.debug,r?"color: DodgerBlue;":"",a()),v=(m="real"===(null===s.Z||void 0===s.Z?void 0:s.Z.ENV),{log:l(m),error:p(m),warn:d(m),info:g(m),debug:u(m)});var m},57013:(o,e,n)=>{n.d(e,{Z:()=>r});const s=Object.assign(Object.assign({},{IS_DEV_MODE:!1,ENV:"real",PORT:3500,HASH:"e8b0d83",TIME:1702966884269,NAME:"pc-v5-resurrection",VERSION:"3.4.0",DESC:"pc map v5 resurrection project",TARGET:"c"}),{production:!1,maps:{mantle:{scripts:["https://dev-oapi.map.naver.com/openapi/maps3.max.js","https://dev-oapi.map.naver.com/openapi/maps3-gl.max.js"]}}}),r=Object.assign(Object.assign({},s),{production:!0,maps:Object.assign(Object.assign({},s.maps),{mantle:{scripts:["https://ssl.pstatic.net/sstatic.map/openapi/maps3.js","https://ssl.pstatic.net/sstatic.map/openapi/maps3-gl.js"]}})})},8153:(o,e,n)=>{var s=n(66941),r=n(82070),t=n(67097);!function(o){(0,s.wW)(),o.addEventListener("install",(e=>{t.k.log(e),o.skipWaiting()})),o.addEventListener("activate",(o=>{t.k.log(o),(0,r.aB)()}))}(self)}},o=>{o.O(0,[736],(()=>(8153,o(o.s=8153)))),o.O()}]);void 0:n.offsetHeight,r]);var A=(r||[]).map((function(e){var n=a===e.selectedFilter;return(0,h.jsx)("li",{"aria-controls":"tabpanel-"+e.selectedFilter,children:(0,h.jsx)("button",{type:"button",className:v("tab_btn"),onClick:function(n){e.selectedFilter===o.j_?(0,u.l)(n,"svh.faq"):(0,u.l)(n,f),c(e.selectedFilter),null===s||void 0===s||s(e.selectedFilter)},"aria-current":n?"page":null,children:e.name})},e.selectedFilter)})),L=m?g:k;return(0,h.jsx)("div",{className:v("filter_tab"),children:(0,h.jsxs)("div",{className:v("tab_box",L&&"open"),style:{height:L?"auto":w},children:[(0,h.jsx)("ul",{role:"navigation",className:v("tab_list"),ref:y,children:A}),I&&(0,h.jsx)("button",{className:v("more_btn"),onClick:function(e){m?(N((0,d.jB)(!g)),g?(0,u.l)(e,x):(0,u.l)(e,b)):(j(!k),k?(0,u.l)(e,x):(0,u.l)(e,b))},children:(0,h.jsx)("span",{className:v("blind"),children:L?"\uc811\uae30":"\ud3bc\uccd0\ubcf4\uae30"})})]})})}},5264:function(e,n,i){"use strict";i.d(n,{Z:function(){return N}});var t,r=i(7294),a=i(7166),c=i.n(a),s=i(6613),l=i(3352),o=i.n(l),u=i(9657),_=i(9484),d=i(1163),h=i(3353);!function(e){e.SMARTBOT="SMARTBOT",e.LINK="LINK"}(t||(t={}));var v=i(3776),f=i(2421),b=i(5675),x=i(5893),m=c().bind(o()),N=function(e){var n=e.serviceAlias,i=(0,d.useRouter)(),a=(0,u.v9)((function(e){return e.home})),c=a.inquiryListBanner,l=a.info,o=(0,u.I0)(),N=(0,u.v9)((function(e){return e.language})).languageCode,g=f.Z.isServicePage(null===l||void 0===l?void 0:l.serviceNo);(0,r.useEffect)((function(){o((0,_.ry)({serviceAlias:n,languageCode:N}))}),[]);return(0,x.jsx)("div",{className:m("ask"),"aria-label":"\ub2e4\ub978 \ub3c4\uc6c0\uc774 \ud544\uc694\ud558\uc2e0\uac00\uc694?",children:!(null===c||void 0===c||!c.length)&&(0,x.jsxs)("div",{className:m("inner"),children:[(0,x.jsx)(s.Z,{title:"\ub2e4\ub978 \ub3c4\uc6c0\uc774 \ud544\uc694\ud558\uc2e0\uac00\uc694?"}),(0,x.jsx)("div",{className:m("ask_area",3===c.length&&"three_type"),children:null===c||void 0===c?void 0:c.map((function(e){return(0,x.jsx)("div",{className:m("ask_box"),children:(0,x.jsxs)("a",{href:"#",className:m("link"),onClick:function(n){return function(e,n,r,a){(0,v.l)(e,a),e.preventDefault(),n===t.SMARTBOT&&(g?window.open(l.floatingInfo.linkUrl,"_blank"):o((0,h.UW)(1))),n!==t.LINK||i.push(r)}(n,e.inquiryBannerType,e.linkUrl,e.nclickCode)},children:[(0,x.jsxs)("div",{className:m("ask_info"),children:[(0,x.jsx)("div",{className:m("ask_icon"),children:e.iconImagePath&&(0,x.jsx)(b.default,{src:e.iconImagePath,width:47,height:41})}),(0,x.jsx)("strong",{className:m("ask_title"),children:e.title})]}),(0,x.jsx)("p",{className:m("text"),children:e.description})]})},e.inquiryBannerNo)}))})]})})}},7970:function(e,n,i){"use strict";i(7294);var t=i(7166),r=i.n(t),a=i(2164),c=i.n(a),s=i(4300),l=i(3776),o=i(5893),u=r().bind(c());n.Z=function(e){var n=e.title,i=e.description,t=e.url,r=e.nClickCode;return(0,o.jsx)("div",{className:u("main_banner"),children:(0,o.jsx)(s.Z,{href:t,children:(0,o.jsxs)("a",{className:u("inner"),onClick:function(e){return(0,l.l)(e,r)},children:[(0,o.jsx)("h2",{children:n}),i&&(0,o.jsx)("p",{className:u("main_banner_des"),children:i})]})})})}},6613:function(e,n,i){"use strict";i(7294);var t=i(7166),r=i.n(t),a=i(9029),c=i.n(a),s=i(5893),l=r().bind(c());n.Z=function(e){var n=e.title,i=e.count;return(0,s.jsxs)("h3",{className:l("mid_title"),children:[n,i&&(0,s.jsx)("em",{className:l("num"),children:i})]})}},3048:function(e,n,i){"use strict";var t=i(7294),r=i(7166),a=i.n(r),c=i(9146),s=i.n(c),l=i(6535),o=i(1403),u=i(1163),_=i(1572),d=i(9657),h=i(2424),v=i(3776),f=i(5893),b=a().bind(s());n.Z=function(e){var n=e.title,i=e.placeholdeText,r=e.nClickAreaCode,a=((0,u.useRouter)(),(0,d.I0)()),c=(0,d.v9)((function(e){return e.search})).isGNBInputFocus,s=(0,d.v9)((function(e){var n;return null===(n=e.home)||void 0===n?void 0:n.info})).serviceNo,x=(0,t.useState)(!1),m=x[0],N=x[1],g=(0,o.Z)({useUrl:!0}),p=g.keyword,k=g.setKeyword,j=g.onKeyPress,y=g.handleDeleteKeyword,C=g.handleSearch,I=(0,_.Z)().isMobileSize;(0,t.useEffect)((function(){y()}),[s]);var B=m&&!I&&!c;return(0,f.jsx)("div",{className:b("search"),role:"search",children:(0,f.jsx)("div",{className:b("inner"),children:(0,f.jsxs)("div",{className:b("search_area",B&&"ly_open"),children:[(0,f.jsx)("div",{className:b("pc_wrapper"),children:(0,f.jsxs)("div",{className:b("search_box"),children:[(0,f.jsx)("input",{type:"text",name:"query",placeholder:i,autoComplete:"off",className:b("search_input"),value:p,onKeyPress:j,onChange:function(e){return k(e.target.value)},title:n,onFocus:function(e){(0,v.l)(e,"".concat(r,".search")),a((0,h.Bv)(!1)),I?a((0,h.IC)(!0)):N(!0)},onBlur:function(e){var n=e.relatedTarget,i=document.querySelector("#".concat(l.P)),t=document.querySelector("#search-button"),r=document.querySelector("#search-close-button"),a=null===i||void 0===i?void 0:i.contains(n),c=null===t||void 0===t?void 0:t.contains(n),s=null===r||void 0===r?void 0:r.contains(n);a||c||s||N(!1)}}),p&&(0,f.jsx)("button",{type:"button",className:b("btn_close"),onClick:function(e){(0,v.l)(e,"".concat(r,".cancel")),y(),N(!1)},id:"search-close-button",children:(0,f.jsx)("span",{className:"blind",children:"\uc785\ub825 \ub0b4\uc6a9 \uc0ad\uc81c"})}),(0,f.jsx)("button",{type:"button",className:b("btn_search","search-layer"),onClick:function(){I?(a((0,h.Bv)(!1)),a((0,h.IC)(!0))):C()},id:"search-button",children:(0,f.jsx)("span",{className:"blind",children:"\uac80\uc0c9"})})]})}),B&&(0,f.jsx)(l.Z,{keyword:p,setShowSearchLayer:N,text:i})]})})})}},2581:function(e,n,i){"use strict";i.d(n,{Z:function(){return N}});var t=i(7294),r=i(7166),a=i.n(r),c=i(233),s=i.n(c),l=i(4851),o=i(9657),u=i(4300),_=i(3776),d=i(5893),h=a().bind(s()),v=function(e){for(var n=e.rotateCnt,i=e.urgency,t=e.lable,r=e.noticeData,a=e.nClickCode,c=(0,o.v9)((function(e){return e.home})).info,s=[],v=r.length,f=-1;f<2;f++){var b=r[(n+f+v)%v],x="translateY(".concat(40*f,"px)"),m=c?null===c||void 0===c?void 0:c.serviceNo:0;s.push((0,d.jsxs)("div",{className:h("item"),style:{transform:x},children:[(0,d.jsxs)("span",{className:h("badge"),children:[t,b.isNew&&(0,d.jsx)("span",{className:h("new"),children:"\uc2e0\uaddc"})]}),(0,d.jsx)(u.Z,{href:l.Z.noticeDetail({serviceNo:m,noticeNo:b.id}),children:(0,d.jsx)("a",{className:h("text"),onClick:function(e){return(0,_.l)(e,a)},children:b.title})})]},n+f))}return(0,d.jsx)("div",{className:h("notice_list",i&&"urgency"),children:(0,d.jsx)("div",{children:s})})},f=i(9023),b=i(9484),x=i(2421),m=a().bind(s()),N=function(){var e=(0,o.v9)((function(e){return e.language})),n=e.i18n,i=e.languageCode,r=(0,o.v9)((function(e){return e.home})),a=r.notice,c=r.info,s=(0,o.v9)((function(e){return e.browserEnv})).isPC,h=(0,t.useState)(0),N=h[0],g=h[1],p=(0,o.I0)(),k=x.Z.isServicePage(null===c||void 0===c?void 0:c.serviceNo),j=function(){return k?"svh":s?"rnt":"ntc"};(0,t.useEffect)((function(){return p((0,b.Uw)({serviceNo:null===c||void 0===c?void 0:c.serviceNo,languageCode:i})),function(){p((0,b.od)())}}),[null===c||void 0===c?void 0:c.serviceNo]),(0,t.useEffect)((function(){var e=new f.k;return e.timeoutWindowApi((function(){g(N+1)}),5e3),e.toDisposeFN()}),[N]);var y=!(null===a||void 0===a||!a.emergencyNoticeList.length)||!(null===a||void 0===a||!a.noticeList.length);return(0,d.jsx)(d.Fragment,{children:y?(0,d.jsx)("div",{className:m("notice"),children:(0,d.jsxs)("div",{className:m("inner"),children:[(0,d.jsxs)("div",{className:m("notice_box"),children:[!(null===a||void 0===a||!a.emergencyNoticeList.length)&&(0,d.jsx)(v,{rotateCnt:N,lable:n["main.ticker.text.urgent.notice"],urgency:!0,noticeData:null===a||void 0===a?void 0:a.emergencyNoticeList,nClickCode:"".concat(j(),".ticker1")}),!(null===a||void 0===a||!a.noticeList.length)&&(0,d.jsx)(v,{rotateCnt:N,lable:n["main.ticker.text.notice"],urgency:!1,noticeData:null===a||void 0===a?void 0:a.noticeList,nClickCode:"".concat(j(),".ticker2")})]}),(0,d.jsx)(u.Z,{href:l.Z.noticeList(null===c||void 0===c?void 0:c.serviceNo),children:(0,d.jsx)("a",{className:m("notice_link"),onClick:function(e){return(0,_.l)(e,"".concat(j(),".all"))},children:(0,d.jsx)("span",{className:m("text"),children:n["main.ticker.text.all.notice.link"]})})})]})}):(0,d.jsx)(t.Fragment,{})})}},1545:function(e){e.exports={banner:"Banner_banner__9c-Yn",hidden:"Banner_hidden__Jjehz",banner_box:"Banner_banner_box__2xLfG",banner_link:"Banner_banner_link__2w6lV"}},6639:function(e){e.exports={filter_tab:"FilterTab_filter_tab__1gmqW",tab_box:"FilterTab_tab_box__2HY09",open:"FilterTab_open__1BHeb",more_btn:"FilterTab_more_btn__w2C-Z",tab_list:"FilterTab_tab_list__3fleQ",tab_btn:"FilterTab_tab_btn__2B4dI",service_faq:"FilterTab_service_faq__4CAb_"}},3352:function(e){e.exports={ask:"InquiryBanner_ask__1bu9A",ask_area:"InquiryBanner_ask_area___xEd5",three_type:"InquiryBanner_three_type__3X1sn",ask_box:"InquiryBanner_ask_box__97q6e",link:"InquiryBanner_link__RDXYI",ask_title:"InquiryBanner_ask_title__2P76p",ask_info:"InquiryBanner_ask_info__3W5WB",ask_icon:"InquiryBanner_ask_icon__1PFm9",text:"InquiryBanner_text__3XP-R"}},2164:function(e){e.exports={main_banner:"MainBanner_main_banner__2JttB",fixed:"MainBanner_fixed__uYgYc",inner:"MainBanner_inner__rRXQV",main_banner_des:"MainBanner_main_banner_des__2JcRZ"}},9029:function(e){e.exports={mid_title:"MidTitle_mid_title__3DC4Q"}},9146:function(e){e.exports={search:"Search_search__2rErx",search_area:"Search_search_area__1Myv-",ly_open:"Search_ly_open__1R65A",search_box:"Search_search_box__2RnqG",search_input:"Search_search_input__15WyK",btn_search:"Search_btn_search__s1gr6",btn_close:"Search_btn_close__XHvjd",search_shadow:"Search_search_shadow__1xOnV"}},233:function(e){e.exports={notice:"Notice_notice__2Afy-",notice_box:"Notice_notice_box__3Ct-W",notice_list:"Notice_notice_list__38OkH",urgency:"Notice_urgency__3mgjy",item:"Notice_item__20OhE",badge:"Notice_badge__2SIJf",new:"Notice_new__2I4BK",text:"Notice_text__3bKYM",notice_link:"Notice_notice_link__1R2Gg"}}}]);a> <a href="https://hankookilbo.com/News/Read/A2024011613480005423" target="_blank"> 경찰관들이 우울증에 죽고 있다… 세상 등지는 '파출소 근무 50대 경위' </a> <a href="https://hankookilbo.com/News/Read/A2024011710220000201" target="_blank"> 현역병 안 가려 '지적장애' 진단받은 아이돌 멤버, 집행유예 </a> <a href="https://hankookilbo.com/News/Read/A2024011708580001105" target="_blank"> 당무 복귀 이재명 "국민 겪는 고통 비하면 사소한 일" </a> <a href="https://hankookilbo.com/News/Read/A2024011707410001437" target="_blank"> 국민의힘 3선 감점 룰에... 박지원 "공천 학살 시작, 이준석 축하한다" </a> <a href="https://hankookilbo.com/News/Read/A2024011709080001493" target="_blank"> 미국, 후티 반군에 세 번째 공습... "추가 조치 망설이지 않겠다" </a> <a href="https://hankookilbo.com/News/Read/A2024011511030005559" target="_blank"> 종이팩 재활용률 절반 넘게 '뚝'… 범인은 '멸균팩'이라고? </a> </li> 
    </ul> 
   </div> 
   <div class="news-more"> 
    <h2 class="hidden">주요뉴스</h2> 
    <div class="top-issue"> 
     <a href="https://hankookilbo.com/News/Read/A2024011614100002220" target="_blank"> 
      <div class="frame"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/002.jpg" alt=""> 
      </div> <p> 한동훈 팬덤, '김건희 팬클럽'과 충돌… 與 지지층 분리 신호 </p> </a> 
    </div> 
    <ul class="text-list"> 
     <li> <a href="https://hankookilbo.com/News/Read/A2024011710220000201" target="_blank"> 현역병 안 가려 '지적장애' 진단받은 아이돌 멤버, 집행유예 </a> <a href="https://hankookilbo.com/News/Read/A2024011708580001105" target="_blank"> 당무 복귀 이재명 "국민 겪는 고통 비하면 사소한 일" </a> <a href="https://hankookilbo.com/News/Read/A2024011707410001437" target="_blank"> 국민의힘 3선 감점 룰에... 박지원 "공천 학살 시작, 이준석 축하한다" </a> </li> 
    </ul> 
    <div class="opinion"> 
     <a href="https://hankookilbo.com/News/Read/A2024011616300000128" target="_blank"> 
      <div class="head">
        사설 
      </div> 
      <div class="title">
        강대강 부딪힌 남북 정상... 尹, 냉정하게 관계 주도하길 
      </div> </a> 
    </div> 
    <div class="focus"> 
     <a href="https://hankookilbo.com/News/Read/A2024011514080004010" target="_blank"> 
      <div class="frame"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/003.jpg" alt=""> 
      </div> 
      <div class="body"> 
       <div class="head">
         세계·사람·생각 
       </div> 
       <div class="title">
         '백세 노인' TOP 5 국가는 어디? 
       </div> 
      </div> </a> 
     <a href="https://hankookilbo.com/News/Read/A2024011622240003201" target="_blank"> 
      <div class="frame"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/004.jpg" alt=""> 
      </div> 
      <div class="body"> 
       <div class="head">
         오늘의 1면 사진 
       </div> 
       <div class="title">
         金 "제1 적대국" 尹 "몇 배 응징" 한반도 긴장 
       </div> 
      </div> </a> 
    </div> 
   </div> 
   <div class="news-media"> 
    <div class="enter"> 
     <h2>연예 · 스포츠</h2> 
     <div class="top-news"> 
      <a href="https://hankookilbo.com/News/Read/A2024011608100001371" target="_blank"> <p> 선생님과 21세 결혼…'인간극장' 사제지간 러브스토리 화제 </p> 
       <div class="frame"> 
        <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/005.jpg" alt=""> 
       </div> </a> 
     </div> 
     <ul class="text-list"> 
      <li> <a href="https://hankookilbo.com/News/Read/A2024011614150001947" target="_blank"> 고현정, 여전히 솔직한 입담…"조인성과 열애? 정말 아냐" </a> </li> 
     </ul> 
     <ul class="text-list"> 
      <li> <a href="https://hankookilbo.com/News/Read/A2024011521500003295" target="_blank"> '이강인 멀티골'… 아시안컵 첫 경기 바레인에 3-1 대승 </a> </li> 
     </ul> 
     <ul class="text-list"> 
      <li> <a href="https://hankookilbo.com/News/Read/A2024011215200000240" target="_blank"> 최형우 "박수 칠 때 떠나라? 전 계속 할 겁니다" </a> </li> 
     </ul> 
    </div> 
    <div class="media"> 
     <h3 class="hidden">멀티미디어 뉴스</h3> 
     <a href="https://hankookilbo.com/News/Read/A2024011613250005322" target="_blank"> 
      <div class="body"> 
       <div class="head">
         현장 줌-인 
       </div> 
       <div class="title">
         '북극 한파'에 꽁꽁 얼어붙은 미국[포토] 
       </div> 
      </div> 
      <div class="frame img"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/006.jpg" alt=""> 
      </div> </a> 
     <a href="https://hankookilbo.com/News/Read/A2024011611170004298" target="_blank"> 
      <div class="body"> 
       <div class="head">
         영상 
       </div> 
       <div class="title">
         영롱한 눈꽃·얼음꽃… 겨울이어서 찬란한 3가지 숲길 
       </div> 
      </div> 
      <div class="frame video"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/007.jpg" alt=""> 
      </div> </a> 
     <a href="https://hankookilbo.com/News/Read/A2024011614050001150" target="_blank"> 
      <div class="body"> 
       <div class="head">
         동물 
       </div> 
       <div class="title">
         도도새, 코뿔소... "사람의 이기심에 멸종되는 동물 이야기 전하고파" [인터뷰] 
       </div> 
      </div> 
      <div class="frame"> 
       <img src="https://ssl.pstatic.net/static/newsstand/2024/0117/hankookilbo/110852/008.jpg" alt=""> 
      </div> </a> 
    </div> 
   </div> 
  </div>  
 </body>
</html>on;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		utils.getRect(this.wrapper);		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

		var rect = utils.getRect(this.scroller);
/* REPLACE START: refresh */

		this.scrollerWidth	= rect.width;
		this.scrollerHeight	= rect.height;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
		
		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;
		
		if(utils.hasPointer && !this.options.disablePointer) {
			// The wrapper should have `touchAction` property for using pointerEvent.
			this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true);

			// case. not support 'pinch-zoom'
			// https://github.com/cubiq/iscroll/issues/1118#issuecomment-270057583
			if (!this.wrapper.style[utils.style.touchAction]) {
				this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false);
			}
		}
		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},	

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		var elRect = utils.getRect(el);
		var wrapperRect = utils.getRect(this.wrapper);
		if ( offsetX === true ) {
			offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		if (!this.options.useTransition) {
			return;
		}
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}

		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el,
				rect;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					rect = utils.getRect(el[i]);
					if ( i === 0 || rect.left <= utils.getRect(el[i-1]).left ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-rect.left, this.maxScrollX);
					y = Math.max(-rect.top, this.maxScrollY);
					cx = x - Math.round(rect.width / 2);
					cy = y - Math.round(rect.height / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: rect.width,
						height: rect.height,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars && this.wrapper.parentNode ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}

		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		utils.getRect(this.wrapper);	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
