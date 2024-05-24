/t},9728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class baseTabs extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{tablist:'[role="tablist"]',tabTitle:".elementor-tab-title",tabContent:".elementor-tab-content"},classes:{active:"elementor-active"},showTabFn:"show",hideTabFn:"hide",toggleSelf:!0,hidePrevious:!0,autoExpand:!0,keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?1:-1,ArrowUp:-1,ArrowRight:elementorFrontendConfig.is_rtl?-1:1,ArrowDown:1}}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent)}}activateDefaultTab(){const e=this.getSettings();if(!e.autoExpand||"editor"===e.autoExpand&&!this.isEdit)return;const t=this.getEditSettings("activeItemIndex")||1,s={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(s)}handleKeyboardNavigation(e){const t=e.currentTarget,s=jQuery(t.closest(this.getSettings("selectors").tablist)),i=s.find(this.getSettings("selectors").tabTitle),n="vertical"===s.attr("aria-orientation");switch(e.key){case"ArrowLeft":case"ArrowRight":if(n)return;break;case"ArrowUp":case"ArrowDown":if(!n)return;e.preventDefault();break;case"Home":return e.preventDefault(),void i.first().trigger("focus");case"End":return e.preventDefault(),void i.last().trigger("focus");default:return}const o=t.getAttribute("data-tab")-1,r=this.getSettings("keyDirection")[e.key],a=i[o+r];a?a.focus():-1===o+r?i.last().trigger("focus"):i.first().trigger("focus")}deactivateActiveTab(e){const t=this.getSettings(),s=t.classes.active,i=e?'[data-tab="'+e+'"]':"."+s,n=this.elements.$tabTitles.filter(i),o=this.elements.$tabContents.filter(i);n.add(o).removeClass(s),n.attr({tabindex:"-1","aria-selected":"false","aria-expanded":"false"}),o[t.hideTabFn](),o.attr("hidden","hidden")}activateTab(e){const t=this.getSettings(),s=t.classes.active,i=this.elements.$tabTitles.filter('[data-tab="'+e+'"]'),n=this.elements.$tabContents.filter('[data-tab="'+e+'"]'),o="show"===t.showTabFn?0:400;i.add(n).addClass(s),i.attr({tabindex:"0","aria-selected":"true","aria-expanded":"true"}),n[t.showTabFn](o,(()=>elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"))),n.removeAttr("hidden")}isActiveTab(e){return this.elements.$tabTitles.filter('[data-tab="'+e+'"]').hasClass(this.getSettings("classes.active"))}bindEvents(){this.elements.$tabTitles.on({keydown:e=>{jQuery(e.target).is("a")&&"Enter"===e.key&&e.preventDefault(),["End","Home","ArrowUp","ArrowDown"].includes(e.key)&&this.handleKeyboardNavigation(e)},keyup:e=>{switch(e.code){case"ArrowLeft":case"ArrowRight":this.handleKeyboardNavigation(e);break;case"Enter":case"Space":e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"))}},click:e=>{e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"))}})}onInit(){super.onInit(...arguments),this.activateDefaultTab()}onEditSettingsChange(e){"activeItemIndex"===e&&this.activateDefaultTab()}changeActiveTab(e){const t=this.isActiveTab(e),s=this.getSettings();!s.toggleSelf&&t||!s.hidePrevious||this.deactivateActiveTab(),!s.hidePrevious&&t&&this.deactivateActiveTab(e),t||this.activateTab(e)}}t.default=baseTabs},7884:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Counter extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{counterNumber:".elementor-counter-number"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$counterNumber:this.$element.find(e.counterNumber)}}onInit(){super.onInit(),this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{if(e.isInViewport){this.intersectionObserver.unobserve(this.elements.$counterNumber[0]);const e=this.elements.$counterNumber.data(),t=e.toValue.toString().match(/\.(.*)/);t&&(e.rounding=t[1].length),this.elements.$counterNumber.numerator(e)}}}),this.intersectionObserver.observe(this.elements.$counterNumber[0])}}t.default=Counter},5914:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class ImageCarousel extends elementorModules.frontend.handlers.CarouselBase{getDefaultSettings(){const e=super.getDefaultSettings();return e.selectors.carousel=".elementor-image-carousel-wrapper",e}}t.default=ImageCarousel},1351:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Progress extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{progressNumber:".elementor-progress-bar"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$progressNumber:this.$element.find(e.progressNumber)}}onInit(){super.onInit(),elementorFrontend.waypoint(this.elements.$progressNumber,(()=>{const e=this.elements.$progressNumber;e.css("width",e.data("max")+"%")}))}}t.default=Progress},9459:(e,t,s)=>{"use strict";var i=s(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(9728));class Tabs extends n.default{getDefaultSettings(){return{...super.getDefaultSettings(),toggleSelf:!1}}}t.default=Tabs},1327:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class TextEditor extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{paragraph:"p:first"},classes:{dropCap:"elementor-drop-cap",dropCapLetter:"elementor-drop-cap-letter"}}}getDefaultElements(){const e=this.getSettings("selectors"),t=this.getSettings("classes"),s=jQuery("<span>",{class:t.dropCap}),i=jQuery("<span>",{class:t.dropCapLetter});return s.append(i),{$paragraph:this.$element.find(e.paragraph),$dropCap:s,$dropCapLetter:i}}wrapDropCap(){if(!this.getElementSettings("drop_cap"))return void(this.dropCapLetter&&(this.elements.$dropCap.remove(),this.elements.$paragraph.prepend(this.dropCapLetter),this.dropCapLetter=""));const e=this.elements.$paragraph;if(!e.length)return;const t=e.html().replace(/&nbsp;/g," "),s=t.match(/^ *([^ ] ?)/);if(!s)return;const i=s[1],n=i.trim();if("<"===n)return;this.dropCapLetter=i,this.elements.$dropCapLetter.text(n);const o=t.slice(i.length).replace(/^ */,(e=>new Array(e.length+1).join("&nbsp;")));e.html(o).prepend(this.elements.$dropCap)}onInit(){super.onInit(...arguments),this.wrapDropCap()}onElementChange(e){"drop_cap"===e&&this.wrapDropCap()}}t.default=TextEditor},2:(e,t,s)=>{"use strict";var i=s(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(9728));class Toggle extends n.default{getDefaultSettings(){return{...super.getDefaultSettings(),showTabFn:"slideDown",hideTabFn:"slideUp",hidePrevious:!1,autoExpand:"editor"}}}t.default=Toggle},5363:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Video extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{imageOverlay:".elementor-custom-embed-image-overlay",video:".elementor-video",videoIframe:".elementor-video-iframe",playIcon:".elementor-custom-embed-play"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$imageOverlay:this.$element.find(e.imageOverlay),$video:this.$element.find(e.video),$videoIframe:this.$element.find(e.videoIframe),$playIcon:this.$element.find(e.playIcon)}}handleVideo(){this.getElementSettings("lightbox")||("youtube"===this.getElementSettings("video_type")?this.apiProvider.onApiReady((e=>{this.elements.$imageOverlay.remove(),this.prepareYTVideo(e,!0)})):(this.elements.$imageOverlay.remove(),this.playVideo()))}playVideo(){if(this.elements.$video.length)return void(this.youtubePlayer?this.youtubePlayer.playVideo():this.elements.$video[0].play());const e=this.elements.$videoIframe,t=e.data("lazy-load");t&&e.attr("src",t),e[0].src=this.apiProvider.getAutoplayURL(e[0].src)}async animateVideo(){(await elementorFrontend.utils.lightbox).setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))}async hideLightbox(){(await elementorFrontend.utils.lightbox).getModal().hide()}prepareYTVideo(e,t){const s=this.getElementSettings(),i={videoId:this.videoID,events:{onReady:()=>{s.mute&&this.youtubePlayer.mute(),(s.autoplay||t)&&this.youtubePlayer.playVideo()},onStateChange:t=>{t.data===e.PlayerState.ENDED&&s.loop&&this.youtubePlayer.seekTo(s.start||0)}},playerVars:{controls:s.controls?1:0,rel:s.rel?1:0,playsinline:s.play_on_mobile?1:0,modestbranding:s.modestbranding?1:0,autoplay:s.autoplay?1:0,start:s.start,end:s.end}};s.yt_privacy&&(i.host="https://www.youtube-nocookie.com",i.origin=window.location.hostname),this.youtubePlayer=new e.Player(this.elements.$video[0],i)}bindEvents(){this.elements.$imageOverlay.on("click",this.handleVideo.bind(this)),this.elements.$playIcon.on("keydown",(e=>{[13,32].includes(e.keyCode)&&this.handleVideo()}))}onInit(){super.onInit();const e=this.getElementSettings();if(elementorFrontend.utils[e.video_type]?this.apiProvider=elementorFrontend.utils[e.video_type]:this.apiProvider=elementorFrontend.utils.baseVideoLoader,"youtube"===e.video_type&&(this.videoID=this.apiProvider.getVideoIDFromURL(e.youtube_url),this.videoID&&(!e.show_image_overlay||!e.image_overlay.url)))return e.lazy_load?(this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport&&(this.intersectionObserver.unobserve(this.elements.$video.parent()[0]),this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))))}}),void this.intersectionObserver.observe(this.elements.$video.parent()[0])):void(elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading?this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))):setTimeout((()=>{this.apiProvider.onApiReady((e=>this.prepareYTVideo(e)))}),0))}onElementChange(e){if(0===e.indexOf("lightbox_content_animation"))return void this.animateVideo();const t=this.getElementSettings("lightbox");"lightbox"!==e||t||this.hideLightbox()}}t.default=Video},1210:(e,t,s)=>{"use strict";var i=s(3203),n=i(s(8470)),o=i(s(9269)),r=i(s(7884)),a=i(s(1351)),l=i(s(9459)),d=i(s(2)),c=i(s(5363)),h=i(s(5914)),u=i(s(1327)),m=i(s(7323)),p=i(s(32)),g=i(s(3896));elementorFrontend.elements.$window.on("elementor/frontend/init",(()=>{elementorFrontend.elementsHandler.elementsHandlers={"accordion.default":n.default,"alert.default":o.default,"counter.default":r.default,"progress.default":a.default,"tabs.default":l.default,"nested-tabs.default":m.default,"nested-accordion.default":p.default,"toggle.default":d.default,"video.default":c.default,"image-carousel.default":h.default,"text-editor.default":u.default},elementorFrontend.on("components:init",(()=>{delete elementorFrontend.utils.lightbox,elementorFrontend.utils.lightbox=new g.default}))}))},5626:(e,t,s)=>{"use strict";var i=s(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.zoomOutBold=t.zoomInBold=t.twitter=t.shareArrow=t.pinterest=t.loading=t.frameMinimize=t.frameExpand=t.facebook=t.downloadBold=t.close=t.chevronRight=t.chevronLeft=void 0;const n=new(i(s(4508)).default)("eicon"),o={get element(){return n.createSvgElement("chevron-left",{path:"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z",width:1e3,height:1e3})}};t.chevronLeft=o;const r={get element(){return n.createSvgElement("chevron-right",{path:"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z",width:1e3,height:1e3})}};t.chevronRight=r;const a={get element(){return n.createSvgElement("close",{path:"M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",width:1e3,height:1e3})}};t.close=a;const l={get element(){return n.createSvgElement("download-bold",{path:"M572 42H428C405 42 385 61 385 85V385H228C197 385 180 424 203 447L475 719C489 732 511 732 524 719L797 447C819 424 803 385 771 385H614V85C615 61 595 42 572 42ZM958 915V715C958 691 939 672 915 672H653L565 760C529 796 471 796 435 760L347 672H85C61 672 42 691 42 715V915C42 939 61 958 85 958H915C939 958 958 939 958 915ZM736 873C736 853 720 837 700 837 681 837 665 853 665 873 665 892 681 908 700 908 720 908 736 892 736 873ZM815 837C835 837 851 853 851 873 851 892 835 908 815 908 795 908 779 892 779 873 779 853 795 837 815 837Z",width:1e3,height:1e3})}};t.downloadBold=l;const d={get element(){return n.createSvgElement("facebook",{path:"M858 42H142C88 42 42 87 42 142V863C42 913 88 958 142 958H421V646H292V500H421V387C421 258 496 192 613 192 667 192 725 200 725 200V325H663C600 325 579 362 579 404V500H721L700 646H583V958H863C917 958 963 913 963 858V142C958 87 913 42 858 42L858 42Z",width:1e3,height:1e3})}};t.facebook=d;const c={get element(){return n.createSvgElement("frame-expand",{path:"M863 583C890 583 914 605 916 632L917 637V863L916 868C914 893 893 914 868 916L863 917H638L632 916C607 914 586 893 584 868L583 863 584 857C586 832 607 811 632 809L638 808H808V637L809 632C811 605 835 583 863 583ZM138 583C165 583 189 605 191 632L192 637V808H363C390 808 414 830 416 857L417 863C417 890 395 914 368 916L363 917H138C110 917 86 895 84 868L83 863V637C83 607 108 583 138 583ZM863 83C890 83 914 105 916 132L917 137V362C917 392 893 417 863 417 835 417 811 395 809 368L808 362V192H638C610 192 586 170 584 143L583 137C583 110 605 86 632 84L638 83H863ZM363 83L368 84C393 86 414 107 416 132L417 137 416 143C414 168 393 189 368 191L363 192H192V362L191 368C189 395 165 417 138 417S86 395 84 368L83 362V137L84 132C86 107 107 86 132 84L138 83H363Z",width:1e3,height:1e3})}};t.frameExpand=c;const h={get element(){return n.createSvgElement("frame-minimize",{path:"M363 583C392 583 413 604 417 633L417 637V863C417 892 392 917 363 917 333 917 313 896 308 867L308 863V692H138C108 692 88 671 83 642L83 637C83 608 104 587 133 583L138 583H363ZM638 583C608 583 588 604 583 633L583 637V863C583 892 608 917 638 917 667 917 688 896 692 867L692 863V692H863C892 692 913 671 917 642L917 637C917 608 896 587 867 583L863 583H638ZM363 417C392 417 413 396 417 367L417 362V137C417 108 392 83 363 83 333 83 313 104 308 133L308 137V308H138C108 308 88 329 83 358L83 362C83 392 104 412 133 417L138 417H363ZM638 417C608 417 588 396 583 367L583 362V137C583 108 608 83 638 83 667 83 688 104 692 133L692 137V308H863C892 308 913 329 917 358L917 362C917 392 896 412 867 417L863 417H638Z",width:1e3,height:1e3})}};t.frameMinimize=h;const u={get element(){return n.createSvgElement("loading",{path:"M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z",width:1e3,height:1e3})}};t.loading=u;const m={get element(){return n.createSvgElement("pinterest",{path:"M950 496C950 746 746 950 496 950 450 950 404 942 363 929 379 900 408 850 421 808 425 787 450 700 450 700 467 729 508 754 554 754 692 754 792 629 792 471 792 321 671 208 513 208 317 208 213 342 213 483 213 550 250 633 304 658 313 662 317 662 321 654 321 650 329 617 333 604 333 600 333 596 329 592 313 567 296 525 296 487 288 387 367 292 496 292 608 292 688 367 688 475 688 600 625 683 546 683 500 683 467 646 479 600 492 546 517 487 517 450 517 417 500 387 458 387 413 387 375 433 375 496 375 537 388 562 388 562S342 754 333 787C325 825 329 883 333 917 163 854 42 687 42 496 42 246 246 42 496 42S950 246 950 496Z",width:1e3,height:1e3})}};t.pinterest=m;const p={get element(){return n.createSvgElement("share-arrow",{path:"M946 383L667 133C642 112 604 129 604 162V292C238 296 71 637 42 812 238 587 363 521 604 517V658C604 692 642 708 667 687L946 442C963 425 963 400 946 383Z",width:1e3,height:1e3})}};t.shareArrow=p;const g={get element(){return n.createSvgElement("twitter",{path:"M863 312C863 321 863 329 863 337 863 587 675 871 329 871 221 871 125 842 42 787 58 787 71 792 88 792 175 792 254 762 321 712 238 712 171 658 146 583 158 583 171 587 183 587 200 587 217 583 233 579 146 562 83 487 83 396V387C108 400 138 408 167 412 117 379 83 321 83 254 83 221 92 187 108 158 200 271 342 346 496 354 492 342 492 325 492 312 492 208 575 125 679 125 733 125 783 146 817 183 858 175 900 158 938 137 925 179 896 217 854 242 892 237 929 229 963 212 933 250 900 283 863 312Z",width:1e3,height:1e3})}};t.twitter=g;const v={get element(){return n.createSvgElement("zoom-in-bold",{path:"M388 383V312C388 283 413 258 442 258 471 258 496 283 496 312V383H567C596 383 621 408 621 437S596 492 567 492H496V562C496 592 471 617 442 617 413 617 388 592 388 562V492H317C288 492 263 467 263 437S288 383 317 383H388ZM654 733C592 779 517 804 438 804 233 804 71 642 71 437S233 71 438 71 804 233 804 437C804 521 779 596 733 654L896 817C917 837 917 871 896 892 875 913 842 913 821 892L654 733ZM438 696C579 696 696 579 696 437S579 179 438 179 179 296 179 437 296 696 438 696Z",width:1e3,height:1e3})}};t.zoomInBold=v;const f={get element(){return n.createSvgElement("zoom-out-bold",{path:"M750 683L946 879C963 896 963 929 946 946 929 963 896 967 879 946L683 750C617 804 533 833 438 833 221 833 42 654 42 437S221 42 438 42 833 221 833 437C833 529 800 612 750 683ZM296 392H575C600 392 621 412 621 442 621 467 600 487 575 487H296C271 487 250 467 250 442 250 412 271 392 296 392ZM438 737C604 737 738 604 738 437S604 137 438 137 138 271 138 437 271 737 438 737Z",width:1e3,height:1e3})}};t.zoomOutBold=f},4508:(e,t,s)=>{"use strict";var i=s(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(3231));class IconsManager{constructor(e){this.prefix=`${e}-`,this.createSvgSymbolsContainer()}createSvgElement(e,t){let{path:s,width:i,height:n}=t;const o=this.prefix+e,r="#"+this.prefix+e;if(!IconsManager.iconsUsageList.includes(o)){if(!IconsManager.symbolsContainer.querySelector(r)){const e=this.createSymbolElement({id:o,path:s,width:i,height:n});IconsManager.symbolsContainer.appendChild(e)}IconsManager.iconsUsageList.push(o)}return this.createSvgIconElement({iconName:o,iconSelector:r})}createSvgNode(e,t){let{props:s={},attrs:i={}}=t;const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(s).map((e=>n[e]=s[e])),Object.keys(i).map((e=>n.setAttributeNS(null,e,i[e]))),n}createSvgIconElement(e){let{iconName:t,iconSelector:s}=e;return this.createSvgNode("svg",{props:{innerHTML:'<use xlink:href="'+s+'" />'},attrs:{class:"e-font-icon-svg e-"+t}})}createSvgSymbolsContainer(){if(!IconsManager.symbolsContainer){const e="e-font-icon-svg-symbols";IconsManager.symbolsContainer=document.getElementById(e),IconsManager.symbolsContainer||(IconsManager.symbolsContainer=this.createSvgNode("svg",{attrs:{style:"display: none;",class:e}}),document.body.appendChild(IconsManager.symbolsContainer))}}createSymbolElement(e){let{id:t,path:s,width:i,height:n}=e;return this.createSvgNode("symbol",{props:{innerHTML:'<path d="'+s+'"></path>',id:t},attrs:{viewBox:"0 0 "+i+" "+n}})}}t.default=IconsManager,(0,n.default)(IconsManager,"symbolsContainer",void 0),(0,n.default)(IconsManager,"iconsUsageList",[])},3896:(e,t,s)=>{"use strict";var i=s(3203)(s(3251)),n=s(5626);e.exports=elementorModules.ViewModule.extend({oldAnimation:null,swiper:null,player:null,isFontIconSvgExperiment:elementorFrontend.config.experimentalFeatures.e_font_icon_svg,getDefaultSettings:()=>({classes:{item:"elementor-lightbox-item",image:"elementor-lightbox-image",videoContainer:"elementor-video-container",videoWrapper:"elementor-video-wrapper",playButton:"elementor-custom-embed-play",playButtonIcon:"fa",playing:"elementor-playing",hidden:"elementor-hidden",invisible:"elementor-invisible",preventClose:"elementor-lightbox-prevent-close",slideshow:{container:elementorFrontend.config.swiperClass,slidesWrapper:"swiper-wrapper",prevButton:"elementor-swiper-button elementor-swiper-button-prev",nextButton:"elementor-swiper-button elementor-swiper-button-next",prevButtonIcon:"eicon-chevron-left",nextButtonIcon:"eicon-chevron-right",slide:"swiper-slide",header:"elementor-slideshow__header",footer:"elementor-slideshow__footer",title:"elementor-slideshow__title",description:"elementor-slideshow__description",counter:"elementor-slideshow__counter",iconExpand:"eicon-frame-expand",iconShrink:"eicon-frame-minimize",iconZoomIn:"eicon-zoom-in-bold",iconZoomOut:"eicon-zoom-out-bold",iconShare:"eicon-share-arrow",shareMenu:"elementor-slideshow__share-menu",shareLinks:"elementor-slideshow__share-links",hideUiVisibility:"elementor-slideshow--ui-hidden",shareMode:"elementor-slideshow--share-mode",fullscreenMode:"elementor-slideshow--fullscreen-mode",zoomMode:"elementor-slideshow--zoom-mode"}},selectors:{image:".elementor-lightbox-image",links:"a, [data-elementor-lightbox]",slideshow:{activeSlide:".swiper-slide-active",prevSlide:".swiper-slide-prev",nextSlide:".swiper-slide-next"}},modalOptions:{id:"elementor-lightbox",entranceAnimation:"zoomIn",videoAspectRatio:169,position:{enable:!1}}}),getModal(){return e.exports.modal||this.initModal(),e.exports.modal},initModal(){const t={};this.isFontIconSvgExperiment?t.iconElement=n.close.element:t.iconClass="eicon-close";const s=e.exports.modal=elementorFrontend.getDialogsManager().createWidget("lightbox",{className:"elementor-lightbox",closeButton:!0,closeButtonOptions:{...t,attributes:{role:"button",tabindex:0,"aria-label":elementorFrontend.config.i18n.close+" (Esc)"}},selectors:{preventClose:"."+this.getSettings("classes.preventClose")},hide:{onClick:!0}});s.on("hide",(function(){s.setMessage("")}))},showModal(e){if(e.url&&!e.url.startsWith("http"))return;this.elements.$closeButton=this.getModal().getElements("closeButton"),this.$buttons=this.elements.$closeButton,this.focusedButton=null;const t=this,s=t.getDefaultSettings().modalOptions;t.id=e.id,t.setSettings("modalOptions",jQuery.extend(s,e.modalOptions));const n=t.getModal();switch(n.setID(t.getSettings("modalOptions.id")),n.onShow=function(){DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(n,arguments),t.setEntranceAnimation()},n.onHide=function(){DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(n,arguments),n.getElements("message").removeClass("animated"),i.default.isFullscreen&&t.deactivateFullscreen(),t.unbindHotKeys()},e.type){case"video":t.setVideoContent(e);break;case"image":{const s=[{image:e.url,index:0,title:e.title,description:e.description,hash:e.hash}];e.slideshow={slides:s,swiper:{loop:!1,pagination:!1}},t.setSlideshowContent(e.slideshow);break}case"slideshow":t.setSlideshowContent(e.slideshow);break;default:t.setHTMLContent(e.html)}n.show()},createLightbox(e){let t={};if(e.dataset.elementorLightbox&&(t=JSON.parse(e.dataset.elementorLightbox)),t.type&&"slideshow"!==t.type)return void this.showModal(t);if(!e.dataset.elementorLightboxSlideshow){const t="single-img";return void this.showModal({type:"image",id:t,url:e.href,hash:e.getAttribute("data-e-action-hash"),title:e.dataset.elementorLightboxTitle,description:e.dataset.elementorLightboxDescription,modalOptions:{id:"elementor-lightbox-slideshow-"+t}})}const s=e.dataset.elementorLightboxVideo||e.href;this.openSlideshow(e.dataset.elementorLightboxSlideshow,s)},setHTMLContent(e){window.elementorCommon&&elementorDevTools.deprecation.deprecated("elementorFrontend.utils.lightbox.setHTMLContent()","3.1.4"),this.getModal().setMessage(e)},setVideoContent(e){const t=jQuery;let s;if("hosted"===e.videoType){const i=t.extend({src:e.url,autoplay:""},e.videoParams);s=t("<video>",i)}else{let i;if(-1!==e.url.indexOf("vimeo.com"))i=elementorFrontend.utils.vimeo;else{if(!e.url.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com|youtube-nocookie\.com)/))return;i=elementorFrontend.utils.youtube}s=t("<iframe>",{src:i.getAutoplayURL(e.url),allowfullscreen:1})}const i=this.getSettings("classes"),n=this.getRatioDictionry(this.getSettings("modalOptions.videoAspectRatio")),o=t("<div>",{class:`${i.videoContainer} ${i.preventClose}`}),r=t("<div>",{class:`${i.videoWrapper} elementor-video-${this.getRatioType(n)}`,style:"--video-aspect-ratio: "+n});r.append(s),o.append(r);const a=this.getModal();a.setMessage(o);const l=a.onHide;a.onHide=function(){l(),this.$buttons=jQuery(),this.focusedButton=null,a.getElements("message").removeClass("elementor-video-wrapper")}},getRatioDictionry:e=>({219:2.33333,169:1.77777,43:1.33333,32:1.5,11:1,916:.5625}[e]||e),getRatioType(e){let t="";return t=1===e?"square":e<1?"portrait":"landscape",t},getShareLinks(){const{i18n:e}=elementorFrontend.config,t={facebook:{label:e.shareOnFacebook,iconElement:n.facebook},twitter:{label:e.shareOnTwitter,iconElement:n.twitter},pinterest:{label:e.pinIt,iconElement:n.pinterest}},s=jQuery,i=this.getSettings("classes"),o=this.getSettings("selectors"),r=s("<div>",{class:i.slideshow.shareLinks}),a=this.getSlide("active"),l=a.find(o.image),d=a.data("elementor-slideshow-video");let c;if(c=d||l.attr("src"),s.each(t,((e,t)=>{const i=t.label,n=s("<a>",{href:this.createShareLink(e,c,a.attr("data-e-action-hash")),target:"_blank"}).text(i),o=this.isFontIconSvgExperiment?s(t.iconElement.element):s("<i>",{class:"eicon-"+e,"aria-hidden":"true"});n.prepend(o),r.append(n)})),!d){const t=this.isFontIconSvgExperiment?s(n.downloadBold.element):s("<i>",{class:"eicon-download-bold"});t.attr("aria-label",e.download),r.append(s("<a>",{href:c,download:""}).text(e.downloadImage).prepend(t))}return r},createShareLink(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i={};return"pinterest"===e?i.image=encodeURIComponent(t):i.url=encodeURIComponent(location.href.replace(/#.*/,"")+s),ShareLink.getNetworkLink(e,i)},getSlideshowHeader(){const{i18n:e}=elementorFrontend.config,t=jQuery,s="yes"===elementorFrontend.getKitSettings("lightbox_enable_counter"),i="yes"===elementorFrontend.getKitSettings("lightbox_enable_fullscreen"),o="yes"===elementorFrontend.getKitSettings("lightbox_enable_zoom"),r="yes"===elementorFrontend.getKitSettings("lightbox_enable_share"),a=this.getSettings("classes"),l=a.slideshow,d=this.elements;if(s||i||o||r){if(d.$header=t("<header>",{class:l.header+" "+a.preventClose}),r){const s=this.isFontIconSvgExperiment?n.shareArrow.element:"<i>";d.$iconShare=t(s,{class:l.iconShare,role:"button",tabindex:0,"aria-label":e.share,"aria-expanded":!1}).append(t("<span>"));const i=t("<div>");i.on("click",(e=>{e.stopPropagation()})),d.$shareMenu=t("<div>",{class:l.shareMenu}).append(i),d.$iconShare.add(d.$shareMenu).on("click",this.toggleShareMenu),d.$header.append(d.$iconShare,d.$shareMenu),this.$buttons=this.$buttons.add(d.$iconShare)}if(o){const s=this.isFontIconSvgExperiment?n.zoomInBold.element:"<i>",i=[],o={role:"switch",tabindex:0,"aria-checked":!1,"aria-label":e.zoom},r={...o};this.isFontIconSvgExperiment||(r.class=l.iconZoomIn),d.$iconZoom=t(s).attr(r).on("click",this.toggleZoomMode),i.push(d.$iconZoom),this.isFontIconSvgExperiment&&(d.$iconZoomOut=t(n.zoomOutBold.element).attr(o).addClass(a.hidden).on("click",this.toggleZoomMode),i.push(d.$iconZoomOut)),d.$header.append(i),this.$buttons=this.$buttons.add(i)}if(i){const s=this.isFontIconSvgExperiment?n.frameExpand.element:"<i>",i=[],o={role:"switch",tabindex:0,"aria-checked":!1,"aria-label":e.fullscreen},r={...o};this.isFontIconSvgExperiment||(r.class=l.iconExpand),d.$iconExpand=t(s).append(t("<span>"),t("<span>")).attr(r).on("click",this.toggleFullscreen),i.push(d.$iconExpand),this.isFontIconSvgExperiment&&(d.$iconMinimize=t(n.frameMinimize.element).attr(o).addClass(a.hidden).on("click",this.toggleFullscreen),i.push(d.$iconMinimize)),d.$header.append(i),this.$buttons=this.$buttons.add(i)}return s&&(d.$counter=t("<span>",{class:l.counter}),d.$header.append(d.$counter)),d.$header}},toggleFullscreen(){i.default.isFullscreen?this.deactivateFullscreen():i.default.isEnabled&&this.activateFullscreen()},toggleZoomMode(){1!==this.swiper.zoom.scale?this.deactivateZoom():this.activateZoom()},toggleShareMenu(){this.shareMode?this.deactivateShareMode():(this.elements.$shareMenu.html(this.getShareLinks()),this.activateShareMode())},activateShareMode(){const e=this.getSettings("classes");this.elements.$container.addClass(e.slideshow.shareMode),this.elements.$iconShare.attr("aria-expanded",!0),this.swiper.detachEvents(),this.$originalButtons=this.$buttons,this.$buttons=this.elements.$iconShare.add(this.elements.$shareMenu.find("a")),this.shareMode=!0},deactivateShareMode(){const e=this.getSettings("classes");this.elements.$container.removeClass(e.slideshow.shareMode),this.elements.$iconShare.attr("aria-expanded",!1),this.swiper.attachEvents(),this.$buttons=this.$originalButtons,this.shareMode=!1},activateFullscreen(){const e=this.getSettings("classes");i.default.request(this.elements.$container.parents(".dialog-widget")[0]),this.isFontIconSvgExperiment?(this.elements.$iconExpand.addClass(e.hidden).attr("aria-checked","false"),this.elements.$iconMinimize.removeClass(e.hidden).attr("aria-checked","true")):this.elements.$iconExpand.removeClass(e.slideshow.iconExpand).addClass(e.slideshow.iconShrink).attr("aria-checked","true"),this.elements.$container.addClass(e.slideshow.fullscreenMode)},deactivateFullscreen(){const e=this.getSettings("classes");i.default.exit(),this.isFontIconSvgExperiment?(this.elements.$iconExpand.removeClass(e.hidden).attr("aria-checked","true"),this.elements.$iconMinimize.addClass(e.hidden).attr("aria-checked","false")):this.elements.$iconExpand.removeClass(e.slideshow.iconShrink).addClass(e.slideshow.iconExpand).attr("aria-checked","false"),this.elements.$container.removeClass(e.slideshow.fullscreenMode)},activateZoom(){const e=this.swiper,t=this.elements,s=this.getSettings("classes");e.zoom.in(),e.allowSlideNext=!1,e.allowSlidePrev=!1,e.allowTouchMove=!1,t.$container.addClass(s.slideshow.zoomMode),this.isFontIconSvgExperiment?(t.$iconZoom.addClass(s.hidden).attr("aria-checked","false"),t.$iconZoomOut.removeClass(s.hidden).attr("aria-checked","true")):t.$iconZoom.removeClass(s.slideshow.iconZoomIn).addClass(s.slideshow.iconZoomOut)},deactivateZoom(){const e=this.swiper,t=this.elements,s=this.getSettings("classes");e.zoom.out(),e.allowSlideNext=!0,e.allowSlidePrev=!0,e.allowTouchMove=!0,t.$container.removeClass(s.slideshow.zoomMode),this.isFontIconSvgExperiment?(t.$iconZoom.removeClass(s.hidden).attr("aria-checked","true"),t.$iconZoomOut.addClass(s.hidden).attr("aria-checked","false")):t.$iconZoom.removeClass(s.slideshow.iconZoomOut).addClass(s.slideshow.iconZoomIn)},getSlideshowFooter(){const e=jQuery,t=this.getSettings("classes"),s=e("<footer>",{class:t.slideshow.footer+" "+t.preventClose}),i=e("<div>",{class:t.slideshow.title}),n=e("<div>",{class:t.slideshow.description});return s.append(i,n),s},setSlideshowContent(e){const{i18n:t}=elementorFrontend.config,s=jQuery,i=1===e.slides.length,o=""!==elementorFrontend.getKitSettings("lightbox_title_src"),r=""!==elementorFrontend.getKitSettings("lightbox_description_src"),a=o||r,l=this.getSettings("classes"),d=l.slideshow,c=s("<div>",{class:d.container}),h=s("<div>",{class:d.slidesWrapper});let u,m;if(e.slides.forEach((e=>{let i=d.slide+" "+l.item;e.video&&(i+=" "+l.video);const o=s("<div>",{class:i});if(e.video){o.attr("data-elementor-slideshow-video",e.video);const i=this.isFontIconSvgExperiment?n.loading.element:"<i>",r=s("<div>",{class:l.playButton}).html(s(i).attr("aria-label",t.playVideo).addClass(l.playButtonIcon));o.append(r)}else{const t=s("<div>",{class:"swiper-zoom-container"}),i=s('<div class="swiper-lazy-preloader"></div>'),n={"data-src":e.image,class:l.image+" "+l.preventClose+" swiper-lazy"};e.title&&(n["data-title"]=e.title,n.alt=e.title),e.description&&(n["data-description"]=e.description,n.alt+=" - "+e.description);const r=s("<img>",n);t.append([r,i]),o.append(t)}e.hash&&o.attr("data-e-action-hash",e.hash),h.append(o)})),this.elements.$container=c,this.elements.$header=this.getSlideshowHeader(),c.prepend(this.elements.$header).append(h),!i){const e=this.isFontIconSvgExperiment?s(n.chevronLeft.element):s("<i>",{class:d.prevButtonIcon,"aria-hidden":"true"}),i=this.isFontIconSvgExperiment?s(n.chevronRight.element):s("<i>",{class:d.nextButtonIcon,"aria-hidden":"true"}),o=s("<span>",{class:"screen-reader-text"}).html(t.previous),r=s("<span>",{class:"screen-reader-text"}).html(t.next);u=s("<div>",{class:d.prevButton+" "+l.preventClose}).append(e,o),m=s("<div>",{class:d.nextButton+" "+l.preventClose}).append(i,r),c.append(m,u),this.$buttons=this.$buttons.add(m).add(u)}a&&(this.elements.$footer=this.getSlideshowFooter(),c.append(this.elements.$footer)),this.setSettings("hideUiTimeout",""),c.on("click mousemove keypress",this.showLightboxUi);const p=this.getModal();p.setMessage(c);const g=p.onShow;p.onShow=async()=>{g();const t={pagination:{el:"."+d.counter,type:"fraction"},on:{slideChangeTransitionEnd:this.onSlideChange},lazy:{loadPrevNext:!0},zoom:!0,spaceBetween:100,grabCursor:!0,runCallbacksOnInit:!1,loop:!0,keyboard:!0,handleElementorBreakpoints:!0};i||(t.navigation={prevEl:u[0],nextEl:m[0]}),e.swiper&&s.extend(t,e.swiper);const n=elementorFrontend.utils.swiper;this.swiper=await new n(c,t),c.data("swiper",this.swiper),this.playSlideVideo(),a&&this.updateFooterText(),this.bindHotKeys(),this.makeButtonsAccessible()}},makeButtonsAccessible(){this.$buttons.attr("tabindex",0).on("keypress",(e=>{13!==e.which&&32!==e.which||jQuery(e.currentTarget).trigger("click")}))},showLightboxUi(){const e=this.getSettings("classes").slideshow;this.elements.$container.removeClass(e.hideUiVisibility),clearTimeout(this.getSettings("hideUiTimeout")),this.setSettings("hideUiTimeout",setTimeout((()=>{this.shareMode||this.elements.$container.addClass(e.hideUiVisibility)}),3500))},bindHotKeys(){this.getModal().getElements("window").on("keydown",this.activeKeyDown)},unbindHotKeys(){this.getModal().getElements("window").off("keydown",this.activeKeyDown)},activeKeyDown(e){this.showLightboxUi();if(9===e.which){const t=this.$buttons;let s,i=!1,n=!1;t.each((e=>{const o=t[e];if(jQuery(o).is(":focus"))return s=o,i=0===e,n=t.length-1===e,!1})),e.shiftKey?i&&(e.preventDefault(),t.last().trigger("focus")):!n&&s||(e.preventDefault(),t.first().trigger("focus"))}},getSlide(e){return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow."+e+"Slide"))},updateFooterText(){if(!this.elements.$footer)return;const e=this.getSettings("classes"),t=this.getSlide("active").find(".elementor-lightbox-image"),s=t.data("title"),i=t.data("description"),n=this.elements.$footer.find("."+e.slideshow.title),o=this.elements.$footer.find("."+e.slideshow.description);n.text(s||""),o.text(i||"")},playSlideVideo(){const e=this.getSlide("active"),t=e.data("elementor-slideshow-video");if(!t)return;const s=this.getSettings("classes"),i=this.getRatioDictionry(this.getSettings("modalOptions.videoAspectRatio")),n=jQuery("<div>",{class:s.videoContainer+" "+s.invisible}),o=jQuery("<div>",{class:`${s.videoWrapper} elementor-video-${this.getRatioType(i)}`,style:"--video-aspect-ratio: "+i}),r=e.children("."+s.playButton);let a,l;n.append(o),e.append(n),-1!==t.indexOf("vimeo.com")?(a="vimeo",l=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(a="youtube",l=elementorFrontend.utils.youtube);const d=l.getVideoIDFromURL(t);l.onApiReady((e=>{"youtube"===a?this.prepareYTVideo(e,d,n,o,r):"vimeo"===a&&this.prepareVimeoVideo(e,t,n,o,r)})),r.addClass(s.playing).removeClass(s.hidden)},prepareYTVideo(e,t,s,i,n){const o=this.getSettings("classes"),r=jQuery("<div>");let a=e.PlayerState.PLAYING;i.append(r),window.chrome&&(a=e.PlayerState.UNSTARTED),s.addClass("elementor-loading "+o.invisible),this.player=new e.Player(r[0],{videoId:t,events:{onReady:()=>{n.addClass(o.hidden),s.removeClass(o.invisible),this.player.playVideo()},onStateChange:e=>{e.data===a&&s.removeClass("elementor-loading "+o.invisible)}},playerVars:{controls:0,rel:0}})},prepareVimeoVideo(e,t,s,i,n){const o=this.getSettings("classes"),r={url:t,autoplay:!0,transparent:!1,playsinline:!1};this.player=new e.Player(i,r),this.player.ready().then((()=>{n.addClass(o.hidden),s.removeClass(o.invisible)}))},setEntranceAnimation(e){e=e||elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"),"entranceAnimation");const t=this.getModal().getElements("message");this.oldAnimation&&t.removeClass(this.oldAnimation),this.oldAnimation=e,e&&t.addClass("animated "+e)},openSlideshow(e,t){const s=jQuery(this.getSettings("selectors.links")).filter(((t,s)=>{const i=jQuery(s);return e===s.dataset.elementorLightboxSlideshow&&!i.parent(".swiper-slide-duplicate").length&&!i.parents(".slick-cloned").length})),i=[];let n=0;s.each((function(){const e=this.dataset.elementorLightboxVideo;let o=this.dataset.elementorLightboxIndex;void 0===o&&(o=s.index(this)),(t===this.href||e&&t===e)&&(n=o);const r={image:this.href,index:o,title:this.dataset.elementorLightboxTitle,description:this.dataset.elementorLightboxDescription,hash:this.getAttribute("data-e-action-hash")};e&&(r.video=e),i.push(r)})),i.sort(((e,t)=>e.index-t.index)),this.showModal({type:"slideshow",id:e,modalOptions:{id:"elementor-lightbox-slideshow-"+e},slideshow:{slides:i,swiper:{initialSlide:+n}}})},onSlideChange(){this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("."+this.getSettings("classes.videoWrapper")).remove(),this.playSlideVideo(),this.updateFooterText()}})},3251:e=>{"use strict";!function(){var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},s=e.exports,i=function(){for(var e,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,n=s.length,o={};i<n;i++)if((e=s[i])&&e[1]in t){var r=e.length;for(i=0;i<r;i++)o[s[0][i]]=e[i];return o}return!1}(),n={change:i.fullscreenchange,error:i.fullscreenerror},o={request(e){return new Promise(function(s,n){var o=function(){this.off("change",o),s()}.bind(this);this.on("change",o),e=e||t.documentElement,Promise.resolve(e[i.requestFullscreen]()).catch(n)}.bind(this))},exit(){return new Promise(function(e,s){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n),Promise.resolve(t[i.exitFullscreen]()).catch(s)}else e()}.bind(this))},toggle(e){return this.isFullscreen?this.exit():this.request(e)},onchange(e){this.on("change",e)},onerror(e){this.on("error",e)},on(e,s){var i=n[e];i&&t.addEventListener(i,s,!1)},off(e,s){var i=n[e];i&&t.removeEventListener(i,s,!1)},raw:i};i?(Object.defineProperties(o,{isFullscreen:{get:()=>Boolean(t[i.fullscreenElement])},element:{enumerable:!0,get:()=>t[i.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>Boolean(t[i.fullscreenEnabled])}}),s?e.exports=o:window.screenfull=o):s?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},3231:(e,t,s)=>{var i=s(4040);e.exports=function _defineProperty(e,t,s){return(t=i(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e},e.exports.__esModule=!0,e.exports.default=e.exports},6027:(e,t,s)=>{var i=s(7501).default;e.exports=function _toPrimitive(e,t){if("object"!==i(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4040:(e,t,s)=>{var i=s(7501).default,n=s(6027);e.exports=function _toPropertyKey(e){var t=n(e,"string");return"symbol"===i(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},7501:e=>{function _typeof(t){return e.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,_typeof(t)}e.exports=_typeof,e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{e.O(0,[819,354],(()=>{return t=1210,e(e.s=t);var t}));e.O()}]);                                     </div>
                    </div>
                  </div>
                </li>
                              
                                <li class="lf-nav-dropdown">
                  <button class="dropdown-toggle" aria-expanded="false">Products</button>
                  <div class="lf-dropdown-content">
                    <div class="lf-container">
                      <div class="lf-row">
                        <div class="lf-col-sm-3">
                          <p class="section-description">Everything you need for mobile growth.</p>
                                                      <div class="wp-block-button is-style-arrow-link has-ebony-color">
                              <a class="wp-block-button__link lf-view-more-link-button" href="https://liftoff.io/products/" target="_self">
                                All Products                              </a>
                            </div>
                                                  </div>
                                                                        <div class=" type-with-icon section-items">
                                                      <ul role="menu" class="section-items-list type-with-icon">
                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Accelerate" href="https://liftoff.io/accelerate/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Accelerate.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Accelerate" href="https://liftoff.io/accelerate/" target="_self">Accelerate </a>
                                    <p class="description">Acquire quality users at scale with machine learning</p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Monetize" href="https://liftoff.io/monetize/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Monetize.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Monetize" href="https://liftoff.io/monetize/" target="_self">Monetize </a>
                                    <p class="description">Maximize your earnings for every impression</p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Creative Studio" href="https://liftoff.io/creative-studio/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Creative-Studio.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Creative Studio" href="https://liftoff.io/creative-studio/" target="_self">Creative Studio </a>
                                    <p class="description">Optimize campaign performance with better ad creatives</p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Direct" href="https://liftoff.io/direct/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Direct.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Direct" href="https://liftoff.io/direct/" target="_self">Direct </a>
                                    <p class="description">Access top-quality publishers to acquire engaged users</p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Influence" href="https://liftoff.io/influence/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Influence.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Influence" href="https://liftoff.io/influence/" target="_self">Influence </a>
                                    <p class="description">Activate meaningful growth with creator campaigns</p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Gaming Intelligence" href="https://liftoff.io/intelligence/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Intelligence.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Gaming Intelligence" href="https://liftoff.io/intelligence/" target="_self">Gaming Intelligence </a>
                                    <p class="description">Build and launch gaming experiences players want </p>
                                  </li>
                                                                                                                                                                <li class="nav-item">
                                                                          <a class="icon-link" title="Vungle Exchange" href="https://liftoff.io/exchange/" target="_self">
                                        <img class="icon" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Vungle-X.svg" alt=""></img>
                                      </a>
                                                                        <a class="title" title="Vungle Exchange" href="https://liftoff.io/exchange/" target="_self">Vungle Exchange </a>
                                    <p class="description">Engage high-quality users in their favorite mobile apps</p>
                                  </li>
                                                                                          </ul>
                                                  </div>
                                              </div>
                    </div>
                  </div>
                </li>
                              
                                <li class="lf-nav-dropdown">
                  <button class="dropdown-toggle" aria-expanded="false">Resources</button>
                  <div class="lf-dropdown-content">
                    <div class="lf-container">
                      <div class="lf-row">
                        <div class="lf-col-sm-3">
                          <p class="section-description">Thought leadership from the global Liftoff community.</p>
                                                      <div class="wp-block-button is-style-arrow-link has-ebony-color">
                              <a class="wp-block-button__link lf-view-more-link-button" href="https://liftoff.io/resources/" target="_self">
                                All Resources                              </a>
                            </div>
                                                  </div>
                                                                        <div class="with-featured type-link section-items">
                                                      <ul role="menu" class="section-items-list type-link">
                                                                                                                                <li class="nav-item"><a title="Blog" href="https://liftoff.io/resources/?type=post" target="_self">Blog</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Case Studies" href="https://liftoff.io/resources/?type=casestudy" target="_self">Case Studies</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Events" href="https://liftoff.io/resources/?type=event" target="_self">Events</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Guides & Reports" href="https://liftoff.io/resources/?type=report" target="_self">Guides & Reports</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Podcasts" href="https://liftoff.io/resources/?type=podcast" target="_self">Podcasts</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Webinars" href="https://liftoff.io/resources/?type=webinar" target="_self">Webinars</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Mobile Heroes" href="https://www.mobileheroes.io/" target="_blank">Mobile Heroes</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Help Center" href="https://liftoff.io/help/" target="_self">Help Center</a></li>
                                                                                          </ul>
                                                  </div>
                                                                            <div class="lf-col-md-3 featured">
                            <div class="featured-image">
                                                              <a href="https://info.liftoff.io/2024-app-marketer-survey" target="_self">
                                  <img width="1024" height="535" src="https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-1024x535.png" class="attachment-large size-large" alt="2024 App Marketer Survey" decoding="async" fetchpriority="high" srcset="https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-1024x535.png 1024w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-300x157.png 300w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-1536x802.png 1536w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-2048x1070.png 2048w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-72x38.png 72w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-900x470.png 900w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-1128x589.png 1128w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-564x295.png 564w, https://liftoff.io/wp-content/uploads/2024/01/App-Marketer-Resource-Image-2@2x-1-375x196.png 375w" sizes="(max-width: 1024px) 100vw, 1024px" />                                </a>
                                                          </div>
                            <h6 class="featured-label">FEATURED</h6>
                            <a class="featured-title" href="https://info.liftoff.io/2024-app-marketer-survey" target="_self">Liftoff's 2024 App Marketer Survey</a>
                          </div>
                                              </div>
                    </div>
                  </div>
                </li>
                              
                                <li class="lf-nav-dropdown">
                  <button class="dropdown-toggle" aria-expanded="false">Company</button>
                  <div class="lf-dropdown-content">
                    <div class="lf-container">
                      <div class="lf-row">
                        <div class="lf-col-sm-3">
                          <p class="section-description">We help mobile businesses connect to their audiences.</p>
                                                      <div class="wp-block-button is-style-arrow-link has-ebony-color">
                              <a class="wp-block-button__link lf-view-more-link-button" href="https://liftoff.io/company/" target="_self">
                                Learn About Us                              </a>
                            </div>
                                                  </div>
                                                                        <div class=" type-link section-items">
                                                      <ul role="menu" class="section-items-list type-link">
                                                                                                                                <li class="nav-item"><a title="About Us" href="https://liftoff.io/company/" target="_self">About Us</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Contact Us" href="https://liftoff.io/company/contact-us/" target="_self">Contact Us</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Careers" href="https://liftoff.io/company/careers/" target="_self">Careers</a></li>
                                                                                                                                                                <li class="nav-item"><a title="Liftoff Gives" href="https://liftoff.io/company/liftoff-gives/" target="_self">Liftoff Gives</a></li>
                                                                                          </ul>
                                                  </div>
                                              </div>
                    </div>
                  </div>
                </li>
                                    </ul>
          <div class="icons-nav">
            <div class="lf-nav-dropdown icon-dropdown">
              <button aria-expanded="false" class="icon search-icon dropdown-toggle" aria-label="open search button" name="open-search-button"></button>
              <div class="lf-dropdown-content search-content">
                <div class="lf-container">
                  <div class="lf-row">
                    <div class="lf-input">
                      
                      <form role="search" method="get" class="search-form" action="https://liftoff.io/">
                        <label>
                          <span class="screen-reader-text">Search for:</span>
                          <input type="search" placeholder="I'm looking for…" name="s">
                        </label>
                        <input type="submit" class="search-submit" value="Search" aria-label="search button" name="search-button">
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="language-selector lf-nav-dropdown" >
              <button aria-expanded="false" class="icon language-icon dropdown-toggle" aria-label="language button selector" name="language-button">
                <em id="lf-current-language" class="mobile-label"></em>
              </button>
              <div class="lf-dropdown-content language-option">
                <div class="lf-container">
                  <div class="lf-row">
                    <ul id="lf-language-selector">
                      <li data-code="en" data-name="English" class="lf-language-item lf-language-en current">English</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="lf-nav-dropdown icon-dropdown">
              <button aria-expanded="false" class="dropdown-toggle">Log In</button>
              <div class="lf-dropdown-content login-content">
                <div class="lf-container">
                  <div class="lf-container">
                    <div class="lf-row">
                      <ul class="lf-login-selector">
                                                  <li>
                                                          <img width="300" height="300" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Accelerate.svg" class="lf-login-icon" alt="Accelerate Icon" decoding="async" />                                                        <a href="https://app.liftoff.io/signin" target="_blank">
                              Accelerate / Liftoff                            </a>
                          </li>
                                                  <li>
                                                          <img width="300" height="300" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Monetize.svg" class="lf-login-icon" alt="Monetize icon" decoding="async" />                                                        <a href="http://publisher.vungle.com/" target="_blank">
                              Monetize / Vungle                            </a>
                          </li>
                                                  <li>
                                                          <img width="300" height="300" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Direct.svg" class="lf-login-icon" alt="Direct icon" decoding="async" />                                                        <a href="http://advertiser.vungle.com/" target="_blank">
                              Direct / Vungle                            </a>
                          </li>
                                                  <li>
                                                          <img width="300" height="300" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Influence.svg" class="lf-login-icon" alt="Influence icon" decoding="async" />                                                        <a href="https://dash.jetfuel.it/login" target="_blank">
                              Influence / JetFuel                            </a>
                          </li>
                                                  <li>
                                                          <img width="300" height="300" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Intelligence.svg" class="lf-login-icon" alt="Intelligence icon" decoding="async" />                                                        <a href="https://saas.gamerefinery.com/" target="_blank">
                              Gaming Intelligence / GameRefinery                            </a>
                          </li>
                                              </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                      <div class="wp-block-button" tx-content="translate_urls">
              <a id="header-get-started" class="wp-block-button__link has-new-pitaya-background-color" href="https://liftoff.io/sign-up/" target="_self" data-original-url="https://liftoff.io/sign-up/">
                Get Started              </a>
            </div>
                  </div>
      </div>
    </div>
    <div class="mobile-nav lf-container lf-row">
      <div class="lf-col-sm-4 lf-nav-container">
        <div class="sitelogo" itemprop="logo"><a href="https://liftoff.io/" rel="home" itemprop="url" alt="brand logo" aria-label="go to Liftoff home" name="Liftoff home"></a></div>
        <button class="menu-button" name="menu" aria-label="menu" id="nav-mobile" role="button"></button>
      </div>
      <div id="sidebar" class="sidebar">
        <div class="lf-container">
          <div class="lf-accordion-container">
            <div class="lf-accordion-header">
    <button>
                Solutions    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                            <a href="https://liftoff.io/resources/?type=casestudy" target="_self"> 
                                View Case Studies
                            </a>
                        </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/marketer/" target=""> 
                                  For Marketers
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/agency/" target=""> 
                                  For Agencies
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/dsp/" target=""> 
                                  For DSPs
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/publisher/" target=""> 
                                  For Publishers
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/gaming/" target=""> 
                                  For Mobile Game Developers
                              </a>
                          </div></div>  

<div class="lf-accordion-header">
    <button>
                Products    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                            <a href="https://liftoff.io/products/" target="_self"> 
                                All Products
                            </a>
                        </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/accelerate/" target=""> 
                                  Accelerate
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/monetize/" target=""> 
                                  Monetize
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/creative-studio/" target=""> 
                                  Creative Studio
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/direct/" target=""> 
                                  Direct
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/influence/" target=""> 
                                  Influence
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/intelligence/" target=""> 
                                  Gaming Intelligence
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/exchange/" target=""> 
                                  Vungle Exchange
                              </a>
                          </div></div>  

<div class="lf-accordion-header">
    <button>
                Resources    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                            <a href="https://liftoff.io/resources/" target="_self"> 
                                All Resources
                            </a>
                        </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=post" target=""> 
                                  Blog
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=casestudy" target=""> 
                                  Case Studies
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=event" target=""> 
                                  Events
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=report" target=""> 
                                  Guides & Reports
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=podcast" target=""> 
                                  Podcasts
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/resources/?type=webinar" target=""> 
                                  Webinars
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://www.mobileheroes.io/" target="_blank"> 
                                  Mobile Heroes
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/help/" target=""> 
                                  Help Center
                              </a>
                          </div></div>  

<div class="lf-accordion-header">
    <button>
                Company    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                            <a href="https://liftoff.io/company/" target="_self"> 
                                Learn About Us
                            </a>
                        </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/company/" target=""> 
                                  About Us
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/company/contact-us/" target=""> 
                                  Contact Us
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/company/careers/" target=""> 
                                  Careers
                              </a>
                          </div><div class="lf-no-indented-level">
                              <a href="https://liftoff.io/company/liftoff-gives/" target=""> 
                                  Liftoff Gives
                              </a>
                          </div></div>  

          </div>
          <ul class="mobile-icon-links">
            <li><a href="https://liftoff.io/?s=" class="icon search-icon">Search</a></li>
            <li >
              <button class="icon language-icon" id="mobile-language-selector">Language</button>
              <ul class="language-options-mobile" id="lf-language-selector-mobile">

              </ul>
            </li>
                          <li><a href="https://liftoff.io/login/" target="_self" class="icon login-icon">Login</a></li>
                      </ul>
        </div>
      </div>
    </div>
  </nav>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#lf-language-selector').addEventListener('click', (event) => {
        if(event.target.classList.contains('lf-language-item')) {
            let selectedLanguage = event.target.getAttribute('data-code');
            updatePageLanguage(selectedLanguage);
        }
    });
});

