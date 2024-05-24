/* ========================================================================
* Copyright (c) <2022, 2023> (version 5.1) Jon Gunderson, University of Illinois and PayPal
* All rights reserved.
* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of PayPal or any of its subsidiaries or affiliates, nor the name of the University of Illinois, nor the names of any other contributors contributors may be used to endorse or promote products derived from this software without specific prior written permission.
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
* Documenation: https://skipto-landmarks-headings.github.io/page-script-5
* Code: https://github.com/skipto-landmarks-headings/page-script-5
* Report Issues: https://github.com/skipto-landmarks-headings/page-script-5/issues
* ======================================================================== */

class DebugLogging{constructor(...e){this._flag=!1,this._label="debug";for(const[t,n]of e.entries())if(t<2)switch(typeof n){case"boolean":this._flag=n;break;case"string":this._label=n}}get flag(){return this._flag}set flag(e){"boolean"==typeof e&&(this._flag=e)}g(e,t){const n=t?"\n":"";console.log(`${n}[${this._label}] ${e}`)}tag(e,t){if(e&&e.tagName){const n=e.textContent.trim().replace(/\s+/g," ");this.log(`[${e.tagName}]: ${n.substring(0,40)}`,t)}}const debug$5=new DebugLogging("style",!1);debug$5.flag=!1;const styleTemplate=document.createElement("template");function getTheme(e,t){if("object"==typeof e[t])return e[t];let n="",o="",i="";const s=new URL(location.href).hostname,a=location.pathname;for(let t in e){const r=e[t].hostnameSelector,l=e[t].pathnameSelector;let d=!1,u=!1;r&&s.indexOf(r)>=0&&(!n||e[n].hostnameSelector.length<r.length?(n=t,d=!0,o=""):e[n].hostnameSelector.length===r.length&&(d=!0)),l&&a.indexOf(l)>=0&&(!o||e[o].pathnameSelector.length<l.length)&&(o=t,u=!0),d&&u&&(i=t)}return i?e[i]:n?e[n]:o?e[o]:e.default}function updateStyle(e,t,n,o){let i=o;"string"==typeof t&&t?i=t:"string"==typeof n&&n&&(i=n);let s=styleTemplate.innerHTML,a=s.indexOf(e),r=a+e.length;for(;a>=0&&r<s.length;)r=(a=(s=s.substring(0,a)+i+s.substring(r)).indexOf(e,r))+e.length;styleTemplate.innerHTML=s}function addCSSColors(e,t){const n=getTheme(e,t.colorTheme),o=getTheme(e,"default");"string"==typeof n.displayOption&&"fixed popup static".indexOf(n.displayOption.toLowerCase())>=0&&(t.displayOption=n.displayOption),updateStyle("$fontFamily",t.fontFamily,n.fontFamily,o.fontFamily),updateStyle("$fontSize",t.fontSize,n.fontSize,o.fontSize),updateStyle("$positionLeft",t.positionLeft,n.positionLeft,o.positionLeft),updateStyle("$mediaBreakPoint",t.mediaBreakPoint,n.mediaBreakPoint,o.mediaBreakPoint),updateStyle("$menuTextColor",t.menuTextColor,n.menuTextColor,o.menuTextColor),updateStyle("$menuBackgroundColor",t.menuBackgroundColor,n.menuBackgroundColor,o.menuBackgroundColor),updateStyle("$menuitemFocusTextColor",t.menuitemFocusTextColor,n.menuitemFocusTextColor,o.menuitemFocusTextColor),updateStyle("$menuitemFocusBackgroundColor",t.menuitemFocusBackgroundColor,n.menuitemFocusBackgroundColor,o.menuitemFocusBackgroundColor),updateStyle("$focusBorderColor",t.focusBorderColor,n.focusBorderColor,o.focusBorderColor),updateStyle("$buttonTextColor",t.buttonTextColor,n.buttonTextColor,o.buttonTextColor),updateStyle("$buttonBackgroundColor",t.buttonBackgroundColor,n.buttonBackgroundColor,o.buttonBackgroundColor),updateStyle("$zIndex",t.zIndex,n.zIndex,o.zIndex)}function renderStyleElement(e,t,n){addCSSColors(e,t);const o=styleTemplate.content.cloneNode(!0);document.getElementsByTagName("head")[0].appendChild(o),o.id=n}styleTemplate.innerHTML='\n<style type="text/css">\nnav#id-skip-to.popup {\n  position: absolute;\n  top: -34px;\n  transition: top 0.35s ease;\n}\n\nnav#id-skip-to button .text {\n  padding: 6px 8px 6px 8px;\n  display: inline-block;\n}\n\nnav#id-skip-to button img {\n  height: 24px;\n  padding: 2px 4px 2px 4px;\n  display: none;\n  background-color: #e8e9ea;\n}\n\nnav#id-skip-to,\nnav#id-skip-to.popup.focus,\nnav#id-skip-to.popup:hover {\n  position: absolute;\n  top: 0;\n  left: $positionLeft;\n  font-family: $fontFamily;\n  font-size: $fontSize;\n  display: block;\n  border: none;\n  margin-bottom: 4px;\n  transition: left 1s ease;\n  z-index: $zIndex !important;\n}\n\nnav#id-skip-to button {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-radius: 0px 0px 6px 6px;\n  border-color: $buttonBackgroundColor;\n  color: $buttonTextColor;\n  background-color: $buttonBackgroundColor;\n  z-index: 100000 !important;\n  font-family: $fontFamily;\n  font-size: $fontSize;\n  z-index: $zIndex !important;\n}\n\n@media screen and (max-width: $mediaBreakPointpx) {\n  nav#id-skip-to button img {\n    display: block;\n  }\n\n  nav#id-skip-to button {\n    border-color: #e8e9ea;\n  }\n\n  nav#id-skip-to button .text {\n    display: none;\n  }\n}\n\nnav#id-skip-to.fixed {\n  position: fixed;\n}\n\n\nnav#id-skip-to [role="menu"] {\n  position: absolute;\n  min-width: 17em;\n  display: none;\n  margin: 0;\n  padding: 0.25rem;\n  background-color: $menuBackgroundColor;\n  border-width: 2px;\n  border-style: solid;\n  border-color: $focusBorderColor;\n  border-radius: 5px;\n  overflow-x: hidden;\n  z-index: $zIndex !important;\n}\n\nnav#id-skip-to [role="group"] {\n  display: grid;\n  grid-auto-rows: min-content;\n  grid-row-gap: 1px;\n}\n\nnav#id-skip-to [role="separator"]:first-child {\n  border-radius: 5px 5px 0 0;\n}\n\nnav#id-skip-to [role="menuitem"] {\n  padding: 3px;\n  width: auto;\n  border-width: 0px;\n  border-style: solid;\n  color: $menuTextColor;\n  background-color: $menuBackgroundColor;\n  display: grid;\n  overflow-y: clip;\n  grid-template-columns: repeat(6, 1.2rem) 1fr;\n  grid-column-gap: 2px;\n  font-size: 1em;\n  z-index: $zIndex !important;  \n}\n\nnav#id-skip-to [role="menuitem"] .level,\nnav#id-skip-to [role="menuitem"] .label {\n  font-size: 100%;\n  font-weight: normal;\n  color: $menuTextColor;\n  display: inline-block;\n  background-color: $menuBackgroundColor;\n  line-height: inherit;\n  display: inline-block;\n}\n\nnav#id-skip-to [role="menuitem"] .level {\n  text-align: right;\n  padding-right: 4px;\n}\n\nnav#id-skip-to [role="menuitem"] .label {\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nnav#id-skip-to [role="menuitem"] .level:first-letter,\nnav#id-skip-to [role="menuitem"] .label:first-letter {\n  text-decoration: underline;\n  text-transform: uppercase;\n}\n\n\nnav#id-skip-to [role="menuitem"].skip-to-h1 .level { grid-column: 1; }\nnav#id-skip-to [role="menuitem"].skip-to-h2 .level { grid-column: 2; }\nnav#id-skip-to [role="menuitem"].skip-to-h3 .level { grid-column: 3; }\nnav#id-skip-to [role="menuitem"].skip-to-h4 .level { grid-column: 4; }\nnav#id-skip-to [role="menuitem"].skip-to-h5 .level { grid-column: 5; }\nnav#id-skip-to [role="menuitem"].skip-to-h6 .level { grid-column: 8;}\n\nnav#id-skip-to [role="menuitem"].skip-to-h1 .label { grid-column: 2 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h2 .label { grid-column: 3 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h3 .label { grid-column: 4 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h4 .label { grid-column: 5 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h5 .label { grid-column: 6 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h6 .label { grid-column: 7 / 8;}\n\nnav#id-skip-to [role="menuitem"].skip-to-h1.no-level .label { grid-column: 1 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h2.no-level .label { grid-column: 2 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h3.no-level .label { grid-column: 3 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h4.no-level .label { grid-column: 4 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h5.no-level .label { grid-column: 5 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-h6.no-level .label { grid-column: 6 / 8; }\n\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-1 .nesting { grid-column: 1; }\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-2 .nesting { grid-column: 2; }\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-3 .nesting { grid-column: 3; }\n\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-0 .label { grid-column: 1 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-1 .label { grid-column: 2 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-2 .label { grid-column: 3 / 8; }\nnav#id-skip-to [role="menuitem"].skip-to-nesting-level-3 .label { grid-column: 4 / 8; }\n\nnav#id-skip-to [role="menuitem"].no-items .label,\nnav#id-skip-to [role="menuitem"].action .label {\n  grid-column: 1 / 8;\n}\n\nnav#id-skip-to [role="separator"] {\n  margin: 1px 0px 1px 0px;\n  padding: 3px;\n  display: block;\n  width: auto;\n  font-weight: bold;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: $menuTextColor;\n  background-color: $menuBackgroundColor;\n  color: $menuTextColor;\n  z-index: $zIndex !important;\n}\n\nnav#id-skip-to [role="separator"] .mofn {\n  font-weight: normal;\n  font-size: 85%;\n}\n\nnav#id-skip-to [role="separator"]:first-child {\n  border-radius: 5px 5px 0 0;\n}\n\nnav#id-skip-to [role="menuitem"].last {\n  border-radius: 0 0 5px 5px;\n}\n\n/* focus styling */\n\nnav#id-skip-to.focus {\n  display: block;\n}\n\nnav#id-skip-to button:focus,\nnav#id-skip-to button:hover {\n  background-color: $menuBackgroundColor;\n  color: $menuTextColor;\n  outline: none;\n}\n\nnav#id-skip-to button:focus,\nnav#id-skip-to button:hover {\n  border-width: 0px 2px 2px 2px;\n  border-color: $focusBorderColor;\n}\n\nnav#id-skip-to button:focus .text,\nnav#id-skip-to button:hover .text {\n  padding: 6px 7px 5px 7px;\n}\n\nnav#id-skip-to button:focus img,\nnav#id-skip-to button:hover img {\n  padding: 2px 3px 4px 3px;\n}\n\n\nnav#id-skip-to [role="menuitem"]:focus {\n  padding: 1px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: $focusBorderColor;\n  background-color: $menuitemFocusBackgroundColor;\n  color: $menuitemFocusTextColor;\n  outline: none;\n}\n\nnav#id-skip-to [role="menuitem"]:focus .level,\nnav#id-skip-to [role="menuitem"]:focus .label {\n  background-color: $menuitemFocusBackgroundColor;\n  color: $menuitemFocusTextColor;\n}\n</style>\n';const debug$4=new DebugLogging("Utils",!1);function getAttributeValue(e,t){let n=e.getAttribute(t);return null===n?"":normalize(n)}unction isNotEmptyString(e){return"string"==typeof e&&e.length&&e.trim()&&"&nbsp;"!==e}function isVisible(e){let t=window.getComputedStyle(e).getPropertyValue("visibility");return"hidden"!==t&&"collapse"!==t&&!function e(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;if(t.hasAttribute("hidden"))return!0;return"none"===window.getComputedStyle(t,null).getPropertyValue("display")||!!t.parentNode&&e(t.parentNode)}(e)}debug$4.flag=!1;const debug$3=new DebugLogging("nameFrom",!1);function isDisplayNone(e){if(!e)return!1;if(e.nodeType===Node.TEXT_NODE&&(e=e.parentNode),e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("hidden"))return!0;if(e.hasAttribute("aria-hidden")&&"true"===e.getAttribute("aria-hidden").toLowerCase())return!0;const t=window.getComputedStyle(e,null).getPropertyValue("display");if(t)return"none"===t}return!1}function isVisibilityHidden(e){if(!e)return!1;if(e.nodeType===Node.TEXT_NODE&&(e=e.parentNode),e.nodeType===Node.ELEMENT_NODE){const t=window.getComputedStyle(e,null).getPropertyValue("visibility");if(t)return"hidden"===t||"collapse"===t}return!1}function isAriaHIddenFalse(e){return!!e&&(e.nodeType===Node.TEXT_NODE&&(e=e.parentNode),e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("aria-hidden")&&"false"===e.getAttribute("aria-hidden").toLowerCase()))}function includeContentInName(e){return isAriaHIddenFalse(e)||!isVisibilityHidden(e)&&!isDisplayNone(e)}function getNodeContents(e){let t,n="",o=[];switch(e.nodeType){case Node.ELEMENT_NODE:if(e.hasAttribute("aria-label"))includeContentInName(e)&&(n=e.getAttribute("aria-label"));else if(e instanceof HTMLSlotElement){(e.assignedNodes().length?e.assignedNodes():e.assignedNodes({flatten:!0})).forEach(e=>{(t=getNodeContents(e)).length&&o.push(t)}),n=o.length?o.join(" "):""}else if(couldHaveAltText(e)&&includeContentInName(e))n=getAttributeValue(e,"alt");else if(e.hasChildNodes()){Array.from(e.childNodes).forEach(e=>{(t=getNodeContents(e)).length&&o.push(t)}),n=o.length?o.join(" "):""}n=addCssGeneratedContent(e,n);break;case Node.TEXT_NODE:includeContentInName(e)&&(n=normalize(e.textContent))}return n}function couldHaveAltText(e){switch(e.tagName.toLowerCase()){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function addCssGeneratedContent(e,t){let n=t,o=getComputedStyle(e,":before").content,i=getComputedStyle(e,":after").content;return"none"!==o&&(n=o.replaceAll('"',"")+n),"none"!==i&&(n+=i.replaceAll('"',"")),n}debug$3.flag=!1;const debug$2=new DebugLogging("accName",!1);function getAccessibleName(e,t,n=!1){let o="";return""===(o=nameFromAttributeIdRefs(e,t,"aria-labelledby"))&&t.hasAttribute("aria-label")&&(o=t.getAttribute("aria-label").trim()),""===o&&n&&(o=getNodeContents(t)),""===o&&""!==t.title.trim()&&(o=t.title.trim()),o}function nameFromAttributeIdRefs(e,t,n){const o=getAttributeValue(t,n),i=[];if(o.length){const t=o.split(" ");for(let n=0;n<t.length;n++){const o=e.getElementById(t[n]);if(o){const e=getNodeContents(o);e&&e.length&&i.push(e)}}}return i.length?i.join(" "):""}debug$2.flag=!1;const debug$1=new DebugLogging("landmarksHeadings",!1);debug$1.flag=!1;const skipableElements=["base","content","frame","iframe","input[type=hidden]","link","meta","noscript","script","style","template","shadow","title"],allowedLandmarkSelectors=["banner","complementary","contentinfo","form","main","navigation","region","search"],higherLevelElements=["article","aside","footer","header","main","nav","region","section"];let idIndex=0;nction isSkipableElement(e){const t=e.tagName.toLowerCase(),n=e.hasAttribute("type")?e.getAttribute("type"):"",o="input"===t&&n.length?`${t}[type=${n}]`:t;return skipableElements.includes(o)}nction isTopLevel(e){for(e=e&&e.parentNode;e&&e.nodeType===Node.ELEMENT_NODE;){const t=e.tagName.toLowerCase();let n=e.getAttribute("role");if(n&&(n=n.toLowerCase()),higherLevelElements.includes(t)||allowedLandmarkSelectors.includes(n))return!1;e=e.parentNode}return!0}function checkForLandmark(e){if(e.hasAttribute("role")){const t=e.getAttribute("role").toLowerCase();if(allowedLandmarkSelectors.indexOf(t)>=0)return t}else{switch(e.tagName.toLowerCase()){case"aside":return"complementary";case"main":return"main";case"nav":return"navigation";case"header":if(isTopLevel(e))return"banner";break;case"footer":if(isTopLevel(e))return"contentinfo";break;case"section":if(e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby"))return"region"}}return""}function queryDOMForSkipToId(e){return function t(n){var o=null;for(let i=n.firstChild;null!==i;i=i.nextSibling)if(i.nodeType===Node.ELEMENT_NODE){if(i.getAttribute("data-skip-to-id")===e)return i;if(!isSkipableElement(i))if(isSlotElement(i)){const n=i.assignedNodes().length?i.assignedNodes():i.assignedNodes({flatten:!0});for(let i=0;i<n.length;i+=1){const s=n[i];if(s.nodeType===Node.ELEMENT_NODE){if(s.getAttribute("data-skip-to-id")===e)return s;if(o=t(s))return o}}}else if(isCustomElement(i)){if(i.shadowRoot&&(o=t(i.shadowRoot)))return o}else if(o=t(i))return o}return!1}(document.body)}function findVisibleElement(e,t){function n(e,t){var o=null;for(let i=e.firstChild;null!==i;i=i.nextSibling)if(i.nodeType===Node.ELEMENT_NODE&&!isSkipableElement(i))if(isSlotElement(i)){const e=i.assignedNodes().length?i.assignedNodes():i.assignedNodes({flatten:!0});for(let i=0;i<e.length;i+=1){const s=e[i];if(s.nodeType===Node.ELEMENT_NODE){if(s.tagName.toLowerCase()===t&&isVisible(s))return s;if(o=n(s,t))return o}}}else if(isCustomElement(i)){if(i.shadowRoot&&(o=n(i.shadowRoot,t)))return o}else{if(i.tagName.toLowerCase()===t&&isVisible(i))return i;if(o=n(i,t))return o}return!1}let o=!1;for(let i=0;i<t.length&&!(o=n(e,t[i]));i+=1);return o||e}function skipToElement(e){let t,n=!1,o=!1;const i=["input","button","a"],s=["a","input","button"],a=["h1","h2","h3","h4","h5","h6","section","article","p","li","a"],r=e.classList.contains("landmark"),l=e.classList.contains("skip-to-search"),d=e.classList.contains("skip-to-nav");(t=queryDOMForSkipToId(e.getAttribute("data-id")))&&(l&&(n=findVisibleElement(t,i)),d&&(n=findVisibleElement(t,s)),n&&isVisible(n)?(n.tabIndex>=0?n.focus():(n.tabIndex=0,n.focus(),n.tabIndex=-1),n.scrollIntoView({block:"center"})):(r&&(o=findVisibleElement(t,a))&&(t=o),t.tabIndex>=0?t.focus():(t.tabIndex=0,t.focus(),t.tabIndex=-1),t.scrollIntoView({block:"center"})))}function getHeadingTargets(e){let t=[];return["h1","h2","h3","h4","h5","h6"].forEach(,t}function isMain(e){const t=e.tagName.toLowerCase(),n=e.hasAttribute("role")?e.getAttribute("role").toLowerCase():"";return"main"===t||"main"===n}function queryDOMForLandmarksAndHeadings(e,t){let n=[],o=[],i=getLandmarkTargets(e.toLowerCase()),s=getHeadingTargets(t.toLowerCase()),a=t.includes("main");function r(e,t,l=null,d=!1){for(let u=e.firstChild;null!==u;u=u.nextSibling)if(u.nodeType===Node.ELEMENT_NODE){const e=u.tagName.toLowerCase();if(i.indexOf(checkForLandmark(u))>=0&&o.push({node:u,name:getAccessibleName(t,u)}),s.indexOf(e)>=0&&(a&&!d||n.push({node:u,name:getAccessibleName(t,u,!0)})),isMain(u)&&(d=!0),!isSkipableElement(u))if(isSlotElement(u)){const e=u.assignedNodes().length>0,c=e?u.assignedNodes():u.assignedNodes({flatten:!0}),m=e?l:t;for(let u=0;u<c.length;u+=1){const p=c[u];if(p.nodeType===Node.ELEMENT_NODE){const h=c[u].tagName.toLowerCase();i.indexOf(checkForLandmark(p))>=0&&o.push({node:p,name:getAccessibleName(m,p)}),s.indexOf(h)>=0&&(a&&!d||n.push({node:p,name:getAccessibleName(m,p,!0)})),e?r(p,l,null,d):r(p,t,l,d)}}}else isCustomElement(u)?u.shadowRoot&&r(u.shadowRoot,u.shadowRoot,t,d):r(u,t,l,d)}}return r(document.body,document),0===n.length&&a&&(a=!1,r(document.body,document)),[o,n]}function getLandmarksAndHeadings(e){let t=e.landmarks;"string"!=typeof t&&(t="main search navigation");let n=e.headings;"string"!=typeof n&&(n="h1 h2");const[o,i]=queryDOMForLandmarksAndHeadings(t,n);return[getLandmarks(e,o),getHeadings(e,i)]}function getHeadings(e,t){let n,o,i=[];for(let s=0,a=t.length;s<a;s+=1){let a=t[s],r=a.node.getAttribute("role");if(("string"!=typeof r||"presentation"!==r)&&(isVisible(a.node)&&isNotEmptyString(a.node.innerHTML))){a.node.hasAttribute("data-skip-to-id")?n=a.node.getAttribute("data-skip-to-id"):(n=getSkipToIdIndex(),a.node.setAttribute("data-skip-to-id",n)),o=a.node.tagName.substring(1);const t={};t.dataId=n.toString(),t.class="heading",t.name=a.name,t.ariaLabel=t.name+", ",t.ariaLabel+=e.headingLevelLabel+" "+o,t.tagName=a.node.tagName.toLowerCase(),t.role="heading",t.level=o,i.push(t),incSkipToIdIndex()}}return i}function getLocalizedLandmarkName(e,t,n){let o;switch(t){case"aside":o=e.asideLabel;break;case"footer":o=e.footerLabel;break;case"form":o=e.formLabel;break;case"header":o=e.headerLabel;break;case"main":o=e.mainLabel;break;case"nav":o=e.navLabel;break;case"section":case"region":o=e.regionLabel;break;case"search":o=e.searchLabel;break;default:o=t}return isNotEmptyString(n)&&(o+=": "+n),o}function getLandmarkTargets(e){let t=[];return(e=e.toLowerCase()).includes("main")&&t.push("main"),e.includes("search")&&t.push("search"),e.includes("nav")&&t.push("navigation"),(e.includes("complementary")||e.includes("aside"))&&t.push("complementary"),(e.includes("banner")||e.includes("header"))&&t.push("banner"),(e.includes("contentinfo")||e.includes("footer"))&&t.push("contentinfo"),(e.includes("region")||e.includes("section"))&&t.push("region"),t}function getLandmarks(e,t){let n=[],o=[],i=[],s=[],a=[],r=[],l=[],d="";for(let u=0,c=t.length;u<c;u+=1){let c=t[u];if("id-skip-to"===c.node.id)continue;let m=c.node.getAttribute("role"),p=c.node.tagName.toLowerCase();if(("string"!=typeof m||"presentation"!==m)&&isVisible(c.node)){switch(m||(m=p),m){case"banner":p="header";break;case"complementary":p="aside";break;case"contentinfo":p="footer";break;case"form":p="form";break;case"main":p="main";break;case"navigation":p="nav";break;case"region":p="section";break;case"search":p="search"}["aside","footer","form","header","main","nav","section","search"].indexOf(p)<0&&(p="main"),c.node.hasAttribute("aria-roledescription")&&(p=c.node.getAttribute("aria-roledescription").trim().replace(" ","-")),c.node.hasAttribute("data-skip-to-id")?d=c.node.getAttribute("data-skip-to-id"):(d=getSkipToIdIndex(),c.node.setAttribute("data-skip-to-id",d));const t={};switch(t.dataId=d.toString(),t.class="landmark",t.hasName=c.name.length>0,t.name=getLocalizedLandmarkName(e,p,c.name),t.tagName=p,t.nestingLevel=0,incSkipToIdIndex(),p){case"main":n.push(t);break;case"search":o.push(t);break;case"nav":i.push(t);break;case"aside":s.push(t);break;case"footer":a.push(t);break;case"section":t.hasName&&r.push(t);break;default:l.push(t)}}}return[].concat(n,o,i,s,r,a,l)}const debug=new DebugLogging("SkipToButton",!1);debug.flag=!1;class SkiptoMenuButton{constructor(e,t){this.config=t,this.containerNode=document.createElement("nav"),this.containerNode.id="id-skip-to",this.containerNode.setAttribute("aria-label",t.buttonLabel),isNotEmptyString(t.customClass)&&this.containerNode.classList.add(t.customClass);let n=t.displayOption;if("string"==typeof n&&(n=n.trim().toLowerCase()).length)switch(t.displayOption){case"fixed":this.containerNode.classList.add("fixed");break;case"onfocus":case"popup":this.containerNode.classList.add("popup")}const[o,i]=this.getBrowserSpecificShortcut(t);this.buttonNode=document.createElement("button"),this.buttonNode.setAttribute("aria-label",i),this.buttonNode.addEventListener("keydown",this.handleButtonKeydown.bind(this)),this.buttonNode.addEventListener("click",this.handleButtonClick.bind(this)),this.containerNode.appendChild(this.buttonNode),this.buttonTextNode=document.createElement("span"),this.buttonTextNode.classList.add("text"),this.buttonTextNode.textContent=o,this.buttonNode.appendChild(this.buttonTextNode);const s=document.createElement("img");s.src="data:image/png;base64,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",s.setAttribute("alt",""),this.buttonNode.appendChild(s),this.menuNode=document.createElement("div"),this.menuNode.id="id-skip-to-menu",this.menuNode.setAttribute("role","menu"),this.menuNode.setAttribute("aria-label",t.menuLabel),this.menuNode.setAttribute("aria-busy","true"),this.containerNode.appendChild(this.menuNode);const a=document.createElement("div");a.id="id-skip-to-menu-landmark-group-label",a.setAttribute("role","separator"),a.textContent=this.config.landmarkGroupLabel,this.menuNode.appendChild(a),this.landmarkGroupNode=document.createElement("div"),this.landmarkGroupNode.setAttribute("role","group"),this.landmarkGroupNode.setAttribute("aria-labelledby",a.id),this.landmarkGroupNode.id="#id-skip-to-menu-landmark-group",this.menuNode.appendChild(this.landmarkGroupNode);const r=document.createElement("div");return r.id="id-skip-to-menu-heading-group-label",r.setAttribute("role","separator"),r.textContent=this.config.headingGroupLabel,this.menuNode.appendChild(r),this.headingGroupNode=document.createElement("div"),this.headingGroupNode.setAttribute("role","group"),this.headingGroupNode.setAttribute("aria-labelledby",r.id),this.headingGroupNode.id="#id-skip-to-menu-heading-group",this.menuNode.appendChild(this.headingGroupNode),this.containerNode.addEventListener("focusin",this.handleFocusin.bind(this)),this.containerNode.addEventListener("focusout",this.handleFocusout.bind(this)),window.addEventListener("pointerdown",this.handleBackgroundPointerdown.bind(this),!0),(this.usesAltKey||this.usesOptionKey)&&document.addEventListener("keydown",this.handleDocumentKeydown.bind(this)),e.insertBefore(this.containerNode,e.firstElementChild),this.containerNode}getBrowserSpecificShortcut(e){const t=navigator.platform.toLowerCase(),n=navigator.userAgent.toLowerCase(),o=t.indexOf("win")>=0,i=t.indexOf("mac")>=0,s=t.indexOf("linux")>=0||t.indexOf("bsd")>=0,a=n.indexOf("android")>=0;this.usesAltKey=o||s&&!a,this.usesOptionKey=i;let r,l=e.buttonLabel,d=e.buttonLabel;return e.altShortcut&&e.optionShortcut&&((this.usesAltKey||this.usesOptionKey)&&(r=e.buttonShortcut.replace("$key",e.altShortcut)),this.usesAltKey&&(l+=r=r.replace("$modifier",e.altLabel),d=e.altButtonAriaLabel.replace("$key",e.altShortcut)),this.usesOptionKey&&(l+=r=r.replace("$modifier",e.optionLabel),d=e.optionButtonAriaLabel.replace("$key",e.altShortcut))),[l,d]}getFirstChar(e){const t=e.querySelector(".label");return t&&isNotEmptyString(t.textContent)?t.textContent.trim()[0].toLowerCase():""}getHeadingLevelFromAttributepdateKeyboardShortCuts(){let e;this.firstChars=[],this.headingLevels=[];for(let t=0;t<this.menuitemNodes.length;t+=1)e=this.menuitemNodes[t],this.firstChars.push(this.getFirstChar(e)),this.headingLevels.push(this.getHeadingLevelFromAttribute(e))}updateMenuitems(){let e=this.menuNode.querySelectorAll("[role=menuitem");this.menuitemNodes=[];for(let t=0;t<e.length;t+=1)this.menuitemNodes.push(e[t]);this.firstMenuitem=this.menuitemNodes[0],this.lastMenuitem=this.menuitemNodes[this.menuitemNodes.length-1],this.lastMenuitem.classList.add("last"),this.updateKeyboardShortCuts()}renderMenuitemToGroup(e,t){let n,o,i,s,a=document.createElement("div");return a.setAttribute("role","menuitem"),a.classList.add(t.class),isNotEmptyString(t.tagName)&&a.classList.add("skip-to-"+t.tagName.toLowerCase()),a.setAttribute("data-id",t.dataId),a.tabIndex=-1,isNotEmptyString(t.ariaLabel)&&a.setAttribute("aria-label",t.ariaLabel),a.addEventListener("keydown",this.handleMenuitemKeydown.bind(this)),a.addEventListener("click",this.handleMenuitemClick.bind(this)),a.addEventListener("pointerenter",this.handleMenuitemPointerenter.bind(this)),e.appendChild(a),t.class.includes("heading")&&(this.config.enableHeadingLevelShortcuts?(n=document.createElement("span"),(o=document.createElement("span")).appendChild(document.createTextNode(t.level)),n.append(o),n.appendChild(document.createTextNode(")")),n.classList.add("level"),a.append(n)):a.classList.add("no-level"),a.setAttribute("data-level",t.level),isNotEmptyString(t.tagName)&&a.classList.add("skip-to-"+t.tagName)),t.class.includes("landmark")&&(a.setAttribute("data-nesting",t.nestingLevel),a.classList.add("skip-to-nesting-level-"+t.nestingLevel),t.nestingLevel>0&&t.nestingLevel>this.lastNestingLevel&&((s=document.createElement("span")).classList.add("nesting"),a.append(s)),this.lastNestingLevel=t.nestingLevel),(i=document.createElement("span")).appendChild(document.createTextNode(t.name)),i.classList.add("label"),a.append(i),a}renderMenuitemsToGroup(e,t,n){if(e.innerHTML="",this.lastNestingLevel=0,0===t.length){const t={};t.name=n,t.tagName="",t.class="no-items",t.dataId="",this.renderMenuitemToGroup(e,t)}else for(let n=0;n<t.length;n+=1)this.renderMenuitemToGroup(e,t[n])}renderMenu(){for(;this.landmarkGroupNode.lastElementChild;)this.landmarkGroupNode.removeChild(this.landmarkGroupNode.lastElementChild);for(;this.headingGroupNode.lastElementChild;)this.headingGroupNode.removeChild(this.headingGroupNode.lastElementChild);const[e,t]=getLandmarksAndHeadings(this.config);this.renderMenuitemsToGroup(this.landmarkGroupNode,e,this.config.msgNoLandmarksFound),this.renderMenuitemsToGroup(this.headingGroupNode,t,this.config.msgNoHeadingsFound),this.updateMenuitems()}etFocusToFirstMenuitem(){this.setFocusToMenuitem(this.firstMenuitem)}etFocusToPreviousMenuitem(e){let t,n;return e===this.firstMenuitem?t=this.lastMenuitem:(n=this.menuitemNodes.indexOf(e),t=this.menuitemNodes[n-1]),this.setFocusToMenuitem(t),t}setFocusToNextMenuitem(e){let t,n;return e===this.lastMenuitem?t=this.firstMenuitem:(n=this.menuitemNodes.indexOf(e),t=this.menuitemNodes[n+1]),this.setFocusToMenuitem(t),t}setFocusByFirstCharacter(e,t){let n,o;t.length>1||(t=t.toLowerCase(),(n=this.menuitemNodes.indexOf(e)+1)>=this.menuitemNodes.length&&(n=0),-1===(o=this.firstChars.indexOf(t,n))&&(o=this.headingLevels.indexOf(t,n)),-1===o&&(o=this.firstChars.indexOf(t,0)),-1===o&&(o=this.headingLevels.indexOf(t,0)),o>-1&&this.setFocusToMenuitem(this.menuitemNodes[o]))}getIndexFirstChars(e,t){for(let n=e;n<this.firstChars.length;n+=1)if(t===this.firstChars[n])return n;return-1}openPopup(){this.menuNode.setAttribute("aria-busy","true");const e=80*window.innerHeight/100;this.menuNode.style.maxHeight=e+"px",this.renderMenu(),this.menuNode.style.display="block";const t=this.buttonNode.getBoundingClientRect(),n=this.menuNode.getBoundingClientRect(),o=window.innerWidth-t.left-n.width-8;o<0&&(t.left+o<0?this.menuNode.style.left=8-t.left+"px":this.menuNode.style.left=o+"px"),this.menuNode.removeAttribute("aria-busy"),this.buttonNode.setAttribute("aria-expanded","true")}closePopup(){this.isOpen()&&(this.buttonNode.setAttribute("aria-expanded","false"),this.menuNode.style.display="none")}andleFocusin(){this.containerNode.classList.add("focus")}andleButtonKeydown(e){let t=!1;switch(e.key){case" ":case"Enter":case"ArrowDown":case"Down":this.openPopup(),this.setFocusToFirstMenuitem(),t=!0;break;case"Esc":case"Escape":this.closePopup(),this.buttonNode.focus(),t=!0;break;case"Up":case"ArrowUp":this.openPopup(),this.setFocusToLastMenuitem(),t=!0}t&&(e.stopPropagation(),e.preventDefault())}handleButtonClick(e){this.isOpen()?(this.closePopup(),this.buttonNode.focus()):(this.openPopup(),this.setFocusToFirstMenuitem()),e.stopPropagation(),e.preventDefault()}handleDocumentKeydown(e){let t=e.key,n=!1,o=this.usesAltKey&&e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.metaKey;(this.usesOptionKey&&e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.metaKey&&this.config.optionShortcut===t||o&&this.config.altShortcut===t)&&(this.openPopup(),this.setFocusToFirstMenuitem(),n=!0),n&&(e.stopPropagation(),e.preventDefault())}handleMenuitemAction(e){switch(e.getAttribute("data-id")){case"":break;default:this.closePopup(),skipToElement(e)}}handleMenuitemKeydown(e){let t=e.currentTarget,n=e.key,o=!1;f(!(e.ctrlKey||e.altKey||e.metaKey)){if(e.shiftKey)i(n)&&(this.setFocusByFirstCharacter(t,n),o=!0),"Tab"===e.key&&(this.buttonNode.focus(),this.closePopup(),o=!0);else switch(n){case"Enter":case" ":this.handleMenuitemAction(t),o=!0;break;case"Esc":case"Escape":this.closePopup(),this.buttonNode.focus(),o=!0;break;case"Up":case"ArrowUp":this.setFocusToPreviousMenuitem(t),o=!0;break;case"ArrowDown":case"Down":this.setFocusToNextMenuitem(t),o=!0;break;case"Home":case"PageUp":this.setFocusToFirstMenuitem(),o=!0;break;case"End":case"PageDown":this.setFocusToLastMenuitem(),o=!0;break;case"Tab":this.closePopup();break;default:i(n)&&(this.setFocusByFirstCharacter(t,n),o=!0)}o&&(e.stopPropagation(),e.preventDefault())}}handleMenuitemClick(e){this.handleMenuitemAction(e.currentTarget),e.stopPropagation(),e.preventDefault()}andleBackgroundPointerdown(e){this.containerNode.contains(e.target)||this.isOpen()&&(this.closePopup(),this.buttonNode.focus())}}!function(){const e={skipToId:"id-skip-to-js-50",skipToMenuId:"id-skip-to-menu-50",domNode:null,buttonNode:null,menuNode:null,menuitemNodes:[],firstMenuitem:!1,lastMenuitem:!1,firstChars:[],headingLevels:[],skipToIdIndex:1,config:{enableHeadingLevelShortcuts:!0,altShortcut:"0",optionShortcut:"º",attachElement:"body",displayOption:"popup",containerElement:"nav",containerRole:"",customClass:"",buttonLabel:"Skip To Content",altLabel:"Alt",optionLabel:"Option",buttonShortcut:" ($modifier+$key)",altButtonAriaLabel:"Skip To Content, shortcut Alt plus $key",optionButtonAriaLabel:"Skip To Content, shortcut Option plus $key",menuLabel:"Landmarks and Headings",landmarkGroupLabel:"Landmark Regions",headingGroupLabel:"Headings",headingLevelLabel:"Heading level",mainLabel:"main",searchLabel:"search",navLabel:"navigation",regionLabel:"region",asideLabel:"complementary",footerLabel:"contentinfo",headerLabel:"banner",formLabel:"form",msgNoLandmarksFound:"No landmarks found",msgNoHeadingsFound:"No headings found",landmarks:"main search navigation complementary",headings:"main h1 h2",colorTheme:"",fontFamily:"",fontSize:"",positionLeft:"",mediaBreakPoint:"",menuTextColor:"",menuBackgroundColor:"",menuitemFocusTextColor:"",menuitemFocusBackgroundColor:"",focusBorderColor:"",buttonTextColor:"",buttonBackgroundColor:"",zIndex:""},colorThemes:{default:{fontFamily:"inherit",fontSize:"inherit",positionLeft:"46%",mediaBreakPoint:"540",menuTextColor:"#1a1a1a",menuBackgroundColor:"#dcdcdc",menuitemFocusTextColor:"#eeeeee",menuitemFocusBackgroundColor:"#1a1a1a",focusBorderColor:"#1a1a1a",buttonTextColor:"#1a1a1a",buttonBackgroundColor:"#eeeeee",zIndex:"100000"},aria:{hostnameSelector:"w3.org",pathnameSelector:"ARIA/apg",fontFamily:"sans-serif",fontSize:"10pt",positionLeft:"7%",menuTextColor:"#000",menuBackgroundColor:"#def",menuitemFocusTextColor:"#fff",menuitemFocusBackgroundColor:"#005a9c",focusBorderColor:"#005a9c",buttonTextColor:"#005a9c",buttonBackgroundColor:"#ddd"},illinois:{hostnameSelector:"illinois.edu",menuTextColor:"#00132c",menuBackgroundColor:"#cad9ef",menuitemFocusTextColor:"#eeeeee",menuitemFocusBackgroundColor:"#00132c",focusBorderColor:"#ff552e",buttonTextColor:"#444444",buttonBackgroundColor:"#dddede"},skipto:{hostnameSelector:"skipto-landmarks-headings.github.io",fontSize:"14px",menuTextColor:"#00132c",menuBackgroundColor:"#cad9ef",menuitemFocusTextColor:"#eeeeee",menuitemFocusBackgroundColor:"#00132c",focusBorderColor:"#ff552e",buttonTextColor:"#444444",buttonBackgroundColor:"#dddede"},uic:{hostnameSelector:"uic.edu",menuTextColor:"#001e62",menuBackgroundColor:"#f8f8f8",menuitemFocusTextColor:"#ffffff",menuitemFocusBackgroundColor:"#001e62",focusBorderColor:"#d50032",buttonTextColor:"#ffffff",buttonBackgroundColor:"#001e62"},uillinois:{hostnameSelector:"uillinois.edu",menuTextColor:"#001e62",menuBackgroundColor:"#e8e9ea",menuitemFocusTextColor:"#f8f8f8",menuitemFocusBackgroundColor:"#13294b",focusBorderColor:"#dd3403",buttonTextColor:"#e8e9ea",buttonBackgroundColor:"#13294b"},uis:{hostnameSelector:"uis.edu",menuTextColor:"#036",menuBackgroundColor:"#fff",menuitemFocusTextColor:"#fff",menuitemFocusBackgroundColor:"#036",focusBorderColor:"#dd3444",buttonTextColor:"#fff",buttonBackgroundColor:"#036"}},init:function(e){let t;if(document.querySelector("style#"+this.skipToId))return;let n=document.body;e&&this.setupConfig(e),"string"==typeof this.config.attachElement&&(t=document.querySelector(this.config.attachElement))&&t.nodeType===Node.ELEMENT_NODE&&(n=t),renderStyleElement(this.colorThemes,this.config,this.skipToId),new SkiptoMenuButton(n,this.config)},setupConfig:function(e){let t;t="object"==typeof e.settings&&"object"==typeof e.settings.skipTo?e.settings.skipTo:void 0===e||"object"!=typeof e?{}:e;for(const e in t)void 0!==this.config[e]&&("string"==typeof t[e]&&t[e].length>0||"boolean"==typeof t[e])?this.config[e]=t[e]:console.warn('[SkipTo]: Unsuported or deprecated configuration option "'+e+'".')}};window.addEventListener("load")}();