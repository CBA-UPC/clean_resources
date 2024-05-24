// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.2
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


((this,function(t,e,i){"use strict";((e,i),function(t,e){var i=t.Wreqr,n=t.Wreqr={};return t.Wreqr.VERSION="1.3.3",t.Wreqr.noConflict=n.Handlers=t,e),n.CommandStorage=),n.Commands=n,e),n.RequestResponse=function(t,e){return t.Handlers.extend({request:function(t){return this.hasHandler(t)?this.getHandler(t).apply(this,e.rest(arguments)):void 0}})}(n,e),n.EventAggregator=t,e),n.Channel=n),n.radio=function(t,e){var i=e.extend(i.prototype,{channel:function(t){if(!t)throw Error("Channel must receive a name");return this._getChannel(t)},_getChannel:_proxyMethods:);var n={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},r=return new i}(n,e),t.Wreqr}(e,i);var n=t.Marionette,r=t.Mn,s=e.Marionette={};s.VERSION="2.4.2",s.noConflict=e.Marionette=s,s.Deferred=e.$.Deferred,s.extend=e.Model.extend,s.isNodeAttached=s.mergeOptions=s.getOption=s.proxyGetOption=s._getValue=s.normalizeMethods=s.normalizeUIString=s.normalizeUIKeys=s.normalizeUIValues=s.actAsCollection=var o=s.deprecate=function(t,e){i.isObject(t)&&(t=t.prev+" is going to be removed in the future. "+"Please use "+t.next+" instead."+(t.url?" See: "+t.url:"")),void 0!==e&&e||o._cache[t]||(o._warn("Deprecation warning: "+t),o._cache[t]=!0)};o._warn="undefined"!=typeof console&&(console.warn||console.log)||function(){},o._cache={},s._triggerMethod=function(){ar e=/(^|:)(\w)/gi;return function(n,r,s){var o=3>arguments.length;o&&(s=r,r=s[0]);var h,a="on"+r.replace(e,t),d=n[a];return i.isFunction(d)&&(h=d.apply(n,o?i.rest(s):s)),i.isFunction(n.trigger)&&(o+s.length>1?n.trigger.apply(n,o?s:[r].concat(i.drop(s,0))):n.trigger(r)),h}}(),s.triggerMethod=s.triggerMethodOn=s.MonitorDOMRefresh=s);var h=["description","fileName","lineNumber","name","message","number"];return s.Error=s.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+s.VERSION+"/",constructor:captureStackTrace:toString:),s.Error.extend=s.extend,s.Callbacks=i.extend(s.Callbacks.prototype,{add:run:reset:),s.Controller=s.Controller.extend=s.extend,i.extend(s.Controller.prototype,e.Events,{destroy:triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption}),s.Object=s.Object.extend=s.extend,i.extend(s.Object.prototype,e.Events,{initialize:destroy:triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Region=s.Object.extend({constructor:show:function(t,e){if(this._ensureElement()){this._ensureViewIsIntact(t);var n=e||{},r=t!==this.currentView,o=!!n.preventDestroy,h=!!n.forceShow,a=!!this.currentView,d=r&&!o,l=r||h;if(a&&this.triggerMethod("before:swapOut",this.currentView,this,e),this.currentView&&delete this.currentView._parent,d?this.empty():a&&l&&this.currentView.off("destroy",this.empty,this),l){t.once("destroy",this.empty,this),t.render(),t._parent=this,a&&this.triggerMethod("before:swap",t,this,e),this.triggerMethod("before:show",t,this,e),s.triggerMethodOn(t,"before:show",t,this,e),a&&this.triggerMethod("swapOut",this.currentView,this,e);var c=s.isNodeAttached(this.el),u=[],g=i.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},n);return c&&g.triggerBeforeAttach&&(u=this._displayedViews(t),this._triggerAttach(u,"before:")),this.attachHtml(t),this.currentView=t,c&&g.triggerAttach&&(u=this._displayedViews(t),this._triggerAttach(u)),a&&this.triggerMethod("swap",t,this,e),this.triggerMethod("show",t,this,e),s.triggerMethodOn(t,"show",t,this,e),this}return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:_displayedViews:_ensureElement:_ensureViewIsIntact:getEl:attachHtml:empty:_destroyView:attachView:hasView:reset:function(){return this.empty(),this.$el&&(this.el=this.getOption('el')),delete this.$el,this}},{buildRegion:_buildRegionFromSelector:_buildRegionFromObject:_buildRegionFromRegionClass:),s.RegionManager=s.Controller.extend({constructor:addRegions:addRegion:get:getRegions:removeRegion:removeRegions:emptyRegions:destroy:_store:_remove:),s.actAsCollection(s.RegionManager.prototype,"_regions"),s.TemplateCache=i.extend(s.TemplateCache,{templateCaches:{},get:clear:),i.extend(s.TemplateCache.prototype,{load:loadTemplate:function(t){var i=e.$(t).html();if(!i||0===i.length)throw new s.Error({name:"NoTemplateError",message:'Could not find template: "'+t+'"'});return i},compileTemplate:),s.Renderer={render:,s.View=e.View.extend({isDestroyed:!1,constructor:getTemplate:serializeModel:mixinTemplateHelpers:normalizeUIKeys:normalizeUIValues:configureTriggers:delegateEvents:_delegateDOMEvents:undelegateEvents:_ensureViewIsIntact:destroy:bindUIElements:function(){this._bindUIElements(),i.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:unbindUIElements:_unbindUIElements:_buildViewTrigger:setElement:triggerMethod:_triggerEventOnBehaviors:_triggerEventOnParentLayout:_getImmediateChildren:_getNestedViews:_getAncestors:_parentLayoutView:normalizeMethods:s.normalizeMethods,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.ItemView=s.View.extend({constructor:function(){s.View.apply(this,arguments)},serializeData:serializeCollection:function(t){return t.toJSON.apply(t,i.rest(arguments))},render:_renderTemplate:attachElContent:function(t){return this.$el.html(t),this}}),s.CollectionView=s.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:initRenderBuffer:startBuffering:endBuffering:_triggerMethodMany:_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:_onCollectionRemove:_onBeforeShowCalled:_onShowCalled:_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:render:reorder:function(){var t=this.children,e=this._filteredSortedModels(),n=i.find(e,;if(n)this.render();else{var r=i.map(e,;this.triggerMethod("before:reorder"),this._appendReorderedChildren(r),this.triggerMethod("reorder")}},resortView:_sortViews:_emptyViewIndex:-1,_appendReorderedChildren:function(t){this.$el.append(t)},_renderChildren:function(){this.destroyEmptyView(),this.destroyChildren({checkEmpty:!1}),this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.showEmptyView())},showCollection:_filteredSortedModels:showEmptyView:destroyEmptyView:getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(t,e){var n,r=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el),o=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");i.isFunction(o)&&(o=o.call(this,t,this._emptyViewIndex));var h=this.buildChildView(t,e,o);h._parent=this,this.proxyChildEvents(h),this._isShown&&s.triggerMethodOn(h,"before:show",h),this.children.add(h),r&&this._triggerBeforeAttach&&(n=[h].concat(h._getNestedViews()),h.once("render",function(){this._triggerMethodMany(n,this,"before:attach")},this)),this.renderChildView(h,this._emptyViewIndex),r&&this._triggerAttach&&(n=[h].concat(h._getNestedViews()),this._triggerMethodMany(n,this,"attach")),this._isShown&&s.triggerMethodOn(h,"show",h)},getChildView:addChild:_updateIndices:_addChildView:function(t,e){var i,n=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el);this.proxyChildEvents(t),this._isShown&&!this.isBuffering&&s.triggerMethodOn(t,"before:show",t),this.children.add(t),n&&this._triggerBeforeAttach&&(i=[t].concat(t._getNestedViews()),t.once("render",function(){this._triggerMethodMany(i,this,"before:attach")},this)),this.renderChildView(t,e),n&&this._triggerAttach&&(i=[t].concat(t._getNestedViews()),this._triggerMethodMany(i,this,"attach")),this._isShown&&!this.isBuffering&&s.triggerMethodOn(t,"show",t)},renderChildView:buildChildView:removeChildView:isEmpty:checkEmpty:attachBuffer:_createBuffer:attachHtml:_insertBefore:function(t,e){var i,n=this.getOption("sort")&&this.children.length-1>e;return n&&(i=this.children.find(),i?(i.$el.before(t.el),!0):!1},_insertAfter:_initChildViewStorage:destroy:destroyChildren:_shouldAddChild:proxyChildEvents:function(t){var e=this.getOption("childViewEventPrefix");this.listenTo(t,"all",function(){var n=i.toArray(arguments),r=n[0],s=this.normalizeMethods(i.result(this,"childEvents"));n[0]=e+":"+r,n.splice(1,0,t),s!==void 0&&i.isFunction(s[r])&&s[r].apply(this,n.slice(1)),this.triggerMethod.apply(this,n)})},_getImmediateChildren:getViewComparator:function(){return this.getOption("viewComparator")}}),s.CompositeView=s.CollectionView.extend({constructor:_initialEvents:getChildView:serializeData:render:_renderChildren:_renderTemplate:attachElContent:attachBuffer:_insertAfter:_appendReorderedChildren:getChildViewContainer:function(t){if(t.$childViewContainer)return t.$childViewContainer;var e,i=s.getOption(t,"childViewContainer");if(i){var n=s._getValue(i,t);if(e="@"===n.charAt(0)&&t.ui?t.ui[n.substr(4)]:t.$(n),0>=e.length)throw new s.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+t.childViewContainer})}else e=t.$el;return t.$childViewContainer=e,e},resetChildViewContainer:),s.LayoutView=s.ItemView.extend({regionClass:s.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:render:destroy:showChildView:getChildView:addRegion:addRegions:removeRegion:getRegion:function(t){return this.regionManager.get(t)},getRegions:function(){return this.regionManager.getRegions()},_buildRegions:_initializeRegions:_reInitializeRegions:getRegionManager:function(){return new s.RegionManager},_initRegionManager:_getImmediateChildren:),s.Behavior=s.Object.extend({constructor:$:function(){return this.view.$.apply(this.view,arguments)},destroy:proxyViewProperties:),s.Behaviors=function(t,e){ s=/^(\S+)\s*(.*)$/,o={behaviorTriggers:behaviorEvents:;return e.extend(i,{behaviorsLookup:getBehaviorClass:parseBehaviors:wrap:),e.extend(n.prototype,{buildBehaviorTriggers:_buildTriggerHandlersForBehavior:_setHandlerForBehavior:),i}(s,i),s.AppRouter=e.Router.extend({constructor:appRoute:_processOnRoute:processAppRoutes:_getController:function(){return this.getOption("controller")},_addAppRoute:mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,triggerMethod:s.triggerMethod,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Application=s.Object.extend({constructor:execute:request:addInitializer:function(t){this._initCallbacks.add(t)},start:addRegions:function(t){return this._regionManager.addRegions(t)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(t){return this._regionManager.removeRegion(t)},getRegion:getRegions:module:getRegionManager:_initializeRegions:_initRegionManager:_initChannel:),s.Module=s.Module.extend=s.extend,i.extend(s.Module.prototype,e.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(t){this._initializerCallbacks.add(t)},addFinalizer:start:stop:addDefinition:function(t,e){this._runModuleDefinition(t,e)},_runModuleDefinition:_setupInitializersAndFinalizers:triggerMethod:s.triggerMethod}),i.extend(s.Module,{create:_getModule:getClass:_addModuleDefinition:_getStartWithParent:_getDefine:_addStartWithParent:),s});
// Backbone.Radio v1.0.1
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("underscore"),require("backbone")):"function"==typeof define&&define.amd?define(["underscore","backbone"],n):e.Backbone.Radio=n(e._,e.Backbone)}(this,function(e,n){"use strict";a=n.Radio,u=n.Radio={};u.VERSION="1.0.1",u.noConflict=function(){return n.Radio=a,this},u.DEBUG=!1,u._debugText=u.debugLog=var o=/\s+/;u._eventsApi=u._callHandler=var c={};e.extend(u,{log:tuneIn:tuneOut:),u.Requests={request:reply:replyOnce:stopReplying:,u._channels={},u.channel=u.Channel=function(e){this.channelName=e},e.extend(u.Channel.prototype,n.Events,u.Requests,{reset:);var l,h,f=[n.Events,u.Commands,u.Requests];e.each(f,,u.reset=var p=u;return p});
!this,(function(){"use strict";ar t,n={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0,14:-1};t||(t={}));var o={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0,14:!0},h={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},r={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},u={},s={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},p={1:!0},i=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"," ","&"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];unction v(e){for(var a=0;a<e.length;a++){var o=e[a].token.length,h=-1;e[a].type===t.FUNCTION_WITH_N_ARGS&&void 0===e[a].numberOfArguments&&(e[a].numberOfArguments=2),i[o]=i[o]||[];for(var r=0;r<i[o].length;r++)if(e[a].token===i[o][r]){h=f(i[o][r],this.tokens);break}-1===h?(this.tokens.push(e[a]),e[a].precedence=n[e[a].type],i.length<=e[a].token.length&&(i[e[a].token.length]=[]),i[e[a].token.length].push(e[a].token)):(this.tokens[h]=e[a],e[a].precedence=n[e[a].type])}}ar y=function(e,t){var n,v={value:this.math.changeSign,type:0,precedence:4,show:"-"},y={value:")",show:")",type:5,precedence:0},c={value:"(",type:4,precedence:0,show:"("},w=[c],m=[],E=e,g=o,N=0,d=u,A="";void 0!==t&&this.addToken(t);var k=function(e,t){for(var n,a,o,h=[],r=t.length,u=0;u<r;u++)if(!(u<r-1&&" "===t[u]&&" "===t[u+1])){for(n="",a=t.length-u>i.length-2?i.length-1:t.length-u;a>0;a--)if(void 0!==i[a])for(o=0;o<i[a].length;o++)l(t,i[a][o],u,a)&&(n=i[a][o],o=i[a].length,a=0);if(u+=n.length-1,""===n)throw new Error("Can't understand after "+t.slice(u));h.push(e.tokens[f(n,e.tokens)])}return h}(this,E);for(n=0;n<k.length;n++){var M=k[n];if(14!==M.type){var O,T=M.token,_=M.type,I=M.value,P=M.precedence,R=M.show,C=w[w.length-1];for(O=m.length;O--&&0===m[O];)if(-1!==[0,2,3,4,5,9,10,11,12,13].indexOf(_)){if(!0!==g[_])throw new Error(T+" is not allowed after "+A);w.push(y),g=h,d=s,m.pop()}if(!0!==g[_])throw new Error(T+" is not allowed after "+A);!0===d[_]&&(_=2,I=this.math.mul,R="&times;",P=3,n-=1);var S={value:I,type:_,precedence:P,show:R,numberOfArguments:M.numberOfArguments};if(0===_)g=o,d=u,a(m,2),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(2));else if(1===_)1===C.type?(C.value+=I,a(m,1)):w.push(S),g=h,d=r;else if(2===_)g=o,d=u,a(m,2),w.push(S);else if(3===_)w.push(S),g=h,d=s;else if(4===_)a(m,1),N++,g=o,d=u,w.push(S);else if(5===_){if(!N)throw new Error("Closing parenthesis are more than opening one, wait What!!!");N--,g=h,d=s,w.push(S),a(m,1)}else if(6===_){if(C.hasDec)throw new Error("Two decimals are not allowed in one number");1!==C.type&&(C={show:"0",value:0,type:1,precedence:0},w.push(C)),g=p,a(m,1),d=u,C.value+=I,C.hasDec=!0}else 7===_&&(g=h,d=s,a(m,1),w.push(S));8===_?(g=o,d=u,a(m,M.numberOfArguments+2),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(M.numberOfArguments+2))):9===_?(9===C.type?C.value===this.math.add?(C.value=I,C.show=R,a(m,1)):C.value===this.math.sub&&"-"===R&&(C.value=this.math.add,C.show="+",a(m,1)):5!==C.type&&7!==C.type&&1!==C.type&&3!==C.type&&13!==C.type?"-"===T&&(g=o,d=u,a(m,2).push(2),w.push(v),w.push(c)):(w.push(S),a(m,2)),g=o,d=u):10===_?(g=o,d=u,a(m,2),w.push(S)):11===_?(g=o,d=u,w.push(S)):12===_?(g=o,d=u,a(m,6),w.push(S),4!==k[n+1].type&&(w.push(c),m.push(6))):13===_&&(g=h,d=s,w.push(S)),a(m,-1),A=T}else if(n>0&&n<k.length-1&&1===k[n+1].type&&(1===k[n-1].type||6===k[n-1].type))throw new Error("Unexpected Space")}for(O=m.length;O--;)w.push(y);if(!0!==g[5])throw new Error("complete the expression");for(;N--;)w.push(y);return w.push(y),w};function c(e){for(var t,n,a,o=[],h=-1,r=-1,u=[{value:"(",type:4,precedence:0,show:"("}],s=1;s<e.length;s++)if(1===e[s].type||3===e[s].type||13===e[s].type)1===e[s].type&&(e[s].value=Number(e[s].value)),o.push(e[s]);else if(4===e[s].type)u.push(e[s]);else if(5===e[s].type)for(;4!==(null==(p=n=u.pop())?void 0:p.type);){var p;n&&o.push(n)}else if(11===e[s].type){for(;4!==(null==(i=n=u.pop())?void 0:i.type);){var i;n&&o.push(n)}u.push(n)}else{r=(t=e[s]).precedence,h=(a=u[u.length-1]).precedence;var l="Math.pow"==a.value&&"Math.pow"==t.value;if(r>h)u.push(t);else{for(;h>=r&&!l||l&&r<h;)n=u.pop(),a=u[u.length-1],n&&o.push(n),h=a.precedence,l="Math.pow"==t.value&&"Math.pow"==a.value;u.push(t)}}return o}function w(e,t){(t=t||{}).PI=Math.PI,t.E=Math.E;for(var n,a,o,h=[],r=void 0!==t.n,u=0;u<e.length;u++)if(1===e[u].type)h.push({value:e[u].value,type:1});else if(3===e[u].type)h.push({value:t[e[u].value],type:1});else if(0===e[u].type){var s=h[h.length-1];Array.isArray(s)?s.push(e[u]):s.value=e[u].value(s.value)}else if(7===e[u].type){var p=h[h.length-1];Array.isArray(p)?p.push(e[u]):p.value=e[u].value(p.value)}else if(8===e[u].type){for(var i=[],l=0;l<e[u].numberOfArguments;l++){var v=h.pop();v&&i.push(v.value)}h.push({type:1,value:e[u].value.apply(e[u],i.reverse())})}else if(10===e[u].type)n=h.pop(),a=h.pop(),Array.isArray(a)?((a=a.concat(n)).push(e[u]),h.push(a)):Array.isArray(n)?(n.unshift(a),n.push(e[u]),h.push(n)):h.push({type:1,value:e[u].value(a.value,n.value)});else if(2===e[u].type||9===e[u].type)n=h.pop(),a=h.pop(),Array.isArray(a)?((a=a.concat(n)).push(e[u]),h.push(a)):Array.isArray(n)?(n.unshift(a),n.push(e[u]),h.push(n)):h.push({type:1,value:e[u].value(a.value,n.value)});else if(12===e[u].type){n=h.pop();var f=void 0;f=!Array.isArray(n)&&n?[n]:n||[],a=h.pop(),o=h.pop(),h.push({type:1,value:e[u].value(o.value,a.value,f)})}else 13===e[u].type&&(r?h.push({value:t[e[u].value],type:3}):h.push([e[u]]));if(h.length>1)throw new Error("Uncaught Syntax error");return parseFloat(h[0].value.toFixed(15))}var m=function(){function t(){var t;this.toPostfix=c,this.addToken=v,this.lex=y,this.postfixEval=w,this.math=(t=this,{isDegree:!0,acos:function(e){return t.math.isDegree?180/Math.PI*Math.acos(e):Math.acos(e)},add:asin:function(e){return t.math.isDegree?180/Math.PI*Math.asin(e):Math.asin(e)},atan:acosh:asinh:atanh:C:function(e,n){var a=1,o=e-n,h=n;h<o&&(h=o,o=n);for(var r=h+1;r<=e;r++)a*=r;var u=t.math.fact(o);return"NaN"===u?"NaN":a/u},changeSign:cos:function(e){return t.math.isDegree&&(e=t.math.toRadian(e)),Math.cos(e)},cosh:div:fact:inverse:log:mod:mul:P:Pi:function(e,n,a){for(var o=1,h=e;h<=n;h++)o*=Number(t.postfixEval(a,{n:h}));return o},pow10x:sigma:function(e,n,a){for(var o=0,h=e;h<=n;h++)o+=Number(t.postfixEval(a,{n:h}));return o},sin:function(e){return t.math.isDegree&&(e=t.math.toRadian(e)),Math.sin(e)},sinh:sub:tan:tanh:function(e){return t.math.sinh(e)/t.math.cosh(e)},toRadian:and:),this.tokens=function(t){return[{token:"sin",show:"sin",type:0,value:t.math.sin},{token:"cos",show:"cos",type:0,value:t.math.cos},{token:"tan",show:"tan",type:0,value:t.math.tan},{token:"pi",show:"&pi;",type:3,value:"PI"},{token:"(",show:"(",type:4,value:"("},{token:")",show:")",type:5,value:")"},{token:"P",show:"P",type:10,value:t.math.P},{token:"C",show:"C",type:10,value:t.math.C},{token:" ",show:" ",type:14,value:" ".anchor},{token:"asin",show:"asin",type:0,value:t.math.asin},{token:"acos",show:"acos",type:0,value:t.math.acos},{token:"atan",show:"atan",type:0,value:t.math.atan},{token:"7",show:"7",type:1,value:"7"},{token:"8",show:"8",type:1,value:"8"},{token:"9",show:"9",type:1,value:"9"},{token:"int",show:"Int",type:0,value:Math.floor},{token:"cosh",show:"cosh",type:0,value:t.math.cosh},{token:"acosh",show:"acosh",type:0,value:t.math.acosh},{token:"ln",show:" ln",type:0,value:Math.log},{token:"^",show:"^",type:10,value:Math.pow},{token:"root",show:"root",type:0,value:Math.sqrt},{token:"4",show:"4",type:1,value:"4"},{token:"5",show:"5",type:1,value:"5"},{token:"6",show:"6",type:1,value:"6"},{token:"/",show:"&divide;",type:2,value:t.math.div},{token:"!",show:"!",type:7,value:t.math.fact},{token:"tanh",show:"tanh",type:0,value:t.math.tanh},{token:"atanh",show:"atanh",type:0,value:t.math.atanh},{token:"Mod",show:" Mod ",type:2,value:t.math.mod},{token:"1",show:"1",type:1,value:"1"},{token:"2",show:"2",type:1,value:"2"},{token:"3",show:"3",type:1,value:"3"},{token:"*",show:"&times;",type:2,value:t.math.mul},{token:"sinh",show:"sinh",type:0,value:t.math.sinh},{token:"asinh",show:"asinh",type:0,value:t.math.asinh},{token:"e",show:"e",type:3,value:"E"},{token:"log",show:" log",type:0,value:t.math.log},{token:"0",show:"0",type:1,value:"0"},{token:".",show:".",type:6,value:"."},{token:"+",show:"+",type:9,value:t.math.add},{token:"-",show:"-",type:9,value:t.math.sub},{token:",",show:",",type:11,value:","},{token:"Sigma",show:"&Sigma;",type:12,value:t.math.sigma},{token:"n",show:"n",type:13,value:"n"},{token:"Pi",show:"&Pi;",type:12,value:t.math.Pi},{token:"pow",show:"pow",type:8,value:Math.pow,numberOfArguments:2},{token:"&",show:"&",type:9,value:t.math.and}].map(()}(this)}return t.prototype.eval=function(e,t,n){return this.postfixEval(this.toPostfix(this.lex(e,t)),n)},t}();return m.TOKEN_TYPES=t,m.tokenTypes=t,m}));

// TODO: Fix error collecting.
//window.onerror = function(message, url, lineNumber) {
//  var data;
//
//  data = {
//  	'action': 'nf_log_js_error',
//  	'security': nfFrontEnd.ajaxNonce,
//  	'message': message,
//  	'url': url,
//  	'lineNumber': lineNumber
//  };
//
//  jQuery.ajax({
//	    url: nfFrontEnd.adminAjax,
//	    type: 'POST',
//	    data: data,
//	    cache: false,
//	   	success: function( data, textStatus, jqXHR ) {
//	   		try {
//		   		
//	   		} catch( e ) {
//	   			console.log( e );
//	   			console.log( 'Parse Error' );
//				console.log( e );
//	   		}
//
//	    },
//	    error: function( jqXHR, textStatus, errorThrown ) {
//	        // Handle errors here
//	        console.log('ERRORS: ' + errorThrown);
//			console.log( jqXHR );
//
//			try {
//			
//			} catch( e ) {
//				console.log( 'Parse Error' );
//			}
//		}
//	});
//  return false;
//};  

var nfRadio = Backbone.Radio;

nfRadio.channel( 'form' ).on( 'render:view', function() {		
	jQuery( '.g-recaptcha' ).each( function() {
		var callback = jQuery( this ).data( 'callback' );
		var fieldID = jQuery( this ).data( 'fieldid' );
		if ( typeof window[ callback ] !== 'function' ){
			window[ callback ] = function( response ) {
				nfRadio.channel( 'recaptcha' ).request( 'update:response', response, fieldID );
			};
		}
	} );
} );

var nfRecaptcha = Marionette.Object.extend( {
	initialize: function() {
		/*
		 * If we've already rendered our form view, render our recaptcha fields.
		 */
		if ( 0 != jQuery( '.g-recaptcha' ).length ) {
			this.renderCaptcha();
		}
		/*
		 * We haven't rendered our form view, so hook into the view render radio message, and then render.
		 */
		this.listenTo( nfRadio.channel( 'form' ), 'render:view', this.renderCaptcha );
        this.listenTo( nfRadio.channel( 'captcha' ), 'reset', this.renderCaptcha );
	},

	renderCaptcha: function() {
		jQuery( '.g-recaptcha:empty' ).each( function() {
			var opts = {
				fieldid: jQuery( this ).data( 'fieldid' ),
				size: jQuery( this ).data( 'size' ),
				theme: jQuery( this ).data( 'theme' ),
				sitekey: jQuery( this ).data( 'sitekey' ),
				callback: jQuery( this ).data( 'callback' )
			};

			var grecaptchaID = grecaptcha.render( jQuery( this )[0], opts );

			if ( opts.size === 'invisible' ) {
				try {
					nf_reprocess_recaptcha( grecaptchaID  );
					setInterval(nf_reprocess_recaptcha, 110000, grecaptchaID);
				} catch( e ){
					console.log( 'Notice: Error trying to execute grecaptcha.' );
				}
			}	
		} );
	}
} );

var nfRenderRecaptcha = 
const nf_reprocess_recaptcha = 
const nf_check_recaptcha_consent = () => {

	let stored_responses = [], services = [];

	//Cookie check
	if(!nf_check_data_for_recaptcha_consent()){
		stored_responses.push( false );
		services.push("missing_cookie");
	}
	
	//Build response with services gathered and print it in global scope
	const response = {
		"consent_state": stored_responses,
		"services" : services
	};

	nfFrontEnd.nf_consent_status_response = response;
	//Display filterable status to add extra consent check
	let nf_consent_status_extra_check = new CustomEvent('nf_consent_status_check', {detail: response});
	document.dispatchEvent(nf_consent_status_extra_check);

	return nfFrontEnd.nf_consent_status_response;
}
//Get specific recaptcha cookie
const nf_check_data_for_recaptcha_consent = () => {
	return nf_get_cookie_by_name("_grecaptcha") !== "";
}
//Get a cookie
const nf_get_cookie_by_name = (cname) => {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

const nf_reload_after_cookie_consent = ( submitFieldID, layoutView ) => {
	if(typeof submitFieldID !== "undefined" && typeof layoutView !== "undefined"){
		nfRadio.channel( 'fields' ).request("remove:error", submitFieldID, "recaptcha-v3-missing");
		nfRadio.channel( 'fields' ).request("remove:error", submitFieldID, "recaptcha-v3-consent");
		nfRadio.channel( 'form' ).trigger( 'render:view', layoutView );
	}
}

const nf_add_reCaptcha_aria = () => {
	
	// Callback function to execute when mutations are observed
	const nf_act_on_inserted_node = (mutationList, observer) => {
		for (const mutation of mutationList) {
			if (mutation.type === 'childList' && mutation.target.className === "g-recaptcha") {
				let nf_recaptchaTextarea = document.getElementById("g-recaptcha-response");
				if(typeof nf_recaptchaTextarea !== "undefined" ){
					nf_recaptchaTextarea.setAttribute("aria-hidden", "true");
					nf_recaptchaTextarea.setAttribute("aria-label", "Silent reCaptcha security check");
					nf_recaptchaTextarea.setAttribute("aria-readonly", "true");
					observer.disconnect();
				}
			}
		}
		observer.disconnect();
	};
	//Observe Forms
	const nf_forms_listed = document.querySelectorAll(".ninja-forms-form-wrap");
	if(nf_forms_listed.length > 0){
		let nf_recaptcha_observers = [];
		nf_forms_listed.forEach((nf_form) => {
			nf_recaptcha_observers.push({"class": new MutationObserver(nf_act_on_inserted_node), "element": nf_form});
		});
		//Add an observer for each form
		if( nf_recaptcha_observers.length > 0){
			nf_recaptcha_observers.forEach((object) => {
				object.class.observe( object.element, 
					{ childList: true, subtree: true }
				);
			});
		}
	}
}

const nf_remove_noscript_tags_as_needed = () => {
	const noscripts = document.getElementsByClassName('ninja-forms-noscript-message')

	for (let i = 0; i < noscripts.length; i++) {
		noscripts[i].parentNode.removeChild(noscripts[i])
	}
}

jQuery(document).on( 'nfFormReady', ;