function updatePageLanguage(languageCode) {
    console.log("LANGUAGE SELECTED: " + languageCode);

    
    let path = window.location.pathname;

  
    path = path.replace(/\/(en|zh-hans|id|ja|ko|pt-br|ru|es)\//g, '/');

   
    if(languageCode === 'en') {
        
        window.location.href = path;
        return;
    }

   
    if(languageCode === 'pt_BR') {
        languageCode = 'pt-br';
    }
	
	 if(languageCode === 'zh-Hans') {
        languageCode = 'zh-hans';
    }

    
    let newPath = `/${languageCode}${path}`;

  
    window.location.href = newPath;
}

</script>

</header>
<main class="lf-content-area">
      <section id="hero-2-block_ef9fa0f9c7fe9be878129306d04a05e1" class="lf-block--hero-2 alignfull">
  <div class="">
    <div class="lf-block__hero-2-text-container">
        
      <h1 class="is-style-title-xl lf-hero-2-title only-left-content">Your one-stop shop to market and monetize your mobile apps</h1>
          </div>
    <div class="lf-block__hero-2-image-container has-desktop-image has-background has-white-background-color">
          
    <picture class="">
        <source srcset="" media="(max-width: 768px)">
        <img decoding="async" class="lf-hero-2-image" src="https://liftoff.io/wp-content/uploads/2022/12/Product-Hero-img-GG-v01.svg" alt="Liftoff Products Hero"/>
    </picture>
        </div>
  </div>
</section>

<div class="lf-block--split-group alignfull"  data-mobile-accordion="true" data-show-subnav="true" data-show-skip="true" data-transition="fade-white">
  <div class="lf-block--split-group-content mobile-accordion">

<div class="lf-block--split-group-item" id="accelerate" data-section-name="Accelerate" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Accelerate.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_7de07dd5a9c1d05b0d8ea9c89c827443" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="966" src="https://liftoff.io/wp-content/uploads/2022/10/Accelarate-1.svg" class="lf-block--image-scene__foreground" alt="Illustration of a man using a smartphone while his online avatar floats above the screen" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28238" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Accelerate.svg" alt="Accelerate Icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Accelerate acquires the best ROAS and LTV users for your app.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Attract and engage quality users at scale with programmatic solutions that maximize growth, level up your creative strategy, and safeguard campaign performance.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/accelerate/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="direct" data-section-name="Direct" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Direct.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_457c985fed44b3476dfb9f02164b7c19" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="966" src="https://liftoff.io/wp-content/uploads/2022/10/Detailed-data-on-demand.svg" class="lf-block--image-scene__foreground" alt="Illustration of a smartphone overlaid with a bar graph, a chart depicting an upward trend, and a text box saying, “+75k publishers”" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28240" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Direct.svg" alt="Direct icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Direct gives you hands-on access to premium inventory.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Discover and engage high-quality audiences directly through our extensive ad network of publishers with exclusive access to premium ad placements.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/direct/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="influence" data-section-name="Influence" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Influence.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_6ef5b3aa6667520d484121e180961c9c" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="968" src="https://liftoff.io/wp-content/uploads/2022/10/Image-4.1-2.jpg" class="lf-block--image-scene__foreground" alt="Illustration of a man with tattoo sleeves who’s stroking his chin as though pondering a thought" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28242" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Influence.svg" alt="Influence icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Influence authentically connects you with Gen Z audiences.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Tap into the creator economy with our leading influencer marketing platform.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/influence/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="creative-studio" data-section-name="Creative Studio" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Creative-Studio.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_dc0be2940d7d3d8f242e239c3d141db7" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="966" src="https://liftoff.io/wp-content/uploads/2022/10/creativestudio-product.svg" class="lf-block--image-scene__foreground" alt="Illustration of postcards featuring white, gray and orange cats and a ball of green yarn" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28239" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Creative-Studio.svg" alt="Creative studio icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Creative Studio crafts ads that deliver high impact.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Drive better results with winning ad creatives backed by rich data sets, industry expertise, and the latest creative technology.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/creative-studio/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="monetize" data-section-name="Monetize" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Monetize.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_3976586a09114b7788013e6ee2a991b0" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="966" src="https://liftoff.io/wp-content/uploads/2022/10/Image.svg" class="lf-block--image-scene__foreground" alt="Illustration of a young woman using a tablet, a crowded cityscape, and two gold coins" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28244" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Monetize.svg" alt="Monetize icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Monetize maximizes earnings for your app.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Grow your revenue by matching global premium demand with a superior ad experience to your inventory, maximizing earnings for every impression.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/monetize/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="intelligence" data-section-name="Intelligence" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Intelligence.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_2f939c4019bf45a5321e008236722c6e" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="968" src="https://liftoff.io/wp-content/uploads/2022/10/v2.png" class="lf-block--image-scene__foreground" alt="Illustration of a wheelchair user with short-cropped lilac hair" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="181" height="181" class="wp-image-28243" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Intelligence.svg" alt="Intelligence icon"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Intelligence empowers you to build better mobile games.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Build better mobile games with intelligence from the #1 trusted mobile game intelligence tool. GameRefinery uses enriched data on 100,000+ games to help you develop smarter, boost revenue, and stay competitive.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/intelligence/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>


<div class="lf-block--split-group-item" id="vungle-exchange" data-section-name="Vungle Exchange" data-section-icon="https://liftoff.io/wp-content/uploads/2022/09/Product-Vungle-X.svg">
  <div class="acf-innerblocks-container">
<section class="lf-block--split is-style-image-right has-background has-white-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_9c659293126c4159884be75101069174" class="lf-block--image-scene"  data-has-background="false" data-has-foreground="true" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="never">
          <div class="lf-block--image-scene__foreground-container">
    <img loading="lazy" width="1024" height="966" src="https://liftoff.io/wp-content/uploads/2022/10/Vungle-Exchange-v2-2.svg" class="lf-block--image-scene__foreground" alt="Illustration of a smartphone screen depicting a website browser and a large blue diamond" decoding="async" />  </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-xs wp-block-heading"><img decoding="async" loading="lazy" width="180" height="180" class="wp-image-28245" style="width: 40px;" src="https://liftoff.io/wp-content/uploads/2022/09/Product-Vungle-X.svg" alt="Game Refinery"></h2>



<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Vungle Exchange increases and secures your programmatic reach.</h2>



<p class="is-style-body-md has-zinc-color has-text-color">Get the programmatic reach needed to deliver premium ad experiences and engage high-quality users in their favorite mobile apps at exactly the right time.</p>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" href="https://liftoff.io/exchange/">Learn More</a></div>
</div>

</div>
</div>
</div>
</section>
</div>
</div>
</div>

      <div class="wp-block-button is-style-arrow-link">
      <button class="wp-block-button__link skip-button has-background">
        Skip
      </button>
    </div>
  
      <div class="lf-block--split-group__mobile-accordion lf-accordion-container">
      <template>
        <div class="lf-accordion-header">
    <button>
                    <slot-icon />    
                <slot-title />    </button>
</div>
<div class="lf-accordion-content ">
    <slot-content /></div>  

      </template>
    </div>
  </div>


<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>




<section id="section-header-block_ab1bd86c7df1ded2e1636fd029c8db50" class="lf-block__section-header">
  <div class="acf-innerblocks-container">

<div class="wp-block-columns lf-row is-layout-flex wp-container-10 wp-block-columns-is-layout-flex">
<div class="wp-block-column lf-left-column is-layout-flow wp-block-column-is-layout-flow">
<h2 class="is-style-title-md has-slate-color has-text-color wp-block-heading">Transform your business for the better</h2>
</div>



<div class="wp-block-column lf-right-column is-layout-flow wp-block-column-is-layout-flow">
<p class="is-style-body-lg has-zinc-color has-text-color">Choose your business type to see <br>what our resources, leadership, and community can do for you.</p>
</div>
</div>

</div>
</section>

<div class="lf-block--wide-card-group alignfull" data-has-odd-children>
  <div class="acf-innerblocks-container">

<a href="https://liftoff.io/marketer/" target="_self" class="lf-card-persona">
  <div class="lf-card-persona__content">
    <div class="top-section" style="background-color: #FFCB05">
              <img decoding="async" src="https://liftoff.io/wp-content/uploads/2022/10/Lightbulb.svg" alt=""></img>
                    <div class="tag">I&#8217;M A MARKETER</div>
          </div>
    <span class="subtitle">Find new users with programmatic ads</span>
          <div class="wp-block-button is-style-arrow-link card-link">
        <div class="wp-block-button__link">
        </div>
      </div>
      </div>
</a>


<a href="https://liftoff.io/publisher/" target="_self" class="lf-card-persona">
  <div class="lf-card-persona__content">
    <div class="top-section" style="background-color: #555fff">
              <img decoding="async" src="https://liftoff.io/wp-content/uploads/2022/10/coins.svg" alt=""></img>
                    <div class="tag">I&#8217;M AN APP PUBLISHER</div>
          </div>
    <span class="subtitle">Find new ways to monetize your app</span>
          <div class="wp-block-button is-style-arrow-link card-link">
        <div class="wp-block-button__link">
        </div>
      </div>
      </div>
</a>


<a href="https://liftoff.io/dsp/" target="_self" class="lf-card-persona">
  <div class="lf-card-persona__content">
    <div class="top-section" style="background-color: #0096FA">
              <img decoding="async" src="https://liftoff.io/wp-content/uploads/2022/10/Globe.svg" alt=""></img>
                    <div class="tag">I&#8217;M A DSP</div>
          </div>
    <span class="subtitle">Increase access to quality inventory that delivers results</span>
          <div class="wp-block-button is-style-arrow-link card-link">
        <div class="wp-block-button__link">
        </div>
      </div>
      </div>
</a>


<a href="https://liftoff.io/gaming/" target="_self" class="lf-card-persona">
  <div class="lf-card-persona__content">
    <div class="top-section" style="background-color: #1caa53">
              <img decoding="async" src="https://liftoff.io/wp-content/uploads/2022/10/Puzzlepiece.svg" alt=""></img>
                    <div class="tag">I&#8217;M A MOBILE GAME DEVELOPER</div>
          </div>
    <span class="subtitle">Build games your users will love</span>
          <div class="wp-block-button is-style-arrow-link card-link">
        <div class="wp-block-button__link">
        </div>
      </div>
      </div>
</a>


<a href="https://liftoff.io/agency/" target="_self" class="lf-card-persona">
  <div class="lf-card-persona__content">
    <div class="top-section" style="background-color: #9f1cba">
              <img decoding="async" src="https://liftoff.io/wp-content/uploads/2022/10/Megaphone.svg" alt=""></img>
                    <div class="tag">I WORK FOR AN AGENCY</div>
          </div>
    <span class="subtitle">Support your client’s campaign needs</span>
          <div class="wp-block-button is-style-arrow-link card-link">
        <div class="wp-block-button__link">
        </div>
      </div>
      </div>
</a>
</div></div>


<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>


<section class="lf-block--split is-style-image-right alignfull has-background has-new-sky-background-color has-text-color has-ebony-color">
  <div class="acf-innerblocks-container">


<div class="lf-block__split--graphic-area">
  <div class="acf-innerblocks-container">
<figure id="image-scene-block_926b0968e3abebf845b2486a7fceefe2" class="lf-block--image-scene"  data-has-background="true" data-has-foreground="false" data-has-foreground-stroke="false" data-foreground-margin="none" data-foreground-rounded-corners="off" data-vertical-fill="tablet">
      <video class="lf-block--image-scene__background" src="https://liftoff.io/wp-content/uploads/2022/10/Rocketship-v2.mp4" autoplay muted playsinline loop></video>
    <div class="lf-block--image-scene__foreground-container">
      </div>
</figure>
</div>
</div>



<div class="lf-block__split--text-area">
  <div class="acf-innerblocks-container">

<h2 class="is-style-title-lg has-white-color has-text-color wp-block-heading">Ready for Liftoff? Getting started is easy.</h2>



<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button is-style-inverted"><a class="wp-block-button__link" href="https://info.liftoff.io/get-started/">Let&#8217;s Do It</a></div>
</div>

</div>
</div>
</div>
</section>  </main>

<footer>
  <div id="lf-footer">
  <div class="footer-container lf-container">
    <div class="top-container">
      <div class="brand-logo-container">
        <a href="https://liftoff.io/">
          <img src="https://liftoff.io/wp-content/themes/liftoff/assets/icons/liftoff-logo-black.svg" alt="Liftoff" width="86" height="31" />
        </a>
      </div>
    </div>
    <div class="middle-container lf-row">
      <div class="lf-footer-desktop__contact-container">
        <p class="eyebrow">
           Stay up to date with news and tips from our marketing experts.        </p>

        <div class="hubspot-email-input">
          <script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2.js"></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "434414",
              formId: "0bc5e290-a389-4e3b-9ae9-b3ab78d27e5d"
            });
          </script>
        </div>

                  <div class="social-icons-container">
                                        <a href="https://www.linkedin.com/company/liftoffmobile/" target="_blank" rel="noreferrer" title="LinkedIn" class="li"></a>
                                        <a href="https://twitter.com/liftoffmobile" target="_blank" rel="noreferrer" title="Twitter" class="tw"></a>
                                        <a href="https://www.facebook.com/liftoff.io/" target="_blank" rel="noreferrer" title="Facebook" class="fb"></a>
                                        <a href="https://www.youtube.com/channel/UC1FKIraohbFSDlOnSHpVRzg" target="_blank" rel="noreferrer" title="YouTube" class="yt"></a>
                      </div>
              </div>

      <div class="lf-footer-desktop__link-container">
                              <div>

                              <h3>
                  <a href="https://liftoff.io/products/" target="_self">Solutions</a>
                </h3>
              
              <ul>
                                  <li>
                                          <a href="https://liftoff.io/marketer/" target="_self">Marketers</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/agency/" target="_self">Agencies</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/dsp/" target="_self">DSPs</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/publisher/" target="_self">Publishers</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/gaming/" target="_self">Mobile Gaming</a>
                                      </li>
                              </ul>
            </div>
                      <div>

                              <h3>
                  <a href="https://liftoff.io/products/" target="_self">Products</a>
                </h3>
              
              <ul>
                                  <li>
                                          <a href="https://liftoff.io/accelerate/" target="_self">Accelerate</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/monetize/" target="_self">Monetize</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/creative-studio/" target="_self">Creative Studio</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/direct/" target="_self">Direct</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/influence/" target="_self">Influence</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/intelligence/" target="_self">Gaming Intelligence</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/exchange/" target="_self">Vungle Exchange</a>
                                      </li>
                              </ul>
            </div>
                      <div>

                              <h3>
                  <a href="https://liftoff.io/resources/" target="_self">Resources</a>
                </h3>
              
              <ul>
                                  <li>
                                          <a href="https://liftoff.io/help/" target="_self">Help Center</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=post" target="_self">Blog</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=casestudy" target="_self">Case Studies</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=event" target="_self">Events</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=report" target="_self">Guides &amp; Reports</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=podcast" target="_self">Podcasts</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/resources/?type=webinar" target="_self">Webinars</a>
                                      </li>
                                  <li>
                                          <a href="https://www.mobileheroes.io/" target="_blank">Mobile Heroes</a>
                                      </li>
                              </ul>
            </div>
                      <div>

                              <h3>
                  <a href="https://liftoff.io/company/" target="_self">Company</a>
                </h3>
              
              <ul>
                                  <li>
                                          <a href="https://liftoff.io/company/" target="_self">About Us</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/company/careers/" target="_self">Careers</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/company/contact-us/" target="_self">Contact Us</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/login/" target="_self">Log In</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/brand-guidelines/" target="_self">Brand Guidelines</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/company/liftoff-gives/" target="_self">Liftoff Gives</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/privacy-policy/" target="_self">Privacy</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/terms-of-service/" target="_self">Terms</a>
                                      </li>
                                  <li>
                                          <a href="https://liftoff.io/opt-out/" target="_self">Opt-Out</a>
                                      </li>
                              </ul>
            </div>
                        </div>

      <div class="lf-accordion-container lf-col-sm-4">
        <div class="lf-accordion-header">
    <button>
                Solutions    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                                <a href="https://liftoff.io/marketer/"> 
                                    Marketers
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/agency/"> 
                                    Agencies
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/dsp/"> 
                                    DSPs
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/publisher/"> 
                                    Publishers
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/gaming/"> 
                                    Mobile Gaming
                                </a>
                            </div></div>  

