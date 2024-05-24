/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
!this,();
//# sourceMappingURL=purify.min.js.map;
(function() {
    if ($('.filtered_content').length) {
        //Global
        const $menu_togglers = $('.menu_toggler');
        var filters = {};
        const pills = [];
        var data = null;
        const post_type = $('.filtered_content').attr('data-pt');
        let $clearBtn = $('.filter-list-clear');
        const template = $('.filtered_content').attr('data-template');
        const per_page = $('.filtered_content').attr('data-per-page');
        const $loadMoreBtn = $('#filterLoadMore');
        
        //TODO: Populate first call filters

        if (template === 'single-filter') {
            let first_button = document.querySelector('.filters_single_taxonomy button:first-child');
            var id = first_button.getAttribute('term_id');
            let taxonomy = first_button.getAttribute('tax_name');
            filters = {
                [taxonomy]: [
                    id
                ]
            }
        }

        api_call(filters);

        //< EVENTS FIRE >
        $menu_togglers.on('click', function() {
            $(this).toggleClass('active');
            $(this).parent().siblings().find('.menu_toggler').removeClass('active');
        })

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('filter_trigger')) {
                $('#loadMore').css('visibliy', 'hidden');
                firing_filtering(e);
            }
        }, false);
        //< / EVENTS FIRE >

        function firing_filtering(event) {
            if (event) {
                let button = $(event.target);
                let action = button.attr('data-action');
                let term_id = button.attr('term_id');
                let term_name = button.attr('term_name');
                let tax_name = button.attr('tax_name');
                let contentRefresh = true;
                let loadMore = false;

                // Validate action (add, remove, clear (default))
                switch(action) {
                    case 'add':
                        button.attr('data-action', 'remove');
                        
                        //when we want to only filter by one at a time all siblings will deativate (action will allow to add again)
                        if (template === 'single-filter') {
                            //all data-action=remove on siblings is converted to add (deactivation)
                            $(button).parent().siblings().find('button').attr('data-action', 'add');
                            
                            refresh_term_info($(button).attr('term_id'));
                        }

                        if (filters[tax_name] === undefined) {
                            //Add the taxonomy to the filters if it doesn't exist
                            filters[tax_name] = [term_id];
                        } else if(filters[tax_name]) {
                            //Add the term id on an existing taxonomy filter IF is not already there
                            if (filters[tax_name].indexOf(term_id) === -1) {
                                switch (template) {
                                    case 'single-filter':
                                        filters[tax_name] = [term_id];
                                        break;
                                    default:
                                        //default is filtering with more than one item
                                    filters[tax_name].push(term_id);
                                }
                            } else {
                                //Don't call the api if the filter has already been applied.
                                contentRefresh = false;
                            }
                        }

                        refresh_pills(action, term_id, term_name); //term_id = pill data_id

                        $clearBtn.removeClass('invisible');
                        $clearBtn.addClass('visible');

                        break;

                    case 'remove':
                        if (template === 'single-filter') {
                            contentRefresh = false;
                        } else {
                            button.attr('data-action', 'add');
                            let temp_id = button.attr('term_id');

                            if (temp_id && temp_id !== '') {
                                $(`.filters-wrapper button[term_id=${term_id}]`).attr('data-action', 'add');
                            }

                            //filters remove
                            let keysValues = Object.keys(filters);

                            keysValues.forEach((key, index) => {
                                let termIndex = filters[key].indexOf(term_id);

                                if (termIndex !== -1) {
                                    filters[key].splice(termIndex, 1);
                                }
                            });

                            refresh_pills(action, term_id); //term_id = pill data_id
                            contentRefresh = true;
                        }
                        break;
                    case 'loadMore':
                        loadMore = true;

                        break;
                    default: // clear
                        filters = {};
                        data = null;
                        $clearBtn.addClass('invisible');
                }
                
                $menu_togglers.removeClass('active');

                if (contentRefresh) {
                    api_call(filters, loadMore);
                }
            }
        }

        function request_url_construction(filters, page) {
            let keysValues = Object.keys(filters);
            let query = '';
            let siteLocation = document.location.origin;
            let endpoint_subdirectory = `wp-json/filtered/&pt=${post_type}&filters`;

            if (!page) {
                page = 1;
            }

            //Query generation
            keysValues.forEach((key, index) => {
                if (filters[key].length > 0) {
                    query += `[${key}-${filters[key]}]`;
                }
            });

            //validation to hide filter section
            if (query === '') {
                query = 'all';
                $('.filter-list').remove();
                $('[data-action="remove"]').attr('data-action', 'add');
            }

            return `${siteLocation}/${endpoint_subdirectory}=${query}&per_page=${per_page}&page=${page}`;
        }

        function api_call(filters, loadMore) {
            let url;
            let page;
            
            if (!loadMore) {
                refresh_content('loading');
                url = request_url_construction(filters);
                $loadMoreBtn.attr('data-page', 1);
            } else {
                page = Number($loadMoreBtn.attr('data-page'));

                if (!isNaN(page)) {
                    //increase page
                    page = Number(page) + 1;
                }

                $loadMoreBtn.text('Loading');
                url = request_url_construction(filters, page);
                $loadMoreBtn.attr('data-page', page);
            }

            $.getJSON( url, function( data ) {
                refresh_content(data, loadMore);
                $loadMoreBtn.text('Show more');
                
                if (!data.next.length) {
                    $('#loadMore').css('visibliy', 'hidden');
                } else {
                    $('#loadMore').css('visibliy', 'visible');
                }
            });
        }

        function refresh_pills(action, term_id, term_name) {
            let pills_cont = $('#pills_cont');
            let items;

            switch (action) {
                case 'add':
                    pills_cont.append(`
                    <span class="filter-list new" id=${term_id} >
                        ${term_name}
                        <i 
                            class="bi bi-x filter_trigger rounded-circle blue-circle-icon-filters"
                            data-action="remove"
                            term_id="${term_id}"
                        ></i>
                    </span>`);
                    break;
                default:
                    let $pill = pills_cont.find(`#${term_id}`);

                    if($pill && $pill.length) {
                        $pill.remove();
                    }
            }

            if (pills_cont.find('span').length === 1) {
                $clearBtn.addClass('invisible');
                $clearBtn.removeClass('visible');
            }

            setTimeout( 1500)
        }

        function refresh_content(data, loadMore) {
            let container = document.getElementById('content_container');
            let cards = '';

            //======> IDENTIFY HERE IF IS LOADING MORE
            if (data === 'loading') {
                container.innerHTML = DOMPurify.sanitize('<h2 class="loadingTitle w-100">Loading</h2>');
                
            } else if(data.current && data.current.length) {
                let newCardsHTML = '';

                if (!data.next.length) {
                    $('#loadMore').css('visibility', 'hidden');
                } else {
                    $('#loadMore').css('visibility', 'visible');
                }

                data.current.forEach(card => {
                    //TODO: change for a switch

                    //TODO: CLEAN CLASSES OF ANIMATION AFTER RENDER FOR ANIMATION ON NEW ITEMS ONLY
                    if (post_type === 'brands') {
                        newCardsHTML += `<article class="col">
                        <div class="card semantic_card w-100 h-100 brand-card">
                            <a href="${card.link}" rel="nofollow" class="d-block">
                                <figure class="m-0 brand-card-img ">
                                    <img src="${card.image}" class="card-img-top">
                                </figure>
                            </a>
                            <div class="card-body d-flex flex-column">
                            <p class="card-text">${card.excerpt}</p>
                        </div>
                        </div>
                    </article>`;
                    } else if (post_type === 'digital_media_assets') {
                        newCardsHTML += `<article class="col">
                        <div class="card filtered_card">
                            <a href="${card.link}">
                                <figure>
                                    <img src="${card.image}" alt="device UI card image">
                                </figure>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${card.post_title}</h5>
                                <p class="card-text">${card.excerpt}</p>
                            </div>
                        </div>
                    </article>`
                    } else if (post_type === 'podcasts') {
                        newCardsHTML += `<article class="col">
                        <div class="card filtered_card">
                            <a href="${card.link}">
                                <figure>
                                    ${card.image ? `<img src="${card.image}" alt="card image">` : ''}
                                </figure>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${card.post_title}</h5>
                                <p class="card-text">${card.excerpt}</p>
                            </div>
                            <footer class="p-3 pt-0">
                                <a href="${card.link}">Learn more</a>
                            </footer>
                        </div>
                    </article>`
                    }
                });

                if (loadMore) {
                    container.innerHTML += DOMPurify.sanitize(newCardsHTML);
                } else {
                    container.innerHTML = DOMPurify.sanitize(newCardsHTML);
                }
            } else {
                container.innerHTML = DOMPurify.sanitize('<h2 class="loadingTitle w-100">No items found.</h2>');
            }
        }

        function refresh_term_info(id) {
            let $item = $(`#cat_info_${id}`);

            if (!$item.hasClass('active')) {
                $item.siblings().removeClass('active');
                $item.addClass('active');
            }
        }
    }
    //end global if
})(jQuery);;
"object"==typeof navigator&&this,(function(){"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}a={addCSS:!0,thumbWidth:15,watch:!0};ar o=r=c=h=function(e){return o(e)===Object},u=d=function(e){return Array.isArray(e)},m=function(e){return r(e,NodeList)},p=u,g=d,f=m,b=function(e){return r(e,Element)},y=v=ar T=);const k=C=A=S=e=>k(e)===Object,E=e=>k(e)===String,P=e=>k(e)===Function,N=x=e=>C(e,NodeList),M=var I=A,L=S,$=_=E,O=j=P,q=N,D=x,H=F=e=>C(e,Event),R=V=B=U=W=M;const z=(();onst Y={isIE:Boolean(window.document.documentMode),isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||/(iPad|iPhone|iPod)/gi.test(navigator.platform)};{return this.elements.container.querySelectorAll(e)}nst de={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},me={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),checkpip:!(Y.isIPhone||!j(Z("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||Z("video").disablePictureInPicture)),airplay:j(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mimetextTracks:"textTracks"in document.createElement("video"),rangeInput:((),touch:"ontouchstart"in document.documentElement,transitions:!1!==z,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},pe=(();unction fe(e,t="",i,s=!0,n=!1){ge.call(this,e,t,i,!0,s,n)}[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce((,{}); Le={getSourcesgetQualityOptionssetupcancelRequests;onst _e=Oe=nst De={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},He={get;st Be=onst We={getIconUrlfindElementscreateIconcreateLabelcreateBadgecreateButtoncreateRangecreateProgresscreateTimebindMenuItemShortcutscreateMenuItemformatTimeupdateTimeDisplayupdateVolumesetRangeupdateProgressupdateRangeFillupdateSeekTooltiptimeUpdatedurationUpdatetoggleMenuButtonupdateSettinggetLabelsetQualityMenusetCaptionsMenusetSpeedMenucheckMenufocusFirstMenuItemtoggleMenugetMenuSizeshowMenuPanelsetDownloadUrlcreateinject;nst Ye={setupupdatetogglesetsetLanguagegetTracksfindTrackgetCurrentTrackgetLabelupdateCues,Qe={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.6.9/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1}},Xe="picture-in-picture",Je="inline",Ge={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ze="audio",et="video";const tt=()=>{};lass st{={addStyleHooktoggleNativeControlsbuildsetTitletogglePostersetPostercheckPlayingcheckLoadingtoggleControlsmigrateStyles;class lt{constructor(t){e(this,"firstTouch",(),e(this,"setTabFocus",(),e(this,"global",(),e(this,"container",(),e(this,"media",(),e(this,"proxy",(),e(this,"bind",(),e(this,"controls",(),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ot=();unction ct(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,ve.call(this,this.media,e?"play":"pause"))}const ht={setupready(){const e=this,t=e.config.vimeo,{premium:i,referrerPolicy:s,...n}=t;let a=e.media.getAttribute("src"),l="";W(a)?(a=e.media.getAttribute(e.config.attributes.embed.id),l=e.media.getAttribute(e.config.attributes.embed.hash)):l=a);const o=l?{h:l}:{};i&&Object.assign(n,{controls:!1,sidedock:!1});const r=Ke({loop:e.config.loop.active,autoplay:e.autoplay,muted:e.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative,...o,...n}),c=W(h=a)?null:$(Number(h))?h:h.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:h;var h;const u=Z("iframe"),d=$e(e.config.urls.vimeo.iframe,c,r);if(u.setAttribute("src",d),u.setAttribute("allowfullscreen",""),u.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),W(s)||u.setAttribute("referrerPolicy",s),i||!t.customControls)u.setAttribute("data-poster",e.poster),e.media=se(u,e.media);else{const t=Z("div",{class:e.config.classNames.embedContainer,"data-poster":e.poster});t.appendChild(u),e.media=se(t,e.media)}t.customControls||Re($e(e.config.urls.vimeo.api,d)).then((),e.embed=new window.Vimeo.Player(u,{autopause:e.config.autopause,muted:e.muted}),e.media.paused=!0,e.media.currentTime=0,e.supported.ui&&e.embed.disableTextTrack(),e.media.play=()=>(ct.call(e,!0),e.embed.play()),e.media.pause=e.media.stop=let{currentTime:m}=e.media;Object.defineProperty(e.media,"currentTime",{get:()=>m,set);let p=e.config.speed.selected;Object.defineProperty(e.media,"playbackRate",{get:()=>p,set);let{volume:g}=e.config;Object.defineProperty(e.media,"volume",{get:()=>g,set);let{muted:f}=e.config;Object.defineProperty(e.media,"muted",{get:()=>f,set);let b,{loop:y}=e.config;Object.defineProperty(e.media,"loop",{get:()=>y,set),e.embed.getVideoUrl().then(().catch((),Object.defineProperty(e.media,"currentSrc",{get:()=>b}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration}),Promise.all([e.embed.getVideoWidth(),e.embed.getVideoHeight()]).then((),e.embed.setAutopause(e.config.autopause).then((),e.embed.getVideoTitle().then((),e.embed.getCurrentTime().then((),e.embed.getDuration().then((t=>{e.media.duration=t,ve.call(e,e.media,"durationchange")})),e.embed.getTextTracks().then((),e.embed.on("cuechange",(),e.embed.on("loaded",(),e.embed.on("bufferstart",(()=>{ve.call(e,e.media,"waiting")})),e.embed.on("bufferend",(()=>{ve.call(e,e.media,"playing")})),e.embed.on("play",(),e.embed.on("pause",(),e.embed.on("timeupdate",(),e.embed.on("progress",(),e.embed.on("seeked",(()=>{e.media.seeking=!1,ve.call(e,e.media,"seeked")})),e.embed.on("ended",(),e.embed.on("error",(),t.customControls&&setTimeout((()=>at.build.call(e)),0)}};nst mt={setupgetTitleready,pt={setup;onst ft=bt=onst vt={insertElementschange;class wt{et isHTML5(){return this.provider===Ge.html5}et isYouTube(){return this.provider===Ge.youtube}et isVideo(){return this.type===et}t paused(){return Boolean(this.media.paused)}et ended(){return Boolean(this.media.ended)}et currentTime(){return Number(this.media.currentTime)}et seeking(){return Boolean(this.media.seeking)}t volume(){return Number(this.media.volume)}et muted(){return Boolean(this.media.muted)}t speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}t quality(){return this.media.quality}et loop(){return Boolean(this.media.loop)}ions(e){Ye.toggle.call(this,e,!1)}turn wt.defaults=(Tt=Qe,JSON.parse(JSON.stringify(Tt))),wt}));;
"use strict";

(function ($) {
  var card = $(".team-tiles .card");
  var modal = $("#aboutProfiles"); // bootstrap event for closing modal

  if (modal) {
    modal.on("hidden.bs.modal", ;
  } // clean up the modal HTML


  var clearHTML = function clearHTML() {
    modal.find(".content-left img").attr("src", "");
    modal.find("h3").html("");
    modal.find("h4").html("");
    modal.find(".modal-main-content").html("");
    modal.find(".modal-subtitle span").html(""); // twitter

    modal.find(".social-sharing li:nth-child(1) a").attr("href", "");
    modal.find(".social-sharing li:nth-child(1) span").html("");
    modal.find(".social-sharing li:nth-child(1)").addClass("d-none"); // linkedin

    modal.find(".social-sharing li:nth-child(2) a").attr("href", "");
    modal.find(".social-sharing li:nth-child(2) span").html("");
    modal.find(".social-sharing li:nth-child(2)").addClass("d-none"); // facebook

    modal.find(".social-sharing li:nth-child(3) a").attr("href", "");
    modal.find(".social-sharing li:nth-child(3) span").html("");
    modal.find(".social-sharing li:nth-child(3)").addClass("d-none"); // instagram

    modal.find(".social-sharing li:nth-child(4) a").attr("href", "");
    modal.find(".social-sharing li:nth-child(4) span").html("");
    modal.find(".social-sharing li:nth-child(4)").addClass("d-none");
  }; // populates modal with card info


  var cardClick = function cardClick() {
    card.on("click", function (e) {
      var card = $(e.target).parent();
      var cardImg = card.find(".card-img-top").attr("src");
      var cardTitle = card.find(".card-title").html();
      var cardSubTitle = card.find(".card-subTitle").html();
      var cardText = card.find(".modal-mainContent").html();
      var twitterInfo = card.find(".twitter-info").children();
      var linkedInInfo = card.find(".linkedin-info").children();
      var facebookInfo = card.find(".facebook-info").children();
      var instagramInfo = card.find(".instagram-info").children();
      var modalReachTitle = modal.find(".modal-subtitle");
      modal.find(".content-left img").attr("src", cardImg);
      modal.find("h3").html(cardTitle);
      modal.find("h4").html(cardSubTitle);
      modal.find(".modal-main-content").html(cardText);
      modal.find(".modal-subtitle span").html(cardTitle);

      if (twitterInfo.length > 0 || linkedInInfo.length > 0 || facebookInfo.length > 0 || instagramInfo.length > 0) {
        modalReachTitle.removeClass("d-none");
      }

      if (twitterInfo.length == 0 && linkedInInfo.length == 0 && facebookInfo.length == 0 && instagramInfo.length == 0) {
        modalReachTitle.addClass("d-none");
      }

      if (twitterInfo.length > 0) {
        // twitter
        modal.find(".social-sharing li.modal-twitter a").attr("href", $(twitterInfo[0]).html());
        modal.find(".social-sharing li.modal-twitter span").html($(twitterInfo[1]).html());
        modal.find(".social-sharing li.modal-twitter").removeClass("d-none");
      }

      if (linkedInInfo.length > 0) {
        // linkedin
        modal.find(".social-sharing li.modal-linkedin a").attr("href", $(linkedInInfo[0]).html());
        modal.find(".social-sharing li.modal-linkedin span").html($(linkedInInfo[1]).html());
        modal.find(".social-sharing li.modal-linkedin").removeClass("d-none");
      }

      if (facebookInfo.length > 0) {
        // facebook
        modal.find(".social-sharing li.modal-facebook a").attr("href", $(facebookInfo[0]).html());
        modal.find(".social-sharing li.modal-facebook span").html($(facebookInfo[1]).html());
        modal.find(".social-sharing li.modal-facebook").removeClass("d-none");
      }

      if (instagramInfo.length > 0) {
        // instagram
        modal.find(".social-sharing li.modal-instagram a").attr("href", $(instagramInfo[0]).html());
        modal.find(".social-sharing li.modal-instagram span").html($(instagramInfo[1]).html());
        modal.find(".social-sharing li.modal-instagram").removeClass("d-none");
      }
    });
  };

  cardClick();
})(jQuery);
"use strict";

(function ($) {
  var accordions = $(".senid_accordion");

  if (accordions.length) {
    // ========> Functions ==
    var accordion = function accordion() {
      accordions.each(function () {
        var accordion = $(this);
        var bellows = accordion.find(".bellows");
        var static_content = accordion.find(".static_content");
        var bellowsAmount = bellows.find(" > section").length;
        var bellowsArea = 35 * bellowsAmount;
        static_content.css({
          "padding-left": "".concat(bellowsArea, "px")
        });
        bellows.animate({
          right: "-".concat(bellowsArea, "px")
        });
        var togglers = accordion.find(".toggler");

        if (togglers.length) {
          togglers.each(function () {
            var toggler = $(this); // Button click

            toggler.on("click", function () {
              var parent = toggler.parent();
              var parentActive = parent.hasClass("active");

              if (!parentActive) {
                //Activate
                toggler.closest(".bellows").animate({
                  right: "-100%"
                });
                parent.animate({
                  width: "100%"
                });
                parent.siblings().animate({
                  width: "6px"
                }); // Class will be null if animation isn't finished

                setTimeout( 600);
              } else {
                //Deactivate
                toggler.closest(".bellows").animate({
                  right: "-".concat(bellowsArea, "px")
                });
                parent.removeClass("active");
                parent.animate({
                  width: "35px"
                });
                parent.siblings().animate({
                  width: "35px"
                });
                toggler.closest(".bellows").animate({
                  right: "-".concat(bellowsArea, "px")
                });
              }
            });
          });
        } // END FOR EACH

      });
    };

    var acoordion_mobile = function acoordion_mobile() {
      var accordions = $(".senid_accordion");

      if (accordions.length) {
        accordions.each(function () {
          var accordion = $(this);
          var togglers = accordion.find(".toggler");

          if (togglers.length) {
            togglers.each(function () {
              var toggler = $(this);
              toggler.on("click", function () {
                toggler.next().slideToggle();
                parent.siblings().find(".content_frame").slideUp();
              });
            });
          }
        });
      }
    };

    var run_by_device = function run_by_device(viewportW) {
      //desktop
      if (viewportW >= 992) {
        accordion();
      } else {
        acoordion_mobile();
      }
    };

    var throttle = function throttle(func, limit) {
      var inThrottle;
      return 
    }; // ========== > / Functions


    //On Load functionality
    var viewportW = $(window).width();
    run_by_device(viewportW); // initial viewport

    var currentVp = $(window).width();

    if (currentVp < 992) {
      currentVp = "mobile";
    } else {
      currentVp = "desktop";
    } //
    //On resize (throttled for performance)


    $(window).on("resize", throttle(function () {
      viewportW = $(window).width();
      var newVp;

      if (viewportW < 992) {
        newVp = "mobile";
      } else {
        newVp = "desktop";
      }

      if (currentVp !== newVp) {
        setTimeout(location.reload(), 300);
      }
    }, 300));
  }
})(jQuery);
"use strict";

(function ($) {
  function showMore(element) {
    var $element = $(element);
    var $items = $element.find('.col.hide-brand');
    var $totalItems = $items.length;

    if ($totalItems < 3) {
      $element.find('.show-more').hide();
    }

    for (var i = 0; i < $totalItems; i++) {
      if (i < 3) {
        $items.removeClass('hide-brand').addClass('show-brand');
      }
    }

    ;
  }

  var showItems = function showItems() {
    $(document).ready(function () {
      var relatedBrands = $("#related-brands");
      $(relatedBrands).find(".show-more").on('click', ;
    });
  };

  showItems();
})(jQuery);
"use strict";

(function ($) {
  var carousel = document.getElementsByClassName("carousel");
  var body;
  carousel = carousel[0];

  if (carousel) {
    var data_size = carousel.getAttribute('data-size');
    console.log(data_size);

    if (data_size === 'full_page') {
      body = document.getElementsByTagName('body');
      body = body[0];
      body.classList.add('full_page_carousel');
    }

    var $jumpTos = $('.jumpToBtn');

    if ($jumpTos.length) {
      $jumpTos.on('click', function (event) {
        event.preventDefault();
        target = $(event.currentTarget.getAttribute('href'));
        target.length ? window.scrollTo(0, target[0].offsetTop) : null;
      });
    }

    carousel.addEventListener("slid.bs.carousel", function () {
      checkCarouselArrows();
    });

    var checkCarouselArrows = function checkCarouselArrows() {
      if (carousel.querySelector(".carousel-inner").firstElementChild.classList.contains("active")) {
        // Hide left arrow
        carousel.querySelector(".carousel-control").firstElementChild.classList.add("invisible"); // Show right arrow

        carousel.querySelector(".carousel-control").lastElementChild.classList.remove("invisible");
        carousel.querySelector(".carousel-control").lastElementChild.classList.add("visible");
      } else if (carousel.querySelector(".carousel-inner").lastElementChild.classList.contains("active")) {
        // Hide right arrow
        carousel.querySelector(".carousel-control").lastElementChild.classList.add("invisible"); // Show left arrow

        carousel.querySelector(".carousel-control").firstElementChild.classList.remove("invisible");
        carousel.querySelector(".carousel-control").firstElementChild.classList.add("visible");
      } else {
        // show both arrows
        var carouselControls = carousel.querySelector(".carousel-control").children;
        carouselControls[0].classList.remove("invisible");
        carouselControls[0].classList.add("visible");
        carouselControls[1].classList.remove("invisible");
        carouselControls[1].classList.add("visible");
      }
    }; // on document ready


    document.addEventListener("DOMContentLoaded", function () {
      checkCarouselArrows();
    });
    var carouselObj = new bootstrap.Carousel(carousel); // === PLAYER + CAROUSEL CONTROLS ===
    //select player for event listeners\

    var playersEls = $('.carousel video'); //events listeners

    playersEls.on('play', function () {
      carouselObj.pause();
    });
    playersEls.on('pause', function () {
      carouselObj.cycle();
    });
    playersEls.on('ended', ;
  }
})(jQuery);
"use strict";

(function ($) {
  var contactForm = $(".contact-us .inner-content form");
  var inputGroup = contactForm.find(".grunion-field-wrap");
  var formFields = inputGroup.find(".grunion-field-label");

  if (contactForm.length) {
    formFields.find("span").remove();
    inputGroup.each(function (i, group) {
      var groupName = $(group).find(".grunion-field-label");
      var formInputs = groupName.next();
      formInputs.attr("placeholder", groupName.html());
    });
  }
})(jQuery);
"use strict";

(function ($) {
  function numFormatter(numValue) {
    var test = true;

    if (test) {
      if (numValue && numValue !== NaN) {
        numValue = parseInt(numValue);
        numValue = numValue.toLocaleString();
      }

      var splited_num = numValue.toString().split(",");
      var prefix = false;

      switch (splited_num.length) {
        case 2:
          prefix = 'K';
          break;

        case 3:
          prefix = 'M';
          break;

        default:
          prefix = false;
      }

      if (prefix) {
        if (splited_num[1].substring(0, 2) == 0) {
          numValue = splited_num[0] + prefix;
        } else {
          numValue = splited_num[0] + '.' + splited_num[1].substring(0, 2) + prefix;
        }
      } else {
        numValue = splited_num[0];
      }
    }

    var num = numValue;
    return num;
  }

  ;

  function updateDropdowns(element) {
    console.log(element, "elementos");
    var reactValues = element.val().split('|');
    var crossPlatform = reactValues[0];
    var printReach = reactValues[1];
    var printDigital = reactValues[2];
    var appDigital = reactValues[3];
    $(document).find("#print-reach .rounded-circle").removeClass('gray-circle').parent().parent().show();
    $(document).find("#digital-reach .rounded-circle").removeClass('gray-circle').parent().parent().show();
    $(document).find("#app-reach .rounded-circle").removeClass('gray-circle').parent().parent().show();

    if (crossPlatform == 0) {
      $(document).find("#cross-platform .rounded-circle").addClass('gray-circle').parent().parent().hide(); //     $(document).find("#print-reach h3").text('N/A');
    }

    if (printReach == 0) {
      $(document).find("#print-reach .rounded-circle").addClass('gray-circle').parent().parent().hide(); //     $(document).find("#print-reach h3").text('N/A');
    }

    if (printDigital == 0) {
      $(document).find("#digital-reach .rounded-circle").addClass('gray-circle').parent().parent().hide(); // $(document).find("#digital-reach h3").text('N/A');
    }

    if (appDigital == 0) {
      $(document).find("#app-reach .rounded-circle").addClass('gray-circle').parent().parent().hide(); //  $(document).find("#app-reach h3").text('N/A');
    }

    $(document).find("#cross-platform h3").text(numFormatter(crossPlatform));
    $(document).find("#print-reach h3").text(numFormatter(printReach));
    $(document).find("#digital-reach h3").text(numFormatter(printDigital));
    $(document).find("#app-reach h3").text(numFormatter(appDigital));
  }

  function totalReachValues() {
    var reachList = $("#brands-total-month-reach");
    var total = 0;
    var dataTotal = 0;
    var printTotal = 0;
    var digitalTotal = 0;
    var appTotal = 0;
    var dataPrintTotal = 0;
    var dataDigitalTotal = 0;
    var dataAppTotal = 0;
    reachList.find('option').each(function () {
      dataTotal = $(this).data('total');
      printTotal = $(this).data('print');
      digitalTotal = $(this).data('digital');
      appTotal = $(this).data('app');

      if (dataTotal != "" && dataTotal > 0) {
        dataPrintTotal += Number(dataTotal);
      }

      if (printTotal != "" && printTotal > 0) {
        dataPrintTotal += Number(printTotal);
      }

      if (digitalTotal != "" && digitalTotal > 0) {
        dataDigitalTotal += Number(digitalTotal);
      }

      if (appTotal != "" && appTotal > 0) {
        dataAppTotal += Number(appTotal);
      }
    });
    $(document).find("#cross-platform h3").text(numFormatter(dataPrintTotal));
    $(document).find("#print-reach h3").text(numFormatter(dataPrintTotal));
    $(document).find("#digital-reach h3").text(numFormatter(dataDigitalTotal));
    $(document).find("#app-reach h3").text(numFormatter(dataAppTotal));
  }

  var coverageCircle = function coverageCircle() {
    $(document).ready(function () {
      var coverageContent = $('#coverage');

      if (coverageContent) {
        var coverageValues = coverageContent.find('h3');

        if (coverageValues.length > 0) {
          coverageValues.each(function () {
            if ($(this).text().length > 0 && $(this).text() != 0) {
              $(this).text(numFormatter($(this).text()));
            } else {
              $(this).parent().parent().parent().addClass('d-none');
            }
          });
        }
      }
    });
  };

  var dropdownSelected = function dropdownSelected() {
    $(document).ready(function () {
      var print_reach = $("#print-reach h3");
      var digital_reach = $("#digital-reach h3");
      var app_reach = $("#app-reach h3");
      var cross_platform = $("#cross-platform h3");
      print_reach.text(numFormatter(print_reach.text()));
      digital_reach.text(numFormatter(digital_reach.text()));
      app_reach.text(numFormatter(app_reach.text()));
      cross_platform.text(numFormatter(cross_platform.text())); //  totalReachValues();
    });
    $("select[id^=brands-total-month-reach]").change(function () {
      updateDropdowns($(this));

      if ($("#coverage-dropdown #cross-platform h3").text() == 0) {
        $("#coverage-dropdown #cross-platform").parent().hide();
      }

      if ($("#coverage-dropdown #print-reach h3").text() == 0) {
        $("#coverage-dropdown #print-reach").parent().hide();
      }

      if ($("#coverage-dropdown #digital-reach h3").text() == 0) {
        $("#coverage-dropdown #digital-reach").parent().hide();
      }

      if ($("#coverage-dropdown #app-reach h3").text() == 0) {
        $("#coverage-dropdown #app-reach").parent().hide();
      }
    });
  };

  var homeCoverage = function homeCoverage() {
    $(document).ready(function () {
      $('.home .accordion').click(function (event) {
        if ($(this).hasClass('active')) {
          var coverageContentHome = $(this).find('.home-coverage');

          if (coverageContentHome) {
            var coverageValues = coverageContentHome.find('h3');

            if (coverageValues.length > 0) {
              coverageValues.each(function () {
                $(this).text(numFormatter($(this).attr('data-number-to-format')));
              });
            }
          }
        }
      });
    });
  };

  if ($('.home .accordion').length) {
    homeCoverage();
  }

  if ($("#coverage-dropdown #cross-platform").length && $("#coverage-dropdown #print-reach").length && $("#coverage-dropdown #digital-reach").length && $("#coverage-dropdown #app-reach h3").length) {
    if ($("#coverage-dropdown #cross-platform h3").text() == 0) {
      $("#coverage-dropdown #cross-platform").parent().hide();
    }

    if ($("#coverage-dropdown #print-reach h3").text() == 0) {
      $("#coverage-dropdown #print-reach").parent().hide();
    }

    if ($("#coverage-dropdown #digital-reach h3").text() == 0) {
      $("#coverage-dropdown #digital-reach").parent().hide();
    }

    if ($("#coverage-dropdown #app-reach h3").text() == 0) {
      $("#coverage-dropdown #app-reach").parent().hide();
    }

    dropdownSelected();
  }

  if ($('#coverage').length) {
    coverageCircle();
  }
})(jQuery);
'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var buttons = document.getElementsByClassName('event-tracked');

  if (buttons) {
    Array.from(buttons).forEach(function (button) {
      button.addEventListener('click', ;
    });
  }

  function getTrackValue(button) {
    var value = button.getAttribute('data-tracking-value');

    if (value === 'chunked') {
      var network_pillar_name = button.closest('[data-pillar-name]').getAttribute('data-pillar-name');
      var brand_number = button.getAttribute('data-number-chunk');
      var brand_name = button.getAttribute('data-name-chunk');
      value = "ncactrade|home|".concat(network_pillar_name, "|").concat(brand_number, "|brand|story|").concat(brand_name);
      return value;
    } else {
      return value;
    }
  }

  function recordTrackedData(dataValue) {
    window.mready = window.mready || [];
    window.mready.push(function (metrics) {
      metrics.npv({
        events: ['event10'],
        eVar23: dataValue
      });
    });
  }
});
"use strict";

(function () {
  // SCROLL TO TOP
  var $toTopBtn = $('.scroll-top');

  if ($toTopBtn.length) {
    $toTopBtn.on('click', ;
  }

  $('.history-back').on('click', ;
})(jQuery);
"use strict";

(function ($) {
  var liveFeed = $(".live-news-feed");
  var newsFeedToggle = $(".news-feed-toggle");
  var feedShowMore = $(".feed-show-more");
  var feedExplore = $(".feed-explore");
  var newsFeed = $(".news-feed");

  var toggleClassFeeds = function toggleClassFeeds(target, cssClassName, parentClass) {
    var eTarget = $(target);
    eTarget.parents(parentClass).toggleClass(cssClassName);
  };

  if (liveFeed.length) {
    newsFeedToggle.on("click", function (e) {
      var clickTarget = $(e.target);
      toggleClassFeeds(clickTarget, "active", ".live-news-feed");

      if (clickTarget.parents(".live-news-feed").hasClass("show-more-feeds")) {
        clickTarget.parents(".live-news-feed").removeClass("show-more-feeds");
        feedShowMore.removeClass("d-none");
        feedExplore.addClass("d-none");
        $(newsFeed[0]).addClass("first");
      }
    });
    feedShowMore.on("click", function (e) {
      var clickTarget = $(e.target);
      toggleClassFeeds(clickTarget, "show-more-feeds", ".live-news-feed");
      clickTarget.parents(".news-feed-body").find(".news-feed.d-none").removeClass("d-none");
      feedShowMore.addClass("d-none");
      feedExplore.removeClass("d-none");
      newsFeed.removeClass("first");
    });
  }
})(jQuery);
"use strict";

(function ($) {
  // fadeout greetings banner
  var homeOverlay = $(".home-overlay");
  var bodyDOM = $("body");

  if (homeOverlay.length) {
    bodyDOM.addClass("overflow-hidden");
    setTimeout( 3000);
  } // home accordion


  var homeAccordion = function homeAccordion() {
    $(".accordion_item").on("click", function (e) {
      var clickTarget = $(e.target);
      var internalContainer = clickTarget.parents(".accordion-container");
      var accordWrapper = clickTarget.parents(".accordion-wrapper");
      var accordionClick = clickTarget.parents(".accordion_item"); // necessary to have animations

      if (!internalContainer.hasClass("accordion-show")) {
        internalContainer.addClass("accordion-show");
      } // check if is already active to close it


      if (accordionClick.hasClass("active") && !clickTarget.hasClass("accordion-content") && !clickTarget.parents().hasClass("accordion-content")) {
        internalContainer.removeClass("accordion-show");
        accordionClick.removeClass("active"); //TODO: Add sub category close extention
      } else {
        // open accordion
        accordWrapper.find(".accordion_item.active").removeClass("active");
        accordionClick.addClass("active");
      }
    });
  };

  homeAccordion();
})(jQuery);
"use strict";

(function ($) {
  var subMenuItems = $("#menu-main-menu-mobile .menu-item-has-children");
  subMenuItems.on("click", ;
})(jQuery);
"use strict";

(function ($) {
  var cards_main_cont = document.getElementById('cards_loader_cont');

  if (cards_main_cont) {
    var init = function init() {
      if (load_more_btn) {
        load_more_btn.innerText = 'Loading...';
      }

      loadMore();
    };

    var loadMore = function loadMore() {
      var url = "".concat(url_base, "/wp-json/related/&pt=").concat(post_type, "&per_page=").concat(per_page, "&page=").concat(page);

      if (category) {
        url = "".concat(url, "&ct=").concat(category);
      }

      if (term) {
        url = "".concat(url, "&tm=").concat(term);
      }

      if (offset) {
        url = "".concat(url, "&offset=").concat(offset);
      } // on deatil pages load related


      if (current) {
        url = url + "&current=".concat(current);
      }

      $.get(url, ;
    };

    var handleData = function handleData(data) {
      if (!data.current.length && load_more_btn) {
        load_more_btn.classList.add('d-none');
      } else {
        var date;

        if (load_more_btn) {
          if (data.next.length) {
            load_more_btn.classList.add('d-inline-block');
            load_more_btn.classList.remove('d-none');
          } else {
            load_more_btn.classList.add('d-none');
            load_more_btn.classList.remove('d-inline-block');
          }
        }

        var newHTML = '';
        data.current.forEach(function (item) {
          if (template === 'primary') {
            if (show_date === 'yes') {
              date = "<small>".concat(escapeHtml(item.formattedDate), "</small>");
            } else {
              date = '';
            }

            newHTML += "<article class=\"col d-flex my-3 new\">\n                            <div class=\"card semantic_card  w-100 h-100\">\n                                <figure class=\"m-0\">\n                                    ".concat(item.thumbnail !== false ? "<img src=\"".concat(item.thumbnail, "\" class=\"card-img-top\" />") : '', "\n                                </figure>\n                                <div class=\"card-body d-flex flex-column\">\n                                    ").concat(date, "\n                                    <h5 class=\"card_title mb-4 mt-0\">").concat(escapeHtml(item.post_title), "</h5>\n                                    <a href=\"").concat(item.permalink, "\" class=\"btn btn-outline-primary rounded-pill btn-card pb-2\">Learn more</a>\n                                </div>\n                            </div>\n                        </article>");
          } else if (template === 'brands') {
            var body = '';

            if (item.post_excerpt && item.post_excerpt != '') {
              body = "<div class=\"card-body d-flex flex-column\">\n                                <p class=\"card-text\">".concat(escapeHtml(item.post_excerpt), "</p>\n                            </div>");
            }

            newHTML += "<article class=\"col\">\n                            <div class=\"card semantic_card  w-100 h-100\">\n                                <a href=\"".concat(item.permalink, "\" rel=\"nofollow\" class=\"d-block\">\n                                    <figure class=\"m-0 brand-card-img ").concat(item.thumbnail == false ? 'bg_gray' : '', "\">\n                                    \n                                        ").concat(item.thumbnail !== false ? "<img src=\"".concat(item.thumbnail, "\" class=\"card-img-top\" />") : '', "\n                                    </figure>\n                                </a>\n                                ").concat(body, "\n                            </div>\n                        </article>\n                        ");
          }
        });
        $('#pts_cards_items_cont article').removeClass('new');
        items_cont.innerHTML += newHTML;
      }

      if (load_more_btn) {
        load_more_btn.innerText = loadLabel;
      }
    };

    var escapeHtml = 

    var load_more_btn = document.getElementById('load-more-btn');
    var url_base = window.location.origin;
    var page = 1; //first items are loaded on php

    var post_type = cards_main_cont.getAttribute('data-pt');
    var current = cards_main_cont.getAttribute('data-current');
    var per_page = cards_main_cont.getAttribute('data-per-page');
    var template = cards_main_cont.getAttribute('data-template');
    var show_date = cards_main_cont.getAttribute('data-show-date');
    var category = cards_main_cont.getAttribute('data-cat');
    var term = cards_main_cont.getAttribute('data-term');
    var offset = cards_main_cont.getAttribute('data-offset');
    var items_cont = document.getElementById('pts_cards_items_cont');
    var loadLabel = 'Show more';
    var loadLabelAttr = cards_main_cont.getAttribute('data-load-more-label');

    if (loadLabelAttr) {
      loadLabel = loadLabelAttr;
    }

    if (load_more_btn) {
      load_more_btn.addEventListener('click', function () {
        page = page + 1;
        init();
      });
    }

    window.addEventListener('DOMContentLoaded', ;
  }
})(jQuery);
"use strict";

(function ($) {
  var searchIcon = $(".search-icon-wrapper");
  searchIcon.on("click", ;
})(jQuery);
"use strict";

(function ($) {
  var tableDom = $(".textual-content table");

  if (tableDom.length) {
    tableDom.addClass("table").wrap("<div class='table-responsive'></div>");
  }
})(jQuery);
"use strict";

(function () {
  // Australian Phone Number Regx
  var phoneExpression = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
  var inputPhone = $("input[type='tel']");

  var validatePhoneKeyUp = function validatePhoneKeyUp() {
    inputPhone.keyup(function (e) {
      if (e.keyCode != 9) {
        // tab key
        phoneValidateRegx(inputPhone.val());
      }
    });
  };

  var phoneValidateRegx = function phoneValidateRegx(phoneNum) {
    if (phoneNum != "") {
      if (!phoneNum.match(phoneExpression)) {
        inputPhone.get(0).setCustomValidity("Please use a valid mobile number");
        inputPhone.css("background-color", "rgba(255, 255 , 255, 0.6)");
      } else {
        inputPhone.css("background-color", "white");
        inputPhone.get(0).setCustomValidity("");
        inputPhone.get(0).reportValidity(true);
      }
    } else {
      inputPhone.css("background-color", "white");
      inputPhone.get(0).setCustomValidity("");
      inputPhone.val("");
      inputPhone.get(0).reportValidity(true);
    }

    return true;
  };

  validatePhoneKeyUp();
})();
"use strict";

//init player (code on vendor folder, extended on functions.php registered scripts)
Plyr.setup('video');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0TW9kYWwuanMiLCJhY2Nvcmlvbi5qcyIsImJyYW5kLmpzIiwiY2Fyb3VzZWwuanMiLCJjb250YWN0VXMuanMiLCJkcm9wZG93blBlcmNlbnRTZWxlY3QuanMiLCJldmVudHMtdHJhY2tpbmcuanMiLCJnbG9iYWwuanMiLCJob21lTGl2ZUZlZWQuanMiLCJob21lUGFnZS5qcyIsIm1vYmlsZU5hdi5qcyIsInJlbGF0ZWRfYnlfcmVzdC5qcyIsInNlYXJjaE5hdi5qcyIsInRhYmxlTW9iaWxlSGFuZGxlci5qcyIsInZhbGlkYXRlUGhvbmUuanMiLCJ2aWRlby1wbGF5ZXIuanMiXSwibmFtZXMiOlsiJCIsImNhcmQiLCJtb2RhbCIsIm9uIiwiZSIsImNsZWFySFRNTCIsImZpbmQiLCJhdHRyIiwiaHRtbCIsImFkZENsYXNzIiwiY2FyZENsaWNrIiwidGFyZ2V0IiwicGFyZW50IiwiY2FyZEltZyIsImNhcmRUaXRsZSIsImNhcmRTdWJUaXRsZSIsImNhcmRUZXh0IiwidHdpdHRlckluZm8iLCJjaGlsZHJlbiIsImxpbmtlZEluSW5mbyIsImZhY2Vib29rSW5mbyIsImluc3RhZ3JhbUluZm8iLCJtb2RhbFJlYWNoVGl0bGUiLCJsZW5ndGgiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsImFjY29yZGlvbnMiLCJhY2NvcmRpb24iLCJlYWNoIiwiYmVsbG93cyIsInN0YXRpY19jb250ZW50IiwiYmVsbG93c0Ftb3VudCIsImJlbGxvd3NBcmVhIiwiY3NzIiwiYW5pbWF0ZSIsInJpZ2h0IiwidG9nZ2xlcnMiLCJ0b2dnbGVyIiwicGFyZW50QWN0aXZlIiwiaGFzQ2xhc3MiLCJjbG9zZXN0Iiwid2lkdGgiLCJzaWJsaW5ncyIsInNldFRpbWVvdXQiLCJhY29vcmRpb25fbW9iaWxlIiwibmV4dCIsInNsaWRlVG9nZ2xlIiwic2xpZGVVcCIsInJ1bl9ieV9kZXZpY2UiLCJ2aWV3cG9ydFciLCJ0aHJvdHRsZSIsImZ1bmMiLCJsaW1pdCIsImluVGhyb3R0bGUiLCJhcmdzIiwiYXJndW1lbnRzIiwiY29udGV4dCIsImFwcGx5Iiwid2luZG93IiwiY3VycmVudFZwIiwibmV3VnAiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNob3dNb3JlIiwiZWxlbWVudCIsIiRlbGVtZW50IiwiJGl0ZW1zIiwiJHRvdGFsSXRlbXMiLCJoaWRlIiwiaSIsInNob3dJdGVtcyIsImRvY3VtZW50IiwicmVhZHkiLCJyZWxhdGVkQnJhbmRzIiwicHJldmVudERlZmF1bHQiLCJjYXJvdXNlbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJib2R5IiwiZGF0YV9zaXplIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiJGp1bXBUb3MiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzY3JvbGxUbyIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0Nhcm91c2VsQXJyb3dzIiwicXVlcnlTZWxlY3RvciIsImZpcnN0RWxlbWVudENoaWxkIiwiY29udGFpbnMiLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlIiwiY2Fyb3VzZWxDb250cm9scyIsImNhcm91c2VsT2JqIiwiYm9vdHN0cmFwIiwiQ2Fyb3VzZWwiLCJwbGF5ZXJzRWxzIiwicGF1c2UiLCJjeWNsZSIsImNvbnRhY3RGb3JtIiwiaW5wdXRHcm91cCIsImZvcm1GaWVsZHMiLCJncm91cCIsImdyb3VwTmFtZSIsImZvcm1JbnB1dHMiLCJudW1Gb3JtYXR0ZXIiLCJudW1WYWx1ZSIsInRlc3QiLCJOYU4iLCJwYXJzZUludCIsInRvTG9jYWxlU3RyaW5nIiwic3BsaXRlZF9udW0iLCJ0b1N0cmluZyIsInNwbGl0IiwicHJlZml4Iiwic3Vic3RyaW5nIiwibnVtIiwidXBkYXRlRHJvcGRvd25zIiwicmVhY3RWYWx1ZXMiLCJ2YWwiLCJjcm9zc1BsYXRmb3JtIiwicHJpbnRSZWFjaCIsInByaW50RGlnaXRhbCIsImFwcERpZ2l0YWwiLCJzaG93IiwidGV4dCIsInRvdGFsUmVhY2hWYWx1ZXMiLCJyZWFjaExpc3QiLCJ0b3RhbCIsImRhdGFUb3RhbCIsInByaW50VG90YWwiLCJkaWdpdGFsVG90YWwiLCJhcHBUb3RhbCIsImRhdGFQcmludFRvdGFsIiwiZGF0YURpZ2l0YWxUb3RhbCIsImRhdGFBcHBUb3RhbCIsImRhdGEiLCJOdW1iZXIiLCJjb3ZlcmFnZUNpcmNsZSIsImNvdmVyYWdlQ29udGVudCIsImNvdmVyYWdlVmFsdWVzIiwiZHJvcGRvd25TZWxlY3RlZCIsInByaW50X3JlYWNoIiwiZGlnaXRhbF9yZWFjaCIsImFwcF9yZWFjaCIsImNyb3NzX3BsYXRmb3JtIiwiY2hhbmdlIiwiaG9tZUNvdmVyYWdlIiwiY2xpY2siLCJjb3ZlcmFnZUNvbnRlbnRIb21lIiwiYnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJidXR0b24iLCJ0cmFja2luZ0RhdGEiLCJnZXRUcmFja1ZhbHVlIiwicmVjb3JkVHJhY2tlZERhdGEiLCJ2YWx1ZSIsIm5ldHdvcmtfcGlsbGFyX25hbWUiLCJicmFuZF9udW1iZXIiLCJicmFuZF9uYW1lIiwiZGF0YVZhbHVlIiwibXJlYWR5IiwicHVzaCIsIm1ldHJpY3MiLCJucHYiLCJldmVudHMiLCJlVmFyMjMiLCIkdG9Ub3BCdG4iLCJoaXN0b3J5IiwiYmFjayIsImxpdmVGZWVkIiwibmV3c0ZlZWRUb2dnbGUiLCJmZWVkU2hvd01vcmUiLCJmZWVkRXhwbG9yZSIsIm5ld3NGZWVkIiwidG9nZ2xlQ2xhc3NGZWVkcyIsImNzc0NsYXNzTmFtZSIsInBhcmVudENsYXNzIiwiZVRhcmdldCIsInBhcmVudHMiLCJ0b2dnbGVDbGFzcyIsImNsaWNrVGFyZ2V0IiwiaG9tZU92ZXJsYXkiLCJib2R5RE9NIiwiZmFkZU91dCIsImhvbWVBY2NvcmRpb24iLCJpbnRlcm5hbENvbnRhaW5lciIsImFjY29yZFdyYXBwZXIiLCJhY2NvcmRpb25DbGljayIsInN1Yk1lbnVJdGVtcyIsImNhcmRzX21haW5fY29udCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsImxvYWRfbW9yZV9idG4iLCJpbm5lclRleHQiLCJsb2FkTW9yZSIsInVybCIsInVybF9iYXNlIiwicG9zdF90eXBlIiwicGVyX3BhZ2UiLCJwYWdlIiwiY2F0ZWdvcnkiLCJ0ZXJtIiwib2Zmc2V0IiwiY3VycmVudCIsImdldCIsImhhbmRsZURhdGEiLCJkYXRlIiwibmV3SFRNTCIsIml0ZW0iLCJ0ZW1wbGF0ZSIsInNob3dfZGF0ZSIsImVzY2FwZUh0bWwiLCJmb3JtYXR0ZWREYXRlIiwidGh1bWJuYWlsIiwicG9zdF90aXRsZSIsInBlcm1hbGluayIsInBvc3RfZXhjZXJwdCIsIml0ZW1zX2NvbnQiLCJpbm5lckhUTUwiLCJsb2FkTGFiZWwiLCJzdHIiLCJyZXBsYWNlIiwib3JpZ2luIiwibG9hZExhYmVsQXR0ciIsInNlYXJjaEljb24iLCJ0YWJsZURvbSIsIndyYXAiLCJwaG9uZUV4cHJlc3Npb24iLCJpbnB1dFBob25lIiwidmFsaWRhdGVQaG9uZUtleVVwIiwia2V5dXAiLCJrZXlDb2RlIiwicGhvbmVWYWxpZGF0ZVJlZ3giLCJwaG9uZU51bSIsIm1hdGNoIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIlBseXIiLCJzZXR1cCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNULE1BQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDLG1CQUFELENBQWQ7QUFDQSxNQUFNRSxLQUFLLEdBQUdGLENBQUMsQ0FBQyxnQkFBRCxDQUFmLENBRlMsQ0FJVDs7QUFDQSxNQUFJRSxLQUFKLEVBQVc7QUFDUEEsSUFBQUEsS0FBSyxDQUFDQyxFQUFOLENBQVMsaUJBQVQsRUFBNEIsVUFBQ0MsQ0FBRCxFQUFPO0FBQy9CQyxNQUFBQSxTQUFTO0FBQ1osS0FGRDtBQUdILEdBVFEsQ0FXVDs7O0FBQ0EsTUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkgsSUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsbUJBQVgsRUFBZ0NDLElBQWhDLENBQXFDLEtBQXJDLEVBQTRDLEVBQTVDO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLElBQVgsRUFBaUJFLElBQWpCLENBQXNCLEVBQXRCO0FBQ0FOLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLElBQVgsRUFBaUJFLElBQWpCLENBQXNCLEVBQXRCO0FBQ0FOLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLHFCQUFYLEVBQWtDRSxJQUFsQyxDQUF1QyxFQUF2QztBQUNBTixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxzQkFBWCxFQUFtQ0UsSUFBbkMsQ0FBd0MsRUFBeEMsRUFMb0IsQ0FNcEI7O0FBQ0FOLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLG1DQUFYLEVBQWdEQyxJQUFoRCxDQUFxRCxNQUFyRCxFQUE2RCxFQUE3RDtBQUNBTCxJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxzQ0FBWCxFQUFtREUsSUFBbkQsQ0FBd0QsRUFBeEQ7QUFDQU4sSUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsaUNBQVgsRUFBOENHLFFBQTlDLENBQXVELFFBQXZELEVBVG9CLENBVXBCOztBQUNBUCxJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxtQ0FBWCxFQUFnREMsSUFBaEQsQ0FBcUQsTUFBckQsRUFBNkQsRUFBN0Q7QUFDQUwsSUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsc0NBQVgsRUFBbURFLElBQW5ELENBQXdELEVBQXhEO0FBQ0FOLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLGlDQUFYLEVBQThDRyxRQUE5QyxDQUF1RCxRQUF2RCxFQWJvQixDQWNwQjs7QUFDQVAsSUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsbUNBQVgsRUFBZ0RDLElBQWhELENBQXFELE1BQXJELEVBQTZELEVBQTdEO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLHNDQUFYLEVBQW1ERSxJQUFuRCxDQUF3RCxFQUF4RDtBQUNBTixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxpQ0FBWCxFQUE4Q0csUUFBOUMsQ0FBdUQsUUFBdkQsRUFqQm9CLENBa0JwQjs7QUFDQVAsSUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsbUNBQVgsRUFBZ0RDLElBQWhELENBQXFELE1BQXJELEVBQTZELEVBQTdEO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLHNDQUFYLEVBQW1ERSxJQUFuRCxDQUF3RCxFQUF4RDtBQUNBTixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxpQ0FBWCxFQUE4Q0csUUFBOUMsQ0FBdUQsUUFBdkQ7QUFDSCxHQXRCRCxDQVpTLENBb0NUOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCVCxJQUFBQSxJQUFJLENBQUNFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQUNDLENBQUQsRUFBTztBQUNwQixVQUFNSCxJQUFJLEdBQUdELENBQUMsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFILENBQUQsQ0FBWUMsTUFBWixFQUFiO0FBQ0EsVUFBTUMsT0FBTyxHQUFHWixJQUFJLENBQUNLLElBQUwsQ0FBVSxlQUFWLEVBQTJCQyxJQUEzQixDQUFnQyxLQUFoQyxDQUFoQjtBQUNBLFVBQU1PLFNBQVMsR0FBR2IsSUFBSSxDQUFDSyxJQUFMLENBQVUsYUFBVixFQUF5QkUsSUFBekIsRUFBbEI7QUFDQSxVQUFNTyxZQUFZLEdBQUdkLElBQUksQ0FBQ0ssSUFBTCxDQUFVLGdCQUFWLEVBQTRCRSxJQUE1QixFQUFyQjtBQUNBLFVBQU1RLFFBQVEsR0FBR2YsSUFBSSxDQUFDSyxJQUFMLENBQVUsb0JBQVYsRUFBZ0NFLElBQWhDLEVBQWpCO0FBQ0EsVUFBTVMsV0FBVyxHQUFHaEIsSUFBSSxDQUFDSyxJQUFMLENBQVUsZUFBVixFQUEyQlksUUFBM0IsRUFBcEI7QUFDQSxVQUFNQyxZQUFZLEdBQUdsQixJQUFJLENBQUNLLElBQUwsQ0FBVSxnQkFBVixFQUE0QlksUUFBNUIsRUFBckI7QUFDQSxVQUFNRSxZQUFZLEdBQUduQixJQUFJLENBQUNLLElBQUwsQ0FBVSxnQkFBVixFQUE0QlksUUFBNUIsRUFBckI7QUFDQSxVQUFNRyxhQUFhLEdBQUdwQixJQUFJLENBQUNLLElBQUwsQ0FBVSxpQkFBVixFQUE2QlksUUFBN0IsRUFBdEI7QUFDQSxVQUFNSSxlQUFlLEdBQUdwQixLQUFLLENBQUNJLElBQU4sQ0FBVyxpQkFBWCxDQUF4QjtBQUVBSixNQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxtQkFBWCxFQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBckMsRUFBNENNLE9BQTVDO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLElBQVgsRUFBaUJFLElBQWpCLENBQXNCTSxTQUF0QjtBQUNBWixNQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxJQUFYLEVBQWlCRSxJQUFqQixDQUFzQk8sWUFBdEI7QUFDQWIsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcscUJBQVgsRUFBa0NFLElBQWxDLENBQXVDUSxRQUF2QztBQUNBZCxNQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVyxzQkFBWCxFQUFtQ0UsSUFBbkMsQ0FBd0NNLFNBQXhDOztBQUdBLFVBQUtHLFdBQVcsQ0FBQ00sTUFBWixHQUFxQixDQUF0QixJQUE2QkosWUFBWSxDQUFDSSxNQUFiLEdBQXNCLENBQW5ELElBQTBESCxZQUFZLENBQUNHLE1BQWIsR0FBc0IsQ0FBaEYsSUFBdUZGLGFBQWEsQ0FBQ0UsTUFBZCxHQUF1QixDQUFsSCxFQUFzSDtBQUNsSEQsUUFBQUEsZUFBZSxDQUFDRSxXQUFoQixDQUE0QixRQUE1QjtBQUNIOztBQUNELFVBQUtQLFdBQVcsQ0FBQ00sTUFBWixJQUFzQixDQUF2QixJQUE4QkosWUFBWSxDQUFDSSxNQUFiLElBQXVCLENBQXJELElBQTRESCxZQUFZLENBQUNHLE1BQWIsSUFBdUIsQ0FBbkYsSUFBMEZGLGFBQWEsQ0FBQ0UsTUFBZCxJQUF3QixDQUF0SCxFQUEwSDtBQUN0SEQsUUFBQUEsZUFBZSxDQUFDYixRQUFoQixDQUF5QixRQUF6QjtBQUNIOztBQUVELFVBQUlRLFdBQVcsQ0FBQ00sTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QjtBQUNBckIsUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1Usb0NBRFYsRUFFS0MsSUFGTCxDQUVVLE1BRlYsRUFFa0JQLENBQUMsQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBRCxDQUFrQlQsSUFBbEIsRUFGbEI7QUFHQU4sUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1UsdUNBRFYsRUFFS0UsSUFGTCxDQUVVUixDQUFDLENBQUNpQixXQUFXLENBQUMsQ0FBRCxDQUFaLENBQUQsQ0FBa0JULElBQWxCLEVBRlY7QUFHQU4sUUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsa0NBQVgsRUFBK0NrQixXQUEvQyxDQUEyRCxRQUEzRDtBQUNIOztBQUVELFVBQUlMLFlBQVksQ0FBQ0ksTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUN6QjtBQUNBckIsUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1UscUNBRFYsRUFFS0MsSUFGTCxDQUVVLE1BRlYsRUFFa0JQLENBQUMsQ0FBQ21CLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBRCxDQUFtQlgsSUFBbkIsRUFGbEI7QUFHQU4sUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1Usd0NBRFYsRUFFS0UsSUFGTCxDQUVVUixDQUFDLENBQUNtQixZQUFZLENBQUMsQ0FBRCxDQUFiLENBQUQsQ0FBbUJYLElBQW5CLEVBRlY7QUFHQU4sUUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsbUNBQVgsRUFBZ0RrQixXQUFoRCxDQUE0RCxRQUE1RDtBQUNIOztBQUVELFVBQUlKLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUN6QjtBQUNBckIsUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1UscUNBRFYsRUFFS0MsSUFGTCxDQUVVLE1BRlYsRUFFa0JQLENBQUMsQ0FBQ29CLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBRCxDQUFtQlosSUFBbkIsRUFGbEI7QUFHQU4sUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1Usd0NBRFYsRUFFS0UsSUFGTCxDQUVVUixDQUFDLENBQUNvQixZQUFZLENBQUMsQ0FBRCxDQUFiLENBQUQsQ0FBbUJaLElBQW5CLEVBRlY7QUFHQU4sUUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsbUNBQVgsRUFBZ0RrQixXQUFoRCxDQUE0RCxRQUE1RDtBQUNIOztBQUVELFVBQUlILGFBQWEsQ0FBQ0UsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQjtBQUNBckIsUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1Usc0NBRFYsRUFFS0MsSUFGTCxDQUVVLE1BRlYsRUFFa0JQLENBQUMsQ0FBQ3FCLGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBRCxDQUFvQmIsSUFBcEIsRUFGbEI7QUFHQU4sUUFBQUEsS0FBSyxDQUNBSSxJQURMLENBQ1UseUNBRFYsRUFFS0UsSUFGTCxDQUVVUixDQUFDLENBQUNxQixhQUFhLENBQUMsQ0FBRCxDQUFkLENBQUQsQ0FBb0JiLElBQXBCLEVBRlY7QUFHQU4sUUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcsb0NBQVgsRUFBaURrQixXQUFqRCxDQUE2RCxRQUE3RDtBQUNIO0FBQ0osS0FyRUQ7QUFzRUgsR0F2RUQ7O0FBeUVBZCxFQUFBQSxTQUFTO0FBQ1osQ0EvR0QsRUErR0dlLE1BL0dIOzs7QUNBQSxDQUFDLFVBQVV6QixDQUFWLEVBQWE7QUFDWixNQUFJMEIsVUFBVSxHQUFHMUIsQ0FBQyxDQUFDLGtCQUFELENBQWxCOztBQUVBLE1BQUkwQixVQUFVLENBQUNILE1BQWYsRUFBdUI7QUFpQ3JCO0FBakNxQixRQW1DWkksU0FuQ1ksR0FtQ3JCLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkJELE1BQUFBLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixZQUFZO0FBQzFCLFlBQUlELFNBQVMsR0FBRzNCLENBQUMsQ0FBQyxJQUFELENBQWpCO0FBQ0EsWUFBSTZCLE9BQU8sR0FBR0YsU0FBUyxDQUFDckIsSUFBVixDQUFlLFVBQWYsQ0FBZDtBQUNBLFlBQUl3QixjQUFjLEdBQUdILFNBQVMsQ0FBQ3JCLElBQVYsQ0FBZSxpQkFBZixDQUFyQjtBQUNBLFlBQUl5QixhQUFhLEdBQUdGLE9BQU8sQ0FBQ3ZCLElBQVIsQ0FBYSxZQUFiLEVBQTJCaUIsTUFBL0M7QUFDQSxZQUFJUyxXQUFXLEdBQUcsS0FBS0QsYUFBdkI7QUFDQUQsUUFBQUEsY0FBYyxDQUFDRyxHQUFmLENBQW1CO0FBQUUsb0NBQW1CRCxXQUFuQjtBQUFGLFNBQW5CO0FBRUFILFFBQUFBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQjtBQUNkQyxVQUFBQSxLQUFLLGFBQU1ILFdBQU47QUFEUyxTQUFoQjtBQUlBLFlBQUlJLFFBQVEsR0FBR1QsU0FBUyxDQUFDckIsSUFBVixDQUFlLFVBQWYsQ0FBZjs7QUFDQSxZQUFJOEIsUUFBUSxDQUFDYixNQUFiLEVBQXFCO0FBQ25CYSxVQUFBQSxRQUFRLENBQUNSLElBQVQsQ0FBYyxZQUFZO0FBQ3hCLGdCQUFJUyxPQUFPLEdBQUdyQyxDQUFDLENBQUMsSUFBRCxDQUFmLENBRHdCLENBR3hCOztBQUNBcUMsWUFBQUEsT0FBTyxDQUFDbEMsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBWTtBQUM5QixrQkFBSVMsTUFBTSxHQUFHeUIsT0FBTyxDQUFDekIsTUFBUixFQUFiO0FBQ0Esa0JBQUkwQixZQUFZLEdBQUcxQixNQUFNLENBQUMyQixRQUFQLENBQWdCLFFBQWhCLENBQW5COztBQUVBLGtCQUFJLENBQUNELFlBQUwsRUFBbUI7QUFDakI7QUFDQUQsZ0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFoQixFQUE0Qk4sT0FBNUIsQ0FBb0M7QUFDbENDLGtCQUFBQSxLQUFLLEVBQUU7QUFEMkIsaUJBQXBDO0FBSUF2QixnQkFBQUEsTUFBTSxDQUFDc0IsT0FBUCxDQUFlO0FBQUVPLGtCQUFBQSxLQUFLLEVBQUU7QUFBVCxpQkFBZjtBQUNBN0IsZ0JBQUFBLE1BQU0sQ0FBQzhCLFFBQVAsR0FBa0JSLE9BQWxCLENBQTBCO0FBQ3hCTyxrQkFBQUEsS0FBSyxFQUFFO0FBRGlCLGlCQUExQixFQVBpQixDQVdqQjs7QUFDQUUsZ0JBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YvQixrQkFBQUEsTUFBTSxDQUFDSCxRQUFQLENBQWdCLFFBQWhCO0FBQ0QsaUJBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxlQWZELE1BZU87QUFDTDtBQUNBNEIsZ0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFoQixFQUE0Qk4sT0FBNUIsQ0FBb0M7QUFDbENDLGtCQUFBQSxLQUFLLGFBQU1ILFdBQU47QUFENkIsaUJBQXBDO0FBSUFwQixnQkFBQUEsTUFBTSxDQUFDWSxXQUFQLENBQW1CLFFBQW5CO0FBRUFaLGdCQUFBQSxNQUFNLENBQUNzQixPQUFQLENBQWU7QUFBRU8sa0JBQUFBLEtBQUssRUFBRTtBQUFULGlCQUFmO0FBRUE3QixnQkFBQUEsTUFBTSxDQUFDOEIsUUFBUCxHQUFrQlIsT0FBbEIsQ0FBMEI7QUFDeEJPLGtCQUFBQSxLQUFLLEVBQUU7QUFEaUIsaUJBQTFCO0FBSUFKLGdCQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEJOLE9BQTVCLENBQW9DO0FBQ2xDQyxrQkFBQUEsS0FBSyxhQUFNSCxXQUFOO0FBRDZCLGlCQUFwQztBQUdEO0FBQ0YsYUFyQ0Q7QUFzQ0QsV0ExQ0Q7QUEyQ0QsU0F6RHlCLENBMEQxQjs7QUFDRCxPQTNERDtBQTRERCxLQWhHb0I7O0FBQUEsUUFrR1pZLGdCQWxHWSxHQWtHckIsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDMUIsVUFBSWxCLFVBQVUsR0FBRzFCLENBQUMsQ0FBQyxrQkFBRCxDQUFsQjs7QUFFQSxVQUFJMEIsVUFBVSxDQUFDSCxNQUFmLEVBQXVCO0FBQ3JCRyxRQUFBQSxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsWUFBWTtBQUMxQixjQUFJRCxTQUFTLEdBQUczQixDQUFDLENBQUMsSUFBRCxDQUFqQjtBQUNBLGNBQUlvQyxRQUFRLEdBQUdULFNBQVMsQ0FBQ3JCLElBQVYsQ0FBZSxVQUFmLENBQWY7O0FBRUEsY0FBSThCLFFBQVEsQ0FBQ2IsTUFBYixFQUFxQjtBQUNuQmEsWUFBQUEsUUFBUSxDQUFDUixJQUFULENBQWMsWUFBWTtBQUN4QixrQkFBSVMsT0FBTyxHQUFHckMsQ0FBQyxDQUFDLElBQUQsQ0FBZjtBQUNBcUMsY0FBQUEsT0FBTyxDQUFDbEMsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBWTtBQUM5QmtDLGdCQUFBQSxPQUFPLENBQUNRLElBQVIsR0FBZUMsV0FBZjtBQUNBbEMsZ0JBQUFBLE1BQU0sQ0FBQzhCLFFBQVAsR0FBa0JwQyxJQUFsQixDQUF1QixnQkFBdkIsRUFBeUN5QyxPQUF6QztBQUNELGVBSEQ7QUFJRCxhQU5EO0FBT0Q7QUFDRixTQWJEO0FBY0Q7QUFDRixLQXJIb0I7O0FBQUEsUUF1SFpDLGFBdkhZLEdBdUhyQixTQUFTQSxhQUFULENBQXVCQyxTQUF2QixFQUFrQztBQUNoQztBQUNBLFVBQUlBLFNBQVMsSUFBSSxHQUFqQixFQUFzQjtBQUNwQnRCLFFBQUFBLFNBQVM7QUFDVixPQUZELE1BRU87QUFDTGlCLFFBQUFBLGdCQUFnQjtBQUNqQjtBQUNGLEtBOUhvQjs7QUFBQSxRQWdJWk0sUUFoSVksR0FnSXJCLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3QixVQUFJQyxVQUFKO0FBQ0EsYUFBTyxZQUFZO0FBQ2pCLFlBQU1DLElBQUksR0FBR0MsU0FBYjtBQUNBLFlBQU1DLE9BQU8sR0FBRyxJQUFoQjs7QUFDQSxZQUFJLENBQUNILFVBQUwsRUFBaUI7QUFDZkYsVUFBQUEsSUFBSSxDQUFDTSxLQUFMLENBQVdELE9BQVgsRUFBb0JGLElBQXBCO0FBQ0FELFVBQUFBLFVBQVUsR0FBRyxJQUFiO0FBQ0FWLFVBQUFBLFVBQVUsQ0FBQztBQUFBLG1CQUFPVSxVQUFVLEdBQUcsS0FBcEI7QUFBQSxXQUFELEVBQTZCRCxLQUE3QixDQUFWO0FBQ0Q7QUFDRixPQVJEO0FBU0QsS0EzSW9CLEVBNElyQjs7O0FBM0lBO0FBQ0EsUUFBSUgsU0FBUyxHQUFHakQsQ0FBQyxDQUFDMEQsTUFBRCxDQUFELENBQVVqQixLQUFWLEVBQWhCO0FBQ0FPLElBQUFBLGFBQWEsQ0FBQ0MsU0FBRCxDQUFiLENBSHFCLENBS3JCOztBQUNBLFFBQUlVLFNBQVMsR0FBRzNELENBQUMsQ0FBQzBELE1BQUQsQ0FBRCxDQUFVakIsS0FBVixFQUFoQjs7QUFDQSxRQUFJa0IsU0FBUyxHQUFHLEdBQWhCLEVBQXFCO0FBQ25CQSxNQUFBQSxTQUFTLEdBQUcsUUFBWjtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxTQUFTLEdBQUcsU0FBWjtBQUNELEtBWG9CLENBWXJCO0FBRUE7OztBQUNBM0QsSUFBQUEsQ0FBQyxDQUFDMEQsTUFBRCxDQUFELENBQVV2RCxFQUFWLENBQ0UsUUFERixFQUVFK0MsUUFBUSxDQUFDLFlBQVk7QUFDbkJELE1BQUFBLFNBQVMsR0FBR2pELENBQUMsQ0FBQzBELE1BQUQsQ0FBRCxDQUFVakIsS0FBVixFQUFaO0FBQ0EsVUFBSW1CLEtBQUo7O0FBRUEsVUFBSVgsU0FBUyxHQUFHLEdBQWhCLEVBQXFCO0FBQ25CVyxRQUFBQSxLQUFLLEdBQUcsUUFBUjtBQUNELE9BRkQsTUFFTztBQUNMQSxRQUFBQSxLQUFLLEdBQUcsU0FBUjtBQUNEOztBQUVELFVBQUlELFNBQVMsS0FBS0MsS0FBbEIsRUFBeUI7QUFDdkJqQixRQUFBQSxVQUFVLENBQUNrQixRQUFRLENBQUNDLE1BQVQsRUFBRCxFQUFvQixHQUFwQixDQUFWO0FBQ0Q7QUFDRixLQWJPLEVBYUwsR0FiSyxDQUZWO0FBOEhEO0FBQ0YsQ0FqSkQsRUFpSkdyQyxNQWpKSDs7O0FDQUEsQ0FBQyxVQUFVekIsQ0FBVixFQUFhO0FBR1YsV0FBUytELFFBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsR0FBR2pFLENBQUMsQ0FBQ2dFLE9BQUQsQ0FBaEI7QUFDQSxRQUFJRSxNQUFNLEdBQUdELFFBQVEsQ0FBQzNELElBQVQsQ0FBYyxpQkFBZCxDQUFiO0FBQ0EsUUFBSTZELFdBQVcsR0FBR0QsTUFBTSxDQUFDM0MsTUFBekI7O0FBQ0EsUUFBSTRDLFdBQVcsR0FBRyxDQUFsQixFQUFzQjtBQUNsQkYsTUFBQUEsUUFBUSxDQUFDM0QsSUFBVCxDQUFjLFlBQWQsRUFBNEI4RCxJQUE1QjtBQUNIOztBQUNELFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsV0FBcEIsRUFBaUNFLENBQUMsRUFBbEMsRUFBdUM7QUFDbkMsVUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBWTtBQUNSSCxRQUFBQSxNQUFNLENBQUMxQyxXQUFQLENBQW1CLFlBQW5CLEVBQWlDZixRQUFqQyxDQUEwQyxZQUExQztBQUNIO0FBQ0o7O0FBQUE7QUFDSjs7QUFFRCxNQUFNNkQsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQnRFLElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFekIsVUFBSUMsYUFBYSxHQUFJekUsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBRUFBLE1BQUFBLENBQUMsQ0FBQ3lFLGFBQUQsQ0FBRCxDQUFpQm5FLElBQWpCLENBQXNCLFlBQXRCLEVBQW9DSCxFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxVQUFTQyxDQUFULEVBQVk7QUFDeERBLFFBQUFBLENBQUMsQ0FBQ3NFLGNBQUY7QUFDQVgsUUFBQUEsUUFBUSxDQUFDVSxhQUFELENBQVI7QUFFSCxPQUpEO0FBS0gsS0FURDtBQVVILEdBWEQ7O0FBWUFILEVBQUFBLFNBQVM7QUFFWixDQS9CRCxFQStCRzdDLE1BL0JIOzs7QUNBQSxDQUFDLFVBQVV6QixDQUFWLEVBQWE7QUFDWCxNQUFJMkUsUUFBUSxHQUFHSixRQUFRLENBQUNLLHNCQUFULENBQWdDLFVBQWhDLENBQWY7QUFDQSxNQUFJQyxJQUFKO0FBQ0FGLEVBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDLENBQUQsQ0FBbkI7O0FBRUEsTUFBR0EsUUFBSCxFQUFhO0FBQ1YsUUFBSUcsU0FBUyxHQUFHSCxRQUFRLENBQUNJLFlBQVQsQ0FBc0IsV0FBdEIsQ0FBaEI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7O0FBRUEsUUFBR0EsU0FBUyxLQUFLLFdBQWpCLEVBQThCO0FBQzNCRCxNQUFBQSxJQUFJLEdBQUdOLFFBQVEsQ0FBQ1csb0JBQVQsQ0FBOEIsTUFBOUIsQ0FBUDtBQUNBTCxNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFELENBQVg7QUFDQUEsTUFBQUEsSUFBSSxDQUFDTSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0Y7O0FBRUQsUUFBSUMsUUFBUSxHQUFHckYsQ0FBQyxDQUFDLFlBQUQsQ0FBaEI7O0FBQ0EsUUFBSXFGLFFBQVEsQ0FBQzlELE1BQWIsRUFBcUI7QUFDbEI4RCxNQUFBQSxRQUFRLENBQUNsRixFQUFULENBQVksT0FBWixFQUFxQixVQUFBbUYsS0FBSyxFQUFJO0FBQzNCQSxRQUFBQSxLQUFLLENBQUNaLGNBQU47QUFDQS9ELFFBQUFBLE1BQU0sR0FBR1gsQ0FBQyxDQUFDc0YsS0FBSyxDQUFDQyxhQUFOLENBQW9CUixZQUFwQixDQUFpQyxNQUFqQyxDQUFELENBQVY7QUFDQXBFLFFBQUFBLE1BQU0sQ0FBQ1ksTUFBUCxHQUNHbUMsTUFBTSxDQUFDOEIsUUFBUCxDQUFnQixDQUFoQixFQUFtQjdFLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVThFLFNBQTdCLENBREgsR0FFRyxJQUZIO0FBR0YsT0FORDtBQU9GOztBQUVEZCxJQUFBQSxRQUFRLENBQUNlLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2pEQyxNQUFBQSxtQkFBbUI7QUFDckIsS0FGRDs7QUFJQSxRQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDL0IsVUFBSWhCLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxpQkFBMUMsQ0FBNERWLFNBQTVELENBQXNFVyxRQUF0RSxDQUErRSxRQUEvRSxDQUFKLEVBQThGO0FBQzNGO0FBQ0FuQixRQUFBQSxRQUFRLENBQUNpQixhQUFULENBQXVCLG1CQUF2QixFQUE0Q0MsaUJBQTVDLENBQThEVixTQUE5RCxDQUF3RUMsR0FBeEUsQ0FBNEUsV0FBNUUsRUFGMkYsQ0FHM0Y7O0FBQ0FULFFBQUFBLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDRyxnQkFBNUMsQ0FBNkRaLFNBQTdELENBQXVFYSxNQUF2RSxDQUE4RSxXQUE5RTtBQUNBckIsUUFBQUEsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENHLGdCQUE1QyxDQUE2RFosU0FBN0QsQ0FBdUVDLEdBQXZFLENBQTJFLFNBQTNFO0FBQ0YsT0FORCxNQU1PLElBQUlULFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDRyxnQkFBMUMsQ0FBMkRaLFNBQTNELENBQXFFVyxRQUFyRSxDQUE4RSxRQUE5RSxDQUFKLEVBQTZGO0FBQ2pHO0FBQ0FuQixRQUFBQSxRQUFRLENBQUNpQixhQUFULENBQXVCLG1CQUF2QixFQUE0Q0csZ0JBQTVDLENBQTZEWixTQUE3RCxDQUF1RUMsR0FBdkUsQ0FBMkUsV0FBM0UsRUFGaUcsQ0FHakc7O0FBQ0FULFFBQUFBLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDQyxpQkFBNUMsQ0FBOERWLFNBQTlELENBQXdFYSxNQUF4RSxDQUErRSxXQUEvRTtBQUNBckIsUUFBQUEsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENDLGlCQUE1QyxDQUE4RFYsU0FBOUQsQ0FBd0VDLEdBQXhFLENBQTRFLFNBQTVFO0FBQ0YsT0FOTSxNQU1BO0FBQ0o7QUFDQSxZQUFJYSxnQkFBZ0IsR0FBR3RCLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDMUUsUUFBbkU7QUFDQStFLFFBQUFBLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBb0JkLFNBQXBCLENBQThCYSxNQUE5QixDQUFxQyxXQUFyQztBQUNBQyxRQUFBQSxnQkFBZ0IsQ0FBQyxDQUFELENBQWhCLENBQW9CZCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsU0FBbEM7QUFDQWEsUUFBQUEsZ0JBQWdCLENBQUMsQ0FBRCxDQUFoQixDQUFvQmQsU0FBcEIsQ0FBOEJhLE1BQTlCLENBQXFDLFdBQXJDO0FBQ0FDLFFBQUFBLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBb0JkLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxTQUFsQztBQUNGO0FBQ0gsS0FyQkQsQ0F6QlUsQ0FnRFY7OztBQUNBYixJQUFBQSxRQUFRLENBQUNtQixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN2REMsTUFBQUEsbUJBQW1CO0FBQ3JCLEtBRkQ7QUFJQSxRQUFJTyxXQUFXLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxRQUFkLENBQXVCekIsUUFBdkIsQ0FBbEIsQ0FyRFUsQ0F1RFY7QUFDQTs7QUFDQSxRQUFNMEIsVUFBVSxHQUFHckcsQ0FBQyxDQUFDLGlCQUFELENBQXBCLENBekRVLENBMkRWOztBQUNBcUcsSUFBQUEsVUFBVSxDQUFDbEcsRUFBWCxDQUFjLE1BQWQsRUFBc0IsWUFBVztBQUM5QitGLE1BQUFBLFdBQVcsQ0FBQ0ksS0FBWjtBQUNGLEtBRkQ7QUFJQUQsSUFBQUEsVUFBVSxDQUFDbEcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVztBQUMvQitGLE1BQUFBLFdBQVcsQ0FBQ0ssS0FBWjtBQUNGLEtBRkQ7QUFJQUYsSUFBQUEsVUFBVSxDQUFDbEcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVztBQUMvQitGLE1BQUFBLFdBQVcsQ0FBQ0ssS0FBWjtBQUNGLEtBRkQ7QUFHRjtBQUNILENBN0VELEVBNkVHOUUsTUE3RUg7OztBQ0FBLENBQUMsVUFBQ3pCLENBQUQsRUFBTztBQUNMLE1BQU13RyxXQUFXLEdBQUd4RyxDQUFDLENBQUMsaUNBQUQsQ0FBckI7QUFDQSxNQUFNeUcsVUFBVSxHQUFHRCxXQUFXLENBQUNsRyxJQUFaLENBQWlCLHFCQUFqQixDQUFuQjtBQUNBLE1BQU1vRyxVQUFVLEdBQUdELFVBQVUsQ0FBQ25HLElBQVgsQ0FBZ0Isc0JBQWhCLENBQW5COztBQUVBLE1BQUlrRyxXQUFXLENBQUNqRixNQUFoQixFQUF3QjtBQUNyQm1GLElBQUFBLFVBQVUsQ0FBQ3BHLElBQVgsQ0FBZ0IsTUFBaEIsRUFBd0IwRixNQUF4QjtBQUVBUyxJQUFBQSxVQUFVLENBQUM3RSxJQUFYLENBQWdCLFVBQUN5QyxDQUFELEVBQUlzQyxLQUFKLEVBQWM7QUFDM0IsVUFBTUMsU0FBUyxHQUFHNUcsQ0FBQyxDQUFDMkcsS0FBRCxDQUFELENBQVNyRyxJQUFULENBQWMsc0JBQWQsQ0FBbEI7QUFDQSxVQUFNdUcsVUFBVSxHQUFHRCxTQUFTLENBQUMvRCxJQUFWLEVBQW5CO0FBRUFnRSxNQUFBQSxVQUFVLENBQUN0RyxJQUFYLENBQWdCLGFBQWhCLEVBQStCcUcsU0FBUyxDQUFDcEcsSUFBVixFQUEvQjtBQUNGLEtBTEQ7QUFNRjtBQUNILENBZkQsRUFlR2lCLE1BZkg7OztBQ0FBLENBQUMsVUFBU3pCLENBQVQsRUFBWTtBQUVULFdBQVM4RyxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUU1QixRQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxRQUFJQSxJQUFKLEVBQVU7QUFFTixVQUFJRCxRQUFRLElBQUlBLFFBQVEsS0FBS0UsR0FBN0IsRUFBa0M7QUFDOUJGLFFBQUFBLFFBQVEsR0FBR0csUUFBUSxDQUFDSCxRQUFELENBQW5CO0FBQ0FBLFFBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxjQUFULEVBQVg7QUFDSDs7QUFFRCxVQUFJQyxXQUFXLEdBQUdMLFFBQVEsQ0FBQ00sUUFBVCxHQUFvQkMsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBbEI7QUFFQSxVQUFJQyxNQUFNLEdBQUcsS0FBYjs7QUFFQSxjQUFRSCxXQUFXLENBQUM3RixNQUFwQjtBQUNJLGFBQUssQ0FBTDtBQUNJZ0csVUFBQUEsTUFBTSxHQUFHLEdBQVQ7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSUEsVUFBQUEsTUFBTSxHQUFHLEdBQVQ7QUFDQTs7QUFDSjtBQUNJQSxVQUFBQSxNQUFNLEdBQUcsS0FBVDtBQVJSOztBQVdBLFVBQUlBLE1BQUosRUFBWTtBQUNSLFlBQUlILFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUksU0FBZixDQUF5QixDQUF6QixFQUE0QixDQUE1QixLQUFrQyxDQUF0QyxFQUF5QztBQUNyQ1QsVUFBQUEsUUFBUSxHQUFHSyxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCRyxNQUE1QjtBQUNILFNBRkQsTUFFTztBQUNIUixVQUFBQSxRQUFRLEdBQUdLLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUIsR0FBakIsR0FBdUJBLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUksU0FBZixDQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUF2QixHQUF3REQsTUFBbkU7QUFDSDtBQUVKLE9BUEQsTUFPTztBQUNIUixRQUFBQSxRQUFRLEdBQUdLLFdBQVcsQ0FBQyxDQUFELENBQXRCO0FBQ0g7QUFFSjs7QUFFRCxRQUFJSyxHQUFHLEdBQUdWLFFBQVY7QUFDQSxXQUFPVSxHQUFQO0FBRUg7O0FBQUE7O0FBRUQsV0FBU0MsZUFBVCxDQUF5QjFELE9BQXpCLEVBQWtDO0FBRTlCZ0IsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixPQUFaLEVBQXFCLFdBQXJCO0FBQ0EsUUFBSTJELFdBQVcsR0FBRzNELE9BQU8sQ0FBQzRELEdBQVIsR0FBY04sS0FBZCxDQUFvQixHQUFwQixDQUFsQjtBQUNBLFFBQUlPLGFBQWEsR0FBR0YsV0FBVyxDQUFDLENBQUQsQ0FBL0I7QUFDQSxRQUFJRyxVQUFVLEdBQUdILFdBQVcsQ0FBQyxDQUFELENBQTVCO0FBQ0EsUUFBSUksWUFBWSxHQUFHSixXQUFXLENBQUMsQ0FBRCxDQUE5QjtBQUNBLFFBQUlLLFVBQVUsR0FBR0wsV0FBVyxDQUFDLENBQUQsQ0FBNUI7QUFFQTNILElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQiw4QkFBakIsRUFBaURrQixXQUFqRCxDQUE2RCxhQUE3RCxFQUE0RVosTUFBNUUsR0FBcUZBLE1BQXJGLEdBQThGcUgsSUFBOUY7QUFDQWpJLElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQixnQ0FBakIsRUFBbURrQixXQUFuRCxDQUErRCxhQUEvRCxFQUE4RVosTUFBOUUsR0FBdUZBLE1BQXZGLEdBQWdHcUgsSUFBaEc7QUFDQWpJLElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQiw0QkFBakIsRUFBK0NrQixXQUEvQyxDQUEyRCxhQUEzRCxFQUEwRVosTUFBMUUsR0FBbUZBLE1BQW5GLEdBQTRGcUgsSUFBNUY7O0FBR0EsUUFBSUosYUFBYSxJQUFJLENBQXJCLEVBQXdCO0FBQ3BCN0gsTUFBQUEsQ0FBQyxDQUFDdUUsUUFBRCxDQUFELENBQVlqRSxJQUFaLENBQWlCLGlDQUFqQixFQUFvREcsUUFBcEQsQ0FBNkQsYUFBN0QsRUFBNEVHLE1BQTVFLEdBQXFGQSxNQUFyRixHQUE4RndELElBQTlGLEdBRG9CLENBRXBCO0FBQ0g7O0FBQ0QsUUFBSTBELFVBQVUsSUFBSSxDQUFsQixFQUFxQjtBQUNqQjlILE1BQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQiw4QkFBakIsRUFBaURHLFFBQWpELENBQTBELGFBQTFELEVBQXlFRyxNQUF6RSxHQUFrRkEsTUFBbEYsR0FBMkZ3RCxJQUEzRixHQURpQixDQUVqQjtBQUNIOztBQUNELFFBQUkyRCxZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDbkIvSCxNQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWWpFLElBQVosQ0FBaUIsZ0NBQWpCLEVBQW1ERyxRQUFuRCxDQUE0RCxhQUE1RCxFQUEyRUcsTUFBM0UsR0FBb0ZBLE1BQXBGLEdBQTZGd0QsSUFBN0YsR0FEbUIsQ0FFbkI7QUFDSDs7QUFDRCxRQUFJNEQsVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ2pCaEksTUFBQUEsQ0FBQyxDQUFDdUUsUUFBRCxDQUFELENBQVlqRSxJQUFaLENBQWlCLDRCQUFqQixFQUErQ0csUUFBL0MsQ0FBd0QsYUFBeEQsRUFBdUVHLE1BQXZFLEdBQWdGQSxNQUFoRixHQUF5RndELElBQXpGLEdBRGlCLENBRWpCO0FBQ0g7O0FBR0RwRSxJQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWWpFLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDNEgsSUFBdkMsQ0FBNENwQixZQUFZLENBQUNlLGFBQUQsQ0FBeEQ7QUFDQTdILElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQixpQkFBakIsRUFBb0M0SCxJQUFwQyxDQUF5Q3BCLFlBQVksQ0FBQ2dCLFVBQUQsQ0FBckQ7QUFDQTlILElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQixtQkFBakIsRUFBc0M0SCxJQUF0QyxDQUEyQ3BCLFlBQVksQ0FBQ2lCLFlBQUQsQ0FBdkQ7QUFDQS9ILElBQUFBLENBQUMsQ0FBQ3VFLFFBQUQsQ0FBRCxDQUFZakUsSUFBWixDQUFpQixlQUFqQixFQUFrQzRILElBQWxDLENBQXVDcEIsWUFBWSxDQUFDa0IsVUFBRCxDQUFuRDtBQUVIOztBQUVELFdBQVNHLGdCQUFULEdBQTRCO0FBQ3hCLFFBQUlDLFNBQVMsR0FBR3BJLENBQUMsQ0FBQywyQkFBRCxDQUFqQjtBQUNBLFFBQUlxSSxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsUUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7QUFDQSxRQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFHQVIsSUFBQUEsU0FBUyxDQUFDOUgsSUFBVixDQUFlLFFBQWYsRUFBeUJzQixJQUF6QixDQUE4QixZQUFXO0FBRXJDMEcsTUFBQUEsU0FBUyxHQUFHdEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkksSUFBUixDQUFhLE9BQWIsQ0FBWjtBQUNBTixNQUFBQSxVQUFVLEdBQUd2SSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2SSxJQUFSLENBQWEsT0FBYixDQUFiO0FBQ0FMLE1BQUFBLFlBQVksR0FBR3hJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZJLElBQVIsQ0FBYSxTQUFiLENBQWY7QUFDQUosTUFBQUEsUUFBUSxHQUFHekksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkksSUFBUixDQUFhLEtBQWIsQ0FBWDs7QUFHQSxVQUFJUCxTQUFTLElBQUksRUFBYixJQUFtQkEsU0FBUyxHQUFHLENBQW5DLEVBQXNDO0FBQ2xDSSxRQUFBQSxjQUFjLElBQUlJLE1BQU0sQ0FBQ1IsU0FBRCxDQUF4QjtBQUNIOztBQUVELFVBQUlDLFVBQVUsSUFBSSxFQUFkLElBQW9CQSxVQUFVLEdBQUcsQ0FBckMsRUFBd0M7QUFDcENHLFFBQUFBLGNBQWMsSUFBSUksTUFBTSxDQUFDUCxVQUFELENBQXhCO0FBQ0g7O0FBRUQsVUFBSUMsWUFBWSxJQUFJLEVBQWhCLElBQXNCQSxZQUFZLEdBQUcsQ0FBekMsRUFBNEM7QUFDeENHLFFBQUFBLGdCQUFnQixJQUFJRyxNQUFNLENBQUNOLFlBQUQsQ0FBMUI7QUFDSDs7QUFFRCxVQUFJQyxRQUFRLElBQUksRUFBWixJQUFrQkEsUUFBUSxHQUFHLENBQWpDLEVBQW9DO0FBQ2hDRyxRQUFBQSxZQUFZLElBQUlFLE1BQU0sQ0FBQ0wsUUFBRCxDQUF0QjtBQUNIO0FBRUosS0F4QkQ7QUF5QkF6SSxJQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWWpFLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDNEgsSUFBdkMsQ0FBNENwQixZQUFZLENBQUM0QixjQUFELENBQXhEO0FBQ0ExSSxJQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWWpFLElBQVosQ0FBaUIsaUJBQWpCLEVBQW9DNEgsSUFBcEMsQ0FBeUNwQixZQUFZLENBQUM0QixjQUFELENBQXJEO0FBQ0ExSSxJQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWWpFLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDNEgsSUFBdEMsQ0FBMkNwQixZQUFZLENBQUM2QixnQkFBRCxDQUF2RDtBQUNBM0ksSUFBQUEsQ0FBQyxDQUFDdUUsUUFBRCxDQUFELENBQVlqRSxJQUFaLENBQWlCLGVBQWpCLEVBQWtDNEgsSUFBbEMsQ0FBdUNwQixZQUFZLENBQUM4QixZQUFELENBQW5EO0FBRUg7O0FBRUQsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBRXpCL0ksSUFBQUEsQ0FBQyxDQUFDdUUsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixVQUFJd0UsZUFBZSxHQUFHaEosQ0FBQyxDQUFDLFdBQUQsQ0FBdkI7O0FBRUEsVUFBSWdKLGVBQUosRUFBcUI7QUFFakIsWUFBSUMsY0FBYyxHQUFHRCxlQUFlLENBQUMxSSxJQUFoQixDQUFxQixJQUFyQixDQUFyQjs7QUFFQSxZQUFJMkksY0FBYyxDQUFDMUgsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUUzQjBILFVBQUFBLGNBQWMsQ0FBQ3JILElBQWYsQ0FBb0IsWUFBVztBQUMzQixnQkFBSTVCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtJLElBQVIsR0FBZTNHLE1BQWYsR0FBd0IsQ0FBeEIsSUFBNkJ2QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrSSxJQUFSLE1BQWtCLENBQW5ELEVBQXNEO0FBQ2xEbEksY0FBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0ksSUFBUixDQUFhcEIsWUFBWSxDQUFDOUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0ksSUFBUixFQUFELENBQXpCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hsSSxjQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLE1BQVIsR0FBaUJBLE1BQWpCLEdBQTBCQSxNQUExQixHQUFtQ0gsUUFBbkMsQ0FBNEMsUUFBNUM7QUFDSDtBQUNKLFdBTkQ7QUFPSDtBQUNKO0FBQ0osS0FsQkQ7QUFtQkgsR0FyQkQ7O0FBdUJBLE1BQU15SSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFFM0JsSixJQUFBQSxDQUFDLENBQUN1RSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLFVBQUkyRSxXQUFXLEdBQUduSixDQUFDLENBQUMsaUJBQUQsQ0FBbkI7QUFDQSxVQUFJb0osYUFBYSxHQUFHcEosQ0FBQyxDQUFDLG1CQUFELENBQXJCO0FBQ0EsVUFBSXFKLFNBQVMsR0FBR3JKLENBQUMsQ0FBQyxlQUFELENBQWpCO0FBQ0EsVUFBSXNKLGNBQWMsR0FBR3RKLENBQUMsQ0FBQyxvQkFBRCxDQUF0QjtBQUVBbUosTUFBQUEsV0FBVyxDQUFDakIsSUFBWixDQUFpQnBCLFlBQVksQ0FBQ3FDLFdBQVcsQ0FBQ2pCLElBQVosRUFBRCxDQUE3QjtBQUNBa0IsTUFBQUEsYUFBYSxDQUFDbEIsSUFBZCxDQUFtQnBCLFlBQVksQ0FBQ3NDLGFBQWEsQ0FBQ2xCLElBQWQsRUFBRCxDQUEvQjtBQUNBbUIsTUFBQUEsU0FBUyxDQUFDbkIsSUFBVixDQUFlcEIsWUFBWSxDQUFDdUMsU0FBUyxDQUFDbkIsSUFBVixFQUFELENBQTNCO0FBQ0FvQixNQUFBQSxjQUFjLENBQUNwQixJQUFmLENBQW9CcEIsWUFBWSxDQUFDd0MsY0FBYyxDQUFDcEIsSUFBZixFQUFELENBQWhDLEVBVHlCLENBV3pCO0FBRUgsS0FiRDtBQWVBbEksSUFBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEN1SixNQUExQyxDQUFpRCxZQUFXO0FBQ3hEN0IsTUFBQUEsZUFBZSxDQUFDMUgsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFmOztBQUVBLFVBQUlBLENBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDa0ksSUFBM0MsTUFBcUQsQ0FBekQsRUFBNEQ7QUFDeERsSSxRQUFBQSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q1ksTUFBeEMsR0FBaUR3RCxJQUFqRDtBQUNIOztBQUVELFVBQUlwRSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q2tJLElBQXhDLE1BQWtELENBQXRELEVBQXlEO0FBQ3JEbEksUUFBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNZLE1BQXJDLEdBQThDd0QsSUFBOUM7QUFDSDs7QUFDRCxVQUFJcEUsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMENrSSxJQUExQyxNQUFvRCxDQUF4RCxFQUEyRDtBQUN2RGxJLFFBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDWSxNQUF2QyxHQUFnRHdELElBQWhEO0FBQ0g7O0FBQ0QsVUFBSXBFLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDa0ksSUFBdEMsTUFBZ0QsQ0FBcEQsRUFBdUQ7QUFDbkRsSSxRQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1ksTUFBbkMsR0FBNEN3RCxJQUE1QztBQUNIO0FBQ0osS0FoQkQ7QUFrQkgsR0FuQ0Q7O0FBcUNBLE1BQU1vRixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBRXZCeEosSUFBQUEsQ0FBQyxDQUFDdUUsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QnhFLE1BQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCeUosS0FBdEIsQ0FBNEIsVUFBU25FLEtBQVQsRUFBZ0I7QUFFeEMsWUFBSXRGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVDLFFBQVIsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUM1QixjQUFJbUgsbUJBQW1CLEdBQUcxSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxnQkFBYixDQUExQjs7QUFDQSxjQUFJb0osbUJBQUosRUFBeUI7QUFDckIsZ0JBQUlULGNBQWMsR0FBR1MsbUJBQW1CLENBQUNwSixJQUFwQixDQUF5QixJQUF6QixDQUFyQjs7QUFDQSxnQkFBSTJJLGNBQWMsQ0FBQzFILE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0IwSCxjQUFBQSxjQUFjLENBQUNySCxJQUFmLENBQW9CLFlBQVc7QUFDM0I1QixnQkFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0ksSUFBUixDQUFhcEIsWUFBWSxDQUFDOUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsdUJBQWIsQ0FBRCxDQUF6QjtBQUNILGVBRkQ7QUFHSDtBQUNKO0FBQ0o7QUFDSixPQWJEO0FBY0gsS0FmRDtBQWdCSCxHQWxCRDs7QUFxQkEsTUFBSVAsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J1QixNQUExQixFQUFrQztBQUM5QmlJLElBQUFBLFlBQVk7QUFDZjs7QUFFRCxNQUFJeEosQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0N1QixNQUF4QyxJQUFrRHZCLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDdUIsTUFBdkYsSUFBaUd2QixDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q3VCLE1BQXhJLElBQWtKdkIsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0N1QixNQUE1TCxFQUFvTTtBQUVoTSxRQUFJdkIsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNrSSxJQUEzQyxNQUFxRCxDQUF6RCxFQUE0RDtBQUN4RGxJLE1BQUFBLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDWSxNQUF4QyxHQUFpRHdELElBQWpEO0FBQ0g7O0FBRUQsUUFBSXBFLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDa0ksSUFBeEMsTUFBa0QsQ0FBdEQsRUFBeUQ7QUFDckRsSSxNQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1ksTUFBckMsR0FBOEN3RCxJQUE5QztBQUNIOztBQUNELFFBQUlwRSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ2tJLElBQTFDLE1BQW9ELENBQXhELEVBQTJEO0FBQ3ZEbEksTUFBQUEsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNZLE1BQXZDLEdBQWdEd0QsSUFBaEQ7QUFDSDs7QUFDRCxRQUFJcEUsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NrSSxJQUF0QyxNQUFnRCxDQUFwRCxFQUF1RDtBQUNuRGxJLE1BQUFBLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DWSxNQUFuQyxHQUE0Q3dELElBQTVDO0FBQ0g7O0FBQ0Q4RSxJQUFBQSxnQkFBZ0I7QUFDbkI7O0FBRUQsTUFBSWxKLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXVCLE1BQW5CLEVBQTJCO0FBQ3ZCd0gsSUFBQUEsY0FBYztBQUNqQjtBQUNKLENBM09ELEVBMk9HdEgsTUEzT0g7QUNBQTs7QUFFQWlDLE1BQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDLE1BQUlpRSxPQUFPLEdBQUlwRixRQUFRLENBQUNLLHNCQUFULENBQWdDLGVBQWhDLENBQWY7O0FBRUEsTUFBSStFLE9BQUosRUFBYTtBQUNUQyxJQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV0YsT0FBWCxFQUFvQkcsT0FBcEIsQ0FBNEIsVUFBQUMsTUFBTSxFQUFJO0FBQ2xDQSxNQUFBQSxNQUFNLENBQUNyRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDSixLQUFELEVBQVEwRSxZQUFSLEVBQXlCO0FBQ3REQSxRQUFBQSxZQUFZLEdBQUdDLGFBQWEsQ0FBQ0YsTUFBRCxDQUE1QjtBQUNBRyxRQUFBQSxpQkFBaUIsQ0FBQ0YsWUFBRCxDQUFqQjtBQUNILE9BSEQ7QUFJSCxLQUxEO0FBTUg7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkYsTUFBdkIsRUFBK0I7QUFDM0IsUUFBSUksS0FBSyxHQUFHSixNQUFNLENBQUNoRixZQUFQLENBQW9CLHFCQUFwQixDQUFaOztBQUVBLFFBQUlvRixLQUFLLEtBQUssU0FBZCxFQUF5QjtBQUNyQixVQUFJQyxtQkFBbUIsR0FBR0wsTUFBTSxDQUFDdkgsT0FBUCxDQUFlLG9CQUFmLEVBQXFDdUMsWUFBckMsQ0FBa0Qsa0JBQWxELENBQTFCO0FBQ0EsVUFBSXNGLFlBQVksR0FBR04sTUFBTSxDQUFDaEYsWUFBUCxDQUFvQixtQkFBcEIsQ0FBbkI7QUFDQSxVQUFJdUYsVUFBVSxHQUFHUCxNQUFNLENBQUNoRixZQUFQLENBQW9CLGlCQUFwQixDQUFqQjtBQUVBb0YsTUFBQUEsS0FBSyw0QkFBcUJDLG1CQUFyQixjQUE0Q0MsWUFBNUMsMEJBQXdFQyxVQUF4RSxDQUFMO0FBRUEsYUFBT0gsS0FBUDtBQUNILEtBUkQsTUFRTztBQUNILGFBQU9BLEtBQVA7QUFDSDtBQUNKOztBQUVELFdBQVNELGlCQUFULENBQTJCSyxTQUEzQixFQUFzQztBQUNsQzdHLElBQUFBLE1BQU0sQ0FBQzhHLE1BQVAsR0FBZ0I5RyxNQUFNLENBQUM4RyxNQUFQLElBQWlCLEVBQWpDO0FBQ0E5RyxJQUFBQSxNQUFNLENBQUM4RyxNQUFQLENBQWNDLElBQWQsQ0FBbUIsVUFBU0MsT0FBVCxFQUFrQjtBQUNqQ0EsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFDUkMsUUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxDQURBO0FBRVJDLFFBQUFBLE1BQU0sRUFBRU47QUFGQSxPQUFaO0FBSUgsS0FMRDtBQU1IO0FBQ0osQ0FyQ0Q7OztBQ0ZBLENBQUMsWUFBVztBQUVSO0FBQ0EsTUFBSU8sU0FBUyxHQUFHOUssQ0FBQyxDQUFDLGFBQUQsQ0FBakI7O0FBRUEsTUFBSThLLFNBQVMsQ0FBQ3ZKLE1BQWQsRUFBc0I7QUFDbEJ1SixJQUFBQSxTQUFTLENBQUMzSyxFQUFWLENBQWEsT0FBYixFQUFzQixVQUFTbUYsS0FBVCxFQUFnQjtBQUNsQ0EsTUFBQUEsS0FBSyxDQUFDWixjQUFOO0FBQ0FoQixNQUFBQSxNQUFNLENBQUM4QixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0gsS0FIRDtBQUlIOztBQUVEeEYsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU21GLEtBQVQsRUFBZ0I7QUFDM0NBLElBQUFBLEtBQUssQ0FBQ1osY0FBTjtBQUNBcUcsSUFBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0gsR0FIRDtBQUlILENBaEJELEVBZ0JHdkosTUFoQkg7OztBQ0FBLENBQUMsVUFBVXpCLENBQVYsRUFBYTtBQUNYLE1BQU1pTCxRQUFRLEdBQUdqTCxDQUFDLENBQUMsaUJBQUQsQ0FBbEI7QUFDQSxNQUFNa0wsY0FBYyxHQUFHbEwsQ0FBQyxDQUFDLG1CQUFELENBQXhCO0FBQ0EsTUFBTW1MLFlBQVksR0FBR25MLENBQUMsQ0FBQyxpQkFBRCxDQUF0QjtBQUNBLE1BQU1vTCxXQUFXLEdBQUdwTCxDQUFDLENBQUMsZUFBRCxDQUFyQjtBQUNBLE1BQU1xTCxRQUFRLEdBQUdyTCxDQUFDLENBQUMsWUFBRCxDQUFsQjs7QUFFQSxNQUFNc0wsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDM0ssTUFBRCxFQUFTNEssWUFBVCxFQUF1QkMsV0FBdkIsRUFBdUM7QUFDN0QsUUFBTUMsT0FBTyxHQUFHekwsQ0FBQyxDQUFDVyxNQUFELENBQWpCO0FBQ0E4SyxJQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JGLFdBQWhCLEVBQTZCRyxXQUE3QixDQUF5Q0osWUFBekM7QUFDRixHQUhEOztBQUtBLE1BQUlOLFFBQVEsQ0FBQzFKLE1BQWIsRUFBcUI7QUFDbEIySixJQUFBQSxjQUFjLENBQUMvSyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFVBQUNDLENBQUQsRUFBTztBQUMvQixVQUFNd0wsV0FBVyxHQUFHNUwsQ0FBQyxDQUFDSSxDQUFDLENBQUNPLE1BQUgsQ0FBckI7QUFDQTJLLE1BQUFBLGdCQUFnQixDQUFDTSxXQUFELEVBQWMsUUFBZCxFQUF3QixpQkFBeEIsQ0FBaEI7O0FBRUEsVUFBSUEsV0FBVyxDQUFDRixPQUFaLENBQW9CLGlCQUFwQixFQUF1Q25KLFFBQXZDLENBQWdELGlCQUFoRCxDQUFKLEVBQXdFO0FBQ3JFcUosUUFBQUEsV0FBVyxDQUFDRixPQUFaLENBQW9CLGlCQUFwQixFQUF1Q2xLLFdBQXZDLENBQW1ELGlCQUFuRDtBQUNBMkosUUFBQUEsWUFBWSxDQUFDM0osV0FBYixDQUF5QixRQUF6QjtBQUNBNEosUUFBQUEsV0FBVyxDQUFDM0ssUUFBWixDQUFxQixRQUFyQjtBQUNBVCxRQUFBQSxDQUFDLENBQUNxTCxRQUFRLENBQUMsQ0FBRCxDQUFULENBQUQsQ0FBZTVLLFFBQWYsQ0FBd0IsT0FBeEI7QUFDRjtBQUNILEtBVkQ7QUFZQTBLLElBQUFBLFlBQVksQ0FBQ2hMLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzdCLFVBQU13TCxXQUFXLEdBQUc1TCxDQUFDLENBQUNJLENBQUMsQ0FBQ08sTUFBSCxDQUFyQjtBQUNBMkssTUFBQUEsZ0JBQWdCLENBQUNNLFdBQUQsRUFBYyxpQkFBZCxFQUFpQyxpQkFBakMsQ0FBaEI7QUFFQUEsTUFBQUEsV0FBVyxDQUFDRixPQUFaLENBQW9CLGlCQUFwQixFQUF1Q3BMLElBQXZDLENBQTRDLG1CQUE1QyxFQUFpRWtCLFdBQWpFLENBQTZFLFFBQTdFO0FBQ0EySixNQUFBQSxZQUFZLENBQUMxSyxRQUFiLENBQXNCLFFBQXRCO0FBQ0EySyxNQUFBQSxXQUFXLENBQUM1SixXQUFaLENBQXdCLFFBQXhCO0FBQ0E2SixNQUFBQSxRQUFRLENBQUM3SixXQUFULENBQXFCLE9BQXJCO0FBQ0YsS0FSRDtBQVNGO0FBQ0gsQ0FuQ0QsRUFtQ0dDLE1BbkNIOzs7QUNBQSxDQUFDLFVBQVV6QixDQUFWLEVBQWE7QUFDWjtBQUNBLE1BQU02TCxXQUFXLEdBQUc3TCxDQUFDLENBQUMsZUFBRCxDQUFyQjtBQUNBLE1BQU04TCxPQUFPLEdBQUc5TCxDQUFDLENBQUMsTUFBRCxDQUFqQjs7QUFFQSxNQUFJNkwsV0FBVyxDQUFDdEssTUFBaEIsRUFBd0I7QUFDdEJ1SyxJQUFBQSxPQUFPLENBQUNyTCxRQUFSLENBQWlCLGlCQUFqQjtBQUVBa0MsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmtKLE1BQUFBLFdBQVcsQ0FBQ0UsT0FBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUN0SyxXQUFSLENBQW9CLGlCQUFwQjtBQUNELEtBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxHQVpXLENBY1o7OztBQUNBLE1BQU13SyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJoTSxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkcsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFVBQU13TCxXQUFXLEdBQUc1TCxDQUFDLENBQUNJLENBQUMsQ0FBQ08sTUFBSCxDQUFyQjtBQUNBLFVBQU1zTCxpQkFBaUIsR0FBR0wsV0FBVyxDQUFDRixPQUFaLENBQW9CLHNCQUFwQixDQUExQjtBQUNBLFVBQU1RLGFBQWEsR0FBR04sV0FBVyxDQUFDRixPQUFaLENBQW9CLG9CQUFwQixDQUF0QjtBQUNBLFVBQU1TLGNBQWMsR0FBR1AsV0FBVyxDQUFDRixPQUFaLENBQW9CLGlCQUFwQixDQUF2QixDQUpzQyxDQU10Qzs7QUFDQSxVQUFJLENBQUNPLGlCQUFpQixDQUFDMUosUUFBbEIsQ0FBMkIsZ0JBQTNCLENBQUwsRUFBbUQ7QUFDakQwSixRQUFBQSxpQkFBaUIsQ0FBQ3hMLFFBQWxCLENBQTJCLGdCQUEzQjtBQUNELE9BVHFDLENBV3RDOzs7QUFDQSxVQUNFMEwsY0FBYyxDQUFDNUosUUFBZixDQUF3QixRQUF4QixLQUNBLENBQUNxSixXQUFXLENBQUNySixRQUFaLENBQXFCLG1CQUFyQixDQURELElBRUEsQ0FBQ3FKLFdBQVcsQ0FBQ0YsT0FBWixHQUFzQm5KLFFBQXRCLENBQStCLG1CQUEvQixDQUhILEVBSUU7QUFDQTBKLFFBQUFBLGlCQUFpQixDQUFDekssV0FBbEIsQ0FBOEIsZ0JBQTlCO0FBQ0EySyxRQUFBQSxjQUFjLENBQUMzSyxXQUFmLENBQTJCLFFBQTNCLEVBRkEsQ0FJQTtBQUNELE9BVEQsTUFTTztBQUNMO0FBQ0EwSyxRQUFBQSxhQUFhLENBQUM1TCxJQUFkLENBQW1CLHdCQUFuQixFQUE2Q2tCLFdBQTdDLENBQXlELFFBQXpEO0FBQ0EySyxRQUFBQSxjQUFjLENBQUMxTCxRQUFmLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRixLQTFCRDtBQTJCRCxHQTVCRDs7QUE4QkF1TCxFQUFBQSxhQUFhO0FBRWQsQ0EvQ0QsRUErQ0d2SyxNQS9DSDs7O0FDQUEsQ0FBQyxVQUFDekIsQ0FBRCxFQUFPO0FBQ0osTUFBTW9NLFlBQVksR0FBR3BNLENBQUMsQ0FBQyxnREFBRCxDQUF0QjtBQUVBb00sRUFBQUEsWUFBWSxDQUFDak0sRUFBYixDQUFnQixPQUFoQixFQUF5QixVQUFDQyxDQUFELEVBQU87QUFDNUJKLElBQUFBLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFILENBQUQsQ0FBWWdMLFdBQVosQ0FBd0IsUUFBeEI7QUFDQTNMLElBQUFBLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFILENBQUQsQ0FBWUwsSUFBWixDQUFpQixXQUFqQixFQUE4QnFMLFdBQTlCLENBQTBDLFNBQTFDO0FBQ0gsR0FIRDtBQUlILENBUEQsRUFPR2xLLE1BUEg7OztBQ0FBLENBQUMsVUFBVXpCLENBQVYsRUFBYTtBQUNWLE1BQU1xTSxlQUFlLEdBQUc5SCxRQUFRLENBQUMrSCxjQUFULENBQXdCLG1CQUF4QixDQUF4Qjs7QUFFQSxNQUFJRCxlQUFKLEVBQXFCO0FBQUEsUUFvQlJFLElBcEJRLEdBb0JqQixTQUFTQSxJQUFULEdBQWdCO0FBQ1osVUFBSUMsYUFBSixFQUFtQjtBQUNmQSxRQUFBQSxhQUFhLENBQUNDLFNBQWQsR0FBMEIsWUFBMUI7QUFDSDs7QUFDREMsTUFBQUEsUUFBUTtBQUNYLEtBekJnQjs7QUFBQSxRQXNDUkEsUUF0Q1EsR0FzQ2pCLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIsVUFBSUMsR0FBRyxhQUFNQyxRQUFOLGtDQUFzQ0MsU0FBdEMsdUJBQTREQyxRQUE1RCxtQkFBNkVDLElBQTdFLENBQVA7O0FBRUEsVUFBSUMsUUFBSixFQUFjO0FBQ1ZMLFFBQUFBLEdBQUcsYUFBTUEsR0FBTixpQkFBZ0JLLFFBQWhCLENBQUg7QUFDSDs7QUFFRCxVQUFJQyxJQUFKLEVBQVU7QUFDTk4sUUFBQUEsR0FBRyxhQUFNQSxHQUFOLGlCQUFnQk0sSUFBaEIsQ0FBSDtBQUNIOztBQUVELFVBQUlDLE1BQUosRUFBWTtBQUNSUCxRQUFBQSxHQUFHLGFBQU1BLEdBQU4scUJBQW9CTyxNQUFwQixDQUFIO0FBQ0gsT0FiZSxDQWVoQjs7O0FBQ0EsVUFBSUMsT0FBSixFQUFhO0FBQ1RSLFFBQUFBLEdBQUcsR0FBR0EsR0FBRyxzQkFBZVEsT0FBZixDQUFUO0FBQ0g7O0FBRURuTixNQUFBQSxDQUFDLENBQUNvTixHQUFGLENBQU9ULEdBQVAsRUFBWSxVQUFVOUQsSUFBVixFQUFpQjtBQUN6QndFLFFBQUFBLFVBQVUsQ0FBQ3hFLElBQUQsQ0FBVjtBQUNILE9BRkQ7QUFHSCxLQTdEZ0I7O0FBQUEsUUErRFJ3RSxVQS9EUSxHQStEakIsU0FBU0EsVUFBVCxDQUFvQnhFLElBQXBCLEVBQTBCO0FBQ3RCLFVBQUksQ0FBQ0EsSUFBSSxDQUFDc0UsT0FBTCxDQUFhNUwsTUFBZCxJQUF3QmlMLGFBQTVCLEVBQTJDO0FBQ3ZDQSxRQUFBQSxhQUFhLENBQUNySCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtBQUNILE9BRkQsTUFFTztBQUNILFlBQUlrSSxJQUFKOztBQUVBLFlBQUlkLGFBQUosRUFBbUI7QUFDZixjQUFHM0QsSUFBSSxDQUFDaEcsSUFBTCxDQUFVdEIsTUFBYixFQUFxQjtBQUNqQmlMLFlBQUFBLGFBQWEsQ0FBQ3JILFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUNBb0gsWUFBQUEsYUFBYSxDQUFDckgsU0FBZCxDQUF3QmEsTUFBeEIsQ0FBK0IsUUFBL0I7QUFDSCxXQUhELE1BR087QUFDSHdHLFlBQUFBLGFBQWEsQ0FBQ3JILFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FvSCxZQUFBQSxhQUFhLENBQUNySCxTQUFkLENBQXdCYSxNQUF4QixDQUErQixnQkFBL0I7QUFDSDtBQUNKOztBQUVELFlBQUl1SCxPQUFPLEdBQUcsRUFBZDtBQUNBMUUsUUFBQUEsSUFBSSxDQUFDc0UsT0FBTCxDQUFhckQsT0FBYixDQUFxQixVQUFBMEQsSUFBSSxFQUFJO0FBRXpCLGNBQUlDLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUN4QixnQkFBSUMsU0FBUyxLQUFLLEtBQWxCLEVBQXlCO0FBQ3JCSixjQUFBQSxJQUFJLG9CQUFhSyxVQUFVLENBQUNILElBQUksQ0FBQ0ksYUFBTixDQUF2QixhQUFKO0FBQ0gsYUFGRCxNQUVPO0FBQ0hOLGNBQUFBLElBQUksR0FBRyxFQUFQO0FBQ0g7O0FBRURDLFlBQUFBLE9BQU8sZ09BSU9DLElBQUksQ0FBQ0ssU0FBTCxLQUFtQixLQUFuQix3QkFDZUwsSUFBSSxDQUFDSyxTQURwQixvQ0FDMkQsRUFMbEUsNEtBU09QLElBVFAsc0ZBVXdDSyxVQUFVLENBQUNILElBQUksQ0FBQ00sVUFBTixDQVZsRCxrRUFXZ0JOLElBQUksQ0FBQ08sU0FYckIsbU1BQVA7QUFlSCxXQXRCRCxNQXNCTyxJQUFJTixRQUFRLEtBQUssUUFBakIsRUFBMkI7QUFDOUIsZ0JBQUk1SSxJQUFJLEdBQUcsRUFBWDs7QUFDQSxnQkFBSTJJLElBQUksQ0FBQ1EsWUFBTCxJQUFxQlIsSUFBSSxDQUFDUSxZQUFMLElBQXFCLEVBQTlDLEVBQWtEO0FBQzlDbkosY0FBQUEsSUFBSSxrSEFFdUI4SSxVQUFVLENBQUNILElBQUksQ0FBQ1EsWUFBTixDQUZqQyw2Q0FBSjtBQUlIOztBQUVEVCxZQUFBQSxPQUFPLDhKQUdZQyxJQUFJLENBQUNPLFNBSGpCLDRIQUl5Q1AsSUFBSSxDQUFDSyxTQUFMLElBQWtCLEtBQWxCLEdBQTBCLFNBQTFCLEdBQXNDLEVBSi9FLGdHQU1XTCxJQUFJLENBQUNLLFNBQUwsS0FBbUIsS0FBbkIsd0JBQ2VMLElBQUksQ0FBQ0ssU0FEcEIsb0NBQzJELEVBUHRFLG9JQVdHaEosSUFYSCx1R0FBUDtBQWVIO0FBQ0osU0FqREQ7QUFtREE3RSxRQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ3dCLFdBQW5DLENBQStDLEtBQS9DO0FBRUF5TSxRQUFBQSxVQUFVLENBQUNDLFNBQVgsSUFBd0JYLE9BQXhCO0FBQ0g7O0FBRUQsVUFBSWYsYUFBSixFQUFtQjtBQUNmQSxRQUFBQSxhQUFhLENBQUNDLFNBQWQsR0FBMEIwQixTQUExQjtBQUNIO0FBQ0osS0EzSWdCOztBQUFBLFFBNklSUixVQTdJUSxHQTZJakIsU0FBU0EsVUFBVCxDQUFvQlMsR0FBcEIsRUFBeUI7QUFDckIsYUFBT0EsR0FBRyxDQUFDQyxPQUFKLENBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QkEsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBcUMsR0FBckMsRUFBMENBLE9BQTFDLENBQWtELElBQWxELEVBQXdELEdBQXhELEVBQTZEQSxPQUE3RCxDQUFxRSxJQUFyRSxFQUEyRSxHQUEzRSxFQUFnRkEsT0FBaEYsQ0FBd0YsSUFBeEYsRUFBOEYsR0FBOUYsQ0FBUDtBQUNILEtBL0lnQjs7QUFDakIsUUFBTTdCLGFBQWEsR0FBR2pJLFFBQVEsQ0FBQytILGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxRQUFJTSxRQUFRLEdBQUdsSixNQUFNLENBQUNHLFFBQVAsQ0FBZ0J5SyxNQUEvQjtBQUNBLFFBQUl2QixJQUFJLEdBQUcsQ0FBWCxDQUhpQixDQUdIOztBQUNkLFFBQUlGLFNBQVMsR0FBR1IsZUFBZSxDQUFDdEgsWUFBaEIsQ0FBNkIsU0FBN0IsQ0FBaEI7QUFDQSxRQUFJb0ksT0FBTyxHQUFHZCxlQUFlLENBQUN0SCxZQUFoQixDQUE2QixjQUE3QixDQUFkO0FBQ0EsUUFBSStILFFBQVEsR0FBR1QsZUFBZSxDQUFDdEgsWUFBaEIsQ0FBNkIsZUFBN0IsQ0FBZjtBQUNBLFFBQUkwSSxRQUFRLEdBQUdwQixlQUFlLENBQUN0SCxZQUFoQixDQUE2QixlQUE3QixDQUFmO0FBQ0EsUUFBSTJJLFNBQVMsR0FBR3JCLGVBQWUsQ0FBQ3RILFlBQWhCLENBQTZCLGdCQUE3QixDQUFoQjtBQUNBLFFBQUlpSSxRQUFRLEdBQUdYLGVBQWUsQ0FBQ3RILFlBQWhCLENBQTZCLFVBQTdCLENBQWY7QUFDQSxRQUFJa0ksSUFBSSxHQUFHWixlQUFlLENBQUN0SCxZQUFoQixDQUE2QixXQUE3QixDQUFYO0FBQ0EsUUFBSW1JLE1BQU0sR0FBR2IsZUFBZSxDQUFDdEgsWUFBaEIsQ0FBNkIsYUFBN0IsQ0FBYjtBQUNBLFFBQUlrSixVQUFVLEdBQUcxSixRQUFRLENBQUMrSCxjQUFULENBQXdCLHNCQUF4QixDQUFqQjtBQUNBLFFBQUk2QixTQUFTLEdBQUcsV0FBaEI7QUFDQSxRQUFJSSxhQUFhLEdBQUdsQyxlQUFlLENBQUN0SCxZQUFoQixDQUE2QixzQkFBN0IsQ0FBcEI7O0FBRUEsUUFBSXdKLGFBQUosRUFBbUI7QUFDZkosTUFBQUEsU0FBUyxHQUFHSSxhQUFaO0FBQ0g7O0FBU0QsUUFBSS9CLGFBQUosRUFBbUI7QUFDZkEsTUFBQUEsYUFBYSxDQUFDOUcsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUMxQ3FILFFBQUFBLElBQUksR0FBR0EsSUFBSSxHQUFHLENBQWQ7QUFDQVIsUUFBQUEsSUFBSTtBQUNQLE9BSEQ7QUFJSDs7QUFFRDdJLElBQUFBLE1BQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFXO0FBQ25ENkcsTUFBQUEsSUFBSTtBQUNQLEtBRkQ7QUE4R0g7QUFDSixDQXBKRCxFQW9KRzlLLE1BcEpIOzs7QUNBQSxDQUFDLFVBQVN6QixDQUFULEVBQVk7QUFDVCxNQUFNd08sVUFBVSxHQUFHeE8sQ0FBQyxDQUFDLHNCQUFELENBQXBCO0FBRUF3TyxFQUFBQSxVQUFVLENBQUNyTyxFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFDQyxDQUFELEVBQU87QUFDMUJKLElBQUFBLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFILENBQUQsQ0FBWStLLE9BQVosQ0FBb0IsZUFBcEIsRUFBcUNDLFdBQXJDLENBQWlELFFBQWpEO0FBQ0gsR0FGRDtBQUdILENBTkQsRUFNR2xLLE1BTkg7OztBQ0FBLENBQUMsVUFBQ3pCLENBQUQsRUFBTztBQUNMLE1BQU15TyxRQUFRLEdBQUd6TyxDQUFDLENBQUMsd0JBQUQsQ0FBbEI7O0FBRUEsTUFBSXlPLFFBQVEsQ0FBQ2xOLE1BQWIsRUFBcUI7QUFDbEJrTixJQUFBQSxRQUFRLENBQUNoTyxRQUFULENBQWtCLE9BQWxCLEVBQTJCaU8sSUFBM0IsQ0FBZ0Msc0NBQWhDO0FBQ0Y7QUFDSCxDQU5ELEVBTUdqTixNQU5IOzs7QUNBQSxDQUFDLFlBQU07QUFDSjtBQUNBLE1BQU1rTixlQUFlLEdBQ2xCLHdIQURIO0FBR0EsTUFBTUMsVUFBVSxHQUFHNU8sQ0FBQyxDQUFDLG1CQUFELENBQXBCOztBQUVBLE1BQU02TyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDOUJELElBQUFBLFVBQVUsQ0FBQ0UsS0FBWCxDQUFpQixVQUFDMU8sQ0FBRCxFQUFPO0FBQ3JCLFVBQUlBLENBQUMsQ0FBQzJPLE9BQUYsSUFBYSxDQUFqQixFQUFvQjtBQUNqQjtBQUNBQyxRQUFBQSxpQkFBaUIsQ0FBQ0osVUFBVSxDQUFDaEgsR0FBWCxFQUFELENBQWpCO0FBQ0Y7QUFDSCxLQUxEO0FBTUYsR0FQRDs7QUFTQSxNQUFNb0gsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxRQUFELEVBQWM7QUFDckMsUUFBSUEsUUFBUSxJQUFJLEVBQWhCLEVBQW9CO0FBQ2pCLFVBQUksQ0FBQ0EsUUFBUSxDQUFDQyxLQUFULENBQWVQLGVBQWYsQ0FBTCxFQUFzQztBQUNuQ0MsUUFBQUEsVUFBVSxDQUNOeEIsR0FESixDQUNRLENBRFIsRUFFSStCLGlCQUZKLENBRXNCLGtDQUZ0QjtBQUdBUCxRQUFBQSxVQUFVLENBQUMzTSxHQUFYLENBQWUsa0JBQWYsRUFBbUMsMkJBQW5DO0FBQ0YsT0FMRCxNQUtPO0FBQ0oyTSxRQUFBQSxVQUFVLENBQUMzTSxHQUFYLENBQWUsa0JBQWYsRUFBbUMsT0FBbkM7QUFDQTJNLFFBQUFBLFVBQVUsQ0FBQ3hCLEdBQVgsQ0FBZSxDQUFmLEVBQWtCK0IsaUJBQWxCLENBQW9DLEVBQXBDO0FBQ0FQLFFBQUFBLFVBQVUsQ0FBQ3hCLEdBQVgsQ0FBZSxDQUFmLEVBQWtCZ0MsY0FBbEIsQ0FBaUMsSUFBakM7QUFDRjtBQUNILEtBWEQsTUFXTztBQUNKUixNQUFBQSxVQUFVLENBQUMzTSxHQUFYLENBQWUsa0JBQWYsRUFBbUMsT0FBbkM7QUFDQTJNLE1BQUFBLFVBQVUsQ0FBQ3hCLEdBQVgsQ0FBZSxDQUFmLEVBQWtCK0IsaUJBQWxCLENBQW9DLEVBQXBDO0FBQ0FQLE1BQUFBLFVBQVUsQ0FBQ2hILEdBQVgsQ0FBZSxFQUFmO0FBQ0FnSCxNQUFBQSxVQUFVLENBQUN4QixHQUFYLENBQWUsQ0FBZixFQUFrQmdDLGNBQWxCLENBQWlDLElBQWpDO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0YsR0FwQkQ7O0FBc0JBUCxFQUFBQSxrQkFBa0I7QUFDcEIsQ0F2Q0Q7OztBQ0FBO0FBQ0FRLElBQUksQ0FBQ0MsS0FBTCxDQUFXLE9BQVgiLCJmaWxlIjoiYnVpbGQubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcbiAgICBjb25zdCBjYXJkID0gJChcIi50ZWFtLXRpbGVzIC5jYXJkXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gJChcIiNhYm91dFByb2ZpbGVzXCIpO1xuXG4gICAgLy8gYm9vdHN0cmFwIGV2ZW50IGZvciBjbG9zaW5nIG1vZGFsXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjbGVhckhUTUwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYW4gdXAgdGhlIG1vZGFsIEhUTUxcbiAgICBjb25zdCBjbGVhckhUTUwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIuY29udGVudC1sZWZ0IGltZ1wiKS5hdHRyKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICBtb2RhbC5maW5kKFwiaDNcIikuaHRtbChcIlwiKTtcbiAgICAgICAgbW9kYWwuZmluZChcImg0XCIpLmh0bWwoXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIubW9kYWwtbWFpbi1jb250ZW50XCIpLmh0bWwoXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIubW9kYWwtc3VidGl0bGUgc3BhblwiKS5odG1sKFwiXCIpO1xuICAgICAgICAvLyB0d2l0dGVyXG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDEpIGFcIikuYXR0cihcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDEpIHNwYW5cIikuaHRtbChcIlwiKTtcbiAgICAgICAgbW9kYWwuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaTpudGgtY2hpbGQoMSlcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAgIC8vIGxpbmtlZGluXG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDIpIGFcIikuYXR0cihcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDIpIHNwYW5cIikuaHRtbChcIlwiKTtcbiAgICAgICAgbW9kYWwuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaTpudGgtY2hpbGQoMilcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAgIC8vIGZhY2Vib29rXG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDMpIGFcIikuYXR0cihcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDMpIHNwYW5cIikuaHRtbChcIlwiKTtcbiAgICAgICAgbW9kYWwuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaTpudGgtY2hpbGQoMylcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAgIC8vIGluc3RhZ3JhbVxuICAgICAgICBtb2RhbC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpOm50aC1jaGlsZCg0KSBhXCIpLmF0dHIoXCJocmVmXCIsIFwiXCIpO1xuICAgICAgICBtb2RhbC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpOm50aC1jaGlsZCg0KSBzcGFuXCIpLmh0bWwoXCJcIik7XG4gICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGk6bnRoLWNoaWxkKDQpXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgIH07XG5cbiAgICAvLyBwb3B1bGF0ZXMgbW9kYWwgd2l0aCBjYXJkIGluZm9cbiAgICBjb25zdCBjYXJkQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNhcmQub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoZS50YXJnZXQpLnBhcmVudCgpO1xuICAgICAgICAgICAgY29uc3QgY2FyZEltZyA9IGNhcmQuZmluZChcIi5jYXJkLWltZy10b3BcIikuYXR0cihcInNyY1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNhcmQuZmluZChcIi5jYXJkLXRpdGxlXCIpLmh0bWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRTdWJUaXRsZSA9IGNhcmQuZmluZChcIi5jYXJkLXN1YlRpdGxlXCIpLmh0bWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gY2FyZC5maW5kKFwiLm1vZGFsLW1haW5Db250ZW50XCIpLmh0bWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHR3aXR0ZXJJbmZvID0gY2FyZC5maW5kKFwiLnR3aXR0ZXItaW5mb1wiKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgY29uc3QgbGlua2VkSW5JbmZvID0gY2FyZC5maW5kKFwiLmxpbmtlZGluLWluZm9cIikuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIGNvbnN0IGZhY2Vib29rSW5mbyA9IGNhcmQuZmluZChcIi5mYWNlYm9vay1pbmZvXCIpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBjb25zdCBpbnN0YWdyYW1JbmZvID0gY2FyZC5maW5kKFwiLmluc3RhZ3JhbS1pbmZvXCIpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlYWNoVGl0bGUgPSBtb2RhbC5maW5kKFwiLm1vZGFsLXN1YnRpdGxlXCIpO1xuXG4gICAgICAgICAgICBtb2RhbC5maW5kKFwiLmNvbnRlbnQtbGVmdCBpbWdcIikuYXR0cihcInNyY1wiLCBjYXJkSW1nKTtcbiAgICAgICAgICAgIG1vZGFsLmZpbmQoXCJoM1wiKS5odG1sKGNhcmRUaXRsZSk7XG4gICAgICAgICAgICBtb2RhbC5maW5kKFwiaDRcIikuaHRtbChjYXJkU3ViVGl0bGUpO1xuICAgICAgICAgICAgbW9kYWwuZmluZChcIi5tb2RhbC1tYWluLWNvbnRlbnRcIikuaHRtbChjYXJkVGV4dCk7XG4gICAgICAgICAgICBtb2RhbC5maW5kKFwiLm1vZGFsLXN1YnRpdGxlIHNwYW5cIikuaHRtbChjYXJkVGl0bGUpO1xuXG5cbiAgICAgICAgICAgIGlmICgodHdpdHRlckluZm8ubGVuZ3RoID4gMCkgfHwgKGxpbmtlZEluSW5mby5sZW5ndGggPiAwKSB8fCAoZmFjZWJvb2tJbmZvLmxlbmd0aCA+IDApIHx8IChpbnN0YWdyYW1JbmZvLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxSZWFjaFRpdGxlLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0d2l0dGVySW5mby5sZW5ndGggPT0gMCkgJiYgKGxpbmtlZEluSW5mby5sZW5ndGggPT0gMCkgJiYgKGZhY2Vib29rSW5mby5sZW5ndGggPT0gMCkgJiYgKGluc3RhZ3JhbUluZm8ubGVuZ3RoID09IDApKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxSZWFjaFRpdGxlLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHdpdHRlckluZm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHR3aXR0ZXJcbiAgICAgICAgICAgICAgICBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC10d2l0dGVyIGFcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJocmVmXCIsICQodHdpdHRlckluZm9bMF0pLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGkubW9kYWwtdHdpdHRlciBzcGFuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCQodHdpdHRlckluZm9bMV0pLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgbW9kYWwuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC10d2l0dGVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGlua2VkSW5JbmZvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBsaW5rZWRpblxuICAgICAgICAgICAgICAgIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpLm1vZGFsLWxpbmtlZGluIGFcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJocmVmXCIsICQobGlua2VkSW5JbmZvWzBdKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpLm1vZGFsLWxpbmtlZGluIHNwYW5cIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoJChsaW5rZWRJbkluZm9bMV0pLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgbW9kYWwuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC1saW5rZWRpblwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZhY2Vib29rSW5mby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFjZWJvb2tcbiAgICAgICAgICAgICAgICBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC1mYWNlYm9vayBhXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaHJlZlwiLCAkKGZhY2Vib29rSW5mb1swXSkuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC1mYWNlYm9vayBzcGFuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCQoZmFjZWJvb2tJbmZvWzFdKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIG1vZGFsLmZpbmQoXCIuc29jaWFsLXNoYXJpbmcgbGkubW9kYWwtZmFjZWJvb2tcIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0YWdyYW1JbmZvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgICBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5zb2NpYWwtc2hhcmluZyBsaS5tb2RhbC1pbnN0YWdyYW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhyZWZcIiwgJChpbnN0YWdyYW1JbmZvWzBdKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpLm1vZGFsLWluc3RhZ3JhbSBzcGFuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCQoaW5zdGFncmFtSW5mb1sxXSkuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5maW5kKFwiLnNvY2lhbC1zaGFyaW5nIGxpLm1vZGFsLWluc3RhZ3JhbVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNhcmRDbGljaygpO1xufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgbGV0IGFjY29yZGlvbnMgPSAkKFwiLnNlbmlkX2FjY29yZGlvblwiKTtcblxuICBpZiAoYWNjb3JkaW9ucy5sZW5ndGgpIHtcbiAgICAvL09uIExvYWQgZnVuY3Rpb25hbGl0eVxuICAgIGxldCB2aWV3cG9ydFcgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICBydW5fYnlfZGV2aWNlKHZpZXdwb3J0Vyk7XG5cbiAgICAvLyBpbml0aWFsIHZpZXdwb3J0XG4gICAgdmFyIGN1cnJlbnRWcCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIGlmIChjdXJyZW50VnAgPCA5OTIpIHtcbiAgICAgIGN1cnJlbnRWcCA9IFwibW9iaWxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRWcCA9IFwiZGVza3RvcFwiO1xuICAgIH1cbiAgICAvL1xuXG4gICAgLy9PbiByZXNpemUgKHRocm90dGxlZCBmb3IgcGVyZm9ybWFuY2UpXG4gICAgJCh3aW5kb3cpLm9uKFxuICAgICAgXCJyZXNpemVcIixcbiAgICAgIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmlld3BvcnRXID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIGxldCBuZXdWcDtcblxuICAgICAgICBpZiAodmlld3BvcnRXIDwgOTkyKSB7XG4gICAgICAgICAgbmV3VnAgPSBcIm1vYmlsZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZwID0gXCJkZXNrdG9wXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFZwICE9PSBuZXdWcCkge1xuICAgICAgICAgIHNldFRpbWVvdXQobG9jYXRpb24ucmVsb2FkKCksIDMwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcbiAgICApO1xuXG4gICAgLy8gPT09PT09PT0+IEZ1bmN0aW9ucyA9PVxuXG4gICAgZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xuICAgICAgYWNjb3JkaW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGFjY29yZGlvbiA9ICQodGhpcyk7XG4gICAgICAgIGxldCBiZWxsb3dzID0gYWNjb3JkaW9uLmZpbmQoXCIuYmVsbG93c1wiKTtcbiAgICAgICAgbGV0IHN0YXRpY19jb250ZW50ID0gYWNjb3JkaW9uLmZpbmQoXCIuc3RhdGljX2NvbnRlbnRcIik7XG4gICAgICAgIGxldCBiZWxsb3dzQW1vdW50ID0gYmVsbG93cy5maW5kKFwiID4gc2VjdGlvblwiKS5sZW5ndGg7XG4gICAgICAgIGxldCBiZWxsb3dzQXJlYSA9IDM1ICogYmVsbG93c0Ftb3VudDtcbiAgICAgICAgc3RhdGljX2NvbnRlbnQuY3NzKHsgXCJwYWRkaW5nLWxlZnRcIjogYCR7YmVsbG93c0FyZWF9cHhgIH0pO1xuXG4gICAgICAgIGJlbGxvd3MuYW5pbWF0ZSh7XG4gICAgICAgICAgcmlnaHQ6IGAtJHtiZWxsb3dzQXJlYX1weGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0b2dnbGVycyA9IGFjY29yZGlvbi5maW5kKFwiLnRvZ2dsZXJcIik7XG4gICAgICAgIGlmICh0b2dnbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0b2dnbGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0b2dnbGVyID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgLy8gQnV0dG9uIGNsaWNrXG4gICAgICAgICAgICB0b2dnbGVyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gdG9nZ2xlci5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgbGV0IHBhcmVudEFjdGl2ZSA9IHBhcmVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICBpZiAoIXBhcmVudEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vQWN0aXZhdGVcbiAgICAgICAgICAgICAgICB0b2dnbGVyLmNsb3Nlc3QoXCIuYmVsbG93c1wiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xMDAlXCIsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwYXJlbnQuYW5pbWF0ZSh7IHdpZHRoOiBcIjEwMCVcIiB9KTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc2libGluZ3MoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2lsbCBiZSBudWxsIGlmIGFuaW1hdGlvbiBpc24ndCBmaW5pc2hlZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9EZWFjdGl2YXRlXG4gICAgICAgICAgICAgICAgdG9nZ2xlci5jbG9zZXN0KFwiLmJlbGxvd3NcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICByaWdodDogYC0ke2JlbGxvd3NBcmVhfXB4YCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIHBhcmVudC5hbmltYXRlKHsgd2lkdGg6IFwiMzVweFwiIH0pO1xuXG4gICAgICAgICAgICAgICAgcGFyZW50LnNpYmxpbmdzKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0b2dnbGVyLmNsb3Nlc3QoXCIuYmVsbG93c1wiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBgLSR7YmVsbG93c0FyZWF9cHhgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFTkQgRk9SIEVBQ0hcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjb29yZGlvbl9tb2JpbGUoKSB7XG4gICAgICBsZXQgYWNjb3JkaW9ucyA9ICQoXCIuc2VuaWRfYWNjb3JkaW9uXCIpO1xuXG4gICAgICBpZiAoYWNjb3JkaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgYWNjb3JkaW9ucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgYWNjb3JkaW9uID0gJCh0aGlzKTtcbiAgICAgICAgICBsZXQgdG9nZ2xlcnMgPSBhY2NvcmRpb24uZmluZChcIi50b2dnbGVyXCIpO1xuXG4gICAgICAgICAgaWYgKHRvZ2dsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9nZ2xlcnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGxldCB0b2dnbGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgdG9nZ2xlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVyLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zaWJsaW5ncygpLmZpbmQoXCIuY29udGVudF9mcmFtZVwiKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5fYnlfZGV2aWNlKHZpZXdwb3J0Vykge1xuICAgICAgLy9kZXNrdG9wXG4gICAgICBpZiAodmlld3BvcnRXID49IDk5Mikge1xuICAgICAgICBhY2NvcmRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjb29yZGlvbl9tb2JpbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICAgICAgbGV0IGluVGhyb3R0bGU7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgaWYgKCFpblRocm90dGxlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChpblRocm90dGxlID0gZmFsc2UpLCBsaW1pdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vID09PT09PT09PT0gPiAvIEZ1bmN0aW9uc1xuICB9XG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dNb3JlIChlbGVtZW50KSB7ICAgICAgIFxyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRpdGVtcyA9ICRlbGVtZW50LmZpbmQoJy5jb2wuaGlkZS1icmFuZCcpO1xyXG4gICAgICAgIGxldCAkdG90YWxJdGVtcyA9ICRpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCR0b3RhbEl0ZW1zIDwgMyApIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuZmluZCgnLnNob3ctbW9yZScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCAkdG90YWxJdGVtczsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoaSA8IDMgKSB7XHJcbiAgICAgICAgICAgICAgICAkaXRlbXMucmVtb3ZlQ2xhc3MoJ2hpZGUtYnJhbmQnKS5hZGRDbGFzcygnc2hvdy1icmFuZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93SXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVsYXRlZEJyYW5kcyA9ICAkKFwiI3JlbGF0ZWQtYnJhbmRzXCIpO1xyXG5cclxuICAgICAgICAgICAgJChyZWxhdGVkQnJhbmRzKS5maW5kKFwiLnNob3ctbW9yZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzaG93TW9yZShyZWxhdGVkQnJhbmRzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNob3dJdGVtcygpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgIGxldCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbFwiKTtcbiAgIGxldCBib2R5O1xuICAgY2Fyb3VzZWwgPSBjYXJvdXNlbFswXTtcbiAgIFxuICAgaWYoY2Fyb3VzZWwpIHtcbiAgICAgIGxldCBkYXRhX3NpemUgPSBjYXJvdXNlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpO1xuICAgICAgY29uc29sZS5sb2coZGF0YV9zaXplKTtcblxuICAgICAgaWYoZGF0YV9zaXplID09PSAnZnVsbF9wYWdlJykge1xuICAgICAgICAgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgICAgICBib2R5ID0gYm9keVswXTtcbiAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbF9wYWdlX2Nhcm91c2VsJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCAkanVtcFRvcyA9ICQoJy5qdW1wVG9CdG4nKTtcbiAgICAgIGlmICgkanVtcFRvcy5sZW5ndGgpIHtcbiAgICAgICAgICRqdW1wVG9zLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgICAgdGFyZ2V0Lmxlbmd0aCA/XG4gICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGFyZ2V0WzBdLm9mZnNldFRvcCkgOlxuICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcInNsaWQuYnMuY2Fyb3VzZWxcIiwgKCkgPT4ge1xuICAgICAgICAgY2hlY2tDYXJvdXNlbEFycm93cygpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNoZWNrQ2Fyb3VzZWxBcnJvd3MgPSAoKSA9PiB7XG4gICAgICAgICBpZiAoY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1pbm5lclwiKS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIC8vIEhpZGUgbGVmdCBhcnJvd1xuICAgICAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sXCIpLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAvLyBTaG93IHJpZ2h0IGFycm93XG4gICAgICAgICAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLWNvbnRyb2xcIikubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sXCIpLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgICB9IGVsc2UgaWYgKGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtaW5uZXJcIikubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIC8vIEhpZGUgcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtY29udHJvbFwiKS5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAvLyBTaG93IGxlZnQgYXJyb3dcbiAgICAgICAgICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtY29udHJvbFwiKS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sXCIpLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNob3cgYm90aCBhcnJvd3NcbiAgICAgICAgICAgIGxldCBjYXJvdXNlbENvbnRyb2xzID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sXCIpLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2Fyb3VzZWxDb250cm9sc1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2Fyb3VzZWxDb250cm9sc1swXS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGNhcm91c2VsQ29udHJvbHNbMV0uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGNhcm91c2VsQ29udHJvbHNbMV0uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBvbiBkb2N1bWVudCByZWFkeVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgY2hlY2tDYXJvdXNlbEFycm93cygpO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBjYXJvdXNlbE9iaiA9IG5ldyBib290c3RyYXAuQ2Fyb3VzZWwoY2Fyb3VzZWwpO1xuXG4gICAgICAvLyA9PT0gUExBWUVSICsgQ0FST1VTRUwgQ09OVFJPTFMgPT09XG4gICAgICAvL3NlbGVjdCBwbGF5ZXIgZm9yIGV2ZW50IGxpc3RlbmVyc1xcXG4gICAgICBjb25zdCBwbGF5ZXJzRWxzID0gJCgnLmNhcm91c2VsIHZpZGVvJyk7XG5cbiAgICAgIC8vZXZlbnRzIGxpc3RlbmVyc1xuICAgICAgcGxheWVyc0Vscy5vbigncGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgY2Fyb3VzZWxPYmoucGF1c2UoKTtcbiAgICAgIH0pO1xuXG4gICAgICBwbGF5ZXJzRWxzLm9uKCdwYXVzZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgY2Fyb3VzZWxPYmouY3ljbGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBwbGF5ZXJzRWxzLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgY2Fyb3VzZWxPYmouY3ljbGUoKTtcbiAgICAgIH0pO1xuICAgfVxufSkoalF1ZXJ5KTtcbiIsIigoJCkgPT4ge1xuICAgY29uc3QgY29udGFjdEZvcm0gPSAkKFwiLmNvbnRhY3QtdXMgLmlubmVyLWNvbnRlbnQgZm9ybVwiKTtcbiAgIGNvbnN0IGlucHV0R3JvdXAgPSBjb250YWN0Rm9ybS5maW5kKFwiLmdydW5pb24tZmllbGQtd3JhcFwiKTtcbiAgIGNvbnN0IGZvcm1GaWVsZHMgPSBpbnB1dEdyb3VwLmZpbmQoXCIuZ3J1bmlvbi1maWVsZC1sYWJlbFwiKTtcbiAgIFxuICAgaWYgKGNvbnRhY3RGb3JtLmxlbmd0aCkge1xuICAgICAgZm9ybUZpZWxkcy5maW5kKFwic3BhblwiKS5yZW1vdmUoKTtcblxuICAgICAgaW5wdXRHcm91cC5lYWNoKChpLCBncm91cCkgPT4ge1xuICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gJChncm91cCkuZmluZChcIi5ncnVuaW9uLWZpZWxkLWxhYmVsXCIpO1xuICAgICAgICAgY29uc3QgZm9ybUlucHV0cyA9IGdyb3VwTmFtZS5uZXh0KCk7XG5cbiAgICAgICAgIGZvcm1JbnB1dHMuYXR0cihcInBsYWNlaG9sZGVyXCIsIGdyb3VwTmFtZS5odG1sKCkpO1xuICAgICAgfSk7XG4gICB9XG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBudW1Gb3JtYXR0ZXIobnVtVmFsdWUpIHtcclxuXHJcbiAgICAgICAgbGV0IHRlc3QgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGVzdCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bVZhbHVlICYmIG51bVZhbHVlICE9PSBOYU4pIHtcclxuICAgICAgICAgICAgICAgIG51bVZhbHVlID0gcGFyc2VJbnQobnVtVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgbnVtVmFsdWUgPSBudW1WYWx1ZS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3BsaXRlZF9udW0gPSBudW1WYWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3BsaXRlZF9udW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gJ0snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9ICdNJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdGVkX251bVsxXS5zdWJzdHJpbmcoMCwgMikgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bVZhbHVlID0gc3BsaXRlZF9udW1bMF0gKyBwcmVmaXg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bVZhbHVlID0gc3BsaXRlZF9udW1bMF0gKyAnLicgKyBzcGxpdGVkX251bVsxXS5zdWJzdHJpbmcoMCwgMikgKyBwcmVmaXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbnVtVmFsdWUgPSBzcGxpdGVkX251bVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBudW0gPSBudW1WYWx1ZTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRHJvcGRvd25zKGVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCwgXCJlbGVtZW50b3NcIik7XHJcbiAgICAgICAgbGV0IHJlYWN0VmFsdWVzID0gZWxlbWVudC52YWwoKS5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGxldCBjcm9zc1BsYXRmb3JtID0gcmVhY3RWYWx1ZXNbMF07XHJcbiAgICAgICAgbGV0IHByaW50UmVhY2ggPSByZWFjdFZhbHVlc1sxXTtcclxuICAgICAgICBsZXQgcHJpbnREaWdpdGFsID0gcmVhY3RWYWx1ZXNbMl07XHJcbiAgICAgICAgbGV0IGFwcERpZ2l0YWwgPSByZWFjdFZhbHVlc1szXTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuZmluZChcIiNwcmludC1yZWFjaCAucm91bmRlZC1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoJ2dyYXktY2lyY2xlJykucGFyZW50KCkucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjZGlnaXRhbC1yZWFjaCAucm91bmRlZC1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoJ2dyYXktY2lyY2xlJykucGFyZW50KCkucGFyZW50KCkuc2hvdygpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjYXBwLXJlYWNoIC5yb3VuZGVkLWNpcmNsZVwiKS5yZW1vdmVDbGFzcygnZ3JheS1jaXJjbGUnKS5wYXJlbnQoKS5wYXJlbnQoKS5zaG93KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoY3Jvc3NQbGF0Zm9ybSA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjY3Jvc3MtcGxhdGZvcm0gLnJvdW5kZWQtY2lyY2xlXCIpLmFkZENsYXNzKCdncmF5LWNpcmNsZScpLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjcHJpbnQtcmVhY2ggaDNcIikudGV4dCgnTi9BJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmludFJlYWNoID09IDApIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZChcIiNwcmludC1yZWFjaCAucm91bmRlZC1jaXJjbGVcIikuYWRkQ2xhc3MoJ2dyYXktY2lyY2xlJykucGFyZW50KCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgJChkb2N1bWVudCkuZmluZChcIiNwcmludC1yZWFjaCBoM1wiKS50ZXh0KCdOL0EnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByaW50RGlnaXRhbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjZGlnaXRhbC1yZWFjaCAucm91bmRlZC1jaXJjbGVcIikuYWRkQ2xhc3MoJ2dyYXktY2lyY2xlJykucGFyZW50KCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAvLyAkKGRvY3VtZW50KS5maW5kKFwiI2RpZ2l0YWwtcmVhY2ggaDNcIikudGV4dCgnTi9BJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcHBEaWdpdGFsID09IDApIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZChcIiNhcHAtcmVhY2ggLnJvdW5kZWQtY2lyY2xlXCIpLmFkZENsYXNzKCdncmF5LWNpcmNsZScpLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gICQoZG9jdW1lbnQpLmZpbmQoXCIjYXBwLXJlYWNoIGgzXCIpLnRleHQoJ04vQScpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjY3Jvc3MtcGxhdGZvcm0gaDNcIikudGV4dChudW1Gb3JtYXR0ZXIoY3Jvc3NQbGF0Zm9ybSkpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjcHJpbnQtcmVhY2ggaDNcIikudGV4dChudW1Gb3JtYXR0ZXIocHJpbnRSZWFjaCkpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjZGlnaXRhbC1yZWFjaCBoM1wiKS50ZXh0KG51bUZvcm1hdHRlcihwcmludERpZ2l0YWwpKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5maW5kKFwiI2FwcC1yZWFjaCBoM1wiKS50ZXh0KG51bUZvcm1hdHRlcihhcHBEaWdpdGFsKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdGFsUmVhY2hWYWx1ZXMoKSB7XHJcbiAgICAgICAgbGV0IHJlYWNoTGlzdCA9ICQoXCIjYnJhbmRzLXRvdGFsLW1vbnRoLXJlYWNoXCIpO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGFUb3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IHByaW50VG90YWwgPSAwO1xyXG4gICAgICAgIGxldCBkaWdpdGFsVG90YWwgPSAwO1xyXG4gICAgICAgIGxldCBhcHBUb3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGFQcmludFRvdGFsID0gMDtcclxuICAgICAgICBsZXQgZGF0YURpZ2l0YWxUb3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGFBcHBUb3RhbCA9IDA7XHJcblxyXG5cclxuICAgICAgICByZWFjaExpc3QuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFUb3RhbCA9ICQodGhpcykuZGF0YSgndG90YWwnKTtcclxuICAgICAgICAgICAgcHJpbnRUb3RhbCA9ICQodGhpcykuZGF0YSgncHJpbnQnKTtcclxuICAgICAgICAgICAgZGlnaXRhbFRvdGFsID0gJCh0aGlzKS5kYXRhKCdkaWdpdGFsJyk7XHJcbiAgICAgICAgICAgIGFwcFRvdGFsID0gJCh0aGlzKS5kYXRhKCdhcHAnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YVRvdGFsICE9IFwiXCIgJiYgZGF0YVRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVByaW50VG90YWwgKz0gTnVtYmVyKGRhdGFUb3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcmludFRvdGFsICE9IFwiXCIgJiYgcHJpbnRUb3RhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFQcmludFRvdGFsICs9IE51bWJlcihwcmludFRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpZ2l0YWxUb3RhbCAhPSBcIlwiICYmIGRpZ2l0YWxUb3RhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFEaWdpdGFsVG90YWwgKz0gTnVtYmVyKGRpZ2l0YWxUb3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcHBUb3RhbCAhPSBcIlwiICYmIGFwcFRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFwcFRvdGFsICs9IE51bWJlcihhcHBUb3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkuZmluZChcIiNjcm9zcy1wbGF0Zm9ybSBoM1wiKS50ZXh0KG51bUZvcm1hdHRlcihkYXRhUHJpbnRUb3RhbCkpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjcHJpbnQtcmVhY2ggaDNcIikudGV4dChudW1Gb3JtYXR0ZXIoZGF0YVByaW50VG90YWwpKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5maW5kKFwiI2RpZ2l0YWwtcmVhY2ggaDNcIikudGV4dChudW1Gb3JtYXR0ZXIoZGF0YURpZ2l0YWxUb3RhbCkpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIjYXBwLXJlYWNoIGgzXCIpLnRleHQobnVtRm9ybWF0dGVyKGRhdGFBcHBUb3RhbCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3ZlcmFnZUNpcmNsZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3ZlcmFnZUNvbnRlbnQgPSAkKCcjY292ZXJhZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb3ZlcmFnZUNvbnRlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY292ZXJhZ2VWYWx1ZXMgPSBjb3ZlcmFnZUNvbnRlbnQuZmluZCgnaDMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY292ZXJhZ2VWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcmFnZVZhbHVlcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkubGVuZ3RoID4gMCAmJiAkKHRoaXMpLnRleHQoKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQobnVtRm9ybWF0dGVyKCQodGhpcykudGV4dCgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0ZWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgcHJpbnRfcmVhY2ggPSAkKFwiI3ByaW50LXJlYWNoIGgzXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGlnaXRhbF9yZWFjaCA9ICQoXCIjZGlnaXRhbC1yZWFjaCBoM1wiKTtcclxuICAgICAgICAgICAgbGV0IGFwcF9yZWFjaCA9ICQoXCIjYXBwLXJlYWNoIGgzXCIpO1xyXG4gICAgICAgICAgICBsZXQgY3Jvc3NfcGxhdGZvcm0gPSAkKFwiI2Nyb3NzLXBsYXRmb3JtIGgzXCIpO1xyXG5cclxuICAgICAgICAgICAgcHJpbnRfcmVhY2gudGV4dChudW1Gb3JtYXR0ZXIocHJpbnRfcmVhY2gudGV4dCgpKSk7XHJcbiAgICAgICAgICAgIGRpZ2l0YWxfcmVhY2gudGV4dChudW1Gb3JtYXR0ZXIoZGlnaXRhbF9yZWFjaC50ZXh0KCkpKTtcclxuICAgICAgICAgICAgYXBwX3JlYWNoLnRleHQobnVtRm9ybWF0dGVyKGFwcF9yZWFjaC50ZXh0KCkpKTtcclxuICAgICAgICAgICAgY3Jvc3NfcGxhdGZvcm0udGV4dChudW1Gb3JtYXR0ZXIoY3Jvc3NfcGxhdGZvcm0udGV4dCgpKSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgdG90YWxSZWFjaFZhbHVlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcInNlbGVjdFtpZF49YnJhbmRzLXRvdGFsLW1vbnRoLXJlYWNoXVwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURyb3Bkb3ducygkKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNjcm9zcy1wbGF0Zm9ybSBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjY3Jvc3MtcGxhdGZvcm1cIikucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjcHJpbnQtcmVhY2ggaDNcIikudGV4dCgpID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY292ZXJhZ2UtZHJvcGRvd24gI3ByaW50LXJlYWNoXCIpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjZGlnaXRhbC1yZWFjaCBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjZGlnaXRhbC1yZWFjaFwiKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjY292ZXJhZ2UtZHJvcGRvd24gI2FwcC1yZWFjaCBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjYXBwLXJlYWNoXCIpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaG9tZUNvdmVyYWdlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmhvbWUgLmFjY29yZGlvbicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdmVyYWdlQ29udGVudEhvbWUgPSAkKHRoaXMpLmZpbmQoJy5ob21lLWNvdmVyYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdmVyYWdlQ29udGVudEhvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdmVyYWdlVmFsdWVzID0gY292ZXJhZ2VDb250ZW50SG9tZS5maW5kKCdoMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY292ZXJhZ2VWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJhZ2VWYWx1ZXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQobnVtRm9ybWF0dGVyKCQodGhpcykuYXR0cignZGF0YS1udW1iZXItdG8tZm9ybWF0JykpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCQoJy5ob21lIC5hY2NvcmRpb24nKS5sZW5ndGgpIHtcclxuICAgICAgICBob21lQ292ZXJhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjY3Jvc3MtcGxhdGZvcm1cIikubGVuZ3RoICYmICQoXCIjY292ZXJhZ2UtZHJvcGRvd24gI3ByaW50LXJlYWNoXCIpLmxlbmd0aCAmJiAkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNkaWdpdGFsLXJlYWNoXCIpLmxlbmd0aCAmJiAkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNhcHAtcmVhY2ggaDNcIikubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGlmICgkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNjcm9zcy1wbGF0Zm9ybSBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNjcm9zcy1wbGF0Zm9ybVwiKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjcHJpbnQtcmVhY2ggaDNcIikudGV4dCgpID09IDApIHtcclxuICAgICAgICAgICAgJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjcHJpbnQtcmVhY2hcIikucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChcIiNjb3ZlcmFnZS1kcm9wZG93biAjZGlnaXRhbC1yZWFjaCBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNkaWdpdGFsLXJlYWNoXCIpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoXCIjY292ZXJhZ2UtZHJvcGRvd24gI2FwcC1yZWFjaCBoM1wiKS50ZXh0KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAkKFwiI2NvdmVyYWdlLWRyb3Bkb3duICNhcHAtcmVhY2hcIikucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcm9wZG93blNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQoJyNjb3ZlcmFnZScpLmxlbmd0aCkge1xyXG4gICAgICAgIGNvdmVyYWdlQ2lyY2xlKCk7XHJcbiAgICB9XHJcbn0pKGpRdWVyeSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgYnV0dG9ucyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdldmVudC10cmFja2VkJyk7XG5cbiAgICBpZiAoYnV0dG9ucykge1xuICAgICAgICBBcnJheS5mcm9tKGJ1dHRvbnMpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCwgdHJhY2tpbmdEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhY2tpbmdEYXRhID0gZ2V0VHJhY2tWYWx1ZShidXR0b24pO1xuICAgICAgICAgICAgICAgIHJlY29yZFRyYWNrZWREYXRhKHRyYWNraW5nRGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRyYWNrVmFsdWUoYnV0dG9uKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhY2tpbmctdmFsdWUnKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdjaHVua2VkJykge1xuICAgICAgICAgICAgbGV0IG5ldHdvcmtfcGlsbGFyX25hbWUgPSBidXR0b24uY2xvc2VzdCgnW2RhdGEtcGlsbGFyLW5hbWVdJykuZ2V0QXR0cmlidXRlKCdkYXRhLXBpbGxhci1uYW1lJyk7XG4gICAgICAgICAgICBsZXQgYnJhbmRfbnVtYmVyID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXItY2h1bmsnKTtcbiAgICAgICAgICAgIGxldCBicmFuZF9uYW1lID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lLWNodW5rJyk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gYG5jYWN0cmFkZXxob21lfCR7bmV0d29ya19waWxsYXJfbmFtZX18JHticmFuZF9udW1iZXJ9fGJyYW5kfHN0b3J5fCR7YnJhbmRfbmFtZX1gO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNvcmRUcmFja2VkRGF0YShkYXRhVmFsdWUpIHtcbiAgICAgICAgd2luZG93Lm1yZWFkeSA9IHdpbmRvdy5tcmVhZHkgfHwgW107XG4gICAgICAgIHdpbmRvdy5tcmVhZHkucHVzaChmdW5jdGlvbihtZXRyaWNzKSB7XG4gICAgICAgICAgICBtZXRyaWNzLm5wdih7XG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbJ2V2ZW50MTAnXSxcbiAgICAgICAgICAgICAgICBlVmFyMjM6IGRhdGFWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gU0NST0xMIFRPIFRPUFxuICAgIHZhciAkdG9Ub3BCdG4gPSAkKCcuc2Nyb2xsLXRvcCcpO1xuXG4gICAgaWYgKCR0b1RvcEJ0bi5sZW5ndGgpIHtcbiAgICAgICAgJHRvVG9wQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgICQoJy5oaXN0b3J5LWJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICB9KVxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgIGNvbnN0IGxpdmVGZWVkID0gJChcIi5saXZlLW5ld3MtZmVlZFwiKTtcbiAgIGNvbnN0IG5ld3NGZWVkVG9nZ2xlID0gJChcIi5uZXdzLWZlZWQtdG9nZ2xlXCIpO1xuICAgY29uc3QgZmVlZFNob3dNb3JlID0gJChcIi5mZWVkLXNob3ctbW9yZVwiKTtcbiAgIGNvbnN0IGZlZWRFeHBsb3JlID0gJChcIi5mZWVkLWV4cGxvcmVcIik7XG4gICBjb25zdCBuZXdzRmVlZCA9ICQoXCIubmV3cy1mZWVkXCIpO1xuXG4gICBjb25zdCB0b2dnbGVDbGFzc0ZlZWRzID0gKHRhcmdldCwgY3NzQ2xhc3NOYW1lLCBwYXJlbnRDbGFzcykgPT4ge1xuICAgICAgY29uc3QgZVRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICAgIGVUYXJnZXQucGFyZW50cyhwYXJlbnRDbGFzcykudG9nZ2xlQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcbiAgIH07XG5cbiAgIGlmIChsaXZlRmVlZC5sZW5ndGgpIHtcbiAgICAgIG5ld3NGZWVkVG9nZ2xlLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgICB0b2dnbGVDbGFzc0ZlZWRzKGNsaWNrVGFyZ2V0LCBcImFjdGl2ZVwiLCBcIi5saXZlLW5ld3MtZmVlZFwiKTtcblxuICAgICAgICAgaWYgKGNsaWNrVGFyZ2V0LnBhcmVudHMoXCIubGl2ZS1uZXdzLWZlZWRcIikuaGFzQ2xhc3MoXCJzaG93LW1vcmUtZmVlZHNcIikpIHtcbiAgICAgICAgICAgIGNsaWNrVGFyZ2V0LnBhcmVudHMoXCIubGl2ZS1uZXdzLWZlZWRcIikucmVtb3ZlQ2xhc3MoXCJzaG93LW1vcmUtZmVlZHNcIilcbiAgICAgICAgICAgIGZlZWRTaG93TW9yZS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIGZlZWRFeHBsb3JlLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgJChuZXdzRmVlZFswXSkuYWRkQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmZWVkU2hvd01vcmUub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgIHRvZ2dsZUNsYXNzRmVlZHMoY2xpY2tUYXJnZXQsIFwic2hvdy1tb3JlLWZlZWRzXCIsIFwiLmxpdmUtbmV3cy1mZWVkXCIpO1xuXG4gICAgICAgICBjbGlja1RhcmdldC5wYXJlbnRzKFwiLm5ld3MtZmVlZC1ib2R5XCIpLmZpbmQoXCIubmV3cy1mZWVkLmQtbm9uZVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgIGZlZWRTaG93TW9yZS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgIGZlZWRFeHBsb3JlLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgbmV3c0ZlZWQucmVtb3ZlQ2xhc3MoXCJmaXJzdFwiKTtcbiAgICAgIH0pO1xuICAgfVxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAvLyBmYWRlb3V0IGdyZWV0aW5ncyBiYW5uZXJcbiAgY29uc3QgaG9tZU92ZXJsYXkgPSAkKFwiLmhvbWUtb3ZlcmxheVwiKTtcbiAgY29uc3QgYm9keURPTSA9ICQoXCJib2R5XCIpO1xuXG4gIGlmIChob21lT3ZlcmxheS5sZW5ndGgpIHtcbiAgICBib2R5RE9NLmFkZENsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBob21lT3ZlcmxheS5mYWRlT3V0KCk7XG4gICAgICBib2R5RE9NLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgLy8gaG9tZSBhY2NvcmRpb25cbiAgY29uc3QgaG9tZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICAkKFwiLmFjY29yZGlvbl9pdGVtXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICBjb25zdCBpbnRlcm5hbENvbnRhaW5lciA9IGNsaWNrVGFyZ2V0LnBhcmVudHMoXCIuYWNjb3JkaW9uLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IGFjY29yZFdyYXBwZXIgPSBjbGlja1RhcmdldC5wYXJlbnRzKFwiLmFjY29yZGlvbi13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgYWNjb3JkaW9uQ2xpY2sgPSBjbGlja1RhcmdldC5wYXJlbnRzKFwiLmFjY29yZGlvbl9pdGVtXCIpO1xuXG4gICAgICAvLyBuZWNlc3NhcnkgdG8gaGF2ZSBhbmltYXRpb25zXG4gICAgICBpZiAoIWludGVybmFsQ29udGFpbmVyLmhhc0NsYXNzKFwiYWNjb3JkaW9uLXNob3dcIikpIHtcbiAgICAgICAgaW50ZXJuYWxDb250YWluZXIuYWRkQ2xhc3MoXCJhY2NvcmRpb24tc2hvd1wiKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgaXMgYWxyZWFkeSBhY3RpdmUgdG8gY2xvc2UgaXRcbiAgICAgIGlmIChcbiAgICAgICAgYWNjb3JkaW9uQ2xpY2suaGFzQ2xhc3MoXCJhY3RpdmVcIikgJiZcbiAgICAgICAgIWNsaWNrVGFyZ2V0Lmhhc0NsYXNzKFwiYWNjb3JkaW9uLWNvbnRlbnRcIikgJiZcbiAgICAgICAgIWNsaWNrVGFyZ2V0LnBhcmVudHMoKS5oYXNDbGFzcyhcImFjY29yZGlvbi1jb250ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgaW50ZXJuYWxDb250YWluZXIucmVtb3ZlQ2xhc3MoXCJhY2NvcmRpb24tc2hvd1wiKTtcbiAgICAgICAgYWNjb3JkaW9uQ2xpY2sucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgLy9UT0RPOiBBZGQgc3ViIGNhdGVnb3J5IGNsb3NlIGV4dGVudGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3BlbiBhY2NvcmRpb25cbiAgICAgICAgYWNjb3JkV3JhcHBlci5maW5kKFwiLmFjY29yZGlvbl9pdGVtLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgYWNjb3JkaW9uQ2xpY2suYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaG9tZUFjY29yZGlvbigpO1xuICBcbn0pKGpRdWVyeSk7XG5cbiIsIigoJCkgPT4ge1xuICAgIGNvbnN0IHN1Yk1lbnVJdGVtcyA9ICQoXCIjbWVudS1tYWluLW1lbnUtbW9iaWxlIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpO1xuXG4gICAgc3ViTWVudUl0ZW1zLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgJChlLnRhcmdldCkudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoZS50YXJnZXQpLmZpbmQoXCIuc3ViLW1lbnVcIikudG9nZ2xlQ2xhc3MoXCJkLWJsb2NrXCIpO1xuICAgIH0pO1xufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBjYXJkc19tYWluX2NvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHNfbG9hZGVyX2NvbnQnKTtcblxuICAgIGlmIChjYXJkc19tYWluX2NvbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZF9tb3JlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLW1vcmUtYnRuJyk7XG4gICAgICAgIGxldCB1cmxfYmFzZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIGxldCBwYWdlID0gMTsgLy9maXJzdCBpdGVtcyBhcmUgbG9hZGVkIG9uIHBocFxuICAgICAgICBsZXQgcG9zdF90eXBlID0gY2FyZHNfbWFpbl9jb250LmdldEF0dHJpYnV0ZSgnZGF0YS1wdCcpO1xuICAgICAgICBsZXQgY3VycmVudCA9IGNhcmRzX21haW5fY29udC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudCcpO1xuICAgICAgICBsZXQgcGVyX3BhZ2UgPSBjYXJkc19tYWluX2NvbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBlci1wYWdlJyk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGNhcmRzX21haW5fY29udC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcbiAgICAgICAgbGV0IHNob3dfZGF0ZSA9IGNhcmRzX21haW5fY29udC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1kYXRlJyk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGNhcmRzX21haW5fY29udC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0Jyk7XG4gICAgICAgIGxldCB0ZXJtID0gY2FyZHNfbWFpbl9jb250LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXJtJyk7XG4gICAgICAgIGxldCBvZmZzZXQgPSBjYXJkc19tYWluX2NvbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpO1xuICAgICAgICBsZXQgaXRlbXNfY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdHNfY2FyZHNfaXRlbXNfY29udCcpO1xuICAgICAgICBsZXQgbG9hZExhYmVsID0gJ1Nob3cgbW9yZSc7XG4gICAgICAgIGxldCBsb2FkTGFiZWxBdHRyID0gY2FyZHNfbWFpbl9jb250LmdldEF0dHJpYnV0ZSgnZGF0YS1sb2FkLW1vcmUtbGFiZWwnKTtcblxuICAgICAgICBpZiAobG9hZExhYmVsQXR0cikge1xuICAgICAgICAgICAgbG9hZExhYmVsID0gbG9hZExhYmVsQXR0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICBpZiAobG9hZF9tb3JlX2J0bikge1xuICAgICAgICAgICAgICAgIGxvYWRfbW9yZV9idG4uaW5uZXJUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZE1vcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2FkX21vcmVfYnRuKSB7XG4gICAgICAgICAgICBsb2FkX21vcmVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBwYWdlICsgMTtcbiAgICAgICAgICAgICAgICBpbml0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbml0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZE1vcmUoKSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7dXJsX2Jhc2V9L3dwLWpzb24vcmVsYXRlZC8mcHQ9JHtwb3N0X3R5cGV9JnBlcl9wYWdlPSR7cGVyX3BhZ2V9JnBhZ2U9JHtwYWdlfWA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke3VybH0mY3Q9JHtjYXRlZ29yeX1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7dXJsfSZ0bT0ke3Rlcm19YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7dXJsfSZvZmZzZXQ9JHtvZmZzZXR9YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbiBkZWF0aWwgcGFnZXMgbG9hZCByZWxhdGVkXG4gICAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybCArIGAmY3VycmVudD0ke2N1cnJlbnR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5nZXQoIHVybCwgZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRGF0YShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURhdGEoZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhLmN1cnJlbnQubGVuZ3RoICYmIGxvYWRfbW9yZV9idG4pIHtcbiAgICAgICAgICAgICAgICBsb2FkX21vcmVfYnRuLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobG9hZF9tb3JlX2J0bikge1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5leHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkX21vcmVfYnRuLmNsYXNzTGlzdC5hZGQoJ2QtaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkX21vcmVfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZF9tb3JlX2J0bi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRfbW9yZV9idG4uY2xhc3NMaXN0LnJlbW92ZSgnZC1pbmxpbmUtYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBuZXdIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dfZGF0ZSA9PT0gJ3llcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gYDxzbWFsbD4ke2VzY2FwZUh0bWwoaXRlbS5mb3JtYXR0ZWREYXRlKX08L3NtYWxsPmBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdIVE1MICs9XG4gICAgICAgICAgICAgICAgICAgICAgICBgPGFydGljbGUgY2xhc3M9XCJjb2wgZC1mbGV4IG15LTMgbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2VtYW50aWNfY2FyZCAgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cIm0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnRodW1ibmFpbCAhPT0gZmFsc2UgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGltZyBzcmM9XCIke2l0ZW0udGh1bWJuYWlsfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgLz5gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkX3RpdGxlIG1iLTQgbXQtMFwiPiR7ZXNjYXBlSHRtbChpdGVtLnBvc3RfdGl0bGUpfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnBlcm1hbGlua31cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBidG4tY2FyZCBwYi0yXCI+TGVhcm4gbW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+YFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlbXBsYXRlID09PSAnYnJhbmRzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnBvc3RfZXhjZXJwdCAmJiBpdGVtLnBvc3RfZXhjZXJwdCAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ke2VzY2FwZUh0bWwoaXRlbS5wb3N0X2V4Y2VycHQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hUTUwgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgIGA8YXJ0aWNsZSBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNlbWFudGljX2NhcmQgIHctMTAwIGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0ucGVybWFsaW5rfVwiIHJlbD1cIm5vZm9sbG93XCIgY2xhc3M9XCJkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwibS0wIGJyYW5kLWNhcmQtaW1nICR7aXRlbS50aHVtYm5haWwgPT0gZmFsc2UgPyAnYmdfZ3JheScgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS50aHVtYm5haWwgIT09IGZhbHNlID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7aXRlbS50aHVtYm5haWx9XCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiAvPmAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Ym9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnI3B0c19jYXJkc19pdGVtc19jb250IGFydGljbGUnKS5yZW1vdmVDbGFzcygnbmV3Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXRlbXNfY29udC5pbm5lckhUTUwgKz0gbmV3SFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGxvYWRfbW9yZV9idG4pIHtcbiAgICAgICAgICAgICAgICBsb2FkX21vcmVfYnRuLmlubmVyVGV4dCA9IGxvYWRMYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZcIikucmVwbGFjZSgvPC9nLCBcIjxcIikucmVwbGFjZSgvPi9nLCBcIj5cIikucmVwbGFjZSgvXCIvZywgJ1wiJykucmVwbGFjZSgvJy9nLCBcIidcIik7XG4gICAgICAgIH1cbiAgICB9XG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9ICQoXCIuc2VhcmNoLWljb24td3JhcHBlclwiKTtcblxuICAgIHNlYXJjaEljb24ub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnRzKFwiLm1haW5OYXYtZm9ybVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcbn0pKGpRdWVyeSk7IiwiKCgkKSA9PiB7XG4gICBjb25zdCB0YWJsZURvbSA9ICQoXCIudGV4dHVhbC1jb250ZW50IHRhYmxlXCIpO1xuXG4gICBpZiAodGFibGVEb20ubGVuZ3RoKSB7XG4gICAgICB0YWJsZURvbS5hZGRDbGFzcyhcInRhYmxlXCIpLndyYXAoXCI8ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlJz48L2Rpdj5cIik7XG4gICB9XG59KShqUXVlcnkpO1xuIiwiKCgpID0+IHtcbiAgIC8vIEF1c3RyYWxpYW4gUGhvbmUgTnVtYmVyIFJlZ3hcbiAgIGNvbnN0IHBob25lRXhwcmVzc2lvbiA9XG4gICAgICAvXlxcKHswLDF9KCgwfFxcKzYxKSgyfDR8M3w3fDgpKXswLDF9XFwpezAsMX0oXFwgfC0pezAsMX1bMC05XXsyfShcXCB8LSl7MCwxfVswLTldezJ9KFxcIHwtKXswLDF9WzAtOV17MX0oXFwgfC0pezAsMX1bMC05XXszfSQvO1xuXG4gICBjb25zdCBpbnB1dFBob25lID0gJChcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuXG4gICBjb25zdCB2YWxpZGF0ZVBob25lS2V5VXAgPSAoKSA9PiB7XG4gICAgICBpbnB1dFBob25lLmtleXVwKChlKSA9PiB7XG4gICAgICAgICBpZiAoZS5rZXlDb2RlICE9IDkpIHtcbiAgICAgICAgICAgIC8vIHRhYiBrZXlcbiAgICAgICAgICAgIHBob25lVmFsaWRhdGVSZWd4KGlucHV0UGhvbmUudmFsKCkpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9O1xuXG4gICBjb25zdCBwaG9uZVZhbGlkYXRlUmVneCA9IChwaG9uZU51bSkgPT4ge1xuICAgICAgaWYgKHBob25lTnVtICE9IFwiXCIpIHtcbiAgICAgICAgIGlmICghcGhvbmVOdW0ubWF0Y2gocGhvbmVFeHByZXNzaW9uKSkge1xuICAgICAgICAgICAgaW5wdXRQaG9uZVxuICAgICAgICAgICAgICAgLmdldCgwKVxuICAgICAgICAgICAgICAgLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHVzZSBhIHZhbGlkIG1vYmlsZSBudW1iZXJcIik7XG4gICAgICAgICAgICBpbnB1dFBob25lLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZ2JhKDI1NSwgMjU1ICwgMjU1LCAwLjYpXCIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0UGhvbmUuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpO1xuICAgICAgICAgICAgaW5wdXRQaG9uZS5nZXQoMCkuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICBpbnB1dFBob25lLmdldCgwKS5yZXBvcnRWYWxpZGl0eSh0cnVlKTtcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBpbnB1dFBob25lLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKTtcbiAgICAgICAgIGlucHV0UGhvbmUuZ2V0KDApLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgaW5wdXRQaG9uZS52YWwoXCJcIik7XG4gICAgICAgICBpbnB1dFBob25lLmdldCgwKS5yZXBvcnRWYWxpZGl0eSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9O1xuXG4gICB2YWxpZGF0ZVBob25lS2V5VXAoKTtcbn0pKCk7XG4iLCIvL2luaXQgcGxheWVyIChjb2RlIG9uIHZlbmRvciBmb2xkZXIsIGV4dGVuZGVkIG9uIGZ1bmN0aW9ucy5waHAgcmVnaXN0ZXJlZCBzY3JpcHRzKVxuUGx5ci5zZXR1cCgndmlkZW8nKTsiXX0=;
