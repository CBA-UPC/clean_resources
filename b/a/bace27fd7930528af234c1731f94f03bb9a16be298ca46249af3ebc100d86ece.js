(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[1230],{61379:function(o,n,e){"use strict";var t=this&&this.__createBinding||(Object.create?,r=this&&this.__setModuleDefault||(Object.create?,u=this&&this.__importStar||Object.defineProperty(n,"__esModule",{value:!0}),n.DropdownMenu=n.BLOCK_NAME=void 0;var i=u(e(76955));n.BLOCK_NAME="spui-DropdownMenu";var A=["Escape","Esc"];n.DropdownMenu={Caption:function(o){var e=o.children;return i.default.createElement("p",{className:"".concat(n.BLOCK_NAME,"-caption")},e)},Frame:function(o){var e=o.children;return i.default.createElement("div",{className:"".concat(n.BLOCK_NAME)},e)},List:function(o){var e,t,r,u=o.children,a=o.id,c=o.onClose,p=o.open,d=o.position,s=void 0===d?"leftTop":d,l=o.triggerRef,C=o.variant,m=void 0===C?"text":C,g=(0,i.useRef)(null),B=(0,i.useState)(!1),f=B[0],h=B[1],b=(0,i.useState)(0),w=b[0],v=b[1],M=(0,i.useState)(0),D=M[0],x=M[1],k=(0,i.useState)(0),I=k[0],y=k[1],E=(0,i.useCallback)((function(o){if(p&&(!l.current||!o.composedPath().includes(l.current))){var e=document.querySelector(".".concat(n.BLOCK_NAME,"-menu"));e&&o.composedPath().includes(e)||h(!0)}}),[p,h,l]),O=(0,i.useCallback)((,[h,l]),L=(0,i.useCallback)((,[O]),_=(0,i.useCallback)((function(o){"spui-DropdownMenu-fade-in"!==o.animationName&&(c(),h(!1))}),[c,h]);return(0,i.useEffect)((function(){if(l.current){var o=l.current.getBoundingClientRect(),n=o.height,e=o.width;v(n),x(e)}}),[l]),(0,i.useEffect)((function(){if(p&&g.current){var o=g.current.getBoundingClientRect().height;y(o)}}),[p]),(0,i.useEffect)((function(){var o=g.current;return null==o||o.addEventListener("animationend",_,!1),function(){return null==o?void 0:o.removeEventListener("animationend",_,!1)}}),[g,_]),(0,i.useEffect)((,[E]),(0,i.useEffect)((,[L]),p?(["topLeft","topCenter","topRight"].includes(s)&&(t="".concat(w,"px")),["topCenter","bottomCenter"].includes(s)&&(r="-".concat((256-D)/2,"px")),["rightCenter","leftCenter"].includes(s)&&(e="-".concat((I-w)/2,"px")),["bottomLeft","bottomCenter","bottomRight"].includes(s)&&(e="".concat(w,"px")),i.default.createElement("ul",{id:a,onClick:O,className:["".concat(n.BLOCK_NAME,"-menu"),"".concat(n.BLOCK_NAME,"-menu--").concat(m),"".concat(n.BLOCK_NAME,"-menu--").concat(s),f&&"is-fade-out"].filter(Boolean).join(" "),ref:g,role:"menu",style:{bottom:t,left:r,top:e}},u)):i.default.createElement(i.default.Fragment,null)},ListItem:function(o){var e=o.children,t=o.icon,r=o.onClick;return i.default.createElement("li",{className:"".concat(n.BLOCK_NAME,"-menuItem"),role:"menuItem"},i.default.createElement("button",{className:"".concat(n.BLOCK_NAME,"-menuButton"),onClick:r},t&&i.default.createElement("div",{className:"".concat(n.BLOCK_NAME,"-iconContainer")},t),i.default.createElement("div",{className:"".concat(n.BLOCK_NAME,"-textContainer")},e)))},Position:function(o){var e,t,r,u=o.children,A=o.position,a=void 0===A?"leftTop":A,c=o.triggerRef,p=(0,i.useRef)(null),d=(0,i.useState)(0),s=d[0],l=d[1],C=(0,i.useState)(0),m=C[0],g=C[1],B=(0,i.useState)(0),f=B[0],h=B[1];return(0,i.useEffect)((function(){if(c.current){var o=c.current.getBoundingClientRect(),n=o.height,e=o.width;l(n),g(e)}}),[c]),(0,i.useEffect)((function(){if(p.current){var o=p.current.getBoundingClientRect().height;h(o)}}),[]),["topLeft","topCenter","topRight"].includes(a)&&(t="".concat(s,"px")),["topCenter","bottomCenter"].includes(a)&&(r="-".concat((256-m)/2,"px")),["rightCenter","leftCenter"].includes(a)&&(e="-".concat((f-s)/2,"px")),["bottomLeft","bottomCenter","bottomRight"].includes(a)&&(e="".concat(s,"px")),i.default.createElement("ul",{className:["".concat(n.BLOCK_NAME,"-menu"),"".concat(n.BLOCK_NAME,"-menu--text"),"".concat(n.BLOCK_NAME,"-menu--").concat(a)].filter(Boolean).join(" "),ref:p,role:"menu",style:{bottom:t,left:r,top:e}},u)},Title:function(o){var e=o.children;return i.default.createElement("p",{className:"".concat(n.BLOCK_NAME,"-title")},e)}}},17474:37947:(o,n,e)=>{var t=e(99811),r=e(18300)(t);r.push([o.id,'.spui-DropdownMenu{position:relative;width:-moz-fit-content;width:fit-content}.spui-DropdownMenu-menu{animation:spui-DropdownMenu-fade-in .3s;background-color:#fff;border-radius:12px;box-shadow:0 11px 28px rgba(8,18,26,.12);box-sizing:border-box;list-style:none;margin:0;padding:12px 0;position:absolute;width:256px;z-index:1}.spui-DropdownMenu-menu.is-fade-out{animation:spui-DropdownMenu-fade-out .3s;opacity:0}.spui-DropdownMenu-menu--topCenter,.spui-DropdownMenu-menu--topLeft,.spui-DropdownMenu-menu--topRight{margin-bottom:8px}.spui-DropdownMenu-menu--bottomCenter,.spui-DropdownMenu-menu--bottomLeft,.spui-DropdownMenu-menu--bottomRight{margin-top:8px}.spui-DropdownMenu-menu--bottomLeft,.spui-DropdownMenu-menu--topLeft{left:0}.spui-DropdownMenu-menu--bottomRight,.spui-DropdownMenu-menu--topRight{right:0}.spui-DropdownMenu-menu--rightBottom,.spui-DropdownMenu-menu--rightCenter,.spui-DropdownMenu-menu--rightTop{right:-264px}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--leftCenter,.spui-DropdownMenu-menu--leftTop{left:-264px}.spui-DropdownMenu-menu--leftTop,.spui-DropdownMenu-menu--rightTop{top:0}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--rightBottom{bottom:0}.spui-DropdownMenu-menuButton{align-items:center;background-color:#fff;border:none;display:flex;font-size:1em;position:relative;transition:background-color .3s;width:100%}.spui-DropdownMenu-menu--text .spui-DropdownMenu-menuButton,.spui-DropdownMenu-menu--textWithIcon .spui-DropdownMenu-menuButton{padding:10px 16px}.spui-DropdownMenu-menu--headWithIcon .spui-DropdownMenu-menuButton{padding:16px}.spui-DropdownMenu-menu--headWithIconAndCaption .spui-DropdownMenu-menuButton{padding:14px 16px}.spui-DropdownMenu-menuButton:hover{background-color:rgba(8, 18, 26, 0.04)}.spui-DropdownMenu-menuButton:focus-visible{outline:2px solid #0091ff;z-index:1}.spui-DropdownMenu-menuItem .spui-DropdownMenu-menuButton:before{background-color:rgba(8, 18, 26, 0.08);content:"";height:1px;position:absolute;top:0;width:calc(100% - 32px)}.spui-DropdownMenu-menuItem:first-child .spui-DropdownMenu-menuButton:before{height:0}.spui-DropdownMenu-iconContainer{color:#08121a;display:flex;font-size:1.5em;margin-right:16px}.spui-DropdownMenu-textContainer{text-align:left}.spui-DropdownMenu-title{color:#08121a;font-size:1em;line-height:1.3;margin:0}.spui-DropdownMenu-caption{color:rgba(8, 18, 26, 0.61);font-size:.75em;line-height:1.4;margin:4px 0 0}@keyframes spui-DropdownMenu-fade-in{0%{opacity:0}to{opacity:1}}@keyframes spui-DropdownMenu-fade-out{0%{opacity:1}to{opacity:0}}@media screen and (max-width:768px){.spui-DropdownMenu-menu--rightBottom,.spui-DropdownMenu-menu--rightCenter,.spui-DropdownMenu-menu--rightTop{bottom:auto;left:0;margin-top:8px;top:auto!important}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--leftCenter,.spui-DropdownMenu-menu--leftTop{bottom:auto;left:auto;margin-top:8px;right:0;top:auto!important}}@media (prefers-reduced-motion:reduce){.spui-DropdownMenu-menu{animation:spui-DropdownMenu-fade-in 0s}.spui-DropdownMenu-menu.is-fade-out{animation:spui-DropdownMenu-fade-out 0s}}',"",{version:3,sources:["webpack://./node_modules/@openameba/spindle-ui/DropdownMenu/DropdownMenu.css"],names:[],mappings:"AAA8F,mBAAmB,iBAAiB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,wBAAwB,uCAAuC,CAAC,qBAA6C,CAAC,kBAAkB,CAAC,wCAAwC,CAAC,qBAAqB,CAAC,eAAe,CAAC,QAAQ,CAAC,cAAc,CAAC,iBAAiB,CAAC,WAAW,CAAC,SAAmC,CAAC,oCAAoC,wCAAwC,CAAC,SAAS,CAAC,sGAAsG,iBAAiB,CAAC,+GAA+G,cAAc,CAAC,qEAAqE,MAAM,CAAC,uEAAuE,OAAO,CAAC,4GAA4G,YAAY,CAAC,yGAAyG,WAAW,CAAC,mEAAmE,KAAK,CAAC,yEAAyE,QAAQ,CAAC,8BAA8B,kBAAkB,CAAC,qBAA6C,CAAC,WAAW,CAAC,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,UAAU,CAAC,gIAAgI,iBAAiB,CAAC,oEAAoE,YAAY,CAAC,8EAA8E,iBAAiB,CAAC,oCAAoC,sCAA+C,CAAC,4CAA4C,yBAA0D,CAAC,SAAmC,CAAC,iEAAiE,sCAAiD,CAAC,UAAU,CAAC,UAAU,CAAC,iBAAiB,CAAC,KAAK,CAAC,uBAAuB,CAAC,6EAA6E,QAAQ,CAAC,iCAAiC,aAAuC,CAAC,YAAY,CAAC,eAAe,CAAC,iBAAiB,CAAC,iCAAiC,eAAe,CAAC,yBAAyB,aAAqC,CAAC,aAAa,CAAC,eAAe,CAAC,QAAQ,CAAC,2BAA2B,2BAAoC,CAAC,eAAe,CAAC,eAAe,CAAC,cAAc,CAAC,qCAAqC,GAAG,SAAS,CAAC,GAAG,SAAS,CAAC,CAAC,sCAAsC,GAAG,SAAS,CAAC,GAAG,SAAS,CAAC,CAAC,oCAAoC,4GAA4G,WAAW,CAAC,MAAM,CAAC,cAAc,CAAC,kBAAkB,CAAC,yGAAyG,WAAW,CAAC,SAAS,CAAC,cAAc,CAAC,OAAO,CAAC,kBAAkB,CAAC,CAAC,uCAAuC,wBAAwB,sCAAsC,CAAC,oCAAoC,uCAAuC,CAAC",sourcesContent:[':root{--DropdownMenu-z-index:1;--DropdownMenu-onFocus-outlineColor:var(--color-focus-clarity)}.spui-DropdownMenu{position:relative;width:-moz-fit-content;width:fit-content}.spui-DropdownMenu-menu{animation:spui-DropdownMenu-fade-in .3s;background-color:var(--color-surface-primary);border-radius:12px;box-shadow:0 11px 28px rgba(8,18,26,.12);box-sizing:border-box;list-style:none;margin:0;padding:12px 0;position:absolute;width:256px;z-index:var(--DropdownMenu-z-index)}.spui-DropdownMenu-menu.is-fade-out{animation:spui-DropdownMenu-fade-out .3s;opacity:0}.spui-DropdownMenu-menu--topCenter,.spui-DropdownMenu-menu--topLeft,.spui-DropdownMenu-menu--topRight{margin-bottom:8px}.spui-DropdownMenu-menu--bottomCenter,.spui-DropdownMenu-menu--bottomLeft,.spui-DropdownMenu-menu--bottomRight{margin-top:8px}.spui-DropdownMenu-menu--bottomLeft,.spui-DropdownMenu-menu--topLeft{left:0}.spui-DropdownMenu-menu--bottomRight,.spui-DropdownMenu-menu--topRight{right:0}.spui-DropdownMenu-menu--rightBottom,.spui-DropdownMenu-menu--rightCenter,.spui-DropdownMenu-menu--rightTop{right:-264px}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--leftCenter,.spui-DropdownMenu-menu--leftTop{left:-264px}.spui-DropdownMenu-menu--leftTop,.spui-DropdownMenu-menu--rightTop{top:0}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--rightBottom{bottom:0}.spui-DropdownMenu-menuButton{align-items:center;background-color:var(--color-surface-primary);border:none;display:flex;font-size:1em;position:relative;transition:background-color .3s;width:100%}.spui-DropdownMenu-menu--text .spui-DropdownMenu-menuButton,.spui-DropdownMenu-menu--textWithIcon .spui-DropdownMenu-menuButton{padding:10px 16px}.spui-DropdownMenu-menu--headWithIcon .spui-DropdownMenu-menuButton{padding:16px}.spui-DropdownMenu-menu--headWithIconAndCaption .spui-DropdownMenu-menuButton{padding:14px 16px}.spui-DropdownMenu-menuButton:hover{background-color:var(--color-surface-secondary)}.spui-DropdownMenu-menuButton:focus-visible{outline:2px solid var(--DropdownMenu-onFocus-outlineColor);z-index:var(--DropdownMenu-z-index)}.spui-DropdownMenu-menuItem .spui-DropdownMenu-menuButton:before{background-color:var(--color-border-low-emphasis);content:"";height:1px;position:absolute;top:0;width:calc(100% - 32px)}.spui-DropdownMenu-menuItem:first-child .spui-DropdownMenu-menuButton:before{height:0}.spui-DropdownMenu-iconContainer{color:var(--color-object-high-emphasis);display:flex;font-size:1.5em;margin-right:16px}.spui-DropdownMenu-textContainer{text-align:left}.spui-DropdownMenu-title{color:var(--color-text-high-emphasis);font-size:1em;line-height:1.3;margin:0}.spui-DropdownMenu-caption{color:var(--color-text-low-emphasis);font-size:.75em;line-height:1.4;margin:4px 0 0}@keyframes spui-DropdownMenu-fade-in{0%{opacity:0}to{opacity:1}}@keyframes spui-DropdownMenu-fade-out{0%{opacity:1}to{opacity:0}}@media screen and (max-width:768px){.spui-DropdownMenu-menu--rightBottom,.spui-DropdownMenu-menu--rightCenter,.spui-DropdownMenu-menu--rightTop{bottom:auto;left:0;margin-top:8px;top:auto!important}.spui-DropdownMenu-menu--leftBottom,.spui-DropdownMenu-menu--leftCenter,.spui-DropdownMenu-menu--leftTop{bottom:auto;left:auto;margin-top:8px;right:0;top:auto!important}}@media (prefers-reduced-motion:reduce){.spui-DropdownMenu-menu{animation:spui-DropdownMenu-fade-in 0s}.spui-DropdownMenu-menu.is-fade-out{animation:spui-DropdownMenu-fade-out 0s}}'],sourceRoot:""}]),o.exports=r},50269:(o,n,e)=>{var t=e(99811),r=e(18300)(t);r.push([o.id,".spui-IconButton{align-items:center;border-radius:100%;box-sizing:border-box;display:inline-flex;justify-content:center;margin:0;padding:0;-webkit-tap-highlight-color:rgba(8, 18, 26, 0.04);text-align:center;transition:background-color .3s}.spui-IconButton:disabled{opacity:.3}.spui-IconButton:focus{outline:2px solid #0091ff;outline-offset:1px}.spui-IconButton:focus:not(:focus-visible){outline:none}.spui-IconButton--large{font-size:1.375em;height:48px;width:48px}.spui-IconButton--medium{font-size:1.25em;height:40px;width:40px}.spui-IconButton--small{font-size:1em;height:32px;width:32px}.spui-IconButton--exSmall{font-size:1em;height:24px;width:24px}.spui-IconButton--contained{background-color:#298737;border:none;color:#fff}.spui-IconButton--contained:active{background-color:#0f5c1f}@media (hover:hover){.spui-IconButton--contained:not([disabled]):hover{background-color:#0f5c1f}}.spui-IconButton--outlined{background-color:transparent;border:2px solid #298737;color:#298737}.spui-IconButton--outlined:active{background-color:#e7f5e9}@media (hover:hover){.spui-IconButton--outlined:not([disabled]):hover{background-color:#e7f5e9}}.spui-IconButton--lighted{background-color:#e7f5e9;border:none;color:#298737;padding-bottom:8px;padding-top:8px}.spui-IconButton--lighted:active{background-color:#c6e5c9}@media (hover:hover){.spui-IconButton--lighted:not([disabled]):hover{background-color:#c6e5c9}}.spui-IconButton--neutral{background-color:rgba(8, 18, 26, 0.08);border:none;color:rgba(8, 18, 26, 0.74)}.spui-IconButton--neutral:active{background-color:rgba(8, 18, 26, 0.16)}@media (hover:hover){.spui-IconButton--neutral:not([disabled]):hover{background-color:rgba(8, 18, 26, 0.16)}}.spui-IconButton--danger{background-color:transparent;border:2px solid #d91c0b;color:#d91c0b}.spui-IconButton--danger:active{background-color:rgba(217, 28, 11, 0.05)}@media (hover:hover){.spui-IconButton--danger:hover{background-color:rgba(217, 28, 11, 0.05)}}","",{version:3,sources:["webpack://./node_modules/@openameba/spindle-ui/IconButton/IconButton.css"],names:[],mappings:"AAA49C,iBAAiB,kBAAkB,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,sBAAsB,CAAC,QAAQ,CAAC,SAAS,CAAC,iDAA+D,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,0BAA0B,UAAU,CAAC,uBAAuB,yBAAwD,CAAC,kBAAkB,CAAC,2CAA2C,YAAY,CAAC,wBAAwB,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,yBAAyB,gBAAgB,CAAC,WAAW,CAAC,UAAU,CAAC,wBAAwB,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,0BAA0B,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,4BAA4B,wBAA6D,CAAC,WAAW,CAAC,UAAwC,CAAC,mCAAmC,wBAAsE,CAAC,qBAAqB,kDAAkD,wBAAqE,CAAC,CAAC,2BAA2B,4BAA4B,CAAC,wBAAwD,CAAC,aAAuC,CAAC,kCAAkC,wBAAqE,CAAC,qBAAqB,iDAAiD,wBAAoE,CAAC,CAAC,0BAA0B,wBAA2D,CAAC,WAAW,CAAC,aAAsC,CAAC,kBAAkB,CAAC,eAAe,CAAC,iCAAiC,wBAAoE,CAAC,qBAAqB,gDAAgD,wBAAmE,CAAC,CAAC,0BAA0B,sCAA2D,CAAC,WAAW,CAAC,2BAAsC,CAAC,iCAAiC,sCAAoE,CAAC,qBAAqB,gDAAgD,sCAAmE,CAAC,CAAC,yBAAyB,4BAA4B,CAAC,wBAAsD,CAAC,aAAqC,CAAC,gCAAgC,wCAAmE,CAAC,qBAAqB,+BAA+B,wCAAkE,CAAC",sourcesContent:[":root{--IconButton-tapHighlightColor:var(--gray-5-alpha);--IconButton-onFocus-outlineColor:var(--color-focus-clarity);--IconButton--contained-backgroundColor:var(--color-surface-accent-primary);--IconButton--contained-color:var(--color-object-high-emphasis-inverse);--IconButton--contained-onActive-backgroundColor:var(--primary-green-100);--IconButton--contained-onHover-backgroundColor:var(--primary-green-100);--IconButton--outlined-borderColor:var(--color-border-accent-primary);--IconButton--outlined-color:var(--color-object-accent-primary);--IconButton--outlined-onActive-backgroundColor:var(--primary-green-5);--IconButton--outlined-onHover-backgroundColor:var(--primary-green-5);--IconButton--lighted-backgroundColor:var(--color-surface-accent-primary-light);--IconButton--lighted-color:var(--color-object-accent-primary);--IconButton--lighted-onActive-backgroundColor:var(--primary-green-10);--IconButton--lighted-onHover-backgroundColor:var(--primary-green-10);--IconButton--neutral-backgroundColor:var(--color-surface-tertiary);--IconButton--neutral-color:var(--color-object-medium-emphasis);--IconButton--neutral-onActive-backgroundColor:var(--gray-20-alpha);--IconButton--neutral-onHover-backgroundColor:var(--gray-20-alpha);--IconButton--danger-borderColor:var(--color-border-caution);--IconButton--danger-color:var(--color-object-caution);--IconButton--danger-onActive-backgroundColor:var(--caution-red-5-alpha);--IconButton--danger-onHover-backgroundColor:var(--caution-red-5-alpha)}.spui-IconButton{align-items:center;border-radius:100%;box-sizing:border-box;display:inline-flex;justify-content:center;margin:0;padding:0;-webkit-tap-highlight-color:var(--IconButton-tapHighlightColor);text-align:center;transition:background-color .3s}.spui-IconButton:disabled{opacity:.3}.spui-IconButton:focus{outline:2px solid var(--IconButton-onFocus-outlineColor);outline-offset:1px}.spui-IconButton:focus:not(:focus-visible){outline:none}.spui-IconButton--large{font-size:1.375em;height:48px;width:48px}.spui-IconButton--medium{font-size:1.25em;height:40px;width:40px}.spui-IconButton--small{font-size:1em;height:32px;width:32px}.spui-IconButton--exSmall{font-size:1em;height:24px;width:24px}.spui-IconButton--contained{background-color:var(--IconButton--contained-backgroundColor);border:none;color:var(--IconButton--contained-color)}.spui-IconButton--contained:active{background-color:var(--IconButton--contained-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--contained:not([disabled]):hover{background-color:var(--IconButton--contained-onHover-backgroundColor)}}.spui-IconButton--outlined{background-color:transparent;border:2px solid var(--IconButton--outlined-borderColor);color:var(--IconButton--outlined-color)}.spui-IconButton--outlined:active{background-color:var(--IconButton--outlined-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--outlined:not([disabled]):hover{background-color:var(--IconButton--outlined-onHover-backgroundColor)}}.spui-IconButton--lighted{background-color:var(--IconButton--lighted-backgroundColor);border:none;color:var(--IconButton--lighted-color);padding-bottom:8px;padding-top:8px}.spui-IconButton--lighted:active{background-color:var(--IconButton--lighted-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--lighted:not([disabled]):hover{background-color:var(--IconButton--lighted-onHover-backgroundColor)}}.spui-IconButton--neutral{background-color:var(--IconButton--neutral-backgroundColor);border:none;color:var(--IconButton--neutral-color)}.spui-IconButton--neutral:active{background-color:var(--IconButton--neutral-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--neutral:not([disabled]):hover{background-color:var(--IconButton--neutral-onHover-backgroundColor)}}.spui-IconButton--danger{background-color:transparent;border:2px solid var(--IconButton--danger-borderColor);color:var(--IconButton--danger-color)}.spui-IconButton--danger:active{background-color:var(--IconButton--danger-onActive-backgroundColor)}@media (hover:hover){.spui-IconButton--danger:hover{background-color:var(--IconButton--danger-onHover-backgroundColor)}}"],sourceRoot:""}]),o.exports=r},1253:(o,n,e)=>{var t=e(37947),r=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},u=Object.defineProperty||function(o,n,e){o[n]=e.value};"string"==typeof t&&(t=[[o.id,t,""]]),o.exports=function(o){var n=r({},o.locals||{});return u(n,"_",{value:function(){return o}}),u(n,"toString",{value:function(){return"function"==typeof o.toString?o.toString():""}}),n}(t)},84406:(o,n,e)=>{var t=e(50269),r=Object.assign||u=Object.defineProperty||"string"==typeof t&&(t=[[o.id,t,""]]),o.exports=function(o){var n=r({},o.locals||{});return u(n,"_",{value:),u(n,"toString",{value:function(){return"function"==typeof o.toString?o.toString():""}}),n}(t)}}]);