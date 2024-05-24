/* juxtapose - v1.2.2 - 2020-09-03
 * Copyright (c) 2020 Alex Duner and Northwestern University Knight Lab
 */
(function(document,window){var juxtapose={sliders:[],OPTIMIZATION_ACCEPTED:1,OPTIMIZATION_WAS_CONSTRAINED:2};var flickr_key="d90fc2d1f4acc584e08b8eaea5bf4d6c";var FLICKR_SIZE_PREFERENCES=["Large","Medium"];function Graphic(properties,slider){var self=this;this.image=new Image;this.loaded=false;this.image.onload=function(){self.loaded=true;slider._onLoaded()};this.image.src=properties.src;this.image.alt=properties.alt||"";this.label=properties.label||false;this.credit=properties.credit||false}function FlickrGraphic(properties,slider){var self=this;this.image=new Image;this.loaded=false;this.image.onload=function(){self.loaded=true;slider._onLoaded()};this.flickrID=this.getFlickrID(properties.src);this.callFlickrAPI(this.flickrID,self);this.label=properties.label||false;this.credit=properties.credit||false}FlickrGraphic.prototype={getFlickrID:function(url){if(url.match(/flic.kr\/.+/i)){var encoded=url.split("/").slice(-1)[0];return base58Decode(encoded)}var idx=url.indexOf("flickr.com/photos/");var pos=idx+"flickr.com/photos/".length;var photo_info=url.substr(pos);if(photo_info.indexOf("/")==-1)return null;if(photo_info.indexOf("/")===0)photo_info=photo_info.substr(1);id=photo_info.split("/")[1];return id},callFlickrAPI:function(id,self){var url="https://api.flickr.com/services/rest/?method=flickr.photos.getSizes"+"&api_key="+flickr_key+"&photo_id="+id+"&format=json&nojsoncallback=1";var request=new XMLHttpRequest;request.open("GET",url,true);request.onload=function(){if(request.status>=200&&request.status<400){data=JSON.parse(request.responseText);var flickr_url=self.bestFlickrUrl(data.sizes.size);self.setFlickrImage(flickr_url)}else{console.error("There was an error getting the picture from Flickr")}};request.onerror=function(){console.error("There was an error getting the picture from Flickr")};request.send()},setFlickrImage:function(src){this.image.src=src},bestFlickrUrl:function(ary){var dict={};for(var i=0;i<ary.length;i++){dict[ary[i].label]=ary[i].source}for(var j=0;j<FLICKR_SIZE_PREFERENCES.length;j++){if(FLICKR_SIZE_PREFERENCES[j]in dict){return dict[FLICKR_SIZE_PREFERENCES[j]]}}return ary[0].source}};function getNaturalDimensions(DOMelement){if(DOMelement.naturalWidth&&DOMelement.naturalHeight){return{width:DOMelement.naturalWidth,height:DOMelement.naturalHeight}}var img=new Image;img.src=DOMelement.src;return{width:img.width,height:img.height}}function getImageDimensions(img){var dimensions={width:getNaturalDimensions(img).width,height:getNaturalDimensions(img).height,aspect:function(){return this.width/this.height}};return dimensions}function addClass(element,c){if(element.classList){element.classList.add(c)}else{element.className+=" "+c}}function removeClass(element,c){element.className=element.className.replace(/(\S+)\s*/g,function(w,match){if(match===c){return""}return w}).replace(/^\s+/,"")}function setText(element,text){if(document.body.textContent){element.textContent=text}else{element.innerText=text}}function getComputedWidthAndHeight(element){if(window.getComputedStyle){return{width:parseInt(getComputedStyle(element).width,10),height:parseInt(getComputedStyle(element).height,10)}}else{w=element.getBoundingClientRect().right-element.getBoundingClientRect().left;h=element.getBoundingClientRect().bottom-element.getBoundingClientRect().top;return{width:parseInt(w,10)||0,height:parseInt(h,10)||0}}}function viewport(){var e=window,a="inner";if(!("innerWidth"in window)){a="client";e=document.documentElement||document.body}return{width:e[a+"Width"],height:e[a+"Height"]}}function getPageX(e){var pageX;if(e.pageX){pageX=e.pageX}else if(e.touches){pageX=e.touches[0].pageX}else{pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft}return pageX}function getPageY(e){var pageY;if(e.pageY){pageY=e.pageY}else if(e.touches){pageY=e.touches[0].pageY}else{pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop}return pageY}function checkFlickr(url){if(url.match(/flic.kr\/.+/i)){return true}var idx=url.indexOf("flickr.com/photos/");if(idx==-1){return false}else{return true}}function base58Decode(encoded){var alphabet="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",base=alphabet.length;if(typeof encoded!=="string"){throw'"base58Decode" only accepts strings.'}var decoded=0;while(encoded){var alphabetPosition=alphabet.indexOf(encoded[0]);if(alphabetPosition<0){throw'"base58Decode" can\'t find "'+encoded[0]+'" in the alphabet: "'+alphabet+'"'}var powerOf=encoded.length-1;decoded+=alphabetPosition*Math.pow(base,powerOf);encoded=encoded.substring(1)}return decoded.toString()}function getLeftPercent(slider,input){if(typeof input==="string"||typeof input==="number"){leftPercent=parseInt(input,10)}else{var sliderRect=slider.getBoundingClientRect();var offset={top:sliderRect.top+document.body.scrollTop+document.documentElement.scrollTop,left:sliderRect.left+document.body.scrollLeft+document.documentElement.scrollLeft};var width=slider.offsetWidth;var pageX=getPageX(input);var relativeX=pageX-offset.left;leftPercent=relativeX/width*100}return leftPercent}function getTopPercent(slider,input){if(typeof input==="string"||typeof input==="number"){topPercent=parseInt(input,10)}else{var sliderRect=slider.getBoundingClientRect();var offset={top:sliderRect.top+document.body.scrollTop+document.documentElement.scrollTop,left:sliderRect.left+document.body.scrollLeft+document.documentElement.scrollLeft};var width=slider.offsetHeight;var pageY=getPageY(input);var relativeY=pageY-offset.top;topPercent=relativeY/width*100}return topPercent}var BOOLEAN_OPTIONS={animate:true,showLabels:true,showCredits:true,makeResponsive:true};function interpret_boolean(x){if(typeof x!="string"){return Boolean(x)}return!(x==="false"||x==="")}function JXSlider(selector,images,options){this.selector=selector;var i;this.options={animate:true,showLabels:true,showCredits:true,makeResponsive:true,startingPosition:"50%",mode:"horizontal",callback:null};for(i in this.options){if(i in options){if(i in BOOLEAN_OPTIONS){this.options[i]=interpret_boolean(options[i])}else{this.options[i]=options[i]}}}if(images.length==2){if(checkFlickr(images[0].src)){this.imgBefore=new FlickrGraphic(images[0],this)}else{this.imgBefore=new Graphic(images[0],this)}if(checkFlickr(images[1].src)){this.imgAfter=new FlickrGraphic(images[1],this)}else{this.imgAfter=new Graphic(images[1],this)}}else{console.warn("The images parameter takes two Image objects.")}if(this.imgBefore.credit||this.imgAfter.credit){this.options.showCredits=true}else{this.options.showCredits=false}}JXSlider.prototype={updateSlider:function(input,animate){var leftPercent,rightPercent;if(this.options.mode==="vertical"){leftPercent=getTopPercent(this.slider,input)}else{leftPercent=getLeftPercent(this.slider,input)}leftPercent=leftPercent.toFixed(2)+"%";leftPercentNum=parseFloat(leftPercent);rightPercent=100-leftPercentNum+"%";if(leftPercentNum>0&&leftPercentNum<100){removeClass(this.handle,"transition");removeClass(this.rightImage,"transition");removeClass(this.leftImage,"transition");if(this.options.animate&&animate){addClass(this.handle,"transition");addClass(this.leftImage,"transition");addClass(this.rightImage,"transition")}if(this.options.mode==="vertical"){this.handle.style.top=leftPercent;this.leftImage.style.height=leftPercent;this.rightImage.style.height=rightPercent}else{this.handle.style.left=leftPercent;this.leftImage.style.width=leftPercent;this.rightImage.style.width=rightPercent}this.sliderPosition=leftPercent}},getPosition:function(){return this.sliderPosition},displayLabel:function(element,labelText){label=document.createElement("div");label.className="jx-label";label.setAttribute("tabindex",0);setText(label,labelText);element.appendChild(label)},displayCredits:function(){credit=document.createElement("div");credit.className="jx-credit";text="<em>Photo Credits:</em>";if(this.imgBefore.credit){text+=" <em>Before</em> "+this.imgBefore.credit}if(this.imgAfter.credit){text+=" <em>After</em> "+this.imgAfter.credit}credit.innerHTML=text;this.wrapper.appendChild(credit)},setStartingPosition:function(s){this.options.startingPosition=s},checkImages:function(){if(getImageDimensions(this.imgBefore.image).aspect()==getImageDimensions(this.imgAfter.image).aspect()){return true}else{return false}},calculateDims:function(width,height){var ratio=getImageDimensions(this.imgBefore.image).aspect();if(width){height=width/ratio}else if(height){width=height*ratio}return{width:width,height:height,ratio:ratio}},responsivizeIframe:function(dims){if(dims.height<window.innerHeight){if(dims.ratio>=1){this.wrapper.style.paddingTop=parseInt((window.innerHeight-dims.height)/2)+"px"}}else if(dims.height>window.innerHeight){dims=this.calculateDims(0,window.innerHeight);this.wrapper.style.paddingLeft=parseInt((window.innerWidth-dims.width)/2)+"px"}if(this.options.showCredits){dims.height-=13}return dims},setWrapperDimensions:function(){var wrapperWidth=getComputedWidthAndHeight(this.wrapper).width;var wrapperHeight=getComputedWidthAndHeight(this.wrapper).height;var dims=this.calculateDims(wrapperWidth,wrapperHeight);if(window.location!==window.parent.location&&!this.options.makeResponsive){dims=this.responsivizeIframe(dims)}this.wrapper.style.height=parseInt(dims.height)+"px";this.wrapper.style.width=parseInt(dims.width)+"px"},optimizeWrapper:function(maxWidth){var result=juxtapose.OPTIMIZATION_ACCEPTED;if(this.imgBefore.image.naturalWidth>=maxWidth&&this.imgAfter.image.naturalWidth>=maxWidth){this.wrapper.style.width=maxWidth+"px";result=juxtapose.OPTIMIZATION_WAS_CONSTRAINED}else if(this.imgAfter.image.naturalWidth<maxWidth){this.wrapper.style.width=this.imgAfter.image.naturalWidth+"px"}else{this.wrapper.style.width=this.imgBefore.image.naturalWidth+"px"}this.setWrapperDimensions();return result},_onLoaded:function(){if(this.imgBefore&&this.imgBefore.loaded===true&&this.imgAfter&&this.imgAfter.loaded===true){this.wrapper=document.querySelector(this.selector);addClass(this.wrapper,"juxtapose");this.wrapper.style.width=getNaturalDimensions(this.imgBefore.image).width;this.setWrapperDimensions();this.slider=document.createElement("div");this.slider.className="jx-slider";this.wrapper.appendChild(this.slider);if(this.options.mode!="horizontal"){addClass(this.slider,this.options.mode)}this.handle=document.createElement("div");this.handle.className="jx-handle";this.rightImage=document.createElement("div");this.rightImage.className="jx-image jx-right";this.rightImage.appendChild(this.imgAfter.image);this.leftImage=document.createElement("div");this.leftImage.className="jx-image jx-left";this.leftImage.appendChild(this.imgBefore.image);this.labCredit=document.createElement("a");this.labCredit.setAttribute("href","https://juxtapose.knightlab.com");this.labCredit.setAttribute("target","_blank");this.labCredit.setAttribute("rel","noopener");this.labCredit.className="jx-knightlab";this.labLogo=document.createElement("div");this.labLogo.className="knightlab-logo";this.labCredit.appendChild(this.labLogo);this.projectName=document.createElement("span");this.projectName.className="juxtapose-name";setText(this.projectName,"JuxtaposeJS");this.labCredit.appendChild(this.projectName);this.slider.appendChild(this.handle);this.slider.appendChild(this.leftImage);this.slider.appendChild(this.rightImage);this.slider.appendChild(this.labCredit);this.leftArrow=document.createElement("div");this.rightArrow=document.createElement("div");this.control=document.createElement("div");this.controller=document.createElement("div");this.leftArrow.className="jx-arrow jx-left";this.rightArrow.className="jx-arrow jx-right";this.control.className="jx-control";this.controller.className="jx-controller";this.controller.setAttribute("tabindex",0);this.controller.setAttribute("role","slider");this.controller.setAttribute("aria-valuenow",50);this.controller.setAttribute("aria-valuemin",0);this.controller.setAttribute("aria-valuemax",100);this.handle.appendChild(this.leftArrow);this.handle.appendChild(this.control);this.handle.appendChild(this.rightArrow);this.control.appendChild(this.controller);this._init()}},_init:function(){if(this.checkImages()===false){console.warn(this,"Check that the two images have the same aspect ratio for the slider to work correctly.")}this.updateSlider(this.options.startingPosition,false);if(this.options.showLabels===true){if(this.imgBefore.label){this.displayLabel(this.leftImage,this.imgBefore.label)}if(this.imgAfter.label){this.displayLabel(this.rightImage,this.imgAfter.label)}}if(this.options.showCredits===true){this.displayCredits()}var self=this;window.addEventListener("resize",function(){self.setWrapperDimensions()});this.slider.addEventListener("mousedown",function(e){e=e||window.event;e.preventDefault();self.updateSlider(e,true);animate=true;this.addEventListener("mousemove",function(e){e=e||window.event;e.preventDefault();if(animate){self.updateSlider(e,false)}});this.addEventListener("mouseup",function(e){e=e||window.event;e.preventDefault();e.stopPropagation();this.removeEventListener("mouseup",arguments.callee);animate=false})});this.slider.addEventListener("touchstart",function(e){e=e||window.event;e.preventDefault();e.stopPropagation();self.updateSlider(e,true);this.addEventListener("touchmove",function(e){e=e||window.event;e.preventDefault();e.stopPropagation();self.updateSlider(event,false)})});this.handle.addEventListener("keydown",function(e){e=e||window.event;var key=e.which||e.keyCode;var ariaValue=parseFloat(this.style.left);if(key==37){ariaValue=ariaValue-1;var leftStart=parseFloat(this.style.left)-1;self.updateSlider(leftStart,false);self.controller.setAttribute("aria-valuenow",ariaValue)}if(key==39){ariaValue=ariaValue+1;var rightStart=parseFloat(this.style.left)+1;self.updateSlider(rightStart,false);self.controller.setAttribute("aria-valuenow",ariaValue)}});this.leftImage.addEventListener("keydown",function(event){var key=event.which||event.keyCode;if(key==13||key==32){self.updateSlider("90%",true);self.controller.setAttribute("aria-valuenow",90)}});this.rightImage.addEventListener("keydown",function(event){var key=event.which||event.keyCode;if(key==13||key==32){self.updateSlider("10%",true);self.controller.setAttribute("aria-valuenow",10)}});juxtapose.sliders.push(this);if(this.options.callback&&typeof this.options.callback=="function"){this.options.callback(this)}}};juxtapose.makeSlider=function(element,idx){if(typeof idx=="undefined"){idx=juxtapose.sliders.length}var w=element;var images=w.querySelectorAll("img");var options={};if(w.getAttribute("data-animate")){options.animate=w.getAttribute("data-animate")}if(w.getAttribute("data-showlabels")){options.showLabels=w.getAttribute("data-showlabels")}if(w.getAttribute("data-showcredits")){options.showCredits=w.getAttribute("data-showcredits")}if(w.getAttribute("data-startingposition")){options.startingPosition=w.getAttribute("data-startingposition")}if(w.getAttribute("data-mode")){options.mode=w.getAttribute("data-mode")}if(w.getAttribute("data-makeresponsive")){options.mode=w.getAttribute("data-makeresponsive")}specificClass="juxtapose-"+idx;addClass(element,specificClass);selector="."+specificClass;if(w.innerHTML){w.innerHTML=""}else{w.innerText=""}slider=new juxtapose.JXSlider(selector,[{src:images[0].src,label:images[0].getAttribute("data-label"),credit:images[0].getAttribute("data-credit"),alt:images[0].alt},{src:images[1].src,label:images[1].getAttribute("data-label"),credit:images[1].getAttribute("data-credit"),alt:images[1].alt}],options)};juxtapose.scanPage=function(){var elements=document.querySelectorAll(".juxtapose");for(var i=0;i<elements.length;i++){juxtapose.makeSlider(elements[i],i)}};juxtapose.JXSlider=JXSlider;window.juxtapose=juxtapose;juxtapose.scanPage()})(document,window);!window.addEventListener&&function(WindowPrototype,DocumentPrototype,ElementPrototype,addEventListener,removeEventListener,dispatchEvent,registry){WindowPrototype[addEventListener]=DocumentPrototype[addEventListener]=ElementPrototype[addEventListener]=function(type,listener){var target=this;registry.unshift([target,type,listener,function(event){event.currentTarget=target;event.preventDefault=function(){event.returnValue=false};event.stopPropagation=function(){event.cancelBubble=true};event.target=event.srcElement||target;listener.call(target,event)}]);this.attachEvent("on"+type,registry[0][3])};WindowPrototype[removeEventListener]=DocumentPrototype[removeEventListener]=ElementPrototype[removeEventListener]=function(type,listener){for(var index=0,register;register=registry[index];++index){if(register[0]==this&&register[1]==type&&register[2]==listener){return this.detachEvent("on"+type,registry.splice(index,1)[0][3])}}};WindowPrototype[dispatchEvent]=DocumentPrototype[dispatchEvent]=ElementPrototype[dispatchEvent]=function(eventObject){return this.fireEvent("on"+eventObject.type,eventObject)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[]);turn i=e}if(t=i,s(u,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(u=e,i=r)}var u,i,a=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,o]))[0],f[1]);return a(function(){d.hasValue=!0,d.value=p},[p]),l(p),p}},61688:(e,t,r)=>{"use strict";e.exports=r(653250)},552798:(e,t,r)=>{"use strict";e.exports=r(950139)},33617:(e,t,r)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/[username]/[slug]"]=function(){return r(881371).Z}},385740:(e,t,r)=>{"use strict";let n;r.d(t,{BE:()=>c,Ih:()=>l,SU:()=>f,sV:()=>a});var o=r(667294),s=r(425288),u=r(785893);let{Provider:i,useHook:a}=(0,s.Z)("View");function c(){return n}function l({children:e,initialState:t={}}){let[r,s]=(0,o.useState)(t),a=(0,o.useCallback)(()=>{n={},s({})},[]),c=(0,o.useCallback)(e=>{n={...n,...e},s(t=>({...t,...e}))},[]),l=(0,o.useMemo)(()=>({viewContextData:r,clearViewContextData:a,setViewContextData:c}),[r,c,a]);return(0,u.jsx)(o.Fragment,{children:(0,u.jsx)(i,{value:l,children:e})})}function f(){let{viewContextData:e}=a();return e}},425288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(667294);function o(e,t){let r="consumer"===t?`${e}Consumer`:`use${e}`;return`
  ${r} must be used within a ${e}Provider.
  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.
  `}function s(e,t){let r=(0,n.createContext)(t),{messageDisplayName:s}=function(e,t){let r=e.slice(1);if(r=r.endsWith("Context")?r:`${r}Context`,t){let n=`with${e[0].toUpperCase()}${r}(${t})`;return{hocDisplayName:n}}let n=`${e[0].toLowerCase()}${r}`,o=`${e[0].toUpperCase()}${r}`;return{propsDisplayName:n,messageDisplayName:o}}(e);r.displayName=s;let{Provider:u}=r,i=({children:e})=>{let t=(0,n.useContext)(r);if(void 0===t)throw Error(o(s,"consumer"));return e(t)},a=()=>(0,n.useContext)(r);return u.displayName=`${s}Provider`,i.displayName=`${s}Consumer`,{Provider:u,Consumer:i,MaybeConsumer:({children:e})=>{let t=(0,n.useContext)(r);return e(t)},useMaybeHook:a,useHook:function(){let e=a();if(void 0===e)throw Error(o(s,"hook"));return e}}}},620707:(e,t,r)=>{"use strict";function n(e,t){if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(r=>e[r]===t[r])}return e===t}r.d(t,{Ak:()=>n,_Y:()=>o,qe:()=>i,xZ:()=>u});let o=(e,t)=>e.length===t.length&&e.every((e,r)=>n(e,t[r])),s=(e,t)=>e.length===t.length&&e.every((e,r)=>e===t[r]),u=(e,t=s)=>r=>{let n=[];return function(...o){let s=this,u=n.find(e=>e.context===s&&t(e.args,o));if(u)return u.result;let i={context:s,args:o,result:r.apply(this,o)};return n.push(i),e&&n.length>e&&n.shift(),i.result}},i=u(1);u()},780280:(e,t,r)=>{"use strict";r.d(t,{B:()=>f,LC:()=>c,P2:()=>a,fH:()=>l,gf:()=>d});var n=r(667294),o=r(620707),s=r(608832),u=r(785893);let i=(0,n.createContext)();function a({children:e,initialValue:t}){let[r,a]=(0,n.useState)(t),c=(0,n.useMemo)(()=>({requestContext:r,updateRequestContext:e=>{let t={...r,...e};(0,o.Ak)(r,e)||a(t),(0,s.J)(t)}}),[r]);return(0,u.jsx)(i.Provider,{value:c,children:e})}let c=({children:e})=>{let t=(0,n.useContext)(i);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},l=({children:e})=>{let t=(0,n.useContext)(i);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function f(){let e=(0,n.useContext)(i);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function d(){let e=(0,n.useContext)(i);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},608832:(e,t,r)=>{"use strict";let n;function o(e){n=e}function s(){return n}r.d(t,{J:()=>o,l:()=>s})},784590:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(667294),o=r(702664),s=r(616550),u=r(886858),i=r(780280),a=r(248327),c=r(718368);let l={},f=({httpStatus:e})=>!e||e>=500;function d(e){let{enabledRouteRefresh:t,__unstableEnableSuspenseSupport:r,headers:d,name:p,noCache:y,options:h,schema:m}=null!=e?e:{name:"DisabledResource",options:null},v=!e,b=(0,o.useDispatch)(),g=(0,u.Z)(h),_=(0,n.useRef)(null),S=(0,n.useRef)(),C=(0,s.useHistory)(),w=C&&"POP"!==C.action,x=e=>(e[p]||l)[g]||l,E=(0,o.useSelector)(({resources:e})=>x(e).nextBookmark),k=(0,o.useSelector)(({resources:e})=>x(e).data),P=(0,o.useSelector)(({resources:e})=>x(e).auxData),$=(0,o.useSelector)(({resources:e})=>x(e).error),A=(0,o.useSelector)(({resources:e})=>!!x(e).fetching),R="object"==typeof P&&"string"==typeof(null==P?void 0:P.pagination_group)?P.pagination_group:void 0,O=!!$||void 0!==k,D=O&&!A&&E===c.q,L=!!(O&&t&&w&&!v),[j,q]=(0,n.useState)(L),N=(0,n.useCallback)((e,t)=>{_.current=b((0,a.U)(p,{options:h,schema:m,bookmark:e,headers:d,paginationGroup:t}))},[b,p,g,m,d]),Z=()=>{_.current=b((0,a.b)(p,{options:h,schema:m,headers:d}))},{isBot:M}=(0,i.B)(),T=()=>{if(!v&&S.current!==g){let e=void 0===S.current;S.current=g,!O&&!A||e&&$&&f($)?N():(!M&&y||L)&&Z()}};(0,n.useEffect)(()=>{r||T()}),r&&T();let B=(0,n.useCallback)(()=>{v||(Z(),q(!0))},[v,a.b,p,g,d,q]),I=(0,n.useCallback)(()=>{!E||D||A||v||N(E,R)},[v,N,E,D,A,R]);if(_.current){if(O&&!A)_.current=null;else if(r)throw _.current}let F=(0,n.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:I,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:B}),K={auxData:P,data:k,error:$,fetchMore:I,isAtEnd:D,isFetching:A,isLoaded:O,isRefreshing:j,nextBookmark:E,refresh:B};return(0,o.shallowEqual)(K,F.current)||(j&&(F.current.data||!L)&&!(0,o.shallowEqual)(K.data,F.current.data)&&(K.isRefreshing=!1,q(!1)),F.current=K),F.current}},418614:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(784590),o=r(19121),s=r(616550),u=r(780280),i=r(50286),a=r(826067);function c({getOptions:e,checkExperiments:t,disableFetch:r,...c}){let l=function(){let e=(0,o.Z)();return{country:e.country||void 0,id:e.id||void 0,isAuth:e.isAuth,isEmployee:!!e.isEmployee,isPartner:!!e.isPartner,username:e.username||void 0}}(),{args:f,fetchDisabled:d}=function({checkExperiments:e,disableFetch:t,viewer:r}){var n;let o=(0,s.useLocation)(),c=(0,s.useRouteMatch)(),l=(0,u.B)(),f=function({advertiser:e,deviceType:t,location:{pathname:r,search:n},inviteCode:o,match:{params:s,path:u},viewer:i}){let c={inviteCode:o,matchPath:u,params:s,parsedSearch:(0,a.mB)(n),pathname:r,search:n},l={country:i.country||void 0,id:i.id||void 0,isAuth:i.isAuth,isEmployee:!!i.isEmployee,isPartner:!!i.isPartner,username:i.username||void 0};return{advertiser:e,deviceType:t,routeData:c,user:l}}({advertiser:l.advertiser,deviceType:(0,i.Mq)(l),location:o,match:c,viewer:r,inviteCode:null!==(n=l.inviteCode)&&void 0!==n?n:""}),d=!!t&&t(f),p=!!d||!e||e(l.experimentsClient);return{args:f,fetchDisabled:d||!p}}({checkExperiments:t,disableFetch:r,viewer:l}),p=e?e(f):void 0;return(0,n.Z)(d?null:{options:p,...c})}},50286:(e,t,r)=>{"use strict";r.d(t,{HG:()=>f,Kf:()=>u,Mq:()=>o,Wb:()=>l,ZP:()=>d,dA:()=>i,ds:()=>a,ml:()=>c});var n=r(780280);function o(e){let{isMobile:t,isTablet:r}=e.userAgent;return r?"tablet":t?"phone":"desktop"}let s=()=>{let e=(0,n.B)();return o(e)},u=e=>"phone"===e,i=e=>"tablet"===e,a=e=>"desktop"===e,c=()=>u(s()),l=()=>i(s()),f=()=>a(s()),d=s},19121:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,Z:()=>u});var n=r(425288);let{Provider:o,useHook:s}=(0,n.Z)("viewer"),u=s},257372:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(240684),o=r(418614),s=r(50286),u=r(19121),i=r(785893);let a=(0,n.ZP)({resolved:{},chunkName:()=>"BoardPage-BoardPageAuthDesktop",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(73005),r.e(73375),r.e(6187)]).then(r.bind(r,561563)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return r(t)},resolve:()=>561563}),c=(0,n.ZP)({resolved:{},chunkName:()=>"BoardPage-BoardPageDefault",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(26555),r.e(69083),r.e(26873)]).then(r.bind(r,709010)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return r(t)},resolve:()=>709010});function l(){let e=(0,s.HG)(),t=(0,u.Z)(),r=t&&t.isAuth,n=(0,o.Z)({name:"BoardResource",getOptions:({routeData:{params:{slug:e,username:t},parsedSearch:{orbac_subject_id:r}}})=>({username:decodeURIComponent(t||""),slug:decodeURIComponent(e||""),field_set_key:"detailed",orbac_subject_id:r}),disableFetch:({user:e,deviceType:t})=>!(e.isAuth&&"desktop"===t)});return e&&r?(0,i.jsx)(a,{boardResource:n}):(0,i.jsx)(c,{})}},881371:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o}),r(667294);var n=r(257372);let o=n.Z},497326:(e,t,r)=>{"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},487462:(e,t,r)=>{"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})},894578:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(589611);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.Z)(e,t)}},263366:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:()=>n})},589611:(e,t,r)=>{"use strict";function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:()=>n})}},e=>{var t=t=>e(e.s=t);e.O(0,[97270,16550,26067,17492,48327],()=>t(33617)),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/[username]/[slug]-bfc0e36596729165.mjs.map