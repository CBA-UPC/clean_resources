"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[6165],{9969:(t,e,r)=>{r.d(e,{Z:()=>I});var a=r(35272),i=r(46423),n=r(54067),s=r(27009),o=r(26152),l=r(32420),p=r(23653),c=r(34853);const d=["id","src","ops","type","width","height","mediaServerUrl"];function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},u.apply(this,arguments)}var y=r(71130),g=r(32034),h=r(60067),m=r(75628),T=r(74300);const b=(0,g.P1)(((t,{type:e,id:r})=>e===p.bV.LIVE?(0,T.oE)(t,{stationId:r}):""),(,(),I=(0,y.connect)((0,g.zB)({appMounted:h.ih,mediaServerUrl:m.C3,siteUrl:m.$2,src:b}))((function(t){let e,{id:r,src:y,ops:g=[],type:h,width:m,height:T,mediaServerUrl:b}=t,I=t,d);return h===p.bV.LIVE&&y===l.W$&&i.ZP.warn(i.Ke.REACT,"Cannot generate live station image without a src prop"),e=null!=y&&y.length?y:h&&r?(0,s.pO)(b,{id:r,resourceType:h}):l.W$,(0,c.tZ)(n.ZP,u({ops:[m?(0,o.Tj)(m,T||m):a.Z,...g.filter(()],src:e},I))}))},48199:(t,e,r)=>{r.d(e,{Z:()=>N});var a=r(61310),i=r(66480),n=r(46423),s=r(74634),o=r(46255),l=r(93202),p=r(34737);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},c.apply(this,arguments)}const d=(0,r(38241).F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),u=(0,o.Z)("button",{target:"ebe59710"})((({isBuffering:t,isPlaying:e})=>c({"&:focus":{outline:"none"},"&:hover":{borderColor:(0,p.Z)(l.Z.gray.light,.25)},backgroundColor:l.Z.transparent.primary,border:`1px solid ${l.Z.gray.light}`,borderRadius:"100%",cursor:"pointer",padding:0,position:"relative",transition:"border-color 0.1s ease-in-out",transitionTimingFunction:"cubic-bezier(0.7, 0, 0.3, 1)",svg:{left:"64%"}},t?{"&::before":{animationDuration:"0.75s",animationIterationCount:"infinite",animationName:d,animationTimingFunction:"linear",borderRadius:"50%",boxShadow:`0px 0px 0px ${l.Z.white.primary}, 0px 1px 0px ${(0,p.Z)(l.Z.white.primary,.9)}`,content:"''",height:"calc(100% - 2px)",left:"1px",position:"absolute",top:"1px",width:"calc(100% - 2px)"},borderColor:(0,p.Z)(l.Z.gray.light,.25)}:{},t||e?{}:{svg:{left:"74%"}})),"");var y=r(85331);const g=(0,o.Z)(y.Z,{target:"e1md4my70"})({name:"1u7b33j",styles:"bottom:0;display:block;left:0%;margin:0;padding:0;position:absolute;right:56%;top:0;svg{height:100%;position:absolute;width:100%;}"});var h=r(80942),m=r(90758),T=r(34853);function b({buttonState:t="PAUSED",className:e="",isPausable:r=!1,onClick:a,svgFillColor:i=h.ZP.colors.white.primary}){const n=(0,m.Z)(),s="LOADING"===t||"BUFFERING"===t,o="PLAYING"===t,l=o||s?r?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="536 908 100 100"><style></style><path d="M548.6 910.9h18.2v94h-18.2zM605.2 910.9h18.2v94h-18.2z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="396 908 100 100"><style></style><path d="M489.5 1004.9h-87.1c-1.9 0-3.4-1.5-3.4-3.4v-87.1c0-1.9 1.5-3.4 3.4-3.4h87.1c1.9 0 3.4 1.5 3.4 3.4v87.1c0 1.9-1.5 3.4-3.4 3.4z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="256 908 100 100"><style></style><path d="M272.6 912.3l69.9 44c1.8 1.1 1.8 3.7 0 4.8l-69.9 44c-1.9 1.2-4.3-.2-4.3-2.4v-87.9c0-2.3 2.5-3.7 4.3-2.5z"/></svg>',p=n(r?"Pause":"Stop");let c="paused";return s&&(c="buffering"),o&&(c="playing"),(0,T.tZ)(u,{className:e,"data-test":"play-button","data-test-state":c,isBuffering:s,isPlaying:o,onClick:a,type:"button",children:(0,T.tZ)(g,{"aria-label":o||s?p:n("Play"),cleanup:!0,fill:i,svg:l})})}var I=r(78743),P=r(30465),A=r(65580),f=r(78464),S=r(96832),v=r(45661),E=r(23653),Z=r(26700),k=r(88077),C=r(22563),_=r(48156);function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},L.apply(this,arguments)}const O=P.Z.getInstance();class w extends S.Component{constructor(...t){super(...t),this.onClick=()=>{const{adsPlayer:t,adsPlayerState:e,allAccessPreview:r,artistId:o,artistName:l,name:p,curated:c,currentAlbumId:d,currentAlbumTitle:u,deferPlay:y,entitlements:g,handleOnClick:h,isMuted:m,isTrialEligible:T,myMusicType:b,playedFrom:I,playedFromTrigger:P,playingState:S,playlistName:k,playlistUserId:w,position:N=0,profileId:R,seedId:U,stationId:D,stationType:x,reportingStationType:M,subscriptionType:F,toggleMute:B,trackId:Y,trackingContext:j,station:{artistName:K,callLetters:G,name:z,ownerId:V,playlistId:$,playlistType:W,reportingKey:H,title:q,fallback_error_code:Q,fallback_error_description:J}={},trackName:X,trackUuid:tt}=this.props;if((0,f.checkForRegGate)(x,D))return!1;let et=!1;if(h&&!h())return!1;const rt=this.getButtonState();var at,it,nt,st;rt!==Z.PLAYER_STATE.IDLE&&rt!==Z.PLAYER_STATE.PAUSED||(O.set("streamInitTime",Date.now()),i.Z.track(i.z.Play,(0,s.Z)(i.z.Play,{trackId:Y,trackName:X,artistId:o,artistName:l,name:null!=(at=null!=(it=null!=(nt=null!=(st=null!=p?p:G)?st:z)?nt:q)?it:l)?at:K,id:U&&U!==Y?U:D,profileId:R,playedFrom:I,sessionId:(0,_.Z)(),type:null!=M?M:x,collection:{reportingKey:H,curated:c,playlistId:$,playlistType:W,ownerId:V},fallback_error_code:Q,fallback_error_description:J})),A.Z.track(i.z.Play,{type:null!=M?M:x,typeId:null!=D?D:"",id:Y,name:X}),m&&S!==Z.PLAYER_STATE.PLAYING&&B());const ot=this.isMatchingCurrentlyPlaying(),lt=!ot||ot&&S!==Z.PLAYER_STATE.PLAYING;if(r&&lt&&"PREMIUM"!==F){const t=null!=M?M:x,e=null!=X?X:"",r={artistId:o,artistName:l,curated:c,currentAlbumId:d,currentAlbumTitle:u,isTrialEligible:T,playedFromTrigger:String(P),playlistId:$,playlistName:k,playlistUserId:w,stationType:t,subscriptionType:F,trackId:Y,trackName:e};A.Z.track(i.z.AAPreview,r)}if(g[C.Pq]&&E.PW.includes(x)&&lt&&l&&X){const t=null!=M?M:x,e={artistId:o,artistName:l,curated:c,currentAlbumId:d,currentAlbumTitle:u,isTrialEligible:T,playedFromTrigger:String(P),playlistId:$,playlistName:k,playlistUserId:w,stationType:t,subscriptionType:F,trackId:Y,trackName:X};et=!0,A.Z.track(i.z.UpsellOpen,L({},e,{type:"SHOW_UPSELL_SONG2START"})),null!=i.Z&&i.Z.trackUpsellOpen&&i.Z.trackUpsellOpen({destination:a.PB,promotionSubscriptionTier:e.subscriptionType,upsellFrom:a.HA,upsellType:a.P,vendor:"Braze"})}if(D&&!ot){const r=(0,v.EC)({playingState:S,deferAfterCardChange:!t&&y,mediaId:Y,myMusicType:b,playedFrom:I,preventNativeUpsell:et,trackUuid:tt,stationId:D,stationType:x,position:N});return t?(null!=e&&e.adIsPresent&&t.skip(),this.loadAd().then(t.play).catch((t=>{n.ZP.error([n.Ke.PLAYBACK,n.Ke.ADS],`error loading preroll: ${t.message}`,t)})).then(()):r()}if(t){if(null!=e&&e.adIsPresent)return t.pause(e.adIsPlaying);if(S===Z.PLAYER_STATE.IDLE)return this.loadAd().then(t.play).catch((t=>{n.ZP.error([n.Ke.PLAYBACK,n.Ke.ADS],`error loading preroll: ${t.message}`,t)})).then(()}return(0,v.Dj)(I,j)}}loadAd(){const{adsPlayer:t,playedFrom:e,myMusicType:r,stationType:a,stationId:i,trackId:n}=this.props;if(!t)return Promise.resolve(null);const s=(0,k.EG)(a);return t.load(s,(0,k.QW)(s,{playedFrom:Number(e),stationType:a,stationId:i,myMusicType:r,trackId:n}))}getButtonState(){const{adsPlayerState:t,playingState:e,stationId:r}=this.props;return!r||this.isMatchingCurrentlyPlaying()?null!=t&&t.adIsPresent?t.adIsPlaying?Z.PLAYER_STATE.LOADING:Z.PLAYER_STATE.PAUSED:e:Z.PLAYER_STATE.PAUSED}isPausablesMatchingCurrentlyPlaying(){const{currentlyPlaying:t,trackId:e,artistId:r,seedId:a,stationType:i}=this.props;return!!t&&(this.hasRightEntitlements()&&e?t.stationTrackId?t.stationTrackId===e:t.mediaId&&t.mediaId===e:[E.bV.ARTIST,E.bV.TRACK].includes(i)?`${r||a}`==`${t.seedId}`:`${t.seedId}`==`${a}`)}hasRightEntitlements(){const{canPlayAlbum:t,canPlayMyMusic:e,canPlayPlaylist:r,canPlayPlaylistRadio:a,canStartArtistRadio:i,canStartSongRadio:n,stationType:s}=this.props;return{[E.bV.ALBUM]:t,[E.bV.ARTIST]:i,[E.bV.COLLECTION]:r,[E.bV.MY_MUSIC]:e,[E.bV.PLAYLIST_RADIO]:a,[E.bV.PODCAST]:!0,[E.bV.TRACK]:n}[s]}render(){const{className:t,dataTest:e,ButtonComponent:r=b}=this.props;return(0,T.tZ)(r,L({buttonState:this.getButtonState(),className:t,dataTest:e,isPausable:this.isPausable(),onClick:this.onClick},this.props))}}w.defaultProps={entitlements:{},link:{href:"",text:""},playedFrom:I.Z.PLAYER_PLAY,useLink:!1};const N=w},87779:(t,e,r)=>{r.d(e,{Z:);var a=r(17),i=r(11692),n=r(30465),s=r(96832),o=r(71130),l=r(32034),p=r(45919),c=r(34853);onst u=n.Z.getInstance();function y(){const t=u.get("track"),e=u.get("station"),r=u.get("tracking"),i=t&&t.get("id"),n=t&&t.get("uniqueId"),s=r&&r.playedFrom,o=e&&e.get("seedType");return{mediaId:i,playedFrom:s,seedId:e&&e.get("seedId"),stationTrackId:(0,a.Z)(e,"currentTrackId")||(0,a.Z)(e,["attrs","track","id"]),stationType:o,uniqueId:n}}function g(t){return{currentlyPlaying:y(),playingState:t?"BUFFERING":u.getPlayingState()}}const h=function(t){return(0,o.connect)((0,l.zB)({isWarmingUp:p._p}))(class extends s.Component{constructor(...t){super(...t),this.state=g(this.props.isWarmingUp),this.updateState=()=>{this.setState(g(this.props.isWarmingUp))}}componentDidMount(){this.updateState(),i.Z.on(i.E.TRACK_CHANGED,this.updateState,this),i.Z.on(i.E.PLAY_STATE_CHANGED,this.updateState,this)}componentWillUnmount(){i.Z.off(i.E.PLAY_STATE_CHANGED,this.updateState,this),i.Z.off(i.E.TRACK_CHANGED,this.updateState,this)}render)}}}]);
//# sourceMappingURL=6165.www.js.map