"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[509],{82164:(e,t,i)=>{i.d(t,{Puffin:()=>fi,PuffinButton:()=>Bi});i(70054),i(80378),i(86277);var n=i(50959),a=i(82187),r=i.n(a),s=i(69736),l=(i(75383),i(46758),i(53321),i(91686)),o=i(65019),c=i(95812),d=i(81912);let u=function(e){return e.bitrateLevel="bitrateLevel",e.targetBitrateLevel="targetBitrateLevel",e.targetBitrateAvailable="targetBitrateAvailable",e.strategy="strategy",e.isLocal="isLocal",e.autoAdjust="autoAdjust",e.deviceSupported="deviceSupported",e}({}),v=function(e){return e.Bluetooth_Degrades_HiFi="Bluetooth_Degrades_HiFi",e.Change_Cellular_Settings="Change_Cellular_Settings",e.Connect_Explanation="Connect_Explanation",e.Default_To_Very_High="Default_To_Very_High",e.Need_To_Redownload="Need_To_Redownload",e.Opt_Out_Of_Downgrade="Opt_Out_Of_Downgrade",e.Poor_Bandwidth_Interferes="Poor_Bandwidth_Interferes",e.Hihi_Unavailable="Hifi_Unavailable",e}({}),g=function(e){return e[e.Internet=0]="Internet",e[e.Spotify_Connect=1]="Spotify_Connect",e[e.Downloads=2]="Downloads",e}({}),x=function(e){return e.Good="good",e.Poor="poor",e.Unknown="unknown",e.Unavailable="unavailable",e}({});const h=[{criteria:{online:!0,streamingHiFi:!1,targetingHiFi:!1,bitrateStrategy:[c.kZ.CACHED_FILE,c.kZ.BACKEND_ADVISED,c.kZ.BEST_MATCHING],trackHiFiAvailable:!0},result:v.Change_Cellular_Settings},{criteria:{online:!0,autoAdjust:!1,trackHiFiAvailable:!0},result:v.Opt_Out_Of_Downgrade},{criteria:{online:!0,streamingHiFi:!1,targetingHiFi:!0,deviceCompatible:!0,internetBandwidth:x.Poor,trackHiFiAvailable:!0},result:v.Poor_Bandwidth_Interferes},{criteria:{online:!0,autoAdjust:!0,streamingHiFi:!1,targetingHiFi:!1,deviceCompatible:!0,internetBandwidth:x.Poor,trackHiFiAvailable:!0},result:v.Default_To_Very_High},{criteria:{online:!0,streamingHiFi:!1,bitrateStrategy:[c.kZ.OFFLINED_FILE],trackHiFiAvailable:!0},result:v.Need_To_Redownload},{criteria:{online:!0,streamingHiFi:!0,trackHiFiAvailable:!0},result:v.Connect_Explanation},{criteria:{online:!0,targetingHiFi:!0,trackHiFiAvailable:!1},result:v.Hihi_Unavailable}];const p=[{criteria:{bitrateLevel:[c.M4.HIFI],strategy:[c.kZ.BEST_MATCHING,c.kZ.BACKEND_ADVISED,c.kZ.CACHED_FILE],deviceSupported:!0,autoAdjust:!0},result:x.Good},{criteria:{bitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],targetBitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],strategy:[c.kZ.BEST_MATCHING,c.kZ.CACHED_FILE],deviceSupported:!0,autoAdjust:!0},result:x.Good},{criteria:{bitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],targetBitrateLevel:[c.M4.HIFI],strategy:[c.kZ.BEST_MATCHING,c.kZ.BACKEND_ADVISED,c.kZ.CACHED_FILE],targetBitrateAvailable:!0,deviceSupported:!0,autoAdjust:!0},result:x.Poor},{criteria:{bitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],targetBitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],strategy:[c.kZ.BACKEND_ADVISED],deviceSupported:!0,autoAdjust:!0},result:x.Poor},{criteria:{bitrateLevel:[c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],targetBitrateLevel:[c.M4.HIFI],targetBitrateAvailable:!1,deviceSupported:!0,autoAdjust:!0},result:x.Unavailable},{criteria:{autoAdjust:!1},result:x.Unknown},{criteria:{deviceSupported:!1},result:x.Unknown}],m=[{criteria:{bitrateLevel:[c.M4.HIFI],deviceSupported:!0},result:!0},{criteria:{bitrateLevel:[c.M4.UNKNOWN,c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],strategy:[c.kZ.BEST_MATCHING,c.kZ.BACKEND_ADVISED,c.kZ.CACHED_FILE],targetBitrateLevel:[c.M4.HIFI],targetBitrateAvailable:!0,deviceSupported:!0},result:!0},{criteria:{bitrateLevel:[c.M4.UNKNOWN,c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],strategy:[c.kZ.OFFLINED_FILE],targetBitrateLevel:[c.M4.HIFI],targetBitrateAvailable:!0,deviceSupported:!0},result:!1},{criteria:{strategy:[c.kZ.BEST_MATCHING,c.kZ.BACKEND_ADVISED,c.kZ.CACHED_FILE],targetBitrateAvailable:!0,deviceSupported:!0},result:!1},{criteria:{deviceSupported:!1},result:!0},{criteria:{bitrateLevel:[c.M4.UNKNOWN,c.M4.LOW,c.M4.NORMAL,c.M4.HIGH,c.M4.VERY_HIGH],targetBitrateLevel:[c.M4.HIFI],targetBitrateAvailable:!1,deviceSupported:!0},result:!0},{criteria:{targetBitrateLevel:[c.M4.HIFI]},result:!0}],C=(e,t)=>{for(const[i,n]of Object.entries(t.criteria))if(i===u.bitrateLevel){if(!n.includes(e[u.bitrateLevel]))return!1}else if(i===u.targetBitrateLevel){if(!n.includes(e[u.targetBitrateLevel]))return!1}else if(i===u.strategy){if(!n.includes(e[u.strategy]))return!1}else{if(!n===e[i])return!1}return!0};var b=i(57882),f=i(9443);const y={hifiStatus:c.dR.NONE,bitrateLevel:c.M4.UNKNOWN,targetBitrateLevel:c.M4.UNKNOWN,targetBitrateAvailable:!1,strategy:c.kZ.UNKNOWN};function j(){const{hifiStatus:e,bitrateLevel:t,targetBitrateLevel:i,targetBitrateAvailable:a,strategy:r}=(0,o.Y)((e=>({...y,...(null==e?void 0:e.playbackQuality)??null})),d.V),s=(0,l.B)((e=>e.activeDevice)),v=(0,n.useMemo)((()=>null!==s&&s.hifiSupport?s.hifiSupport:{fullySupported:!1,deviceSupported:!1,userEligible:!1}),[s]).deviceSupported,{settings:{values:j}}=(0,b.r)(),S=j["audio.allow_downgrade"],H=(null==s?void 0:s.isLocal)||!1;let w;w=H?r===c.kZ.CACHED_FILE||r===c.kZ.OFFLINED_FILE?g.Downloads:g.Internet:g.Spotify_Connect;const N={bitrateLevel:t,targetBitrateLevel:i,targetBitrateAvailable:a,strategy:r,isLocal:H,deviceSupported:v,autoAdjust:S},E=(e=>{for(const t of m)if(C(e,t))return t.result;return e[u.bitrateLevel]===c.M4.HIFI||e[u.targetBitrateLevel]===c.M4.HIFI})(N),_=(e=>{for(const t of p)if(C(e,t))return t.result;return e[u.strategy]===c.kZ.BACKEND_ADVISED?x.Poor:x.Good})(N),k=(0,f.k)(),A=i===c.M4.HIFI&&a,I=function(e){let{online:t,streamingHiFi:i,targetingHiFi:n,strategy:a,trackHiFiAvailable:r,autoAdjust:s,internetBandwidth:l,hifiCompatibleDevice:o,isLocal:c}=e;const d=[];for(const u of h){const{criteria:e,result:v}=u;e.online===t&&(void 0!==e.autoAdjust&&e.autoAdjust!==s||void 0!==e.streamingHiFi&&e.streamingHiFi!==i||void 0!==e.targetingHiFi&&e.targetingHiFi!==n||void 0!==e.deviceCompatible&&e.deviceCompatible!==o||void 0!==e.bitrateStrategy&&!1===c||(void 0===e.bitrateStrategy||void 0!==a&&e.bitrateStrategy.includes(a))&&(void 0!==e.internetBandwidth&&e.internetBandwidth!==l||void 0!==e.trackHiFiAvailable&&e.trackHiFiAvailable!==r||d.push(v)))}return d}({online:k,streamingHiFi:t===c.M4.HIFI,targetingHiFi:i===c.M4.HIFI,strategy:r,trackHiFiAvailable:A,autoAdjust:S,internetBandwidth:_,hifiCompatibleDevice:v,isLocal:H});return{hifiStatus:e,bitrateLevel:t,flags:I,internetBandwidth:_,playingVia:{channelIsHiFi:E,channel:w},hifiCompatibleDevice:v}}var S=i(32414);const H="cJMj4UrGP_oAOqCx48nR";var w=i(11527);const N=()=>(0,w.jsxs)(S.x,{variant:"tinted",className:H,children:[(0,w.jsx)(s.x,{variant:"bodyMedium",semanticColor:"textBase",children:"Listen in Lossless, offline"}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"Download your audio in Lossless to listen in our highest quality while you’re offline. Update download quality in Settings."})]});var E=i(25331),_=i(15671),k=i(60046),A=i(64966);const I="RC4O1refNWyxOrqUoE4N",M="hvDtTjFeompKZLI60Sy7",L=e=>{let{title:t,message:i,id:n}=e;return(0,w.jsx)(E.w,{id:n,className:I,variant:"tinted",pretitle:(0,w.jsxs)("div",{className:M,children:[(0,w.jsx)(_.l,{size:"small",semanticColor:"textWarning"}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"Troubleshoot"})]}),title:t,body:(0,w.jsx)(A.k,{LinkComponent:k.default,source:i,splitter:/\|/g,semanticColor:"textSubdued"})})};var D=i(85648),O=i(82322),B=i(16145),F=i(8172);const T="meFagfHOyIABVkyjrLW2",V="bDxrAHtivqsWjq5P3zcK",R="H57fABDcHNmhfpukMqam",z="wwRfoIhkgiHhfHyluH34",P="SKCb8zWWttHQDTYn1r8m";let U=function(e){return e[e.PASSING=0]="PASSING",e[e.NEEDS_ATTENTION=1]="NEEDS_ATTENTION",e[e.UNKNOWN=2]="UNKNOWN",e}({});const Z=e=>{let{metric:t,label:i,severity:n}=e;return(0,w.jsxs)("div",{className:r()(T,{[z]:n===U.UNKNOWN}),children:[(()=>{switch(n){case U.PASSING:return(0,w.jsx)(O.K,{size:"large",className:V,semanticColor:"textBase"});case U.NEEDS_ATTENTION:return(0,w.jsx)(B.l,{size:"large",className:R,semanticColor:"textWarning"});case U.UNKNOWN:return(0,w.jsx)(F.S,{size:"large",className:R,semanticColor:"textBase"});default:return null}})(),(0,w.jsxs)("div",{className:P,children:[(0,w.jsx)(s.x,{as:"p",variant:"bodyMedium",semanticColor:"textBase",children:t}),(0,w.jsx)(s.x,{as:"p",semanticColor:"textSubdued",variant:"bodySmall",children:i})]})]})},G=()=>{const{hifiCompatibleDevice:e,playingVia:t,internetBandwidth:i}=j();return(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{metric:D.ag.get("hifi.hifiCompatibleDevice"),label:e?D.ag.get("hifi.yes"):D.ag.get("hifi.no"),severity:e?U.PASSING:U.NEEDS_ATTENTION}),(0,w.jsx)(Z,{metric:D.ag.get("hifi.playingVia"),label:(()=>{const{channel:e}=t;switch(e){case g.Downloads:return D.ag.get("local-files.source.downloads");case g.Internet:return D.ag.get("hifi.networkConnection");case g.Spotify_Connect:return D.ag.get("spotify-connect");default:return""}})(),severity:t.channelIsHiFi?U.PASSING:U.NEEDS_ATTENTION}),(0,w.jsx)(Z,{metric:D.ag.get("hifi.internetBandwidth"),label:(()=>{switch(i){case x.Good:return D.ag.get("hifi.good");case x.Poor:return D.ag.get("hifi.poor");case x.Unknown:default:return D.ag.get("hifi.unknown")}})(),severity:(()=>{switch(i){case x.Good:return U.PASSING;case x.Poor:return U.NEEDS_ATTENTION;case x.Unknown:default:return U.UNKNOWN}})()})]})};let W=function(e){return e.INFO="INFO",e.ERROR="ERROR",e}({});function q(e){return e.type===W.ERROR}i(20550),i(27082);const Q={[v.Connect_Explanation]:()=>({type:"info",message:D.ag.get("hifi.connectExplanation",`<img src='images/connect-to-devices-white.svg'\n        alt='${D.ag.get("spotify-connect")}' width="16" height="16"/>`,`<img src='images/hifi.svg'\n    alt='${D.ag.get("desktop.settings.streamingQualityHiFi")}' width="16" height="7"/>`)}),[v.Change_Cellular_Settings]:()=>({type:"info",message:D.ag.get("hifi.changeCellularSettings")}),[v.Opt_Out_Of_Downgrade]:()=>({type:"error",title:"Change your settings for a smoother listening experience",message:D.ag.get("hifi.optOutOfDowngrade")}),[v.Poor_Bandwidth_Interferes]:()=>({type:"error",title:"Check your connection",message:D.ag.get("hifi.poorBandwidthInterferes")}),[v.Default_To_Very_High]:()=>({type:"info",message:D.ag.get("hifi.defaultToVeryHigh")}),[v.Need_To_Redownload]:()=>({type:"error",title:"Re-download your songs to stream them in HiFi",message:D.ag.get("hifi.needToReDownload")}),[v.Bluetooth_Degrades_HiFi]:()=>({type:"info",message:D.ag.get("hifi.bluetoothDegradesHifi",`<img src='images/hifi.svg'\n  alt='${D.ag.get("desktop.settings.streamingQualityHiFi")}' width="16" height="7"/>`)}),[v.Hihi_Unavailable]:()=>({type:"error",title:"Content not available in HiFi",message:"The content you're trying to listen to isn't available in HiFi."})},K=e=>{switch(e){case c.M4.HIFI24:return{title:"Lossless",bitrateLabel:"≤2,117 kbps",bitrateDetails:["Up to 15.9 MB/min","Up to 24-bit/44.1 kHz • FLAC"]};case c.M4.HIFI:return{title:"Lossless",bitrateLabel:"≤1,441 kbps",bitrateDetails:["Up to 10.6 MB/min","Up to 16-bit/44.1 kHz • FLAC"]};case c.M4.VERY_HIGH:return{title:"Very High",bitrateLabel:"320 kbps",bitrateDetails:["Up to 320 kbps • 2 MB/min"]};case c.M4.HIGH:return{title:"High",bitrateLabel:"160 kbps",bitrateDetails:["Up to 160 kbps • 1 MB/min"]};case c.M4.NORMAL:return{title:"Normal",bitrateLabel:"96 kbps",bitrateDetails:["Up to 96 kbps • 0.6 MB/min"]};case c.M4.LOW:return{title:"Low",bitrateLabel:"24 kpbs",bitrateDetails:["Up to 24 kbps • 0.2 MB/min"]};case c.M4.UNKNOWN:default:return{title:"Unknown",bitrateLabel:null}}};var Y=i(83335),X=i(54941);const J=e=>{let{children:t,...i}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Y.V,{panel:X.s.Puffin,...i}),t]})};i(22849),i(606);var $=i(84317);let ee=function(e){return e.Overview="overview",e.ActivationDetection="activationDetection",e.ActivationSpecific="activationSpecific",e.ActivationExternalization="activationExternalization",e.Error="error",e.ManualSelection="manualSelection",e.AudioQualitySettings="audioQualitySettings",e.AudioQualityDetails="audioQualityDetails",e.DiscoverHifi="discoverHifi",e}({}),te=function(e){return e.GetStarted="getStarted",e.OnError="onError",e.SelectManually="selectManually",e.Continue="continue",e.Close="close",e.Activate="activate",e.SetupNewDevice="setupNewDevice",e.NotFound="notFound",e.Settings="settings",e.OnboardHifi="onboardHifi",e.Details="details",e}({});const ie={[ee.Overview]:{[te.GetStarted]:ee.ActivationDetection,[te.OnError]:ee.Error,[te.SelectManually]:ee.ManualSelection,[te.Settings]:ee.AudioQualitySettings,[te.OnboardHifi]:ee.DiscoverHifi,[te.Details]:ee.AudioQualityDetails},[ee.ActivationDetection]:{[te.SelectManually]:ee.ManualSelection,[te.Close]:ee.Overview,[te.OnError]:ee.Error,[te.Continue]:ee.ActivationExternalization},[ee.ActivationExternalization]:{[te.Close]:ee.Overview,[te.OnError]:ee.Error,[te.Continue]:ee.ActivationSpecific,[te.Activate]:ee.Overview},[ee.ActivationSpecific]:{[te.Close]:ee.Overview,[te.OnError]:ee.Error,[te.Activate]:ee.Overview},[ee.ManualSelection]:{[te.Continue]:ee.ActivationExternalization,[te.Close]:ee.Overview,[te.OnError]:ee.Error,[te.NotFound]:ee.ActivationExternalization},[ee.DiscoverHifi]:{[te.Continue]:ee.Overview},[ee.AudioQualitySettings]:{},[ee.AudioQualityDetails]:{},[ee.Error]:{}},ne=(0,n.createContext)({currentView:ee.Overview,viewTransitions:ie,setCurrentView:()=>{},toPreviousView:()=>{},viewOptions:null}),ae=e=>{let{children:t}=e;const i=(0,$.mI)(),[a,r]=(0,n.useState)((()=>(e=>[{view:e===X.s.PuffinActivation?ee.ActivationDetection:ee.Overview,options:{}}])(i))),s=(0,n.useCallback)(((e,t)=>{e===ee.Overview?r([{view:e,options:t??{}}]):r((i=>[...i,{view:e,options:t??{}}]))}),[]),l=(0,n.useCallback)((()=>{r((e=>e.slice(0,-1)))}),[]);if(0===a.length)throw new Error("Puffin view state stack should never be empty");const{view:o,options:c}=a.at(-1);return(0,w.jsx)(ne.Provider,{value:{currentView:o,viewOptions:c,setCurrentView:s,toPreviousView:l,viewTransitions:ie},children:t})},re="qMaFDVQQmaISMsPv0U2G",se="CQswwQrGh_V_7HZvIYdV",le="xLt3LoPc1ngk_OEJoxoy",oe=()=>{var e;const{toPreviousView:t}=(0,n.useContext)(ne),i=j(),a=K(i.bitrateLevel),r=(()=>{const{flags:e}=j(),t=[];return e.forEach((e=>{if(Q[e]){const{type:i,message:n,title:a}=Q[e]();"info"===i?t.push({id:e,text:n,type:W.INFO}):t.push({id:e,text:n,title:a??"",type:W.ERROR})}})),t})(),l=r.filter(q);return(0,w.jsx)(J,{onBack:t,children:(0,w.jsxs)("div",{className:re,children:[(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"Current quality"}),(0,w.jsx)(s.x,{variant:"titleMedium",semanticColor:"textBrightAccent",children:a.title}),(0,w.jsx)("div",{className:se,children:null===(e=a.bitrateDetails)||void 0===e?void 0:e.map(((e,t)=>(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textBrightAccent",children:e},`bitrate-details-${t}`)))}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textBrightAccent"}),(0,w.jsx)("div",{className:le,children:(0,w.jsx)(G,{})}),l.map((e=>{let{text:t,title:i,id:n}=e;return(0,w.jsx)(L,{id:n,title:i,message:t},n)})),(0,w.jsx)(N,{})]})})};var ce=i(6487),de=i(36879);const ue=e=>{let{subtitles:t}=e;return(0,w.jsx)(w.Fragment,{children:t.map(((e,t)=>(0,w.jsx)(s.x,{semanticColor:"textSubdued",variant:"bodySmall",children:e},`subtitle-${t}`)))})},ve="X9MNTs22yzn5ToovQOmE",ge="yBIuz1wIV3CyRacOwXyO",xe="k_jPgesB17n6Hh6VnSdL",he="yufpxn5NeaZzerlZWxyY",pe="AzeKzsaxTtvIb3Rj0Yp_",me=e=>{let{title:t,isLossless:i}=e;return(0,w.jsxs)("div",{className:xe,children:[(0,w.jsx)(s.x,{variant:"bodyMedium",semanticColor:"textBase",children:t}),i&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s.x,{variant:"bodyMedium",semanticColor:"textBase",children:"•"}),(0,w.jsx)(s.x,{variant:"bodyMedium",semanticColor:"textBrightAccent",children:"Highest"})]})]})};let Ce=function(e){return e[e.AUTOMATIC=0]="AUTOMATIC",e[e.LOW=1]="LOW",e[e.MEDIUM=2]="MEDIUM",e[e.HIGH=3]="HIGH",e[e.VERY_HIGH=4]="VERY_HIGH",e[e.HIFI=5]="HIFI",e}({});var be=i(46729);function fe(){return(0,be.Zq)()}var ye=i(1469);var je=i(59047),Se=i(73247),He=i(9709);function we(e){const t=(0,n.useMemo)((()=>["useSettingsValue",e.key]),[e.key]),i=(0,je.NL)(),a=(0,ye.a)({queryKey:t,queryFn:async()=>await e.getValue(),gcTime:36e5,staleTime:6e5,retry:(e,t)=>!(t instanceof He.P)&&e<3}),r=(0,Se.D)({mutationFn:async t=>{await e.setValue(t)},onMutate:async e=>{await i.cancelQueries({queryKey:t});const n=i.getQueryData(t);return i.setQueryData(t,e),{prevState:n,newState:e}},onError:(e,n,a)=>{He.P,i.setQueryData(t,null==a?void 0:a.prevState)}});return(0,n.useEffect)((()=>e.subValue((e=>{i.setQueryData(t,e)}))),[i,t,e]),[a,r]}const Ne=e=>{switch(e){case Ce.HIFI:return{title:"Lossless",subtitles:["Up to 2117 kbps • 15.9 MB/min","24-bit/44.1kHz • FLAC"]};case Ce.VERY_HIGH:return{title:"Very High",subtitles:["320 kbps • 2 MB/min"]};case Ce.HIGH:return{title:"High",subtitles:["160 kbps • 1 MB/min"]};case Ce.MEDIUM:return{title:"Normal",subtitles:["96 kbps • 0.6 MB/min"]};case Ce.LOW:return{title:"Low data",subtitles:["24 kbps • 0.2 MB/min"]};default:return{title:null,subtitles:null}}},Ee=e=>{let{onClick:t,quality:i,playQuality:n}=e;const{title:a,subtitles:r}=Ne(i);if(null===a||null===r)return null;const s=n===i,l=i===Ce.HIFI;return(0,w.jsx)(E.w,{id:"title",variant:"naked",verticalGap:"2px",onClick:t,title:(0,w.jsx)(me,{title:a,isLossless:l}),subtitle:(0,w.jsx)(ue,{subtitles:r}),trailing:s?(0,w.jsx)(ce.N,{semanticColor:"textBrightAccent"}):void 0})},_e=()=>{const{toPreviousView:e}=(0,n.useContext)(ne),t=fe(),[{data:i},{mutate:a}]=we(t.quality.streamingQuality),[{data:r},{mutate:l}]=we(t.quality.autoAdjustQuality),o=function(){const e=fe();return(0,ye.a)({queryKey:["settings-formats"],queryFn:()=>e.quality.getFormats(),gcTime:36e5,staleTime:6e5}).data}();return void 0===o||void 0===r||void 0===i?null:(0,w.jsxs)(J,{onBack:e,children:[(0,w.jsx)(s.x,{className:ve,variant:"titleSmall",semanticColor:"textBase",children:"Streaming quality"}),(0,w.jsx)("div",{className:ge,children:o.sort(((e,t)=>e.quality-t.quality)).map(((e,t)=>(0,w.jsx)(Ee,{quality:e.quality,playQuality:i,onClick:()=>a(e.quality)},t)))}),(0,w.jsx)(s.x,{children:"Lossless audio will play when available. 24-bit lossless available on limited songs."}),(0,w.jsxs)("div",{className:he,children:[(0,w.jsx)(s.x,{variant:"bodyMediumBold",semanticColor:"textBase",children:"Listening Preferences"}),(0,w.jsx)(E.w,{className:pe,variant:"naked",size:"sm",id:"auto-adjust-quality",horizontalGap:"0px",title:(0,w.jsx)(s.x,{variant:"bodyMedium",semanticColor:"textBase",children:"Auto adjust quality"}),trailing:(0,w.jsx)(de.Z,{id:"desktop.settings.automatic-downgrade",value:r,onSelected:l,condensed:!0})}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"Recommended setting: On"}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"We adjust your audio quality when your internet bandwidth is poor. Turning this off may cause interruptions to your listening."})]})]})};var ke=i(70526),Ae=i(43286),Ie=i(65786);const Me=()=>(0,Ie.z)("onboarding-dismissed:hifi",!1);var Le=i(35534);const De="UxZdDYEyLTJdUVpcSnlV",Oe="m9h5qSziGER706uY2RLQ",Be="jIYF1gLzIxXVZrOmD9Xw",Fe="hgN38CBl0wgc1seJdwV1",Te="xg5jMOqKDEckYRUdLhd_",Ve="ylnh7SyD5oExDYYaJntU",Re=e=>{let{path:t}=e;return(0,w.jsx)("div",{className:Be,children:(0,w.jsx)(n.Suspense,{fallback:null,children:(0,w.jsx)(Le.M,{loop:!0,autoplay:!0,path:t})})})},ze=e=>{let{title:t,subtitle:i,footer:n,lottiePath:a}=e;return(0,w.jsxs)("div",{className:De,children:[(0,w.jsx)(Re,{path:a}),(0,w.jsxs)("div",{className:Oe,children:[(0,w.jsx)(s.x,{variant:"titleMedium",semanticColor:"textBase",children:t}),i&&(0,w.jsx)(s.x,{variant:"bodyMedium",children:i})]}),(0,w.jsx)("div",{children:n})]})},Pe=e=>{let{nrSteps:t,atStep:i}=e;return(0,w.jsx)("div",{className:Fe,children:Array.from({length:t}).map(((e,t)=>(0,w.jsx)("div",{className:r()(Te,{[Ve]:i===t})},t)))})},Ue=[{get title(){return"Quality made clear"},get subtitle(){return"It’s easy to know when you’re streaming music in Lossless, song by song."},get buttonLabel(){return"Next"},get lottiePath(){return"https://puffin.spotifycdn.com/pigeon_onboarding_animation_1.json"}},{get title(){return"Simple controls"},get subtitle(){return"Not getting Lossless or want to conserve mobile data? Troubleshoot with a tap."},get buttonLabel(){return"Next"},get lottiePath(){return"https://puffin.spotifycdn.com/pigeon_onboarding_animation_2.json"}},{get title(){return"Everywhere you listen"},get subtitle(){return"Lossless streams on any compatible device and works with Spotify Connect."},get buttonLabel(){return"Next"},get lottiePath(){return"https://puffin.spotifycdn.com/pigeon_onboarding_animation_3.json"}},{get title(){return"Nonstop beats"},get subtitle(){return"Smart technology means fewer delays when your connection is slow. "},get buttonLabel(){return"Listen now"},get lottiePath(){return"https://puffin.spotifycdn.com/pigeon_onboarding_animation_4.json"}}],Ze=()=>{const[e,t]=(0,n.useState)(0),[i,a]=Me(),{setCurrentView:r,toPreviousView:s,viewTransitions:l}=(0,n.useContext)(ne),o=l[ee.DiscoverHifi],{title:c,subtitle:d,buttonLabel:u,lottiePath:v}=Ue[e];return(0,w.jsx)(J,{titleSlot:(0,w.jsx)(Pe,{nrSteps:4,atStep:e}),onBack:s,preventDefaultClose:!0,children:(0,w.jsx)(ze,{title:c,subtitle:d,lottiePath:v,footer:(0,w.jsx)(Ae.D,{colorSet:"invertedLight",size:"medium",onClick:()=>{3===e?(a(!0),r(o[te.Continue])):t((e=>e+1))},children:u})})})};var Ge=i(13379),We=i(16095);function qe(e){const t=(0,n.useRef)(e),i=(0,Ge.f)();t.current=e,(0,n.useEffect)((()=>{const e=i.getFiltersEvents(),n=e=>t.current(e);return null==e||e.addListener(We.s.DEVICE_CONNECTED,n),()=>{null==e||e.removeListener(We.s.DEVICE_CONNECTED,n)}}),[i])}const Qe=()=>{const e=(0,Ge.f)(),[t,i]=(0,n.useState)((()=>e.getCurrentAudioDevice()));return qe((e=>{let{data:{audioDevice:t}}=e;i(t)})),t};var Ke=i(194),Ye=i(90779),Xe=i(22429),Je=i(92432);const $e={device:null,predictedState:null,isOnboarded:!1,currentState:{externalizationEnabled:!1,specificEnabled:!1},contentRestrictions:{specificRestricted:!1,externalizationRestricted:!1},toggleTuneHeadphones:null,toggleTuneStudio:null,setFilterState:()=>Promise.resolve()},et=()=>{const e=(0,Ge.f)(),t=(0,je.NL)(),{isPlayingRemotely:i}=(0,Je.H)(),a=(0,n.useMemo)((()=>["puffin-current-device"]),[]),{data:r,isLoading:s,isError:l}=(0,ye.a)({queryKey:a,queryFn:async()=>await e.getFilterState(),gcTime:5e3,staleTime:5e3});return function(e){const t=(0,n.useRef)(e),i=(0,Ge.f)();t.current=e,(0,n.useEffect)((()=>{const e=i.getFiltersEvents(),n=e=>t.current(e);return null==e||e.addListener(We.s.UPDATE,n),()=>{null==e||e.removeListener(We.s.UPDATE,n)}}),[i])}((()=>t.invalidateQueries({queryKey:a}))),{deviceFilterState:!i&&r||$e,isLoading:s,isError:l}},tt=()=>{var e;const{setCurrentView:t,viewTransitions:i}=(0,n.useContext)(ne),{deviceFilterState:a,isLoading:r}=et(),s=Qe(),l=i[ee.ActivationDetection];return(0,n.useLayoutEffect)((()=>{const e=(null==s?void 0:s.transportType)===Ke.Fl.TRANSPORT_TYPE_BLUETOOTH;s&&!e&&t(ee.ManualSelection)}),[s,t]),(0,w.jsx)(ze,{title:`We think you’re using ${null===(e=a.device)||void 0===e?void 0:e.deviceName}`,lottiePath:"https://puffin.spotifycdn.com/puffin_shot_1.json",footer:r||!a.device?(0,w.jsx)(Xe.H,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(Ae.D,{colorSet:"invertedLight",size:"medium",onClick:()=>{t(l.continue)},children:"Next"})}),(0,w.jsx)(Ye.o,{semanticColor:"textSubdued",size:"medium",onClick:()=>{t(l.selectManually)},condensed:!0,children:"Not my headphones"})]})})};var it=i(24071),nt=i(47543);const at=()=>{const e=(0,Ge.f)();return{setCurrentDevice:(0,n.useCallback)((t=>{e.setCurrentDevice(t)}),[e]),removeCurrentDevice:(0,n.useCallback)((()=>{e.removeCurrentDevice()}),[e])}},rt=e=>{let{onClick:t}=e;const{deviceFilterState:i}=et(),{setCurrentDevice:a}=at(),r=Qe(),s=(0,it.s4)(),{setCurrentView:l}=(0,n.useContext)(ne),o=(0,n.useCallback)((async()=>{a(i.device);try{await i.setFilterState({specificEnabled:!!i.toggleTuneHeadphones,externalizationEnabled:!!i.toggleTuneStudio})}catch{return void l(ee.Error)}((e,t,i)=>{var n,a,r,s;e.send((0,nt.m)({has_tuner:!!t.toggleTuneHeadphones,filter_brand:(null===(n=t.device)||void 0===n?void 0:n.brand)??null,filter_model:(null===(a=t.device)||void 0===a?void 0:a.model)??null,was_predicted:!!t.predictedState,headphone_name_over_bluetooth:(null==i?void 0:i.transportType)===Ke.Fl.TRANSPORT_TYPE_BLUETOOTH?(null==i?void 0:i.name)??null:null,external_accessory_mapping_predicted_brand:(null===(r=t.predictedState)||void 0===r?void 0:r.predictedBrand)??null,external_accessory_mapping_predicted_model:(null===(s=t.predictedState)||void 0===s?void 0:s.predictedModel)??null}))})(s,i,r),t()}),[i,s,t,a,l,r]);return(0,w.jsx)(Ae.D,{colorSet:"invertedLight",size:"medium",onClick:o,children:"Start listening"})},st=e=>{let{onClick:t}=e;return(0,w.jsx)(Ae.D,{colorSet:"invertedLight",size:"medium",onClick:async()=>{t()},children:"Next"})},lt=()=>{const{deviceFilterState:e,isLoading:t}=et(),{setCurrentView:i,viewTransitions:a}=(0,n.useContext)(ne),r=a[ee.ActivationExternalization];return(0,w.jsx)(ze,{title:"Spatialize",subtitle:"Broaden the output from your headphones. Like you’re in front of speakers.",lottiePath:"https://puffin.spotifycdn.com/puffin_shot_1.json",footer:t||!e.device?(0,w.jsx)(Xe.H,{}):(0,w.jsx)(w.Fragment,{children:e.toggleTuneHeadphones?(0,w.jsx)(st,{onClick:()=>{i(r.continue)}}):(0,w.jsx)(rt,{onClick:()=>{i(r.activate)}})})})},ot=()=>{const{setCurrentView:e,viewTransitions:t}=(0,n.useContext)(ne),i=t[ee.ActivationExternalization];return(0,w.jsx)(ze,{title:"Optimize",subtitle:"Improve the sound of your headphones without new hardware.",lottiePath:"https://puffin.spotifycdn.com/puffin_shot_2.json",footer:(0,w.jsx)(rt,{onClick:()=>{e(i.activate)}})})},ct="gaHyKsxwiyCh1yZbAPGu",dt="UdGQGXIUZX8XSGzT_vjV",ut="tPVta1L63yHDp2xTlCsV",vt="Z5JRUt7Q9Fs7sIOxMyZO",gt=e=>{let{number:t,message:i}=e;return(0,w.jsxs)("div",{className:ut,children:[(0,w.jsx)("div",{className:vt,children:(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textBase",children:t})}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:i})]})},xt=()=>{const{setCurrentView:e}=(0,n.useContext)(ne);return(0,w.jsxs)("div",{className:ct,children:[(0,w.jsx)(s.x,{variant:"titleSmall",semanticColor:"textBase",children:"We can’t detect your headphones"}),(0,w.jsxs)("div",{className:dt,children:[(0,w.jsx)(gt,{number:1,message:"Make sure Bluetooth is turned on."}),(0,w.jsx)(gt,{number:2,message:"Make sure your headphones are connected. Try restarting them."}),(0,w.jsx)(gt,{number:3,message:"Make sure that only one set of headphones are connected."}),(0,w.jsx)(gt,{number:4,message:"Using speakers or another device? Spatialize and Optimize are only available for headphones."})]}),(0,w.jsx)(Ye.o,{semanticColor:"textSubdued",onClick:()=>{e(ee.Overview)},children:"Still not working"})]})};var ht=i(29608),pt=i(18534);const mt=e=>{let{title:t,description:i,confirmButtonText:a="OK",cancelButtonText:r="Cancel",onConfirm:s}=e;const{setCurrentView:l}=(0,n.useContext)(ne),o=(0,pt.hv)(),[c,d]=(0,n.useState)(!1),u=(0,n.useRef)(!1);return{dialog:c?(0,w.jsx)(ht.Q,{onClose:()=>d(!1),onConfirm:()=>{s(),u.current?o($.rZ.PUFFIN_BUTTON_CLICK):l(ee.Overview)},titleText:t,"aria-label":t,descriptionText:i,cancelText:r,confirmText:a}):null,triggerDialog:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u.current=e,d(!0)}}},Ct=()=>mt({title:"Cancel setup?",description:"You won’t get the best possible sound for your headphones.",confirmButtonText:"Cancel setup",cancelButtonText:"Continue setup",onConfirm:()=>{}}),bt=e=>{let{type:t}=e;const{deviceFilterState:i}=et(),a=Qe(),{triggerDialog:r,dialog:s}=Ct(),l=(0,n.useRef)("detection"===t);let o=i.toggleTuneHeadphones?3:2,c=0;return"externalization"===t?c=1:"specific"===t&&(c=2),l.current||(o--,c--),(0,w.jsx)(J,{titleSlot:o>1&&(0,w.jsx)(Pe,{nrSteps:o,atStep:c}),onClose:()=>r(!0),onBack:()=>r(!1),preventDefaultClose:!0,children:a?(0,w.jsxs)(w.Fragment,{children:[s,"detection"===t&&(0,w.jsx)(tt,{}),"externalization"===t&&(0,w.jsx)(lt,{}),"specific"===t&&(0,w.jsx)(ot,{})]}):(0,w.jsx)(xt,{})})},ft="QHqVFDnSvA0HvBE6X5Ji",yt="NNAfew5cs1pJOizGgvAY",jt=()=>{const{toPreviousView:e,setCurrentView:t}=(0,n.useContext)(ne);return(0,w.jsx)(J,{onBack:()=>{e()},children:(0,w.jsxs)("div",{className:ft,children:[(0,w.jsx)(B.l,{size:"xlarge",semanticColor:"textBase"}),(0,w.jsxs)("div",{className:yt,children:[(0,w.jsx)(s.x,{variant:"titleSmall",semanticColor:"textBase",children:"Something went wrong"}),(0,w.jsx)(s.x,{variant:"bodySmall",semanticColor:"textSubdued",children:"We couldn’t turn on your headphone tools."})]}),(0,w.jsx)(Ae.D,{colorSet:"invertedLight",size:"medium",onClick:()=>{t(ee.Overview)},children:"Retry"})]})})};var St=i(8824),Ht=i(65432),wt=i(52438),Nt=i(97345),Et=i(94260);const _t=e=>{let{device:t,onClick:i}=e;return(0,w.jsx)(E.w,{variant:"naked",size:"md",id:t.id,title:(0,w.jsx)(Nt.g,{onClick:()=>{i(t)},children:t.model}),subtitle:t.brand,trailing:(0,w.jsx)(Et.V,{size:"small",semanticColor:"textSubdued"}),isRedundantOnClick:!0,onClick:()=>{i(t)}},t.id)};i(75930);const kt="hPzDNLh2VHVetpMYUWhh",At="OWzwomCJ96sclkARJ4MT",It="ixg1HpUqNVD6i3sodyVM",Mt="D7_plcRuh6XZ4e92bHRf",Lt="Df8qBgxamgAzXiwF9WjI",Dt="ldOw2XsBvAI5g3JI6zWk",Ot="xCjuBeXCCAIL4i_xHXFD",Bt=e=>{let{search:t}=e;return(0,w.jsxs)("div",{className:Ot,children:[(0,w.jsx)(s.x,{semanticColor:"textBase",variant:"titleSmall",children:`Couldn’t find “${t}”`}),(0,w.jsx)(s.x,{semanticColor:"textSubdued",variant:"bodySmall",children:"Try searching again using a different spelling or keyword."})]})},Ft={id:"unknown_device",brand:"",model:"",deviceName:"Unknown"},Tt=e=>{let{devices:t,transitions:i,setCurrentView:a}=e;const{filter:r,setFilter:s}=(0,n.useContext)(Ht.fo),{setCurrentDevice:l}=at(),o=(0,n.useCallback)((e=>{l(e),a(i.continue),s("")}),[l,a,s,i.continue]),c=t.filter((e=>e.deviceName.toLowerCase().includes(r.toLowerCase())));return(0,w.jsxs)("div",{className:Lt,children:[c.map((e=>(0,w.jsx)(_t,{device:e,onClick:o},e.id))),0===c.length&&(0,w.jsx)(Bt,{search:r}),(0,w.jsx)("div",{className:Mt,children:(0,w.jsx)(wt.P,{size:"small",onClick:()=>{o(Ft)},children:"I don't see my headphones"})})]})},Vt=()=>{const{setCurrentView:e,toPreviousView:t,viewTransitions:i,viewOptions:a}=(0,n.useContext)(ne),r=i[ee.ManualSelection],{data:l}=(()=>{const e=(0,Ge.f)(),{data:t,isLoading:i,isError:n}=(0,ye.a)({queryKey:["puffin-devices"],queryFn:async()=>await e.getDevices(),gcTime:18e5,staleTime:6e5});return{data:t??null,loading:i,error:n}})(),{triggerDialog:o,dialog:c}=Ct();return(0,w.jsxs)(J,{onBack:()=>{null!=a&&a.showDialogOnBack?o():t()},children:[c,(0,w.jsxs)(Ht.hz,{uri:"spotify:internal:bettersound",children:[(0,w.jsxs)("div",{className:At,children:[(0,w.jsxs)("div",{className:It,children:[(0,w.jsx)(s.x,{variant:"bodyMediumBold",semanticColor:"textBase",children:"Find brand and exact model"}),(0,w.jsx)(s.x,{variant:"bodySmall",children:"Headphone tools work best when you select an exact match."})]}),(0,w.jsx)(St.K,{placeholder:"Search for brand or model",alwaysExpanded:!0,fullWidth:!0,debounceFilterChangeTimeout:0})]}),l?(0,w.jsx)("div",{className:kt,children:(0,w.jsx)(Tt,{devices:l,transitions:r,setCurrentView:e})}):(0,w.jsx)("div",{className:Dt,children:(0,w.jsx)(Xe.H,{})})]})]})},Rt="UcDa2y41UOzWUqXjcx_B",zt="rR61D1vJxNsSk_XQNMX4",Pt="m7gWknJdcwkdw8mcSQvg",Ut=e=>{let{quality:t}=e;const i=K(t),n=[c.M4.VERY_HIGH,c.M4.HIGH,c.M4.NORMAL,c.M4.LOW];t===c.M4.HIFI24?n.unshift(c.M4.HIFI24):n.unshift(c.M4.HIFI);const a=t===c.M4.UNKNOWN?"textBase":"textBrightAccent";return(0,w.jsxs)(S.x,{variant:"tinted",className:Rt,children:[(0,w.jsx)(E.w,{id:"quality",size:"lg",pretitle:"Current quality",title:(0,w.jsx)(s.x,{variant:"titleSmall",semanticColor:a,children:i.title}),paddingInlineStart:"0px",paddingInlineEnd:"0px",variant:"naked"}),(0,w.jsx)("div",{children:n.map(((e,i)=>{const n=K(e),a=e===t,l=a?"textBrightAccent":"textSubdued";return(0,w.jsx)(E.w,{id:n.title,size:"sm",paddingInlineStart:"0px",paddingInlineEnd:"0px",media:(0,w.jsx)("div",{className:r()(zt,{[Pt]:a})}),title:(0,w.jsx)(s.x,{semanticColor:l,children:n.title}),trailing:(0,w.jsx)(s.x,{semanticColor:l,children:n.bitrateLabel}),variant:"naked"},i)}))})]})};var Zt=i(26368);const Gt=e=>{let{onClick:t}=e;const{bitrateLevel:i}=j(),n=i===c.M4.HIFI||c.M4.HIFI24;return(0,w.jsx)(E.w,{id:"aboutLossless",variant:"naked",title:n?"About Lossless":"How to listen in Lossless",leading:(0,w.jsx)(Zt.Z,{size:"small",semanticColor:n?"textBrightAccent":"textWarning"}),onClick:t,padding:"0px 12px"})};var Wt=i(767);const qt=e=>{let{onClick:t}=e;const i=fe(),[{data:n}]=we(i.quality.streamingQuality);if(void 0===n)return null;const{title:a}=Ne(n);return(0,w.jsx)(E.w,{id:"qualitySetting",variant:"naked",title:D.ag.get("desktop.settings.streamingQuality"),leading:(0,w.jsx)(Wt.E,{size:"small"}),subtitle:a,onClick:t,padding:"0px 12px"})},Qt=e=>{let{onSettings:t,onDetails:i}=e;const{bitrateLevel:n}=j();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ut,{quality:n}),(0,w.jsx)(Gt,{onClick:i}),(0,w.jsx)(qt,{onClick:t})]})};var Kt=i(10226),Yt=i(16941),Xt=i(17676);const Jt=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=Qe(),{activeDevice:i}=(0,l.B)((e=>({activeDevice:e.activeDevice})));let n=null;return t?n=t.transportType===Ke.Fl.TRANSPORT_TYPE_BLUETOOTH?t.name:"Wired Connection":!e&&i&&(n=i.isLocal?D.ag.get("web-player.connect.device-picker.this-computer"):i.name),n},$t=()=>{const e=Jt();return e?(0,w.jsx)(s.x,{variant:"titleSmall",semanticColor:"textBase",children:e}):null},ei=e=>{let{isError:t}=e;return t?(0,w.jsx)(E.w,{id:"filterError",variant:"tinted",paddingBlockStart:"12px",paddingBlockEnd:"12px",paddingInlineStart:"16px",paddingInlineEnd:"16px",leading:(0,w.jsx)(B.l,{semanticColor:"textSubdued",size:"small"}),title:"Sorry, this is unavailable. Try reconnecting your headphones."}):null},ti="XdRXn03t5BJZ3PT5elBo",ii="nYCK_YoWW2PD8dZ2wW8m",ni="UNs86HBsi2znq4noJ4R_",ai="mVvvhBvCvKpGkXj2iBOE",ri="XuO5zqsxmXxWGN4ewmbR",si="akOXhXhi7WpVAH3Hpggp",li=e=>{let{currentDeviceState:t}=e;const i=(0,n.useCallback)((()=>{var e;null===(e=t.toggleTuneHeadphones)||void 0===e||e.call(t)}),[t]),a=(0,n.useCallback)((()=>{var e;null===(e=t.toggleTuneStudio)||void 0===e||e.call(t)}),[t]),r=null!==t.toggleTuneHeadphones,s=t.contentRestrictions.externalizationRestricted,l=!!t.device&&!s;return(0,w.jsxs)("div",{className:ai,children:[(r||t.contentRestrictions.specificRestricted)&&(0,w.jsx)(E.w,{variant:"naked",size:"md",id:"headphones",className:ri,disabled:t.contentRestrictions.specificRestricted,title:(0,w.jsx)(Nt.g,{className:si,children:"Optimize"}),subtitle:"Fine-tune your headphones",trailing:(0,w.jsx)(de.Z,{id:"headphoneTunes",onSelected:i,disabled:t.contentRestrictions.specificRestricted,value:t.currentState.specificEnabled,condensed:!0})}),(0,w.jsx)(E.w,{variant:"naked",size:"md",id:"studio",className:ri,title:(0,w.jsx)(Nt.g,{className:si,children:"Spatialize"}),subtitle:s?"Unavailable for this content":"Broaden your sound",disabled:!l,trailing:(0,w.jsx)(de.Z,{id:"externalization",onSelected:a,disabled:!l,value:t.currentState.externalizationEnabled,condensed:!0})})]})},oi=()=>{var e;const{setCurrentView:t,viewTransitions:i}=(0,n.useContext)(ne),a=i[ee.Overview],{deviceFilterState:r}=et(),l=r.isOnboarded;return(0,w.jsx)(E.w,{id:"listeningWith",variant:"tinted",pretitle:"Model",horizontalGap:"0px",paddingBlockStart:"12px",paddingBlockEnd:"12px",paddingInlineStart:"16px",paddingInlineEnd:"16px",trailing:(0,w.jsx)(wt.P,{size:"small",onClick:()=>{t(a.selectManually)},children:(0,w.jsx)(s.x,{variant:"bodySmallBold",children:"Change model"})}),footer:l&&(0,w.jsx)(li,{currentDeviceState:r}),title:(null===(e=r.device)||void 0===e?void 0:e.deviceName)??"Select your headphone model"})};var ci=i(58997);const di=()=>{const{removeCurrentDevice:e}=at(),{triggerDialog:t,dialog:i}=mt({title:"Forget sound settings?",description:"By confirming, you'll loose the Dirac settings for this device",onConfirm:e});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(E.w,{id:"qualitySetting",variant:"naked",title:"Reset headphone tools",leading:(0,w.jsx)(ci.F,{size:"small"}),onClick:()=>t(!1),padding:"0px 12px"}),i]})},ui="k4f1o0jOMnxv6OS8dC7p",vi=e=>{let{title:t,subtitle:i,buttonLabel:n,onClick:a}=e;return(0,w.jsx)(E.w,{variant:"naked",size:"lg",id:"getStarted",className:ui,title:t,subtitle:i,paddingBlockStart:"16px",paddingBlockEnd:"16px",footer:(0,w.jsx)(wt.P,{size:"small",onClick:a,children:(0,w.jsx)(s.x,{variant:"bodySmallBold",children:n})})})},gi=()=>{const{setCurrentView:e,viewTransitions:t}=(0,n.useContext)(ne),i=t[ee.Overview],a=(()=>{const e=(0,Kt.W6)(Xt.y$S),t="1"===(0,Yt.m)("is-pigeon");return e&&t})(),{deviceFilterState:r,isError:s,isLoading:l}=et(),o=Qe(),c=r.isOnboarded,d=o&&!r.isOnboarded,[u]=Me(),v=(0,n.useCallback)((()=>{r.device?e(i.getStarted):e(i.selectManually,{showDialogOnBack:!0})}),[r.device,e,i.getStarted,i.selectManually]);return(0,w.jsx)(J,{children:(0,w.jsxs)("div",{className:ti,children:[(0,w.jsx)($t,{}),(0,w.jsx)("div",{className:ii,children:s||l?(0,w.jsx)(ei,{isError:s}):(0,w.jsxs)(w.Fragment,{children:[c&&(0,w.jsx)(oi,{}),d&&(0,w.jsx)(vi,{title:"Enhance your headphones",subtitle:"Use patented technology to improve your headphones’ performance. ",buttonLabel:"Set up",onClick:v})]})}),a&&(0,w.jsxs)("div",{className:ni,children:[!u&&(0,w.jsx)(vi,{title:"Lose yourself in Lossless audio",subtitle:"Stream in up to 24-bit on any compatible device.",buttonLabel:"Take a tour",onClick:()=>e(i.onboardHifi)}),(0,w.jsx)(Qt,{onSettings:()=>{e(i.settings)},onDetails:()=>{e(i.details)}})]}),c&&(0,w.jsx)(di,{})]})})};var xi=i(13481),hi=i(58800);const pi="mRZxP51i40ow4s1NHWLQ",mi="KblagRGVFNw3gchTTRNk",Ci=()=>{const{currentView:e}=(0,n.useContext)(ne);switch(e){case ee.ActivationDetection:return(0,w.jsx)(bt,{type:"detection"});case ee.ActivationExternalization:return(0,w.jsx)(bt,{type:"externalization"});case ee.ActivationSpecific:return(0,w.jsx)(bt,{type:"specific"});case ee.Error:return(0,w.jsx)(jt,{});case ee.ManualSelection:return(0,w.jsx)(Vt,{});case ee.Overview:return(0,w.jsx)(gi,{});case ee.AudioQualitySettings:return(0,w.jsx)(_e,{});case ee.AudioQualityDetails:return(0,w.jsx)(oe,{});case ee.DiscoverHifi:return(0,w.jsx)(Ze,{});default:return(0,ke._)(e),null}},bi=()=>{const{currentView:e}=(0,n.useContext)(ne),t=(0,pt.hv)(),i=[ee.ActivationDetection,ee.ActivationExternalization,ee.ActivationSpecific,ee.DiscoverHifi].includes(e),a=[ee.ActivationDetection,ee.ActivationExternalization,ee.ActivationSpecific,ee.ManualSelection].includes(e);return(0,n.useEffect)((()=>{t(a?$.rZ.PUFFIN_START_ACTIVATION:$.rZ.PUFFIN_FINISH_ACTIVATION)}),[t,a]),(0,w.jsx)(hi.K,{className:r()({[mi]:i}),children:(0,w.jsxs)("div",{className:pi,children:[(0,w.jsx)(Ci,{}),false]})})},fi=()=>(0,w.jsx)(xi.l,{label:"Puffin",children:(0,w.jsx)(ae,{children:(0,w.jsx)(bi,{})})});var yi=i(71354),ji=i(78171),Si=i(27782),Hi=i(91731);const wi="lQazeor2VZZkCA3YXIhP",Ni="SO3L1795AEEiylsvaA3X",Ei=e=>{let{onHide:t}=e;const i=(0,pt.hv)();return(0,w.jsxs)("div",{className:Ni,children:[(0,w.jsx)(s.x,{variant:"bodyMedium",children:"Enhance these headphones?"}),(0,w.jsx)(Ye.o,{semanticColor:"textBrightAccent",onClick:()=>{i($.rZ.PUFFIN_START_ACTIVATION)},condensedAll:!0,size:"small",children:"Set up"}),(0,w.jsx)(Ye.o,{semanticColor:"textSubdued",onClick:t,condensedAll:!0,size:"small",children:"Not now"})]})},_i=()=>{const e=Jt(!0);return(0,w.jsx)("div",{className:Ni,children:(0,w.jsx)(s.x,{variant:"bodyMedium",children:`Optimized for ${e}`})})},ki=()=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"110",height:"24",viewBox:"0 0 110 24",fill:"none",children:[(0,w.jsx)("g",{clipPath:"url(#clip0_2548_75340)",children:(0,w.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.15734 9.25061C8.85004 8.13001 15.2302 8.34115 19.0985 10.6382C19.6303 10.9549 20.3199 10.7793 20.6363 10.2458C20.9524 9.71333 20.7776 9.02438 20.244 8.70775C15.7911 6.06437 8.74454 5.81575 4.50579 7.10274C3.91237 7.283 3.57803 7.90967 3.75774 8.50285C3.93745 9.09586 4.56443 9.4307 5.15734 9.25061ZM5.72724 12.9502C9.54258 11.7923 14.4602 12.3664 17.6847 14.3488C18.1247 14.6191 18.7003 14.481 18.9717 14.0407C19.2424 13.6014 19.1038 13.0254 18.6638 12.7544C14.9602 10.4784 9.54206 9.83755 5.1838 11.1605C4.68965 11.3109 4.41084 11.8322 4.55976 12.327C4.71006 12.8208 5.23257 13.0996 5.72724 12.9502ZM5.93306 16.4002C10.1104 15.446 13.657 15.8349 16.475 17.5571C16.8275 17.7727 17.2879 17.6619 17.5034 17.3084C17.7191 16.9557 17.6079 16.4949 17.2554 16.2796C14.0923 14.3469 10.1715 13.8972 5.60011 14.9421C5.19677 15.0339 4.94546 15.4352 5.03782 15.8377C5.12966 16.2401 5.53059 16.4923 5.93306 16.4002ZM12 24C5.37285 24 0 18.6277 0 11.9998C0 5.37264 5.37285 0 12 0C18.6277 0 24 5.37264 24 11.9998C24 18.6277 18.6277 24 12 24ZM85.0133 18H87.2078V9.88199H85.0133V18ZM86.1023 5.85599C85.3598 5.85599 84.7493 6.46649 84.7493 7.22549C84.7493 7.95149 85.3598 8.56199 86.1023 8.56199C86.8613 8.56199 87.4553 7.95149 87.4553 7.22549C87.4553 6.46649 86.8613 5.85599 86.1023 5.85599ZM38.712 9.08999L36.666 9.71699C36.5505 9.07349 36.0225 8.06699 34.5375 8.06699C33.432 8.06699 32.706 8.77649 32.706 9.55199C32.706 10.1955 33.1185 10.707 33.9765 10.872L35.61 11.1855C37.7385 11.598 38.877 12.984 38.877 14.634C38.877 16.4325 37.3755 18.2475 34.653 18.2475C31.551 18.2475 30.1815 16.251 30 14.5845L32.112 14.0235C32.211 15.1785 33.0195 16.218 34.6695 16.218C35.8905 16.218 36.567 15.6075 36.567 14.7825C36.567 14.106 36.0555 13.578 35.148 13.3965L33.5145 13.0665C31.65 12.687 30.4455 11.4825 30.4455 9.71699C30.4455 7.63799 32.31 6.05399 34.521 6.05399C37.359 6.05399 38.448 7.76999 38.712 9.08999ZM44.9872 18C44.9542 17.835 44.9212 17.4555 44.9212 17.1255C44.4757 17.8845 43.5352 18.2145 42.6772 18.2145C40.7137 18.2145 39.5917 16.779 39.5917 15.0135V9.88199H41.7862V14.568C41.7862 15.4755 42.2482 16.2015 43.2712 16.2015C44.2447 16.2015 44.8057 15.5415 44.8057 14.601V9.88199H47.0002V16.5315C47.0002 17.1585 47.0497 17.7195 47.0827 18H44.9872ZM48.2744 21.135H50.4689V17.208C50.8649 17.7525 51.6899 18.198 52.8119 18.198C55.1054 18.198 56.6399 16.383 56.6399 13.9245C56.6399 11.5155 55.2704 9.70049 52.8944 9.70049C51.6734 9.70049 50.7659 10.245 50.4029 10.872V9.88199H48.2744V21.135ZM52.4654 11.664C53.5874 11.664 54.4784 12.5055 54.4784 13.941C54.4784 15.393 53.5874 16.2345 52.4654 16.2345C51.3434 16.2345 50.4359 15.3765 50.4359 13.941C50.4359 12.5055 51.3434 11.664 52.4654 11.664ZM62.4857 9.84899V12.06C62.2382 12.0105 62.0237 11.994 61.8257 11.994C60.7037 11.994 59.7302 12.5385 59.7302 14.2875V18H57.5357V9.88199H59.6642V11.0865C60.1592 10.014 61.2812 9.81599 61.9742 9.81599C62.1557 9.81599 62.3207 9.83249 62.4857 9.84899ZM66.5605 11.4165C67.8145 11.4165 68.3425 12.2085 68.3755 13.017H64.7455C64.795 12.2745 65.422 11.4165 66.5605 11.4165ZM70.4215 15.6735L68.59 15.129C68.326 15.855 67.765 16.3665 66.742 16.3665C65.653 16.3665 64.7455 15.591 64.696 14.5185H70.504C70.504 14.5104 70.506 14.4845 70.509 14.4454C70.5182 14.3248 70.537 14.0787 70.537 13.842C70.537 11.235 69.0355 9.63449 66.5275 9.63449C64.4485 9.63449 62.5345 11.3175 62.5345 13.908C62.5345 16.647 64.498 18.2475 66.7255 18.2475C68.722 18.2475 70.009 17.076 70.4215 15.6735ZM73.6282 18H71.4337V9.88199H73.5292V10.872C73.9747 10.08 75.0142 9.65099 75.9052 9.65099C77.0107 9.65099 77.9017 10.1295 78.3142 11.004C78.9577 10.014 79.8157 9.65099 80.8882 9.65099C82.3897 9.65099 83.8252 10.5585 83.8252 12.7365V18H81.6967V13.182C81.6967 12.3075 81.2677 11.6475 80.2612 11.6475C79.3207 11.6475 78.7597 12.3735 78.7597 13.248V18H76.5817V13.182C76.5817 12.3075 76.1362 11.6475 75.1462 11.6475C74.1892 11.6475 73.6282 12.357 73.6282 13.248V18ZM93.7872 18C93.7542 17.835 93.7212 17.4555 93.7212 17.1255C93.2757 17.8845 92.3352 18.2145 91.4772 18.2145C89.5137 18.2145 88.3917 16.779 88.3917 15.0135V9.88199H90.5862V14.568C90.5862 15.4755 91.0482 16.2015 92.0712 16.2015C93.0447 16.2015 93.6057 15.5415 93.6057 14.601V9.88199H95.8002V16.5315C95.8002 17.1585 95.8497 17.7195 95.8827 18H93.7872ZM97.0744 18H99.2689V13.248C99.2689 12.357 99.8299 11.6475 100.787 11.6475C101.777 11.6475 102.222 12.3075 102.222 13.182V18H104.4V13.248C104.4 12.3735 104.961 11.6475 105.902 11.6475C106.908 11.6475 107.337 12.3075 107.337 13.182V18H109.466V12.7365C109.466 10.5585 108.03 9.65099 106.529 9.65099C105.456 9.65099 104.598 10.014 103.955 11.004C103.542 10.1295 102.651 9.65099 101.546 9.65099C100.655 9.65099 99.6154 10.08 99.1699 10.872V9.88199H97.0744V18Z",fill:"black",fillOpacity:"0.9"})}),(0,w.jsx)("defs",{children:(0,w.jsx)("clipPath",{id:"clip0_2548_75340",children:(0,w.jsx)("rect",{width:"110",height:"24",fill:"white"})})})]}),Ai=e=>{let{message:t}=e;return(0,w.jsxs)("div",{className:wi,children:[(0,w.jsx)(ki,{}),(0,w.jsx)(s.x,{variant:"bodyMedium",children:t})]})},Ii=e=>{let{hasDevice:t}=e;const{isPlayingRemotely:i}=(0,Je.H)();return i?(0,w.jsx)(Ai,{message:"Your enhanced listening"}):t?(0,w.jsx)(Ai,{message:"Control your new headphone tools"}):(0,w.jsx)(Ai,{message:"Control your Lossless listening"})},Mi=e=>{let{state:t,hasDevice:i,onHide:n}=e;switch(t){case"detection":return(0,w.jsx)(Ei,{onHide:n});case"initial":return(0,w.jsx)(Ii,{hasDevice:i});case"filters_applied":return(0,w.jsx)(_i,{});default:(0,ke._)(t)}return null};var Li=i(32636);const Di="lUMd22gkllxoPeSGTbLy",Oi=$.rZ.PUFFIN_BUTTON_CLICK,Bi=()=>{const{isActive:e,panelSend:t}=(0,$.Wy)(X.s.Puffin),[i,a]=(0,n.useState)("none"),[r,s]=(0,Ie.z)("onboarding-dismissed:puffin",!1),l=(0,pt.aT)(Oi),{deviceFilterState:o}=et(),c=!!Qe(),d=o.currentState.externalizationEnabled||o.currentState.specificEnabled,u=(0,Ge.f)().getSavedDevices().length>0;qe((t=>{let{data:{deviceFilterState:i}}=t;e||null===i||(r&&!i.isOnboarded?a("detection"):(i.currentState.externalizationEnabled||i.currentState.specificEnabled)&&a("filters_applied"))}));const v=(0,n.useCallback)((()=>{a("none")}),[]);(0,n.useEffect)((()=>{const e=setTimeout(v,5e3);return()=>clearTimeout(e)}),[v,i]),(0,n.useEffect)((()=>{u||r||a("initial")}),[u,r,e,v,s]),(0,n.useEffect)((()=>{!e&&c||(v(),s(!0))}),[v,e,s,c]);const g=d?yi.Q:ji.F;return(0,w.jsx)(Si.x,{placement:"topStart",hideCloseButton:!0,overlay:"none"!==i&&(0,w.jsx)(Hi.J,{role:"alertdialog",arrow:"bottomEnd",colorSet:"invertedLight",className:Di,onClose:v,children:(0,w.jsx)(Mi,{state:i,hasDevice:c,onHide:v})}),children:(0,w.jsx)(Li.C,{isActive:e,isActiveNoIndicator:d||c,onToggle:()=>{t(Oi)},label:"Music Room",icon:g,disabled:!l})})};if(!["development","test"].includes("production")&&!{}.ENABLE_PUFFIN)throw new Error("Puffin can only be imported in development")},16095:(e,t,i)=>{i.d(t,{A:()=>r,s:()=>a});var n=i(84469);let a=function(e){return e.UPDATE="update",e.DEVICE_CONNECTED="deviceConnected",e}({});class r extends n.r{}}}]);
//# sourceMappingURL=xpui-puffin.96ad24ff.js.mapnk-type="nav-primary" href="https://www.aritzia.com/en/clothing/socks-and-tights" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="socks-and-tights" data-ga-parent="clothing" data-ga-cat="socks &amp; tights">
Socks &amp; Tights
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/suits-for-women" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="suits-for-women" data-ga-parent="clothing" data-ga-cat="suits &amp; tailoring">
Suits &amp; Tailoring
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweaters" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweaters" data-ga-parent="clothing" data-ga-cat="sweaters">
Sweaters
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweatsuit-sets" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatsuit-sets" data-ga-parent="clothing" data-ga-cat="sweatsuits">
Sweatsuits
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/swimsuits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="swimsuits" data-ga-parent="clothing" data-ga-cat="swim">
Swim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/tshirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tshirts" data-ga-parent="clothing" data-ga-cat="t-shirts &amp; tops">
T-Shirts &amp; Tops
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/online-exclusives-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="online-exclusives-1" data-ga-parent="clothing" data-ga-cat="online exclusives">
Online Exclusives
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/online-exclusive-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="online-exclusive-feature" data-ga-parent="clothing" data-ga-cat="online exclusives">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=900 900w" alt="Online Exclusives" title="Online Exclusives" />
<span class="f0 pt2 db">Online Exclusives</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/dresses-2" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="dresses-2" data-ga-parent="clothing" data-ga-cat="dresses">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=900 900w" alt="Dresses" title="Dresses" />
<span class="f0 pt2 db">Dresses</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="Shop-by">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Iconically Aritzia
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/contour-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-shop-by" data-ga-parent="shop by" data-ga-cat="contour">
Contour
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/seamless-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="seamless-feature-1" data-ga-parent="shop by" data-ga-cat="seamless">
Seamless
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/cozy-fleece-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cozy-fleece-shop-by" data-ga-parent="shop by" data-ga-cat="sweatfleece">
Sweatfleece
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/effortless-pant-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="effortless-pant-shop-by" data-ga-parent="shop by" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/super-puff-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-shop-by" data-ga-parent="shop by" data-ga-cat="the super puff&trade;">
The Super Puff&trade;
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Occasion
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/womens-basics" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="womens-basics" data-ga-parent="shop by" data-ga-cat="everyday essentials">
Everyday Essentials
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/event-dressing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="event-dressing" data-ga-parent="shop by" data-ga-cat="going out">
Going Out
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/loungewear-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="loungewear-1" data-ga-parent="shop by" data-ga-cat="loungewear">
Loungewear
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/vacation-outfits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vacation-outfits" data-ga-parent="shop by" data-ga-cat="vacation">
Vacation
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/romantic-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="romantic-edit" data-ga-parent="shop by" data-ga-cat="valentine's day">
Valentine&#39;s Day
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/workwear" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="workwear" data-ga-parent="shop by" data-ga-cat="wear to work">
Wear to Work
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/working-out" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="working-out" data-ga-parent="shop by" data-ga-cat="working out">
Working Out
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Trending
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="shapewear-clothing" data-ga-parent="shop by" data-ga-cat="body shaping">
Body Shaping
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/cargo-parachute-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cargo-parachute-shop-by" data-ga-parent="shop by" data-ga-cat="cargo &amp; parachute">
Cargo &amp; Parachute
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/two-piece-sets-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="two-piece-sets-1" data-ga-parent="shop by" data-ga-cat="matching sets">
Matching Sets
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/online-exclusive" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="online-exclusive" data-ga-parent="shop by" data-ga-cat="online exclusives">
Online Exclusives
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/puffers-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="puffers-shop-by" data-ga-parent="shop by" data-ga-cat="puffers">
Puffers
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Fabric
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/butter-fabric" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="butter-fabric" data-ga-parent="shop by" data-ga-cat="butter">
Butter
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweatsuit-sets/cozy-fleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cozy-fleece-shop" data-ga-parent="shop by" data-ga-cat="cozy fleece">
Cozy Fleece
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/crepette-clothing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="crepette-clothing" data-ga-parent="shop by" data-ga-cat="crepette">
Crepette
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/sculpt-knit-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sculpt-knit-shop-by" data-ga-parent="shop by" data-ga-cat="sculpt knit">
Sculpt Knit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing?prefn1=sustainability&amp;prefv1=Organic%20Materials%20%7C%20Recycled%20Materials%20%7C%20Responsible%20Forestry%20%7C%20Responsible%20Wool%20%7C%20Responsible%20Cashmere%20%7C%20Responsible%20Down" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sustainable-materials" data-ga-parent="shop by" data-ga-cat="sustainable styles">
Sustainable Styles
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/vegan-leather-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vegan-leather-shop-by" data-ga-parent="shop by" data-ga-cat="vegan leather">
Vegan Leather
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/shapewear-clothing-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="shapewear-clothing-feature" data-ga-parent="shop by" data-ga-cat="body shaping">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=900 900w" alt="Body Shaping" title="Body Shaping" />
<span class="f0 pt2 db">Body Shaping</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/valentines-day-shopby-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="valentines-day-shopby-feature" data-ga-parent="shop by" data-ga-cat="valentine's day">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=900 900w" alt="Valentine's Day" title="Valentine's Day" />
<span class="f0 pt2 db">Valentine&#39;s Day</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="accessories-and-shoes">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/bags-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="bags-1" data-ga-parent="accessories" data-ga-cat="bags">
Bags
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/belts-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="belts-1" data-ga-parent="accessories" data-ga-cat="belts">
Belts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/gloves" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="gloves" data-ga-parent="accessories" data-ga-cat="gloves &amp; mittens">
Gloves &amp; Mittens
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/hats-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="hats-1" data-ga-parent="accessories" data-ga-cat="hats">
Hats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/intimates-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="intimates-1" data-ga-parent="accessories" data-ga-cat="intimates">
Intimates
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/scarves-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="scarves-1" data-ga-parent="accessories" data-ga-cat="scarves">
Scarves
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/shoes-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="shoes-1" data-ga-parent="accessories" data-ga-cat="shoes">
Shoes
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/socks-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="socks-1" data-ga-parent="accessories" data-ga-cat="socks &amp; tights">
Socks &amp; Tights
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/tech" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tech" data-ga-parent="accessories" data-ga-cat="tech">
Tech
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/everyday-socks-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="everyday-socks-1" data-ga-parent="accessories" data-ga-cat="everyday socks">
Everyday Socks
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/new-era-feature-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-era-feature-2" data-ga-parent="accessories" data-ga-cat="new era">
New Era
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/socks-tights-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="socks-tights-feature" data-ga-parent="accessories" data-ga-cat="socks &amp; tights">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=900 900w" alt="Socks &amp; Tights" title="Socks &amp; Tights" />
<span class="f0 pt2 db">Socks &amp; Tights</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/bags-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="bags-feature" data-ga-parent="accessories" data-ga-cat="bags">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=900 900w" alt="Bags" title="Bags" />
<span class="f0 pt2 db">Bags</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/shoes-ca" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="shoes-ca" data-ga-parent="accessories" data-ga-cat="shoes">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=900 900w" alt="Shoes" title="Shoes" />
<span class="f0 pt2 db">Shoes</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="brands">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Iconically Aritzia
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/contour-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-icon" data-ga-parent="brands" data-ga-cat="contour">
Contour
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/seamless-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="seamless-icon" data-ga-parent="brands" data-ga-cat="seamless">
Seamless
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/sweatfleece-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatfleece-icon" data-ga-parent="brands" data-ga-cat="sweatfleece">
Sweatfleece
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/effortless-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="effortless-icon" data-ga-parent="brands" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/super-world" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-world" data-ga-parent="brands" data-ga-cat="the super puff&trade;">
The Super Puff&trade;
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Our Brands
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/t-babaton" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="t-babaton" data-ga-parent="brands" data-ga-cat="babaton">
Babaton
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/denimforum" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="denimforum" data-ga-parent="brands" data-ga-cat="denim forum">
Denim Forum
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/wilfred-free" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="wilfred-free" data-ga-parent="brands" data-ga-cat="free">
Free
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/sunday-best" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sunday-best" data-ga-parent="brands" data-ga-cat="sunday best">
Sunday Best
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/ten-by-babaton" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="ten-by-babaton" data-ga-parent="brands" data-ga-cat="ten by babaton">
Ten by Babaton
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/group" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="group" data-ga-parent="brands" data-ga-cat="the group">
The Group
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tna" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tna" data-ga-parent="brands" data-ga-cat="tna">
Tna
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tnaction" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tnaction" data-ga-parent="brands" data-ga-cat="tnaction&trade;">
TnAction&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/wilfred" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="wilfred" data-ga-parent="brands" data-ga-cat="wilfred">
Wilfred
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
More Brands We Love
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/agolde-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="agolde-1" data-ga-parent="brands" data-ga-cat="agolde">
AGOLDE
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/asics-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="asics-1" data-ga-parent="brands" data-ga-cat="asics">
ASICS
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/citizens-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="citizens-1" data-ga-parent="brands" data-ga-cat="citizens of humanity">
Citizens of Humanity
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/eb-denim-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="eb-denim-1" data-ga-parent="brands" data-ga-cat="eb denim">
EB Denim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/levis-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="levis-1" data-ga-parent="brands" data-ga-cat="levi&rsquo;s&reg; premium">
Levi&rsquo;s&reg; Premium
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/new-era" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-era" data-ga-parent="brands" data-ga-cat="new era">
New Era
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/new-balance" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-balance" data-ga-parent="brands" data-ga-cat="new balance">
New Balance
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/redone" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="redone" data-ga-parent="brands" data-ga-cat="re/done">
RE/DONE
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/salomon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="salomon" data-ga-parent="brands" data-ga-cat="salomon">
Salomon
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tna-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="tna-feature" data-ga-parent="brands" data-ga-cat="tna">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=900 900w" alt="Tna" title="Tna" />
<span class="f0 pt2 db">Tna</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/babaton-1" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="babaton-1" data-ga-parent="brands" data-ga-cat="babaton">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=900 900w" alt="Babaton" title="Babaton" />
<span class="f0 pt2 db">Babaton</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="stories">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Spring 24
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/new-contour-spring-2024" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-contour-spring-2024" data-ga-parent="stories" data-ga-cat="new contour does things">
New Contour Does Things
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Winter 23
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/lunar-new-year-24" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="lunar-new-year-24" data-ga-parent="stories" data-ga-cat="lunar new year: year of the dragon">
Lunar New Year: Year of the Dragon
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/super-on-you-story-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-on-you-story-feature-1" data-ga-parent="stories" data-ga-cat="super on you">
Super On You
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/super-puff-styles-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-styles-winter-23" data-ga-parent="stories" data-ga-cat="the super puff&trade;. it&rsquo;s personal. on set.">
The Super Puff&trade;. It&rsquo;s Personal. On Set.
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/winter-coat-outfits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="winter-coat-outfits" data-ga-parent="stories" data-ga-cat="bundled up edit">
Bundled Up Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/emma-chamberlain-super-puff-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="emma-chamberlain-super-puff-winter-23" data-ga-parent="stories" data-ga-cat="super goes with emma">
Super Goes With Emma
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/vegan-leather-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vegan-leather-edit" data-ga-parent="stories" data-ga-cat="vegan leather edit">
Vegan Leather Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/polar-fleece-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="polar-fleece-winter-23" data-ga-parent="stories" data-ga-cat="polar fleece edit">
Polar Fleece Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-pam-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-pam-winter-23" data-ga-parent="stories" data-ga-cat="she's pam. in contour.">
She&#39;s Pam. In Contour.
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-lookbook-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-lookbook-winter-23" data-ga-parent="stories" data-ga-cat="contour winter 23 lookbook">
Contour Winter 23 Lookbook
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/ndtr-osd-2023" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="ndtr-osd-2023" data-ga-parent="stories" data-ga-cat="orange shirt day">
Orange Shirt Day
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/sweaters-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweaters-edit" data-ga-parent="stories" data-ga-cat="sweaters edit">
Sweaters Edit
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-sp24-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="contour-sp24-feature" data-ga-parent="stories" data-ga-cat="new contour does things">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=900 900w" alt="New Contour Does Things" title="New Contour Does Things" />
<span class="f0 pt2 db">New Contour Does Things</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/lunar-new-year-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="lunar-new-year-feature" data-ga-parent="stories" data-ga-cat="lunar new year: year of the dragon">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=900 900w" alt="Lunar New Year: Year of the Dragon" title="Lunar New Year: Year of the Dragon" />
<span class="f0 pt2 db">Lunar New Year: Year of the Dragon</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/bundled-up-story" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="bundled-up-story" data-ga-parent="stories" data-ga-cat="bundled up edit">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=900 900w" alt="Bundled Up Edit" title="Bundled Up Edit" />
<span class="f0 pt2 db">Bundled Up Edit</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="the-super-puff-5">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-iconic-supers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-iconic-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the classic supers">
The Classic Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-super-puff-mens-5" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-super-puff-mens-5" data-ga-parent="the super puff&trade;" data-ga-cat="the men's supers">
The Men&#39;s Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-new-supers-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-new-supers-1" data-ga-parent="the super puff&trade;" data-ga-cat="the new supers">
The New Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/coats-jackets/puffers/thesuperpuff?prefn1=sustainability&amp;prefv1=Recycled%20Materials" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-recycled-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the 100% recycled supers">
The 100% Recycled Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-accessories-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-accessories-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super accessories">
The Super Accessories
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-vests-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-vests-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super vests">
The Super Vests
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-waterproof-supers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-waterproof-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the waterproof supers">
The Waterproof Supers
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-colours-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-colours-2" data-ga-parent="the super puff&trade;" data-ga-cat="super colours">
Super Colours
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-on-you-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-on-you-feature-1" data-ga-parent="the super puff&trade;" data-ga-cat="super on you">
Super On You
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-guide-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-guide-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade; guide">
The Super Puff&trade; Guide
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-game-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-game-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade;: icy odyssey">
The Super Puff&trade;: Icy Odyssey
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-guide-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="super-puff-guide-feature" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade; guide">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=900 900w" alt="The Super Puff&trade; Guide" title="The Super Puff&trade; Guide" />
<span class="f0 pt2 db">The Super Puff&trade; Guide</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/waterproof-supers-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="waterproof-supers-feature" data-ga-parent="the super puff&trade;" data-ga-cat="the waterproof supers">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=900 900w" alt="The Waterproof Supers" title="The Waterproof Supers" />
<span class="f0 pt2 db">The Waterproof Supers</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-colours-1" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="super-colours-1" data-ga-parent="the super puff&trade;" data-ga-cat="super colours">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=900 900w" alt="Super Colours" title="Super Colours" />
<span class="f0 pt2 db">Super Colours</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="sweatfleece">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatpants-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatpants-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatpants">
Sweatpants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatshirts-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatshirts-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatshirts">
Sweatshirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatshorts-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatshorts-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatshorts">
Sweatshorts
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Fit
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/mega-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="mega-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="mega">
Mega
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/boyfriend-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="boyfriend-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="boyfriend">
Boyfriend
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="perfect-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="perfect">
Perfect
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-hoodie-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="perfect-hoodie-feature-1" data-ga-parent="sweatfleece" data-ga-cat="cozy fleece perfect hoodie">
Cozy Fleece Perfect Hoodie
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatfleece-guide-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatfleece-guide-1" data-ga-parent="sweatfleece" data-ga-cat="sweatfleece guide">
Sweatfleece Guide
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatfleece-guide-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="sweatfleece-guide-feature" data-ga-parent="sweatfleece" data-ga-cat="sweatfleece guide">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=900 900w" alt="Sweatfleece Guide" title="Sweatfleece Guide" />
<span class="f0 pt2 db">Sweatfleece Guide</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-hoodie-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="perfect-hoodie-feature" data-ga-parent="sweatfleece" data-ga-cat="cozy fleece perfect hoodie">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=900 900w" alt="Cozy Fleece Perfect Hoodie" title="Cozy Fleece Perfect Hoodie" />
<span class="f0 pt2 db">Cozy Fleece Perfect Hoodie</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="sale">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/final-few" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="final-few" data-ga-parent="sale" data-ga-cat="final few">
Final Few
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-dresses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-dresses" data-ga-parent="sale" data-ga-cat="dresses">
Dresses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-coats-jackets" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-coats-jackets" data-ga-parent="sale" data-ga-cat="jackets &amp; coats">
Jackets &amp; Coats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-jumpsuits-rompers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-jumpsuits-rompers" data-ga-parent="sale" data-ga-cat="jumpsuits &amp; rompers">
Jumpsuits &amp; Rompers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-leggings-bike-shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-leggings-bike-shorts" data-ga-parent="sale" data-ga-cat="leggings &amp; bike shorts">
Leggings &amp; Bike Shorts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-pants" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-pants" data-ga-parent="sale" data-ga-cat="pants">
Pants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-blouses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-blouses" data-ga-parent="sale" data-ga-cat="shirts &amp; blouses">
Shirts &amp; Blouses
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
&nbsp;
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-accessories" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-accessories" data-ga-parent="sale" data-ga-cat="shoes &amp; accessories">
Shoes &amp; Accessories
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-shorts" data-ga-parent="sale" data-ga-cat="shorts">
Shorts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-skirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-skirts" data-ga-parent="sale" data-ga-cat="skirts">
Skirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-sweaters" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-sweaters" data-ga-parent="sale" data-ga-cat="sweaters">
Sweaters
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/swim-sale" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="swim-sale" data-ga-parent="sale" data-ga-cat="swim">
Swim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-tshirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-tshirts" data-ga-parent="sale" data-ga-cat="t-shirts &amp; tops">
T-Shirts &amp; Tops
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Discount
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=50-60" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-50percent" data-ga-parent="sale" data-ga-cat="50&ndash;60% off">
50&ndash;60% Off
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=60-70" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-60percent" data-ga-parent="sale" data-ga-cat="60&ndash;70% off">
60&ndash;70% Off
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/feature-dresses" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="feature-dresses" data-ga-parent="sale" data-ga-cat="dresses">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=900 900w" alt="Dresses" title="Dresses" />
<span class="f0 pt2 db">Dresses</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/feature-skirts" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="feature-skirts" data-ga-parent="sale" data-ga-cat="skirts">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=900 900w" alt="Skirts" title="Skirts" />
<span class="f0 pt2 db">Skirts</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="bag">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box">
<div class="ar-header__scroll flex flex-wrap relative overflow-auto">


