/* juxtapose - v1.2.2 - 2020-09-03
 * Copyright (c) 2020 Alex Duner and Northwestern University Knight Lab
 */
div.juxtapose {
	width: 100%;
	font-family: Helvetica, Arial, sans-serif;
}

div.jx-slider {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	color: #f3f3f3;
}


div.jx-handle {
	position: absolute;
	height: 100%;
	width: 40px;
	cursor: col-resize;
	z-index: 15;
	margin-left: -20px;
}

.vertical div.jx-handle {
	height: 40px;
	width: 100%;
	cursor: row-resize;
	margin-top: -20px;
	margin-left: 0;
}

div.jx-control {
	height: 100%;
	margin-right: auto;
	margin-left: auto;
	width: 3px;
	background-color: currentColor;
}

.vertical div.jx-control {
	height: 3px;
	width: 100%;
	background-color: currentColor;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}

div.jx-controller {
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	height: 60px;
	width: 9px;
	margin-left: -3px;
	background-color: currentColor;
}

.vertical div.jx-controller {
	height: 9px;
	width: 100px;
	margin-left: auto;
	margin-right: auto;
	top: -3px;
	position: relative;
}

div.jx-arrow {
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	width: 0;
	height: 0;
	transition: all .2s ease;
}

.vertical div.jx-arrow {
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	width: 0;
	height: 0;
	transition: all .2s ease;
}


div.jx-arrow.jx-left {
	left: 2px;
	border-style: solid;
	border-width: 8px 8px 8px 0;
	border-color: transparent currentColor transparent transparent;
}

div.jx-arrow.jx-right {
	right: 2px;
	border-style: solid;
	border-width: 8px 0 8px 8px;
	border-color: transparent transparent transparent currentColor;
}

.vertical div.jx-arrow.jx-left {
	left: 0px;
	top: 2px;
	border-style: solid;
	border-width: 0px 8px 8px 8px;
	border-color: transparent transparent currentColor transparent;
}

.vertical div.jx-arrow.jx-right {
	right: 0px;
	top: auto;
	bottom: 2px;
	border-style: solid;
	border-width: 8px 8px 0 8px;
	border-color: currentColor transparent transparent transparent;
}

div.jx-handle:hover div.jx-arrow.jx-left,
div.jx-handle:active div.jx-arrow.jx-left {
	left: -1px;
}

div.jx-handle:hover div.jx-arrow.jx-right,
div.jx-handle:active div.jx-arrow.jx-right {
	right: -1px;
}

.vertical div.jx-handle:hover div.jx-arrow.jx-left,
.vertical div.jx-handle:active div.jx-arrow.jx-left {
	left: 0px;
	top: 0px;
}

.vertical div.jx-handle:hover div.jx-arrow.jx-right,
.vertical div.jx-handle:active div.jx-arrow.jx-right {
	right: 0px;
	bottom: 0px;
}


div.jx-image {
	position: absolute;
	height: 100%;
	display: inline-block;
	top: 0;
	overflow: hidden;
	-webkit-backface-visibility: hidden;
}

.vertical div.jx-image {
	width: 100%;
	left: 0;
	top: auto;
}

div.jx-image img {
	height: 100%;
	width: auto;
	z-index: 5;
	position: absolute;
	margin-bottom: 0;

	max-height: none;
	max-width: none;
	max-height: initial;
	max-width: initial;
}

.vertical div.jx-image img {
	height: auto;
	width: 100%;
}

div.jx-image.jx-left {
	left: 0;
	background-position: left;
}

div.jx-image.jx-left img {
	left: 0;
}

div.jx-image.jx-right {
	right: 0;
	background-position: right;
}

div.jx-image.jx-right img {
	right: 0;
	bottom: 0;
}


.veritcal div.jx-image.jx-left {
	top: 0;
	background-position: top;
}

.veritcal div.jx-image.jx-left img {
	top: 0;
}

.vertical div.jx-image.jx-right {
	bottom: 0;
	background-position: bottom;
}

.veritcal div.jx-image.jx-right img {
	bottom: 0;
}


