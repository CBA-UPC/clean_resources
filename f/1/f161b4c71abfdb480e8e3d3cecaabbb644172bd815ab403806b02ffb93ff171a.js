(self.webpackChunkaem_module_ui_frontend=self.webpackChunkaem_module_ui_frontend||[]).push([[9013],{9013:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:);var n=e(2749),o=e(9755),i=e.n(o),s=e(7510),l=e(6611);class d extends n.Z{constructor(t){super(t),this.$navButtons=i()(this.$cmp).find(d.S_NAV_BUTTON),this.$panels=i()(this.$cmp).find("[data-panel-id]"),this.$dataAnalyticIdStr="data-analytics-id",this.$linkOnFocusVisible=".cmp-desktop-nav a:focus-visible",this.$navButtons.on("mouseenter click",this.selectHandler.bind(this)),s.EventBusInstance.on(l.events.cuda.horizontalTab.openPanel,(t=>{const a=t.detail;this.showPanelById(a.panelId)})),this.setComponentPanelHeight(),this.showPanelById("0"),i()(".cmp-desktop-nav").each(((t,a)=>{const e=i()(a).find(".cmp-desktop-nav__panel").length;i()(a).find(".cmp-desktop-nav__panel").attr("data-total-no-of-panels",e)})),i()(".cmp-header__bottom-menu__list__item-link").on("keydown",(),i()(".cmp-horizontal-tab__panel a").each(((t,a)=>{const e=i()(a);this.processAnchor(e)})),i()(".cmp-desktop-nav__panel__footer a").each(((t,a)=>{const e=i()(a);this.processAnchor(e)})),i()(".cmp-desktop-nav__panel").each((function(t,a){const e=i()(this).data("nav-panel-id");i()(this).find('[data-analytics-id="header"]').attr("data-nav-group-map",e),i()(this).find(".js-cmp-horizontal-tab__panel-container").attr("data-nav-group-map",e),i()(this).find(".cmp-desktop-nav__panel__footer").attr("data-nav-panel-id-group",e),i()(this).find(".js-cmp-horizontal-tab__navigation__item").attr("data-nav-panel-id-group",e),i()(this).find(".cmp-desktop-nav__panel__container a").attr("data-nav-panel-id-group",e);const n=i()(a).attr("data-total-no-of-panels"),o=i()(a).attr("data-nav-panel-id");let s=0,l=0;if(void 0!==n&&(s=parseInt(n,10)),void 0!==o&&(l=parseInt(o,10)),s===l+1){const t=i()(a).find('[data-analytics-id="header"][href]:last')[0];i()(t).on("keydown",(t=>{"Tab"!==t.key||t.shiftKey||window.setTimeout((()=>{i()(".cmp-header__bottom-menu__list__item-link:first")[0].focus()}),0)}))}})),i()(".cmp-desktop-nav__panel__footer").each(((t,a)=>{const e=i()(a).find('[data-analytics-id="header"]:last'),n=i()(a).attr("data-nav-panel-id-group");let o=0;void 0!==n&&(o=parseInt(n,10));const s=i()(`.cmp-header__bottom-menu__list__item-link[data-nav-panel="${o+1}"]`)[0];e.on("keydown",(t=>{"Tab"!==t.key||t.shiftKey||(t.preventDefault(),s.focus())}))})),i()(".cmp-horizontal-tab__panel").each((function(){const t=i()(this).data("panel-id"),a=i()(this).find(".js-cmp-horizontal-tab__panel-container");let e=a.attr("data-nav-group-map");e=e?`h${e}-v${t}`:t,a.attr("data-nav-group-map",e),i()(this).find('[data-analytics-id="header"]').attr("data-nav-group-map",e),a.attr("for-nav-btn-id",t)})),i()(".cmp-horizontal-tab__container").each(((t,a)=>{const e=i()(a),n=e.find(".cmp-horizontal-tab__panel").length;e.find(".js-cmp-horizontal-tab__panel-container").attr("data-total-no-of-tabs",n)})),i()(".cmp-horizontal-tab__navigation").each(((t,a)=>{const e=i()(a),n=e.find(".cmp-horizontal-tab__navigation__item").length;e.find(".js-cmp-horizontal-tab__navigation__item").attr("data-total-no-of-navs",n)})),i()(".js-cmp-horizontal-tab__navigation__item").each(((t,a)=>{const e=i()(a),n=e.attr("data-total-no-of-navs"),o=e.attr("data-tab-id"),s=e.attr("data-nav-panel-id-group"),l=i()(".cmp-desktop-nav__panel__footer");if(void 0!==n&&void 0!==o&&parseInt(n,10)-1===parseInt(o,10)&&void 0!==s){const t=l.filter(`[data-nav-panel-id-group=${s}]`).find('[data-analytics-id="header"]:first');if(0!==t.length)e.on("keydown",(a=>{"Tab"!==a.key||a.shiftKey||(a.preventDefault(),t.focus())})),t.on("keydown",(t=>{"Tab"===t.key&&t.shiftKey&&(t.preventDefault(),e.focus())}));else{const t=i()(`.cmp-header__bottom-menu__list__item-link[data-nav-panel="${parseInt(s,10)+1}"]`)[0];e.on("keydown",(a=>{"Tab"!==a.key||a.shiftKey||(a.preventDefault(),t.focus())}))}}})),i()(".js-cmp-horizontal-tab__panel-container").each(((t,a)=>{const e=i()(a),n=e.attr("data-nav-group-map"),o=e.attr("data-total-no-of-tabs"),s=e.attr("for-nav-btn-id");let l=0;s&&(l=parseInt(s,10));let d=0;if(d=0,void 0!==o&&l<parseInt(o,10)-1&&(d=l+1),void 0!==n){i()(`[data-analytics-id="header"][data-nav-group-map="${n}"]:last`,e).on("focusout",(t=>{i()(`.js-cmp-horizontal-tab__navigation__item[data-tab-id=${d}]`).focus()}))}})),i()(".cmp-header").on("keyup",(t=>{"Tab"===t.key&&(i()(".cmp-header__bottom-menu__list__item-link").removeAttr("data-focus-on-menu-close"),window.setTimeout((()=>{const t=document.activeElement;let a="",e=i()();"header"===(null==t?void 0:t.getAttribute("data-analytics-id"))||(null==t?void 0:t.classList.contains("js-cmp-horizontal-tab__navigation__item"))?(a=i()(t).attr("data-nav-panel-id-group"),""!==a&&void 0!==a&&(e=i()(`.cmp-header__bottom-menu__list__item-link[data-nav-panel=${a}]`),e.attr("data-focus-on-menu-close","true"))):(null==t?void 0:t.classList.contains("cmp-header__bottom-menu__list__item-link"))&&i()(t).attr("data-focus-on-menu-close","true")}),50))})),i()(".cmp-header").on("keydown",(t=>{"Escape"===t.key&&window.setTimeout((()=>{const t=i()(".cmp-header__bottom-menu__list__item-link.cmp-header__bottom-menu__list__item-link--active")[0];i()(".cmp-desktop-nav__panel.cmp-desktop-nav__panel--show").removeClass("cmp-desktop-nav__panel--show"),i()(".cmp-desktop-nav__overlay").removeClass("cmp-desktop-nav__overlay--active");!0===("true"===i()(t).attr("data-focus-on-menu-close"))&&t.focus(),i()(".cmp-header__bottom-menu__list__item-link.cmp-header__bottom-menu__list__item-link--active").removeClass("cmp-header__bottom-menu__list__item-link--active"),i()(".cmp-header__bottom-menu__list__item-link").attr("aria-expanded","false"),i()(".simple-dropdown__panel").removeClass("simple-dropdown simple-dropdown--show"),i()(".simple-dropdown__toggle").attr("aria-expanded","false"),i()(".cmp-header__bottom-menu__list__item-selector").removeClass("cmp-header__bottom-menu__list__item-selector--active"),this.showOutlineForLink()}),0)}))}hideOutlineForLink(){i()(this.$linkOnFocusVisible).addClass("no-outline")}showOutlineForLinkrocessAnchor(t){var a;t.attr("href")&&""!==(null===(a=null==t?void 0:t.attr("href"))||void 0===a?void 0:a.trim())&&""!==t.html().trim()&&(t.attr(this.$dataAnalyticIdStr)||t.attr(this.$dataAnalyticIdStr,"header")),""===t.html().trim()&&"header"===t.attr(this.$dataAnalyticIdStr)&&t.removeAttr(this.$dataAnalyticIdStr)}getButtonPosition(t){var a;const e=i()(this.$elements.tabIndicator).outerHeight();return(null===(a=t.position())||void 0===a?void 0:a.top)+e/2}selectButton(t){this.unselectButtons(),t.addClass(d.C_NAB_BUTTON_SELECTED),t.attr("aria-current","true")}unselectButtons(){this.$navButtons.removeClass(d.C_NAB_BUTTON_SELECTED),this.$navButtons.attr("aria-current","false")}moveIndicator(t){i()(this.$elements.tabIndicator).css("top",t)}showPanel(t){const a=i()(this.$cmp).find(`[data-panel-id="${t}"]`);this.$panels.removeClass(d.C_PANEL_SHOW),a.addClass(d.C_PANEL_SHOW);a.find('[data-analytics-id="header"]').eq(0)[0].focus()}selectHandler(t){const a=i()(t.currentTarget),e=this.getButtonPosition(a),n=a.data("tabId");this.showPanel(n),this.moveIndicator(e),this.selectButton(a)}showPanelById(t){const a=i()(this.$cmp).find(`[data-tab-id="${t}"]`),e=this.getButtonPosition(a);this.showPanel(t),this.moveIndicator(e),this.selectButton(a)}setComponentPanelHeight(){let t=0;this.$panels.each(((a,e)=>{const n=i()(e).find(d.S_PANEL_CONTAINER);n.length>t&&(t=n.height())})),i()(this.$elements.panelsContainer).css("min-height",`calc(${t}px + 60px)`)}}d.S_NAV_BUTTON=".js-cmp-horizontal-tab__navigation__item",d.S_PANEL_CONTAINER=".js-cmp-horizontal-tab__panel-container",d.C_NAB_BUTTON_SELECTED="cmp-horizontal-tab__navigation__btn--selected",d.C_PANEL_SHOW="cmp-horizontal-tab__panel--show"}}]);