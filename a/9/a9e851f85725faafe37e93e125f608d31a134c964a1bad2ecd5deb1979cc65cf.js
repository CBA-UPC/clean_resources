(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"4cPu":Vmek:function(t,e,n){"use strict";n.r(e);n("2B1R"),n("+2oP"),n("sMBO"),n("J30X"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("pjDv"),n("rB9j");var r=n("2mXy"),a=n("19K9"),o=n("MOxe");n("4cPu");default=function(){var t=c(Object(o.useState)(5),2),e=t[0],n=t[1],u=c(Object(o.useState)(0),2),i=u[0],s=u[1],l=[];window.qf.recipe.commentsWithImages.map((function(t){if(t.images.length)if(0==l.length)l.push(t.user);else{e=!0,l.map((function(n){n.id==t.user.id&&(e=!1)})),e&&l.push(t.user)}var e})),Object(o.useEffect)((function(){s(l.length-e)}),[e]);return Object(r.h)(r.Fragment,null,Object(r.h)("div",{class:"tested--by"},Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"w-full lg:w-2/3"},Object(r.h)("h3",{class:"tested--title"},"Przepis przetestowali już"),Object(r.h)("div",{class:"row avatar--component--wrap"},null==l?void 0:l.slice(0,e).map((function(t){return Object(r.h)("div",{key:t.name,class:"avatar--component--tested"},Object(r.h)(a.a,{name:t.name,url:t.url,photoPath:t.photoPath}))})),i>0&&Object(r.h)("div",{class:"avatar--component--tested"},Object(r.h)("button",{type:"button",class:"show--more--btn",onClick},Object(r.h)("div",{class:"btn"},Object(r.h)("span",{class:"counter"},"+",i)),Object(r.h)("span",{class:"icon icon-arrow-down"}))))))))}}}]);