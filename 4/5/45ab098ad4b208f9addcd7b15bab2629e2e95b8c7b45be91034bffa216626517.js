(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[35],{EWmL:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n("mXGw");var o=n("gE8n"),i=n("w5jl"),a=n("Gd9x"),r=n("zKje"),s=n("4RFi"),u=n("mlCA"),c=n("cZG8"),l=n("RvOD");const d=(t,e)=>{const n=Object(u.c)((t=>t.modalType)),d=Object(u.c)((t=>t.isNestedDialog)),p=Object(l.b)(),f=Object(u.c)((t=>t.modalAttributes)),b=Object(u.c)((t=>t.dialogRef)),h=Object(u.c)((t=>t.requestOpenChange)),m=Object(u.c)((),v=Object(o.a)((e=>{var o,a;Object(i.a)(t.backdrop)&&(null===(o=(a=t.backdrop).onClick)||void 0===o||o.call(a,e)),"modal"!==n||e.isDefaultPrevented()||h({event:e,open:!1,type:"backdropClick"})})),g=Object(o.a)((e=>{var n;null===(n=t.onKeyDown)||void 0===n||n.call(t,e),e.key!==c.e||e.isDefaultPrevented()||(h({event:e,open:!1,type:"escapeKeyDown"}),e.preventDefault())})),O=a.a.optional(t.backdrop,{renderByDefault:"non-modal"!==n,defaultProps:{"aria-hidden":"true"},elementType:"div"});return O&&(O.onClick=v),{components:{backdrop:"div",root:"div"},backdrop:O,isNestedDialog:d,transitionStatus:p,mountNode:t.mountNode,root:a.a.always(Object(r.a)("div",{tabIndex:-1,"aria-modal":"non-modal"!==n,role:"alert"===n?"alertdialog":"dialog","aria-labelledby":t["aria-label"]?void 0:m,...t,...f,onKeyDown:g,ref:Object(s.a)(e,b)}),{elementType:"div"})}}},GuUx:function(t,e,n){"use strict";n.d(e,"a",(function(){return N}));var o=n("mXGw"),i=n.n(o),a=n("6siq"),r=n("gE8n"),s=n("RW7O"),u=n("qA3t"),c=n("oIzT"),l=n("msjZ"),d=n("FN6z");const p="__fluentDisableScrollElement";var f=n("mlCA"),b=n("m5Wk");var h=n("Ydwi"),m=n("+I+c"),v=n("7L9N"),g=(n("W0B4"),n("xARA")),O=n.n(g),E=i.a.createContext(null),x="unmounted",j="exited",y="entering",C="entered",S="exiting",T=function(t){bject(v.a)(e,t),e.getDerivedStateFromProps=var n=e.prototype;return n.componentDidMount=n.componentDidUpdate=n.componentWillUnmount=n.getTimeouts=n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===y?((this.props.unmountOnExit||this.props.mountOnEnter)&&(this.props.nodeRef||O.a.findDOMNode(this)),this.performEnter(t)):this.performExit()):this.props.unmountOnExit&&this.state.status===j&&this.setState({status:x})},n.performEnter=n.performExit=n.cancelNextCallback=n.safeSetState=n.setNextCallback=n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:O.a.findDOMNode(this);if(n&&(null!=t||this.props.addEndListener)){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback];this.props.addEndListener(o[0],o[1])}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===x)return null;var e=this.props,n=e.children,o=Object(m.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return i.a.createElement(E.Provider,{value:null},"function"==typeof n?n(t,o):i.a.cloneElement(i.a.Children.only(n),o))},e}(i.a.Component);.contextType=E,T.propTypes={},T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:k,onEntering:k,onEntered:k,onExit:k,onExiting:k,onExited:k},T.UNMOUNTED=x,T.EXITED=j,T.ENTERING=y,T.ENTERED=C,T.EXITING=S;var D=T,w=n("jw7e"),R=n("RvOD");const N=o.memo((t=>{const e=(t=>{const{children:e,modalType:n="modal",onOpenChange:i,inertTrapFocus:h=!1}=t,[m,v]=function(t){const e=o.Children.toArray(t);switch(e.length){case 2:return e;case 1:return[void 0,e[0]];default:return[void 0,void 0]}}(e),[g,O]=Object(a.a)({state:t.open,defaultState:t.defaultOpen,initialState:!1}),E=Object(r.a)((t=>{null==i||i(t.event,t),t.event.isDefaultPrevented()||O(t.open)})),x=function(t,e){const{findFirstFocusable:n}=Object(l.a)(),{targetDocument:i}=Object(d.b)(),a=o.useRef(null);return o.useEffect((()=>{if(!t)return;const e=a.current&&n(a.current);var o;e?e.focus():null===(o=a.current)||void 0===o||o.focus()}),[n,t,e,i]),a}(g,n),j=function(){const{targetDocument:t}=Object(d.b)();return Object(o.useCallback)((()=>{if(t)return function(t){var e;const{clientWidth:n}=t.ownerDocument.documentElement;var o;const i=null!==(o=null===(e=t.ownerDocument.defaultView)||void 0===e?void 0:e.innerWidth)&&void 0!==o?o:0;return function(t){var e,n;null!==(n=(e=t)[p])&&void 0!==n||(e.__fluentDisableScrollElement={count:0,previousOverflowStyle:t.style.overflow,previousPaddingRightStyle:t.style.paddingRight})}(t),0===t[p].count&&(t.style.overflow="hidden",t.style.paddingRight=i-n+"px"),t[p].count++,()=>{t[p].count--,0===t[p].count&&(t.style.overflow=t[p].previousOverflowStyle,t.style.paddingRight=t[p].previousPaddingRightStyle)}}(t.body)}),[t])}(),y=Boolean(g&&"non-modal"!==n);Object(s.a)((()=>{if(y)return j()}),[j,y]);const{modalAttributes:C,triggerAttributes:S}=Object(b.a)({trapFocus:"non-modal"!==n,legacyTrapFocus:!h});return{components:{backdrop:"div"},inertTrapFocus:h,open:g,modalType:n,content:v,trigger:m,requestOpenChange:E,dialogTitleId:Object(u.b)("dialog-title-"),isNestedDialog:Object(c.a)(f.a),dialogRef:x,modalAttributes:"non-modal"!==n?C:void 0,triggerAttributes:S}})(t);return((t,e)=>{const{content:n,trigger:o}=t;return Object(h.a)(f.b,{value:e.dialog,children:Object(h.b)(w.a,{value:e.dialogSurface,children:[o,Object(h.a)(D,{mountOnEnter:!0,unmountOnExit:!0,in:t.open,nodeRef:t.dialogRef,timeout:250,children:t=>Object(h.a)(R.a,{value:t,children:n})})]})})})(e,function(t){const{modalType:e,open:n,dialogRef:o,dialogTitleId:i,isNestedDialog:a,inertTrapFocus:r,requestOpenChange:s,modalAttributes:u,triggerAttributes:c}=t;return{dialog:{open:n,modalType:e,dialogRef:o,dialogTitleId:i,isNestedDialog:a,inertTrapFocus:r,modalAttributes:u,triggerAttributes:c,requestOpenChange:s},dialogSurface:!1}}(e))}));N.displayName="Dialog"},RvOD:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var o=n("mXGw");const i=o.createContext(void 0),a=i.Provider,r=()=>{var t;return null!==(t=o.useContext(i))&&void 0!==t?t:void 0}},WVh7:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("Ydwi"),i=n("VpHC"),a=n("jw7e"),r=n("zJV6");const s=(t,e)=>(Object(i.a)(t),Object(o.b)(r.a,{mountNode:t.mountNode,children:[t.backdrop&&Object(o.a)(t.backdrop,{}),Object(o.a)(a.a,{value:e.dialogSurface,children:Object(o.a)(t.root,{})})]}))},fFoK:function(t,e,n){"use strict";function o(t){return{dialogSurface:!0}}n.d(e,"a",(function(){return o}))},jw7e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var o=n("mXGw");const i=Object(o.createContext)(void 0),a=i.Provider,r=()=>{var t;return null!==(t=Object(o.useContext)(i))&&void 0!==t&&t}},m5Wk:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("qA3t"),i=n("BoSW"),a=n("SM7n"),r=n("K5Sh");const s=(t={})=>{const{trapFocus:e,alwaysFocusable:n,legacyTrapFocus:s}=t,u=Object(r.a)();u&&(Object(a.e)(u),Object(a.g)(u));const c=Object(o.b)("modal-",t.id);return{modalAttributes:Object(i.a)({restorer:{type:a.a.RestorerTypes.Source},...e&&{modalizer:{id:c,isOthersAccessible:!e,isAlwaysAccessible:n,isTrapped:s&&e}}}),triggerAttributes:Object(i.a)({restorer:{type:a.a.RestorerTypes.Target}})}}},mlCA:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(),n("mXGw");var o=n("MX80"),i=n("2LpZ");const a={open:!1,inertTrapFocus:!1,modalType:"modal",isNestedDialog:!1,dialogRef:{current:null},requestOpenChange,r=Object(o.a)(void 0),s=r.Provider,u=t=>Object(i.a)(r,()}}]);
//# sourceMappingURL=35.36a02c57545c04103823.chunk.v7.js.map