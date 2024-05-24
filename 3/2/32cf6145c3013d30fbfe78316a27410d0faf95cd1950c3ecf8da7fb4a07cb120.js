"use strict";(globalThis.webpackChunkcalypso=globalThis.webpackChunkcalypso||[]).push([[23683],{"../node_modules/@wordpress/components/build-module/card/card/component.js":(e,o,r)=>{r.d(o,{C:()=>T});var n=r("../node_modules/react/index.js"),s=r("../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=r("../node_modules/@wordpress/components/build-module/context/context-system-provider.js"),d=r("../node_modules/@wordpress/components/build-module/context/context-connect.js"),i=r("../node_modules/@wordpress/components/build-module/view/component.js"),a=r("../node_modules/@wordpress/components/build-module/context/use-context-system.js");let l={name:"12ip69d",styles:"background:transparent;display:block;margin:0!important;pointer-events:none;position:absolute;will-change:box-shadow"};var u=r("../node_modules/@wordpress/components/build-module/utils/config-values.js"),c=r("../node_modules/@wordpress/components/build-module/utils/reduce-motion.js"),m=r("../node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),b=r("../node_modules/@wordpress/components/build-module/utils/values.js");function p(e){let o=`rgba(0, 0, 0, ${e/20})`,r=`0 ${e}px ${2*e}px 0
	${o}`;return r}let v=(0,d.Iq)(function(e,o){let r=function(e){let{active:o,borderRadius:r="inherit",className:t,focus:d,hover:i,isInteractive:v=!1,offset:f=0,value:g=0,...x}=(0,a.y)(e,"Elevation"),h=(0,m.I)(),w=(0,n.useMemo)(()=>{let e=(0,b.Jf)(i)?i:2*g,n=(0,b.Jf)(o)?o:g/2;v||(e=(0,b.Jf)(i)?i:void 0,n=(0,b.Jf)(o)?o:void 0);let a=`box-shadow ${u.Z.transitionDuration} ${u.Z.transitionTimingFunction}`,m={};return m.Base=(0,s.iv)({borderRadius:r,bottom:f,boxShadow:p(g),opacity:u.Z.elevationIntensity,left:f,right:f,top:f,transition:a},(0,c.r)("transition"),"",""),(0,b.Jf)(e)&&(m.hover=(0,s.iv)("*:hover>&{box-shadow:",p(e),";}","")),(0,b.Jf)(n)&&(m.active=(0,s.iv)("*:active>&{box-shadow:",p(n),";}","")),(0,b.Jf)(d)&&(m.focus=(0,s.iv)("*:focus>&{box-shadow:",p(d),";}","")),h(l,m.Base,m.hover,m.focus,m.active,t)},[o,r,t,h,d,i,v,f,g]);return{...x,className:w,"aria-hidden":!0}}(e);return(0,n.createElement)(i.Z,{...r,ref:o})},"Elevation");var f=r("../node_modules/@wordpress/components/build-module/card/styles.js"),g=r("../node_modules/@wordpress/deprecated/build-module/index.js"),x=r("../node_modules/@wordpress/components/build-module/utils/colors-values.js");let h=(0,s.iv)("background-color:",u.Z.surfaceColor,";color:",x.D.gray[900],";position:relative;","");u.Z.surfaceBackgroundColor;let w=(0,s.iv)("",""),y=(0,s.iv)("background:",u.Z.surfaceBackgroundTintColor,";",""),j=(0,s.iv)("background:",u.Z.surfaceBackgroundTertiaryColor,";",""),Z=k=e=>["90deg",[u.Z.surfaceBackgroundColor,e].join(" "),"transparent 1%"].join(","),C=e=>[[u.Z.surfaceBackgroundColor,e].join(" "),"transparent 1%"].join(","),_=e=>[`linear-gradient( ${k(e)} ) center`,`linear-gradient( ${C(e)} ) center`,u.Z.surfaceBorderBoldColor].join(","),B=(e,o)=>(0,s.iv)("background:",_(o),";background-size:",Z(e),";",""),$=`${u.Z.surfaceBorderSubtleColor} 1px,transparent 1px`,E=`90deg,${u.Z.surfaceBorderSubtleColor} 1px,transparent 1px`,I=`linear-gradient( ${$} ),linear-gradient( ${E} )`,z=e=>(0,s.iv)("background:",u.Z.surfaceBackgroundColor,";background-image:",I,";background-size:",Z(e),";",""),J=(e,o,r)=>{switch(e){case"dotted":return B(o,r);case"grid":return z(o);case"primary":return w;case"secondary":return y;case"tertiary":return j}},S=(0,d.Iq)(function(e,o){let{children:r,elevation:d,isBorderless:l,isRounded:c,size:b,...p}=function(e){let{className:o,elevation:r=0,isBorderless:t=!1,isRounded:d=!0,size:i="medium",...l}=(0,a.y)(function({elevation:e,isElevated:o,...r}){let n={...r},s=e;if(o){var t;(0,g.Z)("Card isElevated prop",{since:"5.9",alternative:"elevation"}),null!==(t=s)&&void 0!==t||(s=2)}return void 0!==s&&(n.elevation=s),n}(e),"Card"),c=(0,m.I)(),b=(0,n.useMemo)(()=>c(f.Zb,t&&f.fW,d&&f.eP,o),[o,c,t,d]),p=function(e){let{backgroundSize:o=12,borderBottom:r=!1,borderLeft:t=!1,borderRight:d=!1,borderTop:i=!1,className:l,variant:c="primary",...b}=(0,a.y)(e,"Surface"),p=(0,m.I)(),v=(0,n.useMemo)(()=>{let e={borders:function({borderBottom:e,borderLeft:o,borderRight:r,borderTop:n}){let t=`1px solid ${u.Z.surfaceBorderColor}`;return(0,s.iv)({borderBottom:e?t:void 0,borderLeft:o?t:void 0,borderRight:r?t:void 0,borderTop:n?t:void 0},"","")}({borderBottom:r,borderLeft:t,borderRight:d,borderTop:i})};return p(h,e.borders,J(c,`${o}px`,`${o-1}px`),l)},[o,r,t,d,i,l,p,c]);return{...b,className:v}}({...l,className:b});return{...p,elevation:r,isBorderless:t,isRounded:d,size:i}}(e),x=c?u.Z.cardBorderRadius:0,w=(0,m.I)(),y=(0,n.useMemo)(()=>w((0,s.iv)({borderRadius:x},"","")),[w,x]),j=(0,n.useMemo)(()=>{let e={size:b,isBorderless:l};return{CardBody:e,CardHeader:e,CardFooter:e}},[l,b]);return(0,n.createElement)(t.G8,{value:j},(0,n.createElement)(i.Z,{...p,ref:o},(0,n.createElement)(i.Z,{className:w(f.VY)},r),(0,n.createElement)(v,{className:y,isInteractive:!1,value:d?1:0}),(0,n.createElement)(v,{className:y,isInteractive:!1,value:d})))},"Card"),T=S},"../node_modules/@wordpress/components/build-module/card/styles.js":(e,o,r)=>{r.d(o,{$_:()=>l,E0:()=>b,F0:()=>h,VY:()=>u,Zb:()=>i,eP:()=>g,fW:()=>v,h4:()=>a,iz:()=>m,mT:()=>w,oB:()=>f,tv:()=>p,uT:()=>c});var n=r("../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=r("../node_modules/@wordpress/components/build-module/utils/config-values.js"),t=r("../node_modules/@wordpress/components/build-module/utils/colors-values.js");let d=`calc(${s.Z.cardBorderRadius} - 1px)`,i=(0,n.iv)("box-shadow:0 0 0 1px ",s.Z.surfaceBorderColor,";outline:none;",""),a={name:"1showjb",styles:"border-bottom:1px solid;box-sizing:border-box;&:last-child{border-bottom:none;}"},l={name:"14n5oej",styles:"border-top:1px solid;box-sizing:border-box;&:first-of-type{border-top:none;}"},u={name:"13udsys",styles:"height:100%"},c={name:"6ywzd",styles:"box-sizing:border-box;height:auto;max-height:100%"},m={name:"c990dr",styles:"box-sizing:border-box;display:block;width:100%"},b=(0,n.iv)("&:first-of-type{border-top-left-radius:",d,";border-top-right-radius:",d,";}&:last-of-type{border-bottom-left-radius:",d,";border-bottom-right-radius:",d,";}",""),p=(0,n.iv)("border-color:",s.Z.colorDivider,";",""),v={name:"1t90u8d",styles:"box-shadow:none"},f={name:"1e1ncky",styles:"border:none"},g=(0,n.iv)("border-radius:",d,";",""),x=(0,n.iv)("padding:",s.Z.cardPaddingXSmall,";",""),h={large:(0,n.iv)("padding:",s.Z.cardPaddingLarge,";",""),medium:(0,n.iv)("padding:",s.Z.cardPaddingMedium,";",""),small:(0,n.iv)("padding:",s.Z.cardPaddingSmall,";",""),xSmall:x,extraSmall:x},w=(0,n.iv)("background-color:",t.D.ui.backgroundDisabled,";","")},"../node_modules/@wordpress/components/build-module/utils/reduce-motion.js":(e,o,r)=>{r.d(o,{r:()=>n});function n(e="transition"){let o;switch(e){case"transition":o="transition-duration: 0ms;";break;case"animation":o="animation-duration: 1ms;";break;default:o=`
				animation-duration: 1ms;
				transition-duration: 0ms;
			`}return`
		@media ( prefers-reduced-motion: reduce ) {
			${o};
		}
	`}},"../node_modules/@wordpress/components/build-module/utils/values.js":(e,o,r)=>{unction s(e){let o=""===e;return!n(e)||o}function t(e=[],o){var r;return null!==(r=e.find(n))&&void 0!==r?r:o}r.d(o,{Jf:()=>n,Me:()=>t,Wx:()=>s,q9:);let d=i=}]);