import{fetchHtml as L,domRemoveChildren as $,fetchJson as A,forceRepaintSVG as P,resolve,addParams as p,isFunction as u}from"../base/croco.js";import{initNotification as D}from"../base/notifications.js";import{loader as o}from"../base/loader.js";import{setCustomLoader as C}from"../base/forms.js";import{EVENTS as _,sendEvent as I}from"../base/event-tracker.js";let F=null;async function U(e,url,context,t,o){if(url){e.preventDefault();const i=document.querySelector("#signin_signup-context").value;const l=await A(i?p(url,{context:i}):url);if(l){history.pushState({},null,l.redirectUrl);renderAuthForm(l,context,t,o)}}}function q(t){if(t&&t.setLoader){t.setLoader(true)}else{o.begin()}}function R(t){if(t&&t.setLoader){t.setLoader(false)}else{o.done()}}export async function initSocialLogin(t){if(t&&t.querySelector(".js-authentication-social-login")){const{initLoginProviders:o}=await import("../components/social-login.js");o&&o()}}export async function initAuthForm(o,context,i,l){const{$content:p,$blocks:u,$background:m}=i;const{formsInit:t,addBeforeSubmitCallback:g,addSubmitCallback:h}=await import("../base/forms.js");const k=context==="login";t(o);await initSocialLogin(document);if(o.querySelector(".js-field-password")){const{fieldPasswordInit:v}=await import("../components/field-password.js");v(o)}if(o.querySelector(".js-field-date")){const{fieldDateInit:L}=await import("../modules/field-date.js");L(o)}if(o.querySelector(".js-field-phone")){const{fieldPhoneInit:$}=await import("../modules/field-phone.js");$(o)}if(o.querySelector(".js-field-mask")){const{fieldMaskInit:P}=await import("../modules/field-mask.js");P(o)}if(o.querySelector(".js-field-parent")){const{fieldWithParentInit:q}=await import("../modules/field-with-parent.js");q(o)}const S=url=>{const t=o.elements["email"];const email=t&&t.value;const formData=new FormData;email&&formData.append("email",email);A(url,{method:"POST",body:formData}).then(data=>{l&&l.nextStep&&l.nextStep(data)})};const j=o.querySelector(".js-continue-without-account");if(j){if(j.dataset.url){j.addEventListener("click",()=>{S(j.dataset.url)})}else if(l&&l.nextStep){j.addEventListener("click",()=>{l.nextStep()})}}if(l&&l.setLoader){C(o,t=>{l.setLoader(t)})}[...o.querySelectorAll(".js-helper-link")].forEach(t=>{t.addEventListener("click",e=>U(e,t.href,context,i,l))});g(o,()=>{F=Date.now()});h(o,(response={},e)=>{const{nextStep:t,notification:o}=response;if(t){e.preventDefault();renderAuthForm(t,context,{$content:p,$blocks:u,$background:m},l);if(k){history.pushState({},null,t.redirectUrl)}}else if(response&&response.redirectPostUrl){e.preventDefault();S(response.redirectPostUrl)}else if(response&&response.valid){e.preventDefault();const t=l?.nextStep;if(t||response.redirectUrl){I(_.SPEED_INDICATOR,{event_data:{area:window?.pageViewData?.page_data?.category,action:response.currentStep==="signin"?"sign_in":"sign_up",value:Date.now()-F}})}t&&t(response)}if(o){D({metadata:{},content:{description:o,icon:"message",timeout:3e3}})}})}const V=(t,context,{$content:o,$blocks:i,$background:l},p)=>{const u=t.querySelector(".js-form");if(u){if(p&&p.onFormRender){p.onFormRender(i)}initAuthForm(u,context,{$content:o,$blocks:i,$background:l},p)}else{initSocialLogin(t)}};export async function renderAuthForm({content,updatedContext:t},context,{$content:o,$blocks:i,$background:l},p){if(t){if(!resolve("event",t)){const data=resolve("pageViewData",window);if(data&&data!==null){data["page_data"]={...data["page_data"],...t};I("page_view",data)}}else{const[event,u]=resolve(["event","event_data"],t);if(event&&u){I(event,{event_data:u})}}}q(p);if(content){if(l&&content.image&&content.image.desktopUrl){l.style=`--background: url(${content.image.desktopUrl})`}const{render:m}=await import("../vendors/lit-html/lit-html.js");const{tplContent:g}=await import("../templates/authentication/helpers.tpl.js");const h=url=>{if(url){q(p);A(url).then(async data=>{renderAuthForm(data,context,{$content:o,$blocks:i,$background:l},p)})}};m(g(content,context,p,h),o);P(o);if(content.blocks){$(i);const k=content.blocks.slice(0,1).shift();const S=content.blocks.slice(1);const j=await L(k);i.appendChild(j);V(j,context,{$content:o,$blocks:i,$background:l},p);R(p);if(S.length>0){let t=await Promise.all(S.map(async url=>await L(url)));const v=document.createElement("div");t.forEach(t=>{if(t){t.classList.add("l-vmargin--xxlarge");v.appendChild(t);V(t,context,{$content:o,$blocks:i,$background:l},p)}});v.classList="anim--fade-in--fast";i.appendChild(v)}}}}const m=async(url,o,t,context,i)=>{const data=await A(url);const l={$content:t.querySelector(".js-content-wrapper"),$blocks:t.querySelector(".js-blocks-wrapper")};renderAuthForm(data,context,l,{setLoader:t=>{o.setLoading(t)},...i})};export const openLoginPopinRefit=async options=>{const{openPopin:t}=await import("../base/popin-refit.js");const{url,context,callbacks:i={},openCallback:o,loadContents:l,...p}=options;t({instanceId:"popin-login-panel",forceReload:true,forceRender:true,options:{hasKeyboard:true,noPadding:true},...p,loadContents:async t=>{const data=u(l)&&await l(t)||{};const{tplLoginPanel:o}=await import("../templates/authentication/login-panel.tpl.js");return{...data,contents:o({header:data.contents})}},refreshCallback:async(t,o)=>{await m(url,t,o.$viewContent,context,i)},openCallback:()=>{u(o)&&o();const t=resolve("pageViewData.page_data.name",window);I("login_panel",{event_data:{area:t,action:"open"}})}})};export const getAuthUrl=t=>{const o=document.querySelector(".js-myaccount-link");const i=resolve("dataset.myaccountUrl",o);return t?p(i,{original:t}):i};export const openLoginPanelWithRefresh=async({context,authUrl:t})=>{if(!t){t=getAuthUrl()}t&&openLoginPopinRefit({url:context?p(t,{context:context}):t,context:context,callbacks:{nextStep:async()=>{const{getPopinByInstanceId:t}=await import("../base/popin-refit.js");const o=t("popin-login-panel");o&&o.setLoading(true);window.location.reload()}}})};export function initLoginPanel(context){[...document.querySelectorAll(".js-login-panel")].forEach(t=>{t.classList.remove("loading-skeleton");t.addEventListener("click",async e=>{e.preventDefault();openLoginPopinRefit({url:t.href,context:context})})})}export async function exclusivityFlagInit(t=document){const{getLocalData:o}=await import("../base/config.js");const i=await o("isLogged");const l=t.querySelectorAll(".js-update-exclusivity-flag");if(i){[...l].forEach(t=>{const o=t.querySelector("use");if(o){const href=o.getAttribute("xlink:href");href&&o.setAttribute("xlink:href",href.replace("icon-lock-exclusive","icon-unlock-exclusive"))}})}}