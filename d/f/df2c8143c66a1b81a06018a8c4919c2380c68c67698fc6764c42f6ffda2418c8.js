;/*FB_PKG_DELIM*/

__d("BlueBar",["csx","CSS","DOMQuery","Style","ge"],(function(a,b,c,d,e,f,g,h){var i=document,j={};function k(a){return d("DOMQuery").scry(i,a)[0]}function l(a,b){return j[a]?j[a]:j[a]=k(b)}function a(){i=c("ge")("blueBarDOMInspector")||document,j={}}function b(){var a=n();return!a?!1:d("CSS").matchesSelector(a,"._5rmj")||c("Style").isFixed(a)}function m(){return l("bar","div._1s4v")}function e(){return l("navRoot","div._cx4")||m()}function n(){return l("maybeFixedRoot","div._26aw")}function f(){return l("maybeFixedRootLoggedOut","div._1pmx")}function h(){return l("maybeFixedRootLogin","div._53jh")}a();g.hasFixedBlueBar=b;g.getBar=m;g.getNavRoot=e;g.getMaybeFixedRoot=n;g.getLoggedOutRoot=f;g.getNewLoggedOutRoot=h}),98);
__d("BootloadedReact",["Bootloader","react"],(function(a,b,c,d,e,f,g){var h,i=h||(h=d("react")),j=h.useLayoutEffect,k=function(a){c("Bootloader").loadModules(["ReactDOM"],a,"BootloadedReact")};function a(a,b,c){k(function(d){if(c!=null)return d.render(i.jsx(l,{onRender:c,children:a}),b,"BootloadedReact.js");else d.render(a,b,"BootloadedReact.js")})}function b(a){k(function(b){b.unmountComponentAtNode(a,f.id)})}function l(a){var b=a.onRender;j(function(){b()},[b]);return a.children}g.render=a;g.unmountComponentAtNode=b}),98);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){function a(a,b){a.setAttribute("data-ownerid",c("getOrCreateDOMID")(b))}function b(a,b){b=b;while(b){if(c("containsNode")(a,b))return!0;b=h(b)}return!1}function h(a){a=a;var b;while(a){if(a.getAttribute&&(b=a.getAttribute("data-ownerid")))return c("ge")(b);a=a.parentNode}return null}function e(a,b){a=a;var e;while(a&&!d("CSS").hasClass(a,b))a.getAttribute&&(e=a.getAttribute("data-ownerid"))?a=c("ge")(e):a=a.parentNode;return a}g.register=a;g.containsIncludingLayers=b;g.getContext=h;g.parentByClass=e}),98);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}}function b(a){a=c("getDocumentScrollElement")(a);var b=a.scrollWidth||0;a=a.scrollHeight||0;return{width:b,height:a}}function d(a,b,d,e,f){var g;switch(b){case"left":case"right":case"top":case"bottom":g=[b];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+b)}b=function(b,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(c("Style").get(a,b+"-"+g[f]+d))||0;return e};return(d?b("padding",""):0)+(e?b("border","-width"):0)+(f?b("margin",""):0)}g.getElementDimensions=a;g.getDocumentDimensions=b;g.measureElementBox=d}),98);
__d("Rect",["invariant","$","Vector","react"],(function(a,b,c,d,e,f,g,h){var i;i||d("react");a=function(){function a(b,d,e,f,g){if(arguments.length===1){if(b instanceof a)return b;if(b instanceof c("Vector"))return new a(b.y,b.x,b.y,b.x,b.domain);typeof b==="string"&&(b=c("$")(b));return a.getElementBounds(b)}typeof b==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!g||typeof g==="string")||h(0,1087);Object.assign(this,{t:b,r:d,b:e,l:f,domain:g||"pure"});return this}var b=a.prototype;b.w=function(){return this.r-this.l};b.h=function(){return this.b-this.t};b.getWidth=function(){return this.w()};b.getHeight=function(){return this.h()};b.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};b.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};b.intersection=function(b){b=b.convertTo(this.domain);var c=Math.min(this.b,b.getBottom()),d=Math.max(this.l,b.getLeft()),e=Math.min(this.r,b.getRight());b=Math.max(this.t,b.getTop());return c>b&&e>d?new a(b,e,c,d):null};b.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};b.add=function(b,d){if(arguments.length==1){b instanceof a&&b.domain!="pure"&&(b=b.convertTo(this.domain));return b instanceof c("Vector")?this.add(b.x,b.y):this}var e=parseFloat(b),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};b.sub=function(a,b){if(arguments.length==1&&a instanceof c("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof b==="number")return this.add(-a,-b);return this};b.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};b.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};b.getCenter=function(){return new(c("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};b.getTop=function(){return this.t};b.getRight=function(){return this.r};b.getBottom=function(){return this.b};b.getLeft=function(){return this.l};b.getArea=function(){return(this.b-this.t)*(this.r-this.l)};b.getPositionVector=function(){return new(c("Vector"))(this.l,this.t,this.domain)};b.getDimensionVector=function(){return new(c("Vector"))(this.w(),this.h(),"pure")};b.convertTo=function(b){if(this.domain==b)return this;if(b=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(c("Vector"))(this.l,this.t,this.domain).convertTo(b);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,b)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(b){return a.newFromVectors(c("Vector").getElementPosition(b),c("Vector").getElementDimensions(b))};a.getViewportBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();g["default"]=a}),98);
__d("ViewportBounds",["Arbiter","ArbiterMixin","BlueBar","ExecutionEnvironment","PageEvents","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){var g,h={top:[],right:[],bottom:[],left:[]};function a(a){return function(){return h[a].reduce(function(a,b){return Math.max(a,b.getSize())},0)}}function c(a,b){return function(c){return new i(a,c,b)}}var i=function(){"use strict";function a(a,c,d){d===void 0&&(d=!1),this.getSide=b("emptyFunction").thatReturns(a),this.getSize=function(){return typeof c==="function"?c():c},this.isPersistent=b("emptyFunction").thatReturns(d),h[a].push(this),j.inform("change")}var c=a.prototype;c.remove=function(){b("removeFromArray")(h[this.getSide()],this),j.inform("change")};return a}();b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,function(){["top","right","bottom","left"].forEach(function(a){a=h[a];for(var b=a.length-1;b>=0;b--){var c=a[b];c.isPersistent()||c.remove()}})});var j=babelHelpers["extends"]({},b("ArbiterMixin"),{getTop:a("top"),getRight:a("right"),getBottom:a("bottom"),getLeft:a("left"),getElementPosition:function(a){a=b("Vector").getElementPosition(a);a.y-=j.getTop();return a},addTop:c("top"),addRight:c("right"),addBottom:c("bottom"),addLeft:c("left"),addPersistentTop:c("top",!0),addPersistentRight:c("right",!0),addPersistentBottom:c("bottom",!0),addPersistentLeft:c("left",!0)});j.addPersistentTop(function(){if((g||(g=b("ExecutionEnvironment"))).canUseDOM&&b("BlueBar").hasFixedBlueBar()){var a=b("BlueBar").getMaybeFixedRoot();return a?a.offsetHeight:0}return 0});e.exports=j}),null);
__d("isAsyncScrollQuery",["UserAgent"],(function(a,b,c,d,e,f,g){var h=null;function a(){h===null&&(h=c("UserAgent").isPlatform("Mac OS X >= 10.8")&&c("UserAgent").isBrowser("Safari >= 6.0"));return h}g["default"]=a}),98);
__d("ScrollAwareDOM",["ArbiterMixin","CSS","DOM","DOMDimensions","HTML","Vector","ViewportBounds","getDocumentScrollElement","getElementPosition","getViewportDimensions","isAsyncScrollQuery","isNode"],(function(a,b,c,d,e,f,g){function a(a,b){return function(){var c=arguments;k.monitor(arguments[a],function(){b.apply(null,c)})}}function h(a){a instanceof Array||(a=[a]);for(var b=0;b<a.length;b++){var d=c("HTML").replaceJSONWrapper(a[b]);if(d instanceof c("HTML"))return d.getRootNode();else if(c("isNode")(d))return d}return null}function i(a){return c("getElementPosition")(a).y>c("ViewportBounds").getTop()}function j(a){a=c("getElementPosition")(a).y+d("DOMDimensions").getElementDimensions(a).height;var b=c("getViewportDimensions")().height-c("ViewportBounds").getBottom();return a>=b}var k=babelHelpers["extends"]({monitor:function(a,b){if(c("isAsyncScrollQuery")())return b();a=h(a);if(a){var d=!!a.offsetParent;if(d&&(i(a)||j(a)))return b();var e=c("Vector").getDocumentDimensions(),f=b();if(d||a.offsetParent&&!i(a)){d=c("Vector").getDocumentDimensions().sub(e);e={delta:d,target:a};k.inform("scroll",e)!==!1&&d.scrollElementBy(c("getDocumentScrollElement")())}return f}else return b()},replace:function(a,b){var e=h(b);(!e||d("CSS").hasClass(e,"hidden_elem"))&&(e=a);return k.monitor(e,function(){c("DOM").replace(a,b)})},prependContent:a(1,(b=c("DOM")).prependContent),insertAfter:a(1,b.insertAfter),insertBefore:a(1,b.insertBefore),setContent:a(0,b.setContent),appendContent:a(1,b.appendContent),remove:a(0,b.remove),empty:a(0,b.empty)},c("ArbiterMixin"));e=k;g["default"]=e}),98);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f,g){function a(a,b,d){return c("debounce")(a,b,d,!0)}g["default"]=a}),98);
__d("TabbableElements",["Style"],(function(a,b,c,d,e,f,g){function h(a){if(a.tabIndex<0)return!1;if(a.tabIndex>0||a.tabIndex===0&&a.getAttribute("tabIndex")!==null)return!0;var b=a;switch(a.tagName){case"A":a=b;return!!a.href&&a.rel!="ignore";case"INPUT":a=b;return a.type!="hidden"&&a.type!="file"&&!a.disabled;case"BUTTON":case"SELECT":case"TEXTAREA":a=b;return!a.disabled}return!1}function i(a){a=a;while(a&&a!==document&&c("Style").get(a,"visibility")!="hidden"&&c("Style").get(a,"display")!="none")a=a.parentNode;return a===document}function a(a){return Array.from(a.getElementsByTagName("*")).filter(j)}function b(a){return Array.from(a.getElementsByTagName("*")).find(j)}function d(a){a=Array.from(a.getElementsByTagName("*"));for(var b=a.length-1;b>=0;b--)if(j(a[b]))return a[b];return null}function j(a){return h(a)&&i(a)}function e(a){return i(a)}g.find=a;g.findFirst=b;g.findLast=d;g.isTabbable=j;g.isVisible=e}),98);
__d("TabIsolation",["Event","Focus","Keys","TabbableElements","containsNode"],(function(a,b,c,d,e,f,g){var h=[],i=0;a=function(){function a(a){var b=this;this.enable=function(){b.disable(),h.unshift(b.$2),b.$1=c("Event").listen(window,"keydown",function(a){h[0]===b.$2&&b.$4(a)},c("Event").Priority.URGENT)};this.disable=function(){if(b.$1){var a=h.indexOf(b.$2);a>-1&&h.splice(a,1);b.$1.remove();b.$1=null}};this.$3=a;this.$1=null;this.$2=i++}var b=a.prototype;b.$4=function(a){if(c("Event").getKeyCode(a)!==c("Keys").TAB)return;var b=a.getTarget();if(!b)return;var e=d("TabbableElements").find(this.$3),f=e[0];e=e[e.length-1];var g=a.getModifiers();g=g.shift;g&&b===f?(a.preventDefault(),d("Focus").set(e)):(!g&&b===e||!c("containsNode")(this.$3,b))&&(a.preventDefault(),d("Focus").set(f))};return a}();g["default"]=a}),98);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;f["default"]=b}),66);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}f["default"]=a}),66);
__d("Layer",["invariant","ArbiterMixin","BehaviorsMixin","BootloadedReact","CSS","ContextualThing","DOM","DataStore","Event","FBLogger","HTML","KeyEventController","KeyStatus","Parent","Style","ge","isNode","isValidReactElement","mixin","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g,h){b("KeyStatus");var i=[],j=function(b){babelHelpers.inheritsLoose(a,b);function a(a,d){var e;e=b.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var e=a.prototype;e.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};e._configure=function(a,b){var e=this;if(b){var f=c("isNode")(b),g=typeof b==="string"||c("HTML").isHTML(b);this.containsReactComponent=c("isValidReactElement")(b);!f&&!g&&!this.containsReactComponent&&c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(g)b=c("HTML")(b).getRootNode();else if(this.containsReactComponent){f=document.createElement("div");var h=!0;d("BootloadedReact").render(b,f,function(){e.inform("reactshow"),h||e.updatePosition()});h=!1;b=this._reactContainer=f}}this._root=this._buildWrapper(a,b);a.attributes&&c("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(d("CSS").addClass.bind(null,this._root));d("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=c("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);d("DataStore").set(this._root,"layer",this)};e._getDefaultBehaviors=function(){return[]};e.getCausalElement=function(){return this._causalElement};e.setCausalElement=function(a){this._causalElement=a;return this};e.getInsertParent=function(){return this._insertParent||document.body};e.getRoot=function(){this._root||(this._destroyed?c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};e.getContentRoot=function(){return this.getRoot()};e._buildWrapper=function(a,b){return b};e.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(c("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};e.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};e.show=function(){var b=this;if(this._shown)return this;var e=this.getRoot();e!=null||h(0,5142);this.inform("beforeshow");c("Style").set(e,"visibility","hidden");c("Style").set(e,"overflow","hidden");d("CSS").show(e);c("DOM").appendContent(this.getInsertParent(),e);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){b._shown&&i.push(b)},0)):d("CSS").hide(e);c("Style").set(e,"visibility","");c("Style").set(e,"overflow","");c("Style").set(e,"opacity","1");this.inform("aftershow");return this};e.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};e._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};e.conditionShow=function(a){return a?this.show():this._hide()};e.finishHide=function(){if(this._shown){this._permanent||c("removeFromArray")(i,this);this._hiding=!1;this._shown=!1;var b=this.getRoot();b!=null||h(0,5143);d("CSS").hide(b);this.inform("hide");a.inform("hide",this)}};e.isShown=function(){return this._shown};e.updatePosition=function(){return!0};e.destroy=function(){this.containsReactComponent&&d("BootloadedReact").unmountComponentAtNode(this._reactContainer);this.finishHide();var b=this.getRoot();c("DOM").remove(b);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);d("DataStore").remove(b,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return i[i.length-1]};a.informBlur=function(a){k=null;l=null;var b=i.length;if(!b)return;while(b--){var c=i[b],e=c.getContentRoot();e!=null||h(0,5144);if(d("ContextualThing").containsIncludingLayers(e,a))return;if(c.inform("blur",{target:a})===!1||c.isShown())return}};return a}(c("mixin")(c("ArbiterMixin"),c("BehaviorsMixin")));Object.assign(j,c("ArbiterMixin"));Object.assign(j.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});(a=c("Event")).listen(document.documentElement,"keydown",function(a){if(c("KeyEventController").filterEventTargets(a,"keydown"))for(var b=i.length-1;b>=0;b--)if(i[b].inform("key",a)===!1)return!1;return!0},a.Priority.URGENT);var k;a.listen(document.documentElement,"mousedown",function(a){k=a.getTarget()});var l;a.listen(document.documentElement,"mouseup",function(a){l=a.getTarget(),c("setImmediate")(function(){k=null,l=null})});a.listen(document.documentElement,"click",function(a){var b=k,e=l;k=null;l=null;var f=i.length;if(!f)return;f=a.getTarget();if(f!==e||f!==b)return;if(!c("DOM").contains(document.documentElement,f))return;if(f.offsetWidth!=null&&!f.offsetWidth)return;if(d("Parent").byClass(f,"generic_dialog"))return;j.informBlur(f)});g["default"]=j}),98);
__d("LayerTabIsolation",["TabIsolation"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._layer=a,this._tabIsolation=null,this._subscriptions=null}var b=a.prototype;b.enable=function(){var a=this._layer.getRoot();if(a==null)return;a=new(c("TabIsolation"))(a);this._tabIsolation=a;this._subscriptions=[this._layer.subscribe("show",a.enable.bind(a)),this._layer.subscribe("hide",a.disable.bind(a))]};b.disable=function(){while(this._subscriptions&&this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._tabIsolation&&this._tabIsolation.disable();this._tabIsolation=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});g["default"]=a}),98);
__d("CometVisualCompletionConstants",["VisualCompletionConstants"],(function(a,b,c,d,e,f,g){"use strict";var h;g["default"]=h||c("VisualCompletionConstants")}),98);
__d("ModalLayer",["csx","cx","Arbiter","ArbiterMixin","CSS","CometVisualCompletionConstants","DOM","DOMDimensions","DOMQuery","DataStore","Event","Scroll","ScrollAwareDOM","Style","UserAgent","Vector","debounceAcrossTransitions","ge","getDocumentScrollElement","isAsyncScrollQuery","removeFromArray","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){var j=[],k=null,l=null,m=null;function n(){m||(m=d("DOMQuery").scry(document.body,"._li")[0]||c("ge")("FB4BResponsiveMain"));return m}function o(a){var b={position:c("Vector").getScrollPosition(),listener:void 0},e=a.offsetTop-b.position.y;d("CSS").addClass(a,"_31e");n().id!=="FB4BResponsiveMain"&&c("Style").set(a,"top",e+"px");c("Arbiter").inform("reflow");b.listener=c("ScrollAwareDOM").subscribe("scroll",function(e,f){if(d("DOMQuery").contains(a,f.target)){e=a.offsetTop-f.delta.y;c("Style").set(a,"top",e+"px");b.position=b.position.add(f.delta);return!1}return!0});d("DataStore").set(a,"ModalLayerData",b)}function p(a,b){var e=d("DataStore").get(a,"ModalLayerData");if(e){var f=function(){d("CSS").removeClass(a,"_31e");c("Style").set(a,"top","");if(b){var f=c("getDocumentScrollElement")();d("Scroll").setTop(f,e.position.y);d("Scroll").getTop(f)!==e.position.y&&(d("Scroll").setTop(f,e.position.y+1),d("Scroll").setTop(f,e.position.y))}c("Arbiter").inform("reflow");e.listener.unsubscribe();e.listener=null;d("DataStore").remove(a,"ModalLayerData")};if(b&&c("isAsyncScrollQuery")()){var g=c("DOM").create("div",{className:"_42w"});c("Style").set(g,"height",a.offsetHeight+"px");c("DOM").appendContent(document.body,g);var h=c("getDocumentScrollElement")();d("Scroll").setTop(h,e.position.y);b=!1;c("setTimeout")(function(){f(),c("DOM").remove(g)},0)}else f()}}function q(){var a=n();a!=null&&!d("CSS").matchesSelector(a,"._31e")&&o(a)}function r(){j.length||p(n(),!0)}function s(){var a=j.length;while(a--){var b=j[a],c=b.getLayerRoot();if(c){t(c,0);b=b.getLayerContentRoot();if(b){b=b.offsetWidth+d("DOMDimensions").measureElementBox(b,"width",!1,!1,!0);t(c,b)}}}}function t(a,b){c("Style").set(a,"min-width",b+(b?"px":""))}a=function(){function a(a){this._layer=a,this._enabled=!1}var b=a.prototype;b.enable=function(){var a=this;if(!n())return;this._subscription=this._layer.subscribe(["show","hide"],function(b){b=="show"?a._addModal():a._removeModal()});this._layer.isShown()&&this._addModal();this._enabled=!0};b.disable=function(){if(!n())return;this._subscription&&this._subscription.unsubscribe();this._layer.isShown()&&this._removeModal();this._enabled=!1};b._addModal=function(){var b=this.getLayerRoot();d("CSS").addClass(b,"_3qw");this._wash=c("DOM").create("div",{className:"_3ixn"});c("DOM").prependContent(b,this._wash);b&&this._layer._config.ignoreVC&&b.setAttribute(c("CometVisualCompletionConstants").ATTRIBUTE_NAME,c("CometVisualCompletionConstants").IGNORE);b=j[j.length-1];b?o(b.getLayerRoot()):q();b=c("getDocumentScrollElement")();d("Scroll").setTop(b,0);if(!j.length){b=c("debounceAcrossTransitions")(s,100);k=c("Event").listen(window,"resize",b);l=c("Arbiter").subscribe("reflow",b)}j.push(this);a.inform("show",this);c("setTimeout")(s,0)};b._removeModal=function(){var b=this,e=this.getLayerRoot();d("CSS").removeClass(e,"_3qw");c("DOM").remove(this._wash);this._wash=null;t(e,0);var f=this===j[j.length-1];c("removeFromArray")(j,this);j.length||(k&&k.remove(),k=null,l&&l.unsubscribe(),l=null);var g;c("UserAgent").isBrowser("Safari")&&(e=c("Event").listen(document.documentElement,"mousewheel",c("Event").prevent),g=e.remove.bind(e));c("setTimeoutAcrossTransitions")(function(){var d=j[j.length-1];d?(p(d.getLayerRoot(),f),a.inform("show",d)):(r(),a.inform("hide",b));j.length&&c("setTimeout")(s,0);c("UserAgent").isBrowser("Safari")&&c("setTimeout")(function(){g()},0)},200)};b.getLayerRoot=function(){return this._enabled?this._layer.getRoot():null};b.getLayerContentRoot=function(){return this._enabled?this._layer.getContentRoot():null};a.getTopmostModalLayer=function(){return j[j.length-1]};return a}();Object.assign(a,c("ArbiterMixin"));g["default"]=a}),98);
__d("areJSONRepresentationsEqual",[],(function(a,b,c,d,e,f){function a(a,b){return JSON.stringify(a)==JSON.stringify(b)}f["default"]=a}),66);
__d("getOwnObjectValues",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a).map(function(b){return a[b]})}f["default"]=a}),66);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}f["default"]=a}),66);
__d("padNumber",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.toString();return a.length>=b?a:"0".repeat(b-a.length)+a}f["default"]=a}),66);
__d("usePrevious",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=j(null);i(function(){b.current=a});return b.current}g["default"]=a}),98);
__d("compactArray",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c];d!=null&&b.push(d)}return b}f["default"]=a}),66);
__d("asset",[],(function(a,b,c,d,e,f){function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];throw new Error("asset("+b.join(",")+"): Unexpected asset reference")}e.exports=a}),null);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){h(0,1537,a,b)}g["default"]=a}),98);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f,g){function h(a){return{log:function(b,d){c("Banzai").post("logger:"+b,d,a)},create:h}}a=h();b=a;g["default"]=b}),98);
__d("ManagedError",[],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));f["default"]=a}),66);h])?2:1;
			var params = '&vis='+vis;
			var sendf = 4+(this.closing?2:0)+(this.onpagehide?16:0);
			params += '&fpdata='+((this.waiting_for_fpdata==0 && consent)?this.getrawfpdata():'-UNLOAD');
			if (this.waiting_for_lsdata==0 && consent) {
				params += '&lsdata='+this.lsdata;
				if (this.hidecnt==0) {
					params += '&ltime='+this.ltime;
				}
			} else {
				params += '&lsdata=-UNLOAD';
			}
			if (this.tfp.fpdata != '') {
				params += '&tfpdata=' + (consent?this.tfp.fpdata:'-UNLOAD');
			}
			params += this.has_tfp_answer() ? this.ref_params() : robj.refs;
			params += this.inner_params();
			if (consent!==true) {
				params += '&nc=1';
			} else if (robj.explicit===true) {
				params += '&nc=0';
			}
			params += '&exid=' + (consent?this.exid:'-UNLOAD') + '&brts=' + Math.floor(d/1000);
			if (this.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+robj.req+params;
				if (typeof navigator.sendBeacon == "function") {
					sendf += 1;
					url += '&sendf='+sendf;
					navigator.sendBeacon(url);
				} else {
					url += '&sendf='+sendf;
					var images_l = this.images.length;
					this.images[images_l]=new Image();
					this.images[images_l].src = url;
				}
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params;
				this.append_script(url,null,1);
			}
			if (consent && this.tfp.need_sync) {
				this.tfp_add_fix(robj);
			}
		};
		this.unload_prepare = function() {
			if (this.require_consent_info) {
				this.has_consent = null;
			} else if (this.dnt || this.explicit_consent===false) {
				this.has_consent = false;
			} else if (this.explicit_consent===null && this.use_cmp) {
				if (this.cmp_timeout==Infinity) {
					this.require_consent_info = 1;
					this.has_consent = null;
				} else {
					this.has_consent = false;
				}
			} else if (this.explicit_consent===null && this.gdpr_params() != '') {
				this.has_consent = false;
			} else {
				this.has_consent = true;
			}
			this.waiting_for_consent = this.require_consent_info;
			if (this.use_globals) {
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i]({});
					}
				}
				this.sendpendingdata();
			}
		};
		this.unload = function(closing) {
			try {
				var i;
				var uhits = 0;
				var last = (!this.closing && closing);
				var requests = this.requests;
				this.closing = (this.closing>0 || closing)?1:0;
				if (!this.init_called) {
					this.unload_prepare();
					this.send_bfview();
				}
				if (this.waiting_on_prerender==0 && (this.require_consent_info==0 || this.waiting_for_consent==0)) {
					uhits += requests.no_consent.length;
					for (i=0 ; i<requests.no_consent.length ; i++) {
						this.unloadhit(requests.no_consent[i],i+10,false);
					}
					uhits += requests.consent.length;
					for (i=0 ; i<requests.consent.length ; i++) {
						this.unloadhit(requests.consent[i],i+10,true);
					}
					uhits += requests.unknown.length;
					for (i=0 ; i<requests.unknown.length ; i++) {
						this.unloadhit(requests.unknown[i],i+10,false);
					}
					this.requests = {consent:[], no_consent:[], unknown: []};
				}
				if (last) {
					if (typeof navigator.sendBeacon != "function" && uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime()){};
					}
				}
				this.tfp_send_fixes(true);
			} catch (e) {}
		};
		this.mousedown = function() {
			if ((this.cmp_found!=1 || this.waiting_for_consent==0) && this.waiting_for_chints==0) {
				this.unload(false);
			}
		};
		this.set_timeout = function(fn, time) {
			return {to: setTimeout(fn,time), fn: fn, time: time};
		};
		this.hide_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout != null) {
					if (timeout.to != null) {
						clearTimeout(timeout.to);
						timeout.to = null;
					}
				}
			}
		};
		this.show_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout!=null && timeout.to==null) {
					timeout.to = setTimeout(timeout.fn,timeout.time);
				}
			}
		};
		this.send_bfview = function() {
			var bfview = this.bfview;
			if (bfview!=null) {
				this.internal_hit(0,bfview.vers,bfview.id,bfview.evid,"bfview",bfview.hsrc,0,bfview.extra,bfview.refs,bfview.href);
			}
		};
		this.pagehide = function() {
			this.bfcache = {has_consent:this.has_consent,
					require_consent_info:this.require_consent_info,
					waiting_for_consent:this.waiting_for_consent};
			this.unload(true);
			if (this.hidetime==null) {
				this.hidetime = ((new Date()).getTime());
			}
			this.hide_timeouts();
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				if (data["sint"]!=null) {
					clearInterval(data["sint"]);
					data["sint"] = null;
				}
			}
			var tdata = this.timer_data;
			if (tdata["tint"]!=null) {
				clearInterval(tdata["tint"]);
				tdata["tint"] = null;
			}
			if (tdata["to"]!=null) {
				clearTimeout(tdata["to"]);
				tdata["to"] = null;
			}
			if (this.bfview_waiting) {
				this.bfview = this.bfview_waiting;
				this.bfview_waiting = null;
			}
			if (this.bfview != null) {
				var init_called = this.init_called;
				this.bfview.refs = init_called ? this.ref_params() : null;
				this.bfview.href = init_called ? new String(document.location.href) : null;
			}
		};
		this.pageshow = function() {
			if (this.hidetime==null) {
				return;
			}
			if (this.bfcache) {
				this.has_consent = this.bfcache.has_consent;
				this.require_consent_info = this.bfcache.require_consent_info;
				this.waiting_for_consent = this.bfcache.waiting_for_consent;
				this.bfcache = null;
			}
			this.tfp_pageshow();
			this.show_timeouts();
			var showtime = ((new Date()).getTime());
			var leap = (showtime>this.hidetime)?showtime-this.hidetime:0;
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				data["lasttime"] += leap;
				if (data["sint"]==null && data["id"] && data["evid"] && data["freq"]>0) {
					data["sint"] = setInterval(this.bind(this.sonar), 1000);
				}
			}
			if (this.init_called) {
				var data = this.timer_data;
				data["lasttime"] += leap;
				if (data["to"]==null && data["tint"]==null) {
					var t = showtime-data["lasttime"];
					if (t > 0 && t < 60*1000) {
						data["to"] = setTimeout(this.bind(this.timer),60*1000-t);
					} else {
						data["tint"] = setInterval(this.bind(this.timer),60*1000);
					}
				}
			}
			this.hidecnt += 1;
			this.hidetime = null;
			this.closing = 0;
			if (this.init_called) {
				this.send_bfview();
			}
		};
		this.getrawfpdata = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			return fpdata.split('|')[0];
		};
		this.getconsentfpdata = function() {
			return this.has_consent?this.getrawfpdata():'-NOCONSENT';
		};
		this.getconsentlsdata = function() {
			return this.has_consent?this.lsdata:'-NOCONSENT';
		};
		this.get_fpdata_ts = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			var arr = fpdata.split('|');
			return (arr.length >= 2) ? parseInt(arr[1]) * 1000 : 0;
		};
		this.getfpcookie = function() {
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (this.fpdata_sec_state=='unknown') {
				this.fpdata_sec_state = fpcookie.sec_state;
			}
			this.fpdata = fpcookie.primary;
			this.fpdata_secondary = fpcookie.secondary;
		};
		this.getdntcookie = function() {
			if (this.dnt==0) {
				var dntcookie = gemius_cookie.get(this.dntcookie_name);
				this.dnt = parseInt(dntcookie.primary)?1:0;
			}
		};
		this.getfpcap = function() {
			var capcookie = gemius_cookie.get(this.capcookie_name);
			if (capcookie.sec_state=='sec') {
				this.fpcap = {nsec: '-TURNEDOFF', sec: capcookie.primary};
			} else {
				this.fpcap = {nsec: capcookie.primary, sec: capcookie.secondary};
			}
		};
		this.setfpcap = function(fpcap,fpcdomain,fpsec) {
			var fpcap_sec_state = parseInt(fpsec)?'sec':'nsec';
			if (fpcap=='' || fpcdomain=='' || this.fpdata_sec_state!=fpcap_sec_state) {
				return;
			}
			this.fpcap[this.fpdata_sec_state] = fpcap;
			gemius_cookie.set(this.capcookie_name, fpcap, this.cookie_expire, fpcdomain, this.fpdata_sec_state, false);
		};
		this.fpcookie_secondary_needs_reset = function() {
			return (this.gdprforgetts>0 && this.fpdata_secondary!='' && this.fpdata_secondary[0]!='-' && this.get_fpdata_ts(this.fpdata_secondary)<this.gdprforgetts);
		};
		this.setfpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
			if (this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.init_fpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
		};
		this.reset_fpcookie_secondary_if_needed = function() {
			if (this.fpcookie_secondary_needs_reset()) {
				gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, 'sec', true);
			}
		};
		this.fpdata_loaded = function() {
			if (this.timeouts.sto!=null) {
				if (this.timeouts.sto.to!=null) {
					clearTimeout(this.timeouts.sto.to);
				}
				this.timeouts.sto = null;
			}
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (fpcookie.sec_state == 'unknown') {
				this.init_fpcookie();
			}
			this.getfpcookie();
			this.waiting_for_fpdata = 0;
			this.tfp_send_fixes(false);
			this.paramsready();
			this.latehits();
		};
		this.addframe = function(ssl,file,args,rcvfn) {
			if (document.body) {
				this.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					this.loadinit = (new Date()).getTime();
					if (this.timeouts.fto==null) {
						this.timeouts.fto = this.set_timeout(this.bind(this.frameto),10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					this.lsgetframe = f;
				}
			} else {
				setTimeout(this.bind(this.addframe,ssl,file,args,rcvfn), 100);
			}
		};
		this.frameto = function() {
			if (this.timeouts.fto!=null) {
				this.timeouts.fto = null;
				if (this.lsdata=='') {
					this.ltime = 10000;
					this.lsdata = document.prerendering?'-PRERENDER':'-TIMEDOUT';
					this.waiting_for_lsdata = 0;
					this.paramsready();
					this.latehits();
				}
			}
		};
		this.scriptto = function() {
			if (this.timeouts.sto!=null) {
				this.timeouts.sto = null;
				if (this.fpdata!='' && this.fpdata[0]!='-') {
					this.init_fpcookie();
					this.getfpcookie();
				}
				if (this.fpdata=='') {
					this.fpdata = '-TIMEDOUT';
				}
				this.waiting_for_fpdata = 0;
				this.paramsready();
				this.latehits();
			}
		};
		this.last_datareceiver = function(lsdata) {
			this.current_receiver = null;
			this.lsdata = lsdata;
			this.waiting_for_lsdata = 0;
			this.paramsready();
			this.latehits();
		};
		this.second_datareceiver = function(data) {
			if (data.charAt(0)=='-' || data=='') {
				this.addframe(1,'set','',this.last_datareceiver);
			} else {
				this.last_datareceiver(data);
			}
		};
		this.first_datareceiver = function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				this.addframe(1,'get','',this.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				this.last_datareceiver(data);
			}
		};
		this.msgreceiver = function(e) {
			try {
				var is_event = function(prefix) {
					return typeof e.data == "string" && e.data.substring(0, prefix.length) == prefix;
				}
				if (window.top === window.self && is_event("_xx_gemius_getref_xx_")) {
					var origin = window.location.origin;
					if (origin) {
						e.source.postMessage("_xx_gemius_putref_xx_/" + origin, e.origin);
					}
				}
				if (e.source === window.top) {
					if (is_event("_xx_gemius_putref_xx_/")) {
						this.set_tfp_origin(e.data.substr(22));
						this.latehits();
					}
					if (is_event("_xx_gemius_puttfpdata_xx_")) {
						var arr = e.data.substr(26).split("/");
						var tfpdata = arr[0];
						if (!this.is_gde || (tfpdata.length > 0 && tfpdata[0] != '-')) {
							this.tfp.fpdata = tfpdata;
							this.latehits();
						}
					}
				}
				if (window.top === window.self) {
					if (is_event("_xx_gemius_getfpdata_xx_")) {
						var origin = new String(document.location.origin);
						var sent = false;
						var clbk = function(fpdata) {
							if (this.has_consent && !sent) {
								e.source.postMessage("_xx_gemius_putfpdata_xx_/" + fpdata + '/' + encodeURIComponent(origin), e.origin);
								sent = true;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),null);
					}
					if (is_event("_xx_gemius_gettfpdata_xx_/")) {
						var arr = e.data.substr(26).split("/");
						var sent_tfpdata = '';
						var clbk = function(fpdata) {
							var tfpdata = (this.has_consent?fpdata:'-NOCONSENT');
							if (tfpdata != sent_tfpdata) {
								e.source.postMessage("_xx_gemius_puttfpdata_xx_/" + tfpdata, e.origin);
								sent_tfpdata = tfpdata;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),arr[0]);
					}
				}
				if (!this.init_called) {
					return;
				}
				if (is_event("_xx_gemius_xx_/")) {
					if (this.timeouts.fto!=null) {
						if (this.timeouts.fto.to!=null) {
							clearTimeout(this.timeouts.fto.to);
						}
						this.timeouts.fto = null;
						this.ltime = (new Date()).getTime() - this.loadinit;
					}
					if (this.current_receiver!=null) {
						this.current_receiver(e.data.substr(15));
					}
				}
				if (this.use_globals) {
					if (is_event("_xx_gemius_add_xx_/")) {
						if (this.addto!=null) {
							clearTimeout(this.addto);
							this.addto = null;
						}
						var lsadd = e.data.substr(19);
						this.sendhits((lsadd=="-GETERR")?null:lsadd);
					}
					if (is_event("_xx_gemius_set_fpcap_xx_")) {
						var fpcap = e.data.substr(25).split("/");
						this.setfpcap(fpcap[0], fpcap[1], fpcap[2]);
					}
				}
			} catch (e) {}
		};
		this.getflashv = function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		};
		this.gdpr_params = function(first) {
			var url = '';
			if (this.gdpr_applies != null) url+="&gdpr=" + (this.gdpr_applies?"1":"0");
			if (this.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof this.gdpr_consent == "string")?this.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		};
		this.cmp_purposes = function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
