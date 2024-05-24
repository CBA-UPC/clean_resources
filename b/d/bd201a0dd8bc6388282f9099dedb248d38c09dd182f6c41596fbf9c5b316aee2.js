"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI","icons/IconHistory-js"],{619229:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(709249),n=r(887371),i=r(545754),l=r(486906),o=r(202784),s=r(645184),c=r.n(s),u=r(850941),d=r(229496),p=r(973186),v=r(497892),g=r(728904),f=r(6019),b=r(758821),m=c().a681babd,y=c().db3cd325,h=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i)))._buildMessage=function(t){var r=e.props.playerState,a=r&&(0,g.Ci)(r);if(a&&a.displayType===f.ak.AD){var n=a.advertiserName;switch(t.type){case f.Eq.watch_now:return n?(0,v.Pr)({advertiserName:n}):v.iX;case f.Eq.shop:return n?(0,v.LH)({advertiserName:n}):v.st;case f.Eq.see_more:return n?(0,v.SH)({advertiserName:n}):v.C5;case f.Eq.go_to:return n?(0,v._3)({advertiserName:n}):v.cB;case f.Eq.visit_site:default:return n?(0,v.L7)({advertiserName:n}):v.PN}}var i=new b.Z(t.url).getHostname(),l=0===i.indexOf("www.")?i.substr(4):i;switch(t.type){case f.$2.WATCH:return m({trimmedHostname:l});case f.$2.VISIT:default:return y({trimmedHostname:l})}},e._handlePress=function(e,t){return function(){e.callToActionClicked(),window.open(t.url,"_blank")}},e}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.playerApi,r=e.playerState,a=r&&(0,g.Ci)(r);a&&a.cta&&t&&t.callToActionImpression()}},{key:"render",value:function(){var e=this.props,t=e.playerApi,r=e.playerState;if(!r||!t)return null;var a=(0,g.Ci)(r);if(a&&a.cta){var n=a.cta,i=this._buildMessage(n);return o.createElement(d.ZP,{accessibilityLabel:i,icon:o.createElement(u.default,null),onPress:this._handlePress(t,n),style:Z.root,type:"onMediaDominantColorFilled"},i)}return null}}]),r}(o.PureComponent),Z=p.Z.create((function(e){return{root:{position:"absolute",start:e.spaces.space12,top:e.spaces.space12}}}));const E=h},17119:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(968079),n=r(709249),i=r(887371),l=r(545754),o=r(486906),s=(r(136728),r(202784)),c=r(645184),u=r.n(c),d=r(770153),p=r(882392),v=r(825301),g=r(450095),f=r(973186),b=r(728904),m=r(6019),y=r(67029),h=r(224897),Z=u().ed617674,E=u().j190bf1a,w=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l)))._renderLeftBadges=function(t){var r=e.props,n=r.additionalBadges,i=r.mediaAccessibilityLabel,l=r.playerApi,o=[],c=(0,b.Ci)(t);if((null==c?void 0:c.contentType)===m.wF.GIF&&(t&&o.push(s.createElement(v.ZP,{key:"play-pause",pointerEvents:"auto",style:_.playLabel},s.createElement(y.Z,{playerApi:l,playerState:t}))),o.push(s.createElement(v.ZP,{bold:!0,key:"gif",type:"gif"}))),i&&o.push(s.createElement(v.ZP,{altLabel:i,bold:!0,key:"alt"})),0===o.length){var u=[e._renderDurationBadge(t),e._renderViewerCountBadge(t)].concat(n).filter(Boolean);o.push.apply(o,(0,a.Z)(u))}return o.length>0?o:null},e._renderRightBadges=function(t){var r=[e._renderTimecodeBadge(t),e._render360Badge(t)].concat(e.props.additionalBadges).filter(Boolean);return r.length>0?r:null},e._renderTopRightBadges=function(t){var r=(0,b.Ci)(t),a=e.props.playerDisplayOptions;if(!r||!a||null==a||!a.showHDBadge)return null;var n=r.videoHeight,i=r.videoWidth,l=Math.min(n||0,i||0);return!isNaN(l)&&l>m.CX?s.createElement(v.ZP,{bold:!0,key:"hd",type:"hd"}):void 0},e._render360Badge=function(e){var t=(0,b.Ci)(e);if(t&&t.is360)return s.createElement(v.ZP,{key:"360-badge"},Z)},e._renderTimecodeBadge=function(e){var t=(0,b._5)((0,b.Ci)(e));if(t&&t>=1)return s.createElement(v.ZP,{key:"timecode-badge"},s.createElement(p.ZP,null,s.createElement(d.default,{style:_.timecodeIcon}),(0,b.mr)(t)))},e._renderDurationBadge=function(t){var r=e.props.playerDisplayOptions;if(r&&r.badgeConfiguration&&r.badgeConfiguration.hideDuration)return null;var a=(0,b.sI)(t);return a&&a.isLive?s.createElement(v.ZP,{key:"live-badge",type:"live"},E):s.createElement(v.ZP,{key:"time-badge"},s.createElement(h.Z,{key:"time-badge-time"}))},e._renderViewerCountBadge=function(t){var r=e.props.playerDisplayOptions;if(r&&r.badgeConfiguration&&r.badgeConfiguration.hideViewCount)return null;var a=(0,b.xB)(t),n=a&&(0,b.XE)(a);return n?s.createElement(v.ZP,{key:"viewer-count-badge"},n):null},e}return(0,i.Z)(r,[{key:"render",value:function(){var e,t=this.props,r=t.playerState,a=t.position,n=t.show;if(!r||!n)return null;switch(a){case"left":e=this._renderLeftBadges(r);break;case"right":e=this._renderRightBadges(r);break;case"topRight":e=this._renderTopRightBadges(r)}return e?s.createElement(g.Z,{align:a},e):null}}]),r}(s.PureComponent);w.defaultProps={show:!0};var _=f.Z.create((function(e){return{root:{position:"relative"},playLabel:{flexDirection:"row",paddingHorizontal:0,paddingVertical:0},rightBadges:{position:"absolute",end:e.spaces.space12,bottom:e.spaces.space12},leftBadges:{position:"absolute",start:e.spaces.space12,bottom:e.spaces.space12},timecodeIcon:{marginEnd:e.spaces.space2,marginBottom:e.spaces.space1,height:"1em"}}}));const k=w},134516:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(133028),n=r(709249),i=r(887371),l=r(545754),o=r(486906),s=r(202784),c=r(325686),u=r(645184),d=r.n(u),p=r(973186),v=r(459740),g=Object.freeze([{label:"Orange",value:"rgb(245, 166, 35)"},{label:"Purple",value:"rgb(171, 112, 212)"},{label:"Green",value:"rgb(153, 206, 98)"},{label:"Periwinkle",value:"rgb(92, 117, 220)"},{label:"Red",value:"rgb(213, 77, 129)"},{label:"Yellow",value:"rgb(222, 213, 105)"},{label:"Teal",value:"rgb(94, 213, 177)"},{label:"Pink",value:"rgb(230, 151, 220)"},{label:"Brown",value:"rgb(146, 100, 62)"},{label:"VividTangerine",value:"rgb(255, 169, 138)"},{label:"SkyBlue",value:"rgb(132, 225, 235)"},{label:"Fern",value:"rgb(105, 171, 99)"},{label:"Carnation",value:"rgb(248, 91, 91)"}]);var f=r(900108),b=r(214451);function m(e){var t={backgroundColor:e.color};return s.createElement(s.Fragment,null,s.createElement(c.Z,{style:[y.overlay,t]}),s.createElement(c.Z,{style:[y.overlay,y.blackOverlay]}))}var y=p.Z.create((function(e){return{overlay:{position:"absolute",width:"100%",height:"100%",borderRadius:e.borderRadii.xLarge,backgroundColor:e.colors.translucentBlack77},blackOverlay:{backgroundColor:"rgba(0,0,0,0.2)"}}})),h=r(273487),Z=r(559624),E=["profileImageUrl"];function w(e){var t=e.profileImageUrl,r=void 0===t?_:t,n=(0,v.Z)(e,E),i=(0,f.M8)(n.size),l=(0,a.Z)((0,a.Z)({},i),{},{transform:[{scale:"".concat(n.scale)}]});return s.createElement(c.Z,{style:[l,Z.Z.transitionTransform,k.scalingAvatar]},s.createElement(h.Z,{defaultSource:_,source:r,style:i}))}var _="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",k=p.Z.create((function(e){return{scalingAvatar:{position:"absolute",borderRadius:e.borderRadii.infinite,overflow:"hidden"}}}));function C(e){var t,r,a=e.size,n=a*B,i=e.paused?0:e.audioLevel,l=(t=e.participantIndex,r=(t-1)%g.length,(g[r]||g[0]).value);return s.createElement(s.Fragment,null,s.createElement(m,{color:l}),s.createElement(b.Z,{scale:P(i),size:n,translate:I(i,a)}),s.createElement(b.Z,{scale:P(i),size:n,translate:I(i,a)}),s.createElement(b.Z,{scale:P(i),size:n,translate:I(i,a)}),s.createElement(w,{profileImageUrl:e.profileImageUrl,scale:L(i),size:n}))}var B=.692,P=function(e){return.95+(.2+(0,f.TN)(.5))*e},L=function(e){return 1+.05*e},I=function(e,t){return{x:(0,f.EO)()*e*(0,f.TN)(.05*t),y:(0,f.EO)()*e*(0,f.TN)(.05*t)}},T=["accessibilityLabel"];var A=p.Z.create((function(e){return{root:{userSelect:"none",overflow:"hidden",justifyContent:"center",alignItems:"center"}}}));const D=function(e){var t=e.accessibilityLabel,r=(0,v.Z)(e,T),n=r.size,i=(0,a.Z)({},(0,f.M8)(n));return s.createElement(c.Z,{accessibilityLabel:t,style:[i,A.root]},s.createElement(C,r))};var S=d().d2c96140,x=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={dimensions:{width:0,height:0}},e._renderGuests=function(t,r){var n=Object.keys(t.guests).map((function(e){var r=t.audioLevels.guests[e]||0;return(0,a.Z)((0,a.Z)({},t.guests[e]),{},{AudioLevel:r/100})})),i=e.state.dimensions;if(!i.width||!n.length)return null;var l=.1875*i.width;return s.createElement(c.Z,{style:H.guestIndicators},n.map((function(e){return s.createElement(c.Z,{key:e.ParticipantIndex,style:H.guestIndicator},s.createElement(D,{accessibilityLabel:S,audioLevel:e.AudioLevel,participantIndex:e.ParticipantIndex,paused:!r.isPlaying,profileImageUrl:e.ProfileUrl,size:l}))})))},e._handleLayout=function(t){e.setState(function(e){return function(){var t=e.nativeEvent.layout,r=t.height;return{dimensions:{width:t.width,height:r}}}}(t))},e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.guestsState,r=e.playerState;return t&&t.guests&&r?s.createElement(c.Z,{onLayout:this._handleLayout,pointerEvents:"none",style:H.overlay},this._renderGuests(t,r)):null}}]),r}(s.Component),H=p.Z.create((function(e){return{overlay:(0,a.Z)((0,a.Z)({},p.Z.absoluteFillObject),{},{flexGrow:1}),guestIndicators:{marginTop:e.spaces.space20,marginStart:e.spaces.space20,flexDirection:"row"},guestIndicator:{marginEnd:e.spaces.space16}}}))},770153:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(133028),n=r(202784),i=r(890601),l=r(783427),o=r(473569),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,i.Z)("svg",(0,a.Z)((0,a.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.Z.root,e.style],viewBox:"0 0 24 24",children:n.createElement("g",null,n.createElement("path",{d:"M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z"}))}),{writingDirection:t})};s.metadata={width:24,height:24};const c=s}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI.fe0b16da.js.mapner_changed=function(){const a=this.Ig;this.Ig=this.get("innerContainer");this.Kg&&(_.qk(this.Kg),delete this.Kg);a&&this.Jg.forEach((0,_.Ca)(this.QB,this));this.Ig&&(this.Kg=_.xk(this.Ig,"resize",this,this.vH),this.Jg.forEach((0,_.Ca)(this.Mz,this)))};_.G.vH=function(){const a=this;_.WG(function(){a.Jg.forEach((0,_.Ca)(a.Pz,a))})()};
_.G.Mz=function(a){if(this.Ig){var b=_.qn(this.Ig);b=_.qu("div",this.Ig,new _.Dl(b.width,b.height));_.ou(b);_.ru(b,2);a.xh=b;b=_.qu("div",a.xh,new _.Dl(0,0),null,!0);_.ou(b);a.Lu=b;b={Kq:(0,_.Ca)(this.bD,this,a)};a.image=_.WL(_.J(a.mh.Lg,1,keb).getUrl(),a.xh,null,null,b)}};_.G.QB=function(a){a.xh&&_.yu(a.xh);a.Lu&&_.yu(a.Lu);a.image&&_.yu(a.image);a.xh=null;a.image=null;a.Lu=null};_.G.bD=function(a,b,c){a.xh&&c&&(a.image=c,_.ou(c),this.Pz(a))};
_.G.Pz=function(a){var b=_.qn(this.Ig);var c=_.qn(a.image);var d=Vdb(_.J(_.J(a.mh.Lg,4,x9).Lg,1,w9),b.width,c.width),e=Vdb(_.J(_.J(a.mh.Lg,4,x9).Lg,2,w9),b.height,c.height);e=Wdb(_.J(_.J(a.mh.Lg,4,x9).Lg,1,w9),c.width,b.width,e);c=Wdb(_.J(_.J(a.mh.Lg,4,x9).Lg,2,w9),c.height,b.height,d);c=new _.Fl(e,c);d=s9(_.J(_.J(a.mh.Lg,3,y9).Lg,1,t9),b.width);e=s9(_.J(_.J(a.mh.Lg,3,y9).Lg,2,t9),b.height);e=b.height-e-c.height;b=s9(_.J(_.J(a.mh.Lg,2,y9).Lg,1,t9),c.width);var f=s9(_.J(_.J(a.mh.Lg,2,y9).Lg,2,t9),
c.height);_.pu(a.xh,new _.Dl(d-b,e+f));_.pn(a.xh,c);_.pn(a.image,c);_.pn(a.Lu,c)};_.Ja(u9,_.Fk);u9.prototype.remove=function(){this.Ig.close();_.qk(this.Jg);delete this.Jg};u9.prototype.changed=function(){this.Ig.close()};u9.prototype.suppressInfoWindows_changed=function(){this.get("suppressInfoWindows")&&this.Ig.close()};u9.prototype.Kg=function(a){if(a){var b=this.get("map");if(b&&!this.get("suppressInfoWindows")){var c=a.featureData;if(c=c&&c.infoWindowHtml||a.infoWindowHtml)this.Ig.setOptions({pixelOffset:a.pixelOffset,position:a.latLng,content:c}),this.Ig.open(b)}}};v9.prototype.Jg=function(a){var b=a.Qg;const c=a.Qg=a.get("map"),d=$db(a);if(b){a.Pg=!1;a.Kg&&_.NKa(a.Kg,b);a.Ng&&(_.qk(a.Ng),delete a.Ng);Ydb(a,b);delete a.screenOverlays_changed;if(a.Jg)for(b=0;b<a.Jg.length;++b){const e=a.Jg[b];e.overlay.set("map",null);e.listener&&(_.qk(e.listener),delete e.listener)}a.Mg&&(a.Mg.remove(),a.Mg.unbindAll(),delete a.Mg)}c&&ceb(a,c,d)};
v9.prototype.Ig=function(a){const b=a.get("map"),c=b&&b.__gm;a.Ii&&a.Ii.Wg.remove(a);(a.Ii=c)&&_.an(c.Wg,a);if(c&&!c.jh){var d=Sdb(c.Wg,c);c.jh=d;c.Og.register(d)}a.Ig&&(a.Ig.set("bounds",null),a.Kg.unbindAll(),a.Ig.unbindAll(),a.Jg.then(function(f){f.unbindAll()}),delete a.Kg,delete a.Ig,delete a.Jg);if(b){var e=a.get("bounds");const f=a.get("url"),g=c.get("panes").overlayLayer,h=new _.$m;a.Mg=h;d=new j9;d.bindTo("mapBounds",b,"bounds");d.bindTo("projection",b);d.bindTo("zoom",b);d.set("bounds",
e);a.Kg=d;e=new m9(e,h);e.bindTo("zoom",b);e.bindTo("projection",b);e.bindTo("bounds",d,"croppedBounds");a.Ig=e;a.Jg=c.Jg.then(({oh:l})=>{l=new o9(f,g,h,l);l.bindTo("opacity",a);return l});_.wl(b,"Og");_.ul(b,148069)}};_.gk("kml",new v9);});