div.jx-image div.jx-label {
	font-size: 1em;
	padding: .25em .75em;
	position: relative;
	display: inline-block;
	top: 0;
	background-color: #000; /* IE 8 */
	background-color: rgba(0,0,0,.7);
	color: white;
	z-index: 10;
	white-space: nowrap;
	line-height: 18px;
	vertical-align: middle;
}

div.jx-image.jx-left div.jx-label {
	float: left;
	left: 0;
}

div.jx-image.jx-right div.jx-label {
	float: right;
	right: 0;
}

.vertical div.jx-image div.jx-label {
	display: table;
	position: absolute;
}

.vertical div.jx-image.jx-right div.jx-label {
	left: 0;
	bottom: 0;
	top: auto;
}

div.jx-credit {
	line-height: 1.1;
	font-size: 0.75em;
}

div.jx-credit em {
	font-weight: bold;
	font-style: normal;
}


/* Animation */

div.jx-image.transition {
	transition: width .5s ease;
}

div.jx-handle.transition {
	transition: left .5s ease;
}

.vertical div.jx-image.transition {
	transition: height .5s ease;
}

.vertical div.jx-handle.transition {
	transition: top .5s ease;
}

/* Knight Lab Credit */
a.jx-knightlab {
	background-color: #000; /* IE 8 */
	background-color: rgba(0,0,0,.25);
	bottom: 0;
	display: table;
	height: 14px;
	line-height: 14px;
	padding: 1px 4px 1px 5px;
	position: absolute;
	right: 0;
	text-decoration: none;
	z-index: 10;
}

a.jx-knightlab div.knightlab-logo {
	display: inline-block;
	vertical-align: middle;
	height: 8px;
	width: 8px;
	background-color: #c34528;
	transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	top: -1.25px;
	position: relative;
	cursor: pointer;
}

a.jx-knightlab:hover {
	background-color: #000; /* IE 8 */
	background-color: rgba(0,0,0,.35);
}
a.jx-knightlab:hover div.knightlab-logo {
	background-color: #ce4d28;
}

a.jx-knightlab span.juxtapose-name {
	display: table-cell;
	margin: 0;
	padding: 0;
	font-family: Helvetica, Arial, sans-serif;
	font-weight: 300;
	color: white;
	font-size: 10px;
	padding-left: 0.375em;
	vertical-align: middle;
	line-height: normal;
	text-shadow: none;
}