<div class="ar-minicart js-minicart w-100 relative" data-currency="CAD">
<div class="js-minicart__total dn">
<a href="https://www.aritzia.com/en/cart" title="View Bag" class="js-view-cart" data-link-type="nav-global" data-location="bag-icon">
Bag (0)
</a>
</div>
<div class="ar-minicart__content js-minicart__content bg-white f0 z-9999" data-selid="minicart-overlay">
<div class="ar-minicart__content-wrapper pt1 pt0-ns">
<div class="ar-minicart__promotion">
</div>
<div class="ar-minicart__products js-minicart__products ws-normal">
<div class="ph5">
You haven't put any items in your bag.
<div class="pt2 mb4">
<a href="/en/clothing" data-ec="ecommerce" data-ea="empty mini bag" data-el="start shopping" class="ar-link">Start Shopping</a>
<span class="tc">or</span>
<a href="/en/my-account?redirect=" data-ec="ecommerce" data-ea="empty mini bag" data-el="sign in" class="ar-link js-minicart__signin">Sign In</a>
</div>
</div>
<div class="ar-minicart__products-container pl0 pt3 pt0-ns overflow-y-auto border-box flex flex-column justify-end">
<div class="ph5-ns">
</div>
<div class="ar-minicart__recommendations mt3">
<div class="ar-slider-recommendations">
<div class="ar-product-swiper" data-cid="gifts-under-35">
<div class="ar-swiper ar-swiper-quickview js-swiper-quickview">
<div class="ar-swiper-buttons cf">
<div class="ar-swiper-next dn dib-ns"><a>Next</a></div>
<div class="ar-swiper-prev dn dib-ns"><a>Prev</a></div>
<h5 class="tl f1">Before you go, there's more:</h5>
</div>
<div class="ar-swiper-scroll ar-swiper-lazyload">
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="335b4233ce7ff42a031785ed10" data-itemid="103241001" data-mpid="103241" data-color="5870" data-pkey="103241-5870" data-colors="8" data-master="{&quot;name&quot;:&quot;ON-THE-WAY EXPOSED BAG&quot;,&quot;brand&quot;:&quot;TnAction&quot;,&quot;master&quot;:&quot;103241&quot;,&quot;category&quot;:&quot;AWN1O08&quot;,&quot;size&quot;:&quot;ONE&quot;,&quot;color&quot;:&quot;KOMBU&quot;,&quot;department&quot;:&quot;N08&quot;,&quot;price&quot;:&quot;38.00&quot;,&quot;listprice&quot;:&quot;38.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;675&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="ON-THE-WAY EXPOSED BAG" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for ON-THE-WAY EXPOSED BAG " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="ON-THE-WAY EXPOSED BAG - Water-repellent nylon multi-way bag" title="ON-THE-WAY EXPOSED BAG - Water-repellent nylon multi-way bag" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s23_19_n08_103241_19629_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s23_19_n08_103241_19629_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="103241001" data-master="103241" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="103241001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="ON-THE-WAY EXPOSED BAG">TnAction</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="103241001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="on-the-way exposed bag">on-the-way exposed bag<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$38</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="103241001" data-master="103241" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 103241001 lh-solid" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="e352fb6defe30c4c4f4ce3990e" data-itemid="114854001" data-mpid="114854" data-color="32459" data-pkey="114854-32459" data-colors="8" data-master="{&quot;name&quot;:&quot;BEST-EVER ANKLE SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114854&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;ARWY BL/AQMR GR/SLB BL&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;20.00&quot;,&quot;listprice&quot;:&quot;20.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;796&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER ANKLE SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER ANKLE SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER ANKLE SOCK 3-PACK - Base Cotton&trade; everyday cotton ankle socks, 3-pack" title="BEST-EVER ANKLE SOCK 3-PACK - Base Cotton&trade; everyday cotton ankle socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114854_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114854_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114854001" data-master="114854" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114854001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="BEST-EVER ANKLE SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114854001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="best-ever ankle sock 3-pack">best-ever ankle sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$20</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114854001" data-master="114854" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114854001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="eb9b0d0223bdc0e012a27eab10" data-itemid="105194017" data-mpid="105194" data-color="23833" data-pkey="105194-23833" data-colors="11" data-master="{&quot;name&quot;:&quot;SINCH SMOOTH WILLOW T-SHIRT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;105194&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;XS&quot;,&quot;color&quot;:&quot;FLUENT TAUPE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;35.00&quot;,&quot;listprice&quot;:&quot;35.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="SINCH SMOOTH WILLOW T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for SINCH SMOOTH WILLOW T-SHIRT - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="SINCH SMOOTH WILLOW T-SHIRT - Seamless crewneck t-shirt" title="SINCH SMOOTH WILLOW T-SHIRT - Seamless crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_105194_18891_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_105194_18891_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style="background-color: rgba( 255, 255, 255, 1 );" data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="105194017" data-master="105194" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="105194017 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="SINCH SMOOTH WILLOW T-SHIRT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="105194017 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="sinch smooth willow t-shirt">sinch smooth willow t-shirt<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$35</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="105194017" data-master="105194" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 105194017 lh-solid" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="11 Colours">
11 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="99e24ccbae96793538d72b9fc2" data-itemid="102669001" data-mpid="102669" data-color="1274" data-pkey="102669-1274" data-colors="12" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW LONGSLEEVE&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;102669&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;2XL&quot;,&quot;color&quot;:&quot;BLACK&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;35.00&quot;,&quot;listprice&quot;:&quot;35.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW LONGSLEEVE" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW LONGSLEEVE - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW LONGSLEEVE - Stretchy ribbed cotton crewneck longsleeve" title="HOMESTRETCH&trade; CREW LONGSLEEVE - Stretchy ribbed cotton crewneck longsleeve" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102669_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102669_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style="background-color: rgba( 255, 255, 255, 1 );" data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="102669001" data-master="102669" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="102669001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="HOMESTRETCH&trade; CREW LONGSLEEVE">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="102669001 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="HomeStretch&trade; Crew Longsleeve">HomeStretch&trade; Crew Longsleeve</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$35</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="102669001" data-master="102669" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 102669001 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="12 Colours">
12 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="be85d2dabc9ee61bd67a2b1cdb" data-itemid="102668001" data-mpid="102668" data-color="1275" data-pkey="102668-1275" data-colors="14" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW T-SHIRT&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;102668&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;XS&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW T-SHIRT - Stretchy ribbed cotton crewneck t-shirt" title="HOMESTRETCH&trade; CREW T-SHIRT - Stretchy ribbed cotton crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102668_4425_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102668_4425_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="102668001" data-master="102668" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="102668001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="HOMESTRETCH&trade; CREW T-SHIRT">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="102668001 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="HomeStretch&trade; Crew T-Shirt">HomeStretch&trade; Crew T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="102668001" data-master="102668" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 102668001 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="14 Colours">
14 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="60b3feb07cf45afecdd59e128e" data-itemid="114850001" data-mpid="114850" data-color="1275" data-pkey="114850-1275" data-colors="9" data-master="{&quot;name&quot;:&quot;BEST-EVER NO-SHOW SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114850&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;18.00&quot;,&quot;listprice&quot;:&quot;18.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER NO-SHOW SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER NO-SHOW SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER NO-SHOW SOCK 3-PACK - Base Cotton&trade; everyday no-show cotton socks, 3-pack" title="BEST-EVER NO-SHOW SOCK 3-PACK - Base Cotton&trade; everyday no-show cotton socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114850_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114850_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114850001" data-master="114850" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114850001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="BEST-EVER NO-SHOW SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114850001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="best-ever no-show sock 3-pack">best-ever no-show sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$18</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114850001" data-master="114850" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114850001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="9 Colours">
9 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="42dd8237c94bfa284b93ff1ce7" data-itemid="114988001" data-mpid="114988" data-color="19451" data-pkey="114988-19451" data-colors="8" data-master="{&quot;name&quot;:&quot;BEST-EVER CREW SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114988&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;HEATHER CLOUD WHITE&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;20.00&quot;,&quot;listprice&quot;:&quot;20.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER CREW SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER CREW SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER CREW SOCK 3-PACK - Base Cotton&trade; everyday cotton crew socks, 3-pack" title="BEST-EVER CREW SOCK 3-PACK - Base Cotton&trade; everyday cotton crew socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114988_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114988_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114988001" data-master="114988" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114988001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="BEST-EVER CREW SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114988001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="best-ever crew sock 3-pack">best-ever crew sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$20</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114988001" data-master="114988" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114988001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="15f6218f0bce13594bbd20dd4a" data-itemid="68755007" data-mpid="68755" data-color="1275" data-pkey="68755-1275" data-colors="16" data-master="{&quot;name&quot;:&quot;BESTHUG&trade; LITTLE RIBBED T-SHIRT&quot;,&quot;brand&quot;:&quot;Sunday Best&quot;,&quot;master&quot;:&quot;68755&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;S&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BESTHUG&trade; LITTLE RIBBED T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BESTHUG&trade; LITTLE RIBBED T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BESTHUG&trade; LITTLE RIBBED T-SHIRT - Fine-ribbed crewneck t-shirt" title="BESTHUG&trade; LITTLE RIBBED T-SHIRT - Fine-ribbed crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_02_a01_68755_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_02_a01_68755_1274_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="68755007" data-master="68755" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="68755007 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="BESTHUG&trade; LITTLE RIBBED T-SHIRT">Sunday Best</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="68755007 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="BestHug&trade; Little Ribbed T-Shirt">BestHug&trade; Little Ribbed T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="68755007" data-master="68755" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 68755007 lh-solid" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="16 Colours">
16 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="cb9410b09ffb4981842b3f1934" data-itemid="104144001" data-mpid="104144" data-color="1274" data-pkey="104144-1274" data-colors="11" data-master="{&quot;name&quot;:&quot;THE SUPER PUFF&trade; NEW MITTEN&quot;,&quot;brand&quot;:&quot;The Super Puff&trade;&quot;,&quot;master&quot;:&quot;104144&quot;,&quot;category&quot;:&quot;AWN1S07&quot;,&quot;size&quot;:&quot;S/M&quot;,&quot;color&quot;:&quot;BLACK&quot;,&quot;department&quot;:&quot;N07&quot;,&quot;price&quot;:&quot;55.00&quot;,&quot;listprice&quot;:&quot;55.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;SFE&quot;,&quot;varbuycode&quot;:&quot;SFECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:3,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="THE SUPER PUFF&trade; NEW MITTEN" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for THE SUPER PUFF&trade; NEW MITTEN " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="THE SUPER PUFF&trade; NEW MITTEN - cliMATTE&trade; goose down puffer mittens" title="THE SUPER PUFF&trade; NEW MITTEN - cliMATTE&trade; goose down puffer mittens" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/f22_18_n07_104144_18872_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/f22_18_n07_104144_18872_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="104144001" data-master="104144" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="104144001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="THE SUPER PUFF&trade; NEW MITTEN">The Super Puff&trade;</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="104144001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="the super puff&trade; new mitten">the super puff&trade; new mitten<span class="ttn"> — cliMATTE</span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$55</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="104144001" data-master="104144" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 104144001 lh-solid" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="11 Colours">
11 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="3de3bd2e3e5379f1657961d1ee" data-itemid="95025029" data-mpid="95025" data-color="19451" data-pkey="95025-19451" data-colors="14" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW WAIST T-SHIRT&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;95025&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;XL&quot;,&quot;color&quot;:&quot;HEATHER CLOUD WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW WAIST T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW WAIST T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW WAIST T-SHIRT - Stretch rib cotton crewneck t-shirt" title="HOMESTRETCH&trade; CREW WAIST T-SHIRT - Stretch rib cotton crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_95025_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_95025_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="95025029" data-master="95025" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="95025029 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="HOMESTRETCH&trade; CREW WAIST T-SHIRT">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="95025029 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="HomeStretch&trade; Crew Waist T-Shirt">HomeStretch&trade; Crew Waist T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="95025029" data-master="95025" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 95025029 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="14 Colours">
14 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item ar-swiper-item-end">
<div><a href="/en/clothing/accessories/gifts-under-35">See all gifts-under-35</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="lh-solid ph5-ns">
</div>
</div>
</div>
<div class="ph5-ns">
<a class="js-checkout-minibag ph2 w-100 tc pv3 f1 white bg-black border-box db dn-ns" href="https://www.aritzia.com/en/checkout/login" title="Checkout" data-selid="minicart-my-bag-checkout" data-location="view-bag-nav-global">
Checkout
</a>
</div>
</div>
<div class="absolute bg-white f0 dn-ns w-100 h-100" style="padding-top: 1px;" data-selid="minicart-overlay">
<div class="ar-minicart__content-wrapper br bl b--light-gray pt1 pt0-ns">
<div class="ml3 pt3 pb3 pb0-ns pt2-ns mr2 pr1 cf">
<span class="db dn-ns fl f1">My Bag</span>
</div>
</div>
<span class="ar-minicart__empty-message f1 ph3 absolute db tc w-100 border-box">
You haven't put any items in your bag.
</span>
</div>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="wishlist">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box ar-minilist-panel__content">
<div class="ar-header__scroll flex flex-wrap relative overflow-auto other">
</div>
<div class="wishlist-spinner"></div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="search">
<div class="ar-header__panel-content js-header__panel-content ar-header__scroll bg-white border-box overflow-auto relative">
<span class="js-header__panel-bg db bg-white fixed top-0 right-0 z-999"></span>
<div class="flex flex-wrap relative">
<div class="ar-header__search-results w-100">
<ul class="pl3 pl0-ns pb6-5 pb0-ns ar-suggestion-results__suggested js-suggestion-results__suggested">
<li class="js-header__panel-spacer ttu mb3">Suggested</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/effortless-pant-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="effortless-pant-9" data-ga-parent="Suggested" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/suiting-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="Suiting-9" data-ga-parent="Suggested" data-ga-cat="suiting">
Suiting
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/cargo-parachute-shop-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="cargo-parachute-shop-9" data-ga-parent="Suggested" data-ga-cat="cargo &amp; parachute">
Cargo &amp; Parachute
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sweatsuits-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sweatsuits-9" data-ga-parent="Suggested" data-ga-cat="sweatsuits">
Sweatsuits
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/activewear-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="activewear-9" data-ga-parent="Suggested" data-ga-cat="activewear">
Activewear
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sculpt-knit-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sculpt-knit-9" data-ga-parent="Suggested" data-ga-cat="sculpt knit">
Sculpt Knit
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/contour-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="contour-9" data-ga-parent="Suggested" data-ga-cat="contour">
Contour
</a>
</li>
</ul>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="account">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box flex">
<div class="ar-header__scroll flex flex-wrap pb5 relative overflow-auto w-100 content-start">
<div class="content-asset">
<ul class="level-2">
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/mylist" data-link-type="nav-global">My List</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/order-history" data-link-type="nav-global">Order History</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/order-tracking" data-link-type="nav-global">Order Tracking</a></li>
<li class="ar-mobile-nav__child-subheader fn1 mb2-ns pb1-ns"><span class="db mt4 ttu black-70">Manage</span></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/edit-profile" data-link-type="nav-global">Profile</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/preferences" data-link-type="nav-global">Preferences</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/addresses" data-link-type="nav-global">Address Book</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/payment" data-link-type="nav-global">Payment Cards</a></li>

</ul>
</div> 
<div class="w-100">
<ul>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="get-help-nav" target="_blank">Send Us Feedback</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns">
<a href="https://airtable.com/shrNqPX9R03BqVrma" data-link-type="research-community-nav" target="_blank">Aritzia Research Community</a>
</li>
</ul>
</div>
<div class="w-100">
<a href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Login-Logout" class="js-header__logout mt4 dib f1" data-link-type="nav-global">
Sign Out
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
</div>
<div class="js-template" data-show-view-modes="false">
<div role="region" aria-labelledby="ar-search-title__label" class="container_30 clearfix center mw-93 mw-100-ns">
<div class="grid_28 prefix_1 suffix_1">
<div class="cf f0 mt3 mt0-ns mb4 mb4-5-ns">
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategory-active_data.js) */
dw.ac.applyContext({category: "final-few"});
/* ]]> */
// -->
</script>
<div class="ar-category-breadcrumbs js-ar-category-breadcrumbs pt2 db relative z-2">
<div class="ar-category-breadcrumbs__category-title js-category-breadcrumbs__category-title js-subnav__category-title dn">
<span class="ar-category-breadcrumbs__category-title-text js-category-breadcrumbs__category-title-text f0"></span>
<span class="js-category-breadcrumbs__category-title-arrow rotate-90 ar-arrow-icon svgn2 dn"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</div>
<ul class="ar-category-breadcrumbs__list list mt0 mb0 pl0 flex flex-wrap" data-selid="pdp-breadcrumbs">
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-0 ">
<span class="ar-category-breadcrumbs__link dib mr1 mr2-ns"><a href="https://www.aritzia.com/en/sale" title="Sale">Sale&nbsp;</a><span class="ml1-ns">&mdash;</span></span>
</li>
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-1 ">
<span class="ar-category-breadcrumbs__link js-category-breadcrumbs__link--last dib">Final Few</span>
<span class="ar-search-refined__count js-search-refined__count relative">778</span>
</li>
</ul>
<div class="ar-category-breadcrumbs__page-title df">
<div class="ar-search-header cf">
<div class="ar-search-title " data-refinement-title-enabled="false">
<h1 id="ar-search-title__label" class="js-search-title f0" data-display-name="Final Few" data-cat-id="final-few">
Final Few
</h1>
</div>
</div>
</div>
<script type="application/ld+json">
                {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{"@type": "ListItem","position": 1,"item": {"@id": "https://www.aritzia.com/en/sale","name": "Sale"}},{"@type": "ListItem","position": 2,"item": {"@id": "https://www.aritzia.com/en/sale/final-few","name": "Final Few"}}]
                }
            </script>