// cmp_utils.js 
                var combine_cmp_purposes = function(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, this.cmp_purposes_overrides, this.dmp_purpose);
			} catch (e) {}
			return purposes;
		};
		this.parameters = function(href) {
			var d=document;
			var w=window;
			var href=new String(href || d.location.href);
			var dd;
			var url='&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(this.flashv)+'&href='+encodeURIComponent(href.substring(0,499));
				if (typeof w.gemiusNetpanelID=='string') {
					url+='&npid='+encodeURIComponent(w.gemiusNetpanelID);
				}
			}
			if (this.mtp_enabled && (typeof navigator.maxTouchPoints=='number')) {
				url+='&mtp='+navigator.maxTouchPoints;
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (this.cmp_found) {
				url+='&cmpf=1';
			}
			if (this.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		};
		this.fpcap_params = function(consent) {
			if (consent && this.fpdata.length>0 && this.fpdata[0]!='-' && this.fpdata_sec_state!='unknown') {
				var fpcap = this.fpcap[this.fpdata_sec_state];
				return '&fpcap=' + ((fpcap.length>0 && fpcap[0]!='-')?fpcap:'') + ((this.fpdata_sec_state=='sec')?'&fpsec=1':'');
			}
			return '';
		};
		this.frametype_init = function() {
			var ref = this.ref;
			var d=document;
			if (typeof Error!='undefined') {
				try { ref.frametype=(d==top.document)?1:2; var r = top.document.referrer; } catch(e) {ref.frametype=3;}
			}
		};
		this.ref_update = function() {
			var ref = this.ref;
			var d=document;
			if (d.referrer) { ref.ref=new String(d.referrer); } else { ref.ref=''; }
			if (typeof Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
