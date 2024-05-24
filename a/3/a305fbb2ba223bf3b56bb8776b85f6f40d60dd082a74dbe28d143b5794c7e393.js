/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),t=x.document,M=x.navigator,u=x.jQuery,H=x.JSON;((function(N,O){undefined"!==typeof N?N:{};a.b=a.H=a.version="3.4.2";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=);a.b("utils",a.a);a.b("utils.arrayForEach",a.a.r);a.b("utils.arrayFirst",a.a.Vb);a.b("utils.arrayFilter",a.a.Ma);a.b("utils.arrayGetDistinctValues",a.a.Wb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.ib);a.b("utils.arrayPushAll",a.a.ta);a.b("utils.arrayRemoveItem",a.a.Na);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.gc);a.b("utils.getFormFields",a.a.ic);a.b("utils.peekObservable",a.a.Bb);a.b("utils.postJson",a.a.ld);a.b("utils.parseJson",a.a.kd);a.b("utils.registerEventHandler",a.a.q);a.b("utils.stringifyJson",a.a.Gb);a.b("utils.range",a.a.nd);a.b("utils.toggleDomNodeCssClass",a.a.fb);a.b("utils.triggerEvent",a.a.Fa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.ra);a.b("utils.setTextContent",a.a.bb);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
;a.a.e=new a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.G=new 
a.ba=a.a.G.ba;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.ba);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.qa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.tc);(();a.b("utils.parseHtmlFragment",a.a.na);a.b("utils.setHtml",a.a.Eb);a.N=);a.b("memoization",a.N);a.b("memoization.memoize",a.N.yb);a.b("memoization.unmemoize",a.N.Bc);a.b("memoization.parseMemoText",a.N.pc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.N.Cc);a.Z=);a.b("tasks",a.Z);a.b("tasks.schedule",a.Z.Za);a.b("tasks.runEarly",a.Z.rd);a.Aa={throttle:rateLimit:deferred:notify:;var R={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Aa);a.zc=a.zc.prototype.k=a.K=var E="change",D={ub:Y:notifySubscribers:Pa:function(){return this.Qb},Zc:Kb:Wa:Ra:Xc:Ua:extend:;a.H(D,"subscribe",D.Y);a.H(D,"extend",D.extend);a.H(D,"getSubscriptionsCount",D.Xc);a.a.la&&a.a.$a(D,Function.prototype);a.K.fn=D;a.lc=a.b("subscribable",a.K);a.b("isSubscribable",a.lc);a.xa=a.l=);a.b("computedContext",a.xa);a.b("computedContext.getDependenciesCount",a.xa.Ca);a.b("computedContext.isInitial",a.xa.Va);a.b("ignoreDependencies",a.wd=a.l.w);var F=a.a.bc("_latestValue");a.O=var B={equalityComparer:J,p:ha:ia:;a.a.la&&a.a.$a(B,a.K.fn);var I=a.O.md="__ko_proto__";B[I]=a.O;a.Qa=a.I=function(b){return a.Qa(b,a.O)};a.Da=a.b("observable",a.O);a.b("isObservable",a.I);a.b("isWriteableObservable",a.Da);a.b("isWritableObservable",a.Da);a.b("observable.fn",B);a.H(B,"peek",B.p);a.H(B,"valueHasMutated",B.ha);a.H(B,"valueWillMutate",B.ia);a.ma=
a.ma.fn={remove:removeAll:destroy:destroyAll:indexOf:replace:;a.a.la&&a.a.$a(a.ma.fn,a.O.fn);a.a.r("pop push reverse shift sort splice unshift".split(" "),;a.a.r(["slice"],;a.b("observableArray",a.ma);a.Aa.trackArrayChanges=var s=a.a.bc("_state");a.m=a.B=var z={equalityComparer:J,Ca:Sb:Sa:gd:ca:qd:yc:ec:U:Vc:Uc:p:Wa:k:,Y={ua:Ka:Pa:,Z={ua:;a.a.la&&a.a.$a(z,a.K.fn);var P=a.O.md;a.m[P]=a.O;z[P]=a.m;a.bd=a.cd=a.b("computed",a.m);a.b("dependentObservable",a.m);a.b("isComputed",a.bd);a.b("isPureComputed",a.cd);a.b("computed.fn",z);a.H(z,"peek",z.p);a.H(z,"dispose",z.k);a.H(z,"isActive",z.ca);a.H(z,"getDependenciesCount",z.Ca);a.rc=
a.b("pureComputed",a.rc);(();a.b("toJS",a.Ac);a.b("toJSON",a.toJSON);(();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ja);a.h=);a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.va);a.b("expressionRewriting.parseObjectLiteral",a.h.Ab);a.b("expressionRewriting.preProcessBindings",a.h.Xa);a.b("expressionRewriting._twoWayBindings",
a.h.ga);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Xa);(();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.aa);a.b("virtualElements.emptyNode",a.f.za);a.b("virtualElements.insertAfter",
a.f.kc);a.b("virtualElements.prepend",a.f.qc);a.b("virtualElements.setDomNodeChildren",a.f.fa);(();a.b("bindingProvider",a.S);(();(();(();(();(();var Q={"class":"className","for":"htmlFor"};a.d.attr={update:;(();a.d.css={update:;a.d.enable={update:;a.d.disable={update:;a.d.event={init:;
a.d.foreach={mc:init:update:;a.h.va.foreach=!1;a.f.aa.foreach=!0;a.d.hasfocus={init:update:;a.h.ga.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ga.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Eb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,;var L={};a.d.options={init:update:;a.d.options.zb=a.a.e.J();a.d.selectedOptions={after:["options","foreach"],init:update:;a.h.ga.selectedOptions=!0;a.d.style={update:;a.d.submit={init:;a.d.text={init:update:;a.f.aa.text=!0;(();a.d.uniqueName={init:;a.d.uniqueName.Nc=0;a.d.value={after:["options","foreach"],init:update:function(){}};a.h.ga.value=!0;a.d.visible={update:;(("click");a.P=a.P.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.P.prototype.createJavaScriptEvaluatorBlock=
a.P.prototype.makeTemplateSource=a.P.prototype.renderTemplate=a.P.prototype.isTemplateRewritten=a.P.prototype.rewriteTemplate=a.b("templateEngine",a.P);a.Ib=);a.b("__tr_ambtns",a.Ib.Jc);(();(();a.b("setTemplateEngine",a.Fb);a.b("renderTemplate",a.Cb);a.a.hc=a.a.lb=);a.b("utils.compareArrays",a.a.lb);(();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Db);a.X=a.X.prototype=new a.P;a.X.prototype.renderTemplateSource=a.X.vb=new a.X;a.Fb(a.X.vb);a.b("nativeTemplateEngine",a.X);(()})})();})();
