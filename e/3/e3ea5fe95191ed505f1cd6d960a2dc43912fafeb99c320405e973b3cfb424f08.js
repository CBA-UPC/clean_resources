"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["videoplayer"],{"./modules/videoplayer/player.js":(e,t,r)=>{r.r(t),r.d(t,{default:);var n=r("../node_modules/prop-types/index.js"),o=r.n(n),i=r("../node_modules/react/index.js"),a=r("../node_modules/react-redux/es/index.js"),l=(r("./components/common/css/VideoPlayer.scss"),r("./components/common/ImageCard/ImageCard.js")),c=r("./components/common/ImageCard/ImageCardUtils.js"),u=r("./components/lib/userJourney/index.js"),s=r("./utils/util.js"),d=r("./modules/videoplayer/dockvideoplayer.js"),p=r("./modules/videoplayer/slike.js"),m=r("./modules/videoplayer/utils.js"),y=r("./components/lib/analytics/src/ga.js");)(),W=function(e){function t(e){var r;return this,t),S(k(r=O(this,t,[e])),"playerIdMaker",(function(e){if(r.props.playerWrapper)return r.props.playerWrapper;var t="",n=r.props.config?r.props.config.video.id:"";return n||(n="NoSlikeId"),r.props.type?"pop-up"===r.props.type&&(t+="popup_player"):(t+="inline_player_".concat(n),e||(t=r.uniqueIdMaker(t))),t||(t="default_player"),t})),S(k(r),"uniqueIdMaker",(function(e){return r.checkPlayerExists(e)?r.uniqueIdMaker("".concat(e,"_1")):e})),S(k(r),"checkPlayerExists",(function(e){var t=!1;return"undefined"!=typeof document&&document.getElementById(e)&&(t=!0),t})),S(k(r),"imageClick",(function(e){e.isTrusted&&(0,u.bh)({type:"videouser"});var t=r.props,n=t.videoMsid,o=t.config,i=t.lead,a=t.relg,l=t.pagetype,c=t.autoplay,d=n||(0,s.Uh)(r.props,"config.video.msid","");if(!i||"videoshow"===l||c||(0,y.N2)("track","click",{"play-icon":"lead-video-click-".concat((0,s.an)()?"mweb":"web")}),window.activeSlike!==d){window.activeSlike=d;var v={config:h(h({},o),{},{lead:i}),wrapper:r.videoPlayerWrapper.current};void 0!==a&&(v.config=h(h({},v.config),{},{video:h(h({},v.config.video||{}),{},{relg:a})}));var f=localStorage.getItem("slike_reco");if(f&&"null"!==f){var g=JSON.parse(f);v.config=h(h({},v.config),{},{recommendation:g}),localStorage.setItem("slike_reco",null)}var b=r.props.campaign,w=(0,m.$e)(b),O=(0,m.lL)(b);if((0,m.eb)(o)&&(w||O)){if(e.isTrusted){var P=r.mediaInfoResRef.current.ss,j=(o.video.id,o.youtubeID),k=o.apiKey,I="https://tvid.in/log/pixel?lts=<timestamp>&vj=600&redirect=2&apikey=".concat(k,"&k=").concat(j,"&mstime=1696576378385&ss=").concat(P,"&pw=400&ph=700");fetch("".concat(I).replace("<timestamp>",Date.now())),j?w&&window.open("https://www.youtube.com/watch?v=".concat(j)):console.log("youtubeID not present")}}else{var S=r.videoPlayerWrapper.current.querySelector(".image-container");S&&(S.style.display="none"),(0,p.uv)(v)}}window.miniTvOnClose&&window.miniTvOnClose()})),S(k(r),"handleYoutube",(function(e,t,n,o){var i=r.videoPlayerWrapper.current.querySelector(".image-container");if(i.classList.add("yt-redirect-image"),fetch((0,m.kz)(h(h({},e),{},{player:{msid:e.video.msid,id:e.video.id}}),window.location.href,t)).then(().then(().catch((),"embedFlag"===n){var a=!1;"IntersectionObserver"in window&&(r.ytObserver.current=new window.IntersectionObserver((function(t,r){t.forEach((function(t){t.isIntersecting&&!a&&(i.append((0,m.pP)({youtubeID:e.youtubeID,config:o,weburl:_.weburl})),a=!0,r.unobserve(i))}))}),{rootMargin:"10px 0px 10px 0px",threshold:.1}),r.ytObserver.current.observe(i))}else i.append((0,m.QU)())})),S(k(r),"playVSVideo",(),r.videoPlayerWrapper=null,r.imageWrapper=null,r.state={},r.videoplayer=i.createRef(),r.videoPlayerWrapper=i.createRef(),r.mediaInfoResRef=i.createRef(),r.throttledImageClick=(0,s.P2)((function(e){return r.imageClick(e)}),6e3,k(r)),r.ytObserver=i.createRef(),r}var r,n;return t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.autoplay,n=t.type,o=t.pagetype,i=t.lead,a=t.autoDock,l="videoshow"===o;!(0,s.G9)()||!r||l||n&&"inline"!==n||i?l&&((0,s.an)()?window.addEventListener("scroll",(,{once:!0}):this.playVSVideo(!1)):window.addEventListener("scroll",(,{once:!0}),i&&r&&this.imageWrapper.click();var c=this.props.campaign,u=(0,m.$e)(c),p=(0,m.lL)(c),v=p?"embedFlag":"redirectFlag";if((0,m.eb)(this.props.config)&&(u||p)&&this.handleYoutube(this.props.config,o,v,c),a&&i&&!l&&(0,d.Lj)(this.videoplayer.current),!r){this.observer=new IntersectionObserver((function(t){!0===t[0].isIntersecting&&((0,y.N2)("track","view",{"play-icon":"lead-video-view-".concat(window.isMobile?"mweb":"web")}),e.observer.disconnect())}),{threshold:[.4]});var f=document.querySelector(".image-container");f&&this.observer.observe(f)}var g=document.querySelector(".landscape-mode");g&&(g.style.display="none")}},{key:"componentWillUnmount",value:function(){this.props.autoDock&&((0,d.At)(this.videoPlayerWrapper.current),"undefined"==typeof window||!window.currentPlayerInst||"function"!=typeof window.currentPlayerInst.getVideoState||!window.currentPlayerInst.getVideoState()||window.currentPlayerInst.getVideoState().paused||(0,d.mC)()||!(0,d.z9)(this.videoPlayerWrapper.current)||window.adPlaying||window.location.pathname.includes("videoshow")?window.currentPlayerInst&&!window.adPlaying&&window.currentPlayerInst.getVideoState().paused&&(0,p.l$)():(this.videoplayer.current.hasChildNodes()?(0,d.kS)(this.videoplayer.current):(this.videoplayer.current.remove(),(0,p.l$)()),(0,d.Ec)(this.videoPlayerWrapper.current,"block")));var e=document.querySelector(".landscape-mode");e&&e.removeAttribute("style"),this.ytObserver.current instanceof window.IntersectionObserver&&(this.ytObserver.current.disconnect(),this.ytObserver.current=null)}},{key:"render",value:function(){var e,t,r,n,o,a,u,d,p,m,y=this,v=this.props,b=v.lead,h=v.schema,w=v.config,O=v.autoplay,P=v.pagetype,j=(v.canonical,v.item),k=v.pathname,I=v.isLandscape,S=(v.showVideoThumb,_.wapCode),E=k&&(0,s.Pu)(k),W="videoshow"===P;w&&w.player&&"default"!==w.player.adSection?S=w.player.adSection:w.video&&w.video.host&&(S=w.video.host.split("_").join("")),w&&w.player&&"100759941"===E&&(w.version="3.6.24",w.env="stg",w.player.colombiaAd={enablecan:!0,adSlot:(0,s.an)()?"515549":"515547"});var C,x,D=this.props,q=D.imageid,z=D.imgsize,R=(0,s.qt)(null==j?void 0:j.image)&&null!=j&&null!==(e=j.image[0])&&void 0!==e&&e.id?j.image[0].id:(null==j||null===(t=j.lead)||void 0===t?void 0:t.vdo)&&(0,s.qt)(null==j||null===(r=j.lead)||void 0===r?void 0:r.vdo)&&(null==j||null===(n=j.lead)||void 0===n||null===(o=n.vdo[0])||void 0===o?void 0:o.imageid),T=(0,s.qt)(null==j?void 0:j.image)&&null!=j&&null!==(a=j.image[0])&&void 0!==a&&a.id?j.image[0].imgsize:(null==j||null===(u=j.lead)||void 0===u?void 0:u.vdo)&&(0,s.qt)(null==j||null===(d=j.lead)||void 0===d?void 0:d.vdo)&&(null==j||null===(p=j.lead)||void 0===p||null===(m=p.vdo[0])||void 0===m?void 0:m.imgsize),V=this.playerIdMaker(O),M=w.controls&&"podcast"===w.controls.ui,N=w&&w.video&&w.video.seopath;if(j&&j.lead&&j.lead.vdo&&(0,s.qt)(j.lead.vdo)&&j.lead.vdo[0].imageid){var A=(C=j.lead.vdo,x=1,C)||C,x)||C,x)||))[0];q=A.imageid,z=A.imgsize}else j&&(0,s.qt)(j.image)&&j.image[0].id&&(q=j.image[0].id,z=j.image[0].imgsize);var L=(0,s.ix)(k),U=(0,c.Q)({msid:q,size:"largewidethumb",imgsize:"",imgver:z||"",loadWithWebDomain:L&&b||W}),$=(0,c.Q)({msid:R||q||"",size:"amplargethumbarticle",imgsize:"",imgver:T||z||""}),B="undefined"!=typeof window&&window.currentPlayerInst&&window.currentPlayerInst.ui&&window.currentPlayerInst.ui.contElUi?window.currentPlayerInst.ui.contElUi.dataset.parent:" ",F=(0,s.BW)($),Q={backgroundImage:"url(".concat(U,")")};return i.createElement("div",f({className:"default-outer-player ".concat(I&&B.includes(V)?"landscape":"portrait"," ").concat(M?"__sast":""," ").concat((0,s.an)()?"mobile":"desktop"),ref:this.videoPlayerWrapper,id:"parent_".concat(V),"data-attr-slk":w&&w.video?w.video.msid:"","data-video-seo":w?N:"video","data-leadvideo":null!=b&&b,"data-timesxp":w&&w.video&&w.video.host===_.timesXP.hostName,"data-vdohost":S,"data-thumbnail":U,"data-youtubeID":w&&w.youtubeID||""},!L&&{style:Q}),h&&("articleshow"!==P||$)&&i.createElement("span",{itemProp:"image",itemScope:!0,itemType:"https://schema.org/ImageObject"},i.createElement("meta",{itemProp:"url",content:$||U}),i.createElement("meta",{content:F.width,itemProp:"width"}),i.createElement("meta",{content:F.height,itemProp:"height"}),i.createElement("meta",{name:"grx:image",content:$||U})),q?i.createElement("div",{className:"image-container",tabIndex:0,role:"button",ref:"data-leadvideo":null!=b&&b,onClick:function(e){return y.throttledImageClick(e)},onKeyUp:,M&&w.video.title?i.createElement("div",{className:"audiotitle truncate"},w.video.title):null,M&&i.createElement(l.Z,{noLazyLoad:b,size:"largewidethumb",msid:q,schema:h,imgver:z})):null,i.createElement("div",{className:"default-player ".concat(M?"__sast":""),id:V,ref:this.videoplayer,"data-parent":"parent_".concat(V)}))}}])&&w(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(i.PureComponent);W.propTypes={playerWrapper:o().any,config:o().object,autoplay:o().bool,autoDock:o().bool,type:o().string,dispatch:o().func,imageid:o().string,lead:o().bool,schema:o().any,imgsize:o().string};const C=(0,a.$j)(()(W)}}]);