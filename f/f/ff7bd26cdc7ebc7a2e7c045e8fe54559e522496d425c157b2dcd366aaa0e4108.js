"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7654],{84727:function(e,t,a){var n=a(57437),l=a(2265),s=a(20446),r=a.n(s),o=a(80332),i=a(75474),c=a(53714);let ComponentItem=e=>{let{selectedComponents:t,item:a,handleChange:s}=e,{language:m,site:d}=(0,l.useContext)(o.CustomContext),u=(0,c.Z)(d.brandColor),h=(0,i.Z)(a.nameTranslation,m,a.name);return(0,n.jsx)("div",{className:"flex items-center justify-between w-full h-8 select-components select-affected",children:(0,n.jsxs)("div",{className:"flex items-center flex-grow",children:[(0,n.jsx)("input",{id:a.id,name:a.id,type:"checkbox",checked:t.includes(a.id),onChange:s,className:"w-5 h-5 appearance-none cursor-pointer form-checkbox ".concat(r()({"form-checkbox-brand":"dark"===u,"form-checkbox-black":"light"===u}))}),(0,n.jsx)("label",{className:"pl-3 leading-none cursor-pointer rtl:pr-3",htmlFor:a.id,children:h})]})},a.id)},ComponentGroup=e=>{let{group:t,selectedComponents:a,handleChange:s}=e,{language:r}=(0,l.useContext)(o.CustomContext),c=(0,i.Z)(t.nameTranslation,r,t.name);return(0,n.jsxs)("div",{className:"mt-2",children:[(0,n.jsx)("p",{className:"mt-2 font-medium",children:c}),(0,n.jsx)("div",{className:"pt-2 pl-3 rtl:pr-3",children:t.children.map((e,t)=>e.children.length>0?(0,n.jsx)(ComponentGroup,{selectedComponents:a,group:e,handleChange:s},t):(0,n.jsx)("div",{className:"-ml-3",children:(0,n.jsx)(ComponentItem,{selectedComponents:a,item:e,handleChange:s},t)}))})]})};t.Z=e=>{let{components:t,selectedComponents:a,handleChange:l}=e;return(0,n.jsx)("div",{className:"flex flex-col my-1",children:(0,n.jsx)("div",{className:"w-full",children:t.sort((e,t)=>e.order-t.order).map((e,t)=>e.children.sort((e,t)=>e.order-t.order).length>0?(0,n.jsx)(ComponentGroup,{group:e,selectedComponents:a,handleChange:l},t):(0,n.jsx)(ComponentItem,{selectedComponents:a,item:e,handleChange:l},t))})})}},27654:function(e,t,a){var n=a(57437),l=a(2265),s=a(20446),r=a.n(s),o=a(67768),i=a(19809),c=a(84727),m=a(95382),d=a(99843),u=a(80332),h=a(75474),p=a(53714),x=a(6613),b=a(98954),f=a(97466),g=a(24033);t.Z=e=>{let{activeItem:t}=e,{language:a,site:s,headers:k,url:j}=(0,l.useContext)(u.CustomContext),C=(0,b.Z)(a),w=(0,p.Z)(s.brandColor),[v,N]=(0,l.useState)(""),[y,S]=(0,l.useState)(""),[Z,_]=(0,l.useState)(s.components.map(e=>e.id)),[E,T]=(0,l.useState)(!t),[A,z]=(0,l.useState)(!1),[F,I]=(0,l.useState)(""),[M,G]=(0,l.useState)(!1),{theme:L}=(0,i.useSiteTheme)(),U=(0,g.useRouter)(),B=(0,h.Z)(null==s?void 0:s.htmlBelowSubscribeTranslation,a,null==s?void 0:s.htmlBelowSubscribe),D=(0,x.Z)(),handleSubmit=async e=>{if(e.preventDefault(),!y)return z(!0),I(C("emailError")),!1;if(!(0,f.Z)(y))return z(!0),I(C("invalidEmailError")),!1;G(!0);try{let e=await D();await (0,d.Ld)({url:j,webhook:v,webhookEmail:y,all:E,components:t?null:Z,incidentId:(null==t?void 0:t.started)?t.id:null,maintenanceId:(null==t?void 0:t.start)?t.id:null,language:a.languageCode,headers:{"Content-Type":"application/json"},hcaptchaToken:e}),U.push("/subscribe/webhook/done")}catch(t){G(!1),z(!0),console.log(t);let e=t.graphQLErrors.map(e=>e.message);return I(e),!1}},handleAllChange=(e,t)=>{t?(T(!0),_(s.components.map(e=>e.id))):(T(!1),_([]))};return(0,n.jsxs)("div",{className:"max-w-xl mx-auto mt-8 relative z-10 dark:border-gray-900 border-gray-100 md:border bg-white md:shadow-md md:p-12 subscribe-by-webhook-page md:rounded-xl dark:bg-gray-980 md:dark:bg-gray-950 ".concat(r()({"md:-mt-32":"stormtrooper"===s.skin||"panda"===s.skin})),children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1 text-black dark:text-white",children:[(0,n.jsx)(m.Z,{className:"text-gray-900 fill-current w-14 h-14 md:w-20 md:h-20 dark:text-gray-300"}),t&&(0,n.jsx)("p",{children:C("getNoticeUpdates")}),(0,n.jsx)("h3",{className:"text-3xl font-bold text-center md:text-4xl",children:t?t.name:C("getStatusUpdates")})]}),(0,n.jsxs)("form",{className:"flex flex-col items-start justify-start max-w-lg mx-auto mt-10 text-sm webhook-subscribe-form",onSubmit:handleSubmit,children:[A&&(0,n.jsx)("div",{children:F}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("span",{className:"form-label",children:C("webhookUrl")}),(0,n.jsx)("input",{autoComplete:"off",name:"webhook",value:v,className:"w-full form-input email-subscribe-form__input ".concat(r()({"form-input-brand":"dark"===w&&"dark"!==L,"form-input-black":"light"===w})),placeholder:"https://domain.com/endpoint",onChange:e=>{let{value:t}=e.target;N(t),z(!1)}})]}),(0,n.jsxs)("p",{className:"mt-1 text-sm text-gray-700 dark:text-gray-500",children:[C("webhookDescription")," ",(0,n.jsx)("a",{className:"font-medium focus:outline-none underline ".concat(r()({"text-brand":"dark"===w&&"light"===L,"text-black":"light"===w})),href:"https://instatus.com/help/webhooks",children:C("webhookFormat")})]}),A&&(0,n.jsx)("div",{children:F}),(0,n.jsxs)("div",{className:"w-full mt-6",children:[(0,n.jsx)("span",{className:"form-label",children:C("emailAddress")}),(0,n.jsx)("input",{autoComplete:"off",name:"email",value:y,className:"w-full form-input email-subscribe-form__input ".concat(r()({"form-input-brand":"dark"===w,"form-input-black":"light"===w})),placeholder:C("emailExample"),onChange:e=>{let{value:t}=e.target;S(t),z(!1)}}),(0,n.jsx)("p",{className:"mt-1 text-sm text-gray-700 dark:text-gray-500",children:C("webhookSendEmail")})]}),(0,n.jsx)("div",{className:"block my-6 text-black dark:text-white",children:!t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{htmlFor:"all",className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",id:"all",className:"w-5 h-5 form-radio focus:outline-none ".concat(r()({"form-radio-brand":"dark"===w,"form-radio-black":"light"===w})),name:"components",value:"all",checked:E,onChange:e=>handleAllChange(e,!0)}),(0,n.jsx)("span",{className:"ml-2 cursor-pointer rtl:mr-2",children:C("toAllComponents")})]}),(0,n.jsxs)("label",{htmlFor:"some",className:"inline-flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",id:"some",className:"block w-5 h-5 form-radio ".concat(r()({"form-radio-brand":"dark"===w,"form-radio-black":"light"===w})),name:"components",value:"some",checked:!E,onChange:e=>handleAllChange(e,!1)}),(0,n.jsx)("span",{className:"ml-2 cursor-pointer rtl:mr-2",children:C("toCertainComponents")})]}),(0,n.jsx)("div",{className:r()({hidden:E,"flex flex-col":!E}),children:(0,n.jsx)(c.Z,{selectedComponents:Z,components:s.components,handleChange:e=>{let{id:t,checked:a}=e.target;a&&!Z.includes(t)?_([...Z,t]):!a&&Z.includes(t)&&_(Z.filter(e=>e!==t))}})})]})}),(0,n.jsx)("button",{type:"submit","aria-label":"Subscribe",className:"webhookemail-subscribe-form__submit text-white p-4 w-full mt-4 font-medium rounded-lg focus:outline-none ".concat(r()({"bg-black":"light"===w,"bg-brand":"dark"===w})),children:M?C("working"):C("subscribe")}),(0,n.jsx)(o.Z,{className:"pt-10 custom-html-subscribe-page",value:B})]})]})}},6613:function(e,t,a){a.d(t,{Z:function(){return use_hcaptcha}});var n=a(2265),use_observable=e=>{let[t,a]=(0,n.useState)(e),l=(0,n.useMemo)(()=>[],[]),s=(0,n.useMemo)(()=>e=>{a(e),l.forEach(t=>t(e))},[l]),r=(0,n.useMemo)(()=>function(e){let a=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return l.push(e),a&&e(t),()=>{l.splice(l.indexOf(e),1)}},[t,l]),o=(0,n.useMemo)(()=>function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return new Promise(a=>{let n=r(t=>{(!e||e(t))&&(a(t),n())},t)})},[r]);return{value:t,next:s,subscribe:r,wait:o}};let l=globalThis.window;var use_hcaptcha=()=>{let[e,t]=(0,n.useState)(!1),{next:a,wait:s}=use_observable("");(0,n.useMemo)(()=>{if(l){let e=l.document.createElement("script");e.src="https://js.hcaptcha.com/1/api.js",e.async=!0,e.defer=!0,e.onload=()=>t(!0),l.document.head.appendChild(e)}},[]),(0,n.useEffect)(()=>{if(!e)return;let t=l.document.createElement("div");l.document.body.appendChild(t);let n=globalThis.hcaptcha.render(t,{sitekey:"b31f0eef-6783-4d15-991e-90be691a6f01",size:"invisible"});return a(n),()=>{try{globalThis.hcaptcha.remove(n)}catch(e){}a(""),t.remove()}},[e,a]);let r=(0,n.useCallback)(async()=>{let e=await s(e=>!!e),t=(await globalThis.hcaptcha.execute(e,{async:!0})).response;if(!t)throw Error("No response");return t},[s]);return r}},97466:function(e,t){t.Z=e=>/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(e).toLowerCase())}}]);=(await globalThis.hcaptcha.execute(e,{async:!0})).response;if(!t)throw Error("No response");return t},[s]);return r}},97466:function(e,t){"use strict";t.Z=e=>/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(e).toLowerCase())}},function(e){e.O(0,[8218,621,502,7587,2971,2472,1744],function(){return e(e.s=48274)}),_N_E=e.O()}]);