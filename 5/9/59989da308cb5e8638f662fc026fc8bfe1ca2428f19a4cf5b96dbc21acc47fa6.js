;/*FB_PKG_DELIM*/

__d("OnUseEffectMount.react",["react"],(,98);
__d("createTooltipPortal",["ReactDOM","react"],(,98);
__d("Tooltip.react",["Arbiter","OnUseEffectMount.react","OnUseEffectUnmount.react","ReactDOM","SubscriptionsHandler","TooltipData","createTooltipPortal","ifRequired","killswitch","react"],(,98);
__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(,null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(,98);
__d("ReactionIconClassNames",["cx"],(function(a,b,c,d,e,f,g,h){"use strict";a="_9zc";b="_2p78";c="_8382";d={like:"_3j7l",love:"_3j7m",anger:"_3j7q",wow:"_3j7n",haha:"_3j7o",sorry:"_3j7r",yay:"_3j7p",confused:"_3j7s",dorothy:"_3rya",toto:"_4aou",flame:"_3qr6",plane:"_4vps",support:"_906t"};e={14:"_8383",16:"_9--",18:"_19kl",20:"_7tr3",48:"_9-_",96:"_9_0"};g.root=a;g.icon=b;g.menuIcon=c;g.reactions=d;g.sizes=e}),98);
__d("UFIReactionIconImpl.react",["FeedbackReactionTypeNames","ReactionIconClassNames","joinClasses","react"],(function(a,b,c,d,e,f,g){var h,i=h||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.shouldComponentUpdate=function(a){return a.className!==this.props.className||a.reaction!==this.props.reaction||a.size!==this.props.size||a.grayscale!==this.props.grayscale};e.renderImage=function(){var a=c("FeedbackReactionTypeNames")[this.props.reaction].toLowerCase();return i.jsx("i",{className:c("joinClasses")(d("ReactionIconClassNames").reactions[a],d("ReactionIconClassNames").icon,d("ReactionIconClassNames").sizes[this.props.size])})};e.render=function(){return i.jsx("span",{className:c("joinClasses")(d("ReactionIconClassNames").root,d("ReactionIconClassNames").sizes[this.props.size],this.props.className),children:this.renderImage()})};return b}(i.Component);a.defaultProps={className:null,grayscale:!1,size:"16"};g["default"]=a}),98);
__d("AssertionError",["ManagedError"],(,98);
__d("Assert",["AssertionError","sprintf"],(,98);
__d("ObservableMixin",[],(,null);
__d("Type",["Assert"],(,null);
__d("sdk.Model",["ObservableMixin","Type"],(,98);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(,98);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(,98);
__d("sdk.Scribe",["QueryString","UrlMap","sdk.Runtime"],(,98);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(,98);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(,98);
__d("AsyncData",["cr:696703"],(,98);
__d("AsyncDataPreloader",["AsyncData","isEmptyObject"],(,98);
__d("StrSet",[],(,66);
__d("useJSON",["react"],(,98);
__d("getUniformDispatcher",["invariant"],(,98);
__d("FluxContainerSubscriptions",["expectationViolation","getUniformDispatcher","nullthrows","shallowArrayEqual"],(,98);
__d("FluxContainer",["FBLogger","FluxContainerNameUtils","FluxContainerSubscriptions","cr:1609","err","gkx","react","setImmediate","shallowEqual","warning"],(,98);
__d("Clipboard",["Promise","UserAgent"],(,98);