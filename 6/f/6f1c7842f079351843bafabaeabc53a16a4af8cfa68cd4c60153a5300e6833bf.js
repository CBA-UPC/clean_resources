(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[94],{37851:(t,e,a)=>{"use strict";a.d(e,{Z:()=>v});const n="iHeart",r="@iHeartRadio",i=290638154,o="com.clearchannel.iheartradio.controller";var s=a(89128),l=a.n(s),p=a(32420),c=a(67120),m=a(38656);const d=(t,e,a=!0)=>{const n=e||p.mT,r=(0,m.parse)(n,a);return r.host?r.protocol?n:`https:${n}`:(0,c.zt)(t,n)},u=({deeplink:t,image:e,noAltLink:a,pagePath:r,siteUrl:i})=>{const o=d(i,e),s=(0,c.zt)(i,l()),p=(0,c.zt)(i,r);return[...a||!t?[]:[{href:`android-app://com.clearchannel.iheartradio.controller/ihr/${t}`,rel:"alternate"},{href:`ios-app://290638154/ihr/${t}`,rel:"alternate"}],{href:s,rel:"search",title:n,type:"application/opensearchdescription+xml"},{href:"https://plus.google.com/+iHeartRadio",rel:"author"},{href:"https://plus.google.com/+iHeartRadio",rel:"publisher"},{href:p,rel:"canonical"},{href:o,rel:"image_src"}]};var g=a(91053);const h=t=>{var e;const{image:a=p.mT,urlEncodeImage:s=!0,description:l,metaDescription:m,legacyDeeplink:u,siteUrl:h,fbAppId:y,fbPages:f,pagePath:w,socialTitle:_,twitterCard:S="summary",twitterImage:b,title:k,ogType:v,translate:T,omitTitleEnding:Z}=t,A=d(h,a,s),$=(0,c.zt)(h,w),I=u?`ihr://${u}`:"",E=(0,g.c)(T),D=Z?"":`| ${(0,c.YY)(T,"iHeart")}`,L=null===l?null:null!=(e=null==l?void 0:l.replace(/"/g,"'"))?e:"";return[{content:null===L?null:m||L||E,name:"description"},{content:y,property:"fb:app_id"},{content:f,property:"fb:pages"},...v?[{content:v,property:"og:type"}]:[],{content:A,name:"thumbnail"},{content:b||A,name:"twitter:image"},{content:A,property:"og:image"},...L?[{content:L,itemprop:"description"},{content:L,property:"og:description"},{content:L,name:"twitter:description"}]:[],{content:$,property:"og:url"},{content:$,name:"twitter:url"},{content:n,property:"og:site_name"},{content:n,name:"twitter:app:name:iphone"},{content:n,name:"twitter:app:name:ipad"},{content:n,name:"twitter:app:name:googleplay"},{content:n,name:"al:android:app_name"},{content:n,name:"al:ios:app_name"},{content:r,name:"twitter:creator"},{content:r,name:"twitter:site"},{content:S,name:"twitter:card"},{content:"iheart.com",name:"twitter:domain"},{content:i,name:"twitter:app:id:iphone"},{content:i,name:"twitter:app:id:ipad"},{content:i,name:"al:ios:app_store_id"},{content:o,name:"twitter:app:id:googleplay"},{content:o,name:"al:android:package"},{content:`${k} ${D}`,itemprop:"name"},{content:`${_||k} ${D}`,property:"og:title"},{content:`${_||k} ${D}`,name:"twitter:title"},...I?[{content:I,name:"twitter:app:url:iphone"},{content:I,name:"twitter:app:url:ipad"},{content:I,name:"twitter:app:url:googleplay"},{content:I,property:"al:android:url"},{content:I,property:"al:ios:url"}]:[]]};var y=a(90758),f=a(20755),w=a(70044),_=a(75628),S=a(12771),b=a(71130),k=a(34853);const v=({deeplink:t="",description:e,image:a,urlEncodeImage:n=!0,legacyDeeplink:r,noAltLink:i,ogType:o,omitTitleEnding:s,metaDescription:l,socialTitle:p,title:c,twitterCard:m="summary",twitterImage:d})=>{const g=(0,b.useSelector)(w.iJ),v=(0,b.useSelector)(w.hK),T=(0,b.useSelector)(f.Jz),Z=(0,b.useSelector)(_.$2),A=(0,y.Z)();return(0,k.tZ)(S.q,{encodeSpecialCharacters:n,link:u({deeplink:t,image:a,noAltLink:i,pagePath:T,siteUrl:Z}),meta:h({description:e,fbAppId:g,fbPages:v,image:a,urlEncodeImage:n,legacyDeeplink:r,metaDescription:l,ogType:o,omitTitleEnding:s,pagePath:T,siteUrl:Z,socialTitle:p,title:c,translate:A,twitterCard:m,twitterImage:d}),title:c})}},91053:(t,e,a)=>{"use strict";function n(t,e=!0,a=!0){return t(e&&a?"All your favorite music, podcasts, and radio stations available for free. Listen to thousands of live radio stations or create your own artist stations and playlists. Get the latest music and trending news, from your favorite artists and bands.":e?"Stream thousands of the best live radio stations and custom artist stations for FREE - all in one app.":a?"Stream thousands of the best live radio stations for FREE, plus unlimited music on demand - all in one app.":"Stream thousands of the best live radio stations for FREE - all in one app.")}a.d(e,{c:()=>n})},70282:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:);var n=a(65949),r=a(37851),i=a(90758),o=a(68062),s=a(12771),l=a(67120),p=a(34853),c=a(71130),m=a(32034),d=a(75185),u=a(75628);const g=(0,m.zB)({artistId:d.Am,artistName:d.I4,pagePath:d.at,siteUrl:u.$2}),h=(0,c.connect)(g)((function({siteUrl:t,pagePath:e,imageUrl:a,artistId:n,artistName:c,name:m}){const d=(0,i.Z)(),u=d("Listen to music you'll love! Create a custom radio station from your favorite songs by {artistName} on iHeart.",{artistName:c}),g=`${m}, ${c}, ${(0,l.YY)(d,"Music, Songs, Top, Best, Popular, Lyrics, Download, iHeartRadio, iHeart, Radio")}`,h=(0,o.Yy)(n,c),y=d("Stream Free Songs by {artistName} & Similar Artists",{artistName:c}),f=(0,l.zt)(t,e);return(0,p.BX)(p.HY,{children:[(0,p.tZ)(r.Z,{deeplink:`play/custom/artist/${n}`,description:u,image:a,legacyDeeplink:`play/custom/artist/${n}`,metaDescription:u,ogType:"profile",title:y,twitterCard:"summary_large_image"}),(0,p.tZ)(s.q,{meta:[{content:g,name:"keywords"},{content:"audio/vnd.facebook.bridge",property:"og:audio:type"},{content:f,property:"og:audio"},{content:(0,o.v_)(t,h),property:"music:musician"}]})]})}));var y=a(224),f=a(20015),w=a(78743),_=a(46588),S=a(8723),b=a(23653);const k=function({artistId:t,artistName:e,tracks:a}){const r=(0,p.tZ)(S.Z,{playedFrom:w.Z.PROF_SONG_SIMILAR},"similar");return t?(0,p.BX)(p.HY,{children:[(0,p.tZ)(h,{}),(0,p.tZ)(y.Z,{seedId:t,seedType:"artist"}),(0,p.BX)(f.ZP,{backLink:(0,o.Yy)(t,e),dataTest:f.n3.ArtistSongs,more:r,title:e,children:[(0,p.tZ)(_.Z,{title:"Songs"}),(0,p.tZ)(n.Z,{artistId:t,artistName:e,playedFrom:w.Z.PROF_ARTIST_SONGS,stationType:b.bV.TRACK,tracks:a})]})]}):null}},89128:]);
//# sourceMappingURL=ArtistSongs.www.js.map