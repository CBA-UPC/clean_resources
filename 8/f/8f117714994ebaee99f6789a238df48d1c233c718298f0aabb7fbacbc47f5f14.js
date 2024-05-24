"use strict";(self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[]).push([["health-top-span"],{63383:function(e,t,a){a.r(t),a.d(t,{HealthTopSpan:function(){return g},HealthTopSpanStyles:function(){return N},HealthTopSpanTemplate:function(){return B},ToolingInfo:function(){return U}});var i=a(33940),n=a(70041),o=a(81586),r=a(44132),l=a(84964),s=a(99452),c=a(33779),h=a(22944);function d(e,t){if(e){return e.addOrUpdateChild({name:t}).getMetadataTag()}return""}function u(e,t,a){return{headline:e,id:t,type:a,vertical:"health",category:p(),subcategory:""}}function p(){var e,t;let a=null===h.jG||void 0===h.jG||null===(e=h.jG.CurrentRequestTargetScope)||void 0===e||null===(t=e.pageType)||void 0===t?void 0:t.toString();return a&&a.startsWith("health")?"health"===a?"health":(a=a.replace(/^lifestyle::health::/,"").replace(/^health::/,""),!0===a.includes("::")&&(a=a.substring(0,a.indexOf("::"))),a):""}class v{static LogError(e,t){let a="";"object"==typeof t?a=t.message:"string"==typeof t&&(a=t),(0,c.H)(e,t),d(v.telObjectBase,a)}static IsNullOrUndefiend(e){return null===e||null==e||e.length<=1}}var m=a(85106);class g extends l.l{constructor(){super(...arguments),this.quoteItems=[],this.isStickyVertical=!1,this.isStickyVerticalF1Enabled=!1,this.isStickyVerticalF2Enabled=!1,this.ensureObservableBeforeConnect=!0}experienceConnected(){this.initConfig(),this.initData(),this.telemetrySendEvent_healthtopspanloaded()}getExperienceType(){return n.x.healthTopSpan}initConfig(){if(this.hoverTelemetryHelper=new m.U(!0),this.isStickyVerticalF1Enabled=this.config.isStickyVerticalF1Enabled,this.isStickyVerticalF2Enabled=this.config.isStickyVerticalF2Enabled,this.config.useMockData)for(let l=0;l<this.config.mockCardFeedDataJson.quoteItems.length;++l){var e,t,a,i,n,o,r;const s={name:this.config.mockCardFeedDataJson.quoteItems[l].name,localename:null===(e=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===e?void 0:e.localeName,localizedName:null===(t=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===t?void 0:t.localizedName,associatedQnA:null===(a=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===a?void 0:a.associatedQnA,associatedAtoZ:null===(i=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===i?void 0:i.associatedAtoZ,type:null===(n=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===n?void 0:n.type,allAnswerCount:null===(o=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===o?void 0:o.allAnswerCount,thumbnailId:this.getThumbnailIds(null===(r=this.config.mockCardFeedDataJson.quoteItems[l])||void 0===r?void 0:r.expertDetails)};this.quoteItems.push(s)}}async initData(){if(this.telObjectBase=this.parentTelemetryObject,v.telObjectBase=this.telObjectBase,null!=this.cardFeedDataJson){this.quoteItems=[];for(let l=0;l<this.cardFeedDataJson.healthInterests.length;++l){var e,t,a,i,n,o,r;const s={name:this.cardFeedDataJson.healthInterests[l].name,localename:null===(e=this.cardFeedDataJson.healthInterests[l])||void 0===e?void 0:e.localeName,localizedName:null===(t=this.cardFeedDataJson.healthInterests[l])||void 0===t?void 0:t.localizedName,associatedQnA:null===(a=this.cardFeedDataJson.healthInterests[l])||void 0===a?void 0:a.associatedQnA,associatedAtoZ:null===(i=this.cardFeedDataJson.healthInterests[l])||void 0===i?void 0:i.associatedAtoZ,type:null===(n=this.cardFeedDataJson.healthInterests[l])||void 0===n?void 0:n.type,allAnswerCount:null===(o=this.cardFeedDataJson.healthInterests[l])||void 0===o?void 0:o.allAnswerCount,thumbnailId:this.getThumbnailIds(null===(r=this.cardFeedDataJson.healthInterests[l])||void 0===r?void 0:r.expertDetails)};this.quoteItems.push(s)}}}getThumbnailIds(e){return(null==e?void 0:e.map((e=>{var t,a;return(null==e||null===(t=e.displayImg)||void 0===t?void 0:t.thumbnailId)||(null==e||null===(a=e.displayImage)||void 0===a?void 0:a.thumbnailId)||""})))||[]}telemetrySendEvent_healthtopspanloaded(){let e="";for(let a=0;a<this.quoteItems.length;++a){var t;e+=(null===(t=this.quoteItems[a])||void 0===t?void 0:t.name)+","}const a=document.createElement("div"),i=this.isStickyVertical?"HealthTopSpan":"HealthTopSpanVertical",n=this.isStickyVertical?"HealthHub>HealthTopSpanVertical>":"HealthHub>HealthTopSpan>",l=this.telObjectBase&&function(e,t,a,i,n,o,r){if(e)return e.addOrUpdateChild({name:t,action:a,behavior:i,content:u(n,o,r)}).getMetadataTag();return""}(this.telObjectBase,n+e,o.Aw.View,o.wu.View,"",i,0);l&&(a.setAttribute("data-t",l),r.M0.sendActionEvent(a,o.Aw.View,o.wu.View,""))}isValidInterestAsPerMarket(e){const t=(h.jG.CurrentMarket||"en-us").toString(),a=["en-in","en-us","en-ca","en-au","en-ae","en-ie","en-my","en-nz","en-ph","en-sg","en-za","en-xl","fr-ca","ja-jp","ko-kr","pt-br","ru-xl","ru-ru","zh-cn"];return"condition"!=e.type.toLowerCase()||!(null==a.find((e=>e==t)))}getSpanTitle(){return this.strings.SpanTitle}isContentReadyToShow(){return this.config.enableTopSpan&&this.quoteItems.length>0}showStickyVertical(){return this.isStickyVertical&&(this.isStickyVerticalF1Enabled||this.isStickyVerticalF2Enabled)}}(0,i.gn)([s.LO],g.prototype,"cardFeedDataJson",void 0),(0,i.gn)([s.LO],g.prototype,"quoteItems",void 0),(0,i.gn)([s.LO],g.prototype,"telObjectBase",void 0),(0,i.gn)([s.LO],g.prototype,"isStickyVertical",void 0),(0,i.gn)([s.LO],g.prototype,"isStickyVerticalF1Enabled",void 0),(0,i.gn)([s.LO],g.prototype,"isStickyVerticalF2Enabled",void 0);var y=a(49218),f=a(93703),b=a(89150),x=a(28904),k=a(98303);a(24589);(new k.fH).data;class w extends x.H{constructor(){super(...arguments),this.showOverlay=!1,this.isOpenOverlay=!1,this.isStickyVertical=!1,this.isStickyVerticalF1Enabled=!1,this.isStickyVerticalF2Enabled=!1}connectedCallback(){super.connectedCallback();window.addEventListener("message",(e=>this.resizeIframe(e)))}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("message",(e=>this.resizeIframe(e)))}resizeIframe(e){var t,a;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#flyout-iframe"),n=null==e||null===(a=e.data)||void 0===a?void 0:a.contentHeight;i&&(i.style.height=n<360?`${n+192}px`:"600px")}getName(){return!v.IsNullOrUndefiend(this.quote.localizedName)&&this.quote.localizedName.length>0?this.quote.localizedName:this.quote.name[0].toUpperCase()+this.quote.name.slice(1)}GetTopicHoverPageUrl(){const e=new URL(function(){const e=new Map([["de","/gesundheit"],["en","/health"],["es","/salud"],["fr","/sante"],["it","/salute"],["ja","/health"],["ko","/health"],["nl","/gezondheid"],["pt","/saude"],["ru","/health"],["sv","/halsa"],["zh","/health"]]),t=(h.jG.CurrentMarket||"en-us").toString(),a=t.substr(0,2),i=e.get(a)||"/health";return"https://www.msn.com/{market}{healthhubseg}".replace("{market}",t).replace("{healthhubseg}",i)}()+"/healthhovertopic"),t=new URLSearchParams(window.location.search).getAll("item");if(t&&t.length>0)for(const a of t)e.searchParams.append("item",a);return e.searchParams.append("topic",this.quote.name),e.searchParams.append("localizedName",this.quote.localizedName),e.searchParams.append("atoz",this.quote.associatedAtoZ),e.searchParams.append("qna",this.quote.associatedQnA),e.searchParams.append("type",this.quote.type),e.searchParams.append("isStickyVertical",this.isStickyVertical?"true":"false"),e.href}SendPageViewTelemetry(){const e={page:{appType:"health",url:this.GetTopicHoverPageUrl(),name:"healthhub_healthhovertopic",isAutoRefresh:location.search.includes("AR="),content:{category:"healthhovertopic:"+this.quote.name,title:"Health Topic Flyout",vertical:"health"}}};r.M0.sendPageView(e,!0)}OnMouseEnterOnTopicPill(e){this.showOverlay=!0,this.isOpenOverlay=!0,e.event&&this.hoverTelemetryHelper&&this.hoverTelemetryHelper.onMouseEnter(e.event.currentTarget)}OnMouseLeaveOnTopicPill(e){this.showOverlay=!1,e.event&&this.hoverTelemetryHelper&&this.hoverTelemetryHelper.onMouseLeave(e.event.currentTarget)}}(0,i.gn)([s.LO],w.prototype,"quote",void 0),(0,i.gn)([s.LO],w.prototype,"watchlistQuoteDict",void 0),(0,i.gn)([s.LO],w.prototype,"telObjectBase",void 0),(0,i.gn)([s.LO],w.prototype,"showOverlay",void 0),(0,i.gn)([s.LO],w.prototype,"isOpenOverlay",void 0),(0,i.gn)([s.LO],w.prototype,"isStickyVertical",void 0),(0,i.gn)([s.LO],w.prototype,"isStickyVerticalF1Enabled",void 0),(0,i.gn)([s.LO],w.prototype,"isStickyVerticalF2Enabled",void 0);var S=a(79148),q=a(42689),O=a(958),$=a(28632),F=a(78923),I=a(29717);const V=F.i` :host{--thumbnail-size:22px;--thumbnail-stroke-color:#FFFFFF;--button-width:78px;--button-height:76px;--horizontal-button-height:16px;--iframe-width:320px;--iframe-height:600px;--overlay-horizontal-offset-action-tray:78px;--overlay-vertical-offset-action-tray:-254px;--overlay-horizontal-offset:0px;--overlay-vertical-offset:8px}.filled svg{fill:blue}.watchlist-button{border:none;width:16px;height:var(--horizontal-button-height)}.quote-thumbnail{width:var(--thumbnail-size);height:var(--thumbnail-size);border-radius:50%;border:1px solid var(--thumbnail-stroke-color);background:${S.RJ};object-fit:cover;box-sizing:border-box}.quote-thumbnail:nth-child(2){margin-inline-start:-8px;margin-left:-8px}.quote-thumbnail-title,.quote-title{font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:${q.C};display:inline-flex;align-items:center;margin:0}.sticky-vertical .quote-title{width:100%;white-space:initial;margin:0;hyphens:auto;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;text-align:left;}.thumbnail-container{display:flex;align-items:center}.quote-thumbnail-title{color:${O.Av};margin-inline:4px 6px}.quote-if{width:var(--iframe-width);height:var(--iframe-height);border:0px;overflow:hidden scroll;border-radius:6px;box-shadow:rgba(0,0,0,0.14) 0px 16px 32px;-ms-overflow-style:none;scrollbar-width:none}.quote-if::-webkit-scrollbar{display:none;width:0px;height:0px}.health-topic-checkbox{background:#F3F3F3;border-radius:6px;padding:6px 12px;border:none;display:inline-flex;cursor:pointer;white-space:nowrap;text-transform:capitalize}.health-topic-checkbox:hover{background:#E0E0E0}.sticky-vertical.health-topic-checkbox{width:var(--button-width);height:var(--button-height);padding:6px;display:block;box-shadow:0px 2px 4px 0px rgba(0,0,0,0.14)}.if-container{margin-left:var(--overlay-horizontal-offset);width:var(--iframe-width);height:var(--iframe-height);position:absolute;z-index:9999;border-radius:6px;padding-top:var(--overlay-vertical-offset);}.if-container:hover{display:block}.hide{display:none}.sticky-vertical-flyout{padding-top:0px;margin-left:var(--overlay-horizontal-offset-action-tray);margin-top:var(--overlay-vertical-offset-action-tray)}.sticky-vertical-flyout .quote-if{margin-left:16px}.grid-quote-container{flex-direction:row;align-items:center;display:inline-flex;gap:0}.sticky-vertical .grid-quote-container{flex-direction:column-reverse;width:100%;row-gap:8px;align-items:flex-start}.sticky-vertical{width:var(--button-width);height:var(--button-height);display:block}.animated-container{display:grid;grid-template:1fr / 1fr;place-items:center;margin-inline-start:4px;margin-left:4px}.animated-container > *{grid-column:1 / 1;grid-row:1 / 1;text-align:center}.thumbnail-separator{height:var(--horizontal-button-height);width:1px;border-right:1px solid ${$.c1};margin:2px 8px 0 2px}@keyframes appear{0%{opacity:0;transform:translate3d(0,32px,0)}100%{opacity:1;transform:translate3d(0,0,0)}}@keyframes disappear{0%{opacity:1;transform:translate3d(0,0,0)}99%{opacity:0;transform:translate3d(0,-32px,0)}100%{visibility:hidden}}.slide-in{opacity:0;-webkit-animation:appear 1s 1 2s forwards;animation:appear 1s 1 2s forwards}.slide-out{-webkit-animation:disappear 1s 1 2s forwards;animation:disappear 1s 1 2s forwards}`.withBehaviors((0,I.Uu)(F.i` .health-topic-checkbox{background:rgba(255,255,255,0.09)}.health-topic-checkbox:hover{background:rgba(255,255,255,0.13)}.if-container{background:transparent !important}.quote-if{box-shadow:0px 0px 2px 0px rgba(0,0,0,0.24),0px 8px 16px 0px rgba(0,0,0,0.28)}.quote-thumbnail-title{color:#63ade5}.thumbnail-separator{opacity:0.5}`)),T=y.dy`<iframe id="flyout-iframe" class="quote-if" src=${e=>e.GetTopicHoverPageUrl()}></iframe>`,E=y.dy`<div id="flyout-container" class="if-container ${e=>e.showOverlay?"":"hide"} ${e=>e.isStickyVertical?"sticky-vertical-flyout":""}">${(0,f.g)((e=>e.isOpenOverlay),T)}</div>`,C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t="0";return t=e<=999?e<=2?`${e}`:"+"+(e-2):"+999",y.dy`<span class="quote-thumbnail-title">${t}</span>`},z=e=>y.dy`<img part="quote-thumbnail" class="quote-thumbnail" src="${e}">`,D=()=>{const e=(0,h.Yq)().StaticsUrl+"/pr-4269720/health/DefaultHealthProfile.svg";return y.dy` ${(0,b.rx)((e=>e.quote.thumbnailId.slice(0,2)),y.dy` ${t=>z(""===t?e:`https://www.bing.com/th?id=${t}`)} `)} `},L=e=>(e.isStickyVerticalF1Enabled||e.isStickyVerticalF2Enabled)&&!e.isStickyVertical,A=y.dy` Q&amp;A${(0,f.g)((e=>e.isStickyVerticalF1Enabled),y.dy`:`)}&nbsp;
`,H=y.dy` ${y.dy`<span class="thumbnail-container">${D} ${e=>{var t;if(e.isStickyVerticalF1Enabled||e.isStickyVerticalF2Enabled&&e.isStickyVertical)return C(null===(t=e.quote)||void 0===t?void 0:t.allAnswerCount)}}</span>`}<p class="quote-title">${(0,f.g)((e=>L(e)),y.dy` ${e=>{var t,a;return e.isStickyVerticalF2Enabled?(a=null===(t=e.quote)||void 0===t?void 0:t.allAnswerCount,y.dy`<span class="animated-container"><span class="slide-out">${A}</span><span class="slide-in">${C(a)}</span></span><span class="thumbnail-separator"></span>`):A}} `)}${e=>e.getName()}</p>`,j=y.dy`<div><button class="health-topic-checkbox ${e=>L(e)?"sticky-vertical-enabled":""} ${e=>e.isStickyVertical?"sticky-vertical":""}" aria-label=${e=>e.getName()} data-t="${e=>d(e.telObjectBase,`health-span-quote-item ${e.quote.name}`)}" @mouseenter=${(e,t)=>e.OnMouseEnterOnTopicPill(t)} @mouseleave=${(e,t)=>e.OnMouseLeaveOnTopicPill(t)} @blur=${(e,t)=>e.OnMouseLeaveOnTopicPill(t)} @focusin=${(e,t)=>e.OnMouseEnterOnTopicPill(t)}><div class="grid-quote-container">${H}</div></button>${E}</div>`;let P=class extends w{};P=(0,i.gn)([(0,x.M)({name:"health-span-quote-item",template:j,styles:V,shadowOptions:{delegatesFocus:!0}})],P);const J=e=>y.dy`<health-span-quote-item :config=${(e,t)=>t.parent.config} :strings=${(e,t)=>t.parent.strings} :quote=${e=>e} :watchlistQuoteDict=${(e,t)=>t.parent.watchlistQuoteDict} :telObjectBase=${(e,t)=>t.parent.telObjectBase} :hoverTelemetryHelper=${(e,t)=>t.parent.hoverTelemetryHelper} :unWatchQuote=${(e,t)=>t.parent.unWatchQuote} :isInWatchList=${(e,t)=>t.parent.isInWatchList} :watchQuote=${(e,t)=>t.parent.watchQuote} :isStickyVerticalF1Enabled=${(e,t)=>t.parent.isStickyVerticalF1Enabled} :isStickyVerticalF2Enabled=${(e,t)=>t.parent.isStickyVerticalF2Enabled} :isStickyVertical=${(e,t)=>t.parent.isStickyVertical} data-t ="${(e,t)=>{var a;return null===(a=t.parent.telObjectBase)||void 0===a?void 0:a.getMetadataTag()}}"></health-span-quote-item>`,M=e=>y.dy`<div>${(0,f.g)((e=>e.isContentReadyToShow()),(e=>y.dy` ${(0,f.g)((e=>!e.isStickyVertical),y.dy`<div class="span-header"><span class="title-icon"></span><span class="title">${e=>e.getSpanTitle()}</span></div><div class="quote-items-row">${(0,b.rx)((e=>e.quoteItems),J())}</div>`)} ${(0,f.g)((e=>e.isStickyVertical),y.dy`<div class="${e=>e.showStickyVertical()?"quote-items-row sticky-vertical-container":"sticky-vertical-container-hide"}">${(0,b.rx)((e=>e.quoteItems),J())}</div>`)}
`))}</div>`,B=y.dy` ${e=>M()}
`,N=F.i`
.span-header{display:flex;flex-direction:row;align-items:flex-start;padding:0px 0px 2px;gap:10px;height:22px;margin-bottom:14px}.title{height:20px;font-style:normal;font-weight:600;font-size:14px;line-height:20px;color:${q.C}}.title-icon{width:20px;height:20px;background-image:url(${(0,h.Yq)().StaticsUrl}latest/health/heartSymbolIcon.svg);background-repeat:no-repeat;background-size:cover;display:inline-block}.quote-items-row{display:flex;flex-direction:row;align-items:flex-start;gap:8px;overflow:hidden}.sticky-vertical-container.quote-items-row{flex-direction:column;overflow:unset}.sticky-vertical-container-hide{display:none}`,U={experienceConfigSchema:undefined}},958:function(e,t,a){a.d(t,{UE:function(){return v},D8:function(){return m},OC:function(){return p},Av:function(){return u}});var i=a(52704);var n=a(38492),o=a(20246),r=a(56837),l=a(47999),s=a(30363),c=a(94806);const{create:h}=i.L,d=h({name:"accent-fill-recipe"},{evaluate:(e,t)=>(c.v.normal,(e,t)=>function(e,t,a,i,n,o,r,l,s){const c=e.source,h=e.closestIndexOf(c),d=h+1*i,u=h+1*n,p=h+1*o;return{rest:e.get(h),hover:e.get(d),active:e.get(u),focus:e.get(p)}}(e(s.a),e(r.y),t||e(n.I),e(l.B2),e(l.Wo),e(l.v$),e(o.MY),e(o.jW),e(o.hD)))(e,t)}),u=h("accent-fill-rest",(e=>e(d).evaluate(e).rest)),p=h("accent-fill-hover",(e=>e(d).evaluate(e).hover)),v=h("accent-fill-active",(e=>e(d).evaluate(e).active)),m=h("accent-fill-focus",(e=>e(d).evaluate(e).focus))},94806:function(e,t,a){a.d(t,{v:function(){return i}});const i={normal:4.5,large:7}},28632:function(e,t,a){a.d(t,{c1:function(){return u},V0:function(){return p},QP:function(){return d},ak:function(){return h}});var i=a(52704),n=a(64087);var o=a(38492),r=a(59845),l=a(56837);const{create:s}=i.L,c=s({name:"neutral-stroke-recipe"},{evaluate:e=>function(e,t,a,i,o,r){const l=e.closestIndexOf(t),s=(0,n.a)(t),c=l+s*a,h=c+s*(i-a),d=c+s*(o-a),u=c+s*(r-a);return{rest:e.get(c),hover:e.get(h),active:e.get(d),focus:e.get(u)}}(e(l.y),e(o.I),e(r.fd),e(r.rn),e(r.IM),e(r.Bx))}),h=s("neutral-stroke-rest",(e=>e(c).evaluate(e).rest)),d=s("neutral-stroke-hover",(e=>e(c).evaluate(e).hover)),u=s("neutral-stroke-active",(e=>e(c).evaluate(e).active)),p=s("neutral-stroke-focus",(e=>e(c).evaluate(e).focus))}}]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           non-array objects must have a [Symbol.iterator]() method.',
                );
              }
              var o,
                a = !0,
                u = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (u = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            }
            function b(e, n) {
              (null == n || n > e.length) && (n = e.length);
              for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
              return r;
            }
            var y = {
                getRefererInfo: o.nH,
                findRootDomain: a.W,
                getWindowTop: u.getWindowTop,
                getWindowSelf: u.getWindowSelf,
                getHighEntropySUA: p,
                getLowEntropySUA: g,
              },
              w = (0, h.A_)('FPD'),
              E = (0, i.z3)('sync', function (e) {
                return d.Z.all([
                  e,
                  ((n = s.vc.getConfig('firstPartyData.uaHints')),
                  Array.isArray(n) && 0 !== n.length
                    ? y.getHighEntropySUA(n)
                    : d.Z.resolve(y.getLowEntropySUA())).catch(function () {
                    return null;
                  }),
                ]).then(function (e) {
                  var n = (0, r.Z)(e, 2),
                    t = n[0],
                    i = n[1],
                    o = y.getRefererInfo();
                  !(function (e) {
                    ['app', 'site', 'device'].forEach(function (n) {
                      var t = s.vc.getConfig(n);
                      null != t && (e[n] = (0, u.mergeDeep)({}, t, e[n]));
                    });
                  })(t),
                    Object.entries(T).forEach(function (e) {
                      var n = (0, r.Z)(e, 2),
                        i = n[0],
                        a = (0, n[1])(t, o);
                      a &&
                        Object.keys(a).length > 0 &&
                        (t[i] = (0, u.mergeDeep)({}, a, t[i]));
                    }),
                    i &&
                      (0, c.N)(
                        t,
                        'device.sua',
                        Object.assign({}, i, t.device.sua),
                      ),
                    (t = w(t));
                  var a,
                    d = m(h.Iq);
                  try {
                    for (d.s(); !(a = d.n()).done; ) {
                      var f = a.value;
                      if ((0, h.Qg)(t, f)) {
                        t[f] = (0, u.mergeDeep)({}, I(t, o), t[f]);
                        break;
                      }
                    }
                  } catch (e) {
                    d.e(e);
                  } finally {
                    d.f();
                  }
                  return t;
                });
                var n;
              });
            function C(e) {
              try {
                return e(y.getWindowTop());
              } catch (n) {
                return e(y.getWindowSelf());
              }
            }
            function A(e) {
              return (0, u.getDefinedParams)(e, Object.keys(e));
            }
            var T = {
              site: function (e, n) {
                if (
                  !h.Iq.filter(function (e) {
                    return 'site' !== e;
                  }).some(h.Qg.bind(null, e))
                )
                  return A({ page: n.page, ref: n.ref });
              },
              device: function () {
                return C(function (e) {
                  return {
                    w:
                      e.innerWidth ||
                      e.document.documentElement.clientWidth ||
                      e.document.body.clientWidth,
                    h:
                      e.innerHeight ||
                      e.document.documentElement.clientHeight ||
                      e.document.body.clientHeight,
                    dnt: (0, u.getDNT)() ? 1 : 0,
                    ua: e.navigator.userAgent,
                    language: e.navigator.language.split('-').shift(),
                  };
                });
              },
              regs: function () {
                var e = {};
                C(function (e) {
                  return e.navigator.globalPrivacyControl;
                }) && (0, c.N)(e, 'ext.gpc', 1);
                var n = s.vc.getConfig('coppa');
                return 'boolean' == typeof n && (e.coppa = n ? 1 : 0), e;
              },
            };
            function I(e, n) {
              var t,
                r,
                i,
                a = (0, o.hh)(n.page, { noLeadingWww: !0 });
              return A({
                domain: a,
                keywords:
                  null ===
                    (t = C(function (e) {
                      return e.document.querySelector("meta[name='keywords']");
                    })) ||
                  void 0 === t ||
                  null === (r = t.content) ||
                  void 0 === r ||
                  null === (i = r.replace) ||
                  void 0 === i
                    ? void 0
                    : i.call(r, /\s/g, ''),
                publisher: A({ domain: y.findRootDomain(a) }),
              });
            }
          },
          83790: function (e, n, t) {
            t.d(n, {
              A_: function () {
                return o;
              },
              Iq: function () {
                return i;
              },
              Qg: function () {
                return a;
              },
            });
            var r = t(64358),
              i = ['dooh', 'app', 'site'];
            function o(e) {
              return function (n) {
                return (
                  i.reduce(function (t, i) {
                    return (
                      a(n, i) &&
                        (null != t
                          ? ((0, r.logWarn)(
                              ''
                                .concat(e, " specifies both '")
                                .concat(t, "' and '")
                                .concat(i, "'; dropping the latter."),
                            ),
                            delete n[i])
                          : (t = i)),
                      t
                    );
                  }, null),
                  n
                );
              };
            }
            function a(e, n) {
              return null != e[n] && Object.keys(e[n]).length > 0;
            }
          },
          38196: function (e, n, t) {
            t.d(n, {
              W: function () {
                return o;
              },
            });
            var r = t(64358),
              i = (0, t(15164).eA)('fpdEnrichment'),
              o = (0, r.memoize)(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : window.location.host;
                if (!i.cookiesAreEnabled()) return e;
                var n,
                  t,
                  o = e.split('.');
                if (2 === o.length) return e;
                var a = -2,
                  u = '_rdc'.concat(Date.now()),
                  c = 'writeable';
                do {
                  n = o.slice(a).join('.');
                  var s = new Date((0, r.timestamp)() + 1e4).toUTCString();
                  i.setCookie(u, c, s, 'Lax', n, void 0);
                  var d = i.getCookie(u, void 0);
                  d === c
                    ? ((t = !1),
                      i.setCookie(
                        u,
                        '',
                        'Thu, 01 Jan 1970 00:00:01 GMT',
                        void 0,
                        n,
                        void 0,
                      ))
                    : ((a += -1), (t = Math.abs(a) <= o.length));
                } while (t);
                return n;
              });
          },
          92797: function (e, n, t) {
            t.d(n, {
              Bx: function () {
                return p;
              },
              Cd: function () {
                return s;
              },
              IF: function () {
                return v;
              },
              bA: function () {
                return g;
              },
              o0: function () {
                return f;
              },
              v5: function () {
                return d;
              },
              z3: function () {
                return u;
              },
            });
            var r = t(89062),
              i = t(81432),
              o = t.n(i),
              a = t(68792),
              u = o()({ ready: o().SYNC | o().ASYNC | o().QUEUE }),
              c = (0, a.P)();
            u.ready = (function () {
              var e = u.ready;
              return function () {
                try {
                  return e.apply(u, arguments);
                } finally {
                  c.resolve();
                }
              };
            })();
            var s = c.promise,
              d = u.get;
            function f(e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 15,
                r = e.getHooks({ hook: n });
              0 === r.length && e.before(n, t);
            }
            var l = {};
            function g(e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = t.postInstallAllowed,
                o = void 0 !== i && i;
              u(
                'async',
                function (t) {
                  t.forEach(function (e) {
                    return n.apply(void 0, (0, r.Z)(e));
                  }),
                    o && (l[e] = n);
                },
                e,
              )([]);
            }
            function p(e) {
              for (
                var n = arguments.length,
                  t = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                t[r - 1] = arguments[r];
              var i = l[e];
              if (i) return i.apply(void 0, t);
              d(e).before(function (e, n) {
                n.push(t), e(n);
              });
            }
            function v(e, n) {
              return (
                Object.defineProperties(
                  n,
                  Object.fromEntries(
                    ['before', 'after', 'getHooks', 'removeAll'].map(function (
                      n,
                    ) {
                      return [
                        n,
                        {
                          get: function () {
                            return e[n];
                          },
                        },
                      ];
                    }),
                  ),
                ),
                n
              );
            }
          },
          24679: function (e, n, t) {
            t.d(n, {
              B5: function () {
                return r;
              },
              Mk: function () {
                return o;
              },
              Oh: function () {
                return a;
              },
              pX: function () {
                return i;
              },
            });
            var r = 'native',
              i = 'video',
              o = 'banner',
              a = 'adpod';
          },
          70059: function (e, n, t) {
            t.d(n, {
              Fb: function () {
                return B;
              },
              JL: function () {
                return Z;
              },
              Sg: function () {
                return h;
              },
              Ur: function () {
                return D;
              },
              e6: function () {
                return P;
              },
              eK: function () {
                return _;
              },
              lY: function () {
                return W;
              },
              r4: function () {
                return U;
              },
              xc: function () {
                return m;
              },
              zq: function () {
                return L;
              },
            });
            var r = t(89062),
              i = t(93324),
              o = t(4942),
              a = t(20265),
              u = t(64358),
              c = t(34614),
              s = t(78653),
              d = t(5644),
              f = t(24679);
            function l(e, n) {
              var t =
                ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                e['@@iterator'];
              if (!t) {
                if (
                  Array.isArray(e) ||
                  (t = (function (e, n) {
                    if (!e) return;
                    if ('string' == typeof e) return g(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if (
                      'Arguments' === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    )
                      return g(e, n);
                  })(e)) ||
                  (n && e && 'number' == typeof e.length)
                ) {
                  t && (e = t);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              }
              var o,
                a = !0,
                u = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (u = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            }
            function g(e, n) {
              (null == n || n > e.length) && (n = e.length);
              for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
              return r;
            }
            function p(e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n &&
                  (r = r.filter(function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                  })),
                  t.push.apply(t, r);
              }
              return t;
            }
            function v(e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? p(Object(t), !0).forEach(function (n) {
                      (0, o.Z)(e, n, t[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t),
                    )
                  : p(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n),
                      );
                    });
              }
              return e;
            }
            var h = [],
              m = Object.keys(d.FY).map(function (e) {
                return d.FY[e];
              }),
              b = {
                image: {
                  ortb: {
                    ver: '1.2',
                    assets: [
                      {
                        required: 1,
                        id: 1,
                        img: { type: 3, wmin: 100, hmin: 100 },
                      },
                      { required: 1, id: 2, title: { len: 140 } },
                      { required: 1, id: 3, data: { type: 1 } },
                      { required: 0, id: 4, data: { type: 2 } },
                      {
                        required: 0,
                        id: 5,
                        img: { type: 1, wmin: 20, hmin: 20 },
                      },
                    ],
                  },
                  image: { required: !0 },
                  title: { required: !0 },
                  sponsoredBy: { required: !0 },
                  clickUrl: { required: !0 },
                  body: { required: !1 },
                  icon: { required: !1 },
                },
              },
              y = d.s$,
              w = d.oF,
              E = d.V1,
              C = d.zA,
              A = d.FY,
              T = K(E),
              I = K(y),
              O = { img: 1, js: 2, 1: 'img', 2: 'js' },
              S = 1;
            function k(e) {
              if (
                (e &&
                  e.type &&
                  (function (e) {
                    if (!e || !(0, c.q9)(Object.keys(b), e))
                      return (
                        (0, u.logError)(
                          ''.concat(e, ' nativeParam is not supported'),
                        ),
                        !1
                      );
                    return !0;
                  })(e.type) &&
                  (e = b[e.type]),
                !e || !e.ortb || j(e.ortb))
              )
                return e;
            }
            function B(e) {
              e.forEach(function (e) {
                var n = e.nativeParams || (0, a.Z)(e, 'mediaTypes.native');
                n && (e.nativeParams = k(n)),
                  e.nativeParams &&
                    (e.nativeOrtbRequest =
                      e.nativeParams.ortb ||
                      (function (e) {
                        if (!e && !(0, u.isPlainObject)(e))
                          return void (0, u.logError)(
                            'Native assets object is empty or not an object: ',
                            e,
                          );
                        var n = { ver: '1.2', assets: [] };
                        for (var t in e)
                          if (!C.includes(t))
                            if (A.hasOwnProperty(t))
                              if ('privacyLink' !== t) {
                                var r = e[t],
                                  i = 0;
                                r.required &&
                                  (0, u.isBoolean)(r.required) &&
                                  (i = Number(r.required));
                                var o = { id: n.assets.length, required: i };
                                if (t in E)
                                  (o.data = { type: y[E[t]] }),
                                    r.len && (o.data.len = r.len);
                                else if ('icon' === t || 'image' === t) {
                                  if (
                                    ((o.img = {
                                      type: 'icon' === t ? w.ICON : w.MAIN,
                                    }),
                                    r.aspect_ratios)
                                  )
                                    if ((0, u.isArray)(r.aspect_ratios))
                                      if (r.aspect_ratios.length) {
                                        var a = r.aspect_ratios[0],
                                          c = a.min_width,
                                          s = a.min_height;
                                        (0, u.isInteger)(c) &&
                                        (0, u.isInteger)(s)
                                          ? ((o.img.wmin = c), (o.img.hmin = s))
                                          : (0, u.logError)(
                                              'image.aspect_ratios min_width or min_height are invalid: ',
                                              c,
                                              s,
                                            );
                                        var d = r.aspect_ratios
                                          .filter(function (e) {
                                            return (
                                              e.ratio_width && e.ratio_height
                                            );
                                          })
                                          .map(function (e) {
                                            return ''
                                              .concat(e.ratio_width, ':')
                                              .concat(e.ratio_height);
                                          });
                                        d.length > 0 &&
                                          (o.img.ext = { aspectratios: d });
                                      } else
                                        (0, u.logError)(
                                          "image.aspect_ratios was passed, but it's empty:",
                                          r.aspect_ratios,
                                        );
                                    else
                                      (0, u.logError)(
                                        "image.aspect_ratios was passed, but it's not a an array:",
                                        r.aspect_ratios,
                                      );
                                  r.sizes &&
                                    (2 === r.sizes.length &&
                                    (0, u.isInteger)(r.sizes[0]) &&
                                    (0, u.isInteger)(r.sizes[1])
                                      ? ((o.img.w = r.sizes[0]),
                                        (o.img.h = r.sizes[1]),
                                        delete o.img.hmin,
                                        delete o.img.wmin)
                                      : (0, u.logError)(
                                          'image.sizes was passed, but its value is not an array of integers:',
                                          r.sizes,
                                        ));
                                } else
                                  'title' === t
                                    ? (o.title = { len: r.len || 140 })
                                    : 'ext' === t &&
                                      ((o.ext = r), delete o.required);
                                n.assets.push(o);
                              } else n.privacy = 1;
                            else
                              (0, u.logError)(
                                'Unrecognized native asset code: '.concat(
                                  t,
                                  '. Asset will be ignored.',
                                ),
                              );
                        return n;
                      })(e.nativeParams));
              });
            }
            function j(e) {
              var n = e.assets;
              if (!Array.isArray(n) || 0 === n.length)
                return (
                  (0, u.logError)(
                    "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                    n,
                  ),
                  !1
                );
              var t = n.map(function (e) {
                return e.id;
              });
              return n.length !== new Set(t).size ||
                t.some(function (e) {
                  return e !== parseInt(e, 10);
                })
                ? ((0, u.logError)(
                    "each asset object must have 'id' property, it must be unique and it must be an integer",
                  ),
                  !1)
                : e.hasOwnProperty('eventtrackers') &&
                  !Array.isArray(e.eventtrackers)
                ? ((0, u.logError)(
                    'ortb.eventtrackers is not an array. Eventtrackers: ',
                    e.eventtrackers,
                  ),
                  !1)
                : n.every(function (e) {
                    return (function (e) {
                      if (!(0, u.isPlainObject)(e))
                        return (
                          (0, u.logError)(
                            'asset must be an object. Provided asset: ',
                            e,
                          ),
                          !1
                        );
                      if (e.img) {
                        if (
                          !(0, u.isNumber)(e.img.w) &&
                          !(0, u.isNumber)(e.img.wmin)
                        )
                          return (
                            (0, u.logError)(
                              "for img asset there must be 'w' or 'wmin' property",
                            ),
                            !1
                          );
                        if (
                          !(0, u.isNumber)(e.img.h) &&
                          !(0, u.isNumber)(e.img.hmin)
                        )
                          return (
                            (0, u.logError)(
                              "for img asset there must be 'h' or 'hmin' property",
                            ),
                            !1
                          );
                      } else if (e.title) {
                        if (!(0, u.isNumber)(e.title.len))
                          return (
                            (0, u.logError)(
                              "for title asset there must be 'len' property defined",
                            ),
                            !1
                          );
                      } else if (e.data) {
                        if (!(0, u.isNumber)(e.data.type))
                          return (
                            (0, u.logError)(
                              "for data asset 'type' property must be a number",
                            ),
                            !1
                          );
                      } else if (
                        e.video &&
                        !(
                          Array.isArray(e.video.mimes) &&
                          Array.isArray(e.video.protocols) &&
                          (0, u.isNumber)(e.video.minduration) &&
                          (0, u.isNumber)(e.video.maxduration)
                        )
                      )
                        return (
                          (0, u.logError)(
                            'video asset is not properly configured',
                          ),
                          !1
                        );
                      return !0;
                    })(e);
                  });
            }
            function U(e) {
              var n,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = t.index,
                i = void 0 === r ? s.K.index : r,
                o = i.getAdUnit(e);
              if (!o) return !1;
              var a = o.nativeOrtbRequest,
                u =
                  (null === (n = e.native) || void 0 === n ? void 0 : n.ortb) ||
                  z(e.native, a);
              return R(u, a);
            }
            function R(e, n) {
              if (!(0, a.Z)(e, 'link.url'))
                return (
                  (0, u.logError)(
                    "native response doesn't have 'link' property. Ortb response: ",
                    e,
                  ),
                  !1
                );
              var t = n.assets
                  .filter(function (e) {
                    return 1 === e.required;
                  })
                  .map(function (e) {
                    return e.id;
                  }),
                r = e.assets.map(function (e) {
                  return e.id;
                }),
                i = t.every(function (e) {
                  return (0, c.q9)(r, e);
                });
              return (
                i ||
                  (0, u.logError)(
                    "didn't receive a bid with all required assets. Required ids: "
                      .concat(t, ', but received ids in response: ')
                      .concat(r),
                  ),
                i
              );
            }
            function P(e, n) {
              var t = n.native.ortb || F(n.native);
              return (
                'click' === e.action
                  ? (function (e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                        t = (
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {}
                        ).fetchURL,
                        r = void 0 === t ? u.triggerPixel : t;
                      if (n) {
                        var i,
                          o = (e.assets || [])
                            .filter(function (e) {
                              return e.link;
                            })
                            .reduce(function (e, n) {
                              return (e[n.id] = n.link), e;
                            }, {}),
                          a =
                            (null === (i = e.link) || void 0 === i
                              ? void 0
                              : i.clicktrackers) || [],
                          c = o[n],
                          s = a;
                        c && (s = c.clicktrackers || []),
                          s.forEach(function (e) {
                            return r(e);
                          });
                      } else {
                        var d;
                        (
                          (null === (d = e.link) || void 0 === d
                            ? void 0
                            : d.clicktrackers) || []
                        ).forEach(function (e) {
                          return r(e);
                        });
                      }
                    })(t, null == e ? void 0 : e.assetId)
                  : (function (e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        t = n.runMarkup,
                        r =
                          void 0 === t
                            ? function (e) {
                                return (0, u.insertHtmlIntoIframe)(e);
                              }
                            : t,
                        i = n.fetchURL,
                        o = void 0 === i ? u.triggerPixel : i,
                        a = (e.eventtrackers || [])
                          .filter(function (e) {
                            return e.event === S;
                          })
                          .reduce(
                            function (e, n) {
                              return (
                                O.hasOwnProperty(n.method) &&
                                  e[O[n.method]].push(n.url),
                                e
                              );
                            },
                            { img: [], js: [] },
                          ),
                        c = a.img,
                        s = a.js;
                      e.imptrackers && (c = c.concat(e.imptrackers));
                      c.forEach(function (e) {
                        return o(e);
                      }),
                        (s = s.map(function (e) {
                          return '<script async src="'.concat(e, '"></script>');
                        })),
                        e.jstracker && (s = s.concat([e.jstracker]));
                      s.length && r(s.join('\n'));
                    })(t),
                e.action
              );
            }
            function D(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = n.index,
                r = void 0 === t ? s.K.index : t,
                i = {},
                o = r.getAdUnit(e);
              (0, a.Z)(o, 'nativeParams.rendererUrl')
                ? (e.native.rendererUrl = x(o.nativeParams.rendererUrl))
                : (0, a.Z)(o, 'nativeParams.adTemplate') &&
                  (e.native.adTemplate = x(o.nativeParams.adTemplate));
              var u = !1 !== (0, a.Z)(o, 'nativeParams.sendTargetingKeys'),
                c = N(o),
                d = v(v({}, e.native), e.native.ext);
              return (
                delete d.ext,
                Object.keys(d).forEach(function (n) {
                  var t = c[n],
                    r =
                      x(e.native[n]) || x((0, a.Z)(e, 'native.ext.'.concat(n)));
                  if ('adTemplate' !== n && t && r) {
                    var s = (0, a.Z)(o, 'nativeParams.'.concat(n, '.sendId'));
                    if (
                      ('boolean' != typeof s &&
                        (s = (0, a.Z)(
                          o,
                          'nativeParams.ext.'.concat(n, '.sendId'),
                        )),
                      s)
                    )
                      r = ''.concat(t, ':').concat(e.adId);
                    var d = (0, a.Z)(
                      o,
                      'nativeParams.'.concat(n, '.sendTargetingKeys'),
                    );
                    'boolean' != typeof d &&
                      (d = (0, a.Z)(
                        o,
                        'nativeParams.ext.'.concat(n, '.sendTargetingKeys'),
                      )),
                      ('boolean' == typeof d ? d : u) && (i[t] = r);
                  }
                }),
                i
              );
            }
            function q(e, n, t) {
              var r,
                i,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                a = o.index,
                u = void 0 === a ? s.K.index : a,
                c = { message: 'assetResponse', adId: e.adId },
                f = u.getAdUnit(n),
                l = n.native;
              return (
                n.native.ortb
                  ? (c.ortb = n.native.ortb)
                  : null !== (r = f.mediaTypes) &&
                    void 0 !== r &&
                    null !== (i = r.native) &&
                    void 0 !== i &&
                    i.ortb &&
                    (c.ortb = z(n.native, f.nativeOrtbRequest)),
                (c.assets = []),
                (null == t ? Object.keys(l) : t).forEach(function (e) {
                  if ('adTemplate' === e && l[e]) c.adTemplate = x(l[e]);
                  else if ('rendererUrl' === e && l[e]) c.rendererUrl = x(l[e]);
                  else if ('ext' === e)
                    Object.keys(l[e]).forEach(function (n) {
                      if (l[e][n]) {
                        var t = x(l[e][n]);
                        c.assets.push({ key: n, value: t });
                      }
                    });
                  else if (l[e] && d.FY.hasOwnProperty(e)) {
                    var n = x(l[e]);
                    c.assets.push({ key: e, value: n });
                  }
                }),
                c
              );
            }
            function _(e, n) {
              var t = e.assets.map(function (e) {
                return (0, u.getKeyByValue)(d.FY, e);
              });
              return q(e, n, t);
            }
            function Z(e, n) {
              return q(e, n, null);
            }
            function x(e) {
              return (null == e ? void 0 : e.url) || e;
            }
            function N(e) {
              var n = {};
              return (
                (0, a.Z)(e, 'nativeParams.ext') &&
                  Object.keys(e.nativeParams.ext).forEach(function (e) {
                    n[e] = 'hb_native_'.concat(e);
                  }),
                v(v({}, d.FY), n)
              );
            }
            function M(e) {
              if (j(e)) {
                var n,
                  t = {},
                  r = l(e.assets);
                try {
                  var i = function () {
                    var r = n.value;
                    if (r.title) {
                      var i = {
                        required: !!r.required && Boolean(r.required),
                        len: r.title.len,
                      };
                      t.title = i;
                    } else if (r.img) {
                      var o = { required: !!r.required && Boolean(r.required) };
                      if (r.img.w && r.img.h) o.sizes = [r.img.w, r.img.h];
                      else if (r.img.wmin && r.img.hmin) {
                        var a = (function (e, n) {
                          for (; e && n && e !== n; )
                            e > n ? (e -= n) : (n -= e);
                          return e || n;
                        })(r.img.wmin, r.img.hmin);
                        o.aspect_ratios = [
                          {
                            min_width: r.img.wmin,
                            min_height: r.img.hmin,
                            ratio_width: r.img.wmin / a,
                            ratio_height: r.img.hmin / a,
                          },
                        ];
                      }
                      r.img.type === w.MAIN ? (t.image = o) : (t.icon = o);
                    } else if (r.data) {
                      var u = Object.keys(y).find(function (e) {
                          return y[e] === r.data.type;
                        }),
                        c = Object.keys(E).find(function (e) {
                          return E[e] === u;
                        });
                      (t[c] = {
                        required: !!r.required && Boolean(r.required),
                      }),
                        r.data.len && (t[c].len = r.data.len);
                    }
                    e.privacy && (t.privacyLink = { required: !1 });
                  };
                  for (r.s(); !(n = r.n()).done; ) i();
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                return t;
              }
            }
            function W(e) {
              if (!e || !(0, u.isArray)(e)) return e;
              if (
                !e.some(function (e) {
                  var n;
                  return null ===
                    (n = ((null == e ? void 0 : e.mediaTypes) || {})[f.B5]) ||
                    void 0 === n
                    ? void 0
                    : n.ortb;
                })
              )
                return e;
              var n,
                t = (0, u.deepClone)(e),
                r = l(t);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  i.mediaTypes &&
                    i.mediaTypes[f.B5] &&
                    i.mediaTypes[f.B5].ortb &&
                    ((i.mediaTypes[f.B5] = Object.assign(
                      (0, u.pick)(i.mediaTypes[f.B5], C),
                      M(i.mediaTypes[f.B5].ortb),
                    )),
                    (i.nativeParams = k(i.mediaTypes[f.B5])));
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return t;
            }
            function F(e) {
              var n = { link: {}, eventtrackers: [] };
              return (
                Object.entries(e).forEach(function (e) {
                  var t = (0, i.Z)(e, 2),
                    r = t[0],
                    o = t[1];
                  switch (r) {
                    case 'clickUrl':
                      n.link.url = o;
                      break;
                    case 'clickTrackers':
                      n.link.clicktrackers = Array.isArray(o) ? o : [o];
                      break;
                    case 'impressionTrackers':
                      (Array.isArray(o) ? o : [o]).forEach(function (e) {
                        n.eventtrackers.push({
                          event: S,
                          method: O.img,
                          url: e,
                        });
                      });
                      break;
                    case 'javascriptTrackers':
                      n.jstracker = Array.isArray(o) ? o.join('') : o;
                      break;
                    case 'privacyLink':
                      n.privacy = o;
                  }
                }),
                n
              );
            }
            function z(e, n) {
              var t = v(v({}, F(e)), {}, { assets: [] });
              function r(e, r) {
                var i = n.assets.find(e);
                null != i && (r((i = (0, u.deepClone)(i))), t.assets.push(i));
              }
              return (
                Object.keys(e)
                  .filter(function (n) {
                    return !!e[n];
                  })
                  .forEach(function (n) {
                    var t = x(e[n]);
                    switch (n) {
                      case 'title':
                        r(
                          function (e) {
                            return null != e.title;
                          },
                          function (e) {
                            e.title = { text: t };
                          },
                        );
                        break;
                      case 'image':
                      case 'icon':
                        var i = 'image' === n ? w.MAIN : w.ICON;
                        r(
                          function (e) {
                            return null != e.img && e.img.type === i;
                          },
                          function (e) {
                            e.img = { url: t };
                          },
                        );
                        break;
                      default:
                        n in E &&
                          r(
                            function (e) {
                              return null != e.data && e.data.type === y[E[n]];
                            },
                            function (e) {
                              e.data = { value: t };
                            },
                          );
                    }
                  }),
                t
              );
            }
            function L(e, n) {
              var t = {},
                i = (null == n ? void 0 : n.assets) || [];
              (t.clickUrl = e.link.url), (t.privacyLink = e.privacy);
              var o,
                a = l((null == e ? void 0 : e.assets) || []);
              try {
                var u = function () {
                  var e = o.value,
                    n = i.find(function (n) {
                      return e.id === n.id;
                    });
                  e.title
                    ? (t.title = e.title.text)
                    : e.img
                    ? (t[n.img.type === w.MAIN ? 'image' : 'icon'] = {
                        url: e.img.url,
                        width: e.img.w,
                        height: e.img.h,
                      })
                    : e.data && (t[T[I[n.data.type]]] = e.data.value);
                };
                for (a.s(); !(o = a.n()).done; ) u();
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              t.impressionTrackers = [];
              var c,
                s = [];
              e.imptrackers &&
                (c = t.impressionTrackers).push.apply(
                  c,
                  (0, r.Z)(e.imptrackers),
                );
              var d,
                f = l((null == e ? void 0 : e.eventtrackers) || []);
              try {
                for (f.s(); !(d = f.n()).done; ) {
                  var g = d.value;
                  g.event === S &&
                    g.method === O.img &&
                    t.impressionTrackers.push(g.url),
                    g.event === S && g.method === O.js && s.push(g.url);
                }
              } catch (e) {
                f.e(e);
              } finally {
                f.f();
              }
              return (
                (s = s.map(function (e) {
                  return '<script async src="'.concat(e, '"></script>');
                })),
                null != e && e.jstracker && s.push(e.jstracker),
                s.length && (t.javascriptTrackers = s.join('\n')),
                t
              );
            }
            function K(e) {
              var n = {};
              for (var t in e) n[e[t]] = t;
              return n;
            }
          },
          34614: function (e, n, t) {
            function r(e, n, t) {
              return (e && e.includes(n, t)) || !1;
            }
            function i() {
              return Array.from.apply(Array, arguments);
            }
            function o(e, n, t) {
              return e && e.find(n, t);
            }
            function a(e, n, t) {
              return e && e.findIndex(n, t);
            }
            t.d(n, {
              Oc: function () {
                return i;
              },
              cx: function () {
                return a;
              },
              q9: function () {
                return r;
              },
              sE: function () {
                return o;
              },
            });
          },
          23866: function (e, n, t) {
            t.d(n, {
              zh: function () {
                return ce;
              },
              O5: function () {
                return de;
              },
              ew: function () {
                return pe;
              },
            });
            var r = t(93324),
              i = t(4942),
              o = t(78640),
              a = t(64358),
              u = t(20265),
              c = t(96475),
              s = t(52021),
              d = t(70059),
              f = t(5644),
              l = t(78653),
              g = t(34614),
              p = t(35706),
              v = t(3193),
              h = f.FP,
              m = h.AD_RENDER_FAILED,
              b = h.AD_RENDER_SUCCEEDED;
            function y(e) {
              var n = e.reason,
                t = e.message,
                r = e.bid,
                i = e.id,
                o = { reason: n, message: t };
              r && (o.bid = r),
                i && (o.adId = i),
                (0, a.logError)(t),
                s.emit(m, o);
            }
            function w(e) {
              var n = e.doc,
                t = e.bid,
                r = e.id,
                i = { doc: n };
              t && (i.bid = t), r && (i.adId = r), s.emit(b, i);
            }
            var E = f.FP.BID_WON,
              C = f.FP.STALE_RENDER,
              A = new WeakSet(),
              T = {
                'Prebid Request': function (e, n, t) {
                  if (null == t)
                    return void y({
                      reason: f.q_.CANNOT_FIND_AD,
                      message:
                        "Cannot find ad for cross-origin render request: '".concat(
                          n.adId,
                          "'",
                        ),
                      id: n.adId,
                    });
                  if (
                    t.status === f.UE.fe &&
                    ((0, a.logWarn)(
                      'Ad id '.concat(t.adId, ' has been rendered before'),
                    ),
                    s.emit(C, t),
                    (0, u.Z)(
                      v.vc.getConfig('auctionOptions'),
                      'suppressStaleRender',
                    ))
                  )
                    return;
                  try {
                    !(function (e, n) {
                      var t = e.adId,
                        r = e.ad,
                        i = e.adUrl,
                        o = e.width,
                        u = e.height,
                        c = e.renderer,
                        s = e.cpm,
                        d = e.originalCpm;
                      (0, p.Pd)(c)
                        ? (0, p._U)(c, e)
                        : t &&
                          (O(e),
                          n({
                            message: 'Prebid Response',
                            ad: (0, a.replaceAuctionPrice)(r, d || s),
                            adUrl: (0, a.replaceAuctionPrice)(i, d || s),
                            adId: t,
                            width: o,
                            height: u,
                          }));
                    })(t, e);
                  } catch (e) {
                    return void y({
                      reason: f.q_.EXCEPTION,
                      message: e.message,
                      id: n.adId,
                      bid: t,
                    });
                  }
                  l.K.addWinningBid(t), s.emit(E, t);
                },
                'Prebid Event': function (e, n, t) {
                  if (null == t)
                    return void (0, a.logError)(
                      "Cannot find ad '".concat(
                        n.adId,
                        "' for x-origin event request",
                      ),
                    );
                  if (t.status !== f.UE.fe)
                    return void (0, a.logWarn)(
                      "Received x-origin event request without corresponding render request for ad '".concat(
                        n.adId,
                        "'",
                      ),
                    );
                  switch (n.event) {
                    case f.FP.AD_RENDER_FAILED:
                      y({
                        bid: t,
                        id: n.adId,
                        reason: n.info.reason,
                        message: n.info.message,
                      });
                      break;
                    case f.FP.AD_RENDER_SUCCEEDED:
                      w({ doc: null, bid: t, id: n.adId });
                      break;
                    default:
                      (0, a.logError)(
                        "Received x-origin event request for unsupported event: '"
                          .concat(n.event, "' (adId: '")
                          .concat(n.adId, "')"),
                      );
                  }
                },
              };
            function I(e) {
              var n = e.message ? 'message' : 'data',
                t = {};
              try {
                t = JSON.parse(e[n]);
              } catch (e) {
                return;
              }
              if (t && t.adId && t.message) {
                var r = (0, g.sE)(l.K.getBidsReceived(), function (e) {
                  return e.adId === t.adId;
                });
                T.hasOwnProperty(t.message) &&
                  T[t.message](
                    (function (e) {
                      return null == e.origin && 0 === e.ports.length
                        ? function () {
                            var e =
                              'Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870';
                            throw ((0, a.logError)(e), new Error(e));
                          }
                        : e.ports.length > 0
                        ? function (n) {
                            e.ports[0].postMessage(JSON.stringify(n));
                          }
                        : function (n) {
                            e.source.postMessage(JSON.stringify(n), e.origin);
                          };
                    })(e),
                    t,
                    r,
                  );
              }
            }
            function O(e) {
              var n = e.adId,
                t = e.adUnitCode,
                r = e.width,
                i = e.height;
              ['div', 'iframe'].forEach(function (e) {
                var o = (function (e) {
                  var r = (function (e, n) {
                      return (0, a.isGptPubadsDefined)()
                        ? (function (e) {
                            var n = (0, g.sE)(
                              window.googletag.pubads().getSlots(),
                              function (n) {
                                return (0, g.sE)(
                                  n.getTargetingKeys(),
                                  function (t) {
                                    return (0, g.q9)(n.getTargeting(t), e);
                                  },
                                );
                              },
                            );
                            return n ? n.getSlotElementId() : null;
                          })(e)
                        : (0, a.isApnGetTagDefined)()
                        ? (function (e) {
                            var n = window.apntag.getTag(e);
                            return n && n.targetId;
                          })(n)
                        : n;
                    })(n, t),
                    i = document.getElementById(r);
                  return i && i.querySelector(e);
                })(e + ':not([style*="display: none"])');
                if (o) {
                  var u = o.style;
                  (u.width = r ? r + 'px' : '100%'), (u.height = i + 'px');
                } else (0, a.logWarn)('Unable to locate matching page element for adUnitCode '.concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
              });
            }
            Object.assign(T, {
              'Prebid Native': function (e, n, t) {
                if (null == t)
                  return void (0, a.logError)(
                    "Cannot find ad for x-origin event request: '".concat(
                      n.adId,
                      "'",
                    ),
                  );
                A.has(t) || (A.add(t), l.K.addWinningBid(t), s.emit(E, t));
                switch (n.action) {
                  case 'assetRequest':
                    e((0, d.eK)(n, t));
                    break;
                  case 'allAssetRequest':
                    e((0, d.JL)(n, t));
                    break;
                  case 'resizeNativeHeight':
                    (t.height = n.height), (t.width = n.width), O(t);
                    break;
                  default:
                    (0, d.e6)(n, t);
                }
              },
            });
            var S = t(11974),
              k = t(18621),
              B = t(92797),
              j = t(53777),
              U = t(875),
              R = t(69626),
              P = t(15164),
              D = t(86104),
              q = t(99128),
              _ = t(68792),
              Z = t(54078),
              x = t(34516),
              N = t(90154),
              M = (0, o.R)(),
              W = S.k_.triggerUserSyncs,
              F = f.FP,
              z = F.ADD_AD_UNITS,
              L = F.BID_WON,
              K = F.REQUEST_BIDS,
              H = F.SET_TARGETING,
              G = F.STALE_RENDER,
              V = f.q_,
              J = V.PREVENT_WRITING_ON_MAIN_DOCUMENT,
              Q = V.NO_AD,
              Y = V.EXCEPTION,
              $ = V.CANNOT_FIND_AD,
              X = V.MISSING_DOC_OR_ADID,
              ee = {
                bidWon: function (e) {
                  var n = l.K.getBidsRequested()
                    .map(function (e) {
                      return e.bids.map(function (e) {
                        return e.adUnitCode;
                      });
                    })
                    .reduce(a.flatten)
                    .filter(a.uniques);
                  if (!(0, a.contains)(n, e))
                    return void (0, a.logError)(
                      'The "' + e + '" placement is not defined.',
                    );
                  return !0;
                },
              };
            function ne(e, n, t) {
              e.defaultView &&
                e.defaultView.frameElement &&
                ((e.defaultView.frameElement.width = n),
                (e.defaultView.frameElement.height = t));
            }
            function te(e, n) {
              var t = [];
              return (
                (0, a.isArray)(e) &&
                  (n ? e.length === n : e.length > 0) &&
                  (e.every(function (e) {
                    return (0, a.isArrayOfNums)(e, 2);
                  })
                    ? (t = e)
                    : (0, a.isArrayOfNums)(e, 2) && t.push(e)),
                t
              );
            }
            function re(e) {
              var n = (0, a.deepClone)(e),
                t = n.mediaTypes.banner,
                r = te(t.sizes);
              return (
                r.length > 0
                  ? ((t.sizes = r), (n.sizes = r))
                  : ((0, a.logError)(
                      'Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.',
                    ),
                    delete n.mediaTypes.banner),
                n
              );
            }
            function ie(e) {
              var n = (0, a.deepClone)(e),
                t = n.mediaTypes.video;
              if (t.playerSize) {
                var r = 'number' == typeof t.playerSize[0] ? 2 : 1,
                  i = te(t.playerSize, r);
                i.length > 0
                  ? (2 === r &&
                      (0, a.logInfo)(
                        "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format.",
                      ),
                    (t.playerSize = i),
                    (n.sizes = i))
                  : ((0, a.logError)(
                      'Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.',
                    ),
                    delete n.mediaTypes.video.playerSize);
              }
              return n;
            }
            function oe(e) {
              var n = (0, a.deepClone)(e),
                t = n.mediaTypes.native;
              if (t.ortb) {
                var r = Object.keys(f.FY).filter(function (e) {
                    return f.FY[e].includes('hb_native_');
                  }),
                  i = Object.keys(t).filter(function (e) {
                    return r.includes(e);
                  });
                i.length > 0 &&
                  ((0, a.logError)(
                    'when using native OpenRTB format, you cannot use legacy native properties. Deleting '.concat(
                      i,
                      ' keys from request.',
                    ),
                  ),
                  i.forEach(function (e) {
                    return delete n.mediaTypes.native[e];
                  }));
              }
              return (
                t.image &&
                  t.image.sizes &&
                  !Array.isArray(t.image.sizes) &&
                  ((0, a.logError)(
                    'Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.',
                  ),
                  delete n.mediaTypes.native.image.sizes),
                t.image &&
                  t.image.aspect_ratios &&
                  !Array.isArray(t.image.aspect_ratios) &&
                  ((0, a.logError)(
                    'Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.',
                  ),
                  delete n.mediaTypes.native.image.aspect_ratios),
                t.icon &&
                  t.icon.sizes &&
                  !Array.isArray(t.icon.sizes) &&
                  ((0, a.logError)(
                    'Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.',
                  ),
                  delete n.mediaTypes.native.icon.sizes),
                n
              );
            }
            function ae(e, n) {
              var t = (0, u.Z)(e, 'mediaTypes.'.concat(n, '.pos'));
              if (!(0, a.isNumber)(t) || isNaN(t) || !isFinite(t)) {
                var r = "Value of property 'pos' on ad unit ".concat(
                  e.code,
                  ' should be of type: Number',
                );
                (0, a.logWarn)(r),
                  s.emit(f.FP.AUCTION_DEBUG, { type: 'WARNING', arguments: r }),
                  delete e.mediaTypes[n].pos;
              }
              return e;
            }
            function ue(e) {
              var n = function (n) {
                  return "adUnit.code '".concat(e.code, "' ").concat(n);
                },
                t = e.mediaTypes,
                r = e.bids;
              return null == r || (0, a.isArray)(r)
                ? null == r && null == e.ortb2Imp
                  ? ((0, a.logError)(
                      n(
                        "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction",
                      ),
                    ),
                    null)
                  : t && 0 !== Object.keys(t).length
                  ? (null == e.ortb2Imp ||
                      (null != r && 0 !== r.length) ||
                      ((e.bids = [{ bidder: null }]),
                      (0, a.logMessage)(
                        n(
                          "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters",
                        ),
                      )),
                    e)
                  : ((0, a.logError)(
                      n(
                        "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.",
                      ),
                    ),
                    null)
                : ((0, a.logError)(
                    n(
                      "defines 'adUnit.bids' that is not an array. Removing adUnit from auction",
                    ),
                  ),
                  null);
            }
            (0, j.dF)(),
              (M.bidderSettings = M.bidderSettings || {}),
              (M.libLoaded = !0),
              (M.version = 'v8.13.0'),
              (0, a.logInfo)('Prebid.js v8.13.0 loaded'),
              (M.installedModules = M.installedModules || []),
              (M.adUnits = M.adUnits || []),
              (M.triggerUserSyncs = W);
            var ce = {
              validateAdUnit: ue,
              validateBannerMediaType: re,
              validateSizes: te,
            };
            Object.assign(ce, { validateNativeMediaType: oe }),
              Object.assign(ce, { validateVideoMediaType: ie });
            var se,
              de = (0, B.z3)(
                'sync',
                function (e) {
                  var n = [];
                  return (
                    e.forEach(function (e) {
                      if (null != (e = ue(e))) {
                        var t,
                          r,
                          i,
                          o = e.mediaTypes;
                        o.banner &&
                          ((t = re(e)),
                          o.banner.hasOwnProperty('pos') &&
                            (t = ae(t, 'banner'))),
                          o.video &&
                            ((r = ie(t || e)),
                            o.video.hasOwnProperty('pos') &&
                              (r = ae(r, 'video'))),
                          o.native && (i = oe(r || t || e));
                        var a = Object.assign({}, t, r, i);
                        n.push(a);
                      }
                    }),
                    n
                  );
                },
                'checkAdUnitSetup',
              );
            function fe(e) {
              e.forEach(function (e) {
                return (0, N.cx)(e);
              });
            }
            function le(e) {
              var n = l.K[e]().filter(
                  a.bind.call(a.adUnitsFilter, this, l.K.getAdUnitCodes()),
                ),
                t = l.K.getLastAuctionId();
              return n
                .map(function (e) {
                  return e.adUnitCode;
                })
                .filter(a.uniques)
                .map(function (e) {
                  return n.filter(function (n) {
                    return n.auctionId === t && n.adUnitCode === e;
                  });
                })
                .filter(function (e) {
                  return e && e[0] && e[0].adUnitCode;
                })
                .map(function (e) {
                  return (0, i.Z)({}, e[0].adUnitCode, { bids: e });
                })
                .reduce(function (e, n) {
                  return Object.assign(e, n);
                }, {});
            }
            function ge(e, n, t) {
              var r = n.querySelector(t);
              (e.parentNode && e.parentNode === r) ||
                (0, a.insertElement)(e, n, t);
            }
            (M.getAdserverTargetingForAdUnitCodeStr = function (e) {
              if (
                ((0, a.logInfo)(
                  'Invoking pbjs.getAdserverTargetingForAdUnitCodeStr',
                  arguments,
                ),
                e)
              ) {
                var n = M.getAdserverTargetingForAdUnitCode(e);
                return (0, a.transformAdServerTargetingObj)(n);
              }
              (0, a.logMessage)(
                'Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode',
              );
            }),
              (M.getHighestUnusedBidResponseForAdUnitCode = function (e) {
                if (e) {
                  var n = l.K.getAllBidsForAdUnitCode(e).filter(k.TL);
                  return n.length ? n.reduce(a.getHighestCpm) : {};
                }
                (0, a.logMessage)(
                  'Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode',
                );
              }),
              (M.getAdserverTargetingForAdUnitCode = function (e) {
                return M.getAdserverTargeting(e)[e];
              }),
              (M.getAdserverTargeting = function (e) {
                return (
                  (0, a.logInfo)(
                    'Invoking pbjs.getAdserverTargeting',
                    arguments,
                  ),
                  k.q0.getAllTargeting(e)
                );
              }),
              (M.getConsentMetadata = function () {
                return (
                  (0, a.logInfo)('Invoking pbjs.getConsentMetadata'),
                  x.NO.getConsentMeta()
                );
              }),
              (M.getNoBids = function () {
                return (
                  (0, a.logInfo)('Invoking pbjs.getNoBids', arguments),
                  le('getNoBids')
                );
              }),
              (M.getNoBidsForAdUnitCode = function (e) {
                return {
                  bids: l.K.getNoBids().filter(function (n) {
                    return n.adUnitCode === e;
                  }),
                };
              }),
              (M.getBidResponses = function () {
                return (
                  (0, a.logInfo)('Invoking pbjs.getBidResponses', arguments),
                  le('getBidsReceived')
                );
              }),
              (M.getBidResponsesForAdUnitCode = function (e) {
                return {
                  bids: l.K.getBidsReceived().filter(function (n) {
                    return n.adUnitCode === e;
                  }),
                };
              }),
              (M.setTargetingForGPTAsync = function (e, n) {
                if (
                  ((0, a.logInfo)(
                    'Invoking pbjs.setTargetingForGPTAsync',
                    arguments,
                  ),
                  (0, a.isGptPubadsDefined)())
                ) {
                  var t = k.q0.getAllTargeting(e);
                  k.q0.resetPresetTargeting(e, n),
                    k.q0.setTargetingForGPT(t, n),
                    Object.keys(t).forEach(function (e) {
                      Object.keys(t[e]).forEach(function (n) {
                        'hb_adid' === n &&
                          l.K.setStatusForBids(t[e][n], f.UE.CK);
                      });
                    }),
                    s.emit(H, t);
                } else
                  (0, a.logError)(
                    'window.googletag is not defined on the page',
                  );
              }),
              (M.setTargetingForAst = function (e) {
                (0, a.logInfo)('Invoking pbjs.setTargetingForAn', arguments),
                  k.q0.isApntagDefined()
                    ? (k.q0.setTargetingForAst(e),
                      s.emit(H, k.q0.getAllTargeting()))
                    : (0, a.logError)(
                        'window.apntag is not defined on the page',
                      );
              }),
              (M.renderAd = (0, B.z3)('async', function (e, n, t) {
                if (
                  ((0, a.logInfo)('Invoking pbjs.renderAd', arguments),
                  (0, a.logMessage)('Calling renderAd with adId :' + n),
                  n)
                )
                  try {
                    var r = l.K.findBidByAdId(n);
                    if (!r) {
                      var i =
                        'Error trying to write ad. Cannot find ad by given id : '.concat(
                          n,
                        );
                      return void y({ reason: $, message: i, id: n });
                    }
                    if (
                      r.status === f.UE.fe &&
                      ((0, a.logWarn)(
                        'Ad id '.concat(r.adId, ' has been rendered before'),
                      ),
                      s.emit(G, r),
                      (0, u.Z)(
                        v.vc.getConfig('auctionOptions'),
                        'suppressStaleRender',
                      ))
                    )
                      return;
                    if (
                      ((r.ad = (0, a.replaceAuctionPrice)(
                        r.ad,
                        r.originalCpm || r.cpm,
                      )),
                      (r.adUrl = (0, a.replaceAuctionPrice)(
                        r.adUrl,
                        r.originalCpm || r.cpm,
                      )),
                      t && t.clickThrough)
                    ) {
                      var o = t.clickThrough;
                      (r.ad = (0, a.replaceClickThrough)(r.ad, o)),
                        (r.adUrl = (0, a.replaceClickThrough)(r.adUrl, o));
                    }
                    l.K.addWinningBid(r), s.emit(L, r);
                    var c = r.height,
                      d = r.width,
                      g = r.ad,
                      h = r.mediaType,
                      m = r.adUrl,
                      b = r.renderer,
                      E = r.adUnitCode,
                      C = M.adUnits.filter(function (e) {
                        return e.code === E;
                      }),
                      A = M.videoModule;
                    if (C.video && A) return void A.renderBid(C.video.divId, r);
                    if (!e) {
                      var T = 'Error trying to write ad Id :'.concat(
                        n,
                        ' to the page. Missing document',
                      );
                      return void y({ reason: X, message: T, id: n });
                    }
                    var I = document.createComment(
                      'Creative '
                        .concat(r.creativeId, ' served by ')
                        .concat(r.bidder, ' Prebid.js Header Bidding'),
                    );
                    if (((0, a.insertElement)(I, e, 'html'), (0, p.Pd)(b)))
                      (0, p._U)(b, r, e),
                        ge(I, e, 'html'),
                        w({ doc: e, bid: r, id: n });
                    else if (
                      (e === document && !(0, a.inIframe)()) ||
                      'video' === h
                    ) {
                      var O =
                        'Error trying to write ad. Ad render call ad id '.concat(
                          n,
                          ' was prevented from writing to the main document.',
                        );
                      y({ reason: J, message: O, bid: r, id: n });
                    } else if (g)
                      e.write(g),
                        e.close(),
                        ne(e, d, c),
                        ge(I, e, 'html'),
                        (0, a.callBurl)(r),
                        w({ doc: e, bid: r, id: n });
                    else if (m) {
                      var S = (0, a.createInvisibleIframe)();
                      (S.height = c),
                        (S.width = d),
                        (S.style.display = 'inline'),
                        (S.style.overflow = 'hidden'),
                        (S.src = m),
                        (0, a.insertElement)(S, e, 'body'),
                        ne(e, d, c),
                        ge(I, e, 'html'),
                        (0, a.callBurl)(r),
                        w({ doc: e, bid: r, id: n });
                    } else {
                      var k =
                        'Error trying to write ad. No ad for bid response id: '.concat(
                          n,
                        );
                      y({ reason: Q, message: k, bid: r, id: n });
                    }
                  } catch (e) {
                    var B = 'Error trying to write ad Id :'
                      .concat(n, ' to the page:')
                      .concat(e.message);
                    y({ reason: Y, message: B, id: n });
                  }
                else {
                  var j = 'Error trying to write ad Id :'.concat(
                    n,
                    ' to the page. Missing adId',
                  );
                  y({ reason: X, message: j, id: n });
                }
              })),
              (M.removeAdUnit = function (e) {
                ((0, a.logInfo)('Invoking pbjs.removeAdUnit', arguments), e)
                  ? ((0, a.isArray)(e) ? e : [e]).forEach(function (e) {
                      for (var n = M.adUnits.length - 1; n >= 0; n--)
                        M.adUnits[n].code === e && M.adUnits.splice(n, 1);
                    })
                  : (M.adUnits = []);
              }),
              (M.requestBids =
                ((se = (0, B.z3)(
                  'async',
                  function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = e.bidsBackHandler,
                      t = e.timeout,
                      i = e.adUnits,
                      o = e.adUnitCodes,
                      u = e.labels,
                      c = e.auctionId,
                      d = e.ttlBuffer,
                      f = e.ortb2,
                      l = e.metrics,
                      p = e.defer;
                    s.emit(K);
                    var h = t || v.vc.getConfig('bidderTimeout');
                    (0, a.logInfo)('Invoking pbjs.requestBids', arguments),
                      o && o.length
                        ? (i = i.filter(function (e) {
                            return (0, g.q9)(o, e.code);
                          }))
                        : (o =
                            i &&
                            i.map(function (e) {
                              return e.code;
                            }));
                    var m = {
                      global: (0, a.mergeDeep)(
                        {},
                        v.vc.getAnyConfig('ortb2') || {},
                        f || {},
                      ),
                      bidder: Object.fromEntries(
                        Object.entries(v.vc.getBidderConfig())
                          .map(function (e) {
                            var n = (0, r.Z)(e, 2);
                            return [n[0], n[1].ortb2];
                          })
                          .filter(function (e) {
                            var n = (0, r.Z)(e, 2);
                            return n[0], null != n[1];
                          }),
                      ),
                    };
                    return (0, Z.S)(_.Z.resolve(m.global)).then(function (e) {
                      return (
                        (m.global = e),
                        pe({
                          bidsBackHandler: n,
                          timeout: h,
                          adUnits: i,
                          adUnitCodes: o,
                          labels: u,
                          auctionId: c,
                          ttlBuffer: d,
                          ortb2Fragments: m,
                          metrics: l,
                          defer: p,
                        })
                      );
                    });
                  },
                  'requestBids',
                )),
                (0, B.IF)(se, function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = e.adUnits || M.adUnits;
                  return (
                    (e.adUnits = (0, a.isArray)(n) ? n.slice() : [n]),
                    (e.metrics = (0, q.V6)()),
                    e.metrics.checkpoint('requestBids'),
                    (e.defer = (0, _.P)({
                      promiseFactory: function (e) {
                        return new Promise(e);
                      },
                    })),
                    se.call(this, e),
                    e.defer.promise
                  );
                })));
            var pe = (0, B.z3)(
              'async',
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.bidsBackHandler,
                  t = e.timeout,
                  r = e.adUnits,
                  i = e.ttlBuffer,
                  o = e.adUnitCodes,
                  u = e.labels,
                  s = e.auctionId,
                  d = e.ortb2Fragments,
                  f = e.metrics,
                  p = e.defer,
                  h = (0, D.uV)(v.vc.getConfig('s2sConfig') || []);
                function m(e, t, r) {
                  if ('function' == typeof n)
                    try {
                      n(e, t, r);
                    } catch (e) {
                      (0, a.logError)(
                        'Error executing bidsBackHandler',
                        null,
                        e,
                      );
                    }
                  p.resolve({ bids: e, timedOut: t, auctionId: r });
                }
                if (
                  (fe(r),
                  (r = (0, q.Bf)(f).measureTime(
                    'requestBids.validate',
                    function () {
                      return de(r);
                    },
                  )).forEach(function (e) {
                    var n,
                      t,
                      r = Object.keys(e.mediaTypes || { banner: 'banner' }),
                      o = e.bids.map(function (e) {
                        return e.bidder;
                      }),
                      u = D.ZP.bidderRegistry,
                      s = o.filter(function (e) {
                        return !h.has(e);
                      }),
                      d =
                        (null === (n = e.ortb2Imp) ||
                        void 0 === n ||
                        null === (t = n.ext) ||
                        void 0 === t
                          ? void 0
                          : t.tid) || (0, a.generateUUID)();
                    (e.transactionId = d),
                      null == i ||
                        e.hasOwnProperty('ttlBuffer') ||
                        (e.ttlBuffer = i),
                      (0, c.N)(e, 'ortb2Imp.ext.tid', d),
                      s.forEach(function (n) {
                        var t = u[n],
                          i = t && t.getSpec && t.getSpec(),
                          o = (i && i.supportedMediaTypes) || ['banner'];
                        r.some(function (e) {
                          return (0, g.q9)(o, e);
                        })
                          ? U.f.incrementBidderRequestsCounter(e.code, n)
                          : ((0, a.logWarn)(
                              (0, a.unsupportedBidderMessage)(e, n),
                            ),
                            (e.bids = e.bids.filter(function (e) {
                              return e.bidder !== n;
                            })));
                      }),
                      U.f.incrementRequestsCounter(e.code);
                  }),
                  r && 0 !== r.length)
                ) {
                  var b = l.K.createAuction({
                      adUnits: r,
                      adUnitCodes: o,
                      callback: m,
                      cbTimeout: t,
                      labels: u,
                      auctionId: s,
                      ortb2Fragments: d,
                      metrics: f,
                    }),
                    y = r.length;
                  y > 15 &&
                    (0, a.logInfo)(
                      'Current auction '
                        .concat(b.getAuctionId(), ' contains ')
                        .concat(y, ' adUnits.'),
                      r,
                    ),
                    o.forEach(function (e) {
                      return k.q0.setLatestAuctionForAdUnit(
                        e,
                        b.getAuctionId(),
                      );
                    }),
                    b.callBids();
                } else
                  (0, a.logMessage)(
                    'No adUnits configured. No bids requested.',
                  ),
                    m();
              },
              'startAuction',
            );
            M.requestBids.before(function (e, n) {
              function t(e) {
                for (var n; (n = e.shift()); ) n();
              }
              t(P.Ld), t(ve), e.call(this, n);
            }, 49),
              (M.addAdUnits = function (e) {
                (0, a.logInfo)('Invoking pbjs.addAdUnits', arguments),
                  M.adUnits.push.apply(M.adUnits, (0, a.isArray)(e) ? e : [e]),
                  s.emit(z);
              }),
              (M.onEvent = function (e, n, t) {
                (0, a.logInfo)('Invoking pbjs.onEvent', arguments),
                  (0, a.isFn)(n)
                    ? !t || ee[e].call(null, t)
                      ? s.on(e, n, t)
                      : (0, a.logError)(
                          'The id provided is not valid for event "' +
                            e +
                            '" and no handler was set.',
                        )
                    : (0, a.logError)(
                        'The event handler provided is not a function and was not set on event "' +
                          e +
                          '".',
                      );
              }),
              (M.offEvent = function (e, n, t) {
                (0, a.logInfo)('Invoking pbjs.offEvent', arguments),
                  (t && !ee[e].call(null, t)) || s.off(e, n, t);
              }),
              (M.getEvents = function () {
                return (0, a.logInfo)('Invoking pbjs.getEvents'), s.getEvents();
              }),
              (M.registerBidAdapter = function (e, n) {
                (0, a.logInfo)('Invoking pbjs.registerBidAdapter', arguments);
                try {
                  D.ZP.registerBidAdapter(e(), n);
                } catch (e) {
                  (0, a.logError)(
                    'Error registering bidder adapter : ' + e.message,
                  );
                }
              }),
              (M.registerAnalyticsAdapter = function (e) {
                (0, a.logInfo)(
                  'Invoking pbjs.registerAnalyticsAdapter',
                  arguments,
                );
                try {
                  D.ZP.registerAnalyticsAdapter(e);
                } catch (e) {
                  (0, a.logError)(
                    'Error registering analytics adapter : ' + e.message,
                  );
                }
              }),
              (M.createBid = function (e) {
                return (
                  (0, a.logInfo)('Invoking pbjs.createBid', arguments),
                  (0, R.m)(e)
                );
              });
            var ve = [],
              he = (0, B.z3)(
                'async',
                function (e) {
                  e && !(0, a.isEmpty)(e)
                    ? ((0, a.logInfo)('Invoking pbjs.enableAnalytics for: ', e),
                      D.ZP.enableAnalytics(e))
                    : (0, a.logError)(
                        'pbjs.enableAnalytics should be called with option {}',
                      );
                },
                'enableAnalyticsCb',
              );
            (M.enableAnalytics = function (e) {
              ve.push(he.bind(this, e));
            }),
              (M.aliasBidder = function (e, n, t) {
                (0, a.logInfo)('Invoking pbjs.aliasBidder', arguments),
                  e && n
                    ? D.ZP.aliasBidAdapter(e, n, t)
                    : (0, a.logError)(
                        'bidderCode and alias must be passed as arguments',
                        'pbjs.aliasBidder',
                      );
              }),
              (M.aliasRegistry = D.ZP.aliasRegistry),
              v.vc.getConfig('aliasRegistry', function (e) {
                'private' === e.aliasRegistry && delete M.aliasRegistry;
              }),
              (M.getAllWinningBids = function () {
                return l.K.getAllWinningBids();
              }),
              (M.getAllPrebidWinningBids = function () {
                return l.K.getBidsReceived().filter(function (e) {
                  return e.status === f.UE.CK;
                });
              }),
              (M.getHighestCpmBids = function (e) {
                return k.q0.getWinningBids(e);
              }),
              (M.markWinningBidAsUsed = function (e) {
                var n = me(
                  e,
                  'Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.',
                );
                n.length > 0 && l.K.addWinningBid(n[0]);
              });
            var me = function (e, n) {
              var t = [];
              return (
                e.adUnitCode && e.adId
                  ? (t = l.K.getBidsReceived().filter(function (n) {
                      return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
                    }))
                  : e.adUnitCode
                  ? (t = k.q0.getWinningBids(e.adUnitCode))
                  : e.adId
                  ? (t = l.K.getBidsReceived().filter(function (n) {
                      return n.adId === e.adId;
                    }))
                  : (0, a.logWarn)(n),
                t
              );
            };
            function be(e) {
              e.forEach(function (e) {
                if (void 0 === e.called)
                  try {
                    e.call(), (e.called = !0);
                  } catch (e) {
                    (0, a.logError)(
                      'Error processing command :',
                      'prebid.js',
                      e,
                    );
                  }
              });
            }
            (M.getConfig = v.vc.getAnyConfig),
              (M.readConfig = v.vc.readAnyConfig),
              (M.mergeConfig = v.vc.mergeConfig),
              (M.mergeBidderConfig = v.vc.mergeBidderConfig),
              (M.setConfig = v.vc.setConfig),
              (M.setBidderConfig = v.vc.setBidderConfig),
              M.que.push(function () {
                window.addEventListener('message', I, !1);
              }),
              (M.cmd.push = function (e) {
                if ('function' == typeof e)
                  try {
                    e.call();
                  } catch (e) {
                    (0, a.logError)(
                      'Error processing command :',
                      e.message,
                      e.stack,
                    );
                  }
                else
                  (0, a.logError)(
                    'Commands written into pbjs.cmd.push must be wrapped in a function',
                  );
              }),
              (M.que.push = M.cmd.push),
              (M.processQueue = function () {
                B.z3.ready(), be(M.que), be(M.cmd);
              }),
              (M.triggerBilling = function (e) {
                var n = me(
                    e,
                    'Improper use of triggerBilling. It requires a bid with at least an adUnitCode or an adId to function.',
                  ),
                  t =
                    n.find(function (n) {
                      return n.requestId === e.requestId;
                    }) || n[0];
                if (n.length > 0 && t)
                  try {
                    D.ZP.callBidBillableBidder(t);
                  } catch (e) {
                    (0, a.logError)('Error when triggering billing :', e);
                  }
                else
                  (0, a.logWarn)(
                    'The bid provided to triggerBilling did not match any bids received.',
                  );
              });
          },
          78640: function (e, n, t) {
            t.d(n, {
              R: function () {
                return o;
              },
              z: function () {
                return a;
              },
            });
            var r = window,
              i = (r.pbjs = r.pbjs || {});
            function o() {
              return i;
            }
            function a(e) {
              i.installedModules.push(e);
            }
            (i.cmd = i.cmd || []),
              (i.que = i.que || []),
              r === window &&
                ((r._pbjsGlobals = r._pbjsGlobals || []),
                r._pbjsGlobals.push('pbjs'));
          },
          25102: function (e, n, t) {
            t.d(n, {
              hh: function () {
                return a;
              },
              nH: function () {
                return s;
              },
            });
            var r = t(3193),
              i = t(64358);
            function o(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window;
              if (!e) return e;
              if (/\w+:\/\//.exec(e)) return e;
              var t = n.location.protocol;
              try {
                t = n.top.location.protocol;
              } catch (e) {}
              return /^\/\//.exec(e) ? t + e : ''.concat(t, '//').concat(e);
            }
            function a(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = n.noLeadingWww,
                r = void 0 !== t && t,
                i = n.noPort,
                a = void 0 !== i && i;
              try {
                e = new URL(o(e));
              } catch (e) {
                return;
              }
              return (
                (e = a ? e.hostname : e.host),
                r && e.startsWith('www.') && (e = e.substring(4)),
                e
              );
            }
            function u(e) {
              try {
                var n = e.querySelector("link[rel='canonical']");
                if (null !== n) return n.href;
              } catch (e) {}
              return null;
            }
            var c,
              s = (function (e) {
                var n,
                  t,
                  r,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : window;
                return i.top !== i
                  ? e
                  : function () {
                      var o = u(i.document),
                        a = i.location.href;
                      return (
                        (n === o && a === t) || ((n = o), (t = a), (r = e())), r
                      );
                    };
              })(
                ((c = window),
                function () {
                  var e,
                    n,
                    t,
                    s,
                    d = [],
                    f = (function (e) {
                      try {
                        if (!e.location.ancestorOrigins) return;
                        return e.location.ancestorOrigins;
                      } catch (e) {}
                    })(c),
                    l = r.vc.getConfig('maxNestedIframes'),
                    g = !1,
                    p = 0,
                    v = !1,
                    h = !1,
                    m = !1;
                  do {
                    var b = e,
                      y = h,
                      w = void 0,
                      E = !1,
                      C = null;
                    (h = !1), (e = e ? e.parent : c);
                    try {
                      w = e.location.href || null;
                    } catch (e) {
                      E = !0;
                    }
                    if (E)
                      if (y) {
                        var A = b.context;
                        try {
                          (n = C = A.sourceUrl),
                            (m = !0),
                            (v = !0),
                            e === c.top && (g = !0),
                            A.canonicalUrl && (t = A.canonicalUrl);
                        } catch (e) {}
                      } else {
                        (0, i.logWarn)(
                          'Trying to access cross domain iframe. Continuing without referrer and location',
                        );
                        try {
                          var T = b.document.referrer;
                          T && ((C = T), e === c.top && (g = !0));
                        } catch (e) {}
                        !C &&
                          f &&
                          f[p - 1] &&
                          ((C = f[p - 1]), e === c.top && (m = !0)),
                          C && !v && (n = C);
                      }
                    else {
                      if (w && ((n = C = w), (v = !1), e === c.top)) {
                        g = !0;
                        var I = u(e.document);
                        I && (t = I);
                      }
                      e.context && e.context.sourceUrl && (h = !0);
                    }
                    d.push(C), p++;
                  } while (e !== c.top && p < l);
                  d.reverse();
                  try {
                    s = c.top.document.referrer;
                  } catch (e) {}
                  var O = g || m ? n : null,
                    S = r.vc.getConfig('pageUrl') || t || null,
                    k = r.vc.getConfig('pageUrl') || O || o(S, c);
                  return (
                    O &&
                      O.indexOf('?') > -1 &&
                      -1 === k.indexOf('?') &&
                      (k = ''.concat(k).concat(O.substring(O.indexOf('?')))),
                    {
                      reachedTop: g,
                      isAmp: v,
                      numIframes: p - 1,
                      stack: d,
                      topmostLocation: n || null,
                      location: O,
                      canonicalUrl: S,
                      page: k,
                      domain: a(k) || null,
                      ref: s || null,
                      legacy: {
                        reachedTop: g,
                        isAmp: v,
                        numIframes: p - 1,
                        stack: d,
                        referer: n || null,
                        canonicalUrl: S,
                      },
                    }
                  );
                }),
              );
          },
          15164: function (e, n, t) {
            t.d(n, {
              Dp: function () {
                return g;
              },
              Ld: function () {
                return v;
              },
              c$: function () {
                return p;
              },
              df: function () {
                return m;
              },
              eA: function () {
                return b;
              },
            });
            var r = t(4942),
              i = t(64358),
              o = t(55975),
              a = t(9633),
              u = t(50571),
              c = t(16310),
              s = t(74947),
              d = t(3193),
              f = t(86104),
              l = t(10286),
              g = 'html5',
              p = 'cookie',
              v = [];
            function h() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.moduleName,
                t = e.moduleType,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                h = o.isAllowed,
                m = void 0 === h ? u.xD : h;
              function b(e, i) {
                var o = n,
                  u = d.vc.getCurrentBidder();
                return (
                  u && t === a.UL && f.ZP.aliasRegistry[u] === n && (o = u),
                  e({ valid: m(s.S1, (0, l.T)(t, o, (0, r.Z)({}, c.bL, i))) })
                );
              }
              function y(e, n, t) {
                if (!t || 'function' != typeof t) return b(e, n);
                v.push(function () {
                  var r = b(e, n);
                  t(r);
                });
              }
              var w = function (e, n, t, r, i, o) {
                  return y(
                    function (o) {
                      if (o && o.valid) {
                        var a =
                            i && '' !== i
                              ? ' ;domain='.concat(encodeURIComponent(i))
                              : '',
                          u = t && '' !== t ? ' ;expires='.concat(t) : '',
                          c =
                            null != r && 'none' == r.toLowerCase()
                              ? '; Secure'
                              : '';
                        document.cookie = ''
                          .concat(e, '=')
                          .concat(encodeURIComponent(n))
                          .concat(u, '; path=/')
                          .concat(a)
                          .concat(r ? '; SameSite='.concat(r) : '')
                          .concat(c);
                      }
                    },
                    p,
                    o,
                  );
                },
                E = function (e, n) {
                  return y(
                    function (n) {
                      if (n && n.valid) {
                        var t = window.document.cookie.match(
                          '(^|;)\\s*' + e + '\\s*=\\s*([^;]*)\\s*(;|$)',
                        );
                        return t ? decodeURIComponent(t[2]) : null;
                      }
                      return null;
                    },
                    p,
                    n,
                  );
                },
                C = function (e) {
                  return y(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return (
                            localStorage.setItem('prebid.cookieTest', '1'),
                            '1' === localStorage.getItem('prebid.cookieTest')
                          );
                        } catch (e) {
                        } finally {
                          try {
                            localStorage.removeItem('prebid.cookieTest');
                          } catch (e) {}
                        }
                      return !1;
                    },
                    g,
                    e,
                  );
                },
                A = function (e) {
                  return y(
                    function (e) {
                      return !(!e || !e.valid) && (0, i.checkCookieSupport)();
                    },
                    p,
                    e,
                  );
                },
                T = function (e, n, t) {
                  return y(
                    function (t) {
                      t && t.valid && S() && window.localStorage.setItem(e, n);
                    },
                    g,
                    t,
                  );
                },
                I = function (e, n) {
                  return y(
                    function (n) {
                      return n && n.valid && S()
                        ? window.localStorage.getItem(e)
                        : null;
                    },
                    g,
                    n,
                  );
                },
                O = function (e, n) {
                  return y(
                    function (n) {
                      n && n.valid && S() && window.localStorage.removeItem(e);
                    },
                    g,
                    n,
                  );
                },
                S = function (e) {
                  return y(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return !!window.localStorage;
                        } catch (e) {
                          (0, i.logError)('Local storage api disabled');
                        }
                      return !1;
                    },
                    g,
                    e,
                  );
                },
                k = function (e, n) {
                  return y(
                    function (n) {
                      if (n && n.valid) {
                        var t = [];
                        if ((0, i.hasDeviceAccess)())
                          for (var r = document.cookie.split(';'); r.length; ) {
                            var o = r.pop(),
                              a = o.indexOf('=');
                            (a = a < 0 ? o.length : a),
                              decodeURIComponent(
                                o.slice(0, a).replace(/^\s+/, ''),
                              ).indexOf(e) >= 0 &&
                                t.push(decodeURIComponent(o.slice(a + 1)));
                          }
                        return t;
                      }
                    },
                    p,
                    n,
                  );
                };
              return {
                setCookie: w,
                getCookie: E,
                localStorageIsEnabled: C,
                cookiesAreEnabled: A,
                setDataInLocalStorage: T,
                getDataFromLocalStorage: I,
                removeDataFromLocalStorage: O,
                hasLocalStorage: S,
                findSimilarCookies: k,
              };
            }
            function m() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.moduleType,
                t = e.moduleName,
                r = e.bidderCode;
              function i() {
                throw new Error(
                  'Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName',
                );
              }
              return (
                r
                  ? (((n && n !== a.UL) || t) && i(), (n = a.UL), (t = r))
                  : (t && n) || i(),
                h({ moduleType: n, moduleName: t })
              );
            }
            function b(e) {
              return h({ moduleName: e, moduleType: a.wu });
            }
            (0, u.oB)(s.S1, 'deviceAccess config', function () {
              if (!(0, i.hasDeviceAccess)()) return { allow: !1 };
            }),
              (0, u.oB)(s.S1, 'bidderSettings.*.storageAllowed', function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o.S;
                if (e[c.$k] === a.UL) {
                  var t = n.get(e[c.Ki], 'storageAllowed');
                  if (t && !0 !== t) {
                    var r = e[c.bL];
                    t = Array.isArray(t)
                      ? t.some(function (e) {
                          return e === r;
                        })
                      : t === r;
                  } else t = !!t;
                  return t ? void 0 : { allow: t };
                }
              });
          },
          18621: function (e, n, t) {
            t.d(n, {
              TL: function () {
                return C;
              },
              bP: function () {
                return T;
              },
              ol: function () {
                return A;
              },
              q0: function () {
                return I;
              },
            });
            var r = t(4942),
              i = t(89062),
              o = t(64358),
              a = t(20265),
              u = t(3193),
              c = t(70059),
              s = t(78653),
              d = t(24679),
              f = t(92797),
              l = t(55975),
              g = t(34614),
              p = t(5644),
              v = [],
              h = 1;
            u.vc.getConfig('ttlBuffer', function (e) {
              'number' == typeof e.ttlBuffer
                ? (h = e.ttlBuffer)
                : (0, o.logError)('Invalid value for ttlBuffer', e.ttlBuffer);
            });
            var m = 'targetingControls.allowTargetingKeys',
              b = 'targetingControls.addTargetingKeys',
              y = 'Only one of "'.concat(m, '" or "').concat(b, '" can be set'),
              w = Object.keys(p.TD).map(function (e) {
                return p.TD[e];
              }),
              E = {
                isActualBid: function (e) {
                  return e.getStatusCode() === p.Q_.Q;
                },
                isBidNotExpired: function (e) {
                  return (
                    e.responseTimestamp +
                      1e3 *
                        (e.ttl -
                          (e.hasOwnProperty('ttlBuffer') ? e.ttlBuffer : h)) >
                    (0, o.timestamp)()
                  );
                },
                isUnusedBid: function (e) {
                  return (
                    e &&
                    ((e.status && !(0, g.q9)([p.UE.fe], e.status)) || !e.status)
                  );
                },
              };
            function C(e) {
              return !Object.values(E).some(function (n) {
                return !n(e);
              });
            }
            var A = (0, f.z3)('sync', function (e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
              if (!r) {
                var a = [],
                  c = u.vc.getConfig('sendBidsControl.dealPrioritization'),
                  s = (0, o.groupBy)(e, 'adUnitCode');
                return (
                  Object.keys(s).forEach(function (e) {
                    var r = [],
                      u = (0, o.groupBy)(s[e], 'bidderCode');
                    Object.keys(u).forEach(function (e) {
                      return r.push(u[e].reduce(n));
                    }),
                      t > 0
                        ? ((r = c
                            ? r.sort(T(!0))
                            : r.sort(function (e, n) {
                                return n.cpm - e.cpm;
                              })),
                          a.push.apply(a, (0, i.Z)(r.slice(0, t))))
                        : a.push.apply(a, (0, i.Z)(r));
                  }),
                  a
                );
              }
              return e;
            });
            function T() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return function (n, t) {
                return void 0 !== n.adserverTargeting.hb_deal &&
                  void 0 === t.adserverTargeting.hb_deal
                  ? -1
                  : void 0 === n.adserverTargeting.hb_deal &&
                    void 0 !== t.adserverTargeting.hb_deal
                  ? 1
                  : e
                  ? t.cpm - n.cpm
                  : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
              };
            }
            var I = (function (e) {
              var n = {},
                t = {};
              function s(e, n) {
                return (
                  e.adserverTargeting &&
                  n &&
                  (((0, o.isArray)(n) && (0, g.q9)(n, e.adUnitCode)) ||
                    ('string' == typeof n && e.adUnitCode === n))
                );
              }
              function f(e, n) {
                if (
                  !0 === u.vc.getConfig('targetingControls.alwaysIncludeDeals')
                ) {
                  var t = w.concat(c.xc);
                  return A(n, o.getHighestCpm)
                    .map(function (n) {
                      if (n.dealId && s(n, e))
                        return (0, r.Z)(
                          {},
                          n.adUnitCode,
                          q(
                            n,
                            t.filter(function (e) {
                              return void 0 !== n.adserverTargeting[e];
                            }),
                          ),
                        );
                    })
                    .filter(function (e) {
                      return e;
                    });
                }
                return [];
              }
              function h(e, n) {
                var t = Object.assign({}, p.TD, p.FY),
                  r = Object.keys(t),
                  i = {};
                (0, o.logInfo)(
                  'allowTargetingKeys - allowed keys [ '.concat(
                    n
                      .map(function (e) {
                        return t[e];
                      })
                      .join(', '),
                    ' ]',
                  ),
                ),
                  e.map(function (e) {
                    var o = Object.keys(e)[0],
                      a = e[o].filter(function (e) {
                        var o = Object.keys(e)[0],
                          a =
                            0 ===
                              r.filter(function (e) {
                                return 0 === o.indexOf(t[e]);
                              }).length ||
                            (0, g.sE)(n, function (e) {
                              var n = t[e];
                              return 0 === o.indexOf(n);
                            });
                        return (i[o] = !a), a;
                      });
                    e[o] = a;
                  });
                var a = Object.keys(i).filter(function (e) {
                  return i[e];
                });
                return (
                  (0, o.logInfo)(
                    'allowTargetingKeys - removed keys [ '.concat(
                      a.join(', '),
                      ' ]',
                    ),
                  ),
                  e.filter(function (e) {
                    return e[Object.keys(e)[0]].length > 0;
                  })
                );
              }
              function E(e, n) {
                var t = (0, o.deepClone)(e);
                return Object.keys(t)
                  .map(function (e) {
                    return { adUnitCode: e, adserverTargeting: t[e] };
                  })
                  .sort(T())
                  .reduce(function (e, r, i, a) {
                    var u,
                      c =
                        ((u = r.adserverTargeting),
                        Object.keys(u).reduce(function (e, n) {
                          return (
                            e +
                            ''
                              .concat(n, '%3d')
                              .concat(encodeURIComponent(u[n]), '%26')
                          );
                        }, ''));
                    i + 1 === a.length && (c = c.slice(0, -3));
                    var s = r.adUnitCode,
                      d = c.length;
                    return (
                      d <= n
                        ? ((n -= d),
                          (0, o.logInfo)(
                            "AdUnit '"
                              .concat(s, "' auction keys comprised of ")
                              .concat(
                                d,
                                ' characters.  Deducted from running threshold; new limit is ',
                              )
                              .concat(n),
                            t[s],
                          ),
                          (e[s] = t[s]))
                        : (0, o.logWarn)(
                            "The following keys for adUnitCode '"
                              .concat(
                                s,
                                "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ",
                              )
                              .concat(d, ', the current allotted amount was ')
                              .concat(n, '.\n'),
                            t[s],
                          ),
                      i + 1 === a.length &&
                        0 === Object.keys(e).length &&
                        (0, o.logError)(
                          'No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.',
                        ),
                      e
                    );
                  }, {});
              }
              function I(e) {
                var n = e
                  .map(function (e) {
                    return (0, r.Z)(
                      {},
                      Object.keys(e)[0],
                      e[Object.keys(e)[0]]
                        .map(function (e) {
                          return (0,
                          r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(','));
                        })
                        .reduce(function (e, n) {
                          return Object.assign(n, e);
                        }, {}),
                    );
                  })
                  .reduce(function (e, n) {
                    var t = Object.keys(n)[0];
                    return (e[t] = Object.assign({}, e[t], n[t])), e;
                  }, {});
                return n;
              }
              function O(n) {
                return 'string' == typeof n
                  ? [n]
                  : (0, o.isArray)(n)
                  ? n
                  : e.getAdUnitCodes() || [];
              }
              function S() {
                var n = e.getBidsReceived();
                if (u.vc.getConfig('useBidCache')) {
                  var r = u.vc.getConfig('bidCacheFilterFunction');
                  'function' == typeof r &&
                    (n = n.filter(function (e) {
                      return t[e.adUnitCode] === e.auctionId || !!r(e);
                    }));
                } else
                  n = n.filter(function (e) {
                    return t[e.adUnitCode] === e.auctionId;
                  });
                return (
                  (n = n
                    .filter(function (e) {
                      return (0, a.Z)(e, 'video.context') !== d.Oh;
                    })
                    .filter(C)),
                  A(n, o.getOldestHighestCpmBid)
                );
              }
              function k(e, t) {
                var o = n.getWinningBids(e, t),
                  a = B();
                return (
                  (o = o.map(function (e) {
                    return (0, r.Z)(
                      {},
                      e.adUnitCode,
                      Object.keys(e.adserverTargeting)
                        .filter(function (n) {
                          return (
                            void 0 === e.sendStandardTargeting ||
                            e.sendStandardTargeting ||
                            -1 === a.indexOf(n)
                          );
                        })
                        .reduce(function (n, t) {
                          var o = [e.adserverTargeting[t]],
                            a = (0, r.Z)({}, t.substring(0, 20), o);
                          if (t === p.TD.DEAL) {
                            var u = ''
                                .concat(t, '_')
                                .concat(e.bidderCode)
                                .substring(0, 20),
                              c = (0, r.Z)({}, u, o);
                            return [].concat((0, i.Z)(n), [a, c]);
                          }
                          return [].concat((0, i.Z)(n), [a]);
                        }, []),
                    );
                  })),
                  o
                );
              }
              function B() {
                return e
                  .getStandardBidderAdServerTargeting()
                  .map(function (e) {
                    return e.key;
                  })
                  .concat(w)
                  .filter(o.uniques);
              }
              function j(e, n, t, r) {
                return (
                  Object.keys(n.adserverTargeting)
                    .filter(U())
                    .forEach(function (t) {
                      e.length &&
                        e
                          .filter(
                            (function (e) {
                              return function (t) {
                                return (
                                  t.adUnitCode === n.adUnitCode &&
                                  t.adserverTargeting[e]
                                );
                              };
                            })(t),
                          )
                          .forEach(
                            (function (e) {
                              return function (t) {
                                (0, o.isArray)(t.adserverTargeting[e]) ||
                                  (t.adserverTargeting[e] = [
                                    t.adserverTargeting[e],
                                  ]),
                                  (t.adserverTargeting[e] = t.adserverTargeting[
                                    e
                                  ]
                                    .concat(n.adserverTargeting[e])
                                    .filter(o.uniques)),
                                  delete n.adserverTargeting[e];
                              };
                            })(t),
                          );
                    }),
                  e.push(n),
                  e
                );
              }
              function U() {
                var e = B();
                return (
                  (e = e.concat(c.xc)),
                  function (n) {
                    return -1 === e.indexOf(n);
                  }
                );
              }
              function R(e) {
                return (0, r.Z)(
                  {},
                  e.adUnitCode,
                  Object.keys(e.adserverTargeting)
                    .filter(U())
                    .map(function (n) {
                      return (0,
                      r.Z)({}, n.substring(0, 20), [e.adserverTargeting[n]]);
                    }),
                );
              }
              function P(e, n) {
                return n
                  .filter(function (n) {
                    return (0, g.q9)(e, n.adUnitCode);
                  })
                  .map(function (e) {
                    return Object.assign({}, e);
                  })
                  .reduce(j, [])
                  .map(R)
                  .filter(function (e) {
                    return e;
                  });
              }
              function D(e, n) {
                var t = w.concat(c.xc),
                  i = u.vc.getConfig('sendBidsControl.bidLimit'),
                  a = A(n, o.getHighestCpm, i),
                  d = u.vc.getConfig(
                    'targetingControls.allowSendAllBidsTargetingKeys',
                  ),
                  f = d
                    ? d.map(function (e) {
                        return p.TD[e];
                      })
                    : t;
                return a
                  .map(function (n) {
                    if (s(n, e))
                      return (0, r.Z)(
                        {},
                        n.adUnitCode,
                        q(
                          n,
                          t.filter(function (e) {
                            return (
                              void 0 !== n.adserverTargeting[e] &&
                              -1 !== f.indexOf(e)
                            );
                          }),
                        ),
                      );
                  })
                  .filter(function (e) {
                    return e;
                  });
              }
              function q(e, n) {
                return n.map(function (n) {
                  return (0,
                  r.Z)({}, ''.concat(n, '_').concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]]);
                });
              }
              function _(n) {
                function t(e) {
                  return (0, a.Z)(e, p.k2.xn);
                }
                return e
                  .getAdUnits()
                  .filter(function (e) {
                    return (0, g.q9)(n, e.code) && t(e);
                  })
                  .map(function (e) {
                    return (0, r.Z)(
                      {},
                      e.code,
                      (function (e) {
                        var n = t(e);
                        return Object.keys(n).map(function (e) {
                          return (
                            (0, o.isStr)(n[e]) &&
                              (n[e] = n[e].split(',').map(function (e) {
                                return e.trim();
                              })),
                            (0, o.isArray)(n[e]) || (n[e] = [n[e]]),
                            (0, r.Z)({}, e, n[e])
                          );
                        });
                      })(e),
                    );
                  });
              }
              return (
                (n.setLatestAuctionForAdUnit = function (e, n) {
                  t[e] = n;
                }),
                (n.resetPresetTargeting = function (n, t) {
                  if ((0, o.isGptPubadsDefined)()) {
                    var r = O(n),
                      i = e.getAdUnits().filter(function (e) {
                        return (0, g.q9)(r, e.code);
                      }),
                      a = v.reduce(function (e, n) {
                        return (e[n] = null), e;
                      }, {});
                    window.googletag
                      .pubads()
                      .getSlots()
                      .forEach(function (e) {
                        var n = (0, o.isFn)(t) && t(e);
                        i.forEach(function (t) {
                          (t.code === e.getAdUnitPath() ||
                            t.code === e.getSlotElementId() ||
                            ((0, o.isFn)(n) && n(t.code))) &&
                            e.updateTargetingFromMap(a);
                        });
                      });
                  }
                }),
                (n.resetPresetTargetingAST = function (e) {
                  O(e).forEach(function (e) {
                    var n = window.apntag.getTag(e);
                    if (n && n.keywords) {
                      var t = Object.keys(n.keywords),
                        r = {};
                      t.forEach(function (e) {
                        (0, g.q9)(v, e.toLowerCase()) || (r[e] = n.keywords[e]);
                      }),
                        window.apntag.modifyTag(e, { keywords: r });
                    }
                  });
                }),
                (n.getAllTargeting = function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : S(),
                    t = O(e),
                    r = k(t, n)
                      .concat(P(t, n))
                      .concat(
                        u.vc.getConfig('enableSendAllBids') ? D(t, n) : f(t, n),
                      )
                      .concat(_(t));
                  r.map(function (e) {
                    Object.keys(e).map(function (n) {
                      e[n].map(function (e) {
                        -1 === v.indexOf(Object.keys(e)[0]) &&
                          (v = Object.keys(e).concat(v));
                      });
                    });
                  });
                  var i = Object.keys(Object.assign({}, p.kF, p.FY)),
                    a = u.vc.getConfig(m),
                    c = u.vc.getConfig(b);
                  if (null != c && null != a) throw new Error(y);
                  (a = null != c ? i.concat(c) : a || i),
                    Array.isArray(a) && a.length > 0 && (r = h(r, a)),
                    (r = I(r));
                  var s = u.vc.getConfig(
                    'targetingControls.auctionKeyMaxChars',
                  );
                  return (
                    s &&
                      ((0, o.logInfo)(
                        "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                          s,
                          ' characters.  Running checks on auction keys...',
                        ),
                      ),
                      (r = E(r, s))),
                    t.forEach(function (e) {
                      r[e] || (r[e] = {});
                    }),
                    r
                  );
                }),
                u.vc.getConfig('targetingControls', function (e) {
                  null != (0, a.Z)(e, m) &&
                    null != (0, a.Z)(e, b) &&
                    (0, o.logError)(y);
                }),
                (n.setTargetingForGPT = function (e, n) {
                  window.googletag
                    .pubads()
                    .getSlots()
                    .forEach(function (t) {
                      Object.keys(e)
                        .filter(n ? n(t) : (0, o.isAdUnitCodeMatchingSlot)(t))
                        .forEach(function (n) {
                          Object.keys(e[n]).forEach(function (t) {
                            var r = e[n][t];
                            'string' == typeof r &&
                              -1 !== r.indexOf(',') &&
                              (r = r.split(',')),
                              (e[n][t] = r);
                          }),
                            (0, o.logMessage)(
                              'Attempting to set targeting-map for slot: '.concat(
                                t.getSlotElementId(),
                                ' with targeting-map:',
                              ),
                              e[n],
                            ),
                            t.updateTargetingFromMap(e[n]);
                        });
                    });
                }),
                (n.getWinningBids = function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : S(),
                    t = O(e);
                  return n
                    .filter(function (e) {
                      return (0, g.q9)(t, e.adUnitCode);
                    })
                    .filter(function (e) {
                      return !0 === l.S.get(e.bidderCode, 'allowZeroCpmBids')
                        ? e.cpm >= 0
                        : e.cpm > 0;
                    })
                    .map(function (e) {
                      return e.adUnitCode;
                    })
                    .filter(o.uniques)
                    .map(function (e) {
                      return n
                        .filter(function (n) {
                          return n.adUnitCode === e ? n : null;
                        })
                        .reduce(o.getHighestCpm);
                    });
                }),
                (n.setTargetingForAst = function (e) {
                  var t = n.getAllTargeting(e);
                  try {
                    n.resetPresetTargetingAST(e);
                  } catch (e) {
                    (0, o.logError)('unable to reset targeting for AST' + e);
                  }
                  Object.keys(t).forEach(function (e) {
                    return Object.keys(t[e]).forEach(function (n) {
                      if (
                        ((0, o.logMessage)(
                          'Attempting to set targeting for targetId: '
                            .concat(e, ' key: ')
                            .concat(n, ' value: ')
                            .concat(t[e][n]),
                        ),
                        (0, o.isStr)(t[e][n]) || (0, o.isArray)(t[e][n]))
                      ) {
                        var r = {};
                        n.search(/pt[0-9]/) < 0
                          ? (r[n.toUpperCase()] = t[e][n])
                          : (r[n] = t[e][n]),
                          window.apntag.setKeywords(e, r, {
                            overrideKeyValue: !0,
                          });
                      }
                    });
                  });
                }),
                (n.isApntagDefined = function () {
                  if (window.apntag && (0, o.isFn)(window.apntag.setKeywords))
                    return !0;
                }),
                n
              );
            })(s.K);
          },
          11974: function (e, n, t) {
            t.d(n, {
              k_: function () {
                return h;
              },
              oS: function () {
                return p;
              },
            });
            var r = t(4942),
              i = t(93324),
              o = t(64358),
              a = t(3193),
              u = t(34614),
              c = t(15164),
              s = t(50571),
              d = t(74947),
              f = t(16310),
              l = t(9633),
              g = t(10286),
              p = {
                syncEnabled: !0,
                filterSettings: { image: { bidders: '*', filter: 'include' } },
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0,
              };
            a.vc.setDefaults({ userSync: (0, o.deepClone)(p) });
            var v = (0, c.eA)('usersync');
            var h = (function (e) {
              var n = {},
                t = { image: [], iframe: [] },
                c = new Set(),
                s = {},
                p = { image: !0, iframe: !1 },
                v = e.config;
              function h() {
                if (v.syncEnabled && e.browserSupportsCookies) {
                  try {
                    !(function () {
                      if (!p.iframe) return;
                      m(t.iframe, function (e) {
                        var n = (0, i.Z)(e, 2),
                          r = n[0],
                          a = n[1];
                        (0, o.logMessage)(
                          'Invoking iframe user sync for bidder: '.concat(r),
                        ),
                          (0, o.insertUserSyncIframe)(a),
                          (function (e, n) {
                            e.image = e.image.filter(function (e) {
                              return e[0] !== n;
                            });
                          })(t, r);
                      });
                    })(),
                      (function () {
                        if (!p.image) return;
                        m(t.image, function (e) {
                          var n = (0, i.Z)(e, 2),
                            t = n[0],
                            r = n[1];
                          (0, o.logMessage)(
                            'Invoking image pixel user sync for bidder: '.concat(
                              t,
                            ),
                          ),
                            (0, o.triggerPixel)(r);
                        });
                      })();
                  } catch (e) {
                    return (0, o.logError)('Error firing user syncs', e);
                  }
                  t = { image: [], iframe: [] };
                }
              }
              function m(e, n) {
                (0, o.shuffle)(e).forEach(n);
              }
              function b(e, n) {
                var t = v.filterSettings;
                if (
                  (function (e, n) {
                    if (e.all && e[n])
                      return (
                        (0, o.logWarn)(
                          'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                            n,
                            '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.',
                          ),
                        ),
                        !1
                      );
                    var t = e.all ? e.all : e[n],
                      r = e.all ? 'all' : n;
                    if (!t) return !1;
                    var i = t.filter,
                      a = t.bidders;
                    if (i && 'include' !== i && 'exclude' !== i)
                      return (
                        (0, o.logWarn)(
                          'UserSync "filterSettings.'
                            .concat(r, '.filter" setting \'')
                            .concat(
                              i,
                              "' is not a valid option; use either 'include' or 'exclude'.",
                            ),
                        ),
                        !1
                      );
                    if (
                      '*' !== a &&
                      !(
                        Array.isArray(a) &&
                        a.length > 0 &&
                        a.every(function (e) {
                          return (0, o.isStr)(e) && '*' !== e;
                        })
                      )
                    )
                      return (
                        (0, o.logWarn)(
                          'Detected an invalid setup in userSync "filterSettings.'.concat(
                            r,
                            ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.",
                          ),
                        ),
                        !1
                      );
                    return !0;
                  })(t, e)
                ) {
                  p[e] = !0;
                  var r = t.all ? t.all : t[e],
                    i = '*' === r.bidders ? [n] : r.bidders,
                    a = {
                      include: function (e, n) {
                        return !(0, u.q9)(e, n);
                      },
                      exclude: function (e, n) {
                        return (0, u.q9)(e, n);
                      },
                    };
                  return a[r.filter || 'include'](i, n);
                }
                return !p[e];
              }
              return (
                a.vc.getConfig('userSync', function (e) {
                  if (e.userSync) {
                    var n = e.userSync.filterSettings;
                    (0, o.isPlainObject)(n) &&
                      (n.image ||
                        n.all ||
                        (e.userSync.filterSettings.image = {
                          bidders: '*',
                          filter: 'include',
                        }));
                  }
                  v = Object.assign(v, e.userSync);
                }),
                e.regRule(d.K$, 'userSync config', function (e) {
                  if (!v.syncEnabled)
                    return { allow: !1, reason: 'syncs are disabled' };
                  if (e[f.$k] === l.UL) {
                    var t = e[f.cx],
                      r = e[f.bp];
                    if (!n.canBidderRegisterSync(t, r))
                      return {
                        allow: !1,
                        reason: ''
                          .concat(t, ' syncs are not enabled for ')
                          .concat(r),
                      };
                  }
                }),
                (n.registerSync = function (n, i, a) {
                  var u;
                  return c.has(i)
                    ? (0, o.logMessage)(
                        'already fired syncs for "'.concat(
                          i,
                          '", ignoring registerSync call',
                        ),
                      )
                    : v.syncEnabled && (0, o.isArray)(t[n])
                    ? i
                      ? 0 !== v.syncsPerBidder &&
                        Number(s[i]) >= v.syncsPerBidder
                        ? (0, o.logWarn)(
                            'Number of user syncs exceeded for "'.concat(
                              i,
                              '"',
                            ),
                          )
                        : void (
                            e.isAllowed(
                              d.K$,
                              (0, g.T)(
                                l.UL,
                                i,
                                ((u = {}),
                                (0, r.Z)(u, f.cx, n),
                                (0, r.Z)(u, f.IV, a),
                                u),
                              ),
                            ) &&
                            (t[n].push([i, a]),
                            (s = (function (e, n) {
                              return e[n] ? (e[n] += 1) : (e[n] = 1), e;
                            })(s, i)))
                          )
                      : (0, o.logWarn)(
                          'Bidder is required for registering sync',
                        )
                    : (0, o.logWarn)(
                        'User sync type "'.concat(n, '" not supported'),
                      );
                }),
                (n.bidderDone = c.add.bind(c)),
                (n.syncUsers = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if (e) return setTimeout(h, Number(e));
                  h();
                }),
                (n.triggerUserSyncs = function () {
                  v.enableOverride && n.syncUsers();
                }),
                (n.canBidderRegisterSync = function (e, n) {
                  return !v.filterSettings || !b(e, n);
                }),
                n
              );
            })(
              Object.defineProperties(
                {
                  config: a.vc.getConfig('userSync'),
                  isAllowed: s.xD,
                  regRule: s.oB,
                },
                {
                  browserSupportsCookies: {
                    get: function () {
                      return !(0, o.isSafariBrowser)() && v.cookiesAreEnabled();
                    },
                  },
                },
              ),
            );
          },
          64358: function (e, n, t) {
            t.r(n),
              t.d(n, {
                _each: function () {
                  return le;
                },
                _map: function () {
                  return pe;
                },
                _setEventEmitter: function () {
                  return T;
                },
                adUnitsFilter: function () {
                  return Ne;
                },
                bind: function () {
                  return U;
                },
                buildUrl: function () {
                  return Cn;
                },
                callBurl: function () {
                  return ye;
                },
                checkCookieSupport: function () {
                  return Ve;
                },
                chunk: function () {
                  return vn;
                },
                cleanObj: function () {
                  return dn;
                },
                compareOn: function () {
                  return bn;
                },
                contains: function () {
                  return ge;
                },
                convertCamelToUnderscore: function () {
                  return sn;
                },
                convertTypes: function () {
                  return ln;
                },
                createInvisibleIframe: function () {
                  return ne;
                },
                createTrackPixelHtml: function () {
                  return Ce;
                },
                createTrackPixelIframeHtml: function () {
                  return Ae;
                },
                cyrb53Hash: function () {
                  return In;
                },
                debugTurnedOn: function () {
                  return ee;
                },
                deepAccess: function () {
                  return v.Z;
                },
                deepClone: function () {
                  return Me;
                },
                deepEqual: function () {
                  return An;
                },
                deepSetValue: function () {
                  return h.N;
                },
                delayExecution: function () {
                  return Je;
                },
                escapeUnsafeChars: function () {
                  return Un;
                },
                fill: function () {
                  return pn;
                },
                flatten: function () {
                  return Oe;
                },
                formatQS: function () {
                  return wn;
                },
                generateUUID: function () {
                  return D;
                },
                getAdUnitSizes: function () {
                  return N;
                },
                getBidIdParameter: function () {
                  return q;
                },
                getBidRequest: function () {
                  return Se;
                },
                getBidderCodes: function () {
                  return Ue;
                },
                getDNT: function () {
                  return en;
                },
                getDefinedParams: function () {
                  return Ye;
                },
                getGptSlotForAdUnitCode: function () {
                  return on;
                },
                getGptSlotInfoForAdUnitCode: function () {
                  return an;
                },
                getHighestCpm: function () {
                  return De;
                },
                getKeyByValue: function () {
                  return je;
                },
                getKeys: function () {
                  return ke;
                },
                getLatestHighestCpmBid: function () {
                  return _e;
                },
                getMaxValueFromArray: function () {
                  return mn;
                },
                getMinValueFromArray: function () {
                  return hn;
                },
                getOldestHighestCpmBid: function () {
                  return qe;
                },
                getParameterByName: function () {
                  return te;
                },
                getPerformanceNow: function () {
                  return He;
                },
                getPrebidInternal: function () {
                  return k;
                },
                getUniqueIdentifierStr: function () {
                  return P;
                },
                getUserConfiguredParams: function () {
                  return Xe;
                },
                getValue: function () {
                  return Be;
                },
                getValueString: function () {
                  return Te;
                },
                getWindowFromDocument: function () {
                  return On;
                },
                getWindowLocation: function () {
                  return H;
                },
                getWindowSelf: function () {
                  return K;
                },
                getWindowTop: function () {
                  return L;
                },
                groupBy: function () {
                  return Qe;
                },
                hasConsoleLogger: function () {
                  return X;
                },
                hasDeviceAccess: function () {
                  return Ge;
                },
                hasOwn: function () {
                  return ve;
                },
                inIframe: function () {
                  return We;
                },
                insertElement: function () {
                  return he;
                },
                insertHtmlIntoIframe: function () {
                  return we;
                },
                insertUserSyncIframe: function () {
                  return Ee;
                },
                internal: function () {
                  return O;
                },
                isA: function () {
                  return re;
                },
                isAdUnitCodeMatchingSlot: function () {
                  return tn;
                },
                isApnGetTagDefined: function () {
                  return Pe;
                },
                isArray: function () {
                  return ae;
                },
                isArrayOfNums: function () {
                  return gn;
                },
                isBoolean: function () {
                  return se;
                },
                isEmpty: function () {
                  return de;
                },
                isEmptyStr: function () {
                  return fe;
                },
                isFn: function () {
                  return ie;
                },
                isGptPubadsDefined: function () {
                  return Re;
                },
                isInteger: function () {
                  return cn;
                },
                isNumber: function () {
                  return ue;
                },
                isPlainObject: function () {
                  return ce;
                },
                isSafariBrowser: function () {
                  return Fe;
                },
                isSlotMatchingAdUnitCode: function () {
                  return rn;
                },
                isStr: function () {
                  return oe;
                },
                isValidMediaTypes: function () {
                  return $e;
                },
                logError: function () {
                  return Q;
                },
                logInfo: function () {
                  return V;
                },
                logMessage: function () {
                  return G;
                },
                logWarn: function () {
                  return J;
                },
                memoize: function () {
                  return kn;
                },
                mergeDeep: function () {
                  return Tn;
                },
                parseGPTSingleSizeArray: function () {
                  return W;
                },
                parseGPTSingleSizeArrayToRtbSize: function () {
                  return F;
                },
                parseQS: function () {
                  return yn;
                },
                parseQueryStringParameters: function () {
                  return Z;
                },
                parseSizesInput: function () {
                  return M;
                },
                parseUrl: function () {
                  return En;
                },
                pick: function () {
                  return fn;
                },
                prefixLog: function () {
                  return Y;
                },
                replaceAuctionPrice: function () {
                  return ze;
                },
                replaceClickThrough: function () {
                  return Le;
                },
                safeJSONParse: function () {
                  return Sn;
                },
                setScriptAttributes: function () {
                  return Bn;
                },
                shuffle: function () {
                  return xe;
                },
                timestamp: function () {
                  return Ke;
                },
                transformAdServerTargetingObj: function () {
                  return x;
                },
                triggerPixel: function () {
                  return be;
                },
                tryAppendQueryString: function () {
                  return _;
                },
                uniques: function () {
                  return Ie;
                },
                unsupportedBidderMessage: function () {
                  return un;
                },
                waitForElementToLoad: function () {
                  return me;
                },
              });
            var r,
              i = t(93324),
              o = t(89062),
              a = t(4942),
              u = t(71002),
              c = t(3193),
              s = t(77079),
              d = t.n(s),
              f = t(34614),
              l = t(5644),
              g = t(68792),
              p = t(78640),
              v = t(20265),
              h = t(96475),
              m = Object.prototype.toString,
              b = Boolean(window.console),
              y = Boolean(b && window.console.log),
              w = Boolean(b && window.console.info),
              E = Boolean(b && window.console.warn),
              C = Boolean(b && window.console.error),
              A = (0, p.R)();
            function T(e) {
              r = e;
            }
            function I() {
              null != r && r.apply(void 0, arguments);
            }
            var O = {
                checkCookieSupport: Ve,
                createTrackPixelIframeHtml: Ae,
                getWindowSelf: K,
                getWindowTop: L,
                getWindowLocation: H,
                insertUserSyncIframe: Ee,
                insertElement: he,
                isFn: ie,
                triggerPixel: be,
                logError: Q,
                logWarn: J,
                logMessage: G,
                logInfo: V,
                parseQS: yn,
                formatQS: wn,
                deepEqual: An,
              },
              S = {};
            function k() {
              return S;
            }
            var B,
              j = {},
              U =
                function (e, n) {
                  return n;
                }.bind(null, 1, j)() === j
                  ? Function.prototype.bind
                  : function (e) {
                      var n = this,
                        t = Array.prototype.slice.call(arguments, 1);
                      return function () {
                        return n.apply(
                          e,
                          t.concat(Array.prototype.slice.call(arguments)),
                        );
                      };
                    },
              R =
                ((B = 0),
                function () {
                  return ++B;
                });
            function P() {
              return R() + Math.random().toString(16).substr(2);
            }
            function D(e) {
              return e
                ? (
                    e ^
                    ((window && window.crypto && window.crypto.getRandomValues
                      ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                      : 16 * Math.random()) >>
                      (e / 4))
                  ).toString(16)
                : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, D);
            }
            function q(e, n) {
              return n && n[e] ? n[e] : '';
            }
            function _(e, n, t) {
              return t ? e + n + '=' + encodeURIComponent(t) + '&' : e;
            }
            function Z(e) {
              var n = '';
              for (var t in e)
                e.hasOwnProperty(t) &&
                  (n += t + '=' + encodeURIComponent(e[t]) + '&');
              return (n = n.replace(/&$/, ''));
            }
            function x(e) {
              return e && Object.getOwnPropertyNames(e).length > 0
                ? ke(e)
                    .map(function (n) {
                      return ''
                        .concat(n, '=')
                        .concat(encodeURIComponent(Be(e, n)));
                    })
                    .join('&')
                : '';
            }
            function N(e) {
              if (e) {
                var n = [];
                if (
                  e.mediaTypes &&
                  e.mediaTypes.banner &&
                  Array.isArray(e.mediaTypes.banner.sizes)
                ) {
                  var t = e.mediaTypes.banner.sizes;
                  Array.isArray(t[0]) ? (n = t) : n.push(t);
                } else
                  Array.isArray(e.sizes) &&
                    (Array.isArray(e.sizes[0])
                      ? (n = e.sizes)
                      : n.push(e.sizes));
                return n;
              }
            }
            function M(e) {
              var n = [];
              if ('string' == typeof e) {
                var t = e.split(','),
                  r = /^(\d)+x(\d)+$/i;
                if (t)
                  for (var i in t) ve(t, i) && t[i].match(r) && n.push(t[i]);
              } else if ('object' === (0, u.Z)(e)) {
                var o = e.length;
                if (o > 0)
                  if (
                    2 === o &&
                    'number' == typeof e[0] &&
                    'number' == typeof e[1]
                  )
                    n.push(W(e));
                  else for (var a = 0; a < o; a++) n.push(W(e[a]));
              }
              return n;
            }
            function W(e) {
              if (z(e)) return e[0] + 'x' + e[1];
            }
            function F(e) {
              if (z(e)) return { w: e[0], h: e[1] };
            }
            function z(e) {
              return ae(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
            }
            function L() {
              return window.top;
            }
            function K() {
              return window.self;
            }
            function H() {
              return window.location;
            }
            function G() {
              ee() && y && console.log.apply(console, $(arguments, 'MESSAGE:'));
            }
            function V() {
              ee() && w && console.info.apply(console, $(arguments, 'INFO:'));
            }
            function J() {
              ee() &&
                E &&
                console.warn.apply(console, $(arguments, 'WARNING:')),
                I(l.FP.AUCTION_DEBUG, {
                  type: 'WARNING',
                  arguments: arguments,
                });
            }
            function Q() {
              ee() && C && console.error.apply(console, $(arguments, 'ERROR:')),
                I(l.FP.AUCTION_DEBUG, { type: 'ERROR', arguments: arguments });
            }
            function Y(e) {
              function n(n) {
                return function () {
                  for (
                    var t = arguments.length, r = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    r[i] = arguments[i];
                  n.apply(void 0, [e].concat(r));
                };
              }
              return {
                logError: n(Q),
                logWarn: n(J),
                logMessage: n(G),
                logInfo: n(V),
              };
            }
            function $(e, n) {
              e = [].slice.call(e);
              var t = c.vc.getCurrentBidder();
              return (
                n && e.unshift(n),
                t && e.unshift(r('#aaa')),
                e.unshift(r('#3b88c3')),
                e.unshift('%cPrebid' + (t ? '%c'.concat(t) : '')),
                e
              );
              function r(e) {
                return 'display: inline-block; color: #fff; background: '.concat(
                  e,
                  '; padding: 1px 4px; border-radius: 3px;',
                );
              }
            }
            function X() {
              return y;
            }
            function ee() {
              return !!c.vc.getConfig('debug');
            }
            function ne() {
              var e = document.createElement('iframe');
              return (
                (e.id = P()),
                (e.height = 0),
                (e.width = 0),
                (e.border = '0px'),
                (e.hspace = '0'),
                (e.vspace = '0'),
                (e.marginWidth = '0'),
                (e.marginHeight = '0'),
                (e.style.border = '0'),
                (e.scrolling = 'no'),
                (e.frameBorder = '0'),
                (e.src = 'about:blank'),
                (e.style.display = 'none'),
                e
              );
            }
            function te(e) {
              return yn(H().search)[e] || '';
            }
            function re(e, n) {
              return m.call(e) === '[object ' + n + ']';
            }
            function ie(e) {
              return re(e, 'Function');
            }
            function oe(e) {
              return re(e, 'String');
            }
            function ae(e) {
              return re(e, 'Array');
            }
            function ue(e) {
              return re(e, 'Number');
            }
            function ce(e) {
              return re(e, 'Object');
            }
            function se(e) {
              return re(e, 'Boolean');
            }
            function de(e) {
              if (!e) return !0;
              if (ae(e) || oe(e)) return !(e.length > 0);
              for (var n in e) if (hasOwnProperty.call(e, n)) return !1;
              return !0;
            }
            function fe(e) {
              return oe(e) && (!e || 0 === e.length);
            }
            function le(e, n) {
              if (!de(e)) {
                if (ie(e.forEach)) return e.forEach(n, this);
                var t = 0,
                  r = e.length;
                if (r > 0) for (; t < r; t++) n(e[t], t, e);
                else
                  for (t in e)
                    hasOwnProperty.call(e, t) && n.call(this, e[t], t);
              }
            }
            function ge(e, n) {
              if (de(e)) return !1;
              if (ie(e.indexOf)) return -1 !== e.indexOf(n);
              for (var t = e.length; t--; ) if (e[t] === n) return !0;
              return !1;
            }
            function pe(e, n) {
              if (de(e)) return [];
              if (ie(e.map)) return e.map(n);
              var t = [];
              return (
                le(e, function (r, i) {
                  t.push(n(r, i, e));
                }),
                t
              );
            }
            function ve(e, n) {
              return e.hasOwnProperty
                ? e.hasOwnProperty(n)
                : void 0 !== e[n] && e.constructor.prototype[n] !== e[n];
            }
            function he(e, n, t, r) {
              var i;
              (n = n || document),
                (i = t
                  ? n.getElementsByTagName(t)
                  : n.getElementsByTagName('head'));
              try {
                if (
                  (i = i.length ? i : n.getElementsByTagName('body')).length
                ) {
                  i = i[0];
                  var o = r ? null : i.firstChild;
                  return i.insertBefore(e, o);
                }
              } catch (e) {}
            }
            function me(e, n) {
              var t = null;
              return new g.Z(function (r) {
                var i = function n() {
                  e.removeEventListener('load', n),
                    e.removeEventListener('error', n),
                    null != t && window.clearTimeout(t),
                    r();
                };
                e.addEventListener('load', i),
                  e.addEventListener('error', i),
                  null != n && (t = window.setTimeout(i, n));
              });
            }
            function be(e, n, t) {
              var r = new Image();
              n && O.isFn(n) && me(r, t).then(n), (r.src = e);
            }
            function ye(e) {
              var n = e.source,
                t = e.burl;
              n === l.os.YZ && t && O.triggerPixel(t);
            }
            function we(e) {
              if (e) {
                var n = document.createElement('iframe');
                (n.id = P()),
                  (n.width = 0),
                  (n.height = 0),
                  (n.hspace = '0'),
                  (n.vspace = '0'),
                  (n.marginWidth = '0'),
                  (n.marginHeight = '0'),
                  (n.style.display = 'none'),
                  (n.style.height = '0px'),
                  (n.style.width = '0px'),
                  (n.scrolling = 'no'),
                  (n.frameBorder = '0'),
                  (n.allowtransparency = 'true'),
                  O.insertElement(n, document, 'body'),
                  n.contentWindow.document.open(),
                  n.contentWindow.document.write(e),
                  n.contentWindow.document.close();
              }
            }
            function Ee(e, n, t) {
              var r = O.createTrackPixelIframeHtml(
                  e,
                  !1,
                  'allow-scripts allow-same-origin',
                ),
                i = document.createElement('div');
              i.innerHTML = r;
              var o = i.firstChild;
              n && O.isFn(n) && me(o, t).then(n),
                O.insertElement(o, document, 'html', !0);
            }
            function Ce(e) {
              if (!e) return '';
              var n =
                '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
              return (n += '<img src="' + encodeURI(e) + '"></div>');
            }
            function Ae(e) {
              var n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : '';
              return e
                ? (n && (e = encodeURI(e)),
                  t && (t = 'sandbox="'.concat(t, '"')),
                  '<iframe '
                    .concat(t, ' id="')
                    .concat(
                      P(),
                      '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="',
                    )
                    .concat(e, '">\n    </iframe>'))
                : '';
            }
            function Te(e, n, t) {
              return null == n
                ? t
                : oe(n)
                ? n
                : ue(n)
                ? n.toString()
                : void O.logWarn(
                    'Unsuported type for param: ' +
                      e +
                      ' required type: String',
                  );
            }
            function Ie(e, n, t) {
              return t.indexOf(e) === n;
            }
            function Oe(e, n) {
              return e.concat(n);
            }
            function Se(e, n) {
              var t;
              if (e)
                return (
                  n.some(function (n) {
                    var r = (0, f.sE)(n.bids, function (n) {
                      return ['bidId', 'adId', 'bid_id'].some(function (t) {
                        return n[t] === e;
                      });
                    });
                    return r && (t = r), r;
                  }),
                  t
                );
            }
            function ke(e) {
              return Object.keys(e);
            }
            function Be(e, n) {
              return e[n];
            }
            function je(e, n) {
              for (var t in e) if (e.hasOwnProperty(t) && e[t] === n) return t;
            }
            function Ue() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A.adUnits;
              return e
                .map(function (e) {
                  return e.bids
                    .map(function (e) {
                      return e.bidder;
                    })
                    .reduce(Oe, []);
                })
                .reduce(Oe, [])
                .filter(function (e) {
                  return void 0 !== e;
                })
                .filter(Ie);
            }
            function Re() {
              if (
                window.googletag &&
                ie(window.googletag.pubads) &&
                ie(window.googletag.pubads().getSlots)
              )
                return !0;
            }
            function Pe() {
              if (window.apntag && ie(window.apntag.getTag)) return !0;
            }
            var De = Ze('timeToRespond', function (e, n) {
                return e > n;
              }),
              qe = Ze('responseTimestamp', function (e, n) {
                return e > n;
              }),
              _e = Ze('responseTimestamp', function (e, n) {
                return e < n;
              });
            function Ze(e, n) {
              return function (t, r) {
                return t.cpm === r.cpm
                  ? n(t[e], r[e])
                    ? r
                    : t
                  : t.cpm < r.cpm
                  ? r
                  : t;
              };
            }
            function xe(e) {
              for (var n = e.length; n > 0; ) {
                var t = Math.floor(Math.random() * n),
                  r = e[--n];
                (e[n] = e[t]), (e[t] = r);
              }
              return e;
            }
            function Ne(e, n) {
              return (0, f.q9)(e, n && n.adUnitCode);
            }
            function Me(e) {
              return d()(e);
            }
            function We() {
              try {
                return O.getWindowSelf() !== O.getWindowTop();
              } catch (e) {
                return !0;
              }
            }
            function Fe() {
              return /^((?!chrome|android|crios|fxios).)*safari/i.test(
                navigator.userAgent,
              );
            }
            function ze(e, n) {
              if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n);
            }
            function Le(e, n) {
              if (e && n && 'string' == typeof n)
                return e.replace(/\${CLICKTHROUGH}/g, n);
            }
            function Ke() {
              return new Date().getTime();
            }
            function He() {
              return (
                (window.performance &&
                  window.performance.now &&
                  window.performance.now()) ||
                0
              );
            }
            function Ge() {
              return !1 !== c.vc.getConfig('deviceAccess');
            }
            function Ve() {
              if (window.navigator.cookieEnabled || document.cookie.length)
                return !0;
            }
            function Je(e, n) {
              if (n < 1)
                throw new Error(
                  'numRequiredCalls must be a positive number. Got '.concat(n),
                );
              var t = 0;
              return function () {
                ++t === n && e.apply(this, arguments);
              };
            }
            function Qe(e, n) {
              return e.reduce(function (e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e;
              }, {});
            }
            function Ye(e, n) {
              return n
                .filter(function (n) {
                  return e[n];
                })
                .reduce(function (n, t) {
                  return Object.assign(n, (0, a.Z)({}, t, e[t]));
                }, {});
            }
            function $e(e) {
              var n = ['banner', 'native', 'video'];
              return (
                !!Object.keys(e).every(function (e) {
                  return (0, f.q9)(n, e);
                }) &&
                (!e.video ||
                  !e.video.context ||
                  (0, f.q9)(
                    ['instream', 'outstream', 'adpod'],
                    e.video.context,
                  ))
              );
            }
            function Xe(e, n, t) {
              return e
                .filter(function (e) {
                  return e.code === n;
                })
                .map(function (e) {
                  return e.bids;
                })
                .reduce(Oe, [])
                .filter(function (e) {
                  return e.bidder === t;
                })
                .map(function (e) {
                  return e.params || {};
                });
            }
            function en() {
              return (
                '1' === navigator.doNotTrack ||
                '1' === window.doNotTrack ||
                '1' === navigator.msDoNotTrack ||
                'yes' === navigator.doNotTrack
              );
            }
            var nn = function (e, n) {
              return e.getAdUnitPath() === n || e.getSlotElementId() === n;
            };
            function tn(e) {
              return function (n) {
                return nn(e, n);
              };
            }
            function rn(e) {
              return function (n) {
                return nn(n, e);
              };
            }
            function on(e) {
              var n;
              return (
                Re() &&
                  (n = (0, f.sE)(window.googletag.pubads().getSlots(), rn(e))),
                n
              );
            }
            function an(e) {
              var n = on(e);
              return n
                ? { gptSlot: n.getAdUnitPath(), divId: n.getSlotElementId() }
                : {};
            }
            function un(e, n) {
              var t = Object.keys(e.mediaTypes || { banner: 'banner' }).join(
                ', ',
              );
              return '\n    '
                .concat(e.code, ' is a ')
                .concat(
                  t,
                  " ad unit\n    containing bidders that don't support ",
                )
                .concat(t, ': ')
                .concat(n, ".\n    This bidder won't fetch demand.\n  ");
            }
            function cn(e) {
              return Number.isInteger
                ? Number.isInteger(e)
                : 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
            }
            function sn(e) {
              return e
                .replace(/(?:^|\.?)([A-Z])/g, function (e, n) {
                  return '_' + n.toLowerCase();
                })
                .replace(/^_/, '');
            }
            function dn(e) {
              return Object.keys(e).reduce(function (n, t) {
                return void 0 !== e[t] && (n[t] = e[t]), n;
              }, {});
            }
            function fn(e, n) {
              return 'object' !== (0, u.Z)(e)
                ? {}
                : n.reduce(function (t, r, i) {
                    if ('function' == typeof r) return t;
                    var o = r,
                      a = r.match(/^(.+?)\sas\s(.+?)$/i);
                    a && ((r = a[1]), (o = a[2]));
                    var u = e[r];
                    return (
                      'function' == typeof n[i + 1] && (u = n[i + 1](u, t)),
                      void 0 !== u && (t[o] = u),
                      t
                    );
                  }, {});
            }
            function ln(e, n) {
              return (
                Object.keys(e).forEach(function (t) {
                  var r, i;
                  n[t] &&
                    (ie(e[t])
                      ? (n[t] = e[t](n[t]))
                      : (n[t] =
                          ((r = e[t]),
                          (i = n[t]),
                          'string' === r
                            ? i && i.toString()
                            : 'number' === r
                            ? Number(i)
                            : i)),
                    isNaN(n[t]) && delete n.key);
                }),
                n
              );
            }
            function gn(e, n) {
              return (
                ae(e) &&
                (!n || e.length === n) &&
                e.every(function (e) {
                  return cn(e);
                })
              );
            }
            function pn(e, n) {
              for (var t = [], r = 0; r < n; r++) {
                var i = ce(e) ? Me(e) : e;
                t.push(i);
              }
              return t;
            }
            function vn(e, n) {
              for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
                var i = r * n,
                  o = i + n;
                t.push(e.slice(i, o));
              }
              return t;
            }
            function hn(e) {
              return Math.min.apply(Math, (0, o.Z)(e));
            }
            function mn(e) {
              return Math.max.apply(Math, (0, o.Z)(e));
            }
            function bn(e) {
              return function (n, t) {
                return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0;
              };
            }
            function yn(e) {
              return e
                ? e
                    .replace(/^\?/, '')
                    .split('&')
                    .reduce(function (e, n) {
                      var t = n.split('='),
                        r = (0, i.Z)(t, 2),
                        o = r[0],
                        a = r[1];
                      return (
                        /\[\]$/.test(o)
                          ? ((e[(o = o.replace('[]', ''))] = e[o] || []),
                            e[o].push(a))
                          : (e[o] = a || ''),
                        e
                      );
                    }, {})
                : {};
            }
            function wn(e) {
              return Object.keys(e)
                .map(function (n) {
                  return Array.isArray(e[n])
                    ? e[n]
                        .map(function (e) {
                          return ''.concat(n, '[]=').concat(e);
                        })
                        .join('&')
                    : ''.concat(n, '=').concat(e[n]);
                })
                .join('&');
            }
            function En(e, n) {
              var t = document.createElement('a');
              n && 'noDecodeWholeURL' in n && n.noDecodeWholeURL
                ? (t.href = e)
                : (t.href = decodeURIComponent(e));
              var r =
                n && 'decodeSearchAsString' in n && n.decodeSearchAsString;
              return {
                href: t.href,
                protocol: (t.protocol || '').replace(/:$/, ''),
                hostname: t.hostname,
                port: +t.port,
                pathname: t.pathname.replace(/^(?!\/)/, '/'),
                search: r ? t.search : O.parseQS(t.search || ''),
                hash: (t.hash || '').replace(/^#/, ''),
                host: t.host || window.location.host,
              };
            }
            function Cn(e) {
              return (
                (e.protocol || 'http') +
                '://' +
                (e.host || e.hostname + (e.port ? ':'.concat(e.port) : '')) +
                (e.pathname || '') +
                (e.search ? '?'.concat(O.formatQS(e.search || '')) : '') +
                (e.hash ? '#'.concat(e.hash) : '')
              );
            }
            function An(e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = t.checkTypes,
                i = void 0 !== r && r;
              if (e === n) return !0;
              if (
                'object' !== (0, u.Z)(e) ||
                null === e ||
                'object' !== (0, u.Z)(n) ||
                null === n ||
                (i && e.constructor !== n.constructor)
              )
                return !1;
              if (Object.keys(e).length !== Object.keys(n).length) return !1;
              for (var o in e) {
                if (!n.hasOwnProperty(o)) return !1;
                if (!An(e[o], n[o], { checkTypes: i })) return !1;
              }
              return !0;
            }
            function Tn(e) {
              for (
                var n = arguments.length,
                  t = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                t[r - 1] = arguments[r];
              if (!t.length) return e;
              var i = t.shift();
              if (ce(e) && ce(i)) {
                var u = function (n) {
                  ce(i[n])
                    ? (e[n] || Object.assign(e, (0, a.Z)({}, n, {})),
                      Tn(e[n], i[n]))
                    : ae(i[n])
                    ? e[n]
                      ? ae(e[n]) &&
                        i[n].forEach(function (t) {
                          for (var r = 1, i = 0; i < e[n].length; i++)
                            if (An(e[n][i], t)) {
                              r = 0;
                              break;
                            }
                          r && e[n].push(t);
                        })
                      : Object.assign(e, (0, a.Z)({}, n, (0, o.Z)(i[n])))
                    : Object.assign(e, (0, a.Z)({}, n, i[n]));
                };
                for (var c in i) u(c);
              }
              return Tn.apply(void 0, [e].concat(t));
            }
            function In(e) {
              for (
                var n,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r = function (e, n) {
                    if (ie(Math.imul)) return Math.imul(e, n);
                    var t = (4194303 & e) * (n |= 0);
                    return (
                      4290772992 & e && (t += ((4290772992 & e) * n) | 0), 0 | t
                    );
                  },
                  i = 3735928559 ^ t,
                  o = 1103547991 ^ t,
                  a = 0;
                a < e.length;
                a++
              )
                (i = r(i ^ (n = e.charCodeAt(a)), 2654435761)),
                  (o = r(o ^ n, 1597334677));
              return (
                (i =
                  r(i ^ (i >>> 16), 2246822507) ^
                  r(o ^ (o >>> 13), 3266489909)),
                (
                  4294967296 *
                    (2097151 &
                      (o =
                        r(o ^ (o >>> 16), 2246822507) ^
                        r(i ^ (i >>> 13), 3266489909))) +
                  (i >>> 0)
                ).toString()
              );
            }
            function On(e) {
              return e ? e.defaultView : null;
            }
            function Sn(e) {
              try {
                return JSON.parse(e);
              } catch (e) {}
            }
            function kn(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (e) {
                        return e;
                      },
                t = new Map(),
                r = function () {
                  var r = n.apply(this, arguments);
                  return (
                    t.has(r) || t.set(r, e.apply(this, arguments)), t.get(r)
                  );
                };
              return (r.clear = t.clear.bind(t)), r;
            }
            function Bn(e, n) {
              for (var t in n) n.hasOwnProperty(t) && e.setAttribute(t, n[t]);
            }
            var jn,
              Un =
                ((jn = {
                  '<': '\\u003C',
                  '>': '\\u003E',
                  '/': '\\u002F',
                  '\\': '\\\\',
                  '\b': '\\b',
                  '\f': '\\f',
                  '\n': '\\n',
                  '\r': '\\r',
                  '\t': '\\t',
                  '\0': '\\0',
                  '\u2028': '\\u2028',
                  '\u2029': '\\u2029',
                }),
                function (e) {
                  return e.replace(
                    /[<>\b\f\n\r\t\0\u2028\u2029\\]/g,
                    function (e) {
                      return jn[e];
                    },
                  );
                });
          },
          36066: function (e, n, t) {
            t.d(n, {
              O: function () {
                return a;
              },
            });
            var r = t(78653),
              i = t(55975),
              o = t(64358);
            function a(e, n, t) {
              var a,
                u =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                c = u.index,
                s = void 0 === c ? r.K.index : c,
                d = u.bs,
                f = void 0 === d ? i.S : d;
              t = t || s.getBidRequest(n);
              var l = null == n ? void 0 : n.adapterCode,
                g =
                  (null == n ? void 0 : n.bidderCode) ||
                  (null === (a = t) || void 0 === a ? void 0 : a.bidder),
                p = f.get(
                  null == n ? void 0 : n.adapterCode,
                  'adjustAlternateBids',
                ),
                v =
                  f.getOwn(g, 'bidCpmAdjustment') ||
                  f.get(p ? l : g, 'bidCpmAdjustment');
              if (v && 'function' == typeof v)
                try {
                  return v(e, Object.assign({}, n), t);
                } catch (e) {
                  (0, o.logError)('Error during bid adjustment', e);
                }
              return e;
            }
          },
          99128: function (e, n, t) {
            t.d(n, {
              A: function () {
                return E;
              },
              Bf: function () {
                return h;
              },
              V6: function () {
                return b;
              },
              g3: function () {
                return w;
              },
            });
            var r = t(93324),
              i = t(3193);
            function o(e, n) {
              var t =
                ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                e['@@iterator'];
              if (!t) {
                if (
                  Array.isArray(e) ||
                  (t = (function (e, n) {
                    if (!e) return;
                    if ('string' == typeof e) return a(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    'Object' === t && e.constructor && (t = e.constructor.name);
                    if ('Map' === t || 'Set' === t) return Array.from(e);
                    if (
                      'Arguments' === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    )
                      return a(e, n);
                  })(e)) ||
                  (n && e && 'number' == typeof e.length)
                ) {
                  t && (e = t);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              }
              var o,
                u = !0,
                c = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return (u = e.done), e;
                },
                e: function (e) {
                  (c = !0), (o = e);
                },
                f: function () {
                  try {
                    u || null == t.return || t.return();
                  } finally {
                    if (c) throw o;
                  }
                },
              };
            }
            function a(e, n) {
              (null == n || n > e.length) && (n = e.length);
              for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
              return r;
            }
            var u = 'performanceMetrics',
              c =
                window.performance && window.performance.now
                  ? function () {
                      return window.performance.now();
                    }
                  : function () {
                      return Date.now();
                    },
              s = new WeakMap();
            function d() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.now,
                t = void 0 === n ? c : n,
                r = e.mkNode,
                i = void 0 === r ? g : r,
                o = e.mkTimer,
                a = void 0 === o ? l : o,
                u = e.mkRenamer,
                d =
                  void 0 === u
                    ? function (e) {
                        return e;
                      }
                    : u,
                f = e.nodes,
                p = void 0 === f ? s : f;
              return function () {
                return (function e(n) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : function (e) {
                          return {
                            forEach: function (n) {
                              n(e);
                            },
                          };
                        };
                  function o(e) {
                    return function (t) {
                      return n.dfWalk({
                        visit: function (n, r) {
                          var i = r[e];
                          if (i.hasOwnProperty(t)) return i[t];
                        },
                      });
                    };
                  }
                  r = d(r);
                  var u = o('timestamps');
                  function c(e, t) {
                    var i = r(e);
                    n.dfWalk({
                      follow: function (e, n) {
                        return n.propagate && (!e || !e.stopPropagation);
                      },
                      visit: function (e, n) {
                        i.forEach(function (r) {
                          null == e
                            ? (n.metrics[r] = t)
                            : (n.groups.hasOwnProperty(r) || (n.groups[r] = []),
                              n.groups[r].push(t));
                        });
                      },
                    });
                  }
                  function s(e) {
                    n.timestamps[e] = t();
                  }
                  function f(e, n) {
                    var r = u(e),
                      i = null != r ? t() - r : null;
                    return null != n && c(n, i), i;
                  }
                  function l(e, n, t) {
                    var r = u(e),
                      i = u(n),
                      o = null != r && null != i ? i - r : null;
                    return null != t && c(t, o), o;
                  }
                  function g(e) {
                    return a(t, function (n) {
                      return c(e, n);
                    });
                  }
                  function v(e, n) {
                    return g(e).stopAfter(n)();
                  }
                  function h(e, n, t) {
                    var r = g(e);
                    return t(
                      (function (e) {
                        var n = r.stopBefore(e);
                        return (
                          (n.bail = e.bail && r.stopBefore(e.bail)),
                          (n.stopTiming = r),
                          (n.untimed = e),
                          n
                        );
                      })(n),
                    );
                  }
                  function m() {
                    var e = {};
                    return (
                      n.dfWalk({
                        visit: function (n, t) {
                          e = Object.assign(
                            {},
                            !n || n.includeGroups ? t.groups : null,
                            t.metrics,
                            e,
                          );
                        },
                      }),
                      e
                    );
                  }
                  function b() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      o = t.propagate,
                      a = void 0 === o || o,
                      u = t.stopPropagation,
                      c = void 0 !== u && u,
                      s = t.includeGroups,
                      d = void 0 !== s && s;
                    return e(
                      i([
                        [
                          n,
                          {
                            propagate: a,
                            stopPropagation: c,
                            includeGroups: d,
                          },
                        ],
                      ]),
                      r,
                    );
                  }
                  function y(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = t.propagate,
                      i = void 0 === r || r,
                      o = t.stopPropagation,
                      a = void 0 !== o && o,
                      u = t.includeGroups,
                      c = void 0 !== u && u,
                      s = p.get(e);
                    null != s &&
                      s.addParent(n, {
                        propagate: i,
                        stopPropagation: a,
                        includeGroups: c,
                      });
                  }
                  function w(t) {
                    return e(n, t);
                  }
                  function E() {
                    return e(n.newSibling(), r);
                  }
                  var C = {
                    startTiming: g,
                    measureTime: v,
                    measureHookTime: h,
                    checkpoint: s,
                    timeSince: f,
                    timeBetween: l,
                    setMetric: c,
                    getMetrics: m,
                    fork: b,
                    join: y,
                    newMetrics: E,
                    renameWith: w,
                    toJSON: function () {
                      return m();
                    },
                  };
                  return p.set(C, n), C;
                })(i([]));
              };
            }
            function f(e, n, t) {
              return function () {
                n && n();
                try {
                  return e.apply(this, arguments);
                } finally {
                  t && t();
                }
              };
            }
            function l(e, n) {
              var t = e(),
                r = !1;
              function i() {
                r || (n(e() - t), (r = !0));
              }
              return (
                (i.stopBefore = function (e) {
                  return f(e, i);
                }),
                (i.stopAfter = function (e) {
                  return f(e, null, i);
                }),
                i
              );
            }
            function g(e) {
              return {
                metrics: {},
                timestamps: {},
                groups: {},
                addParent: function (n, t) {
                  e.push([n, t]);
                },
                newSibling: function () {
                  return g(e.slice());
                },
                dfWalk: function () {
                  var n,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    i = t.visit,
                    a = t.follow,
                    u =
                      void 0 === a
                        ? function () {
                            return !0;
                          }
                        : a,
                    c = t.visited,
                    s = void 0 === c ? new Set() : c,
                    d = t.inEdge;
                  if (!s.has(this)) {
                    if ((s.add(this), null != (n = i(d, this)))) return n;
                    var f,
                      l = o(e);
                    try {
                      for (l.s(); !(f = l.n()).done; ) {
                        var g = (0, r.Z)(f.value, 2),
                          p = g[0],
                          v = g[1];
                        if (
                          u(d, v) &&
                          null !=
                            (n = p.dfWalk({
                              visit: i,
                              follow: u,
                              visited: s,
                              inEdge: v,
                            }))
                        )
                          return n;
                      }
                    } catch (e) {
                      l.e(e);
                    } finally {
                      l.f();
                    }
                  }
                },
              };
            }
            var p = (function () {
                var e = function () {},
                  n = function () {
                    return {};
                  },
                  t = { forEach: e },
                  r = function () {
                    return null;
                  };
                (r.stopBefore = function (e) {
                  return e;
                }),
                  (r.stopAfter = function (e) {
                    return e;
                  });
                var i = Object.defineProperties(
                  {
                    dfWalk: e,
                    newSibling: function () {
                      return i;
                    },
                    addParent: e,
                  },
                  Object.fromEntries(
                    ['metrics', 'timestamps', 'groups'].map(function (e) {
                      return [e, { get: n }];
                    }),
                  ),
                );
                return d({
                  now: function () {
                    return 0;
                  },
                  mkNode: function () {
                    return i;
                  },
                  mkRenamer: function () {
                    return function () {
                      return t;
                    };
                  },
                  mkTimer: function () {
                    return r;
                  },
                  nodes: { get: e, set: e },
                })();
              })(),
              v = !0;
            function h(e) {
              return (v && e) || p;
            }
            i.vc.getConfig(u, function (e) {
              v = !!e[u];
            });
            var m,
              b =
                ((m = d()),
                function () {
                  return v ? m() : p;
                });
            function y(e, n) {
              return function (t, r) {
                return function (i) {
                  for (
                    var o = arguments.length,
                      a = new Array(o > 1 ? o - 1 : 0),
                      u = 1;
                    u < o;
                    u++
                  )
                    a[u - 1] = arguments[u];
                  var c = this;
                  return h(n.apply(c, a)).measureHookTime(
                    e + t,
                    i,
                    function (e) {
                      return r.call.apply(r, [c, e].concat(a));
                    },
                  );
                };
              };
            }
            var w = y('requestBids.', function (e) {
                return e.metrics;
              }),
              E = y('addBidResponse.', function (e, n) {
                return n.metrics;
              });
          },
          68792: function (e, n, t) {
            t.d(n, {
              P: function () {
                return h;
              },
              Z: function () {
                return p;
              },
            });
            var r = t(93324),
              i = t(15671),
              o = t(43144),
              a = t(18916),
              u = t(42793);
            function c(e, n, t) {
              !(function (e, n) {
                if (n.has(e))
                  throw new TypeError(
                    'Cannot initialize the same private elements twice on an object',
                  );
              })(e, n),
                n.set(e, t);
            }
            function s(e, n, t) {
              return (
                (function (e, n) {
                  if (e !== n)
                    throw new TypeError(
                      'Private static access of wrong provenance',
                    );
                })(e, n),
                t
              );
            }
            var d = 0,
              f = 1,
              l = new WeakMap(),
              g = new WeakMap(),
              p = (function () {
                function e(n) {
                  if (
                    ((0, i.Z)(this, e),
                    c(this, l, { writable: !0, value: void 0 }),
                    c(this, g, { writable: !0, value: void 0 }),
                    'function' != typeof n)
                  )
                    throw new Error('resolver not a function');
                  var t = [],
                    o = [],
                    a = [d, f].map(function (e) {
                      return function (n) {
                        if (
                          e === d &&
                          'function' == typeof (null == n ? void 0 : n.then)
                        )
                          n.then(p, v);
                        else if (!t.length)
                          for (t.push(e, n); o.length; ) o.shift()();
                      };
                    }),
                    s = (0, r.Z)(a, 2),
                    p = s[0],
                    v = s[1];
                  try {
                    n(p, v);
                  } catch (e) {
                    v(e);
                  }
                  (0, u.Z)(this, l, t), (0, u.Z)(this, g, o);
                }
                return (
                  (0, o.Z)(
                    e,
                    [
                      {
                        key: 'then',
                        value: function (e, n) {
                          var t = this,
                            i = (0, a.Z)(this, l);
                          return new this.constructor(function (o, u) {
                            var c = function () {
                              var t = i[1],
                                a = i[0] === d ? [e, o] : [n, u],
                                c = (0, r.Z)(a, 2),
                                s = c[0],
                                f = c[1];
                              if ('function' == typeof s) {
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return void u(e);
                                }
                                f = o;
                              }
                              f(t);
                            };
                            i.length ? c() : (0, a.Z)(t, g).push(c);
                          });
                        },
                      },
                      {
                        key: 'catch',
                        value: function (e) {
                          return this.then(null, e);
                        },
                      },
                      {
                        key: 'finally',
                        value: function (e) {
                          var n,
                            t = this;
                          return this.then(
                            function (t) {
                              return (n = t), e();
                            },
                            function (r) {
                              return (n = t.constructor.reject(r)), e();
                            },
                          ).then(function () {
                            return n;
                          });
                        },
                      },
                    ],
                    [
                      {
                        key: 'timeout',
                        value: function () {
                          var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          return new e(function (e) {
                            0 === n ? e() : setTimeout(e, n);
                          });
                        },
                      },
                      {
                        key: 'race',
                        value: function (n) {
                          var t = this;
                          return new this(function (r, i) {
                            s(t, e, v).call(t, n, function (e, n) {
                              return e ? r(n) : i(n);
                            });
                          });
                        },
                      },
                      {
                        key: 'all',
                        value: function (n) {
                          var t = this;
                          return new this(function (r, i) {
                            var o = [];
                            s(t, e, v).call(
                              t,
                              n,
                              function (e, n, t) {
                                return e ? (o[t] = n) : i(n);
                              },
                              function () {
                                return r(o);
                              },
                            );
                          });
                        },
                      },
                      {
                        key: 'allSettled',
                        value: function (n) {
                          var t = this;
                          return new this(function (r) {
                            var i = [];
                            s(t, e, v).call(
                              t,
                              n,
                              function (e, n, t) {
                                return (i[t] = e
                                  ? { status: 'fulfilled', value: n }
                                  : { status: 'rejected', reason: n });
                              },
                              function () {
                                return r(i);
                              },
                            );
                          });
                        },
                      },
                      {
                        key: 'resolve',
                        value: function (e) {
                          return new this(function (n) {
                            return n(e);
                          });
                        },
                      },
                      {
                        key: 'reject',
                        value: function (e) {
                          return new this(function (n, t) {
                            return t(e);
                          });
                        },
                      },
                    ],
                  ),
                  e
                );
              })();
            function v(e, n, t) {
              var r = this,
                i = e.length;
              function o() {
                n.apply(this, arguments), --i <= 0 && t && t();
              }
              0 === e.length && t
                ? t()
                : e.forEach(function (e, n) {
                    return r.resolve(e).then(
                      function (e) {
                        return o(!0, e, n);
                      },
                      function (e) {
                        return o(!1, e, n);
                      },
                    );
                  });
            }
            function h() {
              var e,
                n,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = t.promiseFactory,
                i =
                  void 0 === r
                    ? function (e) {
                        return new p(e);
                      }
                    : r;
              function o(e) {
                return function (n) {
                  return e(n);
                };
              }
              return {
                promise: i(function (t, r) {
                  (e = t), (n = r);
                }),
                resolve: o(e),
                reject: o(n),
              };
            }
          },
          90154: function (e, n, t) {
            t.d(n, {
              Dn: function () {
                return f;
              },
              LD: function () {
                return s;
              },
              cx: function () {
                return d;
              },
              gZ: function () {
                return c;
              },
              hD: function () {
                return l;
              },
            });
            var r = t(20265),
              i = t(64358),
              o = t(3193),
              a = t(92797),
              u = t(78653),
              c = 'outstream',
              s = 'instream';
            function d(e) {
              var n,
                t =
                  null == e || null === (n = e.mediaTypes) || void 0 === n
                    ? void 0
                    : n.video;
              null != t &&
                null == t.plcmt &&
                (t.context === c || [2, 3, 4].includes(t.placement)
                  ? (t.plcmt = 4)
                  : t.context !== c &&
                    [2, 6].includes(t.playbackmethod) &&
                    (t.plcmt = 2));
            }
            function f(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = n.index,
                i = void 0 === t ? u.K.index : t,
                o = (0, r.Z)(i.getMediaTypes(e), 'video'),
                a = o && (0, r.Z)(o, 'context'),
                c = o && (0, r.Z)(o, 'useCacheKey'),
                s = i.getAdUnit(e);
              return l(e, s, o, a, c);
            }
            var l = (0, a.z3)(
              'sync',
              function (e, n, t, r, a) {
                return t && (a || r !== c)
                  ? o.vc.getConfig('cache.url') || !e.vastXml || e.vastUrl
                    ? !(!e.vastUrl && !e.vastXml)
                    : ((0, i.logError)(
                        '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      ',
                      ),
                      !1)
                  : !(r === c && !a) ||
                      !!(e.renderer || (n && n.renderer) || t.renderer);
              },
              'checkVideoBidSetup',
            );
          },
          79885: function (e, n, t) {
            t.d(n, {
              h: function () {
                return s;
              },
              z: function () {
                return d;
              },
            });
            var r = t(48928),
              i = t(3193),
              o = t(78653);
            function a(e, n) {
              var t = n ? '<![CDATA['.concat(n, ']]>') : '';
              return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                .concat(e, ']]></VASTAdTagURI>\n        <Impression>')
                .concat(
                  t,
                  '</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>',
                );
            }
            function u(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = n.index,
                r = void 0 === t ? o.K.index : t,
                u = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
                c = r.getAuction(e),
                s = Number(e.ttl) + 15,
                d = { type: 'xml', value: u, ttlseconds: s };
              return (
                i.vc.getConfig('cache.vasttrack') &&
                  ((d.bidder = e.bidder),
                  (d.bidid = e.requestId),
                  (d.aid = e.auctionId)),
                null != c && (d.timestamp = c.getAuctionStart()),
                'string' == typeof e.customCacheKey &&
                  '' !== e.customCacheKey &&
                  (d.key = e.customCacheKey),
                d
              );
            }
            function c(e) {
              return {
                success: function (n) {
                  var t;
                  try {
                    t = JSON.parse(n).responses;
                  } catch (n) {
                    return void e(n, []);
                  }
                  t
                    ? e(null, t)
                    : e(
                        new Error(
                          "The cache server didn't respond with a responses property.",
                        ),
                        [],
                      );
                },
                error: function (n, t) {
                  e(
                    new Error(
                      'Error storing video ad in the cache: '
                        .concat(n, ': ')
                        .concat(JSON.stringify(t)),
                    ),
                    [],
                  );
                },
              };
            }
            function s(e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : r.OI,
                o = { puts: e.map(u) },
                a = t(i.vc.getConfig('cache.timeout'));
              a(i.vc.getConfig('cache.url'), c(n), JSON.stringify(o), {
                contentType: 'text/plain',
                withCredentials: !0,
              });
            }
            function d(e) {
              return ''.concat(i.vc.getConfig('cache.url'), '?uuid=').concat(e);
            }
          },
          20265: function (e, n, t) {
            function r(e, n, t, r, i) {
              for (n = n.split ? n.split('.') : n, r = 0; r < n.length; r++)
                e = e ? e[n[r]] : i;
              return e === i ? t : e;
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          81432: function (e) {
            /*
             * @license MIT
             * Fun Hooks v0.9.10
             * (c) @snapwich
             */
            (a.SYNC = 1), (a.ASYNC = 2), (a.QUEUE = 4);
            var n = Object.freeze({ useProxy: !0, ready: 0 }),
              t = new WeakMap(),
              r =
                '2,1,0' ===
                [1]
                  .reduce(function (e, n, t) {
                    return [e, n, t];
                  }, 2)
                  .toString()
                  ? Array.prototype.reduce
                  : function (e, n) {
                      var t,
                        r = Object(this),
                        i = r.length >>> 0,
                        o = 0;
                      if (n) t = n;
                      else {
                        for (; o < i && !(o in r); ) o++;
                        t = r[o++];
                      }
                      for (; o < i; ) o in r && (t = e(t, r[o], o, r)), o++;
                      return t;
                    };
            function i(e, n) {
              return Array.prototype.slice.call(e, n);
            }
            var o =
              Object.assign ||
              function (e) {
                return r.call(
                  i(arguments, 1),
                  function (e, n) {
                    return (
                      n &&
                        Object.keys(n).forEach(function (t) {
                          e[t] = n[t];
                        }),
                      e
                    );
                  },
                  e,
                );
              };
            function a(e) {
              var u,
                c = {},
                s = [];
              function d(e, n) {
                return 'function' == typeof e
                  ? p.call(null, 'sync', e, n)
                  : 'string' == typeof e && 'function' == typeof n
                  ? p.apply(null, arguments)
                  : 'object' == typeof e
                  ? f.apply(null, arguments)
                  : void 0;
              }
              function f(e, n, t) {
                var r = !0;
                void 0 === n && ((n = Object.getOwnPropertyNames(e)), (r = !1));
                var i = {},
                  o = ['constructor'];
                do {
                  (n = n.filter(function (n) {
                    return !(
                      'function' != typeof e[n] ||
                      -1 !== o.indexOf(n) ||
                      n.match(/^_/)
                    );
                  })).forEach(function (n) {
                    var r = n.split(':'),
                      o = r[0],
                      a = r[1] || 'sync';
                    if (!i[o]) {
                      var u = e[o];
                      i[o] = e[o] = p(a, u, t ? [t, o] : void 0);
                    }
                  }),
                    (e = Object.getPrototypeOf(e));
                } while (r && e);
                return i;
              }
              function l(e) {
                var n = Array.isArray(e) ? e : e.split('.');
                return r.call(
                  n,
                  function (t, r, i) {
                    var o = t[r],
                      a = !1;
                    return (
                      o ||
                      (i === n.length - 1
                        ? (u ||
                            s.push(function () {
                              a ||
                                console.warn(
                                  "fun-hooks: referenced '" +
                                    e +
                                    "' but it was never created",
                                );
                            }),
                          (t[r] = g(function (e) {
                            (t[r] = e), (a = !0);
                          })))
                        : (t[r] = {}))
                    );
                  },
                  c,
                );
              }
              function g(e) {
                var n = [],
                  r = [],
                  i = function () {},
                  a = {
                    before: function (e, t) {
                      return c.call(this, n, 'before', e, t);
                    },
                    after: function (e, n) {
                      return c.call(this, r, 'after', e, n);
                    },
                    getHooks: function (e) {
                      var t = n.concat(r);
                      'object' == typeof e &&
                        (t = t.filter(function (n) {
                          return Object.keys(e).every(function (t) {
                            return n[t] === e[t];
                          });
                        }));
                      try {
                        o(t, {
                          remove: function () {
                            return (
                              t.forEach(function (e) {
                                e.remove();
                              }),
                              this
                            );
                          },
                        });
                      } catch (e) {
                        console.error(
                          'error adding `remove` to array, did you modify Array.prototype?',
                        );
                      }
                      return t;
                    },
                    removeAll: function () {
                      return this.getHooks().remove();
                    },
                  },
                  u = {
                    install: function (t, o, a) {
                      (this.type = t), (i = a), a(n, r), e && e(o);
                    },
                  };
                return t.set(a.after, u), a;
                function c(e, t, o, a) {
                  var u = {
                    hook: o,
                    type: t,
                    priority: a || 10,
                    remove: function () {
                      var t = e.indexOf(u);
                      -1 !== t && (e.splice(t, 1), i(n, r));
                    },
                  };
                  return (
                    e.push(u),
                    e.sort(function (e, n) {
                      return n.priority - e.priority;
                    }),
                    i(n, r),
                    this
                  );
                }
              }
              function p(n, r, c) {
                var d = r.after && t.get(r.after);
                if (d) {
                  if (d.type !== n)
                    throw 'fun-hooks: recreated hookable with different type';
                  return r;
                }
                var f,
                  p,
                  v = c ? l(c) : g(),
                  h = {
                    get: function (e, n) {
                      return v[n] || Reflect.get.apply(Reflect, arguments);
                    },
                  };
                return (
                  u || s.push(m),
                  e.useProxy && 'function' == typeof Proxy && Proxy.revocable
                    ? (p = new Proxy(r, h))
                    : ((p = function () {
                        return h.apply
                          ? h.apply(r, this, i(arguments))
                          : r.apply(this, arguments);
                      }),
                      o(p, v)),
                  t.get(p.after).install(n, p, function (e, t) {
                    var r,
                      o = [];
                    e.length || t.length
                      ? (e.forEach(a),
                        (r = o.push(void 0) - 1),
                        t.forEach(a),
                        (f = function (e, t, a) {
                          var u,
                            c = 0,
                            s =
                              'async' === n &&
                              'function' == typeof a[a.length - 1] &&
                              a.pop();
                          function d(e) {
                            'sync' === n
                              ? (u = e)
                              : s && s.apply(null, arguments);
                          }
                          function f(e) {
                            if (o[c]) {
                              var r = i(arguments);
                              return (
                                (f.bail = d), r.unshift(f), o[c++].apply(t, r)
                              );
                            }
                            'sync' === n
                              ? (u = e)
                              : s && s.apply(null, arguments);
                          }
                          return (
                            (o[r] = function () {
                              var r = i(arguments, 1);
                              'async' === n && s && (delete f.bail, r.push(f));
                              var o = e.apply(t, r);
                              'sync' === n && f(o);
                            }),
                            f.apply(null, a),
                            u
                          );
                        }))
                      : (f = void 0);
                    function a(e) {
                      o.push(e.hook);
                    }
                    m();
                  }),
                  p
                );
                function m() {
                  !u &&
                  ('sync' !== n || e.ready & a.SYNC) &&
                  ('async' !== n || e.ready & a.ASYNC)
                    ? 'sync' !== n && e.ready & a.QUEUE
                      ? (h.apply = function () {
                          var e = arguments;
                          s.push(function () {
                            p.apply(e[1], e[2]);
                          });
                        })
                      : (h.apply = function () {
                          throw 'fun-hooks: hooked function not ready';
                        })
                    : (h.apply = f);
                }
              }
              return (
                (e = o({}, n, e)).ready
                  ? (d.ready = function () {
                      (u = !0),
                        (function (e) {
                          for (var n; (n = e.shift()); ) n();
                        })(s);
                    })
                  : (u = !0),
                (d.get = l),
                d
              );
            }
            e.exports = a;
          },
          77079: function (e) {
            e.exports = function e(n) {
              var t = Array.isArray(n) ? [] : {};
              for (var r in n) {
                var i = n[r];
                t[r] = i && 'object' == typeof i ? e(i) : i;
              }
              return t;
            };
          },
          30907: function (e, n, t) {
            function r(e, n) {
              (null == n || n > e.length) && (n = e.length);
              for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
              return r;
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          83878: function (e, n, t) {
            function r(e) {
              if (Array.isArray(e)) return e;
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          45057: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return i;
              },
            });
            var r = t(30907);
            function i(e) {
              if (Array.isArray(e)) return (0, r.Z)(e);
            }
          },
          97326: function (e, n, t) {
            function r(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          26983: function (e, n, t) {
            function r(e, n) {
              return n.get ? n.get.call(e) : n.value;
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          86011: function (e, n, t) {
            function r(e, n, t) {
              if (n.set) n.set.call(e, t);
              else {
                if (!n.writable)
                  throw new TypeError(
                    'attempted to set read only private field',
                  );
                n.value = t;
              }
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          15671: function (e, n, t) {
            function r(e, n) {
              if (!(e instanceof n))
                throw new TypeError('Cannot call a class as a function');
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          1519: function (e, n, t) {
            function r(e, n, t) {
              if (!n.has(e))
                throw new TypeError(
                  'attempted to ' + t + ' private field on non-instance',
                );
              return n.get(e);
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          18916: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return o;
              },
            });
            var r = t(26983),
              i = t(1519);
            function o(e, n) {
              var t = (0, i.Z)(e, n, 'get');
              return (0, r.Z)(e, t);
            }
          },
          42793: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return o;
              },
            });
            var r = t(86011),
              i = t(1519);
            function o(e, n, t) {
              var o = (0, i.Z)(e, n, 'set');
              return (0, r.Z)(e, o, t), t;
            }
          },
          43144: function (e, n, t) {
            function r(e, n) {
              for (var t = 0; t < n.length; t++) {
                var r = n[t];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function i(e, n, t) {
              return (
                n && r(e.prototype, n),
                t && r(e, t),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                e
              );
            }
            t.d(n, {
              Z: function () {
                return i;
              },
            });
          },
          4942: function (e, n, t) {
            function r(e, n, t) {
              return (
                n in e
                  ? Object.defineProperty(e, n, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[n] = t),
                e
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          61120: function (e, n, t) {
            function r(e) {
              return (
                (r = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                r(e)
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          60136: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return i;
              },
            });
            var r = t(89611);
            function i(e, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                n && (0, r.Z)(e, n);
            }
          },
          59199: function (e, n, t) {
            function r(e) {
              if (
                ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e);
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          31902: function (e, n, t) {
            function r(e, n) {
              var t =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
              if (null != t) {
                var r,
                  i,
                  o = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    t = t.call(e);
                    !(a = (r = t.next()).done) &&
                    (o.push(r.value), !n || o.length !== n);
                    a = !0
                  );
                } catch (e) {
                  (u = !0), (i = e);
                } finally {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (u) throw i;
                  }
                }
                return o;
              }
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          25267: function (e, n, t) {
            function r() {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          42786: function (e, n, t) {
            function r() {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          82963: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return o;
              },
            });
            var r = t(71002),
              i = t(97326);
            function o(e, n) {
              if (n && ('object' === (0, r.Z)(n) || 'function' == typeof n))
                return n;
              if (void 0 !== n)
                throw new TypeError(
                  'Derived constructors may only return object or undefined',
                );
              return (0, i.Z)(e);
            }
          },
          89611: function (e, n, t) {
            function r(e, n) {
              return (
                (r = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (e, n) {
                      return (e.__proto__ = n), e;
                    }),
                r(e, n)
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          93324: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return u;
              },
            });
            var r = t(83878),
              i = t(31902),
              o = t(40181),
              a = t(25267);
            function u(e, n) {
              return (
                (0, r.Z)(e) || (0, i.Z)(e, n) || (0, o.Z)(e, n) || (0, a.Z)()
              );
            }
          },
          89062: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return u;
              },
            });
            var r = t(45057),
              i = t(59199),
              o = t(40181),
              a = t(42786);
            function u(e) {
              return (0, r.Z)(e) || (0, i.Z)(e) || (0, o.Z)(e) || (0, a.Z)();
            }
          },
          71002: function (e, n, t) {
            function r(e) {
              return (
                (r =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      }),
                r(e)
              );
            }
            t.d(n, {
              Z: function () {
                return r;
              },
            });
          },
          40181: function (e, n, t) {
            t.d(n, {
              Z: function () {
                return i;
              },
            });
            var r = t(30907);
            function i(e, n) {
              if (e) {
                if ('string' == typeof e) return (0, r.Z)(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === t && e.constructor && (t = e.constructor.name),
                  'Map' === t || 'Set' === t
                    ? Array.from(e)
                    : 'Arguments' === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? (0, r.Z)(e, n)
                    : void 0
                );
              }
            }
          },
          96475: function (e, n, t) {
            function r(e, n, t) {
              n.split && (n = n.split('.'));
              for (
                var r, i, o = 0, a = n.length, u = e;
                o < a &&
                '__proto__' !== (i = n[o++]) &&
                'constructor' !== i &&
                'prototype' !== i;

              )
                u = u[i] =
                  o === a
                    ? t
                    : typeof (r = u[i]) == typeof n
                    ? r
                    : 0 * n[o] != 0 || ~('' + n[o]).indexOf('.')
                    ? {}
                    : [];
            }
            t.d(n, {
              N: function () {
                return r;
              },
            });
          },
          5644: function (e) {
            e.exports = JSON.parse(
              '{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"Q":1},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat","CRID":"hb_crid","DSP":"hb_dsp"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"},"Gw":{"UI":"Bid has missing or invalid properties","Gp":"Invalid request ID","Dg":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes","pe":"Bid does not meet price floor","Xx":"Unable to convert currency"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"],"C_":{"Ot":"noData","Vs":"adUnit","cl":"setConfig","jR":"fetch","MR":"success"}}',
            );
          },
        },
        t = {};
      function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = (t[e] = { exports: {} });
        return n[e].call(o.exports, o, o.exports, r), o.exports;
      }
      (r.m = n),
        (e = []),
        (r.O = function (n, t, i, o) {
          if (!t) {
            var a = 1 / 0;
            for (d = 0; d < e.length; d++) {
              (t = e[d][0]), (i = e[d][1]), (o = e[d][2]);
              for (var u = !0, c = 0; c < t.length; c++)
                (!1 & o || a >= o) &&
                Object.keys(r.O).every(function (e) {
                  return r.O[e](t[c]);
                })
                  ? t.splice(c--, 1)
                  : ((u = !1), o < a && (a = o));
              if (u) {
                e.splice(d--, 1);
                var s = i();
                void 0 !== s && (n = s);
              }
            }
            return n;
          }
          o = o || 0;
          for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
          e[d] = [t, i, o];
        }),
        (r.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(n, { a: n }), n;
        }),
        (r.d = function (e, n) {
          for (var t in n)
            r.o(n, t) &&
              !r.o(e, t) &&
              Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
          if ('object' == typeof globalThis) return globalThis;
          try {
            return this || new Function('return this')();
          } catch (e) {
            if ('object' == typeof window) return window;
          }
        })()),
        (r.o = function (e, n) {
          return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (r.r = function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (function () {
          var e = { 25602: 0 };
          r.O.j = function (n) {
            return 0 === e[n];
          };
          var n = function (n, t) {
              var i,
                o,
                a = t[0],
                u = t[1],
                c = t[2],
                s = 0;
              if (
                a.some(function (n) {
                  return 0 !== e[n];
                })
              ) {
                for (i in u) r.o(u, i) && (r.m[i] = u[i]);
                if (c) var d = c(r);
              }
              for (n && n(t); s < a.length; s++)
                (o = a[s]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
              return r.O(d);
            },
            t = (self.pbjsChunk = self.pbjsChunk || []);
          t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
      var i = r(23866);
      i = r.O(i);
    })();
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [17968],
      {
        52712: function (n, t, r) {
          r.d(t, {
            b6: function () {
              return p;
            },
            kX: function () {
              return f;
            },
            m1: function () {
              return s;
            },
            sM: function () {
              return u;
            },
          });
          var e = r(4942),
            a = r(93324),
            c = r(89062),
            o = r(68792);
          function i(n, t) {
            var r = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var e = Object.getOwnPropertySymbols(n);
              t &&
                (e = e.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })),
                r.push.apply(r, e);
            }
            return r;
          }
          function l(n) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(r), !0).forEach(function (t) {
                    (0, e.Z)(n, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : i(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      n,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return n;
          }
          var u = 0,
            f = 1,
            s = 2;
          function p(n) {
            var t = n.apiName,
              r = n.apiVersion,
              i = n.apiArgs,
              p =
                void 0 === i
                  ? ['command', 'callback', 'parameter', 'version']
                  : i,
              v = n.callbackArgs,
              b = void 0 === v ? ['returnValue', 'success'] : v,
              d = n.mode,
              O = void 0 === d ? u : d,
              y =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window,
              g = {},
              m = ''.concat(t, 'Call'),
              j = ''.concat(t, 'Return');
            function k(n) {
              var t,
                r =
                  'string' == typeof n.data && n.data.includes(j)
                    ? JSON.parse(n.data)
                    : n.data;
              if (
                null != r &&
                null !== (t = r[j]) &&
                void 0 !== t &&
                t.callId
              ) {
                var e = r[j];
                g.hasOwnProperty(e.callId) &&
                  g[e.callId].apply(
                    g,
                    (0, c.Z)(
                      b.map(function (n) {
                        return e[n];
                      }),
                    ),
                  );
              }
            }
            function h() {
              for (var n, r = y, e = !1; null != r; ) {
                try {
                  if ('function' == typeof r[t]) {
                    (n = r), (e = !0);
                    break;
                  }
                } catch (n) {}
                try {
                  if (r.frames[''.concat(t, 'Locator')]) {
                    n = r;
                    break;
                  }
                } catch (n) {}
                if (r === y.top) break;
                r = r.parent;
              }
              return [n, e];
            }
            var w,
              P = h(),
              Z = (0, a.Z)(P, 2),
              D = Z[0],
              E = Z[1];
            if (D)
              return (
                E
                  ? (w = function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return new o.Z(function (r, e) {
                        var o = D[t].apply(
                          D,
                          (0, c.Z)(
                            I(
                              l(
                                l({}, n),
                                {},
                                {
                                  callback:
                                    n.callback || O === s
                                      ? S(n.callback, r, e)
                                      : void 0,
                                },
                              ),
                            ).map(function (n) {
                              var t = (0, a.Z)(n, 2);
                              t[0];
                              return t[1];
                            }),
                          ),
                        );
                        (O === f || (null == n.callback && O === u)) && r(o);
                      });
                    })
                  : (y.addEventListener('message', k, !1),
                    (w = function (n) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return new o.Z(function (r, c) {
                        var o = Math.random().toString(),
                          i = (0, e.Z)(
                            {},
                            m,
                            l(
                              l(
                                {},
                                Object.fromEntries(
                                  I(n).filter(function (n) {
                                    return 'callback' !== (0, a.Z)(n, 1)[0];
                                  }),
                                ),
                              ),
                              {},
                              { callId: o },
                            ),
                          );
                        (g[o] = S(
                          null == n ? void 0 : n.callback,
                          r,
                          c,
                          (t || null == (null == n ? void 0 : n.callback)) &&
                            function () {
                              delete g[o];
                            },
                        )),
                          D.postMessage(i, '*'),
                          O === f && r();
                      });
                    })),
                Object.assign(w, {
                  isDirect: E,
                  close: function () {
                    !E && y.removeEventListener('message', k);
                  },
                })
              );
            function I(n) {
              return (
                (n = Object.assign({ version: r }, n)),
                p.map(function (t) {
                  return [t, n[t]];
                })
              );
            }
            function S(n, t, r, e) {
              var a = 'function' == typeof n;
              return function (c, o) {
                if ((e && e(), O !== f)) {
                  var i = null == o || o ? t : r;
                  i(a ? void 0 : c);
                }
                a && n.apply(this, arguments);
              };
            }
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [35051],
      {
        77337: function (n, t, e) {
          e.d(t, {
            Ji: function () {
              return O;
            },
          });
          var r,
            i = e(93324),
            o = e(4942),
            u = e(50571),
            a = e(74947),
            c = e(34516),
            s = e(64358);
          function f(n) {
            return null != n && 0 !== n;
          }
          function l(n) {
            return (
              ['MspaServiceProviderMode', 'Gpc'].some(function (t) {
                return 1 === n[t];
              }) ||
              2 === n.PersonalDataConsents ||
              1 === n.KnownChildSensitiveDataConsents[0] ||
              f(n.KnownChildSensitiveDataConsents[1]) ||
              0 === n.MspaCoveredTransaction
            );
          }
          function v(n, t) {
            return [
              'SensitiveDataProcessingOptOutNotice',
              'SensitiveDataLimitUseNotice',
            ].some(function (e) {
              return n[e] === t;
            });
          }
          function d(n) {
            return (
              l(n) ||
              ['Sale', 'Sharing', 'TargetedAdvertising'].some(function (t) {
                var e = n[''.concat(t, 'OptOut')],
                  r = n[''.concat(t, 'OptOutNotice')];
                return 1 === e || 2 === r || (2 === e && 0 === r);
              }) ||
              2 === n.SharingNotice ||
              (2 === n.SharingOptOut && 0 === n.SharingNotice)
            );
          }
          var g,
            h,
            S,
            p =
              ((g = [6, 7, 9, 10, 12].map(function (n) {
                return --n;
              })),
              (h = Array.from(Array(12).keys()).filter(function (n) {
                return 7 !== n;
              })),
              (S = h.filter(function (n) {
                return !g.includes(n);
              })),
              function (n) {
                return (
                  d(n) ||
                  v(n, 2) ||
                  g.some(function (t) {
                    return f(n.SensitiveDataProcessing[t]);
                  }) ||
                  S.some(function (t) {
                    return 1 === n.SensitiveDataProcessing[t];
                  }) ||
                  (v(n, 0) &&
                    h.some(function (t) {
                      return 2 === n.SensitiveDataProcessing[t];
                    }))
                );
              });
          var D =
            ((r = {}),
            (0, o.Z)(r, a.K$, d),
            (0, o.Z)(r, a.EL, d),
            (0, o.Z)(r, a.S5, p),
            (0, o.Z)(r, a.g0, function (n) {
              var t = n.SensitiveDataProcessing[7];
              return 1 === t || l(n) || v(n, 2) || (v(n, 0) && 2 === t);
            }),
            r);
          function m(n, t, e) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    var n;
                    return null === (n = c.TJ.getConsentData()) || void 0 === n
                      ? void 0
                      : n.applicableSections;
                  };
            return function () {
              if (
                r().some(function (t) {
                  return n.includes(t);
                })
              ) {
                var i = t();
                if (null == i)
                  return { allow: !1, reason: 'consent data not available' };
                if (e(i)) return { allow: !1 };
              }
            };
          }
          function C(n) {
            return null == n
              ? n
              : n.reduceRight(function (n, t) {
                  return Object.assign(t, n);
                }, {});
          }
          function O(n, t) {
            var e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function (n) {
                      return n;
                    },
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : D,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : u.oB,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : function () {
                      return c.TJ.getConsentData();
                    },
              f = [],
              l = "MSPA (GPP '"
                .concat(n, "' for section")
                .concat(t.length > 1 ? 's' : '', ' ')
                .concat(t.join(', '), ')');
            return (
              (0, s.logInfo)('Enabling activity controls for '.concat(l)),
              Object.entries(r).forEach(function (r) {
                var u = (0, i.Z)(r, 2),
                  c = u[0],
                  s = u[1];
                f.push(
                  o(
                    c,
                    l,
                    m(
                      t,
                      function () {
                        var t, r;
                        return e(
                          C(
                            null === (t = a()) ||
                              void 0 === t ||
                              null === (r = t.parsedSections) ||
                              void 0 === r
                              ? void 0
                              : r[n],
                          ),
                        );
                      },
                      s,
                      function () {
                        var n;
                        return (
                          (null === (n = a()) || void 0 === n
                            ? void 0
                            : n.applicableSections) || []
                        );
                      },
                    ),
                  ),
                );
              }),
              function () {
                return f.forEach(function (n) {
                  return n();
                });
              }
            );
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [85279],
      {
        24980: function (e, r, t) {
          t.d(r, {
            T: function () {
              return O;
            },
            x: function () {
              return g;
            },
          });
          var n = t(93324),
            i = new WeakMap();
          function o(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (!i.has(e)) {
              var t = Object.entries(e);
              t.sort(function (e, r) {
                return (e = e[1].priority || 0) === (r = r[1].priority || 0)
                  ? 0
                  : e > r
                  ? -1
                  : 1;
              }),
                i.set(
                  e,
                  t.map(function (e) {
                    var r = (0, n.Z)(e, 2);
                    return [r[0], r[1].fn];
                  }),
                );
            }
            var o = i
              .get(e)
              .filter(function (e) {
                var t = (0, n.Z)(e, 1)[0];
                return !r.hasOwnProperty(t) || r[t];
              })
              .map(function (e) {
                var t = (0, n.Z)(e, 2),
                  i = t[0],
                  o = t[1];
                return r.hasOwnProperty(i) ? r[i].bind(this, o) : o;
              });
            return function () {
              var e = this,
                r = Array.from(arguments);
              o.forEach(function (t) {
                t.apply(e, r);
              });
            };
          }
          var a = t(64358),
            s = t(4942),
            d = t(20265),
            p = t(24679);
          function u(e) {
            return (e = (0, a.parseSizesInput)(e)).map(function (e) {
              var r = e.split('x'),
                t = (0, n.Z)(r, 2),
                i = t[0],
                o = t[1];
              return { w: parseInt(i, 10), h: parseInt(o, 10) };
            });
          }
          var f = new Set([
              'pos',
              'placement',
              'plcmt',
              'api',
              'mimes',
              'protocols',
              'playbackmethod',
              'minduration',
              'maxduration',
              'w',
              'h',
              'startdelay',
              'placement',
              'linearity',
              'skip',
              'skipmin',
              'skipafter',
              'minbitrate',
              'maxbitrate',
              'delivery',
              'playbackend',
            ]),
            c = { instream: 1 };
          var m = t(15840);
          var l,
            v = t(26372),
            b = t(83790),
            y =
              ((l = {}),
              (0, s.Z)(l, v.Z, {
                fpd: {
                  priority: 99,
                  fn: function (e, r) {
                    (0, a.mergeDeep)(e, r.ortb2);
                  },
                },
                onlyOneClient: { priority: -99, fn: (0, b.A_)('ORTB request') },
                props: {
                  fn: function (e, r) {
                    Object.assign(e, {
                      id: e.id || (0, a.generateUUID)(),
                      test: e.test || 0,
                    });
                    var t = parseInt(r.timeout, 10);
                    isNaN(t) || (e.tmax = t);
                  },
                },
              }),
              (0, s.Z)(l, v.DZ, {
                fpd: {
                  priority: 99,
                  fn: function (e, r) {
                    (0, a.mergeDeep)(e, r.ortb2Imp);
                  },
                },
                id: {
                  fn: function (e, r) {
                    e.id = r.bidId;
                  },
                },
                banner: {
                  fn: function (e, r, t) {
                    if (!t.mediaType || t.mediaType === p.Mk) {
                      var n = (0, d.Z)(r, 'mediaTypes.banner');
                      if (n) {
                        var i = { topframe: !0 === (0, a.inIframe)() ? 0 : 1 };
                        n.sizes && (i.format = u(n.sizes)),
                          n.hasOwnProperty('pos') && (i.pos = n.pos),
                          (e.banner = (0, a.mergeDeep)(i, e.banner));
                      }
                    }
                  },
                },
                pbadslot: {
                  fn: function (e) {
                    var r,
                      t,
                      n,
                      i,
                      o =
                        null === (r = e.ext) ||
                        void 0 === r ||
                        null === (t = r.data) ||
                        void 0 === t
                          ? void 0
                          : t.pbadslot;
                    (o && 'string' == typeof o) ||
                      null === (n = e.ext) ||
                      void 0 === n ||
                      null === (i = n.data) ||
                      void 0 === i ||
                      delete i.pbadslot;
                  },
                },
              }),
              (0, s.Z)(l, v.Px, {
                mediaType: { priority: 99, fn: m.R },
                banner: {
                  fn: (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = e.createPixel,
                      t =
                        void 0 === r
                          ? function (e) {
                              return (0, a.createTrackPixelHtml)(
                                decodeURIComponent(e),
                              );
                            }
                          : r;
                    return function (e, r) {
                      e.mediaType === p.Mk &&
                        (r.adm && r.nurl
                          ? ((e.ad = r.adm), (e.ad += t(r.nurl)))
                          : r.adm
                          ? (e.ad = r.adm)
                          : r.nurl && (e.adUrl = r.nurl));
                    };
                  })(),
                },
                props: {
                  fn: function (e, r, t) {
                    var i;
                    Object.entries({
                      requestId:
                        null === (i = t.bidRequest) || void 0 === i
                          ? void 0
                          : i.bidId,
                      seatBidId: r.id,
                      cpm: r.price,
                      currency: t.ortbResponse.cur || t.currency,
                      width: r.w,
                      height: r.h,
                      dealId: r.dealid,
                      creative_id: r.crid,
                      creativeId: r.crid,
                      burl: r.burl,
                      ttl: r.exp || t.ttl,
                      netRevenue: t.netRevenue,
                    })
                      .filter(function (e) {
                        var r = (0, n.Z)(e, 2);
                        r[0];
                        return void 0 !== r[1];
                      })
                      .forEach(function (r) {
                        var t = (0, n.Z)(r, 2),
                          i = t[0],
                          o = t[1];
                        return (e[i] = o);
                      }),
                      e.meta || (e.meta = {}),
                      r.adomain && (e.meta.advertiserDomains = r.adomain);
                  },
                },
              }),
              l);
          (y[v.DZ].native = {
            fn: function (e, r, t) {
              if (!t.mediaType || t.mediaType === p.B5) {
                var n,
                  i = r.nativeOrtbRequest;
                i &&
                  (null !==
                    (n = (i = Object.assign({}, t.nativeRequest, i)).assets) &&
                  void 0 !== n &&
                  n.length
                    ? (e.native = (0, a.mergeDeep)(
                        {},
                        { request: JSON.stringify(i), ver: i.ver },
                        e.native,
                      ))
                    : (0, a.logWarn)(
                        'mediaTypes.native is set, but no assets were specified. Native request skipped.',
                        r,
                      ));
              }
            },
          }),
            (y[v.Px].native = {
              fn: function (e, r) {
                if (e.mediaType === p.B5) {
                  var t;
                  if (
                    ((t = 'string' == typeof r.adm ? JSON.parse(r.adm) : r.adm),
                    !(0, a.isPlainObject)(t) || !Array.isArray(t.assets))
                  )
                    throw new Error('ORTB native response contained no assets');
                  e.native = { ortb: t };
                }
              },
            }),
            (y[v.DZ].video = {
              fn: function (e, r, t) {
                if (!t.mediaType || t.mediaType === p.pX) {
                  var i = (0, d.Z)(r, 'mediaTypes.video');
                  if (!(0, a.isEmpty)(i)) {
                    var o = Object.fromEntries(
                      Object.entries(i).filter(function (e) {
                        var r = (0, n.Z)(e, 1)[0];
                        return f.has(r);
                      }),
                    );
                    if (i.playerSize) {
                      var s = u(i.playerSize);
                      s.length > 1 &&
                        (0, a.logWarn)(
                          'video request specifies more than one playerSize; all but the first will be ignored',
                        ),
                        Object.assign(o, s[0]);
                    }
                    var m = c[i.context];
                    null != m && (o.placement = m),
                      (e.video = (0, a.mergeDeep)(o, e.video));
                  }
                }
              },
            }),
            (y[v.Px].video = {
              fn: function (e, r, t) {
                if (e.mediaType === p.pX) {
                  if (
                    (0, d.Z)(t.imp, 'video.w') &&
                    (0, d.Z)(t.imp, 'video.h')
                  ) {
                    var n = [t.imp.video.w, t.imp.video.h];
                    (e.playerWidth = n[0]), (e.playerHeight = n[1]);
                  }
                  r.adm && (e.vastXml = r.adm), r.nurl && (e.vastUrl = r.nurl);
                }
              },
            });
          var h = t(61283);
          function g() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.context,
              t = void 0 === r ? {} : r,
              n = e.processors,
              i = void 0 === n ? O : n,
              s = e.overrides,
              d = void 0 === s ? {} : s,
              p = e.imp,
              u = e.request,
              f = e.bidResponse,
              c = e.response,
              m = new WeakMap();
            function l(e, r, t, n) {
              var a;
              return function () {
                return (
                  null == a &&
                    (a = (function () {
                      var a = t.bind(this, o(i()[e] || {}, d[e] || {}));
                      return (
                        r && (a = r.bind(this, a)),
                        function () {
                          try {
                            return a.apply(this, arguments);
                          } catch (e) {
                            n.call.apply(
                              n,
                              [this, e].concat(
                                Array.prototype.slice.call(arguments),
                              ),
                            );
                          }
                        }
                      );
                    })()),
                  a.apply(this, arguments)
                );
              };
            }
            var b = l(
                v.DZ,
                p,
                function (e, r, t) {
                  var n = {};
                  return e(n, r, t), n;
                },
                function (e, r, t) {
                  (0, a.logError)(
                    'Error while converting bidRequest to ORTB imp; request skipped.',
                    { error: e, bidRequest: r, context: t },
                  );
                },
              ),
              y = l(
                v.Z,
                u,
                function (e, r, t, n) {
                  var i = { imp: r };
                  return e(i, t, n), i;
                },
                function (e, r, t, n) {
                  throw (
                    ((0, a.logError)('Error while converting to ORTB request', {
                      error: e,
                      imps: r,
                      bidderRequest: t,
                      context: n,
                    }),
                    e)
                  );
                },
              ),
              h = l(
                v.Px,
                f,
                function (e, r, t) {
                  var n = {};
                  return e(n, r, t), n;
                },
                function (e, r, t) {
                  (0, a.logError)(
                    'Error while converting ORTB seatbid.bid to bidResponse; bid skipped.',
                    { error: e, bid: r, context: t },
                  );
                },
              ),
              g = l(
                v.YC,
                c,
                function (e, r, t, n) {
                  var i = { bids: r };
                  return e(i, t, n), i;
                },
                function (e, r, t, n) {
                  throw (
                    ((0, a.logError)(
                      'Error while converting from ORTB response',
                      {
                        error: e,
                        bidResponses: r,
                        ortbResponse: t,
                        context: n,
                      },
                    ),
                    e)
                  );
                },
              );
            return {
              toORTB: function (e) {
                var r = e.bidderRequest,
                  n = e.bidRequests,
                  i = e.context,
                  o = void 0 === i ? {} : i;
                n = n || r.bids;
                var s = {
                  req: Object.assign({ bidRequests: n }, t, o),
                  imp: {},
                };
                s.req.impContext = s.imp;
                var d = n
                    .map(function (e) {
                      var n = Object.assign(
                          { bidderRequest: r, reqContext: s.req },
                          t,
                          o,
                        ),
                        i = b(e, n);
                      if (null != i) {
                        if (i.hasOwnProperty('id'))
                          return (
                            Object.assign(n, { bidRequest: e, imp: i }),
                            (s.imp[i.id] = n),
                            i
                          );
                        (0, a.logError)(
                          'Converted ORTB imp does not specify an id, ignoring bid request',
                          e,
                          i,
                        );
                      }
                    })
                    .filter(Boolean),
                  p = y(d, r, s.req);
                return (s.req.bidderRequest = r), null != p && m.set(p, s), p;
              },
              fromORTB: function (e) {
                var r = e.request,
                  t = e.response,
                  n = m.get(r);
                if (null == n)
                  throw new Error(
                    'ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`',
                  );
                function i(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return Object.assign(e, { ortbRequest: r }, t, e);
                }
                var o = Object.fromEntries(
                    (r.imp || []).map(function (e) {
                      return [e.id, e];
                    }),
                  ),
                  s = (t.seatbid || [])
                    .flatMap(function (e) {
                      return (e.bid || []).map(function (r) {
                        if (
                          o.hasOwnProperty(r.impid) &&
                          n.imp.hasOwnProperty(r.impid)
                        )
                          return h(
                            r,
                            i(n.imp[r.impid], {
                              imp: o[r.impid],
                              seatbid: e,
                              ortbResponse: t,
                            }),
                          );
                        (0,
                        a.logError)('ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid', r);
                      });
                    })
                    .filter(Boolean);
                return g(s, t, i(n.req));
              },
            };
          }
          var O = (0, a.memoize)(function () {
            return (0, h.F)(y, (0, v.fP)(v.TP));
          });
        },
        61283: function (e, r, t) {
          t.d(r, {
            F: function () {
              return i;
            },
          });
          var n = t(26372);
          function i() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
              r[t] = arguments[t];
            var o = r.shift(),
              a = r.length > 1 ? i.apply(void 0, r) : r[0];
            return Object.fromEntries(
              n.gm.map(function (e) {
                return [e, Object.assign({}, o[e], a[e])];
              }),
            );
          }
        },
        15840: function (e, r, t) {
          t.d(r, {
            R: function () {
              return o;
            },
            e: function () {
              return i;
            },
          });
          var n = t(24679),
            i = { 1: n.Mk, 2: n.pX, 4: n.B5 };
          function o(e, r, t) {
            if (!e.mediaType) {
              var n = t.mediaType;
              if (!n && !i.hasOwnProperty(r.mtype))
                throw new Error('Cannot determine mediaType for response');
              e.mediaType = n || i[r.mtype];
            }
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [57748],
      {
        81694: function (n, o, t) {
          function e(n, o) {
            return function () {
              for (
                var t,
                  e,
                  i = document.domain.split('.'),
                  u = '_gd'.concat(Date.now(), '_').concat(o),
                  c = 0;
                c < i.length;
                c++
              ) {
                var r = i.slice(c).join('.');
                if (
                  (n.setCookie(u, '1', void 0, void 0, r),
                  (e = n.getCookie(u)),
                  n.setCookie(
                    u,
                    '',
                    'Thu, 01 Jan 1970 00:00:01 GMT',
                    void 0,
                    r,
                  ),
                  '1' !== e)
                )
                  return t;
                t = r;
              }
            };
          }
          t.d(o, {
            U: function () {
              return e;
            },
          });
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [21266],
      {
        55630: function (n, e, t) {
          var o,
            r,
            i,
            a,
            c,
            s,
            u = t(71002),
            l = t(78640),
            f = t(64358),
            d = t(96475),
            p = t(3193),
            g = t(34516),
            m = t(34614),
            v = t(99128),
            b = t(26372),
            y = t(54078),
            C = t(52712),
            P = !1,
            M = {
              iab: function (n) {
                var e = n.onSuccess,
                  t = n.onError,
                  o = n.onEvent;
                var r = (0, C.b6)({
                  apiName: '__tcfapi',
                  apiVersion: 2,
                  apiArgs: ['command', 'version', 'callback', 'parameter'],
                });
                if (!r) return t('TCF2 CMP not found.');
                r.isDirect
                  ? (0, f.logInfo)(
                      'Detected CMP API is directly accessible, calling it now...',
                    )
                  : (0, f.logInfo)(
                      'Detected CMP is outside the current iframe where Prebid.js is located, calling it now...',
                    );
                r({
                  command: 'addEventListener',
                  callback: function (n, r) {
                    (0, f.logInfo)('Received a response from CMP', n),
                      r
                        ? (o(n),
                          (!1 !== n.gdprApplies &&
                            'tcloaded' !== n.eventStatus &&
                            'useractioncomplete' !== n.eventStatus) ||
                            A(n, { onSuccess: e, onError: t }))
                        : t(
                            'CMP unable to register callback function.  Please check CMP setup.',
                          );
                  },
                });
              },
              static: function (n) {
                var e = n.onSuccess,
                  t = n.onError;
                A(a, { onSuccess: e, onError: t });
              },
            };
          function S(n) {
            var e,
              t,
              i = !1,
              a = null,
              s = !1;
            function u(n) {
              null != a && clearTimeout(a),
                i || null == n || (0 === n ? e() : (a = setTimeout(e, n)));
            }
            function l(e, t, o) {
              if (
                (u(null),
                (i = !0),
                g.rp.setConsentData(e),
                'function' == typeof n)
              ) {
                for (
                  var r = arguments.length,
                    a = new Array(r > 3 ? r - 3 : 0),
                    c = 3;
                  c < r;
                  c++
                )
                  a[c - 3] = arguments[c];
                n.apply(void 0, [t, o].concat(a));
              }
            }
            if ((0, m.q9)(Object.keys(M), o)) {
              var f = {
                onSuccess: function (n) {
                  return l(n, !1);
                },
                onError: function (n) {
                  for (
                    var e = arguments.length,
                      t = new Array(e > 1 ? e - 1 : 0),
                      o = 1;
                    o < e;
                    o++
                  )
                    t[o - 1] = arguments[o];
                  l.apply(void 0, [null, !0, n].concat(t));
                },
                onEvent: function (n) {
                  (t = n), s || ((s = !0), null != c && u(c));
                },
              };
              (e = function () {
                var n = function (n) {
                  l(
                    n,
                    !1,
                    ''.concat(
                      s
                        ? 'Timeout waiting for user action on CMP'
                        : 'CMP did not load',
                      ', continuing auction...',
                    ),
                  );
                };
                A(t, {
                  onSuccess: n,
                  onError: function () {
                    return n(w(void 0));
                  },
                });
              }),
                M[o](f),
                (null != c && s) || u(r);
            } else
              l(
                null,
                !1,
                'CMP framework ('.concat(
                  o,
                  ') is not a supported framework.  Aborting consentManagement module and resuming auction.',
                ),
              );
          }
          var h = (0, v.g3)('gdpr', function (n, e) {
            var t;
            (t = function (t, o) {
              if (o) {
                var r = f.logWarn;
                t &&
                  ((r = f.logError),
                  (o = ''.concat(
                    o,
                    ' Canceling auction as per consentManagement config.',
                  )));
                for (
                  var i = arguments.length,
                    a = new Array(i > 2 ? i - 2 : 0),
                    c = 2;
                  c < i;
                  c++
                )
                  a[c - 2] = arguments[c];
                r.apply(void 0, [o].concat(a));
              }
              t
                ? (n.stopTiming(),
                  'function' == typeof e.bidsBackHandler
                    ? e.bidsBackHandler()
                    : (0, f.logError)('Error executing bidsBackHandler'))
                : n.call(this, e);
            }),
              s
                ? ((0, f.logInfo)(
                    'User consent information already known.  Pulling internally stored information...',
                  ),
                  t(!1))
                : S(t);
          });
          function A(n, e) {
            var t,
              o,
              r = e.onSuccess,
              a = e.onError;
            (t = n && 'boolean' == typeof n.gdprApplies ? n.gdprApplies : i),
              (o = n && n.tcString),
              'boolean' == typeof t && (!0 !== t || (o && (0, f.isStr)(o)))
                ? r(w(n))
                : a('CMP returned unexpected value during lookup process.', n);
          }
          function w(n) {
            return (
              (s = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies:
                  n && 'boolean' == typeof n.gdprApplies ? n.gdprApplies : i,
              }),
              n &&
                n.addtlConsent &&
                (0, f.isStr)(n.addtlConsent) &&
                (s.addtlConsent = n.addtlConsent),
              (s.apiVersion = 2),
              s
            );
          }
          p.vc.getConfig('consentManagement', function (n) {
            return (function (n) {
              if (
                (n = n && (n.gdpr || n.usp || n.gpp ? n.gdpr : n)) &&
                'object' === (0, u.Z)(n)
              ) {
                var e;
                (0, f.isStr)(n.cmpApi)
                  ? (o = n.cmpApi)
                  : ((o = 'iab'),
                    (0, f.logInfo)(
                      'consentManagement config did not specify cmp.  Using system default setting ('.concat(
                        'iab',
                        ').',
                      ),
                    )),
                  (0, f.isNumber)(n.timeout)
                    ? (r = n.timeout)
                    : ((r = 1e4),
                      (0, f.logInfo)(
                        'consentManagement config did not specify timeout.  Using system default setting ('.concat(
                          1e4,
                          ').',
                        ),
                      )),
                  (c = (0, f.isNumber)(n.actionTimeout)
                    ? n.actionTimeout
                    : null),
                  (i = !0 === n.defaultGdprScope),
                  (0, f.logInfo)(
                    'consentManagement module has been activated...',
                  ),
                  'static' === o &&
                    ((0, f.isPlainObject)(n.consentData)
                      ? (null !=
                          (null === (e = a = n.consentData) || void 0 === e
                            ? void 0
                            : e.getTCData) && (a = a.getTCData),
                        (r = 0))
                      : (0, f.logError)(
                          "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.",
                        )),
                  P || (0, l.R)().requestBids.before(h, 50),
                  (P = !0),
                  g.rp.enable(),
                  S();
              } else (0, f.logWarn)('consentManagement (gdpr) config not defined, exiting consent manager');
            })(n.consentManagement);
          }),
            y.S.before(function (n, e) {
              return n(
                e.then(function (n) {
                  var e = g.rp.getConsentData();
                  return (
                    e &&
                      ('boolean' == typeof e.gdprApplies &&
                        (0, d.N)(n, 'regs.ext.gdpr', e.gdprApplies ? 1 : 0),
                      (0, d.N)(n, 'user.ext.consent', e.consentString)),
                    n
                  );
                }),
              );
            }),
            (0, b.f8)({
              type: b.Z,
              name: 'gdprAddtlConsent',
              fn: function (n, e) {
                var t,
                  o =
                    null === (t = e.gdprConsent) || void 0 === t
                      ? void 0
                      : t.addtlConsent;
                o &&
                  'string' == typeof o &&
                  (0, d.N)(
                    n,
                    'user.ext.ConsentedProvidersSettings.consented_providers',
                    o,
                  );
              },
            }),
            (0, l.z)('consentManagement');
        },
        26372: function (n, e, t) {
          t.d(e, {
            DZ: function () {
              return a;
            },
            Px: function () {
              return c;
            },
            TP: function () {
              return u;
            },
            YC: function () {
              return s;
            },
            Z: function () {
              return i;
            },
            f8: function () {
              return g;
            },
            fP: function () {
              return m;
            },
            gm: function () {
              return o;
            },
            md: function () {
              return l;
            },
          });
          var o = ['request', 'imp', 'bidResponse', 'response'],
            r = ['default', 'pbs'],
            i = o[0],
            a = o[1],
            c = o[2],
            s = o[3],
            u = r[0],
            l = r[1],
            f = new Set(o);
          var d,
            p =
              ((d = {}),
              {
                registerOrtbProcessor: function (n) {
                  var e = n.type,
                    t = n.name,
                    r = n.fn,
                    i = n.priority,
                    a = void 0 === i ? 0 : i,
                    c = n.dialects,
                    s = void 0 === c ? [u] : c;
                  if (!f.has(e))
                    throw new Error(
                      'ORTB processor type must be one of: '.concat(
                        o.join(', '),
                      ),
                    );
                  s.forEach(function (n) {
                    d.hasOwnProperty(n) || (d[n] = {}),
                      d[n].hasOwnProperty(e) || (d[n][e] = {}),
                      (d[n][e][t] = { priority: a, fn: r });
                  });
                },
                getProcessors: function (n) {
                  return d[n] || {};
                },
              }),
            g = p.registerOrtbProcessor,
            m = p.getProcessors;
        },
      },
      function (n) {
        n.O(0, [17968], function () {
          return (e = 55630), n((n.s = e));
          var e;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [69168],
      {
        30277: function (n, t, e) {
          var r = e(71002),
            i = e(97326),
            o = e(60136),
            a = e(82963),
            c = e(61120);
          function u(n, t) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(n, t) &&
              null !== (n = (0, c.Z)(n));

            );
            return n;
          }
          function s() {
            return (
              (s =
                'undefined' != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (n, t, e) {
                      var r = u(n, t);
                      if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get
                          ? i.get.call(arguments.length < 3 ? n : e)
                          : i.value;
                      }
                    }),
              s.apply(this, arguments)
            );
          }
          var l = e(93324),
            p = e(4942),
            f = e(18916),
            g = e(43144),
            d = e(15671),
            v = e(89062),
            h = e(78640),
            m = e(64358),
            y = e(96475),
            b = e(3193),
            P = e(34516),
            w = e(99128),
            Z = e(54078),
            S = e(52712),
            C = e(68792),
            O = e(16310);
          function k(n) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (n) {
                return !1;
              }
            })();
            return function () {
              var e,
                r = (0, c.Z)(n);
              if (t) {
                var i = (0, c.Z)(this).constructor;
                e = Reflect.construct(r, arguments, i);
              } else e = r.apply(this, arguments);
              return (0, a.Z)(this, e);
            };
          }
          function M(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })),
                e.push.apply(e, r);
            }
            return e;
          }
          function j(n) {
            for (var t = 1; t < arguments.length; t++) {
              var e = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? M(Object(e), !0).forEach(function (t) {
                    (0, p.Z)(n, t, e[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(e),
                  )
                : M(Object(e)).forEach(function (t) {
                    Object.defineProperty(
                      n,
                      t,
                      Object.getOwnPropertyDescriptor(e, t),
                    );
                  });
            }
            return n;
          }
          function E(n, t, e) {
            !(function (n, t) {
              if (t.has(n))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object',
                );
            })(n, t),
              t.set(n, e);
          }
          function T(n, t) {
            var e = (function (n, t, e) {
              if (!t.has(n))
                throw new TypeError(
                  'attempted to ' + e + ' private field on non-instance',
                );
              return t.get(n);
            })(n, t, 'set');
            return (function (n, t) {
              if (t.set)
                return (
                  '__destrObj' in t ||
                    (t.__destrObj = {
                      set value(e) {
                        t.set.call(n, e);
                      },
                    }),
                  t.__destrObj
                );
              if (!t.writable)
                throw new TypeError('attempted to set read only private field');
              return t;
            })(n, e);
          }
          var D,
            I,
            R,
            G,
            N = !1;
          function A(n, t) {
            var e = t.onSuccess,
              r = t.onError;
            new C.Z(function (t) {
              return t(n());
            }).then(e, function (n) {
              n instanceof _
                ? r.apply(void 0, [n.message].concat((0, v.Z)(n.args)))
                : r('GPP error:', n);
            });
          }
          var W = '1.0',
            _ = (0, g.Z)(function n(t, e) {
              (0, d.Z)(this, n),
                (this.message = t),
                (this.args = null == e ? [] : [e]);
            }),
            z = new WeakMap(),
            L = new WeakMap(),
            U = new WeakMap(),
            V = (function () {
              function n(t, e) {
                var r = this;
                (0, d.Z)(this, n),
                  E(this, z, { writable: !0, value: void 0 }),
                  E(this, L, { writable: !0, value: void 0 }),
                  E(this, U, { writable: !0, value: [] }),
                  (0, p.Z)(this, 'initialized', !1),
                  (this.apiVersion = this.constructor.apiVersion),
                  (this.cmpVersion = e),
                  (this.cmp = e);
                var i = [0, 1].map(function (n) {
                    return function (t) {
                      for (; (0, f.Z)(r, U).length; )
                        (0, f.Z)(r, U).pop()[n](t);
                    };
                  }),
                  o = (0, l.Z)(i, 2);
                (T(this, z).value = o[0]), (T(this, L).value = o[1]);
              }
              return (
                (0, g.Z)(
                  n,
                  [
                    {
                      key: 'init',
                      value: function (n) {
                        var t = this,
                          e = this.updateWhenReady(n);
                        return (
                          this.initialized ||
                            ((this.initialized = !0),
                            this.cmp({
                              command: 'addEventListener',
                              callback: function (n, e) {
                                var r;
                                null == e || e
                                  ? 'error' ===
                                    (null == n ||
                                    null === (r = n.pingData) ||
                                    void 0 === r
                                      ? void 0
                                      : r.cmpStatus)
                                    ? (0, f.Z)(t, L).call(
                                        t,
                                        new _(
                                          'CMP status is "error"; please check CMP setup',
                                          n,
                                        ),
                                      )
                                    : t.isCMPReady(
                                        (null == n ? void 0 : n.pingData) || {},
                                      ) &&
                                      t.events.includes(
                                        null == n ? void 0 : n.eventName,
                                      ) &&
                                      (0, f.Z)(t, z).call(
                                        t,
                                        t.updateConsent(n.pingData),
                                      )
                                  : (0, f.Z)(t, L).call(
                                      t,
                                      new _(
                                        'Received error response from CMP',
                                        n,
                                      ),
                                    );
                              },
                            })),
                          e
                        );
                      },
                    },
                    {
                      key: 'refresh',
                      value: function () {
                        return this.cmp({ command: 'ping' }).then(
                          this.updateWhenReady.bind(this),
                        );
                      },
                    },
                    {
                      key: 'updateConsent',
                      value: function (n) {
                        return this.getGPPData(n)
                          .then(function (n) {
                            if (null == n || (0, m.isEmpty)(n))
                              throw new _(
                                'Received empty response from CMP',
                                n,
                              );
                            return X(n);
                          })
                          .then(function (n) {
                            return (
                              (0, m.logInfo)(
                                'Retrieved GPP consent from CMP:',
                                n,
                              ),
                              n
                            );
                          });
                      },
                    },
                    {
                      key: 'nextUpdate',
                      value: function () {
                        var n = this;
                        return new C.Z(function (t, e) {
                          (0, f.Z)(n, U).push([t, e]);
                        });
                      },
                    },
                    {
                      key: 'updateWhenReady',
                      value: function (n) {
                        return this.isCMPReady(n)
                          ? this.updateConsent(n)
                          : this.nextUpdate();
                      },
                    },
                  ],
                  [
                    {
                      key: 'register',
                      value: function (n) {
                        var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        (this.apiVersion = n),
                          (this.CLIENTS[n] = this),
                          t && (this.CLIENTS.default = this);
                      },
                    },
                    {
                      key: 'init',
                      value: function () {
                        var n = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : S.b6;
                        return (
                          null == this.INST &&
                            (this.INST = this.ping(t).catch(function (t) {
                              throw ((n.INST = null), t);
                            })),
                          this.INST.then(function (n) {
                            var t = (0, l.Z)(n, 2),
                              e = t[0],
                              r = t[1];
                            return [e, e.initialized ? e.refresh() : e.init(r)];
                          })
                        );
                      },
                    },
                    {
                      key: 'ping',
                      value: function () {
                        var n = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : S.b6,
                          e = {
                            apiName: '__gpp',
                            apiArgs: ['command', 'callback', 'parameter'],
                          },
                          r = t(j(j({}, e), {}, { mode: S.kX }));
                        return new C.Z(function (i, o) {
                          if (null != r) {
                            var a = !1,
                              c = function (r, c) {
                                if (!a)
                                  if (null == c || c) {
                                    if (null != r) {
                                      a = !0;
                                      var u = null == r ? void 0 : r.gppVersion,
                                        s = n.getClient(u);
                                      u !== s.apiVersion
                                        ? (0, m.logWarn)(
                                            'Unrecognized GPP CMP version: '
                                              .concat(
                                                u,
                                                '. Continuing using GPP API version ',
                                              )
                                              .concat(s, '...'),
                                          )
                                        : (0, m.logInfo)(
                                            'Using GPP version '.concat(u),
                                          );
                                      var l = s.apiVersion === W ? S.sM : S.m1,
                                        p = new s(
                                          u,
                                          t(j(j({}, e), {}, { mode: l })),
                                        );
                                      i([p, r]);
                                    }
                                  } else o(r);
                              };
                            r({ command: 'ping', callback: c }).then(function (
                              n,
                            ) {
                              return c(n, !0);
                            },
                            o);
                          } else o(new _('GPP CMP not found'));
                        }).finally(function () {
                          r && r.close();
                        });
                      },
                    },
                    {
                      key: 'getClient',
                      value: function (n) {
                        return this.CLIENTS.hasOwnProperty(n)
                          ? this.CLIENTS[n]
                          : this.CLIENTS.default;
                      },
                    },
                  ],
                ),
                n
              );
            })();
          (0, p.Z)(V, 'CLIENTS', {}), (0, p.Z)(V, 'INST', void 0);
          var x = (function (n) {
            (0, o.Z)(e, n);
            var t = k(e);
            function e() {
              var n;
              (0, d.Z)(this, e);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (0, p.Z)((0, i.Z)(n), 'events', ['sectionChange', 'cmpStatus']),
                n
              );
            }
            return (
              (0, g.Z)(e, [
                {
                  key: 'isCMPReady',
                  value: function (n) {
                    return 'loaded' === n.cmpStatus;
                  },
                },
                {
                  key: 'getGPPData',
                  value: function (n) {
                    var t = this,
                      e = C.Z.all(
                        n.supportedAPIs.map(function (n) {
                          return t
                            .cmp({ command: 'getSection', parameter: n })
                            .catch(function (t) {
                              (0,
                              m.logWarn)("Could not retrieve GPP section '".concat(n, "'"), t);
                            })
                            .then(function (t) {
                              return [n, t];
                            });
                        }),
                      ).then(function (n) {
                        return Object.fromEntries(
                          n
                            .filter(function (n) {
                              var t = (0, l.Z)(n, 2);
                              t[0];
                              return null != t[1];
                            })
                            .map(function (n) {
                              var t = (0, l.Z)(n, 2),
                                e = t[0],
                                r = t[1],
                                i = [
                                  Object.fromEntries(
                                    Object.entries(r).filter(function (n) {
                                      return 'Gpc' !== (0, l.Z)(n, 1)[0];
                                    }),
                                  ),
                                ];
                              return (
                                null != r.Gpc &&
                                  i.push({ SubsectionType: 1, Gpc: r.Gpc }),
                                [e, i]
                              );
                            }),
                        );
                      });
                    return C.Z.all([
                      this.cmp({ command: 'getGPPData' }),
                      e,
                    ]).then(function (n) {
                      var t = (0, l.Z)(n, 2),
                        e = t[0],
                        r = t[1];
                      return Object.assign({}, e, { parsedSections: r });
                    });
                  },
                },
              ]),
              e
            );
          })(V);
          s((0, c.Z)(x), 'register', x).call(x, W);
          var B = (function (n) {
            (0, o.Z)(e, n);
            var t = k(e);
            function e() {
              var n;
              (0, d.Z)(this, e);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (0, p.Z)((0, i.Z)(n), 'events', [
                  'sectionChange',
                  'signalStatus',
                ]),
                n
              );
            }
            return (
              (0, g.Z)(e, [
                {
                  key: 'isCMPReady',
                  value: function (n) {
                    return 'ready' === n.signalStatus;
                  },
                },
                {
                  key: 'getGPPData',
                  value: function (n) {
                    return C.Z.resolve(n);
                  },
                },
              ]),
              e
            );
          })(V);
          s((0, c.Z)(B), 'register', B).call(B, '1.1', !0);
          var J = {
            iab: function (n) {
              var t = n.onSuccess,
                e = n.onError,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : S.b6;
              A(
                function () {
                  return V.init(r).then(function (n) {
                    var t = (0, l.Z)(n, 2);
                    t[0];
                    return t[1];
                  });
                },
                { onSuccess: t, onError: e },
              );
            },
            static: function (n) {
              return A(function () {
                return X(R);
              }, n);
            },
          };
          function H(n) {
            var t = !1,
              e = null;
            function r(r, i, o) {
              if (
                (null != e && clearTimeout(e),
                (t = !0),
                P.TJ.setConsentData(r),
                'function' == typeof n)
              ) {
                for (
                  var a = arguments.length,
                    c = new Array(a > 3 ? a - 3 : 0),
                    u = 3;
                  u < a;
                  u++
                )
                  c[u - 3] = arguments[u];
                n.apply(void 0, [i, o].concat(c));
              }
            }
            if (J.hasOwnProperty(D)) {
              var i = {
                onSuccess: function (n) {
                  return r(n, !1);
                },
                onError: function (n) {
                  for (
                    var t = arguments.length,
                      e = new Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    e[i - 1] = arguments[i];
                  r.apply(void 0, [null, !0, n].concat(e));
                },
              };
              if ((J[D](i), !t)) {
                var o = function () {
                  var n = function (n) {
                    r(n, !1, 'GPP CMP did not load, continuing auction...');
                  };
                  A(
                    function () {
                      return X(G);
                    },
                    {
                      onSuccess: n,
                      onError: function () {
                        return n(F());
                      },
                    },
                  );
                };
                0 === I ? o() : (e = setTimeout(o, I));
              }
            } else
              r(
                null,
                !1,
                'GPP CMP framework ('.concat(
                  D,
                  ') is not a supported framework.  Aborting consentManagement module and resuming auction.',
                ),
              );
          }
          var q = (0, w.g3)('gpp', function (n, t) {
            var e;
            (e = function (e, r) {
              if (r) {
                var i = m.logWarn;
                e &&
                  ((i = m.logError),
                  (r = ''.concat(
                    r,
                    ' Canceling auction as per consentManagement config.',
                  )));
                for (
                  var o = arguments.length,
                    a = new Array(o > 2 ? o - 2 : 0),
                    c = 2;
                  c < o;
                  c++
                )
                  a[c - 2] = arguments[c];
                i.apply(void 0, [r].concat(a));
              }
              e
                ? (n.stopTiming(),
                  'function' == typeof t.bidsBackHandler
                    ? t.bidsBackHandler()
                    : (0, m.logError)('Error executing bidsBackHandler'))
                : n.call(this, t);
            }),
              G
                ? ((0, m.logInfo)(
                    'User consent information already known.  Pulling internally stored information...',
                  ),
                  e(!1))
                : H(e);
          });
          function X(n) {
            if (
              (null != (null == n ? void 0 : n.applicableSections) &&
                !Array.isArray(n.applicableSections)) ||
              (null != (null == n ? void 0 : n.gppString) &&
                !(0, m.isStr)(n.gppString)) ||
              (null != (null == n ? void 0 : n.parsedSections) &&
                !(0, m.isPlainObject)(n.parsedSections))
            )
              throw new _(
                'CMP returned unexpected value during lookup process.',
                n,
              );
            return F(n);
          }
          function F() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              (G = {
                gppString: null == n ? void 0 : n.gppString,
                applicableSections:
                  (null == n ? void 0 : n.applicableSections) || [],
                parsedSections: (null == n ? void 0 : n.parsedSections) || {},
                gppData: n,
              }),
              P.TJ.setConsentData(n),
              G
            );
          }
          b.vc.getConfig('consentManagement', function (n) {
            return (function (n) {
              (n = n && n.gpp) && 'object' === (0, r.Z)(n)
                ? ((0, m.isStr)(n.cmpApi)
                    ? (D = n.cmpApi)
                    : ((D = 'iab'),
                      (0, m.logInfo)(
                        'consentManagement.gpp config did not specify cmp.  Using system default setting ('.concat(
                          'iab',
                          ').',
                        ),
                      )),
                  (0, m.isNumber)(n.timeout)
                    ? (I = n.timeout)
                    : ((I = 1e4),
                      (0, m.logInfo)(
                        'consentManagement.gpp config did not specify timeout.  Using system default setting ('.concat(
                          1e4,
                          ').',
                        ),
                      )),
                  'static' === D &&
                    ((0, m.isPlainObject)(n.consentData)
                      ? ((R = n.consentData), (I = 0))
                      : (0, m.logError)(
                          "consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.",
                        )),
                  (0, m.logInfo)(
                    'consentManagement.gpp module has been activated...',
                  ),
                  N ||
                    ((0, h.R)().requestBids.before(q, 50),
                    O.Ww.before(function (n, t) {
                      return n(
                        Object.assign({ gppConsent: P.TJ.getConsentData() }, t),
                      );
                    })),
                  (N = !0),
                  P.TJ.enable(),
                  H())
                : (0, m.logWarn)(
                    'consentManagement.gpp config not defined, exiting consent manager module',
                  );
            })(n.consentManagement);
          }),
            Z.S.before(function (n, t) {
              return n(
                t.then(function (n) {
                  var t = P.TJ.getConsentData();
                  return (
                    t &&
                      (Array.isArray(t.applicableSections) &&
                        (0, y.N)(n, 'regs.gpp_sid', t.applicableSections),
                      (0, y.N)(n, 'regs.gpp', t.gppString)),
                    n
                  );
                }),
              );
            }),
            (0, h.z)('consentManagementGpp');
        },
      },
      function (n) {
        n.O(0, [17968], function () {
          return (t = 30277), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [5160],
      {
        9099: function (n, t, e) {
          var o,
            a,
            c = e(71002),
            i = e(78640),
            r = e(64358),
            s = e(96475),
            u = e(3193),
            l = e(86104),
            g = e(34516),
            f = e(99128),
            p = e(92797),
            d = e(54078),
            m = e(52712),
            v = 'iab',
            P = v,
            b = 50,
            S = !1,
            D = {
              iab: function (n) {
                var t = n.onSuccess,
                  e = n.onError;
                var o =
                    ((c = {}),
                    {
                      consentDataCallback: function (n, o) {
                        o && n.uspString && (c.usPrivacy = n.uspString),
                          c.usPrivacy
                            ? U(c, { onSuccess: t, onError: e })
                            : e('Unable to get USP consent string.');
                      },
                    }),
                  a = (0, m.b6)({
                    apiName: '__uspapi',
                    apiVersion: 1,
                    apiArgs: ['command', 'version', 'callback'],
                  });
                var c;
                if (!a) return e('USP CMP not found.');
                a.isDirect
                  ? (0, r.logInfo)(
                      'Detected USP CMP is directly accessible, calling it now...',
                    )
                  : (0, r.logInfo)(
                      'Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...',
                    );
                a({ command: 'getUSPData', callback: o.consentDataCallback }),
                  a({
                    command: 'registerDeletion',
                    callback: l.ZP.callDataDeletionRequest,
                  }).catch(function (n) {
                    (0,
                    r.logError)('Error invoking CMP `registerDeletion`:', n);
                  });
              },
              static: function (n) {
                var t = n.onSuccess,
                  e = n.onError;
                U(o, { onSuccess: t, onError: e });
              },
            };
          function y(n) {
            var t = null,
              e = !1;
            function o(o, a) {
              if (
                (null != t && clearTimeout(t),
                (e = !0),
                g.nX.setConsentData(o),
                null != n)
              ) {
                for (
                  var c = arguments.length,
                    i = new Array(c > 2 ? c - 2 : 0),
                    r = 2;
                  r < c;
                  r++
                )
                  i[r - 2] = arguments[r];
                n.apply(void 0, [a].concat(i));
              }
            }
            if (D[P]) {
              var a = {
                onSuccess: o,
                onError: function (n) {
                  for (
                    var t = arguments.length,
                      e = new Array(t > 1 ? t - 1 : 0),
                      a = 1;
                    a < t;
                    a++
                  )
                    e[a - 1] = arguments[a];
                  o.apply(
                    void 0,
                    [
                      null,
                      ''.concat(
                        n,
                        ' Resuming auction without consent data as per consentManagement config.',
                      ),
                    ].concat(e),
                  );
                },
              };
              D[P](a),
                e ||
                  (0 === b
                    ? U(void 0, a)
                    : (t = setTimeout(
                        a.onError.bind(
                          null,
                          'USPAPI workflow exceeded timeout threshold.',
                        ),
                        b,
                      )));
            } else
              o(
                null,
                'USP framework ('.concat(
                  P,
                  ') is not a supported framework. Aborting consentManagement module and resuming auction.',
                ),
              );
          }
          var h = (0, f.g3)('usp', function (n, t) {
            var e = this;
            S || M(),
              y(function (o) {
                if (null != o) {
                  for (
                    var a = arguments.length,
                      c = new Array(a > 1 ? a - 1 : 0),
                      i = 1;
                    i < a;
                    i++
                  )
                    c[i - 1] = arguments[i];
                  r.logWarn.apply(void 0, [o].concat(c));
                }
                n.call(e, t);
              });
          });
          function U(n, t) {
            var e = t.onSuccess,
              o = t.onError;
            !n || !n.usPrivacy
              ? o('USPAPI returned unexpected value during lookup process.', n)
              : (!(function (n) {
                  n && n.usPrivacy && (a = n.usPrivacy);
                })(n),
                e(a));
          }
          function M() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            S ||
              ((0, r.logInfo)(
                'USPAPI consentManagement module has been activated'.concat(
                  n
                    ? ''
                    : " using default values (api: '"
                        .concat(P, "', timeout: ")
                        .concat(b, 'ms)'),
                ),
              ),
              (S = !0),
              g.nX.enable()),
              y();
          }
          u.vc.getConfig('consentManagement', function (n) {
            return (function (n) {
              ((n = n && n.usp) && 'object' === (0, c.Z)(n)) ||
                (0, r.logWarn)(
                  'consentManagement.usp config not defined, using defaults',
                ),
                n && (0, r.isStr)(n.cmpApi)
                  ? (P = n.cmpApi)
                  : ((P = v),
                    (0, r.logInfo)(
                      'consentManagement.usp config did not specify cmpApi. Using system default setting ('.concat(
                        v,
                        ').',
                      ),
                    )),
                n && (0, r.isNumber)(n.timeout)
                  ? (b = n.timeout)
                  : ((b = 50),
                    (0, r.logInfo)(
                      'consentManagement.usp config did not specify timeout. Using system default setting ('.concat(
                        50,
                        ').',
                      ),
                    )),
                'static' === P &&
                  ((0, r.isPlainObject)(n.consentData) &&
                  (0, r.isPlainObject)(n.consentData.getUSPData)
                    ? (n.consentData.getUSPData.uspString &&
                        (o = { usPrivacy: n.consentData.getUSPData.uspString }),
                      (b = 0))
                    : (0, r.logError)(
                        "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.",
                      )),
                M(!0);
            })(n.consentManagement);
          }),
            (0, p.v5)('requestBids').before(h, 50),
            d.S.before(function (n, t) {
              return n(
                t.then(function (n) {
                  var t = g.nX.getConsentData();
                  return t && (0, s.N)(n, 'regs.ext.us_privacy', t), n;
                }),
              );
            }),
            (0, i.z)('consentManagementUsp');
        },
      },
      function (n) {
        n.O(0, [17968], function () {
          return (t = 9099), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [88806],
      {
        19749: function (n, s, u) {
          (0, u(78640).z)('enrichmentFpdModule');
        },
      },
      function (n) {
        var s;
        (s = 19749), n((n.s = s));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [87083],
      {
        31498: function (n, e, r) {
          var t = r(78640),
            o = r(64358),
            u = r(20265),
            a = r(3193),
            i = r(86104),
            c = r(34516),
            s = r(34614),
            f = r(52021),
            l = r(5644),
            p = r(9633),
            d = r(16310),
            v = r(50571),
            g = r(74947);
          function m(n, e) {
            var r =
              ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
              n['@@iterator'];
            if (!r) {
              if (
                Array.isArray(n) ||
                (r = (function (n, e) {
                  if (!n) return;
                  if ('string' == typeof n) return h(n, e);
                  var r = Object.prototype.toString.call(n).slice(8, -1);
                  'Object' === r && n.constructor && (r = n.constructor.name);
                  if ('Map' === r || 'Set' === r) return Array.from(n);
                  if (
                    'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return h(n, e);
                })(n)) ||
                (e && n && 'number' == typeof n.length)
              ) {
                r && (n = r);
                var t = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return t >= n.length
                      ? { done: !0 }
                      : { done: !1, value: n[t++] };
                  },
                  e: function (n) {
                    throw n;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var u,
              a = !0,
              i = !1;
            return {
              s: function () {
                r = r.call(n);
              },
              n: function () {
                var n = r.next();
                return (a = n.done), n;
              },
              e: function (n) {
                (i = !0), (u = n);
              },
              f: function () {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (i) throw u;
                }
              },
            };
          }
          function h(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var r = 0, t = new Array(e); r < e; r++) t[r] = n[r];
            return t;
          }
          var y,
            b,
            E,
            w,
            A,
            k = {
              purpose1: { id: 1, name: 'storage' },
              purpose2: { id: 2, name: 'basicAds' },
              purpose4: { id: 4, name: 'personalizedAds' },
              purpose7: { id: 7, name: 'measurement' },
            },
            S = [
              {
                purpose: 'storage',
                enforcePurpose: !0,
                enforceVendor: !0,
                vendorExceptions: [],
              },
              {
                purpose: 'basicAds',
                enforcePurpose: !0,
                enforceVendor: !0,
                vendorExceptions: [],
              },
            ],
            B = new Set(),
            C = new Set(),
            P = new Set(),
            D = new Set(),
            I = !1,
            $ = !1,
            j = [p.UL, p.y2, p._U, p.XG],
            O = 'TCF2',
            Z = [];
          function x(n, e, r) {
            if (e) {
              var t = a.vc.getConfig('gvlMapping');
              if (t && t[e]) return t[e];
              if (n === p.wu) return c.$P;
              var u = c.qh.get(e),
                i = u.gvlid,
                s = u.modules;
              if (null == i && Object.keys(s).length > 0) {
                var f,
                  l = m(j);
                try {
                  for (l.s(); !(f = l.n()).done; ) {
                    var d = f.value;
                    if (s.hasOwnProperty(d)) {
                      (i = s[d]),
                        d !== n &&
                          (0, o.logWarn)(
                            "Multiple GVL IDs found for module '"
                              .concat(e, "'; using the ")
                              .concat(d, " module's ID (")
                              .concat(i, ') instead of the ')
                              .concat(n, "'s ID (")
                              .concat(s[n], ')'),
                          );
                      break;
                    }
                  }
                } catch (n) {
                  l.e(n);
                } finally {
                  l.f();
                }
              }
              return null == i && r && (i = r()), i || null;
            }
            return null;
          }
          function F(n, e, r) {
            return null == n && c.rp.enabled
              ? ((0, o.logWarn)(
                  'Attempting operation that requires purpose '
                    .concat(e, ' consent while consent data is not available')
                    .concat(
                      r ? ' (module: '.concat(r, ')') : '',
                      '. Assuming no consent was given.',
                    ),
                ),
                !0)
              : n && n.gdprApplies;
          }
          function M(n, e, r, t) {
            var o =
              k[
                Object.keys(k).filter(function (e) {
                  return k[e].name === n.purpose;
                })[0]
              ].id;
            if ((n.vendorExceptions || []).includes(r)) return !0;
            var a =
                n.enforceVendor &&
                !(t === c.$P || (n.softVendorExceptions || []).includes(r)),
              i =
                !n.enforcePurpose ||
                !!(0, u.Z)(e, 'vendorData.purpose.consents.'.concat(o)),
              s = !a || !!(0, u.Z)(e, 'vendorData.vendor.consents.'.concat(t));
            return (
              2 === o &&
                (i ||
                  (i = !!(0, u.Z)(
                    e,
                    'vendorData.purpose.legitimateInterests.'.concat(o),
                  )),
                s ||
                  (s = !!(0, u.Z)(
                    e,
                    'vendorData.vendor.legitimateInterests.'.concat(t),
                  ))),
              i && s
            );
          }
          function T(n, e) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              t =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : function () {
                      return null;
                    };
            return function (o) {
              var u = c.rp.getConsentData(),
                a = o[d.bp];
              if (F(u, n, a)) {
                var i = x(o[d.$k], a, t(o)),
                  s = !!M(e(), u, a, i);
                if (!s) return r && r.add(a), { allow: s };
              }
            };
          }
          var U,
            V =
              ((U = T(
                1,
                function () {
                  return y;
                },
                B,
              )),
              function (n) {
                if (n[d.$k] !== p.wu || $) return U(n);
              }),
            L = T(
              1,
              function () {
                return y;
              },
              B,
            ),
            N = T(
              1,
              function () {
                return y;
              },
              B,
            ),
            W = (function (n) {
              return function (e) {
                if (e[d.$k] === p.UL) return n(e);
              };
            })(
              T(
                2,
                function () {
                  return b;
                },
                C,
              ),
            ),
            _ = T(
              7,
              function () {
                return w;
              },
              P,
              function (n) {
                return (
                  (e = n[d.bp]),
                  (r = n[d.Hw]),
                  (function (n) {
                    if ('function' != typeof n) return n;
                    try {
                      return n.call(u.adapter, r);
                    } catch (n) {
                      (0, o.logError)(
                        'Error invoking '.concat(e, ' adapter.gvlid()'),
                        n,
                      );
                    }
                  })(
                    null == (u = i.ZP.getAnalyticsAdapter(e)) ||
                      null === (t = u.adapter) ||
                      void 0 === t
                      ? void 0
                      : t.gvlid,
                  )
                );
                var e, r, t, u;
              },
            ),
            q = T(
              4,
              function () {
                return E;
              },
              D,
            );
          function z(n) {
            var e = k['purpose'.concat(n)].name;
            return function (n) {
              return n.purpose === e;
            };
          }
          f.on(l.FP.AUCTION_END, function () {
            var n = function (n) {
                return Array.from(n.keys()).filter(function (n) {
                  return null != n;
                });
              },
              e = {
                storageBlocked: n(B),
                biddersBlocked: n(C),
                analyticsBlocked: n(P),
                ufpdBlocked: n(D),
              };
            f.emit(l.FP.TCF2_ENFORCEMENT, e),
              [B, C, P, D].forEach(function (n) {
                return n.clear();
              });
          }),
            a.vc.getConfig('consentManagement', function (n) {
              return (function (n) {
                var e = (0, u.Z)(n, 'gdpr.rules');
                e
                  ? (A = e)
                  : ((0, o.logWarn)('TCF2: enforcing P1 and P2 by default'),
                    (A = S)),
                  ($ = !!(0, u.Z)(n, 'strictStorageEnforcement')),
                  (y = (0, s.sE)(A, z(1))),
                  (b = (0, s.sE)(A, z(2))),
                  (E = (0, s.sE)(A, z(4))),
                  (w = (0, s.sE)(A, z(7))),
                  y || (y = S[0]),
                  b || (b = S[1]),
                  I ||
                    (y &&
                      ((I = !0),
                      Z.push((0, v.oB)(g.S1, O, V)),
                      Z.push((0, v.oB)(g.K$, O, L)),
                      Z.push((0, v.oB)(g.EL, O, N))),
                    b && Z.push((0, v.oB)(g.UE, O, W)),
                    E && Z.push((0, v.oB)(g.oK, O, q), (0, v.oB)(g.S5, O, q)),
                    w && Z.push((0, v.oB)(g.x$, O, _)));
              })(n.consentManagement);
            }),
            (0, t.z)('gdprEnforcement');
        },
      },
      function (n) {
        var e;
        (e = 31498), n((n.s = e));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [48958],
      {
        12670: function (n, t, u) {
          var o = u(78640),
            e = u(3193),
            s = u(77337),
            a = !1;
          e.vc.getConfig('consentManagement', function (n) {
            var t;
            null ==
              (null == n || null === (t = n.consentManagement) || void 0 === t
                ? void 0
                : t.gpp) ||
              a ||
              ((0, s.Ji)('usnat', [7]), (a = !0));
          }),
            (0, o.z)('gppControl_usnat');
        },
      },
      function (n) {
        n.O(0, [35051], function () {
          return (t = 12670), n((n.s = t));
          var t;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [65296],
      {
        96787: function (t, o, e) {
          var n = e(78640),
            a = e(64358),
            r = e(96475),
            d = e(20265),
            i = e(3193),
            u = e(92797),
            c = e(34614),
            s = void 0,
            f = {},
            l = !1,
            p = function (t) {
              var o = f.customGptSlotMatching;
              if ((0, a.isGptPubadsDefined)()) {
                var e = t.reduce(function (t, o) {
                  return (t[o.code] = t[o.code] || []), t[o.code].push(o), t;
                }, {});
                window.googletag
                  .pubads()
                  .getSlots()
                  .forEach(function (t) {
                    var n = (0, c.sE)(
                      Object.keys(e),
                      o ? o(t) : (0, a.isAdUnitCodeMatchingSlot)(t),
                    );
                    if (n) {
                      var d = { name: 'gam', adslot: b(t.getAdUnitPath()) };
                      e[n].forEach(function (t) {
                        var o, e, n;
                        (0,
                        r.N)(t, 'ortb2Imp.ext.data.adserver', Object.assign({}, null === (o = t.ortb2Imp) || void 0 === o || null === (e = o.ext) || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.adserver, d));
                      });
                    }
                  });
              }
            },
            b = function (t) {
              return (i.vc.getConfig('gptPreAuction') || {}).mcmEnabled
                ? t.replace(/(^\/\d*),\d*\//, '$1/')
                : t;
            },
            g = function (t, o) {
              var e = t.ortb2Imp.ext.data;
              if (e.pbadslot) return e.pbadslot;
              if ((0, a.isGptPubadsDefined)()) {
                var n = window.googletag
                  .pubads()
                  .getSlots()
                  .filter(function (t) {
                    return t.getAdUnitPath() === o;
                  });
                if (0 !== n.length)
                  return 1 === n.length ? o : ''.concat(o, '#').concat(t.code);
              }
            },
            v = function (t) {
              var o = t.ortb2Imp.ext.data,
                e = f.customPbAdSlot;
              if (!o.pbadslot)
                if (e) o.pbadslot = e(t.code, (0, d.Z)(o, 'adserver.adslot'));
                else {
                  try {
                    var n = document.getElementById(t.code);
                    if (n.dataset.adslotid)
                      return void (o.pbadslot = n.dataset.adslotid);
                  } catch (t) {}
                  if (!(0, d.Z)(o, 'adserver.adslot'))
                    return (o.pbadslot = t.code), !0;
                  o.pbadslot = o.adserver.adslot;
                }
            },
            m = function (t, o) {
              p(o);
              var e = f,
                n = e.useDefaultPreAuction,
                a = e.customPreAuction;
              o.forEach(function (t) {
                (t.ortb2Imp = t.ortb2Imp || {}),
                  (t.ortb2Imp.ext = t.ortb2Imp.ext || {}),
                  (t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {});
                var o = t.ortb2Imp.ext;
                if (a || n) {
                  var e,
                    r = (0, d.Z)(o, 'data.adserver.adslot');
                  a ? (e = a(t, r)) : n && (e = g(t, r)),
                    e && (o.gpid = o.data.pbadslot = e);
                } else {
                  var i = v(t);
                  o.gpid || i || (o.gpid = o.data.pbadslot);
                }
              });
              for (
                var r = arguments.length,
                  i = new Array(r > 2 ? r - 2 : 0),
                  u = 2;
                u < r;
                u++
              )
                i[u - 2] = arguments[u];
              return t.call.apply(t, [s, o].concat(i));
            },
            h = function (t) {
              (f = (0, a.pick)(t, [
                'enabled',
                function (t) {
                  return !1 !== t;
                },
                'customGptSlotMatching',
                function (t) {
                  return 'function' == typeof t && t;
                },
                'customPbAdSlot',
                function (t) {
                  return 'function' == typeof t && t;
                },
                'customPreAuction',
                function (t) {
                  return 'function' == typeof t && t;
                },
                'useDefaultPreAuction',
                function (t) {
                  return !0 === t;
                },
              ])).enabled
                ? l || ((0, u.v5)('makeBidRequests').before(m), (l = !0))
                : ((0, a.logInfo)(
                    ''.concat('GPT Pre-Auction', ': Turning off module'),
                  ),
                  (f = {}),
                  (0, u.v5)('makeBidRequests').getHooks({ hook: m }).remove(),
                  (l = !1));
            };
          i.vc.getConfig('gptPreAuction', function (t) {
            return h(t.gptPreAuction);
          }),
            h({}),
            (0, n.z)('gptPreAuction');
        },
      },
      function (t) {
        var o;
        (o = 96787), t((t.s = o));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [61618],
      {
        10272: function (e, t, r) {
          var n = r(4942),
            o = r(15671),
            i = r(43144),
            a = r(78640),
            s = r(20265),
            c = r(64358),
            u = r(96475),
            p = r(48928),
            d = r(92797),
            g = r(25102),
            l = r(15164),
            f = r(34516),
            h = r(9633);
          function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function v(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? m(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : m(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return e;
          }
          function b(e, t) {
            !(function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object',
                );
            })(e, t),
              t.add(e);
          }
          function y(e, t, r) {
            if (!t.has(e))
              throw new TypeError(
                'attempted to get private field on non-instance',
              );
            return r;
          }
          var S = 'id5id',
            D = ''.concat(S, '_privacy'),
            I = 'html5',
            O = 'User ID - ID5 submodule: ',
            w = ['pbjs-id5id', 'id5id.1st', 'id5id'],
            C = (0, l.df)({ moduleType: h.y2, moduleName: 'id5Id' }),
            E = {
              name: 'id5Id',
              gvlid: 131,
              decode: function (e, t) {
                var r = {};
                if (e && 'string' == typeof e.universal_uid) {
                  var n = {
                    id5id: { uid: e.universal_uid, ext: (r = e.ext || r) },
                  };
                  switch ((0, s.Z)(e, 'ab_testing.result')) {
                    case 'control':
                      (0, c.logInfo)(
                        O +
                          'A/B Testing - user is in the Control Group: ID5 ID is NOT exposed',
                      ),
                        (0, u.N)(n, 'id5id.ext.abTestingControlGroup', !0);
                      break;
                    case 'error':
                      (0, c.logError)(
                        O +
                          'A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1',
                      );
                      break;
                    case 'normal':
                      (0, c.logInfo)(
                        O + 'A/B Testing - user is NOT in the Control Group',
                      ),
                        (0, u.N)(n, 'id5id.ext.abTestingControlGroup', !1);
                  }
                  return (0, c.logInfo)(O + 'Decoded ID', n), n;
                }
              },
              getId: function (e, t, r) {
                if (W(e)) {
                  if (R(t)) {
                    return {
                      callback: function (n) {
                        new N(e, t, r, f.nX.getConsentData())
                          .execute()
                          .then(function (e) {
                            n(e);
                          })
                          .catch(function (e) {
                            (0, c.logError)(
                              O + 'getId fetch encountered an error',
                              e,
                            ),
                              n();
                          });
                      },
                    };
                  }
                  (0, c.logInfo)(
                    O +
                      'Skipping ID5 local storage write because no consent given.',
                  );
                }
              },
              extendId: function (e, t, r) {
                return R(t)
                  ? (B(W(e) ? e.params.partner : 0),
                    (0, c.logInfo)(O + 'using cached ID', r),
                    r)
                  : ((0, c.logInfo)(
                      O +
                        'No consent given for ID5 local storage writing, skipping nb increment.',
                    ),
                    r);
              },
              eids: {
                id5id: {
                  getValue: function (e) {
                    return e.uid;
                  },
                  source: 'id5-sync.com',
                  atype: 1,
                  getUidExt: function (e) {
                    if (e.ext) return e.ext;
                  },
                },
              },
            },
            j = new WeakSet(),
            P = new WeakSet(),
            T = new WeakSet(),
            k = new WeakSet(),
            x = new WeakSet(),
            N = (function () {
              function e(t, r, n, i) {
                (0, o.Z)(this, e),
                  b(this, x),
                  b(this, k),
                  b(this, T),
                  b(this, P),
                  b(this, j),
                  (this.submoduleConfig = t),
                  (this.gdprConsentData = r),
                  (this.cacheIdObj = n),
                  (this.usPrivacyData = i);
              }
              return (
                (0, i.Z)(e, [
                  {
                    key: 'execute',
                    value: function () {
                      var e = this;
                      return y(this, P, G)
                        .call(this, this.submoduleConfig)
                        .then(function (t) {
                          return y(e, T, J)
                            .call(e, t.extensionsCall)
                            .then(function (r) {
                              return y(e, k, A).call(e, t.fetchCall, r);
                            });
                        })
                        .then(function (t) {
                          try {
                            Z(e.submoduleConfig.params.partner, 0),
                              t.privacy && F(D, JSON.stringify(t.privacy), 30);
                          } catch (e) {
                            (0, c.logError)(O + e);
                          }
                          return t;
                        });
                    },
                  },
                ]),
                e
              );
            })();
          function _(e, t, r) {
            return new Promise(function (n, o) {
              (0, p.hj)(
                e,
                {
                  success: function (e) {
                    n(e);
                  },
                  error: function (e) {
                    o(e);
                  },
                },
                t,
                r,
              );
            });
          }
          function G(e) {
            var t =
              e.params.configUrl || 'https://id5-sync.com/api/config/prebid';
            return y(this, j, _)
              .call(this, t, JSON.stringify(e), { method: 'POST' })
              .then(function (e) {
                var t = JSON.parse(e);
                return (
                  (0, c.logInfo)(
                    O + 'config response received from the server',
                    t,
                  ),
                  t
                );
              });
          }
          function J(e) {
            if (void 0 === e) return Promise.resolve(void 0);
            var t = e.url,
              r = e.method || 'GET',
              n = 'GET' === r ? void 0 : JSON.stringify(e.body || {});
            return y(this, j, _)
              .call(this, t, n, { method: r })
              .then(function (e) {
                var t = JSON.parse(e);
                return (
                  (0, c.logInfo)(
                    O + 'extensions response received from the server',
                    t,
                  ),
                  t
                );
              });
          }
          function A(e, t) {
            var r = e.url,
              n = e.overrides || {},
              o = v(
                v(v({}, y(this, x, L).call(this)), n),
                {},
                { extensions: t },
              );
            return y(this, j, _)
              .call(this, r, JSON.stringify(o), {
                method: 'POST',
                withCredentials: !0,
              })
              .then(function (e) {
                var t = JSON.parse(e);
                return (
                  (0, c.logInfo)(
                    O + 'fetch response received from the server',
                    t,
                  ),
                  t
                );
              });
          }
          function L() {
            var e,
              t = this.submoduleConfig.params,
              r =
                this.gdprConsentData &&
                'boolean' == typeof this.gdprConsentData.gdprApplies &&
                this.gdprConsentData.gdprApplies
                  ? 1
                  : 0,
              n = (0, g.nH)(),
              o =
                this.cacheIdObj && this.cacheIdObj.signature
                  ? this.cacheIdObj.signature
                  : (w.forEach(function (t) {
                      C.getCookie(t) &&
                        (e = (0, c.safeJSONParse)(C.getCookie(t)) || e);
                    }),
                    (e && e.signature) || ''),
              i = B(t.partner),
              a = {
                partner: t.partner,
                gdpr: r,
                nbPage: i,
                o: 'pbjs',
                tml: n.topmostLocation,
                ref: n.ref,
                cu: n.canonicalUrl,
                top: n.reachedTop ? 1 : 0,
                u: n.stack[0] || window.location.href,
                v: '8.13.0',
                storage: this.submoduleConfig.storage,
                localStorage: C.localStorageIsEnabled() ? 1 : 0,
              };
            !r ||
              void 0 === this.gdprConsentData.consentString ||
              (0, c.isEmpty)(this.gdprConsentData.consentString) ||
              (0, c.isEmptyStr)(this.gdprConsentData.consentString) ||
              (a.gdpr_consent = this.gdprConsentData.consentString),
              void 0 === this.usPrivacyData ||
                (0, c.isEmpty)(this.usPrivacyData) ||
                (0, c.isEmptyStr)(this.usPrivacyData) ||
                (a.us_privacy = this.usPrivacyData),
              void 0 === o || (0, c.isEmptyStr)(o) || (a.s = o),
              void 0 === t.pd || (0, c.isEmptyStr)(t.pd) || (a.pd = t.pd),
              void 0 === t.provider ||
                (0, c.isEmptyStr)(t.provider) ||
                (a.provider = t.provider);
            var s = t.abTesting || { enabled: !1 };
            return (
              s.enabled &&
                (a.ab_testing = {
                  enabled: !0,
                  control_group_pct: s.controlGroupPct,
                }),
              a
            );
          }
          function W(e) {
            if (!e || !e.params || !e.params.partner)
              return (0, c.logError)(O + 'partner required to be defined'), !1;
            var t = e.params.partner;
            if ('string' == typeof t || t instanceof String) {
              var r = parseInt(t);
              if (isNaN(r) || r < 0)
                return (
                  (0, c.logError)(
                    O +
                      'partner required to be a number or a String parsable to a positive integer',
                  ),
                  !1
                );
              e.params.partner = r;
            } else if ('number' != typeof t)
              return (
                (0, c.logError)(
                  O +
                    'partner required to be a number or a String parsable to a positive integer',
                ),
                !1
              );
            return e.storage && e.storage.type && e.storage.name
              ? (e.storage.type !== I &&
                  (0, c.logWarn)(
                    O +
                      "storage type recommended to be '".concat(
                        I,
                        "'. In a future release this may become a strict requirement",
                      ),
                  ),
                e.storage.name !== S &&
                  (0, c.logWarn)(
                    O +
                      "storage name recommended to be '".concat(
                        S,
                        "'. In a future release this may become a strict requirement",
                      ),
                  ),
                !0)
              : ((0, c.logError)(O + 'storage required to be set'), !1);
          }
          function q(e) {
            return ''.concat(S, '_').concat(e, '_nb');
          }
          function Z(e, t) {
            F(q(e), t, 30);
          }
          function U(e) {
            var t = (function (e) {
              var t = C.getDataFromLocalStorage(''.concat(e, '_exp'));
              if ('' === t) return C.getDataFromLocalStorage(e);
              if (t && new Date(t).getTime() - Date.now() > 0)
                return C.getDataFromLocalStorage(e);
              return C.removeDataFromLocalStorage(e), null;
            })(q(e));
            return t ? parseInt(t) : 0;
          }
          function B(e) {
            var t = U(e) + 1;
            return Z(e, t), t;
          }
          function F(e, t, r) {
            C.setDataInLocalStorage(
              ''.concat(e, '_exp'),
              (function (e) {
                return new Date(Date.now() + 864e5 * e).toUTCString();
              })(r),
            ),
              C.setDataInLocalStorage(''.concat(e), t);
          }
          function R(e) {
            var t = e && 'boolean' == typeof e.gdprApplies && e.gdprApplies,
              r = (0, s.Z)(e, 'vendorData.purpose.consents.1'),
              n = (0, s.Z)(
                e,
                'vendorData.vendor.consents.'.concat((131).toString()),
              );
            return !!(!t || (r && n));
          }
          (0, d.Bx)('userId', E), (0, a.z)('id5IdSystem');
        },
      },
      function (e) {
        var t;
        (t = 10272), e((e.s = t));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [52037],
      {
        52506: function (e, r, t) {
          var n = t(89062),
            a = t(78640),
            i = t(64358),
            o = t(20265),
            s = t(14699),
            d = t(24679),
            p = t(3193);
          function u(e, r) {
            var t =
              ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, r) {
                  if (!e) return;
                  if ('string' == typeof e) return c(e, r);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  'Object' === t && e.constructor && (t = e.constructor.name);
                  if ('Map' === t || 'Set' === t) return Array.from(e);
                  if (
                    'Arguments' === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return c(e, r);
                })(e)) ||
                (r && e && 'number' == typeof e.length)
              ) {
                t && (e = t);
                var n = 0,
                  a = function () {};
                return {
                  s: a,
                  n: function () {
                    return n >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[n++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: a,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var i,
              o = !0,
              s = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (o = e.done), e;
              },
              e: function (e) {
                (s = !0), (i = e);
              },
              f: function () {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              },
            };
          }
          function c(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
          }
          var m = [d.Mk, d.pX],
            l = '6.0.0',
            f = 'USD',
            v = 'https://hb.minutemedia-prebid.com/',
            y = 'hb-mm-multi',
            g = 'hb-multi-mm-test',
            b = 'iframe',
            h = 'pixel',
            I = {
              code: 'minutemedia',
              gvlid: 918,
              version: l,
              supportedMediaTypes: m,
              isBidRequestValid: function (e) {
                return e.params
                  ? !!e.params.org ||
                      ((0, i.logWarn)(
                        'org is a mandatory param for MinuteMedia adapter',
                      ),
                      !1)
                  : ((0, i.logWarn)(
                      'no params have been set to MinuteMedia adapter',
                    ),
                    !1);
              },
              buildRequests: function (e, r) {
                var t = {},
                  n = e[0],
                  a = n.params.testMode;
                return (
                  (t.params = (function (e, r) {
                    var t = window.location.hostname,
                      n = p.vc.getConfig('userSync') || {},
                      a = n.syncEnabled,
                      s = n.filterSettings,
                      d = r.bidderCode,
                      u = e.params,
                      c = r.timeout,
                      m = {
                        wrapper_type: 'prebidjs',
                        wrapper_vendor: 'pbjs',
                        wrapper_version: '8.13.0',
                        adapter_version: l,
                        auction_start: (0, i.timestamp)(),
                        publisher_id: u.org,
                        publisher_name: t,
                        site_domain: t,
                        dnt:
                          'yes' == navigator.doNotTrack ||
                          '1' == navigator.doNotTrack ||
                          '1' == navigator.msDoNotTrack
                            ? 1
                            : 0,
                        device_type: S(navigator.userAgent),
                        ua: navigator.userAgent,
                        is_wrapper: !!u.isWrapper,
                        session_id:
                          u.sessionId ||
                          (0, i.getBidIdParameter)('bidderRequestId', e),
                        tmax: c,
                      },
                      f = (0, i.getBidIdParameter)('userId', e);
                    f && (m.userIds = JSON.stringify(f));
                    var v = r.ortb2 || {};
                    v.site && (m.site_metadata = JSON.stringify(v.site));
                    v.user && (m.user_metadata = JSON.stringify(v.user));
                    if (a) {
                      var y = (function (e, r) {
                        var t = ['all', 'iframe'],
                          n = 'image';
                        if (
                          e &&
                          t.some(function (t) {
                            return Z(e[t], r);
                          })
                        )
                          return b;
                        if (!e || !e[n] || Z(e[n], r)) return h;
                      })(s, d);
                      y && (m.cs_method = y);
                    }
                    r.uspConsent && (m.us_privacy = r.uspConsent);
                    r &&
                      r.gdprConsent &&
                      r.gdprConsent.gdprApplies &&
                      ((m.gdpr = r.gdprConsent.gdprApplies),
                      (m.gdpr_consent = r.gdprConsent.consentString));
                    u.ifa && (m.ifa = u.ifa);
                    e.schain &&
                      (m.schain = (function (e) {
                        if ((0, i.isEmpty)(e)) return '';
                        var r = ''.concat(e.ver, ',').concat(e.complete);
                        return (
                          e.nodes.forEach(function (e) {
                            (r += '!'),
                              (r += ''.concat(w(e.asi), ',')),
                              (r += ''.concat(w(e.sid), ',')),
                              (r += ''.concat(
                                e.hp ? encodeURIComponent(e.hp) : '',
                                ',',
                              )),
                              (r += ''.concat(w(e.rid), ',')),
                              (r += ''.concat(w(e.name), ',')),
                              (r += ''.concat(w(e.domain)));
                          }),
                          r
                        );
                      })(e.schain));
                    r &&
                      r.refererInfo &&
                      ((m.referrer = (0, o.Z)(r, 'refererInfo.ref')),
                      (m.page_url =
                        (0, o.Z)(r, 'refererInfo.page') ||
                        (0, o.Z)(window, 'location.href')));
                    return m;
                  })(n, r)),
                  (t.bids = (function (e, r) {
                    var t = [];
                    e.length &&
                      e.forEach(function (e) {
                        t.push(
                          (function (e, r) {
                            var t,
                              n,
                              a = e.params,
                              s = (function (e) {
                                return e.mediaTypes && e.mediaTypes.banner;
                              })(e)
                                ? d.Mk
                                : d.pX,
                              p = (function (e, r) {
                                var t = [];
                                (0, o.Z)(e, 'mediaTypes.'.concat(r, '.sizes'))
                                  ? (t = e.mediaTypes[r].sizes)
                                  : Array.isArray(e.sizes) &&
                                    e.sizes.length > 0 &&
                                    (t = e.sizes);
                                return t;
                              })(e, s);
                            isNaN(a.floorPrice) && (a.floorPrice = 0);
                            var u = {
                                mediaType: s,
                                adUnitCode: (0, i.getBidIdParameter)(
                                  'adUnitCode',
                                  e,
                                ),
                                sizes: p,
                                floorPrice: Math.max(T(e, s), a.floorPrice),
                                bidId: (0, i.getBidIdParameter)('bidId', e),
                                loop: (0, i.getBidIdParameter)(
                                  'bidderRequestsCount',
                                  e,
                                ),
                                bidderRequestId: (0, i.getBidIdParameter)(
                                  'bidderRequestId',
                                  e,
                                ),
                                transactionId:
                                  (null === (t = e.ortb2Imp) ||
                                  void 0 === t ||
                                  null === (n = t.ext) ||
                                  void 0 === n
                                    ? void 0
                                    : n.tid) || '',
                                coppa: 0,
                              },
                              c = (0, o.Z)(e, 'mediaTypes.'.concat(s, '.pos'));
                            c && (u.pos = c);
                            var m = (0, o.Z)(e, 'ortb2Imp.ext.gpid');
                            m && (u.gpid = m);
                            var l =
                              a.placementId ||
                              (0, o.Z)(e, 'mediaTypes.'.concat(s, '.name'));
                            l && (u.placementId = l);
                            var f = (0, o.Z)(
                              e,
                              'mediaTypes.'.concat(s, '.mimes'),
                            );
                            f && (u.mimes = f);
                            var v = (0, o.Z)(
                              e,
                              'mediaTypes.'.concat(s, '.api'),
                            );
                            v && (u.api = v);
                            var y = (0, o.Z)(e, 'ortb2.device.sua');
                            y && (u.sua = y);
                            (0, o.Z)(e, 'ortb2.regs.coppa') && (u.coppa = 1);
                            if (s === d.pX) {
                              var g,
                                b = (0, o.Z)(
                                  e,
                                  'mediaTypes.video.playbackmethod',
                                );
                              Array.isArray(b) && (0, i.isInteger)(b[0])
                                ? (g = b[0])
                                : (0, i.isInteger)(b) && (g = b),
                                g && (u.playbackMethod = g);
                              var h = (0, o.Z)(e, 'mediaTypes.video.placement');
                              h && (u.placement = h);
                              var I = (0, o.Z)(
                                e,
                                'mediaTypes.video.minduration',
                              );
                              I && (u.minDuration = I);
                              var w = (0, o.Z)(
                                e,
                                'mediaTypes.video.maxduration',
                              );
                              w && (u.maxDuration = w);
                              var Z = (0, o.Z)(e, 'mediaTypes.video.skip');
                              Z && (u.skip = Z);
                              var C = (0, o.Z)(e, 'mediaTypes.video.linearity');
                              C && (u.linearity = C);
                              var S = (0, o.Z)(e, 'mediaTypes.video.protocols');
                              S && (u.protocols = S);
                              var _ = (0, o.Z)(e, 'mediaTypes.video.plcmt');
                              _ && (u.plcmt = _);
                            }
                            return u;
                          })(e),
                        );
                      });
                    return t;
                  })(e)),
                  { method: 'POST', url: C(a), data: t }
                );
              },
              interpretResponse: function (e) {
                var r = e.body,
                  t = [];
                return (
                  r.bids &&
                    r.bids.forEach(function (e) {
                      var r = {
                        requestId: e.requestId,
                        cpm: e.cpm,
                        currency: e.currency || f,
                        width: e.width,
                        height: e.height,
                        ttl: e.ttl || 360,
                        creativeId: e.requestId,
                        netRevenue: e.netRevenue || !0,
                        nurl: e.nurl,
                        mediaType: e.mediaType,
                        meta: { mediaType: e.mediaType },
                      };
                      e.mediaType === d.pX
                        ? (r.vastXml = e.vastXml)
                        : e.mediaType === d.Mk && (r.ad = e.ad),
                        e.adomain &&
                          e.adomain.length &&
                          (r.meta.advertiserDomains = e.adomain),
                        t.push(r);
                    }),
                  t
                );
              },
              getUserSyncs: function (e, r) {
                var t,
                  a = [],
                  o = u(r);
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var s = t.value;
                    if (
                      (e.iframeEnabled &&
                        s.body.params.userSyncURL &&
                        a.push({
                          type: 'iframe',
                          url: s.body.params.userSyncURL,
                        }),
                      e.pixelEnabled &&
                        (0, i.isArray)(s.body.params.userSyncPixels))
                    ) {
                      var d = s.body.params.userSyncPixels.map(function (e) {
                        return { type: 'image', url: e };
                      });
                      a.push.apply(a, (0, n.Z)(d));
                    }
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return a;
              },
              onBidWon: function (e) {
                null != e &&
                  ((0, i.logInfo)('onBidWon:', e),
                  e.hasOwnProperty('nurl') &&
                    e.nurl.length > 0 &&
                    (0, i.triggerPixel)(e.nurl));
              },
            };
          function T(e, r) {
            if (!(0, i.isFn)(e.getFloor)) return 0;
            var t = e.getFloor({ currency: f, mediaType: r, size: '*' });
            return t.currency === f && t.floor ? t.floor : 0;
          }
          function w(e) {
            return (0, i.isEmpty)(e) ? '' : encodeURIComponent(e);
          }
          function Z(e, r) {
            if (!e) return !1;
            var t = 'include' === e.filter,
              n = (0, i.isArray)(e.bidders) ? e.bidders : [r];
            return t && (0, i.contains)(n, r);
          }
          function C(e) {
            return e ? v + g : v + y;
          }
          function S(e) {
            return /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
              e.toLowerCase(),
            )
              ? '5'
              : /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
                  e.toLowerCase(),
                )
              ? '4'
              : /smart[-_\s]?tv|hbbtv|appletv|googletv|hdmi|netcast|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b/i.test(
                  e.toLowerCase(),
                )
              ? '3'
              : '1';
          }
          (0, s.dX)(I), (0, a.z)('minutemediaBidAdapter');
        },
      },
      function (e) {
        var r;
        (r = 52506), e((e.s = r));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [77700],
      {
        11523: function (t, e, n) {
          var r = n(89062),
            i = n(60136),
            o = n(82963),
            a = n(61120),
            u = n(15671),
            s = n(43144),
            c = n(78640),
            f = n(20265),
            d = n(64358),
            l = n(14699),
            y = n(24679);
          function p(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = (0, a.Z)(t);
              if (e) {
                var i = (0, a.Z)(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return (0, o.Z)(this, n);
            };
          }
          function v(t, e) {
            var n =
              ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return h(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === n && t.constructor && (n = t.constructor.name);
                  if ('Map' === n || 'Set' === n) return Array.from(t);
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return h(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                n && (t = n);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[r++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (a = t.done), t;
              },
              e: function (t) {
                (u = !0), (o = t);
              },
              f: function () {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function h(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
          }
          var g = (0, n(24980).x)({
              context: { netRevenue: !0, ttl: 30 },
              imp: function (t, e, n) {
                var r = t(e, n);
                return (r.tagid = e.adUnitCode), r;
              },
            }),
            m = 'nativo',
            b = [y.Mk],
            R = 'USD',
            S = '*',
            k = (0, c.R)(),
            q = {},
            D = {},
            O = {},
            A = new Set(),
            _ = new Set(),
            w = new Set(),
            E = {
              url: function (t) {
                return 'string' == typeof t;
              },
              placementId: function (t) {
                return 'string' == typeof t || 'number' == typeof t;
              },
            },
            I = {
              code: m,
              gvlid: 263,
              aliases: ['ntv'],
              supportedMediaTypes: b,
              isBidRequestValid: function (t) {
                return t.params
                  ? !Object.keys(t.params).some(function (e) {
                      var n = t.params[e],
                        r = E[e];
                      return !!r && !r(n);
                    })
                  : t.bidder === m;
              },
              buildRequests: function (t, e) {
                var n = g.toORTB({ bidRequests: t, bidderRequest: e }),
                  i = JSON.stringify(n),
                  o = new C();
                o.addBidRequestDataSource(new U());
                var a,
                  u,
                  s = new Set(),
                  c = (function () {
                    var t = {},
                      e = [];
                    function n(e, n) {
                      t.hasOwnProperty(e) || (t[e] = n);
                    }
                    return {
                      addBidData: function (t, r) {
                        var i = e.length;
                        e.push(t),
                          Array.isArray(r)
                            ? r.forEach(function (t) {
                                n(String(t), i);
                              })
                            : n(String(r), i);
                      },
                      getBidData: function (n) {
                        var r = String(n);
                        if (t.hasOwnProperty(r)) return e[t[r]];
                      },
                    };
                  })(),
                  d = { length: 0 },
                  l = {};
                t.forEach(function (t) {
                  (u =
                    (function (t) {
                      var e = (0, f.Z)(t, 'params.url');
                      if (null == e) return;
                      if (F(e)) return e;
                      e = (function (t) {
                        if (F(t)) return t;
                        var e = 'https:';
                        0 !== t.indexOf('//') && (e += '//');
                        return ''.concat(e).concat(t);
                      })(e);
                      try {
                        return new URL(e).href;
                      } catch (t) {}
                    })(t) || e.refererInfo.location),
                    (a = (0, f.Z)(t, 'params.placementId'));
                  var n = [t.adUnitCode];
                  a &&
                    !s.has(a) &&
                    (s.add(a), n.push(a), (d[a] = t.sizes), d.length++);
                  var i = { bidId: t.bidId, size: z(t.sizes) };
                  c.addBidData(i, n);
                  var y = (function (t) {
                    if ('function' != typeof t.getFloor) return;
                    var e = {},
                      n = t.mediaTypes,
                      i = new Set();
                    Object.keys(n).forEach(function (r) {
                      var o = n[r],
                        a = {};
                      (o.sizes || o.playerSize || []).forEach(function (e) {
                        var n = t.getFloor({
                          currency: R,
                          mediaType: r,
                          size: e,
                        });
                        (a[T(e)] = n.floor), i.add(e);
                      }),
                        (e[r] = a);
                      var u = (function (t, e) {
                        return t.getFloor({
                          currency: R,
                          mediaType: e,
                          size: S,
                        });
                      })(t, r);
                      u.floor > 0 && (a['*'] = u.floor);
                    });
                    var o = (function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [S],
                        n = {};
                      return (
                        e.forEach(function (e) {
                          var r = t.mediaTypes;
                          t.mediaTypes = { PRICE_FLOOR_WILDCARD: r.sizes };
                          var i = t.getFloor({
                            currency: R,
                            mediaType: S,
                            size: e,
                          });
                          t.mediaTypes = r;
                          var o = e !== S ? T(e) : S;
                          n[o] = i.floor;
                        }),
                        n
                      );
                    })(t, [S].concat((0, r.Z)(Array.from(i))));
                    return (e['*'] = o), e;
                  })(t);
                  y && (l[t.adUnitCode] = y), o.processBidRequestData(t, e);
                }),
                  (q[e.bidderRequestId] = c);
                var y = t.map(function (t) {
                    return (
                      (D[t.adUnitCode] =
                        void 0 !== D[t.adUnitCode] ? D[t.adUnitCode] + 1 : 0),
                      { adUnitCode: t.adUnitCode, mediaTypes: t.mediaTypes }
                    );
                  }),
                  p = [
                    { key: 'ntv_pbv', value: k.version },
                    { key: 'ntv_pb_rid', value: e.bidderRequestId },
                    { key: 'ntv_ppc', value: btoa(JSON.stringify(y)) },
                    { key: 'ntv_dbr', value: btoa(JSON.stringify(D)) },
                    { key: 'ntv_url', value: encodeURIComponent(u) },
                  ];
                if (
                  (Object.keys(l).length &&
                    p.unshift({
                      key: 'ntv_ppf',
                      value: btoa(JSON.stringify(l)),
                    }),
                  A.size > 0 &&
                    p.unshift({
                      key: 'ntv_atf',
                      value: Array.from(A).join(','),
                    }),
                  _.size > 0 &&
                    p.unshift({
                      key: 'ntv_avtf',
                      value: Array.from(_).join(','),
                    }),
                  w.size > 0 &&
                    p.unshift({
                      key: 'ntv_ctf',
                      value: Array.from(w).join(','),
                    }),
                  d.length &&
                    p.unshift({
                      key: 'ntv_pas',
                      value: btoa(JSON.stringify(d)),
                    }),
                  s.size > 0)
                ) {
                  var v = [];
                  s.forEach(function (t) {
                    return v.push(t);
                  }),
                    p.unshift({ key: 'ntv_ptd', value: v.join(',') });
                }
                e.gdprConsent &&
                  p.unshift({
                    key: 'ntv_gdpr_consent',
                    value: e.gdprConsent.consentString,
                  }),
                  e.uspConsent &&
                    p.unshift({ key: 'us_privacy', value: e.uspConsent });
                var h,
                  m = (function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [];
                    if (0 === e.length || !Array.isArray(e)) return t;
                    var n = e.filter(function (t) {
                      return '' !== t.trim();
                    });
                    if (0 === n.length) return t;
                    for (
                      var r = ''.concat(t, '?').concat(n[0]), i = 1;
                      i < n.length;
                      i++
                    )
                      r += '&'.concat(n[i]);
                    return r;
                  })('https://exchange.postrelease.com/prebid', [
                    o.getRequestDataQueryString(),
                    ((h = p),
                    h.reduce(function (t, e) {
                      return Z(t, e.key, e.value);
                    }, '')),
                  ]);
                return { method: 'POST', url: m, data: i };
              },
              interpretResponse: function (t, e) {
                var n = this;
                if (!t || !t.body || (0, d.isEmpty)(t.body)) return [];
                try {
                  var r,
                    i,
                    o = 'string' == typeof t.body ? JSON.parse(t.body) : t.body,
                    a = [];
                  return (
                    o.seatbid.forEach(function (t) {
                      t.bid.forEach(function (t) {
                        (i = n.getAdUnitData(o.id, t)),
                          (r = {
                            requestId: i.bidId,
                            cpm: t.price,
                            currency: o.cur,
                            width: t.w || i.size[0],
                            height: t.h || i.size[1],
                            creativeId: t.crid,
                            dealId: t.id,
                            netRevenue: !0,
                            ttl: t.ttl || 360,
                            ad: t.adm,
                            meta: { advertiserDomains: t.adomain },
                          }),
                          t.ext && (O[t.id] = t.ext),
                          a.push(r);
                      });
                    }),
                    delete q[o.id],
                    a
                  );
                } catch (t) {
                  return [];
                }
              },
              getUserSyncs: function (t, e, n, r) {
                var i = '';
                n &&
                  ((i = Z(i, 'gdpr', n.gdprApplies ? 1 : 0)),
                  (i = Z(
                    i,
                    'gdpr_consent',
                    encodeURIComponent(n.consentString || ''),
                  ))),
                  r &&
                    (i = Z(i, 'us_privacy', encodeURIComponent(r.uspConsent)));
                var o,
                  a = { iframe: t.iframeEnabled, image: t.pixelEnabled },
                  u = [];
                return (
                  e.forEach(function (t) {
                    if (!t || !t.body || (0, d.isEmpty)(t.body)) return u;
                    try {
                      o =
                        'string' == typeof t.body ? JSON.parse(t.body) : t.body;
                    } catch (t) {
                      return;
                    }
                    o &&
                      o.seatbid &&
                      0 !== o.seatbid.length &&
                      o.seatbid.forEach(function (t) {
                        t.syncUrls.forEach(function (t) {
                          a[t.type] &&
                            '' !== t.url.trim() &&
                            u.push({
                              type: t.type,
                              url: t.url.replace('{GDPR_params}', i),
                            });
                        });
                      });
                  }),
                  u
                );
              },
              onBidWon: function (t) {
                var e = O[t.dealId];
                e &&
                  (x(A, e.adsToFilter),
                  x(_, e.advertisersToFilter),
                  x(w, e.campaignsToFilter));
              },
              getAdUnitData: function (t, e) {
                var n = q[t],
                  r = e.impid,
                  i = (0, f.Z)(e, 'ext.ad_unit_id');
                return n.getBidData(i) || n.getBidData(r);
              },
            };
          (0, l.dX)(I);
          var C = (function () {
              function t() {
                (0, u.Z)(this, t), (this.bidRequestDataSources = []);
              }
              return (
                (0, s.Z)(t, [
                  {
                    key: 'addBidRequestDataSource',
                    value: function (t) {
                      t instanceof B && this.bidRequestDataSources.push(t);
                    },
                  },
                  {
                    key: 'processBidRequestData',
                    value: function (t, e) {
                      var n,
                        r = v(this.bidRequestDataSources);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          n.value.processBidRequestData(t, e);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                    },
                  },
                  {
                    key: 'getRequestDataQueryString',
                    value: function () {
                      if (0 != this.bidRequestDataSources.length)
                        return this.bidRequestDataSources
                          .map(function (t) {
                            return t.getRequestQueryString();
                          })
                          .filter(function (t) {
                            return '' !== t;
                          })
                          .join('&');
                    },
                  },
                ]),
                t
              );
            })(),
            B = (function () {
              function t() {
                (0, u.Z)(this, t), (this.type = 'BidRequestDataSource');
              }
              return (
                (0, s.Z)(t, [
                  { key: 'processBidRequestData', value: function (t, e) {} },
                  {
                    key: 'getRequestQueryString',
                    value: function () {
                      return '';
                    },
                  },
                ]),
                t
              );
            })(),
            U = (function (t) {
              (0, i.Z)(n, t);
              var e = p(n);
              function n() {
                var t;
                return (
                  (0, u.Z)(this, n),
                  ((t = e.call(this)).type = 'UserEIDs'),
                  (t.qsParam = new P('ntv_pb_eid')),
                  (t.eids = []),
                  t
                );
              }
              return (
                (0, s.Z)(n, [
                  {
                    key: 'processBidRequestData',
                    value: function (t, e) {
                      void 0 === t.userIdAsEids ||
                        this.eids.length > 0 ||
                        (this.eids = t.userIdAsEids);
                    },
                  },
                  {
                    key: 'getRequestQueryString',
                    value: function () {
                      if (0 === this.eids.length) return '';
                      var t = (function (t) {
                        try {
                          return btoa(JSON.stringify(t));
                        } catch (t) {}
                      })(this.eids);
                      return (this.qsParam.value = t), this.qsParam.toString();
                    },
                  },
                ]),
                n
              );
            })(B),
            P = (0, s.Z)(function t(e, n) {
              (0, u.Z)(this, t), (this.key = e), (this.value = n);
            });
          function T(t) {
            return !Array.isArray(t) || t.length < 2
              ? ''
              : ''.concat(t[0], 'x').concat(t[1]);
          }
          function Z(t, e, n) {
            return (
              t +
              ''
                .concat(t.length ? '&' : '')
                .concat(e, '=')
                .concat(n)
            );
          }
          function z(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : j;
            return t && 0 !== t.length
              ? 1 === t.length
                ? t[0]
                : t.reduce(function (t, n) {
                    return e(n) > e(t) ? n : t;
                  })
              : [];
          }
          P.prototype.toString = function () {
            return ''.concat(this.key, '=').concat(this.value);
          };
          var j = function (t) {
            return t[0] * t[1];
          };
          function x(t, e) {
            e &&
              Array.isArray(e) &&
              e.length &&
              e.forEach(function (e) {
                return t.add(e);
              });
          }
          function F(t) {
            return /^http[s]?\:/.test(t);
          }
          (0, c.z)('nativoBidAdapter');
        },
        26372: function (t, e, n) {
          n.d(e, {
            DZ: function () {
              return a;
            },
            Px: function () {
              return u;
            },
            TP: function () {
              return c;
            },
            YC: function () {
              return s;
            },
            Z: function () {
              return o;
            },
            f8: function () {
              return p;
            },
            fP: function () {
              return v;
            },
            gm: function () {
              return r;
            },
            md: function () {
              return f;
            },
          });
          var r = ['request', 'imp', 'bidResponse', 'response'],
            i = ['default', 'pbs'],
            o = r[0],
            a = r[1],
            u = r[2],
            s = r[3],
            c = i[0],
            f = i[1],
            d = new Set(r);
          var l,
            y =
              ((l = {}),
              {
                registerOrtbProcessor: function (t) {
                  var e = t.type,
                    n = t.name,
                    i = t.fn,
                    o = t.priority,
                    a = void 0 === o ? 0 : o,
                    u = t.dialects,
                    s = void 0 === u ? [c] : u;
                  if (!d.has(e))
                    throw new Error(
                      'ORTB processor type must be one of: '.concat(
                        r.join(', '),
                      ),
                    );
                  s.forEach(function (t) {
                    l.hasOwnProperty(t) || (l[t] = {}),
                      l[t].hasOwnProperty(e) || (l[t][e] = {}),
                      (l[t][e][n] = { priority: a, fn: i });
                  });
                },
                getProcessors: function (t) {
                  return l[t] || {};
                },
              }),
            p = y.registerOrtbProcessor,
            v = y.getProcessors;
        },
      },
      function (t) {
        t.O(0, [85279], function () {
          return (e = 11523), t((t.s = e));
          var e;
        });
        t.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [71532],
      {
        34851: function (e, t, n) {
          var r = n(4942),
            i = n(78640),
            o = n(24679),
            d = n(90154),
            a = n(35706),
            s = n(34614),
            p = n(15164),
            c = n(14699),
            u = n(20265),
            l = n(64358);
          function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function g(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? f(Object(n), !0).forEach(function (t) {
                    (0, r.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : f(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
            }
            return e;
          }
          var h = 'https://onetag-sys.com/usync/',
            y = 'onetag',
            m = (0, p.df)({ bidderCode: y });
          function v(e) {
            return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video;
          }
          function b(e, t) {
            if (e === o.Mk) return O(t).length > 0;
            if (e === o.pX && v(t)) {
              var n = t.mediaTypes.video.context;
              if ('outstream' === n || 'instream' === n) return C(t).length > 0;
            }
            return !1;
          }
          function I(e) {
            try {
              return void 0 !== e.document.hidden
                ? e.document.hidden
                : void 0 !== e.document.msHidden
                ? e.document.msHidden
                : void 0 !== e.document.webkitHidden
                ? e.document.webkitHidden
                : null;
            } catch (e) {
              return null;
            }
          }
          function w(e) {
            var t,
              n,
              r = e.params;
            (this.adUnitCode = e.adUnitCode),
              (this.bidId = e.bidId),
              (this.bidderRequestId = e.bidderRequestId),
              (this.auctionId = e.auctionId),
              (this.transactionId =
                null === (t = e.ortb2Imp) ||
                void 0 === t ||
                null === (n = t.ext) ||
                void 0 === n
                  ? void 0
                  : n.tid),
              (this.gpid =
                (0, u.Z)(e, 'ortb2Imp.ext.gpid') ||
                (0, u.Z)(e, 'ortb2Imp.ext.data.pbadslot')),
              (this.pubId = r.pubId),
              (this.ext = r.ext),
              r.pubClick && (this.click = r.pubClick),
              r.dealId && (this.dealId = r.dealId);
            var i = (function (e) {
              var t = document.getElementById(e);
              try {
                for (
                  var n = t.getBoundingClientRect(),
                    r = n.top,
                    i = n.left,
                    o = n.width,
                    d = n.height,
                    a = t.ownerDocument.defaultView,
                    s = {
                      top: r + a.pageYOffset,
                      left: i + a.pageXOffset,
                      width: o,
                      height: d,
                    },
                    p = a.frameElement;
                  null != p;

                ) {
                  var c = p.getBoundingClientRect(),
                    u = c.top,
                    l = c.left;
                  (s.top += u + a.pageYOffset),
                    (s.left += l + a.pageXOffset),
                    (p = (a = a.parent).frameElement);
                }
                return s;
              } catch (e) {
                return null;
              }
            })(e.adUnitCode);
            i && (this.coords = i);
          }
          function T() {
            try {
              if (
                null != window.performance &&
                null != window.performance.timing
              ) {
                var e = {},
                  t = window.performance.timing;
                return (
                  (e.pageLoadTime = t.loadEventEnd - t.navigationStart),
                  (e.connectTime = t.responseEnd - t.requestStart),
                  (e.renderTime = t.domComplete - t.domLoading),
                  e
                );
              }
            } catch (e) {
              return null;
            }
            return null;
          }
          function C(e) {
            var t = e.mediaTypes.video.playerSize;
            return void 0 !== t && Array.isArray(t) && t.length > 0 ? S(t) : [];
          }
          function O(e) {
            return void 0 !== e.mediaTypes &&
              void 0 !== e.mediaTypes.banner &&
              void 0 !== e.mediaTypes.banner.sizes &&
              Array.isArray(e.mediaTypes.banner.sizes) &&
              e.mediaTypes.banner.sizes.length > 0
              ? S(e.mediaTypes.banner.sizes)
              : !v(e) && e.sizes && Array.isArray(e.sizes)
              ? S(e.sizes)
              : [];
          }
          function S(e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n];
              t.push({ width: r[0], height: r[1] });
            }
            return t;
          }
          function k(e, t, n) {
            var r = [];
            return (
              'function' == typeof e.getFloor &&
                n.forEach(function (n) {
                  var i = e.getFloor({
                    currency: 'EUR',
                    mediaType: t || '*',
                    size: [n.width, n.height],
                  });
                  (i.size = (0, l.deepClone)(n)),
                    i.floor || (i.floor = null),
                    r.push(i);
                }),
              r
            );
          }
          var E = {
            code: y,
            gvlid: 241,
            supportedMediaTypes: [o.Mk, o.pX],
            isBidRequestValid: function (e) {
              return (
                void 0 !== e &&
                void 0 !== e.params &&
                'string' == typeof e.params.pubId &&
                (b(o.Mk, e) || b(o.pX, e))
              );
            },
            buildRequests: function (e, t) {
              var n,
                r,
                i,
                d = g(
                  {
                    bids:
                      ((n = e),
                      (r = n
                        .filter(function (e) {
                          return v(e);
                        })
                        .map(function (e) {
                          var t = {};
                          return (
                            w.call(t, e),
                            (t.context = e.mediaTypes.video.context),
                            (t.playerSize = C(e)),
                            (t.mediaTypeInfo = (0, l.deepClone)(
                              e.mediaTypes.video,
                            )),
                            (t.type = o.pX),
                            (t.priceFloors = k(e, o.pX, t.playerSize)),
                            t
                          );
                        })),
                      (i = n
                        .filter(function (e) {
                          return b(o.Mk, e);
                        })
                        .map(function (e) {
                          var t = {};
                          return (
                            w.call(t, e),
                            (t.sizes = O(e)),
                            (t.type = o.Mk),
                            (t.mediaTypeInfo = (0, l.deepClone)(
                              e.mediaTypes.banner,
                            )),
                            (t.priceFloors = k(e, o.Mk, t.sizes)),
                            t
                          );
                        })),
                      r.concat(i)),
                  },
                  (function (e) {
                    var t = (function () {
                      var e = window;
                      window.parent;
                      try {
                        for (; e !== e.parent; )
                          e.parent.location.href, (e = e.parent);
                      } catch (e) {}
                      return e;
                    })();
                    return {
                      location: (0, u.Z)(e, 'refererInfo.page', null),
                      referrer: (0, u.Z)(e, 'refererInfo.ref', null),
                      stack: (0, u.Z)(e, 'refererInfo.stack', []),
                      numIframes: (0, u.Z)(e, 'refererInfo.numIframes', 0),
                      wWidth: t.innerWidth,
                      wHeight: t.innerHeight,
                      oWidth: t.outerWidth,
                      oHeight: t.outerHeight,
                      sWidth: t.screen.width,
                      sHeight: t.screen.height,
                      aWidth: t.screen.availWidth,
                      aHeight: t.screen.availHeight,
                      sLeft: 'screenLeft' in t ? t.screenLeft : t.screenX,
                      sTop: 'screenTop' in t ? t.screenTop : t.screenY,
                      xOffset: t.pageXOffset,
                      yOffset: t.pageYOffset,
                      docHidden: I(t),
                      docHeight: t.document.body
                        ? t.document.body.scrollHeight
                        : null,
                      hLength: history.length,
                      timing: T(),
                      version: { prebid: '8.13.0', adapter: '1.1.1' },
                    };
                  })(t),
                );
              t &&
                t.gdprConsent &&
                (d.gdprConsent = {
                  consentString: t.gdprConsent.consentString,
                  consentRequired: t.gdprConsent.gdprApplies,
                }),
                t &&
                  t.gppConsent &&
                  (d.gppConsent = {
                    consentString: t.gppConsent.gppString,
                    applicableSections: t.gppConsent.applicableSections,
                  }),
                t && t.uspConsent && (d.usPrivacy = t.uspConsent),
                t && t.ortb2 && (d.ortb2 = t.ortb2),
                e &&
                  0 !== e.length &&
                  e[0].userIdAsEids &&
                  (d.userId = e[0].userIdAsEids),
                e &&
                  0 !== e.length &&
                  e[0].schain &&
                  (function (e) {
                    var t = !1,
                      n = ['asi', 'sid', 'hp'];
                    if (!e || !e.nodes) return t;
                    (t = e.nodes.reduce(function (e, t) {
                      return e
                        ? n.every(function (e) {
                            return t.hasOwnProperty(e);
                          })
                        : e;
                    }, !0)) ||
                      (0, l.logError)('OneTag: required schain params missing');
                    return t;
                  })(e[0].schain) &&
                  (d.schain = e[0].schain);
              try {
                m.hasLocalStorage() &&
                  (d.onetagSid = m.getDataFromLocalStorage('onetag_sid'));
              } catch (e) {}
              var a = navigator.connection || navigator.webkitConnection;
              return (
                (d.networkConnectionType = a && a.type ? a.type : null),
                (d.networkEffectiveConnectionType =
                  a && a.effectiveType ? a.effectiveType : null),
                {
                  method: 'POST',
                  url: 'https://onetag-sys.com/prebid-request',
                  data: JSON.stringify(d),
                }
              );
            },
            interpretResponse: function (e, t) {
              var n = e.body,
                r = [],
                i = JSON.parse(t.data);
              return !n || (n.nobid && !0 === n.nobid)
                ? r
                : n.bids && Array.isArray(n.bids) && 0 !== n.bids.length
                ? (n.bids.forEach(function (e) {
                    var t = {
                      requestId: e.requestId,
                      cpm: e.cpm,
                      width: e.width,
                      height: e.height,
                      creativeId: e.creativeId,
                      dealId: null == e.dealId ? e.dealId : '',
                      currency: e.currency,
                      netRevenue: e.netRevenue || !1,
                      mediaType: e.mediaType,
                      meta: {
                        mediaType: e.mediaType,
                        advertiserDomains: e.adomain,
                      },
                      ttl: e.ttl || 300,
                    };
                    if (e.mediaType === o.Mk) t.ad = e.ad;
                    else if (e.mediaType === o.pX) {
                      var n = (0, s.sE)(i.bids, function (t) {
                          return t.bidId === e.requestId && t.type === o.pX;
                        }),
                        p = n.context,
                        c = n.adUnitCode;
                      p === d.LD
                        ? ((t.vastUrl = e.vastUrl),
                          (t.videoCacheKey = e.videoCacheKey))
                        : p === d.gZ &&
                          ((t.vastXml = e.ad),
                          (t.vastUrl = e.vastUrl),
                          e.rendererUrl &&
                            (t.renderer = (function (e) {
                              var t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                                n = a.Th.install({
                                  id: e.requestId,
                                  url: e.rendererUrl,
                                  config: t,
                                  adUnitCode: e.adUnitCode,
                                  loaded: !1,
                                });
                              try {
                                n.setRender(function (t) {
                                  var n = t.renderer,
                                    r = t.width,
                                    i = t.height,
                                    o = t.vastXml,
                                    d = t.adUnitCode;
                                  n.push(function () {
                                    window.onetag.Player.init(
                                      g(
                                        g({}, e),
                                        {},
                                        {
                                          width: r,
                                          height: i,
                                          vastXml: o,
                                          nodeId: d,
                                          config: n.getConfig(),
                                        },
                                      ),
                                    );
                                  });
                                });
                              } catch (e) {}
                              return n;
                            })(g(g({}, e), {}, { adUnitCode: c }))));
                    }
                    r.push(t);
                  }),
                  r)
                : r;
            },
            getUserSyncs: function (e, t, n, r, i) {
              var o = [],
                d = '';
              return (
                n &&
                  ('boolean' == typeof n.gdprApplies &&
                    (d += '&gdpr=' + (n.gdprApplies ? 1 : 0)),
                  'string' == typeof n.consentString &&
                    (d += '&gdpr_consent=' + n.consentString)),
                i &&
                  'string' == typeof i.gppString &&
                  (d += '&gpp_consent=' + i.gppString),
                r && 'string' == typeof r && (d += '&us_privacy=' + r),
                e.iframeEnabled &&
                  o.push({
                    type: 'iframe',
                    url: h + '?cb=' + new Date().getTime() + d,
                  }),
                e.pixelEnabled &&
                  o.push({ type: 'image', url: h + '?tag=img' + d }),
                o
              );
            },
          };
          (0, c.dX)(E), (0, i.z)('onetagBidAdapter');
        },
      },
      function (e) {
        var t;
        (t = 34851), e((e.s = t));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [39225],
      {
        28689: function (n, i, e) {
          var o = e(78640),
            t = e(3193),
            r = e(86104),
            c = e(64358),
            s = e(20265),
            a = e(96475),
            f = e(26372),
            u = 'Invalid schain object found: ',
            h = ' should be a string',
            d = ' should be an Integer',
            g = ' should be an object',
            l = { STRICT: 'strict', RELAXED: 'relaxed', OFF: 'off' },
            b = [];
          function p(n, i) {
            var e = l.STRICT;
            if (
              (function (n) {
                return !(
                  void 0 === n ||
                  (!(0, c.isPlainObject)(n) &&
                    ((0, c.logError)(
                      u +
                        'the following schain config will not be used as schain is not an object.',
                      n,
                    ),
                    1))
                );
              })(n)
            ) {
              if (
                ((0, c.isStr)(n.validation) &&
                  -1 != b.indexOf(n.validation) &&
                  (e = n.validation),
                e === l.OFF)
              )
                return n.config;
              if (
                (function (n, i) {
                  var e = 'Detected something wrong within an schain config:',
                    o = '';
                  function t(n) {
                    o += '\n' + n;
                  }
                  function r() {
                    !0 === i
                      ? (0, c.logError)(e, n, o)
                      : (0, c.logWarn)(e, n, o);
                  }
                  if (
                    !(0, c.isPlainObject)(n) &&
                    (t('schain.config' + g), r(), i)
                  )
                    return !1;
                  if (
                    (((0, c.isNumber)(n.complete) &&
                      (0, c.isInteger)(n.complete)) ||
                      t('schain.config.complete' + d),
                    (0, c.isStr)(n.ver) || t('schain.config.ver' + h),
                    (0, c.hasOwn)(n, 'ext') &&
                      ((0, c.isPlainObject)(n.ext) ||
                        t('schain.config.ext' + g)),
                    (0, c.isArray)(n.nodes))
                  )
                    n.nodes.forEach(function (n, i) {
                      (0, c.isStr)(n.asi) ||
                        t('schain.config.nodes['.concat(i, '].asi') + h),
                        (0, c.isStr)(n.sid) ||
                          t('schain.config.nodes['.concat(i, '].sid') + h),
                        ((0, c.isNumber)(n.hp) && (0, c.isInteger)(n.hp)) ||
                          t('schain.config.nodes['.concat(i, '].hp') + d),
                        (0, c.hasOwn)(n, 'rid') &&
                          ((0, c.isStr)(n.rid) ||
                            t('schain.config.nodes['.concat(i, '].rid') + h)),
                        (0, c.hasOwn)(n, 'name') &&
                          ((0, c.isStr)(n.name) ||
                            t('schain.config.nodes['.concat(i, '].name') + h)),
                        (0, c.hasOwn)(n, 'domain') &&
                          ((0, c.isStr)(n.domain) ||
                            t(
                              'schain.config.nodes['.concat(i, '].domain') + h,
                            )),
                        (0, c.hasOwn)(n, 'ext') &&
                          ((0, c.isPlainObject)(n.ext) ||
                            t('schain.config.nodes['.concat(i, '].ext') + g));
                    });
                  else if (
                    (t('schain.config.nodes should be an Array'), r(), i)
                  )
                    return !1;
                  return !(o.length > 0 && (r(), i));
                })(n.config, !(e !== l.STRICT))
              )
                return n.config;
              (0, c.logError)(
                u +
                  "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(
                    i,
                    "'.  See above error for details.",
                  ),
              );
            }
            return null;
          }
          function v(n, i) {
            var e = t.vc.getConfig('schain'),
              o = t.vc.getBidderConfig();
            i.forEach(function (n) {
              var i = n.bidderCode,
                t = (function (n) {
                  return (o[n] && o[n].schain) || e;
                })(i);
              n.bids.forEach(function (n) {
                var e = p(t, i);
                e && (n.schain = (0, c.deepClone)(e));
              });
            }),
              n(i);
          }
          (0, c._each)(l, function (n) {
            return b.push(n);
          }),
            r.ZP.makeBidRequests.after(v),
            (0, f.f8)({
              type: f.Z,
              name: 'sourceExtSchain',
              fn: function (n, i, e) {
                if (!(0, s.Z)(n, 'source.ext.schain')) {
                  var o = (0, s.Z)(e, 'bidRequests.0.schain');
                  o && (0, a.N)(n, 'source.ext.schain', o);
                }
              },
            }),
            (0, o.z)('schain');
        },
        26372: function (n, i, e) {
          e.d(i, {
            DZ: function () {
              return c;
            },
            Px: function () {
              return s;
            },
            TP: function () {
              return f;
            },
            YC: function () {
              return a;
            },
            Z: function () {
              return r;
            },
            f8: function () {
              return l;
            },
            fP: function () {
              return b;
            },
            gm: function () {
              return o;
            },
            md: function () {
              return u;
            },
          });
          var o = ['request', 'imp', 'bidResponse', 'response'],
            t = ['default', 'pbs'],
            r = o[0],
            c = o[1],
            s = o[2],
            a = o[3],
            f = t[0],
            u = t[1],
            h = new Set(o);
          var d,
            g =
              ((d = {}),
              {
                registerOrtbProcessor: function (n) {
                  var i = n.type,
                    e = n.name,
                    t = n.fn,
                    r = n.priority,
                    c = void 0 === r ? 0 : r,
                    s = n.dialects,
                    a = void 0 === s ? [f] : s;
                  if (!h.has(i))
                    throw new Error(
                      'ORTB processor type must be one of: '.concat(
                        o.join(', '),
                      ),
                    );
                  a.forEach(function (n) {
                    d.hasOwnProperty(n) || (d[n] = {}),
                      d[n].hasOwnProperty(i) || (d[n][i] = {}),
                      (d[n][i][e] = { priority: c, fn: t });
                  });
                },
                getProcessors: function (n) {
                  return d[n] || {};
                },
              }),
            l = g.registerOrtbProcessor,
            b = g.getProcessors;
        },
      },
      function (n) {
        var i;
        (i = 28689), n((n.s = i));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [92972],
      {
        54834: function (o, e, n) {
          var t = n(71002),
            r = n(78640),
            i = n(64358),
            d = n(92797),
            a = n(34516),
            u = n(15164),
            c = n(9633),
            l = n(81694),
            f = (0, u.df)({ moduleType: c.y2, moduleName: 'sharedId' }),
            s = 'cookie',
            m = 'html5',
            g = '_pubcid_optout',
            p = 'PublisherCommonId';
          function v(o, e) {
            if (e === s) return f.getCookie(o);
            if (e === m && f.hasLocalStorage()) {
              var n = f.getDataFromLocalStorage(''.concat(o, '_exp'));
              if (!n) return f.getDataFromLocalStorage(o);
              if (new Date(n).getTime() - Date.now() > 0)
                return f.getDataFromLocalStorage(o);
            }
          }
          function I(o, e) {
            return function (n, t) {
              e
                ? b(e, o, function () {
                    n(t() || o);
                  })()
                : n(o);
            };
          }
          function b(o) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (o) {
              var t = (0, i.parseUrl)(o);
              t.search.id = encodeURIComponent('pubcid:' + e);
              var r = (0, i.buildUrl)(t);
              return function () {
                (0, i.triggerPixel)(r, n);
              };
            }
          }
          function h() {
            return !!(
              (f.cookiesAreEnabled() && v(g, s)) ||
              (f.hasLocalStorage() && v(g, m))
            );
          }
          var C = {
            name: 'sharedId',
            aliasName: 'pubCommonId',
            gvlid: a.$P,
            decode: function (o, e) {
              if (!h())
                return (
                  (0, i.logInfo)(' Decoded value PubCommonId ' + o),
                  { pubcid: o }
                );
              (0, i.logInfo)('PubCommonId decode: Has opted-out');
            },
            getId: function () {
              var o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = arguments.length > 2 ? arguments[2] : void 0;
              if (h()) (0, i.logInfo)('PubCommonId: Has opted-out');
              else {
                var n = a.VP.getCoppa();
                if (!n) {
                  var r = o.params,
                    d = (r = void 0 === r ? {} : r).create,
                    u = void 0 === d || d,
                    c = r.pixelUrl,
                    l = e;
                  if (!l) {
                    try {
                      'object' === (0, t.Z)(window[p]) &&
                        (l = window[p].getId());
                    } catch (o) {}
                    l ||
                      (l =
                        u && (0, i.hasDeviceAccess)()
                          ? (0, i.generateUUID)()
                          : void 0);
                  }
                  return { id: l, callback: I(l, c) };
                }
                (0, i.logInfo)(
                  'PubCommonId: IDs not provided for coppa requests, exiting PubCommonId',
                );
              }
            },
            extendId: function () {
              var o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = arguments.length > 2 ? arguments[2] : void 0;
              if (h())
                return (
                  (0, i.logInfo)('PubCommonId: Has opted-out'), { id: void 0 }
                );
              var n = a.VP.getCoppa();
              if (n)
                (0, i.logInfo)(
                  'PubCommonId: IDs not provided for coppa requests, exiting PubCommonId',
                );
              else {
                var t = o.params,
                  r = (t = void 0 === t ? {} : t).extend,
                  d = void 0 !== r && r,
                  u = t.pixelUrl;
                if (d) {
                  if (u) {
                    var c = b(u, e);
                    return { callback: c };
                  }
                  return { id: e };
                }
              }
            },
            domainOverride: (0, l.U)(f, 'sharedId'),
            eids: { pubcid: { source: 'pubcid.org', atype: 1 } },
          };
          (0, d.Bx)('userId', C), (0, r.z)('sharedIdSystem');
        },
      },
      function (o) {
        o.O(0, [57748], function () {
          return (e = 54834), o((o.s = e));
          var e;
        });
        o.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [34579],
      {
        98709: function (r, e, t) {
          var n = t(78640),
            i = t(64358),
            o = t(48928),
            d = t(92797),
            u = 'unifiedId',
            a = {
              name: u,
              gvlid: 21,
              decode: function (r) {
                return r && 'string' == typeof r.TDID
                  ? { tdid: r.TDID }
                  : void 0;
              },
              getId: function (r) {
                var e = (r && r.params) || {};
                if (
                  e &&
                  ('string' == typeof e.partner || 'string' == typeof e.url)
                ) {
                  var t =
                    e.url ||
                    'https://match.adsrvr.org/track/rid?ttd_pid='.concat(
                      e.partner,
                      '&fmt=json',
                    );
                  return {
                    callback: function (r) {
                      var e = {
                        success: function (e) {
                          var t;
                          if (e)
                            try {
                              t = JSON.parse(e);
                            } catch (r) {
                              (0, i.logError)(r);
                            }
                          r(t);
                        },
                        error: function (e) {
                          (0, i.logError)(
                            ''.concat(u, ': ID fetch encountered an error'),
                            e,
                          ),
                            r();
                        },
                      };
                      (0, o.hj)(t, e, void 0, {
                        method: 'GET',
                        withCredentials: !0,
                      });
                    },
                  };
                }
                (0, i.logError)(
                  'User ID - unifiedId submodule requires either partner or url to be defined',
                );
              },
              eids: {
                tdid: {
                  source: 'adserver.org',
                  atype: 1,
                  getUidExt: function () {
                    return { rtiPartner: 'TDID' };
                  },
                },
              },
            };
          (0, d.Bx)('userId', a), (0, n.z)('unifiedIdSystem');
        },
      },
      function (r) {
        var e;
        (e = 98709), r((r.s = e));
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [9215],
      {
        82547: function (e, n, r) {
          var t = r(89062),
            o = r(71002),
            i = r(93324),
            a = r(4942),
            u = r(78640),
            c = r(34614),
            s = r(3193),
            f = r(52021),
            l = r(34516),
            d = r(86104),
            g = r(5644),
            m = r(92797),
            v = r(64358),
            b = r(20265),
            h = new Map();
          function p(e, n) {
            var r = h.get(n);
            if (r && e) {
              var t = {};
              t.source = (0, v.isFn)(r.getSource) ? r.getSource(e) : r.source;
              var o = (0, v.isFn)(r.getValue) ? r.getValue(e) : e;
              if ((0, v.isStr)(o)) {
                var i = { id: o, atype: r.atype };
                if ((0, v.isFn)(r.getUidExt)) {
                  var a = r.getUidExt(e);
                  a && (i.ext = a);
                }
                if (((t.uids = [i]), (0, v.isFn)(r.getEidExt))) {
                  var u = r.getEidExt(e);
                  u && (t.ext = u);
                }
                return t;
              }
            }
            return null;
          }
          function y(e) {
            var n = [],
              r = function (r) {
                if (e.hasOwnProperty(r))
                  if ('pubProvidedId' === r) n = n.concat(e.pubProvidedId);
                  else if (Array.isArray(e[r]))
                    e[r].forEach(function (e, t, o) {
                      var i = p(e, r);
                      i && n.push(i);
                    });
                  else {
                    var t = p(e[r], r);
                    t && n.push(t);
                  }
              };
            for (var t in e) r(t);
            return n;
          }
          var I,
            w,
            E,
            D,
            S,
            O,
            P = r(15164),
            j = r(96475),
            k = r(7563),
            A = r(68792),
            C = r(26372),
            N = r(99128),
            T = r(38196),
            Z = r(9633),
            U = r(50571),
            x = r(74947),
            F = r(10286),
            R = 'User ID',
            _ = P.c$,
            L = P.Dp,
            q = '_pbjs_id_optout',
            G = (0, P.eA)('userId'),
            M = { isAllowed: U.xD },
            B = !1,
            W = [],
            J = [],
            z = {},
            V = [],
            Y = function () {
              return null == O && (O = (0, N.V6)()), O;
            };
          function $(e) {
            return Y()
              .fork()
              .renameWith(function (n) {
                return [
                  'userId.mod.'.concat(n),
                  'userId.mods.'.concat(e, '.').concat(n),
                ];
              });
          }
          function H(e, n) {
            n = n || e.storageMgr;
            var r =
                'function' == typeof e.submodule.domainOverride
                  ? e.submodule.domainOverride()
                  : null,
              t = e.config.storage.name;
            return function (e, o, i) {
              n.setCookie(t + (e || ''), o, i, 'Lax', r);
            };
          }
          function K(e, n) {
            var r = e.config.storage,
              t = e.storageMgr;
            try {
              var o = new Date(Date.now() + 864e5 * r.expires).toUTCString(),
                i = (0, v.isPlainObject)(n) ? JSON.stringify(n) : n;
              if (r.type === _) {
                var a = H(e);
                a(null, i, o),
                  a('_cst', ye(), o),
                  'number' == typeof r.refreshInSeconds &&
                    a('_last', new Date().toUTCString(), o);
              } else
                r.type === L &&
                  (t.setDataInLocalStorage(''.concat(r.name, '_exp'), o),
                  t.setDataInLocalStorage(''.concat(r.name, '_cst'), ye()),
                  t.setDataInLocalStorage(r.name, encodeURIComponent(i)),
                  'number' == typeof r.refreshInSeconds &&
                    t.setDataInLocalStorage(
                      ''.concat(r.name, '_last'),
                      new Date().toUTCString(),
                    ));
            } catch (e) {
              (0, v.logError)(e);
            }
          }
          function Q(e) {
            var n, r, t, o;
            switch (
              null === (n = e.config) ||
              void 0 === n ||
              null === (r = n.storage) ||
              void 0 === r
                ? void 0
                : r.type
            ) {
              case _:
                var i = H(e, G),
                  a = new Date(Date.now() - 864e5).toUTCString();
                (t = function (e) {
                  return i(e, '', a);
                }),
                  (o = ['', '_last', '_cst']);
                break;
              case L:
                (t = function (n) {
                  return G.removeDataFromLocalStorage(
                    e.config.storage.name + n,
                  );
                }),
                  (o = ['', '_last', '_exp', '_cst']);
            }
            t &&
              o.forEach(function (e) {
                try {
                  t(e);
                } catch (e) {
                  (0, v.logError)(e);
                }
              });
          }
          function X(e) {
            var n = (0, v.getPrebidInternal)().setEidPermissions;
            'function' == typeof n &&
              (0, v.isArray)(e) &&
              n(
                (function (e) {
                  var n = [];
                  return (
                    e
                      .filter(function (e) {
                        return (
                          (0, v.isPlainObject)(e.idObj) &&
                          Object.keys(e.idObj).length
                        );
                      })
                      .forEach(function (e) {
                        Object.keys(e.idObj).forEach(function (r) {
                          var t = h.get(r) || {};
                          (0, b.Z)(e, 'config.bidders') &&
                            Array.isArray(e.config.bidders) &&
                            t.source &&
                            n.push({
                              source: t.source,
                              bidders: e.config.bidders,
                            });
                        });
                      }),
                    n
                  );
                })(e),
              );
          }
          function ee(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0,
              t = e.storageMgr,
              o = e.config.storage,
              i = r ? ''.concat(o.name, '_').concat(r) : o.name;
            try {
              if (o.type === _) n = t.getCookie(i);
              else if (o.type === L) {
                var a = t.getDataFromLocalStorage(''.concat(o.name, '_exp'));
                '' === a
                  ? (n = t.getDataFromLocalStorage(i))
                  : a &&
                    new Date(a).getTime() - Date.now() > 0 &&
                    (n = decodeURIComponent(t.getDataFromLocalStorage(i)));
              }
              'string' == typeof n &&
                '{' === n.trim().charAt(0) &&
                (n = JSON.parse(n));
            } catch (e) {
              (0, v.logError)(e);
            }
            return n;
          }
          function ne(e, n, r) {
            n = Y().fork().startTiming('userId.callbacks.total').stopBefore(n);
            var t = (0, v.delayExecution)(function () {
              clearTimeout(undefined), n();
            }, e.length);
            e.forEach(function (e) {
              var n = $(e.submodule.name).startTiming('callback').stopBefore(t);
              try {
                e.callback(function (t) {
                  t
                    ? (e.config.storage && K(e, t),
                      (e.idObj = e.submodule.decode(t, e.config)),
                      we(re(r)))
                    : (0, v.logInfo)(
                        ''
                          .concat(R, ': ')
                          .concat(
                            e.submodule.name,
                            ' - request id responded with an empty value',
                          ),
                      ),
                    n();
                }, ee.bind(null, e));
              } catch (r) {
                (0, v.logError)(
                  "Error in userID module '".concat(e.submodule.name, "':"),
                  r,
                ),
                  n();
              }
              e.callback = void 0;
            });
          }
          function re(e) {
            return Array.isArray(e) && e.length ? oe(e) : {};
          }
          function te(e, n, r) {
            return Object.fromEntries(
              Object.entries(
                e.reduce(function (e, t) {
                  var o = n(t);
                  return (
                    o &&
                      Object.keys(o).forEach(function (n) {
                        var i,
                          a =
                            null === (i = z[n]) || void 0 === i
                              ? void 0
                              : i.indexOf(r(t)),
                          u = {
                            priority: (0, v.isNumber)(a) ? a : -1,
                            value: o[n],
                          };
                        if (e[n]) {
                          var c = u.priority > e[n].priority ? u : e[n];
                          e[n] = c;
                        } else e[n] = u;
                      }),
                    e
                  );
                }, {}),
              ).map(function (e) {
                var n = (0, i.Z)(e, 2);
                return [n[0], n[1].value];
              }),
            );
          }
          function oe(e) {
            return te(
              e.filter(function (e) {
                return (
                  (0, v.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                );
              }),
              function (e) {
                return e.idObj;
              },
              function (e) {
                return e.submodule.name;
              },
            );
          }
          function ie(e, n) {
            [e].some(function (e) {
              return !Array.isArray(e) || !e.length;
            }) ||
              e.forEach(function (e) {
                e.bids &&
                  (0, v.isArray)(e.bids) &&
                  e.bids.forEach(function (e) {
                    var r = (function (e, n) {
                      return Array.isArray(e) && e.length && n
                        ? oe(
                            e.filter(function (e) {
                              return (
                                !e.config.bidders ||
                                !(0, v.isArray)(e.config.bidders) ||
                                (0, c.q9)(e.config.bidders, n)
                              );
                            }),
                          )
                        : {};
                    })(n, e.bidder);
                    Object.keys(r).length &&
                      ((e.userId = r), (e.userIdAsEids = y(r)));
                  });
              });
          }
          var ae,
            ue = {};
          function ce() {
            var e,
              n,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = r.delay,
              o = void 0 === t ? A.Z.timeout : t,
              i = (0, A.P)(),
              a = (0, A.P)(),
              u = !1;
            function c(r) {
              return (
                (n = Y().fork()),
                null != e && e.reject(ue),
                (e = (0, A.P)()),
                A.Z.race([r, e.promise]).finally(n.startTiming('userId.total'))
              );
            }
            var s = I,
              d = W;
            function b(e) {
              return function () {
                if (s === I && d === W) return e.apply(void 0, arguments);
              };
            }
            function h() {
              return l.NO.promise.finally(n.startTiming('userId.init.consent'));
            }
            var p = c(
              A.Z.all([m.Cd, i.promise])
                .then(h)
                .then(
                  b(function () {
                    Ee(s, d);
                  }),
                )
                .then(function () {
                  return a.promise.finally(
                    n.startTiming('userId.callbacks.pending'),
                  );
                })
                .then(
                  b(function () {
                    var e = s.filter(function (e) {
                      return (0, v.isFn)(e.callback);
                    });
                    if (e.length)
                      return new A.Z(function (n) {
                        return ne(e, n, s);
                      });
                  }),
                ),
            );
            return function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.refresh,
                r = void 0 !== n && n,
                t = e.submoduleNames,
                l = void 0 === t ? null : t,
                m = e.ready,
                v = void 0 !== m && m;
              return (
                v &&
                  !u &&
                  ((u = !0),
                  i.resolve(),
                  E > 0
                    ? a.resolve()
                    : f.on(g.FP.AUCTION_END, function e() {
                        f.off(g.FP.AUCTION_END, e), o(w).then(a.resolve);
                      })),
                r &&
                  u &&
                  (p = c(
                    p
                      .catch(function () {
                        return null;
                      })
                      .then(h)
                      .then(
                        b(function () {
                          var e = Ee(
                            s,
                            d.filter(function (e) {
                              return null == l || l.includes(e.submodule.name);
                            }),
                            !0,
                          ).filter(function (e) {
                            return null != e.callback;
                          });
                          if (e.length)
                            return new A.Z(function (n) {
                              return ne(e, n, s);
                            });
                        }),
                      ),
                  )),
                p
              );
            };
          }
          function se() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : de() || [],
              n =
                D &&
                e.find(function (e) {
                  return e.source === D;
                });
            if (n && 'string' == typeof (0, b.Z)(n, 'uids.0.id')) {
              var r = n.uids[0].id.replace(/[\W_]/g, '');
              if (r.length >= 32 && r.length <= 150) return r;
              (0, v.logWarn)(
                'User ID - Googletag Publisher Provided ID for '
                  .concat(D, ' is not between 32 and 150 characters - ')
                  .concat(r),
              );
            }
          }
          var fe = (0, N.g3)('userId', function (e, n) {
            var r = this,
              t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = t.delay,
              i = void 0 === o ? A.Z.timeout : o,
              a = t.getIds,
              c = void 0 === a ? pe : a;
            A.Z.race([
              c().catch(function () {
                return null;
              }),
              i(E),
            ]).then(function () {
              ie(n.adUnits || (0, u.R)().adUnits, I),
                Y().join((0, N.Bf)(n.metrics), {
                  propagate: !1,
                  includeGroups: !0,
                }),
                e.call(r, n);
            });
          });
          function le() {
            return re(I);
          }
          function de() {
            return y(le());
          }
          function ge(e) {
            return y(
              (function (e, n) {
                if (!Array.isArray(e) || !e.length) return {};
                var r = oe(e),
                  t = Object.keys(r).find(function (e) {
                    var r = h.get(e);
                    return (
                      (null == r ? void 0 : r.source) === n ||
                      ((0, v.isFn)(null == r ? void 0 : r.getSource) &&
                        r.getSource() === n)
                    );
                  });
                return t ? (0, a.Z)({}, t, r[t]) : [];
              })(I, e),
            )[0];
          }
          function me(e, n, r) {
            return ae().then(function () {
              var t = {};
              if ((0, v.isFn)(r)) {
                (0, v.logInfo)(
                  ''
                    .concat(
                      R,
                      ' - Getting encrypted signal from custom function : ',
                    )
                    .concat(r.name, ' & source : ')
                    .concat(e, ' '),
                );
                var o = r(e);
                t[e] = o ? ve(o) : null;
              } else {
                var i = ge(e);
                (0, v.logInfo)(
                  ''
                    .concat(R, ' - Getting encrypted signal for eids :')
                    .concat(JSON.stringify(i)),
                ),
                  (0, v.isEmpty)(i) ||
                    (t[i.source] = !0 === n ? ve(i) : i.uids[0].id);
              }
              return (
                (0, v.logInfo)(
                  ''.concat(R, ' - Fetching encrypted eids: ').concat(t[e]),
                ),
                t[e]
              );
            });
          }
          function ve(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              r = '';
            if (1 === n)
              r =
                'object' === (0, o.Z)(e)
                  ? window.btoa(JSON.stringify(e))
                  : window.btoa(e);
            return ''.concat(n, '||').concat(r);
          }
          function be() {
            if ((0, v.isGptPubadsDefined)()) {
              window.googletag.secureSignalProviders =
                window.googletag.secureSignalProviders || [];
              var e = s.vc.getConfig('userSync.encryptedSignalSources');
              if (e) {
                var n = e.registerDelay || 0;
                setTimeout(function () {
                  e.sources &&
                    e.sources.forEach(function (e) {
                      var n = e.source,
                        r = e.encrypt,
                        t = e.customFunc;
                      n.forEach(function (e) {
                        window.googletag.secureSignalProviders.push({
                          id: e,
                          collectorFunction: function () {
                            return me(e, r, t);
                          },
                        });
                      });
                    });
                }, n);
              } else
                (0, v.logWarn)(
                  ''.concat(
                    R,
                    ' - ESP : encryptedSignalSources config not defined under userSync Object',
                  ),
                );
            }
          }
          function he() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.submoduleNames,
              r = arguments.length > 1 ? arguments[1] : void 0;
            return ae({ refresh: !0, submoduleNames: n }).then(function () {
              return r && (0, v.isFn)(r) && r(), le();
            });
          }
          function pe() {
            return ae().then(
              function () {
                return le();
              },
              function (e) {
                return e === ue
                  ? Promise.resolve().then(pe)
                  : ((0, v.logError)('Error initializing userId', e),
                    A.Z.reject(e));
              },
            );
          }
          function ye() {
            for (var e = Number(l.NO.hash), n = []; e > 0; )
              n.push(String.fromCharCode(255 & e)), (e >>>= 8);
            return btoa(n.join());
          }
          function Ie(e, n, r) {
            var t = l.rp.getConsentData();
            if (e.config.storage) {
              var o,
                i = ee(e),
                a = !1;
              if ('number' == typeof e.config.storage.refreshInSeconds) {
                var u = new Date(ee(e, 'last'));
                a =
                  u &&
                  Date.now() - u.getTime() >
                    1e3 * e.config.storage.refreshInSeconds;
              }
              !i ||
              a ||
              n ||
              (function (e) {
                var n = ee(e, 'cst');
                return !n || n !== ye();
              })(e)
                ? (o = e.submodule.getId(e.config, t, i))
                : 'function' == typeof e.submodule.extendId &&
                  (o = e.submodule.extendId(e.config, t, i)),
                (0, v.isPlainObject)(o) &&
                  (o.id && (K(e, o.id), (i = o.id)),
                  'function' == typeof o.callback && (e.callback = o.callback)),
                i && (e.idObj = e.submodule.decode(i, e.config));
            } else if (e.config.value) e.idObj = e.config.value;
            else {
              var c = e.submodule.getId(e.config, t, void 0);
              (0, v.isPlainObject)(c) &&
                ('function' == typeof c.callback && (e.callback = c.callback),
                c.id && (e.idObj = e.submodule.decode(c.id, e.config)));
            }
            we(re(r));
          }
          function we() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : le();
            if (e && D) {
              var n = se(y(e));
              n &&
                ((0, v.isGptPubadsDefined)()
                  ? window.googletag.pubads().setPublisherProvidedId(n)
                  : ((window.googletag = window.googletag || {}),
                    (window.googletag.cmd = window.googletag.cmd || []),
                    window.googletag.cmd.push(function () {
                      window.googletag.pubads().setPublisherProvidedId(n);
                    })));
            }
          }
          function Ee(e, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return Y()
              .fork()
              .measureTime('userId.init.modules', function () {
                if (!n.length) return [];
                if (
                  !(n = n.filter(function (e) {
                    return (
                      (!e.config.storage || Oe(e)) &&
                      M.isAllowed(x.EL, (0, F.T)(Z.y2, e.config.name))
                    );
                  })).length
                )
                  return (
                    (0, v.logWarn)(''.concat(R, ' - no ID module configured')),
                    []
                  );
                var t = n.reduce(function (e, t) {
                  return $(t.submodule.name).measureTime('init', function () {
                    try {
                      Ie(t, r, n), e.push(t);
                    } catch (e) {
                      (0,
                      v.logError)("Error in userID module '".concat(t.submodule.name, "':"), e);
                    }
                    return e;
                  });
                }, []);
                return t.length && X(t), t.forEach(De.bind(null, e)), t;
              });
          }
          function De(e, n) {
            for (var r = !1, t = 0; t < e.length; t++)
              if (
                n.config.name.toLowerCase() === e[t].config.name.toLowerCase()
              ) {
                (r = !0), (e[t] = n);
                break;
              }
            r || e.push(n);
          }
          var Se = new Set([L, _]);
          function Oe(e) {
            var n, r;
            switch (
              null === (n = e.config) ||
              void 0 === n ||
              null === (r = n.storage) ||
              void 0 === r
                ? void 0
                : r.type
            ) {
              case L:
                if (e.storageMgr.localStorageIsEnabled())
                  return (
                    !G.getDataFromLocalStorage(q) ||
                    ((0, v.logInfo)(
                      ''.concat(
                        R,
                        ' - opt-out localStorage found, storage disabled',
                      ),
                    ),
                    !1)
                  );
                break;
              case _:
                if (e.storageMgr.cookiesAreEnabled())
                  return (
                    !G.getCookie(q) ||
                    ((0, v.logInfo)(
                      ''.concat(R, ' - opt-out cookie found, storage disabled'),
                    ),
                    !1)
                  );
            }
            return !1;
          }
          function Pe(e) {
            h.clear(),
              Object.entries(
                te(
                  e,
                  function (e) {
                    return e.eids;
                  },
                  function (e) {
                    return e.name;
                  },
                ),
              ).forEach(function (e) {
                var n = (0, i.Z)(e, 2),
                  r = n[0],
                  t = n[1];
                return h.set(r, t);
              });
          }
          function je() {
            Pe(V);
            var e = (function (e, n) {
              return Array.isArray(e)
                ? e.reduce(function (e, n) {
                    return (
                      !n ||
                        (0, v.isEmptyStr)(n.name) ||
                        ((n.storage &&
                          !(0, v.isEmptyStr)(n.storage.type) &&
                          !(0, v.isEmptyStr)(n.storage.name) &&
                          Se.has(n.storage.type)) ||
                        (0, v.isPlainObject)(n.value)
                          ? e.push(n)
                          : n.storage || n.value || e.push(n)),
                      e
                    );
                  }, [])
                : [];
            })(J);
            if (e.length) {
              var n = V.filter(function (e) {
                return !(0, c.sE)(W, function (n) {
                  return n.name === e.name;
                });
              });
              W.splice(0, W.length),
                n
                  .map(function (n) {
                    var r = (0, c.sE)(e, function (e) {
                      return (
                        e.name &&
                        (e.name.toLowerCase() === n.name.toLowerCase() ||
                          (n.aliasName &&
                            e.name.toLowerCase() === n.aliasName.toLowerCase()))
                      );
                    });
                    return (
                      r && n.name !== r.name && (r.name = n.name),
                      (n.findRootDomain = T.W),
                      r
                        ? {
                            submodule: n,
                            config: r,
                            callback: void 0,
                            idObj: void 0,
                            storageMgr: (0, P.df)({
                              moduleType: Z.y2,
                              moduleName: r.name,
                            }),
                          }
                        : null
                    );
                  })
                  .filter(function (e) {
                    return null !== e;
                  })
                  .forEach(function (e) {
                    return W.push(e);
                  }),
                !B &&
                  W.length &&
                  ((0, u.R)().requestBids.before(fe, 40),
                  d.ZP.callDataDeletionRequest.before(Ae),
                  k.G.after(function (e) {
                    return e(se());
                  }),
                  (0, v.logInfo)(
                    ''
                      .concat(R, ' - usersync config updated for ')
                      .concat(W.length, ' submodules: '),
                    W.map(function (e) {
                      return e.submodule.name;
                    }),
                  ),
                  (B = !0));
            }
          }
          function ke(e, n) {
            if (e) {
              var r = {},
                o = new Map(
                  n.map(function (e) {
                    return e.submodule.aliasName
                      ? [e.submodule.aliasName, e.submodule.name]
                      : [];
                  }),
                );
              Object.keys(e).forEach(function (n) {
                var i = (0, v.isArray)(e[n]) ? (0, t.Z)(e[n]).reverse() : [];
                r[n] = i.map(function (e) {
                  return o.has(e) ? o.get(e) : e;
                });
              }),
                (z = r);
            } else z = {};
          }
          function Ae(e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1;
              t < n;
              t++
            )
              r[t - 1] = arguments[t];
            (0, v.logInfo)(
              'UserID: received data deletion request; deleting all stored IDs...',
            ),
              W.forEach(function (e) {
                if ('function' == typeof e.submodule.onDataDeletionRequest)
                  try {
                    var n;
                    (n = e.submodule).onDataDeletionRequest.apply(
                      n,
                      [e.config, e.idObj].concat(r),
                    );
                  } catch (n) {
                    (0, v.logError)(
                      'Error calling onDataDeletionRequest for ID submodule '.concat(
                        e.submodule.name,
                      ),
                      n,
                    );
                  }
                Q(e);
              }),
              e.apply(this, r);
          }
          function Ce(e) {
            return function () {
              return Promise.resolve(e.apply(this, arguments));
            };
          }
          !(function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.delay,
              t = void 0 === r ? A.Z.timeout : r;
            (D = void 0),
              (W = []),
              (J = []),
              (B = !1),
              (I = []),
              (ae = ce({ delay: t })),
              null != S && S(),
              (V = []),
              (S = e.getConfig('userSync', function (e) {
                var n = e.userSync;
                n &&
                  ((D = n.ppid),
                  n.userIds &&
                    ((J = n.userIds),
                    (w = (0, v.isNumber)(n.syncDelay) ? n.syncDelay : 500),
                    (E = (0, v.isNumber)(n.auctionDelay) ? n.auctionDelay : 0),
                    je(),
                    ke(n.idPriority, W),
                    ae({ ready: !0 })));
              })),
              ((0, u.R)().getUserIds = le),
              ((0, u.R)().getUserIdsAsEids = de),
              ((0, u.R)().getEncryptedEidsForSource = Ce(me)),
              ((0, u.R)().registerSignalSources = be),
              ((0, u.R)().refreshUserIds = Ce(he)),
              ((0, u.R)().getUserIdsAsync = Ce(pe)),
              ((0, u.R)().getUserIdsAsEidBySource = ge);
          })(s.vc),
            (0, m.bA)('userId', function (e) {
              (0, c.sE)(V, function (n) {
                return n.name === e.name;
              }) ||
                (V.push(e),
                l.qh.register(Z.y2, e.name, e.gvlid),
                je(),
                ae({ refresh: !0, submoduleNames: [e.name] }));
            }),
            (0, C.f8)({
              type: C.Z,
              name: 'userExtEids',
              fn: function (e, n, r) {
                var t = (0, b.Z)(r, 'bidRequests.0.userIdAsEids');
                t &&
                  Object.keys(t).length > 0 &&
                  (0, j.N)(e, 'user.ext.eids', t);
              },
            }),
            (0, u.z)('userId');
        },
        7563: function (e, n, r) {
          r.d(n, {
            G: function () {
              return t;
            },
          });
          var t = (0, r(92797).z3)('sync', function () {});
        },
        26372: function (e, n, r) {
          r.d(n, {
            DZ: function () {
              return a;
            },
            Px: function () {
              return u;
            },
            TP: function () {
              return s;
            },
            YC: function () {
              return c;
            },
            Z: function () {
              return i;
            },
            f8: function () {
              return m;
            },
            fP: function () {
              return v;
            },
            gm: function () {
              return t;
            },
            md: function () {
              return f;
            },
          });
          var t = ['request', 'imp', 'bidResponse', 'response'],
            o = ['default', 'pbs'],
            i = t[0],
            a = t[1],
            u = t[2],
            c = t[3],
            s = o[0],
            f = o[1],
            l = new Set(t);
          var d,
            g =
              ((d = {}),
              {
                registerOrtbProcessor: function (e) {
                  var n = e.type,
                    r = e.name,
                    o = e.fn,
                    i = e.priority,
                    a = void 0 === i ? 0 : i,
                    u = e.dialects,
                    c = void 0 === u ? [s] : u;
                  if (!l.has(n))
                    throw new Error(
                      'ORTB processor type must be one of: '.concat(
                        t.join(', '),
                      ),
                    );
                  c.forEach(function (e) {
                    d.hasOwnProperty(e) || (d[e] = {}),
                      d[e].hasOwnProperty(n) || (d[e][n] = {}),
                      (d[e][n][r] = { priority: a, fn: o });
                  });
                },
                getProcessors: function (e) {
                  return d[e] || {};
                },
              }),
            m = g.registerOrtbProcessor,
            v = g.getProcessors;
        },
      },
      function (e) {
        var n;
        (n = 82547), e((e.s = n));
      },
    ]);
  })(),
    pbjs.processQueue();
