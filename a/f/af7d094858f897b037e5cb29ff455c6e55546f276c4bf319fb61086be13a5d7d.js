import{delegate as t,debug,domRemoveChildren as i,fetchHtml as o,forceRepaintSVG as l,lockScroll as h,objDataset as I,isElement as p,isFunction as v,noop as k,getPrefixedDataset as u,arrayMove as _,uuidv4 as K,fetchJson as V,createFragmentFromHTML as X,isString as m}from"./croco.js";import{mediaQuery as j,popinConfs as $,LOGGERS as Y,MODULE_ALREADY_INITIALIZED as Z,INVALID_PARAMETER as L,noElement as C,POPIN_TYPES as D,POPIN_ANIMATION as tt,getSVGPath as et,getLocalData as nt}from"./config.js";import{loader as F}from"./loader.js";let g=false;const S=Y.POPIN;const P="popin";const it=5e3;const T=1500;const stack=[];const O=".js-popin-wrapper";const A=".js-popin-close";const q="js-ada-loop-start";const B="js-ada-loop-stop";const U="js-ada-close-generic";const N="is-hidden";const M="is-active";const H="is-opened";const J="is-loading";const st=et();const at=(t="")=>{return`<div class="popin-wrapper js-popin-wrapper is-hidden">
        <span class="js-ada-loop-start" tabindex="0"></span>
        <div class="js-popin popin" role="dialog" aria-modal="true">
            <div class="js-popin-loader"></div>
            <div class="js-popin-content popin-content"></div>
            <button class="l-popin-close js-popin-close ${t}">
                <svg role="presentation" class="icon-svg icon-close" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${st}/critical.svg#icon-close"></use>
                </svg>
                <span class="${U} visually-hidden"></span>
            </button>
        </div>
        <span class="js-ada-loop-stop" tabindex="0"></span>
    </div>`};function R(from,to){_(stack,from,to);for(let t=0,i=stack.length;t<i;t++){stack[t].stackIndex=t}}function G(t){stack.forEach(;R(t.stackIndex,stack.length-1);t.$container.classList.add(M)}function ot(t){t.$container.classList.remove(M);R(t.stackIndex,0);const i=stack.findLast(;!!i&&G(i)}class lt{constructor(t,{instanceId:i=null,content=null,url=null,tplFn:o=null,tplPath:l=null,tplData:h={},tplDataUrl:p=null,classname:u="",closeClassName:m="",initCallback:$=null,openCallback:v=null,closeCallback:k=null,adaClose:L="",btnSource:C=null,type=D.mediumPanel,options={},animation=null}){const g=document.createElement("div");g.innerHTML=at(m);const S=g.querySelector("."+U);S&&nt("wordings.ada.POPIN.CLOSE_GENERIC").then(;let classList=Array.isArray(u)?u:u.split(" ");if(type){classList=[...classList,...type.split(" ")]}animation&&classList.push(animation);this.$container=g.querySelector(O);this.$adaClose=this.$container.querySelector(A+" .visually-hidden");this.$adaStart=this.$container.querySelector("."+q);this.$adaStop=this.$container.querySelector("."+B);this.$loader=this.$container.querySelector(".js-popin-loader");this.$content=this.$container.querySelector(".js-popin-content");this.$firstButton=null;this.$lastButton=null;this.stackIndex=t;this.timer=null;this.leaveTimer=null;this.opened=false;this.instanceId=i;this.content=null;this.url=null;this.tplFn=null;this.tplPath=null;this.tplData={};this.tplDataUrl=null;this.isInitialized=false;this.slideAnimationDisabled=animation===tt.noSlide;this.isFloatable=type===D.floatable&&j.desktopOnly.matches;this.isClosable=!options.isNotClosable;this.lockScrollOnOpen=!options.noLockScrollOnOpen&&!this.isFloatable;this.noAda=options.noAda;this.closeOnLeave=options.closeOnLeave;this.retainScrollLockState=j.desktopOnly.matches&&options.retainDesktopScrollLockState;if(this.isFloatable){this.$container.querySelector(A).classList.add(N)}this.setParams({content:content,url:url,tplFn:o,tplPath:l,tplData:h,tplDataUrl:p,initCallback:$,openCallback:v,closeCallback:k,adaClose:L,btnSource:C});F.setContainer(this.$loader);this.$container.classList.add(...classList.filter();document.querySelector(".js-popin-container").appendChild(this.$container);this.bindEvents();I(this.$container,P,this)}setParams({content,url,tplFn:t,tplPath:i,tplData:o,tplDataUrl:l,initCallback:h,openCallback:p,closeCallback:u,adaClose:m,btnSource:$}){this.$btnSource=$;this.initCallback=v(h)?h.bind(this):k;this.openCallback=v(p)?p.bind(this):k;this.closeCallback=v(u)?u.bind(this):k;if(m!==""){this.$adaClose.innerHTML=m}this.setContent({content:content,url:url,tplFn:t,tplPath:i,tplData:o,tplDataUrl:l})}bindEvents(){this.$adaStart.addEventListener("focus",this.onFocusAda.bind(this));this.$adaStop.addEventListener("focus",this.onFocusAda.bind(this));if(this.isClosable){t(this.$container,A,"click",this.close.bind(this));this.$container.addEventListener("pointerdown",this.onOverlayClick.bind(this))}else{this.$container.querySelector(A).classList.add(N)}if(this.closeOnLeave){this.$content.addEventListener("mouseenter",this.onMouseEnter.bind(this));this.$content.addEventListener("mouseleave",this.onMouseLeave.bind(this))}}handleAdaFocus(){this.$buttons=this.$container.querySelectorAll(`a:not(.${N}), button:not(.${N}), input:not(.${N})`);if(this.$buttons.length){this.$firstButton=this.$buttons[0];this.$lastButton=this.$buttons[this.$buttons.length-1];this.$firstButton.focus()}}setArialLabelledBy(){const heading=this.$container.querySelector('[role="heading"]');if(heading){heading.id="dialogName";this.$container.querySelector(".popin").setAttribute("aria-labelledby",heading.id)}}setContent({content,url,tplFn:t,tplPath:i,tplData:o,tplDataUrl:l,callbacks:h}){content&&(this.content=content);url&&(this.url=url);if(t){this.tplFn=v(t)||m(t)&&m(i)?t:null}i&&(this.tplPath=i);o&&(this.tplData=o);l&&(this.tplDataUrl=l);h&&Object.keys(h).forEach(key=>{if(v(key)){this[key]=h[key].bind(this)}})}async resolveTplFn(resolve){if(m(this.tplFn)&&m(this.tplPath)){const t=await import(this.tplPath);const i=t&&t[this.tplFn];if(v(i)){const content=await i({...this.tplData,closePopin:this.close.bind(this)});this.setLoading(false);resolve({content:content,mode:"template"})}else{debug("error",S,L)}}else if(v(this.tplFn)){this.setLoading(false);resolve({content:this.tplFn(this.tplData),mode:"template"})}else{debug("error",S,L)}}fetchContent(){return new Promise((resolve,reject)=>{if(this.url){this.setLoading(true);o(this.url).then(t=>{this.setLoading(false);resolve({content:t.children[0],mode:"url"})})}else if(this.content){if(!p(this.content)){this.content=X(this.content)}resolve({content:this.content,mode:"content"})}else if(this.tplFn){this.setLoading(true);import("../vendors/lit-html/lit-html.js").then(()=>{if(this.tplDataUrl){V(this.tplDataUrl).then(data=>{this.tplData={...this.tplData,...data};this.resolveTplFn(resolve)})}else if(Object.keys(this.tplData).length){this.resolveTplFn(resolve)}else{this.setLoading(false);reject()}})}else{reject()}})}updateContent(refresh=false){return this.fetchContent().then(async({content,mode})=>{switch(mode){case"url":case"content":if(!this.$content.contains(content)){const t=document.adoptNode(content);i(this.$content);this.$content.appendChild(t)}break;case"template":await import("./template-helpers.js").then(({renderWithReset:t})=>{t(content,this.$content,{},refresh)});break}l(this.$content)}).catch(()=>{debug("warn",S,`[${this.instanceId}]`,"Unable to resolve content",this.content,this.url,this.tplFn,this.tplData)})}async open({updateContent:t=true,awaitInit:i=false}={}){clearTimeout(this.timer);G(this);this.$container.classList.remove(N);this.opened=true;setTimeout(()=>{if(this.lockScrollOnOpen){if(this.retainScrollLockState){this.previousScrollLockState=h.isLocking()}if(j.mobileAndTablet.matches&&!this.$container.classList.contains("popin--no-anim")){const t=this.$container.querySelector(".popin");t&&h.lockAfterTransition(this.slideAnimationDisabled?this.$container:t)}else{h.lock()}}this.$container.classList.add(H)},0);if(i){this.setLoading(true)}else{if(t){await this.updateContent().finally(this.injectContent.bind(this))}else{this.openCallback()}if(this.isFloatable&&this.$btnSource){const{initFloatablePanel:o}=await import("../modules/floatable-panel.js");o(this.$container,this.$btnSource)}}}injectContent(){if(j.desktopOnly.matches&&this.closeOnLeave){this.startLeaveTimer(it)}!this.noAda&&this.handleAdaFocus();this.setArialLabelledBy();if(!this.isInitialized){this.initCallback();this.isInitialized=true}this.openCallback()}close(t){let opened=this.opened;clearTimeout(this.leaveTimer);clearTimeout(this.timer);this.setLoading(false);this.$container.classList.remove(H);this.opened=false;this.timer=setTimeout(400);ot(this);if(stack.filter(.length<1){this.lockScrollOnOpen&&!this.previousScrollLockState&&h.unlock()}opened&&this.closeCallback(t);if(this.$btnSource){this.$btnSource.focus()}}etLoading(t){if(t){this.$container.classList.add(J);F.begin(this.$loader)}else{this.$container.classList.remove(J);F.done(this.$loader)}}startLeaveTimer(delay=T){clearTimeout(this.leaveTimer);this.leaveTimer=setTimeout(this.close.bind(this),delay)}onOverlayClick(e){if(e.target===e.currentTarget){const t=e=>{if(e.target===e.currentTarget){this.close()}this.$container.removeEventListener("pointerup",t,false)};this.$container.addEventListener("pointerup",t,false)}}FocusAda(e){if(e.target.classList.contains(q)){this.$lastButton.focus()}if(e.target.classList.contains(B)){this.$firstButton.focus()}}}export function getParentPopin(t){let i=null;const o=t.closest(O);if(o){i=I(o,P)}return i}export xport function build(options){if(!options.instanceId){options.instanceId=options.contentId||K()}if($[options.instanceId]){Object.assign(options,$[options.instanceId])}if(options.contentId&&!options.content){let t=document.querySelector(`#${options.contentId}`);if(p(t)){options.content=t}else{debug("warn",S,`[build:${options.instanceId}]`,C(`#${options.contentId}`))}}let t=getPopinById(options.instanceId);if(!t){t=new lt(stack.length,options);stack.push(t)}else{t.setParams(options)}return t}function W(t){let data=u(t,"popin",true);data.initCallback=I(t,"initCallback")||null;data.openCallback=I(t,"openCallback")||null;data.closeCallback=I(t,"closeCallback")||null;data.tplFn=I(t,"popinTplFn")||null;const i=I(t,"popinTplData");data.tplData=i?JSON.parse(i):{};data.type=data.type?D[data.type]:null;data.btnSource=t;if(data.awaitInit){data.awaitInit=JSON.parse(data.awaitInit)}return data}export function openPopin(t){if(p(t)){const data=W(t);const i=build(data);if(i){if(data.open){!i.opened&&i.open({awaitInit:data.awaitInit})}else{i.toggle()}}}else{debug("warn",S,C(".js-popin-btn"))}}function ct(e){e.preventDefault();openPopin(e.delegateTarget)}function rt(){t(document.body,".js-popin-btn","click",ct)}export function popinInit(){if(g){debug("error",S,Z);return}rt();g=true}export function initDidComplete(t){const i=document.querySelectorAll(`.js-popin-btn[data-popin-instance-id="${t}"][data-popin-await-init="true"]`);for(let l of i){l.setAttribute("data-popin-await-init","false")}const o=getPopinById(t);if(o){const h=W(o.$btnSource);o.setParams(h);o.updateContent().finally(}}