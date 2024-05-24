/*!
   JW Player version 8.20.2
   Copyright (c) 2021, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.20.2/notice.txt
*/
window.jwplayer=[function(t,e,n){"use strict";n.d(e,"kb",(function(){return r})),n.d(e,"nb",(function(){return i})),n.d(e,"lb",(function(){return o})),n.d(e,"pb",(function(){return u})),n.d(e,"qb",(function(){return a})),n.d(e,"mb",(function(){return c})),n.d(e,"ob",(function(){return s})),n.d(e,"rb",(function(){return l})),n.d(e,"t",(function(){return f})),n.d(e,"v",(function(){return d})),n.d(e,"u",(function(){return p})),n.d(e,"o",(function(){return h})),n.d(e,"r",(function(){return v})),n.d(e,"ub",(function(){return g})),n.d(e,"s",(function(){return m})),n.d(e,"ab",(function(){return b})),n.d(e,"X",(function(){return y})),n.d(e,"w",(function(){return j})),n.d(e,"Z",(function(){return w})),n.d(e,"x",(function(){return O})),n.d(e,"wb",(function(){return k})),n.d(e,"a",(function(){return C})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return P})),n.d(e,"d",(function(){return S})),n.d(e,"e",(function(){return T})),n.d(e,"f",(function(){return E})),n.d(e,"i",(function(){return A})),n.d(e,"G",(function(){return _})),n.d(e,"hb",(function(){return F})),n.d(e,"R",(function(){return I})),n.d(e,"D",(function(){return M})),n.d(e,"C",(function(){return L})),n.d(e,"F",(function(){return N})),n.d(e,"q",(function(){return R})),n.d(e,"db",(function(){return D})),n.d(e,"n",(function(){return B})),n.d(e,"H",(function(){return q})),n.d(e,"I",(function(){return z})),n.d(e,"O",(function(){return V})),n.d(e,"P",(function(){return H})),n.d(e,"S",(function(){return Q})),n.d(e,"jb",(function(){return U})),n.d(e,"cb",(function(){return W})),n.d(e,"E",(function(){return X})),n.d(e,"T",(function(){return J})),n.d(e,"Q",(function(){return Z})),n.d(e,"U",(function(){return K})),n.d(e,"W",(function(){return Y})),n.d(e,"N",(function(){return $})),n.d(e,"M",(function(){return G})),n.d(e,"L",(function(){return tt})),n.d(e,"J",(function(){return et})),n.d(e,"K",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"p",(function(){return it})),n.d(e,"z",(function(){return ot})),n.d(e,"ib",(function(){return ut})),n.d(e,"eb",(function(){return at})),n.d(e,"fb",(function(){return ct})),n.d(e,"g",(function(){return st})),n.d(e,"h",(function(){return lt})),n.d(e,"sb",(function(){return ft})),n.d(e,"tb",(function(){return dt})),n.d(e,"bb",(function(){return pt})),n.d(e,"B",(function(){return ht})),n.d(e,"m",(function(){return vt})),n.d(e,"l",(function(){return gt})),n.d(e,"gb",(function(){return mt})),n.d(e,"vb",(function(){return bt})),n.d(e,"A",(function(){return yt})),n.d(e,"k",(function(){return jt})),n.d(e,"Y",(function(){return wt})),n.d(e,"j",(function(){return Ot})),n.d(e,"y",(function(){return kt}));var r="buffering",i="idle",o="complete",u="paused",a="playing",c="error",s="loading",l="stalled",f="drag",d="dragStart",p="dragEnd",h="click",v="doubleClick",g="tap",m="doubleTap",b="over",y="move",j="enter",w="out",O=c,k="warning",C="adClick",x="mediaLoaded",P="adPause",S="adPlay",T="adSkipped",E="adTime",A="autostartNotAllowed",_=o,F="ready",I="seek",M="beforePlay",L="beforeComplete",N="bufferFull",R="displayClick",D="playlistComplete",B="cast",q="mediaError",z="firstFrame",V="playAttempt",H="playAttemptFailed",Q="seeked",U="setupError",W="state",X="bufferChange",J="time",Z="ratechange",K="mediaType",Y="volume",$="mute",G="metadataCueParsed",tt="meta",et="levels",nt="levelsChanged",rt="visualQuality",it="controls",ot="fullscreen",ut="resize",at="playlistItem",ct="playlist",st="audioTracks",lt="audioTrackChanged",ft="subtitlesTracks",dt="subtitlesTrackChanged",pt="playbackRateChanged",ht="logoClick",vt="captionsList",gt="captionsChanged",mt="providerFirstFrame",bt="userAction",yt="instreamClick",jt="breakpoint",wt="fullscreenchange",Ot="bandwidthEstimate",kt="float"},function(t,e,n){"use strict";n.r(e);var r=n(6);.d(e,"Browser",(function(){return a})),n.d(e,"OS",(function(){return c})),n.d(e,"Features",(function(){return s}));var o=navigator.userAgent,u=function(){};var a={get androidNative(){return Object(r.c)()},get chrome(){return Object(r.d)()},get edge(){return Object(r.e)()},get facebook(){return Object(r.g)()},get firefox(){return Object(r.f)()},get ie(){return Object(r.i)()},get msie(){return Object(r.n)()},get safari(){return Object(r.q)()},get version(){return e=o,(t=this).chrome?n=-1!==e.indexOf("Chrome")?e.substring(e.indexOf("Chrome")+7):e.substring(e.indexOf("CriOS")+6):t.safari?n=e.substring(e.indexOf("Version")+8):t.firefox?n=e.substring(e.indexOf("Firefox")+8):t.edge?n=e.substring(e.indexOf("Edge")+5):t.ie&&(-1!==e.indexOf("rv:")?n=e.substring(e.indexOf("rv:")+3):-1!==e.indexOf("MSIE")&&(n=e.substring(e.indexOf("MSIE")+5))),n&&(-1!==(u=n.indexOf(";"))&&(n=n.substring(0,u)),-1!==(u=n.indexOf(" "))&&(n=n.substring(0,u)),-1!==(u=n.indexOf(")"))&&(n=n.substring(0,u)),r=parseInt(n,10),i=parseInt(n.split(".")[1],10)),{version:n,major:r,minor:i};var t,e,n,r,i,u}},c={get android(){return Object(r.b)()},get iOS(){return Object(r.j)()},get mobile(){return Object(r.o)()},get mac(){return Object(r.p)()},get iPad(){return Object(r.k)()},get iPhone(){return Object(r.l)()},get windowsget tizen(){return Object(r.r)()},get tizenApp(){return Object(r.s)()},get version,s={get flash(){return Object(r.h)()},get flashVersion(){return Object(r.a)()},get iframeget passiveEventsget backgroundLoading},function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"l",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"p",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"n",(function(){return v})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return m})),n.d(e,"d",(function(){return b})),n.d(e,"i",(function(){return y})),n.d(e,"q",(function(){return j})),n.d(e,"j",(function(){return w})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return k})),n.d(e,"o",(function(){return C})),n.d(e,"m",(function(){return x})),n.d(e,"a",(function(){return P}));var r=navigator.userAgent; a=c=o(/gecko\//i),s=o(/trident\/.+rv:\s*11/i),l=o(/iP(hone|od)/i),f=d=p=o(/FBAV/i);function h(){return i(/\sEdge\/\d+/i)}function v(){return i(/msie/i)}t,e,n){"use strict";var r=n(0),i=n(55),o=n(50),u=n(21),a=n(10),c=n(51),s=n(26),l=n(20);ar d=n(67),p=n.n(d),h=n(66);y=j=n(8),w=n(28),O=n(23),k=n(16),C=n(17),x=n(39),P=n(1),S=n(4),T=null; F=n(25),I=n(3),M=n(59),L=n(24),N=n(13); q=n(37),z=W=X=var J=Z=n(42),K=n(30),Y=n(12),$=n(15),G={removeItem:;try{G=window.localStorage||G}catch(t){}var tt=),et=n(54),nt=n(35),rt=n(9),it=n(43),ot=n(60),ut=n(61),at=n(34);n(68),n(70);n.d(e,"b",(function(){return ft}));var ct=ect(r.j)(ct.prototype,{on:rt.a.on,once:rt.a.once,off:rt.a.off,trigger:rt.a.trigger,init:playerDestroy:getContainer:get:getItemQoe:getItemPromise:function(){return null},setItemCallback:getConfig:getCurrentCaptions:function(){return this.get("captionsIndex")},getWidth:function(){return this.get("containerWidth")},getHeight:function(){return this.get("containerHeight")},getMute:function(){return this.get("mute")},getProvider:function(){return this.get("provider")},getState:getAudioTracks:function(){return null},getCaptionsList:function(){return null},getQualityLevels:function(){return null},getVisualQuality:function(){return null},getCurrentQuality:function(){return-1},getCurrentAudioTrack:getSafeRegion:isBeforeComplete:function(){return!1},isBeforePlay:createInstream:skipAd:function(){},attachMedia:function(){},detachMedia:);e.a=ct},,).default;