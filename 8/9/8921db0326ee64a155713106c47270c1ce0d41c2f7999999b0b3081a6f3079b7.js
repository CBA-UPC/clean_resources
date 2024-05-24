(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1081:function(t,e,n){"use strict";n(479)},1082:function(t,e,n){"use strict";n(480)},1083:function(t,e,n){"use strict";var o=n(388),r=n.n(o);e.default=r.a},1165:function(t,e,n){"use strict";n.r(e);n(35),n(29),n(14),n(15),n(5),n(23),n(12);var o=n(2),r=n(11),c=n(355),l=n(310),d=n(325),_=n(333),m=n(41),w=n(72),h=(n(313),{props:{allItemsCount:{type:Number,default:0},visibleItemsCount:{type:Number,default:0},itemWidthPx:{type:Number,default:0},itemHeightPx:{type:Number,default:0},autoIntervalSec:{type:Number,default:0},hasArrows:{type:Boolean,default:!1},hasNav:{type:Boolean,default:!0}},computed:{finalItemsIndexex:function(){if(this.orderedItemsIndexes.length<this.visibleItemsCount+2){var t=Object(w.a)(this.orderedItemsIndexes);return t.push(this.orderedItemsIndexes[0]),t}return this.orderedItemsIndexes}},data:function(){return{orderedItemsIndexes:[],currentOffset:this.itemWidthPx,animationTimeMS:500,arrowsDisabled:!1,autoInterval:!1}},mounted:function(){var t=this;this.orderedItemsIndexes=[this.allItemsCount];for(var i=0;i<this.allItemsCount-1;i++)this.orderedItemsIndexes.push(i+1);this.autoIntervalSec>0&&(this.autoInterval=this.autoIntervalSec);var e=setInterval((function(){t.autoInterval?t.moveCarousel(!0):clearInterval(e)}),1e3*this.autoInterval+this.animationTimeMS)},methods:{onArrowClick:function(t){this.autoInterval=!1,this.moveCarousel(t)},moveCarousel:function(t){var e=this;this.arrowsDisabled||(this.arrowsDisabled=!0,this.currentOffset=t?2*this.itemWidthPx:0,setTimeout((function(){var n=e.animationTimeMS;if(e.animationTimeMS=0,e.currentOffset=e.itemWidthPx,t){var o=e.orderedItemsIndexes.shift();e.orderedItemsIndexes.push(o)}else{var r=e.orderedItemsIndexes.pop();e.orderedItemsIndexes.unshift(r)}setTimeout((function(){e.animationTimeMS=n,e.arrowsDisabled=!1}),100)}),this.animationTimeMS))}}}),v=(n(1081),n(4)),y=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-x",class:{"carousel--with-nav":t.hasNav}},[t.hasArrows?n("div",{staticClass:"carousel__arrow",on:{click:function(e){return t.onArrowClick(!1)}}},[n("div",{staticClass:"arrow__body arrow__body--left"})]):t._e(),t._v(" "),n("div",{staticClass:"carousel__items",style:{width:t.visibleItemsCount*t.itemWidthPx+"px",height:t.itemHeightPx+"px"}},t._l(t.finalItemsIndexex,(function(e,o){return n("div",{key:o,staticClass:"items__item",style:{left:"-"+t.currentOffset+"px",transitionDuration:t.animationTimeMS+"ms"}},[t._t("item"+e)],2)})),0),t._v(" "),t.hasArrows?n("div",{staticClass:"carousel__arrow",on:{click:function(e){return t.onArrowClick(!0)}}},[n("div",{staticClass:"arrow__body arrow__body--right"})]):t._e(),t._v(" "),t.hasNav?n("div",{staticClass:"carousel__navi"},t._l(t.allItemsCount,(function(e){return n("div",{key:e,staticClass:"navi__item",class:{"navi__item--active":t.finalItemsIndexex[1]===e}})})),0):t._e()])}),[],!1,null,"5301782b",null).exports;function z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{HeaderSlider:c.a,Title:_.a,PostItems:d.a,Linker:m.a,Carousel:y},layout:"wide",data:function(){return{articlesLimit:3}},computed:{slides:function(){var t=this.$device.isMobile?{video:"https://holding.wpcdn.pl/video/zrownowazony-rozwoj/mobile_LQ.mp4",poster:"https://holding.wpcdn.pl/video/zrownowazony-rozwoj/mobile_bg_dummy.jpeg"}:{video:"https://holding.wpcdn.pl/video/zrownowazony-rozwoj/desktop.mp4",poster:"https://holding.wpcdn.pl/video/zrownowazony-rozwoj/desktop_bg_dummy.jpeg"};return[f({title:this.$t("content.header.title")},t)]},ourActions:function(){return this.$store.state.articlesN2cr.collections.nasze_akcje},configuration:function(){return this.$store.state.configuratorN2cr.configuration[6752128335512640]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=t.store,r={pl:"Nasze akcje",en:"Our actions",alias:"nasze_akcje",limit:3},e.next=4,o.dispatch("configuratorN2cr/getConfig",{configName:"6752128335512640",hasTitle:!1});case 4:return e.next=6,o.dispatch("articlesN2cr/getCollection",{tag:r[n.i18n.locale],alias:r.alias,limit:r.limit});case 6:return e.next=8,o.dispatch("dynamicConfig/updateConfig",{});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return Object(l.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},methods:{getHtmlDataFromI18n:function(element){return this.$t(element)},getLogoSrc:function(){var t=this.$device.isMobile?"horizontal":"vertical";return this.$t("content.section_3.logo_".concat(t))}},nuxtI18n:{paths:{en:"/sustainable-development"}}},k=(n(1082),n(1083)),j=Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-slider",{attrs:{slides:t.slides}},[n("div",{staticClass:"hexagons-container"},[n("div",{staticClass:"hexagons"},[n("div",{staticClass:"hexagon"},[n("div",{staticClass:"hex-content"},[n("svg",{staticClass:"hex-icon",attrs:{width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"21",cy:"21",r:"20.318",stroke:"white","stroke-width":"1.36406"}}),t._v(" "),n("path",{attrs:{d:"M28.4486 15.6579C27.1591 16.3743 23.8925 18.4947 22.8609 21.2456C21.8293 23.9965 21.4282 31.5614 21.1416 35M24.1504 18.6667C23.7205 17.807 22.8044 15.3975 23.2907 13.9386C24.1504 11.3596 25.4398 10.5 29.3083 10.5C32.403 10.5 33.7498 10.5 34.0363 10.5C34.3229 12.3626 34.337 15.7446 34.0363 16.9474C33.6065 18.6667 33.1767 20.3859 31.0275 21.2456C29.7505 21.7564 27.589 21.2456 26.7293 21.2456",stroke:"white","stroke-width":"1.36406","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M19.8525 17.8069C19.1362 16.2308 16.8986 13.5165 13.835 13.0788C10.8263 12.6489 9.39348 13.0788 9.10693 13.0788C9.10693 15.2279 8.96577 19.5775 9.9666 21.2454C11.2561 23.3946 13.835 23.8244 15.1245 23.3946C17.1876 22.7068 18.5631 21.6753 18.9929 21.2454M18.9929 21.2454C17.6174 18.4946 14.9812 17.8069 13.835 17.8069M18.9929 21.2454C20.3683 23.9963 20.7122 31.5612 20.7122 34.9998",stroke:"white","stroke-width":"1.36406","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),n("div",{staticClass:"hex-text",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.header.element_1_html"))}})]),t._v(" "),n("svg",{staticClass:"hex-bg",attrs:{width:"205",height:"205",viewBox:"0 0 205 205",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{opacity:"0.7"}},[n("path",{attrs:{d:"M0 102.5L26.1599 58.425L51.25 13.7324L102.5 14.35L153.75 13.7324L178.84 58.425L205 102.5L178.84 146.575L153.75 191.268L102.5 190.65L51.25 191.268L26.1599 146.575L0 102.5Z",fill:"black"}})]),t._v(" "),n("path",{attrs:{d:"M51.8418 190.243L1.18357 102.5L51.8418 14.7574L153.158 14.7574L203.816 102.5L153.158 190.243L51.8418 190.243Z",stroke:"white","stroke-width":"2.05"}})])]),t._v(" "),n("div",{staticClass:"hexagon"},[n("div",{staticClass:"hex-content"},[n("svg",{staticClass:"hex-icon",attrs:{width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"21",cy:"21",r:"20.3328",stroke:"white","stroke-width":"1.33438"}}),t._v(" "),n("path",{attrs:{d:"M20.9424 15.8958C17.4779 16.5933 16.1538 18.3432 16.5336 21.0026C16.9745 24.089 18.7378 24.9709 20.9424 24.9709C23.1471 24.9709 25.3517 23.6481 25.7926 21.0026C26.1551 18.8279 24.4698 16.1524 23.1471 16.5933",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M16.9716 8.40015C16.3858 8.5222 15.9761 8.68794 15.661 9.21318C15.4701 9.53127 15.5281 9.9584 15.7721 10.2373C16.4889 11.0565 17.8263 11.408 18.7332 10.7104C19.1392 10.3981 19.5591 9.78252 19.704 9.28205C19.7416 9.15218 19.7865 8.76002 19.5707 8.76002",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M30.1668 12.8384C29.4116 13.1776 28.4797 13.6849 28.7673 14.6688C28.8638 14.9989 29.2437 15.2783 29.5315 15.4352C30.0688 15.7283 30.7082 15.8978 31.3175 15.9328C31.8369 15.9627 32.5005 15.8699 32.8858 15.4774C33.1523 15.206 33.1474 14.7508 33.1213 14.3978C33.0833 13.8847 32.6377 12.952 32.0061 13.0783",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M31.686 22.3951C30.7846 23.0078 29.7782 23.9122 29.8134 25.1096C29.8418 26.074 30.8295 26.2494 31.6061 25.9938C31.9733 25.8729 32.4256 25.6811 32.5968 25.3051C32.7969 24.8659 32.7122 24.3156 32.5457 23.8812C32.4752 23.6971 32.3946 23.2348 32.1259 23.2348",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M24.688 30.3522C23.8922 30.2494 22.7684 30.3593 22.451 31.2519C22.255 31.8031 22.4291 32.1348 22.9153 32.4315C23.2963 32.664 23.7089 32.7969 24.1504 32.8491C24.5612 32.8977 25.0732 32.964 25.4588 32.7669C25.8293 32.5775 26.0571 32.0205 25.9275 31.6318",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M12.8131 26.5933C12.3559 26.9758 11.5966 27.3846 11.6136 28.0638C11.628 28.6401 12.3895 28.9538 12.842 29.0679C13.5169 29.2382 16.1118 29.5919 15.3722 28.1127",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M9.73349 17.3569C9.49438 17.7936 9.04938 18.4491 9.10483 18.9852C9.14398 19.3637 9.25552 19.8117 9.69795 19.8294C10.2142 19.85 10.9774 19.5978 11.173 19.0763",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}})]),t._v(" "),n("div",{staticClass:"hex-text",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.header.element_2_html"))}})]),t._v(" "),n("svg",{staticClass:"hex-bg",attrs:{width:"205",height:"205",viewBox:"0 0 205 205",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{opacity:"0.7"}},[n("path",{attrs:{d:"M0 102.5L26.1599 58.425L51.25 13.7324L102.5 14.35L153.75 13.7324L178.84 58.425L205 102.5L178.84 146.575L153.75 191.268L102.5 190.65L51.25 191.268L26.1599 146.575L0 102.5Z",fill:"black"}})]),t._v(" "),n("path",{attrs:{d:"M51.8418 190.243L1.18357 102.5L51.8418 14.7574L153.158 14.7574L203.816 102.5L153.158 190.243L51.8418 190.243Z",stroke:"white","stroke-width":"2.05"}})])]),t._v(" "),n("div",{staticClass:"hexagon"},[n("div",{staticClass:"hex-content"},[n("svg",{staticClass:"hex-icon",attrs:{width:"43",height:"42",viewBox:"0 0 43 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"21.7129",cy:"21",r:"20.3328",stroke:"white","stroke-width":"1.33438"}}),t._v(" "),n("path",{attrs:{d:"M23.526 17.0945C19.9633 15.7135 17.7365 19.5136 18.2997 21.7821C18.6271 23.1012 19.749 24.4825 20.7538 24.7042C22.2647 25.0377 23.701 25.1052 25.0407 24.0121C27.0888 22.6184 26.1981 20.3168 25.7528 18.9358",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M20.6804 12.8616C20.9591 12.4937 21.0616 8.45165 22.6361 9.18982C24.4816 9.18982 26.1275 9.47197 24.8507 13.0896C25.2612 13.808 27.3528 13.112 27.8035 12.8616C28.427 12.5152 28.7663 11.7563 29.4466 12.4367C29.8528 12.8428 31.2423 13.5209 31.022 14.2919C30.7144 15.3688 29.8467 16.1205 29.913 17.3806C29.962 18.3115 34.0781 16.8623 34.0781 19.5245C34.4472 23.5846 30.549 21.6814 31.1257 23.5268C31.4264 24.4892 32.1244 25.0785 32.5664 25.9625C32.9995 26.8287 31.3927 27.8414 30.7629 28.2012C29.9529 28.6641 29.9406 29.1902 28.9698 28.9475C28.2414 28.7654 27.4891 27.6401 26.928 28.2012C26.6408 28.4885 25.9084 29.9443 25.819 30.3467C25.5414 31.5959 26.5055 32.0826 25.3961 32.6373C24.9591 32.8558 22.072 33.0988 21.5592 32.6373C21.1818 32.2976 21.8084 31.7748 21.5288 31.3356C21.2559 30.9067 21.5288 29.5947 21.5288 29.121C21.5288 28.618 19.3055 28.0604 18.9452 28.3828C18.573 28.5069 17.0997 31.3355 17.0997 31.3355C15.4888 31.6935 12.8747 29.4508 13.4088 28.3828C13.6239 27.9525 16.0892 26.5409 15.6233 26.1682C15.0118 25.679 15.1224 23.7592 14.2003 23.7237C13.0516 23.6795 10.8326 24.2966 9.71779 23.9536C8.72759 23.649 9.2211 20.913 9.34853 19.8936C9.70232 17.0633 12.6214 20.1203 14.1485 18.5932C14.5949 18.1468 14.999 17.4482 15.216 16.8623C15.4221 16.3058 14.9129 16.3907 14.4179 16.1679C13.5964 15.7982 11.092 14.3932 11.6713 13.0896C12.0479 12.2422 13.3275 10.6662 14.1484 10.6662C14.4368 10.6662 15.2424 11.6141 15.5062 11.8251C15.7488 12.0192 16.0266 12.2097 16.2939 12.3434",stroke:"white","stroke-width":"1.33438","stroke-linecap":"round"}})]),t._v(" "),n("div",{staticClass:"hex-text",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.header.element_3_html"))}})]),t._v(" "),n("svg",{staticClass:"hex-bg",attrs:{width:"205",height:"205",viewBox:"0 0 205 205",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{opacity:"0.7"}},[n("path",{attrs:{d:"M0 102.5L26.1599 58.425L51.25 13.7324L102.5 14.35L153.75 13.7324L178.84 58.425L205 102.5L178.84 146.575L153.75 191.268L102.5 190.65L51.25 191.268L26.1599 146.575L0 102.5Z",fill:"black"}})]),t._v(" "),n("path",{attrs:{d:"M51.8418 190.243L1.18357 102.5L51.8418 14.7574L153.158 14.7574L203.816 102.5L153.158 190.243L51.8418 190.243Z",stroke:"white","stroke-width":"2.05"}})])])])])]),t._v(" "),n("div",{staticClass:"section-1"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("div",{staticClass:"row"},[n("div",{staticClass:"header",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.section_1.heading_html"))}}),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("div",{staticClass:"body",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.section_1.body_html"))}})])])]),t._v(" "),n("div",{staticClass:"section-2"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("div",{staticClass:"row"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"body",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.section_2.body_1_html"))}}),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"body",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.section_2.body_2_html"))}})]),t._v(" "),n("div",{staticClass:"green-box"},[n("div",{staticClass:"header"},[t._v(t._s(t.configuration["green_box_title_"+t.$i18n.locale]))]),t._v(" "),n("div",{staticClass:"body"},[t._v(t._s(t.configuration["green_box_text_"+t.$i18n.locale]))]),t._v(" "),n("a",{attrs:{href:t.configuration["green_box_attachment_"+t.$i18n.locale],target:"_blank"}},[n("div",{staticClass:"button"},[n("img",{attrs:{src:"https://holding.wpcdn.pl/icons/download.svg"}}),t._v("\n              "+t._s(t.configuration["green_box_button_"+t.$i18n.locale])+"\n            ")])]),t._v(" "),n("div",{staticClass:"header"},[t._v(t._s(t.configuration["green_box2_title_"+t.$i18n.locale]))]),t._v(" "),n("div",{staticClass:"body"},[t._v(t._s(t.configuration["green_box2_text_"+t.$i18n.locale]))]),t._v(" "),n("a",{attrs:{href:t.configuration["green_box2_attachment_"+t.$i18n.locale],target:"_blank"}},[n("div",{staticClass:"button"},[n("img",{attrs:{src:"https://holding.wpcdn.pl/icons/download.svg"}}),t._v("\n              "+t._s(t.configuration["green_box2_button_"+t.$i18n.locale])+"\n            ")])])])])])]),t._v(" "),n("div",{staticClass:"section-3"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("div",{staticClass:"header"},[t._v(t._s(this.$t("content.section_3.header")))]),t._v(" "),n("div",{staticClass:"body",domProps:{innerHTML:t._s(t.getHtmlDataFromI18n("content.section_3.body"))}}),t._v(" "),n("div",{staticClass:"items"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("div",{staticClass:"name-container"},[n("img",{attrs:{src:t.getLogoSrc(),alt:"logo"}})]),t._v(" "),n("div",{staticClass:"items-container"},[n("img",{attrs:{src:this.$t("content.section_3.card_1_image"),alt:"1"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_2_image"),alt:"2"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_3_image"),alt:"3"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_4_image"),alt:"4"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_5_image"),alt:"5"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_6_image"),alt:"6"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_7_image"),alt:"7"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_8_image"),alt:"8"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_9_image"),alt:"9"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_10_image"),alt:"10"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_11_image"),alt:"11"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_12_image"),alt:"12"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_13_image"),alt:"13"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_14_image"),alt:"14"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_15_image"),alt:"15"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_16_image"),alt:"16"}}),t._v(" "),n("img",{attrs:{src:this.$t("content.section_3.card_17_image"),alt:"17"}})])])])])]),t._v(" "),n("div",{staticClass:"section-4"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("div",{staticClass:"header"},[t._v("\n        "+t._s(this.$t("content.section_4.header"))+"\n      ")]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("div",{staticClass:"body"},[t._v("\n        "+t._s(this.$t("content.section_4.body"))+"\n      ")]),t._v(" "),n("div",{staticClass:"cards"},[n("div",{staticClass:"card-single card-1"},[n("img",{attrs:{src:this.$t("content.section_4.card_1_image"),alt:"4"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_1_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-2"},[n("img",{attrs:{src:this.$t("content.section_4.card_2_image"),alt:"5"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_2_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-3"},[n("img",{attrs:{src:this.$t("content.section_4.card_3_image"),alt:"7"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_3_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-4"},[n("img",{attrs:{src:this.$t("content.section_4.card_4_image"),alt:"8"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_4_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-5"},[n("img",{attrs:{src:this.$t("content.section_4.card_5_image"),alt:"10"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_5_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-6"},[n("img",{attrs:{src:this.$t("content.section_4.card_6_image"),alt:"12"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_6_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-double card-7"},[n("img",{attrs:{src:this.$t("content.section_4.card_7_image"),alt:"13"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_7_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-8"},[n("img",{attrs:{src:this.$t("content.section_4.card_8_image"),alt:"15"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_8_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)]),t._v(" "),n("div",{staticClass:"card-single card-9"},[n("img",{attrs:{src:this.$t("content.section_4.card_9_image"),alt:"16"}}),t._v(" "),n("ul",t._l(this.$t("content.section_4.card_9_list"),(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0)])])])]),t._v(" "),n("div",{staticClass:"section-ethics"},[n("div",{staticClass:"ethics__content-1"},[n("div",{staticClass:"content-1__body"},[n("div",{staticClass:"body__title underlined"},[t._v("\n          "+t._s(this.$t("content.section_ethics.header"))+"\n        ")]),t._v(" "),n("div",{staticClass:"body_text"},[n("p",[t._v("\n            "+t._s(this.$t("content.section_ethics.content"))+"\n          ")])])]),t._v(" "),n("div",{staticClass:"ethics-box"},[n("div",{staticClass:"box__header"},[t._v("\n          "+t._s(t.configuration["ethics_code_title_"+t.$i18n.locale])+"\n        ")]),t._v(" "),n("div",{staticClass:"box__text"},[t._v(t._s(t.configuration["ethics_code_text_"+t.$i18n.locale]))]),t._v(" "),n("a",{attrs:{href:t.configuration["ethics_code_attachment_"+t.$i18n.locale],target:"_blank"}},[n("div",{staticClass:"box__button"},[n("img",{attrs:{src:"https://holding.wpcdn.pl/icons/download_red.svg"}}),t._v("\n            "+t._s(t.configuration["ethics_code_button_"+t.$i18n.locale])+"\n          ")])])])])]),t._v(" "),n("div",{staticClass:"section-diversity"},[n("div",{staticClass:"diversity__content-1"},[n("div",{staticClass:"content-1__body"},[n("div",{staticClass:"body__title underlined"},[t._v("\n          "+t._s(this.$t("content.section_diversity.diversity_header"))+"\n        ")]),t._v(" "),n("div",{staticClass:"body_text"},[n("p",[t._v("\n            "+t._s(this.$t("content.section_diversity.diversity_body1"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(this.$t("content.section_diversity.diversity_body2"))+"\n          ")])])]),t._v(" "),n("div",{staticClass:"diversity-box"},[n("div",{staticClass:"box__header"},[t._v("\n          "+t._s(this.$t("content.section_diversity.diversity_box_title"))+"\n          "),n("img",{attrs:{src:"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-logo.svg",loading:"lazy"}})]),t._v(" "),n("div",{staticClass:"box__text"},[t._v(t._s(this.$t("content.section_diversity.diversity_box_text")))]),t._v(" "),n("a",{attrs:{href:this.$t("content.section_diversity.diversity_box_attachment"),target:"_blank"}},[n("div",{staticClass:"box__button"},[n("img",{attrs:{src:"https://holding.wpcdn.pl/icons/download.svg"}}),t._v("\n            "+t._s(this.$t("content.section_diversity.diversity_box_button"))+"\n          ")])])])]),t._v(" "),n("div",{staticClass:"diversity__content-2"},[n("div",{staticClass:"content-2__container"},[n("div",{staticClass:"content-2__title underlined"},[t._v("\n          "+t._s(this.$t("content.section_diversity.diversity_carousel_header"))+"\n        ")]),t._v(" "),n("div",{staticClass:"carousel__container"},[t.$device.isMobile?n("Carousel",{staticClass:"content-2__carousel",attrs:{"all-items-count":6,"visible-items-count":1,"item-width-px":300,"item-height-px":380,"has-nav":!0,"has-arrows":!0},scopedSlots:t._u([t._l(this.$t("content.section_diversity.diversity_carousel_items"),(function(e){return{key:e.name,fn:function(){return[n("div",{key:e.name,staticClass:"carousel__item"},[n("img",{attrs:{alt:"item.name",src:e.icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                  "+t._s(e.content)+"\n                ")])])]},proxy:!0}}))],null,!0)}):n("Carousel",{staticClass:"content-2__carousel",attrs:{"all-items-count":2,"visible-items-count":1,"item-width-px":990,"item-height-px":358,"has-nav":!0,"has-arrows":!0},scopedSlots:t._u([{key:"item1",fn:function(){return[n("div",{staticClass:"carousel__desktop-container"},[n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[0].name,src:t.$t("content.section_diversity.diversity_carousel_items")[0].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[0].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[0].content)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[1].name,src:t.$t("content.section_diversity.diversity_carousel_items")[1].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[1].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[1].content)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[2].name,src:t.$t("content.section_diversity.diversity_carousel_items")[2].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[2].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[2].content)+"\n                  ")])])])]},proxy:!0},{key:"item2",fn:function(){return[n("div",{staticClass:"carousel__desktop-container"},[n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[3].name,src:t.$t("content.section_diversity.diversity_carousel_items")[3].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[3].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[3].content)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[4].name,src:t.$t("content.section_diversity.diversity_carousel_items")[4].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[4].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[4].content)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"carousel__item"},[n("img",{attrs:{alt:t.$t("content.section_diversity.diversity_carousel_items")[5].name,src:t.$t("content.section_diversity.diversity_carousel_items")[5].icon,loading:"lazy",width:"72px",height:"72px"}}),t._v(" "),n("div",{staticClass:"item__title"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[5].title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"item__body"},[t._v("\n                    "+t._s(t.$t("content.section_diversity.diversity_carousel_items")[5].content)+"\n                  ")])])])]},proxy:!0}])})],1)])]),t._v(" "),n("div",{staticClass:"diversity__content-3"},[n("div",{staticClass:"content-3__title"},[t._v("\n        "+t._s(this.$t("content.section_diversity.diversity_signatory"))+"\n      ")]),t._v(" "),n("img",{attrs:{src:"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/forum-odpowiedzialnego-biznesu.png",loading:"lazy"}}),t._v(" "),n("img",{attrs:{src:"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/karta-roznorodnosci.png",loading:"lazy"}}),t._v(" "),n("img",{attrs:{src:"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/30-club.png",loading:"lazy"}})])]),t._v(" "),n("div",{staticClass:"section-5"},[n("div",{staticClass:"container m-t-15 m-b-50"},[n("Title",{staticClass:"m-t-50"},[t._v("\n        "+t._s(this.$t("content.section_5.title"))+"\n      ")]),t._v(" "),n("div",[n("post-items",{attrs:{posts:t.ourActions,urlName:"zrownowazony-rozwoj-nasze-dzialania-id"}}),t._v(" "),n("div",{staticClass:"button-container"},[n("linker",{staticClass:"btn btn-dark btn-outline btn-rounded center-element",attrs:{link:{url:{name:"zrownowazony-rozwoj-nasze-dzialania"}}}},[t._v("\n            "+t._s(this.$t("content.section_5.button"))+"\n          ")])],1)],1)],1)])],1)}),[],!1,null,"3c20e6fc",null);"function"==typeof k.default&&Object(k.default)(j);e.default=j.exports},310:function(t,e,n){"use strict";e.a=function(path,title,t){return{title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]}}},313:function(t,e,n){"use strict";var o=n(9),r=n(40),c=n(48),l=n(147),d=n(100),_=n(18),m=n(77).f,w=n(102).f,h=n(20).f,v=n(314).trim,y=o.Number,z=y,f=y.prototype,C="Number"==c(n(101)(f)),k="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=k?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,_=l.length;i<_;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(C?_((function(){f.valueOf.call(n)})):"Number"!=c(n))?l(new z(j(e)),n,y):j(e)};for(var x,$=n(17)?m(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;$.length>I;I++)r(z,x=$[I])&&!r(y,x)&&h(y,x,w(z,x));y.prototype=f,f.constructor=y,n(21)(o,"Number",y)}},314:function(t,e,n){var o=n(6),r=n(53),c=n(18),l=n(315),d="["+l+"]",_=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),w=function(t,e,n){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),_=r[t]=d?e(h):l[t];n&&(r[n]=_),o(o.P+o.F*d,"String",r)},h=w.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(_,"")),2&e&&(t=t.replace(m,"")),t};t.exports=w},315:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},318:function(t,e,n){},321:function(t,e,n){"use strict";n(318)},322:function(t,e,n){},325:function(t,e,n){"use strict";var o=n(41),r=n(103),c=n(78),l={components:{Linker:o.a},props:["posts","urlName"],data:function(){return{getDateFromTimestamp:r.a,getImagePath:c.a}},updated:function(){INSPIRO.elements.gridLayoutRefresh()},methods:{cropText:function(text,t){var e=text.indexOf(" ",t);return-1===e?text:"".concat(text.substring(0,e+1),"...")}},watch:{posts:function(){INSPIRO.elements.gridLayoutRefresh()}}},d=(n(321),n(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid-layout post-3-columns m-b-30",attrs:{id:"blog","data-item":"post-item","data-layout":"fitRows"}},t._l(t.posts,(function(e,o){return n("div",{key:o,staticClass:"post-item border",class:e.class},[n("div",{staticClass:"post-item-wrap"},[e.article.image&&e.article.image.url?n("div",{staticClass:"post-image",style:{"background-image":"url("+t.getImagePath(e.article.image.url)+")"}}):t._e(),t._v(" "),n("div",{staticClass:"post-item-description"},[n("span",{staticClass:"post-meta-date"},[n("i",{staticClass:"fa fa-calendar-o"}),t._v(t._s(t.getDateFromTimestamp(e.article.publishedFrom)))]),t._v(" "),n("h2",[n("linker",{attrs:{link:{url:{name:t.urlName,params:{id:e.article.slug+"-"+e.article.id}}}}},[t._v(t._s(e.article.name))])],1),t._v(" "),n("div",{staticClass:"item",domProps:{innerHTML:t._s(t.cropText(e.article.lead,170))}}),t._v(" "),n("linker",{staticClass:"item-link",attrs:{link:{url:{name:t.urlName,params:{id:e.article.slug+"-"+e.article.id}}}}},[t._v(t._s(t.$t("index.seeMore"))+" "),n("i",{staticClass:"icon-chevron-right"})])],1)])])})),0),t._v(" "),0===t.posts.length?n("div",{staticClass:"empty-state"},[t._v("\n    Brak raportów w wybranym okresie\n  ")]):t._e()])}),[],!1,null,"0973c369",null);e.a=component.exports},330:function(t,e,n){"use strict";n(322)},333:function(t,e,n){"use strict";var o={props:["isCenter"]},r=(n(330),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-text heading-line",class:{"text-center":this.isCenter}},[e("h4",[this._t("default")],2)])}),[],!1,null,"4139c20a",null);e.a=component.exports},340:function(t,e,n){},348:function(t,e,n){"use strict";n(340)},355:function(t,e,n){"use strict";var o={components:{Linker:n(41).a},props:["slides"]},r=(n(348),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inspiro-slider slider-fullscreen dots-creative",attrs:{id:"slider"}},t._l(t.slides,(function(e){return n("div",{key:e.title,staticClass:"slide",attrs:{"data-bg-image":e.img||!1,"data-bg-video":e.video||!1,"data-video-autoplay":"true","data-video-poster":e.poster||!1}},[n("div",{staticClass:"bg-overlay"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"slide-captions text-center text-light"},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),e.subtitle?n("p",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))]):t._e(),t._v(" "),e.button?n("linker",{staticClass:"btn scroll-to",attrs:{link:e.button.link}},[t._v(t._s(e.button.title))]):t._e(),t._v(" "),t._t("default")],2)]),t._v(" "),t._m(0,!0)])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-indicator"},[e("i",{staticClass:"icon-arrow-down-circle"})])}],!1,null,"d9952f56",null);e.a=component.exports},388:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"pl":{"seo":{"title":"Zrównoważony Rozwój","desc":"Trzy filary naszej Strategii Zrównoważonego Rozwoju"},"content":{"header":{"title":"Trzy filary naszej Strategii Zrównoważonego Rozwoju","element_1_html":"Pozytywny wpływ<br />na klimat<br />i&nbsp;środowisko","element_2_html":"Niezależność, etyka<br />dziennikarska,<br />bezpieczeństwo<br />w&nbsp;sieci","element_3_html":"Najwyższe standardy<br />zarządzania<br />i&nbsp;nadzoru"},"section_1":{"heading_html":"<span>Jesteśmy świadomi</span> ogromnych wyzwań środowiskowych, społecznych i tych dotyczących ładu korporacyjnego.","body_html":"Wiemy jaki wpływ wywieramy na otoczenie, a także jaki ono wywiera na nas. Na najbliższe lata stawiamy sobie ambitne cele dotyczące udziału zielonej energii i redukcji emisji gazów cieplarnianych. Ich realizacja zapewni, że prowadzenie naszej działalności będzie w całości <span>&#8222;zielone&#8220;</span>."},"section_2":{"body_1_html":"Niezależne dziennikarstwo jest podstawą demokracji. Jej filarem powinna być swobodna i prawdziwa debata publiczna, pełny dostęp do informacji oraz walka z dezinformacją i jej negatywnymi skutkami.<br /><br /><b>Niezależne media sprawują kontrolną funkcję, stojąc na straży demokracji i praworządności.</b>","body_2_html":"Jako firma działająca w obszarze mediów i internetu czujemy się odpowiedzialni za etyczne działanie, współtworzenie, promowanie i wspieranie wysokich standardów.<br /><br /><b>Naszym zadaniem jest dostarczanie milionom użytkowników rzetelnych informacji oraz zrównoważonych usług i produktów internetowych.</b>"},"section_3":{"header":"Cele Zrównoważonego Rozwoju ONZ","body":"Agenda celów Zrównoważonego Rozwoju ONZ 2030 to „drogowskaz” dla każdej inicjatywy z obszaru zrównoważonego rozwoju.","logo_vertical":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/cele-vertical.svg","logo_horizontal":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/cele-horizontal.svg","card_1_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/1.svg","card_2_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/2.svg","card_3_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/3.svg","card_4_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/4.svg","card_5_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/5.svg","card_6_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/6.svg","card_7_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/7.svg","card_8_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/8.svg","card_9_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/9.svg","card_10_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/10.svg","card_11_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/11.svg","card_12_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/12.svg","card_13_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/13.svg","card_14_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/14.svg","card_15_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/15.svg","card_16_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/16.svg","card_17_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/17.svg"},"section_4":{"header":"Nasze cele","body":"Realizując Cele Zrównoważonego Rozwoju w naszej Strategii ESG stajemy się częścią globalnej społeczności organizacji działających w sposób zrównoważony i odpowiedzialny.","card_1_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/4.svg","card_1_list":["Będziemy walczyć z wykluczeniem cyfrowym"],"card_2_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/5.svg","card_2_list":["Zapewnimy środowisko pracy szanujące równość i różnorodność","Utrzymamy dobre relacje z instytucjami finansowymi"],"card_3_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/7.svg","card_3_list":["Będziemy korzystać wyłącznie z energii z zero- i niskoemisyjnych źródeł energii"],"card_4_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/8.svg","card_4_list":["Zadbamy o dobrostan pracowników","Zapewnimy konkurencyjne i rozwojowe warunki pracy"],"card_5_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/10.svg","card_5_list":["Zadbamy o niewykluczający język przekazu w naszych serwisach","Będziemy bezpiecznym miejscem w sieci"],"card_6_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/12.svg","card_6_list":["Zwiększymy poziom odzysku sprzętu IT wycofanego z użycia","Podniesiemy świadomość konsumentów publikując w serwisach informacyjne treści dotyczące zmiany klimatu","Ułatwimy klientom dostęp do usług i produktów zrównoważonych"],"card_7_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/13.svg","card_7_list":["Zredukujemy emisje gazów cieplarnianych","Podniesiemy poziom efektywności energetycznej data centers i budynków","Będziemy korzystali wyłącznie z energii z zero- i niskoemisyjnych źródeł energii","Podniesiemy świadomość konsumentów publikując w serwisach informacyjnych treści dotyczące zmiany klimatu"],"card_8_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/15.svg","card_8_list":["Przeprowadzimy działania, których efektem będzie wywarcie pozytywnego wpływu na bioróżnorodność"],"card_9_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/pl/16.svg","card_9_list":["Zadbamy o zapewnienie najwyższych standardów rzetelności informacji"]},"section_5":{"title":"Nasze działania","button":"zobacz więcej"},"section_ethics":{"header":"Etyczne działanie to dla nas podstawa we wszystkich relacjach zewnętrznych i wewnętrznych.","content":"We wszystkim co robimy, kierujemy się wartościami i przepisami prawa. Dbamy o to, aby nasze działania były dobre dla nas jako ludzi, firmy i społeczeństwa."},"section_diversity":{"diversity_header":"Różnorodność to nasza siła","diversity_body1":"Chcemy tworzyć i promować różnorodne środowisko pracy. Jesteśmy różni i pojmujemy to jako ogromną wartość, na podstawie której tworzymy kulturę organizacyjną. Równe traktowanie i wzajemny szacunek są jej filarami.","diversity_body2":"Współpracujemy i akceptujemy się bez względu na płeć, przynależność rasową, przynależność narodową i etniczną, religię, światopogląd, stopień i rodzaj niepełnosprawności, stan zdrowia czy wiek, ani nic innego w czym możemy być odmienni.","diversity_box_title":"Polityka różnorodności","diversity_box_text":"Polityka określa reguły postępowania w Spółce w zakresie zarządzania ryzykiem dyskryminacji i w aspekcie poszanowania różnorodności. Uwzględnia zasady, które obowiązują w WP i dotyczy wszystkich pracowników.","diversity_box_attachment":"https://holding.wpcdn.pl/uploader/Polityka_roznorodnosci_WPH_24062022.pdf","diversity_box_button":"Pobierz","diversity_carousel_header":"Jak wspieramy różnorodność?","diversity_carousel_items":[{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-1.svg","title":"Stosujemy przejrzyste kryteria rekrutacji","content":"Rekrutując pracowników stosujemy zasadę równości szans. Najważniejsze jest dla nas dopasowanie kompetencji kandydata do zakresu obowiązków.","name":"item1"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-2.svg","title":"Budujemy różnorodne zespoły","content":"Zapewniamy równe szanse – każdy pracownik ma taki sam dostęp do szkoleń, rozwoju, benefitów oraz sprawiedliwego wynagrodzenia.","name":"item2"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-3.svg","title":"Dbamy o dobrostan pracowników","content":"Wychodzimy naprzeciw oczekiwaniom w celu zapewnienia równowagi między życiem zawodowym a prywatnym naszych pracowników, wspieramy ich działalność charytatywną. Reagujemy i pomagamy.","name":"item3"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-4.svg","title":"Tworzymy środowisko pracy przyjazne dla wszystkich","content":"Nikogo nie dyskryminujemy ani nie faworyzujemy. Szkolimy na temat nieuświadomionych uprzedzeń, inkluzywnej komunikacji, różnic międzypokoleniowych, interkulturowości.","name":"item4"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-5.svg","title":"Aktywnie przeciwdziałamy mobbingowi i dyskryminacji","content":"Mamy ustalony system przeciwdziałania oraz zapobiegania niepożądanym zachowaniom i procedurę zgłaszania nieprawidłowości w tym zakresie, również anonimowo.","name":"item5"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-6.svg","title":"Należymy do inicjatyw na rzecz różnorodności","content":"Jesteśmy sygnatariuszem Karty Różnorodności oraz członkiem United Nations Global Compact i  30% Club Poland.","name":"item6"}],"diversity_signatory":"Jesteśmy partnerem:"}}},"en":{"seo":{"title":"Sustainable development","desc":"The three pillars of our Sustainable Development Strategy"},"content":{"header":{"title":"The three pillars of our Sustainable Development Strategy","element_1_html":"Positive impact on climate and environment","element_2_html":"Independence, journalistic ethics, network security","element_3_html":"Highest standards of management and supervision"},"section_1":{"heading_html":"<span>We are aware</span> of the enormous environmental, social and corporate governance challenges.","body_html":"We know the impact we have on the environment and the impact the environment has on us. We have ambitious targets for the coming years regarding the share of green energy and the reduction of greenhouse gas emissions. Their implementation will ensure that running our business will be entirely <span>&#8222;green&#8220;</span>."},"section_2":{"body_1_html":"Independent journalism is the foundation of democracy. It should be based on the pillars of free and genuine public debate, full access to information and the fight against disinformation and its negative effects.<br /><br /><b>Independent media exercise a controlling function, guarding democracy and the rule of law.</b>","body_2_html":"As a company operating in the media and internet industry, we consider it our duty to contribute to the development of ethical business practices and do our part in creating, promoting and supporting stringent ethical standards.<br /><br /><b>Our mission is to provide millions of users with reliable information and sustainable online services and products.</b>"},"section_3":{"header":"UN Sustainable Development Goals","body":"The UN 2030 Agenda for Sustainable Development is the &#8222;signpost&#8220; for any sustainability initiative.","logo_vertical":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/cele-vertical.svg","logo_horizontal":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/cele-horizontal.svg","card_1_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/1.svg","card_2_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/2.svg","card_3_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/3.svg","card_4_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/4.svg","card_5_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/5.svg","card_6_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/6.svg","card_7_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/7.svg","card_8_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/8.svg","card_9_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/9.svg","card_10_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/10.svg","card_11_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/11.svg","card_12_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/12.svg","card_13_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/13.svg","card_14_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/14.svg","card_15_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/15.svg","card_16_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/16.svg","card_17_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/17.svg"},"section_4":{"header":"Our strategic objectives","body":"By meeting the Sustainable Development Goals in our ESG Strategy, we become part of a global community of organizations that operate in a sustainable and responsible manner.","card_1_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/4.svg","card_1_list":["We will fight against digital exclusion"],"card_2_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/5.svg","card_2_list":["We will provide a work environment that respects equality and diversity","We will maintain good relationships with financial institutions"],"card_3_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/7.svg","card_3_list":["We will use only zero- and low-carbon energy sources"],"card_4_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/8.svg","card_4_list":["We will take care of our employees\' well-being","We will provide competitive and developmental working conditions"],"card_5_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/10.svg","card_5_list":["We will ensure non-exclusionary language in our services","We will be a safe place online"],"card_6_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/12.svg","card_6_list":["We will increase the recovery rate of end-of-life IT hardware","We will raise consumer awareness by publishing climate change content in news services","We will make it easier for customers to access sustainable services and products"],"card_7_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/13.svg","card_7_list":["We will reduce greenhouse gas emissions","We will increase the energy efficiency of data centers and buildings","We will use only zero- and low-carbon energy sources","We will raise consumer awareness by publishing climate change content in news services"],"card_8_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/15.svg","card_8_list":["We will carry out activities that will result in a positive impact on biodiversity"],"card_9_image":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/en/16.svg","card_9_list":["We will ensure the highest standards of information integrity"]},"section_5":{"title":"Our actions","button":"see more"},"section_ethics":{"header":"Ethical action is the basis for us in all external and internal relationships.","content":"In everything we do, we are guided by values and legal provisions. We make sure that our actions are good for us as people, a company and society."},"section_diversity":{"diversity_header":"Diversity is our strength","diversity_body1":"We want to create and promote a diverse work environment. We are different, and we see this as a great value, on the basis of which we create our organizational culture. Equal treatment and mutual respect are its pillars.","diversity_body2":"We cooperate and accept each other without regard to gender, race, national and ethnic origin, religion, belief, degree or type of disability, medical condition, age or gender identity, or anything else in which we may be different.","diversity_box_title":"Diversity policy","diversity_box_text":"The policy sets out the Company\'s rules of conduct for managing the risk of discrimination and respecting diversity. It takes into account the rules in place in WP and applies to all employees.","diversity_box_attachment":"https://holding.wpcdn.pl/uploader/Diversity_Policy_WPH_24062022.pdf","diversity_box_button":"Download PDF document","diversity_carousel_header":"How do we support diversity?","diversity_carousel_items":[{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-1.svg","title":"We use transparent recruitment criteria","content":"When recruiting employees we apply the principle of equal opportunities. The most important thing for us is to match the candidate’s competencies with the responsibilities.","name":"item1"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-2.svg","title":"We build diverse teams","content":"We provide equal opportunities - every employee has equal access to training, benefits, development and fair compensation.","name":"item2"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-3.svg","title":"We care about the well-being of our employees","content":"We go out of our way to provide a work-life balance for our employees and support their charitable activities. We respond and help.","name":"item3"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-4.svg","title":"We develop a work environment that is welcoming to all","content":"We do not discriminate or favor anyone. We train on unconscious bias, inclusive communication, intergenerational differences and interculturalism.","name":"item4"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-5.svg","title":"We actively counter mobbing and discrimination","content":"We have a system in place to counter and prevent unwanted behaviors and a procedure for reporting irregularities in this area, including anonymously.","name":"item5"},{"icon":"https://holding.wpcdn.pl/img/zrownowazony-rozwoj/diversity-icon-6.svg","title":"We belong to diversity initiatives","content":"We are a signatory to the Diversity Charter and a member of the United Nations Global Compact and 30% Club Poland.","name":"item6"}],"diversity_signatory":"We are a signatory of:"}}}}'),delete t.options._Ctor}},479:function(t,e,n){},480:function(t,e,n){}}]);                  <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/biznes-klasa.html">Biznes Klasa</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/program-money.html">Program Money</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/nagroda-money/2023/">Nagroda Money</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/pomys%C5%82-na-dom.html">Pomys� Na Dom</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/stangospodarki/">Stan gospodarki</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/wybory2023/">Wybory parlamentarne 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://wybory2023.money.pl/licznik-obietnic-wyborczych">Obietnice wyborcze 2023</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="/#" rel="nofollow">Wydarzenia</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/impact/">Impact</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/kongres-590/">Kongres 590</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/forumekonomiczne2023">Forum Ekonomiczne</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/szczytklimatyczny/">Szczyt Klimatyczny Togetair</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/zapytaj-notariusza/">Zapytaj Notariusza</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/krynicaforum2022/">Krynica Forum 2022</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/krynicaforum2023/">Krynica Forum 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/nieruchomosci-online.pl/">Rynek nieruchomo�ci - INPON 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/wyzszypoziomchmury/">Wy�szy poziom chmury</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/cybersec-forum/">Cybersec Forum</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/polskamocbiznesu/">Kongres ESG Polska Moc Biznesu</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/eksit/">II Europejski Kongres Sportu I Turystyki</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
        <li id="dropdownMore"><a href="#">Wi�cej</a>
        <div class="menu-secondary subMenyWrapper" id="menuSecondary">
            <div class="menu-secondary__content">
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/podatki/">Podatki</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/wiadomosci/">Wiadomo�ci podatkowe</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/pit/">Pit</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/formularze/">Formularze podatkowe</a></li>
                                                        <li class="column-entry"><a href="https://msp.money.pl/znajdz_adres/">Znajd� Adres</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/poradniki/">Poradniki podatkowe</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://prawo.money.pl/">Prawo</a></div>
                                                        <li class="column-entry"><a href="https://prawo.money.pl/aktualnosci/wiadomosci/">Wiadomo�ci</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://direct.money.pl/">Twoje finanse (REKLAMA)</a></div>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/fundusze/">Fundusze</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/profile/">Profile funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/profile/wyszukiwarka/">Wyszukiwarka fundusz</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/kalkulator/zysk/">Stopa zwrotu z funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/kalkulator/prowizje/">Kalkulator prowizji</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/porownanie/">Kalkulator zysku</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/archiwum/fundusze/">Archiwum Funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/wiadomosci/">Wiadomo�ci</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/banki/">Banki</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/banki/poradniki/">Poradniki</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/ubezpieczenia/">Ubezpieczenia</a></div>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/emerytury/">Emerytury</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/emerytury/poradniki/">Poradniki</a></li>
                                                </ul>
                            </div>
        </div>
    </li>
</nav>

<form class="header-bottom__search" id="header-form-search" action="http://www.money.pl/wyszukiwarka/" method="get" onsubmit="WP.cookie.set('nhs', 1, new Date(new Date().setMinutes(new Date().getMinutes() + 1)), '/wyszukiwarka/', 'www.money.pl');
        return true">
    <div class="wrapperSearch">
        <input class="search-input" type="text" placeholder="Szukaj..." value="" name="q">
        <input class="search-submit" type="submit" value="" name="search">
        <svg version="1.1" width="8" height="8" x="0px" y="0px" viewBox="0 0 20.1 15.5">
        <path d="M114.5,19 L113.71,19 L113.43,18.73 C114.41,17.59 115,16.11 115,14.5 C115,10.91 112.09,8 108.5,8 C104.91,8 102,10.91 102,14.5 C102,18.09 104.91,21 108.5,21 C110.11,21 111.59,20.41 112.73,19.43 L113,19.71 L113,20.5 L118,25.49 L119.49,24 L114.5,19 L114.5,19 Z M108.5,19 C106.01,19 104,16.99 104,14.5 C104,12.01 106.01,10 108.5,10 C110.99,10 113,12.01 113,14.5 C113,16.99 110.99,19 108.5,19 L108.5,19 Z" transform="translate(-102 -8)"></path>
        </svg>
    </div>
</form>
<a class="user-login" href="https://konto.money.pl/login.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="#FFFFFF" d="M1255,89 C1256.10476,89 1257,89.8952381 1257,91 C1257,92.1047619 1256.10476,93 1255,93 C1253.89524,93 1253,92.1047619 1253,91 C1253,89.8952381 1253.89524,89 1255,89 L1255,89 Z M1255,98 C1257.92131,98 1261,99.36875 1261,99.96875 L1261,101 L1249,101 L1249,99.96875 C1249,99.36875 1252.07869,98 1255,98 L1255,98 Z M1255,87 C1252.79,87 1251,88.79 1251,91 C1251,93.21 1252.79,95 1255,95 C1257.21,95 1259,93.21 1259,91 C1259,88.79 1257.21,87 1255,87 L1255,87 Z M1255,96 C1252.33,96 1247,97.34 1247,100 L1247,103 L1263,103 L1263,100 C1263,97.34 1257.67,96 1255,96 L1255,96 Z" transform="translate(-1247 -87)"></path>
    </svg>
</a>	</section>
</header>

<script>
function apiContentBox(e){if(0===$("#"+e.id).length){var i=e.id,t=e.url,o="string"==typeof e.image?e.image:widthPage(e.image),a="string"==typeof e.width?e.width:e.width+"px",r="string"==typeof e.height?e.height:e.height+"px",d=!0===e.scalable?"cover":"",n=!0===e.fixed?"fixed":"absolute",g=!0===e.repeat?"repeat":"no-repeat",p=e.backgroundColor,s="number"==typeof e.offsetTop?e.offsetTop:widthPage(e.offsetTop),f='<div id="'+i+'" style="position: relative;"><div style="top: '+s+"px;left: 0px; z-index: -1; position: "+n+"; background-position: 50% 0px; background-color: "+p+"; background-repeat: "+g+"; background-image: url(&quot;"+o+"&quot;); background-size: "+d+";width: "+a+";height: "+r+';"><a  href="'+t+'" target="_blank" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; "></a></div></div>'
		$("body").css({position:"relative","z-index":-1}),$("#mainHeader").before(f).parent().css({position:"relative","z-index":-1}),$(window).resize(function(){"string"!=typeof e.image&&$("#"+i+" > div").css({"background-image":"url("+widthPage(e.image)+")"})})}}function widthPage(e){var i=$("#mainHeader").outerWidth(!0)
		return i<=1200?e.narrow:i<1600?e.medium:e.wide}
</script>

<div style="width:975px;text-align:center;position:relative;margin:5px auto;padding:0;min-height:180px">
            <div class="g65c5114d2ee84"></div>
            <script>
            try {
                WP.gaf.registerSlot(3, '.g65c5114d2ee84');
            } catch(e) {};
            </script>
        </div>
<div id="w_pt"><span class="p0 m0 t11n"><a href="http://www.money.pl">Money.pl</a><a href="/">Firma</a></span><span>Znajd� adres</span></div>
<div class="msp_c3 adsize_content">

<!-- left begin --------------------- -->
<div class="left">

<div class="msp_menu bb15"><ul><li><h3><a href="http://msp.money.pl/znajdz_adres/oddzialy_zus/">Oddzia�y ZUS</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/urzedy_skarbowe/">Urz�dy skarbowe</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/doradcy-podatkowi/">Doradcy podatkowi</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/sady/">S�dy</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/krus/">KRUS</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/izby-gospodarcze/">Izby gospodarcze</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/wspieranie-eksportu/">Wspieranie eksportu</a></h3>
</li><li><h3><a href="http://msp.money.pl/znajdz_adres/kancelarie-patentowe/">Kancelarie patentowe</a></h3>
</li></ul></div><div class="msp_menu bb15" style="margin-top:-16px;"><ul><li><h3><a style="color:#15459C;" href="http://msp.money.pl/szkolenia/">Szkolenia</a></h3></li><li><h3><a style="color:#15459C;" href="http://www.money.pl/rejestr-firm/#utm_source=msp.money.pl&utm_medium=referral&utm_term=menu_left_link&utm_campaign=rejestrfirm_menu_left">Rejestr firm</a></h3></li><li><h3><a style="color:#15459C;" href="http://msp.money.pl/firma-w-internecie/#utm_source=msp.money.pl&utm_medium=referral&utm_term=menu_left_link&utm_campaign=domeny_menu_left">Domena i hosting</a></h3></li><li><h3><a style="color: rgb(202, 52, 52);" href="http://direct.money.pl/ideabank/610/">Kredyty dla firm</a></h3></li><li><h3><a style="color: rgb(202, 52, 52);" href="http://direct.money.pl/kontafirmowe/">Konto firmowe</a></h3></li></ul></div><div id="mnyboxa">

            <div class="u65c5114d2ef81"></div>
            <script>
            try {
                WP.gaf.registerSlot(24, '.u65c5114d2ef81');
            } catch(e) {};
            </script>
        </div>


<div class="box_newsletter">
<form name="egazety" method="post" action="https://www.money.pl/egazety/">
<div><h6>ZAPISZ SI� NA BEZP�ATNY NEWSLETTER</h6>

<input class="ina t11n" maxlength="50" style="width: 112px;height:16px" name="email" value="wpisz&nbsp;adres&nbsp;e-mail" onclick="this.value='';" /><br />
<input value="Zam�w" name="search" class="msp_but1 m0 mt5" type="submit" />
<br /><br />
<a href="https://www.money.pl/egazety/archiwum/firma,2008.html" class="t11n next">Archiwum e-gazet</a>

<input type="hidden" name="dziennik" value="false" />
<input type="hidden" name="tygodnik" value="false" />
<input type="hidden" name="firma" value="true" />
<input type="hidden" name="emagazyn" value="false" />
<input type="hidden" name="praca" value="false" />
<input type="hidden" name="dom" value="false" />
<input type="hidden" name="moto" value="false" />
</div>
</form>

</div>


</div>

<!-- center begin --------------------- -->

<div class="center">
      <!-- search_engine_begin -->
<div class="msp_hd3"><h3>Aktualne dane teleadresowe, raport o firmach</h3></div>

<p>
<b><a href="/znajdz_adres/oddzialy_zus/">Oddzia�y ZUS</a>	</b> - pe�na baza oddzia��w Zak�adu Ubezpiecze� Spo�ecznych w Polsce. Oddzia�y posortowane wed�ug wojew�dztw i miast.
</p>

<p>
<b><a href="/znajdz_adres/urzedy_skarbowe/">Urz�dy Skarbowe</a></b> - pe�na baza oddzia��w Urz�d�w Skarbowych w Polsce. Oddzia�y posortowane wed�ug wojew�dztw i miast.
</p>

<p>
<b><a href="/znajdz_adres/doradcy-podatkowi/">Doradcy podatkowi</a></b> - pe�na baza doradc�w podatkowych w Polsce. Znajd� doradc� w swoim mie�cie..
</p>

<p>
<b><a href="/znajdz_adres/sady/">S�dy</a></b> - pe�na baza S�d�w administracyjnych, apelacyjnych i okr�gowych w Polsce. Oddzia�y posortowane wed�ug wojew�dztw i miast.
</p>

<p>
<b><a href="/znajdz_adres/krus/">Oddzia�y KRUS</a></b> - pe�na baza oddzia��w Kasy Rolniczego Ubezpieczenia Spo�ecznego w Polsce. Oddzia�y posortowane wed�ug miast i wojew�dztw.
</p>

<p>
<b><a href="/znajdz_adres/informacja_gospodarcza/">Raporty o firmach</a></b> - raporty handlowe zawieraj�ce kluczowe informacje dla ka�dej firmy.
</p>


<div style="text-align: center;">

	<form method="get">
	
		<select name="dane_teleadresowe_select">
			<option value="urzedy_skarbowe">Urz�dy Skarbowe</option>
			<option value="oddzialy_zus">Oddzia�y ZUS</option>
			<option value="doradcy-podatkowi">Doradcy podatkowi</option>
			<option value="sady">S�dy</option>
			<option value="krus">Oddzia�y KRUS</option>
		</select>

		<input type="submit" value="Szukaj" class="msp_but2"/>
	
	</form>

	<div id="mapka" style="margin-top: 15px;">
			</div>

</div>
      <!-- search_engine_end -->

</div>

<!-- right begin --------------------- -->
<div class="right">
<div class="sep15"></div><div id="2671465c5114d2fabb">
            <div class="t65c5114d2fb06"></div>
            <script>
            try {
                WP.gaf.registerSlot(37, '.t65c5114d2fb06');
            } catch(e) {};
            </script>
        </div><div class="sep"></div>
<div class="msp_hd2" style="width:300px;"><h3>Polecamy produkty dla firm</h3></div>
    <div class="box_2b" style="width:289px;">
      <div class="wbl">
        <ul style="width: 47%;" class="msp_ul1b fl">
          <li><a href="http://msp.money.pl/uslugi/info/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=promuj_uslugi">Promuj swoje us�ugi</a></li>
					<li><a href="http://ibroker.pl/pracodawca/multiposting#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=znajdz_pracownika">Skuteczna rekrutacja</a></li>
					<li><a href="https://www.money.pl/rejestr-firm/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=sprawdz_kontrahenta">Raporty o firmach</a></li>
					<li><a href="http://prawo.money.pl/porady-prawne/zamow-opinie/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=opinie_prawne">Porady prawne online</a></li>
					<li><a href="http://msp.money.pl/raporty/">Sklep z Raportami</a></li>
					<li><a href="https://www.money.pl/pieniadze/e-kantor/" rel="nofollow" style="color:#FF9D00;font-weight:bold">E-kantor</a></li>
        </ul>
        <ul style="width: 47%;" class="msp_ul1b fr">
          <li><a href="http://przetargi.money.pl/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=przetargi">Przetargi</a></li>
					<li><a href="http://msp.money.pl/ksiegowosc-internetowa/info/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=e-ksiegowosc">Wygodna ksi�gowo��</a></li>
					<li><a href="http://msp.money.pl/wzory-dokumentow/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=wzory_dokumentow">Wzory dokument�w</a></li>
					<li><a href="http://msp.money.pl/firma-w-internecie/#utm_source=msp.money.pl&utm_medium=referral&utm_term=link_box_right&utm_campaign=domeny_hosting">Domeny i hosting</a></li>
					<li><a href="http://msp.money.pl/bazy/">Sklep z Bazami Danych</a></li>
        </ul>
      </div>
    </div>




<div class="msp_hd3"><h3>PRZYDATNE LINKI</h3><h6></h6></div>

<div class="box_2b">

<div class="wbl">
<ul class="msp_ul1b fl" style="width:47%;">
<li><a href="/wzory-dokumentow/umowa;o;prace,343,3825,dokument.html" class="bld">Umowa o prac�</a></li>
<li><a href="/wzory-dokumentow/umowa;zlecenia,39,3829,dokument.html">Umowa zlecenie</a></li>
<li><a href="/akty_prawne/kodeks_pracy/">Kodeks pracy</a></li>
<li><a href="https://www.money.pl/podatki/kalkulatory/plac/" class="bld">Kalkulator p�ac</a></li>
<li><a href="/kalkulatory_i_wskazniki/wskazniki/wynagrodzenia/" class="bld">Wynagrodzenia</a></li>
<li><a href="/kalkulatory_i_wskazniki/wskazniki/ubezpieczenia/">Sk�adki ZUS</a></li>
</ul>

<ul class="msp_ul1b fr" style="width:47%;">
<li><a href="/kalkulatory_i_wskazniki/wskazniki/diety_krajowe/">Diety krajowe</a></li>
<li><a href="/kalkulatory_i_wskazniki/kalkulatory/diety/">Diety zagraniczne</a></li>
<li><a href="/kalkulatory_i_wskazniki/wskazniki/zasilki/">Zasi�ki</a></li>
<li><a href="/podpis-elektroniczny/">Podpis elektroniczny</a></li>
<li><a href="/wzory-dokumentow/bhp;i;haccp,239,wzory_dokumentow.html">BHP i HACCP</a></li>
<li><a href="/wiadomosci/kadryp/artykul/urlopy;wypoczynkowe,105,0,355177.html">Urlopy</a></li>
</ul>
</div>

</div>
<div class="sep15"></div><div class="sep15"></div>
<div class="onreklama1" id="871465c5114d30109"><div style="text-align:center;" class="reklama">
            <div class="s65c5114d30153"></div>
            <script>
            try {
                WP.gaf.registerSlot(18, '.s65c5114d30153');
            } catch(e) {};
            </script>
        </div></div>
			    <script type="text/javascript">
				jQuery(function() {
				    if(jQuery("#adv18").is(":hidden")) {
					jQuery("#871465c5114d30109").removeClass("onreklama1");
				    }
				});
		        </script>
			
</div>
<!-- right end --------------------- -->
<div id="1581065c5114d30199" style="position: absolute; top: 0px; left: 100%; z-index: 100; margin: 0 0 0 10px; width:160px;">
            <div class="q65c5114d301e2"></div>
            <script>
            try {
                WP.gaf.registerSlot(7, '.q65c5114d301e2');
            } catch(e) {};
            </script>
        </div>	    <script type="text/javascript">
	        /* <![CDATA[ */
	        (function () {
	    	try {
				var skyId = '#1581065c5114d30199';
				var rectId = '#2671465c5114d2fabb';
	    	    var position = {};
	    	    var offset = {};
	    	    var isFixed = false;
	    	    function init() {
	    		position = {top: jQuery(rectId).position().top + jQuery(rectId).height() + 10};
	    		jQuery(skyId).css({top: position.top});
	    		offset = {left: jQuery(skyId).offset().left, top: jQuery(skyId).offset().top - jQuery('#dzialy').height()};
	    	    }
	    	    jQuery(window).scroll(function () {
	    		return;
	    		var scrollTop = jQuery(window).scrollTop();
	    		if (scrollTop > offset.top) {
	    		    if (!isFixed) {
	    			var left = offset.left - parseInt(jQuery(skyId).css('margin-left'));
	    			jQuery(skyId).css({position: "fixed", left: left, top: jQuery('#dzialy').height()});
	    			isFixed = true;
	    		    }
	    		} else {
	    		    if (isFixed) {
	    			jQuery(skyId).css({position: 'absolute', left: '100%', top: position.top});
	    			isFixed = false;
	    		    }
	    		}
	    	    });
	    	    jQuery(window).resize(function () {
	    		jQuery(skyId).css({position: 'absolute', left: '100%', top: position.top});
	    		if (jQuery(window).width() > offset.left) {
	    		    if (isFixed) {
	    			offset.left = jQuery(skyId).offset().left;
	    			jQuery(skyId).css({position: 'fixed', left: offset.left});
	    		    }
	    		}
	    	    });
	    	    init();
	    	    jQuery(function () {
	    		init()
	    	    });
	    	} catch (err) {
	    	}
	        })();
	        /* ]]> */
	    </script>
	</div>



<script>
__mnySiteFnc.push(function() {
	// config dla FB
	window.WPsocial.config('FB', {
		fbAppId : '203880196374936',
		fbNamespace : 'portal.Moneypl',
		fbXfbml : true,
		fbStatus : true,
		fbCookie : true,
		fbLang : 'pl_PL',
		version: 'v2.3',
		fbdebug: false
	});
	window.WPsocial.config('WP', {ignoreLibCss:true });
});
</script>

<div class="container">
<div style="width:976px;margin:0 auto"></div></div>

<footer class="footer money2018">
  <div class="contentWrapper">
    <div class="contentShortcuts">
      <h2 class="title">MONEY.PL na skr�ty</h2>
      <div>
        <a href="https://www.money.pl/emerytury/notowania/">Notowania OFE</a>
        <a href="https://www.money.pl/emerytury/archiwum/fundusze/">Archiwum OFE</a>
        <a href="https://www.money.pl/emerytury/wykresy/">Wykresy OFE</a>
        <a href="https://www.money.pl/emerytury/kalkulator/ofe">Kalkulatory OFE</a>
        <a href="https://www.money.pl/emerytury/kalkulator/prowizje/">Por�wnaj pobierane przez OFE prowizje</a>
        <a href="https://www.money.pl/fundusze/kalkulator/zysk/">Kalkulatory funduszy</a>
        <a href="https://www.money.pl/gospodarka/unia-europejska/statystyka/">PKB w UE</a>
      </div>
      <div>
        <a href="https://www.money.pl/fundusze/notowania/">Notowania funduszy</a>
        <a href="https://www.money.pl/fundusze/notowania/krajowe;-;akcji,-1.html">Krajowe akcji</a>
        <a href="https://www.money.pl/fundusze/wykresy/">Wykresy funduszy</a>
        <a href="https://www.money.pl/fundusze/profile/">Profile funduszy</a>
        <a href="https://www.money.pl/fundusze/prowizje/">Prowizje</a>
        <a href="https://www.money.pl/fundusze/kalkulator/zysk/">Kalkulatory funduszy</a>
        <a href="https://www.money.pl/forum/">Forum</a>
      </div>
      <div>
        <a href="https://www.money.pl/banki/kalkulatory/lokatowy/">Kalkulator lokatowy</a>
        <a href="https://www.money.pl/banki/kalkulatory/koszty/">Kalkulator koszt�w zakupu nieruchomo�ci</a>
        <a href="https://www.money.pl/banki/lokaty/12-miesieczne/">Lokaty 12-miesi�cy</a>
        <a href="http://direct.money.pl/kredytysamochodowe/" class="spons">Kredyty samochodowe</a>
        <a href="http://direct.money.pl/ubezpieczenieauta/" class="spons">Ubezpieczenie auta</a>
        <a href="https://www.totalmoney.pl/energia" class="spons">Energia</a>
        <a href="https://agrobiznes.money.pl/">Agrobiznes</a>
      </div>
      <div>
        <a href="https://msp.money.pl/facebookdlafirm/">Pomys� na biznes z FB</a>
        <a href="https://www.money.pl/rejestr-firm/kody-pocztowe/">Kody pocztowe</a>
        <a href="https://msp.money.pl/wiadomosci/zakladam_firme/">Zak�adam firm�</a>
        <a href="https://msp.money.pl/intel/">Firma Jutra</a>
        <a href="https://www.money.pl/ey-przedsiebiorca-roku/">EY przedsi�biorca roku</a>
        <a href="https://www.money.pl/gospodarka/wskazniki/pkb/">PKB</a>
        <a href="https://www.money.pl/emerytury/poradniki/">Poradniki</a>
      </div>
      <div>
        <a href="https://www.money.pl/podatki/informator/">Informator - stawki</a>
        <a href="https://www.money.pl/podatki/kalkulatory/odsetkowy/">Kalkulator odsetkowy</a>
        <a href="https://www.money.pl/podatki/kalkulatory/diety/">Diety zagraniczne</a>
        <a href="https://www.money.pl/podatki/urzedy/">Urz�dy skarbowe</a>
        <a href="https://www.money.pl/podatki/zus/">Baza ZUS</a>
        <a href="https://www.money.pl/fundusze/edukacja/">ABC funduszy</a>
        <a href="https://www.money.pl/portfel/">Portfel inwestycyjny</a>
      </div>
      <div>
        <a href="https://www.money.pl/quizy/">Quizy</a>
        <a href="https://manager.money.pl/foto-news/">Galerie</a>
        <a href="https://www.money.pl/zwiazek-miast-polskich/">Zwi�zek Miast Polskich</a>
        <a href="https://tech.money.pl/">Technologie</a>
        <a href="https://moto.money.pl/">Motoryzacja</a>
        <a href="https://www.totalmoney.pl/konta_firmowe" class="spons">Konta firmowe</a>
        <a href="http://direct.money.pl/kredyty-na-start/" class="spons">Kredyty na start</a>
      </div>
    </div>
    <div class="topFooterDesktop">
      <h2 class="title">MONEY.PL</h2>
      <div class="item1">
        <a href="//onas.wp.pl/">O nas</a>
        <a href="//reklama.wp.pl/">Reklama</a>
        <a href="https://www.totalmoney.pl/o-nas" class="spons">eCommerce finansowy</a>
        <a href="//www.money.pl/inne/mapa/">Mapa serwisu</a>
      </div>
      <div class="item2">
        <a href="https://onas.wp.pl/zasady.html">Regulamin</a>
        <a href="https://onas.wp.pl/poufnosc.html?ticaid=11aa0b">Polityka prywatno�ci</a>
        <a href="https://pomoc.wp.pl/">Kontakt</a>
        <a href="https://pomoc.wp.pl/">Pomoc</a>
      </div>
      <div class="item3">
        <a href="/archiwum/data/">Archiwum wg dat</a>
        <a href="https://www.money.pl/archiwum/autor/">Archiwum wg autor�w</a>
        <a href="//www.money.pl/webmaster/">Dla webmaster�w</a>
        <a href="//www.money.pl/rss/">RSS</a>
      </div>
      <div class="logoPartner">
        <a class="linkDefault" href="//www.businessclick.com/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo-businessclick.png" alt="BusinessClick">
          </figure>
        </a>
        <a class="linktotalMoney" href="//www.totalmoney.pl/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo_porownywarka.png" alt="TotalMoney.pl">
          </figure>
        </a>
        <a class="linkMoneyToMoney" href="//www.money2money.com.pl/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo-money2money.png" alt="Money2Money">
          </figure>
        </a>
        <div style="text-align:center;width: 190px;">(REKLAMA)</div>
      </div>
      <div class="socialMediaDeksktop">
        <a class="socialLink" href="https://www.facebook.com/portal.Moneypl">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
            <path class="FB" fill="#333333" d="M13.7,24.9h3.7V16h2.5l0.3-3.1h-2.8l0-1.5c0-0.8,0.1-1.2,1.2-1.2h1.5V7.1h-2.5c-2.9,0-4,1.5-4,4v1.8h-1.8V16h1.8V24.9L13.7,24.9z"></path>
          </svg>
        </a>
        <a class="socialLink" href="https://twitter.com/money_pl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none">
              <path fill="#FFFFFF" d="M16,31.625 C7.384,31.625 0.375,24.615 0.375,16 C0.375,7.385 7.384,0.375 16,0.375 C24.615,0.375 31.625,7.385 31.625,16 C31.625,24.615 24.615,31.625 16,31.625 Z"></path>
              <path class="twiter" fill="#333333" d="M18.226,8.886 C16.636,9.465 15.631,10.957 15.745,12.59 L15.783,13.22 L15.147,13.143 C12.832,12.847 10.809,11.844 9.091,10.159 L8.251,9.323 L8.036,9.94 C7.578,11.316 7.871,12.77 8.825,13.748 C9.334,14.288 9.219,14.365 8.342,14.044 C8.037,13.941 7.769,13.864 7.744,13.903 C7.655,13.993 7.96,15.163 8.202,15.627 C8.533,16.271 9.207,16.9 9.945,17.274 L10.569,17.57 L9.83,17.581 C9.118,17.581 9.092,17.594 9.169,17.865 C9.423,18.701 10.428,19.589 11.548,19.975 L12.337,20.245 L11.65,20.657 C10.632,21.25 9.436,21.584 8.24,21.608 C7.667,21.621 7.196,21.672 7.196,21.711 C7.196,21.839 8.749,22.559 9.651,22.843 C12.361,23.679 15.58,23.318 17.997,21.891 C19.715,20.875 21.432,18.855 22.234,16.899 C22.667,15.858 23.099,13.954 23.099,13.041 C23.099,12.449 23.137,12.372 23.849,11.665 C24.269,11.253 24.663,10.803 24.74,10.675 C24.868,10.43 24.854,10.43 24.206,10.649 C23.125,11.035 22.972,10.984 23.507,10.405 C23.901,9.993 24.372,9.247 24.372,9.029 C24.372,8.991 24.181,9.055 23.965,9.17 C23.736,9.299 23.227,9.492 22.845,9.607 L22.158,9.826 L21.535,9.4 C21.191,9.169 20.709,8.911 20.454,8.834 C19.804,8.654 18.812,8.68 18.226,8.886 Z"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="bottomFoterDesktop">
      <div>
        <a class="linkONas" href="//onas.wp.pl/">MONEY.PL JEST CZʦCI� GRUPY WIRTUALNA POLSKA</a>
      </div>
      <p class="copyRight">&copy; <!-- -->2018<!-- --> WIRTUALNA POLSKA MEDIA S.A.</p>
    </div>
  </div>
</footer>


<script>
	 	jQuery(function() {
 		if (window.money) window.money.initMainMenu();
 	});

 	jQuery('.xmobile :contains("Czytaj wi�cej w")').parent('.xmobile').hide();

if (WP.$('.modliszka-config').length == 1 && WP.$('article .like-us').length == 1) {
    WP.$('.modliszka-config').parents('.playertv_box').before(WP.$('article .like-us'))
}

if (jQuery('article .exchange-live-widget').length>0 && jQuery('article .like-us').length>0 && (jQuery('article .exchange-live-widget').offset().top+jQuery('article .exchange-live-widget').outerHeight()-jQuery('article .like-us').offset().top > 0)) {
	jQuery('article .exchange-live-widget').hide();
}
</script>
 <style>
	article .n_takze.xmobile, article .takze.xmobile { display:none !important }
        footer a.spons::before {
            content: 'REKLAMA';
            position: relative;
            top: 3px;
            font-size: 9px;
            line-height: 12px;
            color: #888;
            display: block;
        }
        .footer.money2018 {
            text-align: left;
        }
</style>
</div>





            <div class="p65c5114d302fc"></div>
            <script>
            try {
                WP.gaf.registerSlot(80, '.p65c5114d302fc');
            } catch(e) {};
            </script>
        
            <div class="l65c5114d30346"></div>
            <script>
            try {
                WP.gaf.registerSlot(81, '.l65c5114d30346');
            } catch(e) {};
            </script>
        
            <div class="s65c5114d3038e"></div>
            <script>
            try {
                WP.gaf.registerSlot(82, '.s65c5114d3038e');
            } catch(e) {};
            </script>
        
            <div class="o65c5114d303d7"></div>
            <script>
            try {
                WP.gaf.registerSlot(83, '.o65c5114d303d7');
            } catch(e) {};
            </script>
        
            <div class="l65c5114d30420"></div>
            <script>
            try {
                WP.gaf.registerSlot(84, '.l65c5114d30420');
            } catch(e) {};
            </script>
        
            <div class="k65c5114d3044c"></div>
            <script>
            try {
                WP.gaf.registerSlot(85, '.k65c5114d3044c');
            } catch(e) {};
            </script>
        
    	<!-- Hotjar Tracking Code for http://www.money.pl/#old -->
    	<script>
    	(function(h,o,t,j,a,r){
    		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    		h._hjSettings={hjid:764613,hjsv:6};
    		a=o.getElementsByTagName('head')[0];
    		r=o.createElement('script');r.async=1;
    		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    		a.appendChild(r);
    	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    	</script>
      </body>
</html>