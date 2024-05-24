/*! For license information please see ardplayer-libimsc.37a377ae.chunk.js.LICENSE.txt */
(self.webpackChunkardplayer=self.webpackChunkardplayer||[]).push([[984],{3069:3959:4205:2549:9892:function(t,e,n){!e,"undefined"==typeof sax?n(6330):sax,"undefined"==typeof imscNames?n(4841):imscNames,"undefined"==typeof imscStyles?n(7668):imscStyles,"undefined"==typeof imscUtils?n(1095):imscUtils)},977:function(t,e,n){!ition"}(e,"undefined"==typeof imscNames?n(4841):imscNames,"undefined"==typeof imscStyles?n(7668):imscStyles,"undefined"==typeof imscUtils?n(1095):imscUtils)},7131:function(t,e,n){!function(t,e,n,r){t.geneturn a};var i=[n.byName.color.qname,n.byName.textCombine.qname,n.byName.textDecoration.qname,n.byName.textEmphasis.qname,n.byName.textOutline.qname,n.byName.textShadow.qname];function o(t,e,l,c,h,p,d,g,y){if(e<d.begin||e>=d.end)return null;var m="regionID"in d&&""!==d.regionID?d.regionID:p;if(null!==h&&m!==l.id&&(!("contents"in d)||"contents"in d&&0===d.contents.length||""!==m))return null;var b=new u(d);if("sets"in d)for(var v=0;v<d.sets.length;v++)e<d.sets[v].begin||e>=d.sets[v].end||(b.styleAttrs[d.sets[v].qname]=d.sets[v].value);var w={};for(var _ in b.styleAttrs)if(b.styleAttrs.hasOwnProperty(_)&&(w[_]=!0,"region"===b.kind&&_===n.byName.writingMode.qname&&!(n.byName.direction.qname in b.styleAttrs))){var E=b.styleAttrs[_];"lrtb"===E||"lr"===E?b.styleAttrs[n.byName.direction.qname]="ltr":"rltb"!==E&&"rl"!==E||(b.styleAttrs[n.byName.direction.qname]="rtl")}if(null!==h)for(var T=0;T<n.all.length;T++){var N=n.all[T];if(N.qname===n.byName.textDecoration.qname){var A=h.styleAttrs[N.qname],S=b.styleAttrs[N.qname],x=[];void 0===S?x=A:-1===S.indexOf("none")?((-1===S.indexOf("noUnderline")&&-1!==A.indexOf("underline")||-1!==S.indexOf("underline"))&&x.push("underline"),(-1===S.indexOf("noLineThrough")&&-1!==A.indexOf("lineThrough")||-1!==S.indexOf("lineThrough"))&&x.push("lineThrough"),(-1===S.indexOf("noOverline")&&-1!==A.indexOf("overline")||-1!==S.indexOf("overline"))&&x.push("overline")):x.push("none"),b.styleAttrs[N.qname]=x}else if(N.qname!==n.byName.fontSize.qname||N.qname in b.styleAttrs||"span"!==b.kind||"textContainer"!==b.styleAttrs[n.byName.ruby.qname])if(N.qname!==n.byName.fontSize.qname||N.qname in b.styleAttrs||"span"!==b.kind||"text"!==b.styleAttrs[n.byName.ruby.qname])N.inherit&&N.qname in h.styleAttrs&&!(N.qname in b.styleAttrs)&&(b.styleAttrs[N.qname]=h.styleAttrs[N.qname]);else{var L=h.styleAttrs[n.byName.fontSize.qname];"textContainer"===h.styleAttrs[n.byName.ruby.qname]?b.styleAttrs[N.qname]=L:b.styleAttrs[N.qname]=new r.ComputedLength(.5*L.rw,.5*L.rh)}else{var C=h.styleAttrs[n.byName.fontSize.qname];b.styleAttrs[N.qname]=new r.ComputedLength(.5*C.rw,.5*C.rh)}}for(var R=0;R<n.all.length;R++){var I=n.all[R];if(!(I.qname in b.styleAttrs)&&!(I.qname===n.byName.position.qname&&n.byName.origin.qname in b.styleAttrs||I.qname===n.byName.origin.qname&&n.byName.position.qname in b.styleAttrs)){var O=t.head.styling.initials[I.qname]||I.initial;if(null!==O&&("region"===b.kind||!1===I.inherit&&null!==O)){var k=I.parse(O);null!==k?(b.styleAttrs[I.qname]=k,w[I.qname]=!0):f(g,"Invalid initial value for '"+I.qname+"' on element '"+b.kind)}}}for(var D=0;D<n.all.length;D++){var M=n.all[D];if(M.qname in w&&null!==M.compute){var P=M.compute(t,h,b,b.styleAttrs[M.qname],y);null!==P?b.styleAttrs[M.qname]=P:(b.styleAttrs[M.qname]=M.compute(t,h,b,M.parse(M.initial),y),f(g,"Style '"+M.qname+"' on element '"+b.kind+"' cannot be computed"))}}if("none"===b.styleAttrs[n.byName.display.qname])return null;var F=null;null===h?F=null===c?[]:[c]:"contents"in d&&(F=d.contents);for(var U=0;null!==F&&U<F.length;U++){var B=o(t,e,l,c,b,m,F[U],g,y);null!==B&&b.contents.push(B.element)}for(var q in b.styleAttrs)if(b.styleAttrs.hasOwnProperty(q)){var j=!1;if("span"===b.kind){var W=b.styleAttrs[n.byName.ruby.qname];(j=("container"===W||"textContainer"===W||"baseContainer"===W)&&-1!==i.indexOf(q))||(j="container"!==W&&q===n.byName.rubyAlign.qname),j||(j=!("textContainer"===W||"text"===W)&&q===n.byName.rubyPosition.qname)}if(!j){var V=n.byQName[q];"applies"in V&&(j=-1===V.applies.indexOf(b.kind))}j&&delete b.styleAttrs[q]}var G=b.styleAttrs[n.byName.ruby.qname];if("p"===b.kind||"span"===b.kind&&("textContainer"===G||"text"===G)){var H=[];a(b,H),functext)}for(var r,i=0;i<t.length;)if("br"!==(r=t[i]).kind&&"preserve"!==r.space){var o=r.text.replace(/[\t\r\n ]+/g," ");/^[ ]/.test(o)&&(0===i||e(t[i-1]))&&(o=o.substring(1)),r.text=o,0===o.length?t.splice(i,1):i++}else i++;for(i=0;i<t.length;i++)"br"!==(r=t[i]).kind&&"preserve"!==r.space?/[ ]$/.test(r.text)&&(i===t.length-1||n(t[i+1]))&&(r.text=r.text.slice(0,-1)):i++}(H),s(b)}return"div"===b.kind&&n.byName.backgroundImage.qname in b.styleAttrs||"br"===b.kind||"image"===b.kind||"contents"in b&&b.contents.length>0||"span"===b.kind&&null!==b.text||"region"===b.kind&&"always"===b.styleAttrs[n.byName.showBackground.qname]?{region_id:m,element: e}}(e,"undefined"==typeof imscNames?n(4841):imscNames,"undefined"==typeof imscStyles?n(7668):imscStyles,"undefined"==typeof imscUtils?n(1095):imscUtilsrender},4841:functiostyle"}(e)},7668:function(all[o]}(e,"undefined"==typeof imscNames?n(4841):imscNames,"undefined"==typeof imscUtils?n(1095):imscUtils)},1095:functio:null}}(eor=t}}},5415:function(t){"use strict";vg(t))}n("ERR_INVALID_OPT_+t+'"'}),TypeError),n("ERR_INVALID_ARGeof n)}),TypeError),n("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),n("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),n("ERR_STREAM_PREMATURE_CLOSE","Premature close"),n("ERR_STREAM_DESTroyed"})),n("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),n("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),n("ERR_STREAM_WRITE_AFTER_END","write after end"),n("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),n("ERR_UNKNOWN_ENCg: "+t}),TypeError),n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=t)}ll,t)}},1073:function(t,e,n){"use strict";var r;t.exports=N,N.ReadableState=T,n(4205).EventEmitter;length},a=n(692),s=n(3959).Buffer,l=(void 0!==n.g?n.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},u=n(751);i=u&&u.debuglog?u.debuglog("stream"):function(){};var f,c,h,p=n(6429),d=n(1509),g=n(2434).getHighWaterMark,y=n(5415).q,m=y.ERR_INVALID_ARG_TYPE,b=y.ERR_STREAM_PUSH_AFTER_EOF,v=y.ERR_METHOD_NOT_IMPLEMENTED,w=y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;n(2174)(N,a);var _=d.errorOrDestroy,E=["error","close","destroy","pause","r,e)}Object.defineProperty(N.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),N.prototype.destroy=d.destroy,N.prototype._undestroy=d.undestroy,N.prototype._destroy=function(t,e){e(t)},N.prototy,!1,n)},N.prototype.!0,!1)},N.prototype.ilowing},N.prototype.setEh,this};var x=107toty",r),r},N.prototypd()"))},N.prototye()),t},N.prototype),this},N.protos))),n},N.prototype.addListener=N.prototype.on,N.prototype.removeLhis),n},N.prototype.removeAllLihis),e},N.prototype1,this},N.prototyp0,this},N.prototy},this},"function"==typeof Symbol&&(N.prototype[Symbol.asyncIt(this)}),Object.defineProperty(N.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(N.prototype,"readableBuffer",{enumerablebuffer}}),Object.defineProperty(N.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),N._fromList=F,Object.defineProperty(N.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&N,t,e)}t)}))}},8448:function(t,e,n){"use (e,t)}}var i;t.exports=N,N.WritableState=T;var o,a={deprecate:n(6138)},s=n(692),l=n(3959).Buffer,u=(void 0!==n.g?n.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},f=n(1509),c=n(2434).getHighWaterMark,h=n(5415).q,p=h.ERR_INVALID_ARG_TYPE,d=h.ERR_METHOD_NOT_IMPLEMENTED,g=h.ERR_MULTIPLE_CALLBACK,y=h.ERR_STREAM_CANNOT_PIPE,m=h.ERR_STREAM_DESTROYED,b=h.ERR_STREAM_NULL_VALUES,v=h.ERR_STREAM_WRITE_AFTER_END,w=h.ERR_UNKNOWN_ENCODING,_=f.errorOrDestroy;functin(2174)(N,s),T.prototype.geh(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(N,Symbol.hasInstanceceof f this},N.prototynew y)},N.prototyp,n)),o},N.prototyrked++},N.prototypeis,t))},N.prototype.setDefaultEt,this},Object.defineProperty(N.prototype,"writableBuffer",{enumerableffer()}}),Object.defineProperty(N.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),N.prototypee()"))},N.prototype._writev=null,N.protot),this},Object.defineProperty(N.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(N.prototype,"destroyed",{enumerabletroyyed=t)}}),N.prototype.destroy=f.destroy,N.prototype._undestroy=f.undestroy,N.prototype._){e(t)}},1151:function(t,e,n){"use stricte]=n,t}var o=n(4462),a=Symbol("lastResolve"),s=Symbol("lastReject"),l=Symbol("error"),u=Symbol("ended"),f=Symbol("lastPromise"),c=Symbol("handlePromise"),h=Symbol("sd,t)}var y=Object.getProtoion(){})),m=Object.setPrototypeOf((i(r={gehis[hf]=n,n}},Symbol.asyncItn this})),i(r,"r}))}))})),r),y);t.,n)),n),t}(",e)}",d)}ser")ce(u)6384mitteer(t)}},6330:function(t,e,n){var r=n(3959).int=x)}(e,n),teed-=s,arguments)}}},3671:function(){},751:function(){}}]);