<div class="lf-accordion-header">
    <button>
                Products    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                                <a href="https://liftoff.io/accelerate/"> 
                                    Accelerate
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/monetize/"> 
                                    Monetize
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/creative-studio/"> 
                                    Creative Studio
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/direct/"> 
                                    Direct
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/influence/"> 
                                    Influence
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/intelligence/"> 
                                    Gaming Intelligence
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/exchange/"> 
                                    Vungle Exchange
                                </a>
                            </div></div>  

<div class="lf-accordion-header">
    <button>
                Resources    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                                <a href="https://liftoff.io/help/"> 
                                    Help Center
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=post"> 
                                    Blog
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=casestudy"> 
                                    Case Studies
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=event"> 
                                    Events
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=report"> 
                                    Guides & Reports
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=podcast"> 
                                    Podcasts
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/resources/?type=webinar"> 
                                    Webinars
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://www.mobileheroes.io/"> 
                                    Mobile Heroes
                                </a>
                            </div></div>  

<div class="lf-accordion-header">
    <button>
                Company    </button>
</div>
<div class="lf-accordion-content ">
    <div class="lf-no-indented-level">
                                <a href="https://liftoff.io/company/"> 
                                    About Us
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/company/careers/"> 
                                    Careers
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/company/contact-us/"> 
                                    Contact Us
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/login/"> 
                                    Log In
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/brand-guidelines/"> 
                                    Brand Guidelines
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/company/liftoff-gives/"> 
                                    Liftoff Gives
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/privacy-policy/"> 
                                    Privacy
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/terms-of-service/"> 
                                    Terms
                                </a>
                            </div><div class="lf-no-indented-level">
                                <a href="https://liftoff.io/opt-out/"> 
                                    Opt-Out
                                </a>
                            </div></div>  

      </div>


    </div>
    <div class="bottom-container">
      <h6 class="company lf-col-lg-12">
        © 2024 Liftoff, Inc.      </h6>
    </div>
  </div>