</div>
</div>
<div class="ar-category-header ga-promotions">
<h2 class="ar-category-header__title non-seasonal-geo f2 f3-m f4-l w-80-ns">
Final Few — Filter by size, then grab your favourites before they’re gone. 50–70% off select styles.
</h2>
</div>
</div>
</div>
<div class="cf" role="complementary" aria-label="cat-banner-full">
<div id="cat-banner-full" class="ga-promotions">
</div>
</div>
<div role="complementary" aria-label="plp-visual-tab-swiper" class="plp-visual-swiper ga-promotions relative center ar-swiper-tab js-swiper-tab  ar-pill-swiper__plp--selected mb4 mb4-5-ns" data-promoname="visual-swiper">
<div class="ar-visual-swiper-tab__container relative ml0 mt3 mb2 flex-row-reverse justify-between">
<div class="ar-swiper-tab__tabs js-swiper-tab__tabs w-100 center-ns overflow-x-scroll overflow-x-hidden-ns">
<div class="ar-swiper w-100">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<ul class="ar-swiper-scroll">
<li class="ar-swiper-item">
<div class="f0 pv1 ph2 mr2 true-black pointer ar-swiper-tab__tab js-swiper-tab__tab bg-black-10 ar-swiper-tab__tab--active js-swiper-tab__tab--active" data-swiper="sale-spacer-3">
Categories
</div>
</li>
<li class="ar-swiper-item">
<div class="f0 pv1 ph2 mr2 true-black pointer ar-swiper-tab__tab js-swiper-tab__tab " data-swiper="percentage">
Discount
</div>
</li>
</ul>
</div>
</div>
</div>
</iselse>
<div class="ar-visual-swiper  js-visual-swiper ar-tabbed-swiper js-swiper-tab__swiper mb3-ns " data-swiper="sale-spacer-3">
<div class="ar-swiper js-swiper">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<div class="ar-swiper-scroll js-swiper-scroll ar-swiper-lazyload pb0 pb2-ns">
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  ar-swiper-item--first-visible" data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=900 900w" alt="Sale" title="Sale" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">All Sale</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/final-few" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="final-few">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-08?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-08?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-08?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-08?wid=900 900w" alt="Final Few" title="Final Few" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1">Final Few</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-dresses" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-dresses">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_01_a08_114348_15104_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_01_a08_114348_15104_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_01_a08_114348_15104_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_01_a08_114348_15104_off_a?wid=900 900w" alt="Dresses" title="Dresses" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Dresses</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-coats-jackets" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-coats-jackets">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a04_103669_27381_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a04_103669_27381_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a04_103669_27381_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a04_103669_27381_off_a?wid=900 900w" alt="Jackets &amp; Coats" title="Jackets &amp; Coats" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Jackets & Coats</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-jumpsuits-rompers" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-jumpsuits-rompers">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a27_112170_31696_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a27_112170_31696_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a27_112170_31696_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a27_112170_31696_off_a?wid=900 900w" alt="Jumpsuits &amp; Rompers" title="Jumpsuits &amp; Rompers" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Jumpsuits & Rompers</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-leggings-bike-shorts" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-leggings-bike-shorts">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f22_19_a06_100124_19049_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f22_19_a06_100124_19049_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f22_19_a06_100124_19049_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f22_19_a06_100124_19049_off_a?wid=900 900w" alt="Leggings &amp; Bike Shorts" title="Leggings &amp; Bike Shorts" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Leggings & Bike Shorts</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-pants" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-pants">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a06_81518_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a06_81518_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a06_81518_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a06_81518_1274_off_a?wid=900 900w" alt="Pants" title="Pants" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Pants</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-blouses" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-blouses">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_02_a02_99135_1275_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_02_a02_99135_1275_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_02_a02_99135_1275_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_02_a02_99135_1275_off_a?wid=900 900w" alt="Shirts &amp; Blouses" title="Shirts &amp; Blouses" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Shirts & Blouses</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-accessories" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-accessories">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_00_n07_79904_18100_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_00_n07_79904_18100_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_00_n07_79904_18100_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_00_n07_79904_18100_off_a?wid=900 900w" alt="Shoes &amp; Accessories" title="Shoes &amp; Accessories" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Shoes & Accessories</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-shorts" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-shorts">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_03_a26_79997_19451_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_03_a26_79997_19451_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_03_a26_79997_19451_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_03_a26_79997_19451_off_a?wid=900 900w" alt="Shorts" title="Shorts" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Shorts</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-skirts" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-skirts">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a07_110817_30654_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_04_a07_110817_30654_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a07_110817_30654_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_04_a07_110817_30654_off_a?wid=900 900w" alt="Skirts" title="Skirts" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Skirts</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-sweaters" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-sweaters">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_103178_1309_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_103178_1309_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_103178_1309_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_103178_1309_off_a?wid=900 900w" alt="Sweaters" title="Sweaters" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Sweaters</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/swim-sale" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="swim-sale">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s23_01_a24_109506_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s23_01_a24_109506_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s23_01_a24_109506_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s23_01_a24_109506_1274_off_a?wid=900 900w" alt="Swim" title="Swim" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">Swim</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/sale/sale-tshirts" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-tshirts">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_00_a01_76783_19629_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_00_a01_76783_19629_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_00_a01_76783_19629_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_00_a01_76783_19629_off_a?wid=900 900w" alt="T-Shirts &amp; Tops" title="T-Shirts &amp; Tops" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">T-Shirts & Tops</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="ar-visual-swiper  js-visual-swiper ar-tabbed-swiper js-swiper-tab__swiper mb3-ns dn" data-swiper="percentage">
<div class="ar-swiper js-swiper">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<div class="ar-swiper-scroll js-swiper-scroll ar-swiper-lazyload pb0 pb2-ns">
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  ar-swiper-item--first-visible" data-ga-creative="visual-swiper-tab-discount">
<a href="https://www.aritzia.com/en/sale" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f23_07_a03_102730_18891_on_d?wid=900 900w" alt="Sale" title="Sale" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">All Sale</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-discount">
<a href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=50-60" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-50percent">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-05?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-05?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-05?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-05?wid=900 900w" alt="50&ndash;60% Off" title="50&ndash;60% Off" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">50–60% Off</span>
</span>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-discount">
<a href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=60-70" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sale-60percent">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-04?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-04?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-04?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/ss23-sale-visual-nav-ab-test-04?wid=900 900w" alt="60&ndash;70% Off" title="60&ndash;70% Off" sizes="(min-width: 768px) 15vw, 5vw" />
<div class="js-visual-swiper__overlay dn ba bw1 b--black w-100 h-100 absolute top-0 left-0 outline-1"></div>
</span>
<span class="f0 db pa1 mt1">
<span class="db ws-normal pt1 ">60–70% Off</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div id="main" role="main" class="container_30 clearfix product-search-result--full-hits">
<div id="ar-refinement-panel" class="ar-panel js-panel ar-refinement-panel js-refinement-panel fixed absolute--fill df justify-end z-9999 w-100">
<div class="ar-panel__content js-panel__content ar-refinement-panel__content bg-white border-box df flex-column relative w-100">
<div class="ar-refinement-panel__header flex flex-column justify-center flex-shrink-0 ph3 ph4-ns bb b--black-10">
<div class="ph3 pv3-ns pt3 pb2">
<div class="flex items-center mb0">
<span class="ar-refinement-panel__header-title flex-grow-1">
No Filters Selected
</span>
<div class="ar-refinement-panel__header-actions">
<a href role="button" class="js-panel__content-close underline" data-selid="filters-done">
Done
</a>
</div>
</div>
<div class="ar-search-refined js-search-refined center df-ns justify-between">
<div class="ar-search-refined__container w-60-l df">
<div class="flex flex-wrap items-center">
<div class="items-baseline relative ar-swiper--fade ar-search-header__promoted-filters ar-search-header__promoted-filters--none">
<ul class="flex ar-search-header__promoted-filters-list mt1 mt0-ns overflow-auto">
<li class="mr3 nowrap js-search-header__promoted-filter dn-ns dib" data-filter-id="sort" data-selected-count="0" data-filter-display>
<button class="ar-search-header__promoted-filter-link ar-search-header__promoted-filter-link--underline bg-transparent bn black pa0 tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="sort - expand">
Sort
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter ar-search-header__promoted-filter--active" data-filter-id="size" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="size - expand">
Size
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="refinementcolor" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="refinementColor - expand">
Colour
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="subdepartment" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="subDepartment - expand">
Product Type
</button>
</li>
<li class="mr1 nowrap">
<button class="ar-search-header__promoted-filter-link js-search-header__all-filters js-panel-trigger js-open-panel bg-transparent bn ba-ns black pa0 ph2-ns tl" data-selid="plp-filter" data-copy="All Filters" tabindex="0" data-ec="plp" data-ea="refine" data-el="open">
<span class="underline no-underline-ns">
All Filters
</span>
</button>
</li>
</ul>
</div>
</div>
</div>

