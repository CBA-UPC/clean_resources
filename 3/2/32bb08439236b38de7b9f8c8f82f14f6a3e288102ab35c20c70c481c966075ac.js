/*! For license information please see pushly-sdk.min.js.LICENSE */
(()=>{var t={"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/sdk/styles/bell.scss":(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var s=t("./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(s),i=t("./node_modules/css-loader/dist/runtime/api.js"),t=t.n(i)()(s());t.push([e.id,"@media print {\n  .pushly_bell {\n    display: none !important;\n  }\n}\n.pushly_bell {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  /* desktop positioning */\n  /* mobile positioning */\n}\n.pushly_bell:not(.managed) {\n  position: fixed;\n  z-index: 1000000;\n  transition: all 0.5s ease;\n}\n.pushly_bell.subscribed .pushly_bell-tooltip-notsubscribed {\n  display: none;\n}\n.pushly_bell.subscribed svg {\n  opacity: 0.7;\n}\n.pushly_bell:not(.subscribed) .pushly_bell-tooltip-subscribed {\n  display: none;\n}\n.pushly_bell.hover svg {\n  opacity: 0.7;\n}\n.pushly_bell.hover .pushly_bell-tooltip {\n  opacity: 1;\n}\n.pushly_bell svg {\n  z-index: 1;\n  transition: all 0.5s ease;\n  box-shadow: 0px 1px 3px #888;\n  border-radius: 1000px;\n  cursor: pointer;\n}\n.pushly_bell .pushly_bell-tooltip {\n  transition: all 0.5s ease;\n  position: relative;\n  opacity: 0;\n  pointer-events: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 7.5px;\n  margin-left: 7.5px;\n}\n.pushly_bell .pushly_bell-tooltip .pushly_bell-tooltip-text {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-size: 13px;\n}\n.pushly_bell .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n  position: relative;\n  width: 15px;\n  height: 15px;\n  border-radius: 1px;\n  transform: rotate(45deg);\n}\n@media screen and (min-width: 768px) {\n  .pushly_bell.d-top-left {\n    top: 40px;\n    left: -200px;\n  }\n  .pushly_bell.d-top-left.hover .pushly_bell-tooltip {\n    left: 0;\n  }\n  .pushly_bell.d-top-left .pushly_bell-tooltip {\n    left: -30px;\n  }\n  .pushly_bell.d-top-left .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    left: 7.5px;\n  }\n  .pushly_bell.d-top-left.pushly-prompt-visible {\n    left: 40px;\n  }\n  .pushly_bell.d-top-right {\n    top: 40px;\n    right: -200px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.d-top-right.hover .pushly_bell-tooltip {\n    right: 0;\n  }\n  .pushly_bell.d-top-right .pushly_bell-tooltip {\n    right: -30px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.d-top-right .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    right: 7.5px;\n  }\n  .pushly_bell.d-top-right.pushly-prompt-visible {\n    right: 40px;\n  }\n  .pushly_bell.d-bottom-left {\n    bottom: 40px;\n    left: -200px;\n  }\n  .pushly_bell.d-bottom-left.hover .pushly_bell-tooltip {\n    left: 0;\n  }\n  .pushly_bell.d-bottom-left .pushly_bell-tooltip {\n    left: -30px;\n  }\n  .pushly_bell.d-bottom-left .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    left: 7.5px;\n  }\n  .pushly_bell.d-bottom-left.pushly-prompt-visible {\n    left: 40px;\n  }\n  .pushly_bell.d-bottom-right {\n    bottom: 40px;\n    right: -200px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.d-bottom-right.hover .pushly_bell-tooltip {\n    right: 0;\n  }\n  .pushly_bell.d-bottom-right .pushly_bell-tooltip {\n    right: -30px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.d-bottom-right .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    right: 7.5px;\n  }\n  .pushly_bell.d-bottom-right.pushly-prompt-visible {\n    right: 40px;\n  }\n  .pushly_bell.d-disabled {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .pushly_bell.m-top-left {\n    top: 40px;\n    left: -200px;\n  }\n  .pushly_bell.m-top-left.hover .pushly_bell-tooltip {\n    left: 0;\n  }\n  .pushly_bell.m-top-left .pushly_bell-tooltip {\n    left: -30px;\n  }\n  .pushly_bell.m-top-left .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    left: 7.5px;\n  }\n  .pushly_bell.m-top-left.pushly-prompt-visible {\n    left: 40px;\n  }\n  .pushly_bell.m-top-right {\n    top: 40px;\n    right: -200px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.m-top-right.hover .pushly_bell-tooltip {\n    right: 0;\n  }\n  .pushly_bell.m-top-right .pushly_bell-tooltip {\n    right: -30px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.m-top-right .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    right: 7.5px;\n  }\n  .pushly_bell.m-top-right.pushly-prompt-visible {\n    right: 40px;\n  }\n  .pushly_bell.m-bottom-left {\n    bottom: 40px;\n    left: -200px;\n  }\n  .pushly_bell.m-bottom-left.hover .pushly_bell-tooltip {\n    left: 0;\n  }\n  .pushly_bell.m-bottom-left .pushly_bell-tooltip {\n    left: -30px;\n  }\n  .pushly_bell.m-bottom-left .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    left: 7.5px;\n  }\n  .pushly_bell.m-bottom-left.pushly-prompt-visible {\n    left: 40px;\n  }\n  .pushly_bell.m-bottom-right {\n    bottom: 40px;\n    right: -200px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.m-bottom-right.hover .pushly_bell-tooltip {\n    right: 0;\n  }\n  .pushly_bell.m-bottom-right .pushly_bell-tooltip {\n    right: -30px;\n    flex-direction: row-reverse;\n  }\n  .pushly_bell.m-bottom-right .pushly_bell-tooltip .pushly_bell-tooltip-arrow {\n    right: 7.5px;\n  }\n  .pushly_bell.m-bottom-right.pushly-prompt-visible {\n    right: 40px;\n  }\n  .pushly_bell.m-disabled {\n    display: none;\n  }\n}","",{version:3,sources:["webpack://./src/sdk/styles/bell.scss"],names:[],mappings:"AAKA;EACI;IACI,wBAAA;EAJN;AACF;AAOA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EA4EA,wBAAA;EA0GA,uBAAA;AAzLJ;AAKI;EACI,eAAA;EACA,gBAAA;EACA,yBAAA;AAHR;AAOQ;EACI,aAAA;AALZ;AAQQ;EACI,YAAA;AANZ;AAWQ;EACI,aAAA;AATZ;AAcQ;EACI,YAAA;AAZZ;AAeQ;EACI,UAAA;AAbZ;AAiBI;EACI,UAAA;EACA,yBAAA;EACA,4BAAA;EACA,qBAAA;EACA,eAAA;AAfR;AAkBI;EACI,yBAAA;EAEA,kBAAA;EAEA,UAAA;EACA,oBAAA;EAEA,aAAA;EACA,mBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,kBAAA;AApBR;AAsBQ;EACI,iBAAA;EACA,kBAAA;EAEA,eAAA;AArBZ;AAwBQ;EACI,kBAAA;EAEA,WA/EA;EAgFA,YAhFA;EAkFA,kBAAA;EAEA,wBAAA;AAzBZ;AA+BI;EACI;IACI,SAAA;IACA,YAAA;EA7BV;EAgCc;IACI,OAAA;EA9BlB;EAkCU;IACI,WAAA;EAhCd;EAkCc;IACI,WAAA;EAhClB;EAoCU;IACI,UAAA;EAlCd;EAsCM;IACI,SAAA;IACA,aAAA;IAEA,2BAAA;EArCV;EAwCc;IACI,QAAA;EAtClB;EA0CU;IACI,YAAA;IACA,2BAAA;EAxCd;EA0Cc;IACI,YAAA;EAxClB;EA4CU;IACI,WAAA;EA1Cd;EA8CM;IACI,YAAA;IACA,YAAA;EA5CV;EA+Cc;IACI,OAAA;EA7ClB;EAiDU;IACI,WAAA;EA/Cd;EAiDc;IACI,WAAA;EA/ClB;EAmDU;IACI,UAAA;EAjDd;EAqDM;IACI,YAAA;IACA,aAAA;IAEA,2BAAA;EApDV;EAuDc;IACI,QAAA;EArDlB;EAyDU;IACI,YAAA;IACA,2BAAA;EAvDd;EAyDc;IACI,YAAA;EAvDlB;EA2DU;IACI,WAAA;EAzDd;EA6DM;IACI,aAAA;EA3DV;AACF;AAgEI;EACI;IACI,SAAA;IACA,YAAA;EA9DV;EAiEc;IACI,OAAA;EA/DlB;EAmEU;IACI,WAAA;EAjEd;EAmEc;IACI,WAAA;EAjElB;EAqEU;IACI,UAAA;EAnEd;EAuEM;IACI,SAAA;IACA,aAAA;IAEA,2BAAA;EAtEV;EAyEc;IACI,QAAA;EAvElB;EA2EU;IACI,YAAA;IACA,2BAAA;EAzEd;EA2Ec;IACI,YAAA;EAzElB;EA6EU;IACI,WAAA;EA3Ed;EA+EM;IACI,YAAA;IACA,YAAA;EA7EV;EAgFc;IACI,OAAA;EA9ElB;EAkFU;IACI,WAAA;EAhFd;EAkFc;IACI,WAAA;EAhFlB;EAoFU;IACI,UAAA;EAlFd;EAsFM;IACI,YAAA;IACA,aAAA;IAEA,2BAAA;EArFV;EAwFc;IACI,QAAA;EAtFlB;EA0FU;IACI,YAAA;IACA,2BAAA;EAxFd;EA0Fc;IACI,YAAA;EAxFlB;EA4FU;IACI,WAAA;EA1Fd;EA8FM;IACI,aAAA;EA5FV;AACF",sourcesContent:['@import "variables";\n\n$arrowSize: 15px;\n$tooltipAnimationDisplacement: 30px;\n\n@media print {\n    .pushly_bell {\n        display: none !important;\n    }\n}\n\n.pushly_bell {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    &:not(.managed) {\n        position: fixed;\n        z-index: 1000000;\n        transition: all 0.5s ease;\n    }\n\n    &.subscribed {\n        .pushly_bell-tooltip-notsubscribed {\n            display: none;\n        }\n\n        svg {\n            opacity: 0.7;\n        }\n    }\n\n    &:not(.subscribed) {\n        .pushly_bell-tooltip-subscribed {\n            display: none;\n        }\n    }\n\n    &.hover {\n        svg {\n            opacity: 0.7;\n        }\n\n        .pushly_bell-tooltip {\n            opacity: 1;\n        }\n    }\n\n    svg {\n        z-index: 1;\n        transition: all 0.5s ease;\n        box-shadow: 0px 1px 3px #888;\n        border-radius: 1000px;\n        cursor: pointer;\n    }\n\n    .pushly_bell-tooltip {\n        transition: all 0.5s ease;\n\n        position: relative;\n\n        opacity: 0;\n        pointer-events: none;\n\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        margin-right: calc($arrowSize/2);\n        margin-left: calc($arrowSize/2);\n\n        .pushly_bell-tooltip-text {\n            padding: 8px 16px;\n            border-radius: 3px;\n\n            font-size: 13px;\n        }\n\n        .pushly_bell-tooltip-arrow {\n            position: relative;\n\n            width: $arrowSize;\n            height: $arrowSize;\n\n            border-radius: 1px;\n\n            transform: rotate(45deg);\n        }\n    }\n\n    /* desktop positioning */\n\n    @media screen and (min-width: $mobile-max-size) {\n        &.d-top-left {\n            top: 40px;\n            left: -200px;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    left: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                left: -$tooltipAnimationDisplacement;\n\n                .pushly_bell-tooltip-arrow {\n                    left: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                left: 40px;\n            }\n        }\n\n        &.d-top-right {\n            top: 40px;\n            right: -200px;\n\n            flex-direction: row-reverse;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    right: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                right: -$tooltipAnimationDisplacement;\n                flex-direction: row-reverse;\n\n                .pushly_bell-tooltip-arrow {\n                    right: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                right: 40px;\n            }\n        }\n\n        &.d-bottom-left {\n            bottom: 40px;\n            left: -200px;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    left: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                left: -$tooltipAnimationDisplacement;\n\n                .pushly_bell-tooltip-arrow {\n                    left: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                left: 40px;\n            }\n        }\n\n        &.d-bottom-right {\n            bottom: 40px;\n            right: -200px;\n\n            flex-direction: row-reverse;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    right: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                right: -$tooltipAnimationDisplacement;\n                flex-direction: row-reverse;\n\n                .pushly_bell-tooltip-arrow {\n                    right: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                right: 40px;\n            }\n        }\n\n        &.d-disabled {\n            display: none;\n        }\n    }\n\n    /* mobile positioning */\n\n    @media screen and (max-width: $mobile-max-size) {\n        &.m-top-left {\n            top: 40px;\n            left: -200px;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    left: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                left: -$tooltipAnimationDisplacement;\n\n                .pushly_bell-tooltip-arrow {\n                    left: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                left: 40px;\n            }\n        }\n\n        &.m-top-right {\n            top: 40px;\n            right: -200px;\n\n            flex-direction: row-reverse;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    right: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                right: -$tooltipAnimationDisplacement;\n                flex-direction: row-reverse;\n\n                .pushly_bell-tooltip-arrow {\n                    right: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                right: 40px;\n            }\n        }\n\n        &.m-bottom-left {\n            bottom: 40px;\n            left: -200px;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    left: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                left: -$tooltipAnimationDisplacement;\n\n                .pushly_bell-tooltip-arrow {\n                    left: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                left: 40px;\n            }\n        }\n\n        &.m-bottom-right {\n            bottom: 40px;\n            right: -200px;\n\n            flex-direction: row-reverse;\n\n            &.hover {\n                .pushly_bell-tooltip {\n                    right: 0;\n                }\n            }\n\n            .pushly_bell-tooltip {\n                right: -$tooltipAnimationDisplacement;\n                flex-direction: row-reverse;\n\n                .pushly_bell-tooltip-arrow {\n                    right: calc($arrowSize/2);\n                }\n            }\n\n            &.pushly-prompt-visible {\n                right: 40px;\n            }\n        }\n\n        &.m-disabled {\n            display: none;\n        }\n    }\n}\n'],sourceRoot:""}]);const o=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/sdk/styles/popover.scss":"./node_modules/css-loader/dist/runtime/api.js":"./node_modules/css-loader/dist/runtime/sourceMaps.js":"./node_modules/error-stack-parser/error-stack-parser.js":"./node_modules/stackframe/stackframe.js":"./src/sdk/styles/bell.scss":(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var s=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(s),i=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=t.n(i),o=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(o),n=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=t.n(n),r=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),r=t.n(r),p=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=t.n(p),t=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/sdk/styles/bell.scss"),l={};l.styleTagTransform=p(),l.setAttributes=n(),l.insert=o().bind(null,"head"),l.domAPI=i(),l.insertStyleElement=r(),s()(t.default,l);const u=t.default&&t.default.locals?t.default.locals:void 0},"./src/sdk/styles/popover.scss":"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":"./node_modules/style-loader/dist/runtime/insertBySelector.js":"./node_modules/style-loader/dist/runtime/insertStyleElement.js":"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":"./node_modules/style-loader/dist/runtime/styleDomAPI.js":"./node_modules/style-loader/dist/runtime/styleTagTransform.js":"./src/_utils/base-64.ts":"./src/_utils/consent.ts":"./src/_utils/domain-matching.ts":"./src/_utils/flatmap.ts":"./src/_utils/global-env.ts":"./src/_utils/interval-runner.ts":"./src/_utils/permissions.ts":"./src/_utils/service-worker-registration.ts":"./src/_utils/validate-only-instance-of-sdk.ts":"./src/common/constants.ts":"./src/common/data-providers/api.data-provider.ts":"./src/common/md5.ts":"./src/common/utils.ts":"./src/sdk/constants.ts":function(e,s,t){"use strict";var i=this&&this.__createBinding||(Object.create?,o=this&&this.__exportStar||Object.defineProperty(s,"__esModule",{value:!0}),s.UNCAUGHT_ERROR_BLACKLIST=s.DEFAULT_CLASSNAME_PROMPT_BTN_DISMISS=s.DEFAULT_CLASSNAME_PROMPT_BTN_ALLOW=s.DEFAULT_CLASSNAME_PROMPT_CUSTOM=s.DEFAULT_CLASSNAME_PROMPT_VISIBLE=s.DEFAULT_CLASSNAME_PROMPT_ELIGIBLE=s.DEFAULT_CLASSNAME_PROMPT_INELIGIBLE=s.DEFAULT_CLASSNAME_SUBSCRIPTION_DISMISSED=s.DEFAULT_CLASSNAME_SUBSCRIPTION_DENIED=s.DEFAULT_CLASSNAME_SUBSCRIPTION_FALSE=s.DEFAULT_CLASSNAME_SUBSCRIPTION_TRUE=s.DEFAULT_CLASSNAME_SUBSCRIPTION_NONE=s.DEFAULT_CLASSNAME_WEB_PUSH_SUPPORTED=s.DEFAULT_CLASSNAME_WEB_PUSH_UNSUPPORTED=s.MOBILE_MAX_SIZE=s.ENV_NAME_PRODUCTION=s.ENV_NAME_STAGING=s.ENV_NAME_DEV=s.ENV_NAME_LOCAL_PRODUCTION=s.ENV_NAME_LOCAL=s.PUSHLY_SETTINGS_CACHED_COOKIE_TIMEOUT=s.PUSHLY_STORE_NAME=s.PUSHLY_DB_NAME=s.PUSHLY_PROMPT_ID_QS=s.PUSHLY_SUBSCRIBED_URL_QS=s.PUSHLY_DOMAIN_KEY_QS=s.PUSHLY_PROMPT_DISMISSED_COOKIE_TIMEOUT=s.PUSHLY_UNIQUE_USER_FIRST_APPEARANCE_QS=s.PUSHLY_UNIQUE_USER_ID_QS=s.PUSHLY_SDK_APPLICATION_NAME=s.INJECTED_DOMAIN_SETTINGS=s.DOMAIN_SETTINGS_INJECTION_FAILED=s.APNS_URL=s.PROXY_URL=s.SW_DEPENDENCY_URL=s.ALLOW_ENDPOINT=s.SETTINGS_ENDPOINT=s.EVENTS_ENDPOINT=s.PUSHLY_APPLICATION_VERSION=s.ENV_NAME=void 0,s.ENV_NAME="production",s.PUSHLY_APPLICATION_VERSION="669c1d81054dad13f08c74753554f092afbd69c6",s.EVENTS_ENDPOINT="https://k.p-n.io/event-stream",s.SETTINGS_ENDPOINT="https://cdn.p-n.io/domain-settings",s.ALLOW_ENDPOINT="https://k.p-n.io/allow",s.SW_DEPENDENCY_URL="https://cdn.p-n.io/pushly-sw.min.js",s.PROXY_URL="https://notifications.p-n.io",s.APNS_URL="https://cdn.p-n.io/apns",s.DOMAIN_SETTINGS_INJECTION_FAILED=/{{INJECTED_DOMAIN_SETTINGS}}/i,s.INJECTED_DOMAIN_SETTINGS={"domain":{"id":16010,"name":"gobankingrates.com","domain_key":"vXiOTbFmj8DLpI72tziUploKMjXr9vEU61xO","integration_type":"direct","custom_allow_domain":null,"frequency_caps":null,"global_prompt_settings":{},"flags":["USE_ISOLATED_COOKIE_STORAGE_LOCATION","FEAT_VAPID_ONLY","FEAT_CUSTOM_VAPID","FEAT_NATIVE_ANDROID_NOTIFICATIONS_FG_DISPLAY","FEAT_NATIVE_IOS_NOTIFICATIONS_FG_DISPLAY"],"custom_sdk_package_name":null,"vapid_public_key":"BEz5mMdS4q54wYBHZqhbgLSGpK74Yn_Hg23AIlnt7w8V9eCrxNpLdSLs1V4Nq-ElMBLr6pPv5I9QVTcC2mpUy6A","additional_subscription_data":null,"whitelist_domains":["www.gobankingrates.com"],"sdk_event_only_domains":[],"apns_configuration":{"is_active":false},"domain_integrations":null},"prompts":[{"id":18539,"domain_id":16010,"style":"NATIVE","config":{"behavior":{"cookie_length_seconds":604800}},"is_auto_show":true,"weight":50,"conditions_json":{"visitor":{"time_on_page_seconds":8}},"prompt_group_id":20673,"name":"8 second delay"},{"id":26793,"domain_id":16010,"style":"NATIVE","config":{"behavior":{"cookie_length_seconds":604800}},"is_auto_show":true,"weight":50,"conditions_json":{"visitor":{"time_on_page_seconds":6}},"prompt_group_id":20673,"name":"6 second delay"},{"id":19938,"domain_id":16010,"style":"SLIDE","config":{"theme":{"image":"https://media.pushlycdn.com/domain_16010/images/JssUgdUxvagyGI3Emps5_V1-White (1).png","title":{"text":"We would like to send you notifications","text_color":"#555"},"layout":"normal","position":{"mobile":"top","desktop":"top"},"subtitle":{"text":"Notifications can be turned off anytime from browser settings","text_color":"#555"},"allow_button":{"text":"Allow","text_color":"#FFFFFF","background_color":"#20964f"},"dismiss_button":{"text":"Dismiss","text_color":"#555","background_color":"#FFFFFF"},"background_color":"#FFFFFF"},"behavior":{"cookie_length_seconds":604800}},"is_auto_show":true,"weight":100,"conditions_json":{"visitor":{"time_on_page_seconds":8}},"prompt_group_id":22039,"name":null}],"prompt_groups":[{"id":22039,"domain_id":16010,"name":"Slide","is_active":true,"priority":1,"display_to_pct":100,"conditions_json":{"page":{"page_urls":["/retirement/","/credit-cards/","/saving-money/","/investing/","/loans/","/banking/","/reviews/","/net-worth/","/money/","/credit/","/taxes/","/category/","/author/","gobankingrates.com$","gobankingrates.com/$"],"excluded_page_urls":[]},"display":{"mobile":"enabled","desktop":"enabled"}}},{"id":20673,"domain_id":16010,"name":"Native","is_active":true,"priority":0,"display_to_pct":100,"conditions_json":{"page":{"page_urls":["/retirement/","/credit-cards/","/saving-money/","/investing/","/loans/","/banking/","/reviews/","/net-worth/","/money/","/credit/","/taxes/","/category/","/author/","gobankingrates.com$","gobankingrates.com/$"],"excluded_page_urls":[]},"display":{"mobile":"enabled","desktop":"enabled"}}}]},o(t("./src/common/constants.ts"),s),s.PUSHLY_SDK_APPLICATION_NAME="pushly-sdk",s.PUSHLY_UNIQUE_USER_ID_QS="pushly_unique_user_id",s.PUSHLY_UNIQUE_USER_FIRST_APPEARANCE_QS="pushly_unique_user_first_appearance",s.PUSHLY_PROMPT_DISMISSED_COOKIE_TIMEOUT=7,s.PUSHLY_DOMAIN_KEY_QS="pushly_domain_key",s.PUSHLY_SUBSCRIBED_URL_QS="pushly_subscribed_url",s.PUSHLY_PROMPT_ID_QS="pushly_prompt_id",s.PUSHLY_DB_NAME="pushly_db",s.PUSHLY_STORE_NAME="pushly_store",s.PUSHLY_SETTINGS_CACHED_COOKIE_TIMEOUT=1/24/12,s.ENV_NAME_LOCAL="local",s.ENV_NAME_LOCAL_PRODUCTION="local-production",s.ENV_NAME_DEV="dev",s.ENV_NAME_STAGING="staging",s.ENV_NAME_PRODUCTION="production",s.MOBILE_MAX_SIZE=768,s.DEFAULT_CLASSNAME_WEB_PUSH_UNSUPPORTED="pushly-web-push-unsupported",s.DEFAULT_CLASSNAME_WEB_PUSH_SUPPORTED="pushly-web-push-supported",s.DEFAULT_CLASSNAME_SUBSCRIPTION_NONE="pushly-subscription-none",s.DEFAULT_CLASSNAME_SUBSCRIPTION_TRUE="pushly-subscription-subscribed",s.DEFAULT_CLASSNAME_SUBSCRIPTION_FALSE="pushly-subscription-unsubscribed",s.DEFAULT_CLASSNAME_SUBSCRIPTION_DENIED="pushly-subscription-denied",s.DEFAULT_CLASSNAME_SUBSCRIPTION_DISMISSED="pushly-subscription-dismissed",s.DEFAULT_CLASSNAME_PROMPT_INELIGIBLE="pushly-prompt-ineligible",s.DEFAULT_CLASSNAME_PROMPT_ELIGIBLE="pushly-prompt-eligible",s.DEFAULT_CLASSNAME_PROMPT_VISIBLE="pushly-prompt-visible",s.DEFAULT_CLASSNAME_PROMPT_CUSTOM="pushly-prompt-custom",s.DEFAULT_CLASSNAME_PROMPT_BTN_ALLOW="pushly-prompt-buttons-allow",s.DEFAULT_CLASSNAME_PROMPT_BTN_DISMISS="pushly-prompt-buttons-dismiss",s.UNCAUGHT_ERROR_BLACKLIST=["^UnknownError","^NotAllowedError$","^AbortError$","^QuotaExceededError$","Only secure origins are allowed"]},"./src/sdk/cross-frame-messenger/base-messenger.ts":"./src/sdk/cross-frame-messenger/messenger-client-connection-pool.ts":"./src/sdk/cross-frame-messenger/messenger-client.ts":"./src/sdk/cross-frame-messenger/messenger-server.ts":"./src/sdk/cross-frame-messenger/models/connection-pool-record.ts":"./src/sdk/data-providers/abstract-permission.data-provider.ts":"./src/sdk/data-providers/abstract-session.data-provider.ts":"./src/sdk/data-providers/brokered-permission.data-provider.ts":"./src/sdk/data-providers/brokered-session.data-provider.ts":"./src/sdk/data-providers/cookie.data-provider.ts":"./src/sdk/data-providers/event.data-provider.ts":"./src/sdk/data-providers/local-permission.data-provider.ts":"./src/sdk/data-providers/local-session.data-provider.ts":"./src/sdk/enums/amp-message-topic.enum.ts":(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.AmpMessageTopic=void 0,(s=s.AmpMessageTopic||(s.AmpMessageTopic={})).CONNECT_HANDSHAKE="topic-connect-handshake",s.NOTIFICATION_PERMISSION_STATE="topic-notification-permission-state",s.SERVICE_WORKER_STATE="topic-service-worker-state",s.SERVICE_WORKER_REGISTRATION="topic-service-worker-registration",s.SERVICE_WORKER_QUERY="topic-service-worker-query",s.STORAGE_GET="topic-storage-get"},"./src/sdk/enums/amp-worker-message-topic.enum.ts":(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.AmpWorkerMessageTopic=void 0,(s=s.AmpWorkerMessageTopic||(s.AmpWorkerMessageTopic={})).AMP_SUBSCRIPTION_STATE="amp-web-push-subscription-state",s.AMP_SUBSCRIBE="amp-web-push-subscribe",s.AMP_UNSUBSCRIBE="amp-web-push-unsubscribe"},"./src/sdk/enums/bell-prompt-display-behavior.enum.ts":(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.BellPromptDisplayBehavior=void 0,(s=s.BellPromptDisplayBehavior||(s.BellPromptDisplayBehavior={})).ALWAYS="ALWAYS",s.PRE_SUBSCRIPTION="PRE_SUBSCRIPTION",s.POST_SUBSCRIPTION="POST_SUBSCRIPTION"},"./src/sdk/enums/consent.enum.ts":"./src/sdk/enums/debug-cookie-code.enum.ts":"./src/sdk/enums/event-priority.enum.ts":"./src/sdk/enums/event-type.enum.ts":"./src/sdk/enums/exception-message.enum.ts":"./src/sdk/enums/integration-type.enum.ts":(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.IntegrationType=void 0,(s=s.IntegrationType||(s.IntegrationType={})).DIRECT="direct",s.PROXY="proxy"},"./src/sdk/enums/messenger-topic.enum.ts":"./src/sdk/enums/notification-permission-state.enum.ts":(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.NotificationPermissionState=void 0,(s=s.NotificationPermissionState||(s.NotificationPermissionState={})).DEFAULT="default",s.GRANTED="granted",s.DENIED="denied"},"./src/sdk/enums/permission-broker-topic.enum.ts":"./src/sdk/enums/prompt-referrer-condition.enum.ts":"./src/sdk/enums/prompt-style.enum.ts":"./src/sdk/enums/runtime-environment.enum.ts":"./src/sdk/enums/session-broker-topic.enum.ts":"./src/sdk/enums/steamable-event-type.enum.ts":"./src/sdk/exceptions/domain-load.exception.ts":"./src/sdk/exceptions/exit.exception.ts":(e,s,t)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.ExitException=void 0;class i extends t("./src/sdk/exceptions/pushly.exception.ts").PushlyException{constructor(e,s){"string"==typeof e&&(s=e,e=null),super(e,s,i),this.name="ExitException"}}s.ExitException=i},"./src/sdk/exceptions/fail.exception.ts":(e,s,t)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.FailException=void 0;class i extends t("./src/sdk/exceptions/pushly.exception.ts").PushlyException{constructor(e,s){"string"==typeof e&&(s=e,e=null),super(e,s,i),this.name="FailException"}}s.FailException=i},"./src/sdk/exceptions/invalid-event.exception.ts":"./src/sdk/exceptions/no-connection.exception.ts":(e,s,t)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.NoConnectionException=void 0;class i extends t("./src/sdk/exceptions/pushly.exception.ts").PushlyException{constructor(e){super(e),this.name="NoConnectionException"}}s.NoConnectionException=i},"./src/sdk/exceptions/no-response.exception.ts":"./src/sdk/exceptions/profile.exception.ts":"./src/sdk/exceptions/pushly.exception.ts":st(s.message)}return e}}s.PushlyException=i},"./src/sdk/Exception"}}s.WorkerRegistrationException=r},".ataProvider=null,r.sessionDataProvider_SUPPORTED_IN_EVENT_MODE);return new i(eMath.random()*s.length)]}}s.PromptFactory=lype.FLOW_LOADED))})}}s.AmpFrameHelperFlow=u},"./ndow.close()})}}s.AmpPermission("pageViews",e))}catch(e){}})}}s.BaseFlow=c},".FLOW_LOADED))})}}s.BrokeredDataSeu.EventType.FLOW_LOADED))})}}s.DirectFlow=h},"./srow.close()})}}s.ProxyPermissionDrn{prompt:{id:e,keywords:s}}}}s.ProxyFlow=u},"./src/sdkountered:",e)})}}}s.AbstractMessageServer=o},"./src/sdkss:!0,result:s}})}}s.AmpFrameHelperServer=h},"./src/sdk/metaProvider)))}}s.BrokeredPermissionServer=p},"./src/sdkt(e[0],e[1])})))}}s.BrokeredSessionServer=p}ttps://${e}/pn-brokered-data-server.html`}}},"./src/rker.getRegistration() failed"}returlass{constructor(){this.clock=0,this.e=!1}}me(n.domainMatchPredicate);return t&&i&&o}}},"./src/sdk/models/domainswed||void 0,s.blocked=e.blocked||void 0,s}}},"./src/sdk/mON.stringify(yield this.getPostData())}})nstructor(e,...s){this.type=e,this.data=s}}},PromptNotShown(e,s,t)})}}s.EventableModel=u},"./src/sdk/models/e=l,s})}}s.SubscriberStreamableEventMod&!this.isDismissed()&&!this.isBlocktReferrerCondition.BLOCK),i}}s.Basel,this._updateSize()},50)})}}s.BellPres(),yield this._hide()})}}s.Custo&(t.innerText=s.innerText),t}}s.DomPressage.MIXED_INTEGRATION)}}s.NativePall(this),this.shown=!0)})}}s.SlidePrompt=c},"./src&&(yield n.CookieDataProvider.clear(e))})}}},"ception(e)}return t})}}s.DomainRepository=i},"./src/s=!1}return s})}}s.SubscriptionRepository=n}r.has(e)&&l.CookieDontext.clock=this._swclk_},1e3))})}}#]|$)/i.test(e.search)}catch(e){}returnOST_NOT_WHITELISTED)}}s.DomainService=new c}meEnvironment])}}s.EnvironmentServicegetFlow(e)}}s.FlowSvc=o,s.FlowService=new o},"./src/sLogger.warn("sw.apns.error",e)}},500)})})}}},"./src/sdk/servieption(e)}})}}s.UserProfileServiceHelpers=r},"./src/sdser.setPushPermission(i),i.subscription}BackgroundColor(e){this.backgroundColornInUnsupportedMode()}}s.PromptService=new f},e,keywords:s}}}}s.RegistrationService=new wpendChild(u)}catch(e){g.Logger.warn(eTION_LOADED,i)});i()})}}s.UserService=ninsertBefore(s,t)}})}t s;tr[e]e?()efin)=>Ot.defineProperty(e,"__e),i.Logger.warn("[pushly-sdk]",e.message)}})()})();

(function(){
PushlySDK.watch('ready', () => {
    if ('dfpTargeting' in window) {
        let keywords = [];
        const d = JSON.parse(window.dfpTargeting);
        if ('category' in d) {
            keywords.push(...d['category']);
        }

        if ('node' in d) {
            keywords.push(...d['node']);
        }

        if (keywords.length > 0) {
            PushlySDK.pushSet(keywords.map(v => v.trim().toLowerCase()))]]);
        }
    }
});

})();