(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{1865:9462:5383:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return A},default:);var n=i(7294);const s="b18m5m9a";i(9462);var o=i(1082),r=i(5e3),a=i(1865),l=i.n(a),c=i(8029),d=i(8644),u=i(9008),p=i.n(u),g=i(2599),m=i(6408),f=i(516),v=i(7e3),S=i(5534),b=i(4391),w=i(887);var I="query subscriptionsByIds($ids:[String],$first:Int,$offset:Int){programSetsByIds(ids:$ids,first:$first,offset:$offset){nodes{id title synopsis numberOfElements image{url1X1 description attribution}editorialCategoriesList{title}publicationService{title organizationName genre}}}}",_=i(2701);var y=i(1479),k=i(1e3),N=i(3892),h=i(1877),P=n.createElement;const E=`Abos ${d.U} Meins`,T="Abonnieren Sie Ihre Lieblingspodcasts, um keine Episode zu verpassen.";const C=(0,f.Ag)((0,f.kK)(m.SV.MINE_SUBSCRIPTIONS));var $=function(){const{appState:e}=(0,n.useContext)(N.Gd),t=(0,b.P)().getTeasers(c.zc.SUBSCRIPTIONS).sort(((e,t)=>+new Date(t.timestamp)-+new Date(e.timestamp))).map((e=>e.id)),i=`${w.Z.API_HOST}/graphql?query=${function(e,t){const i={ids:e,first:t,offset:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0};return(0,_.Z)(I,i)}(t,c.zc.SUBSCRIPTIONS)}`,a=(0,n.useCallback)((e=>function(e){var t;if(e)return(null===e||void 0===e||null===(t=e.programSetsByIds)||void 0===t?void 0:t.nodes).map(((e,t)=>{var i,n,s,o,r,a,l;return{id:e.id,title:null!==(i=e.title)&&void 0!==i?i:"",ratio:"1x1",overline:null===(n=e.editorialCategoriesList)||void 0===n?void 0:n.map(().join(" \xb7 "),description:e.synopsis,index:t,image:{alt:null===(s=e.image)||void 0===s?void 0:s.description,src:(0,y.Q4)(null===(o=e.image)||void 0===o?void 0:o.url1X1,c.eM.w320),srcset:(0,y.Qb)(null===(r=e.image)||void 0===r?void 0:r.url1X1,[[c.eM.w240,320],[c.eM.w320,480],[c.eM.w400,960],[c.eM.w320,1920],[c.eM.w400,2560]]),title:`${null!==(a=e.image)&&void 0!==a&&a.description?e.image.description:""}${null!==(l=e.image)&&void 0!==l&&l.attribution?"\u30fbBild: "+e.image.attribution:""}`},as:k.Z,href:(0,f.yt)(e.title,e.id),teaserType:m.pL.SHOW,isLoadingEagerly:!0,totalCount:e.numberOfElements,onClick:g.KP,onHit:g.kT,teaserTracking:{widgetTitle:E,widgetIndex:0,type:m.z1.SHOW}}}))}(null===e||void 0===e?void 0:e.data)),[]);return(0,n.useEffect)((()=>{e.view.isLoggedIn&&(0,g.fL)("Meins/Abos",m.wj.SUBSCRIPTIONS,{page_title:"Abos",page_id:"meins-003",page_chapter1:"Meins",page_chapter2:"Abos"})}),[]),P("div",{className:(0,o.cx)(s)},P(p(),null,P("title",null,E," ",d.U," ",d.s),P("meta",{name:"description",content:T,key:"description"}),P("link",{rel:"canonical",href:(0,f.Ag)(`/${m.SV.MINE}/${m.SV.MINE_SUBSCRIPTIONS}/`)}),P("meta",{property:"og:title",content:E,key:"og:title"}),P("meta",{property:"og:description",content:T,key:"og:description"}),P("meta",{property:"og:url",content:C,key:"og:url"}),P("meta",{name:"twitter:title",content:E,key:"twitter:title"}),P("meta",{name:"twitter:description",content:T,key:"twitter:description"}),P("meta",{name:"twitter:url",content:C,key:"twitter:url"})),P("h1",{className:(0,o.cx)(v.V.base,S.Z.base)},"Abos"),P("h2",{className:(0,o.cx)(v.H2.base,S.Z.base)},"Alle abonnierten Podcasts"),e.view.isLoggedIn&&t&&t.length?P(h.Z,{fetchUrl:i,getItems:a,index:0}):P(r.Z,{title:"Podcasts abonnieren",text:"Noch kein Podcast gespeichert? Jetzt Podcasts hinzuf\xfcgen und keine Folge mehr verpassen.",image:l()}))},x=i(9933),M=i(2166),O=n.createElement;var A=!0,B=function(){return O("div",{className:(0,o.cx)(x._I.base,M.T3.base)},O($,null))}},865:,function(e){e.O(0,[102,888,179],();var t=e.O();_N_E=t}]);