/* keyboard accessibility */
div.jx-controller:focus,
div.jx-image.jx-left div.jx-label:focus,
div.jx-image.jx-right div.jx-label:focus,
a.jx-knightlab:focus {
	background: #eae34a;
	color: #000;
}
a.jx-knightlab:focus span.juxtapose-name{
	color: #000;
	border: none;
}
2.401 0 0 1-3.472.64l-3.74-2.804a.96.96 0 0 0-1.156.004l-5.048 3.832c-.672.512-1.552-.292-1.1-1.008Z",fill:"#fff"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("radialGradient",{id:t,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(18.16 43.826) scale(34.8672)",children:[(0,a.jsx)("stop",{stopColor:"#09F"}),(0,a.jsx)("stop",{offset:".61",stopColor:"#A033FF"}),(0,a.jsx)("stop",{offset:".935",stopColor:"#FF5280"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#FF7061"})]})})]})}},464240:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(643010),s=i(785893);function l({size:e=56}){let t=(0,a.vs)();return(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",display:"block",children:[(0,s.jsx)("rect",{width:"56",height:"56",rx:"28",fill:t?"white":"#111111"}),(0,s.jsx)("path",{d:"M30.3055 25.8561L40.505 14H38.088L29.2318 24.2945L22.1584 14H14L24.6964 29.5671L14 42H16.4171L25.7695 31.1287L33.2396 42H41.3979L30.3049 25.8561H30.3055ZM26.995 29.7042L25.9112 28.1541L17.288 15.8196H21.0005L27.9595 25.7739L29.0433 27.324L38.0892 40.2632H34.3767L26.995 29.7048V29.7042Z",fill:t?"#111111":"white"})]})}},22641:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(785893);function s({size:e=56}){return(0,a.jsxs)("svg",{width:e,height:e,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",display:"block",children:[(0,a.jsx)("rect",{width:"56",height:"56",rx:"28",fill:"#25D366"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.206 16.65A15.75 15.75 0 0 0 27.99 12c-8.74 0-15.854 7.113-15.857 15.855a15.821 15.821 0 0 0 2.117 7.927L12 44l8.406-2.205a15.837 15.837 0 0 0 7.577 1.93h.007c8.74 0 15.853-7.114 15.856-15.857a15.76 15.76 0 0 0-4.64-11.218ZM27.99 41.047h-.005c-2.365 0-4.684-.636-6.708-1.837l-.482-.286-4.988 1.309 1.331-4.864-.313-.499a13.146 13.146 0 0 1-2.015-7.014c.003-7.266 5.915-13.178 13.185-13.178a13.09 13.09 0 0 1 9.318 3.865 13.098 13.098 0 0 1 3.856 9.324c-.003 7.267-5.915 13.18-13.179 13.18Zm7.23-9.871c-.397-.199-2.345-1.157-2.708-1.289-.364-.132-.628-.198-.891.198-.264.397-1.024 1.29-1.255 1.554-.231.264-.462.297-.858.099-.396-.199-1.673-.617-3.187-1.966-1.178-1.051-1.973-2.348-2.204-2.745-.231-.397-.024-.611.173-.808.178-.178.397-.463.595-.695.198-.23.264-.396.396-.66.132-.265.066-.496-.033-.695-.098-.198-.89-2.148-1.221-2.941-.322-.773-.649-.668-.892-.68a16.01 16.01 0 0 0-.759-.014c-.264 0-.693.099-1.057.495-.363.397-1.387 1.356-1.387 3.305 0 1.95 1.42 3.835 1.618 4.1.199.264 2.794 4.265 6.769 5.982.945.409 1.683.653 2.259.835.948.302 1.812.26 2.495.157.76-.114 2.344-.958 2.674-1.884.33-.925.33-1.719.23-1.884-.098-.166-.362-.266-.758-.464Z",fill:"#fff"})]})}},867060:(e,t,i)=>{i.d(t,{LO:()=>l,Pu:()=>r,cc:()=>a,dB:()=>s,yF:()=>n});let a={10:13098,11:13099,6:13100,5:13101,14:13102,12:13103,15:13104,8:13105,4:13106,1:13107,3:13107,18:13108,19:13109,20:13110,21:13111,22:13112,23:13113,26:13114,27:13115,29:13116,9:13286},s={10:13415,11:13416,6:13417,5:13418,14:13419,12:13420,15:13421,8:13422,4:13423,1:13424,3:13424,18:13425,19:13426,20:13427,21:13428,22:13429,23:13430,26:13431,27:13432,29:13433,9:13434},l={10:13436,11:13437,6:13438,5:13439,14:13440,12:13441,15:13442,8:13443,4:13444,1:13445,3:13445,18:13446,19:13447,20:13448,21:13449,22:13450,23:13451,26:13452,27:13453,29:13454,9:13455},r={10:13457,11:13458,6:13459,5:13460,14:13461,12:13462,15:13463,8:13464,4:13465,1:13466,3:13466,18:13467,19:13468,20:13469,21:13470,22:13471,23:13472,26:13473,27:13474,29:13475,9:13476},n={pin:1,board:2,did_it:6,pinner:3,user:3,today_article:8,follow_invite:3}},207112:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(667294),s=i(883119),l=i(785893);let r=()=>i.e(14118).then(i.bind(i,448433));class n extends a.Component{constructor(e){var t,i,s;super(e),i={manualTruncate:!1},(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t="state","string"))?s:String(s))in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,this.ref=(0,a.createRef)()}componentDidMount(){let{maxHeightPx:e,shaveOptions:t={}}=this.props,i=this.ref&&this.ref.current;if(!i)return;let a=void 0===i.textContent?"innerText":"textContent",s=i[a],l="boolean"!=typeof t.spaces||t.spaces,n=l?s.split(" "):s;if(n.length<2){this.setState({manualTruncate:!0});return}r().then(({default:a})=>{a(i,e,t)})}render(){let{maxWidthPx:e,maxHeightPx:t,inline:i=!1}=this.props,{manualTruncate:a}=this.state,r={maxWidth:e,maxHeight:t},n=i?{display:"inline",...r}:{...r};return a?(0,l.jsx)(s.xu,{overflow:"hidden",dangerouslySetInlineStyle:{__style:n},ref:this.ref,"data-test-id":"truncater",children:this.props.children}):(0,l.jsx)(s.xu,{ref:this.ref,dangerouslySetInlineStyle:{__style:n},"data-test-id":"truncater",children:this.props.children})}}let o=n},475970:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(667294),s=i(616550),l=i(883119),r=i(827896),n=i(407043),o=i(499128),h=i(898781),c=i(53987),d=i(773285),p=i(743473),_=i(867060),u=i(785893);function g({size:e,iconColor:t,backgroundColor:i,disabled:a,onClick:s}){let r=(0,h.ZP)();return(0,u.jsx)(l.hU,{accessibilityLabel:r.bt("Copiar enlace", "Copy Link", "shareMenu.icon.accessibilityLabel.copy", undefined, true),bgColor:i,icon:"link",iconColor:!t&&(!i||["white","lightGray","transparent"].includes(i))?"gray":t,size:48===e?"lg":"xl",disabled:a,onClick:s})}var x=i(343341),v=i(761029),w=i(375436),f=i(67428),b=i(67347);function m({backgroundColor:e,iconColor:t,iconSize:i,iconWrapperWidth:m,isCloseupActionBar:S,marginEnd:y,onClick:j,sharedObject:k,spaceBelowIcon:C,viewType:L,viewParameter:P,isGroupBoardInvite:Z}){let B=(0,h.ZP)(),{logContextEvent:A}=(0,n.v)(),{checkExperiment:z}=(0,d.F)(),I=z("web_share_menu_logging").anyEnabled,E=(0,x.F9)(),[F,M]=(0,a.useState)(""),[O,D]=(0,a.useState)(!1),[T,R]=(0,a.useState)(!1),U=(0,s.useLocation)(),W=(0,r.Z)(),H=(0,p.Z)(),N=B.bt("Enlace copiado", "Link copied!", "shareSheet.socialBar.copyLinkButton.LinkCopied", undefined, true),V=e=>{let t;return"pin"===k.type&&k.id&&(t=W(k.id,{shouldTrackForPrevLocation:!0})),{invite_category:Z?4:3,invite_channel:e,object_type:k.type,object_id:k.id,name:k.name,description:k.description||"",path:k.url,picture:k.imageUrl,client_tracking_params:t}},$=e=>{E.showToast(({hideToast:t})=>(0,u.jsx)(l.xu,{top:!0,children:(0,u.jsx)(o.ZP,{duration:3e3,onHide:t,text:e})}))},G=e=>{S?navigator.clipboard.writeText(e).then(()=>{$(B.bt("Enlace copiado en el portapapeles para que lo compartas", "Copied link to your clipboard to share", "web.unauth.pinbar.copylink", undefined, true))}):navigator.clipboard.writeText(e).then(()=>{R(!0),setTimeout(()=>{R(!1)},3e3)})},K=async()=>{if(F){G(F);return}D(!0);let e=V(12);H.createShareInviteData(e).then(t=>{let{invite_url:i}=t;D(!1),i&&(M(i),H.logShareInvite(e,t),G(i))})},X=()=>{if(K(),I){let e=_.yF[k.type];e||(0,b.nP)("social.web.copyLinkButton.sharedObject.type",{sampleRate:void 0,tags:{type:k.type}}),S&&A({event_type:101,component:14147,element:13103,object_id_str:k.id,view_type:L,view_parameter:P,aux_data:e?{invite_object:e}:void 0}),j&&j()}};return(0,c.am)(U)&&S&&z("web_copy_link_btn_replace").anyEnabled?(0,u.jsx)(l.xu,{marginStart:1,children:(0,u.jsx)(l.zx,{accessibilityLabel:B.bt("Copiar enlace", "Copy link", "shareSheet.socialBar.copyLinkButton.CopyLink", undefined, true),text:B.bt("Copiar enlace", "Copy link", "shareSheet.socialBar.copyLinkButton.CopyLink", undefined, true),onClick:()=>X(),size:"lg",color:"gray",fullWidth:!0})}):(0,u.jsxs)(f.Z,{isCloseupActionBar:!0,width:m||i,marginEnd:y||!1,children:[(0,u.jsx)(l.xu,{alignItems:S?"center":"stretch",display:S?"flex":"block",marginBottom:C,width:S?"100%":"auto",children:(0,u.jsx)(l.kC,{alignItems:"center",direction:"column",justifyContent:"center",width:i,children:(0,u.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:v.O},children:(0,u.jsx)(g,{backgroundColor:e,iconColor:t,size:i,onClick:X,disabled:O})})})}),!S&&(0,u.jsx)(w.Z,{text:T?N:B.bt("Copiar enlace", "Copy link", "shareSheet.socialBar.copyLinkButton.CopyLink", undefined, true)})]})}},761029:(e,t,i)=>{i.d(t,{O:()=>z,Z:()=>M});var a=i(667294),s=i(883119),l=i(827896),r=i(407043),n=i(898781),o=i(107193),h=i(773285),c=i(780280),d=i(743473),p=i(867060),_=i(31149),u=i(659522),g=i(331744),x=i(757146),v=i(464240),w=i(22641),f=i(343341),b=i(567831),m=i(19121),S=i(881749),y=i(475970),j=i(785893);function k({size:e=48}){return(0,j.jsxs)("svg",{width:e,height:e,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",display:"block",children:[(0,j.jsx)("rect",{width:"56",height:"56",rx:"28",fill:"#fff"}),(0,j.jsx)("rect",{x:".5",y:".5",width:"55",height:"55",rx:"27.5",stroke:"#767676",strokeOpacity:".4"}),(0,j.jsx)("path",{d:"M39 19.5c0 1.381-1.119 2.5-2.5 2.5S34 20.881 34 19.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5ZM18.5 28c0-.69-.56-1.25-1.25-1.25S16 27.31 16 28s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25ZM26.75 38.75c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25S28.69 40 28 40s-1.25-.56-1.25-1.25Z",fill:"#E60023"}),(0,j.jsx)("path",{d:"M29.25 17.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25S27.31 16 28 16s1.25.56 1.25 1.25ZM17 36.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5ZM38.75 26.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25S40 28.69 40 28s-.56-1.25-1.25-1.25Z",fill:"#FFD63F"}),(0,j.jsx)("path",{d:"M19.5 22c1.381 0 2.5-1.119 2.5-2.5S20.881 17 19.5 17 17 18.119 17 19.5s1.119 2.5 2.5 2.5ZM36.5 34c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5Z",fill:"#46CC88"}),(0,j.jsx)("path",{d:"M28 21c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7Z",fill:"#3869FF"})]})}var C=i(750869),L=i(375436),P=i(67428);function Z({iconSize:e,iconWrapperWidth:t,marginBottom:i,marginEnd:a,onCreatePincodeClick:l,sharedObject:r}){let o=(0,n.ZP)(),h=(0,m.Z)(),c=l&&[C.d.BOARD,C.d.PINNER,C.d.USER].includes(r.type)&&h.isAuth&&(r.id===h.id||h.isEmployee);return c?(0,j.jsxs)(P.Z,{width:t,marginEnd:a,children:[(0,j.jsx)(s.xu,{marginBottom:i,children:(0,j.jsx)("button",{style:z,"aria-label":o.bt("Compartir código de Pin", "Share Pin Code", "sharesheet.sharePinCode", undefined, true),onClick:l,children:(0,j.jsx)(k,{size:e})})}),(0,j.jsx)(L.Z,{text:o.bt("Pincode", "Pincode", "Share via pincode", undefined, true)})]},"pincode"):null}var B=i(67347);function A(e,t,i){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let z={backgroundColor:"#ffffff",border:"none",padding:0},I=new Set(["JP","TW","TH"]),E=(e,t)=>{(0,o.default)(t=>{t&&(t.getUserID()?e():t.login(()=>{e()}))},t)};class F extends a.Component{constructor(...e){super(...e),A(this,"state",{whatsappInviteData:null,inviteData:null,whatsappURL:"",whatsAppLogged:!1,copyLinkLogged:!1}),A(this,"logShareInviteLink",()=>{let{copyLinkLogged:e,inviteData:t}=this.state,i=this.getShareOptions(12);e||(this.props.ShareInvite.logShareInvite(i,t),this.setState({copyLinkLogged:!0}))})}componentDidMount(){this.getWhatsAppURL()}getShareOptions(e){let t;let{sharedObject:i,getClientTrackingParams:a,linkUrl:s,isGroupBoardInvite:l}=this.props;"pin"===i.type&&i.id&&(t=a(i.id,{shouldTrackForPrevLocation:!0}));let r=null!=s?s:i.url;return{invite_category:l?4:3,invite_channel:e,object_type:i.type,object_id:i.id,name:i.name,description:i.description||"",path:r,url:r,picture:i.imageUrl,client_tracking_params:t}}getWhatsAppURL(){let e=this.getShareOptions(10);this.props.ShareInvite.createShareInviteData(e).then(e=>{let t=`${e.title}
${e.invite_url}`;if(t){let i=encodeURIComponent(t);this.setState({whatsappInviteData:e,whatsappURL:"https://web.whatsapp.com/send?text="+i})}else this.setState({whatsappURL:"https://web.whatsapp.com/send?text="+(0,b.Z)(this.props.sharedObject.url)})})}checkWritePermissions(){return!!this.props.viewer.isWriteBanned}handleSocialShareClick(e,t){if(this.checkWritePermissions())return;let{onCreatePincodeClick:i,onExternalSend:a,logContextEvent:s,viewType:l,viewParameter:r,inShareMenuLoggingExp:n,sharedObject:o,component:h}=this.props,c=n?p.cc[t]:46;"facebook"===e||5===t?(this.openFacebookDialog(),n||(c=257)):"twitter"===e||9===t?(this.openTwitterDialog(),n||(c=256)):"messenger"===e||6===t?(this.openFbMessengerDialog(),n||(c=950)):"whatsapp"===e||10===t?(this.openWhatsAppDialog(),n||(c=951)):"pincode"===e||16===t?i&&i():"copylink"===e||12===t?(this.openShareUrlLink(),n||(c=100)):"email"===e||1===t?(this.openEmailDialog(),n||(c=258)):"line"!==e&&8!==t||(this.openLineDialog(),n||(c=952)),a&&a();let d=p.yF[o.type];d||(0,B.nP)("social.web.legoShareSocialBar.sharedObject.type",{sampleRate:void 0,tags:{type:o.type}}),s({event_type:101,component:n?14121:153,element:c,object_id_str:n?o.id:void 0,view_type:n?l:void 0,view_parameter:n?r:void 0,aux_data:n?{invite_object:d}:void 0});let _={board:p.LO,pinner:p.Pu,user:p.Pu,pin:p.dB,did_it:p.dB,today_article:p.dB,follow_invite:p.Pu};s({event_type:10399,component:h,object_id_str:o.id||void 0,view_type:l,view_parameter:r,aux_data:{invite_object:d},element:_[o.type][t]})}openEmailDialog(){this.props.onEmailIconClick()}openFacebookDialog(){let{unauthId:e,viewer:t}=this.props;E(()=>{this.props.ShareInvite.shareFacebookInvite({options:this.getShareOptions(5),unauthId:e,viewer:t})},t)}openFbMessengerDialog(){let{unauthId:e,viewer:t}=this.props;E(()=>{this.props.ShareInvite.shareFbMessengerInvite({options:this.getShareOptions(6),unauthId:e,viewer:t})},t)}openWhatsAppDialog(){let e=this.getShareOptions(10);this.state.whatsAppLogged||(this.props.ShareInvite.logShareInvite(e,this.state.whatsappInviteData),this.setState({whatsAppLogged:!0}))}openShareUrlLink(){this.logShareInviteLink()}openTwitterDialog(){this.props.ShareInvite.shareTwitterInvite(this.getShareOptions(9))}openLineDialog(){this.props.ShareInvite.shareLineInvite(this.getShareOptions(8))}renderEmail(){let e=S.iB,t=S.iB+S.hN,i=S.vt;return(0,j.jsxs)(P.Z,{width:t,marginEnd:!1,children:[(0,j.jsx)(s.xu,{display:"inlineBlock",marginBottom:i,"data-test-id":"email-share-button-auth",children:(0,j.jsx)("button",{"aria-label":this.props.i18n.bt("Compartir por correo", "Share on Email", "sharesheet.shareSocialBar.ShareEmail", undefined, true),onClick:()=>this.handleSocialShareClick("email",1),style:z,children:(0,j.jsx)(_.Z,{size:e})})}),(0,j.jsx)(L.Z,{text:this.props.i18n.bt("Correo", "Email", "Share via email", undefined, true)})]},"email")}renderShareOptions(){let{i18n:e,onCreatePincodeClick:t,sharedObject:i,showLineShare:l,showMessengerShare:r,showEmailOption:n,viewType:o,viewParameter:h,showCopyLinkInFront:c,stretchToFitContainer:d,isGroupBoardInvite:p}=this.props,_=S.iB,f=S.iB+S.hN,b=S.vt,m=(0,j.jsx)(s.xu,{"data-test-id":"copy-link-share-icon-auth",children:(0,j.jsx)(y.default,{sharedObject:i,backgroundColor:"lightGray",iconColor:"darkGray",iconSize:_,iconWrapperWidth:f,onClick:()=>this.handleSocialShareClick("copylink",12),isCloseupActionBar:!1,spaceBelowIcon:b,viewType:o,viewParameter:h,isGroupBoardInvite:p},"copylink")});return(0,j.jsx)(a.Fragment,{children:(0,j.jsxs)(s.kC,{flex:d?"grow":"shrink",justifyContent:d?"around":"start",wrap:!0,children:[c&&m,l&&(0,j.jsxs)(P.Z,{width:f,marginEnd:!1,children:[(0,j.jsx)(s.xu,{marginBottom:b,children:(0,j.jsx)("button",{"aria-label":e.bt("Compartir en LINE", "Share on LINE", "sharesheet.shareSocialBar.ShareLine", undefined, true),onClick:()=>this.handleSocialShareClick("line",8),style:z,children:(0,j.jsx)(g.Z,{size:_})})}),(0,j.jsx)(L.Z,{text:e.bt("LINE", "LINE", "sharesheet.shareSocialBar.ShareLineLabel", undefined, true)})]}),(0,j.jsxs)(P.Z,{width:f,marginEnd:!1,children:[(0,j.jsx)(s.xu,{marginBottom:b,"data-test-id":"whatsapp-share-icon-auth",children:(0,j.jsx)("button",{"aria-label":e.bt("Compartir en WhatsApp", "Share on WhatsApp", "sharesheet.shareSocialBar.ShareWhatsapp", undefined, true),onClick:()=>this.handleSocialShareClick("whatsapp",10),style:z,tabIndex:"-1",children:(0,j.jsx)(s.Tg,{rounding:"circle",href:this.state.whatsappURL,target:"blank",children:(0,j.jsx)(w.Z,{size:_})})})}),(0,j.jsx)(L.Z,{text:e.bt("WhatsApp", "WhatsApp", "sharesheet.shareSocialBar.ShareWhatsappLabel", undefined, true)})]}),r&&(0,j.jsxs)(P.Z,{width:f,marginEnd:!1,children:[(0,j.jsx)(s.xu,{marginBottom:b,"data-test-id":"messenger-share-icon-auth",children:(0,j.jsx)("button",{"aria-label":e.bt("Compartir en Messenger", "Share on Messenger", "sharesheet.shareSocialBar.ShareMessenger", undefined, true),onClick:()=>this.handleSocialShareClick("messenger",6),style:z,children:(0,j.jsx)(x.Z,{size:_})})}),(0,j.jsx)(L.Z,{text:e.bt("Messenger", "Messenger", "sharesheet.shareSocialBar.ShareMessengerLabel", undefined, true)})]}),(0,j.jsxs)(P.Z,{width:f,marginEnd:!1,children:[(0,j.jsx)(s.xu,{marginBottom:b,"data-test-id":"facebook-share-icon-auth",children:(0,j.jsx)("button",{"aria-label":e.bt("Compartir en Facebook", "Share on Facebook", "sharesheet.shareSocialBar.ShareFacebook", undefined, true),onClick:()=>this.handleSocialShareClick("facebook",5),style:z,children:(0,j.jsx)(u.Z,{size:_})})}),(0,j.jsx)(L.Z,{text:e.bt("Facebook", "Facebook", "sharesheet.shareSocialBar.ShareFacebookLabel", undefined, true)})]}),(0,j.jsxs)(P.Z,{width:f,marginEnd:!1,children:[(0,j.jsx)(s.xu,{marginBottom:b,"data-test-id":"twitter-share-icon-auth",children:(0,j.jsx)("button",{"aria-label":e.bt("Compartir en Twitter", "Share on Twitter", "sharesheet.shareSocialBar.ShareTwitter", undefined, true),onClick:()=>this.handleSocialShareClick("twitter",9),style:z,"data-test-id":"twitter-share-icon",children:(0,j.jsx)(v.Z,{size:_})})}),(0,j.jsx)(L.Z,{text:e.bt("X", "X", "sharesheet.shareSocialBar.ShareTwitterLabel", undefined, true)})]}),(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(Z,{iconSize:_,iconWrapperWidth:f,marginBottom:b,marginEnd:!1,onCreatePincodeClick:t,sharedObject:i}),!c&&m,n&&this.renderEmail()]})]})})}render(){let{paddingX:e,hideHeader:t}=this.props;return(0,j.jsxs)(s.xu,{paddingX:e,"data-test-id":"lego-share-social-bar-auth",children:[!t&&(0,j.jsx)(s.kC,{alignContent:"center",alignItems:"center",height:S.dN,justifyContent:"center",children:(0,j.jsx)(s.xv,{size:S.Kt,weight:"bold",children:this.props.i18n.bt("Compartir", "Share", "Sharesheet.ShareSocialBar", undefined, true)})}),(0,j.jsx)(s.kC,{alignContent:"start",alignItems:"stretch",justifyContent:"start",minHeight:S.$N,children:this.renderShareOptions()})]})}}function M(e){let{logContextEvent:t}=(0,r.v)(),{checkExperiment:i}=(0,h.F)(),a=(0,n.ZP)(),s=(0,m.Z)(),o=s.isAuth&&I.has(s.country),p=i("web_messenger_share_channel").anyEnabled,_=(0,c.B)(),u=i("web_share_menu_logging").anyEnabled,g=(0,d.Z)();return(0,j.jsx)(F,{...e,toastManagerContext:(0,f.F9)(),viewer:(0,m.Z)(),showLineShare:o,showMessengerShare:p,i18n:a,logContextEvent:t,unauthId:_.unauthId,inShareMenuLoggingExp:u,getClientTrackingParams:(0,l.Z)(),ShareInvite:g})}},750869:(e,t,i)=>{i.d(t,{d:()=>a});let a={BOARD:"board",PIN:"pin",DID_IT:"did_it",PINNER:"pinner",USER:"user",TODAY_ARTICLE:"today_article",FOLLOW_INVITE:"follow_invite"}},375436:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(883119),s=i(207112),l=i(785893);let r=({text:e})=>(0,l.jsx)(a.xv,{align:"center",size:"100",children:(0,l.jsx)(s.Z,{maxWidthPx:128,maxHeightPx:50,children:e})})},67428:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(883119),s=i(785893);let l=({width:e,marginEnd:t,children:i,isCloseupActionBar:l})=>(0,s.jsx)(a.xu,{alignItems:"center",direction:"column",display:"flex",marginEnd:t?2:0,width:e,marginBottom:l?0:5,children:i})},881749:(e,t,i)=>{i.d(t,{$N:()=>n,Kt:()=>a,Mb:()=>c,Qj:()=>h,dN:()=>o,hN:()=>l,iB:()=>s,lp:()=>p,pO:()=>_,sS:()=>d,vt:()=>r});let a="200",s=48,l=26,r=2,n=81,o=49,h=9,c=3,d=1,p=5*(s+l)+8*c,_="error"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/91770.es_ES-5e6e104716b04df0.mjs.map