<div class="js-sortby-options-container ar-sortby-options-container dib-ns dn" data-accordion-id="sort">
<button class="button-clean ar-sortby-options__header flex pa0 items-center pointer" data-ec="plp" data-ea="filter" data-el="sort - collapse">
<span class="pr1">
Sort by <span class="underline">Recommended</span>
</span>
<span class="js-sortby__arrow rotate-90 ar-arrow-icon svgn2 dn dib-ns">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</button>
<div class="js-sortby-options-content ar-sortby-options-content pv2 dn">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=100%25%20Sale%20ATS" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-best-match" data-refinement-id="sr-best-match">
<span class="ar-refinement-panel__option-title db ar-sortby-option ar-sortby-option__active">
Recommended
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Price-Low-To-High" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-low-to-high" data-refinement-id="sr-price-low-to-high">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: Low to High
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Price-High-To-Low" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-high-to-low" data-refinement-id="sr-price-high-to-low">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: High to Low
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Sort%20by%20Newest%20-07%2F07%2F22" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="Sort By New" data-refinement-id="Sort By New">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Newest
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Sort%20by%20Top%20Rated" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="top-rated" data-refinement-id="top-rated">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Top Rated
</span>
</a>
</div>
</div>

</div>
</div>
</div>
<div class="ar-refinement-panel__scroll js-sheet__scroll flex-grow-1 overflow-auto">
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group db dn-ns ph3 bb b--black-10" data-accordion-id="sort">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="sort - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Sort
</span>
<span class="f0 mr2">
Recommended
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap flex-column ph4-ns ph3 pb2">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=100%25%20Sale%20ATS" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-best-match" data-refinement-id="sr-best-match">
<span class="ar-refinement-radio ar-refinement-radio--checked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Recommended
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Price-Low-To-High" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-price-low-to-high" data-refinement-id="sr-price-low-to-high">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Price: Low to High
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Price-High-To-Low" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-price-high-to-low" data-refinement-id="sr-price-high-to-low">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Price: High to Low
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Sort%20by%20Newest%20-07%2F07%2F22" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="Sort By New" data-refinement-id="Sort By New">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Newest
</span>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;srule=Sort%20by%20Top%20Rated" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="top-rated" data-refinement-id="top-rated">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Top Rated
</span>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="percentagebucket">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="% off - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
% Off
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=percentageBucket&amp;prefv2=40-50" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="percentageBucket" data-refinement-id="40-50" title="40-50">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
40-50
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=percentageBucket&amp;prefv2=50-60" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="percentageBucket" data-refinement-id="50-60" title="50-60">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
50-60
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=percentageBucket&amp;prefv2=60-70" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="percentageBucket" data-refinement-id="60-70" title="60-70">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
60-70
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="size">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="size - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Size
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-row">
<span class="ar-refinement-panel__option-title js-refinement-panel__option-title dn mb2">
Clothing
</span>
<div class="w-100 flex flex-wrap gp2 mb3-5">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=2XS" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="2xs" title="2XS" data-ga-attribute>
2XS
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=XS" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="xs" title="XS" data-ga-attribute>
XS
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=S" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="s" title="S" data-ga-attribute>
S
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=M" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="m" title="M" data-ga-attribute>
M
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=L" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="l" title="L" data-ga-attribute>
L
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=XL" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="xl" title="XL" data-ga-attribute>
XL
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=2XL" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="2xl" title="2XL" data-ga-attribute>
2XL
</a>
</div>
<div class="w-100 flex flex-wrap gp2 mb3-5">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=XS%2FS" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="xs/s" title="XS/S" data-ga-attribute>
XS/S
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=M%2FL" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="m/l" title="M/L" data-ga-attribute>
M/L
</a>
</div>
<div class="w-100 flex flex-wrap gp2 mb3-5">
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=00" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="00" title="00" data-ga-attribute>
00
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=0" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="0" title="0" data-ga-attribute>
0
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=2" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="2" title="2" data-ga-attribute>
2
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=4" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="4" title="4" data-ga-attribute>
4
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=6" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="6" title="6" data-ga-attribute>
6
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=8" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="8" title="8" data-ga-attribute>
8
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=10" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="10" title="10" data-ga-attribute>
10
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=12" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="12" title="12" data-ga-attribute>
12
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=14" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="14" title="14" data-ga-attribute>
14
</a>
<a href="https://www.aritzia.com/en/sale/final-few?prefn1=isSale&amp;prefv1=True&amp;prefn2=size&amp;prefv2=16" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="16" title="16" data-ga-attribute>
16
</a>