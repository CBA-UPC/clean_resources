"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[293],{29630:(t,e,r)=>{r.d(e,{Z:()=>n});const n=(0,r(46255).Z)("span",{target:"e1y287ls0"})({name:"eyxn1w",styles:"font-size:3rem;padding:0 0.75rem"})},68630:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(29630),o=r(34853);const i=function(){return(0,o.tZ)(n.Z,{"data-test":"bullet",children:String.fromCharCode(8226)})}},50611:(t,e,r)=>{r.d(e,{Z:()=>h});var n=r(21122),o=r(51838),i=r.n(o),a=r(74763),l=r(90758),s=r(44812),c=r(96832),d=r(34853);const h=function({classes:t=[],className:e,isHtml:r,itemProp:o,maxChar:h,onClick:g=n.Z,text:p}){const u=(0,l.Z)(),Z=i()(t,e),[f,m]=(0,c.useState)(!1);if(!p)return(0,d.tZ)("div",{});const{textLen:y,truncatedText:C}=r?(0,s.NJ)(p,h):{textLen:p.length,truncatedText:(0,s.$G)(p,h)};return f||y<h?(0,d.tZ)("div",{className:Z,dangerouslySetInnerHTML:{__html:p},itemProp:o}):(0,d.BX)("div",{className:Z,itemProp:o,children:[(0,d.tZ)("div",{dangerouslySetInnerHTML:{__html:C}})," ",(0,d.BX)(a.Z,{onClick:children:[" ",u("Read more")]})]})}},9735:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(80942),o=r(34853);const i=["color","height","type"];function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}const l=function(t){let{color:e=n.ZP.colors.black.dark,height:r=20,type:l="default"}=t,s=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,i);return"filled"===l?(0,o.tZ)("svg",a({fill:"none",height:r,viewBox:"0 0 20 20",width:"20"},s,{children:(0,o.tZ)("path",{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.29 14.29L3.7 10.7C3.31 10.31 3.31 9.68 3.7 9.29C4.09 8.9 4.72 8.9 5.11 9.29L8 12.17L14.88 5.29C15.27 4.9 15.9 4.9 16.29 5.29C16.68 5.68 16.68 6.31 16.29 6.7L8.7 14.29C8.32 14.68 7.68 14.68 7.29 14.29Z",fill:e})})):"outlined"===l?(0,o.tZ)("svg",a({fill:"none",height:r,viewBox:"0 0 20 20",width:"20"},s,{children:(0,o.tZ)("path",{d:"M15.2975 6.29251C14.9072 5.89941 14.2717 5.89829 13.88 6.29L8 12.17L5.11549 9.29352C4.7257 8.90482 4.09474 8.90526 3.70549 9.29451C3.31586 9.68414 3.31586 10.3159 3.70549 10.7055L7.54545 14.5455C7.79649 14.7965 8.20351 14.7965 8.45455 14.5455L15.295 7.705C15.6848 7.31524 15.6859 6.68365 15.2975 6.29251ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z",fill:e})})):(0,o.tZ)("svg",a({fill:"none",height:r||13,viewBox:"0 0 18 13",width:"18"},s,{children:(0,o.tZ)("path",{d:"M5.99989 10.17L2.52989 6.70001C2.13989 6.31001 1.50989 6.31001 1.11989 6.70001C0.729893 7.09001 0.729893 7.72001 1.11989 8.11001L5.29989 12.29C5.68989 12.68 6.31989 12.68 6.70989 12.29L17.2899 1.71001C17.6799 1.32001 17.6799 0.690007 17.2899 0.300007C16.8999 -0.0899927 16.2699 -0.0899927 15.8799 0.300007L5.99989 10.17Z",fill:e})}))}},30063:(t,e,r)=>{function n(t,e){return{1:e("January"),2:e("February"),3:e("March"),4:e("April"),5:e("May"),6:e("June"),7:e("July"),8:e("August"),9:e("September"),10:e("October"),11:e("November"),12:e("December")}[t]}function o(t,e){const r=new Date(t);return`${n(r.getMonth()+1,e)} ${r.getDate()}, ${r.getFullYear()}`}function i(t,e){return{1:e("Jan"),2:e("Feb"),3:e("Mar"),4:e("Apr"),5:e("May"),6:e("Jun"),7:e("Jul"),8:e("Aug"),9:e("Sep"),10:e("Oct"),11:e("Nov"),12:e("Dec")}[t]}function a(t){const e=Math.floor(t/60),r=t%60;return`${e>0?`${e} min${e>1?"s":""}, `:""} ${r>0?`${r} sec${r>1?"s":""}`:""}`}function l(t){const e=Math.floor(t/60);return e>0?`${e} min${e>1?"s":""}`:`${t} secs`}r.d(e,{Bw:()=>i,UM:()=>a,hD:()=>l,jw:()=>n,p6:()=>o})},7638:(t,e,r)=>{r.r(e),r.d(e,{default:);var n=r(17),o=r(46255),i=r(89401),a=r(77906),l=r(95928);const s=(0,o.Z)("div",{target:"e1v33edj0"})((({theme:t})=>({display:"flex",flexDirection:"row",fontWeight:t.fonts.weight.bold,marginBottom:"1rem",marginTop:"2.8rem",width:"100%",justifyContent:"start",paddingLeft:"5rem",[(0,l.Z)(a.Z.max.width[599])]:{paddingLeft:"0",justifyContent:"center"},svg:{fill:t.colors.gray[600]},[i.Z.toString()]:{alignItems:"center",color:t.colors.gray[600]}})),"");var c=r(66480),d=r(55745),h=r(61135),g=r(68630),p=r(78171);const u=(0,o.Z)("div",{target:"emliuun0"})((({theme:t})=>({alignItems:"flex-start",backgroundColor:t.colors.white.primary,borderRadius:"0.3rem",boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.15)",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"1.3rem",overflow:"hidden",padding:"1.5rem",position:"relative",svg:{cursor:"pointer"}})),"");var Z=r(9735);function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}const m=(0,o.Z)("div",{target:"ev53muh0"})((({isExpanded:t=!1,alwaysOpen:e=!1})=>f({marginLeft:"5rem",overflow:"hidden",transition:"max-height 0.8s",width:"calc(100% - 3rem - 3rem - 6rem)"},e?{}:{maxHeight:t?"100vh":0})),"");var y=r(50611);const C=(0,o.Z)(y.Z,{target:"e179s98p0"})((({theme:t})=>({color:t.colors.gray[500],fontSize:t.fonts.size[14],fontWeight:t.fonts.weight.regular,letterSpacing:0,lineHeight:t.fonts.lineHeight[20],marginTop:"1rem","a, button":{color:t.colors.gray[600],fontWeight:t.fonts.weight.bold}})),"");var v=r(58059);const w=(0,o.Z)(i.Z,{target:"e2syrdj0"})((({theme:t})=>({svg:{height:"1.1rem",width:"3rem",path:{fill:t.colors.gray[400]}},"&:hover":{"svg > path":{fill:t.colors.gray[600]}}})),"");var b=r(6515);const x=(0,o.Z)("div",{target:"e12f98q00"})({name:"1927myz",styles:"align-items:center;display:flex;flex-wrap:nowrap;justify-content:space-between;width:100%"});var O=r(29630);const S=(0,o.Z)("div",{target:"e1w784o30"})((({hasExpandButton:t=!0,theme:e})=>({display:"flex",flexDirection:"column",width:`calc(100% - 3rem - ${t?"3rem":"0rem"} - ${t?"4rem":"2rem"})`,"span:nth-of-type(2)":{display:"flex"},[O.Z.toString()]:{color:e.colors.gray[400],fontSize:e.fonts.size[12],padding:"0 0.3rem"},[p.Z.toString()]:{"&:first-of-type":{color:e.colors.gray[400]},"&:nth-of-type(2)":{color:e.colors.green[600],display:"flex"}}})),""),L=(0,o.Z)(i.Z,{target:"e13vi74n0"})((({isPlayed:t=!1,theme:e})=>({color:t?e.colors.green[600]:e.colors.gray[600],[h.Z.toString()]:{color:t?e.colors.green[600]:e.colors.gray[600]},"svg > path":{fill:t?e.colors.green[600]:e.colors.gray[500]}})),"");var P=r(99883),k=r(74763),B=r(33876),D=r(9821);const _=(0,o.Z)("div",{target:"e1rsh1tc0"})((({theme:t})=>({button:{backgroundColor:t.colors.gray[600],borderColor:t.colors.gray[600],height:"3rem",position:"relative",width:"3rem",zIndex:1},marginTop:"1rem"})),"");var j=r(78743),H=r(11215),M=r(34853);const I=["height","width"];function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},A.apply(this,arguments)}const T=function(t){let{height:e=24,width:r=24}=t,n=t,I);return(0,M.BX)("svg",A({},n,{fill:"none",height:e,viewBox:"0 0 18 18",width:r,xmlns:"http://www.w3.org/2000/svg",children:[(0,M.tZ)("path",{clipRule:"evenodd",d:"M8.38636 8.25C8.38636 7.83579 8.72215 7.5 9.13636 7.5H15.0002C15.4144 7.5 15.7502 7.83579 15.7502 8.25C15.7502 8.66421 15.4144 9 15.0002 9H9.13636C8.72215 9 8.38636 8.66421 8.38636 8.25ZM8.38636 11.25C8.38636 10.8358 8.72215 10.5 9.13636 10.5H15.0002C15.4144 10.5 15.7502 10.8358 15.7502 11.25C15.7502 11.6642 15.4144 12 15.0002 12H9.13636C8.72215 12 8.38636 11.6642 8.38636 11.25ZM5.30127 13.5C4.88706 13.5 4.55127 13.8358 4.55127 14.25C4.55127 14.6642 4.88706 15 5.30127 15H14.9997C15.414 15 15.7497 14.6642 15.7497 14.25C15.7497 13.8358 15.414 13.5 14.9997 13.5H5.30127Z",fill:"#27292D",fillRule:"evenodd"}),(0,M.tZ)("path",{clipRule:"evenodd",d:"M9.84288 3.34375L9.49461 4.99097H6.95644L5.54653 11.6252H3.74414L5.15405 4.99097H2.6167L2.96497 3.34375H9.84288Z",fill:"#27292D",fillRule:"evenodd"})]}))};onst E=(0,o.Z)("div",{target:"egwgilq0"})((({progress:t=0,theme:e})=>$({backgroundColor:e.colors.transparent.primary,borderBottomLeftRadius:"0.6rem",borderBottomRightRadius:"0.6rem",bottom:0,boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.15)",height:"0.3rem",left:0,position:"absolute",width:"100%"},"number"==typeof t&&t>0?{backgroundColor:e.colors.gray[300],"&:after":{backgroundColor:e.colors.red.primary,content:'""',height:"100%",left:0,position:"absolute",top:0,width:100*t+"%"}}:{})),"");var N=r(19015),X=r(97216);const R=(0,o.Z)("h3",{target:"e10xt71u0"})((({currentlyPlaying:t,theme:e})=>({color:t?e.colors.red[600]:"auto",fontSize:e.fonts.size[16],fontWeight:e.fonts.weight.regular,letterSpacing:0,lineHeight:e.fonts.lineHeight[26],textAlign:"left"})),"");var z=r(46699),J=r(68794),F=r(45755),W=r(1851),Y=r(90758),q=r(29929),G=r(58554),U=r(30063),V=r(73634),K=r(24586),Q=r(23653),tt=r(78356),et=r(71130),rt=r(96832),nt=r(33567),ot={name:"odggjm",styles:"width:4.5rem"},it={name:"1gg71t8",styles:"padding-left:0.8rem"},at={name:"rat8lq",styles:"padding-left:0.4rem"};const lt=function({alwaysOpen:t=!1,completed:e=!1,currentlyPlaying:r,description:o,episodeDuration:a,id:l,isNewEpisode:f,isInitiallyExpanded:y=!1,pageName:O,playingState:I,playNext:A,podcastId:$,podcastSlug:lt,position:st,secondsPlayed:ct,showPodcastTranscriptions:dt,startDate:ht,title:gt,onClick:pt}){const ut=(0,et.useDispatch)(),Zt=(0,F.Z)(),ft=(0,J.Z)(),mt=(0,W.Z)(),yt=(0,Y.Z)(),[Ct,vt]=(0,rt.useState)(t||y),wt=(0,G.G_)($,lt,l,gt),bt=t?1/0:435,xt=yt(e?"Played":"Mark as Played"),Ot=(0,n.Z)(r,"stationTrackId")===l;let St=Zt.position;Ot||(St=e?a:Number(ct));const Lt=null==o?void 0:o.replace(/<a href?/g,'<a target="_blank" href');return(0,M.BX)(u,{"data-test":"podcast-episode-card",children:[(0,M.BX)(x,{children:[(0,M.tZ)(_,{children:(0,M.tZ)(D.Z,{currentlyPlaying:r,deferPlay:!1,playedFrom:j.Z.PROF_EPISODE_PLAY,playingState:I,position:st,seedId:l,stationId:$,stationType:Q.bV.PODCAST,trackId:l,trackName:gt},l)}),(0,M.BX)(S,{"data-test":"podcast-episode-name",hasExpandButton:!t,children:[(0,M.tZ)(d.Z,{children:(0,M.tZ)(k.Z,{to:wt,children:(0,M.tZ)(R,{currentlyPlaying:Ot,children:(0,M.tZ)(z.Z,{lines:Ct?2:1,children:gt})})})}),(0,M.BX)("span",{children:[(0,M.BX)(p.Z,{children:[f&&(0,M.tZ)(B.Z,{css:ot,hideCount:!0,newEpisodeCount:1}),(0,U.p6)(ht,yt)," ",(0,M.BX)(X.Z,{shouldShow:!!a,children:[(0,M.tZ)(g.Z,{})," ",(0,U.hD)(a)]})]}),(0,M.tZ)(X.Z,{shouldShow:e,children:(0,M.BX)(p.Z,{children:[(0,M.tZ)(g.Z,{})," ",yt("Played")]})})]})]}),(0,M.tZ)(X.Z,{shouldShow:!t,children:(0,M.tZ)(w,{onClick:children:(0,M.tZ)(X.Z,{hiddenElement:(0,M.tZ)(v.Z,{}),shouldShow:Ct,children:(0,M.tZ)(b.Z,{})})})})]}),(0,M.tZ)(m,{alwaysOpen:t,isExpanded:Ct,children:(0,M.tZ)(C,{isHtml:!0,itemProp:"podcastDescription",maxChar:bt,onClick:text:Lt})}),(0,M.BX)(s,{children:[(0,M.tZ)(P.Z,{target:(0,M.BX)(i.Z,{"data-test":"share-button",underline:!0,children:[(0,M.tZ)(N.Z,{height:"15"}),(0,M.tZ)(h.Z,{children:yt("Share")})]}),children:(0,M.BX)(P.Z.List,{children:[(0,M.tZ)(P.Z.Item,{onClick:()=>{(async()=>{mt.track(c.z.Share,{seedType:Q.bV.PODCAST,seedId:l,stationName:gt}),ut((0,K.h7)({id:q.eO.Share,context:{seedType:Q.bV.PODCAST,seedId:l,url:wt,stationName:gt,hideDescription:!1,description:o,dimensions:nt.I.PODCAST_PROFILE}}))})()},children:yt("Share Episode")}),Ot&&(0,M.BX)(P.Z.Item,{onClick:children:[yt("Share from")," ",(0,M.tZ)(H.Z,{})]})]})}),(0,M.BX)(L,{"data-test":"podcast-mark-as-played",isPlayed:e,onClick:function(){Ot&&"PLAYING"===I&&A(),ut((0,tt.ZR)(e?0:a,$,l,!e))},underline:!0,children:[(0,M.tZ)(Z.Z,{height:15,type:"outlined"}),(0,M.tZ)(h.Z,{children:xt})]}),dt&&(0,M.BX)(i.Z,{css:it,onClick:()=>{null==c.Z.trackClick||c.Z.trackClick(`${O}|podcast_card|transcription_icon`),null==pt||pt()},underline:!0,children:[(0,M.tZ)(T,{height:18,width:18}),(0,M.tZ)(k.Z,{to:pt?void 0:`${wt}#transcription`,children:(0,M.tZ)(h.Z,{css:at,children:yt("Transcript")})})]})]}),(0,M.tZ)(E,{"data-test":"podcast-play-progress",progress:(0,G.PY)(St,a)})]})}}}]);
//# sourceMappingURL=PodcastCard.www.js.map