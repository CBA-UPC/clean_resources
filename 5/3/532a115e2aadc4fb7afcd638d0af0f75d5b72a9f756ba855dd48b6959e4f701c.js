"use strict";(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[5794],{39954:(o,n,a)=>{a.d(n,{x:()=>s});var t=a(91938),i=a.n(t),e=a(76955);function r(o){var{children:n,placeholder:a=null}=o,[t,i]=(0,e.useState)(!1);return(0,e.useEffect)((,[]),t?n:a}r.propTypes={children:i().node.isRequired,placeholder:i().node};var s=(0,e.memo)(r)},15794:(o,n,a)=>{a.r(n),a.d(n,{default:);var t,i,e,r,s=a(3e4),c=a(66062),v=(a(91938),a(76955)),u=a(96216),m=a(66948),l=a(29466),d=a.n(l),w=a(5663),g=a.n(w),h=a(55382),p=a.n(h),_=a(97175),f=a(73614),b=a(51650),N=a(39954);function Z(){return(Z=(0,c.Z)((function*(o){var{dispatch:n,match:a}=o,{params:t}=a,i=t.amebaId;n((0,f.Rs)(i))}))).apply(this,arguments)}var k=(0,b.lB)(["match","location"])(t=(0,m.$j)((function(o,n){var{match:a,location:t}=n,{params:i}=a,e=i.amebaId,r=t.pathname;return{owndNavigation:(o.bloggerState.bloggerMap[e]||{}).ownd_navigation||{},pathname:r}}))(t=(0,_.provideHooks)({defer:)((e=i=class extends v.Component{houldComponentUpdate(o,n){return this.state.isShowMore!==n.isShowMore||this.props.pathname!==o.pathname||!d()(this.props.owndNavigation,o.owndNavigation)}renderStyle(o,n){return(0,s.Z)("style",{type:"text/css"},void 0,"\n        /* \u30ea\u30f3\u30af\u8272 */\n        .owu-navigation-custom-font:link,\n        .owu-navigation-custom-font:visited{\n          color: ".concat(o.text||"",";\n          font-family: ").concat(n.family||"",";\n        }\n        .owu-navigation-custom-more:before,\n        .owu-navigation-custom-more:after{\n          border-color: ").concat(o.text||"",";\n        }\n\n        /* \u30de\u30a6\u30b9\u30aa\u30fc\u30d0\u30fc\u6642\u30ea\u30f3\u30af\u8272 */\n        .owu-navigation-custom-font:active,\n        .owu-navigation-custom-font:focus,\n        .owu-navigation-custom-font:hover,\n        .owu-navigation__item--state_active:link,\n        .owu-navigation__item--state_active:visited{\n          color: ").concat(o.hover||"",";\n          font-family: ").concat(n.family||"",";\n        }\n\n        .ow-navigation__more:hover .owu-navigation-custom-more:before,\n        .ow-navigation__more:hover .owu-navigation-custom-more:after{\n          border-color: ").concat(o.hover||"",";\n        }\n\n        /* \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u80cc\u666f\u8272 */\n        .owu-navigation-custom-bkcolor{\n          background-color: ").concat(o.background||"",";\n        }\n      "))}render(){var{owndNavigation:o}=this.props;if(g()(o))return null;var n=o.items||{},a=o.color||{},t=o.font||{},i=new RegExp("^http(s)?://(s\\.)?ameblo\\.jp".concat(this.props.pathname,"/?$")),e=n.map((o=>(0,s.Z)("li",{className:"ow-navigation-nav__item"},o.title,(0,s.Z)("a",{className:p()("ow-navigation-nav__item__link owu-navigation-custom-font",{"owu-navigation__item--state_active":i.test(o.url)}),href:o.url,target:o.target},void 0,o.title))));return(0,s.Z)(v.Fragment,{},void 0,(0,s.Z)(u.ql,{},void 0,this.renderStyle(a,t)),(0,s.Z)("div",{className:"ow-navigation__outer owu-navigation-custom-bkcolor",id:"ow-navigation__outer"},void 0,(0,s.Z)("div",{className:p()("ow-navigation owu-navigation-custom-bkcolor",{"ow-navigation--show_full":this.state.isShowMore}),id:"ow-navigation"},void 0,(0,s.Z)(N.x,{},void 0,(0,s.Z)("div",{className:"ow-navigation__inner"},void 0,(0,s.Z)("ul",{className:"ow-navigation__nav ow-navigation-nav"},void 0,e)),(0,s.Z)("div",{className:"ow-navigation__more",htmlFor:"ow-navigation-switch",id:"ow-navigation__more",role:"button",style:{outline:0},tabIndex:"0",onClick:,void 0,r||(r=(0,s.Z)("span",{className:"ow-navigation__more__icon owu-navigation-custom-more"},void 0,(0,s.Z)("span",{className:"ow-navigation__more__icon owu-navigation-custom-more"},void 0,(0,s.Z)("span",{})))))))))}},i.displayName="PcOwndNavigation",t=e))||t)||t)||t}}]);