var __webpack_modules__={2:159:60:62:7:15:11:8:5:(e,t,n)=>{n.d(t,{elemAfter:()=>p,elemBind:()=>y,elemFromObject:()=>f,elemRemove:()=>_,elemStyle:()=>h,elemUnbind:()=>b});var i,r=n(6),o=(n(8),n(10),n(11)),a=n(12),l=(n(16),n(17),n(20)),s=n(3),c=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)},u=(s.Wistia,(0,o.cachedDetect)()),f=d=p=_=h=v={borderImage:!0,mixBlendMode:!0,transform:!0,transition:!0,transitionDuration:!0},g=["webkit","moz","o","ms"],m=y=b=w=T=function(e){var t=document.body,n=document.documentElement;if(null==e)return n&&n.scrollTop||t&&t.scrollTop||0;t&&(t.scrollTop=e),n&&(n.scrollTop=e)},k=["auxclick","click","contextmenu","dblclick","focus","keydown","keypress","keyup","mousedown","mouseup","reset","submit","touchend","touchstart"].forEach(()},16:13:31:6:(e,t,n)=>{n.d(t,{isArray:()=>c,isEmpty:()=>d,isObject:()=>f,merge:()=>r});n(7);var i=r=(Array.prototype.slice,,o=a=l=s=/^\s*function Array()/,c=u=/^\s*function Object()/,f=d=,10:9:4:19:17:18:20:28:61:29:14:30:12:3:,__webpack_module_cache__={};_webpack_require__.d=__webpack_require__.o=var __webpack_exports__={};(()=>{__webpack_require__.d(__webpack_exports__,{LastFrameCanvasControl:()=>l,default:()=>s});__webpack_require__(3);var e=__webpack_require__(5),t=__webpack_require__(159),n=__webpack_require__(60);l=function(t){!u,t);var a,l,s,c=o(u);function u(e){var t;return this,u),(t=c.call(this,e)).unbinds.push(t.video.on("timechange",(function(e){t.video.duration()-e<t.video._eventLoopDuration/1e3*1.5?t.startRenderingHiddenCanvas():t.stopRenderingHiddenCanvas()})),t.video.on("end",(),t.video.on("beforereplaceengine",()),t}return a=u,(l=[{key:"destroy",value:,{key:"fit",value:function(){this.hiddenCanvas&&((0,e.elemStyle)(this.hiddenCanvas,{height:"".concat(this.props.videoHeight,"px"),width:"".concat(this.props.videoWidth,"px")}),this.hiddenCanvas.height=this.props.videoHeight*(window.devicePixelRatio||1),this.hiddenCanvas.width=this.props.videoWidth*(window.devicePixelRatio||1))}},{key:"mount",value:,{key:"onControlPropsUpdated",value:function(e){(this.props.videoWidth!==e.videoWidth||this.props.videoHeight||e.videoHeight)&&this.fit()}},{key:"renderToHiddenCanvas",value:function(){var t;if(null!==(t=this.video)&&void 0!==t&&t.engine&&"ended"!==this.video.state()){var n=window.devicePixelRatio||1;if(!this.hiddenCanvas){this.hiddenCanvas=(0,e.elemFromObject)({tagName:"canvas",style:{left:0,pointerEvents:"none",position:"absolute",top:0,visibility:"hidden"}});var i=this.props.videoWidth,r=this.props.videoHeight;(0,e.elemStyle)(this.hiddenCanvas,{width:"".concat(i,"px"),height:"".concat(r,"px")}),this.hiddenCanvas.width=i*n,this.hiddenCanvas.height=r*n,(0,e.elemAfter)(this.video.engine.getMediaElement(),this.hiddenCanvas)}if(this.video.engine.currentAsset()){var o,a,l,s,c=this.hiddenCanvas.getContext("2d");this.hiddenCanvas.width/this.hiddenCanvas.height>this.video.aspect()?(o=(a=this.hiddenCanvas.height)*this.video.aspect(),l=(this.hiddenCanvas.width-o)/2,s=0):(a=(o=this.hiddenCanvas.width)/this.video.aspect(),l=0,s=(this.hiddenCanvas.height-a)/2),c.fillStyle="#000",c.fillRect(0,0,this.hiddenCanvas.width,this.hiddenCanvas.height),c.drawImage(this.video.engine.getMediaElement(),l,s,o,a)}}}},{key:"stopRenderingHiddenCanvas",value:,{key:"startRenderingHiddenCanvas",value:,{key:"renderToHiddenCanvasLoop",value:function(){var e=this;cancelAnimationFrame(this.hiddenCanvasRaf),this.hiddenCanvasRaf=requestAnimationFrame(()}},{key:"freezeLastFrame",value:function(){this.video.engine&&(this.stopRenderingHiddenCanvas(),"ended"!==this.video.state()&&this.renderToHiddenCanvas(),this.hiddenCanvas&&(0,e.elemStyle)(this.hiddenCanvas,{visibility:""}))}}])&&i(a.prototype,l),s&&i(a,s),Object.defineProperty(a,"prototype",{writable:!1}),u}(t.default);l.handle="lastFrameCanvas",l.type="background",l.sortValue=-1e5,l.shouldMount=const s=l})();var __webpack_exports__LastFrameCanvasControl=__webpack_exports__.LastFrameCanvasControl,__webpack_exports__default=__webpack_exports__.default;export{__webpack_exports__LastFrameCanvasControl as LastFrameCanvasControl,__webpack_exports__default as default};
//# sourceMappingURL=LastFrameCanvasControl.js.map