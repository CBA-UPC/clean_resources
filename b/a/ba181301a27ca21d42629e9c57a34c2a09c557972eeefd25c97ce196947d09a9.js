"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3658],{23731:(e,s,o)=>{o.r(s),o.d(s,{EPISODE_SPONSORS_SHELF_TESTID:()=>E,EpisodeSponsorsWrapper:()=>D,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>v,default:()=>b});var n=o(50959);o(86277);var t=o(13100),r=o(11527);const i=(0,n.lazy)((()=>o.e(1148).then(o.bind(o,61148))));function a(e){let{fetchedEpisodeSponsorsData:s,fireTrackingEvent:o,numberOfSponsorsToDisplay:a,firedViewedEvents:d,version:p,reason:l,uri:u}=e;const{displayedEpisodeSponsorsData:c}=function(e){let{fetchedEpisodeSponsorsData:s,numberOfSponsorsToDisplay:o}=e;return(0,n.useMemo)((()=>({displayedEpisodeSponsorsData:s.slice(0,o)})),[s,o])}({fetchedEpisodeSponsorsData:s,numberOfSponsorsToDisplay:a}),f=(0,t.X)({displayedEpisodeSponsorsData:c,uri:u,reason:l}),S=(0,n.useMemo)((()=>c.map(((e,s)=>(0,r.jsx)(i,{fireTrackingEvent:o,firedViewedEvents:d,version:p,onClick:()=>f({ui_navigate:c.map(((e,o)=>{let{clickthrough:n}=e;return s===o?n:""})),navigate_to_external_uri:c.map((function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];let[,t]=o;return s===t}))}),...e},`${e.metadata.lineitem_id}-${s}`)))),[c,o,d,p,f]);return{displayedEpisodeSponsorsData:c,displayedSponsors:S}}var d=o(93500),p=o(11317);var l=o(20273);o(92372),o(70069),o(44227),o(91499),o(68856),o(18004),o(16527);function u(e){let{firedViewedEvents:s}=e;const o=(0,n.useRef)();return{firedViewedEvents:o.current=s??o.current??new Set}}function c(e){let{uri:s,getEpisodeSponsors:o,fireTrackingEvent:t,numberOfSponsorsToDisplay:r,version:i,reason:c}=e;const{state:f}=(0,d.b)(),S=function(e){let{uri:s,episodeBase62Id:o}=e;return(0,n.useMemo)((()=>{const e=(0,p.EC)(s),n=o||(null==e?void 0:e.id);return{uri:(0,p.YD)(n).toURI(),episodeBase62Id:n}}),[s,o])}({...null==f?void 0:f[d.H],uri:s}),{fetchedEpisodeSponsorsData:E}=(0,l.m)({...f,...S,getEpisodeSponsors:o,version:i}),{firedViewedEvents:v}=u({...null==f?void 0:f[d.H]}),D=a({fetchedEpisodeSponsorsData:E,fireTrackingEvent:t,numberOfSponsorsToDisplay:r,firedViewedEvents:v,version:i,reason:c,...S});return{...S,fetchedEpisodeSponsorsData:E,...D,firedViewedEvents:v,reason:c}}const f=3;const S=(0,n.lazy)((()=>o.e(2372).then(o.bind(o,72372)))),E="episode-sponsors-shelf",v="see-all-episode-sponsors";function D(e){const{numberOfSponsorsToDisplay:s}=function(e){let{numberOfSponsorsToDisplay:s=f}=e;return{numberOfSponsorsToDisplay:s}}(e),o=c({...e,numberOfSponsorsToDisplay:s});return o.episodeBase62Id&&o.displayedSponsors.length?(0,r.jsx)(n.Suspense,{fallback:!0,children:(0,r.jsx)(S,{...e,numberOfSponsorsToDisplay:s,state:o})}):null}const b=D},20273:(e,s,o)=>{o.d(s,{F:()=>i,m:()=>a});o(70054);var n=o(50959),t=o(49857),r=o(99537);const i=420;function a(e){let{episodeBase62Id:s,getEpisodeSponsors:a,fetchedEpisodeSponsorsData:d=[],version:p}=e;const[l,u]=(0,n.useState)(d),c=(0,n.useCallback)((async()=>{try{if(!s)throw new Error("episodeBase62Id is required to fetch episode sponsors");const e=a??(await Promise.resolve().then(o.bind(o,93150))).getEpisodeSponsors;u(await e(s,{version:p}))}catch(e){u([])}}),[s,a,p]),f=(0,t.y1)(c,i);(0,n.useEffect)((function(){d.length||f()}),[f,d.length]);const S=(0,n.useCallback)((()=>({effectCallback:f})),[f]);return(0,r.H)(S),{fetchedEpisodeSponsorsData:l}}},13100:(e,s,o)=>{o.d(s,{X:()=>r});o(86277);var n=o(50959),t=o(24071);function r(e){let{uri:s,reason:r,displayedEpisodeSponsorsData:i}=e;const a=(0,t.s4)(),d=(0,n.useCallback)((async e=>{const{createPodcastAdCtaCardEvent:n}=await o.e(8816).then(o.bind(o,96247));return a.send(n({uri:s,reason:r,lineitem_id:i.map((e=>e.metadata.lineitemId)),...e}))}),[s,i,r,a]);return(0,n.useEffect)((function(){d()}),[d]),d}},99537:(e,s,o)=>{o.d(s,{H:()=>p});var n=o(50959),t=o(10226),r=o(17676),i=o(90979),a=o(65019),d=o(95812);function p(e){const s=(0,t.W6)(r.oFA),o=(0,a.Y)((e=>{const s=(null==e?void 0:e.item)??void 0;return(0,d.k6)(s)&&s.isPodcastAd?s.id??void 0:void 0})),p=(0,i.D)(o);(0,n.useEffect)((function(){const{effectCallback:n,destructor:t}=e();return o!==p&&Boolean(o)&&setTimeout(n,s),t}),[e,o,p,s])}}}]);
//# sourceMappingURL=3658.ff222bc2.js.map