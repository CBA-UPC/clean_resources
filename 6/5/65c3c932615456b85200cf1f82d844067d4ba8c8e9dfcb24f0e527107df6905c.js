(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[23],{425:function(e,t,r){"use strict";r.r(t),r.d(t,"adjustForUTCOffset",(function(){return fe})),r.d(t,"CheckoutPage",(function(){return ge}));var n=r(2),a=r.n(n),o=r(3),c=r.n(o),i=r(37),s=r(21),u="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),d=new Uint8Array(16);ar p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=m=[],g=0;g<256;++g)m.push((g+256).toString(16).substr(1));var h=var y=v=r(22),b=r(1),j=r(67),_=r(53),O=r.n(_); P=x=function e(t,r){if(!P(t)||!P(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var a="[object Object]"===Object.prototype.toString.call(t);if(a!==("[object Object]"===Object.prototype.toString.call(r)))return!1;if(!a&&!n)return!1;var o=Object.keys(t),c=Object.keys(r);if(o.length!==c.length)return!1;for(var i={},s=0;s<o.length;s+=1)i[o[s]]=!0;for(var u=0;u<c.length;u+=1)i[c[u]]=!0;var d=Object.keys(i);if(d.length!==o.length)return!1;var l=t,p=r;return d.every(()},k=function(e){var t=c.a.useRef(e);return c.a.useEffect((function(){t.current=e}),[e]),t.current},S=D=T=c.a.createContext(null);T.displayName="ElementsContext";var N=function(e){var t=e.stripe,r=e.options,n=e.children,a=c.a.useRef(!1),o=c.a.useRef(!0),i=c.a.useMemo((function(){return D(t)}),[t]),s=C(c.a.useState((),2),u=s[0],d=s[1],l=k(t),p=k(r);return null!==l&&(l!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),x(r,p)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===i.tag&&(a.current=!0,d({stripe:i.stripe,elements:i.stripe.elements(r)})),"async"===i.tag&&(a.current=!0,i.stripePromise.then(())),c.a.useEffect((,[]),c.a.useEffect((,[u.stripe]),c.a.createElement(T.Provider,{value:u},n)};N.propTypes={stripe:O.a.any,options:O.a.object};var A=function(e){return c.a.useContext(T),e)};O.a.func.isRequired;var R=function(e){var t=c.a.useRef(e);return c.a.useEffect((,[e]),,U=function(e){if(!P(e))return{};e.paymentRequest;return E(e,["paymentRequest"])},q=I=function(e,t){var r,n="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),a=t?function(e){A("mounts <".concat(n,">"));var t=e.id,r=e.className;return c.a.createElement("div",{id:t,className:r})}:function(t){var r=t.id,a=t.className,o=t.options,i=void 0===o?{}:o,s=t.onBlur,u=void 0===s?q:s,d=t.onFocus,l=void 0===d?q:d,p=t.onReady,f=void 0===p?q:p,m=t.onChange,g=void 0===m?q:m,h=t.onEscape,y=void 0===h?q:h,v=t.onClick,b=void 0===v?q:v,j=A("mounts <".concat(n,">")).elements,_=c.a.useRef(null),O=c.a.useRef(null),w=R(f),E=R(u),C=R(l),P=R(b),k=R(g),S=R(y);c.a.useLayoutEffect(();var D=c.a.useRef(i);return c.a.useEffect((,[i]),c.a.useEffect((,[]),c.a.createElement("div",{id:r,className:a,ref:O})};return a.propTypes={id:O.a.string,className:O.a.string,onChange:O.a.func,onBlur:O.a.func,onFocus:O.a.func,onReady:O.a.func,onClick:O.a.func,options:O.a.object},a.displayName=n,a.__elementType=e,a},M="undefined"==typeof window,z=(I("auBankAccount",M),I("card",M),I("cardNumber",M)),G=I("cardExpiry",M),K=I("cardCvc",M),L=(I("fpxBank",M),I("iban",M),I("idealBank",M),I("paymentRequestButton",M),"https://js.stripe.com/v3"),$=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,B="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Y=null,W=V=F=Promise.resolve().then((),Z=!1;F.catch(();var H,J,Q,X,ee,te,re=r(24),ne=r(71),ae=r(28),oe=r(150),ce=r(144),ie=r(793),se=r(7),ue=r(0);nst pe="pk_live_51J0nx5EK2rQ42H79OYrMSH2UaTxWIIt1Vtpxd4iZNp1GONAezips7CXANoEz7tkQ8ALQCtKTt2F3OaW96pfKJqZZ00JDRKo5Y7"),fe=me=e=>{let{alreadyOwned:t,chargeUser:r,daltonToken:n,returnToMyEevents:a,idempotencyKey:c,product:i,trackEvent:u,gizmoProduct:d,videoMetadata:l,returnUrl:p,updateReturnUrl:f,pagename:m}=e;const[g,h]=Object(o.useState)(null),[j,_]=Object(o.useState)(!1),[O,w]=Object(o.useState)(!1),[E,C]=Object(o.useState)({name:"",address_line1:"",address_city:"",address_state:"",address_zip:""}),P=A("calls useStripe()").stripe,x=A("calls useElements()").elements;Object(o.useEffect)(()=>{t&&h("You have already purchased this event."),i&&i.active||h("Invalid Product.")},[t,i]);const k={style:{base:{color:"#000","font-size":"16px","font-weight":"500","line-height":"40px",fontSmoothing:"antialiased","::placeholder":{"font-size":"16px",color:"#a8a8a8"}}}},S=e=>{t?h("You have already purchased this event."):e.error?h(e.error.message):h(null)};return Object(ue.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!P||!x||g||j||t||O)return;_(!0),h("Please do not refresh this page or go back while we process your payment. This can take a few seconds.");const o=x.getElement(z),s=await P.createToken(o,E);if(s.error)h(s.error.message),_(!1);else{const e=await async function(e){const t={purchases:[{productId:i.sku,lineItemId:`lineitem${y()}`,idempotencyKey:c}],source:e.id};if(n){const e=await Object(re.c)(l.media_id);if(e.length&&e[0].accessAllowed)throw new Error("You have already purchased this event.");const a=await r({purchaseData:t,daltonToken:n}),o=a.payload;if(a.error&&a.error.isBoom)throw new Error("We are experiencing issues currently. Please try again in a moment");const c=(null==o?void 0:o.purchases)&&o.purchases[0],i=c&&!c.error&&!a.error;if(_(!1),i)return o;throw new Error("There was an issue with your card.")}return _(!1),"User not Authorized"}(s.token).catch(e=>{se.a.log("==> Error making payment",e.message),h(e.message),_(!1)});if(e&&(se.a.log("==> PAYMENT COMPLETE",e),h(null),w(!0),p&&p.length>0&&!p.includes("purchased"))){Object(ie.a)(m,p);const t=p.concat("?state=purchased");f(t),u(le({tag_manager_event:"ppv_purchase_success"},((e,t,r)=>{var n;return{currencyCode:e.currency,isLive:t.state===ce.a.LIVE,itemPrice:e.price,league:t.league.name,productTitle:t.name,productType:null===(n=t.type)||void 0===n?void 0:n.toUpperCase(),purchaseTimestamp:Object(v.format)(fe(new Date),"YYYY-MM-DD hh:mm:ss"),receiptID:r.purchases[0].chargeId,screen:"PPV Purchase Form",skuID:t.product.sku}})(d,l,e))),a()}}},className:"atom emailLoginForm",children:[Object(ue.jsx)("div",{className:"card-errors",role:"alert",children:g&&Object(ue.jsx)("p",{children:g})}),H||(H=Object(ue.jsx)("h3",{children:"Payment Information"})),Object(ue.jsxs)("fieldset",{className:"checkout-fieldset",children:[Object(ue.jsx)("input",{type:"text",name:"name",placeholder:"Name",required:!0,onChange:e=>{C(le(le({},E),{},{name:e.target.value}))}}),Object(ue.jsx)(z,{id:"cardNumber",onChange:S,options:k}),Object(ue.jsxs)("div",{className:"card-details",children:[Object(ue.jsx)(G,{id:"expiry",onChange:S,options:k}),Object(ue.jsx)(K,{id:"cvc",onChange:S,options:k})]})]}),J||(J=Object(ue.jsx)("h3",{children:"Billing Information"})),Object(ue.jsxs)("fieldset",{className:"checkout-fieldset",children:[Object(ue.jsx)("input",{type:"text",name:"address",placeholder:"Billing Address",required:!0,onChange:e=>{C(le(le({},E),{},{address_line1:e.target.value}))}}),Object(ue.jsx)("input",{type:"text",name:"city",placeholder:"City",required:!0,onChange:e=>{C(le(le({},E),{},{address_city:e.target.value}))}}),Object(ue.jsx)("input",{type:"text",name:"state",placeholder:"State",required:!0,onChange:e=>{C(le(le({},E),{},{address_state:e.target.value}))}}),Object(ue.jsx)("input",{type:"text",name:"zip",placeholder:"Zip/Postal Code",pattern:"^([0-9]{5}|[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9])$",required:!0,onChange:e=>{C(le(le({},E),{},{address_zip:e.target.value}))}})]}),Object(ue.jsx)("footer",{children:Object(ue.jsxs)("p",{children:["By submitting this form, you agree to Bleacher Report’s"," ",Object(ue.jsx)("a",{href:b.H.privacy(),children:"Privacy Policy"})," and"," ",Q||(Q=Object(ue.jsx)("a",{href:"/pages/terms",children:"Terms of Use"})),"."]})}),Object(ue.jsx)(s.Button,{type:"submit",disabled:!P||g||t||O,loading:j,children:"Submit Payment"})]})},ge=e=>{let{entitlements:t,getDaltonAuthToken:r,getDaltonEmails:n,getUserEntitlements:a,chargeUser:c,daltonEmails:i,daltonToken:u,returnToMyEevents:d,liveVideoMetadata:l,gizmoProduct:p,trackEvent:f,returnUrl:m,updateReturnUrl:g,pagename:h}=e;const v=y(),b=Object.keys(l),j=b.length&&b[0],_=l[j],O=t&&t.length&&t[0].accessAllowed;if(!j)throw new Error("Invalid live event id or missing metadata, please try again later.");Object(o.useEffect},[f]),Object(o.useEffect},[r]),Object(o.useEffect)(()=>{u&&(a(u,_.media_id),n(u))},[u,n,a,_.media_id]);const w=void 0===i,E=(null==i?void 0:i.length)>0,C=!!w&&(X||(X=Object(ue.jsx)(s.SVG,{type:"icon",target:"spinner"},"icon")));return Object(ue.jsxs)("section",{className:"page nr-checkoutPage",children:[ee||(ee=Object(ue.jsx)("h3",{children:"Event Purchase Details"})),Object(ue.jsx)("h2",{children:_.name}),C,!w&&E&&Object(ue.jsx)(N,{stripe:pe,children:Object(ue.jsx)(me,{chargeUser:c,daltonToken:u,returnToMyEevents:d,idempotencyKey:v,product:_.product,alreadyOwned:O,gizmoProduct:p,videoMetadata:_,trackEvent:f,returnUrl:m,updateReturnUrl:g,pagename:h})}),!w&&!E&&(te||(te=Object(ue.jsx)("div",{className:"no-email",children:Object(ue.jsxs)("p",{children:["An email address is required to purchase this event. Please go"," ",Object(ue.jsx)("a",{href:"/accounts/edit",children:"here"})," to add your email address to your profile, and try again in a few minutes."]})})))]})};t.default=Object(i.b)((function(e){return{pagename:e.page.id,userCountry:e.user.country,daltonToken:e.user.daltonToken,daltonEmails:e.user.daltonEmails,returnUrl:e.page.returnUrl,liveVideoMetadata:e.stub.live_video_metadata,gizmoProduct:e.stub.gizmoProduct,entitlements:e.user.entitlements,isLoggedInUser:Object(oe.a)(e)}}),(function(e){return{chargeUser:t=>{let{purchaseData:r,daltonToken:n}=t;return e(ne.e({purchaseData:r,daltonToken:n}))},getDaltonAuthToke),getDaltonEmails:t=>e(ne.h(t)),getUserEntitlement),returnToMyEevent},trackEven),updateReturnUr}}}))(ge)},793:function(e,t,r){"use strict";r.d(t,"a"}));var n=r(57);function a(e,t){return!!window.gtag&&(window.gtag("event","conversion",{send_to:t,event_callbac}}),!1)}function o(e){window.gtag&&window.gtag("event","conversion",{allow_custom_scripts:!0,send_to:e})}function c(e){const{reportConversion:t,trackingPixel:r}=e;!function(e){let{standard:t,unique:r}=e;window.gtag&&(o(t.id),Object(n.b)(t.src),o(r.id),Object(n.b)(r.src))}(r),t&&(a(t.url,t.standardId),a(t.url,t.uniqueId))}const i=(e,t)=>{switch(e){case"signup":c({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac002+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac003+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}},reportConversion:{standardId:"AW-981403438/8bGXCIvl-_0CEK6O_NMD",uniqueId:"AW-981403438/6GBACK-n9_0CEK6O_NMD",url:t}});case"checkout":c({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac000+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac001+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}},reportConversion:{standardId:"AW-981403438/-ACRCN2jz_0CEK6O_NMD",uniqueId:"AW-981403438/sGvdCKinz_0CEK6O_NMD",url:t}});case"aew-full-gear-2021-ppv":case"liveEvents":c({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac0+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac00+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}}}),o("AW-981403438/S0vYCPidz_0CEK6O_NMD"),o("AW-981403438/r75-COTw-_0CEK6O_NMD")}}}}]);
//# sourceMappingURL=https://static-assets.bleacherreport.net/js/checkoutPage-9866c888.js.map