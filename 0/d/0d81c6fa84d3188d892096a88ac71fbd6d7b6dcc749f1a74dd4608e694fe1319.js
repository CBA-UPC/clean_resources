!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"a50o3uhyy9","upload":"https://d.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"content":true,"dob":1477});csrfToken:window.HUFFPOST.params.csrfToken}});case 2:(i=t.sent)&&o(i);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();window.SPOTIM.startSSO({callback:t,userId:r.guid}).then((function(t){})).catch((function(t){console.error(t)}))}};try{e=JSON.parse(document.querySelector(".comments__container").getAttribute("data-link-tracking-params"))}catch(t){}return o=Object(k.a)("".concat(window.HUFFPOST.params.signUpUrl).concat(encodeURIComponent("#comments")),e.commentSignUp),i=Object(k.a)("".concat(window.HUFFPOST.params.signInUrl).concat(encodeURIComponent("#comments")),e.commentSignIn),document.addEventListener("spot-im-login-start",(function(t){window.HUFFPOST.params.signInUrl&&(window.location=i)})),document.addEventListener("spot-im-signup-start",(function(t){window.HUFFPOST.params.signUpUrl&&(window.location=o)})),t.next=8,Object(_.a)();case 8:r=t.sent,s=!r,document.addEventListener("spot-im-api-ready",(function(){s?window.SPOTIM.logout().then((function(){a()})).catch((function(t){console.error("Could not log out stale spotIM user session: ".concat(t))})):a()}),!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E=function(t){p()(e,t);var n=function(t){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var e,o=f()(t);if(n()){var i=f()(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return l()(this,e)}}(e);function e(){var t;return i()(this,e),(t=n.call(this)).container=null,t.initTask=null,t}return s()(e,[{key:"componentDidMount",value:function(){var t=this;this.props.delay?this.initTask=setTimeout((function(){t.initConversation(t.props),t.initTask=null}),this.props.delay):this.initConversation(this.props)}},{key:"spotImModulesLoad",value:function(){var t=document.body.querySelector('div[data-spotim-module="conversation"]');t&&!t.hasChildNodes()&&(window.__OPEN_WEB__?window.__OPEN_WEB__.initOW():window.waitForGlobalCambria((function(){return window.__OPEN_WEB__}),(function(){window.__OPEN_WEB__.initOW()})))}},{key:"initConversation",value:function(t){var n=t.spotId,e=t.postId,o=t.postUrl,i=t.disqusIdentifier,r=t.disqusUrl,s=t.enableSeo,a=t.messagesCount,c=t.articleTags,u=t.editionId,p=t.isSSO;if(this.container)if(t.spotId)if(t.postId)if(t.postUrl)if(window&&window.document){p&&function(t){T.apply(this,arguments)}(u);var d=document.createElement("script");d.setAttribute("async","async"),d.setAttribute("src","https://launcher.spot.im/spot/".concat(n)),d.setAttribute("data-spotim-module","spotim-launcher"),d.setAttribute("data-post-id",e),d.setAttribute("data-post-url",o),d.setAttribute("data-facebook-url",o),d.setAttribute("data-spotim-autorun","false"),i&&d.setAttribute("data-disqus-identifier",i),r&&d.setAttribute("data-disqus-url",r),s&&d.setAttribute("data-seo-enabled",s),a&&d.setAttribute("data-messages-count",a),c&&d.setAttribute("data-article-tags",c);var l=document.createElement("div");l.setAttribute("data-post-id",e),l.setAttribute("data-spotim-module","conversation"),this.container.appendChild(l),console.log("[SPOT.IM] appending launcher"),window.document.body.appendChild(d)}else console.warn("SpotIMConversation: this component supports client only");else console.warn("SpotIMConversation: missing Post URL");else console.warn("SpotIMConversation: missing Post ID");else console.warn("SpotIMConversation: missing Spot ID");else console.warn("SpotIMConversation: missing container")}},{key:"destroyConversation",value:function(){return this.container?(this.container.innerHTML="",!0):(console.warn("SpotIMConversation: missing container"),!1)}},{key:"componentWillReceiveProps",value:function(t){var n=this.props,e=n.spotId,o=n.postId,i=n.opened,r=t.spotId,s=t.postId,a=t.opened;if(this.initTask&&!i&&a)this.triggerLoad=!0,clearTimeout(this.initTask),this.initConversation(this.props);else if(!i&&a)this.spotImModulesLoad();else if(e!==r||o!==s){this.destroyConversation()&&this.initConversation(t)}}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var t=this,n=this.props.linkTrackingParams;return v.a.createElement("div",{className:"comments__container",ref:function(n){return t.container=n},"data-link-tracking-params":JSON.stringify(n)})}}]),e}(v.a.Component),P=e(17);var R=function(t){p()(e,t);var n=function(t){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var e,o=f()(t);if(n()){var i=f()(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return l()(this,e)}}(e);function e(t){var o;return i()(this,e),(o=n.call(this,t)).state={isOpen:!1,hasOpened:!1},o.openComments=o.openComments.bind(c()(o)),o.closeComments=o.closeComments.bind(c()(o)),o}return s()(e,[{key:"componentDidMount",value:function(){-1===document.location.hash.indexOf("#comments")&&-1===document.location.search.indexOf("spot_im_highlight_immediate=true")||this.openComments(),document.addEventListener("open-comments",this.openComments),document.addEventListener("close-comments",this.closeComments)}},{key:"openComments",value:function(){this.setState({isOpen:!0,hasOpened:!0}),-1===document.location.hash.indexOf("#comments")&&(document.location.hash=document.location.hash.concat("#comments")),Object(P.a)("fireCommentsPV")}},{key:"closeComments",value:function(){this.setState({isOpen:!1}),window.RapidInstance&&this.props.isSSO&&window.RapidInstance.beaconClick("article-comments","close","1",{subsec:"comments-pane",itc:1,elm:"btn"}),document.location.hash=document.location.hash.replace(/#comments/g,"")}},{key:"render",value:function(){var t=this.props,n=t.entryId,e=t.spotId,o=t.pullOut,i=t.editionId,r=t.isSSO,s=t.entryUrl,a=t.linkTrackingParams,c=o?["pull-out",this.state.isOpen?"open":"closed"]:[];return v.a.createElement("div",{"aria-hidden":"true",id:"comments",className:Object(O.b)("comments",c)},o&&v.a.createElement("button",{className:"comments__close",onClick:this.closeComments},"×"),v.a.createElement(E,{spotId:e,postId:n,postUrl:s,editionId:i,isSSO:r,opened:this.state.hasOpened,linkTrackingParams:a}))}}]),e}(v.a.Component);R.propTypes={entryId:w.a.string.isRequired,entryUrl:w.a.string.isRequired,spotId:w.a.string.isRequired,pullOut:w.a.bool,editionId:w.a.string.isRequired,isSSO:w.a.bool.isRequired,linkTrackingParams:w.a.shape({commentSignIn:w.a.shape({}).isRequired,commentSignUp:w.a.shape({}).isRequired}).isRequired},R.defaultProps={pullOut:!1};n.default=R},17:function(t,n,e){"use strict";var o=function(){try{return new CustomEvent("test"),!0}catch(t){return!1}}(),i=function(t,n){if(!o){var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}return new CustomEvent(t,{detail:n})};n.a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,o=i(t,n);return e.dispatchEvent(o)}},179:function(t,n,e){t.exports=e(292)()},187:function(t,n){function e(){return t.exports=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},e.apply(this,arguments)}t.exports=e},223:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return p}));var o=e(187),i=e.n(o),r=e(3),s=e.n(r),a=e(27);Object(a.defineMessages)({COPYRIGHT:{id:"COPYRIGHT",defaultMessage:"Part of {comscoreFooterText}. ©{year} BuzzFeed, Inc. All rights reserved."}});var c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=n.filter((function(t){return t})).map((function(n){return"".concat(t,"--").concat(n)}));return e.unshift(t),e.join(" ")},u=function(t,n,e,o){return n?s.a.createElement("a",i()({href:t},e),o):o},p=function(t){var n=t.condition,e=t.wrap,o=t.children,i=t.wrapElse;return n?e(o):i?i(o):o}},224:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},225:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},292:function(t,n,e){"use strict";var o=e(293);function i(){}t.exports=function(){function t(t,n,e,i,r,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return e.checkPropTypes=i,e.PropTypes=e,e}},293:function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},511:function(t,n,e){var o=e(224),i=e(528),r=e(225);t.exports=function(t,n){return o(t)||i(t,n)||r()}},528:function(t,n){t.exports=function(t,n){var e=[],o=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return e}},586:function(t,n,e){"use strict";var o=e(511),i=e.n(o);n.a=function(t,n){var e=t.split("?"),o=i()(e,2),r=o[0],s=o[1],a=new URLSearchParams(void 0===s?"":s);return n&&Object.entries(n).forEach((function(t){var n=i()(t,2),e=n[0],o=n[1];a.set(e,o)})),"".concat(r).concat(a.toString()?"?":"").concat(a)}}}]);
//# sourceMappingURL=Comments.211f9ed12dc20f8283af.js.map