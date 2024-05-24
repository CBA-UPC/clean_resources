/*!
 * (c) Copyright Adnami ApS, all rights reserved.
 * 
 * Package: @adnami.io/adsm.macro.dfaef7f9-16ee-4c11-8b4d-93243b778602.js
 * Version: 1.0.5
 * Date:    2023-08-18T07:26:53.311Z
 * 
 */![function(e,t){e.exports=[{selector:'img[src^="//match.adsrvr.org"]',styles:"display:none;"},{selector:"img.native-ads-pixel-tracker",styles:"display:none;"},{selector:"#adform-wallpaper-left,#adform-wallpaper-right",styles:"display:none;"},{selector:".adsm-skin #takeover",styles:"position:relative;"},{selector:".adsm-skin .ad-placeholder__inner.top-slot>div>span",styles:"display:none !important;"},{selector:".adsm-wallpaper,#adsm-skin-container",styles:"max-width:unset !important;"},{selector:".adsm-skin .adsm-wallpaper",styles:"top:0 !important;"},{selector:".adsm-skin .adsm-skin-banner-parent",styles:"position:relative !important;padding:unset !important;min-height:180px !important;"},{selector:"#adsm-skin-container",styles:"position:fixed !important;"},{selector:".adsm-skin .ad-placeholder.ad-placeholder--gutter.ad-placeholder--right,.adsm-skin .ad-placeholder.ad-placeholder--gutter.ad-placeholder--left",styles:"z-index:-1;"},{selector:".adsm-skin .kskdDiv.kskdCls",styles:"z-index:-1 !important;"},{selector:".adsm-skin main",styles:"background-color:white;max-width:1020px !important;padding:0px 10px;padding-top:12px;position:relative;"},{selector:".adsm-skin .partner.takeover",styles:"margin-bottom:unset !important;padding:0px 14px;max-width:1020px !important;background-color:white;"},{selector:".adsm-skin footer",styles:"position:relative !important;max-width:1020px !important;margin-top:unset !important;"},{selector:'.adsm-skin.adsm-skin-generic .ad-placeholder--billboard.ad-placeholder--bottom:not([data-view="mobile"]),.adsm-skin #div-gpt-ad-bottom-slot',styles:"background-color:white;width:1020px;margin:0 auto;position:relative;display:block;max-width:unset;"},{selector:".adsm-skin .ad-placeholder.ad-placeholder--billboard.ad-placeholder--top",styles:"width:1020px !important;"},{selector:".adsm-skin .adsm-skin-banner-parent",styles:"width:1020px !important;top:unset !important;"},{selector:".adsm-skin #takeover",styles:"display:none !important;"},{selector:".adsm-skin.adsm-skin-seamless .ad-placeholder__inner.gpt.top-slot>div",styles:"background:unset !important;"},{selector:".adsm-skin .mod-pancakes",styles:"top:-30px !important;padding:20px 20px 0px !important;"},{selector:".adsm-skin .ad-placeholder.ad-placeholder--billboard.ad-placeholder--top.fixed-slots-top-in-article,.adsm-skin .adsm-skin-banner-parent",styles:"transition:unset !important;transform:unset !important;background:unset !important;"},{selector:".adnm-html-topscroll-frame-wrapper,.adnm-topscroll-container-wrapper",styles:"max-width:unset !important;"},{selector:".adnm-topscroll .ad-placeholder.ad-placeholder--right,.adnm-topscroll .ad-placeholder.ad-placeholder--left",styles:"position:absolute !important;top:83vh !important;transform:unset !important;"},{selector:".adnm-topscroll.adnm-topscroll-100 .ad-placeholder.ad-placeholder--right,.adnm-topscroll.adnm-topscroll-100 .ad-placeholder.ad-placeholder--left",styles:"position:absolute !important;top:103vh !important;transform:unset !important;"},{selector:".adnm-topscroll.adnm-topscroll-fixed .ad-placeholder.ad-placeholder--right,.adnm-topscroll.adnm-topscroll-fixed .ad-placeholder.ad-placeholder--left",styles:"position:fixed !important;top:20px !important;"},{selector:".adnm-topscroll .half-circle-right",styles:"position:absolute !important;top:100vh !important;"},{selector:".adnm-topscroll.adnm-topscroll-fixed .half-circle-right",styles:"position:fixed !important;top:45% !important;"},{selector:".adnm-interscroll-parent,.adnm-interscroll-parent>div",styles:"height:auto !important;max-height:unset !important;"},{selector:".adnm-interscroll-parent-small",styles:"height:auto !important;"},{selector:".adnm-interscroll-parent-small .adnm-desktop-interscroll",styles:"width:992px !important;transform:translateX(135px) !important;"},{selector:".adnm-interscroll-parent-small .adnm-desktop-interscroll .adnm-desktop-interscroll-wallpaper",styles:"transform:translateX(-135px) !important;"},{selector:".adnm-html-interscroll .ad-placeholder--mpu.ad-placeholder--in-article",styles:"height:auto;"},{selector:".adnm-html-outstream-desktop #div-gpt-ad-vip-slot,.adnm-html-outstream #div-gpt-ad-vip-slot",styles:"height:auto !important;"}]},function(e,t,n){var o=n(6).functions.cloneCert;unction a(){const e=document.querySelector("html"),t=document.querySelector(".adnm-topscroll-container-wrapper")||document.querySelector(".adnm-html-topscroll-frame-wrapper");e&&t&&t.getBoundingClientRect().bottom<0?e.classList.add("adnm-topscroll-fixed"):e&&e.classList.remove("adnm-topscroll-fixed")}var i=n(7),s=n(8),l=n(9),d=n(10);e.exports={run:function(){window.adsm=window.adsm||{},window.adsm.certifications=window.adsm.certifications||[],window.adsm.certifications["adnami-canvas-desktop-topscroll"]={cert:{element:"body"},onDestroy:function(){!function(){var e=document.querySelector("html.adnm-topscroll-mobile");e&&e.classList.remove("adnm-topscroll-mobile");e&&e.classList.remove("adnm-topscroll-fixed")}(),d.removeTopscrollSizeIndicatorClass()},onLoaded:function(){d.addTopscrollSizeIndicatorClass()},onInit:,window.adsm.certifications["adnami-canvas-mobile-topscroll"]=o("adnami-canvas-desktop-topscroll"),window.adsm.certifications["adnami-canvas-mobile-midscroll"]={cert:{},onDestroy:function(){s.removeParentClass()},onLoaded:function(){},onInit:function(e){if(document.querySelector(".i-amphtml-standalone")){e.frameElement.parentNode.parentNode.childNodes.forEach(e=>{"i-amphtml-svc"==e.slot&&""!=e.style.paddingTop&&(e.style.paddingTop="0")})}s.addParentClass(e,3)}},window.adsm.certifications["adnami-midscroll-mobile-sticky"]=o("adnami-canvas-mobile-midscroll"),window.adsm.certifications["adnami-midscroll-desktop"]={cert:{},onDestroy:function(){s.removeParentClass()},onLoaded:function(){},onInit:function(e){s.addParentClass(e,3)}},window.adsm.certifications["adnami-midscroll-doublescreen-desktop"]={},window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onInit=window.adsm.certifications["adnami-midscroll-desktop"].onInit,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onLoaded=window.adsm.certifications["adnami-midscroll-desktop"].onLoaded,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onDestroy=window.adsm.certifications["adnami-midscroll-desktop"].onDestroy,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].cert={},window.adsm.certifications["adnami-canvas-desktop-fluidskin"]={cert:{element:"body",content:".ad-placeholder.ad-placeholder--billboard.ad-placeholder--top",sticky:!0},onDestroy:onLoaded:function(e){i.initSideSkinBannerResizeGeneric(e,2)},onInit:,window.adsm.certifications["adnami-canvas-seamless-skin"]=o("adnami-canvas-desktop-fluidskin"),window.adsm.certifications["adnami-outstream-format"]={cert:{centered:!0,widthOverride:"640px",heightOverride:"360px",maxLoops:1,autoCollapse:!0,inViewPercentage:"50%",enableControls:!0},onDestroy:function(){},onLoaded:function(){},onInit:,window.adsm.certifications["adnami-outstream-mobile"]={cert:{centered:!0,widthOverride:"100vw",heightOverride:"219px",maxLoops:1,autoCollapse:!0,inViewPercentage:"50%",enableControls:!0},onDestroy:onLoaded:onInit:}}},function(e,t){const n="adnm-interscroll-parent";function o(){document.querySelectorAll("."+n).forEach(e=>{e.classList.remove(n)})}const r="adnm-interscroll-creative-parent";let a=null,i=null;e.exports={addParentClass:function(e,t,r=!1){if(!function(e,t){let o=null,a=e;for(;a.parent&&a.parent!==window;)a=a.parent;const i=document.querySelectorAll("iframe");for(let e=0;e<i.length;e++)if(i[e].contentWindow===a){o=i[e].parentNode;break}for(let e=0;e<t;e++)o=o.parentNode,r&&o.classList.add(n);return o.classList.contains(n)||o.classList.add(n),o}(e,t))return o(),console.error("Could not find format parent element")},removeParentClass:o,autoHeightParents:function(e){a=document.createElement("style"),document.head.appendChild(a),a.innerHTML=`.${r} { height: auto !important; max-height: unset !important; display: block !important }`,function(e){let t=null,n=e;for(;n.parent&&n.parent!==window;)n=n.parent;const o=document.querySelectorAll("iframe");for(let e=0;e<o.length;e++)if(o[e].contentWindow===n){t=o[e].parentNode;break}i=t.offsetHeight,t=t.parentNode;for(;"body"!==t.tagName.toLowerCase();)t.offsetHeight<i&&t.classList.add(r),t=t.parentNode}(e)},removeAutoHeightParents:function(){document.querySelectorAll("."+r).forEach(e=>{e.classList.remove(r)}),a&&a.parentElement.removeChild(a)}}},);