(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"87AG":pHlS:function(e,t,n){"use strict";n.r(t);n("sMBO"),n("2B1R"),n("J30X"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("pjDv"),n("rB9j");var a=n("2mXy"),c=n("ozCP"),r=n("V88N"),o=n("MOxe"),i=n("a0QT"),l=n("V/rS"),s=n("scas"),u=n("yCFz"),d=n("/mO7"),b=n("8ejd");n("87AG");default=function(e){var t=e.logout,n=f(Object(i.a)(!1),3),m=n[0],j=n[1],h=n[2],O=f(Object(o.useState)(!1),2),p=O[0],k=O[1],v=f(Object(o.useState)(!1),2),y=v[0],w=v[1],g=f(Object(o.useState)(null),2),S=g[0],E=g[1],_=f(Object(o.useState)(null),2),C=_[0],R=_[1],P=Object(o.useRef)(null),I=Object(u.a)().callMeasurementEvent;Object(l.a)(P,(function(){return m(!1)}));var A=window.qf.user,T=A.name,N=A.email,U=A.avatar,F=[{name:"Mój profil",url:b.a.USER_PROFILE,desktop:!0,counter:!1},{name:"Powiadomienia",url:"#",desktop:!1,counter:S,handleClick},{name:"Wiadomości",desktop:!1,url:b.a.CHAT,counter:C},{name:"Planer gotowania",url:b.a.PROFILE_GET_PLANER,desktop:!0,counter:!1},{name:"Dodaj playlistę",url:b.a.USER_PROFILE_VIDEOS,desktop:!0,counter:!1,handleCli)}},{name:"Zarabiaj ze Smakerem",url:b.a.USER_PROFILE_ADSENSE,desktop:!0,counter:!1,handleCli)}},{name:"Ustawienia",url:b.a.USER_PROFILE_SETTINGS,desktop:!0,counter:!1},{name:"Prywatność",url:"#",desktop:!0,counter:!1,blank:!1,handleC,!1}}];Object(o.useEffect)((function(){window.innerWidth<r.a.md&&(h?s.a.init():s.a.remove()),S||C||k(!1)}),[h]),Object(o.useEffect)((function(){c.a.on(c.a.events.COUNTERS,(function(e){e[1]&&E(e[1].views),e[2]&&R(e[2].unread)}))}),[]),Object(o.useEffe!0)}),[S,C]);v!1)},M=function(){window.Inpl&&window.Inpl.Rodo.click("smaker","/rodo/verify/user",N)};return Object(a.h)("div",{ref:P},Object(a.h)("button",{type:"button",class:"user--header--icon -user",onClick:m},Object(a.h)("div",{class:"user--desktop"},Object(a.h)("span",{class:"icon-user -icon"}),Object(a.h)("span",{class:"username"},T),Object(a.h)("i",{class:"-arrow ".concat(h?"icon-arrow-up text-primary":"icon-arrow-down")})),Object(a.h)("div",{class:"user--mobile"},Object(a.h)("div",{class:"avatar ".concat(j("-active"))},Object(a.h)("div",{class:"avatar--component"},p&&Object(a.h)("span",{class:"indicator"}),Object(a.h)("div",{class:"border ".concat(U?"":"-noborder")},Object(a.h)("div",{class:"img"},Object(a.h)("img",{class:U?"user--avatar":"img",src:U||"/images/icon-hat.svg",alt:T}))))))),h&&Object(a.h)("div",{class:"nav--user--comp ".concat(y?"notifyToggled":"")},y&&Object(a.h)("div",{class:"notify--container md:hidden"},Object(a.h)(d.default,{toggleNotification:y}),Object(a.h)("span",{class:y?"icon icon-close ml-4 -show":"icon icon-close ml-4",onC!1)}})),Object(a.h)("ul",{class:"user--info"},Object(a.h)("li",{class:"username"},T),Object(a.h)("li",{class:"email"},N)),Object(a.h)("ul",{class:"nav--sublist -user"},null==F?void 0:F.map((function(e){return Object(a.h)("li",{class:"nav--sublist--item ".concat(e.desktop?"":"-hidden"),key:e.name,onClick:e.handleClick?e.handleC(){}},Object(a.h)("a",{class:"link",href:e.url,target:e.blank?"_blank":"_self"},e.name),e.counter>0&&Object(a.h)("div",{class:"badge"},Object(a.h)("span",{class:"counter"},e.counter)))})),Object(a.h)("li",{class:"nav--sublist--item"},Object(a.h)("a",{class:"link",href:t},"Wyloguj")))))}}}]);