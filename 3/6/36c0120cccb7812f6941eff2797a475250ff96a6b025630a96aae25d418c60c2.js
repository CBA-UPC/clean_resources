(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[6870],{10793:(o,t,n)=>{"use strict";n.d(t,{f:()=>s});var e=n(76955),r=n(52377),a=n(5154),i=n.n(a),c=n(54285);class s extends e.PureComponent{constructor(o){super(o),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:i(),viewLogger:i()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:o,bloggerAmebaId:t,categoryId:n,subCategoryId:e,contentId:r,displayPosition:a,pageId:i,entryId:c,orderId:s,sectionId:A,serviceId:u,tagName:l}=this.props;return{algorithmId:o,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:n,subCategoryId:e,contentId:r,displayPosition:a,pageId:i,entryId:c,orderId:s,sectionId:A,serviceId:u,tagName:l}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(s.intersectionListener||(s.intersectionListener=(0,c.T)({})),this.stopListen(),this.trigger=r.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=s.intersectionListener.listen(this.trigger,(o=>{(o.isIntersecting||o.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(o){var t=e.Children.only(this.props.children).props.onClick;t&&t(o),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var o=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(o=e.cloneElement(o,{onClick:this.handleClick})),o}}s.displayName="Tracker"},66870:(o,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var e=n(66062),r=n(76955),a=n(45525),i=n(97175),c=n(66948),s=n(48013),A=n(12138),u=n.n(A),l=n(76423),d=n.n(l),C=n(51650),p=n(73614),g=n(78168),B=n(26413),h=n(63862),v=n(48298),b=n(84596),m=n(55752),f=n.n(m),I=o=>f()(o,["snackbarState",h.Z.GPT_REWARD_GRANTED,"status"],!1),k=n(78867),T=n(68858),x=n(92700),w=n(90425),y=n(10793),E="\u5e83\u544a\u8996\u8074\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f";function _(){return(_=(0,e.Z)((function*(o){var{dispatch:t,match:n}=o,{params:e}=n,{amebaId:r}=e;yield t((0,p.Rs)(r))}))).apply(this,arguments)}var D=o=>{var{useRouter:t=C.tv,useBloggerAttribute:n=B.j,useTrackViewLog:e=x.Z,saveSnackbarStatus:a=v.Y}=o,i=e(),A=(0,c.I0)(),{match:u,location:l}=t(),{amebaId:p}=u.params,{pageType:g}=u.route,{pathname:m}=l,f=n(p),{isShowAdUser:_,isGeneral:D,isTopBlogger:O}=f,N=(0,c.v9)(b.dS)===T.X4.Reward,L=(0,c.v9)(b.JZ),S=_&&D&&!O&&N&&4===L,P=(0,c.v9)(I);(0,k.Z)({message:E,active:!!P});var q=M=(0,r.useCallback)((()=>{q()}),[]),R=(0,r.useCallback)((()=>{q(),A(a(h.Z.GPT_REWARD_GRANTED,!0))}),[a,A]),j=(0,r.useCallback)((()=>{A(a(h.Z.GPT_REWARD_GRANTED,!1))}),[a,A]),U=(0,r.useCallback)((()=>{window.gpt=Object.assign(Object.assign({},window.gpt),{reward:{close:M,granted:R}})}),[M,R]);return(0,r.useEffect)((()=>(S&&U(),),[S,U]),S?r.createElement(r.Fragment,null,r.createElement(y.f,{activate:["view"],key:m,pageId:g,sectionId:"webreward-ads",viewLogger:i},r.createElement("div",null,r.createElement(w.n,{adunit:"SP_Rewarded_web_general_confirm",containerId:"webreward-ads",isOutOfPageFormat:!0,pathname:m}))),r.createElement("div",{className:d().ToastWrapper},r.createElement(s.Toast,{active:P,position:"topCenter",variant:"confirmation",onHide:j},E))):r.createElement("div",null)},O=(0,g.ee)((0,i.provideHooks)({done:),(0,a.w1)([d(),u()]))(r.memo(D))},63862:78867:(o,t,n)=>{"use strict";n.d(t,{Z:()=>r});var e=n(76955);const r=function(o){var{message:t,active:n}=o,r=(0,e.useRef)(null);(0,e.useEffect)((()=>(r.current=document.getElementById("polite-announcer"),),[]),(0,e.useEffect)((()=>{var o=r.current;return t&&o&&n&&(o.textContent=t),()=>{o&&n&&(o.textContent="")}}),[t,n])}},26413:(o,t,n)=>{"use strict";n.d(t,{j:()=>c});var e=n(29466),r=n.n(e),a=n(66948),i=n(31058),c=o=>(0,a.v9)((,r())},85819:(o,t,n)=>{"use strict";n.d(t,{I:()=>r});var e=n(66948),r=,84596:(o,t,n)=>{"use strict";n.d(t,{$V:()=>c,CB:()=>A,JZ:()=>l,PY:()=>u,dS:()=>d,jj:()=>s,ly:()=>i});var e=n(55752),r=n.n(e),a=n(35613),i=(o,t)=>r()(o,["raichoAdState","requestStatusMap",...(0,a.E)(t)]),c=(o,t)=>{var{blogId:n,adKey:e}=t;return r()(o,["adState","adIdsMap",n,e])},s=A=o=>r()(o,["adState","attribute","hasBillboardPanel"],!1),u=o=>r()(o,["adState","attribute","canBillboardPanelRequest"],!1),l=o=>r()(o,["adState","pageTransitionCount"],0),d=o=>r()(o,["adState","fullPageAdType"],"")},48298:(o,t,n)=>{"use strict";n.d(t,{Y:()=>r});var e=n(5892),r=function(o,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{type:e.b,payload:{moduleName:o,status:t,params:n}}}},92700:(o,t,n)=>{"use strict";n.d(t,{Z:);var e=n(76955),r=n(85819),a=n(5563);function i(){var o=(0,r.I)();return(0,e.useCallback)((,[o])}},48013:function(o,t,n){"use strict";var e=this&&this.__importDefault||Object.defineProperty(t,"__esModule",{value:!0}),t.Toast=t.DISPLAYING_TIMEOUT_DURATION=t.ANIMATION_DURATION=t.BLOCK_NAME=void 0;var r=e(n(76955)),a=n(64497),i=n(29647),c=n(62002);t.BLOCK_NAME="spui-Toast",t.ANIMATION_DURATION=300;t.DISPLAYING_TIMEOUT_DURATION=4e3-t.ANIMATION_DURATION;t.Toast=function(o){var n,e=o.children,s=o.active,A=o.position,u=void 0===A?"topCenter":A,l=o.offset,d=void 0===l?{}:l,C=o.onHide,p=o.icon,g=o.variant,B=void 0===g?"information":g,h=o.stackPosition,v=void 0===h?0:h,b=o.setContentHeight,m=(0,a.useStackNotificationComponent)({active:s,position:u,offset:d,onHide:C,stackPosition:v,setContentHeight:b,displayingTimeout:t.DISPLAYING_TIMEOUT_DURATION}),f=m.isShow,I=m.active,k=m.shouldAnimation,T=m.position,x=m.orderOffset,w=m.offset,y=m.initialHeight,E=m.focusEvent,_=E.setIsShowWithTimeout,D=E.resetTimeout,O=m.setClientHeight,N=m.handleTransitionEnd,L=m.handleOnClickCloseButton;return r.default.createElement("div",{style:(n={},n["--Toast--initial-height"]="".concat(y[T.vertical],"px"),n["--Toast--order-offset-top"]="".concat(x[T.vertical],"px"),n["--Toast--order-offset-bottom"]="".concat(-x[T.vertical],"px"),n["--Toast--offset-top"]="".concat(w.top,"px"),n["--Toast--offset-bottom"]="".concat(w.bottom,"px"),n),className:[t.BLOCK_NAME,"".concat(t.BLOCK_NAME,"--").concat(T.vertical),k&&"".concat(t.BLOCK_NAME,"--slide"),f&&"".concat(t.BLOCK_NAME,"-slide--in"),!I&&"".concat(t.BLOCK_NAME,"--hidden")].filter(Boolean).join(" "),"aria-hidden":!I,onTransitionEnd:N,ref:function(o){return O((null==o?void 0:o.clientHeight)||0)}},r.default.createElement("div",{className:"".concat(t.BLOCK_NAME,"-content ").concat(t.BLOCK_NAME,"-content--").concat(B),onMouseOver:D,onMouseOut:_,onFocus:D,onBlur:_},p&&r.default.createElement("div",{className:"".concat(t.BLOCK_NAME,"-contentInfo")},p),r.default.createElement("span",{className:"".concat(t.BLOCK_NAME,"-contentText")},e),r.default.createElement("div",{className:"".concat(t.BLOCK_NAME,"-iconButton ").concat(t.BLOCK_NAME,"-iconButton--").concat(B),onTransitionEnd:,r.default.createElement(c.IconButton,{size:"exSmall",variant:"neutral",onClick:L},r.default.createElement(i.CrossBold,{"aria-label":"\u9589\u3058\u308b"})))))}},12975:(o,t,n)=>{var e=n(18300)(();e.push([o.id,"._3cKzfpub>div{z-index:5000}",""]),e.locals={ToastWrapper:"_3cKzfpub"},o.exports=e},1846:(o,t,n)=>{var e=n(99811),r=n(18300)(e);r.push([o.id,".spui-IconButton{align-items:center;border-radius:100%;box-sizing:border-box;display:inline-flex;justify-content:center;margin:0;padding:0;-webkit-tap-highlight-color:rgba(8, 18, 26, 0.04);text-align:center;transition:background-color .3s}.spui-IconButton:disabled{opacity:.3}.spui-IconButton:focus{outline:2px solid #0091ff;outline-offset:1px}.spui-IconButton:focus:not(:focus-visible){outline:none}.spui-IconButton--large{font-size:1.375em;height:48px;width:48px}.spui-IconButton--medium{font-size:1.25em;height:40px;width:40px}.spui-IconButton--small{font-size:1em;height:32px;width:32px}.spui-IconButton--exSmall{font-size:1em;height:24px;width:24px}.spui-IconButton--contained{background-color:#298737;border:none;color:#fff}.spui-IconButton--contained:active{background-color:#0f5c1f}@media (hover:hover){.spui-IconButton--contained:not([disabled]):hover{background-color:#0f5c1f}}.spui-IconButton--outlined{background-color:transparent;border:2px solid #298737;color:#298737}.spui-IconButton--outlined:active{background-color:#e7f5e9}@media (hover:hover){.spui-IconButton--outlined:not([disabled]):hover{background-color:#e7f5e9}}.spui-IconButton--lighted{background-color:#e7f5e9;border:none;color:#298737;padding-bottom:8px;padding-top:8px}.spui-IconButton--lighted:active{background-color:#c6e5c9}@media (hover:hover){.spui-IconButton--lighted:not([disabled]):hover{background-color:#c6e5c9}}.spui-IconButton--neutral{background-color:rgba(8, 18, 26, 0.08);border:none;color:rgba(8, 18, 26, 0.74)}.spui-IconButton--neutral:active{background-color:rgba(8, 18, 26, 0.16)}@media (hover:hover){.spui-IconButton--neutral:not([disabled]):hover{background-color:rgba(8, 18, 26, 0.16)}}.spui-IconButton--danger{background-color:transparent;border:2px solid #d91c0b;color:#d91c0b}.spui-IconButton--danger:active{background-color:rgba(217, 28, 11, 0.05)}@media (hover:hover){.spui-IconButton--danger:hover{background-color:rgba(217, 28, 11, 0.05)}}.spui-Toast{box-sizing:border-box;left:0;opacity:0;padding:0 12px;pointer-events:none;position:fixed;right:0;text-align:center;z-index:1}.spui-Toast-content{align-items:center;border-radius:52px;box-shadow:0 11px 28px rgba(8,18,26,.24);box-sizing:border-box;display:inline-flex;margin:0;max-width:360px;min-height:48px;padding:0 16px 0 20px;pointer-events:auto}.spui-Toast-contentInfo{flex-shrink:0;font-size:22px;font-size:1.375rem;line-height:0;margin-right:8px}.spui-Toast-contentText{font-family:inherit;font-size:14px;font-size:.875rem;font-weight:700;line-height:1.6;overflow:hidden;white-space:nowrap}.spui-Toast--top{top:0;transform:translateY(calc(var(--Toast--initial-height) - var(--Toast--offset-top)))}.spui-Toast--bottom{bottom:0;transform:translateY(calc((var(--Toast--initial-height) - var(--Toast--offset-bottom))*-1))}.spui-Toast--slide{transition:transform .3s ease,opacity .3s ease}.spui-Toast--hidden{visibility:hidden}.spui-Toast-slide--in{opacity:1;transition:transform .5s ease,opacity .5s ease}.spui-Toast-slide--in.spui-Toast--top{transform:translateY(var(--Toast--order-offset-top))}.spui-Toast-slide--in.spui-Toast--bottom{transform:translateY(var(--Toast--order-offset-bottom))}.spui-Toast-iconButton{--IconButton--neutral-backgroundColor:transparent;margin-left:12px}.spui-Toast-contentInfo--information{color:#fff}.spui-Toast-content--information{background-color:#394148;color:#fff}.spui-Toast-iconButton--information{--IconButton--neutral-onActive-backgroundColor:var(--white-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--white-20-alpha);--IconButton--neutral-color:var(--color-object-high-emphasis-inverse)}.spui-Toast-contentInfo--confirmation{color:#298737}.spui-Toast-content--confirmation{background-color:#fff;border:2px solid rgba(8, 18, 26, 0.08);color:#237b31}.spui-Toast-iconButton--confirmation{--IconButton--neutral-onActive-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-color:var(--color-object-low-emphasis)}.spui-Toast-contentInfo--error{color:#fff}.spui-Toast-content--error{background-color:#d91c0b;color:#fff}.spui-Toast-iconButton--error{--IconButton--neutral-onActive-backgroundColor:var(--white-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--white-20-alpha);--IconButton--neutral-color:var(--color-object-high-emphasis-inverse)}@media (prefers-reduced-motion:reduce){.spui-Toast--slide,.spui-Toast-slide--in{transition-duration:.1ms}}@media (max-width:384px){.spui-Toast-content{max-width:100%}}","",{version:3,sources:["webpack://./node_modules/@openameba/spindle-ui/Toast/Toast.css"],names:[],mappings:"AAA49C,iBAAiB,kBAAkB,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,sBAAsB,CAAC,QAAQ,CAAC,SAAS,CAAC,iDAA+D,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,0BAA0B,UAAU,CAAC,uBAAuB,yBAAwD,CAAC,kBAAkB,CAAC,2CAA2C,YAAY,CAAC,wBAAwB,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,yBAAyB,gBAAgB,CAAC,WAAW,CAAC,UAAU,CAAC,wBAAwB,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,0BAA0B,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,4BAA4B,wBAA6D,CAAC,WAAW,CAAC,UAAwC,CAAC,mCAAmC,wBAAsE,CAAC,qBAAqB,kDAAkD,wBAAqE,CAAC,CAAC,2BAA2B,4BAA4B,CAAC,wBAAwD,CAAC,aAAuC,CAAC,kCAAkC,wBAAqE,CAAC,qBAAqB,iDAAiD,wBAAoE,CAAC,CAAC,0BAA0B,wBAA2D,CAAC,WAAW,CAAC,aAAsC,CAAC,kBAAkB,CAAC,eAAe,CAAC,iCAAiC,wBAAoE,CAAC,qBAAqB,gDAAgD,wBAAmE,CAAC,CAAC,0BAA0B,sCAA2D,CAAC,WAAW,CAAC,2BAAsC,CAAC,iCAAiC,sCAAoE,CAAC,qBAAqB,gDAAgD,sCAAmE,CAAC,CAAC,yBAAyB,4BAA4B,CAAC,wBAAsD,CAAC,aAAqC,CAAC,gCAAgC,wCAAmE,CAAC,qBAAqB,+BAA+B,wCAAkE,CAAC,CAAyB,YAAY,qBAAqB,CAAC,MAAM,CAAC,SAAS,CAAC,cAAc,CAAC,mBAAmB,CAAC,cAAc,CAAC,OAAO,CAAC,iBAAiB,CAAC,SAA4B,CAAC,oBAAoB,kBAAkB,CAAC,kBAAkB,CAAC,wCAAwC,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,QAAQ,CAAC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,wBAAwB,aAAa,CAAC,cAAkB,CAAlB,kBAAkB,CAAC,aAAa,CAAC,gBAAgB,CAAC,wBAAwB,mBAAmB,CAAC,cAAiB,CAAjB,iBAAiB,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,CAAC,kBAAkB,CAAC,iBAAiB,KAAK,CAAC,mFAAmF,CAAC,oBAAoB,QAAQ,CAAC,2FAA4F,CAAC,mBAAmB,8CAA8C,CAAC,oBAAoB,iBAAiB,CAAC,sBAAsB,SAAS,CAAC,8CAA8C,CAAC,sCAAsC,oDAAoD,CAAC,yCAAyC,uDAAuD,CAAC,uBAAuB,iDAAiD,CAAC,gBAAgB,CAAC,qCAAqC,UAA+C,CAAC,iCAAiC,wBAA+B,CAAC,UAA6C,CAAC,oCAAoC,oEAAoE,CAAC,mEAAmE,CAAC,qEAAqE,CAAC,sCAAsC,aAAwC,CAAC,kCAAkC,qBAA6C,CAAC,sCAAiD,CAAC,aAAsC,CAAC,qCAAqC,mEAAmE,CAAC,kEAAkE,CAAC,4DAA4D,CAAC,+BAA+B,UAA+C,CAAC,2BAA2B,wBAA6C,CAAC,UAA6C,CAAC,8BAA8B,oEAAoE,CAAC,mEAAmE,CAAC,qEAAqE,CAAC,uCAAuC,yCAAyC,wBAAwB,CAAC,CAAC,yBAAyB,oBAAoB,cAAc,CAAC",sourcesContent:[":root{--IconButton-tapHighlightColor:var(--gray-5-alpha);--IconButton-onFocus-outlineColor:var(--color-focus-clarity);--IconButton--contained-backgroundColor:var(--color-surface-accent-primary);--IconButton--contained-color:var(--color-object-high-emphasis-inverse);--IconButton--contained-onActive-backgroundColor:var(--primary-green-100);--IconButton--contained-onHover-backgroundColor:var(--primary-green-100);--IconButton--outlined-borderColor:var(--color-border-accent-primary);--IconButton--outlined-color:var(--color-object-accent-primary);--IconButton--outlined-onActive-backgroundColor:var(--primary-green-5);--IconButton--outlined-onHover-backgroundColor:var(--primary-green-5);--IconButton--lighted-backgroundColor:var(--color-surface-accent-primary-light);--IconButton--lighted-color:var(--color-object-accent-primary);--IconButton--lighted-onActive-backgroundColor:var(--primary-green-10);--IconButton--lighted-onHover-backgroundColor:var(--primary-green-10);--IconButton--neutral-backgroundColor:var(--color-surface-tertiary);--IconButton--neutral-color:var(--color-object-medium-emphasis);--IconButton--neutral-onActive-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--gray-20-alpha);--IconButton--danger-borderColor:var(--color-border-caution);--IconButton--danger-color:var(--color-object-caution);--IconButton--danger-onActive-backgroundColor:var(--caution-red-5-alpha);--IconButton--danger-onHover-backgroundColor:var(--caution-red-5-alpha)}.spui-IconButton{align-items:center;border-radius:100%;box-sizing:border-box;display:inline-flex;justify-content:center;margin:0;padding:0;-webkit-tap-highlight-color:var(--IconButton-tapHighlightColor);text-align:center;transition:background-color .3s}.spui-IconButton:disabled{opacity:.3}.spui-IconButton:focus{outline:2px solid var(--IconButton-onFocus-outlineColor);outline-offset:1px}.spui-IconButton:focus:not(:focus-visible){outline:none}.spui-IconButton--large{font-size:1.375em;height:48px;width:48px}.spui-IconButton--medium{font-size:1.25em;height:40px;width:40px}.spui-IconButton--small{font-size:1em;height:32px;width:32px}.spui-IconButton--exSmall{font-size:1em;height:24px;width:24px}.spui-IconButton--contained{background-color:var(--IconButton--contained-backgroundColor);border:none;color:var(--IconButton--contained-color)}.spui-IconButton--contained:active{background-color:var(--IconButton--contained-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--contained:not([disabled]):hover{background-color:var(--IconButton--contained-onHover-backgroundColor)}}.spui-IconButton--outlined{background-color:transparent;border:2px solid var(--IconButton--outlined-borderColor);color:var(--IconButton--outlined-color)}.spui-IconButton--outlined:active{background-color:var(--IconButton--outlined-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--outlined:not([disabled]):hover{background-color:var(--IconButton--outlined-onHover-backgroundColor)}}.spui-IconButton--lighted{background-color:var(--IconButton--lighted-backgroundColor);border:none;color:var(--IconButton--lighted-color);padding-bottom:8px;padding-top:8px}.spui-IconButton--lighted:active{background-color:var(--IconButton--lighted-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--lighted:not([disabled]):hover{background-color:var(--IconButton--lighted-onHover-backgroundColor)}}.spui-IconButton--neutral{background-color:var(--IconButton--neutral-backgroundColor);border:none;color:var(--IconButton--neutral-color)}.spui-IconButton--neutral:active{background-color:var(--IconButton--neutral-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--neutral:not([disabled]):hover{background-color:var(--IconButton--neutral-onHover-backgroundColor)}}.spui-IconButton--danger{background-color:transparent;border:2px solid var(--IconButton--danger-borderColor);color:var(--IconButton--danger-color)}.spui-IconButton--danger:active{background-color:var(--IconButton--danger-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--danger:hover{background-color:var(--IconButton--danger-onHover-backgroundColor)}}:root{--Toast-z-index:1}.spui-Toast{box-sizing:border-box;left:0;opacity:0;padding:0 12px;pointer-events:none;position:fixed;right:0;text-align:center;z-index:var(--Toast-z-index)}.spui-Toast-content{align-items:center;border-radius:52px;box-shadow:0 11px 28px rgba(8,18,26,.24);box-sizing:border-box;display:inline-flex;margin:0;max-width:360px;min-height:48px;padding:0 16px 0 20px;pointer-events:auto}.spui-Toast-contentInfo{flex-shrink:0;font-size:1.375rem;line-height:0;margin-right:8px}.spui-Toast-contentText{font-family:inherit;font-size:.875rem;font-weight:700;line-height:1.6;overflow:hidden;white-space:nowrap}.spui-Toast--top{top:0;transform:translateY(calc(var(--Toast--initial-height) - var(--Toast--offset-top)))}.spui-Toast--bottom{bottom:0;transform:translateY(calc(var(--Toast--initial-height)*-1 - var(--Toast--offset-bottom)*-1))}.spui-Toast--slide{transition:transform .3s ease,opacity .3s ease}.spui-Toast--hidden{visibility:hidden}.spui-Toast-slide--in{opacity:1;transition:transform .5s ease,opacity .5s ease}.spui-Toast-slide--in.spui-Toast--top{transform:translateY(var(--Toast--order-offset-top))}.spui-Toast-slide--in.spui-Toast--bottom{transform:translateY(var(--Toast--order-offset-bottom))}.spui-Toast-iconButton{--IconButton--neutral-backgroundColor:transparent;margin-left:12px}.spui-Toast-contentInfo--information{color:var(--color-object-high-emphasis-inverse)}.spui-Toast-content--information{background-color:var(--gray-80);color:var(--color-text-high-emphasis-inverse)}.spui-Toast-iconButton--information{--IconButton--neutral-onActive-backgroundColor:var(--white-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--white-20-alpha);--IconButton--neutral-color:var(--color-object-high-emphasis-inverse)}.spui-Toast-contentInfo--confirmation{color:var(--color-object-accent-primary)}.spui-Toast-content--confirmation{background-color:var(--color-surface-primary);border:2px solid var(--color-border-low-emphasis);color:var(--color-text-accent-primary)}.spui-Toast-iconButton--confirmation{--IconButton--neutral-onActive-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-color:var(--color-object-low-emphasis)}.spui-Toast-contentInfo--error{color:var(--color-object-high-emphasis-inverse)}.spui-Toast-content--error{background-color:var(--color-surface-caution);color:var(--color-text-high-emphasis-inverse)}.spui-Toast-iconButton--error{--IconButton--neutral-onActive-backgroundColor:var(--white-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--white-20-alpha);--IconButton--neutral-color:var(--color-object-high-emphasis-inverse)}@media (prefers-reduced-motion:reduce){.spui-Toast--slide,.spui-Toast-slide--in{transition-duration:.1ms}}@media (max-width:384px){.spui-Toast-content{max-width:100%}}"],sourceRoot:""}]),o.exports=r},76423:(o,t,n)=>{var e=n(12975),r=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e])}return o},a=Object.defineProperty||function(o,t,n){o[t]=n.value};"string"==typeof e&&(e=[[o.id,e,""]]),o.exports=function(o){var t=r({},o.locals||{});return a(t,"_",{value:function(){return o}}),a(t,"toString",{value:function(){return"function"==typeof o.toString?o.toString():""}}),t}(e)},12138:(o,t,n)=>{var e=n(1846),r=Object.assign||a=Object.defineProperty||"string"==typeof e&&(e=[[o.id,e,""]]),o.exports=function(o){var t=r({},o.locals||{});return a(t,"_",{value:),a(t,"toString",{value:function(){return"function"==typeof o.toString?o.toString():""}}),t}(e)}}]);