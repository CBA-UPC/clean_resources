(self.webpackChunkdouyin_web=self.webpackChunkdouyin_web||[]).push([[4976],{87670:function(){},70632:function(t,e,r){"use strict";r.d(e,{E:function(){return S},w:function(){return _}});var n=r(81476),o=r(93650);r(19858);var i=r(19213),a=r(85049),u=r(23297),s=r.n(u),c=r(45205),l=r(23218),f=r.n(l),p=r(73058),h=r(24304),d=r(6351),g=new(r(91865)).hD({loginGuideShow:{eventName:"login_guide_show",params:{enter_from:"",enter_method:"",params_for_special:""}},loginGuideClick:{eventName:"login_guide_click",params:{enter_from:"",enter_method:"",params_for_special:""}}}),y={loginBtnWrapper:"eoOhNUXw",loginBtn:"DLu8yNUi",jumpBlock:"FYQOGjDp",isDetail:"hDkhlPTV"},v=r(68171),m=r(63316);let _=t=>{let{success:e=null,host:r=null,next:u=null,enterMethod:l="author_card_login_guide",destroy:d=null,change:g=close:y,className:m,blockNum:_,onShow:S,text:b,transition:k,notAnimate:w}=t,x=(0,a.useRef)(null),[C,E]=(0,a.useState)(!0),O=(0,a.useRef)(null),[D,K]=(0,c.Z)();(0,a.useEffect)([K]);let M=()=>{var t;null===(t=x.current)||void 0===t||t.call(x),null==d||d()},T=async()=>{var t;E(!0);let i=await (0,v.gE)({success:e,host:r,next:u,enterMethod:l,refreshNumber:0}),a=await (0,v.j1)();O.current=new a((0,o._)((0,n._)({},i),{success:t=>{if(null==t?void 0:t.redirect_url){s().get(null==t?void 0:t.redirect_url).then(()=>{var e;setTimeout(M,0),null==i||null===(e=i.success)||void 0===e||e.call(i,t),null==g||g()}).catch(()=>{M()});return}M()}})),null===(t=O.current)||void 0===t||t.setTeaConfig({ug_source:(0,p.Rs)("ug_source"),sem_keyword:(0,p.Rs)("sem_keyword"),browser_is_360:(0,h.a2)()?"1":"0"}),E(!1)};(0,a.useEffect)(()=>{T()},[]);let A=(0,a.useCallback)(()=>{var t,e;return(null===(t=O.current)||void 0===t?void 0:t.LoginContainer)?null===(e=O.current)||void 0===e?void 0:e.LoginContainer({}):(0,i.jsx)("div",{})},[]);return(0,i.jsx)("div",{className:f()("related-video-card-login-guide-block",m,{showBlockBtn:2===_,animate__fadeInUpBig:k,notAnimate:w}),ref:D,children:C?null:(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)("div",{className:"related-video-card-login-guide-block__content",children:[(0,i.jsx)(A,{}),(0,i.jsxs)("div",{className:"related-video-card-login-guide-block__desc",children:[(0,i.jsx)("p",{children:b}),(0,i.jsx)("p",{className:"related-video-card-login-guide-block__text",children:"打开【抖音】扫码登录"}),2===_&&(0,i.jsx)("div",{className:"related-video-card-login-guide-bl",onClick:()=>{y()},children:(0,i.jsx)("span",{children:"跳过登录"})})]})]})})})},S=t=>{let{blockNum:e,isDetail:r,handleUnLogin:n,handleJumpBlock:o,onShow:u,text:s,blockText:l,enterMethod:p}=t,[h,v]=(0,c.Z)();return(0,a.useEffect)(()=>{v&&(g.sendLog("loginGuideShow",{enter_from:(0,d.vM)(),enter_method:p,params_for_special:"uc_login"}),null==u||u())},[v]),(0,i.jsxs)("div",{ref:h,className:f()(y.loginBtnWrapper,{[y.isDetail]:r}),children:[2===e?(0,i.jsx)("div",{className:y.jumpBlock,onClick:o,children:(0,i.jsx)("span",{children:l})}):(0,i.jsx)("div",{children:s}),(0,i.jsx)(m.zx,{className:y.loginBtn,onClick:()=>{g.sendLog("loginGuideClick",{enter_from:(0,d.vM)(),enter_method:p,params_for_special:"uc_login"}),n()},children:"立即登录"})]})}},3158:function(t,e,r){"use strict";r.d(e,{A_:function(){return p},_0:function(){return d},_g:function(){return h},jb:function(){return f}}),r(19858),r(31538);var n=r(85049),o=r(14239),i=r.n(o),a=r(15868),u=r.n(a),s=r(31481),c=r(10624),l=r(22855);let f=t=>{let{lastTimes:e,total:r=0,actionClose:n=!1}=(0,c.$o)(t)||{};return i()(new Date).isSame(i()(e),"day")?{total:r,actionClose:n}:{total:0,actionClose:!1}},p=t=>{let{effectiveTime:e,type:r,abtestData:n}=t;if(!(r>0)||(null==n?void 0:n.pcCommentLoadLimit)||(null==n?void 0:n.pcAwePostLoadLimit)||(null==n?void 0:n.pcAweFavLoadLimit)||(null==n?void 0:n.pcCommentRepLoadLimit))return!1;{let{time:t=0}=l.Le.getConfig(l.gI.FirstInstallTime)||{};return Date.now()>(t+e)*1e3}},h=t=>{let{effectiveTime:e,type:r,abtestData:o,isLogin:i}=t,[a,l]=(0,n.useState)(0),[h,d]=(0,n.useState)(!1),g=(0,n.useRef)(!1),[y,v]=(0,n.useState)(!1),m=(0,n.useRef)(p({effectiveTime:e,type:r,abtestData:o}));return(0,n.useEffect)(()=>{m.current=p({effectiveTime:e,type:r,abtestData:o})},[e,r,o]),(0,n.useEffect)(()=>{var t;if([3,4].includes(null==o?void 0:null===(t=o.authorBlock)||void 0===t?void 0:t.type)&&m.current&&!i){let{total:t,actionClose:e}=f(s.LocalStorageKeys.AuthorBlock);t&&l(t),d(e)}},[o,i]),(0,n.useEffect)(()=>{var t;[3,4].includes(null==o?void 0:null===(t=o.authorBlock)||void 0===t?void 0:t.type)&&m.current&&!i&&h&&(g.current=!1)},[o,i,h]),{blockNum:a,setBlockNum:l,actionCloseBlock:h,setActionCloseBlock:d,refBlockShowMore:g,handleJumpBlock:()=>{var t;[3,4].includes(null==o?void 0:null===(t=o.authorBlock)||void 0===t?void 0:t.type)&&m.current&&g.current&&(d(!0),setTimeout(()=>{(0,c.qQ)(s.LocalStorageKeys.AuthorBlock,{lastTimes:Date.now(),actionClose:!0})},200))},refLoginBlock:m,getBlockNum:f,transition:y,isShowDebounce:u()(()=>{v(!0)},200),isHideDebounce:u()(()=>{v(!1)},200)}},d=t=>{let{effectiveTime:e,type:r,abtestData:o,isLogin:i,defaultCommentList:a}=t,[l,h]=(0,n.useState)(0),[d,g]=(0,n.useState)(!1),y=(0,n.useRef)(!1),[v,m]=(0,n.useState)(!1),_=(0,n.useRef)(p({effectiveTime:e,type:r,abtestData:o}));return(0,n.useEffect)(()=>{_.current=p({effectiveTime:e,type:r,abtestData:o})},[e,r,o]),(0,n.useEffect)(()=>{var t;if(!(null==o?void 0:null===(t=o.commentBlock)||void 0===t?void 0:t.is_force)&&_.current&&!i){let{total:t,actionClose:e}=f(s.LocalStorageKeys.CommentBlock);t&&h(t),g(e)}},[o,i]),(0,n.useEffect)(()=>{var t,e,r;(null==o?void 0:null===(t=o.commentBlock)||void 0===t?void 0:t.is_force)||!_.current||i||!d||(y.current=!1),(null==a?void 0:a.length)>(null==o?void 0:null===(e=o.commentBlock)||void 0===e?void 0:e.comment_total)&&(null==o?void 0:null===(r=o.commentBlock)||void 0===r?void 0:r.type)&&!i&&_.current&&!d&&(y.current=!0)},[o,i,d,a]),{blockNum:l,setBlockNum:h,actionCloseBlock:d,setActionCloseBlock:g,refBlockShowMore:y,handleJumpBlock:()=>{var t;(null==o?void 0:null===(t=o.commentBlock)||void 0===t?void 0:t.is_force)||!_.current||!y.current||(g(!0),setTimeout(()=>{(0,c.qQ)(s.LocalStorageKeys.CommentBlock,{lastTimes:Date.now(),actionClose:!0})},200))},refLoginBlock:_,getBlockNum:f,transition:v,isShowDebounce:u()(200),isHideDebounce:u()(()=>{m(!1)},200)}}},91460:function(t,e,r){"use strict";function n(t){if(t!==window)return{x:t.scrollLeft,y:t.scrollTop};{let t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}}r.d(e,{F:function(){return n}})},41069:function(t,e,r){"use strict";var n=r(79847),o=r(85049),i=r(dexOf(r)>=0||(o[r]=t[r]);return o}function f(t){var e=t.getCurrentContent().getBlockMap(),r=e.last().getKey(),o=e.last().getLength(),i=new n.SelectionState({anchorKey:r,anchorOffset:o,focusKey:r,focusOffset:o});return n.Edit.spfunction"==typeof t.getPropsForKey},d=function(t){var e=t.decorators,r=t.plugins;return(0,u.List)([{decorators:l==t?voidre=i?(decorators)?void 0:r.length:void 0},m=function(t){function e(e){var r;return(r=t.call(this,e)||this).editor=nurops.onChange){return[].ps=function(){r.props.readOnreadOnly&&r.setitorRef=function(ction(){return r.prdOnly,getEditorRef:r.getEditorRef}},r.createPluginHooks=function(){var t,e,n,o;return t=[r.props].concat(r.resolvePlugins()),e=r.getPluginMethods(),n={},o=new Set(["onChange"]),t.forEach(function(r){Object.keys(r).forEach(function(r){!o.has(r)&&===n.apply(void 0,o.concat([at([e]))})?"handled":"not-handled"}:r.endsWith("Fn")&&("blockRendererFn"===r?n.blockRendererFn=function(r){var n={props:{}};return t.forEach(function(t){if("function"==typeof t.blockRendererFn){var o=t.blockRendererFn(r,e);if(null!=o){var i=o.props,a=l(o,["props"]),u=n,s=u.props,f=l(u,["props"]);n=c({},f,a,{props:c({},s,i)})}}}),!!n.component&&n;null!=o&&n.push(o)}}),n.join(" ")}:=t.customStyleFn(r,n,e))})&&o?o:{}}:==(n=t.keyBindingFn(r,e))})ds&&t.push({handleKeyComunction(t,e){return c({}t.merge(r.props.blockRenderMriaExpanded=!0),t=c({},t,r,n)}}),t},[r.props]t.initialize(r.getPluginMethods())}),r}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r=e.prototype;return r.focus=function(){this.(){this.editor&&this.editor.blur()},r.componentDidMount=function(){var t,e,r,i,a,s,l,g=(t=this.props,e=this.getEditorStatt)).filter(function(titorState:e,setEditorState:r}))}})}).toJS(),l=new n.CompositeDecorator(s),new p(i.filter(function(t){return h(t)}).push(l))),y=n.EditorState.set(this.props.editorState,{decorator:g});this.onChange(f(y))},r.componentDidUpdate=function(t){var e=this.props,r=t.editorState.getDecorator(),o=e.editorState.getDecorator();if(r&&r!==o&&(!r||!o||v(r)!==v(o))){var i=n.EditorState.set(e.editorState,{decorator:r});this.onChtate,setEditorState:t.onChange})})},r.render=function(){var t=this,e=this.createPluginHooks(),r=this.resolveCustomStyleMap(),i=this.resolveAccessibilityProps(),a=this.resolveblockRenderMap(),u=this.props;u.keyBindingFn;var s=l(u,["keyBindingFn"]);return o.createElement(n.Editor,c({},s,i,e,{readOnly:this.props.readOnly||this.state.readOnly,customStyleMap:r,blockRenderMap:a,onChange:this.onChange,ediorState,ref:function(e){t.editor=e}}))},e}(o.Component);m.propTypes={editorState:a().object.isRequired,onChange:a().func.isRequired,plugins:a().array,defaultKeyBindings:a().bool,defaultKeyCommands:a().bool,defaultBlockRenderMap:a().bool,customStyleMap:a().object,decorators:a().array},m.defaultProps={defaultBlockRenderMap:!0,defaultKeyBindings:!0,defaultKeyCommands:!0,customStyleMap:{},plug;returction(t){return[t.getKey(),t]}))}}},76271:function(t,e,r){"use strict";var n=r(68100),o=r(23577),i=r(15238),a=i.List,u=i.Repeat,s=i.Record,c=function(){return!0},l=s({start:null,end:null}),f=s({start:null,end:null});function p(t,t:e+t,end:r+t}))}),a(o))}))}),a(i)},fromJS:function(t){var e=t.leaves;return new f(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n;n=r[e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,f(r=i[n])>=0||(o[r]=t[r]);return o}(t,["leaves"]),{leaves:null!=e?a(Array.isArray(e)?e:o(e)).map(functio([[o(soratortity()ist(),t)})):nctionationsiasedELINE:{nding:x,getVisibleSelectionRect:C}},91223:function(t,e,r){"use strict";var n=r(20515);function o(){return(o=n||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){u(t,e,r[e])})}return t}function a(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,contotype.constructor=t,t.__proto__=e}var c=r(30023),l=r(98312),f=r(5911),p=r(58624),h=r(79828),d=r(46105),g=r(50983),y=r(19865),v=r(23467),m=r(33675),_=r(85049),S=r(95611),b=r(54500),k=r(84030),w=r(35376),x=r(78265),C=r(1224),E=r(89043),O=r(20629),D=r(18839),K=r(13908),M=r(34632),T=k.isBrowser("IE"),A=!T,B={edit:d,composite:f,orState,t._bloctorState=this.props.editorState},e}(_.Component);u(R,"defaultProps",{ariaDescribedBy:"{{editor_id_placeholder}}",blockRenderMap:c,blockRendererFn:function(){return null},blockStyleFn:function(){return""},keyBindingFn:C,readOnly:!1,spellCheck:!1,stripPen()),L,B)nsert-"},W)}pport""},E)}}),r)}pdate(,onSelstablel,r))})},_)}ext))dren)}ExtensionCausedError:function(){}}},83543:function(t,e,r){"use strict";var n=r(99649),o=r(15238),i=r(18839),a=r(31861),u=(0,o.Map)(),s=a(),c={getLastCreatedEntityKey:function(){return c.__getLastCreatedEntityKey()},create:function(t,e,r){return c.__create(t,e,r)},add:function(t){return c.__add(t)},get:function(t){return c.__get(t)},__getAll:funcWithEntities:function(t){u=t,s=a()},mergeData:function(t,e){return c.__mergeData(t,e)},replaceData:function(t,e){return c.__replaceData(t,e)},__getLastCreatedEnti{type:ion(t)){var e=u.geet("data",n);ret("data",e);return UTABLE&c++:teFailreturnnt(n,1)}retuetForwingifyh(s):elock(rip(s));return null!=e&&i.is(e,c)?e:c}}},33675:function(t,e,r){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){o(t,e,r[e])})}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=r(76271),a=r(39570),u=r(94224),s=r(49705),c=r(15238),l=c.OrderedSet,f=c.Record,p=c.Stack,h=c.OrderedMap,d=c.List,g=f({allowUndo:!0,currentContent:null,decorator:null,directionMap:null,forceSelection:!1,inCompositionMode:!1,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:p(),selection:null,treeMap:null,undon(t){return thiseateWithContent(a.crr:r||null,selection:s.createEmpty(n)})},e.create=function(t){var r=t.currentContent,o=t.decorator;return new e(new g(n({},t,{treeMap:m(r,o),directioContent:a.fromJS(t.currentContent)})))},e.set=function(t,r){retuturn i.generate(u,t,a"_immutable",on(){return this.getImmutable().toJS()},t.getAllowUndo=function(){return this.getImmutable().get("allowUndo")},t.getCurrentContent=function(){return this.getImmutable().get("currentContent")},t.getUndoStack=function(){return this.getImmutable().get("undoStack")},t.getRedoStack=function(){return this.getImmutable().get("redoStack")},t.getSelection=function(){return this.getImmutable().get("selection")},t.getDecorator=function(){return this.getImmutable().get("decorator")},t.isInCompositionMode=function(){return this.getImmutable().get("inCompositionMode")},t.mustForceSelection=function(){return this.getImmutable().get("forceSelection")},t.getNativelyRenderedContent=function(){return this.getImmutable().get("nativelyRenderedContent")},t.getLastChangeType=function(){return this.getImmutable().get("lastChangeType")},t.getInlineStyleOverride=function(){return this.getImmutable().get("inlineSteturn e.set(t,{inlineStyo):o>0?i.getInlis.getImmutable().getIn(["treeis.getSelection().hasEdgeWitection().hasEdgeWihis.getImmutable()lection=function(()||(e=e.set("hasFocuusKey:n,focusOffsn e.forlineStyull,selnull,selection:n.getSelectionAfter()})},t.getImmutable=etInlineStyleAt((t)},ivent:o,"unstreturnBackwa,selec),i++;,selec},blocks:[]};return e=f(t,e),e=p(t,onfigurable:!0,writable:!0}):t[e]=r,t}var i,a=r(65825),u=r(18381),s=r(71283),c=r(30023),l=r(83543),f=r(85081),p=r(35376),h=r(78265),d=r(47066),g=r(20629),y=r(15238),v=y.List,m=y.Map,_=y.OrderedSet,S=r(36353),b=r(58586),k=r(13908),w=r(52942),x=g("draft_tree_data_support"),C=RegExp("\r","g"),E=RegExp("\n","g"),O=RegExp("^\n","g"),D=RegExp("&nbsp;","g"),K=RegExp("&#13;?","g"),M=RegExp("&#8203;?","g"),T=["bold","bolder","500","600","700","800","900"],A=["light","lighter","normal","100","200","300","400"],B=["className","href","rel","target","title"],I=["alt","className","height","src","width"],L=(o(i={},p("public/DraftStyleDefault/depth0"),0),o(i,p("public/DraftStyleDefault/depth1"),1),o(i,p("public/DraftStyleDefault/depth2"),2),o(i,p("public/DraftStyleDefault/depth3"),3),o(i,p("public/DraftStyleDefault/depth4"),4),i),R=m({b:"BOLD",code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",i:"ITALIC",s:"STRIKETHROUGH",strike:"STRIKETHROUGH",strong:"Br]{trnDEz=ist)}return{text:r,characterList:n}},t}();t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,n=e(t=t.trim().replace(C,"").replace(D," ").replace(K-list-item":"unordered-list-item":null}).addDOM,seleceturn th).lh;n<o;ey:funending(e),t.onModesetClird"),o{t.se{t._ina)):t.update(n.acceptSelection(r,a))}}},66764:function(t,e,r){"use strict";var n=r(51062),o=r(16149),i=r(33675),a=r(84030),u=r(82465).notEmptyKey,s=r(40685),c=r(72578),l=r(34632),f=a.isEngine("Gecko");t.exports=function(t,e){void 0!==t._pendingStateFromBeforeInput&&(t.update(t._pendingStateFromBeforeInput),t._pendingStateFromBeforeInput=void 0);var r,a,p,h,d=t.editor.ownerDocument.defaultView.getSelection(),g=d.anchorNode,y=d.isCollapsed,v=(null==g?void 0:g.nodeType)!==Node.TEXT_NODE&&(null==g?void 0:g.nodeType)!==Node.ELEMENT_NODE;if(null!=g&&!v){if(g.nodeType===Node.TEXT_NODE&&(null!==g.previousSibling||null!==g.nextSibling)){var m=g.parentNode;if(null==m)return;g.nodeValue=m.textContent;for(var _=m.firstChild;null!=_;_=_.nextSibling)_!==g&&m.removeChild(_)}var S=g.textContent,b=t._latestEditorState,k=l(s(g)),w=o.decode(k),x=w.blockKey,C=w.decoratorKey,E=w.leafKey,O=b.getBlockTree(x).getIn([C,"leaves",E]),D=O.start,K=O.end,M=b.getCurrentContent(),T=M.getBlockForKey(x),A=T.getText().slice(D,K);if(S.endsWith("\n\n")&&(S=S.slice(0,-1)),S===A){var B=e.nativeEvent.inputType;if(B){var I="deleteContentBackward"===B?c(b):b;I!==b&&(t.restoreEditorDOM(),t.update(I))}return}var L=b.getSelection(),R=L.merge({anchorOffset:D,focusOffset:K,isBackward:!1}),F=T.getEntityAt(D),P=u(F)?M.getEntity(F):null,N="MUTABLE"===(null!=P?P.getMutability():null),j=n.replaceText(M,R,S,T.getInlineStyleAt(D),N?T.getEntityAt(D):null);if(f)h=(p=D+Math.min(r=d.anchorOffset,a=d.focusOffset))+Math.abs(r-a),r=p,a=h;else{var z=S.length-A.length;p=L.getStartOffset(),h=L.getEndOffset(),r=y?h+z:p,a=h+z}var U=j.merge({selectionBefore:M.getSelectionAfter(),selectionAfter:L.merge({anchorOffset:r,focusOffset:a})});t.update(i.push(b,U,N?"spellreturnt.upd):o.ac),key:ay.proildNodr)retuo=a),indom()tEndOf),o(e.,u),chwnerDd-of-b,!1),nfset,h.getEnsed()?l}retukeys(tbottom.from(({star=e.getdNodes[o]);if(i)return i}}return null}},14420:function(t,e,r){"use strict";var n=r(18839),o=/\.textClipping$/,i={"text/plain":!0,"text/html":!0,"text/rtf":!0};t.exports=function(t,e){var r=0,a=[];t.forEach(function(u){!function(t,e){if(!window.FileReader||t.type&&!(t.type in i)){e("");return}if(""===t.type){var r="";o.test(t.name)&&(r=t.name.replace(o,"")),e(.result;"sn(!1),e(t)},a.onerre(0,5e3)),rcusKeyurn 0=ew?t.o.__DRt,e,i,(r);n=rge({aument&nction(t){return"handled"===t||!0===t}},36353:function(t,e,r){"use strict";var n=r(53703);t.exports=function(t){return!!t&&!!t.ownerDocument&&n(t)&&"A"===t.nodeName}},58586:function(t,e,r){"use strict";var n=r(53703);t.exports=function(t){return!!t&&!!t.ownerDoHTMLElnerDocnt.defn o===Alt")|ontentontentontentn());ro,isBa0,isBa"backs()?"degment"ull})),selecr().meusKey:e,n.mevar eonAfteKey:d,)retuts=fun&d(u,Key:y,exportreturn.getFiZ:90,Zn r(t)tElemeaultVi［-�:this[ᳱᳲⷘ-ⷯꤰ-�turn nbalDirt.expormNameion(t,re||i,))retue(),(i].conce&&n(e,t.len p(o),o)}};reDocurray(eray.prement|ator.u"getBo)-e.clr e=n(ollHei=t?t:Se)));iurn i(r.getPropertyValue(o(e)));if("display"===e)return"none"}return t.currentStystyleFloat):i(t.currentStyle[n(e)]):i(t.style&&t.style[n(e)])}},46756:function(t){"use strict";t.expcumentElement.scrollLeft,y:t.pageYOffset||t.document.documentElemct";function e(){var t;return document.documentElement&&(t=document.documentElement.clientWidt.body.clientWidth),t||0}function r(){var t;return document.documentElement&&(t=document.documentElement.clientHeight),!t&&document.body&&(t=document.body.clientHeight),t||0}function n(){return{width:window.innerWidth||e(),height:window.innerHeight||r()}}n.withoutScrollbars=function(){return{width:e(),height:r()}},t.expfunction(t){op=1,n}}},19872:function(t){"use strict";t.exports=function(t){vape&&"string"==typeof t.nodeName))}},42374:functn(t){if(null!=t)return t;throw Error("Got unexpected null or undefined")}},30351:function(t,e,r){"use strict";r(75523),t.exports=window.setImmediate},36241:function(t,e,r){"use strict";var n=r(87149);t.exports=n},15238:function(t){t.exports=function(){"use strict";var t,e,r,n,o,i,a,u,s,c,l=Array.prototype.slice;function f(t,e){e&&(t.prototype=Object.create(e.prototype)ction g(t){return y(t)&&!_(t)?t:$(t)}function y(t){return!!(t&&t[b])}function v(t){return!!(t&&t[k])}function m(t){return!!(t&&t[w])}function _(t){return v(t)||m(t)}function S(t){return!!(t&&t[x])}f(h,p),f(d,p),f(g,p),p.isIterable=y,p.isKeyed=v,p.isIndexed=m,p.isAssociative=_,p.isOrdered=S,p.Keyed=h,p.Indexed=d,p.Set=g;var b="@@__IMMUTABLE_ITERABLE__@@",k="@@__IMMUTABLE_KEYED__@@",w="@@__IMMUTABLE_INDEXED__@@",x="@@_},O={value:!turn t.value=!1,t}function M(t){t&&(t.value=!0)}function T(){}function A(t,e){e=e||0;for(var r=Math.max(0,t.length-e),n=Array(r),o=0;o<r;o++)n[o]=t[o+e];return n}fn!0}function R(t,e,r){return(0xpected Array or of [k, v] entries, or keyed object: "+t("Expected Array or itfunction ts(t,e,r,n){varn a}return t.__iterateUnngth-1,a=0;return new z(function(){var t=o[r?i-a:a];return a++>i?q():U(e,n?t[0]:a-1,t[1])})return t(e,n,o,r)})):tf(f(e)?X(e).map(t).toMap():e}(t)}function tf(t){return t&&(tpeof e.valueOf){if((t=t.valueOf(==t.size&&void 0!==e.size&&t.size!==e.s&tp(o[1],t)&&(r||tp(o[0],e))})&&t(n,E),e))return a=!1,!1});rett,this.size=void rn e;e=this}}function ty(t,e,n){if(!(this===e&&(e=1/0),n=void &(n=-n),this._start=tx(0,Math.ceil((e-t)/n-1)+(){throw TypeError("Abs=function(t,e){return thn=r.length-1,o=0;o<=.__iterator=function(t,e){var tion(t,e){return t){return this._objectys,o=n.length-1,i=0function(){var a=n[e?f(e)return this.cacheResult().__iterate(t,e);var r,n=W(this._iterable),o=0;if(H(n))for(t,e);var r=W(this._ited=function(t,e){if(1===t(o[i],i++,this))return i;for(;!(r=n.next()).done;){var a=r.value;if(o[i]=a,!1===t(a,i++,this))break}return i},tr.prototype.__iteratorUncached=f(e%this._step==0){var r=e/unction(t){return this.indexOf(t)},ty.prototype.__iterate=function(t,e){for(var r=this.size-1,n=this._step,o=e?this._start+r*n:this._start,i=0;i<=r;i++){ifototype.equals=function(t){return t instanceof ty?this._start===t._start&&this._end===t._end&&this._step===t._step:th(this,t)},fet=tS;var tb="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)urn r*n+((t>>>16)*n+r*(e>>>16)<<16>>>0)|0};function tk(t){return t>>>1&1073nction"==typeof t.vao=typeof t;if("number"O&&void 0!==(e=n.genodeType>0)switch(t.nodeType){case 1:return t.uniqueID;case 9:return t.documentElement&&t.documentElement.uniqueID}}(t))))return e;if(e=++tD,1073741824&tD&&(tD=0),tO)n.set(t,e);else if(void 0!==tC&&!1===tC(t))throw Error("Non-extensible objects are not allowed as keys.");else if(tE)Object.defineProperty(t,tK,{enumerable:!1,configurable:!1,writable:!1,value:e});else if(void 0!==t.propertyIsEnumerable&&t.propertyIsEnumerable===t.constructor.prototype.propertyIsEnumerable)t.propertyIsEnumera=e;else throw Error("Unable to set a non-enumerable property on object.");return e}(t);if("function"==typeof t.toString)return tx(t.toStrin)e=31*e+t.charCodeAt(r)rn Object.defineProperty(function"==typeof WeakMa"__immutablehash__";"funvar tM=16,tT=255,tA=0,tt?tG():tR(t)&&!S(t)?t:tG().withMutations(function(e){var r=h(t);tI(r.size),r.forEach(function(t,r){return e.set(r,t)})})}function tR(t){return!!(t&&t[tF])}f(tL,tm),tL.prototype.toString=function(){return this.__toString("Map {","}")},tL.prototype.get=function(t,e){return this._root?this._root.get(0,void 0,t,e):e},tL.prototype.set=function(t,e){return tX(this,t,e)},tL.prototype.setIn=function(t,e){return this.updateIn(t,E,function(){return e}rototype.updateIn=function(t,e,r){r||(r=e,e=void 0);var n=function t(e,r,n,o){var i=e===E,a=r.next();if(a.done){var u=i?n:e,s=o(u);return s===ution(t,e){var r=this,n=0;return this._root&&this._root.iterate(function(e){return n++,t(e[1],e[0],r)},e),n},tL.prototype.__ensureOwner=function(t){return t===this.__ownerID?this:t?tJ(_root&&tV(t._rootrn o.size=t,o._root=ush(a)}return t3(n(e,r,n){if(e&&e.mer&252645135,t+=t>>=tP.deleteIn,tN.prot0,void 0,a[0],a[1urn(f?u?c===l-1?h.po,n)},tj.prototype.update=function(t,e,r,n,==E)return this;var f=t5(c&s-1),p=this.nodr(var i=0,a=Array(32)]:void 0;return a[n]=o,new),a=0,u=0;u<o;u++)u=totype.update=function(t,e,r,n,o,i,a){void 0===r&&(r=tw(n));var u=(0===e?r:r>>>e)&31,s=o===E,c=this.nodes,l=c[u];if(s&&!l)return this;var f=tY(l,t,e+5,r,n,o,i,a);if(f===l)length;u<c;u++,s<:(M(a),M(i),tZ(this,==o:u)return this;ifq(t,this.keyHash,s[n(t,e,r,n){return turn this;if(M(a)his.ownerID?(this.entn(t,e){for(var r=th=o;n++)if(!1===t(r[rototype.iterate=functi i=r[e?o-n:n];if(i&&!1=iterate=function(t,e){retur=this._type,e=this._s++;if(n.entry){if(0n tW(t,n.entries[this._return tW(t,i.entry);e=t6,t7=8;function t9(t){var enction(t){t.setSize(n),r.forEach(function(e,r){return t.set(r,t_),t9.of=function(){return this(arguments)},t9.prototype.toString=function(){return this.__toString("List [","]")},t9.prototype.get=function(t,e){if((t=I(this,t))>=0&&t<this.size){var r=ec(this,t+=this._origin);return r&&r.array[31&t]}return e},t9.prototype.set=function(t,e){return function(t,e,r){if((e=I(t,e))!=e)r._capacity,t._level,o,n):his._capac,s){var c,l,f,p,h,d,g;re,void 0===o&&u===a.array.length-1?a.array.pop():a.array[u]=o,a)}function es(t,e){retur,r){var n=eF(t);return n.__iterateUncached=function(n,o){var i=0,a=!1;return function t(u,s){var c=this;u.__iterate(functioi},n.__iteratorUnca){i=a.pop();conti),!((!e||a.length<e).push(i),i=s.__iterator(t.toSeq().map(function(t[2]-r[2]}).forEach(n?fu?Y(i):$(i)}function eM(t,e,]}function eT(t,e,r){var n=t(r,e);return 0===n&&r!==e&&(null==r||r!=r)||n>0}function eA(t,e,r){var n(t){return t.size}).min(),n.__iterate=function(t,e){for(var r,n=this.__iterator(1,e),o=0;!(r=n.next()).done&&!1!==t(r.value,o++,this););reew z(function(){vmap(function(t){return return tI(t.size),B(t)}fe,this):G.prototype.cacheResult.call(this)}function eN(t,e){return t>e?1:t<e?-1:0}function ej(t){var e=W(t);if(!e){ez(t,e){var r,n=functionEach(eW.bind(void 0,t))}catch(t){}})(o,a),o.size=a.length,o._name=e,o._keys=a,o._defaultValL),eh.of=function(){retuvar r=this._map.get(t);return void 0!==r?this._list.get(r)[1]:e},eh.prototype.clear=functioreturn ev(this,t,e)},eh._list.__iterate(function(e){return e&&t(e[1],e[0],r)},e)},eh.prototype.__iterator=function(t,e){return this._list.fromEntrySeq().__itet===this.__ownerID)return this;var e=this._map.__ensureOwner(t),r=this._list.__ensureOwner(tototype[x]=!0,eh.pris._iter.has(t)},.toSeq().reverse()})p(t,e)}),n},em.prototype.__iterate=function(t,e){var r,n=this;return this._iter.__iterate(this._useKeys?function(e,r){return t(e,r,n)}:(r=e?eL(this):0,function(o){return t(o,e?--r:r++,n)}),e)},em.prototype.__iterator=func0;return new z(function(){v,e_.prototype.__iter_iter.__iterator(1,e);return new z(function(){var e=r.next();return e.done?e:U(t,e.value,e.value,e)})},f(eb,X),eb.prototype.entrySeq=function(){return this._iter.toSeq()},eb.prototype.__iterate=function(t,e){var r=this;return this._iter.__iterate(function(e){if(e){eI(e);var n=y(e);return t(n?e.get(1):e[1],n?e.get(0):e[0],r)}},e)},eb.prototype.__iterator=function(t,e){var r=this._iter.__iterator(1,e);return new z(function(){for(;;){var e=r.next();if(e.done)return e;var n=e.value;if(n){eI(n);var o=y(n);return U(t,o?n.get(0):n[0],o?n.get(1):n[1],e)}}})},e_.prototype.cacheResuype.cacheResult=etoString=function(){totype.has=functiont)},ez.prototype.get=function(t,e){if(!thiap&&this._map.remove(tt(e)}).__iterator(t,e)},ez.prototype.__iterate=function(t,e){var r=this;return h(this._defaulte.__ensureOwner=fuurn this;var e=this. t?eq(this,e,t):(this.__totype;function eq(t,e,on eH(t){return t._name|:function(){return this.gett:eZ().withMutations(function(e){var r=g(t);tI(r.size),r.fotP.removeIn,eU.merge=tP.merge,eU.mergeWith=tP.mergeWith,eU.mergeIn=tP.mergeIn,eU.mergeDeep=tP.mergeDeep,eU.mergeDeepWith=tP.merble=tP.asImmutable,f(eV,tS),eV.of=function(){return this(arguments)},eV.fromKeys=function(t){return this(h(t).keySeq())},eV.prototype.toString=function(){return this.__toString("Set {","}")},eV.prototype.has=function(t){return this._map.has(t)},eV.prototymap.set(t,!0))},eV.prototype.remove=function(t){return eY(this,this._map.remove(t))},eV.prototype.clear=function(){rn(e){for(var r=0;r<t.length;r++)g(t[r]).forEachis.constructor(t[0])},uments,0);if(0===tations(function(rrn t.includes(e)})remove(e)})})},eV.proe){return eQ(eK(this,e,t))},eV.prototype.wasAltered=function(){return this._map.wasAltered()},eV.prototype.__iterate=function(t,e){var r=this;retu{return t(n,n,r)},eis._map.map(functioOwner(t);return t?t=t,r.__ownerID=e,r}functionforEach(function(t){reth,eX.withMutations=tP.wition(t){return this(h(t).keySeq())},eQ.prototype.toString=funct1[x]=!0,e1.__empty=e5,e1.__make=e3,f(e2,t_),e2.of=function(){return this(arguments)},e2.prototype.toString=function(){return this.__toString("Stack [","rototype.peek=function(){return this._head&&this._head.value},e2.prototype.push=function(){if(0==arguments.length)return this;for(var t=this.size+arguments.length,is._head=e,0,this):e9(t,e)},e2.prototype.pushAll=function(t){if(0==e().forEach(f__ownerID)?(this.size=e,this._head=r,this.__hash=void 0,this.__altered=!0,this):e9(e,r)},e2.prototype.pop=function(){return this.slition()pushAll(t)},e2.prototype.shift=function(){return this.pop.apply(thi===this.size=0,this.,this.siterate(t.next;return r},e2.prototype.__iterator=function(t,en=n.next,U(t,r++,e)}return q()})},e2.isStack=e8;var e6="@@_var o=Objern c||(c=e9(0)turn ObjPrope=tP.wasAltered,p.Iterator=z,rt(p,{toArray:funct);returction(t){rettoSeq().peof tction){rettion(){terate(fp:functiueSeq(():this)on(){return e2(v(this)?this.valueSeq():this)},t" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+e},ion(t,e){var r=v(t),n=[t].concat(e).map(functih)return t;if(1===n.length){var o=n[0];if(o===t||r&&v(o)||m(t)&&m(o))return o}var i=new Q(n);return e(funcn(e){ret(t,e,r){var n=this.findEntry(t,e);return n?n[1]:this.__itoSeq().reverate(e?=t?""n(n)ing():""}),e},keys:function(){return this.__ithis,e;return tI(this.size),arguments.length<2?o=n=e):n=t.call(r,n,e,i,a)}),n},reduceRight:function(t,e,r){var n=this.toKeyedSeq().reverse();return n.reduce.apply(n,arguments)},reverse:function(){return eB(this,ex(this,!0))},slice:function(t,e){return eB(this,eE(this,t,e,!0))},some:function(t,e){urn eB(thunction(){{return t.s.filter(ri(t),e)},findLast:function(t,e,r){return this.te;){var i=r.value;if((n=n&&n.get?n.get(i,E):E)===E)return e}return n},groupBy:function(t,e){return function(t,e,r){var n=v(t),o=(S(t)?eh():tL()).asMutable();t.__iterate(function(i,a){o.update(e.call(r,i,a,t),function(t){return(t=t||[]).push(n?[a,i]:i),t})});var i=eR(t);return o.map(function(e){return eB(t,i(e))})}(this,t,e)},has:function(t){return this.get(t,E)!==E},hasIn:function(t){return this.geturn t="f){return t.includes(e)})},isSuperset:function(t){return(t="function"==typeof t.isSubset?t:p(t)).isSubset(this)},keySeq:function(){return this.toSeq().map(rn).toIndexedSeq()},last:function(){return this.toSeq().reverse().first,minBy:fice(Math.max(0,t))},sle:function(t,e){var r,n;return eB(this,(r=this,(n=eF(r)).__iteratecacheResult().__iterate(n,o);var a=0;return r.__iterate(function(r,o,u){return t.call(e,r,o,u)&&++a&&n(r,o,i)}),a},nhis.cachunction(){ifturn t.call(e,c,s,i)?2===n?r:U(n,s,c,r):(u=!1,q())})},n))},takeUntil:function(t,e){return this.takeWhile(ri(e){i=31*i+rl(t0}:function(t){i=i+tw(t)|0}),r=tb(r=i,3432918(r<<re[jng()},re.cturn this.tstKeyapEntries:function(t,e){var r=this,n=0;return eB(this,this.toeys:funco){return t.call(e,n,o,r)}).flip())}});var rr=h.nction ro(t,e){return[e,t]}function ri(t){return function(){return!t.apply(this,arguments)}}function ra(t){return function(){return-t.apply(this,arguments)}}function ru(t){return"string"==typeof t?JSON.stringify(t):t}function rs(){return A(arguments)}function rc(t,e){return t<e?1:t>e?-1:0}function rl(t,e){return t^e+2654435769+(t<<6)+(t>>2)|0}return rr[k]=!0,rr[j]=re.entries,rr.__toJS=re.toObject,rr.leave:function(){var t=[this].concat(A(arguments)),e=eA(this.toSeq(),Y.of,t),r=e.flatten(!0);return e.size&&(r.size=e.size*t.length),eB(this,r)},last:function(){return this.get(-1)},skipWhile:function(t,e){return eB(this,eO(this,t,e,!1))},zip:function(){var t=[this].concat(A(arguments));return eB(this,eA(this,rs,t))},zipWith:function(t){var e=A(arguments);return e[0]=this,eB(this,eA(this,t,e))}}),d.prototype[w]=!0,d.prototype[x]=!0,rt(g,{get:function(t,e){return this.has(t)?t:e},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}}),g.prototype.has=re.includes,rt(X,h.prototype),rt(Y,d.prototype),rt($,g.prototype),rt(tm,h.prototype),rt(t_,d.prototype),rt(tS,g.prototype),{Iterable:p,Seq:G,Collection:tv,Map:tL,OrderedMap:eh,List:t9,Stack:e2,Set:eV,OrderedSet:eQ,Record:ez,Range:ty,Repeat:td,is:tp,fromJS:tl}}()},75523:function(t,e,r){var n=r(58467);!function(t,e){"use strict";if(!t.setImmediate){var r,o,i,a,u,s=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);(p=p&&p.setTimeout?p:t,"[object process]"===({}).toString.call(t.process))?u=function(t){n.nextTick(function(){d(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?(r="setImmediate$"+Math.random()+"$",o=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&d(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",o,!1):t.attachEvent("onmessage",o),u=function(e){t.postMessage(r+e,"*")}):t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){d(t.data)},u=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(a=f.documentElement,u=function(t){var e=f.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,a.removeChild(e),e=null},a.appendChild(e)}):u=function(t){setTimeout(d,0,t)},p.setImmediate=function(t){"function"!=typeof t&&(t=Function(""+t));for(var e=Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var n={callback:t,args:e};return c[s]=n,u(s),s++},p.clearImmediate=h}function h(t){delete c[t]}function d(t){if(l)setTimeout(d,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(void 0,r)}}(e)}finally{h(t),l=!1}}}}}("undefined"==typeof self?"undefined"==typeof window?this:window:self)}}]);