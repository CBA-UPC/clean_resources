#TB_overlay {
	background: #000;
	opacity: 0.7;
	filter: alpha(opacity=70);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100050; /* Above DFW. */
}

#TB_window {
	position: fixed;
	background-color: #fff;
	z-index: 100050; /* Above DFW. */
	visibility: hidden;
	text-align: left;
	top: 50%;
	left: 50%;
	-webkit-box-shadow: 0 3px 6px rgba( 0, 0, 0, 0.3 );
	box-shadow: 0 3px 6px rgba( 0, 0, 0, 0.3 );
}

#TB_window img#TB_Image {
	display: block;
	margin: 15px 0 0 15px;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #666;
	border-left: 1px solid #666;
}

#TB_caption{
	height: 25px;
	padding: 7px 30px 10px 25px;
	float: left;
}

#TB_closeWindow {
	height: 25px;
	padding: 11px 25px 10px 0;
	float: right;
}

#TB_closeWindowButton {
	position: absolute;
	left: auto;
	right: 0;
	width: 29px;
	height: 29px;
	border: 0;
	padding: 0;
	background: none;
	cursor: pointer;
	outline: none;
	-webkit-transition: color .1s ease-in-out, background .1s ease-in-out;
	transition: color .1s ease-in-out, background .1s ease-in-out;
}

#TB_ajaxWindowTitle {
	float: left;
	font-weight: 600;
	line-height: 29px;
	overflow: hidden;
	padding: 0 29px 0 10px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: calc( 100% - 39px );
}

#TB_title {
	background: #fcfcfc;
	border-bottom: 1px solid #ddd;
	height: 29px;
}

#TB_ajaxContent {
	clear: both;
	padding: 2px 15px 15px 15px;
	overflow: auto;
	text-align: left;
	line-height: 1.4em;
}

#TB_ajaxContent.TB_modal {
	padding: 15px;
}

#TB_ajaxContent p {
	padding: 5px 0px 5px 0px;
}

#TB_load {
	position: fixed;
	display: none;
	z-index: 100050;
	top: 50%;
	left: 50%;
	background-color: #E8E8E8;
	border: 1px solid #555;
	margin: -45px 0 0 -125px;
	padding: 40px 15px 15px;
}

#TB_HideSelect {
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	border: none;
	filter: alpha(opacity=0);
	opacity: 0;
	height: 100%;
	width: 100%;
}

#TB_iframeContent {
	clear: both;
	border: none;
}

.tb-close-icon {
	display: block;
	color: #666;
	text-align: center;
	line-height: 29px;
	width: 29px;
	height: 29px;
	position: absolute;
	top: 0;
	right: 0;
}

.tb-close-icon:before {
	content: "\f158";
	font: normal 20px/29px dashicons;
	speak: never;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#TB_closeWindowButton:hover .tb-close-icon,
#TB_closeWindowButton:focus .tb-close-icon {
	color: #006799;
}

#TB_closeWindowButton:focus .tb-close-icon {
	-webkit-box-shadow:
		0 0 0 1px #5b9dd9,
		0 0 2px 1px rgba(30, 140, 190, .8);
	box-shadow:
		0 0 0 1px #5b9dd9,
		0 0 2px 1px rgba(30, 140, 190, .8);
}
}const g=l(((e,t)=>[h(e,t),...w(e,t)].filter(Boolean)),((e,t)=>[e[t]])),m=l(((e,t)=>g(e,t).map((e=>y(e,"raw")))),((e,t)=>[e[t]])),b=l(((e,t)=>Object.entries(e).filter((([,e])=>e.category===t)).map((([e])=>e))),(e=>[e])),R=(0,o.createReduxStore)("core/keyboard-shortcuts",{reducer:function(e={},t){switch(t.type){case"REGISTER_SHORTCUT":return{...e,[t.name]:{category:t.category,keyCombination:t.keyCombination,aliases:t.aliases,description:t.description}};case"UNREGISTER_SHORTCUT":const{[t.name]:n,...r}=e;return r}return e},actions:n,selectors:r});(0,o.register)(R);var C=window.wp.element;function E(){const{getAllShortcutKeyCombinations:e}=(0,o.useSelect)(R);return function(t,n){return e(t).some((({modifier:e,character:t})=>d.isKeyboardEvent[e](n,t)))}}const T=new Set,k=e=>{for(const t of T)t(e)},D=(0,C.createContext)({add:e=>{0===T.size&&document.addEventListener("keydown",k),T.add(e)},delete:e=>{T.delete(e),0===T.size&&document.removeEventListener("keydown",k)}});function x(e,t,{isDisabled:n=!1}={}){const r=(0,C.useContext)(D),o=E(),a=(0,C.useRef)();(0,C.useEffect)((()=>{a.current=t}),[t]),(0,C.useEffect)((()=>{if(!n)return r.add(t),()=>{r.delete(t)};function t(t){o(e,t)&&a.current(t)}}),[e,n,r])}var O=window.React;const{Provider:U}=D;function K(e){const[t]=(0,C.useState)((()=>new Set));return(0,O.createElement)(U,{value:t},(0,O.createElement)("div",{...e,onKeyDown:function(n){e.onKeyDown&&e.onKeyDown(n);for(const e of t)e(n)}}))}(window.wp=window.wp||{}).keyboardShortcuts=t}();
//# sourceMappingURL=index.min.js.map