</div></footer>


<!-- Consent Management powered by Complianz | GDPR/CCPA Cookie Consent https://wordpress.org/plugins/complianz-gdpr -->
<div id="cmplz-cookiebanner-container"><div class="cmplz-cookiebanner cmplz-hidden banner-1 optin cmplz-bottom cmplz-categories-type-no" aria-modal="true" data-nosnippet="true" role="dialog" aria-live="polite" aria-labelledby="cmplz-header-1-optin" aria-describedby="cmplz-message-1-optin">
	<div class="cmplz-header">
		<div class="cmplz-logo"></div>
		<div class="cmplz-title" id="cmplz-header-1-optin">This site uses cookies</div>
		<div class="cmplz-close" tabindex="0" role="button" aria-label="close-dialog">
			<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
		</div>
	</div>

	<div class="cmplz-divider cmplz-divider-header"></div>
	<div class="cmplz-body">
		<div class="cmplz-message" id="cmplz-message-1-optin">We use cookies to improve your experience on our site and offer you the most relevant information. Please accept cookies for an optimal experience. To learn more about how we use cookies, see our <a href="https://liftoff.io/cookie-policy/">Cookie Policy</a>.</div>
		<!-- categories start -->
		<div class="cmplz-categories">
			<details class="cmplz-category cmplz-functional" >
				<summary>
						<span class="cmplz-category-header">
							<span class="cmplz-category-title">Functional</span>
							<span class='cmplz-always-active'>
								<span class="cmplz-banner-checkbox">
									<input type="checkbox"
										   id="cmplz-functional-optin"
										   data-category="cmplz_functional"
										   class="cmplz-consent-checkbox cmplz-functional"
										   size="40"
										   value="1"/>
									<label class="cmplz-label" for="cmplz-functional-optin" tabindex="0"><span class="screen-reader-text">Functional</span></label>
								</span>
								Always active							</span>
							<span class="cmplz-icon cmplz-open">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  height="18" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</span>
						</span>
				</summary>
				<div class="cmplz-description">
					<span class="cmplz-description-functional">The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network.</span>
				</div>
			</details>

			<details class="cmplz-category cmplz-preferences" >
				<summary>
						<span class="cmplz-category-header">
							<span class="cmplz-category-title">Preferences</span>
							<span class="cmplz-banner-checkbox">
								<input type="checkbox"
									   id="cmplz-preferences-optin"
									   data-category="cmplz_preferences"
									   class="cmplz-consent-checkbox cmplz-preferences"
									   size="40"
									   value="1"/>
								<label class="cmplz-label" for="cmplz-preferences-optin" tabindex="0"><span class="screen-reader-text">Preferences</span></label>
							</span>
							<span class="cmplz-icon cmplz-open">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  height="18" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</span>
						</span>
				</summary>
				<div class="cmplz-description">
					<span class="cmplz-description-preferences">The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user.</span>
				</div>
			</details>

			<details class="cmplz-category cmplz-statistics" >
				<summary>
						<span class="cmplz-category-header">
							<span class="cmplz-category-title">Statistics</span>
							<span class="cmplz-banner-checkbox">
								<input type="checkbox"
									   id="cmplz-statistics-optin"
									   data-category="cmplz_statistics"
									   class="cmplz-consent-checkbox cmplz-statistics"
									   size="40"
									   value="1"/>
								<label class="cmplz-label" for="cmplz-statistics-optin" tabindex="0"><span class="screen-reader-text">Statistics</span></label>
							</span>
							<span class="cmplz-icon cmplz-open">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  height="18" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</span>
						</span>
				</summary>
				<div class="cmplz-description">
					<span class="cmplz-description-statistics">The technical storage or access that is used exclusively for statistical purposes.</span>
					<span class="cmplz-description-statistics-anonymous">The technical storage or access that is used exclusively for anonymous statistical purposes. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, information stored or retrieved for this purpose alone cannot usually be used to identify you.</span>
				</div>
			</details>
			<details class="cmplz-category cmplz-marketing" >
				<summary>
						<span class="cmplz-category-header">
							<span class="cmplz-category-title">Marketing</span>
							<span class="cmplz-banner-checkbox">
								<input type="checkbox"
									   id="cmplz-marketing-optin"
									   data-category="cmplz_marketing"
									   class="cmplz-consent-checkbox cmplz-marketing"
									   size="40"
									   value="1"/>
								<label class="cmplz-label" for="cmplz-marketing-optin" tabindex="0"><span class="screen-reader-text">Marketing</span></label>
							</span>
							<span class="cmplz-icon cmplz-open">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  height="18" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</span>
						</span>
				</summary>
				<div class="cmplz-description">
					<span class="cmplz-description-marketing">The technical storage or access is required to create user profiles to send advertising, or to track the user on a website or across several websites for similar marketing purposes.</span>
				</div>
			</details>
		</div><!-- categories end -->
			</div>

	<div class="cmplz-links cmplz-information">
		<a class="cmplz-link cmplz-manage-options cookie-statement" href="#" data-relative_url="#cmplz-manage-consent-container">Manage options</a>
		<a class="cmplz-link cmplz-manage-third-parties cookie-statement" href="#" data-relative_url="#cmplz-cookies-overview">Manage services</a>
		<a class="cmplz-link cmplz-manage-vendors tcf cookie-statement" href="#" data-relative_url="#cmplz-tcf-wrapper">Manage {vendor_count} vendors</a>
		<a class="cmplz-link cmplz-external cmplz-read-more-purposes tcf" target="_blank" rel="noopener noreferrer nofollow" href="https://cookiedatabase.org/tcf/purposes/">Read more about these purposes</a>
			</div>

	<div class="cmplz-divider cmplz-footer"></div>

	<div class="cmplz-buttons">
		<button class="cmplz-btn cmplz-accept">Accept</button>
		<button class="cmplz-btn cmplz-deny">Deny</button>
		<button class="cmplz-btn cmplz-view-preferences">View preferences</button>
		<button class="cmplz-btn cmplz-save-preferences">Save preferences</button>
		<a class="cmplz-btn cmplz-manage-options tcf cookie-statement" href="#" data-relative_url="#cmplz-manage-consent-container">View preferences</a>
			</div>

	<div class="cmplz-links cmplz-documents">
		<a class="cmplz-link cookie-statement" href="#" data-relative_url="">{title}</a>
		<a class="cmplz-link privacy-statement" href="#" data-relative_url="">{title}</a>
		<a class="cmplz-link impressum" href="#" data-relative_url="">{title}</a>
			</div>

