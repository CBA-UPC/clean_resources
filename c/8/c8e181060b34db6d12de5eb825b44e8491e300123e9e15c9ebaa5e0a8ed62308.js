(()=>{(self.webpackChunkms_privacy=self.webpackChunkms_privacy||[]).push([[75293,41482],{13553:(a,l,r)=>{var t=r(2784);function e(n){return t.createElement("svg",n,[t.createElement("title",{key:0},"Location Pin"),t.createElement("path",{d:"M0 56.182C0 25.186 22.383 0 49.982 0 77.612 0 99.996 25.186 100 56.182c0 31.289-28.867 65.178-42.722 83.835-3.944 5.31-10.616 5.31-14.556 0C28.827 121.362 0 86.514 0 56.184zM50 70c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19z",fillRule:"evenodd",key:1})])}e.defaultProps={viewBox:"0 0 100 144"},a.exports=e,e.default=e},47823:(a,l,r)=>{var t=r(2784);.defaultProps={viewBox:"0 0 24 24"},a.exports=e,e.default=e}}]);})();

//# sourceMappingURL=75293.Icon309.cbb1a599761c01b69d33.js.maptton--secondary--3De36{color:#1e7ea2!important}[dir] .wu .DsrButton--secondary--3De36{background-color:unset!important;border-color:#1e7ea2!important}.wu .DsrButton--textButton--3t7v4{color:#1e7ea2!important}.DsrButton--button--aGwEo.DsrButton--disabled--26qek{opacity:1!important;color:#818184!important}[dir] .DsrButton--button--aGwEo.DsrButton--disabled--26qek{border:none;background-color:#d6d9dc!important}.samsungTheme .DsrButton--button--aGwEo{font-weight:400!important}",""]),c.locals={button:"DsrButton--button--aGwEo",disableMarginBottom:"DsrButton--disableMarginBottom--2zJ8u",secondary:"DsrButton--secondary--3De36",textButton:"DsrButton--textButton--3t7v4",disabled:"DsrButton--disabled--26qek"},g.exports=c},52723:(g,c,t)=>{"use strict";t.r(c),t.d(c,{CookieSettings:()=>i,default:()=>p});var e=t(2784),u=t(94985),o=t(56897),w=t(97446);const n="wxu-web-dsr-form-cookie-settings";class i extends e.PureComponent{constructor(){super(...arguments),this.consentManagerLabelId="li-cookie-settings-btn"}componentDidMount(){var r,s,d,_;const a=document.getElementById(this.consentManagerLabelId);a&&((s=(r=window==null?void 0:window.top)==null?void 0:r.DprSdk)==null?void 0:s.showConsentManager)&&a.addEventListener("click",(_=(d=window==null?void 0:window.top)==null?void 0:d.DprSdk)==null?void 0:_.showConsentManager)}render(){const r=this.context,{privacyPolicyLink:s,branding:d}=this.props;return e.createElement(e.Fragment,null,e.createElement("p",{dangerouslySetInnerHTML:{__html:r(n,"cookieSettingsIntroParagraph",{templateArgs:{branding:r("wxu-web-dsr-form",d)}})}}),e.createElement("ul",null,e.createElement("li",null,r(n,"essentialCookiesBullet1")),e.createElement("li",{dangerouslySetInnerHTML:{__html:r(n,"essentialCookiesBullet2",{templateArgs:{cookieSettingsLink:(0,o.Z)({text:r(n,"cookieSettingsButtonLabel"),id:this.consentManagerLabelId})}})}})),e.createElement("h3",null,r(n,"cookiesHeading")),e.createElement("p",null,r(n,"cookiesParagraph")),e.createElement("h3",null,r(n,"howCookiesUseHeading")),e.createElement("p",{dangerouslySetInnerHTML:{__html:r(n,"howCookiesUseParagraph",{templateArgs:{privacyPolicyLink:(0,o.Z)({text:r("wxu-web-dsr-form","privacyPolicyLinkLabel"),href:s,target:"_top"})}})}}),e.createElement("h3",null,r(n,"purposesHeading")),e.createElement("p",null,r(n,"purposesParagraph")),e.createElement("p",{dangerouslySetInnerHTML:{__html:r(n,"purposesParagraph2",{templateArgs:{brandingHost:r("web-web-dsr-form",d==="twcBranding"?"weather.com":"www.wunderground.com"),iabPoliciesLink:(0,o.Z)({text:r(n,"iabPoliciesLinkLabel"),href:"https://iabeurope.eu/iab-europe-transparency-consent-framework-policies/",target:"_blank"})}})}}),e.createElement("p",null,r(n,"purposesParagraph3")),e.createElement("h3",null,r(n,"legitimateInterestHeading")),e.createElement("p",null,r(n,"legitimateInterestParagraph")),e.createElement("p",null,r(n,"legitimateInterestParagraph2")),e.createElement(w.Z,{text:r(n,"cookieSettingsButtonLabel"),onClick:()=>{var _,a,b;(b=(a=(_=window.top)==null?void 0:_.DprSdk)==null?void 0:a.showConsentManager)==null||b.call(a)}}))}}i.contextType=u.y;const p=i},11850:(g,c,t)=>{"use strict";t.d(c,{Z:()=>w});var e=t(2784),u=t(94985);function o({subscriptionsEnabled:n,translationNamespace:i,appId:p,deviceClass:m}){const r=(0,e.useContext)(u.y);return n&&e.createElement(e.Fragment,null,e.createElement("h3",null,r(i,"accountDetailsHeading")),e.createElement("p",null,r(i,"accountDetailsParagraph")),p==="wu-web"&&m==="mobile"?e.createElement("ul",null,e.createElement("li",null,r("wxu-web-dsr-form-correct-data","accountDetailsStep1_wu-web_mobile")),e.createElement("li",null,r("wxu-web-dsr-form-correct-data","accountDetailsStep2_wu-web_mobile")),e.createElement("li",null,r("wxu-web-dsr-form-correct-data","accountDetailsStep3_wu-web_mobile"))):e.createElement("p",null,r(i,`accountDetailsManageAccountParagraph_${p}${m?`_${m}`:""}`)))}const w=o},89597:(g,c,t)=>{"use strict";t.d(c,{Z:()=>i});var e=t(2784),u=t(94985),o=t(56897),w=t(23631);function n({regime:p,translationNamespace:m,experience:r}){const s=(0,e.useContext)(u.y);return(w.nB.includes(p)&&p!==w.NW||r==="wu")&&e.createElement(e.Fragment,null,e.createElement("h3",null,s(m,"dataCorrectionHeading")),e.createElement("p",{dangerouslySetInnerHTML:{__html:s(m,"dataCorrectionParagraph",{templateArgs:{privacyEmail:(0,o.Z)({href:`mailto:${s(m,"privacyEmail")}`,text:s(m,"privacyEmail")})}})}}))}const i=n},87342:(g,c,t)=>{"use strict";t.r(c),t.d(c,{CorrectData:()=>m,default:()=>r});var e=t(2784),u=t(94985),o=t(56897),w=t(89597),n=t(11850);class i extends e.PureComponent{render(){const{deviceClass:d,regime:_}=this.props,a=this.context,b=d==="mobile"?d:"desktop";return e.createElement(e.Fragment,null,e.createElement("p",null,a("wxu-web-dsr-form-correct-data","correctIntroParagraph_wu-web")),e.createElement("h3",null,a("wxu-web-dsr-form-correct-data","correctUnitsHeading")),e.createElement("p",null,a("wxu-web-dsr-form-correct-data","correctUnitsIntroParagraph")),e.createElement("ul",null,e.createElement("li",null,a("wxu-web-dsr-form-correct-data",`correctUnitsStep1_wu-web_${b}`)),e.createElement("li",null,a("wxu-web-dsr-form-correct-data",`correctUnitsStep2_wu-web_${b}`)),e.createElement("li",null,a("wxu-web-dsr-form-correct-data",`correctUnitsStep3_wu-web_${b}`)),d==="mobile"&&e.createElement("li",null,e.createElement("p",null,a("wxu-web-dsr-form-correct-data","correctUnitsStep4_wu-web_mobile")))),e.createElement("h3",null,a("wxu-web-dsr-form-correct-data","correctSavedLocationsHeading_wu-web")),e.createElement("p",null,a("wxu-web-dsr-form-correct-data","correctSavedLocationsIntroParagraph_wu-web")),e.createElement("ul",null,e.createElement("li",null,e.createElement("p",{dangerouslySetInnerHTML:{__html:a("wxu-web-dsr-form-correct-data","correctSavedLocationsStep1_wu-web",{templateArgs:{"correctSavedLocationsLink_wu-web":(0,o.Z)({href:a("wxu-web-dsr-form-correct-data","correctSavedLocationsLink_wu-web"),target:"_blank",text:a("wxu-web-dsr-form-correct-data","correctSavedLocationsLink_wu-web")})}})}})),e.createElement("li",null,e.createElement("p",null,a("wxu-web-dsr-form-correct-data","correctSavedLocationsStep2_wu-web")))),e.createElement(n.Z,{subscriptionsEnabled:!0,translationNamespace:"wxu-web-dsr-form-correct-data",appId:"wu-web",deviceClass:b}),e.createElement(w.Z,{regime:_,translationNamespace:"wxu-web-dsr-form-correct-data",experience:"wu"}))}}i.contextType=u.y;const p=i;class m extends e.PureComponent{render(){const{regime:d,subscriptionsEnabled:_,deviceClass:a,isWu:b}=this.props,l=this.context,E=a==="mobile"?a:"desktop";return b?e.createElement(p,{regime:d,deviceClass:a}):e.createElement(e.Fragment,null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctIntroParagraph_twc-web${_?"_subscriptionsEnabled":""}`)),e.createElement("h3",null,l("wxu-web-dsr-form-correct-data","correctUnitsHeading")),e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctUnitsIntroParagraph")),e.createElement("ul",null,e.createElement("li",null,l("wxu-web-dsr-form-correct-data",`correctUnitsStep1_twc-web_${E}`)),e.createElement("li",null,l("wxu-web-dsr-form-correct-data",`correctUnitsStep2_twc-web_${E}`)),a==="mobile"&&e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctUnitsStep3_twc-web_mobile")))),e.createElement("h3",null,l("wxu-web-dsr-form-correct-data","correctLanguage_twc-web")),e.createElement("ul",null,e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctLanguageStep1_twc-web"))),e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctLanguageStep2_twc-web"))),e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctLanguageStep3_twc-web")))),e.createElement("h3",null,l("wxu-web-dsr-form-correct-data","correctWeatherLocationsHeading_twc-web")),e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsDeleteIntroParagraph_twc-web_${E}`)),e.createElement("ul",null,e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsDeleteStep1_twc-web_${E}`))),e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsDeleteStep2_twc-web_${E}`))),a==="mobile"&&e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctWeatherLocationsDeleteStep3_twc-web_mobile")))),e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsSaveIntroParagraph_twc-web_${E}`)),e.createElement("ul",null,e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsSaveStep1_twc-web_${E}`))),e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data",`correctWeatherLocationsSaveStep2_twc-web_${E}`))),E==="desktop"&&e.createElement(e.Fragment,null,e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctWeatherLocationsSaveStep3_twc-web_desktop"))),e.createElement("li",null,e.createElement("p",null,l("wxu-web-dsr-form-correct-data","correctWeatherLocationsSaveStep4_twc-web_desktop"))))),e.createElement(n.Z,{subscriptionsEnabled:_,translationNamespace:"wxu-web-dsr-form-correct-data",appId:"twc-web",deviceClass:E}),e.createElement(w.Z,{regime:d,translationNamespace:"wxu-web-dsr-form-correct-data"}))}}m.contextType=u.y;const r=m},97446:(g,c,t)=>{"use strict";t.d(c,{Z:()=>_});var e=t(2784),u=t(13980),o=t.n(u),w=t(6110),n=t.n(w),i=t(96798),p=t(5435),m=t.n(p),r=t(98703),s=t.n(r);class d extends e.PureComponent{render(){const{text:b,onClick:l,className:E,disableMarginBottom:x,type:B,disabled:h,isTextLink:D,theme:f,...P}=this.props,v=f||(D?"default":"primary");return e.createElement(i.Z,{className:m()(E,{[s().button]:!D,[s().textButton]:D,[s().disabled]:h,[s().secondary]:f==="secondary",[s().disableMarginBottom]:x}),onClick:l,type:B,disabled:h,theme:v,...P},e.createElement("span",null,b))}}d.propTypes={className:o().string,disableMarginBottom:o().bool,disabled:o().bool,href:o().string,ariaLabel:o().string,theme:o().oneOf(["primary","secondary","default"]),fromString:o().string,buttonRef:o().object,type:o().object,other:o().object,isTextLink:o().bool},d.defaultProps={disabled:!1,type:null,other:null};const _=n()(s())(d)},98703:(g,c,t)=>{var e=0,u=t(96030),o=t(71177),w=typeof u=="string"?[[g.id,u,""]]:u;if(c=g.exports=u.locals||{},c._getContent=function(){return w},c._getCss=function(){return""+u},c._insertCss=function(i){return o(w,i)},!1)var n}}]);})();

//# sourceMappingURL=48873.CorrectDataWeb.bfd63b1776f504df005c.js.map