(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{400:function(i,s,t){"use strict";t.r(s),function(i){var e,n=t(3),o=t(13),p=t.n(o),r=t(92),a=t.n(r),l=t(21),h=t(57),c=t(0);class d extends n.PureComponent{constructor(i){super(i),this.handleFlyin=this.handleFlyin.bind(this),this.onClose=this.onClose.bind(this),this.cachedVisibility=this.props.visibility,this.trackEvent=this.trackEvent.bind(this)}componentDidMount(){this.props.onShowFlyin(this.props.campaign),this.debouncedHandleFlyin=a()(this.handleFlyin,100),i.document.addEventListener("scroll",this.debouncedHandleFlyin)}isplayTagName(){const i="none"!==this.props.page.team?this.props.page.team:"",s="none"!==this.props.page.league?this.props.page.league:"";return(i||s).replace(/_/g," ")||"sports"}handleFlyin(){!this.props.userClosed&&Object(h.a)()<Object(h.f)()/3?this.props.onShowFlyin(this.props.campaign):"visible"===this.props.visibility&&this.props.onHideFlyin(this.props.campaign),this.cachedVisibility!==this.props.visibility&&(this.cachedVisibility=this.props.visibility)}nder(){const i=p()({atom:!0,androidTsPromo:!0,offscreen:"visible"!==this.props.visibility});return(Object(c.jsx)("div",{className:i,children:Object(c.jsxs)("div",{className:"wrapper",children:[e||(e=Object(c.jsx)(l.SVG,{type:"logo",target:"brApp"})),Object(c.jsxs)("h2",{children:["Want a better way to enjoy your ",this.displayTagName()," news?"]}),Object(c.jsxs)("div",{className:"actions",children:[Object(c.jsx)(l.Button,{href:this.props.installLink,onClick:this.trackEvent,children:"Install the Free App"}),Object(c.jsx)(l.Button,{onClick:this.onClose,children:"No, thanks"})]})]})}))}}d.defaultProps={campaign:"androidTsPromo",visibility:"hidden"},s.default=d}.call(this,t(16))}}]);
//# sourceMappingURL=https://static-assets.bleacherreport.net/js/atoms-androidTsPromo-306670e0.js.map