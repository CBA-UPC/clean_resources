!function(){"use strict";try{window.snaptr.cfg('f4654817-7a22-4029-aea1-3500e87129bc',{"asc":[],"a":[],"ipg":"34","b":["MD","BTC","DT","IP6"],"t":"","v":"3.7.5-2401032347","ec":[]})}catch(e){}}();MODULE_NOT_FOUND",e}n=o[i]={exports:{}},a[i][0].call(n.exports,function(e){return s(a[i][1][e]||e)},n,n.exports,t,a,o,r)}return o[i].exports}for(var c="function"==typeof require&&require,e=0;e<r.length;e++)s(r[e]);return s}({1:[function(e,i,n){i.exports=function e(i){(i=i._initialAttempt?i:function(e){const n=Object.assign({location:null,base:window,callback:null,failCallback:o,timeout:3e4,interval:250},e);if(Array.isArray(n.location)||(n.location=[n.location]),n.location=n.location.map(function(e){var i=typeof e;if("string"!=i&&"function"!=i)throw new TypeError("waitFor: an individual config.location must be a string or a function - got "+i);return"function"==i?e:r.bind(null,e,n.base)}),"function"!=typeof n.callback)throw new TypeError("waitFor: config.callback is required and must be a function");if("failLogging"===n.failCallback&&(n.failCallback=a),"function"==typeof n.failCallback)return Object.assign(n,{_initialAttempt:(new Date).getTime(),_attempt:0,_maxAttempts:n.timeout/n.interval});throw new TypeError('waitFor: config.failCallback must be either a function or "failLogging"')}(i))._attempt++;let n=!0;const t=[];function a(e){"function"==typeof r("console.log")&&console.log('"%s" not found after %dms (%d attempts, delaying %dms)',e.location.join(","),(new Date).getTime()-e._initialAttempt,e._attempt,e.interval)}function o(){}function r(e,i){var n=e.indexOf(".");return i=i||this,-1===n?i[e]:(i=i[e.substr(0,n)])&&r(e.substr(n+1),i)}i.location.forEach(function(e){n&&((n=e.apply(null,t))&&"object"==typeof n&&"length"in n&&"number"==typeof n.length&&n.length<1&&(n=!1),t.push(n))}),n?i.callback.apply(null,t):i._attempt<i._maxAttempts?setTimeout(function(){e(i)},i.interval):i.failCallback(i)}},{}],2:[function(e,i,n){const p=e("./functions/cspLogging.js"),g=e("./functions/netLog.js"),f=e("./functions/scriptInjection.js"),w=e("@studio-metric/waitfor/dist/waitFor.cjs"),h=()=>{return(e=window.location.pathname).endsWith("/")?e:e+"/";var e};let m=h();const y=window.localStorage.getItem("injectCNSQ-debug"),v=window.sessionStorage.getItem("injectCNSQ-delayedPageview"),b=(e,n)=>e.some(e=>{let i="string"==typeof e?n===e:!1;return i="object"==typeof e&&"[object RegExp]"===Object.prototype.toString.call(e)?e.test(n):i});i.exports=t=>{o("--- INIT ---"),y&&console.time("CNSQ:init"),o(v?"!! Analytics model only (delayed pageview) !!":"History change and analytics model");let n=h();o({debounceTimer:1e3,intervalTimer:1250});const a=window.localStorage.getItem("injectCNSQ");function o(){y&&console.log("CNSQ:",...arguments)}const r=()=>(!t.activationCriteria||t.activationCriteria.every(e=>e))&&(!t.skipCriteria||!t.skipCriteria.some(e=>e)),s=()=>{return(t.blockedPaths?b(t.blockedPaths,m):!b(t.allowedPaths,m))||navigator.userAgent.includes("DisneyRAWebView")?(t.knownBlockedPaths&&!b(t.knownBlockedPaths,m)&&g({category:"ContentSquare:UnkonwnUrl",action:window.location.hostname+h()}),!1):(p(),!0)};let c="",l;const d=((i,n)=>{let t=Date.now(),a;return function(){var e=Date.now();return e>=t?(o("run debounced fn call"),t=e+n,a=i.apply(this,arguments)):o("skip debounced fn call"),a}})(e=>{var i;t.allowedLocalePathPrefix?.forEach(e=>{e.test(m)&&(m=m.replace(e,"/"))}),(a||r()&&s())&&(void 0===window.CS_CONF?(window._uxa=window._uxa||[],window._uxa.push(["setPath",n]),u(n),f(t.libraryPath),y&&console.timeEnd("CNSQ:init"),o("--- scriptInjection ---"),o({currentPath:n})):(i=(e=e)?"::"+e:"",i=h()+i,o({pageId:e,prevPageview:c,tempPageview:i}),c!==i&&(c=i,o("--- trackPageview ---"),o("setpath",c),window._uxa=window._uxa||[],window._uxa.push(["setPath",c]),u(c),w({location:"csTrackPageviewWithCustomCode",callback:e=>e(),timeout:4e3}))))},1e3),u=n=>{Array.isArray(t.cVars)&&0<t.cVars.length?t.cVars.forEach(e=>{if(!e.groupingRegex?.test(n))return o(`cVAR::${e.name} no matching cVar grouping`),!1;var i=b(e.paths,n);o("cVAR::"+e.name,{cVarPathsMatch:i}),i?(o("cVAR::setCustomVariable",{index:e.index,name:e.name,value:e.value}),window._uxa.push(["setCustomVariable",e.index,e.name,e.value])):(o("cVAR::no matching cVar paths"),window._uxa.push(["setCustomVariable",e.index,e.name,""]))}):o("cVAR::no cVars set")};var e=()=>{var e=h();e!==n&&(o("comparePath",{currentPath:n,testPath:e}),n=e,d(),l=void 0)};v||d(),v||(o("Check history change"),window.navigation?.addEventListener?(o("window.navigation"),window.navigation.addEventListener("navigatesuccess",e)):(o("pollForPathChange"),setInterval(e,1250))),["WDPRO","Analytics","Subscriptions"].reduce((e,i,n)=>e[i]||(e[i]=n<2?{}:[]),window).push({topic:"model.beforeMapping",handler:e=>{var i=h();o(e),void 0!==l||v||(l=e?.model?.pageId),o("analytics model",{currentPath:n,testPath:i}),(n===i||v)&&(i=e?.model?.pageId,e=e?.model?.configuration,o("check analytics model..."),o({currentPageId:l,testPageId:i}),e)&&i&&l!==i&&(l=i,o("analytics model"),d(l))}})}},{"./functions/cspLogging.js":3,"./functions/netLog.js":4,"./functions/scriptInjection.js":5,"@studio-metric/waitfor/dist/waitFor.cjs":1}],3:[function(e,i,n){const t=e("./netLog.js"),a=["blob","clicktale","contentsquare","unsafe-inline"];i.exports=function(){document.addEventListener("securitypolicyviolation",function(e){const i=e.blockedURI.toLowerCase();a.some(function(e){return i.includes(e)})&&t({category:"SyndicatedCSPlog:ContentSquare",action:window.location.hostname+window.location.pathname,data:{blockedURI:e.blockedURI,originalPolicy:e.violatedDirective,violatedDirective:e.originalPolicy}})})}},{"./netLog.js":4}],4:[function(e,i,n){let t=[];!function(e,i,n){var t,a;for(void 0===i&&(i={}),void 0===n&&(n=this||window);-1<(t=e.indexOf("."));)n=n[a=e.substr(0,t)]||(n[a]={}),e=e.substr(t+1);return e in n?n[e]:n[e]=i}("WDPRO.Analytics.Subscriptions",[]).push({topic:"framework.loaded",handler:function(){var e=WDPRO.Analytics.inject.resolve("netlog");e&&t.forEach(e)}}),i.exports=function(e){t.push(e)}},{}],5:[function(e,i,n){i.exports=e=>{var i,n,t;window.clickTaleTagInjected||(window.clickTaleTagInjected=!0,i="script",n=document.getElementsByTagName(i)[0],(t=(t=document.createElementNS)?t.call(document,"http://www.w3.org/1999/xhtml",i):document.createElement(i)).async=!0,t.crossOrigin="anonymous",t["data-injected-by"]="cnsqInjector",t.src="https://cdnssl.clicktale.net/"+e,t.type="text/javascript",n.parentNode.insertBefore(t,n))}},{}],6:[function(e,i,n){function c(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}i.exports={get:function(e,i){if("undefined"!=typeof document){for(var n={},t=document.cookie?document.cookie.split("; "):[],a=0;a<t.length;a++){var o=t[a].split("="),r=o.slice(1).join("=");i||'"'!==r.charAt(0)||(r=r.slice(1,-1));try{var s=c(o[0]),r=c(r);if(i)try{r=JSON.parse(r)}catch(e){}if(n[s]=r,e===s)break}catch(e){}}return e?n[e]:n}},set:function(e,i,n){if("undefined"!=typeof document){"number"==typeof(n=function(){for(var e=0,i={};e<arguments.length;e++){var n,t=arguments[e];for(n in t)i[n]=t[n]}return i}({path:"/"},n)).expires&&(n.expires=new Date(+new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var t=JSON.stringify(i);/^[{[]/.test(t)&&(i=t)}catch(e){}i=encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a,o="";for(a in n)n[a]&&(o+="; "+a,!0!==n[a])&&(o+="="+n[a].split(";")[0]);return document.cookie=e+"="+i+o}}}},{}],7:[function(e,i,n){const t=e("../lib/cookie");var a=e("@studio-metric/waitfor/dist/waitFor.cjs");const o=e("../common.js"),r=e("../variables/libraryPath.js");a({location:[()=>{return t.get("geolocation_aka_jar",!0)?.country},()=>{var e=t.get("localeCookie_jar_aka",!0)||t.get("localeCookie_jar",!0);return e?.preferredRegion||e?.contentLocale}],callback:(e,i)=>{e=e.toLowerCase(),i=i.toLowerCase().replace("-","_"),window._uxa=window._uxa||[],window._uxa.push(["setPIISelectors",{PIISelectors:[".lp_location_center,.lp_input_area,.lp_title,.lpc_slider__body"]}]);e={activationCriteria:[!("us"!==e&&"usa"!==e||"en_us"!==i&&"es_us"!==i)],libraryPath:r.prod,allowedLocalePathPrefix:[/^\/es-us\//],allowedPaths:["/",/^\/100th-anniversary\//i,/^\/activities\//i,/^\/admission\//i,/^\/alpr\//i,/^\/annual-passport-photopass-terms-conditions\//i,/^\/annual-passport-terms-conditions\//i,/^\/attractions\//i,/^\/authentication\//i,/^\/availability-calendar\//i,/^\/calendars\//i,/^\/cart\//i,/^\/checkout\//i,/^\/checkout-booking\//i,/^\/create-your-disney-account\//i,/^\/destinations\//i,/^\/diamond-days-sweapstakes-official-rules\//i,/^\/dine-res\//i,/^\/dining\//i,/^\/dining-reservation\//i,/^\/disney-vacation-benefits\//i,/^\/dlr-resort-landing-spa\//i,/^\/enchanting-extras-collection\//i,/^\/entertainment\//i,/^\/entry-reservation\//i,/^\/events-tours\//i,/^\/experience-updates\//i,/^\/family-friends\//i,/^\/faq\//i,/^\/genie\//i,/^\/gift-disney-vacation\//i,/^\/guest-services\//i,/^\/help\//i,/^\/hotel-benefits\//i,/^\/hotels-overview\//i,/^\/hotels\//i,/^\/hotels\/good-neighbor\//i,/^\/link\//i,/^\/links\//i,/^\/login\//i,/^\/magic-key-terms-conditions\//i,/^\/magic-key\//i,/^\/maps\//i,/^\/my-hotel-reservation\//i,/^\/news\//i,/^\/offers-discounts\//i,/^\/park-rules\//i,/^\/passes\//i,/^\/photopass-expiration-policy\//i,/^\/photopass-terms-conditions\//i,/^\/photopass\//i,/^\/plan\//i,/^\/pre-arrival-tips\//i,/^\/profile\//i,/^\/recreation\//i,/^\/registration\//i,/^\/reservations\//i,/^\/resort-add-ons\//i,/^\/resort-cancellation\//i,/^\/resort-checkout\//i,/^\/resort-modification\//i,/^\/resorts\//i,/^\/search\//i,/^\/shops\//i,/^\/terms-conditions\//i,/^\/theme-park-reservations-terms-conditions\//i,/^\/tickets-and-passes\//i,/^\/tickets\//i,/^\/trip\//i,/^\/vacation-package-terms-conditions\//i,/^\/vacation-packages\//i,/^\/villas-at-disneyland-hotel\//i,/^\/visa-card\//i,/^\/when-to-visit\//i,/^\/wishlist\//i,/^\/your-happiest-place-disney-southern-california\//i,/^\/your-happiest-place-disney\//i],knownBlockedPaths:[],cVars:[{name:"diningDetailsReservationAccepted",value:"true",index:2,groupingRegex:/^\/dining\//,paths:["/dining/disney-california-adventure/carthay-circle-lounge/","/dining/disney-california-adventure/carthay-circle-restaurant/","/dining/disney-california-adventure/lamplight-lounge/","/dining/disney-california-adventure/magic-key-terrace/","/dining/disney-california-adventure/wine-country-trattoria/","/dining/disney-california-adventure/world-of-color-dessert-party/","/dining/disney-california-adventure/world-of-color-dining/","/dining/disneyland-hotel/goofys-kitchen/","/dining/disneyland-hotel/trader-sams/","/dining/disneyland/blue-bayou-restaurant/","/dining/disneyland/cafe-orleans-dining-package/","/dining/disneyland/cafe-orleans/","/dining/disneyland/carnation-cafe/","/dining/disneyland/fantasmic-dinner-packages/","/dining/disneyland/fantasmic-on-the-go-show/","/dining/disneyland/ogas-cantina/","/dining/disneyland/plaza-inn-dining-package/","/dining/disneyland/plaza-inn/","/dining/disneyland/river-belle-terrace/","/dining/disneyland/tomorrowland-skyline-terrace/","/dining/downtown-disney-district/jazz-kitchen-coastal-grill-patio/","/dining/downtown-disney-district/naples-ristorante-e-bar/","/dining/downtown-disney-district/splitsville-restaurant/","/dining/downtown-disney-district/tortilla-jos/","/dining/grand-californian-hotel/craftsman-bar/","/dining/grand-californian-hotel/disney-princess-breakfast-adventures/","/dining/grand-californian-hotel/napa-rose/","/dining/grand-californian-hotel/storytellers-cafe/"]}]};o(e)}})},{"../common.js":2,"../lib/cookie":6,"../variables/libraryPath.js":8,"@studio-metric/waitfor/dist/waitFor.cjs":1}],8:[function(e,i,n){var t="www49/ptc/";i.exports={prod:t+"73e43e63-0ccd-4ba6-b9a7-86141e6b5e85.js",stage:t+"ed7cd553-7b1e-4764-9adf-6c996717c7f7.js"}},{}]},{},[7]);          d23OneID.processInvalidMembership();
                    } else if (
                        d23OneID.d23AccountInfo.membershipLevel === 'NONE'
                    ) {
                        // expired memberships
                        d23OneID.processInvalidMembership();
                    } else {
                        d23OneID.processValidMembership();
                    }
                }, 200);
            }
        },

        processValidMembership: () => {
            const $welcome = $('#d23-welcome');
            const $mobileMenu = $('#d23-my-account-menu');
            const $profile = $('.profile-right .action-buttons');
            let $menu;
            let $accountMenu;
            let membershipLevel;

            if (
                window.did.pageUpdater.oneIDReady &&
                window.did.pageUpdater.doneLoadingTemplates &&
                d23OneID.templatesCached
            ) {
                clearInterval(d23OneID.membershipInterval);
                d23OneID.membershipInterval = null;

                d23OneID.displayUserMembershipInfo();

                membershipLevel =
                    d23OneID.d23AccountInfo.membershipLevel.toLowerCase();
                if (membershipLevel === 'free') {
                    membershipLevel = 'general';
                }

                membershipLevel =
                    membershipLevel.charAt(0).toUpperCase() +
                    membershipLevel.slice(1).toLowerCase();
                if (membershipLevel === 'Goldfamily') {
                    membershipLevel = 'Gold Family';
                }

                if ($welcome.length > 0) {
                    $menu = window.did.pageUpdater.getTemplate(
                        'user-my-account-menu',
                        {
                            display_name: d23OneID.guest.profile.firstName,
                            account_level: membershipLevel,
                            view_href:
                                d23OneIDData__D23__actions.viewMembershipLinkHref,
                            gift_href: d23OneIDData__D23__actions.giftLinkHref,
                            help_href: d23OneIDData__D23__actions.helpLinkHref,
                            member_id: d23OneID.d23AccountInfo.memberNumber,
                            full_name: `${d23OneID.guest.profile.firstName} ${d23OneID.guest.profile.lastName}`,
                            acct_mgmt_href:
                                d23OneIDData__D23__actions.csgAcctMgmtHref,
                        }
                    );
                    $welcome.empty().append($menu);

                    // Apply logged in styling.
                    $('.loggedin').show();
                    $('.loggedout').hide();
                }

                if ($mobileMenu.length > 0) {
                    $accountMenu = window.did.pageUpdater.getTemplate(
                        'd23-mobile-my-account',
                        {
                            member_id: d23OneID.d23AccountInfo.memberNumber,
                            full_name: `${d23OneID.guest.profile.firstName} ${d23OneID.guest.profile.lastName}`,
                            acct_mgmt_href:
                                d23OneIDData__D23__actions.csgAcctMgmtHref,
                        }
                    );
                    $mobileMenu.empty().append($accountMenu);

                    // Attach toggle events to account menu
                    $('.js-my-account-toggle, .js-close-my-account').on(
                        'click',
                        (e) => {
                            e.preventDefault();

                            $('.js-my-account').toggleClass('show');

                            // Toggle menu
                            if ($('.js-my-account').is(':visible')) {
                                $('.js-my-account').height($(window).height());
                                $('body').addClass('myAccountOpen');
                                $('html').css({ position: 'fixed' });
                            } else {
                                $('body').removeClass('myAccountOpen');
                                $('html').css({ position: 'static' });
                            }
                        }
                    );
                }

                if ($profile.length > 0) {
                    if ($profile.length > 0)
                        $profile.find('.js-oneid-profile').remove();
                    $profile.append(
                        window.did.pageUpdater.getTemplate('profile-link', {
                            text: 'Update Profile',
                            css_classes: 'profile-box',
                        })
                    );
                }
            }
        },

        // "FL-Builder slider reload" to account for 'D23 Slider' BB-Modules.
        resetFLBuilderSliders: () => {
            const sliders = $('.d23-slider');
            sliders.each((index) => {
                // eslint-disable-next-line no-undef
                FLBuilderLayout.reloadSlider(sliders[index]);
            });
        },

        displayUserMembershipInfo: () => {
            const data = d23OneID.d23AccountInfo;
            const $memberSinceType = $('#member-since-type');
            const $memberSinceYear = $('#member-since-year');
            const $membershipId = $('#profile-membership-id-value');
            const $membershipType = $('#profile-membership-type-value');
            const $membershipExpiration = $(
                '#profile-membership-expiration-value'
            );
            const $profileWrapper = $('.profile-wrapper,body');
            let membership = '';
            let membershipStr;
            let date;
            let membershipLevel = '';
            let customMembershipLevel = '';
            let customMembership = '';
            let membershipDate = '';
            let expiryDate;
            const $body_element = $('body');

            if (
                data.membershipLevel !== 'undefined' &&
                data.membershipLevel.length > 0
            ) {
                membershipLevel = data.membershipLevel.toLowerCase();
                customMembershipLevel = membershipLevel;
                if (membershipLevel === 'free') {
                    membershipLevel = 'general';
                } else if (membershipLevel === 'gold' && data.isCharterMember) {
                    customMembershipLevel = 'charter';
                } else if (
                    membershipLevel === 'goldfamily' &&
                    data.isCharterMember
                ) {
                    customMembershipLevel = 'charter';
                }
                // convert from variable (membershipLevel) to display (membership)
                membership =
                    membershipLevel.charAt(0).toUpperCase() +
                    membershipLevel.slice(1).toLowerCase();
                if (membership === 'Goldfamily') {
                    membership = 'Gold Family';
                }
                if (membership === 'Free') {
                    membership = 'General';
                }
                customMembership =
                    customMembershipLevel.charAt(0).toUpperCase() +
                    customMembershipLevel.slice(1).toLowerCase();
                if (customMembership === 'Goldfamily') {
                    customMembership = 'Gold Family';
                }
                if (customMembership === 'Free') {
                    customMembership = 'General';
                }

                if ($profileWrapper.length > 0) {
                    switch (customMembershipLevel) {
                        case 'goldfamily':
                        case 'gold':
                            // Handle Audience Segmentation classes on Body
                            $body_element
                                .addClass('d23-gold-member')
                                .removeClass('d23-general-member');

                            if ($body_element.hasClass('fl-builder')) {
                                setTimeout(() => {
                                    d23OneID.resetFLBuilderSliders();
                                }, 30);
                            }

                            // Handle classes for Profile menu wrapper.
                            $profileWrapper
                                .removeClass('d23-general-member')
                                .removeClass('d23-charter-member')
                                .addClass('d23-gold-member');
                            break;

                        case 'charter':
                            // Handle Audience Segmentation classes on Body
                            $body_element
                                .addClass('d23-general-member')
                                .removeClass('d23-gold-member');

                            if ($body_element.hasClass('fl-builder')) {
                                setTimeout(() => {
                                    d23OneID.resetFLBuilderSliders();
                                }, 30);
                            }

                            // Handle Audience Segmentation classes on Body
                            $body_element.addClass('d23-charter-member');
                            $profileWrapper
                                .removeClass('d23-general-member')
                                .removeClass('d23-gold-member')
                                .addClass('d23-charter-member');
                            break;

                        default:
                            // Handle Audience Segmentation classes on Body
                            $('body')
                                .addClass('d23-general-member')
                                .removeClass('d23-gold-member');

                            if ($body_element.hasClass('fl-builder')) {
                                setTimeout(() => {
                                    d23OneID.resetFLBuilderSliders();
                                }, 30);
                            }

                            // Handle classes for Profile menu wrapper.
                            $profileWrapper
                                .removeClass('d23-gold-member')
                                .removeClass('d23-charter-member')
                                .addClass('d23-general-member');
                            break;
                    }
                }
            }

            if (data.joinDate !== 'undefined' && data.joinDate.length > 0) {
                membershipDate = data.joinDate;
            }

            if (membershipDate) {
                date = membershipDate.split('/');
                if (date.length === 3) {
                    const year = date[2];

                    if (
                        $memberSinceType.length > 0 &&
                        customMembershipLevel !== ''
                    ) {
                        membershipStr =
                            d23OneID.strings.profileMemberSince.replace(
                                '#{MEMBERSHIP}',
                                customMembership
                            );
                        $memberSinceType.html(membershipStr);

                        if ($memberSinceYear.length > 0) {
                            $memberSinceYear.html(year);
                        }
                    }
                }
            }

            if (data.memberNumber && data.memberNumber.length > 0) {
                if ($membershipId.length > 0) {
                    $membershipId.html(data.memberNumber);
                }
            }

            if (membershipLevel !== '') {
                if ($membershipType.length > 0) {
                    if (membershipLevel === 'free') {
                        membershipStr = 'Complimentary';
                    } else {
                        membershipStr =
                            d23OneID.strings.profileMembership.replace(
                                '#{MEMBERSHIP}',
                                membership
                            );
                    }
                    $membershipType.html(membershipStr);
                }
            }

            if (data.expiryDate !== 'undefined' && data.expiryDate.length > 0) {
                if ($membershipExpiration.length > 0) {
                    if (data.expiryDate.toLowerCase() === 'never') {
                        expiryDate = 'n/a';
                    } else {
                        expiryDate = data.expiryDate;
                    }
                    $membershipExpiration.html(expiryDate);
                }
            }
        },

        processInvalidMembership: () => {
            const $welcome = $('#d23-welcome');
            const $mobileMenu = $('#d23-my-account-menu');
            let $join;
            let $newJoin;

            if (
                window.did.pageUpdater.oneIDReady &&
                window.did.pageUpdater.doneLoadingTemplates &&
                d23OneID.templatesCached
            ) {
                clearInterval(d23OneID.membershipInterval);
                d23OneID.membershipInterval = null;

                if ($welcome.length > 0) {
                    $welcome.empty().append(
                        window.did.pageUpdater.getTemplate('logout-link', {
                            text: 'Sign Out',
                            css_classes: '',
                        })
                    );

                    $join = $('.actions-wrapper .join-d23').first();
                    if ($join.length > 0) {
                        if ($join.attr('href') === '') {
                            $join.attr('href', d23OneID.disneyStoreHref);
                        }

                        $newJoin = $join.clone();
                        $newJoin.appendTo($welcome);
                        $newJoin.css('display', 'inline-block');
                    }
                }

                if ($mobileMenu.length > 0) {
                    $mobileMenu
                        .empty()
                        .append(
                            window.did.pageUpdater.getTemplate(
                                'd23-mobile-sign-out'
                            )
                        );
                }

                d23OneID.maybeShowGoldBar();
            }
        },

        setCookie(name, value, minutes) {
            let expires;
            let date;
            if (minutes) {
                date = new Date();
                date.setTime(date.getTime() + minutes * 60 * 1000);
                expires = `; expires=${date.toGMTString()}`;
            } else {
                expires = '';
            }
            document.cookie = `${name}=${JSON.stringify(
                value
            )}${expires}; path=/`;
        },

        setSessionCookie(name, value, domain) {
            document.cookie = `${name}=${JSON.stringify(
                value
            )};path=/;domain=${domain}; Secure; `;
        },

        getCookie(name) {
            const cookieName = `${name}=`;
            const ca = document.cookie.split(';');
            let i;
            let c;
            let value;

            for (i = 0; i < ca.length; i++) {
                c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cookieName) === 0) {
                    try {
                        value = JSON.parse(
                            c.substring(cookieName.length, c.length)
                        );
                    } catch (e) {
                        value = c.substring(cookieName.length, c.length);
                    }
                    return value;
                }
            }
            return '';
        },

        cookieExists(name) {
            const cookies = document.cookie.split('; ');
            let currentName;
            let i;

            if (cookies.length > 0) {
                for (i = 0; i < cookies.length; i++) {
                    currentName = cookies[i].split('=');
                    if (name === currentName[0]) {
                        return true;
                    }
                }
            }
            return false;
        },

        /**
         * Tests for the presence of any cookies with the OneID suffixes.
         *
         * These same suffixes are also used by Varnish.
         *
         * @returns {boolean} True if all OneID cookies exist, else false.
         * @see https://gitlab.disney.com/DDM/applications/D23/blob/develop/varnish/default.vcl
         *
         */
        oneIDCookiesExist: () => {
            return (
                document.cookie.indexOf('.api=') >= 0 &&
                document.cookie.indexOf('.idn=') >= 0 &&
                document.cookie.indexOf('.token=') >= 0
            );
        },

        maybeShowGoldBar: () => {
            let hasShareToken = false;
            let gatedContent = false;

            if ($('body').hasClass('d23-is-gated')) {
                gatedContent = true;
            }

            if (!gatedContent) {
                return;
            }

            if (window.location.href.indexOf('/access/') > -1) {
                return;
            }

            if (
                window.location.href.indexOf('?share_token=') > -1 ||
                window.location.href.indexOf('&share_token=') > -1
            ) {
                hasShareToken = true;
            }

            if (hasShareToken) {
                $('.d23-gold-bar-content .d23-gold-message').hide();
                $('.d23-gold-bar-content .d23-gold-token-message').show();

                $('#d23-gold-bar').removeClass('hide');
            } else if (
                !d23OneID.cookieExists('d23-bfcf') ||
                !d23OneID.cookieExists('d23-gfcf') ||
                !d23OneID.cookieExists('d23-yfcf')
            ) {
                $('.d23-gold-bar-content .d23-gold-message').hide();
                $('.d23-gold-bar-content .d23-gold-fcf-message').show();

                $('#d23-gold-bar').removeClass('hide');
            }
        },

        populateGFOneID: () => {
            const cookie = d23OneID.getCookie('d23-membership');

            if (typeof cookie !== 'undefined') {
                const nameField = jQuery('.gfield.name input');
                const emailField = jQuery('.gfield.email input');
                const membershipLevelField = jQuery(
                    '.gfield.membership_level input'
                );
                const membershipNumberField = jQuery(
                    '.gfield.membership_number input'
                );
                const disneyPlusSubscriberField = jQuery(
                    '.gfield.disney_plus_subscriber input'
                );

                if (
                    nameField.length &&
                    nameField.val().length === 0 &&
                    (cookie.firstName.length || cookie.lastName.length)
                ) {
                    const name = `${cookie.firstName} ${cookie.lastName}`;
                    nameField.val(name);
                    nameField.attr('readonly', 'readonly');
                }

                if (
                    emailField.length &&
                    emailField.val().length === 0 &&
                    cookie.email.length
                ) {
                    emailField.val(cookie.email);
                    emailField.attr('readonly', 'readonly');
                }

                if (
                    membershipLevelField.length &&
                    membershipLevelField.val().length === 0 &&
                    cookie.membershipLevel.length
                ) {
                    membershipLevelField.val(cookie.membershipLevel);
                    membershipLevelField.attr('readonly', 'readonly');
                    membershipLevelField.change();
                }

                if (
                    membershipNumberField.length &&
                    membershipNumberField.val().length === 0 &&
                    cookie.memberNumber.length
                ) {
                    membershipNumberField.val(cookie.memberNumber);
                    membershipNumberField.attr('readonly', 'readonly');
                }

                if (
                    disneyPlusSubscriberField.length &&
                    disneyPlusSubscriberField.val().length === 0
                ) {
                    if (cookie.disneyPlusSubscriber) {
                        disneyPlusSubscriberField.val("YES");
                    } else {
                        disneyPlusSubscriberField.val("NO");
                    }
                    disneyPlusSubscriberField.attr('readonly', 'readonly');
                    disneyPlusSubscriberField.change();
                }
            }
        },

        /**
         * Encapsulates the CSG create session call, which is provided by the
         * DDM CSG Integration plugin. If that plugin is not activated, the
         * `createCSGSession` function will be undefined and this function
         * will just set the browser location to `profileLink`.
         *
         * @param profileLink URL to link out to.
         */
        goCsgAccountPage(profileLink) {
            if (!window.createCSGSession) {
                console.log(
                    '[D23-MEMBERSHIP] Unable to create CSG session. DDM CSG Integration plugin activated?'
                );
                window.location.assign(profileLink);
            }

            window
                .createCSGSession(
                    d23OneID.guest,
                    d23OneID.d23AccountInfo.membershipLevel,
                    d23OneIDData__D23__actions.nonce,
                    d23OneIDData__D23__actions.ajaxurl
                )
                .then((result) => {
                    if (result.data.body) {
                        d23OneID.setSessionCookie(
                            'ascSessionInfo',
                            JSON.parse(result.data.body),
                            d23OneID.cookieDomain
                        );
                    } else {
                        alert(
                            "Oops! Something went wrong, & we can't show your account details right now. Please contact D23 Guest Relations at (855) 323-5973, or via email at GuestRelations@D23.com"
                        );
                    }
                })
                .then(() => {
                    window.location.assign(profileLink);
                });
        },
    };

    d23OneID.setupHooks();

    if (!d23OneID.templatesCached) {
        // console.log('Templates currently not cached.');
        d23OneID.addTemplates();
    }

    if (window.did.pageUpdater && window.did.pageUpdater.loggedIn) {
        window.did.getGuest(true).then((fullGuest) => {
            d23OneID.on_init({ guest: fullGuest, loggedIn: true });
        });
    } else {
        $(document).on('manualOnInitComplete', () => {
            if (
                !d23OneID.manualInitialized &&
                window.did.pageUpdater.loggedIn
            ) {
                d23OneID.manualInitialized = true;

                window.did.getGuest(true).then((fullGuest) => {
                    d23OneID.on_init({
                        guest: fullGuest,
                        loggedIn: true,
                    });
                });
            }
        });
    }

    window.d23OneId = d23OneID;

    /**
     * Handler for "View Profile" link under the "My Account" dropdown in the main
     * site header. Tests that the Guest login is in a "high trust" state before
     * following the link to the CSG Account Management page. Does NOT verify
     * that the Guest is logged in since this menu item shouldn't be present
     * unless they are.
     */
    $(document)
        .on('click touchstart', '.view-profile-action', (e) => {
            e.preventDefault();
            const profileLink = $('#d23-welcome .view-profile-action').attr(
                'href'
            );

            window.did.getTrustStateStatus().then((highTrustState) => {
                if (highTrustState) {
                    d23OneID.goCsgAccountPage(profileLink);
                } else {
                    window.did.on('reauth', function followLink() {
                        window.did.off('reauth', followLink);
                        d23OneID.goCsgAccountPage(profileLink);
                    });

                    window.did.launchReauth();
                }
            });
        })
        .on('click touchstart', '.js-d23-profile-info-link', () => {
            let displayName = '';
            let swid = '';
            let accountLevel = '';

            if (d23OneID.guest) {
                if (d23OneID.guest.displayName) {
                    displayName = d23OneID.guest.displayName;
                } else {
                    if (d23OneID.guest.profile.firstName) {
                        displayName += d23OneID.guest.profile.firstName;
                    }
                    if (d23OneID.guest.profile.lastName) {
                        if (displayName) {
                            displayName += ' ';
                        }
                        displayName += d23OneID.guest.profile.lastName;
                    }
                }
                if (d23OneID.guest.profile && d23OneID.guest.profile.swid) {
                    swid = d23OneID.guest.profile.swid.replace(/[{}]/g, '');
                }
            }
            if (d23OneID.d23AccountInfo) {
                if (!swid && d23OneID.d23AccountInfo.swid) {
                    swid = d23OneID.d23AccountInfo.swid;
                }
                if (d23OneID.d23AccountInfo.membershipLevel) {
                    accountLevel = d23OneID.d23AccountInfo.membershipLevel;
                }
            }

            if (!displayName) {
                displayName = 'No Name in Profile';
            }
            if (!swid) {
                swid = 'No SWID could be retrieved.';
            }
            if (!accountLevel) {
                accountLevel =
                    'No account level retrieved. User is considered logged out.';
            }

            const $overlay = window.did.pageUpdater.getTemplate(
                'profile-info-overlay',
                {
                    display_name: displayName,
                    swid,
                    account_level: accountLevel,
                }
            );

            $('body').append($overlay);
        })

        .on('click touchstart', '.join-d23', () => {
            d23OneID.setCookie('d23-membership', '', -1);
        });
})(jQuery);