</div>
</div>
					<div id="cmplz-manage-consent" data-nosnippet="true"><button class="cmplz-btn cmplz-hidden cmplz-manage-consent manage-consent-1">Manage consent</button>

</div>		<style>
			div#hs-eu-cookie-confirmation {display: none;}
		</style>
	    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', (event) => {
            const languageSwitcherMappings = {
                'ko': 'https://liftoff.io/ko/',
                'es': 'https://liftoff.io/es/',
                'pt_BR': 'https://liftoff.io/pt-br/',
                'ja': 'https://liftoff.io/ja/',
                'zh-Hans': 'https://liftoff.io/zh-hans/',
                'en': 'https://liftoff.io/',
            };
            for (const [dataCode, url] of Object.entries(languageSwitcherMappings)) {
                let languageSwitcher = document.querySelector(`[data-code="${dataCode}"]`);
                if(languageSwitcher) {
                    languageSwitcher.addEventListener('click', (event) => {
                        event.preventDefault();
                        window.location.href = url;
                    });
                }
            }
        });
    </script>
    <style id='core-block-supports-inline-css' type='text/css'>
.wp-container-10.wp-container-10{flex-wrap:nowrap;}
</style>
<script type='text/javascript' id='leadin-script-loader-js-js-extra'>
/* <![CDATA[ */
var leadin_wordpress = {"userRole":"visitor","pageType":"page","leadinPluginVersion":"10.2.17"};
/* ]]> */
</script>
<script type='text/javascript' src='https://js.hs-scripts.com/434414.js?integration=WordPress&#038;ver=10.2.17' async defer id='hs-script-loader'></script>
<script type='text/javascript' src='https://liftoff.io/wp-content/themes/liftoff/language-redirect.js' id='language-redirect-js'></script>
<script type='text/javascript' id='cmplz-cookiebanner-js-extra'>
/* <![CDATA[ */
var complianz = {"prefix":"cmplz_","user_banner_id":"1","set_cookies":[],"block_ajax_content":"","banner_version":"18","version":"6.5.6","store_consent":"","do_not_track_enabled":"","consenttype":"optin","region":"eu","geoip":"","dismiss_timeout":"","disable_cookiebanner":"","soft_cookiewall":"","dismiss_on_scroll":"","cookie_expiry":"365","url":"https:\/\/liftoff.io\/wp-json\/complianz\/v1\/","locale":"lang=en&locale=en_US","set_cookies_on_root":"","cookie_domain":"","current_policy_id":"16","cookie_path":"\/","categories":{"statistics":"statistics","marketing":"marketing"},"tcf_active":"","placeholdertext":"Click to accept {category} cookies and enable this content","aria_label":"Click to accept {category} cookies and enable this content","css_file":"https:\/\/liftoff.io\/wp-content\/uploads\/complianz\/css\/banner-{banner_id}-{type}.css?v=18","page_links":{"eu":{"cookie-statement":{"title":"Cookie Policy","url":"https:\/\/liftoff.io\/cookie-policy\/"},"privacy-statement":{"title":"Privacy Policy","url":"https:\/\/liftoff.io\/privacy-policy\/"}}},"tm_categories":"1","forceEnableStats":"","preview":"","clean_cookies":""};
/* ]]> */
</script>
<script defer type='text/javascript' src='https://liftoff.io/wp-content/plugins/complianz-gdpr/cookiebanner/js/complianz.min.js?ver=6.5.6' id='cmplz-cookiebanner-js'></script>
<script id="cmplz-cookiebanner-js-after" type="text/javascript">
		
			document.addEventListener("cmplz_enable_category", cmplzHubspotScriptHandler);
			document.addEventListener("cmplz_status_change_service", cmplzHubspotScriptHandler);
			document.addEventListener("cmplz_status_change", cmplzHubspotScriptHandler);
			function cmplzHubspotScriptHandler(consentData) {
				let hubspotAcceptBtn = document.getElementById("hs-eu-confirmation-button");
				let hubspotDeclinetBtn = document.getElementById("hs-eu-decline-button");
				if ( consentData.detail.category === 'marketing' ) {
					if ( hubspotAcceptBtn != null ) {
						hubspotAcceptBtn.click();
					}
				} else {
					if ( hubspotDeclinetBtn != null && !consentData.detail.categories.includes("marketing") ) {
						hubspotDeclinetBtn.click();
					}
				}
				// if ( hubspotAcceptBtn ) {
				// 	hubspotAcceptBtn.parentNode.removeChild(hubspotAcceptBtn);
				// }
			}
		
		
</script>

</body>

</html>