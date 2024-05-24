(function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["accessibleAutocomplete"]=t():e["accessibleAutocomplete"]=t()})(window,function(){return [function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return r}),n.d(t,"createElement",function(){return r}),n.d(t,"cloneElement",function(){return i}),n.d(t,"Component",function(){return g}),n.d(t,"render",function(){return _}),n.d(t,"rerender",function(){return f}),n.d(t,"options",function(){return E});var s=function s(){},E={},l=[],c=[];function r(e,t){var n,r,o,i,u=c;for(i=arguments.length;2<i--;)l.push(arguments[i]);for(t&&null!=t.children&&(l.length||l.push(t.children),delete t.children);l.length;)if((r=l.pop())&&r.pop!==undefined)for(i=r.length;i--;)l.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?u[u.length-1]+=r:u===c?u=[r]:u.push(r),n=o;var a=new s;return a.nodeName=e,a.children=u,a.attributes=null==t?undefined:t,a.key=null==t?undefined:t.key,E.vnode!==undefined&&E.vnode(a),a}ar o="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;ar p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];ction I(e){var t=M({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n!==undefined)for(var r in n)t[r]===undefined&&(t[r]=n[r]);return t} A=[],P=0,j=!1,L=!1;unction B(e,t,n,r,o,i){P++||(j=null!=o&&o.ownerSVGElement!==undefined,L=null!=e&&!("__preactattr_"in e));var u=D(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--P||(L=!1,i||T()),u}function D(e,t,n,r,o){var i=e,u=j;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&e.splitText!==undefined&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),F(e,!0))),i["__preactattr_"]=!0,i;var a=t.nodeName;if("function"==typeof a)return e,t,n,r);if(j="svg"===a||"foreignObject"!==a&&j,a=String(a),(!e||!N(e,a))&&(i=a,j),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),F(e,!0)}var s=i.firstChild,l=i["__preactattr_"],c=t.children;if(null==l){l=i["__preactattr_"]={};for(var p=i.attributes,f=p.length;f--;)l[p[f].name]=p[f].value}return!L&&c&&1===c.length&&"string"==typeof c[0]&&null!=s&&s.splitText!==undefined&&null==s.nextSibling?s.nodeValue!=c[0]&&(s.nodeValue=c[0]):(c&&c.length||null!=s)&&function S(e,t,n,r,o){var i,u,a,s,l,c=e.childNodes,p=[],f={},d=0,h=0,m=c.length,v=0,y=t?t.length:0;if(0!==m)for(var g=0;g<m;g++){var _=c[g],b=_["__preactattr_"],w=y&&b?_._component?_._component.__key:b.key:null;null!=w?(d++,f[w]=_):(b||(_.splitText!==undefined?!o||_.nodeValue.trim():o))&&(p[v++]=_)}if(0!==y)for(var g=0;g<y;g++){s=t[g],l=null;var w=s.key;if(null!=w)d&&f[w]!==undefined&&(l=f[w],f[w]=undefined,d--);else if(h<v)for(i=h;i<v;i++)if(p[i]!==undefined&&(x=u=p[i],C=o,"string"==typeof(O=s)||"number"==typeof O?x.splitText!==undefined:"string"==typeof O.nodeName?!x._componentConstructor&&N(x,O.nodeName):C||x._componentConstructor===O.nodeName)){l=u,p[i]=undefined,i===v-1&&v--,i===h&&h++;break}l=D(l,s,n,r),a=c[g],l&&l!==e&&l!==a&&(null==a?e.appendChild(l):l===a.nextSibling?k(a):e.insertBefore(l,a))}var x,O,C;if(d)for(var g in f)f[g]!==undefined&&F(f[g],!1);for(;h<=v;)(l=p[v--])!==undefined&&F(l,!1)}(i,c,n,r,L||null!=l.dangerouslySetInnerHTML),function m(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=undefined,j);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],j)}(i,t.attributes,l),j=u,i}function F(e,t){var n=e._component;n?q(n):(null!=e["__preactattr_"]&&e["__preactattr_"].ref&&e["__preactattr_"].ref(null),!1!==t&&null!=e["__preactattr_"]||k(e),h(e))}ar m=[];nction U(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,"undefined"==typeof e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?a(e):V(e,1,o)),e.__ref&&e.__ref(e))}function V(e,t,n,r){if(!e._disable){var o,i,u,a=e.props,s=e.state,l=e.context,c=e.prevProps||a,p=e.prevState||s,f=e.prevContext||l,d=e.base,h=e.nextBase,m=d||h,v=e._component,y=!1,g=f;if(e.constructor.getDerivedStateFromProps&&(s=M(M({},s),e.constructor.getDerivedStateFromProps(a,s)),e.state=s),d&&(e.props=c,e.state=p,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,s,l)?y=!0:e.componentWillUpdate&&e.componentWillUpdate(a,s,l),e.props=a,e.state=s,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!y){o=e.render(a,s,l),e.getChildContext&&(l=M(M({},l),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(g=e.getSnapshotBeforeUpdate(c,p));var _,b,w=o&&o.nodeName;if("function"==typeof w){var x=I(o);(i=v)&&i.constructor===w&&x.key==i.__key?U(i,x,1,l,!1):(_=i,e._component=i=R(w,x,l),i.nextBase=i.nextBase||h,i._parentComponent=e,U(i,x,0,l,!1),V(i,1,n,!0)),b=i.base}else u=m,(_=v)&&(u=e._component=null),(m||1===t)&&(u&&(u._component=null),b=function B(t,n,r,o,i,u){P++||(j=null!=i&&i.ownerSVGElement!==undefined,L=null!=t&&!("__preactattr_"in t));var a=D(t,n,r,o,u);return i&&a.parentNode!==i&&i.appendChild(a),--P||(L=!1,u||T()),a}(u,o,l,n||!d,m&&m.parentNode,!0));if(m&&b!==m&&i!==v){var O=m.parentNode;O&&b!==O&&(O.replaceChild(b,m),_||(m._component=null,F(m,!1)))}if(_&&q(_),(e.base=b)&&!r){for(var C=e,S=e;S=S._parentComponent;)(C=S).base=b;b._component=C,b._componentConstructor=C.constructor}}for(!d||n?A.unshift(e):y||(e.componentDidUpdate&&e.componentDidUpdate(c,p,g),E.afterUpdate&&E.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);P||r||T()}}function q(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?q(n):t&&(t["__preactattr_"]&&t["__preactattr_"].ref&&t["__preactattr_"].ref(null),k(e.nextBase=t),m.push(e),h(t)),e.__ref&&e.__ref(null)}g.prototype,{setState:forceUpdate:render:function _(){}});var b={h:r,createElement:r,cloneElement:i,Component:g,render:_,rerender:f,options:E};t["default"]=b},},function(e,t,n){"use strict";var r=n(0),o=n(32)(1);r(r.P+r.F*!n(13)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var r=n(0);r(r.S,"Object",{create:n(52)})},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(14),n(30),n(31),n(35),n(49),n(50);var r=n(5),}(n(51));function i(e){if(!e.element)throw new Error("element is not defined");if(!e.id)throw new Error("id is not defined");if(!e.source)throw new Error("source is not defined");Array.isArray(e.source)&&(e.source=u(e.source)),(0,r.render)((0,r.createElement)(o["default"],e),e.element)}var u=function u(n){return function(t,e){e(n.filte}))}};i.enhanceSelectElement=function(n){if(!n.selectElement)throw new Error("selectElement is not defined");if(!n.source){var e=[].filter.call(n.selectElement.options,function(e){return e.value||n.preserveNullOptions});n.source=e.ma})}if(n.onConfirm=n.onConfirm||function(t){var e=[].filter.call(n.selectElement.option})[0];e&&(e.selected=!0)},n.selectElement.value||n.defaultValue===undefined){var t=n.selectElement.options[n.selectElement.options.selectedIndex];n.defaultValue=t.textContent||t.innerText}n.name===undefined&&(n.name=""),n.id===undefined&&(n.selectElement.id===undefined?n.id="":n.id=n.selectElement.id),n.autoselect===undefined&&(n.autoselect=!0);var r=document.createElement("div");n.selectElement.parentNode.insertBefore(r,n.selectElement),i(Object.assign({},n,{element:r})),n.selectElement.style.display="none",n.selectElement.id=n.selectElement.id+"-select"};var a=i;t["default"]=a},function(e,t,n){var r=n(0);r(r.S,"Array",{isArray:n(33)})},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(14),n(36),n(30),n(31),n(35),n(55),n(58);var $=n(5),J=o(n(60)),r=o(n(61)ar u={13:"enter",27:"escape",32:"space",38:"up",40:"down"}var a=function(n}(function r(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,n);var t=e.prototype;return t.isQueryAnOptio},t.componentDidMount=function(){this.pollInputElement()},t.componentWillUnmoun},t.pollInputElemen},t.getDirectInputChange},t.componentDidUpdat},t.hasAutoselec},t.templateInputValue=function(e){var t=this.props.templates&&this.props.templates.inputValue;return t?t(e):e},t.templateSuggestio},t.handleComponentBlu},t.handleListMouseLeav},t.handleOptionBlur=function(e,t){var n=this.state,r=n.focused,o=n.menuOpen,i=n.options,u=n.selected,a=null===e.relatedTarget,s=e.relatedTarget===this.elementReferences[-1],l=r!==t&&-1!==r;if(!l&&a||!(l||s)){var c=o&&Y();this.handleComponentBlur({menuOpen:c,query:this.templateInputValue(i[u])})}},t.handleInputBlur=function(e){var t=this.state,n=t.focused,r=t.menuOpen,o=t.options,i=t.query,u=t.selected;if(!(-1!==n)){var a=r&&Y(),s=Y()?i:this.templateInputValue(o[u]);this.handleComponentBlur({menuOpen:a,query:s})}},t.handleInputChang},t.handleInputClick=function(e){this.handleInputChange(e)},t.handleInputFocu},t.handleOptionFocu},t.handleOptionMouseEnte},t.handleOptionClic},t.handleOptionMouseDown=function(e){e.preventDefault()},t.handleUpArro},t.handleDownArro},t.handleSpac},t.handleEnte},t.handlePrintableKe},t.handleKeyDown=function(e){switch(u[e.keyCode]){case"up":this.handleUpArrow(e);break;case"down":this.handleDownArrow(e);break;case"space":this.handleSpace(e);break;case"enter":this.handleEnter(e);break;case"escape":this.handleComponentBlur({query:this.state.query});break;default:(function t(e){return 47<e&&e<58||32===e||8===e||64<e&&e<91||95<e&&e<112||185<e&&e<193||218<e&&e<223})(e.keyCode)&&this.handlePrintableKey(e)}},t.render=function(){var e,i=this,t=this.props,n=t.cssNamespace,r=t.displayMenu,u=t.id,o=t.minLength,a=t.name,s=t.placeholder,l=t.required,c=t.showAllValues,p=t.tNoResults,f=t.tStatusQueryTooShort,d=t.tStatusNoResults,h=t.tStatusSelectedOption,m=t.tStatusResults,v=t.tAssistiveHint,y=t.dropdownArrow,g=this.state,_=g.focused,b=g.hovered,w=g.menuOpen,x=g.options,O=g.query,C=g.selected,S=g.ariaHint,E=g.validChoiceMade,M=this.hasAutoselect(),N=-1===_,I=0===x.length,k=0!==O.length,A=O.length>=o,P=this.props.showNoOptionsFound&&N&&I&&k&&A,j=n+"__wrapper",L=n+"__input",T=null!==_?" "+L+"--focused":"",B=this.props.showAllValues?" "+L+"--show-all-values":" "+L+"--default",D=n+"__dropdown-arrow-down",F=-1!==_&&null!==_,R=n+"__menu",U=R+"--"+r,V=R+"--"+(w||P?"visible":"hidden"),q=n+"__option",W=n+"__hint",H=this.templateInputValue(x[C]),K=H&&0===H.toLowerCase().indexOf(O.toLowerCase())&&M?O+H.substr(O.length):"",Q=u+"__assistiveHint",z=S?{"aria-describedby":Q}:null;return c&&"string"==typeof(e=y({className:D}))&&(e=(0,$.createElement)("div",{className:n+"__dropdown-arrow-down-wrapper",dangerouslySetInnerHTML:{__html:e}})),(0,$.createElement)("div",{className:j,onKeyDown:this.handleKeyDown},(0,$.createElement)(J["default"],{id:u,length:x.length,queryLength:O.length,minQueryLength:o,selectedOption:this.templateInputValue(x[C]),selectedOptionIndex:C,validChoiceMade:E,isInFocus:null!==this.state.focused,tQueryTooShort:f,tNoResults:d,tSelectedOption:h,tResults:m}),K&&(0,$.createElement)("span",null,(0,$.createElement)("input",{className:W,readonly:!0,tabIndex:"-1",value:K})),(0,$.createElement)("input",X({"aria-expanded":w?"true":"false","aria-activedescendant":!!F&&u+"__option--"+_,"aria-owns":u+"__listbox","aria-autocomplete":this.hasAutoselect()?"both":"list"},z,{autoComplete:"off",className:""+L+T+B,id:u,onClick:function(e){return i.handleInputClick(e)},onBlur:this.handleInputBlur}(this.handleInputChange),{onFocus:this.handleInputFocus,name:a,placeholder:s,re},type:"text",role:"combobox",required:l,value:O})),e,(0,$.createElement)("ul",{className:R+" "+U+" "+V,onMouseLeave:function(e){return i.handleListMouseLeave(e)},id:u+"__listbox",role:"listbox"},x.ma}),P&&(0,$.createElement)("li",{className:q+" "+q+"--no-results"},p())),(0,$.createElement)("span",{id:Q,style:{display:"none"}},v()))},e}($.Component);(t["default"]=a).defaultProps={autoselect:!1,cssNamespace:"autocomplete",defaultValue:"",displayMenu:"inline",minLength:0,name:"input-autocomplete",placeholder:"",onConfirm:function(){},confirmOnBlur:!0,showNoOptionsFound:!0,showAllValues:!1,required:!1,tNoResults:function(){return"No results found"},tAssistiveHint:function(){return"When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures."},dropdownArrow:r["default"]}},function(e,t,n){n(59)("match",1,function(r,o,e){retur},e]})},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(36);var _=n(5);var r=function r(o,i,u){var a;return function(){var e=this,t=arguments,},r=u&&!a;clearTimeout(a),a=setTimeout(n,i),r&&o.apply(e,t)}},o=function(o})(e,o);var t=e.prototype;return t.componentWillMount=function(){var e=this;this.debounceStatusUpdate=},1400)},t.componentWillReceiveProps=function(e){e.queryLength;this.setState({debounced:!1})},t.render=function(){var e=this.props,t=e.id,n=e.length,r=e.queryLength,o=e.minQueryLength,i=e.selectedOption,u=e.selectedOptionIndex,a=e.tQueryTooShort,s=e.tNoResults,l=e.tSelectedOption,c=e.tResults,p=this.state,f=p.bump,d=p.debounced,h=p.silenced,m=r<o,v=0===n,y=i?l(i,n,u):"",g=null;return g=m?a(o):v?s():c(n,y),this.debounceStatusUpdate(),(0,_.createElement)("div",{style:{border:"0",clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginRight:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}},(0,_.createElement)("div",{id:t+"__status--A",role:"status","aria-atomic":"true","aria-live":"polite"},!h&&d&&f?g:""),(0,_.createElement)("div",{id:t+"__status--B",role:"status","aria-atomic":"true","aria-live":"polite"},h||!d||f?"":g))},e}(_.Component);(t["default"]=o).defaultProps={tQueryTooShor},tNoResults:function(){return"No search results"},tSelectedOptio},tResult}}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=n(5),o=function i(e){var t=e.className;return(0,r.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t,focusable:"false"},(0,r.createElement)("g",{stroke:"none",fill:"none","fill-rule":"evenodd"},(0,r.createElement)("polygon",{fill:"#000000",points:"0 0 22 0 11 17"})))};t["default"]=o}])["default"]});
//# sourceMappingURL=accessible-autocomplete.min.js.map
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */}(window}(window,document);
(function( w ) {
    "use strict";

    /**
     * Utilities
     */
    var escapeRegExp = function( string ) {
        return string.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
    };

    /**
     * Default options
     * Redefine this value to replace some of the options
     * (ex: w.picturefillBackgroundOptions.selector = "custom";)
     */
    w.picturefillBackgroundOptions = {
        selector: "picturefill-background",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%"
    };

    /**
     * Apply a responsive background image
     */
    w.picturefillBackground = function() {
        var picturefills = w.document.getElementsByClassName( w.picturefillBackgroundOptions.selector );

        for ( var i = 0, il = picturefills.length; i < il; i++ ) {
            var sources = picturefills[ i ].getElementsByTagName( "span" ),
                matches = [];

            for( var j = 0, jl = sources.length; j < jl; j++ ) {
                var src   = sources[ j ].getAttribute( "data-src" ),
                    media = sources[ j ].getAttribute( "data-media" );

                if ( src && (!media || ( w.matchMedia && w.matchMedia( media ).matches )) ) {
                    matches.push( src );
                }
            }

            if ( matches.length ) {
                src = matches.pop();
                var exp = new RegExp( escapeRegExp( src ) );

                // Update target element's background image, if necessary
                if ( !exp.test( picturefills[ i ].style.backgroundImage ) ) {
                    picturefills[i].style.backgroundImage = "url('" + src + "')";
                    picturefills[i].style.backgroundSize = w.picturefillBackgroundOptions.backgroundSize;
                    picturefills[i].style.backgroundRepeat = w.picturefillBackgroundOptions.backgroundRepeat;
                    picturefills[i].style.backgroundPosition = w.picturefillBackgroundOptions.backgroundPosition;
                }
            }
        }
    };

    /**
     * Run on resize and domready (w.load as a fallback)
     */
    if ( w.addEventListener ) {
        w.addEventListener( "load", w.picturefillBackground, false );
        w.addEventListener( "resize", w.picturefillBackground, false );
        w.addEventListener( "DOMContentLoaded"}, false );
    }
    else if ( w.attachEvent ) {
        w.attachEvent( "onload", w.picturefillBackground );
    }

}( window ));

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);
}}}

	var DateArray =})();


	// Picker object

	var Datepicker };

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents},
		_buildEvents},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger},

		show},

		hide},

		remove},

		_utc_to_local},
		_local_to_utc},
		_zero_time},
		_zero_utc_time},

		getDates},

		getUTCDates},

		getDate},

		getUTCDate},

		setDates},

		setUTCDates},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue},

		getFormattedDate},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled},

		place},

		_allow_update: true,
		update},

		fillDow},

		fillMonths},

		setRange},

		getClassNames},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				var calDay = + prevMonth.getUTCMonth() + '-' + prevMonth.getUTCDate() + '-' + prevMonth.getUTCFullYear();
				html.push('<td id="CalendarDay__'+prevMonth.getUTCMonth()+'__'+prevMonth.getUTCDate()+'__'+prevMonth.getUTCFullYear()+'" data-day="'+calDay+'" class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '><div class="EventCalendar__Calendar__DayContainer">'+ prevMonth.getUTCDate() + '</div> <div class="EventCalendar__Calendar__Marker"></div> </td>');

				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows},

		click},

		_toggle_multidate},

		_setDate},

		moveMonth},

		moveYear},

		dateWithinRange},

		keydown},

		showMode}
	};

	var DateRangePicker };
	DateRangePicker.prototype = {
		updateDates},
		updateRanges},
		dateUpdated},
		remove}
	};
}
}

	var old = $.fn.datepicker;
	$.fn.datepicker };

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear},
		getDaysInMonth},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat},
		parseDate},
		formatDate},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="fa fa-caret-left"></i></th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next"><i class="fa fa-caret-right"></i></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict };


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

/**
 * Bootstrap Multiselect (http://davidstutz.de/bootstrap-multiselect/)
 *
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2021 David Stutz
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2021 David Stutz
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */}(thi});
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.13 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2018, NoÃ«l Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**})}(jQuery);
/*!
 * @preserve
 * jquery.scrolldepth.js | v1.2.0
 * Copyright (c) 2020 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */y)}(function(f){"use strict";var i,a,c,p,g,e={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},m=f(window),d=[],D=!1,h=0;return f.scrollDepth=function(u){var s=+new Date;function v(e,n,t,o){var r=u.trackerName?u.trackerName+".send":"send";g?(g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventValue:1,eventNonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:l(h=t),eventValue:1,eventNonInteraction:u.nonInteraction}),u.userTiming&&3<arguments.length&&g({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventTiming:o})):p?(gtag("event",e,{event_category:"Scroll Depth",event_label:n,value:1,non_interaction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,gtag("event","Pixel Depth",{event_category:"Scroll Depth",event_label:l(t),value:1,non_interaction:u.nonInteraction})),u.userTiming&&3<arguments.length&&gtag("event","timing_complete",{event_category:"Scroll Depth",name:e,event_label:n,value:o})):(i&&(window[c](r,"event","Scroll Depth",e,n,1,{nonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,window[c](r,"event","Scroll Depth","Pixel Depth",l(t),1,{nonInteraction:u.nonInteraction})),u.userTiming&&3<arguments.length&&window[c](r,"timing","Scroll Depth",e,o,n)),a&&(_gaq.push(["_trackEvent","Scroll Depth",e,n,1,u.nonInteraction]),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",l(t),1,u.nonInteraction])),u.userTiming&&3<arguments.length&&_gaq.push(["_trackTiming","Scroll Depth",e,o,n,100]()}function i)}var o,r,l,i,a,c,p;D=!0,m.on("scroll.scrollDepth",(o=function(){var e,n,t,o,r,l,i,a=f(document).height(),c=window.innerHeight?window.innerHeight:m.height(),p=m.scrollTop()+c,g=(e=a,{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}),h=new Date-s;if(d.length>=u.elements.length+(u.percentage?4:0))return m.off("scroll.scrollDepth"),void(D=!1);u.elements&&(n=u.elements,t=p,o=h,f.eac))})),u.percentage&&(r=g,l=p,i=h,f.each(r,function(e,n){-1===f.inArray(e,d)&&n<=l&&(v("Percentage",e,l,i),d.push(e))}))},r=500,c=null,p=0,function(){var e=new Date,n=r-(e-(p=p||e));return l=this,i=arguments,n<=0?(clearTimeout(c),c=null,p=e,a=o.apply(l,i)):c=c||setTimeout(t,n),a}))}u=f.extend({},e,u),f(document).height()<u.minHeight||(u.gaGlobal?(i=!0,c=u.gaGlobal):"function"==typeof gtag?(p=!0,c="gtag"):"function"==typeof ga?(i=!0,c="ga"):"function"==typeof __gaTracker&&(i=!0,c="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(a=!0),"function"==typeof u.eventHandler?g=u.eventHandler:void 0===window[u.dataLayer]||"function"!=typeof window[u.dataLayer].push||u.gtmOverride|e)}),f.scrollDepth.re()},f.scrollDepth.addEleme))},f.scrollDepth.removeEleme})},n())},f.scrollDepth});
/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */
=c});
/**
 * Swiper 8.3.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 26, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(th,V}));
//# sourceMappingURL=swiper-bundle.min.js.map
// DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

	};
});

(function($){

  $.fn.twentyt);
  };

})(jQuery);

/**
 * @license
 * Video.js 7.21.4 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>js=t()}(this,function(){"use strict";for(var e,u="7.21.4"),1),!0)},l={prefixed:!0},t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror","fullscreen"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"]],r=t[0],s=0;s<t.length;s++)if(t[s][1]in document){e=t[s];break}if(e){for(var o=0;o<e.length;o++)l[r[o]]=e[o];l.prefixed=e[0]!==r[0]}varle,i)},t)},n}("VIDEOJS"),p=h.createLogger,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?xports}orts=t}),y=Object.prototype.toS}),i)}function T(e){return!!e&&"object"==tt]:""}var E=window.navigator&&window.navigator.userAgent||"",k=/AppleWebKit\/([\d.]+)/i.exec(E),C=k?parseFloat(k.pop()):null,I=/iPod/i.test(E),x=(jt=E.match(/OS (\d+)_/i))&&jt[1]?jt[1]:null,A=/Android/i.te||null}(),L=A&&P<5&&C<537,O=/Firefox/i.test(E),D=/Edg/i.test(E),R=!D&&(/Chrome/i.test(E)||/CriOS/i.test(E)),M=(zt=E.match(/(Chrome|CriOS)\/(\d+)/))&&zt[2]?parseFloat(zt[2]):null,N=Xt=!(Xt=(Xt=/MSIE\s(\d+)\.\d/.exec(E))&&parseFloat(Xt[1]))&&/Trident\/7.0/i.test(E)&&/rv:11.0/.test(E)?11:Xt,U=/Safari/i.test(E)&&!R&&!A&&!D,B=/Windows/i.test(E),F=Boolean(X()&&("ontouchstart"in window||window.navigator.maxTouchPoints||window.DocumentTouch&&window.document instanceof window.DocumentTouch)),j=/iPad/i.test(E)||U&&F&&!/iPhone/i.test(E),H=/iPhone/i.test(E)&&!j,V=H||j||I,q=(U||V)&&!R,W=Object.freeze({__proto__:null,IS_IPOD:I,IOS_VERSION:x,IS_ANDROID:A,ANDROID_VERSION:P,IS_NATIVE_ANDROID:L,IS_FIREFOX:O,IS_EDGE:D,IS_CHROME:R,CHROME_VERSION:M,IE_VERSION:N,IS_SAFARI:U,IS_WINDOWS:B,TOUCH_ENABLED:F,IS_IPAD:j,IS_IPHONE:H,IS_IOS:V,IS_ANY_SAFment}function K(e){return T(e)&&1===e.nySelector"),we=Q("querySelectorAll"),Se=Object.freeze({__proto__:null,isReal:X,isEl:K,isInFrame:Y,createEl:$,textContent:J,prependTo:Z,hasClass:ee,addClass:te,removeClass:ie,toggleClass:ne,setAttributes:re,getAttributes:ae,getAttribute:se,setAttribute:oe,removeAttribute:ue,blockTextSelection:le,unblockTextSelection:de,getBoundingClientRect:ce,findPosition:he,getPointerPosition:pe,isTextNode:fe,emptyEl:me,normalizeContent:ge,appendContent:ye,insertContent:ve,isSingleLeftClick:_e,$:Te,$$:we}),E",Ie)}X()&&("complete"===document.readyState?Ie():window.addEventListener("loaent=t}var Pe=3;window.WeakMa])},e}());var Le,Oe=new(window.WeakMap?Weak!0,eurn Le},Ue=["touchstart","toucfunction ze(){}var Xe,Ke=Object.freeze({__proto__:null,fixEvent:Me,on:Be,off:Fe,trigger:je,one:He,any:Ve});ze.prototype.allowedEvents_={},ze.prototype.addEventListener=ze.prototype.on=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},Be(this,e,t),this.addEventListener=i},ze.prototype.removeEventListener=ze.protots,e,t)},ze.prototype.one=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},He(this,e,t),this.addEventListener=i},ze.prototener=i},ze.prototype.dispatchEvent=ze.prototype.his,e)},ze.prototype.queuet[e]})}e",s))},one:function(){for(var r=this,e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var n=et(this,t,"one"),a=n.isTargetingSelf,s=n.target,o=n.type,u=n.listener;a?tt(s,"one",o,u):((a=function e(){r.off(s,o,e);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];u.apply(null,i)}).guid=u.guid,tt(s,"one",o,a,o,a",i)))},_0)}),e}var at={state:{},sdged),e}function ot(e){return"string"!=typeof e?e:e.replace(/./,function(e){return e.toLowerCase()})}function ut(e){return"string"!=typeof e?e:e.replace(/./,function(e){return e.toUpperC})}),i}var dt=windis)},e}(),ct=windis)},e}or(s in r)n[s]=r[s]});ht.code,ht.codes,ht.aliases,ht.ns.components_[e]},s}();pt.prototype.supportsRaf_="function"==typeof window.requestAnimationFrame&&"function"==typeof window.cancelAnimationFrame,pt.registerComponent("Cn callethis.code]||"")}bt.prototype.code=0,bt.prototype.message="",bt.prototype.status=null,bt.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],bt.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Tt=0;Tt<bt.errorTypes.length;Tt++)bt[bt.errorTypes[Tt]]=Tt,bt.prototype[bt.errortextdex})}),i.textTracks()},xt="tenteditable")})},e}(pt);At.prototype.options_={pauseOnOpen:!0,temporary:!0},pt.registerComponent("ModalD;break}}return t},e}(ze);for(Pt in Lt.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack",labelchange:"labelchange"},Lt.prototype.allowedEvents_)Lt.prototype["on"+Pt]=null;function Ot(e,t){for(var i=0;i<e.length;i++)Object.keys(e[i]).length&&t.id!==e[i].iprledChantedChaanguagelice(;break}}return t},t}(),Vt={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},qt={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},Wt={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Gt={disabled:"disabled",hidden:"hidden",,i}return mt(e,a),e}(ze),zt=Object.freeze({__proto__:null,parseUrl:Rt,getAbsoluteURL:Mt,getFileExtension:Nt,isCrossOrigin:Ut}),Xt="undefined"!=typeof window?window:"undefined"!=typeof f?f:"undefined"!=typeof s|e===window.prompt)},Qt=Object.prototype.toSe})}else n(null,i)}};
/**
   * @license
   * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
   * Copyright (c) 2014 David BjÃ¶rklund
   * Available under the MIT license
   * <https://github.com/kesla/parse-headers/blob/master/L(t):n[i]=[n),l.send(h||null),l}ei.XMLHttpRequest=Kt.XMLHttpRequest||function(){},ei.XDomainRequest="withCredentials"in new ei.XMLHttpRequest?ei.XMLHttpReq<e.length;i++)t(e[i])}(["get","put","post","p.toUpperCase().src)his.cues_);break}}},e}(C);ri.prototype.allowedEvents_={cu!0,e}d),e}}),i}return mt(e,r),e}(ze);j.prototype.allowedEvents_={load:"load"},j.NONE=0,j.LOADING=1,j.LOADED=2,j.ERROR=3;var ai={audio:{ListClass:Bt,TrackClass:x,capitalName:"Audio"},video:{ListClass:Ft,TrackClass:U,capitalName:"Video"},text:{ListClass:k,TrackClass:ri,capitalName:"Text"}};OivateName=e+"Tracks_"});var si={remoteText:{ListClass:k,TrackClass:ri,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:jt,TrackClass:j,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},oi=g({},ai,si);si.names=Object.keys(si),ai.names=Object.keys(ai),oi.names=[].concat(si.names).concat(ai.names);var ui="undefined"!=typeof f?f:"undefined"!=typeof window?window:{},li="undefined"!=typeof document?document:(li=ui["__GLOBAL_DOCUMENT_CACHE@4"])||(ui["__GLOBAL_DOCUMENT_CACHE@4"]={}),Xci.prototype=e,"},t.align)}(t,e)}((hi.prototype=di(Error.prototype)).constructor=hi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stampt||(s(e)?this.values[e]:t},has:function(e){return{this.seset(e,pa)&&(this.set(e,t),!0)}};var yi=Xt.createElement&&Xt.createElement("textarea"),vi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},_i={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},bi={v:"title",lang:.parentNode);return h}var Si=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,1266turn"rtl";retuCSSCompatValues(o))}function Ai(){}kii)&&(t.style[i]=e[i])},kit){return 0===e?0:e+t},(Ci.prototype=di(ki.prototype)).constructoop-=t,this.bottom-=t}}om&&this.bottom>e.top},Iit]))return!0;return!&&this.right<=e.right},Ii.prototypthis.bottom>e.bottom}},Ii.prototyis.height*this.width)},Ii.protoght,width:this.width}},I|t),width:e.widthodeURIComponent(e))}}},urn e&&t?wi(e,tld(r[t].dis"),this.regionList=[]}).prototyhis.on:"BADCush&&t.onflush(),this}};var Pi=Ai,Li={"":1,lr:1,rl:1},Oi={start:1,center:1,end:1,left:1,right:1,auto:1,"line-l.displayState=void 0}Ri.ree(window,this.text)};var ));!1==},Kt.VTTCue||e.shim()});Fi.WebVTT,Fi.VTTCideojs[e]):void 0)},i,this[t.privateName]}}),ji.prototype.featuresVolumeControl=!0,ji.prototype.featuresMuteControl=!0,ji.prototype.featuresFullscreenResize=!1,ji.prototype.featuresPlaybackRate=!1,ji.prototype.featuresProgressEvents=!1,ji.prototype.featuresSourceset=!1,ji.prototype.featuresTimeupdateEvents=!1,ji.prototype.featuresNativeTextTracks=!1,ji.prototype.featuresVideoFrameCallback=!1sourceHandler_=null)}},pt.registerComponent("Tech",ji),ji.registerTech("Tech",ji),ji.defaultTechOrder_=[]t](n,i)}}(e,i,r,n),r}var zi={buffered:1,currentTime:1,duration:1,muted:1,played:1,paused:1,seekable:1,volume:1,ended:1},Xi={setCurrentTime:1,setMuted:1,setVolume:.trim()?[en(e)]:[]}var Zi={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",m4a:"audio/mp4",mp3:"audio/mpeg",aac:"audio/aac",caf:"audio/x-caf",flac:"audio/flac",oga:"audio/ogg",wav:"audio/wav",m3u8:"application/x-mpegURL",mpd:"application/dash+xml",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",png:"image/png",svg:"image/svg+xern i}return mt(e,u),e}(pt);pt.registerComponyDown.call(this,e)},e}(pt);pt.registerComponent("ClickableComponent",C),pt.registerCs.player_.pause())},e}(C));var tn="#222",nn={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", m]=i}catch(e){return}}pt.registerComponeDisplayState(s)}}},e}(pt)),pt.registerCompt.appendChilyDown.call(this,e)},e}(C);pt.registerComthis.mouseused_=!0},e}(sn);Bt.prototype.controlText_="Play Video",pt.registerComponent("BigPlayButton",Bt),pt.registerCyDown.ca.handleSeeked(e)})},e}(sn);Ft.prototype.controlText_="Play",pt.registerComp":")+(i=inContent=function(e){},e}(pt);k.prototype.labelText_="Time",k.prototype.controlText_="Time",pt.registerCompos.updateTextNode_(t)},t}(k);jt.prototype.labelText_="Current Time",jt.prototype.controlText_="Current Time",pt.registerComponent("Cs.updateTextNode_(t)},e}(k);j.prototype.labelText_="Duration",j.prototype.controlText_="Duration",pt.registerComponent("DurationDisplay",j),pt.registe),e.app.updateTextNode_(t))},e}(k);f.prototype.labelText_="Remaining Time",f.prototype.controlText_="Remaining Time",pt.registerComponent("RemainingTimeDisplay",f),pt.registehis.showype.dispose.call(this)},e}(sn);ui.prototype.controlText_="Seek to live, currently playing live",pt.registerMajs-slider-horizontal")},e}(pt);pt.regi100,0,100).toFixed(2)+"%"}pt.registerC]);n.length=t.length})},e}(pt)),pt.regisupdate(n),n.updateTime(e,t,i))},e}(pt);Xt.prototype.options_={children:[]},V||A||Xt.prototype.options_.children.push("timeTooltip"),pt.registerCompone.left=e.width*t+"px"})},e}(pt);I.prototype.options_={children:["timeTooltip"]},pt.registerComponenype.dispose.call(this)},e}(li);Bt.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},V||A||Bt.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),pt.registerusedownAndTouchstart()},e}(pt);Ft.prototype.options_={children:["seekBar"]},pt.registerComponenuestPictureInPicture()},e}(sn);jt.prototype.controlText_="Picture-in-Picture",pt.registerComponent("Picr_.requestFullscreen()},e}(sn);j.prototype.controlText_="Fullscreen",pt.registerComponent("FullscreenToggle",j);pt.regisvjs-control-text"})),e},e}(pt)),pt.registerCompn.toFix.left=e.width*t+"px"})},e}(pt);k.prototype.options_={children:["volumeLevelTooltip"]},pt.registerComponent("Mouayer_.lastVolume_(t)})},e}(li);f.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},V||A||f.prototype.options_.children.splice(0,0,"mouseVolumeLevelDisplay"),f.prototype.playerEvent="volumechange",pt.registerCBar.handleMouseMove(e)},e}(pt);ui.prototype.options_={children:["volumeBar"]},pt.registerCompone&&this.controlText(e)},e}(sn);Xt.prototype.controlText_="Mute",pt.registerCo&this.handleMouseOut()},e}(pt);I.prototype.options_={children:["muteToggle","volumeControl"]},pt.registerComponeChild_=e].el_.focus())},e}(pt);pt.regiss.menuButton_.enable()},e}(pt);pt.registerCom",n)}),t}return mt(e,r),e}(Bt);pt.registerComponent("TrackButton",Ft);var pn=["Tab","Esc","Up",this.isSelected_=!1))},e}(C);pt.registerCompoype.dispose.call(this)},e}(jt);pt.registerComponent("TexLanguage={enabled:!1})},e}(fn);pt.registerComponent("O"),e.push(a))}return e},e}(Ft);pt.registerComponent("me(this.cue.startTime)},e}(jt);pt.registerComponent("Chr});e.push(r)}return e},e}(j);k.prototype.kind_="chapters",k.prototype.controlText_="Chapters",pt.registerComponperCSSClass.call(this)},e}(j);li.prototype.kind_="descriptions",li.prototype.controlText_="Descriptions",pt.registerComponent(perCSSClass.call(this)},e}(j);f.prototype.kind_="subtitles",f.prototype.controlText_="Subtitles",pt.registerComponent("TrackSettings").open()},e}(fn);pt.registerComponent("CaptieateItems.call(this,e)},e}(j);ui.prototype.kind_="captions",ui.prototype.controlText_="Captions",pt.registerComponent("lize("Captions")}))),t},e}(fn);pt.registerComponenteItems.call(this,e,vn)},e}(j);Xt.prototype.kinds_=["captions","subtitles"],Xt.prototype.controlText_="Subtitles",pt.registerComponent("ed(this.track.enabled)},e}(jt);pt.registerComponent(ectable:!1}))}return e},e}(Ft);I.prototype.controlText_="Audio Track",pt.registerComponent("AackRate()===this.rate)},e}(jt);bn.prototype.contentElType="button",pt.registerComponent("P().playbackRate()+"x")},e}(Bt);C.prototype.controlText_="Playback Rate",pt.registerComponent("PlateEl.call(this,e,t,i)},e}(pt);pt.registerComponent("Spacer",k),pt.registerCompos(),texcontrol-bar",dir:"ltr"})},t}(pt);li.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","seekToLive","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},"exitPictureInPicture"in document&&li.prototype.options_.children.splice(li.prototype.options_.children.length-1,0,"pictureInPictureToggle"),pt.registers.localize(e.message):""},e}(At);f.prototype.options_=g({},At.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),pt.registerComponent("ErrorDisplay",f);var Tn="vjs-text-track-settings",ui=["#000","Black"],j=["#00F","Blue"],Xt=["#0FF","Cyan"],Ft=["#0F0","Green"],I=["#F0F","Magenta"],jt=["#F00","Red"],Bt=["#FFF","White"],C=["#FF0","Yellow"],k=["1","Opaque"],li=["0.5","Semi-Transparent"],f=["0","Transparent"],wn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[ui,Bt,jt,Ft,j,C,I,Xt]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[k,li,f]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Bt,ui,jt,Ft,j,C,I,Xt]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.0rn"1.00"===e?null:Number(e)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[k,li]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Tran(e):e)&&"none"!==e)return e}wn.windowColor.options=wn.backgroundColor.options,pt.registerCt?t.focus():e&&e.focus()},e}(At)),pt.regisotype.dispose.call(this)},e}(pt));var En={trackingThreshold:20,liveTolerance:15};pt.regotypet.defineProperty(t,i,a)}var Pn,Ln=Object.definehis.call(this,i),this.innerHTML}}),On=Object.ribuributiming.navigationStartnglish",e.append||!Dn.TEST_VID.canPlayType)},Dn.canPlayType=function(e){return Dn.TEST_VID.canPturn Dn.canPlayType(}),!1):t}catch(e)ID.muted}catch(e){return!1backRate}catch(e){return!}catch(e){return!1}return!0}s=function(){return q||V&&R},Dn.supportsNativeVideoTracks=function(){return!(!Dn.TEST_VID||!Dn.TEST_VID.videoTracks)},||!Dn.TEST_VID.audioTracks)},Dn.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],[["featuresMuteControl","canMuteVolume"],["featuresPlaybackRate","canControlPlaybackRate"],["featuresSourceset","canOverrideAttributes"],["featuresNativeTextTracks","supportsNativeTextTracks"],["featuresNativeVideoTracks","supportsNativeVideoTracks"],["featuresNativeAudioTracks","supportsction(){return Dn[i]()},!0)}),Dn.prototype.featuresVolumeControl=Dn.canControlVolume(),Dn.prototype.movingMediaElementInDOM=!V,Dn.prototype.featuresFullscreenResize=!0,Dn.prototype.featuresProgressEvents=!0,Dn.prototype.featuresTimeupdateEvents=!0,Dn.prototype.featuresVideoFrameCallback=!(!Dn.TEST_VID||!Dn.TEST_VID.requestVideoFrameC)?"maybe":Pn.call(thisprototype.canPlayType=Pn),e},Dn.patchCanPlayTtry{e.load()}catch(e)try{e.load()}catch(e){}}()}},["muted","defaultMuted","autoplay","controls","||this.el_.hasAttribute(e)}}),["muted","defaultMuted","autoplay","his.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","disablePictureInPicture","played","networkState","readyState","videoWidth","videoHection(){return this.el_[e]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate","disablePictureInPic=function(e){this.el_[t]=e}}),["pion(){return this.el_[e]()}}),ji.withSourceHandlers(Dn),Dn.nativeSourceHandler={},Dn.natyType(e)}catch(e){return""}},Dn.nativeSayType("video/"+e)}return""},Dn.natition(e,t,i){t.setSrc(e.src)},Dn.nativeSourceHandler.dispose=function(){},Dn.registerSourceHandler(Dn.nativeSourceHandler),ji.registerTech("Html5",Dn);var Rn=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],Mn={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},Nn=["tiny","xsmall","small","medium","large","xlar(1):e;Un[e]="vjs-layout-"+t});var Bn={tiny:210,xsmall:320,small:425,medium:768,large:1("playbackrateschangeClass,this[t.privateName])}}),Fn.prototype.crossorigin=Fn.prototype.crossOrigin,Fn.players={};k=window.navigator;Fn.prototype.options_={techOrder:ji.defaultTechOrder_,html5:{},inactivityTimeout:2e3,playbackRates:[],liveui:!1,children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","liveTracker","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:k&&(k.languages&&k.languages[0]||k.userLanguage||k.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media.",normalizeAutoplay:!1,fullscreen:{options:{navigationUI:"hide"}},breakpoints:{},responsive:!1,audioOnlyMode:!1,audioPosterMode:!1},["ended","seeking","seekable","network(){return thn(){return this.trigger(e)}}),pt.registerComo__=t,e},n(e,t)}i.exports=n});function Hn(e)his){}))null,arguments)}n.exports=r}),Kn="plugin",e[Y;return e&&e.VERSION||""},i}();Jn.getPlugin=Vn,Jn.BASE_PLUGIN_NAME=Kn,Jn.registerPlugin(Kn,!this[Yn]&&!0===this[Ynn=functnfigurablfunction(e){return e(r)}),r}irr.hook=functapply(void 0,arguments)}}))},ir.removeHook=n,!0!==window.VIDEOJS_NO_DYNAMIC_STYLE&&X()&&((Qr=Te(".vjs-styles-defaults"))||(Qr=xe("vjs-styles-defaults"),(ar=Te("head"))&&ar.insertBefore(Qr,ar.firstChild),Ae(Qr,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: 56.25%\n      }\n    "))),Ce(1,ir),ir.VERSION=u,ir.options=Fn.prototype.options_,ir.getPlayers=function(){ret;if(e||t[i])returlayers[e]}).filter(Boolean)},ir.players=Fn.players,ir.getComponent=pt.getCoisterComponent.call(pt,e,t)},ir.getTech=ji.getTech,ir.registe[e]=Hi[e]||[],Hi[e].push(t)},Object.defineProperty(ir,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(ir.middleware,"TERMINATOR",{value:qi,writeable:!1,enumerable:!0}),ir.browser=W,prototype[i]=r[i]);return n},ir.mergeOptions=lt,ir.bind=qe,ir.registerPlugin=Jn.registerPlugin,ir.deregisterPlugin=Jad"),Jn.registerPlugin(e,t)},ir.getPlugins=Jn.getPlugins,ir.getPlugin=Jn.getPlugin,ir.getPluginVersion=Jn.geti)),ir.options.languages[e]},ir.log=h,ir.createLogger=p,ir.createTimeRange=ir.createTimeRanges=vt,ir.formatTime=ln,ir.setFormatTime=functionFormatTime=function(){un=on},ir.parseUrl=Rt,ir.isCrossOrigin=Ut,ir.EventTarget=ze,ir.on=Be,ir.one=He,ir.off=Fe,ir.trigger=je,ir.xhr=Jt,ir.TextTrack=ri,ir.AudioTrack=x,ir.VideoTrack=U,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContee[e].apply(null,arguments)}}),ir.computedStyle=S,ir.dom=Se,ir.url=zt,ir.defineLazyProperty=An,ir.addLanguage("en",{"Non-Fullscreen":ry+e.fragment}},e.exports=s}),rr="http://example.com",ar=function(){function e(){this.listeners={}}var t=e.prototype;return t.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},t.off=function(e,t){if(!this.listeners[e])return!1;t=this.listeners[e].indexOf(t);return this.listeners[e]=this.listeners[e].slice(0),this.listeners[e].splice(t,1),-1<t},t.trigger=function(e){var t=this.listeners[e];if(t)if(2===arguments.length)for(var i=t.length,n=0;n<i;++n)t[n].call(this,arguments[1]);else for(var r=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,r)},t.dispose=function(){this.listeners={}},t.pipe=function(t){this.on("data",funcuteURL(e,t)}
/*! @name m3u8-parser @version 4.8.0 @lis.buffer.substring(t+1)},e}(ar),eturn tseStream.addTagMapper(e)},e}(ar),xr={mp4:/^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,webm:/^(vp0?[89]|av0?1|opus|vorbis)/,ogg:/^(vp0?[89]|theora|flac|opus|vorbis)/,video:/^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,audio:/^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,text:/^(stpp.ttml.im1t)/,muxerVideo:/^(avc0?1)/,muxerAudio:/^(mp4a)/,muxerText:/a^/},Ar=["video","audio","text"],Pr=["Video","Audio","Text"],Lr="mp4a.40.2",Or=/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,Dr=/^application\/dash\+xml/i,Rr=vr,Mr=window.BigInt||Number,Nr=[Mr("0x1"),Mr("0x100"),Mr("0x10000"),Mr("0x1000000"),Mr("0x100000000"),Mr("0x10000000000"),Mr("0x1000000000000"),Mr("0x100000000000000"),Mr("0x1000000000000000eof t.freeze?t.freeze(e):e}var jr=Fr({HTML:"text/html",isHTML:function(e){return e===jr.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),Hr=Fr({HTML:"http://wction(e){return e===Hr.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.o(t,i)all(void 0,r,n,e))return r}},freeze:Fr,MIME_TYPE:jr,NAMESPACE:Hrect.keys(e.reduce(zr,{}))}function Kr(e,t){for(var i in e)Object.prototype.hasOwnProuctor!=e&&(n.constructor=e)}var Qr={},$r=Qr.ELEMENT_NODE=1,Jr=Qr.ATTRIBUTE_NODE=2,Zr=Qr.TEXT_NODE=3,ea=Qr.CDATA_SECTION_NODE=4,ta=Qr.ENTITY_REFERENCE_NODE=5,ia=(Qr.ENTITY_NODE=6,Qr.PROCESSING_INSTRUCTION_NODE=7),na=Qr.COMMENT_NODE=8,ra=Qr.DOCUMENT_NODE=9,aa=Qr.DOCUMENT_TYPE_NODE=10,sa=Qr.DOCUMENT_FRAGMENT_NODE=11,W=(Qr.NOTATION_NODE=12,{}),oa={};W.INDEX_SIZE_ERR=(oa[1]="Index size error",1),W.DOMSTRING_SIZE_ERR=(oa[2]="DOMString size error",2);var ua=W.HIERARCHY_REQUEST_ERR=(oa[3]="Hierarchy request error",3);W.WRONG_DOCUMENT_ERR=(oa[4]="Wrong document",4),W.INVALID_CHARACTER_ERR=(oa[5]="Invalid character",5),W.NO_DATA_ALLOWED_ERR=(oa[6]="No data allowed",6),W.NO_MODIFICATION_ALLOWED_ERR=(oa[7]="No modification allowed",7);var la=W.NOT_FOUND_ERR=(oa[8]="Not found",8);W.NOT_SUPPORTED_ERR=(oa[9]="Not supported",9);var da;W.INUSE_ATTRIBUTE_ERR=(osage=this.mess.length),Kr(te,i),i.ownerElement=null)}fa(e.ownerDocument,e),t}function Ia(e){return e&&e.nodeType===ba.DOCUMENT_TYPE_NODE}function xa(e){return e&&d=t.lastChild=null),t}function Na(){this._nsMap={}}function Ua(){}function Ba(){}function Fa(){}function ja(){}function Ha(){}function Va(){}function qa(){}function Wa(){}function Ga(){}function za(){}fnction Za(e,t,i){e[t]=i}W.INVALID_STATE_ERR=(oa[11]="Invalid state",11),W.SYNTAX_ERR=(oa[12]="Syntax error",12),W.INVALID_MODIFICATION_ERR=(oa[13]="Invalid modification",13),W.NAMESPACE_ERR=(oa[14]="Invalid namespace",14),W.INVALID_ACCESS_ERR=(oa[15]="Invalid access",15),ca.prototype=Error.prototype,Kr(W,ca)ion(e){ren],i,e,t);return i.join("")},filter:function(e){return Array.prototype.totype.indexOf.call(e){return fa(this),this[e]},Yr(pa,ha),ma.prototype={length:0,item:ha;if(i.nodeNams._ownerElements._ownerElement,his._ownerElement,his._ownerElemeURI==e)return n}return nulture:function(eNS(e,t),n.appendChiId=t||"",n.systemId=i||"",n}},ba.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:nullon(e,t){retur,Ra),t&&thisnction(e){ren this.insertBeturn nullownerDocumdata)):(e.nolementation.harn 0<this.attnt:t.parentNode}retnt:t.parentNode}ret null==this.lookupPrefix(e)}},Kr(Qr,ba),Kr(Qr,ba.prototype),Sa.prototype={nodeName:"#document",nodeType:ra,doctype:null,documentElemertBefore(i,entElement=nu)&&(this.doSibling;return ("id")==t)return i=e,!0(e)}))),i&&a.ptes=new ma)._ownerEleme=this,e.childNodes=new ha,e},createTextNode:function(e){var t=new Fa;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new ja;return t.ownerDocument=this,t.appendDment=this,t.appendData(e),t}et=e,i.nodeValueocalName=e,t.specifiedocument=this,t.ncalName=t,r._ownerlName=n[1]):i.localName=t,i}},Yr(Sa,ba),Sa.prototype.getElementsByTagName=(Na.prototyl!=this.getAtde(e);return e&&e.value||""},getAttributeNode:function(e){return this.attributes.g+t,this.setAttrithis.removeAownerDocument,t,e),e);var t},setAttributeNode:function(e){return this.attributes.setNamettributes.setNamedItremoveNamedItem(e.this.removeAttrhis.getAttribut(e,t);return t&+i,this.setAttributributes.getNamedItemNtagName!=n||i.push(e)})calName!=r||i.push(e)}),i})}}).getElementsByTagName,Sa.prototype.getElementsByTagNameNS=Na.prototype.getElementsByTagNameNS,Yr(Na,ba),Ua.prototype.nodeType=Jr,Yr(Ua,ba),Ba.prot this.data.data=e,this,t){this.rep(e){throw nt){this.repl=n+i+t,this.length=i.length}},Yr(Ba,ba),Fa.prototype={nodeName:"efore(t,this.nextSibling),t}},Yr(Fa,Ba),ja.prototype={nodeName:"#comment",nodeType:na},Yr(ja,Ba),Ha.prototype={nodeName:"#cdata-section",nodeType:ea},Yr(Ha,Ba),Va.prototype.nodeType=aa,Yr(Va,ba),qa.prototype.nodeType=12,Yr(qa,ba),Wa.prototype.nodeType=6,Yr(Wa,ba),Ga.prototype.nodeType=ta,Yr(Ga,ba),za.prototype.nodeName="#document-fragment",za.prototype.nodeType=sa,Yr(za,ba),Xa.prototype.nodeType=ia,Yr(Xa,ba),Ka,t,i){return Ya.call(e,t,i)},ba.prototype.toString=Ya;trdefault:return t.nodeValue}},Object.definePropertturn fa(this),this.$$length}}),Object.defineProperty(ba.:funs.valfunction(e,t,i){e["$$"+t]=i})}catch(e){}var x={DocumentType:Va,DOMException:ca,DOMImplementation:_a,Element:Na,Node:ba,NodeLi�€‚",emsp:"â€ƒ",thinsp:"â€‰",zwnj:"â€Œ",zwj:"â€",lrm:"â€Ž",rlm:"â€",ndash:"â€“",mdash:"â€”",lsquo:"â€˜",rsquo:"â€™",sbquo:"â€š",ldquo:"â€œ",rdquo:"â€",bdquo:"â€ž",dagger:"â€ ",Dagger:"â€¡",bull:"â€¢",hellip:"â€¦",permil:"â€°",prime:"â€²",Prime:"â€³",lsaquo:"â€¹",rsaquo:"â€º",oline:"â€¾",euro:"â‚¬",trade:"�il:"âŒˆ",rcndexOf(":"))?(l=s.prefix=o.slice(0,d),c=o.slice(d+1),"xmlns"===l&&c):(l=null,"xmlns"===(c=o)&(r=e.lastIndexOf("</"+i))ml attrib(E);ts.isHTML(E.uri)&&!E.closed?v=function(e,t,i,n,r){if(/^(?:script|textarea)$/i.test(i)){var a=e.indexOf("</"+i+">",t),e=e.substring(t+1,a);if(/[&<]/.test(e))return/^script$/i.test(i)||(e=e.replace.length),a}return t+1}(i,v,E.tagName,s,r):v++}}catch(e){if(e instanceof cs)throw e;a.error("element parse ere},getURI:function(e){omString=function(e,t){var iTML_ENTITIES:t("fatalErr.normalizeLineEndin&"string"==typeof e?n.parse(i(e),o,t):n.errorHandler.ent(null,null,null),this.locator&&(this.doc.documr.createAttributeNS(e,i);this.locator&&Es(n.getLocator(o),l),l.value=l.nodeValue=u,a.setAttrthis.cur(e){},processingInstruction:function(e,t){t=this.doc.createProcessingInstruction(is.doc.createCDATASection(e):this.doc.createTextNode(.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n),this.locator&&Es(this.locator,n))},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumen0,h);return e[r].playlists.push(u),"undefined"==typeof f&&"main"===i&&((f=t).default=!0),e},{}k;case"urn:mpeg:dash:utc:ht[0],a.bytes)&&(1===t.length?n.push(u):n=n.concat(wo(u,t.slice(1)))),r+=a.length+s.length+u.length}return n}function So(e,t,i,n){void 0===n&&(n=1/0),e=_r(e),i=[].concat(i);for(var r,a=0,s=0;a<e.length&&(s<n||r);){var o=void 0;if(wr(e.subArray(n)TIME_UNSPECIFIED",Po="UNSUPPORTED_UTC_TIMING_SCHEME",Lo={static:function(e){var t=e.duration,i=e.timescale,n=void 0==={start:0,end:e}:"number"==typeof i?{start:0,end:i/n}:{start:0,end:r/n}},dynamic:function(e){var t=e.NOW,i=e.clientOffset,n=e.availabilityStartTime,r=e.timescale,a=void 0===r?1:r,s=e.duration,o=e.periodStart,u=void 0===o?0:o,r=e.minimumUpdatePeriod,o=vt+i)/1e3,u=n+u,o=Math.ceil((i+o-u)*a/s),r=Math.floor((i-u-r)*a/s),s=Math.floor((i-u)*a/s);return{start:Math.max(0,r),end:"number"==typeof e?e:Math.min(o,s)}}},$/g,Ro={mediaPresentationDuration:so,availabilityStartTime:function(e){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(ese(e)/1e3},minimumUpdatePeriod:so,suggestedPresentationDelay:so,type:function(e){return e},timeShiftBufferDepth:so,start:so,width:function(e){return parseInt(e,10)},height:function(e){return parseInt(e,10)},bandwidth:function(e){return parseInt(e,10)},frameRate:function(e){return parseFloat(e.split("/").reduce(function(e,t){return e/t}))},startNumber:function(e){return parseInt(e,10)},timescale:function(e){return parseInt(e,10)},presentationTimeOffset:function(e){return parseInt(e,10)}mber(e):e:t.getUint32(0)*No+t.getUint32(4)},Bo=function(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength),i={version:e[0],flags:new Uint8Array(e.subarray(1,4)),references:[],referenceId:t.getUint32(4),timescale:t.getUint32(8)},n=12;0===i.version?(i.earliestPresentationTime=t.getUint32(n),i.firstOffset=t.getUint32(n+4),n+=8):(i.earliestPresentationTime=Uo(e.subarray(n)),i.firstOffset=Uo(e.subarray(n+8)),n+=16);var r=t.getUint16(n+=2);for(n+=2;0<r;n+=12,r--)i.references.push({referenceType:(128&e[n])>>>7,referencedSize:2147483647&t.getUint32(n),subsegmentDuration:t.getUint32(n+4),startsWithSap:!!(128&e[n+8]),sapType:(112&e[n+8])>>>4,sapDeltaTime:268435455&t.getUint32(n+8)});return i},Fo=_r([73,68,51]),jo={EBML:_r([26,69,223,163]),DocType:_r([66,130]),Segment:_r([24,83,128,103]),SegmentInfo:_r([21,73,169,102]),Tracks:_r([22,84,174,107]),Track:_r([174]),TrackNumber:_r([215]),DefaultDuration:_r([35,227,131]),TrackEntry:_r([174]),TrackType:_r([131]),FlagDefault:_r([136]),CodecID:_r([134]),CodecPrivate:_r([99,162]),VideoTrack:_r([224]),AudioTrack:_r([225]),Clu,177]),BlockGroup:_r([160]),BlockDuration:_r([155]),Block:_r([161]),SimpleB1]),70,7,"3gp"21,112]),fmp4:_r([115,116,121,112]),mov:_r([102,116,121,112,113funct5,6]BML,jo.DocType])[0];return wr(e,Go.webm)},mkv:function(e){e=wo(e,[jon(e)o.mp4,Go.moof,{offset:4})&&!wr(eurn wr(e,Go.mov,{offset:4})},"3gp":functi =e[0];for(var t=0;t+1.constructor:{value:egmentIndex,startTime:a-fu({defaultDuration:t.targetDuration,durationList:u,startIndex:l,endIndex:h})}}return{p}if(l<0){for(var f=l;f<0;f++)if((o-=t.targetartTime:i};l=0}for(var m=l;m<u.length;m++){var g=u[m];if(o-=g.duration,s){if(0<o)continue}else if(0<=o-Rl)continue;return{partIndex:g.partte="HAVE_MASTER",e.playlists)return this.master=e,xu(this.master,this.srcUri()),e.playlists.forEach(function(t){t.segments=Lu(t),t.segments.forEac),this.trigUri()||window.location.href;this.master=(ing_,a=$u(t.playlists,r),Cu(t,function(e,t,i,n){e.playlists&&e.playlists.length&&(e=e.playlists,a=Vl(a,$u(e,r)))}),a),i.addSidxSegments_(i.media(),i.state,function(e){i.refreshMedia_(i.media().id)}))})},t.refreshMedia_=function(e){var t=this;if(!e)throw new Error("refreshMedia_ must take a media id");this.zt)NITBUFFER_LOW_Math.cndTnsmdata.options?this.messageHandlers=new ri(self,e.data.options):(this.me.sh=Date.now()-e.endOfAllRequests+me:"hls-error-relfunerri[tggeto BufpOfd=f.meddi(e),name:"timestampOffset"}),this.videoTimestampOffset_dioQur&&od({type:"dow.vttjs,i);t.cues=[],ton(e){t.timestampmap=e},i.onp-a.duration)})):a.empt,c=e.timelineToDatetimeMapr(var o=uu(t),u=0;u<o.peof laylist,i=e.segmentn(e){this.pendingTimelineCh100000000"),ei.key.byteion(){var eks)t.track"),t.onTracfor(var m =t.master.mediaGroel:p},!1).tiaTypes[e](u=n.options_.vhs&&n.options_.vhs.captionServices||{})[(l={label:o,language:d.language,instreamId:d.instreamId,default:d.default&&d.autoselect}).instreamId]?i).map(parseFloat))[0],s=s[1],(o=new window.VTTCue(n,n+u.duration,""))heGap_=function(e){var t=this.tecger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",e,"nextRange start:",t.start(0)),thisderflow_=function(e,t){for(var i=function(e){if(e.lengthisEnabled);return Tl(e,wl),e.filter(function(e){returnidth&&this.systemBandwidth!==n&&(iEON.width?t.attributes.RESOLUTION.width:n)||window.Number.MAX_VALUE)&&e.attributes.BANDWIDTH&&t.attributes.BANDWIDTH?e.attributes.BANDWIDTH-t.atS))),i&&i.attributSystems,e.media,e.audioMedia))&&(!((t.currentSource().keySystems=e)&&!t.eme)||(ir.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"),!1))}function Qd(){if(!window.localStorage)return null;va(e){return nullent("viete this.player_.hls),this.tech_&&this.tech_.vhs&&delete this.tech_.vhs,this.tech_&&delete this.tiaSourceUrl_)n&&(n=2),Gu(_.seekTo,tech:thisype(e.type,t)},handleSource:function(e,t,i){i=ir.mergeOptions(ir.options,i=void 0===i?{}:i);return t.vhs=new $d(e,t,i),ir.hasOwnProperty("hls")||Object.defineProperty(t,"hls",{get:function(){return ir.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."),t.vhs},configurable:!0}),t.vhs.xhr=Nu(),t.vhs.src(e.src,e.type),t.vhs},canPlayType:function(e,t){e=yr(e);if(!e)return"";t=Jd.getOverrideNative(t);return!Gd.supportsTypeNatively(e)||t?"maybe":""},getOverrideNative:function(e){var t=(e=void 0t).overrideNative,i=(void 0===i?{}:i).overrideNative;return void 0!==i&&i||(void 0===t?e:t)}};return mr("avc1.4d400d,mp4a.40.2")&&ir.getTech("Html5").registerSourceHandler(Jd,0),ir.VhsHandler=$d,Object.defineProperty(ir,"HlsHandler",{get:function(){return ir.logr is deprecated. Use videojs.VhsHandler instead."),$d},configurable:!0}:function(){return ir.log.warn("v),ir.use||(ir.registerCompsterComponent("Vhs",Gd)),ir.options.vhs=ir.options.vhs||{},ir.options.hls=ir.options.hls||{},ir.getPlugin&&ir.getPlugin("reloadSourceOnError")||(ir.registerPlugin||ir.plugin)("reloadSourceOnError",function(e){md(this,e)}),ir});
/*! @name videojs-dock @version 3.0.0 @license Apache-2.0 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("video.js")):"function"==typeof define&&define.amd?define(["exports","video.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).videojsDock={},t.videojs)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=i(e);let d=1;const n=function(){return d++};const l=s.default.dom||s.default,o=s.default.registerPlugin||s.default.plugin,r=s.default.getComponent("Component");class c extends r{constructor(t,e){super(t,e);const i=t.$(".vjs-tech");i.setAttribute("aria-labelledby",createEl(){const t=l.createEl("div",{className:"vjs-dock-title",title:this.options_.title,innerHTML:this.options_.title},{id:`vjs-dock-title-${n()}`}),e=l.createEl("div",{className:"vjs-dock-description",title:this.options_.description,innerHTML:this.options_.description},{id:`vjs-dock-description-${n()}`}),i=super.createEl("div",{className:"vjs-dock-text"});return this.title=t,this.description=e,i.appendChild(t),i.appendChild(e),i}update(t,e){this.title.innerHTML="",this.description.innerHTML="",this.title.appendChild(document.ciption.appendChild(document.createTextNode(e))}}class a extends r{createEl(){return super.createEl("div",{className:"vjs-dock-shelf"})}}s.default.registerComponent("Title",c),s.default.registerComponent("Shelf",a);const h=function(t){const e=t||{},i={title:{title:e.title||"",description:e.description||tent&&this.setAttribute("aria-labelledby",this.id()+" "+o),r&&l.textContent&& n=e[i]Array,
    size: size,
    pick: pick,
    omit: omit,
    first: first,
    head: first,
    take: first,
    initial: initial,
    last: last,
    rest: rest,
    tail: rest,
    drop: rest,
    compact: compact,
    flatten: flatten,
    without: without,
    uniq: uniq,
    unique: uniq,
    union: union,
    intersection: intersection,
    difference: difference,
    unzip: unzip,
    transpose: unzip,
    zip: zip,
    object: object,
    range: range,
    chunk: chunk,
    mixin: mixin,
    'default': _$1
  };

  // Default Export

  // Add all of the Underscore functions to the wrapper object.
  var _ = mixin(allExports);
  // Legacy Node.js API.
  _._ = _;

  return _;

})));


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";

var _ = require('underscore'),
  events = require('../events');
module.exports = function (videojs) {
  var MenuItem = videojs.getComponent('MenuItem');

  /**
   * A MenuItem to represent a video resolution
   *
   * @class QualityOption
   * @extends videojs.MenuItem
   */
  return videojs.extend(MenuItem, {
    /**
     * @inheritdoc
     */
    constructor: function (player, options) {
      var source = options.source;
      if (!_.isObject(source)) {
        throw new Error('was not provided a "source" object, but rather: ' + typeof source);
      }
      options = _.extend({
        selectable: true,
        label: source.label
      }, options);
      MenuItem.call(this, player, options);
      this.source = source;
    },
    /**
     * @inheritdoc
     */
    handleClick: function (event) {
      MenuItem.prototype.handleClick.call(this, event);
      this.player().trigger(events.QUALITY_REQUESTED, this.source);
    }
  });
};

},{"../events":4,"underscore":1}],3:[function(require,module,exports){
"use strict";

var _ = require('underscore'),
  events = require('../events'),
  qualityOptionFactory = require('./QualityOption'),
  QUALITY_CHANGE_CLASS = 'vjs-quality-changing';
module.exports = function tyOption = qualityOptionFactory(videojs),
    QualitySelector;

  /**
   * A component for changing video resolutions
   *
   * @class QualitySelualitySelector = videojs.extend(MenuButton, {
    /**the user's change is acknowledged
      player.on(events.QUALITY_REQUESTED, function (event, newSource) {
        this.setSelectedSource(newSource);
        player.addClass(QUALITY_CHANGE_CLAS_CHANGE_CLASS);
        });
      }.bind(this));

      // Update the list of menu items only when the list of sources change
      player.on(events.PLAYER_SOURCES_CHANGED, function () {
        this.update();
      }.bind(this));
      player.on(events.QUALITY_SELECTED, function (event, newSource) {
        // Update the selected source with the source that was actually selected
        this.setSelectedSouayer to get a source before the selector is
      // created, make sure to update once we get a "ready" signal.
      player.one('ready', function () {
        this.selectedSrc = player.src();
        this.update();
      }.bind(this));
      this.controlText('Openselected
     */
    setSelectedSource: function (source) {
      var src = source his.items, function (item) {
          item.selected(item.source.src === src);
        });
      }
    },
    /**
     * @inheritdoc
     */
    createItemsce) {
        return new QualityOption(player, {
          source: source,
          selected: source.src === this.selectedSrc
        });
      }.bind(this));
    },
    /**
     * @inheritdoc
     */
    buildWrapperCSSClass: function () {
      return 'vjs-quality-selector ' + MenuButton.prototype.buildWrapperCSSClass.call(this);
    }
  });
  videojs.registerComponent('QualitySelector', QualitySelector);
  return QualitySelector;
};

},{"../events":4,"./QualityOption":2,"underscore":1}],4:[function(require,module,exports){
"use strict";

module.exports = {
  QUALITY_REQUESTED: 'qualityRequested',
  QUALITY_SELECTED: 'qualitySelected',
  PLAYER_SOURCES_CHANGED: 'playerSourcesChanged'
};

},{}],5:[function(require,module,exports){
"use strict";

var _ = require('underscore'),
  events = require('./events'),
  qualitySelectorFactory = require('./components/QualitySelector'),
  sourceInterceptorFactory = require('./middleware/SourceInterceptor'),
  SafeSeek = require('./util/SafeSeek');
module.exports = function (videojs) {
  videojs = videojs || window.videojs;
  qualitySelectorFactory(videojs);
  sourceInterceptorFactory(videojs);
  videojs.hook('setup', function (player) {
    function changeQuality(event, newSource) {
      var sources = player.currentSources(),
        currentTime = player.currentTime(),
        currentPlaybackRate = player.playbackRate(),
        isPaused = player.paused(),
        selectedSource;

      // Clear out any previously selected sources (see: #11)
      _.each(sources, function (source) {
        source.selected = false;
      });
      selectedSource = _.findWhere(sources, {
        src: newSource.src
      });
      // Note: `_.findWhere` returns a reference to an object. Thus the
      // following updates the original object in `sources`.
      selectedSource.selected = true;
      if (player._qualitySelectorSafeSeek) {
        player._qualitySelectorSafeSeek.onQualitySelectionChange();
      }
      player.src(sources);
      player.ready(function () {
        if (!player._qualitySelectorSafeSeek || player._qualitySelectorSafeSeek.hasFinished()) {
          // Either we don't have a pending seek action or the one that we have is no
          // longer applicable. This block must be within a `player.ready` callback
          // because the call to `player.src` above is asynchronous, and so not
          // having it within this `ready` callback would cause the SourceInterceptor
          // to execute after this block instead of before.
          //
          // We save the `currentTime` within the SafeSeek instance because if
          // multiple QUALITY_REQUESTED events are received before the SafeSeek
          // operation finishes, the player's `currentTime` will be `0` if the
          // player's `src` is updated but the player's `currentTime` has not yet
          // been set by the SafeSeek operation.
          player._qualitySelectorSafeSeek = new SafeSeek(player, currentTime);
          player.playbackRate(currentPlaybackRate);
        }
        if (!isPaused) {
          player.play();
        }
      });
    }

    // Add handler to switch sources when the user requests a change
    player.on(events.QUALITY_REQUESTED, changeQuality);
  });
};
module.exports.EVENTS = events;

},{"./components/QualitySelector":3,"./events":4,"./middleware/SourceInterceptor":6,"./util/SafeSeek":8,"underscore":1}],6:[function(require,module,exports){
"use strict";

var _ = require('underscore'),
  events = require('../events');
module.exports = function (videojs) {
  videojs.use('*', function (player) {
    return {
      setSource: function (playerSelectedSource, next) {
        var sources = player.currentSources(),
          userSelectedSource,
          cy two source options, the one that videojs
        // auto-selects and the one that a "user" of this plugin has
        // supplied via the `selected` property. `selected` can come from
        // either the `<source>` tag or the list of sources passed to
        // videojs u {
          // Must check for boolean values as well as either the string 'true' or
          // 'selected'. When sources are set programmatically, the value will be a
          // boolean, but those coming from a `<source>` tag will be a string.
          return source.selected === true || source.selected === 'true' || source.selected === 'selected';
        });
        chosenSource = userSelectedSource || playerSelectedSource;
        player.trigger(events.QUALITY_SELECTED, chosenSource);

        // Pass along the chosen source
        next(null, chosenSource);
      }
    };
  });
};

},{"../events":4,"underscore":1}],7:[function(require,module,exports){
"use strict";

require('./index')();

},{"./index":5}],8:[function(require,module,exports){
"use strict";

class SafeSeek {
  constructor(player, seekToTime) {
    this._player = player;
    this._seekToTime = seekToTime;
    this._hasFinished = false;
    this._keepThisInstanceWhenPlayerSourcesChange = false;
    this._seekWhenSafe();
  }
  _seekWhenSafe() {
    var HAVE_FUTURE_DATA = 3;

    // `readyState` in Video.js is the same as the HTML5 Media element's `readyState`
    // property.
    //
    // `readyState` is an enum of 5 values (0-4), each of which represent a state of
    // readiness to play. The meaning of the values range from HAVE_NOTHING (0), meaning
    // no data is available to HAVE_ENOUGH_DATA (4), meaning all data is loaded and the
    // video can be played all the way through.
    //
    // In order to seek successfully, the `readyState` must be at least HAVE_FUTURE_DATA
    // (3).
    //
    // @see http://docs.videojs.com/player#readyState
    // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
    // @see https://dev.w3.org/html5/spec-preview/media-elements.html#seek-the-media-controller
    if (this._player.readyState() < HAVE_FUTURE_DATA) {
      this._seekFn = this._seek.bind(this);
      // The `canplay` event means that the `readyState` is at least HAVE_FUTURE_DATA.
      this._player.one('canplay', this._seekFn);
    } else {
      this._seek();
    }
  }
  onPlayerSourcesChange() {
    if (this._keepThisInstanceWhenPlayerSourcesChange) {
      // By setting this to `false`, we know that if the player sources change again
      // the change did not originate from a quality selection change, the new sources
      // are likely different from the old sources, and so this pending seek no longer
      // applies.
      this._keepThisInstanceWhenPlayerSourcesChange = false;
    } else {
      this.ca newhen the player is
    // paused, the `preload` attribute is set to `none`, and the user selects one
    // quality option and then another, the player cannot seek until the player has
    // enough data to do so (and the `canplay` event is fired) and thus on the second
    // selectnsKey(e,t)?2:m.forwardKey(e,t)?3:m.volumeUpKey(e,t)?4:m.volumeDownKey(e,t)?5:m.muteKey(e,t)?6:m.fullscreenKey(e,t)?7:void 0};function T(e){return"function"==typeof n?n(e):n}function E(e){null!=e&&"functspose=function(){document.removeEventListener("keydown",g)}}else f.on("keydown",c);return f.on("dblclick",function(e){if(null!=i&&i<="7.1.0"&&f.controls()){var t=e.relatedTarget||e.toElement||v.activeElement;t!=y&&t!=y.querySelector(".vjs-tech")&&t!=y.querySelector(".iframeblocker")||b&&(f.isFullscreen()?f.exitFullscreen():f.requestFullscreen())}}),f.on("mousewheel",q),f.on("DOMMouseScroll",q),this})});
//# sourceMappingURL=videojs.hotkeys.min.js.map
/*
* videojs-ga - v0.4.2 - 2015-02-06
* Copyright (c) 2015 Michael Bensoussan
* Licensed MIT
*/
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  videojs.plugin('ga', function(options) {
    var dataSetupOptions, defaultsEventsToTrack, end, error, eventCategory, eventLabel, eventsToTrack, fullscreen, loaded, parsedOptions, pause, percentsAlreadyTracked, percentsPlayedInterval, play, resize, seekEnd, seekStart, seeking, sendbeacon, timeupdate, volumeChange;
    if (options == null) {
      options = {};
    }
    dataSetupOptions = {};
    if (this.options()["data-setup"]) {
      parsedOptions = JSON.parse(this.options()["data-setup"]);
      if (parsedOptions.ga) {entsToTrack || defaultsEventsToTrack;
    percentsPlayedInterval = options.percentsPlayedInterval || dataSetupOptions.percentsPlayedInterval || 10;
    eventCategory = options.eventCategory || dataSetupOptions.eventCategory || 'Video';
    eventLabel = options.eventLabel || dataSetupOptions.eventLabel;
    options.debug = options.debug || false;
    percentsAlreadyTracked = [];
    seekStart = seekEnd = 0;
    seeking = false;
    loaded = function() {
      if (!eventLabel) {
        eventLabel = this.currentSrc().split("/").slice(-1)[0].replace(/\.(\w{3,4})(\?.*)?$/i, '');
      }
      if (__indexOf.call(eventsToTrack, "loadedmetadata") >= 0) {
        sendbeacon('loadedmetadata', true);
      }
    };
    timeupdate = function() {
      var currentTime, duration, percent, percentPlayed, _i;
      currentTime = Math.round(this.currentTime());
      duration = Math.round(this.duration());
      percentPlayed = Math.round(currentTime / duration * 100);
      for (percent = _i = 0; _i <= 99; percent = _i += percentsPlayedInterval) {
        if (percentPlayed >= percent && __indexOf.call(percentsAlreadyTracked, percent) < 0) {
          if (__indexOf.call(eventsToTrack, "start") >= 0 && percent === 0 && percentPlayed > 0)  } else if (_ent+'% played'      if (Math.abs(seseekEnd);
    y = function()alse;
    };
    ume change', false, volume);
    };
    resize = function() {
      sendbeacon('resize - ' + this.width() + "*" + this.height(), true);
    };
    error = function() {
      var currentTime;
      currentTime = Math.round(this.currentTime());
      sendbeacon('error', true, currentTime);
    };
    fullscreen = function() {
      var currentTime;
      currentTime = Math.round(this.currentTime());
      if ((typeof this.isFullscreen === "function" ? this.isFullscreen() : void 0) || (typeof this.isFullScreen === "function" ? this.isFullScreen() : void 0)) {
        sendbtsToTrack, "end") >= 0) {
        this.on("ended", end);
      }
      if (__indexOf.call(eventsToTrack, "play") >= 0) {
        this.on("play", play);
      }
      if (__indexOf.call(eventsToTrack, "pause") >= 0) {
        this.on("pause", pause);
      }
      if (__indexOf.call(eventsToTrack, "volumeChange") >= 0) {
        this.on("volumechange", volumeChange);
      }
      if (__indexOf.call(eventsToTrack, "resize") >= 0) {
        this.on("resize", resize);
      }
      if (__indexOf.call(eventsToTrack, "error") >= 0) {
        this.on("error", error);
 reen);
      }
    });
    return {
      'sendbeacon': sendbeacon
    };
  });

}).call(this);
(function ($, bootstrap) {
  // Backwards compatibility for Bootstrap 3 accordions added via CKEditor plugin
  $(document).ready(function () {
    var collapsibleButtonList = document.querySelectorAll('.collapsible-item-title-link');
    collapsibleButtonList.forEach(function (collapsibleButton) {
      collapsibleButton.setAttribute("data-bs-toggle", "collapse");
    });

    var collapsibleItemList = document.querySelectorAll('.collapsible-item-collapse');
    collapsibleItemList.forEach(function (collapsibleItem) {
      collapsibleItem.setAttribute("class", "collapsible-item-collapse collapse");
    });
  });
})(jQuery, bootstrap);

/* global jQuery, NPS */
'use strict';

(function ($, NPS) {
  function render() {
    var address = document.createElement('address');
    var lines = document.createElement('span');
    var line1Element = document.createElement('span');
    var line2Element = document.createElement('span');
    var line3Element = document.createElement('span');
    var line1 = String(this.line_1);
    var POBoxRegex = new RegExp('^P\.?O\.? Box (.*)$', 'i');

    if (POBoxRegex.test(line1)) {
      var POBoxNumber = document.createElement('span');
      POBoxNumber.setAttribute('itemprop', 'postOfficeBoxNumber');

      var POBoxNumberValue = POBoxRegex.exec(line1);
      POBoxNumber.textContent = POBoxNumberValue[1];

      line1Element.appendChild(document.createTextNode('P.O. Box '));
      line1Element.appendChild(POBoxNumber);
      lines.appendChild(line1Element);
    } else {
      var combinedLines = [
        this.line_1,
        this.line_2,
        this.line_3
      ].filter(l => l !== undefined && l.trim() !== '').join(', ');

      if (combinedLines.length > 0) {
        lines.setAttribute('itemprop', 'streetAddress');
        lines.setAttribute('content', combinedLines);
      }

      if (this.line_1 !== undefined && this.line_1 !== '') {
        line1Element.textContent = line1;
        lines.appendChild(line1Element);
      }
    }

    if (this.line_2 !== undefined && this.line_2 !== '') {
      line2Element.textContent = this.line_2;
      lines.appendChild(document.createElement('br'));
      lines.appendChild(line2Element);
    }

    if (this.line_3 !== undefined && this.line_3 !== '') {
      line3Element.textContent = this.line_3;
      lines.appendChild(document.createElement('br'));
      lines.appendChild(line3Element);
    }

    address.appendChild(lines);

    if (this.city !== undefined && this.city !== '') {
      var cityElement = document.createElement('span');
      cityElement.setAttribute('itemprop', 'addressLocality');
      cityElement.textContent = this.city;
      address.appendChild(document.createElement('br'));
      address.appendChild(cityElement);
    }

    if (this.state_code !== undefined && this.state_code !== '') {
      var stateElement = document.createElement('span');
      stateElement.setAttribute('itemprop', 'addressRegion');
      stateElement.textContent = this.state_code;

      if (this.city !== undefined && this.city !== '') {
        address.appendChild(document.createTextNode(', '));
      }

      address.appendChild(stateElement);
    }

    if (this.postal_code !== undefined && this.postal_code !== '') {
      var zipElement = document.createElement('span');
      zipElement.setAttribute('itemprop', 'postalCode');
      zipElement.textContent = this.postal_code;

      if (
        (this.city !== undefined && this.city !== '') ||
        (this.state_code !== undefined && this.state_code !== '')
      ) {
        address.appendChild(document.createTextNode(' '));
      }

      address.appendChild(zipElement);
    }

    if (this.country_code === 'CA') {
      var countryElement = document.createElement('span');
      countryElement.setAttribute('itemprop', 'addressCountry');
      countryElement.textContent = 'Canada';
      address.appendChild(document.createElement('br'));
      address.appendChild(countryElement);
    }

    return address;
  }

  /**
   * @param object address - An object with the structure { line_1, line_2, line_3, city, state_code, postal_code }
   */
  NPS.Address = function (address) {
    if (typeof address !== 'object') {
      throw new Error('Invalid argument, this must be an object');
    }

    this.line_1 = address.line_1;
    this.line_2 = address.line_2;
    this.line_3 = address.line_3;
    this.city = address.city;
    this.state_code = address.state_code;
    this.postal_code = address.postal_code;
    this.country_code = address.country_code;
    this.render = render.bind(this);
  };
})(jQuery, NPS);

/* Globals: jQuery, Swiper, NPS */
'use strict';

(function ($, Swiper) {
  function initSwiper(carousel) {
    var swiper_id = carousel.getAttribute('data-swiper-id');
    var nextEl = carousel.querySelector('.CarouselGallery__Controls__Next');
    var nextMessage = nextEl && nextEl.getAttribute('aria-label')
      ? nextEl.getAttribute('aria-label')
      : null;
    var prevEl = carousel.querySelector('.CarouselGallery__Controls__Previous');
    var prevMessage = prevEl && prevEl.getAttribute('aria-label')
      ? prevEl.getAttribute('aria-label')
      : null;

    var swiper = new Swiper(carousel, {
      a11y: nextMessage && prevMessage
        ? { nextSlideMessage: nextMessage, prevSlideMessage: prevMessage }
        : true,
      navigation: {
        nextEl: '.CarouselGallery__Controls__Next',
        prevEl: '.CarouselGallery__Controls__Previous',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 4
        }
      }
    });

    if (carousel.getAttribute('data-lightbox') !== 'false') {
      $.each(swiper.slides, function (i, slide) {
        var lightboxID = '#swiper_image_' + swiper_id + '_' + i;
        $(slide).featherlight(lightboxID, {
          afterOpen: function (event) {
            this._previouslyActive = slide;
            $('.featherlight-close-icon').focus();
          }
        });
        $(slide).on('keypress', function(event) {
          if (event.which == 13) {
            $(slide).trigger('click');
          }
        });
      });
    }

    return swiper;
  }

  function init(element) {
    if (element.querySelectorAll('.swiper-slide')) {
      initSwiper(element);
    }
  }

  $(document).ready(function () {
    var carouselElements = document.querySelectorAll('.CarouselGallery');
    carouselElements.forEach(init);
    NPS.initCarouselGallery = init;
  });
})(jQuery, Swiper, NPS);

/* Globals: NPS */
'use strict';
(function ($) {
  var HOLIDAYS = {
    NEW_YEARS_DAY: "New Year's Day",
    BDAY_MLK_JR: "Birthday of Martin Luther King, Jr.",
    WASHINGTONS_BDAY: "Washington's Birthday",
    MEMORIAL_DAY: "Memorial Day",
    JUNETEENTH: "Juneteenth National Independence Day",
    INDEPENDENCE_DAY: "Independence Day",
    LABOR_DAY: "Labor Day",
    COLUMBUS_DAY: "Columbus Day",
    VETERANS_DAY: "Veterans Day",
    THANKSGIVING_DAY: "Thanksgiving Day",
    CHRISTMAS_DAY: "Christmas Day"
  };

  var HOLIDAY_VALUES = {
    11: HOLIDAYS.NEW_YEARS_DAY,
    12: HOLIDAYS.BDAY_MLK_JR,
    13: HOLIDAYS.WASHINGTONS_BDAY,
    14: HOLIDAYS.MEMORIAL_DAY,
    15: HOLIDAYS.INDEPENDENCE_DAY,
    16: HOLIDAYS.LABOR_DAY,
    17: HOLIDAYS.COLUMBUS_DAY,
    18: HOLIDAYS.VETERANS_DAY,
    19: HOLIDAYS.THANKSGIVING_DAY,
    20: HOLIDAYS.CHRISTMAS_DAY,
    21: HOLIDAYS.JUNETEENTH
  };

  var FEE_TYPES = {
    TIMED_ENTRY_LOCATION: "Timed Entry Reservation - Location",
    TIMED_ENTRY_PARK: "Timed Entry Reservation - Park",
    TIMED_ENTRY_PARK_LOCATION: "Timed Entry Reservation - Park & Location",
    VEHICLE: "Entrance - Private Vehicle",
    MOTORCYCLE: "Entrance - Motorcycle",
    PER_PERSON: "Entrance - Per Person",
    SNOWMOBILE: "Entrance - Snowmobile",
    NONCOMMERCIAL: "Entrance - Non-commercial Groups",
    ACADEMIC: "Entrance - Education/Academic Groups",
    COMMERCIAL_SEDAN: "Commercial Entrance - Sedan",
    COMMERCIAL_VAN: "Commercial Entrance - Van",
    COMMERCIAL_MINIBUS: "Commercial Entrance - Mini-bus",
    COMMERCIAL_MOTOR_COACH: "Commercial Entrance - Motor Coach",
    COMMERCIAL_PER_PERSON: "Commercial Entrance - Per Person"
  };

  var PASS_TYPES = {
    PARK_ANNUAL: "Annual Entrance - Park"
  };

  var FEE_LABELS = {
    [FEE_TYPES.VEHICLE]: "Private Vehicle",
    [FEE_TYPES.MOTORCYCLE]: "Motorcycle",
    [FEE_TYPES.PER_PERSON]: "Per Person",
    [FEE_TYPES.SNOWMOBILE]: "Snowmobile",
    [FEE_TYPES.NONCOMMERCIAL]: "Non-commercial Group (16+ persons)",
    [FEE_TYPES.ACADEMIC]: "Education/Academic Group",
    [FEE_TYPES.COMMERCIAL_SEDAN]: "Commercial Sedan (1-6 seats)",
    [FEE_TYPES.COMMERCIAL_VAN]: "Commercial Van (7-15 seats)",
    [FEE_TYPES.COMMERCIAL_MINIBUS]: "Commercial Mini-bus (16-25 seats)",
    [FEE_TYPES.COMMERCIAL_MOTOR_COACH]: "Commercial Motor Coach (26+ seats)",
    [FEE_TYPES.COMMERCIAL_PER_PERSON]: "Commercial Per Person"
  };

  var FEE_SORT_WEIGHTS = {
    [FEE_TYPES.VEHICLE]: 1,
    [FEE_TYPES.MOTORCYCLE]: 2,
    [FEE_TYPES.PER_PERSON]: 3,
    [FEE_TYPES.SNOWMOBILE]: 4,
    [FEE_TYPES.ACADEMIC]: 5,
    [FEE_TYPES.NONCOMMERCIAL]: 6,
    [FEE_TYPES.COMMERCIAL_SEDAN]: 7,
    [FEE_TYPES.COMMERCIAL_VAN]: 8, 
    [FEE_TYPES.COMMERCIAL_MINIBUS]: 9,
    [FEE_TYPES.COMMERCIAL_MOTOR_COACH]: 10,
    [FEE_TYPES.COMMERCIAL_PER_PERSON]: 11
  }

  var PASS_LABELS = {
    [PASS_TYPES.PARK_ANNUAL]: "Annual Park Pass"
  };

  var ICONS = {
    AUTOMOBILE: "automobile",
    BUS: "bus",
    MOTORCYCLE: "motorcycle",
    SNOWMOBILE: "snowmobile",
    WALK: "walk"
  };

  var FEE_ICONS = {
    [FEE_TYPES.VEHICLE]: ICONS.AUTOMOBILE,
    [FEE_TYPES.MOTORCYCLE]: ICONS.MOTORCYCLE,
    [FEE_TYPES.PER_PERSON]: ICONS.WALK,
    [FEE_TYPES.SNOWMOBILE]: ICONS.SNOWMOBILE,
    [FEE_TYPES.NONCOMMERCIAL]: ICONS.BUS,
    [FEE_TYPES.ACADEMIC]: ICONS.BUS,
    [FEE_TYPES.COMMERCIAL_SEDAN]: ICONS.AUTOMOBILE,
    [FEE_TYPES.COMMERCIAL_VAN]: ICONS.BUS,
    [FEE_TYPES.COMMERCIAL_MINIBUS]: ICONS.BUS,
    [FEE_TYPES.COMMERCIAL_MOTOR_COACH]: ICONS.BUS,
    [FEE_TYPES.COMMERCIAL_PER_PERSON]: ICONS.BUS
  };

  var tableTemplate = '<div class="FeesPassesTable" itemscope itemtype="http://schema.org/Offer"></div>';
  var feeTableHeaderTemplate = '<tr><th scope="col">Type</th><th scope="col">Dates</th><th scope="col">Cost</th>';
  var passTableHeaderTemplate = '<tr><th scope="col">Type</th><th scope="col">Cost</th>';

  /**
   * @constructor
   * @param {object} props - The fee data
   * @param {string} props.description
   * @param {string} props.endDate
   * @param {string} props.entranceFeeType
   * @param {string} props.exceptions
   * @param {float} props.cost
   * @param {integer} props.holidayEnd
   * @param {integer} props.holidayStart
   * @param {string} props.informationUrl
   * @param {integer} props.id
   * @param {array} props.locations
   * @param {integer} props.maxCost
   * @param {string} props.paymentDescription
   * @param {string} props.payGovPurchaseUrl
   * @param {float} props.perPersonCost
   * @param {string} props.purchaseUrl
   * @param {string} props.recGovPurchaseUrl
   * @param {string} props.startDate 
   */
  function EntranceFee(props) {
    this.description = (props.description !== undefined) ? props.description : "";
    this.endDate = (props.endDate !== undefined) ? props.endDate : "";
    this.exceptions = (props.exceptions !== undefined) ? props.exceptions : "";
    this.cost = (props.cost !== undefined) ? Number(props.cost) : 0;
    this.holidayEnd = (props.holidayEnd !== undefined) ? Number(props.holidayEnd) : 0;
    this.holidayStart = (props.holidayStart !== undefined) ? Number(props.holidayStart) : 0;
    this.id = (props.id !== undefined) ? Number(props.id) : null;
    this.informationURL = (props.informationUrl !== undefined) ? props.informationUrl : "";
    this.maxCost = (props.maxCost !== undefined) ? Number(props.maxCost) : null;
    this.perPersonCost = (props.perPersonCost !== undefined) ? Number(props.perPersonCost) : 0;
    this.purchaseLocations = Array.isArray(props.locations) ? props.locations : [];
    this.payGovPurchaseURL = (props.payGovPurchaseUrl !== undefined) ? props.payGovPurchaseUrl : "";
    this.paymentDescription = (props.paymentDescription !== undefined) ? props.paymentDescription : "";
    this.purchaseURL = (props.purchaseUrl !== undefined) ? props.purchaseUrl : "";
    this.recGovPurchaseURL = (props.recGovPurchaseUrl !== undefined) ? props.recGovPurchaseUrl : "";
    this.startDate = (props.startDate !== undefined) ? props.startDate : "";
    this.type = (props.entranceFeeType !== undefined) ? props.entranceFeeType : "";
    return this;
  }

  /**
   * Returns an SVG element with the icon for the fee
   * @returns {SVGElement}
   */
  EntranceFee.prototype.createIconElement = function () {
    var element = document.createElement('svg');
    var useElement = document.createElement('use');
    useElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    useElement.setAttribute('xlink:href', '/common/commonspot/templates/assets/sprite.symbol.svg#' + FEE_ICONS[this.type]);
    element.appendChild(useElement);
    return element;
  };

  /**
   * Returns the cost of the fee
   * @returns {string}
   */
  EntranceFee.prototype.getCost = function () {
    var cost;

    if (this.cost > 0 && this.perPersonCost > 0) {
      // This is actually a range, but we can only calculate the minimum here
      cost = this.cost + this.perPersonCost;
    } else if (this.perPersonCost > 0) {
      cost = this.perPersonCost;
    } else {
      cost = this.cost;
    }

    return cost;
  };

  /**
   * Returns the maximum cost of the fee
   * @returns {string}
   */
  EntranceFee.prototype.getMaxCost = function () {
    return (this.maxCost !== null)
      ? Math.max(this.maxCost, this.getCost())
      : this.getCost();
  };

  /**
   * Returns the formatted title for the fee
   * @returns {string}
   */
  EntranceFee.prototype.getTitle = function () {
    switch (this.type) {
      case FEE_TYPES.TIMED_ENTRY_LOCATION:
        return this.location + " Reservation";
        break;
      case FEE_TYPES.TIMED_ENTRY_PARK:
        return "Park Entry Reservation";
        break;
      case FEE_TYPES.TIMED_ENTRY_PARK_LOCATION:
        return "Park Entry at " + this.location + " Reservation";
        break;
      default:
        return FEE_LABELS[this.type];
    }
  };

  /**
   * Returns a date string or holiday name.
   * @returns {string}
   */
  EntranceFee.prototype.getStartDate = function () {
    if (this.holidayStart > 0) {
      return HOLIDAY_VALUES[this.holidayStart];
  .toLocaleDateString('en-US', {
        month: 'long', day: 'numeric'
      });
    }
  };

  /**
   * Returns a date string or holiday name.
   * @returns {string}
   */
  EntranceFee.prototype.getEndDate = function () {
    if (this.holidayEnd > 0) {
      return HOLIDAY_VALUES[this.holidayEnd];
    } else {
      var endDate = new Date(this.endDate);
      return endDate.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric'
      });
    }
  };

  /**
   * Returns a human readable version of the date range for when the fee applies
   * @returns {string}
   */
  EntranceFee.prototype.getDateRange = function () {
    return this.getStartDate() + '\u2013' + this.getEndDate();
  };

  /**
   * Whether the fee applies year round
   * @returns {boolean}
   */
  EntranceFee.prototype.isYearRound = function () {
    var startDateIsCorrect = false;
    var endDateIsCorrect = false;

    if (this.holidayStart === 0) {
      var startDate = new Date(this.startDate);
      var formattedStartDate = startDate.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric'
      });
      startDateIsCorrect = formattedStartDate === "January 1";
    } else {
      startDateIsCorrect = this.holidayStart === 11;
    }

    if (this.holidayEnd === 0) {
      var endDate = new Date(this.endDate);
      var formattedEndDate = endDate.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric'
      });
      endDateIsCorrect = formattedEndDate === "December 31";
    }

    return startDateIsCorrect && endDateIsCorrect;
  };

  /**
   * Inherits from EntranceFee
   * @param {string} props.timedEntryLocation
   * @param {string} props.timedEntryShortDescription
   * @returns {object}
   */
  function TimedEntryReservation(props) {
    EntranceFee.call(this, props);
    this.location = (props.timedEntryLocation !== undefined) ? props.timedEntryLocation : "";
    this.shortDescription = (props.timedEntryShortDescription !== undefined) ? props.timedEntryShortDescription : "";
    return this;
  }
  TimedEntryReservation.prototype = Object.create(EntranceFee.prototype);
  TimedEntryReservation.prototype.constructor = TimedEntryReservation;

  /**
   * @constructor
   * @param {object} props - The pass data
   * @param {string} props.category
   * @param {float} props.cost
   * @param {string} props.description
   * @param {integer} props.id
   * @param {array} props.images
   * @param {string} props.informationUrl
   * @param {array} props.locations
   * @param {string} props.paymentDescription
   * @param {string} props.payGovPurchaseUrl
   * @param {string} props.purchaseUrl
   * @param {string} props.recGovPurchaseUrl
   */
  function EntrancePass(props) {
    this.cost = (props.cost !== undefined) ? props.cost : 0;
    this.description = (props.description !== undefined) ? props.description : "";
    this.id = (props.id !== undefined) ? props.id : null;
    this.images = Array.isArray(props.images) ? props.images : [];
    this.informationURL = (props.informationUrl !== undefis.purchaseLocations = Array.isArray(props.locations) ? props.locations : [];
    this.recGovPurchaseURL = (props.recGovPurc
    this.payGovPurchaseURL = (props.payGovPurchaseUrl !== undefined) ? props.payGovPurchaseUrl : "";
    this.paymentDescription = (props.paymentDescription !== undefined) ? props.paymentDescription : "";
    this.purchaseURL = (props.purchaseUrl !== undefined) ? props.purchaseUrl : "";
    this.type = (props.category !== undefined) ? props.category : "";
    return this;
  }

  /**
   * Returns the formatted cost for the pass
   * @returns {string}
   */
  EntrancePass.prototype.getCost = function () {
    return this.cost;
  };

  /**
   * Returns the formatted title for the pass
   * @returns {string}
   */
  EntrancePass.prototype.getTitle = function () {
    return PASS_LABELS[this.type];
  };

  /**
   * @param {HTMLDivElement} container
   * @param {EntranceFee[]} fees
   * @param {EntrancePass[]} passes
   * @param {EntranceFee[]} timedEntry
   * @return {HTMLDivElement}
   */
  function renderTables(container, fees, passes, timedEntry) {
    var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    if (Array.isArray(timedEntry) && timedEntry.length > 0) {
      var timedEntryHeading = document.createElement('p');
      timedEntryHeading.setAttribute('class', 'h4');
      timedEntryHeading.textContent = 'Reservations and Timed Entry';
      container.appendChild(timedEntryHeading);

      var timedEntryTable = document.createElement('table');
      timedEntryTable.setAttribute('class', 'table table-sm');

      var timedEntryTableHeader = document.createElement('thead');
      timedEntryTableHeader.innerHTML = feeTableHeaderTemplate;
      timedEntryTable.appendChild(timedEntryTableHeader);

      var timedEntryTableBody = document.createElement('tbody');

      timedEntry.forEach(function (fee) {
        var timedEntryRow = document.createElement('tr');

        var cellType = document.createElement('th');
        cellType.setAttribute('scope', 'row');

        if (fee.informationURL) {
          var cellTypeLink = document.createElement('a');
          cellTypeLink.setAttribute('href', fee.informationURL);
          cellTypeLink.textContent = fee.getTitle();
          cellType.appendChild(cellTypeLink);
        } else {
          cellType.textContent = fee.getTitle();
        }

        var cellDates = document.createElement('td');
        cellDates.textContent = fee.isYearRound() ? 'Year-round' : fee.getDateRange();
        
        var cellCost = document.createElement('td');
        var timedEntryCurrency = document.createElement('meta');
        timedEntryCurrency.setAttribute('itemprop', 'priceCurrency');
        timedEntryCurrency.setAttribute('content', 'USD');
        cellCost.appendChild(timedEntryCurrency);
        cellCost.appendChild(document.createTextNode('$'));
        var timedEntryPrice = document.createElement('span');
        timedEntryPrice.setAttribute('itemprop', 'price');
        timedEntryPrice.textContent = formatter.format(fee.getCost()).replace('$', '');
        cellCost.appendChild(timedEntryPrice);

        timedEntryRow.appendChild(cellType);
        timedEntryRow.appendChild(cellDates);
        timedEntryRow.appendChild(cellCost);
        timedEntryTableBody.appendChild(timedEntryRow);
      });

      timedEntryTable.appendChild(timedEntryTableBody);
      container.appendChild(timedEntryTable);
    }

    if (Array.isArray(fees) && fees.length > 0) {
      var feesHeading = document.createElement('p');
      feesHeading.setAttribute('class', 'h4');
      feesHeading.textContent = 'Entrance Fee (Standard Entrance Pass)';
      container.appendChild(feesHeading);

      var feeTable = document.createElement('table');
      feeTable.setAttribute('class', 'table table-sm');

      var feeTableHeader = document.createElement('thead');
      feeTableHeader.innerHTML = feeTableHeaderTemplate;
      feeTable.appendChild(feeTableHeader);

      var feeTableBody = document.createElement('tbody');

      fees.forEach(function (fee) {
        var feeRow = document.createElement('tr');

        var cellType = document.createElement('th');
        cellType.setAttribute('scope', 'row');

        if (fee.informationURL) {
          var cellTypeLink = document.createElement('a');
          cellTypeLink.setAttribute('href', fee.informationURL);
          cellTypeLink.textContent = fee.getTitle();
          cellType.appendChild(cellTypeLink);
        } else {
          cellType.textContent = fee.getTitle();
        }

        var cellDates = document.createElement('td');
        cellDates.textContent = fee.isYearRound() ? 'Year-round' : fee.getDateRange();
        
        var cellCost = document.createElement('td');
        var feeCurrency = document.createElement('meta');
        feeCurrency.setAttribute('itemprop', 'priceCurrency');
        feeCurrency.setAttribute('content', 'USD');
        cellCost.appendChild(feeCurrency);
        cellCost.appendChild(document.createTextNode('$'));

        var feePrice = document.createElement('span');
        
        if (fee.cost > 0 && fee.perPersonCost > 0 && fee.maxCost > 0) {
          feePrice.setAttribute('itemprop', 'priceSpecification');
          feePrice.setAttribute('itemscope', '');
          feePrice.setAttribute('itemtype', 'https://schema.org/PriceSpecification');
          var feeMin = document.createElement('span');
          feeMin.setAttribute('itemprop', 'minPrice');
          feeMin.textContent = formatter.format(fee.getCost()).replace('$', '');
          var feeMax = document.createElement('span');
          feeMax.setAttribute('itemprop', 'maxPrice');
          feeMax.textContent = formatter.format(fee.getMaxCost()).replace('$', '');
          feePrice.appendChild(feeMin);
          feePrice.appendChild(document.createTextNode('\u2013'));
          feePrice.appendChild(feeMax);
        } else {
          feePrice.setAttribute('itemprop', 'price');
          feePrice.textContent = formatter.format(fee.getCost()).replace('$', '');
        }

        cellCost.appendChild(feePrice);

        feeRow.appendChild(cellType);
        feeRow.appendChild(cellDates);
        feeRow.appendChild(cellCost);
        feeTableBody.appendChild(feeRow);
      });

      feeTable.appendChild(feeTableBody);
      container.appendChild(feeTable);
    }

    if (Array.isArray(passes) && passes.length > 0) {
      var passesHeading = document.createElement('p');
      passesHeading.setAttribute('class', 'h4');
      if (Array.isArray(fees) && fees.length > 0) {
        passesHeading.textContent = 'Other Entrance Passes';
      } else {
        passesHeading.textContent = 'Entrance Passes';
      }
      container.appendChild(passesHeading);

      var passTable = document.createElement('table');
      passTable.setAttribute('class', 'table table-sm');

      var passTableHeader = document.createElement('thead');
      passTableHeader.innerHTML = passTableHeaderTemplate;
      passTable.appendChild(passTableHeader);

      var passTableBody = document.createElement('tbody');

      passes.forEach(function (pass) {
        var passRow = document.createElement('tr');

        var cellType = document.createElement('th');
        cellType.setAttribute('scope', 'row');

        if (pass.informationURL) {
          var cellTypeLink = document.createElement('a');
          cellTypeLink.setAttribute('href', pass.informationURL);
          cellTypeLink.textContent = pass.getTitle();
          cellType.appendChild(cellTypeLink);
        } else {
          cellType.textContent = pass.getTitle();
        }

        var cellCost = document.createElement('td');
        var passCurrency = document.createElement('meta');
        passCurrency.setAttribute('itemprop', 'priceCurrency');
        passCurrency.setAttribute('content', 'USD');
        cellCost.appendChild(passCurrency);
        cellCost.appendChild(document.createTextNode('$'));

        var passPrice = document.createElement('span');
        passPrice.setAttribute('itemprop', 'price');
        passPrice.textContent = formatter.format(pass.getCost()).replace('$', '');
        cellCost.appendChild(passPrice);

        passRow.appendChild(cellType);
        passRow.appendChi

      passTable.appendChild(passTableBody);
      container.appendChild(passTable);
    }

    return container;
  }

  function truncate(container, block) {
    var content = container.querySelector('.' + block + '__Content');
    var button = container.querySelector('.' + block + '__TruncateButton');
    var buttonText = container.querySelector('.' + block + '__TruncateButtonText');
    if (content && button && buttonText && container.offsetHeight > 400) {
      button.setAttribute('armore';
      content.classList.add('truncated');
      button.addEventListener('click', function () {
        toggle(button, buttonText, content);
      });
      content.addEventListener('click', function () {
        if (button.getAttribute('aria-expanded').toLowerCase() === 'false') {
          toggle(button, buttonText, content);
        }
      });
    } else if (button) {
      button.remove();
    }
  }
  if (button.getAttribute('aria-expanded') === 'false') {
      var transitionListener = content.addEventListener('transitionend', function () {
        content.style.maxHeight = '';
      }, { once: true });
      button.setAttribute('aria-expanded', 'true');
      buttonText.textContent = 'Show less';
      content.style.maxHeight = content.scrollHeight + 'px';
  e('aria-expanded', 'false');
      buttonText.textContent = 'Show more';
      content.style.maxHeight = content.scrollHeight + 'px';
      requestAnimationFrame(function () {
        content.classList.add('truncated');
        content.style.maxHeight = '';
      });
    }
  }

  $(document).ready(function () {
    var reservationContainers = document.querySelectorAll('.FeesPassesReservationsItem');
    reservationContainers.forEach(function (container) {
      truncate(container, 'FeesPassesReservationsItem');
    });

    var passContainers = document.querySelectorAll('.FeesPassesPassesItem');
    passContainers.forEach(function (container) {
      truncate(container, 'FeesPassesPasse = [];

    if (Array.isArray(data.fees)) {
      /**
       * If a park's fee structure isn't entirely per person, the Commercial
       * Per Person fee should be rolled into the Commercial Sedan fee.
       */
      var commercialSedan = data.fees.filter(function (f) {
        return f.entranceFeeType === FEE_TYPES.COMMERCIAL_SEDAN;
      }).shift();

      var commercialVan = data.fees.filter(function (f) {
        return f.entranceFeeType === FEE_TYPES.COMMERCIAL_VAN;
      }).shift();

      var commercialVanCost = commercialVan ? commercialVan.cost : 0;

      var commercialPerPerson = data.fees.filter(function (f) {
        return f.entranceFeeType === FEE_TYPES.COMMERCIAL_PER_PERSON;
      }).shift();

      var commercialPerPersonCost = commercialPerPerson ? commercialPerPerson.cost : 0;

      data.fees.filter(function (f) {
        return f.entranceFeeType.indexOf('Timed Entry Reservation') === -1;
      }).forEach(function (f) {
        var feeData = f;

        if (f.entranceFeeType.indexOf('Per Person') !== -1) {
          feeData.perPersonCost = feeData.cost;
          feeData.cost = 0;
        }

        if (commercialSedan && commercialVan && commercialPerPerson) {
          if (f === .maxCost = commercialVanCost;
            fees.push(new EntranceFee(feeData));
          } else if (f === commercialPerPerson) {
            // Skip, this is rolled into the Commercial Sedan fee
          } else {
            fees.push(new EntranceFee(feeData));
          }
        } else {
          fees.push(new EntranceFee(feeData));
        }
      });

      fees.sort(function (a, b) {
        if (FEE_SORT_WEIGHTS[a.type] < FEE_SORT_WEIGHTS[b.type]) return -1;
        if (FEE_SORT_WEIGHTS[a.type] > FEE_SORT_WEIGHTS[b.type]) return 1;
        return 0;
      });

      timedEntry = data.fees.filter(function (f) {
        return f.entranceFeeType.indexOf('Timed Entry Reservation') !== -1;
      }).map(function (f) {
        return new TimedEntryReservation(f);
      });
    }

    var passes = Array.isArray(data.passes)
      ? data.passes.map(function (v) { return new EntrancePass(v) })
      : [];

    this.renderTables = function (element) {
      if (!element) {
        var placeholder = document.createElement('div');
        placeholder.innerHTML = tableTemplate;
        element = placeholder.firstElementChild;
      }

      return renderTables(element, fees, passes, timedEntry);
    };

    this.render = function (element) {
      if (!element) {
        element = document.createElement('div');
      }

      if (parseInt(data.isFeeFreePark) === 1) {
        var feeFreeHeading = document.createElement('p');
        feeFreeHeading.setAttribute('class', 'h4');
        feeFreeHeading.textContent = 'Entrance Fee-free';
        element.appendChild(feeFreeHeading);
        var feeFreeMessage = document.createElement('p');
        feeFreeMessage.textContent = 'This site is fee-free year-round. No entrance fee or pass is required.';
        element.appendChild(feeFreeMessage);
      }

      if (parseInt(data.isParkingFeePossible) === 1) {
        var parkingFeeHeading = document.createElement('p');
        parkingFeeHeading.setAttribute('class', 'h4');
        parkingFeeHeading.textContent = 'Parking/Transportation';
        element.appendChild(parkingFeeHeading);
        var parkingFeeMessage = document.createElement('p');
        parkingFeeMessage.textContent = 'Parking, shuttle, or other transportation-related fees may apply.';
        element.appendChild(parkingFeeMessage);

        if (data.parkingDetailsUrl !== undefined && data.parkingDetailsUrl.length > 0) {
          var parkingFeeLinkContainer = document.createElement('p');
          var parkingFeeLink = document.createElement('a');
          parkingFeeLink.setAttribute('href', data.parkingDetailsUrl);
          parkingFeeLink.textContent = 'More about parking/transportation fees';
          parkingFeeLinkContainer.appendChild(parkingFeeLink);
          element.appendChild(parkingFeeLinkContainer);
        }
      }

      if (fees.length > 0 || passes.length > 0) {
        element.appendChild(this.renderTables());
      } else if (parseInt(data.isFeeFreePark) !== 1) {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = 'No entrance fee data is available for this site.';
        element.appendChild(errorMessage);
      }

      return element;
    };
  };

  // Expose functions for testing
  NPS.EntranceFee = EntranceFee;
  NPS.TimedEntryReservation = TimedEntryReservation;
  NPS.EntrancePass = EntrancePass;
})(jQuery);

/* Globals: NPS */

'use strict';
(function (NPS) {
  var dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var HOLIDAYS = {
    NEW_YEARS_DAY: "New Year's Day",
    BDAY_MLK_JR: "Birthday of Martin Luther King, Jr.",
    WASHINGTONS_BDAY: "Washington's Birthday",
    MEMORIAL_DAY: "Memorial Day",
    JUNETEENTH: "Juneteenth National Independence Day",
    INDEPENDENCE_DAY: "Independence Day",
    LABOR_DAY: "Labor Day",
    COLUMBUS_DAY: "Columbus Day",
    VETERANS_DAY: "Veterans Day",
    THANKSGIVING_DAY: "Thanksgiving Day",
    CHRISTMAS_DAY: "Christmas Day"
  };

  var staticHolidays = {
    [HOLIDAYS.NEW_YEARS_DAY]: "January 1",
    [HOLIDAYS.JUNETEENTH]: "June 19",
    [HOLIDAYS.INDEPENDENCE_DAY]: "July 4",
    [HOLIDAYS.VETERANS_DAY]: "November 11",
    [HOLIDAYS.CHRISTMAS_DAY]: "December 25"
  };

  // Values are zero-indexed month, one-indexed week, zero-indexed day of week
  var variableHolidays = {
    [HOLIDAYS.BDAY_MLK_JR]: [0,3,1], //3rd Mon in Jan
    [HOLIDAYS.WASHINGTONS_BDAY]: [1,3,1], //3rd Mon in Feb
    [HOLIDAYS.MEMORIAL_DAY]: [4,5,1], //Last Mon in May
    [HOLIDAYS.LABOR_DAY]: [8,1,1], //1st Mon in Sept
    [HOLIDAYS.COLUMBUS_DAY]: [9,2,1], //2nd Mon in Oct
	  [HOLIDAYS.THANKSGIVING_DAY]: [10,4,4] //4th Thu in Nov
  };

  // This should mirror the corresponding template in theme/views/partials
  var template = '<div class="OperatingHours"><div class="OperatingHours__Weekly"><p class="OperatingHours__Today"><span class="OperatingHours__Today__Status"></span></p><div class="OperatingHours__ActiveExceptions"></div></div><div class="OperatingHours__Description"><p class="OperatingHours__Heading">Description</p></div><div class="OperatingHours__Exceptions"><p class="OperatingHours__Heading">Closures &amp; Seasonal Exceptions</p></div></div>';

  /**
   * @param {number} year
   * @param {number} month - zero-indexed month
   * @param {number} week - one-indexed week in month
   * @param {number} day - zero-indexed day in week
   * @returns {Date}
   */
  function getVariableDate(year, month, week, day) {
    var date = new Date(year, month, 1, 0, 0, 0, 0);
    var add = (day - date.getDay() + 7) % 7 + (week - 1) * 7;

    // make sure that we stay in the same month
    do {
      date.setMonth(month);
      date.setDate(1 + add);
      add -= 7;
    } while (date.getMonth() != month);

    return date;
  }

  /**
   * Returns a Date instance representing the holiday date in the given
   * year parameter, or null if the holidayName parameter is invalid.
   *
   * @param {string} holidayName
   * @param {number} year
   * @returns {Date|null}
   */
  function getHolidayDate(holidayName, year) {
    if (holidayName === undefined) throw new Error("Parameter holidayName is required");
    if (year === undefined) throw new Error("Parameter year is required");

    var holidayMonth;
    var holidayDay;
    var staticHoliday;
    var variableHoliday;

    // Standardize formatting for holidays with alternate names 
    if (holidayName === "New Years Day" || holidayName === "New Year\u2019s Day") {
      holidayName = HOLIDAYS.NEW_YEARS_DAY;
    } else if (
      holidayName === "Martin Luther King Jr. Day" ||
      holidayName === "Martin Luther King, Jr. Day" ||
      holidayName === "Birthday of Martin Luther King Jr."
    ) { 
      holidayName = HOLIDAYS.BDAY_MLK_JR;
    } else if (holidayName === "Washington\u2019s Birthday") {
      holidayName = HOLIDAYS.WASHINGTONS_BDAY;
    } else if (holidayName === "Juneteenth") {
      holidayName = HOLIDAYS.JUNETEENTH;
    } else if (holidayName === "Veteran's Day" || holidayName === "Veteran\u2019s Day") {
      holidayName = HOLIDAYS.VETERANS_DAY;
    } else if (holidayName === "Thanksgiving") {
      holidayName = HOLIDAYS.THANKSGIVING_DAY;
    } else if (holidayName === "Christmas") {
      holidayName = HOLIDAYS.CHRISTMAS_DAY;
    }

    if (staticHolidays[holidayName] !== undefined) {
      holidayMonth = monthNames.indexOf(staticHolidays[holidayName].split(' ')[0]);
      holidayDay = parseInt(staticHolidays[holidayName].split(' ')[1]);
      return new Date(year, holidayMonth, holidayDay, 0, 0, 0, 0);
    } else if (variableHolidays[holidayName] !== undefined) {
      return getVariableDate(
        year,
        variableHolidays[holidayName][0],
        variableHolidays[holidayName][1],
        variableHolidays[holidayName][2]
      );
    } else {
		  return null;
    }
  }

  /**
   * !!! DEPENDS ON CURRENT TIME !!!
   *
   * Returns a Date instance representing the next valid (i.e., greater
   * than or equal to today) date for the holiday or null if the
   * holidayName parameter is invalid. Override the reference date
   * with optional parameter `today`.
   *
   * @param {string} holidayName
   * @param {Date} today
   * @returns {Date|null}
   */
  function getNextHolidayDate(holidayName, today) {
    if (holidayName === undefined) throw new Error("Parameter holidayName is required");

    // Clone the parameter so we don't alter the original Date object
    today = (today instanceof Date)
      ? new Date(today.valueOf())
      : new Date();

    today.setHours(0, 0, 0, 0);

    var holidayDate = getHolidayDate(holidayName, today.getFullYear());
    return (today > holidayDate)
      ? getHolidayDate(holidayName, today.getFullYear() + 1)
      : holidayDate;
  }

  /**
   * @constructor
   * @param {object} props - The hours data
   * @param {integer} props.isClosed - Actually a boolean
   * @param {integer} props.is_closed - Actually a boolean
   * @param {integer} props.sunriseOpen - Actually a boolean
   * @param {integer} props.sunrise_open - Actually a boolean
   * @param {integer} props.sunriseClose - Actually a boolean
   * @param {integer} props.sunrise_close - Actually a boolean
   * @param {string} props.timeOpen
   * @param {string} props.time_open
   * @param {string} props.timeClose
   * @param {string} props.time_close
   */
  function Hours(props) {
    var sunriseOpen = props.sunriseOpen !== undefined ? props.sunriseOpen : props.sunrise_open;
    var timeOpen = props.timeOpen !== undefined ? props.timeOpen : props.time_open;
    var sunsetClose = props.sunsetClose !== undefined ? props.sunsetClose : props.sunset_close;
    var timeClose = props.timeClose !== undefined ? props.timeClose : props.time_close;
    var isClosed = props.isClosed !== undefined ? props.isClosed : props.is_closed;

    this.openTime = (parseInt(sunriseOpen) === 1)
      ? 'Sunrise'
      : timeOpen;

    this.closeTime = (parseInt(sunsetClose) === 1)
      ? 'Sunset'
      : timeClose;

    this.closed = (parseInt(isClosed) === 1) || (this.openTime.length === 0);

    this.openAllDay = (
      !this.closed &&
      this.openTime === '12:00 AM' &&
      this.closeTime === '11:59 PM'
    );

    this.openTimeRange = !this.closed
      ? (this.openAllDay ? '24 hours' : this.openTime + '\u2013' + this.closeTime)
      : null;

    return this;ing} props.operatingScheduleID
   * @param {string} props.description
   * @param {Hours[]} hours
   * @param {ScheduleException[]} exceptions
   */
  function Schedule(props, hours, exceptions) {
    this.id = (props.id !== undefined)
      ? props.id
      : (props.operatingScheduleID !== undefined ? props.operatingScheduleID : "");
    this.description = props.description;
    this.hours = hours;
    this.exceptions = exceptions || [];
    return this;
  }

  /**
   * @param {Date} date
   * @returns {ScheduleException[]}
   */
  Schedule.prototype.getActiveExceptions = function (date) {
    return this.exceptions.filter(function (exception) {
      return exception.isActive(date);
    });
  };

  /**
   * !!! CAN DEPEND ON CURRENT TIME !!!
   *
   * @param {Date} date
   * @returns {Hours}
   */
  Schedule.prototype.getHours = function (date) {
    var givenDate = (date instanceof Date)
      ? new Date(date.valueOf())
      : new Date();
    var givenDay = givenDate.getDay();

    var activeExceptions = this.getActiveExceptions(givenDate);

    if (activeExceptions.length > 0) {
      // Just use the last active exception
      var activeException = activeExceptions.pop();
      return activeException.hours[givenDay];
    }

    return this.hours[givenDay];
  };

  /**
   * @constructor
   * @param {object} props - The exception data
   * @param {string} props.id
   * @param {string} props.operatingScheduleExceptionID
   * @param {string} props.name
   * @param {string} props.description
   * @param {string} props.date_start - A date string in Month Day format
   * @param {string} props.dateStart - A date string in Month Day format 
   * @param {string} props.date_end - A date string in Month Day format 
   * @param {string} props.dateEnd - A date string in Month Day format 
   * @param {string} props.holiday_start - A holiday name (and HOLIDAYS constant)
   * @param {string} props.holidayStart - A holiday name (and HOLIDAYS constant)
   * @param {string} props.holiday_end - A holiday name (and HOLIDAYS constant)
   * @param {string} props.holidayEnd - A holiday name (and HOLIDAYS constant)
   * @param {Hours[]} hours
   */
  function ScheduleException(props, hours) {
    this.id = (props.id !== undefined)
      ? props.id
      : (props.operatingScheduleExceptionID !== undefined ? props.operatingScheduleExceptionID : "");
    this.name = (props.name !== undefined)
      ? props.name
      : "";
    this.description = (props.description !== undefined)
      ? props.description
      : "";
    this.dateStart = (props.dateStart !== undefined)
      ? props.dateStart
      : (props.date_start !== undefined ? props.date_start : "");
    this.dateEnd = (props.dateEnd !== undefined)
      ? props.dateEnd
      : (props.date_end !== undefined ? props.date_end : "");
    this.holidayStart = (props.holidayStart !== undefined)
      ? props.holidayStart
      : (props.holiday_start !== undefined ? props.holiday_start : "");
    this.holidayEnd = (props.holidayEnd !== undefined)
      ? props.holidayEnd
      : (props.holiday_end !== undefined ? props.holiday_end : "");
    this.hours = Array.isArray(hours) ? hours : [];
    return this;
  }

  /**
   * !!! CAN DEPEND ON CURRENT TIME !!!
   *
   * Returns a Date object representing the start of the exception instance
   * beginning in the given year, or the current year if none is provided.
   *
   * @param {number} startYear
   * @returns {Date}
   */
  ScheduleException.prototype.getStartDate = function (startYear) {
    var year = startYear || (new Date()).getFullYear();

    if (this.holidayStart) {
      return getHolidayDate(this.holidayStart, year);
    } else {
      // Days may be in DD format, reformat to D
      var startMonth = this.dateStart.split(' ')[0];
      var startDay = parseInt(this.dateStart.split(' ')[1]);

      return new Date(year, monthNames.indexOf(startMonth), startDay, 0, 0, 0, 0);
    }
  };

  /**
   * !!! CAN DEPEND ON CURRENT TIME !!!
   *
   * Returns a Date object representing the end of the exception instance
   * beginning in the given year, or the current year if none is provided.
   *
   * @param {number} startYear
   * @returns {Date}
   */
  ScheduleException.prototype.getEndDate = function (startYear) {
    var year = startYear || (new Date()).getFullYear();
    var startDate = this.getStartDate(year);
    var sameYearEnd;
    var endMonth;
    var endDay;
    var endDate;

    if (this.holidayEnd) {
      endDate = getHolidayDate(this.holidayEnd, year);
      endDate.setHours(23, 59, 59, 999);
    } else {
      // Days may be in DD format, reformat to D
      endMonth = this.dateEnd.split(' ')[0];
      endDay = parseInt(this.dateEnd.split(' ')[1]);
      endDate = new Date(year, monthNames.indexOf(endMonth), endDay, 23, 59, 59, 999);
    }

    // Check if this exception begins in one year and ends in the next.
    if (endDate < startDate) {
      if (this.holidayEnd) {
        /**
         * A variable holiday could have a differnt date next year and must
         * be recalculated.
         */
        endDate = getHolidayDate(this.holidayEnd, year + 1);
        endDate.setHours(23, 59, 59, 999);
      } else {
        endDate.setFullYear(year + 1);
      }
    }

    return endDate;
  };

  /**
   * !!! CAN DEPEND ON CURRENT TIME !!!
   *
   * If the year parameter is provided, returns the date range for the
   * exception instance beginning in that year. If no year parameter is
   * provided, the first valid (i.e., currently active or future)
   * exception instance is used.
   *
   * @returns {string}
   */
  ScheduleException.prototype.getDateRange = function (startYear) {
    if (startYear === undefined) {
      var today = new Date();
      var currentYear = today.getFullYear();

      /**
       * Compare the current date to the date range of the exception
       * instance beginning in the current year.
       */
      if (today < this.getStartDate(currentYear)) {
        if (today > this.getEndDate(currentYear - 1)) {
          /**
           * The exception instance beginning in the previous year has
           * passed. Use the instance beginning in this year.
           */
          startYear = currentYear;
        } else {
          /**
           * The exception instance beginning in the previous year is
           * still active. Use that instance.
           */
          startYear = currentYear - 1;
        }
      } else if (today <= this.getEndDate(currentYear)) {
        /**
         * The exception instance beginning in this year is active.
         * Use this instance.
         */
        startYear = currentYear;
      } else {
        /**
         * The exception instance beginning in this year has passed.
         * Use the instance beginning next year.
         */
        startYear = currentYear + 1;
      }
    }

    var startDate = this.getStartDate(startYear);
    var startDateString = monthNames[startDate.getMonth()] + ' ' + startDate.getDate();
    var endDate = this.getEndDate(startYear);
    var endDateString = monthNames[endDate.getMonth()] + ' ' + endDate.getDate();
    return startDateString + '\u2013' + endDateString;
  };

  /**
   * !!! DEPENDS ON CURRENT TIME !!!
   *
   * Determines if the given exception is active by comparing it to
   * the current or given date.
   *
   * @param {Date} date
   * @returns {boolean}
   */
  ScheduleException.prototype.isActive = function (date) {
    // Clone the parameter so we don't alter the original Date object
    var givenDate = (date instanceof Date)
      ? new Date(date.valueOf())
      : new Date();

    /**
     * Compare the given date to the date range of the exception
     * instance beginning in the current year.
     */
    if (givenDate < this.getStartDate(givenDate.getFullYear())) {
      if (
        givenDate >= this.getStartDate(givenDate.getFullYear() - 1) &&
        givenDate <= this.getEndDate(givenDate.getFullYear() - 1)
      ) {
        /**
         * This exception spans two years, and the instance beginning in the
         * previous year is active.
         */
        return true;
      } else {
        return false;
      }
    } else {
      return givenDate <= this.getEndDate(givenDate.getFullYear());
    }
  };

  function HolidayScheduleException(props, hours) {
    ScheduleException.call(this, props, hours);
    return this;
  }
  HolidayScheduleException.prototype = Object.create(ScheduleException.prototype);
  HolidayScheduleException.prototype.constructor = HolidayScheduleException;

  /**
   * @param {ScheduleException} exception
   * @returns {HTMLDivElement}
   */
  function exceptionElement(exception) {
    var exceptionContainer = document.createElement('div');
    exceptionContainer.setAttribute('class', 'OperatingHours__Exception');
    exceptionContainer.setAttribute('id', 'osException' + exception.id);

    var exceptionTitle = document.createElement('p');
    exceptionTitle.setAttribute('class', 'OperatingHours__Exception__Title');
    exceptionTitle.textContent = exception.name;
    exceptionContainer.appendChild(exceptionTitle);

    var exceptionRange = document.createElement('p');
    exceptionRange.setAttribute('class', 'OperatingHours__Exception__DateRange');
    exceptionRange.textContent = exception.getDateRange();

    exceptionContainer.appendChild(exceptionRange);

    if (exception.description.length > 0) {
      var exceptionDescription = document.createElement('p');
      exceptionDescription.setAttribute('class', 'OperatingHours__Exception__Description');
      exceptionDescription.textContent = exception.description;
      exceptionContainer.appendChild(exceptionDescription);
    }

    if (exception.hours.length > 0) {
      var hoursTableElement = document.createElement('div');
      exceptionContainer.appendChild(hoursTable(exception.hours));
    }

    return exceptionContainer;
  }

  /**
   * @param {Hours[]} hours
   * @returns {HTMLUListElement}
   */
  function hoursTable(hours) {
    var element = document.createElement('ul');
    element.setAttribute('class', 'HoursTable');

    hours.forEach(function (h, i) {
      var dayContainer = document.createElement('li');

      var dayElement = document.createElement('span');
      dayElement.setAttribute('class', 'HoursTable__Day');
      dayElement.textContent = dayOfWeek[i];
      dayContainer.appendChild(dayElement);

      var timeElement = document.createElement('span');
      timeElement.setAttribute('class', 'HoursTable__Time');

      if (h.closed) {
        timeElement.setAttribute('class', 'HoursTable__Time Closed');
        timeElement.textContent = 'Closed';
      } else if (h.openAllDay) {
        timeElement.textContent = 'Open 24 hours';
      } else {
        timeElement.textContent = h.openTimeRange;
      }

      dayContainer.appendChild(timeElement);
      element.appendChild(dayContainer);
    });

    return element;
  }

  /**
   * @param {Schedule} schedule
   * @returns {HTMLDivElement}
   */
  function renderHolidaySchedule(schedule) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var range = (today.getMonth() === 0 && today.getDate() === 1)
      ? currentYear
      : currentYear + '\u2013' + (currentYear + 1);

    var holidayContainer = document.createElement('div');
    holidayContainer.setAttribute('class', 'OperatingHours__Exception OperatingHours__Exception--Holidays');

    var title = document.createElement('p');
    title.setAttribute('class', 'OperatingHours__Exception__Title');
    title.textContent = 'Holidays';
    holidayContainer.appendChild(title);

    var rangeDates = document.createElement('p');
    rangeDates.setAttribute('class', 'OperatingHours__Exception__DateRange');
    rangeDates.textContent = range;
    holidayContainer.appendChild(rangeDates);

    var tableContainer = document.createElement('div');
    tableContainer.setAttribute('class', 'HolidayHoursTable');

    var tableElement = document.createElement('table');
    tableElement.setAttribute('cellspacing', '0');
    tableElement.setAttribute('cellpadding', '3');
    tableElement.setAttribute('width', '100%');

    var thead = document.createElement('thead');

    var theadRow = document.createElement('tr');
    theadRow.setAttribute('class', 'tablerowgray');

    var th1 = document.createElement('th');
    th1.textContent = 'Holiday';
    theadRow.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent = 'Date';
    theadRow.appendChild(th2);

    var th3 = document.createElement('th');
    th3.textContent = 'Hours';
    theadRow.appendChild(th3);

    thead.appendChild(theadRow);

    var tbody = document.createElement('tbody');

    Object.values(HOLIDAYS).forEach(function (h) {
      var holidayDate = getNextHolidayDate(h);
      var tr = document.createElement('tr');

      var nameTd = document.createElement('th');
      nameTd.setAttribute('class', 'Holiday_Name');
      nameTd.setAttribute('scope', 'row');
      nameTd.textContent = h;
      tr.appendChild(nameTd);

      var valueTd = document.createElement('td');
      valueTd.setAttribute('class', 'Holiday_Date');
      valueTd.textContent = monthNames[holidayDate.getMonth()] + ' ' + holidayDate.getDate() + ', ' + holidayDate.getFullYear();
      tr.appendChild(valueTd);

      var statusTd = document.createElement('td');
      var holidayHours = schedule.getHours(holidayDate);

      if (!holidayHours.closed) {
        statusTd.setAttribute('class', 'Holiday_Status Holiday_Status--open');
        statusTd.textContent = (holidayHours.openTimeRange === '24 hours')
          ? 'Open 24 hours'
          : holidayHours.openTimeRange;
      } else {
        statusTd.setAttribute('class', 'Holiday_Status Holiday_Status--closed');
        statusTd.setAttribute('style', 'font-weight: bold');
        statusTd.textContent = 'Closed';
      }

      tr.appendChild(statusTd);
      tbody.appendChild(tr);
    });

    tableElement.appendChild(tbody);
    tableElement.appendChild(thead);
    tableContainer.appendChild(tableElement);
    holidayContainer.appendChild(tableContainer);

    return holidayContainer;
  }

  /**
   * @param {Schedule} os
   * @param {HTMLDivElement} container
   * @return {HTMLDivElement}
   */
  function render(schedule, container) {
    var hours = schedule.getHours();

    var description = container.querySelector('.OperatingHours__Description');
    if (description && schedule.description) {
      var descriptionText = document.createElement('p');
      descriptionText.textContent = schedule.description;
      description.appendChild(descriptionText);
    } else if (description) {
      description.remove();
    }

    var today = container.querySelector('.OperatingHours__Today');

    if (today) {
      var openOrClosed = today.querySelector('.OperatingHours__Today__Status');
      if (openOrClosed) {
        openOrClosed.setAttribute('class',  'OperatingHours__Today__Status ' + (hours.closed ? 'Closed' : 'Open'));
        openOrClosed.setAttribute('id', 'openClosed_' + schedule.id);
        if (!hours.closed) {
          openOrClosed.textContent = 'Open today:';
        } else {
          openOrClosed.textContent = 'Closed today';
        }
      }

      if (!hours.closed) {
        var openRange = document.createElement('span');
        openRange.setAttribute('class', 'OperatingHours__Today__TimeRange');
 e.textContent = hours.openTimeRange;
        today.appendChild(document.createTextNode(ange);
      }
    }

    var currentWeeklyContainer = container.querySelector('.OperatingHours__Weekly');
    if (currentWeeklyContainer) {
      currentWeeklyContainer.appendChild(hoursTable(schedule.hours));
    }

    var activeExceptionContainer = container.querySelector('.OperatingHours__ActiveExceptions');
    var exceptionHoursContainer = container.querySelector('.OperatingHours__Exceptions');
    var exceptionElements = [renderHolidaySchedule(schedule)].concat(
      schedule.exceptions.filter(function (e) {
        return !(e instanceof HolidayScheduleException);
      }).map(exceptionElement)
    );

    var exceptionElementsA = exceptionElements.filter(function (e, i) { return i % 2 === 0 });
    var exceptionElementsB = exceptionElements.filter(function (e, i) { return i % 2 !== 0 });

    exceptionElementsA.forEach(function (exceptionElement, i) {
      var row = document.createElement('div');
      row.setAttribute('class', 'row');

      var colA = document.createElement('div');
      colA.setAttribute('class', 'col-sm-6');

      colA.appendChild(exceptionElement);
      row.appendChild(colA);

      if (exceptionElementsB[i]) {
        var colB = document.createElement('div');
        colB.setAttribute('class', 'col-sm-6');

        colB.appendChild(exceptionElementsB[i]);
        row.appendChild(colB)
      }

      exceptionHoursContainer.appendChild(row);
    });

    var activeExceptions = schedule.getActiveExceptions();
    activeExceptions.forEach(function (exception) {
      var activeException = document.createElement('p');
      activeException.setAttribute('class', 'OperatingHours__ExceptionAlert');

      var activeExceptionHeading = document.createElement('span');
      activeExceptionHeading.setAttribute('class', 'OperatingHours__ExceptionAlert__Heading');
      activeExceptionHeading.textContent = 'Active Exception';
      activeException.appendChild(activeExceptionHeading);

      var activeExceptionName = document.createElement('span');
      activeExceptionName.setAttribute('class', 'OperatingHours__ExceptionAlert__Name');

      var activeExceptionLink = document.createElement('a');
      activeExceptionLink.setAttribute('href', '#osException' + exception.id);
      activeExceptionLink.textContent = exception.name;
      activeExceptionName.appendChild(activeExceptionLink);
      activeException.appendChild(activeExceptiotes = document.createElement('span');
      activeExceptionDates.setAttribute('class', 'OperatingHours__ExceptionAlert__DateRange');
      activeExceptionDates.textContent = exception.getDateRange();

      activeException.appendChild(activeExceptionDates);
      activeExceptionContainer.appendChild(activeException);
    })

    return container;
  }

  NPS.OperatingHours = function (os) {
    var hours = Array.isArray(os.hours)
      ? os.hours.map(function (h) { return new Hours(h); })
      : [];
    var exceptions = Array.isArray(os.exceptions)
      ? os.exceptions.map(function (e) {
          var hours = Array.isArray(e.schedule)
            ? e.schedule.map(function (h) { return new Hours(h); })
            : [];
          return (e.holiday_start && e.holiday_start === e.holiday_end)
            ? new HolidayScheduleException(e, hours)
            : new ScheduleException(e, hours);
        })
      : [];
    this.os = new Schedule(os, hours, exceptions);

    this.render = function (element) {
      if (!element) {
        var placeholder = document.createElement('div');
        placeholder.innerHTML = template;
        element = placeholder.firstElementChild;
      }

      return render(this.os, element);
    };

    this.getStatus = function () {
      var hours = this.os.getHours();
      return hours.closed ? 'Closed' : 'Open';
    };
  };

  // Expose functions for testing
  NPS.getHolidayDate = getHolidayDate;
  NPS.getNextHolidayDate = getNextHolidayDate;
  NPS.Hours = Hours;
  NPS.Schedule = Schedule;
  NPS.ScheduleException = ScheduleException;
  NPS.HolidayScheduleException = HolidayScheduleException;
})(NPS);

'use strict';
(function ($) {
  $(document).on('ready', function () {
    $('.panel-collapse').on('shown.bs.collapse', function (e) {

      if ($(this).data('noscroll')!=1){
      var panel = $(this).closest('.panel');
      $('html,body').animate({
        scrollTop: panel.offset().top
      }, 500);
      }
      // reset noscroll data
      $(this).data('noscroll',0);
    });
  });
})(jQuery);
'use strict';
(function (NPS, $) {
  function alertIsActive(a) {
    var today = new Date();

    // if alert structure has no start date key in it, pass it along as is
    if (typeof a.FIC_start_date == 'undefined') {
      return a;
    }

    // Otherwise we have date keys with which to work, so set default start/end times
    if (a.FIC_start_date.length) {
      var start_date  = new Date( a.FIC_start_date.replace( " ", "T" ) );
      start_date.setHours( 0 );
      start_date.setMinutes( 0 );
    }

    if (a.FIC_end_date.length) {
      var end_date  = new Date( a.FIC_end_date.replace( " ", "T" ) );
      end_date.setHours( 23 );
      end_date.setMinutes( 59 );
    }

    // Next we return an alert, unless it has a future start date or has already expired

    // if alert has both start and end dates, check for both future start date and expiration
    if ( a.FIC_start_date.length && a.FIC_end_date.length ) {
      if ( start_date <= today && end_date >= today ) {
        return a;
      }
    }

    // if the alert has only a start date, check for only future start date
    if ( a.FIC_start_date.length && a.FIC_end_date.length == 0 ) {
      if ( start_date <= today ) {
        return a;
      }
    }

    // if alert has only an end date
    if ( a.FIC_start_date.length == 0 && a.FIC_end_date.length ) {
      if ( end_date >= today ){
        return a;
      }
    }

    // if there is no start AND no end date, just return it as is
    if (a.FIC_start_date.length == 0 && a.FIC_end_date.length == 0){
      return a;
    }
  }

  function renderAlert(type, v, index, siteCode) {
    var closureIcon = '<svg aria-hidden="true" class="icon" title="' + NPS.utility.getTranslation("Alert Level Park Closure") + '" role="img">';
    closureIcon += '<use xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#alert-closure"></use>';
    closureIcon += '</svg>';

    var dangerIcon = '<svg aria-hidden="true" class="icon" title="' + NPS.utility.getTranslation("Alert Level danger") + '" role="img">';
    dangerIcon += '<use xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#alert-danger"></use>';
    dangerIcon += '</svg>';

    var listItem = document.createElement('li');
    listItem.setAttribute('class', 'Alert-item Alert-' + type);
    listItem.innerHTML = type === 'closure' ? closureIcon : dangerIcon;

    var itemContent = document.createElement('div');
    itemContent.setAttribute('class', 'Alert-itemContent');

    var heading = document.createElement('h4');
    heading.setAttribute('class', 'Alert-title');
    heading.innerHTML = decodeURIComponentSafe(v.FIC_title);
    itemContent.appendChild(heading);

    if (v.FIC_start_date.length) {
      var start_date  = new Date(v.FIC_start_date.replace(" ", "T"));
      var formatted_date = (start_date.getMonth() + 1) + '/' + start_date.getDate() + '/' + start_date.getFullYear();
      itemContent.appendChild(document.createTextNode('Date Posted: ' + formatted_date));
    }

    var anchor = document.createElement('a');
    anchor.setAttribute('class', 'AlertsNotification__ScreenReaderAnchor visually-hidden');
    anchor.setAttribute('tabindex', 0);
    anchor.innerHTML = 'Alert ' + (index + 1) + ', Severity ' + type + ', ' + decodeURIComponentSafe(v.FIC_title);
    itemContent.appendChild(anchor);

    var body = document.createElement('div');
    body.innerHTML = decodeURIComponentSafe(v.FIC_description);

    if (
      (v.FIC_internal_link.length > 0 || v.FIC_linkURL.length > 0) ||
      (
        v.FIC_road_closure_is_road_related !== undefined && 
        v.FIC_road_closure_is_road_related !== 'no' &&               
        v.FIC_road_closure_road_segment_id !== undefined &&
        v.FIC_road_closure_road_segment_id.length > 0 &&
        siteCode !== undefined &&
        siteCode.length > 0
      )
    ) {
      body.appendChild(document.createElement('br'));

      if (v.FIC_internal_link.length > 0 || v.FIC_linkURL.length > 0) {
        var moreLink = document.createElement('a');
        moreLink.setAttribute('class', 'Alert-link carrot-end');
        moreLink.setAttribute('title', decodeURIComponentSafe(v.FIC_title));
        moreLink.textContent = NPS.utility.getTranslation('More');
        moreLink.setAttribute('href', decodeURIComponentSafe(v.FIC_internal_link.length > 0 ? v.FIC_internal_link : v.FIC_linkURL));
        body.appendChild(moreLink);
      }

      if (
        v.FIC_road_closure_is_road_related !== undefined && 
        v.FIC_road_closure_is_road_related !== 'no' &&          
        v.FIC_road_closure_road_segment_id !== undefined &&
        v.FIC_road_closure_road_segment_id.length > 0 &&
        siteCode !== undefined &&
        siteCode.length > 0
      ) {
        var mapLink = document.createElement('a');
        mapLink.setAttribute('class', 'Alert-link carrot-end');
        mapLink.textContent = NPS.utility.getTranslation('View conditions on map');
        mapLink.setAttribute('href', '/' + siteCode + '/planyourvisit/conditions.htm');
        body.appendChild(mapLink);
      }
    }

    itemContent.appendChild(body);
    listItem.appendChild(itemContent);
    return listItem;
  }

  function renderAlertListHeader(type, text) {
    var closureSeverityHeader = document.createElement('h3');
    closureSeverityHeader.setAttribute('class', 'AlertsNotification__SeverityHeader AlertsNotification__SeverityHeader--' + type);
    closureSeverityHeader.textContent = NPS.utility.getTranslation(text);
    return closureSeverityHeader;
  }

  function renderAlerts(closureAlerts, dangerAlerts, siteCode) {
    var body = document.getElementById('AlertsNotificationBody');

    // if we have any danger alerts
    if (dangerAlerts.length > 0) {
      var dangerAlertList = document.createElement('ul');

      dangerAlerts.forEach(function (a, i) {
        dangerAlertList.appendChild(renderAlert('danger', a, i, siteCode));
      });

      body.appendChild(renderAlertListHeader('danger', 'Danger'));
      body.appendChild(dangerAlertList);
    }
	
    // if we have any closure alerts
    if (closureAlerts.length > 0) {
      var closureAlertList = document.createElement('ul');

      closureAlerts.forEach(function (a, i) {
        closureAlertList.appendChild(renderAlert('closure', a, i, siteCode));
      });

      body.appendChild(renderAlertListHeader('closure', 'Park Closures'));
      body.appendChild(closureAlertList);
    }

    // Move the more link back to the bottom
    var moreLink = document.querySelector('.AlertsNotification__MoreLinkContainer');
    if (moreLink) {
      body.appendChild(moreLink);
    }
  }

  // Show the number of active alerts in the UtilityNav
  function renderAlertsBadge(count) {
    var alertsBadge = document.querySelector('.UtilityNav__Alerts .UtilityNav-badge');
    if (alertsBadge) {
      alertsBadge.textContent = count;
      $(alertsBadge).show();
    }
  }

  function renderMoreLink(count) {
    var moreLink = document.getElementById('AlertsNotificationMoreLink');
    if (moreLink) {
      moreLink.textContent = count > 0
        ? count + ' ' + NPS.utility.getTranslation('more non-emergency alert notifications') + '...'
        : NPS.utility.getTranslation('more information on current conditions...');
    }
  }

  function getActiveAlerts(responseData) {
    if (!('CEDATA' in responseData && responseData.CEDATA.length > 0)) return [];
    return responseData.CEDATA.filter(alertIsActive);
  }

  // retrieve and parse cookie, to see if alerts have already been dismissed
  function hasBeenDismissed(siteCode) {
    var ca = document.cookie.split(';');
    var dismissed = false;

    for (var ci = 0; ci < ca.length; ci++) {
      var c = ca[ci];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf('alertDismiss' + siteCode + '=') != -1) {
        dismissed = true;
      }
    }

    return dismissed;
  }

  $(document).ready(function () {
    var container = document.getElementById('AlertsNotification');
    if (!container) return;

    // Don't show emergency alert notifications when full listurn container.remove(); 

    var siteCode = container.getAttribute('data-site-code');

    // Fetch the alert data
    var siteCodeSlug = siteCode.replace('/', '-');
    var jsonSrc = '/' + siteCode + '/nps-alerts-' + siteCodeSlug + '.json';
    var dt = new Date().getTime();

    $.getJSON(jsonSrc + '?dt=' + dt, function (responseData) {
      var activeAlerts = getActiveAlerts(responseData);

      if (activeAlerts.length > 0) renderAlertsBadge(activeAlerts.length);

      var closureAlerts = activeAlerts.filter(function (a) {
        return a.FIC_category === 'Park Closure';
      });

      var dangerAlerts = activeAlerts.filter(function (a) {
        return a.FIC_category === 'Danger';
      });

      var count = closureAlerts.length + dangerAlerts.length;

      if (count > 0 && !hasBeenDismissed(siteCode)) {
        $('.UtilityNav__Alerts').addClass('active');

        var statusMessage = container.querySelector('.AlertsNotification__Status');
        if (statusMessage) {
          statusMessage.textContent = count + ' alert notifications';
        }

        renderAlerts(closureAlerts, dangerAlerts, siteCode);
        renderMoreLink(activeAlerts.length - count);

        // Enable Bootstrap collapse
        var collapsibleContent = container.querySelector('.collapse');
        var collapser = new bootstrap.Collapse(collapsibleContent, { toggle: truunction() {
          collapser.hide();

          /**
           * if we have danger orokie
           */
          document.cookie = 'alertDismiss' + siteCode + '=1; path=/';
        });

        collapsibleContent.addEventListener('hidden.bs.collapse', function () {
          container.remove();
        });

        var callback = function () {
          if (document.location.hash === "") {
            var firstAlertAnchor = $('.AlertsNotification__ScreenReaderAnchor').first();
            collapsibleContent.addEventListener('shown.bs.collapse', function () {
              firstAlertAnchor.focus();
            });
          } else {
            collapsibleContent.addEventListener('shown.bs.collapse', function () {
              window.scrollBy(0, container.offsetHeight);
            });
          }
        };

        if (NPS.globalAlert.done && !document.querySelector('.ShutdownBanner')) {
          callback();
        } else if (!NPS.globalAlert.done) {
          window.addEventListener('nps.globalalertload', function (e) {
            if (!document.querySelector('.ShutdownBanner')) {
              callback();
            }
          });
        }
      } else {
        // If there are no active closure or danger alerts, skip rendering
        container.remove();
      }
    });
  });
})(NPS, jQuery);

(function ($, location) {
  var aggregated_alerts_json = [];
  var max_results = 20;
  var maxPagesToShow = 7;
  var currentPage = 1;
  var viewAll = false;
  var base_url = '/planyourvisit/alerts.htm';

  function objSort() {
    var args = arguments,
        array = Array.isArray(args[0]) ? args[0] : [],
        case_sensitive, keys_length, key, desc, a, b, i;

    if (typeof arguments[arguments.length - 1] === 'boolean') {
      case_sensitive = arguments[arguments.length - 1];
      keys_length = arguments.length - 1;
    } else {
      case_sensitive = false;
      keys_length = arguments.length;
    }

    return array.sort(function (obj1, obj2) {
      for (i = 1; i < keys_length; i++) {
        key = args[i];
        if (typeof key !== 'string') {
            desc = key[1];
            key = key[0];
            a = obj1[args[i][0]];
            b = obj2[args[i][0]];
        } else {
            desc = false;
            a = obj1[args[i]];
            b = obj2[args[i]];
        }

        if (case_sensitive === false && typeof a === 'string') {
            a = a.toLowerCase();
            b = b.else {
            if (a > b) return -1;
            if (a < b) return 1;
        }
      }
      return 0;
    });
  } //end of objSort() function

  function searchAlerts() {
    var filteredData = aggregated_alerts_json.slice();
    var params = {};
    var selectedStates = $('#form-state').val();
    var selectedTypes = $('#form-type')l && selectedStates.length > 0) {
      filteredData = filteredData.filter(function (item) {
        var match = false;
        item.state_code.forEach(function (stateCode) {
          if (selectedStates.indexOf(stateCode) >= 0) {
            match = true;
          }
        });
        return match;
      });
    }

    if (selectedTypes !== null && selectedTypes.length > 0) {
      filteredData = filteredData.filter(function (item) {
        return (selectedTypes.indexOf(item.category) >= 0);
      });
    }

    if (selectedParks !== null && selectedParks.length > 0) {
      filteredData = filteredData.filter(function (item) {
        return (selectedParks.indexOf(item.site_code) >= 0);
      });
    }

    if (filteredData.length > 0) {
      displaySearchResults(filteredData);
    } else {
      displayEmptyResults(selectedStates, selectedTypes, selectedParks);
    }

    renderPagination(filteredData.length);

    if (history.replaceState) {
      // Update URL
      if (Array.isArray(selectedStates) && selectedStates.length > 0) {
        params.s = selectedStates.join(',');
      }

      if (Array.isArray(selectedTypes) && selectedTypes.length > 0) {
        params.t = selectedTypes.join(',');
      }

      if (Array.isArray(selectedParks) && selectedParks.length > 0) {
        params.pk = selectedParks.join(',');
      }

      if (currentPage > 1) {
        params.p = currentPage;
      }

      if (viewAll) {
        params.v = 1;
      }

      if (Object.keys(params).length > 0) {
        var searchParams = new URLSearchParams(params);
        history.replaceState(params, '', base_url + "?" + searchParams.toString());
      } else {
        history.replaceState(null, '', base_url);
      }
    }
  }

  function displaySearchResults(search_results) {
    var total_results = search_results.length;
    var startIndex = viewAll ? 0 : (currentPage - 1) * max_results;
    var endIndex = viewAll
      ? total_results
      : Math.min((startIndex + max_results), total_results);

    var results = search_results.slice(startIndex, endIndex);

    $('#ListingHeaderResults').html('Showing ' + (startIndex + 1) + ' - ' + endIndex + ' of ' + total_results + ' results');
    $('#ListingResultsGrid').empty();
    $('#ResultsPagination').empty();

    if (results.length) {
      $( '#ListingResultsGrid' ).append( '<ul class="row"></ul>' );

      var previous_park = '';

      results.forEach(function (result) {
        if (previous_park == '' || previous_park !== result.site_code) {
          $('#ListingResultsGrid ul').append(renderParkHeading(result));
          previous_park = result.site_code;
        }

        $( '#ListingResultsGrid ul' ).append(renderResult(result));
      });
    }
  }

  function displayEmptyResults(selectedStates, selectedTypes, selectedParks) {
    $( '#ListingHeaderResults' ).html('Showing 0 - 0 of 0 results');
    $( '#ListingResultsGrid' ).empty();
    $( '#ResultsPagination' ).empty();

    var output = '<h3 class="FacetedSearch-inputHeader">You searched for parks that contain <u>all</u> of the following attributes:</h3>';

    if (Array.isArray(selectedStates) && selectedStates.length > 0) {
      output += '<h4><strong>State:</strong> ' + selectedStates.join(', ') + '</h4>';
    }

    if (Array.isArray(selectedTypes) && selectedTypes.length > 0) {
      output += '<h4><strong>Type:</strong> ' + selectedTypes.join(', ') + '</h4>';
    }

    if (Array.isArray(selectedParks) && selectedParks.length > 0) {
      output += '<h4><strong>Park:</strong> ' + selectedParks.join(', ') + '</h4>';
    }

    output += '<h3 class="FacetedSearch-inputHeader">Please try again using fewer search terms.</h3>';
    $( '#ListingResultsGrid' ).append( output );
  }

  function renderParkHeading(item) {
    var output = "";
    output += '<div class="AggregatedAlerts__ParkHeading">';
    output += '<a href="/' + item.site_code + '/planyourvisit/conditions.htm"><span class="park">' + item.park_name + '</span></a>';
    output += '<span class="state">' + item.state_name + '</span>';
    output += '</div>';
    return output;
  }

  function renderResult(item) {
    var result = "";

    result += '<li class="Alert-item Alert-' + item.category.toLowerCase() + '">';
    result += '<svg tabindex="-1" aria-hidden="true" class="icon" title="Alert Level ' + item.category.toLowerCase() + '" role="img">';
    result += '<use tabindex="-1" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#alert-'+ item.category.toLowerCase() + '"></use>';
    result += '</svg>';
    result += '<div class="Alert-itemContent">';
    result += '<a class="screen-reader" style="max-height:0px; overflow: hidden; display:block;" aria-hidden="false" id="anch_1056">';
    result += 'Alert ' + i + ', Severity, ' + item.category + ', ' + item.title;
    result += '</a>';
    result += '<h3 aria-hidden="true" tabindex="0" class="Alert-title">' + item.title + '</h3>';
    result += '<span tabindex="0">' + item.description + '</span>';
    if( item.internal_link.length ) {
      result += '<a href="' + item.internal_link + '" class="carrot-end" aria-label="' + item.title + '" id="anch_1057">more info</a>';
    }
    result += '</div>';
    result += '</li>';

    return result;
  }

  function renderPagination(total_results) {		
    var maxPagesToShowPerSide = Math.floor(maxPagesToShow/2);

    total_pages = Math.ceil( ( total_results / max_results ) );

    if (total_pages <= maxPagesToShow) {
      firstPage = 1;
      lastPage = total_pages;
    } else if (currentPage <= maxPagesToShowPerSide) {
      firstPage = 1;
      lastPage = maxPagesToShow;
    } else if (( total_pages - currentPage ) < maxPagesToShowPerSide) {
      firstPage = total_pages - maxPagesToShow;
      lastPage = total_pages;
    } else {
      firstPage = currentPage - maxPagesToShowPerSide;
      lastPage = currentPage + maxPagesToShowPerSide;	
    }

    $( '#ResultsPagination' ).empty();

    var pagination = '<div class="row">';

    pagination += '<nav role="widget" aria-label="Pagination">';
    pagination += '<ul class="Pagination">';		

    if ( total_pages > 1 && viewAll == 0) {
      if ( currentPage > 1 ) {
        pagination += '<li class="prev"><a href="#" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      } else {
        pagination += '<li class="prev active"><a href="#" aria-disabled="true" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      }

      if ( firstPage > 1 ) {
        pagination += '<li><a href="#" class="page_number" data-page="1">1</a></li>';
      }

      if ( firstPage > 2 ) {
        pagination += '<li class="gap">&hellip;</li>';
      }

      for ( var i = firstPage; i <= lastPage; i++ ) {
        if ( i == currentPage ) {
          pagination += '<li class="active"><a href="#" aria-disabled="true"><span class="visuallyhidden">You\'re currently on page</span>' + i + '</a></li>';
        } else { 
          pagination += '<li><a href="#" class="page_number" data-page="' + i + '">' + i + '</a></li>';
        }
      }

      if ( lastPage < total_pages ) {
        pagination += '<li class="gap">&hellip;</li>';
        pagination += '<li><a href="#" class="page_number" data-page="' + total_pages + '">' + total_pages + '</a></li>';
      }

      if ( currentPage == lastPage ) {
        pagination += '<li class="next active"><a href="#" aria-disabled="true" clgination += '<li class="next"><a href="#" class="carrot-end">Next <span class="visuallyhidden">page</span></a></li>';
      }

      pagination += '</ul></nav>';
    }

    pagination += '<div class="ResultsFooter-links"><a href="#main" class="js-backtotop">Back to top</a> | <a href="#" class="FacetedSearch-viewAll">View All</a></div></div>';

    $( '#ResultsPagination' ).append( pagination );

    $( 'a.page_number' ).on( 'click', function() {
      currentPage = parseInt($( this ).data( 'page' ));
      $( 'html,body' ).animate({
        scrollTop: $( 'div.FacetedSearch' ).offset().top -20
      }, 500, function () {
        setTimeout(function () {
          searchAlerts();
        }, 50);
      });
  n( 'click', function() {		
      disabled = $( this ).attr( 'aria-disabled' );

      if ( disabled == undefined ) {
        currentPage = currentPage - 1;
        $( 'html,body' ).animate({
          scrollTop: $        }, 500, function () {
          searchAlerts();
        });
      }

      return false;
    });		

    $( '.FacetedSearch-viewAll' ).on( 'click', function() {
      currentPage = 1;
      viewAll = true;
      searchAlerts();
      return false;
    });	
  }

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  $(document).ready(function () {
    var container = document.querySelector('.FacetedSearch.AggregatedAlerts');
    if (container) {
      // Init multiselects
      $( '#form-state' ).multiselect({
        buttonTextAlignment: 'start',
        enableResetButton: true,
        maxHeight: 300,
        nonSelectedText: 'State',
        resetButtonText: 'Deselect all',
        templates: {
          button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        },
        widthSynchronizationMode: 'ifPopupIsSmaller'
      });

      $( '#form-type' ).multiselect({
        buttonTextAlignment: 'start',
        enableResetButton: true,
        maxHeight: 300,
        nonSelectedText: 'Alert Type',
        resetButtonText: 'Deselect all',
        templates: {
          button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        },
        widthSynchronizationMode: 'ifPopupIsSmaller'
      });

      $( '#form-park' ).multiselect({
        buttonTextAlignment: 'start',
        enableResetButton: true,
        maxHeight: 300,
        nonSelectedText: 'Park',
        resetButtonText: 'Deselect all',
        templates: {
          button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        },
        widthSynchronizationMode: 'ifPopupIsSmaller'
      });

      // get url parameters passed from search submission	
      var stateParam = getUrlParameter('s');
      
      var pageParam = getUrlParameter( 'p' );
      var viewAllParam = getUrlParameter( 'v' );

      // set the values based on url
      if (stateParam !== undefined && stateParam.length > 0) {
        stateParam.split(',').forEach(function (param) {
          $('#form-state').multiselect('select', param);
        });
      }

      if (typeParam !== undefined && typeParam.length > 0) {
        typeParam.split(',').forEach(function (param) {
          $('#form-type').multiselect('select', param);
        });
      }

      if (parkParam !== undefined && parkParam.length > 0) {
        parkParam.split(',').forEach(function (param) {
          $('#form-park').multiselect('select', param);
        });rseInt(pageParam);
      }

      if (viewAllParam !== undefined && viewAllParam.length > 0) {
        viewAll = parseInt(viewAllParam) === 1;
      }

      dt = new Date().getTime();

      $.ajax({
        type: 'GET',
        url: '/nps-alerts.json?dt=' + dt,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function( json ) {
          aggregated_alerts_json = objSort(json, 'park_name', 'category_id');
          $( '#FacetedSearch-buttons' ).show();
          searchAlerts();
        }
      });

      $( '.FacetedSearch-submitButton' ).on( 'click', function() {
        currentPage = 1;
        viewAll = false;
        searchAlerts();
      });

      // Clear Advanced Search
      $( '.FacetedSearch-clearButton' ).on( 'click', function(e) {
        e.preventDefault();
        $('#form-state').multiselect( 'deselectAll', false );
        $('#form-state').multiselect( 'refresh' );
        $('#form-type').multiselect( 'deselectAll', false );
        $('#form-type').multiselect( 'refresh' );
        $('#form-park').multiselect( 'deselectAll', false );
        $('#form-park').multiselect( 'refresh' );
        $( '#ListingResultsGrid' ).empty();
        $( '#ResultsPagination' ).empty();
        $( '#ListingHeaderResults' ).empty();
        currentPage = 1;
        viewAll = false;
        searchAlerts();
      });
    }
  });
})($, location);

'use strict';
//Prepends "reading" string to drop down select menu if value is equal to 'selected`.
var selected = document.querySelectorAll(
  '.ArticleSubnav-selectForm-select option'
);

for (var i = 0; i < selected.length; i++) {
  var element = selected[i];
  var optionContent = element.textContent;
  if (element.hasAttribute('selected')) {
    element.textContent = 'Reading: ' + optionContent;
  }
}

'use strict';
$('.js-backtotop').each(function () {
  var $this = $(this);

  $this.each(function () {
    $(this).smoothScroll({
      afterScroll: function () {
        var targetID = $(this).attr('href');
        var $target = $(targetID);
        $target.focus();
      }
    });
  });
});
/* global jQuery, NPS */
'use strict';

(function ($, NPS) {
  function amenitiesList(values, water) {
    var amenities = [
      {
        label: 'Cell Phone Reception',
        value: ((values.indexOf('Cell Phone Reception - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Cell Phone Reception') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Internet Connectivity',
        value: ((values.indexOf('Internet Connectivity - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Internet Connectivity') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Trash/Recycling Collection',
        value: ((values.indexOf('Trash/Recycling Collection - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Trash/Recycling Collection') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Food Storage Lockers',
        value: ((values.indexOf('Food Storage Lockers - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Food Storage Lockers') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Camp Store',
        value: ((values.indexOf('Camp Store - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Camp Store') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Ice for Sale',
        value: ((values.indexOf('Ice Available For Sale - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Ice Available For Sale') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Firewood for Sale',
        value: ((values.indexOf('Firewood For Sale - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Firewood For Sale') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Staff On Site',
        value: ((values.indexOf('Staff or Volunteer Host On Site - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Staff or Volunteer Host On Site') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Amphitheater',
        value: ((values.indexOf('Amphitheater - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Amphitheater') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Laundry',
        value: ((values.indexOf('Laundry - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Laundry') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      },
      {
        label: 'Dump Station',
        value: ((values.indexOf('Dump Station - Seasonal') != -1)
          ? 'Yes, Seasonal'
          : ((values.indexOf('Dump Station') != -1)
            ? 'Yes, Year-Round'
            : 'No'))
      }
    ];

    if (water !== undefined && water.length > 0) {
      amenities.push({ label: 'Potable Water', value: water });
    }

    var list = document.createElement('dl');

    amenities.forEach(function (amenity) {
      var dt = document.createElement('dt');
      dt.textContent = amenity.label;

      var dd = document.createElement('dd');
      dd.textContent = amenity.value;

      list.appendChild(dt);
      list.appendChild(dd);
    });

    return list;
  }

  function emailElement(emailAddress, description) {
    var element = document.createElement('p');
    var value = document.createElement('a');
    var formURL = '/common/utilities/sendmail/sendemail.cfm';
    var encodedAddress = encodeURIComponent(emailAddress);
    var referral = encodeURIComponent(location.href);

    value.setAttribute('href', formURL + '?o=' + encodedAddress + '&r=' + referral);
    value.setAttribute('class', 'Campground__ContactPoint__Value');
    value.textContent = 'Send this campground an email';
    element.appendChild(value);

    if (description !== undefined && description.length > 0) {
      element.appendChild(document.createElement('br'));
      element.appendChild(document.createTextNocontainer = document.createElement('div');
    container.setAttribute('class', 'InfoAccordionFee');

    var title = document.createElement('p');
    title.textContent = fee.title;
    title.setAttribute('class', 'InfoAccordionFee__Heading');

    var description = document.createElement('p');
    description.textContent = fee.description;

    var cost = document.createElement('p');
    cost.textContent = fee.cost;
    cost.setAttribute('class', 'InfoAccordionFee__Cost');

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(cost);
    return container;
  }

  function fixCarriageReturns(text) {
    return text.replace(/(\r\n|\n|\r)/g, "<br />");
  }

  function iconElement(name, containerClass) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element.setAttribute('class', containerClass);
    element.setAttribute('focusable', 'false');
    element.setAttribute('aria-hidden', 'true');
    element.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#' + name + '"></use>';
    return element;
  }

  function mapElement(mapURL) {
    var mapIframe = document.createElement('iframe');
    mapIframe.setAttribute('src', mapURL);
    mapIframe.setAttribute('width', '100%');
    mapIframe.setAttribute('height', '300');
    return mapIframe;
  }

  function phoneElement(phoneNumber, description) {
    var element = document.createElement('p');
    var value = document.createElement('a');
    var deformattedPhoneNumber = String(phoneNumber).replace(/[^0-9]/g, '');

    value.setAttribute('class', 'Campground__ContactPoint__Value');
    value.setAttribute('href', 'tel:+1' + deformattedPhoneNumber) 
    value.textContent = phoneNumber;
    element.appendChild(value);

    if (description !== undefined && description.length > 1) {
      element.appendChild(document.createElement('br'));
      element.appendChild(document.createTextNode(description));
    }

    return element;
  }

  function statElement(label, value, classModifier, icon) {
    var element = document.createElement('div');
    element.setAttribute('class', 'Campground__BasicInformation__Stat Campground__BasicInformation__Stat--' + classModifier);

    var labelElement = document.createElement('span');
    labelElement.setAttribute('class', 'Campground__BasicInformation__Stat__Title');
    labelElement.textContent = label + ': ';

    var valueElement = document.createElement('span');
    valueElement.setAttribute('class', 'Campground__BasicInformation__Stat__Data');
    valueElement.textContent = value;

    if (icon !== undefined) {
      element.appendChild(iconElement(icon, 'icon'));
    }

    element.appendChild(labelElement);
    element.appendChild(valueElement);
    return element;
  }

  function swiperImage(swiperID, index, altText, imageURL, featureText, creditText) {
    var imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'swiper-slide--full');
    imageContainer.setAttribute('id', 'swiper_image_' + swiperID + '_' + index);

    var figure = document.createElement('figure');
    var image = document.createElement('img');
    image.setAttribute('alt', altText);
    image.setAttribute('src', imageURL + '?maxWidth=1200&maxHeight=800&autorotate=false&quality=90');
    var figcaption = document.createElement('figcaption');
    figcaption.textContent = featureText;

    var brk = document.createElement('br');
    var credit = document.createElement('span');
    credit.setAttribute('class', 'credit');
    credit.textContent = creditText;

    figcaption.appendChild(brk);
    figcaption.appendChild(credit);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    imageContainer.appendChild(figure);

    return imageContainer;
  }

  function swiperSlide(imageURL, altText) {
    var slide = document.createElement('div');
    slide.setAttribute('class', 'swiper-slide');

    var thumbnail = document.createElement('a');
    thumbnail.setAttribute('href', imageURL);
    thumbnail.setAttribute('class', 'CarouselGallery__Thumbnail');
    thumbnail.setAttribute('style', 'background-image: url(' + imageURL + '?width=250&height=250&mode=crop&quality=90) !important');

    var altTextElement = document.createElement('span');
    altTextElement.setAttribute('class', 'CarouselGallery__Thumbnail__AltText');
    altTextElement.textContent = altText;

    thumbnail.appendChild(altTextElement);
    slide.appendChild(thumbnail);
    return slide;
  }

  function unstyledList(values) {
    var list = document.createElement('ul');
    list.setAttribute('class', 'list-unstyled');

    values.forEach(function (value) {
      var listItem = document.createElement('li');
      listItem.textContent = value;
      list.appendChild(listItem);
    });

    return list;
  }

  function render(container, campground) {
    var isListing = container.getAttribute('class').indexOf('Campground__Listing') > -1;
    var currentDate = new Date();

    var operatingHours = (campground.operatingHours && campground.operatingHours[1])
      ? new NPS.OperatingHours(campground.operatingHours[1])
      : null;

    var isClosed = operatingHours ? (operatingHours.getStatus() === 'Closed') : true;

    var originalTitle = isClosed
      ? "The campground is scheduled to be closed today. See the details below for operating hours and seasons."
      : "Although the campground is scheduled to be open today, availability may be limited. See the reservation information below or contact the park for details.";

    var statusLabel = isClosed ? "Closed" : "Open";

    var statusElement = container.querySelector('.Campground__BasicInformation__Status');
    if (statusElement) {
      var statusElementClass = statusElement.getAttribute('class');
      statusElement.setAttribute(
        'class',
        statusElementClass + ' Campground__BasicInformation__Status--' + statusLabel
      );
      statusElement.textContent = statusLabel;
    }

    var statusTooltipButton = container.querySelector('.Campground__BasicInformation__Status__Tooltip [data-toggle="tooltip"]');
    if (statusTooltipButton) {
      statusTooltipButton.setAttribute('data-original-title', originalTitle);
      statusTooltipButton.style.backgroundColor = 'rgba(0,0,0,0)';
      statusTooltipButton.style.padding = '0px';
    }

    // Name
    var campgroundHeadingContainer = container.querySelector('.Campground__Heading');
    if (isListing && campgroundHeadingContainer) {
      var campgroundHeading = document.createElement('h3');

      if (campground.detailURL !== undefined && campground.detailURL.length > 0) {
        var campgroundHeadingLink = document.createElement('a');
        campgroundHeadingLink.setAttribute('href', campground.detailURL);
        campgroundHeadingLink.textContent = campground.name;
        campgroundHeading.appendChild(campgroundHeadingLink);
      } else {
        campgroundHeading.textContent = campground.name;
      }

      campgroundHeadingContainer.appendChild(campgroundHeading);
    }

    // Thumbnail image
    var imageContainer = container.querySelector('.Campground__BasicInformation__Description__Thumbnail');

    if (imageContainer && campground.campgroundImage !== undefined) {
      var image = document.createElement('img');
      image.setAttribute('src', campground.campgroundImage);
      image.setAttribute('alt', 'Image of campground site');
      imageContainer.innerHTML = '';
      imageContainer.appendChild(image);
    } else if (imageContainer) {
      imageContainer.remove();
    }

    // Description body
    var descriptionBody = container.querySelector('.Campground__BasicInformation__Description__Body');
    if (descriptionBody && campground.description.length > 0) {
      /**
      * !!! UNSAFE !!!
      * campground.description may contain HTML
      */
      descriptionBody.innerHTML = campground.description;
    } else if (descriptionBody) {
      descriptionBody.remove();
    }

    // Stats
    var statsContainer = container.querySelector('.Campground__BasicInformation__Stats');

    if (statsContainer) {
      var stats = [
        { label: 'TOTAL SITES', value: campground.totalSites, classModifier: 'TotalSites' },
        { label: 'Electric Hookups', value: campground.electricHookups, classModifier: n: 'basic-info_rv' },
        { label: 'Tent Only', value: campground.tentOnly, classModifier: 'Tent', icon: 'basic-info_tent' },
        { label: 'Walk to/Boat to', value: campground.walkBoatTo, classModifier: 'Walk', icon: 'basic-info_walk' },
        { label: 'Group', value: campground.groupSize, classModifier: 'Group', icon: 'basic-info_group' },
        { label: 'Horse', value: campground.horse, classModifier: 'Horse', icon: 'basic-info_horse' },
        { label: 'Other', value: campground.other, classModifier: 'Other', icon: 'basic-info_other' },
      ];

      stats.forEach(function (stat) {
        statsContainer.appendChild(statElement(stat.label, stat.value, stat.classModifier, stat.icon));
      });
    }

    // Features
    var amenitiesContainer = container.querySelector('.Campground__Amenities');
    if (
      amenitiesContainer &&
      Array.isArray(campground.amenities) &&
      campground.amenities.length > 0
    ) {
      amenitiesContainer.appendChild(amenitiesList(campground.amenities, campground.water));
    } else if (amenitiesContainer) {
      amenitiesContainer.remove();
    }

    var firePolicy = container.querySelector('.Campground__FirePolicy');
    if (
      firePolicy &&
      campground.fireStovePolicy !== undefined &&
      campground.fireStovePolicy.length > 1
    ) {
      var firePolicyContent = document.createElement('p');
      firePolicyContent.textContent = campground.fireStovePolicy;
      firePolicy.appendChild(firePolicyContent);
    } else if (firePolicy) {
      firePolicy.remove();
    }

    var toiletsContainer = container.querySelector('.Campground__Toilets');
    if (
      toiletsContainer &&
      Array.isArray(campground.toilets) &&
      campground.toilets.length > 0
    ) {
      toiletsContainer.appendChild(unstyledList(campground.toilets));
    } else if (toiletsContainer) {
      toiletsContainer.remove();
    }

    var showersContainer = container.querySelector('.Campground__Showers');
    if (
      showersContainer &&
      Array.isArray(campground.showers) &&
      campground.showers.length > 0
    ) {
      showersContainer.appendChild(unstyledList(campground.showers));
    } else if (showersContainer) {
      showersContainer.remove();
    }
    // end of Features
    
    // Hours
    var hoursContainer = container.querySelector('.OperatingHours');
    if (operatingHours && hoursContainer) {
      operatingHours.render(hoursContainer);
    } else if (hoursContainer) {
      hoursContainer.remove();
    }

    // Weather, nested inside Hours accordion, peound__Weather');
    if (weatherContainer && campground.weatherDescription) {
      var weatherDescription = document.createElement('p');
      weatherDescription.innerHTML = campground.weatherDescription;
      weatherContainer.appendChild(weatherDescription);
    } else if (weatherContainer) {
      weatherContainer.remove();
    }
    // end of Weather
    // end of Hours
    
    // Fees
    var feesContainer = container.querySelector('.Campground__Fees');
    if (
      feesContainer &&
      Array.isArray(campground.entranceFees) &&
      campground.entranceFees.length > 0
    ) {
      campground.entranceFees.forEach(function (fee) {
        feesContainer.appendChild(feeElement(fee));
      });
    } else if (feesContainer) {
      feesContainer.remove();
    }
    // end of Fees
    
    // Contact
    var mapContainer = container.querySelector('.Campground__Map');
    if (
      mapContainer &&
      campground.mapURL !== undefined &&
      campground.mapURL.length > 0
    ) {
      mapContainer.appendChild(mapElement(campground.mapURL));
    } else if (mapContainer) {
      mapContainer.remove();
    }

    var emailContainer = container.querySelector('.Campground__Email');
    if (
      emailContainer &&
      campground.emailAddress !== undefined &&
      campground.emailAddress.length > 0
    ) {
      emailContainer.appendChild(emailElement(campground.emailAddress, campground.emailDescription));
    } else if (emailContainer) {
      emailContainer.remove();
    }

    var phoneContainer = container.querySelector('.Campground__Phone');
    if (
      phoneContainer &&
      campground.telephoneNumberVoice !== undefined &&
      campground.telephoneNumberVoice.length > 1
    ) {
      phoneContainer.appendChild(phoneElement(campground.telephoneNumberVoice, campground.telephoneDescription));
    } else if (phoneContainer) {
      phoneContainer.remove();
    }

    var mailingAddress = container.querySelector('.Campground__MailingAddress');
    if (
      mailingAddress &&
      campground.mailing_address !== undefined &&
      campground.mailing_address.line_1 !== undefined &&
      campground.mailing_address.line_1.length > 1
    ) {
      var mailingAddressObject = new NPS.Address(campground.mailing_address);
      var mailingAddressRendered = mailingAddressObject.render();
      mailingAddressRendered.setAttribute('class', 'Campground__ContactPoint__Value');
      mailingAddress.appendChild(mailingAddressRendered);
    } else if (mailingAddress) {
      mailingAddress.remove();
    }

    var physicalAddress = container.querySelector('.Campground__PhysicalAddress');
    if (
      physicalAddress &&
      campground.physical_address !== undefined &&
      campground.physical_address.line_1 !== undefined &&
      campground.physical_address.line_1.length > 1
    ) {
      var physicalAddressObject = new NPS.Address(campground.physical_address);
      var physicalAddressRendered = physicalAddressObject.render();
      physicalAddressRendered.setAttribute('class', 'Campground__ContactPoint__Value');
      physicalAddress.appendChild(physicalAddressRendered);
    } else if (physicalAddress) {
      physicalAddress.remove();
    }

    // Directions, nested inside of Contact
    var directionsContainer = container.querySelector('.Campground__Directions');
    if (directionsContainer) {
      if (
        (campground.directions !== undefined && campground.directions.length > 1) ||
        (campground.directionsURL !== undefined && campground.directionsURL.length > 1)
      ) {
        if (campground.directions.length > 1) {
          directionsContainer.appendChild(document.createTextNode(campground.directions));
        }

        if (campground.directionsURL.length > 1) {
          var directionsLinkContainer = document.createElement('p');
          var directionsLink = document.createElement('a');
          directionsLink.setAttribute('href', campground.directionsURL);
          directionsLink.setAttribute('class', 'Campground__Button btn btn-primary');
          directionsLink.textContent = 'Directions Details';
          directionsLinkContainer.appendChild(directionsLink);
          directionsContainer.appendChild(directionsLinkContainer);
        }
      } else {
        directionsContainer.remove();
      }
    }
    // end of Directions
    // end of Contact
    
    // Regulations
    var additionalInfoContainer = container.querySelector('.Campground__AdditionalInfo');
    if (
      additionalInfoContainer &&
      campground.additionalInfo !== undefined &&
      campground.additionalInfo.length > 0
    ) {
      var additionalInfo = document.createElement('p');
      additionalInfo.innerHTML = fixCarriageReturns(campground.additionalInfo);
      additionalInfoContainer.appendChild(additionalInfo);
    } else if (additionalInfoContainer) {
      additionalInfoContainer.remove();
    }

    var cellContainer = container.querySelector('.Campground__CellInfo');
    if (
      cellContainer &&
      campground.cellPhoneInfo !== undefined &&
      campground.cellPhoneInfo.length > 0
    ) {
      var cellInfo = document.createElement('p');
      cellInfo.innerHTML = fixCarriageReturns(campground.cellPhoneInfo);
      cellContainer.appendChild(cellInfo);
    } else if (cellContainer) {
      cellContainer.remove();
    }

    var internetContainer = container.querySelector('.Campground__InternetInfo');
    if (
      internetContainer &&
      campground.internetInfo !== undefined &&
      campground.internetInfo.length > 0
    ) {
      var internetInfo = document.createElement('p');
      internetInfo.innerHTML = fixCarriageReturns(campground.internetInfo);
      internetContainer.appendChild(internetInfo);
    } else if (internetContainer) {
      internetContainer.remove();
    }

    var regulationsContainer = container.querySelector('.Campground__Regulations');
    if (
      regulationsContainer && (
        (campground.regulations !== undefined &&
        campground.regulations.length > 0) ||
        (campground.regulationsURL !== undefined &&
        campground.regulationsURL.length > 0)
      )
    ) {
      if (
        campground.regulations !== undefined &&
        campground.regulations.length > 0
      ) {
        var regulations = document.createElement('p');
        regulations.innerHTML = fixCarriageReturns(campground.regulations);
        regulationsContainer.appendChild(regulations);
      }

      if (
        campground.regulationsURL !== undefined &&
        campground.regulationsURL.length > 0
      ) {
        var regulationsLink = document.createElement('a');
        regulationsLink.setAttribute('href', campground.regulationsURL);
        regulationsLink.setAttribute('class', 'Campground__Button btn btn-primary');
        regulationsLink.textContent = "More about regulations";
        regulationsContainer.appendChild(regulationsLink);
      }
    } else if (regulationsContainer) {
      regulationsContainer.remove();
    }
    // end of Regulations

    // Reservations
    var reservationsDescription = container.querySelector('.Campground__ReservationsDescription');
    if (
      reservationsDescription &&
      campground.reservationDescription !== undefined &&
      campground.reservationDescription.length > 0
    ) {
      reservationsDescription.textContent = campground.reservationDescription;
    } else if (reservationsDescription) {
      reservationsDescription.remove();
    }

    var reservationsStats = container.querySelector('.Campground__ReservationsStats');
    if (
      reservationsStats &&
      campground.sitesReservable !== undefined &&
      campground.sitesReservable.length > 0 &&
      campground.sitesFirstCome !== undefined &&
      campground.sitesFirstCome.length > 0
    ) {
      if (
        campground.sitesReservable !== undefined &&
        campground.sitesReservable.length > 0 
      ) {
        var reservableTerm = document.createElement('dt');
        reservableTerm.textContent('Sites Reservable');
        var reservableDef = document.createElement('dd');
        reservableDef.textContent = campground.sitesReservable;
        reservationsStats.appendChild(reservableTerm);
        reservationsStats.appendChild(reservableDef);
      }

      if (
        campground.sitesFirstCome !== undefined &&
        campground.sitesFirstCome.length > 0
      ) {
        var firstComeTerm = document.createElement('dt');
        firstComeTerm.textContent('Sites First Come / First Serve');
        var firstComeDef = document.createElement('dd');
        firstComeDef.textContent = campground.sitesFirstCome;
        reservationsStats.appendChild(firstComeTerm);
        reservationsStats.appendChild(firstComeDef);
      }
    } else if (reservationsStats) {
      reservationsStats.remove();
    }

    var reservationsEmbed = container.querySelector('.Campground__ReservationsEmbed');
    if (reservationsEmbed) {
      if (
        campground.reservationURL !== undefined &&
        campground.reservationURL.length > 1 && 
        reservationsEmbed.innerHTML.trim().length === 0
      ) {
        var reservationsContainer = reservationsEmbed.parentElement; 
        var reservationsLinkContainer = document.createElement('p');
        var reservationsLink = document.createElement('a');
        reservationsLink.setAttribute('href', campground.reservationURL);
        reservationsLink.setAttribute('class', 'Campground__Button btn btn-primary');
        reservationsLink.textContent = 'Reservations';
        reservationsLinkContainer.appendChild(reservationsLink);
        reservationsContainer.appendChild(reservationsLinkContainer);
      }
    }
    // End of Reservations
          
    // Accessibility
    var accessibilityPanel = container.querySelector('.Campground__BasicInformation__Accessibility');
    var accessibilityContainer = container.querySelector('.AccessibilityInfo__Body');
    if (
      accessibilityContainer &&
      campground.accessibility !== undefined &&
      campground.accessibility.length > 0
    ) {
      var adaContainer = document.createElement('p');
      adaContainer.textContent = 'ADA Information - ' + campground.accessibility;
      accessibilityContainer.appendChild(adaContainer);

      if (
        campground.wheelchairInfo !== undefined &&
        campground.wheelchairInfo.length > 0
      ) {
        var wheelchairContainer = document.createElement('p');
        wheelchairContainer.textContent = 'Wheelchair Access - ' + campground.wheelchairInfo;
        accessibilityContainer.appendChild(wheelchairContainer);
      }

      if (
        campground.rvTrailerInfo !== undefined &&
        campground.rvTrailerInfo.length > 0
      ) {
        var rvTrailerContainer = document.createElement('p');
        rvTrailerContainer.textContent = 'RV & Trailer Information - ' + campground.rvTrailerInfo;
        accessibilityContainer.appendChild(rvTrailerContainer);
      }

      var rvAllowedContainer = document.createElement('p');
      rvAllowedContainer.textContent = 'RV Allowed - ' + (campground.rvAllowed != 0 ? 'Yes' : 'No');
      accessibilityContainer.appendChild(rvAllowedContainer);

      if (campground.rvMaxLength != 0) { 
        var rvMaxLengthContainer = document.createElement('p');
        rvMaxLengthContainer.textContent = 'RV Max Length in Feet - ' + campground.rvMaxLength;
        accessibilityContainer.appendChild(rvMaxLengthContainer);
      }

      var trailerAllowedContainer = document.createElement('p');
      trailerAllowedContainer.textContent = 'Trailer Allowed - ' + (campground.trailerAllowed != 0 ? 'Yes' : 'No');
      accessibilityContainer.appendChild(trailerAllowedContainer);

      if (campground.trailerMaxLength != 0) { 
        var trailerMaxLengthContainer = document.createElement('p');
        trailerMaxLengthContainer.textContent = 'Trailer Max Length in Feet - ' + campground.trailerMaxLength;
        accessibilityContainer.appendChild(trailerMaxLengthContainer);
      }

      var classificationContainer = document.createElement('p');
      classificationContainer.textContent = 'Classification - ';

      if (campground.classification == 1) {
        classificationContainer.appendChild(document.createTextNode('This campground is a developed campground.'));
      } else if (campground.classification == 2) {
        classificationContainer.appendChild(document.createTextNode('This campground is a limited development campground.'));
      } else if (campground.classification == 3) {
        classificationContainer.appendChild(document.createTextNode('This campground is a primitive camping area.'));
      } else {
        classificationContainer.appendChild(document.createTextNode('This campground is a designated primitive campsite.'));
      }

      accessibilityContainer.appendChild(classificationContainer);
    } else if (accessibilityPanel) {
      accessibilityPanel.remove();
    }
    // end of Accessibility

    // Images
    var galleryContainer = container.querySelector('.Campground__Gallery');

    if (
      galleryContainer &&
      Array.isArray(campground.images) &&
      campground.images.length > 0
    ) {
      var maxItemsRendered = 8;
      var titleCharacterLimit = 48;
      var numberImagesToRender = campground.images.length;

      if (numberImagesToRender > maxItemsRendered) {
        numberImagesToRender = maxItemsRendered;
      }

      var carouselGallery = galleryContainer.querySelector('.CarouselGallery');

      if (carouselGallery) {
        var swiperID = carouselGallery.getAttribute('data-swiper-id');
        var swiperWrapper = carouselGallery.querySelector('.swiper-wrapper');
        var swiperImages = carouselGallery.querySelector('.swiper-images');

        if (swiperID && swiperWrapper && swiperImages) {
          for (i = 0; i < numberImagesToRender; i++) {
            if (campground.images[i].imageURL.length > 3) {
              swiperWrapper.appendChild(swiperSlide(
                campground.images[i].imageURL,
                campground.images[i].altText
              ));

              swiperImages.appendChild(swiperImage(
                swiperID,
                i,
                campground.images[i].altText,
                campground.images[i].imageURL,
                campground.images[i].featureText,
                campground.images[i].creditText
              ));
            }
          }

          $(swiperWrapper).on('click', '.CarouselGallery__Thumbnail', function (e) {
            e.preventDefault();
          });
        }
      }
    } else if (galleryContainer) {
      galleryContainer.remove();
    }
r.querySelector('.Campground__BasicInformation__DetailsLink');
    if (campground.detailURL !== undefined && campground.detailURL.length > 0 && detailsLinkContainer) {
      var detailsLink = document.createElement('a');
      detailsLink.setAttribute('href', campground.detailURL);
      detailsLink.textContent = 'View Details';
      detailsLinkContainer.appendChild(detailsLink);
    } else if (detailsLinkContainer) {
      detailsLinkContainer.remove();
    }
  }

  function initTooltips(container) {
    try {
      var tooltipTargets = container.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTargets.forEach(function (tooltipTarget) {
        new bootstrap.Tooltip(tooltipTarget);
      });
    } catch(err) {
      /**
       * .tooltip above works under jQuery-1.12, but not jQuery-1.7, which is
       * what loads inside the CMS admin.
       * this will allow JS exe console.
       */
      console.log(err);
    }
  }

  $(document).ready(function() {
    var listContainers = document.querySelectorAll(".CampgroundList");
    var detailContainers = document.querySelectorAll(".CampgroundDetail");

    listContainers.forEach(function (container) {
      var siteCode = container.getAttribute('data-site-code');
      initTooltips(container);

      $.getJSON('/' + siteCode + '/structured_data_' + siteCode + '.json', function(data) { 
        if (!Array.isArray(data.campgrounds)) { 
          // Invalid response, exit early
          return;
        }

        var responseIDs = data.campgrounds.map(function (c) {
          return String(c.campgroundID);
        });

        var elements = container.querySelectorAll('.Campground__Listing');

        elements.forEach(function (element) {
          var campgroundID = String(element.getAttribute('data-campground-id'));

          if (responseIDs.includes(campgroundID)) {
            render(element, data.campgrounds[responseIDs.indexOf(campgroundID)]);
          } else {
            element.remove();
          }
        });
      });
    });

    detailContainers.forEach(function (container) {
      var campgroundID = parseInt(container.getAttribute('data-campground-id'));
      var siteCode = container.getAttribute('data-site-code');
      initTooltips(container);

      $(container).on('click', 'button.InfoAccordion__Heading', function () {
        var currentPanel = '';
        var clickedHeading = this.querySelector('.InfoAccordion__Heading__Text');
        
        if (clickedHeading.textContent.indexOf('Reservations') > 0) {
          currentPanel = 'Reservations';
        }
        else if (clickedHeading.textContent.indexOf('Features') > 0) {
          currentPanel = 'Campground Features';
        }
        else if (clickedHeading.textContent.indexOf('Hours') > 0) {
          currentPanel = 'Operating Hours & Seasons';
        }
        else if (clickedHeading.textContent.indexOf('Fees') > 0) {
          currentPanel = 'Fees';
        }
        else if (clickedHeading.textContent.indexOf('     }
        else if (clickedHeading.textContent.indexOf('Regulations') > 0) {
          currentPanel = 'Additional Information & Regulations';
        }
        else {
          currentPanel = 'Unknown';
        }

        if (typeof gas === 'function') {
          gas('send', 'event', 'Campground Panels', currentPanel, 'open', 1, true);
        }
      });

      $.getJSON('/' + siteCode + '/structured_data_' + siteCode + '.json', function(data) { 
        if (!Array.isArray(data.campgrounds)) { 
          // Invalid response, exit early
          return;
        }

        var campgrounds = data.campgrounds.filter(function (item) {
          return item.campgroundID === campgroundID;
        });

        if (campgrounds.length === 0) {
          // Response does not include this specific campground, exit early
          return;
        }

        var campground = campgrounds.shift();

        render(container, campground);

        var carouselGallery = container.querySelector('.CarouselGallery');
        if (carouselGallery) {
          NPS.initCarouselGallery(carouselGallery);
        }

        $('a, area', container).each(function () {
          var href = this.getAttribute('href');
          if (href && href.charAt(0) !== '#') {
            NPS.interceptExternalLinks(this);
          }
        });
      });
    });
  });
})(jQuery, NPS);

/* global jQuery, Swiper */

// A Simple carousel type interactive that displays chapters grouped by theme.
// Follow the html structure found in interactive-elements/chapter-browser.html
// you can have as many theme slides elements as you want. You can have a maximum
// of 12 chapters display in the chapter-list element.

'use strict';
(function ($) {
  if ($('.ChapterBrowser__Container').length) {
    var chapterBrowser = new Swiper('.ChapterBrowser__Container', {
      prevButton: $('.ChapterBrowser__Nav--Prev'),
      nextButton: $('.ChapterBrowser__Nav--Next'),
      buttonDisabledClass: 'ChapterBrowser__Nav--Disabled',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 0,
      preloadImages: false,
      watchActiveIndex: true,
      a11y: true,
      keyboardControls: true,
      autoHeight: true,
      onSlideChangeEnd: function (swiper) {
        var currentSlide = swiper.activeIndex + 1;
        var currentSlideChapterLinks = $('.swiper-slide-active .ChapterBrowser__Content--ChapterLinks').html();
        $('.ChapterBrowser__Footer .ChapterBrowser__ChapterLinks').empty().append(currentSlideChapterLinks);
      },
      onInit: function (swiper) {
        var slideCount = swiper.slides.length;
        var currentSlideChapterLinks = $('.swiper-slide-active .ChapterBrowser__Content--ChapterLinks').html();
        $('.ChapterBrowser__Footer .ChapterBrowser__ChapterLinks').empty().append(currentSlideChapterLinks);
        swiper.update();
      }
    });
  }
})(jQuery);

(function ($) {
  // Setting up vars and building controls
  var $list;
  var $listItem;
  var slidesCount;
  var itemWidth;
  var itemHeight;
  var listWidth;
  var currentSlide;
  var $nextButton;
  var $prevButton;
  var $listTitle;

  $list = $('.chapter-browser').find('.theme-wrapper');
  $listItem = $('.chapter-browser .theme');
  slidesCount = $listItem.length;
  itemWidth = $listItem.outerWidth();
  itemHeight = $listItem.outerHeight();
  listWidth = slidesCount * itemWidth;
  currentSlide = 0;

  $nextButton = $('<a />', {
    'id': 'next',
    'class': 'more',
    'href': '#',
    'text': 'Next'
  });

  $prevButton = $('<a />', {
    'id': 'prev',
    'class': 'back',
    'href': '#',
    'text': 'Prev'
  });

  $listTitle = $('<h3 />', {
    'class': 'chapter-list-title',
    'text': 'Explore Chapters'
  });

  // Function to move to specific slide passed in as an index via the parameter
  function gotoSlide (slide) {
    if ($list.filter(':not(:animated)').length) {
      var leftPosition = 0;
      var hasPrev = false;
      var hasNext = true;

      if ((slide > 0) && (slide < slidesCount)) {
        leftPosition = -(itemWidth * slide);
        hasPrev = true;
        if ((slide + 1) === slidesCount) {
          hasNext = false;
        } else {
          hasNext = true;
        }
      } else if (slide === 0) {
        leftPosition = 0;
        hasPrev = false;
        hasNext = true;
      } else {
        return false;
      }
      $('.chapters-list').fadeOut(0, function () {
        $list.animate({
          left: leftPosition
        }, 0, function () {
          currentSlide = slide;
          $('.browser-window').toggleClass('has-prev', hasPrev);
     pters-list').fadeIn();
        });
      });
    }
    return false;
  }

  // Sets up carousel
  function setUp () {
    $list.css({'width': listWidth}).wrap('<div class="browser-window" />');
    $('.browser-window').prepend($listTitle);
    $('.browser-window').css({
      'height': itemHeight,
      'width': itemWidth,
      'overflow': 'hidden',
      'position': 'relative'
    }).addClass('has-next');

    $('.browser-window').prepend($prevButton);
    $('#prev').click(function () {
      gotoSlide(currentSlide - 1);
      return false;
    });

    $('.browser-window').prepend($nextButton);
    $('#next').click(function () {
      gotoSlide(currentSlide + 1);
      return false;
    });
  }

  setUp();
})(jQuery);

/* global jQuery*/
'use strict';
(function ($) {
  $(document).on('ready', function () {
    $('.click-to-copy').on('click', function (event) {
      var original_element = $(this);
      var hidden_element = $('<textarea></textarea>');
      hidden_element.css({position: 'absolute', left: '-9999px'});
      hidden_element.text(original_element.text());
      $('body').append(hidden_element);
      hidden_element.select();
      try {
        document.execCommand('copy');
      } catch(e) {
      }
      hidden_element.remove();
    });
  });
})(jQuery);

/*
Required Markup:
Toggle:
<h3
data-text-inactive="<i class='fa fa-plus-circle'></i> View More"  // optional
data-text-active="<i class='fa fa-minus-circle'></i> View Less"   // optional
data-aria-controls="__UNIQUE_IDENTIFIER__"                        // required - interchange with 'data-controls'
data-controls="__UNIQUE_IDENTIFIER__"                             // required - interchange with 'data-aria-controls'
data-class="BUTTON_CLASS"                                         // optional
class="js-collapser"                                              // required
>Additional Information</h3>

Content:
<div class="js-collapsible" id="collapsible-__UNIQUE_IDENTIFIER__"></div>
*/

'use strict';

/**
 * Plugin For Applying and Overriding aria attributes
 */
(function ($) {
  $.fn.ariaHide = function (skip) {
    if (!skip) return this;
    return this.attr({
      'aria-hidden': true
    });
  };
  $.fn.ariaShow = function (skip) {
    if (!skip) return this;
    return this.attr({
      'aria-hidden': false
    });
  };
  $.fn.ariaExpand = function (skip) {
    if (!skip) return this;
    return this.attr({
      'aria-expanded': true
    });
  };
  $.fn.ariaCollapse = function (skip) {
    if (!skip) return this;
    return this.attr$) {
  var dataAttr = [
    'data-text-inactive',
    'data-text-active',
    'data-aria-controls',
    'data-controls',
    'data-remove-header',
    'data-hide-header',
    'data-class',
    'data-id',
    'data-slide-speed',
    'data-tracking'
  ];

  function Collapser(el) {
    var self = this;

    this.$el = $(el);
    this.activeClass = 'active';
    this.dataAttr = {};
    this.model =  {
      firstRender: true,
      slideSpeed: 0,
      isActive: false,
      swapsToggleText: false,
      ariaAccessible: false,
      removeHeaderText: false
    };

    // get data values from header
    dataAttr.forEach(function (item) {
      self.dataAttr[item] = self.$el.attr(item);
    });

    // Check if content should be active by default and
    // set model value accordingly
    this.model.isActive = this.$el.hasClass(_this.activeClass);
    this.model.removeHeaderText = this.dataAttr['data-remove-header'];
    this.model.swapsToggleText = (this.dataAttr['data-text-active'] && this.dataAttr['data-text-inactive']);
    this.model.ariaAccessible = !!this.dataAttr['data-aria-controls'];
    var trackingData = this.dataAttr['data-tracking'];
    this.model.trackingData = (!!trackingData ? $.parseJSON(trackingData) : !!trackingData);

    // Find content to be toggled
    this.$content = $('#' + (this.dataAttr['data-aria-controls'] || this.dataAttr['data-controls']));
    if (!this.$content.length) throw new Error('Toggle must contain either a "data-controls" OR "data-aria-controls" attribute');

    this.createButton = function () {
      var newText = '';
      self.$button = $('<button class="js-collapser-button"></button>');
      var text = self.$el.html();
      var isActive = self.isActive;

      // add aria attributes to the button
      self.$button
        .addClass(self.dataAttr['data-class'])
        .attr('id', self.dataAttr['data-id']);

      // Check for swapping text
      if (self.model.swapsToggleText) {
        if (self.model.removeHeaderText) {
          newText = '';
        } else {
          // Create a new span elem
          // apply visuallyhidden styles
          // add original text to innerHTML
          newText = $('<span>')
            .html(text)
            .css({
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              new toggle button
        // remove header visuallyhidden & active class
        self.$el
          .html(newText)
          .append(self.$button)
          .removeClass('visuallyhidden ' + self.activeClass);

      } else {
        self.$button.html(self.$el.html());
        self.$el
          .html(self.$button)
          .removeClass('visuallyhidden ' + self.activeClass);
      }
    };

    /**
     * Load assets sources once the expanded content
     * has been exposed.
     * @return {object} this
     */
    this.lazyLoadContent = function () {
      self.$content.find('[data-src]').each(function () {
        var $this = jQuery(this);
        $this.attr('src', $this.data('src'));
      });
    };

    this.render = function () {
      var isActive = self.isActive;

      self.renderToggle(isActive);
      self.renderContent(isActive);

      if (isActive && self.model.firstRender) {
        // load iframes
        self.lazyLoadContent();
        // set firstRender to false
        self.model.firstRender = false;
      }
    };

    this.renderContent = function (isActive) {
      var applyAria = self.model.ariaAccessible;

      if (isActive) {
        self.$content
          .stop()
          .addClass(self.activeClass)
          .slideDown(self.model.slideSpeed)
          .ariaShow(applyAria);
      } else {
        self.$content
          .stop()
          .removeClass(s         .ariaHide(applyAria);
      }
    };

    this.renderToggle = function (isActive) {
      var applyAria = self.model.ariaAccessible;

      if (isActive) {
        // Render active button state
        self.$button
          .addClass(self.activeClass)
          .ariaExpand(applyAria);
        self.replaceToggleText(self.dataAttr['data-text-active']);
      } else {
        // Render inactive button state
        self.$button
          .removeClass(self.activeClass)
          .ariaCollapse(applyAria);
        self.replaceToggleText(self.dataAttr['data-text-inactive']);

        if (!self.model.firstRender) {
          setTimeout(function () {
            self.$button.focus();
          }, 100);
        }
      }
    };

    // Skip replacing text if it's not needed
    this.replaceToggleText = function (html) {
      if (self.model.swapsToggleText) {
        return self.$button.html(html);
      }
    };

    this.toggle = function (evt) {
      evt.stopPropagation();

      // Check for Keypress event
      // toggle if [spacebar, enter] key is pressed
      if (evt.keyCode) {
        switch (evt.keyCode) {
          case 32: // spacebar
            evt.preventDefault();
            self.isActive = !self.isActive;
            break;

          case 27: // escape
            if (self.model.isActive) {
              evt.preventDefault();
              self.isActive = !self.isActive;
            }
            break;

          default:
            break;
        }
        // Return if any other key is pressed
        // this prevents the activeState from being
        // toggled when tab is pressed
        return;
      }

      self.isActive = !self.isActive;
      self.model.trackingData && self.sendTracking();
    };

    this.sendTracking = function () {
      var data = Object.assign({}, self.model.trackingData);
      // Set action before overriding
      data.action = 'Open';

      var trackingData = gaHelper.parseTracking     if (self.isActive) {
        trackingData.eventAction = data.action1;
      } else {
        trackingData.eventAction = data.action2;
      }
      ga('send', trackingData);
    };

    this.createButton();
    this.render();

    // Remove 'display:none'
    this.$el.css('display', 'block');

    // Update slideSpeed after first render to prevent layout shift on load
    this.model.slideSpeed = this.dataAttr['data-slide-speed'] || 300;

    // Listeners
    this.$content.on('keyup', $.proxy(this.toggle, this));
    this.$el.on('click', 'button', this.toggle);
    this.$el.on('keyup', this.toggle);
  }

  Collapser.prototype = {
    get isActive() {
      return this.model.isActive;
    },
    set isActive(value) {
      var changed = this.model.isActive !== value;
      this.model.isActive = value;
      if (changed) this.render();
    }
  };

  $(document).ready(function () {
    $('.js-collapser').each(function () {
      var collapser = new Collapser(this);
    });
  });
})(jQuery);

'use strict';
(function($) {
  $('.js-dismiss').each(function () {
    var $this = $(this);

    $this.on('click', function () {
      var $contentToClose = $($this.data('close'));

      $contentToClose.slideUp(300);
    });
  });
})(jQuery);

/* global jQuery */
'use strict';

(function ($) {
  $('.js-datepicker .input-daterange').datepicker({
    todayBtn: true,
    multidate: true,
    autoclose: true,
    todayHighlight: true
  });

  $(document).ready(function () {
    $('.js-multiselect').multiselect({
      enableClickableOptGroups: true,
      maxHeight: 300,
      buttonWidth: '100%',
      buttonClass: 'btn btn-default btn-lg',
      numberDisplayed: 0,
      nonSelectedText: ($(this).attr('data-placeholder') || 'All'),
      enableFiltering: true
    });

    if ($('.FacetedSearch-distanceControl').length) {
      $('.FacetedSearch-distanceControl').each(function () {
        var distanceControl = $(this);
        var component = $(distanceControl).closest('.FacetedSearch');
        var currentLocationButton = $('.FacetedSearch-currentLocationButton', component);
        $('input', distanceControl).on('change', function (e) {
          $('.FacetedSearch-locationField', compone component).val('');
            $('.FacetedSearch-longitude', component).val('');
            setTimeout(function () {
              $('.FacetedSearch-submitButton', component).trigger('click');
            }, 1);
          }
        });
        if (navigator.geolocation) {
          currentLocationButton.on('click', function (e) {
            navigator.geolocation.getCurrentPosition(function (position) {
              $('.FacetedSearch-latitude', component).val(position.coords.latitude);
              $('.FacetedSearch-longitude', component).val(position.coords.longitude);
              setTimeout(function () {
                $('.FacetedSearch-submitButton', component).trigger('click');
              }, 1);
            });
          });
        } else {
          currentLocationButton.remove();
        }
      });
    }
  });

  $('.js-multiselect').each(function () {
    var $this = $(this);
    var multiSelect = $this.multiselect({
      enableClickableOptGroups: true,
      maxHeight: 300,
      buttonWidth: '100%',
      buttonClass: 'btn btn-default btn-lg',
      numberDisplayed: 0,
      nonSelectedText: $this.attr('data-nonSelectedText') || 'All',
      enableFiltering: !!$this.attr('data-enableFiltering'),
      enableCaseInsensitiveFiltering: !!$this.attr('data-enableFiltering')
    });
  });
})(jQuery);

'use strict';
(function($) {
  //onchange selector event
  $('#filter-by-state-select').on('change', function(e) {
    $('.FeaturedResearchStrata-article').removeClass('active');
    $('#' + $(e.currentTarget).val()).addClass('active');
  });
})(jQuery);

(function ($) {
  var filteredResults;
  var results;
  var resultsPerPage = 10;
  var state = {
    park: [],
    state: [],
    entrancePassRequired: [],
    timedEntry: [],
    page: 1,
    parking: []
  };
  var totalPages = 1;

  function handleClear() {
    state = {
      park: [],
       timedEntry: [],
      page: 1,
      parking: []
    };

    $('#FPD_park').multiselect('deselectAll');
    $('#FPD_state').multiselect('deselectAll');
    $('#FPD_pass').multiselect('deselectAll');
    $('#FPD_timed_entry').multiselect('deselec);

    update();
  }

  function handleFilter(type, option, checked) {
    switch(type) {
      case "park":
      case "state":
        if (checked) {
          state[type].push(option.val());
          state[type] = state[type].filter(function (item, i, a) { return a.indexOf(item) === i; });
        } else {
          state[type] = state[type].filter(function (item) { return item !== option.val(); });
        }
        update();
        break;
      case "entrancePassRequired":
      case "timedEntry":
      case "parking":
        if (checked) {
          state[type].push(parseInt(option.val()));
          state[type] = state[type].filter(function (item, i, a) { return a.indexOf(item) === i; });
        } else {
          state[type] = state[type].filter(function (item) { return item !== parseInt(option.val()); });
        }
        update();
        break;
      default:
    }
  }

  function update(withURL = true) {
    filteredResults = results.filter(function (result) {
      if (state.park.length > 0) {
        if (state.park.indexOf(result.parkCode) === -1) return false;
      }

      if (state.state.length > 0) {
        var matched = false;
        result.state.split(',').forEach(function (s) {
          if (state.state.indexOf(s) !== -1) {
            matched = true;
          }
        });
        if (!matched) return false;
      }

      if (state.entrancePassRequired.length === 1) {
        if (state.entrancePassRequired[0] !== result.entrancePassRequired) return false;
      }

      if (state.timedEntry.length === 1) {
        if (state.timedEntry[0] !== result.hasTimedEntry) return false;
      }

      if (state.parking.length === 1) {
        if (state.parking[0] !== result.isParkingFeePossible) return false;
      }

      return true;
    });

    totalPages = Math.ceil(filteredResults.length / resultsPerPage);

    render();

    if (withURL) {
      var params = new URLSearchParams(state);
      history.pushState({}, "", location.pathname + '?' + params.toString());
    }
  }

  function parkHasTimedEntry(fees) {
    var has_timed_entry = false;

    for (var f = 0; f < fees.length; f++) {
      if (fees[f].entranceFeeType.indexOf('Timed Entry') >= 0) {
        has_timed_entry = true;
        break;
      }
    }

    return has_timed_entry;
  }

  function getPrivateVehicleFee(fees) {
    var fee_display = 'N/A';

    for (var f = 0; f < fees.length; f++) {
      if (fees[f].entranceFeeType == 'Entrance - Private Vehicle') {
        fee_display = '$' + fees[f].cost;
        break;
      }
    }

    return fee_display;
  }

  function getPerPersonFee(fees) {
    var fee_display = 'N/A';

    for (var f = 0; f < fees.length; f++) {
      if (fees[ f ].entranceFeeType == 'Entrance - Per Person') {
        fee_display = '$' + fees[f].cost;
        break;
      }
    }

    return fee_display;
  }

  function renderRow(data) {
    var collapseID = 'FPD_collapse_' + Math.floor(Math.random() * 999999);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '/' + data.parkCode + '/planyourvisit/fees.htm');
    linkElement.textContent = data.parkName;

    var otherElement = document.createElement('span');
    if (parkHasTimedEntry(data.fees)) {
      otherElement.innerHTML = otherElement.innerHTML + '<svg role="presentation" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#clock"></use></svg>';
      otherElement.innerHTML = otherElement.innerHTML + '<span class="visually-hidden">Timed Entry</span> ';
    }
    if (data.isParkingFeePossible) {
      otherElement.innerHTML = otherElement.innerHTML + '<svg role="presentation" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/common/commonspot/templates/assets/sprite.symbol.svg#parking"></use></svg>';
      otherElement.innerHTML = otherElement.innerHTML + '<span class="visually-hidden">Parking/Transportation</span>';
    }

    var buttonElement = document.createElement('button');
    buttonElement.setAttribute('type', 'button');
    buttonElement.setAttribute('class', 'btn btn-light btn-sm');
    buttonElement.setAttribute('data-bs-toggle', 'collapse');
    buttonElement.setAttribute('data-bs-target', '#' + collapseID);
    buttonElement.setAttribute('aria-expanded', 'false');
    buttonElement.setAttribute('aria-controls', collapseID);
    buttonEleme class="fa fa-chevron-down"></i>';

    var values = [
      linkElement,
      document.createTextNode(data.state.replaceAll(',', ', ')),
      parseInt(data.entrancePassRequired) === 1 ? 'Yes' : 'No',
      document.createTextNode(getPrivateVehicleFee(data.fees)),
      document.createTextNode(getPerPersonFee(data.fees)),
      data.passes.length > 0 ? document.createTextNode('$' + data.passes[0].cost) : 'N/A',
      otherElement,
      buttonElement
    ];

    var rowElementA = document.createElement('tr');
    rowElementA.setAttribute('class', 'FeesPassesDatatable__Row');

    values.map(function (v) {
      var cell = document.createElement('td');
      cell.append(v);
      return cell;
    }).forEach(function (cell) {
      rowElementA.append(cell);
    });

    var rowElementB = document.createElement('tr');
    rowElementB.setAttribute('class', 'FeesPassesDatatable__DetailRow');

    var rowElementBCell = document.createElement('td');
    rowElementBCell.setAttribute('colspan', 8);

    var collapseElement = document.createElement('div');
    collapseElement.setAttribute('class', 'collapse');
    collapseElement.id = collapseID;

    var collapseContent = document.createElement('div');
    collapseContent.setAttribute('class', 'FeesPassesDatatable__DetailPane');

    var feesPasses = new NPSeesPassesRendered = feesPasses.render();
    collapseContent.append(feesPassesRendered);

    collapseElement.append(collapseContent);
    rowElementBCell.owElementBCell);

    var tbodyElement = document.createElement('tbody');
    tbodyElement.append(rowElementA);
    tbodyElement.append(rowElementB);
    return tbodyElement;
  }

  function render() {
    var maxPagesToShow = 5;
    var maxPagesToShowPerSide = Math.floor(maxPagesToShow/2);
    var page_item;

    var table = document.getElementById('FPD_table');
    if (!table) return;

    var tbodyElements = table.querySelectorAll('tbody');
    tbodyElements.forEach(function (t) { t.remove(); });

    var index = (state.page - 1) * resultsPerPage;
    var rows = filteredResults.slice(index, index + resultsPerPage);
    rows.map(renderRow).forEach(function (row) {
      table.append(row);
    });

    // Page label
    var pageLabelContainer = document.getElementById('FPD_count');
    if (!pageLabelContainer) return;

    var total = filteredResults.length;
    var index = (state.page - 1) * resultsPerPage;
    var displayIndex = total === 0 ? 0 : index + 1;
    pageLabelContainer.innerHTML = parseInt(displayIndex) + '&ndash;' + Math.min(index + resultsPerPage, total) + ' of ' + parseInt(total) + ' results';

    // Pagination
    var firstPage;
    var lastPage;
    if (totalPages <= maxPagesToShow) {
      firstPage = 1;
      lastPage = totalPages;
    } else if (state.page <= maxPagesToShowPerSide) {
      firstPage = 1;
      lastPage = maxPagesToShow;
    } else if ((totalPages - state.page) < maxPagesToShowPerSide) {
      firstPage = totalPages - maxPagesToShow;
      lastPage = totalPages;
    } else {
      firstPage = state.page - maxPagesToShowPerSide;
      lastPage = state.page + maxPagesToShowPerSide;
    }

    $('#FPD_pagination').children().remove();

    // Previous button
    var prev_page = $( '<li>' ).attr( 'class', 'page-item' );
    if (state.page === 1) {
      prev_page.append( $( '<a>' ).attr( 'class', 'page-link disabled' ).text( 'Previous' ) );
    } else {
      prev_page.append( $( '<a>' ).attr( 'href', '#' ).attr( 'class', 'page-link' ).text( 'Previous' ) );
    }
    $('#FPD_pagination').append( prev_page );

    if ( firstPage > 1 ) {
      if (state.page === 1) {
        page_item = '<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>';
      } else {
        page_item = '<li class="page-item"><a class="page-link" href="#">1</a></li>';
      }
      $('#FPD_pagination').append( page_item );
    }

    if ( firstPage > 2 ) {
      page_item = '<li class="page-item"><a class="page-link disabled">&hellip;</a></li>';
      $( '#FPD_pagination' ).append( page_item );
    }
    
    for ( var p = firstPage; p <= lastPage; p++ ) {
      page_item = '';

      if ( state.page == p ) {
        page_item = '<li class="page-item active" aria-current="page"><a class="page-link" href="#">' + p + '</a></li>';
      } else {
        page_item = '<li class="page-item"><a class="page-link" href="#">' + p + '</a></li>';
      }

      $('#FPD_pagination').append( page_item );
    }

    if ( lastPage < totalPages ) {
      page_item = '<li class="page-item"><a class="page-link disabled">&hellip;</a></li><li class="page-item" ><a class="page-link" href="#">' + totalPages + '</a></li>';
      $('#FPD_pagination').append( page_item );
    }

    // Next button
    var next_page = $( '<li>' ).attr( 'class', 'page-item' );
    if ( state.page < totalPages ) {
      next_page.append( $( '<a>' ).attr( 'href', '#' ).attr( 'class', 'page-link' ).text( 'Next' ) );
    } else {
      next_page.append( $( '<a>' ).attr( 'class', 'page-link disabled' ).text( 'Next' ) );
    }
    $('#FPD_pagination').append( next_page );
  }

  function init() {
    var newState = {
      park: [],
      state: [],
      entrancePassRequired: [],
      timedEntry: [],
      page: 1,
      parking: []
    };

    $('#FPD_park').multiselect('deselectAll');
    $('#FPD_state').multiselect('deselectAll');
    $('#FPD_pass').multiselect('deselectAll');
    $('#FPD_timed_entry').multiselect('deselectAll');
    $('#FPD_parking').multiselect('deselectAll');

    varon.search);

    if (params.get('park')) {
      newState.park = params.get('park').split(',');
      $('#FPD_park').multiselect('select', newState.park);
    }

    if (params.get('state')) {
      newState.state = params.get('state').split(',');
      $('#FPD_state').multiselect('select', newState.state);
    }

    if (params.get('entrancePassRequired')) {
      newState.entrancePassRequired = params.get('entrancePassRequired').split(',').map(function (v) { return parseInt(v); });
      $('#FPD_pass').multiselect('select', newState.entrancePassRequired);
    }

    if (params.get('timedEntry')) {
      newState.timedEntry = params.get('timedEntry').split(',').map(function(v) { return parseInt(v); });
      $('#FPD_timed_entry').multiselect('select', newState.timedEntry);
    }

    if (params.get('page')) {
      newState.page = parseInt(params.get('page'));
    }

    if (params.get('parking')) {
      newState.parking = params.get('parking').split(',').map(function(v) { return parseInt(v); });
      $('#FPD_parking').multiselect('select', newState.parking);
    }

    state = newState;

    update(false);
  }

  $(document).ready(function () {
    var container = document.getElementById('FeesPassesDatatable');
    if (container) {
      // Init filters
      $('#FPD_park').multiselect({
        buttonTextAlignment: 'start',
        enableCaseInsensitiveFiltering: true,
        enableFiltering: true,
        includeResetOption: true,
        nSelectedText: ' parks selected',
        nonSelectedText: 'Park',
        numberDisplayed: 1,
        onChange: function (option, checked) {
          handleFilter('park', option, checked);
        },
        templates: {
          button: '<button type="button" class="multiselect form-select form-select-sm dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        }
      });

      // bootstrap-multiselect doesn't provide an onReset event
      $('#FPD_park + .btn-group .multiselect-reset button').on('click', function () {
        state.park = [];
        update();
      });

      $('#FPD_state').multiselect({
        buttonTextAlignment: 'start',
        enableCaseInsensitiveFiltering: true,
        enableFiltering: true,
        includeResetOption: true,
        nSelectedText: ' states selected',
        nonSelectedText: 'State',
        numberDisplayed: 1,
        onChange: function (option, checked) {
          handleFilter('state', option, checked);
        },
        templates: {
          button: '<button type="button" class="multiselect form-select form-select-sm dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        }
      });

      // bootstrap-multiselect doesn't provide an onReset event
      $('#FPD_state + .btn-group .multiselect-reset button').on('click', function () {
        state.state = [];
        update();
      });

      $('#FPD_pass').multiselect({
        buttonTextAlignment: 'start',
        nonSelectedText: 'Entrance Pass required',
        onChange: function (option, checked) {
          handleFilter('entrancePassRequired', option, checked);
        },
        templates: {
          button: '<button type="button" class="multiselect form-select form-select-sm dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        }
      });
      $('#FPD_pass_icon').insertBefore($('#FPD_pass + .btn-group .multiselect-selected-text'));

      $('#FPD_tTimed Entry',
        onChange: function (option, checked) {
          handleFilter('timedEntry', option, checked);
        },
        templates: {
          button: '<button type="button" class="multiselect form-select form-select-sm dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        }
      });
      $('#FPD_timed_entry_icon').insertBefore($('#FPD_timed_entry + .btn-group .multiselect-selected-text'));

      $('#FPD_parking').multiselect({
        buttonTextAlignment: 'start',
        nonSelectedText: 'Parking/Transportation',
        onChange: function (option, checked) {
          handleFilter('parking', option, checked);
        },
        templates: {
          button: '<button type="button" class="multiselect form-select form-select-sm dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
        }
      });
      $('#FPD_parking_icon').insertBefore($('#FPD_parking + .btn-group .multiselect-selected-text'));

      var clearButton = document.getElementById('FPD_clear');
      if (clearButton) {
        clearButton.addEventListener("click", handleClear); 
      }

      $('ul.pagination').on('click', 'a', function (e) {
        e.preventDefault();

        if ($(this).hasClass('disabled')) return;

        clicked_page = $(this).text();

        if (clicked_page === 'Previous') {
          if (state.page !== 1) {
            state.page = state.page - 1;
            update();
          }
        } else if (clicked_page === 'Next') {
          if (state.page !== totalPages) {
            state.page = state.page + 1;
            update();
          }
        } else {
          state.page = parseInt(clicked_page);
          update();
        }
      });

      addEventListener("popstate", init);

      // Load data
      var spinner = document.getElementById('FPD_spinner');
      var messageContainer = document.getElementById('FPD_message');

      $.get('/_cs_apps/ajaxProxy.cfm', {
        bean: 'FeesPassesRenderSD',
				method: 'generateReportJSON'
      }, function (data, status) {
        var responseData = $.parseJSON(data);

        if (spinner) {
          spinner.remove();
        }

        results = responseData.parks.map(function (result) {
          if (Array.isArray(result.fees)) {
            var hasTimedEntry = 0;
            result.fees.forEach(function (fee) {
              if (fee.entranceFeeType.indexOf('Timed Entry') !== -1) {
                hasTimedEntry = 1;
              }
            });
            result.hasTimedEntry = hasTimedEntry;
          }
          return result;
        });

        init();
      }).error(function () {
        if (spinner) {
          spinner.remove();
        }

        if (messageContainer) {
          var message = document.createElement('div');
          message.innerHTML = [
            '<div class="alert alert-danger" role="alert">',
            ' Error: failed to load data',
            '</div>'
          ].join('');
          messageContainer.append(message);
        }

        results = [];
        update(false);
      });
    }
  });
})(jQuery);

(function ($, accessibleAutocomplete, location) {
  // Park name select
  var selectElement = document.querySelector("#FindAParkName");

  if (selectElement) {
    selectElement.addEventListener('change', function (event) {
      if (event.target.value.length > 0) {
        location.href = "/" + encodeURIComponent(event.target.value) + "/";
      }
    });

    accessibleAutocomplete.enhanceSelectElement({
      autoselect: false,
      confirmOnBlur: false,
      defaultValue: "",
      displayMenu: "overlay",
      placeholder: "Select a park",
      selectElement: selectElement,
      showAllValues: true,
      onConfirm: function (query) {
        // Taken from the default onConfirm handler in accessible-autocomplete's wrapper.js
        var requestedOption = [].filter.call(selectElement.options, option => (option.textContent || option.innerText) === query)[0];

        if (requestedOption) {
          requestedOption.selected = true;
          location.href = "/" + encodeURIComponent(requestedOption.value) + "/";
        }
      }
    });
  }

  // Advanced Search
  var advancedContainer = document.querySelector('.FacetedSearch');
  if (selectElement && advancedContainer) {
    // Init multiselects
    $( '#form-activity' ).multiselect({
      buttonTextAlignment: 'start',
      enableResetButton: true,
      maxHeight: 300,
      nonSelectedText: 'Activity',
      resetButtonText: 'Deselect all',
      templates: {
        button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
      },
      widthSynchronizationMode: 'ifPopupIsSmaller'
    });

    $( '#form-topic' ).multiselect({
      buttonTextAlignment: 'start',
      enableResetButton: true,
      maxHeight: 300,
      nonSelectedText: 'Topic',
      resetButtonText: 'Deselect all',
      templates: {
        button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
      },
      widthSynchronizationMode: 'ifPopupIsSmaller'
    });

    var listingResultsGrid = document.getElementById('ListingResultsGrid');
    if (listingResultsGrid) {
      var search_results = [];
      var max_results = 20;
      var current_page = 1;
      var view_all = 0; 

      // get url parameters passed from search submission	
      state_sel = getUrlParameter( 's' );
      activity_sel = getUrlParameter( 'a' );
      topic_sel = getUrlParameter( 't' );
      page_sel = getUrlParameter( 'p' );
      view_sel = getUrlParameter( 'v' );

      activity_sel_array = [];
      topic_sel_array = [];
    
      // set the values based on url
      if (state_sel > '') {
        $( '#form-park' ).val(state_sel);
      }

      if ( activity_sel > '' ) {
        activity_sel_array = activity_sel.split( ',' );	

        for (var i = 0; i < activity_sel_array.length; i++){ 
          $( '#form-activity' ).multiselect( 'select', activity_sel_array[ i ] );
        }	
      }

      if ( topic_sel > '' ) {
        topic_sel_array = topic_sel.split( ',' );

        for(var i = 0; i < topic_sel_array.length; i++){
          $( '#form-topic' ).multiselect( 'select', topic_sel_array[ i ] );
        }	
      }

      if ( page_sel > '' ) {
        current_page = page_sel;
      }

      if ( view_sel > '' ) {
        view_all = view_sel;
      }

      // load json
      find_a_park_json = '';	
      dt = new Date().getTime();

      $.ajax({
        type: 'GET',
        url: '/findapark/find_a_park.json' + '?dt=' + dt,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function( json ) {
          find_a_park_json = json;
          $( '#FacetedSearch-buttons' ).show();
          searchParks();
        }		
      });	

      $('#urb-browser-form').on('submit', function (e) {
        e.preventDefault();
      });

      // Clear Advanced Search
      $( '.FacetedSearch-clearButton' ).on( 'click', function() {
        $( '.SingleSelect' ).val('');
        $('.js-multiselect').multiselect( 'deselectAll', false );
        $('.js-multiselect').multiselect( 'refresh' );
        $( '#ListingResultsGrid' ).empty();
        $( '#ResultsPagination' ).empty();
        $( '#ListingHeaderResults' ).empty();

        //AR
        if ($('input#sort_by_distance').is(':checked')) {
          $('input#sort_by_distance').click();			
        }

        current_page = 1;
        view_all = 0;
        rewriteURL( '/findapark/advanced-search.htm' );
        return false;
      });

      // Submit Button
      $( '#FacetedSearch-submitButton').on( 'click', function() {
        current_page = 1;
        view_all = 0;
        getSearchURL();		
        trackSelections();
      });	

      $( '.FacetedSearch input#sort_by_distance' ).on( 'click', function (e) {
        if(!this.checked) { //empty lat/long fields when sort by distance is unclicked
          $('.FacetedSearch-latitude').val('');
          $('.FacetedSearch-longitude').val('');
          $('.FacetedSearch-currentLocationInput').val('');
        }
      });

      var currentLocationButton = $('button.FacetedSearch-currentLocationButton');
      currentLocationButton.on('click', function (e) {
        navigator.geolocation.getCurrentPosition(function (position) {
          $('.FacetedSearch-latitude').val(position.coords.latitude);
          $('.FacetedSearch-longitude').val(position.coords.longitude);
          $('.FacetedSearch-currentLocationInput').val(position.coords.latitude+", "+position.coords.longitude);
        });
      });
    } else {
      $('#urb-browser-form').on('submit', function (e) {
        e.preventDefault();
        current_page = 1;
        view_all = 0;
        var urlString = getSearchURLString();
        location.href = '/findapark/advanced-search.htm?' + urlString;
      });
    }
  }

  function searchParks() {
    search_results = [];
    search_results_hash = {};
    park_length = find_a_park_json.length;

    for ( var i = 0; i < park_length; i++ ) {
      var park = find_a_park_json[ i ]; 
      var state_valid = 0;
      var activity_valid = 0;
      var topic_valid = 0;

      if ( state_sel > '' ) {
        if ( park.STATE_CODE_LIST.indexOf( state_sel ) >= 0 ) {
          state_valid = 1;
        }
      } else {
        state_valid = 1;
      }

      if ( activity_sel_array > '' ) {
        if ( park.ACTIVITIES.length ) {
          activities_match = 0;
          activity_sel_length = activity_sel_array.length

          for ( var j = 0; j < activity_sel_length; j++ ) {
            park_activities_length =  park.ACTIVITIES.length;

            for ( var k = 0; k < park_activities_length; k++ ) {
              if ( activity_sel_array[ j ] == park.ACTIVITIES[ k ].activity_id ) {
                activities_match = activities_match + 1;
              }
            }
          }

          if ( activities_match == activity_sel_array.length ) {
            activity_valid = 1;
          }
        }
      } else {
        activity_valid = 1;				
      }

      if ( topic_sel_array > '' ) {
        if ( park.TOPICS.length ) {
          topics_match = 0;
          topic_sel_length = topic_sel_array.length

          for ( var j = 0; j < topic_sel_length; j++ ) {
            park_topics_length =  park.TOPICS.length;

            for ( var k = 0; k < park_topics_length; k++ ) {
              if ( topic_sel_array[ j ] == park.TOPICS[ k ].topic_id ) {
                topics_match = topics_match + 1;
              }
            }
          }

          if ( topics_match == topic_sel_array.length ) {
            topic_valid = 1;
          }
        }
      } else {
        topic_valid = 1;
      }	

      if ( state_valid && activity_valid && topic_valid ) {
        result = {};
        result.park_name = park.PARK_NAME
        result.designation = park.PRIMARY_DESIGNATION;
        result.banner_image = park.BANNER;
        result.banner_alt_text = park.BANNER_ALT_TEXT;
        result.state_list = park.STATE_CODE_LIST;
        result.state_name = park.STATE_NAME;
        result.park_code = park.PARK_CODE;
        result.distance = 0;
        result.nps_photo = park.BANNER_NPS_PHOTO;
        result.image_credit = park.BANNER_IMAGE_CREDIT;
		
        search_results.push( result );
        search_results_hash[park.PARK_CODE] = result;
      }
    }

    //reorder by location, if needed - if so, it will add distance to the struct
    var userlat = $('input[name="latitude"]').val();
    var userlong = $('input[name="longitude"]').val();

    if (
      userlat !== undefined &&
      userlat.length &&
      userlong !== undefined &&
      userlong.length
    ) {
      search_results = []; // we'll recreate this in order below
      $.get('https://nps.carto.com/api/v2/sql?q=SELECT*FROM%20func_parks_near_me(' + userlong + ',' + userlat + ',null,null)', function (data) {
        data.rows[0].func_parks_near_me.forEach(function (v) {

          if (search_results_hash.hasOwnProperty(v.unit_code)) {
                  search_results_hash[v.unit_code].distance = v.distance;
                  search_results.push(search_results_hash[v.unit_code]);				
          }
        });

        displaySearchResults();		
      });	
    } else {
      displaySearchResults();
    }
  }	

  function getSearchURLString() {
    state_sel = $( '#form-park' ).val();
    activity_sel_array = $( '#form-activity' ).val();
    topic_sel_array = $( '#form-topic' ).val();	
    urlString = '';
    activity_list = '';
    topic_list = '';

    if ( state_sel > '' ) {
      urlString = 's=' + state_sel;
    }

    if ( activity_sel_array > '' ) {
      for ( i = 0; i < activity_sel_array.length; i++ ) {
        if ( activity_list == '' ) {
          activity_list = activity_sel_array[i];
        } else {
          activity_list += ',' + activity_sel_array[i];
        }
      }

      if ( urlString > '' ) {
        urlString += '&';
      }

      urlString += 'a=' + activity_list;
    }

    if ( topic_sel_array > '' ) {
      for ( i = 0; i < topic_sel_array.length; i++ ) {
        if ( topic_list == '' ) {
          topic_list = topic_sel_array[i];
        } else {
          topic_list += ',' + topic_sel_array[i];
        }
      }

      if ( urlString > '' ) {
        urlString += '&';
      }

      urlString += 't=' + topic_list;
    }

    urlString += '&p=' + current_page;
    urlString += '&v=' + view_all;

    return urlString;
  }

  function getSearchURL() {
    var urlString = getSearchURLString();

    if ( urlString > '' ) {
      rewriteURL( '/findapark/advanced-search.htm?' + urlString );
    } else {
      rewriteURL( '/findapark/advanced-search.htm' );
    }	

    searchParks();
  }
	
  function displaySearchResults() {
    total_results = search_results.length;
    results_start = ( current_page - 1 ) * max_results;
    results_start_display = results_start + 1;

    if ( total_results == 0 ) {
      results_start_display = 0;		
    }

    results_end = results_start + max_results;

    if ( results_end > total_results || view_all == 1 ) {
      results_end = total_results;
    }	

    results_display = 'Showing ' + results_start_display + ' - ' + results_end + ' of ' + total_results + ' results';
    $( '#ListingHeaderResults' ).html( results_display );

    state_sel_text = $( '#form-park option:selected' ).text();
    activity_sel_text = getSelectedText( 'form-activity' );
    topic_sel_text = getSelectedText( 'form-topic' );

    $( '#ListingResultsGrid' ).empty();
    $( '#ResultsPagination' ).empty();

    if ( search_results.length ) {
      $( '#ListingResultsGrid' ).append( '<ul class="row"></ul>' );

      if (search_results[0].hasOwnProperty("distance") && search_results[0].distance > 0) {
        //render organized by distance groupings
        var result = "";
        var groups = [
          { heading: "1&mdash;10 miles", max: 10, parks: [] },
          { heading: "10&mdash;20 miles", max: 20, parks: [] },
          { heading: "20&mdash;50 miles", max: 50, parks: [] },
          { heading: "50&mdash;100 miles", max: 100, parks: [] },
          { headin = results_start; i < results_end; i++ ) {
            for (var i2 = 0; i2 < groups.length; i2++) {
              if (!groups[i2].hasOwnProperty('max') || search_results[i].distance < groups[i2].max) {
                groups[i2].parks.push(search_results[i]);
                break;
              }
            }
        }

        groups.forEach(function (group) {
          if (group.parks.length === 0) {
            return;
          }
          result += '<div class="col-sm-12">';
          result += '<h3 class="ListingResultsGrid-groupHeading">' + group.heading + '</h3>';
          result += '</div>';
          group.parks.forEach(function (park) {
            result += renderPark(park);
          });
        });

        $( '#ListingResultsGrid ul' ).append( result );
      } else {
        //render without distance considerations
        for ( var i = results_start; i < results_end; i++ ) {
          var result = renderPark(search_results[i]);
          if (result.length) {
            $( '#ListingResultsGrid ul' ).append( result );
          }
        }
      }

      renderPagination( current_page, search_results.length, max_results );
    } else {
      result = '<h3 class="FacetedSearch-inputHeader">You searched for parks that contain <u>all</u> of the following attributes:</h3>';
      result += '<br>';

      if ( state_sel_text > '' && state_sel_text != 'State' ) {
        result += '<h4><strong>State:</strong> ' + state_sel_text + '</h4>';
      }
      if ( activity_sel_text > '' ) {
        result += '<h4><strong>Activity:</strong> ' + activity_sel_text + '</h4>';
      }
      if ( topic_sel_text > '' ) {
        result += '<h4><strong>Topic:</strong> ' + topic_sel_text + '</h4>';
      }
      result += '<br><br></div>';
      result += '<h3 class="FacetedSearch-inputHeader">Please try again using fewer search terms.</h3>';

      $( '#ListingResultsGrid' ).append( result );
    }
  }

  function renderPark(park){
    var result = "";

    if ( park.banner_image ) {
      result = '<li class="ListingGridItem ListingResults-item col-xs-12 col-sm-6">';
      result += '<a href="/'+park.park_code+'/index.htm" class="ListingResults-titleLink">';
      result += '<img class="ListingGridItem-image" src="'+park.banner_image+'?width=400&height=117&mode=crop&quality=90"';
      result += 'srcset="'+park.banner_image+'?width=400&height=117&mode=crop&quality=90 1x, '+park.banner_image+'?width=800&amp;height=234&amp;mode=crop&amp;quality=75 2x" alt="'+park.banner_alt_text+'">';
      result += '<h3 class="ListingGridItem-title carrot-end">'+park.park_name+'</h3>';
      result += '<div class="ListingGridItem-details">';
      result += '<span class="ListingGridItem-subtitle">'+park.designation+'&nbsp;</span>';
      result += '<p>'+park.state_name+'</p>';
	  
      if ( park.nps_photo == 0 && park.image_credit.length ) {
        result += '<span class="image_credit">' + park.image_credit + '</span>';
      }
	  
      result += '</div>';
      result += '</a>';
      result += '</li>';
    }

    return result;
  }

  function renderPagination( page, total_results, max_results ) {		
    var maxPagesToShow = 7;
    var maxPagesToShowPerSide = Math.floor(maxPagesToShow/2);
    current_page = page;

    total_pages = Math.ceil( ( total_results / 20 ) );

    if( total_pages <= maxPagesToShow ){	
      firstPage = 1;
      lastPage = total_pages;
    }else if( current_page <= maxPagesToShowPerSide ){
      firstPage = 1;
      lastPage = maxPagesToShow;
    }else if(( total_pages - current_page ) < maxPagesToShowPerSide){
      firstPage = total_pages - maxPagesToShow;	
      lastPage = total_pages;
    }else{
      firstPage = current_page - maxPagesToShowPerSide;
      lastPage = current_page + maxPagesToShowPerSide;	
    }

    $( '#ResultsPagination' ).empty();

    var pagination = '<div class="row">';

    pagination += '<nav role="widget" aria-label="Pagination">';
    pagination += '<ul class="Pagination">';		

    if ( total_pages > 1 && view_all == 0) {
      if ( current_page > 1 ) {
        pagination += '<li class="prev"><a href="#" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      } else {
        pagination += '<li class="prev active"><a href="#" aria-disabled="true" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      }

      if ( firstPage > 1 ) {
        pagination += '<li><a href="#" class="page_number" data-page="1">1</a></li>';
      }

      if ( firstPage > 2 ) {
        pagination += '<li class="gap">&hellip;</li>';
      }

      for ( var i = firstPage; i <= lastPage; i++ ) {
        if ( i == current_page ) {
          pagination += '<li class="active"><a href="#" aria-disabled="true"><span class="visuallyhidden">You\'re currently on page</span>' + i + '</a></li>';
        } else { 
          pagination += '<li><a href="#" class="page_number" data-page="' + i + '">' + i + '</a></li>';
        }
      }

      if ( lastPage < total_pages ) {
        pagination += '<li class="gap">&hellip;</li>';
        pagination += '<li><a href="#" class="page_number" data-page="' + total_pages + '">' + total_pages + '</a></li>';
      }

      if ( current_page == lastPage ) {
        pagination += '<li class="next active"><a href="#" aria-disabled="true" class="carrot-end">Next <span class="visuallyhidden">page</span></a></li>';
      } else {
        pagination += '<li class="next"><a href="#" class="carrot-end">Next <span class="visuallyhidden">page</span></a></li>';
      }

      pagination += '</ul></nav>';
    }

    pagination += '<div class="ResultsFooter-links"><a href="#main" class="js-backtotop">Back to top</a> | <a href="#" class="FacetedSearch-viewAll">View All</a></div></div>';

    $( '#ResultsPagination' ).append( pagination );

    $( 'a.page_number' ).on( 'click', function() {
      current_page = $( this ).data( 'page' );
      getSearchURL();
      $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      return false;
    });

    $( 'li.prev a' ).on( 'click', function() {		
      disabled = $( this ).attr( 'aria-disabled' );

      if ( disabled == undefined ) {
        current_page = parseInt( current_page ) - 1;
        getSearchURL();
        $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      }

      return false;
    });	

    $( 'li.next a' ).on( 'click', function() {		
      disabled = $( this ).attr( 'aria-disabled' );		

      if ( disabled == undefined ) {
        current_page = parseInt( current_page ) + 1;
        getSearchURL();
        $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      }

      return false;
    });		

    $( '.FacetedSearch-viewAll' ).on( 'click', function() {
      current_page = 1;
      view_all = 1;
      getSearchURL();
      return false;
    });	
  }

  function getSelectedText( selectbox ) {	
    selectedOptionValue = $( '#' + selectbox ).val();
    selectedOptionText = '';

    if ( selectedOptionValue > '' ) {
      for (var i = 0; i < selectedOptionValue.length; i++) {
        var val = selectedOptionValue[i]; 
        var txt = $("#" + selectbox + " option[value='"+val+"']").text();

        if ( txt.indexOf( 'State' ) == -1 ) {
          if ( selectedOptionText == '' ) {
            selectedOptionText = txt;
          } else {
            selectedOptionText += ', ' + txt;
          }
        }
      }
    }

    return selectedOptionText;
  }

  function trackSelections() {
    if (typeof ga !== 'function') return;
    state_sel_text = $( '#form-park option:selected' ).text();
    activity_sel_text = getSelectedText( 'form-activity' );
    topic_sel_text = getSelectedText( 'form-topic' );

    if ( state_sel_text > '' && state_sel_text.indexOf( 'State' ) < 0 ) {
      ga('GSA_ENOR0.send', 'event', { eventCategory: 'FAP Advanced Search', eventAction: 'State', eventLabel: state_sel_text });
    }

    if ( activity_sel_text > '' ) {
      activities = activity_sel_text.split(',');

      for ( var i = 0; i < activities.length; i++ ) {
        ga('GSA_ENOR0.send', 'event', { eventCategory: 'FAP Advanced Search', eventAction: 'Activity', eventLabel: activities[ i ] });
      }
    }

    if ( topic_sel_text > '' ) {
      topics = topic_sel_text.split(',');

      for ( var i = 0; i < topics.length; i++ ) {
        ga('GSA_ENOR0.send', 'event', { eventCategory: 'FAP Advanced Search', eventAction: 'Topic', eventLabel: topics[ i ] });
      }
    }	
  }

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  function rewriteURL(newURL){
    //if pushState available, change the url in the browser
    if(history.pushState) {
      history.pushState(null, null, newURL);
    }
  }
})($, accessibleAutocomplete, location);

'use strict';
(function($) {
  var container = document.getElementById('GlobalNav');
  if (container) {
    $(container).on('keyup', '.GlobalNav__Link', function (e) {
      if (e.keyCode === 9) {
        var openButtons = container.querySelectorAll('.GlobalNav__SubmenuToggle[aria-expanded="true"]');
        openButtons.forEach(function (button) {
          button.click();
        });
      }
    });

    $(container).on('keyup', '.GlobalNav__SubmenuToggle', function (e) {
      if (e.keyCode === 40) {
        // down arrow key
        var submenu = document.getElementById(e.target.getAttribute('aria-controls'));

        if (submenu) {
          var firstChildLink = submenu.querySelector('a');

          if (firstChildLink) {
            e.preventDefault();

            if (e.target.getAttribute('aria-expanded') === 'false') {
              e.target.click();
            }

            firstChildLink.focus();
          }
        }
      }
    });

    $(container).on('keyup', '.GlobalNav__Submenu__Link', function (e) {
      switch (e.keyCode) {
        case 27:
          // esc key
          e.preventDefault();
          var submenu = e.target.closest('.GlobalNav__Submenu');
          var parentButton = submenu.parentNode.querySelector('.GlobalNav__SubmenuToggle');
          if (parentButton) {
            parentButton.click();
            parentButton.focus();
          }
          break;
        case 38:
          // up arrow key
          e.preventDefault();
          var submenu = e.target.closest('.GlobalNav__Submenu')
          var currentIndex = links.indexOf(e.target);

          if (currentIndex > 0) {
            links[currentIndex - 1].focus();
          }
          break;
        case 40:
          // down arrow key
          e.preventDefault();
          var submenu = e.target.closest('.GlobalNav__Submenu');
          var links = Array.from(submenu.querySelectorAll('a'));
          var currentIndex = links.indexOf(e.target);

          if (currentIndex < (links.length - 1)) {
            links[currentIndex + 1].focus();
          }
          break;
      }
    });
  }
})(jQuery);

/* global jQuery */
'use strict';

(function ($) {
  function getPathFromUrl(url) {
    return url.split('?')[0];
  }

  function SuggestionView(el, callbacks) {
    var self = this;

    this.$el = $(el);
    this.model = {
      suggestions: [],
      maxSuggestions: 3,
      baseUrl: '/search/'
    };

    this.getSuggestions = function (q) {
      if (q.length > 2) {
        $.ajax({
          type: 'get',
          dataType: 'jsonp',
          url: 'https://search.usa.gov/sayt?aid=277',
          data: { q },
          success: function (suggestions) {
            self.suggestions = suggestions.slice(0, self.model.maxSuggestions);
          }
        });
      } else {
        self.suggestions = [];
      }
    };

    this.render = function () {
      var suggestions = self.suggestions;
      this.$el.html('');

      if (suggestions.length) {
        var listElement = document.createElement('ul');
        var suggestionURL = self.model.baseUrl + '?query=';

        self.suggestions.forEach(function (suggestion) {
          var listItem = document.createElement('li');
          var anchor = document.createElement('a');
          anchor.setAttribute('href', suggestionURL + encodeURIComponent(suggestion));
          anchor.setAttribute('data-value', suggestion);
          anchor.text = suggestion;
          listItem.appendChild(anchor);
          listElement.appendChild(listItem);
        });

        this.$el.append(listElement);

        if (typeof callbacks.didUpdateWithSuggestions === 'function') {
          callbacks.didUpdateWithSuggestions();
        }
      }
    };

    this.handleKeyUp = function (evt) {
      var $this = $(evt.target);
      var index = $this.closest('li').index();
      var suggestionLength = self.suggestions.length;

      switch (evt.keyCode) {
        case 40: // down
          evt.preventDefault();
          if (index < suggestionLengt');
            $next.focus();
          }
          break;
        case 38: // up
          evt.preventDefault();
          if (index >= 1) {
            var $next = self.$el.find('li').eq(index - 1).find('a');
   t === 'function') {
            callbacks.didArrowUpAndOut();
          }
          break;
        case 9: // tab
          self.suggestions = [];
          break;
        case 13: // enter
          evt.preventDefault();
          callbacks.didSelectItem($this.data('value'));
          break;
      }
    };

    this.focusFirstSuggestion = function () {
      self.$el.find('li:first-child a').focus();
    };

    // Listeners
    this.$el.on('keyup', 't suggestions() {
      return this.model.suggestions;
    },
    set suggestions(value) {
      this.model.suggestions = value;
      this.render();
    }
  };

  function GlobalSearchView(el) {
    var self = this;

    this.$form = $(el);
    this.$input = this.$form.find('input[name="query"]');
    this.formUrl = getPathFromUrl(this.$form.attr('action'));
    this.suggestionTimer = null;

    this.suggestionsView = new SuggestionView(
      this.$form.find('.GlobalSearch-suggestions').get(0),
      {
        didArrowUm: function (value) {
          self.$input.val(value);
          self.submit();
        }
      }
    );

    this.handleKeyUp = function (evt) {
      if (evt.keyCode === 40 && self.suggestionsView.suggestions.length) { // keydown
        evt.preventDefault();
        self.suggestionsView.focusFirstSuggestion();
      } else if (evt.keyCode !== 13) {
        self.getSuggestions();
      }
    };

    // Debounce request to improve performance
    this.getSuggestions = function (evt) {
      if (self.suggestionTimer) {
        clearTimeout(self.suggestionTimer);
      }

      self.suggestionTimer = setTimeout(function () {
        self.suggestionsView.getSuggestions(self.$input.val());
      }, 175);
    },

    this.handleButtonClick = function (e) {
      e.preventDefault();

      if (e.target.getAttribute('data-scope') === 'all') {
        self.$form.find('input[name="sitelimit"]').val('/');
      }

      self.submit();
    };

    this.submit = function (e) {
      if (e !== undefined) {
        e.preventDefault();
      }

      var newWindowLocation = self.formUrl + '?' + self.$form.serialize();

      window.location = newWindowLocation;
    };

    // Listeners
    this.$form.on('submit', this.submit);
    this.$form.on('click', 'button[type="submit"]', this.handleButtonClick);
    this.$form.on('keyup', 'input', this.handleKeyUp);

    // Hide the form when the user clicks outside 
    $('body').one('click', this.close);
    this.$form.on('click', function (e) { e.stopPropagation(); });
  }

  $(document).ready(function () {
    var globalHeaderSearch = document.getElementById('GlobalHeaderSearch');
    var globalFooterSearch = document.getElementById('GlobalFooterSearch');

    if (globalHeaderSearch) {
      var HeaderSearch = new GlobalSearchView(globalHeaderSearch);
    }

    if (globalFooterSearch) {
      var FooterSearch = new GlobalSearchView(globalFooterSearch);
    }
  });
})(jQuery);

(function ($, location) {
  var state_sel,
    type_sel,
    agency_sel,
    page_sel,
    view_sel,
    type_sel_array = [],
    agency_sel_array = [];

  var search_results = [];
  var max_results = 20;
  var current_page = 1;
  var view_all = 0;

  function objSort() {
    var args = arguments,
        array = args[0],
        case_sensitive, keys_length, key, desc, a, b, i;

    if (typeof arguments[arguments.length - 1] === 'boolean') {
        case_sensitive = arguments[arguments.length - 1];
        keys_length = arguments.length - 1;
    } else {
        case_sensitive = false;
        keys_length = arguments.length;
    }

    return array.sort(function (obj1, obj2) {
        for (i = 1; i < keys_length; i++) {
            key = args[i];
            if (typeof key !== 'string') {
                desc = key[1];
                key = key[0];
                a = obj1[args[i][0]];
                b = obj2[args[i][0]];
            } else {
                desc = false;
                a = obj1[args[i]];
                b = obj2[args[i]];
            }

            if (case_sensitive === false && typeof a === 'string') {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            if (! desc) {
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                if (a > b) return -1;
                if (a < b) return 1;
            }
        }
        return 0;
    });
  }

  function formatPhone(phone, phone_extension) {
    var formatted_phone = '';
    var phone_string = phone.toString();

    if (phone_string.length && phone_string.length === 10) {
      var match = phone_string.match(/^(\d{3})(\d{3})(\d{4})$/);

      if (match) {
          formatted_phone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
    }

    if (phone_extension > 0) {
      formatted_phone = formatted_phone + ' ext. ' + phone_extension;
    }

    return '<strong>Phone:</strong> ' + formatted_phone;
  }

  function searchGoldStar() {
	  var sortedData = objSort( gold_star_json, 'name' );

    //Clean The Array!!!
    clean_index = 0;
    clean_arr_length = sortedData.length; 
    clean_filter_arr = [];
    for(j=0;j<clean_arr_length;j++) {
      if( sortedData[j].is_deleted == 0 && 
        sortedData[j].is_active_participant == 1 && 
        sortedData[j].organization_code !== undefined && 
        sortedData[j].organization_code !== null && 
          !( sortedData[j].access_pass_available == 0 && 
          sortedData[j].annual_pass_available == 0 &&
          sortedData[j].fourth_grade_pass_available == 0 &&
          sortedData[j].military_pass_available == 0 &&
          sortedData[j].senior_pass_available == 0 )
        ) {
        clean_filter_arr[clean_index] = sortedData[j];
        clean_index++;
      }
    }
    sortedData = clean_filter_arr;

    //Check State Filter
    if( state_sel !== undefined && state_sel !== null && state_sel !== '') {
      state_index = 0;
      state_arr_length = sortedData.length; 
      
      state_filter_arr = [];
      for(j=0;j<state_arr_length;j++) {
              
        
        if( sortedData[j].state_code == state_sel ) {
          state_filter_arr[state_index] = sortedData[j];
          state_index++;

        }
        
      }
      sortedData = state_filter_arr;
      
    }

    //Check Type Filter Access Pass, Annual Pass,Fourth Grade Pass,Military Pass,Senior Pass
    if (type_sel_array.length > 0) {
      type_index = 0;
      type_arr_length = sortedData.length;
      type_filter_arr = [];
      for(j=0;j<type_arr_length;j++) {

        if ( type_sel_array.indexOf( 'Access Pass' ) >= 0 ) {
          if ( sortedData[j].access_pass_available == 1 ) {
            if ( type_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              type_filter_arr[type_index] = sortedData[j];
              type_index++;
            }
          }
        }			
        if ( type_sel_array.indexOf( 'Annual Pass' ) >= 0 ) {
          if ( sortedData[j].annual_pass_available == 1 ) {
            if ( type_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              type_filter_arr[type_index] = sortedData[j];
              type_index++;
            }
          }
        }
        if( type_sel_array.indexOf( 'Fourth Grade Pass' ) >= 0 ) {
          if ( sortedData[j].fourth_grade_pass_available == 1 ) {
            if ( type_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              type_filter_arr[type_index] = sortedData[j];
              type_index++;
            }
          }
        }
        if( type_sel_array.indexOf( 'Military Pass' ) >= 0 ) {
          if ( sortedData[j].military_pass_available == 1 ) {
            if ( type_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              type_filter_arr[type_index] = sortedData[j];
              type_index++;
            }
          }
        }
        if( type_sel_array.indexOf( 'Senior Pass' ) >= 0 ) {
          if ( sortedData[j].senior_pass_available == 1 ) {
            if ( type_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              type_filter_arr[type_index] = sortedData[j];
              type_index++;
            }
          }
        }			
      }
      sortedData = type_filter_arr;
    }

    //Check Agency Filter: BLM, FWS, FS, NPS, USACE, USBR 
    if (agency_sel_array.length > 0) {
      agency_index = 0;
      agency_arr_length = sortedData.length;
      agency_filter_arr = [];
      for(j=0;j<agency_arr_length;j++) {

        if ( agency_sel_array.indexOf( 'BLM' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'BLM' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }			
        if ( agency_sel_array.indexOf( 'FWS' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'FWS' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }
        if( agency_sel_array.indexOf( 'FS' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'FS' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }
        if( agency_sel_array.indexOf( 'NPS' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'NPS' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }
        if( agency_sel_array.indexOf( 'USACE' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'USACE' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }
        if( agency_sel_array.indexOf( 'USBR' ) >= 0 ) {
          if ( sortedData[j].organization_code == 'USBR' ) {
            if ( agency_filter_arr.indexOf( sortedData[j] ) == -1 ) {
              agency_filter_arr[agency_index] = sortedData[j];
              agency_index++;
            }
          }
        }	
      }
      sortedData = agency_filter_arr;
    }
    
    search_results = sortedData;
    displaySearchResults();
  }	

  function printGoldStar() {
    // get url parameters and append to new url
    searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('p');
    searchParams.delete('v');
    location_url = '/common/commonspot/customcf/goldstar_search/pass-locations-print.cfm?' + searchParams;
    location.href = location_url;
  }

  function getSearchURL() {
    state_sel = $( '#form-state-goldstar' ).val();
    type_sel_array = $( '#form-type' ).val() || [];
    agency_sel_array = $( '#form-agency' ).val() || [];	
    urlString = '';
    type_list = '';
    agency_list = '';

    if ( state_sel > '' ) {
      urlString = 's=' + state_sel;
    }

    if ( type_sel_array.length > 0 ) {
      for ( i = 0; i < type_sel_array.length; i++ ) {
        if ( type_list == '' ) {
          type_list = type_sel_array[i];
        } else {
          type_list += ',' + type_sel_array[i];
        }
      }

      if ( urlString > '' ) {
        urlString += '&';
      }

      urlString += 't=' + type_list;
    }

    if ( agency_sel_array.length > 0 ) {
      for ( i = 0; i < agency_sel_array.length; i++ ) {
        if ( agency_list == '' ) {
          agency_list = agency_sel_array[i];
        } else {
          agency_list += ',' + agency_sel_array[i];
        }
      }

      if ( urlString > '' ) {
        urlString += '&';
      }

      urlString += 'a=' + agency_list;
    }

    urlString += '&p=' + current_page;
    urlString += '&v=' + view_all;

    if ( urlString > '' ) {
      rewriteURL( '/planyourvisit/pickup-pass-locations.htm?' + urlString );
    } else {
      rewriteURL( '/planyourvisit/pickup-pass-locations.htm' );
    }	

    searchGoldStar();
  }
	
  function displaySearchResults() {
    total_results = search_results.length;
    results_start = ( current_page - 1 ) * max_results;
    results_start_display = results_start + 1;

    if ( total_results == 0 ) {
      results_start_display = 0;		
    }

    results_end = results_start + max_results;

    if ( results_end > total_results || view_all == 1 ) {
      results_end = total_results;
    }	

    results_display = 'Showing ' + results_start_display + ' - ' + results_end + ' of ' + total_results + ' results';
    $( '#ListingHeaderResults' ).html( results_display );

    state_sel_text = $( '#form-state-goldstar option:selected' ).text();
    type_sel_text = getSelectedText( 'form-type' );
    agency_sel_text = getSelectedText( 'form-agency' );

    $( '#ListingResultsGrid' ).empty();
    $( '#ResultsPagination' ).empty();

    if ( search_results.length ) {
      //show print button because there are results
      $( '#FacetedSearch-printButton' ).show();

      $( '#ListingResultsGrid' ).append( '<ul class="row"></ul>' );

      for ( var i = results_start; i < results_end; i++ ) {
        var result = renderResult(search_results[i]);
        if (result.length) {
          $( '#ListingResultsGrid ul' ).append( result );
        }
      }

      renderPagination( current_page, search_results.length, max_results );
    } else {
		  //hide print button because there are no results
      $( '#FacetedSearch-printButton' ).hide();

      result = '<h3 class="FacetedSearch-inputHeader">You searched for parks that contain <u>all</u> of the following attributes:</h3>';
      result += '<br>';

      if ( state_sel_text > '' && state_sel_text != 'State or Territory' ) {
        result += '<h4><strong>State:</strong> ' + state_sel_text + '</h4>';
      }
      if ( type_sel_text > '' ) {
        result += '<h4><strong>Activity:</strong> ' + type_sel_text + '</h4>';
      }
      if ( agency_sel_text > '' ) {
        result += '<h4><strong>Topic:</strong> ' + agency_sel_text + '</h4>';
      }
      result += '<br><br></div>';
      result += '<h3 class="FacetedSearch-inputHeader">Please try again using fewer search terms.</h3>';

      $( '#ListingResultsGrid' ).append( result );
    }
  }

  function renderResult(item) {
    var result = "";
    var passes_available = [];
		var organization_name = '';

    if ( item.access_pass_available == 1 ) {
      passes_available.push( 'Access Pass' );
    }			
    if ( item.annual_pass_available == 1 ) {
      passes_available.push( 'Annual Pass' );
    }
    if ( item.fourth_grade_pass_available == 1 ) {
      passes_available.push( 'Fourth Grade Pass' );
    }
    if ( item.military_pass_available == 1 ) {
      passes_available.push( 'Military Pass' );
    }
    if ( item.senior_pass_available == 1 ) {
      passes_available.push( 'Senior Pass' );
    }
    if ( item.organization_code == 'BLM' ) {
      organization_name = 'Bureau of Land Management';
    }
    if ( item.organization_code == 'FWS' ) {
      organization_name = 'Fish and Wildlife Service';
    }
    if ( item.organization_code == 'FS' ) {
      organization_name = 'Forest Service';
    }
    if ( item.organization_code == 'NPS' ) {
      organization_name = 'National Park Service';
    }
    if ( item.organization_code == 'USACE' ) {
      organization_name = 'US Army Corps of Engineers';
    }
    if ( item.organization_code == 'USBR' ) {
      organization_name = 'US Bureau of Reclamation';
    }

    result += '<div class="AggregatedAlerts__ParkHeading">';
    result += '<span class="ListingResults-subtitle">' + organization_name + '</span>';
    result += '<a href="' + item.website_url + '"><span class="park">' + item.name + '</span></a>';
    result += '<span class="state">' + item.city + ',' + item.state_code + '</span>';
    result += '<br /><span>' + formatPhone( item.phone, item.extension ) + '</span>';
    result += '<br /><span><strong>Passes Available:</strong> ';
    for ( p = 0; p < passes_available.length; p++ ) {
      if ( p > 0 ) result += ', ';
      result += passes_available[ p ];
    }
    result += '</span>';
    result += '</div>';

    return result;
  }

  function renderPagination( page, total_results, max_results ) {		
    var maxPagesToShow = 7;
    var maxPagesToShowPerSide = Math.floor(maxPagesToShow/2);
    current_page = page;

    total_pages = Math.ceil( ( total_results / 20 ) );

    if( total_pages <= maxPagesToShow ){	
      firstPage = 1;
      lastPage = total_pages;
    }else if( current_page <= maxPagesToShowPerSide ){
      firstPage = 1;
      lastPage = maxPagesToShow;
    }else if(( total_pages - current_page ) < maxPagesToShowPerSide){
      firstPage = total_pages - maxPagesToShow;	
      lastPage = total_pages;
    }else{
      firstPage = current_page - maxPagesToShowPerSide;
      lastPage = current_page + maxPagesToShowPerSide;	
    }

    $( '#ResultsPagination' ).empty();

    var pagination = '<div class="row">';

    pagination += '<nav role="widget" aria-label="Pagination">';
    pagination += '<ul class="Pagination">';		

    if ( total_pages > 1 && view_all == 0) {
      if ( current_page > 1 ) {
        pagination += '<li class="prev"><a href="#" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      } else {
        pagination += '<li class="prev active"><a href="#" aria-disabled="true" class="carrot-start">Previous <span class="visuallyhidden">page</span></a></li>';
      }

      if ( firstPage > 1 ) {
        pagination += '<li><a href="#" class="page_number" data-page="1">1</a></li>';
      }

      if ( firstPage > 2 ) {
        pagination += '<li class="gap">&hellip;</li>';
      }

      for ( var i = firstPage; i <= lastPage; i++ ) {
        if ( i == current_page ) {
          pagination += '<li class="active"><a href="#" aria-disabled="true"><span class="visuallyhidden">You\'re currently on page</span>' + i + '</a></li>';
        } else { 
          pagination += '<li><a href="#" class="page_number" data-page="' + i + '">' + i + '</a></li>';
        }
      }

      if ( lastPage < total_pages ) {
        pagination += '<li class="gap">&hellip;</li>';
        pagination += '<li><a href="#" class="page_number" data-page="' + total_pages + '">' + total_pages + '</a></li>';
      }

      if ( current_page == lastPage ) {
        pagination += '<li class="next active"><a href="#" aria-disabled="true" class="carrot-end">Next <span class="visuallyhidden">page</span></a></li>';
      } else {
        pagination += '<li class="next"><a href="#" class="carrot-end">Next <span class="visuallyhidden">page</span></a></li>';
      }

      pagination += '</ul></nav>';
    }

    pagination += '<div class="ResultsFooter-links"><a href="#main" class="js-backtotop">Back to top</a> | <a href="#" class="FacetedSearch-viewAll">View All</a></div></div>';

    $( '#ResultsPagination' ).append( pagination );

    $( 'a.page_number' ).on( 'click', function() {
      current_page = $( this ).data( 'page' );
      getSearchURL();
      $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      return false;
    });

    $( 'li.prev a' ).on( 'click', function() {		
      disabled = $( this ).attr( 'aria-disabled' );

      if ( disabled == undefined ) {
        current_page = parseInt( current_page ) - 1;
        getSearchURL();
        $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      }

      return false;
    });	

    $( 'li.next a' ).on( 'click', function() {		
      disabled = $( this ).attr( 'aria-disabled' );		

      if ( disabled == undefined ) {
        current_page = parseInt( current_page ) + 1;
        getSearchURL();
        $( 'html,body' ).animate({ scrollTop: $( 'div.FacetedSearch' ).offset().top -20 }, 500 );
      }

      return false;
    });		

    $( '.FacetedSearch-viewAll' ).on( 'click', function() {
      current_page = 1;
      view_all = 1;
      getSearchURL();
      return false;
    });	
  }

  function getSelectedText( selectbox ) {	
    selectedOptionValue = $( '#' + selectbox ).val();
    selectedOptionText = '';

    if ( selectedOptionValue > '' ) {
      for (var i = 0; i < selectedOptionValue.length; i++) {
        var val = selectedOptionValue[i]; 
        var txt = $("#" + selectbox + " option[value='"+val+"']").text();

        if ( txt.indexOf( 'State' ) == -1 ) {
          if ( selectedOptionText == '' ) {
            selectedOptionText = txt;
          } else {
            selectedOptionText += ', ' + txt;
          }
        }
      }
    }

    return selectedOptionText;
  }

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  function rewriteURL(newURL){
    //if pushState available, change the url in the browser
    if(history.pushState) {
      history.pushState(null, null, newURL);
    }
  }

  var container = document.querySelector('.GoldStarSearch');
  if (container) {
    // Init multiselects
    $( '#form-type' ).multiselect({
      buttonTextAlignment: 'start',
      enableResetButton: true,
      maxHeight: 300,
      nonSelectedText: 'Pass Type',
      resetButtonText: 'Deselect all',
      templates: {
        button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
      },
      widthSynchronizationMode: 'ifPopupIsSmaller'
    });

    $( '#form-agency' ).multiselect({
      buttonTextAlignment: 'start',
      enableResetButton: true,
      maxHeight: 300,
      nonSelectedText: 'Federal Agency',
      resetButtonText: 'Deselect all',
      templates: {
        button: '<button type="button" class="multiselect form-select dropdown-toggle text-start" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>'
      },
      widthSynchronizationMode: 'ifPopupIsSmaller'
    });

    // get url parameters passed from search submission	
    state_sel = getUrlParameter( 's' );
    type_sel = getUrlParameter( 't' );
    agency_sel = getUrlParameter( 'a' );
    page_sel = getUrlParameter( 'p' );
    view_sel = getUrlParameter( 'v' );

    type_sel_array = [];
    agency_sel_array = [];
	
    // set the values based on url
    if ( state_sel > '' ) {
      $( '#form-state-goldstar' ).val(state_sel);
    }

    if ( type_sel > '' ) {
      type_sel_array = type_sel.split( ',' );	

      for (var i = 0; i < type_sel_array.length; i++){ 
        $( '#form-type' ).multiselect( 'select', type_sel_array[ i ] );
      }	
    }

    if ( agency_sel > '' ) {
      agency_sel_array = agency_sel.split( ',' );

      for(var i = 0; i < agency_sel_array.length; i++){
        $( '#form-agency' ).multiselect( 'select', agency_sel_array[ i ] );
      }	
    }

    if ( page_sel > '' ) {
      current_page = page_sel;
    }

    if ( view_sel > '' ) {
      view_all = view_sel;
    }

    // load json
    gold_star_json = '';

    $.ajax({
      type: 'GET',
      url: '/external-resources/plastic_pass_locations.json',
      //url: '/mock/plastic-pass-sites.json',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function( json ) {
        gold_star_json = json;
        $( '#FacetedSearch-buttons' ).show();
        searchGoldStar();
      }		
    });	

    // Clear Advanced Search
    $( '.FacetedSearch-clearButton' ).on( 'click', function() {
      $('#form-state-goldstar').val('');
      $('select[multiple]').multiselect('deselectAll');
      $( '#ListingResultsGrid' ).empty();
      $( '#ResultsPagination' ).empty();
      $( '#ListingHeaderResults' ).empty();

      current_page = 1;
      view_all = 0;
      //rewriteURL( '/planyourvisit/pickup-pass-locations.htm' );
      getSearchURL();		
      return false;
    });

    // Submit Button
    $('#FacetedSearch-submitButton').on( 'click', function() {
      current_page = 1;
      view_all = 0;
      getSearchURL();		
    });	

    // Print Button
    $('#FacetedSearch-printButton').on( 'click', function() {
      current_page = 1;
      view_all = 0;
      getSearchURL();	
      printGoldStar();
    });	
  }
})($, location);

/* global jQuery*/
'use strict';
(function ($) {
  $(window).on('load', function() {
    if ($(".ImageComparison__Images .twentytwenty-container").length) {
      $(".ImageComparison__Images .twentytwenty-container").each(function () {
        if ($(this).data('orientation') === 'vertical') {
          $(this).twentytwenty({ orientation: 'vertical' });
        } else {
          $(this).twentytwenty();

          var timeout;
          var container = this;
          var image = container.querySelector('img');

          // Debounced resize handler for centering horizontal comparisons
          var resize = function () {
            if (timeout) {
              clearTimeout(timeout);
              timeout = setTimeout(resize, 100);
            } else {
              if (container.offsetWidth !== image.offsetWidth) {
                container.style.width = image.offsetWidth + 'px';
              }
            }
          };

          $(window).on('resize', resize);

          resize();
        }

        $(this).on('mousedown', function () {
          var altSnippet = this.getAttribute('data-gas');

          if (typeof gas === 'function') {
            gas(
              'send',
              'event',
              'Image Comparison Slider',
              document.location.href,
              altSnippet,
              1,
              false
            );

            console.log('GA event triggered. ' + altSnippet);
          }
        });
      });
    }
  });
})(jQuery);

(function ($) {
  var containers = document.querySelectorAll('.InPageNav');

  containers.forEach(function (container) {
    var dropdownMenu = container.querySelector('.dropdown-menu');

    $(this).delay(1000).queue(function() {
      //loop h2 tags in page content
      var thisIPNtop = $(container).offset().top;
      var validHeadings = '#main h2, .ColumnMain h2, .ColumnMain p.section_title';
      var invalidHeadings = '#Alerts h2, h2.related-parks, h2:empty, .RelatedArticle h2, h2.PhotoGallery__Title, h2.RelatedGrid__Heading, h2.SharedContentTags__Heading, h2.Feature-title';

      $(validHeadings).not(invalidHeadings).each(function (i) {
        var aName = "onthisPage-" + i;
        var aTitle = $.trim($(this).text().replace(/\r?\n/g, "")); //remove whitespace

        if (aTitle.length && aTitle != 'Park footer') {
          if (thisIPNtop < $(this).offset().top) { //only show items below the menu
            //add <a name> above h2
            $(this).append('<a name="' + aName + '" class="onThisPageAnchor"></a>');

            //insert InPageNAV li for this h2
            var trackingEvent = {
              "type": "event",
              "category": "PYV Component",
              "action": "Navigate",
              "label": "Navigation In Page"
            };

            var listItem = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', '#' + aName);
            anchor.setAttribute('class', 'dropdown-item');
            anchor.setAttribute('data-track', JSON.stringify(trackingEvent));
            anchor.textContent = aTitle;
            listItem.appendChild(anchor);
            dropdownMenu.appendChild(listItem);
          }
        }
      });
    });
  });
})(jQuery);

//Used on the explore_research_groups template
'use strict';
(function($) {
  $(document).ready(function () {
    if ($('.ExploreResearchGroups-links').length > 0) {
      var sizeDiv = $('.ExploreResearchGroups-links').size();
      var x = 2;

      $('.ExploreResearchGroups-links:lt(' + x + ')').show();
      $('#showMoreBtn').click(function() {
        x = x + 2 <= sizeDiv ? x + 2 : sizeDiv;
        $('.ExploreResearchGroups-links:lt(' + x + ')').show();
        $('.ExploreResearchGroups-links:lt(' + x + ')').show().addClass('present');
        var newFocus = $('.ExploreResearchGroups-links.present:eq(-2)').find('.ExploreResearchGroups-link');
        //focus on newly created
        $(newFocus).focus();
        if (x == sizeDiv) {
          $('#showMoreBtn').hide();
        }
      });
    }
  });
})(jQuery);

//Used on the publication_search template
'use strict';
(function($) {
  $(document).ready(function () {
    if ($('.PublicationSearch-gridItem').length > 0) {
      var sizeDiv = $('.PublicationSearch-gridItem').size();
      var x = 8;

      $('.PublicationSearch-gridItem:lt(' + x + ')').show();
      $('#loadMoreBtn').click(function() {
        x = x + 8 <= sizeDiv ? x + 8 : sizeDiv;
        $('.PublicationSearch-gridItem:lt(' + x + ')').show();
        if (x == sizeDiv) {
          $('#loadMoreBtn').hide();
        }
      });
    }
  });
})(jQuery);

/* global jQuery, Swiper */

'use strict';
(function ($) {
  if ($('.swiper-container').length  && $('.MultimediaBrowser__container').length) {
    var multimediaBrowser = new Swiper('.MultimediaBrowser__container', {
      uniqueNavElements: true,
      prevButton: $('.MultimediaBrowser__nav__button--prev'),
      nextButton: $('.MultimediaBrowser__nav__button--next'),
      buttonDisabledClass: 'MultimediaBrowser__nav__button--disabled',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      watchActiveIndex: true,
      a11y: true,
      keyboardControls: true,
      autoHeight: true,
      onSlideChangeEnd: function (swiper) {
        var currentSlide = swiper.activeIndex + 1;
        $('.MultimediaBrowser__status--current').html('Slide '+ currentSlide + ' ');
      },
      onInit: function (swiper) {
        var slideCount = swi-current').html('Slide 1');
          $('.MultimediaBrowser__status--slide-count').html('of ' + slideCount);
        }
        for (var i = 0; i < slideCount; i++ ){
          var nextPageTitle = $(swiper.slides[i + 1]).find('.MultimediaBrowser__slide__title').html();
          if(nextPageTitle) {
            var nextLink = '<a href="javascript:;" class="MultimediaBrowser__link--next">Next: ' + nextPageTitle + '</a>';
            $(swiper.slides[i]).find('.MultimediaBrowser__slide__copy').append(nextLink);
          }
        }
        swiper.update();
      }
    });

    $('.MultimediaBrowser__link--next').on('click', function (e) {
      e.preventDefault();
      multimediaBrowser.slideNext();
    });
  }
})(jQuery);

/* global jQuery, NPS */
'use strict';

(function ($, NPS) {
  var accordionItemNames = [
    "Physical Address",
    "Directions",
    "Operating Hours & Seasons",
    "Weather",
    "Fees & Passes",
    "Visitor Centers",
    "Internet & Cellular Access"
  ];

  function render(container, data) {
    var physicalAddressRecord = container.querySelector('.physical-address-record');

    if (
      physicalAddressRecord &&
      data.physicalAddressLine1 !== undefined &&
      data.physicalAddressLine1.length > 0
    ) {
      var physicalAddress = new Object();
      physicalAddress.line_1 = data.physicalAddressLine1;
      physicalAddress.line_2 = data.physicalAddressLine2;
      physicalAddress.line_3 = data.physicalAddressLine3;
      physicalAddress.city = data.physicalAddressCity;
      physicalAddress.state_code = (data.physicalAddressProvinceTerritoryCode !== '')
        ? data.physicalAddressProvinceTerritoryCode
        : data.physicalAddressStateCode;
      physicalAddress.postal_code = data.physicalAddressPostalCode;
      physicalAddress.country_code = data.physicalAddressCountryCode;

      var physicalAddressObject = new NPS.Address(physicalAddress);
      var physicalAddressRendered = physicalAddressObject.render();
      physicalAddressRendered.setAttribute('itemprop', 'address');
      physicalAddressRendered.setAttribute('itemscope', 'itemscope');
      physicalAddressRendered.setAttribute('itemtype', 'http://schema.org/PostalAddress');

      var physicalAddressContainer = document.createElement('div');
      physicalAddressContainer.setAttribute('class', 'physical-address-container');
      physicalAddressContainer.setAttribute('itemscope', 'itemscope');
      physicalAddressContainer.setAttribute('itemtype', 'http://schema.org/Place');

      physicalAddressContainer.appendChild(physicalAddressRendered);
      physicalAddressRecord.appendChild(physicalAddressContainer);
    } else if (physicalAddressRecord) {
      physicalAddressRecord.remove();
    }

    var directionsRecord = container.querySelector('.directions-record');

    if (
      directionsRecord &&
      data.directions !== undefined &&
      data.directions.length > 0
    ) {
      var directionsContainer = document.createElement('div');
      directionsContainer.setAttribute('class', 'directions-container');
      directionsContainer.setAttribute('itemscope', 'itemscope');
      directionsContainer.setAttribute('itemtype', 'http://schema.org/Place');

      var directions = document.createElement('div');
      directions.setAttribute('class', 'directions');
      /** UNSAFE **/
      directions.innerHTML = '<p><span>' + data.directions + '</span></p>';
      directionsContainer.appendChild(directions);

      if (data.directionsURL !== undefined && data.directionsURL.length > 0) {
        var directionsLink = document.createElement('a');
        directionsLink.setAttribute('href', data.directionsURL);
        directionsLink.setAttribute('class', 'btn btn-primary');
        directionsLink.textContent = 'Directions Details';
        directionsContainer.appendChild(directionsLink);
      }

      directionsRecord.appendChild(directionsContainer);
    } else if (directionsRecord) {
      directionsRecord.remove();
    }

    var operatingHoursContainer = container.querySelector('.operating-hours-container');

    if (
      operatingHoursContainer &&
      Array.isArray(data.operatingHours) &&
      data.operatingHours.length > 0
    ) {
      data.operatingHours.forEach(function (os) {
        if (
          os.name.indexOf('All Park') !== -1 ||
          os.name.indexOf('Park Entrance') !== -1 ||
          os.name.indexOf('Park District') !== -1
        ) {
          var osTitle = document.createElement('h4');
          osTitle.textContent = os.name.indexOf('All Park') !== -1
            ? 'All Park Hours'
            : os.name;

          var operatingHours = new NPS.OperatingHours(os);
          var osContainer = operatingHours.render();

          operatingHoursContainer.appendChild(osTitle);
          operatingHoursContainer.appendChild(osContainer);
        }
      });
    } else if (operatingHoursContainer) {
      operatingHoursContainer.remove();
    }

    var weatherContainer = container.querySelector('.weather-container');

    if (
      weatherContainer &&
      data.weatherText !== undefined &&
      data.weatherText.length > 0
    ) {
      var weatherParagraph = document.createElement('p');
      /** UNSAFE **/
      weatherParagraph.innerHTML = data.weatherText;
      weatherContainer.appendChild(weatherParagraph);
    } else if (weatherContainer) {
      weatherContainer.remove();
    }

    var feesPassesContainer = container.querySelector('.FeesPassesTables');

    if (
      feesPassesContainer &&
      data.feesPasses !== undefined
    ) {
      var feesPasses = new NPS.FeesPasses(data.feesPasses);
      var feesPassesRendered = feesPasses.render();
      feesPassesContainer.appendChild(feesPassesRendered);
    } else if (feesPassesContainer) {
      feesPassesContainer.remove();
    }

    var visitorCentersContainer = container.querySelector('.visitor-centers');

    if (
      visitorCentersContainer &&
      Array.isArray(data.visitorCenters) &&
      data.visitorCenters.length > 0
    ) {
      data.visitorCenters.forEach(function (vc) {
        var vcContainer = document.createElement('div');
        vcContainer.setAttribute('id', vc.visitorCenterID);

        var vcTitle = document.createElement('h4');
        vcTitle.setAttribute('class', 'SubSection');
        vcTitle.setAttribute('itemprop', 'name');

        var vcLink = document.createElement('a');
        vcLink.setAttribute('href', vc.siteURL);
        /** UNSAFE **/
        vcLink.innerHTML = vc.name;
        vcTitle.appendChild(vcLink);

        var vcDescription = document.createElement('p');
        /** UNSAFE **/
        vcDescription.innerHTML = vc.description;

        var vcOperatingHours = new NPS.OperatingHours(vc.operatingHours[1]);
        var vcOperatingHoursContainer = vcOperatingHours.render();

        vcContainer.appendChild(vcTitle);
        vcContainer.appendChild(vcDescription);
        vcContainer.appendChild(vcOperatingHoursContainer);
        visitorCentersContainer.appendChild(vcContainer);
      });
    } else if (visitorCentersContainer) {
      visitorCentersContainer.remove();
    }

    var internetContainer = container.querySelector('.internet-access-container');

    if (
      internetContainer &&
      data.internetPublicWifi !== undefined &&
      data.internetDescription !== undefined &&
      data.internetDescription.length > 0
    ) {
      var wifiContainer = document.getElementById('wifiAvailable');

      if (wifiContainer && parseInt(data.internetPublicWifi) !== 1) {
        wifiContainer.innerHTML = '<i class="fa fa-wifi" style="font-size:42px; color: #999;"></i> Public WiFi is <strong>not</strong> available.';
      } else {
        wifiContainer.innerHTML = '<i class="fa fa-wifi" style="font-size:42px; color: #4b5e26;"></i> Public WiFi is available.';
      }

      /** UNSAFE **/
      $('#internetDescription').html('<br><p>' + data.internetDescription + '</p>');

      if (
        data.internetURL !== undefined &&
        data.internetURL.length > 0
      ) {
        $('#internetURL').attr('href', data.internetURL);
      } else {
        $('#internetURL').hide();
      }
    } else if (internetContainer) {
      internetContainer.remove();
    }
  }

  $(document).ready(function () {
    var containers = document.querySelectorAll('.ParkInfoAccordion');

    containers.forEach(function (container) {
      var siteCode = container.getAttribute('data-site-code');
      var jsonSrc = '/' + siteCode + '/structured_data_' + siteCode + '.json'; 

      if (siteCode.includes('/')) {
        var segments = siteCode.split('/');
        jsonSrc = '/' + siteCode + '/structured_data_' + segments[0] + '_' + segments[1] + '.json';
      }

      $.getJSON(jsonSrc, function (data) {
        render(container, data);
      });

      // add event listeners, to trigger GA Send messages
      if (typeof gas === 'function') {
        container.addEventListener('show.bs.collapse', function (event) {
          if (accordionItemNames.includes(event.target.getAttribute('data-label'))) {
            gas(
              'send',
              'event',
              'Park Basic Information',
              event.target.getAttribute('data-label'),
              'open',
              1,
              true
            );
          }
        });

        container.addEventListener('hide.bs.collapse', function (event) {
          if (accordionItemNames.includes(event.target.getAttribute('data-label'))) {
            gas(
              'send',
              'event',
              'Park Basic Information',
              event.target.getAttribute('data-label'),
              'close',
              1,
              true
            );
          }
        });
      }
    });
  });
})(jQuery, NPS);

/* global jQuery, NPS */
'use strict';

(function ($, NPS) {
  function render(container, data) {
    var items = container.querySelectorAll('.ParkOperatingHours__Item');
    var parkContainer = document.createElement('div');

    var visitorCentersContainer = document.createElement('div') = 'Visitor Center(s)';
    visitorCentersContainer.appendChild(visitorCentersHeading);

    var campgroundsContainer = document.createElement('div');
    var campgroundsHeading = document.createElement('h3');
    campgroundsHeading.textContent = 'Campground(s)';
    campgroundsContainer.appendChild(campgroundsHeading);

    items.forEach(function (item) {
      var operatingScheduleID = parseInt(item.getAttribute('data-operating-schedule-id'));

      if (
        Array.isArray(data.operatingHours) &&
        data.operatingHours.length > 0
      ) {
        var matchingData = data.operatingHours.filter(function (os) {
          return parseInt(os.operatingScheduleID) === operatingScheduleID;
        });

        matchingData.forEach(function (os) {
          if (
            os.name.indexOf('All Park') !== -1 ||
            os.name.indexOf('Park Entrance') !== -1 ||
            os.name.indexOf('Park District') !== -1
          ) {
            var osTitle = document.createElement('h4');
            osTitle.textContent = os.name.indexOf('All Park') !== -1
              ? 'All Park Hours'
              : os.name;

            var operatingHours = new NPS.OperatingHours(os);
            var osContainer = operatingHours.render();

            item.appendChild(osTitle);
            item.appendChild(osContainer);
            parkContainer.appendChild(item);
          }
        });
      }

      if (
        Array.isArray(data.visitorCenters) &&
        data.visitorCenters.length > 0
      ) {
        data.visitorCenters.forEach(function (vc) {
          if (
            vc.operatingHours !== undefined &&
            vc.operatingHours['1'] !== undefined &&
            vc.operatingHours['1'].operatingScheduleID !== undefined &&
            parseInt(vc.operatingHours['1'].operatingScheduleID) === operatingScheduleID
          ) {
            var os = vc.operatingHours['1'];
            var osTitle = document.createElement('h4');
            /** UNSAFE **/
            osTitle.innerHTML = os.name;

            var operatingHours = new NPS.OperatingHours(os);
            var osContainer = operatingHours.render();

            item.appendChild(osTitle);
            item.appendChild(osContainer);
            visitorCentersContainer.appendChild(item);
          }
        });
      }

      if (
        Array.isArray(data.campgrounds) &&
        data.campgrounds.length > 0
      ) {
        data.campgrounds.forEach(function (c) {
          if (
            c.operatingHours !== undefined &&
            c.operatingHours['1'] !== undefined &&
            c.operatingHours['1'].operatingScheduleID !== undefined &&
            parseInt(c.operatingHours['1'].operatingScheduleID) === operatingScheduleID
          ) {
            var os = c.operatingHours['1'];
            var osTitle = document.createElement('h4');
            /** UNSAFE **/
            osTitle.innerHTML = os.name;

            var operatingHours = new NPS.OperatingHours(os);
            var osContainer = operatingHours.render();

            item.appendChild(osTitle);
            item.appendChild(osContainer);
            campgroundsContainer.appendChild(item);
          }
        });
      }
    });

    var remainingItems = container.querySelectorAll('.ParkOperatingHours__Item');

    remainingItems.forEach(function (item) {
      item.remove();
    });

    if (parkContainer.querySelector('.ParkOperatingHours__Item')) {
      container.appendChild(parkContainer);
    }

    if (visitorCentersContainer.querySelector('.ParkOperatingHours__Item')) {
  dsContainer.querySelector('.ParkOperatingHours__Item')) {
      container.appendChild(campgroundsContainer);
    }
  }

  $(document).ready(function () {
    var containers = document.querySelectorAll('.ParkOperatingHours');

    containers.forEach(function (container) {
      var controlID = container.getAttribute('data-control-id');
      var siteCode = container.getAttribute('data-site-code');
      var operatingHoursContainer = container.querySelector('.operating-hours-container');
      var jsonSrc = '/' + siteCode + '/structured_data_' + siteCode + '.json';

      if (operatingHoursContainer) {
        $.getJSON(jsonSrc, function (data) {
          render(operatingHoursContainer, data);
        });
      }
    });
  });
})(jQuery, NPS);

/* global jQuery, NPS */
'use strict';

(function ($, NPS) {
  function swiperImage(swiperID, index, altText, imageURL, featureText, creditText) {
    var imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'swiper-slide--full');
    imageContainer.setAttribute('id', 'swiper_image_' + swiperID + '_' + index);

    var figure = document.createElement('figure');
    var image = document.createElement('img');
    image.setAttribute('alt', altText);
    image.setAttribute('src', imageURL + '?width=800&height=800&mode=crop&quality=90');
    var figcaption = document.createElement('figcaption');
    figcaption.textContent = featureText;

    var brk = document.createElement('br');
    var credit = document.createElement('span');
    credit.setAttribute('class', 'credit');
    credit.textContent = creditText;

    figcaption.appendChild(brk);
    figcaption.appendChild(credit);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    imageContainer.appendChild(figure);

    return imageContainer;
  }

  function swiperSlide(imageURL, altText) {
    var slide = document.createElement('div');
    slide.setAttribute('class', 'swiper-slide');

    var thumbnail = document.createElement('a');
    thumbnail.setAttribute('href', imageURL);
    thumbnail.setAttribute('class', 'CarouselGallery__Thumbnail');
    thumbnail.setAttribute('style', 'background-image: url(' + imageURL + '?width=250&height=250&mode=crop&quality=90) !important');

    var altTextElement = document.createElement('span');
    altTextElement.setAttribute('class', 'CarouselGallery__Thumbnail__AltText');
    altTextElement.textContent = altText;

    thumbnail.appendChild(altTextElement);
    slide.appendChild(thumbnail);
    return slide;
  }

  function render(container, parkingLot) {
    var operatingHours = parkingLot.schedule
      ? new NPS.OperatingHours(parkingLot.schedule)
      : null;

    // Hours
    var hoursContainer = container.querySelector('.OperatingHours');
    if (operatingHours && hoursContainer) {
      operatingHours.render(hoursContainer);
    } else {
      hoursContainer.remove();
    }

    // Images
    var imagesContainer = container.querySelector('.ParkingLot__Gallery');
    if (
      imagesContainer &&
      Array.isArray(parkingLot.images) &&
      parkingLot.images.length > 0
    ) {
      var maxItemsRendered = 8;
      var titleCharacterLimit = 48;
      var numberImagesToRender = parkingLot.images.length;

      if (numberImagesToRender > maxItemsRendered) {
        numberImagesToRender = maxItemsRendered;
      }

      var carouselGallery = imagesContainer.querySelector('.CarouselGallery');

      if (carouselGallery) {
        var swiperID = carouselGallery.getAttribute('data-swiper-id');
        var swiperWrapper = carouselGallery.querySelector('.swiper-wrapper');
        var swiperImages = carouselGallery.querySelector('.swiper-images');

        if (swiperID && swiperWrapper && swiperImages) {
          for (i = 0; i < numberImagesToRender; i++) {
            if (parkingLot.images[i].PATH.length > 3) {
              swiperWrapper.appendChild(swiperSlide(
                parkingLot.images[i].PATH,
                parkingLot.images[i].ALTTEXT
              ));

              swiperImages.appendChild(swiperImage(
                swiperID,
                i,
                parkingLot.images[i].ALTTEXT,
                parkingLot.images[i].PATH,
                parkingLot.images[i].CAPTION,
                parkingLot.images[i].CREDIT
              ));
            }
          }

          $(swiperWrapper).on('click', '.CarouselGallery__Thumbnail', function (e) {
            e.preventDefault();
          });
        }
      }
    } else if (imagesContainer) {
      imagesContainer.remove();
    }
    // end of Images
  }

  $(document).ready(function() {
    var containers = document.querySelectorAll('.ParkingLot');

    containers.forEach(function (container) {
      var lotID = container.getAttribute('data-lot-id');
      var siteCode = container.getAttribute('data-site-code');

      $.getJSON('/' + siteCode + '/structured_data_' + siteCode + '.json', function(data) { 
        if (!Array.isArray(data.parkingLots)) { 
          // Invalid response, exit early
          return;
        }

        var parkingLots = data.parkingLots.filter(function (item) {
          return item.lotID === lotID;
        });

        if (parkingLots.length === 0) {
          // Response does not include this specific parking lot, exit early
          return;
        }

        var parkingLot = parkingLots.shift();

        render(container, parkingLot);

        var carouselGallery = container.querySelector('.CarouselGallery');
        if (carouselGallery) {
          NPS.initCarouselGallery(carouselGallery);
        }
      });
    });
  });
})(jQuery, NPS);


var $PromoSearch = $('.PromoSearch');
var $form = $PromoSearch.find('form');
var $select = $PromoSearch.find('select');

$select.on('change', function () {
  var $this = $(this);

  vta = gaHelper.parseTrackingData({
    type: 'event',
    category: 'Navigate',
    action: url,
    label: 'NRSS Program Promo'
  });

  ga('send', trackingData);

  $form.submit();
});

/* global jQuery */
'use strict';
(function($) {
  var expandButton = document.querySelectorAll(
    '.PublicationSearch-gridItem-expandBtn'
  );

  $(expandButton).click(function() {
    $(this)
      .closest('.PublicationSearch-gridItem-contentContainer')
      .toggleClass('grow');
    $(this)
      .closest('div')
      .next('.PublicationSearch-gridItem-textContainer')
      .toggleClass('add');
    $(this).attr('aria-expanded', function(i, attr) {
      return attr == 'true' ? 'false' : 'true';
    });
    $(this)
      .find('i')
      .toggleClass('hide');
  });
})(jQuery);

/* global jQuery */
'use strict';
(function($) {
  if ($('#Subject-header').length > 0) {
    $('#PublicationLandingNav').smartmenus({
      subIndicators: 1,
      subIndicatorsText: '',
      subMenusSubOffsetX: 0,
      subMenusSubOffsetY: 36,
      subMenusMaxWidth: 200,
      mainMenuSubOffsetX: 0,
      mainMenuSubOffsetY: 56,
      keepInViewport: true
    });
  } else {
    $('#PublicationLandingNav').smartmenus({
      subIndicators: 1,
      subIndicatorsText: '',
      subMenusSubOffsetX: 0,
      subMenusSubOffsetY: 36,
      subMenusMaxWidth: 200,
      mainMenuSubOffsetX: 0,
      mainMenuSubOffsetY: 56,
      keepInViewport: false
    });
  }
  $('#PublicationLandingNav').smartmenus('keyboardSetHrView: 1,
      paginationClick: true,
      keyboardControls: true,
      autoHeight: true,
      effect: "slide",
      allowSwipeToPrev: false,
      allowSwipeToNext: false,
      pagination: ".Quiz__Heading__Counter",
      paginationType: "custom",
      onSlideChangeStart: function (swiper) {
        $('.Quiz__Question__Status').removeClass('Quiz__Question__Status--Active');
        $('.Quiz__Button--Next').removeClass('Quiz__Button--Next--Active')
        $('.Quiz__Button--Next').removeClass('Quiz__Button--Next--Disabled');
        $('.Quiz__Summary').removeClass('Quiz__Summary--Active');
      },
      paginationCustomRender: function (swiper, current, total) {
          return 'Question ' + current + ' of ' + total;
      },
      onSlideChangeEnd: function (swiper) {
        swiper.lockSwipeToNext();
      },
      onInit: function (swiper) {
        swiper.update();
      }
    });

    $('.Quiz__Button--Restart').on('click', function (e) {
      Quiz.unlockSwipeToPrev();
      Quiz.slideTo(0, 300, true);
      $('.Quiz input[type="radio"]').removeAttr('checked');
      Quiz.update();
      $('.Quiz__Question__Status').removeClass('Quiz__Question__Status--Active');
      $('.Quiz__Button--Next').removeClass('Quiz__Button--Next--Active')
      $('.Quiz__Button--Next').removeClass('Quiz__Button--Next--Disabled');
      $('.Quiz__Summary').removeClass('Quiz__Summary--Active');
    });

    $('input[type="radio"]').on('change', function(e) {
      var isCorrect = $(e.currentTarget).data('correct') !== undefined;
      var grade = (isCorrect) ? 'Correct!' : 'Incorrect.';
      var selectedMessage = $(e.currentTarget).data('message');
      $('#Question-Grade').html(grade);
      $('#Selected-Message').html(selectedMessage);
      $('.Quiz__Question__Status').addClass('Quiz__Question__Status--Active');
      if (isCorrect) {
        Quiz.unlockSwipeToNext();
        $('#Question-Grade').addClass('Quiz__Question__Status__Grade--Correct');
        $('.Quiz__Button--Next').addClass('Quiz__Button--Next--Active');
        if (Quiz.isEnd) {
          $('.Quiz__Button--Next').addClass('Quiz__Button--Next--Disabled');
          $('.Quiz__Summary').addClass('Quiz__Summary--Active');
        }
      } else {
        Quiz.lockSwipeToNext();
        $('#Question-Grade').removeClass('Quiz__Question__Status__Grade--Correct');
        $('.Quiz__Button--Next').removeClass('Quiz__Button--Next--Active')
        $('.Quiz__Summary').removeClass('Quiz__Summary--Active');
      }
    });
  }
})(jQuery);

/* global jQuery */
'use strict';
(function ($) {
  $(document).ready(function () {
    $('.RelatedGrid').each(function () {
      var component = this;
      var rows = $('.row', component);
      if (rows.length > 2) {
        var moreButton = $('.RelatedGrid__MoreButton', component);
        var hiddenRows = rows.get().slice(2);
        var hiddenItems = [];
        $(hiddenRows).each(function () {
          hiddenItems = hiddenItems.concat($('.RelatedGridItem', this).get());
        });
        $(hiddenRows).addClass('hidden');
        $(hiddenItems).css('opacity', 0);
        moreButton.one('click', function (e) {
          moreButton.css('opacity', 0);
          setTimeout(function () {
            $(hiddenRows).removeClass('hidden');
            $(hiddenItems).each(function (i) {
              var item = this;
              setTimeout(function () {
                $(item).css('opacity', 1);
              }, i * 50);
            });
            moreButton.addClass('hidden');
            $('.RelatedGridItem__Link', hiddenItems[0]).focus();
          }, 100);
        });
        moreButton.removeClass('hidden');
      }
    });
  });
})(jQuery);

/* global jQuery */
'use strict';

(fcomponents.length) {
    components.each(function () {
      var component = this;
      var items = $('.ListingGridItem', component);
      if (items.length > 4) {
        var hiddenItems = items.get().slice(4);
        var moreButton = $('.ListingGrid-moreButton', component);
        $(hiddenItems).addClass('hidden');
       on.one('click', function (e) {
          moreButton.css('opacity', 0);
          setTimeout(function () {
            $(hiddenItems).removeClass('hidden');
            $(hiddenItems).each(function (i) {
              var item = this;
              setTimeout(function () {
                $(item).css('opacity', 1);
              }, i * 150);
            });
            $('.ListingGridItem-link', hiddenItems[0]).focus();
          }, 100);
        });
        moreButton.removeClass('hidden');
      }
    });
  }
})(jQuery);

/* global jQuery*/
'use strict';
(function ($) {
  $(document).on('ready', function () {
    $('.return-button').on('click', function (e) {
      window.history.back();
    });
  });
})(jQuery);

$('.js-inpage-nav').each(functionch(function () {
    $(this).smoothScroll({
      preventDefault: true,
      afterScroll: function () {
        var targetID = $(this).attr('href');
        var $target = $(targetID);
        $target.focus();
      }
    });
  });
});

$('.js-scrollTo').each(function () {
  var $this = $(this);

  $(this).smoothScroll({
    afterScroll: function () {
      var targetID =('focus');
    })
    .focusout(function () {
      $this.removeClass('focus');
    });
});

function addEvent (evnt, elem, func) {
  else if (elem.attachEvent) { // IE DOM
    elem.attachEvent('on' + evnt, func);
  } else { // No much to do
    elem[evnt] = func;
  }
}

// http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
addEvent('hashchange', window, function () {
  var element = document.getElementById(location.hash.substring(1));

  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }

    element.focus();
  }
});

/* global jQuery */
'use strict';

(function ($) {
  $('#LocalNav-desktop > li > a > span, ul#LocalNav-desktop li ul li a').each(function (i, d) {
    $(d).html($(d).text().replace(/\s(?=[^\s]*$)/g, '&nbsp;'));
  });
})(jQuery);

(function ($) {
  function TabbedContent (el) {
    self = this;

    /**
     * Goto Next Tab Index
     * - checks to make sure there is a next index
     *   otherwise it does NOT update the index
     * @return {boolean}
     */
    this.nextIndex = function () {
      var nextIndex = 2 + this.index;
      if (nextIndex > this.model.tabCount) {
        return false;
      } else {
        this.index = nextIndex - 1;
        return true;
      }
    };

    /**
     * Sets Previous Tab Index
     * - checks to make sure there is a previous index
     *   otherwise it does NOT update the index
     * @return {boolean}
     */
    this.prevIndex = function () {
      var prevIndex = this.index - 1;
      if (prevIndex < 0) {
        return false;
      } else {
        this.index = prevIndex;
        return true;
      }
    };

    /**
     * Update index with number
     * @param  {int} index to set
     * @param  {int} force to override setting the index
     * @return {boolean}
     */
    this.updateIndex = function (index, force) {
      var currentIndex = this.index;
      if (index === currentIndex && !force) {
        this.index = null;
      } else {
        this.index = index;
      }
    };

    this._activateContent = function ($elem) {
      $elem
        .attr('aria-hidden', false)
        .addClass(self.activeClass)
        .slideDown();
    };

    this._activateToggle = function ($elem) {
      var newInnerHtml = $elem.attr('data-text') || $elem.attr('data-start-text');
      $elem
        .attr({
          'aria-selected': true,
          'aria-expanded': true,
          'tabindex': '0'
        })
        .html(newInnerHtml)
        .closest('li')
        .addClass(self.activeClass);
    };

    this._deactivateContent = function ($elem) {
      $elem
        .attr('aria-hidden', true)
        .removeClass(self.activeClass)
        .slideUp();
    };

    this._deactivateToggle = function ($elem) {
      $elem
        .attr({
          'aria-selected': false,
          'aria-expanded': false,
          'tabindex': '-1'
        })
        .closest('li')
        .removeClass(self.activeClass);

      // Swap the text
      $elem.each(function (index, elem) {
        var $this = $(this);
        var innerHtml = $this.attr('data-start-text');
        $this.html(innerHtml);
      });
    };

    this._focus = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var $this = $(evt.target);
      // Get the closest li
      var $clickedToggle = $this.closest('li');
      self.updateIndex($clickedToggle.index(), true); // passing true to override model updateIndex
    };

    this._navigate = function (evt) {
      switch (evt.keyCode) {
        case 37: // left arrow
          self.model.prevIndex();
          break;
        case 39: // right arrow
          self.model.nextIndex();
          break;
        case 32: // spacebar
          self._toggle(evt);
          break;
        case 13: // enter
          self._toggle(evt);
          break;
        case 9: // tab
          self._resetTabIndex(evt);
        default:
          break;
      }
    };

    this._render = function () {
      var index = self.index;

      if (index === null) {
        self._deactivateToggle(self.$nav);
        self._deactivateContent(self.$panels);
      } else {
        var $indexToggle = self.$nav.eq(index);
        var $indexContent = self.$panels.eq(index);
        // Find all toggles that should be active and remove active states
        self._deactivateToggle(self.$nav.not(':eq(' + index + ')'));
        self._deactivateContent(self.$panels.not(':eq(' + index + ')'));
        // Toggle active
        self._activateToggle($indexToggle);
        self._activateContent($indexContent);
      }
    };

    this._resetTabIndex = function (evt) {
      // check if evt index is last tab toggle
      // yes - reset tabIndex
      evt.stopPropagation();

      if (self.index === null) {
        self
          .$nav.attr({
            'tabindex': '-1'
          })
          .eq(0)
          .attr({
            'tabindex': '0'
          });
      }
    };

    this._toggle = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var $this = $(evt.target);
      // Get the closest li
      var $clickedToggle = $this.closest('li');
      self.model.updateIndex($clickedToggle.index());
    };

    this.$el = $(el);
    this.model = {
      firstRender: true,
      index: null, // no content shown by default
      tabCount: 0 // number of tabs
    };

    this.activeClass = 'active';
    this.$nav = this.$el.find('[data-toggle="tab"]');
    this.$panels = this.$el.find('.Tabs-content > div');

    // Store toggle text
    this.$nav.each(function (index, elem) {
      var $this = $(elem);
      var innerHtml = $this.html();
      $this.attr({
        'data-start-text': innerHtml
      });
    });

    // look for active tab set
    var startIndex = this.$el.find('[role="tablist"] > li.active').index();
    // Set number of tabs
    this.model.tabCount = this.$nav.length;

    if (startIndex >= 0) {
      this.updateIndex(startIndex);
    } else {
      // Setup
      this.$nav
        .attr({ 'tabindex': '-1' })
        .eq(0)
        .attr('tabindex', '0');
    }

    // Listeners
    this.$el.on("click", "[data-toggle='tab']", this._toggle);
    this.$el.on("keydown", "[role='tab']", this._navigate);
    this.$el.on("focus", "[role='tab']", this._focus);
  }

  TabbedContent.prototype = {
    get index() {
      return this.model.index;
    },
    set index(value) {
      var changed = value !== this.model.index;
      this.model.index = value;
      if (changed) this._render();
    }
  };

  $(document).ready(function () {
    $('.Tabs').each(function () {
      var tabView = new TabbedContent(this);
    });
 nts = document.queryS{
      var tooltip = new bootstrap.Tooltip(el);

      el.addEventListener('click', function (e) {
        $(el).trigger('focus');

        $(document).one('touchstart', function (e) {
          tooltip.hide();
        });
      });
    });
  });
})(jQuery);

// Form components are namespaced under 'fba' = 'Feedback Analytics'
'use strict';
var touchpointForm2416268b;
(function ($) {
  function FBAform(d, N) {
    return {
      css: '',
      formId: "2416268b",
      formComponent: function() {
        return document.querySelector("[data-touchpoints-form-id='" + this.formId + "']");
      },
      formElement: function() {
        return this.formComponent().querySelector("form");
      },
  
      // enable Javascript experience
      javscriptIsEnabled: function() {
        var javascriptDisabledMessage = document.getElementsByClassName("javascript-disabled-message")[0];
        var touchpointForm = document.getElementsByClassName("touchpoint-form")[0];
        if (javascriptDisabledMessage) {
          javascriptDisabledMessage.classList.add("hide");
        }
        if (touchpointForm) {
          touchpointForm.classList.remove("hide");
        }
      },
      init: function(options) {
        this.javscriptIsEnabled();
        this.options = options;
        this.loadCss();
        this.loadHtml();
        this.bindEventListeners();
        this.dialogOpen = false; // initially false
        this.successState = false; // initially false
        this.pagination();
        return this;
      },
      bindEventListeners: function() {
        var self = this;
        d.addEventListener('keyup', function (event) {
          var x = event.keyCode;
          if( x == 27 && self.dialogOpen == true) {
            self.closeDialog();
          }
        });
        d.addEventListener('click', function (event) {
          self.handleClick(event);
        });
      },
      loadCss: function()
      {
        d.head.innerHTML += '<style>' + this.css + '</style>';
      },
      loadHtml: function()
      {
        if(d.getElementById('touchpoints-survey') != null) {
          d.getElementById('touchpoints-survey').innerHTML = "<div id=\"fba-modal-dialog\" class=\"fba-modal-dialog\">\n  <div class=\"touchpoints-form-wrapper\" data-touchpoints-form-id=\"2416268b\">\n  <div class=\"wrapper\">\n\n    <div class=\"fba-alert usa-alert usa-alert--success\" hidden>\n  <div class=\"usa-alert__body\">\n    <h3 class=\"usa-alert__heading\">\n      Success\n    <\/h3>\n    <p class=\"usa-alert__text\">\n      Thank you. Your feedback has been received.\n    <\/p>\n  <\/div>\n<\/div>\n<div class=\"fba-alert-error usa-alert usa-alert--error\" hidden>\n  <div class=\"usa-alert__body\">\n    <h3 class=\"usa-alert__heading\">\n      Error\n    <\/h3>\n    <p class=\"usa-alert__text\">\n      alert message\n    <\/p>\n  <\/div>\n<\/div>\n\n    \n<form action=\"https://touchpoints.app.cloud.gov/touchpoints/2416268b/submissions.json\" method=\"POST\">\n  <div class=\"touchpoints-form-body\">\n    <input type=\"hidden\" name=\"fba_location_code\" id=\"fba_location_code\" />\n\n      <div class=\"section visible\">\n\n        <div class=\"section-header\">\n          <h4 class=\"section-title-view question-1\">\n            Was this page helpful?\n          <\/h4>\n        <\/div>\n\n        <div class=\"questions\">\n\n          <div class=\"question question-1 white-bg\">\n              <fieldset class=\"usa-fieldset radios\" role=\"group\" aria-labelledby=\"answer_01\">\n  <legend class=\"usa-sr-only\"><\/legend>\n  <label class=\"usa-label\" for=\"answer_01\">\n  \n<\/label>\n\n  <div class=\"question-options\">\n    <div class=\"radio-button usa-radio\" id=\"question_option_6866\" data-id=\"6866\">\n      <input type=\"radio\" name=\"answer_01\" id=\"answer_01_1\" value=\"Yes\" class=\"usa-radio__input usa-radio__input--tile\" />\n      <label class=\"usa-radio__label\" for=\"answer_01_1\">Yes<\/label>\n    <\/div>\n    <div class=\"radio-button usa-radio\" id=\"question_option_6867\" data-id=\"6867\">\n      <input type=\"radio\" name=\"answer_01\" id=\"answer_01_2\" value=\"No\" class=\"usa-radio__input usa-radio__input--tile\" />\n      <label class=\"usa-radio__label\" for=\"answer_01_2\">No<\/label>\n    <\/div>\n  <\/div>\n<\/fieldset>\n\n          <\/div>\n\n          <div class=\"question question-2 white-bg\">\n              <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_02\">\n  <label class=\"usa-label\" for=\"answer_02\">\n  How could we improve this page?\n<\/label>\n\n    <textarea name=\"answer_02\" id=\"answer_02\" class=\"usa-textarea\" maxlength=\"500\" onkeyup=\"touchpointForm2416268b.textCounter(this,500);\">\n<\/textarea>\n	<span class=\"counter-msg usa-hint usa-character-count__message  aria-live=\"polite\">\n		500 characters allowed\n	<\/span>\n<\/div>\n\n          <\/div>\n        <\/div>\n\n          <p class=\"submit-button\">\n            <button type=\"submit\" class=\"usa-button\">Submit<\/button>\n          <\/p>\n      <\/div>\n  <\/div>\n<\/form>\n<script>\n  // Set \'other\' type checkbox option values when associated option text field is updated\n  \$(\'.usa-input.other-option\').keyup(function() {\n    // strip commas\n    var val = \$(this).val().replace(/,/g, \'\');\n    // if user has cleared custom text, then reset checkbox value to \"other\"\n    if (val == \'\') { val = \'other\'; }\n    // set the value of the checkbox option to the custom text as entered\n    var option_selector = \"#\" + \$(this).attr(\"data-option-id\");\n    \$(option_selector).prop(\'checked\',true);\n    \$(option_selector).val(val);\n  });\n  function showValid(elem) {\n    var questionDiv = \$(elem).closest(\".question\");\n    \$(questionDiv).removeClass(\'usa-form-group--error\');\n    var span = questionDiv.find(\'#input-error-message\');\n    \$(elem).removeClass(\"usa-input--error\");\n    \$(elem).addClass(\"usa-input--success\");\n    \$(span).remove();\n  }\n  function showWarning(elem, msg) {\n    var questionDiv = \$(elem).closest(\".question\");\n    \$(questionDiv).addClass(\'usa-form-group--error\');\n    var span = questionDiv.find(\'#input-error-message\');\n    var label = questionDiv.find(\"label\");\n    \$(elem).addClass(\"usa-input--error\");\n    \$(elem).removeClass(\"usa-input--success\");\n    var span = questionDiv.find(\'#input-error-message\');\n    if (span.length == 0) {\n      span = document.createElement(\'span\');\n      span.setAttribute(\'id\', \'input-error-message\');\n      span.setAttribute(\'role\',\'alert\');\n      span.setAttribute(\'class\',\'usa-error-message\');\n    }\n    span.innerText = msg;\n    \$(span).insertAfter(label)\n    \$(this).focus();\n  }\n<\/script>\n\n  <\/div>\n  \n    \n<div class=\"usa-banner\">\n  <header class=\"usa-banner__header\">\n    <div class=\"usa-banner__inner\">\n      <div class=\"grid-col-auto\">\n        <img class=\"usa-banner__header-flag\" src=\"https://touchpoints.app.cloud.gov/assets/us_flag_small-9c507b1ff21f65c4b8f0c45d0e0d0a10bb5c9864c1a76e07aa3293da574968a1.png\" alt=\"U.S. flag\">\n      <\/div>\n      <div class=\"grid-col-fill tablet:grid-col-auto\">\n        <p class=\"usa-banner__header-text\">\n          An official form of the United States government.\n          Provided by\n          <a href=\"https://touchpoints.app.cloud.gov/\" target=\"_blank\" rel=\"noopener\">Touchpoints<\/a>\n          <br>\n\n        <\/p>\n      <\/div>\n    <\/div>\n  <\/header>\n<\/div>\n\n\n\n<\/div>\n<\/div>\n";
        }
  
        var formElement = this.formElement();
        // returns 1 or more submit buttons within the Touchpoints form
        var submitButtons = formElement.querySelectorAll("[type='submit']");
.prototype.forEach.call(submitButtons, function(submitButton) {
            submitButton.addEventListener('click', that.handleYesNoSubmitClick.bind(that), false);
          })
        } else { // for all other types of forms/questions
          if (submitButtons) {
            Array.prototype.forEach.call(submitButtons, function(submitButton) {
              submitButton.addEventListener('click', that.handleSubmitClick.bind(that), false);
            })
          }
        }

        $("input[type='radio'][name='answer_01']").on('change', function() {
          $('.question-2').addClass('visible');
          $('.submit-button').addClass('visible');
          $('.question-1').addClass('hidden');
        });
      },
      resetErrors: function()
      {
        var formComponent = this.formCr alertElement = formComponent.querySelector(".fba-alert");
        var alertElementHeading = formComponent.getElementsByClassName("uByClassName("usa-alert__text")[0];
        var alertErrorElement = formComponent.querySelector(".fba-alert-error");
        var alertErrorElementBody = alertErrorElement.getElementsByClassName("usa-alert__text")[0];
        alertElement.setAttribute("hidden", true);
        alertElementHeading.innerHTML = "";
        alertElementBody.innerHTML = "";
        alertErrorElement.setAttribute("hidden", true);
        alertErrorElementBody.innerHTML = "";
      },
      handleClick: function(e) {
      },
      handleButtonClick: function(e) {
        e.preventDefault();
        this.loadDialog();
      },
      handleDialogClose: function(e) {
        e.preventDefault();
        this.closeDialog();
      },
      handleOtherOption: function(e) {
        var selectorId =  "#" + e.srcElement.getAttribute("data-option-id");
        var other_val = e.target.value.replace(/,/g, '');
        if (other_val == '') other_val = 'other';
        var option = this.formElement().querySelector(selectorId);
        option.checked = true;
        option.value = other_val;
      },
      handleSubmitClick: function(e) {
        e.preventDefault();
        this.resetErrors();
        var formElement = this.formElement();
  var submitButton = formElement.querySelector("[type='submit']");
          submitButton.disabled = true;
          self.sendFeedback();
        }
      },
      handleYesNoSubmitClick: function(e) {
        e.preventDefault();
  
        var input = this.formComponent().querySelector('.fba-touchpoints-page-form');
        input.value = e.target.value;
        this.resetErrors();
        var self = this;
        var formElement = this.formElement();
        if (self.validateForm(formElement)) {
          var submitButtons = formElement.querySelectorAll("[type='submit']");
          Array.prototype.forEach.call(submitButtons, function(submitButton) {
            submitButton.disabled = true;
          })
          self.sendFeedback();
        }
      },
      validateForm: function(form) {
        this.hideValidationError(form);
        var valid = this.checkRequired(form) && this.checkEmail(form) && this.checkPhone(form);
        return valid;
      },
      checkRequired: function(form) {
        var requiredItems = form.querySelectorAll('[required]');
        var questions = {};
        // Build a dictionary of questions which require an answer
        Array.prototype.forEach.call(requiredItems, function(item) { questions[item.name] = item });
  
        Array.prototype.forEach.call(requiredItems, function(item) {
          switch (item.type) {
          case 'radio':
            if (item.checked) delete(questions[item.name]);
            break;
          case 'checkbox':
            if (item.checked) delete(questions[item.name]);
            break;
          case 'select-one':
            if (item.selectedIndex > 0) delete(questions[item.name]);
            break;
          default:
            if (item.value.length > 0) delete(questions[item.name]);
          }
        });
        for (var key in questions) {
          this.showValidationError(questions[key],'You must respond to question: ');
          return false;
        }
        return true;
      },
      checkEmail: function(form) {
        var emailItems = form.querySelectorAll('input[type="email"]');
        var questions = {};
        // Build a dictionary of questions which require an answer
        Array.prototype.forEach.call(emailItems, function(item) { questions[item.name] = item });
        Array.prototype.forEach.call(emailItems, function(item) {
          if (uestions[item.name]);
          } else {
            var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (EmailRegex.test(item.value)) delete(questions[item.name]);
          }
        });
        for (var key in questions) {
          this.showValidationError(questions[key],'Please enter a valid value: ');
          return false;
        }
        return true;
      },
      checkPhone: function(form) {
        var phoneItems = form.querySelectorAll('input[type="tel"]');
        var questions = {};
        // Build a dictionary of questions which require an answer
        Array.prototype.forEach.call(phoneItems, function(item) { questions[item.name] = item });
        Array.prototype.forEach.call(phoneItems, function(item) {
          if (item.value.length == 0) {
            delete(questions[item.name]);
          } else {
            var PhoneRegex = /^[0-9]{10}$/;
            if (PhoneRegex.test(item.value)) delete(questions[item.name]);
          }
        });
        for (var key in questions) {
          this.showValidationError(questions[key],'Please enter a valid value: ');
          return false;
        }
        return true;
      },
      showValidationError: function(question,error) {
        var questionDiv = question.closest(".question");
        var label = questionDiv.querySelector("label");
        var questionNum = label.innerText;
        questionDiv.setAttribute('class', 'usa-form-group usa-form-group--error');
        var span = document.createElement('span');
        span.setAttribute('id', 'input-error-message');
        span.setAttribute('role','alert');
        span.setAttribute('class','usa-error-message');
        span.innerText = error + questionNum;
        label.parentNode.insertBefore(span, label.nextSibling);
        var input = document.createElement('input');
        input.setAttribute('hidden', 'true');
        input.setAttribute('id','input-error');
        input.setAttribute('type','text');
        input.setAttribute('name','input-error');
        input.setAttribute('aria-describedby','input-error-message');
        questionDiv.appendChild(input);
        questionDiv.scrollIntoView();
        questionDiv.focus();
      },
      hideValidationError: function(form) {
        var elem = form.querySelector('.usa-form-group--error');
        if (elem == null) return;
        elem.setAttribute('class','question');
        var elem = form.querySelector('#input-error-message');
        if (elem != null) elem.parentNode.removeChild(elem);
        elem = form.querySelector('#input-error');
        if (elem != null) elem.parentNode.removeChild(elem);
      },
      textCounter: function(field,maxlimit) {
         var countfield = field.parentNode.querySelector(".counter-msg");
         if ( field.value.length > maxlimit ) {
          field.value = field.value.substring( 0, maxlimit );
          countfield.innerText = '0 characters left';
          return false;
         } else {
          countfield.innerText = "" + (maxlimit - field.value.length) + " characters left";
         }
      },
      loadButton: function() {
        // Add the fixed, floating tab button
        this.buttonEl = document.createElement('a');
        this.buttonEl.setAttribute('id', 'fba-button');     this.buttonEl.setAttribute('href', '#');
        this.buttonEl.setAttribute('aria-haspopup', 'dialog');
        this.buttonEl.addEventListener('click', this.handleButtonClick.bind(this), false);
        this.buttonEl.innerHTML = this.options.modalButtonText;
        d.body.appendChild(this.buttonEl);
  
        this.loadFeebackSkipLink();
      },
      loadFeebackSkipLink: function() {
        this.skipLink = document.createElement('a');
        this.skipLink.setAttribute('class', 'usa-skipnav touchpoints-skipnav');
        this.skipLink.setAttribute('href', '#fba-button');
        this.skipLink.addEventListener('click', function() {
          document.querySelector("#fba-gSkipLinks = document.querySelector('.usa-skipnav');
        if(existingSkipLinks) {
          e
          d.body.prepend(this.skipLink);
        }
      },
      // Used when in a modal
      loadDialog: function() {
        d.querySelector('.fba-modal').removeAttribute("hidden");
        this.dialogOpen = true;
      },
      closeDialog: function() {
        d.querySelector('.fba-modal').setAttribute("hidden", true);
        this.resetFormDisplay();
        this.dialogOpen = false;
      },
      sendFeedback: function() {
        var form = this.formElement();
        this.ajaxPost(form, this.formSuccess);
      },
      successHeadingText: function() {
        return "Success";
      },
      successText: function() {
        return "Thank you. Your feedback has been received.";
      },
      showFormSuccess: function(e) {
        var formComponent = this.formComponent();
        var formElement = this.formElement();
        var alertElement = formComponent.querySelector(".fba-alert");
        var alertElementHeading = formComponent.querySelector(".usa-alert__heading");
        var alertElementBody = formComponent.querySelector(".usa-alert__text");
  
        // Display success Message
        alertElementHeading.innerHTML += this.successHeadingText();
        alertElementBody.innerHTML += this.successText();
        alertElement.removeAttribute("hidden");
  
        // Hide Form Elements
        if (formElement) {
          // And clear the Form's Fields
          formElement.reset();
          if (formElement.querySelector('.touchpoints-form-body')) {
            var formBody = formElement.querySelector('.touchpoints-form-body');
            if(formBody) {
              formBody.setAttribute("hidden", true);
            }
          }
          if (formComponent.querySelector('.touchpoints-form-disclaimer')) {
            var formDisclaimer = formComponent.querySelector('.touchpoints-form-disclaimer');
            if(formDisclaimer) {
              formDisclaimer.setAttribute("hidden", true);
            }
          }
  
        }
      },
      resetFormDisplay: function() {
        if (this.successState === false) {
          return false;
        }
  
        // Hide and Reset Flash Message
        this.resetErrors();
  
        // Re-enable Submit Button
        var formElement = this.formElement();
        var submitButton = formElement.querySelector("[type='submit']");
        submitButton.disabled = false;
  
        // Show Form Elements
        if (formElement) {
          if (formElement.querySelector('.touchpoints-form-body')) {
            var formBody = formElement.querySelector('.touchpoints-form-body');
            if(formBody) {
              formBody.removeAttribute("hidden");
            }
          }
        }
      },
      formSuccess: function(e) {
        // Clear the alert box
        var formComponent = this.formComponent();
        var alertElement = formComponent.querySelector(".fba-alert");
        var alertElementBody = formComponent.getElementsByClassName("usa-alert__text")[0];
        var alertErrorElement = formComponent.querySelector(".fba-alert-error");
        var alertErrorElementBody = alertErrorElement.getElementsByClassName("usa-alert__text")[0];
        alertElementBody.innerHTML = "";
        alertErrorElementBody.innerHTML = "";
  
        var formElement = this.formElement();
        var submitButton = formElement.querySelector("[type='submit']");
  
        if (e.target.readyState === 4) {
          if (e.target.status === 201) { // SUCCESS!
            this.successState = true;
            if(submitButton) {
              submitButton.disabled = true;
            }
            this.showFormSuccess();
          } else if (e.target.status === 422) { // FORM ERRORS =\
              this.successState = false;
              if(submitButton) {
                submitButton.disabled = false;
              }
              var jsonResponse = JSON.parse(e.target.response);
              var errors = jsonResponse.messages;
  
              for (var err in errors) {
                if (errors.hasOwnProperty(err)) {
                  alertErrorElementBody.innerHTML += err;
                  alertErrorElementBody.innerHTML += " ";
                  alertErrorElementBody.innerHTML += errors[err];
                  alertErrorElementBody.innerHTML += "<br />";
                }
              }
              alertErrorElement.removeAttribute("hidden");
          } else { // SERVER ERROR
            console.log('failed');
            alertErrorElement.removeAttribute("hidden");
            alertErrorElementBody.innerHTML += "Server error. We're sorry, but this submission was not successful. The Product Team has been notified.";
          }
        }
      },
      ajaxPost: function (form, callback) {
        var url = form.action;
        var xhr = new XMLHttpRequest();
  
        // for each form question
        var params = {
          answer_01:
          form.querySelector("input[name=answer_01]:checked") && form.querySelector("input[name=answer_01]:checked").value,
          answer_02:
          form.querySelector("#answer_02") && form.querySelector("#answer_02").value,
        }

        if ( params.answer_02.length == 0 ) {
          params.answer_02 = 'No suggestion given.';
        }
		
        if (typeof gas === 'function') {
          gas('send', 'event', 'Was this page helpful', params.answer_01, params.answer_02, 1, true);
        }
		
        // Combine Referrer and Pathname with Form-specific params
        params["referer"] = d.referrer;
        params["page"] = window.location.pathname;
        params["location_code"] = form.querySelector("#fba_location_code") ? form.querySelector("#fba_location_code").value : null;
        params["language"] = "en";
  
        // Submit Feedback with a POST
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8;");
          xhr.onload = callback.bind(this);
          xhr.send(JSON.stringify({
          "submission": params
        }));
      },
      pagination: function() {
        var previousButtons = document.getElementsByClassName("previous-section");
        var nextButtons = document.getElementsByClassName("next-section");
  
        var self = this;
        for (var i = 0; i < previousButtons.length; i++) {
          previousButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            var currentPage = e.target.closest(".section");
            if (!this.validateForm(currentPage)) return false;
            currentPage.classList.remove("visible");
            currentPage.previousElementSibling.classList.add("visible");
            window.scrollTo(0, 0);
          }.bind(self));
        }
  
        for (var i = 0; i < nextButtons.length; i++) {
          nextButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            var currentPage = e.target.closest(".section");
            if (!this.validateForm(currentPage)) return false;
            currentPage.classList.remove("visible");
            currentPage.nextElementSibling.classList.add("visible");
            window.scrollTo(0, 0);
          }.bind(self))
        }
      }
    };
  };

  var formOptions = {
    'modalButtonText': "Help improve this site"
  };

  var hasContentPromos = (document.querySelector('.ContentPromos') !== null);
  var hasParkFooter = (document.getElementById('ParkFooter') !== null);
  var shouldDisplay = window.location.hostname === 'www.nps.gov' && window.location.href.toString() !== 'https://www.nps.gov/index.htm' && document.title !== "Requested Page Not Found (404)";
  if (shouldDisplay) {
      if (hasContentPromos) {
        var node = document.getElementsByClassName('ContentPromos')[0];
        var parentNode = node.parentNode;
        var newNode = document.createElement('div');
        newNode.id = "touchpoints-survey";
        parentNode.insertBefore(newNode, node);
        touchpointForm2416268b = new FBAform(document, window).init(formOptions);
      } else if (hasParkFooter){
        // has park footer but no content promos, create above park footer
        var node = document.getElementById('ParkFooter');
        var newNode = document.createElement('div');
        var parentNode = node.parentNode;
        newNode.id = "touchpoints-survey";
        parentNode.insertBefore(newNode,node);
        touchpointForm2416268b = new FBAform(document, window).init(formOptions);
      } else {
        var node = document.getElementsByClassName('MainContent')[0]
        var newNode = document.createElement('div');
        newNode.id = "touchpoints-survey";
        node.append(newNode);
        touchpointForm2416268b = new FBAform(document, window).init(formOptions);
      }
  }
})(jQuery);

'use strict';
(function ($) {
  $('.Truncatable').each(function () {
    var container = $(this);
    var content = $('.Truncatable__Content', container);
    var button = $('.Truncatable__Button', container);
    var height = content.height();
    var lineHeight = parseInt(content.css('line-height'));
    var linesToTruncate = parseInt(container.data('truncate'));
    var truncatedHeight = lineHeight * linesToTruncate;
    if (height <= truncatedHeight) {
      return;
    }
    var toggleTruncation = function () {
      if (container.hasClass('Truncatable--Truncated')) {
        button.html(button.data('text-active'));
        container.removeClass('Truncatable--Truncated');
        content.css('max-height', height);
        // Reset max-height after transition animation is finished
        // in case a viewport resize has changed height
        setTimeout(function () {
          content.css('max-height', '');
          height = content.height();
          content.css('max-height', height);
        }, 200);
      } else {
        height = content.height();
        button.html(button.data('text-inactive'));
        content.css('max-height', truncatedHeight + 'px');
        container.addClass('Truncatable--Truncated');
      }
    };
    container.addClass('Truncatable--Active');
    $('.Truncatable__Button', container).on('click', toggleTruncation);
    toggleTruncation();
  });
})(jQuery.noConflict());

//Used on the article_more_in_this template
'use strict';
(function($) {
  var sizeLi = $('.ArticleBody-moreInThis-item').size();
  var x = 6;
  $('.ArticleBody-moreInThis-item:lt(' + x + ')').show();
  $('.ArticleBody-moreInThis-button-count').text(sizeLi);
  $('#viewAllBtn').click(function() {
    $('.ArticleBody-moreInThis-item').show();
    $('')
    $('#viewAllBtn').hide();
    $('#article-item-6').focus();
  });
})(jQuery);

/* global jQuery */
'use strict';

(function ($) {
  /**
   * @param { object } physicalAddress
   * @param { object } mailingAddress
   */
  function renderAddresses(physicalAddress, mailingAddress) {
    if (typeof physicalAddress !== undefined && typeof physicalAddress !== 'object') {
      throw new Error('Invalid argument, physicalAddress must be an object');
    }

    if (typeof mailingAddress !== undefined && typeof mailingAddress !== 'object') {
      throw new Error('Invalid argument, physicalAddress must be an object');
    }

    var contents = document.createElement('div');

    var physicalGroup = document.createElement('div');
    physicalGroup.setAttribute('class', 'VisitorCenter__ContactPoint');
    physicalGroup.setAttribute('itemprop', 'address');
    physicalGroup.setAttribute('itemscope', true);
    physicalGroup.setAttribute('itemtype', 'http://schema.org/PostalAddress');

    var physicalHeading = document.createElement('p');
    physicalHeading.setAttribute('class', 'VisitorCenter__ContactPoint__Heading');
    physicalHeading.setAttribute('itemprop', 'name');
    physicalHeading.textContent = 'Physical Address';

    physicalGroup.appendChild(physicalHeading);

    var physicalAddressObject = new NPS.Address(physicalAddress);
    var physicalElement = physicalAddressObject.render();
    var physicalClass = physicalElement.getAttribute('class') || '';
    physicalClass = physicalClass + ' VisitorCenter__ContactPoint__Value';
    physicalElement.setAttribute('class', physicalClass);

    physicalGroup.appendChild(physicalElement);
    contents.appendChild(physicalGroup);

    var mailingGroup = document.createElement('div');
    mailingGroup.setAttribute('class', 'VisitorCenter__ContactPoint');
    mailingGroup.setAttribute('itemprop', 'contactPoint');
    mailingGroup.setAttribute('itemscope', true);
    mailingGroup.setAttribute('itemtype', 'http://schema.org/PostalAddress');

    var mailingHeading = document.createElement('p');
    mailingHeading.setAttribute('class', 'VisitorCenter__ContactPoint__Heading');
    mailingHeading.setAttribute('itemprop', 'name');
    mailingHeading.textContent = 'Mailing Address';

    mailingGroup.appendChild(mailingHeading);

    var mailingAddressObject = new NPS.Address(mailingAddress);
    var mailingElement = mailingAddressObject.render();
    var mailingClass = mailingElement.getAttribute('class') || '';
    mailingClass = mailingClass + ' VisitorCenter__ContactPoint__Value';
    mailingElement.setAttribute('class', mailingClass);

    mailingGroup.appendChild(mailingElement);
    contents.appendChild(mailingGroup)

    return contents;
  }

  /**
   * @param { string } directions
   */
  function renderDirections(directions) {
    if (typeof directions !== 'string') {
      throw new Error('Invalid argument, directions must be a string');
    }

    var contents = document.createElement('p');
    /**
     * !!! UNSAFE !!!
     * Required because directions may contain HTML
     */
    contents.innerHTML = directions;
    return contents;
  }

  /**
   * @param { string[] } amenities
   */
  function renderAmenities(amenities) {
    if (!Array.isArray(amenities)) {
      throw new Error('Invalid argument, amenities must be an array');
    }

    var amenitiesList = document.createElement('ul');
    var amenitiesClass = 'AmenitiesList' + (amenities.length > 6 ? ' AmenitiesList--long' : '');
    amenitiesList.setAttribute('class', amenitiesClass);

    amenities.forEach(function (amenity) {
      var amenitiesListItem = document.createElement('li');
      // Using the textContent property to prevent XSS
      amenitiesListItem.textContent = amenity;
      amenitiesList.appendChild(amenitiesListItem);
    });

    return amenitiesList;
  }

  /**
   * @param { Object } data - The contact points
   */
  function renderContactInformation(data) {
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid argument, data must be an object');
    }

    var contents = document.createElement('div');
    // See: https://schema.org/contactPoint
    contents.setAttribute('itemprop', 'contactPoint');

    if (data.emailAddress !== undefined) {
      var emailContact = document.createElement('div');
      emailContact.setAttribute('class', 'VisitorCenter__ContactPoint');

      var emailContactHeading = document.createElement('p');
      emailContactHeading.setAttribute('class', 'VisitorCenter__ContactPoint__Heading');
      emailContactHeading.textContent = 'Email Address';

      var emailContactValue = document.createElement('p');
      emailContactValue.setAttribute('class', 'VisitorCenter__ContactPoint__Value');

      var emailContactLink = document.createElement('a');
      var formURL = '/common/utilities/sendmail/sendemail.cfm';
      var encodedEmail = encodeURIComponent(data.emailAddress);
      var referral = encodeURIComponent(location.href);
      emailContactLink.setAttribute('href', formURL + '?o=' + encodedEmail + '&r=' + referral);
      emailContactLink.textContent = 'Send this visitor center an email';

      emailContactValue.appendChild(emailContactLink);
      emailContact.appendChild(emailContactHeading);
      emailContact.appendChild(emailContactValue);

      if (data.emailDescription !== undefined) {
        var emailContactDescription = document.createElement('p');
        emailContactDescription.textContent = data.emailDescription;
        emailContact.appendChild(emailContactDescription);
      }

      contents.appendChild(emailContact);
    }

    var phoneVoice = (data.telephoneNumberVoice !== undefined && data.telephoneNumberVoice !== '')
      ? String(data.telephoneNumberVoice).replace(/[^0-9]/g, '')
      : null;
    var phoneFax = (data.telephoneNumberFax !== undefined && data.telephoneNumberFax !== '')
      ? String(data.telephoneNumberFax).replace(/[^0-9]/g, '')
      : null;
    var phoneTty = (data.telephoneNumberTty !== undefined && data.telephoneNumberTty !== '')
      ? String(data.telephoneNumberTty).replace(/[^0-9]/g, '')
      : null;

    if (phoneVoice !== null || phoneFax !== null || phoneTty !== null) {
      var phoneContact = document.createElement('div');
      phoneContact.setAttribute('class', 'VisitorCenter__ContactPoint');

      var phoneContactHeading = document.createElement('p');
      phoneContactHeading.setAttribute('class', 'VisitorCenter__ContactPoint__Heading');
      phoneContactHeading.textContent = 'Phone Numbers';

      phoneContact.appendChild(phoneContactHeading);

      if (data.telephoneDescription !== undefined && data.telephoneDescription !== '') {
        var phoneContactDescription = document.createElement('p');
        phoneContactDescription.textContent = data.telephoneDescription;
        phoneContact.appendChild(phoneContactDescription);
      }

      var phoneContactList = document.createElement('ul');

      if (phoneVoice !== null) {
        var voiceListItem = document.createElement('li');
        voiceListItem.setAttribute('class', 'VisitorCenter__ContactPoint__Value');
        voiceListItem.setAttribute('itemscope', true);
        voiceListItem.setAttribute('itemtype', 'http://schema.org/ContactPoint');

        // Name
        var voiceListItemName = document.createElement('span');
        voiceListItemName.setAttribute('itemprop', 'name');

        var voiceListItemLabel = document.createElement('span');
        voiceListItemLabel.setAttribute('class', 'visually-hidden');
        voiceListItemLabel.textContent = ' phone number';

        var phoneIcon = document.createElement('i');
        phoneIcon.setAttribute('class', 'fa fa-phone');

        voiceListItemName.appendChild(phoneIcon);
        voiceListItemName.appendChild(document.createTextNode(' Voice'));
        voiceListItemName.appendChild(voiceListItemLabel);

        // Link
        var voiceListItemValue = document.createElement('span');
        voiceListItemValue.setAttribute('itemprop', 'telephone');

        var voiceListItemLink = document.createElement('a');
        voiceListItemLink.setAttribute('href', 'tel:+1' + phoneVoice);

        var phoneVoiceParts = phoneVoice.match(/^(\d{3})(\d{3})(\d{4})$/);
        var phoneVoiceFormatted = phoneVoiceParts
          ? '(' + phoneVoiceParts[1] + ') ' + phoneVoiceParts[2] + '-' + phoneVoiceParts[3]
          : data.telephoneNumberVoice;

        voiceListItemLink.textContent = phoneVoiceFormatted;
        voiceListItemValue.appendChild(voiceListItemLink);

        if (data.phoneExtensionVoice !== undefined && data.phoneExtensionVoice !== '') {
          voiceListItemValue.appendChild(document.createTextNode(' ext. ' + data.phoneExtensionVoice));
          voiceListItemValue.setAttribute('content', phoneVoiceFormatted + ' ext. ' + data.phoneExtensionVoice);
        } else {
          voiceListItemValue.setAttribute('content', phoneVoiceFormatted);
        }

        voiceListItem.appendChild(voiceListItemName);
        voiceListItem.appendChild(document.createElement('br'));
        voiceListItem.appendChild(voiceListItemValue);
        phoneContactList.appendChild(voiceListItem);
      }

      if (phoneTty !== null) {
        var ttyListItem = document.createElement('li');
        ttyListItem.setAttribute('class', 'VisitorCenter__ContactPoint__Value');
        ttyListItem.setAttribute('itemscope', true);
        ttyListItem.setAttribute('itemtype', 'http://schema.org/ContactPoint');

        // Schema link
        var ttySchemaLink = document.createElement('link');
        ttySchemaLink.setAttribute('itemprop', 'contactOption');
        ttySchemaLink.setAttribute('href', 'http://schema.org/HearingImpairedSupported');

        // Name
        var ttyListItemName = document.createElement('span');
        ttyListItemName.setAttribute('itemprop', 'name');

        var ttyIcon = document.createElement('i');
        ttyIcon.setAttribute('class', 'fa fa-tty');

        var ttyListItemLabel = document.createElement('span');
        ttyListItemLabel.setAttribute('class', 'visually-hidden');
        ttyListItemLabel.textContent = ' phone number';

        ttyListItemName.appendChild(ttyIcon);
        ttyListItemName.appendChild(document.createTextNode(' TTY'));
        ttyListItemName.appendChild(ttyListItemLabel);

        // Link
        var ttyListItemValue = document.createElement('span');
        ttyListItemValue.setAttribute('itemprop', 'telephone');

        var ttyListItemLink = document.createElement('a');
        ttyListItemLink.setAttribute('href', 'tel:+1' + phoneTty);

        var phoneTtyParts = phoneTty.match(/^(\d{3})(\d{3})(\d{4})$/);
        var phoneTtyFormatted = phoneTtyParts
          ? '(' + phoneTtyParts[1] + ') ' + phoneTtyParts[2] + '-' + phoneTtyParts[3]
          : data.telephoneNumberTty;

        ttyListItemLink.textContent = phoneTtyFormatted;
        ttyListItemValue.appendChild(ttyListItemLink);
        
        if (data.phoneExtensionTty !== undefined && data.phoneExtensionTty !== '') {
          ttyListItemValue.appendChild(document.createTextNode(' ext. ' + data.phoneExtensionTty));
          ttyListItemValue.setAttribute('content', phoneVoiceFormatted + ' ext. ' + data.phoneExtensionTty);
        } else {
          ttyListItemValue.setAttribute('content', phoneVoiceFormatted);
        }

        ttyListItem.appendChild(ttySchemaLink);
        ttyListItem.appendChild(ttyListItemName);
        ttyListItem.appendChild(document.createElement('br'));
        ttyListItem.appendChild(ttyListItemValue);
        phoneContactList.appendChild(ttyListItem);
      }

      if (phoneFax !== null) {
        var faxListItem = document.createElement('li');
        faxListItem.setAttribute('class', 'VisitorCenter__ContactPoint__Value');
        faxListItem.setAttribute('itemscope', true);
        faxListItem.setAttribute('itemtype', 'http://schema.org/ContactPoint');

        // Name
        var faxListItemName = document.createElement('span');
        faxListItemName.setAttribute('itemprop', 'name');

        var faxIcon = document.createElement('i');
        faxIcon.setAttribute('class','fa fa-fax');

        var faxListItemLabel = document.createElement('span');
        faxListItemLabel.setAttribute('class', 'visually-hidden');
        faxListItemLabel.textContent = ' number';

        faxListItemName.appendChild(faxIcon);
        faxListItemName.appendChild(document.createTextNode(' Fax'));
        faxListItemName.appendChild(faxListItemLabel);

        // Value
        var faxListItemValue = document.createElement('span');
        faxListItemValue.setAttribute('itemprop', 'faxNumber');

        var phoneFaxParts = phoneFax.match(/^(\d{3})(\d{3})(\d{4})$/);

        faxListItemValue.textContent = phoneFaxParts
          ? '(' + phoneFaxParts[1] + ') ' + phoneFaxParts[2] + '-' + phoneFaxParts[3]
          : data.telephoneNumberFax;

        faxListItem.appendChild(faxListItemName);
        faxListItem.appendChild(document.createElement('br'));
        faxListItem.appendChild(faxListItemValue);

        if (data.phoneExtensionFax !== undefined && data.phoneExtensionFax !== '') {
          faxListItem.appendChild(document.createTextNode(' ext. ' + data.phoneExtensionFax));
        }

        phoneContactList.appendChild(faxListItem);
      }

      phoneContact.appendChild(phoneContactList);
      contents.appendChild(phoneContact);
    }

    return contents;
  }

  function swiperImage(swiperID, index, altText, imageURL, featureText, creditText) {
    var imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'swiper-slide--full');
    imageContainer.setAttribute('id', 'swiper_image_' + swiperID + '_' + index);

    var figure = document.createElement('figure');
    var image = document.createElement('img');
    image.setAttribute('alt', altText);
    image.setAttribute('src', imageURL + '?width=800&height=800&mode=crop&quality=90');
    var figcaption = document.createElement('figcaption');
    figcaption.textContent = featureText;

    var brk = document.createElement('br');
    var credit = document.createElement('span');
    credit.setAttribute('class', 'credit');
    credit.textContent = creditText;

    figcaption.appendChild(brk);
    figcaption.appendChild(credit);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    imageContainer.appendChild(figure);

    return imageContainer;
  }

  function swiperSlide(imageURL, altText) {
    var slide = document.createElement('div');
    slide.setAttribute('class', 'swiper-slide');

    var thumbnail = document.createElement('a');
    thumbnail.setAttribute('href', imageURL);
    thumbnail.setAttribute('class', 'CarouselGallery__Thumbnail');
    thumbnail.setAttribute('style', 'background-image: url(' + imageURL + '?width=250&height=250&mode=crop&quality=90) !important');

    var altTextElement = document.createElement('span');
    altTextElement.setAttribute('class', 'CarouselGallery__Thumbnail__AltText');
    altTextElement.textContent = altText;

    thumbnail.appendChild(altTextElement);
    slide.appendChild(thumbnail);
    return slide;
  }

  function render(container, visitorCenter, controlID) {
    var titleContainer = container.querySelector('.VisitorCenter__Title__Text');
    if (titleContainer) {
      titleContainer.innerHTML = '';
      titleContainer.textContent = visitorCenter.name;
    }

    var descriptionContainer = container.querySelector('.VisitorCenter__Description');
    if (descriptionContainer) {
      /**
       * !!! UNSAFE !!!
       * Required because description may contain HTML
       */
      descriptionContainer.innerHTML = visitorCenter.description;
    }

    var accordion = container.querySelector('.InfoAccordion');
    if (!accordion) return;

    // Addresses
    var addressesItem = container.querySelector('.InfoAccordion__Item--addresses');

    if (addressesItem) {
      var addressesPanel = addressesItem.querySelector('.accordion-body');

      if (
        addressesPanel &&
        (
          visitorCenter.physical_address !== undefined &&
          visitorCenter.physical_address.line_1 !== undefined &&
          visitorCenter.physical_address.line_1 !== ''
        ) &&
        (
          visitorCenter.mailing_address !== undefined &&
          visitorCenter.mailing_address.line_1 !== undefined &&
          visitorCenter.mailing_address.line_1 !== ''
        )
      ) {
        addressesPanel.appendChild(
          renderAddresses(
            visitorCenter.physical_address,
            visitorCenter.mailing_address
          )
        );
      } else {
        addressesItem.remove();
      }
    }

    // Directions
    var directionsItem = container.querySelector('.InfoAccordion__Item--directions');

    if (directionsItem) {
      var directionsPanel = directionsItem.querySelector('.accordion-body');

      if (
        directionsPanel &&
        (visitorCenter.directions !== undefined) &&
        (visitorCenter.directions !== '')
      ) {
        directionsPanel.appendChild(renderDirections(visitorCenter.directions));
      } else {
        directionsItem.remove();
      }
    }

    // Hours and Seasons
    var hoursContainer = accordion.querySelector('.OperatingHours');

    var operatingHours = (visitorCenter.operatingHours && visitorCenter.operatingHours[1])
      ? new NPS.OperatingHours(visitorCenter.operatingHours[1])
      : null;

    if (hoursContainer && operatingHours) {
      operatingHours.render(hoursContainer);
    } else if (hoursContainer) {
      hoursContainer.remove();
    }

    // Amenities
    var amenitiesItem = container.querySelector('.InfoAccordion__Item--amenities');

    if (amenitiesItem) {
      var amenitiesPanel = amenitiesItem.querySelector('.accordion-body');

      if (
        amenitiesPanel &&
        Array.isArray(visitorCenter.amenities) &&
        visitorCenter.amenities.length > 0
      ) {
        amenitiesPanel.appendChild(renderAmenities(visitorCenter.amenities));
      } else {
        amenitiesItem.remove();
      }
    }

    // Contact information
    var contactItem = container.querySelector('.InfoAccordion__Item--contact');

    if (contactItem) {
      var contactPanel = contactItem.querySelector('.accordion-body');

      if (
        contactPanel &&
        (
          (
            visitorCenter.emailAddress !== undefined &&
            visitorCenter.emailAddress !== ''
          ) ||
          (
            visitorCenter.telephoneNumberVoice !== undefined &&
            visitorCenter.telephoneNumberVoice !== ''
          ) ||
          (
            visitorCenter.telephoneNumberFax !== undefined &&
            visitorCenter.telephoneNumberFax !== ''
          ) ||
          (
            visitorCenter.telephoneNumberTty !== undefined &&
            visitorCenter.telephoneNumberTty !== ''
          )
        )
      ) {
        contactPanel.appendChild(renderContactInformation(visitorCenter));
      } else {
        contactItem.remove();
      }
    }


    // Images
    var galleryContainer = container.querySelector('.VisitorCenter__Gallery');
    if (
      galleryContainer &&
      Array.isArray(visitorCenter.images) &&
      visitorCenter.images.length > 0
    ) {
      var maxItemsRendered = 8;
      var titleCharacterLimit = 48;
      var numberImagesToRender = visitorCenter.images.length;

      if (numberImagesToRender > maxItemsRendered) {
        numberImagesToRender = maxItemsRendered;
      }

      var carouselGallery = galleryContainer.querySelector('.CarouselGallery');

      if (carouselGallery) {
        var swiperID = carouselGallery.getAttribute('data-swiper-id');
        var swiperWrapper = carouselGallery.querySelector('.swiper-wrapper');
        var swiperImages = carouselGallery.querySelector('.swiper-images');

        if (swiperID && swiperWrapper && swiperImages) {
          for (i = 0; i < numberImagesToRender; i++) {
            if (visitorCenter.images[i].imageURL.length > 3) {
              swiperWrapper.appendChild(swiperSlide(
                visitorCenter.images[i].imageURL,
                visitorCenter.images[i].altText
              ));

              swiperImages.appendChild(swiperImage(
                swiperID,
                i,
                visitorCenter.images[i].altText,
                visitorCenter.images[i].imageURL,
                visitorCenter.images[i].featureText,
                visitorCenter.images[i].creditText
              ));
            }
          }

          $(swiperWrapper).on('click', '.CarouselGallery__Thumbnail', function (e) {
            e.preventDefault();
          });
        }
      }
    } else if (galleryContainer) {
      galleryContainer.remove();
    }
  }

  $(document).ready(function() {
    var containers = document.querySelectorAll('.VisitorCenters');
    var swiperInstances = {}ribute('data-control-id'));
      var siteCode = container.getAttribute('data-site-code');
      var visitorCenterElements = container.querySelectorAll('.VisitorCenter');

      $.getJSON('/' + encodeURIComponent(siteCode) + '/structured_data_' + encodeURIComponent(siteCode) + '.json', function(data) { 
        if (!Array.isArray(data.visitorCenters)) { 
          // Invalid response, exit early
          return;
        }

        visitorCenterElements.forEach(function (element) {
          var visitorCenterID = element.getAttribute('data-vc-id');

          var visitorCenterData = data.visitorCenters.filter(function (vc) {
            return vc.visitorCenterID === parseInt(visitorCenterID);
          });

          if (visitorCenterData.length > 0) {
            render(element, visitorCenterData.shift(), controlID);

            var carouselGallery = element.querySelector('.CarouselGallery');
            if (carouselGallery) {
              NPS.initCarouselGallery(carouselGallery);
            }

            $('a, area', element).each(function () {
              var href = this.getAttribute('href');
              if (href && href.charAt(0) !== '#') {
                NPS.interceptExternalLinks(this);
              }
            });
          } else {
            element.remove();
          }
        });
      });
    });
  });
})(jQuery);

(function ($) {
  function getExtendedForecast(forecastURL, container) {
    //pull forecast data
    $.ajax({
      type: "GET",
      url: forecastURL,
      dataType: "json",
      success: function (result, status, xhr) {
        $(".w-updated", container).text(new Date(result.properties.updateTime).toLocaleString());

        if (container.querySelector('.WeatherWidget__ExtendedForecast')) {
          for(var i = 0; i < 4; i++) {
            var period = result.properties.periods[i];
            $(".w-periods", container).append("<div class='col-sm-3' align='center'><p style='width:100px;height:38px;line-height:1.4;'><strong>"+period.name+"</strong></p><p><img src='"+period.icon+"' style='width: 100px; height: 100px;' class='img-center'><br>"+period.shortForecast+"</p><p><strong>"+period.temperature+"&deg;F</strong></p></div>");
          }
        }

        if (container.querySelector('.WeatherWidget__ExtendedDetailedForecast')) {
          for(var i = 0; i < result.properties.periods.length; i++) {
            var period = result.properties.periods[i];
            $(".w-extendeddescription", container).append("<p><b>"+period.name+":</b> "+period.detailedForecast+"</p>");
          }	
        }

        $(".loadingMsg", container).hide();
        $(container).show();
        $(".w-updated-container", container).show();
        $(".w-extended-container", container).show();
      },
      error: function (xhr, status, error) {
        console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);	                	
      }
    });
  }

	function callCurrentAPI(stationInd, stationData, container) {
		if (stationInd <= stationData.length) {
			var thisStation = stationData[stationInd];

			//get station current observations
			$.ajax({
				type: "GET",
				url: "https://api.weather.gov/stations/"+thisStation.properties.stationIdentifier+"/observations/latest",
				dataType: "json",
				success: function (result1, status1, xhr1) {
					if (result1.properties.temperature.value) {
						$(".w-station", container).text(thisStation.properties.name);
						$(".w-lat", container).text(thisStation.geometry.coordinates[1]);
						$(".w-long", container).text(thisStation.geometry.coordinates[0]);
						$(".w-temperature-f", container).html(Math.round(convertTempToF(result1.properties.temperature.value)) + "&deg;F"); // 50&deg;F
						$(".w-temperature-c", container).html(Math.round(result1.properties.temperature.value) + "&deg;C"); // 50&deg;

						if (result1.properties.icon) {
							$(".w-icon", container).attr("src", result1.properties.icon);
						} else {
							$(".w-icon", container).attr("src", "https://www.weather.gov/error_nws/nws_logo.gif");
						}

						$(".w-textdescription", container).text(result1.properties.textDescription);
						$(".w-humidity", container).text(Math.round(result1.properties.relativeHumidity.value)+"%"); //13%
						$(".w-wind", container).text(convertDegreeToCompass(result1.properties.windDirection.value)+" "+Math.round(convertSpeedToMph(result1.properties.windSpeed.value))+" mph"); //W 15 G 22 MPH
						$(".w-barometer", container).text(Math.round(convertPAToIn(result1.properties.barometricPressure.value)*100)/100+" in"); //30.08 in
						$(".w-dewpoint", container).html(Math.round(convertTempToF(result1.properties.dewpoint.value))+"&deg;F ("+Math.round(result1.properties.dewpoint.value)+"&deg;C)"); //0&deg;F (-18&deg;C)

						if (result1.properties.visibility.value) { 
							$(".w-visibility", container).text(result1.properties.visibility.value+" m"); //10.00 mi
							$(".w-visibility-container", container).show();
						}

						if (result1.properties.windChill.value) {
							$(".w-windchill", container).html(Math.round(convertTempToF(result1.properties.windChill.value))+"&deg;F ("+Math.round(result1.properties.windChill.value)+"&deg;C)"); //42&deg;F (6&deg;C)
							$(".w-windchill-container", container).show();
						}

						$(".w-current-container .card-body", container).show();
            $(container).siblings(".loadingMsg").hide();
            $(container).show();
            $(".w-current-container", container).show();
					} else {
						callCurrentAPI(stationInd+1, stationData, container);//no results, try the next one
					}	
				},
				error: function (xhr1, status1, error1) {
					callCurrentAPI(stationInd+1, stationData, container);//no results, try the next one
				}
			});
		} else { 
			//giving up
			$(container).siblings(".loadingMsg").hide();
			$(container).show();
			$(".w-current-co
		/* We load jQueryUI here because it needs to load after bootstrap */
		if (typeof $.ui != 'undefined') {
			showWeatherAlertModal(id,title,content)
		} else {
			// We need to load jQueryUI first
			if (document.createStyleSheet){
				document.createStyleSheet('/ADF/thirdParty/jquery/ui/jquery-ui-1.11/css/ui-lightness/jquery-ui.css');
			} else {
				$("head").append("<link rel='stylesheet' href='/ADF/thirdParty/jquery/ui/jquery-ui-1.11/css/ui-lightness/jquery-ui.css' type='text/css' media='screen' />");
			}

			var url = '/ADF/thirdParty/jquery/ui/jquery-ui-1.12/jspt, textStatus ) {
					showWeatherAlertModal(id,title,content);
				});
		}	
	}

	function showWeatherAlertModal(id, title, content) {
		$(id).html("<p>"+content+"</p>");
		$(id).attr("title",title);
		$(id).dialog({ width: "70%", maxWidth: "500px;" });
		$(id).dialog("open");
	}			

	function convertDegreeToCompass(v) {
		var val = Math.floor((v / 22.5) + 0.5);
		var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
		return arr[(val % 16)];
	}

	function convertTempToF(v) {
		return (v * 9 / 5 + 32);
	}

	function convertTempToC(v) {
		return ((v-32) * 5 / 9);
	}

	function convertSpeedToMph(v) {
		return (v * 2.2369362920544);
	}

	function convertPAToIn(v) {
		return (v*2 * 0.00015); 
	}

  $(document).ready(function () {
    var containers = document.querySelectorAll('.WeatherWidget');
    containers.forEach(function (container) {
      var latLng = container.getAttribute('data-latlng');

      if (latLng === undefined || latLng.length === 0) return;

      //pull alert data
      $.ajax({
        type: "GET",
        url: "https://api.weather.gov/alerts?point=" + encodeURIComponent(latLng) + "&active=1",
        dataType: "json",
        success: function (result, status, xhr) {
          if (Array.isArray(result.features) && result.features.length > 0) {
            var features = result.features.filter(function (feature) {
              return (
                feature.properties !== undefined &&
                feature.properties.headline !== undefined &&
                feature.properties.headline.length > 0
              );
            }).map(function (feature) {
              var card = document.createElement("div");
              card.setAttribute("class", "card border-danger mb-4");

              var cardBody = document.createElement("div");
              cardBody.setAttribute("class", "card-body");

              var cardTitle = document.createElement("h4");
              cardTitle.setAttribute("class", "card-title text-danger");
              cardTitle.textContent = feature.properties.headline;
              cardBody.appendChild(cardTitle);

              var alertTxt = "<p>"+feature.properties.description.replace(/\n\n/g,"</p><p>").replace(/\n/g," ")+"</p><p>PRECAUTIONARY/PREPAREDNESS ACTIONS:<br/>";

              // deal with edge case of no instruction being provided with alert
              if (feature.properties.instruction != null) { 
                alertTxt += feature.properties.instruction.replace(/\n\n/g,"</p><p>").replace(/\n/g," ") 
              }
              
              alertTxt += "</p><p>------<br/>Posted By: " + feature.properties.senderName + "<br/>";
              alertTxt += "Severity: " + feature.properties.severity + "<br/>";
              alertTxt += "Area: " + feature.properties.areaDesc + "<br/>";
              ale(feature.properties.effective).toLocaleString() + "<br/>";
              alertTxt += "Ends: " + new Date(feature.properties.ends).toLocaleString() + "</p>";

              cardBody.innerHTML = cardBody.innerHTML + alertTxt;
              card.appendChild(cardBody);
              return card;
            });

            if (features) {
              $(".w-alerts", container).append(features);
            } else {
              $(".w-alerts", container).remove();
            }

          } else {
            $(".w-alerts", container).remove();
          }

          $(container).show();
          $(container).siblings(".loadingMsg").hide();
        },
        error: function (xhr, status, error) {}
      });

      // get closest station 
      $.ajax({
        type: "GET",
        url: "https://api.weather.gov/points/" + encodeURIComponent(latLng) + "/stations",
        dataType: "json",
        success: function (result, status, xhr) {
          stationData = result.features;

          if (container.querySelector('.w-current-container')) {
            callCurrentAPI(0, stationData, container);//start iterating through the station list until we get a result that works
          }
        },
        error: function (xhr, status, error) { 
          // failed... show weather.gov icon and part of the widget
          $(container).siblings("loadingMsg").hide();	                	
          $(container).show();
          $(".w-weather-icon", container).show();
        }
      });

      var extendedContainer = container.querySelector('.WeatherWidget__ExtendedForecast');
      if (extendedContainer) {
        /**
         * First, call https://api.weather.gov/points/{latLng}
         * Second, parse the returned JSON for the "forecast" property (e.g. "forecast": "https://api.weather.gov/gridpoints/AFG/475,78/forecast" )
         * Third, call URL in forecast property
         * Fourth, parse the returned JSON, iterating and displaying the structures within the "periods" array
         */

        $.ajax({
          type: "GET",
          url: "https://api.weather.gov/points/" + encodeURIComponent(latLng),
          dataType: "json",
          success: function (result, status, xhr) {
            getExtendedForecast(result.properties.forecast, container);
          },
          error: function (xhr, status, error) {
            console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
          }
        });
      }
    });
  });
})(jQuery);

/* global jQuery */
'use strict';
(function ($) {
  var timer = 60;
  var interval;
  var src = '';

  function update() {
    if (timer === 1) {
      $('#webcamRefreshImage').attr('src', breakCache(src));
      timer = 60;
    } else {
      timer = timer - 1;
    }
    $('#webcamRefreshTimer').html(timer);
  }

  function breakCache(url) {
    if (url.indexOf('?') === -1) {
      return (url + '?' + Date.now());
    } else {
      return (url + '&' + Date.now());
    }
  }

  $(document).ready(function () {
    if ($('#webcamRefreshTimer').length > 0 && $('#webcamRefreshButton').length > 0 && $('#webcamRefreshImage').length > 0) {
      src = $('#webcamRefreshImage').attr('src');
      $('#webcamRefreshImage').attr('src', breakCache(src));
      interval = setInterval(update, 1000);
      $('#webcamRefreshButton').click(function () {
        if ($(this).data('action') === 'stop') {
          $(this).html('<i class="fa fa-play" aria-hidden="true"></i> Resume auto-refresh');
          $(this).data('action', 'start');
          clearInterval(interval);
        } else {
          $(this).html('<i class="fa fa-stop" aria-hidden="true"></i> Stop auto-refresh');
          $(this).data('action', 'stop');
          interval = setInterval(update, 1000);
        }
      });
    }
  });
})(jQuery);

