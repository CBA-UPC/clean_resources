/*! For license information please see 3536.0d48e689ca8971b7b26a-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo=self.webpackChunkbobcat_monorepo||[]).push([[3536],{60139:383677:673759:663620:836808:562705:644239:431957:385924:789607:902333:205569:555639:637005:968630:481040:function(t){"use strict";.resetWarningCache=function(){},t.exports=e},947425:741805:function(t,e,r){"use strict";var n=r(659864),i=r(826364),o=r(150414),u=r(481040),s=Function.call.bind(Object.prototype.hasOwnProperty);.exports=function(t,e){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",f={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:p(a),arrayOf:element:p((),elementType:p((),instanceOf:node:p((),objectOf:oneOf:oneOfType:shape:exact:;h.prototype=Error.prototype,f.checkPropTypes=u,f.resetWarningCache=u.resetWarningCache,f.PropTypes=f,f}},826364:function(t){"use strict";var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,o){for(var u,s,a=i(t),c=1;c<arguments.length;c++){for(var f in u=Object(arguments[c]))r.call(u,f)&&(a[f]=u[f]);if(e){s=e(u);for(var h=0;h<s.length;h++)n.call(u,s[h])&&(a[s[h]]=u[s[h]])}}return a}},271684:642493:function(t){t.exports=function(){"use strict";var t=Array.prototype.slice;unction r(t){return u(t)?t:W(t)}function n(t){return s(t)?t:B(t)}nction u(t){return!(!t||!t[h])}function s(t){return!(!t||!t[p])}function a(t){return!(!t||!t[l])}unction f(t){return!(!t||!t[d])}e(n,r),e(i,r),e(o,r),r.isIterable=u,r.isKeyed=s,r.isIndexed=a,r.isAssociative=c,r.isOrdered=f,r.Keyed=n,r.Indexed=i,r.Set=o;var h="@@__IMMUTABLE_ITERABLE__@@",p="@@__IMMUTABLE_KEYED__@@",l="@@__IMMUTABLE_INDEXED__@@",d="@@__IMMUTABLE_ORDERED__@@",v=32,_=31,y={},m={value:!1},g={value:!1};nction S(){}unction"==typeof Symbol&&Symbol.iterator,D="@@iterator",M=U||D;tion R(t){return t&&"function"==typeof t.next}type.toString=A.KEYS=0,A.VALUES=1,A.ENTRIES=2,A.prototype.inspect=A.prototype.toSource=function(){return this.toString()},A.prototype[M]=function(){return this},e(W,r),W.of=function(){return W(arguments)},W.prototype.toSeq=function(){return this},W.prototype.toString=function(){return this.__toString("Seq {","}")},W.prototype.cacheResult=W.prototype.__iterate=function(t,e){return ot(this,t,e,!0)},W.prototype.__iterator=function(t,e){return ut(this,t,e,!0)},e(B,W),B.prototype.toKeyedSeq=function(){return this},e(L,W),L.of=function(){return L(arguments)},L.prototype.toIndexedSeq=function(){return this},L.prototype.toString=function(){return this.__toString("Seq [","]")},L.prototype.__iterate=function(t,e){return ot(this,t,e,!1)},L.prototype.__iterator=e(F,W),F.of=F.prototype.toSetSeq=function(){return this},W.isSeq=tt,W.Keyed=B,W.Set=F,W.Indexed=L;var J,$,H,G="@@__IMMUTABLE_SEQ__@@";function Y(t){this._array=t,this.size=t.length}ction tt(t){return!(!t||!t[G])}unction mt(){}function gt(){}W.prototype[G]=!0,e(Y,L),Y.prototype.get=Y.prototype.__iterate=Y.prototype.__iterator=e(Q,B),Q.prototype.get=Q.prototype.has=function(t){return this._object.hasOwnProperty(t)},Q.prototype.__iterate=Q.prototype.__iterator=Q.prototype[d]=!0,e(X,L),X.prototype.__iterateUncached=X.prototype.__iteratorUncached=e(Z,L),Z.prototype.__iterateUncached=Z.prototype.__iteratorUncached=e(lt,L),lt.prototype.toString=lt.prototype.get=lt.prototype.includes=lt.prototype.slice=lt.prototype.reverse=lt.prototype.indexOf=lt.prototype.lastIndexOf=lt.prototype.__iterate=lt.prototype.__iterator=lt.prototype.equals=e(vt,L),vt.prototype.toString=vt.prototype.get=vt.prototype.includes=vt.prototype.slice=vt.prototype.indexOf=vt.prototype.lastIndexOf=function(t){return this.indexOf(t)},vt.prototype.__iterate=vt.prototype.__iterator=vt.prototype.equals=e(_t,r),e(yt,_t),e(mt,_t),e(gt,_t),_t.Keyed=yt,_t.Indexed=mt,_t.Set=gt;var bt="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul: Ot=Object.isExtensible,Pt=);var xt,Et="function"==typeof WeakMap;Et&&(xt=new WeakMap);var jt=0,zt="__immutablehash__";"function"==typeof Symbol&&(zt=Symbol(zt));var kt=16,Ut=255,Dt=0,Mt={};nction Tt(t){return!(!t||!t[Rt])}e(qt,yt),qt.of=qt.prototype.toString=function(){return this.__toString("Map {","}")},qt.prototype.get=qt.prototype.set=function(t,e){return Yt(this,t,e)},qt.prototype.setIn=qt.prototype.remove=function(t){return Yt(this,t,y)},qt.prototype.deleteIn=qt.prototype.update=qt.prototype.updateIn=qt.prototype.clear=qt.prototype.merge=function(){return te(this,void 0,arguments)},qt.prototype.mergeWith=function(e){return te(this,e,t.call(arguments,1))},qt.prototype.mergeIn=function(e){var r=t.call(arguments,1);return this.updateIn(e,Gt(),(function(t){return"function"==typeof t.merge?t.merge.apply(t,r):r[r.length-1]}))},qt.prototype.mergeDeep=function(){return te(this,ee,arguments)},qt.prototype.mergeDeepWith=function(e){var r=t.call(arguments,1);return te(this,re(e),r)},qt.prototype.mergeDeepIn=qt.prototype.sort=function(t){return Ee(Le(this,t))},qt.prototype.sortBy=function(t,e){return Ee(Le(this,e,t))},qt.prototype.withMutations=qt.prototype.asMutable=qt.prototype.asImmutable=qt.prototype.wasAltered=qt.prototype.__iterator=qt.prototype.__iterate=qt.prototype.__ensureOwner=qt.isMap=Tt;var Ct,Rt="@@__IMMUTABLE_MAP__@@",Kt=qt.prototype;function Nt(t,e){this.ownerID=t,this.entries=e}function Vt(t,e,r){this.ownerID=t,this.bitmap=e,this.nodes=r}function Wt(t,e,r){this.ownerID=t,this.count=e,this.nodes=r}function Bt(t,e,r){this.ownerID=t,this.keyHash=e,this.entries=r}te=Kt.remove,Kt.removeIn=Kt.deleteIn,Nt.prototype.get=function(t,e,r,n){for(var i=this.entries,o=0,u=i.length;o<u;o++)if(ht(r,i[o][0]))return i[o][1];return n},Nt.prototype.update=Vt.prototype.get=Vt.prototype.update=Wt.prototype.get=Wt.prototype.update=Bt.prototype.get=Bt.prototype.update=Lt.prototype.get=Lt.prototype.update=Nt.prototype.iterate=Bt.prototype.iterate=Vt.prototype.iterate=Wt.prototype.iterate=Lt.prototype.iterate=e(Ft,A),Ft.prototype.next=var se=8,ae=16,ce=8;unction he(t){return!(!t||!t[pe])}e(fe,mt),fe.of=function(){return this(arguments)},fe.prototype.toString=function(){return this.__toString("List [","]")},fe.prototype.get=fe.prototype.set=fe.prototype.remove=fe.prototype.insert=fe.prototype.clear=fe.prototype.push=fe.prototype.pop=fe.prototype.unshift=fe.prototype.shift=fe.prototype.merge=fe.prototype.mergeWith=fe.prototype.mergeDeep=fe.prototype.mergeDeepWith=fe.prototype.setSize=fe.prototype.slice=fe.prototype.__iterator=fe.prototype.__iterate=fe.prototype.__ensureOwner=fe.isList=he;var pe="@@__IMMUTABLE_LIST__@@",le=fe.prototype;e[pe]=!0,le.delete=le.remove,le.setIn=Kt.setIn,le.deleteIn=le.removeIn=Kt.removeIn,le.update=Kt.update,le.updateIn=Kt.updateIn,le.mergeIn=Kt.mergeIn,le.mergeDeepIn=Kt.mergeDeepIn,le.withMutations=Kt.withMutations,le.asMutable=Kt.asMutable,le.asImmutable=Kt.asImmutable,le.wasAltered=Kt.wasAltered,de.prototype.removeBefore=de.prototype.removeAfter=var ve,_e,ye={};this._iter=t,this.size=t.size}function Ae(t){this._iter=t,this.size=t.size}n(){return this(arguments)},Ee.prototype.toString=function(){return this.__toString("OrderedMap {","}")},Ee.prototype.get=Ee.prototype.clear=Ee.prototype.set=Ee.prototype.remove=Ee.prototype.wasAltered=Ee.prototype.__iterate=Ee.prototype.__iterator=Ee.prototype.__ensureOwner=Ee.isOrderedMap=je,Ee.prototype[d]=!0,Ee.prototype.delete=Ee.prototype.remove,e(De,B),De.prototype.get=De.prototype.has=function(t){return this._iter.has(t)},De.prototype.valueSeq=function(){return this._iter.valueSeq()},De.prototype.reverse=De.prototype.map=De.prototype.__iterate=De.prototype.__iterator=De.prototype[d]=!0,e(Me,L),Me.prototype.includes=function(t){return this._iter.includes(t)},Me.prototype.__iterate=Me.prototype.__iterator=e(Ae,F),Ae.prototype.has=function(t){return this._iter.includes(t)},Ae.prototype.__iterate=Ae.prototype.__iterator=e(qe,B),qe.prototype.entrySeq=function(){return this._iter.toSeq()},qe.prototype.__iterate=qe.prototype.__iterator=Me.prototype.cacheResult=De.prototype.cacheResult=Ae.prototype.cacheResult=qe.prototype.cacheResult=Ze,e(rr,yt),rr.prototype.toString=rr.prototype.has=function(t){return this._defaultValues.hasOwnProperty(t)},rr.prototype.get=rr.prototype.clear=rr.prototype.set=rr.prototype.remove=rr.prototype.wasAltered=function(){return this._map.wasAltered()},rr.prototype.__iterator=function(t,e){var r=this;return n(this._defaultValues).map((function(t,e){return r.get(e)})).__iterator(t,e)},rr.prototype.__iterate=rr.prototype.__ensureOwner=var nr=rr.prototype;lete=nr.remove,nr.deleteIn=nr.removeIn=Kt.removeIn,nr.merge=Kt.merge,nr.mergeWith=Kt.mergeWith,nr.mergeIn=Kt.mergeIn,nr.mergeDeep=Kt.mergeDeep,nr.mergeDeepWith=Kt.mergeDeepWith,nr.mergeDeepIn=Kt.mergeDeepIn,nr.setIn=Kt.setIn,nr.update=Kt.update,nr.updateIn=Kt.updateIn,nr.withMutations=Kt.withMutations,nr.asMutable=Kt.asMutable,nr.asImmutable=Kt.asImmutable,e(sr,gt),sr.of=sr.fromKeys=sr.prototype.toString=sr.prototype.has=sr.prototype.add=sr.prototype.remove=sr.prototype.clear=sr.prototype.union=sr.prototype.intersect=sr.prototype.subtract=sr.prototype.merge=sr.prototype.mergeWith=sr.prototype.sort=sr.prototype.sortBy=sr.prototype.wasAltered=sr.prototype.__iterate=sr.prototype.__iterator=sr.prototype.__ensureOwner=sr.isSet=ar;var cr,fr="@@__IMMUTABLE_SET__@@",hr=sr.prototype;unction lr(t,e){var r=Object.create(hr);return r.size=t?t.size:0,r._map=t,r.__ownerID=e,r}function dr(){return cr||(cr=lr(Gt()))}unction _r(t){return ar(t)&&f(t)}hr[fr]=!0,hr.delete=hr.remove,hr.mergeDeep=hr.merge,hr.mergeDeepWith=hr.mergeWith,hr.withMutations=Kt.withMutations,hr.asMutable=Kt.asMutable,hr.asImmutable=Kt.asImmutable,hr.__empty=dr,hr.__make=lr,e(vr,sr),vr.of=function(){return this(arguments)},vr.fromKeys=function(t){return this(n(t).keySeq())},vr.prototype.toString=function(){return this.__toString("OrderedSet {","}")},vr.isOrderedSet=_r;var yr,mr=vr.prototype;ction Sr(t){return!(!t||!t[Or])}mr[d]=!0,mr.__empty=br,mr.__make=gr,e(wr,mt),wr.of=function(){return this(arguments)},wr.prototype.toString=function(){return this.__toString("Stack [","]")},wr.prototype.get=wr.prototype.peek=wr.prototype.push=wr.prototype.pushAll=wr.prototype.pop=function(){return this.slice(1)},wr.prototype.unshift=function(){return this.push.apply(this,arguments)},wr.prototype.unshiftAll=function(t){return this.pushAll(t)},wr.prototype.shift=function(){return this.pop.apply(this,arguments)},wr.prototype.clear=wr.prototype.slice=wr.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?xr(this.size,this._head,t,this.__hash):(this.__ownerID=t,this.__altered=!1,this)},wr.prototype.__iterate=wr.prototype.__iterator=wr.isStack=Sr;var Ir,Or="@@__IMMUTABLE_STACK__@@",Pr=wr.prototype;function xr(t,e,r,n){var i=Object.create(Pr);return i.size=t,i._head=e,i.__ownerID=r,i.__hash=n,i.__altered=!1,i}function Er(){return Ir||(Ir=xr(0))}r[Or]=!0,Pr.withMutations=Kt.withMutations,Pr.asMutable=Kt.asMutable,Pr.asImmutable=Kt.asImmutable,Pr.wasAltered=Kt.wasAltered,r.Iterator=A,jr(r,{toArray:toIndexedSeq:function(){return new Me(this)},toJS:function(){return this.toSeq().map((function(t){return t&&"function"==typeof t.toJS?t.toJS():t})).__toJS()},toJSON:toKeyedSeq:function(){return new De(this,!0)},toMap:function(){return qt(this.toKeyedSeq())},toObject:toOrderedMap:toOrderedSet:function(){return vr(s(this)?this.valueSeq():this)},toSet:function(){return sr(s(this)?this.valueSeq():this)},toSetSeq:function(){return new Ae(this)},toSeq:toStack:function(){return wr(s(this)?this.valueSeq():this)},toList:toString:function(){return"[Iterable]"},__toString:concat:includes:function(t){return this.some((function(e){return ht(e,t)}))},entries:function(){return this.__iterator(2)},every:filter:function(t,e){return He(this,Ke(this,t,e,!0))},find:forEach:join:keys:function(){return this.__iterator(0)},map:function(t,e){return He(this,Ce(this,t,e))},reduce:reduceRight:reverse:function(){return He(this,Re(this,!0))},slice:function(t,e){return He(this,Ne(this,t,e,!0))},some:sort:values:function(){return this.__iterator(1)},butLast:isEmpty:count:countBy:equals:function(t){return pt(this,t)},entrySeq:filterNot:function(t,e){return this.filter(Mr(t),e)},findEntry:findKey:findLast:function(t,e,r){return this.toKeyedSeq().reverse().find(t,e,r)},findLastEntry:findLastKey:first:function(){return this.find(x)},flatMap:flatten:function(t){return He(this,Be(this,t,!0))},fromEntrySeq:get:getIn:groupBy:has:function(t){return this.get(t,y)!==y},hasIn:isSubset:isSuperset:keyOf:keySeq:last:lastKeyOf:max:maxBy:function(t,e){return Fe(this,e,t)},min:minBy:rest:function(){return this.slice(1)},skip:skipLast:function(t){return He(this,this.toSeq().reverse().skip(t).reverse())},skipWhile:function(t,e){return He(this,Ve(this,t,e,!0))},skipUntil:function(t,e){return this.skipWhile(Mr(t),e)},sortBy:take:takeLast:takeWhile:takeUntil:valueSeq:function(){return this.toIndexedSeq()},hashCode:);var zr=r.prototype;zr[h]=!0,zr[M]=zr.values,zr.__toJS=zr.toArray,zr.__toStringMapper=qr,zr.inspect=zr.toSource=function(){return this.toString()},zr.chain=zr.flatMap,zr.contains=zr.includes,jr(n,{flip:mapEntries:mapKeys:);var kr=n.prototype;r[p]=!0,kr[M]=zr.entries,kr.__toJS=zr.toObject,kr.__toStringMapper=jr(i,{toKeyedSeq:filter:function(t,e){return He(this,Ke(this,t,e,!1))},findIndex:function(t,e){var r=this.findEntry(t,e);return r?r[0]:-1},indexOf:function(t){var e=this.keyOf(t);return void 0===e?-1:e},lastIndexOf:reverse:slice:function(t,e){return He(this,Ne(this,t,e,!1))},splice:findLastIndex:first:flatten:get:has:interpose:interleave:keySeq:last:skipWhile:zip:zipWith:),i.prototype[l]=!0,i.prototype[d]=!0,jr(o,{get:includes:keySeq:function(){return this.valueSeq()}}),o.prototype.has=zr.includes,o.prototype.contains=o.prototype.includes,jr(B,n.prototype),jr(L,i.prototype),jr(F,o.prototype),jr(yt,n.prototype),jr(mt,i.prototype),jr(gt,o.prototype),{Iterable:r,Seq:W,Collection:_t,Map:qt,OrderedMap:Ee,List:fe,Stack:wr,Set:sr,OrderedSet:vr,Record:rr,Range:vt,Repeat:lt,is:ht,fromJS:st}}()},364902:439564:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n=r(542390),i=u(r(45697)),o=u(r(645556));function u(t){return t&&t.__esModule?t:{default:t}}u(r(439195));var s=n.Component);e.default=s,s.propTypes={store:o.default.isRequired,children:i.default.element.isRequired},s.childContextTypes={store:o.default.isRequired}},805811:function(t,e,r){"use strict";e.__esModule=!0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=var i=r(542390),o=f(r(645556)),u=f(r(733379)),s=f(r(576983)),a=(f(r(439195)),f(r(968630)),f(r(271684))),c=f(r(441143));function f(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=v=_=ar m={value:null};ar b=0},605553:733379:645556:function(t,e,r){"use strict";e.__esModule=!0;var n,i=(n=r(45697))&&n.__esModule?n:{default:n};e.default=i.default.shape({subscribe:i.default.func.isRequired,dispatch:i.default.func.isRequired,getState:i.default.func.isRequired})},439195:576983:407026:function(t){"use strict";t.exports={escape:unescape:},729055:766355:233153:function(t,e,r){"use strict";var n=r(718327),i=r(364902),o=r(134260),u=(r(259926),r(383677));function s(t,e,r){this.props=t,this.context=e,this.refs=u,this.updater=r||o}673759),r(772030),s.prototype.isReactComponent={},s.prototype.setState=s.prototype.forceUpdate=c.prototype=s.prototype,a.prototype=new c,a.prototype.constructor=a,i(a.prototype,s.prototype),a.prototype.isPureReactComponent=!0,t.exports={Component:s,PureComponent:a}},722472:94120:516964:753471:function(t,e,r){"use strict";var n=r(364902),i=r(94120),o=(r(663620),r(259926),Object.prototype.hasOwnProperty),u=r(603217),s={key:!0,ref:!0,__self:!0,__source:!0};function a(t){return void 0!==t.ref}ar f=f.createElement=f.createFactory=f.cloneAndReplaceKey=f.cloneElement=f.isValidElement=t.exports=f},603217:function(t){"use strict";var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;t.exports=e},134260:function(t,e,r){"use strict";r(663620);t.exports={isMounted:enqueueCallback:function(t,e){},enqueueForceUpdate:enqueueReplaceState:function(t,e){},enqueueSetState:},251492:645737:259926:845086:701551:function(t){"use strict";var e="function"==typeof Symbol&&Symbol.iterator;t.exports=,772030:938049:718327:function(t){"use strict";t.exports=,816274:function(t,e,r){"use strict";var n=r(718327),i=(r(94120),r(603217)),o=r(701551),u=(r(673759),r(407026));663620),t.exports=,542390:895681:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reducerEnhancer=e.defaultState=e.SET_DEFAULT_UI_STATE=e.UPDATE_UI_STATE=e.MASS_UPDATE_UI_STATE=void 0,e.default=p,e.updateUI=function(t,e,r){return{type:s,payload:{key:t,name:e,value:r}}},e.massUpdateUI=function(t,e){return{type:u,payload:{uiVars:t,transforms:e}}},e.setDefaultUI=e.unmountUI=e.mountUI=var n,i=r(642493),o=(n=r(441143))&&n.__esModule?n:{default:n},u=e.MASS_UPDATE_UI_STATE="@@redux-ui/MASS_UPDATE_UI_STATE",s=e.UPDATE_UI_STATE="@@redux-ui/UPDATE_UI_STATE",a=e.SET_DEFAULT_UI_STATE="@@redux-ui/SET_DEFAULT_UI_STATE",c="@@redux-ui/MOUNT_UI_STATE",f="@@redux-ui/UNMOUNT_UI_STATE",h=e.defaultState=new i.Map({__reducers:new i.Map({})});function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments[1],r=e.payload&&(e.payload.key||[]);switch(Array.isArray(r)||(r=[r]),e.type){case s:var n=e.payload,p=n.name,l=n.value;t="function"==typeof l?t.updateIn(r.concat(p),l):t.setIn(r.concat(p),l);break;case u:var d=e.payload,v=d.uiVars,_=d.transforms;t=t.withMutations((function(t){Object.keys(_).forEach((function(e){var r=v[e];(0,o.default)(r,"Couldn't find variable "+e+" within your component's UI state context. Define "+e+" before using it in the @ui decorator"),t.setIn(r.concat(e),_[e])}))}));break;case a:t=t.setIn(r,new i.Map(e.payload.value));break;case c:var y=e.payload,m=y.defaults,g=y.customReducer;t=t.withMutations((function(t){if(t.setIn(r,new i.Map(m)),g){var e=r.join(".");t.setIn(["__reducers",e],{path:r,func:g})}return t}));break;case f:t=t.withMutations((function(t){t.deleteIn(r),t.deleteIn(["__reducers",r.join(".")])}))}var b=t.get("__reducers");return b.size>0&&(t=t.withMutations((function(t){return b.forEach((function(r){var n=r.path,i=(0,r.func)(t.getIn(n),e);if(void 0===i)throw new Error("Your custom UI reducer at path "+n.join(".")+" must return some state");t.setIn(n,i)})),t}))),t}e.reducerEnhancer=function(t){return function(e,r){return e=p(e,r),"function"==typeof t&&(e=t(e,r)),e}}},498481:523385:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i=Object.assign||o=),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===t?"undefined":u(t))&&(t=(e=t).key);var r=(0,p.connect)((,(,e.mergeProps,e.options);return function(h){var p,_;return r((_=p=function(r){function a(e,r,n){y(this,a);var i=m(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e,r,n));return i.key=void 0===t?(h.displayName||h.name)+Math.floor(Math.random()*(1<<30)).toString(16):"function"==typeof t?t(e):t,i.getMergedContextVars(r),i.updateUI=i.updateUI.bind(i),i.resetUI=i.resetUI.bind(i),i.isUIDirty=i.isUIDirty.bind(i),i._cachedUIProps={},i}return g(a,r),o(a,[{key:"componentWillMount",value:function(){if(void 0===this.props.ui.getIn(this.uiPath)&&e.state){var t=this.getDefaultUIState(e.state);this.context.store.dispatch((0,d.mountUI)(this.uiPath,t,e.reducer))}}},{key:"componentWillReceiveProps",value:function(t){if(void 0===(0,v.getUIState)(this.context.store.getState()).getIn(this.uiPath)&&e.state){var r=this.getDefaultUIState(e.state,t);this.props.setDefaultUI(this.uiPath,r)}}},{key:"getDefaultUIState",value:function(t){var e=this,r=(arguments.length>1&&void 0!==arguments[1]||this.props,this.context.store.getState()),n=i({},t);return Object.keys(n).forEach((function(t){"function"==typeof n[t]&&(n[t]=n[t](e.props,r))})),n}},{key:"componentWillUnmount",value:function(){var t=this;!0!==e.persist&&(window&&window.requestAnimationFrame?window.requestAnimationFrame(():this.props.unmountUI(this.uiPath))}},{key:"getMergedContextVars",value:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.context;if(!this.uiVars||!this.uiPath){var n=r.uiPath||[];this.uiPath=n.concat(this.key);var o=e.state||{};this.uiVars=i({},r.uiVars)||{},Object.keys(o).forEach((,this)}return[this.uiVars,this.uiPath]}},{key:"getChildContext",value:function(){var t=this.getMergedContextVars(),e=n(t,2),r=e[0],i=e[1];return{uiKey:this.key,uiVars:r,uiPath:i,updateUI:this.updateUI,resetUI:this.resetUI,isUIDirty:this.isUIDirty}}},{key:"resetUI",value:function(){this.props.setDefaultUI(this.uiPath,this.getDefaultUIState(e.state))}},{key:"updateUI",value:function(t,e){var r=this.getMergedContextVars(),i=n(r,1)[0][t];"object"!==(void 0===t?"undefined":u(t))||void 0!==e?((0,l.default)(i,"The '"+t+"' UI variable is not defined in the UI context in \""+(h.displayName||h.name)+'" or any parent UI context. Set this variable using the "state" option in the @ui decorator before using it.'),this.props.updateUI(i,t,e)):this.props.massUpdateUI(this.uiVars,t)}},{key:"mergeUIProps",value:function(){var t=this,e=(0,v.getUIState)(this.context.store.getState()),r=!0,n=Object.keys(this.uiVars).reduce((function(n,i){return n[i]=e.getIn(t.uiVars[i].concat(i)),r&&t._cachedUIProps[i]!==n[i]&&(r=!1),n}),{})||{};return this._cachedUIProps=r?this._cachedUIProps:n,this._cachedUIProps}},{key:"isUIDirty",value:function(){var t=new s.Map(this.getDefaultUIState(e.state)),r=(0,v.getUIState)(this.context.store.getState()).get(this.key);return e.dirty?e.dirty(t,r):!t.equals(r)}},{key:"render",value:function(){return c.default.createElement(h,i({},this.props,{uiKey:this.key,uiPath:this.uiPath,ui:this.mergeUIProps(),resetUI:this.resetUI,updateUI:this.updateUI,isUIDirty:this.isUIDirty}))}}]),a}(a.Component),p.propTypes={ui:f.object.isRequired,setDefaultUI:f.func.isRequired,updateUI:f.func.isRequired,massUpdateUI:f.func.isRequired},p.childContextTypes={uiKey:f.string,uiPath:f.array,uiVars:f.object,updateUI:f.func,resetUI:f.func,isUIDirty:f.func},p.contextTypes={store:f.any,uiKey:f.string,uiPath:f.array,uiVars:f.object,updateUI:f.func,resetUI:f.func,isUIDirty:f.func},_))}};var s=r(642493),a=r(542390),c=_(a),f=r(45697),h=r(522010),p=r(605553),l=_(r(441143)),d=r(895681),v=r(167931);7931:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUIState=function(t){return"function"==typeof t.get?t.get("ui"):t.ui}}}]);