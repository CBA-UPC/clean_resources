window.hjSiteSettings = window.hjSiteSettings || {"site_id":17ten_mode":"automatic","record":false,"continuous_capture_enabled":true,"recording_capture_keystrokes":false,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":"https://www.freepikcompany.com/privacy","deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"google_optimize":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["feedback.embeddable_widget","error_reporting","survey.type_button","survey.image_question","ask.popover_redesign","feedback.widget_telemetry","feedback.widgetV2","settings.billing_v2","client_script.compression.pc","survey.screenshots","survey.embeddable_widget"],"tracking_code_verified":true};

!function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t,r=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.send=e,this.batchSize=r,this.flushInterval=n,this.buffer=[],this.flushTimer=null}var r,n;return r=t,(n=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),t}();function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s,o=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},c={version:6,metricsUrl:(null===(t=window._hjSettings)||void 0===t?void 0:t.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(e,t,r){u.loggedMetrics[e]=i(i({},u.loggedMetrics[e]),{},a({},t,r||{}))},d=function(e){if(!e)return"value";var t=Object.keys(e)[0];return t&&e[t]||"value"},f=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return u.isDebugEnabled?i(i(i({},r),e.extraTags),u.genericTags):r},h=function(e,t){if(!s)return!1;var r=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===e&&(r=c.browser.inLab),"field"===e&&(r=u.isFieldMetricsEnabled),t?r&&t.flush:r},g=function(e){var t=!1,r="v=".concat(c.version),n=u.isDebugEnabled?"".concat(c.metricsUrl,"?").concat(r,"&debug=true"):"".concat(c.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(e){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",e)},b={getConfig:function(e){return c[e]},getState:function(e){return u[e]},start:function(){try{c.browser={hasPerformance:o(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var e=b.time(),t=window.hjSiteSettings||{},n=t.features,i=t.site_id,a=new Set(n),l=c.sampling;return u.genericTags={site_id:i},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,s=new r(g,c.buffer.bufferSize,c.buffer.flushInterval),e}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,o=t.extraTags,c=t.type;try{var l=d(n),g=u.loggedMetrics[e],b=0;if(r?(b=(g&&g[l]||0)+(r.value||1),u.loggedMetrics[e]=i(i({},g),{},a({},l,(null==r?void 0:r.flush)?0:b))):b=1,h(c,r)){var v={name:e,type:"count",value:b,tags:f({tag:n,extraTags:o})};s.add(v)}}catch(e){}},distr:function(e,t){var r=t.task,n=t.value,i=t.extraTags;h()&&s.add({name:e,type:"distribution",value:n,tags:f({tag:{task:r},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.start,i=t.total,a=t.extraTags,o=t.type;try{var c=b.time();if(!i&&!c)return;var u=d(r),g=i||(n&&c?c-n:void 0);if(l(e,u,{}),g&&g>0&&h(o)){var v={name:e,type:"distribution",value:Math.round(g),tags:f({tag:r,extraTags:a})};s.add(v)}return c}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}},timeIncr:function(e,t){var r,n,i,a,s=t.tag,o=t.start,c=t.flush,f=t.extraTags,h=t.type,g=hj.metrics.time(),v=o&&g?g-o:void 0,m=(r=e,{tagName:n=d(s),start:(a=(i=u.loggedMetrics[r])&&i[n]||{}).start,total:a.total}),w=v?v+(m.total||0):m.total;return l(e,m.tagName,{total:w}),c&&b.timeEnd(e,{tag:s,total:w,extraTags:f,type:h}),w},timeWatcher:function(){var e,t=0,r=!1,n=function(){var r,n=b.time();return t+=null!==(r=e&&n&&n-e)&&void 0!==r?r:0,e=b.time(),t};return{start:function(){if(!r)return r=!0,e=b.time()},incr:n,end:function(){var r=n();return t=0,e=void 0,r}}},getErrorMessage:function(e){return e instanceof Error?e.message:"string"==typeof e?e:""}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=b;var v=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot","i"),a=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var s="http:"===window.location.protocol,o=Boolean(window._hjSettings.preview);if(s&&!o)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=e;var d=u.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",l.appendChild(d),c.revision="2dbcb6f",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.2472296d2d26f0040059.js","1788104"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:v,type:"lab"}),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.6791ae4517f7ead8b5e1.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.d55717dad3e3dcd9f312.js"},SURVEY_ISOLATED:{js:"survey-isolated.c7e625374c0b7e06e3b4.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.03eedc48703630f6a41e.js"},SURVEY_INVITATION:{js:"survey-invitation.0d20935134fd53fb2a78.js"},NOTIFICATION:{js:"notification.0ed6d753395a17d0055b.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.2dd986180a9a6dffb319.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.78f1fdf940d13aafd488.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.28a8c6b22b3c0474c577.js"}}}();_menu-link ga__menu_item" href="https://www.freepikcompany.com/business">Business</a></li>

                            <li class="submenu">
                                <input class="show-mobile" type="checkbox" />
                                <a class="nav__menu-link" href="#" data-toggle="dropdown">Projects</a>
                                <ul class="mobile-dropdown__menu">
                                    <li><a class="nav__menu-link ga__menu_item" href="https://www.freepikcompany.com/freepik">Freepik</a></li>
                                    <li><a class="nav__menu-link ga__menu_item" href="https://www.freepikcompany.com/flaticon">Flaticon</a></li>
                                    <li><a class="nav__menu-link ga__menu_item" href="https://www.freepikcompany.com/slidesgo">Slidesgo</a></li>
                                    <li><a class="nav__menu-link ga__menu_item" href="https://www.freepikcompany.com/wepik">Wepik</a></li>
                                </ul>
                            </li>

                            <li><a class="nav__menu-link ga__menu_item" href="https://www.freepikcompany.com/newsroom/" target="_blank">Blog</a></li>
                        </ul>

                        <ul class="social-list">
                            <li>
                                <a href="https://www.facebook.com/Freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--facebook">
                                    <i class="icon icon--md icon--mg-sm icon--facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--twitter">
                                    <i class="icon icon--md icon--mg-sm icon--twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.es/freepik/" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--pinterest">
                                    <i class="icon icon--md icon--mg-sm icon--pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/freepik/?hl=es" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--instagram">
                                    <i class="icon icon--md icon--mg-sm icon--instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://es.linkedin.com/company/freepik-company" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--linkedin">
                                    <i class="icon icon--md icon--mg-sm icon--linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com/freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--dribbble">
                                    <i class="icon icon--md icon--mg-sm icon--dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC9wPXN2TIWoUamqONb7v8Pw" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--youtube">
                                    <i class="icon icon--md icon--mg-sm icon--youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button class="button button--md button--flat button--inverted button--icon button--icon--only button--state show-mobile trigger__button" data-trigger="nav">
                        <i class="icon icon--xl icon--mg-md icon--menuburger state--inactive"></i>
                        <i class="icon icon--xl icon--mg-md icon--cross state--active"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main id="main" class="legal">

        <section class="legal-content container mg-top-lv4">
            <div class="row">
                <div class="col__xs--12 col__sm--12 col__md--4 col--stretch">

                    <div class="row">
                        <div class="popover popover--bottom popover--width-auto push-center show-mobile">
                            <button class="popover__trigger button button--outline button--gray button--sm">Navigation</button>

                            <div class="popover__container">
                                <ul class="list mg-none">
                                    <li class="block mg-bottom-lv2"><a href="https://www.freepikcompany.com/legal">Terms of use</a></li>
                                    <li class="block mg-bottom-lv2"><a href="https://www.freepikcompany.com/privacy">Privacy policy</a></li>
                                    <li class="block mg-bottom-lv2"><a href="https://www.freepikcompany.com/cookie">Cookie policy</a></li>
                                    <li class="block mg-bottom-lv2"><a href="https://www.freepikcompany.com/copyright">Copyrights Infringement Notification</a></li>
                                    <li class="block mg-bottom-lv2"><a href="https://www.freepikcompany.com/digital-services-act">Digital Services Act</a></li>
                                    <li class="block mg-bottom-lv2"><a href="https://support.freepik.com/hc/en-us">Support</a></li>
                                    <li><a href="https://contributor.freepik.com/?utm_source=home-com&utm_medium=cpc&utm_campaign=earn-money-freepikes">Become a contributor</a></li>
                                    <li><a href="https://support.freepik.com/hc/en-us/articles/212799769-FAQs-for-contributors">Contributor support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <nav class="hide-mobile sticky">
                        <ul>
                            <li class="">
                                <a href="https://www.freepikcompany.com/legal">Terms of use</a>
                                <ul>
                                    <li class="submenu">
                                        <a href="#nav-freepik">Freepik</a>
                                        <ul>
                                            <li><a href="#nav-freepik-services">1. Services Offered</a></li>
                                            <li><a href="#nav-freepik-authorized">2. Authorized use</a></li>
                                            <li><a href="#nav-freepik-registration">3. Registration</a></li>
                                            <li><a href="#nav-freepik-content">4. Content</a></li>
                                            <li><a href="#nav-freepik-storage">5. Storage and content offer for collaborators</a></li>
                                            <li><a href="#nav-freepik-responsibility">6. Liability</a></li>
                                            <li><a href="#nav-freepik-property">7. Intellectual property</a></li>
                                            <li><a href="#nav-freepik-agreement">8. License Agreement for Freepik Content</a></li>
                                            <li><a href="#nav-freepik-fonts">9. Fonts License Agreement</a></li>
                                            <li><a href="#nav-freepik-conditions">10. Conditions for the Premium Subscription</a></li>
                                            <li><a href="#nav-freepik-teams">11. Conditions for the Teams Plan</a></li>
                                            <li><a href="#nav-freepik-modification">12. Changes and Closure of the Website</a></li>
                                            <li><a href="#nav-freepik-generalities">13. General and Contact Information</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#nav-freepik-online-editor">Freepik Online Editors</a>
                                        <ul>
                                            <li><a href="#nav-freepik-online-editor-use-service">1. USE OF OUR SERVICE</a></li>
                                            <li><a href="#nav-freepik-online-editor-accounts">2. FREEPIK ACCOUNTS</a></li>
                                            <li><a href="#nav-freepik-online-editor-service-rules">3. SERVICE RULES</a></li>
                                            <li><a href="#nav-freepik-online-editor-use-content-service">4. USE OF CONTENT ON THE SERVICE</a></li>
                                            <li><a href="#nav-freepik-online-editor-user-content">5. USER CONTENT</a></li>
                                            <li><a href="#nav-freepik-online-editor-granting">6. GRANTING OF THE FREEPIK EDITOR DESIGN LICENSE</a></li>
                                            <li><a href="#nav-freepik-online-editor-proprietary-rights">7. OUR PROPRIETARY RIGHTS</a></li>
                                            <li><a href="#nav-freepik-online-editor-third-party">8. THIRD PARTY LINKS AND APPLICATIONS</a></li>
                                            <li><a href="#nav-freepik-online-editor-indemnity">9. INDEMNITY</a></li>
                                            <li><a href="#nav-freepik-online-editor-no-warranty">10. NO WARRANTY</a></li>
                                            <li><a href="#nav-freepik-online-editor-limitation-liability">11. LIMITATION OF LIABILITY</a></li>
                                            <li><a href="#nav-freepik-online-editor-changes-termination">12. CHANGES TO AND TERMINATION OF THE WEBSITE</a></li>
                                            <li><a href="#nav-freepik-online-editor-contact">13. GENERAL AND CONTACT INFORMATION</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#api-services">API Services</a>
                                        <ul>
                                            <li><a href="#api-services-definitions">1. Definitions</a></li>
                                            <li><a href="#api-services-terms">2. The Terms and conditions</a></li>
                                            <li><a href="#api-services-access-to">3. Access to and Permitted Use of the API Services</a></li>
                                            <li><a href="#api-services-registration">4. Registration</a></li>
                                            <li><a href="#api-services-restrictions">5. Restrictions</a></li>
                                            <li><a href="#api-services-clients">6. API Clients and Supervision</a></li>
                                            <li><a href="#api-services-property">7. Intellectual Property</a></li>
                                            <li><a href="#api-services-publicity">8. Publicity</a></li>
                                            <li><a href="#api-services-modification">9. Modification of the API Services</a></li>
                                            <li><a href="#api-services-plans">10. Plans, Billings and Payments</a></li>
                                            <li><a href="#api-services-audit">11. Audit Clause</a></li>
                                            <li><a href="#api-services-termination">12. Term, Termination and Suspension</a></li>
                                            <li><a href="#api-services-no-implied">13. No Implied Licenses</a></li>
                                            <li><a href="#api-services-no-patent">14. No Patent or Content Licenses or Rights</a></li>
                                            <li><a href="#api-services-no-exclusivity">15. No Exclusivity</a></li>
                                            <li><a href="#api-services-confidentiality">16. Confidentiality</a></li>
                                            <li><a href="#api-services-warranties">17. Warranties and Exclusion of Liability</a></li>
                                            <li><a href="#api-services-liability">18. Liability</a></li>
                                            <li><a href="#api-services-general-provisions">19. General Provisions</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#nav-flaticon">Flaticon</a>
                                        <ul>
                                            <li><a href="#nav-flaticon-services">1. Services Offered</a></li>
                                            <li><a href="#nav-flaticon-authorized">2. Authorized use</a></li>
                                            <li><a href="#nav-flaticon-registration">3. Registration</a></li>
                                            <li><a href="#nav-flaticon-content">4. Content</a></li>
                                            <li><a href="#nav-flaticon-storage">5. Storage and content offer for collaborators</a></li>
                                            <li><a href="#nav-flaticon-responsibility">6. Liability</a></li>
                                            <li><a href="#nav-flaticon-property">7. Intellectual property</a></li>
                                            <li><a href="#nav-flaticon-agreement">8. License Agreement for Flaticon Content</a></li>
                                            <li><a href="#nav-flaticon-conditions">9. Conditions for the Subscription</a></li>
                                            <li><a href="#nav-flaticon-modification">10. Changes and Closure of the Website</a></li>
                                            <li><a href="#nav-flaticon-generalities">11. General and Contact Information</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#nav-slidesgo">Slidesgo</a>
                                        <ul>
                                            <li><a href="#nav-slidesgo-services">1. Offered Services</a></li>
                                            <li><a href="#nav-slidesgo-authorized">2. Authorised Use of the Slidesgo Website</a></li>
                                            <li><a href="#nav-slidesgo-registration">3. Registration</a></li>
                                            <li><a href="#nav-slidesgo-content">4. Content</a></li>
                                            <li><a href="#nav-slidesgo-liability">5. Responsibility</a></li>
                                            <li><a href="#nav-slidesgo-intellectual">6. Intellectual Property</a></li>
                                            <li><a href="#nav-slidesgo-license">7. License Agreement for Slidesgo Contents</a></li>
                                            <li><a href="#nav-slidesgo-conditions">8. Conditions for the Subscription</a></li>
                                            <li><a href="#nav-slidesgo-accounts">9. Administrator and Guest User Accounts</a></li>
                                            <li><a href="#nav-slidesgo-changes">10. Changes and Closure of the Slidesgo Website</a></li>
                                            <li><a href="#nav-slidesgo-general">11. General and Contact Information</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#nav-ai-products">AI Products</a></li>
                                    <li class="submenu">
                                        <a href="#nav-disney-eula">Disney EULA</a>
                                        <ul>
                                            <li><a href="#nav-disney-eula-agreement">1. Legal Agreement</a></li>
                                            <li><a href="#nav-disney-eula-grant">2. Grant of Limited Non-Exclusive Licence</a></li>
                                            <li><a href="#nav-disney-eula-restrictions">3. Restrictions</a></li>
                                            <li><a href="#nav-disney-eula-privacy">4. Privacy</a></li>
                                            <li><a href="#nav-disney-eula-termination">5. Termination</a></li>
                                            <li><a href="#nav-disney-eula-indemnity">6. Indemnity</a></li>
                                            <li><a href="#nav-disney-eula-resolution">7. Governing Law and Dispute Resolution</a></li>
                                            <li><a href="#nav-disney-eula-miscellaneous">8. Miscellaneous</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="">
                                <a href="https://www.freepikcompany.com/privacy">Privacy policy</a>
                                <ul>
                                    <li><a href="#priv-controller">1. Data controller</a></li>
                                    <li><a href="#priv-website-use">2. Website Use under Terms and Conditions</a></li>
                                    <li><a href="#priv-lawful-basis">3. Our purposes and lawful basis of data we collect</a></li>
                                    <li><a href="#priv-how-long-keep-data">4. For how long do we keep your data</a></li>
                                    <li><a href="#priv-data-update">5. Data update</a></li>
                                    <li><a href="#priv-disclosure-of-data">6. Disclosure of Data</a></li>
                                    <li><a href="#priv-rights">7. Rights of the User</a></li>
                                    <li><a href="#priv-security">8. Data Security</a></li>
                                    <li><a href="#priv-transfer">9. International Data Transfers</a></li>
                                    <li><a href="#priv-complain">10. Complaint Submission</a></li>
                                </ul>
                            </li>
                            <li class="active">
                                <a href="https://www.freepikcompany.com/cookie">Cookie policy</a>
                                <ul>
                                    <li><a href="#cookie-what">1. What are cookies?</a></li>
                                    <li><a href="#cookie-type">2. Types of cookies and Purpose</a></li>
                                    <li><a href="#cookie-type-own">2.1. First-party cookies</a></li>
                                    <li><a href="#cookie-type-freepik">2.2. Third-party cookies in Freepik</a></li>
                                    <li><a href="#cookie-type-flaticon">2.3. Third-party cookies in Flaticon</a></li>
                                    <li><a href="#cookie-type-slidesgo">2.4. Third-party cookies in Slidesgo</a></li>
                                    <li><a href="#cookie-type-fpcompany">2.5. Third-party cookies in Freepik Company</a></li>
                                    <li><a href="#cookie-type-wepik">2.6. Third-party cookies in Wepik</a></li>
                                    <li><a href="#cookie-type-storyset">2.7. Third-party cookies in Storyset</a></li>
                                    <li><a href="#cookie-update">3. Changes in the cookie policy</a></li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="https://www.freepikcompany.com/copyright">Copyrights Infringement Notification</a>
                                <ul>
                                    <li><a href="#copy-notification">Copyright Notification Guidelines</a></li>
                                    <li><a href="#copy-info">Freepik Copyright Contact Information</a></li>
                                    <li><a href="#copy-abuse">Reporting Abuse</a></li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="https://www.freepikcompany.com/payment-processing-agreement">Payment Processing Agreement</a>
                            </li>
                            <li class="">
                                <a href="https://www.freepikcompany.com/digital-services-act">Digital Services Act</a>
                            </li>
                            <li>
                                <a href="https://support.freepik.com/hc/en-us">Support</a>
                            </li>
                            <li>
                                <a href="https://contributor.freepik.com/?utm_source=home-com&utm_medium=cpc&utm_campaign=earn-money-freepikes">Become a contributor</a>
                            </li>
                            <li>
                                <a href="https://support.freepik.com/hc/en-us/articles/212799769-FAQs-for-contributors">Contributor support</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col__xs--12 col__sm--12 col__md--8">
                    <div class="paragraph-readable">

                        <h1>Cookies policy</h1>
                        <h6>November 2023</h6>
                        <p>FREEPIK COMPANY, S.L.U., hereafter Freepik, is the owner, and thus responsible, of the projects indicated below, including any of their subdomains and sections, hereafter “Website”:</p>

                        <ul class="list">
                            <li><a href="https://www.freepik.com" target="_blank">www.freepik.com</a> and <a href="https://www.freepik.es" target="_blank">www.freepik.es</a></li>
                            <li><a href="https://www.flaticon.com" target="_blank">www.flaticon.com</a> and <a href="https://www.flaticon.es" target="_blank">www.flaticon.es</a></li>
                            <li><a href="https://www.slidesgo.com" target="_blank">www.slidesgo.com</a></li>
                            <li><a href="https://www.freepikcompany.com" target="_blank">www.freepikcompany.com</a></li>
                            <li><a href="https://www.wepik.com" target="_blank">www.wepik.com</a></li>
                            <li><a href="https://storyset.com/" target="_blank">www.storyset.com</a></li>
                        </ul>

                        <p>In this document we provide you with information about cookies, both in a general way and about the ones we use in particular.</p>

                        <div id="cookie-what">
                            <h4 class="font-xl uppercase">I. GENERAL INFORMATION ABOUT COOKIES</h4>

                            <h5 class="font-lg">What are cookies?</h5>
                            <p>"Cookies" are small compressed text files that allow us to save data specifically related to the user’s device while he is visiting our website.</p>
                            <p>Generally, when referring to "cookies" on the Internet, reference is also made to other technologies used for similar purposes: for instance, through the technical configuration of your device, or your IP address when you download complete images or simply a "pixel”, data are being collected. This allows us to recognize you when you visit our website again, to know your approximate location, the connection time, the device from which you access (fixed or mobile), the operating system and browser used, the most visited pages, the number of clicks made, among others.</p>

                            <h5 class="font-lg">How to manage Cookies?</h5>
                            <p>Web browsers usually allow you to disable the use of cookies; limit them to specific web pages or configure the browser to notify you when a cookie is placed in the device. You can also delete them at any time from your computer's hard drive (file: "cookies").</p>
                            <p>In most cases, a website can be accessed even if the use of cookies has been blocked in the browser settings or when they have not been accepted.</p>
                            <p>However, typically, when you block the placement of cookies, you can suffer limitations in the presentation of the website and your user interface.</p>
                            <p>To obtain more detailed information about the cookies installed on your device and how to manage and delete them, please click the link corresponding link in your web browser:</p>
                            <ul class="list">
                                <li><a href="http://windows.microsoft.com/es-es/windows-10/edge-privacy-faq" target="_blank">Edge</a></li>
                                <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank">Google Chrome</a></li>
                                <li><a href="https://support.google.com/chrome/answer/2392971?hl=en" target="_blank">Google Android</a></li>
                                <li><a href="http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies#ie=ie-11" target="_blank">Internet Explorer 11</a></li>
                                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank">Mozilla Firefox</a></li>
                                <li><a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html" target="_blank">Opera</a></li>
                                <li><a href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=es_ES" target="_blank">Safari</a></li>
                                <li><a href="https://support.apple.com/es-es/HT201265" target="_blank">Safari Mobile</a></li>
                            </ul>
                            <p>Additional information is also available at the following link:</p>
                            <ul class="list">
                                <li><a href="http://www.allaboutcookies.org/es/" target="_blank">All about Cookies</a></li>
                            </ul>
                        </div>

                        <div id="cookie-type">
                            <h4 class="font-xl uppercase">II. SPECIFIC INFORMATION ABOUT COOKIES USED ON OUR WEBSITES</h4>

                            <p><b>Freepik only displays advertisements to its free users: if you become a "premium" user we will not show you advertisements.</b>. To show you this advertising, for example, we use cookies.</p>
                            <p><b>Freepik only hires tier-1 service providers (such as OneTrust) and advertising providers (such as IAB vendors, Google).</b></p>
                            <p>Regarding the control and management of cookies and similar technologies, we use One Trust “cookie compliance” technology, based on IAB Europe “Transparency and Consent Framework”.</p>
                            <p>Through our cookie setting panel (powered by One Trust) you can consent or reject, granularly, the use of our cookies and those of third parties, as well as certain data processing carried out by third parties based on their legitimate interests. By selecting "Reject all" you will also block said data processing.</p>
                            <p>Cookies (and similar technologies) help us better understand what interests and helps our users most, and to improve our services.</p>
                            <p>You can find extended information and clarification about each category of cookies used on our websites through our cookie settings panel, to which you access by clicking on “Cookie setting”, located at the bottom of all our webs, in section “Legal”.</p>
                            <p>Please find below the description of some of them:</p>

                            <h5 class="font-lg">Session and persistent cookies</h5>
                            <p>We use the so-called “session cookies”, which are stored exclusively during the time of your visit to any of our websites.</p>
                            <p>In addition, we and our partners use "persistent cookies" to withhold information about those users who repeatedly access any of our websites.</p>

                            <h5 class="font-lg">Analytical, advertising cookies ...</h5>
                            <p>We use personalized advertising cookies (which we will talk about below) and web analytics cookies, to know the number of visitors to the different pages and sections of our website, their interactions and duration of their visits, place of entry and exit, to try to improve our content and its capacity to generate interaction.</p>
                            <p>We use Google Analytics, Cloudfare and Hotjar cookies to measure the results of visits and customer acquisition, and to analyze traffic and, for example, detect potentially malicious “bots”.</p>

                            <h5 class="font-lg">Cookies can also be “first-party” or “third-party” cookies</h5>
                            <p>"First-party" cookies are those that are sent to the user's terminal equipment from a device or domain managed by Freepik as editor of the website from which the services requested by the user are provided.</p>
                            <p>"Third-party" cookies are those that are sent to the user's terminal equipment from a device or domain that is not managed by Freepik, but by another organization, which processes the data obtained through such cookies.</p>
                            <p>You can find out complete information about the data processing carried out by these third parties (lawful bases, international data transfers carried out, retention periods, exercise of rights of access, erasure, restriction of processing, portability and rectification, and how exercise your rights, ... in their respective policies linked in this text and in the cookie tables).</p>
                            <p>You will find detailed information about all cookies used on each of our websites in the cookie table at the end of this text.</p>

                            <h6>Information on the processing of data shared with our advertising partners</h6>

                            <h5 class="font-lg">Preliminary information</h5>
                            <p>In the field of online advertising, cookies and other similar technologies allow website visitors to be recognized or singled out (but not identified in the traditional sense of the word, that is, by their names, surnames, ID number or email address) and classified into groups or "audiences" based on their interests.</p>
                            <p>Knowing your interests and personalizing the advertising displayed to you in accordance with them is possible thanks to the use of these cookies and similar technologies.</p>

                            <h5 class="font-lg">Third-parties advertising</h5>
                            <p>We allocate the exploitation of our advertising spaces to companies that market them to third parties who then insert their advertisements on our website, depending on your habits and interests.</p>
                            <p>Consequently, Freepik offers its advertising spaces based on real-time biddings through two channels or platforms:</p>
                            <ul class="list">
                                <li>Google AdManager and</li>
                                <li>Various platforms that also market our advertising spaces among their own partners through header bidding techniques (Rubicon Project, Index Exchange, DistrictM, Amazon APS, OpenX, etc.).</li>
                            </ul>
                            <p>Through these real-time biddings, companies interested in our advertising spaces, bid to display their ads on our website, customizing their advertising based on the user.</p>
                            <p>Freepik logically benefits from the advertising displayed, enables the collection of user information through cookies and captures their consent to this extent through its websites. But here is where our intervention and responsibility ends.</p>
                            <p>Freepik cannot and indeed does not control the advertisements displayed, nor does it participate in the data processing operations carried out on these platforms to select the user receiving the ads and the advertiser placing such ads.</p>
                            <p>For these purposes, and to guarantee the quality of both the advertising and the advertisers, Freepik only markets its advertisement space with the leading platforms worldwide (IAB those others mentioned in the cookies policy), as previously stated.</p>
                            <p>You can learn more about <a href="https://admanager.google.com/intl/en_uk/home/" target="_blank">Google AdManager</a> and the Header Bidding service providers, in their respective links as provided below.</p>
                            <p>You can browse the full list of IAB Europe partners (advertisers) <a href="https://iabeurope.eu/vendor-list-tcf-v2-0/" target="_blank">here</a>.</p>

                            <h5 class="font-lg">You can prevent targeted advertising from being specifically shown to you on Freepik websites in the following ways:</h5>
                            <p>Through our cookie setting panel: by granularly accepting or rejecting the different categories of cookies used, you can authorize or not the processing of your data for the purposes of profiling you, the placing of personalized advertising, and the rest of the processing operations described hereby.</p>
                            <p>You can also disable cookies in your browser by installing a plug-in as Ghostery or Privacy Badger or through a rejection system ("opt-out") provided by some third parties that install cookies on our website, as <a href="https://adssettings.google.com/authenticated?hl=es&pli=1" target="_blank">Google (behavioral advertising) (requires Google log-in)</a>.</p>

                            <h5 class="font-lg">Shutterstock and Adobe’s advertising</h5>
                            <p><b>Freepik, in turn, offers third-party advertising (Adobe and Shutterstock), and tracks its users through</b> <a href="https://marketingplatform.google.com/intl/en_uk/about/analytics/" target="_blank">Google Analytics</a> when they click on its advertising banners, to check the performance in terms of conversion rate on that advertiser's website.</p>

                            <h5 class="font-lg">Freepik advertising</h5>
                            <p><b>Freepik contracts personalized advertising services of</b> Pinterest, Google Ads and Twitter to attract potential new users to our websites who have been profiled by such platforms according to their interests. Freepik selects, among these profiles, those who we understand may be interested in our products (for example, those users who had visited our websites, or users within a determined age or geographical location).</p>

                            <p>These platforms integrate "cookies" and other technologies on our website. These technologies allow them, after you have provided consent, to track, for example, whether their users have only accessed Freepik’s websites to just quit, they have downloaded any products or have become Premium users.</p>
                            <p>Then, they provide us with this information in an aggregated and anonymous way to bill us accordingly, allowing us to better understand the price and profitability of our advertising campaigns on each platform.</p>
                            <p>Furthermore, <b>we may show advertisements to visitors who have left our website, for example without registering, to try to convince them to do so (retargeting techniques).</b></p>
                            <p>Regarding these data processing operations, Freepik is a "joint controller" together with each of those platforms, in relation to (i) the selection of the interests of its users to whom we request our advertising is displayed; (ii) their monitoring and observation on our websites; and (iii) the provision of statistical and aggregated data to Freepik on the result of these campaigns, that is, the conversion rate , if applicable, into our clients.</p>
                            <p>All these processing operations are carried out without Freepik being able to identify you: we only identify you when you register as a free or premium user.</p>
                            <p>Otherwise, Freepik does not participate in and therefore is not a controller of the processing operations that advertisers and platforms carry out for their own purposes, either prior or subsequent to those other processing operations carried out together with Freepik.</p>

                            <h5 class="font-lg">International data transfers</h5>
                            <p>Regarding Freepik advertising, we participate together with our partners in the international transfer of personal data to countries with a potentially lower level of protection than that imposed by the General Data Protection Regulation. These international transfers are therefore based on standard contractual clauses.</p>
                            <p>In relation to third-party advertising, Freepik's controllership is limited to the duties of providing information and obtaining our website visitors’ consent for the purpose of using their cookies to show personalized advertising.</p>

                            <h5 class="font-lg">Additional Information</h5>
                            <p>Below, and in the corresponding cookie tables, Freepik provides you with the links to the information offered by each of these companies and platforms regarding the joint controllership situations already described and their own processing operations (lawful bases, international data transfers carried out, retention periods or the exercise of a right of access, erasure, restriction of processing, portability and rectification).</p>
                            <p>You can revoke your consent to the use of cookies at any time (but without retroactive effect) via our cookie banner (or by clicking on the "cookie settings" option at the bottom of our website).</p>
                            <p>We remind you again that you can exercise your rights of access, restrictions of processing and / or erasure in relation to the processing of your personal data carried out jointly with the aforementioned platforms:</p>
                            <ul class="list">
                                <li>Through our email <a href="mailto:rpd@freepik.com" target="_blank">rpd@freepik.com</a>, if you are a registered user of Freepik.</li>
                                <li>And otherwise, before the platforms in which you have a user account (because we will not be able to identify you).</li>
                            </ul>

                            <p>
                                <b>Pinterest</b>:
                            </p>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <tbody>
                                        <tr>
                                            <th>Privacy Policy</th>
                                            <td><a href="https://policy.pinterest.com/en/privacy-policy" target="_blank">https://policy.pinterest.com/en/privacy-policy</a></td>
                                        </tr>
                                        <tr>
                                            <th>Cookies Policy</th>
                                            <td><a href="https://policy.pinterest.com/en/cookies" target="_blank">https://policy.pinterest.com/en/cookies</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <b>Google</b>:
                            </p>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <tbody>
                                        <tr>
                                            <th>Privacy Policy</th>
                                            <td><a href="https://policies.google.com/privacy?hl=en-GB" target="_blank">https://policies.google.com/privacy?hl=en-GB</a></td>
                                        </tr>
                                        <tr>
                                            <th>Cookies Policy</th>
                                            <td><a href="https://policies.google.com/technologies/cookies?hl=en-GB" target="_blank">https://policies.google.com/technologies/cookies?hl=en-GB</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <b>Twitter</b>:
                            </p>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <tbody>
                                        <tr>
                                            <th>Privacy Policy</th>
                                            <td><a href="https://twitter.com/en/privacy" target="_blank">https://twitter.com/en/privacy</a></td>
                                        </tr>
                                        <tr>
                                            <th>Cookies Policy</th>
                                            <td><a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank">https://help.twitter.com/en/rules-and-policies/twitter-cookies</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6>Freepik Company’s cookie table</h6>
                            <p>In the table below you will find detailed information about all cookies used on Freepik's web pages.</p>

                            <h5 id="cookie-type-own" class="font-lg">First-party cookies on the websites owned by Freepik Company</h5>
                            <div class="table overflow_table">
                                <div class="table font-sm">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>PURPOSE</td>
                                                <td>EXPIRY DATE</td>
                                                <td>DOMAIN</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Language detection. Helps us to collect information about the language preferences of the User to provide visitors with information in their preferred language</td>
                                                <td>Session</td>
                                                <td>Freepik, Flaticon, Contributor</td>
                                            </tr>
                                            <tr>
                                                <td>User login. Used to manage and store information about the user login</td>
                                                <td>Session</td>
                                                <td>Freepik, Flaticon, slidesgo, Contributor</td>
                                            </tr>
                                            <tr>
                                                <td>Stores URL to redirect the user after finishing the registration or login process</td>
                                                <td>10 minutes</td>
                                                <td>Freepik (profile), slidesgo</td>
                                            </tr>
                                            <tr>
                                                <td>Remembers user’s personal ID each time they log on. This cookie is only created if the user agrees to be remembered</td>
                                                <td>30 days</td>
                                                <td>Freepik (profile)</td>
                                            </tr>
                                            <tr>
                                                <td>Avoids CSRF attacks in forms</td>
                                                <td>2 hours</td>
                                                <td>Freepik (profile)</td>
                                            </tr>
                                            <tr>
                                                <td>Stores information on marketing campaigns in which the User has participated</td>
                                                <td>30 days</td>
                                                <td>Freepik (profile), Flaticon</td>
                                            </tr>
                                            <tr>
                                                <td>Used in the payment process to redirect the user to the payment platform in case they are logged off</td>
                                                <td>7 days</td>
                                                <td>Freepik (profile)</td>
                                            </tr>
                                            <tr>
                                                <td>Test about payment data. Selection of payment, subscription to Premium</td>
                                                <td>3 days</td>
                                                <td>Freepik</td>
                                            </tr>
                                            <tr>
                                                <td>Test about search activity. Analysis of searches run by the user</td>
                                                <td>30 days</td>
                                                <td>Freepik</td>
                                            </tr>
                                            <tr>
                                                <td>Checks if internal promotions are shown to the user</td>
                                                <td>2 days</td>
                                                <td>Freepik</td>
                                            </tr>
                                            <tr>
                                                <td>Checks if cookies compliance messages are visible on the Website</td>
                                                <td>Session</td>
                                                <td>Freepik, Flaticon</td>
                                            </tr>
                                            <tr>
                                                <td>Collects information about visits</td>
                                                <td>2 years</td>
                                                <td>Freepik, Flaticon</td>
                                            </tr>
                                            <tr>
                                                <td>Develops statistics about Premium services advertisements</td>
                                                <td>1 hour</td>
                                                <td>Freepik</td>
                                            </tr>
                                            <tr>
                                                <td>Measures data collected from searches</td>
                                                <td>30 days</td>
                                                <td>Freepik</td>
                                            </tr>
                                            <tr>
                                                <td>They allow the operation and navigation through the website, as well as the use of the different options or services that exist in it, including those that the editor uses to allow the management and operation of the website and enable its functions and services, such as, for example, control traffic and data communication, identify the session, access restricted access parts, remember the elements that make up an order, carry out the purchase process of an order, manage payment, control fraud linked to the security of the service, make the request for registration or participation in an event, use security elements while browsing, enable dynamic content (for example, animation of loading a text or image) or share content through social networks</td>
                                                <td>Session</td>
                                                <td>Flaticon</td>
                                            </tr>
                                            <tr>
                                                <td>They store information to allow the users to access the service with certain characteristics that can differentiate their experience from that of other users, such as, for example, the language, the type of user (anonymous, registered or premium), the appearance or content of the service, depending on the type of browser through which the users accesses the service or the region from which they access the service, etc.</td>
                                                <td>Session</td>
                                                <td>Flaticon</td>
                                            </tr>
                                            <tr>
                                                <td>Cookie session login</td>
                                                <td>120 minutes</td>
                                                <td>Wepik</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h5 id="cookie-type-freepik" class="font-lg">Third-party cookies in <a href="https://www.freepik.com/" target="_blank">www.freepik.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>COOKIE</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td><b>Google Analytics</b> (Analysis)</td>
                                            <td></td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="13">
                                                <b>Hotjar</b> (Measuring and Analysis)
                                            </td>
                                            <td>_hjClosedSurveyInvites</td>
                                            <td>Hotjar cookie that is set once a visitor interacts with an External Link Survey invitation modal. It is used to ensure that the same invite does not reappear if it has already been shown.</td>
                                            <td rowspan="13"><a href="https://help.hotjar.com/hc/en-us/articles/115011789248" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>_hjDonePolls</td>
                                            <td>Hotjar cookie that is set once a visitor completes a survey using the On-site Survey widget. It is used to ensure that the same survey does not reappear if it has already been filled in.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjMinimizedPolls</td>
                                            <td>Hotjar cookie that is set once a visitor minimizes an On-site Survey widget. It is used to ensure that the widget stays minimized when the visitor navigates through your site.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjShownFeedbackMessage</td>
                                            <td>Hotjar cookie that is set when a visitor minimizes or completes Incoming Feedback. This is done so that the Incoming Feedback will load as minimized immediately if the visitor navigates to another page where it is set to show.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjid</td>
                                            <td>Hotjar cookie that is set when the customer first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjRecordingLastActivity</td>
                                            <td>This should be found in Session storage (as opposed to cookies). This gets updated when a visitor recording starts and when data is sent through the WebSocket (the visitor performs an action that Hotjar records).</td>
                                        </tr>
                                        <tr>
                                            <td>_hjTLDTest</td>
                                            <td>When the Hotjar script executes we try to determine the most generic cookie path we should use, instead of the page hostname. This is done so that cookies can be shared across subdomains (where applicable). To determine this, we try to store the _hjTLDTest cookie for different URL substring alternatives until it fails. After this check, the cookie is removed.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjUserAttributesHash</td>
                                            <td>User Attributes sent through the Hotjar Identify API are cached for the duration of the session in order to know when an attribute has changed and needs to be updated.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjCachedUserAttributes</td>
                                            <td>This cookie stores User Attributes which are sent through the Hotjar Identify API, whenever the user is not in the sample. These attributes will only be saved if the user interacts with a Hotjar Feedback tool.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjLocalStorageTest</td>
                                            <td>This cookie is used to check if the Hotjar Tracking Script can use local storage. If it can, a value of 1 is set in this cookie. The data stored in_hjLocalStorageTest has no expiration time, but it is deleted almost immediately after it is created.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjIncludedInPageviewSample</td>
                                            <td>This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site's pageview limit.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjIncludedInSessionSample</td>
                                            <td>This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site's daily session limit.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjAbsoluteSessionInProgress</td>
                                            <td>This cookie is used to detect the first pageview session of a user. This is a True/False flag set by the cookie.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="5">
                                                <b>Salesforce</b> (Performance)
                                            </td>
                                            <td>sfdc-stream</td>
                                            <td>Used to properly route server requests within Salesforce infrastructure for sticky sessions.</td>
                                            <td rowspan="5">
                                                <a href="https://help.salesforce.com/s/articleView?id=sf.networks_cookies.htm&type=5" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>oid</td>
                                            <td>Stores the last logged in org for redirecting requests. Used for logging whether the cookie is present in site and community guest-user requests.</td>
                                        </tr>
                                        <tr>
                                            <td>CookieConsentPolicy</td>
                                            <td>Used to apply end-user cookie consent preferences set by our client-side utility.</td>
                                        </tr>
                                        <tr>
                                            <td>pctrk</td>
                                            <td>Used to track unique page visitors in Experiences.</td>
                                        </tr>
                                        <tr>
                                            <td>renderCtx</td>
                                            <td>Used to store site parameters in the session for reuse across requests by a single client for functionality and performance reasons.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="14">
                                                <b>Google</b> (Advertising / Analysis)
                                            </td>
                                            <td>NID</td>
                                            <td>Used by Google to personalise the advertisements shown in its spaces.</td>
                                            <td rowspan="14">
                                                <a href="https://policies.google.com/technologies/cookies?hl=en#types-of-cookies" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_ga</td>
                                            <td>Used by Google Analytics to distinguish users.</td>
                                        </tr>
                                        <tr>
                                            <td>_gid</td>
                                            <td>Used by Google Analytics to distinguish users.</td>
                                        </tr>
                                        <tr>
                                            <td>1P_JAR</td>
                                            <td>Google uses this cookie to personalise ads that may be of interest to you.</td>
                                        </tr>
                                        <tr>
                                            <td>hsid</td>
                                            <td>Security cookie to authenticate users, prevent fraudulent use of login credentials and protect user data from unauthorised third parties.</td>
                                        </tr>
                                        <tr>
                                            <td>sidcc</td>
                                            <td>Security cookie to authenticate users, prevent fraudulent use of login credentials and protect user data from unauthorised third parties.</td>
                                        </tr>
                                        <tr>
                                            <td>sidcc</td>
                                            <td>Used by Google to obtain anonymous browsing information</td>
                                        </tr>
                                        <tr>
                                            <td>sapisid</td>
                                            <td>Created when you sign in to a Google Account in order to stay connected to that same Google Account when you use its services again.</td>
                                        </tr>
                                        <tr>
                                            <td>apisid</td>
                                            <td>Created when you sign in to a Google Account in order to stay signed in to that same Google Account when you use its services again.</td>
                                        </tr>
                                        <tr>
                                            <td>ssid</td>
                                            <td>Created when you sign in to a Google Account in order to stay signed in to that same Google Account when you use its services again.</td>
                                        </tr>
                                        <tr>
                                            <td>dsid</td>
                                            <td>Used by Google to show more relevant ads.</td>
                                        </tr>
                                        <tr>
                                            <td>ide</td>
                                            <td>Used by Google to show more relevant ads.</td>
                                        </tr>
                                        <tr>
                                            <td>anid</td>
                                            <td>Used by Google to personalise the ads shown in its spaces.</td>
                                        </tr>
                                        <tr>
                                            <td>refmodal</td>
                                            <td>Own cookie. Used by Google Analytics to collect the value of the referrer in the modal.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>Amazon APS</b> (Advertising / Analysis)
                                            </td>
                                            <td>ad-id</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on clicks on ads on a different website.</td>
                                            <td rowspan="2">
                                                <a href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=201909010" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ad-privacy</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on clicks on ads on a different website.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Next Millenium</b>
                                            </td>
                                            <td>NMUID</td>
                                            <td>Used to uniquely identify users and optimize the relevance of ads presented to them.</td>
                                            <td><a href="https://nextmillennium.io/privacy-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adagio</b> (Advertising)
                                            </td>
                                            <td>uids</td>
                                            <td>Stores the Adagio user ID and the user ID of Adagio bidders.</td>
                                            <td><a href="https://adagio.io/privacy" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="13">
                                                <b>Adform</b> (Advertising)
                                            </td>
                                            <td>uid</td>
                                            <td>Unique identifier</td>
                                            <td rowspan="13"><a href="https://site.adform.com/privacy-center/adform-cookies/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>c</td>
                                            <td>Identifies if user’s browser accepts cookies.</td>
                                        </tr>
                                        <tr>
                                            <td>CM</td>
                                            <td>Identifies if there is a need to re-check partner‘s cookie matching existence (set by AdServing)</td>
                                        </tr>
                                        <tr>
                                            <td>TPC</td>
                                            <td>Identifies if user’s browser accepts third party cookies</td>
                                        </tr>
                                        <tr>
                                            <td>GCM</td>
                                            <td>Identifies if there is a need to re-check partner‘s cookie matching existence</td>
                                        </tr>
                                        <tr>
                                            <td>CM14</td>
                                            <td>Identifies if there is a need to re-check partner‘s cookie matching existence (set by Cookie Matching)</td>
                                        </tr>
                                        <tr>
                                            <td>token</td>
                                            <td>Security token for opt out functionality</td>
                                        </tr>
                                        <tr>
                                            <td>otsid</td>
                                            <td>Advertiser specific opt-out</td>
                                        </tr>
                                        <tr>
                                            <td>SR&lt;RotatorID&gt;</td>
                                            <td>Sequential rotator information – contains total impressions, daily impressions, total clicks, daily clicks, and last impression data</td>
                                        </tr>
                                        <tr>
                                            <td>CT&lt;TrackingSetupID&gt;</td>
                                            <td>Identifies last click membership for 3rd party pixels on advertiser’s pages</td>
                                        </tr>
                                        <tr>
                                            <td>EBFCD&lt;BannerID&gt;</td>
                                            <td>Identifies daily frequency capping for expanding banner</td>
                                        </tr>
                                        <tr>
                                            <td>EBFC&lt;BannerID&gt;</td>
                                            <td>Identifies total frequency capping for expanding banner</td>
                                        </tr>
                                        <tr>
                                            <td>CFFC&lt;TagID&gt;</td>
                                            <td>Compound banner frequency capping</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="11">
                                                <b>Improve Digital</b> (Advertising)
                                            </td>
                                            <td>tuuid</td>
                                            <td>Sets the Improve Digital user ID</td>
                                            <td rowspan="11">
                                                <a href="https://www.improvedigital.com/platform-privacy-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>tuuid_lu</td>
                                            <td>Timestamp of the last UUID sync</td>
                                        </tr>
                                        <tr>
                                            <td>pct</td>
                                            <td>Post click conversion tracking. Tracks clicks on creatives to measure campaign performance</td>
                                        </tr>
                                        <tr>
                                            <td>pvt</td>
                                            <td>Tracks views on creatives to measure campaign performance</td>
                                        </tr>
                                        <tr>
                                            <td>ih</td>
                                            <td>Imp history, frequency cap time limit. Frequency capping to limit number of times users see campaigns with frequency capping</td>
                                        </tr>
                                        <tr>
                                            <td>fh</td>
                                            <td>Average impressions per day per user, made for this publisher / line item pair</td>
                                        </tr>
                                        <tr>
                                            <td>pxl</td>
                                            <td>Pixel which enables a segment to be built, can be used for future re-targeting campaigns</td>
                                        </tr>
                                        <tr>
                                            <td>um</td>
                                            <td>To enable user matching in the bidding process. Stores a map of tuuid with DSP user IDs</td>
                                        </tr>
                                        <tr>
                                            <td>umeh</td>
                                            <td>To collect errors in the user matching process</td>
                                        </tr>
                                        <tr>
                                            <td>sh</td>
                                            <td>Frequency capping to limit number of times users see specific campaigns in one browser session</td>
                                        </tr>
                                        <tr>
                                            <td>ad</td>
                                            <td>Impression context for further jump request</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="9">
                                                <b>Index Exchange</b> (Advertising)
                                            </td>
                                            <td>CMPS</td>
                                            <td>Identifies the profile server for load-balancing and quick responses to your webpage page.</td>
                                            <td rowspan="9">
                                                <a href="https://www.indexexchange.com/privacy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CMTS</td>
                                            <td>Identifies the back-up server for load-balancing and quick responses.</td>
                                        </tr>
                                        <tr>
                                            <td>CMGO</td>
                                            <td>Identifies the back-up server for load-balancing and quick responses.</td>
                                        </tr>
                                        <tr>
                                            <td>CMTEST</td>
                                            <td>Confirms if we can install cookies.</td>
                                        </tr>
                                        <tr>
                                            <td>CMID</td>
                                            <td>Unique cookie identifier which links your browser to an internal Index Exchange user file.</td>
                                        </tr>
                                        <tr>
                                            <td>CMPRO</td>
                                            <td>Identifies the profile server for load-balancing and quick responses to your webpage page.</td>
                                        </tr>
                                        <tr>
                                            <td>CMRUM3</td>
                                            <td>Contains a mapping table that matches user IDs with those of Buyers.</td>
                                        </tr>
                                        <tr>
                                            <td>CMDD</td>
                                            <td>Measures how many unique pages engaged with on a web property.</td>
                                        </tr>
                                        <tr>
                                            <td>CMO</td>
                                            <td>Provides a signal to us if you have opted-out of using any online behavioral advertising opt-out tools (such as the NAI opt-out above).</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="15">
                                                <b>Magnite / Rubicon</b> (Advertising / Analysis)
                                            </td>
                                            <td>trp_optout</td>
                                            <td>Opt-out preferences: cookie indicating that a user has opted out of behavioural targeting marketing.</td>
                                            <td rowspan="15">
                                                <a href="https://rubiconproject.com/rubicon-project-advertising-technology-privacy-policy/platform-cookie-statement/?lang=es" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>FPTrust</td>
                                            <td>Registration preferences: these cookies support the opt-out process through the Network Advertising Initiative (NAI).</td>
                                        </tr>
                                        <tr>
                                            <td>Khaos</td>
                                            <td>Platform operations: internal user identifier used for analytics.</td>
                                        </tr>
                                        <tr>
                                            <td>rsid</td>
                                            <td>Platform operations: session cookie containing information about a device, including region (derived from IP address, not geolocation data), operating system, browser, etc., used during the ad inventory sales process.</td>
                                        </tr>
                                        <tr>
                                            <td>rpx, rpx_*</td>
                                            <td>Platform operations: contains the expiry dates of the information in the rpb cookie.</td>
                                        </tr>
                                        <tr>
                                            <td>fcap</td>
                                            <td>Platform operations: number of times we have shown an ad per user.</td>
                                        </tr>
                                        <tr>
                                            <td>put_*</td>
                                            <td>Platform operations: bidder identifiers placed at the request of a bidder, to synchronise a bidder's independent information about an end user with Rubicon Project, to allow the bidder (not Rubicon Project) to bid on ads through the Rubicon Project ad exchange based on behavioural targeting. information known only to the bidder (i.e., the user identifier will be transmitted in a bid request to the bidder that caused this cookie to be placed).</td>
                                        </tr>
                                        <tr>
                                            <td>pux</td>
                                            <td>Platform operations: dates on which put_ * and sput cookie information expires and needs to be updated.</td>
                                        </tr>
                                        <tr>
                                            <td>rpb</td>
                                            <td>Analytics: audience segments owned by publishers and partners used for private marketplaces and planning and forecasting based on audience in orders</td>
                                        </tr>
                                        <tr>
                                            <td>sput, sput_*</td>
                                            <td>Analytics: contains multiple bidder identifiers (i.e. data that would be stored in multiple put_ * cookies) in a smaller number of cookies</td>
                                        </tr>
                                        <tr>
                                            <td>ses*</td>
                                            <td>Analytics: indicates the number of times Rubicon Project has delivered an ad to a user for this particular unit of inventory</td>
                                        </tr>
                                        <tr>
                                            <td>vis*</td>
                                            <td>Analytics: indicates the number of times a user action has precipitated an ad request for this particular unit of inventory.</td>
                                        </tr>
                                        <tr>
                                            <td>cd</td>
                                            <td>Analytics: Indicates whether cookies are disabled for the device.</td>
                                        </tr>
                                        <tr>
                                            <td>cimg*</td>
                                            <td>Analytics: contains information about ads served (timestamp, site, internal identifiers of publisher, buyer, advertiser and ad shown)</td>
                                        </tr>
                                        <tr>
                                            <td>audit</td>
                                            <td>Analytics: used to record cookie consent data</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>OpenX</b> (Advertising / Analysis)
                                            </td>
                                            <td>i</td>
                                            <td>Logs anonymised user data, such as IP address, geographic location, websites visited and which ads the user has clicked on, in order to optimise the display of ads based on user movement across websites that use the same ad network.</td>
                                            <td rowspan="2"><a href="https://www.openx.com/legal/privacy-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>pd</td>
                                            <td>It collects information about visitor behaviour across multiple websites. This information is used on the website to optimise the relevance of advertising.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="33">
                                                <b>Pubmatic</b> (Advertising)
                                            </td>
                                            <td>DPSync2</td>
                                            <td>These cookies maintain a list of our partner IDs, which can be used to read and place cookies in a web browser that has been synced with PubMatic IDs. This allows us to identify partners with whom we have already synced our cookies and to ensure that we do not unnecessarily re-sync cookies within a certain period of time.</td>
                                            <td rowspan="33"><a href="https://pubmatic.com/legal/platform-cookie-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>KRTBCOOKIE_xxxx</td>
                                            <td>These cookies maintain a list of our partner IDs, which can be used to read and place cookies in a web browser, which has been synchronised with PubMatic IDs. This allows us to identify partners with whom we have already synced our cookies and to ensure that we do not unnecessarily re-sync cookies over a period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>SPugT</td>
                                            <td>This cookie is used to track when the server cookie store was last updated for the browser, and is used in conjunction with the PugT cookie, described below.</td>
                                        </tr>
                                        <tr>
                                            <td>ipc</td>
                                            <td>This cookie is a short-lived cookie that stores information necessary to coordinate the timing of cookies.</td>
                                        </tr>
                                        <tr>
                                            <td>PMFREQ_ON</td>
                                            <td>This cookie ensures the correct functioning of the camfreq and pubfreq cookies, described above, in situations where one cookie may override the other.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBMDCID</td>
                                            <td>This cookie stores an ID for the applicable PubMatic data centre that is used to display an advertisement in the user's browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KTPCACOOKIE</td>
                                            <td>We use this cookie to check whether third party cookies are enabled on the user's browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KADUSERCOOKIE</td>
                                            <td>We use this cookie to uniquely identify each browser or device from which an individual user visits our partners' websites.</td>
                                        </tr>
                                        <tr>
                                            <td>pi</td>
                                            <td>This cookie allows us to determine which set of pixels should be executed in the browser.</td>
                                        </tr>
                                        <tr>
                                            <td>PugT</td>
                                            <td>This cookie tracks when cookies were updated in the browser, in order to limit the number of calls to the server-side cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>KCCH</td>
                                            <td>This cookie ensures that a PubMatic user ID is already set and that PubMatic code is executed correctly.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBRETARGET</td>
                                            <td>We use this cookie to indicate whether a user can be considered for various retargeting advertising campaigns running on the Platform. For example, we may use it to determine whether to show you an ad related to a product or service you have previously viewed on an advertiser's website.</td>
                                        </tr>
                                        <tr>
                                            <td>COKENBLD</td>
                                            <td>This cookie sets a flag of "true" if cookies are enabled in the user's browser.</td>
                                        </tr>
                                        <tr>
                                            <td>USCC</td>
                                            <td>This cookie allows PubMatic to correctly synchronise user IDs in situations where multiple advertisements may appear on the same web page.</td>
                                        </tr>
                                        <tr>
                                            <td>DPPIX_ON and SYNCUPPIX_ON</td>
                                            <td>This cookie enables PubMatic to correctly synchronise cookie IDs with our partners, ensuring that our partners do not override each other during the synchronisation process.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBUIDSYNCUPFQ</td>
                                            <td>This cookie indicates the last time we synchronised the IDs with our partner.
                                        <tr>
                                            <td>camfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each campaign and indicates the number of times (e.g. frequency) that a particular ad may have been shown on the relevant publisher's site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each ad network and indicates the number of times (e.g. frequency) that a particular ad may have been shown on the relevant publisher's site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubtime_&lt;SITEID&gt;</td>
                                            <td>This cookie stores the period of time after which ad frequency counters are reset.</td>
                                        </tr>
                                        <tr>
                                            <td>DPFQ</td>
                                            <td>This cookie stores information about the number of times a partner's pixel is loaded by a user's browser. This allows us to limit the number of times a pixel is used to record a user's visit to a website within a specific time period.</td>
                                        </tr>
                                        <tr>
                                            <td>repi</td>
                                            <td>This cookie is a short-lived cookie that is used to determine whether repixelation is in progress.</td>
                                        </tr>
                                        <tr>
                                            <td>pp</td>
                                            <td>This cookie tracks the last publisher website you visited that contained an ad served by PubMatic.</td>
                                        </tr>
                                        <tr>
                                            <td>FPtrust</td>
                                            <td>This cookie is a session cookie used to support the opt-out process through the Network Advertising Initiative.</td>
                                        </tr>
                                        <tr>
                                            <td>_curtime</td>
                                            <td>This cookie stores the current timestamp.</td>
                                        </tr>
                                        <tr>
                                            <td>PMDTSHR</td>
                                            <td>This cookie is set for the Komli ad server and is used for default impression when no other data is available.</td>
                                        </tr>
                                        <tr>
                                            <td>dV</td>
                                            <td>This cookie is used to store user preferences and other information.</td>
                                        </tr>
                                        <tr>
                                            <td>UND</td>
                                            <td>This cookie stores the user's network by default.</td>
                                        </tr>
                                        <tr>
                                            <td>SSCS</td>
                                            <td>This cookie calls a cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>chk and chkSecSet</td>
                                            <td>This cookie is set on Google Chrome browsers that have a version lower than 67 or on non-Chrome browsers, and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>chkChromeAb67 and chkChromeAb67Sec</td>
                                            <td>This cookie is set in Google Chrome browsers that have a version higher than 67 and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>PM-UL-Sync</td>
                                            <td>This cookie is used to run some custom UserSync integrations, such as DigiTrust.</td>
                                        </tr>
                                        <tr>
                                            <td>SyncRTB3</td>
                                            <td>These cookies maintain a list of our partner IDs, which can be used to read and place cookies in a web browser, which have been synchronised with PubMatic IDs. This allows us to identify partners with whom we have already synced our cookies and to ensure that we do not unnecessarily re-sync cookies within a certain period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>DPSync3</td>
                                            <td>These cookies maintain a list of our partner IDs, which can be used to read and place cookies in a web browser, which have been synchronised with PubMatic IDs. This allows us to identify partners with whom we have already synchronised our cookies and to ensure that we do not unnecessarily re-synchronise cookies within a certain period of time.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sharethrough</b> (Advertising)
                                            </td>
                                            <td>stx_user_id</td>
                                            <td>This cookie is used for analytics, multivariate testing and site optimisation.</td>
                                            <td><a href="https://www.sharethrough.com/privacy-center/consumer-privacy-notice" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="16">
                                                <b>Smartadserver</b> (Advertising)
                                            </td>
                                            <td>vs</td>
                                            <td>Timestam of the last time an end-user visited a website</td>
                                            <td rowspan="16"><a href="https://smartadserver.com/end-user-privacy-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>sasd2</td>
                                            <td>Timestamp, longuitude, latitude, connection type</td>
                                        </tr>
                                        <tr>
                                            <td>sasd</td>
                                            <td>ISP ID, postal code, phone prefix, country, region, city, DMA (designated marketing area), zone ID</td>
                                        </tr>
                                        <tr>
                                            <td>pid</td>
                                            <td>Unique ID associated with an end-user (according to a domain and a browser)</td>
                                        </tr>
                                        <tr>
                                            <td>TestIfCookie</td>
                                            <td>Technical data to test if sessions cookies are accepted</td>
                                        </tr>
                                        <tr>
                                            <td>csync</td>
                                            <td>Smart ID and DSP ID associated with an end-user</td>
                                        </tr>
                                        <tr>
                                            <td>TestIfCookieP</td>
                                            <td>Technical data to test if persistent cookies are accepted</td>
                                        </tr>
                                        <tr>
                                            <td>pbw</td>
                                            <td>Browser ID, OS ID and screen size (cache)</td>
                                        </tr>
                                        <tr>
                                            <td>pdomid</td>
                                            <td>Server SQL ID associated with an end-user</td>
                                        </tr>
                                        <tr>
                                            <td>cnfq</td>
                                            <td>Technical data used to trigger the injection of monitoring scripts from a CNAME</td>
                                        </tr>
                                        <tr>
                                            <td>icsrd</td>
                                            <td>Technical data used to refresh date serialized in ISO format</td>
                                        </tr>
                                        <tr>
                                            <td>trkC&lt;x&gt;</td>
                                            <td>Cliente page ID</td>
                                        </tr>
                                        <tr>
                                            <td>dyncdn</td>
                                            <td>End-point and traffic data used to trigger the injection of a pixel monitoring the performance of an end-point and its traffic</td>
                                        </tr>
                                        <tr>
                                            <td>gid</td>
                                            <td>Global unique ID cross domains associated with an end-user</td>
                                        </tr>
                                        <tr>
                                            <td>csfq</td>
                                            <td>Technical data, used to trigger the injection of monitoring scripts</td>
                                        </tr>
                                        <tr>
                                            <td>comp</td>
                                            <td>Keyword associated with an end-user</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sovrn</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Enables the creation of personalised advertisements.</td>
                                            <td><a href="https://www.sovrn.com/about-our-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="3">
                                                <b>Xandr</b> (Advertising / Analysis)
                                            </td>
                                            <td>uuid2</td>
                                            <td>TThis cookie contains a randomly generated unique value that allows the Platform to distinguish browsers and devices. It is compared to information, such as advertising interest segments and histories of ads displayed on the browser or device, provided by clients or other third parties and stored on the Platform. Clients use this information to select ads for delivery by the Platform, and to measure performance and payout attributes for those ads. In addition, we use this cookie to allow clients to use data that does not reveal or use the actual identity of an Internet user or data they collect outside the Platform or acquire from other third parties. Sometimes this cookie is also linked to cookies from clients or other third parties so that they can use the data they collect outside the Platform to serve more relevant ads to Internet users.</td>
                                            <td rowspan="3">
                                                <a href="https://about.ads.microsoft.com/en-us/solutions/xandr/digital-platform-cookie-policy" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>anj</td>
                                            <td>The anj cookie contains data indicating whether a cookie ID is synchronised with our partners.</td>
                                        </tr>
                                        <tr>
                                            <td>icu</td>
                                            <td>The icu cookie is used to target ads and limit the number of times a user sees a particular ad. It contains information such as the number of times an ad was shown, the date an ad was shown, or the total number of ads shown.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>Liveramp</b> (Advertising)
                                            </td>
                                            <td>rlas3</td>
                                            <td>Contains Liveramp's unique identifier and allows Liveramp to deterministically bind the user.</td>
                                            <td rowspan="7"><a href="https://liveramp.com/cookies-101/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>pxrc</td>
                                            <td>Contains information about LiveRamp cookie syncs enabled from this browser. Used to facilitate cookie sync priority queuing (this cookie does NOT contain or process personal data).</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_retry_request</td>
                                            <td>Used to tell LiveRamp ATS whether or not to retry a call (stops more than one simultaneous API call).</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_geo_location</td>
                                            <td>Tells LiveRamp tags where the user is located</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_drop_match_pixel</td>
                                            <td>Tells LiveRamps tags if our match pixel (which sets the rlas3 and pxrc cookies) has been fired recently</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is.</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env</td>
                                            <td>Contains the envelope with the Ramp ID used to provide addressability in a cookieless manner.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Criteo</b>
                                            </td>
                                            <td>uid</td>
                                            <td>This cookie is used by Criteo to collect aggregated browsing data to serve personalized retargeted ads to users based on their browsing history and behavior. The `uid` is a unique identifier for the user, helping Criteo to provide relevant ads across different websites and platforms.</td>
                                            <td><a href="https://www.criteo.com/privacy/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="14">
                                                <b>ID5</b>
                                            </td>
                                            <td>pbjs-id5id</td>
                                            <td>Primary identifiers used by ID5 to enable better user recognition across different advertising platforms.</td>
                                            <td rowspan="14"><a href="https://id5.io/platform-privacy-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>id5id.1st_last</td>
                                            <td>Timestamps related to the last time the ID was accessed.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id.1st_nb</td>
                                            <td>Denotes the number of times the ID was first accessed.</td>
                                        </tr>
                                        <tr>
                                            <td>_pbjs_userid_consent_data</td>
                                            <td>Stores user consent data, indicating whether the user has given permission for their data to be used.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id_last</td>
                                            <td>Timestamps related to the last time the ID was accessed.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id.1st_492_nb</td>
                                            <td>Denotes the number of times the ID was first accessed for a specific platform or partner.</td>
                                        </tr>
                                        <tr>
                                            <td>pbjs-id5id_492_nb</td>
                                            <td>Denotes the number of times the ID was accessed through Prebid integration for a specific platform or partner.</td>
                                        </tr>
                                        <tr>
                                            <td>pbjs-unifiedid</td>
                                            <td>Related to a unified user ID for a holistic view across multiple platforms or exchanges for advertising.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id.1st</td>
                                            <td>Timestamps related to when the ID was first created.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id_492_nb</td>
                                            <td>Denotes the number of times the ID was first accessed for a specific platform or partner.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id</td>
                                            <td>Primary identifiers used by ID5 to enable better user recognition across different advertising platforms.</td>
                                        </tr>
                                        <tr>
                                            <td>pbjs-id5id_last</td>
                                            <td>Timestamps related to the last time the ID was accessed through Prebid integration.</td>
                                        </tr>
                                        <tr>
                                            <td>pbjs-id5id_nb</td>
                                            <td>Denotes the total number of times the ID has been accessed through Prebid integration.</td>
                                        </tr>
                                        <tr>
                                            <td>id5id_nb</td>
                                            <td>Denotes the total number of times the ID has been accessed.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Pinterest</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We will impact users who have visited the website or are registered with a banner ad, we will use the data of registered users to avoid impacting with campaigns whose objective is a premium subscription and we will look for users with similar online behaviour to registered users or users who have visited the website. This dataset will be used both to reach our target audience through online campaign segmentation and to measure campaign results.</td>
                                            <td><a href="https://policy.pinterest.com/es/cookies" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Ads</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>Look a likes, Rmk and Opt-out. We collect data from visitors to our pages to analyse behaviour and impact them with our ads if they do not register or do not subscribe. And to be able to impact users similar to those who visit us or similar to registered or subscribed users who are not customers.</td>
                                            <td><a href="https://policies.google.com/privacy?hl=es" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Tag Manager</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>Google Tag Manager is a tag management system that allows third parties to add functionality to websites, video content and mobile applications. Examples of such solutions include web analytics, campaign analytics, audience measurement, personalisation, allows you to easily and quickly update tags and code snippets on a website or your mobile applications, such as those for traffic analysis and optimising marketing campaigns. Custom, third-party or AdWords, Google Analytics, Firebase Analytics and Floodlight, Facebbok Ads, Twitter Ads, Hotjar tags can be added and updated. It is used for the purpose of managing the different conversion codes of the online marketing and retargeting tools.</td>
                                            <td><a href="https://support.google.com/tagmanager/answer/6102821?hl=es" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7"><b>ContentSquare</b></td>
                                            <td>_cs_id</td>
                                            <td>This cookie contains the ContentSquare user ID.</td>
                                            <td rowspan="7"><a href="https://www.contentsquare.com/privacy-and-security/" target="_blank">Here</a>
                                        </tr>
                                        <tr>
                                            <td>_cs_s</td>
                                            <td>This cookie contains the number of page views within the current session for ContentSquare Solution.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_vars</td>
                                            <td>This cookie is used by ContentSquare to record custom variables.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_ex</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_c</td>
                                            <td>This cookie is used by ContentSquare to store the user's consent to be tracked</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_optout</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_mk</td>
                                            <td>This cookie is used for Google Analytics and Adobe Analytics integrations.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2"><b>OneTrust</b></td>
                                            <td>OptanonConsent</td>
                                            <td rowspan="2">OptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td rowspan="2"><a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>OptanonAlertBoxClosed</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7"><b>Google Optimize</b></td>
                                            <td>_gaexp</td>
                                            <td rowspan="2">
                                                Used to determine the inclusion of a user in an experiment and the duration of the experiments in which they participate.</td>
                                            <td rowspan="7">
                                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es-419#experiments" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awcid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awmid</td>
                                            <td rowspan="2">
                                                Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awgid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awkid</td>
                                            <td rowspan="2">
                                                Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_utmc</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_expid</td>
                                            <td>This cookie is created when running a redirect experiment. It stores the experiment ID, the variant ID and the referring URL of the page being redirected to.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="4">
                                                <b>Twitter</b>
                                            </td>
                                            <td>_twclid</td>
                                            <td>Cookies used for attribution. Advertising cookie. First Party</td>
                                            <td rowspan="4">
                                                <a href="https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites/about-conversion-tracking.html" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>muc_ads</td>
                                            <td>Cookies used for attribution. Advertising cookie. Third Party</td>
                                        </tr>
                                        <tr>
                                            <td>auth_token</td>
                                            <td>Cookies used for attribution. Login cookie. Third Party</td>
                                        </tr>
                                        <tr>
                                            <td>personalization_id</td>
                                            <td>Cookies used for attribution. Advertising cookie. Third Party</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h5 id="cookie-type-flaticon" class="font-lg">Third-party cookies in <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>COOKIE</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td><b>Google Analytics</b> (Analysis)
                                            </td>
                                            <td></td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adpone</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Recognize and analyze inventory available in our advertising spaces to offer our users advertising of interest. Campaign optimization, segmentation, frequency.</td>
                                            <td><a href="https://adpone.com/cookies-policy/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adform</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://site.adform.com/privacy-center/adform-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>RichAudience</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://richaudience.com/en/cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Smartadserver</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://smartadserver.com/end-user-privacy-policy/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sovrn</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://www.sovrn.com/about-our-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="15">
                                                <b>Rubicon Project</b> (Advertising)
                                            </td>
                                            <td>trp_optout</td>
                                            <td>Log Preferences: Cookie indicating that a user has opted-out of behavioral targeting marketing.</td>
                                            <td rowspan="15">
                                                <a href="https://rubiconproject.com/rubicon-project-advertising-technology-privacy-policy/platform-cookie-statement/?lang=es" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>FPTrust</td>
                                            <td>Log Preferences: These cookies support the opt-out process via the Network Advertising Initiative (NAI).</td>
                                        </tr>
                                        <tr>
                                            <td>Khaos</td>
                                            <td>Platform Operations: Internal user identifier used for analytics.</td>
                                        </tr>
                                        <tr>
                                            <td>rsid</td>
                                            <td>Platform Operations: Session cookie that contains information about a device, including region (derived from IP address, not geolocation data), operating System, browser, etc., that is used during the ad inventory sale process.</td>
                                        </tr>
                                        <tr>
                                            <td>rpx, rpx_*</td>
                                            <td>Platform Operations: Contains expiration dates for information in the rpb cookie.</td>
                                        </tr>
                                        <tr>
                                            <td>fcap</td>
                                            <td>Platform Operations: Number of times we have shown an ad on a per user basis.</td>
                                        </tr>
                                        <tr>
                                            <td>put_*</td>
                                            <td>Platform Operations: Bidder identifiers placed at the request of a bidder, to sync a bidder’s independent information about an end user with Rubicon Project, to allow the bidder (not Rubicon Project) to bid on ads through the Rubicon Project advertising exchange based on behavioral targeting information known only to the bidder (i.e., the user identifier will be transmitted in a bid request to the bidder that caused this cookie to be placed).</td>
                                        </tr>
                                        <tr>
                                            <td>pux</td>
                                            <td>Platform Operations: Dates for when information in the put_* and sput cookies expires and should be refreshed.</td>
                                        </tr>
                                        <tr>
                                            <td>rpb</td>
                                            <td>Analytics: Publisher and partner-owned audience segments used for private marketplaces and audience-based planning and forecasting in Orders.</td>
                                        </tr>
                                        <tr>
                                            <td>sput, sput_*</td>
                                            <td>Analytics: Contains multiple bidder identifiers (i.e., data that would be stored in multiple put_* cookies) in a smaller number of cookies.</td>
                                        </tr>
                                        <tr>
                                            <td>ses*</td>
                                            <td>Analytics: Indicates number of times Rubicon Project has served a user an advert for this particular unit of inventory.</td>
                                        </tr>
                                        <tr>
                                            <td>vis*</td>
                                            <td>Analytics: Indicates number of times a user action has precipitated an ad request for this particular unit of inventory.</td>
                                        </tr>
                                        <tr>
                                            <td>cd</td>
                                            <td>Analytics: Indicates whether cookies are disabled for the device.</td>
                                        </tr>
                                        <tr>
                                            <td>cimg*</td>
                                            <td>Analytics: Contains information about served ads (timestamp, site, internal identifiers for the publisher, buyer, advertiser, and displayed advertisement).</td>
                                        </tr>
                                        <tr>
                                            <td>audit</td>
                                            <td>Analytics: Used to record cookie consent data.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="11">
                                                <b>Index Exchange</b> (Advertising)
                                            </td>
                                            <td>CMPS</td>
                                            <td>Identify the main server for quick responses to the user's page</td>
                                            <td rowspan="11">
                                                <a href="https://www.indexexchange.com/privacy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CMTS</td>
                                            <td>Identify backup server for quick responses to user page</td>
                                        </tr>
                                        <tr>
                                            <td>CMGO</td>
                                            <td>Indicates if the user's primary server has changed</td>
                                        </tr>
                                        <tr>
                                            <td>CMTEST</td>
                                            <td>Confirm if cookies can be created for the user</td>
                                        </tr>
                                        <tr>
                                            <td>CMID</td>
                                            <td>Recognize web users that IndexExchange has seen before by browser. This is the cookie that is used to allow personalized advertising, among other uses</td>
                                        </tr>
                                        <tr>
                                            <td>CMPRO</td>
                                            <td>Identify server profile for quick responses to user page</td>
                                        </tr>
                                        <tr>
                                            <td>CMRUM3</td>
                                            <td>It contains a table that maps the IDs of Index Exchange's users with those of our bidding partners</td>
                                        </tr>
                                        <tr>
                                            <td>CMDD</td>
                                            <td>Measures how many unique pages a user has interacted with on a web property</td>
                                        </tr>
                                        <tr>
                                            <td>CMST</td>
                                            <td>Contains the duration of a session in a session</td>
                                        </tr>
                                        <tr>
                                            <td>CMSC</td>
                                            <td>Contains the start time of a user in a session</td>
                                        </tr>
                                        <tr>
                                            <td>CMO</td>
                                            <td>Indicates if the web user has chosen not to participate using behavioral advertising opt-out tools</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Pinterest</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We will impact users who have visited the website or are registered on it with an advertising banner, we will use the data of registered users so as not to impact campaigns whose objective is premium subscription and we will look for users with similar online behavior to registered users or who have visited the web. This set of data will be used both to reach our target audience through online campaign segmentation and to measure their results.</td>
                                            <td><a href="https://policy.pinterest.com/en-gb/cookies" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Ads</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We collect data from visitors to our pages to analyze behavior and impact them with our ads if they finally do not register or do not subscribe. Also, to be able to impact users similar to those who visit us or similar to those registered or subscribed that are not clients.</td>
                                            <td><a href="https://policies.google.com/privacy?hl=en" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2"><b>OpenX</b>
                                            </td>
                                            <td>i</td>
                                            <td>Records anonymized user data, such as IP address, geographic location, visited websites and which ads the user has clicked on, in order to optimize the display of ads based on the user's navigation on websites that use the same advertising network</td>
                                            <td rowspan="2"><a href="https://www.openx.com/legal/privacy-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>pd</td>
                                            <td>Collect information about visitor behavior on various websites. This information is used on the website to optimize the relevance of advertising</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>DistrictM</b>
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://www.districtm.net/privacy-policy/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="3">
                                                <b>AppNexus</b>
                                            </td>
                                            <td>uuid2</td>
                                            <td>This cookie contains a unique randomly-generated value that enables the Platform to distinguish browsers and devices. It is matched against information – such as advertising interest segments and histories of ads shown in the browser or device – provided by clients or other third parties and stored on the Platform. This information is used by clients to select advertisements for delivery by the Platform, and to measure the performance of, and attribute payment for, those advertisements. In addition, we use this cookie to enable clients to use data which does not reveal or use an Internet user’s real-world identity or data they collect outside of the Platform or acquire from other third parties. This cookie is also sometimes matched to clients’ or other third parties’ cookies so that they can use data they collect outside of the Platform to serve more relevant advertisements to Internet users. When a user opts out of having the Platform used to select ads based on online behavior, the unique value in uuid2 is deleted and replaced with the non-unique value “-1”.</td>
                                            <td rowspan="3">
                                                <a href="https://www.xandr.com/privacy/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>anj</td>
                                            <td>The anj cookie contains data denoting whether a cookie ID is synced with our partners.</td>
                                        </tr>
                                        <tr>
                                            <td>icu</td>
                                            <td>The icu cookie is used to select ads and limit the number of times a user sees a particular ad. It contains information such as the number of times an ad has been shown, how recently an ad has been shown, or how many total ads have been shown.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2"><b>Amazon APS</b> (Advertising)
                                            </td>
                                            <td>ad-id</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on ad clicks on a different website</td>
                                            <td rowspan="2"><a href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=201909010" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>ad-privacy</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on ad clicks on a different website</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Tag Manager</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>Google Tag Manager is a tag management system that allows third parties to add functionality to websites, video content, and mobile applications. Examples of such solutions include web analytics, campaign analytics, audience measurement, personalization, allows you to quickly and easily update tags and code snippets on a website or your mobile applications, such as those intended for analytics traffic and optimize marketing campaigns. You can add and update custom, third-party or AdWords tags, Google Analytics, Firebase Analytics and Floodlight, Facebbok Ads, Twitter Ads, Hotjar. It is used in order to manage the different conversion codes of the online Marketing and retargeting tools</td>
                                            <td><a href="https://support.google.com/tagmanager/answer/6102821?hl=en" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="13">
                                                <b>Hotjar</b> (Analysis)
                                            </td>
                                            <td>_hjClosedSurveyInvites</td>
                                            <td>It is set once a visitor interacts with an External Link Survey invitation modal. It is used to ensure that the same invite does not reappear if it has already been shown.</td>
                                            <td rowspan="13">
                                                <a href="https://help.hotjar.com/hc/en-us/articles/115011789248" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_hjDonePolls</td>
                                            <td>It is set once a visitor completes a survey using the On-site Survey widget. It is used to ensure that the same survey does not reappear if it has already been filled in.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjMinimizedPolls</td>
                                            <td>It is set once a visitor minimizes an On-site Survey widget. It is used to ensure that the widget stays minimized when the visitor navigates through your site.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjShownFeedbackMessage</td>
                                            <td>It is set when a visitor minimizes or completes Incoming Feedback. This is done so that the Incoming Feedback will load as minimized immediately if the visitor navigates to another page where it is set to show.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjid</td>
                                            <td>It is set when the customer first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjRecordingLastActivity</td>
                                            <td>This should be found in Session storage (as opposed to cookies). This gets updated when a visitor recording starts and when data is sent through the WebSocket (the visitor performs an action that Hotjar records).</td>
                                        </tr>
                                        <tr>
                                            <td>_hjTLDTest</td>
                                            <td>When the Hotjar script executes we try to determine the most generic cookie path we should use, instead of the page hostname. This is done so that cookies can be shared across subdomains (where applicable). To determine this, we try to store the _hjTLDTest cookie for different URL substring alternatives until it fails. After this check, the cookie is removed.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjUserAttributesHash</td>
                                            <td>User Attributes sent through the Hotjar Identify API are cached for the duration of the session in order to know when an attribute has changed and needs to be updated.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjCachedUserAttributes</td>
                                            <td>This cookie stores User Attributes which are sent through the Hotjar Identify API, whenever the user is not in the sample. These attributes will only be saved if the user interacts with a Hotjar Feedback tool.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjLocalStorageTest</td>
                                            <td>This cookie is used to check if the Hotjar Tracking Script can use local storage. If it can, a value of 1 is set in this cookie. The data stored in_hjLocalStorageTest has no expiration time, but it is deleted almost immediately after it is created.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjIncludedInPageviewSample</td>
                                            <td>This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site's pageview limit.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjIncludedInSessionSample</td>
                                            <td>This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site's daily session limit.</td>
                                        </tr>
                                        <tr>
                                            <td>_hjAbsoluteSessionInProgress</td>
                                            <td>This cookie is used to detect the first pageview session of a user. This is a True/False flag set by the cookie.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="5">
                                                Salesforce (Performance)
                                            </td>
                                            <td>sfdc-stream</td>
                                            <td>Used to properly route server requests within Salesforce infrastructure for sticky sessions.</td>
                                            <td rowspan="5">
                                                <a href="https://help.salesforce.com/s/articleView?id=sf.networks_cookies.htm&type=5" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>oid</td>
                                            <td>Stores the last logged in org for redirecting requests. Used for logging whether the cookie is present in site and community guest-user requests.</td>
                                        </tr>
                                        <tr>
                                            <td>CookieConsentPolicy</td>
                                            <td>Used to apply end-user cookie consent preferences set by our client-side utility.</td>
                                        </tr>
                                        <tr>
                                            <td>pctrk</td>
                                            <td>Used to track unique page visitors in Experiences.</td>
                                        </tr>
                                        <tr>
                                            <td>renderCtx</td>
                                            <td>Used to store site parameters in the session for reuse across requests by a single client for functionality and performance reasons.</td>
                                        </tr>

                                        <tr class="borfder">
                                            <td rowspan="10">
                                                <b>Improve Digital</b> (Advertising)
                                            </td>
                                            <td>tuuid</td>
                                            <td>To enable bidding process</td>
                                            <td rowspan="10"><a href="https://www.improvedigital.com/platform-privacy-policy/" target="_blank">Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>tuuid_lu</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>pvt</td>
                                            <td>Tracks views to measure conversions</td>
                                        </tr>
                                        <tr>
                                            <td>ih</td>
                                            <td>To limit number of advertisements you see (frequency capping)</td>
                                        </tr>
                                        <tr>
                                            <td>fh</td>
                                            <td>Impression counter</td>
                                        </tr>
                                        <tr>
                                            <td>um</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>umeh</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>sh</td>
                                            <td>To limit number of advertisements you see (frequency capping)</td>
                                        </tr>
                                        <tr>
                                            <td>lcri5m</td>
                                            <td>Load creative</td>
                                        </tr>
                                        <tr>
                                            <td>lcai9h</td>
                                            <td>Load campaign impressions</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adagio</b>
                                            </td>
                                            <td>uids</td>
                                            <td>Stores the Adagio user ID and the user ID of Adagio bidders.</td>
                                            <td><a href="https://adagio.io/privacy" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sharethrough</b>
                                            </td>
                                            <td>stx_user_id</td>
                                            <td>This cookie is used for analytics, multivariate testing, and site optimisation.</td>
                                            <td><a href="https://www.sharethrough.com/privacy-center/consumer-privacy-notice" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="33">
                                                <b>Pubmatic</b> (Advertising)
                                            </td>
                                            <td>DPSync2</td>
                                            <td>These cookies maintain a list of our partner’s pixel IDs, which may be used to read and place cookies on a web browser, that have been synced with PubMatic IDs. This enables us to identify the partners with whom we have already synced our cookies and to ensure that we do not unnecessarily sync cookies again within a certain period of time.</td>
                                            <td rowspan="33">
                                                <a href="https://pubmatic.com/legal/platform-cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>KRTBCOOKIE_xxxx</td>
                                            <td>We use this cookie to correlate our user IDs with those of our partners (such as demand side platform clients or other advertising technology companies). We pass the information stored by the partner in this cookie to the partner when it is considering whether to purchase advertisements. This enables the partner to make better decisions about whether to display an advertisement to you.</td>
                                        </tr>
                                        <tr>
                                            <td>SyncRTB2</td>
                                            <td>These cookies maintain a list of our partner’s pixel IDs, which may be used to read and place cookies on a web browser, that have been synced with PubMatic IDs. This enables us to identify the partners with whom we have already synced our cookies and to ensure that we do not unnecessarily sync cookies again within a certain period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>SPugT</td>
                                            <td>This cookie is used to track when the server-side cookie store was last updated for the browser, and it is used in conjunction with the PugT cookie, described below.</td>
                                        </tr>
                                        <tr>
                                            <td>ipc</td>
                                            <td>This cookie is a short-lived cookie that stores information needed to coordinate cookie syncing.</td>
                                        </tr>
                                        <tr>
                                            <td>PMFREQ_ON</td>
                                            <td>This cookie ensures the proper functioning of the camfreq and pubfreq cookies, described above, in situations where one cookie may override the other.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBMDCID</td>
                                            <td>This cookie stores an ID for the applicable PubMatic data center that is used to display an advertisement in the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KTPCACOOKIE</td>
                                            <td>We use this cookie to check if third-party cookies are enabled on the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KADUSERCOOKIE</td>
                                            <td>We use this cookie to uniquely identify each browser or device from which an individual user visits our partners’ websites.</td>
                                        </tr>
                                        <tr>
                                            <td>pi</td>
                                            <td>This cookie enables us to determine which set of pixels needs to be executed on the browser.</td>
                                        </tr>
                                        <tr>
                                            <td>PugT</td>
                                            <td>This cookie tracks when cookies were updated on the browser, in order to limit the number of calls to the server-side cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>KCCH</td>
                                            <td>This cookie ensures that a PubMatic user ID is already set and that PubMatic’s code is running properly.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBRETARGET</td>
                                            <td>We use this cookie to indicate if a user can be considered for various re-targeting ad campaigns running on the Platform. For example, we may use it to determine whether to show you an advertisement that relates to a product or service that you previously viewed on an advertiser’s website.</td>
                                        </tr>
                                        <tr>
                                            <td>COKENBLD</td>
                                            <td>This cookie sets a flag to “true” if cookies are enabled on the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>USCC</td>
                                            <td>This cookie enables PubMatic to sync user IDs properly in situations where multiple advertisements might appear on the same webpage.</td>
                                        </tr>
                                        <tr>
                                            <td>DPPIX_ON and SYNCUPPIX_ON</td>
                                            <td>These cookies enable PubMatic to properly sync cookie IDs with our partners by ensuring that our partners do not override each other during the sync process.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBUIDSYNCUPFQ</td>
                                            <td>This cookie indicates the last time that we synced IDs with our partner.</td>
                                        </tr>
                                        <tr>
                                            <td>camfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each campaign and indicates the number of times (e.g., frequency) that a particular advertisement may have been shown on the applicable publisher site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each advertising network and indicates the number of times (e.g., frequency) that a particular advertisement may have been shown on the applicable publisher site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubtime_&lt;SITEID&gt;</td>
                                            <td>This cookie stores the period of time after which ad frequency counters reset.</td>
                                        </tr>
                                        <tr>
                                            <td>DPFQ</td>
                                            <td>This cookie stores information regarding the number of times that a partner’s pixel is loaded by a user’s browser. This enables us to cap the number of times that a pixel is used to record a user’s visit to a website within a specific period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>repi</td>
                                            <td>This cookie is a short-lived cookie that is used to determine if repixeling is in progress.</td>
                                        </tr>
                                        <tr>
                                            <td>pp</td>
                                            <td>This cookie tracks the last publisher website that you visited that contained an advertisement served by PubMatic.</td>
                                        </tr>
                                        <tr>
                                            <td>FPtrust</td>
                                            <td>This cookie is a session cookie used to support the opt-out process via the Network Advertising Initiative.</td>
                                        </tr>
                                        <tr>
                                            <td>_curtime</td>
                                            <td>This cookie stores the current timestamp.</td>
                                        </tr>
                                        <tr>
                                            <td>ipc</td>
                                            <td>This cookie is a short-lived cookie that stores information needed to coordinate cookie syncing.</td>
                                        </tr>
                                        <tr>
                                            <td>PMDTSHR</td>
                                            <td>This cookie is set for Komli ad server and is used for default impression when other data is not available.</td>
                                        </tr>
                                        <tr>
                                            <td>dV</td>
                                            <td>This cookie is used to save the user’s preferences and other information.</td>
                                        </tr>
                                        <tr>
                                            <td>UND</td>
                                            <td>This cookie stores the user network default.</td>
                                        </tr>
                                        <tr>
                                            <td>SSCS</td>
                                            <td>This cookie calls a cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>chk and chkSecSet</td>
                                            <td>This cookie is set on Google Chrome browsers that have a version less 67 or non-Chrome browsers, and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>chkChromeAb67 and chkChromeAb67Sec</td>
                                            <td>This cookie is set on Google Chrome browsers that have a version above 67 and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>PM-UL-Sync</td>
                                            <td>This cookie is used to execute some custom UserSync integrations such as DigiTrust.</td>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adman media</b> (Advertising)
                                            </td>
                                            <td>admtr<br>
                                                sdr_id<br>
                                                ired</td>
                                            <td>To identify the user and is saved with a randomly generated identifier.<br>
                                                ADman Media also inserts cookies from third-party partners (such as Demand Side Platforms - DSPs - or other SSPs) so that they can compare their cookie with that of ADman Media and thus be able to offer services to their customers.</td>
                                            <td><a href="http://admanmedia.com/politica.html?setLng=es" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2"><b>Vidoomy</b> (Advertising)</td>
                                            <td>uids</td>
                                            <td>Collect the IP, in order to know which country it is and assign the corresponding campaigns.</td>
                                            <td rowspan="2"><a href="https://vidoomy.com/privacy-policy-en.html" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>vidoomy-uids</td>
                                            <td>Collect the IP, in order to know which country it is and assign the corresponding campaigns.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="9"><b>Liveramp</b> (Advertising)</td>
                                            <td>rlas3</td>
                                            <td>Contains Liveramps unique identifier and allows Liveramp to deterministically link the user</td>
                                            <td rowspan="9">
                                                <a href="https://liveramp.com/cookies-101/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>pxrc</td>
                                            <td>Contains information about LiveRamp cookie syncs triggered off the back of this browser. Used to facilitate cookie sync priority queue (this cookie does NOT contain or process personal data).</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_retry_request</td>
                                            <td>Used to tell LiveRamp ATS whether or not to retry a call (stops more than one simultaneous API call)</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_geo_location</td>
                                            <td>Tells LiveRamp tags where the user is based</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_drop_match_pixel</td>
                                            <td>Tells LiveRamps tags whether our match pixel (which sets the rlas3 and pxrc cookies) have recently been fired</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env</td>
                                            <td>Contains the Ramp ID envelope used to provide addressability in a cookieless manner.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>ContentSquare</b>
                                            </td>
                                            <td>_cs_id</td>
                                            <td>This cookie contains the ContentSquare user ID.</td>
                                            <td rowspan="7">
                                                <a href="https://www.contentsquare.com/privacy-and-security/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_cs_s</td>
                                            <td>This cookie contains the number of page views within the current session for ContentSquare Solution.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_vars</td>
                                            <td>This cookie is used by ContentSquare to record custom variables.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_ex</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_c</td>
                                            <td>This cookie is used by ContentSquare to store the user's consent to be tracked</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_optout</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_mk</td>
                                            <td>This cookie is used for Google Analytics and Adobe Analytics integrations.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2"><b>OneTrust</b>
                                            </td>
                                            <td>OptanonConsent</td>
                                            <td rowspan="2">OptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td rowspan="2"><a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OptanonAlertBoxClosed</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>Google Optimize</b>
                                            </td>
                                            <td>_gaexp</td>
                                            <td rowspan="2">Used to determine the inclusion of a user in an experiment and the duration of the experiments in which they participate.</td>
                                            <td rowspan="7">
                                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es-419#experiments" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awcid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awmid</td>
                                            <td rowspan="2">Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awgid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awkid</td>
                                            <td rowspan="2">Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_utmc</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_expid</td>
                                            <td>This cookie is created when running a redirect experiment. It stores the experiment ID, the variant ID and the referring URL of the page being redirected to.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="4">
                                                <b>Twitter</b>
                                            </td>
                                            <td>_twclid</td>
                                            <td>Cookies used for attribution. Advertising cookie.</td>
                                            <td rowspan="4">
                                                <a href="https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites/about-conversion-tracking.html" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>muc_ads</td>
                                            <td>Cookies used for attribution. Advertising cookie.</td>
                                        </tr>
                                        <tr>
                                            <td>auth_token</td>
                                            <td>Cookies used for attribution. Login cookie.</td>
                                        </tr>
                                        <tr>
                                            <td>personalization_id</td>
                                            <td>Cookies used for attribution. Advertising cookie.</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h5 id="cookie-type-slidesgo" class="font-lg">Third-party cookies in <a href="https://www.slidesgo.com/" target="_blank">www.slidesgo.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>COOKIE</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td><b>Google Analytics</b> (Tracking / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>CloudFlare</b> (Performance / Functionality)
                                            </td>
                                            <td>_cflb, _cf_bm, y _cfduid</td>
                                            <td>It is used to override any security restrictions based on the IP address the visitor is coming from. It does not correspond to any user identification in the web application, nor does the cookie store any personally identifiable information</td>
                                            <td><a href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Pinterest</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We will impact users who have visited the website or are registered on it with an advertising banner, we will use the data of registered users so as not to impact campaigns whose objective is premium subscription and we will look for users with similar online behavior to registered users or who have visited the web. This set of data will be used both to reach our target audience through online campaign segmentation and to measure their results.</td>
                                            <td><a href="https://policy.pinterest.com/es/cookies" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="6">
                                                <b>Google</b> (Advertising / Analysis)
                                            </td>
                                            <td>Cookie IDE</td>
                                            <td>Display of ads relevant to the user, personalized ads</td>
                                            <td rowspan="6">
                                                <a href="https://support.google.com/admanager/answer/2839090?hl=en" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cookie ANID</td>
                                            <td>Display of ads relevant to the user, personalized ads</td>
                                        </tr>
                                        <tr>
                                            <td>Cookies DSID, FLC, AID, TAID y exchange_uid</td>
                                            <td>Display of ads relevant to the user, personalized ads</td>
                                        </tr>
                                        <tr>
                                            <td>__gads o __gac</td>
                                            <td>Among other, in measuring interactions with the ads included in that domain and avoiding being shown the same advertising too many times</td>
                                        </tr>
                                        <tr>
                                            <td>__gcl</td>
                                            <td>Purpose: To help advertisers determine how many of the people who click on their ads end up taking an action on their website (for example, buying an item). These cookies allow Google and the advertiser to determine that you have clicked on the ad and that you have subsequently accessed the advertiser's website. Conversion cookies only last for a limited period and Google does not use them to target personalized ads. Some of the other cookies can also be used to measure conversion events. For example, Google Marketing Platform and Google Analytics cookies can also be used for this purpose</td>
                                        </tr>
                                        <tr>
                                            <td>Cookies: "AID", "DSID" y "TAID"</td>
                                            <td>Active only when the user is logged in with his Google account. Purpose: link your activity on devices, coordinate the ads that appear on them and measure conversion events. These cookies can be enabled in the domains google.com/ads, google.com/ads/measurement or googleadservices.com</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="15">
                                                <b>Rubicon Project</b> (Advertising)
                                            </td>
                                            <td>trp_optout</td>
                                            <td>Log Preferences: Cookie indicating that a user has opted-out of behavioral targeting marketing.</td>
                                            <td rowspan="15">
                                                <a href="https://rubiconproject.com/rubicon-project-advertising-technology-privacy-policy/platform-cookie-statement/?lang=es" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>FPTrust</td>
                                            <td>Log Preferences: These cookies support the opt-out process via the Network Advertising Initiative (NAI).</td>
                                        </tr>
                                        <tr>
                                            <td>Khaos</td>
                                            <td>Platform Operations: Internal user identifier used for analytics.</td>
                                        </tr>
                                        <tr>
                                            <td>rsid</td>
                                            <td>Platform Operations: Session cookie that contains information about a device, including region (derived from IP address, not geolocation data), operating System, browser, etc., that is used during the ad inventory sale process.</td>
                                        </tr>
                                        <tr>
                                            <td>rpx, rpx_*</td>
                                            <td>Platform Operations: Contains expiration dates for information in the rpb cookie.</td>
                                        </tr>
                                        <tr>
                                            <td>fcap</td>
                                            <td>Platform Operations: Number of times we have shown an ad on a per user basis.</td>
                                        </tr>
                                        <tr>
                                            <td>put_*</td>
                                            <td>Platform Operations: Bidder identifiers placed at the request of a bidder, to sync a bidder’s independent information about an end user with Rubicon Project, to allow the bidder (not Rubicon Project) to bid on ads through the Rubicon Project advertising exchange based on behavioral targeting information known only to the bidder (i.e., the user identifier will be transmitted in a bid request to the bidder that caused this cookie to be placed).</td>
                                        </tr>
                                        <tr>
                                            <td>pux</td>
                                            <td>Platform Operations: Dates for when information in the put_* and sput cookies expires and should be refreshed.</td>
                                        </tr>
                                        <tr>
                                            <td>rpb</td>
                                            <td>Analytics: Publisher and partner-owned audience segments used for private marketplaces and audience-based planning and forecasting in Orders.</td>
                                        </tr>
                                        <tr>
                                            <td>sput, sput_*</td>
                                            <td>Analytics: Contains multiple bidder identifiers (i.e., data that would be stored in multiple put_* cookies) in a smaller number of cookies.</td>
                                        </tr>
                                        <tr>
                                            <td>ses*</td>
                                            <td>Analytics: Indicates number of times Rubicon Project has served a user an advert for this particular unit of inventory.</td>
                                        </tr>
                                        <tr>
                                            <td>vis*</td>
                                            <td>Analytics: Indicates number of times a user action has precipitated an ad request for this particular unit of inventory.</td>
                                        </tr>
                                        <tr>
                                            <td>cd</td>
                                            <td>Analytics: Indicates whether cookies are disabled for the device.</td>
                                        </tr>
                                        <tr>
                                            <td>cimg*</td>
                                            <td>Analytics: Contains information about served ads (timestamp, site, internal identifiers for the publisher, buyer, advertiser, and displayed advertisement).</td>
                                        </tr>
                                        <tr>
                                            <td>audit</td>
                                            <td>Analytics: Used to record cookie consent data.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Tag Manager</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>Google Tag Manager is a tag management system that allows third parties to add functionality to websites, video content, and mobile applications. Examples of such solutions include web analytics, campaign analytics, audience measurement, personalization, allows you to quickly and easily update tags and code snippets on a website or your mobile applications, such as those intended for analytics traffic and optimize marketing campaigns. You can add and update custom, third-party or AdWords tags, Google Analytics, Firebase Analytics and Floodlight, Facebbok Ads, Twitter Ads, Hotjar. It is used in order to manage the different conversion codes of the online Marketing and retargeting tools</td>
                                            <td><a href="https://support.google.com/tagmanager/answer/6102821?hl=en" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>OpenX</b> (Advertising)
                                            </td>
                                            <td>i</td>
                                            <td>Records anonymized user data, such as IP address, geographic location, visited websites and which ads the user has clicked on, in order to optimize the display of ads based on the user's navigation on websites that use the same advertising network</td>
                                            <td rowspan="2">
                                                <a href="https://www.openx.com/legal/privacy-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>pd</td>
                                            <td>Collect information about visitor behavior on various websites. This information is used on the website to optimize the relevance of advertising</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>DistrictM</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://www.districtm.net/privacy-policy/" target="_blank">Here</a></td>

                                        </tr>
                                        <tr class="border">
                                            <td rowspan="3">
                                                <b>AppNexus</b> (Advertising)
                                            </td>
                                            <td>uuid2</td>
                                            <td>This cookie contains a unique randomly-generated value that enables the Platform to distinguish browsers and devices. It is matched against information – such as advertising interest segments and histories of ads shown in the browser or device – provided by clients or other third parties and stored on the Platform. This information is used by clients to select advertisements for delivery by the Platform, and to measure the performance of, and attribute payment for, those advertisements. In addition, we use this cookie to enable clients to use data which does not reveal or use an Internet user’s real-world identity or data they collect outside of the Platform or acquire from other third parties. This cookie is also sometimes matched to clients’ or other third parties’ cookies so that they can use data they collect outside of the Platform to serve more relevant advertisements to Internet users. When a user opts out of having the Platform used to select ads based on online behavior, the unique value in uuid2 is deleted and replaced with the non-unique value “-1”.</td>
                                            <td rowspan="3">
                                                <a href="https://www.xandr.com/privacy/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>anj</td>
                                            <td>The anj cookie contains data denoting whether a cookie ID is synced with our partners.</td>
                                        </tr>
                                        <tr>
                                            <td>icu</td>
                                            <td>The icu cookie is used to select ads and limit the number of times a user sees a particular ad. It contains information such as the number of times an ad has been shown, how recently an ad has been shown, or how many total ads have been shown.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>Amazon APS</b> (Advertising)
                                            </td>
                                            <td>ad-id</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on ad clicks on a different website</td>
                                            <td rowspan="2">
                                                <a href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=201909010" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ad-privacy</td>
                                            <td>Used by Amazon Advertising to record user actions and target website content based on ad clicks on a different website</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adform</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://site.adform.com/privacy-center/adform-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adpone</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Recognize and analyze inventory available in our advertising spaces to offer our users advertising of interest. Campaign optimization, segmentation, frequency.</td>
                                            <td><a href="https://adpone.com/es/politica-de-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>RichAudience</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://richaudience.com/es/cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Smartadserver</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://smartadserver.com/end-user-privacy-policy/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sovrn</b> (Advertising)
                                            </td>
                                            <td></td>
                                            <td>Allows personalized advertising to be shown</td>
                                            <td><a href="https://www.sovrn.com/about-our-cookies/" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="11">
                                                <b>Index Exchange</b> (Advertising)
                                            </td>
                                            <td>CMPS</td>
                                            <td>Identify the main server for quick responses to the user's page</td>
                                            <td rowspan="11">
                                                <a href="https://www.indexexchange.com/privacy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CMTS</td>
                                            <td>Identify backup server for quick responses to user page</td>
                                        </tr>
                                        <tr>
                                            <td>CMGO</td>
                                            <td>Indicates if the user's primary server has changed</td>
                                        </tr>
                                        <tr>
                                            <td>CMTEST</td>
                                            <td>Confirm if cookies can be created for the user</td>
                                        </tr>
                                        <tr>
                                            <td>CMID</td>
                                            <td>Recognize web users that IndexExchange has seen before by browser. This is the cookie that is used to allow personalized advertising, among other uses</td>
                                        </tr>
                                        <tr>
                                            <td>CMPRO</td>
                                            <td>Identify server profile for quick responses to user page</td>
                                        </tr>
                                        <tr>
                                            <td>CMRUM3</td>
                                            <td>It contains a table that maps the IDs of Index Exchange's users with those of our bidding partners</td>
                                        </tr>
                                        <tr>
                                            <td>CMDD</td>
                                            <td>Measures how many unique pages a user has interacted with on a web property</td>
                                        </tr>
                                        <tr>
                                            <td>CMST</td>
                                            <td>Contains the duration of a session in a session</td>
                                        </tr>
                                        <tr>
                                            <td>CMSC</td>
                                            <td>Contains the start time of a user in a session</td>
                                        </tr>
                                        <tr>
                                            <td>CMO</td>
                                            <td>Indicates if the web user has chosen not to participate using behavioral advertising opt-out tools</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="10">
                                                <b>Improve Digital</b> (Advertising)
                                            </td>
                                            <td>tuuid</td>
                                            <td>To enable bidding process</td>
                                            <td rowspan="10">
                                                <a href="https://www.improvedigital.com/platform-privacy-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>tuuid_lu</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>pvt</td>
                                            <td>Tracks views to measure conversions</td>
                                        </tr>
                                        <tr>
                                            <td>ih</td>
                                            <td>To limit number of advertisements you see (frequency capping)</td>
                                        </tr>
                                        <tr>
                                            <td>fh</td>
                                            <td>Impression counter</td>
                                        </tr>
                                        <tr>
                                            <td>um</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>umeh</td>
                                            <td>To enable bidding process</td>
                                        </tr>
                                        <tr>
                                            <td>sh</td>
                                            <td>To limit number of advertisements you see (frequency capping)</td>
                                        </tr>
                                        <tr>
                                            <td>lcri5m</td>
                                            <td>Load creative</td>
                                        </tr>
                                        <tr>
                                            <td>lcai9h</td>
                                            <td>Load campaign impressions</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adagio</b>
                                            </td>
                                            <td></td>
                                            <td>Stores the Adagio user ID and the user ID of Adagio bidders.</td>
                                            <td><a href="https://adagio.io/privacy" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Sharethrough</b>
                                            </td>
                                            <td>stx_user_id</td>
                                            <td>This cookie is used for analytics, multivariate testing, and site optimisation.</td>
                                            <td><a href="https://www.sharethrough.com/privacy-center/consumer-privacy-notice" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="33">
                                                <b>Pubmatic</b> (Advertising)
                                            </td>
                                            <td>DPSync2</td>
                                            <td>These cookies maintain a list of our partner’s pixel IDs, which may be used to read and place cookies on a web browser, that have been synced with PubMatic IDs. This enables us to identify the partners with whom we have already synced our cookies and to ensure that we do not unnecessarily sync cookies again within a certain period of time.</td>
                                            <td rowspan="33">
                                                <a href="https://pubmatic.com/legal/platform-cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>KRTBCOOKIE_xxxx</td>
                                            <td>We use this cookie to correlate our user IDs with those of our partners (such as demand side platform clients or other advertising technology companies). We pass the information stored by the partner in this cookie to the partner when it is considering whether to purchase advertisements. This enables the partner to make better decisions about whether to display an advertisement to you.</td>
                                        </tr>
                                        <tr>
                                            <td>SyncRTB2</td>
                                            <td>These cookies maintain a list of our partner’s pixel IDs, which may be used to read and place cookies on a web browser, that have been synced with PubMatic IDs. This enables us to identify the partners with whom we have already synced our cookies and to ensure that we do not unnecessarily sync cookies again within a certain period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>SPugT</td>
                                            <td>This cookie is used to track when the server-side cookie store was last updated for the browser, and it is used in conjunction with the PugT cookie, described below.</td>
                                        </tr>
                                        <tr>
                                            <td>ipc</td>
                                            <td>This cookie is a short-lived cookie that stores information needed to coordinate cookie syncing.</td>
                                        </tr>
                                        <tr>
                                            <td>PMFREQ_ON</td>
                                            <td>This cookie ensures the proper functioning of the camfreq and pubfreq cookies, described above, in situations where one cookie may override the other.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBMDCID</td>
                                            <td>This cookie stores an ID for the applicable PubMatic data center that is used to display an advertisement in the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KTPCACOOKIE</td>
                                            <td>We use this cookie to check if third-party cookies are enabled on the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>KADUSERCOOKIE</td>
                                            <td>We use this cookie to uniquely identify each browser or device from which an individual user visits our partners’ websites.</td>
                                        </tr>
                                        <tr>
                                            <td>pi</td>
                                            <td>This cookie enables us to determine which set of pixels needs to be executed on the browser.</td>
                                        </tr>
                                        <tr>
                                            <td>PugT</td>
                                            <td>This cookie tracks when cookies were updated on the browser, in order to limit the number of calls to the server-side cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>KCCH</td>
                                            <td>This cookie ensures that a PubMatic user ID is already set and that PubMatic’s code is running properly.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBRETARGET</td>
                                            <td>We use this cookie to indicate if a user can be considered for various re-targeting ad campaigns running on the Platform. For example, we may use it to determine whether to show you an advertisement that relates to a product or service that you previously viewed on an advertiser’s website.</td>
                                        </tr>
                                        <tr>
                                            <td>COKENBLD</td>
                                            <td>This cookie sets a flag to “true” if cookies are enabled on the user’s browser.</td>
                                        </tr>
                                        <tr>
                                            <td>USCC</td>
                                            <td>This cookie enables PubMatic to sync user IDs properly in situations where multiple advertisements might appear on the same webpage.</td>
                                        </tr>
                                        <tr>
                                            <td>DPPIX_ON and SYNCUPPIX_ON</td>
                                            <td>These cookies enable PubMatic to properly sync cookie IDs with our partners by ensuring that our partners do not override each other during the sync process.</td>
                                        </tr>
                                        <tr>
                                            <td>PUBUIDSYNCUPFQ</td>
                                            <td>This cookie indicates the last time that we synced IDs with our partner.</td>
                                        </tr>
                                        <tr>
                                            <td>camfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each campaign and indicates the number of times (e.g., frequency) that a particular advertisement may have been shown on the applicable publisher site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubfreq_&lt;SITEID&gt;</td>
                                            <td>This cookie is set for each advertising network and indicates the number of times (e.g., frequency) that a particular advertisement may have been shown on the applicable publisher site.</td>
                                        </tr>
                                        <tr>
                                            <td>pubtime_&lt;SITEID&gt;</td>
                                            <td>This cookie stores the period of time after which ad frequency counters reset.</td>
                                        </tr>
                                        <tr>
                                            <td>DPFQ</td>
                                            <td>This cookie stores information regarding the number of times that a partner’s pixel is loaded by a user’s browser. This enables us to cap the number of times that a pixel is used to record a user’s visit to a website within a specific period of time.</td>
                                        </tr>
                                        <tr>
                                            <td>repi</td>
                                            <td>This cookie is a short-lived cookie that is used to determine if repixeling is in progress.</td>
                                        </tr>
                                        <tr>
                                            <td>pp</td>
                                            <td>This cookie tracks the last publisher website that you visited that contained an advertisement served by PubMatic.</td>
                                        </tr>
                                        <tr>
                                            <td>FPtrust</td>
                                            <td>This cookie is a session cookie used to support the opt-out process via the Network Advertising Initiative.</td>
                                        </tr>
                                        <tr>
                                            <td>_curtime</td>
                                            <td>This cookie stores the current timestamp.</td>
                                        </tr>
                                        <tr>
                                            <td>ipc</td>
                                            <td>This cookie is a short-lived cookie that stores information needed to coordinate cookie syncing.</td>
                                        </tr>
                                        <tr>
                                            <td>PMDTSHR</td>
                                            <td>This cookie is set for Komli ad server and is used for default impression when other data is not available.</td>
                                        </tr>
                                        <tr>
                                            <td>dV</td>
                                            <td>This cookie is used to save the user’s preferences and other information.</td>
                                        </tr>
                                        <tr>
                                            <td>UND</td>
                                            <td>This cookie stores the user network default.</td>
                                        </tr>
                                        <tr>
                                            <td>SSCS</td>
                                            <td>This cookie calls a cookie store.</td>
                                        </tr>
                                        <tr>
                                            <td>chk and chkSecSet</td>
                                            <td>This cookie is set on Google Chrome browsers that have a version less 67 or non-Chrome browsers, and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>chkChromeAb67 and chkChromeAb67Sec</td>
                                            <td>This cookie is set on Google Chrome browsers that have a version above 67 and is used for testing purposes.</td>
                                        </tr>
                                        <tr>
                                            <td>PM-UL-Sync</td>
                                            <td>This cookie is used to execute some custom UserSync integrations such as DigiTrust.</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Adman media</b> (Advertising)
                                            </td>
                                            <td>admtr<br>
                                                sdr_id<br>
                                                ired</td>
                                            <td>To identify the user and is saved with a randomly generated identifier.<br>
                                                ADman Media also inserts cookies from third-party partners (such as Demand Side Platforms - DSPs - or other SSPs) so that they can compare their cookie with that of ADman Media and thus be able to offer services to their customers.</td>
                                            <td><a href="http://admanmedia.com/politica.html?setLng=es" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>Vidoomy</b> (Advertising)
                                            </td>
                                            <td>uids</td>
                                            <td>Collect the IP, in order to know which country it is and assign the corresponding campaigns.</td>
                                            <td rowspan="2">
                                                <a href="https://vidoomy.com/privacy-policy-en.html" target="_blank">Here</a>
                                        </tr>
                                        <tr>
                                            </td>
                                            <td>vidoomy-uids</td>
                                            <td>Collect the IP, in order to know which country it is and assign the corresponding campaigns.
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="9">
                                                <b>Liveramp</b> (Advertising)
                                            </td>
                                            <td>rlas3</td>
                                            <td>Contains Liveramps unique identifier and allows Liveramp to deterministically link the user</td>
                                            <td rowspan="9">
                                                <a href="https://liveramp.com/cookies-101/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>pxrc</td>
                                            <td>Contains information about LiveRamp cookie syncs triggered off the back of this browser. Used to facilitate cookie sync priority queue. (this cookie does NOT contain or process personal data)</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_retry_request</td>
                                            <td>Used to tell LiveRamp ATS whether or not to retry a call (stops more than one simultaneous API call)</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_geo_location</td>
                                            <td>Tells LiveRamp tags where the user is based</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_drop_match_pixel</td>
                                            <td>Tells LiveRamps tags whether our match pixel (which sets the rlas3 and pxrc cookies) have recently been fired</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env_src_ats</td>
                                            <td>Tells LiveRamps what the source of the "_lr_env" value is</td>
                                        </tr>
                                        <tr>
                                            <td>_lr_env</td>
                                            <td>Contains the Ramp ID envelope used to provide addressability in a cookieless manner.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>ContentSquare</b>
                                            </td>
                                            <td>_cs_id</td>
                                            <td>This cookie contains the ContentSquare user ID.</td>
                                            <td rowspan="7">
                                                <a href="https://www.contentsquare.com/privacy-and-security/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_cs_s</td>
                                            <td>This cookie contains the number of page views within the current session for ContentSquare Solution.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_vars</td>
                                            <td>This cookie is used by ContentSquare to record custom variables.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_ex</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_c</td>
                                            <td>This cookie is used by ContentSquare to store the user's consent to be tracked</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_optout</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_mk</td>
                                            <td>This cookie is used for Google Analytics and Adobe Analytics integrations.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>OneTrust</b>
                                            </td>
                                            <td>OptanonConsent</td>
                                            <td rowspan="2">OptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td rowspan="2">
                                                <a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OptanonAlertBoxClosed</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>Google Optimize</b>
                                            </td>
                                            <td>_gaexp</td>
                                            <td rowspan="2">Used to determine the inclusion of a user in an experiment and the duration of the experiments in which they participate.</td>
                                            <td rowspan="7">
                                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es-419#experiments" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awcid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awmid</td>
                                            <td rowspan="2">Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awgid</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_awkid</td>
                                            <td rowspan="2">Used for campaigns associated with Google Ads campaign IDs.</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_utmc</td>
                                        </tr>
                                        <tr>
                                            <td>_opt_expid</td>
                                            <td>This cookie is created when running a redirect experiment. It stores the experiment ID, the variant ID and the referring URL of the page being redirected to.
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h5 id="cookie-type-fpcompany" class="font-lg">Third-party cookies in <a href="https://www.freepikcompany.com/" target="_blank">www.freepikcompany.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td>
                                                <b>Google Analytics</b> (Analysis)
                                            </td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Here</a></td>
                                        </tr>
                                        <tr class="border">
                                            <td>
                                                <b>Hotjar</b> (Analysis)
                                            </td>
                                            <td>Heat map to analyze user behavior on the different pages of the web. Hotjar cookies collect standard registration information and data on the habits of visitors anonymously. More information: https://www.hotjar.com/terms. They are used to measure web activity and to create user navigation profiles in order to introduce improvements based on the analysis of user usage data.</td>
                                            <td><a href="https://help.hotjar.com/hc/en-us/articles/115011789248" target="_blank">Here</a></td>
                                        </tr>
                                        <tr class="border">
                                            <td>
                                                <b>Pinterest</b> (Advertising / Analysis)
                                            </td>
                                            <td>We will impact users who have visited the website or are registered on it with an advertising banner, we will use the data of registered users so as not to impact campaigns whose objective is premium subscription and we will look for users with similar online behavior to registered users or who have visited the web. This set of data will be used both to reach our target audience through online campaign segmentation and to measure their results.</td>
                                            <td><a href="https://policy.pinterest.com/es/cookies" target="_blank">Here</a></td>
                                        </tr>
                                        <tr class="border">
                                            <td>
                                                <b>Google Tag Manager</b> (Advertising / Analysis)
                                            </td>
                                            <td>Google Tag Manager is a tag management system that allows third parties to add functionality to websites, video content, and mobile applications. Examples of such solutions include web analytics, campaign analytics, audience measurement, personalization, allows you to quickly and easily update tags and code snippets on a website or your mobile applications, such as those intended for analytics traffic and optimize marketing campaigns. You can add and update custom, third-party or AdWords tags, Google Analytics, Firebase Analytics and Floodlight, Facebbok Ads, Twitter Ads, Hotjar. It is used in order to manage the different conversion codes of the online Marketing and retargeting tools</td>
                                            <td><a href="https://support.google.com/tagmanager/answer/6102821?hl=en" target="_blank">Here</a></td>
                                        </tr>
                                        <tr class="border">
                                            <td>
                                                <b>OneTrust</b>
                                            </td>
                                            <td>GOptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td><a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h5 id="cookie-type-wepik" class="font-lg">Third-party cookies in <a href="https://www.wepik.com/" target="_blank">www.wepik.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>COOKIE</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td><b>Google Analytics</b> (Analysis)</td>
                                            <td></td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>CloudFlare</b> (Performance / Functionality)</td>
                                            <td>_cflb, _cf_bm y _cfduid</td>
                                            <td>It is used to override any security restrictions based on the IP address the visitor is coming from. It does not correspond to any user identification in the web application, nor does the cookie store any personally identifiable information</td>
                                            <td><a href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Pinterest</b> (Advertising / Analysis)</td>
                                            <td></td>
                                            <td>We will impact users who have visited the website or are registered on it with an advertising banner, we will use the data of registered users so as not to impact campaigns whose objective is premium subscription and we will look for users with similar online behavior to registered users or who have visited the web. This set of data will be used both to reach our target audience through online campaign segmentation and to measure their results.</td>
                                            <td><a href="https://policy.pinterest.com/es/cookies" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Tag Manager</b> (Advertising / Analysis)</td>
                                            <td></td>
                                            <td>Google Tag Manager is a tag management system that allows third parties to add functionality to websites, video content, and mobile applications. Examples of such solutions include web analytics, campaign analytics, audience measurement, personalization, allows you to quickly and easily update tags and code snippets on a website or your mobile applications, such as those intended for analytics traffic and optimize marketing campaigns. You can add and update custom, third-party or AdWords tags, Google Analytics, Firebase Analytics and Floodlight, Facebbok Ads, Twitter Ads, Hotjar. It is used in order to manage the different conversion codes of the online Marketing and retargeting tools</td>
                                            <td><a href="https://support.google.com/tagmanager/answer/6102821?hl=en" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="4">
                                                <b>Salesforce</b> (Performance)
                                            </td>
                                            <td>sfdc-stream</td>
                                            <td>Used to properly route server requests within Salesforce infrastructure for sticky sessions.</td>
                                            <td rowspan="4">
                                                <a href="https://support.google.com/tagmanager/answer/6102821?hl=en" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CookieConsentPolicy</td>
                                            <td>Used to apply end-user cookie consent preferences set by our client-side utility.</td>
                                        </tr>
                                        <tr>
                                            <td>pctrk</td>
                                            <td>Used to track unique page visitors in Experiences.</td>
                                        </tr>
                                        <tr>
                                            <td>renderCtx</td>
                                            <td>Used to store site parameters in the session for reuse across requests by a single client for functionality and performance reasons.</td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>OneTrust</b>
                                            </td>
                                            <td>OptanonConsent</td>
                                            <td rowspan="2">OptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td rowspan="2">
                                                <a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OptanonAlertBoxClosed</td>
                                        </tr>

                                        <tr class="border">
                                            <td><b>Google Ads</b> (Advertising / Analysis)
                                            </td>
                                            <td></td>
                                            <td>We collect data from visitors to our pages to analyze behavior and impact them with our ads if they finally do not register or do not subscribe. Also, to be able to impact users similar to those who visit us or similar to those registered or subscribed that are not clients.</td>
                                            <td><a href="https://policies.google.com/privacy?hl=es" target="_blank">Here</a>
                                            </td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="7">
                                                <b>ContentSquare</b>
                                            </td>
                                            <td>_cs_id</td>
                                            <td>This cookie contains the ContentSquare user ID.</td>
                                            <td rowspan="7">
                                                <a href="https://www.contentsquare.com/privacy-and-security/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>_cs_s</td>
                                            <td>This cookie contains the number of page views within the current session for ContentSquare Solution.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_vars</td>
                                            <td>This cookie is used by ContentSquare to record custom variables.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_ex</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_c</td>
                                            <td>This cookie is used by ContentSquare to store the user's consent to be tracked</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_optout</td>
                                            <td>This cookie is used by ContentSquare to exclude some visitors from the collection.</td>
                                        </tr>
                                        <tr>
                                            <td>_cs_mk</td>
                                            <td>This cookie is used for Google Analytics and Adobe Analytics integrations.</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h5 id="cookie-type-storyset" class="font-lg">Third-party cookies in <a href="http://www.storyset.com" target="_blank">www.storyset.com</a></h5>
                            <div class="table overflow_table">
                                <table class="cookies_table font-sm">
                                    <thead>
                                        <tr>
                                            <td>THIRD PARTY</td>
                                            <td>COOKIE</td>
                                            <td>DESCRIPTION</td>
                                            <td>MORE INFO</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="border">
                                            <td><b>Google Analytics</b> (Analysis)</td>
                                            <td></td>
                                            <td>We collect information of how users interact with the content of the web. When a user browses the pages of a website, information about the page the user has viewed is colected; for example, URL, time spent on the website, number of pages viewed. It allows us to generate labels or objectives to know if you have bought, what item, how many times ... It also collects demographic and navigation data, that is; where does the user come from, how does he get to our website or what campaign does he come from</td>
                                            <td><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Here</a></td>
                                        </tr>

                                        <tr class="border">
                                            <td rowspan="2">
                                                <b>OneTrust</b>
                                            </td>
                                            <td>OptanonConsent</td>
                                            <td rowspan="2">OptanonConsent and OptanonAlertBoxClosed are cookies related to our Cookie Compliance Solution. They are used to store your preferences with regards to cookies and other trackers and identify and interpret user interactions with the banner (for example, closing a banner means rejection of non-essential trackers).</td>
                                            <td rowspan="2">
                                                <a href="https://www.onetrust.com/cookie-policy/" target="_blank">Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OptanonAlertBoxClosed</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="cookie-update">
                            <h4 class="font-xl uppercase">III. Changes in the cookie policy</h4>
                            <p>We recommend that you review this cookie policy each time you connect to our Websites. Freepik reserves the right to modify its content at any given time.</p>
                            <p>In any case, Freepik will notify or announce the new content and the dates on which a revision of these terms occurs, for the information of its users.</p>
                            <p><b>Last edited: November 2023</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer id="footer" class="footer__2022">
        <div class="footer__top pd-lv3 pd-x-none">
            <div class="container">
                <div class="row alignl font-sm">

                    <div class="col__xs--12 col__md--8 col__lg--9">
                        <div class="row">

                            <div class="col__xs--12 col__md--4 footer__menu footer__link">
                                <input type="checkbox" id="footer-content" />
                                <label for="footer-content" class="font-h6 first heading-inverted font-md" tabindex="0">Content</label>
                                <ul class="footer-content-list font-sm">
                                    <li>
                                        <a class="link-inverted" href="https://www.freepikcompany.com/about_us">About us</a>
                                    </li>
                                    <li>
                                        <a class="link-inverted" href="https://www.freepikcompany.com/jobs">Jobs</a>
                                    </li>
                                    <li>
                                        <a class="link-inverted" href="https://www.freepikcompany.com/freelancers">Freelancers</a>
                                    </li>
                                    <li>
                                        <a class="link-inverted" href="https://www.freepikcompany.com/business">Business</a>
                                    </li>
                                    <li>
                                        <a class="link-inverted" href="https://www.freepikcompany.com/#home__projects">Projects</a>
                                    </li>
                                    <li>
                                        <a class="link-inverted" target="_blank" href="https://www.freepikcompany.com/newsroom/?utm_source=freepikcompany&utm_medium=referral-content&utm_campaign=footer&utm_term=blog">Blog</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col__xs--12 col__md--4 footer__menu footer__link">
                                <input type="checkbox" id="footer-extra" />
                                <label for="footer-extra" class="font-h6 first heading-inverted font-md" tabindex="0">Extra</label>
                                <ul class="footer-content-list font-sm">
                                    <li><a class="link-inverted" target="_blank" href="https://design.freepikcompany.com/?utm_source=freepikcompany&utm_medium=referral-content&utm_campaign=footer&utm_term=styleguide">Styleguide</a></li>
                                    <li><a class="link-inverted" target="_blank" href="https://contributor.freepik.com/?utm_source=freepikcompany&utm_medium=referral-content&utm_campaign=footer&utm_term=contributor">Freepik contributor</a></li>
                                    <li><a class="link-inverted" target="_blank" href="https://www.freepik.com/profile/support?flash_digest=5845e2ed004966e323c2ed7aaf31e04c99dbd734&utm_source=freepikcompany">Contact</a></li>
                                </ul>
                            </div>
                            <div class="col__xs--12 col__md--4 footer__menu footer__link">
                                <input type="checkbox" id="footer-legal" />
                                <label for="footer-legal" class="font-h6 first heading-inverted font-md" tabindex="0">Legal</label>
                                <ul class="footer-content-list font-sm">
                                    <li><a class="link-inverted" target="_blank" rel="noopener noreferrer" href="https://www.freepikcompany.com/legal">Terms and conditions</a></li>
                                    <li><a class="link-inverted" target="_blank" rel="noopener noreferrer" href="https://www.freepikcompany.com/privacy">Privacy policy</a></li>
                                    <li><a class="link-inverted" target="_blank" rel="noopener noreferrer" href="https://www.freepikcompany.com/cookie">Cookies policy</a></li>
                                    <li id="link-cookie-settings">
                                        <!-- OneTrust Cookies Settings button start -->
                                        <button class="link link-inverted ot-sdk-show-settings" id="ot-sdk-btn">Cookies settings</button>
                                        <!-- OneTrust Cookies Settings button end -->
                                    </li>
                                    <li><a class="link-inverted" target="_blank" rel="noopener noreferrer" href="https://www.freepikcompany.com/copyright">Copyright</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div class="col__xs--12 col__md--4 col__lg--3 footer__menu">
                        <h6 class="font-h6 first heading-inverted mg-bottom-lv2">Social</h6>
                        <ul class="footer__social">
                            <li>
                                <a href="https://www.facebook.com/Freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--facebook">
                                    <i class="icon icon--md icon--mg-sm icon--facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--twitter">
                                    <i class="icon icon--md icon--mg-sm icon--twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.es/freepik/" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--pinterest">
                                    <i class="icon icon--md icon--mg-sm icon--pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/freepik/?hl=es" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--instagram">
                                    <i class="icon icon--md icon--mg-sm icon--instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://es.linkedin.com/company/freepik-company" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--linkedin">
                                    <i class="icon icon--md icon--mg-sm icon--linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com/freepik" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--dribbble">
                                    <i class="icon icon--md icon--mg-sm icon--dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC9wPXN2TIWoUamqONb7v8Pw" target="_blank" class="button button--flat button--sm button--icon button--icon--only button--youtube">
                                    <i class="icon icon--md icon--mg-sm icon--youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="container">
                <div class="row mg-none">
                    <div class="col mg-none">
                        <div class="footer__bottom--container">
                            <div class="footer__bottom--info">
                                <a href="https://www.freepikcompany.com/" target="_blank" rel="noopener noreferrer" class="logo" title="Freepik Company">
                                    <img src="https://www.freepikcompany.com/img/b2b/freepikcompany-footer.svg" alt="Freepik Company" width="191" height="27" class="block" />
                                </a>
                                <p class="text__general--text-inverted mg-none">
                                    <span class="copyright">Copyright</span>&nbsp;&copy;&nbsp; 2010-2023 Freepik Company S.L. <span class="rights-reserved">All rights reserved</span>
                                </p>
                            </div>

                            <div class="dropdown dropdown--top-right dropdown--inverted">
                                <select id="language" name="language">
                                    <option selected="selected" value="https://www.freepikcompany.com/cookie">English</option>
                                    <option value="https://www.freepikcompany.com/es/cookie">Español</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__project">
            <div class="container">
                <div class="row">
                    <div class="col__xs--12 mg-y-none-i">
                        <div class="footer__project--container">
                            <h6 class="mg-y-none-i">Freepik Company projects</h6>
                            <div id="footerProjects">
                                <ul>
                                    <li><a class="bold" rel="noopener noreferrer" target="_blank" href="https://www.freepik.com/">Freepik</a></li>
                                    <li><a class="bold" rel="noopener noreferrer" target="_blank" href="https://www.flaticon.com/">Flaticon</a></li>
                                    <li><a class="bold" rel="noopener noreferrer" target="_blank" href="https://www.slidesgo.com/">Slidesgo</a></li>
                                    <li><a class="bold" rel="noopener noreferrer" target="_blank" href="https://www.wepik.com/">Wepik</a></li>
                                    <li><a class="bold" rel="noopener noreferrer" target="_blank" href="https://www.videvo.net/">Videvo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script src="https://www.freepikcompany.com/dist/js/script-footer.js"></script>

    <!-- LOTTIE -->
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-19303147-31"></script>

    <script>

        window.dataLayer = window.dataLayer || [];

        function gtag() { dataLayer.push(arguments); }

        gtag('js', new Date());

        gtag('config', 'UA-19303147-31');

    </script><!-- Facebook Pixel Code -->

    <script>

        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?

                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };

            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';

            n.queue = []; t = b.createElement(e); t.async = !0;

            t.src = v; s = b.getElementsByTagName(e)[0];

            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',

            'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1470657753234558');

        fbq('track', 'PageView');

    </script>

    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1470657753234558&ev=PageView&noscript=1" /></noscript><!-- Hotjar Tracking Code for https://www.freepikcompany.com/ -->
    <script>
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1788104, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>
</body>

</html>